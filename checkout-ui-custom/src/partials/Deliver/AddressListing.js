import usePhoneNumberFormatting from '../../utils/phoneNumberFormat';
import Radio from './Elements/Radio';

const isSelectedAddress = (address, selectedAddress) => {
  const addressObject = JSON.stringify({
    street: address?.street || '',
    neighborhood: address?.neighborhood || '',
    city: address?.city || '',
    postalCode: address?.postalCode || '',
  });

  const selectedAddressObject = JSON.stringify({
    street: selectedAddress?.street || '',
    neighborhood: selectedAddress?.neighborhood || '',
    city: selectedAddress?.city || '',
    postalCode: selectedAddress?.postalCode || '',
  });

  return addressObject === selectedAddressObject;
};
const countryCode = 'ZA';

const AddressListing = (address) => {
  const { formatPhoneNumber } = usePhoneNumberFormatting();
  if (!address) return '';

  const {
    businessName,
    number,
    street,
    neighborhood,
    postalCode,
    city,
    receiverName,
    addressName,
    complement,
    receiverPhone,
    captureMethod,
  } = address;

  const addressLine = [
    `${businessName ? `${businessName}, ` : ''} ${
      number ? `${formatPhoneNumber(number.trim(), countryCode)} ` : ''
    }${street}`,
    neighborhood ?? city,
    postalCode,
  ]
    .join(', ')
    .trim();
  const contactLine = [receiverName, formatPhoneNumber(receiverPhone || complement, countryCode)].join(' - ');

  // orderform
  const selectedAddress = window?.vtexjs?.checkout?.orderForm?.shippingData?.address;
  const addressString = encodeURIComponent(JSON.stringify(address));

  return /* html */ `
    <label id="address-${addressName}" class="bash--address-listing" data-address="${addressString}">
      <div class="address-radio">
      ${Radio({
        name: 'selected-address',
        options: [{ checked: isSelectedAddress(address, selectedAddress), value: addressName }],
      })}
      </div>
      <div class="address-text">
        <div>${addressLine}</div>    
        <div>${contactLine}</div>  
      </div>
      <div class="address-edit">
        <a href="#" data-view="edit-address" data-content="${addressName}" data-capture-method="${captureMethod}">
          Edit
        </a>
      </div>
    </label>
`;
};

export default AddressListing;
