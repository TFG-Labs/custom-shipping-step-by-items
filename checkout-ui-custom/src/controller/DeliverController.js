import DeliverContainer from '../partials/Deliver/DeliverContainer';
import ExtraFieldsContainer from '../partials/Deliver/ExtraFieldsContainer';
import {
  clearRicaFields,
  customShippingDataIsValid,
  parseAttribute,
  populateAddressForm,
  populateDeliveryError,
  populateFurnitureFields,
  populateRicaFields,
  populateTVFields,
  setAddress,
  setCartClasses,
  showHideLiftOrStairs,
  submitAddressForm,
  submitDeliveryForm,
  updateDeliveryFeeDisplay,
} from '../partials/Deliver/utils';
import { STEPS } from '../utils/const';
import { getSpecialCategories } from '../utils/functions';
import { getAddressByName, removeFromCart } from '../utils/services';

const DeliverController = (() => {
  const state = {
    view: 'list',
    hasFurn: false,
    hasTVs: false,
    hasSim: false,
  };

  const setupDeliver = () => {
    if ($('#bash--delivery-container').length) return;

    if (window.vtexjs.checkout.orderForm) {
      const items = window.vtexjs.checkout.orderForm?.items;
      const { hasFurniture, hasTVs, hasSimCards } = getSpecialCategories(items);

      state.hasFurn = hasFurniture;
      state.hasTVs = hasTVs;
      state.hasSim = hasSimCards;
    }
    $('.shipping-data .box-step').append(
      DeliverContainer({
        hasFurn: state.hasFurn,
      })
    );

    const showExtraFields = state.hasFurn || state.hasSim || state.hasTVs;

    if (showExtraFields) {
      $('#bash-delivery-options').before(
        ExtraFieldsContainer({
          hasFurn: state.hasFurn,
          hasSim: state.hasSim,
          hasTV: state.hasTVs,
        })
      );

      if (state.hasFurn) populateFurnitureFields();
      if (state.hasSim) populateRicaFields();
      if (state.hasTVs) populateTVFields();
    }

    const fieldsToValidate = 'select, input';
    $(fieldsToValidate).on('invalid', function () {
      const field = this;
      $(field)[0].setCustomValidity(' ');
      $(field).parents('form').addClass('show-form-errors');
      $(field).off('change keyUp');
      $(field).on('change keyUp', () => {
        $(field)[0].setCustomValidity('');
      });
    });
  };

  // EVENTS

  $(document).ready(() => {
    if (window.location.hash === STEPS.SHIPPING) {
      setupDeliver();
      $('.bash--delivery-container.hide').removeClass('hide');
    } else if ($('.bash--delivery-container:not(.hide)').length) {
      $('.bash--delivery-container:not(.hide)').addClass('hide');
    }
  });

  $(window).on('hashchange', () => {
    if (window.location.hash === STEPS.SHIPPING) {
      setupDeliver();
      setCartClasses();

      $('.bash--delivery-container.hide').removeClass('hide');
    } else if ($('.bash--delivery-container:not(.hide)').length) {
      $('.bash--delivery-container:not(.hide)').addClass('hide');
    }
  });

  // Define which tab is active ;/
  $(window).on('orderFormUpdated.vtex', () => {
    const items = window.vtexjs.checkout.orderForm?.items;
    const addressType = window.vtexjs.checkout.orderForm.shippingData?.address?.addressType;
    const { hasTVs, hasSimCards } = getSpecialCategories(items);
    const { messages } = window.vtexjs.checkout.orderForm;

    if (window.location.hash === STEPS.SHIPPING) {
      const errors = messages.filter((msg) => msg.status === 'error');
      if (errors) populateDeliveryError(errors);
    }

    if (addressType === 'search') {
      // User has Collect enabled, but has Rica or TV products.
      if (hasTVs || hasSimCards) {
        if (window.location.hash !== STEPS.SHIPPING) window.location.hash = STEPS.SHIPPING;
        setTimeout(() => document.getElementById('shipping-option-delivery')?.click(), 2000);
        return;
      }
      $('#shipping-data:not(collection-active)').addClass('collection-active');
      $('.delivery-active').removeClass('delivery-active');
    } else {
      setupDeliver();
      $('#shipping-data:not(delivery-active)').addClass('delivery-active');
      $('.collection-active').removeClass('collection-active');
    }

    setCartClasses();
    updateDeliveryFeeDisplay();

    if (window.location.hash === STEPS.PAYMENT && !customShippingDataIsValid()) {
      window.location.hash = STEPS.SHIPPING;
    }
  });

  // Change view
  $(document).on('click', 'a[data-view]', function (e) {
    e.preventDefault();
    const viewTarget = $(this).data('view');
    const content = decodeURIComponent($(this).data('content'));
    window.postMessage({ action: 'setDeliveryView', view: viewTarget, content });
  });

  // Select address
  $(document).on('change', 'input[type="radio"][name="selected-address"]', function () {
    const address = parseAttribute($(this).parents('.bash--address-listing').data('address'));

    if (document.forms['bash--delivery-form']) {
      document.forms['bash--delivery-form'].reset();
      document.forms['bash--delivery-form'].classList.remove('show-form-errors');
    }

    getAddressByName(address.addressName).then((addressByName) => {
      setAddress(addressByName || address, { validateExtraFields: false });
      $('input[type="radio"][name="selected-address"]:checked').attr('checked', false);
      $(this).attr('checked', true);
    });
  });

  // Rica - show/hide address fields
  $(document).on('change', '#bash--input-rica_sameAddress', function () {
    if (this.checked) {
      $('.rica-conditional-fields').slideUp(() => populateRicaFields());
    } else {
      clearRicaFields();
      $('.rica-conditional-fields').slideDown(() => $('#bash--input-rica_fullName').focus());
    }
  });

  // Furniture - enable/disable liftOrStairs
  $(document).on('change', '#bash--input-deliveryFloor', function () {
    showHideLiftOrStairs(this.value);
  });

  $(document).on('submit', '#bash--address-form', submitAddressForm);
  $(document).on('submit', '#bash--delivery-form', submitDeliveryForm);

  $(document).on('click', '.remove-cart-item', function (e) {
    e.preventDefault();
    removeFromCart($(this).data('index'));
  });

  // Form validation
  window.addEventListener('message', (event) => {
    const { data } = event;
    if (!data || !data.action) return;

    switch (data.action) {
      case 'setDeliveryView':
        document.querySelector('.bash--delivery-container').setAttribute('data-view', data.view);
        if (data.view === 'address-form' || data.view === 'address-edit') {
          if (data.content) {
            const address = JSON.parse(decodeURIComponent($(`#${data.content}`).data('address')));
            populateAddressForm(address);
          }
        }

        break;
      default:
        console.error('Unknown action', data.action);
    }
  });

  // Clear local checkout DB on ext.
  // window.addEventListener('beforeunload', clearAddresses);

  return {
    state,
    init: () => {},
  };
})();
export default DeliverController;
