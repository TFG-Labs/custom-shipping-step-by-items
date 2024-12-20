// @ts-nocheck
import AddressListing from '../partials/Deliver/AddressListing';
import { showAlertBox } from '../partials/Deliver/utils';
import { clearLoaders } from './functions';
import {
  getAddressByName,
  getAddresses,
  removeAddressFromDB,
  removeAddressFromMasterData,
  removeAddressFromOrderForm,
} from './services';

// Handle address deletion
const handleDeleteAddress = async (addressName) => {
  $('#edit-adress-section').addClass('shimmer');
  try {
    const address = await getAddressByName(addressName);

    await removeAddressFromDB(address).catch((error) => {
      console.error('Error deleting address from DB:', error);
    });

    // Fire and forget - orderForm address will be set when user clicks Continue to Pay
    removeAddressFromOrderForm(addressName).catch((error) => {
      console.error('Error deleting address from OrderForm:', error);
    });

    const addressId = address.addressId ?? address.id ?? '';

    // Fire and forget - customer can still proceed with the order if this fails
    removeAddressFromMasterData(addressId).catch((error) => {
      console.warn('Error deleting address from MasterData:', error);
    });

    // Switch to the select-address view
    window.postMessage({ action: 'setDeliveryView', view: 'select-address' });

    // Fetch updated list of addresses
    const { data: updatedAddresses } = await getAddresses();

    // Update the UI with the new list of addresses
    const addressesHtml = updatedAddresses.map((addr) => AddressListing(addr)).join('');
    if ($('#bash-address-list').length > 0) {
      $('#bash-address-list').html(addressesHtml);
    }

    showAlertBox('Address deleted successfully.');
  } catch (error) {
    showAlertBox('Error deleting address.');
    console.error('Error deleting address:', error);
  } finally {
    clearLoaders();
  }
};

export default handleDeleteAddress;
