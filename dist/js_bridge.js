var ko = Object.defineProperty;
var Uo = (r, t, e) => t in r ? ko(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var ne = (r, t, e) => Uo(r, typeof t != "symbol" ? t + "" : t, e);
function tr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function ui(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var Nr = {}, En = {}, Di;
function Fo() {
  if (Di) return En;
  Di = 1, En.byteLength = u, En.toByteArray = y, En.fromByteArray = D;
  for (var r = [], t = [], e = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, i = n.length; s < i; ++s)
    r[s] = n[s], t[n.charCodeAt(s)] = s;
  t[45] = 62, t[95] = 63;
  function o(x) {
    var L = x.length;
    if (L % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var N = x.indexOf("=");
    N === -1 && (N = L);
    var M = N === L ? 0 : 4 - N % 4;
    return [N, M];
  }
  function u(x) {
    var L = o(x), N = L[0], M = L[1];
    return (N + M) * 3 / 4 - M;
  }
  function d(x, L, N) {
    return (L + N) * 3 / 4 - N;
  }
  function y(x) {
    var L, N = o(x), M = N[0], V = N[1], j = new e(d(x, M, V)), K = 0, P = V > 0 ? M - 4 : M, X;
    for (X = 0; X < P; X += 4)
      L = t[x.charCodeAt(X)] << 18 | t[x.charCodeAt(X + 1)] << 12 | t[x.charCodeAt(X + 2)] << 6 | t[x.charCodeAt(X + 3)], j[K++] = L >> 16 & 255, j[K++] = L >> 8 & 255, j[K++] = L & 255;
    return V === 2 && (L = t[x.charCodeAt(X)] << 2 | t[x.charCodeAt(X + 1)] >> 4, j[K++] = L & 255), V === 1 && (L = t[x.charCodeAt(X)] << 10 | t[x.charCodeAt(X + 1)] << 4 | t[x.charCodeAt(X + 2)] >> 2, j[K++] = L >> 8 & 255, j[K++] = L & 255), j;
  }
  function R(x) {
    return r[x >> 18 & 63] + r[x >> 12 & 63] + r[x >> 6 & 63] + r[x & 63];
  }
  function Q(x, L, N) {
    for (var M, V = [], j = L; j < N; j += 3)
      M = (x[j] << 16 & 16711680) + (x[j + 1] << 8 & 65280) + (x[j + 2] & 255), V.push(R(M));
    return V.join("");
  }
  function D(x) {
    for (var L, N = x.length, M = N % 3, V = [], j = 16383, K = 0, P = N - M; K < P; K += j)
      V.push(Q(x, K, K + j > P ? P : K + j));
    return M === 1 ? (L = x[N - 1], V.push(
      r[L >> 2] + r[L << 4 & 63] + "=="
    )) : M === 2 && (L = (x[N - 2] << 8) + x[N - 1], V.push(
      r[L >> 10] + r[L >> 4 & 63] + r[L << 2 & 63] + "="
    )), V.join("");
  }
  return En;
}
var xn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var ki;
function Go() {
  return ki || (ki = 1, xn.read = function(r, t, e, n, s) {
    var i, o, u = s * 8 - n - 1, d = (1 << u) - 1, y = d >> 1, R = -7, Q = e ? s - 1 : 0, D = e ? -1 : 1, x = r[t + Q];
    for (Q += D, i = x & (1 << -R) - 1, x >>= -R, R += u; R > 0; i = i * 256 + r[t + Q], Q += D, R -= 8)
      ;
    for (o = i & (1 << -R) - 1, i >>= -R, R += n; R > 0; o = o * 256 + r[t + Q], Q += D, R -= 8)
      ;
    if (i === 0)
      i = 1 - y;
    else {
      if (i === d)
        return o ? NaN : (x ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, n), i = i - y;
    }
    return (x ? -1 : 1) * o * Math.pow(2, i - n);
  }, xn.write = function(r, t, e, n, s, i) {
    var o, u, d, y = i * 8 - s - 1, R = (1 << y) - 1, Q = R >> 1, D = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x = n ? 0 : i - 1, L = n ? 1 : -1, N = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, o = R) : (o = Math.floor(Math.log(t) / Math.LN2), t * (d = Math.pow(2, -o)) < 1 && (o--, d *= 2), o + Q >= 1 ? t += D / d : t += D * Math.pow(2, 1 - Q), t * d >= 2 && (o++, d /= 2), o + Q >= R ? (u = 0, o = R) : o + Q >= 1 ? (u = (t * d - 1) * Math.pow(2, s), o = o + Q) : (u = t * Math.pow(2, Q - 1) * Math.pow(2, s), o = 0)); s >= 8; r[e + x] = u & 255, x += L, u /= 256, s -= 8)
      ;
    for (o = o << s | u, y += s; y > 0; r[e + x] = o & 255, x += L, o /= 256, y -= 8)
      ;
    r[e + x - L] |= N * 128;
  }), xn;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Ui;
function fi() {
  return Ui || (Ui = 1, function(r) {
    const t = Fo(), e = Go(), n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    r.Buffer = u, r.SlowBuffer = j, r.INSPECT_MAX_BYTES = 50;
    const s = 2147483647;
    r.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = i(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function i() {
      try {
        const E = new Uint8Array(1), f = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(E, f), E.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(u.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (u.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(u.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (u.isBuffer(this))
          return this.byteOffset;
      }
    });
    function o(E) {
      if (E > s)
        throw new RangeError('The value "' + E + '" is invalid for option "size"');
      const f = new Uint8Array(E);
      return Object.setPrototypeOf(f, u.prototype), f;
    }
    function u(E, f, l) {
      if (typeof E == "number") {
        if (typeof f == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return Q(E);
      }
      return d(E, f, l);
    }
    u.poolSize = 8192;
    function d(E, f, l) {
      if (typeof E == "string")
        return D(E, f);
      if (ArrayBuffer.isView(E))
        return L(E);
      if (E == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof E
        );
      if (pe(E, ArrayBuffer) || E && pe(E.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (pe(E, SharedArrayBuffer) || E && pe(E.buffer, SharedArrayBuffer)))
        return N(E, f, l);
      if (typeof E == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const m = E.valueOf && E.valueOf();
      if (m != null && m !== E)
        return u.from(m, f, l);
      const O = M(E);
      if (O) return O;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof E[Symbol.toPrimitive] == "function")
        return u.from(E[Symbol.toPrimitive]("string"), f, l);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof E
      );
    }
    u.from = function(E, f, l) {
      return d(E, f, l);
    }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
    function y(E) {
      if (typeof E != "number")
        throw new TypeError('"size" argument must be of type number');
      if (E < 0)
        throw new RangeError('The value "' + E + '" is invalid for option "size"');
    }
    function R(E, f, l) {
      return y(E), E <= 0 ? o(E) : f !== void 0 ? typeof l == "string" ? o(E).fill(f, l) : o(E).fill(f) : o(E);
    }
    u.alloc = function(E, f, l) {
      return R(E, f, l);
    };
    function Q(E) {
      return y(E), o(E < 0 ? 0 : V(E) | 0);
    }
    u.allocUnsafe = function(E) {
      return Q(E);
    }, u.allocUnsafeSlow = function(E) {
      return Q(E);
    };
    function D(E, f) {
      if ((typeof f != "string" || f === "") && (f = "utf8"), !u.isEncoding(f))
        throw new TypeError("Unknown encoding: " + f);
      const l = K(E, f) | 0;
      let m = o(l);
      const O = m.write(E, f);
      return O !== l && (m = m.slice(0, O)), m;
    }
    function x(E) {
      const f = E.length < 0 ? 0 : V(E.length) | 0, l = o(f);
      for (let m = 0; m < f; m += 1)
        l[m] = E[m] & 255;
      return l;
    }
    function L(E) {
      if (pe(E, Uint8Array)) {
        const f = new Uint8Array(E);
        return N(f.buffer, f.byteOffset, f.byteLength);
      }
      return x(E);
    }
    function N(E, f, l) {
      if (f < 0 || E.byteLength < f)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (E.byteLength < f + (l || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let m;
      return f === void 0 && l === void 0 ? m = new Uint8Array(E) : l === void 0 ? m = new Uint8Array(E, f) : m = new Uint8Array(E, f, l), Object.setPrototypeOf(m, u.prototype), m;
    }
    function M(E) {
      if (u.isBuffer(E)) {
        const f = V(E.length) | 0, l = o(f);
        return l.length === 0 || E.copy(l, 0, 0, f), l;
      }
      if (E.length !== void 0)
        return typeof E.length != "number" || vt(E.length) ? o(0) : x(E);
      if (E.type === "Buffer" && Array.isArray(E.data))
        return x(E.data);
    }
    function V(E) {
      if (E >= s)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
      return E | 0;
    }
    function j(E) {
      return +E != E && (E = 0), u.alloc(+E);
    }
    u.isBuffer = function(f) {
      return f != null && f._isBuffer === !0 && f !== u.prototype;
    }, u.compare = function(f, l) {
      if (pe(f, Uint8Array) && (f = u.from(f, f.offset, f.byteLength)), pe(l, Uint8Array) && (l = u.from(l, l.offset, l.byteLength)), !u.isBuffer(f) || !u.isBuffer(l))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (f === l) return 0;
      let m = f.length, O = l.length;
      for (let U = 0, J = Math.min(m, O); U < J; ++U)
        if (f[U] !== l[U]) {
          m = f[U], O = l[U];
          break;
        }
      return m < O ? -1 : O < m ? 1 : 0;
    }, u.isEncoding = function(f) {
      switch (String(f).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, u.concat = function(f, l) {
      if (!Array.isArray(f))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (f.length === 0)
        return u.alloc(0);
      let m;
      if (l === void 0)
        for (l = 0, m = 0; m < f.length; ++m)
          l += f[m].length;
      const O = u.allocUnsafe(l);
      let U = 0;
      for (m = 0; m < f.length; ++m) {
        let J = f[m];
        if (pe(J, Uint8Array))
          U + J.length > O.length ? (u.isBuffer(J) || (J = u.from(J)), J.copy(O, U)) : Uint8Array.prototype.set.call(
            O,
            J,
            U
          );
        else if (u.isBuffer(J))
          J.copy(O, U);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        U += J.length;
      }
      return O;
    };
    function K(E, f) {
      if (u.isBuffer(E))
        return E.length;
      if (ArrayBuffer.isView(E) || pe(E, ArrayBuffer))
        return E.byteLength;
      if (typeof E != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof E
        );
      const l = E.length, m = arguments.length > 2 && arguments[2] === !0;
      if (!m && l === 0) return 0;
      let O = !1;
      for (; ; )
        switch (f) {
          case "ascii":
          case "latin1":
          case "binary":
            return l;
          case "utf8":
          case "utf-8":
            return yt(E).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return l * 2;
          case "hex":
            return l >>> 1;
          case "base64":
            return bt(E).length;
          default:
            if (O)
              return m ? -1 : yt(E).length;
            f = ("" + f).toLowerCase(), O = !0;
        }
    }
    u.byteLength = K;
    function P(E, f, l) {
      let m = !1;
      if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, f >>>= 0, l <= f))
        return "";
      for (E || (E = "utf8"); ; )
        switch (E) {
          case "hex":
            return C(this, f, l);
          case "utf8":
          case "utf-8":
            return A(this, f, l);
          case "ascii":
            return w(this, f, l);
          case "latin1":
          case "binary":
            return _(this, f, l);
          case "base64":
            return B(this, f, l);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return b(this, f, l);
          default:
            if (m) throw new TypeError("Unknown encoding: " + E);
            E = (E + "").toLowerCase(), m = !0;
        }
    }
    u.prototype._isBuffer = !0;
    function X(E, f, l) {
      const m = E[f];
      E[f] = E[l], E[l] = m;
    }
    u.prototype.swap16 = function() {
      const f = this.length;
      if (f % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let l = 0; l < f; l += 2)
        X(this, l, l + 1);
      return this;
    }, u.prototype.swap32 = function() {
      const f = this.length;
      if (f % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let l = 0; l < f; l += 4)
        X(this, l, l + 3), X(this, l + 1, l + 2);
      return this;
    }, u.prototype.swap64 = function() {
      const f = this.length;
      if (f % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let l = 0; l < f; l += 8)
        X(this, l, l + 7), X(this, l + 1, l + 6), X(this, l + 2, l + 5), X(this, l + 3, l + 4);
      return this;
    }, u.prototype.toString = function() {
      const f = this.length;
      return f === 0 ? "" : arguments.length === 0 ? A(this, 0, f) : P.apply(this, arguments);
    }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(f) {
      if (!u.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
      return this === f ? !0 : u.compare(this, f) === 0;
    }, u.prototype.inspect = function() {
      let f = "";
      const l = r.INSPECT_MAX_BYTES;
      return f = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (f += " ... "), "<Buffer " + f + ">";
    }, n && (u.prototype[n] = u.prototype.inspect), u.prototype.compare = function(f, l, m, O, U) {
      if (pe(f, Uint8Array) && (f = u.from(f, f.offset, f.byteLength)), !u.isBuffer(f))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
        );
      if (l === void 0 && (l = 0), m === void 0 && (m = f ? f.length : 0), O === void 0 && (O = 0), U === void 0 && (U = this.length), l < 0 || m > f.length || O < 0 || U > this.length)
        throw new RangeError("out of range index");
      if (O >= U && l >= m)
        return 0;
      if (O >= U)
        return -1;
      if (l >= m)
        return 1;
      if (l >>>= 0, m >>>= 0, O >>>= 0, U >>>= 0, this === f) return 0;
      let J = U - O, Et = m - l;
      const lt = Math.min(J, Et), ft = this.slice(O, U), Nt = f.slice(l, m);
      for (let ct = 0; ct < lt; ++ct)
        if (ft[ct] !== Nt[ct]) {
          J = ft[ct], Et = Nt[ct];
          break;
        }
      return J < Et ? -1 : Et < J ? 1 : 0;
    };
    function Z(E, f, l, m, O) {
      if (E.length === 0) return -1;
      if (typeof l == "string" ? (m = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, vt(l) && (l = O ? 0 : E.length - 1), l < 0 && (l = E.length + l), l >= E.length) {
        if (O) return -1;
        l = E.length - 1;
      } else if (l < 0)
        if (O) l = 0;
        else return -1;
      if (typeof f == "string" && (f = u.from(f, m)), u.isBuffer(f))
        return f.length === 0 ? -1 : st(E, f, l, m, O);
      if (typeof f == "number")
        return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? O ? Uint8Array.prototype.indexOf.call(E, f, l) : Uint8Array.prototype.lastIndexOf.call(E, f, l) : st(E, [f], l, m, O);
      throw new TypeError("val must be string, number or Buffer");
    }
    function st(E, f, l, m, O) {
      let U = 1, J = E.length, Et = f.length;
      if (m !== void 0 && (m = String(m).toLowerCase(), m === "ucs2" || m === "ucs-2" || m === "utf16le" || m === "utf-16le")) {
        if (E.length < 2 || f.length < 2)
          return -1;
        U = 2, J /= 2, Et /= 2, l /= 2;
      }
      function lt(Nt, ct) {
        return U === 1 ? Nt[ct] : Nt.readUInt16BE(ct * U);
      }
      let ft;
      if (O) {
        let Nt = -1;
        for (ft = l; ft < J; ft++)
          if (lt(E, ft) === lt(f, Nt === -1 ? 0 : ft - Nt)) {
            if (Nt === -1 && (Nt = ft), ft - Nt + 1 === Et) return Nt * U;
          } else
            Nt !== -1 && (ft -= ft - Nt), Nt = -1;
      } else
        for (l + Et > J && (l = J - Et), ft = l; ft >= 0; ft--) {
          let Nt = !0;
          for (let ct = 0; ct < Et; ct++)
            if (lt(E, ft + ct) !== lt(f, ct)) {
              Nt = !1;
              break;
            }
          if (Nt) return ft;
        }
      return -1;
    }
    u.prototype.includes = function(f, l, m) {
      return this.indexOf(f, l, m) !== -1;
    }, u.prototype.indexOf = function(f, l, m) {
      return Z(this, f, l, m, !0);
    }, u.prototype.lastIndexOf = function(f, l, m) {
      return Z(this, f, l, m, !1);
    };
    function ot(E, f, l, m) {
      l = Number(l) || 0;
      const O = E.length - l;
      m ? (m = Number(m), m > O && (m = O)) : m = O;
      const U = f.length;
      m > U / 2 && (m = U / 2);
      let J;
      for (J = 0; J < m; ++J) {
        const Et = parseInt(f.substr(J * 2, 2), 16);
        if (vt(Et)) return J;
        E[l + J] = Et;
      }
      return J;
    }
    function z(E, f, l, m) {
      return mt(yt(f, E.length - l), E, l, m);
    }
    function k(E, f, l, m) {
      return mt(Qt(f), E, l, m);
    }
    function F(E, f, l, m) {
      return mt(bt(f), E, l, m);
    }
    function q(E, f, l, m) {
      return mt(Ze(f, E.length - l), E, l, m);
    }
    u.prototype.write = function(f, l, m, O) {
      if (l === void 0)
        O = "utf8", m = this.length, l = 0;
      else if (m === void 0 && typeof l == "string")
        O = l, m = this.length, l = 0;
      else if (isFinite(l))
        l = l >>> 0, isFinite(m) ? (m = m >>> 0, O === void 0 && (O = "utf8")) : (O = m, m = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const U = this.length - l;
      if ((m === void 0 || m > U) && (m = U), f.length > 0 && (m < 0 || l < 0) || l > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      O || (O = "utf8");
      let J = !1;
      for (; ; )
        switch (O) {
          case "hex":
            return ot(this, f, l, m);
          case "utf8":
          case "utf-8":
            return z(this, f, l, m);
          case "ascii":
          case "latin1":
          case "binary":
            return k(this, f, l, m);
          case "base64":
            return F(this, f, l, m);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return q(this, f, l, m);
          default:
            if (J) throw new TypeError("Unknown encoding: " + O);
            O = ("" + O).toLowerCase(), J = !0;
        }
    }, u.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function B(E, f, l) {
      return f === 0 && l === E.length ? t.fromByteArray(E) : t.fromByteArray(E.slice(f, l));
    }
    function A(E, f, l) {
      l = Math.min(E.length, l);
      const m = [];
      let O = f;
      for (; O < l; ) {
        const U = E[O];
        let J = null, Et = U > 239 ? 4 : U > 223 ? 3 : U > 191 ? 2 : 1;
        if (O + Et <= l) {
          let lt, ft, Nt, ct;
          switch (Et) {
            case 1:
              U < 128 && (J = U);
              break;
            case 2:
              lt = E[O + 1], (lt & 192) === 128 && (ct = (U & 31) << 6 | lt & 63, ct > 127 && (J = ct));
              break;
            case 3:
              lt = E[O + 1], ft = E[O + 2], (lt & 192) === 128 && (ft & 192) === 128 && (ct = (U & 15) << 12 | (lt & 63) << 6 | ft & 63, ct > 2047 && (ct < 55296 || ct > 57343) && (J = ct));
              break;
            case 4:
              lt = E[O + 1], ft = E[O + 2], Nt = E[O + 3], (lt & 192) === 128 && (ft & 192) === 128 && (Nt & 192) === 128 && (ct = (U & 15) << 18 | (lt & 63) << 12 | (ft & 63) << 6 | Nt & 63, ct > 65535 && ct < 1114112 && (J = ct));
          }
        }
        J === null ? (J = 65533, Et = 1) : J > 65535 && (J -= 65536, m.push(J >>> 10 & 1023 | 55296), J = 56320 | J & 1023), m.push(J), O += Et;
      }
      return g(m);
    }
    const h = 4096;
    function g(E) {
      const f = E.length;
      if (f <= h)
        return String.fromCharCode.apply(String, E);
      let l = "", m = 0;
      for (; m < f; )
        l += String.fromCharCode.apply(
          String,
          E.slice(m, m += h)
        );
      return l;
    }
    function w(E, f, l) {
      let m = "";
      l = Math.min(E.length, l);
      for (let O = f; O < l; ++O)
        m += String.fromCharCode(E[O] & 127);
      return m;
    }
    function _(E, f, l) {
      let m = "";
      l = Math.min(E.length, l);
      for (let O = f; O < l; ++O)
        m += String.fromCharCode(E[O]);
      return m;
    }
    function C(E, f, l) {
      const m = E.length;
      (!f || f < 0) && (f = 0), (!l || l < 0 || l > m) && (l = m);
      let O = "";
      for (let U = f; U < l; ++U)
        O += Mt[E[U]];
      return O;
    }
    function b(E, f, l) {
      const m = E.slice(f, l);
      let O = "";
      for (let U = 0; U < m.length - 1; U += 2)
        O += String.fromCharCode(m[U] + m[U + 1] * 256);
      return O;
    }
    u.prototype.slice = function(f, l) {
      const m = this.length;
      f = ~~f, l = l === void 0 ? m : ~~l, f < 0 ? (f += m, f < 0 && (f = 0)) : f > m && (f = m), l < 0 ? (l += m, l < 0 && (l = 0)) : l > m && (l = m), l < f && (l = f);
      const O = this.subarray(f, l);
      return Object.setPrototypeOf(O, u.prototype), O;
    };
    function I(E, f, l) {
      if (E % 1 !== 0 || E < 0) throw new RangeError("offset is not uint");
      if (E + f > l) throw new RangeError("Trying to access beyond buffer length");
    }
    u.prototype.readUintLE = u.prototype.readUIntLE = function(f, l, m) {
      f = f >>> 0, l = l >>> 0, m || I(f, l, this.length);
      let O = this[f], U = 1, J = 0;
      for (; ++J < l && (U *= 256); )
        O += this[f + J] * U;
      return O;
    }, u.prototype.readUintBE = u.prototype.readUIntBE = function(f, l, m) {
      f = f >>> 0, l = l >>> 0, m || I(f, l, this.length);
      let O = this[f + --l], U = 1;
      for (; l > 0 && (U *= 256); )
        O += this[f + --l] * U;
      return O;
    }, u.prototype.readUint8 = u.prototype.readUInt8 = function(f, l) {
      return f = f >>> 0, l || I(f, 1, this.length), this[f];
    }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(f, l) {
      return f = f >>> 0, l || I(f, 2, this.length), this[f] | this[f + 1] << 8;
    }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(f, l) {
      return f = f >>> 0, l || I(f, 2, this.length), this[f] << 8 | this[f + 1];
    }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(f, l) {
      return f = f >>> 0, l || I(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
    }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(f, l) {
      return f = f >>> 0, l || I(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
    }, u.prototype.readBigUInt64LE = we(function(f) {
      f = f >>> 0, Rt(f, "offset");
      const l = this[f], m = this[f + 7];
      (l === void 0 || m === void 0) && gt(f, this.length - 8);
      const O = l + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, U = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + m * 2 ** 24;
      return BigInt(O) + (BigInt(U) << BigInt(32));
    }), u.prototype.readBigUInt64BE = we(function(f) {
      f = f >>> 0, Rt(f, "offset");
      const l = this[f], m = this[f + 7];
      (l === void 0 || m === void 0) && gt(f, this.length - 8);
      const O = l * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], U = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + m;
      return (BigInt(O) << BigInt(32)) + BigInt(U);
    }), u.prototype.readIntLE = function(f, l, m) {
      f = f >>> 0, l = l >>> 0, m || I(f, l, this.length);
      let O = this[f], U = 1, J = 0;
      for (; ++J < l && (U *= 256); )
        O += this[f + J] * U;
      return U *= 128, O >= U && (O -= Math.pow(2, 8 * l)), O;
    }, u.prototype.readIntBE = function(f, l, m) {
      f = f >>> 0, l = l >>> 0, m || I(f, l, this.length);
      let O = l, U = 1, J = this[f + --O];
      for (; O > 0 && (U *= 256); )
        J += this[f + --O] * U;
      return U *= 128, J >= U && (J -= Math.pow(2, 8 * l)), J;
    }, u.prototype.readInt8 = function(f, l) {
      return f = f >>> 0, l || I(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
    }, u.prototype.readInt16LE = function(f, l) {
      f = f >>> 0, l || I(f, 2, this.length);
      const m = this[f] | this[f + 1] << 8;
      return m & 32768 ? m | 4294901760 : m;
    }, u.prototype.readInt16BE = function(f, l) {
      f = f >>> 0, l || I(f, 2, this.length);
      const m = this[f + 1] | this[f] << 8;
      return m & 32768 ? m | 4294901760 : m;
    }, u.prototype.readInt32LE = function(f, l) {
      return f = f >>> 0, l || I(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
    }, u.prototype.readInt32BE = function(f, l) {
      return f = f >>> 0, l || I(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
    }, u.prototype.readBigInt64LE = we(function(f) {
      f = f >>> 0, Rt(f, "offset");
      const l = this[f], m = this[f + 7];
      (l === void 0 || m === void 0) && gt(f, this.length - 8);
      const O = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (m << 24);
      return (BigInt(O) << BigInt(32)) + BigInt(l + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
    }), u.prototype.readBigInt64BE = we(function(f) {
      f = f >>> 0, Rt(f, "offset");
      const l = this[f], m = this[f + 7];
      (l === void 0 || m === void 0) && gt(f, this.length - 8);
      const O = (l << 24) + // Overflow
      this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
      return (BigInt(O) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + m);
    }), u.prototype.readFloatLE = function(f, l) {
      return f = f >>> 0, l || I(f, 4, this.length), e.read(this, f, !0, 23, 4);
    }, u.prototype.readFloatBE = function(f, l) {
      return f = f >>> 0, l || I(f, 4, this.length), e.read(this, f, !1, 23, 4);
    }, u.prototype.readDoubleLE = function(f, l) {
      return f = f >>> 0, l || I(f, 8, this.length), e.read(this, f, !0, 52, 8);
    }, u.prototype.readDoubleBE = function(f, l) {
      return f = f >>> 0, l || I(f, 8, this.length), e.read(this, f, !1, 52, 8);
    };
    function a(E, f, l, m, O, U) {
      if (!u.isBuffer(E)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (f > O || f < U) throw new RangeError('"value" argument is out of bounds');
      if (l + m > E.length) throw new RangeError("Index out of range");
    }
    u.prototype.writeUintLE = u.prototype.writeUIntLE = function(f, l, m, O) {
      if (f = +f, l = l >>> 0, m = m >>> 0, !O) {
        const Et = Math.pow(2, 8 * m) - 1;
        a(this, f, l, m, Et, 0);
      }
      let U = 1, J = 0;
      for (this[l] = f & 255; ++J < m && (U *= 256); )
        this[l + J] = f / U & 255;
      return l + m;
    }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(f, l, m, O) {
      if (f = +f, l = l >>> 0, m = m >>> 0, !O) {
        const Et = Math.pow(2, 8 * m) - 1;
        a(this, f, l, m, Et, 0);
      }
      let U = m - 1, J = 1;
      for (this[l + U] = f & 255; --U >= 0 && (J *= 256); )
        this[l + U] = f / J & 255;
      return l + m;
    }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 1, 255, 0), this[l] = f & 255, l + 1;
    }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 2, 65535, 0), this[l] = f & 255, this[l + 1] = f >>> 8, l + 2;
    }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 2, 65535, 0), this[l] = f >>> 8, this[l + 1] = f & 255, l + 2;
    }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 4, 4294967295, 0), this[l + 3] = f >>> 24, this[l + 2] = f >>> 16, this[l + 1] = f >>> 8, this[l] = f & 255, l + 4;
    }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 4, 4294967295, 0), this[l] = f >>> 24, this[l + 1] = f >>> 16, this[l + 2] = f >>> 8, this[l + 3] = f & 255, l + 4;
    };
    function c(E, f, l, m, O) {
      ht(f, m, O, E, l, 7);
      let U = Number(f & BigInt(4294967295));
      E[l++] = U, U = U >> 8, E[l++] = U, U = U >> 8, E[l++] = U, U = U >> 8, E[l++] = U;
      let J = Number(f >> BigInt(32) & BigInt(4294967295));
      return E[l++] = J, J = J >> 8, E[l++] = J, J = J >> 8, E[l++] = J, J = J >> 8, E[l++] = J, l;
    }
    function p(E, f, l, m, O) {
      ht(f, m, O, E, l, 7);
      let U = Number(f & BigInt(4294967295));
      E[l + 7] = U, U = U >> 8, E[l + 6] = U, U = U >> 8, E[l + 5] = U, U = U >> 8, E[l + 4] = U;
      let J = Number(f >> BigInt(32) & BigInt(4294967295));
      return E[l + 3] = J, J = J >> 8, E[l + 2] = J, J = J >> 8, E[l + 1] = J, J = J >> 8, E[l] = J, l + 8;
    }
    u.prototype.writeBigUInt64LE = we(function(f, l = 0) {
      return c(this, f, l, BigInt(0), BigInt("0xffffffffffffffff"));
    }), u.prototype.writeBigUInt64BE = we(function(f, l = 0) {
      return p(this, f, l, BigInt(0), BigInt("0xffffffffffffffff"));
    }), u.prototype.writeIntLE = function(f, l, m, O) {
      if (f = +f, l = l >>> 0, !O) {
        const lt = Math.pow(2, 8 * m - 1);
        a(this, f, l, m, lt - 1, -lt);
      }
      let U = 0, J = 1, Et = 0;
      for (this[l] = f & 255; ++U < m && (J *= 256); )
        f < 0 && Et === 0 && this[l + U - 1] !== 0 && (Et = 1), this[l + U] = (f / J >> 0) - Et & 255;
      return l + m;
    }, u.prototype.writeIntBE = function(f, l, m, O) {
      if (f = +f, l = l >>> 0, !O) {
        const lt = Math.pow(2, 8 * m - 1);
        a(this, f, l, m, lt - 1, -lt);
      }
      let U = m - 1, J = 1, Et = 0;
      for (this[l + U] = f & 255; --U >= 0 && (J *= 256); )
        f < 0 && Et === 0 && this[l + U + 1] !== 0 && (Et = 1), this[l + U] = (f / J >> 0) - Et & 255;
      return l + m;
    }, u.prototype.writeInt8 = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[l] = f & 255, l + 1;
    }, u.prototype.writeInt16LE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 2, 32767, -32768), this[l] = f & 255, this[l + 1] = f >>> 8, l + 2;
    }, u.prototype.writeInt16BE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 2, 32767, -32768), this[l] = f >>> 8, this[l + 1] = f & 255, l + 2;
    }, u.prototype.writeInt32LE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 4, 2147483647, -2147483648), this[l] = f & 255, this[l + 1] = f >>> 8, this[l + 2] = f >>> 16, this[l + 3] = f >>> 24, l + 4;
    }, u.prototype.writeInt32BE = function(f, l, m) {
      return f = +f, l = l >>> 0, m || a(this, f, l, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[l] = f >>> 24, this[l + 1] = f >>> 16, this[l + 2] = f >>> 8, this[l + 3] = f & 255, l + 4;
    }, u.prototype.writeBigInt64LE = we(function(f, l = 0) {
      return c(this, f, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), u.prototype.writeBigInt64BE = we(function(f, l = 0) {
      return p(this, f, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function S(E, f, l, m, O, U) {
      if (l + m > E.length) throw new RangeError("Index out of range");
      if (l < 0) throw new RangeError("Index out of range");
    }
    function T(E, f, l, m, O) {
      return f = +f, l = l >>> 0, O || S(E, f, l, 4), e.write(E, f, l, m, 23, 4), l + 4;
    }
    u.prototype.writeFloatLE = function(f, l, m) {
      return T(this, f, l, !0, m);
    }, u.prototype.writeFloatBE = function(f, l, m) {
      return T(this, f, l, !1, m);
    };
    function H(E, f, l, m, O) {
      return f = +f, l = l >>> 0, O || S(E, f, l, 8), e.write(E, f, l, m, 52, 8), l + 8;
    }
    u.prototype.writeDoubleLE = function(f, l, m) {
      return H(this, f, l, !0, m);
    }, u.prototype.writeDoubleBE = function(f, l, m) {
      return H(this, f, l, !1, m);
    }, u.prototype.copy = function(f, l, m, O) {
      if (!u.isBuffer(f)) throw new TypeError("argument should be a Buffer");
      if (m || (m = 0), !O && O !== 0 && (O = this.length), l >= f.length && (l = f.length), l || (l = 0), O > 0 && O < m && (O = m), O === m || f.length === 0 || this.length === 0) return 0;
      if (l < 0)
        throw new RangeError("targetStart out of bounds");
      if (m < 0 || m >= this.length) throw new RangeError("Index out of range");
      if (O < 0) throw new RangeError("sourceEnd out of bounds");
      O > this.length && (O = this.length), f.length - l < O - m && (O = f.length - l + m);
      const U = O - m;
      return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, m, O) : Uint8Array.prototype.set.call(
        f,
        this.subarray(m, O),
        l
      ), U;
    }, u.prototype.fill = function(f, l, m, O) {
      if (typeof f == "string") {
        if (typeof l == "string" ? (O = l, l = 0, m = this.length) : typeof m == "string" && (O = m, m = this.length), O !== void 0 && typeof O != "string")
          throw new TypeError("encoding must be a string");
        if (typeof O == "string" && !u.isEncoding(O))
          throw new TypeError("Unknown encoding: " + O);
        if (f.length === 1) {
          const J = f.charCodeAt(0);
          (O === "utf8" && J < 128 || O === "latin1") && (f = J);
        }
      } else typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
      if (l < 0 || this.length < l || this.length < m)
        throw new RangeError("Out of range index");
      if (m <= l)
        return this;
      l = l >>> 0, m = m === void 0 ? this.length : m >>> 0, f || (f = 0);
      let U;
      if (typeof f == "number")
        for (U = l; U < m; ++U)
          this[U] = f;
      else {
        const J = u.isBuffer(f) ? f : u.from(f, O), Et = J.length;
        if (Et === 0)
          throw new TypeError('The value "' + f + '" is invalid for argument "value"');
        for (U = 0; U < m - l; ++U)
          this[U + l] = J[U % Et];
      }
      return this;
    };
    const tt = {};
    function it(E, f, l) {
      tt[E] = class extends l {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: f.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${E}]`, this.stack, delete this.name;
        }
        get code() {
          return E;
        }
        set code(O) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${E}]: ${this.message}`;
        }
      };
    }
    it(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(E) {
        return E ? `${E} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), it(
      "ERR_INVALID_ARG_TYPE",
      function(E, f) {
        return `The "${E}" argument must be of type number. Received type ${typeof f}`;
      },
      TypeError
    ), it(
      "ERR_OUT_OF_RANGE",
      function(E, f, l) {
        let m = `The value of "${E}" is out of range.`, O = l;
        return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? O = Ct(String(l)) : typeof l == "bigint" && (O = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (O = Ct(O)), O += "n"), m += ` It must be ${f}. Received ${O}`, m;
      },
      RangeError
    );
    function Ct(E) {
      let f = "", l = E.length;
      const m = E[0] === "-" ? 1 : 0;
      for (; l >= m + 4; l -= 3)
        f = `_${E.slice(l - 3, l)}${f}`;
      return `${E.slice(0, l)}${f}`;
    }
    function dt(E, f, l) {
      Rt(f, "offset"), (E[f] === void 0 || E[f + l] === void 0) && gt(f, E.length - (l + 1));
    }
    function ht(E, f, l, m, O, U) {
      if (E > l || E < f) {
        const J = typeof f == "bigint" ? "n" : "";
        let Et;
        throw f === 0 || f === BigInt(0) ? Et = `>= 0${J} and < 2${J} ** ${(U + 1) * 8}${J}` : Et = `>= -(2${J} ** ${(U + 1) * 8 - 1}${J}) and < 2 ** ${(U + 1) * 8 - 1}${J}`, new tt.ERR_OUT_OF_RANGE("value", Et, E);
      }
      dt(m, O, U);
    }
    function Rt(E, f) {
      if (typeof E != "number")
        throw new tt.ERR_INVALID_ARG_TYPE(f, "number", E);
    }
    function gt(E, f, l) {
      throw Math.floor(E) !== E ? (Rt(E, l), new tt.ERR_OUT_OF_RANGE("offset", "an integer", E)) : f < 0 ? new tt.ERR_BUFFER_OUT_OF_BOUNDS() : new tt.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${f}`,
        E
      );
    }
    const _t = /[^+/0-9A-Za-z-_]/g;
    function Ee(E) {
      if (E = E.split("=")[0], E = E.trim().replace(_t, ""), E.length < 2) return "";
      for (; E.length % 4 !== 0; )
        E = E + "=";
      return E;
    }
    function yt(E, f) {
      f = f || 1 / 0;
      let l;
      const m = E.length;
      let O = null;
      const U = [];
      for (let J = 0; J < m; ++J) {
        if (l = E.charCodeAt(J), l > 55295 && l < 57344) {
          if (!O) {
            if (l > 56319) {
              (f -= 3) > -1 && U.push(239, 191, 189);
              continue;
            } else if (J + 1 === m) {
              (f -= 3) > -1 && U.push(239, 191, 189);
              continue;
            }
            O = l;
            continue;
          }
          if (l < 56320) {
            (f -= 3) > -1 && U.push(239, 191, 189), O = l;
            continue;
          }
          l = (O - 55296 << 10 | l - 56320) + 65536;
        } else O && (f -= 3) > -1 && U.push(239, 191, 189);
        if (O = null, l < 128) {
          if ((f -= 1) < 0) break;
          U.push(l);
        } else if (l < 2048) {
          if ((f -= 2) < 0) break;
          U.push(
            l >> 6 | 192,
            l & 63 | 128
          );
        } else if (l < 65536) {
          if ((f -= 3) < 0) break;
          U.push(
            l >> 12 | 224,
            l >> 6 & 63 | 128,
            l & 63 | 128
          );
        } else if (l < 1114112) {
          if ((f -= 4) < 0) break;
          U.push(
            l >> 18 | 240,
            l >> 12 & 63 | 128,
            l >> 6 & 63 | 128,
            l & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return U;
    }
    function Qt(E) {
      const f = [];
      for (let l = 0; l < E.length; ++l)
        f.push(E.charCodeAt(l) & 255);
      return f;
    }
    function Ze(E, f) {
      let l, m, O;
      const U = [];
      for (let J = 0; J < E.length && !((f -= 2) < 0); ++J)
        l = E.charCodeAt(J), m = l >> 8, O = l % 256, U.push(O), U.push(m);
      return U;
    }
    function bt(E) {
      return t.toByteArray(Ee(E));
    }
    function mt(E, f, l, m) {
      let O;
      for (O = 0; O < m && !(O + l >= f.length || O >= E.length); ++O)
        f[O + l] = E[O];
      return O;
    }
    function pe(E, f) {
      return E instanceof f || E != null && E.constructor != null && E.constructor.name != null && E.constructor.name === f.name;
    }
    function vt(E) {
      return E !== E;
    }
    const Mt = function() {
      const E = "0123456789abcdef", f = new Array(256);
      for (let l = 0; l < 16; ++l) {
        const m = l * 16;
        for (let O = 0; O < 16; ++O)
          f[m + O] = E[l] + E[O];
      }
      return f;
    }();
    function we(E) {
      return typeof BigInt > "u" ? Lt : E;
    }
    function Lt() {
      throw new Error("BigInt not supported");
    }
  }(Nr)), Nr;
}
var pt = fi();
const $e = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Po(r) {
  return r instanceof Uint8Array || ArrayBuffer.isView(r) && r.constructor.name === "Uint8Array";
}
function ei(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error("positive integer expected, got " + r);
}
function yn(r, ...t) {
  if (!Po(r))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(r.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + r.length);
}
function Yo(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  ei(r.outputLen), ei(r.blockLen);
}
function Yn(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function Ho(r, t) {
  yn(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error("digestInto() expects output buffer of length at least " + e);
}
function an(...r) {
  for (let t = 0; t < r.length; t++)
    r[t].fill(0);
}
function Qr(r) {
  return new DataView(r.buffer, r.byteOffset, r.byteLength);
}
function Re(r, t) {
  return r << 32 - t | r >>> t;
}
function Jo(r) {
  if (typeof r != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(r));
}
function li(r) {
  return typeof r == "string" && (r = Jo(r)), yn(r), r;
}
function qo(...r) {
  let t = 0;
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    yn(s), t += s.length;
  }
  const e = new Uint8Array(t);
  for (let n = 0, s = 0; n < r.length; n++) {
    const i = r[n];
    e.set(i, s), s += i.length;
  }
  return e;
}
class bs {
}
function Ns(r) {
  const t = (n) => r().update(li(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function Qs(r = 32) {
  if ($e && typeof $e.getRandomValues == "function")
    return $e.getRandomValues(new Uint8Array(r));
  if ($e && typeof $e.randomBytes == "function")
    return Uint8Array.from($e.randomBytes(r));
  throw new Error("crypto.getRandomValues must be defined");
}
function Ko(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(e >> s & i), u = Number(e & i), d = n ? 4 : 0, y = n ? 0 : 4;
  r.setUint32(t + d, o, n), r.setUint32(t + y, u, n);
}
function zo(r, t, e) {
  return r & t ^ ~r & e;
}
function Xo(r, t, e) {
  return r & t ^ r & e ^ t & e;
}
class vs extends bs {
  constructor(t, e, n, s) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = s, this.buffer = new Uint8Array(t), this.view = Qr(this.buffer);
  }
  update(t) {
    Yn(this), t = li(t), yn(t);
    const { view: e, buffer: n, blockLen: s } = this, i = t.length;
    for (let o = 0; o < i; ) {
      const u = Math.min(s - this.pos, i - o);
      if (u === s) {
        const d = Qr(t);
        for (; s <= i - o; o += s)
          this.process(d, o);
        continue;
      }
      n.set(t.subarray(o, o + u), this.pos), this.pos += u, o += u, this.pos === s && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Yn(this), Ho(t, this), this.finished = !0;
    const { buffer: e, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    e[o++] = 128, an(this.buffer.subarray(o)), this.padOffset > s - o && (this.process(n, 0), o = 0);
    for (let Q = o; Q < s; Q++)
      e[Q] = 0;
    Ko(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const u = Qr(t), d = this.outputLen;
    if (d % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const y = d / 4, R = this.get();
    if (y > R.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let Q = 0; Q < y; Q++)
      u.setUint32(4 * Q, R[Q], i);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const n = t.slice(0, e);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: n, length: s, finished: i, destroyed: o, pos: u } = this;
    return t.destroyed = o, t.finished = i, t.length = s, t.pos = u, s % e && t.buffer.set(n), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const Ue = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ae = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]), On = /* @__PURE__ */ BigInt(2 ** 32 - 1), Fi = /* @__PURE__ */ BigInt(32);
function Vo(r, t = !1) {
  return t ? { h: Number(r & On), l: Number(r >> Fi & On) } : { h: Number(r >> Fi & On) | 0, l: Number(r & On) | 0 };
}
function Wo(r, t = !1) {
  const e = r.length;
  let n = new Uint32Array(e), s = new Uint32Array(e);
  for (let i = 0; i < e; i++) {
    const { h: o, l: u } = Vo(r[i], t);
    [n[i], s[i]] = [o, u];
  }
  return [n, s];
}
const Gi = (r, t, e) => r >>> e, Pi = (r, t, e) => r << 32 - e | t >>> e, tn = (r, t, e) => r >>> e | t << 32 - e, en = (r, t, e) => r << 32 - e | t >>> e, Tn = (r, t, e) => r << 64 - e | t >>> e - 32, Mn = (r, t, e) => r >>> e - 32 | t << 64 - e;
function ve(r, t, e, n) {
  const s = (t >>> 0) + (n >>> 0);
  return { h: r + e + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const jo = (r, t, e) => (r >>> 0) + (t >>> 0) + (e >>> 0), Zo = (r, t, e, n) => t + e + n + (r / 2 ** 32 | 0) | 0, $o = (r, t, e, n) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0), tA = (r, t, e, n, s) => t + e + n + s + (r / 2 ** 32 | 0) | 0, eA = (r, t, e, n, s) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0) + (s >>> 0), nA = (r, t, e, n, s, i) => t + e + n + s + i + (r / 2 ** 32 | 0) | 0, rA = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Fe = /* @__PURE__ */ new Uint32Array(64);
class iA extends vs {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = Ue[0] | 0, this.B = Ue[1] | 0, this.C = Ue[2] | 0, this.D = Ue[3] | 0, this.E = Ue[4] | 0, this.F = Ue[5] | 0, this.G = Ue[6] | 0, this.H = Ue[7] | 0;
  }
  get() {
    const { A: t, B: e, C: n, D: s, E: i, F: o, G: u, H: d } = this;
    return [t, e, n, s, i, o, u, d];
  }
  // prettier-ignore
  set(t, e, n, s, i, o, u, d) {
    this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = u | 0, this.H = d | 0;
  }
  process(t, e) {
    for (let Q = 0; Q < 16; Q++, e += 4)
      Fe[Q] = t.getUint32(e, !1);
    for (let Q = 16; Q < 64; Q++) {
      const D = Fe[Q - 15], x = Fe[Q - 2], L = Re(D, 7) ^ Re(D, 18) ^ D >>> 3, N = Re(x, 17) ^ Re(x, 19) ^ x >>> 10;
      Fe[Q] = N + Fe[Q - 7] + L + Fe[Q - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: u, F: d, G: y, H: R } = this;
    for (let Q = 0; Q < 64; Q++) {
      const D = Re(u, 6) ^ Re(u, 11) ^ Re(u, 25), x = R + D + zo(u, d, y) + rA[Q] + Fe[Q] | 0, N = (Re(n, 2) ^ Re(n, 13) ^ Re(n, 22)) + Xo(n, s, i) | 0;
      R = y, y = d, d = u, u = o + x | 0, o = i, i = s, s = n, n = x + N | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, u = u + this.E | 0, d = d + this.F | 0, y = y + this.G | 0, R = R + this.H | 0, this.set(n, s, i, o, u, d, y, R);
  }
  roundClean() {
    an(Fe);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), an(this.buffer);
  }
}
const xs = Wo([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((r) => BigInt(r))), sA = xs[0], oA = xs[1], Ge = /* @__PURE__ */ new Uint32Array(80), Pe = /* @__PURE__ */ new Uint32Array(80);
class AA extends vs {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = ae[0] | 0, this.Al = ae[1] | 0, this.Bh = ae[2] | 0, this.Bl = ae[3] | 0, this.Ch = ae[4] | 0, this.Cl = ae[5] | 0, this.Dh = ae[6] | 0, this.Dl = ae[7] | 0, this.Eh = ae[8] | 0, this.El = ae[9] | 0, this.Fh = ae[10] | 0, this.Fl = ae[11] | 0, this.Gh = ae[12] | 0, this.Gl = ae[13] | 0, this.Hh = ae[14] | 0, this.Hl = ae[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: e, Bh: n, Bl: s, Ch: i, Cl: o, Dh: u, Dl: d, Eh: y, El: R, Fh: Q, Fl: D, Gh: x, Gl: L, Hh: N, Hl: M } = this;
    return [t, e, n, s, i, o, u, d, y, R, Q, D, x, L, N, M];
  }
  // prettier-ignore
  set(t, e, n, s, i, o, u, d, y, R, Q, D, x, L, N, M) {
    this.Ah = t | 0, this.Al = e | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = u | 0, this.Dl = d | 0, this.Eh = y | 0, this.El = R | 0, this.Fh = Q | 0, this.Fl = D | 0, this.Gh = x | 0, this.Gl = L | 0, this.Hh = N | 0, this.Hl = M | 0;
  }
  process(t, e) {
    for (let K = 0; K < 16; K++, e += 4)
      Ge[K] = t.getUint32(e), Pe[K] = t.getUint32(e += 4);
    for (let K = 16; K < 80; K++) {
      const P = Ge[K - 15] | 0, X = Pe[K - 15] | 0, Z = tn(P, X, 1) ^ tn(P, X, 8) ^ Gi(P, X, 7), st = en(P, X, 1) ^ en(P, X, 8) ^ Pi(P, X, 7), ot = Ge[K - 2] | 0, z = Pe[K - 2] | 0, k = tn(ot, z, 19) ^ Tn(ot, z, 61) ^ Gi(ot, z, 6), F = en(ot, z, 19) ^ Mn(ot, z, 61) ^ Pi(ot, z, 6), q = $o(st, F, Pe[K - 7], Pe[K - 16]), B = tA(q, Z, k, Ge[K - 7], Ge[K - 16]);
      Ge[K] = B | 0, Pe[K] = q | 0;
    }
    let { Ah: n, Al: s, Bh: i, Bl: o, Ch: u, Cl: d, Dh: y, Dl: R, Eh: Q, El: D, Fh: x, Fl: L, Gh: N, Gl: M, Hh: V, Hl: j } = this;
    for (let K = 0; K < 80; K++) {
      const P = tn(Q, D, 14) ^ tn(Q, D, 18) ^ Tn(Q, D, 41), X = en(Q, D, 14) ^ en(Q, D, 18) ^ Mn(Q, D, 41), Z = Q & x ^ ~Q & N, st = D & L ^ ~D & M, ot = eA(j, X, st, oA[K], Pe[K]), z = nA(ot, V, P, Z, sA[K], Ge[K]), k = ot | 0, F = tn(n, s, 28) ^ Tn(n, s, 34) ^ Tn(n, s, 39), q = en(n, s, 28) ^ Mn(n, s, 34) ^ Mn(n, s, 39), B = n & i ^ n & u ^ i & u, A = s & o ^ s & d ^ o & d;
      V = N | 0, j = M | 0, N = x | 0, M = L | 0, x = Q | 0, L = D | 0, { h: Q, l: D } = ve(y | 0, R | 0, z | 0, k | 0), y = u | 0, R = d | 0, u = i | 0, d = o | 0, i = n | 0, o = s | 0;
      const h = jo(k, q, A);
      n = Zo(h, z, F, B), s = h | 0;
    }
    ({ h: n, l: s } = ve(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: o } = ve(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: u, l: d } = ve(this.Ch | 0, this.Cl | 0, u | 0, d | 0), { h: y, l: R } = ve(this.Dh | 0, this.Dl | 0, y | 0, R | 0), { h: Q, l: D } = ve(this.Eh | 0, this.El | 0, Q | 0, D | 0), { h: x, l: L } = ve(this.Fh | 0, this.Fl | 0, x | 0, L | 0), { h: N, l: M } = ve(this.Gh | 0, this.Gl | 0, N | 0, M | 0), { h: V, l: j } = ve(this.Hh | 0, this.Hl | 0, V | 0, j | 0), this.set(n, s, i, o, u, d, y, R, Q, D, x, L, N, M, V, j);
  }
  roundClean() {
    an(Ge, Pe);
  }
  destroy() {
    an(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Os = /* @__PURE__ */ Ns(() => new iA()), aA = /* @__PURE__ */ Ns(() => new AA());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const hi = /* @__PURE__ */ BigInt(0), ni = /* @__PURE__ */ BigInt(1);
function mn(r) {
  return r instanceof Uint8Array || ArrayBuffer.isView(r) && r.constructor.name === "Uint8Array";
}
function di(r) {
  if (!mn(r))
    throw new Error("Uint8Array expected");
}
function Je(r, t) {
  if (typeof t != "boolean")
    throw new Error(r + " boolean expected, got " + t);
}
function Ln(r) {
  const t = r.toString(16);
  return t.length & 1 ? "0" + t : t;
}
function Ts(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return r === "" ? hi : BigInt("0x" + r);
}
const Ms = (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function"
), cA = /* @__PURE__ */ Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function cn(r) {
  if (di(r), Ms)
    return r.toHex();
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += cA[r[e]];
  return t;
}
const xe = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Yi(r) {
  if (r >= xe._0 && r <= xe._9)
    return r - xe._0;
  if (r >= xe.A && r <= xe.F)
    return r - (xe.A - 10);
  if (r >= xe.a && r <= xe.f)
    return r - (xe.a - 10);
}
function Hn(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  if (Ms)
    return Uint8Array.fromHex(r);
  const t = r.length, e = t / 2;
  if (t % 2)
    throw new Error("hex string expected, got unpadded hex of length " + t);
  const n = new Uint8Array(e);
  for (let s = 0, i = 0; s < e; s++, i += 2) {
    const o = Yi(r.charCodeAt(i)), u = Yi(r.charCodeAt(i + 1));
    if (o === void 0 || u === void 0) {
      const d = r[i] + r[i + 1];
      throw new Error('hex string expected, got non-hex character "' + d + '" at index ' + i);
    }
    n[s] = o * 16 + u;
  }
  return n;
}
function Xe(r) {
  return Ts(cn(r));
}
function Cn(r) {
  return di(r), Ts(cn(Uint8Array.from(r).reverse()));
}
function Rn(r, t) {
  return Hn(r.toString(16).padStart(t * 2, "0"));
}
function Jn(r, t) {
  return Rn(r, t).reverse();
}
function Ut(r, t, e) {
  let n;
  if (typeof t == "string")
    try {
      n = Hn(t);
    } catch (i) {
      throw new Error(r + " must be hex string or Uint8Array, cause: " + i);
    }
  else if (mn(t))
    n = Uint8Array.from(t);
  else
    throw new Error(r + " must be hex string or Uint8Array");
  const s = n.length;
  if (typeof e == "number" && s !== e)
    throw new Error(r + " of length " + e + " expected, got " + s);
  return n;
}
function un(...r) {
  let t = 0;
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    di(s), t += s.length;
  }
  const e = new Uint8Array(t);
  for (let n = 0, s = 0; n < r.length; n++) {
    const i = r[n];
    e.set(i, s), s += i.length;
  }
  return e;
}
const vr = (r) => typeof r == "bigint" && hi <= r;
function gi(r, t, e) {
  return vr(r) && vr(t) && vr(e) && t <= r && r < e;
}
function ye(r, t, e, n) {
  if (!gi(t, e, n))
    throw new Error("expected valid " + r + ": " + e + " <= n < " + n + ", got " + t);
}
function uA(r) {
  let t;
  for (t = 0; r > hi; r >>= ni, t += 1)
    ;
  return t;
}
const er = (r) => (ni << BigInt(r)) - ni, xr = (r) => new Uint8Array(r), Hi = (r) => Uint8Array.from(r);
function fA(r, t, e) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function")
    throw new Error("hmacFn must be a function");
  let n = xr(r), s = xr(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, u = (...Q) => e(s, n, ...Q), d = (Q = xr(0)) => {
    s = u(Hi([0]), Q), n = u(), Q.length !== 0 && (s = u(Hi([1]), Q), n = u());
  }, y = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let Q = 0;
    const D = [];
    for (; Q < t; ) {
      n = u();
      const x = n.slice();
      D.push(x), Q += n.length;
    }
    return un(...D);
  };
  return (Q, D) => {
    o(), d(Q);
    let x;
    for (; !(x = D(y())); )
      d();
    return o(), x;
  };
}
const lA = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || mn(r),
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, t) => t.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function Sn(r, t, e = {}) {
  const n = (s, i, o) => {
    const u = lA[i];
    if (typeof u != "function")
      throw new Error("invalid validator function");
    const d = r[s];
    if (!(o && d === void 0) && !u(d, r))
      throw new Error("param " + String(s) + " is invalid. Expected " + i + ", got " + d);
  };
  for (const [s, i] of Object.entries(t))
    n(s, i, !1);
  for (const [s, i] of Object.entries(e))
    n(s, i, !0);
  return r;
}
function qn(r) {
  const t = /* @__PURE__ */ new WeakMap();
  return (e, ...n) => {
    const s = t.get(e);
    if (s !== void 0)
      return s;
    const i = r(e, ...n);
    return t.set(e, i), i;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ie = BigInt(0), Ae = BigInt(1), ze = /* @__PURE__ */ BigInt(2), hA = /* @__PURE__ */ BigInt(3), Ls = /* @__PURE__ */ BigInt(4), Ds = /* @__PURE__ */ BigInt(5), ks = /* @__PURE__ */ BigInt(8);
function xt(r, t) {
  const e = r % t;
  return e >= Ie ? e : t + e;
}
function Dt(r, t, e) {
  let n = r;
  for (; t-- > Ie; )
    n *= n, n %= e;
  return n;
}
function ri(r, t) {
  if (r === Ie)
    throw new Error("invert: expected non-zero number");
  if (t <= Ie)
    throw new Error("invert: expected positive modulus, got " + t);
  let e = xt(r, t), n = t, s = Ie, i = Ae;
  for (; e !== Ie; ) {
    const u = n / e, d = n % e, y = s - i * u;
    n = e, e = d, s = i, i = y;
  }
  if (n !== Ae)
    throw new Error("invert: does not exist");
  return xt(s, t);
}
function Us(r, t) {
  const e = (r.ORDER + Ae) / Ls, n = r.pow(t, e);
  if (!r.eql(r.sqr(n), t))
    throw new Error("Cannot find square root");
  return n;
}
function dA(r, t) {
  const e = (r.ORDER - Ds) / ks, n = r.mul(t, ze), s = r.pow(n, e), i = r.mul(t, s), o = r.mul(r.mul(i, ze), s), u = r.mul(i, r.sub(o, r.ONE));
  if (!r.eql(r.sqr(u), t))
    throw new Error("Cannot find square root");
  return u;
}
function gA(r) {
  if (r < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let t = r - Ae, e = 0;
  for (; t % ze === Ie; )
    t /= ze, e++;
  let n = ze;
  const s = bn(r);
  for (; Ji(s, n) === 1; )
    if (n++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (e === 1)
    return Us;
  let i = s.pow(n, t);
  const o = (t + Ae) / ze;
  return function(d, y) {
    if (d.is0(y))
      return y;
    if (Ji(d, y) !== 1)
      throw new Error("Cannot find square root");
    let R = e, Q = d.mul(d.ONE, i), D = d.pow(y, t), x = d.pow(y, o);
    for (; !d.eql(D, d.ONE); ) {
      if (d.is0(D))
        return d.ZERO;
      let L = 1, N = d.sqr(D);
      for (; !d.eql(N, d.ONE); )
        if (L++, N = d.sqr(N), L === R)
          throw new Error("Cannot find square root");
      const M = Ae << BigInt(R - L - 1), V = d.pow(Q, M);
      R = L, Q = d.sqr(V), D = d.mul(D, Q), x = d.mul(x, V);
    }
    return x;
  };
}
function EA(r) {
  return r % Ls === hA ? Us : r % ks === Ds ? dA : gA(r);
}
const IA = (r, t) => (xt(r, t) & Ae) === Ae, pA = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function BA(r) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = pA.reduce((n, s) => (n[s] = "function", n), t);
  return Sn(r, e);
}
function _A(r, t, e) {
  if (e < Ie)
    throw new Error("invalid exponent, negatives unsupported");
  if (e === Ie)
    return r.ONE;
  if (e === Ae)
    return t;
  let n = r.ONE, s = t;
  for (; e > Ie; )
    e & Ae && (n = r.mul(n, s)), s = r.sqr(s), e >>= Ae;
  return n;
}
function Ei(r, t, e = !1) {
  const n = new Array(t.length).fill(e ? r.ZERO : void 0), s = t.reduce((o, u, d) => r.is0(u) ? o : (n[d] = o, r.mul(o, u)), r.ONE), i = r.inv(s);
  return t.reduceRight((o, u, d) => r.is0(u) ? o : (n[d] = r.mul(o, n[d]), r.mul(o, u)), i), n;
}
function Ji(r, t) {
  const e = (r.ORDER - Ae) / ze, n = r.pow(t, e), s = r.eql(n, r.ONE), i = r.eql(n, r.ZERO), o = r.eql(n, r.neg(r.ONE));
  if (!s && !i && !o)
    throw new Error("invalid Legendre symbol result");
  return s ? 1 : i ? 0 : -1;
}
function Fs(r, t) {
  t !== void 0 && ei(t);
  const e = t !== void 0 ? t : r.toString(2).length, n = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: n };
}
function bn(r, t, e = !1, n = {}) {
  if (r <= Ie)
    throw new Error("invalid field: expected ORDER > 0, got " + r);
  const { nBitLength: s, nByteLength: i } = Fs(r, t);
  if (i > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o;
  const u = Object.freeze({
    ORDER: r,
    isLE: e,
    BITS: s,
    BYTES: i,
    MASK: er(s),
    ZERO: Ie,
    ONE: Ae,
    create: (d) => xt(d, r),
    isValid: (d) => {
      if (typeof d != "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof d);
      return Ie <= d && d < r;
    },
    is0: (d) => d === Ie,
    isOdd: (d) => (d & Ae) === Ae,
    neg: (d) => xt(-d, r),
    eql: (d, y) => d === y,
    sqr: (d) => xt(d * d, r),
    add: (d, y) => xt(d + y, r),
    sub: (d, y) => xt(d - y, r),
    mul: (d, y) => xt(d * y, r),
    pow: (d, y) => _A(u, d, y),
    div: (d, y) => xt(d * ri(y, r), r),
    // Same as above, but doesn't normalize
    sqrN: (d) => d * d,
    addN: (d, y) => d + y,
    subN: (d, y) => d - y,
    mulN: (d, y) => d * y,
    inv: (d) => ri(d, r),
    sqrt: n.sqrt || ((d) => (o || (o = EA(r)), o(u, d))),
    toBytes: (d) => e ? Jn(d, i) : Rn(d, i),
    fromBytes: (d) => {
      if (d.length !== i)
        throw new Error("Field.fromBytes: expected " + i + " bytes, got " + d.length);
      return e ? Cn(d) : Xe(d);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (d) => Ei(u, d),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (d, y, R) => R ? y : d
  });
  return Object.freeze(u);
}
function Gs(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const t = r.toString(2).length;
  return Math.ceil(t / 8);
}
function Ps(r) {
  const t = Gs(r);
  return t + Math.ceil(t / 2);
}
function CA(r, t, e = !1) {
  const n = r.length, s = Gs(t), i = Ps(t);
  if (n < 16 || n < i || n > 1024)
    throw new Error("expected " + i + "-1024 bytes of input, got " + n);
  const o = e ? Cn(r) : Xe(r), u = xt(o, t - Ae) + Ae;
  return e ? Jn(u, s) : Rn(u, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const qi = BigInt(0), ii = BigInt(1);
function Or(r, t) {
  const e = t.negate();
  return r ? e : t;
}
function Ys(r, t) {
  if (!Number.isSafeInteger(r) || r <= 0 || r > t)
    throw new Error("invalid window size, expected [1.." + t + "], got W=" + r);
}
function Tr(r, t) {
  Ys(r, t);
  const e = Math.ceil(t / r) + 1, n = 2 ** (r - 1), s = 2 ** r, i = er(r), o = BigInt(r);
  return { windows: e, windowSize: n, mask: i, maxNumber: s, shiftBy: o };
}
function Ki(r, t, e) {
  const { windowSize: n, mask: s, maxNumber: i, shiftBy: o } = e;
  let u = Number(r & s), d = r >> o;
  u > n && (u -= i, d += ii);
  const y = t * n, R = y + Math.abs(u) - 1, Q = u === 0, D = u < 0, x = t % 2 !== 0;
  return { nextN: d, offset: R, isZero: Q, isNeg: D, isNegF: x, offsetF: y };
}
function wA(r, t) {
  if (!Array.isArray(r))
    throw new Error("array expected");
  r.forEach((e, n) => {
    if (!(e instanceof t))
      throw new Error("invalid point at index " + n);
  });
}
function yA(r, t) {
  if (!Array.isArray(r))
    throw new Error("array of scalars expected");
  r.forEach((e, n) => {
    if (!t.isValid(e))
      throw new Error("invalid scalar at index " + n);
  });
}
const Mr = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap();
function Lr(r) {
  return Hs.get(r) || 1;
}
function Js(r, t) {
  return {
    constTimeNegate: Or,
    hasPrecomputes(e) {
      return Lr(e) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(e, n, s = r.ZERO) {
      let i = e;
      for (; n > qi; )
        n & ii && (s = s.add(i)), i = i.double(), n >>= ii;
      return s;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(e, n) {
      const { windows: s, windowSize: i } = Tr(n, t), o = [];
      let u = e, d = u;
      for (let y = 0; y < s; y++) {
        d = u, o.push(d);
        for (let R = 1; R < i; R++)
          d = d.add(u), o.push(d);
        u = d.double();
      }
      return o;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(e, n, s) {
      let i = r.ZERO, o = r.BASE;
      const u = Tr(e, t);
      for (let d = 0; d < u.windows; d++) {
        const { nextN: y, offset: R, isZero: Q, isNeg: D, isNegF: x, offsetF: L } = Ki(s, d, u);
        s = y, Q ? o = o.add(Or(x, n[L])) : i = i.add(Or(D, n[R]));
      }
      return { p: i, f: o };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(e, n, s, i = r.ZERO) {
      const o = Tr(e, t);
      for (let u = 0; u < o.windows && s !== qi; u++) {
        const { nextN: d, offset: y, isZero: R, isNeg: Q } = Ki(s, u, o);
        if (s = d, !R) {
          const D = n[y];
          i = i.add(Q ? D.negate() : D);
        }
      }
      return i;
    },
    getPrecomputes(e, n, s) {
      let i = Mr.get(n);
      return i || (i = this.precomputeWindow(n, e), e !== 1 && Mr.set(n, s(i))), i;
    },
    wNAFCached(e, n, s) {
      const i = Lr(e);
      return this.wNAF(i, this.getPrecomputes(i, e, s), n);
    },
    wNAFCachedUnsafe(e, n, s, i) {
      const o = Lr(e);
      return o === 1 ? this.unsafeLadder(e, n, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, e, s), n, i);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(e, n) {
      Ys(n, t), Hs.set(e, n), Mr.delete(e);
    }
  };
}
function qs(r, t, e, n) {
  wA(e, r), yA(n, t);
  const s = e.length, i = n.length;
  if (s !== i)
    throw new Error("arrays of points and scalars must have equal length");
  const o = r.ZERO, u = uA(BigInt(s));
  let d = 1;
  u > 12 ? d = u - 3 : u > 4 ? d = u - 2 : u > 0 && (d = 2);
  const y = er(d), R = new Array(Number(y) + 1).fill(o), Q = Math.floor((t.BITS - 1) / d) * d;
  let D = o;
  for (let x = Q; x >= 0; x -= d) {
    R.fill(o);
    for (let N = 0; N < i; N++) {
      const M = n[N], V = Number(M >> BigInt(x) & y);
      R[V] = R[V].add(e[N]);
    }
    let L = o;
    for (let N = R.length - 1, M = o; N > 0; N--)
      M = M.add(R[N]), L = L.add(M);
    if (D = D.add(L), x !== 0)
      for (let N = 0; N < d; N++)
        D = D.double();
  }
  return D;
}
function Ii(r) {
  return BA(r.Fp), Sn(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Fs(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Se = BigInt(0), de = BigInt(1), zi = BigInt(2), mA = BigInt(8), RA = { zip215: !0 };
function SA(r) {
  const t = Ii(r);
  return Sn(r, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...t });
}
function bA(r) {
  const t = SA(r), { Fp: e, n, prehash: s, hash: i, randomBytes: o, nByteLength: u, h: d } = t, y = zi << BigInt(u * 8) - de, R = e.create, Q = bn(t.n, t.nBitLength);
  function D(_, C) {
    const b = e.sqr(_), I = e.sqr(C), a = e.add(e.mul(t.a, b), I), c = e.add(e.ONE, e.mul(t.d, e.mul(b, I)));
    return e.eql(a, c);
  }
  if (!D(t.Gx, t.Gy))
    throw new Error("bad curve params: generator point");
  const x = t.uvRatio || ((_, C) => {
    try {
      return { isValid: !0, value: e.sqrt(_ * e.inv(C)) };
    } catch {
      return { isValid: !1, value: Se };
    }
  }), L = t.adjustScalarBytes || ((_) => _), N = t.domain || ((_, C, b) => {
    if (Je("phflag", b), C.length || b)
      throw new Error("Contexts/pre-hash are not supported");
    return _;
  });
  function M(_, C, b = !1) {
    const I = b ? de : Se;
    ye("coordinate " + _, C, I, y);
  }
  function V(_) {
    if (!(_ instanceof P))
      throw new Error("ExtendedPoint expected");
  }
  const j = qn((_, C) => {
    const { ex: b, ey: I, ez: a } = _, c = _.is0();
    C == null && (C = c ? mA : e.inv(a));
    const p = R(b * C), S = R(I * C), T = R(a * C);
    if (c)
      return { x: Se, y: de };
    if (T !== de)
      throw new Error("invZ was invalid");
    return { x: p, y: S };
  }), K = qn((_) => {
    const { a: C, d: b } = t;
    if (_.is0())
      throw new Error("bad point: ZERO");
    const { ex: I, ey: a, ez: c, et: p } = _, S = R(I * I), T = R(a * a), H = R(c * c), tt = R(H * H), it = R(S * C), Ct = R(H * R(it + T)), dt = R(tt + R(b * R(S * T)));
    if (Ct !== dt)
      throw new Error("bad point: equation left != right (1)");
    const ht = R(I * a), Rt = R(c * p);
    if (ht !== Rt)
      throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class P {
    constructor(C, b, I, a) {
      M("x", C), M("y", b), M("z", I, !0), M("t", a), this.ex = C, this.ey = b, this.ez = I, this.et = a, Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(C) {
      if (C instanceof P)
        throw new Error("extended point not allowed");
      const { x: b, y: I } = C || {};
      return M("x", b), M("y", I), new P(b, I, de, R(b * I));
    }
    static normalizeZ(C) {
      const b = Ei(e, C.map((I) => I.ez));
      return C.map((I, a) => I.toAffine(b[a])).map(P.fromAffine);
    }
    // Multiscalar Multiplication
    static msm(C, b) {
      return qs(P, Q, C, b);
    }
    // "Private method", don't use it directly
    _setWindowSize(C) {
      st.setWindowSize(this, C);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      K(this);
    }
    // Compare one point to another.
    equals(C) {
      V(C);
      const { ex: b, ey: I, ez: a } = this, { ex: c, ey: p, ez: S } = C, T = R(b * S), H = R(c * a), tt = R(I * S), it = R(p * a);
      return T === H && tt === it;
    }
    is0() {
      return this.equals(P.ZERO);
    }
    negate() {
      return new P(R(-this.ex), this.ey, this.ez, R(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: C } = t, { ex: b, ey: I, ez: a } = this, c = R(b * b), p = R(I * I), S = R(zi * R(a * a)), T = R(C * c), H = b + I, tt = R(R(H * H) - c - p), it = T + p, Ct = it - S, dt = T - p, ht = R(tt * Ct), Rt = R(it * dt), gt = R(tt * dt), _t = R(Ct * it);
      return new P(ht, Rt, _t, gt);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(C) {
      V(C);
      const { a: b, d: I } = t, { ex: a, ey: c, ez: p, et: S } = this, { ex: T, ey: H, ez: tt, et: it } = C, Ct = R(a * T), dt = R(c * H), ht = R(S * I * it), Rt = R(p * tt), gt = R((a + c) * (T + H) - Ct - dt), _t = Rt - ht, Ee = Rt + ht, yt = R(dt - b * Ct), Qt = R(gt * _t), Ze = R(Ee * yt), bt = R(gt * yt), mt = R(_t * Ee);
      return new P(Qt, Ze, mt, bt);
    }
    subtract(C) {
      return this.add(C.negate());
    }
    wNAF(C) {
      return st.wNAFCached(this, C, P.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(C) {
      const b = C;
      ye("scalar", b, de, n);
      const { p: I, f: a } = this.wNAF(b);
      return P.normalizeZ([I, a])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    // Accepts optional accumulator to merge with multiply (important for sparse scalars)
    multiplyUnsafe(C, b = P.ZERO) {
      const I = C;
      return ye("scalar", I, Se, n), I === Se ? Z : this.is0() || I === de ? this : st.wNAFCachedUnsafe(this, I, P.normalizeZ, b);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(d).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return st.unsafeLadder(this, n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(C) {
      return j(this, C);
    }
    clearCofactor() {
      const { h: C } = t;
      return C === de ? this : this.multiplyUnsafe(C);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(C, b = !1) {
      const { d: I, a } = t, c = e.BYTES;
      C = Ut("pointHex", C, c), Je("zip215", b);
      const p = C.slice(), S = C[c - 1];
      p[c - 1] = S & -129;
      const T = Cn(p), H = b ? y : e.ORDER;
      ye("pointHex.y", T, Se, H);
      const tt = R(T * T), it = R(tt - de), Ct = R(I * tt - a);
      let { isValid: dt, value: ht } = x(it, Ct);
      if (!dt)
        throw new Error("Point.fromHex: invalid y coordinate");
      const Rt = (ht & de) === de, gt = (S & 128) !== 0;
      if (!b && ht === Se && gt)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return gt !== Rt && (ht = R(-ht)), P.fromAffine({ x: ht, y: T });
    }
    static fromPrivateKey(C) {
      const { scalar: b } = k(C);
      return X.multiply(b);
    }
    toRawBytes() {
      const { x: C, y: b } = this.toAffine(), I = Jn(b, e.BYTES);
      return I[I.length - 1] |= C & de ? 128 : 0, I;
    }
    toHex() {
      return cn(this.toRawBytes());
    }
  }
  P.BASE = new P(t.Gx, t.Gy, de, R(t.Gx * t.Gy)), P.ZERO = new P(Se, de, de, Se);
  const { BASE: X, ZERO: Z } = P, st = Js(P, u * 8);
  function ot(_) {
    return xt(_, n);
  }
  function z(_) {
    return ot(Cn(_));
  }
  function k(_) {
    const C = e.BYTES;
    _ = Ut("private key", _, C);
    const b = Ut("hashed private key", i(_), 2 * C), I = L(b.slice(0, C)), a = b.slice(C, 2 * C), c = z(I);
    return { head: I, prefix: a, scalar: c };
  }
  function F(_) {
    const { head: C, prefix: b, scalar: I } = k(_), a = X.multiply(I), c = a.toRawBytes();
    return { head: C, prefix: b, scalar: I, point: a, pointBytes: c };
  }
  function q(_) {
    return F(_).pointBytes;
  }
  function B(_ = Uint8Array.of(), ...C) {
    const b = un(...C);
    return z(i(N(b, Ut("context", _), !!s)));
  }
  function A(_, C, b = {}) {
    _ = Ut("message", _), s && (_ = s(_));
    const { prefix: I, scalar: a, pointBytes: c } = F(C), p = B(b.context, I, _), S = X.multiply(p).toRawBytes(), T = B(b.context, S, c, _), H = ot(p + T * a);
    ye("signature.s", H, Se, n);
    const tt = un(S, Jn(H, e.BYTES));
    return Ut("result", tt, e.BYTES * 2);
  }
  const h = RA;
  function g(_, C, b, I = h) {
    const { context: a, zip215: c } = I, p = e.BYTES;
    _ = Ut("signature", _, 2 * p), C = Ut("message", C), b = Ut("publicKey", b, p), c !== void 0 && Je("zip215", c), s && (C = s(C));
    const S = Cn(_.slice(p, 2 * p));
    let T, H, tt;
    try {
      T = P.fromHex(b, c), H = P.fromHex(_.slice(0, p), c), tt = X.multiplyUnsafe(S);
    } catch {
      return !1;
    }
    if (!c && T.isSmallOrder())
      return !1;
    const it = B(a, H.toRawBytes(), T.toRawBytes(), C);
    return H.add(T.multiplyUnsafe(it)).subtract(tt).clearCofactor().equals(P.ZERO);
  }
  return X._setWindowSize(8), {
    CURVE: t,
    getPublicKey: q,
    sign: A,
    verify: g,
    ExtendedPoint: P,
    utils: {
      getExtendedPublicKey: F,
      /** ed25519 priv keys are uniform 32b. No need to check for modulo bias, like in secp256k1. */
      randomPrivateKey: () => o(e.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(_ = 8, C = P.BASE) {
        return C._setWindowSize(_), C.multiply(BigInt(3)), C;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const pi = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Xi = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const NA = BigInt(1), Vi = BigInt(2);
BigInt(3);
const QA = BigInt(5), vA = BigInt(8);
function xA(r) {
  const t = BigInt(10), e = BigInt(20), n = BigInt(40), s = BigInt(80), i = pi, u = r * r % i * r % i, d = Dt(u, Vi, i) * u % i, y = Dt(d, NA, i) * r % i, R = Dt(y, QA, i) * y % i, Q = Dt(R, t, i) * R % i, D = Dt(Q, e, i) * Q % i, x = Dt(D, n, i) * D % i, L = Dt(x, s, i) * x % i, N = Dt(L, s, i) * x % i, M = Dt(N, t, i) * R % i;
  return { pow_p_5_8: Dt(M, Vi, i) * r % i, b2: u };
}
function OA(r) {
  return r[0] &= 248, r[31] &= 127, r[31] |= 64, r;
}
function TA(r, t) {
  const e = pi, n = xt(t * t * t, e), s = xt(n * n * t, e), i = xA(r * s).pow_p_5_8;
  let o = xt(r * n * i, e);
  const u = xt(t * o * o, e), d = o, y = xt(o * Xi, e), R = u === r, Q = u === xt(-r, e), D = u === xt(-r * Xi, e);
  return R && (o = d), (Q || D) && (o = y), IA(o, e) && (o = xt(-o, e)), { isValid: R || Q, value: o };
}
const Wi = bn(pi, void 0, !0), MA = {
  // Removing Fp.create() will still work, and is 10% faster on sign
  a: Wi.create(BigInt(-1)),
  // d is -121665/121666 a.k.a. Fp.neg(121665 * Fp.inv(121666))
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 2n**255n - 19n
  Fp: Wi,
  // Subgroup order 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  h: vA,
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: aA,
  randomBytes: Qs,
  adjustScalarBytes: OA,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: TA
}, Bi = bA(MA);
var Gn = { exports: {} };
const LA = {}, DA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LA
}, Symbol.toStringTag, { value: "Module" })), kA = /* @__PURE__ */ ui(DA);
var UA = Gn.exports, ji;
function Ks() {
  return ji || (ji = 1, function(r) {
    (function(t, e) {
      function n(B, A) {
        if (!B) throw new Error(A || "Assertion failed");
      }
      function s(B, A) {
        B.super_ = A;
        var h = function() {
        };
        h.prototype = A.prototype, B.prototype = new h(), B.prototype.constructor = B;
      }
      function i(B, A, h) {
        if (i.isBN(B))
          return B;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, B !== null && ((A === "le" || A === "be") && (h = A, A = 10), this._init(B || 0, A || 10, h || "be"));
      }
      typeof t == "object" ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
      var o;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = kA.Buffer;
      } catch {
      }
      i.isBN = function(A) {
        return A instanceof i ? !0 : A !== null && typeof A == "object" && A.constructor.wordSize === i.wordSize && Array.isArray(A.words);
      }, i.max = function(A, h) {
        return A.cmp(h) > 0 ? A : h;
      }, i.min = function(A, h) {
        return A.cmp(h) < 0 ? A : h;
      }, i.prototype._init = function(A, h, g) {
        if (typeof A == "number")
          return this._initNumber(A, h, g);
        if (typeof A == "object")
          return this._initArray(A, h, g);
        h === "hex" && (h = 16), n(h === (h | 0) && h >= 2 && h <= 36), A = A.toString().replace(/\s+/g, "");
        var w = 0;
        A[0] === "-" && (w++, this.negative = 1), w < A.length && (h === 16 ? this._parseHex(A, w, g) : (this._parseBase(A, h, w), g === "le" && this._initArray(this.toArray(), h, g)));
      }, i.prototype._initNumber = function(A, h, g) {
        A < 0 && (this.negative = 1, A = -A), A < 67108864 ? (this.words = [A & 67108863], this.length = 1) : A < 4503599627370496 ? (this.words = [
          A & 67108863,
          A / 67108864 & 67108863
        ], this.length = 2) : (n(A < 9007199254740992), this.words = [
          A & 67108863,
          A / 67108864 & 67108863,
          1
        ], this.length = 3), g === "le" && this._initArray(this.toArray(), h, g);
      }, i.prototype._initArray = function(A, h, g) {
        if (n(typeof A.length == "number"), A.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(A.length / 3), this.words = new Array(this.length);
        for (var w = 0; w < this.length; w++)
          this.words[w] = 0;
        var _, C, b = 0;
        if (g === "be")
          for (w = A.length - 1, _ = 0; w >= 0; w -= 3)
            C = A[w] | A[w - 1] << 8 | A[w - 2] << 16, this.words[_] |= C << b & 67108863, this.words[_ + 1] = C >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, _++);
        else if (g === "le")
          for (w = 0, _ = 0; w < A.length; w += 3)
            C = A[w] | A[w + 1] << 8 | A[w + 2] << 16, this.words[_] |= C << b & 67108863, this.words[_ + 1] = C >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, _++);
        return this._strip();
      };
      function u(B, A) {
        var h = B.charCodeAt(A);
        if (h >= 48 && h <= 57)
          return h - 48;
        if (h >= 65 && h <= 70)
          return h - 55;
        if (h >= 97 && h <= 102)
          return h - 87;
        n(!1, "Invalid character in " + B);
      }
      function d(B, A, h) {
        var g = u(B, h);
        return h - 1 >= A && (g |= u(B, h - 1) << 4), g;
      }
      i.prototype._parseHex = function(A, h, g) {
        this.length = Math.ceil((A.length - h) / 6), this.words = new Array(this.length);
        for (var w = 0; w < this.length; w++)
          this.words[w] = 0;
        var _ = 0, C = 0, b;
        if (g === "be")
          for (w = A.length - 1; w >= h; w -= 2)
            b = d(A, h, w) << _, this.words[C] |= b & 67108863, _ >= 18 ? (_ -= 18, C += 1, this.words[C] |= b >>> 26) : _ += 8;
        else {
          var I = A.length - h;
          for (w = I % 2 === 0 ? h + 1 : h; w < A.length; w += 2)
            b = d(A, h, w) << _, this.words[C] |= b & 67108863, _ >= 18 ? (_ -= 18, C += 1, this.words[C] |= b >>> 26) : _ += 8;
        }
        this._strip();
      };
      function y(B, A, h, g) {
        for (var w = 0, _ = 0, C = Math.min(B.length, h), b = A; b < C; b++) {
          var I = B.charCodeAt(b) - 48;
          w *= g, I >= 49 ? _ = I - 49 + 10 : I >= 17 ? _ = I - 17 + 10 : _ = I, n(I >= 0 && _ < g, "Invalid character"), w += _;
        }
        return w;
      }
      i.prototype._parseBase = function(A, h, g) {
        this.words = [0], this.length = 1;
        for (var w = 0, _ = 1; _ <= 67108863; _ *= h)
          w++;
        w--, _ = _ / h | 0;
        for (var C = A.length - g, b = C % w, I = Math.min(C, C - b) + g, a = 0, c = g; c < I; c += w)
          a = y(A, c, c + w, h), this.imuln(_), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
        if (b !== 0) {
          var p = 1;
          for (a = y(A, c, A.length, h), c = 0; c < b; c++)
            p *= h;
          this.imuln(p), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
        }
        this._strip();
      }, i.prototype.copy = function(A) {
        A.words = new Array(this.length);
        for (var h = 0; h < this.length; h++)
          A.words[h] = this.words[h];
        A.length = this.length, A.negative = this.negative, A.red = this.red;
      };
      function R(B, A) {
        B.words = A.words, B.length = A.length, B.negative = A.negative, B.red = A.red;
      }
      if (i.prototype._move = function(A) {
        R(A, this);
      }, i.prototype.clone = function() {
        var A = new i(null);
        return this.copy(A), A;
      }, i.prototype._expand = function(A) {
        for (; this.length < A; )
          this.words[this.length++] = 0;
        return this;
      }, i.prototype._strip = function() {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }, i.prototype._normSign = function() {
        return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
      }, typeof Symbol < "u" && typeof Symbol.for == "function")
        try {
          i.prototype[Symbol.for("nodejs.util.inspect.custom")] = Q;
        } catch {
          i.prototype.inspect = Q;
        }
      else
        i.prototype.inspect = Q;
      function Q() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var D = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ], x = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ], L = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      i.prototype.toString = function(A, h) {
        A = A || 10, h = h | 0 || 1;
        var g;
        if (A === 16 || A === "hex") {
          g = "";
          for (var w = 0, _ = 0, C = 0; C < this.length; C++) {
            var b = this.words[C], I = ((b << w | _) & 16777215).toString(16);
            _ = b >>> 24 - w & 16777215, w += 2, w >= 26 && (w -= 26, C--), _ !== 0 || C !== this.length - 1 ? g = D[6 - I.length] + I + g : g = I + g;
          }
          for (_ !== 0 && (g = _.toString(16) + g); g.length % h !== 0; )
            g = "0" + g;
          return this.negative !== 0 && (g = "-" + g), g;
        }
        if (A === (A | 0) && A >= 2 && A <= 36) {
          var a = x[A], c = L[A];
          g = "";
          var p = this.clone();
          for (p.negative = 0; !p.isZero(); ) {
            var S = p.modrn(c).toString(A);
            p = p.idivn(c), p.isZero() ? g = S + g : g = D[a - S.length] + S + g;
          }
          for (this.isZero() && (g = "0" + g); g.length % h !== 0; )
            g = "0" + g;
          return this.negative !== 0 && (g = "-" + g), g;
        }
        n(!1, "Base should be between 2 and 36");
      }, i.prototype.toNumber = function() {
        var A = this.words[0];
        return this.length === 2 ? A += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? A += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -A : A;
      }, i.prototype.toJSON = function() {
        return this.toString(16, 2);
      }, o && (i.prototype.toBuffer = function(A, h) {
        return this.toArrayLike(o, A, h);
      }), i.prototype.toArray = function(A, h) {
        return this.toArrayLike(Array, A, h);
      };
      var N = function(A, h) {
        return A.allocUnsafe ? A.allocUnsafe(h) : new A(h);
      };
      i.prototype.toArrayLike = function(A, h, g) {
        this._strip();
        var w = this.byteLength(), _ = g || Math.max(1, w);
        n(w <= _, "byte array longer than desired length"), n(_ > 0, "Requested array length <= 0");
        var C = N(A, _), b = h === "le" ? "LE" : "BE";
        return this["_toArrayLike" + b](C, w), C;
      }, i.prototype._toArrayLikeLE = function(A, h) {
        for (var g = 0, w = 0, _ = 0, C = 0; _ < this.length; _++) {
          var b = this.words[_] << C | w;
          A[g++] = b & 255, g < A.length && (A[g++] = b >> 8 & 255), g < A.length && (A[g++] = b >> 16 & 255), C === 6 ? (g < A.length && (A[g++] = b >> 24 & 255), w = 0, C = 0) : (w = b >>> 24, C += 2);
        }
        if (g < A.length)
          for (A[g++] = w; g < A.length; )
            A[g++] = 0;
      }, i.prototype._toArrayLikeBE = function(A, h) {
        for (var g = A.length - 1, w = 0, _ = 0, C = 0; _ < this.length; _++) {
          var b = this.words[_] << C | w;
          A[g--] = b & 255, g >= 0 && (A[g--] = b >> 8 & 255), g >= 0 && (A[g--] = b >> 16 & 255), C === 6 ? (g >= 0 && (A[g--] = b >> 24 & 255), w = 0, C = 0) : (w = b >>> 24, C += 2);
        }
        if (g >= 0)
          for (A[g--] = w; g >= 0; )
            A[g--] = 0;
      }, Math.clz32 ? i.prototype._countBits = function(A) {
        return 32 - Math.clz32(A);
      } : i.prototype._countBits = function(A) {
        var h = A, g = 0;
        return h >= 4096 && (g += 13, h >>>= 13), h >= 64 && (g += 7, h >>>= 7), h >= 8 && (g += 4, h >>>= 4), h >= 2 && (g += 2, h >>>= 2), g + h;
      }, i.prototype._zeroBits = function(A) {
        if (A === 0) return 26;
        var h = A, g = 0;
        return (h & 8191) === 0 && (g += 13, h >>>= 13), (h & 127) === 0 && (g += 7, h >>>= 7), (h & 15) === 0 && (g += 4, h >>>= 4), (h & 3) === 0 && (g += 2, h >>>= 2), (h & 1) === 0 && g++, g;
      }, i.prototype.bitLength = function() {
        var A = this.words[this.length - 1], h = this._countBits(A);
        return (this.length - 1) * 26 + h;
      };
      function M(B) {
        for (var A = new Array(B.bitLength()), h = 0; h < A.length; h++) {
          var g = h / 26 | 0, w = h % 26;
          A[h] = B.words[g] >>> w & 1;
        }
        return A;
      }
      i.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var A = 0, h = 0; h < this.length; h++) {
          var g = this._zeroBits(this.words[h]);
          if (A += g, g !== 26) break;
        }
        return A;
      }, i.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, i.prototype.toTwos = function(A) {
        return this.negative !== 0 ? this.abs().inotn(A).iaddn(1) : this.clone();
      }, i.prototype.fromTwos = function(A) {
        return this.testn(A - 1) ? this.notn(A).iaddn(1).ineg() : this.clone();
      }, i.prototype.isNeg = function() {
        return this.negative !== 0;
      }, i.prototype.neg = function() {
        return this.clone().ineg();
      }, i.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, i.prototype.iuor = function(A) {
        for (; this.length < A.length; )
          this.words[this.length++] = 0;
        for (var h = 0; h < A.length; h++)
          this.words[h] = this.words[h] | A.words[h];
        return this._strip();
      }, i.prototype.ior = function(A) {
        return n((this.negative | A.negative) === 0), this.iuor(A);
      }, i.prototype.or = function(A) {
        return this.length > A.length ? this.clone().ior(A) : A.clone().ior(this);
      }, i.prototype.uor = function(A) {
        return this.length > A.length ? this.clone().iuor(A) : A.clone().iuor(this);
      }, i.prototype.iuand = function(A) {
        var h;
        this.length > A.length ? h = A : h = this;
        for (var g = 0; g < h.length; g++)
          this.words[g] = this.words[g] & A.words[g];
        return this.length = h.length, this._strip();
      }, i.prototype.iand = function(A) {
        return n((this.negative | A.negative) === 0), this.iuand(A);
      }, i.prototype.and = function(A) {
        return this.length > A.length ? this.clone().iand(A) : A.clone().iand(this);
      }, i.prototype.uand = function(A) {
        return this.length > A.length ? this.clone().iuand(A) : A.clone().iuand(this);
      }, i.prototype.iuxor = function(A) {
        var h, g;
        this.length > A.length ? (h = this, g = A) : (h = A, g = this);
        for (var w = 0; w < g.length; w++)
          this.words[w] = h.words[w] ^ g.words[w];
        if (this !== h)
          for (; w < h.length; w++)
            this.words[w] = h.words[w];
        return this.length = h.length, this._strip();
      }, i.prototype.ixor = function(A) {
        return n((this.negative | A.negative) === 0), this.iuxor(A);
      }, i.prototype.xor = function(A) {
        return this.length > A.length ? this.clone().ixor(A) : A.clone().ixor(this);
      }, i.prototype.uxor = function(A) {
        return this.length > A.length ? this.clone().iuxor(A) : A.clone().iuxor(this);
      }, i.prototype.inotn = function(A) {
        n(typeof A == "number" && A >= 0);
        var h = Math.ceil(A / 26) | 0, g = A % 26;
        this._expand(h), g > 0 && h--;
        for (var w = 0; w < h; w++)
          this.words[w] = ~this.words[w] & 67108863;
        return g > 0 && (this.words[w] = ~this.words[w] & 67108863 >> 26 - g), this._strip();
      }, i.prototype.notn = function(A) {
        return this.clone().inotn(A);
      }, i.prototype.setn = function(A, h) {
        n(typeof A == "number" && A >= 0);
        var g = A / 26 | 0, w = A % 26;
        return this._expand(g + 1), h ? this.words[g] = this.words[g] | 1 << w : this.words[g] = this.words[g] & ~(1 << w), this._strip();
      }, i.prototype.iadd = function(A) {
        var h;
        if (this.negative !== 0 && A.negative === 0)
          return this.negative = 0, h = this.isub(A), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && A.negative !== 0)
          return A.negative = 0, h = this.isub(A), A.negative = 1, h._normSign();
        var g, w;
        this.length > A.length ? (g = this, w = A) : (g = A, w = this);
        for (var _ = 0, C = 0; C < w.length; C++)
          h = (g.words[C] | 0) + (w.words[C] | 0) + _, this.words[C] = h & 67108863, _ = h >>> 26;
        for (; _ !== 0 && C < g.length; C++)
          h = (g.words[C] | 0) + _, this.words[C] = h & 67108863, _ = h >>> 26;
        if (this.length = g.length, _ !== 0)
          this.words[this.length] = _, this.length++;
        else if (g !== this)
          for (; C < g.length; C++)
            this.words[C] = g.words[C];
        return this;
      }, i.prototype.add = function(A) {
        var h;
        return A.negative !== 0 && this.negative === 0 ? (A.negative = 0, h = this.sub(A), A.negative ^= 1, h) : A.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = A.sub(this), this.negative = 1, h) : this.length > A.length ? this.clone().iadd(A) : A.clone().iadd(this);
      }, i.prototype.isub = function(A) {
        if (A.negative !== 0) {
          A.negative = 0;
          var h = this.iadd(A);
          return A.negative = 1, h._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(A), this.negative = 1, this._normSign();
        var g = this.cmp(A);
        if (g === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var w, _;
        g > 0 ? (w = this, _ = A) : (w = A, _ = this);
        for (var C = 0, b = 0; b < _.length; b++)
          h = (w.words[b] | 0) - (_.words[b] | 0) + C, C = h >> 26, this.words[b] = h & 67108863;
        for (; C !== 0 && b < w.length; b++)
          h = (w.words[b] | 0) + C, C = h >> 26, this.words[b] = h & 67108863;
        if (C === 0 && b < w.length && w !== this)
          for (; b < w.length; b++)
            this.words[b] = w.words[b];
        return this.length = Math.max(this.length, b), w !== this && (this.negative = 1), this._strip();
      }, i.prototype.sub = function(A) {
        return this.clone().isub(A);
      };
      function V(B, A, h) {
        h.negative = A.negative ^ B.negative;
        var g = B.length + A.length | 0;
        h.length = g, g = g - 1 | 0;
        var w = B.words[0] | 0, _ = A.words[0] | 0, C = w * _, b = C & 67108863, I = C / 67108864 | 0;
        h.words[0] = b;
        for (var a = 1; a < g; a++) {
          for (var c = I >>> 26, p = I & 67108863, S = Math.min(a, A.length - 1), T = Math.max(0, a - B.length + 1); T <= S; T++) {
            var H = a - T | 0;
            w = B.words[H] | 0, _ = A.words[T] | 0, C = w * _ + p, c += C / 67108864 | 0, p = C & 67108863;
          }
          h.words[a] = p | 0, I = c | 0;
        }
        return I !== 0 ? h.words[a] = I | 0 : h.length--, h._strip();
      }
      var j = function(A, h, g) {
        var w = A.words, _ = h.words, C = g.words, b = 0, I, a, c, p = w[0] | 0, S = p & 8191, T = p >>> 13, H = w[1] | 0, tt = H & 8191, it = H >>> 13, Ct = w[2] | 0, dt = Ct & 8191, ht = Ct >>> 13, Rt = w[3] | 0, gt = Rt & 8191, _t = Rt >>> 13, Ee = w[4] | 0, yt = Ee & 8191, Qt = Ee >>> 13, Ze = w[5] | 0, bt = Ze & 8191, mt = Ze >>> 13, pe = w[6] | 0, vt = pe & 8191, Mt = pe >>> 13, we = w[7] | 0, Lt = we & 8191, E = we >>> 13, f = w[8] | 0, l = f & 8191, m = f >>> 13, O = w[9] | 0, U = O & 8191, J = O >>> 13, Et = _[0] | 0, lt = Et & 8191, ft = Et >>> 13, Nt = _[1] | 0, ct = Nt & 8191, Ft = Nt >>> 13, Ni = _[2] | 0, Gt = Ni & 8191, Pt = Ni >>> 13, Qi = _[3] | 0, Yt = Qi & 8191, Ht = Qi >>> 13, vi = _[4] | 0, Jt = vi & 8191, qt = vi >>> 13, xi = _[5] | 0, Kt = xi & 8191, zt = xi >>> 13, Oi = _[6] | 0, Xt = Oi & 8191, Vt = Oi >>> 13, Ti = _[7] | 0, Wt = Ti & 8191, jt = Ti >>> 13, Mi = _[8] | 0, Zt = Mi & 8191, $t = Mi >>> 13, Li = _[9] | 0, te = Li & 8191, ee = Li >>> 13;
        g.negative = A.negative ^ h.negative, g.length = 19, I = Math.imul(S, lt), a = Math.imul(S, ft), a = a + Math.imul(T, lt) | 0, c = Math.imul(T, ft);
        var cr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, I = Math.imul(tt, lt), a = Math.imul(tt, ft), a = a + Math.imul(it, lt) | 0, c = Math.imul(it, ft), I = I + Math.imul(S, ct) | 0, a = a + Math.imul(S, Ft) | 0, a = a + Math.imul(T, ct) | 0, c = c + Math.imul(T, Ft) | 0;
        var ur = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, I = Math.imul(dt, lt), a = Math.imul(dt, ft), a = a + Math.imul(ht, lt) | 0, c = Math.imul(ht, ft), I = I + Math.imul(tt, ct) | 0, a = a + Math.imul(tt, Ft) | 0, a = a + Math.imul(it, ct) | 0, c = c + Math.imul(it, Ft) | 0, I = I + Math.imul(S, Gt) | 0, a = a + Math.imul(S, Pt) | 0, a = a + Math.imul(T, Gt) | 0, c = c + Math.imul(T, Pt) | 0;
        var fr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, I = Math.imul(gt, lt), a = Math.imul(gt, ft), a = a + Math.imul(_t, lt) | 0, c = Math.imul(_t, ft), I = I + Math.imul(dt, ct) | 0, a = a + Math.imul(dt, Ft) | 0, a = a + Math.imul(ht, ct) | 0, c = c + Math.imul(ht, Ft) | 0, I = I + Math.imul(tt, Gt) | 0, a = a + Math.imul(tt, Pt) | 0, a = a + Math.imul(it, Gt) | 0, c = c + Math.imul(it, Pt) | 0, I = I + Math.imul(S, Yt) | 0, a = a + Math.imul(S, Ht) | 0, a = a + Math.imul(T, Yt) | 0, c = c + Math.imul(T, Ht) | 0;
        var lr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, I = Math.imul(yt, lt), a = Math.imul(yt, ft), a = a + Math.imul(Qt, lt) | 0, c = Math.imul(Qt, ft), I = I + Math.imul(gt, ct) | 0, a = a + Math.imul(gt, Ft) | 0, a = a + Math.imul(_t, ct) | 0, c = c + Math.imul(_t, Ft) | 0, I = I + Math.imul(dt, Gt) | 0, a = a + Math.imul(dt, Pt) | 0, a = a + Math.imul(ht, Gt) | 0, c = c + Math.imul(ht, Pt) | 0, I = I + Math.imul(tt, Yt) | 0, a = a + Math.imul(tt, Ht) | 0, a = a + Math.imul(it, Yt) | 0, c = c + Math.imul(it, Ht) | 0, I = I + Math.imul(S, Jt) | 0, a = a + Math.imul(S, qt) | 0, a = a + Math.imul(T, Jt) | 0, c = c + Math.imul(T, qt) | 0;
        var hr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, I = Math.imul(bt, lt), a = Math.imul(bt, ft), a = a + Math.imul(mt, lt) | 0, c = Math.imul(mt, ft), I = I + Math.imul(yt, ct) | 0, a = a + Math.imul(yt, Ft) | 0, a = a + Math.imul(Qt, ct) | 0, c = c + Math.imul(Qt, Ft) | 0, I = I + Math.imul(gt, Gt) | 0, a = a + Math.imul(gt, Pt) | 0, a = a + Math.imul(_t, Gt) | 0, c = c + Math.imul(_t, Pt) | 0, I = I + Math.imul(dt, Yt) | 0, a = a + Math.imul(dt, Ht) | 0, a = a + Math.imul(ht, Yt) | 0, c = c + Math.imul(ht, Ht) | 0, I = I + Math.imul(tt, Jt) | 0, a = a + Math.imul(tt, qt) | 0, a = a + Math.imul(it, Jt) | 0, c = c + Math.imul(it, qt) | 0, I = I + Math.imul(S, Kt) | 0, a = a + Math.imul(S, zt) | 0, a = a + Math.imul(T, Kt) | 0, c = c + Math.imul(T, zt) | 0;
        var dr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, I = Math.imul(vt, lt), a = Math.imul(vt, ft), a = a + Math.imul(Mt, lt) | 0, c = Math.imul(Mt, ft), I = I + Math.imul(bt, ct) | 0, a = a + Math.imul(bt, Ft) | 0, a = a + Math.imul(mt, ct) | 0, c = c + Math.imul(mt, Ft) | 0, I = I + Math.imul(yt, Gt) | 0, a = a + Math.imul(yt, Pt) | 0, a = a + Math.imul(Qt, Gt) | 0, c = c + Math.imul(Qt, Pt) | 0, I = I + Math.imul(gt, Yt) | 0, a = a + Math.imul(gt, Ht) | 0, a = a + Math.imul(_t, Yt) | 0, c = c + Math.imul(_t, Ht) | 0, I = I + Math.imul(dt, Jt) | 0, a = a + Math.imul(dt, qt) | 0, a = a + Math.imul(ht, Jt) | 0, c = c + Math.imul(ht, qt) | 0, I = I + Math.imul(tt, Kt) | 0, a = a + Math.imul(tt, zt) | 0, a = a + Math.imul(it, Kt) | 0, c = c + Math.imul(it, zt) | 0, I = I + Math.imul(S, Xt) | 0, a = a + Math.imul(S, Vt) | 0, a = a + Math.imul(T, Xt) | 0, c = c + Math.imul(T, Vt) | 0;
        var gr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (gr >>> 26) | 0, gr &= 67108863, I = Math.imul(Lt, lt), a = Math.imul(Lt, ft), a = a + Math.imul(E, lt) | 0, c = Math.imul(E, ft), I = I + Math.imul(vt, ct) | 0, a = a + Math.imul(vt, Ft) | 0, a = a + Math.imul(Mt, ct) | 0, c = c + Math.imul(Mt, Ft) | 0, I = I + Math.imul(bt, Gt) | 0, a = a + Math.imul(bt, Pt) | 0, a = a + Math.imul(mt, Gt) | 0, c = c + Math.imul(mt, Pt) | 0, I = I + Math.imul(yt, Yt) | 0, a = a + Math.imul(yt, Ht) | 0, a = a + Math.imul(Qt, Yt) | 0, c = c + Math.imul(Qt, Ht) | 0, I = I + Math.imul(gt, Jt) | 0, a = a + Math.imul(gt, qt) | 0, a = a + Math.imul(_t, Jt) | 0, c = c + Math.imul(_t, qt) | 0, I = I + Math.imul(dt, Kt) | 0, a = a + Math.imul(dt, zt) | 0, a = a + Math.imul(ht, Kt) | 0, c = c + Math.imul(ht, zt) | 0, I = I + Math.imul(tt, Xt) | 0, a = a + Math.imul(tt, Vt) | 0, a = a + Math.imul(it, Xt) | 0, c = c + Math.imul(it, Vt) | 0, I = I + Math.imul(S, Wt) | 0, a = a + Math.imul(S, jt) | 0, a = a + Math.imul(T, Wt) | 0, c = c + Math.imul(T, jt) | 0;
        var Er = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (Er >>> 26) | 0, Er &= 67108863, I = Math.imul(l, lt), a = Math.imul(l, ft), a = a + Math.imul(m, lt) | 0, c = Math.imul(m, ft), I = I + Math.imul(Lt, ct) | 0, a = a + Math.imul(Lt, Ft) | 0, a = a + Math.imul(E, ct) | 0, c = c + Math.imul(E, Ft) | 0, I = I + Math.imul(vt, Gt) | 0, a = a + Math.imul(vt, Pt) | 0, a = a + Math.imul(Mt, Gt) | 0, c = c + Math.imul(Mt, Pt) | 0, I = I + Math.imul(bt, Yt) | 0, a = a + Math.imul(bt, Ht) | 0, a = a + Math.imul(mt, Yt) | 0, c = c + Math.imul(mt, Ht) | 0, I = I + Math.imul(yt, Jt) | 0, a = a + Math.imul(yt, qt) | 0, a = a + Math.imul(Qt, Jt) | 0, c = c + Math.imul(Qt, qt) | 0, I = I + Math.imul(gt, Kt) | 0, a = a + Math.imul(gt, zt) | 0, a = a + Math.imul(_t, Kt) | 0, c = c + Math.imul(_t, zt) | 0, I = I + Math.imul(dt, Xt) | 0, a = a + Math.imul(dt, Vt) | 0, a = a + Math.imul(ht, Xt) | 0, c = c + Math.imul(ht, Vt) | 0, I = I + Math.imul(tt, Wt) | 0, a = a + Math.imul(tt, jt) | 0, a = a + Math.imul(it, Wt) | 0, c = c + Math.imul(it, jt) | 0, I = I + Math.imul(S, Zt) | 0, a = a + Math.imul(S, $t) | 0, a = a + Math.imul(T, Zt) | 0, c = c + Math.imul(T, $t) | 0;
        var Ir = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (Ir >>> 26) | 0, Ir &= 67108863, I = Math.imul(U, lt), a = Math.imul(U, ft), a = a + Math.imul(J, lt) | 0, c = Math.imul(J, ft), I = I + Math.imul(l, ct) | 0, a = a + Math.imul(l, Ft) | 0, a = a + Math.imul(m, ct) | 0, c = c + Math.imul(m, Ft) | 0, I = I + Math.imul(Lt, Gt) | 0, a = a + Math.imul(Lt, Pt) | 0, a = a + Math.imul(E, Gt) | 0, c = c + Math.imul(E, Pt) | 0, I = I + Math.imul(vt, Yt) | 0, a = a + Math.imul(vt, Ht) | 0, a = a + Math.imul(Mt, Yt) | 0, c = c + Math.imul(Mt, Ht) | 0, I = I + Math.imul(bt, Jt) | 0, a = a + Math.imul(bt, qt) | 0, a = a + Math.imul(mt, Jt) | 0, c = c + Math.imul(mt, qt) | 0, I = I + Math.imul(yt, Kt) | 0, a = a + Math.imul(yt, zt) | 0, a = a + Math.imul(Qt, Kt) | 0, c = c + Math.imul(Qt, zt) | 0, I = I + Math.imul(gt, Xt) | 0, a = a + Math.imul(gt, Vt) | 0, a = a + Math.imul(_t, Xt) | 0, c = c + Math.imul(_t, Vt) | 0, I = I + Math.imul(dt, Wt) | 0, a = a + Math.imul(dt, jt) | 0, a = a + Math.imul(ht, Wt) | 0, c = c + Math.imul(ht, jt) | 0, I = I + Math.imul(tt, Zt) | 0, a = a + Math.imul(tt, $t) | 0, a = a + Math.imul(it, Zt) | 0, c = c + Math.imul(it, $t) | 0, I = I + Math.imul(S, te) | 0, a = a + Math.imul(S, ee) | 0, a = a + Math.imul(T, te) | 0, c = c + Math.imul(T, ee) | 0;
        var pr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, I = Math.imul(U, ct), a = Math.imul(U, Ft), a = a + Math.imul(J, ct) | 0, c = Math.imul(J, Ft), I = I + Math.imul(l, Gt) | 0, a = a + Math.imul(l, Pt) | 0, a = a + Math.imul(m, Gt) | 0, c = c + Math.imul(m, Pt) | 0, I = I + Math.imul(Lt, Yt) | 0, a = a + Math.imul(Lt, Ht) | 0, a = a + Math.imul(E, Yt) | 0, c = c + Math.imul(E, Ht) | 0, I = I + Math.imul(vt, Jt) | 0, a = a + Math.imul(vt, qt) | 0, a = a + Math.imul(Mt, Jt) | 0, c = c + Math.imul(Mt, qt) | 0, I = I + Math.imul(bt, Kt) | 0, a = a + Math.imul(bt, zt) | 0, a = a + Math.imul(mt, Kt) | 0, c = c + Math.imul(mt, zt) | 0, I = I + Math.imul(yt, Xt) | 0, a = a + Math.imul(yt, Vt) | 0, a = a + Math.imul(Qt, Xt) | 0, c = c + Math.imul(Qt, Vt) | 0, I = I + Math.imul(gt, Wt) | 0, a = a + Math.imul(gt, jt) | 0, a = a + Math.imul(_t, Wt) | 0, c = c + Math.imul(_t, jt) | 0, I = I + Math.imul(dt, Zt) | 0, a = a + Math.imul(dt, $t) | 0, a = a + Math.imul(ht, Zt) | 0, c = c + Math.imul(ht, $t) | 0, I = I + Math.imul(tt, te) | 0, a = a + Math.imul(tt, ee) | 0, a = a + Math.imul(it, te) | 0, c = c + Math.imul(it, ee) | 0;
        var Br = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (Br >>> 26) | 0, Br &= 67108863, I = Math.imul(U, Gt), a = Math.imul(U, Pt), a = a + Math.imul(J, Gt) | 0, c = Math.imul(J, Pt), I = I + Math.imul(l, Yt) | 0, a = a + Math.imul(l, Ht) | 0, a = a + Math.imul(m, Yt) | 0, c = c + Math.imul(m, Ht) | 0, I = I + Math.imul(Lt, Jt) | 0, a = a + Math.imul(Lt, qt) | 0, a = a + Math.imul(E, Jt) | 0, c = c + Math.imul(E, qt) | 0, I = I + Math.imul(vt, Kt) | 0, a = a + Math.imul(vt, zt) | 0, a = a + Math.imul(Mt, Kt) | 0, c = c + Math.imul(Mt, zt) | 0, I = I + Math.imul(bt, Xt) | 0, a = a + Math.imul(bt, Vt) | 0, a = a + Math.imul(mt, Xt) | 0, c = c + Math.imul(mt, Vt) | 0, I = I + Math.imul(yt, Wt) | 0, a = a + Math.imul(yt, jt) | 0, a = a + Math.imul(Qt, Wt) | 0, c = c + Math.imul(Qt, jt) | 0, I = I + Math.imul(gt, Zt) | 0, a = a + Math.imul(gt, $t) | 0, a = a + Math.imul(_t, Zt) | 0, c = c + Math.imul(_t, $t) | 0, I = I + Math.imul(dt, te) | 0, a = a + Math.imul(dt, ee) | 0, a = a + Math.imul(ht, te) | 0, c = c + Math.imul(ht, ee) | 0;
        var _r = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (_r >>> 26) | 0, _r &= 67108863, I = Math.imul(U, Yt), a = Math.imul(U, Ht), a = a + Math.imul(J, Yt) | 0, c = Math.imul(J, Ht), I = I + Math.imul(l, Jt) | 0, a = a + Math.imul(l, qt) | 0, a = a + Math.imul(m, Jt) | 0, c = c + Math.imul(m, qt) | 0, I = I + Math.imul(Lt, Kt) | 0, a = a + Math.imul(Lt, zt) | 0, a = a + Math.imul(E, Kt) | 0, c = c + Math.imul(E, zt) | 0, I = I + Math.imul(vt, Xt) | 0, a = a + Math.imul(vt, Vt) | 0, a = a + Math.imul(Mt, Xt) | 0, c = c + Math.imul(Mt, Vt) | 0, I = I + Math.imul(bt, Wt) | 0, a = a + Math.imul(bt, jt) | 0, a = a + Math.imul(mt, Wt) | 0, c = c + Math.imul(mt, jt) | 0, I = I + Math.imul(yt, Zt) | 0, a = a + Math.imul(yt, $t) | 0, a = a + Math.imul(Qt, Zt) | 0, c = c + Math.imul(Qt, $t) | 0, I = I + Math.imul(gt, te) | 0, a = a + Math.imul(gt, ee) | 0, a = a + Math.imul(_t, te) | 0, c = c + Math.imul(_t, ee) | 0;
        var Cr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, I = Math.imul(U, Jt), a = Math.imul(U, qt), a = a + Math.imul(J, Jt) | 0, c = Math.imul(J, qt), I = I + Math.imul(l, Kt) | 0, a = a + Math.imul(l, zt) | 0, a = a + Math.imul(m, Kt) | 0, c = c + Math.imul(m, zt) | 0, I = I + Math.imul(Lt, Xt) | 0, a = a + Math.imul(Lt, Vt) | 0, a = a + Math.imul(E, Xt) | 0, c = c + Math.imul(E, Vt) | 0, I = I + Math.imul(vt, Wt) | 0, a = a + Math.imul(vt, jt) | 0, a = a + Math.imul(Mt, Wt) | 0, c = c + Math.imul(Mt, jt) | 0, I = I + Math.imul(bt, Zt) | 0, a = a + Math.imul(bt, $t) | 0, a = a + Math.imul(mt, Zt) | 0, c = c + Math.imul(mt, $t) | 0, I = I + Math.imul(yt, te) | 0, a = a + Math.imul(yt, ee) | 0, a = a + Math.imul(Qt, te) | 0, c = c + Math.imul(Qt, ee) | 0;
        var wr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (wr >>> 26) | 0, wr &= 67108863, I = Math.imul(U, Kt), a = Math.imul(U, zt), a = a + Math.imul(J, Kt) | 0, c = Math.imul(J, zt), I = I + Math.imul(l, Xt) | 0, a = a + Math.imul(l, Vt) | 0, a = a + Math.imul(m, Xt) | 0, c = c + Math.imul(m, Vt) | 0, I = I + Math.imul(Lt, Wt) | 0, a = a + Math.imul(Lt, jt) | 0, a = a + Math.imul(E, Wt) | 0, c = c + Math.imul(E, jt) | 0, I = I + Math.imul(vt, Zt) | 0, a = a + Math.imul(vt, $t) | 0, a = a + Math.imul(Mt, Zt) | 0, c = c + Math.imul(Mt, $t) | 0, I = I + Math.imul(bt, te) | 0, a = a + Math.imul(bt, ee) | 0, a = a + Math.imul(mt, te) | 0, c = c + Math.imul(mt, ee) | 0;
        var yr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (yr >>> 26) | 0, yr &= 67108863, I = Math.imul(U, Xt), a = Math.imul(U, Vt), a = a + Math.imul(J, Xt) | 0, c = Math.imul(J, Vt), I = I + Math.imul(l, Wt) | 0, a = a + Math.imul(l, jt) | 0, a = a + Math.imul(m, Wt) | 0, c = c + Math.imul(m, jt) | 0, I = I + Math.imul(Lt, Zt) | 0, a = a + Math.imul(Lt, $t) | 0, a = a + Math.imul(E, Zt) | 0, c = c + Math.imul(E, $t) | 0, I = I + Math.imul(vt, te) | 0, a = a + Math.imul(vt, ee) | 0, a = a + Math.imul(Mt, te) | 0, c = c + Math.imul(Mt, ee) | 0;
        var mr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (mr >>> 26) | 0, mr &= 67108863, I = Math.imul(U, Wt), a = Math.imul(U, jt), a = a + Math.imul(J, Wt) | 0, c = Math.imul(J, jt), I = I + Math.imul(l, Zt) | 0, a = a + Math.imul(l, $t) | 0, a = a + Math.imul(m, Zt) | 0, c = c + Math.imul(m, $t) | 0, I = I + Math.imul(Lt, te) | 0, a = a + Math.imul(Lt, ee) | 0, a = a + Math.imul(E, te) | 0, c = c + Math.imul(E, ee) | 0;
        var Rr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (Rr >>> 26) | 0, Rr &= 67108863, I = Math.imul(U, Zt), a = Math.imul(U, $t), a = a + Math.imul(J, Zt) | 0, c = Math.imul(J, $t), I = I + Math.imul(l, te) | 0, a = a + Math.imul(l, ee) | 0, a = a + Math.imul(m, te) | 0, c = c + Math.imul(m, ee) | 0;
        var Sr = (b + I | 0) + ((a & 8191) << 13) | 0;
        b = (c + (a >>> 13) | 0) + (Sr >>> 26) | 0, Sr &= 67108863, I = Math.imul(U, te), a = Math.imul(U, ee), a = a + Math.imul(J, te) | 0, c = Math.imul(J, ee);
        var br = (b + I | 0) + ((a & 8191) << 13) | 0;
        return b = (c + (a >>> 13) | 0) + (br >>> 26) | 0, br &= 67108863, C[0] = cr, C[1] = ur, C[2] = fr, C[3] = lr, C[4] = hr, C[5] = dr, C[6] = gr, C[7] = Er, C[8] = Ir, C[9] = pr, C[10] = Br, C[11] = _r, C[12] = Cr, C[13] = wr, C[14] = yr, C[15] = mr, C[16] = Rr, C[17] = Sr, C[18] = br, b !== 0 && (C[19] = b, g.length++), g;
      };
      Math.imul || (j = V);
      function K(B, A, h) {
        h.negative = A.negative ^ B.negative, h.length = B.length + A.length;
        for (var g = 0, w = 0, _ = 0; _ < h.length - 1; _++) {
          var C = w;
          w = 0;
          for (var b = g & 67108863, I = Math.min(_, A.length - 1), a = Math.max(0, _ - B.length + 1); a <= I; a++) {
            var c = _ - a, p = B.words[c] | 0, S = A.words[a] | 0, T = p * S, H = T & 67108863;
            C = C + (T / 67108864 | 0) | 0, H = H + b | 0, b = H & 67108863, C = C + (H >>> 26) | 0, w += C >>> 26, C &= 67108863;
          }
          h.words[_] = b, g = C, C = w;
        }
        return g !== 0 ? h.words[_] = g : h.length--, h._strip();
      }
      function P(B, A, h) {
        return K(B, A, h);
      }
      i.prototype.mulTo = function(A, h) {
        var g, w = this.length + A.length;
        return this.length === 10 && A.length === 10 ? g = j(this, A, h) : w < 63 ? g = V(this, A, h) : w < 1024 ? g = K(this, A, h) : g = P(this, A, h), g;
      }, i.prototype.mul = function(A) {
        var h = new i(null);
        return h.words = new Array(this.length + A.length), this.mulTo(A, h);
      }, i.prototype.mulf = function(A) {
        var h = new i(null);
        return h.words = new Array(this.length + A.length), P(this, A, h);
      }, i.prototype.imul = function(A) {
        return this.clone().mulTo(A, this);
      }, i.prototype.imuln = function(A) {
        var h = A < 0;
        h && (A = -A), n(typeof A == "number"), n(A < 67108864);
        for (var g = 0, w = 0; w < this.length; w++) {
          var _ = (this.words[w] | 0) * A, C = (_ & 67108863) + (g & 67108863);
          g >>= 26, g += _ / 67108864 | 0, g += C >>> 26, this.words[w] = C & 67108863;
        }
        return g !== 0 && (this.words[w] = g, this.length++), this.length = A === 0 ? 1 : this.length, h ? this.ineg() : this;
      }, i.prototype.muln = function(A) {
        return this.clone().imuln(A);
      }, i.prototype.sqr = function() {
        return this.mul(this);
      }, i.prototype.isqr = function() {
        return this.imul(this.clone());
      }, i.prototype.pow = function(A) {
        var h = M(A);
        if (h.length === 0) return new i(1);
        for (var g = this, w = 0; w < h.length && h[w] === 0; w++, g = g.sqr())
          ;
        if (++w < h.length)
          for (var _ = g.sqr(); w < h.length; w++, _ = _.sqr())
            h[w] !== 0 && (g = g.mul(_));
        return g;
      }, i.prototype.iushln = function(A) {
        n(typeof A == "number" && A >= 0);
        var h = A % 26, g = (A - h) / 26, w = 67108863 >>> 26 - h << 26 - h, _;
        if (h !== 0) {
          var C = 0;
          for (_ = 0; _ < this.length; _++) {
            var b = this.words[_] & w, I = (this.words[_] | 0) - b << h;
            this.words[_] = I | C, C = b >>> 26 - h;
          }
          C && (this.words[_] = C, this.length++);
        }
        if (g !== 0) {
          for (_ = this.length - 1; _ >= 0; _--)
            this.words[_ + g] = this.words[_];
          for (_ = 0; _ < g; _++)
            this.words[_] = 0;
          this.length += g;
        }
        return this._strip();
      }, i.prototype.ishln = function(A) {
        return n(this.negative === 0), this.iushln(A);
      }, i.prototype.iushrn = function(A, h, g) {
        n(typeof A == "number" && A >= 0);
        var w;
        h ? w = (h - h % 26) / 26 : w = 0;
        var _ = A % 26, C = Math.min((A - _) / 26, this.length), b = 67108863 ^ 67108863 >>> _ << _, I = g;
        if (w -= C, w = Math.max(0, w), I) {
          for (var a = 0; a < C; a++)
            I.words[a] = this.words[a];
          I.length = C;
        }
        if (C !== 0) if (this.length > C)
          for (this.length -= C, a = 0; a < this.length; a++)
            this.words[a] = this.words[a + C];
        else
          this.words[0] = 0, this.length = 1;
        var c = 0;
        for (a = this.length - 1; a >= 0 && (c !== 0 || a >= w); a--) {
          var p = this.words[a] | 0;
          this.words[a] = c << 26 - _ | p >>> _, c = p & b;
        }
        return I && c !== 0 && (I.words[I.length++] = c), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
      }, i.prototype.ishrn = function(A, h, g) {
        return n(this.negative === 0), this.iushrn(A, h, g);
      }, i.prototype.shln = function(A) {
        return this.clone().ishln(A);
      }, i.prototype.ushln = function(A) {
        return this.clone().iushln(A);
      }, i.prototype.shrn = function(A) {
        return this.clone().ishrn(A);
      }, i.prototype.ushrn = function(A) {
        return this.clone().iushrn(A);
      }, i.prototype.testn = function(A) {
        n(typeof A == "number" && A >= 0);
        var h = A % 26, g = (A - h) / 26, w = 1 << h;
        if (this.length <= g) return !1;
        var _ = this.words[g];
        return !!(_ & w);
      }, i.prototype.imaskn = function(A) {
        n(typeof A == "number" && A >= 0);
        var h = A % 26, g = (A - h) / 26;
        if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g)
          return this;
        if (h !== 0 && g++, this.length = Math.min(g, this.length), h !== 0) {
          var w = 67108863 ^ 67108863 >>> h << h;
          this.words[this.length - 1] &= w;
        }
        return this._strip();
      }, i.prototype.maskn = function(A) {
        return this.clone().imaskn(A);
      }, i.prototype.iaddn = function(A) {
        return n(typeof A == "number"), n(A < 67108864), A < 0 ? this.isubn(-A) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= A ? (this.words[0] = A - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(A), this.negative = 1, this) : this._iaddn(A);
      }, i.prototype._iaddn = function(A) {
        this.words[0] += A;
        for (var h = 0; h < this.length && this.words[h] >= 67108864; h++)
          this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
        return this.length = Math.max(this.length, h + 1), this;
      }, i.prototype.isubn = function(A) {
        if (n(typeof A == "number"), n(A < 67108864), A < 0) return this.iaddn(-A);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(A), this.negative = 1, this;
        if (this.words[0] -= A, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var h = 0; h < this.length && this.words[h] < 0; h++)
            this.words[h] += 67108864, this.words[h + 1] -= 1;
        return this._strip();
      }, i.prototype.addn = function(A) {
        return this.clone().iaddn(A);
      }, i.prototype.subn = function(A) {
        return this.clone().isubn(A);
      }, i.prototype.iabs = function() {
        return this.negative = 0, this;
      }, i.prototype.abs = function() {
        return this.clone().iabs();
      }, i.prototype._ishlnsubmul = function(A, h, g) {
        var w = A.length + g, _;
        this._expand(w);
        var C, b = 0;
        for (_ = 0; _ < A.length; _++) {
          C = (this.words[_ + g] | 0) + b;
          var I = (A.words[_] | 0) * h;
          C -= I & 67108863, b = (C >> 26) - (I / 67108864 | 0), this.words[_ + g] = C & 67108863;
        }
        for (; _ < this.length - g; _++)
          C = (this.words[_ + g] | 0) + b, b = C >> 26, this.words[_ + g] = C & 67108863;
        if (b === 0) return this._strip();
        for (n(b === -1), b = 0, _ = 0; _ < this.length; _++)
          C = -(this.words[_] | 0) + b, b = C >> 26, this.words[_] = C & 67108863;
        return this.negative = 1, this._strip();
      }, i.prototype._wordDiv = function(A, h) {
        var g = this.length - A.length, w = this.clone(), _ = A, C = _.words[_.length - 1] | 0, b = this._countBits(C);
        g = 26 - b, g !== 0 && (_ = _.ushln(g), w.iushln(g), C = _.words[_.length - 1] | 0);
        var I = w.length - _.length, a;
        if (h !== "mod") {
          a = new i(null), a.length = I + 1, a.words = new Array(a.length);
          for (var c = 0; c < a.length; c++)
            a.words[c] = 0;
        }
        var p = w.clone()._ishlnsubmul(_, 1, I);
        p.negative === 0 && (w = p, a && (a.words[I] = 1));
        for (var S = I - 1; S >= 0; S--) {
          var T = (w.words[_.length + S] | 0) * 67108864 + (w.words[_.length + S - 1] | 0);
          for (T = Math.min(T / C | 0, 67108863), w._ishlnsubmul(_, T, S); w.negative !== 0; )
            T--, w.negative = 0, w._ishlnsubmul(_, 1, S), w.isZero() || (w.negative ^= 1);
          a && (a.words[S] = T);
        }
        return a && a._strip(), w._strip(), h !== "div" && g !== 0 && w.iushrn(g), {
          div: a || null,
          mod: w
        };
      }, i.prototype.divmod = function(A, h, g) {
        if (n(!A.isZero()), this.isZero())
          return {
            div: new i(0),
            mod: new i(0)
          };
        var w, _, C;
        return this.negative !== 0 && A.negative === 0 ? (C = this.neg().divmod(A, h), h !== "mod" && (w = C.div.neg()), h !== "div" && (_ = C.mod.neg(), g && _.negative !== 0 && _.iadd(A)), {
          div: w,
          mod: _
        }) : this.negative === 0 && A.negative !== 0 ? (C = this.divmod(A.neg(), h), h !== "mod" && (w = C.div.neg()), {
          div: w,
          mod: C.mod
        }) : (this.negative & A.negative) !== 0 ? (C = this.neg().divmod(A.neg(), h), h !== "div" && (_ = C.mod.neg(), g && _.negative !== 0 && _.isub(A)), {
          div: C.div,
          mod: _
        }) : A.length > this.length || this.cmp(A) < 0 ? {
          div: new i(0),
          mod: this
        } : A.length === 1 ? h === "div" ? {
          div: this.divn(A.words[0]),
          mod: null
        } : h === "mod" ? {
          div: null,
          mod: new i(this.modrn(A.words[0]))
        } : {
          div: this.divn(A.words[0]),
          mod: new i(this.modrn(A.words[0]))
        } : this._wordDiv(A, h);
      }, i.prototype.div = function(A) {
        return this.divmod(A, "div", !1).div;
      }, i.prototype.mod = function(A) {
        return this.divmod(A, "mod", !1).mod;
      }, i.prototype.umod = function(A) {
        return this.divmod(A, "mod", !0).mod;
      }, i.prototype.divRound = function(A) {
        var h = this.divmod(A);
        if (h.mod.isZero()) return h.div;
        var g = h.div.negative !== 0 ? h.mod.isub(A) : h.mod, w = A.ushrn(1), _ = A.andln(1), C = g.cmp(w);
        return C < 0 || _ === 1 && C === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1);
      }, i.prototype.modrn = function(A) {
        var h = A < 0;
        h && (A = -A), n(A <= 67108863);
        for (var g = (1 << 26) % A, w = 0, _ = this.length - 1; _ >= 0; _--)
          w = (g * w + (this.words[_] | 0)) % A;
        return h ? -w : w;
      }, i.prototype.modn = function(A) {
        return this.modrn(A);
      }, i.prototype.idivn = function(A) {
        var h = A < 0;
        h && (A = -A), n(A <= 67108863);
        for (var g = 0, w = this.length - 1; w >= 0; w--) {
          var _ = (this.words[w] | 0) + g * 67108864;
          this.words[w] = _ / A | 0, g = _ % A;
        }
        return this._strip(), h ? this.ineg() : this;
      }, i.prototype.divn = function(A) {
        return this.clone().idivn(A);
      }, i.prototype.egcd = function(A) {
        n(A.negative === 0), n(!A.isZero());
        var h = this, g = A.clone();
        h.negative !== 0 ? h = h.umod(A) : h = h.clone();
        for (var w = new i(1), _ = new i(0), C = new i(0), b = new i(1), I = 0; h.isEven() && g.isEven(); )
          h.iushrn(1), g.iushrn(1), ++I;
        for (var a = g.clone(), c = h.clone(); !h.isZero(); ) {
          for (var p = 0, S = 1; (h.words[0] & S) === 0 && p < 26; ++p, S <<= 1) ;
          if (p > 0)
            for (h.iushrn(p); p-- > 0; )
              (w.isOdd() || _.isOdd()) && (w.iadd(a), _.isub(c)), w.iushrn(1), _.iushrn(1);
          for (var T = 0, H = 1; (g.words[0] & H) === 0 && T < 26; ++T, H <<= 1) ;
          if (T > 0)
            for (g.iushrn(T); T-- > 0; )
              (C.isOdd() || b.isOdd()) && (C.iadd(a), b.isub(c)), C.iushrn(1), b.iushrn(1);
          h.cmp(g) >= 0 ? (h.isub(g), w.isub(C), _.isub(b)) : (g.isub(h), C.isub(w), b.isub(_));
        }
        return {
          a: C,
          b,
          gcd: g.iushln(I)
        };
      }, i.prototype._invmp = function(A) {
        n(A.negative === 0), n(!A.isZero());
        var h = this, g = A.clone();
        h.negative !== 0 ? h = h.umod(A) : h = h.clone();
        for (var w = new i(1), _ = new i(0), C = g.clone(); h.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
          for (var b = 0, I = 1; (h.words[0] & I) === 0 && b < 26; ++b, I <<= 1) ;
          if (b > 0)
            for (h.iushrn(b); b-- > 0; )
              w.isOdd() && w.iadd(C), w.iushrn(1);
          for (var a = 0, c = 1; (g.words[0] & c) === 0 && a < 26; ++a, c <<= 1) ;
          if (a > 0)
            for (g.iushrn(a); a-- > 0; )
              _.isOdd() && _.iadd(C), _.iushrn(1);
          h.cmp(g) >= 0 ? (h.isub(g), w.isub(_)) : (g.isub(h), _.isub(w));
        }
        var p;
        return h.cmpn(1) === 0 ? p = w : p = _, p.cmpn(0) < 0 && p.iadd(A), p;
      }, i.prototype.gcd = function(A) {
        if (this.isZero()) return A.abs();
        if (A.isZero()) return this.abs();
        var h = this.clone(), g = A.clone();
        h.negative = 0, g.negative = 0;
        for (var w = 0; h.isEven() && g.isEven(); w++)
          h.iushrn(1), g.iushrn(1);
        do {
          for (; h.isEven(); )
            h.iushrn(1);
          for (; g.isEven(); )
            g.iushrn(1);
          var _ = h.cmp(g);
          if (_ < 0) {
            var C = h;
            h = g, g = C;
          } else if (_ === 0 || g.cmpn(1) === 0)
            break;
          h.isub(g);
        } while (!0);
        return g.iushln(w);
      }, i.prototype.invm = function(A) {
        return this.egcd(A).a.umod(A);
      }, i.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, i.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, i.prototype.andln = function(A) {
        return this.words[0] & A;
      }, i.prototype.bincn = function(A) {
        n(typeof A == "number");
        var h = A % 26, g = (A - h) / 26, w = 1 << h;
        if (this.length <= g)
          return this._expand(g + 1), this.words[g] |= w, this;
        for (var _ = w, C = g; _ !== 0 && C < this.length; C++) {
          var b = this.words[C] | 0;
          b += _, _ = b >>> 26, b &= 67108863, this.words[C] = b;
        }
        return _ !== 0 && (this.words[C] = _, this.length++), this;
      }, i.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, i.prototype.cmpn = function(A) {
        var h = A < 0;
        if (this.negative !== 0 && !h) return -1;
        if (this.negative === 0 && h) return 1;
        this._strip();
        var g;
        if (this.length > 1)
          g = 1;
        else {
          h && (A = -A), n(A <= 67108863, "Number is too big");
          var w = this.words[0] | 0;
          g = w === A ? 0 : w < A ? -1 : 1;
        }
        return this.negative !== 0 ? -g | 0 : g;
      }, i.prototype.cmp = function(A) {
        if (this.negative !== 0 && A.negative === 0) return -1;
        if (this.negative === 0 && A.negative !== 0) return 1;
        var h = this.ucmp(A);
        return this.negative !== 0 ? -h | 0 : h;
      }, i.prototype.ucmp = function(A) {
        if (this.length > A.length) return 1;
        if (this.length < A.length) return -1;
        for (var h = 0, g = this.length - 1; g >= 0; g--) {
          var w = this.words[g] | 0, _ = A.words[g] | 0;
          if (w !== _) {
            w < _ ? h = -1 : w > _ && (h = 1);
            break;
          }
        }
        return h;
      }, i.prototype.gtn = function(A) {
        return this.cmpn(A) === 1;
      }, i.prototype.gt = function(A) {
        return this.cmp(A) === 1;
      }, i.prototype.gten = function(A) {
        return this.cmpn(A) >= 0;
      }, i.prototype.gte = function(A) {
        return this.cmp(A) >= 0;
      }, i.prototype.ltn = function(A) {
        return this.cmpn(A) === -1;
      }, i.prototype.lt = function(A) {
        return this.cmp(A) === -1;
      }, i.prototype.lten = function(A) {
        return this.cmpn(A) <= 0;
      }, i.prototype.lte = function(A) {
        return this.cmp(A) <= 0;
      }, i.prototype.eqn = function(A) {
        return this.cmpn(A) === 0;
      }, i.prototype.eq = function(A) {
        return this.cmp(A) === 0;
      }, i.red = function(A) {
        return new F(A);
      }, i.prototype.toRed = function(A) {
        return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), A.convertTo(this)._forceRed(A);
      }, i.prototype.fromRed = function() {
        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, i.prototype._forceRed = function(A) {
        return this.red = A, this;
      }, i.prototype.forceRed = function(A) {
        return n(!this.red, "Already a number in reduction context"), this._forceRed(A);
      }, i.prototype.redAdd = function(A) {
        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, A);
      }, i.prototype.redIAdd = function(A) {
        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, A);
      }, i.prototype.redSub = function(A) {
        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, A);
      }, i.prototype.redISub = function(A) {
        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, A);
      }, i.prototype.redShl = function(A) {
        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, A);
      }, i.prototype.redMul = function(A) {
        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, A), this.red.mul(this, A);
      }, i.prototype.redIMul = function(A) {
        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, A), this.red.imul(this, A);
      }, i.prototype.redSqr = function() {
        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
      }, i.prototype.redISqr = function() {
        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
      }, i.prototype.redSqrt = function() {
        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
      }, i.prototype.redInvm = function() {
        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
      }, i.prototype.redNeg = function() {
        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
      }, i.prototype.redPow = function(A) {
        return n(this.red && !A.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, A);
      };
      var X = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function Z(B, A) {
        this.name = B, this.p = new i(A, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      Z.prototype._tmp = function() {
        var A = new i(null);
        return A.words = new Array(Math.ceil(this.n / 13)), A;
      }, Z.prototype.ireduce = function(A) {
        var h = A, g;
        do
          this.split(h, this.tmp), h = this.imulK(h), h = h.iadd(this.tmp), g = h.bitLength();
        while (g > this.n);
        var w = g < this.n ? -1 : h.ucmp(this.p);
        return w === 0 ? (h.words[0] = 0, h.length = 1) : w > 0 ? h.isub(this.p) : h.strip !== void 0 ? h.strip() : h._strip(), h;
      }, Z.prototype.split = function(A, h) {
        A.iushrn(this.n, 0, h);
      }, Z.prototype.imulK = function(A) {
        return A.imul(this.k);
      };
      function st() {
        Z.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      s(st, Z), st.prototype.split = function(A, h) {
        for (var g = 4194303, w = Math.min(A.length, 9), _ = 0; _ < w; _++)
          h.words[_] = A.words[_];
        if (h.length = w, A.length <= 9) {
          A.words[0] = 0, A.length = 1;
          return;
        }
        var C = A.words[9];
        for (h.words[h.length++] = C & g, _ = 10; _ < A.length; _++) {
          var b = A.words[_] | 0;
          A.words[_ - 10] = (b & g) << 4 | C >>> 22, C = b;
        }
        C >>>= 22, A.words[_ - 10] = C, C === 0 && A.length > 10 ? A.length -= 10 : A.length -= 9;
      }, st.prototype.imulK = function(A) {
        A.words[A.length] = 0, A.words[A.length + 1] = 0, A.length += 2;
        for (var h = 0, g = 0; g < A.length; g++) {
          var w = A.words[g] | 0;
          h += w * 977, A.words[g] = h & 67108863, h = w * 64 + (h / 67108864 | 0);
        }
        return A.words[A.length - 1] === 0 && (A.length--, A.words[A.length - 1] === 0 && A.length--), A;
      };
      function ot() {
        Z.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      s(ot, Z);
      function z() {
        Z.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      s(z, Z);
      function k() {
        Z.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      s(k, Z), k.prototype.imulK = function(A) {
        for (var h = 0, g = 0; g < A.length; g++) {
          var w = (A.words[g] | 0) * 19 + h, _ = w & 67108863;
          w >>>= 26, A.words[g] = _, h = w;
        }
        return h !== 0 && (A.words[A.length++] = h), A;
      }, i._prime = function(A) {
        if (X[A]) return X[A];
        var h;
        if (A === "k256")
          h = new st();
        else if (A === "p224")
          h = new ot();
        else if (A === "p192")
          h = new z();
        else if (A === "p25519")
          h = new k();
        else
          throw new Error("Unknown prime " + A);
        return X[A] = h, h;
      };
      function F(B) {
        if (typeof B == "string") {
          var A = i._prime(B);
          this.m = A.p, this.prime = A;
        } else
          n(B.gtn(1), "modulus must be greater than 1"), this.m = B, this.prime = null;
      }
      F.prototype._verify1 = function(A) {
        n(A.negative === 0, "red works only with positives"), n(A.red, "red works only with red numbers");
      }, F.prototype._verify2 = function(A, h) {
        n((A.negative | h.negative) === 0, "red works only with positives"), n(
          A.red && A.red === h.red,
          "red works only with red numbers"
        );
      }, F.prototype.imod = function(A) {
        return this.prime ? this.prime.ireduce(A)._forceRed(this) : (R(A, A.umod(this.m)._forceRed(this)), A);
      }, F.prototype.neg = function(A) {
        return A.isZero() ? A.clone() : this.m.sub(A)._forceRed(this);
      }, F.prototype.add = function(A, h) {
        this._verify2(A, h);
        var g = A.add(h);
        return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
      }, F.prototype.iadd = function(A, h) {
        this._verify2(A, h);
        var g = A.iadd(h);
        return g.cmp(this.m) >= 0 && g.isub(this.m), g;
      }, F.prototype.sub = function(A, h) {
        this._verify2(A, h);
        var g = A.sub(h);
        return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
      }, F.prototype.isub = function(A, h) {
        this._verify2(A, h);
        var g = A.isub(h);
        return g.cmpn(0) < 0 && g.iadd(this.m), g;
      }, F.prototype.shl = function(A, h) {
        return this._verify1(A), this.imod(A.ushln(h));
      }, F.prototype.imul = function(A, h) {
        return this._verify2(A, h), this.imod(A.imul(h));
      }, F.prototype.mul = function(A, h) {
        return this._verify2(A, h), this.imod(A.mul(h));
      }, F.prototype.isqr = function(A) {
        return this.imul(A, A.clone());
      }, F.prototype.sqr = function(A) {
        return this.mul(A, A);
      }, F.prototype.sqrt = function(A) {
        if (A.isZero()) return A.clone();
        var h = this.m.andln(3);
        if (n(h % 2 === 1), h === 3) {
          var g = this.m.add(new i(1)).iushrn(2);
          return this.pow(A, g);
        }
        for (var w = this.m.subn(1), _ = 0; !w.isZero() && w.andln(1) === 0; )
          _++, w.iushrn(1);
        n(!w.isZero());
        var C = new i(1).toRed(this), b = C.redNeg(), I = this.m.subn(1).iushrn(1), a = this.m.bitLength();
        for (a = new i(2 * a * a).toRed(this); this.pow(a, I).cmp(b) !== 0; )
          a.redIAdd(b);
        for (var c = this.pow(a, w), p = this.pow(A, w.addn(1).iushrn(1)), S = this.pow(A, w), T = _; S.cmp(C) !== 0; ) {
          for (var H = S, tt = 0; H.cmp(C) !== 0; tt++)
            H = H.redSqr();
          n(tt < T);
          var it = this.pow(c, new i(1).iushln(T - tt - 1));
          p = p.redMul(it), c = it.redSqr(), S = S.redMul(c), T = tt;
        }
        return p;
      }, F.prototype.invm = function(A) {
        var h = A._invmp(this.m);
        return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h);
      }, F.prototype.pow = function(A, h) {
        if (h.isZero()) return new i(1).toRed(this);
        if (h.cmpn(1) === 0) return A.clone();
        var g = 4, w = new Array(1 << g);
        w[0] = new i(1).toRed(this), w[1] = A;
        for (var _ = 2; _ < w.length; _++)
          w[_] = this.mul(w[_ - 1], A);
        var C = w[0], b = 0, I = 0, a = h.bitLength() % 26;
        for (a === 0 && (a = 26), _ = h.length - 1; _ >= 0; _--) {
          for (var c = h.words[_], p = a - 1; p >= 0; p--) {
            var S = c >> p & 1;
            if (C !== w[0] && (C = this.sqr(C)), S === 0 && b === 0) {
              I = 0;
              continue;
            }
            b <<= 1, b |= S, I++, !(I !== g && (_ !== 0 || p !== 0)) && (C = this.mul(C, w[b]), I = 0, b = 0);
          }
          a = 26;
        }
        return C;
      }, F.prototype.convertTo = function(A) {
        var h = A.umod(this.m);
        return h === A ? h.clone() : h;
      }, F.prototype.convertFrom = function(A) {
        var h = A.clone();
        return h.red = null, h;
      }, i.mont = function(A) {
        return new q(A);
      };
      function q(B) {
        F.call(this, B), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      s(q, F), q.prototype.convertTo = function(A) {
        return this.imod(A.ushln(this.shift));
      }, q.prototype.convertFrom = function(A) {
        var h = this.imod(A.mul(this.rinv));
        return h.red = null, h;
      }, q.prototype.imul = function(A, h) {
        if (A.isZero() || h.isZero())
          return A.words[0] = 0, A.length = 1, A;
        var g = A.imul(h), w = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = g.isub(w).iushrn(this.shift), C = _;
        return _.cmp(this.m) >= 0 ? C = _.isub(this.m) : _.cmpn(0) < 0 && (C = _.iadd(this.m)), C._forceRed(this);
      }, q.prototype.mul = function(A, h) {
        if (A.isZero() || h.isZero()) return new i(0)._forceRed(this);
        var g = A.mul(h), w = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = g.isub(w).iushrn(this.shift), C = _;
        return _.cmp(this.m) >= 0 ? C = _.isub(this.m) : _.cmpn(0) < 0 && (C = _.iadd(this.m)), C._forceRed(this);
      }, q.prototype.invm = function(A) {
        var h = this.imod(A._invmp(this.m).mul(this.r2));
        return h._forceRed(this);
      };
    })(r, UA);
  }(Gn)), Gn.exports;
}
var FA = Ks();
const Zi = /* @__PURE__ */ tr(FA);
var Dn = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var $i;
function GA() {
  return $i || ($i = 1, function(r, t) {
    var e = fi(), n = e.Buffer;
    function s(o, u) {
      for (var d in o)
        u[d] = o[d];
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? r.exports = e : (s(e, t), t.Buffer = i);
    function i(o, u, d) {
      return n(o, u, d);
    }
    i.prototype = Object.create(n.prototype), s(n, i), i.from = function(o, u, d) {
      if (typeof o == "number")
        throw new TypeError("Argument must not be a number");
      return n(o, u, d);
    }, i.alloc = function(o, u, d) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      var y = n(o);
      return u !== void 0 ? typeof d == "string" ? y.fill(u, d) : y.fill(u) : y.fill(0), y;
    }, i.allocUnsafe = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return n(o);
    }, i.allocUnsafeSlow = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return e.SlowBuffer(o);
    };
  }(Dn, Dn.exports)), Dn.exports;
}
var Dr, ts;
function PA() {
  if (ts) return Dr;
  ts = 1;
  var r = GA().Buffer;
  function t(e) {
    if (e.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), s = 0; s < n.length; s++)
      n[s] = 255;
    for (var i = 0; i < e.length; i++) {
      var o = e.charAt(i), u = o.charCodeAt(0);
      if (n[u] !== 255)
        throw new TypeError(o + " is ambiguous");
      n[u] = i;
    }
    var d = e.length, y = e.charAt(0), R = Math.log(d) / Math.log(256), Q = Math.log(256) / Math.log(d);
    function D(N) {
      if ((Array.isArray(N) || N instanceof Uint8Array) && (N = r.from(N)), !r.isBuffer(N))
        throw new TypeError("Expected Buffer");
      if (N.length === 0)
        return "";
      for (var M = 0, V = 0, j = 0, K = N.length; j !== K && N[j] === 0; )
        j++, M++;
      for (var P = (K - j) * Q + 1 >>> 0, X = new Uint8Array(P); j !== K; ) {
        for (var Z = N[j], st = 0, ot = P - 1; (Z !== 0 || st < V) && ot !== -1; ot--, st++)
          Z += 256 * X[ot] >>> 0, X[ot] = Z % d >>> 0, Z = Z / d >>> 0;
        if (Z !== 0)
          throw new Error("Non-zero carry");
        V = st, j++;
      }
      for (var z = P - V; z !== P && X[z] === 0; )
        z++;
      for (var k = y.repeat(M); z < P; ++z)
        k += e.charAt(X[z]);
      return k;
    }
    function x(N) {
      if (typeof N != "string")
        throw new TypeError("Expected String");
      if (N.length === 0)
        return r.alloc(0);
      for (var M = 0, V = 0, j = 0; N[M] === y; )
        V++, M++;
      for (var K = (N.length - M) * R + 1 >>> 0, P = new Uint8Array(K); M < N.length; ) {
        var X = N.charCodeAt(M);
        if (X > 255)
          return;
        var Z = n[X];
        if (Z === 255)
          return;
        for (var st = 0, ot = K - 1; (Z !== 0 || st < j) && ot !== -1; ot--, st++)
          Z += d * P[ot] >>> 0, P[ot] = Z % 256 >>> 0, Z = Z / 256 >>> 0;
        if (Z !== 0)
          throw new Error("Non-zero carry");
        j = st, M++;
      }
      for (var z = K - j; z !== K && P[z] === 0; )
        z++;
      var k = r.allocUnsafe(V + (K - z));
      k.fill(0, 0, V);
      for (var F = V; z !== K; )
        k[F++] = P[z++];
      return k;
    }
    function L(N) {
      var M = x(N);
      if (M)
        return M;
      throw new Error("Non-base" + d + " character");
    }
    return {
      encode: D,
      decodeUnsafe: x,
      decode: L
    };
  }
  return Dr = t, Dr;
}
var kr, es;
function zs() {
  if (es) return kr;
  es = 1;
  var r = PA(), t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  return kr = r(t), kr;
}
var YA = zs();
const oe = /* @__PURE__ */ tr(YA), ns = Os;
var wt = {};
function Me(r, t, e) {
  return t <= r && r <= e;
}
function nr(r) {
  if (r === void 0) return {};
  if (r === Object(r)) return r;
  throw TypeError("Could not convert argument to dictionary");
}
function HA(r) {
  for (var t = String(r), e = t.length, n = 0, s = []; n < e; ) {
    var i = t.charCodeAt(n);
    if (i < 55296 || i > 57343)
      s.push(i);
    else if (56320 <= i && i <= 57343)
      s.push(65533);
    else if (55296 <= i && i <= 56319)
      if (n === e - 1)
        s.push(65533);
      else {
        var o = r.charCodeAt(n + 1);
        if (56320 <= o && o <= 57343) {
          var u = i & 1023, d = o & 1023;
          s.push(65536 + (u << 10) + d), n += 1;
        } else
          s.push(65533);
      }
    n += 1;
  }
  return s;
}
function JA(r) {
  for (var t = "", e = 0; e < r.length; ++e) {
    var n = r[e];
    n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode(
      (n >> 10) + 55296,
      (n & 1023) + 56320
    ));
  }
  return t;
}
var Kn = -1;
function _i(r) {
  this.tokens = [].slice.call(r);
}
_i.prototype = {
  /**
   * @return {boolean} True if end-of-stream has been hit.
   */
  endOfStream: function() {
    return !this.tokens.length;
  },
  /**
   * When a token is read from a stream, the first token in the
   * stream must be returned and subsequently removed, and
   * end-of-stream must be returned otherwise.
   *
   * @return {number} Get the next token from the stream, or
   * end_of_stream.
   */
  read: function() {
    return this.tokens.length ? this.tokens.shift() : Kn;
  },
  /**
   * When one or more tokens are prepended to a stream, those tokens
   * must be inserted, in given order, before the first token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
   */
  prepend: function(r) {
    if (Array.isArray(r))
      for (var t = (
        /**@type {!Array.<number>}*/
        r
      ); t.length; )
        this.tokens.unshift(t.pop());
    else
      this.tokens.unshift(r);
  },
  /**
   * When one or more tokens are pushed to a stream, those tokens
   * must be inserted, in given order, after the last token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
   */
  push: function(r) {
    if (Array.isArray(r))
      for (var t = (
        /**@type {!Array.<number>}*/
        r
      ); t.length; )
        this.tokens.push(t.shift());
    else
      this.tokens.push(r);
  }
};
var fn = -1;
function Ur(r, t) {
  if (r)
    throw TypeError("Decoder error");
  return t || 65533;
}
var zn = "utf-8";
function Xn(r, t) {
  if (!(this instanceof Xn))
    return new Xn(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : zn, r !== zn)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = nr(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!t.fatal, this._ignoreBOM = !!t.ignoreBOM, Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
Xn.prototype = {
  /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */
  decode: function(t, e) {
    var n;
    typeof t == "object" && t instanceof ArrayBuffer ? n = new Uint8Array(t) : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer ? n = new Uint8Array(
      t.buffer,
      t.byteOffset,
      t.byteLength
    ) : n = new Uint8Array(0), e = nr(e), this._streaming || (this._decoder = new qA({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = !!e.stream;
    for (var s = new _i(n), i = [], o; !s.endOfStream() && (o = this._decoder.handler(s, s.read()), o !== fn); )
      o !== null && (Array.isArray(o) ? i.push.apply(
        i,
        /**@type {!Array.<number>}*/
        o
      ) : i.push(o));
    if (!this._streaming) {
      do {
        if (o = this._decoder.handler(s, s.read()), o === fn)
          break;
        o !== null && (Array.isArray(o) ? i.push.apply(
          i,
          /**@type {!Array.<number>}*/
          o
        ) : i.push(o));
      } while (!s.endOfStream());
      this._decoder = null;
    }
    return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), JA(i);
  }
};
function Vn(r, t) {
  if (!(this instanceof Vn))
    return new Vn(r, t);
  if (r = r !== void 0 ? String(r).toLowerCase() : zn, r !== zn)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  t = nr(t), this._streaming = !1, this._encoder = null, this._options = { fatal: !!t.fatal }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
Vn.prototype = {
  /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */
  encode: function(t, e) {
    t = t ? String(t) : "", e = nr(e), this._streaming || (this._encoder = new KA(this._options)), this._streaming = !!e.stream;
    for (var n = [], s = new _i(HA(t)), i; !s.endOfStream() && (i = this._encoder.handler(s, s.read()), i !== fn); )
      Array.isArray(i) ? n.push.apply(
        n,
        /**@type {!Array.<number>}*/
        i
      ) : n.push(i);
    if (!this._streaming) {
      for (; i = this._encoder.handler(s, s.read()), i !== fn; )
        Array.isArray(i) ? n.push.apply(
          n,
          /**@type {!Array.<number>}*/
          i
        ) : n.push(i);
      this._encoder = null;
    }
    return new Uint8Array(n);
  }
};
function qA(r) {
  var t = r.fatal, e = 0, n = 0, s = 0, i = 128, o = 191;
  this.handler = function(u, d) {
    if (d === Kn && s !== 0)
      return s = 0, Ur(t);
    if (d === Kn)
      return fn;
    if (s === 0) {
      if (Me(d, 0, 127))
        return d;
      if (Me(d, 194, 223))
        s = 1, e = d - 192;
      else if (Me(d, 224, 239))
        d === 224 && (i = 160), d === 237 && (o = 159), s = 2, e = d - 224;
      else if (Me(d, 240, 244))
        d === 240 && (i = 144), d === 244 && (o = 143), s = 3, e = d - 240;
      else
        return Ur(t);
      return e = e << 6 * s, null;
    }
    if (!Me(d, i, o))
      return e = s = n = 0, i = 128, o = 191, u.prepend(d), Ur(t);
    if (i = 128, o = 191, n += 1, e += d - 128 << 6 * (s - n), n !== s)
      return null;
    var y = e;
    return e = s = n = 0, y;
  };
}
function KA(r) {
  r.fatal, this.handler = function(t, e) {
    if (e === Kn)
      return fn;
    if (Me(e, 0, 127))
      return e;
    var n, s;
    Me(e, 128, 2047) ? (n = 1, s = 192) : Me(e, 2048, 65535) ? (n = 2, s = 224) : Me(e, 65536, 1114111) && (n = 3, s = 240);
    for (var i = [(e >> 6 * n) + s]; n > 0; ) {
      var o = e >> 6 * (n - 1);
      i.push(128 | o & 63), n -= 1;
    }
    return i;
  };
}
const zA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextDecoder: Xn,
  TextEncoder: Vn
}, Symbol.toStringTag, { value: "Module" })), XA = /* @__PURE__ */ ui(zA);
var rs;
function VA() {
  if (rs) return wt;
  rs = 1;
  var r = wt && wt.__createBinding || (Object.create ? function(z, k, F, q) {
    q === void 0 && (q = F), Object.defineProperty(z, q, { enumerable: !0, get: function() {
      return k[F];
    } });
  } : function(z, k, F, q) {
    q === void 0 && (q = F), z[q] = k[F];
  }), t = wt && wt.__setModuleDefault || (Object.create ? function(z, k) {
    Object.defineProperty(z, "default", { enumerable: !0, value: k });
  } : function(z, k) {
    z.default = k;
  }), e = wt && wt.__decorate || function(z, k, F, q) {
    var B = arguments.length, A = B < 3 ? k : q === null ? q = Object.getOwnPropertyDescriptor(k, F) : q, h;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") A = Reflect.decorate(z, k, F, q);
    else for (var g = z.length - 1; g >= 0; g--) (h = z[g]) && (A = (B < 3 ? h(A) : B > 3 ? h(k, F, A) : h(k, F)) || A);
    return B > 3 && A && Object.defineProperty(k, F, A), A;
  }, n = wt && wt.__importStar || function(z) {
    if (z && z.__esModule) return z;
    var k = {};
    if (z != null) for (var F in z) F !== "default" && Object.hasOwnProperty.call(z, F) && r(k, z, F);
    return t(k, z), k;
  }, s = wt && wt.__importDefault || function(z) {
    return z && z.__esModule ? z : { default: z };
  };
  Object.defineProperty(wt, "__esModule", { value: !0 }), wt.deserializeUnchecked = wt.deserialize = wt.serialize = wt.BinaryReader = wt.BinaryWriter = wt.BorshError = wt.baseDecode = wt.baseEncode = void 0;
  const i = s(Ks()), o = s(zs()), u = n(XA), d = typeof TextDecoder != "function" ? u.TextDecoder : TextDecoder, y = new d("utf-8", { fatal: !0 });
  function R(z) {
    return typeof z == "string" && (z = Buffer.from(z, "utf8")), o.default.encode(Buffer.from(z));
  }
  wt.baseEncode = R;
  function Q(z) {
    return Buffer.from(o.default.decode(z));
  }
  wt.baseDecode = Q;
  const D = 1024;
  class x extends Error {
    constructor(k) {
      super(k), this.fieldPath = [], this.originalMessage = k;
    }
    addToFieldPath(k) {
      this.fieldPath.splice(0, 0, k), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
    }
  }
  wt.BorshError = x;
  class L {
    constructor() {
      this.buf = Buffer.alloc(D), this.length = 0;
    }
    maybeResize() {
      this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(D)]));
    }
    writeU8(k) {
      this.maybeResize(), this.buf.writeUInt8(k, this.length), this.length += 1;
    }
    writeU16(k) {
      this.maybeResize(), this.buf.writeUInt16LE(k, this.length), this.length += 2;
    }
    writeU32(k) {
      this.maybeResize(), this.buf.writeUInt32LE(k, this.length), this.length += 4;
    }
    writeU64(k) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(k).toArray("le", 8)));
    }
    writeU128(k) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(k).toArray("le", 16)));
    }
    writeU256(k) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(k).toArray("le", 32)));
    }
    writeU512(k) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(k).toArray("le", 64)));
    }
    writeBuffer(k) {
      this.buf = Buffer.concat([
        Buffer.from(this.buf.subarray(0, this.length)),
        k,
        Buffer.alloc(D)
      ]), this.length += k.length;
    }
    writeString(k) {
      this.maybeResize();
      const F = Buffer.from(k, "utf8");
      this.writeU32(F.length), this.writeBuffer(F);
    }
    writeFixedArray(k) {
      this.writeBuffer(Buffer.from(k));
    }
    writeArray(k, F) {
      this.maybeResize(), this.writeU32(k.length);
      for (const q of k)
        this.maybeResize(), F(q);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  }
  wt.BinaryWriter = L;
  function N(z, k, F) {
    const q = F.value;
    F.value = function(...B) {
      try {
        return q.apply(this, B);
      } catch (A) {
        if (A instanceof RangeError) {
          const h = A.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(h) >= 0)
            throw new x("Reached the end of buffer when deserializing");
        }
        throw A;
      }
    };
  }
  class M {
    constructor(k) {
      this.buf = k, this.offset = 0;
    }
    readU8() {
      const k = this.buf.readUInt8(this.offset);
      return this.offset += 1, k;
    }
    readU16() {
      const k = this.buf.readUInt16LE(this.offset);
      return this.offset += 2, k;
    }
    readU32() {
      const k = this.buf.readUInt32LE(this.offset);
      return this.offset += 4, k;
    }
    readU64() {
      const k = this.readBuffer(8);
      return new i.default(k, "le");
    }
    readU128() {
      const k = this.readBuffer(16);
      return new i.default(k, "le");
    }
    readU256() {
      const k = this.readBuffer(32);
      return new i.default(k, "le");
    }
    readU512() {
      const k = this.readBuffer(64);
      return new i.default(k, "le");
    }
    readBuffer(k) {
      if (this.offset + k > this.buf.length)
        throw new x(`Expected buffer length ${k} isn't within bounds`);
      const F = this.buf.slice(this.offset, this.offset + k);
      return this.offset += k, F;
    }
    readString() {
      const k = this.readU32(), F = this.readBuffer(k);
      try {
        return y.decode(F);
      } catch (q) {
        throw new x(`Error decoding UTF-8 string: ${q}`);
      }
    }
    readFixedArray(k) {
      return new Uint8Array(this.readBuffer(k));
    }
    readArray(k) {
      const F = this.readU32(), q = Array();
      for (let B = 0; B < F; ++B)
        q.push(k());
      return q;
    }
  }
  e([
    N
  ], M.prototype, "readU8", null), e([
    N
  ], M.prototype, "readU16", null), e([
    N
  ], M.prototype, "readU32", null), e([
    N
  ], M.prototype, "readU64", null), e([
    N
  ], M.prototype, "readU128", null), e([
    N
  ], M.prototype, "readU256", null), e([
    N
  ], M.prototype, "readU512", null), e([
    N
  ], M.prototype, "readString", null), e([
    N
  ], M.prototype, "readFixedArray", null), e([
    N
  ], M.prototype, "readArray", null), wt.BinaryReader = M;
  function V(z) {
    return z.charAt(0).toUpperCase() + z.slice(1);
  }
  function j(z, k, F, q, B) {
    try {
      if (typeof q == "string")
        B[`write${V(q)}`](F);
      else if (q instanceof Array)
        if (typeof q[0] == "number") {
          if (F.length !== q[0])
            throw new x(`Expecting byte array of length ${q[0]}, but got ${F.length} bytes`);
          B.writeFixedArray(F);
        } else if (q.length === 2 && typeof q[1] == "number") {
          if (F.length !== q[1])
            throw new x(`Expecting byte array of length ${q[1]}, but got ${F.length} bytes`);
          for (let A = 0; A < q[1]; A++)
            j(z, null, F[A], q[0], B);
        } else
          B.writeArray(F, (A) => {
            j(z, k, A, q[0], B);
          });
      else if (q.kind !== void 0)
        switch (q.kind) {
          case "option": {
            F == null ? B.writeU8(0) : (B.writeU8(1), j(z, k, F, q.type, B));
            break;
          }
          case "map": {
            B.writeU32(F.size), F.forEach((A, h) => {
              j(z, k, h, q.key, B), j(z, k, A, q.value, B);
            });
            break;
          }
          default:
            throw new x(`FieldType ${q} unrecognized`);
        }
      else
        K(z, F, B);
    } catch (A) {
      throw A instanceof x && A.addToFieldPath(k), A;
    }
  }
  function K(z, k, F) {
    if (typeof k.borshSerialize == "function") {
      k.borshSerialize(F);
      return;
    }
    const q = z.get(k.constructor);
    if (!q)
      throw new x(`Class ${k.constructor.name} is missing in schema`);
    if (q.kind === "struct")
      q.fields.map(([B, A]) => {
        j(z, B, k[B], A, F);
      });
    else if (q.kind === "enum") {
      const B = k[q.field];
      for (let A = 0; A < q.values.length; ++A) {
        const [h, g] = q.values[A];
        if (h === B) {
          F.writeU8(A), j(z, h, k[h], g, F);
          break;
        }
      }
    } else
      throw new x(`Unexpected schema kind: ${q.kind} for ${k.constructor.name}`);
  }
  function P(z, k, F = L) {
    const q = new F();
    return K(z, k, q), q.toArray();
  }
  wt.serialize = P;
  function X(z, k, F, q) {
    try {
      if (typeof F == "string")
        return q[`read${V(F)}`]();
      if (F instanceof Array) {
        if (typeof F[0] == "number")
          return q.readFixedArray(F[0]);
        if (typeof F[1] == "number") {
          const B = [];
          for (let A = 0; A < F[1]; A++)
            B.push(X(z, null, F[0], q));
          return B;
        } else
          return q.readArray(() => X(z, k, F[0], q));
      }
      if (F.kind === "option")
        return q.readU8() ? X(z, k, F.type, q) : void 0;
      if (F.kind === "map") {
        let B = /* @__PURE__ */ new Map();
        const A = q.readU32();
        for (let h = 0; h < A; h++) {
          const g = X(z, k, F.key, q), w = X(z, k, F.value, q);
          B.set(g, w);
        }
        return B;
      }
      return Z(z, F, q);
    } catch (B) {
      throw B instanceof x && B.addToFieldPath(k), B;
    }
  }
  function Z(z, k, F) {
    if (typeof k.borshDeserialize == "function")
      return k.borshDeserialize(F);
    const q = z.get(k);
    if (!q)
      throw new x(`Class ${k.name} is missing in schema`);
    if (q.kind === "struct") {
      const B = {};
      for (const [A, h] of z.get(k).fields)
        B[A] = X(z, A, h, F);
      return new k(B);
    }
    if (q.kind === "enum") {
      const B = F.readU8();
      if (B >= q.values.length)
        throw new x(`Enum index: ${B} is out of range`);
      const [A, h] = q.values[B], g = X(z, A, h, F);
      return new k({ [A]: g });
    }
    throw new x(`Unexpected schema kind: ${q.kind} for ${k.constructor.name}`);
  }
  function st(z, k, F, q = M) {
    const B = new q(F), A = Z(z, k, B);
    if (B.offset < F.length)
      throw new x(`Unexpected ${F.length - B.offset} bytes after deserialized data`);
    return A;
  }
  wt.deserialize = st;
  function ot(z, k, F, q = M) {
    const B = new q(F);
    return Z(z, k, B);
  }
  return wt.deserializeUnchecked = ot, wt;
}
var Fr = VA(), Y = {}, is;
function WA() {
  if (is) return Y;
  is = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.s16 = Y.s8 = Y.nu64be = Y.u48be = Y.u40be = Y.u32be = Y.u24be = Y.u16be = Y.nu64 = Y.u48 = Y.u40 = Y.u32 = Y.u24 = Y.u16 = Y.u8 = Y.offset = Y.greedy = Y.Constant = Y.UTF8 = Y.CString = Y.Blob = Y.Boolean = Y.BitField = Y.BitStructure = Y.VariantLayout = Y.Union = Y.UnionLayoutDiscriminator = Y.UnionDiscriminator = Y.Structure = Y.Sequence = Y.DoubleBE = Y.Double = Y.FloatBE = Y.Float = Y.NearInt64BE = Y.NearInt64 = Y.NearUInt64BE = Y.NearUInt64 = Y.IntBE = Y.Int = Y.UIntBE = Y.UInt = Y.OffsetLayout = Y.GreedyCount = Y.ExternalLayout = Y.bindConstructorLayout = Y.nameWithProperty = Y.Layout = Y.uint8ArrayToBuffer = Y.checkUint8Array = void 0, Y.constant = Y.utf8 = Y.cstr = Y.blob = Y.unionLayoutDiscriminator = Y.union = Y.seq = Y.bits = Y.struct = Y.f64be = Y.f64 = Y.f32be = Y.f32 = Y.ns64be = Y.s48be = Y.s40be = Y.s32be = Y.s24be = Y.s16be = Y.ns64 = Y.s48 = Y.s40 = Y.s32 = Y.s24 = void 0;
  const r = fi();
  function t(a) {
    if (!(a instanceof Uint8Array))
      throw new TypeError("b must be a Uint8Array");
  }
  Y.checkUint8Array = t;
  function e(a) {
    return t(a), r.Buffer.from(a.buffer, a.byteOffset, a.length);
  }
  Y.uint8ArrayToBuffer = e;
  let n = class {
    constructor(c, p) {
      if (!Number.isInteger(c))
        throw new TypeError("span must be an integer");
      this.span = c, this.property = p;
    }
    /** Function to create an Object into which decoded properties will
     * be written.
     *
     * Used only for layouts that {@link Layout#decode|decode} to Object
     * instances, which means:
     * * {@link Structure}
     * * {@link Union}
     * * {@link VariantLayout}
     * * {@link BitStructure}
     *
     * If left undefined the JavaScript representation of these layouts
     * will be Object instances.
     *
     * See {@link bindConstructorLayout}.
     */
    makeDestinationObject() {
      return {};
    }
    /**
     * Calculate the span of a specific instance of a layout.
     *
     * @param {Uint8Array} b - the buffer that contains an encoded instance.
     *
     * @param {Number} [offset] - the offset at which the encoded instance
     * starts.  If absent a zero offset is inferred.
     *
     * @return {Number} - the number of bytes covered by the layout
     * instance.  If this method is not overridden in a subclass the
     * definition-time constant {@link Layout#span|span} will be
     * returned.
     *
     * @throws {RangeError} - if the length of the value cannot be
     * determined.
     */
    getSpan(c, p) {
      if (0 > this.span)
        throw new RangeError("indeterminate span");
      return this.span;
    }
    /**
     * Replicate the layout using a new property.
     *
     * This function must be used to get a structurally-equivalent layout
     * with a different name since all {@link Layout} instances are
     * immutable.
     *
     * **NOTE** This is a shallow copy.  All fields except {@link
     * Layout#property|property} are strictly equal to the origin layout.
     *
     * @param {String} property - the value for {@link
     * Layout#property|property} in the replica.
     *
     * @returns {Layout} - the copy with {@link Layout#property|property}
     * set to `property`.
     */
    replicate(c) {
      const p = Object.create(this.constructor.prototype);
      return Object.assign(p, this), p.property = c, p;
    }
    /**
     * Create an object from layout properties and an array of values.
     *
     * **NOTE** This function returns `undefined` if invoked on a layout
     * that does not return its value as an Object.  Objects are
     * returned for things that are a {@link Structure}, which includes
     * {@link VariantLayout|variant layouts} if they are structures, and
     * excludes {@link Union}s.  If you want this feature for a union
     * you must use {@link Union.getVariant|getVariant} to select the
     * desired layout.
     *
     * @param {Array} values - an array of values that correspond to the
     * default order for properties.  As with {@link Layout#decode|decode}
     * layout elements that have no property name are skipped when
     * iterating over the array values.  Only the top-level properties are
     * assigned; arguments are not assigned to properties of contained
     * layouts.  Any unused values are ignored.
     *
     * @return {(Object|undefined)}
     */
    fromArray(c) {
    }
  };
  Y.Layout = n;
  function s(a, c) {
    return c.property ? a + "[" + c.property + "]" : a;
  }
  Y.nameWithProperty = s;
  function i(a, c) {
    if (typeof a != "function")
      throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(a, "layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(c && c instanceof n))
      throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(c, "boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    a.layout_ = c, c.boundConstructor_ = a, c.makeDestinationObject = () => new a(), Object.defineProperty(a.prototype, "encode", {
      value(p, S) {
        return c.encode(this, p, S);
      },
      writable: !0
    }), Object.defineProperty(a, "decode", {
      value(p, S) {
        return c.decode(p, S);
      },
      writable: !0
    });
  }
  Y.bindConstructorLayout = i;
  class o extends n {
    /**
     * Return `true` iff the external layout decodes to an unsigned
     * integer layout.
     *
     * In that case it can be used as the source of {@link
     * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
     * or as {@link UnionLayoutDiscriminator#layout|external union
     * discriminators}.
     *
     * @abstract
     */
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  }
  Y.ExternalLayout = o;
  class u extends o {
    constructor(c = 1, p) {
      if (!Number.isInteger(c) || 0 >= c)
        throw new TypeError("elementSpan must be a (positive) integer");
      super(-1, p), this.elementSpan = c;
    }
    /** @override */
    isCount() {
      return !0;
    }
    /** @override */
    decode(c, p = 0) {
      t(c);
      const S = c.length - p;
      return Math.floor(S / this.elementSpan);
    }
    /** @override */
    encode(c, p, S) {
      return 0;
    }
  }
  Y.GreedyCount = u;
  class d extends o {
    constructor(c, p = 0, S) {
      if (!(c instanceof n))
        throw new TypeError("layout must be a Layout");
      if (!Number.isInteger(p))
        throw new TypeError("offset must be integer or undefined");
      super(c.span, S || c.property), this.layout = c, this.offset = p;
    }
    /** @override */
    isCount() {
      return this.layout instanceof y || this.layout instanceof R;
    }
    /** @override */
    decode(c, p = 0) {
      return this.layout.decode(c, p + this.offset);
    }
    /** @override */
    encode(c, p, S = 0) {
      return this.layout.encode(c, p, S + this.offset);
    }
  }
  Y.OffsetLayout = d;
  class y extends n {
    constructor(c, p) {
      if (super(c, p), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readUIntLE(p, this.span);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeUIntLE(c, S, this.span), this.span;
    }
  }
  Y.UInt = y;
  class R extends n {
    constructor(c, p) {
      if (super(c, p), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readUIntBE(p, this.span);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeUIntBE(c, S, this.span), this.span;
    }
  }
  Y.UIntBE = R;
  class Q extends n {
    constructor(c, p) {
      if (super(c, p), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readIntLE(p, this.span);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeIntLE(c, S, this.span), this.span;
    }
  }
  Y.Int = Q;
  class D extends n {
    constructor(c, p) {
      if (super(c, p), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readIntBE(p, this.span);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeIntBE(c, S, this.span), this.span;
    }
  }
  Y.IntBE = D;
  const x = Math.pow(2, 32);
  function L(a) {
    const c = Math.floor(a / x), p = a - c * x;
    return { hi32: c, lo32: p };
  }
  function N(a, c) {
    return a * x + c;
  }
  class M extends n {
    constructor(c) {
      super(8, c);
    }
    /** @override */
    decode(c, p = 0) {
      const S = e(c), T = S.readUInt32LE(p), H = S.readUInt32LE(p + 4);
      return N(H, T);
    }
    /** @override */
    encode(c, p, S = 0) {
      const T = L(c), H = e(p);
      return H.writeUInt32LE(T.lo32, S), H.writeUInt32LE(T.hi32, S + 4), 8;
    }
  }
  Y.NearUInt64 = M;
  class V extends n {
    constructor(c) {
      super(8, c);
    }
    /** @override */
    decode(c, p = 0) {
      const S = e(c), T = S.readUInt32BE(p), H = S.readUInt32BE(p + 4);
      return N(T, H);
    }
    /** @override */
    encode(c, p, S = 0) {
      const T = L(c), H = e(p);
      return H.writeUInt32BE(T.hi32, S), H.writeUInt32BE(T.lo32, S + 4), 8;
    }
  }
  Y.NearUInt64BE = V;
  class j extends n {
    constructor(c) {
      super(8, c);
    }
    /** @override */
    decode(c, p = 0) {
      const S = e(c), T = S.readUInt32LE(p), H = S.readInt32LE(p + 4);
      return N(H, T);
    }
    /** @override */
    encode(c, p, S = 0) {
      const T = L(c), H = e(p);
      return H.writeUInt32LE(T.lo32, S), H.writeInt32LE(T.hi32, S + 4), 8;
    }
  }
  Y.NearInt64 = j;
  class K extends n {
    constructor(c) {
      super(8, c);
    }
    /** @override */
    decode(c, p = 0) {
      const S = e(c), T = S.readInt32BE(p), H = S.readUInt32BE(p + 4);
      return N(T, H);
    }
    /** @override */
    encode(c, p, S = 0) {
      const T = L(c), H = e(p);
      return H.writeInt32BE(T.hi32, S), H.writeUInt32BE(T.lo32, S + 4), 8;
    }
  }
  Y.NearInt64BE = K;
  class P extends n {
    constructor(c) {
      super(4, c);
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readFloatLE(p);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeFloatLE(c, S), 4;
    }
  }
  Y.Float = P;
  class X extends n {
    constructor(c) {
      super(4, c);
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readFloatBE(p);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeFloatBE(c, S), 4;
    }
  }
  Y.FloatBE = X;
  class Z extends n {
    constructor(c) {
      super(8, c);
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readDoubleLE(p);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeDoubleLE(c, S), 8;
    }
  }
  Y.Double = Z;
  class st extends n {
    constructor(c) {
      super(8, c);
    }
    /** @override */
    decode(c, p = 0) {
      return e(c).readDoubleBE(p);
    }
    /** @override */
    encode(c, p, S = 0) {
      return e(p).writeDoubleBE(c, S), 8;
    }
  }
  Y.DoubleBE = st;
  class ot extends n {
    constructor(c, p, S) {
      if (!(c instanceof n))
        throw new TypeError("elementLayout must be a Layout");
      if (!(p instanceof o && p.isCount() || Number.isInteger(p) && 0 <= p))
        throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
      let T = -1;
      !(p instanceof o) && 0 < c.span && (T = p * c.span), super(T, S), this.elementLayout = c, this.count = p;
    }
    /** @override */
    getSpan(c, p = 0) {
      if (0 <= this.span)
        return this.span;
      let S = 0, T = this.count;
      if (T instanceof o && (T = T.decode(c, p)), 0 < this.elementLayout.span)
        S = T * this.elementLayout.span;
      else {
        let H = 0;
        for (; H < T; )
          S += this.elementLayout.getSpan(c, p + S), ++H;
      }
      return S;
    }
    /** @override */
    decode(c, p = 0) {
      const S = [];
      let T = 0, H = this.count;
      for (H instanceof o && (H = H.decode(c, p)); T < H; )
        S.push(this.elementLayout.decode(c, p)), p += this.elementLayout.getSpan(c, p), T += 1;
      return S;
    }
    /** Implement {@link Layout#encode|encode} for {@link Sequence}.
     *
     * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
     * the unused space in the buffer is left unchanged.  If `src` is
     * longer than {@link Sequence#count|count} the unneeded elements are
     * ignored.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */
    encode(c, p, S = 0) {
      const T = this.elementLayout, H = c.reduce((tt, it) => tt + T.encode(it, p, S + tt), 0);
      return this.count instanceof o && this.count.encode(c.length, p, S), H;
    }
  }
  Y.Sequence = ot;
  class z extends n {
    constructor(c, p, S) {
      if (!(Array.isArray(c) && c.reduce((H, tt) => H && tt instanceof n, !0)))
        throw new TypeError("fields must be array of Layout instances");
      typeof p == "boolean" && S === void 0 && (S = p, p = void 0);
      for (const H of c)
        if (0 > H.span && H.property === void 0)
          throw new Error("fields cannot contain unnamed variable-length layout");
      let T = -1;
      try {
        T = c.reduce((H, tt) => H + tt.getSpan(), 0);
      } catch {
      }
      super(T, p), this.fields = c, this.decodePrefixes = !!S;
    }
    /** @override */
    getSpan(c, p = 0) {
      if (0 <= this.span)
        return this.span;
      let S = 0;
      try {
        S = this.fields.reduce((T, H) => {
          const tt = H.getSpan(c, p);
          return p += tt, T + tt;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return S;
    }
    /** @override */
    decode(c, p = 0) {
      t(c);
      const S = this.makeDestinationObject();
      for (const T of this.fields)
        if (T.property !== void 0 && (S[T.property] = T.decode(c, p)), p += T.getSpan(c, p), this.decodePrefixes && c.length === p)
          break;
      return S;
    }
    /** Implement {@link Layout#encode|encode} for {@link Structure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the buffer is
     * left unmodified. */
    encode(c, p, S = 0) {
      const T = S;
      let H = 0, tt = 0;
      for (const it of this.fields) {
        let Ct = it.span;
        if (tt = 0 < Ct ? Ct : 0, it.property !== void 0) {
          const dt = c[it.property];
          dt !== void 0 && (tt = it.encode(dt, p, S), 0 > Ct && (Ct = it.getSpan(p, S)));
        }
        H = S, S += Ct;
      }
      return H + tt - T;
    }
    /** @override */
    fromArray(c) {
      const p = this.makeDestinationObject();
      for (const S of this.fields)
        S.property !== void 0 && 0 < c.length && (p[S.property] = c.shift());
      return p;
    }
    /**
     * Get access to the layout of a given property.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Layout} - the layout associated with `property`, or
     * undefined if there is no such property.
     */
    layoutFor(c) {
      if (typeof c != "string")
        throw new TypeError("property must be string");
      for (const p of this.fields)
        if (p.property === c)
          return p;
    }
    /**
     * Get the offset of a structure member.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Number} - the offset in bytes to the start of `property`
     * within the structure, or undefined if `property` is not a field
     * within the structure.  If the property is a member but follows a
     * variable-length structure member a negative number will be
     * returned.
     */
    offsetOf(c) {
      if (typeof c != "string")
        throw new TypeError("property must be string");
      let p = 0;
      for (const S of this.fields) {
        if (S.property === c)
          return p;
        0 > S.span ? p = -1 : 0 <= p && (p += S.span);
      }
    }
  }
  Y.Structure = z;
  class k {
    constructor(c) {
      this.property = c;
    }
    /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
     *
     * The implementation of this method need not reference the buffer if
     * variant information is available through other means. */
    decode(c, p) {
      throw new Error("UnionDiscriminator is abstract");
    }
    /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
     *
     * The implementation of this method need not store the value if
     * variant information is maintained through other means. */
    encode(c, p, S) {
      throw new Error("UnionDiscriminator is abstract");
    }
  }
  Y.UnionDiscriminator = k;
  class F extends k {
    constructor(c, p) {
      if (!(c instanceof o && c.isCount()))
        throw new TypeError("layout must be an unsigned integer ExternalLayout");
      super(p || c.property || "variant"), this.layout = c;
    }
    /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    decode(c, p) {
      return this.layout.decode(c, p);
    }
    /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    encode(c, p, S) {
      return this.layout.encode(c, p, S);
    }
  }
  Y.UnionLayoutDiscriminator = F;
  class q extends n {
    constructor(c, p, S) {
      let T;
      if (c instanceof y || c instanceof R)
        T = new F(new d(c));
      else if (c instanceof o && c.isCount())
        T = new F(c);
      else if (c instanceof k)
        T = c;
      else
        throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
      if (p === void 0 && (p = null), !(p === null || p instanceof n))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (p !== null) {
        if (0 > p.span)
          throw new Error("defaultLayout must have constant span");
        p.property === void 0 && (p = p.replicate("content"));
      }
      let H = -1;
      p && (H = p.span, 0 <= H && (c instanceof y || c instanceof R) && (H += T.layout.span)), super(H, S), this.discriminator = T, this.usesPrefixDiscriminator = c instanceof y || c instanceof R, this.defaultLayout = p, this.registry = {};
      let tt = this.defaultGetSourceVariant.bind(this);
      this.getSourceVariant = function(it) {
        return tt(it);
      }, this.configGetSourceVariant = function(it) {
        tt = it.bind(this);
      };
    }
    /** @override */
    getSpan(c, p = 0) {
      if (0 <= this.span)
        return this.span;
      const S = this.getVariant(c, p);
      if (!S)
        throw new Error("unable to determine span for unrecognized variant");
      return S.getSpan(c, p);
    }
    /**
     * Method to infer a registered Union variant compatible with `src`.
     *
     * The first satisfied rule in the following sequence defines the
     * return value:
     * * If `src` has properties matching the Union discriminator and
     *   the default layout, `undefined` is returned regardless of the
     *   value of the discriminator property (this ensures the default
     *   layout will be used);
     * * If `src` has a property matching the Union discriminator, the
     *   value of the discriminator identifies a registered variant, and
     *   either (a) the variant has no layout, or (b) `src` has the
     *   variant's property, then the variant is returned (because the
     *   source satisfies the constraints of the variant it identifies);
     * * If `src` does not have a property matching the Union
     *   discriminator, but does have a property matching a registered
     *   variant, then the variant is returned (because the source
     *   matches a variant without an explicit conflict);
     * * An error is thrown (because we either can't identify a variant,
     *   or we were explicitly told the variant but can't satisfy it).
     *
     * @param {Object} src - an object presumed to be compatible with
     * the content of the Union.
     *
     * @return {(undefined|VariantLayout)} - as described above.
     *
     * @throws {Error} - if `src` cannot be associated with a default or
     * registered variant.
     */
    defaultGetSourceVariant(c) {
      if (Object.prototype.hasOwnProperty.call(c, this.discriminator.property)) {
        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(c, this.defaultLayout.property))
          return;
        const p = this.registry[c[this.discriminator.property]];
        if (p && (!p.layout || p.property && Object.prototype.hasOwnProperty.call(c, p.property)))
          return p;
      } else
        for (const p in this.registry) {
          const S = this.registry[p];
          if (S.property && Object.prototype.hasOwnProperty.call(c, S.property))
            return S;
        }
      throw new Error("unable to infer src variant");
    }
    /** Implement {@link Layout#decode|decode} for {@link Union}.
     *
     * If the variant is {@link Union#addVariant|registered} the return
     * value is an instance of that variant, with no explicit
     * discriminator.  Otherwise the {@link Union#defaultLayout|default
     * layout} is used to decode the content. */
    decode(c, p = 0) {
      let S;
      const T = this.discriminator, H = T.decode(c, p), tt = this.registry[H];
      if (tt === void 0) {
        const it = this.defaultLayout;
        let Ct = 0;
        this.usesPrefixDiscriminator && (Ct = T.layout.span), S = this.makeDestinationObject(), S[T.property] = H, S[it.property] = it.decode(c, p + Ct);
      } else
        S = tt.decode(c, p);
      return S;
    }
    /** Implement {@link Layout#encode|encode} for {@link Union}.
     *
     * This API assumes the `src` object is consistent with the union's
     * {@link Union#defaultLayout|default layout}.  To encode variants
     * use the appropriate variant-specific {@link VariantLayout#encode}
     * method. */
    encode(c, p, S = 0) {
      const T = this.getSourceVariant(c);
      if (T === void 0) {
        const H = this.discriminator, tt = this.defaultLayout;
        let it = 0;
        return this.usesPrefixDiscriminator && (it = H.layout.span), H.encode(c[H.property], p, S), it + tt.encode(c[tt.property], p, S + it);
      }
      return T.encode(c, p, S);
    }
    /** Register a new variant structure within a union.  The newly
     * created variant is returned.
     *
     * @param {Number} variant - initializer for {@link
     * VariantLayout#variant|variant}.
     *
     * @param {Layout} layout - initializer for {@link
     * VariantLayout#layout|layout}.
     *
     * @param {String} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {VariantLayout} */
    addVariant(c, p, S) {
      const T = new B(this, c, p, S);
      return this.registry[c] = T, T;
    }
    /**
     * Get the layout associated with a registered variant.
     *
     * If `vb` does not produce a registered variant the function returns
     * `undefined`.
     *
     * @param {(Number|Uint8Array)} vb - either the variant number, or a
     * buffer from which the discriminator is to be read.
     *
     * @param {Number} offset - offset into `vb` for the start of the
     * union.  Used only when `vb` is an instance of {Uint8Array}.
     *
     * @return {({VariantLayout}|undefined)}
     */
    getVariant(c, p = 0) {
      let S;
      return c instanceof Uint8Array ? S = this.discriminator.decode(c, p) : S = c, this.registry[S];
    }
  }
  Y.Union = q;
  class B extends n {
    constructor(c, p, S, T) {
      if (!(c instanceof q))
        throw new TypeError("union must be a Union");
      if (!Number.isInteger(p) || 0 > p)
        throw new TypeError("variant must be a (non-negative) integer");
      if (typeof S == "string" && T === void 0 && (T = S, S = null), S) {
        if (!(S instanceof n))
          throw new TypeError("layout must be a Layout");
        if (c.defaultLayout !== null && 0 <= S.span && S.span > c.defaultLayout.span)
          throw new Error("variant span exceeds span of containing union");
        if (typeof T != "string")
          throw new TypeError("variant must have a String property");
      }
      let H = c.span;
      0 > c.span && (H = S ? S.span : 0, 0 <= H && c.usesPrefixDiscriminator && (H += c.discriminator.layout.span)), super(H, T), this.union = c, this.variant = p, this.layout = S || null;
    }
    /** @override */
    getSpan(c, p = 0) {
      if (0 <= this.span)
        return this.span;
      let S = 0;
      this.union.usesPrefixDiscriminator && (S = this.union.discriminator.layout.span);
      let T = 0;
      return this.layout && (T = this.layout.getSpan(c, p + S)), S + T;
    }
    /** @override */
    decode(c, p = 0) {
      const S = this.makeDestinationObject();
      if (this !== this.union.getVariant(c, p))
        throw new Error("variant mismatch");
      let T = 0;
      return this.union.usesPrefixDiscriminator && (T = this.union.discriminator.layout.span), this.layout ? S[this.property] = this.layout.decode(c, p + T) : this.property ? S[this.property] = !0 : this.union.usesPrefixDiscriminator && (S[this.union.discriminator.property] = this.variant), S;
    }
    /** @override */
    encode(c, p, S = 0) {
      let T = 0;
      if (this.union.usesPrefixDiscriminator && (T = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(c, this.property))
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, p, S);
      let H = T;
      if (this.layout && (this.layout.encode(c[this.property], p, S + T), H += this.layout.getSpan(p, S + T), 0 <= this.union.span && H > this.union.span))
        throw new Error("encoded variant overruns containing union");
      return H;
    }
    /** Delegate {@link Layout#fromArray|fromArray} to {@link
     * VariantLayout#layout|layout}. */
    fromArray(c) {
      if (this.layout)
        return this.layout.fromArray(c);
    }
  }
  Y.VariantLayout = B;
  function A(a) {
    return 0 > a && (a += 4294967296), a;
  }
  class h extends n {
    constructor(c, p, S) {
      if (!(c instanceof y || c instanceof R))
        throw new TypeError("word must be a UInt or UIntBE layout");
      if (typeof p == "string" && S === void 0 && (S = p, p = !1), 4 < c.span)
        throw new RangeError("word cannot exceed 32 bits");
      super(c.span, S), this.word = c, this.msb = !!p, this.fields = [];
      let T = 0;
      this._packedSetValue = function(H) {
        return T = A(H), this;
      }, this._packedGetValue = function() {
        return T;
      };
    }
    /** @override */
    decode(c, p = 0) {
      const S = this.makeDestinationObject(), T = this.word.decode(c, p);
      this._packedSetValue(T);
      for (const H of this.fields)
        H.property !== void 0 && (S[H.property] = H.decode(c));
      return S;
    }
    /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the packed
     * value is left unmodified.  Unused bits are also left unmodified. */
    encode(c, p, S = 0) {
      const T = this.word.decode(p, S);
      this._packedSetValue(T);
      for (const H of this.fields)
        if (H.property !== void 0) {
          const tt = c[H.property];
          tt !== void 0 && H.encode(tt);
        }
      return this.word.encode(this._packedGetValue(), p, S);
    }
    /** Register a new bitfield with a containing bit structure.  The
     * resulting bitfield is returned.
     *
     * @param {Number} bits - initializer for {@link BitField#bits|bits}.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {BitField} */
    addField(c, p) {
      const S = new g(this, c, p);
      return this.fields.push(S), S;
    }
    /** As with {@link BitStructure#addField|addField} for single-bit
     * fields with `boolean` value representation.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {Boolean} */
    // `Boolean` conflicts with the native primitive type
    // eslint-disable-next-line @typescript-eslint/ban-types
    addBoolean(c) {
      const p = new w(this, c);
      return this.fields.push(p), p;
    }
    /**
     * Get access to the bit field for a given property.
     *
     * @param {String} property - the bit field of interest.
     *
     * @return {BitField} - the field associated with `property`, or
     * undefined if there is no such property.
     */
    fieldFor(c) {
      if (typeof c != "string")
        throw new TypeError("property must be string");
      for (const p of this.fields)
        if (p.property === c)
          return p;
    }
  }
  Y.BitStructure = h;
  class g {
    constructor(c, p, S) {
      if (!(c instanceof h))
        throw new TypeError("container must be a BitStructure");
      if (!Number.isInteger(p) || 0 >= p)
        throw new TypeError("bits must be positive integer");
      const T = 8 * c.span, H = c.fields.reduce((tt, it) => tt + it.bits, 0);
      if (p + H > T)
        throw new Error("bits too long for span remainder (" + (T - H) + " of " + T + " remain)");
      this.container = c, this.bits = p, this.valueMask = (1 << p) - 1, p === 32 && (this.valueMask = 4294967295), this.start = H, this.container.msb && (this.start = T - H - p), this.wordMask = A(this.valueMask << this.start), this.property = S;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field. */
    decode(c, p) {
      const S = this.container._packedGetValue();
      return A(S & this.wordMask) >>> this.start;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field.
     *
     * **NOTE** This is not a specialization of {@link
     * Layout#encode|Layout.encode} and there is no return value. */
    encode(c) {
      if (typeof c != "number" || !Number.isInteger(c) || c !== A(c & this.valueMask))
        throw new TypeError(s("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
      const p = this.container._packedGetValue(), S = A(c << this.start);
      this.container._packedSetValue(A(p & ~this.wordMask) | S);
    }
  }
  Y.BitField = g;
  class w extends g {
    constructor(c, p) {
      super(c, 1, p);
    }
    /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
     *
     * @returns {boolean} */
    decode(c, p) {
      return !!super.decode(c, p);
    }
    /** @override */
    encode(c) {
      typeof c == "boolean" && (c = +c), super.encode(c);
    }
  }
  Y.Boolean = w;
  class _ extends n {
    constructor(c, p) {
      if (!(c instanceof o && c.isCount() || Number.isInteger(c) && 0 <= c))
        throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
      let S = -1;
      c instanceof o || (S = c), super(S, p), this.length = c;
    }
    /** @override */
    getSpan(c, p) {
      let S = this.span;
      return 0 > S && (S = this.length.decode(c, p)), S;
    }
    /** @override */
    decode(c, p = 0) {
      let S = this.span;
      return 0 > S && (S = this.length.decode(c, p)), e(c).slice(p, p + S);
    }
    /** Implement {@link Layout#encode|encode} for {@link Blob}.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */
    encode(c, p, S) {
      let T = this.length;
      if (this.length instanceof o && (T = c.length), !(c instanceof Uint8Array && T === c.length))
        throw new TypeError(s("Blob.encode", this) + " requires (length " + T + ") Uint8Array as src");
      if (S + T > p.length)
        throw new RangeError("encoding overruns Uint8Array");
      const H = e(c);
      return e(p).write(H.toString("hex"), S, T, "hex"), this.length instanceof o && this.length.encode(T, p, S), T;
    }
  }
  Y.Blob = _;
  class C extends n {
    constructor(c) {
      super(-1, c);
    }
    /** @override */
    getSpan(c, p = 0) {
      t(c);
      let S = p;
      for (; S < c.length && c[S] !== 0; )
        S += 1;
      return 1 + S - p;
    }
    /** @override */
    decode(c, p = 0) {
      const S = this.getSpan(c, p);
      return e(c).slice(p, p + S - 1).toString("utf-8");
    }
    /** @override */
    encode(c, p, S = 0) {
      typeof c != "string" && (c = String(c));
      const T = r.Buffer.from(c, "utf8"), H = T.length;
      if (S + H > p.length)
        throw new RangeError("encoding overruns Buffer");
      const tt = e(p);
      return T.copy(tt, S), tt[S + H] = 0, H + 1;
    }
  }
  Y.CString = C;
  class b extends n {
    constructor(c, p) {
      if (typeof c == "string" && p === void 0 && (p = c, c = void 0), c === void 0)
        c = -1;
      else if (!Number.isInteger(c))
        throw new TypeError("maxSpan must be an integer");
      super(-1, p), this.maxSpan = c;
    }
    /** @override */
    getSpan(c, p = 0) {
      return t(c), c.length - p;
    }
    /** @override */
    decode(c, p = 0) {
      const S = this.getSpan(c, p);
      if (0 <= this.maxSpan && this.maxSpan < S)
        throw new RangeError("text length exceeds maxSpan");
      return e(c).slice(p, p + S).toString("utf-8");
    }
    /** @override */
    encode(c, p, S = 0) {
      typeof c != "string" && (c = String(c));
      const T = r.Buffer.from(c, "utf8"), H = T.length;
      if (0 <= this.maxSpan && this.maxSpan < H)
        throw new RangeError("text length exceeds maxSpan");
      if (S + H > p.length)
        throw new RangeError("encoding overruns Buffer");
      return T.copy(e(p), S), H;
    }
  }
  Y.UTF8 = b;
  class I extends n {
    constructor(c, p) {
      super(0, p), this.value = c;
    }
    /** @override */
    decode(c, p) {
      return this.value;
    }
    /** @override */
    encode(c, p, S) {
      return 0;
    }
  }
  return Y.Constant = I, Y.greedy = (a, c) => new u(a, c), Y.offset = (a, c, p) => new d(a, c, p), Y.u8 = (a) => new y(1, a), Y.u16 = (a) => new y(2, a), Y.u24 = (a) => new y(3, a), Y.u32 = (a) => new y(4, a), Y.u40 = (a) => new y(5, a), Y.u48 = (a) => new y(6, a), Y.nu64 = (a) => new M(a), Y.u16be = (a) => new R(2, a), Y.u24be = (a) => new R(3, a), Y.u32be = (a) => new R(4, a), Y.u40be = (a) => new R(5, a), Y.u48be = (a) => new R(6, a), Y.nu64be = (a) => new V(a), Y.s8 = (a) => new Q(1, a), Y.s16 = (a) => new Q(2, a), Y.s24 = (a) => new Q(3, a), Y.s32 = (a) => new Q(4, a), Y.s40 = (a) => new Q(5, a), Y.s48 = (a) => new Q(6, a), Y.ns64 = (a) => new j(a), Y.s16be = (a) => new D(2, a), Y.s24be = (a) => new D(3, a), Y.s32be = (a) => new D(4, a), Y.s40be = (a) => new D(5, a), Y.s48be = (a) => new D(6, a), Y.ns64be = (a) => new K(a), Y.f32 = (a) => new P(a), Y.f32be = (a) => new X(a), Y.f64 = (a) => new Z(a), Y.f64be = (a) => new st(a), Y.struct = (a, c, p) => new z(a, c, p), Y.bits = (a, c, p) => new h(a, c, p), Y.seq = (a, c, p) => new ot(a, c, p), Y.union = (a, c, p) => new q(a, c, p), Y.unionLayoutDiscriminator = (a, c) => new F(a, c), Y.blob = (a, c) => new _(a, c), Y.cstr = (a) => new C(a), Y.utf8 = (a, c) => new b(a, c), Y.constant = (a, c) => new I(a, c), Y;
}
var v = WA(), jA = 1, ZA = 2, $A = 3, ta = 4, ea = 5, na = 6, ra = 7, ia = 8, sa = 9, oa = 10, Aa = -32700, aa = -32603, ca = -32602, ua = -32601, fa = -32600, la = -32016, ha = -32015, da = -32014, ga = -32013, Ea = -32012, Ia = -32011, pa = -32010, Ba = -32009, _a = -32008, Ca = -32007, wa = -32006, ya = -32005, ma = -32004, Ra = -32003, Sa = -32002, ba = -32001, Na = 28e5, Qa = 2800001, va = 2800002, xa = 2800003, Oa = 2800004, Ta = 2800005, Ma = 2800006, La = 2800007, Da = 2800008, ka = 2800009, Ua = 2800010, Fa = 323e4, Ga = 32300001, Pa = 3230002, Ya = 3230003, Ha = 3230004, Ja = 361e4, qa = 3610001, Ka = 3610002, za = 3610003, Xa = 3610004, Va = 3610005, Wa = 3610006, ja = 3610007, Za = 3611e3, $a = 3704e3, tc = 3704001, ec = 3704002, nc = 3704003, rc = 3704004, ic = 4128e3, sc = 4128001, oc = 4128002, Ac = 4615e3, ac = 4615001, cc = 4615002, uc = 4615003, fc = 4615004, lc = 4615005, hc = 4615006, dc = 4615007, gc = 4615008, Ec = 4615009, Ic = 4615010, pc = 4615011, Bc = 4615012, _c = 4615013, Cc = 4615014, wc = 4615015, yc = 4615016, mc = 4615017, Rc = 4615018, Sc = 4615019, bc = 4615020, Nc = 4615021, Qc = 4615022, vc = 4615023, xc = 4615024, Oc = 4615025, Tc = 4615026, Mc = 4615027, Lc = 4615028, Dc = 4615029, kc = 4615030, Uc = 4615031, Fc = 4615032, Gc = 4615033, Pc = 4615034, Yc = 4615035, Hc = 4615036, Jc = 4615037, qc = 4615038, Kc = 4615039, zc = 4615040, Xc = 4615041, Vc = 4615042, Wc = 4615043, jc = 4615044, Zc = 4615045, $c = 4615046, tu = 4615047, eu = 4615048, nu = 4615049, ru = 4615050, iu = 4615051, su = 4615052, ou = 4615053, Au = 4615054, au = 5508e3, cu = 5508001, uu = 5508002, fu = 5508003, lu = 5508004, hu = 5508005, du = 5508006, gu = 5508007, Eu = 5508008, Iu = 5508009, pu = 5508010, Bu = 5508011, _u = 5663e3, Cu = 5663001, wu = 5663002, yu = 5663003, mu = 5663004, Ru = 5663005, Su = 5663006, bu = 5663007, Nu = 5663008, Qu = 5663009, vu = 5663010, xu = 5663011, Ou = 5663012, Tu = 5663013, Mu = 5663014, Lu = 5663015, Du = 5663016, ku = 5663017, Uu = 5663018, Fu = 5663019, Gu = 705e4, Pu = 7050001, Yu = 7050002, Hu = 7050003, Ju = 7050004, qu = 7050005, Ku = 7050006, zu = 7050007, Xu = 7050008, Vu = 7050009, Wu = 7050010, ju = 7050011, Zu = 7050012, $u = 7050013, tf = 7050014, ef = 7050015, nf = 7050016, rf = 7050017, sf = 7050018, of = 7050019, Af = 7050020, af = 7050021, cf = 7050022, uf = 7050023, ff = 7050024, lf = 7050025, hf = 7050026, df = 7050027, gf = 7050028, Ef = 7050029, If = 7050030, pf = 7050031, Bf = 7050032, _f = 7050033, Cf = 7050034, wf = 7050035, yf = 7050036, Xs = 8078e3, Vs = 8078001, mf = 8078002, Rf = 8078003, Ws = 8078004, js = 8078005, Zs = 8078006, Sf = 8078007, bf = 8078008, Nf = 8078009, Qf = 8078010, $s = 8078011, vf = 8078012, xf = 8078013, Of = 8078014, Tf = 8078015, Mf = 8078016, Lf = 8078017, Df = 8078018, kf = 8078019, Uf = 8078020, Ff = 8078021, Gf = 8078022, Pf = 81e5, Yf = 8100001, Hf = 8100002, Jf = 8100003, qf = 819e4, Kf = 8190001, zf = 8190002, Xf = 8190003, Vf = 8190004, Wf = 99e5, jf = 9900001, Zf = 9900002, $f = 9900003, tl = 9900004;
function to(r) {
  return Array.isArray(r) ? "%5B" + r.map(to).join(
    "%2C%20"
    /* ", " */
  ) + /* "]" */
  "%5D" : typeof r == "bigint" ? `${r}n` : encodeURIComponent(
    String(
      r != null && Object.getPrototypeOf(r) === null ? (
        // Plain objects with no prototype don't have a `toString` method.
        // Convert them before stringifying them.
        { ...r }
      ) : r
    )
  );
}
function el([r, t]) {
  return `${r}=${to(t)}`;
}
function nl(r) {
  const t = Object.entries(r).map(el).join("&");
  return btoa(t);
}
var rl = {
  [Fa]: "Account not found at address: $address",
  [Ha]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
  [Ya]: "Expected decoded account at address: $address",
  [Pa]: "Failed to decode account data at address: $address",
  [Ga]: "Accounts not found at addresses: $addresses",
  [ka]: "Unable to find a viable program address bump seed.",
  [va]: "$putativeAddress is not a base58-encoded address.",
  [Na]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
  [xa]: "The `CryptoKey` must be an `Ed25519` public key.",
  [Da]: "Invalid seeds; point must fall off the Ed25519 curve.",
  [Oa]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
  [Ma]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
  [La]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
  [Ta]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
  [Ua]: "Program address cannot end with PDA marker.",
  [Qa]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
  [ta]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
  [jA]: "The network has progressed past the last block for which this transaction could have been committed.",
  [Xs]: "Codec [$codecDescription] cannot decode empty byte arrays.",
  [Gf]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
  [Uf]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
  [js]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
  [Zs]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
  [Ws]: "Encoder and decoder must either both be fixed-size or variable-size.",
  [bf]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
  [mf]: "Expected a fixed-size codec, got a variable-size one.",
  [xf]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
  [Rf]: "Expected a variable-size codec, got a fixed-size one.",
  [kf]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
  [Vs]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
  [Df]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
  [Nf]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
  [Qf]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
  [Tf]: "Invalid literal union variant. Expected one of [$variants], got $value.",
  [Sf]: "Expected [$codecDescription] to have $expected items, got $actual.",
  [vf]: "Invalid value $value for base $base with alphabet $alphabet.",
  [Mf]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
  [$s]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
  [Of]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
  [Ff]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
  [Lf]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
  [Za]: "No random values implementation could be found.",
  [Ec]: "instruction requires an uninitialized account",
  [vc]: "instruction tries to borrow reference for an account which is already borrowed",
  [xc]: "instruction left account with an outstanding borrowed reference",
  [Nc]: "program other than the account's owner changed the size of the account data",
  [lc]: "account data too small for instruction",
  [Qc]: "instruction expected an executable account",
  [$c]: "An account does not have enough lamports to be rent-exempt",
  [eu]: "Program arithmetic overflowed",
  [Zc]: "Failed to serialize or deserialize account data: $encodedData",
  [Au]: "Builtin programs must consume compute units",
  [Fc]: "Cross-program invocation call depth too deep",
  [qc]: "Computational budget exceeded",
  [Tc]: "custom program error: #$code",
  [mc]: "instruction contains duplicate accounts",
  [Oc]: "instruction modifications of multiply-passed account differ",
  [kc]: "executable accounts must be rent exempt",
  [Lc]: "instruction changed executable accounts data",
  [Dc]: "instruction changed the balance of an executable account",
  [Rc]: "instruction changed executable bit of an account",
  [Cc]: "instruction modified data of an account it does not own",
  [_c]: "instruction spent from the balance of an account it does not own",
  [ac]: "generic instruction error",
  [ru]: "Provided owner is not allowed",
  [Wc]: "Account is immutable",
  [jc]: "Incorrect authority provided",
  [dc]: "incorrect program id for instruction",
  [hc]: "insufficient funds for instruction",
  [fc]: "invalid account data for instruction",
  [tu]: "Invalid account owner",
  [cc]: "invalid program argument",
  [Mc]: "program returned invalid error code",
  [uc]: "invalid instruction data",
  [Jc]: "Failed to reallocate account data",
  [Hc]: "Provided seeds do not result in a valid address",
  [iu]: "Accounts data allocations exceeded the maximum allowed per transaction",
  [su]: "Max accounts exceeded",
  [ou]: "Max instruction trace length exceeded",
  [Yc]: "Length of the seed is too long for address generation",
  [Gc]: "An account required by the instruction is missing",
  [gc]: "missing required signature for instruction",
  [Bc]: "instruction illegally modified the program id of an account",
  [bc]: "insufficient account keys for instruction",
  [Kc]: "Cross-program invocation with unauthorized signer or writable account",
  [zc]: "Failed to create program execution environment",
  [Vc]: "Program failed to compile",
  [Xc]: "Program failed to complete",
  [yc]: "instruction modified data of a read-only account",
  [wc]: "instruction changed the balance of a read-only account",
  [Pc]: "Cross-program invocation reentrancy not allowed for this instruction",
  [Sc]: "instruction modified rent epoch of an account",
  [pc]: "sum of account balances before and after instruction do not match",
  [Ic]: "instruction requires an initialized account",
  [Ac]: "",
  [Uc]: "Unsupported program id",
  [nu]: "Unsupported sysvar",
  [ic]: "The instruction does not have any accounts.",
  [sc]: "The instruction does not have any data.",
  [oc]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
  [ea]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
  [ZA]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
  [Zf]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [tl]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
  [jf]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [Wf]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [$f]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [aa]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
  [ca]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
  [fa]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
  [ua]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
  [Aa]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
  [Ea]: "$__serverMessage",
  [ba]: "$__serverMessage",
  [ma]: "$__serverMessage",
  [da]: "$__serverMessage",
  [pa]: "$__serverMessage",
  [Ba]: "$__serverMessage",
  [la]: "Minimum context slot has not been reached",
  [ya]: "Node is unhealthy; behind by $numSlotsBehind slots",
  [_a]: "No snapshot",
  [Sa]: "Transaction simulation failed",
  [Ca]: "$__serverMessage",
  [Ia]: "Transaction history is not available from this node",
  [wa]: "$__serverMessage",
  [ga]: "Transaction signature length mismatch",
  [Ra]: "Transaction signature verification failure",
  [ha]: "$__serverMessage",
  [$a]: "Key pair bytes must be of length 64, got $byteLength.",
  [tc]: "Expected private key bytes with length 32. Actual length: $actualLength.",
  [ec]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
  [rc]: "The provided private key does not match the provided public key.",
  [nc]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
  [na]: "Lamports value must be in the range [0, 2e64-1]",
  [ra]: "`$value` cannot be parsed as a `BigInt`",
  [oa]: "$message",
  [ia]: "`$value` cannot be parsed as a `Number`",
  [$A]: "No nonce account could be found at address `$nonceAccountAddress`",
  [qf]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
  [zf]: "WebSocket was closed before payload could be added to the send buffer",
  [Xf]: "WebSocket connection closed",
  [Vf]: "WebSocket failed to connect",
  [Kf]: "Failed to obtain a subscription id from the server",
  [Jf]: "Could not find an API plan for RPC method: `$method`",
  [Pf]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
  [Hf]: "HTTP error ($statusCode): $message",
  [Yf]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
  [au]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
  [cu]: "The provided value does not implement the `KeyPairSigner` interface",
  [fu]: "The provided value does not implement the `MessageModifyingSigner` interface",
  [lu]: "The provided value does not implement the `MessagePartialSigner` interface",
  [uu]: "The provided value does not implement any of the `MessageSigner` interfaces",
  [du]: "The provided value does not implement the `TransactionModifyingSigner` interface",
  [gu]: "The provided value does not implement the `TransactionPartialSigner` interface",
  [Eu]: "The provided value does not implement the `TransactionSendingSigner` interface",
  [hu]: "The provided value does not implement any of the `TransactionSigner` interfaces",
  [Iu]: "More than one `TransactionSendingSigner` was identified.",
  [pu]: "No `TransactionSendingSigner` was identified. Please provide a valid `ITransactionWithSingleSendingSigner` transaction.",
  [Bu]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
  [ja]: "Cannot export a non-extractable key.",
  [qa]: "No digest implementation could be found.",
  [Ja]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
  [Ka]: `This runtime does not support the generation of Ed25519 key pairs.

Install @solana/webcrypto-ed25519-polyfill and call its \`install\` function before generating keys in environments that do not support Ed25519.

For a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.`,
  [za]: "No signature verification implementation could be found.",
  [Xa]: "No key generation implementation could be found.",
  [Va]: "No signing implementation could be found.",
  [Wa]: "No key export implementation could be found.",
  [sa]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
  [nf]: "Transaction processing left an account with an outstanding borrowed reference",
  [Pu]: "Account in use",
  [Yu]: "Account loaded twice",
  [Hu]: "Attempt to debit an account but found no record of a prior credit.",
  [uf]: "Transaction loads an address table account that doesn't exist",
  [zu]: "This transaction has already been processed",
  [Xu]: "Blockhash not found",
  [Vu]: "Loader call chain is too deep",
  [ef]: "Transactions are currently disabled due to cluster maintenance",
  [If]: "Transaction contains a duplicate instruction ($index) that is not allowed",
  [qu]: "Insufficient funds for fee",
  [pf]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
  [Ku]: "This account may not be used to pay transaction fees",
  [ju]: "Transaction contains an invalid account reference",
  [lf]: "Transaction loads an address table account with invalid data",
  [hf]: "Transaction address table lookup uses an invalid index",
  [ff]: "Transaction loads an address table account with an invalid owner",
  [_f]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
  [$u]: "This program may not be used for executing instructions",
  [df]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
  [of]: "Transaction loads a writable account that cannot be written",
  [Bf]: "Transaction exceeded max loaded accounts data size cap",
  [Wu]: "Transaction requires a fee but has no signature present",
  [Ju]: "Attempt to load a program that does not exist",
  [wf]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
  [Cf]: "ResanitizationNeeded",
  [tf]: "Transaction failed to sanitize accounts offsets correctly",
  [Zu]: "Transaction did not pass signature verification",
  [cf]: "Transaction locked too many accounts",
  [yf]: "Sum of account balances before and after transaction do not match",
  [Gu]: "The transaction failed with the error `$errorName`",
  [sf]: "Transaction version is unsupported",
  [af]: "Transaction would exceed account data limit within the block",
  [Ef]: "Transaction would exceed total account data limit",
  [Af]: "Transaction would exceed max account limit within the block",
  [rf]: "Transaction would exceed max Block Cost Limit",
  [gf]: "Transaction would exceed max Vote Cost Limit",
  [Lu]: "Attempted to sign a transaction with an address that is not a signer for it",
  [vu]: "Transaction is missing an address at index: $index.",
  [Du]: "Transaction has no expected signers therefore it cannot be encoded",
  [wu]: "Transaction does not have a blockhash lifetime",
  [yu]: "Transaction is not a durable nonce transaction",
  [Ru]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
  [Su]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
  [Nu]: "No fee payer set in CompiledTransaction",
  [bu]: "Could not find program address at index $index",
  [Uu]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
  [Fu]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
  [xu]: "Transaction is missing a fee payer.",
  [Ou]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
  [Mu]: "Transaction first instruction is not advance nonce account instruction.",
  [Tu]: "Transaction with no instructions cannot be durable nonce transaction.",
  [_u]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
  [Cu]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
  [ku]: "The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",
  [Qu]: "Transaction is missing signatures for addresses: $addresses.",
  [mu]: "Transaction version must be in the range [0, 127]. `$actualVersion` given"
}, Oe = "i", be = "t";
function il(r, t = {}) {
  const e = rl[r];
  if (e.length === 0)
    return "";
  let n;
  function s(o) {
    if (n[be] === 2) {
      const u = e.slice(n[Oe] + 1, o);
      i.push(
        u in t ? (
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${t[u]}`
        ) : `$${u}`
      );
    } else n[be] === 1 && i.push(e.slice(n[Oe], o));
  }
  const i = [];
  return e.split("").forEach((o, u) => {
    if (u === 0) {
      n = {
        [Oe]: 0,
        [be]: e[0] === "\\" ? 0 : e[0] === "$" ? 2 : 1
        /* Text */
      };
      return;
    }
    let d;
    switch (n[be]) {
      case 0:
        d = {
          [Oe]: u,
          [be]: 1
          /* Text */
        };
        break;
      case 1:
        o === "\\" ? d = {
          [Oe]: u,
          [be]: 0
          /* EscapeSequence */
        } : o === "$" && (d = {
          [Oe]: u,
          [be]: 2
          /* Variable */
        });
        break;
      case 2:
        o === "\\" ? d = {
          [Oe]: u,
          [be]: 0
          /* EscapeSequence */
        } : o === "$" ? d = {
          [Oe]: u,
          [be]: 2
          /* Variable */
        } : o.match(/\w/) || (d = {
          [Oe]: u,
          [be]: 1
          /* Text */
        });
        break;
    }
    d && (n !== d && s(u), n = d);
  }), s(), i.join("");
}
function sl(r, t = {}) {
  if (process.env.NODE_ENV !== "production")
    return il(r, t);
  {
    let e = `Solana error #${r}; Decode this error by running \`npx @solana/errors decode -- ${r}`;
    return Object.keys(t).length && (e += ` '${nl(t)}'`), `${e}\``;
  }
}
var on = class extends Error {
  constructor(...[t, e]) {
    let n, s;
    if (e) {
      const { cause: o, ...u } = e;
      o && (s = { cause: o }), Object.keys(u).length > 0 && (n = u);
    }
    const i = sl(t, n);
    super(i, s);
    /**
     * Indicates the root cause of this {@link SolanaError}, if any.
     *
     * For example, a transaction error might have an instruction error as its root cause. In this
     * case, you will be able to access the instruction error on the transaction error as `cause`.
     */
    ne(this, "cause", this.cause);
    /**
     * Contains context that can assist in understanding or recovering from a {@link SolanaError}.
     */
    ne(this, "context");
    this.context = {
      __code: t,
      ...n
    }, this.name = "SolanaError";
  }
};
function ol(r, t) {
  return "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(r);
}
function Al(r) {
  return Object.freeze({
    ...r,
    encode: (t) => {
      const e = new Uint8Array(ol(t, r));
      return r.write(t, e, 0), e;
    }
  });
}
function al(r) {
  return Object.freeze({
    ...r,
    decode: (t, e = 0) => r.read(t, e)[0]
  });
}
function nn(r) {
  return "fixedSize" in r && typeof r.fixedSize == "number";
}
function cl(r, t) {
  if (nn(r) !== nn(t))
    throw new on(Ws);
  if (nn(r) && nn(t) && r.fixedSize !== t.fixedSize)
    throw new on(js, {
      decoderFixedSize: t.fixedSize,
      encoderFixedSize: r.fixedSize
    });
  if (!nn(r) && !nn(t) && r.maxSize !== t.maxSize)
    throw new on(Zs, {
      decoderMaxSize: t.maxSize,
      encoderMaxSize: r.maxSize
    });
  return {
    ...t,
    ...r,
    decode: t.decode,
    encode: r.encode,
    read: t.read,
    write: r.write
  };
}
function ul(r, t, e = 0) {
  if (t.length - e <= 0)
    throw new on(Xs, {
      codecDescription: r
    });
}
function fl(r, t, e, n = 0) {
  const s = e.length - n;
  if (s < t)
    throw new on(Vs, {
      bytesLength: s,
      codecDescription: r,
      expected: t
    });
}
function ll(r, t, e, n) {
  if (n < t || n > e)
    throw new on($s, {
      codecDescription: r,
      max: e,
      min: t,
      value: n
    });
}
function eo(r) {
  return (r == null ? void 0 : r.endian) !== 1;
}
function hl(r) {
  return Al({
    fixedSize: r.size,
    write(t, e, n) {
      r.range && ll(r.name, r.range[0], r.range[1], t);
      const s = new ArrayBuffer(r.size);
      return r.set(new DataView(s), t, eo(r.config)), e.set(new Uint8Array(s), n), n + r.size;
    }
  });
}
function dl(r) {
  return al({
    fixedSize: r.size,
    read(t, e = 0) {
      ul(r.name, t, e), fl(r.name, r.size, t, e);
      const n = new DataView(gl(t, e, r.size));
      return [r.get(n, eo(r.config)), e + r.size];
    }
  });
}
function gl(r, t, e) {
  const n = r.byteOffset + (t ?? 0), s = e ?? r.byteLength;
  return r.buffer.slice(n, n + s);
}
var El = (r = {}) => hl({
  config: r,
  name: "u64",
  range: [0n, BigInt("0xffffffffffffffff")],
  set: (t, e, n) => t.setBigUint64(0, BigInt(e), n),
  size: 8
}), Il = (r = {}) => dl({
  config: r,
  get: (t, e) => t.getBigUint64(0, e),
  name: "u64",
  size: 8
}), pl = (r = {}) => cl(El(r), Il(r));
class Bl extends TypeError {
  constructor(t, e) {
    let n;
    const { message: s, explanation: i, ...o } = t, { path: u } = t, d = u.length === 0 ? s : `At path: ${u.join(".")} -- ${s}`;
    super(i ?? d), i != null && (this.cause = d), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n ?? (n = [t, ...e()]);
  }
}
function _l(r) {
  return Nn(r) && typeof r[Symbol.iterator] == "function";
}
function Nn(r) {
  return typeof r == "object" && r != null;
}
function Wn(r) {
  return Nn(r) && !Array.isArray(r);
}
function me(r) {
  return typeof r == "symbol" ? r.toString() : typeof r == "string" ? JSON.stringify(r) : `${r}`;
}
function Cl(r) {
  const { done: t, value: e } = r.next();
  return t ? void 0 : e;
}
function wl(r, t, e, n) {
  if (r === !0)
    return;
  r === !1 ? r = {} : typeof r == "string" && (r = { message: r });
  const { path: s, branch: i } = t, { type: o } = e, { refinement: u, message: d = `Expected a value of type \`${o}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${me(n)}\`` } = r;
  return {
    value: n,
    type: o,
    refinement: u,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...r,
    message: d
  };
}
function* ss(r, t, e, n) {
  _l(r) || (r = [r]);
  for (const s of r) {
    const i = wl(s, t, e, n);
    i && (yield i);
  }
}
function* Ci(r, t, e = {}) {
  const { path: n = [], branch: s = [r], coerce: i = !1, mask: o = !1 } = e, u = { path: n, branch: s, mask: o };
  i && (r = t.coercer(r, u));
  let d = "valid";
  for (const y of t.validator(r, u))
    y.explanation = e.message, d = "not_valid", yield [y, void 0];
  for (let [y, R, Q] of t.entries(r, u)) {
    const D = Ci(R, Q, {
      path: y === void 0 ? n : [...n, y],
      branch: y === void 0 ? s : [...s, R],
      coerce: i,
      mask: o,
      message: e.message
    });
    for (const x of D)
      x[0] ? (d = x[0].refinement != null ? "not_refined" : "not_valid", yield [x[0], void 0]) : i && (R = x[1], y === void 0 ? r = R : r instanceof Map ? r.set(y, R) : r instanceof Set ? r.add(R) : Nn(r) && (R !== void 0 || y in r) && (r[y] = R));
  }
  if (d !== "not_valid")
    for (const y of t.refiner(r, u))
      y.explanation = e.message, d = "not_refined", yield [y, void 0];
  d === "valid" && (yield [void 0, r]);
}
let Qe = class {
  constructor(t) {
    const { type: e, schema: n, validator: s, refiner: i, coercer: o = (d) => d, entries: u = function* () {
    } } = t;
    this.type = e, this.schema = n, this.entries = u, this.coercer = o, s ? this.validator = (d, y) => {
      const R = s(d, y);
      return ss(R, y, this, d);
    } : this.validator = () => [], i ? this.refiner = (d, y) => {
      const R = i(d, y);
      return ss(R, y, this, d);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t, e) {
    return yl(t, this, e);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t, e) {
    return et(t, this, e);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return no(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema. Masking applies recursively to
   * props of `object` structs only.
   */
  mask(t, e) {
    return ml(t, this, e);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `coerce` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful. Also, `mask` will turn on
   * masking of the unknown `object` props recursively if passed.
   */
  validate(t, e = {}) {
    return Qn(t, this, e);
  }
};
function yl(r, t, e) {
  const n = Qn(r, t, { message: e });
  if (n[0])
    throw n[0];
}
function et(r, t, e) {
  const n = Qn(r, t, { coerce: !0, message: e });
  if (n[0])
    throw n[0];
  return n[1];
}
function ml(r, t, e) {
  const n = Qn(r, t, { coerce: !0, mask: !0, message: e });
  if (n[0])
    throw n[0];
  return n[1];
}
function no(r, t) {
  return !Qn(r, t)[0];
}
function Qn(r, t, e = {}) {
  const n = Ci(r, t, e), s = Cl(n);
  return s[0] ? [new Bl(s[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, s[1]];
}
function Ve(r, t) {
  return new Qe({ type: r, schema: null, validator: t });
}
function Rl() {
  return Ve("any", () => !0);
}
function nt(r) {
  return new Qe({
    type: "array",
    schema: r,
    *entries(t) {
      if (r && Array.isArray(t))
        for (const [e, n] of t.entries())
          yield [e, n, r];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array value, but received: ${me(t)}`;
    }
  });
}
function Ne() {
  return Ve("boolean", (r) => typeof r == "boolean");
}
function wi(r) {
  return Ve("instance", (t) => t instanceof r || `Expected a \`${r.name}\` instance, but received: ${me(t)}`);
}
function Ot(r) {
  const t = me(r), e = typeof r;
  return new Qe({
    type: "literal",
    schema: e === "string" || e === "number" || e === "boolean" ? r : null,
    validator(n) {
      return n === r || `Expected the literal \`${t}\`, but received: ${me(n)}`;
    }
  });
}
function Sl() {
  return Ve("never", () => !1);
}
function rt(r) {
  return new Qe({
    ...r,
    validator: (t, e) => t === null || r.validator(t, e),
    refiner: (t, e) => t === null || r.refiner(t, e)
  });
}
function G() {
  return Ve("number", (r) => typeof r == "number" && !isNaN(r) || `Expected a number, but received: ${me(r)}`);
}
function at(r) {
  return new Qe({
    ...r,
    validator: (t, e) => t === void 0 || r.validator(t, e),
    refiner: (t, e) => t === void 0 || r.refiner(t, e)
  });
}
function ro(r, t) {
  return new Qe({
    type: "record",
    schema: null,
    *entries(e) {
      if (Nn(e))
        for (const n in e) {
          const s = e[n];
          yield [n, n, r], yield [n, s, t];
        }
    },
    validator(e) {
      return Wn(e) || `Expected an object, but received: ${me(e)}`;
    },
    coercer(e) {
      return Wn(e) ? { ...e } : e;
    }
  });
}
function $() {
  return Ve("string", (r) => typeof r == "string" || `Expected a string, but received: ${me(r)}`);
}
function yi(r) {
  const t = Sl();
  return new Qe({
    type: "tuple",
    schema: null,
    *entries(e) {
      if (Array.isArray(e)) {
        const n = Math.max(r.length, e.length);
        for (let s = 0; s < n; s++)
          yield [s, e[s], r[s] || t];
      }
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array, but received: ${me(e)}`;
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    }
  });
}
function W(r) {
  const t = Object.keys(r);
  return new Qe({
    type: "type",
    schema: r,
    *entries(e) {
      if (Nn(e))
        for (const n of t)
          yield [n, e[n], r[n]];
    },
    validator(e) {
      return Wn(e) || `Expected an object, but received: ${me(e)}`;
    },
    coercer(e) {
      return Wn(e) ? { ...e } : e;
    }
  });
}
function ge(r) {
  const t = r.map((e) => e.type).join(" | ");
  return new Qe({
    type: "union",
    schema: null,
    coercer(e, n) {
      for (const s of r) {
        const [i, o] = s.validate(e, {
          coerce: !0,
          mask: n.mask
        });
        if (!i)
          return o;
      }
      return e;
    },
    validator(e, n) {
      const s = [];
      for (const i of r) {
        const [...o] = Ci(e, i, n), [u] = o;
        if (u[0])
          for (const [d] of o)
            d && s.push(d);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${me(e)}`,
        ...s
      ];
    }
  });
}
function dn() {
  return Ve("unknown", () => !0);
}
function vn(r, t, e) {
  return new Qe({
    ...r,
    coercer: (n, s) => no(n, t) ? r.coercer(e(n, s), s) : r.coercer(n, s)
  });
}
var kn, bl = new Uint8Array(16);
function io() {
  if (!kn && (kn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !kn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return kn(bl);
}
const Nl = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function rr(r) {
  return typeof r == "string" && Nl.test(r);
}
var se = [];
for (var Gr = 0; Gr < 256; ++Gr)
  se.push((Gr + 256).toString(16).substr(1));
function ir(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = (se[r[t + 0]] + se[r[t + 1]] + se[r[t + 2]] + se[r[t + 3]] + "-" + se[r[t + 4]] + se[r[t + 5]] + "-" + se[r[t + 6]] + se[r[t + 7]] + "-" + se[r[t + 8]] + se[r[t + 9]] + "-" + se[r[t + 10]] + se[r[t + 11]] + se[r[t + 12]] + se[r[t + 13]] + se[r[t + 14]] + se[r[t + 15]]).toLowerCase();
  if (!rr(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
}
var os, Pr, Yr = 0, Hr = 0;
function Ql(r, t, e) {
  var n = t && e || 0, s = t || new Array(16);
  r = r || {};
  var i = r.node || os, o = r.clockseq !== void 0 ? r.clockseq : Pr;
  if (i == null || o == null) {
    var u = r.random || (r.rng || io)();
    i == null && (i = os = [u[0] | 1, u[1], u[2], u[3], u[4], u[5]]), o == null && (o = Pr = (u[6] << 8 | u[7]) & 16383);
  }
  var d = r.msecs !== void 0 ? r.msecs : Date.now(), y = r.nsecs !== void 0 ? r.nsecs : Hr + 1, R = d - Yr + (y - Hr) / 1e4;
  if (R < 0 && r.clockseq === void 0 && (o = o + 1 & 16383), (R < 0 || d > Yr) && r.nsecs === void 0 && (y = 0), y >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Yr = d, Hr = y, Pr = o, d += 122192928e5;
  var Q = ((d & 268435455) * 1e4 + y) % 4294967296;
  s[n++] = Q >>> 24 & 255, s[n++] = Q >>> 16 & 255, s[n++] = Q >>> 8 & 255, s[n++] = Q & 255;
  var D = d / 4294967296 * 1e4 & 268435455;
  s[n++] = D >>> 8 & 255, s[n++] = D & 255, s[n++] = D >>> 24 & 15 | 16, s[n++] = D >>> 16 & 255, s[n++] = o >>> 8 | 128, s[n++] = o & 255;
  for (var x = 0; x < 6; ++x)
    s[n + x] = i[x];
  return t || ir(s);
}
function so(r) {
  if (!rr(r))
    throw TypeError("Invalid UUID");
  var t, e = new Uint8Array(16);
  return e[0] = (t = parseInt(r.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(r.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(r.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(r.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e;
}
function vl(r) {
  r = unescape(encodeURIComponent(r));
  for (var t = [], e = 0; e < r.length; ++e)
    t.push(r.charCodeAt(e));
  return t;
}
var xl = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Ol = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function oo(r, t, e) {
  function n(s, i, o, u) {
    if (typeof s == "string" && (s = vl(s)), typeof i == "string" && (i = so(i)), i.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var d = new Uint8Array(16 + s.length);
    if (d.set(i), d.set(s, i.length), d = e(d), d[6] = d[6] & 15 | t, d[8] = d[8] & 63 | 128, o) {
      u = u || 0;
      for (var y = 0; y < 16; ++y)
        o[u + y] = d[y];
      return o;
    }
    return ir(d);
  }
  try {
    n.name = r;
  } catch {
  }
  return n.DNS = xl, n.URL = Ol, n;
}
function Tl(r) {
  if (typeof r == "string") {
    var t = unescape(encodeURIComponent(r));
    r = new Uint8Array(t.length);
    for (var e = 0; e < t.length; ++e)
      r[e] = t.charCodeAt(e);
  }
  return Ml(Ll(Dl(r), r.length * 8));
}
function Ml(r) {
  for (var t = [], e = r.length * 32, n = "0123456789abcdef", s = 0; s < e; s += 8) {
    var i = r[s >> 5] >>> s % 32 & 255, o = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    t.push(o);
  }
  return t;
}
function Ao(r) {
  return (r + 64 >>> 9 << 4) + 14 + 1;
}
function Ll(r, t) {
  r[t >> 5] |= 128 << t % 32, r[Ao(t) - 1] = t;
  for (var e = 1732584193, n = -271733879, s = -1732584194, i = 271733878, o = 0; o < r.length; o += 16) {
    var u = e, d = n, y = s, R = i;
    e = ce(e, n, s, i, r[o], 7, -680876936), i = ce(i, e, n, s, r[o + 1], 12, -389564586), s = ce(s, i, e, n, r[o + 2], 17, 606105819), n = ce(n, s, i, e, r[o + 3], 22, -1044525330), e = ce(e, n, s, i, r[o + 4], 7, -176418897), i = ce(i, e, n, s, r[o + 5], 12, 1200080426), s = ce(s, i, e, n, r[o + 6], 17, -1473231341), n = ce(n, s, i, e, r[o + 7], 22, -45705983), e = ce(e, n, s, i, r[o + 8], 7, 1770035416), i = ce(i, e, n, s, r[o + 9], 12, -1958414417), s = ce(s, i, e, n, r[o + 10], 17, -42063), n = ce(n, s, i, e, r[o + 11], 22, -1990404162), e = ce(e, n, s, i, r[o + 12], 7, 1804603682), i = ce(i, e, n, s, r[o + 13], 12, -40341101), s = ce(s, i, e, n, r[o + 14], 17, -1502002290), n = ce(n, s, i, e, r[o + 15], 22, 1236535329), e = ue(e, n, s, i, r[o + 1], 5, -165796510), i = ue(i, e, n, s, r[o + 6], 9, -1069501632), s = ue(s, i, e, n, r[o + 11], 14, 643717713), n = ue(n, s, i, e, r[o], 20, -373897302), e = ue(e, n, s, i, r[o + 5], 5, -701558691), i = ue(i, e, n, s, r[o + 10], 9, 38016083), s = ue(s, i, e, n, r[o + 15], 14, -660478335), n = ue(n, s, i, e, r[o + 4], 20, -405537848), e = ue(e, n, s, i, r[o + 9], 5, 568446438), i = ue(i, e, n, s, r[o + 14], 9, -1019803690), s = ue(s, i, e, n, r[o + 3], 14, -187363961), n = ue(n, s, i, e, r[o + 8], 20, 1163531501), e = ue(e, n, s, i, r[o + 13], 5, -1444681467), i = ue(i, e, n, s, r[o + 2], 9, -51403784), s = ue(s, i, e, n, r[o + 7], 14, 1735328473), n = ue(n, s, i, e, r[o + 12], 20, -1926607734), e = fe(e, n, s, i, r[o + 5], 4, -378558), i = fe(i, e, n, s, r[o + 8], 11, -2022574463), s = fe(s, i, e, n, r[o + 11], 16, 1839030562), n = fe(n, s, i, e, r[o + 14], 23, -35309556), e = fe(e, n, s, i, r[o + 1], 4, -1530992060), i = fe(i, e, n, s, r[o + 4], 11, 1272893353), s = fe(s, i, e, n, r[o + 7], 16, -155497632), n = fe(n, s, i, e, r[o + 10], 23, -1094730640), e = fe(e, n, s, i, r[o + 13], 4, 681279174), i = fe(i, e, n, s, r[o], 11, -358537222), s = fe(s, i, e, n, r[o + 3], 16, -722521979), n = fe(n, s, i, e, r[o + 6], 23, 76029189), e = fe(e, n, s, i, r[o + 9], 4, -640364487), i = fe(i, e, n, s, r[o + 12], 11, -421815835), s = fe(s, i, e, n, r[o + 15], 16, 530742520), n = fe(n, s, i, e, r[o + 2], 23, -995338651), e = le(e, n, s, i, r[o], 6, -198630844), i = le(i, e, n, s, r[o + 7], 10, 1126891415), s = le(s, i, e, n, r[o + 14], 15, -1416354905), n = le(n, s, i, e, r[o + 5], 21, -57434055), e = le(e, n, s, i, r[o + 12], 6, 1700485571), i = le(i, e, n, s, r[o + 3], 10, -1894986606), s = le(s, i, e, n, r[o + 10], 15, -1051523), n = le(n, s, i, e, r[o + 1], 21, -2054922799), e = le(e, n, s, i, r[o + 8], 6, 1873313359), i = le(i, e, n, s, r[o + 15], 10, -30611744), s = le(s, i, e, n, r[o + 6], 15, -1560198380), n = le(n, s, i, e, r[o + 13], 21, 1309151649), e = le(e, n, s, i, r[o + 4], 6, -145523070), i = le(i, e, n, s, r[o + 11], 10, -1120210379), s = le(s, i, e, n, r[o + 2], 15, 718787259), n = le(n, s, i, e, r[o + 9], 21, -343485551), e = He(e, u), n = He(n, d), s = He(s, y), i = He(i, R);
  }
  return [e, n, s, i];
}
function Dl(r) {
  if (r.length === 0)
    return [];
  for (var t = r.length * 8, e = new Uint32Array(Ao(t)), n = 0; n < t; n += 8)
    e[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return e;
}
function He(r, t) {
  var e = (r & 65535) + (t & 65535), n = (r >> 16) + (t >> 16) + (e >> 16);
  return n << 16 | e & 65535;
}
function kl(r, t) {
  return r << t | r >>> 32 - t;
}
function sr(r, t, e, n, s, i) {
  return He(kl(He(He(t, r), He(n, i)), s), e);
}
function ce(r, t, e, n, s, i, o) {
  return sr(t & e | ~t & n, r, t, s, i, o);
}
function ue(r, t, e, n, s, i, o) {
  return sr(t & n | e & ~n, r, t, s, i, o);
}
function fe(r, t, e, n, s, i, o) {
  return sr(t ^ e ^ n, r, t, s, i, o);
}
function le(r, t, e, n, s, i, o) {
  return sr(e ^ (t | ~n), r, t, s, i, o);
}
var Ul = oo("v3", 48, Tl);
function Fl(r, t, e) {
  r = r || {};
  var n = r.random || (r.rng || io)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    e = e || 0;
    for (var s = 0; s < 16; ++s)
      t[e + s] = n[s];
    return t;
  }
  return ir(n);
}
function Gl(r, t, e, n) {
  switch (r) {
    case 0:
      return t & e ^ ~t & n;
    case 1:
      return t ^ e ^ n;
    case 2:
      return t & e ^ t & n ^ e & n;
    case 3:
      return t ^ e ^ n;
  }
}
function Jr(r, t) {
  return r << t | r >>> 32 - t;
}
function Pl(r) {
  var t = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    var n = unescape(encodeURIComponent(r));
    r = [];
    for (var s = 0; s < n.length; ++s)
      r.push(n.charCodeAt(s));
  } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  for (var i = r.length / 4 + 2, o = Math.ceil(i / 16), u = new Array(o), d = 0; d < o; ++d) {
    for (var y = new Uint32Array(16), R = 0; R < 16; ++R)
      y[R] = r[d * 64 + R * 4] << 24 | r[d * 64 + R * 4 + 1] << 16 | r[d * 64 + R * 4 + 2] << 8 | r[d * 64 + R * 4 + 3];
    u[d] = y;
  }
  u[o - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), u[o - 1][14] = Math.floor(u[o - 1][14]), u[o - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (var Q = 0; Q < o; ++Q) {
    for (var D = new Uint32Array(80), x = 0; x < 16; ++x)
      D[x] = u[Q][x];
    for (var L = 16; L < 80; ++L)
      D[L] = Jr(D[L - 3] ^ D[L - 8] ^ D[L - 14] ^ D[L - 16], 1);
    for (var N = e[0], M = e[1], V = e[2], j = e[3], K = e[4], P = 0; P < 80; ++P) {
      var X = Math.floor(P / 20), Z = Jr(N, 5) + Gl(X, M, V, j) + K + t[X] + D[P] >>> 0;
      K = j, j = V, V = Jr(M, 30) >>> 0, M = N, N = Z;
    }
    e[0] = e[0] + N >>> 0, e[1] = e[1] + M >>> 0, e[2] = e[2] + V >>> 0, e[3] = e[3] + j >>> 0, e[4] = e[4] + K >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var Yl = oo("v5", 80, Pl);
const Hl = "00000000-0000-0000-0000-000000000000";
function Jl(r) {
  if (!rr(r))
    throw TypeError("Invalid UUID");
  return parseInt(r.substr(14, 1), 16);
}
const ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: Hl,
  parse: so,
  stringify: ir,
  v1: Ql,
  v3: Ul,
  v4: Fl,
  v5: Yl,
  validate: rr,
  version: Jl
}, Symbol.toStringTag, { value: "Module" })), ao = /* @__PURE__ */ ui(ql);
var qr, As;
function Kl() {
  if (As) return qr;
  As = 1;
  const r = ao.v4;
  return qr = function(e, n, s, i) {
    if (typeof e != "string")
      throw new TypeError(e + " must be a string");
    i = i || {};
    const o = typeof i.version == "number" ? i.version : 2;
    if (o !== 1 && o !== 2)
      throw new TypeError(o + " must be 1 or 2");
    const u = {
      method: e
    };
    if (o === 2 && (u.jsonrpc = "2.0"), n) {
      if (typeof n != "object" && !Array.isArray(n))
        throw new TypeError(n + " must be an object, array or omitted");
      u.params = n;
    }
    if (typeof s > "u") {
      const d = typeof i.generator == "function" ? i.generator : function() {
        return r();
      };
      u.id = d(u, i);
    } else o === 2 && s === null ? i.notificationIdNull && (u.id = null) : u.id = s;
    return u;
  }, qr;
}
var Kr, as;
function zl() {
  if (as) return Kr;
  as = 1;
  const r = ao.v4, t = Kl(), e = function(n, s) {
    if (!(this instanceof e))
      return new e(n, s);
    s || (s = {}), this.options = {
      reviver: typeof s.reviver < "u" ? s.reviver : null,
      replacer: typeof s.replacer < "u" ? s.replacer : null,
      generator: typeof s.generator < "u" ? s.generator : function() {
        return r();
      },
      version: typeof s.version < "u" ? s.version : 2,
      notificationIdNull: typeof s.notificationIdNull == "boolean" ? s.notificationIdNull : !1
    }, this.callServer = n;
  };
  return Kr = e, e.prototype.request = function(n, s, i, o) {
    const u = this;
    let d = null;
    const y = Array.isArray(n) && typeof s == "function";
    if (this.options.version === 1 && y)
      throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (y || !y && n && typeof n == "object" && typeof s == "function")
      o = s, d = n;
    else {
      typeof i == "function" && (o = i, i = void 0);
      const D = typeof o == "function";
      try {
        d = t(n, s, i, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull
        });
      } catch (x) {
        if (D)
          return o(x);
        throw x;
      }
      if (!D)
        return d;
    }
    let Q;
    try {
      Q = JSON.stringify(d, this.options.replacer);
    } catch (D) {
      return o(D);
    }
    return this.callServer(Q, function(D, x) {
      u._parseResponse(D, x, o);
    }), d;
  }, e.prototype._parseResponse = function(n, s, i) {
    if (n) {
      i(n);
      return;
    }
    if (!s)
      return i();
    let o;
    try {
      o = JSON.parse(s, this.options.reviver);
    } catch (u) {
      return i(u);
    }
    if (i.length === 3)
      if (Array.isArray(o)) {
        const u = function(y) {
          return typeof y.error < "u";
        }, d = function(y) {
          return !u(y);
        };
        return i(null, o.filter(u), o.filter(d));
      } else
        return i(null, o.error, o.result);
    i(null, o);
  }, Kr;
}
var Xl = zl();
const Vl = /* @__PURE__ */ tr(Xl);
var zr = { exports: {} }, cs;
function Wl() {
  return cs || (cs = 1, function(r) {
    var t = Object.prototype.hasOwnProperty, e = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (e = !1));
    function s(d, y, R) {
      this.fn = d, this.context = y, this.once = R || !1;
    }
    function i(d, y, R, Q, D) {
      if (typeof R != "function")
        throw new TypeError("The listener must be a function");
      var x = new s(R, Q || d, D), L = e ? e + y : y;
      return d._events[L] ? d._events[L].fn ? d._events[L] = [d._events[L], x] : d._events[L].push(x) : (d._events[L] = x, d._eventsCount++), d;
    }
    function o(d, y) {
      --d._eventsCount === 0 ? d._events = new n() : delete d._events[y];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var y = [], R, Q;
      if (this._eventsCount === 0) return y;
      for (Q in R = this._events)
        t.call(R, Q) && y.push(e ? Q.slice(1) : Q);
      return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(R)) : y;
    }, u.prototype.listeners = function(y) {
      var R = e ? e + y : y, Q = this._events[R];
      if (!Q) return [];
      if (Q.fn) return [Q.fn];
      for (var D = 0, x = Q.length, L = new Array(x); D < x; D++)
        L[D] = Q[D].fn;
      return L;
    }, u.prototype.listenerCount = function(y) {
      var R = e ? e + y : y, Q = this._events[R];
      return Q ? Q.fn ? 1 : Q.length : 0;
    }, u.prototype.emit = function(y, R, Q, D, x, L) {
      var N = e ? e + y : y;
      if (!this._events[N]) return !1;
      var M = this._events[N], V = arguments.length, j, K;
      if (M.fn) {
        switch (M.once && this.removeListener(y, M.fn, void 0, !0), V) {
          case 1:
            return M.fn.call(M.context), !0;
          case 2:
            return M.fn.call(M.context, R), !0;
          case 3:
            return M.fn.call(M.context, R, Q), !0;
          case 4:
            return M.fn.call(M.context, R, Q, D), !0;
          case 5:
            return M.fn.call(M.context, R, Q, D, x), !0;
          case 6:
            return M.fn.call(M.context, R, Q, D, x, L), !0;
        }
        for (K = 1, j = new Array(V - 1); K < V; K++)
          j[K - 1] = arguments[K];
        M.fn.apply(M.context, j);
      } else {
        var P = M.length, X;
        for (K = 0; K < P; K++)
          switch (M[K].once && this.removeListener(y, M[K].fn, void 0, !0), V) {
            case 1:
              M[K].fn.call(M[K].context);
              break;
            case 2:
              M[K].fn.call(M[K].context, R);
              break;
            case 3:
              M[K].fn.call(M[K].context, R, Q);
              break;
            case 4:
              M[K].fn.call(M[K].context, R, Q, D);
              break;
            default:
              if (!j) for (X = 1, j = new Array(V - 1); X < V; X++)
                j[X - 1] = arguments[X];
              M[K].fn.apply(M[K].context, j);
          }
      }
      return !0;
    }, u.prototype.on = function(y, R, Q) {
      return i(this, y, R, Q, !1);
    }, u.prototype.once = function(y, R, Q) {
      return i(this, y, R, Q, !0);
    }, u.prototype.removeListener = function(y, R, Q, D) {
      var x = e ? e + y : y;
      if (!this._events[x]) return this;
      if (!R)
        return o(this, x), this;
      var L = this._events[x];
      if (L.fn)
        L.fn === R && (!D || L.once) && (!Q || L.context === Q) && o(this, x);
      else {
        for (var N = 0, M = [], V = L.length; N < V; N++)
          (L[N].fn !== R || D && !L[N].once || Q && L[N].context !== Q) && M.push(L[N]);
        M.length ? this._events[x] = M.length === 1 ? M[0] : M : o(this, x);
      }
      return this;
    }, u.prototype.removeAllListeners = function(y) {
      var R;
      return y ? (R = e ? e + y : y, this._events[R] && o(this, R)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = e, u.EventEmitter = u, r.exports = u;
  }(zr)), zr.exports;
}
var jl = Wl();
const co = /* @__PURE__ */ tr(jl);
var Zl = class extends co {
  /** Instantiate a WebSocket class
  * @constructor
  * @param {String} address - url to a websocket server
  * @param {(Object)} options - websocket options
  * @param {(String|Array)} protocols - a list of protocols
  * @return {WebSocketBrowserImpl} - returns a WebSocket instance
  */
  constructor(t, e, n) {
    super();
    ne(this, "socket");
    this.socket = new window.WebSocket(t, n), this.socket.onopen = () => this.emit("open"), this.socket.onmessage = (s) => this.emit("message", s.data), this.socket.onerror = (s) => this.emit("error", s), this.socket.onclose = (s) => {
      this.emit("close", s.code, s.reason);
    };
  }
  /**
  * Sends data through a websocket connection
  * @method
  * @param {(String|Object)} data - data to be sent via websocket
  * @param {Object} optionsOrCallback - ws options
  * @param {Function} callback - a callback called once the data is sent
  * @return {Undefined}
  */
  send(t, e, n) {
    const s = n || e;
    try {
      this.socket.send(t), s();
    } catch (i) {
      s(i);
    }
  }
  /**
  * Closes an underlying socket
  * @method
  * @param {Number} code - status code explaining why the connection is being closed
  * @param {String} reason - a description why the connection is closing
  * @return {Undefined}
  * @throws {Error}
  */
  close(t, e) {
    this.socket.close(t, e);
  }
  addEventListener(t, e, n) {
    this.socket.addEventListener(t, e, n);
  }
};
function $l(r, t) {
  return new Zl(r, t);
}
var th = class {
  encode(r) {
    return JSON.stringify(r);
  }
  decode(r) {
    return JSON.parse(r);
  }
}, eh = class extends co {
  /**
  * Instantiate a Client class.
  * @constructor
  * @param {webSocketFactory} webSocketFactory - factory method for WebSocket
  * @param {String} address - url to a websocket server
  * @param {Object} options - ws options object with reconnect parameters
  * @param {Function} generate_request_id - custom generation request Id
  * @param {DataPack} dataPack - data pack contains encoder and decoder
  * @return {CommonClient}
  */
  constructor(t, e = "ws://localhost:8080", {
    autoconnect: n = !0,
    reconnect: s = !0,
    reconnect_interval: i = 1e3,
    max_reconnects: o = 5,
    ...u
  } = {}, d, y) {
    super();
    ne(this, "address");
    ne(this, "rpc_id");
    ne(this, "queue");
    ne(this, "options");
    ne(this, "autoconnect");
    ne(this, "ready");
    ne(this, "reconnect");
    ne(this, "reconnect_timer_id");
    ne(this, "reconnect_interval");
    ne(this, "max_reconnects");
    ne(this, "rest_options");
    ne(this, "current_reconnects");
    ne(this, "generate_request_id");
    ne(this, "socket");
    ne(this, "webSocketFactory");
    ne(this, "dataPack");
    this.webSocketFactory = t, this.queue = {}, this.rpc_id = 0, this.address = e, this.autoconnect = n, this.ready = !1, this.reconnect = s, this.reconnect_timer_id = void 0, this.reconnect_interval = i, this.max_reconnects = o, this.rest_options = u, this.current_reconnects = 0, this.generate_request_id = d || (() => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1), y ? this.dataPack = y : this.dataPack = new th(), this.autoconnect && this._connect(this.address, {
      autoconnect: this.autoconnect,
      reconnect: this.reconnect,
      reconnect_interval: this.reconnect_interval,
      max_reconnects: this.max_reconnects,
      ...this.rest_options
    });
  }
  /**
  * Connects to a defined server if not connected already.
  * @method
  * @return {Undefined}
  */
  connect() {
    this.socket || this._connect(this.address, {
      autoconnect: this.autoconnect,
      reconnect: this.reconnect,
      reconnect_interval: this.reconnect_interval,
      max_reconnects: this.max_reconnects,
      ...this.rest_options
    });
  }
  /**
  * Calls a registered RPC method on server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object|Array} params - optional method parameters
  * @param {Number} timeout - RPC reply timeout value
  * @param {Object} ws_opts - options passed to ws
  * @return {Promise}
  */
  call(t, e, n, s) {
    return !s && typeof n == "object" && (s = n, n = null), new Promise((i, o) => {
      if (!this.ready) return o(new Error("socket not ready"));
      const u = this.generate_request_id(t, e), d = {
        jsonrpc: "2.0",
        method: t,
        params: e || void 0,
        id: u
      };
      this.socket.send(this.dataPack.encode(d), s, (y) => {
        if (y) return o(y);
        this.queue[u] = { promise: [i, o] }, n && (this.queue[u].timeout = setTimeout(() => {
          delete this.queue[u], o(new Error("reply timeout"));
        }, n));
      });
    });
  }
  /**
  * Logins with the other side of the connection.
  * @method
  * @param {Object} params - Login credentials object
  * @return {Promise}
  */
  async login(t) {
    const e = await this.call("rpc.login", t);
    if (!e) throw new Error("authentication failed");
    return e;
  }
  /**
  * Fetches a list of client's methods registered on server.
  * @method
  * @return {Array}
  */
  async listMethods() {
    return await this.call("__listMethods");
  }
  /**
  * Sends a JSON-RPC 2.0 notification to server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object} params - optional method parameters
  * @return {Promise}
  */
  notify(t, e) {
    return new Promise((n, s) => {
      if (!this.ready) return s(new Error("socket not ready"));
      const i = {
        jsonrpc: "2.0",
        method: t,
        params: e
      };
      this.socket.send(this.dataPack.encode(i), (o) => {
        if (o) return s(o);
        n();
      });
    });
  }
  /**
  * Subscribes for a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */
  async subscribe(t) {
    typeof t == "string" && (t = [t]);
    const e = await this.call("rpc.on", t);
    if (typeof t == "string" && e[t] !== "ok")
      throw new Error(
        "Failed subscribing to an event '" + t + "' with: " + e[t]
      );
    return e;
  }
  /**
  * Unsubscribes from a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */
  async unsubscribe(t) {
    typeof t == "string" && (t = [t]);
    const e = await this.call("rpc.off", t);
    if (typeof t == "string" && e[t] !== "ok")
      throw new Error("Failed unsubscribing from an event with: " + e);
    return e;
  }
  /**
  * Closes a WebSocket connection gracefully.
  * @method
  * @param {Number} code - socket close code
  * @param {String} data - optional data to be sent before closing
  * @return {Undefined}
  */
  close(t, e) {
    this.socket.close(t || 1e3, e);
  }
  /**
  * Enable / disable automatic reconnection.
  * @method
  * @param {Boolean} reconnect - enable / disable reconnection
  * @return {Undefined}
  */
  setAutoReconnect(t) {
    this.reconnect = t;
  }
  /**
  * Set the interval between reconnection attempts.
  * @method
  * @param {Number} interval - reconnection interval in milliseconds
  * @return {Undefined}
  */
  setReconnectInterval(t) {
    this.reconnect_interval = t;
  }
  /**
  * Set the maximum number of reconnection attempts.
  * @method
  * @param {Number} max_reconnects - maximum reconnection attempts
  * @return {Undefined}
  */
  setMaxReconnects(t) {
    this.max_reconnects = t;
  }
  /**
  * Connection/Message handler.
  * @method
  * @private
  * @param {String} address - WebSocket API address
  * @param {Object} options - ws options object
  * @return {Undefined}
  */
  _connect(t, e) {
    clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(t, e), this.socket.addEventListener("open", () => {
      this.ready = !0, this.emit("open"), this.current_reconnects = 0;
    }), this.socket.addEventListener("message", ({ data: n }) => {
      n instanceof ArrayBuffer && (n = pt.Buffer.from(n).toString());
      try {
        n = this.dataPack.decode(n);
      } catch {
        return;
      }
      if (n.notification && this.listeners(n.notification).length) {
        if (!Object.keys(n.params).length)
          return this.emit(n.notification);
        const s = [n.notification];
        if (n.params.constructor === Object) s.push(n.params);
        else
          for (let i = 0; i < n.params.length; i++)
            s.push(n.params[i]);
        return Promise.resolve().then(() => {
          this.emit.apply(this, s);
        });
      }
      if (!this.queue[n.id])
        return n.method ? Promise.resolve().then(() => {
          this.emit(n.method, n == null ? void 0 : n.params);
        }) : void 0;
      "error" in n == "result" in n && this.queue[n.id].promise[1](
        new Error(
          'Server response malformed. Response must include either "result" or "error", but not both.'
        )
      ), this.queue[n.id].timeout && clearTimeout(this.queue[n.id].timeout), n.error ? this.queue[n.id].promise[1](n.error) : this.queue[n.id].promise[0](n.result), delete this.queue[n.id];
    }), this.socket.addEventListener("error", (n) => this.emit("error", n)), this.socket.addEventListener("close", ({ code: n, reason: s }) => {
      this.ready && setTimeout(() => this.emit("close", n, s), 0), this.ready = !1, this.socket = void 0, n !== 1e3 && (this.current_reconnects++, this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) && (this.reconnect_timer_id = setTimeout(
        () => this._connect(t, e),
        this.reconnect_interval
      )));
    });
  }
};
class uo extends bs {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, Yo(t);
    const n = li(e);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), an(i);
  }
  update(t) {
    return Yn(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Yn(this), yn(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: u } = this;
    return t = t, t.finished = s, t.destroyed = i, t.blockLen = o, t.outputLen = u, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const fo = (r, t, e) => new uo(r, t).update(e).digest();
fo.create = (r, t) => new uo(r, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function us(r) {
  r.lowS !== void 0 && Je("lowS", r.lowS), r.prehash !== void 0 && Je("prehash", r.prehash);
}
function nh(r) {
  const t = Ii(r);
  Sn(t, {
    a: "field",
    b: "field"
  }, {
    allowInfinityPoint: "boolean",
    allowedPrivateKeyLengths: "array",
    clearCofactor: "function",
    fromBytes: "function",
    isTorsionFree: "function",
    toBytes: "function",
    wrapPrivateKey: "boolean"
  });
  const { endo: e, Fp: n, a: s } = t;
  if (e) {
    if (!n.eql(s, n.ZERO))
      throw new Error("invalid endo: CURVE.a must be 0");
    if (typeof e != "object" || typeof e.beta != "bigint" || typeof e.splitScalar != "function")
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
  }
  return Object.freeze({ ...t });
}
class rh extends Error {
  constructor(t = "") {
    super(t);
  }
}
const Te = {
  // asn.1 DER encoding utils
  Err: rh,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (r, t) => {
      const { Err: e } = Te;
      if (r < 0 || r > 256)
        throw new e("tlv.encode: wrong tag");
      if (t.length & 1)
        throw new e("tlv.encode: unpadded data");
      const n = t.length / 2, s = Ln(n);
      if (s.length / 2 & 128)
        throw new e("tlv.encode: long form length too big");
      const i = n > 127 ? Ln(s.length / 2 | 128) : "";
      return Ln(r) + i + s + t;
    },
    // v - value, l - left bytes (unparsed)
    decode(r, t) {
      const { Err: e } = Te;
      let n = 0;
      if (r < 0 || r > 256)
        throw new e("tlv.encode: wrong tag");
      if (t.length < 2 || t[n++] !== r)
        throw new e("tlv.decode: wrong tlv");
      const s = t[n++], i = !!(s & 128);
      let o = 0;
      if (!i)
        o = s;
      else {
        const d = s & 127;
        if (!d)
          throw new e("tlv.decode(long): indefinite length not supported");
        if (d > 4)
          throw new e("tlv.decode(long): byte length is too big");
        const y = t.subarray(n, n + d);
        if (y.length !== d)
          throw new e("tlv.decode: length bytes not complete");
        if (y[0] === 0)
          throw new e("tlv.decode(long): zero leftmost byte");
        for (const R of y)
          o = o << 8 | R;
        if (n += d, o < 128)
          throw new e("tlv.decode(long): not minimal encoding");
      }
      const u = t.subarray(n, n + o);
      if (u.length !== o)
        throw new e("tlv.decode: wrong value length");
      return { v: u, l: t.subarray(n + o) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(r) {
      const { Err: t } = Te;
      if (r < Le)
        throw new t("integer: negative integers are not allowed");
      let e = Ln(r);
      if (Number.parseInt(e[0], 16) & 8 && (e = "00" + e), e.length & 1)
        throw new t("unexpected DER parsing assertion: unpadded hex");
      return e;
    },
    decode(r) {
      const { Err: t } = Te;
      if (r[0] & 128)
        throw new t("invalid signature integer: negative");
      if (r[0] === 0 && !(r[1] & 128))
        throw new t("invalid signature integer: unnecessary leading zero");
      return Xe(r);
    }
  },
  toSig(r) {
    const { Err: t, _int: e, _tlv: n } = Te, s = Ut("signature", r), { v: i, l: o } = n.decode(48, s);
    if (o.length)
      throw new t("invalid signature: left bytes after parsing");
    const { v: u, l: d } = n.decode(2, i), { v: y, l: R } = n.decode(2, d);
    if (R.length)
      throw new t("invalid signature: left bytes after parsing");
    return { r: e.decode(u), s: e.decode(y) };
  },
  hexFromSig(r) {
    const { _tlv: t, _int: e } = Te, n = t.encode(2, e.encode(r.r)), s = t.encode(2, e.encode(r.s)), i = n + s;
    return t.encode(48, i);
  }
};
function Xr(r, t) {
  return cn(Rn(r, t));
}
const Le = BigInt(0), ie = BigInt(1);
BigInt(2);
const Vr = BigInt(3), ih = BigInt(4);
function sh(r) {
  const t = nh(r), { Fp: e } = t, n = bn(t.n, t.nBitLength), s = t.toBytes || ((K, P, X) => {
    const Z = P.toAffine();
    return un(Uint8Array.from([4]), e.toBytes(Z.x), e.toBytes(Z.y));
  }), i = t.fromBytes || ((K) => {
    const P = K.subarray(1), X = e.fromBytes(P.subarray(0, e.BYTES)), Z = e.fromBytes(P.subarray(e.BYTES, 2 * e.BYTES));
    return { x: X, y: Z };
  });
  function o(K) {
    const { a: P, b: X } = t, Z = e.sqr(K), st = e.mul(Z, K);
    return e.add(e.add(st, e.mul(K, P)), X);
  }
  function u(K, P) {
    const X = e.sqr(P), Z = o(K);
    return e.eql(X, Z);
  }
  if (!u(t.Gx, t.Gy))
    throw new Error("bad curve params: generator point");
  const d = e.mul(e.pow(t.a, Vr), ih), y = e.mul(e.sqr(t.b), BigInt(27));
  if (e.is0(e.add(d, y)))
    throw new Error("bad curve params: a or b");
  function R(K) {
    return gi(K, ie, t.n);
  }
  function Q(K) {
    const { allowedPrivateKeyLengths: P, nByteLength: X, wrapPrivateKey: Z, n: st } = t;
    if (P && typeof K != "bigint") {
      if (mn(K) && (K = cn(K)), typeof K != "string" || !P.includes(K.length))
        throw new Error("invalid private key");
      K = K.padStart(X * 2, "0");
    }
    let ot;
    try {
      ot = typeof K == "bigint" ? K : Xe(Ut("private key", K, X));
    } catch {
      throw new Error("invalid private key, expected hex or " + X + " bytes, got " + typeof K);
    }
    return Z && (ot = xt(ot, st)), ye("private key", ot, ie, st), ot;
  }
  function D(K) {
    if (!(K instanceof N))
      throw new Error("ProjectivePoint expected");
  }
  const x = qn((K, P) => {
    const { px: X, py: Z, pz: st } = K;
    if (e.eql(st, e.ONE))
      return { x: X, y: Z };
    const ot = K.is0();
    P == null && (P = ot ? e.ONE : e.inv(st));
    const z = e.mul(X, P), k = e.mul(Z, P), F = e.mul(st, P);
    if (ot)
      return { x: e.ZERO, y: e.ZERO };
    if (!e.eql(F, e.ONE))
      throw new Error("invZ was invalid");
    return { x: z, y: k };
  }), L = qn((K) => {
    if (K.is0()) {
      if (t.allowInfinityPoint && !e.is0(K.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: P, y: X } = K.toAffine();
    if (!e.isValid(P) || !e.isValid(X))
      throw new Error("bad point: x or y not FE");
    if (!u(P, X))
      throw new Error("bad point: equation left != right");
    if (!K.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class N {
    constructor(P, X, Z) {
      if (P == null || !e.isValid(P))
        throw new Error("x required");
      if (X == null || !e.isValid(X) || e.is0(X))
        throw new Error("y required");
      if (Z == null || !e.isValid(Z))
        throw new Error("z required");
      this.px = P, this.py = X, this.pz = Z, Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(P) {
      const { x: X, y: Z } = P || {};
      if (!P || !e.isValid(X) || !e.isValid(Z))
        throw new Error("invalid affine point");
      if (P instanceof N)
        throw new Error("projective point not allowed");
      const st = (ot) => e.eql(ot, e.ZERO);
      return st(X) && st(Z) ? N.ZERO : new N(X, Z, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(P) {
      const X = Ei(e, P.map((Z) => Z.pz));
      return P.map((Z, st) => Z.toAffine(X[st])).map(N.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(P) {
      const X = N.fromAffine(i(Ut("pointHex", P)));
      return X.assertValidity(), X;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(P) {
      return N.BASE.multiply(Q(P));
    }
    // Multiscalar Multiplication
    static msm(P, X) {
      return qs(N, n, P, X);
    }
    // "Private method", don't use it directly
    _setWindowSize(P) {
      j.setWindowSize(this, P);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      L(this);
    }
    hasEvenY() {
      const { y: P } = this.toAffine();
      if (e.isOdd)
        return !e.isOdd(P);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(P) {
      D(P);
      const { px: X, py: Z, pz: st } = this, { px: ot, py: z, pz: k } = P, F = e.eql(e.mul(X, k), e.mul(ot, st)), q = e.eql(e.mul(Z, k), e.mul(z, st));
      return F && q;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new N(this.px, e.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: P, b: X } = t, Z = e.mul(X, Vr), { px: st, py: ot, pz: z } = this;
      let k = e.ZERO, F = e.ZERO, q = e.ZERO, B = e.mul(st, st), A = e.mul(ot, ot), h = e.mul(z, z), g = e.mul(st, ot);
      return g = e.add(g, g), q = e.mul(st, z), q = e.add(q, q), k = e.mul(P, q), F = e.mul(Z, h), F = e.add(k, F), k = e.sub(A, F), F = e.add(A, F), F = e.mul(k, F), k = e.mul(g, k), q = e.mul(Z, q), h = e.mul(P, h), g = e.sub(B, h), g = e.mul(P, g), g = e.add(g, q), q = e.add(B, B), B = e.add(q, B), B = e.add(B, h), B = e.mul(B, g), F = e.add(F, B), h = e.mul(ot, z), h = e.add(h, h), B = e.mul(h, g), k = e.sub(k, B), q = e.mul(h, A), q = e.add(q, q), q = e.add(q, q), new N(k, F, q);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(P) {
      D(P);
      const { px: X, py: Z, pz: st } = this, { px: ot, py: z, pz: k } = P;
      let F = e.ZERO, q = e.ZERO, B = e.ZERO;
      const A = t.a, h = e.mul(t.b, Vr);
      let g = e.mul(X, ot), w = e.mul(Z, z), _ = e.mul(st, k), C = e.add(X, Z), b = e.add(ot, z);
      C = e.mul(C, b), b = e.add(g, w), C = e.sub(C, b), b = e.add(X, st);
      let I = e.add(ot, k);
      return b = e.mul(b, I), I = e.add(g, _), b = e.sub(b, I), I = e.add(Z, st), F = e.add(z, k), I = e.mul(I, F), F = e.add(w, _), I = e.sub(I, F), B = e.mul(A, b), F = e.mul(h, _), B = e.add(F, B), F = e.sub(w, B), B = e.add(w, B), q = e.mul(F, B), w = e.add(g, g), w = e.add(w, g), _ = e.mul(A, _), b = e.mul(h, b), w = e.add(w, _), _ = e.sub(g, _), _ = e.mul(A, _), b = e.add(b, _), g = e.mul(w, b), q = e.add(q, g), g = e.mul(I, b), F = e.mul(C, F), F = e.sub(F, g), g = e.mul(C, w), B = e.mul(I, B), B = e.add(B, g), new N(F, q, B);
    }
    subtract(P) {
      return this.add(P.negate());
    }
    is0() {
      return this.equals(N.ZERO);
    }
    wNAF(P) {
      return j.wNAFCached(this, P, N.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(P) {
      const { endo: X, n: Z } = t;
      ye("scalar", P, Le, Z);
      const st = N.ZERO;
      if (P === Le)
        return st;
      if (this.is0() || P === ie)
        return this;
      if (!X || j.hasPrecomputes(this))
        return j.wNAFCachedUnsafe(this, P, N.normalizeZ);
      let { k1neg: ot, k1: z, k2neg: k, k2: F } = X.splitScalar(P), q = st, B = st, A = this;
      for (; z > Le || F > Le; )
        z & ie && (q = q.add(A)), F & ie && (B = B.add(A)), A = A.double(), z >>= ie, F >>= ie;
      return ot && (q = q.negate()), k && (B = B.negate()), B = new N(e.mul(B.px, X.beta), B.py, B.pz), q.add(B);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(P) {
      const { endo: X, n: Z } = t;
      ye("scalar", P, ie, Z);
      let st, ot;
      if (X) {
        const { k1neg: z, k1: k, k2neg: F, k2: q } = X.splitScalar(P);
        let { p: B, f: A } = this.wNAF(k), { p: h, f: g } = this.wNAF(q);
        B = j.constTimeNegate(z, B), h = j.constTimeNegate(F, h), h = new N(e.mul(h.px, X.beta), h.py, h.pz), st = B.add(h), ot = A.add(g);
      } else {
        const { p: z, f: k } = this.wNAF(P);
        st = z, ot = k;
      }
      return N.normalizeZ([st, ot])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(P, X, Z) {
      const st = N.BASE, ot = (k, F) => F === Le || F === ie || !k.equals(st) ? k.multiplyUnsafe(F) : k.multiply(F), z = ot(this, X).add(ot(P, Z));
      return z.is0() ? void 0 : z;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(P) {
      return x(this, P);
    }
    isTorsionFree() {
      const { h: P, isTorsionFree: X } = t;
      if (P === ie)
        return !0;
      if (X)
        return X(N, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: P, clearCofactor: X } = t;
      return P === ie ? this : X ? X(N, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(P = !0) {
      return Je("isCompressed", P), this.assertValidity(), s(N, this, P);
    }
    toHex(P = !0) {
      return Je("isCompressed", P), cn(this.toRawBytes(P));
    }
  }
  N.BASE = new N(t.Gx, t.Gy, e.ONE), N.ZERO = new N(e.ZERO, e.ONE, e.ZERO);
  const { endo: M, nBitLength: V } = t, j = Js(N, M ? Math.ceil(V / 2) : V);
  return {
    CURVE: t,
    ProjectivePoint: N,
    normPrivateKeyToScalar: Q,
    weierstrassEquation: o,
    isWithinCurveOrder: R
  };
}
function oh(r) {
  const t = Ii(r);
  return Sn(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function Ah(r) {
  const t = oh(r), { Fp: e, n, nByteLength: s, nBitLength: i } = t, o = e.BYTES + 1, u = 2 * e.BYTES + 1;
  function d(h) {
    return xt(h, n);
  }
  function y(h) {
    return ri(h, n);
  }
  const { ProjectivePoint: R, normPrivateKeyToScalar: Q, weierstrassEquation: D, isWithinCurveOrder: x } = sh({
    ...t,
    toBytes(h, g, w) {
      const _ = g.toAffine(), C = e.toBytes(_.x), b = un;
      return Je("isCompressed", w), w ? b(Uint8Array.from([g.hasEvenY() ? 2 : 3]), C) : b(Uint8Array.from([4]), C, e.toBytes(_.y));
    },
    fromBytes(h) {
      const g = h.length, w = h[0], _ = h.subarray(1);
      if (g === o && (w === 2 || w === 3)) {
        const C = Xe(_);
        if (!gi(C, ie, e.ORDER))
          throw new Error("Point is not on curve");
        const b = D(C);
        let I;
        try {
          I = e.sqrt(b);
        } catch (p) {
          const S = p instanceof Error ? ": " + p.message : "";
          throw new Error("Point is not on curve" + S);
        }
        const a = (I & ie) === ie;
        return (w & 1) === 1 !== a && (I = e.neg(I)), { x: C, y: I };
      } else if (g === u && w === 4) {
        const C = e.fromBytes(_.subarray(0, e.BYTES)), b = e.fromBytes(_.subarray(e.BYTES, 2 * e.BYTES));
        return { x: C, y: b };
      } else {
        const C = o, b = u;
        throw new Error("invalid Point, expected length of " + C + ", or uncompressed " + b + ", got " + g);
      }
    }
  });
  function L(h) {
    const g = n >> ie;
    return h > g;
  }
  function N(h) {
    return L(h) ? d(-h) : h;
  }
  const M = (h, g, w) => Xe(h.slice(g, w));
  class V {
    constructor(g, w, _) {
      ye("r", g, ie, n), ye("s", w, ie, n), this.r = g, this.s = w, _ != null && (this.recovery = _), Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(g) {
      const w = s;
      return g = Ut("compactSignature", g, w * 2), new V(M(g, 0, w), M(g, w, 2 * w));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(g) {
      const { r: w, s: _ } = Te.toSig(Ut("DER", g));
      return new V(w, _);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(g) {
      return new V(this.r, this.s, g);
    }
    recoverPublicKey(g) {
      const { r: w, s: _, recovery: C } = this, b = st(Ut("msgHash", g));
      if (C == null || ![0, 1, 2, 3].includes(C))
        throw new Error("recovery id invalid");
      const I = C === 2 || C === 3 ? w + t.n : w;
      if (I >= e.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const a = (C & 1) === 0 ? "02" : "03", c = R.fromHex(a + Xr(I, e.BYTES)), p = y(I), S = d(-b * p), T = d(_ * p), H = R.BASE.multiplyAndAddUnsafe(c, S, T);
      if (!H)
        throw new Error("point at infinify");
      return H.assertValidity(), H;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return L(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new V(this.r, d(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Hn(this.toDERHex());
    }
    toDERHex() {
      return Te.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Hn(this.toCompactHex());
    }
    toCompactHex() {
      const g = s;
      return Xr(this.r, g) + Xr(this.s, g);
    }
  }
  const j = {
    isValidPrivateKey(h) {
      try {
        return Q(h), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: Q,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const h = Ps(t.n);
      return CA(t.randomBytes(h), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(h = 8, g = R.BASE) {
      return g._setWindowSize(h), g.multiply(BigInt(3)), g;
    }
  };
  function K(h, g = !0) {
    return R.fromPrivateKey(h).toRawBytes(g);
  }
  function P(h) {
    if (typeof h == "bigint")
      return !1;
    if (h instanceof R)
      return !0;
    const w = Ut("key", h).length, _ = e.BYTES, C = _ + 1, b = 2 * _ + 1;
    if (!(t.allowedPrivateKeyLengths || s === C))
      return w === C || w === b;
  }
  function X(h, g, w = !0) {
    if (P(h) === !0)
      throw new Error("first arg must be private key");
    if (P(g) === !1)
      throw new Error("second arg must be public key");
    return R.fromHex(g).multiply(Q(h)).toRawBytes(w);
  }
  const Z = t.bits2int || function(h) {
    if (h.length > 8192)
      throw new Error("input is too large");
    const g = Xe(h), w = h.length * 8 - i;
    return w > 0 ? g >> BigInt(w) : g;
  }, st = t.bits2int_modN || function(h) {
    return d(Z(h));
  }, ot = er(i);
  function z(h) {
    return ye("num < 2^" + i, h, Le, ot), Rn(h, s);
  }
  function k(h, g, w = F) {
    if (["recovered", "canonical"].some((it) => it in w))
      throw new Error("sign() legacy options not supported");
    const { hash: _, randomBytes: C } = t;
    let { lowS: b, prehash: I, extraEntropy: a } = w;
    b == null && (b = !0), h = Ut("msgHash", h), us(w), I && (h = Ut("prehashed msgHash", _(h)));
    const c = st(h), p = Q(g), S = [z(p), z(c)];
    if (a != null && a !== !1) {
      const it = a === !0 ? C(e.BYTES) : a;
      S.push(Ut("extraEntropy", it));
    }
    const T = un(...S), H = c;
    function tt(it) {
      const Ct = Z(it);
      if (!x(Ct))
        return;
      const dt = y(Ct), ht = R.BASE.multiply(Ct).toAffine(), Rt = d(ht.x);
      if (Rt === Le)
        return;
      const gt = d(dt * d(H + Rt * p));
      if (gt === Le)
        return;
      let _t = (ht.x === Rt ? 0 : 2) | Number(ht.y & ie), Ee = gt;
      return b && L(gt) && (Ee = N(gt), _t ^= 1), new V(Rt, Ee, _t);
    }
    return { seed: T, k2sig: tt };
  }
  const F = { lowS: t.lowS, prehash: !1 }, q = { lowS: t.lowS, prehash: !1 };
  function B(h, g, w = F) {
    const { seed: _, k2sig: C } = k(h, g, w), b = t;
    return fA(b.hash.outputLen, b.nByteLength, b.hmac)(_, C);
  }
  R.BASE._setWindowSize(8);
  function A(h, g, w, _ = q) {
    var _t;
    const C = h;
    g = Ut("msgHash", g), w = Ut("publicKey", w);
    const { lowS: b, prehash: I, format: a } = _;
    if (us(_), "strict" in _)
      throw new Error("options.strict was renamed to lowS");
    if (a !== void 0 && a !== "compact" && a !== "der")
      throw new Error("format must be compact or der");
    const c = typeof C == "string" || mn(C), p = !c && !a && typeof C == "object" && C !== null && typeof C.r == "bigint" && typeof C.s == "bigint";
    if (!c && !p)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let S, T;
    try {
      if (p && (S = new V(C.r, C.s)), c) {
        try {
          a !== "compact" && (S = V.fromDER(C));
        } catch (Ee) {
          if (!(Ee instanceof Te.Err))
            throw Ee;
        }
        !S && a !== "der" && (S = V.fromCompact(C));
      }
      T = R.fromHex(w);
    } catch {
      return !1;
    }
    if (!S || b && S.hasHighS())
      return !1;
    I && (g = t.hash(g));
    const { r: H, s: tt } = S, it = st(g), Ct = y(tt), dt = d(it * Ct), ht = d(H * Ct), Rt = (_t = R.BASE.multiplyAndAddUnsafe(T, dt, ht)) == null ? void 0 : _t.toAffine();
    return Rt ? d(Rt.x) === H : !1;
  }
  return {
    CURVE: t,
    getPublicKey: K,
    getSharedSecret: X,
    sign: B,
    verify: A,
    ProjectivePoint: R,
    Signature: V,
    utils: j
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ah(r) {
  return {
    hash: r,
    hmac: (t, ...e) => fo(r, t, qo(...e)),
    randomBytes: Qs
  };
}
function ch(r, t) {
  const e = (n) => Ah({ ...r, ...ah(n) });
  return { ...e(t), create: e };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const lo = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), fs = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), uh = BigInt(0), fh = BigInt(1), si = BigInt(2), ls = (r, t) => (r + t / si) / t;
function lh(r) {
  const t = lo, e = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), u = BigInt(44), d = BigInt(88), y = r * r * r % t, R = y * y * r % t, Q = Dt(R, e, t) * R % t, D = Dt(Q, e, t) * R % t, x = Dt(D, si, t) * y % t, L = Dt(x, s, t) * x % t, N = Dt(L, i, t) * L % t, M = Dt(N, u, t) * N % t, V = Dt(M, d, t) * M % t, j = Dt(V, u, t) * N % t, K = Dt(j, e, t) * R % t, P = Dt(K, o, t) * L % t, X = Dt(P, n, t) * y % t, Z = Dt(X, si, t);
  if (!oi.eql(oi.sqr(Z), r))
    throw new Error("Cannot find square root");
  return Z;
}
const oi = bn(lo, void 0, void 0, { sqrt: lh }), hh = ch({
  a: uh,
  b: BigInt(7),
  Fp: oi,
  n: fs,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  endo: {
    // Endomorphism, see above
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const t = fs, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -fh * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, o = BigInt("0x100000000000000000000000000000000"), u = ls(i * r, t), d = ls(-n * r, t);
      let y = xt(r - u * e - d * s, t), R = xt(-u * n - d * i, t);
      const Q = y > o, D = R > o;
      if (Q && (y = t - y), D && (R = t - R), y > o || R > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: Q, k1: y, k2neg: D, k2: R };
    }
  }
}, Os);
function hs(r) {
  try {
    return Bi.ExtendedPoint.fromHex(r), !0;
  } catch {
    return !1;
  }
}
const dh = (r, t) => Bi.sign(r, t.slice(0, 32)), gh = Bi.verify, ln = (r) => pt.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? pt.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : pt.Buffer.from(r);
class Eh {
  constructor(t) {
    Object.assign(this, t);
  }
  encode() {
    return pt.Buffer.from(Fr.serialize(Pn, this));
  }
  static decode(t) {
    return Fr.deserialize(Pn, this, t);
  }
  static decodeUnchecked(t) {
    return Fr.deserializeUnchecked(Pn, this, t);
  }
}
const Pn = /* @__PURE__ */ new Map();
var ho;
const Ih = 32, qe = 32;
function ph(r) {
  return r._bn !== void 0;
}
let ds = 1;
class ut extends Eh {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(t) {
    if (super({}), this._bn = void 0, ph(t))
      this._bn = t._bn;
    else {
      if (typeof t == "string") {
        const e = oe.decode(t);
        if (e.length != qe)
          throw new Error("Invalid public key input");
        this._bn = new Zi(e);
      } else
        this._bn = new Zi(t);
      if (this._bn.byteLength() > qe)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const t = new ut(ds);
    return ds += 1, new ut(t.toBuffer());
  }
  /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */
  /**
   * Checks if two publicKeys are equal
   */
  equals(t) {
    return this._bn.eq(t._bn);
  }
  /**
   * Return the base-58 representation of the public key
   */
  toBase58() {
    return oe.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  /**
   * Return the byte array representation of the public key in big endian
   */
  toBytes() {
    const t = this.toBuffer();
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  /**
   * Return the Buffer representation of the public key in big endian
   */
  toBuffer() {
    const t = this._bn.toArrayLike(pt.Buffer);
    if (t.length === qe)
      return t;
    const e = pt.Buffer.alloc(32);
    return t.copy(e, 32 - t.length), e;
  }
  get [Symbol.toStringTag]() {
    return `PublicKey(${this.toString()})`;
  }
  /**
   * Return the base-58 representation of the public key
   */
  toString() {
    return this.toBase58();
  }
  /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */
  /* eslint-disable require-await */
  static async createWithSeed(t, e, n) {
    const s = pt.Buffer.concat([t.toBuffer(), pt.Buffer.from(e), n.toBuffer()]), i = ns(s);
    return new ut(i);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(t, e) {
    let n = pt.Buffer.alloc(0);
    t.forEach(function(i) {
      if (i.length > Ih)
        throw new TypeError("Max seed length exceeded");
      n = pt.Buffer.concat([n, ln(i)]);
    }), n = pt.Buffer.concat([n, e.toBuffer(), pt.Buffer.from("ProgramDerivedAddress")]);
    const s = ns(n);
    if (hs(s))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new ut(s);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(t, e) {
    return this.createProgramAddressSync(t, e);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(t, e) {
    let n = 255, s;
    for (; n != 0; ) {
      try {
        const i = t.concat(pt.Buffer.from([n]));
        s = this.createProgramAddressSync(i, e);
      } catch (i) {
        if (i instanceof TypeError)
          throw i;
        n--;
        continue;
      }
      return [s, n];
    }
    throw new Error("Unable to find a viable program address nonce");
  }
  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */
  static async findProgramAddress(t, e) {
    return this.findProgramAddressSync(t, e);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(t) {
    const e = new ut(t);
    return hs(e.toBytes());
  }
}
ho = ut;
ut.default = new ho("11111111111111111111111111111111");
Pn.set(ut, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new ut("BPFLoader1111111111111111111111111111111111");
const An = 1232, go = 127, Eo = 64;
class Io extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: block height exceeded.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(Io.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class po extends Error {
  constructor(t, e) {
    super(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(po.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class pn extends Error {
  constructor(t) {
    super(`Signature ${t} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = t;
  }
}
Object.defineProperty(pn.prototype, "name", {
  value: "TransactionExpiredNonceInvalidError"
});
class jn {
  constructor(t, e) {
    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = t, this.accountKeysFromLookups = e;
  }
  keySegments() {
    const t = [this.staticAccountKeys];
    return this.accountKeysFromLookups && (t.push(this.accountKeysFromLookups.writable), t.push(this.accountKeysFromLookups.readonly)), t;
  }
  get(t) {
    for (const e of this.keySegments()) {
      if (t < e.length)
        return e[t];
      t -= e.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(t) {
    if (this.length > 256)
      throw new Error("Account index overflow encountered during compilation");
    const n = /* @__PURE__ */ new Map();
    this.keySegments().flat().forEach((i, o) => {
      n.set(i.toBase58(), o);
    });
    const s = (i) => {
      const o = n.get(i.toBase58());
      if (o === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
      return o;
    };
    return t.map((i) => ({
      programIdIndex: s(i.programId),
      accountKeyIndexes: i.keys.map((o) => s(o.pubkey)),
      data: i.data
    }));
  }
}
const Bt = (r = "publicKey") => v.blob(32, r), sn = (r = "string") => {
  const t = v.struct([v.u32("length"), v.u32("lengthPadding"), v.blob(v.offset(v.u32(), -8), "chars")], r), e = t.decode.bind(t), n = t.encode.bind(t), s = t;
  return s.decode = (i, o) => e(i, o).chars.toString(), s.encode = (i, o, u) => {
    const d = {
      chars: pt.Buffer.from(i, "utf8")
    };
    return n(d, o, u);
  }, s.alloc = (i) => v.u32().span + v.u32().span + pt.Buffer.from(i, "utf8").length, s;
}, Bh = (r = "authorized") => v.struct([Bt("staker"), Bt("withdrawer")], r), _h = (r = "lockup") => v.struct([v.ns64("unixTimestamp"), v.ns64("epoch"), Bt("custodian")], r), Ch = (r = "voteInit") => v.struct([Bt("nodePubkey"), Bt("authorizedVoter"), Bt("authorizedWithdrawer"), v.u8("commission")], r), wh = (r = "voteAuthorizeWithSeedArgs") => v.struct([v.u32("voteAuthorizationType"), Bt("currentAuthorityDerivedKeyOwnerPubkey"), sn("currentAuthorityDerivedKeySeed"), Bt("newAuthorized")], r);
function Be(r) {
  let t = 0, e = 0;
  for (; ; ) {
    let n = r.shift();
    if (t |= (n & 127) << e * 7, e += 1, (n & 128) === 0)
      break;
  }
  return t;
}
function _e(r, t) {
  let e = t;
  for (; ; ) {
    let n = e & 127;
    if (e >>= 7, e == 0) {
      r.push(n);
      break;
    } else
      n |= 128, r.push(n);
  }
}
function re(r, t) {
  if (!r)
    throw new Error(t || "Assertion failed");
}
class or {
  constructor(t, e) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = t, this.keyMetaMap = e;
  }
  static compile(t, e) {
    const n = /* @__PURE__ */ new Map(), s = (o) => {
      const u = o.toBase58();
      let d = n.get(u);
      return d === void 0 && (d = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, n.set(u, d)), d;
    }, i = s(e);
    i.isSigner = !0, i.isWritable = !0;
    for (const o of t) {
      s(o.programId).isInvoked = !0;
      for (const u of o.keys) {
        const d = s(u.pubkey);
        d.isSigner || (d.isSigner = u.isSigner), d.isWritable || (d.isWritable = u.isWritable);
      }
    }
    return new or(e, n);
  }
  getMessageComponents() {
    const t = [...this.keyMetaMap.entries()];
    re(t.length <= 256, "Max static account keys length exceeded");
    const e = t.filter(([, d]) => d.isSigner && d.isWritable), n = t.filter(([, d]) => d.isSigner && !d.isWritable), s = t.filter(([, d]) => !d.isSigner && d.isWritable), i = t.filter(([, d]) => !d.isSigner && !d.isWritable), o = {
      numRequiredSignatures: e.length + n.length,
      numReadonlySignedAccounts: n.length,
      numReadonlyUnsignedAccounts: i.length
    };
    {
      re(e.length > 0, "Expected at least one writable signer key");
      const [d] = e[0];
      re(d === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const u = [...e.map(([d]) => new ut(d)), ...n.map(([d]) => new ut(d)), ...s.map(([d]) => new ut(d)), ...i.map(([d]) => new ut(d))];
    return [o, u];
  }
  extractTableLookup(t) {
    const [e, n] = this.drainKeysFoundInLookupTable(t.state.addresses, (o) => !o.isSigner && !o.isInvoked && o.isWritable), [s, i] = this.drainKeysFoundInLookupTable(t.state.addresses, (o) => !o.isSigner && !o.isInvoked && !o.isWritable);
    if (!(e.length === 0 && s.length === 0))
      return [{
        accountKey: t.key,
        writableIndexes: e,
        readonlyIndexes: s
      }, {
        writable: n,
        readonly: i
      }];
  }
  /** @internal */
  drainKeysFoundInLookupTable(t, e) {
    const n = new Array(), s = new Array();
    for (const [i, o] of this.keyMetaMap.entries())
      if (e(o)) {
        const u = new ut(i), d = t.findIndex((y) => y.equals(u));
        d >= 0 && (re(d < 256, "Max lookup table index exceeded"), n.push(d), s.push(u), this.keyMetaMap.delete(i));
      }
    return [n, s];
  }
}
const Bo = "Reached end of buffer unexpectedly";
function De(r) {
  if (r.length === 0)
    throw new Error(Bo);
  return r.shift();
}
function Ce(r, ...t) {
  const [e] = t;
  if (t.length === 2 ? e + (t[1] ?? 0) > r.length : e >= r.length)
    throw new Error(Bo);
  return r.splice(...t);
}
class Ke {
  constructor(t) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = t.header, this.accountKeys = t.accountKeys.map((e) => new ut(e)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((e) => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]));
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: oe.decode(t.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new jn(this.staticAccountKeys);
  }
  static compile(t) {
    const e = or.compile(t.instructions, t.payerKey), [n, s] = e.getMessageComponents(), o = new jn(s).compileInstructions(t.instructions).map((u) => ({
      programIdIndex: u.programIdIndex,
      accounts: u.accountKeyIndexes,
      data: oe.encode(u.data)
    }));
    return new Ke({
      header: n,
      accountKeys: s,
      recentBlockhash: t.recentBlockhash,
      instructions: o
    });
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures;
    if (t >= this.header.numRequiredSignatures) {
      const n = t - e, i = this.accountKeys.length - e - this.header.numReadonlyUnsignedAccounts;
      return n < i;
    } else {
      const n = e - this.header.numReadonlySignedAccounts;
      return t < n;
    }
  }
  isProgramId(t) {
    return this.indexToProgramIds.has(t);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((t, e) => !this.isProgramId(e));
  }
  serialize() {
    const t = this.accountKeys.length;
    let e = [];
    _e(e, t);
    const n = this.instructions.map((Q) => {
      const {
        accounts: D,
        programIdIndex: x
      } = Q, L = Array.from(oe.decode(Q.data));
      let N = [];
      _e(N, D.length);
      let M = [];
      return _e(M, L.length), {
        programIdIndex: x,
        keyIndicesCount: pt.Buffer.from(N),
        keyIndices: D,
        dataLength: pt.Buffer.from(M),
        data: L
      };
    });
    let s = [];
    _e(s, n.length);
    let i = pt.Buffer.alloc(An);
    pt.Buffer.from(s).copy(i);
    let o = s.length;
    n.forEach((Q) => {
      const x = v.struct([v.u8("programIdIndex"), v.blob(Q.keyIndicesCount.length, "keyIndicesCount"), v.seq(v.u8("keyIndex"), Q.keyIndices.length, "keyIndices"), v.blob(Q.dataLength.length, "dataLength"), v.seq(v.u8("userdatum"), Q.data.length, "data")]).encode(Q, i, o);
      o += x;
    }), i = i.slice(0, o);
    const u = v.struct([v.blob(1, "numRequiredSignatures"), v.blob(1, "numReadonlySignedAccounts"), v.blob(1, "numReadonlyUnsignedAccounts"), v.blob(e.length, "keyCount"), v.seq(Bt("key"), t, "keys"), Bt("recentBlockhash")]), d = {
      numRequiredSignatures: pt.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: pt.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: pt.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: pt.Buffer.from(e),
      keys: this.accountKeys.map((Q) => ln(Q.toBytes())),
      recentBlockhash: oe.decode(this.recentBlockhash)
    };
    let y = pt.Buffer.alloc(2048);
    const R = u.encode(d, y);
    return i.copy(y, R), y.slice(0, R + i.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(t) {
    let e = [...t];
    const n = De(e);
    if (n !== (n & go))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const s = De(e), i = De(e), o = Be(e);
    let u = [];
    for (let D = 0; D < o; D++) {
      const x = Ce(e, 0, qe);
      u.push(new ut(pt.Buffer.from(x)));
    }
    const d = Ce(e, 0, qe), y = Be(e);
    let R = [];
    for (let D = 0; D < y; D++) {
      const x = De(e), L = Be(e), N = Ce(e, 0, L), M = Be(e), V = Ce(e, 0, M), j = oe.encode(pt.Buffer.from(V));
      R.push({
        programIdIndex: x,
        accounts: N,
        data: j
      });
    }
    const Q = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: s,
        numReadonlyUnsignedAccounts: i
      },
      recentBlockhash: oe.encode(pt.Buffer.from(d)),
      accountKeys: u,
      instructions: R
    };
    return new Ke(Q);
  }
}
class Zn {
  constructor(t) {
    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.addressTableLookups = t.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let t = 0;
    for (const e of this.addressTableLookups)
      t += e.readonlyIndexes.length + e.writableIndexes.length;
    return t;
  }
  getAccountKeys(t) {
    let e;
    if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length)
        throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
      e = t.accountKeysFromLookups;
    } else if (t && "addressLookupTableAccounts" in t && t.addressLookupTableAccounts)
      e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error("Failed to get account keys because address table lookups were not resolved");
    return new jn(this.staticAccountKeys, e);
  }
  isAccountSigner(t) {
    return t < this.header.numRequiredSignatures;
  }
  isAccountWritable(t) {
    const e = this.header.numRequiredSignatures, n = this.staticAccountKeys.length;
    if (t >= n) {
      const s = t - n, i = this.addressTableLookups.reduce((o, u) => o + u.writableIndexes.length, 0);
      return s < i;
    } else if (t >= this.header.numRequiredSignatures) {
      const s = t - e, o = n - e - this.header.numReadonlyUnsignedAccounts;
      return s < o;
    } else {
      const s = e - this.header.numReadonlySignedAccounts;
      return t < s;
    }
  }
  resolveAddressTableLookups(t) {
    const e = {
      writable: [],
      readonly: []
    };
    for (const n of this.addressTableLookups) {
      const s = t.find((i) => i.key.equals(n.accountKey));
      if (!s)
        throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
      for (const i of n.writableIndexes)
        if (i < s.state.addresses.length)
          e.writable.push(s.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
      for (const i of n.readonlyIndexes)
        if (i < s.state.addresses.length)
          e.readonly.push(s.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
    }
    return e;
  }
  static compile(t) {
    const e = or.compile(t.instructions, t.payerKey), n = new Array(), s = {
      writable: new Array(),
      readonly: new Array()
    }, i = t.addressLookupTableAccounts || [];
    for (const R of i) {
      const Q = e.extractTableLookup(R);
      if (Q !== void 0) {
        const [D, {
          writable: x,
          readonly: L
        }] = Q;
        n.push(D), s.writable.push(...x), s.readonly.push(...L);
      }
    }
    const [o, u] = e.getMessageComponents(), y = new jn(u, s).compileInstructions(t.instructions);
    return new Zn({
      header: o,
      staticAccountKeys: u,
      recentBlockhash: t.recentBlockhash,
      compiledInstructions: y,
      addressTableLookups: n
    });
  }
  serialize() {
    const t = Array();
    _e(t, this.staticAccountKeys.length);
    const e = this.serializeInstructions(), n = Array();
    _e(n, this.compiledInstructions.length);
    const s = this.serializeAddressTableLookups(), i = Array();
    _e(i, this.addressTableLookups.length);
    const o = v.struct([v.u8("prefix"), v.struct([v.u8("numRequiredSignatures"), v.u8("numReadonlySignedAccounts"), v.u8("numReadonlyUnsignedAccounts")], "header"), v.blob(t.length, "staticAccountKeysLength"), v.seq(Bt(), this.staticAccountKeys.length, "staticAccountKeys"), Bt("recentBlockhash"), v.blob(n.length, "instructionsLength"), v.blob(e.length, "serializedInstructions"), v.blob(i.length, "addressTableLookupsLength"), v.blob(s.length, "serializedAddressTableLookups")]), u = new Uint8Array(An), y = o.encode({
      prefix: 128,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(t),
      staticAccountKeys: this.staticAccountKeys.map((R) => R.toBytes()),
      recentBlockhash: oe.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(n),
      serializedInstructions: e,
      addressTableLookupsLength: new Uint8Array(i),
      serializedAddressTableLookups: s
    }, u);
    return u.slice(0, y);
  }
  serializeInstructions() {
    let t = 0;
    const e = new Uint8Array(An);
    for (const n of this.compiledInstructions) {
      const s = Array();
      _e(s, n.accountKeyIndexes.length);
      const i = Array();
      _e(i, n.data.length);
      const o = v.struct([v.u8("programIdIndex"), v.blob(s.length, "encodedAccountKeyIndexesLength"), v.seq(v.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"), v.blob(i.length, "encodedDataLength"), v.blob(n.data.length, "data")]);
      t += o.encode({
        programIdIndex: n.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(s),
        accountKeyIndexes: n.accountKeyIndexes,
        encodedDataLength: new Uint8Array(i),
        data: n.data
      }, e, t);
    }
    return e.slice(0, t);
  }
  serializeAddressTableLookups() {
    let t = 0;
    const e = new Uint8Array(An);
    for (const n of this.addressTableLookups) {
      const s = Array();
      _e(s, n.writableIndexes.length);
      const i = Array();
      _e(i, n.readonlyIndexes.length);
      const o = v.struct([Bt("accountKey"), v.blob(s.length, "encodedWritableIndexesLength"), v.seq(v.u8(), n.writableIndexes.length, "writableIndexes"), v.blob(i.length, "encodedReadonlyIndexesLength"), v.seq(v.u8(), n.readonlyIndexes.length, "readonlyIndexes")]);
      t += o.encode({
        accountKey: n.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(s),
        writableIndexes: n.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(i),
        readonlyIndexes: n.readonlyIndexes
      }, e, t);
    }
    return e.slice(0, t);
  }
  static deserialize(t) {
    let e = [...t];
    const n = De(e), s = n & go;
    re(n !== s, "Expected versioned message but received legacy message");
    const i = s;
    re(i === 0, `Expected versioned message with version 0 but found version ${i}`);
    const o = {
      numRequiredSignatures: De(e),
      numReadonlySignedAccounts: De(e),
      numReadonlyUnsignedAccounts: De(e)
    }, u = [], d = Be(e);
    for (let L = 0; L < d; L++)
      u.push(new ut(Ce(e, 0, qe)));
    const y = oe.encode(Ce(e, 0, qe)), R = Be(e), Q = [];
    for (let L = 0; L < R; L++) {
      const N = De(e), M = Be(e), V = Ce(e, 0, M), j = Be(e), K = new Uint8Array(Ce(e, 0, j));
      Q.push({
        programIdIndex: N,
        accountKeyIndexes: V,
        data: K
      });
    }
    const D = Be(e), x = [];
    for (let L = 0; L < D; L++) {
      const N = new ut(Ce(e, 0, qe)), M = Be(e), V = Ce(e, 0, M), j = Be(e), K = Ce(e, 0, j);
      x.push({
        accountKey: N,
        writableIndexes: V,
        readonlyIndexes: K
      });
    }
    return new Zn({
      header: o,
      staticAccountKeys: u,
      recentBlockhash: y,
      compiledInstructions: Q,
      addressTableLookups: x
    });
  }
}
let Ye = /* @__PURE__ */ function(r) {
  return r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", r[r.PROCESSED = 1] = "PROCESSED", r[r.TIMED_OUT = 2] = "TIMED_OUT", r[r.NONCE_INVALID = 3] = "NONCE_INVALID", r;
}({});
const yh = pt.Buffer.alloc(Eo).fill(0);
class gs {
  constructor(t) {
    this.keys = void 0, this.programId = void 0, this.data = pt.Buffer.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data);
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey: t,
        isSigner: e,
        isWritable: n
      }) => ({
        pubkey: t.toJSON(),
        isSigner: e,
        isWritable: n
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}
class ke {
  /**
   * The first (payer) Transaction signature
   *
   * @returns {Buffer | null} Buffer of payer's signature
   */
  get signature() {
    return this.signatures.length > 0 ? this.signatures[0].signature : null;
  }
  /**
   * The transaction fee payer
   */
  // Construct a transaction with a blockhash and lastValidBlockHeight
  // Construct a transaction using a durable nonce
  /**
   * @deprecated `TransactionCtorFields` has been deprecated and will be removed in a future version.
   * Please supply a `TransactionBlockhashCtor` instead.
   */
  /**
   * Construct an empty Transaction
   */
  constructor(t) {
    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!t)
      if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "nonceInfo")) {
        const {
          minContextSlot: e,
          nonceInfo: n
        } = t;
        this.minNonceContextSlot = e, this.nonceInfo = n;
      } else if (Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
        const {
          blockhash: e,
          lastValidBlockHeight: n
        } = t;
        this.recentBlockhash = e, this.lastValidBlockHeight = n;
      } else {
        const {
          recentBlockhash: e,
          nonceInfo: n
        } = t;
        n && (this.nonceInfo = n), this.recentBlockhash = e;
      }
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo ? {
        nonce: this.nonceInfo.nonce,
        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
      } : null,
      instructions: this.instructions.map((t) => t.toJSON()),
      signers: this.signatures.map(({
        publicKey: t
      }) => t.toJSON())
    };
  }
  /**
   * Add one or more instructions to this Transaction
   *
   * @param {Array< Transaction | TransactionInstruction | TransactionInstructionCtorFields >} items - Instructions to add to the Transaction
   */
  add(...t) {
    if (t.length === 0)
      throw new Error("No instructions");
    return t.forEach((e) => {
      "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new gs(e));
    }), this;
  }
  /**
   * Compile transaction data
   */
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let t, e;
    if (this.nonceInfo ? (t = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? e = [this.nonceInfo.nonceInstruction, ...this.instructions] : e = this.instructions) : (t = this.recentBlockhash, e = this.instructions), !t)
      throw new Error("Transaction recentBlockhash required");
    e.length < 1 && console.warn("No instructions provided");
    let n;
    if (this.feePayer)
      n = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      n = this.signatures[0].publicKey;
    else
      throw new Error("Transaction fee payer required");
    for (let N = 0; N < e.length; N++)
      if (e[N].programId === void 0)
        throw new Error(`Transaction instruction index ${N} has undefined program id`);
    const s = [], i = [];
    e.forEach((N) => {
      N.keys.forEach((V) => {
        i.push({
          ...V
        });
      });
      const M = N.programId.toString();
      s.includes(M) || s.push(M);
    }), s.forEach((N) => {
      i.push({
        pubkey: new ut(N),
        isSigner: !1,
        isWritable: !1
      });
    });
    const o = [];
    i.forEach((N) => {
      const M = N.pubkey.toString(), V = o.findIndex((j) => j.pubkey.toString() === M);
      V > -1 ? (o[V].isWritable = o[V].isWritable || N.isWritable, o[V].isSigner = o[V].isSigner || N.isSigner) : o.push(N);
    }), o.sort(function(N, M) {
      if (N.isSigner !== M.isSigner)
        return N.isSigner ? -1 : 1;
      if (N.isWritable !== M.isWritable)
        return N.isWritable ? -1 : 1;
      const V = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: !1,
        numeric: !1,
        caseFirst: "lower"
      };
      return N.pubkey.toBase58().localeCompare(M.pubkey.toBase58(), "en", V);
    });
    const u = o.findIndex((N) => N.pubkey.equals(n));
    if (u > -1) {
      const [N] = o.splice(u, 1);
      N.isSigner = !0, N.isWritable = !0, o.unshift(N);
    } else
      o.unshift({
        pubkey: n,
        isSigner: !0,
        isWritable: !0
      });
    for (const N of this.signatures) {
      const M = o.findIndex((V) => V.pubkey.equals(N.publicKey));
      if (M > -1)
        o[M].isSigner || (o[M].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${N.publicKey.toString()}`);
    }
    let d = 0, y = 0, R = 0;
    const Q = [], D = [];
    o.forEach(({
      pubkey: N,
      isSigner: M,
      isWritable: V
    }) => {
      M ? (Q.push(N.toString()), d += 1, V || (y += 1)) : (D.push(N.toString()), V || (R += 1));
    });
    const x = Q.concat(D), L = e.map((N) => {
      const {
        data: M,
        programId: V
      } = N;
      return {
        programIdIndex: x.indexOf(V.toString()),
        accounts: N.keys.map((j) => x.indexOf(j.pubkey.toString())),
        data: oe.encode(M)
      };
    });
    return L.forEach((N) => {
      re(N.programIdIndex >= 0), N.accounts.forEach((M) => re(M >= 0));
    }), new Ke({
      header: {
        numRequiredSignatures: d,
        numReadonlySignedAccounts: y,
        numReadonlyUnsignedAccounts: R
      },
      accountKeys: x,
      recentBlockhash: t,
      instructions: L
    });
  }
  /**
   * @internal
   */
  _compile() {
    const t = this.compileMessage(), e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
    return this.signatures.length === e.length && this.signatures.every((s, i) => e[i].equals(s.publicKey)) || (this.signatures = e.map((n) => ({
      signature: null,
      publicKey: n
    }))), t;
  }
  /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */
  serializeMessage() {
    return this._compile().serialize();
  }
  /**
   * Get the estimated fee associated with a transaction
   *
   * @param {Connection} connection Connection to RPC Endpoint.
   *
   * @returns {Promise<number | null>} The estimated fee for the transaction
   */
  async getEstimatedFee(t) {
    return (await t.getFeeForMessage(this.compileMessage())).value;
  }
  /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */
  setSigners(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set();
    this.signatures = t.filter((n) => {
      const s = n.toString();
      return e.has(s) ? !1 : (e.add(s), !0);
    }).map((n) => ({
      signature: null,
      publicKey: n
    }));
  }
  /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  sign(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set(), n = [];
    for (const i of t) {
      const o = i.publicKey.toString();
      e.has(o) || (e.add(o), n.push(i));
    }
    this.signatures = n.map((i) => ({
      signature: null,
      publicKey: i.publicKey
    }));
    const s = this._compile();
    this._partialSign(s, ...n);
  }
  /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   *
   * @param {Array<Signer>} signers Array of signers that will sign the transaction
   */
  partialSign(...t) {
    if (t.length === 0)
      throw new Error("No signers");
    const e = /* @__PURE__ */ new Set(), n = [];
    for (const i of t) {
      const o = i.publicKey.toString();
      e.has(o) || (e.add(o), n.push(i));
    }
    const s = this._compile();
    this._partialSign(s, ...n);
  }
  /**
   * @internal
   */
  _partialSign(t, ...e) {
    const n = t.serialize();
    e.forEach((s) => {
      const i = dh(n, s.secretKey);
      this._addSignature(s.publicKey, ln(i));
    });
  }
  /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * @param {PublicKey} pubkey Public key that will be added to the transaction.
   * @param {Buffer} signature An externally created signature to add to the transaction.
   */
  addSignature(t, e) {
    this._compile(), this._addSignature(t, e);
  }
  /**
   * @internal
   */
  _addSignature(t, e) {
    re(e.length === 64);
    const n = this.signatures.findIndex((s) => t.equals(s.publicKey));
    if (n < 0)
      throw new Error(`unknown signer: ${t.toString()}`);
    this.signatures[n].signature = pt.Buffer.from(e);
  }
  /**
   * Verify signatures of a Transaction
   * Optional parameter specifies if we're expecting a fully signed Transaction or a partially signed one.
   * If no boolean is provided, we expect a fully signed Transaction by default.
   *
   * @param {boolean} [requireAllSignatures=true] Require a fully signed Transaction
   */
  verifySignatures(t = !0) {
    return !this._getMessageSignednessErrors(this.serializeMessage(), t);
  }
  /**
   * @internal
   */
  _getMessageSignednessErrors(t, e) {
    const n = {};
    for (const {
      signature: s,
      publicKey: i
    } of this.signatures)
      s === null ? e && (n.missing || (n.missing = [])).push(i) : gh(s, t, i.toBytes()) || (n.invalid || (n.invalid = [])).push(i);
    return n.invalid || n.missing ? n : void 0;
  }
  /**
   * Serialize the Transaction in the wire format.
   *
   * @param {Buffer} [config] Config of transaction.
   *
   * @returns {Buffer} Signature of transaction in wire format.
   */
  serialize(t) {
    const {
      requireAllSignatures: e,
      verifySignatures: n
    } = Object.assign({
      requireAllSignatures: !0,
      verifySignatures: !0
    }, t), s = this.serializeMessage();
    if (n) {
      const i = this._getMessageSignednessErrors(s, e);
      if (i) {
        let o = "Signature verification failed.";
        throw i.invalid && (o += `
Invalid signature for public key${i.invalid.length === 1 ? "" : "(s)"} [\`${i.invalid.map((u) => u.toBase58()).join("`, `")}\`].`), i.missing && (o += `
Missing signature for public key${i.missing.length === 1 ? "" : "(s)"} [\`${i.missing.map((u) => u.toBase58()).join("`, `")}\`].`), new Error(o);
      }
    }
    return this._serialize(s);
  }
  /**
   * @internal
   */
  _serialize(t) {
    const {
      signatures: e
    } = this, n = [];
    _e(n, e.length);
    const s = n.length + e.length * 64 + t.length, i = pt.Buffer.alloc(s);
    return re(e.length < 256), pt.Buffer.from(n).copy(i, 0), e.forEach(({
      signature: o
    }, u) => {
      o !== null && (re(o.length === 64, "signature has invalid length"), pt.Buffer.from(o).copy(i, n.length + u * 64));
    }), t.copy(i, n.length + e.length * 64), re(i.length <= An, `Transaction too large: ${i.length} > ${An}`), i;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    return re(this.instructions.length === 1), this.instructions[0].keys.map((t) => t.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    return re(this.instructions.length === 1), this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */
  get data() {
    return re(this.instructions.length === 1), this.instructions[0].data;
  }
  /**
   * Parse a wire transaction into a Transaction object.
   *
   * @param {Buffer | Uint8Array | Array<number>} buffer Signature of wire Transaction
   *
   * @returns {Transaction} Transaction associated with the signature
   */
  static from(t) {
    let e = [...t];
    const n = Be(e);
    let s = [];
    for (let i = 0; i < n; i++) {
      const o = Ce(e, 0, Eo);
      s.push(oe.encode(pt.Buffer.from(o)));
    }
    return ke.populate(Ke.from(e), s);
  }
  /**
   * Populate Transaction object from message and signatures
   *
   * @param {Message} message Message of transaction
   * @param {Array<string>} signatures List of signatures to assign to the transaction
   *
   * @returns {Transaction} The populated Transaction
   */
  static populate(t, e = []) {
    const n = new ke();
    return n.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (n.feePayer = t.accountKeys[0]), e.forEach((s, i) => {
      const o = {
        signature: s == oe.encode(yh) ? null : oe.decode(s),
        publicKey: t.accountKeys[i]
      };
      n.signatures.push(o);
    }), t.instructions.forEach((s) => {
      const i = s.accounts.map((o) => {
        const u = t.accountKeys[o];
        return {
          pubkey: u,
          isSigner: n.signatures.some((d) => d.publicKey.toString() === u.toString()) || t.isAccountSigner(o),
          isWritable: t.isAccountWritable(o)
        };
      });
      n.instructions.push(new gs({
        keys: i,
        programId: t.accountKeys[s.programIdIndex],
        data: oe.decode(s.data)
      }));
    }), n._message = t, n._json = n.toJSON(), n;
  }
}
const mh = 160, Rh = 64, Sh = mh / Rh, bh = 1e3 / Sh;
new ut("SysvarC1ock11111111111111111111111111111111");
new ut("SysvarEpochSchedu1e111111111111111111111111");
new ut("Sysvar1nstructions1111111111111111111111111");
new ut("SysvarRecentB1ockHashes11111111111111111111");
new ut("SysvarRent111111111111111111111111111111111");
new ut("SysvarRewards111111111111111111111111111111");
new ut("SysvarS1otHashes111111111111111111111111111");
new ut("SysvarS1otHistory11111111111111111111111111");
new ut("SysvarStakeHistory1111111111111111111111111");
class Es extends Error {
  constructor({
    action: t,
    signature: e,
    transactionMessage: n,
    logs: s
  }) {
    const i = s ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. ` : "", o = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
    let u;
    switch (t) {
      case "send":
        u = `Transaction ${e} resulted in an error. 
${n}. ` + i + o;
        break;
      case "simulate":
        u = `Simulation failed. 
Message: ${n}. 
` + i + o;
        break;
      default:
        u = `Unknown action '${/* @__PURE__ */ ((d) => d)(t)}'`;
    }
    super(u), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = e, this.transactionMessage = n, this.transactionLogs = s || void 0;
  }
  get transactionError() {
    return {
      message: this.transactionMessage,
      logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
    };
  }
  /* @deprecated Use `await getLogs()` instead */
  get logs() {
    const t = this.transactionLogs;
    if (!(t != null && typeof t == "object" && "then" in t))
      return t;
  }
  async getLogs(t) {
    return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise((e, n) => {
      t.getTransaction(this.signature).then((s) => {
        if (s && s.meta && s.meta.logMessages) {
          const i = s.meta.logMessages;
          this.transactionLogs = i, e(i);
        } else
          n(new Error("Log messages not found"));
      }).catch(n);
    })), await this.transactionLogs;
  }
}
class At extends Error {
  constructor({
    code: t,
    message: e,
    data: n
  }, s) {
    super(s != null ? `${s}: ${e}` : e), this.code = void 0, this.data = void 0, this.code = t, this.data = n, this.name = "SolanaJSONRPCError";
  }
}
function rn(r) {
  return new Promise((t) => setTimeout(t, r));
}
const Nh = v.nu64("lamportsPerSignature"), _o = v.struct([v.u32("version"), v.u32("state"), Bt("authorizedPubkey"), Bt("nonce"), v.struct([Nh], "feeCalculator")]);
_o.span;
class mi {
  /**
   * @internal
   */
  constructor(t) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator;
  }
  /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */
  static fromAccountData(t) {
    const e = _o.decode(ln(t), 0);
    return new mi({
      authorizedPubkey: new ut(e.authorizedPubkey),
      nonce: new ut(e.nonce).toString(),
      feeCalculator: e.feeCalculator
    });
  }
}
function hn(r) {
  const t = v.blob(8, r), e = t.decode.bind(t), n = t.encode.bind(t), s = t, i = pl();
  return s.decode = (o, u) => {
    const d = e(o, u);
    return i.decode(d);
  }, s.encode = (o, u, d) => {
    const y = i.encode(o);
    return n(y, u, d);
  }, s;
}
Object.freeze({
  Create: {
    index: 0,
    layout: v.struct([v.u32("instruction"), v.ns64("lamports"), v.ns64("space"), Bt("programId")])
  },
  Assign: {
    index: 1,
    layout: v.struct([v.u32("instruction"), Bt("programId")])
  },
  Transfer: {
    index: 2,
    layout: v.struct([v.u32("instruction"), hn("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: v.struct([v.u32("instruction"), Bt("base"), sn("seed"), v.ns64("lamports"), v.ns64("space"), Bt("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: v.struct([v.u32("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: v.struct([v.u32("instruction"), v.ns64("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: v.struct([v.u32("instruction"), Bt("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: v.struct([v.u32("instruction"), Bt("authorized")])
  },
  Allocate: {
    index: 8,
    layout: v.struct([v.u32("instruction"), v.ns64("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: v.struct([v.u32("instruction"), Bt("base"), sn("seed"), v.ns64("space"), Bt("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: v.struct([v.u32("instruction"), Bt("base"), sn("seed"), Bt("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: v.struct([v.u32("instruction"), hn("lamports"), sn("seed"), Bt("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: v.struct([v.u32("instruction")])
  }
});
new ut("11111111111111111111111111111111");
new ut("BPFLoader2111111111111111111111111111111111");
function Qh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Wr, Is;
function vh() {
  if (Is) return Wr;
  Is = 1;
  var r = Object.prototype.toString, t = Object.keys || function(n) {
    var s = [];
    for (var i in n)
      s.push(i);
    return s;
  };
  function e(n, s) {
    var i, o, u, d, y, R, Q;
    if (n === !0)
      return "true";
    if (n === !1)
      return "false";
    switch (typeof n) {
      case "object":
        if (n === null)
          return null;
        if (n.toJSON && typeof n.toJSON == "function")
          return e(n.toJSON(), s);
        if (Q = r.call(n), Q === "[object Array]") {
          for (u = "[", o = n.length - 1, i = 0; i < o; i++)
            u += e(n[i], !0) + ",";
          return o > -1 && (u += e(n[i], !0)), u + "]";
        } else if (Q === "[object Object]") {
          for (d = t(n).sort(), o = d.length, u = "", i = 0; i < o; )
            y = d[i], R = e(n[y], !1), R !== void 0 && (u && (u += ","), u += JSON.stringify(y) + ":" + R), i++;
          return "{" + u + "}";
        } else
          return JSON.stringify(n);
      case "function":
      case "undefined":
        return s ? null : void 0;
      case "string":
        return JSON.stringify(n);
      default:
        return isFinite(n) ? n : null;
    }
  }
  return Wr = function(n) {
    var s = e(n, !1);
    if (s !== void 0)
      return "" + s;
  }, Wr;
}
var xh = /* @__PURE__ */ vh(), ps = /* @__PURE__ */ Qh(xh);
const In = 32;
function jr(r) {
  let t = 0;
  for (; r > 1; )
    r /= 2, t++;
  return t;
}
function Oh(r) {
  return r === 0 ? 1 : (r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r |= r >> 32, r + 1);
}
class Th {
  constructor(t, e, n, s, i) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = n, this.firstNormalEpoch = s, this.firstNormalSlot = i;
  }
  getEpoch(t) {
    return this.getEpochAndSlotIndex(t)[0];
  }
  getEpochAndSlotIndex(t) {
    if (t < this.firstNormalSlot) {
      const e = jr(Oh(t + In + 1)) - jr(In) - 1, n = this.getSlotsInEpoch(e), s = t - (n - In);
      return [e, s];
    } else {
      const e = t - this.firstNormalSlot, n = Math.floor(e / this.slotsPerEpoch), s = this.firstNormalEpoch + n, i = e % this.slotsPerEpoch;
      return [s, i];
    }
  }
  getFirstSlotInEpoch(t) {
    return t <= this.firstNormalEpoch ? (Math.pow(2, t) - 1) * In : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(t) {
    return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1;
  }
  getSlotsInEpoch(t) {
    return t < this.firstNormalEpoch ? Math.pow(2, t + jr(In)) : this.slotsPerEpoch;
  }
}
var Mh = globalThis.fetch;
class Lh extends eh {
  constructor(t, e, n) {
    const s = (i) => {
      const o = $l(i, {
        autoconnect: !0,
        max_reconnects: 5,
        reconnect: !0,
        reconnect_interval: 1e3,
        ...e
      });
      return "socket" in o ? this.underlyingSocket = o.socket : this.underlyingSocket = o, o;
    };
    super(s, t, e, n), this.underlyingSocket = void 0;
  }
  call(...t) {
    var n;
    const e = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return e === 1 ? super.call(...t) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"));
  }
  notify(...t) {
    var n;
    const e = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return e === 1 ? super.notify(...t) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"));
  }
}
function Dh(r, t) {
  let e;
  try {
    e = r.layout.decode(t);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (e.typeIndex !== r.index)
    throw new Error(`invalid account data; account type mismatch ${e.typeIndex} != ${r.index}`);
  return e;
}
const Bs = 56;
class _s {
  constructor(t) {
    this.key = void 0, this.state = void 0, this.key = t.key, this.state = t.state;
  }
  isActive() {
    const t = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === t;
  }
  static deserialize(t) {
    const e = Dh(kh, t), n = t.length - Bs;
    re(n >= 0, "lookup table is invalid"), re(n % 32 === 0, "lookup table is invalid");
    const s = n / 32, {
      addresses: i
    } = v.struct([v.seq(Bt(), s, "addresses")]).decode(t.slice(Bs));
    return {
      deactivationSlot: e.deactivationSlot,
      lastExtendedSlot: e.lastExtendedSlot,
      lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
      authority: e.authority.length !== 0 ? new ut(e.authority[0]) : void 0,
      addresses: i.map((o) => new ut(o))
    };
  }
}
const kh = {
  index: 1,
  layout: v.struct([
    v.u32("typeIndex"),
    hn("deactivationSlot"),
    v.nu64("lastExtendedSlot"),
    v.u8("lastExtendedStartIndex"),
    v.u8(),
    // option
    v.seq(Bt(), v.offset(v.u8(), -1), "authority")
  ])
}, Uh = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function Fh(r) {
  const t = r.match(Uh);
  if (t == null)
    throw TypeError(`Failed to validate endpoint URL \`${r}\``);
  const [
    e,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    n,
    s,
    i
  ] = t, o = r.startsWith("https:") ? "wss:" : "ws:", u = s == null ? null : parseInt(s.slice(1), 10), d = (
    // Only shift the port by +1 as a convention for ws(s) only if given endpoint
    // is explicitly specifying the endpoint port (HTTP-based RPC), assuming
    // we're directly trying to connect to agave-validator's ws listening port.
    // When the endpoint omits the port, we're connecting to the protocol
    // default ports: http(80) or https(443) and it's assumed we're behind a reverse
    // proxy which manages WebSocket upgrade and backend port redirection.
    u == null ? "" : `:${u + 1}`
  );
  return `${o}//${n}${d}${i}`;
}
const Tt = vn(wi(ut), $(), (r) => new ut(r)), Co = yi([$(), Ot("base64")]), Ri = vn(wi(pt.Buffer), Co, (r) => pt.Buffer.from(r[0], "base64")), Gh = 30 * 1e3;
function Ph(r) {
  if (/^https?:/.test(r) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return r;
}
function St(r) {
  let t, e;
  if (typeof r == "string")
    t = r;
  else if (r) {
    const {
      commitment: n,
      ...s
    } = r;
    t = n, e = s;
  }
  return {
    commitment: t,
    config: e
  };
}
function Cs(r) {
  return r.map((t) => "memcmp" in t ? {
    ...t,
    memcmp: {
      ...t.memcmp,
      encoding: t.memcmp.encoding ?? "base58"
    }
  } : t);
}
function wo(r) {
  return ge([W({
    jsonrpc: Ot("2.0"),
    id: $(),
    result: r
  }), W({
    jsonrpc: Ot("2.0"),
    id: $(),
    error: W({
      code: dn(),
      message: $(),
      data: at(Rl())
    })
  })]);
}
const Yh = wo(dn());
function It(r) {
  return vn(wo(r), Yh, (t) => "error" in t ? t : {
    ...t,
    result: et(t.result, r)
  });
}
function kt(r) {
  return It(W({
    context: W({
      slot: G()
    }),
    value: r
  }));
}
function Ar(r) {
  return W({
    context: W({
      slot: G()
    }),
    value: r
  });
}
function Zr(r, t) {
  return r === 0 ? new Zn({
    header: t.header,
    staticAccountKeys: t.accountKeys.map((e) => new ut(e)),
    recentBlockhash: t.recentBlockhash,
    compiledInstructions: t.instructions.map((e) => ({
      programIdIndex: e.programIdIndex,
      accountKeyIndexes: e.accounts,
      data: oe.decode(e.data)
    })),
    addressTableLookups: t.addressTableLookups
  }) : new Ke(t);
}
const Hh = W({
  foundation: G(),
  foundationTerm: G(),
  initial: G(),
  taper: G(),
  terminal: G()
}), Jh = It(nt(rt(W({
  epoch: G(),
  effectiveSlot: G(),
  amount: G(),
  postBalance: G(),
  commission: at(rt(G()))
})))), qh = nt(W({
  slot: G(),
  prioritizationFee: G()
})), Kh = W({
  total: G(),
  validator: G(),
  foundation: G(),
  epoch: G()
}), zh = W({
  epoch: G(),
  slotIndex: G(),
  slotsInEpoch: G(),
  absoluteSlot: G(),
  blockHeight: at(G()),
  transactionCount: at(G())
}), Xh = W({
  slotsPerEpoch: G(),
  leaderScheduleSlotOffset: G(),
  warmup: Ne(),
  firstNormalEpoch: G(),
  firstNormalSlot: G()
}), Vh = ro($(), nt(G())), We = rt(ge([W({}), $()])), Wh = W({
  err: We
}), jh = Ot("receivedSignature"), Zh = W({
  "solana-core": $(),
  "feature-set": at(G())
}), $h = W({
  program: $(),
  programId: Tt,
  parsed: dn()
}), td = W({
  programId: Tt,
  accounts: nt(Tt),
  data: $()
}), ws = kt(W({
  err: rt(ge([W({}), $()])),
  logs: rt(nt($())),
  accounts: at(rt(nt(rt(W({
    executable: Ne(),
    owner: $(),
    lamports: G(),
    data: nt($()),
    rentEpoch: at(G())
  }))))),
  unitsConsumed: at(G()),
  returnData: at(rt(W({
    programId: $(),
    data: yi([$(), Ot("base64")])
  }))),
  innerInstructions: at(rt(nt(W({
    index: G(),
    instructions: nt(ge([$h, td]))
  }))))
})), ed = kt(W({
  byIdentity: ro($(), nt(G())),
  range: W({
    firstSlot: G(),
    lastSlot: G()
  })
}));
function nd(r, t, e, n, s, i) {
  const o = e || Mh;
  let u;
  i != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
  let d;
  return n && (d = async (R, Q) => {
    const D = await new Promise((x, L) => {
      try {
        n(R, Q, (N, M) => x([N, M]));
      } catch (N) {
        L(N);
      }
    });
    return await o(...D);
  }), new Vl(async (R, Q) => {
    const D = {
      method: "POST",
      body: R,
      agent: u,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, t || {}, ng)
    };
    try {
      let x = 5, L, N = 500;
      for (; d ? L = await d(r, D) : L = await o(r, D), !(L.status !== 429 || s === !0 || (x -= 1, x === 0)); )
        console.error(`Server responded with ${L.status} ${L.statusText}.  Retrying after ${N}ms delay...`), await rn(N), N *= 2;
      const M = await L.text();
      L.ok ? Q(null, M) : Q(new Error(`${L.status} ${L.statusText}: ${M}`));
    } catch (x) {
      x instanceof Error && Q(x);
    }
  }, {});
}
function rd(r) {
  return (t, e) => new Promise((n, s) => {
    r.request(t, e, (i, o) => {
      if (i) {
        s(i);
        return;
      }
      n(o);
    });
  });
}
function id(r) {
  return (t) => new Promise((e, n) => {
    t.length === 0 && e([]);
    const s = t.map((i) => r.request(i.methodName, i.args));
    r.request(s, (i, o) => {
      if (i) {
        n(i);
        return;
      }
      e(o);
    });
  });
}
const sd = It(Hh), od = It(Kh), Ad = It(qh), ad = It(zh), cd = It(Xh), ud = It(Vh), fd = It(G()), ld = kt(W({
  total: G(),
  circulating: G(),
  nonCirculating: G(),
  nonCirculatingAccounts: nt(Tt)
})), Ai = W({
  amount: $(),
  uiAmount: rt(G()),
  decimals: G(),
  uiAmountString: at($())
}), hd = kt(nt(W({
  address: Tt,
  amount: $(),
  uiAmount: rt(G()),
  decimals: G(),
  uiAmountString: at($())
}))), dd = kt(nt(W({
  pubkey: Tt,
  account: W({
    executable: Ne(),
    owner: Tt,
    lamports: G(),
    data: Ri,
    rentEpoch: G()
  })
}))), ai = W({
  program: $(),
  parsed: dn(),
  space: G()
}), gd = kt(nt(W({
  pubkey: Tt,
  account: W({
    executable: Ne(),
    owner: Tt,
    lamports: G(),
    data: ai,
    rentEpoch: G()
  })
}))), Ed = kt(nt(W({
  lamports: G(),
  address: Tt
}))), wn = W({
  executable: Ne(),
  owner: Tt,
  lamports: G(),
  data: Ri,
  rentEpoch: G()
}), Id = W({
  pubkey: Tt,
  account: wn
}), pd = vn(ge([wi(pt.Buffer), ai]), ge([Co, ai]), (r) => Array.isArray(r) ? et(r, Ri) : r), ci = W({
  executable: Ne(),
  owner: Tt,
  lamports: G(),
  data: pd,
  rentEpoch: G()
}), Bd = W({
  pubkey: Tt,
  account: ci
}), _d = W({
  state: ge([Ot("active"), Ot("inactive"), Ot("activating"), Ot("deactivating")]),
  active: G(),
  inactive: G()
}), Cd = It(nt(W({
  signature: $(),
  slot: G(),
  err: We,
  memo: rt($()),
  blockTime: at(rt(G()))
}))), wd = It(nt(W({
  signature: $(),
  slot: G(),
  err: We,
  memo: rt($()),
  blockTime: at(rt(G()))
}))), yd = W({
  subscription: G(),
  result: Ar(wn)
}), md = W({
  pubkey: Tt,
  account: wn
}), Rd = W({
  subscription: G(),
  result: Ar(md)
}), Sd = W({
  parent: G(),
  slot: G(),
  root: G()
}), bd = W({
  subscription: G(),
  result: Sd
}), Nd = ge([W({
  type: ge([Ot("firstShredReceived"), Ot("completed"), Ot("optimisticConfirmation"), Ot("root")]),
  slot: G(),
  timestamp: G()
}), W({
  type: Ot("createdBank"),
  parent: G(),
  slot: G(),
  timestamp: G()
}), W({
  type: Ot("frozen"),
  slot: G(),
  timestamp: G(),
  stats: W({
    numTransactionEntries: G(),
    numSuccessfulTransactions: G(),
    numFailedTransactions: G(),
    maxTransactionsPerEntry: G()
  })
}), W({
  type: Ot("dead"),
  slot: G(),
  timestamp: G(),
  err: $()
})]), Qd = W({
  subscription: G(),
  result: Nd
}), vd = W({
  subscription: G(),
  result: Ar(ge([Wh, jh]))
}), xd = W({
  subscription: G(),
  result: G()
}), Od = W({
  pubkey: $(),
  gossip: rt($()),
  tpu: rt($()),
  rpc: rt($()),
  version: rt($())
}), ys = W({
  votePubkey: $(),
  nodePubkey: $(),
  activatedStake: G(),
  epochVoteAccount: Ne(),
  epochCredits: nt(yi([G(), G(), G()])),
  commission: G(),
  lastVote: G(),
  rootSlot: rt(G())
}), Td = It(W({
  current: nt(ys),
  delinquent: nt(ys)
})), Md = ge([Ot("processed"), Ot("confirmed"), Ot("finalized")]), Ld = W({
  slot: G(),
  confirmations: rt(G()),
  err: We,
  confirmationStatus: at(Md)
}), Dd = kt(nt(rt(Ld))), kd = It(G()), yo = W({
  accountKey: Tt,
  writableIndexes: nt(G()),
  readonlyIndexes: nt(G())
}), Si = W({
  signatures: nt($()),
  message: W({
    accountKeys: nt($()),
    header: W({
      numRequiredSignatures: G(),
      numReadonlySignedAccounts: G(),
      numReadonlyUnsignedAccounts: G()
    }),
    instructions: nt(W({
      accounts: nt(G()),
      data: $(),
      programIdIndex: G()
    })),
    recentBlockhash: $(),
    addressTableLookups: at(nt(yo))
  })
}), mo = W({
  pubkey: Tt,
  signer: Ne(),
  writable: Ne(),
  source: at(ge([Ot("transaction"), Ot("lookupTable")]))
}), Ro = W({
  accountKeys: nt(mo),
  signatures: nt($())
}), So = W({
  parsed: dn(),
  program: $(),
  programId: Tt
}), bo = W({
  accounts: nt(Tt),
  data: $(),
  programId: Tt
}), Ud = ge([bo, So]), Fd = ge([W({
  parsed: dn(),
  program: $(),
  programId: $()
}), W({
  accounts: nt($()),
  data: $(),
  programId: $()
})]), No = vn(Ud, Fd, (r) => "accounts" in r ? et(r, bo) : et(r, So)), Qo = W({
  signatures: nt($()),
  message: W({
    accountKeys: nt(mo),
    instructions: nt(No),
    recentBlockhash: $(),
    addressTableLookups: at(rt(nt(yo)))
  })
}), $n = W({
  accountIndex: G(),
  mint: $(),
  owner: at($()),
  programId: at($()),
  uiTokenAmount: Ai
}), vo = W({
  writable: nt(Tt),
  readonly: nt(Tt)
}), ar = W({
  err: We,
  fee: G(),
  innerInstructions: at(rt(nt(W({
    index: G(),
    instructions: nt(W({
      accounts: nt(G()),
      data: $(),
      programIdIndex: G()
    }))
  })))),
  preBalances: nt(G()),
  postBalances: nt(G()),
  logMessages: at(rt(nt($()))),
  preTokenBalances: at(rt(nt($n))),
  postTokenBalances: at(rt(nt($n))),
  loadedAddresses: at(vo),
  computeUnitsConsumed: at(G())
}), bi = W({
  err: We,
  fee: G(),
  innerInstructions: at(rt(nt(W({
    index: G(),
    instructions: nt(No)
  })))),
  preBalances: nt(G()),
  postBalances: nt(G()),
  logMessages: at(rt(nt($()))),
  preTokenBalances: at(rt(nt($n))),
  postTokenBalances: at(rt(nt($n))),
  loadedAddresses: at(vo),
  computeUnitsConsumed: at(G())
}), gn = ge([Ot(0), Ot("legacy")]), je = W({
  pubkey: $(),
  lamports: G(),
  postBalance: rt(G()),
  rewardType: rt($()),
  commission: at(rt(G()))
}), Gd = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  transactions: nt(W({
    transaction: Si,
    meta: rt(ar),
    version: at(gn)
  })),
  rewards: at(nt(je)),
  blockTime: rt(G()),
  blockHeight: rt(G())
}))), Pd = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  rewards: at(nt(je)),
  blockTime: rt(G()),
  blockHeight: rt(G())
}))), Yd = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  transactions: nt(W({
    transaction: Ro,
    meta: rt(ar),
    version: at(gn)
  })),
  rewards: at(nt(je)),
  blockTime: rt(G()),
  blockHeight: rt(G())
}))), Hd = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  transactions: nt(W({
    transaction: Qo,
    meta: rt(bi),
    version: at(gn)
  })),
  rewards: at(nt(je)),
  blockTime: rt(G()),
  blockHeight: rt(G())
}))), Jd = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  transactions: nt(W({
    transaction: Ro,
    meta: rt(bi),
    version: at(gn)
  })),
  rewards: at(nt(je)),
  blockTime: rt(G()),
  blockHeight: rt(G())
}))), qd = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  rewards: at(nt(je)),
  blockTime: rt(G()),
  blockHeight: rt(G())
}))), Kd = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  transactions: nt(W({
    transaction: Si,
    meta: rt(ar)
  })),
  rewards: at(nt(je)),
  blockTime: rt(G())
}))), ms = It(rt(W({
  blockhash: $(),
  previousBlockhash: $(),
  parentSlot: G(),
  signatures: nt($()),
  blockTime: rt(G())
}))), $r = It(rt(W({
  slot: G(),
  meta: rt(ar),
  blockTime: at(rt(G())),
  transaction: Si,
  version: at(gn)
}))), Un = It(rt(W({
  slot: G(),
  transaction: Qo,
  meta: rt(bi),
  blockTime: at(rt(G())),
  version: at(gn)
}))), zd = kt(W({
  blockhash: $(),
  lastValidBlockHeight: G()
})), Xd = kt(Ne()), Vd = W({
  slot: G(),
  numTransactions: G(),
  numSlots: G(),
  samplePeriodSecs: G()
}), Wd = It(nt(Vd)), jd = kt(rt(W({
  feeCalculator: W({
    lamportsPerSignature: G()
  })
}))), Zd = It($()), $d = It($()), tg = W({
  err: We,
  logs: nt($()),
  signature: $()
}), eg = W({
  result: Ar(tg),
  subscription: G()
}), ng = {
  "solana-client": "js/1.0.0-maintenance"
};
class rg {
  /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */
  constructor(t, e) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = /* @__PURE__ */ (() => {
      const y = {};
      return async (R) => {
        const {
          commitment: Q,
          config: D
        } = St(R), x = this._buildArgs([], Q, void 0, D), L = ps(x);
        return y[L] = y[L] ?? (async () => {
          try {
            const N = await this._rpcRequest("getBlockHeight", x), M = et(N, It(G()));
            if ("error" in M)
              throw new At(M.error, "failed to get block height information");
            return M.result;
          } finally {
            delete y[L];
          }
        })(), await y[L];
      };
    })();
    let n, s, i, o, u, d;
    e && typeof e == "string" ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, n = e.wsEndpoint, s = e.httpHeaders, i = e.fetch, o = e.fetchMiddleware, u = e.disableRetryOnRateLimit, d = e.httpAgent), this._rpcEndpoint = Ph(t), this._rpcWsEndpoint = n || Fh(t), this._rpcClient = nd(t, s, i, o, u, d), this._rpcRequest = rd(this._rpcClient), this._rpcBatchRequest = id(this._rpcClient), this._rpcWebSocket = new Lh(this._rpcWsEndpoint, {
      autoconnect: !1,
      max_reconnects: 1 / 0
    }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
  }
  /**
   * The default commitment used for requests
   */
  get commitment() {
    return this._commitment;
  }
  /**
   * The RPC endpoint
   */
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  /**
   * Fetch the balance for the specified public key, return with context
   */
  async getBalanceAndContext(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgs([t.toBase58()], n, void 0, s), o = await this._rpcRequest("getBalance", i), u = et(o, kt(G()));
    if ("error" in u)
      throw new At(u.error, `failed to get balance for ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch the balance for the specified public key
   */
  async getBalance(t, e) {
    return await this.getBalanceAndContext(t, e).then((n) => n.value).catch((n) => {
      throw new Error("failed to get balance of account " + t.toBase58() + ": " + n);
    });
  }
  /**
   * Fetch the estimated production time of a block
   */
  async getBlockTime(t) {
    const e = await this._rpcRequest("getBlockTime", [t]), n = et(e, It(rt(G())));
    if ("error" in n)
      throw new At(n.error, `failed to get block time for slot ${t}`);
    return n.result;
  }
  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */
  async getMinimumLedgerSlot() {
    const t = await this._rpcRequest("minimumLedgerSlot", []), e = et(t, It(G()));
    if ("error" in e)
      throw new At(e.error, "failed to get minimum ledger slot");
    return e.result;
  }
  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */
  async getFirstAvailableBlock() {
    const t = await this._rpcRequest("getFirstAvailableBlock", []), e = et(t, fd);
    if ("error" in e)
      throw new At(e.error, "failed to get first available block");
    return e.result;
  }
  /**
   * Fetch information about the current supply
   */
  async getSupply(t) {
    let e = {};
    typeof t == "string" ? e = {
      commitment: t
    } : t ? e = {
      ...t,
      commitment: t && t.commitment || this.commitment
    } : e = {
      commitment: this.commitment
    };
    const n = await this._rpcRequest("getSupply", [e]), s = et(n, ld);
    if ("error" in s)
      throw new At(s.error, "failed to get supply");
    return s.result;
  }
  /**
   * Fetch the current supply of a token mint
   */
  async getTokenSupply(t, e) {
    const n = this._buildArgs([t.toBase58()], e), s = await this._rpcRequest("getTokenSupply", n), i = et(s, kt(Ai));
    if ("error" in i)
      throw new At(i.error, "failed to get token supply");
    return i.result;
  }
  /**
   * Fetch the current balance of a token account
   */
  async getTokenAccountBalance(t, e) {
    const n = this._buildArgs([t.toBase58()], e), s = await this._rpcRequest("getTokenAccountBalance", n), i = et(s, kt(Ai));
    if ("error" in i)
      throw new At(i.error, "failed to get token account balance");
    return i.result;
  }
  /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<GetProgramAccountsResponse>}
   */
  async getTokenAccountsByOwner(t, e, n) {
    const {
      commitment: s,
      config: i
    } = St(n);
    let o = [t.toBase58()];
    "mint" in e ? o.push({
      mint: e.mint.toBase58()
    }) : o.push({
      programId: e.programId.toBase58()
    });
    const u = this._buildArgs(o, s, "base64", i), d = await this._rpcRequest("getTokenAccountsByOwner", u), y = et(d, dd);
    if ("error" in y)
      throw new At(y.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return y.result;
  }
  /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */
  async getParsedTokenAccountsByOwner(t, e, n) {
    let s = [t.toBase58()];
    "mint" in e ? s.push({
      mint: e.mint.toBase58()
    }) : s.push({
      programId: e.programId.toBase58()
    });
    const i = this._buildArgs(s, n, "jsonParsed"), o = await this._rpcRequest("getTokenAccountsByOwner", i), u = et(o, gd);
    if ("error" in u)
      throw new At(u.error, `failed to get token accounts owned by account ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch the 20 largest accounts with their current balances
   */
  async getLargestAccounts(t) {
    const e = {
      ...t,
      commitment: t && t.commitment || this.commitment
    }, n = e.filter || e.commitment ? [e] : [], s = await this._rpcRequest("getLargestAccounts", n), i = et(s, Ed);
    if ("error" in i)
      throw new At(i.error, "failed to get largest accounts");
    return i.result;
  }
  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */
  async getTokenLargestAccounts(t, e) {
    const n = this._buildArgs([t.toBase58()], e), s = await this._rpcRequest("getTokenLargestAccounts", n), i = et(s, hd);
    if ("error" in i)
      throw new At(i.error, "failed to get token largest accounts");
    return i.result;
  }
  /**
   * Fetch all the account info for the specified public key, return with context
   */
  async getAccountInfoAndContext(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgs([t.toBase58()], n, "base64", s), o = await this._rpcRequest("getAccountInfo", i), u = et(o, kt(rt(wn)));
    if ("error" in u)
      throw new At(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch parsed account info for the specified public key
   */
  async getParsedAccountInfo(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgs([t.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getAccountInfo", i), u = et(o, kt(rt(ci)));
    if ("error" in u)
      throw new At(u.error, `failed to get info about account ${t.toBase58()}`);
    return u.result;
  }
  /**
   * Fetch all the account info for the specified public key
   */
  async getAccountInfo(t, e) {
    try {
      return (await this.getAccountInfoAndContext(t, e)).value;
    } catch (n) {
      throw new Error("failed to get info about account " + t.toBase58() + ": " + n);
    }
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleParsedAccounts(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = t.map((y) => y.toBase58()), o = this._buildArgs([i], n, "jsonParsed", s), u = await this._rpcRequest("getMultipleAccounts", o), d = et(u, kt(nt(rt(ci))));
    if ("error" in d)
      throw new At(d.error, `failed to get info for accounts ${i}`);
    return d.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleAccountsInfoAndContext(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = t.map((y) => y.toBase58()), o = this._buildArgs([i], n, "base64", s), u = await this._rpcRequest("getMultipleAccounts", o), d = et(u, kt(nt(rt(wn))));
    if ("error" in d)
      throw new At(d.error, `failed to get info for accounts ${i}`);
    return d.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */
  async getMultipleAccountsInfo(t, e) {
    return (await this.getMultipleAccountsInfoAndContext(t, e)).value;
  }
  /**
   * Returns epoch activation information for a stake account that has been delegated
   *
   * @deprecated Deprecated since RPC v1.18; will be removed in a future version.
   */
  async getStakeActivation(t, e, n) {
    const {
      commitment: s,
      config: i
    } = St(e), o = this._buildArgs([t.toBase58()], s, void 0, {
      ...i,
      epoch: n ?? (i == null ? void 0 : i.epoch)
    }), u = await this._rpcRequest("getStakeActivation", o), d = et(u, It(_d));
    if ("error" in d)
      throw new At(d.error, `failed to get Stake Activation ${t.toBase58()}`);
    return d.result;
  }
  /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getProgramAccounts(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), {
      encoding: i,
      ...o
    } = s || {}, u = this._buildArgs([t.toBase58()], n, i || "base64", {
      ...o,
      ...o.filters ? {
        filters: Cs(o.filters)
      } : null
    }), d = await this._rpcRequest("getProgramAccounts", u), y = nt(Id), R = o.withContext === !0 ? et(d, kt(y)) : et(d, It(y));
    if ("error" in R)
      throw new At(R.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return R.result;
  }
  /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */
  async getParsedProgramAccounts(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgs([t.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getProgramAccounts", i), u = et(o, It(nt(Bd)));
    if ("error" in u)
      throw new At(u.error, `failed to get accounts owned by program ${t.toBase58()}`);
    return u.result;
  }
  /** @deprecated Instead, call `confirmTransaction` and pass in {@link TransactionConfirmationStrategy} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async confirmTransaction(t, e) {
    var i;
    let n;
    if (typeof t == "string")
      n = t;
    else {
      const o = t;
      if ((i = o.abortSignal) != null && i.aborted)
        return Promise.reject(o.abortSignal.reason);
      n = o.signature;
    }
    let s;
    try {
      s = oe.decode(n);
    } catch {
      throw new Error("signature must be base58 encoded: " + n);
    }
    return re(s.length === 64, "signature has invalid length"), typeof t == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
      commitment: e || this.commitment,
      signature: n
    }) : "lastValidBlockHeight" in t ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
      commitment: e || this.commitment,
      strategy: t
    }) : await this.confirmTransactionUsingDurableNonceStrategy({
      commitment: e || this.commitment,
      strategy: t
    });
  }
  getCancellationPromise(t) {
    return new Promise((e, n) => {
      t != null && (t.aborted ? n(t.reason) : t.addEventListener("abort", () => {
        n(t.reason);
      }));
    });
  }
  getTransactionConfirmationPromise({
    commitment: t,
    signature: e
  }) {
    let n, s, i = !1;
    const o = new Promise((d, y) => {
      try {
        n = this.onSignature(e, (Q, D) => {
          n = void 0;
          const x = {
            context: D,
            value: Q
          };
          d({
            __type: Ye.PROCESSED,
            response: x
          });
        }, t);
        const R = new Promise((Q) => {
          n == null ? Q() : s = this._onSubscriptionStateChange(n, (D) => {
            D === "subscribed" && Q();
          });
        });
        (async () => {
          if (await R, i) return;
          const Q = await this.getSignatureStatus(e);
          if (i || Q == null)
            return;
          const {
            context: D,
            value: x
          } = Q;
          if (x != null)
            if (x != null && x.err)
              y(x.err);
            else {
              switch (t) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (x.confirmationStatus === "processed")
                    return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (x.confirmationStatus === "processed" || x.confirmationStatus === "confirmed")
                    return;
                  break;
                }
                // exhaust enums to ensure full coverage
                case "processed":
                case "recent":
              }
              i = !0, d({
                __type: Ye.PROCESSED,
                response: {
                  context: D,
                  value: x
                }
              });
            }
        })();
      } catch (R) {
        y(R);
      }
    });
    return {
      abortConfirmation: () => {
        s && (s(), s = void 0), n != null && (this.removeSignatureListener(n), n = void 0);
      },
      confirmationPromise: o
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment: t,
    strategy: {
      abortSignal: e,
      lastValidBlockHeight: n,
      signature: s
    }
  }) {
    let i = !1;
    const o = new Promise((Q) => {
      const D = async () => {
        try {
          return await this.getBlockHeight(t);
        } catch {
          return -1;
        }
      };
      (async () => {
        let x = await D();
        if (!i) {
          for (; x <= n; )
            if (await rn(1e3), i || (x = await D(), i)) return;
          Q({
            __type: Ye.BLOCKHEIGHT_EXCEEDED
          });
        }
      })();
    }), {
      abortConfirmation: u,
      confirmationPromise: d
    } = this.getTransactionConfirmationPromise({
      commitment: t,
      signature: s
    }), y = this.getCancellationPromise(e);
    let R;
    try {
      const Q = await Promise.race([y, d, o]);
      if (Q.__type === Ye.PROCESSED)
        R = Q.response;
      else
        throw new Io(s);
    } finally {
      i = !0, u();
    }
    return R;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment: t,
    strategy: {
      abortSignal: e,
      minContextSlot: n,
      nonceAccountPubkey: s,
      nonceValue: i,
      signature: o
    }
  }) {
    let u = !1;
    const d = new Promise((x) => {
      let L = i, N = null;
      const M = async () => {
        try {
          const {
            context: V,
            value: j
          } = await this.getNonceAndContext(s, {
            commitment: t,
            minContextSlot: n
          });
          return N = V.slot, j == null ? void 0 : j.nonce;
        } catch {
          return L;
        }
      };
      (async () => {
        if (L = await M(), !u)
          for (; ; ) {
            if (i !== L) {
              x({
                __type: Ye.NONCE_INVALID,
                slotInWhichNonceDidAdvance: N
              });
              return;
            }
            if (await rn(2e3), u || (L = await M(), u)) return;
          }
      })();
    }), {
      abortConfirmation: y,
      confirmationPromise: R
    } = this.getTransactionConfirmationPromise({
      commitment: t,
      signature: o
    }), Q = this.getCancellationPromise(e);
    let D;
    try {
      const x = await Promise.race([Q, R, d]);
      if (x.__type === Ye.PROCESSED)
        D = x.response;
      else {
        let L;
        for (; ; ) {
          const N = await this.getSignatureStatus(o);
          if (N == null)
            break;
          if (N.context.slot < (x.slotInWhichNonceDidAdvance ?? n)) {
            await rn(400);
            continue;
          }
          L = N;
          break;
        }
        if (L != null && L.value) {
          const N = t || "finalized", {
            confirmationStatus: M
          } = L.value;
          switch (N) {
            case "processed":
            case "recent":
              if (M !== "processed" && M !== "confirmed" && M !== "finalized")
                throw new pn(o);
              break;
            case "confirmed":
            case "single":
            case "singleGossip":
              if (M !== "confirmed" && M !== "finalized")
                throw new pn(o);
              break;
            case "finalized":
            case "max":
            case "root":
              if (M !== "finalized")
                throw new pn(o);
              break;
            default:
          }
          D = {
            context: L.context,
            value: {
              err: L.value.err
            }
          };
        } else
          throw new pn(o);
      }
    } finally {
      u = !0, y();
    }
    return D;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment: t,
    signature: e
  }) {
    let n;
    const s = new Promise((d) => {
      let y = this._confirmTransactionInitialTimeout || 6e4;
      switch (t) {
        case "processed":
        case "recent":
        case "single":
        case "confirmed":
        case "singleGossip": {
          y = this._confirmTransactionInitialTimeout || 3e4;
          break;
        }
      }
      n = setTimeout(() => d({
        __type: Ye.TIMED_OUT,
        timeoutMs: y
      }), y);
    }), {
      abortConfirmation: i,
      confirmationPromise: o
    } = this.getTransactionConfirmationPromise({
      commitment: t,
      signature: e
    });
    let u;
    try {
      const d = await Promise.race([o, s]);
      if (d.__type === Ye.PROCESSED)
        u = d.response;
      else
        throw new po(e, d.timeoutMs / 1e3);
    } finally {
      clearTimeout(n), i();
    }
    return u;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getClusterNodes() {
    const t = await this._rpcRequest("getClusterNodes", []), e = et(t, It(nt(Od)));
    if ("error" in e)
      throw new At(e.error, "failed to get cluster nodes");
    return e.result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getVoteAccounts(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getVoteAccounts", e), s = et(n, Td);
    if ("error" in s)
      throw new At(s.error, "failed to get vote accounts");
    return s.result;
  }
  /**
   * Fetch the current slot that the node is processing
   */
  async getSlot(t) {
    const {
      commitment: e,
      config: n
    } = St(t), s = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getSlot", s), o = et(i, It(G()));
    if ("error" in o)
      throw new At(o.error, "failed to get slot");
    return o.result;
  }
  /**
   * Fetch the current slot leader of the cluster
   */
  async getSlotLeader(t) {
    const {
      commitment: e,
      config: n
    } = St(t), s = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getSlotLeader", s), o = et(i, It($()));
    if ("error" in o)
      throw new At(o.error, "failed to get slot leader");
    return o.result;
  }
  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */
  async getSlotLeaders(t, e) {
    const n = [t, e], s = await this._rpcRequest("getSlotLeaders", n), i = et(s, It(nt(Tt)));
    if ("error" in i)
      throw new At(i.error, "failed to get slot leaders");
    return i.result;
  }
  /**
   * Fetch the current status of a signature
   */
  async getSignatureStatus(t, e) {
    const {
      context: n,
      value: s
    } = await this.getSignatureStatuses([t], e);
    re(s.length === 1);
    const i = s[0];
    return {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the current statuses of a batch of signatures
   */
  async getSignatureStatuses(t, e) {
    const n = [t];
    e && n.push(e);
    const s = await this._rpcRequest("getSignatureStatuses", n), i = et(s, Dd);
    if ("error" in i)
      throw new At(i.error, "failed to get signature status");
    return i.result;
  }
  /**
   * Fetch the current transaction count of the cluster
   */
  async getTransactionCount(t) {
    const {
      commitment: e,
      config: n
    } = St(t), s = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getTransactionCount", s), o = et(i, It(G()));
    if ("error" in o)
      throw new At(o.error, "failed to get transaction count");
    return o.result;
  }
  /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since RPC v1.2.8. Please use {@link getSupply} instead.
   */
  async getTotalSupply(t) {
    return (await this.getSupply({
      commitment: t,
      excludeNonCirculatingAccountsList: !0
    })).value.total;
  }
  /**
   * Fetch the cluster InflationGovernor parameters
   */
  async getInflationGovernor(t) {
    const e = this._buildArgs([], t), n = await this._rpcRequest("getInflationGovernor", e), s = et(n, sd);
    if ("error" in s)
      throw new At(s.error, "failed to get inflation");
    return s.result;
  }
  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */
  async getInflationReward(t, e, n) {
    const {
      commitment: s,
      config: i
    } = St(n), o = this._buildArgs([t.map((y) => y.toBase58())], s, void 0, {
      ...i,
      epoch: e ?? (i == null ? void 0 : i.epoch)
    }), u = await this._rpcRequest("getInflationReward", o), d = et(u, Jh);
    if ("error" in d)
      throw new At(d.error, "failed to get inflation reward");
    return d.result;
  }
  /**
   * Fetch the specific inflation values for the current epoch
   */
  async getInflationRate() {
    const t = await this._rpcRequest("getInflationRate", []), e = et(t, od);
    if ("error" in e)
      throw new At(e.error, "failed to get inflation rate");
    return e.result;
  }
  /**
   * Fetch the Epoch Info parameters
   */
  async getEpochInfo(t) {
    const {
      commitment: e,
      config: n
    } = St(t), s = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getEpochInfo", s), o = et(i, ad);
    if ("error" in o)
      throw new At(o.error, "failed to get epoch info");
    return o.result;
  }
  /**
   * Fetch the Epoch Schedule parameters
   */
  async getEpochSchedule() {
    const t = await this._rpcRequest("getEpochSchedule", []), e = et(t, cd);
    if ("error" in e)
      throw new At(e.error, "failed to get epoch schedule");
    const n = e.result;
    return new Th(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot);
  }
  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */
  async getLeaderSchedule() {
    const t = await this._rpcRequest("getLeaderSchedule", []), e = et(t, ud);
    if ("error" in e)
      throw new At(e.error, "failed to get leader schedule");
    return e.result;
  }
  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */
  async getMinimumBalanceForRentExemption(t, e) {
    const n = this._buildArgs([t], e), s = await this._rpcRequest("getMinimumBalanceForRentExemption", n), i = et(s, kd);
    return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result;
  }
  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since RPC v1.9.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhashAndContext(t) {
    const {
      context: e,
      value: {
        blockhash: n
      }
    } = await this.getLatestBlockhashAndContext(t);
    return {
      context: e,
      value: {
        blockhash: n,
        feeCalculator: {
          get lamportsPerSignature() {
            throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.");
          },
          toJSON() {
            return {};
          }
        }
      }
    };
  }
  /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */
  async getRecentPerformanceSamples(t) {
    const e = await this._rpcRequest("getRecentPerformanceSamples", t ? [t] : []), n = et(e, Wd);
    if ("error" in n)
      throw new At(n.error, "failed to get recent performance samples");
    return n.result;
  }
  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since RPC v1.9.0. Please use {@link getFeeForMessage} instead.
   */
  async getFeeCalculatorForBlockhash(t, e) {
    const n = this._buildArgs([t], e), s = await this._rpcRequest("getFeeCalculatorForBlockhash", n), i = et(s, jd);
    if ("error" in i)
      throw new At(i.error, "failed to get fee calculator");
    const {
      context: o,
      value: u
    } = i.result;
    return {
      context: o,
      value: u !== null ? u.feeCalculator : null
    };
  }
  /**
   * Fetch the fee for a message from the cluster, return with context
   */
  async getFeeForMessage(t, e) {
    const n = ln(t.serialize()).toString("base64"), s = this._buildArgs([n], e), i = await this._rpcRequest("getFeeForMessage", s), o = et(i, kt(rt(G())));
    if ("error" in o)
      throw new At(o.error, "failed to get fee for message");
    if (o.result === null)
      throw new Error("invalid blockhash");
    return o.result;
  }
  /**
   * Fetch a list of prioritization fees from recent blocks.
   */
  async getRecentPrioritizationFees(t) {
    var o;
    const e = (o = t == null ? void 0 : t.lockedWritableAccounts) == null ? void 0 : o.map((u) => u.toBase58()), n = e != null && e.length ? [e] : [], s = await this._rpcRequest("getRecentPrioritizationFees", n), i = et(s, Ad);
    if ("error" in i)
      throw new At(i.error, "failed to get recent prioritization fees");
    return i.result;
  }
  /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since RPC v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhash(t) {
    try {
      return (await this.getRecentBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhash(t) {
    try {
      return (await this.getLatestBlockhashAndContext(t)).value;
    } catch (e) {
      throw new Error("failed to get recent blockhash: " + e);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhashAndContext(t) {
    const {
      commitment: e,
      config: n
    } = St(t), s = this._buildArgs([], e, void 0, n), i = await this._rpcRequest("getLatestBlockhash", s), o = et(i, zd);
    if ("error" in o)
      throw new At(o.error, "failed to get latest blockhash");
    return o.result;
  }
  /**
   * Returns whether a blockhash is still valid or not
   */
  async isBlockhashValid(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgs([t], n, void 0, s), o = await this._rpcRequest("isBlockhashValid", i), u = et(o, Xd);
    if ("error" in u)
      throw new At(u.error, "failed to determine if the blockhash `" + t + "`is valid");
    return u.result;
  }
  /**
   * Fetch the node version
   */
  async getVersion() {
    const t = await this._rpcRequest("getVersion", []), e = et(t, It(Zh));
    if ("error" in e)
      throw new At(e.error, "failed to get version");
    return e.result;
  }
  /**
   * Fetch the genesis hash
   */
  async getGenesisHash() {
    const t = await this._rpcRequest("getGenesisHash", []), e = et(t, It($()));
    if ("error" in e)
      throw new At(e.error, "failed to get genesis hash");
    return e.result;
  }
  /**
   * Fetch a processed block from the cluster.
   *
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getBlock(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgsAtLeastConfirmed([t], n, void 0, s), o = await this._rpcRequest("getBlock", i);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const u = et(o, Yd);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        case "none": {
          const u = et(o, Pd);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        default: {
          const u = et(o, Gd);
          if ("error" in u)
            throw u.error;
          const {
            result: d
          } = u;
          return d ? {
            ...d,
            transactions: d.transactions.map(({
              transaction: y,
              meta: R,
              version: Q
            }) => ({
              meta: R,
              transaction: {
                ...y,
                message: Zr(Q, y.message)
              },
              version: Q
            }))
          } : null;
        }
      }
    } catch (u) {
      throw new At(u, "failed to get confirmed block");
    }
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized block
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getParsedBlock(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgsAtLeastConfirmed([t], n, "jsonParsed", s), o = await this._rpcRequest("getBlock", i);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const u = et(o, Jd);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        case "none": {
          const u = et(o, qd);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
        default: {
          const u = et(o, Hd);
          if ("error" in u)
            throw u.error;
          return u.result;
        }
      }
    } catch (u) {
      throw new At(u, "failed to get block");
    }
  }
  /*
   * Returns recent block production information from the current or previous epoch
   */
  async getBlockProduction(t) {
    let e, n;
    if (typeof t == "string")
      n = t;
    else if (t) {
      const {
        commitment: u,
        ...d
      } = t;
      n = u, e = d;
    }
    const s = this._buildArgs([], n, "base64", e), i = await this._rpcRequest("getBlockProduction", s), o = et(i, ed);
    if ("error" in o)
      throw new At(o.error, "failed to get block production information");
    return o.result;
  }
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   *
   * @deprecated Instead, call `getTransaction` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransaction(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgsAtLeastConfirmed([t], n, void 0, s), o = await this._rpcRequest("getTransaction", i), u = et(o, $r);
    if ("error" in u)
      throw new At(u.error, "failed to get transaction");
    const d = u.result;
    return d && {
      ...d,
      transaction: {
        ...d.transaction,
        message: Zr(d.version, d.transaction.message)
      }
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */
  async getParsedTransaction(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = this._buildArgsAtLeastConfirmed([t], n, "jsonParsed", s), o = await this._rpcRequest("getTransaction", i), u = et(o, Un);
    if ("error" in u)
      throw new At(u.error, "failed to get transaction");
    return u.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */
  async getParsedTransactions(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = t.map((d) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([d], n, "jsonParsed", s)
    }));
    return (await this._rpcBatchRequest(i)).map((d) => {
      const y = et(d, Un);
      if ("error" in y)
        throw new At(y.error, "failed to get transactions");
      return y.result;
    });
  }
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   *
   * @deprecated Instead, call `getTransactions` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransactions(t, e) {
    const {
      commitment: n,
      config: s
    } = St(e), i = t.map((d) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([d], n, void 0, s)
    }));
    return (await this._rpcBatchRequest(i)).map((d) => {
      const y = et(d, $r);
      if ("error" in y)
        throw new At(y.error, "failed to get transactions");
      const R = y.result;
      return R && {
        ...R,
        transaction: {
          ...R.transaction,
          message: Zr(R.version, R.transaction.message)
        }
      };
    });
  }
  /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getBlock} instead.
   */
  async getConfirmedBlock(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e), s = await this._rpcRequest("getBlock", n), i = et(s, Kd);
    if ("error" in i)
      throw new At(i.error, "failed to get confirmed block");
    const o = i.result;
    if (!o)
      throw new Error("Confirmed block " + t + " not found");
    const u = {
      ...o,
      transactions: o.transactions.map(({
        transaction: d,
        meta: y
      }) => {
        const R = new Ke(d.message);
        return {
          meta: y,
          transaction: {
            ...d,
            message: R
          }
        };
      })
    };
    return {
      ...u,
      transactions: u.transactions.map(({
        transaction: d,
        meta: y
      }) => ({
        meta: y,
        transaction: ke.populate(d.message, d.signatures)
      }))
    };
  }
  /**
   * Fetch confirmed blocks between two slots
   */
  async getBlocks(t, e, n) {
    const s = this._buildArgsAtLeastConfirmed(e !== void 0 ? [t, e] : [t], n), i = await this._rpcRequest("getBlocks", s), o = et(i, It(nt(G())));
    if ("error" in o)
      throw new At(o.error, "failed to get blocks");
    return o.result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */
  async getBlockSignatures(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getBlock", n), i = et(s, ms);
    if ("error" in i)
      throw new At(i.error, "failed to get block");
    const o = i.result;
    if (!o)
      throw new Error("Block " + t + " not found");
    return o;
  }
  /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getBlockSignatures} instead.
   */
  async getConfirmedBlockSignatures(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getBlock", n), i = et(s, ms);
    if ("error" in i)
      throw new At(i.error, "failed to get confirmed block");
    const o = i.result;
    if (!o)
      throw new Error("Confirmed block " + t + " not found");
    return o;
  }
  /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getTransaction} instead.
   */
  async getConfirmedTransaction(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e), s = await this._rpcRequest("getTransaction", n), i = et(s, $r);
    if ("error" in i)
      throw new At(i.error, "failed to get transaction");
    const o = i.result;
    if (!o) return o;
    const u = new Ke(o.transaction.message), d = o.transaction.signatures;
    return {
      ...o,
      transaction: ke.populate(u, d)
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getParsedTransaction} instead.
   */
  async getParsedConfirmedTransaction(t, e) {
    const n = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"), s = await this._rpcRequest("getTransaction", n), i = et(s, Un);
    if ("error" in i)
      throw new At(i.error, "failed to get confirmed transaction");
    return i.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getParsedTransactions} instead.
   */
  async getParsedConfirmedTransactions(t, e) {
    const n = t.map((o) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([o], e, "jsonParsed")
    }));
    return (await this._rpcBatchRequest(n)).map((o) => {
      const u = et(o, Un);
      if ("error" in u)
        throw new At(u.error, "failed to get confirmed transactions");
      return u.result;
    });
  }
  /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since RPC v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */
  async getConfirmedSignaturesForAddress(t, e, n) {
    let s = {}, i = await this.getFirstAvailableBlock();
    for (; !("until" in s) && (e--, !(e <= 0 || e < i)); )
      try {
        const d = await this.getConfirmedBlockSignatures(e, "finalized");
        d.signatures.length > 0 && (s.until = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped"))
          continue;
        throw d;
      }
    let o = await this.getSlot("finalized");
    for (; !("before" in s) && (n++, !(n > o)); )
      try {
        const d = await this.getConfirmedBlockSignatures(n);
        d.signatures.length > 0 && (s.before = d.signatures[d.signatures.length - 1].toString());
      } catch (d) {
        if (d instanceof Error && d.message.includes("skipped"))
          continue;
        throw d;
      }
    return (await this.getConfirmedSignaturesForAddress2(t, s)).map((d) => d.signature);
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getSignaturesForAddress} instead.
   */
  async getConfirmedSignaturesForAddress2(t, e, n) {
    const s = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e), i = await this._rpcRequest("getConfirmedSignaturesForAddress2", s), o = et(i, Cd);
    if ("error" in o)
      throw new At(o.error, "failed to get confirmed signatures for address");
    return o.result;
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getSignaturesForAddress(t, e, n) {
    const s = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e), i = await this._rpcRequest("getSignaturesForAddress", s), o = et(i, wd);
    if ("error" in o)
      throw new At(o.error, "failed to get signatures for address");
    return o.result;
  }
  async getAddressLookupTable(t, e) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(t, e);
    let i = null;
    return s !== null && (i = new _s({
      key: t,
      state: _s.deserialize(s.data)
    })), {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */
  async getNonceAndContext(t, e) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(t, e);
    let i = null;
    return s !== null && (i = mi.fromAccountData(s.data)), {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster
   */
  async getNonce(t, e) {
    return await this.getNonceAndContext(t, e).then((n) => n.value).catch((n) => {
      throw new Error("failed to get nonce for account " + t.toBase58() + ": " + n);
    });
  }
  /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */
  async requestAirdrop(t, e) {
    const n = await this._rpcRequest("requestAirdrop", [t.toBase58(), e]), s = et(n, Zd);
    if ("error" in s)
      throw new At(s.error, `airdrop to ${t.toBase58()} failed`);
    return s.result;
  }
  /**
   * @internal
   */
  async _blockhashWithExpiryBlockHeight(t) {
    if (!t) {
      for (; this._pollingBlockhash; )
        await rn(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= Gh;
      if (this._blockhashInfo.latestBlockhash !== null && !n)
        return this._blockhashInfo.latestBlockhash;
    }
    return await this._pollNewBlockhash();
  }
  /**
   * @internal
   */
  async _pollNewBlockhash() {
    this._pollingBlockhash = !0;
    try {
      const t = Date.now(), e = this._blockhashInfo.latestBlockhash, n = e ? e.blockhash : null;
      for (let s = 0; s < 50; s++) {
        const i = await this.getLatestBlockhash("finalized");
        if (n !== i.blockhash)
          return this._blockhashInfo = {
            latestBlockhash: i,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, i;
        await rn(bh / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - t}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  /**
   * get the stake minimum delegation
   */
  async getStakeMinimumDelegation(t) {
    const {
      commitment: e,
      config: n
    } = St(t), s = this._buildArgs([], e, "base64", n), i = await this._rpcRequest("getStakeMinimumDelegation", s), o = et(i, kt(G()));
    if ("error" in o)
      throw new At(o.error, "failed to get stake minimum delegation");
    return o.result;
  }
  /**
   * Simulate a transaction
   *
   * @deprecated Instead, call {@link simulateTransaction} with {@link
   * VersionedTransaction} and {@link SimulateTransactionConfig} parameters
   */
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async simulateTransaction(t, e, n) {
    if ("message" in t) {
      const N = t.serialize(), M = pt.Buffer.from(N).toString("base64");
      if (Array.isArray(e) || n !== void 0)
        throw new Error("Invalid arguments");
      const V = e || {};
      V.encoding = "base64", "commitment" in V || (V.commitment = this.commitment), e && typeof e == "object" && "innerInstructions" in e && (V.innerInstructions = e.innerInstructions);
      const j = [M, V], K = await this._rpcRequest("simulateTransaction", j), P = et(K, ws);
      if ("error" in P)
        throw new Error("failed to simulate transaction: " + P.error.message);
      return P.result;
    }
    let s;
    if (t instanceof ke) {
      let L = t;
      s = new ke(), s.feePayer = L.feePayer, s.instructions = t.instructions, s.nonceInfo = L.nonceInfo, s.signatures = L.signatures;
    } else
      s = ke.populate(t), s._message = s._json = void 0;
    if (e !== void 0 && !Array.isArray(e))
      throw new Error("Invalid arguments");
    const i = e;
    if (s.nonceInfo && i)
      s.sign(...i);
    else {
      let L = this._disableBlockhashCaching;
      for (; ; ) {
        const N = await this._blockhashWithExpiryBlockHeight(L);
        if (s.lastValidBlockHeight = N.lastValidBlockHeight, s.recentBlockhash = N.blockhash, !i) break;
        if (s.sign(...i), !s.signature)
          throw new Error("!signature");
        const M = s.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(M) && !this._blockhashInfo.transactionSignatures.includes(M)) {
          this._blockhashInfo.simulatedSignatures.push(M);
          break;
        } else
          L = !0;
      }
    }
    const o = s._compile(), u = o.serialize(), y = s._serialize(u).toString("base64"), R = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (n) {
      const L = (Array.isArray(n) ? n : o.nonProgramIds()).map((N) => N.toBase58());
      R.accounts = {
        encoding: "base64",
        addresses: L
      };
    }
    i && (R.sigVerify = !0), e && typeof e == "object" && "innerInstructions" in e && (R.innerInstructions = e.innerInstructions);
    const Q = [y, R], D = await this._rpcRequest("simulateTransaction", Q), x = et(D, ws);
    if ("error" in x) {
      let L;
      if ("data" in x.error && (L = x.error.data.logs, L && Array.isArray(L))) {
        const N = `
    `, M = N + L.join(N);
        console.error(x.error.message, M);
      }
      throw new Es({
        action: "simulate",
        signature: "",
        transactionMessage: x.error.message,
        logs: L
      });
    }
    return x.result;
  }
  /**
   * Sign and send a transaction
   *
   * @deprecated Instead, call {@link sendTransaction} with a {@link
   * VersionedTransaction}
   */
  /**
   * Send a signed transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  /**
   * Sign and send a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async sendTransaction(t, e, n) {
    if ("version" in t) {
      if (e && Array.isArray(e))
        throw new Error("Invalid arguments");
      const o = t.serialize();
      return await this.sendRawTransaction(o, e);
    }
    if (e === void 0 || !Array.isArray(e))
      throw new Error("Invalid arguments");
    const s = e;
    if (t.nonceInfo)
      t.sign(...s);
    else {
      let o = this._disableBlockhashCaching;
      for (; ; ) {
        const u = await this._blockhashWithExpiryBlockHeight(o);
        if (t.lastValidBlockHeight = u.lastValidBlockHeight, t.recentBlockhash = u.blockhash, t.sign(...s), !t.signature)
          throw new Error("!signature");
        const d = t.signature.toString("base64");
        if (this._blockhashInfo.transactionSignatures.includes(d))
          o = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(d);
          break;
        }
      }
    }
    const i = t.serialize();
    return await this.sendRawTransaction(i, n);
  }
  /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */
  async sendRawTransaction(t, e) {
    const n = ln(t).toString("base64");
    return await this.sendEncodedTransaction(n, e);
  }
  /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */
  async sendEncodedTransaction(t, e) {
    const n = {
      encoding: "base64"
    }, s = e && e.skipPreflight, i = s === !0 ? "processed" : e && e.preflightCommitment || this.commitment;
    e && e.maxRetries != null && (n.maxRetries = e.maxRetries), e && e.minContextSlot != null && (n.minContextSlot = e.minContextSlot), s && (n.skipPreflight = s), i && (n.preflightCommitment = i);
    const o = [t, n], u = await this._rpcRequest("sendTransaction", o), d = et(u, $d);
    if ("error" in d) {
      let y;
      throw "data" in d.error && (y = d.error.data.logs), new Es({
        action: s ? "send" : "simulate",
        signature: "",
        transactionMessage: d.error.message,
        logs: y
      });
    }
    return d.result;
  }
  /**
   * @internal
   */
  _wsOnOpen() {
    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
      (async () => {
        try {
          await this._rpcWebSocket.notify("ping");
        } catch {
        }
      })();
    }, 5e3), this._updateSubscriptions();
  }
  /**
   * @internal
   */
  _wsOnError(t) {
    this._rpcWebSocketConnected = !1, console.error("ws error:", t.message);
  }
  /**
   * @internal
   */
  _wsOnClose(t) {
    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), t === 1e3) {
      this._updateSubscriptions();
      return;
    }
    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, n]) => {
      this._setSubscription(e, {
        ...n,
        state: "pending"
      });
    });
  }
  /**
   * @internal
   */
  _setSubscription(t, e) {
    var s;
    const n = (s = this._subscriptionsByHash[t]) == null ? void 0 : s.state;
    if (this._subscriptionsByHash[t] = e, n !== e.state) {
      const i = this._subscriptionStateChangeCallbacksByHash[t];
      i && i.forEach((o) => {
        try {
          o(e.state);
        } catch {
        }
      });
    }
  }
  /**
   * @internal
   */
  _onSubscriptionStateChange(t, e) {
    var i;
    const n = this._subscriptionHashByClientSubscriptionId[t];
    if (n == null)
      return () => {
      };
    const s = (i = this._subscriptionStateChangeCallbacksByHash)[n] || (i[n] = /* @__PURE__ */ new Set());
    return s.add(e), () => {
      s.delete(e), s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n];
    };
  }
  /**
   * @internal
   */
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
        this._rpcWebSocketIdleTimeout = null;
        try {
          this._rpcWebSocket.close();
        } catch (n) {
          n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`);
        }
      }, 500));
      return;
    }
    if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();
      return;
    }
    const t = this._rpcWebSocketGeneration, e = () => t === this._rpcWebSocketGeneration;
    await Promise.all(
      // Don't be tempted to change this to `Object.entries`. We call
      // `_updateSubscriptions` recursively when processing the state,
      // so it's important that we look up the *current* version of
      // each subscription, every time we process a hash.
      Object.keys(this._subscriptionsByHash).map(async (n) => {
        const s = this._subscriptionsByHash[n];
        if (s !== void 0)
          switch (s.state) {
            case "pending":
            case "unsubscribed":
              if (s.callbacks.size === 0) {
                delete this._subscriptionsByHash[n], s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId], await this._updateSubscriptions();
                return;
              }
              await (async () => {
                const {
                  args: i,
                  method: o
                } = s;
                try {
                  this._setSubscription(n, {
                    ...s,
                    state: "subscribing"
                  });
                  const u = await this._rpcWebSocket.call(o, i);
                  this._setSubscription(n, {
                    ...s,
                    serverSubscriptionId: u,
                    state: "subscribed"
                  }), this._subscriptionCallbacksByServerSubscriptionId[u] = s.callbacks, await this._updateSubscriptions();
                } catch (u) {
                  if (console.error(`Received ${u instanceof Error ? "" : "JSON-RPC "}error calling \`${o}\``, {
                    args: i,
                    error: u
                  }), !e())
                    return;
                  this._setSubscription(n, {
                    ...s,
                    state: "pending"
                  }), await this._updateSubscriptions();
                }
              })();
              break;
            case "subscribed":
              s.callbacks.size === 0 && await (async () => {
                const {
                  serverSubscriptionId: i,
                  unsubscribeMethod: o
                } = s;
                if (this._subscriptionsAutoDisposedByRpc.has(i))
                  this._subscriptionsAutoDisposedByRpc.delete(i);
                else {
                  this._setSubscription(n, {
                    ...s,
                    state: "unsubscribing"
                  }), this._setSubscription(n, {
                    ...s,
                    state: "unsubscribing"
                  });
                  try {
                    await this._rpcWebSocket.call(o, [i]);
                  } catch (u) {
                    if (u instanceof Error && console.error(`${o} error:`, u.message), !e())
                      return;
                    this._setSubscription(n, {
                      ...s,
                      state: "subscribed"
                    }), await this._updateSubscriptions();
                    return;
                  }
                }
                this._setSubscription(n, {
                  ...s,
                  state: "unsubscribed"
                }), await this._updateSubscriptions();
              })();
              break;
          }
      })
    );
  }
  /**
   * @internal
   */
  _handleServerNotification(t, e) {
    const n = this._subscriptionCallbacksByServerSubscriptionId[t];
    n !== void 0 && n.forEach((s) => {
      try {
        s(
          ...e
        );
      } catch (i) {
        console.error(i);
      }
    });
  }
  /**
   * @internal
   */
  _wsOnAccountNotification(t) {
    const {
      result: e,
      subscription: n
    } = et(t, yd);
    this._handleServerNotification(n, [e.value, e.context]);
  }
  /**
   * @internal
   */
  _makeSubscription(t, e) {
    const n = this._nextClientSubscriptionId++, s = ps([t.method, e]), i = this._subscriptionsByHash[s];
    return i === void 0 ? this._subscriptionsByHash[s] = {
      ...t,
      args: e,
      callbacks: /* @__PURE__ */ new Set([t.callback]),
      state: "pending"
    } : i.callbacks.add(t.callback), this._subscriptionHashByClientSubscriptionId[n] = s, this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n], delete this._subscriptionHashByClientSubscriptionId[n];
      const o = this._subscriptionsByHash[s];
      re(o !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), o.callbacks.delete(t.callback), await this._updateSubscriptions();
    }, this._updateSubscriptions(), n;
  }
  /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param config
   * @return subscription id
   */
  /** @deprecated Instead, pass in an {@link AccountSubscriptionConfig} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  onAccountChange(t, e, n) {
    const {
      commitment: s,
      config: i
    } = St(n), o = this._buildArgs(
      [t.toBase58()],
      s || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      i
    );
    return this._makeSubscription({
      callback: e,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, o);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "account change");
  }
  /**
   * @internal
   */
  _wsOnProgramAccountNotification(t) {
    const {
      result: e,
      subscription: n
    } = et(t, Rd);
    this._handleServerNotification(n, [{
      accountId: e.value.pubkey,
      accountInfo: e.value.account
    }, e.context]);
  }
  /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param config
   * @return subscription id
   */
  /** @deprecated Instead, pass in a {@link ProgramAccountSubscriptionConfig} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  onProgramAccountChange(t, e, n, s) {
    const {
      commitment: i,
      config: o
    } = St(n), u = this._buildArgs(
      [t.toBase58()],
      i || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      o || (s ? {
        filters: Cs(s)
      } : void 0)
      /* extra */
    );
    return this._makeSubscription({
      callback: e,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, u);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeProgramAccountChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "program account change");
  }
  /**
   * Registers a callback to be invoked whenever logs are emitted.
   */
  onLogs(t, e, n) {
    const s = this._buildArgs(
      [typeof t == "object" ? {
        mentions: [t.toString()]
      } : t],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    );
    return this._makeSubscription({
      callback: e,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, s);
  }
  /**
   * Deregister a logs callback.
   *
   * @param clientSubscriptionId client subscription id to deregister.
   */
  async removeOnLogsListener(t) {
    await this._unsubscribeClientSubscription(t, "logs");
  }
  /**
   * @internal
   */
  _wsOnLogsNotification(t) {
    const {
      result: e,
      subscription: n
    } = et(t, eg);
    this._handleServerNotification(n, [e.value, e.context]);
  }
  /**
   * @internal
   */
  _wsOnSlotNotification(t) {
    const {
      result: e,
      subscription: n
    } = et(t, bd);
    this._handleServerNotification(n, [e]);
  }
  /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */
  onSlotChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotSubscribe",
        unsubscribeMethod: "slotUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSlotChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "slot change");
  }
  /**
   * @internal
   */
  _wsOnSlotUpdatesNotification(t) {
    const {
      result: e,
      subscription: n
    } = et(t, Qd);
    this._handleServerNotification(n, [e]);
  }
  /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */
  onSlotUpdate(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "slotsUpdatesSubscribe",
        unsubscribeMethod: "slotsUpdatesUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a slot update notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSlotUpdateListener(t) {
    await this._unsubscribeClientSubscription(t, "slot update");
  }
  /**
   * @internal
   */
  async _unsubscribeClientSubscription(t, e) {
    const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
    n ? await n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`);
  }
  _buildArgs(t, e, n, s) {
    const i = e || this._commitment;
    if (i || n || s) {
      let o = {};
      n && (o.encoding = n), i && (o.commitment = i), s && (o = Object.assign(o, s)), t.push(o);
    }
    return t;
  }
  /**
   * @internal
   */
  _buildArgsAtLeastConfirmed(t, e, n, s) {
    const i = e || this._commitment;
    if (i && !["confirmed", "finalized"].includes(i))
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    return this._buildArgs(t, e, n, s);
  }
  /**
   * @internal
   */
  _wsOnSignatureNotification(t) {
    const {
      result: e,
      subscription: n
    } = et(t, vd);
    e.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n), this._handleServerNotification(n, e.value === "receivedSignature" ? [{
      type: "received"
    }, e.context] : [{
      type: "status",
      result: e.value
    }, e.context]);
  }
  /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */
  onSignature(t, e, n) {
    const s = this._buildArgs(
      [t],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    ), i = this._makeSubscription({
      callback: (o, u) => {
        if (o.type === "status") {
          e(o.result, u);
          try {
            this.removeSignatureListener(i);
          } catch {
          }
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, s);
    return i;
  }
  /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */
  onSignatureWithOptions(t, e, n) {
    const {
      commitment: s,
      ...i
    } = {
      ...n,
      commitment: n && n.commitment || this._commitment || "finalized"
      // Apply connection/server default.
    }, o = this._buildArgs([t], s, void 0, i), u = this._makeSubscription({
      callback: (d, y) => {
        e(d, y);
        try {
          this.removeSignatureListener(u);
        } catch {
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, o);
    return u;
  }
  /**
   * Deregister a signature notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSignatureListener(t) {
    await this._unsubscribeClientSubscription(t, "signature result");
  }
  /**
   * @internal
   */
  _wsOnRootNotification(t) {
    const {
      result: e,
      subscription: n
    } = et(t, xd);
    this._handleServerNotification(n, [e]);
  }
  /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */
  onRootChange(t) {
    return this._makeSubscription(
      {
        callback: t,
        method: "rootSubscribe",
        unsubscribeMethod: "rootUnsubscribe"
      },
      []
      /* args */
    );
  }
  /**
   * Deregister a root notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeRootChangeListener(t) {
    await this._unsubscribeClientSubscription(t, "root change");
  }
}
Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: v.struct([v.u32("instruction"), hn("recentSlot"), v.u8("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: v.struct([v.u32("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: v.struct([v.u32("instruction"), hn(), v.seq(Bt(), v.offset(v.u32(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: v.struct([v.u32("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: v.struct([v.u32("instruction")])
  }
});
new ut("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: v.struct([v.u8("instruction"), v.u32("units"), v.u32("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: v.struct([v.u8("instruction"), v.u32("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: v.struct([v.u8("instruction"), v.u32("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: v.struct([v.u8("instruction"), hn("microLamports")])
  }
});
new ut("ComputeBudget111111111111111111111111111111");
v.struct([v.u8("numSignatures"), v.u8("padding"), v.u16("signatureOffset"), v.u16("signatureInstructionIndex"), v.u16("publicKeyOffset"), v.u16("publicKeyInstructionIndex"), v.u16("messageDataOffset"), v.u16("messageDataSize"), v.u16("messageInstructionIndex")]);
new ut("Ed25519SigVerify111111111111111111111111111");
hh.utils.isValidPrivateKey;
v.struct([v.u8("numSignatures"), v.u16("signatureOffset"), v.u8("signatureInstructionIndex"), v.u16("ethAddressOffset"), v.u8("ethAddressInstructionIndex"), v.u16("messageDataOffset"), v.u16("messageDataSize"), v.u8("messageInstructionIndex"), v.blob(20, "ethAddress"), v.blob(64, "signature"), v.u8("recoveryId")]);
new ut("KeccakSecp256k11111111111111111111111111111");
var xo;
new ut("StakeConfig11111111111111111111111111111111");
class Oo {
  /**
   * Create a new Lockup object
   */
  constructor(t, e, n) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = n;
  }
  /**
   * Default, inactive Lockup value
   */
}
xo = Oo;
Oo.default = new xo(0, 0, ut.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: v.struct([v.u32("instruction"), Bh(), _h()])
  },
  Authorize: {
    index: 1,
    layout: v.struct([v.u32("instruction"), Bt("newAuthorized"), v.u32("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: v.struct([v.u32("instruction")])
  },
  Split: {
    index: 3,
    layout: v.struct([v.u32("instruction"), v.ns64("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: v.struct([v.u32("instruction"), v.ns64("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: v.struct([v.u32("instruction")])
  },
  Merge: {
    index: 7,
    layout: v.struct([v.u32("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: v.struct([v.u32("instruction"), Bt("newAuthorized"), v.u32("stakeAuthorizationType"), sn("authoritySeed"), Bt("authorityOwner")])
  }
});
new ut("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: v.struct([v.u32("instruction"), Ch()])
  },
  Authorize: {
    index: 1,
    layout: v.struct([v.u32("instruction"), Bt("newAuthorized"), v.u32("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: v.struct([v.u32("instruction"), v.ns64("lamports")])
  },
  UpdateValidatorIdentity: {
    index: 4,
    layout: v.struct([v.u32("instruction")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: v.struct([v.u32("instruction"), wh()])
  }
});
new ut("Vote111111111111111111111111111111111111111");
new ut("Va1idator1nfo111111111111111111111111111111");
W({
  name: $(),
  website: at($()),
  details: at($()),
  iconUrl: at($()),
  keybaseUsername: at($())
});
new ut("Vote111111111111111111111111111111111111111");
v.struct([
  Bt("nodePubkey"),
  Bt("authorizedWithdrawer"),
  v.u8("commission"),
  v.nu64(),
  // votes.length
  v.seq(v.struct([v.nu64("slot"), v.u32("confirmationCount")]), v.offset(v.u32(), -8), "votes"),
  v.u8("rootSlotValid"),
  v.nu64("rootSlot"),
  v.nu64(),
  // authorizedVoters.length
  v.seq(v.struct([v.nu64("epoch"), Bt("authorizedVoter")]), v.offset(v.u32(), -8), "authorizedVoters"),
  v.struct([v.seq(v.struct([Bt("authorizedPubkey"), v.nu64("epochOfLastAuthorizedSwitch"), v.nu64("targetEpoch")]), 32, "buf"), v.nu64("idx"), v.u8("isEmpty")], "priorVoters"),
  v.nu64(),
  // epochCredits.length
  v.seq(v.struct([v.nu64("epoch"), v.nu64("credits"), v.nu64("prevCredits")]), v.offset(v.u32(), -8), "epochCredits"),
  v.struct([v.nu64("slot"), v.nu64("timestamp")], "lastTimestamp")
]);
let he;
function Bn(r) {
  const t = he.__externref_table_alloc();
  return he.__wbindgen_export_2.set(t, r), t;
}
function Rs(r, t) {
  try {
    return r.apply(this, t);
  } catch (e) {
    const n = Bn(e);
    he.__wbindgen_exn_store(n);
  }
}
const To = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && To.decode();
let _n = null;
function Mo() {
  return (_n === null || _n.byteLength === 0) && (_n = new Uint8Array(he.memory.buffer)), _n;
}
function ti(r, t) {
  return r = r >>> 0, To.decode(Mo().subarray(r, r + t));
}
function Fn(r) {
  return r == null;
}
const Ss = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r) => {
  he.__wbindgen_export_3.get(r.dtor)(r.a, r.b);
});
function ig(r, t, e, n) {
  const s = { a: r, b: t, cnt: 1, dtor: e }, i = (...o) => {
    s.cnt++;
    const u = s.a;
    s.a = 0;
    try {
      return n(u, s.b, ...o);
    } finally {
      --s.cnt === 0 ? (he.__wbindgen_export_3.get(s.dtor)(u, s.b), Ss.unregister(s)) : s.a = u;
    }
  };
  return i.original = s, Ss.register(i, s, s), i;
}
let Lo = 0;
function sg(r, t) {
  const e = t(r.length * 1, 1) >>> 0;
  return Mo().set(r, e / 1), Lo = r.length, e;
}
function og(r) {
  const t = sg(r, he.__wbindgen_malloc), e = Lo;
  return he.sign_and_send_transaction(t, e);
}
function Ag(r, t, e) {
  he.closure6_externref_shim(r, t, e);
}
function ag(r, t, e, n) {
  he.closure23_externref_shim(r, t, e, n);
}
async function cg(r, t) {
  if (typeof Response == "function" && r instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(r, t);
      } catch (n) {
        if (r.headers.get("Content-Type") != "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
        else
          throw n;
      }
    const e = await r.arrayBuffer();
    return await WebAssembly.instantiate(e, t);
  } else {
    const e = await WebAssembly.instantiate(r, t);
    return e instanceof WebAssembly.Instance ? { instance: e, module: r } : e;
  }
}
function ug() {
  const r = {};
  return r.wbg = {}, r.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return Rs(function(t, e) {
      return t.call(e);
    }, arguments);
  }, r.wbg.__wbg_call_7cccdd69e0791ae2 = function() {
    return Rs(function(t, e, n) {
      return t.call(e, n);
    }, arguments);
  }, r.wbg.__wbg_log_c222819a41e063d3 = function(t) {
    console.log(t);
  }, r.wbg.__wbg_new_23a2665fac83c611 = function(t, e) {
    try {
      var n = { a: t, b: e }, s = (o, u) => {
        const d = n.a;
        n.a = 0;
        try {
          return ag(d, n.b, o, u);
        } finally {
          n.a = d;
        }
      };
      return new Promise(s);
    } finally {
      n.a = n.b = 0;
    }
  }, r.wbg.__wbg_newnoargs_105ed471475aaf50 = function(t, e) {
    return new Function(ti(t, e));
  }, r.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function(t) {
    queueMicrotask(t);
  }, r.wbg.__wbg_queueMicrotask_d3219def82552485 = function(t) {
    return t.queueMicrotask;
  }, r.wbg.__wbg_resolve_4851785c9c5f573d = function(t) {
    return Promise.resolve(t);
  }, r.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
    const t = typeof global > "u" ? null : global;
    return Fn(t) ? 0 : Bn(t);
  }, r.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
    const t = typeof globalThis > "u" ? null : globalThis;
    return Fn(t) ? 0 : Bn(t);
  }, r.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
    const t = typeof self > "u" ? null : self;
    return Fn(t) ? 0 : Bn(t);
  }, r.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
    const t = typeof window > "u" ? null : window;
    return Fn(t) ? 0 : Bn(t);
  }, r.wbg.__wbg_then_44b73946d2fb3e7d = function(t, e) {
    return t.then(e);
  }, r.wbg.__wbindgen_cb_drop = function(t) {
    const e = t.original;
    return e.cnt-- == 1 ? (e.a = 0, !0) : !1;
  }, r.wbg.__wbindgen_closure_wrapper34 = function(t, e, n) {
    return ig(t, e, 7, Ag);
  }, r.wbg.__wbindgen_init_externref_table = function() {
    const t = he.__wbindgen_export_2, e = t.grow(4);
    t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1);
  }, r.wbg.__wbindgen_is_function = function(t) {
    return typeof t == "function";
  }, r.wbg.__wbindgen_is_undefined = function(t) {
    return t === void 0;
  }, r.wbg.__wbindgen_string_new = function(t, e) {
    return ti(t, e);
  }, r.wbg.__wbindgen_throw = function(t, e) {
    throw new Error(ti(t, e));
  }, r;
}
function fg(r, t) {
  return he = r.exports, Do.__wbindgen_wasm_module = t, _n = null, he.__wbindgen_start(), he;
}
async function Do(r) {
  if (he !== void 0) return he;
  typeof r < "u" && (Object.getPrototypeOf(r) === Object.prototype ? { module_or_path: r } = r : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r > "u" && (r = new URL("data:application/wasm;base64,AGFzbQEAAAABvgEdYAF/AGACf38AYAJ/fwF/YAN/f38Bf2AAAX9gA39/fwBgAn9/AW9gAW8Bf2AFf39/f38AYAR/f39/AGAEf39/fwF/YAFvAW9gAW8AYAJvbwFvYAAAYAF/AX9gBX9/f39/AX9gA29vbwFvYAN/f38Bb2AGf39/f39/AGAGf39/f39/AX9gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwBgBH9/b28AYAN/f28AAvAFFAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAYDd2JnEl9fd2JpbmRnZW5fY2JfZHJvcAAHA3diZyVfX3diZ19xdWV1ZU1pY3JvdGFza19kMzIxOWRlZjgyNTUyNDg1AAsDd2JnFl9fd2JpbmRnZW5faXNfZnVuY3Rpb24ABwN3YmclX193YmdfcXVldWVNaWNyb3Rhc2tfOTdkOTJiNGZjYzhhNjFjNQAMA3diZxpfX3diZ19sb2dfYzIyMjgxOWE0MWUwNjNkMwAMA3diZyBfX3diZ19uZXdub2FyZ3NfMTA1ZWQ0NzE0NzVhYWY1MAAGA3diZxtfX3diZ19jYWxsXzY3MmE0ZDIxNjM0ZDRhMjQADQN3YmcXX193YmluZGdlbl9pc191bmRlZmluZWQABwN3YmcbX193YmdfY2FsbF83Y2NjZGQ2OWUwNzkxYWUyABEDd2JnGl9fd2JnX25ld18yM2EyNjY1ZmFjODNjNjExAAYDd2JnHl9fd2JnX3Jlc29sdmVfNDg1MTc4NWM5YzVmNTczZAALA3diZxtfX3diZ190aGVuXzQ0YjczOTQ2ZDJmYjNlN2QADQN3YmcyX193Ymdfc3RhdGljX2FjY2Vzc29yX0dMT0JBTF9USElTXzU2NTc4YmU3ZTlmODMyYjAABAN3YmcrX193Ymdfc3RhdGljX2FjY2Vzc29yX1NFTEZfMzdjNWQ0MThlNGJmNTgxOQAEA3diZy1fX3diZ19zdGF0aWNfYWNjZXNzb3JfV0lORE9XXzVkZTM3MDQzYTkxYTljNDAABAN3YmctX193Ymdfc3RhdGljX2FjY2Vzc29yX0dMT0JBTF84OGE5MDJkMTNhNTU3ZDA3AAQDd2JnEF9fd2JpbmRnZW5fdGhyb3cAAQN3YmccX193YmluZGdlbl9j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ai0AADoAACABQQRqIAJBBGotAAA6AAAgAUEFaiACQQVqLQAAOgAAIAFBBmogAkEGai0AADoAACABQQdqIAJBB2otAAA6AAAgAkEIaiECIAFBCGoiASADRw0ACwwBCyABIAdrIgUgAU8NACAHQQNxIgIEQANAIAFBAWsiASADQQFrIgMtAAA6AAAgAkEBayICDQALCyAHQQFrQQNJDQAgA0EEayECA0AgAUEBayACQQNqLQAAOgAAIAFBAmsgAkECai0AADoAACABQQNrIAJBAWotAAA6AAAgAUEEayIBIAItAAA6AAAgAkEEayECIAEgBUsNAAsLIAAgCzYCCA8LIAAoAgQiACAJQQJ0aiAAIANBAnQQFRoLC3kBAX8jAEEgayICJAACfyAAKAIAQYCAgIB4RwRAIAEgACgCBCAAKAIIEFsMAQsgAkEQaiAAKAIMKAIAIgBBCGopAgA3AwAgAkEYaiAAQRBqKQIANwMAIAIgACkCADcDCCABKAIcIAEoAiAgAkEIahAXCyACQSBqJAALcwEDfyAAKAIAIgAoAgwiAQRAIAAoAhAiAygCACICBEAgASACEQAACyADKAIEIgIEQCABIAIgAygCCBBlCyAAKAIYIAAoAhQoAgwRAAALAkAgAEF/Rg0AIAAgACgCBEEBayIBNgIEIAENACAAQSBBBBBlCwtmACMAQTBrIgAkAEGklMAALQAABEAgAEECNgIMIABBuI/AADYCCCAAQgE3AhQgACABNgIsIAAgAEEsaq1CgICAgLAEhDcDICAAIABBIGo2AhAgAEEIakHgj8AAEEMACyAAQTBqJAALVwECfyMAQRBrIgEkACAALQAUIQIgAEEBOgAUIAEgAEEIayIANgIMAkAgAkUEQCAAECoMAQsgACAAKAIAQQFrIgA2AgAgAA0AIAFBDGoQNAsgAUEQaiQAC0wBAX8jAEEwayIBJAAgAUEBNgIMIAFBkJHAADYCCCABQgE3AhQgASABQS9qrUKAgICAwAaENwMgIAEgAUEgajYCECABQQhqIAAQQwALRAECfyMAQRBrIgIkACACIAAoAgAiADYCDCACQQxqIgMgARAZIAAgACgCAEEBayIANgIAIABFBEAgAxAiCyACQRBqJAALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhAkIAAoAgghAwsgACgCBCADaiABIAIQFRogACACIANqNgIIQQALTQECf0GllMAALQAAGiABKAIEIQIgASgCACEDQQhBBBBeIgFFBEBBBEEIEGsACyABIAI2AgQgASADNgIAIABBgJDAADYCBCAAIAE2AgALPAECfyMAQRBrIgEkACAAQQhrIgAgACgCAEEBayICNgIAIAEgADYCDCACRQRAIAFBDGoQNAsgAUEQaiQAC0EBAX8jAEEgayICJAAgAkEANgIQIAJBATYCBCACQgQ3AgggAkEuNgIcIAIgADYCGCACIAJBGGo2AgAgAiABEEMACzoBAX8gAC0AFCEBIABBAToAFAJAIAFFBEAgAEEIayIAIAAoAgBBAWoiATYCACABRQ0BIAAQKgsPCwALOAACQCACQYCAxABGDQAgACACIAEoAhARAgBFDQBBAQ8LIANFBEBBAA8LIAAgA0EAIAEoAgwRAwALMgEBfwJAIABFDQAgASgCACICBEAgACACEQAACyABKAIEIgJFDQAgACACIAEoAggQZQsLOAACQCABaUEBRkGAgICAeCABayAAT3FFDQAgAARAQaWUwAAtAAAaIAAgARBeIgFFDQELIAEPCwALNgEBfyMAQSBrIgEkACABQQA2AhggAUEBNgIMIAFBqJPAADYCCCABQgQ3AhAgAUEIaiAAEEMACzABAX8gAUEIayICIAIoAgBBAWoiAjYCACACRQRAAAsgACABNgIEIABBmIfAADYCAAv6AQICfwF+IwBBEGsiAiQAIAJBATsBDCACIAE2AgggAiAANgIEIwBBEGsiASQAIAJBBGoiACkCACEEIAEgADYCDCABIAQ3AgQjAEEQayIAJAAgAUEEaiIBKAIAIgIoAgwhAwJAAkACQAJAIAIoAgQOAgABAgsgAw0BQQEhAkEAIQMMAgsgAw0AIAIoAgAiAigCBCEDIAIoAgAhAgwBCyAAQYCAgIB4NgIAIAAgATYCDCAAQayQwAAgASgCBCABKAIIIgAtAAggAC0ACRAsAAsgACADNgIEIAAgAjYCACAAQZCQwAAgASgCBCABKAIIIgAtAAggAC0ACRAsAAskACAARQRAQdSIwABBMhBoAAsgACACIAMgBCAFIAEoAhAREAALIgEBfyAAKAIAIgEgASgCAEEBayIBNgIAIAFFBEAgABAiCwsiACAARQRAQdSIwABBMhBoAAsgACAC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ACABIAkgByAEKAIMEQMADQBBACECA0BBACAAIAJGDQIaIAJBAWohAiABIAUgBCgCEBECAEUNAAsgAkEBayAASQwBCyACCyAGQRBqJAALCQAgACABEBEACw0AIABB1I3AACABEBcLDAAgACABKQIANwMACxkAIAAgAUGwlMAAKAIAIgBBJCAAGxEBAAALCQAgAEEANgIACwgAIAAlARAECwuGFAQAQYCAwAALrRMBAAAARAAAAAQAAAACAAAAAAAAAAQAAAAEAAAAAwAAAAQAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwX3Rocm93KClgIG9uIGEgYE5vbmVgIHZhbHVlQzpcVXNlcnNcZm92aWdcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlx3YXNtLWJpbmRnZW4tZnV0dXJlcy0wLjQuNTBcc3JjXGxpYi5ycwBVABAAagAAAOYAAAAVAAAAY2FsbGVkIGBSZXN1bHQ6OnVud3JhcF90aHJvdygpYCBvbiBhbiBgRXJyYCB2YWx1ZUR1bW15IHNpZ25fYW5kX3NlbmRfdHJhbnNhY3Rpb24gY2FsbGVkc3JjXGxpYi5yc21vY2stcmVzcG9uc2UAACcBEAAKAAAABAAAAEwAAAAnARAACgAAAAMAAAABAAAAY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWQAAAkAAAAEAAAABAAAAAoAAAALAAAATGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkAACoARAAKgAAAEM6XFVzZXJzXGZvdmlnXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Zcb25jZV9jZWxsLTEuMjEuM1xzcmNcbGliLnJzANwBEABfAAAACAMAABkAAAByZWVudHJhbnQgaW5pdAAATAIQAA4AAADcARAAXwAAAHoCAAANAAAAQzpcVXNlcnNcZm92aWdcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlx3YXNtLWJpbmRnZW4tZnV0dXJlcy0wLjQuNTBcc3JjXHF1ZXVlLnJzdAIQAGwAAAAlAAAALgAAAHQCEABsAAAAKAAAACkAAAB0AhAAbAAAAD4AAAAnAAAAdAIQAGwAAAA+AAAAGgAAAEM6XFVzZXJzXGZvdmlnXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Zcd2FzbS1iaW5kZ2VuLWZ1dHVyZXMtMC40LjUwXHNyY1x0YXNrXHNpbmdsZXRocmVhZC5ycw0AAAAOAAAADwAAABAAAAAgAxAAeAAAAGcAAAAlAAAAcmV0dXJuIHRoaXMA2AkQAOQJEADwCRAA/AkQAEM6XFVzZXJzXGZvdmlnXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Zcd2FzbS1iaW5kZ2VuLTAuMi4xMDBcc3JjXGNvbnZlcnRcc2xpY2VzLnJzAADUAxAAbgAAACQBAAAOAAAAY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRMYXp5IGluc3RhbmNlIGhhcyBwcmV2aW91c2x5IGJlZW4gcG9pc29uZWSGBBAAKgAAAEM6XFVzZXJzXGZvdmlnXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Zcb25jZV9jZWxsLTEuMjEuM1xzcmNcbGliLnJzALgEEABfAAAACAMAABkAAAByZWVudHJhbnQgaW5pdAAAKAUQAA4AAAC4BBAAXwAAAHoCAAANAAAATGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkAABQBRAAKgAAAEM6XFVzZXJzXGZvdmlnXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Zcb25jZV9jZWxsLTEuMjEuM1xzcmNcbGliLnJzAIQFEABfAAAACAMAABkAAAByZWVudHJhbnQgaW5pdAAA9AUQAA4AAACEBRAAXwAAAHoCAAANAAAAL3J1c3RjLzRlYjE2MTI1MGUzNDBjOGY0OGY2NmUyYjkyOWVmNGE1YmVkN2MxODEvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzABwGEABLAAAAjQUAABsAAAAvcnVzdGMvNGViMTYxMjUwZTM0MGM4ZjQ4ZjY2ZTJiOTI5ZWY0YTViZWQ3YzE4MS9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzeAYQAEwAAAAoAgAAEQAAACUAAAAMAAAABAAAACYAAAAnAAAAKAAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjcvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZADsBhAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAA7AYQACkAAACuBAAADQAAAG1lbW9yeSBhbGxvY2F0aW9uIG9mICBieXRlcyBmYWlsZWQAAJQHEAAVAAAAqQcQAA0AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnPIBxAAGAAAAGMBAAAJAAAAJQAAAAwAAAAEAAAAKQAAAAAAAAAIAAAABAAAACoAAAAAAAAACAAAAAQAAAArAAAALAAAAC0AAAAuAAAALwAAABAAAAAEAAAAMAAAADEAAAAyAAAAMwAAAGNhcGFjaXR5IG92ZXJmbG93AAAASAgQABEAAABCb3Jyb3dFcnJvckJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogAH0IEAASAAAAYWxyZWFkeSBtdXRhYmx5IGJvcnJvd2VkOiAAAJgIEAAaAAAAMDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlgYXN5bmMgZm5gIHJlc3VtZWQgYWZ0ZXIgY29tcGxldGlvbgCECRAAIwBBxJPAAAsFAgAAAAwAQdSTwAALMR0AAAACAAAAAAAAAB4AAAACAAAAAAAAAB8AAAACAAAAAAAAACAAAAACAAAAAAAAACEAQaCUwAALASIAfAlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuODUuMSAoNGViMTYxMjUwIDIwMjUtMDMtMTUpBndhbHJ1cwYwLjIzLjMMd2FzbS1iaW5kZ2VuEzAuMi4xMDAgKDI0MDVlYzJiNCkASQ90YXJnZXRfZmVhdHVyZXMEKw9tdXRhYmxlLWdsb2JhbHMrCHNpZ24tZXh0Kw9yZWZlcmVuY2UtdHlwZXMrCm11bHRpdmFsdWU=", import.meta.url));
  const t = ug();
  (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
  const { instance: e, module: n } = await cg(await r, t);
  return fg(e, n);
}
window.signAndSendTransaction = async function(r) {
  const t = new rg("https://api.devnet.solana.com", "confirmed"), e = ke.from(r), { signature: n } = await window.solana.signAndSendTransaction(e);
  return await t.confirmTransaction(n, "confirmed"), n;
};
async function lg() {
  await Do();
  const r = await og(new Uint8Array([1, 2, 3]));
  console.log("✅ WASM 调用成功，签名结果：", r);
}
lg();
