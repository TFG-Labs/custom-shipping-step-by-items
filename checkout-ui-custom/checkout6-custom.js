(()=>{var e={429:(e,t,o)=>{e.exports=o.p+"checkout6-custom.css"},776:()=>{"use strict";const e="#/shipping",t="customshippinginfo",o=(()=>{const t={categories:{}},o=e=>{const t={};return e.forEach((e=>{Object.assign(t,e.productCategories)})),t},r=()=>{window.location.hash===e&&setTimeout((()=>{if(vtexjs.checkout.orderForm){const{items:e}=vtexjs.checkout.orderForm;t.categories={...o(e)}}}),500)};return $(document).ready((()=>{r()})),$(window).on("hashchange orderFormUpdated.vtex",(()=>{r()})),{init:()=>{window.CartController=void 0},state:t}})(),r=(()=>{const t={showFurnitureForm:!1,showTVIDForm:!1,showRICAMsg:!1,showMixedCategoriesMsg:!1},r={furnitureId:"1",tvId:"1",simCardId:"1",furnitureForm:{buildingType:["Free standing","House in complex","Townhouse","Apartment"],parkingDistance:[15,25,50,100],deliveryFloor:["Ground","1","2","3+"],liftStairs:["Lift","Stairs"]},RICAMsg:"You can't collect this order in store because your cart contains items which require either RICA or TV License validation.",MixedProductsMsg:"We'll ship your furniture and other items in your cart to the selected address. Only the furniture delivery fee will apply."},i=()=>{window.location.hash===e&&(t.showFurnitureForm=!1,t.showTVIDForm=!1,t.showRICAMsg=!1,t.showMixedCategoriesMsg=!1,setTimeout((()=>{(()=>{const{categories:e}=o.state;Object.entries(e).forEach((e=>{const[o]=e[0];t.showFurnitureForm=!t.showFurnitureForm&&r.furnitureId===o,t.showTVIDForm=!t.showTVIDForm&&r.tvId===o,t.showRICAMsg=!t.showRICAMsg&&r.simCardId===o})),t.showMixedCategoriesMsg=(e=>{const{categories:t}=o.state,r=Object.keys(t);return r.includes(e)&&!r.includes(e)})(r.furnitureId)})(),(()=>{const e=$("#tfg-custom-furniture-step").length>0;t.showFurnitureForm&&!e&&$(".vtex-omnishipping-1-x-deliveryGroup").prepend((({buildingType:e,parkingDistance:t,deliveryFloor:o,liftStairs:r})=>{let i='\n    <p class="tfg-custom-input">\n      <label>Building type</label>\n      <select class="input-xlarge tfg-custom-selector" id="tfg-building-type">\n        <option disabled selected value="">Please select</option>\n    ';e.forEach((e=>{i+=`<option value="${e}">${e}</option>`})),i+="\n      </select>\n    </p>\n    ";let s='\n  <p class="tfg-custom-input">\n    <label>Distance to parking</label>\n    <select class="input-xlarge tfg-custom-selector" id="tfg-parking-distance">\n      <option disabled selected value="">Please select</option>\n  ';t.forEach((e=>{s+=`<option value="${e}">${e}</option>`})),s+="\n    </select>\n  </p>\n  ";let n='\n  <p class="tfg-custom-input">\n    <label>Delivery floor</label>\n    <select class="input-xlarge tfg-custom-selector" id="tfg-delivery-floor">\n      <option disabled selected value="">Please select</option>\n  ';o.forEach((e=>{n+=`<option value="${e}">${e}</option>`})),n+="\n    </select>\n  </p>\n  ";let a='\n  <p class="tfg-custom-input">\n    <label>Lift or staris</label>\n    <select class="input-xlarge tfg-custom-selector" id="tfg-lift-stairs">\n      <option disabled selected value="">Please select</option>\n  ';return r.forEach((e=>{a+=`<option value="${e}">${e}</option>`})),a+="\n    </select>\n  </p>\n  ",`\n    <div id="tfg-custom-furniture-step">\n      <p class="tfg-custom-title">Furniture information needed</p>\n      <p class="tfg-custom-subtitle">We need some more information to prepare delivery of your\n      furniture items to your address.</p>\n      ${i}\n      ${s}\n      ${n}\n      ${a}\n      <label class="checkbox tfg-custom-label">\n        <input type="checkbox" id="tfg-sufficient-space">\n        <span class="tfg-checkbox-text">Is there sufficent corner/passage door space?</span>\n      </label>\n      <label class="checkbox tfg-custom-label">\n        <input type="checkbox" id="tfg-assemble-furniture">\n        <span class="tfg-checkbox-text">Would you like us to assemble your furniture items?</span>\n      </label>\n    </div>\n  `})(r.furnitureForm))})()}),500))};return $(document).ready((()=>{"undefined"!=typeof setAppConfiguration&&window.location.hash===e&&setAppConfiguration(r),i()})),$(window).on("hashchange orderFormUpdated.vtex",(()=>{i()})),{init:()=>{window.ViewController=void 0},state:t}})(),i=(()=>{const o={validForm:!0},i=()=>{const{showFurnitureForm:e,showTVIDForm:t}=r.state;(()=>{const{showFurnitureForm:e,showTVIDForm:t}=r.state;o.validForm=!0,["#ship-street","#ship-number","#ship-city"].forEach((e=>{$(`${e}`).length>0&&!$(`${e}`).val()&&($(`${e}`).addClass("error"),o.validForm=!1)})),e&&["tfg-building-type","tfg-parking-distance","tfg-delivery-floor","tfg-lift-stairs"].forEach((e=>{$(`#${e}`).length>0&&!$(`#${e}`).attr("disabled")&&!$(`#${e}`).val()?($(`#${e}`).addClass("error"),o.validForm=!1):$(`#${e}`).removeClass("error")}))})(),o.validForm&&(e&&(()=>{const e={};e.buildingType=$("#tfg-building-type").val(),e.parkingDistance=$("#tfg-parking-distance").val(),e.deliveryFloor=$("#tfg-delivery-floor").val(),$("#tfg-lift-stairs").attr("disabled")||(e.liftOrStairs=$("#tfg-lift-stairs").val()),e.hasSufficientSpace=$("#tfg-sufficient-space").is(":checked"),e.assembleFurniture=$("#tfg-assemble-furniture").is(":checked"),((e,t)=>{const{orderFormId:o}=vtexjs.checkout.orderForm;$.ajax({type:"PUT",url:`/api/checkout/pub/orderForm/${o}/customData/customshippinginfo`,dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify(t)})})(0,e)})(),$("#btn-go-to-payment").trigger("click"))},s=()=>{setTimeout((()=>{if(vtexjs.checkout.orderForm){const{showFurnitureForm:e,showTVIDForm:o}=r.state,i=(()=>{const{customData:e}=vtexjs.checkout.orderForm;let o={};return e&&e.customApps&&e.customApps.length>0&&e.customApps.forEach((e=>{e.id===t&&(o=e.fields)})),o})();i&&e&&($("#tfg-building-type").val(i.buildingType),$("#tfg-parking-distance").val(i.parkingDistance),$("#tfg-delivery-floor").val(i.deliveryFloor),$("#tfg-lift-stairs").val(i.liftOrStairs),$("#tfg-sufficient-space").prop("checked","true"===i.hasSufficientSpace),$("#tfg-assemble-furniture").prop("checked","true"===i.assembleFurniture))}}),500)},n=()=>{window.location.hash===e&&((()=>{if($("#custom-go-to-payment").length<=0){const e=$("#btn-go-to-payment"),t=e.clone(!1);$(e).hide(),$(t).data("bind",""),$(t).removeAttr("id").attr("id","custom-go-to-payment"),$(t).removeAttr("data-bind"),$(t).css("display","block"),$("p.btn-go-to-payment-wrapper").append(t),$(t).on("click",i)}})(),s())};return $(document).on("change",".vtex-omnishipping-1-x-deliveryGroup #tfg-delivery-floor",(()=>{"Ground"===$("#tfg-delivery-floor").val()?$("#tfg-lift-stairs").attr("disabled","disabled"):$("#tfg-lift-stairs").removeAttr("disabled")})),$(document).ready((()=>{n()})),$(window).on("hashchange",(()=>{n()})),$(window).on("orderFormUpdated.vtex",(()=>{window.location.hash===e&&s()})),{init:()=>{window.FormController=void 0},state:o}})();o.init(),r.init(),i.init()}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o(776),o(429)})();