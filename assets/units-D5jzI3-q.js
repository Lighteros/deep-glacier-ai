var vi = Object.defineProperty;
var Si = (t, e, n) =>
  e in t
    ? vi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var Mn = (t, e, n) => (Si(t, typeof e != "symbol" ? e + "" : e, n), n),
  Fn = (t, e, n) => {
    if (!e.has(t)) throw TypeError("Cannot " + n);
  };
var T = (t, e, n) => (
    Fn(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  Ct = (t, e, n) => {
    if (e.has(t))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, n);
  },
  Ge = (t, e, n, s) => (
    Fn(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n
  );
var z = (t, e, n) => (Fn(t, e, "access private method"), n);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
 * @vue/shared v3.4.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function fs(t, e) {
  const n = new Set(t.split(","));
  return e ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const H = {},
  he = [],
  dt = () => {},
  Ii = () => !1,
  dn = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  cs = (t) => t.startsWith("onUpdate:"),
  tt = Object.assign,
  us = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Ci = Object.prototype.hasOwnProperty,
  P = (t, e) => Ci.call(t, e),
  C = Array.isArray,
  pe = (t) => hn(t) === "[object Map]",
  gr = (t) => hn(t) === "[object Set]",
  O = (t) => typeof t == "function",
  q = (t) => typeof t == "string",
  oe = (t) => typeof t == "symbol",
  D = (t) => t !== null && typeof t == "object",
  mr = (t) => (D(t) || O(t)) && O(t.then) && O(t.catch),
  _r = Object.prototype.toString,
  hn = (t) => _r.call(t),
  Ai = (t) => hn(t).slice(8, -1),
  br = (t) => hn(t) === "[object Object]",
  as = (t) => q(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Ie = fs(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  pn = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  Ti = /-(\w)/g,
  Nt = pn((t) => t.replace(Ti, (e, n) => (n ? n.toUpperCase() : ""))),
  Oi = /\B([A-Z])/g,
  be = pn((t) => t.replace(Oi, "-$1").toLowerCase()),
  gn = pn((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Un = pn((t) => (t ? `on${gn(t)}` : "")),
  Wt = (t, e) => !Object.is(t, e),
  Ln = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  yr = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  Ni = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let Us;
const wr = () =>
  Us ||
  (Us =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function ds(t) {
  if (C(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        r = q(s) ? Fi(s) : ds(s);
      if (r) for (const i in r) e[i] = r[i];
    }
    return e;
  } else if (q(t) || D(t)) return t;
}
const Ri = /;(?![^(]*\))/g,
  Pi = /:([^]+)/,
  Mi = /\/\*[^]*?\*\//g;
function Fi(t) {
  const e = {};
  return (
    t
      .replace(Mi, "")
      .split(Ri)
      .forEach((n) => {
        if (n) {
          const s = n.split(Pi);
          s.length > 1 && (e[s[0].trim()] = s[1].trim());
        }
      }),
    e
  );
}
function hs(t) {
  let e = "";
  if (q(t)) e = t;
  else if (C(t))
    for (let n = 0; n < t.length; n++) {
      const s = hs(t[n]);
      s && (e += s + " ");
    }
  else if (D(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
const Ui =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Li = fs(Ui);
function xr(t) {
  return !!t || t === "";
}
const cf = (t) =>
    q(t)
      ? t
      : t == null
      ? ""
      : C(t) || (D(t) && (t.toString === _r || !O(t.toString)))
      ? JSON.stringify(t, Er, 2)
      : String(t),
  Er = (t, e) =>
    e && e.__v_isRef
      ? Er(t, e.value)
      : pe(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [s, r], i) => ((n[Bn(s, i) + " =>"] = r), n),
            {}
          ),
        }
      : gr(e)
      ? { [`Set(${e.size})`]: [...e.values()].map((n) => Bn(n)) }
      : oe(e)
      ? Bn(e)
      : D(e) && !C(e) && !br(e)
      ? String(e)
      : e,
  Bn = (t, e = "") => {
    var n;
    return oe(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
  };
/**
 * @vue/reactivity v3.4.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let pt;
class Bi {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = pt),
      !e && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = pt;
      try {
        return (pt = this), e();
      } finally {
        pt = n;
      }
    }
  }
  on() {
    pt = this;
  }
  off() {
    pt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function $i(t, e = pt) {
  e && e.active && e.effects.push(t);
}
function ji() {
  return pt;
}
let re;
class ps {
  constructor(e, n, s, r) {
    (this.fn = e),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      $i(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), qt();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (Hi(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Jt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let e = Kt,
      n = re;
    try {
      return (Kt = !0), (re = this), this._runnings++, Ls(this), this.fn();
    } finally {
      Bs(this), this._runnings--, (re = n), (Kt = e);
    }
  }
  stop() {
    var e;
    this.active &&
      (Ls(this),
      Bs(this),
      (e = this.onStop) == null || e.call(this),
      (this.active = !1));
  }
}
function Hi(t) {
  return t.value;
}
function Ls(t) {
  t._trackId++, (t._depsLength = 0);
}
function Bs(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++) vr(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function vr(t, e) {
  const n = t.get(e);
  n !== void 0 &&
    e._trackId !== n &&
    (t.delete(e), t.size === 0 && t.cleanup());
}
let Kt = !0,
  Wn = 0;
const Sr = [];
function qt() {
  Sr.push(Kt), (Kt = !1);
}
function Jt() {
  const t = Sr.pop();
  Kt = t === void 0 ? !0 : t;
}
function gs() {
  Wn++;
}
function ms() {
  for (Wn--; !Wn && Gn.length; ) Gn.shift()();
}
function Ir(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const s = t.deps[t._depsLength];
    s !== e ? (s && vr(s, t), (t.deps[t._depsLength++] = e)) : t._depsLength++;
  }
}
const Gn = [];
function Cr(t, e, n) {
  gs();
  for (const s of t.keys()) {
    let r;
    s._dirtyLevel < e &&
      (r ?? (r = t.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = e)),
      s._shouldSchedule &&
        (r ?? (r = t.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && Gn.push(s.scheduler)));
  }
  ms();
}
const Ar = (t, e) => {
    const n = new Map();
    return (n.cleanup = t), (n.computed = e), n;
  },
  qn = new WeakMap(),
  ie = Symbol(""),
  Jn = Symbol("");
function ft(t, e, n) {
  if (Kt && re) {
    let s = qn.get(t);
    s || qn.set(t, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Ar(() => s.delete(n)))), Ir(re, r);
  }
}
function Ut(t, e, n, s, r, i) {
  const o = qn.get(t);
  if (!o) return;
  let f = [];
  if (e === "clear") f = [...o.values()];
  else if (n === "length" && C(t)) {
    const u = Number(s);
    o.forEach((d, h) => {
      (h === "length" || (!oe(h) && h >= u)) && f.push(d);
    });
  } else
    switch ((n !== void 0 && f.push(o.get(n)), e)) {
      case "add":
        C(t)
          ? as(n) && f.push(o.get("length"))
          : (f.push(o.get(ie)), pe(t) && f.push(o.get(Jn)));
        break;
      case "delete":
        C(t) || (f.push(o.get(ie)), pe(t) && f.push(o.get(Jn)));
        break;
      case "set":
        pe(t) && f.push(o.get(ie));
        break;
    }
  gs();
  for (const u of f) u && Cr(u, 4);
  ms();
}
const Vi = fs("__proto__,__v_isRef,__isVue"),
  Tr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(oe)
  ),
  $s = Di();
function Di() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const s = F(this);
        for (let i = 0, o = this.length; i < o; i++) ft(s, "get", i + "");
        const r = s[e](...n);
        return r === -1 || r === !1 ? s[e](...n.map(F)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        qt(), gs();
        const s = F(this)[e].apply(this, n);
        return ms(), Jt(), s;
      };
    }),
    t
  );
}
function Ki(t) {
  oe(t) || (t = String(t));
  const e = F(this);
  return ft(e, "has", t), e.hasOwnProperty(t);
}
class Or {
  constructor(e = !1, n = !1) {
    (this._isReadonly = e), (this._isShallow = n);
  }
  get(e, n, s) {
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return s === (r ? (i ? no : Mr) : i ? Pr : Rr).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(s)
        ? e
        : void 0;
    const o = C(e);
    if (!r) {
      if (o && P($s, n)) return Reflect.get($s, n, s);
      if (n === "hasOwnProperty") return Ki;
    }
    const f = Reflect.get(e, n, s);
    return (oe(n) ? Tr.has(n) : Vi(n)) || (r || ft(e, "get", n), i)
      ? f
      : ct(f)
      ? o && as(n)
        ? f
        : f.value
      : D(f)
      ? r
        ? Fr(f)
        : ys(f)
      : f;
  }
}
class Nr extends Or {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, r) {
    let i = e[n];
    if (!this._isShallow) {
      const u = Re(i);
      if (
        (!rn(s) && !Re(s) && ((i = F(i)), (s = F(s))), !C(e) && ct(i) && !ct(s))
      )
        return u ? !1 : ((i.value = s), !0);
    }
    const o = C(e) && as(n) ? Number(n) < e.length : P(e, n),
      f = Reflect.set(e, n, s, r);
    return (
      e === F(r) && (o ? Wt(s, i) && Ut(e, "set", n, s) : Ut(e, "add", n, s)), f
    );
  }
  deleteProperty(e, n) {
    const s = P(e, n);
    e[n];
    const r = Reflect.deleteProperty(e, n);
    return r && s && Ut(e, "delete", n, void 0), r;
  }
  has(e, n) {
    const s = Reflect.has(e, n);
    return (!oe(n) || !Tr.has(n)) && ft(e, "has", n), s;
  }
  ownKeys(e) {
    return ft(e, "iterate", C(e) ? "length" : ie), Reflect.ownKeys(e);
  }
}
class zi extends Or {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const Wi = new Nr(),
  Gi = new zi(),
  qi = new Nr(!0),
  _s = (t) => t,
  mn = (t) => Reflect.getPrototypeOf(t);
function qe(t, e, n = !1, s = !1) {
  t = t.__v_raw;
  const r = F(t),
    i = F(e);
  n || (Wt(e, i) && ft(r, "get", e), ft(r, "get", i));
  const { has: o } = mn(r),
    f = s ? _s : n ? xs : Pe;
  if (o.call(r, e)) return f(t.get(e));
  if (o.call(r, i)) return f(t.get(i));
  t !== r && t.get(e);
}
function Je(t, e = !1) {
  const n = this.__v_raw,
    s = F(n),
    r = F(t);
  return (
    e || (Wt(t, r) && ft(s, "has", t), ft(s, "has", r)),
    t === r ? n.has(t) : n.has(t) || n.has(r)
  );
}
function Ye(t, e = !1) {
  return (
    (t = t.__v_raw), !e && ft(F(t), "iterate", ie), Reflect.get(t, "size", t)
  );
}
function js(t) {
  t = F(t);
  const e = F(this);
  return mn(e).has.call(e, t) || (e.add(t), Ut(e, "add", t, t)), this;
}
function Hs(t, e) {
  e = F(e);
  const n = F(this),
    { has: s, get: r } = mn(n);
  let i = s.call(n, t);
  i || ((t = F(t)), (i = s.call(n, t)));
  const o = r.call(n, t);
  return (
    n.set(t, e), i ? Wt(e, o) && Ut(n, "set", t, e) : Ut(n, "add", t, e), this
  );
}
function Vs(t) {
  const e = F(this),
    { has: n, get: s } = mn(e);
  let r = n.call(e, t);
  r || ((t = F(t)), (r = n.call(e, t))), s && s.call(e, t);
  const i = e.delete(t);
  return r && Ut(e, "delete", t, void 0), i;
}
function Ds() {
  const t = F(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Ut(t, "clear", void 0, void 0), n;
}
function Xe(t, e) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      f = F(o),
      u = e ? _s : t ? xs : Pe;
    return (
      !t && ft(f, "iterate", ie), o.forEach((d, h) => s.call(r, u(d), u(h), i))
    );
  };
}
function Ze(t, e, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = F(r),
      o = pe(i),
      f = t === "entries" || (t === Symbol.iterator && o),
      u = t === "keys" && o,
      d = r[t](...s),
      h = n ? _s : e ? xs : Pe;
    return (
      !e && ft(i, "iterate", u ? Jn : ie),
      {
        next() {
          const { value: x, done: v } = d.next();
          return v
            ? { value: x, done: v }
            : { value: f ? [h(x[0]), h(x[1])] : h(x), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function $t(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Ji() {
  const t = {
      get(i) {
        return qe(this, i);
      },
      get size() {
        return Ye(this);
      },
      has: Je,
      add: js,
      set: Hs,
      delete: Vs,
      clear: Ds,
      forEach: Xe(!1, !1),
    },
    e = {
      get(i) {
        return qe(this, i, !1, !0);
      },
      get size() {
        return Ye(this);
      },
      has: Je,
      add: js,
      set: Hs,
      delete: Vs,
      clear: Ds,
      forEach: Xe(!1, !0),
    },
    n = {
      get(i) {
        return qe(this, i, !0);
      },
      get size() {
        return Ye(this, !0);
      },
      has(i) {
        return Je.call(this, i, !0);
      },
      add: $t("add"),
      set: $t("set"),
      delete: $t("delete"),
      clear: $t("clear"),
      forEach: Xe(!0, !1),
    },
    s = {
      get(i) {
        return qe(this, i, !0, !0);
      },
      get size() {
        return Ye(this, !0);
      },
      has(i) {
        return Je.call(this, i, !0);
      },
      add: $t("add"),
      set: $t("set"),
      delete: $t("delete"),
      clear: $t("clear"),
      forEach: Xe(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (t[i] = Ze(i, !1, !1)),
        (n[i] = Ze(i, !0, !1)),
        (e[i] = Ze(i, !1, !0)),
        (s[i] = Ze(i, !0, !0));
    }),
    [t, n, e, s]
  );
}
const [Yi, Xi, Zi, Qi] = Ji();
function bs(t, e) {
  const n = e ? (t ? Qi : Zi) : t ? Xi : Yi;
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !t
      : r === "__v_isReadonly"
      ? t
      : r === "__v_raw"
      ? s
      : Reflect.get(P(n, r) && r in s ? n : s, r, i);
}
const ki = { get: bs(!1, !1) },
  to = { get: bs(!1, !0) },
  eo = { get: bs(!0, !1) },
  Rr = new WeakMap(),
  Pr = new WeakMap(),
  Mr = new WeakMap(),
  no = new WeakMap();
function so(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ro(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : so(Ai(t));
}
function ys(t) {
  return Re(t) ? t : ws(t, !1, Wi, ki, Rr);
}
function io(t) {
  return ws(t, !1, qi, to, Pr);
}
function Fr(t) {
  return ws(t, !0, Gi, eo, Mr);
}
function ws(t, e, n, s, r) {
  if (!D(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const i = r.get(t);
  if (i) return i;
  const o = ro(t);
  if (o === 0) return t;
  const f = new Proxy(t, o === 2 ? s : n);
  return r.set(t, f), f;
}
function Ce(t) {
  return Re(t) ? Ce(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Re(t) {
  return !!(t && t.__v_isReadonly);
}
function rn(t) {
  return !!(t && t.__v_isShallow);
}
function Ur(t) {
  return t ? !!t.__v_raw : !1;
}
function F(t) {
  const e = t && t.__v_raw;
  return e ? F(e) : t;
}
function oo(t) {
  return Object.isExtensible(t) && yr(t, "__v_skip", !0), t;
}
const Pe = (t) => (D(t) ? ys(t) : t),
  xs = (t) => (D(t) ? Fr(t) : t);
class Lr {
  constructor(e, n, s, r) {
    (this.getter = e),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ps(
        () => e(this._value),
        () => ke(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const e = F(this);
    return (
      (!e._cacheable || e.effect.dirty) &&
        Wt(e._value, (e._value = e.effect.run())) &&
        ke(e, 4),
      Br(e),
      e.effect._dirtyLevel >= 2 && ke(e, 2),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
}
function lo(t, e, n = !1) {
  let s, r;
  const i = O(t);
  return (
    i ? ((s = t), (r = dt)) : ((s = t.get), (r = t.set)),
    new Lr(s, r, i || !r, n)
  );
}
function Br(t) {
  var e;
  Kt &&
    re &&
    ((t = F(t)),
    Ir(
      re,
      (e = t.dep) != null
        ? e
        : (t.dep = Ar(() => (t.dep = void 0), t instanceof Lr ? t : void 0))
    ));
}
function ke(t, e = 4, n) {
  t = F(t);
  const s = t.dep;
  s && Cr(s, e);
}
function ct(t) {
  return !!(t && t.__v_isRef === !0);
}
function uf(t) {
  return $r(t, !1);
}
function af(t) {
  return $r(t, !0);
}
function $r(t, e) {
  return ct(t) ? t : new fo(t, e);
}
class fo {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : F(e)),
      (this._value = n ? e : Pe(e));
  }
  get value() {
    return Br(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || rn(e) || Re(e);
    (e = n ? e : F(e)),
      Wt(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : Pe(e)), ke(this, 4));
  }
}
function co(t) {
  return ct(t) ? t.value : t;
}
const uo = {
  get: (t, e, n) => co(Reflect.get(t, e, n)),
  set: (t, e, n, s) => {
    const r = t[e];
    return ct(r) && !ct(n) ? ((r.value = n), !0) : Reflect.set(t, e, n, s);
  },
};
function jr(t) {
  return Ce(t) ? t : new Proxy(t, uo);
}
/**
 * @vue/runtime-core v3.4.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function zt(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (r) {
    _n(r, e, n);
  }
}
function xt(t, e, n, s) {
  if (O(t)) {
    const r = zt(t, e, n, s);
    return (
      r &&
        mr(r) &&
        r.catch((i) => {
          _n(i, e, n);
        }),
      r
    );
  }
  if (C(t)) {
    const r = [];
    for (let i = 0; i < t.length; i++) r.push(xt(t[i], e, n, s));
    return r;
  }
}
function _n(t, e, n, s = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let i = e.parent;
    const o = e.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const d = i.ec;
      if (d) {
        for (let h = 0; h < d.length; h++) if (d[h](t, o, f) === !1) return;
      }
      i = i.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      qt(), zt(u, null, 10, [t, o, f]), Jt();
      return;
    }
  }
  ao(t, n, r, s);
}
function ao(t, e, n, s = !0) {
  console.error(t);
}
let Me = !1,
  Yn = !1;
const et = [];
let Ot = 0;
const ge = [];
let jt = null,
  ne = 0;
const Hr = Promise.resolve();
let Es = null;
function ho(t) {
  const e = Es || Hr;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function po(t) {
  let e = Ot + 1,
    n = et.length;
  for (; e < n; ) {
    const s = (e + n) >>> 1,
      r = et[s],
      i = Fe(r);
    i < t || (i === t && r.pre) ? (e = s + 1) : (n = s);
  }
  return e;
}
function vs(t) {
  (!et.length || !et.includes(t, Me && t.allowRecurse ? Ot + 1 : Ot)) &&
    (t.id == null ? et.push(t) : et.splice(po(t.id), 0, t), Vr());
}
function Vr() {
  !Me && !Yn && ((Yn = !0), (Es = Hr.then(Kr)));
}
function go(t) {
  const e = et.indexOf(t);
  e > Ot && et.splice(e, 1);
}
function mo(t) {
  C(t)
    ? ge.push(...t)
    : (!jt || !jt.includes(t, t.allowRecurse ? ne + 1 : ne)) && ge.push(t),
    Vr();
}
function Ks(t, e, n = Me ? Ot + 1 : 0) {
  for (; n < et.length; n++) {
    const s = et[n];
    if (s && s.pre) {
      if (t && s.id !== t.uid) continue;
      et.splice(n, 1), n--, s();
    }
  }
}
function Dr(t) {
  if (ge.length) {
    const e = [...new Set(ge)].sort((n, s) => Fe(n) - Fe(s));
    if (((ge.length = 0), jt)) {
      jt.push(...e);
      return;
    }
    for (jt = e, ne = 0; ne < jt.length; ne++) jt[ne]();
    (jt = null), (ne = 0);
  }
}
const Fe = (t) => (t.id == null ? 1 / 0 : t.id),
  _o = (t, e) => {
    const n = Fe(t) - Fe(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Kr(t) {
  (Yn = !1), (Me = !0), et.sort(_o);
  try {
    for (Ot = 0; Ot < et.length; Ot++) {
      const e = et[Ot];
      e && e.active !== !1 && zt(e, null, 14);
    }
  } finally {
    (Ot = 0),
      (et.length = 0),
      Dr(),
      (Me = !1),
      (Es = null),
      (et.length || ge.length) && Kr();
  }
}
function bo(t, e, ...n) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || H;
  let r = n;
  const i = e.startsWith("update:"),
    o = i && e.slice(7);
  if (o && o in s) {
    const h = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: x, trim: v } = s[h] || H;
    v && (r = n.map((N) => (q(N) ? N.trim() : N))), x && (r = n.map(Ni));
  }
  let f,
    u = s[(f = Un(e))] || s[(f = Un(Nt(e)))];
  !u && i && (u = s[(f = Un(be(e)))]), u && xt(u, t, 6, r);
  const d = s[f + "Once"];
  if (d) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[f]) return;
    (t.emitted[f] = !0), xt(d, t, 6, r);
  }
}
function zr(t, e, n = !1) {
  const s = e.emitsCache,
    r = s.get(t);
  if (r !== void 0) return r;
  const i = t.emits;
  let o = {},
    f = !1;
  if (!O(t)) {
    const u = (d) => {
      const h = zr(d, e, !0);
      h && ((f = !0), tt(o, h));
    };
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  return !i && !f
    ? (D(t) && s.set(t, null), null)
    : (C(i) ? i.forEach((u) => (o[u] = null)) : tt(o, i),
      D(t) && s.set(t, o),
      o);
}
function bn(t, e) {
  return !t || !dn(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      P(t, e[0].toLowerCase() + e.slice(1)) || P(t, be(e)) || P(t, e));
}
let k = null,
  yn = null;
function on(t) {
  const e = k;
  return (k = t), (yn = (t && t.type.__scopeId) || null), e;
}
function df(t) {
  yn = t;
}
function hf() {
  yn = null;
}
function yo(t, e = k, n) {
  if (!e || t._n) return t;
  const s = (...r) => {
    s._d && tr(-1);
    const i = on(e);
    let o;
    try {
      o = t(...r);
    } finally {
      on(i), s._d && tr(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function $n(t) {
  const {
    type: e,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: f,
    attrs: u,
    emit: d,
    render: h,
    renderCache: x,
    data: v,
    setupState: N,
    ctx: W,
    inheritAttrs: U,
  } = t;
  let X, J;
  const Et = on(t);
  try {
    if (n.shapeFlag & 4) {
      const Z = r || s,
        at = Z;
      (X = Tt(h.call(at, Z, x, i, N, v, W))), (J = u);
    } else {
      const Z = e;
      (X = Tt(
        Z.length > 1 ? Z(i, { attrs: u, slots: f, emit: d }) : Z(i, null)
      )),
        (J = e.props ? u : wo(u));
    }
  } catch (Z) {
    (Ne.length = 0), _n(Z, t, 1), (X = ot(Gt));
  }
  let $ = X;
  if (J && U !== !1) {
    const Z = Object.keys(J),
      { shapeFlag: at } = $;
    Z.length && at & 7 && (o && Z.some(cs) && (J = xo(J, o)), ($ = _e($, J)));
  }
  return (
    n.dirs && (($ = _e($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (X = $),
    on(Et),
    X
  );
}
const wo = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || dn(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  xo = (t, e) => {
    const n = {};
    for (const s in t) (!cs(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
    return n;
  };
function Eo(t, e, n) {
  const { props: s, children: r, component: i } = t,
    { props: o, children: f, patchFlag: u } = e,
    d = i.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? zs(s, o, d) : !!o;
    if (u & 8) {
      const h = e.dynamicProps;
      for (let x = 0; x < h.length; x++) {
        const v = h[x];
        if (o[v] !== s[v] && !bn(d, v)) return !0;
      }
    }
  } else
    return (r || f) && (!f || !f.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? zs(s, o, d)
        : !0
      : !!o;
  return !1;
}
function zs(t, e, n) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (e[i] !== t[i] && !bn(n, i)) return !0;
  }
  return !1;
}
function vo({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const s = e.subTree;
    if ((s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t))
      ((t = e.vnode).el = n), (e = e.parent);
    else break;
  }
}
const Ss = "components";
function pf(t, e) {
  return Gr(Ss, t, !0, e) || t;
}
const Wr = Symbol.for("v-ndc");
function gf(t) {
  return q(t) ? Gr(Ss, t, !1) || t : t || Wr;
}
function Gr(t, e, n = !0, s = !1) {
  const r = k || nt;
  if (r) {
    const i = r.type;
    if (t === Ss) {
      const f = bl(i, !1);
      if (f && (f === e || f === Nt(e) || f === gn(Nt(e)))) return i;
    }
    const o = Ws(r[t] || i[t], e) || Ws(r.appContext[t], e);
    return !o && s ? i : o;
  }
}
function Ws(t, e) {
  return t && (t[e] || t[Nt(e)] || t[gn(Nt(e))]);
}
const So = (t) => t.__isSuspense;
function Io(t, e) {
  e && e.pendingBranch
    ? C(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : mo(t);
}
const Co = Symbol.for("v-scx"),
  Ao = () => tn(Co);
function mf(t, e) {
  return Is(t, null, e);
}
const Qe = {};
function jn(t, e, n) {
  return Is(t, e, n);
}
function Is(
  t,
  e,
  { immediate: n, deep: s, flush: r, once: i, onTrack: o, onTrigger: f } = H
) {
  if (e && i) {
    const M = e;
    e = (...Rt) => {
      M(...Rt), at();
    };
  }
  const u = nt,
    d = (M) => (s === !0 ? M : se(M, s === !1 ? 1 : void 0));
  let h,
    x = !1,
    v = !1;
  if (
    (ct(t)
      ? ((h = () => t.value), (x = rn(t)))
      : Ce(t)
      ? ((h = () => d(t)), (x = !0))
      : C(t)
      ? ((v = !0),
        (x = t.some((M) => Ce(M) || rn(M))),
        (h = () =>
          t.map((M) => {
            if (ct(M)) return M.value;
            if (Ce(M)) return d(M);
            if (O(M)) return zt(M, u, 2);
          })))
      : O(t)
      ? e
        ? (h = () => zt(t, u, 2))
        : (h = () => (N && N(), xt(t, u, 3, [W])))
      : (h = dt),
    e && s)
  ) {
    const M = h;
    h = () => se(M());
  }
  let N,
    W = (M) => {
      N = $.onStop = () => {
        zt(M, u, 4), (N = $.onStop = void 0);
      };
    },
    U;
  if (En)
    if (
      ((W = dt),
      e ? n && xt(e, u, 3, [h(), v ? [] : void 0, W]) : h(),
      r === "sync")
    ) {
      const M = Ao();
      U = M.__watcherHandles || (M.__watcherHandles = []);
    } else return dt;
  let X = v ? new Array(t.length).fill(Qe) : Qe;
  const J = () => {
    if (!(!$.active || !$.dirty))
      if (e) {
        const M = $.run();
        (s || x || (v ? M.some((Rt, vt) => Wt(Rt, X[vt])) : Wt(M, X))) &&
          (N && N(),
          xt(e, u, 3, [M, X === Qe ? void 0 : v && X[0] === Qe ? [] : X, W]),
          (X = M));
      } else $.run();
  };
  J.allowRecurse = !!e;
  let Et;
  r === "sync"
    ? (Et = J)
    : r === "post"
    ? (Et = () => lt(J, u && u.suspense))
    : ((J.pre = !0), u && (J.id = u.uid), (Et = () => vs(J)));
  const $ = new ps(h, dt, Et),
    Z = ji(),
    at = () => {
      $.stop(), Z && us(Z.effects, $);
    };
  return (
    e
      ? n
        ? J()
        : (X = $.run())
      : r === "post"
      ? lt($.run.bind($), u && u.suspense)
      : $.run(),
    U && U.push(at),
    at
  );
}
function To(t, e, n) {
  const s = this.proxy,
    r = q(t) ? (t.includes(".") ? qr(s, t) : () => s[t]) : t.bind(s, s);
  let i;
  O(e) ? (i = e) : ((i = e.handler), (n = e));
  const o = He(this),
    f = Is(r, i.bind(s), n);
  return o(), f;
}
function qr(t, e) {
  const n = e.split(".");
  return () => {
    let s = t;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function se(t, e, n = 0, s) {
  if (!D(t) || t.__v_skip) return t;
  if (e && e > 0) {
    if (n >= e) return t;
    n++;
  }
  if (((s = s || new Set()), s.has(t))) return t;
  if ((s.add(t), ct(t))) se(t.value, e, n, s);
  else if (C(t)) for (let r = 0; r < t.length; r++) se(t[r], e, n, s);
  else if (gr(t) || pe(t))
    t.forEach((r) => {
      se(r, e, n, s);
    });
  else if (br(t)) for (const r in t) se(t[r], e, n, s);
  return t;
}
function _f(t, e) {
  if (k === null) return t;
  const n = vn(k) || k.proxy,
    s = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [i, o, f, u = H] = e[r];
    i &&
      (O(i) && (i = { mounted: i, updated: i }),
      i.deep && se(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: f,
        modifiers: u,
      }));
  }
  return t;
}
function Qt(t, e, n, s) {
  const r = t.dirs,
    i = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const f = r[o];
    i && (f.oldValue = i[o].value);
    let u = f.dir[s];
    u && (qt(), xt(u, n, 8, [t.el, f, t, e]), Jt());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function bf(t, e) {
  return O(t) ? tt({ name: t.name }, e, { setup: t }) : t;
}
const Ae = (t) => !!t.type.__asyncLoader,
  Jr = (t) => t.type.__isKeepAlive;
function Oo(t, e) {
  Yr(t, "a", e);
}
function No(t, e) {
  Yr(t, "da", e);
}
function Yr(t, e, n = nt) {
  const s =
    t.__wdc ||
    (t.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
  if ((wn(e, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Jr(r.parent.vnode) && Ro(s, e, n, r), (r = r.parent);
  }
}
function Ro(t, e, n, s) {
  const r = wn(e, t, s, !0);
  Xr(() => {
    us(s[e], r);
  }, n);
}
function wn(t, e, n = nt, s = !1) {
  if (n) {
    const r = n[t] || (n[t] = []),
      i =
        e.__weh ||
        (e.__weh = (...o) => {
          if (n.isUnmounted) return;
          qt();
          const f = He(n),
            u = xt(e, n, t, o);
          return f(), Jt(), u;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Lt =
    (t) =>
    (e, n = nt) =>
      (!En || t === "sp") && wn(t, (...s) => e(...s), n),
  Po = Lt("bm"),
  Mo = Lt("m"),
  Fo = Lt("bu"),
  Uo = Lt("u"),
  Lo = Lt("bum"),
  Xr = Lt("um"),
  Bo = Lt("sp"),
  $o = Lt("rtg"),
  jo = Lt("rtc");
function Ho(t, e = nt) {
  wn("ec", t, e);
}
function yf(t, e, n, s) {
  let r;
  const i = n && n[s];
  if (C(t) || q(t)) {
    r = new Array(t.length);
    for (let o = 0, f = t.length; o < f; o++)
      r[o] = e(t[o], o, void 0, i && i[o]);
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let o = 0; o < t; o++) r[o] = e(o + 1, o, void 0, i && i[o]);
  } else if (D(t))
    if (t[Symbol.iterator])
      r = Array.from(t, (o, f) => e(o, f, void 0, i && i[f]));
    else {
      const o = Object.keys(t);
      r = new Array(o.length);
      for (let f = 0, u = o.length; f < u; f++) {
        const d = o[f];
        r[f] = e(t[d], d, f, i && i[f]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
function wf(t, e, n = {}, s, r) {
  if (k.isCE || (k.parent && Ae(k.parent) && k.parent.isCE))
    return e !== "default" && (n.name = e), ot("slot", n, s && s());
  let i = t[e];
  i && i._c && (i._d = !1), fi();
  const o = i && Zr(i(n)),
    f = ui(
      bt,
      { key: n.key || (o && o.key) || `_${e}` },
      o || (s ? s() : []),
      o && t._ === 1 ? 64 : -2
    );
  return (
    !r && f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    f
  );
}
function Zr(t) {
  return t.some((e) =>
    fn(e) ? !(e.type === Gt || (e.type === bt && !Zr(e.children))) : !0
  )
    ? t
    : null;
}
const Xn = (t) => (t ? (hi(t) ? vn(t) || t.proxy : Xn(t.parent)) : null),
  Te = tt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Xn(t.parent),
    $root: (t) => Xn(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Cs(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        (t.effect.dirty = !0), vs(t.update);
      }),
    $nextTick: (t) => t.n || (t.n = ho.bind(t.proxy)),
    $watch: (t) => To.bind(t),
  }),
  Hn = (t, e) => t !== H && !t.__isScriptSetup && P(t, e),
  Vo = {
    get({ _: t }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: f,
        appContext: u,
      } = t;
      let d;
      if (e[0] !== "$") {
        const N = o[e];
        if (N !== void 0)
          switch (N) {
            case 1:
              return s[e];
            case 2:
              return r[e];
            case 4:
              return n[e];
            case 3:
              return i[e];
          }
        else {
          if (Hn(s, e)) return (o[e] = 1), s[e];
          if (r !== H && P(r, e)) return (o[e] = 2), r[e];
          if ((d = t.propsOptions[0]) && P(d, e)) return (o[e] = 3), i[e];
          if (n !== H && P(n, e)) return (o[e] = 4), n[e];
          Zn && (o[e] = 0);
        }
      }
      const h = Te[e];
      let x, v;
      if (h) return e === "$attrs" && ft(t, "get", e), h(t);
      if ((x = f.__cssModules) && (x = x[e])) return x;
      if (n !== H && P(n, e)) return (o[e] = 4), n[e];
      if (((v = u.config.globalProperties), P(v, e))) return v[e];
    },
    set({ _: t }, e, n) {
      const { data: s, setupState: r, ctx: i } = t;
      return Hn(r, e)
        ? ((r[e] = n), !0)
        : s !== H && P(s, e)
        ? ((s[e] = n), !0)
        : P(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((i[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o
    ) {
      let f;
      return (
        !!n[o] ||
        (t !== H && P(t, o)) ||
        Hn(e, o) ||
        ((f = i[0]) && P(f, o)) ||
        P(s, o) ||
        P(Te, o) ||
        P(r.config.globalProperties, o)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : P(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
function Gs(t) {
  return C(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let Zn = !0;
function Do(t) {
  const e = Cs(t),
    n = t.proxy,
    s = t.ctx;
  (Zn = !1), e.beforeCreate && qs(e.beforeCreate, t, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: f,
    provide: u,
    inject: d,
    created: h,
    beforeMount: x,
    mounted: v,
    beforeUpdate: N,
    updated: W,
    activated: U,
    deactivated: X,
    beforeDestroy: J,
    beforeUnmount: Et,
    destroyed: $,
    unmounted: Z,
    render: at,
    renderTracked: M,
    renderTriggered: Rt,
    errorCaptured: vt,
    serverPrefetch: Tn,
    expose: Yt,
    inheritAttrs: ye,
    components: De,
    directives: Ke,
    filters: On,
  } = e;
  if ((d && Ko(d, s, null), o))
    for (const K in o) {
      const j = o[K];
      O(j) && (s[K] = j.bind(n));
    }
  if (r) {
    const K = r.call(n, n);
    D(K) && (t.data = ys(K));
  }
  if (((Zn = !0), i))
    for (const K in i) {
      const j = i[K],
        Xt = O(j) ? j.bind(n, n) : O(j.get) ? j.get.bind(n, n) : dt,
        ze = !O(j) && O(j.set) ? j.set.bind(n) : dt,
        Zt = wl({ get: Xt, set: ze });
      Object.defineProperty(s, K, {
        enumerable: !0,
        configurable: !0,
        get: () => Zt.value,
        set: (St) => (Zt.value = St),
      });
    }
  if (f) for (const K in f) Qr(f[K], s, n, K);
  if (u) {
    const K = O(u) ? u.call(n) : u;
    Reflect.ownKeys(K).forEach((j) => {
      Yo(j, K[j]);
    });
  }
  h && qs(h, t, "c");
  function st(K, j) {
    C(j) ? j.forEach((Xt) => K(Xt.bind(n))) : j && K(j.bind(n));
  }
  if (
    (st(Po, x),
    st(Mo, v),
    st(Fo, N),
    st(Uo, W),
    st(Oo, U),
    st(No, X),
    st(Ho, vt),
    st(jo, M),
    st($o, Rt),
    st(Lo, Et),
    st(Xr, Z),
    st(Bo, Tn),
    C(Yt))
  )
    if (Yt.length) {
      const K = t.exposed || (t.exposed = {});
      Yt.forEach((j) => {
        Object.defineProperty(K, j, {
          get: () => n[j],
          set: (Xt) => (n[j] = Xt),
        });
      });
    } else t.exposed || (t.exposed = {});
  at && t.render === dt && (t.render = at),
    ye != null && (t.inheritAttrs = ye),
    De && (t.components = De),
    Ke && (t.directives = Ke);
}
function Ko(t, e, n = dt) {
  C(t) && (t = Qn(t));
  for (const s in t) {
    const r = t[s];
    let i;
    D(r)
      ? "default" in r
        ? (i = tn(r.from || s, r.default, !0))
        : (i = tn(r.from || s))
      : (i = tn(r)),
      ct(i)
        ? Object.defineProperty(e, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (e[s] = i);
  }
}
function qs(t, e, n) {
  xt(C(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Qr(t, e, n, s) {
  const r = s.includes(".") ? qr(n, s) : () => n[s];
  if (q(t)) {
    const i = e[t];
    O(i) && jn(r, i);
  } else if (O(t)) jn(r, t.bind(n));
  else if (D(t))
    if (C(t)) t.forEach((i) => Qr(i, e, n, s));
    else {
      const i = O(t.handler) ? t.handler.bind(n) : e[t.handler];
      O(i) && jn(r, i, t);
    }
}
function Cs(t) {
  const e = t.type,
    { mixins: n, extends: s } = e,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = t.appContext,
    f = i.get(e);
  let u;
  return (
    f
      ? (u = f)
      : !r.length && !n && !s
      ? (u = e)
      : ((u = {}), r.length && r.forEach((d) => ln(u, d, o, !0)), ln(u, e, o)),
    D(e) && i.set(e, u),
    u
  );
}
function ln(t, e, n, s = !1) {
  const { mixins: r, extends: i } = e;
  i && ln(t, i, n, !0), r && r.forEach((o) => ln(t, o, n, !0));
  for (const o in e)
    if (!(s && o === "expose")) {
      const f = zo[o] || (n && n[o]);
      t[o] = f ? f(t[o], e[o]) : e[o];
    }
  return t;
}
const zo = {
  data: Js,
  props: Ys,
  emits: Ys,
  methods: Se,
  computed: Se,
  beforeCreate: rt,
  created: rt,
  beforeMount: rt,
  mounted: rt,
  beforeUpdate: rt,
  updated: rt,
  beforeDestroy: rt,
  beforeUnmount: rt,
  destroyed: rt,
  unmounted: rt,
  activated: rt,
  deactivated: rt,
  errorCaptured: rt,
  serverPrefetch: rt,
  components: Se,
  directives: Se,
  watch: Go,
  provide: Js,
  inject: Wo,
};
function Js(t, e) {
  return e
    ? t
      ? function () {
          return tt(
            O(t) ? t.call(this, this) : t,
            O(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function Wo(t, e) {
  return Se(Qn(t), Qn(e));
}
function Qn(t) {
  if (C(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function rt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Se(t, e) {
  return t ? tt(Object.create(null), t, e) : e;
}
function Ys(t, e) {
  return t
    ? C(t) && C(e)
      ? [...new Set([...t, ...e])]
      : tt(Object.create(null), Gs(t), Gs(e ?? {}))
    : e;
}
function Go(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = tt(Object.create(null), t);
  for (const s in e) n[s] = rt(t[s], e[s]);
  return n;
}
function kr() {
  return {
    app: null,
    config: {
      isNativeTag: Ii,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let qo = 0;
function Jo(t, e) {
  return function (s, r = null) {
    O(s) || (s = tt({}, s)), r != null && !D(r) && (r = null);
    const i = kr(),
      o = new WeakSet();
    let f = !1;
    const u = (i.app = {
      _uid: qo++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: xl,
      get config() {
        return i.config;
      },
      set config(d) {},
      use(d, ...h) {
        return (
          o.has(d) ||
            (d && O(d.install)
              ? (o.add(d), d.install(u, ...h))
              : O(d) && (o.add(d), d(u, ...h))),
          u
        );
      },
      mixin(d) {
        return i.mixins.includes(d) || i.mixins.push(d), u;
      },
      component(d, h) {
        return h ? ((i.components[d] = h), u) : i.components[d];
      },
      directive(d, h) {
        return h ? ((i.directives[d] = h), u) : i.directives[d];
      },
      mount(d, h, x) {
        if (!f) {
          const v = ot(s, r);
          return (
            (v.appContext = i),
            x === !0 ? (x = "svg") : x === !1 && (x = void 0),
            h && e ? e(v, d) : t(v, d, x),
            (f = !0),
            (u._container = d),
            (d.__vue_app__ = u),
            vn(v.component) || v.component.proxy
          );
        }
      },
      unmount() {
        f && (t(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, h) {
        return (i.provides[d] = h), u;
      },
      runWithContext(d) {
        const h = Oe;
        Oe = u;
        try {
          return d();
        } finally {
          Oe = h;
        }
      },
    });
    return u;
  };
}
let Oe = null;
function Yo(t, e) {
  if (nt) {
    let n = nt.provides;
    const s = nt.parent && nt.parent.provides;
    s === n && (n = nt.provides = Object.create(s)), (n[t] = e);
  }
}
function tn(t, e, n = !1) {
  const s = nt || k;
  if (s || Oe) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Oe._context.provides;
    if (r && t in r) return r[t];
    if (arguments.length > 1) return n && O(e) ? e.call(s && s.proxy) : e;
  }
}
const ti = {};
function Xo(t, e, n, s = !1) {
  const r = {},
    i = Object.create(ti);
  (t.propsDefaults = Object.create(null)), ei(t, e, r, i);
  for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (t.props = s ? r : io(r)) : t.type.props ? (t.props = r) : (t.props = i),
    (t.attrs = i);
}
function Zo(t, e, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = t,
    f = F(r),
    [u] = t.propsOptions;
  let d = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const h = t.vnode.dynamicProps;
      for (let x = 0; x < h.length; x++) {
        let v = h[x];
        if (bn(t.emitsOptions, v)) continue;
        const N = e[v];
        if (u)
          if (P(i, v)) N !== i[v] && ((i[v] = N), (d = !0));
          else {
            const W = Nt(v);
            r[W] = kn(u, f, W, N, t, !1);
          }
        else N !== i[v] && ((i[v] = N), (d = !0));
      }
    }
  } else {
    ei(t, e, r, i) && (d = !0);
    let h;
    for (const x in f)
      (!e || (!P(e, x) && ((h = be(x)) === x || !P(e, h)))) &&
        (u
          ? n &&
            (n[x] !== void 0 || n[h] !== void 0) &&
            (r[x] = kn(u, f, x, void 0, t, !0))
          : delete r[x]);
    if (i !== f) for (const x in i) (!e || !P(e, x)) && (delete i[x], (d = !0));
  }
  d && Ut(t.attrs, "set", "");
}
function ei(t, e, n, s) {
  const [r, i] = t.propsOptions;
  let o = !1,
    f;
  if (e)
    for (let u in e) {
      if (Ie(u)) continue;
      const d = e[u];
      let h;
      r && P(r, (h = Nt(u)))
        ? !i || !i.includes(h)
          ? (n[h] = d)
          : ((f || (f = {}))[h] = d)
        : bn(t.emitsOptions, u) ||
          ((!(u in s) || d !== s[u]) && ((s[u] = d), (o = !0)));
    }
  if (i) {
    const u = F(n),
      d = f || H;
    for (let h = 0; h < i.length; h++) {
      const x = i[h];
      n[x] = kn(r, u, x, d[x], t, !P(d, x));
    }
  }
  return o;
}
function kn(t, e, n, s, r, i) {
  const o = t[n];
  if (o != null) {
    const f = P(o, "default");
    if (f && s === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && O(u)) {
        const { propsDefaults: d } = r;
        if (n in d) s = d[n];
        else {
          const h = He(r);
          (s = d[n] = u.call(null, e)), h();
        }
      } else s = u;
    }
    o[0] &&
      (i && !f ? (s = !1) : o[1] && (s === "" || s === be(n)) && (s = !0));
  }
  return s;
}
function ni(t, e, n = !1) {
  const s = e.propsCache,
    r = s.get(t);
  if (r) return r;
  const i = t.props,
    o = {},
    f = [];
  let u = !1;
  if (!O(t)) {
    const h = (x) => {
      u = !0;
      const [v, N] = ni(x, e, !0);
      tt(o, v), N && f.push(...N);
    };
    !n && e.mixins.length && e.mixins.forEach(h),
      t.extends && h(t.extends),
      t.mixins && t.mixins.forEach(h);
  }
  if (!i && !u) return D(t) && s.set(t, he), he;
  if (C(i))
    for (let h = 0; h < i.length; h++) {
      const x = Nt(i[h]);
      Xs(x) && (o[x] = H);
    }
  else if (i)
    for (const h in i) {
      const x = Nt(h);
      if (Xs(x)) {
        const v = i[h],
          N = (o[x] = C(v) || O(v) ? { type: v } : tt({}, v));
        if (N) {
          const W = ks(Boolean, N.type),
            U = ks(String, N.type);
          (N[0] = W > -1),
            (N[1] = U < 0 || W < U),
            (W > -1 || P(N, "default")) && f.push(x);
        }
      }
    }
  const d = [o, f];
  return D(t) && s.set(t, d), d;
}
function Xs(t) {
  return t[0] !== "$" && !Ie(t);
}
function Zs(t) {
  return t === null
    ? "null"
    : typeof t == "function"
    ? t.name || ""
    : (typeof t == "object" && t.constructor && t.constructor.name) || "";
}
function Qs(t, e) {
  return Zs(t) === Zs(e);
}
function ks(t, e) {
  return C(e) ? e.findIndex((n) => Qs(n, t)) : O(e) && Qs(e, t) ? 0 : -1;
}
const si = (t) => t[0] === "_" || t === "$stable",
  As = (t) => (C(t) ? t.map(Tt) : [Tt(t)]),
  Qo = (t, e, n) => {
    if (e._n) return e;
    const s = yo((...r) => As(e(...r)), n);
    return (s._c = !1), s;
  },
  ri = (t, e, n) => {
    const s = t._ctx;
    for (const r in t) {
      if (si(r)) continue;
      const i = t[r];
      if (O(i)) e[r] = Qo(r, i, s);
      else if (i != null) {
        const o = As(i);
        e[r] = () => o;
      }
    }
  },
  ii = (t, e) => {
    const n = As(e);
    t.slots.default = () => n;
  },
  ko = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = F(e)), yr(t.slots, "_", n)) : ri(e, (t.slots = {}));
    } else (t.slots = {}), e && ii(t, e);
  },
  tl = (t, e, n) => {
    const { vnode: s, slots: r } = t;
    let i = !0,
      o = H;
    if (s.shapeFlag & 32) {
      const f = e._;
      f
        ? n && f === 1
          ? (i = !1)
          : (tt(r, e), !n && f === 1 && delete r._)
        : ((i = !e.$stable), ri(e, r)),
        (o = e);
    } else e && (ii(t, e), (o = { default: 1 }));
    if (i) for (const f in r) !si(f) && o[f] == null && delete r[f];
  };
function ts(t, e, n, s, r = !1) {
  if (C(t)) {
    t.forEach((v, N) => ts(v, e && (C(e) ? e[N] : e), n, s, r));
    return;
  }
  if (Ae(s) && !r) return;
  const i = s.shapeFlag & 4 ? vn(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: f, r: u } = t,
    d = e && e.r,
    h = f.refs === H ? (f.refs = {}) : f.refs,
    x = f.setupState;
  if (
    (d != null &&
      d !== u &&
      (q(d)
        ? ((h[d] = null), P(x, d) && (x[d] = null))
        : ct(d) && (d.value = null)),
    O(u))
  )
    zt(u, f, 12, [o, h]);
  else {
    const v = q(u),
      N = ct(u);
    if (v || N) {
      const W = () => {
        if (t.f) {
          const U = v ? (P(x, u) ? x[u] : h[u]) : u.value;
          r
            ? C(U) && us(U, i)
            : C(U)
            ? U.includes(i) || U.push(i)
            : v
            ? ((h[u] = [i]), P(x, u) && (x[u] = h[u]))
            : ((u.value = [i]), t.k && (h[t.k] = u.value));
        } else
          v
            ? ((h[u] = o), P(x, u) && (x[u] = o))
            : N && ((u.value = o), t.k && (h[t.k] = o));
      };
      o ? ((W.id = -1), lt(W, n)) : W();
    }
  }
}
const lt = Io;
function el(t) {
  return nl(t);
}
function nl(t, e) {
  const n = wr();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: f,
      createComment: u,
      setText: d,
      setElementText: h,
      parentNode: x,
      nextSibling: v,
      setScopeId: N = dt,
      insertStaticContent: W,
    } = t,
    U = (
      l,
      c,
      a,
      p = null,
      g = null,
      b = null,
      w = void 0,
      _ = null,
      y = !!c.dynamicChildren
    ) => {
      if (l === c) return;
      l && !xe(l, c) && ((p = We(l)), St(l, g, b, !0), (l = null)),
        c.patchFlag === -2 && ((y = !1), (c.dynamicChildren = null));
      const { type: m, ref: E, shapeFlag: I } = c;
      switch (m) {
        case xn:
          X(l, c, a, p);
          break;
        case Gt:
          J(l, c, a, p);
          break;
        case en:
          l == null && Et(c, a, p, w);
          break;
        case bt:
          De(l, c, a, p, g, b, w, _, y);
          break;
        default:
          I & 1
            ? at(l, c, a, p, g, b, w, _, y)
            : I & 6
            ? Ke(l, c, a, p, g, b, w, _, y)
            : (I & 64 || I & 128) && m.process(l, c, a, p, g, b, w, _, y, le);
      }
      E != null && g && ts(E, l && l.ref, b, c || l, !c);
    },
    X = (l, c, a, p) => {
      if (l == null) s((c.el = f(c.children)), a, p);
      else {
        const g = (c.el = l.el);
        c.children !== l.children && d(g, c.children);
      }
    },
    J = (l, c, a, p) => {
      l == null ? s((c.el = u(c.children || "")), a, p) : (c.el = l.el);
    },
    Et = (l, c, a, p) => {
      [l.el, l.anchor] = W(l.children, c, a, p, l.el, l.anchor);
    },
    $ = ({ el: l, anchor: c }, a, p) => {
      let g;
      for (; l && l !== c; ) (g = v(l)), s(l, a, p), (l = g);
      s(c, a, p);
    },
    Z = ({ el: l, anchor: c }) => {
      let a;
      for (; l && l !== c; ) (a = v(l)), r(l), (l = a);
      r(c);
    },
    at = (l, c, a, p, g, b, w, _, y) => {
      c.type === "svg" ? (w = "svg") : c.type === "math" && (w = "mathml"),
        l == null ? M(c, a, p, g, b, w, _, y) : Tn(l, c, g, b, w, _, y);
    },
    M = (l, c, a, p, g, b, w, _) => {
      let y, m;
      const { props: E, shapeFlag: I, transition: S, dirs: A } = l;
      if (
        ((y = l.el = o(l.type, b, E && E.is, E)),
        I & 8
          ? h(y, l.children)
          : I & 16 && vt(l.children, y, null, p, g, Vn(l, b), w, _),
        A && Qt(l, null, p, "created"),
        Rt(y, l, l.scopeId, w, p),
        E)
      ) {
        for (const L in E)
          L !== "value" &&
            !Ie(L) &&
            i(y, L, null, E[L], b, l.children, p, g, Pt);
        "value" in E && i(y, "value", null, E.value, b),
          (m = E.onVnodeBeforeMount) && At(m, p, l);
      }
      A && Qt(l, null, p, "beforeMount");
      const R = sl(g, S);
      R && S.beforeEnter(y),
        s(y, c, a),
        ((m = E && E.onVnodeMounted) || R || A) &&
          lt(() => {
            m && At(m, p, l), R && S.enter(y), A && Qt(l, null, p, "mounted");
          }, g);
    },
    Rt = (l, c, a, p, g) => {
      if ((a && N(l, a), p)) for (let b = 0; b < p.length; b++) N(l, p[b]);
      if (g) {
        let b = g.subTree;
        if (c === b) {
          const w = g.vnode;
          Rt(l, w, w.scopeId, w.slotScopeIds, g.parent);
        }
      }
    },
    vt = (l, c, a, p, g, b, w, _, y = 0) => {
      for (let m = y; m < l.length; m++) {
        const E = (l[m] = _ ? Ht(l[m]) : Tt(l[m]));
        U(null, E, c, a, p, g, b, w, _);
      }
    },
    Tn = (l, c, a, p, g, b, w) => {
      const _ = (c.el = l.el);
      let { patchFlag: y, dynamicChildren: m, dirs: E } = c;
      y |= l.patchFlag & 16;
      const I = l.props || H,
        S = c.props || H;
      let A;
      if (
        (a && kt(a, !1),
        (A = S.onVnodeBeforeUpdate) && At(A, a, c, l),
        E && Qt(c, l, a, "beforeUpdate"),
        a && kt(a, !0),
        m
          ? Yt(l.dynamicChildren, m, _, a, p, Vn(c, g), b)
          : w || j(l, c, _, null, a, p, Vn(c, g), b, !1),
        y > 0)
      ) {
        if (y & 16) ye(_, c, I, S, a, p, g);
        else if (
          (y & 2 && I.class !== S.class && i(_, "class", null, S.class, g),
          y & 4 && i(_, "style", I.style, S.style, g),
          y & 8)
        ) {
          const R = c.dynamicProps;
          for (let L = 0; L < R.length; L++) {
            const V = R[L],
              Q = I[V],
              ht = S[V];
            (ht !== Q || V === "value") &&
              i(_, V, Q, ht, g, l.children, a, p, Pt);
          }
        }
        y & 1 && l.children !== c.children && h(_, c.children);
      } else !w && m == null && ye(_, c, I, S, a, p, g);
      ((A = S.onVnodeUpdated) || E) &&
        lt(() => {
          A && At(A, a, c, l), E && Qt(c, l, a, "updated");
        }, p);
    },
    Yt = (l, c, a, p, g, b, w) => {
      for (let _ = 0; _ < c.length; _++) {
        const y = l[_],
          m = c[_],
          E =
            y.el && (y.type === bt || !xe(y, m) || y.shapeFlag & 70)
              ? x(y.el)
              : a;
        U(y, m, E, null, p, g, b, w, !0);
      }
    },
    ye = (l, c, a, p, g, b, w) => {
      if (a !== p) {
        if (a !== H)
          for (const _ in a)
            !Ie(_) && !(_ in p) && i(l, _, a[_], null, w, c.children, g, b, Pt);
        for (const _ in p) {
          if (Ie(_)) continue;
          const y = p[_],
            m = a[_];
          y !== m && _ !== "value" && i(l, _, m, y, w, c.children, g, b, Pt);
        }
        "value" in p && i(l, "value", a.value, p.value, w);
      }
    },
    De = (l, c, a, p, g, b, w, _, y) => {
      const m = (c.el = l ? l.el : f("")),
        E = (c.anchor = l ? l.anchor : f(""));
      let { patchFlag: I, dynamicChildren: S, slotScopeIds: A } = c;
      A && (_ = _ ? _.concat(A) : A),
        l == null
          ? (s(m, a, p), s(E, a, p), vt(c.children || [], a, E, g, b, w, _, y))
          : I > 0 && I & 64 && S && l.dynamicChildren
          ? (Yt(l.dynamicChildren, S, a, g, b, w, _),
            (c.key != null || (g && c === g.subTree)) && oi(l, c, !0))
          : j(l, c, a, E, g, b, w, _, y);
    },
    Ke = (l, c, a, p, g, b, w, _, y) => {
      (c.slotScopeIds = _),
        l == null
          ? c.shapeFlag & 512
            ? g.ctx.activate(c, a, p, w, y)
            : On(c, a, p, g, b, w, y)
          : Os(l, c, y);
    },
    On = (l, c, a, p, g, b, w) => {
      const _ = (l.component = hl(l, p, g));
      if ((Jr(l) && (_.ctx.renderer = le), pl(_), _.asyncDep)) {
        if ((g && g.registerDep(_, st), !l.el)) {
          const y = (_.subTree = ot(Gt));
          J(null, y, c, a);
        }
      } else st(_, l, c, a, g, b, w);
    },
    Os = (l, c, a) => {
      const p = (c.component = l.component);
      if (Eo(l, c, a))
        if (p.asyncDep && !p.asyncResolved) {
          K(p, c, a);
          return;
        } else (p.next = c), go(p.update), (p.effect.dirty = !0), p.update();
      else (c.el = l.el), (p.vnode = c);
    },
    st = (l, c, a, p, g, b, w) => {
      const _ = () => {
          if (l.isMounted) {
            let { next: E, bu: I, u: S, parent: A, vnode: R } = l;
            {
              const fe = li(l);
              if (fe) {
                E && ((E.el = R.el), K(l, E, w)),
                  fe.asyncDep.then(() => {
                    l.isUnmounted || _();
                  });
                return;
              }
            }
            let L = E,
              V;
            kt(l, !1),
              E ? ((E.el = R.el), K(l, E, w)) : (E = R),
              I && Ln(I),
              (V = E.props && E.props.onVnodeBeforeUpdate) && At(V, A, E, R),
              kt(l, !0);
            const Q = $n(l),
              ht = l.subTree;
            (l.subTree = Q),
              U(ht, Q, x(ht.el), We(ht), l, g, b),
              (E.el = Q.el),
              L === null && vo(l, Q.el),
              S && lt(S, g),
              (V = E.props && E.props.onVnodeUpdated) &&
                lt(() => At(V, A, E, R), g);
          } else {
            let E;
            const { el: I, props: S } = c,
              { bm: A, m: R, parent: L } = l,
              V = Ae(c);
            if (
              (kt(l, !1),
              A && Ln(A),
              !V && (E = S && S.onVnodeBeforeMount) && At(E, L, c),
              kt(l, !0),
              I && Pn)
            ) {
              const Q = () => {
                (l.subTree = $n(l)), Pn(I, l.subTree, l, g, null);
              };
              V
                ? c.type.__asyncLoader().then(() => !l.isUnmounted && Q())
                : Q();
            } else {
              const Q = (l.subTree = $n(l));
              U(null, Q, a, p, l, g, b), (c.el = Q.el);
            }
            if ((R && lt(R, g), !V && (E = S && S.onVnodeMounted))) {
              const Q = c;
              lt(() => At(E, L, Q), g);
            }
            (c.shapeFlag & 256 ||
              (L && Ae(L.vnode) && L.vnode.shapeFlag & 256)) &&
              l.a &&
              lt(l.a, g),
              (l.isMounted = !0),
              (c = a = p = null);
          }
        },
        y = (l.effect = new ps(_, dt, () => vs(m), l.scope)),
        m = (l.update = () => {
          y.dirty && y.run();
        });
      (m.id = l.uid), kt(l, !0), m();
    },
    K = (l, c, a) => {
      c.component = l;
      const p = l.vnode.props;
      (l.vnode = c),
        (l.next = null),
        Zo(l, c.props, p, a),
        tl(l, c.children, a),
        qt(),
        Ks(l),
        Jt();
    },
    j = (l, c, a, p, g, b, w, _, y = !1) => {
      const m = l && l.children,
        E = l ? l.shapeFlag : 0,
        I = c.children,
        { patchFlag: S, shapeFlag: A } = c;
      if (S > 0) {
        if (S & 128) {
          ze(m, I, a, p, g, b, w, _, y);
          return;
        } else if (S & 256) {
          Xt(m, I, a, p, g, b, w, _, y);
          return;
        }
      }
      A & 8
        ? (E & 16 && Pt(m, g, b), I !== m && h(a, I))
        : E & 16
        ? A & 16
          ? ze(m, I, a, p, g, b, w, _, y)
          : Pt(m, g, b, !0)
        : (E & 8 && h(a, ""), A & 16 && vt(I, a, p, g, b, w, _, y));
    },
    Xt = (l, c, a, p, g, b, w, _, y) => {
      (l = l || he), (c = c || he);
      const m = l.length,
        E = c.length,
        I = Math.min(m, E);
      let S;
      for (S = 0; S < I; S++) {
        const A = (c[S] = y ? Ht(c[S]) : Tt(c[S]));
        U(l[S], A, a, null, g, b, w, _, y);
      }
      m > E ? Pt(l, g, b, !0, !1, I) : vt(c, a, p, g, b, w, _, y, I);
    },
    ze = (l, c, a, p, g, b, w, _, y) => {
      let m = 0;
      const E = c.length;
      let I = l.length - 1,
        S = E - 1;
      for (; m <= I && m <= S; ) {
        const A = l[m],
          R = (c[m] = y ? Ht(c[m]) : Tt(c[m]));
        if (xe(A, R)) U(A, R, a, null, g, b, w, _, y);
        else break;
        m++;
      }
      for (; m <= I && m <= S; ) {
        const A = l[I],
          R = (c[S] = y ? Ht(c[S]) : Tt(c[S]));
        if (xe(A, R)) U(A, R, a, null, g, b, w, _, y);
        else break;
        I--, S--;
      }
      if (m > I) {
        if (m <= S) {
          const A = S + 1,
            R = A < E ? c[A].el : p;
          for (; m <= S; )
            U(null, (c[m] = y ? Ht(c[m]) : Tt(c[m])), a, R, g, b, w, _, y), m++;
        }
      } else if (m > S) for (; m <= I; ) St(l[m], g, b, !0), m++;
      else {
        const A = m,
          R = m,
          L = new Map();
        for (m = R; m <= S; m++) {
          const ut = (c[m] = y ? Ht(c[m]) : Tt(c[m]));
          ut.key != null && L.set(ut.key, m);
        }
        let V,
          Q = 0;
        const ht = S - R + 1;
        let fe = !1,
          Ps = 0;
        const we = new Array(ht);
        for (m = 0; m < ht; m++) we[m] = 0;
        for (m = A; m <= I; m++) {
          const ut = l[m];
          if (Q >= ht) {
            St(ut, g, b, !0);
            continue;
          }
          let It;
          if (ut.key != null) It = L.get(ut.key);
          else
            for (V = R; V <= S; V++)
              if (we[V - R] === 0 && xe(ut, c[V])) {
                It = V;
                break;
              }
          It === void 0
            ? St(ut, g, b, !0)
            : ((we[It - R] = m + 1),
              It >= Ps ? (Ps = It) : (fe = !0),
              U(ut, c[It], a, null, g, b, w, _, y),
              Q++);
        }
        const Ms = fe ? rl(we) : he;
        for (V = Ms.length - 1, m = ht - 1; m >= 0; m--) {
          const ut = R + m,
            It = c[ut],
            Fs = ut + 1 < E ? c[ut + 1].el : p;
          we[m] === 0
            ? U(null, It, a, Fs, g, b, w, _, y)
            : fe && (V < 0 || m !== Ms[V] ? Zt(It, a, Fs, 2) : V--);
        }
      }
    },
    Zt = (l, c, a, p, g = null) => {
      const { el: b, type: w, transition: _, children: y, shapeFlag: m } = l;
      if (m & 6) {
        Zt(l.component.subTree, c, a, p);
        return;
      }
      if (m & 128) {
        l.suspense.move(c, a, p);
        return;
      }
      if (m & 64) {
        w.move(l, c, a, le);
        return;
      }
      if (w === bt) {
        s(b, c, a);
        for (let I = 0; I < y.length; I++) Zt(y[I], c, a, p);
        s(l.anchor, c, a);
        return;
      }
      if (w === en) {
        $(l, c, a);
        return;
      }
      if (p !== 2 && m & 1 && _)
        if (p === 0) _.beforeEnter(b), s(b, c, a), lt(() => _.enter(b), g);
        else {
          const { leave: I, delayLeave: S, afterLeave: A } = _,
            R = () => s(b, c, a),
            L = () => {
              I(b, () => {
                R(), A && A();
              });
            };
          S ? S(b, R, L) : L();
        }
      else s(b, c, a);
    },
    St = (l, c, a, p = !1, g = !1) => {
      const {
        type: b,
        props: w,
        ref: _,
        children: y,
        dynamicChildren: m,
        shapeFlag: E,
        patchFlag: I,
        dirs: S,
      } = l;
      if ((_ != null && ts(_, null, a, l, !0), E & 256)) {
        c.ctx.deactivate(l);
        return;
      }
      const A = E & 1 && S,
        R = !Ae(l);
      let L;
      if ((R && (L = w && w.onVnodeBeforeUnmount) && At(L, c, l), E & 6))
        Ei(l.component, a, p);
      else {
        if (E & 128) {
          l.suspense.unmount(a, p);
          return;
        }
        A && Qt(l, null, c, "beforeUnmount"),
          E & 64
            ? l.type.remove(l, c, a, g, le, p)
            : m && (b !== bt || (I > 0 && I & 64))
            ? Pt(m, c, a, !1, !0)
            : ((b === bt && I & 384) || (!g && E & 16)) && Pt(y, c, a),
          p && Ns(l);
      }
      ((R && (L = w && w.onVnodeUnmounted)) || A) &&
        lt(() => {
          L && At(L, c, l), A && Qt(l, null, c, "unmounted");
        }, a);
    },
    Ns = (l) => {
      const { type: c, el: a, anchor: p, transition: g } = l;
      if (c === bt) {
        xi(a, p);
        return;
      }
      if (c === en) {
        Z(l);
        return;
      }
      const b = () => {
        r(a), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (l.shapeFlag & 1 && g && !g.persisted) {
        const { leave: w, delayLeave: _ } = g,
          y = () => w(a, b);
        _ ? _(l.el, b, y) : y();
      } else b();
    },
    xi = (l, c) => {
      let a;
      for (; l !== c; ) (a = v(l)), r(l), (l = a);
      r(c);
    },
    Ei = (l, c, a) => {
      const { bum: p, scope: g, update: b, subTree: w, um: _ } = l;
      p && Ln(p),
        g.stop(),
        b && ((b.active = !1), St(w, l, c, a)),
        _ && lt(_, c),
        lt(() => {
          l.isUnmounted = !0;
        }, c),
        c &&
          c.pendingBranch &&
          !c.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === c.pendingId &&
          (c.deps--, c.deps === 0 && c.resolve());
    },
    Pt = (l, c, a, p = !1, g = !1, b = 0) => {
      for (let w = b; w < l.length; w++) St(l[w], c, a, p, g);
    },
    We = (l) =>
      l.shapeFlag & 6
        ? We(l.component.subTree)
        : l.shapeFlag & 128
        ? l.suspense.next()
        : v(l.anchor || l.el);
  let Nn = !1;
  const Rs = (l, c, a) => {
      l == null
        ? c._vnode && St(c._vnode, null, null, !0)
        : U(c._vnode || null, l, c, null, null, null, a),
        Nn || ((Nn = !0), Ks(), Dr(), (Nn = !1)),
        (c._vnode = l);
    },
    le = {
      p: U,
      um: St,
      m: Zt,
      r: Ns,
      mt: On,
      mc: vt,
      pc: j,
      pbc: Yt,
      n: We,
      o: t,
    };
  let Rn, Pn;
  return (
    e && ([Rn, Pn] = e(le)), { render: Rs, hydrate: Rn, createApp: Jo(Rs, Rn) }
  );
}
function Vn({ type: t, props: e }, n) {
  return (n === "svg" && t === "foreignObject") ||
    (n === "mathml" &&
      t === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : n;
}
function kt({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function sl(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function oi(t, e, n = !1) {
  const s = t.children,
    r = e.children;
  if (C(s) && C(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let f = r[i];
      f.shapeFlag & 1 &&
        !f.dynamicChildren &&
        ((f.patchFlag <= 0 || f.patchFlag === 32) &&
          ((f = r[i] = Ht(r[i])), (f.el = o.el)),
        n || oi(o, f)),
        f.type === xn && (f.el = o.el);
    }
}
function rl(t) {
  const e = t.slice(),
    n = [0];
  let s, r, i, o, f;
  const u = t.length;
  for (s = 0; s < u; s++) {
    const d = t[s];
    if (d !== 0) {
      if (((r = n[n.length - 1]), t[r] < d)) {
        (e[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (f = (i + o) >> 1), t[n[f]] < d ? (i = f + 1) : (o = f);
      d < t[n[i]] && (i > 0 && (e[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = e[o]);
  return n;
}
function li(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : li(e);
}
const il = (t) => t.__isTeleport,
  bt = Symbol.for("v-fgt"),
  xn = Symbol.for("v-txt"),
  Gt = Symbol.for("v-cmt"),
  en = Symbol.for("v-stc"),
  Ne = [];
let wt = null;
function fi(t = !1) {
  Ne.push((wt = t ? null : []));
}
function ol() {
  Ne.pop(), (wt = Ne[Ne.length - 1] || null);
}
let Ue = 1;
function tr(t) {
  Ue += t;
}
function ci(t) {
  return (
    (t.dynamicChildren = Ue > 0 ? wt || he : null),
    ol(),
    Ue > 0 && wt && wt.push(t),
    t
  );
}
function xf(t, e, n, s, r, i) {
  return ci(di(t, e, n, s, r, i, !0));
}
function ui(t, e, n, s, r) {
  return ci(ot(t, e, n, s, r, !0));
}
function fn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function xe(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ai = ({ key: t }) => t ?? null,
  nn = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? q(t) || ct(t) || O(t)
        ? { i: k, r: t, k: e, f: !!n }
        : t
      : null
  );
function di(
  t,
  e = null,
  n = null,
  s = 0,
  r = null,
  i = t === bt ? 0 : 1,
  o = !1,
  f = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ai(e),
    ref: e && nn(e),
    scopeId: yn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: k,
  };
  return (
    f
      ? (Ts(u, n), i & 128 && t.normalize(u))
      : n && (u.shapeFlag |= q(n) ? 8 : 16),
    Ue > 0 &&
      !o &&
      wt &&
      (u.patchFlag > 0 || i & 6) &&
      u.patchFlag !== 32 &&
      wt.push(u),
    u
  );
}
const ot = ll;
function ll(t, e = null, n = null, s = 0, r = null, i = !1) {
  if (((!t || t === Wr) && (t = Gt), fn(t))) {
    const f = _e(t, e, !0);
    return (
      n && Ts(f, n),
      Ue > 0 &&
        !i &&
        wt &&
        (f.shapeFlag & 6 ? (wt[wt.indexOf(t)] = f) : wt.push(f)),
      (f.patchFlag |= -2),
      f
    );
  }
  if ((yl(t) && (t = t.__vccOpts), e)) {
    e = fl(e);
    let { class: f, style: u } = e;
    f && !q(f) && (e.class = hs(f)),
      D(u) && (Ur(u) && !C(u) && (u = tt({}, u)), (e.style = ds(u)));
  }
  const o = q(t) ? 1 : So(t) ? 128 : il(t) ? 64 : D(t) ? 4 : O(t) ? 2 : 0;
  return di(t, e, n, s, r, o, i, !0);
}
function fl(t) {
  return t ? (Ur(t) || Object.getPrototypeOf(t) === ti ? tt({}, t) : t) : null;
}
function _e(t, e, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = t,
    f = e ? ul(s || {}, e) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: f,
    key: f && ai(f),
    ref:
      e && e.ref ? (n && r ? (C(r) ? r.concat(nn(e)) : [r, nn(e)]) : nn(e)) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== bt ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && _e(t.ssContent),
    ssFallback: t.ssFallback && _e(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
  };
}
function cl(t = " ", e = 0) {
  return ot(xn, null, t, e);
}
function Ef(t, e) {
  const n = ot(en, null, t);
  return (n.staticCount = e), n;
}
function vf(t = "", e = !1) {
  return e ? (fi(), ui(Gt, null, t)) : ot(Gt, null, t);
}
function Tt(t) {
  return t == null || typeof t == "boolean"
    ? ot(Gt)
    : C(t)
    ? ot(bt, null, t.slice())
    : typeof t == "object"
    ? Ht(t)
    : ot(xn, null, String(t));
}
function Ht(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : _e(t);
}
function Ts(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (C(e)) n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Ts(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      r
        ? r === 3 &&
          k &&
          (k.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)))
        : (e._ctx = k);
    }
  else
    O(e)
      ? ((e = { default: e, _ctx: k }), (n = 32))
      : ((e = String(e)), s & 64 ? ((n = 16), (e = [cl(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function ul(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const r in s)
      if (r === "class")
        e.class !== s.class && (e.class = hs([e.class, s.class]));
      else if (r === "style") e.style = ds([e.style, s.style]);
      else if (dn(r)) {
        const i = e[r],
          o = s[r];
        o &&
          i !== o &&
          !(C(i) && i.includes(o)) &&
          (e[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (e[r] = s[r]);
  }
  return e;
}
function At(t, e, n, s = null) {
  xt(t, e, 7, [n, s]);
}
const al = kr();
let dl = 0;
function hl(t, e, n) {
  const s = t.type,
    r = (e ? e.appContext : t.appContext) || al,
    i = {
      uid: dl++,
      vnode: t,
      type: s,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Bi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ni(s, r),
      emitsOptions: zr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: H,
      inheritAttrs: s.inheritAttrs,
      ctx: H,
      data: H,
      props: H,
      attrs: H,
      slots: H,
      refs: H,
      setupState: H,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = e ? e.root : i),
    (i.emit = bo.bind(null, i)),
    t.ce && t.ce(i),
    i
  );
}
let nt = null,
  cn,
  es;
{
  const t = wr(),
    e = (n, s) => {
      let r;
      return (
        (r = t[n]) || (r = t[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
        }
      );
    };
  (cn = e("__VUE_INSTANCE_SETTERS__", (n) => (nt = n))),
    (es = e("__VUE_SSR_SETTERS__", (n) => (En = n)));
}
const He = (t) => {
    const e = nt;
    return (
      cn(t),
      t.scope.on(),
      () => {
        t.scope.off(), cn(e);
      }
    );
  },
  er = () => {
    nt && nt.scope.off(), cn(null);
  };
function hi(t) {
  return t.vnode.shapeFlag & 4;
}
let En = !1;
function pl(t, e = !1) {
  e && es(e);
  const { props: n, children: s } = t.vnode,
    r = hi(t);
  Xo(t, n, r, e), ko(t, s);
  const i = r ? gl(t, e) : void 0;
  return e && es(!1), i;
}
function gl(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Vo));
  const { setup: s } = n;
  if (s) {
    const r = (t.setupContext = s.length > 1 ? _l(t) : null),
      i = He(t);
    qt();
    const o = zt(s, t, 0, [t.props, r]);
    if ((Jt(), i(), mr(o))) {
      if ((o.then(er, er), e))
        return o
          .then((f) => {
            nr(t, f, e);
          })
          .catch((f) => {
            _n(f, t, 0);
          });
      t.asyncDep = o;
    } else nr(t, o, e);
  } else pi(t, e);
}
function nr(t, e, n) {
  O(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : D(e) && (t.setupState = jr(e)),
    pi(t, n);
}
let sr;
function pi(t, e, n) {
  const s = t.type;
  if (!t.render) {
    if (!e && sr && !s.render) {
      const r = s.template || Cs(t).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = t.appContext.config,
          { delimiters: f, compilerOptions: u } = s,
          d = tt(tt({ isCustomElement: i, delimiters: f }, o), u);
        s.render = sr(r, d);
      }
    }
    t.render = s.render || dt;
  }
  {
    const r = He(t);
    qt();
    try {
      Do(t);
    } finally {
      Jt(), r();
    }
  }
}
const ml = {
  get(t, e) {
    return ft(t, "get", ""), t[e];
  },
};
function _l(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, ml),
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function vn(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(jr(oo(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in Te) return Te[n](t);
        },
        has(e, n) {
          return n in e || n in Te;
        },
      }))
    );
}
function bl(t, e = !0) {
  return O(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function yl(t) {
  return O(t) && "__vccOpts" in t;
}
const wl = (t, e) => lo(t, e, En);
function Sf(t, e, n) {
  const s = arguments.length;
  return s === 2
    ? D(e) && !C(e)
      ? fn(e)
        ? ot(t, null, [e])
        : ot(t, e)
      : ot(t, null, e)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && fn(n) && (n = [n]),
      ot(t, e, n));
}
const xl = "3.4.22";
/**
 * @vue/runtime-dom v3.4.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const El = "http://www.w3.org/2000/svg",
  vl = "http://www.w3.org/1998/Math/MathML",
  Vt = typeof document < "u" ? document : null,
  rr = Vt && Vt.createElement("template"),
  Sl = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, s) => {
      const r =
        e === "svg"
          ? Vt.createElementNS(El, t)
          : e === "mathml"
          ? Vt.createElementNS(vl, t)
          : Vt.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (t) => Vt.createTextNode(t),
    createComment: (t) => Vt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Vt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, s, r, i) {
      const o = n ? n.previousSibling : e.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          e.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        rr.innerHTML =
          s === "svg"
            ? `<svg>${t}</svg>`
            : s === "mathml"
            ? `<math>${t}</math>`
            : t;
        const f = rr.content;
        if (s === "svg" || s === "mathml") {
          const u = f.firstChild;
          for (; u.firstChild; ) f.appendChild(u.firstChild);
          f.removeChild(u);
        }
        e.insertBefore(f, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  },
  Il = Symbol("_vtc");
function Cl(t, e, n) {
  const s = t[Il];
  s && (e = (e ? [e, ...s] : [...s]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
const un = Symbol("_vod"),
  gi = Symbol("_vsh"),
  If = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t[un] = t.style.display === "none" ? "" : t.style.display),
        n && e ? n.beforeEnter(t) : Ee(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: s }) {
      !e != !n &&
        (s
          ? e
            ? (s.beforeEnter(t), Ee(t, !0), s.enter(t))
            : s.leave(t, () => {
                Ee(t, !1);
              })
          : Ee(t, e));
    },
    beforeUnmount(t, { value: e }) {
      Ee(t, e);
    },
  };
function Ee(t, e) {
  (t.style.display = e ? t[un] : "none"), (t[gi] = !e);
}
const Al = Symbol(""),
  Tl = /(^|;)\s*display\s*:/;
function Ol(t, e, n) {
  const s = t.style,
    r = q(n);
  let i = !1;
  if (n && !r) {
    if (e)
      if (q(e))
        for (const o of e.split(";")) {
          const f = o.slice(0, o.indexOf(":")).trim();
          n[f] == null && sn(s, f, "");
        }
      else for (const o in e) n[o] == null && sn(s, o, "");
    for (const o in n) o === "display" && (i = !0), sn(s, o, n[o]);
  } else if (r) {
    if (e !== n) {
      const o = s[Al];
      o && (n += ";" + o), (s.cssText = n), (i = Tl.test(n));
    }
  } else e && t.removeAttribute("style");
  un in t && ((t[un] = i ? s.display : ""), t[gi] && (s.display = "none"));
}
const ir = /\s*!important$/;
function sn(t, e, n) {
  if (C(n)) n.forEach((s) => sn(t, e, s));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const s = Nl(t, e);
    ir.test(n)
      ? t.setProperty(be(s), n.replace(ir, ""), "important")
      : (t[s] = n);
  }
}
const or = ["Webkit", "Moz", "ms"],
  Dn = {};
function Nl(t, e) {
  const n = Dn[e];
  if (n) return n;
  let s = Nt(e);
  if (s !== "filter" && s in t) return (Dn[e] = s);
  s = gn(s);
  for (let r = 0; r < or.length; r++) {
    const i = or[r] + s;
    if (i in t) return (Dn[e] = i);
  }
  return e;
}
const lr = "http://www.w3.org/1999/xlink";
function Rl(t, e, n, s, r) {
  if (s && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(lr, e.slice(6, e.length))
      : t.setAttributeNS(lr, e, n);
  else {
    const i = Li(e);
    n == null || (i && !xr(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, i ? "" : n);
  }
}
function Pl(t, e, n, s, r, i, o) {
  if (e === "innerHTML" || e === "textContent") {
    s && o(s, r, i), (t[e] = n ?? "");
    return;
  }
  const f = t.tagName;
  if (e === "value" && f !== "PROGRESS" && !f.includes("-")) {
    const d = f === "OPTION" ? t.getAttribute("value") || "" : t.value,
      h = n ?? "";
    (d !== h || !("_value" in t)) && (t.value = h),
      n == null && t.removeAttribute(e),
      (t._value = n);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof t[e];
    d === "boolean"
      ? (n = xr(n))
      : n == null && d === "string"
      ? ((n = ""), (u = !0))
      : d === "number" && ((n = 0), (u = !0));
  }
  try {
    t[e] = n;
  } catch {}
  u && t.removeAttribute(e);
}
function Ml(t, e, n, s) {
  t.addEventListener(e, n, s);
}
function Fl(t, e, n, s) {
  t.removeEventListener(e, n, s);
}
const fr = Symbol("_vei");
function Ul(t, e, n, s, r = null) {
  const i = t[fr] || (t[fr] = {}),
    o = i[e];
  if (s && o) o.value = s;
  else {
    const [f, u] = Ll(e);
    if (s) {
      const d = (i[e] = jl(s, r));
      Ml(t, f, d, u);
    } else o && (Fl(t, f, o, u), (i[e] = void 0));
  }
}
const cr = /(?:Once|Passive|Capture)$/;
function Ll(t) {
  let e;
  if (cr.test(t)) {
    e = {};
    let s;
    for (; (s = t.match(cr)); )
      (t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : be(t.slice(2)), e];
}
let Kn = 0;
const Bl = Promise.resolve(),
  $l = () => Kn || (Bl.then(() => (Kn = 0)), (Kn = Date.now()));
function jl(t, e) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    xt(Hl(s, n.value), e, 5, [s]);
  };
  return (n.value = t), (n.attached = $l()), n;
}
function Hl(t, e) {
  if (C(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return e;
}
const ur = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  Vl = (t, e, n, s, r, i, o, f, u) => {
    const d = r === "svg";
    e === "class"
      ? Cl(t, s, d)
      : e === "style"
      ? Ol(t, n, s)
      : dn(e)
      ? cs(e) || Ul(t, e, n, s, o)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : Dl(t, e, s, d)
        )
      ? Pl(t, e, s, i, o, f, u)
      : (e === "true-value"
          ? (t._trueValue = s)
          : e === "false-value" && (t._falseValue = s),
        Rl(t, e, s, d));
  };
function Dl(t, e, n, s) {
  if (s)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && ur(e) && O(n))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ur(e) && q(n) ? !1 : e in t;
}
const Kl = ["ctrl", "shift", "alt", "meta"],
  zl = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => Kl.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  Cf = (t, e) => {
    const n = t._withMods || (t._withMods = {}),
      s = e.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < e.length; o++) {
          const f = zl[e[o]];
          if (f && f(r, e)) return;
        }
        return t(r, ...i);
      })
    );
  },
  Wl = tt({ patchProp: Vl }, Sl);
let ar;
function Gl() {
  return ar || (ar = el(Wl));
}
const Af = (...t) => {
  const e = Gl().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (s) => {
      const r = Jl(s);
      if (!r) return;
      const i = e._component;
      !O(i) && !i.render && !i.template && (i.template = r.innerHTML),
        (r.innerHTML = "");
      const o = n(r, !1, ql(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function ql(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Jl(t) {
  return q(t) ? document.querySelector(t) : t;
}
const Tf = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, r] of e) n[s] = r;
  return n;
};
var Of =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Nf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function Rf(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function s() {
      return this instanceof s
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (s) {
      var r = Object.getOwnPropertyDescriptor(t, s);
      Object.defineProperty(
        n,
        s,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return t[s];
              },
            }
      );
    }),
    n
  );
}
const Yl = "6.13.1";
function Xl(t, e, n) {
  const s = e.split("|").map((i) => i.trim());
  for (let i = 0; i < s.length; i++)
    switch (e) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof t === e) return;
    }
  const r = new Error(`invalid value for type ${e}`);
  throw (
    ((r.code = "INVALID_ARGUMENT"),
    (r.argument = `value.${n}`),
    (r.value = t),
    r)
  );
}
async function Pf(t) {
  const e = Object.keys(t);
  return (await Promise.all(e.map((s) => Promise.resolve(t[s])))).reduce(
    (s, r, i) => ((s[e[i]] = r), s),
    {}
  );
}
function ns(t, e, n) {
  for (let s in e) {
    let r = e[s];
    const i = n ? n[s] : null;
    i && Xl(r, i, s),
      Object.defineProperty(t, s, { enumerable: !0, value: r, writable: !1 });
  }
}
function ue(t) {
  if (t == null) return "null";
  if (Array.isArray(t)) return "[ " + t.map(ue).join(", ") + " ]";
  if (t instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let n = "0x";
    for (let s = 0; s < t.length; s++) (n += e[t[s] >> 4]), (n += e[t[s] & 15]);
    return n;
  }
  if (typeof t == "object" && typeof t.toJSON == "function")
    return ue(t.toJSON());
  switch (typeof t) {
    case "boolean":
    case "symbol":
      return t.toString();
    case "bigint":
      return BigInt(t).toString();
    case "number":
      return t.toString();
    case "string":
      return JSON.stringify(t);
    case "object": {
      const e = Object.keys(t);
      return (
        e.sort(), "{ " + e.map((n) => `${ue(n)}: ${ue(t[n])}`).join(", ") + " }"
      );
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function Zl(t, e) {
  return t && t.code === e;
}
function Mf(t) {
  return Zl(t, "CALL_EXCEPTION");
}
function Ql(t, e, n) {
  let s = t;
  {
    const i = [];
    if (n) {
      if ("message" in n || "code" in n || "name" in n)
        throw new Error(`value will overwrite populated values: ${ue(n)}`);
      for (const o in n) {
        if (o === "shortMessage") continue;
        const f = n[o];
        i.push(o + "=" + ue(f));
      }
    }
    i.push(`code=${e}`),
      i.push(`version=${Yl}`),
      i.length && (t += " (" + i.join(", ") + ")");
  }
  let r;
  switch (e) {
    case "INVALID_ARGUMENT":
      r = new TypeError(t);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      r = new RangeError(t);
      break;
    default:
      r = new Error(t);
  }
  return (
    ns(r, { code: e }),
    n && Object.assign(r, n),
    r.shortMessage == null && ns(r, { shortMessage: s }),
    r
  );
}
function G(t, e, n, s) {
  if (!t) throw Ql(e, n, s);
}
function Y(t, e, n, s) {
  G(t, e, "INVALID_ARGUMENT", { argument: n, value: s });
}
function Ff(t, e, n) {
  n == null && (n = ""),
    n && (n = ": " + n),
    G(t >= e, "missing arguemnt" + n, "MISSING_ARGUMENT", {
      count: t,
      expectedCount: e,
    }),
    G(t <= e, "too many arguments" + n, "UNEXPECTED_ARGUMENT", {
      count: t,
      expectedCount: e,
    });
}
const kl = ["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
  try {
    if ("test".normalize(e) !== "test") throw new Error("bad");
    if (e === "NFD" && "é".normalize("NFD") !== "é") throw new Error("broken");
    t.push(e);
  } catch {}
  return t;
}, []);
function Uf(t) {
  G(
    kl.indexOf(t) >= 0,
    "platform missing String.prototype.normalize",
    "UNSUPPORTED_OPERATION",
    { operation: "String.prototype.normalize", info: { form: t } }
  );
}
function tf(t, e, n) {
  if ((n == null && (n = ""), t !== e)) {
    let s = n,
      r = "new";
    n && ((s += "."), (r += " " + n)),
      G(
        !1,
        `private constructor; use ${s}from* methods`,
        "UNSUPPORTED_OPERATION",
        { operation: r }
      );
  }
}
function mi(t, e, n) {
  if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t;
  if (typeof t == "string" && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
    const s = new Uint8Array((t.length - 2) / 2);
    let r = 2;
    for (let i = 0; i < s.length; i++)
      (s[i] = parseInt(t.substring(r, r + 2), 16)), (r += 2);
    return s;
  }
  Y(!1, "invalid BytesLike value", e || "value", t);
}
function Ve(t, e) {
  return mi(t, e, !1);
}
function Lf(t, e) {
  return mi(t, e, !0);
}
function _i(t, e) {
  return !(
    typeof t != "string" ||
    !t.match(/^0x[0-9A-Fa-f]*$/) ||
    (typeof e == "number" && t.length !== 2 + 2 * e) ||
    (e === !0 && t.length % 2 !== 0)
  );
}
function ef(t) {
  return _i(t, !0) || t instanceof Uint8Array;
}
const dr = "0123456789abcdef";
function Sn(t) {
  const e = Ve(t);
  let n = "0x";
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    n += dr[(r & 240) >> 4] + dr[r & 15];
  }
  return n;
}
function Bf(t) {
  return "0x" + t.map((e) => Sn(e).substring(2)).join("");
}
function $f(t) {
  return _i(t, !0) ? (t.length - 2) / 2 : Ve(t).length;
}
function jf(t, e, n) {
  const s = Ve(t);
  return (
    n != null &&
      n > s.length &&
      G(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: s,
        length: s.length,
        offset: n,
      }),
    Sn(s.slice(e ?? 0, n ?? s.length))
  );
}
function bi(t, e, n) {
  const s = Ve(t);
  G(e >= s.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(s),
    length: e,
    offset: e + 1,
  });
  const r = new Uint8Array(e);
  return r.fill(0), n ? r.set(s, e - s.length) : r.set(s, 0), Sn(r);
}
function Hf(t, e) {
  return bi(t, e, !0);
}
function Vf(t, e) {
  return bi(t, e, !1);
}
const In = BigInt(0),
  yt = BigInt(1),
  ae = 9007199254740991;
function ss(t, e) {
  const n = An(t, "value"),
    s = BigInt(Bt(e, "width"));
  if (
    (G(n >> s === In, "overflow", "NUMERIC_FAULT", {
      operation: "fromTwos",
      fault: "overflow",
      value: t,
    }),
    n >> (s - yt))
  ) {
    const r = (yt << s) - yt;
    return -((~n & r) + yt);
  }
  return n;
}
function Df(t, e) {
  let n = Cn(t, "value");
  const s = BigInt(Bt(e, "width")),
    r = yt << (s - yt);
  if (n < In) {
    (n = -n),
      G(n <= r, "too low", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: t,
      });
    const i = (yt << s) - yt;
    return (~n & i) + yt;
  } else
    G(n < r, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: t,
    });
  return n;
}
function hr(t, e) {
  const n = An(t, "value"),
    s = BigInt(Bt(e, "bits"));
  return n & ((yt << s) - yt);
}
function Cn(t, e) {
  switch (typeof t) {
    case "bigint":
      return t;
    case "number":
      return (
        Y(Number.isInteger(t), "underflow", e || "value", t),
        Y(t >= -ae && t <= ae, "overflow", e || "value", t),
        BigInt(t)
      );
    case "string":
      try {
        if (t === "") throw new Error("empty string");
        return t[0] === "-" && t[1] !== "-"
          ? -BigInt(t.substring(1))
          : BigInt(t);
      } catch (n) {
        Y(!1, `invalid BigNumberish string: ${n.message}`, e || "value", t);
      }
  }
  Y(!1, "invalid BigNumberish value", e || "value", t);
}
function An(t, e) {
  const n = Cn(t, e);
  return (
    G(n >= In, "unsigned value cannot be negative", "NUMERIC_FAULT", {
      fault: "overflow",
      operation: "getUint",
      value: t,
    }),
    n
  );
}
const pr = "0123456789abcdef";
function yi(t) {
  if (t instanceof Uint8Array) {
    let e = "0x0";
    for (const n of t) (e += pr[n >> 4]), (e += pr[n & 15]);
    return BigInt(e);
  }
  return Cn(t);
}
function Bt(t, e) {
  switch (typeof t) {
    case "bigint":
      return Y(t >= -ae && t <= ae, "overflow", e || "value", t), Number(t);
    case "number":
      return (
        Y(Number.isInteger(t), "underflow", e || "value", t),
        Y(t >= -ae && t <= ae, "overflow", e || "value", t),
        t
      );
    case "string":
      try {
        if (t === "") throw new Error("empty string");
        return Bt(BigInt(t), e);
      } catch (n) {
        Y(!1, `invalid numeric string: ${n.message}`, e || "value", t);
      }
  }
  Y(!1, "invalid numeric value", e || "value", t);
}
function Kf(t) {
  return Bt(yi(t));
}
function zf(t, e) {
  let s = An(t, "value").toString(16);
  if (e == null) s.length % 2 && (s = "0" + s);
  else {
    const r = Bt(e, "width");
    for (
      G(
        r * 2 >= s.length,
        `value exceeds width (${r} bytes)`,
        "NUMERIC_FAULT",
        { operation: "toBeHex", fault: "overflow", value: t }
      );
      s.length < r * 2;

    )
      s = "0" + s;
  }
  return "0x" + s;
}
function nf(t) {
  const e = An(t, "value");
  if (e === In) return new Uint8Array([]);
  let n = e.toString(16);
  n.length % 2 && (n = "0" + n);
  const s = new Uint8Array(n.length / 2);
  for (let r = 0; r < s.length; r++) {
    const i = r * 2;
    s[r] = parseInt(n.substring(i, i + 2), 16);
  }
  return s;
}
function Wf(t) {
  let e = Sn(ef(t) ? t : nf(t)).substring(2);
  for (; e.startsWith("0"); ) e = e.substring(1);
  return e === "" && (e = "0"), "0x" + e;
}
const sf = BigInt(-1),
  gt = BigInt(0),
  de = BigInt(1),
  rf = BigInt(5),
  ce = {};
let me = "0000";
for (; me.length < 80; ) me += me;
function te(t) {
  let e = me;
  for (; e.length < t; ) e += e;
  return BigInt("1" + e.substring(0, t));
}
function ve(t, e, n) {
  const s = BigInt(e.width);
  if (e.signed) {
    const r = de << (s - de);
    G(n == null || (t >= -r && t < r), "overflow", "NUMERIC_FAULT", {
      operation: n,
      fault: "overflow",
      value: t,
    }),
      t > gt ? (t = ss(hr(t, s), s)) : (t = -ss(hr(-t, s), s));
  } else {
    const r = de << s;
    G(n == null || (t >= 0 && t < r), "overflow", "NUMERIC_FAULT", {
      operation: n,
      fault: "overflow",
      value: t,
    }),
      (t = ((t % r) + r) % r & (r - de));
  }
  return t;
}
function zn(t) {
  typeof t == "number" && (t = `fixed128x${t}`);
  let e = !0,
    n = 128,
    s = 18;
  if (typeof t == "string") {
    if (t !== "fixed")
      if (t === "ufixed") e = !1;
      else {
        const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
        Y(i, "invalid fixed format", "format", t),
          (e = i[1] !== "u"),
          (n = parseInt(i[2])),
          (s = parseInt(i[3]));
      }
  } else if (t) {
    const i = t,
      o = (f, u, d) =>
        i[f] == null
          ? d
          : (Y(
              typeof i[f] === u,
              "invalid fixed format (" + f + " not " + u + ")",
              "format." + f,
              i[f]
            ),
            i[f]);
    (e = o("signed", "boolean", e)),
      (n = o("width", "number", n)),
      (s = o("decimals", "number", s));
  }
  Y(
    n % 8 === 0,
    "invalid FixedNumber width (not byte aligned)",
    "format.width",
    n
  ),
    Y(
      s <= 80,
      "invalid FixedNumber decimals (too large)",
      "format.decimals",
      s
    );
  const r = (e ? "" : "u") + "fixed" + String(n) + "x" + String(s);
  return { signed: e, width: n, decimals: s, name: r };
}
function of(t, e) {
  let n = "";
  t < gt && ((n = "-"), (t *= sf));
  let s = t.toString();
  if (e === 0) return n + s;
  for (; s.length <= e; ) s = me + s;
  const r = s.length - e;
  for (
    s = s.substring(0, r) + "." + s.substring(r);
    s[0] === "0" && s[1] !== ".";

  )
    s = s.substring(1);
  for (; s[s.length - 1] === "0" && s[s.length - 2] !== "."; )
    s = s.substring(0, s.length - 1);
  return n + s;
}
var mt, B, it, Ft, ee, _t, Mt, Le, rs, Be, is, $e, os, je, ls;
const Dt = class Dt {
  constructor(e, n, s) {
    Ct(this, Ft);
    Ct(this, _t);
    Ct(this, Le);
    Ct(this, Be);
    Ct(this, $e);
    Ct(this, je);
    Mn(this, "format");
    Ct(this, mt, void 0);
    Ct(this, B, void 0);
    Ct(this, it, void 0);
    Mn(this, "_value");
    tf(e, ce, "FixedNumber"), Ge(this, B, n), Ge(this, mt, s);
    const r = of(n, s.decimals);
    ns(this, { format: s.name, _value: r }), Ge(this, it, te(s.decimals));
  }
  get signed() {
    return T(this, mt).signed;
  }
  get width() {
    return T(this, mt).width;
  }
  get decimals() {
    return T(this, mt).decimals;
  }
  get value() {
    return T(this, B);
  }
  addUnsafe(e) {
    return z(this, Le, rs).call(this, e);
  }
  add(e) {
    return z(this, Le, rs).call(this, e, "add");
  }
  subUnsafe(e) {
    return z(this, Be, is).call(this, e);
  }
  sub(e) {
    return z(this, Be, is).call(this, e, "sub");
  }
  mulUnsafe(e) {
    return z(this, $e, os).call(this, e);
  }
  mul(e) {
    return z(this, $e, os).call(this, e, "mul");
  }
  mulSignal(e) {
    z(this, Ft, ee).call(this, e);
    const n = T(this, B) * T(e, B);
    return (
      G(
        n % T(this, it) === gt,
        "precision lost during signalling mul",
        "NUMERIC_FAULT",
        { operation: "mulSignal", fault: "underflow", value: this }
      ),
      z(this, _t, Mt).call(this, n / T(this, it), "mulSignal")
    );
  }
  divUnsafe(e) {
    return z(this, je, ls).call(this, e);
  }
  div(e) {
    return z(this, je, ls).call(this, e, "div");
  }
  divSignal(e) {
    G(T(e, B) !== gt, "division by zero", "NUMERIC_FAULT", {
      operation: "div",
      fault: "divide-by-zero",
      value: this,
    }),
      z(this, Ft, ee).call(this, e);
    const n = T(this, B) * T(this, it);
    return (
      G(
        n % T(e, B) === gt,
        "precision lost during signalling div",
        "NUMERIC_FAULT",
        { operation: "divSignal", fault: "underflow", value: this }
      ),
      z(this, _t, Mt).call(this, n / T(e, B), "divSignal")
    );
  }
  cmp(e) {
    let n = this.value,
      s = e.value;
    const r = this.decimals - e.decimals;
    return (
      r > 0 ? (s *= te(r)) : r < 0 && (n *= te(-r)), n < s ? -1 : n > s ? 1 : 0
    );
  }
  eq(e) {
    return this.cmp(e) === 0;
  }
  lt(e) {
    return this.cmp(e) < 0;
  }
  lte(e) {
    return this.cmp(e) <= 0;
  }
  gt(e) {
    return this.cmp(e) > 0;
  }
  gte(e) {
    return this.cmp(e) >= 0;
  }
  floor() {
    let e = T(this, B);
    return (
      T(this, B) < gt && (e -= T(this, it) - de),
      (e = (T(this, B) / T(this, it)) * T(this, it)),
      z(this, _t, Mt).call(this, e, "floor")
    );
  }
  ceiling() {
    let e = T(this, B);
    return (
      T(this, B) > gt && (e += T(this, it) - de),
      (e = (T(this, B) / T(this, it)) * T(this, it)),
      z(this, _t, Mt).call(this, e, "ceiling")
    );
  }
  round(e) {
    if ((e == null && (e = 0), e >= this.decimals)) return this;
    const n = this.decimals - e,
      s = rf * te(n - 1);
    let r = this.value + s;
    const i = te(n);
    return (
      (r = (r / i) * i), ve(r, T(this, mt), "round"), new Dt(ce, r, T(this, mt))
    );
  }
  isZero() {
    return T(this, B) === gt;
  }
  isNegative() {
    return T(this, B) < gt;
  }
  toString() {
    return this._value;
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return Dt.fromString(this.toString(), e);
  }
  static fromValue(e, n, s) {
    const r = n == null ? 0 : Bt(n),
      i = zn(s);
    let o = Cn(e, "value");
    const f = r - i.decimals;
    if (f > 0) {
      const u = te(f);
      G(o % u === gt, "value loses precision for format", "NUMERIC_FAULT", {
        operation: "fromValue",
        fault: "underflow",
        value: e,
      }),
        (o /= u);
    } else f < 0 && (o *= te(-f));
    return ve(o, i, "fromValue"), new Dt(ce, o, i);
  }
  static fromString(e, n) {
    const s = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
    Y(
      s && s[2].length + s[3].length > 0,
      "invalid FixedNumber string value",
      "value",
      e
    );
    const r = zn(n);
    let i = s[2] || "0",
      o = s[3] || "";
    for (; o.length < r.decimals; ) o += me;
    G(
      o.substring(r.decimals).match(/^0*$/),
      "too many decimals for format",
      "NUMERIC_FAULT",
      { operation: "fromString", fault: "underflow", value: e }
    ),
      (o = o.substring(0, r.decimals));
    const f = BigInt(s[1] + i + o);
    return ve(f, r, "fromString"), new Dt(ce, f, r);
  }
  static fromBytes(e, n) {
    let s = yi(Ve(e, "value"));
    const r = zn(n);
    return (
      r.signed && (s = ss(s, r.width)), ve(s, r, "fromBytes"), new Dt(ce, s, r)
    );
  }
};
(mt = new WeakMap()),
  (B = new WeakMap()),
  (it = new WeakMap()),
  (Ft = new WeakSet()),
  (ee = function (e) {
    Y(
      this.format === e.format,
      "incompatible format; use fixedNumber.toFormat",
      "other",
      e
    );
  }),
  (_t = new WeakSet()),
  (Mt = function (e, n) {
    return (e = ve(e, T(this, mt), n)), new Dt(ce, e, T(this, mt));
  }),
  (Le = new WeakSet()),
  (rs = function (e, n) {
    return (
      z(this, Ft, ee).call(this, e),
      z(this, _t, Mt).call(this, T(this, B) + T(e, B), n)
    );
  }),
  (Be = new WeakSet()),
  (is = function (e, n) {
    return (
      z(this, Ft, ee).call(this, e),
      z(this, _t, Mt).call(this, T(this, B) - T(e, B), n)
    );
  }),
  ($e = new WeakSet()),
  (os = function (e, n) {
    return (
      z(this, Ft, ee).call(this, e),
      z(this, _t, Mt).call(this, (T(this, B) * T(e, B)) / T(this, it), n)
    );
  }),
  (je = new WeakSet()),
  (ls = function (e, n) {
    return (
      G(T(e, B) !== gt, "division by zero", "NUMERIC_FAULT", {
        operation: "div",
        fault: "divide-by-zero",
        value: this,
      }),
      z(this, Ft, ee).call(this, e),
      z(this, _t, Mt).call(this, (T(this, B) * T(this, it)) / T(e, B), n)
    );
  });
let an = Dt;
const wi = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
function lf(t, e) {
  let n = 18;
  if (typeof e == "string") {
    const s = wi.indexOf(e);
    Y(s >= 0, "invalid unit", "unit", e), (n = 3 * s);
  } else e != null && (n = Bt(e, "unit"));
  return an.fromValue(t, n, { decimals: n, width: 512 }).toString();
}
function Gf(t, e) {
  Y(typeof t == "string", "value must be a string", "value", t);
  let n = 18;
  if (typeof e == "string") {
    const s = wi.indexOf(e);
    Y(s >= 0, "invalid unit", "unit", e), (n = 3 * s);
  } else e != null && (n = Bt(e, "unit"));
  return an.fromString(t, { decimals: n, width: 512 }).value;
}
function qf(t) {
  return lf(t, 18);
}
export {
  G as $,
  df as A,
  hf as B,
  Ef as C,
  pf as D,
  wf as E,
  bt as F,
  yo as G,
  cl as H,
  Af as I,
  oo as J,
  gf as K,
  Of as L,
  Nf as M,
  ul as N,
  F as O,
  fn as P,
  Xr as Q,
  mf as R,
  _e as S,
  ds as T,
  qf as U,
  Ve as V,
  yi as W,
  ns as X,
  Y,
  Uf as Z,
  Tf as _,
  io as a,
  Ql as a0,
  Sn as a1,
  Lf as a2,
  Kf as a3,
  Bf as a4,
  Bt as a5,
  nf as a6,
  $f as a7,
  tf as a8,
  Cn as a9,
  _i as aa,
  Hf as ab,
  zf as ac,
  jf as ad,
  Ff as ae,
  Zl as af,
  hr as ag,
  Df as ah,
  ss as ai,
  ef as aj,
  Wf as ak,
  Vf as al,
  Pf as am,
  Mf as an,
  Rf as ao,
  Gf as ap,
  lf as aq,
  uf as b,
  wl as c,
  bf as d,
  xf as e,
  di as f,
  Mo as g,
  Sf as h,
  tn as i,
  Lo as j,
  hs as k,
  _f as l,
  ui as m,
  ho as n,
  fi as o,
  Yo as p,
  yf as q,
  ys as r,
  af as s,
  Cf as t,
  co as u,
  If as v,
  jn as w,
  cf as x,
  ot as y,
  vf as z,
};
