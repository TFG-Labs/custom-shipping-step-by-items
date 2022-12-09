import { clearLoaders } from '../../utils/functions';

export const setDeliveryLoading = () => {
  document.querySelector('.bash--delivery-container').classList.add('shimmer');
};

export const mapGoogleAddress = (addressComponents, geometry) => {
  const streetNumber = addressComponents.find((item) => item.types.includes('street_number'))?.long_name;
  const street = addressComponents.find((item) => item.types.includes('route'))?.long_name;
  const neighborhood = addressComponents.find((item) => item.types.includes('sublocality'))?.long_name;
  const city = addressComponents.find((item) => item.types.includes('locality'))?.long_name;
  const postalCode = addressComponents.find((item) => item.types.includes('postal_code'))?.long_name;
  const state = addressComponents.find((item) => item.types.includes('administrative_area_level_1'))?.long_name;

  const coords = { lat: '', lng: '' };
  if (geometry) {
    coords.lat = geometry.location.lat();
    coords.lng = geometry.location.lng();
  }

  return {
    street: `${streetNumber ?? ''} ${street ?? ''}`.trim(),
    neighborhood,
    city,
    postalCode,
    state,
    ...coords,
  };
};

const provinceShortCode = (province) => {
  switch (province) {
    case 'Select':
      return '';
    case 'Western Cape':
      return 'WC';
    case 'Easter Cape':
      return 'EC';
    case 'Gauteng':
      return 'GP';
    case 'KwaZulu-Natal':
    case 'KwaZulu Natal':
      return 'KZN';
    case 'Northern Cape':
      return 'NC';
    case 'Limpopo':
      return 'LP';
    case 'Mpumalanga':
      return 'MP';
    case 'North West':
      return 'NW';
    case 'Freestate':
    case 'Free State':
      return 'FS';
    default:
      return province;
  }
};

const populateAddressFromSearch = (address) => {
  const { street, neighborhood, postalCode, state, city } = address;

  // Clear any populated fields
  document.getElementById('bash--address-form').reset();

  document.getElementById('bash--input-number').value = '';
  document.getElementById('bash--input-street').value = street;
  document.getElementById('bash--input-neighborhood').value = neighborhood;
  document.getElementById('bash--input-city').value = city;
  document.getElementById('bash--input-postalCode').value = postalCode;
  document.getElementById('bash--dropdown-state').value = provinceShortCode(state);
};

export const populateAddressForm = (address) => {
  console.info('populateAddressForm', { address });
  const { street, neighborhood, postalCode, state, city, receiverName, complement, id } = address;

  // Clear any populated fields
  document.getElementById('bash--address-form').reset();

  // Only overwrite defaults if values exist.
  if (receiverName) document.getElementById('bash--input-receiverName').value = receiverName;
  if (complement) document.getElementById('bash--input-complement').value = complement;

  // addressId indicates that address is being edited / completed.
  if (id) document.getElementById('bash--input-addressId').value = id;

  document.getElementById('bash--input-number').value = '';
  document.getElementById('bash--input-street').value = street;
  document.getElementById('bash--input-neighborhood').value = neighborhood;
  document.getElementById('bash--input-city').value = city;
  document.getElementById('bash--input-postalCode').value = postalCode;
  document.getElementById('bash--dropdown-state').value = provinceShortCode(state);

  // TODO Furniture, Rica fields.
  // Ensure it happens after they are in the DOM.
};

export const initGoogleAutocomplete = () => {
  const input = document.getElementById('bash--input-address-search');
  const autocomplete = new window.google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: 'ZA' },
  });
  window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
    const place = autocomplete.getPlace();
    const { address_components: addressComponents, geometry } = place;

    const address = mapGoogleAddress(addressComponents, geometry);

    // Populate the form
    // Set view to add-address
    populateAddressFromSearch(address);
    window.postMessage({ action: 'setDeliveryView', view: 'address-form' });
  });
};

export const parseAttribute = (data) => JSON.parse(decodeURIComponent(data));

export const addressIsValid = (address) => {
  let requiredFields = [];
  const invalidFields = [];
  const hasFurniture = false;
  const hasTV = false;
  const hasSim = false;

  const requiredAddressFields = [
    'receiverName',
    'complement',
    'street',
    'neighborhood',
    'state',
    'city',
    'country',
    'postalCode',
  ];

  const requiredFurnitureFields = [
    'buildingType',
    'assembleFurniture',
    'deliveryFloor',
    'hasSufficientSpace',
    'liftOrStairs',
    'parkingDistance',
  ];

  const requiredRicaFields = ['tvID'];

  requiredFields = [...requiredAddressFields];

  if (hasFurniture) requiredFields = [...requiredFields, ...requiredFurnitureFields];
  if (hasTV || hasSim) requiredFields = [...requiredFields, ...requiredRicaFields];

  for (let i = 0; i < requiredFields.length; i++) {
    if (!address[requiredFields[i]]) invalidFields.push(requiredFields[i]);
  }

  return { isValid: !invalidFields.length, invalidFields };
};

// TODO move somewhere else?
export const setAddress = (address) => {
  const { isValid, invalidFields } = addressIsValid(address);
  console.info('setAddress', { address, isValid, invalidFields });

  if (!isValid) return;

  const validAddressTypes = ['residential', 'inStore', 'commercial', 'giftRegistry', 'pickup', 'search'];

  // Fix bad addressType.
  if (address.addressType === 'business') address.addressType = 'commercial';
  if (!validAddressTypes.includes(address.addressType)) address.addressType = 'residential';

  const { shippingData } = window?.vtexjs?.checkout?.orderForm;

  shippingData.address = address;
  shippingData.selectedAddresses = [address];

  // Start Shimmering
  setDeliveryLoading();
  window.vtexjs.checkout
    .sendAttachment('shippingData', shippingData)
    .then((result) => {
      // End shimmer
      console.info('setAddress', { result });
    })
    .done(() => clearLoaders());
};

export default mapGoogleAddress;