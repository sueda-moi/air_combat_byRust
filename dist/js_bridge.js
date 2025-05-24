var Oo = Object.defineProperty;
var Io = (r, e, t) => e in r ? Oo(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ne = (r, e, t) => Io(r, typeof e != "symbol" ? e + "" : e, t);
function Xn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function si(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(t, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), t;
}
var Sr = {}, _n = {}, Bi;
function No() {
  if (Bi) return _n;
  Bi = 1, _n.byteLength = f, _n.toByteArray = b, _n.fromByteArray = U;
  for (var r = [], e = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, i = n.length; s < i; ++s)
    r[s] = n[s], e[n.charCodeAt(s)] = s;
  e[45] = 62, e[95] = 63;
  function o(B) {
    var k = B.length;
    if (k % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var N = B.indexOf("=");
    N === -1 && (N = k);
    var M = N === k ? 0 : 4 - N % 4;
    return [N, M];
  }
  function f(B) {
    var k = o(B), N = k[0], M = k[1];
    return (N + M) * 3 / 4 - M;
  }
  function p(B, k, N) {
    return (k + N) * 3 / 4 - N;
  }
  function b(B) {
    var k, N = o(B), M = N[0], Y = N[1], Z = new t(p(B, M, Y)), K = 0, $ = Y > 0 ? M - 4 : M, j;
    for (j = 0; j < $; j += 4)
      k = e[B.charCodeAt(j)] << 18 | e[B.charCodeAt(j + 1)] << 12 | e[B.charCodeAt(j + 2)] << 6 | e[B.charCodeAt(j + 3)], Z[K++] = k >> 16 & 255, Z[K++] = k >> 8 & 255, Z[K++] = k & 255;
    return Y === 2 && (k = e[B.charCodeAt(j)] << 2 | e[B.charCodeAt(j + 1)] >> 4, Z[K++] = k & 255), Y === 1 && (k = e[B.charCodeAt(j)] << 10 | e[B.charCodeAt(j + 1)] << 4 | e[B.charCodeAt(j + 2)] >> 2, Z[K++] = k >> 8 & 255, Z[K++] = k & 255), Z;
  }
  function v(B) {
    return r[B >> 18 & 63] + r[B >> 12 & 63] + r[B >> 6 & 63] + r[B & 63];
  }
  function x(B, k, N) {
    for (var M, Y = [], Z = k; Z < N; Z += 3)
      M = (B[Z] << 16 & 16711680) + (B[Z + 1] << 8 & 65280) + (B[Z + 2] & 255), Y.push(v(M));
    return Y.join("");
  }
  function U(B) {
    for (var k, N = B.length, M = N % 3, Y = [], Z = 16383, K = 0, $ = N - M; K < $; K += Z)
      Y.push(x(B, K, K + Z > $ ? $ : K + Z));
    return M === 1 ? (k = B[N - 1], Y.push(
      r[k >> 2] + r[k << 4 & 63] + "=="
    )) : M === 2 && (k = (B[N - 2] << 8) + B[N - 1], Y.push(
      r[k >> 10] + r[k >> 4 & 63] + r[k << 2 & 63] + "="
    )), Y.join("");
  }
  return _n;
}
var Nn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Ci;
function xo() {
  return Ci || (Ci = 1, Nn.read = function(r, e, t, n, s) {
    var i, o, f = s * 8 - n - 1, p = (1 << f) - 1, b = p >> 1, v = -7, x = t ? s - 1 : 0, U = t ? -1 : 1, B = r[e + x];
    for (x += U, i = B & (1 << -v) - 1, B >>= -v, v += f; v > 0; i = i * 256 + r[e + x], x += U, v -= 8)
      ;
    for (o = i & (1 << -v) - 1, i >>= -v, v += n; v > 0; o = o * 256 + r[e + x], x += U, v -= 8)
      ;
    if (i === 0)
      i = 1 - b;
    else {
      if (i === p)
        return o ? NaN : (B ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, n), i = i - b;
    }
    return (B ? -1 : 1) * o * Math.pow(2, i - n);
  }, Nn.write = function(r, e, t, n, s, i) {
    var o, f, p, b = i * 8 - s - 1, v = (1 << b) - 1, x = v >> 1, U = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, B = n ? 0 : i - 1, k = n ? 1 : -1, N = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, o = v) : (o = Math.floor(Math.log(e) / Math.LN2), e * (p = Math.pow(2, -o)) < 1 && (o--, p *= 2), o + x >= 1 ? e += U / p : e += U * Math.pow(2, 1 - x), e * p >= 2 && (o++, p /= 2), o + x >= v ? (f = 0, o = v) : o + x >= 1 ? (f = (e * p - 1) * Math.pow(2, s), o = o + x) : (f = e * Math.pow(2, x - 1) * Math.pow(2, s), o = 0)); s >= 8; r[t + B] = f & 255, B += k, f /= 256, s -= 8)
      ;
    for (o = o << s | f, b += s; b > 0; r[t + B] = o & 255, B += k, o /= 256, b -= 8)
      ;
    r[t + B - k] |= N * 128;
  }), Nn;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Li;
function oi() {
  return Li || (Li = 1, function(r) {
    const e = No(), t = xo(), n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    r.Buffer = f, r.SlowBuffer = Z, r.INSPECT_MAX_BYTES = 50;
    const s = 2147483647;
    r.kMaxLength = s, f.TYPED_ARRAY_SUPPORT = i(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function i() {
      try {
        const g = new Uint8Array(1), l = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(g, l), g.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(f.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (f.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(f.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (f.isBuffer(this))
          return this.byteOffset;
      }
    });
    function o(g) {
      if (g > s)
        throw new RangeError('The value "' + g + '" is invalid for option "size"');
      const l = new Uint8Array(g);
      return Object.setPrototypeOf(l, f.prototype), l;
    }
    function f(g, l, h) {
      if (typeof g == "number") {
        if (typeof l == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return x(g);
      }
      return p(g, l, h);
    }
    f.poolSize = 8192;
    function p(g, l, h) {
      if (typeof g == "string")
        return U(g, l);
      if (ArrayBuffer.isView(g))
        return k(g);
      if (g == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
        );
      if (me(g, ArrayBuffer) || g && me(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(g, SharedArrayBuffer) || g && me(g.buffer, SharedArrayBuffer)))
        return N(g, l, h);
      if (typeof g == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const S = g.valueOf && g.valueOf();
      if (S != null && S !== g)
        return f.from(S, l, h);
      const C = M(g);
      if (C) return C;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
        return f.from(g[Symbol.toPrimitive]("string"), l, h);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    }
    f.from = function(g, l, h) {
      return p(g, l, h);
    }, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array);
    function b(g) {
      if (typeof g != "number")
        throw new TypeError('"size" argument must be of type number');
      if (g < 0)
        throw new RangeError('The value "' + g + '" is invalid for option "size"');
    }
    function v(g, l, h) {
      return b(g), g <= 0 ? o(g) : l !== void 0 ? typeof h == "string" ? o(g).fill(l, h) : o(g).fill(l) : o(g);
    }
    f.alloc = function(g, l, h) {
      return v(g, l, h);
    };
    function x(g) {
      return b(g), o(g < 0 ? 0 : Y(g) | 0);
    }
    f.allocUnsafe = function(g) {
      return x(g);
    }, f.allocUnsafeSlow = function(g) {
      return x(g);
    };
    function U(g, l) {
      if ((typeof l != "string" || l === "") && (l = "utf8"), !f.isEncoding(l))
        throw new TypeError("Unknown encoding: " + l);
      const h = K(g, l) | 0;
      let S = o(h);
      const C = S.write(g, l);
      return C !== h && (S = S.slice(0, C)), S;
    }
    function B(g) {
      const l = g.length < 0 ? 0 : Y(g.length) | 0, h = o(l);
      for (let S = 0; S < l; S += 1)
        h[S] = g[S] & 255;
      return h;
    }
    function k(g) {
      if (me(g, Uint8Array)) {
        const l = new Uint8Array(g);
        return N(l.buffer, l.byteOffset, l.byteLength);
      }
      return B(g);
    }
    function N(g, l, h) {
      if (l < 0 || g.byteLength < l)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (g.byteLength < l + (h || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let S;
      return l === void 0 && h === void 0 ? S = new Uint8Array(g) : h === void 0 ? S = new Uint8Array(g, l) : S = new Uint8Array(g, l, h), Object.setPrototypeOf(S, f.prototype), S;
    }
    function M(g) {
      if (f.isBuffer(g)) {
        const l = Y(g.length) | 0, h = o(l);
        return h.length === 0 || g.copy(h, 0, 0, l), h;
      }
      if (g.length !== void 0)
        return typeof g.length != "number" || Tt(g.length) ? o(0) : B(g);
      if (g.type === "Buffer" && Array.isArray(g.data))
        return B(g.data);
    }
    function Y(g) {
      if (g >= s)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
      return g | 0;
    }
    function Z(g) {
      return +g != g && (g = 0), f.alloc(+g);
    }
    f.isBuffer = function(l) {
      return l != null && l._isBuffer === !0 && l !== f.prototype;
    }, f.compare = function(l, h) {
      if (me(l, Uint8Array) && (l = f.from(l, l.offset, l.byteLength)), me(h, Uint8Array) && (h = f.from(h, h.offset, h.byteLength)), !f.isBuffer(l) || !f.isBuffer(h))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (l === h) return 0;
      let S = l.length, C = h.length;
      for (let P = 0, G = Math.min(S, C); P < G; ++P)
        if (l[P] !== h[P]) {
          S = l[P], C = h[P];
          break;
        }
      return S < C ? -1 : C < S ? 1 : 0;
    }, f.isEncoding = function(l) {
      switch (String(l).toLowerCase()) {
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
    }, f.concat = function(l, h) {
      if (!Array.isArray(l))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (l.length === 0)
        return f.alloc(0);
      let S;
      if (h === void 0)
        for (h = 0, S = 0; S < l.length; ++S)
          h += l[S].length;
      const C = f.allocUnsafe(h);
      let P = 0;
      for (S = 0; S < l.length; ++S) {
        let G = l[S];
        if (me(G, Uint8Array))
          P + G.length > C.length ? (f.isBuffer(G) || (G = f.from(G)), G.copy(C, P)) : Uint8Array.prototype.set.call(
            C,
            G,
            P
          );
        else if (f.isBuffer(G))
          G.copy(C, P);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        P += G.length;
      }
      return C;
    };
    function K(g, l) {
      if (f.isBuffer(g))
        return g.length;
      if (ArrayBuffer.isView(g) || me(g, ArrayBuffer))
        return g.byteLength;
      if (typeof g != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
        );
      const h = g.length, S = arguments.length > 2 && arguments[2] === !0;
      if (!S && h === 0) return 0;
      let C = !1;
      for (; ; )
        switch (l) {
          case "ascii":
          case "latin1":
          case "binary":
            return h;
          case "utf8":
          case "utf-8":
            return bt(g).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return h * 2;
          case "hex":
            return h >>> 1;
          case "base64":
            return It(g).length;
          default:
            if (C)
              return S ? -1 : bt(g).length;
            l = ("" + l).toLowerCase(), C = !0;
        }
    }
    f.byteLength = K;
    function $(g, l, h) {
      let S = !1;
      if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((h === void 0 || h > this.length) && (h = this.length), h <= 0) || (h >>>= 0, l >>>= 0, h <= l))
        return "";
      for (g || (g = "utf8"); ; )
        switch (g) {
          case "hex":
            return E(this, l, h);
          case "utf8":
          case "utf-8":
            return a(this, l, h);
          case "ascii":
            return A(this, l, h);
          case "latin1":
          case "binary":
            return w(this, l, h);
          case "base64":
            return R(this, l, h);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return I(this, l, h);
          default:
            if (S) throw new TypeError("Unknown encoding: " + g);
            g = (g + "").toLowerCase(), S = !0;
        }
    }
    f.prototype._isBuffer = !0;
    function j(g, l, h) {
      const S = g[l];
      g[l] = g[h], g[h] = S;
    }
    f.prototype.swap16 = function() {
      const l = this.length;
      if (l % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let h = 0; h < l; h += 2)
        j(this, h, h + 1);
      return this;
    }, f.prototype.swap32 = function() {
      const l = this.length;
      if (l % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let h = 0; h < l; h += 4)
        j(this, h, h + 3), j(this, h + 1, h + 2);
      return this;
    }, f.prototype.swap64 = function() {
      const l = this.length;
      if (l % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let h = 0; h < l; h += 8)
        j(this, h, h + 7), j(this, h + 1, h + 6), j(this, h + 2, h + 5), j(this, h + 3, h + 4);
      return this;
    }, f.prototype.toString = function() {
      const l = this.length;
      return l === 0 ? "" : arguments.length === 0 ? a(this, 0, l) : $.apply(this, arguments);
    }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(l) {
      if (!f.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
      return this === l ? !0 : f.compare(this, l) === 0;
    }, f.prototype.inspect = function() {
      let l = "";
      const h = r.INSPECT_MAX_BYTES;
      return l = this.toString("hex", 0, h).replace(/(.{2})/g, "$1 ").trim(), this.length > h && (l += " ... "), "<Buffer " + l + ">";
    }, n && (f.prototype[n] = f.prototype.inspect), f.prototype.compare = function(l, h, S, C, P) {
      if (me(l, Uint8Array) && (l = f.from(l, l.offset, l.byteLength)), !f.isBuffer(l))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
        );
      if (h === void 0 && (h = 0), S === void 0 && (S = l ? l.length : 0), C === void 0 && (C = 0), P === void 0 && (P = this.length), h < 0 || S > l.length || C < 0 || P > this.length)
        throw new RangeError("out of range index");
      if (C >= P && h >= S)
        return 0;
      if (C >= P)
        return -1;
      if (h >= S)
        return 1;
      if (h >>>= 0, S >>>= 0, C >>>= 0, P >>>= 0, this === l) return 0;
      let G = P - C, gt = S - h;
      const ht = Math.min(G, gt), lt = this.slice(C, P), Nt = l.slice(h, S);
      for (let ut = 0; ut < ht; ++ut)
        if (lt[ut] !== Nt[ut]) {
          G = lt[ut], gt = Nt[ut];
          break;
        }
      return G < gt ? -1 : gt < G ? 1 : 0;
    };
    function J(g, l, h, S, C) {
      if (g.length === 0) return -1;
      if (typeof h == "string" ? (S = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, Tt(h) && (h = C ? 0 : g.length - 1), h < 0 && (h = g.length + h), h >= g.length) {
        if (C) return -1;
        h = g.length - 1;
      } else if (h < 0)
        if (C) h = 0;
        else return -1;
      if (typeof l == "string" && (l = f.from(l, S)), f.isBuffer(l))
        return l.length === 0 ? -1 : st(g, l, h, S, C);
      if (typeof l == "number")
        return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(g, l, h) : Uint8Array.prototype.lastIndexOf.call(g, l, h) : st(g, [l], h, S, C);
      throw new TypeError("val must be string, number or Buffer");
    }
    function st(g, l, h, S, C) {
      let P = 1, G = g.length, gt = l.length;
      if (S !== void 0 && (S = String(S).toLowerCase(), S === "ucs2" || S === "ucs-2" || S === "utf16le" || S === "utf-16le")) {
        if (g.length < 2 || l.length < 2)
          return -1;
        P = 2, G /= 2, gt /= 2, h /= 2;
      }
      function ht(Nt, ut) {
        return P === 1 ? Nt[ut] : Nt.readUInt16BE(ut * P);
      }
      let lt;
      if (C) {
        let Nt = -1;
        for (lt = h; lt < G; lt++)
          if (ht(g, lt) === ht(l, Nt === -1 ? 0 : lt - Nt)) {
            if (Nt === -1 && (Nt = lt), lt - Nt + 1 === gt) return Nt * P;
          } else
            Nt !== -1 && (lt -= lt - Nt), Nt = -1;
      } else
        for (h + gt > G && (h = G - gt), lt = h; lt >= 0; lt--) {
          let Nt = !0;
          for (let ut = 0; ut < gt; ut++)
            if (ht(g, lt + ut) !== ht(l, ut)) {
              Nt = !1;
              break;
            }
          if (Nt) return lt;
        }
      return -1;
    }
    f.prototype.includes = function(l, h, S) {
      return this.indexOf(l, h, S) !== -1;
    }, f.prototype.indexOf = function(l, h, S) {
      return J(this, l, h, S, !0);
    }, f.prototype.lastIndexOf = function(l, h, S) {
      return J(this, l, h, S, !1);
    };
    function ot(g, l, h, S) {
      h = Number(h) || 0;
      const C = g.length - h;
      S ? (S = Number(S), S > C && (S = C)) : S = C;
      const P = l.length;
      S > P / 2 && (S = P / 2);
      let G;
      for (G = 0; G < S; ++G) {
        const gt = parseInt(l.substr(G * 2, 2), 16);
        if (Tt(gt)) return G;
        g[h + G] = gt;
      }
      return G;
    }
    function W(g, l, h, S) {
      return St(bt(l, g.length - h), g, h, S);
    }
    function D(g, l, h, S) {
      return St(xt(l), g, h, S);
    }
    function F(g, l, h, S) {
      return St(It(l), g, h, S);
    }
    function V(g, l, h, S) {
      return St(Ze(l, g.length - h), g, h, S);
    }
    f.prototype.write = function(l, h, S, C) {
      if (h === void 0)
        C = "utf8", S = this.length, h = 0;
      else if (S === void 0 && typeof h == "string")
        C = h, S = this.length, h = 0;
      else if (isFinite(h))
        h = h >>> 0, isFinite(S) ? (S = S >>> 0, C === void 0 && (C = "utf8")) : (C = S, S = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const P = this.length - h;
      if ((S === void 0 || S > P) && (S = P), l.length > 0 && (S < 0 || h < 0) || h > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      C || (C = "utf8");
      let G = !1;
      for (; ; )
        switch (C) {
          case "hex":
            return ot(this, l, h, S);
          case "utf8":
          case "utf-8":
            return W(this, l, h, S);
          case "ascii":
          case "latin1":
          case "binary":
            return D(this, l, h, S);
          case "base64":
            return F(this, l, h, S);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return V(this, l, h, S);
          default:
            if (G) throw new TypeError("Unknown encoding: " + C);
            C = ("" + C).toLowerCase(), G = !0;
        }
    }, f.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function R(g, l, h) {
      return l === 0 && h === g.length ? e.fromByteArray(g) : e.fromByteArray(g.slice(l, h));
    }
    function a(g, l, h) {
      h = Math.min(g.length, h);
      const S = [];
      let C = l;
      for (; C < h; ) {
        const P = g[C];
        let G = null, gt = P > 239 ? 4 : P > 223 ? 3 : P > 191 ? 2 : 1;
        if (C + gt <= h) {
          let ht, lt, Nt, ut;
          switch (gt) {
            case 1:
              P < 128 && (G = P);
              break;
            case 2:
              ht = g[C + 1], (ht & 192) === 128 && (ut = (P & 31) << 6 | ht & 63, ut > 127 && (G = ut));
              break;
            case 3:
              ht = g[C + 1], lt = g[C + 2], (ht & 192) === 128 && (lt & 192) === 128 && (ut = (P & 15) << 12 | (ht & 63) << 6 | lt & 63, ut > 2047 && (ut < 55296 || ut > 57343) && (G = ut));
              break;
            case 4:
              ht = g[C + 1], lt = g[C + 2], Nt = g[C + 3], (ht & 192) === 128 && (lt & 192) === 128 && (Nt & 192) === 128 && (ut = (P & 15) << 18 | (ht & 63) << 12 | (lt & 63) << 6 | Nt & 63, ut > 65535 && ut < 1114112 && (G = ut));
          }
        }
        G === null ? (G = 65533, gt = 1) : G > 65535 && (G -= 65536, S.push(G >>> 10 & 1023 | 55296), G = 56320 | G & 1023), S.push(G), C += gt;
      }
      return _(S);
    }
    const d = 4096;
    function _(g) {
      const l = g.length;
      if (l <= d)
        return String.fromCharCode.apply(String, g);
      let h = "", S = 0;
      for (; S < l; )
        h += String.fromCharCode.apply(
          String,
          g.slice(S, S += d)
        );
      return h;
    }
    function A(g, l, h) {
      let S = "";
      h = Math.min(g.length, h);
      for (let C = l; C < h; ++C)
        S += String.fromCharCode(g[C] & 127);
      return S;
    }
    function w(g, l, h) {
      let S = "";
      h = Math.min(g.length, h);
      for (let C = l; C < h; ++C)
        S += String.fromCharCode(g[C]);
      return S;
    }
    function E(g, l, h) {
      const S = g.length;
      (!l || l < 0) && (l = 0), (!h || h < 0 || h > S) && (h = S);
      let C = "";
      for (let P = l; P < h; ++P)
        C += Mt[g[P]];
      return C;
    }
    function I(g, l, h) {
      const S = g.slice(l, h);
      let C = "";
      for (let P = 0; P < S.length - 1; P += 2)
        C += String.fromCharCode(S[P] + S[P + 1] * 256);
      return C;
    }
    f.prototype.slice = function(l, h) {
      const S = this.length;
      l = ~~l, h = h === void 0 ? S : ~~h, l < 0 ? (l += S, l < 0 && (l = 0)) : l > S && (l = S), h < 0 ? (h += S, h < 0 && (h = 0)) : h > S && (h = S), h < l && (h = l);
      const C = this.subarray(l, h);
      return Object.setPrototypeOf(C, f.prototype), C;
    };
    function m(g, l, h) {
      if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
      if (g + l > h) throw new RangeError("Trying to access beyond buffer length");
    }
    f.prototype.readUintLE = f.prototype.readUIntLE = function(l, h, S) {
      l = l >>> 0, h = h >>> 0, S || m(l, h, this.length);
      let C = this[l], P = 1, G = 0;
      for (; ++G < h && (P *= 256); )
        C += this[l + G] * P;
      return C;
    }, f.prototype.readUintBE = f.prototype.readUIntBE = function(l, h, S) {
      l = l >>> 0, h = h >>> 0, S || m(l, h, this.length);
      let C = this[l + --h], P = 1;
      for (; h > 0 && (P *= 256); )
        C += this[l + --h] * P;
      return C;
    }, f.prototype.readUint8 = f.prototype.readUInt8 = function(l, h) {
      return l = l >>> 0, h || m(l, 1, this.length), this[l];
    }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(l, h) {
      return l = l >>> 0, h || m(l, 2, this.length), this[l] | this[l + 1] << 8;
    }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(l, h) {
      return l = l >>> 0, h || m(l, 2, this.length), this[l] << 8 | this[l + 1];
    }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(l, h) {
      return l = l >>> 0, h || m(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
    }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(l, h) {
      return l = l >>> 0, h || m(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
    }, f.prototype.readBigUInt64LE = Ee(function(l) {
      l = l >>> 0, vt(l, "offset");
      const h = this[l], S = this[l + 7];
      (h === void 0 || S === void 0) && _t(l, this.length - 8);
      const C = h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, P = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + S * 2 ** 24;
      return BigInt(C) + (BigInt(P) << BigInt(32));
    }), f.prototype.readBigUInt64BE = Ee(function(l) {
      l = l >>> 0, vt(l, "offset");
      const h = this[l], S = this[l + 7];
      (h === void 0 || S === void 0) && _t(l, this.length - 8);
      const C = h * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], P = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + S;
      return (BigInt(C) << BigInt(32)) + BigInt(P);
    }), f.prototype.readIntLE = function(l, h, S) {
      l = l >>> 0, h = h >>> 0, S || m(l, h, this.length);
      let C = this[l], P = 1, G = 0;
      for (; ++G < h && (P *= 256); )
        C += this[l + G] * P;
      return P *= 128, C >= P && (C -= Math.pow(2, 8 * h)), C;
    }, f.prototype.readIntBE = function(l, h, S) {
      l = l >>> 0, h = h >>> 0, S || m(l, h, this.length);
      let C = h, P = 1, G = this[l + --C];
      for (; C > 0 && (P *= 256); )
        G += this[l + --C] * P;
      return P *= 128, G >= P && (G -= Math.pow(2, 8 * h)), G;
    }, f.prototype.readInt8 = function(l, h) {
      return l = l >>> 0, h || m(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
    }, f.prototype.readInt16LE = function(l, h) {
      l = l >>> 0, h || m(l, 2, this.length);
      const S = this[l] | this[l + 1] << 8;
      return S & 32768 ? S | 4294901760 : S;
    }, f.prototype.readInt16BE = function(l, h) {
      l = l >>> 0, h || m(l, 2, this.length);
      const S = this[l + 1] | this[l] << 8;
      return S & 32768 ? S | 4294901760 : S;
    }, f.prototype.readInt32LE = function(l, h) {
      return l = l >>> 0, h || m(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
    }, f.prototype.readInt32BE = function(l, h) {
      return l = l >>> 0, h || m(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
    }, f.prototype.readBigInt64LE = Ee(function(l) {
      l = l >>> 0, vt(l, "offset");
      const h = this[l], S = this[l + 7];
      (h === void 0 || S === void 0) && _t(l, this.length - 8);
      const C = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (S << 24);
      return (BigInt(C) << BigInt(32)) + BigInt(h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
    }), f.prototype.readBigInt64BE = Ee(function(l) {
      l = l >>> 0, vt(l, "offset");
      const h = this[l], S = this[l + 7];
      (h === void 0 || S === void 0) && _t(l, this.length - 8);
      const C = (h << 24) + // Overflow
      this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
      return (BigInt(C) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + S);
    }), f.prototype.readFloatLE = function(l, h) {
      return l = l >>> 0, h || m(l, 4, this.length), t.read(this, l, !0, 23, 4);
    }, f.prototype.readFloatBE = function(l, h) {
      return l = l >>> 0, h || m(l, 4, this.length), t.read(this, l, !1, 23, 4);
    }, f.prototype.readDoubleLE = function(l, h) {
      return l = l >>> 0, h || m(l, 8, this.length), t.read(this, l, !0, 52, 8);
    }, f.prototype.readDoubleBE = function(l, h) {
      return l = l >>> 0, h || m(l, 8, this.length), t.read(this, l, !1, 52, 8);
    };
    function c(g, l, h, S, C, P) {
      if (!f.isBuffer(g)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (l > C || l < P) throw new RangeError('"value" argument is out of bounds');
      if (h + S > g.length) throw new RangeError("Index out of range");
    }
    f.prototype.writeUintLE = f.prototype.writeUIntLE = function(l, h, S, C) {
      if (l = +l, h = h >>> 0, S = S >>> 0, !C) {
        const gt = Math.pow(2, 8 * S) - 1;
        c(this, l, h, S, gt, 0);
      }
      let P = 1, G = 0;
      for (this[h] = l & 255; ++G < S && (P *= 256); )
        this[h + G] = l / P & 255;
      return h + S;
    }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(l, h, S, C) {
      if (l = +l, h = h >>> 0, S = S >>> 0, !C) {
        const gt = Math.pow(2, 8 * S) - 1;
        c(this, l, h, S, gt, 0);
      }
      let P = S - 1, G = 1;
      for (this[h + P] = l & 255; --P >= 0 && (G *= 256); )
        this[h + P] = l / G & 255;
      return h + S;
    }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 1, 255, 0), this[h] = l & 255, h + 1;
    }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 2, 65535, 0), this[h] = l & 255, this[h + 1] = l >>> 8, h + 2;
    }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 2, 65535, 0), this[h] = l >>> 8, this[h + 1] = l & 255, h + 2;
    }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 4, 4294967295, 0), this[h + 3] = l >>> 24, this[h + 2] = l >>> 16, this[h + 1] = l >>> 8, this[h] = l & 255, h + 4;
    }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 4, 4294967295, 0), this[h] = l >>> 24, this[h + 1] = l >>> 16, this[h + 2] = l >>> 8, this[h + 3] = l & 255, h + 4;
    };
    function u(g, l, h, S, C) {
      dt(l, S, C, g, h, 7);
      let P = Number(l & BigInt(4294967295));
      g[h++] = P, P = P >> 8, g[h++] = P, P = P >> 8, g[h++] = P, P = P >> 8, g[h++] = P;
      let G = Number(l >> BigInt(32) & BigInt(4294967295));
      return g[h++] = G, G = G >> 8, g[h++] = G, G = G >> 8, g[h++] = G, G = G >> 8, g[h++] = G, h;
    }
    function y(g, l, h, S, C) {
      dt(l, S, C, g, h, 7);
      let P = Number(l & BigInt(4294967295));
      g[h + 7] = P, P = P >> 8, g[h + 6] = P, P = P >> 8, g[h + 5] = P, P = P >> 8, g[h + 4] = P;
      let G = Number(l >> BigInt(32) & BigInt(4294967295));
      return g[h + 3] = G, G = G >> 8, g[h + 2] = G, G = G >> 8, g[h + 1] = G, G = G >> 8, g[h] = G, h + 8;
    }
    f.prototype.writeBigUInt64LE = Ee(function(l, h = 0) {
      return u(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
    }), f.prototype.writeBigUInt64BE = Ee(function(l, h = 0) {
      return y(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
    }), f.prototype.writeIntLE = function(l, h, S, C) {
      if (l = +l, h = h >>> 0, !C) {
        const ht = Math.pow(2, 8 * S - 1);
        c(this, l, h, S, ht - 1, -ht);
      }
      let P = 0, G = 1, gt = 0;
      for (this[h] = l & 255; ++P < S && (G *= 256); )
        l < 0 && gt === 0 && this[h + P - 1] !== 0 && (gt = 1), this[h + P] = (l / G >> 0) - gt & 255;
      return h + S;
    }, f.prototype.writeIntBE = function(l, h, S, C) {
      if (l = +l, h = h >>> 0, !C) {
        const ht = Math.pow(2, 8 * S - 1);
        c(this, l, h, S, ht - 1, -ht);
      }
      let P = S - 1, G = 1, gt = 0;
      for (this[h + P] = l & 255; --P >= 0 && (G *= 256); )
        l < 0 && gt === 0 && this[h + P + 1] !== 0 && (gt = 1), this[h + P] = (l / G >> 0) - gt & 255;
      return h + S;
    }, f.prototype.writeInt8 = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[h] = l & 255, h + 1;
    }, f.prototype.writeInt16LE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 2, 32767, -32768), this[h] = l & 255, this[h + 1] = l >>> 8, h + 2;
    }, f.prototype.writeInt16BE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 2, 32767, -32768), this[h] = l >>> 8, this[h + 1] = l & 255, h + 2;
    }, f.prototype.writeInt32LE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 4, 2147483647, -2147483648), this[h] = l & 255, this[h + 1] = l >>> 8, this[h + 2] = l >>> 16, this[h + 3] = l >>> 24, h + 4;
    }, f.prototype.writeInt32BE = function(l, h, S) {
      return l = +l, h = h >>> 0, S || c(this, l, h, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[h] = l >>> 24, this[h + 1] = l >>> 16, this[h + 2] = l >>> 8, this[h + 3] = l & 255, h + 4;
    }, f.prototype.writeBigInt64LE = Ee(function(l, h = 0) {
      return u(this, l, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), f.prototype.writeBigInt64BE = Ee(function(l, h = 0) {
      return y(this, l, h, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function O(g, l, h, S, C, P) {
      if (h + S > g.length) throw new RangeError("Index out of range");
      if (h < 0) throw new RangeError("Index out of range");
    }
    function L(g, l, h, S, C) {
      return l = +l, h = h >>> 0, C || O(g, l, h, 4), t.write(g, l, h, S, 23, 4), h + 4;
    }
    f.prototype.writeFloatLE = function(l, h, S) {
      return L(this, l, h, !0, S);
    }, f.prototype.writeFloatBE = function(l, h, S) {
      return L(this, l, h, !1, S);
    };
    function H(g, l, h, S, C) {
      return l = +l, h = h >>> 0, C || O(g, l, h, 8), t.write(g, l, h, S, 52, 8), h + 8;
    }
    f.prototype.writeDoubleLE = function(l, h, S) {
      return H(this, l, h, !0, S);
    }, f.prototype.writeDoubleBE = function(l, h, S) {
      return H(this, l, h, !1, S);
    }, f.prototype.copy = function(l, h, S, C) {
      if (!f.isBuffer(l)) throw new TypeError("argument should be a Buffer");
      if (S || (S = 0), !C && C !== 0 && (C = this.length), h >= l.length && (h = l.length), h || (h = 0), C > 0 && C < S && (C = S), C === S || l.length === 0 || this.length === 0) return 0;
      if (h < 0)
        throw new RangeError("targetStart out of bounds");
      if (S < 0 || S >= this.length) throw new RangeError("Index out of range");
      if (C < 0) throw new RangeError("sourceEnd out of bounds");
      C > this.length && (C = this.length), l.length - h < C - S && (C = l.length - h + S);
      const P = C - S;
      return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(h, S, C) : Uint8Array.prototype.set.call(
        l,
        this.subarray(S, C),
        h
      ), P;
    }, f.prototype.fill = function(l, h, S, C) {
      if (typeof l == "string") {
        if (typeof h == "string" ? (C = h, h = 0, S = this.length) : typeof S == "string" && (C = S, S = this.length), C !== void 0 && typeof C != "string")
          throw new TypeError("encoding must be a string");
        if (typeof C == "string" && !f.isEncoding(C))
          throw new TypeError("Unknown encoding: " + C);
        if (l.length === 1) {
          const G = l.charCodeAt(0);
          (C === "utf8" && G < 128 || C === "latin1") && (l = G);
        }
      } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
      if (h < 0 || this.length < h || this.length < S)
        throw new RangeError("Out of range index");
      if (S <= h)
        return this;
      h = h >>> 0, S = S === void 0 ? this.length : S >>> 0, l || (l = 0);
      let P;
      if (typeof l == "number")
        for (P = h; P < S; ++P)
          this[P] = l;
      else {
        const G = f.isBuffer(l) ? l : f.from(l, C), gt = G.length;
        if (gt === 0)
          throw new TypeError('The value "' + l + '" is invalid for argument "value"');
        for (P = 0; P < S - h; ++P)
          this[P + h] = G[P % gt];
      }
      return this;
    };
    const tt = {};
    function it(g, l, h) {
      tt[g] = class extends h {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: l.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${g}]`, this.stack, delete this.name;
        }
        get code() {
          return g;
        }
        set code(C) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${g}]: ${this.message}`;
        }
      };
    }
    it(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(g) {
        return g ? `${g} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), it(
      "ERR_INVALID_ARG_TYPE",
      function(g, l) {
        return `The "${g}" argument must be of type number. Received type ${typeof l}`;
      },
      TypeError
    ), it(
      "ERR_OUT_OF_RANGE",
      function(g, l, h) {
        let S = `The value of "${g}" is out of range.`, C = h;
        return Number.isInteger(h) && Math.abs(h) > 2 ** 32 ? C = Et(String(h)) : typeof h == "bigint" && (C = String(h), (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) && (C = Et(C)), C += "n"), S += ` It must be ${l}. Received ${C}`, S;
      },
      RangeError
    );
    function Et(g) {
      let l = "", h = g.length;
      const S = g[0] === "-" ? 1 : 0;
      for (; h >= S + 4; h -= 3)
        l = `_${g.slice(h - 3, h)}${l}`;
      return `${g.slice(0, h)}${l}`;
    }
    function pt(g, l, h) {
      vt(l, "offset"), (g[l] === void 0 || g[l + h] === void 0) && _t(l, g.length - (h + 1));
    }
    function dt(g, l, h, S, C, P) {
      if (g > h || g < l) {
        const G = typeof l == "bigint" ? "n" : "";
        let gt;
        throw l === 0 || l === BigInt(0) ? gt = `>= 0${G} and < 2${G} ** ${(P + 1) * 8}${G}` : gt = `>= -(2${G} ** ${(P + 1) * 8 - 1}${G}) and < 2 ** ${(P + 1) * 8 - 1}${G}`, new tt.ERR_OUT_OF_RANGE("value", gt, g);
      }
      pt(S, C, P);
    }
    function vt(g, l) {
      if (typeof g != "number")
        throw new tt.ERR_INVALID_ARG_TYPE(l, "number", g);
    }
    function _t(g, l, h) {
      throw Math.floor(g) !== g ? (vt(g, h), new tt.ERR_OUT_OF_RANGE("offset", "an integer", g)) : l < 0 ? new tt.ERR_BUFFER_OUT_OF_BOUNDS() : new tt.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${l}`,
        g
      );
    }
    const wt = /[^+/0-9A-Za-z-_]/g;
    function _e(g) {
      if (g = g.split("=")[0], g = g.trim().replace(wt, ""), g.length < 2) return "";
      for (; g.length % 4 !== 0; )
        g = g + "=";
      return g;
    }
    function bt(g, l) {
      l = l || 1 / 0;
      let h;
      const S = g.length;
      let C = null;
      const P = [];
      for (let G = 0; G < S; ++G) {
        if (h = g.charCodeAt(G), h > 55295 && h < 57344) {
          if (!C) {
            if (h > 56319) {
              (l -= 3) > -1 && P.push(239, 191, 189);
              continue;
            } else if (G + 1 === S) {
              (l -= 3) > -1 && P.push(239, 191, 189);
              continue;
            }
            C = h;
            continue;
          }
          if (h < 56320) {
            (l -= 3) > -1 && P.push(239, 191, 189), C = h;
            continue;
          }
          h = (C - 55296 << 10 | h - 56320) + 65536;
        } else C && (l -= 3) > -1 && P.push(239, 191, 189);
        if (C = null, h < 128) {
          if ((l -= 1) < 0) break;
          P.push(h);
        } else if (h < 2048) {
          if ((l -= 2) < 0) break;
          P.push(
            h >> 6 | 192,
            h & 63 | 128
          );
        } else if (h < 65536) {
          if ((l -= 3) < 0) break;
          P.push(
            h >> 12 | 224,
            h >> 6 & 63 | 128,
            h & 63 | 128
          );
        } else if (h < 1114112) {
          if ((l -= 4) < 0) break;
          P.push(
            h >> 18 | 240,
            h >> 12 & 63 | 128,
            h >> 6 & 63 | 128,
            h & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return P;
    }
    function xt(g) {
      const l = [];
      for (let h = 0; h < g.length; ++h)
        l.push(g.charCodeAt(h) & 255);
      return l;
    }
    function Ze(g, l) {
      let h, S, C;
      const P = [];
      for (let G = 0; G < g.length && !((l -= 2) < 0); ++G)
        h = g.charCodeAt(G), S = h >> 8, C = h % 256, P.push(C), P.push(S);
      return P;
    }
    function It(g) {
      return e.toByteArray(_e(g));
    }
    function St(g, l, h, S) {
      let C;
      for (C = 0; C < S && !(C + h >= l.length || C >= g.length); ++C)
        l[C + h] = g[C];
      return C;
    }
    function me(g, l) {
      return g instanceof l || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === l.name;
    }
    function Tt(g) {
      return g !== g;
    }
    const Mt = function() {
      const g = "0123456789abcdef", l = new Array(256);
      for (let h = 0; h < 16; ++h) {
        const S = h * 16;
        for (let C = 0; C < 16; ++C)
          l[S + C] = g[h] + g[C];
      }
      return l;
    }();
    function Ee(g) {
      return typeof BigInt > "u" ? kt : g;
    }
    function kt() {
      throw new Error("BigInt not supported");
    }
  }(Sr)), Sr;
}
var yt = oi();
const Je = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function To(r) {
  return r instanceof Uint8Array || ArrayBuffer.isView(r) && r.constructor.name === "Uint8Array";
}
function Xr(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error("positive integer expected, got " + r);
}
function wn(r, ...e) {
  if (!To(r))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(r.length))
    throw new Error("Uint8Array expected of length " + e + ", got length=" + r.length);
}
function Bo(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  Xr(r.outputLen), Xr(r.blockLen);
}
function Pn(r, e = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function Co(r, e) {
  wn(r);
  const t = e.outputLen;
  if (r.length < t)
    throw new Error("digestInto() expects output buffer of length at least " + t);
}
function an(...r) {
  for (let e = 0; e < r.length; e++)
    r[e].fill(0);
}
function vr(r) {
  return new DataView(r.buffer, r.byteOffset, r.byteLength);
}
function Se(r, e) {
  return r << 32 - e | r >>> e;
}
function Lo(r) {
  if (typeof r != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(r));
}
function ai(r) {
  return typeof r == "string" && (r = Lo(r)), wn(r), r;
}
function Mo(...r) {
  let e = 0;
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    wn(s), e += s.length;
  }
  const t = new Uint8Array(e);
  for (let n = 0, s = 0; n < r.length; n++) {
    const i = r[n];
    t.set(i, s), s += i.length;
  }
  return t;
}
class ws {
}
function Es(r) {
  const e = (n) => r().update(ai(n)).digest(), t = r();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => r(), e;
}
function As(r = 32) {
  if (Je && typeof Je.getRandomValues == "function")
    return Je.getRandomValues(new Uint8Array(r));
  if (Je && typeof Je.randomBytes == "function")
    return Uint8Array.from(Je.randomBytes(r));
  throw new Error("crypto.getRandomValues must be defined");
}
function ko(r, e, t, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(e, t, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(t >> s & i), f = Number(t & i), p = n ? 4 : 0, b = n ? 0 : 4;
  r.setUint32(e + p, o, n), r.setUint32(e + b, f, n);
}
function Uo(r, e, t) {
  return r & e ^ ~r & t;
}
function Do(r, e, t) {
  return r & e ^ r & t ^ e & t;
}
class bs extends ws {
  constructor(e, t, n, s) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = s, this.buffer = new Uint8Array(e), this.view = vr(this.buffer);
  }
  update(e) {
    Pn(this), e = ai(e), wn(e);
    const { view: t, buffer: n, blockLen: s } = this, i = e.length;
    for (let o = 0; o < i; ) {
      const f = Math.min(s - this.pos, i - o);
      if (f === s) {
        const p = vr(e);
        for (; s <= i - o; o += s)
          this.process(p, o);
        continue;
      }
      n.set(e.subarray(o, o + f), this.pos), this.pos += f, o += f, this.pos === s && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Pn(this), Co(e, this), this.finished = !0;
    const { buffer: t, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    t[o++] = 128, an(this.buffer.subarray(o)), this.padOffset > s - o && (this.process(n, 0), o = 0);
    for (let x = o; x < s; x++)
      t[x] = 0;
    ko(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const f = vr(e), p = this.outputLen;
    if (p % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const b = p / 4, v = this.get();
    if (b > v.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let x = 0; x < b; x++)
      f.setUint32(4 * x, v[x], i);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const n = e.slice(0, t);
    return this.destroy(), n;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: n, length: s, finished: i, destroyed: o, pos: f } = this;
    return e.destroyed = o, e.finished = i, e.length = s, e.pos = f, s % t && e.buffer.set(n), e;
  }
  clone() {
    return this._cloneInto();
  }
}
const De = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ce = /* @__PURE__ */ Uint32Array.from([
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
]), xn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Mi = /* @__PURE__ */ BigInt(32);
function Po(r, e = !1) {
  return e ? { h: Number(r & xn), l: Number(r >> Mi & xn) } : { h: Number(r >> Mi & xn) | 0, l: Number(r & xn) | 0 };
}
function Fo(r, e = !1) {
  const t = r.length;
  let n = new Uint32Array(t), s = new Uint32Array(t);
  for (let i = 0; i < t; i++) {
    const { h: o, l: f } = Po(r[i], e);
    [n[i], s[i]] = [o, f];
  }
  return [n, s];
}
const ki = (r, e, t) => r >>> t, Ui = (r, e, t) => r << 32 - t | e >>> t, Qe = (r, e, t) => r >>> t | e << 32 - t, tn = (r, e, t) => r << 32 - t | e >>> t, Tn = (r, e, t) => r << 64 - t | e >>> t - 32, Bn = (r, e, t) => r >>> t - 32 | e << 64 - t;
function xe(r, e, t, n) {
  const s = (e >>> 0) + (n >>> 0);
  return { h: r + t + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const qo = (r, e, t) => (r >>> 0) + (e >>> 0) + (t >>> 0), $o = (r, e, t, n) => e + t + n + (r / 2 ** 32 | 0) | 0, zo = (r, e, t, n) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0), Ho = (r, e, t, n, s) => e + t + n + s + (r / 2 ** 32 | 0) | 0, Go = (r, e, t, n, s) => (r >>> 0) + (e >>> 0) + (t >>> 0) + (n >>> 0) + (s >>> 0), Vo = (r, e, t, n, s, i) => e + t + n + s + i + (r / 2 ** 32 | 0) | 0, Ko = /* @__PURE__ */ Uint32Array.from([
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
]), Pe = /* @__PURE__ */ new Uint32Array(64);
class Wo extends bs {
  constructor(e = 32) {
    super(64, e, 8, !1), this.A = De[0] | 0, this.B = De[1] | 0, this.C = De[2] | 0, this.D = De[3] | 0, this.E = De[4] | 0, this.F = De[5] | 0, this.G = De[6] | 0, this.H = De[7] | 0;
  }
  get() {
    const { A: e, B: t, C: n, D: s, E: i, F: o, G: f, H: p } = this;
    return [e, t, n, s, i, o, f, p];
  }
  // prettier-ignore
  set(e, t, n, s, i, o, f, p) {
    this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = f | 0, this.H = p | 0;
  }
  process(e, t) {
    for (let x = 0; x < 16; x++, t += 4)
      Pe[x] = e.getUint32(t, !1);
    for (let x = 16; x < 64; x++) {
      const U = Pe[x - 15], B = Pe[x - 2], k = Se(U, 7) ^ Se(U, 18) ^ U >>> 3, N = Se(B, 17) ^ Se(B, 19) ^ B >>> 10;
      Pe[x] = N + Pe[x - 7] + k + Pe[x - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: f, F: p, G: b, H: v } = this;
    for (let x = 0; x < 64; x++) {
      const U = Se(f, 6) ^ Se(f, 11) ^ Se(f, 25), B = v + U + Uo(f, p, b) + Ko[x] + Pe[x] | 0, N = (Se(n, 2) ^ Se(n, 13) ^ Se(n, 22)) + Do(n, s, i) | 0;
      v = b, b = p, p = f, f = o + B | 0, o = i, i = s, s = n, n = B + N | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, f = f + this.E | 0, p = p + this.F | 0, b = b + this.G | 0, v = v + this.H | 0, this.set(n, s, i, o, f, p, b, v);
  }
  roundClean() {
    an(Pe);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), an(this.buffer);
  }
}
const Ss = Fo([
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
].map((r) => BigInt(r))), jo = Ss[0], Yo = Ss[1], Fe = /* @__PURE__ */ new Uint32Array(80), qe = /* @__PURE__ */ new Uint32Array(80);
class Xo extends bs {
  constructor(e = 64) {
    super(128, e, 16, !1), this.Ah = ce[0] | 0, this.Al = ce[1] | 0, this.Bh = ce[2] | 0, this.Bl = ce[3] | 0, this.Ch = ce[4] | 0, this.Cl = ce[5] | 0, this.Dh = ce[6] | 0, this.Dl = ce[7] | 0, this.Eh = ce[8] | 0, this.El = ce[9] | 0, this.Fh = ce[10] | 0, this.Fl = ce[11] | 0, this.Gh = ce[12] | 0, this.Gl = ce[13] | 0, this.Hh = ce[14] | 0, this.Hl = ce[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: t, Bh: n, Bl: s, Ch: i, Cl: o, Dh: f, Dl: p, Eh: b, El: v, Fh: x, Fl: U, Gh: B, Gl: k, Hh: N, Hl: M } = this;
    return [e, t, n, s, i, o, f, p, b, v, x, U, B, k, N, M];
  }
  // prettier-ignore
  set(e, t, n, s, i, o, f, p, b, v, x, U, B, k, N, M) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = n | 0, this.Bl = s | 0, this.Ch = i | 0, this.Cl = o | 0, this.Dh = f | 0, this.Dl = p | 0, this.Eh = b | 0, this.El = v | 0, this.Fh = x | 0, this.Fl = U | 0, this.Gh = B | 0, this.Gl = k | 0, this.Hh = N | 0, this.Hl = M | 0;
  }
  process(e, t) {
    for (let K = 0; K < 16; K++, t += 4)
      Fe[K] = e.getUint32(t), qe[K] = e.getUint32(t += 4);
    for (let K = 16; K < 80; K++) {
      const $ = Fe[K - 15] | 0, j = qe[K - 15] | 0, J = Qe($, j, 1) ^ Qe($, j, 8) ^ ki($, j, 7), st = tn($, j, 1) ^ tn($, j, 8) ^ Ui($, j, 7), ot = Fe[K - 2] | 0, W = qe[K - 2] | 0, D = Qe(ot, W, 19) ^ Tn(ot, W, 61) ^ ki(ot, W, 6), F = tn(ot, W, 19) ^ Bn(ot, W, 61) ^ Ui(ot, W, 6), V = zo(st, F, qe[K - 7], qe[K - 16]), R = Ho(V, J, D, Fe[K - 7], Fe[K - 16]);
      Fe[K] = R | 0, qe[K] = V | 0;
    }
    let { Ah: n, Al: s, Bh: i, Bl: o, Ch: f, Cl: p, Dh: b, Dl: v, Eh: x, El: U, Fh: B, Fl: k, Gh: N, Gl: M, Hh: Y, Hl: Z } = this;
    for (let K = 0; K < 80; K++) {
      const $ = Qe(x, U, 14) ^ Qe(x, U, 18) ^ Tn(x, U, 41), j = tn(x, U, 14) ^ tn(x, U, 18) ^ Bn(x, U, 41), J = x & B ^ ~x & N, st = U & k ^ ~U & M, ot = Go(Z, j, st, Yo[K], qe[K]), W = Vo(ot, Y, $, J, jo[K], Fe[K]), D = ot | 0, F = Qe(n, s, 28) ^ Tn(n, s, 34) ^ Tn(n, s, 39), V = tn(n, s, 28) ^ Bn(n, s, 34) ^ Bn(n, s, 39), R = n & i ^ n & f ^ i & f, a = s & o ^ s & p ^ o & p;
      Y = N | 0, Z = M | 0, N = B | 0, M = k | 0, B = x | 0, k = U | 0, { h: x, l: U } = xe(b | 0, v | 0, W | 0, D | 0), b = f | 0, v = p | 0, f = i | 0, p = o | 0, i = n | 0, o = s | 0;
      const d = qo(D, V, a);
      n = $o(d, W, F, R), s = d | 0;
    }
    ({ h: n, l: s } = xe(this.Ah | 0, this.Al | 0, n | 0, s | 0)), { h: i, l: o } = xe(this.Bh | 0, this.Bl | 0, i | 0, o | 0), { h: f, l: p } = xe(this.Ch | 0, this.Cl | 0, f | 0, p | 0), { h: b, l: v } = xe(this.Dh | 0, this.Dl | 0, b | 0, v | 0), { h: x, l: U } = xe(this.Eh | 0, this.El | 0, x | 0, U | 0), { h: B, l: k } = xe(this.Fh | 0, this.Fl | 0, B | 0, k | 0), { h: N, l: M } = xe(this.Gh | 0, this.Gl | 0, N | 0, M | 0), { h: Y, l: Z } = xe(this.Hh | 0, this.Hl | 0, Y | 0, Z | 0), this.set(n, s, i, o, f, p, b, v, x, U, B, k, N, M, Y, Z);
  }
  roundClean() {
    an(Fe, qe);
  }
  destroy() {
    an(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const vs = /* @__PURE__ */ Es(() => new Wo()), Zo = /* @__PURE__ */ Es(() => new Xo());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ci = /* @__PURE__ */ BigInt(0), Zr = /* @__PURE__ */ BigInt(1);
function En(r) {
  return r instanceof Uint8Array || ArrayBuffer.isView(r) && r.constructor.name === "Uint8Array";
}
function ui(r) {
  if (!En(r))
    throw new Error("Uint8Array expected");
}
function He(r, e) {
  if (typeof e != "boolean")
    throw new Error(r + " boolean expected, got " + e);
}
function Cn(r) {
  const e = r.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function Os(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return r === "" ? ci : BigInt("0x" + r);
}
const Is = (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function"
), Jo = /* @__PURE__ */ Array.from({ length: 256 }, (r, e) => e.toString(16).padStart(2, "0"));
function cn(r) {
  if (ui(r), Is)
    return r.toHex();
  let e = "";
  for (let t = 0; t < r.length; t++)
    e += Jo[r[t]];
  return e;
}
const Te = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Di(r) {
  if (r >= Te._0 && r <= Te._9)
    return r - Te._0;
  if (r >= Te.A && r <= Te.F)
    return r - (Te.A - 10);
  if (r >= Te.a && r <= Te.f)
    return r - (Te.a - 10);
}
function Fn(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  if (Is)
    return Uint8Array.fromHex(r);
  const e = r.length, t = e / 2;
  if (e % 2)
    throw new Error("hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(t);
  for (let s = 0, i = 0; s < t; s++, i += 2) {
    const o = Di(r.charCodeAt(i)), f = Di(r.charCodeAt(i + 1));
    if (o === void 0 || f === void 0) {
      const p = r[i] + r[i + 1];
      throw new Error('hex string expected, got non-hex character "' + p + '" at index ' + i);
    }
    n[s] = o * 16 + f;
  }
  return n;
}
function We(r) {
  return Os(cn(r));
}
function yn(r) {
  return ui(r), Os(cn(Uint8Array.from(r).reverse()));
}
function An(r, e) {
  return Fn(r.toString(16).padStart(e * 2, "0"));
}
function qn(r, e) {
  return An(r, e).reverse();
}
function Pt(r, e, t) {
  let n;
  if (typeof e == "string")
    try {
      n = Fn(e);
    } catch (i) {
      throw new Error(r + " must be hex string or Uint8Array, cause: " + i);
    }
  else if (En(e))
    n = Uint8Array.from(e);
  else
    throw new Error(r + " must be hex string or Uint8Array");
  const s = n.length;
  if (typeof t == "number" && s !== t)
    throw new Error(r + " of length " + t + " expected, got " + s);
  return n;
}
function un(...r) {
  let e = 0;
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    ui(s), e += s.length;
  }
  const t = new Uint8Array(e);
  for (let n = 0, s = 0; n < r.length; n++) {
    const i = r[n];
    t.set(i, s), s += i.length;
  }
  return t;
}
const Or = (r) => typeof r == "bigint" && ci <= r;
function fi(r, e, t) {
  return Or(r) && Or(e) && Or(t) && e <= r && r < t;
}
function Ae(r, e, t, n) {
  if (!fi(e, t, n))
    throw new Error("expected valid " + r + ": " + t + " <= n < " + n + ", got " + e);
}
function Qo(r) {
  let e;
  for (e = 0; r > ci; r >>= Zr, e += 1)
    ;
  return e;
}
const Zn = (r) => (Zr << BigInt(r)) - Zr, Ir = (r) => new Uint8Array(r), Pi = (r) => Uint8Array.from(r);
function ta(r, e, t) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof t != "function")
    throw new Error("hmacFn must be a function");
  let n = Ir(r), s = Ir(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, f = (...x) => t(s, n, ...x), p = (x = Ir(0)) => {
    s = f(Pi([0]), x), n = f(), x.length !== 0 && (s = f(Pi([1]), x), n = f());
  }, b = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let x = 0;
    const U = [];
    for (; x < e; ) {
      n = f();
      const B = n.slice();
      U.push(B), x += n.length;
    }
    return un(...U);
  };
  return (x, U) => {
    o(), p(x);
    let B;
    for (; !(B = U(b())); )
      p();
    return o(), B;
  };
}
const ea = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || En(r),
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, e) => e.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function bn(r, e, t = {}) {
  const n = (s, i, o) => {
    const f = ea[i];
    if (typeof f != "function")
      throw new Error("invalid validator function");
    const p = r[s];
    if (!(o && p === void 0) && !f(p, r))
      throw new Error("param " + String(s) + " is invalid. Expected " + i + ", got " + p);
  };
  for (const [s, i] of Object.entries(e))
    n(s, i, !1);
  for (const [s, i] of Object.entries(t))
    n(s, i, !0);
  return r;
}
function $n(r) {
  const e = /* @__PURE__ */ new WeakMap();
  return (t, ...n) => {
    const s = e.get(t);
    if (s !== void 0)
      return s;
    const i = r(t, ...n);
    return e.set(t, i), i;
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ge = BigInt(0), ae = BigInt(1), Ke = /* @__PURE__ */ BigInt(2), na = /* @__PURE__ */ BigInt(3), Ns = /* @__PURE__ */ BigInt(4), xs = /* @__PURE__ */ BigInt(5), Ts = /* @__PURE__ */ BigInt(8);
function Bt(r, e) {
  const t = r % e;
  return t >= ge ? t : e + t;
}
function Ut(r, e, t) {
  let n = r;
  for (; e-- > ge; )
    n *= n, n %= t;
  return n;
}
function Jr(r, e) {
  if (r === ge)
    throw new Error("invert: expected non-zero number");
  if (e <= ge)
    throw new Error("invert: expected positive modulus, got " + e);
  let t = Bt(r, e), n = e, s = ge, i = ae;
  for (; t !== ge; ) {
    const f = n / t, p = n % t, b = s - i * f;
    n = t, t = p, s = i, i = b;
  }
  if (n !== ae)
    throw new Error("invert: does not exist");
  return Bt(s, e);
}
function Bs(r, e) {
  const t = (r.ORDER + ae) / Ns, n = r.pow(e, t);
  if (!r.eql(r.sqr(n), e))
    throw new Error("Cannot find square root");
  return n;
}
function ra(r, e) {
  const t = (r.ORDER - xs) / Ts, n = r.mul(e, Ke), s = r.pow(n, t), i = r.mul(e, s), o = r.mul(r.mul(i, Ke), s), f = r.mul(i, r.sub(o, r.ONE));
  if (!r.eql(r.sqr(f), e))
    throw new Error("Cannot find square root");
  return f;
}
function ia(r) {
  if (r < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let e = r - ae, t = 0;
  for (; e % Ke === ge; )
    e /= Ke, t++;
  let n = Ke;
  const s = Sn(r);
  for (; Fi(s, n) === 1; )
    if (n++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (t === 1)
    return Bs;
  let i = s.pow(n, e);
  const o = (e + ae) / Ke;
  return function(p, b) {
    if (p.is0(b))
      return b;
    if (Fi(p, b) !== 1)
      throw new Error("Cannot find square root");
    let v = t, x = p.mul(p.ONE, i), U = p.pow(b, e), B = p.pow(b, o);
    for (; !p.eql(U, p.ONE); ) {
      if (p.is0(U))
        return p.ZERO;
      let k = 1, N = p.sqr(U);
      for (; !p.eql(N, p.ONE); )
        if (k++, N = p.sqr(N), k === v)
          throw new Error("Cannot find square root");
      const M = ae << BigInt(v - k - 1), Y = p.pow(x, M);
      v = k, x = p.sqr(Y), U = p.mul(U, x), B = p.mul(B, Y);
    }
    return B;
  };
}
function sa(r) {
  return r % Ns === na ? Bs : r % Ts === xs ? ra : ia(r);
}
const oa = (r, e) => (Bt(r, e) & ae) === ae, aa = [
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
function ca(r) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = aa.reduce((n, s) => (n[s] = "function", n), e);
  return bn(r, t);
}
function ua(r, e, t) {
  if (t < ge)
    throw new Error("invalid exponent, negatives unsupported");
  if (t === ge)
    return r.ONE;
  if (t === ae)
    return e;
  let n = r.ONE, s = e;
  for (; t > ge; )
    t & ae && (n = r.mul(n, s)), s = r.sqr(s), t >>= ae;
  return n;
}
function li(r, e, t = !1) {
  const n = new Array(e.length).fill(t ? r.ZERO : void 0), s = e.reduce((o, f, p) => r.is0(f) ? o : (n[p] = o, r.mul(o, f)), r.ONE), i = r.inv(s);
  return e.reduceRight((o, f, p) => r.is0(f) ? o : (n[p] = r.mul(o, n[p]), r.mul(o, f)), i), n;
}
function Fi(r, e) {
  const t = (r.ORDER - ae) / Ke, n = r.pow(e, t), s = r.eql(n, r.ONE), i = r.eql(n, r.ZERO), o = r.eql(n, r.neg(r.ONE));
  if (!s && !i && !o)
    throw new Error("invalid Legendre symbol result");
  return s ? 1 : i ? 0 : -1;
}
function Cs(r, e) {
  e !== void 0 && Xr(e);
  const t = e !== void 0 ? e : r.toString(2).length, n = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: n };
}
function Sn(r, e, t = !1, n = {}) {
  if (r <= ge)
    throw new Error("invalid field: expected ORDER > 0, got " + r);
  const { nBitLength: s, nByteLength: i } = Cs(r, e);
  if (i > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let o;
  const f = Object.freeze({
    ORDER: r,
    isLE: t,
    BITS: s,
    BYTES: i,
    MASK: Zn(s),
    ZERO: ge,
    ONE: ae,
    create: (p) => Bt(p, r),
    isValid: (p) => {
      if (typeof p != "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof p);
      return ge <= p && p < r;
    },
    is0: (p) => p === ge,
    isOdd: (p) => (p & ae) === ae,
    neg: (p) => Bt(-p, r),
    eql: (p, b) => p === b,
    sqr: (p) => Bt(p * p, r),
    add: (p, b) => Bt(p + b, r),
    sub: (p, b) => Bt(p - b, r),
    mul: (p, b) => Bt(p * b, r),
    pow: (p, b) => ua(f, p, b),
    div: (p, b) => Bt(p * Jr(b, r), r),
    // Same as above, but doesn't normalize
    sqrN: (p) => p * p,
    addN: (p, b) => p + b,
    subN: (p, b) => p - b,
    mulN: (p, b) => p * b,
    inv: (p) => Jr(p, r),
    sqrt: n.sqrt || ((p) => (o || (o = sa(r)), o(f, p))),
    toBytes: (p) => t ? qn(p, i) : An(p, i),
    fromBytes: (p) => {
      if (p.length !== i)
        throw new Error("Field.fromBytes: expected " + i + " bytes, got " + p.length);
      return t ? yn(p) : We(p);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (p) => li(f, p),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (p, b, v) => v ? b : p
  });
  return Object.freeze(f);
}
function Ls(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const e = r.toString(2).length;
  return Math.ceil(e / 8);
}
function Ms(r) {
  const e = Ls(r);
  return e + Math.ceil(e / 2);
}
function fa(r, e, t = !1) {
  const n = r.length, s = Ls(e), i = Ms(e);
  if (n < 16 || n < i || n > 1024)
    throw new Error("expected " + i + "-1024 bytes of input, got " + n);
  const o = t ? yn(r) : We(r), f = Bt(o, e - ae) + ae;
  return t ? qn(f, s) : An(f, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const qi = BigInt(0), Qr = BigInt(1);
function Nr(r, e) {
  const t = e.negate();
  return r ? t : e;
}
function ks(r, e) {
  if (!Number.isSafeInteger(r) || r <= 0 || r > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + r);
}
function xr(r, e) {
  ks(r, e);
  const t = Math.ceil(e / r) + 1, n = 2 ** (r - 1), s = 2 ** r, i = Zn(r), o = BigInt(r);
  return { windows: t, windowSize: n, mask: i, maxNumber: s, shiftBy: o };
}
function $i(r, e, t) {
  const { windowSize: n, mask: s, maxNumber: i, shiftBy: o } = t;
  let f = Number(r & s), p = r >> o;
  f > n && (f -= i, p += Qr);
  const b = e * n, v = b + Math.abs(f) - 1, x = f === 0, U = f < 0, B = e % 2 !== 0;
  return { nextN: p, offset: v, isZero: x, isNeg: U, isNegF: B, offsetF: b };
}
function la(r, e) {
  if (!Array.isArray(r))
    throw new Error("array expected");
  r.forEach((t, n) => {
    if (!(t instanceof e))
      throw new Error("invalid point at index " + n);
  });
}
function ha(r, e) {
  if (!Array.isArray(r))
    throw new Error("array of scalars expected");
  r.forEach((t, n) => {
    if (!e.isValid(t))
      throw new Error("invalid scalar at index " + n);
  });
}
const Tr = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap();
function Br(r) {
  return Us.get(r) || 1;
}
function Ds(r, e) {
  return {
    constTimeNegate: Nr,
    hasPrecomputes(t) {
      return Br(t) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(t, n, s = r.ZERO) {
      let i = t;
      for (; n > qi; )
        n & Qr && (s = s.add(i)), i = i.double(), n >>= Qr;
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
    precomputeWindow(t, n) {
      const { windows: s, windowSize: i } = xr(n, e), o = [];
      let f = t, p = f;
      for (let b = 0; b < s; b++) {
        p = f, o.push(p);
        for (let v = 1; v < i; v++)
          p = p.add(f), o.push(p);
        f = p.double();
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
    wNAF(t, n, s) {
      let i = r.ZERO, o = r.BASE;
      const f = xr(t, e);
      for (let p = 0; p < f.windows; p++) {
        const { nextN: b, offset: v, isZero: x, isNeg: U, isNegF: B, offsetF: k } = $i(s, p, f);
        s = b, x ? o = o.add(Nr(B, n[k])) : i = i.add(Nr(U, n[v]));
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
    wNAFUnsafe(t, n, s, i = r.ZERO) {
      const o = xr(t, e);
      for (let f = 0; f < o.windows && s !== qi; f++) {
        const { nextN: p, offset: b, isZero: v, isNeg: x } = $i(s, f, o);
        if (s = p, !v) {
          const U = n[b];
          i = i.add(x ? U.negate() : U);
        }
      }
      return i;
    },
    getPrecomputes(t, n, s) {
      let i = Tr.get(n);
      return i || (i = this.precomputeWindow(n, t), t !== 1 && Tr.set(n, s(i))), i;
    },
    wNAFCached(t, n, s) {
      const i = Br(t);
      return this.wNAF(i, this.getPrecomputes(i, t, s), n);
    },
    wNAFCachedUnsafe(t, n, s, i) {
      const o = Br(t);
      return o === 1 ? this.unsafeLadder(t, n, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, t, s), n, i);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(t, n) {
      ks(n, e), Us.set(t, n), Tr.delete(t);
    }
  };
}
function Ps(r, e, t, n) {
  la(t, r), ha(n, e);
  const s = t.length, i = n.length;
  if (s !== i)
    throw new Error("arrays of points and scalars must have equal length");
  const o = r.ZERO, f = Qo(BigInt(s));
  let p = 1;
  f > 12 ? p = f - 3 : f > 4 ? p = f - 2 : f > 0 && (p = 2);
  const b = Zn(p), v = new Array(Number(b) + 1).fill(o), x = Math.floor((e.BITS - 1) / p) * p;
  let U = o;
  for (let B = x; B >= 0; B -= p) {
    v.fill(o);
    for (let N = 0; N < i; N++) {
      const M = n[N], Y = Number(M >> BigInt(B) & b);
      v[Y] = v[Y].add(t[N]);
    }
    let k = o;
    for (let N = v.length - 1, M = o; N > 0; N--)
      M = M.add(v[N]), k = k.add(M);
    if (U = U.add(k), B !== 0)
      for (let N = 0; N < p; N++)
        U = U.double();
  }
  return U;
}
function hi(r) {
  return ca(r.Fp), bn(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Cs(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ve = BigInt(0), de = BigInt(1), zi = BigInt(2), da = BigInt(8), pa = { zip215: !0 };
function _a(r) {
  const e = hi(r);
  return bn(r, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...e });
}
function ga(r) {
  const e = _a(r), { Fp: t, n, prehash: s, hash: i, randomBytes: o, nByteLength: f, h: p } = e, b = zi << BigInt(f * 8) - de, v = t.create, x = Sn(e.n, e.nBitLength);
  function U(w, E) {
    const I = t.sqr(w), m = t.sqr(E), c = t.add(t.mul(e.a, I), m), u = t.add(t.ONE, t.mul(e.d, t.mul(I, m)));
    return t.eql(c, u);
  }
  if (!U(e.Gx, e.Gy))
    throw new Error("bad curve params: generator point");
  const B = e.uvRatio || ((w, E) => {
    try {
      return { isValid: !0, value: t.sqrt(w * t.inv(E)) };
    } catch {
      return { isValid: !1, value: ve };
    }
  }), k = e.adjustScalarBytes || ((w) => w), N = e.domain || ((w, E, I) => {
    if (He("phflag", I), E.length || I)
      throw new Error("Contexts/pre-hash are not supported");
    return w;
  });
  function M(w, E, I = !1) {
    const m = I ? de : ve;
    Ae("coordinate " + w, E, m, b);
  }
  function Y(w) {
    if (!(w instanceof $))
      throw new Error("ExtendedPoint expected");
  }
  const Z = $n((w, E) => {
    const { ex: I, ey: m, ez: c } = w, u = w.is0();
    E == null && (E = u ? da : t.inv(c));
    const y = v(I * E), O = v(m * E), L = v(c * E);
    if (u)
      return { x: ve, y: de };
    if (L !== de)
      throw new Error("invZ was invalid");
    return { x: y, y: O };
  }), K = $n((w) => {
    const { a: E, d: I } = e;
    if (w.is0())
      throw new Error("bad point: ZERO");
    const { ex: m, ey: c, ez: u, et: y } = w, O = v(m * m), L = v(c * c), H = v(u * u), tt = v(H * H), it = v(O * E), Et = v(H * v(it + L)), pt = v(tt + v(I * v(O * L)));
    if (Et !== pt)
      throw new Error("bad point: equation left != right (1)");
    const dt = v(m * c), vt = v(u * y);
    if (dt !== vt)
      throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class $ {
    constructor(E, I, m, c) {
      M("x", E), M("y", I), M("z", m, !0), M("t", c), this.ex = E, this.ey = I, this.ez = m, this.et = c, Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(E) {
      if (E instanceof $)
        throw new Error("extended point not allowed");
      const { x: I, y: m } = E || {};
      return M("x", I), M("y", m), new $(I, m, de, v(I * m));
    }
    static normalizeZ(E) {
      const I = li(t, E.map((m) => m.ez));
      return E.map((m, c) => m.toAffine(I[c])).map($.fromAffine);
    }
    // Multiscalar Multiplication
    static msm(E, I) {
      return Ps($, x, E, I);
    }
    // "Private method", don't use it directly
    _setWindowSize(E) {
      st.setWindowSize(this, E);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      K(this);
    }
    // Compare one point to another.
    equals(E) {
      Y(E);
      const { ex: I, ey: m, ez: c } = this, { ex: u, ey: y, ez: O } = E, L = v(I * O), H = v(u * c), tt = v(m * O), it = v(y * c);
      return L === H && tt === it;
    }
    is0() {
      return this.equals($.ZERO);
    }
    negate() {
      return new $(v(-this.ex), this.ey, this.ez, v(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: E } = e, { ex: I, ey: m, ez: c } = this, u = v(I * I), y = v(m * m), O = v(zi * v(c * c)), L = v(E * u), H = I + m, tt = v(v(H * H) - u - y), it = L + y, Et = it - O, pt = L - y, dt = v(tt * Et), vt = v(it * pt), _t = v(tt * pt), wt = v(Et * it);
      return new $(dt, vt, wt, _t);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(E) {
      Y(E);
      const { a: I, d: m } = e, { ex: c, ey: u, ez: y, et: O } = this, { ex: L, ey: H, ez: tt, et: it } = E, Et = v(c * L), pt = v(u * H), dt = v(O * m * it), vt = v(y * tt), _t = v((c + u) * (L + H) - Et - pt), wt = vt - dt, _e = vt + dt, bt = v(pt - I * Et), xt = v(_t * wt), Ze = v(_e * bt), It = v(_t * bt), St = v(wt * _e);
      return new $(xt, Ze, St, It);
    }
    subtract(E) {
      return this.add(E.negate());
    }
    wNAF(E) {
      return st.wNAFCached(this, E, $.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(E) {
      const I = E;
      Ae("scalar", I, de, n);
      const { p: m, f: c } = this.wNAF(I);
      return $.normalizeZ([m, c])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    // Accepts optional accumulator to merge with multiply (important for sparse scalars)
    multiplyUnsafe(E, I = $.ZERO) {
      const m = E;
      return Ae("scalar", m, ve, n), m === ve ? J : this.is0() || m === de ? this : st.wNAFCachedUnsafe(this, m, $.normalizeZ, I);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(p).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return st.unsafeLadder(this, n).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(E) {
      return Z(this, E);
    }
    clearCofactor() {
      const { h: E } = e;
      return E === de ? this : this.multiplyUnsafe(E);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(E, I = !1) {
      const { d: m, a: c } = e, u = t.BYTES;
      E = Pt("pointHex", E, u), He("zip215", I);
      const y = E.slice(), O = E[u - 1];
      y[u - 1] = O & -129;
      const L = yn(y), H = I ? b : t.ORDER;
      Ae("pointHex.y", L, ve, H);
      const tt = v(L * L), it = v(tt - de), Et = v(m * tt - c);
      let { isValid: pt, value: dt } = B(it, Et);
      if (!pt)
        throw new Error("Point.fromHex: invalid y coordinate");
      const vt = (dt & de) === de, _t = (O & 128) !== 0;
      if (!I && dt === ve && _t)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return _t !== vt && (dt = v(-dt)), $.fromAffine({ x: dt, y: L });
    }
    static fromPrivateKey(E) {
      const { scalar: I } = D(E);
      return j.multiply(I);
    }
    toRawBytes() {
      const { x: E, y: I } = this.toAffine(), m = qn(I, t.BYTES);
      return m[m.length - 1] |= E & de ? 128 : 0, m;
    }
    toHex() {
      return cn(this.toRawBytes());
    }
  }
  $.BASE = new $(e.Gx, e.Gy, de, v(e.Gx * e.Gy)), $.ZERO = new $(ve, de, de, ve);
  const { BASE: j, ZERO: J } = $, st = Ds($, f * 8);
  function ot(w) {
    return Bt(w, n);
  }
  function W(w) {
    return ot(yn(w));
  }
  function D(w) {
    const E = t.BYTES;
    w = Pt("private key", w, E);
    const I = Pt("hashed private key", i(w), 2 * E), m = k(I.slice(0, E)), c = I.slice(E, 2 * E), u = W(m);
    return { head: m, prefix: c, scalar: u };
  }
  function F(w) {
    const { head: E, prefix: I, scalar: m } = D(w), c = j.multiply(m), u = c.toRawBytes();
    return { head: E, prefix: I, scalar: m, point: c, pointBytes: u };
  }
  function V(w) {
    return F(w).pointBytes;
  }
  function R(w = Uint8Array.of(), ...E) {
    const I = un(...E);
    return W(i(N(I, Pt("context", w), !!s)));
  }
  function a(w, E, I = {}) {
    w = Pt("message", w), s && (w = s(w));
    const { prefix: m, scalar: c, pointBytes: u } = F(E), y = R(I.context, m, w), O = j.multiply(y).toRawBytes(), L = R(I.context, O, u, w), H = ot(y + L * c);
    Ae("signature.s", H, ve, n);
    const tt = un(O, qn(H, t.BYTES));
    return Pt("result", tt, t.BYTES * 2);
  }
  const d = pa;
  function _(w, E, I, m = d) {
    const { context: c, zip215: u } = m, y = t.BYTES;
    w = Pt("signature", w, 2 * y), E = Pt("message", E), I = Pt("publicKey", I, y), u !== void 0 && He("zip215", u), s && (E = s(E));
    const O = yn(w.slice(y, 2 * y));
    let L, H, tt;
    try {
      L = $.fromHex(I, u), H = $.fromHex(w.slice(0, y), u), tt = j.multiplyUnsafe(O);
    } catch {
      return !1;
    }
    if (!u && L.isSmallOrder())
      return !1;
    const it = R(c, H.toRawBytes(), L.toRawBytes(), E);
    return H.add(L.multiplyUnsafe(it)).subtract(tt).clearCofactor().equals($.ZERO);
  }
  return j._setWindowSize(8), {
    CURVE: e,
    getPublicKey: V,
    sign: a,
    verify: _,
    ExtendedPoint: $,
    utils: {
      getExtendedPublicKey: F,
      /** ed25519 priv keys are uniform 32b. No need to check for modulo bias, like in secp256k1. */
      randomPrivateKey: () => o(t.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(w = 8, E = $.BASE) {
        return E._setWindowSize(w), E.multiply(BigInt(3)), E;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const di = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Hi = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const ma = BigInt(1), Gi = BigInt(2);
BigInt(3);
const ya = BigInt(5), Ra = BigInt(8);
function wa(r) {
  const e = BigInt(10), t = BigInt(20), n = BigInt(40), s = BigInt(80), i = di, f = r * r % i * r % i, p = Ut(f, Gi, i) * f % i, b = Ut(p, ma, i) * r % i, v = Ut(b, ya, i) * b % i, x = Ut(v, e, i) * v % i, U = Ut(x, t, i) * x % i, B = Ut(U, n, i) * U % i, k = Ut(B, s, i) * B % i, N = Ut(k, s, i) * B % i, M = Ut(N, e, i) * v % i;
  return { pow_p_5_8: Ut(M, Gi, i) * r % i, b2: f };
}
function Ea(r) {
  return r[0] &= 248, r[31] &= 127, r[31] |= 64, r;
}
function Aa(r, e) {
  const t = di, n = Bt(e * e * e, t), s = Bt(n * n * e, t), i = wa(r * s).pow_p_5_8;
  let o = Bt(r * n * i, t);
  const f = Bt(e * o * o, t), p = o, b = Bt(o * Hi, t), v = f === r, x = f === Bt(-r, t), U = f === Bt(-r * Hi, t);
  return v && (o = p), (x || U) && (o = b), oa(o, t) && (o = Bt(-o, t)), { isValid: v || x, value: o };
}
const Vi = Sn(di, void 0, !0), ba = {
  // Removing Fp.create() will still work, and is 10% faster on sign
  a: Vi.create(BigInt(-1)),
  // d is -121665/121666 a.k.a. Fp.neg(121665 * Fp.inv(121666))
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 2n**255n - 19n
  Fp: Vi,
  // Subgroup order 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  h: Ra,
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: Zo,
  randomBytes: As,
  adjustScalarBytes: Ea,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: Aa
}, pi = ga(ba);
var Un = { exports: {} };
const Sa = {}, va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sa
}, Symbol.toStringTag, { value: "Module" })), Oa = /* @__PURE__ */ si(va);
var Ia = Un.exports, Ki;
function Fs() {
  return Ki || (Ki = 1, function(r) {
    (function(e, t) {
      function n(R, a) {
        if (!R) throw new Error(a || "Assertion failed");
      }
      function s(R, a) {
        R.super_ = a;
        var d = function() {
        };
        d.prototype = a.prototype, R.prototype = new d(), R.prototype.constructor = R;
      }
      function i(R, a, d) {
        if (i.isBN(R))
          return R;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, R !== null && ((a === "le" || a === "be") && (d = a, a = 10), this._init(R || 0, a || 10, d || "be"));
      }
      typeof e == "object" ? e.exports = i : t.BN = i, i.BN = i, i.wordSize = 26;
      var o;
      try {
        typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = Oa.Buffer;
      } catch {
      }
      i.isBN = function(a) {
        return a instanceof i ? !0 : a !== null && typeof a == "object" && a.constructor.wordSize === i.wordSize && Array.isArray(a.words);
      }, i.max = function(a, d) {
        return a.cmp(d) > 0 ? a : d;
      }, i.min = function(a, d) {
        return a.cmp(d) < 0 ? a : d;
      }, i.prototype._init = function(a, d, _) {
        if (typeof a == "number")
          return this._initNumber(a, d, _);
        if (typeof a == "object")
          return this._initArray(a, d, _);
        d === "hex" && (d = 16), n(d === (d | 0) && d >= 2 && d <= 36), a = a.toString().replace(/\s+/g, "");
        var A = 0;
        a[0] === "-" && (A++, this.negative = 1), A < a.length && (d === 16 ? this._parseHex(a, A, _) : (this._parseBase(a, d, A), _ === "le" && this._initArray(this.toArray(), d, _)));
      }, i.prototype._initNumber = function(a, d, _) {
        a < 0 && (this.negative = 1, a = -a), a < 67108864 ? (this.words = [a & 67108863], this.length = 1) : a < 4503599627370496 ? (this.words = [
          a & 67108863,
          a / 67108864 & 67108863
        ], this.length = 2) : (n(a < 9007199254740992), this.words = [
          a & 67108863,
          a / 67108864 & 67108863,
          1
        ], this.length = 3), _ === "le" && this._initArray(this.toArray(), d, _);
      }, i.prototype._initArray = function(a, d, _) {
        if (n(typeof a.length == "number"), a.length <= 0)
          return this.words = [0], this.length = 1, this;
        this.length = Math.ceil(a.length / 3), this.words = new Array(this.length);
        for (var A = 0; A < this.length; A++)
          this.words[A] = 0;
        var w, E, I = 0;
        if (_ === "be")
          for (A = a.length - 1, w = 0; A >= 0; A -= 3)
            E = a[A] | a[A - 1] << 8 | a[A - 2] << 16, this.words[w] |= E << I & 67108863, this.words[w + 1] = E >>> 26 - I & 67108863, I += 24, I >= 26 && (I -= 26, w++);
        else if (_ === "le")
          for (A = 0, w = 0; A < a.length; A += 3)
            E = a[A] | a[A + 1] << 8 | a[A + 2] << 16, this.words[w] |= E << I & 67108863, this.words[w + 1] = E >>> 26 - I & 67108863, I += 24, I >= 26 && (I -= 26, w++);
        return this._strip();
      };
      function f(R, a) {
        var d = R.charCodeAt(a);
        if (d >= 48 && d <= 57)
          return d - 48;
        if (d >= 65 && d <= 70)
          return d - 55;
        if (d >= 97 && d <= 102)
          return d - 87;
        n(!1, "Invalid character in " + R);
      }
      function p(R, a, d) {
        var _ = f(R, d);
        return d - 1 >= a && (_ |= f(R, d - 1) << 4), _;
      }
      i.prototype._parseHex = function(a, d, _) {
        this.length = Math.ceil((a.length - d) / 6), this.words = new Array(this.length);
        for (var A = 0; A < this.length; A++)
          this.words[A] = 0;
        var w = 0, E = 0, I;
        if (_ === "be")
          for (A = a.length - 1; A >= d; A -= 2)
            I = p(a, d, A) << w, this.words[E] |= I & 67108863, w >= 18 ? (w -= 18, E += 1, this.words[E] |= I >>> 26) : w += 8;
        else {
          var m = a.length - d;
          for (A = m % 2 === 0 ? d + 1 : d; A < a.length; A += 2)
            I = p(a, d, A) << w, this.words[E] |= I & 67108863, w >= 18 ? (w -= 18, E += 1, this.words[E] |= I >>> 26) : w += 8;
        }
        this._strip();
      };
      function b(R, a, d, _) {
        for (var A = 0, w = 0, E = Math.min(R.length, d), I = a; I < E; I++) {
          var m = R.charCodeAt(I) - 48;
          A *= _, m >= 49 ? w = m - 49 + 10 : m >= 17 ? w = m - 17 + 10 : w = m, n(m >= 0 && w < _, "Invalid character"), A += w;
        }
        return A;
      }
      i.prototype._parseBase = function(a, d, _) {
        this.words = [0], this.length = 1;
        for (var A = 0, w = 1; w <= 67108863; w *= d)
          A++;
        A--, w = w / d | 0;
        for (var E = a.length - _, I = E % A, m = Math.min(E, E - I) + _, c = 0, u = _; u < m; u += A)
          c = b(a, u, u + A, d), this.imuln(w), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
        if (I !== 0) {
          var y = 1;
          for (c = b(a, u, a.length, d), u = 0; u < I; u++)
            y *= d;
          this.imuln(y), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
        }
        this._strip();
      }, i.prototype.copy = function(a) {
        a.words = new Array(this.length);
        for (var d = 0; d < this.length; d++)
          a.words[d] = this.words[d];
        a.length = this.length, a.negative = this.negative, a.red = this.red;
      };
      function v(R, a) {
        R.words = a.words, R.length = a.length, R.negative = a.negative, R.red = a.red;
      }
      if (i.prototype._move = function(a) {
        v(a, this);
      }, i.prototype.clone = function() {
        var a = new i(null);
        return this.copy(a), a;
      }, i.prototype._expand = function(a) {
        for (; this.length < a; )
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
          i.prototype[Symbol.for("nodejs.util.inspect.custom")] = x;
        } catch {
          i.prototype.inspect = x;
        }
      else
        i.prototype.inspect = x;
      function x() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var U = [
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
      ], B = [
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
      ], k = [
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
      i.prototype.toString = function(a, d) {
        a = a || 10, d = d | 0 || 1;
        var _;
        if (a === 16 || a === "hex") {
          _ = "";
          for (var A = 0, w = 0, E = 0; E < this.length; E++) {
            var I = this.words[E], m = ((I << A | w) & 16777215).toString(16);
            w = I >>> 24 - A & 16777215, A += 2, A >= 26 && (A -= 26, E--), w !== 0 || E !== this.length - 1 ? _ = U[6 - m.length] + m + _ : _ = m + _;
          }
          for (w !== 0 && (_ = w.toString(16) + _); _.length % d !== 0; )
            _ = "0" + _;
          return this.negative !== 0 && (_ = "-" + _), _;
        }
        if (a === (a | 0) && a >= 2 && a <= 36) {
          var c = B[a], u = k[a];
          _ = "";
          var y = this.clone();
          for (y.negative = 0; !y.isZero(); ) {
            var O = y.modrn(u).toString(a);
            y = y.idivn(u), y.isZero() ? _ = O + _ : _ = U[c - O.length] + O + _;
          }
          for (this.isZero() && (_ = "0" + _); _.length % d !== 0; )
            _ = "0" + _;
          return this.negative !== 0 && (_ = "-" + _), _;
        }
        n(!1, "Base should be between 2 and 36");
      }, i.prototype.toNumber = function() {
        var a = this.words[0];
        return this.length === 2 ? a += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? a += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -a : a;
      }, i.prototype.toJSON = function() {
        return this.toString(16, 2);
      }, o && (i.prototype.toBuffer = function(a, d) {
        return this.toArrayLike(o, a, d);
      }), i.prototype.toArray = function(a, d) {
        return this.toArrayLike(Array, a, d);
      };
      var N = function(a, d) {
        return a.allocUnsafe ? a.allocUnsafe(d) : new a(d);
      };
      i.prototype.toArrayLike = function(a, d, _) {
        this._strip();
        var A = this.byteLength(), w = _ || Math.max(1, A);
        n(A <= w, "byte array longer than desired length"), n(w > 0, "Requested array length <= 0");
        var E = N(a, w), I = d === "le" ? "LE" : "BE";
        return this["_toArrayLike" + I](E, A), E;
      }, i.prototype._toArrayLikeLE = function(a, d) {
        for (var _ = 0, A = 0, w = 0, E = 0; w < this.length; w++) {
          var I = this.words[w] << E | A;
          a[_++] = I & 255, _ < a.length && (a[_++] = I >> 8 & 255), _ < a.length && (a[_++] = I >> 16 & 255), E === 6 ? (_ < a.length && (a[_++] = I >> 24 & 255), A = 0, E = 0) : (A = I >>> 24, E += 2);
        }
        if (_ < a.length)
          for (a[_++] = A; _ < a.length; )
            a[_++] = 0;
      }, i.prototype._toArrayLikeBE = function(a, d) {
        for (var _ = a.length - 1, A = 0, w = 0, E = 0; w < this.length; w++) {
          var I = this.words[w] << E | A;
          a[_--] = I & 255, _ >= 0 && (a[_--] = I >> 8 & 255), _ >= 0 && (a[_--] = I >> 16 & 255), E === 6 ? (_ >= 0 && (a[_--] = I >> 24 & 255), A = 0, E = 0) : (A = I >>> 24, E += 2);
        }
        if (_ >= 0)
          for (a[_--] = A; _ >= 0; )
            a[_--] = 0;
      }, Math.clz32 ? i.prototype._countBits = function(a) {
        return 32 - Math.clz32(a);
      } : i.prototype._countBits = function(a) {
        var d = a, _ = 0;
        return d >= 4096 && (_ += 13, d >>>= 13), d >= 64 && (_ += 7, d >>>= 7), d >= 8 && (_ += 4, d >>>= 4), d >= 2 && (_ += 2, d >>>= 2), _ + d;
      }, i.prototype._zeroBits = function(a) {
        if (a === 0) return 26;
        var d = a, _ = 0;
        return (d & 8191) === 0 && (_ += 13, d >>>= 13), (d & 127) === 0 && (_ += 7, d >>>= 7), (d & 15) === 0 && (_ += 4, d >>>= 4), (d & 3) === 0 && (_ += 2, d >>>= 2), (d & 1) === 0 && _++, _;
      }, i.prototype.bitLength = function() {
        var a = this.words[this.length - 1], d = this._countBits(a);
        return (this.length - 1) * 26 + d;
      };
      function M(R) {
        for (var a = new Array(R.bitLength()), d = 0; d < a.length; d++) {
          var _ = d / 26 | 0, A = d % 26;
          a[d] = R.words[_] >>> A & 1;
        }
        return a;
      }
      i.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var a = 0, d = 0; d < this.length; d++) {
          var _ = this._zeroBits(this.words[d]);
          if (a += _, _ !== 26) break;
        }
        return a;
      }, i.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, i.prototype.toTwos = function(a) {
        return this.negative !== 0 ? this.abs().inotn(a).iaddn(1) : this.clone();
      }, i.prototype.fromTwos = function(a) {
        return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone();
      }, i.prototype.isNeg = function() {
        return this.negative !== 0;
      }, i.prototype.neg = function() {
        return this.clone().ineg();
      }, i.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, i.prototype.iuor = function(a) {
        for (; this.length < a.length; )
          this.words[this.length++] = 0;
        for (var d = 0; d < a.length; d++)
          this.words[d] = this.words[d] | a.words[d];
        return this._strip();
      }, i.prototype.ior = function(a) {
        return n((this.negative | a.negative) === 0), this.iuor(a);
      }, i.prototype.or = function(a) {
        return this.length > a.length ? this.clone().ior(a) : a.clone().ior(this);
      }, i.prototype.uor = function(a) {
        return this.length > a.length ? this.clone().iuor(a) : a.clone().iuor(this);
      }, i.prototype.iuand = function(a) {
        var d;
        this.length > a.length ? d = a : d = this;
        for (var _ = 0; _ < d.length; _++)
          this.words[_] = this.words[_] & a.words[_];
        return this.length = d.length, this._strip();
      }, i.prototype.iand = function(a) {
        return n((this.negative | a.negative) === 0), this.iuand(a);
      }, i.prototype.and = function(a) {
        return this.length > a.length ? this.clone().iand(a) : a.clone().iand(this);
      }, i.prototype.uand = function(a) {
        return this.length > a.length ? this.clone().iuand(a) : a.clone().iuand(this);
      }, i.prototype.iuxor = function(a) {
        var d, _;
        this.length > a.length ? (d = this, _ = a) : (d = a, _ = this);
        for (var A = 0; A < _.length; A++)
          this.words[A] = d.words[A] ^ _.words[A];
        if (this !== d)
          for (; A < d.length; A++)
            this.words[A] = d.words[A];
        return this.length = d.length, this._strip();
      }, i.prototype.ixor = function(a) {
        return n((this.negative | a.negative) === 0), this.iuxor(a);
      }, i.prototype.xor = function(a) {
        return this.length > a.length ? this.clone().ixor(a) : a.clone().ixor(this);
      }, i.prototype.uxor = function(a) {
        return this.length > a.length ? this.clone().iuxor(a) : a.clone().iuxor(this);
      }, i.prototype.inotn = function(a) {
        n(typeof a == "number" && a >= 0);
        var d = Math.ceil(a / 26) | 0, _ = a % 26;
        this._expand(d), _ > 0 && d--;
        for (var A = 0; A < d; A++)
          this.words[A] = ~this.words[A] & 67108863;
        return _ > 0 && (this.words[A] = ~this.words[A] & 67108863 >> 26 - _), this._strip();
      }, i.prototype.notn = function(a) {
        return this.clone().inotn(a);
      }, i.prototype.setn = function(a, d) {
        n(typeof a == "number" && a >= 0);
        var _ = a / 26 | 0, A = a % 26;
        return this._expand(_ + 1), d ? this.words[_] = this.words[_] | 1 << A : this.words[_] = this.words[_] & ~(1 << A), this._strip();
      }, i.prototype.iadd = function(a) {
        var d;
        if (this.negative !== 0 && a.negative === 0)
          return this.negative = 0, d = this.isub(a), this.negative ^= 1, this._normSign();
        if (this.negative === 0 && a.negative !== 0)
          return a.negative = 0, d = this.isub(a), a.negative = 1, d._normSign();
        var _, A;
        this.length > a.length ? (_ = this, A = a) : (_ = a, A = this);
        for (var w = 0, E = 0; E < A.length; E++)
          d = (_.words[E] | 0) + (A.words[E] | 0) + w, this.words[E] = d & 67108863, w = d >>> 26;
        for (; w !== 0 && E < _.length; E++)
          d = (_.words[E] | 0) + w, this.words[E] = d & 67108863, w = d >>> 26;
        if (this.length = _.length, w !== 0)
          this.words[this.length] = w, this.length++;
        else if (_ !== this)
          for (; E < _.length; E++)
            this.words[E] = _.words[E];
        return this;
      }, i.prototype.add = function(a) {
        var d;
        return a.negative !== 0 && this.negative === 0 ? (a.negative = 0, d = this.sub(a), a.negative ^= 1, d) : a.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = a.sub(this), this.negative = 1, d) : this.length > a.length ? this.clone().iadd(a) : a.clone().iadd(this);
      }, i.prototype.isub = function(a) {
        if (a.negative !== 0) {
          a.negative = 0;
          var d = this.iadd(a);
          return a.negative = 1, d._normSign();
        } else if (this.negative !== 0)
          return this.negative = 0, this.iadd(a), this.negative = 1, this._normSign();
        var _ = this.cmp(a);
        if (_ === 0)
          return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var A, w;
        _ > 0 ? (A = this, w = a) : (A = a, w = this);
        for (var E = 0, I = 0; I < w.length; I++)
          d = (A.words[I] | 0) - (w.words[I] | 0) + E, E = d >> 26, this.words[I] = d & 67108863;
        for (; E !== 0 && I < A.length; I++)
          d = (A.words[I] | 0) + E, E = d >> 26, this.words[I] = d & 67108863;
        if (E === 0 && I < A.length && A !== this)
          for (; I < A.length; I++)
            this.words[I] = A.words[I];
        return this.length = Math.max(this.length, I), A !== this && (this.negative = 1), this._strip();
      }, i.prototype.sub = function(a) {
        return this.clone().isub(a);
      };
      function Y(R, a, d) {
        d.negative = a.negative ^ R.negative;
        var _ = R.length + a.length | 0;
        d.length = _, _ = _ - 1 | 0;
        var A = R.words[0] | 0, w = a.words[0] | 0, E = A * w, I = E & 67108863, m = E / 67108864 | 0;
        d.words[0] = I;
        for (var c = 1; c < _; c++) {
          for (var u = m >>> 26, y = m & 67108863, O = Math.min(c, a.length - 1), L = Math.max(0, c - R.length + 1); L <= O; L++) {
            var H = c - L | 0;
            A = R.words[H] | 0, w = a.words[L] | 0, E = A * w + y, u += E / 67108864 | 0, y = E & 67108863;
          }
          d.words[c] = y | 0, m = u | 0;
        }
        return m !== 0 ? d.words[c] = m | 0 : d.length--, d._strip();
      }
      var Z = function(a, d, _) {
        var A = a.words, w = d.words, E = _.words, I = 0, m, c, u, y = A[0] | 0, O = y & 8191, L = y >>> 13, H = A[1] | 0, tt = H & 8191, it = H >>> 13, Et = A[2] | 0, pt = Et & 8191, dt = Et >>> 13, vt = A[3] | 0, _t = vt & 8191, wt = vt >>> 13, _e = A[4] | 0, bt = _e & 8191, xt = _e >>> 13, Ze = A[5] | 0, It = Ze & 8191, St = Ze >>> 13, me = A[6] | 0, Tt = me & 8191, Mt = me >>> 13, Ee = A[7] | 0, kt = Ee & 8191, g = Ee >>> 13, l = A[8] | 0, h = l & 8191, S = l >>> 13, C = A[9] | 0, P = C & 8191, G = C >>> 13, gt = w[0] | 0, ht = gt & 8191, lt = gt >>> 13, Nt = w[1] | 0, ut = Nt & 8191, Ft = Nt >>> 13, bi = w[2] | 0, qt = bi & 8191, $t = bi >>> 13, Si = w[3] | 0, zt = Si & 8191, Ht = Si >>> 13, vi = w[4] | 0, Gt = vi & 8191, Vt = vi >>> 13, Oi = w[5] | 0, Kt = Oi & 8191, Wt = Oi >>> 13, Ii = w[6] | 0, jt = Ii & 8191, Yt = Ii >>> 13, Ni = w[7] | 0, Xt = Ni & 8191, Zt = Ni >>> 13, xi = w[8] | 0, Jt = xi & 8191, Qt = xi >>> 13, Ti = w[9] | 0, te = Ti & 8191, ee = Ti >>> 13;
        _.negative = a.negative ^ d.negative, _.length = 19, m = Math.imul(O, ht), c = Math.imul(O, lt), c = c + Math.imul(L, ht) | 0, u = Math.imul(L, lt);
        var sr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, m = Math.imul(tt, ht), c = Math.imul(tt, lt), c = c + Math.imul(it, ht) | 0, u = Math.imul(it, lt), m = m + Math.imul(O, ut) | 0, c = c + Math.imul(O, Ft) | 0, c = c + Math.imul(L, ut) | 0, u = u + Math.imul(L, Ft) | 0;
        var or = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (or >>> 26) | 0, or &= 67108863, m = Math.imul(pt, ht), c = Math.imul(pt, lt), c = c + Math.imul(dt, ht) | 0, u = Math.imul(dt, lt), m = m + Math.imul(tt, ut) | 0, c = c + Math.imul(tt, Ft) | 0, c = c + Math.imul(it, ut) | 0, u = u + Math.imul(it, Ft) | 0, m = m + Math.imul(O, qt) | 0, c = c + Math.imul(O, $t) | 0, c = c + Math.imul(L, qt) | 0, u = u + Math.imul(L, $t) | 0;
        var ar = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, m = Math.imul(_t, ht), c = Math.imul(_t, lt), c = c + Math.imul(wt, ht) | 0, u = Math.imul(wt, lt), m = m + Math.imul(pt, ut) | 0, c = c + Math.imul(pt, Ft) | 0, c = c + Math.imul(dt, ut) | 0, u = u + Math.imul(dt, Ft) | 0, m = m + Math.imul(tt, qt) | 0, c = c + Math.imul(tt, $t) | 0, c = c + Math.imul(it, qt) | 0, u = u + Math.imul(it, $t) | 0, m = m + Math.imul(O, zt) | 0, c = c + Math.imul(O, Ht) | 0, c = c + Math.imul(L, zt) | 0, u = u + Math.imul(L, Ht) | 0;
        var cr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, m = Math.imul(bt, ht), c = Math.imul(bt, lt), c = c + Math.imul(xt, ht) | 0, u = Math.imul(xt, lt), m = m + Math.imul(_t, ut) | 0, c = c + Math.imul(_t, Ft) | 0, c = c + Math.imul(wt, ut) | 0, u = u + Math.imul(wt, Ft) | 0, m = m + Math.imul(pt, qt) | 0, c = c + Math.imul(pt, $t) | 0, c = c + Math.imul(dt, qt) | 0, u = u + Math.imul(dt, $t) | 0, m = m + Math.imul(tt, zt) | 0, c = c + Math.imul(tt, Ht) | 0, c = c + Math.imul(it, zt) | 0, u = u + Math.imul(it, Ht) | 0, m = m + Math.imul(O, Gt) | 0, c = c + Math.imul(O, Vt) | 0, c = c + Math.imul(L, Gt) | 0, u = u + Math.imul(L, Vt) | 0;
        var ur = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, m = Math.imul(It, ht), c = Math.imul(It, lt), c = c + Math.imul(St, ht) | 0, u = Math.imul(St, lt), m = m + Math.imul(bt, ut) | 0, c = c + Math.imul(bt, Ft) | 0, c = c + Math.imul(xt, ut) | 0, u = u + Math.imul(xt, Ft) | 0, m = m + Math.imul(_t, qt) | 0, c = c + Math.imul(_t, $t) | 0, c = c + Math.imul(wt, qt) | 0, u = u + Math.imul(wt, $t) | 0, m = m + Math.imul(pt, zt) | 0, c = c + Math.imul(pt, Ht) | 0, c = c + Math.imul(dt, zt) | 0, u = u + Math.imul(dt, Ht) | 0, m = m + Math.imul(tt, Gt) | 0, c = c + Math.imul(tt, Vt) | 0, c = c + Math.imul(it, Gt) | 0, u = u + Math.imul(it, Vt) | 0, m = m + Math.imul(O, Kt) | 0, c = c + Math.imul(O, Wt) | 0, c = c + Math.imul(L, Kt) | 0, u = u + Math.imul(L, Wt) | 0;
        var fr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, m = Math.imul(Tt, ht), c = Math.imul(Tt, lt), c = c + Math.imul(Mt, ht) | 0, u = Math.imul(Mt, lt), m = m + Math.imul(It, ut) | 0, c = c + Math.imul(It, Ft) | 0, c = c + Math.imul(St, ut) | 0, u = u + Math.imul(St, Ft) | 0, m = m + Math.imul(bt, qt) | 0, c = c + Math.imul(bt, $t) | 0, c = c + Math.imul(xt, qt) | 0, u = u + Math.imul(xt, $t) | 0, m = m + Math.imul(_t, zt) | 0, c = c + Math.imul(_t, Ht) | 0, c = c + Math.imul(wt, zt) | 0, u = u + Math.imul(wt, Ht) | 0, m = m + Math.imul(pt, Gt) | 0, c = c + Math.imul(pt, Vt) | 0, c = c + Math.imul(dt, Gt) | 0, u = u + Math.imul(dt, Vt) | 0, m = m + Math.imul(tt, Kt) | 0, c = c + Math.imul(tt, Wt) | 0, c = c + Math.imul(it, Kt) | 0, u = u + Math.imul(it, Wt) | 0, m = m + Math.imul(O, jt) | 0, c = c + Math.imul(O, Yt) | 0, c = c + Math.imul(L, jt) | 0, u = u + Math.imul(L, Yt) | 0;
        var lr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, m = Math.imul(kt, ht), c = Math.imul(kt, lt), c = c + Math.imul(g, ht) | 0, u = Math.imul(g, lt), m = m + Math.imul(Tt, ut) | 0, c = c + Math.imul(Tt, Ft) | 0, c = c + Math.imul(Mt, ut) | 0, u = u + Math.imul(Mt, Ft) | 0, m = m + Math.imul(It, qt) | 0, c = c + Math.imul(It, $t) | 0, c = c + Math.imul(St, qt) | 0, u = u + Math.imul(St, $t) | 0, m = m + Math.imul(bt, zt) | 0, c = c + Math.imul(bt, Ht) | 0, c = c + Math.imul(xt, zt) | 0, u = u + Math.imul(xt, Ht) | 0, m = m + Math.imul(_t, Gt) | 0, c = c + Math.imul(_t, Vt) | 0, c = c + Math.imul(wt, Gt) | 0, u = u + Math.imul(wt, Vt) | 0, m = m + Math.imul(pt, Kt) | 0, c = c + Math.imul(pt, Wt) | 0, c = c + Math.imul(dt, Kt) | 0, u = u + Math.imul(dt, Wt) | 0, m = m + Math.imul(tt, jt) | 0, c = c + Math.imul(tt, Yt) | 0, c = c + Math.imul(it, jt) | 0, u = u + Math.imul(it, Yt) | 0, m = m + Math.imul(O, Xt) | 0, c = c + Math.imul(O, Zt) | 0, c = c + Math.imul(L, Xt) | 0, u = u + Math.imul(L, Zt) | 0;
        var hr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, m = Math.imul(h, ht), c = Math.imul(h, lt), c = c + Math.imul(S, ht) | 0, u = Math.imul(S, lt), m = m + Math.imul(kt, ut) | 0, c = c + Math.imul(kt, Ft) | 0, c = c + Math.imul(g, ut) | 0, u = u + Math.imul(g, Ft) | 0, m = m + Math.imul(Tt, qt) | 0, c = c + Math.imul(Tt, $t) | 0, c = c + Math.imul(Mt, qt) | 0, u = u + Math.imul(Mt, $t) | 0, m = m + Math.imul(It, zt) | 0, c = c + Math.imul(It, Ht) | 0, c = c + Math.imul(St, zt) | 0, u = u + Math.imul(St, Ht) | 0, m = m + Math.imul(bt, Gt) | 0, c = c + Math.imul(bt, Vt) | 0, c = c + Math.imul(xt, Gt) | 0, u = u + Math.imul(xt, Vt) | 0, m = m + Math.imul(_t, Kt) | 0, c = c + Math.imul(_t, Wt) | 0, c = c + Math.imul(wt, Kt) | 0, u = u + Math.imul(wt, Wt) | 0, m = m + Math.imul(pt, jt) | 0, c = c + Math.imul(pt, Yt) | 0, c = c + Math.imul(dt, jt) | 0, u = u + Math.imul(dt, Yt) | 0, m = m + Math.imul(tt, Xt) | 0, c = c + Math.imul(tt, Zt) | 0, c = c + Math.imul(it, Xt) | 0, u = u + Math.imul(it, Zt) | 0, m = m + Math.imul(O, Jt) | 0, c = c + Math.imul(O, Qt) | 0, c = c + Math.imul(L, Jt) | 0, u = u + Math.imul(L, Qt) | 0;
        var dr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, m = Math.imul(P, ht), c = Math.imul(P, lt), c = c + Math.imul(G, ht) | 0, u = Math.imul(G, lt), m = m + Math.imul(h, ut) | 0, c = c + Math.imul(h, Ft) | 0, c = c + Math.imul(S, ut) | 0, u = u + Math.imul(S, Ft) | 0, m = m + Math.imul(kt, qt) | 0, c = c + Math.imul(kt, $t) | 0, c = c + Math.imul(g, qt) | 0, u = u + Math.imul(g, $t) | 0, m = m + Math.imul(Tt, zt) | 0, c = c + Math.imul(Tt, Ht) | 0, c = c + Math.imul(Mt, zt) | 0, u = u + Math.imul(Mt, Ht) | 0, m = m + Math.imul(It, Gt) | 0, c = c + Math.imul(It, Vt) | 0, c = c + Math.imul(St, Gt) | 0, u = u + Math.imul(St, Vt) | 0, m = m + Math.imul(bt, Kt) | 0, c = c + Math.imul(bt, Wt) | 0, c = c + Math.imul(xt, Kt) | 0, u = u + Math.imul(xt, Wt) | 0, m = m + Math.imul(_t, jt) | 0, c = c + Math.imul(_t, Yt) | 0, c = c + Math.imul(wt, jt) | 0, u = u + Math.imul(wt, Yt) | 0, m = m + Math.imul(pt, Xt) | 0, c = c + Math.imul(pt, Zt) | 0, c = c + Math.imul(dt, Xt) | 0, u = u + Math.imul(dt, Zt) | 0, m = m + Math.imul(tt, Jt) | 0, c = c + Math.imul(tt, Qt) | 0, c = c + Math.imul(it, Jt) | 0, u = u + Math.imul(it, Qt) | 0, m = m + Math.imul(O, te) | 0, c = c + Math.imul(O, ee) | 0, c = c + Math.imul(L, te) | 0, u = u + Math.imul(L, ee) | 0;
        var pr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, m = Math.imul(P, ut), c = Math.imul(P, Ft), c = c + Math.imul(G, ut) | 0, u = Math.imul(G, Ft), m = m + Math.imul(h, qt) | 0, c = c + Math.imul(h, $t) | 0, c = c + Math.imul(S, qt) | 0, u = u + Math.imul(S, $t) | 0, m = m + Math.imul(kt, zt) | 0, c = c + Math.imul(kt, Ht) | 0, c = c + Math.imul(g, zt) | 0, u = u + Math.imul(g, Ht) | 0, m = m + Math.imul(Tt, Gt) | 0, c = c + Math.imul(Tt, Vt) | 0, c = c + Math.imul(Mt, Gt) | 0, u = u + Math.imul(Mt, Vt) | 0, m = m + Math.imul(It, Kt) | 0, c = c + Math.imul(It, Wt) | 0, c = c + Math.imul(St, Kt) | 0, u = u + Math.imul(St, Wt) | 0, m = m + Math.imul(bt, jt) | 0, c = c + Math.imul(bt, Yt) | 0, c = c + Math.imul(xt, jt) | 0, u = u + Math.imul(xt, Yt) | 0, m = m + Math.imul(_t, Xt) | 0, c = c + Math.imul(_t, Zt) | 0, c = c + Math.imul(wt, Xt) | 0, u = u + Math.imul(wt, Zt) | 0, m = m + Math.imul(pt, Jt) | 0, c = c + Math.imul(pt, Qt) | 0, c = c + Math.imul(dt, Jt) | 0, u = u + Math.imul(dt, Qt) | 0, m = m + Math.imul(tt, te) | 0, c = c + Math.imul(tt, ee) | 0, c = c + Math.imul(it, te) | 0, u = u + Math.imul(it, ee) | 0;
        var _r = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (_r >>> 26) | 0, _r &= 67108863, m = Math.imul(P, qt), c = Math.imul(P, $t), c = c + Math.imul(G, qt) | 0, u = Math.imul(G, $t), m = m + Math.imul(h, zt) | 0, c = c + Math.imul(h, Ht) | 0, c = c + Math.imul(S, zt) | 0, u = u + Math.imul(S, Ht) | 0, m = m + Math.imul(kt, Gt) | 0, c = c + Math.imul(kt, Vt) | 0, c = c + Math.imul(g, Gt) | 0, u = u + Math.imul(g, Vt) | 0, m = m + Math.imul(Tt, Kt) | 0, c = c + Math.imul(Tt, Wt) | 0, c = c + Math.imul(Mt, Kt) | 0, u = u + Math.imul(Mt, Wt) | 0, m = m + Math.imul(It, jt) | 0, c = c + Math.imul(It, Yt) | 0, c = c + Math.imul(St, jt) | 0, u = u + Math.imul(St, Yt) | 0, m = m + Math.imul(bt, Xt) | 0, c = c + Math.imul(bt, Zt) | 0, c = c + Math.imul(xt, Xt) | 0, u = u + Math.imul(xt, Zt) | 0, m = m + Math.imul(_t, Jt) | 0, c = c + Math.imul(_t, Qt) | 0, c = c + Math.imul(wt, Jt) | 0, u = u + Math.imul(wt, Qt) | 0, m = m + Math.imul(pt, te) | 0, c = c + Math.imul(pt, ee) | 0, c = c + Math.imul(dt, te) | 0, u = u + Math.imul(dt, ee) | 0;
        var gr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (gr >>> 26) | 0, gr &= 67108863, m = Math.imul(P, zt), c = Math.imul(P, Ht), c = c + Math.imul(G, zt) | 0, u = Math.imul(G, Ht), m = m + Math.imul(h, Gt) | 0, c = c + Math.imul(h, Vt) | 0, c = c + Math.imul(S, Gt) | 0, u = u + Math.imul(S, Vt) | 0, m = m + Math.imul(kt, Kt) | 0, c = c + Math.imul(kt, Wt) | 0, c = c + Math.imul(g, Kt) | 0, u = u + Math.imul(g, Wt) | 0, m = m + Math.imul(Tt, jt) | 0, c = c + Math.imul(Tt, Yt) | 0, c = c + Math.imul(Mt, jt) | 0, u = u + Math.imul(Mt, Yt) | 0, m = m + Math.imul(It, Xt) | 0, c = c + Math.imul(It, Zt) | 0, c = c + Math.imul(St, Xt) | 0, u = u + Math.imul(St, Zt) | 0, m = m + Math.imul(bt, Jt) | 0, c = c + Math.imul(bt, Qt) | 0, c = c + Math.imul(xt, Jt) | 0, u = u + Math.imul(xt, Qt) | 0, m = m + Math.imul(_t, te) | 0, c = c + Math.imul(_t, ee) | 0, c = c + Math.imul(wt, te) | 0, u = u + Math.imul(wt, ee) | 0;
        var mr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (mr >>> 26) | 0, mr &= 67108863, m = Math.imul(P, Gt), c = Math.imul(P, Vt), c = c + Math.imul(G, Gt) | 0, u = Math.imul(G, Vt), m = m + Math.imul(h, Kt) | 0, c = c + Math.imul(h, Wt) | 0, c = c + Math.imul(S, Kt) | 0, u = u + Math.imul(S, Wt) | 0, m = m + Math.imul(kt, jt) | 0, c = c + Math.imul(kt, Yt) | 0, c = c + Math.imul(g, jt) | 0, u = u + Math.imul(g, Yt) | 0, m = m + Math.imul(Tt, Xt) | 0, c = c + Math.imul(Tt, Zt) | 0, c = c + Math.imul(Mt, Xt) | 0, u = u + Math.imul(Mt, Zt) | 0, m = m + Math.imul(It, Jt) | 0, c = c + Math.imul(It, Qt) | 0, c = c + Math.imul(St, Jt) | 0, u = u + Math.imul(St, Qt) | 0, m = m + Math.imul(bt, te) | 0, c = c + Math.imul(bt, ee) | 0, c = c + Math.imul(xt, te) | 0, u = u + Math.imul(xt, ee) | 0;
        var yr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (yr >>> 26) | 0, yr &= 67108863, m = Math.imul(P, Kt), c = Math.imul(P, Wt), c = c + Math.imul(G, Kt) | 0, u = Math.imul(G, Wt), m = m + Math.imul(h, jt) | 0, c = c + Math.imul(h, Yt) | 0, c = c + Math.imul(S, jt) | 0, u = u + Math.imul(S, Yt) | 0, m = m + Math.imul(kt, Xt) | 0, c = c + Math.imul(kt, Zt) | 0, c = c + Math.imul(g, Xt) | 0, u = u + Math.imul(g, Zt) | 0, m = m + Math.imul(Tt, Jt) | 0, c = c + Math.imul(Tt, Qt) | 0, c = c + Math.imul(Mt, Jt) | 0, u = u + Math.imul(Mt, Qt) | 0, m = m + Math.imul(It, te) | 0, c = c + Math.imul(It, ee) | 0, c = c + Math.imul(St, te) | 0, u = u + Math.imul(St, ee) | 0;
        var Rr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (Rr >>> 26) | 0, Rr &= 67108863, m = Math.imul(P, jt), c = Math.imul(P, Yt), c = c + Math.imul(G, jt) | 0, u = Math.imul(G, Yt), m = m + Math.imul(h, Xt) | 0, c = c + Math.imul(h, Zt) | 0, c = c + Math.imul(S, Xt) | 0, u = u + Math.imul(S, Zt) | 0, m = m + Math.imul(kt, Jt) | 0, c = c + Math.imul(kt, Qt) | 0, c = c + Math.imul(g, Jt) | 0, u = u + Math.imul(g, Qt) | 0, m = m + Math.imul(Tt, te) | 0, c = c + Math.imul(Tt, ee) | 0, c = c + Math.imul(Mt, te) | 0, u = u + Math.imul(Mt, ee) | 0;
        var wr = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (wr >>> 26) | 0, wr &= 67108863, m = Math.imul(P, Xt), c = Math.imul(P, Zt), c = c + Math.imul(G, Xt) | 0, u = Math.imul(G, Zt), m = m + Math.imul(h, Jt) | 0, c = c + Math.imul(h, Qt) | 0, c = c + Math.imul(S, Jt) | 0, u = u + Math.imul(S, Qt) | 0, m = m + Math.imul(kt, te) | 0, c = c + Math.imul(kt, ee) | 0, c = c + Math.imul(g, te) | 0, u = u + Math.imul(g, ee) | 0;
        var Er = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (Er >>> 26) | 0, Er &= 67108863, m = Math.imul(P, Jt), c = Math.imul(P, Qt), c = c + Math.imul(G, Jt) | 0, u = Math.imul(G, Qt), m = m + Math.imul(h, te) | 0, c = c + Math.imul(h, ee) | 0, c = c + Math.imul(S, te) | 0, u = u + Math.imul(S, ee) | 0;
        var Ar = (I + m | 0) + ((c & 8191) << 13) | 0;
        I = (u + (c >>> 13) | 0) + (Ar >>> 26) | 0, Ar &= 67108863, m = Math.imul(P, te), c = Math.imul(P, ee), c = c + Math.imul(G, te) | 0, u = Math.imul(G, ee);
        var br = (I + m | 0) + ((c & 8191) << 13) | 0;
        return I = (u + (c >>> 13) | 0) + (br >>> 26) | 0, br &= 67108863, E[0] = sr, E[1] = or, E[2] = ar, E[3] = cr, E[4] = ur, E[5] = fr, E[6] = lr, E[7] = hr, E[8] = dr, E[9] = pr, E[10] = _r, E[11] = gr, E[12] = mr, E[13] = yr, E[14] = Rr, E[15] = wr, E[16] = Er, E[17] = Ar, E[18] = br, I !== 0 && (E[19] = I, _.length++), _;
      };
      Math.imul || (Z = Y);
      function K(R, a, d) {
        d.negative = a.negative ^ R.negative, d.length = R.length + a.length;
        for (var _ = 0, A = 0, w = 0; w < d.length - 1; w++) {
          var E = A;
          A = 0;
          for (var I = _ & 67108863, m = Math.min(w, a.length - 1), c = Math.max(0, w - R.length + 1); c <= m; c++) {
            var u = w - c, y = R.words[u] | 0, O = a.words[c] | 0, L = y * O, H = L & 67108863;
            E = E + (L / 67108864 | 0) | 0, H = H + I | 0, I = H & 67108863, E = E + (H >>> 26) | 0, A += E >>> 26, E &= 67108863;
          }
          d.words[w] = I, _ = E, E = A;
        }
        return _ !== 0 ? d.words[w] = _ : d.length--, d._strip();
      }
      function $(R, a, d) {
        return K(R, a, d);
      }
      i.prototype.mulTo = function(a, d) {
        var _, A = this.length + a.length;
        return this.length === 10 && a.length === 10 ? _ = Z(this, a, d) : A < 63 ? _ = Y(this, a, d) : A < 1024 ? _ = K(this, a, d) : _ = $(this, a, d), _;
      }, i.prototype.mul = function(a) {
        var d = new i(null);
        return d.words = new Array(this.length + a.length), this.mulTo(a, d);
      }, i.prototype.mulf = function(a) {
        var d = new i(null);
        return d.words = new Array(this.length + a.length), $(this, a, d);
      }, i.prototype.imul = function(a) {
        return this.clone().mulTo(a, this);
      }, i.prototype.imuln = function(a) {
        var d = a < 0;
        d && (a = -a), n(typeof a == "number"), n(a < 67108864);
        for (var _ = 0, A = 0; A < this.length; A++) {
          var w = (this.words[A] | 0) * a, E = (w & 67108863) + (_ & 67108863);
          _ >>= 26, _ += w / 67108864 | 0, _ += E >>> 26, this.words[A] = E & 67108863;
        }
        return _ !== 0 && (this.words[A] = _, this.length++), this.length = a === 0 ? 1 : this.length, d ? this.ineg() : this;
      }, i.prototype.muln = function(a) {
        return this.clone().imuln(a);
      }, i.prototype.sqr = function() {
        return this.mul(this);
      }, i.prototype.isqr = function() {
        return this.imul(this.clone());
      }, i.prototype.pow = function(a) {
        var d = M(a);
        if (d.length === 0) return new i(1);
        for (var _ = this, A = 0; A < d.length && d[A] === 0; A++, _ = _.sqr())
          ;
        if (++A < d.length)
          for (var w = _.sqr(); A < d.length; A++, w = w.sqr())
            d[A] !== 0 && (_ = _.mul(w));
        return _;
      }, i.prototype.iushln = function(a) {
        n(typeof a == "number" && a >= 0);
        var d = a % 26, _ = (a - d) / 26, A = 67108863 >>> 26 - d << 26 - d, w;
        if (d !== 0) {
          var E = 0;
          for (w = 0; w < this.length; w++) {
            var I = this.words[w] & A, m = (this.words[w] | 0) - I << d;
            this.words[w] = m | E, E = I >>> 26 - d;
          }
          E && (this.words[w] = E, this.length++);
        }
        if (_ !== 0) {
          for (w = this.length - 1; w >= 0; w--)
            this.words[w + _] = this.words[w];
          for (w = 0; w < _; w++)
            this.words[w] = 0;
          this.length += _;
        }
        return this._strip();
      }, i.prototype.ishln = function(a) {
        return n(this.negative === 0), this.iushln(a);
      }, i.prototype.iushrn = function(a, d, _) {
        n(typeof a == "number" && a >= 0);
        var A;
        d ? A = (d - d % 26) / 26 : A = 0;
        var w = a % 26, E = Math.min((a - w) / 26, this.length), I = 67108863 ^ 67108863 >>> w << w, m = _;
        if (A -= E, A = Math.max(0, A), m) {
          for (var c = 0; c < E; c++)
            m.words[c] = this.words[c];
          m.length = E;
        }
        if (E !== 0) if (this.length > E)
          for (this.length -= E, c = 0; c < this.length; c++)
            this.words[c] = this.words[c + E];
        else
          this.words[0] = 0, this.length = 1;
        var u = 0;
        for (c = this.length - 1; c >= 0 && (u !== 0 || c >= A); c--) {
          var y = this.words[c] | 0;
          this.words[c] = u << 26 - w | y >>> w, u = y & I;
        }
        return m && u !== 0 && (m.words[m.length++] = u), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
      }, i.prototype.ishrn = function(a, d, _) {
        return n(this.negative === 0), this.iushrn(a, d, _);
      }, i.prototype.shln = function(a) {
        return this.clone().ishln(a);
      }, i.prototype.ushln = function(a) {
        return this.clone().iushln(a);
      }, i.prototype.shrn = function(a) {
        return this.clone().ishrn(a);
      }, i.prototype.ushrn = function(a) {
        return this.clone().iushrn(a);
      }, i.prototype.testn = function(a) {
        n(typeof a == "number" && a >= 0);
        var d = a % 26, _ = (a - d) / 26, A = 1 << d;
        if (this.length <= _) return !1;
        var w = this.words[_];
        return !!(w & A);
      }, i.prototype.imaskn = function(a) {
        n(typeof a == "number" && a >= 0);
        var d = a % 26, _ = (a - d) / 26;
        if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= _)
          return this;
        if (d !== 0 && _++, this.length = Math.min(_, this.length), d !== 0) {
          var A = 67108863 ^ 67108863 >>> d << d;
          this.words[this.length - 1] &= A;
        }
        return this._strip();
      }, i.prototype.maskn = function(a) {
        return this.clone().imaskn(a);
      }, i.prototype.iaddn = function(a) {
        return n(typeof a == "number"), n(a < 67108864), a < 0 ? this.isubn(-a) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= a ? (this.words[0] = a - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(a), this.negative = 1, this) : this._iaddn(a);
      }, i.prototype._iaddn = function(a) {
        this.words[0] += a;
        for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
          this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
        return this.length = Math.max(this.length, d + 1), this;
      }, i.prototype.isubn = function(a) {
        if (n(typeof a == "number"), n(a < 67108864), a < 0) return this.iaddn(-a);
        if (this.negative !== 0)
          return this.negative = 0, this.iaddn(a), this.negative = 1, this;
        if (this.words[0] -= a, this.length === 1 && this.words[0] < 0)
          this.words[0] = -this.words[0], this.negative = 1;
        else
          for (var d = 0; d < this.length && this.words[d] < 0; d++)
            this.words[d] += 67108864, this.words[d + 1] -= 1;
        return this._strip();
      }, i.prototype.addn = function(a) {
        return this.clone().iaddn(a);
      }, i.prototype.subn = function(a) {
        return this.clone().isubn(a);
      }, i.prototype.iabs = function() {
        return this.negative = 0, this;
      }, i.prototype.abs = function() {
        return this.clone().iabs();
      }, i.prototype._ishlnsubmul = function(a, d, _) {
        var A = a.length + _, w;
        this._expand(A);
        var E, I = 0;
        for (w = 0; w < a.length; w++) {
          E = (this.words[w + _] | 0) + I;
          var m = (a.words[w] | 0) * d;
          E -= m & 67108863, I = (E >> 26) - (m / 67108864 | 0), this.words[w + _] = E & 67108863;
        }
        for (; w < this.length - _; w++)
          E = (this.words[w + _] | 0) + I, I = E >> 26, this.words[w + _] = E & 67108863;
        if (I === 0) return this._strip();
        for (n(I === -1), I = 0, w = 0; w < this.length; w++)
          E = -(this.words[w] | 0) + I, I = E >> 26, this.words[w] = E & 67108863;
        return this.negative = 1, this._strip();
      }, i.prototype._wordDiv = function(a, d) {
        var _ = this.length - a.length, A = this.clone(), w = a, E = w.words[w.length - 1] | 0, I = this._countBits(E);
        _ = 26 - I, _ !== 0 && (w = w.ushln(_), A.iushln(_), E = w.words[w.length - 1] | 0);
        var m = A.length - w.length, c;
        if (d !== "mod") {
          c = new i(null), c.length = m + 1, c.words = new Array(c.length);
          for (var u = 0; u < c.length; u++)
            c.words[u] = 0;
        }
        var y = A.clone()._ishlnsubmul(w, 1, m);
        y.negative === 0 && (A = y, c && (c.words[m] = 1));
        for (var O = m - 1; O >= 0; O--) {
          var L = (A.words[w.length + O] | 0) * 67108864 + (A.words[w.length + O - 1] | 0);
          for (L = Math.min(L / E | 0, 67108863), A._ishlnsubmul(w, L, O); A.negative !== 0; )
            L--, A.negative = 0, A._ishlnsubmul(w, 1, O), A.isZero() || (A.negative ^= 1);
          c && (c.words[O] = L);
        }
        return c && c._strip(), A._strip(), d !== "div" && _ !== 0 && A.iushrn(_), {
          div: c || null,
          mod: A
        };
      }, i.prototype.divmod = function(a, d, _) {
        if (n(!a.isZero()), this.isZero())
          return {
            div: new i(0),
            mod: new i(0)
          };
        var A, w, E;
        return this.negative !== 0 && a.negative === 0 ? (E = this.neg().divmod(a, d), d !== "mod" && (A = E.div.neg()), d !== "div" && (w = E.mod.neg(), _ && w.negative !== 0 && w.iadd(a)), {
          div: A,
          mod: w
        }) : this.negative === 0 && a.negative !== 0 ? (E = this.divmod(a.neg(), d), d !== "mod" && (A = E.div.neg()), {
          div: A,
          mod: E.mod
        }) : (this.negative & a.negative) !== 0 ? (E = this.neg().divmod(a.neg(), d), d !== "div" && (w = E.mod.neg(), _ && w.negative !== 0 && w.isub(a)), {
          div: E.div,
          mod: w
        }) : a.length > this.length || this.cmp(a) < 0 ? {
          div: new i(0),
          mod: this
        } : a.length === 1 ? d === "div" ? {
          div: this.divn(a.words[0]),
          mod: null
        } : d === "mod" ? {
          div: null,
          mod: new i(this.modrn(a.words[0]))
        } : {
          div: this.divn(a.words[0]),
          mod: new i(this.modrn(a.words[0]))
        } : this._wordDiv(a, d);
      }, i.prototype.div = function(a) {
        return this.divmod(a, "div", !1).div;
      }, i.prototype.mod = function(a) {
        return this.divmod(a, "mod", !1).mod;
      }, i.prototype.umod = function(a) {
        return this.divmod(a, "mod", !0).mod;
      }, i.prototype.divRound = function(a) {
        var d = this.divmod(a);
        if (d.mod.isZero()) return d.div;
        var _ = d.div.negative !== 0 ? d.mod.isub(a) : d.mod, A = a.ushrn(1), w = a.andln(1), E = _.cmp(A);
        return E < 0 || w === 1 && E === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
      }, i.prototype.modrn = function(a) {
        var d = a < 0;
        d && (a = -a), n(a <= 67108863);
        for (var _ = (1 << 26) % a, A = 0, w = this.length - 1; w >= 0; w--)
          A = (_ * A + (this.words[w] | 0)) % a;
        return d ? -A : A;
      }, i.prototype.modn = function(a) {
        return this.modrn(a);
      }, i.prototype.idivn = function(a) {
        var d = a < 0;
        d && (a = -a), n(a <= 67108863);
        for (var _ = 0, A = this.length - 1; A >= 0; A--) {
          var w = (this.words[A] | 0) + _ * 67108864;
          this.words[A] = w / a | 0, _ = w % a;
        }
        return this._strip(), d ? this.ineg() : this;
      }, i.prototype.divn = function(a) {
        return this.clone().idivn(a);
      }, i.prototype.egcd = function(a) {
        n(a.negative === 0), n(!a.isZero());
        var d = this, _ = a.clone();
        d.negative !== 0 ? d = d.umod(a) : d = d.clone();
        for (var A = new i(1), w = new i(0), E = new i(0), I = new i(1), m = 0; d.isEven() && _.isEven(); )
          d.iushrn(1), _.iushrn(1), ++m;
        for (var c = _.clone(), u = d.clone(); !d.isZero(); ) {
          for (var y = 0, O = 1; (d.words[0] & O) === 0 && y < 26; ++y, O <<= 1) ;
          if (y > 0)
            for (d.iushrn(y); y-- > 0; )
              (A.isOdd() || w.isOdd()) && (A.iadd(c), w.isub(u)), A.iushrn(1), w.iushrn(1);
          for (var L = 0, H = 1; (_.words[0] & H) === 0 && L < 26; ++L, H <<= 1) ;
          if (L > 0)
            for (_.iushrn(L); L-- > 0; )
              (E.isOdd() || I.isOdd()) && (E.iadd(c), I.isub(u)), E.iushrn(1), I.iushrn(1);
          d.cmp(_) >= 0 ? (d.isub(_), A.isub(E), w.isub(I)) : (_.isub(d), E.isub(A), I.isub(w));
        }
        return {
          a: E,
          b: I,
          gcd: _.iushln(m)
        };
      }, i.prototype._invmp = function(a) {
        n(a.negative === 0), n(!a.isZero());
        var d = this, _ = a.clone();
        d.negative !== 0 ? d = d.umod(a) : d = d.clone();
        for (var A = new i(1), w = new i(0), E = _.clone(); d.cmpn(1) > 0 && _.cmpn(1) > 0; ) {
          for (var I = 0, m = 1; (d.words[0] & m) === 0 && I < 26; ++I, m <<= 1) ;
          if (I > 0)
            for (d.iushrn(I); I-- > 0; )
              A.isOdd() && A.iadd(E), A.iushrn(1);
          for (var c = 0, u = 1; (_.words[0] & u) === 0 && c < 26; ++c, u <<= 1) ;
          if (c > 0)
            for (_.iushrn(c); c-- > 0; )
              w.isOdd() && w.iadd(E), w.iushrn(1);
          d.cmp(_) >= 0 ? (d.isub(_), A.isub(w)) : (_.isub(d), w.isub(A));
        }
        var y;
        return d.cmpn(1) === 0 ? y = A : y = w, y.cmpn(0) < 0 && y.iadd(a), y;
      }, i.prototype.gcd = function(a) {
        if (this.isZero()) return a.abs();
        if (a.isZero()) return this.abs();
        var d = this.clone(), _ = a.clone();
        d.negative = 0, _.negative = 0;
        for (var A = 0; d.isEven() && _.isEven(); A++)
          d.iushrn(1), _.iushrn(1);
        do {
          for (; d.isEven(); )
            d.iushrn(1);
          for (; _.isEven(); )
            _.iushrn(1);
          var w = d.cmp(_);
          if (w < 0) {
            var E = d;
            d = _, _ = E;
          } else if (w === 0 || _.cmpn(1) === 0)
            break;
          d.isub(_);
        } while (!0);
        return _.iushln(A);
      }, i.prototype.invm = function(a) {
        return this.egcd(a).a.umod(a);
      }, i.prototype.isEven = function() {
        return (this.words[0] & 1) === 0;
      }, i.prototype.isOdd = function() {
        return (this.words[0] & 1) === 1;
      }, i.prototype.andln = function(a) {
        return this.words[0] & a;
      }, i.prototype.bincn = function(a) {
        n(typeof a == "number");
        var d = a % 26, _ = (a - d) / 26, A = 1 << d;
        if (this.length <= _)
          return this._expand(_ + 1), this.words[_] |= A, this;
        for (var w = A, E = _; w !== 0 && E < this.length; E++) {
          var I = this.words[E] | 0;
          I += w, w = I >>> 26, I &= 67108863, this.words[E] = I;
        }
        return w !== 0 && (this.words[E] = w, this.length++), this;
      }, i.prototype.isZero = function() {
        return this.length === 1 && this.words[0] === 0;
      }, i.prototype.cmpn = function(a) {
        var d = a < 0;
        if (this.negative !== 0 && !d) return -1;
        if (this.negative === 0 && d) return 1;
        this._strip();
        var _;
        if (this.length > 1)
          _ = 1;
        else {
          d && (a = -a), n(a <= 67108863, "Number is too big");
          var A = this.words[0] | 0;
          _ = A === a ? 0 : A < a ? -1 : 1;
        }
        return this.negative !== 0 ? -_ | 0 : _;
      }, i.prototype.cmp = function(a) {
        if (this.negative !== 0 && a.negative === 0) return -1;
        if (this.negative === 0 && a.negative !== 0) return 1;
        var d = this.ucmp(a);
        return this.negative !== 0 ? -d | 0 : d;
      }, i.prototype.ucmp = function(a) {
        if (this.length > a.length) return 1;
        if (this.length < a.length) return -1;
        for (var d = 0, _ = this.length - 1; _ >= 0; _--) {
          var A = this.words[_] | 0, w = a.words[_] | 0;
          if (A !== w) {
            A < w ? d = -1 : A > w && (d = 1);
            break;
          }
        }
        return d;
      }, i.prototype.gtn = function(a) {
        return this.cmpn(a) === 1;
      }, i.prototype.gt = function(a) {
        return this.cmp(a) === 1;
      }, i.prototype.gten = function(a) {
        return this.cmpn(a) >= 0;
      }, i.prototype.gte = function(a) {
        return this.cmp(a) >= 0;
      }, i.prototype.ltn = function(a) {
        return this.cmpn(a) === -1;
      }, i.prototype.lt = function(a) {
        return this.cmp(a) === -1;
      }, i.prototype.lten = function(a) {
        return this.cmpn(a) <= 0;
      }, i.prototype.lte = function(a) {
        return this.cmp(a) <= 0;
      }, i.prototype.eqn = function(a) {
        return this.cmpn(a) === 0;
      }, i.prototype.eq = function(a) {
        return this.cmp(a) === 0;
      }, i.red = function(a) {
        return new F(a);
      }, i.prototype.toRed = function(a) {
        return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), a.convertTo(this)._forceRed(a);
      }, i.prototype.fromRed = function() {
        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
      }, i.prototype._forceRed = function(a) {
        return this.red = a, this;
      }, i.prototype.forceRed = function(a) {
        return n(!this.red, "Already a number in reduction context"), this._forceRed(a);
      }, i.prototype.redAdd = function(a) {
        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, a);
      }, i.prototype.redIAdd = function(a) {
        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, a);
      }, i.prototype.redSub = function(a) {
        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, a);
      }, i.prototype.redISub = function(a) {
        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, a);
      }, i.prototype.redShl = function(a) {
        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, a);
      }, i.prototype.redMul = function(a) {
        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.mul(this, a);
      }, i.prototype.redIMul = function(a) {
        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.imul(this, a);
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
      }, i.prototype.redPow = function(a) {
        return n(this.red && !a.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, a);
      };
      var j = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function J(R, a) {
        this.name = R, this.p = new i(a, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      J.prototype._tmp = function() {
        var a = new i(null);
        return a.words = new Array(Math.ceil(this.n / 13)), a;
      }, J.prototype.ireduce = function(a) {
        var d = a, _;
        do
          this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), _ = d.bitLength();
        while (_ > this.n);
        var A = _ < this.n ? -1 : d.ucmp(this.p);
        return A === 0 ? (d.words[0] = 0, d.length = 1) : A > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
      }, J.prototype.split = function(a, d) {
        a.iushrn(this.n, 0, d);
      }, J.prototype.imulK = function(a) {
        return a.imul(this.k);
      };
      function st() {
        J.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      s(st, J), st.prototype.split = function(a, d) {
        for (var _ = 4194303, A = Math.min(a.length, 9), w = 0; w < A; w++)
          d.words[w] = a.words[w];
        if (d.length = A, a.length <= 9) {
          a.words[0] = 0, a.length = 1;
          return;
        }
        var E = a.words[9];
        for (d.words[d.length++] = E & _, w = 10; w < a.length; w++) {
          var I = a.words[w] | 0;
          a.words[w - 10] = (I & _) << 4 | E >>> 22, E = I;
        }
        E >>>= 22, a.words[w - 10] = E, E === 0 && a.length > 10 ? a.length -= 10 : a.length -= 9;
      }, st.prototype.imulK = function(a) {
        a.words[a.length] = 0, a.words[a.length + 1] = 0, a.length += 2;
        for (var d = 0, _ = 0; _ < a.length; _++) {
          var A = a.words[_] | 0;
          d += A * 977, a.words[_] = d & 67108863, d = A * 64 + (d / 67108864 | 0);
        }
        return a.words[a.length - 1] === 0 && (a.length--, a.words[a.length - 1] === 0 && a.length--), a;
      };
      function ot() {
        J.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      s(ot, J);
      function W() {
        J.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      s(W, J);
      function D() {
        J.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      s(D, J), D.prototype.imulK = function(a) {
        for (var d = 0, _ = 0; _ < a.length; _++) {
          var A = (a.words[_] | 0) * 19 + d, w = A & 67108863;
          A >>>= 26, a.words[_] = w, d = A;
        }
        return d !== 0 && (a.words[a.length++] = d), a;
      }, i._prime = function(a) {
        if (j[a]) return j[a];
        var d;
        if (a === "k256")
          d = new st();
        else if (a === "p224")
          d = new ot();
        else if (a === "p192")
          d = new W();
        else if (a === "p25519")
          d = new D();
        else
          throw new Error("Unknown prime " + a);
        return j[a] = d, d;
      };
      function F(R) {
        if (typeof R == "string") {
          var a = i._prime(R);
          this.m = a.p, this.prime = a;
        } else
          n(R.gtn(1), "modulus must be greater than 1"), this.m = R, this.prime = null;
      }
      F.prototype._verify1 = function(a) {
        n(a.negative === 0, "red works only with positives"), n(a.red, "red works only with red numbers");
      }, F.prototype._verify2 = function(a, d) {
        n((a.negative | d.negative) === 0, "red works only with positives"), n(
          a.red && a.red === d.red,
          "red works only with red numbers"
        );
      }, F.prototype.imod = function(a) {
        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (v(a, a.umod(this.m)._forceRed(this)), a);
      }, F.prototype.neg = function(a) {
        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this);
      }, F.prototype.add = function(a, d) {
        this._verify2(a, d);
        var _ = a.add(d);
        return _.cmp(this.m) >= 0 && _.isub(this.m), _._forceRed(this);
      }, F.prototype.iadd = function(a, d) {
        this._verify2(a, d);
        var _ = a.iadd(d);
        return _.cmp(this.m) >= 0 && _.isub(this.m), _;
      }, F.prototype.sub = function(a, d) {
        this._verify2(a, d);
        var _ = a.sub(d);
        return _.cmpn(0) < 0 && _.iadd(this.m), _._forceRed(this);
      }, F.prototype.isub = function(a, d) {
        this._verify2(a, d);
        var _ = a.isub(d);
        return _.cmpn(0) < 0 && _.iadd(this.m), _;
      }, F.prototype.shl = function(a, d) {
        return this._verify1(a), this.imod(a.ushln(d));
      }, F.prototype.imul = function(a, d) {
        return this._verify2(a, d), this.imod(a.imul(d));
      }, F.prototype.mul = function(a, d) {
        return this._verify2(a, d), this.imod(a.mul(d));
      }, F.prototype.isqr = function(a) {
        return this.imul(a, a.clone());
      }, F.prototype.sqr = function(a) {
        return this.mul(a, a);
      }, F.prototype.sqrt = function(a) {
        if (a.isZero()) return a.clone();
        var d = this.m.andln(3);
        if (n(d % 2 === 1), d === 3) {
          var _ = this.m.add(new i(1)).iushrn(2);
          return this.pow(a, _);
        }
        for (var A = this.m.subn(1), w = 0; !A.isZero() && A.andln(1) === 0; )
          w++, A.iushrn(1);
        n(!A.isZero());
        var E = new i(1).toRed(this), I = E.redNeg(), m = this.m.subn(1).iushrn(1), c = this.m.bitLength();
        for (c = new i(2 * c * c).toRed(this); this.pow(c, m).cmp(I) !== 0; )
          c.redIAdd(I);
        for (var u = this.pow(c, A), y = this.pow(a, A.addn(1).iushrn(1)), O = this.pow(a, A), L = w; O.cmp(E) !== 0; ) {
          for (var H = O, tt = 0; H.cmp(E) !== 0; tt++)
            H = H.redSqr();
          n(tt < L);
          var it = this.pow(u, new i(1).iushln(L - tt - 1));
          y = y.redMul(it), u = it.redSqr(), O = O.redMul(u), L = tt;
        }
        return y;
      }, F.prototype.invm = function(a) {
        var d = a._invmp(this.m);
        return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
      }, F.prototype.pow = function(a, d) {
        if (d.isZero()) return new i(1).toRed(this);
        if (d.cmpn(1) === 0) return a.clone();
        var _ = 4, A = new Array(1 << _);
        A[0] = new i(1).toRed(this), A[1] = a;
        for (var w = 2; w < A.length; w++)
          A[w] = this.mul(A[w - 1], a);
        var E = A[0], I = 0, m = 0, c = d.bitLength() % 26;
        for (c === 0 && (c = 26), w = d.length - 1; w >= 0; w--) {
          for (var u = d.words[w], y = c - 1; y >= 0; y--) {
            var O = u >> y & 1;
            if (E !== A[0] && (E = this.sqr(E)), O === 0 && I === 0) {
              m = 0;
              continue;
            }
            I <<= 1, I |= O, m++, !(m !== _ && (w !== 0 || y !== 0)) && (E = this.mul(E, A[I]), m = 0, I = 0);
          }
          c = 26;
        }
        return E;
      }, F.prototype.convertTo = function(a) {
        var d = a.umod(this.m);
        return d === a ? d.clone() : d;
      }, F.prototype.convertFrom = function(a) {
        var d = a.clone();
        return d.red = null, d;
      }, i.mont = function(a) {
        return new V(a);
      };
      function V(R) {
        F.call(this, R), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      s(V, F), V.prototype.convertTo = function(a) {
        return this.imod(a.ushln(this.shift));
      }, V.prototype.convertFrom = function(a) {
        var d = this.imod(a.mul(this.rinv));
        return d.red = null, d;
      }, V.prototype.imul = function(a, d) {
        if (a.isZero() || d.isZero())
          return a.words[0] = 0, a.length = 1, a;
        var _ = a.imul(d), A = _.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = _.isub(A).iushrn(this.shift), E = w;
        return w.cmp(this.m) >= 0 ? E = w.isub(this.m) : w.cmpn(0) < 0 && (E = w.iadd(this.m)), E._forceRed(this);
      }, V.prototype.mul = function(a, d) {
        if (a.isZero() || d.isZero()) return new i(0)._forceRed(this);
        var _ = a.mul(d), A = _.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), w = _.isub(A).iushrn(this.shift), E = w;
        return w.cmp(this.m) >= 0 ? E = w.isub(this.m) : w.cmpn(0) < 0 && (E = w.iadd(this.m)), E._forceRed(this);
      }, V.prototype.invm = function(a) {
        var d = this.imod(a._invmp(this.m).mul(this.r2));
        return d._forceRed(this);
      };
    })(r, Ia);
  }(Un)), Un.exports;
}
var Na = Fs();
const Wi = /* @__PURE__ */ Xn(Na);
var Ln = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var ji;
function xa() {
  return ji || (ji = 1, function(r, e) {
    var t = oi(), n = t.Buffer;
    function s(o, f) {
      for (var p in o)
        f[p] = o[p];
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? r.exports = t : (s(t, e), e.Buffer = i);
    function i(o, f, p) {
      return n(o, f, p);
    }
    i.prototype = Object.create(n.prototype), s(n, i), i.from = function(o, f, p) {
      if (typeof o == "number")
        throw new TypeError("Argument must not be a number");
      return n(o, f, p);
    }, i.alloc = function(o, f, p) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      var b = n(o);
      return f !== void 0 ? typeof p == "string" ? b.fill(f, p) : b.fill(f) : b.fill(0), b;
    }, i.allocUnsafe = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return n(o);
    }, i.allocUnsafeSlow = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return t.SlowBuffer(o);
    };
  }(Ln, Ln.exports)), Ln.exports;
}
var Cr, Yi;
function Ta() {
  if (Yi) return Cr;
  Yi = 1;
  var r = xa().Buffer;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), s = 0; s < n.length; s++)
      n[s] = 255;
    for (var i = 0; i < t.length; i++) {
      var o = t.charAt(i), f = o.charCodeAt(0);
      if (n[f] !== 255)
        throw new TypeError(o + " is ambiguous");
      n[f] = i;
    }
    var p = t.length, b = t.charAt(0), v = Math.log(p) / Math.log(256), x = Math.log(256) / Math.log(p);
    function U(N) {
      if ((Array.isArray(N) || N instanceof Uint8Array) && (N = r.from(N)), !r.isBuffer(N))
        throw new TypeError("Expected Buffer");
      if (N.length === 0)
        return "";
      for (var M = 0, Y = 0, Z = 0, K = N.length; Z !== K && N[Z] === 0; )
        Z++, M++;
      for (var $ = (K - Z) * x + 1 >>> 0, j = new Uint8Array($); Z !== K; ) {
        for (var J = N[Z], st = 0, ot = $ - 1; (J !== 0 || st < Y) && ot !== -1; ot--, st++)
          J += 256 * j[ot] >>> 0, j[ot] = J % p >>> 0, J = J / p >>> 0;
        if (J !== 0)
          throw new Error("Non-zero carry");
        Y = st, Z++;
      }
      for (var W = $ - Y; W !== $ && j[W] === 0; )
        W++;
      for (var D = b.repeat(M); W < $; ++W)
        D += t.charAt(j[W]);
      return D;
    }
    function B(N) {
      if (typeof N != "string")
        throw new TypeError("Expected String");
      if (N.length === 0)
        return r.alloc(0);
      for (var M = 0, Y = 0, Z = 0; N[M] === b; )
        Y++, M++;
      for (var K = (N.length - M) * v + 1 >>> 0, $ = new Uint8Array(K); M < N.length; ) {
        var j = N.charCodeAt(M);
        if (j > 255)
          return;
        var J = n[j];
        if (J === 255)
          return;
        for (var st = 0, ot = K - 1; (J !== 0 || st < Z) && ot !== -1; ot--, st++)
          J += p * $[ot] >>> 0, $[ot] = J % 256 >>> 0, J = J / 256 >>> 0;
        if (J !== 0)
          throw new Error("Non-zero carry");
        Z = st, M++;
      }
      for (var W = K - Z; W !== K && $[W] === 0; )
        W++;
      var D = r.allocUnsafe(Y + (K - W));
      D.fill(0, 0, Y);
      for (var F = Y; W !== K; )
        D[F++] = $[W++];
      return D;
    }
    function k(N) {
      var M = B(N);
      if (M)
        return M;
      throw new Error("Non-base" + p + " character");
    }
    return {
      encode: U,
      decodeUnsafe: B,
      decode: k
    };
  }
  return Cr = e, Cr;
}
var Lr, Xi;
function qs() {
  if (Xi) return Lr;
  Xi = 1;
  var r = Ta(), e = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  return Lr = r(e), Lr;
}
var Ba = qs();
const oe = /* @__PURE__ */ Xn(Ba), Zi = vs;
var At = {};
function Le(r, e, t) {
  return e <= r && r <= t;
}
function Jn(r) {
  if (r === void 0) return {};
  if (r === Object(r)) return r;
  throw TypeError("Could not convert argument to dictionary");
}
function Ca(r) {
  for (var e = String(r), t = e.length, n = 0, s = []; n < t; ) {
    var i = e.charCodeAt(n);
    if (i < 55296 || i > 57343)
      s.push(i);
    else if (56320 <= i && i <= 57343)
      s.push(65533);
    else if (55296 <= i && i <= 56319)
      if (n === t - 1)
        s.push(65533);
      else {
        var o = r.charCodeAt(n + 1);
        if (56320 <= o && o <= 57343) {
          var f = i & 1023, p = o & 1023;
          s.push(65536 + (f << 10) + p), n += 1;
        } else
          s.push(65533);
      }
    n += 1;
  }
  return s;
}
function La(r) {
  for (var e = "", t = 0; t < r.length; ++t) {
    var n = r[t];
    n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode(
      (n >> 10) + 55296,
      (n & 1023) + 56320
    ));
  }
  return e;
}
var zn = -1;
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
    return this.tokens.length ? this.tokens.shift() : zn;
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
      for (var e = (
        /**@type {!Array.<number>}*/
        r
      ); e.length; )
        this.tokens.unshift(e.pop());
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
      for (var e = (
        /**@type {!Array.<number>}*/
        r
      ); e.length; )
        this.tokens.push(e.shift());
    else
      this.tokens.push(r);
  }
};
var fn = -1;
function Mr(r, e) {
  if (r)
    throw TypeError("Decoder error");
  return e || 65533;
}
var Hn = "utf-8";
function Gn(r, e) {
  if (!(this instanceof Gn))
    return new Gn(r, e);
  if (r = r !== void 0 ? String(r).toLowerCase() : Hn, r !== Hn)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = Jn(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!e.fatal, this._ignoreBOM = !!e.ignoreBOM, Object.defineProperty(this, "encoding", { value: "utf-8" }), Object.defineProperty(this, "fatal", { value: this._fatal }), Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
Gn.prototype = {
  /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */
  decode: function(e, t) {
    var n;
    typeof e == "object" && e instanceof ArrayBuffer ? n = new Uint8Array(e) : typeof e == "object" && "buffer" in e && e.buffer instanceof ArrayBuffer ? n = new Uint8Array(
      e.buffer,
      e.byteOffset,
      e.byteLength
    ) : n = new Uint8Array(0), t = Jn(t), this._streaming || (this._decoder = new Ma({ fatal: this._fatal }), this._BOMseen = !1), this._streaming = !!t.stream;
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
    return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0, i.shift()) : this._BOMseen = !0), La(i);
  }
};
function Vn(r, e) {
  if (!(this instanceof Vn))
    return new Vn(r, e);
  if (r = r !== void 0 ? String(r).toLowerCase() : Hn, r !== Hn)
    throw new Error("Encoding not supported. Only utf-8 is supported");
  e = Jn(e), this._streaming = !1, this._encoder = null, this._options = { fatal: !!e.fatal }, Object.defineProperty(this, "encoding", { value: "utf-8" });
}
Vn.prototype = {
  /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */
  encode: function(e, t) {
    e = e ? String(e) : "", t = Jn(t), this._streaming || (this._encoder = new ka(this._options)), this._streaming = !!t.stream;
    for (var n = [], s = new _i(Ca(e)), i; !s.endOfStream() && (i = this._encoder.handler(s, s.read()), i !== fn); )
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
function Ma(r) {
  var e = r.fatal, t = 0, n = 0, s = 0, i = 128, o = 191;
  this.handler = function(f, p) {
    if (p === zn && s !== 0)
      return s = 0, Mr(e);
    if (p === zn)
      return fn;
    if (s === 0) {
      if (Le(p, 0, 127))
        return p;
      if (Le(p, 194, 223))
        s = 1, t = p - 192;
      else if (Le(p, 224, 239))
        p === 224 && (i = 160), p === 237 && (o = 159), s = 2, t = p - 224;
      else if (Le(p, 240, 244))
        p === 240 && (i = 144), p === 244 && (o = 143), s = 3, t = p - 240;
      else
        return Mr(e);
      return t = t << 6 * s, null;
    }
    if (!Le(p, i, o))
      return t = s = n = 0, i = 128, o = 191, f.prepend(p), Mr(e);
    if (i = 128, o = 191, n += 1, t += p - 128 << 6 * (s - n), n !== s)
      return null;
    var b = t;
    return t = s = n = 0, b;
  };
}
function ka(r) {
  r.fatal, this.handler = function(e, t) {
    if (t === zn)
      return fn;
    if (Le(t, 0, 127))
      return t;
    var n, s;
    Le(t, 128, 2047) ? (n = 1, s = 192) : Le(t, 2048, 65535) ? (n = 2, s = 224) : Le(t, 65536, 1114111) && (n = 3, s = 240);
    for (var i = [(t >> 6 * n) + s]; n > 0; ) {
      var o = t >> 6 * (n - 1);
      i.push(128 | o & 63), n -= 1;
    }
    return i;
  };
}
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextDecoder: Gn,
  TextEncoder: Vn
}, Symbol.toStringTag, { value: "Module" })), Da = /* @__PURE__ */ si(Ua);
var Ji;
function Pa() {
  if (Ji) return At;
  Ji = 1;
  var r = At && At.__createBinding || (Object.create ? function(W, D, F, V) {
    V === void 0 && (V = F), Object.defineProperty(W, V, { enumerable: !0, get: function() {
      return D[F];
    } });
  } : function(W, D, F, V) {
    V === void 0 && (V = F), W[V] = D[F];
  }), e = At && At.__setModuleDefault || (Object.create ? function(W, D) {
    Object.defineProperty(W, "default", { enumerable: !0, value: D });
  } : function(W, D) {
    W.default = D;
  }), t = At && At.__decorate || function(W, D, F, V) {
    var R = arguments.length, a = R < 3 ? D : V === null ? V = Object.getOwnPropertyDescriptor(D, F) : V, d;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(W, D, F, V);
    else for (var _ = W.length - 1; _ >= 0; _--) (d = W[_]) && (a = (R < 3 ? d(a) : R > 3 ? d(D, F, a) : d(D, F)) || a);
    return R > 3 && a && Object.defineProperty(D, F, a), a;
  }, n = At && At.__importStar || function(W) {
    if (W && W.__esModule) return W;
    var D = {};
    if (W != null) for (var F in W) F !== "default" && Object.hasOwnProperty.call(W, F) && r(D, W, F);
    return e(D, W), D;
  }, s = At && At.__importDefault || function(W) {
    return W && W.__esModule ? W : { default: W };
  };
  Object.defineProperty(At, "__esModule", { value: !0 }), At.deserializeUnchecked = At.deserialize = At.serialize = At.BinaryReader = At.BinaryWriter = At.BorshError = At.baseDecode = At.baseEncode = void 0;
  const i = s(Fs()), o = s(qs()), f = n(Da), p = typeof TextDecoder != "function" ? f.TextDecoder : TextDecoder, b = new p("utf-8", { fatal: !0 });
  function v(W) {
    return typeof W == "string" && (W = Buffer.from(W, "utf8")), o.default.encode(Buffer.from(W));
  }
  At.baseEncode = v;
  function x(W) {
    return Buffer.from(o.default.decode(W));
  }
  At.baseDecode = x;
  const U = 1024;
  class B extends Error {
    constructor(D) {
      super(D), this.fieldPath = [], this.originalMessage = D;
    }
    addToFieldPath(D) {
      this.fieldPath.splice(0, 0, D), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
    }
  }
  At.BorshError = B;
  class k {
    constructor() {
      this.buf = Buffer.alloc(U), this.length = 0;
    }
    maybeResize() {
      this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(U)]));
    }
    writeU8(D) {
      this.maybeResize(), this.buf.writeUInt8(D, this.length), this.length += 1;
    }
    writeU16(D) {
      this.maybeResize(), this.buf.writeUInt16LE(D, this.length), this.length += 2;
    }
    writeU32(D) {
      this.maybeResize(), this.buf.writeUInt32LE(D, this.length), this.length += 4;
    }
    writeU64(D) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(D).toArray("le", 8)));
    }
    writeU128(D) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(D).toArray("le", 16)));
    }
    writeU256(D) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(D).toArray("le", 32)));
    }
    writeU512(D) {
      this.maybeResize(), this.writeBuffer(Buffer.from(new i.default(D).toArray("le", 64)));
    }
    writeBuffer(D) {
      this.buf = Buffer.concat([
        Buffer.from(this.buf.subarray(0, this.length)),
        D,
        Buffer.alloc(U)
      ]), this.length += D.length;
    }
    writeString(D) {
      this.maybeResize();
      const F = Buffer.from(D, "utf8");
      this.writeU32(F.length), this.writeBuffer(F);
    }
    writeFixedArray(D) {
      this.writeBuffer(Buffer.from(D));
    }
    writeArray(D, F) {
      this.maybeResize(), this.writeU32(D.length);
      for (const V of D)
        this.maybeResize(), F(V);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  }
  At.BinaryWriter = k;
  function N(W, D, F) {
    const V = F.value;
    F.value = function(...R) {
      try {
        return V.apply(this, R);
      } catch (a) {
        if (a instanceof RangeError) {
          const d = a.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(d) >= 0)
            throw new B("Reached the end of buffer when deserializing");
        }
        throw a;
      }
    };
  }
  class M {
    constructor(D) {
      this.buf = D, this.offset = 0;
    }
    readU8() {
      const D = this.buf.readUInt8(this.offset);
      return this.offset += 1, D;
    }
    readU16() {
      const D = this.buf.readUInt16LE(this.offset);
      return this.offset += 2, D;
    }
    readU32() {
      const D = this.buf.readUInt32LE(this.offset);
      return this.offset += 4, D;
    }
    readU64() {
      const D = this.readBuffer(8);
      return new i.default(D, "le");
    }
    readU128() {
      const D = this.readBuffer(16);
      return new i.default(D, "le");
    }
    readU256() {
      const D = this.readBuffer(32);
      return new i.default(D, "le");
    }
    readU512() {
      const D = this.readBuffer(64);
      return new i.default(D, "le");
    }
    readBuffer(D) {
      if (this.offset + D > this.buf.length)
        throw new B(`Expected buffer length ${D} isn't within bounds`);
      const F = this.buf.slice(this.offset, this.offset + D);
      return this.offset += D, F;
    }
    readString() {
      const D = this.readU32(), F = this.readBuffer(D);
      try {
        return b.decode(F);
      } catch (V) {
        throw new B(`Error decoding UTF-8 string: ${V}`);
      }
    }
    readFixedArray(D) {
      return new Uint8Array(this.readBuffer(D));
    }
    readArray(D) {
      const F = this.readU32(), V = Array();
      for (let R = 0; R < F; ++R)
        V.push(D());
      return V;
    }
  }
  t([
    N
  ], M.prototype, "readU8", null), t([
    N
  ], M.prototype, "readU16", null), t([
    N
  ], M.prototype, "readU32", null), t([
    N
  ], M.prototype, "readU64", null), t([
    N
  ], M.prototype, "readU128", null), t([
    N
  ], M.prototype, "readU256", null), t([
    N
  ], M.prototype, "readU512", null), t([
    N
  ], M.prototype, "readString", null), t([
    N
  ], M.prototype, "readFixedArray", null), t([
    N
  ], M.prototype, "readArray", null), At.BinaryReader = M;
  function Y(W) {
    return W.charAt(0).toUpperCase() + W.slice(1);
  }
  function Z(W, D, F, V, R) {
    try {
      if (typeof V == "string")
        R[`write${Y(V)}`](F);
      else if (V instanceof Array)
        if (typeof V[0] == "number") {
          if (F.length !== V[0])
            throw new B(`Expecting byte array of length ${V[0]}, but got ${F.length} bytes`);
          R.writeFixedArray(F);
        } else if (V.length === 2 && typeof V[1] == "number") {
          if (F.length !== V[1])
            throw new B(`Expecting byte array of length ${V[1]}, but got ${F.length} bytes`);
          for (let a = 0; a < V[1]; a++)
            Z(W, null, F[a], V[0], R);
        } else
          R.writeArray(F, (a) => {
            Z(W, D, a, V[0], R);
          });
      else if (V.kind !== void 0)
        switch (V.kind) {
          case "option": {
            F == null ? R.writeU8(0) : (R.writeU8(1), Z(W, D, F, V.type, R));
            break;
          }
          case "map": {
            R.writeU32(F.size), F.forEach((a, d) => {
              Z(W, D, d, V.key, R), Z(W, D, a, V.value, R);
            });
            break;
          }
          default:
            throw new B(`FieldType ${V} unrecognized`);
        }
      else
        K(W, F, R);
    } catch (a) {
      throw a instanceof B && a.addToFieldPath(D), a;
    }
  }
  function K(W, D, F) {
    if (typeof D.borshSerialize == "function") {
      D.borshSerialize(F);
      return;
    }
    const V = W.get(D.constructor);
    if (!V)
      throw new B(`Class ${D.constructor.name} is missing in schema`);
    if (V.kind === "struct")
      V.fields.map(([R, a]) => {
        Z(W, R, D[R], a, F);
      });
    else if (V.kind === "enum") {
      const R = D[V.field];
      for (let a = 0; a < V.values.length; ++a) {
        const [d, _] = V.values[a];
        if (d === R) {
          F.writeU8(a), Z(W, d, D[d], _, F);
          break;
        }
      }
    } else
      throw new B(`Unexpected schema kind: ${V.kind} for ${D.constructor.name}`);
  }
  function $(W, D, F = k) {
    const V = new F();
    return K(W, D, V), V.toArray();
  }
  At.serialize = $;
  function j(W, D, F, V) {
    try {
      if (typeof F == "string")
        return V[`read${Y(F)}`]();
      if (F instanceof Array) {
        if (typeof F[0] == "number")
          return V.readFixedArray(F[0]);
        if (typeof F[1] == "number") {
          const R = [];
          for (let a = 0; a < F[1]; a++)
            R.push(j(W, null, F[0], V));
          return R;
        } else
          return V.readArray(() => j(W, D, F[0], V));
      }
      if (F.kind === "option")
        return V.readU8() ? j(W, D, F.type, V) : void 0;
      if (F.kind === "map") {
        let R = /* @__PURE__ */ new Map();
        const a = V.readU32();
        for (let d = 0; d < a; d++) {
          const _ = j(W, D, F.key, V), A = j(W, D, F.value, V);
          R.set(_, A);
        }
        return R;
      }
      return J(W, F, V);
    } catch (R) {
      throw R instanceof B && R.addToFieldPath(D), R;
    }
  }
  function J(W, D, F) {
    if (typeof D.borshDeserialize == "function")
      return D.borshDeserialize(F);
    const V = W.get(D);
    if (!V)
      throw new B(`Class ${D.name} is missing in schema`);
    if (V.kind === "struct") {
      const R = {};
      for (const [a, d] of W.get(D).fields)
        R[a] = j(W, a, d, F);
      return new D(R);
    }
    if (V.kind === "enum") {
      const R = F.readU8();
      if (R >= V.values.length)
        throw new B(`Enum index: ${R} is out of range`);
      const [a, d] = V.values[R], _ = j(W, a, d, F);
      return new D({ [a]: _ });
    }
    throw new B(`Unexpected schema kind: ${V.kind} for ${D.constructor.name}`);
  }
  function st(W, D, F, V = M) {
    const R = new V(F), a = J(W, D, R);
    if (R.offset < F.length)
      throw new B(`Unexpected ${F.length - R.offset} bytes after deserialized data`);
    return a;
  }
  At.deserialize = st;
  function ot(W, D, F, V = M) {
    const R = new V(F);
    return J(W, D, R);
  }
  return At.deserializeUnchecked = ot, At;
}
var kr = Pa(), z = {}, Qi;
function Fa() {
  if (Qi) return z;
  Qi = 1, Object.defineProperty(z, "__esModule", { value: !0 }), z.s16 = z.s8 = z.nu64be = z.u48be = z.u40be = z.u32be = z.u24be = z.u16be = z.nu64 = z.u48 = z.u40 = z.u32 = z.u24 = z.u16 = z.u8 = z.offset = z.greedy = z.Constant = z.UTF8 = z.CString = z.Blob = z.Boolean = z.BitField = z.BitStructure = z.VariantLayout = z.Union = z.UnionLayoutDiscriminator = z.UnionDiscriminator = z.Structure = z.Sequence = z.DoubleBE = z.Double = z.FloatBE = z.Float = z.NearInt64BE = z.NearInt64 = z.NearUInt64BE = z.NearUInt64 = z.IntBE = z.Int = z.UIntBE = z.UInt = z.OffsetLayout = z.GreedyCount = z.ExternalLayout = z.bindConstructorLayout = z.nameWithProperty = z.Layout = z.uint8ArrayToBuffer = z.checkUint8Array = void 0, z.constant = z.utf8 = z.cstr = z.blob = z.unionLayoutDiscriminator = z.union = z.seq = z.bits = z.struct = z.f64be = z.f64 = z.f32be = z.f32 = z.ns64be = z.s48be = z.s40be = z.s32be = z.s24be = z.s16be = z.ns64 = z.s48 = z.s40 = z.s32 = z.s24 = void 0;
  const r = oi();
  function e(c) {
    if (!(c instanceof Uint8Array))
      throw new TypeError("b must be a Uint8Array");
  }
  z.checkUint8Array = e;
  function t(c) {
    return e(c), r.Buffer.from(c.buffer, c.byteOffset, c.length);
  }
  z.uint8ArrayToBuffer = t;
  let n = class {
    constructor(u, y) {
      if (!Number.isInteger(u))
        throw new TypeError("span must be an integer");
      this.span = u, this.property = y;
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
    getSpan(u, y) {
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
    replicate(u) {
      const y = Object.create(this.constructor.prototype);
      return Object.assign(y, this), y.property = u, y;
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
    fromArray(u) {
    }
  };
  z.Layout = n;
  function s(c, u) {
    return u.property ? c + "[" + u.property + "]" : c;
  }
  z.nameWithProperty = s;
  function i(c, u) {
    if (typeof c != "function")
      throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(c, "layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(u && u instanceof n))
      throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(u, "boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    c.layout_ = u, u.boundConstructor_ = c, u.makeDestinationObject = () => new c(), Object.defineProperty(c.prototype, "encode", {
      value(y, O) {
        return u.encode(this, y, O);
      },
      writable: !0
    }), Object.defineProperty(c, "decode", {
      value(y, O) {
        return u.decode(y, O);
      },
      writable: !0
    });
  }
  z.bindConstructorLayout = i;
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
  z.ExternalLayout = o;
  class f extends o {
    constructor(u = 1, y) {
      if (!Number.isInteger(u) || 0 >= u)
        throw new TypeError("elementSpan must be a (positive) integer");
      super(-1, y), this.elementSpan = u;
    }
    /** @override */
    isCount() {
      return !0;
    }
    /** @override */
    decode(u, y = 0) {
      e(u);
      const O = u.length - y;
      return Math.floor(O / this.elementSpan);
    }
    /** @override */
    encode(u, y, O) {
      return 0;
    }
  }
  z.GreedyCount = f;
  class p extends o {
    constructor(u, y = 0, O) {
      if (!(u instanceof n))
        throw new TypeError("layout must be a Layout");
      if (!Number.isInteger(y))
        throw new TypeError("offset must be integer or undefined");
      super(u.span, O || u.property), this.layout = u, this.offset = y;
    }
    /** @override */
    isCount() {
      return this.layout instanceof b || this.layout instanceof v;
    }
    /** @override */
    decode(u, y = 0) {
      return this.layout.decode(u, y + this.offset);
    }
    /** @override */
    encode(u, y, O = 0) {
      return this.layout.encode(u, y, O + this.offset);
    }
  }
  z.OffsetLayout = p;
  class b extends n {
    constructor(u, y) {
      if (super(u, y), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readUIntLE(y, this.span);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeUIntLE(u, O, this.span), this.span;
    }
  }
  z.UInt = b;
  class v extends n {
    constructor(u, y) {
      if (super(u, y), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readUIntBE(y, this.span);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeUIntBE(u, O, this.span), this.span;
    }
  }
  z.UIntBE = v;
  class x extends n {
    constructor(u, y) {
      if (super(u, y), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readIntLE(y, this.span);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeIntLE(u, O, this.span), this.span;
    }
  }
  z.Int = x;
  class U extends n {
    constructor(u, y) {
      if (super(u, y), 6 < this.span)
        throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readIntBE(y, this.span);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeIntBE(u, O, this.span), this.span;
    }
  }
  z.IntBE = U;
  const B = Math.pow(2, 32);
  function k(c) {
    const u = Math.floor(c / B), y = c - u * B;
    return { hi32: u, lo32: y };
  }
  function N(c, u) {
    return c * B + u;
  }
  class M extends n {
    constructor(u) {
      super(8, u);
    }
    /** @override */
    decode(u, y = 0) {
      const O = t(u), L = O.readUInt32LE(y), H = O.readUInt32LE(y + 4);
      return N(H, L);
    }
    /** @override */
    encode(u, y, O = 0) {
      const L = k(u), H = t(y);
      return H.writeUInt32LE(L.lo32, O), H.writeUInt32LE(L.hi32, O + 4), 8;
    }
  }
  z.NearUInt64 = M;
  class Y extends n {
    constructor(u) {
      super(8, u);
    }
    /** @override */
    decode(u, y = 0) {
      const O = t(u), L = O.readUInt32BE(y), H = O.readUInt32BE(y + 4);
      return N(L, H);
    }
    /** @override */
    encode(u, y, O = 0) {
      const L = k(u), H = t(y);
      return H.writeUInt32BE(L.hi32, O), H.writeUInt32BE(L.lo32, O + 4), 8;
    }
  }
  z.NearUInt64BE = Y;
  class Z extends n {
    constructor(u) {
      super(8, u);
    }
    /** @override */
    decode(u, y = 0) {
      const O = t(u), L = O.readUInt32LE(y), H = O.readInt32LE(y + 4);
      return N(H, L);
    }
    /** @override */
    encode(u, y, O = 0) {
      const L = k(u), H = t(y);
      return H.writeUInt32LE(L.lo32, O), H.writeInt32LE(L.hi32, O + 4), 8;
    }
  }
  z.NearInt64 = Z;
  class K extends n {
    constructor(u) {
      super(8, u);
    }
    /** @override */
    decode(u, y = 0) {
      const O = t(u), L = O.readInt32BE(y), H = O.readUInt32BE(y + 4);
      return N(L, H);
    }
    /** @override */
    encode(u, y, O = 0) {
      const L = k(u), H = t(y);
      return H.writeInt32BE(L.hi32, O), H.writeUInt32BE(L.lo32, O + 4), 8;
    }
  }
  z.NearInt64BE = K;
  class $ extends n {
    constructor(u) {
      super(4, u);
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readFloatLE(y);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeFloatLE(u, O), 4;
    }
  }
  z.Float = $;
  class j extends n {
    constructor(u) {
      super(4, u);
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readFloatBE(y);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeFloatBE(u, O), 4;
    }
  }
  z.FloatBE = j;
  class J extends n {
    constructor(u) {
      super(8, u);
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readDoubleLE(y);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeDoubleLE(u, O), 8;
    }
  }
  z.Double = J;
  class st extends n {
    constructor(u) {
      super(8, u);
    }
    /** @override */
    decode(u, y = 0) {
      return t(u).readDoubleBE(y);
    }
    /** @override */
    encode(u, y, O = 0) {
      return t(y).writeDoubleBE(u, O), 8;
    }
  }
  z.DoubleBE = st;
  class ot extends n {
    constructor(u, y, O) {
      if (!(u instanceof n))
        throw new TypeError("elementLayout must be a Layout");
      if (!(y instanceof o && y.isCount() || Number.isInteger(y) && 0 <= y))
        throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
      let L = -1;
      !(y instanceof o) && 0 < u.span && (L = y * u.span), super(L, O), this.elementLayout = u, this.count = y;
    }
    /** @override */
    getSpan(u, y = 0) {
      if (0 <= this.span)
        return this.span;
      let O = 0, L = this.count;
      if (L instanceof o && (L = L.decode(u, y)), 0 < this.elementLayout.span)
        O = L * this.elementLayout.span;
      else {
        let H = 0;
        for (; H < L; )
          O += this.elementLayout.getSpan(u, y + O), ++H;
      }
      return O;
    }
    /** @override */
    decode(u, y = 0) {
      const O = [];
      let L = 0, H = this.count;
      for (H instanceof o && (H = H.decode(u, y)); L < H; )
        O.push(this.elementLayout.decode(u, y)), y += this.elementLayout.getSpan(u, y), L += 1;
      return O;
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
    encode(u, y, O = 0) {
      const L = this.elementLayout, H = u.reduce((tt, it) => tt + L.encode(it, y, O + tt), 0);
      return this.count instanceof o && this.count.encode(u.length, y, O), H;
    }
  }
  z.Sequence = ot;
  class W extends n {
    constructor(u, y, O) {
      if (!(Array.isArray(u) && u.reduce((H, tt) => H && tt instanceof n, !0)))
        throw new TypeError("fields must be array of Layout instances");
      typeof y == "boolean" && O === void 0 && (O = y, y = void 0);
      for (const H of u)
        if (0 > H.span && H.property === void 0)
          throw new Error("fields cannot contain unnamed variable-length layout");
      let L = -1;
      try {
        L = u.reduce((H, tt) => H + tt.getSpan(), 0);
      } catch {
      }
      super(L, y), this.fields = u, this.decodePrefixes = !!O;
    }
    /** @override */
    getSpan(u, y = 0) {
      if (0 <= this.span)
        return this.span;
      let O = 0;
      try {
        O = this.fields.reduce((L, H) => {
          const tt = H.getSpan(u, y);
          return y += tt, L + tt;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return O;
    }
    /** @override */
    decode(u, y = 0) {
      e(u);
      const O = this.makeDestinationObject();
      for (const L of this.fields)
        if (L.property !== void 0 && (O[L.property] = L.decode(u, y)), y += L.getSpan(u, y), this.decodePrefixes && u.length === y)
          break;
      return O;
    }
    /** Implement {@link Layout#encode|encode} for {@link Structure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the buffer is
     * left unmodified. */
    encode(u, y, O = 0) {
      const L = O;
      let H = 0, tt = 0;
      for (const it of this.fields) {
        let Et = it.span;
        if (tt = 0 < Et ? Et : 0, it.property !== void 0) {
          const pt = u[it.property];
          pt !== void 0 && (tt = it.encode(pt, y, O), 0 > Et && (Et = it.getSpan(y, O)));
        }
        H = O, O += Et;
      }
      return H + tt - L;
    }
    /** @override */
    fromArray(u) {
      const y = this.makeDestinationObject();
      for (const O of this.fields)
        O.property !== void 0 && 0 < u.length && (y[O.property] = u.shift());
      return y;
    }
    /**
     * Get access to the layout of a given property.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Layout} - the layout associated with `property`, or
     * undefined if there is no such property.
     */
    layoutFor(u) {
      if (typeof u != "string")
        throw new TypeError("property must be string");
      for (const y of this.fields)
        if (y.property === u)
          return y;
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
    offsetOf(u) {
      if (typeof u != "string")
        throw new TypeError("property must be string");
      let y = 0;
      for (const O of this.fields) {
        if (O.property === u)
          return y;
        0 > O.span ? y = -1 : 0 <= y && (y += O.span);
      }
    }
  }
  z.Structure = W;
  class D {
    constructor(u) {
      this.property = u;
    }
    /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
     *
     * The implementation of this method need not reference the buffer if
     * variant information is available through other means. */
    decode(u, y) {
      throw new Error("UnionDiscriminator is abstract");
    }
    /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
     *
     * The implementation of this method need not store the value if
     * variant information is maintained through other means. */
    encode(u, y, O) {
      throw new Error("UnionDiscriminator is abstract");
    }
  }
  z.UnionDiscriminator = D;
  class F extends D {
    constructor(u, y) {
      if (!(u instanceof o && u.isCount()))
        throw new TypeError("layout must be an unsigned integer ExternalLayout");
      super(y || u.property || "variant"), this.layout = u;
    }
    /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    decode(u, y) {
      return this.layout.decode(u, y);
    }
    /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    encode(u, y, O) {
      return this.layout.encode(u, y, O);
    }
  }
  z.UnionLayoutDiscriminator = F;
  class V extends n {
    constructor(u, y, O) {
      let L;
      if (u instanceof b || u instanceof v)
        L = new F(new p(u));
      else if (u instanceof o && u.isCount())
        L = new F(u);
      else if (u instanceof D)
        L = u;
      else
        throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
      if (y === void 0 && (y = null), !(y === null || y instanceof n))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (y !== null) {
        if (0 > y.span)
          throw new Error("defaultLayout must have constant span");
        y.property === void 0 && (y = y.replicate("content"));
      }
      let H = -1;
      y && (H = y.span, 0 <= H && (u instanceof b || u instanceof v) && (H += L.layout.span)), super(H, O), this.discriminator = L, this.usesPrefixDiscriminator = u instanceof b || u instanceof v, this.defaultLayout = y, this.registry = {};
      let tt = this.defaultGetSourceVariant.bind(this);
      this.getSourceVariant = function(it) {
        return tt(it);
      }, this.configGetSourceVariant = function(it) {
        tt = it.bind(this);
      };
    }
    /** @override */
    getSpan(u, y = 0) {
      if (0 <= this.span)
        return this.span;
      const O = this.getVariant(u, y);
      if (!O)
        throw new Error("unable to determine span for unrecognized variant");
      return O.getSpan(u, y);
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
    defaultGetSourceVariant(u) {
      if (Object.prototype.hasOwnProperty.call(u, this.discriminator.property)) {
        if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(u, this.defaultLayout.property))
          return;
        const y = this.registry[u[this.discriminator.property]];
        if (y && (!y.layout || y.property && Object.prototype.hasOwnProperty.call(u, y.property)))
          return y;
      } else
        for (const y in this.registry) {
          const O = this.registry[y];
          if (O.property && Object.prototype.hasOwnProperty.call(u, O.property))
            return O;
        }
      throw new Error("unable to infer src variant");
    }
    /** Implement {@link Layout#decode|decode} for {@link Union}.
     *
     * If the variant is {@link Union#addVariant|registered} the return
     * value is an instance of that variant, with no explicit
     * discriminator.  Otherwise the {@link Union#defaultLayout|default
     * layout} is used to decode the content. */
    decode(u, y = 0) {
      let O;
      const L = this.discriminator, H = L.decode(u, y), tt = this.registry[H];
      if (tt === void 0) {
        const it = this.defaultLayout;
        let Et = 0;
        this.usesPrefixDiscriminator && (Et = L.layout.span), O = this.makeDestinationObject(), O[L.property] = H, O[it.property] = it.decode(u, y + Et);
      } else
        O = tt.decode(u, y);
      return O;
    }
    /** Implement {@link Layout#encode|encode} for {@link Union}.
     *
     * This API assumes the `src` object is consistent with the union's
     * {@link Union#defaultLayout|default layout}.  To encode variants
     * use the appropriate variant-specific {@link VariantLayout#encode}
     * method. */
    encode(u, y, O = 0) {
      const L = this.getSourceVariant(u);
      if (L === void 0) {
        const H = this.discriminator, tt = this.defaultLayout;
        let it = 0;
        return this.usesPrefixDiscriminator && (it = H.layout.span), H.encode(u[H.property], y, O), it + tt.encode(u[tt.property], y, O + it);
      }
      return L.encode(u, y, O);
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
    addVariant(u, y, O) {
      const L = new R(this, u, y, O);
      return this.registry[u] = L, L;
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
    getVariant(u, y = 0) {
      let O;
      return u instanceof Uint8Array ? O = this.discriminator.decode(u, y) : O = u, this.registry[O];
    }
  }
  z.Union = V;
  class R extends n {
    constructor(u, y, O, L) {
      if (!(u instanceof V))
        throw new TypeError("union must be a Union");
      if (!Number.isInteger(y) || 0 > y)
        throw new TypeError("variant must be a (non-negative) integer");
      if (typeof O == "string" && L === void 0 && (L = O, O = null), O) {
        if (!(O instanceof n))
          throw new TypeError("layout must be a Layout");
        if (u.defaultLayout !== null && 0 <= O.span && O.span > u.defaultLayout.span)
          throw new Error("variant span exceeds span of containing union");
        if (typeof L != "string")
          throw new TypeError("variant must have a String property");
      }
      let H = u.span;
      0 > u.span && (H = O ? O.span : 0, 0 <= H && u.usesPrefixDiscriminator && (H += u.discriminator.layout.span)), super(H, L), this.union = u, this.variant = y, this.layout = O || null;
    }
    /** @override */
    getSpan(u, y = 0) {
      if (0 <= this.span)
        return this.span;
      let O = 0;
      this.union.usesPrefixDiscriminator && (O = this.union.discriminator.layout.span);
      let L = 0;
      return this.layout && (L = this.layout.getSpan(u, y + O)), O + L;
    }
    /** @override */
    decode(u, y = 0) {
      const O = this.makeDestinationObject();
      if (this !== this.union.getVariant(u, y))
        throw new Error("variant mismatch");
      let L = 0;
      return this.union.usesPrefixDiscriminator && (L = this.union.discriminator.layout.span), this.layout ? O[this.property] = this.layout.decode(u, y + L) : this.property ? O[this.property] = !0 : this.union.usesPrefixDiscriminator && (O[this.union.discriminator.property] = this.variant), O;
    }
    /** @override */
    encode(u, y, O = 0) {
      let L = 0;
      if (this.union.usesPrefixDiscriminator && (L = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(u, this.property))
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, y, O);
      let H = L;
      if (this.layout && (this.layout.encode(u[this.property], y, O + L), H += this.layout.getSpan(y, O + L), 0 <= this.union.span && H > this.union.span))
        throw new Error("encoded variant overruns containing union");
      return H;
    }
    /** Delegate {@link Layout#fromArray|fromArray} to {@link
     * VariantLayout#layout|layout}. */
    fromArray(u) {
      if (this.layout)
        return this.layout.fromArray(u);
    }
  }
  z.VariantLayout = R;
  function a(c) {
    return 0 > c && (c += 4294967296), c;
  }
  class d extends n {
    constructor(u, y, O) {
      if (!(u instanceof b || u instanceof v))
        throw new TypeError("word must be a UInt or UIntBE layout");
      if (typeof y == "string" && O === void 0 && (O = y, y = !1), 4 < u.span)
        throw new RangeError("word cannot exceed 32 bits");
      super(u.span, O), this.word = u, this.msb = !!y, this.fields = [];
      let L = 0;
      this._packedSetValue = function(H) {
        return L = a(H), this;
      }, this._packedGetValue = function() {
        return L;
      };
    }
    /** @override */
    decode(u, y = 0) {
      const O = this.makeDestinationObject(), L = this.word.decode(u, y);
      this._packedSetValue(L);
      for (const H of this.fields)
        H.property !== void 0 && (O[H.property] = H.decode(u));
      return O;
    }
    /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the packed
     * value is left unmodified.  Unused bits are also left unmodified. */
    encode(u, y, O = 0) {
      const L = this.word.decode(y, O);
      this._packedSetValue(L);
      for (const H of this.fields)
        if (H.property !== void 0) {
          const tt = u[H.property];
          tt !== void 0 && H.encode(tt);
        }
      return this.word.encode(this._packedGetValue(), y, O);
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
    addField(u, y) {
      const O = new _(this, u, y);
      return this.fields.push(O), O;
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
    addBoolean(u) {
      const y = new A(this, u);
      return this.fields.push(y), y;
    }
    /**
     * Get access to the bit field for a given property.
     *
     * @param {String} property - the bit field of interest.
     *
     * @return {BitField} - the field associated with `property`, or
     * undefined if there is no such property.
     */
    fieldFor(u) {
      if (typeof u != "string")
        throw new TypeError("property must be string");
      for (const y of this.fields)
        if (y.property === u)
          return y;
    }
  }
  z.BitStructure = d;
  class _ {
    constructor(u, y, O) {
      if (!(u instanceof d))
        throw new TypeError("container must be a BitStructure");
      if (!Number.isInteger(y) || 0 >= y)
        throw new TypeError("bits must be positive integer");
      const L = 8 * u.span, H = u.fields.reduce((tt, it) => tt + it.bits, 0);
      if (y + H > L)
        throw new Error("bits too long for span remainder (" + (L - H) + " of " + L + " remain)");
      this.container = u, this.bits = y, this.valueMask = (1 << y) - 1, y === 32 && (this.valueMask = 4294967295), this.start = H, this.container.msb && (this.start = L - H - y), this.wordMask = a(this.valueMask << this.start), this.property = O;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field. */
    decode(u, y) {
      const O = this.container._packedGetValue();
      return a(O & this.wordMask) >>> this.start;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field.
     *
     * **NOTE** This is not a specialization of {@link
     * Layout#encode|Layout.encode} and there is no return value. */
    encode(u) {
      if (typeof u != "number" || !Number.isInteger(u) || u !== a(u & this.valueMask))
        throw new TypeError(s("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
      const y = this.container._packedGetValue(), O = a(u << this.start);
      this.container._packedSetValue(a(y & ~this.wordMask) | O);
    }
  }
  z.BitField = _;
  class A extends _ {
    constructor(u, y) {
      super(u, 1, y);
    }
    /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
     *
     * @returns {boolean} */
    decode(u, y) {
      return !!super.decode(u, y);
    }
    /** @override */
    encode(u) {
      typeof u == "boolean" && (u = +u), super.encode(u);
    }
  }
  z.Boolean = A;
  class w extends n {
    constructor(u, y) {
      if (!(u instanceof o && u.isCount() || Number.isInteger(u) && 0 <= u))
        throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
      let O = -1;
      u instanceof o || (O = u), super(O, y), this.length = u;
    }
    /** @override */
    getSpan(u, y) {
      let O = this.span;
      return 0 > O && (O = this.length.decode(u, y)), O;
    }
    /** @override */
    decode(u, y = 0) {
      let O = this.span;
      return 0 > O && (O = this.length.decode(u, y)), t(u).slice(y, y + O);
    }
    /** Implement {@link Layout#encode|encode} for {@link Blob}.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */
    encode(u, y, O) {
      let L = this.length;
      if (this.length instanceof o && (L = u.length), !(u instanceof Uint8Array && L === u.length))
        throw new TypeError(s("Blob.encode", this) + " requires (length " + L + ") Uint8Array as src");
      if (O + L > y.length)
        throw new RangeError("encoding overruns Uint8Array");
      const H = t(u);
      return t(y).write(H.toString("hex"), O, L, "hex"), this.length instanceof o && this.length.encode(L, y, O), L;
    }
  }
  z.Blob = w;
  class E extends n {
    constructor(u) {
      super(-1, u);
    }
    /** @override */
    getSpan(u, y = 0) {
      e(u);
      let O = y;
      for (; O < u.length && u[O] !== 0; )
        O += 1;
      return 1 + O - y;
    }
    /** @override */
    decode(u, y = 0) {
      const O = this.getSpan(u, y);
      return t(u).slice(y, y + O - 1).toString("utf-8");
    }
    /** @override */
    encode(u, y, O = 0) {
      typeof u != "string" && (u = String(u));
      const L = r.Buffer.from(u, "utf8"), H = L.length;
      if (O + H > y.length)
        throw new RangeError("encoding overruns Buffer");
      const tt = t(y);
      return L.copy(tt, O), tt[O + H] = 0, H + 1;
    }
  }
  z.CString = E;
  class I extends n {
    constructor(u, y) {
      if (typeof u == "string" && y === void 0 && (y = u, u = void 0), u === void 0)
        u = -1;
      else if (!Number.isInteger(u))
        throw new TypeError("maxSpan must be an integer");
      super(-1, y), this.maxSpan = u;
    }
    /** @override */
    getSpan(u, y = 0) {
      return e(u), u.length - y;
    }
    /** @override */
    decode(u, y = 0) {
      const O = this.getSpan(u, y);
      if (0 <= this.maxSpan && this.maxSpan < O)
        throw new RangeError("text length exceeds maxSpan");
      return t(u).slice(y, y + O).toString("utf-8");
    }
    /** @override */
    encode(u, y, O = 0) {
      typeof u != "string" && (u = String(u));
      const L = r.Buffer.from(u, "utf8"), H = L.length;
      if (0 <= this.maxSpan && this.maxSpan < H)
        throw new RangeError("text length exceeds maxSpan");
      if (O + H > y.length)
        throw new RangeError("encoding overruns Buffer");
      return L.copy(t(y), O), H;
    }
  }
  z.UTF8 = I;
  class m extends n {
    constructor(u, y) {
      super(0, y), this.value = u;
    }
    /** @override */
    decode(u, y) {
      return this.value;
    }
    /** @override */
    encode(u, y, O) {
      return 0;
    }
  }
  return z.Constant = m, z.greedy = (c, u) => new f(c, u), z.offset = (c, u, y) => new p(c, u, y), z.u8 = (c) => new b(1, c), z.u16 = (c) => new b(2, c), z.u24 = (c) => new b(3, c), z.u32 = (c) => new b(4, c), z.u40 = (c) => new b(5, c), z.u48 = (c) => new b(6, c), z.nu64 = (c) => new M(c), z.u16be = (c) => new v(2, c), z.u24be = (c) => new v(3, c), z.u32be = (c) => new v(4, c), z.u40be = (c) => new v(5, c), z.u48be = (c) => new v(6, c), z.nu64be = (c) => new Y(c), z.s8 = (c) => new x(1, c), z.s16 = (c) => new x(2, c), z.s24 = (c) => new x(3, c), z.s32 = (c) => new x(4, c), z.s40 = (c) => new x(5, c), z.s48 = (c) => new x(6, c), z.ns64 = (c) => new Z(c), z.s16be = (c) => new U(2, c), z.s24be = (c) => new U(3, c), z.s32be = (c) => new U(4, c), z.s40be = (c) => new U(5, c), z.s48be = (c) => new U(6, c), z.ns64be = (c) => new K(c), z.f32 = (c) => new $(c), z.f32be = (c) => new j(c), z.f64 = (c) => new J(c), z.f64be = (c) => new st(c), z.struct = (c, u, y) => new W(c, u, y), z.bits = (c, u, y) => new d(c, u, y), z.seq = (c, u, y) => new ot(c, u, y), z.union = (c, u, y) => new V(c, u, y), z.unionLayoutDiscriminator = (c, u) => new F(c, u), z.blob = (c, u) => new w(c, u), z.cstr = (c) => new E(c), z.utf8 = (c, u) => new I(c, u), z.constant = (c, u) => new m(c, u), z;
}
var T = Fa(), qa = 1, $a = 2, za = 3, Ha = 4, Ga = 5, Va = 6, Ka = 7, Wa = 8, ja = 9, Ya = 10, Xa = -32700, Za = -32603, Ja = -32602, Qa = -32601, tc = -32600, ec = -32016, nc = -32015, rc = -32014, ic = -32013, sc = -32012, oc = -32011, ac = -32010, cc = -32009, uc = -32008, fc = -32007, lc = -32006, hc = -32005, dc = -32004, pc = -32003, _c = -32002, gc = -32001, mc = 28e5, yc = 2800001, Rc = 2800002, wc = 2800003, Ec = 2800004, Ac = 2800005, bc = 2800006, Sc = 2800007, vc = 2800008, Oc = 2800009, Ic = 2800010, Nc = 323e4, xc = 32300001, Tc = 3230002, Bc = 3230003, Cc = 3230004, Lc = 361e4, Mc = 3610001, kc = 3610002, Uc = 3610003, Dc = 3610004, Pc = 3610005, Fc = 3610006, qc = 3610007, $c = 3611e3, zc = 3704e3, Hc = 3704001, Gc = 3704002, Vc = 3704003, Kc = 3704004, Wc = 4128e3, jc = 4128001, Yc = 4128002, Xc = 4615e3, Zc = 4615001, Jc = 4615002, Qc = 4615003, tu = 4615004, eu = 4615005, nu = 4615006, ru = 4615007, iu = 4615008, su = 4615009, ou = 4615010, au = 4615011, cu = 4615012, uu = 4615013, fu = 4615014, lu = 4615015, hu = 4615016, du = 4615017, pu = 4615018, _u = 4615019, gu = 4615020, mu = 4615021, yu = 4615022, Ru = 4615023, wu = 4615024, Eu = 4615025, Au = 4615026, bu = 4615027, Su = 4615028, vu = 4615029, Ou = 4615030, Iu = 4615031, Nu = 4615032, xu = 4615033, Tu = 4615034, Bu = 4615035, Cu = 4615036, Lu = 4615037, Mu = 4615038, ku = 4615039, Uu = 4615040, Du = 4615041, Pu = 4615042, Fu = 4615043, qu = 4615044, $u = 4615045, zu = 4615046, Hu = 4615047, Gu = 4615048, Vu = 4615049, Ku = 4615050, Wu = 4615051, ju = 4615052, Yu = 4615053, Xu = 4615054, Zu = 5508e3, Ju = 5508001, Qu = 5508002, tf = 5508003, ef = 5508004, nf = 5508005, rf = 5508006, sf = 5508007, of = 5508008, af = 5508009, cf = 5508010, uf = 5508011, ff = 5663e3, lf = 5663001, hf = 5663002, df = 5663003, pf = 5663004, _f = 5663005, gf = 5663006, mf = 5663007, yf = 5663008, Rf = 5663009, wf = 5663010, Ef = 5663011, Af = 5663012, bf = 5663013, Sf = 5663014, vf = 5663015, Of = 5663016, If = 5663017, Nf = 5663018, xf = 5663019, Tf = 705e4, Bf = 7050001, Cf = 7050002, Lf = 7050003, Mf = 7050004, kf = 7050005, Uf = 7050006, Df = 7050007, Pf = 7050008, Ff = 7050009, qf = 7050010, $f = 7050011, zf = 7050012, Hf = 7050013, Gf = 7050014, Vf = 7050015, Kf = 7050016, Wf = 7050017, jf = 7050018, Yf = 7050019, Xf = 7050020, Zf = 7050021, Jf = 7050022, Qf = 7050023, tl = 7050024, el = 7050025, nl = 7050026, rl = 7050027, il = 7050028, sl = 7050029, ol = 7050030, al = 7050031, cl = 7050032, ul = 7050033, fl = 7050034, ll = 7050035, hl = 7050036, $s = 8078e3, zs = 8078001, dl = 8078002, pl = 8078003, Hs = 8078004, Gs = 8078005, Vs = 8078006, _l = 8078007, gl = 8078008, ml = 8078009, yl = 8078010, Ks = 8078011, Rl = 8078012, wl = 8078013, El = 8078014, Al = 8078015, bl = 8078016, Sl = 8078017, vl = 8078018, Ol = 8078019, Il = 8078020, Nl = 8078021, xl = 8078022, Tl = 81e5, Bl = 8100001, Cl = 8100002, Ll = 8100003, Ml = 819e4, kl = 8190001, Ul = 8190002, Dl = 8190003, Pl = 8190004, Fl = 99e5, ql = 9900001, $l = 9900002, zl = 9900003, Hl = 9900004;
function Ws(r) {
  return Array.isArray(r) ? "%5B" + r.map(Ws).join(
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
function Gl([r, e]) {
  return `${r}=${Ws(e)}`;
}
function Vl(r) {
  const e = Object.entries(r).map(Gl).join("&");
  return btoa(e);
}
var Kl = {
  [Nc]: "Account not found at address: $address",
  [Cc]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
  [Bc]: "Expected decoded account at address: $address",
  [Tc]: "Failed to decode account data at address: $address",
  [xc]: "Accounts not found at addresses: $addresses",
  [Oc]: "Unable to find a viable program address bump seed.",
  [Rc]: "$putativeAddress is not a base58-encoded address.",
  [mc]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
  [wc]: "The `CryptoKey` must be an `Ed25519` public key.",
  [vc]: "Invalid seeds; point must fall off the Ed25519 curve.",
  [Ec]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
  [bc]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
  [Sc]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
  [Ac]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
  [Ic]: "Program address cannot end with PDA marker.",
  [yc]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
  [Ha]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
  [qa]: "The network has progressed past the last block for which this transaction could have been committed.",
  [$s]: "Codec [$codecDescription] cannot decode empty byte arrays.",
  [xl]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
  [Il]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
  [Gs]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
  [Vs]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
  [Hs]: "Encoder and decoder must either both be fixed-size or variable-size.",
  [gl]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
  [dl]: "Expected a fixed-size codec, got a variable-size one.",
  [wl]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
  [pl]: "Expected a variable-size codec, got a fixed-size one.",
  [Ol]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
  [zs]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
  [vl]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
  [ml]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
  [yl]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
  [Al]: "Invalid literal union variant. Expected one of [$variants], got $value.",
  [_l]: "Expected [$codecDescription] to have $expected items, got $actual.",
  [Rl]: "Invalid value $value for base $base with alphabet $alphabet.",
  [bl]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
  [Ks]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
  [El]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
  [Nl]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
  [Sl]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
  [$c]: "No random values implementation could be found.",
  [su]: "instruction requires an uninitialized account",
  [Ru]: "instruction tries to borrow reference for an account which is already borrowed",
  [wu]: "instruction left account with an outstanding borrowed reference",
  [mu]: "program other than the account's owner changed the size of the account data",
  [eu]: "account data too small for instruction",
  [yu]: "instruction expected an executable account",
  [zu]: "An account does not have enough lamports to be rent-exempt",
  [Gu]: "Program arithmetic overflowed",
  [$u]: "Failed to serialize or deserialize account data: $encodedData",
  [Xu]: "Builtin programs must consume compute units",
  [Nu]: "Cross-program invocation call depth too deep",
  [Mu]: "Computational budget exceeded",
  [Au]: "custom program error: #$code",
  [du]: "instruction contains duplicate accounts",
  [Eu]: "instruction modifications of multiply-passed account differ",
  [Ou]: "executable accounts must be rent exempt",
  [Su]: "instruction changed executable accounts data",
  [vu]: "instruction changed the balance of an executable account",
  [pu]: "instruction changed executable bit of an account",
  [fu]: "instruction modified data of an account it does not own",
  [uu]: "instruction spent from the balance of an account it does not own",
  [Zc]: "generic instruction error",
  [Ku]: "Provided owner is not allowed",
  [Fu]: "Account is immutable",
  [qu]: "Incorrect authority provided",
  [ru]: "incorrect program id for instruction",
  [nu]: "insufficient funds for instruction",
  [tu]: "invalid account data for instruction",
  [Hu]: "Invalid account owner",
  [Jc]: "invalid program argument",
  [bu]: "program returned invalid error code",
  [Qc]: "invalid instruction data",
  [Lu]: "Failed to reallocate account data",
  [Cu]: "Provided seeds do not result in a valid address",
  [Wu]: "Accounts data allocations exceeded the maximum allowed per transaction",
  [ju]: "Max accounts exceeded",
  [Yu]: "Max instruction trace length exceeded",
  [Bu]: "Length of the seed is too long for address generation",
  [xu]: "An account required by the instruction is missing",
  [iu]: "missing required signature for instruction",
  [cu]: "instruction illegally modified the program id of an account",
  [gu]: "insufficient account keys for instruction",
  [ku]: "Cross-program invocation with unauthorized signer or writable account",
  [Uu]: "Failed to create program execution environment",
  [Pu]: "Program failed to compile",
  [Du]: "Program failed to complete",
  [hu]: "instruction modified data of a read-only account",
  [lu]: "instruction changed the balance of a read-only account",
  [Tu]: "Cross-program invocation reentrancy not allowed for this instruction",
  [_u]: "instruction modified rent epoch of an account",
  [au]: "sum of account balances before and after instruction do not match",
  [ou]: "instruction requires an initialized account",
  [Xc]: "",
  [Iu]: "Unsupported program id",
  [Vu]: "Unsupported sysvar",
  [Wc]: "The instruction does not have any accounts.",
  [jc]: "The instruction does not have any data.",
  [Yc]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
  [Ga]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
  [$a]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
  [$l]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [Hl]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
  [ql]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [Fl]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [zl]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
  [Za]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
  [Ja]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
  [tc]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
  [Qa]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
  [Xa]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
  [sc]: "$__serverMessage",
  [gc]: "$__serverMessage",
  [dc]: "$__serverMessage",
  [rc]: "$__serverMessage",
  [ac]: "$__serverMessage",
  [cc]: "$__serverMessage",
  [ec]: "Minimum context slot has not been reached",
  [hc]: "Node is unhealthy; behind by $numSlotsBehind slots",
  [uc]: "No snapshot",
  [_c]: "Transaction simulation failed",
  [fc]: "$__serverMessage",
  [oc]: "Transaction history is not available from this node",
  [lc]: "$__serverMessage",
  [ic]: "Transaction signature length mismatch",
  [pc]: "Transaction signature verification failure",
  [nc]: "$__serverMessage",
  [zc]: "Key pair bytes must be of length 64, got $byteLength.",
  [Hc]: "Expected private key bytes with length 32. Actual length: $actualLength.",
  [Gc]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
  [Kc]: "The provided private key does not match the provided public key.",
  [Vc]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
  [Va]: "Lamports value must be in the range [0, 2e64-1]",
  [Ka]: "`$value` cannot be parsed as a `BigInt`",
  [Ya]: "$message",
  [Wa]: "`$value` cannot be parsed as a `Number`",
  [za]: "No nonce account could be found at address `$nonceAccountAddress`",
  [Ml]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
  [Ul]: "WebSocket was closed before payload could be added to the send buffer",
  [Dl]: "WebSocket connection closed",
  [Pl]: "WebSocket failed to connect",
  [kl]: "Failed to obtain a subscription id from the server",
  [Ll]: "Could not find an API plan for RPC method: `$method`",
  [Tl]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
  [Cl]: "HTTP error ($statusCode): $message",
  [Bl]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
  [Zu]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
  [Ju]: "The provided value does not implement the `KeyPairSigner` interface",
  [tf]: "The provided value does not implement the `MessageModifyingSigner` interface",
  [ef]: "The provided value does not implement the `MessagePartialSigner` interface",
  [Qu]: "The provided value does not implement any of the `MessageSigner` interfaces",
  [rf]: "The provided value does not implement the `TransactionModifyingSigner` interface",
  [sf]: "The provided value does not implement the `TransactionPartialSigner` interface",
  [of]: "The provided value does not implement the `TransactionSendingSigner` interface",
  [nf]: "The provided value does not implement any of the `TransactionSigner` interfaces",
  [af]: "More than one `TransactionSendingSigner` was identified.",
  [cf]: "No `TransactionSendingSigner` was identified. Please provide a valid `ITransactionWithSingleSendingSigner` transaction.",
  [uf]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
  [qc]: "Cannot export a non-extractable key.",
  [Mc]: "No digest implementation could be found.",
  [Lc]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
  [kc]: `This runtime does not support the generation of Ed25519 key pairs.

Install @solana/webcrypto-ed25519-polyfill and call its \`install\` function before generating keys in environments that do not support Ed25519.

For a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.`,
  [Uc]: "No signature verification implementation could be found.",
  [Dc]: "No key generation implementation could be found.",
  [Pc]: "No signing implementation could be found.",
  [Fc]: "No key export implementation could be found.",
  [ja]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
  [Kf]: "Transaction processing left an account with an outstanding borrowed reference",
  [Bf]: "Account in use",
  [Cf]: "Account loaded twice",
  [Lf]: "Attempt to debit an account but found no record of a prior credit.",
  [Qf]: "Transaction loads an address table account that doesn't exist",
  [Df]: "This transaction has already been processed",
  [Pf]: "Blockhash not found",
  [Ff]: "Loader call chain is too deep",
  [Vf]: "Transactions are currently disabled due to cluster maintenance",
  [ol]: "Transaction contains a duplicate instruction ($index) that is not allowed",
  [kf]: "Insufficient funds for fee",
  [al]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
  [Uf]: "This account may not be used to pay transaction fees",
  [$f]: "Transaction contains an invalid account reference",
  [el]: "Transaction loads an address table account with invalid data",
  [nl]: "Transaction address table lookup uses an invalid index",
  [tl]: "Transaction loads an address table account with an invalid owner",
  [ul]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
  [Hf]: "This program may not be used for executing instructions",
  [rl]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
  [Yf]: "Transaction loads a writable account that cannot be written",
  [cl]: "Transaction exceeded max loaded accounts data size cap",
  [qf]: "Transaction requires a fee but has no signature present",
  [Mf]: "Attempt to load a program that does not exist",
  [ll]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
  [fl]: "ResanitizationNeeded",
  [Gf]: "Transaction failed to sanitize accounts offsets correctly",
  [zf]: "Transaction did not pass signature verification",
  [Jf]: "Transaction locked too many accounts",
  [hl]: "Sum of account balances before and after transaction do not match",
  [Tf]: "The transaction failed with the error `$errorName`",
  [jf]: "Transaction version is unsupported",
  [Zf]: "Transaction would exceed account data limit within the block",
  [sl]: "Transaction would exceed total account data limit",
  [Xf]: "Transaction would exceed max account limit within the block",
  [Wf]: "Transaction would exceed max Block Cost Limit",
  [il]: "Transaction would exceed max Vote Cost Limit",
  [vf]: "Attempted to sign a transaction with an address that is not a signer for it",
  [wf]: "Transaction is missing an address at index: $index.",
  [Of]: "Transaction has no expected signers therefore it cannot be encoded",
  [hf]: "Transaction does not have a blockhash lifetime",
  [df]: "Transaction is not a durable nonce transaction",
  [_f]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
  [gf]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
  [yf]: "No fee payer set in CompiledTransaction",
  [mf]: "Could not find program address at index $index",
  [Nf]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
  [xf]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
  [Ef]: "Transaction is missing a fee payer.",
  [Af]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
  [Sf]: "Transaction first instruction is not advance nonce account instruction.",
  [bf]: "Transaction with no instructions cannot be durable nonce transaction.",
  [ff]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
  [lf]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
  [If]: "The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",
  [Rf]: "Transaction is missing signatures for addresses: $addresses.",
  [pf]: "Transaction version must be in the range [0, 127]. `$actualVersion` given"
}, Be = "i", Oe = "t";
function Wl(r, e = {}) {
  const t = Kl[r];
  if (t.length === 0)
    return "";
  let n;
  function s(o) {
    if (n[Oe] === 2) {
      const f = t.slice(n[Be] + 1, o);
      i.push(
        f in e ? (
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `${e[f]}`
        ) : `$${f}`
      );
    } else n[Oe] === 1 && i.push(t.slice(n[Be], o));
  }
  const i = [];
  return t.split("").forEach((o, f) => {
    if (f === 0) {
      n = {
        [Be]: 0,
        [Oe]: t[0] === "\\" ? 0 : t[0] === "$" ? 2 : 1
        /* Text */
      };
      return;
    }
    let p;
    switch (n[Oe]) {
      case 0:
        p = {
          [Be]: f,
          [Oe]: 1
          /* Text */
        };
        break;
      case 1:
        o === "\\" ? p = {
          [Be]: f,
          [Oe]: 0
          /* EscapeSequence */
        } : o === "$" && (p = {
          [Be]: f,
          [Oe]: 2
          /* Variable */
        });
        break;
      case 2:
        o === "\\" ? p = {
          [Be]: f,
          [Oe]: 0
          /* EscapeSequence */
        } : o === "$" ? p = {
          [Be]: f,
          [Oe]: 2
          /* Variable */
        } : o.match(/\w/) || (p = {
          [Be]: f,
          [Oe]: 1
          /* Text */
        });
        break;
    }
    p && (n !== p && s(f), n = p);
  }), s(), i.join("");
}
function jl(r, e = {}) {
  if (process.env.NODE_ENV !== "production")
    return Wl(r, e);
  {
    let t = `Solana error #${r}; Decode this error by running \`npx @solana/errors decode -- ${r}`;
    return Object.keys(e).length && (t += ` '${Vl(e)}'`), `${t}\``;
  }
}
var sn = class extends Error {
  constructor(...[e, t]) {
    let n, s;
    if (t) {
      const { cause: o, ...f } = t;
      o && (s = { cause: o }), Object.keys(f).length > 0 && (n = f);
    }
    const i = jl(e, n);
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
      __code: e,
      ...n
    }, this.name = "SolanaError";
  }
};
function Yl(r, e) {
  return "fixedSize" in e ? e.fixedSize : e.getSizeFromValue(r);
}
function Xl(r) {
  return Object.freeze({
    ...r,
    encode: (e) => {
      const t = new Uint8Array(Yl(e, r));
      return r.write(e, t, 0), t;
    }
  });
}
function Zl(r) {
  return Object.freeze({
    ...r,
    decode: (e, t = 0) => r.read(e, t)[0]
  });
}
function en(r) {
  return "fixedSize" in r && typeof r.fixedSize == "number";
}
function Jl(r, e) {
  if (en(r) !== en(e))
    throw new sn(Hs);
  if (en(r) && en(e) && r.fixedSize !== e.fixedSize)
    throw new sn(Gs, {
      decoderFixedSize: e.fixedSize,
      encoderFixedSize: r.fixedSize
    });
  if (!en(r) && !en(e) && r.maxSize !== e.maxSize)
    throw new sn(Vs, {
      decoderMaxSize: e.maxSize,
      encoderMaxSize: r.maxSize
    });
  return {
    ...e,
    ...r,
    decode: e.decode,
    encode: r.encode,
    read: e.read,
    write: r.write
  };
}
function Ql(r, e, t = 0) {
  if (e.length - t <= 0)
    throw new sn($s, {
      codecDescription: r
    });
}
function th(r, e, t, n = 0) {
  const s = t.length - n;
  if (s < e)
    throw new sn(zs, {
      bytesLength: s,
      codecDescription: r,
      expected: e
    });
}
function eh(r, e, t, n) {
  if (n < e || n > t)
    throw new sn(Ks, {
      codecDescription: r,
      max: t,
      min: e,
      value: n
    });
}
function js(r) {
  return (r == null ? void 0 : r.endian) !== 1;
}
function nh(r) {
  return Xl({
    fixedSize: r.size,
    write(e, t, n) {
      r.range && eh(r.name, r.range[0], r.range[1], e);
      const s = new ArrayBuffer(r.size);
      return r.set(new DataView(s), e, js(r.config)), t.set(new Uint8Array(s), n), n + r.size;
    }
  });
}
function rh(r) {
  return Zl({
    fixedSize: r.size,
    read(e, t = 0) {
      Ql(r.name, e, t), th(r.name, r.size, e, t);
      const n = new DataView(ih(e, t, r.size));
      return [r.get(n, js(r.config)), t + r.size];
    }
  });
}
function ih(r, e, t) {
  const n = r.byteOffset + (e ?? 0), s = t ?? r.byteLength;
  return r.buffer.slice(n, n + s);
}
var sh = (r = {}) => nh({
  config: r,
  name: "u64",
  range: [0n, BigInt("0xffffffffffffffff")],
  set: (e, t, n) => e.setBigUint64(0, BigInt(t), n),
  size: 8
}), oh = (r = {}) => rh({
  config: r,
  get: (e, t) => e.getBigUint64(0, t),
  name: "u64",
  size: 8
}), ah = (r = {}) => Jl(sh(r), oh(r));
class ch extends TypeError {
  constructor(e, t) {
    let n;
    const { message: s, explanation: i, ...o } = e, { path: f } = e, p = f.length === 0 ? s : `At path: ${f.join(".")} -- ${s}`;
    super(i ?? p), i != null && (this.cause = p), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n ?? (n = [e, ...t()]);
  }
}
function uh(r) {
  return vn(r) && typeof r[Symbol.iterator] == "function";
}
function vn(r) {
  return typeof r == "object" && r != null;
}
function Kn(r) {
  return vn(r) && !Array.isArray(r);
}
function be(r) {
  return typeof r == "symbol" ? r.toString() : typeof r == "string" ? JSON.stringify(r) : `${r}`;
}
function fh(r) {
  const { done: e, value: t } = r.next();
  return e ? void 0 : t;
}
function lh(r, e, t, n) {
  if (r === !0)
    return;
  r === !1 ? r = {} : typeof r == "string" && (r = { message: r });
  const { path: s, branch: i } = e, { type: o } = t, { refinement: f, message: p = `Expected a value of type \`${o}\`${f ? ` with refinement \`${f}\`` : ""}, but received: \`${be(n)}\`` } = r;
  return {
    value: n,
    type: o,
    refinement: f,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...r,
    message: p
  };
}
function* ts(r, e, t, n) {
  uh(r) || (r = [r]);
  for (const s of r) {
    const i = lh(s, e, t, n);
    i && (yield i);
  }
}
function* gi(r, e, t = {}) {
  const { path: n = [], branch: s = [r], coerce: i = !1, mask: o = !1 } = t, f = { path: n, branch: s, mask: o };
  i && (r = e.coercer(r, f));
  let p = "valid";
  for (const b of e.validator(r, f))
    b.explanation = t.message, p = "not_valid", yield [b, void 0];
  for (let [b, v, x] of e.entries(r, f)) {
    const U = gi(v, x, {
      path: b === void 0 ? n : [...n, b],
      branch: b === void 0 ? s : [...s, v],
      coerce: i,
      mask: o,
      message: t.message
    });
    for (const B of U)
      B[0] ? (p = B[0].refinement != null ? "not_refined" : "not_valid", yield [B[0], void 0]) : i && (v = B[1], b === void 0 ? r = v : r instanceof Map ? r.set(b, v) : r instanceof Set ? r.add(v) : vn(r) && (v !== void 0 || b in r) && (r[b] = v));
  }
  if (p !== "not_valid")
    for (const b of e.refiner(r, f))
      b.explanation = t.message, p = "not_refined", yield [b, void 0];
  p === "valid" && (yield [void 0, r]);
}
let Ne = class {
  constructor(e) {
    const { type: t, schema: n, validator: s, refiner: i, coercer: o = (p) => p, entries: f = function* () {
    } } = e;
    this.type = t, this.schema = n, this.entries = f, this.coercer = o, s ? this.validator = (p, b) => {
      const v = s(p, b);
      return ts(v, b, this, p);
    } : this.validator = () => [], i ? this.refiner = (p, b) => {
      const v = i(p, b);
      return ts(v, b, this, p);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e, t) {
    return hh(e, this, t);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e, t) {
    return et(e, this, t);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return Ys(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema. Masking applies recursively to
   * props of `object` structs only.
   */
  mask(e, t) {
    return dh(e, this, t);
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
  validate(e, t = {}) {
    return On(e, this, t);
  }
};
function hh(r, e, t) {
  const n = On(r, e, { message: t });
  if (n[0])
    throw n[0];
}
function et(r, e, t) {
  const n = On(r, e, { coerce: !0, message: t });
  if (n[0])
    throw n[0];
  return n[1];
}
function dh(r, e, t) {
  const n = On(r, e, { coerce: !0, mask: !0, message: t });
  if (n[0])
    throw n[0];
  return n[1];
}
function Ys(r, e) {
  return !On(r, e)[0];
}
function On(r, e, t = {}) {
  const n = gi(r, e, t), s = fh(n);
  return s[0] ? [new ch(s[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, s[1]];
}
function je(r, e) {
  return new Ne({ type: r, schema: null, validator: e });
}
function ph() {
  return je("any", () => !0);
}
function nt(r) {
  return new Ne({
    type: "array",
    schema: r,
    *entries(e) {
      if (r && Array.isArray(e))
        for (const [t, n] of e.entries())
          yield [t, n, r];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array value, but received: ${be(e)}`;
    }
  });
}
function Ie() {
  return je("boolean", (r) => typeof r == "boolean");
}
function mi(r) {
  return je("instance", (e) => e instanceof r || `Expected a \`${r.name}\` instance, but received: ${be(e)}`);
}
function Ct(r) {
  const e = be(r), t = typeof r;
  return new Ne({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? r : null,
    validator(n) {
      return n === r || `Expected the literal \`${e}\`, but received: ${be(n)}`;
    }
  });
}
function _h() {
  return je("never", () => !1);
}
function rt(r) {
  return new Ne({
    ...r,
    validator: (e, t) => e === null || r.validator(e, t),
    refiner: (e, t) => e === null || r.refiner(e, t)
  });
}
function q() {
  return je("number", (r) => typeof r == "number" && !isNaN(r) || `Expected a number, but received: ${be(r)}`);
}
function ct(r) {
  return new Ne({
    ...r,
    validator: (e, t) => e === void 0 || r.validator(e, t),
    refiner: (e, t) => e === void 0 || r.refiner(e, t)
  });
}
function Xs(r, e) {
  return new Ne({
    type: "record",
    schema: null,
    *entries(t) {
      if (vn(t))
        for (const n in t) {
          const s = t[n];
          yield [n, n, r], yield [n, s, e];
        }
    },
    validator(t) {
      return Kn(t) || `Expected an object, but received: ${be(t)}`;
    },
    coercer(t) {
      return Kn(t) ? { ...t } : t;
    }
  });
}
function Q() {
  return je("string", (r) => typeof r == "string" || `Expected a string, but received: ${be(r)}`);
}
function yi(r) {
  const e = _h();
  return new Ne({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        const n = Math.max(r.length, t.length);
        for (let s = 0; s < n; s++)
          yield [s, t[s], r[s] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array, but received: ${be(t)}`;
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    }
  });
}
function X(r) {
  const e = Object.keys(r);
  return new Ne({
    type: "type",
    schema: r,
    *entries(t) {
      if (vn(t))
        for (const n of e)
          yield [n, t[n], r[n]];
    },
    validator(t) {
      return Kn(t) || `Expected an object, but received: ${be(t)}`;
    },
    coercer(t) {
      return Kn(t) ? { ...t } : t;
    }
  });
}
function pe(r) {
  const e = r.map((t) => t.type).join(" | ");
  return new Ne({
    type: "union",
    schema: null,
    coercer(t, n) {
      for (const s of r) {
        const [i, o] = s.validate(t, {
          coerce: !0,
          mask: n.mask
        });
        if (!i)
          return o;
      }
      return t;
    },
    validator(t, n) {
      const s = [];
      for (const i of r) {
        const [...o] = gi(t, i, n), [f] = o;
        if (f[0])
          for (const [p] of o)
            p && s.push(p);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${be(t)}`,
        ...s
      ];
    }
  });
}
function dn() {
  return je("unknown", () => !0);
}
function In(r, e, t) {
  return new Ne({
    ...r,
    coercer: (n, s) => Ys(n, e) ? r.coercer(t(n, s), s) : r.coercer(n, s)
  });
}
var Mn, gh = new Uint8Array(16);
function Zs() {
  if (!Mn && (Mn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Mn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Mn(gh);
}
const mh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Qn(r) {
  return typeof r == "string" && mh.test(r);
}
var se = [];
for (var Ur = 0; Ur < 256; ++Ur)
  se.push((Ur + 256).toString(16).substr(1));
function tr(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = (se[r[e + 0]] + se[r[e + 1]] + se[r[e + 2]] + se[r[e + 3]] + "-" + se[r[e + 4]] + se[r[e + 5]] + "-" + se[r[e + 6]] + se[r[e + 7]] + "-" + se[r[e + 8]] + se[r[e + 9]] + "-" + se[r[e + 10]] + se[r[e + 11]] + se[r[e + 12]] + se[r[e + 13]] + se[r[e + 14]] + se[r[e + 15]]).toLowerCase();
  if (!Qn(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var es, Dr, Pr = 0, Fr = 0;
function yh(r, e, t) {
  var n = e && t || 0, s = e || new Array(16);
  r = r || {};
  var i = r.node || es, o = r.clockseq !== void 0 ? r.clockseq : Dr;
  if (i == null || o == null) {
    var f = r.random || (r.rng || Zs)();
    i == null && (i = es = [f[0] | 1, f[1], f[2], f[3], f[4], f[5]]), o == null && (o = Dr = (f[6] << 8 | f[7]) & 16383);
  }
  var p = r.msecs !== void 0 ? r.msecs : Date.now(), b = r.nsecs !== void 0 ? r.nsecs : Fr + 1, v = p - Pr + (b - Fr) / 1e4;
  if (v < 0 && r.clockseq === void 0 && (o = o + 1 & 16383), (v < 0 || p > Pr) && r.nsecs === void 0 && (b = 0), b >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Pr = p, Fr = b, Dr = o, p += 122192928e5;
  var x = ((p & 268435455) * 1e4 + b) % 4294967296;
  s[n++] = x >>> 24 & 255, s[n++] = x >>> 16 & 255, s[n++] = x >>> 8 & 255, s[n++] = x & 255;
  var U = p / 4294967296 * 1e4 & 268435455;
  s[n++] = U >>> 8 & 255, s[n++] = U & 255, s[n++] = U >>> 24 & 15 | 16, s[n++] = U >>> 16 & 255, s[n++] = o >>> 8 | 128, s[n++] = o & 255;
  for (var B = 0; B < 6; ++B)
    s[n + B] = i[B];
  return e || tr(s);
}
function Js(r) {
  if (!Qn(r))
    throw TypeError("Invalid UUID");
  var e, t = new Uint8Array(16);
  return t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24, t[1] = e >>> 16 & 255, t[2] = e >>> 8 & 255, t[3] = e & 255, t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8, t[5] = e & 255, t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8, t[7] = e & 255, t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8, t[9] = e & 255, t[10] = (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = e / 4294967296 & 255, t[12] = e >>> 24 & 255, t[13] = e >>> 16 & 255, t[14] = e >>> 8 & 255, t[15] = e & 255, t;
}
function Rh(r) {
  r = unescape(encodeURIComponent(r));
  for (var e = [], t = 0; t < r.length; ++t)
    e.push(r.charCodeAt(t));
  return e;
}
var wh = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Eh = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function Qs(r, e, t) {
  function n(s, i, o, f) {
    if (typeof s == "string" && (s = Rh(s)), typeof i == "string" && (i = Js(i)), i.length !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var p = new Uint8Array(16 + s.length);
    if (p.set(i), p.set(s, i.length), p = t(p), p[6] = p[6] & 15 | e, p[8] = p[8] & 63 | 128, o) {
      f = f || 0;
      for (var b = 0; b < 16; ++b)
        o[f + b] = p[b];
      return o;
    }
    return tr(p);
  }
  try {
    n.name = r;
  } catch {
  }
  return n.DNS = wh, n.URL = Eh, n;
}
function Ah(r) {
  if (typeof r == "string") {
    var e = unescape(encodeURIComponent(r));
    r = new Uint8Array(e.length);
    for (var t = 0; t < e.length; ++t)
      r[t] = e.charCodeAt(t);
  }
  return bh(Sh(vh(r), r.length * 8));
}
function bh(r) {
  for (var e = [], t = r.length * 32, n = "0123456789abcdef", s = 0; s < t; s += 8) {
    var i = r[s >> 5] >>> s % 32 & 255, o = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(i & 15), 16);
    e.push(o);
  }
  return e;
}
function to(r) {
  return (r + 64 >>> 9 << 4) + 14 + 1;
}
function Sh(r, e) {
  r[e >> 5] |= 128 << e % 32, r[to(e) - 1] = e;
  for (var t = 1732584193, n = -271733879, s = -1732584194, i = 271733878, o = 0; o < r.length; o += 16) {
    var f = t, p = n, b = s, v = i;
    t = ue(t, n, s, i, r[o], 7, -680876936), i = ue(i, t, n, s, r[o + 1], 12, -389564586), s = ue(s, i, t, n, r[o + 2], 17, 606105819), n = ue(n, s, i, t, r[o + 3], 22, -1044525330), t = ue(t, n, s, i, r[o + 4], 7, -176418897), i = ue(i, t, n, s, r[o + 5], 12, 1200080426), s = ue(s, i, t, n, r[o + 6], 17, -1473231341), n = ue(n, s, i, t, r[o + 7], 22, -45705983), t = ue(t, n, s, i, r[o + 8], 7, 1770035416), i = ue(i, t, n, s, r[o + 9], 12, -1958414417), s = ue(s, i, t, n, r[o + 10], 17, -42063), n = ue(n, s, i, t, r[o + 11], 22, -1990404162), t = ue(t, n, s, i, r[o + 12], 7, 1804603682), i = ue(i, t, n, s, r[o + 13], 12, -40341101), s = ue(s, i, t, n, r[o + 14], 17, -1502002290), n = ue(n, s, i, t, r[o + 15], 22, 1236535329), t = fe(t, n, s, i, r[o + 1], 5, -165796510), i = fe(i, t, n, s, r[o + 6], 9, -1069501632), s = fe(s, i, t, n, r[o + 11], 14, 643717713), n = fe(n, s, i, t, r[o], 20, -373897302), t = fe(t, n, s, i, r[o + 5], 5, -701558691), i = fe(i, t, n, s, r[o + 10], 9, 38016083), s = fe(s, i, t, n, r[o + 15], 14, -660478335), n = fe(n, s, i, t, r[o + 4], 20, -405537848), t = fe(t, n, s, i, r[o + 9], 5, 568446438), i = fe(i, t, n, s, r[o + 14], 9, -1019803690), s = fe(s, i, t, n, r[o + 3], 14, -187363961), n = fe(n, s, i, t, r[o + 8], 20, 1163531501), t = fe(t, n, s, i, r[o + 13], 5, -1444681467), i = fe(i, t, n, s, r[o + 2], 9, -51403784), s = fe(s, i, t, n, r[o + 7], 14, 1735328473), n = fe(n, s, i, t, r[o + 12], 20, -1926607734), t = le(t, n, s, i, r[o + 5], 4, -378558), i = le(i, t, n, s, r[o + 8], 11, -2022574463), s = le(s, i, t, n, r[o + 11], 16, 1839030562), n = le(n, s, i, t, r[o + 14], 23, -35309556), t = le(t, n, s, i, r[o + 1], 4, -1530992060), i = le(i, t, n, s, r[o + 4], 11, 1272893353), s = le(s, i, t, n, r[o + 7], 16, -155497632), n = le(n, s, i, t, r[o + 10], 23, -1094730640), t = le(t, n, s, i, r[o + 13], 4, 681279174), i = le(i, t, n, s, r[o], 11, -358537222), s = le(s, i, t, n, r[o + 3], 16, -722521979), n = le(n, s, i, t, r[o + 6], 23, 76029189), t = le(t, n, s, i, r[o + 9], 4, -640364487), i = le(i, t, n, s, r[o + 12], 11, -421815835), s = le(s, i, t, n, r[o + 15], 16, 530742520), n = le(n, s, i, t, r[o + 2], 23, -995338651), t = he(t, n, s, i, r[o], 6, -198630844), i = he(i, t, n, s, r[o + 7], 10, 1126891415), s = he(s, i, t, n, r[o + 14], 15, -1416354905), n = he(n, s, i, t, r[o + 5], 21, -57434055), t = he(t, n, s, i, r[o + 12], 6, 1700485571), i = he(i, t, n, s, r[o + 3], 10, -1894986606), s = he(s, i, t, n, r[o + 10], 15, -1051523), n = he(n, s, i, t, r[o + 1], 21, -2054922799), t = he(t, n, s, i, r[o + 8], 6, 1873313359), i = he(i, t, n, s, r[o + 15], 10, -30611744), s = he(s, i, t, n, r[o + 6], 15, -1560198380), n = he(n, s, i, t, r[o + 13], 21, 1309151649), t = he(t, n, s, i, r[o + 4], 6, -145523070), i = he(i, t, n, s, r[o + 11], 10, -1120210379), s = he(s, i, t, n, r[o + 2], 15, 718787259), n = he(n, s, i, t, r[o + 9], 21, -343485551), t = ze(t, f), n = ze(n, p), s = ze(s, b), i = ze(i, v);
  }
  return [t, n, s, i];
}
function vh(r) {
  if (r.length === 0)
    return [];
  for (var e = r.length * 8, t = new Uint32Array(to(e)), n = 0; n < e; n += 8)
    t[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return t;
}
function ze(r, e) {
  var t = (r & 65535) + (e & 65535), n = (r >> 16) + (e >> 16) + (t >> 16);
  return n << 16 | t & 65535;
}
function Oh(r, e) {
  return r << e | r >>> 32 - e;
}
function er(r, e, t, n, s, i) {
  return ze(Oh(ze(ze(e, r), ze(n, i)), s), t);
}
function ue(r, e, t, n, s, i, o) {
  return er(e & t | ~e & n, r, e, s, i, o);
}
function fe(r, e, t, n, s, i, o) {
  return er(e & n | t & ~n, r, e, s, i, o);
}
function le(r, e, t, n, s, i, o) {
  return er(e ^ t ^ n, r, e, s, i, o);
}
function he(r, e, t, n, s, i, o) {
  return er(t ^ (e | ~n), r, e, s, i, o);
}
var Ih = Qs("v3", 48, Ah);
function Nh(r, e, t) {
  r = r || {};
  var n = r.random || (r.rng || Zs)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e) {
    t = t || 0;
    for (var s = 0; s < 16; ++s)
      e[t + s] = n[s];
    return e;
  }
  return tr(n);
}
function xh(r, e, t, n) {
  switch (r) {
    case 0:
      return e & t ^ ~e & n;
    case 1:
      return e ^ t ^ n;
    case 2:
      return e & t ^ e & n ^ t & n;
    case 3:
      return e ^ t ^ n;
  }
}
function qr(r, e) {
  return r << e | r >>> 32 - e;
}
function Th(r) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    var n = unescape(encodeURIComponent(r));
    r = [];
    for (var s = 0; s < n.length; ++s)
      r.push(n.charCodeAt(s));
  } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  for (var i = r.length / 4 + 2, o = Math.ceil(i / 16), f = new Array(o), p = 0; p < o; ++p) {
    for (var b = new Uint32Array(16), v = 0; v < 16; ++v)
      b[v] = r[p * 64 + v * 4] << 24 | r[p * 64 + v * 4 + 1] << 16 | r[p * 64 + v * 4 + 2] << 8 | r[p * 64 + v * 4 + 3];
    f[p] = b;
  }
  f[o - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), f[o - 1][14] = Math.floor(f[o - 1][14]), f[o - 1][15] = (r.length - 1) * 8 & 4294967295;
  for (var x = 0; x < o; ++x) {
    for (var U = new Uint32Array(80), B = 0; B < 16; ++B)
      U[B] = f[x][B];
    for (var k = 16; k < 80; ++k)
      U[k] = qr(U[k - 3] ^ U[k - 8] ^ U[k - 14] ^ U[k - 16], 1);
    for (var N = t[0], M = t[1], Y = t[2], Z = t[3], K = t[4], $ = 0; $ < 80; ++$) {
      var j = Math.floor($ / 20), J = qr(N, 5) + xh(j, M, Y, Z) + K + e[j] + U[$] >>> 0;
      K = Z, Z = Y, Y = qr(M, 30) >>> 0, M = N, N = J;
    }
    t[0] = t[0] + N >>> 0, t[1] = t[1] + M >>> 0, t[2] = t[2] + Y >>> 0, t[3] = t[3] + Z >>> 0, t[4] = t[4] + K >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var Bh = Qs("v5", 80, Th);
const Ch = "00000000-0000-0000-0000-000000000000";
function Lh(r) {
  if (!Qn(r))
    throw TypeError("Invalid UUID");
  return parseInt(r.substr(14, 1), 16);
}
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: Ch,
  parse: Js,
  stringify: tr,
  v1: yh,
  v3: Ih,
  v4: Nh,
  v5: Bh,
  validate: Qn,
  version: Lh
}, Symbol.toStringTag, { value: "Module" })), eo = /* @__PURE__ */ si(Mh);
var $r, ns;
function kh() {
  if (ns) return $r;
  ns = 1;
  const r = eo.v4;
  return $r = function(t, n, s, i) {
    if (typeof t != "string")
      throw new TypeError(t + " must be a string");
    i = i || {};
    const o = typeof i.version == "number" ? i.version : 2;
    if (o !== 1 && o !== 2)
      throw new TypeError(o + " must be 1 or 2");
    const f = {
      method: t
    };
    if (o === 2 && (f.jsonrpc = "2.0"), n) {
      if (typeof n != "object" && !Array.isArray(n))
        throw new TypeError(n + " must be an object, array or omitted");
      f.params = n;
    }
    if (typeof s > "u") {
      const p = typeof i.generator == "function" ? i.generator : function() {
        return r();
      };
      f.id = p(f, i);
    } else o === 2 && s === null ? i.notificationIdNull && (f.id = null) : f.id = s;
    return f;
  }, $r;
}
var zr, rs;
function Uh() {
  if (rs) return zr;
  rs = 1;
  const r = eo.v4, e = kh(), t = function(n, s) {
    if (!(this instanceof t))
      return new t(n, s);
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
  return zr = t, t.prototype.request = function(n, s, i, o) {
    const f = this;
    let p = null;
    const b = Array.isArray(n) && typeof s == "function";
    if (this.options.version === 1 && b)
      throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (b || !b && n && typeof n == "object" && typeof s == "function")
      o = s, p = n;
    else {
      typeof i == "function" && (o = i, i = void 0);
      const U = typeof o == "function";
      try {
        p = e(n, s, i, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull
        });
      } catch (B) {
        if (U)
          return o(B);
        throw B;
      }
      if (!U)
        return p;
    }
    let x;
    try {
      x = JSON.stringify(p, this.options.replacer);
    } catch (U) {
      return o(U);
    }
    return this.callServer(x, function(U, B) {
      f._parseResponse(U, B, o);
    }), p;
  }, t.prototype._parseResponse = function(n, s, i) {
    if (n) {
      i(n);
      return;
    }
    if (!s)
      return i();
    let o;
    try {
      o = JSON.parse(s, this.options.reviver);
    } catch (f) {
      return i(f);
    }
    if (i.length === 3)
      if (Array.isArray(o)) {
        const f = function(b) {
          return typeof b.error < "u";
        }, p = function(b) {
          return !f(b);
        };
        return i(null, o.filter(f), o.filter(p));
      } else
        return i(null, o.error, o.result);
    i(null, o);
  }, zr;
}
var Dh = Uh();
const Ph = /* @__PURE__ */ Xn(Dh);
var Hr = { exports: {} }, is;
function Fh() {
  return is || (is = 1, function(r) {
    var e = Object.prototype.hasOwnProperty, t = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (t = !1));
    function s(p, b, v) {
      this.fn = p, this.context = b, this.once = v || !1;
    }
    function i(p, b, v, x, U) {
      if (typeof v != "function")
        throw new TypeError("The listener must be a function");
      var B = new s(v, x || p, U), k = t ? t + b : b;
      return p._events[k] ? p._events[k].fn ? p._events[k] = [p._events[k], B] : p._events[k].push(B) : (p._events[k] = B, p._eventsCount++), p;
    }
    function o(p, b) {
      --p._eventsCount === 0 ? p._events = new n() : delete p._events[b];
    }
    function f() {
      this._events = new n(), this._eventsCount = 0;
    }
    f.prototype.eventNames = function() {
      var b = [], v, x;
      if (this._eventsCount === 0) return b;
      for (x in v = this._events)
        e.call(v, x) && b.push(t ? x.slice(1) : x);
      return Object.getOwnPropertySymbols ? b.concat(Object.getOwnPropertySymbols(v)) : b;
    }, f.prototype.listeners = function(b) {
      var v = t ? t + b : b, x = this._events[v];
      if (!x) return [];
      if (x.fn) return [x.fn];
      for (var U = 0, B = x.length, k = new Array(B); U < B; U++)
        k[U] = x[U].fn;
      return k;
    }, f.prototype.listenerCount = function(b) {
      var v = t ? t + b : b, x = this._events[v];
      return x ? x.fn ? 1 : x.length : 0;
    }, f.prototype.emit = function(b, v, x, U, B, k) {
      var N = t ? t + b : b;
      if (!this._events[N]) return !1;
      var M = this._events[N], Y = arguments.length, Z, K;
      if (M.fn) {
        switch (M.once && this.removeListener(b, M.fn, void 0, !0), Y) {
          case 1:
            return M.fn.call(M.context), !0;
          case 2:
            return M.fn.call(M.context, v), !0;
          case 3:
            return M.fn.call(M.context, v, x), !0;
          case 4:
            return M.fn.call(M.context, v, x, U), !0;
          case 5:
            return M.fn.call(M.context, v, x, U, B), !0;
          case 6:
            return M.fn.call(M.context, v, x, U, B, k), !0;
        }
        for (K = 1, Z = new Array(Y - 1); K < Y; K++)
          Z[K - 1] = arguments[K];
        M.fn.apply(M.context, Z);
      } else {
        var $ = M.length, j;
        for (K = 0; K < $; K++)
          switch (M[K].once && this.removeListener(b, M[K].fn, void 0, !0), Y) {
            case 1:
              M[K].fn.call(M[K].context);
              break;
            case 2:
              M[K].fn.call(M[K].context, v);
              break;
            case 3:
              M[K].fn.call(M[K].context, v, x);
              break;
            case 4:
              M[K].fn.call(M[K].context, v, x, U);
              break;
            default:
              if (!Z) for (j = 1, Z = new Array(Y - 1); j < Y; j++)
                Z[j - 1] = arguments[j];
              M[K].fn.apply(M[K].context, Z);
          }
      }
      return !0;
    }, f.prototype.on = function(b, v, x) {
      return i(this, b, v, x, !1);
    }, f.prototype.once = function(b, v, x) {
      return i(this, b, v, x, !0);
    }, f.prototype.removeListener = function(b, v, x, U) {
      var B = t ? t + b : b;
      if (!this._events[B]) return this;
      if (!v)
        return o(this, B), this;
      var k = this._events[B];
      if (k.fn)
        k.fn === v && (!U || k.once) && (!x || k.context === x) && o(this, B);
      else {
        for (var N = 0, M = [], Y = k.length; N < Y; N++)
          (k[N].fn !== v || U && !k[N].once || x && k[N].context !== x) && M.push(k[N]);
        M.length ? this._events[B] = M.length === 1 ? M[0] : M : o(this, B);
      }
      return this;
    }, f.prototype.removeAllListeners = function(b) {
      var v;
      return b ? (v = t ? t + b : b, this._events[v] && o(this, v)) : (this._events = new n(), this._eventsCount = 0), this;
    }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prefixed = t, f.EventEmitter = f, r.exports = f;
  }(Hr)), Hr.exports;
}
var qh = Fh();
const no = /* @__PURE__ */ Xn(qh);
var $h = class extends no {
  /** Instantiate a WebSocket class
  * @constructor
  * @param {String} address - url to a websocket server
  * @param {(Object)} options - websocket options
  * @param {(String|Array)} protocols - a list of protocols
  * @return {WebSocketBrowserImpl} - returns a WebSocket instance
  */
  constructor(e, t, n) {
    super();
    ne(this, "socket");
    this.socket = new window.WebSocket(e, n), this.socket.onopen = () => this.emit("open"), this.socket.onmessage = (s) => this.emit("message", s.data), this.socket.onerror = (s) => this.emit("error", s), this.socket.onclose = (s) => {
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
  send(e, t, n) {
    const s = n || t;
    try {
      this.socket.send(e), s();
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
  close(e, t) {
    this.socket.close(e, t);
  }
  addEventListener(e, t, n) {
    this.socket.addEventListener(e, t, n);
  }
};
function zh(r, e) {
  return new $h(r, e);
}
var Hh = class {
  encode(r) {
    return JSON.stringify(r);
  }
  decode(r) {
    return JSON.parse(r);
  }
}, Gh = class extends no {
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
  constructor(e, t = "ws://localhost:8080", {
    autoconnect: n = !0,
    reconnect: s = !0,
    reconnect_interval: i = 1e3,
    max_reconnects: o = 5,
    ...f
  } = {}, p, b) {
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
    this.webSocketFactory = e, this.queue = {}, this.rpc_id = 0, this.address = t, this.autoconnect = n, this.ready = !1, this.reconnect = s, this.reconnect_timer_id = void 0, this.reconnect_interval = i, this.max_reconnects = o, this.rest_options = f, this.current_reconnects = 0, this.generate_request_id = p || (() => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1), b ? this.dataPack = b : this.dataPack = new Hh(), this.autoconnect && this._connect(this.address, {
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
  call(e, t, n, s) {
    return !s && typeof n == "object" && (s = n, n = null), new Promise((i, o) => {
      if (!this.ready) return o(new Error("socket not ready"));
      const f = this.generate_request_id(e, t), p = {
        jsonrpc: "2.0",
        method: e,
        params: t || void 0,
        id: f
      };
      this.socket.send(this.dataPack.encode(p), s, (b) => {
        if (b) return o(b);
        this.queue[f] = { promise: [i, o] }, n && (this.queue[f].timeout = setTimeout(() => {
          delete this.queue[f], o(new Error("reply timeout"));
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
  async login(e) {
    const t = await this.call("rpc.login", e);
    if (!t) throw new Error("authentication failed");
    return t;
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
  notify(e, t) {
    return new Promise((n, s) => {
      if (!this.ready) return s(new Error("socket not ready"));
      const i = {
        jsonrpc: "2.0",
        method: e,
        params: t
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
  async subscribe(e) {
    typeof e == "string" && (e = [e]);
    const t = await this.call("rpc.on", e);
    if (typeof e == "string" && t[e] !== "ok")
      throw new Error(
        "Failed subscribing to an event '" + e + "' with: " + t[e]
      );
    return t;
  }
  /**
  * Unsubscribes from a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */
  async unsubscribe(e) {
    typeof e == "string" && (e = [e]);
    const t = await this.call("rpc.off", e);
    if (typeof e == "string" && t[e] !== "ok")
      throw new Error("Failed unsubscribing from an event with: " + t);
    return t;
  }
  /**
  * Closes a WebSocket connection gracefully.
  * @method
  * @param {Number} code - socket close code
  * @param {String} data - optional data to be sent before closing
  * @return {Undefined}
  */
  close(e, t) {
    this.socket.close(e || 1e3, t);
  }
  /**
  * Enable / disable automatic reconnection.
  * @method
  * @param {Boolean} reconnect - enable / disable reconnection
  * @return {Undefined}
  */
  setAutoReconnect(e) {
    this.reconnect = e;
  }
  /**
  * Set the interval between reconnection attempts.
  * @method
  * @param {Number} interval - reconnection interval in milliseconds
  * @return {Undefined}
  */
  setReconnectInterval(e) {
    this.reconnect_interval = e;
  }
  /**
  * Set the maximum number of reconnection attempts.
  * @method
  * @param {Number} max_reconnects - maximum reconnection attempts
  * @return {Undefined}
  */
  setMaxReconnects(e) {
    this.max_reconnects = e;
  }
  /**
  * Connection/Message handler.
  * @method
  * @private
  * @param {String} address - WebSocket API address
  * @param {Object} options - ws options object
  * @return {Undefined}
  */
  _connect(e, t) {
    clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(e, t), this.socket.addEventListener("open", () => {
      this.ready = !0, this.emit("open"), this.current_reconnects = 0;
    }), this.socket.addEventListener("message", ({ data: n }) => {
      n instanceof ArrayBuffer && (n = yt.Buffer.from(n).toString());
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
        () => this._connect(e, t),
        this.reconnect_interval
      )));
    });
  }
};
class ro extends ws {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, Bo(e);
    const n = ai(t);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? e.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = e.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), an(i);
  }
  update(e) {
    return Pn(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Pn(this), wn(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: t, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: f } = this;
    return e = e, e.finished = s, e.destroyed = i, e.blockLen = o, e.outputLen = f, e.oHash = t._cloneInto(e.oHash), e.iHash = n._cloneInto(e.iHash), e;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const io = (r, e, t) => new ro(r, e).update(t).digest();
io.create = (r, e) => new ro(r, e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ss(r) {
  r.lowS !== void 0 && He("lowS", r.lowS), r.prehash !== void 0 && He("prehash", r.prehash);
}
function Vh(r) {
  const e = hi(r);
  bn(e, {
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
  const { endo: t, Fp: n, a: s } = e;
  if (t) {
    if (!n.eql(s, n.ZERO))
      throw new Error("invalid endo: CURVE.a must be 0");
    if (typeof t != "object" || typeof t.beta != "bigint" || typeof t.splitScalar != "function")
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
  }
  return Object.freeze({ ...e });
}
class Kh extends Error {
  constructor(e = "") {
    super(e);
  }
}
const Ce = {
  // asn.1 DER encoding utils
  Err: Kh,
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (r, e) => {
      const { Err: t } = Ce;
      if (r < 0 || r > 256)
        throw new t("tlv.encode: wrong tag");
      if (e.length & 1)
        throw new t("tlv.encode: unpadded data");
      const n = e.length / 2, s = Cn(n);
      if (s.length / 2 & 128)
        throw new t("tlv.encode: long form length too big");
      const i = n > 127 ? Cn(s.length / 2 | 128) : "";
      return Cn(r) + i + s + e;
    },
    // v - value, l - left bytes (unparsed)
    decode(r, e) {
      const { Err: t } = Ce;
      let n = 0;
      if (r < 0 || r > 256)
        throw new t("tlv.encode: wrong tag");
      if (e.length < 2 || e[n++] !== r)
        throw new t("tlv.decode: wrong tlv");
      const s = e[n++], i = !!(s & 128);
      let o = 0;
      if (!i)
        o = s;
      else {
        const p = s & 127;
        if (!p)
          throw new t("tlv.decode(long): indefinite length not supported");
        if (p > 4)
          throw new t("tlv.decode(long): byte length is too big");
        const b = e.subarray(n, n + p);
        if (b.length !== p)
          throw new t("tlv.decode: length bytes not complete");
        if (b[0] === 0)
          throw new t("tlv.decode(long): zero leftmost byte");
        for (const v of b)
          o = o << 8 | v;
        if (n += p, o < 128)
          throw new t("tlv.decode(long): not minimal encoding");
      }
      const f = e.subarray(n, n + o);
      if (f.length !== o)
        throw new t("tlv.decode: wrong value length");
      return { v: f, l: e.subarray(n + o) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(r) {
      const { Err: e } = Ce;
      if (r < Me)
        throw new e("integer: negative integers are not allowed");
      let t = Cn(r);
      if (Number.parseInt(t[0], 16) & 8 && (t = "00" + t), t.length & 1)
        throw new e("unexpected DER parsing assertion: unpadded hex");
      return t;
    },
    decode(r) {
      const { Err: e } = Ce;
      if (r[0] & 128)
        throw new e("invalid signature integer: negative");
      if (r[0] === 0 && !(r[1] & 128))
        throw new e("invalid signature integer: unnecessary leading zero");
      return We(r);
    }
  },
  toSig(r) {
    const { Err: e, _int: t, _tlv: n } = Ce, s = Pt("signature", r), { v: i, l: o } = n.decode(48, s);
    if (o.length)
      throw new e("invalid signature: left bytes after parsing");
    const { v: f, l: p } = n.decode(2, i), { v: b, l: v } = n.decode(2, p);
    if (v.length)
      throw new e("invalid signature: left bytes after parsing");
    return { r: t.decode(f), s: t.decode(b) };
  },
  hexFromSig(r) {
    const { _tlv: e, _int: t } = Ce, n = e.encode(2, t.encode(r.r)), s = e.encode(2, t.encode(r.s)), i = n + s;
    return e.encode(48, i);
  }
};
function Gr(r, e) {
  return cn(An(r, e));
}
const Me = BigInt(0), ie = BigInt(1);
BigInt(2);
const Vr = BigInt(3), Wh = BigInt(4);
function jh(r) {
  const e = Vh(r), { Fp: t } = e, n = Sn(e.n, e.nBitLength), s = e.toBytes || ((K, $, j) => {
    const J = $.toAffine();
    return un(Uint8Array.from([4]), t.toBytes(J.x), t.toBytes(J.y));
  }), i = e.fromBytes || ((K) => {
    const $ = K.subarray(1), j = t.fromBytes($.subarray(0, t.BYTES)), J = t.fromBytes($.subarray(t.BYTES, 2 * t.BYTES));
    return { x: j, y: J };
  });
  function o(K) {
    const { a: $, b: j } = e, J = t.sqr(K), st = t.mul(J, K);
    return t.add(t.add(st, t.mul(K, $)), j);
  }
  function f(K, $) {
    const j = t.sqr($), J = o(K);
    return t.eql(j, J);
  }
  if (!f(e.Gx, e.Gy))
    throw new Error("bad curve params: generator point");
  const p = t.mul(t.pow(e.a, Vr), Wh), b = t.mul(t.sqr(e.b), BigInt(27));
  if (t.is0(t.add(p, b)))
    throw new Error("bad curve params: a or b");
  function v(K) {
    return fi(K, ie, e.n);
  }
  function x(K) {
    const { allowedPrivateKeyLengths: $, nByteLength: j, wrapPrivateKey: J, n: st } = e;
    if ($ && typeof K != "bigint") {
      if (En(K) && (K = cn(K)), typeof K != "string" || !$.includes(K.length))
        throw new Error("invalid private key");
      K = K.padStart(j * 2, "0");
    }
    let ot;
    try {
      ot = typeof K == "bigint" ? K : We(Pt("private key", K, j));
    } catch {
      throw new Error("invalid private key, expected hex or " + j + " bytes, got " + typeof K);
    }
    return J && (ot = Bt(ot, st)), Ae("private key", ot, ie, st), ot;
  }
  function U(K) {
    if (!(K instanceof N))
      throw new Error("ProjectivePoint expected");
  }
  const B = $n((K, $) => {
    const { px: j, py: J, pz: st } = K;
    if (t.eql(st, t.ONE))
      return { x: j, y: J };
    const ot = K.is0();
    $ == null && ($ = ot ? t.ONE : t.inv(st));
    const W = t.mul(j, $), D = t.mul(J, $), F = t.mul(st, $);
    if (ot)
      return { x: t.ZERO, y: t.ZERO };
    if (!t.eql(F, t.ONE))
      throw new Error("invZ was invalid");
    return { x: W, y: D };
  }), k = $n((K) => {
    if (K.is0()) {
      if (e.allowInfinityPoint && !t.is0(K.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: $, y: j } = K.toAffine();
    if (!t.isValid($) || !t.isValid(j))
      throw new Error("bad point: x or y not FE");
    if (!f($, j))
      throw new Error("bad point: equation left != right");
    if (!K.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class N {
    constructor($, j, J) {
      if ($ == null || !t.isValid($))
        throw new Error("x required");
      if (j == null || !t.isValid(j) || t.is0(j))
        throw new Error("y required");
      if (J == null || !t.isValid(J))
        throw new Error("z required");
      this.px = $, this.py = j, this.pz = J, Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine($) {
      const { x: j, y: J } = $ || {};
      if (!$ || !t.isValid(j) || !t.isValid(J))
        throw new Error("invalid affine point");
      if ($ instanceof N)
        throw new Error("projective point not allowed");
      const st = (ot) => t.eql(ot, t.ZERO);
      return st(j) && st(J) ? N.ZERO : new N(j, J, t.ONE);
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
    static normalizeZ($) {
      const j = li(t, $.map((J) => J.pz));
      return $.map((J, st) => J.toAffine(j[st])).map(N.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex($) {
      const j = N.fromAffine(i(Pt("pointHex", $)));
      return j.assertValidity(), j;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey($) {
      return N.BASE.multiply(x($));
    }
    // Multiscalar Multiplication
    static msm($, j) {
      return Ps(N, n, $, j);
    }
    // "Private method", don't use it directly
    _setWindowSize($) {
      Z.setWindowSize(this, $);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      k(this);
    }
    hasEvenY() {
      const { y: $ } = this.toAffine();
      if (t.isOdd)
        return !t.isOdd($);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals($) {
      U($);
      const { px: j, py: J, pz: st } = this, { px: ot, py: W, pz: D } = $, F = t.eql(t.mul(j, D), t.mul(ot, st)), V = t.eql(t.mul(J, D), t.mul(W, st));
      return F && V;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new N(this.px, t.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: $, b: j } = e, J = t.mul(j, Vr), { px: st, py: ot, pz: W } = this;
      let D = t.ZERO, F = t.ZERO, V = t.ZERO, R = t.mul(st, st), a = t.mul(ot, ot), d = t.mul(W, W), _ = t.mul(st, ot);
      return _ = t.add(_, _), V = t.mul(st, W), V = t.add(V, V), D = t.mul($, V), F = t.mul(J, d), F = t.add(D, F), D = t.sub(a, F), F = t.add(a, F), F = t.mul(D, F), D = t.mul(_, D), V = t.mul(J, V), d = t.mul($, d), _ = t.sub(R, d), _ = t.mul($, _), _ = t.add(_, V), V = t.add(R, R), R = t.add(V, R), R = t.add(R, d), R = t.mul(R, _), F = t.add(F, R), d = t.mul(ot, W), d = t.add(d, d), R = t.mul(d, _), D = t.sub(D, R), V = t.mul(d, a), V = t.add(V, V), V = t.add(V, V), new N(D, F, V);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add($) {
      U($);
      const { px: j, py: J, pz: st } = this, { px: ot, py: W, pz: D } = $;
      let F = t.ZERO, V = t.ZERO, R = t.ZERO;
      const a = e.a, d = t.mul(e.b, Vr);
      let _ = t.mul(j, ot), A = t.mul(J, W), w = t.mul(st, D), E = t.add(j, J), I = t.add(ot, W);
      E = t.mul(E, I), I = t.add(_, A), E = t.sub(E, I), I = t.add(j, st);
      let m = t.add(ot, D);
      return I = t.mul(I, m), m = t.add(_, w), I = t.sub(I, m), m = t.add(J, st), F = t.add(W, D), m = t.mul(m, F), F = t.add(A, w), m = t.sub(m, F), R = t.mul(a, I), F = t.mul(d, w), R = t.add(F, R), F = t.sub(A, R), R = t.add(A, R), V = t.mul(F, R), A = t.add(_, _), A = t.add(A, _), w = t.mul(a, w), I = t.mul(d, I), A = t.add(A, w), w = t.sub(_, w), w = t.mul(a, w), I = t.add(I, w), _ = t.mul(A, I), V = t.add(V, _), _ = t.mul(m, I), F = t.mul(E, F), F = t.sub(F, _), _ = t.mul(E, A), R = t.mul(m, R), R = t.add(R, _), new N(F, V, R);
    }
    subtract($) {
      return this.add($.negate());
    }
    is0() {
      return this.equals(N.ZERO);
    }
    wNAF($) {
      return Z.wNAFCached(this, $, N.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe($) {
      const { endo: j, n: J } = e;
      Ae("scalar", $, Me, J);
      const st = N.ZERO;
      if ($ === Me)
        return st;
      if (this.is0() || $ === ie)
        return this;
      if (!j || Z.hasPrecomputes(this))
        return Z.wNAFCachedUnsafe(this, $, N.normalizeZ);
      let { k1neg: ot, k1: W, k2neg: D, k2: F } = j.splitScalar($), V = st, R = st, a = this;
      for (; W > Me || F > Me; )
        W & ie && (V = V.add(a)), F & ie && (R = R.add(a)), a = a.double(), W >>= ie, F >>= ie;
      return ot && (V = V.negate()), D && (R = R.negate()), R = new N(t.mul(R.px, j.beta), R.py, R.pz), V.add(R);
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
    multiply($) {
      const { endo: j, n: J } = e;
      Ae("scalar", $, ie, J);
      let st, ot;
      if (j) {
        const { k1neg: W, k1: D, k2neg: F, k2: V } = j.splitScalar($);
        let { p: R, f: a } = this.wNAF(D), { p: d, f: _ } = this.wNAF(V);
        R = Z.constTimeNegate(W, R), d = Z.constTimeNegate(F, d), d = new N(t.mul(d.px, j.beta), d.py, d.pz), st = R.add(d), ot = a.add(_);
      } else {
        const { p: W, f: D } = this.wNAF($);
        st = W, ot = D;
      }
      return N.normalizeZ([st, ot])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe($, j, J) {
      const st = N.BASE, ot = (D, F) => F === Me || F === ie || !D.equals(st) ? D.multiplyUnsafe(F) : D.multiply(F), W = ot(this, j).add(ot($, J));
      return W.is0() ? void 0 : W;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine($) {
      return B(this, $);
    }
    isTorsionFree() {
      const { h: $, isTorsionFree: j } = e;
      if ($ === ie)
        return !0;
      if (j)
        return j(N, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: $, clearCofactor: j } = e;
      return $ === ie ? this : j ? j(N, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes($ = !0) {
      return He("isCompressed", $), this.assertValidity(), s(N, this, $);
    }
    toHex($ = !0) {
      return He("isCompressed", $), cn(this.toRawBytes($));
    }
  }
  N.BASE = new N(e.Gx, e.Gy, t.ONE), N.ZERO = new N(t.ZERO, t.ONE, t.ZERO);
  const { endo: M, nBitLength: Y } = e, Z = Ds(N, M ? Math.ceil(Y / 2) : Y);
  return {
    CURVE: e,
    ProjectivePoint: N,
    normPrivateKeyToScalar: x,
    weierstrassEquation: o,
    isWithinCurveOrder: v
  };
}
function Yh(r) {
  const e = hi(r);
  return bn(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function Xh(r) {
  const e = Yh(r), { Fp: t, n, nByteLength: s, nBitLength: i } = e, o = t.BYTES + 1, f = 2 * t.BYTES + 1;
  function p(d) {
    return Bt(d, n);
  }
  function b(d) {
    return Jr(d, n);
  }
  const { ProjectivePoint: v, normPrivateKeyToScalar: x, weierstrassEquation: U, isWithinCurveOrder: B } = jh({
    ...e,
    toBytes(d, _, A) {
      const w = _.toAffine(), E = t.toBytes(w.x), I = un;
      return He("isCompressed", A), A ? I(Uint8Array.from([_.hasEvenY() ? 2 : 3]), E) : I(Uint8Array.from([4]), E, t.toBytes(w.y));
    },
    fromBytes(d) {
      const _ = d.length, A = d[0], w = d.subarray(1);
      if (_ === o && (A === 2 || A === 3)) {
        const E = We(w);
        if (!fi(E, ie, t.ORDER))
          throw new Error("Point is not on curve");
        const I = U(E);
        let m;
        try {
          m = t.sqrt(I);
        } catch (y) {
          const O = y instanceof Error ? ": " + y.message : "";
          throw new Error("Point is not on curve" + O);
        }
        const c = (m & ie) === ie;
        return (A & 1) === 1 !== c && (m = t.neg(m)), { x: E, y: m };
      } else if (_ === f && A === 4) {
        const E = t.fromBytes(w.subarray(0, t.BYTES)), I = t.fromBytes(w.subarray(t.BYTES, 2 * t.BYTES));
        return { x: E, y: I };
      } else {
        const E = o, I = f;
        throw new Error("invalid Point, expected length of " + E + ", or uncompressed " + I + ", got " + _);
      }
    }
  });
  function k(d) {
    const _ = n >> ie;
    return d > _;
  }
  function N(d) {
    return k(d) ? p(-d) : d;
  }
  const M = (d, _, A) => We(d.slice(_, A));
  class Y {
    constructor(_, A, w) {
      Ae("r", _, ie, n), Ae("s", A, ie, n), this.r = _, this.s = A, w != null && (this.recovery = w), Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(_) {
      const A = s;
      return _ = Pt("compactSignature", _, A * 2), new Y(M(_, 0, A), M(_, A, 2 * A));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(_) {
      const { r: A, s: w } = Ce.toSig(Pt("DER", _));
      return new Y(A, w);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(_) {
      return new Y(this.r, this.s, _);
    }
    recoverPublicKey(_) {
      const { r: A, s: w, recovery: E } = this, I = st(Pt("msgHash", _));
      if (E == null || ![0, 1, 2, 3].includes(E))
        throw new Error("recovery id invalid");
      const m = E === 2 || E === 3 ? A + e.n : A;
      if (m >= t.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const c = (E & 1) === 0 ? "02" : "03", u = v.fromHex(c + Gr(m, t.BYTES)), y = b(m), O = p(-I * y), L = p(w * y), H = v.BASE.multiplyAndAddUnsafe(u, O, L);
      if (!H)
        throw new Error("point at infinify");
      return H.assertValidity(), H;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return k(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Y(this.r, p(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Fn(this.toDERHex());
    }
    toDERHex() {
      return Ce.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Fn(this.toCompactHex());
    }
    toCompactHex() {
      const _ = s;
      return Gr(this.r, _) + Gr(this.s, _);
    }
  }
  const Z = {
    isValidPrivateKey(d) {
      try {
        return x(d), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: x,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const d = Ms(e.n);
      return fa(e.randomBytes(d), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(d = 8, _ = v.BASE) {
      return _._setWindowSize(d), _.multiply(BigInt(3)), _;
    }
  };
  function K(d, _ = !0) {
    return v.fromPrivateKey(d).toRawBytes(_);
  }
  function $(d) {
    if (typeof d == "bigint")
      return !1;
    if (d instanceof v)
      return !0;
    const A = Pt("key", d).length, w = t.BYTES, E = w + 1, I = 2 * w + 1;
    if (!(e.allowedPrivateKeyLengths || s === E))
      return A === E || A === I;
  }
  function j(d, _, A = !0) {
    if ($(d) === !0)
      throw new Error("first arg must be private key");
    if ($(_) === !1)
      throw new Error("second arg must be public key");
    return v.fromHex(_).multiply(x(d)).toRawBytes(A);
  }
  const J = e.bits2int || function(d) {
    if (d.length > 8192)
      throw new Error("input is too large");
    const _ = We(d), A = d.length * 8 - i;
    return A > 0 ? _ >> BigInt(A) : _;
  }, st = e.bits2int_modN || function(d) {
    return p(J(d));
  }, ot = Zn(i);
  function W(d) {
    return Ae("num < 2^" + i, d, Me, ot), An(d, s);
  }
  function D(d, _, A = F) {
    if (["recovered", "canonical"].some((it) => it in A))
      throw new Error("sign() legacy options not supported");
    const { hash: w, randomBytes: E } = e;
    let { lowS: I, prehash: m, extraEntropy: c } = A;
    I == null && (I = !0), d = Pt("msgHash", d), ss(A), m && (d = Pt("prehashed msgHash", w(d)));
    const u = st(d), y = x(_), O = [W(y), W(u)];
    if (c != null && c !== !1) {
      const it = c === !0 ? E(t.BYTES) : c;
      O.push(Pt("extraEntropy", it));
    }
    const L = un(...O), H = u;
    function tt(it) {
      const Et = J(it);
      if (!B(Et))
        return;
      const pt = b(Et), dt = v.BASE.multiply(Et).toAffine(), vt = p(dt.x);
      if (vt === Me)
        return;
      const _t = p(pt * p(H + vt * y));
      if (_t === Me)
        return;
      let wt = (dt.x === vt ? 0 : 2) | Number(dt.y & ie), _e = _t;
      return I && k(_t) && (_e = N(_t), wt ^= 1), new Y(vt, _e, wt);
    }
    return { seed: L, k2sig: tt };
  }
  const F = { lowS: e.lowS, prehash: !1 }, V = { lowS: e.lowS, prehash: !1 };
  function R(d, _, A = F) {
    const { seed: w, k2sig: E } = D(d, _, A), I = e;
    return ta(I.hash.outputLen, I.nByteLength, I.hmac)(w, E);
  }
  v.BASE._setWindowSize(8);
  function a(d, _, A, w = V) {
    var wt;
    const E = d;
    _ = Pt("msgHash", _), A = Pt("publicKey", A);
    const { lowS: I, prehash: m, format: c } = w;
    if (ss(w), "strict" in w)
      throw new Error("options.strict was renamed to lowS");
    if (c !== void 0 && c !== "compact" && c !== "der")
      throw new Error("format must be compact or der");
    const u = typeof E == "string" || En(E), y = !u && !c && typeof E == "object" && E !== null && typeof E.r == "bigint" && typeof E.s == "bigint";
    if (!u && !y)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let O, L;
    try {
      if (y && (O = new Y(E.r, E.s)), u) {
        try {
          c !== "compact" && (O = Y.fromDER(E));
        } catch (_e) {
          if (!(_e instanceof Ce.Err))
            throw _e;
        }
        !O && c !== "der" && (O = Y.fromCompact(E));
      }
      L = v.fromHex(A);
    } catch {
      return !1;
    }
    if (!O || I && O.hasHighS())
      return !1;
    m && (_ = e.hash(_));
    const { r: H, s: tt } = O, it = st(_), Et = b(tt), pt = p(it * Et), dt = p(H * Et), vt = (wt = v.BASE.multiplyAndAddUnsafe(L, pt, dt)) == null ? void 0 : wt.toAffine();
    return vt ? p(vt.x) === H : !1;
  }
  return {
    CURVE: e,
    getPublicKey: K,
    getSharedSecret: j,
    sign: R,
    verify: a,
    ProjectivePoint: v,
    Signature: Y,
    utils: Z
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Zh(r) {
  return {
    hash: r,
    hmac: (e, ...t) => io(r, e, Mo(...t)),
    randomBytes: As
  };
}
function Jh(r, e) {
  const t = (n) => Xh({ ...r, ...Zh(n) });
  return { ...t(e), create: t };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const so = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), os = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Qh = BigInt(0), td = BigInt(1), ti = BigInt(2), as = (r, e) => (r + e / ti) / e;
function ed(r) {
  const e = so, t = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), f = BigInt(44), p = BigInt(88), b = r * r * r % e, v = b * b * r % e, x = Ut(v, t, e) * v % e, U = Ut(x, t, e) * v % e, B = Ut(U, ti, e) * b % e, k = Ut(B, s, e) * B % e, N = Ut(k, i, e) * k % e, M = Ut(N, f, e) * N % e, Y = Ut(M, p, e) * M % e, Z = Ut(Y, f, e) * N % e, K = Ut(Z, t, e) * v % e, $ = Ut(K, o, e) * k % e, j = Ut($, n, e) * b % e, J = Ut(j, ti, e);
  if (!ei.eql(ei.sqr(J), r))
    throw new Error("Cannot find square root");
  return J;
}
const ei = Sn(so, void 0, void 0, { sqrt: ed }), nd = Jh({
  a: Qh,
  b: BigInt(7),
  Fp: ei,
  n: os,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  endo: {
    // Endomorphism, see above
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const e = os, t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -td * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = t, o = BigInt("0x100000000000000000000000000000000"), f = as(i * r, e), p = as(-n * r, e);
      let b = Bt(r - f * t - p * s, e), v = Bt(-f * n - p * i, e);
      const x = b > o, U = v > o;
      if (x && (b = e - b), U && (v = e - v), b > o || v > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: x, k1: b, k2neg: U, k2: v };
    }
  }
}, vs);
function cs(r) {
  try {
    return pi.ExtendedPoint.fromHex(r), !0;
  } catch {
    return !1;
  }
}
const rd = (r, e) => pi.sign(r, e.slice(0, 32)), id = pi.verify, ln = (r) => yt.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? yt.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : yt.Buffer.from(r);
class sd {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return yt.Buffer.from(kr.serialize(Dn, this));
  }
  static decode(e) {
    return kr.deserialize(Dn, this, e);
  }
  static decodeUnchecked(e) {
    return kr.deserializeUnchecked(Dn, this, e);
  }
}
const Dn = /* @__PURE__ */ new Map();
var oo;
const od = 32, Ge = 32;
function ad(r) {
  return r._bn !== void 0;
}
let us = 1;
class ft extends sd {
  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(e) {
    if (super({}), this._bn = void 0, ad(e))
      this._bn = e._bn;
    else {
      if (typeof e == "string") {
        const t = oe.decode(e);
        if (t.length != Ge)
          throw new Error("Invalid public key input");
        this._bn = new Wi(t);
      } else
        this._bn = new Wi(e);
      if (this._bn.byteLength() > Ge)
        throw new Error("Invalid public key input");
    }
  }
  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const e = new ft(us);
    return us += 1, new ft(e.toBuffer());
  }
  /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */
  /**
   * Checks if two publicKeys are equal
   */
  equals(e) {
    return this._bn.eq(e._bn);
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
    const e = this.toBuffer();
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  /**
   * Return the Buffer representation of the public key in big endian
   */
  toBuffer() {
    const e = this._bn.toArrayLike(yt.Buffer);
    if (e.length === Ge)
      return e;
    const t = yt.Buffer.alloc(32);
    return e.copy(t, 32 - e.length), t;
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
  static async createWithSeed(e, t, n) {
    const s = yt.Buffer.concat([e.toBuffer(), yt.Buffer.from(t), n.toBuffer()]), i = Zi(s);
    return new ft(i);
  }
  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(e, t) {
    let n = yt.Buffer.alloc(0);
    e.forEach(function(i) {
      if (i.length > od)
        throw new TypeError("Max seed length exceeded");
      n = yt.Buffer.concat([n, ln(i)]);
    }), n = yt.Buffer.concat([n, t.toBuffer(), yt.Buffer.from("ProgramDerivedAddress")]);
    const s = Zi(n);
    if (cs(s))
      throw new Error("Invalid seeds, address must fall off the curve");
    return new ft(s);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(e, t) {
    return this.createProgramAddressSync(e, t);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(e, t) {
    let n = 255, s;
    for (; n != 0; ) {
      try {
        const i = e.concat(yt.Buffer.from([n]));
        s = this.createProgramAddressSync(i, t);
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
  static async findProgramAddress(e, t) {
    return this.findProgramAddressSync(e, t);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(e) {
    const t = new ft(e);
    return cs(t.toBytes());
  }
}
oo = ft;
ft.default = new oo("11111111111111111111111111111111");
Dn.set(ft, {
  kind: "struct",
  fields: [["_bn", "u256"]]
});
new ft("BPFLoader1111111111111111111111111111111111");
const on = 1232, ao = 127, co = 64;
class uo extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(uo.prototype, "name", {
  value: "TransactionExpiredBlockheightExceededError"
});
class fo extends Error {
  constructor(e, t) {
    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(fo.prototype, "name", {
  value: "TransactionExpiredTimeoutError"
});
class mn extends Error {
  constructor(e) {
    super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e;
  }
}
Object.defineProperty(mn.prototype, "name", {
  value: "TransactionExpiredNonceInvalidError"
});
class Wn {
  constructor(e, t) {
    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t;
  }
  keySegments() {
    const e = [this.staticAccountKeys];
    return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e;
  }
  get(e) {
    for (const t of this.keySegments()) {
      if (e < t.length)
        return t[e];
      e -= t.length;
    }
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(e) {
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
    return e.map((i) => ({
      programIdIndex: s(i.programId),
      accountKeyIndexes: i.keys.map((o) => s(o.pubkey)),
      data: i.data
    }));
  }
}
const Rt = (r = "publicKey") => T.blob(32, r), rn = (r = "string") => {
  const e = T.struct([T.u32("length"), T.u32("lengthPadding"), T.blob(T.offset(T.u32(), -8), "chars")], r), t = e.decode.bind(e), n = e.encode.bind(e), s = e;
  return s.decode = (i, o) => t(i, o).chars.toString(), s.encode = (i, o, f) => {
    const p = {
      chars: yt.Buffer.from(i, "utf8")
    };
    return n(p, o, f);
  }, s.alloc = (i) => T.u32().span + T.u32().span + yt.Buffer.from(i, "utf8").length, s;
}, cd = (r = "authorized") => T.struct([Rt("staker"), Rt("withdrawer")], r), ud = (r = "lockup") => T.struct([T.ns64("unixTimestamp"), T.ns64("epoch"), Rt("custodian")], r), fd = (r = "voteInit") => T.struct([Rt("nodePubkey"), Rt("authorizedVoter"), Rt("authorizedWithdrawer"), T.u8("commission")], r), ld = (r = "voteAuthorizeWithSeedArgs") => T.struct([T.u32("voteAuthorizationType"), Rt("currentAuthorityDerivedKeyOwnerPubkey"), rn("currentAuthorityDerivedKeySeed"), Rt("newAuthorized")], r);
function ye(r) {
  let e = 0, t = 0;
  for (; ; ) {
    let n = r.shift();
    if (e |= (n & 127) << t * 7, t += 1, (n & 128) === 0)
      break;
  }
  return e;
}
function Re(r, e) {
  let t = e;
  for (; ; ) {
    let n = t & 127;
    if (t >>= 7, t == 0) {
      r.push(n);
      break;
    } else
      n |= 128, r.push(n);
  }
}
function re(r, e) {
  if (!r)
    throw new Error(e || "Assertion failed");
}
class nr {
  constructor(e, t) {
    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t;
  }
  static compile(e, t) {
    const n = /* @__PURE__ */ new Map(), s = (o) => {
      const f = o.toBase58();
      let p = n.get(f);
      return p === void 0 && (p = {
        isSigner: !1,
        isWritable: !1,
        isInvoked: !1
      }, n.set(f, p)), p;
    }, i = s(t);
    i.isSigner = !0, i.isWritable = !0;
    for (const o of e) {
      s(o.programId).isInvoked = !0;
      for (const f of o.keys) {
        const p = s(f.pubkey);
        p.isSigner || (p.isSigner = f.isSigner), p.isWritable || (p.isWritable = f.isWritable);
      }
    }
    return new nr(t, n);
  }
  getMessageComponents() {
    const e = [...this.keyMetaMap.entries()];
    re(e.length <= 256, "Max static account keys length exceeded");
    const t = e.filter(([, p]) => p.isSigner && p.isWritable), n = e.filter(([, p]) => p.isSigner && !p.isWritable), s = e.filter(([, p]) => !p.isSigner && p.isWritable), i = e.filter(([, p]) => !p.isSigner && !p.isWritable), o = {
      numRequiredSignatures: t.length + n.length,
      numReadonlySignedAccounts: n.length,
      numReadonlyUnsignedAccounts: i.length
    };
    {
      re(t.length > 0, "Expected at least one writable signer key");
      const [p] = t[0];
      re(p === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
    }
    const f = [...t.map(([p]) => new ft(p)), ...n.map(([p]) => new ft(p)), ...s.map(([p]) => new ft(p)), ...i.map(([p]) => new ft(p))];
    return [o, f];
  }
  extractTableLookup(e) {
    const [t, n] = this.drainKeysFoundInLookupTable(e.state.addresses, (o) => !o.isSigner && !o.isInvoked && o.isWritable), [s, i] = this.drainKeysFoundInLookupTable(e.state.addresses, (o) => !o.isSigner && !o.isInvoked && !o.isWritable);
    if (!(t.length === 0 && s.length === 0))
      return [{
        accountKey: e.key,
        writableIndexes: t,
        readonlyIndexes: s
      }, {
        writable: n,
        readonly: i
      }];
  }
  /** @internal */
  drainKeysFoundInLookupTable(e, t) {
    const n = new Array(), s = new Array();
    for (const [i, o] of this.keyMetaMap.entries())
      if (t(o)) {
        const f = new ft(i), p = e.findIndex((b) => b.equals(f));
        p >= 0 && (re(p < 256, "Max lookup table index exceeded"), n.push(p), s.push(f), this.keyMetaMap.delete(i));
      }
    return [n, s];
  }
}
const lo = "Reached end of buffer unexpectedly";
function ke(r) {
  if (r.length === 0)
    throw new Error(lo);
  return r.shift();
}
function we(r, ...e) {
  const [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > r.length : t >= r.length)
    throw new Error(lo);
  return r.splice(...e);
}
class Ve {
  constructor(e) {
    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = /* @__PURE__ */ new Map(), this.header = e.header, this.accountKeys = e.accountKeys.map((t) => new ft(t)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
  }
  get version() {
    return "legacy";
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map((e) => ({
      programIdIndex: e.programIdIndex,
      accountKeyIndexes: e.accounts,
      data: oe.decode(e.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new Wn(this.staticAccountKeys);
  }
  static compile(e) {
    const t = nr.compile(e.instructions, e.payerKey), [n, s] = t.getMessageComponents(), o = new Wn(s).compileInstructions(e.instructions).map((f) => ({
      programIdIndex: f.programIdIndex,
      accounts: f.accountKeyIndexes,
      data: oe.encode(f.data)
    }));
    return new Ve({
      header: n,
      accountKeys: s,
      recentBlockhash: e.recentBlockhash,
      instructions: o
    });
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures;
    if (e >= this.header.numRequiredSignatures) {
      const n = e - t, i = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
      return n < i;
    } else {
      const n = t - this.header.numReadonlySignedAccounts;
      return e < n;
    }
  }
  isProgramId(e) {
    return this.indexToProgramIds.has(e);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((e, t) => !this.isProgramId(t));
  }
  serialize() {
    const e = this.accountKeys.length;
    let t = [];
    Re(t, e);
    const n = this.instructions.map((x) => {
      const {
        accounts: U,
        programIdIndex: B
      } = x, k = Array.from(oe.decode(x.data));
      let N = [];
      Re(N, U.length);
      let M = [];
      return Re(M, k.length), {
        programIdIndex: B,
        keyIndicesCount: yt.Buffer.from(N),
        keyIndices: U,
        dataLength: yt.Buffer.from(M),
        data: k
      };
    });
    let s = [];
    Re(s, n.length);
    let i = yt.Buffer.alloc(on);
    yt.Buffer.from(s).copy(i);
    let o = s.length;
    n.forEach((x) => {
      const B = T.struct([T.u8("programIdIndex"), T.blob(x.keyIndicesCount.length, "keyIndicesCount"), T.seq(T.u8("keyIndex"), x.keyIndices.length, "keyIndices"), T.blob(x.dataLength.length, "dataLength"), T.seq(T.u8("userdatum"), x.data.length, "data")]).encode(x, i, o);
      o += B;
    }), i = i.slice(0, o);
    const f = T.struct([T.blob(1, "numRequiredSignatures"), T.blob(1, "numReadonlySignedAccounts"), T.blob(1, "numReadonlyUnsignedAccounts"), T.blob(t.length, "keyCount"), T.seq(Rt("key"), e, "keys"), Rt("recentBlockhash")]), p = {
      numRequiredSignatures: yt.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: yt.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: yt.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: yt.Buffer.from(t),
      keys: this.accountKeys.map((x) => ln(x.toBytes())),
      recentBlockhash: oe.decode(this.recentBlockhash)
    };
    let b = yt.Buffer.alloc(2048);
    const v = f.encode(p, b);
    return i.copy(b, v), b.slice(0, v + i.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */
  static from(e) {
    let t = [...e];
    const n = ke(t);
    if (n !== (n & ao))
      throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
    const s = ke(t), i = ke(t), o = ye(t);
    let f = [];
    for (let U = 0; U < o; U++) {
      const B = we(t, 0, Ge);
      f.push(new ft(yt.Buffer.from(B)));
    }
    const p = we(t, 0, Ge), b = ye(t);
    let v = [];
    for (let U = 0; U < b; U++) {
      const B = ke(t), k = ye(t), N = we(t, 0, k), M = ye(t), Y = we(t, 0, M), Z = oe.encode(yt.Buffer.from(Y));
      v.push({
        programIdIndex: B,
        accounts: N,
        data: Z
      });
    }
    const x = {
      header: {
        numRequiredSignatures: n,
        numReadonlySignedAccounts: s,
        numReadonlyUnsignedAccounts: i
      },
      recentBlockhash: oe.encode(yt.Buffer.from(p)),
      accountKeys: f,
      instructions: v
    };
    return new Ve(x);
  }
}
class jn {
  constructor(e) {
    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let e = 0;
    for (const t of this.addressTableLookups)
      e += t.readonlyIndexes.length + t.writableIndexes.length;
    return e;
  }
  getAccountKeys(e) {
    let t;
    if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length)
        throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
      t = e.accountKeysFromLookups;
    } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts)
      t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
    else if (this.addressTableLookups.length > 0)
      throw new Error("Failed to get account keys because address table lookups were not resolved");
    return new Wn(this.staticAccountKeys, t);
  }
  isAccountSigner(e) {
    return e < this.header.numRequiredSignatures;
  }
  isAccountWritable(e) {
    const t = this.header.numRequiredSignatures, n = this.staticAccountKeys.length;
    if (e >= n) {
      const s = e - n, i = this.addressTableLookups.reduce((o, f) => o + f.writableIndexes.length, 0);
      return s < i;
    } else if (e >= this.header.numRequiredSignatures) {
      const s = e - t, o = n - t - this.header.numReadonlyUnsignedAccounts;
      return s < o;
    } else {
      const s = t - this.header.numReadonlySignedAccounts;
      return e < s;
    }
  }
  resolveAddressTableLookups(e) {
    const t = {
      writable: [],
      readonly: []
    };
    for (const n of this.addressTableLookups) {
      const s = e.find((i) => i.key.equals(n.accountKey));
      if (!s)
        throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
      for (const i of n.writableIndexes)
        if (i < s.state.addresses.length)
          t.writable.push(s.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
      for (const i of n.readonlyIndexes)
        if (i < s.state.addresses.length)
          t.readonly.push(s.state.addresses[i]);
        else
          throw new Error(`Failed to find address for index ${i} in address lookup table ${n.accountKey.toBase58()}`);
    }
    return t;
  }
  static compile(e) {
    const t = nr.compile(e.instructions, e.payerKey), n = new Array(), s = {
      writable: new Array(),
      readonly: new Array()
    }, i = e.addressLookupTableAccounts || [];
    for (const v of i) {
      const x = t.extractTableLookup(v);
      if (x !== void 0) {
        const [U, {
          writable: B,
          readonly: k
        }] = x;
        n.push(U), s.writable.push(...B), s.readonly.push(...k);
      }
    }
    const [o, f] = t.getMessageComponents(), b = new Wn(f, s).compileInstructions(e.instructions);
    return new jn({
      header: o,
      staticAccountKeys: f,
      recentBlockhash: e.recentBlockhash,
      compiledInstructions: b,
      addressTableLookups: n
    });
  }
  serialize() {
    const e = Array();
    Re(e, this.staticAccountKeys.length);
    const t = this.serializeInstructions(), n = Array();
    Re(n, this.compiledInstructions.length);
    const s = this.serializeAddressTableLookups(), i = Array();
    Re(i, this.addressTableLookups.length);
    const o = T.struct([T.u8("prefix"), T.struct([T.u8("numRequiredSignatures"), T.u8("numReadonlySignedAccounts"), T.u8("numReadonlyUnsignedAccounts")], "header"), T.blob(e.length, "staticAccountKeysLength"), T.seq(Rt(), this.staticAccountKeys.length, "staticAccountKeys"), Rt("recentBlockhash"), T.blob(n.length, "instructionsLength"), T.blob(t.length, "serializedInstructions"), T.blob(i.length, "addressTableLookupsLength"), T.blob(s.length, "serializedAddressTableLookups")]), f = new Uint8Array(on), b = o.encode({
      prefix: 128,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(e),
      staticAccountKeys: this.staticAccountKeys.map((v) => v.toBytes()),
      recentBlockhash: oe.decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(n),
      serializedInstructions: t,
      addressTableLookupsLength: new Uint8Array(i),
      serializedAddressTableLookups: s
    }, f);
    return f.slice(0, b);
  }
  serializeInstructions() {
    let e = 0;
    const t = new Uint8Array(on);
    for (const n of this.compiledInstructions) {
      const s = Array();
      Re(s, n.accountKeyIndexes.length);
      const i = Array();
      Re(i, n.data.length);
      const o = T.struct([T.u8("programIdIndex"), T.blob(s.length, "encodedAccountKeyIndexesLength"), T.seq(T.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"), T.blob(i.length, "encodedDataLength"), T.blob(n.data.length, "data")]);
      e += o.encode({
        programIdIndex: n.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(s),
        accountKeyIndexes: n.accountKeyIndexes,
        encodedDataLength: new Uint8Array(i),
        data: n.data
      }, t, e);
    }
    return t.slice(0, e);
  }
  serializeAddressTableLookups() {
    let e = 0;
    const t = new Uint8Array(on);
    for (const n of this.addressTableLookups) {
      const s = Array();
      Re(s, n.writableIndexes.length);
      const i = Array();
      Re(i, n.readonlyIndexes.length);
      const o = T.struct([Rt("accountKey"), T.blob(s.length, "encodedWritableIndexesLength"), T.seq(T.u8(), n.writableIndexes.length, "writableIndexes"), T.blob(i.length, "encodedReadonlyIndexesLength"), T.seq(T.u8(), n.readonlyIndexes.length, "readonlyIndexes")]);
      e += o.encode({
        accountKey: n.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(s),
        writableIndexes: n.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(i),
        readonlyIndexes: n.readonlyIndexes
      }, t, e);
    }
    return t.slice(0, e);
  }
  static deserialize(e) {
    let t = [...e];
    const n = ke(t), s = n & ao;
    re(n !== s, "Expected versioned message but received legacy message");
    const i = s;
    re(i === 0, `Expected versioned message with version 0 but found version ${i}`);
    const o = {
      numRequiredSignatures: ke(t),
      numReadonlySignedAccounts: ke(t),
      numReadonlyUnsignedAccounts: ke(t)
    }, f = [], p = ye(t);
    for (let k = 0; k < p; k++)
      f.push(new ft(we(t, 0, Ge)));
    const b = oe.encode(we(t, 0, Ge)), v = ye(t), x = [];
    for (let k = 0; k < v; k++) {
      const N = ke(t), M = ye(t), Y = we(t, 0, M), Z = ye(t), K = new Uint8Array(we(t, 0, Z));
      x.push({
        programIdIndex: N,
        accountKeyIndexes: Y,
        data: K
      });
    }
    const U = ye(t), B = [];
    for (let k = 0; k < U; k++) {
      const N = new ft(we(t, 0, Ge)), M = ye(t), Y = we(t, 0, M), Z = ye(t), K = we(t, 0, Z);
      B.push({
        accountKey: N,
        writableIndexes: Y,
        readonlyIndexes: K
      });
    }
    return new jn({
      header: o,
      staticAccountKeys: f,
      recentBlockhash: b,
      compiledInstructions: x,
      addressTableLookups: B
    });
  }
}
let $e = /* @__PURE__ */ function(r) {
  return r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", r[r.PROCESSED = 1] = "PROCESSED", r[r.TIMED_OUT = 2] = "TIMED_OUT", r[r.NONCE_INVALID = 3] = "NONCE_INVALID", r;
}({});
const hd = yt.Buffer.alloc(co).fill(0);
class fs {
  constructor(e) {
    this.keys = void 0, this.programId = void 0, this.data = yt.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data);
  }
  /**
   * @internal
   */
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey: e,
        isSigner: t,
        isWritable: n
      }) => ({
        pubkey: e.toJSON(),
        isSigner: t,
        isWritable: n
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}
class Ue {
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
  constructor(e) {
    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!e)
      if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
        const {
          minContextSlot: t,
          nonceInfo: n
        } = e;
        this.minNonceContextSlot = t, this.nonceInfo = n;
      } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
        const {
          blockhash: t,
          lastValidBlockHeight: n
        } = e;
        this.recentBlockhash = t, this.lastValidBlockHeight = n;
      } else {
        const {
          recentBlockhash: t,
          nonceInfo: n
        } = e;
        n && (this.nonceInfo = n), this.recentBlockhash = t;
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
      instructions: this.instructions.map((e) => e.toJSON()),
      signers: this.signatures.map(({
        publicKey: e
      }) => e.toJSON())
    };
  }
  /**
   * Add one or more instructions to this Transaction
   *
   * @param {Array< Transaction | TransactionInstruction | TransactionInstructionCtorFields >} items - Instructions to add to the Transaction
   */
  add(...e) {
    if (e.length === 0)
      throw new Error("No instructions");
    return e.forEach((t) => {
      "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new fs(t));
    }), this;
  }
  /**
   * Compile transaction data
   */
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
      return this._message;
    let e, t;
    if (this.nonceInfo ? (e = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [this.nonceInfo.nonceInstruction, ...this.instructions] : t = this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e)
      throw new Error("Transaction recentBlockhash required");
    t.length < 1 && console.warn("No instructions provided");
    let n;
    if (this.feePayer)
      n = this.feePayer;
    else if (this.signatures.length > 0 && this.signatures[0].publicKey)
      n = this.signatures[0].publicKey;
    else
      throw new Error("Transaction fee payer required");
    for (let N = 0; N < t.length; N++)
      if (t[N].programId === void 0)
        throw new Error(`Transaction instruction index ${N} has undefined program id`);
    const s = [], i = [];
    t.forEach((N) => {
      N.keys.forEach((Y) => {
        i.push({
          ...Y
        });
      });
      const M = N.programId.toString();
      s.includes(M) || s.push(M);
    }), s.forEach((N) => {
      i.push({
        pubkey: new ft(N),
        isSigner: !1,
        isWritable: !1
      });
    });
    const o = [];
    i.forEach((N) => {
      const M = N.pubkey.toString(), Y = o.findIndex((Z) => Z.pubkey.toString() === M);
      Y > -1 ? (o[Y].isWritable = o[Y].isWritable || N.isWritable, o[Y].isSigner = o[Y].isSigner || N.isSigner) : o.push(N);
    }), o.sort(function(N, M) {
      if (N.isSigner !== M.isSigner)
        return N.isSigner ? -1 : 1;
      if (N.isWritable !== M.isWritable)
        return N.isWritable ? -1 : 1;
      const Y = {
        localeMatcher: "best fit",
        usage: "sort",
        sensitivity: "variant",
        ignorePunctuation: !1,
        numeric: !1,
        caseFirst: "lower"
      };
      return N.pubkey.toBase58().localeCompare(M.pubkey.toBase58(), "en", Y);
    });
    const f = o.findIndex((N) => N.pubkey.equals(n));
    if (f > -1) {
      const [N] = o.splice(f, 1);
      N.isSigner = !0, N.isWritable = !0, o.unshift(N);
    } else
      o.unshift({
        pubkey: n,
        isSigner: !0,
        isWritable: !0
      });
    for (const N of this.signatures) {
      const M = o.findIndex((Y) => Y.pubkey.equals(N.publicKey));
      if (M > -1)
        o[M].isSigner || (o[M].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
      else
        throw new Error(`unknown signer: ${N.publicKey.toString()}`);
    }
    let p = 0, b = 0, v = 0;
    const x = [], U = [];
    o.forEach(({
      pubkey: N,
      isSigner: M,
      isWritable: Y
    }) => {
      M ? (x.push(N.toString()), p += 1, Y || (b += 1)) : (U.push(N.toString()), Y || (v += 1));
    });
    const B = x.concat(U), k = t.map((N) => {
      const {
        data: M,
        programId: Y
      } = N;
      return {
        programIdIndex: B.indexOf(Y.toString()),
        accounts: N.keys.map((Z) => B.indexOf(Z.pubkey.toString())),
        data: oe.encode(M)
      };
    });
    return k.forEach((N) => {
      re(N.programIdIndex >= 0), N.accounts.forEach((M) => re(M >= 0));
    }), new Ve({
      header: {
        numRequiredSignatures: p,
        numReadonlySignedAccounts: b,
        numReadonlyUnsignedAccounts: v
      },
      accountKeys: B,
      recentBlockhash: e,
      instructions: k
    });
  }
  /**
   * @internal
   */
  _compile() {
    const e = this.compileMessage(), t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
    return this.signatures.length === t.length && this.signatures.every((s, i) => t[i].equals(s.publicKey)) || (this.signatures = t.map((n) => ({
      signature: null,
      publicKey: n
    }))), e;
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
  async getEstimatedFee(e) {
    return (await e.getFeeForMessage(this.compileMessage())).value;
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
  setSigners(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set();
    this.signatures = e.filter((n) => {
      const s = n.toString();
      return t.has(s) ? !1 : (t.add(s), !0);
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
  sign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), n = [];
    for (const i of e) {
      const o = i.publicKey.toString();
      t.has(o) || (t.add(o), n.push(i));
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
  partialSign(...e) {
    if (e.length === 0)
      throw new Error("No signers");
    const t = /* @__PURE__ */ new Set(), n = [];
    for (const i of e) {
      const o = i.publicKey.toString();
      t.has(o) || (t.add(o), n.push(i));
    }
    const s = this._compile();
    this._partialSign(s, ...n);
  }
  /**
   * @internal
   */
  _partialSign(e, ...t) {
    const n = e.serialize();
    t.forEach((s) => {
      const i = rd(n, s.secretKey);
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
  addSignature(e, t) {
    this._compile(), this._addSignature(e, t);
  }
  /**
   * @internal
   */
  _addSignature(e, t) {
    re(t.length === 64);
    const n = this.signatures.findIndex((s) => e.equals(s.publicKey));
    if (n < 0)
      throw new Error(`unknown signer: ${e.toString()}`);
    this.signatures[n].signature = yt.Buffer.from(t);
  }
  /**
   * Verify signatures of a Transaction
   * Optional parameter specifies if we're expecting a fully signed Transaction or a partially signed one.
   * If no boolean is provided, we expect a fully signed Transaction by default.
   *
   * @param {boolean} [requireAllSignatures=true] Require a fully signed Transaction
   */
  verifySignatures(e = !0) {
    return !this._getMessageSignednessErrors(this.serializeMessage(), e);
  }
  /**
   * @internal
   */
  _getMessageSignednessErrors(e, t) {
    const n = {};
    for (const {
      signature: s,
      publicKey: i
    } of this.signatures)
      s === null ? t && (n.missing || (n.missing = [])).push(i) : id(s, e, i.toBytes()) || (n.invalid || (n.invalid = [])).push(i);
    return n.invalid || n.missing ? n : void 0;
  }
  /**
   * Serialize the Transaction in the wire format.
   *
   * @param {Buffer} [config] Config of transaction.
   *
   * @returns {Buffer} Signature of transaction in wire format.
   */
  serialize(e) {
    const {
      requireAllSignatures: t,
      verifySignatures: n
    } = Object.assign({
      requireAllSignatures: !0,
      verifySignatures: !0
    }, e), s = this.serializeMessage();
    if (n) {
      const i = this._getMessageSignednessErrors(s, t);
      if (i) {
        let o = "Signature verification failed.";
        throw i.invalid && (o += `
Invalid signature for public key${i.invalid.length === 1 ? "" : "(s)"} [\`${i.invalid.map((f) => f.toBase58()).join("`, `")}\`].`), i.missing && (o += `
Missing signature for public key${i.missing.length === 1 ? "" : "(s)"} [\`${i.missing.map((f) => f.toBase58()).join("`, `")}\`].`), new Error(o);
      }
    }
    return this._serialize(s);
  }
  /**
   * @internal
   */
  _serialize(e) {
    const {
      signatures: t
    } = this, n = [];
    Re(n, t.length);
    const s = n.length + t.length * 64 + e.length, i = yt.Buffer.alloc(s);
    return re(t.length < 256), yt.Buffer.from(n).copy(i, 0), t.forEach(({
      signature: o
    }, f) => {
      o !== null && (re(o.length === 64, "signature has invalid length"), yt.Buffer.from(o).copy(i, n.length + f * 64));
    }), e.copy(i, n.length + t.length * 64), re(i.length <= on, `Transaction too large: ${i.length} > ${on}`), i;
  }
  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    return re(this.instructions.length === 1), this.instructions[0].keys.map((e) => e.pubkey);
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
  static from(e) {
    let t = [...e];
    const n = ye(t);
    let s = [];
    for (let i = 0; i < n; i++) {
      const o = we(t, 0, co);
      s.push(oe.encode(yt.Buffer.from(o)));
    }
    return Ue.populate(Ve.from(t), s);
  }
  /**
   * Populate Transaction object from message and signatures
   *
   * @param {Message} message Message of transaction
   * @param {Array<string>} signatures List of signatures to assign to the transaction
   *
   * @returns {Transaction} The populated Transaction
   */
  static populate(e, t = []) {
    const n = new Ue();
    return n.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]), t.forEach((s, i) => {
      const o = {
        signature: s == oe.encode(hd) ? null : oe.decode(s),
        publicKey: e.accountKeys[i]
      };
      n.signatures.push(o);
    }), e.instructions.forEach((s) => {
      const i = s.accounts.map((o) => {
        const f = e.accountKeys[o];
        return {
          pubkey: f,
          isSigner: n.signatures.some((p) => p.publicKey.toString() === f.toString()) || e.isAccountSigner(o),
          isWritable: e.isAccountWritable(o)
        };
      });
      n.instructions.push(new fs({
        keys: i,
        programId: e.accountKeys[s.programIdIndex],
        data: oe.decode(s.data)
      }));
    }), n._message = e, n._json = n.toJSON(), n;
  }
}
const dd = 160, pd = 64, _d = dd / pd, gd = 1e3 / _d;
new ft("SysvarC1ock11111111111111111111111111111111");
new ft("SysvarEpochSchedu1e111111111111111111111111");
new ft("Sysvar1nstructions1111111111111111111111111");
new ft("SysvarRecentB1ockHashes11111111111111111111");
new ft("SysvarRent111111111111111111111111111111111");
new ft("SysvarRewards111111111111111111111111111111");
new ft("SysvarS1otHashes111111111111111111111111111");
new ft("SysvarS1otHistory11111111111111111111111111");
new ft("SysvarStakeHistory1111111111111111111111111");
class ls extends Error {
  constructor({
    action: e,
    signature: t,
    transactionMessage: n,
    logs: s
  }) {
    const i = s ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. ` : "", o = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
    let f;
    switch (e) {
      case "send":
        f = `Transaction ${t} resulted in an error. 
${n}. ` + i + o;
        break;
      case "simulate":
        f = `Simulation failed. 
Message: ${n}. 
` + i + o;
        break;
      default:
        f = `Unknown action '${/* @__PURE__ */ ((p) => p)(e)}'`;
    }
    super(f), this.signature = void 0, this.transactionMessage = void 0, this.transactionLogs = void 0, this.signature = t, this.transactionMessage = n, this.transactionLogs = s || void 0;
  }
  get transactionError() {
    return {
      message: this.transactionMessage,
      logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
    };
  }
  /* @deprecated Use `await getLogs()` instead */
  get logs() {
    const e = this.transactionLogs;
    if (!(e != null && typeof e == "object" && "then" in e))
      return e;
  }
  async getLogs(e) {
    return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise((t, n) => {
      e.getTransaction(this.signature).then((s) => {
        if (s && s.meta && s.meta.logMessages) {
          const i = s.meta.logMessages;
          this.transactionLogs = i, t(i);
        } else
          n(new Error("Log messages not found"));
      }).catch(n);
    })), await this.transactionLogs;
  }
}
class at extends Error {
  constructor({
    code: e,
    message: t,
    data: n
  }, s) {
    super(s != null ? `${s}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = n, this.name = "SolanaJSONRPCError";
  }
}
function nn(r) {
  return new Promise((e) => setTimeout(e, r));
}
const md = T.nu64("lamportsPerSignature"), ho = T.struct([T.u32("version"), T.u32("state"), Rt("authorizedPubkey"), Rt("nonce"), T.struct([md], "feeCalculator")]);
ho.span;
class Ri {
  /**
   * @internal
   */
  constructor(e) {
    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator;
  }
  /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */
  static fromAccountData(e) {
    const t = ho.decode(ln(e), 0);
    return new Ri({
      authorizedPubkey: new ft(t.authorizedPubkey),
      nonce: new ft(t.nonce).toString(),
      feeCalculator: t.feeCalculator
    });
  }
}
function hn(r) {
  const e = T.blob(8, r), t = e.decode.bind(e), n = e.encode.bind(e), s = e, i = ah();
  return s.decode = (o, f) => {
    const p = t(o, f);
    return i.decode(p);
  }, s.encode = (o, f, p) => {
    const b = i.encode(o);
    return n(b, f, p);
  }, s;
}
Object.freeze({
  Create: {
    index: 0,
    layout: T.struct([T.u32("instruction"), T.ns64("lamports"), T.ns64("space"), Rt("programId")])
  },
  Assign: {
    index: 1,
    layout: T.struct([T.u32("instruction"), Rt("programId")])
  },
  Transfer: {
    index: 2,
    layout: T.struct([T.u32("instruction"), hn("lamports")])
  },
  CreateWithSeed: {
    index: 3,
    layout: T.struct([T.u32("instruction"), Rt("base"), rn("seed"), T.ns64("lamports"), T.ns64("space"), Rt("programId")])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: T.struct([T.u32("instruction")])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: T.struct([T.u32("instruction"), T.ns64("lamports")])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: T.struct([T.u32("instruction"), Rt("authorized")])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: T.struct([T.u32("instruction"), Rt("authorized")])
  },
  Allocate: {
    index: 8,
    layout: T.struct([T.u32("instruction"), T.ns64("space")])
  },
  AllocateWithSeed: {
    index: 9,
    layout: T.struct([T.u32("instruction"), Rt("base"), rn("seed"), T.ns64("space"), Rt("programId")])
  },
  AssignWithSeed: {
    index: 10,
    layout: T.struct([T.u32("instruction"), Rt("base"), rn("seed"), Rt("programId")])
  },
  TransferWithSeed: {
    index: 11,
    layout: T.struct([T.u32("instruction"), hn("lamports"), rn("seed"), Rt("programId")])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: T.struct([T.u32("instruction")])
  }
});
new ft("11111111111111111111111111111111");
new ft("BPFLoader2111111111111111111111111111111111");
function yd(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Kr, hs;
function Rd() {
  if (hs) return Kr;
  hs = 1;
  var r = Object.prototype.toString, e = Object.keys || function(n) {
    var s = [];
    for (var i in n)
      s.push(i);
    return s;
  };
  function t(n, s) {
    var i, o, f, p, b, v, x;
    if (n === !0)
      return "true";
    if (n === !1)
      return "false";
    switch (typeof n) {
      case "object":
        if (n === null)
          return null;
        if (n.toJSON && typeof n.toJSON == "function")
          return t(n.toJSON(), s);
        if (x = r.call(n), x === "[object Array]") {
          for (f = "[", o = n.length - 1, i = 0; i < o; i++)
            f += t(n[i], !0) + ",";
          return o > -1 && (f += t(n[i], !0)), f + "]";
        } else if (x === "[object Object]") {
          for (p = e(n).sort(), o = p.length, f = "", i = 0; i < o; )
            b = p[i], v = t(n[b], !1), v !== void 0 && (f && (f += ","), f += JSON.stringify(b) + ":" + v), i++;
          return "{" + f + "}";
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
  return Kr = function(n) {
    var s = t(n, !1);
    if (s !== void 0)
      return "" + s;
  }, Kr;
}
var wd = /* @__PURE__ */ Rd(), ds = /* @__PURE__ */ yd(wd);
const gn = 32;
function Wr(r) {
  let e = 0;
  for (; r > 1; )
    r /= 2, e++;
  return e;
}
function Ed(r) {
  return r === 0 ? 1 : (r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r |= r >> 32, r + 1);
}
class Ad {
  constructor(e, t, n, s, i) {
    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = n, this.firstNormalEpoch = s, this.firstNormalSlot = i;
  }
  getEpoch(e) {
    return this.getEpochAndSlotIndex(e)[0];
  }
  getEpochAndSlotIndex(e) {
    if (e < this.firstNormalSlot) {
      const t = Wr(Ed(e + gn + 1)) - Wr(gn) - 1, n = this.getSlotsInEpoch(t), s = e - (n - gn);
      return [t, s];
    } else {
      const t = e - this.firstNormalSlot, n = Math.floor(t / this.slotsPerEpoch), s = this.firstNormalEpoch + n, i = t % this.slotsPerEpoch;
      return [s, i];
    }
  }
  getFirstSlotInEpoch(e) {
    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * gn : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
  }
  getLastSlotInEpoch(e) {
    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
  }
  getSlotsInEpoch(e) {
    return e < this.firstNormalEpoch ? Math.pow(2, e + Wr(gn)) : this.slotsPerEpoch;
  }
}
var bd = globalThis.fetch;
class Sd extends Gh {
  constructor(e, t, n) {
    const s = (i) => {
      const o = zh(i, {
        autoconnect: !0,
        max_reconnects: 5,
        reconnect: !0,
        reconnect_interval: 1e3,
        ...t
      });
      return "socket" in o ? this.underlyingSocket = o.socket : this.underlyingSocket = o, o;
    };
    super(s, e, t, n), this.underlyingSocket = void 0;
  }
  call(...e) {
    var n;
    const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
  }
  notify(...e) {
    var n;
    const t = (n = this.underlyingSocket) == null ? void 0 : n.readyState;
    return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"));
  }
}
function vd(r, e) {
  let t;
  try {
    t = r.layout.decode(e);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (t.typeIndex !== r.index)
    throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${r.index}`);
  return t;
}
const ps = 56;
class _s {
  constructor(e) {
    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state;
  }
  isActive() {
    const e = BigInt("0xffffffffffffffff");
    return this.state.deactivationSlot === e;
  }
  static deserialize(e) {
    const t = vd(Od, e), n = e.length - ps;
    re(n >= 0, "lookup table is invalid"), re(n % 32 === 0, "lookup table is invalid");
    const s = n / 32, {
      addresses: i
    } = T.struct([T.seq(Rt(), s, "addresses")]).decode(e.slice(ps));
    return {
      deactivationSlot: t.deactivationSlot,
      lastExtendedSlot: t.lastExtendedSlot,
      lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
      authority: t.authority.length !== 0 ? new ft(t.authority[0]) : void 0,
      addresses: i.map((o) => new ft(o))
    };
  }
}
const Od = {
  index: 1,
  layout: T.struct([
    T.u32("typeIndex"),
    hn("deactivationSlot"),
    T.nu64("lastExtendedSlot"),
    T.u8("lastExtendedStartIndex"),
    T.u8(),
    // option
    T.seq(Rt(), T.offset(T.u8(), -1), "authority")
  ])
}, Id = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function Nd(r) {
  const e = r.match(Id);
  if (e == null)
    throw TypeError(`Failed to validate endpoint URL \`${r}\``);
  const [
    t,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    n,
    s,
    i
  ] = e, o = r.startsWith("https:") ? "wss:" : "ws:", f = s == null ? null : parseInt(s.slice(1), 10), p = (
    // Only shift the port by +1 as a convention for ws(s) only if given endpoint
    // is explicitly specifying the endpoint port (HTTP-based RPC), assuming
    // we're directly trying to connect to agave-validator's ws listening port.
    // When the endpoint omits the port, we're connecting to the protocol
    // default ports: http(80) or https(443) and it's assumed we're behind a reverse
    // proxy which manages WebSocket upgrade and backend port redirection.
    f == null ? "" : `:${f + 1}`
  );
  return `${o}//${n}${p}${i}`;
}
const Lt = In(mi(ft), Q(), (r) => new ft(r)), po = yi([Q(), Ct("base64")]), wi = In(mi(yt.Buffer), po, (r) => yt.Buffer.from(r[0], "base64")), xd = 30 * 1e3;
function Td(r) {
  if (/^https?:/.test(r) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return r;
}
function Ot(r) {
  let e, t;
  if (typeof r == "string")
    e = r;
  else if (r) {
    const {
      commitment: n,
      ...s
    } = r;
    e = n, t = s;
  }
  return {
    commitment: e,
    config: t
  };
}
function gs(r) {
  return r.map((e) => "memcmp" in e ? {
    ...e,
    memcmp: {
      ...e.memcmp,
      encoding: e.memcmp.encoding ?? "base58"
    }
  } : e);
}
function _o(r) {
  return pe([X({
    jsonrpc: Ct("2.0"),
    id: Q(),
    result: r
  }), X({
    jsonrpc: Ct("2.0"),
    id: Q(),
    error: X({
      code: dn(),
      message: Q(),
      data: ct(ph())
    })
  })]);
}
const Bd = _o(dn());
function mt(r) {
  return In(_o(r), Bd, (e) => "error" in e ? e : {
    ...e,
    result: et(e.result, r)
  });
}
function Dt(r) {
  return mt(X({
    context: X({
      slot: q()
    }),
    value: r
  }));
}
function rr(r) {
  return X({
    context: X({
      slot: q()
    }),
    value: r
  });
}
function jr(r, e) {
  return r === 0 ? new jn({
    header: e.header,
    staticAccountKeys: e.accountKeys.map((t) => new ft(t)),
    recentBlockhash: e.recentBlockhash,
    compiledInstructions: e.instructions.map((t) => ({
      programIdIndex: t.programIdIndex,
      accountKeyIndexes: t.accounts,
      data: oe.decode(t.data)
    })),
    addressTableLookups: e.addressTableLookups
  }) : new Ve(e);
}
const Cd = X({
  foundation: q(),
  foundationTerm: q(),
  initial: q(),
  taper: q(),
  terminal: q()
}), Ld = mt(nt(rt(X({
  epoch: q(),
  effectiveSlot: q(),
  amount: q(),
  postBalance: q(),
  commission: ct(rt(q()))
})))), Md = nt(X({
  slot: q(),
  prioritizationFee: q()
})), kd = X({
  total: q(),
  validator: q(),
  foundation: q(),
  epoch: q()
}), Ud = X({
  epoch: q(),
  slotIndex: q(),
  slotsInEpoch: q(),
  absoluteSlot: q(),
  blockHeight: ct(q()),
  transactionCount: ct(q())
}), Dd = X({
  slotsPerEpoch: q(),
  leaderScheduleSlotOffset: q(),
  warmup: Ie(),
  firstNormalEpoch: q(),
  firstNormalSlot: q()
}), Pd = Xs(Q(), nt(q())), Ye = rt(pe([X({}), Q()])), Fd = X({
  err: Ye
}), qd = Ct("receivedSignature"), $d = X({
  "solana-core": Q(),
  "feature-set": ct(q())
}), zd = X({
  program: Q(),
  programId: Lt,
  parsed: dn()
}), Hd = X({
  programId: Lt,
  accounts: nt(Lt),
  data: Q()
}), ms = Dt(X({
  err: rt(pe([X({}), Q()])),
  logs: rt(nt(Q())),
  accounts: ct(rt(nt(rt(X({
    executable: Ie(),
    owner: Q(),
    lamports: q(),
    data: nt(Q()),
    rentEpoch: ct(q())
  }))))),
  unitsConsumed: ct(q()),
  returnData: ct(rt(X({
    programId: Q(),
    data: yi([Q(), Ct("base64")])
  }))),
  innerInstructions: ct(rt(nt(X({
    index: q(),
    instructions: nt(pe([zd, Hd]))
  }))))
})), Gd = Dt(X({
  byIdentity: Xs(Q(), nt(q())),
  range: X({
    firstSlot: q(),
    lastSlot: q()
  })
}));
function Vd(r, e, t, n, s, i) {
  const o = t || bd;
  let f;
  i != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
  let p;
  return n && (p = async (v, x) => {
    const U = await new Promise((B, k) => {
      try {
        n(v, x, (N, M) => B([N, M]));
      } catch (N) {
        k(N);
      }
    });
    return await o(...U);
  }), new Ph(async (v, x) => {
    const U = {
      method: "POST",
      body: v,
      agent: f,
      headers: Object.assign({
        "Content-Type": "application/json"
      }, e || {}, V0)
    };
    try {
      let B = 5, k, N = 500;
      for (; p ? k = await p(r, U) : k = await o(r, U), !(k.status !== 429 || s === !0 || (B -= 1, B === 0)); )
        console.error(`Server responded with ${k.status} ${k.statusText}.  Retrying after ${N}ms delay...`), await nn(N), N *= 2;
      const M = await k.text();
      k.ok ? x(null, M) : x(new Error(`${k.status} ${k.statusText}: ${M}`));
    } catch (B) {
      B instanceof Error && x(B);
    }
  }, {});
}
function Kd(r) {
  return (e, t) => new Promise((n, s) => {
    r.request(e, t, (i, o) => {
      if (i) {
        s(i);
        return;
      }
      n(o);
    });
  });
}
function Wd(r) {
  return (e) => new Promise((t, n) => {
    e.length === 0 && t([]);
    const s = e.map((i) => r.request(i.methodName, i.args));
    r.request(s, (i, o) => {
      if (i) {
        n(i);
        return;
      }
      t(o);
    });
  });
}
const jd = mt(Cd), Yd = mt(kd), Xd = mt(Md), Zd = mt(Ud), Jd = mt(Dd), Qd = mt(Pd), t0 = mt(q()), e0 = Dt(X({
  total: q(),
  circulating: q(),
  nonCirculating: q(),
  nonCirculatingAccounts: nt(Lt)
})), ni = X({
  amount: Q(),
  uiAmount: rt(q()),
  decimals: q(),
  uiAmountString: ct(Q())
}), n0 = Dt(nt(X({
  address: Lt,
  amount: Q(),
  uiAmount: rt(q()),
  decimals: q(),
  uiAmountString: ct(Q())
}))), r0 = Dt(nt(X({
  pubkey: Lt,
  account: X({
    executable: Ie(),
    owner: Lt,
    lamports: q(),
    data: wi,
    rentEpoch: q()
  })
}))), ri = X({
  program: Q(),
  parsed: dn(),
  space: q()
}), i0 = Dt(nt(X({
  pubkey: Lt,
  account: X({
    executable: Ie(),
    owner: Lt,
    lamports: q(),
    data: ri,
    rentEpoch: q()
  })
}))), s0 = Dt(nt(X({
  lamports: q(),
  address: Lt
}))), Rn = X({
  executable: Ie(),
  owner: Lt,
  lamports: q(),
  data: wi,
  rentEpoch: q()
}), o0 = X({
  pubkey: Lt,
  account: Rn
}), a0 = In(pe([mi(yt.Buffer), ri]), pe([po, ri]), (r) => Array.isArray(r) ? et(r, wi) : r), ii = X({
  executable: Ie(),
  owner: Lt,
  lamports: q(),
  data: a0,
  rentEpoch: q()
}), c0 = X({
  pubkey: Lt,
  account: ii
}), u0 = X({
  state: pe([Ct("active"), Ct("inactive"), Ct("activating"), Ct("deactivating")]),
  active: q(),
  inactive: q()
}), f0 = mt(nt(X({
  signature: Q(),
  slot: q(),
  err: Ye,
  memo: rt(Q()),
  blockTime: ct(rt(q()))
}))), l0 = mt(nt(X({
  signature: Q(),
  slot: q(),
  err: Ye,
  memo: rt(Q()),
  blockTime: ct(rt(q()))
}))), h0 = X({
  subscription: q(),
  result: rr(Rn)
}), d0 = X({
  pubkey: Lt,
  account: Rn
}), p0 = X({
  subscription: q(),
  result: rr(d0)
}), _0 = X({
  parent: q(),
  slot: q(),
  root: q()
}), g0 = X({
  subscription: q(),
  result: _0
}), m0 = pe([X({
  type: pe([Ct("firstShredReceived"), Ct("completed"), Ct("optimisticConfirmation"), Ct("root")]),
  slot: q(),
  timestamp: q()
}), X({
  type: Ct("createdBank"),
  parent: q(),
  slot: q(),
  timestamp: q()
}), X({
  type: Ct("frozen"),
  slot: q(),
  timestamp: q(),
  stats: X({
    numTransactionEntries: q(),
    numSuccessfulTransactions: q(),
    numFailedTransactions: q(),
    maxTransactionsPerEntry: q()
  })
}), X({
  type: Ct("dead"),
  slot: q(),
  timestamp: q(),
  err: Q()
})]), y0 = X({
  subscription: q(),
  result: m0
}), R0 = X({
  subscription: q(),
  result: rr(pe([Fd, qd]))
}), w0 = X({
  subscription: q(),
  result: q()
}), E0 = X({
  pubkey: Q(),
  gossip: rt(Q()),
  tpu: rt(Q()),
  rpc: rt(Q()),
  version: rt(Q())
}), ys = X({
  votePubkey: Q(),
  nodePubkey: Q(),
  activatedStake: q(),
  epochVoteAccount: Ie(),
  epochCredits: nt(yi([q(), q(), q()])),
  commission: q(),
  lastVote: q(),
  rootSlot: rt(q())
}), A0 = mt(X({
  current: nt(ys),
  delinquent: nt(ys)
})), b0 = pe([Ct("processed"), Ct("confirmed"), Ct("finalized")]), S0 = X({
  slot: q(),
  confirmations: rt(q()),
  err: Ye,
  confirmationStatus: ct(b0)
}), v0 = Dt(nt(rt(S0))), O0 = mt(q()), go = X({
  accountKey: Lt,
  writableIndexes: nt(q()),
  readonlyIndexes: nt(q())
}), Ei = X({
  signatures: nt(Q()),
  message: X({
    accountKeys: nt(Q()),
    header: X({
      numRequiredSignatures: q(),
      numReadonlySignedAccounts: q(),
      numReadonlyUnsignedAccounts: q()
    }),
    instructions: nt(X({
      accounts: nt(q()),
      data: Q(),
      programIdIndex: q()
    })),
    recentBlockhash: Q(),
    addressTableLookups: ct(nt(go))
  })
}), mo = X({
  pubkey: Lt,
  signer: Ie(),
  writable: Ie(),
  source: ct(pe([Ct("transaction"), Ct("lookupTable")]))
}), yo = X({
  accountKeys: nt(mo),
  signatures: nt(Q())
}), Ro = X({
  parsed: dn(),
  program: Q(),
  programId: Lt
}), wo = X({
  accounts: nt(Lt),
  data: Q(),
  programId: Lt
}), I0 = pe([wo, Ro]), N0 = pe([X({
  parsed: dn(),
  program: Q(),
  programId: Q()
}), X({
  accounts: nt(Q()),
  data: Q(),
  programId: Q()
})]), Eo = In(I0, N0, (r) => "accounts" in r ? et(r, wo) : et(r, Ro)), Ao = X({
  signatures: nt(Q()),
  message: X({
    accountKeys: nt(mo),
    instructions: nt(Eo),
    recentBlockhash: Q(),
    addressTableLookups: ct(rt(nt(go)))
  })
}), Yn = X({
  accountIndex: q(),
  mint: Q(),
  owner: ct(Q()),
  programId: ct(Q()),
  uiTokenAmount: ni
}), bo = X({
  writable: nt(Lt),
  readonly: nt(Lt)
}), ir = X({
  err: Ye,
  fee: q(),
  innerInstructions: ct(rt(nt(X({
    index: q(),
    instructions: nt(X({
      accounts: nt(q()),
      data: Q(),
      programIdIndex: q()
    }))
  })))),
  preBalances: nt(q()),
  postBalances: nt(q()),
  logMessages: ct(rt(nt(Q()))),
  preTokenBalances: ct(rt(nt(Yn))),
  postTokenBalances: ct(rt(nt(Yn))),
  loadedAddresses: ct(bo),
  computeUnitsConsumed: ct(q())
}), Ai = X({
  err: Ye,
  fee: q(),
  innerInstructions: ct(rt(nt(X({
    index: q(),
    instructions: nt(Eo)
  })))),
  preBalances: nt(q()),
  postBalances: nt(q()),
  logMessages: ct(rt(nt(Q()))),
  preTokenBalances: ct(rt(nt(Yn))),
  postTokenBalances: ct(rt(nt(Yn))),
  loadedAddresses: ct(bo),
  computeUnitsConsumed: ct(q())
}), pn = pe([Ct(0), Ct("legacy")]), Xe = X({
  pubkey: Q(),
  lamports: q(),
  postBalance: rt(q()),
  rewardType: rt(Q()),
  commission: ct(rt(q()))
}), x0 = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  transactions: nt(X({
    transaction: Ei,
    meta: rt(ir),
    version: ct(pn)
  })),
  rewards: ct(nt(Xe)),
  blockTime: rt(q()),
  blockHeight: rt(q())
}))), T0 = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  rewards: ct(nt(Xe)),
  blockTime: rt(q()),
  blockHeight: rt(q())
}))), B0 = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  transactions: nt(X({
    transaction: yo,
    meta: rt(ir),
    version: ct(pn)
  })),
  rewards: ct(nt(Xe)),
  blockTime: rt(q()),
  blockHeight: rt(q())
}))), C0 = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  transactions: nt(X({
    transaction: Ao,
    meta: rt(Ai),
    version: ct(pn)
  })),
  rewards: ct(nt(Xe)),
  blockTime: rt(q()),
  blockHeight: rt(q())
}))), L0 = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  transactions: nt(X({
    transaction: yo,
    meta: rt(Ai),
    version: ct(pn)
  })),
  rewards: ct(nt(Xe)),
  blockTime: rt(q()),
  blockHeight: rt(q())
}))), M0 = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  rewards: ct(nt(Xe)),
  blockTime: rt(q()),
  blockHeight: rt(q())
}))), k0 = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  transactions: nt(X({
    transaction: Ei,
    meta: rt(ir)
  })),
  rewards: ct(nt(Xe)),
  blockTime: rt(q())
}))), Rs = mt(rt(X({
  blockhash: Q(),
  previousBlockhash: Q(),
  parentSlot: q(),
  signatures: nt(Q()),
  blockTime: rt(q())
}))), Yr = mt(rt(X({
  slot: q(),
  meta: rt(ir),
  blockTime: ct(rt(q())),
  transaction: Ei,
  version: ct(pn)
}))), kn = mt(rt(X({
  slot: q(),
  transaction: Ao,
  meta: rt(Ai),
  blockTime: ct(rt(q())),
  version: ct(pn)
}))), U0 = Dt(X({
  blockhash: Q(),
  lastValidBlockHeight: q()
})), D0 = Dt(Ie()), P0 = X({
  slot: q(),
  numTransactions: q(),
  numSlots: q(),
  samplePeriodSecs: q()
}), F0 = mt(nt(P0)), q0 = Dt(rt(X({
  feeCalculator: X({
    lamportsPerSignature: q()
  })
}))), $0 = mt(Q()), z0 = mt(Q()), H0 = X({
  err: Ye,
  logs: nt(Q()),
  signature: Q()
}), G0 = X({
  result: rr(H0),
  subscription: q()
}), V0 = {
  "solana-client": "js/1.0.0-maintenance"
};
class K0 {
  /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */
  constructor(e, t) {
    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = /* @__PURE__ */ new Set(), this.getBlockHeight = /* @__PURE__ */ (() => {
      const b = {};
      return async (v) => {
        const {
          commitment: x,
          config: U
        } = Ot(v), B = this._buildArgs([], x, void 0, U), k = ds(B);
        return b[k] = b[k] ?? (async () => {
          try {
            const N = await this._rpcRequest("getBlockHeight", B), M = et(N, mt(q()));
            if ("error" in M)
              throw new at(M.error, "failed to get block height information");
            return M.result;
          } finally {
            delete b[k];
          }
        })(), await b[k];
      };
    })();
    let n, s, i, o, f, p;
    t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, n = t.wsEndpoint, s = t.httpHeaders, i = t.fetch, o = t.fetchMiddleware, f = t.disableRetryOnRateLimit, p = t.httpAgent), this._rpcEndpoint = Td(e), this._rpcWsEndpoint = n || Nd(e), this._rpcClient = Vd(e, s, i, o, f, p), this._rpcRequest = Kd(this._rpcClient), this._rpcBatchRequest = Wd(this._rpcClient), this._rpcWebSocket = new Sd(this._rpcWsEndpoint, {
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
  async getBalanceAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgs([e.toBase58()], n, void 0, s), o = await this._rpcRequest("getBalance", i), f = et(o, Dt(q()));
    if ("error" in f)
      throw new at(f.error, `failed to get balance for ${e.toBase58()}`);
    return f.result;
  }
  /**
   * Fetch the balance for the specified public key
   */
  async getBalance(e, t) {
    return await this.getBalanceAndContext(e, t).then((n) => n.value).catch((n) => {
      throw new Error("failed to get balance of account " + e.toBase58() + ": " + n);
    });
  }
  /**
   * Fetch the estimated production time of a block
   */
  async getBlockTime(e) {
    const t = await this._rpcRequest("getBlockTime", [e]), n = et(t, mt(rt(q())));
    if ("error" in n)
      throw new at(n.error, `failed to get block time for slot ${e}`);
    return n.result;
  }
  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */
  async getMinimumLedgerSlot() {
    const e = await this._rpcRequest("minimumLedgerSlot", []), t = et(e, mt(q()));
    if ("error" in t)
      throw new at(t.error, "failed to get minimum ledger slot");
    return t.result;
  }
  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */
  async getFirstAvailableBlock() {
    const e = await this._rpcRequest("getFirstAvailableBlock", []), t = et(e, t0);
    if ("error" in t)
      throw new at(t.error, "failed to get first available block");
    return t.result;
  }
  /**
   * Fetch information about the current supply
   */
  async getSupply(e) {
    let t = {};
    typeof e == "string" ? t = {
      commitment: e
    } : e ? t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    } : t = {
      commitment: this.commitment
    };
    const n = await this._rpcRequest("getSupply", [t]), s = et(n, e0);
    if ("error" in s)
      throw new at(s.error, "failed to get supply");
    return s.result;
  }
  /**
   * Fetch the current supply of a token mint
   */
  async getTokenSupply(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenSupply", n), i = et(s, Dt(ni));
    if ("error" in i)
      throw new at(i.error, "failed to get token supply");
    return i.result;
  }
  /**
   * Fetch the current balance of a token account
   */
  async getTokenAccountBalance(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenAccountBalance", n), i = et(s, Dt(ni));
    if ("error" in i)
      throw new at(i.error, "failed to get token account balance");
    return i.result;
  }
  /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<GetProgramAccountsResponse>}
   */
  async getTokenAccountsByOwner(e, t, n) {
    const {
      commitment: s,
      config: i
    } = Ot(n);
    let o = [e.toBase58()];
    "mint" in t ? o.push({
      mint: t.mint.toBase58()
    }) : o.push({
      programId: t.programId.toBase58()
    });
    const f = this._buildArgs(o, s, "base64", i), p = await this._rpcRequest("getTokenAccountsByOwner", f), b = et(p, r0);
    if ("error" in b)
      throw new at(b.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return b.result;
  }
  /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */
  async getParsedTokenAccountsByOwner(e, t, n) {
    let s = [e.toBase58()];
    "mint" in t ? s.push({
      mint: t.mint.toBase58()
    }) : s.push({
      programId: t.programId.toBase58()
    });
    const i = this._buildArgs(s, n, "jsonParsed"), o = await this._rpcRequest("getTokenAccountsByOwner", i), f = et(o, i0);
    if ("error" in f)
      throw new at(f.error, `failed to get token accounts owned by account ${e.toBase58()}`);
    return f.result;
  }
  /**
   * Fetch the 20 largest accounts with their current balances
   */
  async getLargestAccounts(e) {
    const t = {
      ...e,
      commitment: e && e.commitment || this.commitment
    }, n = t.filter || t.commitment ? [t] : [], s = await this._rpcRequest("getLargestAccounts", n), i = et(s, s0);
    if ("error" in i)
      throw new at(i.error, "failed to get largest accounts");
    return i.result;
  }
  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */
  async getTokenLargestAccounts(e, t) {
    const n = this._buildArgs([e.toBase58()], t), s = await this._rpcRequest("getTokenLargestAccounts", n), i = et(s, n0);
    if ("error" in i)
      throw new at(i.error, "failed to get token largest accounts");
    return i.result;
  }
  /**
   * Fetch all the account info for the specified public key, return with context
   */
  async getAccountInfoAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgs([e.toBase58()], n, "base64", s), o = await this._rpcRequest("getAccountInfo", i), f = et(o, Dt(rt(Rn)));
    if ("error" in f)
      throw new at(f.error, `failed to get info about account ${e.toBase58()}`);
    return f.result;
  }
  /**
   * Fetch parsed account info for the specified public key
   */
  async getParsedAccountInfo(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgs([e.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getAccountInfo", i), f = et(o, Dt(rt(ii)));
    if ("error" in f)
      throw new at(f.error, `failed to get info about account ${e.toBase58()}`);
    return f.result;
  }
  /**
   * Fetch all the account info for the specified public key
   */
  async getAccountInfo(e, t) {
    try {
      return (await this.getAccountInfoAndContext(e, t)).value;
    } catch (n) {
      throw new Error("failed to get info about account " + e.toBase58() + ": " + n);
    }
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleParsedAccounts(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = e.map((b) => b.toBase58()), o = this._buildArgs([i], n, "jsonParsed", s), f = await this._rpcRequest("getMultipleAccounts", o), p = et(f, Dt(nt(rt(ii))));
    if ("error" in p)
      throw new at(p.error, `failed to get info for accounts ${i}`);
    return p.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleAccountsInfoAndContext(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = e.map((b) => b.toBase58()), o = this._buildArgs([i], n, "base64", s), f = await this._rpcRequest("getMultipleAccounts", o), p = et(f, Dt(nt(rt(Rn))));
    if ("error" in p)
      throw new at(p.error, `failed to get info for accounts ${i}`);
    return p.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */
  async getMultipleAccountsInfo(e, t) {
    return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
  }
  /**
   * Returns epoch activation information for a stake account that has been delegated
   *
   * @deprecated Deprecated since RPC v1.18; will be removed in a future version.
   */
  async getStakeActivation(e, t, n) {
    const {
      commitment: s,
      config: i
    } = Ot(t), o = this._buildArgs([e.toBase58()], s, void 0, {
      ...i,
      epoch: n ?? (i == null ? void 0 : i.epoch)
    }), f = await this._rpcRequest("getStakeActivation", o), p = et(f, mt(u0));
    if ("error" in p)
      throw new at(p.error, `failed to get Stake Activation ${e.toBase58()}`);
    return p.result;
  }
  /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getProgramAccounts(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), {
      encoding: i,
      ...o
    } = s || {}, f = this._buildArgs([e.toBase58()], n, i || "base64", {
      ...o,
      ...o.filters ? {
        filters: gs(o.filters)
      } : null
    }), p = await this._rpcRequest("getProgramAccounts", f), b = nt(o0), v = o.withContext === !0 ? et(p, Dt(b)) : et(p, mt(b));
    if ("error" in v)
      throw new at(v.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return v.result;
  }
  /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */
  async getParsedProgramAccounts(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgs([e.toBase58()], n, "jsonParsed", s), o = await this._rpcRequest("getProgramAccounts", i), f = et(o, mt(nt(c0)));
    if ("error" in f)
      throw new at(f.error, `failed to get accounts owned by program ${e.toBase58()}`);
    return f.result;
  }
  /** @deprecated Instead, call `confirmTransaction` and pass in {@link TransactionConfirmationStrategy} */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async confirmTransaction(e, t) {
    var i;
    let n;
    if (typeof e == "string")
      n = e;
    else {
      const o = e;
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
    return re(s.length === 64, "signature has invalid length"), typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
      commitment: t || this.commitment,
      signature: n
    }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
      commitment: t || this.commitment,
      strategy: e
    }) : await this.confirmTransactionUsingDurableNonceStrategy({
      commitment: t || this.commitment,
      strategy: e
    });
  }
  getCancellationPromise(e) {
    return new Promise((t, n) => {
      e != null && (e.aborted ? n(e.reason) : e.addEventListener("abort", () => {
        n(e.reason);
      }));
    });
  }
  getTransactionConfirmationPromise({
    commitment: e,
    signature: t
  }) {
    let n, s, i = !1;
    const o = new Promise((p, b) => {
      try {
        n = this.onSignature(t, (x, U) => {
          n = void 0;
          const B = {
            context: U,
            value: x
          };
          p({
            __type: $e.PROCESSED,
            response: B
          });
        }, e);
        const v = new Promise((x) => {
          n == null ? x() : s = this._onSubscriptionStateChange(n, (U) => {
            U === "subscribed" && x();
          });
        });
        (async () => {
          if (await v, i) return;
          const x = await this.getSignatureStatus(t);
          if (i || x == null)
            return;
          const {
            context: U,
            value: B
          } = x;
          if (B != null)
            if (B != null && B.err)
              b(B.err);
            else {
              switch (e) {
                case "confirmed":
                case "single":
                case "singleGossip": {
                  if (B.confirmationStatus === "processed")
                    return;
                  break;
                }
                case "finalized":
                case "max":
                case "root": {
                  if (B.confirmationStatus === "processed" || B.confirmationStatus === "confirmed")
                    return;
                  break;
                }
                // exhaust enums to ensure full coverage
                case "processed":
                case "recent":
              }
              i = !0, p({
                __type: $e.PROCESSED,
                response: {
                  context: U,
                  value: B
                }
              });
            }
        })();
      } catch (v) {
        b(v);
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
    commitment: e,
    strategy: {
      abortSignal: t,
      lastValidBlockHeight: n,
      signature: s
    }
  }) {
    let i = !1;
    const o = new Promise((x) => {
      const U = async () => {
        try {
          return await this.getBlockHeight(e);
        } catch {
          return -1;
        }
      };
      (async () => {
        let B = await U();
        if (!i) {
          for (; B <= n; )
            if (await nn(1e3), i || (B = await U(), i)) return;
          x({
            __type: $e.BLOCKHEIGHT_EXCEEDED
          });
        }
      })();
    }), {
      abortConfirmation: f,
      confirmationPromise: p
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: s
    }), b = this.getCancellationPromise(t);
    let v;
    try {
      const x = await Promise.race([b, p, o]);
      if (x.__type === $e.PROCESSED)
        v = x.response;
      else
        throw new uo(s);
    } finally {
      i = !0, f();
    }
    return v;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment: e,
    strategy: {
      abortSignal: t,
      minContextSlot: n,
      nonceAccountPubkey: s,
      nonceValue: i,
      signature: o
    }
  }) {
    let f = !1;
    const p = new Promise((B) => {
      let k = i, N = null;
      const M = async () => {
        try {
          const {
            context: Y,
            value: Z
          } = await this.getNonceAndContext(s, {
            commitment: e,
            minContextSlot: n
          });
          return N = Y.slot, Z == null ? void 0 : Z.nonce;
        } catch {
          return k;
        }
      };
      (async () => {
        if (k = await M(), !f)
          for (; ; ) {
            if (i !== k) {
              B({
                __type: $e.NONCE_INVALID,
                slotInWhichNonceDidAdvance: N
              });
              return;
            }
            if (await nn(2e3), f || (k = await M(), f)) return;
          }
      })();
    }), {
      abortConfirmation: b,
      confirmationPromise: v
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: o
    }), x = this.getCancellationPromise(t);
    let U;
    try {
      const B = await Promise.race([x, v, p]);
      if (B.__type === $e.PROCESSED)
        U = B.response;
      else {
        let k;
        for (; ; ) {
          const N = await this.getSignatureStatus(o);
          if (N == null)
            break;
          if (N.context.slot < (B.slotInWhichNonceDidAdvance ?? n)) {
            await nn(400);
            continue;
          }
          k = N;
          break;
        }
        if (k != null && k.value) {
          const N = e || "finalized", {
            confirmationStatus: M
          } = k.value;
          switch (N) {
            case "processed":
            case "recent":
              if (M !== "processed" && M !== "confirmed" && M !== "finalized")
                throw new mn(o);
              break;
            case "confirmed":
            case "single":
            case "singleGossip":
              if (M !== "confirmed" && M !== "finalized")
                throw new mn(o);
              break;
            case "finalized":
            case "max":
            case "root":
              if (M !== "finalized")
                throw new mn(o);
              break;
            default:
          }
          U = {
            context: k.context,
            value: {
              err: k.value.err
            }
          };
        } else
          throw new mn(o);
      }
    } finally {
      f = !0, b();
    }
    return U;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment: e,
    signature: t
  }) {
    let n;
    const s = new Promise((p) => {
      let b = this._confirmTransactionInitialTimeout || 6e4;
      switch (e) {
        case "processed":
        case "recent":
        case "single":
        case "confirmed":
        case "singleGossip": {
          b = this._confirmTransactionInitialTimeout || 3e4;
          break;
        }
      }
      n = setTimeout(() => p({
        __type: $e.TIMED_OUT,
        timeoutMs: b
      }), b);
    }), {
      abortConfirmation: i,
      confirmationPromise: o
    } = this.getTransactionConfirmationPromise({
      commitment: e,
      signature: t
    });
    let f;
    try {
      const p = await Promise.race([o, s]);
      if (p.__type === $e.PROCESSED)
        f = p.response;
      else
        throw new fo(t, p.timeoutMs / 1e3);
    } finally {
      clearTimeout(n), i();
    }
    return f;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getClusterNodes() {
    const e = await this._rpcRequest("getClusterNodes", []), t = et(e, mt(nt(E0)));
    if ("error" in t)
      throw new at(t.error, "failed to get cluster nodes");
    return t.result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getVoteAccounts(e) {
    const t = this._buildArgs([], e), n = await this._rpcRequest("getVoteAccounts", t), s = et(n, A0);
    if ("error" in s)
      throw new at(s.error, "failed to get vote accounts");
    return s.result;
  }
  /**
   * Fetch the current slot that the node is processing
   */
  async getSlot(e) {
    const {
      commitment: t,
      config: n
    } = Ot(e), s = this._buildArgs([], t, void 0, n), i = await this._rpcRequest("getSlot", s), o = et(i, mt(q()));
    if ("error" in o)
      throw new at(o.error, "failed to get slot");
    return o.result;
  }
  /**
   * Fetch the current slot leader of the cluster
   */
  async getSlotLeader(e) {
    const {
      commitment: t,
      config: n
    } = Ot(e), s = this._buildArgs([], t, void 0, n), i = await this._rpcRequest("getSlotLeader", s), o = et(i, mt(Q()));
    if ("error" in o)
      throw new at(o.error, "failed to get slot leader");
    return o.result;
  }
  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */
  async getSlotLeaders(e, t) {
    const n = [e, t], s = await this._rpcRequest("getSlotLeaders", n), i = et(s, mt(nt(Lt)));
    if ("error" in i)
      throw new at(i.error, "failed to get slot leaders");
    return i.result;
  }
  /**
   * Fetch the current status of a signature
   */
  async getSignatureStatus(e, t) {
    const {
      context: n,
      value: s
    } = await this.getSignatureStatuses([e], t);
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
  async getSignatureStatuses(e, t) {
    const n = [e];
    t && n.push(t);
    const s = await this._rpcRequest("getSignatureStatuses", n), i = et(s, v0);
    if ("error" in i)
      throw new at(i.error, "failed to get signature status");
    return i.result;
  }
  /**
   * Fetch the current transaction count of the cluster
   */
  async getTransactionCount(e) {
    const {
      commitment: t,
      config: n
    } = Ot(e), s = this._buildArgs([], t, void 0, n), i = await this._rpcRequest("getTransactionCount", s), o = et(i, mt(q()));
    if ("error" in o)
      throw new at(o.error, "failed to get transaction count");
    return o.result;
  }
  /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since RPC v1.2.8. Please use {@link getSupply} instead.
   */
  async getTotalSupply(e) {
    return (await this.getSupply({
      commitment: e,
      excludeNonCirculatingAccountsList: !0
    })).value.total;
  }
  /**
   * Fetch the cluster InflationGovernor parameters
   */
  async getInflationGovernor(e) {
    const t = this._buildArgs([], e), n = await this._rpcRequest("getInflationGovernor", t), s = et(n, jd);
    if ("error" in s)
      throw new at(s.error, "failed to get inflation");
    return s.result;
  }
  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */
  async getInflationReward(e, t, n) {
    const {
      commitment: s,
      config: i
    } = Ot(n), o = this._buildArgs([e.map((b) => b.toBase58())], s, void 0, {
      ...i,
      epoch: t ?? (i == null ? void 0 : i.epoch)
    }), f = await this._rpcRequest("getInflationReward", o), p = et(f, Ld);
    if ("error" in p)
      throw new at(p.error, "failed to get inflation reward");
    return p.result;
  }
  /**
   * Fetch the specific inflation values for the current epoch
   */
  async getInflationRate() {
    const e = await this._rpcRequest("getInflationRate", []), t = et(e, Yd);
    if ("error" in t)
      throw new at(t.error, "failed to get inflation rate");
    return t.result;
  }
  /**
   * Fetch the Epoch Info parameters
   */
  async getEpochInfo(e) {
    const {
      commitment: t,
      config: n
    } = Ot(e), s = this._buildArgs([], t, void 0, n), i = await this._rpcRequest("getEpochInfo", s), o = et(i, Zd);
    if ("error" in o)
      throw new at(o.error, "failed to get epoch info");
    return o.result;
  }
  /**
   * Fetch the Epoch Schedule parameters
   */
  async getEpochSchedule() {
    const e = await this._rpcRequest("getEpochSchedule", []), t = et(e, Jd);
    if ("error" in t)
      throw new at(t.error, "failed to get epoch schedule");
    const n = t.result;
    return new Ad(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot);
  }
  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */
  async getLeaderSchedule() {
    const e = await this._rpcRequest("getLeaderSchedule", []), t = et(e, Qd);
    if ("error" in t)
      throw new at(t.error, "failed to get leader schedule");
    return t.result;
  }
  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */
  async getMinimumBalanceForRentExemption(e, t) {
    const n = this._buildArgs([e], t), s = await this._rpcRequest("getMinimumBalanceForRentExemption", n), i = et(s, O0);
    return "error" in i ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : i.result;
  }
  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since RPC v1.9.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhashAndContext(e) {
    const {
      context: t,
      value: {
        blockhash: n
      }
    } = await this.getLatestBlockhashAndContext(e);
    return {
      context: t,
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
  async getRecentPerformanceSamples(e) {
    const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []), n = et(t, F0);
    if ("error" in n)
      throw new at(n.error, "failed to get recent performance samples");
    return n.result;
  }
  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since RPC v1.9.0. Please use {@link getFeeForMessage} instead.
   */
  async getFeeCalculatorForBlockhash(e, t) {
    const n = this._buildArgs([e], t), s = await this._rpcRequest("getFeeCalculatorForBlockhash", n), i = et(s, q0);
    if ("error" in i)
      throw new at(i.error, "failed to get fee calculator");
    const {
      context: o,
      value: f
    } = i.result;
    return {
      context: o,
      value: f !== null ? f.feeCalculator : null
    };
  }
  /**
   * Fetch the fee for a message from the cluster, return with context
   */
  async getFeeForMessage(e, t) {
    const n = ln(e.serialize()).toString("base64"), s = this._buildArgs([n], t), i = await this._rpcRequest("getFeeForMessage", s), o = et(i, Dt(rt(q())));
    if ("error" in o)
      throw new at(o.error, "failed to get fee for message");
    if (o.result === null)
      throw new Error("invalid blockhash");
    return o.result;
  }
  /**
   * Fetch a list of prioritization fees from recent blocks.
   */
  async getRecentPrioritizationFees(e) {
    var o;
    const t = (o = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : o.map((f) => f.toBase58()), n = t != null && t.length ? [t] : [], s = await this._rpcRequest("getRecentPrioritizationFees", n), i = et(s, Xd);
    if ("error" in i)
      throw new at(i.error, "failed to get recent prioritization fees");
    return i.result;
  }
  /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since RPC v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhash(e) {
    try {
      return (await this.getRecentBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error("failed to get recent blockhash: " + t);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhash(e) {
    try {
      return (await this.getLatestBlockhashAndContext(e)).value;
    } catch (t) {
      throw new Error("failed to get recent blockhash: " + t);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhashAndContext(e) {
    const {
      commitment: t,
      config: n
    } = Ot(e), s = this._buildArgs([], t, void 0, n), i = await this._rpcRequest("getLatestBlockhash", s), o = et(i, U0);
    if ("error" in o)
      throw new at(o.error, "failed to get latest blockhash");
    return o.result;
  }
  /**
   * Returns whether a blockhash is still valid or not
   */
  async isBlockhashValid(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgs([e], n, void 0, s), o = await this._rpcRequest("isBlockhashValid", i), f = et(o, D0);
    if ("error" in f)
      throw new at(f.error, "failed to determine if the blockhash `" + e + "`is valid");
    return f.result;
  }
  /**
   * Fetch the node version
   */
  async getVersion() {
    const e = await this._rpcRequest("getVersion", []), t = et(e, mt($d));
    if ("error" in t)
      throw new at(t.error, "failed to get version");
    return t.result;
  }
  /**
   * Fetch the genesis hash
   */
  async getGenesisHash() {
    const e = await this._rpcRequest("getGenesisHash", []), t = et(e, mt(Q()));
    if ("error" in t)
      throw new at(t.error, "failed to get genesis hash");
    return t.result;
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
  async getBlock(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgsAtLeastConfirmed([e], n, void 0, s), o = await this._rpcRequest("getBlock", i);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const f = et(o, B0);
          if ("error" in f)
            throw f.error;
          return f.result;
        }
        case "none": {
          const f = et(o, T0);
          if ("error" in f)
            throw f.error;
          return f.result;
        }
        default: {
          const f = et(o, x0);
          if ("error" in f)
            throw f.error;
          const {
            result: p
          } = f;
          return p ? {
            ...p,
            transactions: p.transactions.map(({
              transaction: b,
              meta: v,
              version: x
            }) => ({
              meta: v,
              transaction: {
                ...b,
                message: jr(x, b.message)
              },
              version: x
            }))
          } : null;
        }
      }
    } catch (f) {
      throw new at(f, "failed to get confirmed block");
    }
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized block
   */
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  // eslint-disable-next-line no-dupe-class-members
  async getParsedBlock(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s), o = await this._rpcRequest("getBlock", i);
    try {
      switch (s == null ? void 0 : s.transactionDetails) {
        case "accounts": {
          const f = et(o, L0);
          if ("error" in f)
            throw f.error;
          return f.result;
        }
        case "none": {
          const f = et(o, M0);
          if ("error" in f)
            throw f.error;
          return f.result;
        }
        default: {
          const f = et(o, C0);
          if ("error" in f)
            throw f.error;
          return f.result;
        }
      }
    } catch (f) {
      throw new at(f, "failed to get block");
    }
  }
  /*
   * Returns recent block production information from the current or previous epoch
   */
  async getBlockProduction(e) {
    let t, n;
    if (typeof e == "string")
      n = e;
    else if (e) {
      const {
        commitment: f,
        ...p
      } = e;
      n = f, t = p;
    }
    const s = this._buildArgs([], n, "base64", t), i = await this._rpcRequest("getBlockProduction", s), o = et(i, Gd);
    if ("error" in o)
      throw new at(o.error, "failed to get block production information");
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
  async getTransaction(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgsAtLeastConfirmed([e], n, void 0, s), o = await this._rpcRequest("getTransaction", i), f = et(o, Yr);
    if ("error" in f)
      throw new at(f.error, "failed to get transaction");
    const p = f.result;
    return p && {
      ...p,
      transaction: {
        ...p.transaction,
        message: jr(p.version, p.transaction.message)
      }
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */
  async getParsedTransaction(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s), o = await this._rpcRequest("getTransaction", i), f = et(o, kn);
    if ("error" in f)
      throw new at(f.error, "failed to get transaction");
    return f.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */
  async getParsedTransactions(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = e.map((p) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([p], n, "jsonParsed", s)
    }));
    return (await this._rpcBatchRequest(i)).map((p) => {
      const b = et(p, kn);
      if ("error" in b)
        throw new at(b.error, "failed to get transactions");
      return b.result;
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
  async getTransactions(e, t) {
    const {
      commitment: n,
      config: s
    } = Ot(t), i = e.map((p) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([p], n, void 0, s)
    }));
    return (await this._rpcBatchRequest(i)).map((p) => {
      const b = et(p, Yr);
      if ("error" in b)
        throw new at(b.error, "failed to get transactions");
      const v = b.result;
      return v && {
        ...v,
        transaction: {
          ...v.transaction,
          message: jr(v.version, v.transaction.message)
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
  async getConfirmedBlock(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t), s = await this._rpcRequest("getBlock", n), i = et(s, k0);
    if ("error" in i)
      throw new at(i.error, "failed to get confirmed block");
    const o = i.result;
    if (!o)
      throw new Error("Confirmed block " + e + " not found");
    const f = {
      ...o,
      transactions: o.transactions.map(({
        transaction: p,
        meta: b
      }) => {
        const v = new Ve(p.message);
        return {
          meta: b,
          transaction: {
            ...p,
            message: v
          }
        };
      })
    };
    return {
      ...f,
      transactions: f.transactions.map(({
        transaction: p,
        meta: b
      }) => ({
        meta: b,
        transaction: Ue.populate(p.message, p.signatures)
      }))
    };
  }
  /**
   * Fetch confirmed blocks between two slots
   */
  async getBlocks(e, t, n) {
    const s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], n), i = await this._rpcRequest("getBlocks", s), o = et(i, mt(nt(q())));
    if ("error" in o)
      throw new at(o.error, "failed to get blocks");
    return o.result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */
  async getBlockSignatures(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getBlock", n), i = et(s, Rs);
    if ("error" in i)
      throw new at(i.error, "failed to get block");
    const o = i.result;
    if (!o)
      throw new Error("Block " + e + " not found");
    return o;
  }
  /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getBlockSignatures} instead.
   */
  async getConfirmedBlockSignatures(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
      transactionDetails: "signatures",
      rewards: !1
    }), s = await this._rpcRequest("getBlock", n), i = et(s, Rs);
    if ("error" in i)
      throw new at(i.error, "failed to get confirmed block");
    const o = i.result;
    if (!o)
      throw new Error("Confirmed block " + e + " not found");
    return o;
  }
  /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getTransaction} instead.
   */
  async getConfirmedTransaction(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t), s = await this._rpcRequest("getTransaction", n), i = et(s, Yr);
    if ("error" in i)
      throw new at(i.error, "failed to get transaction");
    const o = i.result;
    if (!o) return o;
    const f = new Ve(o.transaction.message), p = o.transaction.signatures;
    return {
      ...o,
      transaction: Ue.populate(f, p)
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getParsedTransaction} instead.
   */
  async getParsedConfirmedTransaction(e, t) {
    const n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"), s = await this._rpcRequest("getTransaction", n), i = et(s, kn);
    if ("error" in i)
      throw new at(i.error, "failed to get confirmed transaction");
    return i.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getParsedTransactions} instead.
   */
  async getParsedConfirmedTransactions(e, t) {
    const n = e.map((o) => ({
      methodName: "getTransaction",
      args: this._buildArgsAtLeastConfirmed([o], t, "jsonParsed")
    }));
    return (await this._rpcBatchRequest(n)).map((o) => {
      const f = et(o, kn);
      if ("error" in f)
        throw new at(f.error, "failed to get confirmed transactions");
      return f.result;
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
  async getConfirmedSignaturesForAddress(e, t, n) {
    let s = {}, i = await this.getFirstAvailableBlock();
    for (; !("until" in s) && (t--, !(t <= 0 || t < i)); )
      try {
        const p = await this.getConfirmedBlockSignatures(t, "finalized");
        p.signatures.length > 0 && (s.until = p.signatures[p.signatures.length - 1].toString());
      } catch (p) {
        if (p instanceof Error && p.message.includes("skipped"))
          continue;
        throw p;
      }
    let o = await this.getSlot("finalized");
    for (; !("before" in s) && (n++, !(n > o)); )
      try {
        const p = await this.getConfirmedBlockSignatures(n);
        p.signatures.length > 0 && (s.before = p.signatures[p.signatures.length - 1].toString());
      } catch (p) {
        if (p instanceof Error && p.message.includes("skipped"))
          continue;
        throw p;
      }
    return (await this.getConfirmedSignaturesForAddress2(e, s)).map((p) => p.signature);
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   * @deprecated Deprecated since RPC v1.7.0. Please use {@link getSignaturesForAddress} instead.
   */
  async getConfirmedSignaturesForAddress2(e, t, n) {
    const s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t), i = await this._rpcRequest("getConfirmedSignaturesForAddress2", s), o = et(i, f0);
    if ("error" in o)
      throw new at(o.error, "failed to get confirmed signatures for address");
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
  async getSignaturesForAddress(e, t, n) {
    const s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t), i = await this._rpcRequest("getSignaturesForAddress", s), o = et(i, l0);
    if ("error" in o)
      throw new at(o.error, "failed to get signatures for address");
    return o.result;
  }
  async getAddressLookupTable(e, t) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(e, t);
    let i = null;
    return s !== null && (i = new _s({
      key: e,
      state: _s.deserialize(s.data)
    })), {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */
  async getNonceAndContext(e, t) {
    const {
      context: n,
      value: s
    } = await this.getAccountInfoAndContext(e, t);
    let i = null;
    return s !== null && (i = Ri.fromAccountData(s.data)), {
      context: n,
      value: i
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster
   */
  async getNonce(e, t) {
    return await this.getNonceAndContext(e, t).then((n) => n.value).catch((n) => {
      throw new Error("failed to get nonce for account " + e.toBase58() + ": " + n);
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
  async requestAirdrop(e, t) {
    const n = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]), s = et(n, $0);
    if ("error" in s)
      throw new at(s.error, `airdrop to ${e.toBase58()} failed`);
    return s.result;
  }
  /**
   * @internal
   */
  async _blockhashWithExpiryBlockHeight(e) {
    if (!e) {
      for (; this._pollingBlockhash; )
        await nn(100);
      const n = Date.now() - this._blockhashInfo.lastFetch >= xd;
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
      const e = Date.now(), t = this._blockhashInfo.latestBlockhash, n = t ? t.blockhash : null;
      for (let s = 0; s < 50; s++) {
        const i = await this.getLatestBlockhash("finalized");
        if (n !== i.blockhash)
          return this._blockhashInfo = {
            latestBlockhash: i,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          }, i;
        await nn(gd / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`);
    } finally {
      this._pollingBlockhash = !1;
    }
  }
  /**
   * get the stake minimum delegation
   */
  async getStakeMinimumDelegation(e) {
    const {
      commitment: t,
      config: n
    } = Ot(e), s = this._buildArgs([], t, "base64", n), i = await this._rpcRequest("getStakeMinimumDelegation", s), o = et(i, Dt(q()));
    if ("error" in o)
      throw new at(o.error, "failed to get stake minimum delegation");
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
  async simulateTransaction(e, t, n) {
    if ("message" in e) {
      const N = e.serialize(), M = yt.Buffer.from(N).toString("base64");
      if (Array.isArray(t) || n !== void 0)
        throw new Error("Invalid arguments");
      const Y = t || {};
      Y.encoding = "base64", "commitment" in Y || (Y.commitment = this.commitment), t && typeof t == "object" && "innerInstructions" in t && (Y.innerInstructions = t.innerInstructions);
      const Z = [M, Y], K = await this._rpcRequest("simulateTransaction", Z), $ = et(K, ms);
      if ("error" in $)
        throw new Error("failed to simulate transaction: " + $.error.message);
      return $.result;
    }
    let s;
    if (e instanceof Ue) {
      let k = e;
      s = new Ue(), s.feePayer = k.feePayer, s.instructions = e.instructions, s.nonceInfo = k.nonceInfo, s.signatures = k.signatures;
    } else
      s = Ue.populate(e), s._message = s._json = void 0;
    if (t !== void 0 && !Array.isArray(t))
      throw new Error("Invalid arguments");
    const i = t;
    if (s.nonceInfo && i)
      s.sign(...i);
    else {
      let k = this._disableBlockhashCaching;
      for (; ; ) {
        const N = await this._blockhashWithExpiryBlockHeight(k);
        if (s.lastValidBlockHeight = N.lastValidBlockHeight, s.recentBlockhash = N.blockhash, !i) break;
        if (s.sign(...i), !s.signature)
          throw new Error("!signature");
        const M = s.signature.toString("base64");
        if (!this._blockhashInfo.simulatedSignatures.includes(M) && !this._blockhashInfo.transactionSignatures.includes(M)) {
          this._blockhashInfo.simulatedSignatures.push(M);
          break;
        } else
          k = !0;
      }
    }
    const o = s._compile(), f = o.serialize(), b = s._serialize(f).toString("base64"), v = {
      encoding: "base64",
      commitment: this.commitment
    };
    if (n) {
      const k = (Array.isArray(n) ? n : o.nonProgramIds()).map((N) => N.toBase58());
      v.accounts = {
        encoding: "base64",
        addresses: k
      };
    }
    i && (v.sigVerify = !0), t && typeof t == "object" && "innerInstructions" in t && (v.innerInstructions = t.innerInstructions);
    const x = [b, v], U = await this._rpcRequest("simulateTransaction", x), B = et(U, ms);
    if ("error" in B) {
      let k;
      if ("data" in B.error && (k = B.error.data.logs, k && Array.isArray(k))) {
        const N = `
    `, M = N + k.join(N);
        console.error(B.error.message, M);
      }
      throw new ls({
        action: "simulate",
        signature: "",
        transactionMessage: B.error.message,
        logs: k
      });
    }
    return B.result;
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
  async sendTransaction(e, t, n) {
    if ("version" in e) {
      if (t && Array.isArray(t))
        throw new Error("Invalid arguments");
      const o = e.serialize();
      return await this.sendRawTransaction(o, t);
    }
    if (t === void 0 || !Array.isArray(t))
      throw new Error("Invalid arguments");
    const s = t;
    if (e.nonceInfo)
      e.sign(...s);
    else {
      let o = this._disableBlockhashCaching;
      for (; ; ) {
        const f = await this._blockhashWithExpiryBlockHeight(o);
        if (e.lastValidBlockHeight = f.lastValidBlockHeight, e.recentBlockhash = f.blockhash, e.sign(...s), !e.signature)
          throw new Error("!signature");
        const p = e.signature.toString("base64");
        if (this._blockhashInfo.transactionSignatures.includes(p))
          o = !0;
        else {
          this._blockhashInfo.transactionSignatures.push(p);
          break;
        }
      }
    }
    const i = e.serialize();
    return await this.sendRawTransaction(i, n);
  }
  /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */
  async sendRawTransaction(e, t) {
    const n = ln(e).toString("base64");
    return await this.sendEncodedTransaction(n, t);
  }
  /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */
  async sendEncodedTransaction(e, t) {
    const n = {
      encoding: "base64"
    }, s = t && t.skipPreflight, i = s === !0 ? "processed" : t && t.preflightCommitment || this.commitment;
    t && t.maxRetries != null && (n.maxRetries = t.maxRetries), t && t.minContextSlot != null && (n.minContextSlot = t.minContextSlot), s && (n.skipPreflight = s), i && (n.preflightCommitment = i);
    const o = [e, n], f = await this._rpcRequest("sendTransaction", o), p = et(f, z0);
    if ("error" in p) {
      let b;
      throw "data" in p.error && (b = p.error.data.logs), new ls({
        action: s ? "send" : "simulate",
        signature: "",
        transactionMessage: p.error.message,
        logs: b
      });
    }
    return p.result;
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
  _wsOnError(e) {
    this._rpcWebSocketConnected = !1, console.error("ws error:", e.message);
  }
  /**
   * @internal
   */
  _wsOnClose(e) {
    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), e === 1e3) {
      this._updateSubscriptions();
      return;
    }
    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([t, n]) => {
      this._setSubscription(t, {
        ...n,
        state: "pending"
      });
    });
  }
  /**
   * @internal
   */
  _setSubscription(e, t) {
    var s;
    const n = (s = this._subscriptionsByHash[e]) == null ? void 0 : s.state;
    if (this._subscriptionsByHash[e] = t, n !== t.state) {
      const i = this._subscriptionStateChangeCallbacksByHash[e];
      i && i.forEach((o) => {
        try {
          o(t.state);
        } catch {
        }
      });
    }
  }
  /**
   * @internal
   */
  _onSubscriptionStateChange(e, t) {
    var i;
    const n = this._subscriptionHashByClientSubscriptionId[e];
    if (n == null)
      return () => {
      };
    const s = (i = this._subscriptionStateChangeCallbacksByHash)[n] || (i[n] = /* @__PURE__ */ new Set());
    return s.add(t), () => {
      s.delete(t), s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n];
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
    const e = this._rpcWebSocketGeneration, t = () => e === this._rpcWebSocketGeneration;
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
                  const f = await this._rpcWebSocket.call(o, i);
                  this._setSubscription(n, {
                    ...s,
                    serverSubscriptionId: f,
                    state: "subscribed"
                  }), this._subscriptionCallbacksByServerSubscriptionId[f] = s.callbacks, await this._updateSubscriptions();
                } catch (f) {
                  if (console.error(`Received ${f instanceof Error ? "" : "JSON-RPC "}error calling \`${o}\``, {
                    args: i,
                    error: f
                  }), !t())
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
                  } catch (f) {
                    if (f instanceof Error && console.error(`${o} error:`, f.message), !t())
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
  _handleServerNotification(e, t) {
    const n = this._subscriptionCallbacksByServerSubscriptionId[e];
    n !== void 0 && n.forEach((s) => {
      try {
        s(
          ...t
        );
      } catch (i) {
        console.error(i);
      }
    });
  }
  /**
   * @internal
   */
  _wsOnAccountNotification(e) {
    const {
      result: t,
      subscription: n
    } = et(e, h0);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  /**
   * @internal
   */
  _makeSubscription(e, t) {
    const n = this._nextClientSubscriptionId++, s = ds([e.method, t]), i = this._subscriptionsByHash[s];
    return i === void 0 ? this._subscriptionsByHash[s] = {
      ...e,
      args: t,
      callbacks: /* @__PURE__ */ new Set([e.callback]),
      state: "pending"
    } : i.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[n] = s, this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n], delete this._subscriptionHashByClientSubscriptionId[n];
      const o = this._subscriptionsByHash[s];
      re(o !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), o.callbacks.delete(e.callback), await this._updateSubscriptions();
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
  onAccountChange(e, t, n) {
    const {
      commitment: s,
      config: i
    } = Ot(n), o = this._buildArgs(
      [e.toBase58()],
      s || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      i
    );
    return this._makeSubscription({
      callback: t,
      method: "accountSubscribe",
      unsubscribeMethod: "accountUnsubscribe"
    }, o);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "account change");
  }
  /**
   * @internal
   */
  _wsOnProgramAccountNotification(e) {
    const {
      result: t,
      subscription: n
    } = et(e, p0);
    this._handleServerNotification(n, [{
      accountId: t.value.pubkey,
      accountInfo: t.value.account
    }, t.context]);
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
  onProgramAccountChange(e, t, n, s) {
    const {
      commitment: i,
      config: o
    } = Ot(n), f = this._buildArgs(
      [e.toBase58()],
      i || this._commitment || "finalized",
      // Apply connection/server default.
      "base64",
      o || (s ? {
        filters: gs(s)
      } : void 0)
      /* extra */
    );
    return this._makeSubscription({
      callback: t,
      method: "programSubscribe",
      unsubscribeMethod: "programUnsubscribe"
    }, f);
  }
  /**
   * Deregister an account notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeProgramAccountChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "program account change");
  }
  /**
   * Registers a callback to be invoked whenever logs are emitted.
   */
  onLogs(e, t, n) {
    const s = this._buildArgs(
      [typeof e == "object" ? {
        mentions: [e.toString()]
      } : e],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    );
    return this._makeSubscription({
      callback: t,
      method: "logsSubscribe",
      unsubscribeMethod: "logsUnsubscribe"
    }, s);
  }
  /**
   * Deregister a logs callback.
   *
   * @param clientSubscriptionId client subscription id to deregister.
   */
  async removeOnLogsListener(e) {
    await this._unsubscribeClientSubscription(e, "logs");
  }
  /**
   * @internal
   */
  _wsOnLogsNotification(e) {
    const {
      result: t,
      subscription: n
    } = et(e, G0);
    this._handleServerNotification(n, [t.value, t.context]);
  }
  /**
   * @internal
   */
  _wsOnSlotNotification(e) {
    const {
      result: t,
      subscription: n
    } = et(e, g0);
    this._handleServerNotification(n, [t]);
  }
  /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */
  onSlotChange(e) {
    return this._makeSubscription(
      {
        callback: e,
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
  async removeSlotChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "slot change");
  }
  /**
   * @internal
   */
  _wsOnSlotUpdatesNotification(e) {
    const {
      result: t,
      subscription: n
    } = et(e, y0);
    this._handleServerNotification(n, [t]);
  }
  /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */
  onSlotUpdate(e) {
    return this._makeSubscription(
      {
        callback: e,
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
  async removeSlotUpdateListener(e) {
    await this._unsubscribeClientSubscription(e, "slot update");
  }
  /**
   * @internal
   */
  async _unsubscribeClientSubscription(e, t) {
    const n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
    n ? await n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`);
  }
  _buildArgs(e, t, n, s) {
    const i = t || this._commitment;
    if (i || n || s) {
      let o = {};
      n && (o.encoding = n), i && (o.commitment = i), s && (o = Object.assign(o, s)), e.push(o);
    }
    return e;
  }
  /**
   * @internal
   */
  _buildArgsAtLeastConfirmed(e, t, n, s) {
    const i = t || this._commitment;
    if (i && !["confirmed", "finalized"].includes(i))
      throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
    return this._buildArgs(e, t, n, s);
  }
  /**
   * @internal
   */
  _wsOnSignatureNotification(e) {
    const {
      result: t,
      subscription: n
    } = et(e, R0);
    t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n), this._handleServerNotification(n, t.value === "receivedSignature" ? [{
      type: "received"
    }, t.context] : [{
      type: "status",
      result: t.value
    }, t.context]);
  }
  /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */
  onSignature(e, t, n) {
    const s = this._buildArgs(
      [e],
      n || this._commitment || "finalized"
      // Apply connection/server default.
    ), i = this._makeSubscription({
      callback: (o, f) => {
        if (o.type === "status") {
          t(o.result, f);
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
  onSignatureWithOptions(e, t, n) {
    const {
      commitment: s,
      ...i
    } = {
      ...n,
      commitment: n && n.commitment || this._commitment || "finalized"
      // Apply connection/server default.
    }, o = this._buildArgs([e], s, void 0, i), f = this._makeSubscription({
      callback: (p, b) => {
        t(p, b);
        try {
          this.removeSignatureListener(f);
        } catch {
        }
      },
      method: "signatureSubscribe",
      unsubscribeMethod: "signatureUnsubscribe"
    }, o);
    return f;
  }
  /**
   * Deregister a signature notification callback
   *
   * @param clientSubscriptionId client subscription id to deregister
   */
  async removeSignatureListener(e) {
    await this._unsubscribeClientSubscription(e, "signature result");
  }
  /**
   * @internal
   */
  _wsOnRootNotification(e) {
    const {
      result: t,
      subscription: n
    } = et(e, w0);
    this._handleServerNotification(n, [t]);
  }
  /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */
  onRootChange(e) {
    return this._makeSubscription(
      {
        callback: e,
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
  async removeRootChangeListener(e) {
    await this._unsubscribeClientSubscription(e, "root change");
  }
}
Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: T.struct([T.u32("instruction"), hn("recentSlot"), T.u8("bumpSeed")])
  },
  FreezeLookupTable: {
    index: 1,
    layout: T.struct([T.u32("instruction")])
  },
  ExtendLookupTable: {
    index: 2,
    layout: T.struct([T.u32("instruction"), hn(), T.seq(Rt(), T.offset(T.u32(), -8), "addresses")])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: T.struct([T.u32("instruction")])
  },
  CloseLookupTable: {
    index: 4,
    layout: T.struct([T.u32("instruction")])
  }
});
new ft("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
  RequestUnits: {
    index: 0,
    layout: T.struct([T.u8("instruction"), T.u32("units"), T.u32("additionalFee")])
  },
  RequestHeapFrame: {
    index: 1,
    layout: T.struct([T.u8("instruction"), T.u32("bytes")])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: T.struct([T.u8("instruction"), T.u32("units")])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: T.struct([T.u8("instruction"), hn("microLamports")])
  }
});
new ft("ComputeBudget111111111111111111111111111111");
T.struct([T.u8("numSignatures"), T.u8("padding"), T.u16("signatureOffset"), T.u16("signatureInstructionIndex"), T.u16("publicKeyOffset"), T.u16("publicKeyInstructionIndex"), T.u16("messageDataOffset"), T.u16("messageDataSize"), T.u16("messageInstructionIndex")]);
new ft("Ed25519SigVerify111111111111111111111111111");
nd.utils.isValidPrivateKey;
T.struct([T.u8("numSignatures"), T.u16("signatureOffset"), T.u8("signatureInstructionIndex"), T.u16("ethAddressOffset"), T.u8("ethAddressInstructionIndex"), T.u16("messageDataOffset"), T.u16("messageDataSize"), T.u8("messageInstructionIndex"), T.blob(20, "ethAddress"), T.blob(64, "signature"), T.u8("recoveryId")]);
new ft("KeccakSecp256k11111111111111111111111111111");
var So;
new ft("StakeConfig11111111111111111111111111111111");
class vo {
  /**
   * Create a new Lockup object
   */
  constructor(e, t, n) {
    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = n;
  }
  /**
   * Default, inactive Lockup value
   */
}
So = vo;
vo.default = new So(0, 0, ft.default);
Object.freeze({
  Initialize: {
    index: 0,
    layout: T.struct([T.u32("instruction"), cd(), ud()])
  },
  Authorize: {
    index: 1,
    layout: T.struct([T.u32("instruction"), Rt("newAuthorized"), T.u32("stakeAuthorizationType")])
  },
  Delegate: {
    index: 2,
    layout: T.struct([T.u32("instruction")])
  },
  Split: {
    index: 3,
    layout: T.struct([T.u32("instruction"), T.ns64("lamports")])
  },
  Withdraw: {
    index: 4,
    layout: T.struct([T.u32("instruction"), T.ns64("lamports")])
  },
  Deactivate: {
    index: 5,
    layout: T.struct([T.u32("instruction")])
  },
  Merge: {
    index: 7,
    layout: T.struct([T.u32("instruction")])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: T.struct([T.u32("instruction"), Rt("newAuthorized"), T.u32("stakeAuthorizationType"), rn("authoritySeed"), Rt("authorityOwner")])
  }
});
new ft("Stake11111111111111111111111111111111111111");
Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: T.struct([T.u32("instruction"), fd()])
  },
  Authorize: {
    index: 1,
    layout: T.struct([T.u32("instruction"), Rt("newAuthorized"), T.u32("voteAuthorizationType")])
  },
  Withdraw: {
    index: 3,
    layout: T.struct([T.u32("instruction"), T.ns64("lamports")])
  },
  UpdateValidatorIdentity: {
    index: 4,
    layout: T.struct([T.u32("instruction")])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: T.struct([T.u32("instruction"), ld()])
  }
});
new ft("Vote111111111111111111111111111111111111111");
new ft("Va1idator1nfo111111111111111111111111111111");
X({
  name: Q(),
  website: ct(Q()),
  details: ct(Q()),
  iconUrl: ct(Q()),
  keybaseUsername: ct(Q())
});
new ft("Vote111111111111111111111111111111111111111");
T.struct([
  Rt("nodePubkey"),
  Rt("authorizedWithdrawer"),
  T.u8("commission"),
  T.nu64(),
  // votes.length
  T.seq(T.struct([T.nu64("slot"), T.u32("confirmationCount")]), T.offset(T.u32(), -8), "votes"),
  T.u8("rootSlotValid"),
  T.nu64("rootSlot"),
  T.nu64(),
  // authorizedVoters.length
  T.seq(T.struct([T.nu64("epoch"), Rt("authorizedVoter")]), T.offset(T.u32(), -8), "authorizedVoters"),
  T.struct([T.seq(T.struct([Rt("authorizedPubkey"), T.nu64("epochOfLastAuthorizedSwitch"), T.nu64("targetEpoch")]), 32, "buf"), T.nu64("idx"), T.u8("isEmpty")], "priorVoters"),
  T.nu64(),
  // epochCredits.length
  T.seq(T.struct([T.nu64("epoch"), T.nu64("credits"), T.nu64("prevCredits")]), T.offset(T.u32(), -8), "epochCredits"),
  T.struct([T.nu64("slot"), T.nu64("timestamp")], "lastTimestamp")
]);
window.signAndSendTransaction = async function(r) {
  const e = new K0("https://api.devnet.solana.com", "confirmed"), t = Ue.from(r), { signature: n } = await window.solana.signAndSendTransaction(t);
  return await e.confirmTransaction(n, "confirmed"), n;
};
