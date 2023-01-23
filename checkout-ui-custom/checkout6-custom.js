(() => {
  const e = () =>
    '\n  <p id="box-pickup-complement" class="input custom-field-complement tfg-custom-addressForm">\n    <label>Mobile number</label>\n    <input id="custom-pickup-complement" class="input-xlarge success" type="text" field="complement" placeholder="" />\n  </p>';
  const t = () => '<span class="help error">This field is required.</span>';
  const s = '#/shipping';
  const a = '#/payment';
  const n = 'ricafields';
  const r = 'tvfields';
  const i = 'furniturefields';
  const o = window.location.host.includes('bash.com')
    ? 'https://store-api.www.bash.com/custom-api/'
    : `${window.location.protocol}//${window.location.host}/custom-api/`;
  const d = '1169288799';
  const l = () =>
    window.vtexjs.checkout.orderForm?.shippingData?.address?.complement ||
    window.vtexjs.checkout.orderForm?.clientProfileData?.phone ||
    document?.getElementById('client-phone')?.value;
  const c = (e) => {
    throw (console.error('ERROR', e), new Error(e));
  };
  const u = ({ cookie: e, cache: t, json: s }) => {
    const a = new Headers();
    return (
      e && a.append('Cookie', document?.cookie),
      t && a.append('Cache-Control', 'no-cache'),
      s && a.append('Content-type', 'application/json'),
      a
    );
  };
  const p = (e, t) => {
    const { orderFormId: s } = window.vtexjs.checkout.orderForm;
    return $.ajax({
      type: 'PUT',
      url: `/api/checkout/pub/orderForm/${s}/customData/${e}`,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(t),
    });
  };
  const h = (e) =>
    ((e) => !!e && ((e = e.replace(/\s/g, ''))[0] === '0' ? e.match(/[0-9\s]{10}/) : e.match(/[0-9\s]{9,}/)))(e);
  const m = (e) => {
    const t = [d];
    const s = ['938942995'];
    const a = ['24833302'];
    const n = [];
    let r = !1;
    let i = !1;
    let o = !1;
    let l = !1;
    return (
      e.forEach((e) => {
        const d = e.productCategoryIds.split('/');
        n.push(d),
          d.forEach((e) => {
            e && (s.includes(e) && (r = !0), a.includes(e) && (i = !0), t.includes(e) && (o = !0));
          });
      }),
      (l = e.length > 1 && o && !n.every((e) => e === d)),
      { hasFurniture: o, hasSimCards: i, hasTVs: r, hasFurnitureMixed: l, categories: n }
    );
  };
  const v = () => {
    $('.shimmer').removeClass('shimmer');
  };
  const g = (() => {
    const t = { inCollect: !1, pickupSelected: !1, validForm: !1, runningObserver: !1 };
    const n = () => {
      if (
        ($('span.help.error').remove(),
        (t.validForm = !0),
        ['pickup-receiver', 'custom-pickup-complement'].forEach((e) => {
          let s;
          let a = !0;
          switch (e) {
            case 'pickup-receiver':
              (a = !($(`#${e}`).length > 0 && !$(`#${e}`).attr('disabled') && !$(`#${e}`).val())),
                (s = '.shp-pickup-receiver');
              break;
            case 'custom-pickup-complement':
              (a = h($(`#${e}`).val())), (s = '#box-pickup-complement');
          }
          a
            ? $(s).removeClass('error')
            : ($(s).addClass('error'),
              $(s).append('<span class="help error">This field is required.</span>'),
              $(`${s} span.error`).show(),
              (t.validForm = !1));
        }),
        t.validForm)
      ) {
        let e = $('#custom-pickup-complement').val().replace(/\s/g, '');
        e.length === 9 && e[0] !== '0' && (e = `0${e}`),
          localStorage.setItem('saving-shipping-collect', !0),
          $('#btn-go-to-payment').trigger('click'),
          setTimeout(() => {
            window.vtexjs.checkout
              .getOrderForm()
              .then((t) => {
                const { address: s } = t.shippingData;
                return (s.complement = e), window.vtexjs.checkout.calculateShipping(s);
              })
              .done(() => {
                localStorage.removeItem('saving-shipping-collect');
              });
          }, 750);
      }
    };
    const r = () => {
      const r = $('div#postalCode-finished-loading').length > 0;
      window.location.hash === s && r
        ? ((t.inCollect = $('#shipping-option-pickup-in-point').hasClass('shp-method-option-active')),
          (t.pickupSelected = $('div.ask-for-geolocation').length === 0),
          t.inCollect &&
            (t.pickupSelected
              ? ($('button.shp-pickup-receiver__btn').trigger('click'),
                $('div.shp-pickup-receiver').addClass('show'),
                (() => {
                  const t =
                    window.vtexjs.checkout.orderForm?.clientProfileData?.phone ?? $('#client-phone').val() ?? '';
                  $('input#custom-pickup-complement').length === 0
                    ? ($('.btn-go-to-payment-wrapper').before(e),
                      (() => {
                        const e = document.querySelector('input#custom-pickup-complement');
                        e && e.setAttribute('placeholder', '');
                      })(),
                      t && $('input#custom-pickup-complement').val(t))
                    : $('input#custom-pickup-complement').val() === '' &&
                      ($('input#custom-pickup-complement').val(t),
                      window.vtexjs.checkout.getOrderForm().then((e) => {
                        const { shippingData: s } = e;
                        return (s.address.complement = t), window.vtexjs.checkout.sendAttachment('shippingData', s);
                      })),
                    (() => {
                      const { firstName: e, lastName: t } = window.vtexjs.checkout.orderForm?.clientProfileData;
                      const s = $('#client-first-name').val();
                      const a = $('#client-last-name').val();
                      const n = e ? [e, t].join(' ') : [s, a].join(' ');
                      $('input#pickup-receiver').val() === '' &&
                        ($('input#pickup-receiver').val(n.trim()),
                        window.vtexjs.checkout.getOrderForm().then((e) => {
                          const { shippingData: t } = e;
                          return (
                            (t.address.receiverName = n.trim()),
                            window.vtexjs.checkout.sendAttachment('shippingData', t)
                          );
                        }));
                    })();
                })(),
                (() => {
                  if ($('#custom-go-to-payment').length <= 0) {
                    const e = $('#btn-go-to-payment');
                    const t = e.clone(!1);
                    $(e).hide(),
                      $(t).data('bind', ''),
                      $(t).removeAttr('id').attr('id', 'custom-go-to-payment'),
                      $(t).removeAttr('data-bind'),
                      $(t).css('display', 'block'),
                      $('p.btn-go-to-payment-wrapper').append(t),
                      $(t).on('click', n);
                  }
                })())
              : $('div.shp-pickup-receiver').removeClass('show'),
            $('p.vtex-omnishipping-1-x-shippingSectionTitle').text('Collect options'),
            $('#change-pickup-button').text('Available pickup points'),
            $('h2.vtex-omnishipping-1-x-geolocationTitle.ask-for-geolocation-title').text(
              'Find nearby Click & Collect points'
            ),
            $('h3.vtex-omnishipping-1-x-subtitle.ask-for-geolocation-subtitle').text(
              "Search for addresses that you frequently use and we'll locate stores nearby."
            ),
            t.pickupSelected && $('label.shp-pickup-receiver__label').text("Recipient's name")),
          localStorage.getItem('shipping-incomplete-values') &&
            ($('#custom-go-to-payment').trigger('click'), localStorage.removeItem('shipping-incomplete-values')))
        : ($('#box-pickup-complement').remove(),
          window.location.hash === a &&
            setTimeout(() => {
              const e = window.vtexjs.checkout.orderForm?.shippingData?.address;
              localStorage.getItem('saving-shipping-collect') ||
                !e ||
                e.addressType !== 'search' ||
                (e.receiverName && e.complement) ||
                ((window.location.hash = s), localStorage.setItem('shipping-incomplete-values', !0));
            }, 1e3)),
        i();
    };
    const i = () => {
      if (t.runningObserver) return;
      const e = document.querySelector('.shipping-container .box-step');
      const s = new MutationObserver(() => {
        (t.runningObserver = !0), r();
      });
      e && s.observe(e, { attributes: !1, childList: !0, characterData: !1 });
    };
    return (
      $(document).ready(() => {
        r();
      }),
      $(window).on('hashchange orderFormUpdated.vtex', () => {
        r();
      }),
      { state: t, init: () => {} }
    );
  })();
  const b = ({ name: e, options: t = [] }) =>
    `\n  \n  <div class="bash--radio-options">\n  ${t
      .map(
        ({ value: t, label: s, checked: a = !1, disabled: n = !1 }) =>
          `\n      <label class="bash--radio-option" id="radio-label-${e}-${t}">\n        <input type="radio" \n          ${
            a ? "checked='checked'" : ''
          } \n          ${n ? "disabled='disabled'" : ''} \n          value="${
            t ?? ''
          }" \n          name="${e}" \n          id="radio-${e}-${t}"\n        />\n          <span class="radio-icon"></span> \n          ${
            s ? `<span class="radio-label">${s}</span>` : ''
          }\n      </label>\n    `
      )
      .join('')}\n   \n  </div>\n  `;
  const f = ['receiverName', 'complement', 'street', 'neighborhood', 'state', 'city', 'country', 'postalCode'];
  const y = [
    'buildingType',
    'assembleFurniture',
    'deliveryFloor',
    'hasSufficientSpace',
    'liftOrStairs',
    'parkingDistance',
  ];
  const w = ['idOrPassport', 'sameAddress', 'fullName', 'streetAddress', 'suburb', 'city', 'postalCode', 'province'];
  const k = ['tvID'];
  const x = ['residential', 'inStore', 'commercial', 'giftRegistry', 'pickup', 'search'];
  const C = () => {
    document.querySelector('.bash--delivery-container').classList.add('shimmer');
  };
  const F = (e) => {
    switch (e) {
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
        return e;
    }
  };
  const D = () => {
    const e = window?.vtexjs?.checkout?.orderForm?.shippingData?.address?.receiverName;
    const t = window?.vtexjs?.checkout?.orderForm?.clientProfileData?.firstName;
    const s = window?.vtexjs?.checkout?.orderForm?.clientProfileData?.lastName;
    const a = `${t ?? ''} ${s ?? ''}`.trim();
    return e || document.getElementById('client-first-name')?.value || a;
  };
  const S = (e) => {
    const {
      street: t,
      companyBuilding: s,
      neighborhood: a,
      postalCode: n,
      state: r,
      city: i,
      receiverName: o,
      complement: d,
      id: l,
      addressId: c,
      addressName: u,
    } = e;
    document.getElementById('bash--address-form').reset(),
      o && (document.getElementById('bash--input-receiverName').value = o ?? ''),
      d && (document.getElementById('bash--input-complement').value = d ?? ''),
      (l || c) && (document.getElementById('bash--input-addressId').value = l || c),
      u && (document.getElementById('bash--input-addressName').value = u),
      (document.getElementById('bash--input-number').value = ''),
      (document.getElementById('bash--input-companyBuilding').value = s ?? ''),
      (document.getElementById('bash--input-street').value = t ?? ''),
      (document.getElementById('bash--input-neighborhood').value = a ?? ''),
      (document.getElementById('bash--input-city').value = i ?? ''),
      (document.getElementById('bash--input-postalCode').value = n ?? ''),
      (document.getElementById('bash--input-state').value = F(r)),
      $(':invalid').trigger('change');
  };
  const I = (e, t, s = '', a = !1) => {
    if (e) {
      for (let n = 0; n < t.length; n++) {
        const r = `bash--input-${s}${t[n]}`;
        !document.getElementById(r) ||
          (!e[t[n]] && !a) ||
          (document.getElementById(r).value && !a) ||
          (document.getElementById(r).value = e[t[n]]);
      }
      $(':invalid').trigger('change');
    }
  };
  const A = () => {
    const { address: e } = window.vtexjs.checkout.orderForm.shippingData;
    if (document.getElementById('bash--input-rica_streetAddress')?.value || !e) return;
    (e.fullName = D()),
      (e.streetAddress = e.street),
      (e.suburb = e.neighborhood),
      (e.province = e.state),
      I(e, w, 'rica_');
    const t = z(n);
    t.streetAddress && I(t, w, 'rica_', !0);
  };
  const j = (e) => {
    e && e !== 'ground'
      ? ($('.bash--dropdownfield-liftOrStairs').slideDown().addClass('required'),
        $('#bash--input-liftOrStairs').attr('required', 'required'))
      : ($('.bash--dropdownfield-liftOrStairs').slideUp(), $('#bash--input-liftOrStairs').removeAttr('required'));
  };
  const T = (e, t = !0) => {
    const { items: s } = window.vtexjs.checkout.orderForm;
    const { hasFurniture: a, hasTVs: n, hasSimCards: r } = m(s);
    let i = [];
    const o = [];
    (i = [...f]), a && t && (i = [...i, ...y]), n && t && (i = [...i, ...k]), r && t && (i = [...i, ...w]);
    for (let t = 0; t < i.length; t++) e[i[t]] || o.push(i[t]);
    return { isValid: !o.length, invalidFields: o };
  };
  const N = () => {
    const { items: e } = window.vtexjs.checkout.orderForm;
    const { hasFurniture: t, hasTVs: s, hasSimCards: a, hasFurnitureMixed: n } = m(e);
    const r = '#shipping-data';
    t ? $(`${r}:not(.has-furniture)`).addClass('has-furniture') : $(`${r}.has-furniture`).removeClass('has-furniture'),
      s ? $(`${r}:not(.has-tv)`).addClass('has-tv') : $(`${r}.has-tv`).removeClass('has-tv'),
      a ? $(`${r}:not(.has-rica)`).addClass('has-rica') : $(`${r}.has-rica`).removeClass('has-rica'),
      n
        ? $(`${r}:not(.has-furniture-mixed)`).addClass('has-furniture-mixed')
        : $(`${r}.has-furniture-mixed`).removeClass('has-furniture-mixed');
  };
  const E = (e = []) => {
    if ($('#bash-delivery-error-container').length < 1) return;
    const t =
      e.length > 0
        ? e.map((e) =>
            (({ text: e, fields: t }) => {
              if (!t.itemIndex) return '';
              const s = window.vtexjs.checkout?.orderForm.items?.[t.itemIndex];
              if (!s) return '';
              const a = s?.imageUrl;
              return ` \n<div id="bash-delivery-error" class="notification error" alt="${
                t?.skuName ?? ''
              }" >\n   \x3c!---<div class="icon"></div>---\x3e\n   ${
                a ? `<img src="${a}" style=" float: right; " />` : ''
              }\n   <div class="notification-content">\n      <h3>Address error ${
                t?.skuName ? `- ${t?.skuName}` : ''
              }</h3>\n      <p>${e}</p>\n      <p>Check the postal code of your address, or \n      <a href="#" \n        class="remove-cart-item"\n        style="color: white; text-decoration: underline"\n        data-index="${
                t.itemIndex
              }">remove this item from your cart</a>.\n      </p>\n   </div>  \n</div>  \n`;
            })(e)
          )
        : '';
    $('#bash-delivery-error-container').html(t),
      e.length > 0 && $('html, body').animate({ scrollTop: $('#bash-delivery-error-container').offset().top }, 400);
  };
  const B = (e, t = { validateExtraFields: !0 }) => {
    const { validateExtraFields: s } = t;
    const { items: a } = window.vtexjs.checkout.orderForm;
    const { hasFurniture: n, hasTVs: r, hasSimCards: i } = m(a);
    n && (I(e, y), j(e.deliveryFloor)), r && I(e, k, 'tv_'), i && A();
    const { isValid: o, invalidFields: d } = T(e, s);
    if (!o)
      return (
        S(e),
        $('#bash--address-form').addClass('show-form-errors'),
        s && $('#bash--delivery-form')?.addClass('show-form-errors'),
        $(`#bash--input-${d[0]}`).focus(),
        f.includes(d[0]) && window.postMessage({ action: 'setDeliveryView', view: 'address-edit' }),
        { success: !1, error: 'Invalid address details.' }
      );
    e.addressType === 'business' && (e.addressType = 'commercial'),
      x.includes(e.addressType) || (e.addressType = 'residential');
    const { shippingData: l } = window?.vtexjs?.checkout?.orderForm;
    return (
      (l.address = e),
      (l.address.number = l.address.number ?? ' '),
      (l.selectedAddresses = [e]),
      C(),
      window.vtexjs.checkout
        .sendAttachment('shippingData', l)
        .then((t) => {
          const { messages: s } = t;
          const a = s.filter((e) => e.status === 'error');
          return a.length > 0
            ? (E(a),
              window.postMessage({ action: 'setDeliveryView', view: 'address-form' }),
              { success: !1, errors: a })
            : (e.addressName && G(l.address), { success: !0 });
        })
        .done(() => v())
    );
  };
  const _ = async (e) => {
    e.preventDefault(), $('select').change();
    const t = document.forms['bash--address-form'];
    const s = $('#bash--input-addressName').val();
    const a = [
      'addressId',
      'addressName',
      'addressType',
      'receiverName',
      'postalCode',
      'city',
      'state',
      'country',
      'street',
      'neighborhood',
      'complement',
      'companyBuilding',
    ];
    const n = { isDisposable: !1, reference: null, geoCoordinates: [], number: '', country: 'ZAF', ...(await J(s)) };
    for (let e = 0; e < a.length; e++) n[a[e]] = t[a[e]]?.value || null;
    (n.addressName = n.addressName || n.addressId), (n.addressId = n.addressId || n.addressName);
    const { isValid: r, invalidFields: i } = T(n, !1);
    if (!r)
      return (
        console.error({ invalidFields: i }),
        $('#bash--address-form').addClass('show-form-errors'),
        $(`#bash--input-${i[0]}`).focus(),
        void (f.includes(i[0]) && window.postMessage({ action: 'setDeliveryView', view: 'address-form' }))
      );
    const o = await B(n, { validateExtraFields: !1 });
    const { success: d } = o;
    d
      ? (await Z(n),
        window.postMessage({ action: 'setDeliveryView', view: 'select-address' }),
        (() => {
          $('.alert-container').addClass('show'), $('.alert-container').slideDown();
          const e = $('[data-view="address-form"]').length > 0 ? 'Address added' : 'Address updated';
          $('#bash-alert-container').html(
            (({ text: e }) => `<div class='alert-container'>\n      <p>${e}</p>\n    </div>\n  `)({ text: e })
          ),
            setTimeout(() => {
              $('.alert-container').slideUp();
            }, 5e3);
        })())
      : console.error('Set address error', { setAddressResponse: o });
  };
  const R = async (e) => {
    e.preventDefault();
    const { items: t } = window.vtexjs.checkout.orderForm;
    const { address: s } = window.vtexjs.checkout.orderForm.shippingData;
    const { hasFurniture: o, hasTVs: d, hasSimCards: l } = m(t);
    $('select').change();
    let c = {};
    const u = "[name='selected-address']:checked";
    if ($(u).length < 1)
      return void $('html, body').animate({ scrollTop: $('#bash--delivery-form').offset().top }, 400);
    C();
    const p = await J($(u).val());
    c = { ...s, ...p };
    const { success: h } = await B(c, { validateExtraFields: !1 });
    if (!h) return console.error('Delivery Form - Address Validation error'), void v();
    const g = {};
    const b = {};
    const f = {};
    if (o) {
      const e = y;
      for (let t = 0; t < e.length; t++) {
        if (e[t] === 'hasSufficientSpace' || e[t] === 'assembleFurniture') {
          const s = $(`#bash--input-${e[t]}`).is(':checked');
          $(`#bash--input-${e[t]}`).val(s), (g[e[t]] = s);
        }
        s[e[t]] || (c[e[t]] = $(`#bash--input-${e[t]}`).val()), (g[e[t]] = $(`#bash--input-${e[t]}`).val());
      }
      const t = await K(i, g, !0, !1);
      console.info({ furnitureDataSent: t });
    }
    if (l) {
      const e = w;
      for (let t = 0; t < e.length; t++) {
        if (e[t] === 'sameAddress') {
          const s = $(`#bash--input-${e[t]}`).is(':checked');
          b[e[t]] = s;
        }
        b[e[t]] = $(`#bash--input-rica_${e[t]}`).val();
      }
      const t = await K(n, b, !1, !0);
      console.info({ ricaDataSent: t });
    }
    if (d) {
      const e = k;
      for (let t = 0; t < e.length; t++)
        s[e[t]] || (c[e[t]] = $(`#bash--input-tv_${e[t]}`).val()), (f[e[t]] = $(`#bash--input-tv_${e[t]}`).val());
      const t = await K(r, f);
      console.info({ tvDataSent: t });
    }
    await Z(c), (window.location.hash = a), v();
  };
  const O = (e) => {
    let t = e.replace(/\s/g, '');
    return t.length === 9 && t[0] !== '0' && (t = `0${t}`), t;
  };
  const P = (e, t) => {
    if ((e = e.replace(/[^0-9+*#]+/g, '').trim())[0] === '0') {
      if (e.length >= 6) {
        const s = [e.slice(0, 3), e.slice(3, 6), e.slice(6)].join(' ');
        return t ? s.trim() : s;
      }
      if (e.length >= 3) {
        const s = [e.slice(0, 3), e.slice(3)].join(' ');
        return t ? s.trim() : s;
      }
    } else {
      if (e.length >= 5) {
        const s = [e.slice(0, 2), e.slice(2, 5), e.slice(5)].join(' ');
        return t ? s.trim() : s;
      }
      if (e.length >= 2) {
        const s = [e.slice(0, 2), e.slice(2)].join(' ');
        return t ? s.trim() : s;
      }
    }
    return t ? e.trim() : e;
  };
  const q = (e) => {
    const t = document.querySelector(e);
    t &&
      (t.setAttribute('maxlength', 12),
      (t.value = P(t.value)),
      $(document).off('keyup', e),
      $(document).on('keyup', e, function (e) {
        const t = $(this);
        const s = t.val().replace(/[^0-9+*#]+/g, '');
        const a = e.keyCode === 8;
        const n = P(s, a);
        t.parent('.text').removeClass('error'), t.parent('.text').find('span.error').hide(), t.val(n);
      }));
  };
  const V = (e, t) =>
    JSON.stringify({ street: e.street, neighborhood: e.neighborhood, city: e.city, postalCode: e.postalCode }) ===
    JSON.stringify({ street: t.street, neighborhood: t.neighborhood, city: t.city, postalCode: t.postalCode });
  const M = (e) => {
    if (!e) return '';
    const { street: t, neighborhood: s, postalCode: a, city: n, receiverName: r, complement: i, addressName: o } = e;
    const d = [t, s ?? n, a].join(', ');
    const l = [r, ((c = O(i)), [c.slice(0, 3), c.slice(3, 6), c.slice(6)].join(' '))].join(' - ');
    let c;
    const u = window?.vtexjs?.checkout?.orderForm?.shippingData?.address;
    return u
      ? `\n<label id="address-${o}" class="bash--address-listing" data-address="${encodeURIComponent(
          JSON.stringify(e)
        )}">\n  <div class="address-radio">\n  ${b({
          name: 'selected-address',
          options: [{ checked: V(e, u), value: o }],
        })}\n  </div>\n  <div class="address-text">\n    <div>${d}</div>    \n    <div>${l}</div>  \n  </div>\n  <div class="address-edit">\n    <a href="#" data-view="address-edit" data-content="address-${o}">\n      Edit\n    </a>\n  </div>\n</label>\n`
      : '';
  };
  const L = (e) => {
    throw (console.error('ERROR', e), new Error(e));
  };
  const U = ({ cookie: e, cache: t, json: s }) => {
    const a = new Headers();
    return (
      e && a.append('Cookie', document?.cookie),
      t && a.append('Cache-Control', 'no-cache'),
      s && a.append('Content-type', 'application/json'),
      a
    );
  };
  const W = new (class {
    constructor() {
      (this.indexedDB =
        window.indexedDB ||
        window.webkitIndexedDB ||
        window.mozIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB),
        (this.checkoutDB = indexedDB.open('checkoutDB', 1.2)),
        (this.checkoutDB.onerror = (e) => {
          throw (console.error('CheckoutDB Error', { event: e }), new Error('Could not load checkoutDB'));
        }),
        (this.checkoutDB.onupgradeneeded = () => {
          const e = this.checkoutDB.result.createObjectStore('addresses', { keyPath: 'addressName' });
          e.createIndex('address_street', ['street'], { unique: !1 }),
            e.createIndex('address_addressName', ['addressName'], { unique: !0 }),
            e.createIndex('address_street_suburb_city_postal', ['street', 'neighborhood', 'city', 'postalCode'], {
              unique: !0,
            });
        }),
        (this.checkoutDB.onsuccess = () => {
          const e = this.checkoutDB.result.transaction('addresses', 'readwrite');
          (this.addresses = e.objectStore('addresses')), (e.oncomplete = () => {});
        });
    }

    store() {
      return this.checkoutDB.result.transaction('addresses', 'readwrite').objectStore('addresses');
    }

    loadAddresses(e) {
      const t = e.map((e) => this.addOrUpdateAddress(e));
      return Promise.all(t).then((e) => e);
    }

    addOrUpdateAddress(e) {
      const t = this;
      return new Promise((s, a) => {
        const n = t.store().put(e);
        (n.onsuccess = () => {
          s({ success: !0, addressId: n.result });
        }),
          (n.onerror = (e) => {
            a(new Error({ sucess: !1, error: e?.target?.error }));
          });
      });
    }

    getAddresses() {
      const e = this;
      return new Promise((t) => {
        const s = e.store().getAll();
        (s.onsuccess = () => t(s.result)),
          (s.onerror = () => {
            console.error('Something wrong with getAddresses ? ...'), t([]);
          });
      });
    }

    getAddress(e) {
      const t = this;
      return new Promise((s) => {
        const a = t.store().get(e);
        (a.onsuccess = () => s(a.result)),
          (a.onerror = () => {
            console.error('Something wrong with getAddress ? ...'), s([]);
          });
      });
    }

    deleteAddress(e) {
      const t = this.addresses.delete(e);
      t.onsuccess = () => t.result;
    }

    clearData() {
      const e = this;
      return new Promise((t) => {
        const s = e.store().clear();
        (s.onsuccess = () => t(s.result)),
          (s.onerror = () => {
            console.error('Something wrong with clearData ? ...'), t([]);
          });
      });
    }
  })();
  const G = (e) => {
    let t = $(`#address-${e.addressName}`);
    t.length ? (t.after(M(e)), t.remove(), (t = null)) : $('#bash-address-list').append(M(e)),
      $('input[type="radio"][name="selected-address"]:checked').attr('checked', !1),
      $(`input[type="radio"][name="selected-address"][value="${e.addressName}"]`).attr('checked', !0);
  };
  const Z = async (e) => {
    if (!e.addressName) {
      const t = e.street
        .replace(/[^a-zA-Z0-9]/g, ' ')
        .trim()
        .replace(/\s/g, '-')
        .toLowerCase();
      e.addressName = `${Date.now()}-${t}`.substring(0, 50);
    }
    e.addressId || (e.addressId = e.addressName),
      W.addOrUpdateAddress(e).then(() => G(e)),
      (async (e) => {
        let t;
        const { email: s } = window.vtexjs.checkout.orderForm.clientProfileData;
        if (!e) return Promise.reject(new Error('No address provided.'));
        const a = e.addressName
          ? await (async (e, t) => {
              let s = {};
              const a = { headers: U({ cookie: !0, cache: !0, json: !1 }), credentials: 'include' };
              const n = await fetch(
                `${o}masterdata/addresses/?_fields=id&_where=addressName=${e}&timestamp=${Date.now()}`,
                a
              )
                .then((e) => e.json())
                .catch((e) => L(`GET_ADDRESS_ERROR: ${e?.message}`));
              return n && !n.error && n.data && n.data.length > 0 && ([s] = n.data), s;
            })(e.addressName)
          : {};
        (t = a?.id ? `${o}masterdata/address/${a.id}` : `${o}masterdata/addresses`),
          (e.complement = e.complement || l());
        const n = { userId: s, ...e };
        a.id || (n.addressName = e.addressId || `address-${Date.now()}`);
        const r = {
          method: 'PATCH',
          headers: U({ cookie: !0, cache: !0, json: !0 }),
          body: JSON.stringify(n),
          credentials: 'include',
        };
        await fetch(t, r)
          .then((e) => (e.status !== 204 ? e.json() : e))
          .then((e) => e)
          .catch((e) => L(`SAVE_ADDRESS_ERROR: ${e?.message}`));
      })(e);
  };
  const J = async (e) => W.getAddress(e);
  const H = async () => W.clearData();
  const K = async (e, t, s, a) => {
    const { orderFormId: n } = window.vtexjs.checkout.orderForm;
    s || (s = !1), a || (a = !1);
    const r = `/api/checkout/pub/orderForm/${n}/customData/${e}`;
    const i = JSON.stringify({
      ...t,
      ...(s && { assembleFurniture: new Boolean(t.assembleFurniture) }),
      ...(s && { hasSufficientSpace: new Boolean(t.hasSufficientSpace) }),
      ...(a && { sameAddress: new Boolean(t.sameAddress) }),
    });
    return fetch(r, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: i });
  };
  const z = (e) => {
    const { customData: t } = window.vtexjs.checkout.orderForm;
    let s = {};
    return (
      t &&
        t.customApps &&
        t.customApps.length > 0 &&
        t.customApps.forEach((t) => {
          t.id === e && (s = t.fields);
        }),
      s
    );
  };
  const Q = () => (
    (async () => {
      const e = await W.getAddresses();
      if (e.length > 0) return { data: e };
      const { email: t } = window.vtexjs.checkout.orderForm?.clientProfileData;
      const s = [
        'id',
        'addressType',
        'addressQuery',
        'addressName',
        'reference',
        'number',
        'geolocation',
        'receiverName',
        'complement',
        'companyBuilding',
        'street',
        'neighborhood',
        'city',
        'postalCode',
        'state',
        'country',
        'buildingType',
        'parkingDistance',
        'deliveryFloor',
        'liftOrStairs',
        'hasSufficientSpace',
        'assembleFurniture',
        'tvID',
      ].join(',');
      const a = { headers: U({ cookie: !0, cache: !0, json: !1 }), credentials: 'include' };
      const n = Date.now();
      return fetch(`${o}masterdata/addresses?t=${n}&_fields=${s}&_where=${encodeURIComponent(`userIdQuery=${t}`)}`, a)
        .then((e) => e.json())
        .then(async (e) => (e.data && W.loadAddresses(e.data), e))
        .catch((e) => L(`GET_ADDRESSES_ERROR: ${e?.message}`));
    })()
      .then(({ data: e }) => {
        const t = e.map((e) => M(e));
        document.getElementById('bash-address-list') &&
          (document.getElementById('bash-address-list').innerHTML = t.join('')),
          $('#back-button-select-address').hasClass('inactive') && $('#back-button-select-address').show(),
          v(),
          e.length < 1 &&
            (window.postMessage({ action: 'setDeliveryView', view: 'address-search' }),
            $('#bash--input-address-search').focus(),
            $('#back-button-select-address').hide(),
            $('#back-button-select-address').addClass('inactive'));
      })
      .catch((e) => {
        throw (console.error('ERROR getAddresses', e), new Error('Error getAddresses', e.message));
      }),
    '\n <div class="bash--addresses shimmer" id="bash-address-list">\n    Loading addresses...\n  </div>  \n  '
  );
  const Y = ({
    label: e,
    name: t,
    value: s = '',
    required: a = !0,
    type: n = 'text',
    placeholder: r,
    autoComplete: i = 'on',
    maxLength: o,
    minlength: d,
    disabled: l = !1,
    options: c,
    checked: u,
    error: p = 'This field is required.',
  }) => {
    const h = t.replace(/\s/g, '-');
    const m = `<label id="bash--label-${h}" for="bash--input-${h}">${e}</label>`;
    return `\n<p class="input bash--${n}field-${t.replace(/\s/g, '-')} bash--${n} ${a ? 'required' : 'optional'}">\n  ${
      e && n !== 'checkbox' ? m : ''
    }\n  ${(() => {
      switch (n) {
        case 'radio':
          return b({ name: t, options: c });
        case 'dropdown':
          return (({ name: e, disabled: t = !1, options: s, required: a }) => {
            const n = s.find((e) => !0 === e.selected);
            return `\n  <select \n    name="${e}" \n    ${a ? ' required ' : ''} \n    ${
              t ? ' disabled ' : ''
            } \n    id="bash--input-${e}" \n    class="input-large" \n  >\n  ${s
              .map(
                ({ value: e, label: t, selected: s }, a) =>
                  `\n    <option \n    ${a === 0 ? ' disabled ' : ''}\n    ${a !== 0 || n ? '' : ' selected '}\n    ${
                    s ? ' selected ' : ''
                  }\n      value="${e}" \n    >${t}</option>\n    `
              )
              .join('')}\n  </select>\n  `;
          })({ name: t, disabled: l, options: c, required: a });
        case 'note':
          return (({ value: e, name: t }) => `\n  <div class="bash--note-field ${t}">\n  ${e}\n  </div>\n  `)({
            name: t,
            value: s,
          });
        case 'checkbox':
          return (({ name: e, label: t, checked: s, value: a }) =>
            `\n    <label class="tfg-checkbox-label">\n       <input \n        type='checkbox' \n        name="${e}" \n        id="bash--input-${e}"\n        ${
              s ? "checked='checked'" : ''
            }\n        value=${a ?? ''}\n      />\n      <span>${t}</span>\n    </label>\n  `)({
            name: t,
            label: e,
            checked: u,
          });
        default:
          return (({
            name: e,
            value: t = '',
            required: s = !0,
            type: a = 'text',
            placeholder: n,
            autoComplete: r = 'on',
            minLength: i = 0,
            maxLength: o = 0,
          }) =>
            `\n  <input \n    ${s ? ' required ' : ''}\n    autocomplete="${r}" \n    id="bash--input-${e.replace(
              /\s/g,
              '-'
            )}" \n    type="${a}" \n    name="${e}" \n    ${i > 0 ? `minlength="${i}"` : ''}\n    ${
              o > 0 ? `maxlength="${o}"` : ''
            }\n    placeholder="${n ?? ''}" \n    class="input-xlarge" \n    value="${t}" \n  />\n`)({
            name: t,
            value: s,
            required: a,
            type: n,
            placeholder: r,
            autoComplete: i,
            maxLength: o,
            minlength: d,
          });
      }
    })()}\n  <span class="bash--field-error">${p}</span>\n</p>  \n`;
  };
  const X = () => (
    setTimeout(() => {
      (() => {
        if (!window.google) return;
        const e = document.getElementById('bash--input-address-search');
        const t = new window.google.maps.places.Autocomplete(e, { componentRestrictions: { country: 'ZA' } });
        window.google.maps.event.addListener(t, 'place_changed', () => {
          const s = t.getPlace();
          const { address_components: a, geometry: n } = s;
          ((e) => {
            const { street: t, neighborhood: s, postalCode: a, state: n, city: r } = e;
            document.getElementById('bash--address-form').reset(),
              (document.getElementById('bash--input-addressId').value = ''),
              (document.getElementById('bash--input-addressName').value = ''),
              (document.getElementById('bash--input-number').value = '  '),
              (document.getElementById('bash--input-street').value = t ?? ''),
              (document.getElementById('bash--input-neighborhood').value = s ?? ''),
              (document.getElementById('bash--input-city').value = r ?? ''),
              (document.getElementById('bash--input-postalCode').value = a ?? ''),
              (document.getElementById('bash--input-state').value = F(n));
          })(
            ((e, t) => {
              const s = e.find((e) => e.types.includes('street_number'))?.long_name;
              const a = e.find((e) => e.types.includes('route'))?.long_name;
              const n = e.find((e) => e.types.includes('sublocality'))?.long_name;
              const r = e.find((e) => e.types.includes('locality'))?.long_name;
              const i = e.find((e) => e.types.includes('postal_code'))?.long_name;
              const o = e.find((e) => e.types.includes('administrative_area_level_1'))?.long_name;
              const d = { lat: '', lng: '' };
              return (
                t && ((d.lat = t.location.lat()), (d.lng = t.location.lng())),
                { street: `${s ?? ''} ${a ?? ''}`.trim(), neighborhood: n, city: r, postalCode: i, state: o, ...d }
              );
            })(a, n)
          ),
            window.postMessage({ action: 'setDeliveryView', view: 'address-form' }),
            (e.value = '');
        });
      })();
    }, 500),
    Y({ name: 'address-search', placeholder: 'Start typing an address...', autoComplete: 'off' })
  );
  const ee = ({ hasFurn: e }) =>
    `\n  <div class="bash--delivery-container" id="bash--delivery-container" data-view="select-address">\n    <div id="bash--shipping-messages">\n      <div id="bash-alert-container"></div>\n      \n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can't collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n\n      \n  <div id="tfg-custom-mixed-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      We'll ship your furniture and other items in your cart to the selected address. \n      Only the furniture delivery fee will apply.\n      </p>\n  </div>\n\n       \n \n<div id="bash-delivery-error-container"   >\n</div>\n    </div>\n   <form id="bash--delivery-form" name="bash--delivery-form" method="post">\n\n    <section class="bash--delivery-view" data-section="select-address">\n    <div class="bash--heading">\n        <h2>Delivery address</h2>\n        <a href="#" data-view="address-search">Add address</a>\n      </div>\n      ${Q()}\n    </section>\n\n    <section id="bash-delivery-options" class="shipping-method bash--delivery-view" data-section="select-address">\n      <hr>\n      <div class="bash--heading sub-heading">\n        <h3>Delivery options</h3>\n        ${
      e
        ? '\n<a \n  href="http://image.tfgmedia.co.za/image/1/process/500x790?source=http://cdn.tfgmedia.co.za/15/Marketing/HTMLPages/Furniture_Delivery_Fees_tab_image.jpg"\n  class="furniture-fees-link" \n  target="_blank"\n>\n  Furniture delivery costs\n</a>\n'
        : ''
    }\n      </div>\n      \n  <label class="bash--delivery-option-display" >\n  ${b({
      name: 'delivery-option',
      options: [{ checked: !0, value: !0 }],
    })}\n   \n   <div id="bash--delivery-option-text" class="bash--delivery-option-text">\n      <span class="normal-delivery">Deliver within 3 - 5 days</span>\n   </div>\n\n  <div id="bash--delivery-fee" class="bash--delivery-fee">\n    R50\n  </div>\n</label>\n  \n      <button \n        class="submit btn-go-to-payment btn btn-large btn-success"\n        id="btn-save-delivery" \n        type="submit">\n          Go to payment\n      </button>\n    </section>\n   </form>\n\n    <section class="bash--delivery-view" data-section="address-search">\n      <div class="bash--heading">\n        <h3>Add a new delivery address</h3>\n        <a href='#' data-view='select-address' id='back-button-select-address'>&lt; Back</a>\n      </div>\n      ${X()} \n    </section>\n    \n    <section class="bash--delivery-view" data-section="address-form">\n       <div class="bash--heading">\n        <h3>Delivery address</h3>\n        <a href="#" class="back-button--search" data-view="address-search">&lt; Back</a>\n        <a href="#" class="back-button--select" data-view="select-address">&lt; Back</a>\n      </div>\n      \n  <form id="bash--address-form" method="post">\n    ${[
      { name: 'addressId', type: 'hidden', value: '', required: !1 },
      { name: 'addressName', type: 'hidden', value: '', required: !1, maxLength: 50 },
      { name: 'street', label: 'Street address', required: !0, value: '' },
      {
        name: 'addressType',
        label: 'Address type',
        required: !0,
        type: 'radio',
        options: [
          { value: 'residential', label: 'Residential', checked: !0 },
          { value: 'business', label: 'Business' },
        ],
      },
      { name: 'number', required: !1, value: '  ', type: 'hidden' },
      { name: 'companyBuilding', label: 'Building/Complex and number', required: !1, value: '', maxLength: 100 },
      { name: 'neighborhood', label: 'Suburb', value: '', maxLength: 750 },
      { name: 'city', label: 'City', required: !0, value: '', maxLength: 750 },
      { name: 'postalCode', label: 'Postal code', value: '', type: 'tel', minlength: 4, maxLength: 4 },
      {
        type: 'note',
        required: !1,
        name: 'suburb-postal-reminder',
        value: 'Make sure to specify the correct Suburb and Postal code so we can easily find your address.',
      },
      {
        name: 'state',
        label: 'Province',
        type: 'dropdown',
        options: [
          { value: '', label: 'Select' },
          { value: 'EC', label: 'Eastern Cape' },
          { value: 'FS', label: 'Free State' },
          { value: 'GP', label: 'Gauteng' },
          { value: 'KZN', label: 'KwaZulu-Natal' },
          { value: 'LP', label: 'Limpopo' },
          { value: 'MP', label: 'Mpumalanga' },
          { value: 'NC', label: 'Northern Cape' },
          { value: 'NW', label: 'North West' },
          { value: 'WC', label: 'Western Cape' },
        ],
      },
      { type: 'note', required: !1, name: 'country-display', label: 'Country', value: 'South Africa' },
      { type: 'hidden', required: !0, name: 'country', value: 'ZAF' },
      { name: 'receiverName', label: 'Recipient’s name', required: !0, value: D() },
      {
        name: 'complement',
        label: 'Recipient’s mobile number',
        required: !0,
        value: l(),
        type: 'tel',
        helperText: 'We send shipping updates to this number.',
      },
    ]
      .map((e) => Y(e))
      .join(
        ''
      )}\n\n    <button \n      class="submit btn-go-to-payment btn btn-large btn-success"\n      id="btn-save-address" \n      type="submit"\n    >\n      Save address\n    </button>\n  </form>\n  \n  \n    </section>\n    \n  </div>`;
  const te = {
    buildingType: [
      { value: '', label: 'Please select', disabled: !0 },
      { value: 'freeStanding', label: 'Free standing' },
      { value: 'houseInComplex', label: 'House in complex' },
      { value: 'townhouse', label: 'Townhouse' },
      { value: 'apartment', label: 'Apartment' },
    ],
    parkingDistance: [
      { value: '', label: 'Please select', disabled: !0 },
      { value: 15, label: '15 meters or less' },
      { value: 25, label: '25 meters' },
      { value: 50, label: '50 meters' },
      { value: 100, label: '100 meters or more' },
    ],
    deliveryFloor: [
      { value: '', label: 'Please select', disabled: !0 },
      { value: 'ground', label: 'Ground' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3+', label: '3+' },
    ],
    liftOrStairs: [
      { value: '', label: 'Please select', disabled: !0 },
      { value: 'lift', label: 'Lift' },
      { value: 'stairs', label: 'Stairs' },
    ],
  };
  const se = ({ hasFurn: e, hasTV: t, hasSim: s }) => {
    const a = `\n    <div id="furniture-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>Furniture information needed</h3>\n\n        <p class="tfg-custom-subtitle">\n        We need some more information to prepare delivery of your furniture items to your address.\n        <br>\n        <br>\n        Please ensure sufficient space to receive the goods and keep in mind \n        that our couriers aren't able to hoist goods onto balconies.\n      </p>\n\n      </div>\n   \n      ${(() => {
      const { buildingType: e, parkingDistance: t, deliveryFloor: s, liftOrStairs: a } = te;
      return `\n    ${[
        { name: 'buildingType', label: 'Building Type', required: !0, type: 'dropdown', options: e },
        { name: 'parkingDistance', label: 'Parking Distance', required: !0, type: 'dropdown', options: t },
        { name: 'deliveryFloor', label: 'Delivery Floor', required: !0, type: 'dropdown', options: s },
        { name: 'liftOrStairs', label: 'Lift or Stairs', required: !1, type: 'dropdown', options: a },
        {
          name: 'hasSufficientSpace',
          label: 'Is there sufficent corner/passage door space?',
          value: !1,
          type: 'checkbox',
          checked: !1,
        },
        {
          name: 'assembleFurniture',
          label: 'Would you like us to assemble your furniture items?',
          type: 'checkbox',
          value: !1,
          checked: !1,
        },
      ]
        .map((e) => Y(e))
        .join('')}\n  `;
    })()}\n    </div>\n  `;
    const n = `\n    <div id="tv-license-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>TV license information needed</h3>\n        <p class="tfg-custom-subtitle">Please provide your ID number to validate your TV Licence.</p>\n      </div>\n      \n    ${Y(
      { name: 'tv_tvID', label: 'SA ID number', required: !0, value: '' }
    )}\n  \n    </div>\n  `;
    const r = `\n    <div id="rica-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>Rica information required</h3>\n        <p class="tfg-custom-subtitle">\n          To RICA your SIM card, provide your SA ID (or foreign passport) number and your address as\n          it appears on a valid proof of residence.\n        </p> \n      </div>\n        ${(() => {
      const {
        shippingData: { selectedAddress: e },
      } = window.vtexjs.checkout.orderForm;
      const t = [
        { name: 'rica_fullName', label: 'Full name and surname', required: !0, value: D() || '' },
        { name: 'rica_streetAddress', label: 'Street address', required: !0, value: e?.street || '' },
        { name: 'rica_suburb', label: 'Suburb', value: e?.neighborhood || '' },
        { name: 'rica_city', label: 'City', required: !0, value: e?.city || '' },
        {
          name: 'rica_postalCode',
          label: 'Postal code',
          value: e?.postalCode || '',
          type: 'tel',
          minlength: 4,
          maxLength: 4,
        },
        {
          name: 'rica_province',
          label: 'Province',
          type: 'dropdown',
          options: [
            { value: '', label: 'Select', disabled: !0 },
            { value: 'EC', label: 'Eastern Cape' },
            { value: 'FS', label: 'Free State' },
            { value: 'GP', label: 'Gauteng' },
            { value: 'KZN', label: 'KwaZulu-Natal' },
            { value: 'LP', label: 'Limpopo' },
            { value: 'MP', label: 'Mpumalanga' },
            { value: 'NC', label: 'Northern Cape' },
            { value: 'NW', label: 'North West' },
            { value: 'WC', label: 'Western Cape' },
          ],
        },
        { type: 'note', required: !1, name: 'rica-country-display', label: 'Country', value: 'South Africa' },
        { type: 'hidden', required: !0, name: 'country', value: 'ZAF' },
      ];
      return `\n    ${[
        { name: 'rica_idOrPassport', label: 'ID or Passport number', required: !0, value: '' },
        {
          name: 'rica_sameAddress',
          label: 'Residential address the same as delivery address',
          type: 'checkbox',
          checked: !0,
          required: !1,
        },
      ]
        .map((e) => Y(e))
        .join('')}\n    <div class="rica-conditional-fields hide">\n    ${t.map((e) => Y(e)).join('')}\n    </div>\n  `;
    })()}\n    </div>\n    `;
    return `\n  <section class="bash--extra-fields bash--delivery-view" data-section="select-address">\n    ${
      e ? a : ''
    }\n    ${t ? n : ''}\n    ${s ? r : ''}\n  </section>`;
  };
  const ae = (() => {
    const e = { view: 'list', hasFurn: !1, hasTVs: !1, hasSim: !1 };
    const t = () => {
      if (!$('#bash--delivery-container').length) {
        if (window.vtexjs.checkout.orderForm) {
          const t = window.vtexjs.checkout.orderForm?.items;
          const { hasFurniture: s, hasTVs: a, hasSimCards: n } = m(t);
          (e.hasFurn = s), (e.hasTVs = a), (e.hasSim = n);
        }
        $('.shipping-data .box-step').append(ee({ hasFurn: e.hasFurn })),
          (e.hasFurn || e.hasSim || e.hasTVs) &&
            ($('#bash-delivery-options').before(se({ hasFurn: e.hasFurn, hasSim: e.hasSim, hasTV: e.hasTVs })),
            e.hasFurn &&
              (async () => {
                const e = z(i);
                I(e, y), j(e?.deliveryFloor);
              })(),
            e.hasSim && A(),
            e.hasTVs &&
              (async () => {
                const e = z(r);
                I(e, k, 'tv');
              })()),
          $('select, input').on('invalid', function () {
            const e = this;
            $(e)[0].setCustomValidity(' '),
              $(e).parents('form').addClass('show-form-errors'),
              $(e).off('change keyUp'),
              $(e).on('change keyUp', () => {
                $(e)[0].setCustomValidity('');
              });
          });
      }
    };
    return (
      $(window).unload(() => {
        H();
      }),
      $(document).ready(() => {
        H(),
          window.location.hash === s
            ? (t(), $('.bash--delivery-container.hide').removeClass('hide'))
            : $('.bash--delivery-container:not(.hide)').length &&
              $('.bash--delivery-container:not(.hide)').addClass('hide');
      }),
      $(window).on('hashchange', () => {
        window.location.hash === s
          ? (t(), N(), $('.bash--delivery-container.hide').removeClass('hide'))
          : $('.bash--delivery-container:not(.hide)').length &&
            $('.bash--delivery-container:not(.hide)').addClass('hide');
      }),
      $(window).on('orderFormUpdated.vtex', () => {
        const e = window.vtexjs.checkout.orderForm?.items;
        const o = window.vtexjs.checkout.orderForm.shippingData?.address?.addressType;
        const { hasTVs: d, hasSimCards: l } = m(e);
        const { messages: c } = window.vtexjs.checkout.orderForm;
        if (window.location.hash === s) {
          const e = c.filter((e) => e.status === 'error');
          e && E(e);
        }
        if (o === 'search') {
          if (d || l)
            return (
              window.location.hash !== s && (window.location.hash = s),
              void setTimeout(() => document.getElementById('shipping-option-delivery')?.click(), 2e3)
            );
          $('#shipping-data:not(collection-active)').addClass('collection-active'),
            $('.delivery-active').removeClass('delivery-active');
        } else
          t(),
            $('#shipping-data:not(delivery-active)').addClass('delivery-active'),
            $('.collection-active').removeClass('collection-active');
        N(),
          (() => {
            if (!window.vtexjs.checkout.orderForm.totalizers) return;
            const { value: e } = window.vtexjs.checkout.orderForm.totalizers.find((e) => e.id === 'Shipping') || {
              value: 5e3,
            };
            let t = 'Free';
            e > 0 && (t = `R${(e / 100).toFixed(2).replace('.00', '')}`),
              $('#bash--delivery-fee').length > 0 && (document.getElementById('bash--delivery-fee').innerHTML = t);
          })(),
          window.location.hash !== a ||
            (() => {
              const e = window.vtexjs.checkout.orderForm?.items;
              const { hasTVs: t, hasSimCards: s, hasFurniture: a } = m(e);
              const o = window.vtexjs.checkout.orderForm.shippingData?.address?.addressType;
              let d = !0;
              if ((t && (z(r).tvID || (d = !1)), s)) {
                const e = z(n);
                (e.idOrPassport && e.streetAddress && e.postalCode) || (d = !1);
              }
              if (a && o !== 'search') {
                const e = z(i);
                (e.buildingType && e.parkingDistance && e.deliveryFloor) || (d = !1);
              }
              return d;
            })() ||
            (window.location.hash = s);
      }),
      $(document).on('click', 'a[data-view]', function (e) {
        e.preventDefault();
        const t = $(this).data('view');
        const s = decodeURIComponent($(this).data('content'));
        window.postMessage({ action: 'setDeliveryView', view: t, content: s });
      }),
      $(document).on('change', 'input[type="radio"][name="selected-address"]', function () {
        const e = ((t = $(this).parents('.bash--address-listing').data('address')), JSON.parse(decodeURIComponent(t)));
        let t;
        document.forms['bash--delivery-form'] &&
          (document.forms['bash--delivery-form'].reset(),
          document.forms['bash--delivery-form'].classList.remove('show-form-errors')),
          J(e.addressName).then((t) => {
            B(t || e, { validateExtraFields: !1 }),
              $('input[type="radio"][name="selected-address"]:checked').attr('checked', !1),
              $(this).attr('checked', !0);
          });
      }),
      $(document).on('change', '#bash--input-rica_sameAddress', function () {
        this.checked
          ? $('.rica-conditional-fields').slideUp(() => A())
          : ((() => {
              const e = $('#bash--input-rica_idOrPassport').val();
              I(
                {
                  idOrPassport: e ?? '',
                  fullName: '',
                  streetAddress: '',
                  suburb: '',
                  city: '',
                  postalCode: '',
                  province: '',
                },
                w,
                'rica_',
                !0
              );
            })(),
            $('.rica-conditional-fields').slideDown(() => $('#bash--input-rica_fullName').focus()));
      }),
      $(document).on('change', 'input[name="addressType"]', function () {
        $(this).is(':checked') &&
          ($(this).val() === 'business'
            ? $('#bash--label-companyBuilding').text('Business name')
            : $('#bash--label-companyBuilding').text('Building/Complex and number'));
      }),
      $(document).on('click', '#shipping-option-pickup-in-point, #shipping-option-delivery', function () {
        $(this).attr('id') === 'shipping-option-pickup-in-point'
          ? $('#bash--delivery-container').hide()
          : $('#bash--delivery-container').show();
      }),
      $(document).on('change', '#bash--input-deliveryFloor', function () {
        j(this.value);
      }),
      $(document).on('submit', '#bash--address-form', _),
      $(document).on('submit', '#bash--delivery-form', R),
      $(document).on('click', '.remove-cart-item', function (e) {
        let t;
        e.preventDefault(),
          (t = $(this).data('index')),
          C(),
          window.vtexjs.checkout
            .updateItems([{ index: `${t}`, quantity: 0 }])
            .then((e) => {
              console.info('ITEM REMOVED', { orderForm: e });
            })
            .done(() => {
              v();
            });
      }),
      window.addEventListener('message', (e) => {
        const { data: t } = e;
        if (t && t.action)
          if (t.action === 'setDeliveryView') {
            if (
              (document.querySelector('.bash--delivery-container').setAttribute('data-view', t.view),
              (t.view === 'address-form' || t.view === 'address-edit') && (q('#bash--input-complement'), t.content))
            ) {
              const e = JSON.parse(decodeURIComponent($(`#${t.content}`).data('address')));
              S(e);
            }
          } else console.error('Unknown action', t.action);
      }),
      { state: e, init: () => {} }
    );
  })();
  const ne = (() => {
    const e = {
      showFurnitureForm: !1,
      showTVIDForm: !1,
      showRICAForm: !1,
      showTVorRICAMsg: !1,
      showMixedProductsMsg: !1,
      runningObserver: !1,
    };
    const t = () => {
      setTimeout(() => {
        (() => {
          if (window.vtexjs.checkout.orderForm) {
            const { items: t } = window.vtexjs.checkout.orderForm;
            const { hasFurniture: s, hasTVs: a, hasSimCards: n, categories: r } = m(t);
            (e.showFurnitureForm = s),
              (e.showTVIDForm = a),
              (e.showRICAForm = n),
              (e.showTVorRICAMsg = e.showTVIDForm || e.showRICAForm),
              (e.showMixedProductsMsg = t.length > 1 && s && !r.every((e) => e === d));
          }
        })(),
          e.showFurnitureForm ? $('div.subheader').css('display', 'none') : $('div.subheader').css('display', 'block');
      }, 500);
    };
    return (
      $(document).ready(() => {
        t();
      }),
      $(window).on('hashchange orderFormUpdated.vtex', () => {
        t();
      }),
      $(document).on('click', '#shipping-data .btn-link.vtex-omnishipping-1-x-btnDelivery', () => {
        t();
      }),
      {
        state: e,
        setView: (e) => {
          document.body.setAttribute('data-delivery-view', e);
        },
        showCustomSections: () => {
          const t = $('#tfg-custom-tvrica-msg').length > 0;
          const s = $('#tfg-custom-mixed-msg').length > 0;
          let a = !1;
          let n;
          (e.showTVorRICAMsg || e.showMixedProductsMsg) &&
            ($('.vtex-omnishipping-1-x-deliveryChannelsWrapper.custom-disabled').length < 1 &&
              ($('#shipping-option-delivery').trigger('click'),
              $('.vtex-omnishipping-1-x-deliveryChannelsWrapper').addClass('custom-disabled')),
            e.showTVorRICAMsg &&
              !t &&
              ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(
                '\n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can\'t collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n'
              ),
              (a = !0)),
            e.showMixedProductsMsg &&
              !s &&
              ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(
                '\n  <div id="tfg-custom-mixed-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      We\'ll ship your furniture and other items in your cart to the selected address. \n      Only the furniture delivery fee will apply.\n      </p>\n  </div>\n'
              ),
              (a = !0))),
            a &&
              ((n = '.tfg-custom-step'),
              $(n).addClass('custom-step-border'),
              $(n).last().addClass('last-custom-step-border'));
        },
        init: () => {},
      }
    );
  })();
  const re = (() => {
    const e = { validForm: !0, runningObserver: !1 };
    const a = (s) => {
      $(`#${s}`).length > 0 && !$(`#${s}`).attr('disabled') && !$(`#${s}`).val()
        ? ($(`.${s}`).addClass('error'), $(`.${s}`).append(t), $(`.${s} span.error`).show(), (e.validForm = !1))
        : $(`.${s}`).removeClass('error');
    };
    const d = (e) => {
      e.forEach((e) => {
        a(e);
      });
    };
    const m = () => {
      const { showFurnitureForm: t, showRICAForm: s, showTVIDForm: m } = ne.state;
      if (
        ($('span.help.error').remove(),
        (e.validForm = !0),
        $('div.address-list.vtex-omnishipping-1-x-addressList').length <= 0 &&
          (a('ship-receiverName'),
          h(document.querySelector('.vtex-omnishipping-1-x-address input#ship-complement').value)
            ? $('.vtex-omnishipping-1-x-address .ship-complement').removeClass('error')
            : ($('.vtex-omnishipping-1-x-address .ship-complement').addClass('error'),
              $('.vtex-omnishipping-1-x-address .ship-complement').append(
                '<span class="help error">This field is required.</span>'
              ),
              $('.vtex-omnishipping-1-x-address .ship-complement span.error').show(),
              (e.validForm = !1))),
        ne.state.showFurnitureForm &&
          d(['tfg-building-type', 'tfg-parking-distance', 'tfg-delivery-floor', 'tfg-lift-stairs']),
        ne.state.showRICAForm &&
          d([
            'tfg-rica-id-passport',
            'tfg-rica-fullname',
            'tfg-rica-street',
            'tfg-rica-suburb',
            'tfg-rica-city',
            'tfg-rica-postal-code',
            'tfg-rica-province',
          ]),
        ne.state.showTVIDForm && a('tfg-tv-licence'),
        e.validForm,
        e.validForm)
      ) {
        if (s) {
          const e = (() => {
            const e = {};
            return (
              (e.idOrPassport = $('#tfg-rica-id-passport').val()),
              (e.sameAddress = $('#tfg-rica-same-address').is(':checked')),
              (e.fullName = $('#tfg-rica-fullname').val()),
              (e.streetAddress = $('#tfg-rica-street').val()),
              (e.suburb = $('#tfg-rica-suburb').val()),
              (e.city = $('#tfg-rica-city').val()),
              (e.postalCode = $('#tfg-rica-postal-code').val()),
              (e.province = $('#tfg-rica-province').val()),
              (e.country = $('#tfg-rica-country').val()),
              e
            );
          })();
          p(n, e);
        }
        const e = {};
        if (t) {
          const t = (() => {
            const e = { furnitureReady: !0 };
            return (
              (e.buildingType = $('#tfg-building-type').val()),
              (e.parkingDistance = $('#tfg-parking-distance').val()),
              (e.deliveryFloor = $('#tfg-delivery-floor').val()),
              $('#tfg-lift-stairs').attr('disabled') || (e.liftOrStairs = $('#tfg-lift-stairs').val()),
              (e.hasSufficientSpace = $('#tfg-sufficient-space').is(':checked')),
              (e.assembleFurniture = $('#tfg-assemble-furniture').is(':checked')),
              e
            );
          })();
          p(i, t), Object.assign(e, t);
        }
        if (m) {
          const t = { tvID: $('#tfg-tv-licence').val() };
          p(r, t), Object.assign(e, t);
        }
        (async (e = {}) => {
          let t;
          const { email: s } = window.vtexjs.checkout.orderForm.clientProfileData;
          const { address: a } = window.vtexjs.checkout.orderForm.shippingData;
          if (!a) return;
          const n = a?.addressId
            ? await (async (e, t) => {
                let s = {};
                const a = { headers: u({ cookie: !0, cache: !0, json: !1 }), credentials: 'include' };
                const n = await fetch(
                  `${o}masterdata/addresses/${t}&_where=addressName=${e}&timestamp=${Date.now()}`,
                  a
                )
                  .then((e) => e.json())
                  .catch((e) => c(`GET_ADDRESS_ERROR: ${e?.message}`));
                return n && !n.error && n.data && n.data.length > 0 && ([s] = n.data), s;
              })(a.addressId, '?_fields=id')
            : {};
          (a.addressType = localStorage.getItem('addressType')),
            (t = n?.id ? `${o}masterdata/address/${n.id}` : `${o}masterdata/addresses`),
            (a.complement = a.complement || l());
          const r = { userId: s, ...a, ...e };
          n.id || (r.addressName = a.addressId);
          const i = {
            method: 'PATCH',
            headers: u({ cookie: !0, cache: !0, json: !0 }),
            body: JSON.stringify(r),
            credentials: 'include',
          };
          await fetch(t, i)
            .then((e) => {
              localStorage.setItem('shippingDataCompleted', !0), e.status !== 204 && e.json();
            })
            .catch((e) => c(`SAVE_ADDRESS_ERROR: ${e?.message}`));
        })(e),
          setTimeout(() => {
            $('#btn-go-to-payment').trigger('click'),
              (() => {
                const e = localStorage.getItem('addressType');
                window.vtexjs.checkout.getOrderForm().then((t) => {
                  const { shippingData: s } = t;
                  return (
                    (s.selectedAddresses[0].addressType = e), window.vtexjs.checkout.sendAttachment('shippingData', s)
                  );
                });
              })();
          }, 750);
      }
    };
    const v = () => {
      $('div.address-list').length < 1 &&
      $('#shipping-option-delivery').hasClass('shp-method-option-active') &&
      $('body').data('delivery-view') !== 'address-list'
        ? $('body:not(.has-no-addresses)').addClass('has-no-addresses')
        : $('body.has-no-addresses').removeClass('has-no-addresses'),
        window.location.hash === s &&
          setTimeout(() => {
            $('#shipping-option-delivery').hasClass('shp-method-option-active') &&
              (() => {
                if ($('#custom-go-to-payment').length <= 0) {
                  const e = $('#btn-go-to-payment');
                  const t = e.clone(!1);
                  $(e).hide(),
                    $(t).data('bind', ''),
                    $(t).removeAttr('id').attr('id', 'custom-go-to-payment'),
                    $(t).removeAttr('data-bind'),
                    $(t).css('display', 'block'),
                    $('p.btn-go-to-payment-wrapper').append(t),
                    $(t).on('click', m);
                }
              })(),
              g();
          }, 750);
    };
    const g = () => {
      if (e.runningObserver) return;
      const t = document.querySelector('.shipping-container .box-step');
      const a = new MutationObserver(() => {
        (e.runningObserver = !0),
          window.location.hash !== s || $('btn-link vtex-omnishipping-1-x-btnDelivery').length || v();
      });
      t && a.observe(t, { attributes: !1, childList: !0, characterData: !1 });
    };
    return (
      $(document).on('change', '.vtex-omnishipping-1-x-deliveryGroup #tfg-delivery-floor', function () {
        $(this).val() === 'Ground'
          ? ($('#tfg-lift-stairs').val(''),
            $('#tfg-lift-stairs').attr('disabled', 'disabled'),
            $('#tfg-lift-stairs').next('span.help.error').remove(),
            $('.tfg-lift-stairs').removeClass('error'))
          : $('#tfg-lift-stairs').removeAttr('disabled');
      }),
      $(document).on(
        'change',
        '.vtex-omnishipping-1-x-deliveryGroup .tfg-custom-selector, .vtex-omnishipping-1-x-deliveryGroup .tfg-input',
        function () {
          $(this).val()
            ? ($(this).parent().removeClass('error'),
              $(this).next('span.help.error').remove(),
              $(this).addClass('tfg-input-completed'))
            : $(this).removeClass('tfg-input-completed');
        }
      ),
      $(document).on('change keyup', '.vtex-omnishipping-1-x-addressForm input, #tfg-tv-licence', function () {
        $(this).val() && ($(this).parent().removeClass('error'), $(this).next('span.help.error').remove());
      }),
      $(document).on('change', '.vtex-omnishipping-1-x-deliveryGroup #tfg-rica-same-address', function () {
        $(this).is(':checked')
          ? ((e = 'customApps') => {
              let t;
              if (e === 'shippingAddress') {
                const { address: e } = window.vtexjs.checkout.orderForm.shippingData;
                t = {
                  idOrPassport: '',
                  sameAddress: 'true',
                  fullName: e.receiverName || $('#ship-receiverName').val(),
                  streetAddress: `${e.street}, ${e.number}`,
                  suburb: e.neighborhood,
                  city: e.city,
                  postalCode: e.postalCode,
                  province: e.state,
                };
              } else
                e === 'customApps' &&
                  (t = ((e) => {
                    const { customData: t } = window.vtexjs.checkout.orderForm;
                    let s = {};
                    return (
                      t &&
                        t.customApps &&
                        t.customApps.length > 0 &&
                        t.customApps.forEach((e) => {
                          e.id === 'ricafields' && (s = e.fields);
                        }),
                      s
                    );
                  })());
              t &&
                !jQuery.isEmptyObject(t) &&
                (e === 'customApps' &&
                  ($('#tfg-rica-id-passport').val(t.idOrPassport),
                  $('#tfg-rica-same-address').prop('checked', t.sameAddress === 'true')),
                $('#tfg-rica-fullname').val(t.fullName),
                $('#tfg-rica-street').val(t.streetAddress),
                $('#tfg-rica-suburb').val(t.suburb),
                $('#tfg-rica-city').val(t.city),
                $('#tfg-rica-postal-code').val(t.postalCode),
                $('#tfg-rica-province').val(t.province));
            })('shippingAddress')
          : $('.rica-field').val('');
      }),
      $(document).on('click', '#shipping-data .btn-link.vtex-omnishipping-1-x-btnDelivery', () => {
        v();
      }),
      $(document).ready(() => {
        v();
      }),
      $(window).on('hashchange orderFormUpdated.vtex', () => {
        v();
      }),
      { state: e, init: () => {} }
    );
  })();
  ne.init(), re.init(), g.init(), ae.init();
})();
