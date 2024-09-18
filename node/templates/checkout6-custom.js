/*! For license information please see checkout6-custom.js.LICENSE.txt */
;(() => {
  'use strict'
  var e = {
      176: (e, t, r) => {
        function n() {
          return (
            !(
              'undefined' != typeof __SENTRY_BROWSER_BUNDLE__ &&
              __SENTRY_BROWSER_BUNDLE__
            ) &&
            '[object process]' ===
              Object.prototype.toString.call(
                'undefined' != typeof process ? process : 0
              )
          )
        }
        function o(e, t) {
          return e.require(t)
        }
        r.d(t, { l$: () => o, KV: () => n }), (e = r.hmd(e))
      },
      170: (e, t, r) => {
        r.d(t, { ph: () => u, yW: () => c })
        var n = r(176),
          o = r(235)
        e = r.hmd(e)
        const i = (0, o.Rf)(),
          a = { nowSeconds: () => Date.now() / 1e3 },
          d = (0, n.KV)()
            ? (function () {
                try {
                  return (0, n.l$)(e, 'perf_hooks').performance
                } catch (e) {
                  return
                }
              })()
            : (function () {
                const { performance: e } = i
                if (e && e.now)
                  return {
                    now: () => e.now(),
                    timeOrigin: Date.now() - e.now(),
                  }
              })(),
          s =
            void 0 === d
              ? a
              : { nowSeconds: () => (d.timeOrigin + d.now()) / 1e3 },
          c = a.nowSeconds.bind(a),
          u = s.nowSeconds.bind(s)
        let l
        ;(() => {
          const { performance: e } = i
          if (!e || !e.now) return void (l = 'none')
          const t = 36e5,
            r = e.now(),
            n = Date.now(),
            o = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
            a = o < t,
            d = e.timing && e.timing.navigationStart,
            s = 'number' == typeof d ? Math.abs(d + r - n) : t
          a || s < t
            ? o <= s
              ? ((l = 'timeOrigin'), e.timeOrigin)
              : (l = 'navigationStart')
            : (l = 'dateNow')
        })()
      },
      235: (e, t, r) => {
        function n(e) {
          return e && e.Math == Math ? e : void 0
        }
        r.d(t, { Rf: () => i, YO: () => a, n2: () => o })
        const o =
          ('object' == typeof globalThis && n(globalThis)) ||
          ('object' == typeof window && n(window)) ||
          ('object' == typeof self && n(self)) ||
          ('object' == typeof r.g && n(r.g)) ||
          (function () {
            return this
          })() ||
          {}
        function i() {
          return o
        }
        function a(e, t, r) {
          const n = r || o,
            i = (n.__SENTRY__ = n.__SENTRY__ || {})
          return i[e] || (i[e] = t())
        }
      },
    },
    t = {}
  function r(n) {
    var o = t[n]
    if (void 0 !== o) return o.exports
    var i = (t[n] = { id: n, loaded: !1, exports: {} })
    return e[n](i, i.exports, r), (i.loaded = !0), i.exports
  }
  ;(r.d = (e, t) => {
    for (var n in t)
      r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
  }),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (r.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              e.id
          )
        },
      }),
      e
    )),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = function () {
        return '\n  <p id="box-pickup-complement" \n  class="input custom-field-complement tfg-custom-addressForm">\n    <label>Mobile number</label>\n    <input \n      id="custom-pickup-complement" \n      class="input-xlarge success" \n      type="tel" \n      name="complement" \n      placeholder="" \n    />\n  </p>'
      }
      var t = '#/shipping',
        n = '#/payment',
        o = 'search',
        i = 'pickup',
        a = 'ricafields',
        d = 'tvfields',
        s = 'pickup',
        c = 'deliver',
        u = ['bash.com', 'preprod--thefoschini.myvtex.com'].includes(
          window.location.host
        )
          ? 'https://store-api.www.bash.com/custom-api/'
          : ['thefoschiniqa.myvtex.com', 'staging.tfglabs.dev'].includes(
              window.location.host
            )
          ? 'https://store-api.staging.tfglabs.dev/custom-api/'
          : ''
              .concat(window.location.protocol, '//')
              .concat(window.location.host, '/custom-api/'),
        l = r(235)
      function h() {
        const e = l.n2,
          t = e.crypto || e.msCrypto
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, '')
        const r =
          t && t.getRandomValues
            ? () => t.getRandomValues(new Uint8Array(1))[0]
            : () => 16 * Math.random()
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e) =>
          (e ^ ((15 & r()) >> (e / 4))).toString(16)
        )
      }
      var f = r(170)
      const p = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace']
      function v(e) {
        if (!('console' in l.n2)) return e()
        const t = l.n2.console,
          r = {}
        p.forEach((e) => {
          const n = t[e] && t[e].__sentry_original__
          e in t && n && ((r[e] = t[e]), (t[e] = n))
        })
        try {
          return e()
        } finally {
          Object.keys(r).forEach((e) => {
            t[e] = r[e]
          })
        }
      }
      function m() {
        let e = !1
        const t = {
          enable: () => {
            e = !0
          },
          disable: () => {
            e = !1
          },
        }
        return (
          'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
            ? p.forEach((r) => {
                t[r] = (...t) => {
                  e &&
                    v(() => {
                      l.n2.console[r](`Sentry Logger [${r}]:`, ...t)
                    })
                }
              })
            : p.forEach((e) => {
                t[e] = () => {}
              }),
          t
        )
      }
      let y
      y =
        'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          ? (0, l.YO)('logger', m)
          : m()
      var g = r(176)
      const b = 'production',
        w = Object.prototype.toString
      function x(e) {
        return (function (e, t) {
          return w.call(e) === `[object ${t}]`
        })(e, 'Object')
      }
      function _(e) {
        return Boolean(e && e.then && 'function' == typeof e.then)
      }
      var O
      !(function (e) {
        ;(e[(e.PENDING = 0)] = 'PENDING'),
          (e[(e.RESOLVED = 1)] = 'RESOLVED'),
          (e[(e.REJECTED = 2)] = 'REJECTED')
      })(O || (O = {}))
      class E {
        __init() {
          this._state = O.PENDING
        }
        __init2() {
          this._handlers = []
        }
        constructor(e) {
          E.prototype.__init.call(this),
            E.prototype.__init2.call(this),
            E.prototype.__init3.call(this),
            E.prototype.__init4.call(this),
            E.prototype.__init5.call(this),
            E.prototype.__init6.call(this)
          try {
            e(this._resolve, this._reject)
          } catch (e) {
            this._reject(e)
          }
        }
        then(e, t) {
          return new E((r, n) => {
            this._handlers.push([
              !1,
              (t) => {
                if (e)
                  try {
                    r(e(t))
                  } catch (e) {
                    n(e)
                  }
                else r(t)
              },
              (e) => {
                if (t)
                  try {
                    r(t(e))
                  } catch (e) {
                    n(e)
                  }
                else n(e)
              },
            ]),
              this._executeHandlers()
          })
        }
        catch(e) {
          return this.then((e) => e, e)
        }
        finally(e) {
          return new E((t, r) => {
            let n, o
            return this.then(
              (t) => {
                ;(o = !1), (n = t), e && e()
              },
              (t) => {
                ;(o = !0), (n = t), e && e()
              }
            ).then(() => {
              o ? r(n) : t(n)
            })
          })
        }
        __init3() {
          this._resolve = (e) => {
            this._setResult(O.RESOLVED, e)
          }
        }
        __init4() {
          this._reject = (e) => {
            this._setResult(O.REJECTED, e)
          }
        }
        __init5() {
          this._setResult = (e, t) => {
            this._state === O.PENDING &&
              (_(t)
                ? t.then(this._resolve, this._reject)
                : ((this._state = e),
                  (this._value = t),
                  this._executeHandlers()))
          }
        }
        __init6() {
          this._executeHandlers = () => {
            if (this._state === O.PENDING) return
            const e = this._handlers.slice()
            ;(this._handlers = []),
              e.forEach((e) => {
                e[0] ||
                  (this._state === O.RESOLVED && e[1](this._value),
                  this._state === O.REJECTED && e[2](this._value),
                  (e[0] = !0))
              })
          }
        }
      }
      function S(e) {
        return C(e, new Map())
      }
      function C(e, t) {
        if (x(e)) {
          const r = t.get(e)
          if (void 0 !== r) return r
          const n = {}
          t.set(e, n)
          for (const r of Object.keys(e)) void 0 !== e[r] && (n[r] = C(e[r], t))
          return n
        }
        if (Array.isArray(e)) {
          const r = t.get(e)
          if (void 0 !== r) return r
          const n = []
          return (
            t.set(e, n),
            e.forEach((e) => {
              n.push(C(e, t))
            }),
            n
          )
        }
        return e
      }
      function P(e, t = {}) {
        if (
          (t.user &&
            (!e.ipAddress &&
              t.user.ip_address &&
              (e.ipAddress = t.user.ip_address),
            e.did ||
              t.did ||
              (e.did = t.user.id || t.user.email || t.user.username)),
          (e.timestamp = t.timestamp || (0, f.ph)()),
          t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
          t.sid && (e.sid = 32 === t.sid.length ? t.sid : h()),
          void 0 !== t.init && (e.init = t.init),
          !e.did && t.did && (e.did = `${t.did}`),
          'number' == typeof t.started && (e.started = t.started),
          e.ignoreDuration)
        )
          e.duration = void 0
        else if ('number' == typeof t.duration) e.duration = t.duration
        else {
          const t = e.timestamp - e.started
          e.duration = t >= 0 ? t : 0
        }
        t.release && (e.release = t.release),
          t.environment && (e.environment = t.environment),
          !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
          !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
          'number' == typeof t.errors && (e.errors = t.errors),
          t.status && (e.status = t.status)
      }
      class k {
        constructor() {
          ;(this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {})
        }
        static clone(e) {
          const t = new k()
          return (
            e &&
              ((t._breadcrumbs = [...e._breadcrumbs]),
              (t._tags = { ...e._tags }),
              (t._extra = { ...e._extra }),
              (t._contexts = { ...e._contexts }),
              (t._user = e._user),
              (t._level = e._level),
              (t._span = e._span),
              (t._session = e._session),
              (t._transactionName = e._transactionName),
              (t._fingerprint = e._fingerprint),
              (t._eventProcessors = [...e._eventProcessors]),
              (t._requestSession = e._requestSession),
              (t._attachments = [...e._attachments]),
              (t._sdkProcessingMetadata = { ...e._sdkProcessingMetadata })),
            t
          )
        }
        addScopeListener(e) {
          this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
          return this._eventProcessors.push(e), this
        }
        setUser(e) {
          return (
            (this._user = e || {}),
            this._session && P(this._session, { user: e }),
            this._notifyScopeListeners(),
            this
          )
        }
        getUser() {
          return this._user
        }
        getRequestSession() {
          return this._requestSession
        }
        setRequestSession(e) {
          return (this._requestSession = e), this
        }
        setTags(e) {
          return (
            (this._tags = { ...this._tags, ...e }),
            this._notifyScopeListeners(),
            this
          )
        }
        setTag(e, t) {
          return (
            (this._tags = { ...this._tags, [e]: t }),
            this._notifyScopeListeners(),
            this
          )
        }
        setExtras(e) {
          return (
            (this._extra = { ...this._extra, ...e }),
            this._notifyScopeListeners(),
            this
          )
        }
        setExtra(e, t) {
          return (
            (this._extra = { ...this._extra, [e]: t }),
            this._notifyScopeListeners(),
            this
          )
        }
        setFingerprint(e) {
          return (this._fingerprint = e), this._notifyScopeListeners(), this
        }
        setLevel(e) {
          return (this._level = e), this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
          return (this._transactionName = e), this._notifyScopeListeners(), this
        }
        setContext(e, t) {
          return (
            null === t ? delete this._contexts[e] : (this._contexts[e] = t),
            this._notifyScopeListeners(),
            this
          )
        }
        setSpan(e) {
          return (this._span = e), this._notifyScopeListeners(), this
        }
        getSpan() {
          return this._span
        }
        getTransaction() {
          const e = this.getSpan()
          return e && e.transaction
        }
        setSession(e) {
          return (
            e ? (this._session = e) : delete this._session,
            this._notifyScopeListeners(),
            this
          )
        }
        getSession() {
          return this._session
        }
        update(e) {
          if (!e) return this
          if ('function' == typeof e) {
            const t = e(this)
            return t instanceof k ? t : this
          }
          return (
            e instanceof k
              ? ((this._tags = { ...this._tags, ...e._tags }),
                (this._extra = { ...this._extra, ...e._extra }),
                (this._contexts = { ...this._contexts, ...e._contexts }),
                e._user &&
                  Object.keys(e._user).length &&
                  (this._user = e._user),
                e._level && (this._level = e._level),
                e._fingerprint && (this._fingerprint = e._fingerprint),
                e._requestSession && (this._requestSession = e._requestSession))
              : x(e) &&
                ((this._tags = { ...this._tags, ...e.tags }),
                (this._extra = { ...this._extra, ...e.extra }),
                (this._contexts = { ...this._contexts, ...e.contexts }),
                e.user && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint && (this._fingerprint = e.fingerprint),
                e.requestSession && (this._requestSession = e.requestSession)),
            this
          )
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            this
          )
        }
        addBreadcrumb(e, t) {
          const r = 'number' == typeof t ? t : 100
          if (r <= 0) return this
          const n = { timestamp: (0, f.yW)(), ...e }
          return (
            (this._breadcrumbs = [...this._breadcrumbs, n].slice(-r)),
            this._notifyScopeListeners(),
            this
          )
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this
        }
        addAttachment(e) {
          return this._attachments.push(e), this
        }
        getAttachments() {
          return this._attachments
        }
        clearAttachments() {
          return (this._attachments = []), this
        }
        applyToEvent(e, t = {}) {
          if (
            (this._extra &&
              Object.keys(this._extra).length &&
              (e.extra = { ...this._extra, ...e.extra }),
            this._tags &&
              Object.keys(this._tags).length &&
              (e.tags = { ...this._tags, ...e.tags }),
            this._user &&
              Object.keys(this._user).length &&
              (e.user = { ...this._user, ...e.user }),
            this._contexts &&
              Object.keys(this._contexts).length &&
              (e.contexts = { ...this._contexts, ...e.contexts }),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
            this._span)
          ) {
            e.contexts = { trace: this._span.getTraceContext(), ...e.contexts }
            const t = this._span.transaction && this._span.transaction.name
            t && (e.tags = { transaction: t, ...e.tags })
          }
          return (
            this._applyFingerprint(e),
            (e.breadcrumbs = [...(e.breadcrumbs || []), ...this._breadcrumbs]),
            (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
            (e.sdkProcessingMetadata = {
              ...e.sdkProcessingMetadata,
              ...this._sdkProcessingMetadata,
            }),
            this._notifyEventProcessors(
              [
                ...(0, l.YO)('globalEventProcessors', () => []),
                ...this._eventProcessors,
              ],
              e,
              t
            )
          )
        }
        setSDKProcessingMetadata(e) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...e,
            }),
            this
          )
        }
        _notifyEventProcessors(e, t, r, n = 0) {
          return new E((o, i) => {
            const a = e[n]
            if (null === t || 'function' != typeof a) o(t)
            else {
              const d = a({ ...t }, r)
              ;('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                a.id &&
                null === d &&
                y.log(`Event processor "${a.id}" dropped event`),
                _(d)
                  ? d
                      .then((t) =>
                        this._notifyEventProcessors(e, t, r, n + 1).then(o)
                      )
                      .then(null, i)
                  : this._notifyEventProcessors(e, d, r, n + 1)
                      .then(o)
                      .then(null, i)
            }
          })
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
              e(this)
            }),
            (this._notifyingListeners = !1))
        }
        _applyFingerprint(e) {
          var t
          ;(e.fingerprint = e.fingerprint
            ? ((t = e.fingerprint), Array.isArray(t) ? t : [t])
            : []),
            this._fingerprint &&
              (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
      }
      const L = 100
      class j {
        constructor(e, t = new k(), r = 4) {
          ;(this._version = r),
            (this._stack = [{ scope: t }]),
            e && this.bindClient(e)
        }
        isOlderThan(e) {
          return this._version < e
        }
        bindClient(e) {
          ;(this.getStackTop().client = e),
            e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
          const e = k.clone(this.getScope())
          return this.getStack().push({ client: this.getClient(), scope: e }), e
        }
        popScope() {
          return !(this.getStack().length <= 1 || !this.getStack().pop())
        }
        withScope(e) {
          const t = this.pushScope()
          try {
            e(t)
          } finally {
            this.popScope()
          }
        }
        getClient() {
          return this.getStackTop().client
        }
        getScope() {
          return this.getStackTop().scope
        }
        getStack() {
          return this._stack
        }
        getStackTop() {
          return this._stack[this._stack.length - 1]
        }
        captureException(e, t) {
          const r = (this._lastEventId = t && t.event_id ? t.event_id : h()),
            n = new Error('Sentry syntheticException')
          return (
            this._withClient((o, i) => {
              o.captureException(
                e,
                {
                  originalException: e,
                  syntheticException: n,
                  ...t,
                  event_id: r,
                },
                i
              )
            }),
            r
          )
        }
        captureMessage(e, t, r) {
          const n = (this._lastEventId = r && r.event_id ? r.event_id : h()),
            o = new Error(e)
          return (
            this._withClient((i, a) => {
              i.captureMessage(
                e,
                t,
                {
                  originalException: e,
                  syntheticException: o,
                  ...r,
                  event_id: n,
                },
                a
              )
            }),
            n
          )
        }
        captureEvent(e, t) {
          const r = t && t.event_id ? t.event_id : h()
          return (
            e.type || (this._lastEventId = r),
            this._withClient((n, o) => {
              n.captureEvent(e, { ...t, event_id: r }, o)
            }),
            r
          )
        }
        lastEventId() {
          return this._lastEventId
        }
        addBreadcrumb(e, t) {
          const { scope: r, client: n } = this.getStackTop()
          if (!n) return
          const { beforeBreadcrumb: o = null, maxBreadcrumbs: i = L } =
            (n.getOptions && n.getOptions()) || {}
          if (i <= 0) return
          const a = { timestamp: (0, f.yW)(), ...e },
            d = o ? v(() => o(a, t)) : a
          null !== d &&
            (n.emit && n.emit('beforeAddBreadcrumb', d, t),
            r.addBreadcrumb(d, i))
        }
        setUser(e) {
          this.getScope().setUser(e)
        }
        setTags(e) {
          this.getScope().setTags(e)
        }
        setExtras(e) {
          this.getScope().setExtras(e)
        }
        setTag(e, t) {
          this.getScope().setTag(e, t)
        }
        setExtra(e, t) {
          this.getScope().setExtra(e, t)
        }
        setContext(e, t) {
          this.getScope().setContext(e, t)
        }
        configureScope(e) {
          const { scope: t, client: r } = this.getStackTop()
          r && e(t)
        }
        run(e) {
          const t = T(this)
          try {
            e(this)
          } finally {
            T(t)
          }
        }
        getIntegration(e) {
          const t = this.getClient()
          if (!t) return null
          try {
            return t.getIntegration(e)
          } catch (t) {
            return (
              ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                y.warn(
                  `Cannot retrieve integration ${e.id} from the current Hub`
                ),
              null
            )
          }
        }
        startTransaction(e, t) {
          return this._callExtensionMethod('startTransaction', e, t)
        }
        traceHeaders() {
          return this._callExtensionMethod('traceHeaders')
        }
        captureSession(e = !1) {
          if (e) return this.endSession()
          this._sendSessionUpdate()
        }
        endSession() {
          const e = this.getStackTop().scope,
            t = e.getSession()
          t &&
            (function (e, t) {
              let r = {}
              'ok' === e.status && (r = { status: 'exited' }), P(e, r)
            })(t),
            this._sendSessionUpdate(),
            e.setSession()
        }
        startSession(e) {
          const { scope: t, client: r } = this.getStackTop(),
            { release: n, environment: o = b } = (r && r.getOptions()) || {},
            { userAgent: i } = l.n2.navigator || {},
            a = (function (e) {
              const t = (0, f.ph)(),
                r = {
                  sid: h(),
                  init: !0,
                  timestamp: t,
                  started: t,
                  duration: 0,
                  status: 'ok',
                  errors: 0,
                  ignoreDuration: !1,
                  toJSON: () =>
                    (function (e) {
                      return S({
                        sid: `${e.sid}`,
                        init: e.init,
                        started: new Date(1e3 * e.started).toISOString(),
                        timestamp: new Date(1e3 * e.timestamp).toISOString(),
                        status: e.status,
                        errors: e.errors,
                        did:
                          'number' == typeof e.did || 'string' == typeof e.did
                            ? `${e.did}`
                            : void 0,
                        duration: e.duration,
                        attrs: {
                          release: e.release,
                          environment: e.environment,
                          ip_address: e.ipAddress,
                          user_agent: e.userAgent,
                        },
                      })
                    })(r),
                }
              return e && P(r, e), r
            })({
              release: n,
              environment: o,
              user: t.getUser(),
              ...(i && { userAgent: i }),
              ...e,
            }),
            d = t.getSession && t.getSession()
          return (
            d && 'ok' === d.status && P(d, { status: 'exited' }),
            this.endSession(),
            t.setSession(a),
            a
          )
        }
        shouldSendDefaultPii() {
          const e = this.getClient(),
            t = e && e.getOptions()
          return Boolean(t && t.sendDefaultPii)
        }
        _sendSessionUpdate() {
          const { scope: e, client: t } = this.getStackTop()
          if (!e) return
          const r = e.getSession()
          r && t && t.captureSession && t.captureSession(r)
        }
        _withClient(e) {
          const { scope: t, client: r } = this.getStackTop()
          r && e(r, t)
        }
        _callExtensionMethod(e, ...t) {
          const r = N().__SENTRY__
          if (r && r.extensions && 'function' == typeof r.extensions[e])
            return r.extensions[e].apply(this, t)
          ;('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            y.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
      }
      function N() {
        return (
          (l.n2.__SENTRY__ = l.n2.__SENTRY__ || {
            extensions: {},
            hub: void 0,
          }),
          l.n2
        )
      }
      function T(e) {
        const t = N(),
          r = I(t)
        return F(t, e), r
      }
      function A(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
      }
      function I(e) {
        return (0, l.YO)('hub', () => new j(), e)
      }
      function F(e, t) {
        return !!e && (((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), !0)
      }
      const D = {
        version: 4,
        country_calling_codes: {
          1: [
            'US',
            'AG',
            'AI',
            'AS',
            'BB',
            'BM',
            'BS',
            'CA',
            'DM',
            'DO',
            'GD',
            'GU',
            'JM',
            'KN',
            'KY',
            'LC',
            'MP',
            'MS',
            'PR',
            'SX',
            'TC',
            'TT',
            'VC',
            'VG',
            'VI',
          ],
          7: ['RU', 'KZ'],
          20: ['EG'],
          27: ['ZA'],
          30: ['GR'],
          31: ['NL'],
          32: ['BE'],
          33: ['FR'],
          34: ['ES'],
          36: ['HU'],
          39: ['IT', 'VA'],
          40: ['RO'],
          41: ['CH'],
          43: ['AT'],
          44: ['GB', 'GG', 'IM', 'JE'],
          45: ['DK'],
          46: ['SE'],
          47: ['NO', 'SJ'],
          48: ['PL'],
          49: ['DE'],
          51: ['PE'],
          52: ['MX'],
          53: ['CU'],
          54: ['AR'],
          55: ['BR'],
          56: ['CL'],
          57: ['CO'],
          58: ['VE'],
          60: ['MY'],
          61: ['AU', 'CC', 'CX'],
          62: ['ID'],
          63: ['PH'],
          64: ['NZ'],
          65: ['SG'],
          66: ['TH'],
          81: ['JP'],
          82: ['KR'],
          84: ['VN'],
          86: ['CN'],
          90: ['TR'],
          91: ['IN'],
          92: ['PK'],
          93: ['AF'],
          94: ['LK'],
          95: ['MM'],
          98: ['IR'],
          211: ['SS'],
          212: ['MA', 'EH'],
          213: ['DZ'],
          216: ['TN'],
          218: ['LY'],
          220: ['GM'],
          221: ['SN'],
          222: ['MR'],
          223: ['ML'],
          224: ['GN'],
          225: ['CI'],
          226: ['BF'],
          227: ['NE'],
          228: ['TG'],
          229: ['BJ'],
          230: ['MU'],
          231: ['LR'],
          232: ['SL'],
          233: ['GH'],
          234: ['NG'],
          235: ['TD'],
          236: ['CF'],
          237: ['CM'],
          238: ['CV'],
          239: ['ST'],
          240: ['GQ'],
          241: ['GA'],
          242: ['CG'],
          243: ['CD'],
          244: ['AO'],
          245: ['GW'],
          246: ['IO'],
          247: ['AC'],
          248: ['SC'],
          249: ['SD'],
          250: ['RW'],
          251: ['ET'],
          252: ['SO'],
          253: ['DJ'],
          254: ['KE'],
          255: ['TZ'],
          256: ['UG'],
          257: ['BI'],
          258: ['MZ'],
          260: ['ZM'],
          261: ['MG'],
          262: ['RE', 'YT'],
          263: ['ZW'],
          264: ['NA'],
          265: ['MW'],
          266: ['LS'],
          267: ['BW'],
          268: ['SZ'],
          269: ['KM'],
          290: ['SH', 'TA'],
          291: ['ER'],
          297: ['AW'],
          298: ['FO'],
          299: ['GL'],
          350: ['GI'],
          351: ['PT'],
          352: ['LU'],
          353: ['IE'],
          354: ['IS'],
          355: ['AL'],
          356: ['MT'],
          357: ['CY'],
          358: ['FI', 'AX'],
          359: ['BG'],
          370: ['LT'],
          371: ['LV'],
          372: ['EE'],
          373: ['MD'],
          374: ['AM'],
          375: ['BY'],
          376: ['AD'],
          377: ['MC'],
          378: ['SM'],
          380: ['UA'],
          381: ['RS'],
          382: ['ME'],
          383: ['XK'],
          385: ['HR'],
          386: ['SI'],
          387: ['BA'],
          389: ['MK'],
          420: ['CZ'],
          421: ['SK'],
          423: ['LI'],
          500: ['FK'],
          501: ['BZ'],
          502: ['GT'],
          503: ['SV'],
          504: ['HN'],
          505: ['NI'],
          506: ['CR'],
          507: ['PA'],
          508: ['PM'],
          509: ['HT'],
          590: ['GP', 'BL', 'MF'],
          591: ['BO'],
          592: ['GY'],
          593: ['EC'],
          594: ['GF'],
          595: ['PY'],
          596: ['MQ'],
          597: ['SR'],
          598: ['UY'],
          599: ['CW', 'BQ'],
          670: ['TL'],
          672: ['NF'],
          673: ['BN'],
          674: ['NR'],
          675: ['PG'],
          676: ['TO'],
          677: ['SB'],
          678: ['VU'],
          679: ['FJ'],
          680: ['PW'],
          681: ['WF'],
          682: ['CK'],
          683: ['NU'],
          685: ['WS'],
          686: ['KI'],
          687: ['NC'],
          688: ['TV'],
          689: ['PF'],
          690: ['TK'],
          691: ['FM'],
          692: ['MH'],
          850: ['KP'],
          852: ['HK'],
          853: ['MO'],
          855: ['KH'],
          856: ['LA'],
          880: ['BD'],
          886: ['TW'],
          960: ['MV'],
          961: ['LB'],
          962: ['JO'],
          963: ['SY'],
          964: ['IQ'],
          965: ['KW'],
          966: ['SA'],
          967: ['YE'],
          968: ['OM'],
          970: ['PS'],
          971: ['AE'],
          972: ['IL'],
          973: ['BH'],
          974: ['QA'],
          975: ['BT'],
          976: ['MN'],
          977: ['NP'],
          992: ['TJ'],
          993: ['TM'],
          994: ['AZ'],
          995: ['GE'],
          996: ['KG'],
          998: ['UZ'],
        },
        countries: {
          AC: ['247', '00', '(?:[01589]\\d|[46])\\d{4}', [5, 6]],
          AD: [
            '376',
            '00',
            '(?:1|6\\d)\\d{7}|[135-9]\\d{5}',
            [6, 8, 9],
            [
              ['(\\d{3})(\\d{3})', '$1 $2', ['[135-9]']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['1']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6']],
            ],
          ],
          AE: [
            '971',
            '00',
            '(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}',
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
              ['(\\d{3})(\\d{2,9})', '$1 $2', ['60|8']],
              [
                '(\\d)(\\d{3})(\\d{4})',
                '$1 $2 $3',
                ['[236]|[479][2-8]'],
                '0$1',
              ],
              ['(\\d{3})(\\d)(\\d{5})', '$1 $2 $3', ['[479]']],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['5'], '0$1'],
            ],
            '0',
          ],
          AF: [
            '93',
            '00',
            '[2-7]\\d{8}',
            [9],
            [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-7]'], '0$1']],
            '0',
          ],
          AG: [
            '1',
            '011',
            '(?:268|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([457]\\d{6})$|1',
            '268$1',
            0,
            '268',
          ],
          AI: [
            '1',
            '011',
            '(?:264|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2457]\\d{6})$|1',
            '264$1',
            0,
            '264',
          ],
          AL: [
            '355',
            '00',
            '(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}',
            [6, 7, 8, 9],
            [
              ['(\\d{3})(\\d{3,4})', '$1 $2', ['80|9'], '0$1'],
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['4[2-6]'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                ['[2358][2-5]|4'],
                '0$1',
              ],
              ['(\\d{3})(\\d{5})', '$1 $2', ['[23578]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['6'], '0$1'],
            ],
            '0',
          ],
          AM: [
            '374',
            '00',
            '(?:[1-489]\\d|55|60|77)\\d{6}',
            [8],
            [
              ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[89]0'], '0 $1'],
              ['(\\d{3})(\\d{5})', '$1 $2', ['2|3[12]'], '(0$1)'],
              ['(\\d{2})(\\d{6})', '$1 $2', ['1|47'], '(0$1)'],
              ['(\\d{2})(\\d{6})', '$1 $2', ['[3-9]'], '0$1'],
            ],
            '0',
          ],
          AO: [
            '244',
            '00',
            '[29]\\d{8}',
            [9],
            [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[29]']]],
          ],
          AR: [
            '54',
            '00',
            '(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}',
            [10, 11],
            [
              [
                '(\\d{4})(\\d{2})(\\d{4})',
                '$1 $2-$3',
                [
                  '2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])',
                  '2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)',
                  '2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]',
                  '2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]',
                ],
                '0$1',
                1,
              ],
              ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2-$3', ['1'], '0$1', 1],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['[68]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2-$3', ['[23]'], '0$1', 1],
              [
                '(\\d)(\\d{4})(\\d{2})(\\d{4})',
                '$2 15-$3-$4',
                [
                  '9(?:2[2-469]|3[3-578])',
                  '9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))',
                  '9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)',
                  '9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]',
                  '9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]',
                ],
                '0$1',
                0,
                '$1 $2 $3-$4',
              ],
              [
                '(\\d)(\\d{2})(\\d{4})(\\d{4})',
                '$2 15-$3-$4',
                ['91'],
                '0$1',
                0,
                '$1 $2 $3-$4',
              ],
              ['(\\d{3})(\\d{3})(\\d{5})', '$1-$2-$3', ['8'], '0$1'],
              [
                '(\\d)(\\d{3})(\\d{3})(\\d{4})',
                '$2 15-$3-$4',
                ['9'],
                '0$1',
                0,
                '$1 $2 $3-$4',
              ],
            ],
            '0',
            0,
            '0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?',
            '9$1',
          ],
          AS: [
            '1',
            '011',
            '(?:[58]\\d\\d|684|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([267]\\d{6})$|1',
            '684$1',
            0,
            '684',
          ],
          AT: [
            '43',
            '00',
            '1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}',
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            [
              ['(\\d)(\\d{3,12})', '$1 $2', ['1(?:11|[2-9])'], '0$1'],
              ['(\\d{3})(\\d{2})', '$1 $2', ['517'], '0$1'],
              ['(\\d{2})(\\d{3,5})', '$1 $2', ['5[079]'], '0$1'],
              [
                '(\\d{3})(\\d{3,10})',
                '$1 $2',
                ['(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]'],
                '0$1',
              ],
              ['(\\d{4})(\\d{3,9})', '$1 $2', ['[2-467]|5[2-6]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['5'], '0$1'],
              ['(\\d{2})(\\d{4})(\\d{4,7})', '$1 $2 $3', ['5'], '0$1'],
            ],
            '0',
          ],
          AU: [
            '61',
            '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011',
            '1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}',
            [5, 6, 7, 8, 9, 10, 12],
            [
              ['(\\d{2})(\\d{3,4})', '$1 $2', ['16'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{2,4})', '$1 $2 $3', ['16'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['14|4'], '0$1'],
              ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['[2378]'], '(0$1)'],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1(?:30|[89])']],
            ],
            '0',
            0,
            '(183[12])|0',
            0,
            0,
            0,
            [
              [
                '(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}',
                [9],
              ],
              [
                '4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}',
                [9],
              ],
              ['180(?:0\\d{3}|2)\\d{3}', [7, 10]],
              ['190[0-26]\\d{6}', [10]],
              0,
              0,
              0,
              ['163\\d{2,6}', [5, 6, 7, 8, 9]],
              ['14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}', [9]],
              [
                '13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}',
                [6, 8, 10, 12],
              ],
            ],
            '0011',
          ],
          AW: [
            '297',
            '00',
            '(?:[25-79]\\d\\d|800)\\d{4}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[25-9]']]],
          ],
          AX: [
            '358',
            '00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))',
            '2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}',
            [5, 6, 7, 8, 9, 10, 11, 12],
            0,
            '0',
            0,
            0,
            0,
            0,
            '18',
            0,
            '00',
          ],
          AZ: [
            '994',
            '00',
            '365\\d{6}|(?:[124579]\\d|60|88)\\d{7}',
            [9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['90'],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                [
                  '1[28]|2|365|46',
                  '1[28]|2|365[45]|46',
                  '1[28]|2|365(?:4|5[02])|46',
                ],
                '(0$1)',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[13-9]'],
                '0$1',
              ],
            ],
            '0',
          ],
          BA: [
            '387',
            '00',
            '6\\d{8}|(?:[35689]\\d|49|70)\\d{6}',
            [8, 9],
            [
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['6[1-3]|[7-9]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2-$3', ['[3-5]|6[56]'], '0$1'],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3 $4', ['6'], '0$1'],
            ],
            '0',
          ],
          BB: [
            '1',
            '011',
            '(?:246|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-9]\\d{6})$|1',
            '246$1',
            0,
            '246',
          ],
          BD: [
            '880',
            '00',
            '[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}',
            [6, 7, 8, 9, 10],
            [
              ['(\\d{2})(\\d{4,6})', '$1-$2', ['31[5-8]|[459]1'], '0$1'],
              [
                '(\\d{3})(\\d{3,7})',
                '$1-$2',
                [
                  '3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]',
                ],
                '0$1',
              ],
              ['(\\d{4})(\\d{3,6})', '$1-$2', ['[13-9]|22'], '0$1'],
              ['(\\d)(\\d{7,8})', '$1-$2', ['2'], '0$1'],
            ],
            '0',
          ],
          BE: [
            '32',
            '00',
            '4\\d{8}|[1-9]\\d{7}',
            [8, 9],
            [
              ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['(?:80|9)0'], '0$1'],
              [
                '(\\d)(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[239]|4[23]'],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[15-8]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['4'], '0$1'],
            ],
            '0',
          ],
          BF: [
            '226',
            '00',
            '[025-7]\\d{7}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[025-7]']]],
          ],
          BG: [
            '359',
            '00',
            '00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}',
            [6, 7, 8, 9, 12],
            [
              ['(\\d)(\\d)(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['2'], '0$1'],
              ['(\\d{3})(\\d{4})', '$1 $2', ['43[1-6]|70[1-9]'], '0$1'],
              ['(\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{2,3})',
                '$1 $2 $3',
                ['[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['(?:70|8)0'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{2})', '$1 $2 $3', ['43[1-7]|7'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[48]|9[08]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['9'], '0$1'],
            ],
            '0',
          ],
          BH: [
            '973',
            '00',
            '[136-9]\\d{7}',
            [8],
            [['(\\d{4})(\\d{4})', '$1 $2', ['[13679]|8[02-4679]']]],
          ],
          BI: [
            '257',
            '00',
            '(?:[267]\\d|31)\\d{6}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2367]']]],
          ],
          BJ: [
            '229',
            '00',
            '[24-689]\\d{7}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[24-689]']]],
          ],
          BL: [
            '590',
            '00',
            '590\\d{6}|(?:69|80|9\\d)\\d{7}',
            [9],
            0,
            '0',
            0,
            0,
            0,
            0,
            0,
            [
              ['590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}'],
              [
                '69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}',
              ],
              ['80[0-5]\\d{6}'],
              0,
              0,
              0,
              0,
              0,
              ['9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}'],
            ],
          ],
          BM: [
            '1',
            '011',
            '(?:441|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-9]\\d{6})$|1',
            '441$1',
            0,
            '441',
          ],
          BN: [
            '673',
            '00',
            '[2-578]\\d{6}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[2-578]']]],
          ],
          BO: [
            '591',
            '00(?:1\\d)?',
            '(?:[2-467]\\d\\d|8001)\\d{5}',
            [8, 9],
            [
              ['(\\d)(\\d{7})', '$1 $2', ['[23]|4[46]']],
              ['(\\d{8})', '$1', ['[67]']],
              ['(\\d{3})(\\d{2})(\\d{4})', '$1 $2 $3', ['8']],
            ],
            '0',
            0,
            '0(1\\d)?',
          ],
          BQ: [
            '599',
            '00',
            '(?:[34]1|7\\d)\\d{5}',
            [7],
            0,
            0,
            0,
            0,
            0,
            0,
            '[347]',
          ],
          BR: [
            '55',
            '00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)',
            '(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}',
            [8, 9, 10, 11],
            [
              [
                '(\\d{4})(\\d{4})',
                '$1-$2',
                ['300|4(?:0[02]|37)', '4(?:02|37)0|[34]00'],
              ],
              [
                '(\\d{3})(\\d{2,3})(\\d{4})',
                '$1 $2 $3',
                ['(?:[358]|90)0'],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{4})(\\d{4})',
                '$1 $2-$3',
                ['(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]'],
                '($1)',
              ],
              [
                '(\\d{2})(\\d{5})(\\d{4})',
                '$1 $2-$3',
                ['[16][1-9]|[2-57-9]'],
                '($1)',
              ],
            ],
            '0',
            0,
            '(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?',
            '$2',
          ],
          BS: [
            '1',
            '011',
            '(?:242|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([3-8]\\d{6})$|1',
            '242$1',
            0,
            '242',
          ],
          BT: [
            '975',
            '00',
            '[17]\\d{7}|[2-8]\\d{6}',
            [7, 8],
            [
              ['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-68]|7[246]']],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['1[67]|7']],
            ],
          ],
          BW: [
            '267',
            '00',
            '(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}',
            [7, 8, 10],
            [
              ['(\\d{2})(\\d{5})', '$1 $2', ['90']],
              ['(\\d{3})(\\d{4})', '$1 $2', ['[24-6]|3[15-9]']],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[37]']],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['0']],
              ['(\\d{3})(\\d{4})(\\d{3})', '$1 $2 $3', ['8']],
            ],
          ],
          BY: [
            '375',
            '810',
            '(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}',
            [6, 7, 8, 9, 10, 11],
            [
              ['(\\d{3})(\\d{3})', '$1 $2', ['800'], '8 $1'],
              ['(\\d{3})(\\d{2})(\\d{2,4})', '$1 $2 $3', ['800'], '8 $1'],
              [
                '(\\d{4})(\\d{2})(\\d{3})',
                '$1 $2-$3',
                [
                  '1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])',
                  '1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])',
                ],
                '8 0$1',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2-$3-$4',
                ['1(?:[56]|7[467])|2[1-3]'],
                '8 0$1',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2-$3-$4',
                ['[1-4]'],
                '8 0$1',
              ],
              ['(\\d{3})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['[89]'], '8 $1'],
            ],
            '8',
            0,
            '0|80?',
            0,
            0,
            0,
            0,
            '8~10',
          ],
          BZ: [
            '501',
            '00',
            '(?:0800\\d|[2-8])\\d{6}',
            [7, 11],
            [
              ['(\\d{3})(\\d{4})', '$1-$2', ['[2-8]']],
              ['(\\d)(\\d{3})(\\d{4})(\\d{3})', '$1-$2-$3-$4', ['0']],
            ],
          ],
          CA: [
            '1',
            '011',
            '(?:[2-8]\\d|90)\\d{8}|3\\d{6}',
            [7, 10],
            0,
            '1',
            0,
            0,
            0,
            0,
            0,
            [
              [
                '(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}',
                [10],
              ],
              ['', [10]],
              ['8(?:00|33|44|55|66|77|88)[2-9]\\d{6}', [10]],
              ['900[2-9]\\d{6}', [10]],
              [
                '52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}',
                [10],
              ],
              0,
              ['310\\d{4}', [7]],
              0,
              ['600[2-9]\\d{6}', [10]],
            ],
          ],
          CC: [
            '61',
            '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011',
            '1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}',
            [6, 7, 8, 9, 10, 12],
            0,
            '0',
            0,
            '([59]\\d{7})$|0',
            '8$1',
            0,
            0,
            [
              [
                '8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}',
                [9],
              ],
              [
                '4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}',
                [9],
              ],
              ['180(?:0\\d{3}|2)\\d{3}', [7, 10]],
              ['190[0-26]\\d{6}', [10]],
              0,
              0,
              0,
              0,
              ['14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}', [9]],
              [
                '13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}',
                [6, 8, 10, 12],
              ],
            ],
            '0011',
          ],
          CD: [
            '243',
            '00',
            '[189]\\d{8}|[1-68]\\d{6}',
            [7, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['88'], '0$1'],
              ['(\\d{2})(\\d{5})', '$1 $2', ['[1-6]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[89]'], '0$1'],
            ],
            '0',
          ],
          CF: [
            '236',
            '00',
            '(?:[27]\\d{3}|8776)\\d{4}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[278]']]],
          ],
          CG: [
            '242',
            '00',
            '222\\d{6}|(?:0\\d|80)\\d{7}',
            [9],
            [
              ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['8']],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[02]']],
            ],
          ],
          CH: [
            '41',
            '00',
            '8\\d{11}|[2-9]\\d{8}',
            [9],
            [
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8[047]|90'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[2-79]|81'],
                '0$1',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4 $5',
                ['8'],
                '0$1',
              ],
            ],
            '0',
          ],
          CI: [
            '225',
            '00',
            '[02]\\d{9}',
            [10],
            [
              ['(\\d{2})(\\d{2})(\\d)(\\d{5})', '$1 $2 $3 $4', ['2']],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3 $4', ['0']],
            ],
          ],
          CK: [
            '682',
            '00',
            '[2-578]\\d{4}',
            [5],
            [['(\\d{2})(\\d{3})', '$1 $2', ['[2-578]']]],
          ],
          CL: [
            '56',
            '(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0',
            '12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}',
            [9, 10, 11],
            [
              ['(\\d{5})(\\d{4})', '$1 $2', ['219', '2196'], '($1)'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['44']],
              ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['2[1-36]'], '($1)'],
              ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['9[2-9]']],
              [
                '(\\d{2})(\\d{3})(\\d{4})',
                '$1 $2 $3',
                ['3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])'],
                '($1)',
              ],
              ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['60|8']],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']],
              ['(\\d{3})(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3 $4', ['60']],
            ],
          ],
          CM: [
            '237',
            '00',
            '[26]\\d{8}|88\\d{6,7}',
            [8, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['88']],
              [
                '(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4 $5',
                ['[26]|88'],
              ],
            ],
          ],
          CN: [
            '86',
            '00|1(?:[12]\\d|79)\\d\\d00',
            '1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}',
            [7, 8, 9, 10, 11, 12],
            [
              [
                '(\\d{2})(\\d{5,6})',
                '$1 $2',
                [
                  '(?:10|2[0-57-9])[19]',
                  '(?:10|2[0-57-9])(?:10|9[56])',
                  '10(?:10|9[56])|2[0-57-9](?:100|9[56])',
                ],
                '0$1',
              ],
              [
                '(\\d{3})(\\d{5,6})',
                '$1 $2',
                [
                  '3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]',
                  '(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]',
                  '85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])',
                  '85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])',
                ],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['(?:4|80)0']],
              [
                '(\\d{2})(\\d{4})(\\d{4})',
                '$1 $2 $3',
                [
                  '10|2(?:[02-57-9]|1[1-9])',
                  '10|2(?:[02-57-9]|1[1-9])',
                  '10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])',
                ],
                '0$1',
                1,
              ],
              [
                '(\\d{3})(\\d{3})(\\d{4})',
                '$1 $2 $3',
                [
                  '3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]',
                ],
                '0$1',
                1,
              ],
              ['(\\d{3})(\\d{7,8})', '$1 $2', ['9']],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['80'], '0$1', 1],
              ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['[3-578]'], '0$1', 1],
              ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['1[3-9]']],
              [
                '(\\d{2})(\\d{3})(\\d{3})(\\d{4})',
                '$1 $2 $3 $4',
                ['[12]'],
                '0$1',
                1,
              ],
            ],
            '0',
            0,
            '(1(?:[12]\\d|79)\\d\\d)|0',
            0,
            0,
            0,
            0,
            '00',
          ],
          CO: [
            '57',
            '00(?:4(?:[14]4|56)|[579])',
            '(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}',
            [10, 11],
            [
              ['(\\d{3})(\\d{7})', '$1 $2', ['6'], '($1)'],
              ['(\\d{3})(\\d{7})', '$1 $2', ['3[0-357]|91']],
              [
                '(\\d)(\\d{3})(\\d{7})',
                '$1-$2-$3',
                ['1'],
                '0$1',
                0,
                '$1 $2 $3',
              ],
            ],
            '0',
            0,
            '0([3579]|4(?:[14]4|56))?',
          ],
          CR: [
            '506',
            '00',
            '(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}',
            [8, 10],
            [
              ['(\\d{4})(\\d{4})', '$1 $2', ['[2-7]|8[3-9]']],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['[89]']],
            ],
            0,
            0,
            '(19(?:0[0-2468]|1[09]|20|66|77|99))',
          ],
          CU: [
            '53',
            '119',
            '[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}',
            [6, 7, 8, 10],
            [
              ['(\\d{2})(\\d{4,6})', '$1 $2', ['2[1-4]|[34]'], '(0$1)'],
              ['(\\d)(\\d{6,7})', '$1 $2', ['7'], '(0$1)'],
              ['(\\d)(\\d{7})', '$1 $2', ['[56]'], '0$1'],
              ['(\\d{3})(\\d{7})', '$1 $2', ['8'], '0$1'],
            ],
            '0',
          ],
          CV: [
            '238',
            '0',
            '(?:[2-59]\\d\\d|800)\\d{4}',
            [7],
            [['(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3', ['[2-589]']]],
          ],
          CW: [
            '599',
            '00',
            '(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}',
            [7, 8],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['[3467]']],
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['9[4-8]']],
            ],
            0,
            0,
            0,
            0,
            0,
            '[69]',
          ],
          CX: [
            '61',
            '001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011',
            '1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}',
            [6, 7, 8, 9, 10, 12],
            0,
            '0',
            0,
            '([59]\\d{7})$|0',
            '8$1',
            0,
            0,
            [
              [
                '8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}',
                [9],
              ],
              [
                '4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}',
                [9],
              ],
              ['180(?:0\\d{3}|2)\\d{3}', [7, 10]],
              ['190[0-26]\\d{6}', [10]],
              0,
              0,
              0,
              0,
              ['14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}', [9]],
              [
                '13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}',
                [6, 8, 10, 12],
              ],
            ],
            '0011',
          ],
          CY: [
            '357',
            '00',
            '(?:[279]\\d|[58]0)\\d{6}',
            [8],
            [['(\\d{2})(\\d{6})', '$1 $2', ['[257-9]']]],
          ],
          CZ: [
            '420',
            '00',
            '(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}',
            [9],
            [
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-8]|9[015-7]']],
              ['(\\d{2})(\\d{3})(\\d{3})(\\d{2})', '$1 $2 $3 $4', ['96']],
              ['(\\d{2})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['9']],
              ['(\\d{3})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['9']],
            ],
          ],
          DE: [
            '49',
            '00',
            '[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}',
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [
              ['(\\d{2})(\\d{3,13})', '$1 $2', ['3[02]|40|[68]9'], '0$1'],
              [
                '(\\d{3})(\\d{3,12})',
                '$1 $2',
                [
                  '2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1',
                  '2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1',
                ],
                '0$1',
              ],
              [
                '(\\d{4})(\\d{2,11})',
                '$1 $2',
                [
                  '[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]',
                  '[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]',
                ],
                '0$1',
              ],
              ['(\\d{3})(\\d{4})', '$1 $2', ['138'], '0$1'],
              ['(\\d{5})(\\d{2,10})', '$1 $2', ['3'], '0$1'],
              ['(\\d{3})(\\d{5,11})', '$1 $2', ['181'], '0$1'],
              ['(\\d{3})(\\d)(\\d{4,10})', '$1 $2 $3', ['1(?:3|80)|9'], '0$1'],
              ['(\\d{3})(\\d{7,8})', '$1 $2', ['1[67]'], '0$1'],
              ['(\\d{3})(\\d{7,12})', '$1 $2', ['8'], '0$1'],
              ['(\\d{5})(\\d{6})', '$1 $2', ['185', '1850', '18500'], '0$1'],
              ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['7'], '0$1'],
              ['(\\d{4})(\\d{7})', '$1 $2', ['18[68]'], '0$1'],
              ['(\\d{4})(\\d{7})', '$1 $2', ['15[1279]'], '0$1'],
              [
                '(\\d{5})(\\d{6})',
                '$1 $2',
                ['15[03568]', '15(?:[0568]|31)'],
                '0$1',
              ],
              ['(\\d{3})(\\d{8})', '$1 $2', ['18'], '0$1'],
              [
                '(\\d{3})(\\d{2})(\\d{7,8})',
                '$1 $2 $3',
                ['1(?:6[023]|7)'],
                '0$1',
              ],
              ['(\\d{4})(\\d{2})(\\d{7})', '$1 $2 $3', ['15[279]'], '0$1'],
              ['(\\d{3})(\\d{2})(\\d{8})', '$1 $2 $3', ['15'], '0$1'],
            ],
            '0',
          ],
          DJ: [
            '253',
            '00',
            '(?:2\\d|77)\\d{6}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[27]']]],
          ],
          DK: [
            '45',
            '00',
            '[2-9]\\d{7}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2-9]']]],
          ],
          DM: [
            '1',
            '011',
            '(?:[58]\\d\\d|767|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-7]\\d{6})$|1',
            '767$1',
            0,
            '767',
          ],
          DO: [
            '1',
            '011',
            '(?:[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            0,
            0,
            0,
            '8001|8[024]9',
          ],
          DZ: [
            '213',
            '00',
            '(?:[1-4]|[5-79]\\d|80)\\d{7}',
            [8, 9],
            [
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[1-4]'],
                '0$1',
              ],
              ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['9'], '0$1'],
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[5-8]'],
                '0$1',
              ],
            ],
            '0',
          ],
          EC: [
            '593',
            '00',
            '1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}',
            [8, 9, 10, 11],
            [
              [
                '(\\d)(\\d{3})(\\d{4})',
                '$1 $2-$3',
                ['[2-7]'],
                '(0$1)',
                0,
                '$1-$2-$3',
              ],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['9'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['1']],
            ],
            '0',
          ],
          EE: [
            '372',
            '00',
            '8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}',
            [7, 8, 10],
            [
              [
                '(\\d{3})(\\d{4})',
                '$1 $2',
                [
                  '[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88',
                  '[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88',
                ],
              ],
              [
                '(\\d{4})(\\d{3,4})',
                '$1 $2',
                ['[45]|8(?:00|[1-49])', '[45]|8(?:00[1-9]|[1-49])'],
              ],
              ['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['7']],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['8']],
            ],
          ],
          EG: [
            '20',
            '00',
            '[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}',
            [8, 9, 10],
            [
              ['(\\d)(\\d{7,8})', '$1 $2', ['[23]'], '0$1'],
              [
                '(\\d{2})(\\d{6,7})',
                '$1 $2',
                ['1[35]|[4-6]|8[2468]|9[235-7]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[89]'], '0$1'],
              ['(\\d{2})(\\d{8})', '$1 $2', ['1'], '0$1'],
            ],
            '0',
          ],
          EH: ['212', '00', '[5-8]\\d{8}', [9], 0, '0', 0, 0, 0, 0, '528[89]'],
          ER: [
            '291',
            '00',
            '[178]\\d{6}',
            [7],
            [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[178]'], '0$1']],
            '0',
          ],
          ES: [
            '34',
            '00',
            '[5-9]\\d{8}',
            [9],
            [
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[89]00']],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[5-9]']],
            ],
          ],
          ET: [
            '251',
            '00',
            '(?:11|[2-579]\\d)\\d{7}',
            [9],
            [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1-579]'], '0$1']],
            '0',
          ],
          FI: [
            '358',
            '00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))',
            '[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}',
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
              ['(\\d{5})', '$1', ['20[2-59]'], '0$1'],
              [
                '(\\d{3})(\\d{3,7})',
                '$1 $2',
                ['(?:[1-3]0|[68])0|70[07-9]'],
                '0$1',
              ],
              ['(\\d{2})(\\d{4,8})', '$1 $2', ['[14]|2[09]|50|7[135]'], '0$1'],
              ['(\\d{2})(\\d{6,10})', '$1 $2', ['7'], '0$1'],
              [
                '(\\d)(\\d{4,9})',
                '$1 $2',
                ['(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9'],
                '0$1',
              ],
            ],
            '0',
            0,
            0,
            0,
            0,
            '1[03-79]|[2-9]',
            0,
            '00',
          ],
          FJ: [
            '679',
            '0(?:0|52)',
            '45\\d{5}|(?:0800\\d|[235-9])\\d{6}',
            [7, 11],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['[235-9]|45']],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['0']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          FK: ['500', '00', '[2-7]\\d{4}', [5]],
          FM: [
            '691',
            '00',
            '(?:[39]\\d\\d|820)\\d{4}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[389]']]],
          ],
          FO: [
            '298',
            '00',
            '[2-9]\\d{5}',
            [6],
            [['(\\d{6})', '$1', ['[2-9]']]],
            0,
            0,
            '(10(?:01|[12]0|88))',
          ],
          FR: [
            '33',
            '00',
            '[1-9]\\d{8}',
            [9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['8'],
                '0 $1',
              ],
              [
                '(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4 $5',
                ['[1-79]'],
                '0$1',
              ],
            ],
            '0',
          ],
          GA: [
            '241',
            '00',
            '(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}',
            [7, 8],
            [
              [
                '(\\d)(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[2-7]'],
                '0$1',
              ],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['0']],
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['11|[67]'],
                '0$1',
              ],
            ],
            0,
            0,
            '0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})',
            '$1',
          ],
          GB: [
            '44',
            '00',
            '[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}',
            [7, 9, 10],
            [
              [
                '(\\d{3})(\\d{4})',
                '$1 $2',
                ['800', '8001', '80011', '800111', '8001111'],
                '0$1',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3',
                ['845', '8454', '84546', '845464'],
                '0$1',
              ],
              ['(\\d{3})(\\d{6})', '$1 $2', ['800'], '0$1'],
              [
                '(\\d{5})(\\d{4,5})',
                '$1 $2',
                [
                  '1(?:38|5[23]|69|76|94)',
                  '1(?:(?:38|69)7|5(?:24|39)|768|946)',
                  '1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)',
                ],
                '0$1',
              ],
              [
                '(\\d{4})(\\d{5,6})',
                '$1 $2',
                ['1(?:[2-69][02-9]|[78])'],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{4})(\\d{4})',
                '$1 $2 $3',
                ['[25]|7(?:0|6[02-9])', '[25]|7(?:0|6(?:[03-9]|2[356]))'],
                '0$1',
              ],
              ['(\\d{4})(\\d{6})', '$1 $2', ['7'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1389]'], '0$1'],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            [
              [
                '(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}',
                [9, 10],
              ],
              [
                '7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}',
                [10],
              ],
              ['80[08]\\d{7}|800\\d{6}|8001111'],
              [
                '(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d',
                [7, 10],
              ],
              ['70\\d{8}', [10]],
              0,
              ['(?:3[0347]|55)\\d{8}', [10]],
              [
                '76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}',
                [10],
              ],
              ['56\\d{8}', [10]],
            ],
            0,
            ' x',
          ],
          GD: [
            '1',
            '011',
            '(?:473|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-9]\\d{6})$|1',
            '473$1',
            0,
            '473',
          ],
          GE: [
            '995',
            '00',
            '(?:[3-57]\\d\\d|800)\\d{6}',
            [9],
            [
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['70'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['32'],
                '0$1',
              ],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[57]']],
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[348]'],
                '0$1',
              ],
            ],
            '0',
          ],
          GF: [
            '594',
            '00',
            '[56]94\\d{6}|(?:80|9\\d)\\d{7}',
            [9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[56]|9[47]'],
                '0$1',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[89]'],
                '0$1',
              ],
            ],
            '0',
          ],
          GG: [
            '44',
            '00',
            '(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?',
            [7, 9, 10],
            0,
            '0',
            0,
            '([25-9]\\d{5})$|0',
            '1481$1',
            0,
            0,
            [
              ['1481[25-9]\\d{5}', [10]],
              ['7(?:(?:781|839)\\d|911[17])\\d{5}', [10]],
              ['80[08]\\d{7}|800\\d{6}|8001111'],
              [
                '(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d',
                [7, 10],
              ],
              ['70\\d{8}', [10]],
              0,
              ['(?:3[0347]|55)\\d{8}', [10]],
              [
                '76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}',
                [10],
              ],
              ['56\\d{8}', [10]],
            ],
          ],
          GH: [
            '233',
            '00',
            '(?:[235]\\d{3}|800)\\d{5}',
            [8, 9],
            [
              ['(\\d{3})(\\d{5})', '$1 $2', ['8'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[235]'], '0$1'],
            ],
            '0',
          ],
          GI: [
            '350',
            '00',
            '(?:[25]\\d|60)\\d{6}',
            [8],
            [['(\\d{3})(\\d{5})', '$1 $2', ['2']]],
          ],
          GL: [
            '299',
            '00',
            '(?:19|[2-689]\\d|70)\\d{4}',
            [6],
            [['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['19|[2-9]']]],
          ],
          GM: [
            '220',
            '00',
            '[2-9]\\d{6}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[2-9]']]],
          ],
          GN: [
            '224',
            '00',
            '722\\d{6}|(?:3|6\\d)\\d{7}',
            [8, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['3']],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[67]']],
            ],
          ],
          GP: [
            '590',
            '00',
            '590\\d{6}|(?:69|80|9\\d)\\d{7}',
            [9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[569]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0$1'],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            [
              [
                '590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}',
              ],
              [
                '69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}',
              ],
              ['80[0-5]\\d{6}'],
              0,
              0,
              0,
              0,
              0,
              ['9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}'],
            ],
          ],
          GQ: [
            '240',
            '00',
            '222\\d{6}|(?:3\\d|55|[89]0)\\d{7}',
            [9],
            [
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[235]']],
              ['(\\d{3})(\\d{6})', '$1 $2', ['[89]']],
            ],
          ],
          GR: [
            '30',
            '00',
            '5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}',
            [10, 11, 12],
            [
              ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['21|7']],
              [
                '(\\d{4})(\\d{6})',
                '$1 $2',
                ['2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5'],
              ],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[2689]']],
              ['(\\d{3})(\\d{3,4})(\\d{5})', '$1 $2 $3', ['8']],
            ],
          ],
          GT: [
            '502',
            '00',
            '80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}',
            [8, 11],
            [
              ['(\\d{4})(\\d{4})', '$1 $2', ['[2-8]']],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']],
            ],
          ],
          GU: [
            '1',
            '011',
            '(?:[58]\\d\\d|671|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-9]\\d{6})$|1',
            '671$1',
            0,
            '671',
          ],
          GW: [
            '245',
            '00',
            '[49]\\d{8}|4\\d{6}',
            [7, 9],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['40']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[49]']],
            ],
          ],
          GY: [
            '592',
            '001',
            '(?:[2-8]\\d{3}|9008)\\d{3}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[2-9]']]],
          ],
          HK: [
            '852',
            '00(?:30|5[09]|[126-9]?)',
            '8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}',
            [5, 6, 7, 8, 9, 11],
            [
              ['(\\d{3})(\\d{2,5})', '$1 $2', ['900', '9003']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[2-7]|8[1-4]|9(?:0[1-9]|[1-8])']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8']],
              ['(\\d{3})(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['9']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          HN: [
            '504',
            '00',
            '8\\d{10}|[237-9]\\d{7}',
            [8, 11],
            [['(\\d{4})(\\d{4})', '$1-$2', ['[237-9]']]],
          ],
          HR: [
            '385',
            '00',
            '(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}',
            [6, 7, 8, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['6[01]'], '0$1'],
              ['(\\d{3})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['8'], '0$1'],
              ['(\\d)(\\d{4})(\\d{3})', '$1 $2 $3', ['1'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['6|7[245]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['9'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-57]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8'], '0$1'],
            ],
            '0',
          ],
          HT: [
            '509',
            '00',
            '(?:[2-489]\\d|55)\\d{6}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['[2-589]']]],
          ],
          HU: [
            '36',
            '00',
            '[235-7]\\d{8}|[1-9]\\d{7}',
            [8, 9],
            [
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '(06 $1)'],
              [
                '(\\d{2})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                ['[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]'],
                '(06 $1)',
              ],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-9]'], '06 $1'],
            ],
            '06',
          ],
          ID: [
            '62',
            '00[89]',
            '(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}',
            [7, 8, 9, 10, 11, 12, 13],
            [
              ['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['15']],
              ['(\\d{2})(\\d{5,9})', '$1 $2', ['2[124]|[36]1'], '(0$1)'],
              ['(\\d{3})(\\d{5,7})', '$1 $2', ['800'], '0$1'],
              ['(\\d{3})(\\d{5,8})', '$1 $2', ['[2-79]'], '(0$1)'],
              ['(\\d{3})(\\d{3,4})(\\d{3})', '$1-$2-$3', ['8[1-35-9]'], '0$1'],
              ['(\\d{3})(\\d{6,8})', '$1 $2', ['1'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['804'], '0$1'],
              ['(\\d{3})(\\d)(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['80'], '0$1'],
              ['(\\d{3})(\\d{4})(\\d{4,5})', '$1-$2-$3', ['8'], '0$1'],
            ],
            '0',
          ],
          IE: [
            '353',
            '00',
            '(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}',
            [7, 8, 9, 10],
            [
              [
                '(\\d{2})(\\d{5})',
                '$1 $2',
                ['2[24-9]|47|58|6[237-9]|9[35-9]'],
                '(0$1)',
              ],
              ['(\\d{3})(\\d{5})', '$1 $2', ['[45]0'], '(0$1)'],
              ['(\\d)(\\d{3,4})(\\d{4})', '$1 $2 $3', ['1'], '(0$1)'],
              [
                '(\\d{2})(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['[2569]|4[1-69]|7[14]'],
                '(0$1)',
              ],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['70'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['81'], '(0$1)'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[78]'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']],
              ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['4'], '(0$1)'],
              ['(\\d{2})(\\d)(\\d{3})(\\d{4})', '$1 $2 $3 $4', ['8'], '0$1'],
            ],
            '0',
          ],
          IL: [
            '972',
            '0(?:0|1[2-9])',
            '1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}',
            [7, 8, 9, 10, 11, 12],
            [
              ['(\\d{4})(\\d{3})', '$1-$2', ['125']],
              ['(\\d{4})(\\d{2})(\\d{2})', '$1-$2-$3', ['121']],
              ['(\\d)(\\d{3})(\\d{4})', '$1-$2-$3', ['[2-489]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['[57]'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1-$2-$3', ['12']],
              ['(\\d{4})(\\d{6})', '$1-$2', ['159']],
              ['(\\d)(\\d{3})(\\d{3})(\\d{3})', '$1-$2-$3-$4', ['1[7-9]']],
              ['(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})', '$1-$2 $3-$4', ['15']],
            ],
            '0',
          ],
          IM: [
            '44',
            '00',
            '1624\\d{6}|(?:[3578]\\d|90)\\d{8}',
            [10],
            0,
            '0',
            0,
            '([25-8]\\d{5})$|0',
            '1624$1',
            0,
            '74576|(?:16|7[56])24',
          ],
          IN: [
            '91',
            '00',
            '(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}',
            [8, 9, 10, 11, 12, 13],
            [
              [
                '(\\d{8})',
                '$1',
                [
                  '5(?:0|2[23]|3[03]|[67]1|88)',
                  '5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)',
                  '5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)',
                ],
                0,
                1,
              ],
              ['(\\d{4})(\\d{4,5})', '$1 $2', ['180', '1800'], 0, 1],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['140'], 0, 1],
              [
                '(\\d{2})(\\d{4})(\\d{4})',
                '$1 $2 $3',
                [
                  '11|2[02]|33|4[04]|79[1-7]|80[2-46]',
                  '11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])',
                  '11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])',
                ],
                '0$1',
                1,
              ],
              [
                '(\\d{3})(\\d{3})(\\d{4})',
                '$1 $2 $3',
                [
                  '1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]',
                  '1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]',
                  '1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]',
                ],
                '0$1',
                1,
              ],
              [
                '(\\d{4})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                [
                  '1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807',
                  '1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]',
                  '1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]',
                ],
                '0$1',
                1,
              ],
              ['(\\d{5})(\\d{5})', '$1 $2', ['[6-9]'], '0$1', 1],
              [
                '(\\d{4})(\\d{2,4})(\\d{4})',
                '$1 $2 $3',
                ['1(?:6|8[06])', '1(?:6|8[06]0)'],
                0,
                1,
              ],
              ['(\\d{4})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['18'], 0, 1],
            ],
            '0',
          ],
          IO: [
            '246',
            '00',
            '3\\d{6}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['3']]],
          ],
          IQ: [
            '964',
            '00',
            '(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}',
            [8, 9, 10],
            [
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-6]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1'],
            ],
            '0',
          ],
          IR: [
            '98',
            '00',
            '[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}',
            [4, 5, 6, 7, 10],
            [
              ['(\\d{4,5})', '$1', ['96'], '0$1'],
              [
                '(\\d{2})(\\d{4,5})',
                '$1 $2',
                [
                  '(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]',
                ],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['9'], '0$1'],
              ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['[1-8]'], '0$1'],
            ],
            '0',
          ],
          IS: [
            '354',
            '00|1(?:0(?:01|[12]0)|100)',
            '(?:38\\d|[4-9])\\d{6}',
            [7, 9],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['[4-9]']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['3']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          IT: [
            '39',
            '00',
            '0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?',
            [6, 7, 8, 9, 10, 11],
            [
              ['(\\d{2})(\\d{4,6})', '$1 $2', ['0[26]']],
              [
                '(\\d{3})(\\d{3,6})',
                '$1 $2',
                [
                  '0[13-57-9][0159]|8(?:03|4[17]|9[2-5])',
                  '0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))',
                ],
              ],
              [
                '(\\d{4})(\\d{2,6})',
                '$1 $2',
                ['0(?:[13-579][2-46-8]|8[236-8])'],
              ],
              ['(\\d{4})(\\d{4})', '$1 $2', ['894']],
              ['(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['0[26]|5']],
              [
                '(\\d{3})(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['1(?:44|[679])|[378]|43'],
              ],
              [
                '(\\d{3})(\\d{3,4})(\\d{4})',
                '$1 $2 $3',
                ['0[13-57-9][0159]|14'],
              ],
              ['(\\d{2})(\\d{4})(\\d{5})', '$1 $2 $3', ['0[26]']],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['0']],
              ['(\\d{3})(\\d{4})(\\d{4,5})', '$1 $2 $3', ['3']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              [
                '0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}',
              ],
              ['3[2-9]\\d{7,8}|(?:31|43)\\d{8}', [9, 10]],
              ['80(?:0\\d{3}|3)\\d{3}', [6, 9]],
              [
                '(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}',
                [6, 8, 9, 10],
              ],
              ['1(?:78\\d|99)\\d{6}', [9, 10]],
              0,
              0,
              0,
              ['55\\d{8}', [10]],
              ['84(?:[08]\\d{3}|[17])\\d{3}', [6, 9]],
            ],
          ],
          JE: [
            '44',
            '00',
            '1534\\d{6}|(?:[3578]\\d|90)\\d{8}',
            [10],
            0,
            '0',
            0,
            '([0-24-8]\\d{5})$|0',
            '1534$1',
            0,
            0,
            [
              ['1534[0-24-8]\\d{5}'],
              ['7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}'],
              ['80(?:07(?:35|81)|8901)\\d{4}'],
              [
                '(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}',
              ],
              ['701511\\d{4}'],
              0,
              [
                '(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}',
              ],
              [
                '76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}',
              ],
              ['56\\d{8}'],
            ],
          ],
          JM: [
            '1',
            '011',
            '(?:[58]\\d\\d|658|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            0,
            0,
            0,
            '658|876',
          ],
          JO: [
            '962',
            '00',
            '(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}',
            [8, 9],
            [
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2356]|87'], '(0$1)'],
              ['(\\d{3})(\\d{5,6})', '$1 $2', ['[89]'], '0$1'],
              ['(\\d{2})(\\d{7})', '$1 $2', ['70'], '0$1'],
              ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['7'], '0$1'],
            ],
            '0',
          ],
          JP: [
            '81',
            '010',
            '00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}',
            [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [
              [
                '(\\d{3})(\\d{3})(\\d{3})',
                '$1-$2-$3',
                ['(?:12|57|99)0'],
                '0$1',
              ],
              [
                '(\\d{4})(\\d)(\\d{4})',
                '$1-$2-$3',
                [
                  '1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])',
                  '1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]',
                  '1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]',
                ],
                '0$1',
              ],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['60'], '0$1'],
              [
                '(\\d)(\\d{4})(\\d{4})',
                '$1-$2-$3',
                [
                  '[36]|4(?:2[09]|7[01])',
                  '[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))',
                ],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{4})',
                '$1-$2-$3',
                [
                  '1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])',
                  '1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]',
                  '1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]',
                ],
                '0$1',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{4})',
                '$1-$2-$3',
                ['[14]|[289][2-9]|5[3-9]|7[2-4679]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['800'], '0$1'],
              ['(\\d{2})(\\d{4})(\\d{4})', '$1-$2-$3', ['[257-9]'], '0$1'],
            ],
            '0',
            0,
            '(000[259]\\d{6})$|(?:(?:003768)0?)|0',
            '$1',
          ],
          KE: [
            '254',
            '000',
            '(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}',
            [7, 8, 9, 10],
            [
              ['(\\d{2})(\\d{5,7})', '$1 $2', ['[24-6]'], '0$1'],
              ['(\\d{3})(\\d{6})', '$1 $2', ['[17]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[89]'], '0$1'],
            ],
            '0',
          ],
          KG: [
            '996',
            '00',
            '8\\d{9}|[235-9]\\d{8}',
            [9, 10],
            [
              ['(\\d{4})(\\d{5})', '$1 $2', ['3(?:1[346]|[24-79])'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[235-79]|88'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d)(\\d{2,3})', '$1 $2 $3 $4', ['8'], '0$1'],
            ],
            '0',
          ],
          KH: [
            '855',
            '00[14-9]',
            '1\\d{9}|[1-9]\\d{7,8}',
            [8, 9, 10],
            [
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[1-9]'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']],
            ],
            '0',
          ],
          KI: [
            '686',
            '00',
            '(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}',
            [5, 8],
            0,
            '0',
          ],
          KM: [
            '269',
            '00',
            '[3478]\\d{6}',
            [7],
            [['(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3', ['[3478]']]],
          ],
          KN: [
            '1',
            '011',
            '(?:[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-7]\\d{6})$|1',
            '869$1',
            0,
            '869',
          ],
          KP: [
            '850',
            '00|99',
            '85\\d{6}|(?:19\\d|[2-7])\\d{7}',
            [8, 10],
            [
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['8'], '0$1'],
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-7]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'],
            ],
            '0',
          ],
          KR: [
            '82',
            '00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))',
            '00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}',
            [5, 6, 8, 9, 10, 11, 12, 13, 14],
            [
              [
                '(\\d{2})(\\d{3,4})',
                '$1-$2',
                ['(?:3[1-3]|[46][1-4]|5[1-5])1'],
                '0$1',
              ],
              ['(\\d{4})(\\d{4})', '$1-$2', ['1']],
              ['(\\d)(\\d{3,4})(\\d{4})', '$1-$2-$3', ['2'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['60|8'], '0$1'],
              [
                '(\\d{2})(\\d{3,4})(\\d{4})',
                '$1-$2-$3',
                ['[1346]|5[1-5]'],
                '0$1',
              ],
              ['(\\d{2})(\\d{4})(\\d{4})', '$1-$2-$3', ['[57]'], '0$1'],
              ['(\\d{2})(\\d{5})(\\d{4})', '$1-$2-$3', ['5'], '0$1'],
            ],
            '0',
            0,
            '0(8(?:[1-46-8]|5\\d\\d))?',
          ],
          KW: [
            '965',
            '00',
            '18\\d{5}|(?:[2569]\\d|41)\\d{6}',
            [7, 8],
            [
              [
                '(\\d{4})(\\d{3,4})',
                '$1 $2',
                ['[169]|2(?:[235]|4[1-35-9])|52'],
              ],
              ['(\\d{3})(\\d{5})', '$1 $2', ['[245]']],
            ],
          ],
          KY: [
            '1',
            '011',
            '(?:345|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-9]\\d{6})$|1',
            '345$1',
            0,
            '345',
          ],
          KZ: [
            '7',
            '810',
            '(?:33622|8\\d{8})\\d{5}|[78]\\d{9}',
            [10, 14],
            0,
            '8',
            0,
            0,
            0,
            0,
            '33|7',
            0,
            '8~10',
          ],
          LA: [
            '856',
            '00',
            '[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}',
            [8, 9, 10],
            [
              [
                '(\\d{2})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                ['2[13]|3[14]|[4-8]'],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{3})',
                '$1 $2 $3 $4',
                ['30[013-9]'],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{2})(\\d{3})(\\d{3})',
                '$1 $2 $3 $4',
                ['[23]'],
                '0$1',
              ],
            ],
            '0',
          ],
          LB: [
            '961',
            '00',
            '[27-9]\\d{7}|[13-9]\\d{6}',
            [7, 8],
            [
              [
                '(\\d)(\\d{3})(\\d{3})',
                '$1 $2 $3',
                ['[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]'],
                '0$1',
              ],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[27-9]']],
            ],
            '0',
          ],
          LC: [
            '1',
            '011',
            '(?:[58]\\d\\d|758|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-8]\\d{6})$|1',
            '758$1',
            0,
            '758',
          ],
          LI: [
            '423',
            '00',
            '[68]\\d{8}|(?:[2378]\\d|90)\\d{5}',
            [7, 9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3',
                ['[2379]|8(?:0[09]|7)', '[2379]|8(?:0(?:02|9)|7)'],
              ],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8']],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['69']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6']],
            ],
            '0',
            0,
            '(1001)|0',
          ],
          LK: [
            '94',
            '00',
            '[1-9]\\d{8}',
            [9],
            [
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[1-689]'], '0$1'],
            ],
            '0',
          ],
          LR: [
            '231',
            '00',
            '(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}',
            [7, 8, 9],
            [
              ['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['4[67]|[56]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['2'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-578]'], '0$1'],
            ],
            '0',
          ],
          LS: [
            '266',
            '00',
            '(?:[256]\\d\\d|800)\\d{5}',
            [8],
            [['(\\d{4})(\\d{4})', '$1 $2', ['[2568]']]],
          ],
          LT: [
            '370',
            '00',
            '(?:[3469]\\d|52|[78]0)\\d{6}',
            [8],
            [
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['52[0-7]'], '(8-$1)', 1],
              ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[7-9]'], '8 $1', 1],
              [
                '(\\d{2})(\\d{6})',
                '$1 $2',
                ['37|4(?:[15]|6[1-8])'],
                '(8-$1)',
                1,
              ],
              ['(\\d{3})(\\d{5})', '$1 $2', ['[3-6]'], '(8-$1)', 1],
            ],
            '8',
            0,
            '[08]',
          ],
          LU: [
            '352',
            '00',
            '35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}',
            [4, 5, 6, 7, 8, 9, 10, 11],
            [
              [
                '(\\d{2})(\\d{3})',
                '$1 $2',
                [
                  '2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])',
                ],
              ],
              [
                '(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3',
                [
                  '2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])',
                ],
              ],
              ['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['20[2-689]']],
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})',
                '$1 $2 $3 $4',
                ['2(?:[0367]|4[3-8])'],
              ],
              ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['80[01]|90[015]']],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3 $4', ['20']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6']],
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})',
                '$1 $2 $3 $4 $5',
                ['2(?:[0367]|4[3-8])'],
              ],
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})',
                '$1 $2 $3 $4',
                ['[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]'],
              ],
            ],
            0,
            0,
            '(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)',
          ],
          LV: [
            '371',
            '00',
            '(?:[268]\\d|90)\\d{6}',
            [8],
            [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[269]|8[01]']]],
          ],
          LY: [
            '218',
            '00',
            '[2-9]\\d{8}',
            [9],
            [['(\\d{2})(\\d{7})', '$1-$2', ['[2-9]'], '0$1']],
            '0',
          ],
          MA: [
            '212',
            '00',
            '[5-8]\\d{8}',
            [9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['5[45]'],
                '0$1',
              ],
              [
                '(\\d{4})(\\d{5})',
                '$1-$2',
                ['5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)'],
                '0$1',
              ],
              ['(\\d{2})(\\d{7})', '$1-$2', ['8'], '0$1'],
              ['(\\d{3})(\\d{6})', '$1-$2', ['[5-7]'], '0$1'],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            [
              [
                '5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}',
              ],
              [
                '(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}',
              ],
              ['80[0-7]\\d{6}'],
              ['89\\d{7}'],
              0,
              0,
              0,
              0,
              ['(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}'],
            ],
          ],
          MC: [
            '377',
            '00',
            '(?:[3489]|6\\d)\\d{7}',
            [8, 9],
            [
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['4'], '0$1'],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[389]']],
              [
                '(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4 $5',
                ['6'],
                '0$1',
              ],
            ],
            '0',
          ],
          MD: [
            '373',
            '00',
            '(?:[235-7]\\d|[89]0)\\d{6}',
            [8],
            [
              ['(\\d{3})(\\d{5})', '$1 $2', ['[89]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['22|3'], '0$1'],
              ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[25-7]'], '0$1'],
            ],
            '0',
          ],
          ME: [
            '382',
            '00',
            '(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}',
            [8, 9],
            [['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[2-9]'], '0$1']],
            '0',
          ],
          MF: [
            '590',
            '00',
            '590\\d{6}|(?:69|80|9\\d)\\d{7}',
            [9],
            0,
            '0',
            0,
            0,
            0,
            0,
            0,
            [
              ['590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}'],
              [
                '69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}',
              ],
              ['80[0-5]\\d{6}'],
              0,
              0,
              0,
              0,
              0,
              ['9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}'],
            ],
          ],
          MG: [
            '261',
            '00',
            '[23]\\d{8}',
            [9],
            [
              [
                '(\\d{2})(\\d{2})(\\d{3})(\\d{2})',
                '$1 $2 $3 $4',
                ['[23]'],
                '0$1',
              ],
            ],
            '0',
            0,
            '([24-9]\\d{6})$|0',
            '20$1',
          ],
          MH: [
            '692',
            '011',
            '329\\d{4}|(?:[256]\\d|45)\\d{5}',
            [7],
            [['(\\d{3})(\\d{4})', '$1-$2', ['[2-6]']]],
            '1',
          ],
          MK: [
            '389',
            '00',
            '[2-578]\\d{7}',
            [8],
            [
              [
                '(\\d)(\\d{3})(\\d{4})',
                '$1 $2 $3',
                ['2|34[47]|4(?:[37]7|5[47]|64)'],
                '0$1',
              ],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[347]'], '0$1'],
              ['(\\d{3})(\\d)(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[58]'], '0$1'],
            ],
            '0',
          ],
          ML: [
            '223',
            '00',
            '[24-9]\\d{7}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[24-9]']]],
          ],
          MM: [
            '95',
            '00',
            '1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}',
            [6, 7, 8, 9, 10],
            [
              ['(\\d)(\\d{2})(\\d{3})', '$1 $2 $3', ['16|2'], '0$1'],
              [
                '(\\d{2})(\\d{2})(\\d{3})',
                '$1 $2 $3',
                ['[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]'],
                '0$1',
              ],
              ['(\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[12]'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['[4-7]|8[1-35]'],
                '0$1',
              ],
              [
                '(\\d)(\\d{3})(\\d{4,6})',
                '$1 $2 $3',
                ['9(?:2[0-4]|[35-9]|4[137-9])'],
                '0$1',
              ],
              ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['2'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8'], '0$1'],
              ['(\\d)(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['92'], '0$1'],
              ['(\\d)(\\d{5})(\\d{4})', '$1 $2 $3', ['9'], '0$1'],
            ],
            '0',
          ],
          MN: [
            '976',
            '001',
            '[12]\\d{7,9}|[5-9]\\d{7}',
            [8, 9, 10],
            [
              ['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['[12]1'], '0$1'],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[5-9]']],
              ['(\\d{3})(\\d{5,6})', '$1 $2', ['[12]2[1-3]'], '0$1'],
              [
                '(\\d{4})(\\d{5,6})',
                '$1 $2',
                [
                  '[12](?:27|3[2-8]|4[2-68]|5[1-4689])',
                  '[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]',
                ],
                '0$1',
              ],
              ['(\\d{5})(\\d{4,5})', '$1 $2', ['[12]'], '0$1'],
            ],
            '0',
          ],
          MO: [
            '853',
            '00',
            '0800\\d{3}|(?:28|[68]\\d)\\d{6}',
            [7, 8],
            [
              ['(\\d{4})(\\d{3})', '$1 $2', ['0']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[268]']],
            ],
          ],
          MP: [
            '1',
            '011',
            '[58]\\d{9}|(?:67|90)0\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-9]\\d{6})$|1',
            '670$1',
            0,
            '670',
          ],
          MQ: [
            '596',
            '00',
            '596\\d{6}|(?:69|80|9\\d)\\d{7}',
            [9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[569]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0$1'],
            ],
            '0',
          ],
          MR: [
            '222',
            '00',
            '(?:[2-4]\\d\\d|800)\\d{5}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2-48]']]],
          ],
          MS: [
            '1',
            '011',
            '(?:[58]\\d\\d|664|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([34]\\d{6})$|1',
            '664$1',
            0,
            '664',
          ],
          MT: [
            '356',
            '00',
            '3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}',
            [8],
            [['(\\d{4})(\\d{4})', '$1 $2', ['[2357-9]']]],
          ],
          MU: [
            '230',
            '0(?:0|[24-7]0|3[03])',
            '(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}',
            [7, 8, 10],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['[2-46]|8[013]']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[57]']],
              ['(\\d{5})(\\d{5})', '$1 $2', ['8']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '020',
          ],
          MV: [
            '960',
            '0(?:0|19)',
            '(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}',
            [7, 10],
            [
              ['(\\d{3})(\\d{4})', '$1-$2', ['[34679]']],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[89]']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          MW: [
            '265',
            '00',
            '(?:[1289]\\d|31|77)\\d{7}|1\\d{6}',
            [7, 9],
            [
              ['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['1[2-9]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['2'], '0$1'],
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[137-9]'],
                '0$1',
              ],
            ],
            '0',
          ],
          MX: [
            '52',
            '0[09]',
            '1(?:(?:22|44|7[27]|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-689]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}',
            [10, 11],
            [
              ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['33|5[56]|81'], 0, 1],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-9]'], 0, 1],
              [
                '(\\d)(\\d{2})(\\d{4})(\\d{4})',
                '$2 $3 $4',
                ['1(?:33|5[56]|81)'],
                0,
                1,
              ],
              ['(\\d)(\\d{3})(\\d{3})(\\d{4})', '$2 $3 $4', ['1'], 0, 1],
            ],
            '01',
            0,
            '0(?:[12]|4[45])|1',
            0,
            0,
            0,
            0,
            '00',
          ],
          MY: [
            '60',
            '00',
            '1\\d{8,9}|(?:3\\d|[4-9])\\d{7}',
            [8, 9, 10],
            [
              ['(\\d)(\\d{3})(\\d{4})', '$1-$2 $3', ['[4-79]'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{3,4})',
                '$1-$2 $3',
                [
                  '1(?:[02469]|[378][1-9]|53)|8',
                  '1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8',
                ],
                '0$1',
              ],
              ['(\\d)(\\d{4})(\\d{4})', '$1-$2 $3', ['3'], '0$1'],
              [
                '(\\d)(\\d{3})(\\d{2})(\\d{4})',
                '$1-$2-$3-$4',
                ['1(?:[367]|80)'],
              ],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1-$2 $3', ['15'], '0$1'],
              ['(\\d{2})(\\d{4})(\\d{4})', '$1-$2 $3', ['1'], '0$1'],
            ],
            '0',
          ],
          MZ: [
            '258',
            '00',
            '(?:2|8\\d)\\d{7}',
            [8, 9],
            [
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2|8[2-79]']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['8']],
            ],
          ],
          NA: [
            '264',
            '00',
            '[68]\\d{7,8}',
            [8, 9],
            [
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['88'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['6'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['87'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['8'], '0$1'],
            ],
            '0',
          ],
          NC: [
            '687',
            '00',
            '(?:050|[2-57-9]\\d\\d)\\d{3}',
            [6],
            [['(\\d{2})(\\d{2})(\\d{2})', '$1.$2.$3', ['[02-57-9]']]],
          ],
          NE: [
            '227',
            '00',
            '[027-9]\\d{7}',
            [8],
            [
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['08']],
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[089]|2[013]|7[047]'],
              ],
            ],
          ],
          NF: [
            '672',
            '00',
            '[13]\\d{5}',
            [6],
            [
              ['(\\d{2})(\\d{4})', '$1 $2', ['1[0-3]']],
              ['(\\d)(\\d{5})', '$1 $2', ['[13]']],
            ],
            0,
            0,
            '([0-258]\\d{4})$',
            '3$1',
          ],
          NG: [
            '234',
            '009',
            '2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}',
            [7, 8, 10, 11, 12, 13, 14],
            [
              ['(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['78'], '0$1'],
              [
                '(\\d)(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['[12]|9(?:0[3-9]|[1-9])'],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{2,3})',
                '$1 $2 $3',
                ['[3-6]|7(?:0[0-689]|[1-79])|8[2-9]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[7-9]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['20[129]'], '0$1'],
              ['(\\d{4})(\\d{2})(\\d{4})', '$1 $2 $3', ['2'], '0$1'],
              ['(\\d{3})(\\d{4})(\\d{4,5})', '$1 $2 $3', ['[78]'], '0$1'],
              ['(\\d{3})(\\d{5})(\\d{5,6})', '$1 $2 $3', ['[78]'], '0$1'],
            ],
            '0',
          ],
          NI: [
            '505',
            '00',
            '(?:1800|[25-8]\\d{3})\\d{4}',
            [8],
            [['(\\d{4})(\\d{4})', '$1 $2', ['[125-8]']]],
          ],
          NL: [
            '31',
            '00',
            '(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}',
            [5, 6, 7, 8, 9, 10, 11],
            [
              ['(\\d{3})(\\d{4,7})', '$1 $2', ['[89]0'], '0$1'],
              ['(\\d{2})(\\d{7})', '$1 $2', ['66'], '0$1'],
              ['(\\d)(\\d{8})', '$1 $2', ['6'], '0$1'],
              [
                '(\\d{3})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                ['1[16-8]|2[259]|3[124]|4[17-9]|5[124679]'],
                '0$1',
              ],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1-578]|91'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{5})', '$1 $2 $3', ['9'], '0$1'],
            ],
            '0',
          ],
          NO: [
            '47',
            '00',
            '(?:0|[2-9]\\d{3})\\d{4}',
            [5, 8],
            [
              ['(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['8']],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2-79]']],
            ],
            0,
            0,
            0,
            0,
            0,
            '[02-689]|7[0-8]',
          ],
          NP: [
            '977',
            '00',
            '(?:1\\d|9)\\d{9}|[1-9]\\d{7}',
            [8, 10, 11],
            [
              ['(\\d)(\\d{7})', '$1-$2', ['1[2-6]'], '0$1'],
              [
                '(\\d{2})(\\d{6})',
                '$1-$2',
                ['1[01]|[2-8]|9(?:[1-59]|[67][2-6])'],
                '0$1',
              ],
              ['(\\d{3})(\\d{7})', '$1-$2', ['9']],
            ],
            '0',
          ],
          NR: [
            '674',
            '00',
            '(?:444|(?:55|8\\d)\\d|666)\\d{4}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[4-68]']]],
          ],
          NU: [
            '683',
            '00',
            '(?:[4-7]|888\\d)\\d{3}',
            [4, 7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['8']]],
          ],
          NZ: [
            '64',
            '0(?:0|161)',
            '[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}',
            [5, 6, 7, 8, 9, 10],
            [
              ['(\\d{2})(\\d{3,8})', '$1 $2', ['8[1-79]'], '0$1'],
              [
                '(\\d{3})(\\d{2})(\\d{2,3})',
                '$1 $2 $3',
                ['50[036-8]|8|90', '50(?:[0367]|88)|8|90'],
                '0$1',
              ],
              [
                '(\\d)(\\d{3})(\\d{4})',
                '$1 $2 $3',
                ['24|[346]|7[2-57-9]|9[2-9]'],
                '0$1',
              ],
              [
                '(\\d{3})(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['2(?:10|74)|[589]'],
                '0$1',
              ],
              ['(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['1|2[028]'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{3,5})',
                '$1 $2 $3',
                ['2(?:[169]|7[0-35-9])|7'],
                '0$1',
              ],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          OM: [
            '968',
            '00',
            '(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}',
            [7, 8, 9],
            [
              ['(\\d{3})(\\d{4,6})', '$1 $2', ['[58]']],
              ['(\\d{2})(\\d{6})', '$1 $2', ['2']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[179]']],
            ],
          ],
          PA: [
            '507',
            '00',
            '(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}',
            [7, 8, 10, 11],
            [
              ['(\\d{3})(\\d{4})', '$1-$2', ['[1-57-9]']],
              ['(\\d{4})(\\d{4})', '$1-$2', ['[68]']],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8']],
            ],
          ],
          PE: [
            '51',
            '00|19(?:1[124]|77|90)00',
            '(?:[14-8]|9\\d)\\d{7}',
            [8, 9],
            [
              ['(\\d{3})(\\d{5})', '$1 $2', ['80'], '(0$1)'],
              ['(\\d)(\\d{7})', '$1 $2', ['1'], '(0$1)'],
              ['(\\d{2})(\\d{6})', '$1 $2', ['[4-8]'], '(0$1)'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['9']],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
            ' Anexo ',
          ],
          PF: [
            '689',
            '00',
            '4\\d{5}(?:\\d{2})?|8\\d{7,8}',
            [6, 8, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['44']],
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['4|8[7-9]']],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8']],
            ],
          ],
          PG: [
            '675',
            '00|140[1-3]',
            '(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}',
            [7, 8],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['18|[2-69]|85']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[78]']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          PH: [
            '63',
            '00',
            '(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}',
            [6, 8, 9, 10, 11, 12, 13],
            [
              ['(\\d)(\\d{5})', '$1 $2', ['2'], '(0$1)'],
              [
                '(\\d{4})(\\d{4,6})',
                '$1 $2',
                [
                  '3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2',
                  '3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))',
                ],
                '(0$1)',
              ],
              [
                '(\\d{5})(\\d{4})',
                '$1 $2',
                ['346|4(?:27|9[35])|883', '3469|4(?:279|9(?:30|56))|8834'],
                '(0$1)',
              ],
              ['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['2'], '(0$1)'],
              [
                '(\\d{2})(\\d{3})(\\d{4})',
                '$1 $2 $3',
                ['[3-7]|8[2-8]'],
                '(0$1)',
              ],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['[89]'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']],
              ['(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})', '$1 $2 $3 $4', ['1']],
            ],
            '0',
          ],
          PK: [
            '92',
            '00',
            '122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}',
            [8, 9, 10, 11, 12],
            [
              ['(\\d{3})(\\d{3})(\\d{2,7})', '$1 $2 $3', ['[89]0'], '0$1'],
              ['(\\d{4})(\\d{5})', '$1 $2', ['1']],
              [
                '(\\d{3})(\\d{6,7})',
                '$1 $2',
                [
                  '2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])',
                  '9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]',
                ],
                '(0$1)',
              ],
              [
                '(\\d{2})(\\d{7,8})',
                '$1 $2',
                ['(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]'],
                '(0$1)',
              ],
              ['(\\d{5})(\\d{5})', '$1 $2', ['58'], '(0$1)'],
              ['(\\d{3})(\\d{7})', '$1 $2', ['3'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{3})(\\d{3})',
                '$1 $2 $3 $4',
                ['2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91'],
                '(0$1)',
              ],
              [
                '(\\d{3})(\\d{3})(\\d{3})(\\d{3})',
                '$1 $2 $3 $4',
                ['[24-9]'],
                '(0$1)',
              ],
            ],
            '0',
          ],
          PL: [
            '48',
            '00',
            '(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}',
            [6, 7, 8, 9, 10],
            [
              ['(\\d{5})', '$1', ['19']],
              ['(\\d{3})(\\d{3})', '$1 $2', ['11|20|64']],
              [
                '(\\d{2})(\\d{2})(\\d{3})',
                '$1 $2 $3',
                [
                  '(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1',
                  '(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19',
                ],
              ],
              ['(\\d{3})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['64']],
              [
                '(\\d{3})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                ['21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)'],
              ],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['1[2-8]|[2-7]|8[1-79]|9[145]'],
              ],
              ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['8']],
            ],
          ],
          PM: [
            '508',
            '00',
            '[45]\\d{5}|(?:708|80\\d)\\d{6}',
            [6, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['[45]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['7']],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8'], '0$1'],
            ],
            '0',
          ],
          PR: [
            '1',
            '011',
            '(?:[589]\\d\\d|787)\\d{7}',
            [10],
            0,
            '1',
            0,
            0,
            0,
            0,
            '787|939',
          ],
          PS: [
            '970',
            '00',
            '[2489]2\\d{6}|(?:1\\d|5)\\d{8}',
            [8, 9, 10],
            [
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2489]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['5'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']],
            ],
            '0',
          ],
          PT: [
            '351',
            '00',
            '1693\\d{5}|(?:[26-9]\\d|30)\\d{7}',
            [9],
            [
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['2[12]']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['16|[236-9]']],
            ],
          ],
          PW: [
            '680',
            '01[12]',
            '(?:[24-8]\\d\\d|345|900)\\d{4}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[2-9]']]],
          ],
          PY: [
            '595',
            '00',
            '59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}',
            [6, 7, 8, 9, 10, 11],
            [
              ['(\\d{3})(\\d{3,6})', '$1 $2', ['[2-9]0'], '0$1'],
              [
                '(\\d{2})(\\d{5})',
                '$1 $2',
                ['[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]'],
                '(0$1)',
              ],
              [
                '(\\d{3})(\\d{4,5})',
                '$1 $2',
                ['2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85'],
                '(0$1)',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]'],
                '(0$1)',
              ],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['87']],
              ['(\\d{3})(\\d{6})', '$1 $2', ['9(?:[5-79]|8[1-7])'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-8]'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['9']],
            ],
            '0',
          ],
          QA: [
            '974',
            '00',
            '800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}',
            [7, 8, 9, 11],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['2[16]|8']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[3-7]']],
            ],
          ],
          RE: [
            '262',
            '00',
            '(?:26|[689]\\d)\\d{7}',
            [9],
            [
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[2689]'],
                '0$1',
              ],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            [
              ['26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}'],
              [
                '69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}',
              ],
              ['80\\d{7}'],
              ['89[1-37-9]\\d{6}'],
              0,
              0,
              0,
              0,
              ['9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}'],
              ['8(?:1[019]|2[0156]|84|90)\\d{6}'],
            ],
          ],
          RO: [
            '40',
            '00',
            '(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}',
            [6, 9],
            [
              ['(\\d{3})(\\d{3})', '$1 $2', ['2[3-6]', '2[3-6]\\d9'], '0$1'],
              ['(\\d{2})(\\d{4})', '$1 $2', ['219|31'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[23]1'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[236-9]'], '0$1'],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            ' int ',
          ],
          RS: [
            '381',
            '00',
            '38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}',
            [6, 7, 8, 9, 10, 11, 12],
            [
              ['(\\d{3})(\\d{3,9})', '$1 $2', ['(?:2[389]|39)0|[7-9]'], '0$1'],
              ['(\\d{2})(\\d{5,10})', '$1 $2', ['[1-36]'], '0$1'],
            ],
            '0',
          ],
          RU: [
            '7',
            '810',
            '8\\d{13}|[347-9]\\d{9}',
            [10, 14],
            [
              [
                '(\\d{4})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                [
                  '7(?:1[0-8]|2[1-9])',
                  '7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))',
                  '7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2',
                ],
                '8 ($1)',
                1,
              ],
              [
                '(\\d{5})(\\d)(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                [
                  '7(?:1[0-68]|2[1-9])',
                  '7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))',
                  '7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]',
                ],
                '8 ($1)',
                1,
              ],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '8 ($1)', 1],
              [
                '(\\d{3})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2-$3-$4',
                ['[349]|8(?:[02-7]|1[1-8])'],
                '8 ($1)',
                1,
              ],
              [
                '(\\d{4})(\\d{4})(\\d{3})(\\d{3})',
                '$1 $2 $3 $4',
                ['8'],
                '8 ($1)',
              ],
            ],
            '8',
            0,
            0,
            0,
            0,
            '3[04-689]|[489]',
            0,
            '8~10',
          ],
          RW: [
            '250',
            '00',
            '(?:06|[27]\\d\\d|[89]00)\\d{6}',
            [8, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['0']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['2']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[7-9]'], '0$1'],
            ],
            '0',
          ],
          SA: [
            '966',
            '00',
            '92\\d{7}|(?:[15]|8\\d)\\d{8}',
            [9, 10],
            [
              ['(\\d{4})(\\d{5})', '$1 $2', ['9']],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['5'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['81'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8']],
            ],
            '0',
          ],
          SB: [
            '677',
            '0[01]',
            '(?:[1-6]|[7-9]\\d\\d)\\d{4}',
            [5, 7],
            [['(\\d{2})(\\d{5})', '$1 $2', ['7|8[4-9]|9(?:[1-8]|9[0-8])']]],
          ],
          SC: [
            '248',
            '010|0[0-2]',
            '800\\d{4}|(?:[249]\\d|64)\\d{5}',
            [7],
            [['(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[246]|9[57]']]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          SD: [
            '249',
            '00',
            '[19]\\d{8}',
            [9],
            [['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[19]'], '0$1']],
            '0',
          ],
          SE: [
            '46',
            '00',
            '(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}',
            [6, 7, 8, 9, 10],
            [
              [
                '(\\d{2})(\\d{2,3})(\\d{2})',
                '$1-$2 $3',
                ['20'],
                '0$1',
                0,
                '$1 $2 $3',
              ],
              [
                '(\\d{3})(\\d{4})',
                '$1-$2',
                ['9(?:00|39|44|9)'],
                '0$1',
                0,
                '$1 $2',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{2})',
                '$1-$2 $3',
                ['[12][136]|3[356]|4[0246]|6[03]|90[1-9]'],
                '0$1',
                0,
                '$1 $2 $3',
              ],
              [
                '(\\d)(\\d{2,3})(\\d{2})(\\d{2})',
                '$1-$2 $3 $4',
                ['8'],
                '0$1',
                0,
                '$1 $2 $3 $4',
              ],
              [
                '(\\d{3})(\\d{2,3})(\\d{2})',
                '$1-$2 $3',
                [
                  '1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])',
                ],
                '0$1',
                0,
                '$1 $2 $3',
              ],
              [
                '(\\d{3})(\\d{2,3})(\\d{3})',
                '$1-$2 $3',
                ['9(?:00|39|44)'],
                '0$1',
                0,
                '$1 $2 $3',
              ],
              [
                '(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})',
                '$1-$2 $3 $4',
                ['1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]'],
                '0$1',
                0,
                '$1 $2 $3 $4',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1-$2 $3 $4',
                ['10|7'],
                '0$1',
                0,
                '$1 $2 $3 $4',
              ],
              [
                '(\\d)(\\d{3})(\\d{3})(\\d{2})',
                '$1-$2 $3 $4',
                ['8'],
                '0$1',
                0,
                '$1 $2 $3 $4',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
                '$1-$2 $3 $4',
                [
                  '[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])',
                ],
                '0$1',
                0,
                '$1 $2 $3 $4',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{2})(\\d{3})',
                '$1-$2 $3 $4',
                ['9'],
                '0$1',
                0,
                '$1 $2 $3 $4',
              ],
              [
                '(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1-$2 $3 $4 $5',
                ['[26]'],
                '0$1',
                0,
                '$1 $2 $3 $4 $5',
              ],
            ],
            '0',
          ],
          SG: [
            '65',
            '0[0-3]\\d',
            '(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}',
            [8, 10, 11],
            [
              ['(\\d{4})(\\d{4})', '$1 $2', ['[369]|8(?:0[1-9]|[1-9])']],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8']],
              ['(\\d{4})(\\d{4})(\\d{3})', '$1 $2 $3', ['7']],
              ['(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']],
            ],
          ],
          SH: [
            '290',
            '00',
            '(?:[256]\\d|8)\\d{3}',
            [4, 5],
            0,
            0,
            0,
            0,
            0,
            0,
            '[256]',
          ],
          SI: [
            '386',
            '00|10(?:22|66|88|99)',
            '[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}',
            [5, 6, 7, 8],
            [
              ['(\\d{2})(\\d{3,6})', '$1 $2', ['8[09]|9'], '0$1'],
              ['(\\d{3})(\\d{5})', '$1 $2', ['59|8'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                ['[37][01]|4[0139]|51|6'],
                '0$1',
              ],
              [
                '(\\d)(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[1-57]'],
                '(0$1)',
              ],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          SJ: [
            '47',
            '00',
            '0\\d{4}|(?:[489]\\d|79)\\d{6}',
            [5, 8],
            0,
            0,
            0,
            0,
            0,
            0,
            '79',
          ],
          SK: [
            '421',
            '00',
            '[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}',
            [6, 7, 9],
            [
              ['(\\d)(\\d{2})(\\d{3,4})', '$1 $2 $3', ['21'], '0$1'],
              [
                '(\\d{2})(\\d{2})(\\d{2,3})',
                '$1 $2 $3',
                ['[3-5][1-8]1', '[3-5][1-8]1[67]'],
                '0$1',
              ],
              ['(\\d)(\\d{3})(\\d{3})(\\d{2})', '$1/$2 $3 $4', ['2'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[689]'], '0$1'],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1/$2 $3 $4',
                ['[3-5]'],
                '0$1',
              ],
            ],
            '0',
          ],
          SL: [
            '232',
            '00',
            '(?:[237-9]\\d|66)\\d{6}',
            [8],
            [['(\\d{2})(\\d{6})', '$1 $2', ['[236-9]'], '(0$1)']],
            '0',
          ],
          SM: [
            '378',
            '00',
            '(?:0549|[5-7]\\d)\\d{6}',
            [8, 10],
            [
              ['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[5-7]']],
              ['(\\d{4})(\\d{6})', '$1 $2', ['0']],
            ],
            0,
            0,
            '([89]\\d{5})$',
            '0549$1',
          ],
          SN: [
            '221',
            '00',
            '(?:[378]\\d|93)\\d{7}',
            [9],
            [
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8']],
              ['(\\d{2})(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[379]']],
            ],
          ],
          SO: [
            '252',
            '00',
            '[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}',
            [6, 7, 8, 9],
            [
              ['(\\d{2})(\\d{4})', '$1 $2', ['8[125]']],
              ['(\\d{6})', '$1', ['[134]']],
              ['(\\d)(\\d{6})', '$1 $2', ['[15]|2[0-79]|3[0-46-8]|4[0-7]']],
              ['(\\d)(\\d{7})', '$1 $2', ['(?:2|90)4|[67]']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[348]|64|79|90']],
              ['(\\d{2})(\\d{5,7})', '$1 $2', ['1|28|6[0-35-9]|77|9[2-9]']],
            ],
            '0',
          ],
          SR: [
            '597',
            '00',
            '(?:[2-5]|68|[78]\\d)\\d{5}',
            [6, 7],
            [
              ['(\\d{2})(\\d{2})(\\d{2})', '$1-$2-$3', ['56']],
              ['(\\d{3})(\\d{3})', '$1-$2', ['[2-5]']],
              ['(\\d{3})(\\d{4})', '$1-$2', ['[6-8]']],
            ],
          ],
          SS: [
            '211',
            '00',
            '[19]\\d{8}',
            [9],
            [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[19]'], '0$1']],
            '0',
          ],
          ST: [
            '239',
            '00',
            '(?:22|9\\d)\\d{5}',
            [7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[29]']]],
          ],
          SV: [
            '503',
            '00',
            '[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?',
            [7, 8, 11],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['[89]']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[267]']],
              ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['[89]']],
            ],
          ],
          SX: [
            '1',
            '011',
            '7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '(5\\d{6})$|1',
            '721$1',
            0,
            '721',
          ],
          SY: [
            '963',
            '00',
            '[1-39]\\d{8}|[1-5]\\d{7}',
            [8, 9],
            [
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[1-5]'], '0$1', 1],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['9'], '0$1', 1],
            ],
            '0',
          ],
          SZ: [
            '268',
            '00',
            '0800\\d{4}|(?:[237]\\d|900)\\d{6}',
            [8, 9],
            [
              ['(\\d{4})(\\d{4})', '$1 $2', ['[0237]']],
              ['(\\d{5})(\\d{4})', '$1 $2', ['9']],
            ],
          ],
          TA: ['290', '00', '8\\d{3}', [4], 0, 0, 0, 0, 0, 0, '8'],
          TC: [
            '1',
            '011',
            '(?:[58]\\d\\d|649|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-479]\\d{6})$|1',
            '649$1',
            0,
            '649',
          ],
          TD: [
            '235',
            '00|16',
            '(?:22|[69]\\d|77)\\d{6}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[2679]']]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
          ],
          TG: [
            '228',
            '00',
            '[279]\\d{7}',
            [8],
            [['(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['[279]']]],
          ],
          TH: [
            '66',
            '00[1-9]',
            '(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}',
            [8, 9, 10, 13],
            [
              ['(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[13-9]'], '0$1'],
              ['(\\d{4})(\\d{3})(\\d{3})', '$1 $2 $3', ['1']],
            ],
            '0',
          ],
          TJ: [
            '992',
            '810',
            '[0-57-9]\\d{8}',
            [9],
            [
              ['(\\d{6})(\\d)(\\d{2})', '$1 $2 $3', ['331', '3317']],
              ['(\\d{3})(\\d{2})(\\d{4})', '$1 $2 $3', ['44[02-479]|[34]7']],
              ['(\\d{4})(\\d)(\\d{4})', '$1 $2 $3', ['3[1-5]']],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[0-57-9]']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '8~10',
          ],
          TK: ['690', '00', '[2-47]\\d{3,6}', [4, 5, 6, 7]],
          TL: [
            '670',
            '00',
            '7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}',
            [7, 8],
            [
              ['(\\d{3})(\\d{4})', '$1 $2', ['[2-489]|70']],
              ['(\\d{4})(\\d{4})', '$1 $2', ['7']],
            ],
          ],
          TM: [
            '993',
            '810',
            '[1-6]\\d{7}',
            [8],
            [
              [
                '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
                '$1 $2-$3-$4',
                ['12'],
                '(8 $1)',
              ],
              [
                '(\\d{3})(\\d)(\\d{2})(\\d{2})',
                '$1 $2-$3-$4',
                ['[1-5]'],
                '(8 $1)',
              ],
              ['(\\d{2})(\\d{6})', '$1 $2', ['6'], '8 $1'],
            ],
            '8',
            0,
            0,
            0,
            0,
            0,
            0,
            '8~10',
          ],
          TN: [
            '216',
            '00',
            '[2-57-9]\\d{7}',
            [8],
            [['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-57-9]']]],
          ],
          TO: [
            '676',
            '00',
            '(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}',
            [5, 7],
            [
              [
                '(\\d{2})(\\d{3})',
                '$1-$2',
                ['[2-4]|50|6[09]|7[0-24-69]|8[05]'],
              ],
              ['(\\d{4})(\\d{3})', '$1 $2', ['0']],
              ['(\\d{3})(\\d{4})', '$1 $2', ['[5-9]']],
            ],
          ],
          TR: [
            '90',
            '00',
            '4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}',
            [7, 10, 12, 13],
            [
              [
                '(\\d{3})(\\d{3})(\\d{4})',
                '$1 $2 $3',
                ['512|8[01589]|90'],
                '0$1',
                1,
              ],
              [
                '(\\d{3})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['5(?:[0-59]|61)', '5(?:[0-59]|61[06])', '5(?:[0-59]|61[06]1)'],
                '0$1',
                1,
              ],
              [
                '(\\d{3})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[24][1-8]|3[1-9]'],
                '(0$1)',
                1,
              ],
              ['(\\d{3})(\\d{3})(\\d{6,7})', '$1 $2 $3', ['80'], '0$1', 1],
            ],
            '0',
          ],
          TT: [
            '1',
            '011',
            '(?:[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-46-8]\\d{6})$|1',
            '868$1',
            0,
            '868',
          ],
          TV: [
            '688',
            '00',
            '(?:2|7\\d\\d|90)\\d{4}',
            [5, 6, 7],
            [
              ['(\\d{2})(\\d{3})', '$1 $2', ['2']],
              ['(\\d{2})(\\d{4})', '$1 $2', ['90']],
              ['(\\d{2})(\\d{5})', '$1 $2', ['7']],
            ],
          ],
          TW: [
            '886',
            '0(?:0[25-79]|19)',
            '[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}',
            [7, 8, 9, 10, 11],
            [
              ['(\\d{2})(\\d)(\\d{4})', '$1 $2 $3', ['202'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[258]0'], '0$1'],
              [
                '(\\d)(\\d{3,4})(\\d{4})',
                '$1 $2 $3',
                [
                  '[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]',
                  '[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]',
                ],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[49]'], '0$1'],
              ['(\\d{2})(\\d{4})(\\d{4,5})', '$1 $2 $3', ['7'], '0$1'],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            '#',
          ],
          TZ: [
            '255',
            '00[056]',
            '(?:[25-8]\\d|41|90)\\d{7}',
            [9],
            [
              ['(\\d{3})(\\d{2})(\\d{4})', '$1 $2 $3', ['[89]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[24]'], '0$1'],
              ['(\\d{2})(\\d{7})', '$1 $2', ['5']],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[67]'], '0$1'],
            ],
            '0',
          ],
          UA: [
            '380',
            '00',
            '[89]\\d{9}|[3-9]\\d{8}',
            [9, 10],
            [
              [
                '(\\d{3})(\\d{3})(\\d{3})',
                '$1 $2 $3',
                [
                  '6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]',
                  '6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]',
                ],
                '0$1',
              ],
              [
                '(\\d{4})(\\d{5})',
                '$1 $2',
                [
                  '3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])',
                  '3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])',
                ],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{4})',
                '$1 $2 $3',
                ['[3-7]|89|9[1-9]'],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[89]'], '0$1'],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            0,
            '0~0',
          ],
          UG: [
            '256',
            '00[057]',
            '800\\d{6}|(?:[29]0|[347]\\d)\\d{7}',
            [9],
            [
              ['(\\d{4})(\\d{5})', '$1 $2', ['202', '2024'], '0$1'],
              ['(\\d{3})(\\d{6})', '$1 $2', ['[27-9]|4(?:6[45]|[7-9])'], '0$1'],
              ['(\\d{2})(\\d{7})', '$1 $2', ['[34]'], '0$1'],
            ],
            '0',
          ],
          US: [
            '1',
            '011',
            '[2-9]\\d{9}|3\\d{6}',
            [10],
            [
              ['(\\d{3})(\\d{4})', '$1-$2', ['310'], 0, 1],
              [
                '(\\d{3})(\\d{3})(\\d{4})',
                '($1) $2-$3',
                ['[2-9]'],
                0,
                1,
                '$1-$2-$3',
              ],
            ],
            '1',
            0,
            0,
            0,
            0,
            0,
            [
              [
                '(?:5056(?:[0-35-9]\\d|4[468])|7302[0-3]\\d)\\d{4}|(?:472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}',
              ],
              [''],
              ['8(?:00|33|44|55|66|77|88)[2-9]\\d{6}'],
              ['900[2-9]\\d{6}'],
              [
                '52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}',
              ],
            ],
          ],
          UY: [
            '598',
            '0(?:0|1[3-9]\\d)',
            '0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}',
            [6, 7, 8, 9, 10, 11, 12, 13],
            [
              ['(\\d{3})(\\d{3,4})', '$1 $2', ['0']],
              ['(\\d{3})(\\d{4})', '$1 $2', ['[49]0|8'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['9'], '0$1'],
              ['(\\d{4})(\\d{4})', '$1 $2', ['[124]']],
              ['(\\d{3})(\\d{3})(\\d{2,4})', '$1 $2 $3', ['0']],
              ['(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})', '$1 $2 $3 $4', ['0']],
            ],
            '0',
            0,
            0,
            0,
            0,
            0,
            0,
            '00',
            ' int. ',
          ],
          UZ: [
            '998',
            '810',
            '(?:20|33|[5-79]\\d|88)\\d{7}',
            [9],
            [
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['[235-9]'],
                '8 $1',
              ],
            ],
            '8',
            0,
            0,
            0,
            0,
            0,
            0,
            '8~10',
          ],
          VA: [
            '39',
            '00',
            '0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}',
            [6, 7, 8, 9, 10, 11],
            0,
            0,
            0,
            0,
            0,
            0,
            '06698',
          ],
          VC: [
            '1',
            '011',
            '(?:[58]\\d\\d|784|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-7]\\d{6})$|1',
            '784$1',
            0,
            '784',
          ],
          VE: [
            '58',
            '00',
            '[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}',
            [10],
            [['(\\d{3})(\\d{7})', '$1-$2', ['[24-689]'], '0$1']],
            '0',
          ],
          VG: [
            '1',
            '011',
            '(?:284|[58]\\d\\d|900)\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-578]\\d{6})$|1',
            '284$1',
            0,
            '284',
          ],
          VI: [
            '1',
            '011',
            '[58]\\d{9}|(?:34|90)0\\d{7}',
            [10],
            0,
            '1',
            0,
            '([2-9]\\d{6})$|1',
            '340$1',
            0,
            '340',
          ],
          VN: [
            '84',
            '00',
            '[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}',
            [7, 8, 9, 10],
            [
              ['(\\d{2})(\\d{5})', '$1 $2', ['80'], '0$1', 1],
              ['(\\d{4})(\\d{4,6})', '$1 $2', ['1'], 0, 1],
              [
                '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
                '$1 $2 $3 $4',
                ['6'],
                '0$1',
                1,
              ],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[357-9]'], '0$1', 1],
              ['(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['2[48]'], '0$1', 1],
              ['(\\d{3})(\\d{4})(\\d{3})', '$1 $2 $3', ['2'], '0$1', 1],
            ],
            '0',
          ],
          VU: [
            '678',
            '00',
            '[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}',
            [5, 7],
            [['(\\d{3})(\\d{4})', '$1 $2', ['[57-9]']]],
          ],
          WF: [
            '681',
            '00',
            '(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?',
            [6, 9],
            [
              ['(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['[478]']],
              ['(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8']],
            ],
          ],
          WS: [
            '685',
            '0',
            '(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}',
            [5, 6, 7, 10],
            [
              ['(\\d{5})', '$1', ['[2-5]|6[1-9]']],
              ['(\\d{3})(\\d{3,7})', '$1 $2', ['[68]']],
              ['(\\d{2})(\\d{5})', '$1 $2', ['7']],
            ],
          ],
          XK: [
            '383',
            '00',
            '2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}',
            [8, 9, 10, 11, 12],
            [
              ['(\\d{3})(\\d{5})', '$1 $2', ['[89]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-4]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['2|39'], '0$1'],
              ['(\\d{2})(\\d{7,10})', '$1 $2', ['3'], '0$1'],
            ],
            '0',
          ],
          YE: [
            '967',
            '00',
            '(?:1|7\\d)\\d{7}|[1-7]\\d{6}',
            [7, 8, 9],
            [
              [
                '(\\d)(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['[1-6]|7(?:[24-6]|8[0-7])'],
                '0$1',
              ],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['7'], '0$1'],
            ],
            '0',
          ],
          YT: [
            '262',
            '00',
            '(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}',
            [9],
            0,
            '0',
            0,
            0,
            0,
            0,
            0,
            [
              ['269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}'],
              [
                '639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}',
              ],
              ['80\\d{7}'],
              0,
              0,
              0,
              0,
              0,
              ['9(?:(?:39|47)8[01]|769\\d)\\d{4}'],
            ],
          ],
          ZA: [
            '27',
            '00',
            '[1-79]\\d{8}|8\\d{4,9}',
            [5, 6, 7, 8, 9, 10],
            [
              ['(\\d{2})(\\d{3,4})', '$1 $2', ['8[1-4]'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{2,3})', '$1 $2 $3', ['8[1-4]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['860'], '0$1'],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[1-9]'], '0$1'],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['8'], '0$1'],
            ],
            '0',
          ],
          ZM: [
            '260',
            '00',
            '800\\d{6}|(?:21|63|[79]\\d)\\d{7}',
            [9],
            [
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[28]'], '0$1'],
              ['(\\d{2})(\\d{7})', '$1 $2', ['[79]'], '0$1'],
            ],
            '0',
          ],
          ZW: [
            '263',
            '00',
            '2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}',
            [5, 6, 7, 8, 9, 10],
            [
              [
                '(\\d{3})(\\d{3,5})',
                '$1 $2',
                [
                  '2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]',
                ],
                '0$1',
              ],
              ['(\\d)(\\d{3})(\\d{2,4})', '$1 $2 $3', ['[49]'], '0$1'],
              ['(\\d{3})(\\d{4})', '$1 $2', ['80'], '0$1'],
              [
                '(\\d{2})(\\d{7})',
                '$1 $2',
                [
                  '24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2',
                  '2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]',
                ],
                '(0$1)',
              ],
              ['(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1'],
              [
                '(\\d{3})(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                [
                  '2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)',
                  '2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)',
                ],
                '0$1',
              ],
              ['(\\d{4})(\\d{6})', '$1 $2', ['8'], '0$1'],
              [
                '(\\d{2})(\\d{3,5})',
                '$1 $2',
                [
                  '1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]',
                ],
                '0$1',
              ],
              [
                '(\\d{2})(\\d{3})(\\d{3,4})',
                '$1 $2 $3',
                ['29[013-9]|39|54'],
                '0$1',
              ],
              [
                '(\\d{4})(\\d{3,5})',
                '$1 $2',
                ['(?:25|54)8', '258|5483'],
                '0$1',
              ],
            ],
            '0',
          ],
        },
        nonGeographic: {
          800: [
            '800',
            0,
            '(?:00|[1-9]\\d)\\d{6}',
            [8],
            [['(\\d{4})(\\d{4})', '$1 $2', ['\\d']]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, ['(?:00|[1-9]\\d)\\d{6}']],
          ],
          808: [
            '808',
            0,
            '[1-9]\\d{7}',
            [8],
            [['(\\d{4})(\\d{4})', '$1 $2', ['[1-9]']]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, ['[1-9]\\d{7}']],
          ],
          870: [
            '870',
            0,
            '7\\d{11}|[35-7]\\d{8}',
            [9, 12],
            [['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[35-7]']]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, ['(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}']],
          ],
          878: [
            '878',
            0,
            '10\\d{10}',
            [12],
            [['(\\d{2})(\\d{5})(\\d{5})', '$1 $2 $3', ['1']]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, ['10\\d{10}']],
          ],
          881: [
            '881',
            0,
            '6\\d{9}|[0-36-9]\\d{8}',
            [9, 10],
            [
              ['(\\d)(\\d{3})(\\d{5})', '$1 $2 $3', ['[0-37-9]']],
              ['(\\d)(\\d{3})(\\d{5,6})', '$1 $2 $3', ['6']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, ['6\\d{9}|[0-36-9]\\d{8}']],
          ],
          882: [
            '882',
            0,
            '[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?',
            [7, 8, 9, 10, 11, 12],
            [
              ['(\\d{2})(\\d{5})', '$1 $2', ['16|342']],
              ['(\\d{2})(\\d{6})', '$1 $2', ['49']],
              ['(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['1[36]|9']],
              ['(\\d{2})(\\d{4})(\\d{3})', '$1 $2 $3', ['3[23]']],
              ['(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['16']],
              [
                '(\\d{2})(\\d{4})(\\d{4})',
                '$1 $2 $3',
                ['10|23|3(?:[15]|4[57])|4|51'],
              ],
              ['(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['34']],
              ['(\\d{2})(\\d{4,5})(\\d{5})', '$1 $2 $3', ['[1-35]']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              0,
              [
                '342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}',
                [7, 8, 9, 10, 12],
              ],
              0,
              0,
              0,
              0,
              0,
              0,
              [
                '1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}',
              ],
            ],
          ],
          883: [
            '883',
            0,
            '(?:[1-4]\\d|51)\\d{6,10}',
            [8, 9, 10, 11, 12],
            [
              [
                '(\\d{3})(\\d{3})(\\d{2,8})',
                '$1 $2 $3',
                ['[14]|2[24-689]|3[02-689]|51[24-9]'],
              ],
              ['(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['510']],
              ['(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['21']],
              ['(\\d{4})(\\d{4})(\\d{4})', '$1 $2 $3', ['51[13]']],
              ['(\\d{3})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['[235]']],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              [
                '(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}',
              ],
            ],
          ],
          888: [
            '888',
            0,
            '\\d{11}',
            [11],
            [['(\\d{3})(\\d{3})(\\d{5})', '$1 $2 $3']],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, ['\\d{11}']],
          ],
          979: [
            '979',
            0,
            '[1359]\\d{8}',
            [9],
            [['(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['[1359]']]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, ['[1359]\\d{8}']],
          ],
        },
      }
      function M(e, t) {
        var r = Array.prototype.slice.call(t)
        return r.push(D), e.apply(this, r)
      }
      var R = {}.constructor
      function G(e) {
        return null != e && e.constructor === R
      }
      function B(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function U(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function V(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function q(e) {
        var t,
          r,
          n,
          o,
          i,
          a =
            ((o = Array.prototype.slice.call(e)),
            (i = 4),
            (function (e) {
              if (Array.isArray(e)) return e
            })(o) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                      e['@@iterator']
                if (null != r) {
                  var n,
                    o,
                    i = [],
                    a = !0,
                    d = !1
                  try {
                    for (
                      r = r.call(e);
                      !(a = (n = r.next()).done) &&
                      (i.push(n.value), !t || i.length !== t);
                      a = !0
                    );
                  } catch (e) {
                    ;(d = !0), (o = e)
                  } finally {
                    try {
                      a || null == r.return || r.return()
                    } finally {
                      if (d) throw o
                    }
                  }
                  return i
                }
              })(o, i) ||
              (function (e, t) {
                if (e) {
                  if ('string' == typeof e) return V(e, t)
                  var r = Object.prototype.toString.call(e).slice(8, -1)
                  return (
                    'Object' === r && e.constructor && (r = e.constructor.name),
                    'Map' === r || 'Set' === r
                      ? Array.from(e)
                      : 'Arguments' === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? V(e, t)
                      : void 0
                  )
                }
              })(o, i) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })()),
          d = a[0],
          s = a[1],
          c = a[2],
          u = a[3]
        if ('string' != typeof d)
          throw new TypeError('A text for parsing must be a string.')
        if (((t = d), s && 'string' != typeof s)) {
          if (!G(s)) throw new Error('Invalid second argument: '.concat(s))
          c ? ((r = s), (n = c)) : (n = s)
        } else
          u ? ((r = c), (n = u)) : ((r = void 0), (n = c)),
            s &&
              (r = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? B(Object(r), !0).forEach(function (t) {
                        U(e, t, r[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : B(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        )
                      })
                }
                return e
              })({ defaultCountry: s }, r))
        return { text: t, options: r, metadata: n }
      }
      var Y = ''
        .concat('-‐-―−ー－')
        .concat('／/')
        .concat('．.')
        .concat('  ­​⁠　')
        .concat('()（）［］\\[\\]')
        .concat('~⁓∼～')
      function H(e) {
        return (
          (H =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          H(e)
        )
      }
      function Z(e, t) {
        if (t && ('object' === H(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return W(e)
      }
      function W(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function K(e) {
        var t = 'function' == typeof Map ? new Map() : void 0
        return (
          (K = function (e) {
            if (
              null === e ||
              ((r = e),
              -1 === Function.toString.call(r).indexOf('[native code]'))
            )
              return e
            var r
            if ('function' != typeof e)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e)
              t.set(e, n)
            }
            function n() {
              return J(e, arguments, z(this).constructor)
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              Q(n, e)
            )
          }),
          K(e)
        )
      }
      function J(e, t, r) {
        return (
          (J = X()
            ? Reflect.construct
            : function (e, t, r) {
                var n = [null]
                n.push.apply(n, t)
                var o = new (Function.bind.apply(e, n))()
                return r && Q(o, r.prototype), o
              }),
          J.apply(null, arguments)
        )
      }
      function X() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' == typeof Proxy) return !0
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          )
        } catch (e) {
          return !1
        }
      }
      function Q(e, t) {
        return (
          (Q =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          Q(e, t)
        )
      }
      function z(e) {
        return (
          (z = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          z(e)
        )
      }
      var ee = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Q(e, t)
        })(i, e)
        var t,
          r,
          n,
          o =
            ((t = i),
            (r = X()),
            function () {
              var e,
                n = z(t)
              if (r) {
                var o = z(this).constructor
                e = Reflect.construct(n, arguments, o)
              } else e = n.apply(this, arguments)
              return Z(this, e)
            })
        function i(e) {
          var t
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, i),
            (t = o.call(this, e)),
            Object.setPrototypeOf(W(t), i.prototype),
            (t.name = t.constructor.name),
            t
          )
        }
        return (
          (n = i), Object.defineProperty(n, 'prototype', { writable: !1 }), n
        )
      })(K(Error))
      function te(e, t) {
        ;(e = e.split('-')), (t = t.split('-'))
        for (var r = e[0].split('.'), n = t[0].split('.'), o = 0; o < 3; o++) {
          var i = Number(r[o]),
            a = Number(n[o])
          if (i > a) return 1
          if (a > i) return -1
          if (!isNaN(i) && isNaN(a)) return 1
          if (isNaN(i) && !isNaN(a)) return -1
        }
        return e[1] && t[1]
          ? e[1] > t[1]
            ? 1
            : e[1] < t[1]
            ? -1
            : 0
          : !e[1] && t[1]
          ? 1
          : e[1] && !t[1]
          ? -1
          : 0
      }
      function re(e) {
        return (
          (re =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          re(e)
        )
      }
      function ne(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function oe(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function ie(e, t, r) {
        return (
          t && oe(e.prototype, t),
          r && oe(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        )
      }
      var ae = ' ext. ',
        de = /^\d+$/,
        se = (function () {
          function e(t) {
            ne(this, e),
              (function (e) {
                if (!e)
                  throw new Error(
                    '[libphonenumber-js] `metadata` argument not passed. Check your arguments.'
                  )
                if (!G(e) || !G(e.countries))
                  throw new Error(
                    "[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(
                      G(e)
                        ? 'an object of shape: { ' +
                            Object.keys(e).join(', ') +
                            ' }'
                        : 'a ' + pe(e) + ': ' + e,
                      '.'
                    )
                  )
              })(t),
              (this.metadata = t),
              ve.call(this, t)
          }
          return (
            ie(e, [
              {
                key: 'getCountries',
                value: function () {
                  return Object.keys(this.metadata.countries).filter(
                    function (e) {
                      return '001' !== e
                    }
                  )
                },
              },
              {
                key: 'getCountryMetadata',
                value: function (e) {
                  return this.metadata.countries[e]
                },
              },
              {
                key: 'nonGeographic',
                value: function () {
                  if (!(this.v1 || this.v2 || this.v3))
                    return (
                      this.metadata.nonGeographic ||
                      this.metadata.nonGeographical
                    )
                },
              },
              {
                key: 'hasCountry',
                value: function (e) {
                  return void 0 !== this.getCountryMetadata(e)
                },
              },
              {
                key: 'hasCallingCode',
                value: function (e) {
                  if (this.getCountryCodesForCallingCode(e)) return !0
                  if (this.nonGeographic()) {
                    if (this.nonGeographic()[e]) return !0
                  } else {
                    var t = this.countryCallingCodes()[e]
                    if (t && 1 === t.length && '001' === t[0]) return !0
                  }
                },
              },
              {
                key: 'isNonGeographicCallingCode',
                value: function (e) {
                  return this.nonGeographic()
                    ? !!this.nonGeographic()[e]
                    : !this.getCountryCodesForCallingCode(e)
                },
              },
              {
                key: 'country',
                value: function (e) {
                  return this.selectNumberingPlan(e)
                },
              },
              {
                key: 'selectNumberingPlan',
                value: function (e, t) {
                  if (
                    (e && de.test(e) && ((t = e), (e = null)), e && '001' !== e)
                  ) {
                    if (!this.hasCountry(e))
                      throw new Error('Unknown country: '.concat(e))
                    this.numberingPlan = new ce(
                      this.getCountryMetadata(e),
                      this
                    )
                  } else if (t) {
                    if (!this.hasCallingCode(t))
                      throw new Error('Unknown calling code: '.concat(t))
                    this.numberingPlan = new ce(
                      this.getNumberingPlanMetadata(t),
                      this
                    )
                  } else this.numberingPlan = void 0
                  return this
                },
              },
              {
                key: 'getCountryCodesForCallingCode',
                value: function (e) {
                  var t = this.countryCallingCodes()[e]
                  if (t) {
                    if (1 === t.length && 3 === t[0].length) return
                    return t
                  }
                },
              },
              {
                key: 'getCountryCodeForCallingCode',
                value: function (e) {
                  var t = this.getCountryCodesForCallingCode(e)
                  if (t) return t[0]
                },
              },
              {
                key: 'getNumberingPlanMetadata',
                value: function (e) {
                  var t = this.getCountryCodeForCallingCode(e)
                  if (t) return this.getCountryMetadata(t)
                  if (this.nonGeographic()) {
                    var r = this.nonGeographic()[e]
                    if (r) return r
                  } else {
                    var n = this.countryCallingCodes()[e]
                    if (n && 1 === n.length && '001' === n[0])
                      return this.metadata.countries['001']
                  }
                },
              },
              {
                key: 'countryCallingCode',
                value: function () {
                  return this.numberingPlan.callingCode()
                },
              },
              {
                key: 'IDDPrefix',
                value: function () {
                  return this.numberingPlan.IDDPrefix()
                },
              },
              {
                key: 'defaultIDDPrefix',
                value: function () {
                  return this.numberingPlan.defaultIDDPrefix()
                },
              },
              {
                key: 'nationalNumberPattern',
                value: function () {
                  return this.numberingPlan.nationalNumberPattern()
                },
              },
              {
                key: 'possibleLengths',
                value: function () {
                  return this.numberingPlan.possibleLengths()
                },
              },
              {
                key: 'formats',
                value: function () {
                  return this.numberingPlan.formats()
                },
              },
              {
                key: 'nationalPrefixForParsing',
                value: function () {
                  return this.numberingPlan.nationalPrefixForParsing()
                },
              },
              {
                key: 'nationalPrefixTransformRule',
                value: function () {
                  return this.numberingPlan.nationalPrefixTransformRule()
                },
              },
              {
                key: 'leadingDigits',
                value: function () {
                  return this.numberingPlan.leadingDigits()
                },
              },
              {
                key: 'hasTypes',
                value: function () {
                  return this.numberingPlan.hasTypes()
                },
              },
              {
                key: 'type',
                value: function (e) {
                  return this.numberingPlan.type(e)
                },
              },
              {
                key: 'ext',
                value: function () {
                  return this.numberingPlan.ext()
                },
              },
              {
                key: 'countryCallingCodes',
                value: function () {
                  return this.v1
                    ? this.metadata.country_phone_code_to_countries
                    : this.metadata.country_calling_codes
                },
              },
              {
                key: 'chooseCountryByCountryCallingCode',
                value: function (e) {
                  return this.selectNumberingPlan(e)
                },
              },
              {
                key: 'hasSelectedNumberingPlan',
                value: function () {
                  return void 0 !== this.numberingPlan
                },
              },
            ]),
            e
          )
        })(),
        ce = (function () {
          function e(t, r) {
            ne(this, e),
              (this.globalMetadataObject = r),
              (this.metadata = t),
              ve.call(this, r.metadata)
          }
          return (
            ie(e, [
              {
                key: 'callingCode',
                value: function () {
                  return this.metadata[0]
                },
              },
              {
                key: 'getDefaultCountryMetadataForRegion',
                value: function () {
                  return this.globalMetadataObject.getNumberingPlanMetadata(
                    this.callingCode()
                  )
                },
              },
              {
                key: 'IDDPrefix',
                value: function () {
                  if (!this.v1 && !this.v2) return this.metadata[1]
                },
              },
              {
                key: 'defaultIDDPrefix',
                value: function () {
                  if (!this.v1 && !this.v2) return this.metadata[12]
                },
              },
              {
                key: 'nationalNumberPattern',
                value: function () {
                  return this.v1 || this.v2
                    ? this.metadata[1]
                    : this.metadata[2]
                },
              },
              {
                key: 'possibleLengths',
                value: function () {
                  if (!this.v1) return this.metadata[this.v2 ? 2 : 3]
                },
              },
              {
                key: '_getFormats',
                value: function (e) {
                  return e[this.v1 ? 2 : this.v2 ? 3 : 4]
                },
              },
              {
                key: 'formats',
                value: function () {
                  var e = this
                  return (
                    this._getFormats(this.metadata) ||
                    this._getFormats(
                      this.getDefaultCountryMetadataForRegion()
                    ) ||
                    []
                  ).map(function (t) {
                    return new ue(t, e)
                  })
                },
              },
              {
                key: 'nationalPrefix',
                value: function () {
                  return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                },
              },
              {
                key: '_getNationalPrefixFormattingRule',
                value: function (e) {
                  return e[this.v1 ? 4 : this.v2 ? 5 : 6]
                },
              },
              {
                key: 'nationalPrefixFormattingRule',
                value: function () {
                  return (
                    this._getNationalPrefixFormattingRule(this.metadata) ||
                    this._getNationalPrefixFormattingRule(
                      this.getDefaultCountryMetadataForRegion()
                    )
                  )
                },
              },
              {
                key: '_nationalPrefixForParsing',
                value: function () {
                  return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
                },
              },
              {
                key: 'nationalPrefixForParsing',
                value: function () {
                  return (
                    this._nationalPrefixForParsing() || this.nationalPrefix()
                  )
                },
              },
              {
                key: 'nationalPrefixTransformRule',
                value: function () {
                  return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                },
              },
              {
                key: '_getNationalPrefixIsOptionalWhenFormatting',
                value: function () {
                  return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                },
              },
              {
                key: 'nationalPrefixIsOptionalWhenFormattingInNationalFormat',
                value: function () {
                  return (
                    this._getNationalPrefixIsOptionalWhenFormatting(
                      this.metadata
                    ) ||
                    this._getNationalPrefixIsOptionalWhenFormatting(
                      this.getDefaultCountryMetadataForRegion()
                    )
                  )
                },
              },
              {
                key: 'leadingDigits',
                value: function () {
                  return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                },
              },
              {
                key: 'types',
                value: function () {
                  return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                },
              },
              {
                key: 'hasTypes',
                value: function () {
                  return !(
                    (this.types() && 0 === this.types().length) ||
                    !this.types()
                  )
                },
              },
              {
                key: 'type',
                value: function (e) {
                  if (this.hasTypes() && fe(this.types(), e))
                    return new he(fe(this.types(), e), this)
                },
              },
              {
                key: 'ext',
                value: function () {
                  return this.v1 || this.v2 ? ae : this.metadata[13] || ae
                },
              },
            ]),
            e
          )
        })(),
        ue = (function () {
          function e(t, r) {
            ne(this, e), (this._format = t), (this.metadata = r)
          }
          return (
            ie(e, [
              {
                key: 'pattern',
                value: function () {
                  return this._format[0]
                },
              },
              {
                key: 'format',
                value: function () {
                  return this._format[1]
                },
              },
              {
                key: 'leadingDigitsPatterns',
                value: function () {
                  return this._format[2] || []
                },
              },
              {
                key: 'nationalPrefixFormattingRule',
                value: function () {
                  return (
                    this._format[3] ||
                    this.metadata.nationalPrefixFormattingRule()
                  )
                },
              },
              {
                key: 'nationalPrefixIsOptionalWhenFormattingInNationalFormat',
                value: function () {
                  return (
                    !!this._format[4] ||
                    this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                  )
                },
              },
              {
                key: 'nationalPrefixIsMandatoryWhenFormattingInNationalFormat',
                value: function () {
                  return (
                    this.usesNationalPrefix() &&
                    !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                  )
                },
              },
              {
                key: 'usesNationalPrefix',
                value: function () {
                  return !(
                    !this.nationalPrefixFormattingRule() ||
                    le.test(this.nationalPrefixFormattingRule())
                  )
                },
              },
              {
                key: 'internationalFormat',
                value: function () {
                  return this._format[5] || this.format()
                },
              },
            ]),
            e
          )
        })(),
        le = /^\(?\$1\)?$/,
        he = (function () {
          function e(t, r) {
            ne(this, e), (this.type = t), (this.metadata = r)
          }
          return (
            ie(e, [
              {
                key: 'pattern',
                value: function () {
                  return this.metadata.v1 ? this.type : this.type[0]
                },
              },
              {
                key: 'possibleLengths',
                value: function () {
                  if (!this.metadata.v1)
                    return this.type[1] || this.metadata.possibleLengths()
                },
              },
            ]),
            e
          )
        })()
      function fe(e, t) {
        switch (t) {
          case 'FIXED_LINE':
            return e[0]
          case 'MOBILE':
            return e[1]
          case 'TOLL_FREE':
            return e[2]
          case 'PREMIUM_RATE':
            return e[3]
          case 'PERSONAL_NUMBER':
            return e[4]
          case 'VOICEMAIL':
            return e[5]
          case 'UAN':
            return e[6]
          case 'PAGER':
            return e[7]
          case 'VOIP':
            return e[8]
          case 'SHARED_COST':
            return e[9]
        }
      }
      var pe = function (e) {
        return re(e)
      }
      function $e(e, t) {
        if ((t = new se(t)).hasCountry(e))
          return t.country(e).countryCallingCode()
        throw new Error('Unknown country: '.concat(e))
      }
      function ve(e) {
        var t = e.version
        'number' == typeof t
          ? ((this.v1 = 1 === t),
            (this.v2 = 2 === t),
            (this.v3 = 3 === t),
            (this.v4 = 4 === t))
          : t
          ? -1 === te(t, '1.2.0')
            ? (this.v2 = !0)
            : -1 === te(t, '1.7.35')
            ? (this.v3 = !0)
            : (this.v4 = !0)
          : (this.v1 = !0)
      }
      var me = function (e) {
        return '(['.concat('0-9０-９٠-٩۰-۹', ']{1,').concat(e, '})')
      }
      function ye(e) {
        var t = '#?'
        return (
          ';ext=' +
          me('20') +
          '|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)[:\\.．]?[  \\t,-]*' +
          me('20') +
          '#?|[  \\t,]*(?:[xｘ#＃~～]|int|ｉｎｔ)[:\\.．]?[  \\t,-]*' +
          me('9') +
          '#?|[- ]+' +
          me('6') +
          '#|[  \\t]*(?:,{2}|;)[:\\.．]?[  \\t,-]*' +
          me('15') +
          '#?|[  \\t]*(?:,)+[:\\.．]?[  \\t,-]*' +
          me('9') +
          t
        )
      }
      var ge =
          '[+＋]{0,1}(?:[' +
          Y +
          ']*[0-9０-９٠-٩۰-۹]){3,}[' +
          Y +
          '0-9０-９٠-٩۰-۹]*',
        be = new RegExp(
          '^[+＋]{0,1}(?:[' + Y + ']*[0-9０-９٠-٩۰-۹]){1,2}$',
          'i'
        ),
        we = ge + '(?:' + ye() + ')?',
        xe = new RegExp('^[0-9０-９٠-٩۰-۹]{2}$|^' + we + '$', 'i')
      function _e(e) {
        return e.length >= 2 && xe.test(e)
      }
      var Oe = new RegExp('(?:' + ye() + ')$', 'i'),
        Ee = {
          0: '0',
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          '０': '0',
          '１': '1',
          '２': '2',
          '３': '3',
          '４': '4',
          '５': '5',
          '６': '6',
          '７': '7',
          '８': '8',
          '９': '9',
          '٠': '0',
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '۰': '0',
          '۱': '1',
          '۲': '2',
          '۳': '3',
          '۴': '4',
          '۵': '5',
          '۶': '6',
          '۷': '7',
          '۸': '8',
          '۹': '9',
        }
      function Se(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function Ce(e) {
        for (
          var t,
            r = '',
            n = (function (e, t) {
              var r =
                ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                e['@@iterator']
              if (r) return (r = r.call(e)).next.bind(r)
              if (
                Array.isArray(e) ||
                (r = (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return Se(e, t)
                    var r = Object.prototype.toString.call(e).slice(8, -1)
                    return (
                      'Object' === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      'Map' === r || 'Set' === r
                        ? Array.from(e)
                        : 'Arguments' === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? Se(e, t)
                        : void 0
                    )
                  }
                })(e)) ||
                (t && e && 'number' == typeof e.length)
              ) {
                r && (e = r)
                var n = 0
                return function () {
                  return n >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[n++] }
                }
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })(e.split(''));
          !(t = n()).done;

        )
          r +=
            ((o = t.value),
            (i = r),
            (a = void 0),
            ('+' === o
              ? i
                ? void ('function' == typeof a && a('end'))
                : '+'
              : (function (e) {
                  return Ee[e]
                })(o)) || '')
        var o, i, a
        return r
      }
      function Pe(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function ke(e, t) {
        return Le(e, void 0, t)
      }
      function Le(e, t, r) {
        var n = r.type(t),
          o = (n && n.possibleLengths()) || r.possibleLengths()
        if (!o) return 'IS_POSSIBLE'
        if ('FIXED_LINE_OR_MOBILE' === t) {
          if (!r.type('FIXED_LINE')) return Le(e, 'MOBILE', r)
          var i = r.type('MOBILE')
          i &&
            (o = (function (e, t) {
              for (
                var r,
                  n = e.slice(),
                  o = (function (e, t) {
                    var r =
                      ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                      e['@@iterator']
                    if (r) return (r = r.call(e)).next.bind(r)
                    if (
                      Array.isArray(e) ||
                      (r = (function (e, t) {
                        if (e) {
                          if ('string' == typeof e) return Pe(e, t)
                          var r = Object.prototype.toString.call(e).slice(8, -1)
                          return (
                            'Object' === r &&
                              e.constructor &&
                              (r = e.constructor.name),
                            'Map' === r || 'Set' === r
                              ? Array.from(e)
                              : 'Arguments' === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  r
                                )
                              ? Pe(e, t)
                              : void 0
                          )
                        }
                      })(e)) ||
                      (t && e && 'number' == typeof e.length)
                    ) {
                      r && (e = r)
                      var n = 0
                      return function () {
                        return n >= e.length
                          ? { done: !0 }
                          : { done: !1, value: e[n++] }
                      }
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    )
                  })(t);
                !(r = o()).done;

              ) {
                var i = r.value
                e.indexOf(i) < 0 && n.push(i)
              }
              return n.sort(function (e, t) {
                return e - t
              })
            })(o, i.possibleLengths()))
        } else if (t && !n) return 'INVALID_LENGTH'
        var a = e.length,
          d = o[0]
        return d === a
          ? 'IS_POSSIBLE'
          : d > a
          ? 'TOO_SHORT'
          : o[o.length - 1] < a
          ? 'TOO_LONG'
          : o.indexOf(a, 1) >= 0
          ? 'IS_POSSIBLE'
          : 'INVALID_LENGTH'
      }
      function je(e, t) {
        return 'IS_POSSIBLE' === ke(e, t)
      }
      function Ne(e, t) {
        return (e = e || ''), new RegExp('^(?:' + t + ')$').test(e)
      }
      function Te(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      var Ae = [
        'MOBILE',
        'PREMIUM_RATE',
        'TOLL_FREE',
        'SHARED_COST',
        'VOIP',
        'PERSONAL_NUMBER',
        'PAGER',
        'UAN',
        'VOICEMAIL',
      ]
      function Ie(e, t, r) {
        if (((t = t || {}), e.country || e.countryCallingCode)) {
          ;(r = new se(r)).selectNumberingPlan(e.country, e.countryCallingCode)
          var n = t.v2 ? e.nationalNumber : e.phone
          if (Ne(n, r.nationalNumberPattern())) {
            if (Fe(n, 'FIXED_LINE', r))
              return r.type('MOBILE') && '' === r.type('MOBILE').pattern()
                ? 'FIXED_LINE_OR_MOBILE'
                : r.type('MOBILE')
                ? Fe(n, 'MOBILE', r)
                  ? 'FIXED_LINE_OR_MOBILE'
                  : 'FIXED_LINE'
                : 'FIXED_LINE_OR_MOBILE'
            for (
              var o,
                i = (function (e, t) {
                  var r =
                    ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator']
                  if (r) return (r = r.call(e)).next.bind(r)
                  if (
                    Array.isArray(e) ||
                    (r = (function (e, t) {
                      if (e) {
                        if ('string' == typeof e) return Te(e, t)
                        var r = Object.prototype.toString.call(e).slice(8, -1)
                        return (
                          'Object' === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                          'Map' === r || 'Set' === r
                            ? Array.from(e)
                            : 'Arguments' === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? Te(e, t)
                            : void 0
                        )
                      }
                    })(e)) ||
                    (t && e && 'number' == typeof e.length)
                  ) {
                    r && (e = r)
                    var n = 0
                    return function () {
                      return n >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[n++] }
                    }
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  )
                })(Ae);
              !(o = i()).done;

            ) {
              var a = o.value
              if (Fe(n, a, r)) return a
            }
          }
        }
      }
      function Fe(e, t, r) {
        return (
          !(!(t = r.type(t)) || !t.pattern()) &&
          !(t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0) &&
          Ne(e, t.pattern())
        )
      }
      function De(e, t, r) {
        return (
          (t = t || {}),
          (r = new se(r)).selectNumberingPlan(e.country, e.countryCallingCode),
          r.hasTypes()
            ? void 0 !== Ie(e, t, r.metadata)
            : Ne(t.v2 ? e.nationalNumber : e.phone, r.nationalNumberPattern())
        )
      }
      var Me = /(\$\d)/
      var Re = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/
      function Ge(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function Be(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Be(Object(r), !0).forEach(function (t) {
                Ve(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Be(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Ve(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var qe = {
        formatExtension: function (e, t, r) {
          return ''.concat(e).concat(r.ext()).concat(t)
        },
      }
      function Ye(e, t, r, n, o) {
        var i = (function (e, t) {
          for (
            var r,
              n = (function (e, t) {
                var r =
                  ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator']
                if (r) return (r = r.call(e)).next.bind(r)
                if (
                  Array.isArray(e) ||
                  (r = (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return Ge(e, t)
                      var r = Object.prototype.toString.call(e).slice(8, -1)
                      return (
                        'Object' === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        'Map' === r || 'Set' === r
                          ? Array.from(e)
                          : 'Arguments' === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Ge(e, t)
                          : void 0
                      )
                    }
                  })(e)) ||
                  (t && e && 'number' == typeof e.length)
                ) {
                  r && (e = r)
                  var n = 0
                  return function () {
                    return n >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[n++] }
                  }
                }
                throw new TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })(e);
            !(r = n()).done;

          ) {
            var o = r.value
            if (o.leadingDigitsPatterns().length > 0) {
              var i =
                o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1]
              if (0 !== t.search(i)) continue
            }
            if (Ne(t, o.pattern())) return o
          }
        })(n.formats(), e)
        return i
          ? (function (e, t, r) {
              var n = r.useInternationalFormat,
                o = r.withNationalPrefix,
                i =
                  (r.carrierCode,
                  r.metadata,
                  e.replace(
                    new RegExp(t.pattern()),
                    n
                      ? t.internationalFormat()
                      : o && t.nationalPrefixFormattingRule()
                      ? t.format().replace(Me, t.nationalPrefixFormattingRule())
                      : t.format()
                  ))
              return n
                ? (function (e) {
                    return e
                      .replace(new RegExp('['.concat(Y, ']+'), 'g'), ' ')
                      .trim()
                  })(i)
                : i
            })(e, i, {
              useInternationalFormat: 'INTERNATIONAL' === r,
              withNationalPrefix:
                !i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() ||
                !o ||
                !1 !== o.nationalPrefix,
              carrierCode: t,
              metadata: n,
            })
          : e
      }
      function He(e, t, r, n) {
        return t ? n(e, t, r) : e
      }
      function Ze(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                Ke(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ze(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Ke(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function Je(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      var Xe = (function () {
          function e(t, r, n) {
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, e),
              !t)
            )
              throw new TypeError(
                '`country` or `countryCallingCode` not passed'
              )
            if (!r) throw new TypeError('`nationalNumber` not passed')
            if (!n) throw new TypeError('`metadata` not passed')
            var o = (function (e, t) {
                var r,
                  n,
                  o = new se(t)
                return (
                  /^[A-Z]{2}$/.test(e)
                    ? ((r = e),
                      o.selectNumberingPlan(r),
                      (n = o.countryCallingCode()))
                    : (n = e),
                  { country: r, countryCallingCode: n }
                )
              })(t, n),
              i = o.country,
              a = o.countryCallingCode
            ;(this.country = i),
              (this.countryCallingCode = a),
              (this.nationalNumber = r),
              (this.number =
                '+' + this.countryCallingCode + this.nationalNumber),
              (this.getMetadata = function () {
                return n
              })
          }
          var t, r
          return (
            (t = e),
            (r = [
              {
                key: 'setExt',
                value: function (e) {
                  this.ext = e
                },
              },
              {
                key: 'getPossibleCountries',
                value: function () {
                  return this.country
                    ? [this.country]
                    : ((e = this.countryCallingCode),
                      (t = this.nationalNumber),
                      (r = this.getMetadata()),
                      (n = new se(r).getCountryCodesForCallingCode(e))
                        ? n.filter(function (e) {
                            return (function (e, t, r) {
                              var n = new se(r)
                              return (
                                n.selectNumberingPlan(t),
                                n.numberingPlan
                                  .possibleLengths()
                                  .indexOf(e.length) >= 0
                              )
                            })(t, e, r)
                          })
                        : [])
                },
              },
              {
                key: 'isPossible',
                value: function () {
                  return (function (e, t, r) {
                    if ((void 0 === t && (t = {}), (r = new se(r)), t.v2)) {
                      if (!e.countryCallingCode)
                        throw new Error('Invalid phone number object passed')
                      r.selectNumberingPlan(e.countryCallingCode)
                    } else {
                      if (!e.phone) return !1
                      if (e.country) {
                        if (!r.hasCountry(e.country))
                          throw new Error('Unknown country: '.concat(e.country))
                        r.country(e.country)
                      } else {
                        if (!e.countryCallingCode)
                          throw new Error('Invalid phone number object passed')
                        r.selectNumberingPlan(e.countryCallingCode)
                      }
                    }
                    if (r.possibleLengths())
                      return je(e.phone || e.nationalNumber, r)
                    if (
                      e.countryCallingCode &&
                      r.isNonGeographicCallingCode(e.countryCallingCode)
                    )
                      return !0
                    throw new Error(
                      'Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.'
                    )
                  })(this, { v2: !0 }, this.getMetadata())
                },
              },
              {
                key: 'isValid',
                value: function () {
                  return De(this, { v2: !0 }, this.getMetadata())
                },
              },
              {
                key: 'isNonGeographic',
                value: function () {
                  return new se(this.getMetadata()).isNonGeographicCallingCode(
                    this.countryCallingCode
                  )
                },
              },
              {
                key: 'isEqual',
                value: function (e) {
                  return this.number === e.number && this.ext === e.ext
                },
              },
              {
                key: 'getType',
                value: function () {
                  return Ie(this, { v2: !0 }, this.getMetadata())
                },
              },
              {
                key: 'format',
                value: function (e, t) {
                  return (function (e, t, r, n) {
                    if (
                      ((r = r ? Ue(Ue({}, qe), r) : qe),
                      (n = new se(n)),
                      e.country && '001' !== e.country)
                    ) {
                      if (!n.hasCountry(e.country))
                        throw new Error('Unknown country: '.concat(e.country))
                      n.country(e.country)
                    } else {
                      if (!e.countryCallingCode) return e.phone || ''
                      n.selectNumberingPlan(e.countryCallingCode)
                    }
                    var o,
                      i = n.countryCallingCode(),
                      a = r.v2 ? e.nationalNumber : e.phone
                    switch (t) {
                      case 'NATIONAL':
                        return a
                          ? He(
                              (o = Ye(a, e.carrierCode, 'NATIONAL', n, r)),
                              e.ext,
                              n,
                              r.formatExtension
                            )
                          : ''
                      case 'INTERNATIONAL':
                        return a
                          ? ((o = Ye(a, null, 'INTERNATIONAL', n, r)),
                            He(
                              (o = '+'.concat(i, ' ').concat(o)),
                              e.ext,
                              n,
                              r.formatExtension
                            ))
                          : '+'.concat(i)
                      case 'E.164':
                        return '+'.concat(i).concat(a)
                      case 'RFC3966':
                        return (function (e) {
                          var t = e.number,
                            r = e.ext
                          if (!t) return ''
                          if ('+' !== t[0])
                            throw new Error(
                              '"formatRFC3966()" expects "number" to be in E.164 format.'
                            )
                          return 'tel:'.concat(t).concat(r ? ';ext=' + r : '')
                        })({ number: '+'.concat(i).concat(a), ext: e.ext })
                      case 'IDD':
                        if (!r.fromCountry) return
                        var d = (function (e, t, r, n, o) {
                          if ($e(n, o.metadata) === r) {
                            var i = Ye(e, t, 'NATIONAL', o)
                            return '1' === r ? r + ' ' + i : i
                          }
                          var a = (function (e, t, r) {
                            var n = new se(r)
                            return (
                              n.selectNumberingPlan(e, void 0),
                              n.defaultIDDPrefix()
                                ? n.defaultIDDPrefix()
                                : Re.test(n.IDDPrefix())
                                ? n.IDDPrefix()
                                : void 0
                            )
                          })(n, 0, o.metadata)
                          if (a)
                            return ''
                              .concat(a, ' ')
                              .concat(r, ' ')
                              .concat(Ye(e, null, 'INTERNATIONAL', o))
                        })(a, e.carrierCode, i, r.fromCountry, n)
                        return He(d, e.ext, n, r.formatExtension)
                      default:
                        throw new Error(
                          'Unknown "format" argument passed to "formatNumber()": "'.concat(
                            t,
                            '"'
                          )
                        )
                    }
                  })(
                    this,
                    e,
                    t ? We(We({}, t), {}, { v2: !0 }) : { v2: !0 },
                    this.getMetadata()
                  )
                },
              },
              {
                key: 'formatNational',
                value: function (e) {
                  return this.format('NATIONAL', e)
                },
              },
              {
                key: 'formatInternational',
                value: function (e) {
                  return this.format('INTERNATIONAL', e)
                },
              },
              {
                key: 'getURI',
                value: function (e) {
                  return this.format('RFC3966', e)
                },
              },
            ]) && Je(t.prototype, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })(),
        Qe = new RegExp('([0-9０-９٠-٩۰-۹])')
      function ze(e, t) {
        var r = (function (e, t) {
            if (e && t.numberingPlan.nationalPrefixForParsing()) {
              var r = new RegExp(
                  '^(?:' + t.numberingPlan.nationalPrefixForParsing() + ')'
                ),
                n = r.exec(e)
              if (n) {
                var o,
                  i,
                  a,
                  d = n.length - 1,
                  s = d > 0 && n[d]
                if (t.nationalPrefixTransformRule() && s)
                  (o = e.replace(r, t.nationalPrefixTransformRule())),
                    d > 1 && (i = n[1])
                else {
                  var c = n[0]
                  ;(o = e.slice(c.length)), s && (i = n[1])
                }
                if (s) {
                  var u = e.indexOf(n[1])
                  e.slice(0, u) === t.numberingPlan.nationalPrefix() &&
                    (a = t.numberingPlan.nationalPrefix())
                } else a = n[0]
                return { nationalNumber: o, nationalPrefix: a, carrierCode: i }
              }
            }
            return { nationalNumber: e }
          })(e, t),
          n = r.carrierCode,
          o = r.nationalNumber
        if (o !== e) {
          if (
            !(function (e, t, r) {
              return !(
                Ne(e, r.nationalNumberPattern()) &&
                !Ne(t, r.nationalNumberPattern())
              )
            })(e, o, t)
          )
            return { nationalNumber: e }
          if (
            t.possibleLengths() &&
            !(function (e, t) {
              switch (ke(e, t)) {
                case 'TOO_SHORT':
                case 'INVALID_LENGTH':
                  return !1
                default:
                  return !0
              }
            })(o, t)
          )
            return { nationalNumber: e }
        }
        return { nationalNumber: o, carrierCode: n }
      }
      function et(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function tt(e, t) {
        var r = t.nationalNumber,
          n = t.defaultCountry,
          o = t.metadata,
          i = o.getCountryCodesForCallingCode(e)
        if (i)
          return 1 === i.length
            ? i[0]
            : (function (e, t) {
                var r = t.countries,
                  n = t.defaultCountry,
                  o = t.metadata
                o = new se(o)
                for (
                  var i,
                    a = [],
                    d = (function (e, t) {
                      var r =
                        ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                        e['@@iterator']
                      if (r) return (r = r.call(e)).next.bind(r)
                      if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                          if (e) {
                            if ('string' == typeof e) return et(e, t)
                            var r = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)
                            return (
                              'Object' === r &&
                                e.constructor &&
                                (r = e.constructor.name),
                              'Map' === r || 'Set' === r
                                ? Array.from(e)
                                : 'Arguments' === r ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                  )
                                ? et(e, t)
                                : void 0
                            )
                          }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                      ) {
                        r && (e = r)
                        var n = 0
                        return function () {
                          return n >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[n++] }
                        }
                      }
                      throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })(r);
                  !(i = d()).done;

                ) {
                  var s = i.value
                  if ((o.country(s), o.leadingDigits())) {
                    if (e && 0 === e.search(o.leadingDigits())) return s
                  } else if (Ie({ phone: e, country: s }, void 0, o.metadata)) {
                    if (!n) return s
                    if (s === n) return s
                    a.push(s)
                  }
                }
                if (a.length > 0) return a[0]
              })(r, { countries: i, defaultCountry: n, metadata: o.metadata })
      }
      var rt = new RegExp(
          '^\\+([0-9０-９٠-٩۰-۹]|[\\-\\.\\(\\)]?)*[0-9０-９٠-٩۰-۹]([0-9０-９٠-٩۰-۹]|[\\-\\.\\(\\)]?)*$',
          'g'
        ),
        nt = new RegExp(
          '^([0-9０-９٠-٩۰-۹]+((\\-)*[0-9０-９٠-٩۰-۹])*\\.)*[a-zA-Z]+((\\-)*[0-9０-９٠-٩۰-۹])*\\.?$',
          'g'
        ),
        ot = 'tel:',
        it = ';phone-context='
      var at = new RegExp('[+＋0-9０-９٠-٩۰-۹]'),
        dt = new RegExp('[^0-9０-９٠-٩۰-۹#]+$')
      function st(e, t, r) {
        if (
          ((t = t || {}),
          (r = new se(r)),
          t.defaultCountry && !r.hasCountry(t.defaultCountry))
        ) {
          if (t.v2) throw new ee('INVALID_COUNTRY')
          throw new Error('Unknown country: '.concat(t.defaultCountry))
        }
        var n = (function (e, t, r) {
            var n = (function (e, t) {
              var r,
                n = t.extractFormattedPhoneNumber,
                o = (function (e) {
                  var t = e.indexOf(it)
                  if (t < 0) return null
                  var r = t + it.length
                  if (r >= e.length) return ''
                  var n = e.indexOf(';', r)
                  return n >= 0 ? e.substring(r, n) : e.substring(r)
                })(e)
              if (
                !(function (e) {
                  return (
                    null === e || (0 !== e.length && (rt.test(e) || nt.test(e)))
                  )
                })(o)
              )
                throw new ee('NOT_A_NUMBER')
              if (null === o) r = n(e) || ''
              else {
                ;(r = ''), '+' === o.charAt(0) && (r += o)
                var i,
                  a = e.indexOf(ot)
                i = a >= 0 ? a + ot.length : 0
                var d = e.indexOf(it)
                r += e.substring(i, d)
              }
              var s = r.indexOf(';isub=')
              if ((s > 0 && (r = r.substring(0, s)), '' !== r)) return r
            })(e, {
              extractFormattedPhoneNumber: function (e) {
                return (function (e, t, r) {
                  if (e)
                    if (e.length > 250) {
                      if (r) throw new ee('TOO_LONG')
                    } else {
                      if (!1 === t) return e
                      var n = e.search(at)
                      if (!(n < 0)) return e.slice(n).replace(dt, '')
                    }
                })(e, r, t)
              },
            })
            if (!n) return {}
            if (!_e(n))
              return (function (e) {
                return be.test(e)
              })(n)
                ? { error: 'TOO_SHORT' }
                : {}
            var o = (function (e) {
              var t = e.search(Oe)
              if (t < 0) return {}
              for (
                var r = e.slice(0, t), n = e.match(Oe), o = 1;
                o < n.length;

              ) {
                if (n[o]) return { number: r, ext: n[o] }
                o++
              }
            })(n)
            return o.ext ? o : { number: n }
          })(e, t.v2, t.extract),
          o = n.number,
          i = n.ext,
          a = n.error
        if (!o) {
          if (t.v2) {
            if ('TOO_SHORT' === a) throw new ee('TOO_SHORT')
            throw new ee('NOT_A_NUMBER')
          }
          return {}
        }
        var d = (function (e, t, r, n) {
            var o,
              i = (function (e, t, r, n) {
                if (!e) return {}
                var o
                if ('+' !== e[0]) {
                  var i = (function (e, t, r, n) {
                    if (t) {
                      var o = new se(n)
                      o.selectNumberingPlan(t, r)
                      var i = new RegExp(o.IDDPrefix())
                      if (0 === e.search(i)) {
                        var a = (e = e.slice(e.match(i)[0].length)).match(Qe)
                        if (
                          !(
                            a &&
                            null != a[1] &&
                            a[1].length > 0 &&
                            '0' === a[1]
                          )
                        )
                          return e
                      }
                    }
                  })(e, t, r, n)
                  if (!i || i === e) {
                    if (t || r) {
                      var a = (function (e, t, r, n) {
                          var o = t ? $e(t, n) : r
                          if (0 === e.indexOf(o)) {
                            ;(n = new se(n)).selectNumberingPlan(t, r)
                            var i = e.slice(o.length),
                              a = ze(i, n).nationalNumber,
                              d = ze(e, n).nationalNumber
                            if (
                              (!Ne(d, n.nationalNumberPattern()) &&
                                Ne(a, n.nationalNumberPattern())) ||
                              'TOO_LONG' === ke(d, n)
                            )
                              return { countryCallingCode: o, number: i }
                          }
                          return { number: e }
                        })(e, t, r, n),
                        d = a.countryCallingCode,
                        s = a.number
                      if (d)
                        return {
                          countryCallingCodeSource:
                            'FROM_NUMBER_WITHOUT_PLUS_SIGN',
                          countryCallingCode: d,
                          number: s,
                        }
                    }
                    return { number: e }
                  }
                  ;(o = !0), (e = '+' + i)
                }
                if ('0' === e[1]) return {}
                n = new se(n)
                for (var c = 2; c - 1 <= 3 && c <= e.length; ) {
                  var u = e.slice(1, c)
                  if (n.hasCallingCode(u))
                    return (
                      n.selectNumberingPlan(u),
                      {
                        countryCallingCodeSource: o
                          ? 'FROM_NUMBER_WITH_IDD'
                          : 'FROM_NUMBER_WITH_PLUS_SIGN',
                        countryCallingCode: u,
                        number: e.slice(c),
                      }
                    )
                  c++
                }
                return {}
              })(Ce(e), t, r, n.metadata),
              a = i.countryCallingCodeSource,
              d = i.countryCallingCode,
              s = i.number
            if (d) n.selectNumberingPlan(d)
            else {
              if (!s || (!t && !r)) return {}
              n.selectNumberingPlan(t, r),
                t && (o = t),
                (d = r || $e(t, n.metadata))
            }
            if (!s)
              return { countryCallingCodeSource: a, countryCallingCode: d }
            var c = ze(Ce(s), n),
              u = c.nationalNumber,
              l = c.carrierCode,
              h = tt(d, { nationalNumber: u, defaultCountry: t, metadata: n })
            return (
              h && ((o = h), '001' === h || n.country(o)),
              {
                country: o,
                countryCallingCode: d,
                countryCallingCodeSource: a,
                nationalNumber: u,
                carrierCode: l,
              }
            )
          })(o, t.defaultCountry, t.defaultCallingCode, r),
          s = d.country,
          c = d.nationalNumber,
          u = d.countryCallingCode,
          l = d.countryCallingCodeSource,
          h = d.carrierCode
        if (!r.hasSelectedNumberingPlan()) {
          if (t.v2) throw new ee('INVALID_COUNTRY')
          return {}
        }
        if (!c || c.length < 2) {
          if (t.v2) throw new ee('TOO_SHORT')
          return {}
        }
        if (c.length > 17) {
          if (t.v2) throw new ee('TOO_LONG')
          return {}
        }
        if (t.v2) {
          var f = new Xe(u, c, r.metadata)
          return (
            s && (f.country = s),
            h && (f.carrierCode = h),
            i && (f.ext = i),
            (f.__countryCallingCodeSource = l),
            f
          )
        }
        var p =
          !!(t.extended ? r.hasSelectedNumberingPlan() : s) &&
          Ne(c, r.nationalNumberPattern())
        return t.extended
          ? {
              country: s,
              countryCallingCode: u,
              carrierCode: h,
              valid: p,
              possible:
                !!p ||
                !(!0 !== t.extended || !r.possibleLengths() || !je(c, r)),
              phone: c,
              ext: i,
            }
          : p
          ? (function (e, t, r) {
              var n = { country: e, phone: t }
              return r && (n.ext = r), n
            })(s, c, i)
          : {}
      }
      function ct(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ct(Object(r), !0).forEach(function (t) {
                lt(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ct(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function lt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function ht(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ht(Object(r), !0).forEach(function (t) {
                pt(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ht(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function pt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function $t(e, t, r) {
        t &&
          t.defaultCountry &&
          !(function (e, t) {
            return t.countries.hasOwnProperty(e)
          })(t.defaultCountry, r) &&
          (t = ft(ft({}, t), {}, { defaultCountry: void 0 }))
        try {
          return (function (e, t, r) {
            return st(e, ut(ut({}, t), {}, { v2: !0 }), r)
          })(e, t, r)
        } catch (e) {
          if (!(e instanceof ee)) throw e
        }
      }
      function vt() {
        var e = q(arguments),
          t = e.text,
          r = e.options,
          n = e.metadata
        return $t(t, r, n)
      }
      function mt() {
        return M(vt, arguments)
      }
      const yt = function () {
        return {
          formatPhoneNumber: function (e, t) {
            try {
              var r = mt(e, t)
              return r
                ? r.formatInternational()
                : (console.error('Invalid phone number:', e), e)
            } catch (t) {
              return console.error('Error formatting phone number:', t), e
            }
          },
          isValidNumber: function (e, t) {
            try {
              var r = mt(e, t)
              return !!r && r.isValid()
            } catch (e) {
              return console.error('Error validating phone number:', e), !1
            }
          },
        }
      }
      var gt = function (e) {
          var t = yt(),
            r = t.formatPhoneNumber,
            n = t.isValidNumber,
            o = document.querySelector(e)
          if (o) {
            o.setAttribute('type', 'tel'), o.setAttribute('maxlength', 12)
            var i = $(e)
            i.keyup(function (e) {
              var t = e.currentTarget.value.replace(/[^0-9+*#]+/g, '').trim(),
                o = t,
                a = (e.keyCode, r(t, 'ZA'))
              n(a) &&
                (i.parent('.text').removeClass('error'),
                i.parent('.text').find('span.error').hide()),
                i.val(o.trim())
            })
          }
        },
        bt = function (e) {
          return [e.slice(0, 3), e.slice(3, 6), e.slice(6)].join(' ')
        },
        wt = function (e) {
          var t
          console.error('ERROR', e),
            (t = e),
            (function () {
              const e = N()
              return (
                (A(e) && !I(e).isOlderThan(4)) || F(e, new j()),
                (0, g.KV)()
                  ? (function (e) {
                      try {
                        const t = N().__SENTRY__,
                          r =
                            t &&
                            t.extensions &&
                            t.extensions.domain &&
                            t.extensions.domain.active
                        if (!r) return I(e)
                        if (!A(r) || I(r).isOlderThan(4)) {
                          const t = I(e).getStackTop()
                          F(r, new j(t.client, k.clone(t.scope)))
                        }
                        return I(r)
                      } catch (t) {
                        return I(e)
                      }
                    })(e)
                  : I(e)
              )
            })().captureException(t, { captureContext: undefined })
        },
        xt = function (e) {
          var t,
            r = e.cookie,
            n = e.cache,
            o = e.json,
            i = new Headers()
          return (
            r &&
              i.append(
                'Cookie',
                null === (t = document) || void 0 === t ? void 0 : t.cookie
              ),
            n && i.append('Cache-Control', 'no-cache'),
            o && i.append('Content-type', 'application/json'),
            i
          )
        },
        _t = function (e) {
          var t,
            r,
            n = ['938942995'],
            o = ['24833302'],
            i = [],
            a = !1,
            d = !1,
            s = !1,
            c = 0
          return (
            e.forEach(function (e) {
              var t = e.productCategoryIds.split('/')
              i.push(t),
                t.forEach(function (e) {
                  e && (n.includes(e) ? (a = !0) : o.includes(e) && (d = !0))
                }),
                'FURNITURE' === e.modalType && ((s = !0), (c += 1))
            }),
            (r = c === e.length),
            (t = e.length > 1 && s && !r),
            {
              hasFurniture: s,
              hasSimCards: d,
              hasTVs: a,
              hasFurnitureMixed: t,
              hasFurnitureOnly: r,
              categories: i,
            }
          )
        },
        Ot = function () {
          $('.shimmer').removeClass('shimmer')
        },
        Et = function () {
          var e,
            t = Array.from($('form.form-step.box-edit > :invalid, .error'))
          t.sort(function (e, t) {
            return e.getBoundingClientRect().top - t.getBoundingClientRect().top
          }),
            null == t ||
              null === (e = t[0]) ||
              void 0 === e ||
              e.scrollIntoView({ block: 'center', behavior: 'smooth' })
        }
      const St = function (e) {
        var t = e.name,
          r = e.options
        return '\n  \n  <div class="bash--radio-options">\n  '.concat(
          (void 0 === r ? [] : r)
            .map(function (e) {
              var r = e.value,
                n = e.label,
                o = e.checked,
                i = void 0 !== o && o,
                a = e.disabled,
                d = void 0 !== a && a
              return '\n      <label class="bash--radio-option" id="radio-label-'
                .concat(t, '-')
                .concat(r, '">\n        <input type="radio" \n          ')
                .concat(i ? "checked='checked'" : '', ' \n          ')
                .concat(d ? "disabled='disabled'" : '', ' \n          value="')
                .concat(null != r ? r : '', '" \n          name="')
                .concat(t, '" \n          id="radio-')
                .concat(t, '-')
                .concat(
                  r,
                  '"\n        />\n          <span class="radio-icon"></span> \n          '
                )
                .concat(
                  n ? '<span class="radio-label">'.concat(n, '</span>') : '',
                  '\n      </label>\n    '
                )
            })
            .join(''),
          '\n   \n  </div>\n  '
        )
      }
      var Ct = function (e, t) {
        return (
          JSON.stringify({
            street: (null == e ? void 0 : e.street) || '',
            neighborhood: (null == e ? void 0 : e.neighborhood) || '',
            city: (null == e ? void 0 : e.city) || '',
            postalCode: (null == e ? void 0 : e.postalCode) || '',
          }) ===
          JSON.stringify({
            street: (null == t ? void 0 : t.street) || '',
            neighborhood: (null == t ? void 0 : t.neighborhood) || '',
            city: (null == t ? void 0 : t.city) || '',
            postalCode: (null == t ? void 0 : t.postalCode) || '',
          })
        )
      }
      const Pt = function (e) {
        var t,
          r = yt().formatPhoneNumber
        if (!e) return ''
        var n = e.businessName,
          o = e.number,
          i = e.street,
          a = e.neighborhood,
          d = e.postalCode,
          s = e.city,
          c = e.receiverName,
          u = e.addressName,
          l = e.complement,
          h = e.receiverPhone,
          f = e.captureMethod,
          p = [
            ''
              .concat(n ? ''.concat(n, ', ') : '', ' ')
              .concat(o ? ''.concat(r(o.trim(), 'ZA'), ' ') : '')
              .concat(i),
            null != a ? a : s,
            d,
          ]
            .join(', ')
            .trim(),
          $ = [c, r(h || l, 'ZA')].join(' - '),
          v =
            null === (t = window) ||
            void 0 === t ||
            null === (t = t.vtexjs) ||
            void 0 === t ||
            null === (t = t.checkout) ||
            void 0 === t ||
            null === (t = t.orderForm) ||
            void 0 === t ||
            null === (t = t.shippingData) ||
            void 0 === t
              ? void 0
              : t.address,
          m = encodeURIComponent(JSON.stringify(e))
        return '\n    <label id="address-'
          .concat(u, '" class="bash--address-listing" data-address="')
          .concat(m, '">\n      <div class="address-radio">\n      ')
          .concat(
            St({
              name: 'selected-address',
              options: [{ checked: Ct(e, v), value: u }],
            }),
            '\n      </div>\n      <div class="address-text">\n        <div>'
          )
          .concat(p, '</div>    \n        <div>')
          .concat(
            $,
            '</div>  \n      </div>\n      <div class="address-edit">\n        <a href="#" data-view="edit-address" data-content="'
          )
          .concat(u, '" data-capture-method="')
          .concat(
            f,
            '">\n          Edit\n        </a>\n      </div>\n    </label>\n'
          )
      }
      function kt(e) {
        return (
          (kt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          kt(e)
        )
      }
      function Lt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function (e, t) {
                if ('object' !== kt(e) || null === e) return e
                var r = e[Symbol.toPrimitive]
                if (void 0 !== r) {
                  var n = r.call(e, t)
                  if ('object' !== kt(n)) return n
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  )
                }
                return String(e)
              })(n.key, 'string')),
              'symbol' === kt(o) ? o : String(o)),
              n
            )
        }
        var o
      }
      const jt = (function () {
        function e() {
          var t = this
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.indexedDB =
              window.indexedDB ||
              window.webkitIndexedDB ||
              window.mozIndexedDB ||
              window.msIndexedDB ||
              window.shimIndexedDB)
          var r = this.indexedDB.open('checkoutDB', 1.2)
          ;(r.onerror = function (e) {
            throw (
              (console.error('CheckoutDB Error', { event: e }),
              new Error('Could not load checkoutDB'))
            )
          }),
            (r.onupgradeneeded = function (e) {
              var t = e.target.result.createObjectStore('addresses', {
                keyPath: 'addressName',
              })
              t.createIndex('address_street', ['street'], { unique: !1 }),
                t.createIndex('address_addressName', ['addressName'], {
                  unique: !0,
                }),
                t.createIndex(
                  'address_street_suburb_city_postal',
                  ['street', 'neighborhood', 'city', 'postalCode'],
                  { unique: !0 }
                )
            }),
            (r.onsuccess = function (e) {
              t.db = e.target.result
            })
        }
        var t, r
        return (
          (t = e),
          (r = [
            {
              key: 'store',
              value: function () {
                return this.db
                  .transaction('addresses', 'readwrite')
                  .objectStore('addresses')
              },
            },
            {
              key: 'loadAddresses',
              value: function (e) {
                var t = this,
                  r = e.map(function (e) {
                    return t.addOrUpdateAddress(e)
                  })
                return Promise.all(r)
              },
            },
            {
              key: 'addOrUpdateAddress',
              value: function (e) {
                var t = this
                return new Promise(function (r, n) {
                  var o = t.store().put(e)
                  ;(o.onsuccess = function () {
                    return r({ success: !0, addressId: o.result })
                  }),
                    (o.onerror = function (e) {
                      return n(
                        new Error({ success: !1, error: e.target.error })
                      )
                    })
                })
              },
            },
            {
              key: 'getAddresses',
              value: function () {
                var e = this
                return new Promise(function (t, r) {
                  var n = e.store().getAll()
                  ;(n.onsuccess = function () {
                    return t(n.result)
                  }),
                    (n.onerror = function (e) {
                      console.error(
                        'Something went wrong with getAddresses.',
                        e
                      ),
                        r([])
                    })
                })
              },
            },
            {
              key: 'getAddress',
              value: function (e) {
                var t = this
                return new Promise(function (r, n) {
                  var o = t.store().get(e)
                  ;(o.onsuccess = function () {
                    return r(o.result)
                  }),
                    (o.onerror = function (e) {
                      console.error('Something went wrong with getAddress.', e),
                        n([])
                    })
                })
              },
            },
            {
              key: 'deleteAddress',
              value: function (e) {
                var t = this
                return new Promise(function (r, n) {
                  var o = t.store().delete(e)
                  ;(o.onsuccess = function () {
                    return r(!0)
                  }),
                    (o.onerror = function (e) {
                      console.error(
                        'Something went wrong with deleteAddress.',
                        e
                      ),
                        n(!1)
                    })
                })
              },
            },
            {
              key: 'clearData',
              value: function () {
                var e = this
                return new Promise(function (t, r) {
                  var n = e.store().clear()
                  ;(n.onsuccess = function () {
                    return t(n.result)
                  }),
                    (n.onerror = function (e) {
                      console.error('Something went wrong with clearData.', e),
                        r([])
                    })
                })
              },
            },
          ]) && Lt(t.prototype, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e
        )
      })()
      function Nt(e) {
        return (
          (Nt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Nt(e)
        )
      }
      function Tt(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function At() {
        At = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == Nt(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Nt(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function It(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? It(Object(r), !0).forEach(function (t) {
                Dt(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : It(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Dt(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Nt(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== Nt(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === Nt(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function Mt(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      function Rt(e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (n, o) {
            var i = e.apply(t, r)
            function a(e) {
              Mt(i, n, o, a, d, 'next', e)
            }
            function d(e) {
              Mt(i, n, o, a, d, 'throw', e)
            }
            a(void 0)
          })
        }
      }
      var Gt = yt().formatPhoneNumber,
        Bt = new jt(),
        Ut = function (e) {
          if (Array.isArray(e)) return e
          if ('string' == typeof e) {
            var t = null
            try {
              t = JSON.parse(e)
            } catch (e) {
              t = ['', '']
            }
            return t
          }
          return null
        },
        Vt = (function () {
          var e = Rt(
            At().mark(function e() {
              var t, r, n, o, i, a, d, s
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Bt.getAddresses()
                    case 2:
                      if (!((r = e.sent).length > 0)) {
                        e.next = 5
                        break
                      }
                      return e.abrupt('return', { data: r })
                    case 5:
                      return (
                        (n =
                          null === (t = window) ||
                          void 0 === t ||
                          null === (t = t.vtexjs) ||
                          void 0 === t ||
                          null === (t = t.checkout) ||
                          void 0 === t ||
                          null === (t = t.orderForm) ||
                          void 0 === t
                            ? void 0
                            : t.clientProfileData),
                        (o = n.email),
                        (i = [
                          'id',
                          'addressType',
                          'addressQuery',
                          'addressName',
                          'reference',
                          'number',
                          'geolocation',
                          'receiverName',
                          'receiverPhone',
                          'complement',
                          'street',
                          'businessName',
                          'companyBuilding',
                          'neighborhood',
                          'city',
                          'postalCode',
                          'state',
                          'country',
                          'tvID',
                          'geoCoordinate',
                          'captureMethod',
                        ].join(',')),
                        (a = xt({ cookie: !0, cache: !0, json: !1 })),
                        (d = { headers: a, credentials: 'include' }),
                        (s = Date.now()),
                        e.abrupt(
                          'return',
                          fetch(
                            ''
                              .concat(u, 'masterdata/addresses?t=')
                              .concat(s, '&_fields=')
                              .concat(i, '&_where=')
                              .concat(
                                encodeURIComponent('userIdQuery='.concat(o))
                              ),
                            d
                          )
                            .then(function (e) {
                              return e.json()
                            })
                            .then(
                              (function () {
                                var e = Rt(
                                  At().mark(function e(t) {
                                    var r, n
                                    return At().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (null != t && t.data) {
                                              e.next = 2
                                              break
                                            }
                                            throw new Error(
                                              'No data returned from API'
                                            )
                                          case 2:
                                            return (
                                              (r = t.data.map(function (e) {
                                                return Ft(
                                                  Ft({}, e),
                                                  {},
                                                  {
                                                    geoCoordinate: Ut(
                                                      e.geoCoordinate
                                                    ),
                                                    geoCoordinates: Ut(
                                                      e.geoCoordinate
                                                    ),
                                                  }
                                                )
                                              })),
                                              (e.next = 5),
                                              Bt.loadAddresses(r)
                                            )
                                          case 5:
                                            return (
                                              (n = e.sent),
                                              e.abrupt('return', n)
                                            )
                                          case 7:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  })
                                )
                                return function (t) {
                                  return e.apply(this, arguments)
                                }
                              })()
                            )
                            .then(
                              Rt(
                                At().mark(function e() {
                                  return At().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (e.next = 2), Bt.getAddresses()
                                        case 2:
                                          return (
                                            (e.t0 = e.sent),
                                            e.abrupt('return', { data: e.t0 })
                                          )
                                        case 4:
                                        case 'end':
                                          return e.stop()
                                      }
                                  }, e)
                                })
                              )
                            )
                            .catch(function (e) {
                              return wt(
                                'GET_ADDRESSES_ERROR: '.concat(
                                  null == e ? void 0 : e.message
                                )
                              )
                            })
                        )
                      )
                    case 11:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        qt = (function () {
          var e = Rt(
            At().mark(function e(t, r) {
              var n, o, i, a, d
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = {}),
                        (o = xt({ cookie: !0, cache: !0, json: !1 })),
                        (i = { headers: o, credentials: 'include' }),
                        (e.next = 5),
                        fetch(
                          ''
                            .concat(u, 'masterdata/addresses/')
                            .concat(r, '&_where=addressName=')
                            .concat(t, '&timestamp=')
                            .concat(Date.now()),
                          i
                        )
                          .then(function (e) {
                            return e.json()
                          })
                          .catch(function (e) {
                            return wt(
                              'GET_ADDRESS_ERROR: '.concat(
                                null == e ? void 0 : e.message
                              )
                            )
                          })
                      )
                    case 5:
                      return (
                        (a = e.sent) &&
                          !a.error &&
                          a.data &&
                          a.data.length > 0 &&
                          ((s = a.data),
                          (c = 1),
                          (d =
                            (function (e) {
                              if (Array.isArray(e)) return e
                            })(s) ||
                            (function (e, t) {
                              var r =
                                null == e
                                  ? null
                                  : ('undefined' != typeof Symbol &&
                                      e[Symbol.iterator]) ||
                                    e['@@iterator']
                              if (null != r) {
                                var n,
                                  o,
                                  i,
                                  a,
                                  d = [],
                                  s = !0,
                                  c = !1
                                try {
                                  if (((i = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return
                                    s = !1
                                  } else
                                    for (
                                      ;
                                      !(s = (n = i.call(r)).done) &&
                                      (d.push(n.value), d.length !== t);
                                      s = !0
                                    );
                                } catch (e) {
                                  ;(c = !0), (o = e)
                                } finally {
                                  try {
                                    if (
                                      !s &&
                                      null != r.return &&
                                      ((a = r.return()), Object(a) !== a)
                                    )
                                      return
                                  } finally {
                                    if (c) throw o
                                  }
                                }
                                return d
                              }
                            })(s, c) ||
                            (function (e, t) {
                              if (e) {
                                if ('string' == typeof e) return Tt(e, t)
                                var r = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1)
                                return (
                                  'Object' === r &&
                                    e.constructor &&
                                    (r = e.constructor.name),
                                  'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        r
                                      )
                                    ? Tt(e, t)
                                    : void 0
                                )
                              }
                            })(s, c) ||
                            (function () {
                              throw new TypeError(
                                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                              )
                            })()),
                          (n = d[0])),
                        e.abrupt('return', n)
                      )
                    case 8:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        Yt = (function () {
          var e = Rt(
            At().mark(function e(t) {
              var r, n, o, i, a, d
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n =
                          window.vtexjs.checkout.orderForm.clientProfileData
                            .email),
                        t)
                      ) {
                        e.next = 3
                        break
                      }
                      return e.abrupt(
                        'return',
                        Promise.reject(new Error('No address provided.'))
                      )
                    case 3:
                      if (!t.addressName) {
                        e.next = 9
                        break
                      }
                      return (e.next = 6), qt(t.addressName, '?_fields=id')
                    case 6:
                      ;(e.t0 = e.sent), (e.next = 10)
                      break
                    case 9:
                      e.t0 = {}
                    case 10:
                      return (
                        (o = e.t0),
                        (r =
                          null != o && o.id
                            ? ''.concat(u, 'masterdata/address/').concat(o.id)
                            : ''.concat(u, 'masterdata/addresses')),
                        (i = Ft({ userId: n }, t)),
                        o.id ||
                          (i.addressName =
                            t.addressId || 'address-'.concat(Date.now())),
                        (a = xt({ cookie: !0, cache: !0, json: !0 })),
                        (d = {
                          method: 'PATCH',
                          headers: a,
                          body: JSON.stringify(i),
                          credentials: 'include',
                        }),
                        (e.next = 18),
                        fetch(r, d)
                          .then(function (e) {
                            return 204 !== e.status ? e.json() : e
                          })
                          .then(function (e) {
                            return (
                              console.log('Address saved to master data:', e), e
                            )
                          })
                          .catch(function (e) {
                            wt(
                              'SAVE_ADDRESS_ERROR: '.concat(
                                null == e ? void 0 : e.message
                              )
                            )
                          })
                      )
                    case 18:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        Ht = function (e) {
          var t = $('#address-'.concat(e.addressName))
          t.length
            ? (t.after(Pt(e)), t.remove(), (t = null))
            : $('#bash-address-list').append(Pt(e)),
            $('input[type="radio"][name="selected-address"]:checked').attr(
              'checked',
              !1
            ),
            $(
              'input[type="radio"][name="selected-address"][value="'.concat(
                e.addressName,
                '"]'
              )
            ).attr('checked', !0)
        },
        Zt = (function () {
          var e = Rt(
            At().mark(function e(t, r) {
              var n
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.addressName ||
                        ((n = t.street
                          .replace(/[^a-zA-Z0-9]/g, ' ')
                          .trim()
                          .replace(/\s/g, '-')
                          .toLowerCase()),
                        (t.addressName = ''
                          .concat(Date.now(), '-')
                          .concat(n)
                          .substring(0, 50))),
                        t.addressId || (t.addressId = t.addressName),
                        Bt.addOrUpdateAddress(t).then(function () {
                          return Ht(t)
                        }),
                        r && Yt(t)
                    case 4:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        Wt = (function () {
          var e = Rt(
            At().mark(function e(t) {
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', Bt.getAddress(t))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        Kt = (function () {
          var e = Rt(
            At().mark(function e() {
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', Bt.clearData())
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        Jt = (function () {
          var e = Rt(
            At().mark(function e(t, r) {
              var n,
                o,
                i,
                a,
                d,
                s = arguments
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = s.length > 2 && void 0 !== s[2] && s[2]),
                        (o = window.vtexjs.checkout.orderForm.orderFormId),
                        r.phone && (r.phone = Gt(r.phone, 'ZA').trim()),
                        (i = '/api/checkout/pub/orderForm/'
                          .concat(o, '/customData/')
                          .concat(t)),
                        (a = JSON.stringify(
                          Ft(
                            Ft({}, r),
                            n && { sameAddress: new Boolean(r.sameAddress) }
                          )
                        )),
                        (d = {
                          method: 'PUT',
                          headers: { 'Content-Type': 'application/json' },
                          body: a,
                        }),
                        e.abrupt('return', fetch(i, d))
                      )
                    case 7:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })(),
        Xt = function (e) {
          var t,
            r =
              null === (t = window) ||
              void 0 === t ||
              null === (t = t.vtexjs) ||
              void 0 === t ||
              null === (t = t.checkout) ||
              void 0 === t ||
              null === (t = t.orderForm) ||
              void 0 === t
                ? void 0
                : t.customData,
            n = {}
          if ((null == r ? void 0 : r.customApps.length) > 0) {
            var o = r.customApps.find(function (t) {
              return t.id === e
            })
            n = null == o ? void 0 : o.fields
          }
          return n
        },
        Qt = (function () {
          var e = Rt(
            At().mark(function e(t) {
              return At().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t.addressName) {
                          e.next = 2
                          break
                        }
                        return e.abrupt('return')
                      case 2:
                        return (
                          t.addressId || (t.addressId = t.addressName),
                          (e.prev = 3),
                          (e.next = 6),
                          Bt.deleteAddress(t.addressId)
                        )
                      case 6:
                        Ht(t), (e.next = 12)
                        break
                      case 9:
                        ;(e.prev = 9),
                          (e.t0 = e.catch(3)),
                          console.error('Error deleting address:', e.t0)
                      case 12:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[3, 9]]
              )
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        zt = (function () {
          var e = Rt(
            At().mark(function e(t) {
              return At().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        'return',
                        vtexjs.checkout
                          .getOrderForm()
                          .then(function (e) {
                            var r = e.shippingData,
                              n = function (e) {
                                return e.filter(function (e) {
                                  return e.addressId !== t
                                })
                              }
                            return (
                              (r.availableAddresses = n(
                                r.availableAddresses || []
                              )),
                              (r.selectedAddresses = n(
                                r.selectedAddresses || []
                              )),
                              (r.logisticsInfo = n(r.selectedAddresses || [])),
                              vtexjs.checkout.sendAttachment('shippingData', r)
                            )
                          })
                          .done(function (e) {
                            console.log(e.shippingData)
                          })
                          .fail(function (e) {
                            console.error(
                              'Error removing address from order form:',
                              e
                            )
                          })
                      )
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        er = (function () {
          var e = Rt(
            At().mark(function e(t) {
              var r, n, o, i, a
              return At().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2
                          break
                        }
                        return e.abrupt(
                          'return',
                          Promise.reject(new Error('No address ID provided'))
                        )
                      case 2:
                        return (
                          (r = ''.concat(u, 'masterdata/address/').concat(t)),
                          (n = xt({ cookie: !0, cache: !0, json: !1 })),
                          (o = {
                            method: 'delete',
                            headers: n,
                            credentials: 'include',
                          }),
                          (e.prev = 5),
                          (e.next = 8),
                          fetch(r, o)
                        )
                      case 8:
                        if (!(i = e.sent).ok) {
                          e.next = 14
                          break
                        }
                        return (
                          console.log(
                            'Address with ID '.concat(
                              t,
                              ' successfully deleted from MasterData'
                            )
                          ),
                          e.abrupt('return', i.json())
                        )
                      case 14:
                        return (e.next = 16), i.json()
                      case 16:
                        throw (
                          ((a = e.sent),
                          console.error(
                            'Error deleting address from MasterData',
                            a
                          ),
                          new Error('Error deleting address from MasterData'))
                        )
                      case 19:
                        e.next = 25
                        break
                      case 21:
                        throw (
                          ((e.prev = 21),
                          (e.t0 = e.catch(5)),
                          console.error(
                            'Error in removeAddressFromMasterData:',
                            e.t0
                          ),
                          new Error(
                            'Error deleting address from MasterData: '.concat(
                              e.t0.message
                            )
                          ))
                        )
                      case 25:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[5, 21]]
              )
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        tr = function (e) {
          var t,
            r,
            n = e.text,
            o = e.fields
          if (!o.itemIndex) return ''
          var i =
            null === (t = window.vtexjs.checkout) ||
            void 0 === t ||
            null === (t = t.orderForm.items) ||
            void 0 === t
              ? void 0
              : t[o.itemIndex]
          if (!i) return ''
          var a = null == i ? void 0 : i.imageUrl
          return ' \n<div id="bash-delivery-error" class="notification error" alt="'
            .concat(
              null !== (r = null == o ? void 0 : o.skuName) && void 0 !== r
                ? r
                : '',
              '" >\n   \x3c!---<div class="icon"></div>---\x3e\n   '
            )
            .concat(
              a ? '<img src="'.concat(a, '" style=" float: right; " />') : '',
              '\n   <div class="notification-content">\n      <h3>Address error '
            )
            .concat(
              null != o && o.skuName
                ? '- '.concat(null == o ? void 0 : o.skuName)
                : '',
              '</h3>\n      <p>'
            )
            .concat(
              n,
              '</p>\n      <p>Check the postal code of your address, or \n      <a href="#" \n        class="remove-cart-item"\n        style="color: white; text-decoration: underline"\n        data-index="'
            )
            .concat(
              o.itemIndex,
              '">remove this item from your cart</a>.\n      </p>\n   </div>  \n</div>  \n'
            )
        },
        rr = function (e) {
          var t = e.businessName,
            r = e.street,
            n = e.city,
            o = e.postalCode,
            i = e.neighborhood,
            a = [t, r, null != i ? i : n, o]
              .filter(function (e) {
                return null != e && '' !== e
              })
              .join(', ')
              .trim()
          return '\n    <div id="bash-delivery-error" class="notification error"  >\n         <div class="notification-content">\n          <p>'.concat(
            a || 'Address',
            ' is invalid. Please select another or add a new address.</p>\n         </div>\n    </div> \n   '
          )
        },
        nr = function (e) {
          var t = '#bash-delivery-error-container'
          $('html, body').animate({ scrollTop: $(t).offset().top }, 400),
            $(t).html(e)
        },
        or = function (e) {
          var t = e.text
          return "<div class='alert-container'>\n      <p>".concat(
            t,
            '</p>\n    </div>\n  '
          )
        },
        ir = [
          'receiverName',
          'street',
          'neighborhood',
          'state',
          'city',
          'country',
          'postalCode',
          'receiverPhone',
        ],
        ar = [
          'idOrPassport',
          'sameAddress',
          'fullName',
          'streetAddress',
          'suburb',
          'city',
          'postalCode',
          'province',
        ],
        dr = ['tvID'],
        sr = [
          'residential',
          'inStore',
          'commercial',
          'giftRegistry',
          'pickup',
          'search',
        ]
      function cr(e) {
        return (
          (cr =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          cr(e)
        )
      }
      function ur() {
        ur = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == cr(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(cr(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function lr(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      var hr = yt(),
        fr = hr.formatPhoneNumber,
        pr = hr.isValidNumber,
        $r = function () {
          var e
          null === (e = document.querySelector('.bash--delivery-container')) ||
            void 0 === e ||
            e.classList.add('shimmer')
        },
        vr = function () {
          var e, t
          null === (e = document.querySelector('.delivery-group-content')) ||
            void 0 === e ||
            null === (e = e.classList) ||
            void 0 === e ||
            e.add('shimmer'),
            null ===
              (t = document.querySelector('.vtex-omnishipping-1-x-ask')) ||
              void 0 === t ||
              null === (t = t.classList) ||
              void 0 === t ||
              t.add('shimmer')
        },
        mr = function (e) {
          switch (e) {
            case 'Select':
              return ''
            case 'Western Cape':
              return 'WC'
            case 'Easter Cape':
              return 'EC'
            case 'Gauteng':
              return 'GP'
            case 'KwaZulu-Natal':
            case 'KwaZulu Natal':
              return 'KZN'
            case 'Northern Cape':
              return 'NC'
            case 'Limpopo':
              return 'LP'
            case 'Mpumalanga':
              return 'MP'
            case 'North West':
              return 'NW'
            case 'Freestate':
            case 'Free State':
              return 'FS'
            default:
              return e
          }
        },
        yr = function (e) {
          var t,
            r,
            n,
            o,
            i = e.preferred,
            a = void 0 === i ? void 0 : i,
            d = e.type,
            s = void 0 === d ? 'delivery' : d,
            c =
              null === (t = window) ||
              void 0 === t ||
              null === (t = t.vtexjs) ||
              void 0 === t ||
              null === (t = t.checkout) ||
              void 0 === t ||
              null === (t = t.orderForm) ||
              void 0 === t ||
              null === (t = t.clientProfileData) ||
              void 0 === t
                ? void 0
                : t.firstName,
            u =
              null === (r = window) ||
              void 0 === r ||
              null === (r = r.vtexjs) ||
              void 0 === r ||
              null === (r = r.checkout) ||
              void 0 === r ||
              null === (r = r.orderForm) ||
              void 0 === r ||
              null === (r = r.clientProfileData) ||
              void 0 === r
                ? void 0
                : r.lastName,
            l =
              null === (n = window) ||
              void 0 === n ||
              null === (n = n.vtexjs) ||
              void 0 === n ||
              null === (n = n.checkout) ||
              void 0 === n ||
              null === (n = n.orderForm) ||
              void 0 === n ||
              null === (n = n.shippingData) ||
              void 0 === n ||
              null === (n = n.address) ||
              void 0 === n
                ? void 0
                : n.receiverName,
            h = ''
              .concat(null != c ? c : '', ' ')
              .concat(null != u ? u : '')
              .trim()
          return 'collect' === s
            ? a || l || h || ''
            : a ||
                (null === (o = document.getElementById('client-first-name')) ||
                void 0 === o
                  ? void 0
                  : o.value) ||
                h ||
                ''
        },
        gr = function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '',
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          if (e) {
            for (var o = 0; o < t.length; o++) {
              var i = 'bash--input-'.concat(r).concat(t[o])
              !document.getElementById(i) ||
                (!e[t[o]] && !n) ||
                (document.getElementById(i).value && !n) ||
                (document.getElementById(i).value = e[t[o]])
            }
            $(':invalid').trigger('change')
          }
        },
        br = function () {
          var e,
            t = window.vtexjs.checkout.orderForm.shippingData.address
          if (
            (null ===
              (e = document.getElementById('bash--input-rica_streetAddress')) ||
              void 0 === e ||
              !e.value) &&
            t
          ) {
            ;(t.fullName = yr({ type: 'delivery' })),
              (t.streetAddress = t.street),
              (t.suburb = t.neighborhood),
              (t.province = t.state),
              gr(t, ar, 'rica_')
            var r = Xt(a)
            r.streetAddress && gr(r, ar, 'rica_', !0)
          }
        },
        wr = (function () {
          var e,
            t =
              ((e = ur().mark(function e() {
                var t
                return ur().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        ;(t = Xt(d)), gr(t, dr, 'tv')
                      case 2:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })),
              function () {
                var t = this,
                  r = arguments
                return new Promise(function (n, o) {
                  var i = e.apply(t, r)
                  function a(e) {
                    lr(i, n, o, a, d, 'next', e)
                  }
                  function d(e) {
                    lr(i, n, o, a, d, 'throw', e)
                  }
                  a(void 0)
                })
              })
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        xr = function () {
          var e = window.vtexjs.checkout.orderForm.items,
            t = _t(e),
            r = t.hasTVs,
            n = t.hasSimCards,
            o = t.hasFurnitureMixed,
            i = '#shipping-data'
          r
            ? $(''.concat(i, ':not(.has-tv)')).addClass('has-tv')
            : $(''.concat(i, '.has-tv')).removeClass('has-tv'),
            n
              ? $(''.concat(i, ':not(.has-rica)')).addClass('has-rica')
              : $(''.concat(i, '.has-rica')).removeClass('has-rica'),
            o
              ? $(''.concat(i, ':not(.has-furniture-mixed)')).addClass(
                  'has-furniture-mixed'
                )
              : $(''.concat(i, '.has-furniture-mixed')).removeClass(
                  'has-furniture-mixed'
                )
        },
        _r = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          if (!($('#bash-delivery-error-container').length < 1)) {
            var t =
              e.length > 0
                ? e.map(function (e) {
                    return tr(e)
                  })
                : ''
            $('#bash-delivery-error-container').html(t),
              e.length > 0 &&
                $('html, body').animate(
                  {
                    scrollTop: $('#bash-delivery-error-container').offset().top,
                  },
                  400
                )
          }
        },
        Or = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'Address saved'
          $('.alert-container').addClass('show'),
            $('.alert-container').slideDown(),
            $('#bash-alert-container').html(or({ text: e })),
            setTimeout(function () {
              $('.alert-container').slideUp()
            }, 5e3)
        },
        Er = function () {
          setTimeout(function () {
            $('.bash--extra-fields').length > 0
              ? document
                  .querySelector('.bash--extra-fields')
                  .scrollIntoView({ behavior: 'smooth' })
              : document
                  .getElementById('bash-delivery-options')
                  .scrollIntoView({ behavior: 'smooth' })
          }, 500),
            Or()
        },
        Sr = 'pickup-receiver',
        Cr = 'custom-pickup-complement',
        Pr = 'COLLECTION_VALIDATION_ERROR',
        kr = function (e) {
          var t = !0
          switch (e) {
            case Sr:
              t = !(
                $('#'.concat(e)).length > 0 &&
                !$('#'.concat(e)).attr('disabled') &&
                !$('#'.concat(e)).val()
              )
              break
            case Cr:
              t = (function (e) {
                return (
                  !!e &&
                  ('0' === (e = e.replace(/\s/g, ''))[0]
                    ? e.match(/[0-9\s]{10}/)
                    : e.match(/[0-9\s]{9,}/))
                )
              })($('#'.concat(e)).val())
          }
          return t
        },
        Lr = function (e, t) {
          window.postMessage({ type: e, message: t }, '*')
        },
        jr = function () {
          ;[Sr, Cr].filter(kr).forEach(function (e) {
            Lr(Pr, ''.concat(e, ' is invalid'))
          })
        }
      const Nr = function (e) {
        var t = e.eventCategory,
          r = void 0 === t ? 'Checkout_UserErrors' : t,
          n = e.action,
          o = void 0 === n ? '' : n,
          i = e.label,
          a = void 0 === i ? '' : i,
          d = e.description,
          s = void 0 === d ? '' : d,
          c = e.value,
          u = void 0 === c ? void 0 : c,
          l = function () {
            window.dataLayer.push({
              event: 'gaEvent',
              eventCategory: r,
              eventLabel: a,
              eventAction: o,
              eventValue: u,
              eventDescription: s,
            })
          }
        if (!window.dataLayer)
          return $(window).off('gtm.load'), void $(window).on('gtm.load', l)
        l()
      }
      function Tr(e) {
        return (
          (Tr =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Tr(e)
        )
      }
      function Ar() {
        Ar = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == Tr(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Tr(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function Ir(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      function Fr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Dr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Fr(Object(r), !0).forEach(function (t) {
                Mr(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Fr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Mr(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Tr(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== Tr(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === Tr(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var Rr,
        Gr,
        Br,
        Ur,
        Vr,
        qr,
        Yr,
        Hr = yt(),
        Zr = (Hr.formatPhoneNumber, Hr.isValidNumber)
      const Wr =
        ((Rr = {
          inCollect: !1,
          pickupSelected: !1,
          validForm: !1,
          runningObserver: !1,
          collectReset: !1,
        }),
        (Gr = function () {
          $('#change-pickup-button').length &&
            ($(
              '<button class="vtex-omnishipping-1-x-pickupPointSeeMore button-see-pickup-point btn btn-link" id="tfg-pickup-see-more-button" type="button">Collect Point Details</button>'
            ).appendTo('.vtex-omnishipping-1-x-PickupPoint'),
            $(
              '<button class="vtex-change-pickup button-change-pickup-point" id="tfg-pickup-button" type="button">Change</button>'
            ).appendTo('.vtex-omnishipping-1-x-PickupPoint'),
            $('#change-pickup-button').remove(),
            $('#details-pickup-button').remove()),
            $('.vtex-omnishipping-1-x-ask').length &&
              ($('.vtex-omnishipping-1-x-ask').empty(),
              $(
                '<div class="pickup-map-container" id="tfg-pickup-container">\n          <div class="pickup-map-icon">\n            <svg class="icon-map" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">\n              <rect width="48" height="48" rx="24" fill="#2424E4"/>\n              <path d="M24.2147 11C21.5065 11.0031 18.9102 12.0802 16.9952 13.9952C15.0802 15.9102 14.0031 18.5065 14 21.2147C14 29.9552 23.2861 36.5599 23.6807 36.8385C23.8389 36.9438 24.0247 37 24.2147 37C24.4047 37 24.5905 36.9438 24.7486 36.8385C25.1433 36.5599 34.4294 29.9552 34.4294 21.2147C34.4263 18.5065 33.3491 15.9102 31.4342 13.9952C29.5192 12.0802 26.9228 11.0031 24.2147 11ZM24.2147 17.5003C24.9493 17.5003 25.6675 17.7181 26.2783 18.1262C26.8891 18.5344 27.3652 19.1145 27.6464 19.7932C27.9275 20.472 28.0011 21.2188 27.8577 21.9393C27.7144 22.6599 27.3607 23.3217 26.8412 23.8412C26.3217 24.3607 25.6599 24.7144 24.9393 24.8577C24.2188 25.0011 23.472 24.9275 22.7932 24.6464C22.1145 24.3652 21.5344 23.8891 21.1262 23.2783C20.7181 22.6675 20.5003 21.9493 20.5003 21.2147C20.5003 20.2296 20.8916 19.2848 21.5882 18.5882C22.2848 17.8916 23.2296 17.5003 24.2147 17.5003Z" fill="#FCFCFC"/>\n            </svg>\n            Find nearby collect points\n            <div class="pickup-map-text">\n              Search for addresses that you frequently use and we’ll locate stores nearby.\n            </div>\n          </div>\n          <button class="pickup-map-geolocation" id="find-pickups-button-new" type="button">\n            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">\n              <path d="M1.12954 2.34666L5.24985 14.2506C5.42563 14.7639 6.15688 14.7498 6.3186 14.2295L7.97798 8.84354C8.00302 8.75549 8.05054 8.67548 8.11588 8.61138C8.18122 8.54727 8.26213 8.50127 8.35063 8.47791L13.7295 6.81854C14.2499 6.65682 14.2639 5.92557 13.7506 5.74979L1.84672 1.62948C1.74671 1.59433 1.6388 1.58815 1.53542 1.61167C1.43205 1.63519 1.33743 1.68745 1.26247 1.76241C1.18751 1.83737 1.13525 1.93199 1.11173 2.03536C1.08822 2.13873 1.09439 2.24665 1.12954 2.34666V2.34666Z" stroke="#2424E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            Use my current location\n          </button>\n          <button class="pickup-map-manual" id="find-pickups-manually-search">\n            Manually search for an address\n          </button>\n        </div>'
              ).appendTo('.vtex-omnishipping-1-x-ask')),
            $('#pkpmodal-close')
              .unbind()
              .click(function () {
                $('#tfg-pickup-map').remove()
              })
          var e = function (e) {
            $(
              '<div class="tfg-pickup-map" id="tfg-pickup-map"><div class="tfg-pickup-map-content"></div></div>'
            ).appendTo($('body')),
              $('body').css('position', 'fixed'),
              $('body').css('width', '100%')
            var t = document.createElement('iframe')
            ;(t.src = 'https://pickup-map.bashconnect.com/'),
              (t.width = '100%'),
              (t.height = '100%'),
              (t.id = 'map'),
              (t.allow = 'geolocation'),
              $(t).appendTo('.tfg-pickup-map-content'),
              window.Penpal.connectToChild({
                iframe: t,
                methods: {
                  sendAttachment: function (e) {
                    vr(),
                      window.vtexjs.checkout.sendAttachment('shippingData', e),
                      $('#tfg-pickup-map').remove(),
                      $('body').css('overflow', 'auto'),
                      $('body').css('width', 'auto'),
                      $('body').css('position', 'relative')
                  },
                  getCheckoutJS: function () {
                    return window.vtexjs.checkout.orderForm
                  },
                  getSpecialFields: function () {
                    return _t(window.vtexjs.checkout.orderForm.items)
                  },
                  remove: function () {
                    $('#tfg-pickup-map').remove(),
                      $('body').css('overflow', 'auto'),
                      $('body').css('width', 'auto'),
                      $('body').css('position', 'relative')
                  },
                  getState: function () {
                    return e
                  },
                },
              }),
              $('#tfg-pickup-map').click(function (e) {
                e.stopPropagation(),
                  $('#tfg-pickup-map').remove(),
                  $('body').css('overflow', 'auto'),
                  $('body').css('width', 'auto'),
                  $('body').css('position', 'relative')
              })
          }
          $('#tfg-pickup-button')
            .unbind()
            .click(function () {
              return e('none')
            }),
            $('#tfg-pickup-see-more-button')
              .unbind()
              .click(function () {
                return e(i)
              }),
            $('#find-pickups-button-new')
              .unbind()
              .click(function () {
                return e('geolocate')
              }),
            $('#find-pickups-manually-search')
              .unbind()
              .click(function () {
                return e('manual')
              })
        }),
        (Br = function (e) {
          e.forEach(function (e) {
            var t = kr(e),
              r = (function (e) {
                var t
                switch (e) {
                  case Sr:
                    t = '.shp-pickup-receiver'
                    break
                  case Cr:
                    t = '#box-pickup-complement'
                }
                return t
              })(e)
            t
              ? $(r).removeClass('error')
              : ($(r).addClass('error'),
                $(r).append(
                  '<span class="help error">This field is required.</span>'
                ),
                $(''.concat(r, ' span.error')).show(),
                Et(),
                (Rr.validForm = !1),
                Lr(Pr, ''.concat(e, ' is invalid')))
          })
        }),
        (Ur = function () {
          if (
            ($('span.help.error').remove(),
            (Rr.validForm = !0),
            Br([Sr, Cr]),
            Rr.validForm)
          ) {
            var e = $('#custom-pickup-complement').val().replace(/\s/g, '')
            9 === e.length && '0' !== e[0] && (e = '0'.concat(e)),
              localStorage.setItem('saving-shipping-collect', !0),
              $('#btn-go-to-payment').trigger('click')
            try {
              window.vtexjs.checkout
                .getOrderForm()
                .then(
                  (function () {
                    var t,
                      r =
                        ((t = Ar().mark(function t(r) {
                          var n
                          return Ar().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = r.shippingData.address),
                                    (t.next = 3),
                                    Jt(s, { phone: e })
                                  )
                                case 3:
                                  return t.abrupt(
                                    'return',
                                    window.vtexjs.checkout.calculateShipping(n)
                                  )
                                case 4:
                                case 'end':
                                  return t.stop()
                              }
                          }, t)
                        })),
                        function () {
                          var e = this,
                            r = arguments
                          return new Promise(function (n, o) {
                            var i = t.apply(e, r)
                            function a(e) {
                              Ir(i, n, o, a, d, 'next', e)
                            }
                            function d(e) {
                              Ir(i, n, o, a, d, 'throw', e)
                            }
                            a(void 0)
                          })
                        })
                    return function (e) {
                      return r.apply(this, arguments)
                    }
                  })()
                )
                .done(function () {
                  localStorage.removeItem('saving-shipping-collect')
                })
            } catch (e) {
              console.error(
                'VTEX_ORDERFORM_ERROR: Could not load at CollectController',
                e
              ),
                Nr({
                  eventCategory: 'Checkout_SystemError',
                  action: 'OrderFormFailed',
                  label: 'Could not getOrderForm() from vtex',
                  description: 'Could not load orderForm for Collect.',
                })
            }
          }
        }),
        (Vr = function () {
          var t,
            r,
            n,
            o,
            a,
            d,
            s,
            c,
            u,
            l =
              ((t = { type: 'collect', fields: Xt(i) }),
              (s = void 0 === (d = t.preferred) ? void 0 : d),
              (u = t.fields),
              'collect' === (void 0 === (c = t.type) ? 'profile' : c)
                ? s ||
                  (null == u ? void 0 : u.phone) ||
                  (null === (o = document) ||
                  void 0 === o ||
                  null === (o = o.getElementById('client-phone')) ||
                  void 0 === o
                    ? void 0
                    : o.value) ||
                  (null === (a = window.vtexjs.checkout.orderForm) ||
                  void 0 === a ||
                  null === (a = a.clientProfileData) ||
                  void 0 === a
                    ? void 0
                    : a.phone) ||
                  ''
                : s ||
                  (null === (r = window.vtexjs.checkout.orderForm) ||
                  void 0 === r ||
                  null === (r = r.clientProfileData) ||
                  void 0 === r
                    ? void 0
                    : r.phone) ||
                  (null === (n = document) ||
                  void 0 === n ||
                  null === (n = n.getElementById('client-phone')) ||
                  void 0 === n
                    ? void 0
                    : n.value) ||
                  '')
          0 === $('#custom-pickup-complement').length &&
            $('.btn-go-to-payment-wrapper').before(e),
            Zr(l) && $('#custom-pickup-complement').val(l).css('border', 0)
        }),
        (qr = function () {
          var e = $('#postalCode-finished-loading').length > 0
          $('#shipping-option-pickup-in-point').one('click', function () {
            Rr.collectReset = !0
          }),
            window.location.hash === t && e
              ? ((Rr.inCollect = $('#shipping-option-pickup-in-point').hasClass(
                  'shp-method-option-active'
                )),
                (Rr.pickupSelected = 0 === $('div.ask-for-geolocation').length),
                (function () {
                  var e, t
                  if (!($('#pickup-receiver').length < 1)) {
                    var r = yr({
                      preferred:
                        null === (e = window) ||
                        void 0 === e ||
                        null === (e = e.vtexjs) ||
                        void 0 === e ||
                        null === (e = e.checkout) ||
                        void 0 === e ||
                        null === (e = e.orderForm) ||
                        void 0 === e ||
                        null === (e = e.shippingData) ||
                        void 0 === e ||
                        null === (e = e.address) ||
                        void 0 === e
                          ? void 0
                          : e.receiverName,
                      type: 'collect',
                    }).trim()
                    r.length > 0 &&
                      '' ===
                        (null === (t = $('#pickup-receiver')) ||
                        void 0 === t ||
                        null === (t = t.val()) ||
                        void 0 === t
                          ? void 0
                          : t.trim()) &&
                      $('#pickup-receiver').val(r)
                  }
                })(),
                Rr.inCollect &&
                  ((($('#tfg-pickup-button').length ||
                    $('#tfg-pickup-see-more-button').length) &&
                    ($('#find-pickups-manually-search').length ||
                      $('#find-pickups-button-new').length)) ||
                    Gr(),
                  Ot(),
                  Rr.pickupSelected && !Rr.collectReset
                    ? ($('button.shp-pickup-receiver__btn').trigger('click'),
                      $('div.shp-pickup-receiver').addClass('show'),
                      $('p#box-pickup-complement').addClass('show'),
                      Vr(),
                      (function () {
                        if ($('#custom-go-to-payment').length <= 0) {
                          var e = $('#btn-go-to-payment'),
                            t = e.clone(!1)
                          $(e).hide(),
                            $(t).data('bind', ''),
                            $(t)
                              .removeAttr('id')
                              .attr('id', 'custom-go-to-payment'),
                            $(t).removeAttr('data-bind'),
                            $(t).css('display', 'block'),
                            $(t).text('Save & continue'),
                            $('p.btn-go-to-payment-wrapper').append(t),
                            $(t).on('click', Ur)
                        }
                      })())
                    : ($('div.shp-pickup-receiver').removeClass('show'),
                      $('p#box-pickup-complement').removeClass('show')),
                  Rr.collectReset &&
                    ((function () {
                      $('.delivery-group-content').empty(),
                        $('.btn-go-to-payment-wrapper').empty(),
                        $(
                          '<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" stroke="#FCFCFC" fill="#FCFCFC"/><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" stroke="#000" fill="#000"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg><div>'
                        )
                          .css({
                            display: 'flex',
                            'justify-content': 'center',
                            'align-items': 'center',
                            'min-height': '100px',
                          })
                          .appendTo('.delivery-group-content')
                      var e = window.vtexjs.checkout.orderForm.shippingData,
                        t = Dr(
                          Dr({}, e),
                          {},
                          {
                            address: null,
                            availableAddresses: e.availableAddresses,
                            selectedAddresses: e.selectedAddresses.filter(
                              function (e) {
                                return 'search' !== e.addressType
                              }
                            ),
                            logisticsInfo: e.logisticsInfo,
                          }
                        )
                      window.vtexjs.checkout.sendAttachment('shippingData', t),
                        vr(),
                        Gr()
                    })(),
                    (Rr.collectReset = !1)),
                  $('p.vtex-omnishipping-1-x-shippingSectionTitle').text(
                    'Collect options'
                  ),
                  $('#change-pickup-button').text('Available pickup points'),
                  $(
                    'h2.vtex-omnishipping-1-x-geolocationTitle.ask-for-geolocation-title'
                  ).text('Find nearby Click & Collect points'),
                  $(
                    'h3.vtex-omnishipping-1-x-subtitle.ask-for-geolocation-subtitle'
                  ).text(
                    "Search for addresses that you frequently use and we'll locate stores nearby."
                  ),
                  Rr.pickupSelected &&
                    $('label.shp-pickup-receiver__label').text(
                      "Recipient's name"
                    )),
                localStorage.getItem('shipping-incomplete-values') &&
                  ($('#custom-go-to-payment').trigger('click'),
                  localStorage.removeItem('shipping-incomplete-values')))
              : ($('#box-pickup-complement').remove(),
                window.location.hash === n &&
                  setTimeout(function () {
                    var e,
                      r =
                        null === (e = window.vtexjs.checkout.orderForm) ||
                        void 0 === e ||
                        null === (e = e.shippingData) ||
                        void 0 === e
                          ? void 0
                          : e.address
                    if (!localStorage.getItem('saving-shipping-collect')) {
                      var n = Xt(s)
                      !r ||
                        r.addressType !== o ||
                        (r.receiverName && null != n && n.phone) ||
                        ((window.location.hash = t),
                        localStorage.setItem('shipping-incomplete-values', !0),
                        Nr({
                          action: 'stepRedirect',
                          label: 'redirectPaymentToShipping',
                          description:
                            'User redirect to shipping because Collection is missing receiverName or phone number.',
                        }))
                    }
                  }, 1e3)),
            Yr()
        }),
        (Yr = function () {
          if (!Rr.runningObserver) {
            var e = document.querySelector('.shipping-container .box-step'),
              t = new MutationObserver(function () {
                ;(Rr.runningObserver = !0), qr()
              })
            e &&
              t.observe(e, { attributes: !1, childList: !0, characterData: !1 })
          }
        }),
        $(document).ready(function () {
          qr()
        }),
        $(window).on('hashchange orderFormUpdated.vtex', function () {
          qr()
        }),
        { state: Rr, init: function () {} })
      function Kr(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function Jr(e) {
        var t,
          r,
          n,
          o,
          i =
            ((n = Array.prototype.slice.call(e)),
            (o = 4),
            (function (e) {
              if (Array.isArray(e)) return e
            })(n) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                      e['@@iterator']
                if (null != r) {
                  var n,
                    o,
                    i = [],
                    a = !0,
                    d = !1
                  try {
                    for (
                      r = r.call(e);
                      !(a = (n = r.next()).done) &&
                      (i.push(n.value), !t || i.length !== t);
                      a = !0
                    );
                  } catch (e) {
                    ;(d = !0), (o = e)
                  } finally {
                    try {
                      a || null == r.return || r.return()
                    } finally {
                      if (d) throw o
                    }
                  }
                  return i
                }
              })(n, o) ||
              (function (e, t) {
                if (e) {
                  if ('string' == typeof e) return Kr(e, t)
                  var r = Object.prototype.toString.call(e).slice(8, -1)
                  return (
                    'Object' === r && e.constructor && (r = e.constructor.name),
                    'Map' === r || 'Set' === r
                      ? Array.from(e)
                      : 'Arguments' === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? Kr(e, t)
                      : void 0
                  )
                }
              })(n, o) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })()),
          a = i[0],
          d = i[1],
          s = i[2],
          c = i[3],
          u = {}
        if ('string' == typeof a)
          G(d)
            ? (s ? ((u = d), (r = s)) : (r = d),
              (t = _e(a) ? st(a, void 0, r) : {}))
            : (c ? ((u = s), (r = c)) : (r = s),
              (t = _e(a) ? st(a, { defaultCountry: d }, r) : {}))
        else {
          if (!G(a))
            throw new TypeError(
              'A phone number must either be a string or an object of shape { phone, [country] }.'
            )
          ;(t = a), s ? ((u = d), (r = s)) : (r = d)
        }
        return { input: t, options: u, metadata: r }
      }
      function Xr() {
        var e = Jr(arguments),
          t = e.input,
          r = e.options,
          n = e.metadata
        return !!t.phone && De(t, r, n)
      }
      function Qr() {
        return M(Xr, arguments)
      }
      var zr = 'add_address_error',
        en = 'add_address_stage',
        tn = 'add_address_capture_method',
        rn = 'add_address_method',
        nn = 'checkout',
        on = 'auto_complete_google',
        an = 'manual_attempted_autocomplete_google',
        dn = 'manual_entry',
        sn = 'search_for_an_address',
        cn = 'edit_address',
        un = 'add_address_manually',
        ln = function (e) {
          var t = e.event,
            r = e.add_address_stage,
            n = e.add_address_method,
            o = e.add_address_capture_method
          if (window.dataLayer) {
            var i = {
              event: t,
              add_address_method: n,
              add_address_stage: r,
              add_address_capture_method: o,
            }
            window.dataLayer.push(i)
          }
        }
      function hn(e) {
        return (
          (hn =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          hn(e)
        )
      }
      function fn(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== hn(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== hn(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === hn(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      const pn = function (e, t) {
          var r,
            n = window.vtexjs.checkout.orderForm.items,
            o = _t(n),
            i = o.hasTVs,
            a = o.hasSimCards
          i && gr(e, dr, 'tv_'),
            a && br(),
            null === e.geoCoordinate &&
              ((e.geoCoordinates = ['', '']),
              console.warn(
                'setAddress - Invalid geoCoordinate, setting default empty value'
              ))
          var d = (function (e) {
              for (var t = ir, r = [], n = 0; n < t.length; n++)
                e[t[n]] || r.push(t[n])
              return (
                !t.includes('receiverPhone') ||
                  r.includes('receiverPhone') ||
                  pr(fr(e.receiverPhone, 'ZA'), 'ZA') ||
                  (r.push('receiverPhone'),
                  $('#bash--input-receiverPhone').addClass('invalid'),
                  $('#bash--label-receiverPhone').focus()),
                { isValid: !r.length, invalidFields: r }
              )
            })(e),
            s = d.isValid,
            u = d.invalidFields
          if (!s)
            return (
              console.error({ invalidFields: u }),
              { success: !1, error: 'Invalid address details.' }
            )
          'business' === e.addressType && (e.addressType = 'commercial'),
            sr.includes(e.addressType) || (e.addressType = 'residential'),
            e.number &&
              ((e.street = ''.concat(e.number, ' ').concat(e.street)),
              (e.number = '')),
            (e.country = 'ZAF')
          var l =
            null === (r = window) ||
            void 0 === r ||
            null === (r = r.vtexjs) ||
            void 0 === r ||
            null === (r = r.checkout) ||
            void 0 === r ||
            null === (r = r.orderForm) ||
            void 0 === r
              ? void 0
              : r.shippingData
          return (
            (l.address = e),
            (l.selectedAddresses = [e]),
            e.complement &&
              ((e.receiverPhone = e.complement),
              (l.address.complement = ''),
              (e.complement = '')),
            e.companyBuilding &&
              !l.address.street.includes(', '.concat(e.companyBuilding)) &&
              (l.address.street = ''
                .concat(e.street, ', ')
                .concat(e.companyBuilding)),
            (l.selectedAddresses[0] = l.address),
            $r(),
            window.vtexjs.checkout
              .sendAttachment('shippingData', l)
              .then(function (r) {
                var n,
                  o,
                  i,
                  a,
                  d,
                  s = r.messages.filter(function (e) {
                    return 'error' === e.status
                  })
                if (s.length > 0)
                  return (
                    _r(s),
                    t.track &&
                      ln(
                        (fn((d = { event: zr }), en, nn),
                        fn(d, rn, t.add_address_method),
                        fn(d, tn, t.add_address_capture_method),
                        d)
                      ),
                    { success: !1, errors: s }
                  )
                e.addressName && Ht(e)
                try {
                  ;(o = (n = {
                    businessName: e.businessName,
                    receiverPhone: e.receiverPhone,
                  }).businessName),
                    (i = n.receiverPhone),
                    Jt(c, {
                      jsonString: JSON.stringify({
                        businessName: o || '',
                        receiverPhone: i || '',
                      }),
                    })
                } catch (e) {
                  Nr({
                    eventCategory: 'Checkout_SystemError',
                    action: 'OrderFormFailed',
                    label:
                      'Could not update businessName and/or receiverPhone ',
                    description:
                      'Could not update businessName and/or receiverPhone.',
                  })
                }
                return (
                  t.track &&
                    ln(
                      (fn((a = { event: 'address_saved' }), en, nn),
                      fn(a, rn, t.add_address_method),
                      fn(a, tn, t.add_address_capture_method),
                      a)
                    ),
                  { success: !0 }
                )
              })
              .done(function () {
                Ot()
              })
              .fail(function (e) {
                var r
                return (
                  t.track &&
                    ln(
                      (fn((r = { event: zr }), en, nn),
                      fn(r, rn, t.add_address_method),
                      fn(r, tn, t.add_address_capture_method),
                      r)
                    ),
                  console.error('Error setting address:', e),
                  Ot(),
                  { success: !1, error: e }
                )
              })
          )
        },
        $n = function (e) {
          var t = e.label,
            r = e.name,
            n = e.value,
            o = void 0 === n ? '' : n,
            i = e.required,
            a = void 0 === i || i,
            d = e.type,
            s = void 0 === d ? 'text' : d,
            c = e.placeholder,
            u = e.autoComplete,
            l = void 0 === u ? 'on' : u,
            h = e.maxLength,
            f = e.minlength,
            p = e.disabled,
            $ = void 0 !== p && p,
            v = e.options,
            m = e.checked,
            y = e.error,
            g = void 0 === y ? 'This field is required.' : y,
            b = e.containerClasses,
            w = void 0 === b ? '' : b,
            x = e.idOverride,
            _ = void 0 === x ? null : x,
            O = r.replace(/\s/g, '-'),
            E = '<label id="bash--label-'
              .concat(O, '" for="bash--input-')
              .concat(O, '">')
              .concat(t, '</label>')
          return '\n<p class="input bash--'
            .concat(s, 'field-')
            .concat(r.replace(/\s/g, '-'), ' bash--')
            .concat(s, ' ')
            .concat(a ? 'required' : 'optional', ' ')
            .concat(w, '">\n  ')
            .concat(t && 'checkbox' !== s ? E : '', '\n  ')
            .concat(
              (function () {
                switch (s) {
                  case 'radio':
                    return St({ name: r, options: v })
                  case 'dropdown':
                    return (function (e) {
                      var t = e.name,
                        r = e.disabled,
                        n = void 0 !== r && r,
                        o = e.options,
                        i = e.required,
                        a = o.find(function (e) {
                          return !0 === e.selected
                        })
                      return '\n  <select \n    name="'
                        .concat(t, '" \n    ')
                        .concat(i ? ' required ' : '', ' \n    ')
                        .concat(
                          n ? ' disabled ' : '',
                          ' \n    id="bash--input-'
                        )
                        .concat(t, '" \n    class="input-large" \n  >\n  ')
                        .concat(
                          o
                            .map(function (e, t) {
                              var r = e.value,
                                n = e.label,
                                o = e.selected
                              return '\n    <option \n    '
                                .concat(0 === t ? ' disabled ' : '', '\n    ')
                                .concat(
                                  0 !== t || a ? '' : ' selected ',
                                  '\n    '
                                )
                                .concat(
                                  o ? ' selected ' : '',
                                  '\n      value="'
                                )
                                .concat(r, '" \n    >')
                                .concat(n, '</option>\n    ')
                            })
                            .join(''),
                          '\n  </select>\n  '
                        )
                    })({ name: r, disabled: $, options: v, required: a })
                  case 'note':
                    return (function (e) {
                      var t = e.value,
                        r = e.name
                      return '\n  <div class="bash--note-field '
                        .concat(r, '">\n  ')
                        .concat(t, '\n  </div>\n  ')
                    })({ name: r, value: o })
                  case 'checkbox':
                    return (function (e) {
                      var t = e.name,
                        r = e.label,
                        n = e.checked,
                        o = e.value
                      return '\n    <label class="tfg-checkbox-label">\n       <input \n        type=\'checkbox\' \n        name="'
                        .concat(t, '" \n        id="bash--input-')
                        .concat(t, '"\n        ')
                        .concat(
                          n ? "checked='checked'" : '',
                          '\n        value='
                        )
                        .concat(null != o ? o : '', '\n      />\n      <span>')
                        .concat(r, '</span>\n    </label>\n  ')
                    })({ name: r, label: t, checked: m })
                  default:
                    return (function (e) {
                      var t = e.name,
                        r = e.value,
                        n = void 0 === r ? '' : r,
                        o = e.required,
                        i = void 0 === o || o,
                        a = e.type,
                        d = void 0 === a ? 'text' : a,
                        s = e.placeholder,
                        c = e.autoComplete,
                        u = void 0 === c ? 'on' : c,
                        l = e.minLength,
                        h = void 0 === l ? 0 : l,
                        f = e.maxLength,
                        p = void 0 === f ? 0 : f,
                        $ = e.idOverride,
                        v = t.replace(/\s/g, '-'),
                        m = $ || 'bash--input-'.concat(v)
                      return '\n  <input \n    '
                        .concat(i ? ' required ' : '', '\n    autocomplete="')
                        .concat(u, '" \n    id="')
                        .concat(m, '" \n    type="')
                        .concat(d, '" \n    name="')
                        .concat(t, '" \n    ')
                        .concat(
                          h > 0 ? 'minlength="'.concat(h, '"') : '',
                          '\n    '
                        )
                        .concat(
                          p > 0 ? 'maxlength="'.concat(p, '"') : '',
                          '\n    placeholder="'
                        )
                        .concat(
                          null != s ? s : '',
                          '" \n    class="input-xlarge" \n    value="'
                        )
                        .concat(n, '" \n  />\n')
                    })({
                      name: r,
                      value: o,
                      required: a,
                      type: s,
                      placeholder: c,
                      autoComplete: l,
                      maxLength: h,
                      minLength: f,
                      idOverride: _,
                    })
                }
              })(),
              '\n  <span class="bash--field-error">'
            )
            .concat(g, '</span>\n</p>  \n')
        }
      var vn = function (e) {
          var t = e.businessName,
            r = e.street,
            n = e.city,
            o = e.postalCode,
            i = e.neighborhood,
            a = [t, r, null != i ? i : n, o]
              .filter(function (e) {
                return null != e && '' !== e
              })
              .join(', ')
              .trim()
          return '\n    <div style="border: 0.5px solid #0404041A; border-radius: 8px; padding: 16px; display: flex; align-items: center; margin-bottom: 24px;">\n      <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.5 18.2496H22.5M14.25 18.2496V12.2496H9.75V18.2496M3.75 8.9393V18.2496M20.25 18.2496V8.9393M2.25 10.4393L11.4694 1.21899C11.539 1.14926 11.6217 1.09394 11.7128 1.05619C11.8038 1.01845 11.9014 0.999023 12 0.999023C12.0986 0.999023 12.1962 1.01845 12.2872 1.05619C12.3783 1.09394 12.461 1.14926 12.5306 1.21899L21.75 10.4393" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n      <p style="margin-left: 16px; line-height: 1; font-size: 14px; margin-bottom:0;">'.concat(
            a,
            '</p>\n    </div>\n  '
          )
        },
        mn = function (e, t) {
          return '\n  <button\n    class="submit btn-go-to-payment btn btn-large btn-success"\n    id="'
            .concat(t, '"\n    type="submit">\n      ')
            .concat(e, '\n  </button>\n')
        },
        yn = function (e, t, r) {
          return '\n  <div class="bash--heading">\n    <h3>'
            .concat(
              e,
              '</h3>\n    <a href="#" class="back-button--select" data-view="'
            )
            .concat(t, '" id="')
            .concat(r, '">Back</a>\n  </div>\n')
        }
      function gn(e) {
        return (
          (gn =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          gn(e)
        )
      }
      function bn() {
        bn = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == gn(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(gn(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function wn(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      function xn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xn(Object(r), !0).forEach(function (t) {
                On(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function On(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== gn(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== gn(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === gn(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var En = 'bash--input-add-adress-autocomplete-form-receiverPhone',
        Sn = (function () {
          var e,
            t =
              ((e = bn().mark(function e(t) {
                var r,
                  n,
                  o,
                  i,
                  a,
                  d,
                  s,
                  c,
                  u,
                  l,
                  h,
                  f,
                  p,
                  v,
                  m,
                  y,
                  g,
                  b,
                  w,
                  x,
                  _,
                  O,
                  E,
                  S,
                  C,
                  P,
                  k,
                  L,
                  j,
                  N,
                  T,
                  A,
                  I,
                  F,
                  D
                return bn().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (t.preventDefault(),
                          (m = document.getElementById(
                            'bash--add-address-autocomplete-form'
                          )),
                          (y = new FormData(m)),
                          (g =
                            null === (r = y.get('streetNumber')) || void 0 === r
                              ? void 0
                              : r.trim()),
                          (b =
                            null === (n = y.get('addressType')) || void 0 === n
                              ? void 0
                              : n.trim()),
                          (w =
                            null === (o = y.get('businessName')) || void 0 === o
                              ? void 0
                              : o.trim()),
                          (x =
                            null === (i = y.get('companyBuilding')) ||
                            void 0 === i
                              ? void 0
                              : i.trim()),
                          (_ =
                            null === (a = y.get('receiverName')) || void 0 === a
                              ? void 0
                              : a.trim()),
                          (O =
                            null === (d = y.get('receiverPhone')) ||
                            void 0 === d
                              ? void 0
                              : d.trim()),
                          (O = bt(O).trim()),
                          (E =
                            null === (s = y.get('route')) || void 0 === s
                              ? void 0
                              : s.trim()),
                          (S =
                            null === (c = y.get('neighborhood')) || void 0 === c
                              ? void 0
                              : c.trim()),
                          (C =
                            null === (u = y.get('city')) || void 0 === u
                              ? void 0
                              : u.trim()),
                          (P =
                            null === (l = y.get('state')) || void 0 === l
                              ? void 0
                              : l.trim()),
                          (k =
                            null === (h = y.get('country')) || void 0 === h
                              ? void 0
                              : h.trim()),
                          (L =
                            null === (f = y.get('postalCode')) || void 0 === f
                              ? void 0
                              : f.trim()),
                          (j =
                            null === (p = y.get('lat')) || void 0 === p
                              ? void 0
                              : p.trim()),
                          (N =
                            null === (v = y.get('lng')) || void 0 === v
                              ? void 0
                              : v.trim()),
                          (T = []),
                          g || T.push('streetNumber'),
                          'business' !== b || w || T.push('businessName'),
                          _ || T.push('receiverName'),
                          (O && Qr(O, 'ZA')) ||
                            (T.push('receiverPhone'),
                            $('#'.concat(En)).addClass('invalid')),
                          !(T.length > 0))
                        ) {
                          e.next = 29
                          break
                        }
                        return (
                          console.error({ invalidFields: T }),
                          $('#bash--add-address-autocomplete-form').addClass(
                            'show-form-errors'
                          ),
                          $('#bash--input-'.concat(T[0])).focus(),
                          window.postMessage(
                            {
                              type: 'ADDRESS_VALIDATION_ERROR',
                              message:
                                'Address validation error. See invalidFields.',
                              invalidFields: T,
                            },
                            '*'
                          ),
                          e.abrupt('return')
                        )
                      case 29:
                        return (
                          (A = [parseFloat(N) || '', parseFloat(j) || '']),
                          (I = {
                            isDisposable: !1,
                            captureMethod: 'AUTO_COMPLETE_GOOGLE',
                            addressType: b,
                            receiverName: _,
                            receiverPhone: bt(O).trim(),
                            postalCode: L,
                            city: C,
                            state: P,
                            country: k,
                            businessName: w,
                            street: ''
                              .concat(null != g ? g : '', ' ')
                              .concat(null != E ? E : '')
                              .trim(),
                            neighborhood: S,
                            companyBuilding: x,
                            geoCoordinates: A,
                            geoCoordinate: A,
                          }),
                          (F = {
                            track: !0,
                            add_address_method: sn,
                            add_address_capture_method: on,
                          }),
                          (e.next = 34),
                          pn(I, F)
                        )
                      case 34:
                        if ((D = e.sent).success) {
                          e.next = 40
                          break
                        }
                        return (
                          nr(
                            '\n   <div id="bash-delivery-error" class="notification error"  >\n      <div class="notification-content">\n         <p>Address could not be saved.</p>\n      </div>\n   </div> \n'
                          ),
                          console.error('Set address error', {
                            setAddressResponse: D,
                          }),
                          e.abrupt('return')
                        )
                      case 40:
                        Er(),
                          Zt(I, !0),
                          window.postMessage({
                            action: 'setDeliveryView',
                            view: 'select-address',
                          })
                      case 43:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })),
              function () {
                var t = this,
                  r = arguments
                return new Promise(function (n, o) {
                  var i = e.apply(t, r)
                  function a(e) {
                    wn(i, n, o, a, d, 'next', e)
                  }
                  function d(e) {
                    wn(i, n, o, a, d, 'throw', e)
                  }
                  a(void 0)
                })
              })
          return function (e) {
            return t.apply(this, arguments)
          }
        })()
      const Cn = function (e) {
        var t,
          r,
          n = [
            {
              name: 'streetNumber',
              required: !0,
              label: 'Street number',
              value: (null == e ? void 0 : e.streetNumber) || '',
            },
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
            {
              name: 'businessName',
              label: 'Business name',
              required: !1,
              value: '',
              maxLength: 100,
            },
            {
              name: 'companyBuilding',
              label: 'Building/Complex and number',
              required: !1,
              value: '',
              maxLength: 100,
            },
            {
              name: 'receiverName',
              label: 'Recipient’s name',
              required: !0,
              value: '',
            },
            {
              name: 'receiverPhone',
              label: 'Recipient’s mobile number',
              required: !0,
              type: 'tel',
              helperText: 'We send shipping updates to this number.',
              minlength: 9,
              error: 'Please enter a valid phone number',
              containerClasses: 'custom-field-complement',
              idOverride: En,
            },
            { name: 'route', required: !0, value: e.route, type: 'hidden' },
            {
              name: 'neighborhood',
              required: !0,
              value: e.neighborhood,
              type: 'hidden',
            },
            { name: 'city', required: !0, value: e.city, type: 'hidden' },
            {
              name: 'postalCode',
              required: !0,
              value: e.postalCode,
              type: 'hidden',
            },
            { name: 'state', required: !0, type: 'hidden', value: mr(e.state) },
            { name: 'country', type: 'hidden', required: !0, value: 'ZAF' },
            {
              name: 'lat',
              required: !1,
              type: 'hidden',
              value: (null == e ? void 0 : e.lat) || '',
            },
            {
              name: 'lng',
              required: !1,
              type: 'hidden',
              value: (null == e ? void 0 : e.lng) || '',
            },
          ],
          o = ''
            .concat(
              null !== (t = null == e ? void 0 : e.streetNumber) && void 0 !== t
                ? t
                : '',
              ' '
            )
            .concat(
              null !== (r = null == e ? void 0 : e.route) && void 0 !== r
                ? r
                : ''
            )
            .trim()
        return '\n    '
          .concat(yn('Delivery Details', 'address-search'), '\n    ')
          .concat(
            vn(_n(_n({}, e), {}, { street: o })),
            '\n    <form id="bash--add-address-autocomplete-form" method="post">\n      '
          )
          .concat(
            n
              .map(function (e) {
                return $n(e)
              })
              .join(''),
            '\n      '
          )
          .concat(mn('Save address', 'btn-save-address'), '\n    </form>\n  ')
      }
      function Pn(e) {
        return (
          (Pn =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Pn(e)
        )
      }
      function kn() {
        kn = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == Pn(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Pn(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function Ln(e, t) {
        var r =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator']
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = jn(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            r && (e = r)
            var n = 0,
              o = function () {}
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] }
              },
              e: function (e) {
                throw e
              },
              f: o,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var i,
          a = !0,
          d = !1
        return {
          s: function () {
            r = r.call(e)
          },
          n: function () {
            var e = r.next()
            return (a = e.done), e
          },
          e: function (e) {
            ;(d = !0), (i = e)
          },
          f: function () {
            try {
              a || null == r.return || r.return()
            } finally {
              if (d) throw i
            }
          },
        }
      }
      function jn(e, t) {
        if (e) {
          if ('string' == typeof e) return Nn(e, t)
          var r = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Nn(e, t)
              : void 0
          )
        }
      }
      function Nn(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function Tn(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      function An(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function In(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? An(Object(r), !0).forEach(function (t) {
                Fn(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : An(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Fn(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Pn(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== Pn(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === Pn(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var Dn = 'bash--input-add-address-manual-form-receiverPhone',
        Mn = (function () {
          var e,
            t =
              ((e = kn().mark(function e(t) {
                var r, n, o, i, a, d, s, c, u, l, h, f, p
                return kn().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            (r = document.getElementById(
                              'bash--add-address-manual-form'
                            )),
                            (n = new FormData(r)),
                            (o = {}),
                            (i = Ln(n.entries()))
                          try {
                            for (i.s(); !(a = i.n()).done; )
                              (v = a.value),
                                (m = 2),
                                (d =
                                  (function (e) {
                                    if (Array.isArray(e)) return e
                                  })(v) ||
                                  (function (e, t) {
                                    var r =
                                      null == e
                                        ? null
                                        : ('undefined' != typeof Symbol &&
                                            e[Symbol.iterator]) ||
                                          e['@@iterator']
                                    if (null != r) {
                                      var n,
                                        o,
                                        i,
                                        a,
                                        d = [],
                                        s = !0,
                                        c = !1
                                      try {
                                        if (
                                          ((i = (r = r.call(e)).next), 0 === t)
                                        ) {
                                          if (Object(r) !== r) return
                                          s = !1
                                        } else
                                          for (
                                            ;
                                            !(s = (n = i.call(r)).done) &&
                                            (d.push(n.value), d.length !== t);
                                            s = !0
                                          );
                                      } catch (e) {
                                        ;(c = !0), (o = e)
                                      } finally {
                                        try {
                                          if (
                                            !s &&
                                            null != r.return &&
                                            ((a = r.return()), Object(a) !== a)
                                          )
                                            return
                                        } finally {
                                          if (c) throw o
                                        }
                                      }
                                      return d
                                    }
                                  })(v, m) ||
                                  jn(v, m) ||
                                  (function () {
                                    throw new TypeError(
                                      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                    )
                                  })()),
                                (s = d[0]),
                                (c = d[1]),
                                (o[s] = c.trim())
                          } catch (e) {
                            i.e(e)
                          } finally {
                            i.f()
                          }
                          if (
                            ((u = o.receiverPhone),
                            (u = bt(u).trim()),
                            (l = []),
                            o.street || l.push('street'),
                            'business' !== o.addressType ||
                              o.businessName ||
                              l.push('businessName'),
                            o.neighborhood || l.push('neighborhood'),
                            o.city || l.push('city'),
                            o.postalCode || l.push('postalCode'),
                            o.state || l.push('state'),
                            o.receiverName || l.push('receiverName'),
                            (u && Qr(u, 'ZA')) ||
                              (l.push('receiverPhone'),
                              $('#'.concat(Dn)).addClass('invalid')),
                            !(l.length > 0))
                          ) {
                            e.next = 23
                            break
                          }
                          return (
                            console.error({ invalidFields: l }),
                            $('#bash--add-address-manual-form').addClass(
                              'show-form-errors'
                            ),
                            $('#bash--input-'.concat(l[0])).focus(),
                            window.postMessage(
                              {
                                type: 'ADDRESS_VALIDATION_ERROR',
                                message:
                                  'Address validation error. See invalidFields.',
                                invalidFields: l,
                              },
                              '*'
                            ),
                            e.abrupt('return')
                          )
                        case 23:
                          return (
                            (o.receiverPhone = u),
                            (o.isDisposable = !1),
                            (h = [
                              parseFloat(o.lng) || '',
                              parseFloat(o.lat) || '',
                            ]),
                            (o.geoCoordinate = h),
                            (o.geoCoordinates = h),
                            (o.captureMethod =
                              'AUTOCOMPLETE_MANUAL' === o.formType
                                ? 'MANUAL_ATTEMPTED_AUTOCOMPLETE_GOOGLE'
                                : 'MANUAL_ENTRY'),
                            (e.prev = 29),
                            (f = {
                              track: !0,
                              add_address_method:
                                'AUTOCOMPLETE_MANUAL' === o.formType ? sn : un,
                              add_address_capture_method:
                                'AUTOCOMPLETE_MANUAL' === o.formType ? an : dn,
                            }),
                            (e.next = 33),
                            pn(o, f)
                          )
                        case 33:
                          if ((p = e.sent).success) {
                            e.next = 38
                            break
                          }
                          throw (
                            (nr(
                              '\n   <div id="bash-delivery-error" class="notification error"  >\n      <div class="notification-content">\n         <p>Address could not be saved.</p>\n      </div>\n   </div> \n'
                            ),
                            console.error('Set address error', {
                              setAddressResponse: p,
                            }),
                            new Error('Failed to set address'))
                          )
                        case 38:
                          return (e.next = 40), Zt(o, !0)
                        case 40:
                          window.postMessage({
                            action: 'setDeliveryView',
                            view: 'select-address',
                          }),
                            Er(),
                            (e.next = 48)
                          break
                        case 44:
                          ;(e.prev = 44),
                            (e.t0 = e.catch(29)),
                            console.error('Error adding new address', e.t0),
                            window.postMessage(
                              {
                                type: 'ADDRESS_VALIDATION_ERROR',
                                message:
                                  'Failed to add address. Please try again.',
                                invalidFields: ['general'],
                              },
                              '*'
                            )
                        case 48:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[29, 44]]
                )
              })),
              function () {
                var t = this,
                  r = arguments
                return new Promise(function (n, o) {
                  var i = e.apply(t, r)
                  function a(e) {
                    Tn(i, n, o, a, d, 'next', e)
                  }
                  function d(e) {
                    Tn(i, n, o, a, d, 'throw', e)
                  }
                  a(void 0)
                })
              })
          return function (e) {
            return t.apply(this, arguments)
          }
        })()
      function Rn(e) {
        return (
          (Rn =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Rn(e)
        )
      }
      function Gn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Bn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Gn(Object(r), !0).forEach(function (t) {
                Un(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Gn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Un(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Rn(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== Rn(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === Rn(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var Vn = function (e) {
        setTimeout(function () {
          var t,
            r = document.querySelectorAll('.pac-container'),
            n = document.querySelectorAll(
              ".pac-container[style*='display: none']"
            )
          ;(null == r ? void 0 : r.length) ===
            (null == n ? void 0 : n.length) &&
          (null === (t = e.target) ||
          void 0 === t ||
          null === (t = t.value) ||
          void 0 === t
            ? void 0
            : t.length) > 3
            ? $('#address-search-field-container:not(.no-results)').addClass(
                'no-results'
              )
            : $('#address-search-field-container.no-results').removeClass(
                'no-results'
              )
        }, 250)
      }
      const qn = function () {
          setTimeout(function () {
            !(function () {
              if (window.google) {
                var e = document.getElementById('bash--input-address-search')
                if (e) {
                  var t = new window.google.maps.places.Autocomplete(e, {
                    componentRestrictions: { country: 'ZA' },
                  })
                  window.google.maps.event.addListener(
                    t,
                    'place_changed',
                    function () {
                      var r = (function (e) {
                          var t = e.address_components,
                            r = e.geometry
                          if (!t || t.length < 1)
                            return { address: {}, isComplete: !1 }
                          var n,
                            o = (function (e) {
                              return function (t) {
                                var r,
                                  n = e.find(function (e) {
                                    return e.types.includes(t)
                                  })
                                return null !==
                                  (r = null == n ? void 0 : n.long_name) &&
                                  void 0 !== r
                                  ? r
                                  : null
                              }
                            })(t),
                            i = [
                              { type: 'street_number', target: 'streetNumber' },
                              { type: 'route', target: 'route' },
                              { type: 'sublocality', target: 'neighborhood' },
                              { type: 'locality', target: 'city' },
                              { type: 'postal_code', target: 'postalCode' },
                              {
                                type: 'administrative_area_level_1',
                                target: 'state',
                              },
                            ].reduce(function (e, t) {
                              return (e[t.target] = o(t.type)), e
                            }, {}),
                            a = { lat: '', lng: '' }
                          return (
                            r &&
                              ((a.lat = r.location.lat()),
                              (a.lng = r.location.lng())),
                            {
                              address: Bn(Bn({}, i), a),
                              isComplete:
                                ((n = i),
                                !!(
                                  null != n &&
                                  n.route &&
                                  null != n &&
                                  n.neighborhood &&
                                  null != n &&
                                  n.city &&
                                  null != n &&
                                  n.state &&
                                  null != n &&
                                  n.postalCode
                                )),
                            }
                          )
                        })(t.getPlace()),
                        n = r.address,
                        o = r.isComplete
                          ? 'add-address-autocomplete'
                          : 'add-address-autocomplete-manual'
                      window.postMessage({
                        action: 'setDeliveryView',
                        view: o,
                        content: n,
                      }),
                        (e.value = '')
                    }
                  ),
                    (e.value = ''),
                    null == e || e.addEventListener('keyup', Vn)
                }
              }
            })()
          }, 500)
          var e = $n({
            name: 'address-search',
            placeholder: 'Start typing an address...',
            autoComplete: 'off',
          })
          return '\n    <div class="address-search-field-container" id="address-search-field-container">\n      '
            .concat(e, '\n      ')
            .concat(
              '\n    <div id="no-address-search-results-notification" class="notification info" >\n      <span class="icon"></span>\n      <div class="notification-content">\n      We could not find your address. \n        <a class="no-results-drop-down" href="" data-view="manual-address" id="no-address-search-results">\n          Please click here to enter it manually.\n        </a>\n    </div>\n',
              '\n    </div>\n  '
            )
        },
        Yn = function (e) {
          var t = e.hasFurn,
            r = e.hasFurnOnly,
            n = e.hasFurnMixed
          return '\n  <div class="bash--delivery-container '
            .concat(
              t && 'has-furniture',
              '"\n   id="bash--delivery-container" data-view="select-address">\n    <div id="bash--shipping-messages">\n      '
            )
            .concat('<div id="bash-alert-container"></div>', '\n      ')
            .concat(
              '\n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can\'t collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n',
              '\n      '
            )
            .concat('', '\n      ')
            .concat(
              ' \n \n<div id="bash-delivery-error-container"   >\n</div>',
              '\n    </div>\n   <form id="bash--delivery-form" name="bash--delivery-form" method="post">\n\n    <section class="bash--delivery-view" data-section="select-address">\n    <div class="bash--heading">\n        <h2>Delivery address</h2>\n        <a href="#" data-view="address-search">Add address</a>\n      </div>\n      '
            )
            .concat(
              (Vt()
                .then(function (e) {
                  var t = e.data,
                    r = t.map(function (e) {
                      return Pt(e)
                    })
                  document.getElementById('bash-address-list') &&
                    (document.getElementById('bash-address-list').innerHTML =
                      r.join('')),
                    $('#back-button-select-address').hasClass('inactive') &&
                      $('#back-button-select-address').show(),
                    Ot(),
                    t.length < 1 &&
                      (window.postMessage({
                        action: 'setDeliveryView',
                        view: 'address-search',
                      }),
                      $('#bash--input-address-search').focus(),
                      $('#back-button-select-address').hide(),
                      $('#back-button-select-address').addClass('inactive'))
                })
                .catch(function (e) {
                  throw (
                    (console.error('ERROR getAddresses', e),
                    new Error('Error getAddresses', e.message))
                  )
                }),
              '\n    <div class="bash--addresses shimmer" id="bash-address-list">\n      Loading address book...\n    </div> \n  '),
              '\n    </section>\n\n    <section id="bash-delivery-options" class="shipping-method bash--delivery-view" data-section="select-address">\n      <hr>\n      <div class="bash--heading sub-heading">\n        <h3>Delivery method</h3>\n        '
            )
            .concat('', '\n      </div>\n      ')
            .concat(
              (function (e) {
                var t = e.hasFurnOnly,
                  r = 'Delivery within 3 - 5 working days'
                return (
                  e.hasFurnitureMixed &&
                    (r = 'Delivery within 3 - 10 working days'),
                  t && (r = 'Delivery within 5 - 10 working days'),
                  $('.shp-summary-package-time > span').html(r),
                  '\n  <label class="bash--delivery-option-display" >\n  '
                    .concat(
                      St({
                        name: 'delivery-option',
                        options: [{ checked: !0, value: !0 }],
                      }),
                      '\n   \n   <div id="bash--delivery-option-text" class="bash--delivery-option-text">\n      <span class="normal-delivery">\n        '
                    )
                    .concat(
                      r,
                      '\n      </span>\n   </div>\n\n  <div id="bash--delivery-fee" class="bash--delivery-fee">\n    R'
                    )
                    .concat(60, '\n  </div>\n</label>\n\n')
                    .concat('', '\n  ')
                )
              })({ hasFurnOnly: r, hasFurnitureMixed: n }),
              '\n      '
            )
            .concat(
              mn('Save & continue', 'btn-save-delivery'),
              '\n    </section>\n   </form>\n   '
            )
            .concat(
              '\n  <section class="bash--delivery-view" data-section="address-search">\n    '
                .concat(
                  yn(
                    'Add a new delivery address',
                    'select-address',
                    'back-button-select-address'
                  ),
                  '\n    '
                )
                .concat(qn(), ' \n    ')
                .concat(
                  '\n  <p style="font-size: 12px; margin: 16px 0" id="type-your-address-above">\n    Type your address above or \n    <a \n      href="" id="link-manual-address-entry"\n      data-view="manual-address"\n      onClick="document.getElementById(\'bash--input-street\').focus()"\n      style="text-decoration: underline" \n    >enter it manually</a>.\n  </p>\n',
                  '\n  </section>\n'
                ),
              '\n\n    <section \n      id="manual-address-section"\n      class="bash--delivery-view" \n      data-section="manual-address">\n    </section>\n\n    <section \n      id="edit-adress-section" \n      class="bash--delivery-view" \n      data-section="edit-address">\n    </section>\n\n    <section \n      id="add-address-autocomplete-section" \n      class="bash--delivery-view" \n      data-section="add-address-autocomplete">\n    </section>\n\n    <section \n      id="add-address-autocomplete-manual-section" \n      class="bash--delivery-view" \n      data-section="add-address-autocomplete-manual">\n    </section>\n  </div>'
            )
        }
      function Hn(e) {
        return (
          (Hn =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Hn(e)
        )
      }
      function Zn() {
        Zn = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == Hn(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Hn(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function Wn(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Kn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Wn(Object(r), !0).forEach(function (t) {
                Jn(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Wn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function Jn(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== Hn(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== Hn(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === Hn(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function Xn(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      function Qn(e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (n, o) {
            var i = e.apply(t, r)
            function a(e) {
              Xn(i, n, o, a, d, 'next', e)
            }
            function d(e) {
              Xn(i, n, o, a, d, 'throw', e)
            }
            a(void 0)
          })
        }
      }
      var zn = 'bash--input-edit-adress-form-receiverPhone',
        eo = (function () {
          var e = Qn(
            Zn().mark(function e(t) {
              var r, n, o, i, a, d, s
              return Zn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (t.preventDefault(),
                        (r = document.getElementById(
                          'bash--edit-address-form'
                        )),
                        (n = new FormData(r)),
                        (o = n.get('addressId')),
                        (i = n.get('addressName')),
                        (a = n.get('receiverName')),
                        (d = n.get('receiverPhone')),
                        (d = bt(d).trim()),
                        (s = []),
                        a || s.push('receiverName'),
                        (d && Qr(d, 'ZA')) ||
                          (s.push('receiverPhone'),
                          $('#'.concat(zn)).addClass('invalid')),
                        !(s.length > 0))
                      ) {
                        e.next = 17
                        break
                      }
                      return (
                        console.error({ invalidFields: s }),
                        $('#bash--edit-address-form').addClass(
                          'show-form-errors'
                        ),
                        $('#bash--input-'.concat(s[0])).focus(),
                        window.postMessage(
                          {
                            type: 'ADDRESS_VALIDATION_ERROR',
                            message:
                              'Address validation error. See invalidFields.',
                            invalidFields: s,
                          },
                          '*'
                        ),
                        e.abrupt('return')
                      )
                    case 17:
                      Wt(i).then(
                        (function () {
                          var e = Qn(
                            Zn().mark(function e(t) {
                              var r, n, s
                              return Zn().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = Kn(
                                          Kn({}, t),
                                          {},
                                          {
                                            addressId: o,
                                            addressName: i,
                                            receiverName: a,
                                            receiverPhone: d,
                                            geoCoordinates:
                                              (null == t
                                                ? void 0
                                                : t.geoCoordinate) || [],
                                            isDisposable: !0,
                                          }
                                        )),
                                        (n = {
                                          track: !0,
                                          add_address_method: cn,
                                          add_address_capture_method:
                                            null != t && t.captureMethod
                                              ? t.captureMethod.toLowerCase()
                                              : null,
                                        }),
                                        (e.next = 4),
                                        pn(r, n)
                                      )
                                    case 4:
                                      if ((s = e.sent).success) {
                                        e.next = 10
                                        break
                                      }
                                      return (
                                        nr(
                                          '\n   <div id="bash-delivery-error" class="notification error"  >\n      <div class="notification-content">\n         <p>Address could not be saved.</p>\n      </div>\n   </div> \n'
                                        ),
                                        console.error('Set address error', {
                                          setAddressResponse: s,
                                        }),
                                        e.abrupt('return')
                                      )
                                    case 10:
                                      Er(),
                                        Zt(r, !1),
                                        window.postMessage({
                                          action: 'setDeliveryView',
                                          view: 'select-address',
                                        })
                                    case 13:
                                    case 'end':
                                      return e.stop()
                                  }
                              }, e)
                            })
                          )
                          return function (t) {
                            return e.apply(this, arguments)
                          }
                        })()
                      )
                    case 18:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })()
      const to = function (e) {
          var t,
            r,
            n = [
              { name: 'addressId', type: 'hidden', value: e.id, required: !1 },
              {
                name: 'addressName',
                type: 'hidden',
                value: e.addressName,
                required: !1,
                maxLength: 50,
              },
              {
                name: 'receiverName',
                label: "Recipient's name and surname",
                required: !0,
                value:
                  null !== (t = null == e ? void 0 : e.receiverName) &&
                  void 0 !== t
                    ? t
                    : '',
              },
              {
                name: 'receiverPhone',
                label: 'Recipient’s mobile number',
                required: !0,
                type: 'tel',
                value:
                  null !== (r = null == e ? void 0 : e.receiverPhone) &&
                  void 0 !== r
                    ? r
                    : '',
                helperText: 'We send shipping updates to this number.',
                minlength: 9,
                error: 'Please enter a valid phone number',
                containerClasses: 'custom-field-complement',
                idOverride: zn,
              },
            ]
          return '\n    '
            .concat(yn('Address Details', 'select-address'), '\n    ')
            .concat(
              vn(e),
              '\n    <form id="bash--edit-address-form" method="post">\n      '
            )
            .concat(
              n
                .map(function (e) {
                  return $n(e)
                })
                .join(''),
              '\n       '
            )
            .concat(
              '\n  <div style="display: flex; align-items: center; justify-content: center;  margin-top: 24px;">\n    <svg style="min-width: 24px;" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M18.4844 10.0001V10C18.4844 8.32195 17.9868 6.68158 17.0545 5.28633C16.1222 3.89109 14.7972 2.80362 13.2468 2.16146C11.6965 1.5193 9.99059 1.35128 8.34478 1.67865C6.69898 2.00602 5.18721 2.81408 4.00065 4.00064C2.81408 5.1872 2.00603 6.69897 1.67865 8.34478C1.35128 9.99059 1.5193 11.6965 2.16146 13.2468C2.80363 14.7971 3.89109 16.1222 5.28634 17.0545C6.68159 17.9868 8.32195 18.4844 10 18.4844H10.0001C12.2495 18.4819 14.406 17.5872 15.9966 15.9966C17.5872 14.406 18.4819 12.2495 18.4844 10.0001ZM11.2656 14.5C11.2656 14.6368 11.2113 14.7679 11.1146 14.8646C11.0179 14.9613 10.8868 15.0156 10.75 15.0156C10.4143 15.0156 10.0924 14.8823 9.85507 14.6449C9.61772 14.4076 9.48438 14.0857 9.48438 13.75V10C9.48438 9.93784 9.45969 9.87823 9.41573 9.83427C9.37178 9.79032 9.31216 9.76562 9.25 9.76562C9.11325 9.76562 8.9821 9.7113 8.8854 9.6146C8.7887 9.5179 8.73438 9.38675 8.73438 9.25C8.73438 9.11325 8.7887 8.9821 8.8854 8.8854C8.9821 8.7887 9.11325 8.73438 9.25 8.73438C9.58567 8.73438 9.90759 8.86772 10.1449 9.10507C10.3823 9.34242 10.5156 9.66434 10.5156 10V13.75C10.5156 13.8122 10.5403 13.8718 10.5843 13.9157C10.6282 13.9597 10.6878 13.9844 10.75 13.9844C10.8868 13.9844 11.0179 14.0387 11.1146 14.1354C11.2113 14.2321 11.2656 14.3632 11.2656 14.5ZM10.1198 6.61553C9.97335 6.71339 9.80115 6.76562 9.625 6.76562C9.3888 6.76562 9.16226 6.67179 8.99524 6.50477C8.82821 6.33774 8.73438 6.11121 8.73438 5.875C8.73438 5.69885 8.78661 5.52666 8.88448 5.3802C8.98234 5.23373 9.12144 5.11958 9.28418 5.05217C9.44692 4.98476 9.62599 4.96712 9.79876 5.00149C9.97152 5.03585 10.1302 5.12068 10.2548 5.24523C10.3793 5.36979 10.4642 5.52848 10.4985 5.70125C10.5329 5.87401 10.5152 6.05309 10.4478 6.21583C10.3804 6.37857 10.2663 6.51766 10.1198 6.61553ZM19.5156 10.0001C19.5156 11.882 18.9575 13.7218 17.912 15.2866C16.8664 16.8514 15.3802 18.0711 13.6415 18.7913C11.9027 19.5115 9.98945 19.6999 8.1436 19.3328C6.29775 18.9656 4.60223 18.0593 3.27144 16.7286C1.94066 15.3978 1.03438 13.7023 0.667219 11.8564C0.300057 10.0106 0.488498 8.09728 1.20871 6.35853C1.92893 4.61978 3.14857 3.13364 4.71341 2.08805C6.27823 1.04246 8.11797 0.48438 9.99998 0.484375C12.5228 0.487345 14.9414 1.49084 16.7253 3.27473C18.5092 5.05862 19.5127 7.47725 19.5156 10.0001Z" stroke="#040404" stroke-opacity="0.75" stroke-width="0.09375"/>\n    </svg>\n    <p style="margin-left: 8px; margin-bottom: 0;">\n      Changing the recipient information will only reflect on this order and will not affect your address book.\n    </p>\n  </div>\n',
              '\n      '
            )
            .concat(
              '\n  <div\n    id="address-button-container"\n  >\n    '
                .concat(
                  '\n  <button\n    class="btn btn-small"\n    id="btn-delete-address"\n  >\n    Delete\n  </button>\n',
                  '\n    '
                )
                .concat(mn('Save', 'btn-save-address'), '\n  </div>\n'),
              '\n    </form>\n  '
            )
        },
        ro = function (e) {
          var t,
            r,
            n,
            o,
            i = e.hasTV,
            a = e.hasSim,
            d =
              '\n    <div id="tv-license-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>TV license information needed</h3>\n        <p class="tfg-custom-subtitle">Please provide your ID number to validate your TV Licence.</p>\n      </div>\n      '.concat(
                '\n    '.concat(
                  $n({
                    name: 'tv_tvID',
                    label: 'SA ID number',
                    required: !0,
                    value: '',
                  }),
                  '\n  '
                ),
                '\n    </div>\n  '
              ),
            s =
              '\n    <div id="rica-form">\n      <hr>\n      <div class="bash--heading sub-heading heading-with-description">\n        <h3>Rica information required</h3>\n        <p class="tfg-custom-subtitle">\n          To RICA your SIM card, provide your SA ID (or foreign passport) number and your address as\n          it appears on a valid proof of residence.\n        </p> \n      </div>\n        '.concat(
                ((t =
                  window.vtexjs.checkout.orderForm.shippingData
                    .selectedAddress),
                (r = [
                  {
                    name: 'rica_fullName',
                    label: 'Full name and surname',
                    required: !0,
                    value: yr({ type: 'delivery' }) || '',
                  },
                  {
                    name: 'rica_streetAddress',
                    label: 'Street address',
                    required: !0,
                    value: (null == t ? void 0 : t.street) || '',
                  },
                  {
                    name: 'rica_suburb',
                    label: 'Suburb',
                    value: (null == t ? void 0 : t.neighborhood) || '',
                  },
                  {
                    name: 'rica_city',
                    label: 'City',
                    required: !0,
                    value: (null == t ? void 0 : t.city) || '',
                  },
                  {
                    name: 'rica_postalCode',
                    label: 'Postal code',
                    value: (null == t ? void 0 : t.postalCode) || '',
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
                  {
                    type: 'note',
                    required: !1,
                    name: 'rica-country-display',
                    label: 'Country',
                    value: 'South Africa',
                  },
                  {
                    type: 'hidden',
                    required: !0,
                    name: 'country',
                    value: 'ZAF',
                  },
                ]),
                (n = [
                  {
                    name: 'rica_idOrPassport',
                    label: 'ID or Passport number',
                    required: !0,
                    value: '',
                  },
                  {
                    name: 'rica_sameAddress',
                    label: 'Residential address the same as delivery address',
                    type: 'checkbox',
                    checked: !0,
                    required: !1,
                  },
                ]
                  .map(function (e) {
                    return $n(e)
                  })
                  .join('')),
                (o = r
                  .map(function (e) {
                    return $n(e)
                  })
                  .join('')),
                '\n    '
                  .concat(
                    n,
                    '\n    <div class="rica-conditional-fields hide">\n    '
                  )
                  .concat(o, '\n    </div>\n  ')),
                '\n    </div>\n    '
              )
          return '\n  <section class="bash--extra-fields bash--delivery-view" data-section="select-address">\n    '
            .concat(i ? d : '', '\n    ')
            .concat(a ? s : '', '\n  </section>')
        }
      function no(e) {
        return (
          (no =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          no(e)
        )
      }
      function oo() {
        oo = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == no(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(no(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function io(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      const ao = (function () {
        var e,
          t =
            ((e = oo().mark(function e(t) {
              var r, n, o, i, a, d, s
              return oo().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), Wt(t)
                      case 3:
                        return (
                          (o = e.sent),
                          (e.next = 6),
                          Qt(o).catch(function (e) {
                            console.error('Error deleting address from DB:', e)
                          })
                        )
                      case 6:
                        return (
                          (e.next = 8),
                          zt(t).catch(function (e) {
                            console.error(
                              'Error deleting address from OrderForm:',
                              e
                            )
                          })
                        )
                      case 8:
                        return (
                          (i =
                            null !==
                              (r =
                                null !== (n = o.addressId) && void 0 !== n
                                  ? n
                                  : o.id) && void 0 !== r
                              ? r
                              : ''),
                          (e.next = 11),
                          er(i).catch(function (e) {
                            console.error(
                              'Error deleting address from MasterData:',
                              e
                            )
                          })
                        )
                      case 11:
                        return (e.next = 13), Vt()
                      case 13:
                        ;(a = e.sent),
                          (d = a.data),
                          window.postMessage({
                            action: 'setDeliveryView',
                            view: 'select-address',
                          }),
                          (s = d
                            .map(function (e) {
                              return Pt(e)
                            })
                            .join('')),
                          document.getElementById('bash-address-list') &&
                            (document.getElementById(
                              'bash-address-list'
                            ).innerHTML = s),
                          Or('Address deleted successfully.'),
                          (e.next = 25)
                        break
                      case 21:
                        ;(e.prev = 21),
                          (e.t0 = e.catch(0)),
                          Or('Error deleting address.'),
                          console.error('Error deleting address:', e.t0)
                      case 25:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[0, 21]]
              )
            })),
            function () {
              var t = this,
                r = arguments
              return new Promise(function (n, o) {
                var i = e.apply(t, r)
                function a(e) {
                  io(i, n, o, a, d, 'next', e)
                }
                function d(e) {
                  io(i, n, o, a, d, 'throw', e)
                }
                a(void 0)
              })
            })
        return function (e) {
          return t.apply(this, arguments)
        }
      })()
      var so = function () {
        if (
          window.vtexjs.checkout.orderForm.clientProfileData &&
          window.vtexjs.checkout.orderForm.shippingData
        ) {
          var e = window.vtexjs.checkout.orderForm.shippingData,
            t = e.selectedAddresses,
            r = e.logisticsInfo
          null != t &&
            t[0] &&
            r[0] &&
            (t[0].addressType === o
              ? (function () {
                  var e = yt().formatPhoneNumber
                  if (
                    null ===
                    document.getElementById('summary-collection-recipient')
                  ) {
                    var t =
                        window.vtexjs.checkout.orderForm.shippingData
                          .selectedAddresses[0].receiverName,
                      r = Xt(s),
                      n = (null == r ? void 0 : r.phone) || null,
                      o = []
                    t && o.push(t),
                      n && o.push(e(n, 'ZA').trim()),
                      $(
                        'div.shp-summary-group-title.vtex-omnishipping-1-x-SummaryItemAddress'
                      ).append(
                        '<div id="summary-collection-recipient">'.concat(
                          o.join(' - '),
                          '<div>'
                        )
                      )
                  }
                })()
              : (function () {
                  var e,
                    t,
                    r,
                    n,
                    o,
                    i = yt().formatPhoneNumber
                  if (
                    null ===
                    document.getElementById('summary-delivery-recipient')
                  ) {
                    document.getElementById('punt-collect') ||
                      $('.delivery-active .shp-summary-group').append(
                        ((n = ''),
                        (o =
                          null === (e = window) ||
                          void 0 === e ||
                          null === (e = e.vtexjs) ||
                          void 0 === e ||
                          null === (e = e.checkout) ||
                          void 0 === e ||
                          null === (e = e.orderForm) ||
                          void 0 === e
                            ? void 0
                            : e.totalizers),
                        (null === (t = window) ||
                        void 0 === t ||
                        null === (t = t.vtexjs) ||
                        void 0 === t ||
                        null === (t = t.checkout.orderForm) ||
                        void 0 === t
                          ? void 0
                          : t.value) -
                          ((null == o ||
                          null ===
                            (r = o.find(function (e) {
                              return 'Discounts' === e.id
                            })) ||
                          void 0 === r
                            ? void 0
                            : r.value) || 0) <
                          5e4 &&
                          ((n = ' for less'),
                          (n = ' for R'.concat((25).toFixed(0)))),
                        '<div id="punt-collect">\n  <span class="punt-non-furniture">\n    Or choose to <span class="blue-link">Collect</span> from 800+ Bash collect points'.concat(
                          n,
                          '.\n  </span>\n  <span class="punt-furniture-collect">\n    Or choose to <span class="blue-link">Collect</span> from a warehouse for <strong>free</strong>.  \n  </span>\n  </div>'
                        ))
                      )
                    var a =
                        window.vtexjs.checkout.orderForm.shippingData
                          .selectedAddresses[0],
                      d = a.receiverName,
                      s = a.neighborhood,
                      u = a.street,
                      l =
                        'div.shp-summary-group-address.vtex-omnishipping-1-x-SummaryItemAddress',
                      h = Xt(c),
                      f = {}
                    try {
                      f = JSON.parse(h.jsonString)
                    } catch (e) {
                      console.error(
                        "Couldn't parse deliverContext",
                        null == e ? void 0 : e.message
                      )
                    }
                    var p = f,
                      v = p.receiverPhone,
                      m = p.businessName,
                      y = []
                    d && y.push(d),
                      v && y.push(i(v, 'ZA').trim()),
                      $(l).append(
                        '\n    <div id="summary-delivery-recipient">\n      '.concat(
                          y.join(' - '),
                          '\n    <div>\n  '
                        )
                      )
                    var g = u
                    m && (g = ''.concat(m, ', ').concat(u)),
                      $(l).find('.street').html(g),
                      s && $(l).find('.city').prepend(''.concat(s, ', ')),
                      $(l).find('.postalCode-delimiter').html(', ')
                  }
                })())
        }
      }
      function co(e) {
        return (
          (co =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          co(e)
        )
      }
      function uo() {
        uo = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == co(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(co(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function lo(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? lo(Object(r), !0).forEach(function (t) {
                fo(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : lo(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function fo(e, t, r) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== co(e) || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t)
                if ('object' !== co(n)) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                )
              }
              return String(e)
            })(e, 'string')
            return 'symbol' === co(t) ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function po(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      const $o = (function () {
        var e,
          t =
            ((e = uo().mark(function e(t) {
              var r, o, i, s, c, u, l, h, f, p, v, m, y, g, b, w, x
              return uo().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (t.preventDefault(),
                        (r = window.vtexjs.checkout.orderForm.items),
                        (o =
                          window.vtexjs.checkout.orderForm.shippingData
                            .address),
                        (i = _t(r)),
                        (s = i.hasTVs),
                        (c = i.hasSimCards),
                        $('select').change(),
                        (u = {}),
                        (l = "[name='selected-address']:checked"),
                        !($(l).length < 1))
                      ) {
                        e.next = 11
                        break
                      }
                      return (
                        $('html, body').animate(
                          {
                            scrollTop: $(
                              '#bash-delivery-error-container'
                            ).offset().top,
                          },
                          400
                        ),
                        $('#bash-delivery-error-container').html(
                          ' \n<div id="bash-delivery-error" class="notification error"  >\n   <div class="notification-content">\n      <p>Select a delivery address.</p>\n   </div>  \n</div>  \n'
                        ),
                        e.abrupt('return')
                      )
                    case 11:
                      return $r(), (e.next = 14), Wt($(l).val())
                    case 14:
                      return (
                        (h = e.sent),
                        (u = ho(ho({}, o), h)),
                        (e.next = 18),
                        pn(u, { track: !1 })
                      )
                    case 18:
                      if (e.sent.success) {
                        e.next = 25
                        break
                      }
                      return (
                        nr(rr(u)),
                        console.error(
                          'Delivery Form - Address Validation error'
                        ),
                        Ot(),
                        e.abrupt('return')
                      )
                    case 25:
                      if (((f = {}), (p = {}), !c)) {
                        e.next = 34
                        break
                      }
                      for (v = ar, m = 0; m < v.length; m++)
                        'sameAddress' === v[m] &&
                          ((y = $('#bash--input-'.concat(v[m])).is(':checked')),
                          (f[v[m]] = y)),
                          (f[v[m]] =
                            $('#bash--input-rica_'.concat(v[m])).val() || '')
                      return (e.next = 32), Jt(a, f, !0)
                    case 32:
                      ;(g = e.sent), console.info({ ricaDataSent: g })
                    case 34:
                      if (!s) {
                        e.next = 41
                        break
                      }
                      for (b = dr, w = 0; w < b.length; w++)
                        o[b[w]] ||
                          (u[b[w]] = $('#bash--input-tv_'.concat(b[w])).val()),
                          (p[b[w]] =
                            $('#bash--input-tv_'.concat(b[w])).val() || '')
                      return (e.next = 39), Jt(d, p)
                    case 39:
                      ;(x = e.sent), console.info({ tvDataSent: x })
                    case 41:
                      return (e.next = 43), Zt(u, !1)
                    case 43:
                      $('.bash--delivery-container').css('display', 'none'),
                        (window.location.hash = n),
                        Ot()
                    case 46:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })),
            function () {
              var t = this,
                r = arguments
              return new Promise(function (n, o) {
                var i = e.apply(t, r)
                function a(e) {
                  po(i, n, o, a, d, 'next', e)
                }
                function d(e) {
                  po(i, n, o, a, d, 'throw', e)
                }
                a(void 0)
              })
            })
        return function (e) {
          return t.apply(this, arguments)
        }
      })()
      function vo(e) {
        return (
          (vo =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          vo(e)
        )
      }
      function mo() {
        mo = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == vo(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(vo(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function yo(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      function go(e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (n, o) {
            var i = e.apply(t, r)
            function a(e) {
              yo(i, n, o, a, d, 'next', e)
            }
            function d(e) {
              yo(i, n, o, a, d, 'throw', e)
            }
            a(void 0)
          })
        }
      }
      var bo = (function () {
        var e = {
            view: 'list',
            hasFurn: !1,
            hasTVs: !1,
            hasSim: !1,
            hasFurnMixed: !1,
            hasFurnOnly: !1,
          },
          r = (function () {
            var e = go(
              mo().mark(function e(t) {
                var r
                return mo().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Wt(t)
                      case 2:
                        ;(r = e.sent),
                          (document.querySelector(
                            '#edit-adress-section'
                          ).innerHTML = to(r)),
                          gt('#'.concat(zn))
                      case 5:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          i = (function () {
            var e = go(
              mo().mark(function e(t) {
                return mo().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        ;(document.querySelector(
                          '#add-address-autocomplete-section'
                        ).innerHTML = Cn(t)),
                          gt('#'.concat(En))
                      case 2:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          s = (function () {
            var e = go(
              mo().mark(function e(t, r) {
                var n
                return mo().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        ;(n =
                          'MANUAL' === t
                            ? '#manual-address-section'
                            : '#add-address-autocomplete-manual-section'),
                          (document.querySelector(n).innerHTML =
                            ((o = void 0),
                            (o = (function (e) {
                              var t,
                                r,
                                n = e.type,
                                o = e.address,
                                i = 'AUTOCOMPLETE_MANUAL' === n,
                                a = i && null != o && o.lng ? o.lng : '',
                                d = i && null != o && o.lat ? o.lat : '',
                                s = i
                                  ? ''
                                      .concat(
                                        null !==
                                          (t =
                                            null == o
                                              ? void 0
                                              : o.streetNumber) && void 0 !== t
                                          ? t
                                          : '',
                                        ' '
                                      )
                                      .concat(
                                        null !==
                                          (r = null == o ? void 0 : o.route) &&
                                          void 0 !== r
                                          ? r
                                          : ''
                                      )
                                      .trim()
                                  : '',
                                c =
                                  i && null != o && o.neighborhood
                                    ? null == o
                                      ? void 0
                                      : o.neighborhood
                                    : '',
                                u = i && null != o && o.city ? o.city : '',
                                l =
                                  i && null != o && o.postalCode
                                    ? o.postalCode
                                    : '',
                                h = i && null != o && o.state ? mr(o.state) : ''
                              return [
                                {
                                  name: 'formType',
                                  type: 'hidden',
                                  value: e.type,
                                  required: !1,
                                },
                                {
                                  name: 'addressId',
                                  type: 'hidden',
                                  value: '',
                                  required: !1,
                                },
                                {
                                  name: 'addressName',
                                  type: 'hidden',
                                  value: '',
                                  required: !1,
                                  maxLength: 50,
                                },
                                {
                                  name: 'lat',
                                  required: !1,
                                  type: 'hidden',
                                  value: d,
                                },
                                {
                                  name: 'lng',
                                  required: !1,
                                  type: 'hidden',
                                  value: a,
                                },
                                {
                                  type: 'hidden',
                                  required: !0,
                                  name: 'country',
                                  value: 'ZAF',
                                },
                                {
                                  name: 'addressType',
                                  label: 'Address type',
                                  required: !0,
                                  type: 'radio',
                                  options: [
                                    {
                                      value: 'residential',
                                      label: 'Residential',
                                      checked: !0,
                                    },
                                    { value: 'business', label: 'Business' },
                                  ],
                                },
                                {
                                  name: 'businessName',
                                  label: 'Business name',
                                  required: !1,
                                  value: '',
                                  maxLength: 100,
                                },
                                {
                                  name: 'companyBuilding',
                                  label: 'Building/Complex and number',
                                  required: !1,
                                  value: '',
                                  maxLength: 100,
                                },
                                {
                                  name: 'street',
                                  label: 'Street address',
                                  required: !0,
                                  value: s,
                                },
                                {
                                  name: 'neighborhood',
                                  label: 'Suburb',
                                  value: c,
                                  maxLength: 750,
                                  required: !0,
                                },
                                {
                                  name: 'city',
                                  label: 'City',
                                  required: !0,
                                  value: u,
                                  maxLength: 750,
                                },
                                {
                                  name: 'postalCode',
                                  label: 'Postal code',
                                  value: l,
                                  type: 'tel',
                                  minlength: 4,
                                  maxLength: 4,
                                  required: !0,
                                },
                                {
                                  type: i ? 'hidden' : 'note',
                                  required: !1,
                                  name: 'suburb-postal-reminder',
                                  value:
                                    'Make sure to specify the correct Suburb and Postal code so we can easily find your address.',
                                },
                                {
                                  name: 'state',
                                  label: 'Province',
                                  type: 'dropdown',
                                  required: !0,
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
                                  ].map(function (e) {
                                    return In(
                                      In({}, e),
                                      {},
                                      { selected: e.value === h }
                                    )
                                  }),
                                },
                                {
                                  name: 'receiverName',
                                  label: "Recipient's name",
                                  required: !0,
                                  value: yr({ type: 'delivery' }),
                                },
                                {
                                  name: 'receiverPhone',
                                  label: "Recipient's mobile number",
                                  required: !0,
                                  type: 'tel',
                                  helperText:
                                    'We send shipping updates to this number.',
                                  minlength: 9,
                                  error: 'Please enter a valid phone number',
                                  containerClasses: 'custom-field-complement',
                                  idOverride: Dn,
                                },
                              ]
                            })({ type: t, address: r })),
                            '\n    '
                              .concat(
                                yn(
                                  'Add a new delivery address',
                                  'select-address'
                                ),
                                '\n    <form id="bash--add-address-manual-form" method="post">\n      '
                              )
                              .concat(
                                o
                                  .map(function (e) {
                                    return $n(e)
                                  })
                                  .join(''),
                                '\n      '
                              )
                              .concat(
                                mn('Save address', 'btn-save-address'),
                                '\n    </form>\n  '
                              ))),
                          gt('#'.concat(Dn))
                      case 3:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t, r) {
              return e.apply(this, arguments)
            }
          })(),
          c = function () {
            if (
              (window.location.hash === t &&
                $('.shipping-summary-info').length &&
                'Waiting for more information' ===
                  $('.shipping-summary-info').text() &&
                ((window.location.hash = '#/profile'),
                Nr({
                  action: 'stepRedirect',
                  label: 'redirectShippingToProfile',
                  description:
                    'User redirect to profile - "Waiting for more information" error.',
                })),
              !$('#bash--delivery-container').length)
            ) {
              if (window.vtexjs.checkout.orderForm) {
                var r,
                  n =
                    null === (r = window.vtexjs.checkout.orderForm) ||
                    void 0 === r
                      ? void 0
                      : r.items,
                  o = _t(n),
                  i = o.hasFurniture,
                  a = o.hasTVs,
                  d = o.hasSimCards,
                  s = o.hasFurnitureMixed,
                  c = o.hasFurnitureOnly
                ;(e.hasFurn = i),
                  (e.hasTVs = a),
                  (e.hasSim = d),
                  (e.hasFurnOnly = c),
                  (e.hasFurnMixed = s)
              }
              $('.shipping-data .box-step').append(
                Yn({ hasFurnOnly: e.hasFurnOnly, hasFurnMixed: e.hasFurnMixed })
              ),
                e.hasFurn
                  ? $('#shipping-data:not(.has-furniture)').addClass(
                      'has-furniture'
                    )
                  : $('#shipping-data.has-furniture').removeClass(
                      'has-furniture'
                    ),
                (e.hasFurn || e.hasSim || e.hasTVs) &&
                  ($('#bash-delivery-options').before(
                    ro({ hasSim: e.hasSim, hasTV: e.hasTVs })
                  ),
                  e.hasSim && br(),
                  e.hasTVs && wr()),
                $('select, input').on('invalid', function () {
                  var e = this
                  $(e)[0].setCustomValidity(' '),
                    $(e).parents('form').addClass('show-form-errors'),
                    $(e).off('change keyUp'),
                    $(e).on('change keyUp', function () {
                      $(e)[0].setCustomValidity('')
                    })
                })
            }
          }
        return (
          $(window).unload(
            go(
              mo().mark(function e() {
                return mo().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        Kt()
                      case 1:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
          ),
          $(document).ready(function () {
            Kt(),
              window.location.hash === t
                ? (c(),
                  $('.bash--delivery-container.hide').removeClass('hide'),
                  $('.bash--delivery-container').css('display', 'flex'))
                : $('.bash--delivery-container:not(.hide)').length &&
                  ($('.bash--delivery-container:not(.hide)').addClass('hide'),
                  $('.bash--delivery-container').css('display', 'none'))
          }),
          $(window).on('hashchange', function () {
            console.info('hashchange TO SHIPPING'),
              window.location.hash === t
                ? (setTimeout(function () {
                    console.info('SCROLL TO SHIPPING'),
                      document
                        .getElementById('shipping-data')
                        .scrollIntoView({ behavior: 'smooth' })
                  }, 500),
                  c(),
                  xr(),
                  $('.bash--delivery-container').css('display', 'flex'),
                  $('.bash--delivery-container.hide').removeClass('hide'))
                : $('.bash--delivery-container:not(.hide)').length &&
                  ($('.bash--delivery-container:not(.hide)').addClass('hide'),
                  $('.bash--delivery-container').css('display', 'none'))
          }),
          $(window).on('orderFormUpdated.vtex', function () {
            var e,
              r,
              i =
                null === (e = window.vtexjs.checkout.orderForm) || void 0 === e
                  ? void 0
                  : e.items,
              s =
                null === (r = window.vtexjs.checkout.orderForm.shippingData) ||
                void 0 === r ||
                null === (r = r.address) ||
                void 0 === r
                  ? void 0
                  : r.addressType,
              u = _t(i),
              l = u.hasTVs,
              h = u.hasSimCards,
              f = u.hasFurnitureMixed,
              p = window.vtexjs.checkout.orderForm.messages
            if (window.location.hash === t) {
              var v = p.filter(function (e) {
                return 'error' === e.status
              })
              v && _r(v)
            }
            if (
              s === o ||
              $('#shipping-option-pickup-in-point').hasClass(
                'shp-method-option-active'
              )
            ) {
              if (l || h || f)
                return (
                  window.location.hash !== t && (window.location.hash = t),
                  void setTimeout(function () {
                    var e
                    return null ===
                      (e = document.getElementById(
                        'shipping-option-delivery'
                      )) || void 0 === e
                      ? void 0
                      : e.click()
                  }, 2e3)
                )
              $('#shipping-data:not(collection-active)').addClass(
                'collection-active'
              ),
                $('.delivery-active').removeClass('delivery-active')
            } else
              c(),
                $('#shipping-data:not(delivery-active)').addClass(
                  'delivery-active'
                ),
                $('.collection-active').removeClass('collection-active')
            xr(),
              (function () {
                var e
                if (window.vtexjs.checkout.orderForm.totalizers) {
                  var t = (
                      window.vtexjs.checkout.orderForm.totalizers.find(
                        function (e) {
                          return 'Shipping' === e.id
                        }
                      ) || {
                        value:
                          (null === (e = window.vtexjs.checkout.orderForm) ||
                          void 0 === e ||
                          null === (e = e.shippingData) ||
                          void 0 === e ||
                          null === (e = e.address) ||
                          void 0 === e
                            ? void 0
                            : e.addressType) === o
                            ? 2500
                            : 6e3,
                      }
                    ).value,
                    r = 'Free'
                  t > 0 &&
                    (r = 'R'.concat((t / 100).toFixed(2).replace('.00', ''))),
                    $('#bash--delivery-fee').length > 0 &&
                      (document.getElementById('bash--delivery-fee').innerHTML =
                        r)
                }
              })(),
              so(),
              window.location.hash !== n ||
                (function () {
                  var e,
                    t =
                      null === (e = window.vtexjs.checkout.orderForm) ||
                      void 0 === e
                        ? void 0
                        : e.items,
                    r = _t(t),
                    n = r.hasTVs,
                    o = r.hasSimCards,
                    i = !0
                  if ((n && (Xt(d).tvID || (i = !1)), o)) {
                    var s = Xt(a)
                    ;(s.idOrPassport && s.streetAddress && s.postalCode) ||
                      (i = !1)
                  }
                  return i
                })() ||
                (Et(),
                (window.location.hash = t),
                Nr({
                  action: 'stepRedirect',
                  label: 'redirectPaymentToShipping',
                  description:
                    'User redirect to shipping because Extra Fields are invalid.',
                }))
          }),
          $(document).on('click', 'a[data-view]', function (e) {
            e.preventDefault()
            var t = $(this).data('view'),
              r = decodeURIComponent($(this).data('content'))
            $('#bash-delivery-error-container').html(''),
              window.postMessage({
                action: 'setDeliveryView',
                view: t,
                content: r,
                captureMethod: $(this).data('capture-method') || null,
              })
          }),
          $(document).on(
            'change',
            'input[type="radio"][name="selected-address"]',
            function () {
              var e,
                t = (function (e) {
                  try {
                    return JSON.parse(decodeURIComponent(e))
                  } catch (e) {
                    return
                  }
                })($(this).parents('.bash--address-listing').data('address'))
              document.forms['bash--delivery-form'] &&
                (document.forms['bash--delivery-form'].reset(),
                $('#bash--input-lat').val(''),
                $('#bash--input-lng').val(''),
                document.forms['bash--delivery-form'].classList.remove(
                  'show-form-errors'
                )),
                t &&
                  Wt(t.addressName)
                    .then(
                      (function () {
                        var r = go(
                          mo().mark(function r(n) {
                            var o
                            return mo().wrap(function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (
                                      $(
                                        'input[type="radio"][name="selected-address"]:checked'
                                      ).attr('checked', !1),
                                      (e = o = n || t),
                                      (r.next = 5),
                                      pn(o, { track: !1 })
                                    )
                                  case 5:
                                    r.sent.success ||
                                      (nr(rr(o)),
                                      console.error(
                                        'Select Address - Set Address Failure'
                                      ))
                                  case 8:
                                  case 'end':
                                    return r.stop()
                                }
                            }, r)
                          })
                        )
                        return function (e) {
                          return r.apply(this, arguments)
                        }
                      })()
                    )
                    .catch(function (t) {
                      console.error(
                        'Could not get address - address selection',
                        null == t ? void 0 : t.message
                      ),
                        nr(rr(e)),
                        console.error('Select Address - Set Address Failure')
                    })
            }
          ),
          $(document).on(
            'change',
            '#bash--input-rica_sameAddress',
            function () {
              var e
              this.checked
                ? $('.rica-conditional-fields').slideUp(function () {
                    return br()
                  })
                : ((e = $('#bash--input-rica_idOrPassport').val()),
                  gr(
                    {
                      idOrPassport: null != e ? e : '',
                      fullName: '',
                      streetAddress: '',
                      suburb: '',
                      city: '',
                      postalCode: '',
                      province: '',
                    },
                    ar,
                    'rica_',
                    !0
                  ),
                  $('.rica-conditional-fields').slideDown(function () {
                    return $('#bash--input-rica_fullName').focus()
                  }))
            }
          ),
          $(document).on('change', 'input[name="addressType"]', function () {
            $(this).is(':checked') &&
              ('business' === $(this).val()
                ? (!0,
                  true,
                  $('.bash--textfield-businessName')
                    .removeClass('optional')
                    .slideDown(function () {
                      var e
                      $('#bash--input-businessName').attr(
                        'required',
                        'required'
                      ),
                        !$('#bash--input-businessName').val() &&
                          (null === (e = $('#bash--input-businessName')) ||
                            void 0 === e ||
                            e.focus())
                    }))
                : ($('.bash--textfield-businessName')
                    .addClass('optional')
                    .slideUp(),
                  $('#bash--input-businessName').attr('required', !1),
                  $('#bash--input-businessName').val(''),
                  $('#bash--input-businessName').blur()))
          }),
          $(document).on(
            'click',
            '#shipping-option-pickup-in-point, #shipping-option-delivery',
            function () {
              'shipping-option-pickup-in-point' === $(this).attr('id')
                ? $('#bash--delivery-container').hide()
                : $('#bash--delivery-container').show()
            }
          ),
          $(document).on('click', ' #punt-collect', function () {
            document.getElementById('edit-shipping-data').click(),
              setTimeout(function () {
                return document
                  .getElementById('shipping-option-pickup-in-point')
                  .click()
              }, 200)
          }),
          $(document).on('submit', '#bash--add-address-manual-form', Mn),
          $(document).on('submit', '#bash--delivery-form', $o),
          $(document).on('submit', '#bash--edit-address-form', eo),
          $(document).on('submit', '#bash--add-address-autocomplete-form', Sn),
          $(document).on('click', '.remove-cart-item', function (e) {
            var t
            e.preventDefault(),
              ((t = $(this).data('index')),
              window.vtexjs.checkout
                .updateItems([{ index: ''.concat(t), quantity: 0 }])
                .done(function () {
                  Ot()
                })).done(function () {
                Ot()
              })
          }),
          $(document).on('click', '.bash--radio-option', function () {
            $('#bash-delivery-error-container').html('')
          }),
          $(document).on('keyup click', '.invalid', function () {
            $(this).removeClass('invalid')
          }),
          $(document).on('click', '#btn-delete-address', function (e) {
            e.preventDefault()
            var t = $('#bash--input-addressName').val()
            confirm(
              'Please note: Deleting this address will not delete any pending orders to this address.'
            ) && ao(t)
          }),
          window.addEventListener('message', function (e) {
            var t,
              n,
              o,
              a = e.data
            if (a && a.action)
              switch (a.action) {
                case 'setDeliveryView':
                  var d
                  null ===
                    (d = document.querySelector('.bash--delivery-container')) ||
                    void 0 === d ||
                    d.setAttribute('data-view', a.view),
                    (document.querySelector('#edit-adress-section').innerHTML =
                      ''),
                    (document.querySelector(
                      '#add-address-autocomplete-section'
                    ).innerHTML = ''),
                    (document.querySelector(
                      '#manual-address-section'
                    ).innerHTML = ''),
                    (document.querySelector(
                      '#add-address-autocomplete-manual-section'
                    ).innerHTML = '')
                  var c =
                    ((t = { event: 'add_address' }),
                    (o = nn),
                    (n = (function (e) {
                      var t = (function (e, t) {
                        if ('object' !== vo(e) || null === e) return e
                        var r = e[Symbol.toPrimitive]
                        if (void 0 !== r) {
                          var n = r.call(e, t)
                          if ('object' !== vo(n)) return n
                          throw new TypeError(
                            '@@toPrimitive must return a primitive value.'
                          )
                        }
                        return String(e)
                      })(e, 'string')
                      return 'symbol' === vo(t) ? t : String(t)
                    })((n = en))) in t
                      ? Object.defineProperty(t, n, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[n] = o),
                    t)
                  'edit-address' === a.view &&
                    (r(a.content),
                    (c.add_address_method = cn),
                    (c.add_address_capture_method =
                      null != a && a.captureMethod
                        ? a.captureMethod.toLowerCase()
                        : null)),
                    'add-address-autocomplete' === a.view &&
                      (i(a.content),
                      (c.add_address_method = sn),
                      (c.add_address_capture_method = on)),
                    'add-address-autocomplete-manual' === a.view &&
                      (s('AUTOCOMPLETE_MANUAL', a.content),
                      (c.add_address_method = sn),
                      (c.add_address_capture_method = an)),
                    'manual-address' === a.view &&
                      (s('MANUAL'),
                      (c.add_address_method = un),
                      (c.add_address_capture_method = dn)),
                    'select-address' !== a.view &&
                      'address-search' !== a.view &&
                      ln(c)
                  break
                case 'FB_LOG':
                  break
                default:
                  console.error('Unknown action', a.action)
              }
          }),
          { state: e, init: function () {} }
        )
      })()
      const wo = bo
      var xo = (function () {
        var e = {
            showFurnitureForm: !1,
            showTVIDForm: !1,
            showRICAForm: !1,
            showTVorRICAMsg: !1,
            showMixedProductsMsg: !1,
            runningObserver: !1,
          },
          t = function () {
            setTimeout(function () {
              !(function () {
                if (window.vtexjs.checkout.orderForm) {
                  var t = window.vtexjs.checkout.orderForm.items,
                    r = _t(t),
                    n = r.hasTVs,
                    o = r.hasSimCards,
                    i = r.hasFurnitureMixed
                  ;(e.showTVIDForm = n),
                    (e.showRICAForm = o),
                    (e.showTVorRICAMsg = e.showTVIDForm || e.showRICAForm),
                    (e.showMixedProductsMsg = i)
                }
              })(),
                e.showFurnitureForm
                  ? $('div.subheader').css('display', 'none')
                  : $('div.subheader').css('display', 'block')
            }, 500)
          }
        return (
          $(document).ready(function () {
            t()
          }),
          $(window).on('hashchange orderFormUpdated.vtex', function () {
            t()
          }),
          $(document).on(
            'click',
            '#shipping-data .btn-link.vtex-omnishipping-1-x-btnDelivery',
            function () {
              t()
            }
          ),
          {
            state: e,
            setView: function (e) {
              var t
              null === (t = document) ||
                void 0 === t ||
                null === (t = t.body) ||
                void 0 === t ||
                t.setAttribute('data-delivery-view', e)
            },
            showCustomSections: function () {
              var t,
                r = $('#tfg-custom-tvrica-msg').length > 0,
                n = $('#tfg-custom-mixed-msg').length > 0,
                o = !1
              ;(e.showTVorRICAMsg || e.showMixedProductsMsg) &&
                ($(
                  '.vtex-omnishipping-1-x-deliveryChannelsWrapper.custom-disabled'
                ).length < 1 &&
                  ($('#shipping-option-delivery').trigger('click'),
                  $('.vtex-omnishipping-1-x-deliveryChannelsWrapper').addClass(
                    'custom-disabled'
                  )),
                e.showTVorRICAMsg &&
                  !r &&
                  ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(
                    '\n  <div id="tfg-custom-tvrica-msg" class="tfg-custom-msg">\n    <p class="tfg-custom-icon"></p>\n    <p class="tfg-custom-text">\n      You can\'t collect this order in store because your cart contains items \n      which require either RICA or TV License validation.\n    </p>\n  </div>\n'
                  ),
                  (o = !0)),
                e.showMixedProductsMsg &&
                  !n &&
                  ($('.vtex-omnishipping-1-x-addressFormPart1').prepend(''),
                  (o = !0))),
                o &&
                  ((t = '.tfg-custom-step'),
                  $(t).addClass('custom-step-border'),
                  $(t).last().addClass('last-custom-step-border'))
            },
            init: function () {},
          }
        )
      })()
      const _o = xo
      function Oo(e) {
        return (
          (Oo =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Oo(e)
        )
      }
      function Eo() {
        Eo = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          i = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          d = o.toStringTag || '@@toStringTag'
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          s({}, '')
        } catch (e) {
          s = function (e, t, r) {
            return (e[t] = r)
          }
        }
        function c(e, t, r, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            d = new E(o || [])
          return n(a, '_invoke', { value: w(e, r, d) }), a
        }
        function u(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) }
          } catch (e) {
            return { type: 'throw', arg: e }
          }
        }
        e.wrap = c
        var l = {}
        function h() {}
        function f() {}
        function p() {}
        var $ = {}
        s($, i, function () {
          return this
        })
        var v = Object.getPrototypeOf,
          m = v && v(v(S([])))
        m && m !== t && r.call(m, i) && ($ = m)
        var y = (p.prototype = h.prototype = Object.create($))
        function g(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function o(n, i, a, d) {
            var s = u(e[n], e, i)
            if ('throw' !== s.type) {
              var c = s.arg,
                l = c.value
              return l && 'object' == Oo(l) && r.call(l, '__await')
                ? t.resolve(l.__await).then(
                    function (e) {
                      o('next', e, a, d)
                    },
                    function (e) {
                      o('throw', e, a, d)
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      ;(c.value = e), a(c)
                    },
                    function (e) {
                      return o('throw', e, a, d)
                    }
                  )
            }
            d(s.arg)
          }
          var i
          n(this, '_invoke', {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  o(e, r, t, n)
                })
              }
              return (i = i ? i.then(n, n) : n())
            },
          })
        }
        function w(e, t, r) {
          var n = 'suspendedStart'
          return function (o, i) {
            if ('executing' === n)
              throw new Error('Generator is already running')
            if ('completed' === n) {
              if ('throw' === o) throw i
              return { value: void 0, done: !0 }
            }
            for (r.method = o, r.arg = i; ; ) {
              var a = r.delegate
              if (a) {
                var d = x(a, r)
                if (d) {
                  if (d === l) continue
                  return d
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              n = 'executing'
              var s = u(e, t, r)
              if ('normal' === s.type) {
                if (
                  ((n = r.done ? 'completed' : 'suspendedYield'), s.arg === l)
                )
                  continue
                return { value: s.arg, done: r.done }
              }
              'throw' === s.type &&
                ((n = 'completed'), (r.method = 'throw'), (r.arg = s.arg))
            }
          }
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r]
          if (void 0 === n)
            return (
              (t.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                x(e, t),
                'throw' === t.method)) ||
                ('return' !== r &&
                  ((t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              l
            )
          var o = u(n, e.iterator, t.arg)
          if ('throw' === o.type)
            return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), l
          var i = o.arg
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              l)
        }
        function _(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function O(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function E(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
          if (e || '' === e) {
            var t = e[i]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Oo(e) + ' is not iterable')
        }
        return (
          (f.prototype = p),
          n(y, 'constructor', { value: p, configurable: !0 }),
          n(p, 'constructor', { value: f, configurable: !0 }),
          (f.displayName = s(p, d, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return (
              !!t &&
              (t === f || 'GeneratorFunction' === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), s(e, d, 'GeneratorFunction')),
              (e.prototype = Object.create(y)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          g(b.prototype),
          s(b.prototype, a, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise)
            var a = new b(c(t, r, n, o), i)
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next()
                })
          }),
          g(y),
          s(y, d, 'Generator'),
          s(y, i, function () {
            return this
          }),
          s(y, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = []
            for (var n in t) r.push(n)
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop()
                  if (n in t) return (e.value = n), (e.done = !1), e
                }
                return (e.done = !0), e
              }
            )
          }),
          (e.values = S),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function n(r, n) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = r),
                  n && ((t.method = 'next'), (t.arg = void 0)),
                  !!n
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion
                if ('root' === i.tryLoc) return n('end')
                if (i.tryLoc <= this.prev) {
                  var d = r.call(i, 'catchLoc'),
                    s = r.call(i, 'finallyLoc')
                  if (d && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (d) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n]
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o
                  break
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null)
              var a = i ? i.completion : {}
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                l
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), l
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t]
                if (r.tryLoc === e) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var o = n.arg
                    O(r)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: r }),
                'next' === this.method && (this.arg = void 0),
                l
              )
            },
          }),
          e
        )
      }
      function So(e, t, r, n, o, i, a) {
        try {
          var d = e[i](a),
            s = d.value
        } catch (e) {
          return void r(e)
        }
        d.done ? t(s) : Promise.resolve(s).then(n, o)
      }
      var Co = document.createElement('script')
      Co.setAttribute('src', 'https://unpkg.com/penpal@^6/dist/penpal.min.js'),
        document.head.appendChild(Co)
      var Po = (function () {
        var e,
          t =
            ((e = Eo().mark(function e() {
              var t, r
              return Eo().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r =
                            null === (t = window) ||
                            void 0 === t ||
                            null === (t = t.vtexjs) ||
                            void 0 === t ||
                            null === (t = t.checkout) ||
                            void 0 === t
                              ? void 0
                              : t.orderForm),
                          (e.prev = 1),
                          r)
                        ) {
                          e.next = 6
                          break
                        }
                        return (
                          (e.next = 5), window.vtexjs.checkout.getOrderForm()
                        )
                      case 5:
                        r = e.sent
                      case 6:
                        r &&
                          (_o.init(),
                          Wr.init(),
                          wo.init(),
                          (window.bash = window.bash || {}),
                          (window.bash.postCollectionValidationErrors = jr),
                          console.log('Finish Load Scripts')),
                          (e.next = 18)
                        break
                      case 9:
                        ;(e.prev = 9),
                          (e.t0 = e.catch(1)),
                          console.error(
                            'VTEX_ORDERFORM_ERROR: Could not load at custom-shipping-steps Entry Point',
                            e.t0
                          ),
                          Nr({
                            eventCategory: 'Checkout_SystemError',
                            action: 'OrderFormFailed',
                            label: 'Could not getOrderForm() from vtex',
                            description:
                              'Could not load orderForm on custom-shipping-steps Entry Point',
                          }),
                          _o.init(),
                          Wr.init(),
                          wo.init(),
                          (window.bash = window.bash || {}),
                          (window.bash.postCollectionValidationErrors = jr)
                      case 18:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[1, 9]]
              )
            })),
            function () {
              var t = this,
                r = arguments
              return new Promise(function (n, o) {
                var i = e.apply(t, r)
                function a(e) {
                  So(i, n, o, a, d, 'next', e)
                }
                function d(e) {
                  So(i, n, o, a, d, 'throw', e)
                }
                a(void 0)
              })
            })
        return function () {
          return t.apply(this, arguments)
        }
      })()
      document.addEventListener('DOMContentLoaded', Po)
    })()
})()
