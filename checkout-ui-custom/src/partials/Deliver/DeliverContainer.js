import { FURNITURE_FEE_LINK } from '../../utils/const';
import Addresses from './Addresses';
import AddressSearchSection from './AddressSearchSection';
import { DeliveryErrorContainer } from './DeliveryError';
import DeliveryOptions from './DeliveryOptions';
import { AlertContainer } from './Elements/Alert';
import { SubmitButton } from './FormComponents';
import MixedProducts from './MixedProducts';
import TVorRICAMsg from './TVorRICAMsg';

const DeliverContainer = ({ hasFurn, hasFurnOnly, hasFurnMixed }) => /* html */ `
  <div class="bash--delivery-container ${hasFurn && 'has-furniture'}"
   id="bash--delivery-container" data-view="select-address">
    <div id="bash--shipping-messages">
      ${AlertContainer()}
      ${TVorRICAMsg()}
      ${MixedProducts()}
      ${DeliveryErrorContainer()}
    </div>
   <form id="bash--delivery-form" name="bash--delivery-form" method="post">

    <section class="bash--delivery-view" data-section="select-address">
    <div class="bash--heading">
        <h2>Delivery address</h2>
        <a href="#" data-view="address-search">Add address</a>
      </div>
      ${Addresses()}
    </section>

    <section id="bash-delivery-options" class="shipping-method bash--delivery-view" data-section="select-address">
      <hr>
      <div class="bash--heading sub-heading">
        <h3>Delivery method</h3>
        ${hasFurnOnly || hasFurnMixed ? FURNITURE_FEE_LINK : ''}
      </div>
      ${DeliveryOptions({ hasFurnOnly, hasFurnitureMixed: hasFurnMixed })}
      ${SubmitButton('Save & continue', 'btn-save-delivery')}
    </section>
   </form>
   ${AddressSearchSection()}

    <section 
      id="manual-address-section"
      class="bash--delivery-view" 
      data-section="manual-address">
    </section>

    <section 
      id="edit-adress-section" 
      class="bash--delivery-view" 
      data-section="edit-address">
    </section>

    <section 
      id="add-address-autocomplete-section" 
      class="bash--delivery-view" 
      data-section="add-address-autocomplete">
    </section>

    <section 
      id="add-address-autocomplete-manual-section" 
      class="bash--delivery-view" 
      data-section="add-address-autocomplete-manual">
    </section>
  </div>`;

export default DeliverContainer;
