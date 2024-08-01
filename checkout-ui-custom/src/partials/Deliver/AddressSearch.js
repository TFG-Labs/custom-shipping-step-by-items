import FormField from './Elements/FormField';
import { initGoogleAutocomplete } from './utils';

const AddressNotFoundNotification = () => /* html */ `
  <div id="no-address-search-results-notification" class="notification info" >
    <span class="icon"></span>
    <div class="notification-content">
      We could not find your address. 
      <a class="no-results-drop-down" href="" data-view="address-form" id="no-address-search-results">
        Please click here to enter it manually.
      </a>
    </div>
  </div>
`;

const AddressSearch = () => {
  setTimeout(() => {
    initGoogleAutocomplete();
  }, 500);

  const searchField = FormField({
    name: 'address-search',
    placeholder: 'Start typing an address...',
    autoComplete: 'off',
  });

  return /* html */ `
    <div class="address-search-field-container" id="address-search-field-container">
      ${searchField}
      ${AddressNotFoundNotification()}
    </div>
  `;
};

export default AddressSearch;
