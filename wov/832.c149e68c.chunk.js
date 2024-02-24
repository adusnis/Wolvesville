!(function () {
  try {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      e = new Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "28cfadf4-33d8-4868-b691-de0b7bf9b095"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-28cfadf4-33d8-4868-b691-de0b7bf9b095"));
  } catch (t) {}
})();
var _global =
  "undefined" !== typeof window
    ? window
    : "undefined" !== typeof global
    ? global
    : "undefined" !== typeof self
    ? self
    : {};
(_global.SENTRY_RELEASE = { id: "63e24939348758afbdd44c0bbe178a40e9895a2a" }),
  (self.webpackChunkwolvesville = self.webpackChunkwolvesville || []).push([
    [832],
    {
      27832: function (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            default: function () {
              return lottie_svgMJGYILXD;
            },
          });
        var _chunk_B7OIQIGJ_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(26298),
          dt = (0, _chunk_B7OIQIGJ_js__WEBPACK_IMPORTED_MODULE_0__.a)(function (
            exports,
            module
          ) {
            var t, e;
            typeof navigator < "u" &&
              ((t = exports),
              (e = function () {
                var svgNS = "http://www.w3.org/2000/svg",
                  locationHref = "",
                  _useWebWorker = !1,
                  initialDefaultFrame = -999999,
                  setWebWorker = function (t) {
                    _useWebWorker = !!t;
                  },
                  getWebWorker = function () {
                    return _useWebWorker;
                  },
                  setLocationHref = function (t) {
                    locationHref = t;
                  },
                  getLocationHref = function () {
                    return locationHref;
                  };
                function createTag(t) {
                  return document.createElement(t);
                }
                function extendPrototype(t, e) {
                  var r,
                    i,
                    s = t.length;
                  for (r = 0; r < s; r += 1)
                    for (var a in (i = t[r].prototype))
                      Object.prototype.hasOwnProperty.call(i, a) &&
                        (e.prototype[a] = i[a]);
                }
                function getDescriptor(t, e) {
                  return Object.getOwnPropertyDescriptor(t, e);
                }
                function createProxyFunction(t) {
                  function e() {}
                  return (e.prototype = t), e;
                }
                var audioControllerFactory = (function () {
                    function t(t) {
                      (this.audios = []),
                        (this.audioFactory = t),
                        (this._volume = 1),
                        (this._isMuted = !1);
                    }
                    return (
                      (t.prototype = {
                        addAudio: function (t) {
                          this.audios.push(t);
                        },
                        pause: function () {
                          var t,
                            e = this.audios.length;
                          for (t = 0; t < e; t += 1) this.audios[t].pause();
                        },
                        resume: function () {
                          var t,
                            e = this.audios.length;
                          for (t = 0; t < e; t += 1) this.audios[t].resume();
                        },
                        setRate: function (t) {
                          var e,
                            r = this.audios.length;
                          for (e = 0; e < r; e += 1) this.audios[e].setRate(t);
                        },
                        createAudio: function (t) {
                          return this.audioFactory
                            ? this.audioFactory(t)
                            : window.Howl
                            ? new window.Howl({ src: [t] })
                            : {
                                isPlaying: !1,
                                play: function () {
                                  this.isPlaying = !0;
                                },
                                seek: function () {
                                  this.isPlaying = !1;
                                },
                                playing: function () {},
                                rate: function () {},
                                setVolume: function () {},
                              };
                        },
                        setAudioFactory: function (t) {
                          this.audioFactory = t;
                        },
                        setVolume: function (t) {
                          (this._volume = t), this._updateVolume();
                        },
                        mute: function () {
                          (this._isMuted = !0), this._updateVolume();
                        },
                        unmute: function () {
                          (this._isMuted = !1), this._updateVolume();
                        },
                        getVolume: function () {
                          return this._volume;
                        },
                        _updateVolume: function () {
                          var t,
                            e = this.audios.length;
                          for (t = 0; t < e; t += 1)
                            this.audios[t].volume(
                              this._volume * (this._isMuted ? 0 : 1)
                            );
                        },
                      }),
                      function () {
                        return new t();
                      }
                    );
                  })(),
                  createTypedArray = (function () {
                    function t(t, e) {
                      var r,
                        i = 0,
                        s = [];
                      switch (t) {
                        case "int16":
                        case "uint8c":
                          r = 1;
                          break;
                        default:
                          r = 1.1;
                      }
                      for (i = 0; i < e; i += 1) s.push(r);
                      return s;
                    }
                    return "function" == typeof Uint8ClampedArray &&
                      "function" == typeof Float32Array
                      ? function (e, r) {
                          return "float32" === e
                            ? new Float32Array(r)
                            : "int16" === e
                            ? new Int16Array(r)
                            : "uint8c" === e
                            ? new Uint8ClampedArray(r)
                            : t(e, r);
                        }
                      : t;
                  })();
                function createSizedArray(t) {
                  return Array.apply(null, { length: t });
                }
                function _typeof$6(t) {
                  return (_typeof$6 =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                var subframeEnabled = !0,
                  expressionsPlugin = null,
                  expressionsInterfaces = null,
                  idPrefix$1 = "",
                  isSafari = /^((?!chrome|android).)*safari/i.test(
                    navigator.userAgent
                  ),
                  bmPow = Math.pow,
                  bmSqrt = Math.sqrt,
                  bmFloor = Math.floor,
                  bmMin = Math.min,
                  BMMath = {};
                !(function () {
                  var t,
                    e = [
                      "abs",
                      "acos",
                      "acosh",
                      "asin",
                      "asinh",
                      "atan",
                      "atanh",
                      "atan2",
                      "ceil",
                      "cbrt",
                      "expm1",
                      "clz32",
                      "cos",
                      "cosh",
                      "exp",
                      "floor",
                      "fround",
                      "hypot",
                      "imul",
                      "log",
                      "log1p",
                      "log2",
                      "log10",
                      "max",
                      "min",
                      "pow",
                      "random",
                      "round",
                      "sign",
                      "sin",
                      "sinh",
                      "sqrt",
                      "tan",
                      "tanh",
                      "trunc",
                      "E",
                      "LN10",
                      "LN2",
                      "LOG10E",
                      "LOG2E",
                      "PI",
                      "SQRT1_2",
                      "SQRT2",
                    ],
                    r = e.length;
                  for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
                })(),
                  (BMMath.random = Math.random),
                  (BMMath.abs = function (t) {
                    if ("object" === _typeof$6(t) && t.length) {
                      var e,
                        r = createSizedArray(t.length),
                        i = t.length;
                      for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
                      return r;
                    }
                    return Math.abs(t);
                  });
                var defaultCurveSegments = 150,
                  degToRads = Math.PI / 180,
                  roundCorner = 0.5519;
                function BMEnterFrameEvent(t, e, r, i) {
                  (this.type = t),
                    (this.currentTime = e),
                    (this.totalTime = r),
                    (this.direction = i < 0 ? -1 : 1);
                }
                function BMCompleteEvent(t, e) {
                  (this.type = t), (this.direction = e < 0 ? -1 : 1);
                }
                function BMCompleteLoopEvent(t, e, r, i) {
                  (this.type = t),
                    (this.currentLoop = r),
                    (this.totalLoops = e),
                    (this.direction = i < 0 ? -1 : 1);
                }
                function BMSegmentStartEvent(t, e, r) {
                  (this.type = t),
                    (this.firstFrame = e),
                    (this.totalFrames = r);
                }
                function BMDestroyEvent(t, e) {
                  (this.type = t), (this.target = e);
                }
                function BMRenderFrameErrorEvent(t, e) {
                  (this.type = "renderFrameError"),
                    (this.nativeError = t),
                    (this.currentTime = e);
                }
                function BMConfigErrorEvent(t) {
                  (this.type = "configError"), (this.nativeError = t);
                }
                var createElementID = (function () {
                  var t = 0;
                  return function () {
                    return idPrefix$1 + "__lottie_element_" + (t += 1);
                  };
                })();
                function HSVtoRGB(t, e, r) {
                  var i, s, a, n, o, h, l, p;
                  switch (
                    ((h = r * (1 - e)),
                    (l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e)),
                    (p = r * (1 - (1 - o) * e)),
                    n % 6)
                  ) {
                    case 0:
                      (i = r), (s = p), (a = h);
                      break;
                    case 1:
                      (i = l), (s = r), (a = h);
                      break;
                    case 2:
                      (i = h), (s = r), (a = p);
                      break;
                    case 3:
                      (i = h), (s = l), (a = r);
                      break;
                    case 4:
                      (i = p), (s = h), (a = r);
                      break;
                    case 5:
                      (i = r), (s = h), (a = l);
                  }
                  return [i, s, a];
                }
                function RGBtoHSV(t, e, r) {
                  var i,
                    s = Math.max(t, e, r),
                    a = Math.min(t, e, r),
                    n = s - a,
                    o = 0 === s ? 0 : n / s,
                    h = s / 255;
                  switch (s) {
                    case a:
                      i = 0;
                      break;
                    case t:
                      (i = e - r + n * (e < r ? 6 : 0)), (i /= 6 * n);
                      break;
                    case e:
                      (i = r - t + 2 * n), (i /= 6 * n);
                      break;
                    case r:
                      (i = t - e + 4 * n), (i /= 6 * n);
                  }
                  return [i, o, h];
                }
                function addSaturationToRGB(t, e) {
                  var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                  return (
                    (r[1] += e),
                    r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
                    HSVtoRGB(r[0], r[1], r[2])
                  );
                }
                function addBrightnessToRGB(t, e) {
                  var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                  return (
                    (r[2] += e),
                    r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
                    HSVtoRGB(r[0], r[1], r[2])
                  );
                }
                function addHueToRGB(t, e) {
                  var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                  return (
                    (r[0] += e / 360),
                    r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
                    HSVtoRGB(r[0], r[1], r[2])
                  );
                }
                var rgbToHex = (function () {
                    var t,
                      e,
                      r = [];
                    for (t = 0; t < 256; t += 1)
                      (e = t.toString(16)),
                        (r[t] = 1 === e.length ? "0" + e : e);
                    return function (t, e, i) {
                      return (
                        t < 0 && (t = 0),
                        e < 0 && (e = 0),
                        i < 0 && (i = 0),
                        "#" + r[t] + r[e] + r[i]
                      );
                    };
                  })(),
                  setSubframeEnabled = function (t) {
                    subframeEnabled = !!t;
                  },
                  getSubframeEnabled = function () {
                    return subframeEnabled;
                  },
                  setExpressionsPlugin = function (t) {
                    expressionsPlugin = t;
                  },
                  getExpressionsPlugin = function () {
                    return expressionsPlugin;
                  },
                  setExpressionInterfaces = function (t) {
                    expressionsInterfaces = t;
                  },
                  getExpressionInterfaces = function () {
                    return expressionsInterfaces;
                  },
                  setDefaultCurveSegments = function (t) {
                    defaultCurveSegments = t;
                  },
                  getDefaultCurveSegments = function () {
                    return defaultCurveSegments;
                  },
                  setIdPrefix = function (t) {
                    idPrefix$1 = t;
                  };
                function createNS(t) {
                  return document.createElementNS(svgNS, t);
                }
                function _typeof$5(t) {
                  return (_typeof$5 =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                var dataManager = (function () {
                    var t,
                      e,
                      r = 1,
                      i = [],
                      s = {
                        onmessage: function () {},
                        postMessage: function (e) {
                          t({ data: e });
                        },
                      },
                      a = {
                        postMessage: function (t) {
                          s.onmessage({ data: t });
                        },
                      };
                    function n() {
                      e ||
                        ((e = (function (e) {
                          if (window.Worker && window.Blob && getWebWorker()) {
                            var r = new Blob(
                                [
                                  "var _workerSelf = self; self.onmessage = ",
                                  e.toString(),
                                ],
                                { type: "text/javascript" }
                              ),
                              i = URL.createObjectURL(r);
                            return new Worker(i);
                          }
                          return (t = e), s;
                        })(function (t) {
                          if (
                            (a.dataManager ||
                              (a.dataManager = (function () {
                                function t(s, a) {
                                  var n,
                                    o,
                                    h,
                                    l,
                                    f,
                                    c,
                                    m = s.length;
                                  for (o = 0; o < m; o += 1)
                                    if ("ks" in (n = s[o]) && !n.completed) {
                                      if (((n.completed = !0), n.hasMask)) {
                                        var u = n.masksProperties;
                                        for (l = u.length, h = 0; h < l; h += 1)
                                          if (u[h].pt.k.i) i(u[h].pt.k);
                                          else
                                            for (
                                              c = u[h].pt.k.length, f = 0;
                                              f < c;
                                              f += 1
                                            )
                                              u[h].pt.k[f].s &&
                                                i(u[h].pt.k[f].s[0]),
                                                u[h].pt.k[f].e &&
                                                  i(u[h].pt.k[f].e[0]);
                                      }
                                      0 === n.ty
                                        ? ((n.layers = e(n.refId, a)),
                                          t(n.layers, a))
                                        : 4 === n.ty
                                        ? r(n.shapes)
                                        : 5 === n.ty && p(n);
                                    }
                                }
                                function e(t, e) {
                                  var r = (function (t, e) {
                                    for (var r = 0, i = e.length; r < i; ) {
                                      if (e[r].id === t) return e[r];
                                      r += 1;
                                    }
                                    return null;
                                  })(t, e);
                                  return r
                                    ? r.layers.__used
                                      ? JSON.parse(JSON.stringify(r.layers))
                                      : ((r.layers.__used = !0), r.layers)
                                    : null;
                                }
                                function r(t) {
                                  var e, s, a;
                                  for (e = t.length - 1; e >= 0; e -= 1)
                                    if ("sh" === t[e].ty)
                                      if (t[e].ks.k.i) i(t[e].ks.k);
                                      else
                                        for (
                                          a = t[e].ks.k.length, s = 0;
                                          s < a;
                                          s += 1
                                        )
                                          t[e].ks.k[s].s &&
                                            i(t[e].ks.k[s].s[0]),
                                            t[e].ks.k[s].e &&
                                              i(t[e].ks.k[s].e[0]);
                                    else "gr" === t[e].ty && r(t[e].it);
                                }
                                function i(t) {
                                  var e,
                                    r = t.i.length;
                                  for (e = 0; e < r; e += 1)
                                    (t.i[e][0] += t.v[e][0]),
                                      (t.i[e][1] += t.v[e][1]),
                                      (t.o[e][0] += t.v[e][0]),
                                      (t.o[e][1] += t.v[e][1]);
                                }
                                function s(t, e) {
                                  var r = e ? e.split(".") : [100, 100, 100];
                                  return (
                                    t[0] > r[0] ||
                                    (!(r[0] > t[0]) &&
                                      (t[1] > r[1] ||
                                        (!(r[1] > t[1]) &&
                                          (t[2] > r[2] ||
                                            (!(r[2] > t[2]) && null)))))
                                  );
                                }
                                var a = (function () {
                                    var t = [4, 4, 14];
                                    function e(t) {
                                      var e = t.t.d;
                                      t.t.d = { k: [{ s: e, t: 0 }] };
                                    }
                                    function r(t) {
                                      var r,
                                        i = t.length;
                                      for (r = 0; r < i; r += 1)
                                        5 === t[r].ty && e(t[r]);
                                    }
                                    return function (e) {
                                      if (
                                        s(t, e.v) &&
                                        (r(e.layers), e.assets)
                                      ) {
                                        var i,
                                          a = e.assets.length;
                                        for (i = 0; i < a; i += 1)
                                          e.assets[i].layers &&
                                            r(e.assets[i].layers);
                                      }
                                    };
                                  })(),
                                  n = (function () {
                                    var t = [4, 7, 99];
                                    return function (e) {
                                      if (e.chars && !s(t, e.v)) {
                                        var i,
                                          a = e.chars.length;
                                        for (i = 0; i < a; i += 1) {
                                          var n = e.chars[i];
                                          n.data &&
                                            n.data.shapes &&
                                            (r(n.data.shapes),
                                            (n.data.ip = 0),
                                            (n.data.op = 99999),
                                            (n.data.st = 0),
                                            (n.data.sr = 1),
                                            (n.data.ks = {
                                              p: { k: [0, 0], a: 0 },
                                              s: { k: [100, 100], a: 0 },
                                              a: { k: [0, 0], a: 0 },
                                              r: { k: 0, a: 0 },
                                              o: { k: 100, a: 0 },
                                            }),
                                            e.chars[i].t ||
                                              (n.data.shapes.push({ ty: "no" }),
                                              n.data.shapes[0].it.push({
                                                p: { k: [0, 0], a: 0 },
                                                s: { k: [100, 100], a: 0 },
                                                a: { k: [0, 0], a: 0 },
                                                r: { k: 0, a: 0 },
                                                o: { k: 100, a: 0 },
                                                sk: { k: 0, a: 0 },
                                                sa: { k: 0, a: 0 },
                                                ty: "tr",
                                              })));
                                        }
                                      }
                                    };
                                  })(),
                                  o = (function () {
                                    var t = [5, 7, 15];
                                    function e(t) {
                                      var e = t.t.p;
                                      "number" == typeof e.a &&
                                        (e.a = { a: 0, k: e.a }),
                                        "number" == typeof e.p &&
                                          (e.p = { a: 0, k: e.p }),
                                        "number" == typeof e.r &&
                                          (e.r = { a: 0, k: e.r });
                                    }
                                    function r(t) {
                                      var r,
                                        i = t.length;
                                      for (r = 0; r < i; r += 1)
                                        5 === t[r].ty && e(t[r]);
                                    }
                                    return function (e) {
                                      if (
                                        s(t, e.v) &&
                                        (r(e.layers), e.assets)
                                      ) {
                                        var i,
                                          a = e.assets.length;
                                        for (i = 0; i < a; i += 1)
                                          e.assets[i].layers &&
                                            r(e.assets[i].layers);
                                      }
                                    };
                                  })(),
                                  h = (function () {
                                    var t = [4, 1, 9];
                                    function e(t) {
                                      var r,
                                        i,
                                        s,
                                        a = t.length;
                                      for (r = 0; r < a; r += 1)
                                        if ("gr" === t[r].ty) e(t[r].it);
                                        else if (
                                          "fl" === t[r].ty ||
                                          "st" === t[r].ty
                                        )
                                          if (t[r].c.k && t[r].c.k[0].i)
                                            for (
                                              s = t[r].c.k.length, i = 0;
                                              i < s;
                                              i += 1
                                            )
                                              t[r].c.k[i].s &&
                                                ((t[r].c.k[i].s[0] /= 255),
                                                (t[r].c.k[i].s[1] /= 255),
                                                (t[r].c.k[i].s[2] /= 255),
                                                (t[r].c.k[i].s[3] /= 255)),
                                                t[r].c.k[i].e &&
                                                  ((t[r].c.k[i].e[0] /= 255),
                                                  (t[r].c.k[i].e[1] /= 255),
                                                  (t[r].c.k[i].e[2] /= 255),
                                                  (t[r].c.k[i].e[3] /= 255));
                                          else
                                            (t[r].c.k[0] /= 255),
                                              (t[r].c.k[1] /= 255),
                                              (t[r].c.k[2] /= 255),
                                              (t[r].c.k[3] /= 255);
                                    }
                                    function r(t) {
                                      var r,
                                        i = t.length;
                                      for (r = 0; r < i; r += 1)
                                        4 === t[r].ty && e(t[r].shapes);
                                    }
                                    return function (e) {
                                      if (
                                        s(t, e.v) &&
                                        (r(e.layers), e.assets)
                                      ) {
                                        var i,
                                          a = e.assets.length;
                                        for (i = 0; i < a; i += 1)
                                          e.assets[i].layers &&
                                            r(e.assets[i].layers);
                                      }
                                    };
                                  })(),
                                  l = (function () {
                                    var t = [4, 4, 18];
                                    function e(t) {
                                      var r, i, s;
                                      for (r = t.length - 1; r >= 0; r -= 1)
                                        if ("sh" === t[r].ty)
                                          if (t[r].ks.k.i)
                                            t[r].ks.k.c = t[r].closed;
                                          else
                                            for (
                                              s = t[r].ks.k.length, i = 0;
                                              i < s;
                                              i += 1
                                            )
                                              t[r].ks.k[i].s &&
                                                (t[r].ks.k[i].s[0].c =
                                                  t[r].closed),
                                                t[r].ks.k[i].e &&
                                                  (t[r].ks.k[i].e[0].c =
                                                    t[r].closed);
                                        else "gr" === t[r].ty && e(t[r].it);
                                    }
                                    function r(t) {
                                      var r,
                                        i,
                                        s,
                                        a,
                                        n,
                                        o,
                                        h = t.length;
                                      for (i = 0; i < h; i += 1) {
                                        if ((r = t[i]).hasMask) {
                                          var l = r.masksProperties;
                                          for (
                                            a = l.length, s = 0;
                                            s < a;
                                            s += 1
                                          )
                                            if (l[s].pt.k.i)
                                              l[s].pt.k.c = l[s].cl;
                                            else
                                              for (
                                                o = l[s].pt.k.length, n = 0;
                                                n < o;
                                                n += 1
                                              )
                                                l[s].pt.k[n].s &&
                                                  (l[s].pt.k[n].s[0].c =
                                                    l[s].cl),
                                                  l[s].pt.k[n].e &&
                                                    (l[s].pt.k[n].e[0].c =
                                                      l[s].cl);
                                        }
                                        4 === r.ty && e(r.shapes);
                                      }
                                    }
                                    return function (e) {
                                      if (
                                        s(t, e.v) &&
                                        (r(e.layers), e.assets)
                                      ) {
                                        var i,
                                          a = e.assets.length;
                                        for (i = 0; i < a; i += 1)
                                          e.assets[i].layers &&
                                            r(e.assets[i].layers);
                                      }
                                    };
                                  })();
                                function p(t) {
                                  0 === t.t.a.length && t.t.p;
                                }
                                var f = {
                                  completeData: function (r) {
                                    r.__complete ||
                                      (h(r),
                                      a(r),
                                      n(r),
                                      o(r),
                                      l(r),
                                      t(r.layers, r.assets),
                                      (function (r, i) {
                                        if (r) {
                                          var s = 0,
                                            a = r.length;
                                          for (s = 0; s < a; s += 1)
                                            1 === r[s].t &&
                                              ((r[s].data.layers = e(
                                                r[s].data.refId,
                                                i
                                              )),
                                              t(r[s].data.layers, i));
                                        }
                                      })(r.chars, r.assets),
                                      (r.__complete = !0));
                                  },
                                };
                                return (
                                  (f.checkColors = h),
                                  (f.checkChars = n),
                                  (f.checkPathProperties = o),
                                  (f.checkShapes = l),
                                  (f.completeLayers = t),
                                  f
                                );
                              })()),
                            a.assetLoader ||
                              (a.assetLoader = (function () {
                                function t(t) {
                                  var e = t.getResponseHeader("content-type");
                                  return (e &&
                                    "json" === t.responseType &&
                                    -1 !== e.indexOf("json")) ||
                                    (t.response &&
                                      "object" === _typeof$5(t.response))
                                    ? t.response
                                    : t.response &&
                                      "string" == typeof t.response
                                    ? JSON.parse(t.response)
                                    : t.responseText
                                    ? JSON.parse(t.responseText)
                                    : null;
                                }
                                return {
                                  load: function (e, r, i, s) {
                                    var a,
                                      n = new XMLHttpRequest();
                                    try {
                                      n.responseType = "json";
                                    } catch (o) {}
                                    n.onreadystatechange = function () {
                                      if (4 === n.readyState)
                                        if (200 === n.status) (a = t(n)), i(a);
                                        else
                                          try {
                                            (a = t(n)), i(a);
                                          } catch (e) {
                                            s && s(e);
                                          }
                                    };
                                    try {
                                      n.open(["G", "E", "T"].join(""), e, !0);
                                    } catch (h) {
                                      n.open(
                                        ["G", "E", "T"].join(""),
                                        r + "/" + e,
                                        !0
                                      );
                                    }
                                    n.send();
                                  },
                                };
                              })()),
                            "loadAnimation" === t.data.type)
                          )
                            a.assetLoader.load(
                              t.data.path,
                              t.data.fullPath,
                              function (e) {
                                a.dataManager.completeData(e),
                                  a.postMessage({
                                    id: t.data.id,
                                    payload: e,
                                    status: "success",
                                  });
                              },
                              function () {
                                a.postMessage({
                                  id: t.data.id,
                                  status: "error",
                                });
                              }
                            );
                          else if ("complete" === t.data.type) {
                            var e = t.data.animation;
                            a.dataManager.completeData(e),
                              a.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success",
                              });
                          } else
                            "loadData" === t.data.type &&
                              a.assetLoader.load(
                                t.data.path,
                                t.data.fullPath,
                                function (e) {
                                  a.postMessage({
                                    id: t.data.id,
                                    payload: e,
                                    status: "success",
                                  });
                                },
                                function () {
                                  a.postMessage({
                                    id: t.data.id,
                                    status: "error",
                                  });
                                }
                              );
                        })).onmessage = function (t) {
                          var e = t.data,
                            r = e.id,
                            s = i[r];
                          (i[r] = null),
                            "success" === e.status
                              ? s.onComplete(e.payload)
                              : s.onError && s.onError();
                        });
                    }
                    function o(t, e) {
                      var s = "processId_" + (r += 1);
                      return (i[s] = { onComplete: t, onError: e }), s;
                    }
                    return {
                      loadAnimation: function (t, r, i) {
                        n();
                        var s = o(r, i);
                        e.postMessage({
                          type: "loadAnimation",
                          path: t,
                          fullPath:
                            window.location.origin + window.location.pathname,
                          id: s,
                        });
                      },
                      loadData: function (t, r, i) {
                        n();
                        var s = o(r, i);
                        e.postMessage({
                          type: "loadData",
                          path: t,
                          fullPath:
                            window.location.origin + window.location.pathname,
                          id: s,
                        });
                      },
                      completeAnimation: function (t, r, i) {
                        n();
                        var s = o(r, i);
                        e.postMessage({
                          type: "complete",
                          animation: t,
                          id: s,
                        });
                      },
                    };
                  })(),
                  ImagePreloader = (function () {
                    var t = (function () {
                      var t = createTag("canvas");
                      (t.width = 1), (t.height = 1);
                      var e = t.getContext("2d");
                      return (
                        (e.fillStyle = "rgba(0,0,0,0)"),
                        e.fillRect(0, 0, 1, 1),
                        t
                      );
                    })();
                    function e() {
                      (this.loadedAssets += 1),
                        this.loadedAssets === this.totalImages &&
                          this.loadedFootagesCount === this.totalFootages &&
                          this.imagesLoadedCb &&
                          this.imagesLoadedCb(null);
                    }
                    function r() {
                      (this.loadedFootagesCount += 1),
                        this.loadedAssets === this.totalImages &&
                          this.loadedFootagesCount === this.totalFootages &&
                          this.imagesLoadedCb &&
                          this.imagesLoadedCb(null);
                    }
                    function i(t, e, r) {
                      var i = "";
                      if (t.e) i = t.p;
                      else if (e) {
                        var s = t.p;
                        -1 !== s.indexOf("images/") && (s = s.split("/")[1]),
                          (i = e + s);
                      } else (i = r), (i += t.u ? t.u : ""), (i += t.p);
                      return i;
                    }
                    function s(t) {
                      var e = 0,
                        r = setInterval(
                          function () {
                            (t.getBBox().width || e > 500) &&
                              (this._imageLoaded(), clearInterval(r)),
                              (e += 1);
                          }.bind(this),
                          50
                        );
                    }
                    function a(t) {
                      var e = { assetData: t },
                        r = i(t, this.assetsPath, this.path);
                      return (
                        dataManager.loadData(
                          r,
                          function (t) {
                            (e.img = t), this._footageLoaded();
                          }.bind(this),
                          function () {
                            (e.img = {}), this._footageLoaded();
                          }.bind(this)
                        ),
                        e
                      );
                    }
                    function n() {
                      (this._imageLoaded = e.bind(this)),
                        (this._footageLoaded = r.bind(this)),
                        (this.testImageLoaded = s.bind(this)),
                        (this.createFootageData = a.bind(this)),
                        (this.assetsPath = ""),
                        (this.path = ""),
                        (this.totalImages = 0),
                        (this.totalFootages = 0),
                        (this.loadedAssets = 0),
                        (this.loadedFootagesCount = 0),
                        (this.imagesLoadedCb = null),
                        (this.images = []);
                    }
                    return (
                      (n.prototype = {
                        loadAssets: function (t, e) {
                          this.imagesLoadedCb = e;
                          var r,
                            i = t.length;
                          for (r = 0; r < i; r += 1)
                            t[r].layers ||
                              (t[r].t && "seq" !== t[r].t
                                ? 3 === t[r].t &&
                                  ((this.totalFootages += 1),
                                  this.images.push(
                                    this.createFootageData(t[r])
                                  ))
                                : ((this.totalImages += 1),
                                  this.images.push(
                                    this._createImageData(t[r])
                                  )));
                        },
                        setAssetsPath: function (t) {
                          this.assetsPath = t || "";
                        },
                        setPath: function (t) {
                          this.path = t || "";
                        },
                        loadedImages: function () {
                          return this.totalImages === this.loadedAssets;
                        },
                        loadedFootages: function () {
                          return (
                            this.totalFootages === this.loadedFootagesCount
                          );
                        },
                        destroy: function () {
                          (this.imagesLoadedCb = null),
                            (this.images.length = 0);
                        },
                        getAsset: function (t) {
                          for (var e = 0, r = this.images.length; e < r; ) {
                            if (this.images[e].assetData === t)
                              return this.images[e].img;
                            e += 1;
                          }
                          return null;
                        },
                        createImgData: function (e) {
                          var r = i(e, this.assetsPath, this.path),
                            s = createTag("img");
                          (s.crossOrigin = "anonymous"),
                            s.addEventListener("load", this._imageLoaded, !1),
                            s.addEventListener(
                              "error",
                              function () {
                                (a.img = t), this._imageLoaded();
                              }.bind(this),
                              !1
                            ),
                            (s.src = r);
                          var a = { img: s, assetData: e };
                          return a;
                        },
                        createImageData: function (e) {
                          var r = i(e, this.assetsPath, this.path),
                            s = createNS("image");
                          isSafari
                            ? this.testImageLoaded(s)
                            : s.addEventListener("load", this._imageLoaded, !1),
                            s.addEventListener(
                              "error",
                              function () {
                                (a.img = t), this._imageLoaded();
                              }.bind(this),
                              !1
                            ),
                            s.setAttributeNS(
                              "http://www.w3.org/1999/xlink",
                              "href",
                              r
                            ),
                            this._elementHelper.append
                              ? this._elementHelper.append(s)
                              : this._elementHelper.appendChild(s);
                          var a = { img: s, assetData: e };
                          return a;
                        },
                        imageLoaded: e,
                        footageLoaded: r,
                        setCacheType: function (t, e) {
                          "svg" === t
                            ? ((this._elementHelper = e),
                              (this._createImageData =
                                this.createImageData.bind(this)))
                            : (this._createImageData =
                                this.createImgData.bind(this));
                        },
                      }),
                      n
                    );
                  })();
                function BaseEvent() {}
                BaseEvent.prototype = {
                  triggerEvent: function (t, e) {
                    if (this._cbs[t])
                      for (var r = this._cbs[t], i = 0; i < r.length; i += 1)
                        r[i](e);
                  },
                  addEventListener: function (t, e) {
                    return (
                      this._cbs[t] || (this._cbs[t] = []),
                      this._cbs[t].push(e),
                      function () {
                        this.removeEventListener(t, e);
                      }.bind(this)
                    );
                  },
                  removeEventListener: function (t, e) {
                    if (e) {
                      if (this._cbs[t]) {
                        for (var r = 0, i = this._cbs[t].length; r < i; )
                          this._cbs[t][r] === e &&
                            (this._cbs[t].splice(r, 1), (r -= 1), (i -= 1)),
                            (r += 1);
                        this._cbs[t].length || (this._cbs[t] = null);
                      }
                    } else this._cbs[t] = null;
                  },
                };
                var markerParser = (function () {
                    function t(t) {
                      for (
                        var e, r = t.split("\r\n"), i = {}, s = 0, a = 0;
                        a < r.length;
                        a += 1
                      )
                        2 === (e = r[a].split(":")).length &&
                          ((i[e[0]] = e[1].trim()), (s += 1));
                      if (0 === s) throw new Error();
                      return i;
                    }
                    return function (e) {
                      for (var r = [], i = 0; i < e.length; i += 1) {
                        var s = e[i],
                          a = { time: s.tm, duration: s.dr };
                        try {
                          a.payload = JSON.parse(e[i].cm);
                        } catch (n) {
                          try {
                            a.payload = t(e[i].cm);
                          } catch (o) {
                            a.payload = { name: e[i].cm };
                          }
                        }
                        r.push(a);
                      }
                      return r;
                    };
                  })(),
                  ProjectInterface = (function () {
                    function t(t) {
                      this.compositions.push(t);
                    }
                    return function () {
                      function e(t) {
                        for (var e = 0, r = this.compositions.length; e < r; ) {
                          if (
                            this.compositions[e].data &&
                            this.compositions[e].data.nm === t
                          )
                            return (
                              this.compositions[e].prepareFrame &&
                                this.compositions[e].data.xt &&
                                this.compositions[e].prepareFrame(
                                  this.currentFrame
                                ),
                              this.compositions[e].compInterface
                            );
                          e += 1;
                        }
                        return null;
                      }
                      return (
                        (e.compositions = []),
                        (e.currentFrame = 0),
                        (e.registerComposition = t),
                        e
                      );
                    };
                  })(),
                  renderers = {},
                  registerRenderer = function (t, e) {
                    renderers[t] = e;
                  };
                function getRenderer(t) {
                  return renderers[t];
                }
                function getRegisteredRenderer() {
                  if (renderers.canvas) return "canvas";
                  for (var t in renderers) if (renderers[t]) return t;
                  return "";
                }
                function _typeof$4(t) {
                  return (_typeof$4 =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                var AnimationItem = function () {
                  (this._cbs = []),
                    (this.name = ""),
                    (this.path = ""),
                    (this.isLoaded = !1),
                    (this.currentFrame = 0),
                    (this.currentRawFrame = 0),
                    (this.firstFrame = 0),
                    (this.totalFrames = 0),
                    (this.frameRate = 0),
                    (this.frameMult = 0),
                    (this.playSpeed = 1),
                    (this.playDirection = 1),
                    (this.playCount = 0),
                    (this.animationData = {}),
                    (this.assets = []),
                    (this.isPaused = !0),
                    (this.autoplay = !1),
                    (this.loop = !0),
                    (this.renderer = null),
                    (this.animationID = createElementID()),
                    (this.assetsPath = ""),
                    (this.timeCompleted = 0),
                    (this.segmentPos = 0),
                    (this.isSubframeEnabled = getSubframeEnabled()),
                    (this.segments = []),
                    (this._idle = !0),
                    (this._completedLoop = !1),
                    (this.projectInterface = ProjectInterface()),
                    (this.imagePreloader = new ImagePreloader()),
                    (this.audioController = audioControllerFactory()),
                    (this.markers = []),
                    (this.configAnimation = this.configAnimation.bind(this)),
                    (this.onSetupError = this.onSetupError.bind(this)),
                    (this.onSegmentComplete =
                      this.onSegmentComplete.bind(this)),
                    (this.drawnFrameEvent = new BMEnterFrameEvent(
                      "drawnFrame",
                      0,
                      0,
                      0
                    )),
                    (this.expressionsPlugin = getExpressionsPlugin());
                };
                extendPrototype([BaseEvent], AnimationItem),
                  (AnimationItem.prototype.setParams = function (t) {
                    (t.wrapper || t.container) &&
                      (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    t.animType
                      ? (e = t.animType)
                      : t.renderer && (e = t.renderer);
                    var r = getRenderer(e);
                    (this.renderer = new r(this, t.rendererSettings)),
                      this.imagePreloader.setCacheType(
                        e,
                        this.renderer.globalData.defs
                      ),
                      this.renderer.setProjectInterface(this.projectInterface),
                      (this.animType = e),
                      "" === t.loop ||
                      null === t.loop ||
                      void 0 === t.loop ||
                      !0 === t.loop
                        ? (this.loop = !0)
                        : !1 === t.loop
                        ? (this.loop = !1)
                        : (this.loop = parseInt(t.loop, 10)),
                      (this.autoplay = !("autoplay" in t) || t.autoplay),
                      (this.name = t.name ? t.name : ""),
                      (this.autoloadSegments =
                        !Object.prototype.hasOwnProperty.call(
                          t,
                          "autoloadSegments"
                        ) || t.autoloadSegments),
                      (this.assetsPath = t.assetsPath),
                      (this.initialSegment = t.initialSegment),
                      t.audioFactory &&
                        this.audioController.setAudioFactory(t.audioFactory),
                      t.animationData
                        ? this.setupAnimation(t.animationData)
                        : t.path &&
                          (-1 !== t.path.lastIndexOf("\\")
                            ? (this.path = t.path.substr(
                                0,
                                t.path.lastIndexOf("\\") + 1
                              ))
                            : (this.path = t.path.substr(
                                0,
                                t.path.lastIndexOf("/") + 1
                              )),
                          (this.fileName = t.path.substr(
                            t.path.lastIndexOf("/") + 1
                          )),
                          (this.fileName = this.fileName.substr(
                            0,
                            this.fileName.lastIndexOf(".json")
                          )),
                          dataManager.loadAnimation(
                            t.path,
                            this.configAnimation,
                            this.onSetupError
                          ));
                  }),
                  (AnimationItem.prototype.onSetupError = function () {
                    this.trigger("data_failed");
                  }),
                  (AnimationItem.prototype.setupAnimation = function (t) {
                    dataManager.completeAnimation(t, this.configAnimation);
                  }),
                  (AnimationItem.prototype.setData = function (t, e) {
                    e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
                    var r = { wrapper: t, animationData: e },
                      i = t.attributes;
                    (r.path = i.getNamedItem("data-animation-path")
                      ? i.getNamedItem("data-animation-path").value
                      : i.getNamedItem("data-bm-path")
                      ? i.getNamedItem("data-bm-path").value
                      : i.getNamedItem("bm-path")
                      ? i.getNamedItem("bm-path").value
                      : ""),
                      (r.animType = i.getNamedItem("data-anim-type")
                        ? i.getNamedItem("data-anim-type").value
                        : i.getNamedItem("data-bm-type")
                        ? i.getNamedItem("data-bm-type").value
                        : i.getNamedItem("bm-type")
                        ? i.getNamedItem("bm-type").value
                        : i.getNamedItem("data-bm-renderer")
                        ? i.getNamedItem("data-bm-renderer").value
                        : i.getNamedItem("bm-renderer")
                        ? i.getNamedItem("bm-renderer").value
                        : getRegisteredRenderer() || "canvas");
                    var s = i.getNamedItem("data-anim-loop")
                      ? i.getNamedItem("data-anim-loop").value
                      : i.getNamedItem("data-bm-loop")
                      ? i.getNamedItem("data-bm-loop").value
                      : i.getNamedItem("bm-loop")
                      ? i.getNamedItem("bm-loop").value
                      : "";
                    "false" === s
                      ? (r.loop = !1)
                      : "true" === s
                      ? (r.loop = !0)
                      : "" !== s && (r.loop = parseInt(s, 10));
                    var a = i.getNamedItem("data-anim-autoplay")
                      ? i.getNamedItem("data-anim-autoplay").value
                      : i.getNamedItem("data-bm-autoplay")
                      ? i.getNamedItem("data-bm-autoplay").value
                      : !i.getNamedItem("bm-autoplay") ||
                        i.getNamedItem("bm-autoplay").value;
                    (r.autoplay = "false" !== a),
                      (r.name = i.getNamedItem("data-name")
                        ? i.getNamedItem("data-name").value
                        : i.getNamedItem("data-bm-name")
                        ? i.getNamedItem("data-bm-name").value
                        : i.getNamedItem("bm-name")
                        ? i.getNamedItem("bm-name").value
                        : ""),
                      "false" ===
                        (i.getNamedItem("data-anim-prerender")
                          ? i.getNamedItem("data-anim-prerender").value
                          : i.getNamedItem("data-bm-prerender")
                          ? i.getNamedItem("data-bm-prerender").value
                          : i.getNamedItem("bm-prerender")
                          ? i.getNamedItem("bm-prerender").value
                          : "") && (r.prerender = !1),
                      r.path ? this.setParams(r) : this.trigger("destroy");
                  }),
                  (AnimationItem.prototype.includeLayers = function (t) {
                    t.op > this.animationData.op &&
                      ((this.animationData.op = t.op),
                      (this.totalFrames = Math.floor(
                        t.op - this.animationData.ip
                      )));
                    var e,
                      r,
                      i = this.animationData.layers,
                      s = i.length,
                      a = t.layers,
                      n = a.length;
                    for (r = 0; r < n; r += 1)
                      for (e = 0; e < s; ) {
                        if (i[e].id === a[r].id) {
                          i[e] = a[r];
                          break;
                        }
                        e += 1;
                      }
                    if (
                      ((t.chars || t.fonts) &&
                        (this.renderer.globalData.fontManager.addChars(t.chars),
                        this.renderer.globalData.fontManager.addFonts(
                          t.fonts,
                          this.renderer.globalData.defs
                        )),
                      t.assets)
                    )
                      for (s = t.assets.length, e = 0; e < s; e += 1)
                        this.animationData.assets.push(t.assets[e]);
                    (this.animationData.__complete = !1),
                      dataManager.completeAnimation(
                        this.animationData,
                        this.onSegmentComplete
                      );
                  }),
                  (AnimationItem.prototype.onSegmentComplete = function (t) {
                    this.animationData = t;
                    var e = getExpressionsPlugin();
                    e && e.initExpressions(this), this.loadNextSegment();
                  }),
                  (AnimationItem.prototype.loadNextSegment = function () {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments)
                      return (
                        this.trigger("data_ready"),
                        void (this.timeCompleted = this.totalFrames)
                      );
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var r =
                      this.path +
                      this.fileName +
                      "_" +
                      this.segmentPos +
                      ".json";
                    (this.segmentPos += 1),
                      dataManager.loadData(
                        r,
                        this.includeLayers.bind(this),
                        function () {
                          this.trigger("data_failed");
                        }.bind(this)
                      );
                  }),
                  (AnimationItem.prototype.loadSegments = function () {
                    this.animationData.segments ||
                      (this.timeCompleted = this.totalFrames),
                      this.loadNextSegment();
                  }),
                  (AnimationItem.prototype.imagesLoaded = function () {
                    this.trigger("loaded_images"), this.checkLoaded();
                  }),
                  (AnimationItem.prototype.preloadImages = function () {
                    this.imagePreloader.setAssetsPath(this.assetsPath),
                      this.imagePreloader.setPath(this.path),
                      this.imagePreloader.loadAssets(
                        this.animationData.assets,
                        this.imagesLoaded.bind(this)
                      );
                  }),
                  (AnimationItem.prototype.configAnimation = function (t) {
                    if (this.renderer)
                      try {
                        (this.animationData = t),
                          this.initialSegment
                            ? ((this.totalFrames = Math.floor(
                                this.initialSegment[1] - this.initialSegment[0]
                              )),
                              (this.firstFrame = Math.round(
                                this.initialSegment[0]
                              )))
                            : ((this.totalFrames = Math.floor(
                                this.animationData.op - this.animationData.ip
                              )),
                              (this.firstFrame = Math.round(
                                this.animationData.ip
                              ))),
                          this.renderer.configAnimation(t),
                          t.assets || (t.assets = []),
                          (this.assets = this.animationData.assets),
                          (this.frameRate = this.animationData.fr),
                          (this.frameMult = this.animationData.fr / 1e3),
                          this.renderer.searchExtraCompositions(t.assets),
                          (this.markers = markerParser(t.markers || [])),
                          this.trigger("config_ready"),
                          this.preloadImages(),
                          this.loadSegments(),
                          this.updaFrameModifier(),
                          this.waitForFontsLoaded(),
                          this.isPaused && this.audioController.pause();
                      } catch (e) {
                        this.triggerConfigError(e);
                      }
                  }),
                  (AnimationItem.prototype.waitForFontsLoaded = function () {
                    this.renderer &&
                      (this.renderer.globalData.fontManager.isLoaded
                        ? this.checkLoaded()
                        : setTimeout(this.waitForFontsLoaded.bind(this), 20));
                  }),
                  (AnimationItem.prototype.checkLoaded = function () {
                    if (
                      !this.isLoaded &&
                      this.renderer.globalData.fontManager.isLoaded &&
                      (this.imagePreloader.loadedImages() ||
                        "canvas" !== this.renderer.rendererType) &&
                      this.imagePreloader.loadedFootages()
                    ) {
                      this.isLoaded = !0;
                      var t = getExpressionsPlugin();
                      t && t.initExpressions(this),
                        this.renderer.initItems(),
                        setTimeout(
                          function () {
                            this.trigger("DOMLoaded");
                          }.bind(this),
                          0
                        ),
                        this.gotoFrame(),
                        this.autoplay && this.play();
                    }
                  }),
                  (AnimationItem.prototype.resize = function (t, e) {
                    var r = "number" == typeof t ? t : void 0,
                      i = "number" == typeof e ? e : void 0;
                    this.renderer.updateContainerSize(r, i);
                  }),
                  (AnimationItem.prototype.setSubframe = function (t) {
                    this.isSubframeEnabled = !!t;
                  }),
                  (AnimationItem.prototype.gotoFrame = function () {
                    (this.currentFrame = this.isSubframeEnabled
                      ? this.currentRawFrame
                      : ~~this.currentRawFrame),
                      this.timeCompleted !== this.totalFrames &&
                        this.currentFrame > this.timeCompleted &&
                        (this.currentFrame = this.timeCompleted),
                      this.trigger("enterFrame"),
                      this.renderFrame(),
                      this.trigger("drawnFrame");
                  }),
                  (AnimationItem.prototype.renderFrame = function () {
                    if (!1 !== this.isLoaded && this.renderer)
                      try {
                        this.expressionsPlugin &&
                          this.expressionsPlugin.resetFrame(),
                          this.renderer.renderFrame(
                            this.currentFrame + this.firstFrame
                          );
                      } catch (t) {
                        this.triggerRenderFrameError(t);
                      }
                  }),
                  (AnimationItem.prototype.play = function (t) {
                    (t && this.name !== t) ||
                      (!0 === this.isPaused &&
                        ((this.isPaused = !1),
                        this.trigger("_play"),
                        this.audioController.resume(),
                        this._idle &&
                          ((this._idle = !1), this.trigger("_active"))));
                  }),
                  (AnimationItem.prototype.pause = function (t) {
                    (t && this.name !== t) ||
                      (!1 === this.isPaused &&
                        ((this.isPaused = !0),
                        this.trigger("_pause"),
                        (this._idle = !0),
                        this.trigger("_idle"),
                        this.audioController.pause()));
                  }),
                  (AnimationItem.prototype.togglePause = function (t) {
                    (t && this.name !== t) ||
                      (!0 === this.isPaused ? this.play() : this.pause());
                  }),
                  (AnimationItem.prototype.stop = function (t) {
                    (t && this.name !== t) ||
                      (this.pause(),
                      (this.playCount = 0),
                      (this._completedLoop = !1),
                      this.setCurrentRawFrameValue(0));
                  }),
                  (AnimationItem.prototype.getMarkerData = function (t) {
                    for (var e, r = 0; r < this.markers.length; r += 1)
                      if ((e = this.markers[r]).payload && e.payload.name === t)
                        return e;
                    return null;
                  }),
                  (AnimationItem.prototype.goToAndStop = function (t, e, r) {
                    if (!r || this.name === r) {
                      var i = Number(t);
                      if (isNaN(i)) {
                        var s = this.getMarkerData(t);
                        s && this.goToAndStop(s.time, !0);
                      } else
                        e
                          ? this.setCurrentRawFrameValue(t)
                          : this.setCurrentRawFrameValue(
                              t * this.frameModifier
                            );
                      this.pause();
                    }
                  }),
                  (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
                    if (!r || this.name === r) {
                      var i = Number(t);
                      if (isNaN(i)) {
                        var s = this.getMarkerData(t);
                        s &&
                          (s.duration
                            ? this.playSegments(
                                [s.time, s.time + s.duration],
                                !0
                              )
                            : this.goToAndStop(s.time, !0));
                      } else this.goToAndStop(i, e, r);
                      this.play();
                    }
                  }),
                  (AnimationItem.prototype.advanceTime = function (t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                      var e = this.currentRawFrame + t * this.frameModifier,
                        r = !1;
                      e >= this.totalFrames - 1 && this.frameModifier > 0
                        ? this.loop && this.playCount !== this.loop
                          ? e >= this.totalFrames
                            ? ((this.playCount += 1),
                              this.checkSegments(e % this.totalFrames) ||
                                (this.setCurrentRawFrameValue(
                                  e % this.totalFrames
                                ),
                                (this._completedLoop = !0),
                                this.trigger("loopComplete")))
                            : this.setCurrentRawFrameValue(e)
                          : this.checkSegments(
                              e > this.totalFrames ? e % this.totalFrames : 0
                            ) || ((r = !0), (e = this.totalFrames - 1))
                        : e < 0
                        ? this.checkSegments(e % this.totalFrames) ||
                          (!this.loop ||
                          (this.playCount-- <= 0 && !0 !== this.loop)
                            ? ((r = !0), (e = 0))
                            : (this.setCurrentRawFrameValue(
                                this.totalFrames + (e % this.totalFrames)
                              ),
                              this._completedLoop
                                ? this.trigger("loopComplete")
                                : (this._completedLoop = !0)))
                        : this.setCurrentRawFrameValue(e),
                        r &&
                          (this.setCurrentRawFrameValue(e),
                          this.pause(),
                          this.trigger("complete"));
                    }
                  }),
                  (AnimationItem.prototype.adjustSegment = function (t, e) {
                    (this.playCount = 0),
                      t[1] < t[0]
                        ? (this.frameModifier > 0 &&
                            (this.playSpeed < 0
                              ? this.setSpeed(-this.playSpeed)
                              : this.setDirection(-1)),
                          (this.totalFrames = t[0] - t[1]),
                          (this.timeCompleted = this.totalFrames),
                          (this.firstFrame = t[1]),
                          this.setCurrentRawFrameValue(
                            this.totalFrames - 0.001 - e
                          ))
                        : t[1] > t[0] &&
                          (this.frameModifier < 0 &&
                            (this.playSpeed < 0
                              ? this.setSpeed(-this.playSpeed)
                              : this.setDirection(1)),
                          (this.totalFrames = t[1] - t[0]),
                          (this.timeCompleted = this.totalFrames),
                          (this.firstFrame = t[0]),
                          this.setCurrentRawFrameValue(0.001 + e)),
                      this.trigger("segmentStart");
                  }),
                  (AnimationItem.prototype.setSegment = function (t, e) {
                    var r = -1;
                    this.isPaused &&
                      (this.currentRawFrame + this.firstFrame < t
                        ? (r = t)
                        : this.currentRawFrame + this.firstFrame > e &&
                          (r = e - t)),
                      (this.firstFrame = t),
                      (this.totalFrames = e - t),
                      (this.timeCompleted = this.totalFrames),
                      -1 !== r && this.goToAndStop(r, !0);
                  }),
                  (AnimationItem.prototype.playSegments = function (t, e) {
                    if (
                      (e && (this.segments.length = 0),
                      "object" === _typeof$4(t[0]))
                    ) {
                      var r,
                        i = t.length;
                      for (r = 0; r < i; r += 1) this.segments.push(t[r]);
                    } else this.segments.push(t);
                    this.segments.length &&
                      e &&
                      this.adjustSegment(this.segments.shift(), 0),
                      this.isPaused && this.play();
                  }),
                  (AnimationItem.prototype.resetSegments = function (t) {
                    (this.segments.length = 0),
                      this.segments.push([
                        this.animationData.ip,
                        this.animationData.op,
                      ]),
                      t && this.checkSegments(0);
                  }),
                  (AnimationItem.prototype.checkSegments = function (t) {
                    return (
                      !!this.segments.length &&
                      (this.adjustSegment(this.segments.shift(), t), !0)
                    );
                  }),
                  (AnimationItem.prototype.destroy = function (t) {
                    (t && this.name !== t) ||
                      !this.renderer ||
                      (this.renderer.destroy(),
                      this.imagePreloader.destroy(),
                      this.trigger("destroy"),
                      (this._cbs = null),
                      (this.onEnterFrame = null),
                      (this.onLoopComplete = null),
                      (this.onComplete = null),
                      (this.onSegmentStart = null),
                      (this.onDestroy = null),
                      (this.renderer = null),
                      (this.expressionsPlugin = null),
                      (this.imagePreloader = null),
                      (this.projectInterface = null));
                  }),
                  (AnimationItem.prototype.setCurrentRawFrameValue = function (
                    t
                  ) {
                    (this.currentRawFrame = t), this.gotoFrame();
                  }),
                  (AnimationItem.prototype.setSpeed = function (t) {
                    (this.playSpeed = t), this.updaFrameModifier();
                  }),
                  (AnimationItem.prototype.setDirection = function (t) {
                    (this.playDirection = t < 0 ? -1 : 1),
                      this.updaFrameModifier();
                  }),
                  (AnimationItem.prototype.setLoop = function (t) {
                    this.loop = t;
                  }),
                  (AnimationItem.prototype.setVolume = function (t, e) {
                    (e && this.name !== e) || this.audioController.setVolume(t);
                  }),
                  (AnimationItem.prototype.getVolume = function () {
                    return this.audioController.getVolume();
                  }),
                  (AnimationItem.prototype.mute = function (t) {
                    (t && this.name !== t) || this.audioController.mute();
                  }),
                  (AnimationItem.prototype.unmute = function (t) {
                    (t && this.name !== t) || this.audioController.unmute();
                  }),
                  (AnimationItem.prototype.updaFrameModifier = function () {
                    (this.frameModifier =
                      this.frameMult * this.playSpeed * this.playDirection),
                      this.audioController.setRate(
                        this.playSpeed * this.playDirection
                      );
                  }),
                  (AnimationItem.prototype.getPath = function () {
                    return this.path;
                  }),
                  (AnimationItem.prototype.getAssetsPath = function (t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                      var r = t.p;
                      -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                        (e = this.assetsPath + r);
                    } else (e = this.path), (e += t.u ? t.u : ""), (e += t.p);
                    return e;
                  }),
                  (AnimationItem.prototype.getAssetData = function (t) {
                    for (var e = 0, r = this.assets.length; e < r; ) {
                      if (t === this.assets[e].id) return this.assets[e];
                      e += 1;
                    }
                    return null;
                  }),
                  (AnimationItem.prototype.hide = function () {
                    this.renderer.hide();
                  }),
                  (AnimationItem.prototype.show = function () {
                    this.renderer.show();
                  }),
                  (AnimationItem.prototype.getDuration = function (t) {
                    return t
                      ? this.totalFrames
                      : this.totalFrames / this.frameRate;
                  }),
                  (AnimationItem.prototype.updateDocumentData = function (
                    t,
                    e,
                    r
                  ) {
                    try {
                      this.renderer
                        .getElementByPath(t)
                        .updateDocumentData(e, r);
                    } catch (i) {}
                  }),
                  (AnimationItem.prototype.trigger = function (t) {
                    if (this._cbs && this._cbs[t])
                      switch (t) {
                        case "enterFrame":
                          this.triggerEvent(
                            t,
                            new BMEnterFrameEvent(
                              t,
                              this.currentFrame,
                              this.totalFrames,
                              this.frameModifier
                            )
                          );
                          break;
                        case "drawnFrame":
                          (this.drawnFrameEvent.currentTime =
                            this.currentFrame),
                            (this.drawnFrameEvent.totalTime = this.totalFrames),
                            (this.drawnFrameEvent.direction =
                              this.frameModifier),
                            this.triggerEvent(t, this.drawnFrameEvent);
                          break;
                        case "loopComplete":
                          this.triggerEvent(
                            t,
                            new BMCompleteLoopEvent(
                              t,
                              this.loop,
                              this.playCount,
                              this.frameMult
                            )
                          );
                          break;
                        case "complete":
                          this.triggerEvent(
                            t,
                            new BMCompleteEvent(t, this.frameMult)
                          );
                          break;
                        case "segmentStart":
                          this.triggerEvent(
                            t,
                            new BMSegmentStartEvent(
                              t,
                              this.firstFrame,
                              this.totalFrames
                            )
                          );
                          break;
                        case "destroy":
                          this.triggerEvent(t, new BMDestroyEvent(t, this));
                          break;
                        default:
                          this.triggerEvent(t);
                      }
                    "enterFrame" === t &&
                      this.onEnterFrame &&
                      this.onEnterFrame.call(
                        this,
                        new BMEnterFrameEvent(
                          t,
                          this.currentFrame,
                          this.totalFrames,
                          this.frameMult
                        )
                      ),
                      "loopComplete" === t &&
                        this.onLoopComplete &&
                        this.onLoopComplete.call(
                          this,
                          new BMCompleteLoopEvent(
                            t,
                            this.loop,
                            this.playCount,
                            this.frameMult
                          )
                        ),
                      "complete" === t &&
                        this.onComplete &&
                        this.onComplete.call(
                          this,
                          new BMCompleteEvent(t, this.frameMult)
                        ),
                      "segmentStart" === t &&
                        this.onSegmentStart &&
                        this.onSegmentStart.call(
                          this,
                          new BMSegmentStartEvent(
                            t,
                            this.firstFrame,
                            this.totalFrames
                          )
                        ),
                      "destroy" === t &&
                        this.onDestroy &&
                        this.onDestroy.call(this, new BMDestroyEvent(t, this));
                  }),
                  (AnimationItem.prototype.triggerRenderFrameError = function (
                    t
                  ) {
                    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e),
                      this.onError && this.onError.call(this, e);
                  }),
                  (AnimationItem.prototype.triggerConfigError = function (t) {
                    var e = new BMConfigErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e),
                      this.onError && this.onError.call(this, e);
                  });
                var animationManager = (function () {
                    var t = {},
                      e = [],
                      r = 0,
                      i = 0,
                      s = 0,
                      a = !0,
                      n = !1;
                    function o(t) {
                      for (var r = 0, s = t.target; r < i; )
                        e[r].animation === s &&
                          (e.splice(r, 1),
                          (r -= 1),
                          (i -= 1),
                          s.isPaused || p()),
                          (r += 1);
                    }
                    function h(t, r) {
                      if (!t) return null;
                      for (var s = 0; s < i; ) {
                        if (e[s].elem === t && null !== e[s].elem)
                          return e[s].animation;
                        s += 1;
                      }
                      var a = new AnimationItem();
                      return f(a, t), a.setData(t, r), a;
                    }
                    function l() {
                      (s += 1), u();
                    }
                    function p() {
                      s -= 1;
                    }
                    function f(t, r) {
                      t.addEventListener("destroy", o),
                        t.addEventListener("_active", l),
                        t.addEventListener("_idle", p),
                        e.push({ elem: r, animation: t }),
                        (i += 1);
                    }
                    function c(t) {
                      var o,
                        h = t - r;
                      for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
                      (r = t),
                        s && !n ? window.requestAnimationFrame(c) : (a = !0);
                    }
                    function m(t) {
                      (r = t), window.requestAnimationFrame(c);
                    }
                    function u() {
                      !n &&
                        s &&
                        a &&
                        (window.requestAnimationFrame(m), (a = !1));
                    }
                    return (
                      (t.registerAnimation = h),
                      (t.loadAnimation = function (t) {
                        var e = new AnimationItem();
                        return f(e, null), e.setParams(t), e;
                      }),
                      (t.setSpeed = function (t, r) {
                        var s;
                        for (s = 0; s < i; s += 1)
                          e[s].animation.setSpeed(t, r);
                      }),
                      (t.setDirection = function (t, r) {
                        var s;
                        for (s = 0; s < i; s += 1)
                          e[s].animation.setDirection(t, r);
                      }),
                      (t.play = function (t) {
                        var r;
                        for (r = 0; r < i; r += 1) e[r].animation.play(t);
                      }),
                      (t.pause = function (t) {
                        var r;
                        for (r = 0; r < i; r += 1) e[r].animation.pause(t);
                      }),
                      (t.stop = function (t) {
                        var r;
                        for (r = 0; r < i; r += 1) e[r].animation.stop(t);
                      }),
                      (t.togglePause = function (t) {
                        var r;
                        for (r = 0; r < i; r += 1)
                          e[r].animation.togglePause(t);
                      }),
                      (t.searchAnimations = function (t, e, r) {
                        var i,
                          s = [].concat(
                            [].slice.call(
                              document.getElementsByClassName("lottie")
                            ),
                            [].slice.call(
                              document.getElementsByClassName("bodymovin")
                            )
                          ),
                          a = s.length;
                        for (i = 0; i < a; i += 1)
                          r && s[i].setAttribute("data-bm-type", r), h(s[i], t);
                        if (e && 0 === a) {
                          r || (r = "svg");
                          var n = document.getElementsByTagName("body")[0];
                          n.innerText = "";
                          var o = createTag("div");
                          (o.style.width = "100%"),
                            (o.style.height = "100%"),
                            o.setAttribute("data-bm-type", r),
                            n.appendChild(o),
                            h(o, t);
                        }
                      }),
                      (t.resize = function () {
                        var t;
                        for (t = 0; t < i; t += 1) e[t].animation.resize();
                      }),
                      (t.goToAndStop = function (t, r, s) {
                        var a;
                        for (a = 0; a < i; a += 1)
                          e[a].animation.goToAndStop(t, r, s);
                      }),
                      (t.destroy = function (t) {
                        var r;
                        for (r = i - 1; r >= 0; r -= 1)
                          e[r].animation.destroy(t);
                      }),
                      (t.freeze = function () {
                        n = !0;
                      }),
                      (t.unfreeze = function () {
                        (n = !1), u();
                      }),
                      (t.setVolume = function (t, r) {
                        var s;
                        for (s = 0; s < i; s += 1)
                          e[s].animation.setVolume(t, r);
                      }),
                      (t.mute = function (t) {
                        var r;
                        for (r = 0; r < i; r += 1) e[r].animation.mute(t);
                      }),
                      (t.unmute = function (t) {
                        var r;
                        for (r = 0; r < i; r += 1) e[r].animation.unmute(t);
                      }),
                      (t.getRegisteredAnimations = function () {
                        var t,
                          r = e.length,
                          i = [];
                        for (t = 0; t < r; t += 1) i.push(e[t].animation);
                        return i;
                      }),
                      t
                    );
                  })(),
                  BezierFactory = (function () {
                    var t = {
                        getBezierEasing: function (t, r, i, s, a) {
                          var n =
                            a ||
                            ("bez_" + t + "_" + r + "_" + i + "_" + s).replace(
                              /\./g,
                              "p"
                            );
                          if (e[n]) return e[n];
                          var o = new l([t, r, i, s]);
                          return (e[n] = o), o;
                        },
                      },
                      e = {},
                      r = 0.1,
                      i = "function" == typeof Float32Array;
                    function s(t, e) {
                      return 1 - 3 * e + 3 * t;
                    }
                    function a(t, e) {
                      return 3 * e - 6 * t;
                    }
                    function n(t) {
                      return 3 * t;
                    }
                    function o(t, e, r) {
                      return ((s(e, r) * t + a(e, r)) * t + n(e)) * t;
                    }
                    function h(t, e, r) {
                      return 3 * s(e, r) * t * t + 2 * a(e, r) * t + n(e);
                    }
                    function l(t) {
                      (this._p = t),
                        (this._mSampleValues = i
                          ? new Float32Array(11)
                          : new Array(11)),
                        (this._precomputed = !1),
                        (this.get = this.get.bind(this));
                    }
                    return (
                      (l.prototype = {
                        get: function (t) {
                          var e = this._p[0],
                            r = this._p[1],
                            i = this._p[2],
                            s = this._p[3];
                          return (
                            this._precomputed || this._precompute(),
                            e === r && i === s
                              ? t
                              : 0 === t
                              ? 0
                              : 1 === t
                              ? 1
                              : o(this._getTForX(t), r, s)
                          );
                        },
                        _precompute: function () {
                          var t = this._p[0],
                            e = this._p[1],
                            r = this._p[2],
                            i = this._p[3];
                          (this._precomputed = !0),
                            (t !== e || r !== i) && this._calcSampleValues();
                        },
                        _calcSampleValues: function () {
                          for (
                            var t = this._p[0], e = this._p[2], i = 0;
                            i < 11;
                            ++i
                          )
                            this._mSampleValues[i] = o(i * r, t, e);
                        },
                        _getTForX: function (t) {
                          for (
                            var e = this._p[0],
                              i = this._p[2],
                              s = this._mSampleValues,
                              a = 0,
                              n = 1;
                            10 !== n && s[n] <= t;
                            ++n
                          )
                            a += r;
                          var l = a + ((t - s[--n]) / (s[n + 1] - s[n])) * r,
                            p = h(l, e, i);
                          return p >= 0.001
                            ? (function (t, e, r, i) {
                                for (var s = 0; s < 4; ++s) {
                                  var a = h(e, r, i);
                                  if (0 === a) return e;
                                  e -= (o(e, r, i) - t) / a;
                                }
                                return e;
                              })(t, l, e, i)
                            : 0 === p
                            ? l
                            : (function (t, e, r, i, s) {
                                var a,
                                  n,
                                  h = 0;
                                do {
                                  (a = o((n = e + (r - e) / 2), i, s) - t) > 0
                                    ? (r = n)
                                    : (e = n);
                                } while (Math.abs(a) > 1e-7 && ++h < 10);
                                return n;
                              })(t, a, a + r, e, i);
                        },
                      }),
                      t
                    );
                  })(),
                  pooling = {
                    double: function (t) {
                      return t.concat(createSizedArray(t.length));
                    },
                  },
                  poolFactory = function (t, e, r) {
                    var i = 0,
                      s = t,
                      a = createSizedArray(s);
                    return {
                      newElement: function () {
                        return i ? a[(i -= 1)] : e();
                      },
                      release: function (t) {
                        i === s && ((a = pooling.double(a)), (s *= 2)),
                          r && r(t),
                          (a[i] = t),
                          (i += 1);
                      },
                    };
                  },
                  bezierLengthPool = poolFactory(8, function () {
                    return {
                      addedLength: 0,
                      percents: createTypedArray(
                        "float32",
                        getDefaultCurveSegments()
                      ),
                      lengths: createTypedArray(
                        "float32",
                        getDefaultCurveSegments()
                      ),
                    };
                  }),
                  segmentsLengthPool = poolFactory(
                    8,
                    function () {
                      return { lengths: [], totalLength: 0 };
                    },
                    function (t) {
                      var e,
                        r = t.lengths.length;
                      for (e = 0; e < r; e += 1)
                        bezierLengthPool.release(t.lengths[e]);
                      t.lengths.length = 0;
                    }
                  );
                function bezFunction() {
                  var t = Math;
                  function e(t, e, r, i, s, a) {
                    var n = t * i + e * s + r * a - s * i - a * t - r * e;
                    return n > -0.001 && n < 0.001;
                  }
                  var r = function (t, e, r, i) {
                    var s,
                      a,
                      n,
                      o,
                      h,
                      l,
                      p = getDefaultCurveSegments(),
                      f = 0,
                      c = [],
                      m = [],
                      u = bezierLengthPool.newElement();
                    for (n = r.length, s = 0; s < p; s += 1) {
                      for (h = s / (p - 1), l = 0, a = 0; a < n; a += 1)
                        (o =
                          bmPow(1 - h, 3) * t[a] +
                          3 * bmPow(1 - h, 2) * h * r[a] +
                          3 * (1 - h) * bmPow(h, 2) * i[a] +
                          bmPow(h, 3) * e[a]),
                          (c[a] = o),
                          null !== m[a] && (l += bmPow(c[a] - m[a], 2)),
                          (m[a] = c[a]);
                      l && (f += l = bmSqrt(l)),
                        (u.percents[s] = h),
                        (u.lengths[s] = f);
                    }
                    return (u.addedLength = f), u;
                  };
                  function i(t) {
                    (this.segmentLength = 0), (this.points = new Array(t));
                  }
                  function s(t, e) {
                    (this.partialLength = t), (this.point = e);
                  }
                  var a = (function () {
                    var t = {};
                    return function (r, a, n, o) {
                      var h = (
                        r[0] +
                        "_" +
                        r[1] +
                        "_" +
                        a[0] +
                        "_" +
                        a[1] +
                        "_" +
                        n[0] +
                        "_" +
                        n[1] +
                        "_" +
                        o[0] +
                        "_" +
                        o[1]
                      ).replace(/\./g, "p");
                      if (!t[h]) {
                        var l,
                          p,
                          f,
                          c,
                          m,
                          u,
                          d,
                          y = getDefaultCurveSegments(),
                          g = 0,
                          v = null;
                        2 === r.length &&
                          (r[0] !== a[0] || r[1] !== a[1]) &&
                          e(r[0], r[1], a[0], a[1], r[0] + n[0], r[1] + n[1]) &&
                          e(r[0], r[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) &&
                          (y = 2);
                        var b = new i(y);
                        for (f = n.length, l = 0; l < y; l += 1) {
                          for (
                            d = createSizedArray(f),
                              m = l / (y - 1),
                              u = 0,
                              p = 0;
                            p < f;
                            p += 1
                          )
                            (c =
                              bmPow(1 - m, 3) * r[p] +
                              3 * bmPow(1 - m, 2) * m * (r[p] + n[p]) +
                              3 * (1 - m) * bmPow(m, 2) * (a[p] + o[p]) +
                              bmPow(m, 3) * a[p]),
                              (d[p] = c),
                              null !== v && (u += bmPow(d[p] - v[p], 2));
                          (g += u = bmSqrt(u)),
                            (b.points[l] = new s(u, d)),
                            (v = d);
                        }
                        (b.segmentLength = g), (t[h] = b);
                      }
                      return t[h];
                    };
                  })();
                  function n(t, e) {
                    var r = e.percents,
                      i = e.lengths,
                      s = r.length,
                      a = bmFloor((s - 1) * t),
                      n = t * e.addedLength,
                      o = 0;
                    if (a === s - 1 || 0 === a || n === i[a]) return r[a];
                    for (var h = i[a] > n ? -1 : 1, l = !0; l; )
                      if (
                        (i[a] <= n && i[a + 1] > n
                          ? ((o = (n - i[a]) / (i[a + 1] - i[a])), (l = !1))
                          : (a += h),
                        a < 0 || a >= s - 1)
                      ) {
                        if (a === s - 1) return r[a];
                        l = !1;
                      }
                    return r[a] + (r[a + 1] - r[a]) * o;
                  }
                  var o = createTypedArray("float32", 8);
                  return {
                    getSegmentsLength: function (t) {
                      var e,
                        i = segmentsLengthPool.newElement(),
                        s = t.c,
                        a = t.v,
                        n = t.o,
                        o = t.i,
                        h = t._length,
                        l = i.lengths,
                        p = 0;
                      for (e = 0; e < h - 1; e += 1)
                        (l[e] = r(a[e], a[e + 1], n[e], o[e + 1])),
                          (p += l[e].addedLength);
                      return (
                        s &&
                          h &&
                          ((l[e] = r(a[e], a[0], n[e], o[0])),
                          (p += l[e].addedLength)),
                        (i.totalLength = p),
                        i
                      );
                    },
                    getNewSegment: function (e, r, i, s, a, h, l) {
                      a < 0 ? (a = 0) : a > 1 && (a = 1);
                      var p,
                        f = n(a, l),
                        c = n((h = h > 1 ? 1 : h), l),
                        m = e.length,
                        u = 1 - f,
                        d = 1 - c,
                        y = u * u * u,
                        g = f * u * u * 3,
                        v = f * f * u * 3,
                        b = f * f * f,
                        P = u * u * d,
                        _ = f * u * d + u * f * d + u * u * c,
                        S = f * f * d + u * f * c + f * u * c,
                        E = f * f * c,
                        x = u * d * d,
                        A = f * d * d + u * c * d + u * d * c,
                        M = f * c * d + u * c * c + f * d * c,
                        T = f * c * c,
                        k = d * d * d,
                        F = c * d * d + d * c * d + d * d * c,
                        I = c * c * d + d * c * c + c * d * c,
                        D = c * c * c;
                      for (p = 0; p < m; p += 1)
                        (o[4 * p] =
                          t.round(
                            1e3 * (y * e[p] + g * i[p] + v * s[p] + b * r[p])
                          ) / 1e3),
                          (o[4 * p + 1] =
                            t.round(
                              1e3 * (P * e[p] + _ * i[p] + S * s[p] + E * r[p])
                            ) / 1e3),
                          (o[4 * p + 2] =
                            t.round(
                              1e3 * (x * e[p] + A * i[p] + M * s[p] + T * r[p])
                            ) / 1e3),
                          (o[4 * p + 3] =
                            t.round(
                              1e3 * (k * e[p] + F * i[p] + I * s[p] + D * r[p])
                            ) / 1e3);
                      return o;
                    },
                    getPointInSegment: function (e, r, i, s, a, o) {
                      var h = n(a, o),
                        l = 1 - h;
                      return [
                        t.round(
                          1e3 *
                            (l * l * l * e[0] +
                              (h * l * l + l * h * l + l * l * h) * i[0] +
                              (h * h * l + l * h * h + h * l * h) * s[0] +
                              h * h * h * r[0])
                        ) / 1e3,
                        t.round(
                          1e3 *
                            (l * l * l * e[1] +
                              (h * l * l + l * h * l + l * l * h) * i[1] +
                              (h * h * l + l * h * h + h * l * h) * s[1] +
                              h * h * h * r[1])
                        ) / 1e3,
                      ];
                    },
                    buildBezierData: a,
                    pointOnLine2D: e,
                    pointOnLine3D: function (r, i, s, a, n, o, h, l, p) {
                      if (0 === s && 0 === o && 0 === p)
                        return e(r, i, a, n, h, l);
                      var f,
                        c = t.sqrt(
                          t.pow(a - r, 2) + t.pow(n - i, 2) + t.pow(o - s, 2)
                        ),
                        m = t.sqrt(
                          t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - s, 2)
                        ),
                        u = t.sqrt(
                          t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2)
                        );
                      return (
                        (f =
                          c > m
                            ? c > u
                              ? c - m - u
                              : u - m - c
                            : u > m
                            ? u - m - c
                            : m - c - u) > -1e-4 && f < 1e-4
                      );
                    },
                  };
                }
                var bez = bezFunction(),
                  initFrame = initialDefaultFrame,
                  mathAbs = Math.abs;
                function interpolateValue(t, e) {
                  var r,
                    i = this.offsetTime;
                  "multidimensional" === this.propType &&
                    (r = createTypedArray("float32", this.pv.length));
                  for (
                    var s,
                      a,
                      n,
                      o = e.lastIndex,
                      h = o,
                      l = this.keyframes.length - 1,
                      p = !0;
                    p;

                  ) {
                    if (
                      ((s = this.keyframes[h]),
                      (a = this.keyframes[h + 1]),
                      h === l - 1 && t >= a.t - i)
                    ) {
                      s.h && (s = a), (o = 0);
                      break;
                    }
                    if (a.t - i > t) {
                      o = h;
                      break;
                    }
                    h < l - 1 ? (h += 1) : ((o = 0), (p = !1));
                  }
                  n = this.keyframesMetadata[h] || {};
                  var f,
                    c,
                    m,
                    u,
                    d,
                    y,
                    g,
                    v = a.t - i,
                    b = s.t - i;
                  if (s.to) {
                    n.bezierData ||
                      (n.bezierData = bez.buildBezierData(
                        s.s,
                        a.s || s.e,
                        s.to,
                        s.ti
                      ));
                    var P = n.bezierData;
                    if (t >= v || t < b) {
                      var _ = t >= v ? P.points.length - 1 : 0;
                      for (c = P.points[_].point.length, f = 0; f < c; f += 1)
                        r[f] = P.points[_].point[f];
                    } else {
                      n.__fnct
                        ? (y = n.__fnct)
                        : ((y = BezierFactory.getBezierEasing(
                            s.o.x,
                            s.o.y,
                            s.i.x,
                            s.i.y,
                            s.n
                          ).get),
                          (n.__fnct = y)),
                        (m = y((t - b) / (v - b)));
                      var S,
                        E = P.segmentLength * m,
                        x =
                          e.lastFrame < t && e._lastKeyframeIndex === h
                            ? e._lastAddedLength
                            : 0;
                      for (
                        d =
                          e.lastFrame < t && e._lastKeyframeIndex === h
                            ? e._lastPoint
                            : 0,
                          p = !0,
                          u = P.points.length;
                        p;

                      ) {
                        if (
                          ((x += P.points[d].partialLength),
                          0 === E || 0 === m || d === P.points.length - 1)
                        ) {
                          for (
                            c = P.points[d].point.length, f = 0;
                            f < c;
                            f += 1
                          )
                            r[f] = P.points[d].point[f];
                          break;
                        }
                        if (E >= x && E < x + P.points[d + 1].partialLength) {
                          for (
                            S = (E - x) / P.points[d + 1].partialLength,
                              c = P.points[d].point.length,
                              f = 0;
                            f < c;
                            f += 1
                          )
                            r[f] =
                              P.points[d].point[f] +
                              (P.points[d + 1].point[f] -
                                P.points[d].point[f]) *
                                S;
                          break;
                        }
                        d < u - 1 ? (d += 1) : (p = !1);
                      }
                      (e._lastPoint = d),
                        (e._lastAddedLength = x - P.points[d].partialLength),
                        (e._lastKeyframeIndex = h);
                    }
                  } else {
                    var A, M, T, k, F;
                    if (
                      ((l = s.s.length), (g = a.s || s.e), this.sh && 1 !== s.h)
                    )
                      t >= v
                        ? ((r[0] = g[0]), (r[1] = g[1]), (r[2] = g[2]))
                        : t <= b
                        ? ((r[0] = s.s[0]), (r[1] = s.s[1]), (r[2] = s.s[2]))
                        : quaternionToEuler(
                            r,
                            slerp(
                              createQuaternion(s.s),
                              createQuaternion(g),
                              (t - b) / (v - b)
                            )
                          );
                    else
                      for (h = 0; h < l; h += 1)
                        1 !== s.h &&
                          (t >= v
                            ? (m = 1)
                            : t < b
                            ? (m = 0)
                            : (s.o.x.constructor === Array
                                ? (n.__fnct || (n.__fnct = []),
                                  n.__fnct[h]
                                    ? (y = n.__fnct[h])
                                    : ((A =
                                        void 0 === s.o.x[h]
                                          ? s.o.x[0]
                                          : s.o.x[h]),
                                      (M =
                                        void 0 === s.o.y[h]
                                          ? s.o.y[0]
                                          : s.o.y[h]),
                                      (T =
                                        void 0 === s.i.x[h]
                                          ? s.i.x[0]
                                          : s.i.x[h]),
                                      (k =
                                        void 0 === s.i.y[h]
                                          ? s.i.y[0]
                                          : s.i.y[h]),
                                      (y = BezierFactory.getBezierEasing(
                                        A,
                                        M,
                                        T,
                                        k
                                      ).get),
                                      (n.__fnct[h] = y)))
                                : n.__fnct
                                ? (y = n.__fnct)
                                : ((A = s.o.x),
                                  (M = s.o.y),
                                  (T = s.i.x),
                                  (k = s.i.y),
                                  (y = BezierFactory.getBezierEasing(
                                    A,
                                    M,
                                    T,
                                    k
                                  ).get),
                                  (s.keyframeMetadata = y)),
                              (m = y((t - b) / (v - b))))),
                          (g = a.s || s.e),
                          (F =
                            1 === s.h ? s.s[h] : s.s[h] + (g[h] - s.s[h]) * m),
                          "multidimensional" === this.propType
                            ? (r[h] = F)
                            : (r = F);
                  }
                  return (e.lastIndex = o), r;
                }
                function slerp(t, e, r) {
                  var i,
                    s,
                    a,
                    n,
                    o,
                    h = [],
                    l = t[0],
                    p = t[1],
                    f = t[2],
                    c = t[3],
                    m = e[0],
                    u = e[1],
                    d = e[2],
                    y = e[3];
                  return (
                    (s = l * m + p * u + f * d + c * y) < 0 &&
                      ((s = -s), (m = -m), (u = -u), (d = -d), (y = -y)),
                    1 - s > 1e-6
                      ? ((i = Math.acos(s)),
                        (a = Math.sin(i)),
                        (n = Math.sin((1 - r) * i) / a),
                        (o = Math.sin(r * i) / a))
                      : ((n = 1 - r), (o = r)),
                    (h[0] = n * l + o * m),
                    (h[1] = n * p + o * u),
                    (h[2] = n * f + o * d),
                    (h[3] = n * c + o * y),
                    h
                  );
                }
                function quaternionToEuler(t, e) {
                  var r = e[0],
                    i = e[1],
                    s = e[2],
                    a = e[3],
                    n = Math.atan2(
                      2 * i * a - 2 * r * s,
                      1 - 2 * i * i - 2 * s * s
                    ),
                    o = Math.asin(2 * r * i + 2 * s * a),
                    h = Math.atan2(
                      2 * r * a - 2 * i * s,
                      1 - 2 * r * r - 2 * s * s
                    );
                  (t[0] = n / degToRads),
                    (t[1] = o / degToRads),
                    (t[2] = h / degToRads);
                }
                function createQuaternion(t) {
                  var e = t[0] * degToRads,
                    r = t[1] * degToRads,
                    i = t[2] * degToRads,
                    s = Math.cos(e / 2),
                    a = Math.cos(r / 2),
                    n = Math.cos(i / 2),
                    o = Math.sin(e / 2),
                    h = Math.sin(r / 2),
                    l = Math.sin(i / 2);
                  return [
                    o * h * n + s * a * l,
                    o * a * n + s * h * l,
                    s * h * n - o * a * l,
                    s * a * n - o * h * l,
                  ];
                }
                function getValueAtCurrentTime() {
                  var t = this.comp.renderedFrame - this.offsetTime,
                    e = this.keyframes[0].t - this.offsetTime,
                    r =
                      this.keyframes[this.keyframes.length - 1].t -
                      this.offsetTime;
                  if (
                    !(
                      t === this._caching.lastFrame ||
                      (this._caching.lastFrame !== initFrame &&
                        ((this._caching.lastFrame >= r && t >= r) ||
                          (this._caching.lastFrame < e && t < e)))
                    )
                  ) {
                    this._caching.lastFrame >= t &&
                      ((this._caching._lastKeyframeIndex = -1),
                      (this._caching.lastIndex = 0));
                    var i = this.interpolateValue(t, this._caching);
                    this.pv = i;
                  }
                  return (this._caching.lastFrame = t), this.pv;
                }
                function setVValue(t) {
                  var e;
                  if ("unidimensional" === this.propType)
                    (e = t * this.mult),
                      mathAbs(this.v - e) > 1e-5 &&
                        ((this.v = e), (this._mdf = !0));
                  else
                    for (var r = 0, i = this.v.length; r < i; )
                      (e = t[r] * this.mult),
                        mathAbs(this.v[r] - e) > 1e-5 &&
                          ((this.v[r] = e), (this._mdf = !0)),
                        (r += 1);
                }
                function processEffectsSequence() {
                  if (
                    this.elem.globalData.frameId !== this.frameId &&
                    this.effectsSequence.length
                  ) {
                    if (this.lock) return void this.setVValue(this.pv);
                    (this.lock = !0), (this._mdf = this._isFirstFrame);
                    var t,
                      e = this.effectsSequence.length,
                      r = this.kf ? this.pv : this.data.k;
                    for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                    this.setVValue(r),
                      (this._isFirstFrame = !1),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
                }
                function addEffect(t) {
                  this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this);
                }
                function ValueProperty(t, e, r, i) {
                  (this.propType = "unidimensional"),
                    (this.mult = r || 1),
                    (this.data = e),
                    (this.v = r ? e.k * r : e.k),
                    (this.pv = e.k),
                    (this._mdf = !1),
                    (this.elem = t),
                    (this.container = i),
                    (this.comp = t.comp),
                    (this.k = !1),
                    (this.kf = !1),
                    (this.vel = 0),
                    (this.effectsSequence = []),
                    (this._isFirstFrame = !0),
                    (this.getValue = processEffectsSequence),
                    (this.setVValue = setVValue),
                    (this.addEffect = addEffect);
                }
                function MultiDimensionalProperty(t, e, r, i) {
                  (this.propType = "multidimensional"),
                    (this.mult = r || 1),
                    (this.data = e),
                    (this._mdf = !1),
                    (this.elem = t),
                    (this.container = i),
                    (this.comp = t.comp),
                    (this.k = !1),
                    (this.kf = !1),
                    (this.frameId = -1);
                  var s,
                    a = e.k.length;
                  for (
                    this.v = createTypedArray("float32", a),
                      this.pv = createTypedArray("float32", a),
                      this.vel = createTypedArray("float32", a),
                      s = 0;
                    s < a;
                    s += 1
                  )
                    (this.v[s] = e.k[s] * this.mult), (this.pv[s] = e.k[s]);
                  (this._isFirstFrame = !0),
                    (this.effectsSequence = []),
                    (this.getValue = processEffectsSequence),
                    (this.setVValue = setVValue),
                    (this.addEffect = addEffect);
                }
                function KeyframedValueProperty(t, e, r, i) {
                  (this.propType = "unidimensional"),
                    (this.keyframes = e.k),
                    (this.keyframesMetadata = []),
                    (this.offsetTime = t.data.st),
                    (this.frameId = -1),
                    (this._caching = {
                      lastFrame: initFrame,
                      lastIndex: 0,
                      value: 0,
                      _lastKeyframeIndex: -1,
                    }),
                    (this.k = !0),
                    (this.kf = !0),
                    (this.data = e),
                    (this.mult = r || 1),
                    (this.elem = t),
                    (this.container = i),
                    (this.comp = t.comp),
                    (this.v = initFrame),
                    (this.pv = initFrame),
                    (this._isFirstFrame = !0),
                    (this.getValue = processEffectsSequence),
                    (this.setVValue = setVValue),
                    (this.interpolateValue = interpolateValue),
                    (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
                    (this.addEffect = addEffect);
                }
                function KeyframedMultidimensionalProperty(t, e, r, i) {
                  this.propType = "multidimensional";
                  var s,
                    a,
                    n,
                    o,
                    h,
                    l = e.k.length;
                  for (s = 0; s < l - 1; s += 1)
                    e.k[s].to &&
                      e.k[s].s &&
                      e.k[s + 1] &&
                      e.k[s + 1].s &&
                      ((a = e.k[s].s),
                      (n = e.k[s + 1].s),
                      (o = e.k[s].to),
                      (h = e.k[s].ti),
                      ((2 === a.length &&
                        !(a[0] === n[0] && a[1] === n[1]) &&
                        bez.pointOnLine2D(
                          a[0],
                          a[1],
                          n[0],
                          n[1],
                          a[0] + o[0],
                          a[1] + o[1]
                        ) &&
                        bez.pointOnLine2D(
                          a[0],
                          a[1],
                          n[0],
                          n[1],
                          n[0] + h[0],
                          n[1] + h[1]
                        )) ||
                        (3 === a.length &&
                          !(a[0] === n[0] && a[1] === n[1] && a[2] === n[2]) &&
                          bez.pointOnLine3D(
                            a[0],
                            a[1],
                            a[2],
                            n[0],
                            n[1],
                            n[2],
                            a[0] + o[0],
                            a[1] + o[1],
                            a[2] + o[2]
                          ) &&
                          bez.pointOnLine3D(
                            a[0],
                            a[1],
                            a[2],
                            n[0],
                            n[1],
                            n[2],
                            n[0] + h[0],
                            n[1] + h[1],
                            n[2] + h[2]
                          ))) &&
                        ((e.k[s].to = null), (e.k[s].ti = null)),
                      a[0] === n[0] &&
                        a[1] === n[1] &&
                        0 === o[0] &&
                        0 === o[1] &&
                        0 === h[0] &&
                        0 === h[1] &&
                        (2 === a.length ||
                          (a[2] === n[2] && 0 === o[2] && 0 === h[2])) &&
                        ((e.k[s].to = null), (e.k[s].ti = null)));
                  (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
                    (this.data = e),
                    (this.keyframes = e.k),
                    (this.keyframesMetadata = []),
                    (this.offsetTime = t.data.st),
                    (this.k = !0),
                    (this.kf = !0),
                    (this._isFirstFrame = !0),
                    (this.mult = r || 1),
                    (this.elem = t),
                    (this.container = i),
                    (this.comp = t.comp),
                    (this.getValue = processEffectsSequence),
                    (this.setVValue = setVValue),
                    (this.interpolateValue = interpolateValue),
                    (this.frameId = -1);
                  var p = e.k[0].s.length;
                  for (
                    this.v = createTypedArray("float32", p),
                      this.pv = createTypedArray("float32", p),
                      s = 0;
                    s < p;
                    s += 1
                  )
                    (this.v[s] = initFrame), (this.pv[s] = initFrame);
                  (this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: createTypedArray("float32", p),
                  }),
                    (this.addEffect = addEffect);
                }
                var PropertyFactory = {
                  getProp: function (t, e, r, i, s) {
                    var a;
                    if (
                      (e.sid && (e = t.globalData.slotManager.getProp(e)),
                      e.k.length)
                    )
                      if ("number" == typeof e.k[0])
                        a = new MultiDimensionalProperty(t, e, i, s);
                      else
                        switch (r) {
                          case 0:
                            a = new KeyframedValueProperty(t, e, i, s);
                            break;
                          case 1:
                            a = new KeyframedMultidimensionalProperty(
                              t,
                              e,
                              i,
                              s
                            );
                        }
                    else a = new ValueProperty(t, e, i, s);
                    return (
                      a.effectsSequence.length && s.addDynamicProperty(a), a
                    );
                  },
                };
                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                  addDynamicProperty: function (t) {
                    -1 === this.dynamicProperties.indexOf(t) &&
                      (this.dynamicProperties.push(t),
                      this.container.addDynamicProperty(this),
                      (this._isAnimated = !0));
                  },
                  iterateDynamicProperties: function () {
                    this._mdf = !1;
                    var t,
                      e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1)
                      this.dynamicProperties[t].getValue(),
                        this.dynamicProperties[t]._mdf && (this._mdf = !0);
                  },
                  initDynamicPropertyContainer: function (t) {
                    (this.container = t),
                      (this.dynamicProperties = []),
                      (this._mdf = !1),
                      (this._isAnimated = !1);
                  },
                };
                var pointPool = poolFactory(8, function () {
                  return createTypedArray("float32", 2);
                });
                function ShapePath() {
                  (this.c = !1),
                    (this._length = 0),
                    (this._maxLength = 8),
                    (this.v = createSizedArray(this._maxLength)),
                    (this.o = createSizedArray(this._maxLength)),
                    (this.i = createSizedArray(this._maxLength));
                }
                (ShapePath.prototype.setPathData = function (t, e) {
                  (this.c = t), this.setLength(e);
                  for (var r = 0; r < e; )
                    (this.v[r] = pointPool.newElement()),
                      (this.o[r] = pointPool.newElement()),
                      (this.i[r] = pointPool.newElement()),
                      (r += 1);
                }),
                  (ShapePath.prototype.setLength = function (t) {
                    for (; this._maxLength < t; ) this.doubleArrayLength();
                    this._length = t;
                  }),
                  (ShapePath.prototype.doubleArrayLength = function () {
                    (this.v = this.v.concat(createSizedArray(this._maxLength))),
                      (this.i = this.i.concat(
                        createSizedArray(this._maxLength)
                      )),
                      (this.o = this.o.concat(
                        createSizedArray(this._maxLength)
                      )),
                      (this._maxLength *= 2);
                  }),
                  (ShapePath.prototype.setXYAt = function (t, e, r, i, s) {
                    var a;
                    switch (
                      ((this._length = Math.max(this._length, i + 1)),
                      this._length >= this._maxLength &&
                        this.doubleArrayLength(),
                      r)
                    ) {
                      case "v":
                        a = this.v;
                        break;
                      case "i":
                        a = this.i;
                        break;
                      case "o":
                        a = this.o;
                        break;
                      default:
                        a = [];
                    }
                    (!a[i] || (a[i] && !s)) && (a[i] = pointPool.newElement()),
                      (a[i][0] = t),
                      (a[i][1] = e);
                  }),
                  (ShapePath.prototype.setTripleAt = function (
                    t,
                    e,
                    r,
                    i,
                    s,
                    a,
                    n,
                    o
                  ) {
                    this.setXYAt(t, e, "v", n, o),
                      this.setXYAt(r, i, "o", n, o),
                      this.setXYAt(s, a, "i", n, o);
                  }),
                  (ShapePath.prototype.reverse = function () {
                    var t = new ShapePath();
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                      r = this.o,
                      i = this.i,
                      s = 0;
                    this.c &&
                      (t.setTripleAt(
                        e[0][0],
                        e[0][1],
                        i[0][0],
                        i[0][1],
                        r[0][0],
                        r[0][1],
                        0,
                        !1
                      ),
                      (s = 1));
                    var a,
                      n = this._length - 1,
                      o = this._length;
                    for (a = s; a < o; a += 1)
                      t.setTripleAt(
                        e[n][0],
                        e[n][1],
                        i[n][0],
                        i[n][1],
                        r[n][0],
                        r[n][1],
                        a,
                        !1
                      ),
                        (n -= 1);
                    return t;
                  }),
                  (ShapePath.prototype.length = function () {
                    return this._length;
                  });
                var shapePool = (function () {
                  var t = poolFactory(
                    4,
                    function () {
                      return new ShapePath();
                    },
                    function (t) {
                      var e,
                        r = t._length;
                      for (e = 0; e < r; e += 1)
                        pointPool.release(t.v[e]),
                          pointPool.release(t.i[e]),
                          pointPool.release(t.o[e]),
                          (t.v[e] = null),
                          (t.i[e] = null),
                          (t.o[e] = null);
                      (t._length = 0), (t.c = !1);
                    }
                  );
                  return (
                    (t.clone = function (e) {
                      var r,
                        i = t.newElement(),
                        s = void 0 === e._length ? e.v.length : e._length;
                      for (i.setLength(s), i.c = e.c, r = 0; r < s; r += 1)
                        i.setTripleAt(
                          e.v[r][0],
                          e.v[r][1],
                          e.o[r][0],
                          e.o[r][1],
                          e.i[r][0],
                          e.i[r][1],
                          r
                        );
                      return i;
                    }),
                    t
                  );
                })();
                function ShapeCollection() {
                  (this._length = 0),
                    (this._maxLength = 4),
                    (this.shapes = createSizedArray(this._maxLength));
                }
                (ShapeCollection.prototype.addShape = function (t) {
                  this._length === this._maxLength &&
                    ((this.shapes = this.shapes.concat(
                      createSizedArray(this._maxLength)
                    )),
                    (this._maxLength *= 2)),
                    (this.shapes[this._length] = t),
                    (this._length += 1);
                }),
                  (ShapeCollection.prototype.releaseShapes = function () {
                    var t;
                    for (t = 0; t < this._length; t += 1)
                      shapePool.release(this.shapes[t]);
                    this._length = 0;
                  });
                var shapeCollectionPool = (function () {
                    var t = {
                        newShapeCollection: function () {
                          return e ? i[(e -= 1)] : new ShapeCollection();
                        },
                        release: function (t) {
                          var s,
                            a = t._length;
                          for (s = 0; s < a; s += 1)
                            shapePool.release(t.shapes[s]);
                          (t._length = 0),
                            e === r && ((i = pooling.double(i)), (r *= 2)),
                            (i[e] = t),
                            (e += 1);
                        },
                      },
                      e = 0,
                      r = 4,
                      i = createSizedArray(r);
                    return t;
                  })(),
                  ShapePropertyFactory = (function () {
                    var t = -999999;
                    function e(t, e, r) {
                      var i,
                        s,
                        a,
                        n,
                        o,
                        h,
                        l,
                        p,
                        f,
                        c = r.lastIndex,
                        m = this.keyframes;
                      if (t < m[0].t - this.offsetTime)
                        (i = m[0].s[0]), (a = !0), (c = 0);
                      else if (t >= m[m.length - 1].t - this.offsetTime)
                        (i = m[m.length - 1].s
                          ? m[m.length - 1].s[0]
                          : m[m.length - 2].e[0]),
                          (a = !0);
                      else {
                        for (
                          var u, d, y, g = c, v = m.length - 1, b = !0;
                          b &&
                          ((u = m[g]),
                          !((d = m[g + 1]).t - this.offsetTime > t));

                        )
                          g < v - 1 ? (g += 1) : (b = !1);
                        if (
                          ((y = this.keyframesMetadata[g] || {}),
                          (c = g),
                          !(a = 1 === u.h))
                        ) {
                          if (t >= d.t - this.offsetTime) p = 1;
                          else if (t < u.t - this.offsetTime) p = 0;
                          else {
                            var P;
                            y.__fnct
                              ? (P = y.__fnct)
                              : ((P = BezierFactory.getBezierEasing(
                                  u.o.x,
                                  u.o.y,
                                  u.i.x,
                                  u.i.y
                                ).get),
                                (y.__fnct = P)),
                              (p = P(
                                (t - (u.t - this.offsetTime)) /
                                  (d.t -
                                    this.offsetTime -
                                    (u.t - this.offsetTime))
                              ));
                          }
                          s = d.s ? d.s[0] : u.e[0];
                        }
                        i = u.s[0];
                      }
                      for (
                        h = e._length,
                          l = i.i[0].length,
                          r.lastIndex = c,
                          n = 0;
                        n < h;
                        n += 1
                      )
                        for (o = 0; o < l; o += 1)
                          (f = a
                            ? i.i[n][o]
                            : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p),
                            (e.i[n][o] = f),
                            (f = a
                              ? i.o[n][o]
                              : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p),
                            (e.o[n][o] = f),
                            (f = a
                              ? i.v[n][o]
                              : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p),
                            (e.v[n][o] = f);
                    }
                    function r() {
                      var e = this.comp.renderedFrame - this.offsetTime,
                        r = this.keyframes[0].t - this.offsetTime,
                        i =
                          this.keyframes[this.keyframes.length - 1].t -
                          this.offsetTime,
                        s = this._caching.lastFrame;
                      return (
                        (s !== t && ((s < r && e < r) || (s > i && e > i))) ||
                          ((this._caching.lastIndex =
                            s < e ? this._caching.lastIndex : 0),
                          this.interpolateShape(e, this.pv, this._caching)),
                        (this._caching.lastFrame = e),
                        this.pv
                      );
                    }
                    function i() {
                      this.paths = this.localShapeCollection;
                    }
                    function s(t) {
                      (function (t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var r,
                          i = t._length;
                        for (r = 0; r < i; r += 1)
                          if (
                            t.v[r][0] !== e.v[r][0] ||
                            t.v[r][1] !== e.v[r][1] ||
                            t.o[r][0] !== e.o[r][0] ||
                            t.o[r][1] !== e.o[r][1] ||
                            t.i[r][0] !== e.i[r][0] ||
                            t.i[r][1] !== e.i[r][1]
                          )
                            return !1;
                        return !0;
                      })(this.v, t) ||
                        ((this.v = shapePool.clone(t)),
                        this.localShapeCollection.releaseShapes(),
                        this.localShapeCollection.addShape(this.v),
                        (this._mdf = !0),
                        (this.paths = this.localShapeCollection));
                    }
                    function a() {
                      if (this.elem.globalData.frameId !== this.frameId) {
                        if (!this.effectsSequence.length)
                          return void (this._mdf = !1);
                        if (this.lock) return void this.setVValue(this.pv);
                        var t;
                        (this.lock = !0),
                          (this._mdf = !1),
                          (t = this.kf
                            ? this.pv
                            : this.data.ks
                            ? this.data.ks.k
                            : this.data.pt.k);
                        var e,
                          r = this.effectsSequence.length;
                        for (e = 0; e < r; e += 1)
                          t = this.effectsSequence[e](t);
                        this.setVValue(t),
                          (this.lock = !1),
                          (this.frameId = this.elem.globalData.frameId);
                      }
                    }
                    function n(t, e, r) {
                      (this.propType = "shape"),
                        (this.comp = t.comp),
                        (this.container = t),
                        (this.elem = t),
                        (this.data = e),
                        (this.k = !1),
                        (this.kf = !1),
                        (this._mdf = !1);
                      var s = 3 === r ? e.pt.k : e.ks.k;
                      (this.v = shapePool.clone(s)),
                        (this.pv = shapePool.clone(this.v)),
                        (this.localShapeCollection =
                          shapeCollectionPool.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.paths.addShape(this.v),
                        (this.reset = i),
                        (this.effectsSequence = []);
                    }
                    function o(t) {
                      this.effectsSequence.push(t),
                        this.container.addDynamicProperty(this);
                    }
                    function h(e, s, a) {
                      (this.propType = "shape"),
                        (this.comp = e.comp),
                        (this.elem = e),
                        (this.container = e),
                        (this.offsetTime = e.data.st),
                        (this.keyframes = 3 === a ? s.pt.k : s.ks.k),
                        (this.keyframesMetadata = []),
                        (this.k = !0),
                        (this.kf = !0);
                      var n = this.keyframes[0].s[0].i.length;
                      (this.v = shapePool.newElement()),
                        this.v.setPathData(this.keyframes[0].s[0].c, n),
                        (this.pv = shapePool.clone(this.v)),
                        (this.localShapeCollection =
                          shapeCollectionPool.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.paths.addShape(this.v),
                        (this.lastFrame = t),
                        (this.reset = i),
                        (this._caching = { lastFrame: t, lastIndex: 0 }),
                        (this.effectsSequence = [r.bind(this)]);
                    }
                    (n.prototype.interpolateShape = e),
                      (n.prototype.getValue = a),
                      (n.prototype.setVValue = s),
                      (n.prototype.addEffect = o),
                      (h.prototype.getValue = a),
                      (h.prototype.interpolateShape = e),
                      (h.prototype.setVValue = s),
                      (h.prototype.addEffect = o);
                    var l = (function () {
                        var t = roundCorner;
                        function e(t, e) {
                          (this.v = shapePool.newElement()),
                            this.v.setPathData(!0, 4),
                            (this.localShapeCollection =
                              shapeCollectionPool.newShapeCollection()),
                            (this.paths = this.localShapeCollection),
                            this.localShapeCollection.addShape(this.v),
                            (this.d = e.d),
                            (this.elem = t),
                            (this.comp = t.comp),
                            (this.frameId = -1),
                            this.initDynamicPropertyContainer(t),
                            (this.p = PropertyFactory.getProp(
                              t,
                              e.p,
                              1,
                              0,
                              this
                            )),
                            (this.s = PropertyFactory.getProp(
                              t,
                              e.s,
                              1,
                              0,
                              this
                            )),
                            this.dynamicProperties.length
                              ? (this.k = !0)
                              : ((this.k = !1), this.convertEllToPath());
                        }
                        return (
                          (e.prototype = {
                            reset: i,
                            getValue: function () {
                              this.elem.globalData.frameId !== this.frameId &&
                                ((this.frameId = this.elem.globalData.frameId),
                                this.iterateDynamicProperties(),
                                this._mdf && this.convertEllToPath());
                            },
                            convertEllToPath: function () {
                              var e = this.p.v[0],
                                r = this.p.v[1],
                                i = this.s.v[0] / 2,
                                s = this.s.v[1] / 2,
                                a = 3 !== this.d,
                                n = this.v;
                              (n.v[0][0] = e),
                                (n.v[0][1] = r - s),
                                (n.v[1][0] = a ? e + i : e - i),
                                (n.v[1][1] = r),
                                (n.v[2][0] = e),
                                (n.v[2][1] = r + s),
                                (n.v[3][0] = a ? e - i : e + i),
                                (n.v[3][1] = r),
                                (n.i[0][0] = a ? e - i * t : e + i * t),
                                (n.i[0][1] = r - s),
                                (n.i[1][0] = a ? e + i : e - i),
                                (n.i[1][1] = r - s * t),
                                (n.i[2][0] = a ? e + i * t : e - i * t),
                                (n.i[2][1] = r + s),
                                (n.i[3][0] = a ? e - i : e + i),
                                (n.i[3][1] = r + s * t),
                                (n.o[0][0] = a ? e + i * t : e - i * t),
                                (n.o[0][1] = r - s),
                                (n.o[1][0] = a ? e + i : e - i),
                                (n.o[1][1] = r + s * t),
                                (n.o[2][0] = a ? e - i * t : e + i * t),
                                (n.o[2][1] = r + s),
                                (n.o[3][0] = a ? e - i : e + i),
                                (n.o[3][1] = r - s * t);
                            },
                          }),
                          extendPrototype([DynamicPropertyContainer], e),
                          e
                        );
                      })(),
                      p = (function () {
                        function t(t, e) {
                          (this.v = shapePool.newElement()),
                            this.v.setPathData(!0, 0),
                            (this.elem = t),
                            (this.comp = t.comp),
                            (this.data = e),
                            (this.frameId = -1),
                            (this.d = e.d),
                            this.initDynamicPropertyContainer(t),
                            1 === e.sy
                              ? ((this.ir = PropertyFactory.getProp(
                                  t,
                                  e.ir,
                                  0,
                                  0,
                                  this
                                )),
                                (this.is = PropertyFactory.getProp(
                                  t,
                                  e.is,
                                  0,
                                  0.01,
                                  this
                                )),
                                (this.convertToPath = this.convertStarToPath))
                              : (this.convertToPath =
                                  this.convertPolygonToPath),
                            (this.pt = PropertyFactory.getProp(
                              t,
                              e.pt,
                              0,
                              0,
                              this
                            )),
                            (this.p = PropertyFactory.getProp(
                              t,
                              e.p,
                              1,
                              0,
                              this
                            )),
                            (this.r = PropertyFactory.getProp(
                              t,
                              e.r,
                              0,
                              degToRads,
                              this
                            )),
                            (this.or = PropertyFactory.getProp(
                              t,
                              e.or,
                              0,
                              0,
                              this
                            )),
                            (this.os = PropertyFactory.getProp(
                              t,
                              e.os,
                              0,
                              0.01,
                              this
                            )),
                            (this.localShapeCollection =
                              shapeCollectionPool.newShapeCollection()),
                            this.localShapeCollection.addShape(this.v),
                            (this.paths = this.localShapeCollection),
                            this.dynamicProperties.length
                              ? (this.k = !0)
                              : ((this.k = !1), this.convertToPath());
                        }
                        return (
                          (t.prototype = {
                            reset: i,
                            getValue: function () {
                              this.elem.globalData.frameId !== this.frameId &&
                                ((this.frameId = this.elem.globalData.frameId),
                                this.iterateDynamicProperties(),
                                this._mdf && this.convertToPath());
                            },
                            convertStarToPath: function () {
                              var t,
                                e,
                                r,
                                i,
                                s = 2 * Math.floor(this.pt.v),
                                a = (2 * Math.PI) / s,
                                n = !0,
                                o = this.or.v,
                                h = this.ir.v,
                                l = this.os.v,
                                p = this.is.v,
                                f = (2 * Math.PI * o) / (2 * s),
                                c = (2 * Math.PI * h) / (2 * s),
                                m = -Math.PI / 2;
                              m += this.r.v;
                              var u = 3 === this.data.d ? -1 : 1;
                              for (this.v._length = 0, t = 0; t < s; t += 1) {
                                (r = n ? l : p), (i = n ? f : c);
                                var d = (e = n ? o : h) * Math.cos(m),
                                  y = e * Math.sin(m),
                                  g =
                                    0 === d && 0 === y
                                      ? 0
                                      : y / Math.sqrt(d * d + y * y),
                                  v =
                                    0 === d && 0 === y
                                      ? 0
                                      : -d / Math.sqrt(d * d + y * y);
                                (d += +this.p.v[0]),
                                  (y += +this.p.v[1]),
                                  this.v.setTripleAt(
                                    d,
                                    y,
                                    d - g * i * r * u,
                                    y - v * i * r * u,
                                    d + g * i * r * u,
                                    y + v * i * r * u,
                                    t,
                                    !0
                                  ),
                                  (n = !n),
                                  (m += a * u);
                              }
                            },
                            convertPolygonToPath: function () {
                              var t,
                                e = Math.floor(this.pt.v),
                                r = (2 * Math.PI) / e,
                                i = this.or.v,
                                s = this.os.v,
                                a = (2 * Math.PI * i) / (4 * e),
                                n = 0.5 * -Math.PI,
                                o = 3 === this.data.d ? -1 : 1;
                              for (
                                n += this.r.v, this.v._length = 0, t = 0;
                                t < e;
                                t += 1
                              ) {
                                var h = i * Math.cos(n),
                                  l = i * Math.sin(n),
                                  p =
                                    0 === h && 0 === l
                                      ? 0
                                      : l / Math.sqrt(h * h + l * l),
                                  f =
                                    0 === h && 0 === l
                                      ? 0
                                      : -h / Math.sqrt(h * h + l * l);
                                (h += +this.p.v[0]),
                                  (l += +this.p.v[1]),
                                  this.v.setTripleAt(
                                    h,
                                    l,
                                    h - p * a * s * o,
                                    l - f * a * s * o,
                                    h + p * a * s * o,
                                    l + f * a * s * o,
                                    t,
                                    !0
                                  ),
                                  (n += r * o);
                              }
                              (this.paths.length = 0), (this.paths[0] = this.v);
                            },
                          }),
                          extendPrototype([DynamicPropertyContainer], t),
                          t
                        );
                      })(),
                      f = (function () {
                        function t(t, e) {
                          (this.v = shapePool.newElement()),
                            (this.v.c = !0),
                            (this.localShapeCollection =
                              shapeCollectionPool.newShapeCollection()),
                            this.localShapeCollection.addShape(this.v),
                            (this.paths = this.localShapeCollection),
                            (this.elem = t),
                            (this.comp = t.comp),
                            (this.frameId = -1),
                            (this.d = e.d),
                            this.initDynamicPropertyContainer(t),
                            (this.p = PropertyFactory.getProp(
                              t,
                              e.p,
                              1,
                              0,
                              this
                            )),
                            (this.s = PropertyFactory.getProp(
                              t,
                              e.s,
                              1,
                              0,
                              this
                            )),
                            (this.r = PropertyFactory.getProp(
                              t,
                              e.r,
                              0,
                              0,
                              this
                            )),
                            this.dynamicProperties.length
                              ? (this.k = !0)
                              : ((this.k = !1), this.convertRectToPath());
                        }
                        return (
                          (t.prototype = {
                            convertRectToPath: function () {
                              var t = this.p.v[0],
                                e = this.p.v[1],
                                r = this.s.v[0] / 2,
                                i = this.s.v[1] / 2,
                                s = bmMin(r, i, this.r.v),
                                a = s * (1 - roundCorner);
                              (this.v._length = 0),
                                2 === this.d || 1 === this.d
                                  ? (this.v.setTripleAt(
                                      t + r,
                                      e - i + s,
                                      t + r,
                                      e - i + s,
                                      t + r,
                                      e - i + a,
                                      0,
                                      !0
                                    ),
                                    this.v.setTripleAt(
                                      t + r,
                                      e + i - s,
                                      t + r,
                                      e + i - a,
                                      t + r,
                                      e + i - s,
                                      1,
                                      !0
                                    ),
                                    0 !== s
                                      ? (this.v.setTripleAt(
                                          t + r - s,
                                          e + i,
                                          t + r - s,
                                          e + i,
                                          t + r - a,
                                          e + i,
                                          2,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r + s,
                                          e + i,
                                          t - r + a,
                                          e + i,
                                          t - r + s,
                                          e + i,
                                          3,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r,
                                          e + i - s,
                                          t - r,
                                          e + i - s,
                                          t - r,
                                          e + i - a,
                                          4,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r,
                                          e - i + s,
                                          t - r,
                                          e - i + a,
                                          t - r,
                                          e - i + s,
                                          5,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r + s,
                                          e - i,
                                          t - r + s,
                                          e - i,
                                          t - r + a,
                                          e - i,
                                          6,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t + r - s,
                                          e - i,
                                          t + r - a,
                                          e - i,
                                          t + r - s,
                                          e - i,
                                          7,
                                          !0
                                        ))
                                      : (this.v.setTripleAt(
                                          t - r,
                                          e + i,
                                          t - r + a,
                                          e + i,
                                          t - r,
                                          e + i,
                                          2
                                        ),
                                        this.v.setTripleAt(
                                          t - r,
                                          e - i,
                                          t - r,
                                          e - i + a,
                                          t - r,
                                          e - i,
                                          3
                                        )))
                                  : (this.v.setTripleAt(
                                      t + r,
                                      e - i + s,
                                      t + r,
                                      e - i + a,
                                      t + r,
                                      e - i + s,
                                      0,
                                      !0
                                    ),
                                    0 !== s
                                      ? (this.v.setTripleAt(
                                          t + r - s,
                                          e - i,
                                          t + r - s,
                                          e - i,
                                          t + r - a,
                                          e - i,
                                          1,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r + s,
                                          e - i,
                                          t - r + a,
                                          e - i,
                                          t - r + s,
                                          e - i,
                                          2,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r,
                                          e - i + s,
                                          t - r,
                                          e - i + s,
                                          t - r,
                                          e - i + a,
                                          3,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r,
                                          e + i - s,
                                          t - r,
                                          e + i - a,
                                          t - r,
                                          e + i - s,
                                          4,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r + s,
                                          e + i,
                                          t - r + s,
                                          e + i,
                                          t - r + a,
                                          e + i,
                                          5,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t + r - s,
                                          e + i,
                                          t + r - a,
                                          e + i,
                                          t + r - s,
                                          e + i,
                                          6,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t + r,
                                          e + i - s,
                                          t + r,
                                          e + i - s,
                                          t + r,
                                          e + i - a,
                                          7,
                                          !0
                                        ))
                                      : (this.v.setTripleAt(
                                          t - r,
                                          e - i,
                                          t - r + a,
                                          e - i,
                                          t - r,
                                          e - i,
                                          1,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t - r,
                                          e + i,
                                          t - r,
                                          e + i - a,
                                          t - r,
                                          e + i,
                                          2,
                                          !0
                                        ),
                                        this.v.setTripleAt(
                                          t + r,
                                          e + i,
                                          t + r - a,
                                          e + i,
                                          t + r,
                                          e + i,
                                          3,
                                          !0
                                        )));
                            },
                            getValue: function () {
                              this.elem.globalData.frameId !== this.frameId &&
                                ((this.frameId = this.elem.globalData.frameId),
                                this.iterateDynamicProperties(),
                                this._mdf && this.convertRectToPath());
                            },
                            reset: i,
                          }),
                          extendPrototype([DynamicPropertyContainer], t),
                          t
                        );
                      })(),
                      c = {
                        getShapeProp: function (t, e, r) {
                          var i;
                          return (
                            3 === r || 4 === r
                              ? (i = (3 === r ? e.pt : e.ks).k.length
                                  ? new h(t, e, r)
                                  : new n(t, e, r))
                              : 5 === r
                              ? (i = new f(t, e))
                              : 6 === r
                              ? (i = new l(t, e))
                              : 7 === r && (i = new p(t, e)),
                            i.k && t.addDynamicProperty(i),
                            i
                          );
                        },
                        getConstructorFunction: function () {
                          return n;
                        },
                        getKeyframedConstructorFunction: function () {
                          return h;
                        },
                      };
                    return c;
                  })(),
                  Matrix = (function () {
                    var t = Math.cos,
                      e = Math.sin,
                      r = Math.tan,
                      i = Math.round;
                    function s() {
                      return (
                        (this.props[0] = 1),
                        (this.props[1] = 0),
                        (this.props[2] = 0),
                        (this.props[3] = 0),
                        (this.props[4] = 0),
                        (this.props[5] = 1),
                        (this.props[6] = 0),
                        (this.props[7] = 0),
                        (this.props[8] = 0),
                        (this.props[9] = 0),
                        (this.props[10] = 1),
                        (this.props[11] = 0),
                        (this.props[12] = 0),
                        (this.props[13] = 0),
                        (this.props[14] = 0),
                        (this.props[15] = 1),
                        this
                      );
                    }
                    function a(r) {
                      if (0 === r) return this;
                      var i = t(r),
                        s = e(r);
                      return this._t(
                        i,
                        -s,
                        0,
                        0,
                        s,
                        i,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                      );
                    }
                    function n(r) {
                      if (0 === r) return this;
                      var i = t(r),
                        s = e(r);
                      return this._t(
                        1,
                        0,
                        0,
                        0,
                        0,
                        i,
                        -s,
                        0,
                        0,
                        s,
                        i,
                        0,
                        0,
                        0,
                        0,
                        1
                      );
                    }
                    function o(r) {
                      if (0 === r) return this;
                      var i = t(r),
                        s = e(r);
                      return this._t(
                        i,
                        0,
                        s,
                        0,
                        0,
                        1,
                        0,
                        0,
                        -s,
                        0,
                        i,
                        0,
                        0,
                        0,
                        0,
                        1
                      );
                    }
                    function h(r) {
                      if (0 === r) return this;
                      var i = t(r),
                        s = e(r);
                      return this._t(
                        i,
                        -s,
                        0,
                        0,
                        s,
                        i,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                      );
                    }
                    function l(t, e) {
                      return this._t(1, e, t, 1, 0, 0);
                    }
                    function p(t, e) {
                      return this.shear(r(t), r(e));
                    }
                    function f(i, s) {
                      var a = t(s),
                        n = e(s);
                      return this._t(
                        a,
                        n,
                        0,
                        0,
                        -n,
                        a,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                      )
                        ._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        ._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    }
                    function c(t, e, r) {
                      return (
                        !r && 0 !== r && (r = 1),
                        1 === t && 1 === e && 1 === r
                          ? this
                          : this._t(
                              t,
                              0,
                              0,
                              0,
                              0,
                              e,
                              0,
                              0,
                              0,
                              0,
                              r,
                              0,
                              0,
                              0,
                              0,
                              1
                            )
                      );
                    }
                    function m(t, e, r, i, s, a, n, o, h, l, p, f, c, m, u, d) {
                      return (
                        (this.props[0] = t),
                        (this.props[1] = e),
                        (this.props[2] = r),
                        (this.props[3] = i),
                        (this.props[4] = s),
                        (this.props[5] = a),
                        (this.props[6] = n),
                        (this.props[7] = o),
                        (this.props[8] = h),
                        (this.props[9] = l),
                        (this.props[10] = p),
                        (this.props[11] = f),
                        (this.props[12] = c),
                        (this.props[13] = m),
                        (this.props[14] = u),
                        (this.props[15] = d),
                        this
                      );
                    }
                    function u(t, e, r) {
                      return (
                        (r = r || 0),
                        0 !== t || 0 !== e || 0 !== r
                          ? this._t(
                              1,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              t,
                              e,
                              r,
                              1
                            )
                          : this
                      );
                    }
                    function d(t, e, r, i, s, a, n, o, h, l, p, f, c, m, u, d) {
                      var y = this.props;
                      if (
                        1 === t &&
                        0 === e &&
                        0 === r &&
                        0 === i &&
                        0 === s &&
                        1 === a &&
                        0 === n &&
                        0 === o &&
                        0 === h &&
                        0 === l &&
                        1 === p &&
                        0 === f
                      )
                        return (
                          (y[12] = y[12] * t + y[15] * c),
                          (y[13] = y[13] * a + y[15] * m),
                          (y[14] = y[14] * p + y[15] * u),
                          (y[15] *= d),
                          (this._identityCalculated = !1),
                          this
                        );
                      var g = y[0],
                        v = y[1],
                        b = y[2],
                        P = y[3],
                        _ = y[4],
                        S = y[5],
                        E = y[6],
                        x = y[7],
                        A = y[8],
                        M = y[9],
                        T = y[10],
                        k = y[11],
                        F = y[12],
                        I = y[13],
                        D = y[14],
                        C = y[15];
                      return (
                        (y[0] = g * t + v * s + b * h + P * c),
                        (y[1] = g * e + v * a + b * l + P * m),
                        (y[2] = g * r + v * n + b * p + P * u),
                        (y[3] = g * i + v * o + b * f + P * d),
                        (y[4] = _ * t + S * s + E * h + x * c),
                        (y[5] = _ * e + S * a + E * l + x * m),
                        (y[6] = _ * r + S * n + E * p + x * u),
                        (y[7] = _ * i + S * o + E * f + x * d),
                        (y[8] = A * t + M * s + T * h + k * c),
                        (y[9] = A * e + M * a + T * l + k * m),
                        (y[10] = A * r + M * n + T * p + k * u),
                        (y[11] = A * i + M * o + T * f + k * d),
                        (y[12] = F * t + I * s + D * h + C * c),
                        (y[13] = F * e + I * a + D * l + C * m),
                        (y[14] = F * r + I * n + D * p + C * u),
                        (y[15] = F * i + I * o + D * f + C * d),
                        (this._identityCalculated = !1),
                        this
                      );
                    }
                    function y(t) {
                      var e = t.props;
                      return this.transform(
                        e[0],
                        e[1],
                        e[2],
                        e[3],
                        e[4],
                        e[5],
                        e[6],
                        e[7],
                        e[8],
                        e[9],
                        e[10],
                        e[11],
                        e[12],
                        e[13],
                        e[14],
                        e[15]
                      );
                    }
                    function g() {
                      return (
                        this._identityCalculated ||
                          ((this._identity = !(
                            1 !== this.props[0] ||
                            0 !== this.props[1] ||
                            0 !== this.props[2] ||
                            0 !== this.props[3] ||
                            0 !== this.props[4] ||
                            1 !== this.props[5] ||
                            0 !== this.props[6] ||
                            0 !== this.props[7] ||
                            0 !== this.props[8] ||
                            0 !== this.props[9] ||
                            1 !== this.props[10] ||
                            0 !== this.props[11] ||
                            0 !== this.props[12] ||
                            0 !== this.props[13] ||
                            0 !== this.props[14] ||
                            1 !== this.props[15]
                          )),
                          (this._identityCalculated = !0)),
                        this._identity
                      );
                    }
                    function v(t) {
                      for (var e = 0; e < 16; ) {
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1;
                      }
                      return !0;
                    }
                    function b(t) {
                      var e;
                      for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                      return t;
                    }
                    function P(t) {
                      var e;
                      for (e = 0; e < 16; e += 1) this.props[e] = t[e];
                    }
                    function _(t, e, r) {
                      return {
                        x:
                          t * this.props[0] +
                          e * this.props[4] +
                          r * this.props[8] +
                          this.props[12],
                        y:
                          t * this.props[1] +
                          e * this.props[5] +
                          r * this.props[9] +
                          this.props[13],
                        z:
                          t * this.props[2] +
                          e * this.props[6] +
                          r * this.props[10] +
                          this.props[14],
                      };
                    }
                    function S(t, e, r) {
                      return (
                        t * this.props[0] +
                        e * this.props[4] +
                        r * this.props[8] +
                        this.props[12]
                      );
                    }
                    function E(t, e, r) {
                      return (
                        t * this.props[1] +
                        e * this.props[5] +
                        r * this.props[9] +
                        this.props[13]
                      );
                    }
                    function x(t, e, r) {
                      return (
                        t * this.props[2] +
                        e * this.props[6] +
                        r * this.props[10] +
                        this.props[14]
                      );
                    }
                    function A() {
                      var t =
                          this.props[0] * this.props[5] -
                          this.props[1] * this.props[4],
                        e = this.props[5] / t,
                        r = -this.props[1] / t,
                        i = -this.props[4] / t,
                        s = this.props[0] / t,
                        a =
                          (this.props[4] * this.props[13] -
                            this.props[5] * this.props[12]) /
                          t,
                        n =
                          -(
                            this.props[0] * this.props[13] -
                            this.props[1] * this.props[12]
                          ) / t,
                        o = new Matrix();
                      return (
                        (o.props[0] = e),
                        (o.props[1] = r),
                        (o.props[4] = i),
                        (o.props[5] = s),
                        (o.props[12] = a),
                        (o.props[13] = n),
                        o
                      );
                    }
                    function M(t) {
                      return this.getInverseMatrix().applyToPointArray(
                        t[0],
                        t[1],
                        t[2] || 0
                      );
                    }
                    function T(t) {
                      var e,
                        r = t.length,
                        i = [];
                      for (e = 0; e < r; e += 1) i[e] = M(t[e]);
                      return i;
                    }
                    function k(t, e, r) {
                      var i = createTypedArray("float32", 6);
                      if (this.isIdentity())
                        (i[0] = t[0]),
                          (i[1] = t[1]),
                          (i[2] = e[0]),
                          (i[3] = e[1]),
                          (i[4] = r[0]),
                          (i[5] = r[1]);
                      else {
                        var s = this.props[0],
                          a = this.props[1],
                          n = this.props[4],
                          o = this.props[5],
                          h = this.props[12],
                          l = this.props[13];
                        (i[0] = t[0] * s + t[1] * n + h),
                          (i[1] = t[0] * a + t[1] * o + l),
                          (i[2] = e[0] * s + e[1] * n + h),
                          (i[3] = e[0] * a + e[1] * o + l),
                          (i[4] = r[0] * s + r[1] * n + h),
                          (i[5] = r[0] * a + r[1] * o + l);
                      }
                      return i;
                    }
                    function F(t, e, r) {
                      return this.isIdentity()
                        ? [t, e, r]
                        : [
                            t * this.props[0] +
                              e * this.props[4] +
                              r * this.props[8] +
                              this.props[12],
                            t * this.props[1] +
                              e * this.props[5] +
                              r * this.props[9] +
                              this.props[13],
                            t * this.props[2] +
                              e * this.props[6] +
                              r * this.props[10] +
                              this.props[14],
                          ];
                    }
                    function I(t, e) {
                      if (this.isIdentity()) return t + "," + e;
                      var r = this.props;
                      return (
                        Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
                        "," +
                        Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                      );
                    }
                    function D() {
                      for (var t = 0, e = this.props, r = "matrix3d("; t < 16; )
                        (r += i(1e4 * e[t]) / 1e4),
                          (r += 15 === t ? ")" : ","),
                          (t += 1);
                      return r;
                    }
                    function C(t) {
                      return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                        ? i(1e4 * t) / 1e4
                        : t;
                    }
                    function w() {
                      var t = this.props;
                      return (
                        "matrix(" +
                        C(t[0]) +
                        "," +
                        C(t[1]) +
                        "," +
                        C(t[4]) +
                        "," +
                        C(t[5]) +
                        "," +
                        C(t[12]) +
                        "," +
                        C(t[13]) +
                        ")"
                      );
                    }
                    return function () {
                      (this.reset = s),
                        (this.rotate = a),
                        (this.rotateX = n),
                        (this.rotateY = o),
                        (this.rotateZ = h),
                        (this.skew = p),
                        (this.skewFromAxis = f),
                        (this.shear = l),
                        (this.scale = c),
                        (this.setTransform = m),
                        (this.translate = u),
                        (this.transform = d),
                        (this.multiply = y),
                        (this.applyToPoint = _),
                        (this.applyToX = S),
                        (this.applyToY = E),
                        (this.applyToZ = x),
                        (this.applyToPointArray = F),
                        (this.applyToTriplePoints = k),
                        (this.applyToPointStringified = I),
                        (this.toCSS = D),
                        (this.to2dCSS = w),
                        (this.clone = b),
                        (this.cloneFromProps = P),
                        (this.equals = v),
                        (this.inversePoints = T),
                        (this.inversePoint = M),
                        (this.getInverseMatrix = A),
                        (this._t = this.transform),
                        (this.isIdentity = g),
                        (this._identity = !0),
                        (this._identityCalculated = !1),
                        (this.props = createTypedArray("float32", 16)),
                        this.reset();
                    };
                  })();
                function _typeof$3(t) {
                  return (_typeof$3 =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                var lottie = {};
                function setLocation(t) {
                  setLocationHref(t);
                }
                function searchAnimations() {
                  animationManager.searchAnimations();
                }
                function setSubframeRendering(t) {
                  setSubframeEnabled(t);
                }
                function setPrefix(t) {
                  setIdPrefix(t);
                }
                function loadAnimation(t) {
                  return animationManager.loadAnimation(t);
                }
                function setQuality(t) {
                  if ("string" == typeof t)
                    switch (t) {
                      case "high":
                        setDefaultCurveSegments(200);
                        break;
                      default:
                      case "medium":
                        setDefaultCurveSegments(50);
                        break;
                      case "low":
                        setDefaultCurveSegments(10);
                    }
                  else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
                }
                function inBrowser() {
                  return typeof navigator < "u";
                }
                function installPlugin(t, e) {
                  "expressions" === t && setExpressionsPlugin(e);
                }
                function getFactory(t) {
                  switch (t) {
                    case "propertyFactory":
                      return PropertyFactory;
                    case "shapePropertyFactory":
                      return ShapePropertyFactory;
                    case "matrix":
                      return Matrix;
                    default:
                      return null;
                  }
                }
                function checkReady() {
                  "complete" === document.readyState &&
                    (clearInterval(readyStateCheckInterval),
                    searchAnimations());
                }
                function getQueryVariable(t) {
                  for (
                    var e = queryString.split("&"), r = 0;
                    r < e.length;
                    r += 1
                  ) {
                    var i = e[r].split("=");
                    if (decodeURIComponent(i[0]) == t)
                      return decodeURIComponent(i[1]);
                  }
                  return null;
                }
                (lottie.play = animationManager.play),
                  (lottie.pause = animationManager.pause),
                  (lottie.setLocationHref = setLocation),
                  (lottie.togglePause = animationManager.togglePause),
                  (lottie.setSpeed = animationManager.setSpeed),
                  (lottie.setDirection = animationManager.setDirection),
                  (lottie.stop = animationManager.stop),
                  (lottie.searchAnimations = searchAnimations),
                  (lottie.registerAnimation =
                    animationManager.registerAnimation),
                  (lottie.loadAnimation = loadAnimation),
                  (lottie.setSubframeRendering = setSubframeRendering),
                  (lottie.resize = animationManager.resize),
                  (lottie.goToAndStop = animationManager.goToAndStop),
                  (lottie.destroy = animationManager.destroy),
                  (lottie.setQuality = setQuality),
                  (lottie.inBrowser = inBrowser),
                  (lottie.installPlugin = installPlugin),
                  (lottie.freeze = animationManager.freeze),
                  (lottie.unfreeze = animationManager.unfreeze),
                  (lottie.setVolume = animationManager.setVolume),
                  (lottie.mute = animationManager.mute),
                  (lottie.unmute = animationManager.unmute),
                  (lottie.getRegisteredAnimations =
                    animationManager.getRegisteredAnimations),
                  (lottie.useWebWorker = setWebWorker),
                  (lottie.setIDPrefix = setPrefix),
                  (lottie.__getFactory = getFactory),
                  (lottie.version = "5.12.2");
                var queryString = "",
                  scripts = document.getElementsByTagName("script"),
                  index = scripts.length - 1,
                  myScript = scripts[index] || { src: "" };
                (queryString = myScript.src
                  ? myScript.src.replace(/^[^\?]+\??/, "")
                  : ""),
                  getQueryVariable("renderer");
                var readyStateCheckInterval = setInterval(checkReady, 100);
                try {
                  !(
                    "object" ===
                      (typeof exports > "u"
                        ? "undefined"
                        : _typeof$3(exports)) && typeof module < "u"
                  ) &&
                    ("function" != typeof define || !define.amd) &&
                    (window.bodymovin = lottie);
                } catch (t) {}
                var ShapeModifiers = (function () {
                  var t = {},
                    e = {};
                  return (
                    (t.registerModifier = function (t, r) {
                      e[t] || (e[t] = r);
                    }),
                    (t.getModifier = function (t, r, i) {
                      return new e[t](r, i);
                    }),
                    t
                  );
                })();
                function ShapeModifier() {}
                function TrimModifier() {}
                function PuckerAndBloatModifier() {}
                (ShapeModifier.prototype.initModifierProperties =
                  function () {}),
                  (ShapeModifier.prototype.addShapeToModifier = function () {}),
                  (ShapeModifier.prototype.addShape = function (t) {
                    if (!this.closed) {
                      t.sh.container.addDynamicProperty(t.sh);
                      var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection:
                          shapeCollectionPool.newShapeCollection(),
                      };
                      this.shapes.push(e),
                        this.addShapeToModifier(e),
                        this._isAnimated && t.setAsAnimated();
                    }
                  }),
                  (ShapeModifier.prototype.init = function (t, e) {
                    (this.shapes = []),
                      (this.elem = t),
                      this.initDynamicPropertyContainer(t),
                      this.initModifierProperties(t, e),
                      (this.frameId = initialDefaultFrame),
                      (this.closed = !1),
                      (this.k = !1),
                      this.dynamicProperties.length
                        ? (this.k = !0)
                        : this.getValue(!0);
                  }),
                  (ShapeModifier.prototype.processKeys = function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties());
                  }),
                  extendPrototype([DynamicPropertyContainer], ShapeModifier),
                  extendPrototype([ShapeModifier], TrimModifier),
                  (TrimModifier.prototype.initModifierProperties = function (
                    t,
                    e
                  ) {
                    (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
                      (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
                      (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
                      (this.sValue = 0),
                      (this.eValue = 0),
                      (this.getValue = this.processKeys),
                      (this.m = e.m),
                      (this._isAnimated =
                        !!this.s.effectsSequence.length ||
                        !!this.e.effectsSequence.length ||
                        !!this.o.effectsSequence.length);
                  }),
                  (TrimModifier.prototype.addShapeToModifier = function (t) {
                    t.pathsData = [];
                  }),
                  (TrimModifier.prototype.calculateShapeEdges = function (
                    t,
                    e,
                    r,
                    i,
                    s
                  ) {
                    var a = [];
                    e <= 1
                      ? a.push({ s: t, e: e })
                      : t >= 1
                      ? a.push({ s: t - 1, e: e - 1 })
                      : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
                    var n,
                      o,
                      h = [],
                      l = a.length;
                    for (n = 0; n < l; n += 1) {
                      var p, f;
                      (o = a[n]).e * s < i ||
                        o.s * s > i + r ||
                        ((p = o.s * s <= i ? 0 : (o.s * s - i) / r),
                        (f = o.e * s >= i + r ? 1 : (o.e * s - i) / r),
                        h.push([p, f]));
                    }
                    return h.length || h.push([0, 0]), h;
                  }),
                  (TrimModifier.prototype.releasePathsData = function (t) {
                    var e,
                      r = t.length;
                    for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
                    return (t.length = 0), t;
                  }),
                  (TrimModifier.prototype.processShapes = function (t) {
                    var e, r;
                    if (this._mdf || t) {
                      var i = (this.o.v % 360) / 360;
                      if (
                        (i < 0 && (i += 1),
                        (e =
                          this.s.v > 1
                            ? 1 + i
                            : this.s.v < 0
                            ? 0 + i
                            : this.s.v + i) >
                          (r =
                            this.e.v > 1
                              ? 1 + i
                              : this.e.v < 0
                              ? 0 + i
                              : this.e.v + i))
                      ) {
                        var s = e;
                        (e = r), (r = s);
                      }
                      (e = 1e-4 * Math.round(1e4 * e)),
                        (r = 1e-4 * Math.round(1e4 * r)),
                        (this.sValue = e),
                        (this.eValue = r);
                    } else (e = this.sValue), (r = this.eValue);
                    var a,
                      n,
                      o,
                      h,
                      l,
                      p,
                      f,
                      c = this.shapes.length,
                      m = 0;
                    if (r === e)
                      for (n = 0; n < c; n += 1)
                        this.shapes[n].localShapeCollection.releaseShapes(),
                          (this.shapes[n].shape._mdf = !0),
                          (this.shapes[n].shape.paths =
                            this.shapes[n].localShapeCollection),
                          this._mdf && (this.shapes[n].pathsData.length = 0);
                    else if ((1 === r && 0 === e) || (0 === r && 1 === e)) {
                      if (this._mdf)
                        for (n = 0; n < c; n += 1)
                          (this.shapes[n].pathsData.length = 0),
                            (this.shapes[n].shape._mdf = !0);
                    } else {
                      var u,
                        d,
                        y = [];
                      for (n = 0; n < c; n += 1)
                        if (
                          (u = this.shapes[n]).shape._mdf ||
                          this._mdf ||
                          t ||
                          2 === this.m
                        ) {
                          if (
                            ((h = (a = u.shape.paths)._length),
                            (f = 0),
                            !u.shape._mdf && u.pathsData.length)
                          )
                            f = u.totalShapeLength;
                          else {
                            for (
                              l = this.releasePathsData(u.pathsData), o = 0;
                              o < h;
                              o += 1
                            )
                              (p = bez.getSegmentsLength(a.shapes[o])),
                                l.push(p),
                                (f += p.totalLength);
                            (u.totalShapeLength = f), (u.pathsData = l);
                          }
                          (m += f), (u.shape._mdf = !0);
                        } else u.shape.paths = u.localShapeCollection;
                      var g,
                        v = e,
                        b = r,
                        P = 0;
                      for (n = c - 1; n >= 0; n -= 1)
                        if ((u = this.shapes[n]).shape._mdf) {
                          for (
                            (d = u.localShapeCollection).releaseShapes(),
                              2 === this.m && c > 1
                                ? ((g = this.calculateShapeEdges(
                                    e,
                                    r,
                                    u.totalShapeLength,
                                    P,
                                    m
                                  )),
                                  (P += u.totalShapeLength))
                                : (g = [[v, b]]),
                              h = g.length,
                              o = 0;
                            o < h;
                            o += 1
                          ) {
                            (v = g[o][0]),
                              (b = g[o][1]),
                              (y.length = 0),
                              b <= 1
                                ? y.push({
                                    s: u.totalShapeLength * v,
                                    e: u.totalShapeLength * b,
                                  })
                                : v >= 1
                                ? y.push({
                                    s: u.totalShapeLength * (v - 1),
                                    e: u.totalShapeLength * (b - 1),
                                  })
                                : (y.push({
                                    s: u.totalShapeLength * v,
                                    e: u.totalShapeLength,
                                  }),
                                  y.push({
                                    s: 0,
                                    e: u.totalShapeLength * (b - 1),
                                  }));
                            var _ = this.addShapes(u, y[0]);
                            if (y[0].s !== y[0].e) {
                              if (y.length > 1)
                                if (
                                  u.shape.paths.shapes[
                                    u.shape.paths._length - 1
                                  ].c
                                ) {
                                  var S = _.pop();
                                  this.addPaths(_, d),
                                    (_ = this.addShapes(u, y[1], S));
                                } else
                                  this.addPaths(_, d),
                                    (_ = this.addShapes(u, y[1]));
                              this.addPaths(_, d);
                            }
                          }
                          u.shape.paths = d;
                        }
                    }
                  }),
                  (TrimModifier.prototype.addPaths = function (t, e) {
                    var r,
                      i = t.length;
                    for (r = 0; r < i; r += 1) e.addShape(t[r]);
                  }),
                  (TrimModifier.prototype.addSegment = function (
                    t,
                    e,
                    r,
                    i,
                    s,
                    a,
                    n
                  ) {
                    s.setXYAt(e[0], e[1], "o", a),
                      s.setXYAt(r[0], r[1], "i", a + 1),
                      n && s.setXYAt(t[0], t[1], "v", a),
                      s.setXYAt(i[0], i[1], "v", a + 1);
                  }),
                  (TrimModifier.prototype.addSegmentFromArray = function (
                    t,
                    e,
                    r,
                    i
                  ) {
                    e.setXYAt(t[1], t[5], "o", r),
                      e.setXYAt(t[2], t[6], "i", r + 1),
                      i && e.setXYAt(t[0], t[4], "v", r),
                      e.setXYAt(t[3], t[7], "v", r + 1);
                  }),
                  (TrimModifier.prototype.addShapes = function (t, e, r) {
                    var i,
                      s,
                      a,
                      n,
                      o,
                      h,
                      l,
                      p,
                      f = t.pathsData,
                      c = t.shape.paths.shapes,
                      m = t.shape.paths._length,
                      u = 0,
                      d = [],
                      y = !0;
                    for (
                      r
                        ? ((o = r._length), (p = r._length))
                        : ((r = shapePool.newElement()), (o = 0), (p = 0)),
                        d.push(r),
                        i = 0;
                      i < m;
                      i += 1
                    ) {
                      for (
                        h = f[i].lengths,
                          r.c = c[i].c,
                          a = c[i].c ? h.length : h.length + 1,
                          s = 1;
                        s < a;
                        s += 1
                      )
                        if (u + (n = h[s - 1]).addedLength < e.s)
                          (u += n.addedLength), (r.c = !1);
                        else {
                          if (u > e.e) {
                            r.c = !1;
                            break;
                          }
                          e.s <= u && e.e >= u + n.addedLength
                            ? (this.addSegment(
                                c[i].v[s - 1],
                                c[i].o[s - 1],
                                c[i].i[s],
                                c[i].v[s],
                                r,
                                o,
                                y
                              ),
                              (y = !1))
                            : ((l = bez.getNewSegment(
                                c[i].v[s - 1],
                                c[i].v[s],
                                c[i].o[s - 1],
                                c[i].i[s],
                                (e.s - u) / n.addedLength,
                                (e.e - u) / n.addedLength,
                                h[s - 1]
                              )),
                              this.addSegmentFromArray(l, r, o, y),
                              (y = !1),
                              (r.c = !1)),
                            (u += n.addedLength),
                            (o += 1);
                        }
                      if (c[i].c && h.length) {
                        if (((n = h[s - 1]), u <= e.e)) {
                          var g = h[s - 1].addedLength;
                          e.s <= u && e.e >= u + g
                            ? (this.addSegment(
                                c[i].v[s - 1],
                                c[i].o[s - 1],
                                c[i].i[0],
                                c[i].v[0],
                                r,
                                o,
                                y
                              ),
                              (y = !1))
                            : ((l = bez.getNewSegment(
                                c[i].v[s - 1],
                                c[i].v[0],
                                c[i].o[s - 1],
                                c[i].i[0],
                                (e.s - u) / g,
                                (e.e - u) / g,
                                h[s - 1]
                              )),
                              this.addSegmentFromArray(l, r, o, y),
                              (y = !1),
                              (r.c = !1));
                        } else r.c = !1;
                        (u += n.addedLength), (o += 1);
                      }
                      if (
                        (r._length &&
                          (r.setXYAt(r.v[p][0], r.v[p][1], "i", p),
                          r.setXYAt(
                            r.v[r._length - 1][0],
                            r.v[r._length - 1][1],
                            "o",
                            r._length - 1
                          )),
                        u > e.e)
                      )
                        break;
                      i < m - 1 &&
                        ((r = shapePool.newElement()),
                        (y = !0),
                        d.push(r),
                        (o = 0));
                    }
                    return d;
                  }),
                  extendPrototype([ShapeModifier], PuckerAndBloatModifier),
                  (PuckerAndBloatModifier.prototype.initModifierProperties =
                    function (t, e) {
                      (this.getValue = this.processKeys),
                        (this.amount = PropertyFactory.getProp(
                          t,
                          e.a,
                          0,
                          null,
                          this
                        )),
                        (this._isAnimated =
                          !!this.amount.effectsSequence.length);
                    }),
                  (PuckerAndBloatModifier.prototype.processPath = function (
                    t,
                    e
                  ) {
                    var r = e / 100,
                      i = [0, 0],
                      s = t._length,
                      a = 0;
                    for (a = 0; a < s; a += 1)
                      (i[0] += t.v[a][0]), (i[1] += t.v[a][1]);
                    (i[0] /= s), (i[1] /= s);
                    var n,
                      o,
                      h,
                      l,
                      p,
                      f,
                      c = shapePool.newElement();
                    for (c.c = t.c, a = 0; a < s; a += 1)
                      (n = t.v[a][0] + (i[0] - t.v[a][0]) * r),
                        (o = t.v[a][1] + (i[1] - t.v[a][1]) * r),
                        (h = t.o[a][0] + (i[0] - t.o[a][0]) * -r),
                        (l = t.o[a][1] + (i[1] - t.o[a][1]) * -r),
                        (p = t.i[a][0] + (i[0] - t.i[a][0]) * -r),
                        (f = t.i[a][1] + (i[1] - t.i[a][1]) * -r),
                        c.setTripleAt(n, o, h, l, p, f, a);
                    return c;
                  }),
                  (PuckerAndBloatModifier.prototype.processShapes = function (
                    t
                  ) {
                    var e,
                      r,
                      i,
                      s,
                      a,
                      n,
                      o = this.shapes.length,
                      h = this.amount.v;
                    if (0 !== h)
                      for (r = 0; r < o; r += 1) {
                        if (
                          ((n = (a = this.shapes[r]).localShapeCollection),
                          a.shape._mdf || this._mdf || t)
                        )
                          for (
                            n.releaseShapes(),
                              a.shape._mdf = !0,
                              e = a.shape.paths.shapes,
                              s = a.shape.paths._length,
                              i = 0;
                            i < s;
                            i += 1
                          )
                            n.addShape(this.processPath(e[i], h));
                        a.shape.paths = a.localShapeCollection;
                      }
                    this.dynamicProperties.length || (this._mdf = !1);
                  });
                var TransformPropertyFactory = (function () {
                  var t = [0, 0];
                  function e(t, e, r) {
                    if (
                      ((this.elem = t),
                      (this.frameId = -1),
                      (this.propType = "transform"),
                      (this.data = e),
                      (this.v = new Matrix()),
                      (this.pre = new Matrix()),
                      (this.appliedTransformations = 0),
                      this.initDynamicPropertyContainer(r || t),
                      e.p && e.p.s
                        ? ((this.px = PropertyFactory.getProp(
                            t,
                            e.p.x,
                            0,
                            0,
                            this
                          )),
                          (this.py = PropertyFactory.getProp(
                            t,
                            e.p.y,
                            0,
                            0,
                            this
                          )),
                          e.p.z &&
                            (this.pz = PropertyFactory.getProp(
                              t,
                              e.p.z,
                              0,
                              0,
                              this
                            )))
                        : (this.p = PropertyFactory.getProp(
                            t,
                            e.p || { k: [0, 0, 0] },
                            1,
                            0,
                            this
                          )),
                      e.rx)
                    ) {
                      if (
                        ((this.rx = PropertyFactory.getProp(
                          t,
                          e.rx,
                          0,
                          degToRads,
                          this
                        )),
                        (this.ry = PropertyFactory.getProp(
                          t,
                          e.ry,
                          0,
                          degToRads,
                          this
                        )),
                        (this.rz = PropertyFactory.getProp(
                          t,
                          e.rz,
                          0,
                          degToRads,
                          this
                        )),
                        e.or.k[0].ti)
                      ) {
                        var i,
                          s = e.or.k.length;
                        for (i = 0; i < s; i += 1)
                          (e.or.k[i].to = null), (e.or.k[i].ti = null);
                      }
                      (this.or = PropertyFactory.getProp(
                        t,
                        e.or,
                        1,
                        degToRads,
                        this
                      )),
                        (this.or.sh = !0);
                    } else
                      this.r = PropertyFactory.getProp(
                        t,
                        e.r || { k: 0 },
                        0,
                        degToRads,
                        this
                      );
                    e.sk &&
                      ((this.sk = PropertyFactory.getProp(
                        t,
                        e.sk,
                        0,
                        degToRads,
                        this
                      )),
                      (this.sa = PropertyFactory.getProp(
                        t,
                        e.sa,
                        0,
                        degToRads,
                        this
                      ))),
                      (this.a = PropertyFactory.getProp(
                        t,
                        e.a || { k: [0, 0, 0] },
                        1,
                        0,
                        this
                      )),
                      (this.s = PropertyFactory.getProp(
                        t,
                        e.s || { k: [100, 100, 100] },
                        1,
                        0.01,
                        this
                      )),
                      e.o
                        ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                        : (this.o = { _mdf: !1, v: 1 }),
                      (this._isDirty = !0),
                      this.dynamicProperties.length || this.getValue(!0);
                  }
                  return (
                    (e.prototype = {
                      applyToMatrix: function (t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(),
                          (this._mdf = this._mdf || e),
                          this.a &&
                            t.translate(
                              -this.a.v[0],
                              -this.a.v[1],
                              this.a.v[2]
                            ),
                          this.s &&
                            t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                          this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                          this.r
                            ? t.rotate(-this.r.v)
                            : t
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                          this.data.p.s
                            ? this.data.p.z
                              ? t.translate(this.px.v, this.py.v, -this.pz.v)
                              : t.translate(this.px.v, this.py.v, 0)
                            : t.translate(
                                this.p.v[0],
                                this.p.v[1],
                                -this.p.v[2]
                              );
                      },
                      getValue: function (e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                          if (
                            (this._isDirty &&
                              (this.precalculateMatrix(), (this._isDirty = !1)),
                            this.iterateDynamicProperties(),
                            this._mdf || e)
                          ) {
                            var r;
                            if (
                              (this.v.cloneFromProps(this.pre.props),
                              this.appliedTransformations < 1 &&
                                this.v.translate(
                                  -this.a.v[0],
                                  -this.a.v[1],
                                  this.a.v[2]
                                ),
                              this.appliedTransformations < 2 &&
                                this.v.scale(
                                  this.s.v[0],
                                  this.s.v[1],
                                  this.s.v[2]
                                ),
                              this.sk &&
                                this.appliedTransformations < 3 &&
                                this.v.skewFromAxis(-this.sk.v, this.sa.v),
                              this.r && this.appliedTransformations < 4
                                ? this.v.rotate(-this.r.v)
                                : !this.r &&
                                  this.appliedTransformations < 4 &&
                                  this.v
                                    .rotateZ(-this.rz.v)
                                    .rotateY(this.ry.v)
                                    .rotateX(this.rx.v)
                                    .rotateZ(-this.or.v[2])
                                    .rotateY(this.or.v[1])
                                    .rotateX(this.or.v[0]),
                              this.autoOriented)
                            ) {
                              var i, s;
                              if (
                                ((r = this.elem.globalData.frameRate),
                                this.p &&
                                  this.p.keyframes &&
                                  this.p.getValueAtTime)
                              )
                                this.p._caching.lastFrame + this.p.offsetTime <=
                                this.p.keyframes[0].t
                                  ? ((i = this.p.getValueAtTime(
                                      (this.p.keyframes[0].t + 0.01) / r,
                                      0
                                    )),
                                    (s = this.p.getValueAtTime(
                                      this.p.keyframes[0].t / r,
                                      0
                                    )))
                                  : this.p._caching.lastFrame +
                                      this.p.offsetTime >=
                                    this.p.keyframes[
                                      this.p.keyframes.length - 1
                                    ].t
                                  ? ((i = this.p.getValueAtTime(
                                      this.p.keyframes[
                                        this.p.keyframes.length - 1
                                      ].t / r,
                                      0
                                    )),
                                    (s = this.p.getValueAtTime(
                                      (this.p.keyframes[
                                        this.p.keyframes.length - 1
                                      ].t -
                                        0.05) /
                                        r,
                                      0
                                    )))
                                  : ((i = this.p.pv),
                                    (s = this.p.getValueAtTime(
                                      (this.p._caching.lastFrame +
                                        this.p.offsetTime -
                                        0.01) /
                                        r,
                                      this.p.offsetTime
                                    )));
                              else if (
                                this.px &&
                                this.px.keyframes &&
                                this.py.keyframes &&
                                this.px.getValueAtTime &&
                                this.py.getValueAtTime
                              ) {
                                (i = []), (s = []);
                                var a = this.px,
                                  n = this.py;
                                a._caching.lastFrame + a.offsetTime <=
                                a.keyframes[0].t
                                  ? ((i[0] = a.getValueAtTime(
                                      (a.keyframes[0].t + 0.01) / r,
                                      0
                                    )),
                                    (i[1] = n.getValueAtTime(
                                      (n.keyframes[0].t + 0.01) / r,
                                      0
                                    )),
                                    (s[0] = a.getValueAtTime(
                                      a.keyframes[0].t / r,
                                      0
                                    )),
                                    (s[1] = n.getValueAtTime(
                                      n.keyframes[0].t / r,
                                      0
                                    )))
                                  : a._caching.lastFrame + a.offsetTime >=
                                    a.keyframes[a.keyframes.length - 1].t
                                  ? ((i[0] = a.getValueAtTime(
                                      a.keyframes[a.keyframes.length - 1].t / r,
                                      0
                                    )),
                                    (i[1] = n.getValueAtTime(
                                      n.keyframes[n.keyframes.length - 1].t / r,
                                      0
                                    )),
                                    (s[0] = a.getValueAtTime(
                                      (a.keyframes[a.keyframes.length - 1].t -
                                        0.01) /
                                        r,
                                      0
                                    )),
                                    (s[1] = n.getValueAtTime(
                                      (n.keyframes[n.keyframes.length - 1].t -
                                        0.01) /
                                        r,
                                      0
                                    )))
                                  : ((i = [a.pv, n.pv]),
                                    (s[0] = a.getValueAtTime(
                                      (a._caching.lastFrame +
                                        a.offsetTime -
                                        0.01) /
                                        r,
                                      a.offsetTime
                                    )),
                                    (s[1] = n.getValueAtTime(
                                      (n._caching.lastFrame +
                                        n.offsetTime -
                                        0.01) /
                                        r,
                                      n.offsetTime
                                    )));
                              } else i = s = t;
                              this.v.rotate(
                                -Math.atan2(i[1] - s[1], i[0] - s[0])
                              );
                            }
                            this.data.p && this.data.p.s
                              ? this.data.p.z
                                ? this.v.translate(
                                    this.px.v,
                                    this.py.v,
                                    -this.pz.v
                                  )
                                : this.v.translate(this.px.v, this.py.v, 0)
                              : this.v.translate(
                                  this.p.v[0],
                                  this.p.v[1],
                                  -this.p.v[2]
                                );
                          }
                          this.frameId = this.elem.globalData.frameId;
                        }
                      },
                      precalculateMatrix: function () {
                        if (
                          ((this.appliedTransformations = 0),
                          this.pre.reset(),
                          !this.a.effectsSequence.length &&
                            (this.pre.translate(
                              -this.a.v[0],
                              -this.a.v[1],
                              this.a.v[2]
                            ),
                            (this.appliedTransformations = 1),
                            !this.s.effectsSequence.length))
                        ) {
                          if (
                            (this.pre.scale(
                              this.s.v[0],
                              this.s.v[1],
                              this.s.v[2]
                            ),
                            (this.appliedTransformations = 2),
                            this.sk)
                          ) {
                            if (
                              this.sk.effectsSequence.length ||
                              this.sa.effectsSequence.length
                            )
                              return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                              (this.appliedTransformations = 3);
                          }
                          this.r
                            ? this.r.effectsSequence.length ||
                              (this.pre.rotate(-this.r.v),
                              (this.appliedTransformations = 4))
                            : !this.rz.effectsSequence.length &&
                              !this.ry.effectsSequence.length &&
                              !this.rx.effectsSequence.length &&
                              !this.or.effectsSequence.length &&
                              (this.pre
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                              (this.appliedTransformations = 4));
                        }
                      },
                      autoOrient: function () {},
                    }),
                    extendPrototype([DynamicPropertyContainer], e),
                    (e.prototype.addDynamicProperty = function (t) {
                      this._addDynamicProperty(t),
                        this.elem.addDynamicProperty(t),
                        (this._isDirty = !0);
                    }),
                    (e.prototype._addDynamicProperty =
                      DynamicPropertyContainer.prototype.addDynamicProperty),
                    {
                      getTransformProperty: function (t, r, i) {
                        return new e(t, r, i);
                      },
                    }
                  );
                })();
                function RepeaterModifier() {}
                function RoundCornersModifier() {}
                function floatEqual(t, e) {
                  return (
                    1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                  );
                }
                function floatZero(t) {
                  return Math.abs(t) <= 1e-5;
                }
                function lerp(t, e, r) {
                  return t * (1 - r) + e * r;
                }
                function lerpPoint(t, e, r) {
                  return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
                }
                function quadRoots(t, e, r) {
                  if (0 === t) return [];
                  var i = e * e - 4 * t * r;
                  if (i < 0) return [];
                  var s = -e / (2 * t);
                  if (0 === i) return [s];
                  var a = Math.sqrt(i) / (2 * t);
                  return [s - a, s + a];
                }
                function polynomialCoefficients(t, e, r, i) {
                  return [
                    3 * e - t - 3 * r + i,
                    3 * t - 6 * e + 3 * r,
                    -3 * t + 3 * e,
                    t,
                  ];
                }
                function singlePoint(t) {
                  return new PolynomialBezier(t, t, t, t, !1);
                }
                function PolynomialBezier(t, e, r, i, s) {
                  s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)),
                    s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
                  var a = polynomialCoefficients(t[0], e[0], r[0], i[0]),
                    n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
                  (this.a = [a[0], n[0]]),
                    (this.b = [a[1], n[1]]),
                    (this.c = [a[2], n[2]]),
                    (this.d = [a[3], n[3]]),
                    (this.points = [t, e, r, i]);
                }
                function extrema(t, e) {
                  var r = t.points[0][e],
                    i = t.points[t.points.length - 1][e];
                  if (r > i) {
                    var s = i;
                    (i = r), (r = s);
                  }
                  for (
                    var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0;
                    n < a.length;
                    n += 1
                  )
                    if (a[n] > 0 && a[n] < 1) {
                      var o = t.point(a[n])[e];
                      o < r ? (r = o) : o > i && (i = o);
                    }
                  return { min: r, max: i };
                }
                function intersectData(t, e, r) {
                  var i = t.boundingBox();
                  return {
                    cx: i.cx,
                    cy: i.cy,
                    width: i.width,
                    height: i.height,
                    bez: t,
                    t: (e + r) / 2,
                    t1: e,
                    t2: r,
                  };
                }
                function splitData(t) {
                  var e = t.bez.split(0.5);
                  return [
                    intersectData(e[0], t.t1, t.t),
                    intersectData(e[1], t.t, t.t2),
                  ];
                }
                function boxIntersect(t, e) {
                  return (
                    2 * Math.abs(t.cx - e.cx) < t.width + e.width &&
                    2 * Math.abs(t.cy - e.cy) < t.height + e.height
                  );
                }
                function intersectsImpl(t, e, r, i, s, a) {
                  if (boxIntersect(t, e)) {
                    if (
                      r >= a ||
                      (t.width <= i &&
                        t.height <= i &&
                        e.width <= i &&
                        e.height <= i)
                    )
                      return void s.push([t.t, e.t]);
                    var n = splitData(t),
                      o = splitData(e);
                    intersectsImpl(n[0], o[0], r + 1, i, s, a),
                      intersectsImpl(n[0], o[1], r + 1, i, s, a),
                      intersectsImpl(n[1], o[0], r + 1, i, s, a),
                      intersectsImpl(n[1], o[1], r + 1, i, s, a);
                  }
                }
                function crossProduct(t, e) {
                  return [
                    t[1] * e[2] - t[2] * e[1],
                    t[2] * e[0] - t[0] * e[2],
                    t[0] * e[1] - t[1] * e[0],
                  ];
                }
                function lineIntersection(t, e, r, i) {
                  var s = [t[0], t[1], 1],
                    a = [e[0], e[1], 1],
                    n = [r[0], r[1], 1],
                    o = [i[0], i[1], 1],
                    h = crossProduct(crossProduct(s, a), crossProduct(n, o));
                  return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
                }
                function polarOffset(t, e, r) {
                  return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
                }
                function pointDistance(t, e) {
                  return Math.hypot(t[0] - e[0], t[1] - e[1]);
                }
                function pointEqual(t, e) {
                  return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
                }
                function ZigZagModifier() {}
                function setPoint(t, e, r, i, s, a, n) {
                  var o = r - Math.PI / 2,
                    h = r + Math.PI / 2,
                    l = e[0] + Math.cos(r) * i * s,
                    p = e[1] - Math.sin(r) * i * s;
                  t.setTripleAt(
                    l,
                    p,
                    l + Math.cos(o) * a,
                    p - Math.sin(o) * a,
                    l + Math.cos(h) * n,
                    p - Math.sin(h) * n,
                    t.length()
                  );
                }
                function getPerpendicularVector(t, e) {
                  var r = [e[0] - t[0], e[1] - t[1]],
                    i = 0.5 * -Math.PI;
                  return [
                    Math.cos(i) * r[0] - Math.sin(i) * r[1],
                    Math.sin(i) * r[0] + Math.cos(i) * r[1],
                  ];
                }
                function getProjectingAngle(t, e) {
                  var r = 0 === e ? t.length() - 1 : e - 1,
                    i = (e + 1) % t.length(),
                    s = getPerpendicularVector(t.v[r], t.v[i]);
                  return Math.atan2(0, 1) - Math.atan2(s[1], s[0]);
                }
                function zigZagCorner(t, e, r, i, s, a, n) {
                  var o = getProjectingAngle(e, r),
                    h = e.v[r % e._length],
                    l = e.v[0 === r ? e._length - 1 : r - 1],
                    p = e.v[(r + 1) % e._length],
                    f =
                      2 === a
                        ? Math.sqrt(
                            Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)
                          )
                        : 0,
                    c =
                      2 === a
                        ? Math.sqrt(
                            Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)
                          )
                        : 0;
                  setPoint(
                    t,
                    e.v[r % e._length],
                    o,
                    n,
                    i,
                    c / (2 * (s + 1)),
                    f / (2 * (s + 1))
                  );
                }
                function zigZagSegment(t, e, r, i, s, a) {
                  for (var n = 0; n < i; n += 1) {
                    var o = (n + 1) / (i + 1),
                      h =
                        2 === s
                          ? Math.sqrt(
                              Math.pow(e.points[3][0] - e.points[0][0], 2) +
                                Math.pow(e.points[3][1] - e.points[0][1], 2)
                            )
                          : 0,
                      l = e.normalAngle(o);
                    setPoint(
                      t,
                      e.point(o),
                      l,
                      a,
                      r,
                      h / (2 * (i + 1)),
                      h / (2 * (i + 1))
                    ),
                      (a = -a);
                  }
                  return a;
                }
                function linearOffset(t, e, r) {
                  var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
                  return [polarOffset(t, i, r), polarOffset(e, i, r)];
                }
                function offsetSegment(t, e) {
                  var r, i, s, a, n, o, h;
                  (r = (h = linearOffset(t.points[0], t.points[1], e))[0]),
                    (i = h[1]),
                    (s = (h = linearOffset(t.points[1], t.points[2], e))[0]),
                    (a = h[1]),
                    (n = (h = linearOffset(t.points[2], t.points[3], e))[0]),
                    (o = h[1]);
                  var l = lineIntersection(r, i, s, a);
                  null === l && (l = i);
                  var p = lineIntersection(n, o, s, a);
                  return (
                    null === p && (p = n), new PolynomialBezier(r, l, p, o)
                  );
                }
                function joinLines(t, e, r, i, s) {
                  var a = e.points[3],
                    n = r.points[0];
                  if (3 === i || pointEqual(a, n)) return a;
                  if (2 === i) {
                    var o = -e.tangentAngle(1),
                      h = -r.tangentAngle(0) + Math.PI,
                      l = lineIntersection(
                        a,
                        polarOffset(a, o + Math.PI / 2, 100),
                        n,
                        polarOffset(n, o + Math.PI / 2, 100)
                      ),
                      p = l ? pointDistance(l, a) : pointDistance(a, n) / 2,
                      f = polarOffset(a, o, 2 * p * roundCorner);
                    return (
                      t.setXYAt(f[0], f[1], "o", t.length() - 1),
                      (f = polarOffset(n, h, 2 * p * roundCorner)),
                      t.setTripleAt(
                        n[0],
                        n[1],
                        n[0],
                        n[1],
                        f[0],
                        f[1],
                        t.length()
                      ),
                      n
                    );
                  }
                  var c = lineIntersection(
                    pointEqual(a, e.points[2]) ? e.points[0] : e.points[2],
                    a,
                    n,
                    pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]
                  );
                  return c && pointDistance(c, a) < s
                    ? (t.setTripleAt(
                        c[0],
                        c[1],
                        c[0],
                        c[1],
                        c[0],
                        c[1],
                        t.length()
                      ),
                      c)
                    : a;
                }
                function getIntersection(t, e) {
                  var r = t.intersections(e);
                  return (
                    r.length && floatEqual(r[0][0], 1) && r.shift(),
                    r.length ? r[0] : null
                  );
                }
                function pruneSegmentIntersection(t, e) {
                  var r = t.slice(),
                    i = e.slice(),
                    s = getIntersection(t[t.length - 1], e[0]);
                  return (
                    s &&
                      ((r[t.length - 1] = t[t.length - 1].split(s[0])[0]),
                      (i[0] = e[0].split(s[1])[1])),
                    t.length > 1 &&
                    e.length > 1 &&
                    (s = getIntersection(t[0], e[e.length - 1]))
                      ? [
                          [t[0].split(s[0])[0]],
                          [e[e.length - 1].split(s[1])[1]],
                        ]
                      : [r, i]
                  );
                }
                function pruneIntersections(t) {
                  for (var e, r = 1; r < t.length; r += 1)
                    (e = pruneSegmentIntersection(t[r - 1], t[r])),
                      (t[r - 1] = e[0]),
                      (t[r] = e[1]);
                  return (
                    t.length > 1 &&
                      ((e = pruneSegmentIntersection(t[t.length - 1], t[0])),
                      (t[t.length - 1] = e[0]),
                      (t[0] = e[1])),
                    t
                  );
                }
                function offsetSegmentSplit(t, e) {
                  var r,
                    i,
                    s,
                    a,
                    n = t.inflectionPoints();
                  if (0 === n.length) return [offsetSegment(t, e)];
                  if (1 === n.length || floatEqual(n[1], 1))
                    return (
                      (r = (s = t.split(n[0]))[0]),
                      (i = s[1]),
                      [offsetSegment(r, e), offsetSegment(i, e)]
                    );
                  r = (s = t.split(n[0]))[0];
                  var o = (n[1] - n[0]) / (1 - n[0]);
                  return (
                    (a = (s = s[1].split(o))[0]),
                    (i = s[1]),
                    [
                      offsetSegment(r, e),
                      offsetSegment(a, e),
                      offsetSegment(i, e),
                    ]
                  );
                }
                function OffsetPathModifier() {}
                function getFontProperties(t) {
                  for (
                    var e = t.fStyle ? t.fStyle.split(" ") : [],
                      r = "normal",
                      i = "normal",
                      s = e.length,
                      a = 0;
                    a < s;
                    a += 1
                  )
                    switch (e[a].toLowerCase()) {
                      case "italic":
                        i = "italic";
                        break;
                      case "bold":
                        r = "700";
                        break;
                      case "black":
                        r = "900";
                        break;
                      case "medium":
                        r = "500";
                        break;
                      case "regular":
                      case "normal":
                        r = "400";
                        break;
                      case "light":
                      case "thin":
                        r = "200";
                    }
                  return { style: i, weight: t.fWeight || r };
                }
                extendPrototype([ShapeModifier], RepeaterModifier),
                  (RepeaterModifier.prototype.initModifierProperties =
                    function (t, e) {
                      (this.getValue = this.processKeys),
                        (this.c = PropertyFactory.getProp(
                          t,
                          e.c,
                          0,
                          null,
                          this
                        )),
                        (this.o = PropertyFactory.getProp(
                          t,
                          e.o,
                          0,
                          null,
                          this
                        )),
                        (this.tr =
                          TransformPropertyFactory.getTransformProperty(
                            t,
                            e.tr,
                            this
                          )),
                        (this.so = PropertyFactory.getProp(
                          t,
                          e.tr.so,
                          0,
                          0.01,
                          this
                        )),
                        (this.eo = PropertyFactory.getProp(
                          t,
                          e.tr.eo,
                          0,
                          0.01,
                          this
                        )),
                        (this.data = e),
                        this.dynamicProperties.length || this.getValue(!0),
                        (this._isAnimated = !!this.dynamicProperties.length),
                        (this.pMatrix = new Matrix()),
                        (this.rMatrix = new Matrix()),
                        (this.sMatrix = new Matrix()),
                        (this.tMatrix = new Matrix()),
                        (this.matrix = new Matrix());
                    }),
                  (RepeaterModifier.prototype.applyTransforms = function (
                    t,
                    e,
                    r,
                    i,
                    s,
                    a
                  ) {
                    var n = a ? -1 : 1,
                      o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
                      h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
                    t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]),
                      e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                      e.rotate(-i.r.v * n * s),
                      e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
                      r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                      r.scale(a ? 1 / o : o, a ? 1 / h : h),
                      r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                  }),
                  (RepeaterModifier.prototype.init = function (t, e, r, i) {
                    for (
                      this.elem = t,
                        this.arr = e,
                        this.pos = r,
                        this.elemsData = i,
                        this._currentCopies = 0,
                        this._elements = [],
                        this._groups = [],
                        this.frameId = -1,
                        this.initDynamicPropertyContainer(t),
                        this.initModifierProperties(t, e[r]);
                      r > 0;

                    )
                      (r -= 1), this._elements.unshift(e[r]);
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : this.getValue(!0);
                  }),
                  (RepeaterModifier.prototype.resetElements = function (t) {
                    var e,
                      r = t.length;
                    for (e = 0; e < r; e += 1)
                      (t[e]._processed = !1),
                        "gr" === t[e].ty && this.resetElements(t[e].it);
                  }),
                  (RepeaterModifier.prototype.cloneElements = function (t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e;
                  }),
                  (RepeaterModifier.prototype.changeGroupRender = function (
                    t,
                    e
                  ) {
                    var r,
                      i = t.length;
                    for (r = 0; r < i; r += 1)
                      (t[r]._render = e),
                        "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
                  }),
                  (RepeaterModifier.prototype.processShapes = function (t) {
                    var e,
                      r,
                      i,
                      s,
                      a,
                      n = !1;
                    if (this._mdf || t) {
                      var o,
                        h = Math.ceil(this.c.v);
                      if (this._groups.length < h) {
                        for (; this._groups.length < h; ) {
                          var l = {
                            it: this.cloneElements(this._elements),
                            ty: "gr",
                          };
                          l.it.push({
                            a: { a: 0, ix: 1, k: [0, 0] },
                            nm: "Transform",
                            o: { a: 0, ix: 7, k: 100 },
                            p: { a: 0, ix: 2, k: [0, 0] },
                            r: {
                              a: 1,
                              ix: 6,
                              k: [
                                { s: 0, e: 0, t: 0 },
                                { s: 0, e: 0, t: 1 },
                              ],
                            },
                            s: { a: 0, ix: 3, k: [100, 100] },
                            sa: { a: 0, ix: 5, k: 0 },
                            sk: { a: 0, ix: 4, k: 0 },
                            ty: "tr",
                          }),
                            this.arr.splice(0, 0, l),
                            this._groups.splice(0, 0, l),
                            (this._currentCopies += 1);
                        }
                        this.elem.reloadShapes(), (n = !0);
                      }
                      for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                        if (
                          ((o = a < h),
                          (this._groups[i]._render = o),
                          this.changeGroupRender(this._groups[i].it, o),
                          !o)
                        ) {
                          var p = this.elemsData[i].it,
                            f = p[p.length - 1];
                          0 !== f.transform.op.v
                            ? ((f.transform.op._mdf = !0),
                              (f.transform.op.v = 0))
                            : (f.transform.op._mdf = !1);
                        }
                        a += 1;
                      }
                      this._currentCopies = h;
                      var c = this.o.v,
                        m = c % 1,
                        u = c > 0 ? Math.floor(c) : Math.ceil(c),
                        d = this.pMatrix.props,
                        y = this.rMatrix.props,
                        g = this.sMatrix.props;
                      this.pMatrix.reset(),
                        this.rMatrix.reset(),
                        this.sMatrix.reset(),
                        this.tMatrix.reset(),
                        this.matrix.reset();
                      var v,
                        b,
                        P = 0;
                      if (c > 0) {
                        for (; P < u; )
                          this.applyTransforms(
                            this.pMatrix,
                            this.rMatrix,
                            this.sMatrix,
                            this.tr,
                            1,
                            !1
                          ),
                            (P += 1);
                        m &&
                          (this.applyTransforms(
                            this.pMatrix,
                            this.rMatrix,
                            this.sMatrix,
                            this.tr,
                            m,
                            !1
                          ),
                          (P += m));
                      } else if (c < 0) {
                        for (; P > u; )
                          this.applyTransforms(
                            this.pMatrix,
                            this.rMatrix,
                            this.sMatrix,
                            this.tr,
                            1,
                            !0
                          ),
                            (P -= 1);
                        m &&
                          (this.applyTransforms(
                            this.pMatrix,
                            this.rMatrix,
                            this.sMatrix,
                            this.tr,
                            -m,
                            !0
                          ),
                          (P -= m));
                      }
                      for (
                        i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                          s = 1 === this.data.m ? 1 : -1,
                          a = this._currentCopies;
                        a;

                      ) {
                        if (
                          ((b = (r = (e = this.elemsData[i].it)[e.length - 1]
                            .transform.mProps.v.props).length),
                          (e[e.length - 1].transform.mProps._mdf = !0),
                          (e[e.length - 1].transform.op._mdf = !0),
                          (e[e.length - 1].transform.op.v =
                            1 === this._currentCopies
                              ? this.so.v
                              : this.so.v +
                                (this.eo.v - this.so.v) *
                                  (i / (this._currentCopies - 1))),
                          0 !== P)
                        ) {
                          for (
                            ((0 !== i && 1 === s) ||
                              (i !== this._currentCopies - 1 && -1 === s)) &&
                              this.applyTransforms(
                                this.pMatrix,
                                this.rMatrix,
                                this.sMatrix,
                                this.tr,
                                1,
                                !1
                              ),
                              this.matrix.transform(
                                y[0],
                                y[1],
                                y[2],
                                y[3],
                                y[4],
                                y[5],
                                y[6],
                                y[7],
                                y[8],
                                y[9],
                                y[10],
                                y[11],
                                y[12],
                                y[13],
                                y[14],
                                y[15]
                              ),
                              this.matrix.transform(
                                g[0],
                                g[1],
                                g[2],
                                g[3],
                                g[4],
                                g[5],
                                g[6],
                                g[7],
                                g[8],
                                g[9],
                                g[10],
                                g[11],
                                g[12],
                                g[13],
                                g[14],
                                g[15]
                              ),
                              this.matrix.transform(
                                d[0],
                                d[1],
                                d[2],
                                d[3],
                                d[4],
                                d[5],
                                d[6],
                                d[7],
                                d[8],
                                d[9],
                                d[10],
                                d[11],
                                d[12],
                                d[13],
                                d[14],
                                d[15]
                              ),
                              v = 0;
                            v < b;
                            v += 1
                          )
                            r[v] = this.matrix.props[v];
                          this.matrix.reset();
                        } else
                          for (this.matrix.reset(), v = 0; v < b; v += 1)
                            r[v] = this.matrix.props[v];
                        (P += 1), (a -= 1), (i += s);
                      }
                    } else
                      for (a = this._currentCopies, i = 0, s = 1; a; )
                        (r = (e = this.elemsData[i].it)[e.length - 1].transform
                          .mProps.v.props),
                          (e[e.length - 1].transform.mProps._mdf = !1),
                          (e[e.length - 1].transform.op._mdf = !1),
                          (a -= 1),
                          (i += s);
                    return n;
                  }),
                  (RepeaterModifier.prototype.addShape = function () {}),
                  extendPrototype([ShapeModifier], RoundCornersModifier),
                  (RoundCornersModifier.prototype.initModifierProperties =
                    function (t, e) {
                      (this.getValue = this.processKeys),
                        (this.rd = PropertyFactory.getProp(
                          t,
                          e.r,
                          0,
                          null,
                          this
                        )),
                        (this._isAnimated = !!this.rd.effectsSequence.length);
                    }),
                  (RoundCornersModifier.prototype.processPath = function (
                    t,
                    e
                  ) {
                    var r = shapePool.newElement();
                    r.c = t.c;
                    var i,
                      s,
                      a,
                      n,
                      o,
                      h,
                      l,
                      p,
                      f,
                      c,
                      m,
                      u,
                      d,
                      y = t._length,
                      g = 0;
                    for (i = 0; i < y; i += 1)
                      (s = t.v[i]),
                        (n = t.o[i]),
                        (a = t.i[i]),
                        s[0] === n[0] &&
                        s[1] === n[1] &&
                        s[0] === a[0] &&
                        s[1] === a[1]
                          ? (0 !== i && i !== y - 1) || t.c
                            ? ((o = 0 === i ? t.v[y - 1] : t.v[i - 1]),
                              (l = (h = Math.sqrt(
                                Math.pow(s[0] - o[0], 2) +
                                  Math.pow(s[1] - o[1], 2)
                              ))
                                ? Math.min(h / 2, e) / h
                                : 0),
                              (p = u = s[0] + (o[0] - s[0]) * l),
                              (f = d = s[1] - (s[1] - o[1]) * l),
                              (c = p - (p - s[0]) * roundCorner),
                              (m = f - (f - s[1]) * roundCorner),
                              r.setTripleAt(p, f, c, m, u, d, g),
                              (g += 1),
                              (o = i === y - 1 ? t.v[0] : t.v[i + 1]),
                              (l = (h = Math.sqrt(
                                Math.pow(s[0] - o[0], 2) +
                                  Math.pow(s[1] - o[1], 2)
                              ))
                                ? Math.min(h / 2, e) / h
                                : 0),
                              (p = c = s[0] + (o[0] - s[0]) * l),
                              (f = m = s[1] + (o[1] - s[1]) * l),
                              (u = p - (p - s[0]) * roundCorner),
                              (d = f - (f - s[1]) * roundCorner),
                              r.setTripleAt(p, f, c, m, u, d, g),
                              (g += 1))
                            : (r.setTripleAt(
                                s[0],
                                s[1],
                                n[0],
                                n[1],
                                a[0],
                                a[1],
                                g
                              ),
                              (g += 1))
                          : (r.setTripleAt(
                              t.v[i][0],
                              t.v[i][1],
                              t.o[i][0],
                              t.o[i][1],
                              t.i[i][0],
                              t.i[i][1],
                              g
                            ),
                            (g += 1));
                    return r;
                  }),
                  (RoundCornersModifier.prototype.processShapes = function (t) {
                    var e,
                      r,
                      i,
                      s,
                      a,
                      n,
                      o = this.shapes.length,
                      h = this.rd.v;
                    if (0 !== h)
                      for (r = 0; r < o; r += 1) {
                        if (
                          ((n = (a = this.shapes[r]).localShapeCollection),
                          a.shape._mdf || this._mdf || t)
                        )
                          for (
                            n.releaseShapes(),
                              a.shape._mdf = !0,
                              e = a.shape.paths.shapes,
                              s = a.shape.paths._length,
                              i = 0;
                            i < s;
                            i += 1
                          )
                            n.addShape(this.processPath(e[i], h));
                        a.shape.paths = a.localShapeCollection;
                      }
                    this.dynamicProperties.length || (this._mdf = !1);
                  }),
                  (PolynomialBezier.prototype.point = function (t) {
                    return [
                      ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t +
                        this.d[0],
                      ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t +
                        this.d[1],
                    ];
                  }),
                  (PolynomialBezier.prototype.derivative = function (t) {
                    return [
                      (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                      (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1],
                    ];
                  }),
                  (PolynomialBezier.prototype.tangentAngle = function (t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[1], e[0]);
                  }),
                  (PolynomialBezier.prototype.normalAngle = function (t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[0], e[1]);
                  }),
                  (PolynomialBezier.prototype.inflectionPoints = function () {
                    var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (floatZero(t)) return [];
                    var e =
                        (-0.5 *
                          (this.a[1] * this.c[0] - this.a[0] * this.c[1])) /
                        t,
                      r =
                        e * e -
                        ((1 / 3) *
                          (this.b[1] * this.c[0] - this.b[0] * this.c[1])) /
                          t;
                    if (r < 0) return [];
                    var i = Math.sqrt(r);
                    return floatZero(i)
                      ? i > 0 && i < 1
                        ? [e]
                        : []
                      : [e - i, e + i].filter(function (t) {
                          return t > 0 && t < 1;
                        });
                  }),
                  (PolynomialBezier.prototype.split = function (t) {
                    if (t <= 0) return [singlePoint(this.points[0]), this];
                    if (t >= 1)
                      return [
                        this,
                        singlePoint(this.points[this.points.length - 1]),
                      ];
                    var e = lerpPoint(this.points[0], this.points[1], t),
                      r = lerpPoint(this.points[1], this.points[2], t),
                      i = lerpPoint(this.points[2], this.points[3], t),
                      s = lerpPoint(e, r, t),
                      a = lerpPoint(r, i, t),
                      n = lerpPoint(s, a, t);
                    return [
                      new PolynomialBezier(this.points[0], e, s, n, !0),
                      new PolynomialBezier(n, a, i, this.points[3], !0),
                    ];
                  }),
                  (PolynomialBezier.prototype.bounds = function () {
                    return { x: extrema(this, 0), y: extrema(this, 1) };
                  }),
                  (PolynomialBezier.prototype.boundingBox = function () {
                    var t = this.bounds();
                    return {
                      left: t.x.min,
                      right: t.x.max,
                      top: t.y.min,
                      bottom: t.y.max,
                      width: t.x.max - t.x.min,
                      height: t.y.max - t.y.min,
                      cx: (t.x.max + t.x.min) / 2,
                      cy: (t.y.max + t.y.min) / 2,
                    };
                  }),
                  (PolynomialBezier.prototype.intersections = function (
                    t,
                    e,
                    r
                  ) {
                    void 0 === e && (e = 2), void 0 === r && (r = 7);
                    var i = [];
                    return (
                      intersectsImpl(
                        intersectData(this, 0, 1),
                        intersectData(t, 0, 1),
                        0,
                        e,
                        i,
                        r
                      ),
                      i
                    );
                  }),
                  (PolynomialBezier.shapeSegment = function (t, e) {
                    var r = (e + 1) % t.length();
                    return new PolynomialBezier(
                      t.v[e],
                      t.o[e],
                      t.i[r],
                      t.v[r],
                      !0
                    );
                  }),
                  (PolynomialBezier.shapeSegmentInverted = function (t, e) {
                    var r = (e + 1) % t.length();
                    return new PolynomialBezier(
                      t.v[r],
                      t.i[r],
                      t.o[e],
                      t.v[e],
                      !0
                    );
                  }),
                  extendPrototype([ShapeModifier], ZigZagModifier),
                  (ZigZagModifier.prototype.initModifierProperties = function (
                    t,
                    e
                  ) {
                    (this.getValue = this.processKeys),
                      (this.amplitude = PropertyFactory.getProp(
                        t,
                        e.s,
                        0,
                        null,
                        this
                      )),
                      (this.frequency = PropertyFactory.getProp(
                        t,
                        e.r,
                        0,
                        null,
                        this
                      )),
                      (this.pointsType = PropertyFactory.getProp(
                        t,
                        e.pt,
                        0,
                        null,
                        this
                      )),
                      (this._isAnimated =
                        0 !== this.amplitude.effectsSequence.length ||
                        0 !== this.frequency.effectsSequence.length ||
                        0 !== this.pointsType.effectsSequence.length);
                  }),
                  (ZigZagModifier.prototype.processPath = function (
                    t,
                    e,
                    r,
                    i
                  ) {
                    var s = t._length,
                      a = shapePool.newElement();
                    if (((a.c = t.c), t.c || (s -= 1), 0 === s)) return a;
                    var n = -1,
                      o = PolynomialBezier.shapeSegment(t, 0);
                    zigZagCorner(a, t, 0, e, r, i, n);
                    for (var h = 0; h < s; h += 1)
                      (n = zigZagSegment(a, o, e, r, i, -n)),
                        (o =
                          h !== s - 1 || t.c
                            ? PolynomialBezier.shapeSegment(t, (h + 1) % s)
                            : null),
                        zigZagCorner(a, t, h + 1, e, r, i, n);
                    return a;
                  }),
                  (ZigZagModifier.prototype.processShapes = function (t) {
                    var e,
                      r,
                      i,
                      s,
                      a,
                      n,
                      o = this.shapes.length,
                      h = this.amplitude.v,
                      l = Math.max(0, Math.round(this.frequency.v)),
                      p = this.pointsType.v;
                    if (0 !== h)
                      for (r = 0; r < o; r += 1) {
                        if (
                          ((n = (a = this.shapes[r]).localShapeCollection),
                          a.shape._mdf || this._mdf || t)
                        )
                          for (
                            n.releaseShapes(),
                              a.shape._mdf = !0,
                              e = a.shape.paths.shapes,
                              s = a.shape.paths._length,
                              i = 0;
                            i < s;
                            i += 1
                          )
                            n.addShape(this.processPath(e[i], h, l, p));
                        a.shape.paths = a.localShapeCollection;
                      }
                    this.dynamicProperties.length || (this._mdf = !1);
                  }),
                  extendPrototype([ShapeModifier], OffsetPathModifier),
                  (OffsetPathModifier.prototype.initModifierProperties =
                    function (t, e) {
                      (this.getValue = this.processKeys),
                        (this.amount = PropertyFactory.getProp(
                          t,
                          e.a,
                          0,
                          null,
                          this
                        )),
                        (this.miterLimit = PropertyFactory.getProp(
                          t,
                          e.ml,
                          0,
                          null,
                          this
                        )),
                        (this.lineJoin = e.lj),
                        (this._isAnimated =
                          0 !== this.amount.effectsSequence.length);
                    }),
                  (OffsetPathModifier.prototype.processPath = function (
                    t,
                    e,
                    r,
                    i
                  ) {
                    var s = shapePool.newElement();
                    s.c = t.c;
                    var a = t.length();
                    t.c || (a -= 1);
                    var n,
                      o,
                      h,
                      l = [];
                    for (n = 0; n < a; n += 1)
                      (h = PolynomialBezier.shapeSegment(t, n)),
                        l.push(offsetSegmentSplit(h, e));
                    if (!t.c)
                      for (n = a - 1; n >= 0; n -= 1)
                        (h = PolynomialBezier.shapeSegmentInverted(t, n)),
                          l.push(offsetSegmentSplit(h, e));
                    l = pruneIntersections(l);
                    var p = null,
                      f = null;
                    for (n = 0; n < l.length; n += 1) {
                      var c = l[n];
                      for (
                        f && (p = joinLines(s, f, c[0], r, i)),
                          f = c[c.length - 1],
                          o = 0;
                        o < c.length;
                        o += 1
                      )
                        (h = c[o]),
                          p && pointEqual(h.points[0], p)
                            ? s.setXYAt(
                                h.points[1][0],
                                h.points[1][1],
                                "o",
                                s.length() - 1
                              )
                            : s.setTripleAt(
                                h.points[0][0],
                                h.points[0][1],
                                h.points[1][0],
                                h.points[1][1],
                                h.points[0][0],
                                h.points[0][1],
                                s.length()
                              ),
                          s.setTripleAt(
                            h.points[3][0],
                            h.points[3][1],
                            h.points[3][0],
                            h.points[3][1],
                            h.points[2][0],
                            h.points[2][1],
                            s.length()
                          ),
                          (p = h.points[3]);
                    }
                    return l.length && joinLines(s, f, l[0][0], r, i), s;
                  }),
                  (OffsetPathModifier.prototype.processShapes = function (t) {
                    var e,
                      r,
                      i,
                      s,
                      a,
                      n,
                      o = this.shapes.length,
                      h = this.amount.v,
                      l = this.miterLimit.v,
                      p = this.lineJoin;
                    if (0 !== h)
                      for (r = 0; r < o; r += 1) {
                        if (
                          ((n = (a = this.shapes[r]).localShapeCollection),
                          a.shape._mdf || this._mdf || t)
                        )
                          for (
                            n.releaseShapes(),
                              a.shape._mdf = !0,
                              e = a.shape.paths.shapes,
                              s = a.shape.paths._length,
                              i = 0;
                            i < s;
                            i += 1
                          )
                            n.addShape(this.processPath(e[i], h, p, l));
                        a.shape.paths = a.localShapeCollection;
                      }
                    this.dynamicProperties.length || (this._mdf = !1);
                  });
                var FontManager = (function () {
                  var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
                    e = [];
                  e = e.concat([
                    2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367,
                    2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377,
                    2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390,
                    2391, 2402, 2403,
                  ]);
                  var r = 127988,
                    i = [
                      "d83cdffb",
                      "d83cdffc",
                      "d83cdffd",
                      "d83cdffe",
                      "d83cdfff",
                    ];
                  function s(t, e) {
                    var r = createTag("span");
                    r.setAttribute("aria-hidden", !0), (r.style.fontFamily = e);
                    var i = createTag("span");
                    (i.innerText = "giItT1WQy@!-/#"),
                      (r.style.position = "absolute"),
                      (r.style.left = "-10000px"),
                      (r.style.top = "-10000px"),
                      (r.style.fontSize = "300px"),
                      (r.style.fontVariant = "normal"),
                      (r.style.fontStyle = "normal"),
                      (r.style.fontWeight = "normal"),
                      (r.style.letterSpacing = "0"),
                      r.appendChild(i),
                      document.body.appendChild(r);
                    var s = i.offsetWidth;
                    return (
                      (i.style.fontFamily =
                        (function (t) {
                          var e,
                            r = t.split(","),
                            i = r.length,
                            s = [];
                          for (e = 0; e < i; e += 1)
                            "sans-serif" !== r[e] &&
                              "monospace" !== r[e] &&
                              s.push(r[e]);
                          return s.join(",");
                        })(t) +
                        ", " +
                        e),
                      { node: i, w: s, parent: r }
                    );
                  }
                  function a(t, e) {
                    var r,
                      i = document.body && e ? "svg" : "canvas",
                      s = getFontProperties(t);
                    if ("svg" === i) {
                      var a = createNS("text");
                      (a.style.fontSize = "100px"),
                        a.setAttribute("font-family", t.fFamily),
                        a.setAttribute("font-style", s.style),
                        a.setAttribute("font-weight", s.weight),
                        (a.textContent = "1"),
                        t.fClass
                          ? ((a.style.fontFamily = "inherit"),
                            a.setAttribute("class", t.fClass))
                          : (a.style.fontFamily = t.fFamily),
                        e.appendChild(a),
                        (r = a);
                    } else {
                      var n = new OffscreenCanvas(500, 500).getContext("2d");
                      (n.font =
                        s.style + " " + s.weight + " 100px " + t.fFamily),
                        (r = n);
                    }
                    return {
                      measureText: function (t) {
                        return "svg" === i
                          ? ((r.textContent = t), r.getComputedTextLength())
                          : r.measureText(t).width;
                      },
                    };
                  }
                  function n(t) {
                    var e = 0,
                      r = t.charCodeAt(0);
                    if (r >= 55296 && r <= 56319) {
                      var i = t.charCodeAt(1);
                      i >= 56320 &&
                        i <= 57343 &&
                        (e = 1024 * (r - 55296) + i - 56320 + 65536);
                    }
                    return e;
                  }
                  function o(t) {
                    var e = n(t);
                    return e >= 127462 && e <= 127487;
                  }
                  var h = function () {
                    (this.fonts = []),
                      (this.chars = null),
                      (this.typekitLoaded = 0),
                      (this.isLoaded = !1),
                      (this._warned = !1),
                      (this.initTime = Date.now()),
                      (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                      (this.checkLoadedFontsBinded =
                        this.checkLoadedFonts.bind(this));
                  };
                  return (
                    (h.isModifier = function (t, e) {
                      var r = t.toString(16) + e.toString(16);
                      return -1 !== i.indexOf(r);
                    }),
                    (h.isZeroWidthJoiner = function (t) {
                      return 8205 === t;
                    }),
                    (h.isFlagEmoji = function (t) {
                      return o(t.substr(0, 2)) && o(t.substr(2, 2));
                    }),
                    (h.isRegionalCode = o),
                    (h.isCombinedCharacter = function (t) {
                      return -1 !== e.indexOf(t);
                    }),
                    (h.isRegionalFlag = function (t, e) {
                      var i = n(t.substr(e, 2));
                      if (i !== r) return !1;
                      var s = 0;
                      for (e += 2; s < 5; ) {
                        if ((i = n(t.substr(e, 2))) < 917601 || i > 917626)
                          return !1;
                        (s += 1), (e += 2);
                      }
                      return 917631 === n(t.substr(e, 2));
                    }),
                    (h.isVariationSelector = function (t) {
                      return 65039 === t;
                    }),
                    (h.BLACK_FLAG_CODE_POINT = r),
                    (h.prototype = {
                      addChars: function (t) {
                        if (t) {
                          this.chars || (this.chars = []);
                          var e,
                            r,
                            i,
                            s = t.length,
                            a = this.chars.length;
                          for (e = 0; e < s; e += 1) {
                            for (r = 0, i = !1; r < a; )
                              this.chars[r].style === t[e].style &&
                                this.chars[r].fFamily === t[e].fFamily &&
                                this.chars[r].ch === t[e].ch &&
                                (i = !0),
                                (r += 1);
                            i || (this.chars.push(t[e]), (a += 1));
                          }
                        }
                      },
                      addFonts: function (t, e) {
                        if (t) {
                          if (this.chars)
                            return (
                              (this.isLoaded = !0), void (this.fonts = t.list)
                            );
                          if (!document.body)
                            return (
                              (this.isLoaded = !0),
                              t.list.forEach(function (t) {
                                (t.helper = a(t)), (t.cache = {});
                              }),
                              void (this.fonts = t.list)
                            );
                          var r,
                            i = t.list,
                            n = i.length,
                            o = n;
                          for (r = 0; r < n; r += 1) {
                            var h,
                              l,
                              p = !0;
                            if (
                              ((i[r].loaded = !1),
                              (i[r].monoCase = s(i[r].fFamily, "monospace")),
                              (i[r].sansCase = s(i[r].fFamily, "sans-serif")),
                              i[r].fPath)
                            ) {
                              if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                                if (
                                  ((h = document.querySelectorAll(
                                    'style[f-forigin="p"][f-family="' +
                                      i[r].fFamily +
                                      '"], style[f-origin="3"][f-family="' +
                                      i[r].fFamily +
                                      '"]'
                                  )).length > 0 && (p = !1),
                                  p)
                                ) {
                                  var f = createTag("style");
                                  f.setAttribute("f-forigin", i[r].fOrigin),
                                    f.setAttribute("f-origin", i[r].origin),
                                    f.setAttribute("f-family", i[r].fFamily),
                                    (f.type = "text/css"),
                                    (f.innerText =
                                      "@font-face {font-family: " +
                                      i[r].fFamily +
                                      "; font-style: normal; src: url('" +
                                      i[r].fPath +
                                      "');}"),
                                    e.appendChild(f);
                                }
                              } else if (
                                "g" === i[r].fOrigin ||
                                1 === i[r].origin
                              ) {
                                for (
                                  h = document.querySelectorAll(
                                    'link[f-forigin="g"], link[f-origin="1"]'
                                  ),
                                    l = 0;
                                  l < h.length;
                                  l += 1
                                )
                                  -1 !== h[l].href.indexOf(i[r].fPath) &&
                                    (p = !1);
                                if (p) {
                                  var c = createTag("link");
                                  c.setAttribute("f-forigin", i[r].fOrigin),
                                    c.setAttribute("f-origin", i[r].origin),
                                    (c.type = "text/css"),
                                    (c.rel = "stylesheet"),
                                    (c.href = i[r].fPath),
                                    document.body.appendChild(c);
                                }
                              } else if (
                                "t" === i[r].fOrigin ||
                                2 === i[r].origin
                              ) {
                                for (
                                  h = document.querySelectorAll(
                                    'script[f-forigin="t"], script[f-origin="2"]'
                                  ),
                                    l = 0;
                                  l < h.length;
                                  l += 1
                                )
                                  i[r].fPath === h[l].src && (p = !1);
                                if (p) {
                                  var m = createTag("link");
                                  m.setAttribute("f-forigin", i[r].fOrigin),
                                    m.setAttribute("f-origin", i[r].origin),
                                    m.setAttribute("rel", "stylesheet"),
                                    m.setAttribute("href", i[r].fPath),
                                    e.appendChild(m);
                                }
                              }
                            } else (i[r].loaded = !0), (o -= 1);
                            (i[r].helper = a(i[r], e)),
                              (i[r].cache = {}),
                              this.fonts.push(i[r]);
                          }
                          0 === o
                            ? (this.isLoaded = !0)
                            : setTimeout(this.checkLoadedFonts.bind(this), 100);
                        } else this.isLoaded = !0;
                      },
                      getCharData: function (e, r, i) {
                        for (var s = 0, a = this.chars.length; s < a; ) {
                          if (
                            this.chars[s].ch === e &&
                            this.chars[s].style === r &&
                            this.chars[s].fFamily === i
                          )
                            return this.chars[s];
                          s += 1;
                        }
                        return (
                          (("string" == typeof e && 13 !== e.charCodeAt(0)) ||
                            !e) &&
                            console &&
                            console.warn &&
                            !this._warned &&
                            ((this._warned = !0),
                            console.warn(
                              "Missing character from exported characters list: ",
                              e,
                              r,
                              i
                            )),
                          t
                        );
                      },
                      getFontByName: function (t) {
                        for (var e = 0, r = this.fonts.length; e < r; ) {
                          if (this.fonts[e].fName === t) return this.fonts[e];
                          e += 1;
                        }
                        return this.fonts[0];
                      },
                      measureText: function (t, e, r) {
                        var i = this.getFontByName(e),
                          s = t;
                        if (!i.cache[s]) {
                          var a = i.helper;
                          if (" " === t) {
                            var n = a.measureText("|" + t + "|"),
                              o = a.measureText("||");
                            i.cache[s] = (n - o) / 100;
                          } else i.cache[s] = a.measureText(t) / 100;
                        }
                        return i.cache[s] * r;
                      },
                      checkLoadedFonts: function () {
                        var t,
                          e,
                          r,
                          i = this.fonts.length,
                          s = i;
                        for (t = 0; t < i; t += 1)
                          this.fonts[t].loaded
                            ? (s -= 1)
                            : "n" === this.fonts[t].fOrigin ||
                              0 === this.fonts[t].origin
                            ? (this.fonts[t].loaded = !0)
                            : ((e = this.fonts[t].monoCase.node),
                              (r = this.fonts[t].monoCase.w),
                              e.offsetWidth !== r
                                ? ((s -= 1), (this.fonts[t].loaded = !0))
                                : ((e = this.fonts[t].sansCase.node),
                                  (r = this.fonts[t].sansCase.w),
                                  e.offsetWidth !== r &&
                                    ((s -= 1), (this.fonts[t].loaded = !0))),
                              this.fonts[t].loaded &&
                                (this.fonts[
                                  t
                                ].sansCase.parent.parentNode.removeChild(
                                  this.fonts[t].sansCase.parent
                                ),
                                this.fonts[
                                  t
                                ].monoCase.parent.parentNode.removeChild(
                                  this.fonts[t].monoCase.parent
                                )));
                        0 !== s && Date.now() - this.initTime < 5e3
                          ? setTimeout(this.checkLoadedFontsBinded, 20)
                          : setTimeout(this.setIsLoadedBinded, 10);
                      },
                      setIsLoaded: function () {
                        this.isLoaded = !0;
                      },
                    }),
                    h
                  );
                })();
                function SlotManager(t) {
                  this.animationData = t;
                }
                function slotFactory(t) {
                  return new SlotManager(t);
                }
                function RenderableElement() {}
                (SlotManager.prototype.getProp = function (t) {
                  return this.animationData.slots &&
                    this.animationData.slots[t.sid]
                    ? Object.assign(t, this.animationData.slots[t.sid].p)
                    : t;
                }),
                  (RenderableElement.prototype = {
                    initRenderable: function () {
                      (this.isInRange = !1),
                        (this.hidden = !1),
                        (this.isTransparent = !1),
                        (this.renderableComponents = []);
                    },
                    addRenderableComponent: function (t) {
                      -1 === this.renderableComponents.indexOf(t) &&
                        this.renderableComponents.push(t);
                    },
                    removeRenderableComponent: function (t) {
                      -1 !== this.renderableComponents.indexOf(t) &&
                        this.renderableComponents.splice(
                          this.renderableComponents.indexOf(t),
                          1
                        );
                    },
                    prepareRenderableFrame: function (t) {
                      this.checkLayerLimits(t);
                    },
                    checkTransparency: function () {
                      this.finalTransform.mProp.o.v <= 0
                        ? !this.isTransparent &&
                          this.globalData.renderConfig.hideOnTransparent &&
                          ((this.isTransparent = !0), this.hide())
                        : this.isTransparent &&
                          ((this.isTransparent = !1), this.show());
                    },
                    checkLayerLimits: function (t) {
                      this.data.ip - this.data.st <= t &&
                      this.data.op - this.data.st > t
                        ? !0 !== this.isInRange &&
                          ((this.globalData._mdf = !0),
                          (this._mdf = !0),
                          (this.isInRange = !0),
                          this.show())
                        : !1 !== this.isInRange &&
                          ((this.globalData._mdf = !0),
                          (this.isInRange = !1),
                          this.hide());
                    },
                    renderRenderable: function () {
                      var t,
                        e = this.renderableComponents.length;
                      for (t = 0; t < e; t += 1)
                        this.renderableComponents[t].renderFrame(
                          this._isFirstFrame
                        );
                    },
                    sourceRectAtTime: function () {
                      return { top: 0, left: 0, width: 100, height: 100 };
                    },
                    getLayerSize: function () {
                      return 5 === this.data.ty
                        ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height,
                          }
                        : { w: this.data.width, h: this.data.height };
                    },
                  });
                var getBlendMode = (function () {
                  var t = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity",
                  };
                  return function (e) {
                    return t[e] || "";
                  };
                })();
                function SliderEffect(t, e, r) {
                  this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                }
                function AngleEffect(t, e, r) {
                  this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                }
                function ColorEffect(t, e, r) {
                  this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
                }
                function PointEffect(t, e, r) {
                  this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
                }
                function LayerIndexEffect(t, e, r) {
                  this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                }
                function MaskIndexEffect(t, e, r) {
                  this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                }
                function CheckboxEffect(t, e, r) {
                  this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                }
                function NoValueEffect() {
                  this.p = {};
                }
                function EffectsManager(t, e) {
                  var r = t.ef || [];
                  this.effectElements = [];
                  var i,
                    s,
                    a = r.length;
                  for (i = 0; i < a; i += 1)
                    (s = new GroupEffect(r[i], e)), this.effectElements.push(s);
                }
                function GroupEffect(t, e) {
                  this.init(t, e);
                }
                function BaseElement() {}
                function FrameElement() {}
                function FootageElement(t, e, r) {
                  this.initFrame(),
                    this.initRenderable(),
                    (this.assetData = e.getAssetData(t.refId)),
                    (this.footageData = e.imageLoader.getAsset(this.assetData)),
                    this.initBaseData(t, e, r);
                }
                function AudioElement(t, e, r) {
                  this.initFrame(),
                    this.initRenderable(),
                    (this.assetData = e.getAssetData(t.refId)),
                    this.initBaseData(t, e, r),
                    (this._isPlaying = !1),
                    (this._canPlay = !1);
                  var i = this.globalData.getAssetsPath(this.assetData);
                  (this.audio = this.globalData.audioController.createAudio(i)),
                    (this._currentTime = 0),
                    this.globalData.audioController.addAudio(this),
                    (this._volumeMultiplier = 1),
                    (this._volume = 1),
                    (this._previousVolume = null),
                    (this.tm = t.tm
                      ? PropertyFactory.getProp(
                          this,
                          t.tm,
                          0,
                          e.frameRate,
                          this
                        )
                      : { _placeholder: !0 }),
                    (this.lv = PropertyFactory.getProp(
                      this,
                      t.au && t.au.lv ? t.au.lv : { k: [100] },
                      1,
                      0.01,
                      this
                    ));
                }
                function BaseRenderer() {}
                extendPrototype([DynamicPropertyContainer], GroupEffect),
                  (GroupEffect.prototype.getValue =
                    GroupEffect.prototype.iterateDynamicProperties),
                  (GroupEffect.prototype.init = function (t, e) {
                    (this.data = t),
                      (this.effectElements = []),
                      this.initDynamicPropertyContainer(e);
                    var r,
                      i,
                      s = this.data.ef.length,
                      a = this.data.ef;
                    for (r = 0; r < s; r += 1) {
                      switch (((i = null), a[r].ty)) {
                        case 0:
                          i = new SliderEffect(a[r], e, this);
                          break;
                        case 1:
                          i = new AngleEffect(a[r], e, this);
                          break;
                        case 2:
                          i = new ColorEffect(a[r], e, this);
                          break;
                        case 3:
                          i = new PointEffect(a[r], e, this);
                          break;
                        case 4:
                        case 7:
                          i = new CheckboxEffect(a[r], e, this);
                          break;
                        case 10:
                          i = new LayerIndexEffect(a[r], e, this);
                          break;
                        case 11:
                          i = new MaskIndexEffect(a[r], e, this);
                          break;
                        case 5:
                          i = new EffectsManager(a[r], e);
                          break;
                        default:
                          i = new NoValueEffect(a[r]);
                      }
                      i && this.effectElements.push(i);
                    }
                  }),
                  (BaseElement.prototype = {
                    checkMasks: function () {
                      if (!this.data.hasMask) return !1;
                      for (
                        var t = 0, e = this.data.masksProperties.length;
                        t < e;

                      ) {
                        if (
                          "n" !== this.data.masksProperties[t].mode &&
                          !1 !== this.data.masksProperties[t].cl
                        )
                          return !0;
                        t += 1;
                      }
                      return !1;
                    },
                    initExpressions: function () {
                      var t = getExpressionInterfaces();
                      if (t) {
                        var e = t("layer"),
                          r = t("effects"),
                          i = t("shape"),
                          s = t("text"),
                          a = t("comp");
                        (this.layerInterface = e(this)),
                          this.data.hasMask &&
                            this.maskManager &&
                            this.layerInterface.registerMaskInterface(
                              this.maskManager
                            );
                        var n = r.createEffectsInterface(
                          this,
                          this.layerInterface
                        );
                        this.layerInterface.registerEffectsInterface(n),
                          0 === this.data.ty || this.data.xt
                            ? (this.compInterface = a(this))
                            : 4 === this.data.ty
                            ? ((this.layerInterface.shapeInterface = i(
                                this.shapesData,
                                this.itemsData,
                                this.layerInterface
                              )),
                              (this.layerInterface.content =
                                this.layerInterface.shapeInterface))
                            : 5 === this.data.ty &&
                              ((this.layerInterface.textInterface = s(this)),
                              (this.layerInterface.text =
                                this.layerInterface.textInterface));
                      }
                    },
                    setBlendMode: function () {
                      var t = getBlendMode(this.data.bm);
                      (this.baseElement || this.layerElement).style[
                        "mix-blend-mode"
                      ] = t;
                    },
                    initBaseData: function (t, e, r) {
                      (this.globalData = e),
                        (this.comp = r),
                        (this.data = t),
                        (this.layerId = createElementID()),
                        this.data.sr || (this.data.sr = 1),
                        (this.effectsManager = new EffectsManager(
                          this.data,
                          this,
                          this.dynamicProperties
                        ));
                    },
                    getType: function () {
                      return this.type;
                    },
                    sourceRectAtTime: function () {},
                  }),
                  (FrameElement.prototype = {
                    initFrame: function () {
                      (this._isFirstFrame = !1),
                        (this.dynamicProperties = []),
                        (this._mdf = !1);
                    },
                    prepareProperties: function (t, e) {
                      var r,
                        i = this.dynamicProperties.length;
                      for (r = 0; r < i; r += 1)
                        (e ||
                          (this._isParent &&
                            "transform" ===
                              this.dynamicProperties[r].propType)) &&
                          (this.dynamicProperties[r].getValue(),
                          this.dynamicProperties[r]._mdf &&
                            ((this.globalData._mdf = !0), (this._mdf = !0)));
                    },
                    addDynamicProperty: function (t) {
                      -1 === this.dynamicProperties.indexOf(t) &&
                        this.dynamicProperties.push(t);
                    },
                  }),
                  (FootageElement.prototype.prepareFrame = function () {}),
                  extendPrototype(
                    [RenderableElement, BaseElement, FrameElement],
                    FootageElement
                  ),
                  (FootageElement.prototype.getBaseElement = function () {
                    return null;
                  }),
                  (FootageElement.prototype.renderFrame = function () {}),
                  (FootageElement.prototype.destroy = function () {}),
                  (FootageElement.prototype.initExpressions = function () {
                    var t = getExpressionInterfaces();
                    if (t) {
                      var e = t("footage");
                      this.layerInterface = e(this);
                    }
                  }),
                  (FootageElement.prototype.getFootageData = function () {
                    return this.footageData;
                  }),
                  (AudioElement.prototype.prepareFrame = function (t) {
                    if (
                      (this.prepareRenderableFrame(t, !0),
                      this.prepareProperties(t, !0),
                      this.tm._placeholder)
                    )
                      this._currentTime = t / this.data.sr;
                    else {
                      var e = this.tm.v;
                      this._currentTime = e;
                    }
                    this._volume = this.lv.v[0];
                    var r = this._volume * this._volumeMultiplier;
                    this._previousVolume !== r &&
                      ((this._previousVolume = r), this.audio.volume(r));
                  }),
                  extendPrototype(
                    [RenderableElement, BaseElement, FrameElement],
                    AudioElement
                  ),
                  (AudioElement.prototype.renderFrame = function () {
                    this.isInRange &&
                      this._canPlay &&
                      (this._isPlaying
                        ? (!this.audio.playing() ||
                            Math.abs(
                              this._currentTime / this.globalData.frameRate -
                                this.audio.seek()
                            ) > 0.1) &&
                          this.audio.seek(
                            this._currentTime / this.globalData.frameRate
                          )
                        : (this.audio.play(),
                          this.audio.seek(
                            this._currentTime / this.globalData.frameRate
                          ),
                          (this._isPlaying = !0)));
                  }),
                  (AudioElement.prototype.show = function () {}),
                  (AudioElement.prototype.hide = function () {
                    this.audio.pause(), (this._isPlaying = !1);
                  }),
                  (AudioElement.prototype.pause = function () {
                    this.audio.pause(),
                      (this._isPlaying = !1),
                      (this._canPlay = !1);
                  }),
                  (AudioElement.prototype.resume = function () {
                    this._canPlay = !0;
                  }),
                  (AudioElement.prototype.setRate = function (t) {
                    this.audio.rate(t);
                  }),
                  (AudioElement.prototype.volume = function (t) {
                    (this._volumeMultiplier = t),
                      (this._previousVolume = t * this._volume),
                      this.audio.volume(this._previousVolume);
                  }),
                  (AudioElement.prototype.getBaseElement = function () {
                    return null;
                  }),
                  (AudioElement.prototype.destroy = function () {}),
                  (AudioElement.prototype.sourceRectAtTime = function () {}),
                  (AudioElement.prototype.initExpressions = function () {}),
                  (BaseRenderer.prototype.checkLayers = function (t) {
                    var e,
                      r,
                      i = this.layers.length;
                    for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
                      this.elements[e] ||
                        ((r = this.layers[e]).ip - r.st <=
                          t - this.layers[e].st &&
                          r.op - r.st > t - this.layers[e].st &&
                          this.buildItem(e)),
                        (this.completeLayers =
                          !!this.elements[e] && this.completeLayers);
                    this.checkPendingElements();
                  }),
                  (BaseRenderer.prototype.createItem = function (t) {
                    switch (t.ty) {
                      case 2:
                        return this.createImage(t);
                      case 0:
                        return this.createComp(t);
                      case 1:
                        return this.createSolid(t);
                      case 3:
                      default:
                        return this.createNull(t);
                      case 4:
                        return this.createShape(t);
                      case 5:
                        return this.createText(t);
                      case 6:
                        return this.createAudio(t);
                      case 13:
                        return this.createCamera(t);
                      case 15:
                        return this.createFootage(t);
                    }
                  }),
                  (BaseRenderer.prototype.createCamera = function () {
                    throw new Error(
                      "You're using a 3d camera. Try the html renderer."
                    );
                  }),
                  (BaseRenderer.prototype.createAudio = function (t) {
                    return new AudioElement(t, this.globalData, this);
                  }),
                  (BaseRenderer.prototype.createFootage = function (t) {
                    return new FootageElement(t, this.globalData, this);
                  }),
                  (BaseRenderer.prototype.buildAllItems = function () {
                    var t,
                      e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements();
                  }),
                  (BaseRenderer.prototype.includeLayers = function (t) {
                    this.completeLayers = !1;
                    var e,
                      r,
                      i = t.length,
                      s = this.layers.length;
                    for (e = 0; e < i; e += 1)
                      for (r = 0; r < s; ) {
                        if (this.layers[r].id === t[e].id) {
                          this.layers[r] = t[e];
                          break;
                        }
                        r += 1;
                      }
                  }),
                  (BaseRenderer.prototype.setProjectInterface = function (t) {
                    this.globalData.projectInterface = t;
                  }),
                  (BaseRenderer.prototype.initItems = function () {
                    this.globalData.progressiveLoad || this.buildAllItems();
                  }),
                  (BaseRenderer.prototype.buildElementParenting = function (
                    t,
                    e,
                    r
                  ) {
                    for (
                      var i = this.elements,
                        s = this.layers,
                        a = 0,
                        n = s.length;
                      a < n;

                    )
                      s[a].ind == e &&
                        (i[a] && !0 !== i[a]
                          ? (r.push(i[a]),
                            i[a].setAsParent(),
                            void 0 !== s[a].parent
                              ? this.buildElementParenting(t, s[a].parent, r)
                              : t.setHierarchy(r))
                          : (this.buildItem(a), this.addPendingElement(t))),
                        (a += 1);
                  }),
                  (BaseRenderer.prototype.addPendingElement = function (t) {
                    this.pendingElements.push(t);
                  }),
                  (BaseRenderer.prototype.searchExtraCompositions = function (
                    t
                  ) {
                    var e,
                      r = t.length;
                    for (e = 0; e < r; e += 1)
                      if (t[e].xt) {
                        var i = this.createComp(t[e]);
                        i.initExpressions(),
                          this.globalData.projectInterface.registerComposition(
                            i
                          );
                      }
                  }),
                  (BaseRenderer.prototype.getElementById = function (t) {
                    var e,
                      r = this.elements.length;
                    for (e = 0; e < r; e += 1)
                      if (this.elements[e].data.ind === t)
                        return this.elements[e];
                    return null;
                  }),
                  (BaseRenderer.prototype.getElementByPath = function (t) {
                    var e,
                      r = t.shift();
                    if ("number" == typeof r) e = this.elements[r];
                    else {
                      var i,
                        s = this.elements.length;
                      for (i = 0; i < s; i += 1)
                        if (this.elements[i].data.nm === r) {
                          e = this.elements[i];
                          break;
                        }
                    }
                    return 0 === t.length ? e : e.getElementByPath(t);
                  }),
                  (BaseRenderer.prototype.setupGlobalData = function (t, e) {
                    (this.globalData.fontManager = new FontManager()),
                      (this.globalData.slotManager = slotFactory(t)),
                      this.globalData.fontManager.addChars(t.chars),
                      this.globalData.fontManager.addFonts(t.fonts, e),
                      (this.globalData.getAssetData =
                        this.animationItem.getAssetData.bind(
                          this.animationItem
                        )),
                      (this.globalData.getAssetsPath =
                        this.animationItem.getAssetsPath.bind(
                          this.animationItem
                        )),
                      (this.globalData.imageLoader =
                        this.animationItem.imagePreloader),
                      (this.globalData.audioController =
                        this.animationItem.audioController),
                      (this.globalData.frameId = 0),
                      (this.globalData.frameRate = t.fr),
                      (this.globalData.nm = t.nm),
                      (this.globalData.compSize = { w: t.w, h: t.h });
                  });
                var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
                function TransformElement() {}
                function MaskElement(t, e, r) {
                  (this.data = t),
                    (this.element = e),
                    (this.globalData = r),
                    (this.storedData = []),
                    (this.masksProperties = this.data.masksProperties || []),
                    (this.maskElement = null);
                  var i,
                    s = this.globalData.defs,
                    a = this.masksProperties ? this.masksProperties.length : 0;
                  (this.viewData = createSizedArray(a)), (this.solidPath = "");
                  var n,
                    o,
                    h,
                    l,
                    p,
                    f,
                    c,
                    m = this.masksProperties,
                    u = 0,
                    d = [],
                    y = createElementID(),
                    g = "clipPath",
                    v = "clip-path";
                  for (i = 0; i < a; i += 1)
                    if (
                      ((("a" !== m[i].mode && "n" !== m[i].mode) ||
                        m[i].inv ||
                        100 !== m[i].o.k ||
                        m[i].o.x) &&
                        ((g = "mask"), (v = "mask")),
                      ("s" !== m[i].mode && "i" !== m[i].mode) || 0 !== u
                        ? (l = null)
                        : ((l = createNS("rect")).setAttribute(
                            "fill",
                            "#ffffff"
                          ),
                          l.setAttribute(
                            "width",
                            this.element.comp.data.w || 0
                          ),
                          l.setAttribute(
                            "height",
                            this.element.comp.data.h || 0
                          ),
                          d.push(l)),
                      (n = createNS("path")),
                      "n" === m[i].mode)
                    )
                      (this.viewData[i] = {
                        op: PropertyFactory.getProp(
                          this.element,
                          m[i].o,
                          0,
                          0.01,
                          this.element
                        ),
                        prop: ShapePropertyFactory.getShapeProp(
                          this.element,
                          m[i],
                          3
                        ),
                        elem: n,
                        lastPath: "",
                      }),
                        s.appendChild(n);
                    else {
                      var b;
                      if (
                        ((u += 1),
                        n.setAttribute(
                          "fill",
                          "s" === m[i].mode ? "#000000" : "#ffffff"
                        ),
                        n.setAttribute("clip-rule", "nonzero"),
                        0 !== m[i].x.k
                          ? ((g = "mask"),
                            (v = "mask"),
                            (c = PropertyFactory.getProp(
                              this.element,
                              m[i].x,
                              0,
                              null,
                              this.element
                            )),
                            (b = createElementID()),
                            (p = createNS("filter")).setAttribute("id", b),
                            (f = createNS("feMorphology")).setAttribute(
                              "operator",
                              "erode"
                            ),
                            f.setAttribute("in", "SourceGraphic"),
                            f.setAttribute("radius", "0"),
                            p.appendChild(f),
                            s.appendChild(p),
                            n.setAttribute(
                              "stroke",
                              "s" === m[i].mode ? "#000000" : "#ffffff"
                            ))
                          : ((f = null), (c = null)),
                        (this.storedData[i] = {
                          elem: n,
                          x: c,
                          expan: f,
                          lastPath: "",
                          lastOperator: "",
                          filterId: b,
                          lastRadius: 0,
                        }),
                        "i" === m[i].mode)
                      ) {
                        h = d.length;
                        var P = createNS("g");
                        for (o = 0; o < h; o += 1) P.appendChild(d[o]);
                        var _ = createNS("mask");
                        _.setAttribute("mask-type", "alpha"),
                          _.setAttribute("id", y + "_" + u),
                          _.appendChild(n),
                          s.appendChild(_),
                          P.setAttribute(
                            "mask",
                            "url(" + getLocationHref() + "#" + y + "_" + u + ")"
                          ),
                          (d.length = 0),
                          d.push(P);
                      } else d.push(n);
                      m[i].inv &&
                        !this.solidPath &&
                        (this.solidPath = this.createLayerSolidPath()),
                        (this.viewData[i] = {
                          elem: n,
                          lastPath: "",
                          op: PropertyFactory.getProp(
                            this.element,
                            m[i].o,
                            0,
                            0.01,
                            this.element
                          ),
                          prop: ShapePropertyFactory.getShapeProp(
                            this.element,
                            m[i],
                            3
                          ),
                          invRect: l,
                        }),
                        this.viewData[i].prop.k ||
                          this.drawPath(
                            m[i],
                            this.viewData[i].prop.v,
                            this.viewData[i]
                          );
                    }
                  for (
                    this.maskElement = createNS(g), a = d.length, i = 0;
                    i < a;
                    i += 1
                  )
                    this.maskElement.appendChild(d[i]);
                  u > 0 &&
                    (this.maskElement.setAttribute("id", y),
                    this.element.maskedElement.setAttribute(
                      v,
                      "url(" + getLocationHref() + "#" + y + ")"
                    ),
                    s.appendChild(this.maskElement)),
                    this.viewData.length &&
                      this.element.addRenderableComponent(this);
                }
                (TransformElement.prototype = {
                  initTransform: function () {
                    var t = new Matrix();
                    (this.finalTransform = {
                      mProp: this.data.ks
                        ? TransformPropertyFactory.getTransformProperty(
                            this,
                            this.data.ks,
                            this
                          )
                        : { o: 0 },
                      _matMdf: !1,
                      _localMatMdf: !1,
                      _opMdf: !1,
                      mat: t,
                      localMat: t,
                      localOpacity: 1,
                    }),
                      this.data.ao &&
                        (this.finalTransform.mProp.autoOriented = !0),
                      this.data.ty;
                  },
                  renderTransform: function () {
                    if (
                      ((this.finalTransform._opMdf =
                        this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                      (this.finalTransform._matMdf =
                        this.finalTransform.mProp._mdf || this._isFirstFrame),
                      this.hierarchy)
                    ) {
                      var t,
                        e = this.finalTransform.mat,
                        r = 0,
                        i = this.hierarchy.length;
                      if (!this.finalTransform._matMdf)
                        for (; r < i; ) {
                          if (this.hierarchy[r].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                          }
                          r += 1;
                        }
                      if (this.finalTransform._matMdf)
                        for (
                          t = this.finalTransform.mProp.v.props,
                            e.cloneFromProps(t),
                            r = 0;
                          r < i;
                          r += 1
                        )
                          e.multiply(this.hierarchy[r].finalTransform.mProp.v);
                    }
                    this.finalTransform._matMdf &&
                      (this.finalTransform._localMatMdf =
                        this.finalTransform._matMdf),
                      this.finalTransform._opMdf &&
                        (this.finalTransform.localOpacity =
                          this.finalTransform.mProp.o.v);
                  },
                  renderLocalTransform: function () {
                    if (this.localTransforms) {
                      var t = 0,
                        e = this.localTransforms.length;
                      if (
                        ((this.finalTransform._localMatMdf =
                          this.finalTransform._matMdf),
                        !this.finalTransform._localMatMdf ||
                          !this.finalTransform._opMdf)
                      )
                        for (; t < e; )
                          this.localTransforms[t]._mdf &&
                            (this.finalTransform._localMatMdf = !0),
                            this.localTransforms[t]._opMdf &&
                              !this.finalTransform._opMdf &&
                              ((this.finalTransform.localOpacity =
                                this.finalTransform.mProp.o.v),
                              (this.finalTransform._opMdf = !0)),
                            (t += 1);
                      if (this.finalTransform._localMatMdf) {
                        var r = this.finalTransform.localMat;
                        for (
                          this.localTransforms[0].matrix.clone(r), t = 1;
                          t < e;
                          t += 1
                        ) {
                          var i = this.localTransforms[t].matrix;
                          r.multiply(i);
                        }
                        r.multiply(this.finalTransform.mat);
                      }
                      if (this.finalTransform._opMdf) {
                        var s = this.finalTransform.localOpacity;
                        for (t = 0; t < e; t += 1)
                          s *= 0.01 * this.localTransforms[t].opacity;
                        this.finalTransform.localOpacity = s;
                      }
                    }
                  },
                  searchEffectTransforms: function () {
                    if (this.renderableEffectsManager) {
                      var t = this.renderableEffectsManager.getEffects(
                        effectTypes.TRANSFORM_EFFECT
                      );
                      if (t.length) {
                        (this.localTransforms = []),
                          (this.finalTransform.localMat = new Matrix());
                        var e = 0,
                          r = t.length;
                        for (e = 0; e < r; e += 1)
                          this.localTransforms.push(t[e]);
                      }
                    }
                  },
                  globalToLocal: function (t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var r = !0, i = this.comp; r; )
                      i.finalTransform
                        ? (i.data.hasMask && e.splice(0, 0, i.finalTransform),
                          (i = i.comp))
                        : (r = !1);
                    var s,
                      a,
                      n = e.length;
                    for (s = 0; s < n; s += 1)
                      (a = e[s].mat.applyToPointArray(0, 0, 0)),
                        (t = [t[0] - a[0], t[1] - a[1], 0]);
                    return t;
                  },
                  mHelper: new Matrix(),
                }),
                  (MaskElement.prototype.getMaskProperty = function (t) {
                    return this.viewData[t].prop;
                  }),
                  (MaskElement.prototype.renderFrame = function (t) {
                    var e,
                      r = this.element.finalTransform.mat,
                      i = this.masksProperties.length;
                    for (e = 0; e < i; e += 1)
                      if (
                        ((this.viewData[e].prop._mdf || t) &&
                          this.drawPath(
                            this.masksProperties[e],
                            this.viewData[e].prop.v,
                            this.viewData[e]
                          ),
                        (this.viewData[e].op._mdf || t) &&
                          this.viewData[e].elem.setAttribute(
                            "fill-opacity",
                            this.viewData[e].op.v
                          ),
                        "n" !== this.masksProperties[e].mode &&
                          (this.viewData[e].invRect &&
                            (this.element.finalTransform.mProp._mdf || t) &&
                            this.viewData[e].invRect.setAttribute(
                              "transform",
                              r.getInverseMatrix().to2dCSS()
                            ),
                          this.storedData[e].x &&
                            (this.storedData[e].x._mdf || t)))
                      ) {
                        var s = this.storedData[e].expan;
                        this.storedData[e].x.v < 0
                          ? ("erode" !== this.storedData[e].lastOperator &&
                              ((this.storedData[e].lastOperator = "erode"),
                              this.storedData[e].elem.setAttribute(
                                "filter",
                                "url(" +
                                  getLocationHref() +
                                  "#" +
                                  this.storedData[e].filterId +
                                  ")"
                              )),
                            s.setAttribute("radius", -this.storedData[e].x.v))
                          : ("dilate" !== this.storedData[e].lastOperator &&
                              ((this.storedData[e].lastOperator = "dilate"),
                              this.storedData[e].elem.setAttribute(
                                "filter",
                                null
                              )),
                            this.storedData[e].elem.setAttribute(
                              "stroke-width",
                              2 * this.storedData[e].x.v
                            ));
                      }
                  }),
                  (MaskElement.prototype.getMaskelement = function () {
                    return this.maskElement;
                  }),
                  (MaskElement.prototype.createLayerSolidPath = function () {
                    var t = "M0,0 ";
                    return (
                      (t += " h" + this.globalData.compSize.w),
                      (t += " v" + this.globalData.compSize.h),
                      (t += " h-" + this.globalData.compSize.w),
                      (t += " v-" + this.globalData.compSize.h + " ")
                    );
                  }),
                  (MaskElement.prototype.drawPath = function (t, e, r) {
                    var i,
                      s,
                      a = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (s = e._length, i = 1; i < s; i += 1)
                      a +=
                        " C" +
                        e.o[i - 1][0] +
                        "," +
                        e.o[i - 1][1] +
                        " " +
                        e.i[i][0] +
                        "," +
                        e.i[i][1] +
                        " " +
                        e.v[i][0] +
                        "," +
                        e.v[i][1];
                    if (
                      (e.c &&
                        s > 1 &&
                        (a +=
                          " C" +
                          e.o[i - 1][0] +
                          "," +
                          e.o[i - 1][1] +
                          " " +
                          e.i[0][0] +
                          "," +
                          e.i[0][1] +
                          " " +
                          e.v[0][0] +
                          "," +
                          e.v[0][1]),
                      r.lastPath !== a)
                    ) {
                      var n = "";
                      r.elem &&
                        (e.c && (n = t.inv ? this.solidPath + a : a),
                        r.elem.setAttribute("d", n)),
                        (r.lastPath = a);
                    }
                  }),
                  (MaskElement.prototype.destroy = function () {
                    (this.element = null),
                      (this.globalData = null),
                      (this.maskElement = null),
                      (this.data = null),
                      (this.masksProperties = null);
                  });
                var filtersFactory = (function () {
                    var t = {
                      createFilter: function (t, e) {
                        var r = createNS("filter");
                        return (
                          r.setAttribute("id", t),
                          !0 !== e &&
                            (r.setAttribute("filterUnits", "objectBoundingBox"),
                            r.setAttribute("x", "0%"),
                            r.setAttribute("y", "0%"),
                            r.setAttribute("width", "100%"),
                            r.setAttribute("height", "100%")),
                          r
                        );
                      },
                      createAlphaToLuminanceFilter: function () {
                        var t = createNS("feColorMatrix");
                        return (
                          t.setAttribute("type", "matrix"),
                          t.setAttribute("color-interpolation-filters", "sRGB"),
                          t.setAttribute(
                            "values",
                            "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
                          ),
                          t
                        );
                      },
                    };
                    return t;
                  })(),
                  featureSupport = (function () {
                    var t = {
                      maskType: !0,
                      svgLumaHidden: !0,
                      offscreenCanvas: typeof OffscreenCanvas < "u",
                    };
                    return (
                      (/MSIE 10/i.test(navigator.userAgent) ||
                        /MSIE 9/i.test(navigator.userAgent) ||
                        /rv:11.0/i.test(navigator.userAgent) ||
                        /Edge\/\d./i.test(navigator.userAgent)) &&
                        (t.maskType = !1),
                      /firefox/i.test(navigator.userAgent) &&
                        (t.svgLumaHidden = !1),
                      t
                    );
                  })(),
                  registeredEffects = {},
                  idPrefix = "filter_result_";
                function SVGEffects(t) {
                  var e,
                    r,
                    i = "SourceGraphic",
                    s = t.data.ef ? t.data.ef.length : 0,
                    a = createElementID(),
                    n = filtersFactory.createFilter(a, !0),
                    o = 0;
                  for (this.filters = [], e = 0; e < s; e += 1) {
                    r = null;
                    var h = t.data.ef[e].ty;
                    registeredEffects[h] &&
                      ((r = new (0, registeredEffects[h].effect)(
                        n,
                        t.effectsManager.effectElements[e],
                        t,
                        idPrefix + o,
                        i
                      )),
                      (i = idPrefix + o),
                      registeredEffects[h].countsAsEffect && (o += 1)),
                      r && this.filters.push(r);
                  }
                  o &&
                    (t.globalData.defs.appendChild(n),
                    t.layerElement.setAttribute(
                      "filter",
                      "url(" + getLocationHref() + "#" + a + ")"
                    )),
                    this.filters.length && t.addRenderableComponent(this);
                }
                function registerEffect(t, e, r) {
                  registeredEffects[t] = { effect: e, countsAsEffect: r };
                }
                function SVGBaseElement() {}
                function HierarchyElement() {}
                function RenderableDOMElement() {}
                function IImageElement(t, e, r) {
                  (this.assetData = e.getAssetData(t.refId)),
                    this.assetData &&
                      this.assetData.sid &&
                      (this.assetData = e.slotManager.getProp(this.assetData)),
                    this.initElement(t, e, r),
                    (this.sourceRect = {
                      top: 0,
                      left: 0,
                      width: this.assetData.w,
                      height: this.assetData.h,
                    });
                }
                function ProcessedElement(t, e) {
                  (this.elem = t), (this.pos = e);
                }
                function IShapeElement() {}
                (SVGEffects.prototype.renderFrame = function (t) {
                  var e,
                    r = this.filters.length;
                  for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
                }),
                  (SVGEffects.prototype.getEffects = function (t) {
                    var e,
                      r = this.filters.length,
                      i = [];
                    for (e = 0; e < r; e += 1)
                      this.filters[e].type === t && i.push(this.filters[e]);
                    return i;
                  }),
                  (SVGBaseElement.prototype = {
                    initRendererElement: function () {
                      this.layerElement = createNS("g");
                    },
                    createContainerElements: function () {
                      (this.matteElement = createNS("g")),
                        (this.transformedElement = this.layerElement),
                        (this.maskedElement = this.layerElement),
                        (this._sizeChanged = !1);
                      var t = null;
                      if (this.data.td) {
                        this.matteMasks = {};
                        var e = createNS("g");
                        e.setAttribute("id", this.layerId),
                          e.appendChild(this.layerElement),
                          (t = e),
                          this.globalData.defs.appendChild(e);
                      } else
                        this.data.tt
                          ? (this.matteElement.appendChild(this.layerElement),
                            (t = this.matteElement),
                            (this.baseElement = this.matteElement))
                          : (this.baseElement = this.layerElement);
                      if (
                        (this.data.ln &&
                          this.layerElement.setAttribute("id", this.data.ln),
                        this.data.cl &&
                          this.layerElement.setAttribute("class", this.data.cl),
                        0 === this.data.ty && !this.data.hd)
                      ) {
                        var r = createNS("clipPath"),
                          i = createNS("path");
                        i.setAttribute(
                          "d",
                          "M0,0 L" +
                            this.data.w +
                            ",0 L" +
                            this.data.w +
                            "," +
                            this.data.h +
                            " L0," +
                            this.data.h +
                            "z"
                        );
                        var s = createElementID();
                        if (
                          (r.setAttribute("id", s),
                          r.appendChild(i),
                          this.globalData.defs.appendChild(r),
                          this.checkMasks())
                        ) {
                          var a = createNS("g");
                          a.setAttribute(
                            "clip-path",
                            "url(" + getLocationHref() + "#" + s + ")"
                          ),
                            a.appendChild(this.layerElement),
                            (this.transformedElement = a),
                            t
                              ? t.appendChild(this.transformedElement)
                              : (this.baseElement = this.transformedElement);
                        } else
                          this.layerElement.setAttribute(
                            "clip-path",
                            "url(" + getLocationHref() + "#" + s + ")"
                          );
                      }
                      0 !== this.data.bm && this.setBlendMode();
                    },
                    renderElement: function () {
                      this.finalTransform._localMatMdf &&
                        this.transformedElement.setAttribute(
                          "transform",
                          this.finalTransform.localMat.to2dCSS()
                        ),
                        this.finalTransform._opMdf &&
                          this.transformedElement.setAttribute(
                            "opacity",
                            this.finalTransform.localOpacity
                          );
                    },
                    destroyBaseElement: function () {
                      (this.layerElement = null),
                        (this.matteElement = null),
                        this.maskManager.destroy();
                    },
                    getBaseElement: function () {
                      return this.data.hd ? null : this.baseElement;
                    },
                    createRenderableComponents: function () {
                      (this.maskManager = new MaskElement(
                        this.data,
                        this,
                        this.globalData
                      )),
                        (this.renderableEffectsManager = new SVGEffects(this)),
                        this.searchEffectTransforms();
                    },
                    getMatte: function (t) {
                      if (
                        (this.matteMasks || (this.matteMasks = {}),
                        !this.matteMasks[t])
                      ) {
                        var e,
                          r,
                          i,
                          s,
                          a = this.layerId + "_" + t;
                        if (1 === t || 3 === t) {
                          var n = createNS("mask");
                          n.setAttribute("id", a),
                            n.setAttribute(
                              "mask-type",
                              3 === t ? "luminance" : "alpha"
                            ),
                            (i = createNS("use")).setAttributeNS(
                              "http://www.w3.org/1999/xlink",
                              "href",
                              "#" + this.layerId
                            ),
                            n.appendChild(i),
                            this.globalData.defs.appendChild(n),
                            !featureSupport.maskType &&
                              1 === t &&
                              (n.setAttribute("mask-type", "luminance"),
                              (e = createElementID()),
                              (r = filtersFactory.createFilter(e)),
                              this.globalData.defs.appendChild(r),
                              r.appendChild(
                                filtersFactory.createAlphaToLuminanceFilter()
                              ),
                              (s = createNS("g")).appendChild(i),
                              n.appendChild(s),
                              s.setAttribute(
                                "filter",
                                "url(" + getLocationHref() + "#" + e + ")"
                              ));
                        } else if (2 === t) {
                          var o = createNS("mask");
                          o.setAttribute("id", a),
                            o.setAttribute("mask-type", "alpha");
                          var h = createNS("g");
                          o.appendChild(h),
                            (e = createElementID()),
                            (r = filtersFactory.createFilter(e));
                          var l = createNS("feComponentTransfer");
                          l.setAttribute("in", "SourceGraphic"),
                            r.appendChild(l);
                          var p = createNS("feFuncA");
                          p.setAttribute("type", "table"),
                            p.setAttribute("tableValues", "1.0 0.0"),
                            l.appendChild(p),
                            this.globalData.defs.appendChild(r);
                          var f = createNS("rect");
                          f.setAttribute("width", this.comp.data.w),
                            f.setAttribute("height", this.comp.data.h),
                            f.setAttribute("x", "0"),
                            f.setAttribute("y", "0"),
                            f.setAttribute("fill", "#ffffff"),
                            f.setAttribute("opacity", "0"),
                            h.setAttribute(
                              "filter",
                              "url(" + getLocationHref() + "#" + e + ")"
                            ),
                            h.appendChild(f),
                            (i = createNS("use")).setAttributeNS(
                              "http://www.w3.org/1999/xlink",
                              "href",
                              "#" + this.layerId
                            ),
                            h.appendChild(i),
                            featureSupport.maskType ||
                              (o.setAttribute("mask-type", "luminance"),
                              r.appendChild(
                                filtersFactory.createAlphaToLuminanceFilter()
                              ),
                              (s = createNS("g")),
                              h.appendChild(f),
                              s.appendChild(this.layerElement),
                              h.appendChild(s)),
                            this.globalData.defs.appendChild(o);
                        }
                        this.matteMasks[t] = a;
                      }
                      return this.matteMasks[t];
                    },
                    setMatte: function (t) {
                      this.matteElement &&
                        this.matteElement.setAttribute(
                          "mask",
                          "url(" + getLocationHref() + "#" + t + ")"
                        );
                    },
                  }),
                  (HierarchyElement.prototype = {
                    initHierarchy: function () {
                      (this.hierarchy = []),
                        (this._isParent = !1),
                        this.checkParenting();
                    },
                    setHierarchy: function (t) {
                      this.hierarchy = t;
                    },
                    setAsParent: function () {
                      this._isParent = !0;
                    },
                    checkParenting: function () {
                      void 0 !== this.data.parent &&
                        this.comp.buildElementParenting(
                          this,
                          this.data.parent,
                          []
                        );
                    },
                  }),
                  extendPrototype(
                    [
                      RenderableElement,
                      createProxyFunction({
                        initElement: function (t, e, r) {
                          this.initFrame(),
                            this.initBaseData(t, e, r),
                            this.initTransform(t, e, r),
                            this.initHierarchy(),
                            this.initRenderable(),
                            this.initRendererElement(),
                            this.createContainerElements(),
                            this.createRenderableComponents(),
                            this.createContent(),
                            this.hide();
                        },
                        hide: function () {
                          this.hidden ||
                            (this.isInRange && !this.isTransparent) ||
                            (((
                              this.baseElement || this.layerElement
                            ).style.display = "none"),
                            (this.hidden = !0));
                        },
                        show: function () {
                          this.isInRange &&
                            !this.isTransparent &&
                            (this.data.hd ||
                              ((
                                this.baseElement || this.layerElement
                              ).style.display = "block"),
                            (this.hidden = !1),
                            (this._isFirstFrame = !0));
                        },
                        renderFrame: function () {
                          this.data.hd ||
                            this.hidden ||
                            (this.renderTransform(),
                            this.renderRenderable(),
                            this.renderLocalTransform(),
                            this.renderElement(),
                            this.renderInnerContent(),
                            this._isFirstFrame && (this._isFirstFrame = !1));
                        },
                        renderInnerContent: function () {},
                        prepareFrame: function (t) {
                          (this._mdf = !1),
                            this.prepareRenderableFrame(t),
                            this.prepareProperties(t, this.isInRange),
                            this.checkTransparency();
                        },
                        destroy: function () {
                          (this.innerElem = null), this.destroyBaseElement();
                        },
                      }),
                    ],
                    RenderableDOMElement
                  ),
                  extendPrototype(
                    [
                      BaseElement,
                      TransformElement,
                      SVGBaseElement,
                      HierarchyElement,
                      FrameElement,
                      RenderableDOMElement,
                    ],
                    IImageElement
                  ),
                  (IImageElement.prototype.createContent = function () {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    (this.innerElem = createNS("image")),
                      this.innerElem.setAttribute(
                        "width",
                        this.assetData.w + "px"
                      ),
                      this.innerElem.setAttribute(
                        "height",
                        this.assetData.h + "px"
                      ),
                      this.innerElem.setAttribute(
                        "preserveAspectRatio",
                        this.assetData.pr ||
                          this.globalData.renderConfig.imagePreserveAspectRatio
                      ),
                      this.innerElem.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "href",
                        t
                      ),
                      this.layerElement.appendChild(this.innerElem);
                  }),
                  (IImageElement.prototype.sourceRectAtTime = function () {
                    return this.sourceRect;
                  }),
                  (IShapeElement.prototype = {
                    addShapeToModifiers: function (t) {
                      var e,
                        r = this.shapeModifiers.length;
                      for (e = 0; e < r; e += 1)
                        this.shapeModifiers[e].addShape(t);
                    },
                    isShapeInAnimatedModifiers: function (t) {
                      for (var e = this.shapeModifiers.length; 0 < e; )
                        if (this.shapeModifiers[0].isAnimatedWithShape(t))
                          return !0;
                      return !1;
                    },
                    renderModifiers: function () {
                      if (this.shapeModifiers.length) {
                        var t,
                          e = this.shapes.length;
                        for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                        for (
                          t = (e = this.shapeModifiers.length) - 1;
                          t >= 0 &&
                          !this.shapeModifiers[t].processShapes(
                            this._isFirstFrame
                          );
                          t -= 1
                        );
                      }
                    },
                    searchProcessedElement: function (t) {
                      for (
                        var e = this.processedElements, r = 0, i = e.length;
                        r < i;

                      ) {
                        if (e[r].elem === t) return e[r].pos;
                        r += 1;
                      }
                      return 0;
                    },
                    addProcessedElement: function (t, e) {
                      for (var r = this.processedElements, i = r.length; i; )
                        if (r[(i -= 1)].elem === t) return void (r[i].pos = e);
                      r.push(new ProcessedElement(t, e));
                    },
                    prepareFrame: function (t) {
                      this.prepareRenderableFrame(t),
                        this.prepareProperties(t, this.isInRange);
                    },
                  });
                var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
                  lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
                function SVGShapeData(t, e, r) {
                  (this.caches = []),
                    (this.styles = []),
                    (this.transformers = t),
                    (this.lStr = ""),
                    (this.sh = r),
                    (this.lvl = e),
                    (this._isAnimated = !!r.k);
                  for (var i = 0, s = t.length; i < s; ) {
                    if (t[i].mProps.dynamicProperties.length) {
                      this._isAnimated = !0;
                      break;
                    }
                    i += 1;
                  }
                }
                function SVGStyleData(t, e) {
                  (this.data = t),
                    (this.type = t.ty),
                    (this.d = ""),
                    (this.lvl = e),
                    (this._mdf = !1),
                    (this.closed = !0 === t.hd),
                    (this.pElem = createNS("path")),
                    (this.msElem = null);
                }
                function DashProperty(t, e, r, i) {
                  (this.elem = t),
                    (this.frameId = -1),
                    (this.dataProps = createSizedArray(e.length)),
                    (this.renderer = r),
                    (this.k = !1),
                    (this.dashStr = ""),
                    (this.dashArray = createTypedArray(
                      "float32",
                      e.length ? e.length - 1 : 0
                    )),
                    (this.dashoffset = createTypedArray("float32", 1)),
                    this.initDynamicPropertyContainer(i);
                  var s,
                    a,
                    n = e.length || 0;
                  for (s = 0; s < n; s += 1)
                    (a = PropertyFactory.getProp(t, e[s].v, 0, 0, this)),
                      (this.k = a.k || this.k),
                      (this.dataProps[s] = { n: e[s].n, p: a });
                  this.k || this.getValue(!0), (this._isAnimated = this.k);
                }
                function SVGStrokeStyleData(t, e, r) {
                  this.initDynamicPropertyContainer(t),
                    (this.getValue = this.iterateDynamicProperties),
                    (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                    (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
                    (this.d = new DashProperty(t, e.d || {}, "svg", this)),
                    (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
                    (this.style = r),
                    (this._isAnimated = !!this._isAnimated);
                }
                function SVGFillStyleData(t, e, r) {
                  this.initDynamicPropertyContainer(t),
                    (this.getValue = this.iterateDynamicProperties),
                    (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                    (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
                    (this.style = r);
                }
                function SVGNoStyleData(t, e, r) {
                  this.initDynamicPropertyContainer(t),
                    (this.getValue = this.iterateDynamicProperties),
                    (this.style = r);
                }
                function GradientProperty(t, e, r) {
                  (this.data = e),
                    (this.c = createTypedArray("uint8c", 4 * e.p));
                  var i = e.k.k[0].s
                    ? e.k.k[0].s.length - 4 * e.p
                    : e.k.k.length - 4 * e.p;
                  (this.o = createTypedArray("float32", i)),
                    (this._cmdf = !1),
                    (this._omdf = !1),
                    (this._collapsable = this.checkCollapsable()),
                    (this._hasOpacity = i),
                    this.initDynamicPropertyContainer(r),
                    (this.prop = PropertyFactory.getProp(
                      t,
                      e.k,
                      1,
                      null,
                      this
                    )),
                    (this.k = this.prop.k),
                    this.getValue(!0);
                }
                function SVGGradientFillStyleData(t, e, r) {
                  this.initDynamicPropertyContainer(t),
                    (this.getValue = this.iterateDynamicProperties),
                    this.initGradientData(t, e, r);
                }
                function SVGGradientStrokeStyleData(t, e, r) {
                  this.initDynamicPropertyContainer(t),
                    (this.getValue = this.iterateDynamicProperties),
                    (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
                    (this.d = new DashProperty(t, e.d || {}, "svg", this)),
                    this.initGradientData(t, e, r),
                    (this._isAnimated = !!this._isAnimated);
                }
                function ShapeGroupData() {
                  (this.it = []),
                    (this.prevViewData = []),
                    (this.gr = createNS("g"));
                }
                function SVGTransformData(t, e, r) {
                  (this.transform = { mProps: t, op: e, container: r }),
                    (this.elements = []),
                    (this._isAnimated =
                      this.transform.mProps.dynamicProperties.length ||
                      this.transform.op.effectsSequence.length);
                }
                (SVGShapeData.prototype.setAsAnimated = function () {
                  this._isAnimated = !0;
                }),
                  (SVGStyleData.prototype.reset = function () {
                    (this.d = ""), (this._mdf = !1);
                  }),
                  (DashProperty.prototype.getValue = function (t) {
                    if (
                      (this.elem.globalData.frameId !== this.frameId || t) &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      (this._mdf = this._mdf || t),
                      this._mdf)
                    ) {
                      var e = 0,
                        r = this.dataProps.length;
                      for (
                        "svg" === this.renderer && (this.dashStr = ""), e = 0;
                        e < r;
                        e += 1
                      )
                        "o" !== this.dataProps[e].n
                          ? "svg" === this.renderer
                            ? (this.dashStr += " " + this.dataProps[e].p.v)
                            : (this.dashArray[e] = this.dataProps[e].p.v)
                          : (this.dashoffset[0] = this.dataProps[e].p.v);
                    }
                  }),
                  extendPrototype([DynamicPropertyContainer], DashProperty),
                  extendPrototype(
                    [DynamicPropertyContainer],
                    SVGStrokeStyleData
                  ),
                  extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
                  extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
                  (GradientProperty.prototype.comparePoints = function (t, e) {
                    for (var r = 0, i = this.o.length / 2; r < i; ) {
                      if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01)
                        return !1;
                      r += 1;
                    }
                    return !0;
                  }),
                  (GradientProperty.prototype.checkCollapsable = function () {
                    if (this.o.length / 2 !== this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                      for (var t = 0, e = this.data.k.k.length; t < e; ) {
                        if (
                          !this.comparePoints(this.data.k.k[t].s, this.data.p)
                        )
                          return !1;
                        t += 1;
                      }
                    else if (!this.comparePoints(this.data.k.k, this.data.p))
                      return !1;
                    return !0;
                  }),
                  (GradientProperty.prototype.getValue = function (t) {
                    if (
                      (this.prop.getValue(),
                      (this._mdf = !1),
                      (this._cmdf = !1),
                      (this._omdf = !1),
                      this.prop._mdf || t)
                    ) {
                      var e,
                        r,
                        i,
                        s = 4 * this.data.p;
                      for (e = 0; e < s; e += 1)
                        (r = e % 4 === 0 ? 100 : 255),
                          (i = Math.round(this.prop.v[e] * r)),
                          this.c[e] !== i &&
                            ((this.c[e] = i), (this._cmdf = !t));
                      if (this.o.length)
                        for (
                          s = this.prop.v.length, e = 4 * this.data.p;
                          e < s;
                          e += 1
                        )
                          (r = e % 2 === 0 ? 100 : 1),
                            (i =
                              e % 2 === 0
                                ? Math.round(100 * this.prop.v[e])
                                : this.prop.v[e]),
                            this.o[e - 4 * this.data.p] !== i &&
                              ((this.o[e - 4 * this.data.p] = i),
                              (this._omdf = !t));
                      this._mdf = !t;
                    }
                  }),
                  extendPrototype([DynamicPropertyContainer], GradientProperty),
                  (SVGGradientFillStyleData.prototype.initGradientData =
                    function (t, e, r) {
                      (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                        (this.s = PropertyFactory.getProp(
                          t,
                          e.s,
                          1,
                          null,
                          this
                        )),
                        (this.e = PropertyFactory.getProp(
                          t,
                          e.e,
                          1,
                          null,
                          this
                        )),
                        (this.h = PropertyFactory.getProp(
                          t,
                          e.h || { k: 0 },
                          0,
                          0.01,
                          this
                        )),
                        (this.a = PropertyFactory.getProp(
                          t,
                          e.a || { k: 0 },
                          0,
                          degToRads,
                          this
                        )),
                        (this.g = new GradientProperty(t, e.g, this)),
                        (this.style = r),
                        (this.stops = []),
                        this.setGradientData(r.pElem, e),
                        this.setGradientOpacity(e, r),
                        (this._isAnimated = !!this._isAnimated);
                    }),
                  (SVGGradientFillStyleData.prototype.setGradientData =
                    function (t, e) {
                      var r = createElementID(),
                        i = createNS(
                          1 === e.t ? "linearGradient" : "radialGradient"
                        );
                      i.setAttribute("id", r),
                        i.setAttribute("spreadMethod", "pad"),
                        i.setAttribute("gradientUnits", "userSpaceOnUse");
                      var s,
                        a,
                        n,
                        o = [];
                      for (n = 4 * e.g.p, a = 0; a < n; a += 4)
                        (s = createNS("stop")), i.appendChild(s), o.push(s);
                      t.setAttribute(
                        "gf" === e.ty ? "fill" : "stroke",
                        "url(" + getLocationHref() + "#" + r + ")"
                      ),
                        (this.gf = i),
                        (this.cst = o);
                    }),
                  (SVGGradientFillStyleData.prototype.setGradientOpacity =
                    function (t, e) {
                      if (this.g._hasOpacity && !this.g._collapsable) {
                        var r,
                          i,
                          s,
                          a = createNS("mask"),
                          n = createNS("path");
                        a.appendChild(n);
                        var o = createElementID(),
                          h = createElementID();
                        a.setAttribute("id", h);
                        var l = createNS(
                          1 === t.t ? "linearGradient" : "radialGradient"
                        );
                        l.setAttribute("id", o),
                          l.setAttribute("spreadMethod", "pad"),
                          l.setAttribute("gradientUnits", "userSpaceOnUse"),
                          (s = t.g.k.k[0].s
                            ? t.g.k.k[0].s.length
                            : t.g.k.k.length);
                        var p = this.stops;
                        for (i = 4 * t.g.p; i < s; i += 2)
                          (r = createNS("stop")).setAttribute(
                            "stop-color",
                            "rgb(255,255,255)"
                          ),
                            l.appendChild(r),
                            p.push(r);
                        n.setAttribute(
                          "gf" === t.ty ? "fill" : "stroke",
                          "url(" + getLocationHref() + "#" + o + ")"
                        ),
                          "gs" === t.ty &&
                            (n.setAttribute(
                              "stroke-linecap",
                              lineCapEnum[t.lc || 2]
                            ),
                            n.setAttribute(
                              "stroke-linejoin",
                              lineJoinEnum[t.lj || 2]
                            ),
                            1 === t.lj &&
                              n.setAttribute("stroke-miterlimit", t.ml)),
                          (this.of = l),
                          (this.ms = a),
                          (this.ost = p),
                          (this.maskId = h),
                          (e.msElem = n);
                      }
                    }),
                  extendPrototype(
                    [DynamicPropertyContainer],
                    SVGGradientFillStyleData
                  ),
                  extendPrototype(
                    [SVGGradientFillStyleData, DynamicPropertyContainer],
                    SVGGradientStrokeStyleData
                  );
                var buildShapeString = function (t, e, r, i) {
                    if (0 === e) return "";
                    var s,
                      a = t.o,
                      n = t.i,
                      o = t.v,
                      h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                    for (s = 1; s < e; s += 1)
                      h +=
                        " C" +
                        i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
                        " " +
                        i.applyToPointStringified(n[s][0], n[s][1]) +
                        " " +
                        i.applyToPointStringified(o[s][0], o[s][1]);
                    return (
                      r &&
                        e &&
                        ((h +=
                          " C" +
                          i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) +
                          " " +
                          i.applyToPointStringified(n[0][0], n[0][1]) +
                          " " +
                          i.applyToPointStringified(o[0][0], o[0][1])),
                        (h += "z")),
                      h
                    );
                  },
                  SVGElementsRenderer = (function () {
                    var t = new Matrix(),
                      e = new Matrix();
                    function r(t, e, r) {
                      (r || e.transform.op._mdf) &&
                        e.transform.container.setAttribute(
                          "opacity",
                          e.transform.op.v
                        ),
                        (r || e.transform.mProps._mdf) &&
                          e.transform.container.setAttribute(
                            "transform",
                            e.transform.mProps.v.to2dCSS()
                          );
                    }
                    function i() {}
                    function s(r, i, s) {
                      var a,
                        n,
                        o,
                        h,
                        l,
                        p,
                        f,
                        c,
                        m,
                        u,
                        d = i.styles.length,
                        y = i.lvl;
                      for (p = 0; p < d; p += 1) {
                        if (((h = i.sh._mdf || s), i.styles[p].lvl < y)) {
                          for (
                            c = e.reset(),
                              m = y - i.styles[p].lvl,
                              u = i.transformers.length - 1;
                            !h && m > 0;

                          )
                            (h = i.transformers[u].mProps._mdf || h),
                              (m -= 1),
                              (u -= 1);
                          if (h)
                            for (
                              m = y - i.styles[p].lvl,
                                u = i.transformers.length - 1;
                              m > 0;

                            )
                              c.multiply(i.transformers[u].mProps.v),
                                (m -= 1),
                                (u -= 1);
                        } else c = t;
                        if (((n = (f = i.sh.paths)._length), h)) {
                          for (o = "", a = 0; a < n; a += 1)
                            (l = f.shapes[a]) &&
                              l._length &&
                              (o += buildShapeString(l, l._length, l.c, c));
                          i.caches[p] = o;
                        } else o = i.caches[p];
                        (i.styles[p].d += !0 === r.hd ? "" : o),
                          (i.styles[p]._mdf = h || i.styles[p]._mdf);
                      }
                    }
                    function a(t, e, r) {
                      var i = e.style;
                      (e.c._mdf || r) &&
                        i.pElem.setAttribute(
                          "fill",
                          "rgb(" +
                            bmFloor(e.c.v[0]) +
                            "," +
                            bmFloor(e.c.v[1]) +
                            "," +
                            bmFloor(e.c.v[2]) +
                            ")"
                        ),
                        (e.o._mdf || r) &&
                          i.pElem.setAttribute("fill-opacity", e.o.v);
                    }
                    function n(t, e, r) {
                      o(t, e, r), h(0, e, r);
                    }
                    function o(t, e, r) {
                      var i,
                        s,
                        a,
                        n,
                        o,
                        h = e.gf,
                        l = e.g._hasOpacity,
                        p = e.s.v,
                        f = e.e.v;
                      if (e.o._mdf || r) {
                        var c =
                          "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(c, e.o.v);
                      }
                      if (e.s._mdf || r) {
                        var m = 1 === t.t ? "x1" : "cx",
                          u = "x1" === m ? "y1" : "cy";
                        h.setAttribute(m, p[0]),
                          h.setAttribute(u, p[1]),
                          l &&
                            !e.g._collapsable &&
                            (e.of.setAttribute(m, p[0]),
                            e.of.setAttribute(u, p[1]));
                      }
                      if (e.g._cmdf || r) {
                        i = e.cst;
                        var d = e.g.c;
                        for (a = i.length, s = 0; s < a; s += 1)
                          (n = i[s]).setAttribute("offset", d[4 * s] + "%"),
                            n.setAttribute(
                              "stop-color",
                              "rgb(" +
                                d[4 * s + 1] +
                                "," +
                                d[4 * s + 2] +
                                "," +
                                d[4 * s + 3] +
                                ")"
                            );
                      }
                      if (l && (e.g._omdf || r)) {
                        var y = e.g.o;
                        for (
                          a = (i = e.g._collapsable ? e.cst : e.ost).length,
                            s = 0;
                          s < a;
                          s += 1
                        )
                          (n = i[s]),
                            e.g._collapsable ||
                              n.setAttribute("offset", y[2 * s] + "%"),
                            n.setAttribute("stop-opacity", y[2 * s + 1]);
                      }
                      if (1 === t.t)
                        (e.e._mdf || r) &&
                          (h.setAttribute("x2", f[0]),
                          h.setAttribute("y2", f[1]),
                          l &&
                            !e.g._collapsable &&
                            (e.of.setAttribute("x2", f[0]),
                            e.of.setAttribute("y2", f[1])));
                      else if (
                        ((e.s._mdf || e.e._mdf || r) &&
                          ((o = Math.sqrt(
                            Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                          )),
                          h.setAttribute("r", o),
                          l && !e.g._collapsable && e.of.setAttribute("r", o)),
                        e.e._mdf || e.h._mdf || e.a._mdf || r)
                      ) {
                        o ||
                          (o = Math.sqrt(
                            Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)
                          ));
                        var g = Math.atan2(f[1] - p[1], f[0] - p[0]),
                          v = e.h.v;
                        v >= 1 ? (v = 0.99) : v <= -1 && (v = -0.99);
                        var b = o * v,
                          P = Math.cos(g + e.a.v) * b + p[0],
                          _ = Math.sin(g + e.a.v) * b + p[1];
                        h.setAttribute("fx", P),
                          h.setAttribute("fy", _),
                          l &&
                            !e.g._collapsable &&
                            (e.of.setAttribute("fx", P),
                            e.of.setAttribute("fy", _));
                      }
                    }
                    function h(t, e, r) {
                      var i = e.style,
                        s = e.d;
                      s &&
                        (s._mdf || r) &&
                        s.dashStr &&
                        (i.pElem.setAttribute("stroke-dasharray", s.dashStr),
                        i.pElem.setAttribute(
                          "stroke-dashoffset",
                          s.dashoffset[0]
                        )),
                        e.c &&
                          (e.c._mdf || r) &&
                          i.pElem.setAttribute(
                            "stroke",
                            "rgb(" +
                              bmFloor(e.c.v[0]) +
                              "," +
                              bmFloor(e.c.v[1]) +
                              "," +
                              bmFloor(e.c.v[2]) +
                              ")"
                          ),
                        (e.o._mdf || r) &&
                          i.pElem.setAttribute("stroke-opacity", e.o.v),
                        (e.w._mdf || r) &&
                          (i.pElem.setAttribute("stroke-width", e.w.v),
                          i.msElem &&
                            i.msElem.setAttribute("stroke-width", e.w.v));
                    }
                    return {
                      createRenderFunction: function (t) {
                        switch (t.ty) {
                          case "fl":
                            return a;
                          case "gf":
                            return o;
                          case "gs":
                            return n;
                          case "st":
                            return h;
                          case "sh":
                          case "el":
                          case "rc":
                          case "sr":
                            return s;
                          case "tr":
                            return r;
                          case "no":
                            return i;
                          default:
                            return null;
                        }
                      },
                    };
                  })();
                function SVGShapeElement(t, e, r) {
                  (this.shapes = []),
                    (this.shapesData = t.shapes),
                    (this.stylesList = []),
                    (this.shapeModifiers = []),
                    (this.itemsData = []),
                    (this.processedElements = []),
                    (this.animatedContents = []),
                    this.initElement(t, e, r),
                    (this.prevViewData = []);
                }
                function LetterProps(t, e, r, i, s, a) {
                  (this.o = t),
                    (this.sw = e),
                    (this.sc = r),
                    (this.fc = i),
                    (this.m = s),
                    (this.p = a),
                    (this._mdf = {
                      o: !0,
                      sw: !!e,
                      sc: !!r,
                      fc: !!i,
                      m: !0,
                      p: !0,
                    });
                }
                function TextProperty(t, e) {
                  (this._frameId = initialDefaultFrame),
                    (this.pv = ""),
                    (this.v = ""),
                    (this.kf = !1),
                    (this._isFirstFrame = !0),
                    (this._mdf = !1),
                    e.d &&
                      e.d.sid &&
                      (e.d = t.globalData.slotManager.getProp(e.d)),
                    (this.data = e),
                    (this.elem = t),
                    (this.comp = this.elem.comp),
                    (this.keysIndex = 0),
                    (this.canResize = !1),
                    (this.minimumFontSize = 1),
                    (this.effectsSequence = []),
                    (this.currentData = {
                      ascent: 0,
                      boxWidth: this.defaultBoxWidth,
                      f: "",
                      fStyle: "",
                      fWeight: "",
                      fc: "",
                      j: "",
                      justifyOffset: "",
                      l: [],
                      lh: 0,
                      lineWidths: [],
                      ls: "",
                      of: "",
                      s: "",
                      sc: "",
                      sw: 0,
                      t: 0,
                      tr: 0,
                      sz: 0,
                      ps: null,
                      fillColorAnim: !1,
                      strokeColorAnim: !1,
                      strokeWidthAnim: !1,
                      yOffset: 0,
                      finalSize: 0,
                      finalText: [],
                      finalLineHeight: 0,
                      __complete: !1,
                    }),
                    this.copyData(this.currentData, this.data.d.k[0].s),
                    this.searchProperty() ||
                      this.completeTextData(this.currentData);
                }
                extendPrototype(
                  [
                    BaseElement,
                    TransformElement,
                    SVGBaseElement,
                    IShapeElement,
                    HierarchyElement,
                    FrameElement,
                    RenderableDOMElement,
                  ],
                  SVGShapeElement
                ),
                  (SVGShapeElement.prototype.initSecondaryElement =
                    function () {}),
                  (SVGShapeElement.prototype.identityMatrix = new Matrix()),
                  (SVGShapeElement.prototype.buildExpressionInterface =
                    function () {}),
                  (SVGShapeElement.prototype.createContent = function () {
                    this.searchShapes(
                      this.shapesData,
                      this.itemsData,
                      this.prevViewData,
                      this.layerElement,
                      0,
                      [],
                      !0
                    ),
                      this.filterUniqueShapes();
                  }),
                  (SVGShapeElement.prototype.filterUniqueShapes = function () {
                    var t,
                      e,
                      r,
                      i,
                      s = this.shapes.length,
                      a = this.stylesList.length,
                      n = [],
                      o = !1;
                    for (r = 0; r < a; r += 1) {
                      for (
                        i = this.stylesList[r], o = !1, n.length = 0, t = 0;
                        t < s;
                        t += 1
                      )
                        -1 !== (e = this.shapes[t]).styles.indexOf(i) &&
                          (n.push(e), (o = e._isAnimated || o));
                      n.length > 1 && o && this.setShapesAsAnimated(n);
                    }
                  }),
                  (SVGShapeElement.prototype.setShapesAsAnimated = function (
                    t
                  ) {
                    var e,
                      r = t.length;
                    for (e = 0; e < r; e += 1) t[e].setAsAnimated();
                  }),
                  (SVGShapeElement.prototype.createStyleElement = function (
                    t,
                    e
                  ) {
                    var r,
                      i = new SVGStyleData(t, e),
                      s = i.pElem;
                    return (
                      "st" === t.ty
                        ? (r = new SVGStrokeStyleData(this, t, i))
                        : "fl" === t.ty
                        ? (r = new SVGFillStyleData(this, t, i))
                        : "gf" === t.ty || "gs" === t.ty
                        ? ((r = new (
                            "gf" === t.ty
                              ? SVGGradientFillStyleData
                              : SVGGradientStrokeStyleData
                          )(this, t, i)),
                          this.globalData.defs.appendChild(r.gf),
                          r.maskId &&
                            (this.globalData.defs.appendChild(r.ms),
                            this.globalData.defs.appendChild(r.of),
                            s.setAttribute(
                              "mask",
                              "url(" + getLocationHref() + "#" + r.maskId + ")"
                            )))
                        : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)),
                      ("st" === t.ty || "gs" === t.ty) &&
                        (s.setAttribute(
                          "stroke-linecap",
                          lineCapEnum[t.lc || 2]
                        ),
                        s.setAttribute(
                          "stroke-linejoin",
                          lineJoinEnum[t.lj || 2]
                        ),
                        s.setAttribute("fill-opacity", "0"),
                        1 === t.lj &&
                          s.setAttribute("stroke-miterlimit", t.ml)),
                      2 === t.r && s.setAttribute("fill-rule", "evenodd"),
                      t.ln && s.setAttribute("id", t.ln),
                      t.cl && s.setAttribute("class", t.cl),
                      t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)),
                      this.stylesList.push(i),
                      this.addToAnimatedContents(t, r),
                      r
                    );
                  }),
                  (SVGShapeElement.prototype.createGroupElement = function (t) {
                    var e = new ShapeGroupData();
                    return (
                      t.ln && e.gr.setAttribute("id", t.ln),
                      t.cl && e.gr.setAttribute("class", t.cl),
                      t.bm &&
                        (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
                      e
                    );
                  }),
                  (SVGShapeElement.prototype.createTransformElement = function (
                    t,
                    e
                  ) {
                    var r = TransformPropertyFactory.getTransformProperty(
                        this,
                        t,
                        this
                      ),
                      i = new SVGTransformData(r, r.o, e);
                    return this.addToAnimatedContents(t, i), i;
                  }),
                  (SVGShapeElement.prototype.createShapeElement = function (
                    t,
                    e,
                    r
                  ) {
                    var i = 4;
                    "rc" === t.ty
                      ? (i = 5)
                      : "el" === t.ty
                      ? (i = 6)
                      : "sr" === t.ty && (i = 7);
                    var s = new SVGShapeData(
                      e,
                      r,
                      ShapePropertyFactory.getShapeProp(this, t, i, this)
                    );
                    return (
                      this.shapes.push(s),
                      this.addShapeToModifiers(s),
                      this.addToAnimatedContents(t, s),
                      s
                    );
                  }),
                  (SVGShapeElement.prototype.addToAnimatedContents = function (
                    t,
                    e
                  ) {
                    for (var r = 0, i = this.animatedContents.length; r < i; ) {
                      if (this.animatedContents[r].element === e) return;
                      r += 1;
                    }
                    this.animatedContents.push({
                      fn: SVGElementsRenderer.createRenderFunction(t),
                      element: e,
                      data: t,
                    });
                  }),
                  (SVGShapeElement.prototype.setElementStyles = function (t) {
                    var e,
                      r = t.styles,
                      i = this.stylesList.length;
                    for (e = 0; e < i; e += 1)
                      this.stylesList[e].closed || r.push(this.stylesList[e]);
                  }),
                  (SVGShapeElement.prototype.reloadShapes = function () {
                    this._isFirstFrame = !0;
                    var t,
                      e = this.itemsData.length;
                    for (t = 0; t < e; t += 1)
                      this.prevViewData[t] = this.itemsData[t];
                    for (
                      this.searchShapes(
                        this.shapesData,
                        this.itemsData,
                        this.prevViewData,
                        this.layerElement,
                        0,
                        [],
                        !0
                      ),
                        this.filterUniqueShapes(),
                        e = this.dynamicProperties.length,
                        t = 0;
                      t < e;
                      t += 1
                    )
                      this.dynamicProperties[t].getValue();
                    this.renderModifiers();
                  }),
                  (SVGShapeElement.prototype.searchShapes = function (
                    t,
                    e,
                    r,
                    i,
                    s,
                    a,
                    n
                  ) {
                    var o,
                      h,
                      l,
                      p,
                      f,
                      c,
                      m = [].concat(a),
                      u = t.length - 1,
                      d = [],
                      y = [];
                    for (o = u; o >= 0; o -= 1) {
                      if (
                        ((c = this.searchProcessedElement(t[o]))
                          ? (e[o] = r[c - 1])
                          : (t[o]._render = n),
                        "fl" === t[o].ty ||
                          "st" === t[o].ty ||
                          "gf" === t[o].ty ||
                          "gs" === t[o].ty ||
                          "no" === t[o].ty)
                      )
                        c
                          ? (e[o].style.closed = !1)
                          : (e[o] = this.createStyleElement(t[o], s)),
                          t[o]._render &&
                            e[o].style.pElem.parentNode !== i &&
                            i.appendChild(e[o].style.pElem),
                          d.push(e[o].style);
                      else if ("gr" === t[o].ty) {
                        if (c)
                          for (l = e[o].it.length, h = 0; h < l; h += 1)
                            e[o].prevViewData[h] = e[o].it[h];
                        else e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(
                          t[o].it,
                          e[o].it,
                          e[o].prevViewData,
                          e[o].gr,
                          s + 1,
                          m,
                          n
                        ),
                          t[o]._render &&
                            e[o].gr.parentNode !== i &&
                            i.appendChild(e[o].gr);
                      } else
                        "tr" === t[o].ty
                          ? (c || (e[o] = this.createTransformElement(t[o], i)),
                            (p = e[o].transform),
                            m.push(p))
                          : "sh" === t[o].ty ||
                            "rc" === t[o].ty ||
                            "el" === t[o].ty ||
                            "sr" === t[o].ty
                          ? (c || (e[o] = this.createShapeElement(t[o], m, s)),
                            this.setElementStyles(e[o]))
                          : "tm" === t[o].ty ||
                            "rd" === t[o].ty ||
                            "ms" === t[o].ty ||
                            "pb" === t[o].ty ||
                            "zz" === t[o].ty ||
                            "op" === t[o].ty
                          ? (c
                              ? ((f = e[o]).closed = !1)
                              : ((f = ShapeModifiers.getModifier(t[o].ty)).init(
                                  this,
                                  t[o]
                                ),
                                (e[o] = f),
                                this.shapeModifiers.push(f)),
                            y.push(f))
                          : "rp" === t[o].ty &&
                            (c
                              ? ((f = e[o]).closed = !0)
                              : ((f = ShapeModifiers.getModifier(t[o].ty)),
                                (e[o] = f),
                                f.init(this, t, o, e),
                                this.shapeModifiers.push(f),
                                (n = !1)),
                            y.push(f));
                      this.addProcessedElement(t[o], o + 1);
                    }
                    for (u = d.length, o = 0; o < u; o += 1) d[o].closed = !0;
                    for (u = y.length, o = 0; o < u; o += 1) y[o].closed = !0;
                  }),
                  (SVGShapeElement.prototype.renderInnerContent = function () {
                    this.renderModifiers();
                    var t,
                      e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)
                      (this.stylesList[t]._mdf || this._isFirstFrame) &&
                        (this.stylesList[t].msElem &&
                          (this.stylesList[t].msElem.setAttribute(
                            "d",
                            this.stylesList[t].d
                          ),
                          (this.stylesList[t].d =
                            "M0 0" + this.stylesList[t].d)),
                        this.stylesList[t].pElem.setAttribute(
                          "d",
                          this.stylesList[t].d || "M0 0"
                        ));
                  }),
                  (SVGShapeElement.prototype.renderShape = function () {
                    var t,
                      e,
                      r = this.animatedContents.length;
                    for (t = 0; t < r; t += 1)
                      (e = this.animatedContents[t]),
                        (this._isFirstFrame || e.element._isAnimated) &&
                          !0 !== e.data &&
                          e.fn(e.data, e.element, this._isFirstFrame);
                  }),
                  (SVGShapeElement.prototype.destroy = function () {
                    this.destroyBaseElement(),
                      (this.shapesData = null),
                      (this.itemsData = null);
                  }),
                  (LetterProps.prototype.update = function (t, e, r, i, s, a) {
                    (this._mdf.o = !1),
                      (this._mdf.sw = !1),
                      (this._mdf.sc = !1),
                      (this._mdf.fc = !1),
                      (this._mdf.m = !1),
                      (this._mdf.p = !1);
                    var n = !1;
                    return (
                      this.o !== t &&
                        ((this.o = t), (this._mdf.o = !0), (n = !0)),
                      this.sw !== e &&
                        ((this.sw = e), (this._mdf.sw = !0), (n = !0)),
                      this.sc !== r &&
                        ((this.sc = r), (this._mdf.sc = !0), (n = !0)),
                      this.fc !== i &&
                        ((this.fc = i), (this._mdf.fc = !0), (n = !0)),
                      this.m !== s &&
                        ((this.m = s), (this._mdf.m = !0), (n = !0)),
                      a.length &&
                        (this.p[0] !== a[0] ||
                          this.p[1] !== a[1] ||
                          this.p[4] !== a[4] ||
                          this.p[5] !== a[5] ||
                          this.p[12] !== a[12] ||
                          this.p[13] !== a[13]) &&
                        ((this.p = a), (this._mdf.p = !0), (n = !0)),
                      n
                    );
                  }),
                  (TextProperty.prototype.defaultBoxWidth = [0, 0]),
                  (TextProperty.prototype.copyData = function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                    return t;
                  }),
                  (TextProperty.prototype.setCurrentData = function (t) {
                    t.__complete || this.completeTextData(t),
                      (this.currentData = t),
                      (this.currentData.boxWidth =
                        this.currentData.boxWidth || this.defaultBoxWidth),
                      (this._mdf = !0);
                  }),
                  (TextProperty.prototype.searchProperty = function () {
                    return this.searchKeyframes();
                  }),
                  (TextProperty.prototype.searchKeyframes = function () {
                    return (
                      (this.kf = this.data.d.k.length > 1),
                      this.kf &&
                        this.addEffect(this.getKeyframeValue.bind(this)),
                      this.kf
                    );
                  }),
                  (TextProperty.prototype.addEffect = function (t) {
                    this.effectsSequence.push(t),
                      this.elem.addDynamicProperty(this);
                  }),
                  (TextProperty.prototype.getValue = function (t) {
                    if (
                      (this.elem.globalData.frameId !== this.frameId &&
                        this.effectsSequence.length) ||
                      t
                    ) {
                      this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                      var e = this.currentData,
                        r = this.keysIndex;
                      if (this.lock)
                        return void this.setCurrentData(this.currentData);
                      (this.lock = !0), (this._mdf = !1);
                      var i,
                        s = this.effectsSequence.length,
                        a = t || this.data.d.k[this.keysIndex].s;
                      for (i = 0; i < s; i += 1)
                        a =
                          r !== this.keysIndex
                            ? this.effectsSequence[i](a, a.t)
                            : this.effectsSequence[i](this.currentData, a.t);
                      e !== a && this.setCurrentData(a),
                        (this.v = this.currentData),
                        (this.pv = this.v),
                        (this.lock = !1),
                        (this.frameId = this.elem.globalData.frameId);
                    }
                  }),
                  (TextProperty.prototype.getKeyframeValue = function () {
                    for (
                      var t = this.data.d.k,
                        e = this.elem.comp.renderedFrame,
                        r = 0,
                        i = t.length;
                      r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);

                    )
                      r += 1;
                    return (
                      this.keysIndex !== r && (this.keysIndex = r),
                      this.data.d.k[this.keysIndex].s
                    );
                  }),
                  (TextProperty.prototype.buildFinalText = function (t) {
                    for (
                      var e,
                        r,
                        i = [],
                        s = 0,
                        a = t.length,
                        n = !1,
                        o = !1,
                        h = "";
                      s < a;

                    )
                      (n = o),
                        (o = !1),
                        (e = t.charCodeAt(s)),
                        (h = t.charAt(s)),
                        FontManager.isCombinedCharacter(e)
                          ? (n = !0)
                          : e >= 55296 && e <= 56319
                          ? FontManager.isRegionalFlag(t, s)
                            ? (h = t.substr(s, 14))
                            : (r = t.charCodeAt(s + 1)) >= 56320 &&
                              r <= 57343 &&
                              (FontManager.isModifier(e, r)
                                ? ((h = t.substr(s, 2)), (n = !0))
                                : (h = FontManager.isFlagEmoji(t.substr(s, 4))
                                    ? t.substr(s, 4)
                                    : t.substr(s, 2)))
                          : e > 56319
                          ? ((r = t.charCodeAt(s + 1)),
                            FontManager.isVariationSelector(e) && (n = !0))
                          : FontManager.isZeroWidthJoiner(e) &&
                            ((n = !0), (o = !0)),
                        n ? ((i[i.length - 1] += h), (n = !1)) : i.push(h),
                        (s += h.length);
                    return i;
                  }),
                  (TextProperty.prototype.completeTextData = function (t) {
                    t.__complete = !0;
                    var e,
                      r,
                      i,
                      s,
                      a,
                      n,
                      o,
                      h = this.elem.globalData.fontManager,
                      l = this.data,
                      p = [],
                      f = 0,
                      c = l.m.g,
                      m = 0,
                      u = 0,
                      d = 0,
                      y = [],
                      g = 0,
                      v = 0,
                      b = h.getFontByName(t.f),
                      P = 0,
                      _ = getFontProperties(b);
                    (t.fWeight = _.weight),
                      (t.fStyle = _.style),
                      (t.finalSize = t.s),
                      (t.finalText = this.buildFinalText(t.t)),
                      (r = t.finalText.length),
                      (t.finalLineHeight = t.lh);
                    var S,
                      E = (t.tr / 1e3) * t.finalSize;
                    if (t.sz)
                      for (var x, A, M = !0, T = t.sz[0], k = t.sz[1]; M; ) {
                        (x = 0),
                          (g = 0),
                          (r = (A = this.buildFinalText(t.t)).length),
                          (E = (t.tr / 1e3) * t.finalSize);
                        var F = -1;
                        for (e = 0; e < r; e += 1)
                          (S = A[e].charCodeAt(0)),
                            (i = !1),
                            " " === A[e]
                              ? (F = e)
                              : (13 === S || 3 === S) &&
                                ((g = 0),
                                (i = !0),
                                (x += t.finalLineHeight || 1.2 * t.finalSize)),
                            h.chars
                              ? ((o = h.getCharData(A[e], b.fStyle, b.fFamily)),
                                (P = i ? 0 : (o.w * t.finalSize) / 100))
                              : (P = h.measureText(A[e], t.f, t.finalSize)),
                            g + P > T && " " !== A[e]
                              ? (-1 === F ? (r += 1) : (e = F),
                                (x += t.finalLineHeight || 1.2 * t.finalSize),
                                A.splice(e, F === e ? 1 : 0, "\r"),
                                (F = -1),
                                (g = 0))
                              : ((g += P), (g += E));
                        (x += (b.ascent * t.finalSize) / 100),
                          this.canResize &&
                          t.finalSize > this.minimumFontSize &&
                          k < x
                            ? ((t.finalSize -= 1),
                              (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                            : ((t.finalText = A),
                              (r = t.finalText.length),
                              (M = !1));
                      }
                    (g = -E), (P = 0);
                    var I,
                      D = 0;
                    for (e = 0; e < r; e += 1)
                      if (
                        ((i = !1),
                        13 === (S = (I = t.finalText[e]).charCodeAt(0)) ||
                        3 === S
                          ? ((D = 0),
                            y.push(g),
                            (v = g > v ? g : v),
                            (g = -2 * E),
                            (s = ""),
                            (i = !0),
                            (d += 1))
                          : (s = I),
                        h.chars
                          ? ((o = h.getCharData(
                              I,
                              b.fStyle,
                              h.getFontByName(t.f).fFamily
                            )),
                            (P = i ? 0 : (o.w * t.finalSize) / 100))
                          : (P = h.measureText(s, t.f, t.finalSize)),
                        " " === I ? (D += P + E) : ((g += P + E + D), (D = 0)),
                        p.push({
                          l: P,
                          an: P,
                          add: m,
                          n: i,
                          anIndexes: [],
                          val: s,
                          line: d,
                          animatorJustifyOffset: 0,
                        }),
                        2 == c)
                      ) {
                        if (((m += P), "" === s || " " === s || e === r - 1)) {
                          for (("" === s || " " === s) && (m -= P); u <= e; )
                            (p[u].an = m),
                              (p[u].ind = f),
                              (p[u].extra = P),
                              (u += 1);
                          (f += 1), (m = 0);
                        }
                      } else if (3 == c) {
                        if (((m += P), "" === s || e === r - 1)) {
                          for ("" === s && (m -= P); u <= e; )
                            (p[u].an = m),
                              (p[u].ind = f),
                              (p[u].extra = P),
                              (u += 1);
                          (m = 0), (f += 1);
                        }
                      } else (p[f].ind = f), (p[f].extra = 0), (f += 1);
                    if (((t.l = p), (v = g > v ? g : v), y.push(g), t.sz))
                      (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
                    else
                      switch (((t.boxWidth = v), t.j)) {
                        case 1:
                          t.justifyOffset = -t.boxWidth;
                          break;
                        case 2:
                          t.justifyOffset = -t.boxWidth / 2;
                          break;
                        default:
                          t.justifyOffset = 0;
                      }
                    t.lineWidths = y;
                    var C,
                      w,
                      V = l.a;
                    n = V.length;
                    var R,
                      L,
                      G = [];
                    for (a = 0; a < n; a += 1) {
                      for (
                        (C = V[a]).a.sc && (t.strokeColorAnim = !0),
                          C.a.sw && (t.strokeWidthAnim = !0),
                          (C.a.fc || C.a.fh || C.a.fs || C.a.fb) &&
                            (t.fillColorAnim = !0),
                          L = 0,
                          R = C.s.b,
                          e = 0;
                        e < r;
                        e += 1
                      )
                        ((w = p[e]).anIndexes[a] = L),
                          ((1 == R && "" !== w.val) ||
                            (2 == R && "" !== w.val && " " !== w.val) ||
                            (3 == R && (w.n || " " == w.val || e == r - 1)) ||
                            (4 == R && (w.n || e == r - 1))) &&
                            (1 === C.s.rn && G.push(L), (L += 1));
                      l.a[a].s.totalChars = L;
                      var B,
                        z = -1;
                      if (1 === C.s.rn)
                        for (e = 0; e < r; e += 1)
                          z != (w = p[e]).anIndexes[a] &&
                            ((z = w.anIndexes[a]),
                            (B = G.splice(
                              Math.floor(Math.random() * G.length),
                              1
                            )[0])),
                            (w.anIndexes[a] = B);
                    }
                    (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                      (t.ls = t.ls || 0),
                      (t.ascent = (b.ascent * t.finalSize) / 100);
                  }),
                  (TextProperty.prototype.updateDocumentData = function (t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var r = this.copyData({}, this.data.d.k[e].s);
                    (r = this.copyData(r, t)),
                      (this.data.d.k[e].s = r),
                      this.recalculate(e),
                      this.setCurrentData(r),
                      this.elem.addDynamicProperty(this);
                  }),
                  (TextProperty.prototype.recalculate = function (t) {
                    var e = this.data.d.k[t].s;
                    (e.__complete = !1),
                      (this.keysIndex = 0),
                      (this._isFirstFrame = !0),
                      this.getValue(e);
                  }),
                  (TextProperty.prototype.canResizeFont = function (t) {
                    (this.canResize = t),
                      this.recalculate(this.keysIndex),
                      this.elem.addDynamicProperty(this);
                  }),
                  (TextProperty.prototype.setMinimumFontSize = function (t) {
                    (this.minimumFontSize = Math.floor(t) || 1),
                      this.recalculate(this.keysIndex),
                      this.elem.addDynamicProperty(this);
                  });
                var TextSelectorProp = (function () {
                  var t = Math.max,
                    e = Math.min,
                    r = Math.floor;
                  function i(t, e) {
                    (this._currentTextLength = -1),
                      (this.k = !1),
                      (this.data = e),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.finalS = 0),
                      (this.finalE = 0),
                      this.initDynamicPropertyContainer(t),
                      (this.s = PropertyFactory.getProp(
                        t,
                        e.s || { k: 0 },
                        0,
                        0,
                        this
                      )),
                      (this.e =
                        "e" in e
                          ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                          : { v: 100 }),
                      (this.o = PropertyFactory.getProp(
                        t,
                        e.o || { k: 0 },
                        0,
                        0,
                        this
                      )),
                      (this.xe = PropertyFactory.getProp(
                        t,
                        e.xe || { k: 0 },
                        0,
                        0,
                        this
                      )),
                      (this.ne = PropertyFactory.getProp(
                        t,
                        e.ne || { k: 0 },
                        0,
                        0,
                        this
                      )),
                      (this.sm = PropertyFactory.getProp(
                        t,
                        e.sm || { k: 100 },
                        0,
                        0,
                        this
                      )),
                      (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
                      this.dynamicProperties.length || this.getValue();
                  }
                  return (
                    (i.prototype = {
                      getMult: function (i) {
                        this._currentTextLength !==
                          this.elem.textProperty.currentData.l.length &&
                          this.getValue();
                        var s = 0,
                          a = 0,
                          n = 1,
                          o = 1;
                        this.ne.v > 0
                          ? (s = this.ne.v / 100)
                          : (a = -this.ne.v / 100),
                          this.xe.v > 0
                            ? (n = 1 - this.xe.v / 100)
                            : (o = 1 + this.xe.v / 100);
                        var h = BezierFactory.getBezierEasing(s, a, n, o).get,
                          l = 0,
                          p = this.finalS,
                          f = this.finalE,
                          c = this.data.sh;
                        if (2 === c)
                          l = h(
                            (l =
                              f === p
                                ? i >= f
                                  ? 1
                                  : 0
                                : t(0, e(0.5 / (f - p) + (i - p) / (f - p), 1)))
                          );
                        else if (3 === c)
                          l = h(
                            (l =
                              f === p
                                ? i >= f
                                  ? 0
                                  : 1
                                : 1 -
                                  t(0, e(0.5 / (f - p) + (i - p) / (f - p), 1)))
                          );
                        else if (4 === c)
                          f === p
                            ? (l = 0)
                            : (l = t(
                                0,
                                e(0.5 / (f - p) + (i - p) / (f - p), 1)
                              )) < 0.5
                            ? (l *= 2)
                            : (l = 1 - 2 * (l - 0.5)),
                            (l = h(l));
                        else if (5 === c) {
                          if (f === p) l = 0;
                          else {
                            var m = f - p,
                              u = -m / 2 + (i = e(t(0, i + 0.5 - p), f - p)),
                              d = m / 2;
                            l = Math.sqrt(1 - (u * u) / (d * d));
                          }
                          l = h(l);
                        } else
                          6 === c
                            ? (f === p
                                ? (l = 0)
                                : ((i = e(t(0, i + 0.5 - p), f - p)),
                                  (l =
                                    (1 +
                                      Math.cos(
                                        Math.PI + (2 * Math.PI * i) / (f - p)
                                      )) /
                                    2)),
                              (l = h(l)))
                            : (i >= r(p) &&
                                (l = t(
                                  0,
                                  e(i - p < 0 ? e(f, 1) - (p - i) : f - i, 1)
                                )),
                              (l = h(l)));
                        if (100 !== this.sm.v) {
                          var y = 0.01 * this.sm.v;
                          0 === y && (y = 1e-8);
                          var g = 0.5 - 0.5 * y;
                          l < g ? (l = 0) : (l = (l - g) / y) > 1 && (l = 1);
                        }
                        return l * this.a.v;
                      },
                      getValue: function (t) {
                        this.iterateDynamicProperties(),
                          (this._mdf = t || this._mdf),
                          (this._currentTextLength =
                            this.elem.textProperty.currentData.l.length || 0),
                          t &&
                            2 === this.data.r &&
                            (this.e.v = this._currentTextLength);
                        var e =
                            2 === this.data.r ? 1 : 100 / this.data.totalChars,
                          r = this.o.v / e,
                          i = this.s.v / e + r,
                          s = this.e.v / e + r;
                        if (i > s) {
                          var a = i;
                          (i = s), (s = a);
                        }
                        (this.finalS = i), (this.finalE = s);
                      },
                    }),
                    extendPrototype([DynamicPropertyContainer], i),
                    {
                      getTextSelectorProp: function (t, e, r) {
                        return new i(t, e);
                      },
                    }
                  );
                })();
                function TextAnimatorDataProperty(t, e, r) {
                  var i = { propType: !1 },
                    s = PropertyFactory.getProp,
                    a = e.a;
                  (this.a = {
                    r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                    rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                    ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                    sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                    sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                    s: a.s ? s(t, a.s, 1, 0.01, r) : i,
                    a: a.a ? s(t, a.a, 1, 0, r) : i,
                    o: a.o ? s(t, a.o, 0, 0.01, r) : i,
                    p: a.p ? s(t, a.p, 1, 0, r) : i,
                    sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                    sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                    fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                    fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                    fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i,
                    fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i,
                    t: a.t ? s(t, a.t, 0, 0, r) : i,
                  }),
                    (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
                    (this.s.t = e.s.t);
                }
                function TextAnimatorProperty(t, e, r) {
                  (this._isFirstFrame = !0),
                    (this._hasMaskedPath = !1),
                    (this._frameId = -1),
                    (this._textData = t),
                    (this._renderType = e),
                    (this._elem = r),
                    (this._animatorsData = createSizedArray(
                      this._textData.a.length
                    )),
                    (this._pathData = {}),
                    (this._moreOptions = { alignment: {} }),
                    (this.renderedLetters = []),
                    (this.lettersChangedFlag = !1),
                    this.initDynamicPropertyContainer(r);
                }
                function ITextElement() {}
                (TextAnimatorProperty.prototype.searchProperties = function () {
                  var t,
                    e,
                    r = this._textData.a.length,
                    i = PropertyFactory.getProp;
                  for (t = 0; t < r; t += 1)
                    (e = this._textData.a[t]),
                      (this._animatorsData[t] = new TextAnimatorDataProperty(
                        this._elem,
                        e,
                        this
                      ));
                  this._textData.p && "m" in this._textData.p
                    ? ((this._pathData = {
                        a: i(this._elem, this._textData.p.a, 0, 0, this),
                        f: i(this._elem, this._textData.p.f, 0, 0, this),
                        l: i(this._elem, this._textData.p.l, 0, 0, this),
                        r: i(this._elem, this._textData.p.r, 0, 0, this),
                        p: i(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(
                          this._textData.p.m
                        ),
                      }),
                      (this._hasMaskedPath = !0))
                    : (this._hasMaskedPath = !1),
                    (this._moreOptions.alignment = i(
                      this._elem,
                      this._textData.m.a,
                      1,
                      0,
                      this
                    ));
                }),
                  (TextAnimatorProperty.prototype.getMeasures = function (
                    t,
                    e
                  ) {
                    if (
                      ((this.lettersChangedFlag = e),
                      this._mdf ||
                        this._isFirstFrame ||
                        e ||
                        (this._hasMaskedPath && this._pathData.m._mdf))
                    ) {
                      this._isFirstFrame = !1;
                      var r,
                        i,
                        s,
                        a,
                        n,
                        o,
                        h,
                        l,
                        p,
                        f,
                        c,
                        m,
                        u,
                        d,
                        y,
                        g,
                        v,
                        b,
                        P,
                        _ = this._moreOptions.alignment.v,
                        S = this._animatorsData,
                        E = this._textData,
                        x = this.mHelper,
                        A = this._renderType,
                        M = this.renderedLetters.length,
                        T = t.l;
                      if (this._hasMaskedPath) {
                        if (
                          ((P = this._pathData.m),
                          !this._pathData.n || this._pathData._mdf)
                        ) {
                          var k,
                            F = P.v;
                          for (
                            this._pathData.r.v && (F = F.reverse()),
                              n = { tLength: 0, segments: [] },
                              a = F._length - 1,
                              g = 0,
                              s = 0;
                            s < a;
                            s += 1
                          )
                            (k = bez.buildBezierData(
                              F.v[s],
                              F.v[s + 1],
                              [F.o[s][0] - F.v[s][0], F.o[s][1] - F.v[s][1]],
                              [
                                F.i[s + 1][0] - F.v[s + 1][0],
                                F.i[s + 1][1] - F.v[s + 1][1],
                              ]
                            )),
                              (n.tLength += k.segmentLength),
                              n.segments.push(k),
                              (g += k.segmentLength);
                          (s = a),
                            P.v.c &&
                              ((k = bez.buildBezierData(
                                F.v[s],
                                F.v[0],
                                [F.o[s][0] - F.v[s][0], F.o[s][1] - F.v[s][1]],
                                [F.i[0][0] - F.v[0][0], F.i[0][1] - F.v[0][1]]
                              )),
                              (n.tLength += k.segmentLength),
                              n.segments.push(k),
                              (g += k.segmentLength)),
                            (this._pathData.pi = n);
                        }
                        if (
                          ((n = this._pathData.pi),
                          (o = this._pathData.f.v),
                          (c = 0),
                          (f = 1),
                          (l = 0),
                          (p = !0),
                          (d = n.segments),
                          o < 0 && P.v.c)
                        )
                          for (
                            n.tLength < Math.abs(o) &&
                              (o = -Math.abs(o) % n.tLength),
                              f = (u = d[(c = d.length - 1)].points).length - 1;
                            o < 0;

                          )
                            (o += u[f].partialLength),
                              (f -= 1) < 0 &&
                                (f = (u = d[(c -= 1)].points).length - 1);
                        (m = (u = d[c].points)[f - 1]),
                          (y = (h = u[f]).partialLength);
                      }
                      (a = T.length), (r = 0), (i = 0);
                      var I,
                        D,
                        C,
                        w,
                        V = 1.2 * t.finalSize * 0.714,
                        R = !0;
                      C = S.length;
                      var L,
                        G,
                        B,
                        z,
                        O,
                        N,
                        j,
                        q,
                        H,
                        W,
                        $,
                        X,
                        Z,
                        Y = -1,
                        K = o,
                        J = c,
                        U = f,
                        Q = -1,
                        tt = "",
                        et = this.defaultPropsArray;
                      if (2 === t.j || 1 === t.j) {
                        var rt = 0,
                          it = 0,
                          st = 2 === t.j ? -0.5 : -1,
                          at = 0,
                          nt = !0;
                        for (s = 0; s < a; s += 1)
                          if (T[s].n) {
                            for (rt && (rt += it); at < s; )
                              (T[at].animatorJustifyOffset = rt), (at += 1);
                            (rt = 0), (nt = !0);
                          } else {
                            for (D = 0; D < C; D += 1)
                              (I = S[D].a).t.propType &&
                                (nt && 2 === t.j && (it += I.t.v * st),
                                (L = S[D].s.getMult(
                                  T[s].anIndexes[D],
                                  E.a[D].s.totalChars
                                )).length
                                  ? (rt += I.t.v * L[0] * st)
                                  : (rt += I.t.v * L * st));
                            nt = !1;
                          }
                        for (rt && (rt += it); at < s; )
                          (T[at].animatorJustifyOffset = rt), (at += 1);
                      }
                      for (s = 0; s < a; s += 1) {
                        if ((x.reset(), (O = 1), T[s].n))
                          (r = 0),
                            (i += t.yOffset),
                            (i += R ? 1 : 0),
                            (o = K),
                            (R = !1),
                            this._hasMaskedPath &&
                              ((f = U),
                              (m = (u = d[(c = J)].points)[f - 1]),
                              (y = (h = u[f]).partialLength),
                              (l = 0)),
                            (tt = ""),
                            (X = ""),
                            (W = ""),
                            (Z = ""),
                            (et = this.defaultPropsArray);
                        else {
                          if (this._hasMaskedPath) {
                            if (Q !== T[s].line) {
                              switch (t.j) {
                                case 1:
                                  o += g - t.lineWidths[T[s].line];
                                  break;
                                case 2:
                                  o += (g - t.lineWidths[T[s].line]) / 2;
                              }
                              Q = T[s].line;
                            }
                            Y !== T[s].ind &&
                              (T[Y] && (o += T[Y].extra),
                              (o += T[s].an / 2),
                              (Y = T[s].ind)),
                              (o += _[0] * T[s].an * 0.005);
                            var ot = 0;
                            for (D = 0; D < C; D += 1)
                              (I = S[D].a).p.propType &&
                                ((L = S[D].s.getMult(
                                  T[s].anIndexes[D],
                                  E.a[D].s.totalChars
                                )).length
                                  ? (ot += I.p.v[0] * L[0])
                                  : (ot += I.p.v[0] * L)),
                                I.a.propType &&
                                  ((L = S[D].s.getMult(
                                    T[s].anIndexes[D],
                                    E.a[D].s.totalChars
                                  )).length
                                    ? (ot += I.a.v[0] * L[0])
                                    : (ot += I.a.v[0] * L));
                            for (
                              p = !0,
                                this._pathData.a.v &&
                                  ((o =
                                    0.5 * T[0].an +
                                    ((g -
                                      this._pathData.f.v -
                                      0.5 * T[0].an -
                                      0.5 * T[T.length - 1].an) *
                                      Y) /
                                      (a - 1)),
                                  (o += this._pathData.f.v));
                              p;

                            )
                              l + y >= o + ot || !u
                                ? ((v = (o + ot - l) / h.partialLength),
                                  (B =
                                    m.point[0] + (h.point[0] - m.point[0]) * v),
                                  (z =
                                    m.point[1] + (h.point[1] - m.point[1]) * v),
                                  x.translate(
                                    -_[0] * T[s].an * 0.005,
                                    -_[1] * V * 0.01
                                  ),
                                  (p = !1))
                                : u &&
                                  ((l += h.partialLength),
                                  (f += 1) >= u.length &&
                                    ((f = 0),
                                    d[(c += 1)]
                                      ? (u = d[c].points)
                                      : P.v.c
                                      ? ((f = 0), (u = d[(c = 0)].points))
                                      : ((l -= h.partialLength), (u = null))),
                                  u &&
                                    ((m = h), (y = (h = u[f]).partialLength)));
                            (G = T[s].an / 2 - T[s].add), x.translate(-G, 0, 0);
                          } else
                            (G = T[s].an / 2 - T[s].add),
                              x.translate(-G, 0, 0),
                              x.translate(
                                -_[0] * T[s].an * 0.005,
                                -_[1] * V * 0.01,
                                0
                              );
                          for (D = 0; D < C; D += 1)
                            (I = S[D].a).t.propType &&
                              ((L = S[D].s.getMult(
                                T[s].anIndexes[D],
                                E.a[D].s.totalChars
                              )),
                              (0 !== r || 0 !== t.j) &&
                                (this._hasMaskedPath
                                  ? L.length
                                    ? (o += I.t.v * L[0])
                                    : (o += I.t.v * L)
                                  : L.length
                                  ? (r += I.t.v * L[0])
                                  : (r += I.t.v * L)));
                          for (
                            t.strokeWidthAnim && (j = t.sw || 0),
                              t.strokeColorAnim &&
                                (N = t.sc
                                  ? [t.sc[0], t.sc[1], t.sc[2]]
                                  : [0, 0, 0]),
                              t.fillColorAnim &&
                                t.fc &&
                                (q = [t.fc[0], t.fc[1], t.fc[2]]),
                              D = 0;
                            D < C;
                            D += 1
                          )
                            (I = S[D].a).a.propType &&
                              ((L = S[D].s.getMult(
                                T[s].anIndexes[D],
                                E.a[D].s.totalChars
                              )).length
                                ? x.translate(
                                    -I.a.v[0] * L[0],
                                    -I.a.v[1] * L[1],
                                    I.a.v[2] * L[2]
                                  )
                                : x.translate(
                                    -I.a.v[0] * L,
                                    -I.a.v[1] * L,
                                    I.a.v[2] * L
                                  ));
                          for (D = 0; D < C; D += 1)
                            (I = S[D].a).s.propType &&
                              ((L = S[D].s.getMult(
                                T[s].anIndexes[D],
                                E.a[D].s.totalChars
                              )).length
                                ? x.scale(
                                    1 + (I.s.v[0] - 1) * L[0],
                                    1 + (I.s.v[1] - 1) * L[1],
                                    1
                                  )
                                : x.scale(
                                    1 + (I.s.v[0] - 1) * L,
                                    1 + (I.s.v[1] - 1) * L,
                                    1
                                  ));
                          for (D = 0; D < C; D += 1) {
                            if (
                              ((I = S[D].a),
                              (L = S[D].s.getMult(
                                T[s].anIndexes[D],
                                E.a[D].s.totalChars
                              )),
                              I.sk.propType &&
                                (L.length
                                  ? x.skewFromAxis(
                                      -I.sk.v * L[0],
                                      I.sa.v * L[1]
                                    )
                                  : x.skewFromAxis(-I.sk.v * L, I.sa.v * L)),
                              I.r.propType &&
                                (L.length
                                  ? x.rotateZ(-I.r.v * L[2])
                                  : x.rotateZ(-I.r.v * L)),
                              I.ry.propType &&
                                (L.length
                                  ? x.rotateY(I.ry.v * L[1])
                                  : x.rotateY(I.ry.v * L)),
                              I.rx.propType &&
                                (L.length
                                  ? x.rotateX(I.rx.v * L[0])
                                  : x.rotateX(I.rx.v * L)),
                              I.o.propType &&
                                (L.length
                                  ? (O += (I.o.v * L[0] - O) * L[0])
                                  : (O += (I.o.v * L - O) * L)),
                              t.strokeWidthAnim &&
                                I.sw.propType &&
                                (L.length
                                  ? (j += I.sw.v * L[0])
                                  : (j += I.sw.v * L)),
                              t.strokeColorAnim && I.sc.propType)
                            )
                              for (H = 0; H < 3; H += 1)
                                L.length
                                  ? (N[H] += (I.sc.v[H] - N[H]) * L[0])
                                  : (N[H] += (I.sc.v[H] - N[H]) * L);
                            if (t.fillColorAnim && t.fc) {
                              if (I.fc.propType)
                                for (H = 0; H < 3; H += 1)
                                  L.length
                                    ? (q[H] += (I.fc.v[H] - q[H]) * L[0])
                                    : (q[H] += (I.fc.v[H] - q[H]) * L);
                              I.fh.propType &&
                                (q = L.length
                                  ? addHueToRGB(q, I.fh.v * L[0])
                                  : addHueToRGB(q, I.fh.v * L)),
                                I.fs.propType &&
                                  (q = L.length
                                    ? addSaturationToRGB(q, I.fs.v * L[0])
                                    : addSaturationToRGB(q, I.fs.v * L)),
                                I.fb.propType &&
                                  (q = L.length
                                    ? addBrightnessToRGB(q, I.fb.v * L[0])
                                    : addBrightnessToRGB(q, I.fb.v * L));
                            }
                          }
                          for (D = 0; D < C; D += 1)
                            (I = S[D].a).p.propType &&
                              ((L = S[D].s.getMult(
                                T[s].anIndexes[D],
                                E.a[D].s.totalChars
                              )),
                              this._hasMaskedPath
                                ? L.length
                                  ? x.translate(
                                      0,
                                      I.p.v[1] * L[0],
                                      -I.p.v[2] * L[1]
                                    )
                                  : x.translate(0, I.p.v[1] * L, -I.p.v[2] * L)
                                : L.length
                                ? x.translate(
                                    I.p.v[0] * L[0],
                                    I.p.v[1] * L[1],
                                    -I.p.v[2] * L[2]
                                  )
                                : x.translate(
                                    I.p.v[0] * L,
                                    I.p.v[1] * L,
                                    -I.p.v[2] * L
                                  ));
                          if (
                            (t.strokeWidthAnim && (W = j < 0 ? 0 : j),
                            t.strokeColorAnim &&
                              ($ =
                                "rgb(" +
                                Math.round(255 * N[0]) +
                                "," +
                                Math.round(255 * N[1]) +
                                "," +
                                Math.round(255 * N[2]) +
                                ")"),
                            t.fillColorAnim &&
                              t.fc &&
                              (X =
                                "rgb(" +
                                Math.round(255 * q[0]) +
                                "," +
                                Math.round(255 * q[1]) +
                                "," +
                                Math.round(255 * q[2]) +
                                ")"),
                            this._hasMaskedPath)
                          ) {
                            if (
                              (x.translate(0, -t.ls),
                              x.translate(0, _[1] * V * 0.01 + i, 0),
                              this._pathData.p.v)
                            ) {
                              b =
                                (h.point[1] - m.point[1]) /
                                (h.point[0] - m.point[0]);
                              var ht = (180 * Math.atan(b)) / Math.PI;
                              h.point[0] < m.point[0] && (ht += 180),
                                x.rotate((-ht * Math.PI) / 180);
                            }
                            x.translate(B, z, 0),
                              (o -= _[0] * T[s].an * 0.005),
                              T[s + 1] &&
                                Y !== T[s + 1].ind &&
                                ((o += T[s].an / 2),
                                (o += 0.001 * t.tr * t.finalSize));
                          } else {
                            switch (
                              (x.translate(r, i, 0),
                              t.ps &&
                                x.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                              t.j)
                            ) {
                              case 1:
                                x.translate(
                                  T[s].animatorJustifyOffset +
                                    t.justifyOffset +
                                    (t.boxWidth - t.lineWidths[T[s].line]),
                                  0,
                                  0
                                );
                                break;
                              case 2:
                                x.translate(
                                  T[s].animatorJustifyOffset +
                                    t.justifyOffset +
                                    (t.boxWidth - t.lineWidths[T[s].line]) / 2,
                                  0,
                                  0
                                );
                            }
                            x.translate(0, -t.ls),
                              x.translate(G, 0, 0),
                              x.translate(
                                _[0] * T[s].an * 0.005,
                                _[1] * V * 0.01,
                                0
                              ),
                              (r += T[s].l + 0.001 * t.tr * t.finalSize);
                          }
                          "html" === A
                            ? (tt = x.toCSS())
                            : "svg" === A
                            ? (tt = x.to2dCSS())
                            : (et = [
                                x.props[0],
                                x.props[1],
                                x.props[2],
                                x.props[3],
                                x.props[4],
                                x.props[5],
                                x.props[6],
                                x.props[7],
                                x.props[8],
                                x.props[9],
                                x.props[10],
                                x.props[11],
                                x.props[12],
                                x.props[13],
                                x.props[14],
                                x.props[15],
                              ]),
                            (Z = O);
                        }
                        M <= s
                          ? ((w = new LetterProps(Z, W, $, X, tt, et)),
                            this.renderedLetters.push(w),
                            (M += 1),
                            (this.lettersChangedFlag = !0))
                          : ((w = this.renderedLetters[s]),
                            (this.lettersChangedFlag =
                              w.update(Z, W, $, X, tt, et) ||
                              this.lettersChangedFlag));
                      }
                    }
                  }),
                  (TextAnimatorProperty.prototype.getValue = function () {
                    this._elem.globalData.frameId !== this._frameId &&
                      ((this._frameId = this._elem.globalData.frameId),
                      this.iterateDynamicProperties());
                  }),
                  (TextAnimatorProperty.prototype.mHelper = new Matrix()),
                  (TextAnimatorProperty.prototype.defaultPropsArray = []),
                  extendPrototype(
                    [DynamicPropertyContainer],
                    TextAnimatorProperty
                  ),
                  (ITextElement.prototype.initElement = function (t, e, r) {
                    (this.lettersChangedFlag = !0),
                      this.initFrame(),
                      this.initBaseData(t, e, r),
                      (this.textProperty = new TextProperty(
                        this,
                        t.t,
                        this.dynamicProperties
                      )),
                      (this.textAnimator = new TextAnimatorProperty(
                        t.t,
                        this.renderType,
                        this
                      )),
                      this.initTransform(t, e, r),
                      this.initHierarchy(),
                      this.initRenderable(),
                      this.initRendererElement(),
                      this.createContainerElements(),
                      this.createRenderableComponents(),
                      this.createContent(),
                      this.hide(),
                      this.textAnimator.searchProperties(
                        this.dynamicProperties
                      );
                  }),
                  (ITextElement.prototype.prepareFrame = function (t) {
                    (this._mdf = !1),
                      this.prepareRenderableFrame(t),
                      this.prepareProperties(t, this.isInRange);
                  }),
                  (ITextElement.prototype.createPathShape = function (t, e) {
                    var r,
                      i,
                      s = e.length,
                      a = "";
                    for (r = 0; r < s; r += 1)
                      "sh" === e[r].ty &&
                        ((i = e[r].ks.k),
                        (a += buildShapeString(i, i.i.length, !0, t)));
                    return a;
                  }),
                  (ITextElement.prototype.updateDocumentData = function (t, e) {
                    this.textProperty.updateDocumentData(t, e);
                  }),
                  (ITextElement.prototype.canResizeFont = function (t) {
                    this.textProperty.canResizeFont(t);
                  }),
                  (ITextElement.prototype.setMinimumFontSize = function (t) {
                    this.textProperty.setMinimumFontSize(t);
                  }),
                  (ITextElement.prototype.applyTextPropertiesToMatrix =
                    function (t, e, r, i, s) {
                      switch (
                        (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                        e.translate(0, -t.ls, 0),
                        t.j)
                      ) {
                        case 1:
                          e.translate(
                            t.justifyOffset + (t.boxWidth - t.lineWidths[r]),
                            0,
                            0
                          );
                          break;
                        case 2:
                          e.translate(
                            t.justifyOffset +
                              (t.boxWidth - t.lineWidths[r]) / 2,
                            0,
                            0
                          );
                      }
                      e.translate(i, s, 0);
                    }),
                  (ITextElement.prototype.buildColor = function (t) {
                    return (
                      "rgb(" +
                      Math.round(255 * t[0]) +
                      "," +
                      Math.round(255 * t[1]) +
                      "," +
                      Math.round(255 * t[2]) +
                      ")"
                    );
                  }),
                  (ITextElement.prototype.emptyProp = new LetterProps()),
                  (ITextElement.prototype.destroy = function () {}),
                  (ITextElement.prototype.validateText = function () {
                    (this.textProperty._mdf ||
                      this.textProperty._isFirstFrame) &&
                      (this.buildNewText(),
                      (this.textProperty._isFirstFrame = !1),
                      (this.textProperty._mdf = !1));
                  });
                var emptyShapeData = { shapes: [] };
                function SVGTextLottieElement(t, e, r) {
                  (this.textSpans = []),
                    (this.renderType = "svg"),
                    this.initElement(t, e, r);
                }
                function ISolidElement(t, e, r) {
                  this.initElement(t, e, r);
                }
                function NullElement(t, e, r) {
                  this.initFrame(),
                    this.initBaseData(t, e, r),
                    this.initFrame(),
                    this.initTransform(t, e, r),
                    this.initHierarchy();
                }
                function SVGRendererBase() {}
                function ICompElement() {}
                function SVGCompElement(t, e, r) {
                  (this.layers = t.layers),
                    (this.supports3d = !0),
                    (this.completeLayers = !1),
                    (this.pendingElements = []),
                    (this.elements = this.layers
                      ? createSizedArray(this.layers.length)
                      : []),
                    this.initElement(t, e, r),
                    (this.tm = t.tm
                      ? PropertyFactory.getProp(
                          this,
                          t.tm,
                          0,
                          e.frameRate,
                          this
                        )
                      : { _placeholder: !0 });
                }
                function SVGRenderer(t, e) {
                  (this.animationItem = t),
                    (this.layers = null),
                    (this.renderedFrame = -1),
                    (this.svgElement = createNS("svg"));
                  var r = "";
                  if (e && e.title) {
                    var i = createNS("title"),
                      s = createElementID();
                    i.setAttribute("id", s),
                      (i.textContent = e.title),
                      this.svgElement.appendChild(i),
                      (r += s);
                  }
                  if (e && e.description) {
                    var a = createNS("desc"),
                      n = createElementID();
                    a.setAttribute("id", n),
                      (a.textContent = e.description),
                      this.svgElement.appendChild(a),
                      (r += " " + n);
                  }
                  r && this.svgElement.setAttribute("aria-labelledby", r);
                  var o = createNS("defs");
                  this.svgElement.appendChild(o);
                  var h = createNS("g");
                  this.svgElement.appendChild(h),
                    (this.layerElement = h),
                    (this.renderConfig = {
                      preserveAspectRatio:
                        (e && e.preserveAspectRatio) || "xMidYMid meet",
                      imagePreserveAspectRatio:
                        (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                      contentVisibility:
                        (e && e.contentVisibility) || "visible",
                      progressiveLoad: (e && e.progressiveLoad) || !1,
                      hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                      viewBoxOnly: (e && e.viewBoxOnly) || !1,
                      viewBoxSize: (e && e.viewBoxSize) || !1,
                      className: (e && e.className) || "",
                      id: (e && e.id) || "",
                      focusable: e && e.focusable,
                      filterSize: {
                        width:
                          (e && e.filterSize && e.filterSize.width) || "100%",
                        height:
                          (e && e.filterSize && e.filterSize.height) || "100%",
                        x: (e && e.filterSize && e.filterSize.x) || "0%",
                        y: (e && e.filterSize && e.filterSize.y) || "0%",
                      },
                      width: e && e.width,
                      height: e && e.height,
                      runExpressions:
                        !e || void 0 === e.runExpressions || e.runExpressions,
                    }),
                    (this.globalData = {
                      _mdf: !1,
                      frameNum: -1,
                      defs: o,
                      renderConfig: this.renderConfig,
                    }),
                    (this.elements = []),
                    (this.pendingElements = []),
                    (this.destroyed = !1),
                    (this.rendererType = "svg");
                }
                extendPrototype(
                  [
                    BaseElement,
                    TransformElement,
                    SVGBaseElement,
                    HierarchyElement,
                    FrameElement,
                    RenderableDOMElement,
                    ITextElement,
                  ],
                  SVGTextLottieElement
                ),
                  (SVGTextLottieElement.prototype.createContent = function () {
                    this.data.singleShape &&
                      !this.globalData.fontManager.chars &&
                      (this.textContainer = createNS("text"));
                  }),
                  (SVGTextLottieElement.prototype.buildTextContents = function (
                    t
                  ) {
                    for (var e = 0, r = t.length, i = [], s = ""; e < r; )
                      t[e] === String.fromCharCode(13) ||
                      t[e] === String.fromCharCode(3)
                        ? (i.push(s), (s = ""))
                        : (s += t[e]),
                        (e += 1);
                    return i.push(s), i;
                  }),
                  (SVGTextLottieElement.prototype.buildShapeData = function (
                    t,
                    e
                  ) {
                    if (t.shapes && t.shapes.length) {
                      var r = t.shapes[0];
                      if (r.it) {
                        var i = r.it[r.it.length - 1];
                        i.s && ((i.s.k[0] = e), (i.s.k[1] = e));
                      }
                    }
                    return t;
                  }),
                  (SVGTextLottieElement.prototype.buildNewText = function () {
                    this.addDynamicProperty(this);
                    var t,
                      e,
                      r = this.textProperty.currentData;
                    (this.renderedLetters = createSizedArray(
                      r ? r.l.length : 0
                    )),
                      r.fc
                        ? this.layerElement.setAttribute(
                            "fill",
                            this.buildColor(r.fc)
                          )
                        : this.layerElement.setAttribute(
                            "fill",
                            "rgba(0,0,0,0)"
                          ),
                      r.sc &&
                        (this.layerElement.setAttribute(
                          "stroke",
                          this.buildColor(r.sc)
                        ),
                        this.layerElement.setAttribute("stroke-width", r.sw)),
                      this.layerElement.setAttribute("font-size", r.finalSize);
                    var i = this.globalData.fontManager.getFontByName(r.f);
                    if (i.fClass)
                      this.layerElement.setAttribute("class", i.fClass);
                    else {
                      this.layerElement.setAttribute("font-family", i.fFamily);
                      var s = r.fWeight,
                        a = r.fStyle;
                      this.layerElement.setAttribute("font-style", a),
                        this.layerElement.setAttribute("font-weight", s);
                    }
                    this.layerElement.setAttribute("aria-label", r.t);
                    var n = r.l || [],
                      o = !!this.globalData.fontManager.chars;
                    e = n.length;
                    var h,
                      l = this.mHelper,
                      p = this.data.singleShape,
                      f = 0,
                      c = 0,
                      m = !0,
                      u = 0.001 * r.tr * r.finalSize;
                    if (!p || o || r.sz) {
                      var d,
                        y = this.textSpans.length;
                      for (t = 0; t < e; t += 1) {
                        if (
                          (this.textSpans[t] ||
                            (this.textSpans[t] = {
                              span: null,
                              childSpan: null,
                              glyph: null,
                            }),
                          !o || !p || 0 === t)
                        ) {
                          if (
                            ((h =
                              y > t
                                ? this.textSpans[t].span
                                : createNS(o ? "g" : "text")),
                            y <= t)
                          ) {
                            if (
                              (h.setAttribute("stroke-linecap", "butt"),
                              h.setAttribute("stroke-linejoin", "round"),
                              h.setAttribute("stroke-miterlimit", "4"),
                              (this.textSpans[t].span = h),
                              o)
                            ) {
                              var g = createNS("g");
                              h.appendChild(g),
                                (this.textSpans[t].childSpan = g);
                            }
                            (this.textSpans[t].span = h),
                              this.layerElement.appendChild(h);
                          }
                          h.style.display = "inherit";
                        }
                        if (
                          (l.reset(),
                          p &&
                            (n[t].n &&
                              ((f = -u),
                              (c += r.yOffset),
                              (c += m ? 1 : 0),
                              (m = !1)),
                            this.applyTextPropertiesToMatrix(
                              r,
                              l,
                              n[t].line,
                              f,
                              c
                            ),
                            (f += n[t].l || 0),
                            (f += u)),
                          o)
                        ) {
                          var v;
                          if (
                            1 ===
                            (d = this.globalData.fontManager.getCharData(
                              r.finalText[t],
                              i.fStyle,
                              this.globalData.fontManager.getFontByName(r.f)
                                .fFamily
                            )).t
                          )
                            v = new SVGCompElement(
                              d.data,
                              this.globalData,
                              this
                            );
                          else {
                            var b = emptyShapeData;
                            d.data &&
                              d.data.shapes &&
                              (b = this.buildShapeData(d.data, r.finalSize)),
                              (v = new SVGShapeElement(
                                b,
                                this.globalData,
                                this
                              ));
                          }
                          if (this.textSpans[t].glyph) {
                            var P = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(
                              P.layerElement
                            ),
                              P.destroy();
                          }
                          (this.textSpans[t].glyph = v),
                            (v._debug = !0),
                            v.prepareFrame(0),
                            v.renderFrame(),
                            this.textSpans[t].childSpan.appendChild(
                              v.layerElement
                            ),
                            1 === d.t &&
                              this.textSpans[t].childSpan.setAttribute(
                                "transform",
                                "scale(" +
                                  r.finalSize / 100 +
                                  "," +
                                  r.finalSize / 100 +
                                  ")"
                              );
                        } else
                          p &&
                            h.setAttribute(
                              "transform",
                              "translate(" +
                                l.props[12] +
                                "," +
                                l.props[13] +
                                ")"
                            ),
                            (h.textContent = n[t].val),
                            h.setAttributeNS(
                              "http://www.w3.org/XML/1998/namespace",
                              "xml:space",
                              "preserve"
                            );
                      }
                      p && h && h.setAttribute("d", "");
                    } else {
                      var _ = this.textContainer,
                        S = "start";
                      switch (r.j) {
                        case 1:
                          S = "end";
                          break;
                        case 2:
                          S = "middle";
                          break;
                        default:
                          S = "start";
                      }
                      _.setAttribute("text-anchor", S),
                        _.setAttribute("letter-spacing", u);
                      var E = this.buildTextContents(r.finalText);
                      for (
                        e = E.length, c = r.ps ? r.ps[1] + r.ascent : 0, t = 0;
                        t < e;
                        t += 1
                      )
                        ((h =
                          this.textSpans[t].span ||
                          createNS("tspan")).textContent = E[t]),
                          h.setAttribute("x", 0),
                          h.setAttribute("y", c),
                          (h.style.display = "inherit"),
                          _.appendChild(h),
                          this.textSpans[t] ||
                            (this.textSpans[t] = { span: null, glyph: null }),
                          (this.textSpans[t].span = h),
                          (c += r.finalLineHeight);
                      this.layerElement.appendChild(_);
                    }
                    for (; t < this.textSpans.length; )
                      (this.textSpans[t].span.style.display = "none"), (t += 1);
                    this._sizeChanged = !0;
                  }),
                  (SVGTextLottieElement.prototype.sourceRectAtTime =
                    function () {
                      if (
                        (this.prepareFrame(
                          this.comp.renderedFrame - this.data.st
                        ),
                        this.renderInnerContent(),
                        this._sizeChanged)
                      ) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                          top: t.y,
                          left: t.x,
                          width: t.width,
                          height: t.height,
                        };
                      }
                      return this.bbox;
                    }),
                  (SVGTextLottieElement.prototype.getValue = function () {
                    var t,
                      e,
                      r = this.textSpans.length;
                    for (
                      this.renderedFrame = this.comp.renderedFrame, t = 0;
                      t < r;
                      t += 1
                    )
                      (e = this.textSpans[t].glyph) &&
                        (e.prepareFrame(this.comp.renderedFrame - this.data.st),
                        e._mdf && (this._mdf = !0));
                  }),
                  (SVGTextLottieElement.prototype.renderInnerContent =
                    function () {
                      if (
                        (this.validateText(),
                        (!this.data.singleShape || this._mdf) &&
                          (this.textAnimator.getMeasures(
                            this.textProperty.currentData,
                            this.lettersChangedFlag
                          ),
                          this.lettersChangedFlag ||
                            this.textAnimator.lettersChangedFlag))
                      ) {
                        this._sizeChanged = !0;
                        var t,
                          e,
                          r,
                          i,
                          s,
                          a = this.textAnimator.renderedLetters,
                          n = this.textProperty.currentData.l;
                        for (e = n.length, t = 0; t < e; t += 1)
                          n[t].n ||
                            ((r = a[t]),
                            (i = this.textSpans[t].span),
                            (s = this.textSpans[t].glyph) && s.renderFrame(),
                            r._mdf.m && i.setAttribute("transform", r.m),
                            r._mdf.o && i.setAttribute("opacity", r.o),
                            r._mdf.sw && i.setAttribute("stroke-width", r.sw),
                            r._mdf.sc && i.setAttribute("stroke", r.sc),
                            r._mdf.fc && i.setAttribute("fill", r.fc));
                      }
                    }),
                  extendPrototype([IImageElement], ISolidElement),
                  (ISolidElement.prototype.createContent = function () {
                    var t = createNS("rect");
                    t.setAttribute("width", this.data.sw),
                      t.setAttribute("height", this.data.sh),
                      t.setAttribute("fill", this.data.sc),
                      this.layerElement.appendChild(t);
                  }),
                  (NullElement.prototype.prepareFrame = function (t) {
                    this.prepareProperties(t, !0);
                  }),
                  (NullElement.prototype.renderFrame = function () {}),
                  (NullElement.prototype.getBaseElement = function () {
                    return null;
                  }),
                  (NullElement.prototype.destroy = function () {}),
                  (NullElement.prototype.sourceRectAtTime = function () {}),
                  (NullElement.prototype.hide = function () {}),
                  extendPrototype(
                    [
                      BaseElement,
                      TransformElement,
                      HierarchyElement,
                      FrameElement,
                    ],
                    NullElement
                  ),
                  extendPrototype([BaseRenderer], SVGRendererBase),
                  (SVGRendererBase.prototype.createNull = function (t) {
                    return new NullElement(t, this.globalData, this);
                  }),
                  (SVGRendererBase.prototype.createShape = function (t) {
                    return new SVGShapeElement(t, this.globalData, this);
                  }),
                  (SVGRendererBase.prototype.createText = function (t) {
                    return new SVGTextLottieElement(t, this.globalData, this);
                  }),
                  (SVGRendererBase.prototype.createImage = function (t) {
                    return new IImageElement(t, this.globalData, this);
                  }),
                  (SVGRendererBase.prototype.createSolid = function (t) {
                    return new ISolidElement(t, this.globalData, this);
                  }),
                  (SVGRendererBase.prototype.configAnimation = function (t) {
                    this.svgElement.setAttribute(
                      "xmlns",
                      "http://www.w3.org/2000/svg"
                    ),
                      this.svgElement.setAttribute(
                        "xmlns:xlink",
                        "http://www.w3.org/1999/xlink"
                      ),
                      this.renderConfig.viewBoxSize
                        ? this.svgElement.setAttribute(
                            "viewBox",
                            this.renderConfig.viewBoxSize
                          )
                        : this.svgElement.setAttribute(
                            "viewBox",
                            "0 0 " + t.w + " " + t.h
                          ),
                      this.renderConfig.viewBoxOnly ||
                        (this.svgElement.setAttribute("width", t.w),
                        this.svgElement.setAttribute("height", t.h),
                        (this.svgElement.style.width = "100%"),
                        (this.svgElement.style.height = "100%"),
                        (this.svgElement.style.transform =
                          "translate3d(0,0,0)"),
                        (this.svgElement.style.contentVisibility =
                          this.renderConfig.contentVisibility)),
                      this.renderConfig.width &&
                        this.svgElement.setAttribute(
                          "width",
                          this.renderConfig.width
                        ),
                      this.renderConfig.height &&
                        this.svgElement.setAttribute(
                          "height",
                          this.renderConfig.height
                        ),
                      this.renderConfig.className &&
                        this.svgElement.setAttribute(
                          "class",
                          this.renderConfig.className
                        ),
                      this.renderConfig.id &&
                        this.svgElement.setAttribute(
                          "id",
                          this.renderConfig.id
                        ),
                      void 0 !== this.renderConfig.focusable &&
                        this.svgElement.setAttribute(
                          "focusable",
                          this.renderConfig.focusable
                        ),
                      this.svgElement.setAttribute(
                        "preserveAspectRatio",
                        this.renderConfig.preserveAspectRatio
                      ),
                      this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e),
                      (this.globalData.progressiveLoad =
                        this.renderConfig.progressiveLoad),
                      (this.data = t);
                    var r = createNS("clipPath"),
                      i = createNS("rect");
                    i.setAttribute("width", t.w),
                      i.setAttribute("height", t.h),
                      i.setAttribute("x", 0),
                      i.setAttribute("y", 0);
                    var s = createElementID();
                    r.setAttribute("id", s),
                      r.appendChild(i),
                      this.layerElement.setAttribute(
                        "clip-path",
                        "url(" + getLocationHref() + "#" + s + ")"
                      ),
                      e.appendChild(r),
                      (this.layers = t.layers),
                      (this.elements = createSizedArray(t.layers.length));
                  }),
                  (SVGRendererBase.prototype.destroy = function () {
                    this.animationItem.wrapper &&
                      (this.animationItem.wrapper.innerText = ""),
                      (this.layerElement = null),
                      (this.globalData.defs = null);
                    var t,
                      e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1)
                      this.elements[t] &&
                        this.elements[t].destroy &&
                        this.elements[t].destroy();
                    (this.elements.length = 0),
                      (this.destroyed = !0),
                      (this.animationItem = null);
                  }),
                  (SVGRendererBase.prototype.updateContainerSize =
                    function () {}),
                  (SVGRendererBase.prototype.findIndexByInd = function (t) {
                    var e = 0,
                      r = this.layers.length;
                    for (e = 0; e < r; e += 1)
                      if (this.layers[e].ind === t) return e;
                    return -1;
                  }),
                  (SVGRendererBase.prototype.buildItem = function (t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                      e[t] = !0;
                      var r = this.createItem(this.layers[t]);
                      if (
                        ((e[t] = r),
                        getExpressionsPlugin() &&
                          (0 === this.layers[t].ty &&
                            this.globalData.projectInterface.registerComposition(
                              r
                            ),
                          r.initExpressions()),
                        this.appendElementInPos(r, t),
                        this.layers[t].tt)
                      ) {
                        var i =
                          "tp" in this.layers[t]
                            ? this.findIndexByInd(this.layers[t].tp)
                            : t - 1;
                        if (-1 === i) return;
                        if (this.elements[i] && !0 !== this.elements[i]) {
                          var s = e[i].getMatte(this.layers[t].tt);
                          r.setMatte(s);
                        } else this.buildItem(i), this.addPendingElement(r);
                      }
                    }
                  }),
                  (SVGRendererBase.prototype.checkPendingElements =
                    function () {
                      for (; this.pendingElements.length; ) {
                        var t = this.pendingElements.pop();
                        if ((t.checkParenting(), t.data.tt))
                          for (var e = 0, r = this.elements.length; e < r; ) {
                            if (this.elements[e] === t) {
                              var i =
                                  "tp" in t.data
                                    ? this.findIndexByInd(t.data.tp)
                                    : e - 1,
                                s = this.elements[i].getMatte(
                                  this.layers[e].tt
                                );
                              t.setMatte(s);
                              break;
                            }
                            e += 1;
                          }
                      }
                    }),
                  (SVGRendererBase.prototype.renderFrame = function (t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                      null === t
                        ? (t = this.renderedFrame)
                        : (this.renderedFrame = t),
                        (this.globalData.frameNum = t),
                        (this.globalData.frameId += 1),
                        (this.globalData.projectInterface.currentFrame = t),
                        (this.globalData._mdf = !1);
                      var e,
                        r = this.layers.length;
                      for (
                        this.completeLayers || this.checkLayers(t), e = r - 1;
                        e >= 0;
                        e -= 1
                      )
                        (this.completeLayers || this.elements[e]) &&
                          this.elements[e].prepareFrame(t - this.layers[e].st);
                      if (this.globalData._mdf)
                        for (e = 0; e < r; e += 1)
                          (this.completeLayers || this.elements[e]) &&
                            this.elements[e].renderFrame();
                    }
                  }),
                  (SVGRendererBase.prototype.appendElementInPos = function (
                    t,
                    e
                  ) {
                    var r = t.getBaseElement();
                    if (r) {
                      for (var i, s = 0; s < e; )
                        this.elements[s] &&
                          !0 !== this.elements[s] &&
                          this.elements[s].getBaseElement() &&
                          (i = this.elements[s].getBaseElement()),
                          (s += 1);
                      i
                        ? this.layerElement.insertBefore(r, i)
                        : this.layerElement.appendChild(r);
                    }
                  }),
                  (SVGRendererBase.prototype.hide = function () {
                    this.layerElement.style.display = "none";
                  }),
                  (SVGRendererBase.prototype.show = function () {
                    this.layerElement.style.display = "block";
                  }),
                  extendPrototype(
                    [
                      BaseElement,
                      TransformElement,
                      HierarchyElement,
                      FrameElement,
                      RenderableDOMElement,
                    ],
                    ICompElement
                  ),
                  (ICompElement.prototype.initElement = function (t, e, r) {
                    this.initFrame(),
                      this.initBaseData(t, e, r),
                      this.initTransform(t, e, r),
                      this.initRenderable(),
                      this.initHierarchy(),
                      this.initRendererElement(),
                      this.createContainerElements(),
                      this.createRenderableComponents(),
                      (this.data.xt || !e.progressiveLoad) &&
                        this.buildAllItems(),
                      this.hide();
                  }),
                  (ICompElement.prototype.prepareFrame = function (t) {
                    if (
                      ((this._mdf = !1),
                      this.prepareRenderableFrame(t),
                      this.prepareProperties(t, this.isInRange),
                      this.isInRange || this.data.xt)
                    ) {
                      if (this.tm._placeholder)
                        this.renderedFrame = t / this.data.sr;
                      else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1),
                          (this.renderedFrame = e);
                      }
                      var r,
                        i = this.elements.length;
                      for (
                        this.completeLayers ||
                          this.checkLayers(this.renderedFrame),
                          r = i - 1;
                        r >= 0;
                        r -= 1
                      )
                        (this.completeLayers || this.elements[r]) &&
                          (this.elements[r].prepareFrame(
                            this.renderedFrame - this.layers[r].st
                          ),
                          this.elements[r]._mdf && (this._mdf = !0));
                    }
                  }),
                  (ICompElement.prototype.renderInnerContent = function () {
                    var t,
                      e = this.layers.length;
                    for (t = 0; t < e; t += 1)
                      (this.completeLayers || this.elements[t]) &&
                        this.elements[t].renderFrame();
                  }),
                  (ICompElement.prototype.setElements = function (t) {
                    this.elements = t;
                  }),
                  (ICompElement.prototype.getElements = function () {
                    return this.elements;
                  }),
                  (ICompElement.prototype.destroyElements = function () {
                    var t,
                      e = this.layers.length;
                    for (t = 0; t < e; t += 1)
                      this.elements[t] && this.elements[t].destroy();
                  }),
                  (ICompElement.prototype.destroy = function () {
                    this.destroyElements(), this.destroyBaseElement();
                  }),
                  extendPrototype(
                    [SVGRendererBase, ICompElement, SVGBaseElement],
                    SVGCompElement
                  ),
                  (SVGCompElement.prototype.createComp = function (t) {
                    return new SVGCompElement(t, this.globalData, this);
                  }),
                  extendPrototype([SVGRendererBase], SVGRenderer),
                  (SVGRenderer.prototype.createComp = function (t) {
                    return new SVGCompElement(t, this.globalData, this);
                  }),
                  registerRenderer("svg", SVGRenderer),
                  ShapeModifiers.registerModifier("tm", TrimModifier),
                  ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
                  ShapeModifiers.registerModifier("rp", RepeaterModifier),
                  ShapeModifiers.registerModifier("rd", RoundCornersModifier),
                  ShapeModifiers.registerModifier("zz", ZigZagModifier),
                  ShapeModifiers.registerModifier("op", OffsetPathModifier);
                var CompExpressionInterface = function (t) {
                  function e(e) {
                    for (var r = 0, i = t.layers.length; r < i; ) {
                      if (t.layers[r].nm === e || t.layers[r].ind === e)
                        return t.elements[r].layerInterface;
                      r += 1;
                    }
                    return null;
                  }
                  return (
                    Object.defineProperty(e, "_name", { value: t.data.nm }),
                    (e.layer = e),
                    (e.pixelAspect = 1),
                    (e.height = t.data.h || t.globalData.compSize.h),
                    (e.width = t.data.w || t.globalData.compSize.w),
                    (e.pixelAspect = 1),
                    (e.frameDuration = 1 / t.globalData.frameRate),
                    (e.displayStartTime = 0),
                    (e.numLayers = t.layers.length),
                    e
                  );
                };
                function _typeof$2(t) {
                  return (_typeof$2 =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                function seedRandom(t, e) {
                  var r = this,
                    i = 256,
                    s = "random",
                    a = e.pow(i, 6),
                    n = e.pow(2, 52),
                    o = 2 * n,
                    h = 255;
                  function l(t) {
                    var e,
                      r = t.length,
                      s = this,
                      a = 0,
                      n = (s.i = s.j = 0),
                      o = (s.S = []);
                    for (r || (t = [r++]); a < i; ) o[a] = a++;
                    for (a = 0; a < i; a++)
                      (o[a] = o[(n = h & (n + t[a % r] + (e = o[a])))]),
                        (o[n] = e);
                    s.g = function (t) {
                      for (var e, r = 0, a = s.i, n = s.j, o = s.S; t--; )
                        (e = o[(a = h & (a + 1))]),
                          (r =
                            r * i +
                            o[
                              h & ((o[a] = o[(n = h & (n + e))]) + (o[n] = e))
                            ]);
                      return (s.i = a), (s.j = n), r;
                    };
                  }
                  function p(t, e) {
                    return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
                  }
                  function f(t, e) {
                    var r,
                      i = [],
                      s = _typeof$2(t);
                    if (e && "object" == s)
                      for (r in t)
                        try {
                          i.push(f(t[r], e - 1));
                        } catch (a) {}
                    return i.length ? i : "string" == s ? t : t + "\0";
                  }
                  function c(t, e) {
                    for (var r, i = t + "", s = 0; s < i.length; )
                      e[h & s] = h & ((r ^= 19 * e[h & s]) + i.charCodeAt(s++));
                    return m(e);
                  }
                  function m(t) {
                    return String.fromCharCode.apply(0, t);
                  }
                  (e["seed" + s] = function (h, u, d) {
                    var y = [],
                      g = c(
                        f(
                          (u = !0 === u ? { entropy: !0 } : u || {}).entropy
                            ? [h, m(t)]
                            : null === h
                            ? (function () {
                                try {
                                  var e = new Uint8Array(i);
                                  return (
                                    (r.crypto || r.msCrypto).getRandomValues(e),
                                    m(e)
                                  );
                                } catch (n) {
                                  var s = r.navigator,
                                    a = s && s.plugins;
                                  return [+new Date(), r, a, r.screen, m(t)];
                                }
                              })()
                            : h,
                          3
                        ),
                        y
                      ),
                      v = new l(y),
                      b = function () {
                        for (var t = v.g(6), e = a, r = 0; t < n; )
                          (t = (t + r) * i), (e *= i), (r = v.g(1));
                        for (; t >= o; ) (t /= 2), (e /= 2), (r >>>= 1);
                        return (t + r) / e;
                      };
                    return (
                      (b.int32 = function () {
                        return 0 | v.g(4);
                      }),
                      (b.quick = function () {
                        return v.g(4) / 4294967296;
                      }),
                      (b.double = b),
                      c(m(v.S), t),
                      (
                        u.pass ||
                        d ||
                        function (t, r, i, a) {
                          return (
                            a &&
                              (a.S && p(a, v),
                              (t.state = function () {
                                return p(v, {});
                              })),
                            i ? ((e[s] = t), r) : t
                          );
                        }
                      )(b, g, "global" in u ? u.global : this == e, u.state)
                    );
                  }),
                    c(e.random(), t);
                }
                function initialize$2(t) {
                  seedRandom([], t);
                }
                var propTypes = { SHAPE: "shape" };
                function _typeof$1(t) {
                  return (_typeof$1 =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                var ExpressionManager = (function () {
                    var ob = {},
                      Math = BMMath,
                      window = null,
                      document = null,
                      XMLHttpRequest = null,
                      fetch = null,
                      frames = null,
                      _lottieGlobal = {};
                    function resetFrame() {
                      _lottieGlobal = {};
                    }
                    function $bm_isInstanceOfArray(t) {
                      return (
                        t.constructor === Array ||
                        t.constructor === Float32Array
                      );
                    }
                    function isNumerable(t, e) {
                      return (
                        "number" === t ||
                        e instanceof Number ||
                        "boolean" === t ||
                        "string" === t
                      );
                    }
                    function $bm_neg(t) {
                      var e = _typeof$1(t);
                      if (
                        "number" === e ||
                        t instanceof Number ||
                        "boolean" === e
                      )
                        return -t;
                      if ($bm_isInstanceOfArray(t)) {
                        var r,
                          i = t.length,
                          s = [];
                        for (r = 0; r < i; r += 1) s[r] = -t[r];
                        return s;
                      }
                      return t.propType ? t.v : -t;
                    }
                    initialize$2(BMMath);
                    var easeInBez = BezierFactory.getBezierEasing(
                        0.333,
                        0,
                        0.833,
                        0.833,
                        "easeIn"
                      ).get,
                      easeOutBez = BezierFactory.getBezierEasing(
                        0.167,
                        0.167,
                        0.667,
                        1,
                        "easeOut"
                      ).get,
                      easeInOutBez = BezierFactory.getBezierEasing(
                        0.33,
                        0,
                        0.667,
                        1,
                        "easeInOut"
                      ).get;
                    function sum(t, e) {
                      var r = _typeof$1(t),
                        i = _typeof$1(e);
                      if (
                        (isNumerable(r, t) && isNumerable(i, e)) ||
                        "string" === r ||
                        "string" === i
                      )
                        return t + e;
                      if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                        return ((t = t.slice(0))[0] += e), t;
                      if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                        return ((e = e.slice(0))[0] = t + e[0]), e;
                      if (
                        $bm_isInstanceOfArray(t) &&
                        $bm_isInstanceOfArray(e)
                      ) {
                        for (
                          var s = 0, a = t.length, n = e.length, o = [];
                          s < a || s < n;

                        )
                          ("number" == typeof t[s] || t[s] instanceof Number) &&
                          ("number" == typeof e[s] || e[s] instanceof Number)
                            ? (o[s] = t[s] + e[s])
                            : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]),
                            (s += 1);
                        return o;
                      }
                      return 0;
                    }
                    var add = sum;
                    function sub(t, e) {
                      var r = _typeof$1(t),
                        i = _typeof$1(e);
                      if (isNumerable(r, t) && isNumerable(i, e))
                        return (
                          "string" === r && (t = parseInt(t, 10)),
                          "string" === i && (e = parseInt(e, 10)),
                          t - e
                        );
                      if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                        return ((t = t.slice(0))[0] -= e), t;
                      if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                        return ((e = e.slice(0))[0] = t - e[0]), e;
                      if (
                        $bm_isInstanceOfArray(t) &&
                        $bm_isInstanceOfArray(e)
                      ) {
                        for (
                          var s = 0, a = t.length, n = e.length, o = [];
                          s < a || s < n;

                        )
                          ("number" == typeof t[s] || t[s] instanceof Number) &&
                          ("number" == typeof e[s] || e[s] instanceof Number)
                            ? (o[s] = t[s] - e[s])
                            : (o[s] = void 0 === e[s] ? t[s] : t[s] || e[s]),
                            (s += 1);
                        return o;
                      }
                      return 0;
                    }
                    function mul(t, e) {
                      var r,
                        i,
                        s,
                        a = _typeof$1(t),
                        n = _typeof$1(e);
                      if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                      if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (
                          s = t.length,
                            r = createTypedArray("float32", s),
                            i = 0;
                          i < s;
                          i += 1
                        )
                          r[i] = t[i] * e;
                        return r;
                      }
                      if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (
                          s = e.length,
                            r = createTypedArray("float32", s),
                            i = 0;
                          i < s;
                          i += 1
                        )
                          r[i] = t * e[i];
                        return r;
                      }
                      return 0;
                    }
                    function div(t, e) {
                      var r,
                        i,
                        s,
                        a = _typeof$1(t),
                        n = _typeof$1(e);
                      if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                      if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (
                          s = t.length,
                            r = createTypedArray("float32", s),
                            i = 0;
                          i < s;
                          i += 1
                        )
                          r[i] = t[i] / e;
                        return r;
                      }
                      if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (
                          s = e.length,
                            r = createTypedArray("float32", s),
                            i = 0;
                          i < s;
                          i += 1
                        )
                          r[i] = t / e[i];
                        return r;
                      }
                      return 0;
                    }
                    function mod(t, e) {
                      return (
                        "string" == typeof t && (t = parseInt(t, 10)),
                        "string" == typeof e && (e = parseInt(e, 10)),
                        t % e
                      );
                    }
                    var $bm_sum = sum,
                      $bm_sub = sub,
                      $bm_mul = mul,
                      $bm_div = div,
                      $bm_mod = mod;
                    function clamp(t, e, r) {
                      if (e > r) {
                        var i = r;
                        (r = e), (e = i);
                      }
                      return Math.min(Math.max(t, e), r);
                    }
                    function radiansToDegrees(t) {
                      return t / degToRads;
                    }
                    var radians_to_degrees = radiansToDegrees;
                    function degreesToRadians(t) {
                      return t * degToRads;
                    }
                    var degrees_to_radians = radiansToDegrees,
                      helperLengthArray = [0, 0, 0, 0, 0, 0];
                    function length(t, e) {
                      if ("number" == typeof t || t instanceof Number)
                        return (e = e || 0), Math.abs(t - e);
                      e || (e = helperLengthArray);
                      var r,
                        i = Math.min(t.length, e.length),
                        s = 0;
                      for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
                      return Math.sqrt(s);
                    }
                    function normalize(t) {
                      return div(t, length(t));
                    }
                    function rgbToHsl(t) {
                      var e,
                        r,
                        i = t[0],
                        s = t[1],
                        a = t[2],
                        n = Math.max(i, s, a),
                        o = Math.min(i, s, a),
                        h = (n + o) / 2;
                      if (n === o) (e = 0), (r = 0);
                      else {
                        var l = n - o;
                        switch (
                          ((r = h > 0.5 ? l / (2 - n - o) : l / (n + o)), n)
                        ) {
                          case i:
                            e = (s - a) / l + (s < a ? 6 : 0);
                            break;
                          case s:
                            e = (a - i) / l + 2;
                            break;
                          case a:
                            e = (i - s) / l + 4;
                        }
                        e /= 6;
                      }
                      return [e, r, h, t[3]];
                    }
                    function hue2rgb(t, e, r) {
                      return (
                        r < 0 && (r += 1),
                        r > 1 && (r -= 1),
                        r < 1 / 6
                          ? t + 6 * (e - t) * r
                          : r < 0.5
                          ? e
                          : r < 2 / 3
                          ? t + (e - t) * (2 / 3 - r) * 6
                          : t
                      );
                    }
                    function hslToRgb(t) {
                      var e,
                        r,
                        i,
                        s = t[0],
                        a = t[1],
                        n = t[2];
                      if (0 === a) (e = n), (i = n), (r = n);
                      else {
                        var o = n < 0.5 ? n * (1 + a) : n + a - n * a,
                          h = 2 * n - o;
                        (e = hue2rgb(h, o, s + 1 / 3)),
                          (r = hue2rgb(h, o, s)),
                          (i = hue2rgb(h, o, s - 1 / 3));
                      }
                      return [e, r, i, t[3]];
                    }
                    function linear(t, e, r, i, s) {
                      if (
                        ((void 0 === i || void 0 === s) &&
                          ((i = e), (s = r), (e = 0), (r = 1)),
                        r < e)
                      ) {
                        var a = r;
                        (r = e), (e = a);
                      }
                      if (t <= e) return i;
                      if (t >= r) return s;
                      var n = r === e ? 0 : (t - e) / (r - e);
                      if (!i.length) return i + (s - i) * n;
                      var o,
                        h = i.length,
                        l = createTypedArray("float32", h);
                      for (o = 0; o < h; o += 1)
                        l[o] = i[o] + (s[o] - i[o]) * n;
                      return l;
                    }
                    function random(t, e) {
                      if (
                        (void 0 === e &&
                          (void 0 === t
                            ? ((t = 0), (e = 1))
                            : ((e = t), (t = void 0))),
                        e.length)
                      ) {
                        var r,
                          i = e.length;
                        t || (t = createTypedArray("float32", i));
                        var s = createTypedArray("float32", i),
                          a = BMMath.random();
                        for (r = 0; r < i; r += 1)
                          s[r] = t[r] + a * (e[r] - t[r]);
                        return s;
                      }
                      return (
                        void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                      );
                    }
                    function createPath(t, e, r, i) {
                      var s,
                        a = t.length,
                        n = shapePool.newElement();
                      n.setPathData(!!i, a);
                      var o,
                        h,
                        l = [0, 0];
                      for (s = 0; s < a; s += 1)
                        (o = e && e[s] ? e[s] : l),
                          (h = r && r[s] ? r[s] : l),
                          n.setTripleAt(
                            t[s][0],
                            t[s][1],
                            h[0] + t[s][0],
                            h[1] + t[s][1],
                            o[0] + t[s][0],
                            o[1] + t[s][1],
                            s,
                            !0
                          );
                      return n;
                    }
                    function initiateExpression(elem, data, property) {
                      function noOp(t) {
                        return t;
                      }
                      if (!elem.globalData.renderConfig.runExpressions)
                        return noOp;
                      var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform,
                        $bm_transform,
                        content,
                        effect,
                        thisProperty = property;
                      (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                        Object.defineProperty(thisProperty, "value", {
                          get: function () {
                            return thisProperty.v;
                          },
                        }),
                        (elem.comp.frameDuration =
                          1 / elem.comp.globalData.frameRate),
                        (elem.comp.displayStartTime = 0);
                      var inPoint =
                          elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint =
                          elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn,
                        loop_in,
                        loopOut,
                        loop_out,
                        smooth,
                        toWorld,
                        fromWorld,
                        fromComp,
                        toComp,
                        fromCompToSurface,
                        position,
                        rotation,
                        anchorPoint,
                        scale,
                        thisLayer,
                        thisComp,
                        mask,
                        valueAtTime,
                        velocityAtTime,
                        scoped_bm_rt,
                        expression_function = eval(
                          "[function _expression_function(){" +
                            val +
                            ";scoped_bm_rt=$bm_rt}]"
                        )[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function (t, e) {
                          var r,
                            i,
                            s = this.pv.length ? this.pv.length : 1,
                            a = createTypedArray("float32", s),
                            n = Math.floor(5 * time);
                          for (r = 0, i = 0; r < n; ) {
                            for (i = 0; i < s; i += 1)
                              a[i] += -e + 2 * e * BMMath.random();
                            r += 1;
                          }
                          var o = 5 * time,
                            h = o - Math.floor(o),
                            l = createTypedArray("float32", s);
                          if (s > 1) {
                            for (i = 0; i < s; i += 1)
                              l[i] =
                                this.pv[i] +
                                a[i] +
                                (-e + 2 * e * BMMath.random()) * h;
                            return l;
                          }
                          return (
                            this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                          );
                        }.bind(this);
                      function loopInDuration(t, e) {
                        return loopIn(t, e, !0);
                      }
                      function loopOutDuration(t, e) {
                        return loopOut(t, e, !0);
                      }
                      thisProperty.loopIn &&
                        ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                        (loop_in = loopIn)),
                        thisProperty.loopOut &&
                          ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                          (loop_out = loopOut)),
                        thisProperty.smooth &&
                          (smooth = thisProperty.smooth.bind(thisProperty)),
                        this.getValueAtTime &&
                          (valueAtTime = this.getValueAtTime.bind(this)),
                        this.getVelocityAtTime &&
                          (velocityAtTime = this.getVelocityAtTime.bind(this));
                      var comp = elem.comp.globalData.projectInterface.bind(
                        elem.comp.globalData.projectInterface
                      );
                      function lookAt(t, e) {
                        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                          i =
                            Math.atan2(
                              r[0],
                              Math.sqrt(r[1] * r[1] + r[2] * r[2])
                            ) / degToRads;
                        return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
                      }
                      function easeOut(t, e, r, i, s) {
                        return applyEase(easeOutBez, t, e, r, i, s);
                      }
                      function easeIn(t, e, r, i, s) {
                        return applyEase(easeInBez, t, e, r, i, s);
                      }
                      function ease(t, e, r, i, s) {
                        return applyEase(easeInOutBez, t, e, r, i, s);
                      }
                      function applyEase(t, e, r, i, s, a) {
                        void 0 === s
                          ? ((s = r), (a = i))
                          : (e = (e - r) / (i - r)),
                          e > 1 ? (e = 1) : e < 0 && (e = 0);
                        var n = t(e);
                        if ($bm_isInstanceOfArray(s)) {
                          var o,
                            h = s.length,
                            l = createTypedArray("float32", h);
                          for (o = 0; o < h; o += 1)
                            l[o] = (a[o] - s[o]) * n + s[o];
                          return l;
                        }
                        return (a - s) * n + s;
                      }
                      function nearestKey(t) {
                        var e,
                          r,
                          i,
                          s = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                          if (
                            ((r = -1),
                            (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                          )
                            (r = 1), (i = data.k[0].t);
                          else {
                            for (e = 0; e < s - 1; e += 1) {
                              if (t === data.k[e].t) {
                                (r = e + 1), (i = data.k[e].t);
                                break;
                              }
                              if (t > data.k[e].t && t < data.k[e + 1].t) {
                                t - data.k[e].t > data.k[e + 1].t - t
                                  ? ((r = e + 2), (i = data.k[e + 1].t))
                                  : ((r = e + 1), (i = data.k[e].t));
                                break;
                              }
                            }
                            -1 === r && ((r = e + 1), (i = data.k[e].t));
                          }
                        else (r = 0), (i = 0);
                        var a = {};
                        return (
                          (a.index = r),
                          (a.time = i / elem.comp.globalData.frameRate),
                          a
                        );
                      }
                      function key(t) {
                        var e, r, i;
                        if (!data.k.length || "number" == typeof data.k[0])
                          throw new Error(
                            "The property has no keyframe at index " + t
                          );
                        (t -= 1),
                          (e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: [],
                          });
                        var s = Object.prototype.hasOwnProperty.call(
                          data.k[t],
                          "s"
                        )
                          ? data.k[t].s
                          : data.k[t - 1].e;
                        for (i = s.length, r = 0; r < i; r += 1)
                          (e[r] = s[r]), (e.value[r] = s[r]);
                        return e;
                      }
                      function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e;
                      }
                      function timeToFrames(t, e) {
                        return (
                          !t && 0 !== t && (t = time),
                          e || (e = elem.comp.globalData.frameRate),
                          t * e
                        );
                      }
                      function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t);
                      }
                      function sourceRectAtTime() {
                        return elem.sourceRectAtTime();
                      }
                      function substring(t, e) {
                        return "string" == typeof value
                          ? void 0 === e
                            ? value.substring(t)
                            : value.substring(t, e)
                          : "";
                      }
                      function substr(t, e) {
                        return "string" == typeof value
                          ? void 0 === e
                            ? value.substr(t)
                            : value.substr(t, e)
                          : "";
                      }
                      function posterizeTime(t) {
                        (time = 0 === t ? 0 : Math.floor(time * t) / t),
                          (value = valueAtTime(time));
                      }
                      var time,
                        velocity,
                        value,
                        text,
                        textIndex,
                        textTotal,
                        selectorValue,
                        index = elem.data.ind,
                        hasParent = !(
                          !elem.hierarchy || !elem.hierarchy.length
                        ),
                        parent,
                        randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;
                      function executeExpression(t) {
                        return (
                          (value = t),
                          this.frameExpressionId === elem.globalData.frameId &&
                          "textSelector" !== this.propType
                            ? value
                            : ("textSelector" === this.propType &&
                                ((textIndex = this.textIndex),
                                (textTotal = this.textTotal),
                                (selectorValue = this.selectorValue)),
                              thisLayer ||
                                ((text = elem.layerInterface.text),
                                (thisLayer = elem.layerInterface),
                                (thisComp = elem.comp.compInterface),
                                (toWorld = thisLayer.toWorld.bind(thisLayer)),
                                (fromWorld =
                                  thisLayer.fromWorld.bind(thisLayer)),
                                (fromComp = thisLayer.fromComp.bind(thisLayer)),
                                (toComp = thisLayer.toComp.bind(thisLayer)),
                                (mask = thisLayer.mask
                                  ? thisLayer.mask.bind(thisLayer)
                                  : null),
                                (fromCompToSurface = fromComp)),
                              transform ||
                                ((transform = elem.layerInterface(
                                  "ADBE Transform Group"
                                )),
                                ($bm_transform = transform),
                                transform &&
                                  (anchorPoint = transform.anchorPoint)),
                              4 === elemType &&
                                !content &&
                                (content = thisLayer(
                                  "ADBE Root Vectors Group"
                                )),
                              effect || (effect = thisLayer(4)),
                              (hasParent = !(
                                !elem.hierarchy || !elem.hierarchy.length
                              )) &&
                                !parent &&
                                (parent = elem.hierarchy[0].layerInterface),
                              (time =
                                this.comp.renderedFrame /
                                this.comp.globalData.frameRate),
                              _needsRandom && seedRandom(randSeed + time),
                              needsVelocity &&
                                (velocity = velocityAtTime(time)),
                              expression_function(),
                              (this.frameExpressionId =
                                elem.globalData.frameId),
                              (scoped_bm_rt =
                                scoped_bm_rt.propType === propTypes.SHAPE
                                  ? scoped_bm_rt.v
                                  : scoped_bm_rt))
                        );
                      }
                      return (
                        (executeExpression.__preventDeadCodeRemoval = [
                          $bm_transform,
                          anchorPoint,
                          time,
                          velocity,
                          inPoint,
                          outPoint,
                          width,
                          height,
                          name,
                          loop_in,
                          loop_out,
                          smooth,
                          toComp,
                          fromCompToSurface,
                          toWorld,
                          fromWorld,
                          mask,
                          position,
                          rotation,
                          scale,
                          thisComp,
                          numKeys,
                          active,
                          wiggle,
                          loopInDuration,
                          loopOutDuration,
                          comp,
                          lookAt,
                          easeOut,
                          easeIn,
                          ease,
                          nearestKey,
                          key,
                          text,
                          textIndex,
                          textTotal,
                          selectorValue,
                          framesToTime,
                          timeToFrames,
                          sourceRectAtTime,
                          substring,
                          substr,
                          posterizeTime,
                          index,
                          globalData,
                        ]),
                        executeExpression
                      );
                    }
                    return (
                      (ob.initiateExpression = initiateExpression),
                      (ob.__preventDeadCodeRemoval = [
                        window,
                        document,
                        XMLHttpRequest,
                        fetch,
                        frames,
                        $bm_neg,
                        add,
                        $bm_sum,
                        $bm_sub,
                        $bm_mul,
                        $bm_div,
                        $bm_mod,
                        clamp,
                        radians_to_degrees,
                        degreesToRadians,
                        degrees_to_radians,
                        normalize,
                        rgbToHsl,
                        hslToRgb,
                        linear,
                        random,
                        createPath,
                        _lottieGlobal,
                      ]),
                      (ob.resetFrame = resetFrame),
                      ob
                    );
                  })(),
                  Expressions = (function () {
                    var t = {
                      initExpressions: function (t) {
                        var e = 0,
                          r = [];
                        (t.renderer.compInterface = CompExpressionInterface(
                          t.renderer
                        )),
                          t.renderer.globalData.projectInterface.registerComposition(
                            t.renderer
                          ),
                          (t.renderer.globalData.pushExpression = function () {
                            e += 1;
                          }),
                          (t.renderer.globalData.popExpression = function () {
                            0 === (e -= 1) &&
                              (function () {
                                var t,
                                  e = r.length;
                                for (t = 0; t < e; t += 1) r[t].release();
                                r.length = 0;
                              })();
                          }),
                          (t.renderer.globalData.registerExpressionProperty =
                            function (t) {
                              -1 === r.indexOf(t) && r.push(t);
                            });
                      },
                    };
                    return (t.resetFrame = ExpressionManager.resetFrame), t;
                  })(),
                  MaskManagerInterface = (function () {
                    function t(t, e) {
                      (this._mask = t), (this._data = e);
                    }
                    return (
                      Object.defineProperty(t.prototype, "maskPath", {
                        get: function () {
                          return (
                            this._mask.prop.k && this._mask.prop.getValue(),
                            this._mask.prop
                          );
                        },
                      }),
                      Object.defineProperty(t.prototype, "maskOpacity", {
                        get: function () {
                          return (
                            this._mask.op.k && this._mask.op.getValue(),
                            100 * this._mask.op.v
                          );
                        },
                      }),
                      function (e) {
                        var r,
                          i = createSizedArray(e.viewData.length),
                          s = e.viewData.length;
                        for (r = 0; r < s; r += 1)
                          i[r] = new t(e.viewData[r], e.masksProperties[r]);
                        return function (t) {
                          for (r = 0; r < s; ) {
                            if (e.masksProperties[r].nm === t) return i[r];
                            r += 1;
                          }
                          return null;
                        };
                      }
                    );
                  })(),
                  ExpressionPropertyInterface = (function () {
                    var t = { pv: 0, v: 0, mult: 1 },
                      e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
                    function r(t, e, r) {
                      Object.defineProperty(t, "velocity", {
                        get: function () {
                          return e.getVelocityAtTime(e.comp.currentFrame);
                        },
                      }),
                        (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                        (t.key = function (i) {
                          if (!t.numKeys) return 0;
                          var s = "";
                          s =
                            "s" in e.keyframes[i - 1]
                              ? e.keyframes[i - 1].s
                              : "e" in e.keyframes[i - 2]
                              ? e.keyframes[i - 2].e
                              : e.keyframes[i - 2].s;
                          var a =
                            "unidimensional" === r
                              ? new Number(s)
                              : Object.assign({}, s);
                          return (
                            (a.time =
                              e.keyframes[i - 1].t /
                              e.elem.comp.globalData.frameRate),
                            (a.value = "unidimensional" === r ? s[0] : s),
                            a
                          );
                        }),
                        (t.valueAtTime = e.getValueAtTime),
                        (t.speedAtTime = e.getSpeedAtTime),
                        (t.velocityAtTime = e.getVelocityAtTime),
                        (t.propertyGroup = e.propertyGroup);
                    }
                    function i() {
                      return t;
                    }
                    return function (s) {
                      return s
                        ? "unidimensional" === s.propType
                          ? (function (e) {
                              (!e || !("pv" in e)) && (e = t);
                              var i = 1 / e.mult,
                                s = e.pv * i,
                                a = new Number(s);
                              return (
                                (a.value = s),
                                r(a, e, "unidimensional"),
                                function () {
                                  return (
                                    e.k && e.getValue(),
                                    (s = e.v * i),
                                    a.value !== s &&
                                      (((a = new Number(s)).value = s),
                                      r(a, e, "unidimensional")),
                                    a
                                  );
                                }
                              );
                            })(s)
                          : (function (t) {
                              (!t || !("pv" in t)) && (t = e);
                              var i = 1 / t.mult,
                                s = (t.data && t.data.l) || t.pv.length,
                                a = createTypedArray("float32", s),
                                n = createTypedArray("float32", s);
                              return (
                                (a.value = n),
                                r(a, t, "multidimensional"),
                                function () {
                                  t.k && t.getValue();
                                  for (var e = 0; e < s; e += 1)
                                    (n[e] = t.v[e] * i), (a[e] = n[e]);
                                  return a;
                                }
                              );
                            })(s)
                        : i;
                    };
                  })(),
                  TransformExpressionInterface = function (t) {
                    function e(t) {
                      switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                          return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                          return e.rotation;
                        case "ADBE Rotate X":
                          return e.xRotation;
                        case "ADBE Rotate Y":
                          return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                          return e.position;
                        case "ADBE Position_0":
                          return e.xPosition;
                        case "ADBE Position_1":
                          return e.yPosition;
                        case "ADBE Position_2":
                          return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                          return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                          return e.opacity;
                        default:
                          return null;
                      }
                    }
                    var r, i, s, a;
                    return (
                      Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz),
                      }),
                      Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r),
                      }),
                      Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx),
                      }),
                      Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry),
                      }),
                      Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s),
                      }),
                      t.p
                        ? (a = ExpressionPropertyInterface(t.p))
                        : ((r = ExpressionPropertyInterface(t.px)),
                          (i = ExpressionPropertyInterface(t.py)),
                          t.pz && (s = ExpressionPropertyInterface(t.pz))),
                      Object.defineProperty(e, "position", {
                        get: function () {
                          return t.p ? a() : [r(), i(), s ? s() : 0];
                        },
                      }),
                      Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px),
                      }),
                      Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py),
                      }),
                      Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz),
                      }),
                      Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a),
                      }),
                      Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o),
                      }),
                      Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk),
                      }),
                      Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa),
                      }),
                      Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or),
                      }),
                      e
                    );
                  },
                  LayerExpressionInterface = (function () {
                    function t(t) {
                      var e = new Matrix();
                      return (
                        void 0 !== t
                          ? this._elem.finalTransform.mProp
                              .getValueAtTime(t)
                              .clone(e)
                          : this._elem.finalTransform.mProp.applyToMatrix(e),
                        e
                      );
                    }
                    function e(t, e) {
                      var r = this.getMatrix(e);
                      return (
                        (r.props[12] = 0),
                        (r.props[13] = 0),
                        (r.props[14] = 0),
                        this.applyPoint(r, t)
                      );
                    }
                    function r(t, e) {
                      var r = this.getMatrix(e);
                      return this.applyPoint(r, t);
                    }
                    function i(t, e) {
                      var r = this.getMatrix(e);
                      return (
                        (r.props[12] = 0),
                        (r.props[13] = 0),
                        (r.props[14] = 0),
                        this.invertPoint(r, t)
                      );
                    }
                    function s(t, e) {
                      var r = this.getMatrix(e);
                      return this.invertPoint(r, t);
                    }
                    function a(t, e) {
                      if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r,
                          i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1)
                          this._elem.hierarchy[
                            r
                          ].finalTransform.mProp.applyToMatrix(t);
                      }
                      return t.applyToPointArray(e[0], e[1], e[2] || 0);
                    }
                    function n(t, e) {
                      if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r,
                          i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1)
                          this._elem.hierarchy[
                            r
                          ].finalTransform.mProp.applyToMatrix(t);
                      }
                      return t.inversePoint(e);
                    }
                    function o(t) {
                      var e = new Matrix();
                      if (
                        (e.reset(),
                        this._elem.finalTransform.mProp.applyToMatrix(e),
                        this._elem.hierarchy && this._elem.hierarchy.length)
                      ) {
                        var r,
                          i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1)
                          this._elem.hierarchy[
                            r
                          ].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t);
                      }
                      return e.inversePoint(t);
                    }
                    function h() {
                      return [1, 1, 1, 1];
                    }
                    return function (l) {
                      var p;
                      function f(t) {
                        switch (t) {
                          case "ADBE Root Vectors Group":
                          case "Contents":
                          case 2:
                            return f.shapeInterface;
                          case 1:
                          case 6:
                          case "Transform":
                          case "transform":
                          case "ADBE Transform Group":
                            return p;
                          case 4:
                          case "ADBE Effect Parade":
                          case "effects":
                          case "Effects":
                            return f.effect;
                          case "ADBE Text Properties":
                            return f.textInterface;
                          default:
                            return null;
                        }
                      }
                      (f.getMatrix = t),
                        (f.invertPoint = n),
                        (f.applyPoint = a),
                        (f.toWorld = r),
                        (f.toWorldVec = e),
                        (f.fromWorld = s),
                        (f.fromWorldVec = i),
                        (f.toComp = r),
                        (f.fromComp = o),
                        (f.sampleImage = h),
                        (f.sourceRectAtTime = l.sourceRectAtTime.bind(l)),
                        (f._elem = l);
                      var c = getDescriptor(
                        (p = TransformExpressionInterface(
                          l.finalTransform.mProp
                        )),
                        "anchorPoint"
                      );
                      return (
                        Object.defineProperties(f, {
                          hasParent: {
                            get: function () {
                              return l.hierarchy.length;
                            },
                          },
                          parent: {
                            get: function () {
                              return l.hierarchy[0].layerInterface;
                            },
                          },
                          rotation: getDescriptor(p, "rotation"),
                          scale: getDescriptor(p, "scale"),
                          position: getDescriptor(p, "position"),
                          opacity: getDescriptor(p, "opacity"),
                          anchorPoint: c,
                          anchor_point: c,
                          transform: {
                            get: function () {
                              return p;
                            },
                          },
                          active: {
                            get: function () {
                              return l.isInRange;
                            },
                          },
                        }),
                        (f.startTime = l.data.st),
                        (f.index = l.data.ind),
                        (f.source = l.data.refId),
                        (f.height = 0 === l.data.ty ? l.data.h : 100),
                        (f.width = 0 === l.data.ty ? l.data.w : 100),
                        (f.inPoint = l.data.ip / l.comp.globalData.frameRate),
                        (f.outPoint = l.data.op / l.comp.globalData.frameRate),
                        (f._name = l.data.nm),
                        (f.registerMaskInterface = function (t) {
                          f.mask = new MaskManagerInterface(t, l);
                        }),
                        (f.registerEffectsInterface = function (t) {
                          f.effect = t;
                        }),
                        f
                      );
                    };
                  })(),
                  propertyGroupFactory = function (t, e) {
                    return function (r) {
                      return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
                    };
                  },
                  PropertyInterface = function (t, e) {
                    var r = { _name: t };
                    return function (t) {
                      return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
                    };
                  },
                  EffectsExpressionInterface = (function () {
                    function t(r, i, s, a) {
                      function n(t) {
                        for (var e = r.ef, i = 0, s = e.length; i < s; ) {
                          if (t === e[i].nm || t === e[i].mn || t === e[i].ix)
                            return 5 === e[i].ty ? l[i] : l[i]();
                          i += 1;
                        }
                        throw new Error();
                      }
                      var o,
                        h = propertyGroupFactory(n, s),
                        l = [],
                        p = r.ef.length;
                      for (o = 0; o < p; o += 1)
                        5 === r.ef[o].ty
                          ? l.push(
                              t(
                                r.ef[o],
                                i.effectElements[o],
                                i.effectElements[o].propertyGroup,
                                a
                              )
                            )
                          : l.push(e(i.effectElements[o], r.ef[o].ty, a, h));
                      return (
                        "ADBE Color Control" === r.mn &&
                          Object.defineProperty(n, "color", {
                            get: function () {
                              return l[0]();
                            },
                          }),
                        Object.defineProperties(n, {
                          numProperties: {
                            get: function () {
                              return r.np;
                            },
                          },
                          _name: { value: r.nm },
                          propertyGroup: { value: h },
                        }),
                        (n.enabled = 0 !== r.en),
                        (n.active = n.enabled),
                        n
                      );
                    }
                    function e(t, e, r, i) {
                      var s = ExpressionPropertyInterface(t.p);
                      return (
                        t.p.setGroupProperty &&
                          t.p.setGroupProperty(PropertyInterface("", i)),
                        function () {
                          return 10 === e ? r.comp.compInterface(t.p.v) : s();
                        }
                      );
                    }
                    return {
                      createEffectsInterface: function (e, r) {
                        if (e.effectsManager) {
                          var i,
                            s = [],
                            a = e.data.ef,
                            n = e.effectsManager.effectElements.length;
                          for (i = 0; i < n; i += 1)
                            s.push(
                              t(a[i], e.effectsManager.effectElements[i], r, e)
                            );
                          var o = e.data.ef || [],
                            h = function (t) {
                              for (i = 0, n = o.length; i < n; ) {
                                if (
                                  t === o[i].nm ||
                                  t === o[i].mn ||
                                  t === o[i].ix
                                )
                                  return s[i];
                                i += 1;
                              }
                              return null;
                            };
                          return (
                            Object.defineProperty(h, "numProperties", {
                              get: function () {
                                return o.length;
                              },
                            }),
                            h
                          );
                        }
                        return null;
                      },
                    };
                  })(),
                  ShapePathInterface = function (t, e, r) {
                    var i = e.sh;
                    function s(t) {
                      return "Shape" === t ||
                        "shape" === t ||
                        "Path" === t ||
                        "path" === t ||
                        "ADBE Vector Shape" === t ||
                        2 === t
                        ? s.path
                        : null;
                    }
                    var a = propertyGroupFactory(s, r);
                    return (
                      i.setGroupProperty(PropertyInterface("Path", a)),
                      Object.defineProperties(s, {
                        path: {
                          get: function () {
                            return i.k && i.getValue(), i;
                          },
                        },
                        shape: {
                          get: function () {
                            return i.k && i.getValue(), i;
                          },
                        },
                        _name: { value: t.nm },
                        ix: { value: t.ix },
                        propertyIndex: { value: t.ix },
                        mn: { value: t.mn },
                        propertyGroup: { value: r },
                      }),
                      s
                    );
                  },
                  ShapeExpressionInterface = (function () {
                    function t(t, n, c) {
                      var m,
                        u = [],
                        d = t ? t.length : 0;
                      for (m = 0; m < d; m += 1)
                        "gr" === t[m].ty
                          ? u.push(e(t[m], n[m], c))
                          : "fl" === t[m].ty
                          ? u.push(r(t[m], n[m], c))
                          : "st" === t[m].ty
                          ? u.push(s(t[m], n[m], c))
                          : "tm" === t[m].ty
                          ? u.push(a(t[m], n[m], c))
                          : "tr" === t[m].ty ||
                            ("el" === t[m].ty
                              ? u.push(o(t[m], n[m], c))
                              : "sr" === t[m].ty
                              ? u.push(h(t[m], n[m], c))
                              : "sh" === t[m].ty
                              ? u.push(ShapePathInterface(t[m], n[m], c))
                              : "rc" === t[m].ty
                              ? u.push(l(t[m], n[m], c))
                              : "rd" === t[m].ty
                              ? u.push(p(t[m], n[m], c))
                              : "rp" === t[m].ty
                              ? u.push(f(t[m], n[m], c))
                              : "gf" === t[m].ty
                              ? u.push(i(t[m], n[m], c))
                              : u.push(
                                  (t[m],
                                  n[m],
                                  function () {
                                    return null;
                                  })
                                ));
                      return u;
                    }
                    function e(e, r, i) {
                      var s = function t(e) {
                        switch (e) {
                          case "ADBE Vectors Group":
                          case "Contents":
                          case 2:
                            return t.content;
                          default:
                            return t.transform;
                        }
                      };
                      s.propertyGroup = propertyGroupFactory(s, i);
                      var a = (function (e, r, i) {
                          var s,
                            a = function (t) {
                              for (var e = 0, r = s.length; e < r; ) {
                                if (
                                  s[e]._name === t ||
                                  s[e].mn === t ||
                                  s[e].propertyIndex === t ||
                                  s[e].ix === t ||
                                  s[e].ind === t
                                )
                                  return s[e];
                                e += 1;
                              }
                              return "number" == typeof t ? s[t - 1] : null;
                            };
                          (a.propertyGroup = propertyGroupFactory(a, i)),
                            (s = t(e.it, r.it, a.propertyGroup)),
                            (a.numProperties = s.length);
                          var o = n(
                            e.it[e.it.length - 1],
                            r.it[r.it.length - 1],
                            a.propertyGroup
                          );
                          return (
                            (a.transform = o),
                            (a.propertyIndex = e.cix),
                            (a._name = e.nm),
                            a
                          );
                        })(e, r, s.propertyGroup),
                        o = n(
                          e.it[e.it.length - 1],
                          r.it[r.it.length - 1],
                          s.propertyGroup
                        );
                      return (
                        (s.content = a),
                        (s.transform = o),
                        Object.defineProperty(s, "_name", {
                          get: function () {
                            return e.nm;
                          },
                        }),
                        (s.numProperties = e.np),
                        (s.propertyIndex = e.ix),
                        (s.nm = e.nm),
                        (s.mn = e.mn),
                        s
                      );
                    }
                    function r(t, e, r) {
                      function i(t) {
                        return "Color" === t || "color" === t
                          ? i.color
                          : "Opacity" === t || "opacity" === t
                          ? i.opacity
                          : null;
                      }
                      return (
                        Object.defineProperties(i, {
                          color: { get: ExpressionPropertyInterface(e.c) },
                          opacity: { get: ExpressionPropertyInterface(e.o) },
                          _name: { value: t.nm },
                          mn: { value: t.mn },
                        }),
                        e.c.setGroupProperty(PropertyInterface("Color", r)),
                        e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                        i
                      );
                    }
                    function i(t, e, r) {
                      function i(t) {
                        return "Start Point" === t || "start point" === t
                          ? i.startPoint
                          : "End Point" === t || "end point" === t
                          ? i.endPoint
                          : "Opacity" === t || "opacity" === t
                          ? i.opacity
                          : null;
                      }
                      return (
                        Object.defineProperties(i, {
                          startPoint: { get: ExpressionPropertyInterface(e.s) },
                          endPoint: { get: ExpressionPropertyInterface(e.e) },
                          opacity: { get: ExpressionPropertyInterface(e.o) },
                          type: {
                            get: function () {
                              return "a";
                            },
                          },
                          _name: { value: t.nm },
                          mn: { value: t.mn },
                        }),
                        e.s.setGroupProperty(
                          PropertyInterface("Start Point", r)
                        ),
                        e.e.setGroupProperty(PropertyInterface("End Point", r)),
                        e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                        i
                      );
                    }
                    function s(t, e, r) {
                      var i,
                        s,
                        a = propertyGroupFactory(l, r),
                        n = propertyGroupFactory(h, a),
                        o = t.d ? t.d.length : 0,
                        h = {};
                      for (i = 0; i < o; i += 1)
                        (s = i),
                          Object.defineProperty(h, t.d[s].nm, {
                            get: ExpressionPropertyInterface(
                              e.d.dataProps[s].p
                            ),
                          }),
                          e.d.dataProps[i].p.setGroupProperty(n);
                      function l(t) {
                        return "Color" === t || "color" === t
                          ? l.color
                          : "Opacity" === t || "opacity" === t
                          ? l.opacity
                          : "Stroke Width" === t || "stroke width" === t
                          ? l.strokeWidth
                          : null;
                      }
                      return (
                        Object.defineProperties(l, {
                          color: { get: ExpressionPropertyInterface(e.c) },
                          opacity: { get: ExpressionPropertyInterface(e.o) },
                          strokeWidth: {
                            get: ExpressionPropertyInterface(e.w),
                          },
                          dash: {
                            get: function () {
                              return h;
                            },
                          },
                          _name: { value: t.nm },
                          mn: { value: t.mn },
                        }),
                        e.c.setGroupProperty(PropertyInterface("Color", a)),
                        e.o.setGroupProperty(PropertyInterface("Opacity", a)),
                        e.w.setGroupProperty(
                          PropertyInterface("Stroke Width", a)
                        ),
                        l
                      );
                    }
                    function a(t, e, r) {
                      function i(e) {
                        return e === t.e.ix || "End" === e || "end" === e
                          ? i.end
                          : e === t.s.ix
                          ? i.start
                          : e === t.o.ix
                          ? i.offset
                          : null;
                      }
                      var s = propertyGroupFactory(i, r);
                      return (
                        (i.propertyIndex = t.ix),
                        e.s.setGroupProperty(PropertyInterface("Start", s)),
                        e.e.setGroupProperty(PropertyInterface("End", s)),
                        e.o.setGroupProperty(PropertyInterface("Offset", s)),
                        (i.propertyIndex = t.ix),
                        (i.propertyGroup = r),
                        Object.defineProperties(i, {
                          start: { get: ExpressionPropertyInterface(e.s) },
                          end: { get: ExpressionPropertyInterface(e.e) },
                          offset: { get: ExpressionPropertyInterface(e.o) },
                          _name: { value: t.nm },
                        }),
                        (i.mn = t.mn),
                        i
                      );
                    }
                    function n(t, e, r) {
                      function i(e) {
                        return t.a.ix === e || "Anchor Point" === e
                          ? i.anchorPoint
                          : t.o.ix === e || "Opacity" === e
                          ? i.opacity
                          : t.p.ix === e || "Position" === e
                          ? i.position
                          : t.r.ix === e ||
                            "Rotation" === e ||
                            "ADBE Vector Rotation" === e
                          ? i.rotation
                          : t.s.ix === e || "Scale" === e
                          ? i.scale
                          : (t.sk && t.sk.ix === e) || "Skew" === e
                          ? i.skew
                          : (t.sa && t.sa.ix === e) || "Skew Axis" === e
                          ? i.skewAxis
                          : null;
                      }
                      var s = propertyGroupFactory(i, r);
                      return (
                        e.transform.mProps.o.setGroupProperty(
                          PropertyInterface("Opacity", s)
                        ),
                        e.transform.mProps.p.setGroupProperty(
                          PropertyInterface("Position", s)
                        ),
                        e.transform.mProps.a.setGroupProperty(
                          PropertyInterface("Anchor Point", s)
                        ),
                        e.transform.mProps.s.setGroupProperty(
                          PropertyInterface("Scale", s)
                        ),
                        e.transform.mProps.r.setGroupProperty(
                          PropertyInterface("Rotation", s)
                        ),
                        e.transform.mProps.sk &&
                          (e.transform.mProps.sk.setGroupProperty(
                            PropertyInterface("Skew", s)
                          ),
                          e.transform.mProps.sa.setGroupProperty(
                            PropertyInterface("Skew Angle", s)
                          )),
                        e.transform.op.setGroupProperty(
                          PropertyInterface("Opacity", s)
                        ),
                        Object.defineProperties(i, {
                          opacity: {
                            get: ExpressionPropertyInterface(
                              e.transform.mProps.o
                            ),
                          },
                          position: {
                            get: ExpressionPropertyInterface(
                              e.transform.mProps.p
                            ),
                          },
                          anchorPoint: {
                            get: ExpressionPropertyInterface(
                              e.transform.mProps.a
                            ),
                          },
                          scale: {
                            get: ExpressionPropertyInterface(
                              e.transform.mProps.s
                            ),
                          },
                          rotation: {
                            get: ExpressionPropertyInterface(
                              e.transform.mProps.r
                            ),
                          },
                          skew: {
                            get: ExpressionPropertyInterface(
                              e.transform.mProps.sk
                            ),
                          },
                          skewAxis: {
                            get: ExpressionPropertyInterface(
                              e.transform.mProps.sa
                            ),
                          },
                          _name: { value: t.nm },
                        }),
                        (i.ty = "tr"),
                        (i.mn = t.mn),
                        (i.propertyGroup = r),
                        i
                      );
                    }
                    function o(t, e, r) {
                      function i(e) {
                        return t.p.ix === e
                          ? i.position
                          : t.s.ix === e
                          ? i.size
                          : null;
                      }
                      var s = propertyGroupFactory(i, r);
                      i.propertyIndex = t.ix;
                      var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                      return (
                        a.s.setGroupProperty(PropertyInterface("Size", s)),
                        a.p.setGroupProperty(PropertyInterface("Position", s)),
                        Object.defineProperties(i, {
                          size: { get: ExpressionPropertyInterface(a.s) },
                          position: { get: ExpressionPropertyInterface(a.p) },
                          _name: { value: t.nm },
                        }),
                        (i.mn = t.mn),
                        i
                      );
                    }
                    function h(t, e, r) {
                      function i(e) {
                        return t.p.ix === e
                          ? i.position
                          : t.r.ix === e
                          ? i.rotation
                          : t.pt.ix === e
                          ? i.points
                          : t.or.ix === e ||
                            "ADBE Vector Star Outer Radius" === e
                          ? i.outerRadius
                          : t.os.ix === e
                          ? i.outerRoundness
                          : !t.ir ||
                            (t.ir.ix !== e &&
                              "ADBE Vector Star Inner Radius" !== e)
                          ? t.is && t.is.ix === e
                            ? i.innerRoundness
                            : null
                          : i.innerRadius;
                      }
                      var s = propertyGroupFactory(i, r),
                        a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                      return (
                        (i.propertyIndex = t.ix),
                        a.or.setGroupProperty(
                          PropertyInterface("Outer Radius", s)
                        ),
                        a.os.setGroupProperty(
                          PropertyInterface("Outer Roundness", s)
                        ),
                        a.pt.setGroupProperty(PropertyInterface("Points", s)),
                        a.p.setGroupProperty(PropertyInterface("Position", s)),
                        a.r.setGroupProperty(PropertyInterface("Rotation", s)),
                        t.ir &&
                          (a.ir.setGroupProperty(
                            PropertyInterface("Inner Radius", s)
                          ),
                          a.is.setGroupProperty(
                            PropertyInterface("Inner Roundness", s)
                          )),
                        Object.defineProperties(i, {
                          position: { get: ExpressionPropertyInterface(a.p) },
                          rotation: { get: ExpressionPropertyInterface(a.r) },
                          points: { get: ExpressionPropertyInterface(a.pt) },
                          outerRadius: {
                            get: ExpressionPropertyInterface(a.or),
                          },
                          outerRoundness: {
                            get: ExpressionPropertyInterface(a.os),
                          },
                          innerRadius: {
                            get: ExpressionPropertyInterface(a.ir),
                          },
                          innerRoundness: {
                            get: ExpressionPropertyInterface(a.is),
                          },
                          _name: { value: t.nm },
                        }),
                        (i.mn = t.mn),
                        i
                      );
                    }
                    function l(t, e, r) {
                      function i(e) {
                        return t.p.ix === e
                          ? i.position
                          : t.r.ix === e
                          ? i.roundness
                          : t.s.ix === e ||
                            "Size" === e ||
                            "ADBE Vector Rect Size" === e
                          ? i.size
                          : null;
                      }
                      var s = propertyGroupFactory(i, r),
                        a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                      return (
                        (i.propertyIndex = t.ix),
                        a.p.setGroupProperty(PropertyInterface("Position", s)),
                        a.s.setGroupProperty(PropertyInterface("Size", s)),
                        a.r.setGroupProperty(PropertyInterface("Rotation", s)),
                        Object.defineProperties(i, {
                          position: { get: ExpressionPropertyInterface(a.p) },
                          roundness: { get: ExpressionPropertyInterface(a.r) },
                          size: { get: ExpressionPropertyInterface(a.s) },
                          _name: { value: t.nm },
                        }),
                        (i.mn = t.mn),
                        i
                      );
                    }
                    function p(t, e, r) {
                      function i(e) {
                        return t.r.ix === e || "Round Corners 1" === e
                          ? i.radius
                          : null;
                      }
                      var s = propertyGroupFactory(i, r),
                        a = e;
                      return (
                        (i.propertyIndex = t.ix),
                        a.rd.setGroupProperty(PropertyInterface("Radius", s)),
                        Object.defineProperties(i, {
                          radius: { get: ExpressionPropertyInterface(a.rd) },
                          _name: { value: t.nm },
                        }),
                        (i.mn = t.mn),
                        i
                      );
                    }
                    function f(t, e, r) {
                      function i(e) {
                        return t.c.ix === e || "Copies" === e
                          ? i.copies
                          : t.o.ix === e || "Offset" === e
                          ? i.offset
                          : null;
                      }
                      var s = propertyGroupFactory(i, r),
                        a = e;
                      return (
                        (i.propertyIndex = t.ix),
                        a.c.setGroupProperty(PropertyInterface("Copies", s)),
                        a.o.setGroupProperty(PropertyInterface("Offset", s)),
                        Object.defineProperties(i, {
                          copies: { get: ExpressionPropertyInterface(a.c) },
                          offset: { get: ExpressionPropertyInterface(a.o) },
                          _name: { value: t.nm },
                        }),
                        (i.mn = t.mn),
                        i
                      );
                    }
                    return function (e, r, i) {
                      var s;
                      function a(t) {
                        if ("number" == typeof t)
                          return 0 === (t = void 0 === t ? 1 : t)
                            ? i
                            : s[t - 1];
                        for (var e = 0, r = s.length; e < r; ) {
                          if (s[e]._name === t) return s[e];
                          e += 1;
                        }
                        return null;
                      }
                      return (
                        (a.propertyGroup = propertyGroupFactory(a, function () {
                          return i;
                        })),
                        (s = t(e, r, a.propertyGroup)),
                        (a.numProperties = s.length),
                        (a._name = "Contents"),
                        a
                      );
                    };
                  })(),
                  TextExpressionInterface = function (t) {
                    var e;
                    function r(t) {
                      return "ADBE Text Document" === t ? r.sourceText : null;
                    }
                    return (
                      Object.defineProperty(r, "sourceText", {
                        get: function () {
                          t.textProperty.getValue();
                          var r = t.textProperty.currentData.t;
                          return (
                            (!e || r !== e.value) &&
                              (((e = new String(r)).value = r || new String(r)),
                              Object.defineProperty(e, "style", {
                                get: function () {
                                  return {
                                    fillColor: t.textProperty.currentData.fc,
                                  };
                                },
                              })),
                            e
                          );
                        },
                      }),
                      r
                    );
                  };
                function _typeof(t) {
                  return (_typeof =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                var FootageInterface = (function () {
                    var t = function (t) {
                      function e(t) {
                        return "Outline" === t ? e.outlineInterface() : null;
                      }
                      return (
                        (e._name = "Outline"),
                        (e.outlineInterface = (function (t) {
                          var e = "",
                            r = t.getFootageData();
                          function i(t) {
                            if (r[t])
                              return (
                                (e = t),
                                "object" === _typeof((r = r[t])) ? i : r
                              );
                            var s = t.indexOf(e);
                            if (-1 !== s) {
                              var a = parseInt(t.substr(s + e.length), 10);
                              return "object" === _typeof((r = r[a])) ? i : r;
                            }
                            return "";
                          }
                          return function () {
                            return (e = ""), (r = t.getFootageData()), i;
                          };
                        })(t)),
                        e
                      );
                    };
                    return function (e) {
                      function r(t) {
                        return "Data" === t ? r.dataInterface : null;
                      }
                      return (r._name = "Data"), (r.dataInterface = t(e)), r;
                    };
                  })(),
                  interfaces = {
                    layer: LayerExpressionInterface,
                    effects: EffectsExpressionInterface,
                    comp: CompExpressionInterface,
                    shape: ShapeExpressionInterface,
                    text: TextExpressionInterface,
                    footage: FootageInterface,
                  };
                function getInterface(t) {
                  return interfaces[t] || null;
                }
                var expressionHelpers = {
                  searchExpressions: function (t, e, r) {
                    e.x &&
                      ((r.k = !0),
                      (r.x = !0),
                      (r.initiateExpression =
                        ExpressionManager.initiateExpression),
                      r.effectsSequence.push(
                        r.initiateExpression(t, e, r).bind(r)
                      ));
                  },
                  getSpeedAtTime: function (t) {
                    var e = this.getValueAtTime(t),
                      r = this.getValueAtTime(t + -0.01),
                      i = 0;
                    if (e.length) {
                      var s;
                      for (s = 0; s < e.length; s += 1)
                        i += Math.pow(r[s] - e[s], 2);
                      i = 100 * Math.sqrt(i);
                    } else i = 0;
                    return i;
                  },
                  getVelocityAtTime: function (t) {
                    if (void 0 !== this.vel) return this.vel;
                    var e,
                      r,
                      i = -0.001,
                      s = this.getValueAtTime(t),
                      a = this.getValueAtTime(t + i);
                    if (s.length)
                      for (
                        e = createTypedArray("float32", s.length), r = 0;
                        r < s.length;
                        r += 1
                      )
                        e[r] = (a[r] - s[r]) / i;
                    else e = (a - s) / i;
                    return e;
                  },
                  getValueAtTime: function (t) {
                    return (
                      (t *= this.elem.globalData.frameRate),
                      (t -= this.offsetTime) !==
                        this._cachingAtTime.lastFrame &&
                        ((this._cachingAtTime.lastIndex =
                          this._cachingAtTime.lastFrame < t
                            ? this._cachingAtTime.lastIndex
                            : 0),
                        (this._cachingAtTime.value = this.interpolateValue(
                          t,
                          this._cachingAtTime
                        )),
                        (this._cachingAtTime.lastFrame = t)),
                      this._cachingAtTime.value
                    );
                  },
                  getStaticValueAtTime: function () {
                    return this.pv;
                  },
                  setGroupProperty: function (t) {
                    this.propertyGroup = t;
                  },
                };
                function addPropertyDecorator() {
                  function t(t, e, r) {
                    if (!this.k || !this.keyframes) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var i,
                      s,
                      a,
                      n,
                      o,
                      h = this.comp.renderedFrame,
                      l = this.keyframes,
                      p = l[l.length - 1].t;
                    if (h <= p) return this.pv;
                    if (
                      (r
                        ? (s =
                            p -
                            (i = e
                              ? Math.abs(
                                  p - this.elem.comp.globalData.frameRate * e
                                )
                              : Math.max(0, p - this.elem.data.ip)))
                        : ((!e || e > l.length - 1) && (e = l.length - 1),
                          (i = p - (s = l[l.length - 1 - e].t))),
                      "pingpong" === t)
                    ) {
                      if (Math.floor((h - s) / i) % 2 !== 0)
                        return this.getValueAtTime(
                          (i - ((h - s) % i) + s) /
                            this.comp.globalData.frameRate,
                          0
                        );
                    } else {
                      if ("offset" === t) {
                        var f = this.getValueAtTime(
                            s / this.comp.globalData.frameRate,
                            0
                          ),
                          c = this.getValueAtTime(
                            p / this.comp.globalData.frameRate,
                            0
                          ),
                          m = this.getValueAtTime(
                            (((h - s) % i) + s) /
                              this.comp.globalData.frameRate,
                            0
                          ),
                          u = Math.floor((h - s) / i);
                        if (this.pv.length) {
                          for (
                            n = (o = new Array(f.length)).length, a = 0;
                            a < n;
                            a += 1
                          )
                            o[a] = (c[a] - f[a]) * u + m[a];
                          return o;
                        }
                        return (c - f) * u + m;
                      }
                      if ("continue" === t) {
                        var d = this.getValueAtTime(
                            p / this.comp.globalData.frameRate,
                            0
                          ),
                          y = this.getValueAtTime(
                            (p - 0.001) / this.comp.globalData.frameRate,
                            0
                          );
                        if (this.pv.length) {
                          for (
                            n = (o = new Array(d.length)).length, a = 0;
                            a < n;
                            a += 1
                          )
                            o[a] =
                              d[a] +
                              ((d[a] - y[a]) *
                                ((h - p) / this.comp.globalData.frameRate)) /
                                5e-4;
                          return o;
                        }
                        return d + ((h - p) / 0.001) * (d - y);
                      }
                    }
                    return this.getValueAtTime(
                      (((h - s) % i) + s) / this.comp.globalData.frameRate,
                      0
                    );
                  }
                  function e(t, e, r) {
                    if (!this.k) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var i,
                      s,
                      a,
                      n,
                      o,
                      h = this.comp.renderedFrame,
                      l = this.keyframes,
                      p = l[0].t;
                    if (h >= p) return this.pv;
                    if (
                      (r
                        ? (s =
                            p +
                            (i = e
                              ? Math.abs(
                                  this.elem.comp.globalData.frameRate * e
                                )
                              : Math.max(0, this.elem.data.op - p)))
                        : ((!e || e > l.length - 1) && (e = l.length - 1),
                          (i = (s = l[e].t) - p)),
                      "pingpong" === t)
                    ) {
                      if (Math.floor((p - h) / i) % 2 === 0)
                        return this.getValueAtTime(
                          (((p - h) % i) + p) / this.comp.globalData.frameRate,
                          0
                        );
                    } else {
                      if ("offset" === t) {
                        var f = this.getValueAtTime(
                            p / this.comp.globalData.frameRate,
                            0
                          ),
                          c = this.getValueAtTime(
                            s / this.comp.globalData.frameRate,
                            0
                          ),
                          m = this.getValueAtTime(
                            (i - ((p - h) % i) + p) /
                              this.comp.globalData.frameRate,
                            0
                          ),
                          u = Math.floor((p - h) / i) + 1;
                        if (this.pv.length) {
                          for (
                            n = (o = new Array(f.length)).length, a = 0;
                            a < n;
                            a += 1
                          )
                            o[a] = m[a] - (c[a] - f[a]) * u;
                          return o;
                        }
                        return m - (c - f) * u;
                      }
                      if ("continue" === t) {
                        var d = this.getValueAtTime(
                            p / this.comp.globalData.frameRate,
                            0
                          ),
                          y = this.getValueAtTime(
                            (p + 0.001) / this.comp.globalData.frameRate,
                            0
                          );
                        if (this.pv.length) {
                          for (
                            n = (o = new Array(d.length)).length, a = 0;
                            a < n;
                            a += 1
                          )
                            o[a] = d[a] + ((d[a] - y[a]) * (p - h)) / 0.001;
                          return o;
                        }
                        return d + ((d - y) * (p - h)) / 0.001;
                      }
                    }
                    return this.getValueAtTime(
                      (i - (((p - h) % i) + p)) /
                        this.comp.globalData.frameRate,
                      0
                    );
                  }
                  function r(t, e) {
                    if (!this.k) return this.pv;
                    if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
                      return this.pv;
                    var r,
                      i,
                      s =
                        this.comp.renderedFrame /
                        this.comp.globalData.frameRate,
                      a = s - t,
                      n = e > 1 ? (s + t - a) / (e - 1) : 1,
                      o = 0,
                      h = 0;
                    for (
                      r = this.pv.length
                        ? createTypedArray("float32", this.pv.length)
                        : 0;
                      o < e;

                    ) {
                      if (
                        ((i = this.getValueAtTime(a + o * n)), this.pv.length)
                      )
                        for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
                      else r += i;
                      o += 1;
                    }
                    if (this.pv.length)
                      for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
                    else r /= e;
                    return r;
                  }
                  function i(t) {
                    this._transformCachingAtTime ||
                      (this._transformCachingAtTime = { v: new Matrix() });
                    var e = this._transformCachingAtTime.v;
                    if (
                      (e.cloneFromProps(this.pre.props),
                      this.appliedTransformations < 1)
                    ) {
                      var r = this.a.getValueAtTime(t);
                      e.translate(
                        -r[0] * this.a.mult,
                        -r[1] * this.a.mult,
                        r[2] * this.a.mult
                      );
                    }
                    if (this.appliedTransformations < 2) {
                      var i = this.s.getValueAtTime(t);
                      e.scale(
                        i[0] * this.s.mult,
                        i[1] * this.s.mult,
                        i[2] * this.s.mult
                      );
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                      var s = this.sk.getValueAtTime(t),
                        a = this.sa.getValueAtTime(t);
                      e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult);
                    }
                    if (this.r && this.appliedTransformations < 4) {
                      var n = this.r.getValueAtTime(t);
                      e.rotate(-n * this.r.mult);
                    } else if (!this.r && this.appliedTransformations < 4) {
                      var o = this.rz.getValueAtTime(t),
                        h = this.ry.getValueAtTime(t),
                        l = this.rx.getValueAtTime(t),
                        p = this.or.getValueAtTime(t);
                      e.rotateZ(-o * this.rz.mult)
                        .rotateY(h * this.ry.mult)
                        .rotateX(l * this.rx.mult)
                        .rotateZ(-p[2] * this.or.mult)
                        .rotateY(p[1] * this.or.mult)
                        .rotateX(p[0] * this.or.mult);
                    }
                    if (this.data.p && this.data.p.s) {
                      var f = this.px.getValueAtTime(t),
                        c = this.py.getValueAtTime(t);
                      if (this.data.p.z) {
                        var m = this.pz.getValueAtTime(t);
                        e.translate(
                          f * this.px.mult,
                          c * this.py.mult,
                          -m * this.pz.mult
                        );
                      } else e.translate(f * this.px.mult, c * this.py.mult, 0);
                    } else {
                      var u = this.p.getValueAtTime(t);
                      e.translate(
                        u[0] * this.p.mult,
                        u[1] * this.p.mult,
                        -u[2] * this.p.mult
                      );
                    }
                    return e;
                  }
                  function s() {
                    return this.v.clone(new Matrix());
                  }
                  var a = TransformPropertyFactory.getTransformProperty;
                  TransformPropertyFactory.getTransformProperty = function (
                    t,
                    e,
                    r
                  ) {
                    var n = a(t, e, r);
                    return (
                      n.dynamicProperties.length
                        ? (n.getValueAtTime = i.bind(n))
                        : (n.getValueAtTime = s.bind(n)),
                      (n.setGroupProperty = expressionHelpers.setGroupProperty),
                      n
                    );
                  };
                  var n = PropertyFactory.getProp;
                  PropertyFactory.getProp = function (i, s, a, o, h) {
                    var l = n(i, s, a, o, h);
                    l.kf
                      ? (l.getValueAtTime =
                          expressionHelpers.getValueAtTime.bind(l))
                      : (l.getValueAtTime =
                          expressionHelpers.getStaticValueAtTime.bind(l)),
                      (l.setGroupProperty = expressionHelpers.setGroupProperty),
                      (l.loopOut = t),
                      (l.loopIn = e),
                      (l.smooth = r),
                      (l.getVelocityAtTime =
                        expressionHelpers.getVelocityAtTime.bind(l)),
                      (l.getSpeedAtTime =
                        expressionHelpers.getSpeedAtTime.bind(l)),
                      (l.numKeys = 1 === s.a ? s.k.length : 0),
                      (l.propertyIndex = s.ix);
                    var p = 0;
                    return (
                      0 !== a &&
                        (p = createTypedArray(
                          "float32",
                          1 === s.a ? s.k[0].s.length : s.k.length
                        )),
                      (l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: p,
                      }),
                      expressionHelpers.searchExpressions(i, s, l),
                      l.k && h.addDynamicProperty(l),
                      l
                    );
                  };
                  var o = ShapePropertyFactory.getConstructorFunction(),
                    h = ShapePropertyFactory.getKeyframedConstructorFunction();
                  function l() {}
                  (l.prototype = {
                    vertices: function (t, e) {
                      this.k && this.getValue();
                      var r = this.v;
                      void 0 !== e && (r = this.getValueAtTime(e, 0));
                      var i,
                        s = r._length,
                        a = r[t],
                        n = r.v,
                        o = createSizedArray(s);
                      for (i = 0; i < s; i += 1)
                        o[i] =
                          "i" === t || "o" === t
                            ? [a[i][0] - n[i][0], a[i][1] - n[i][1]]
                            : [a[i][0], a[i][1]];
                      return o;
                    },
                    points: function (t) {
                      return this.vertices("v", t);
                    },
                    inTangents: function (t) {
                      return this.vertices("i", t);
                    },
                    outTangents: function (t) {
                      return this.vertices("o", t);
                    },
                    isClosed: function () {
                      return this.v.c;
                    },
                    pointOnPath: function (t, e) {
                      var r = this.v;
                      void 0 !== e && (r = this.getValueAtTime(e, 0)),
                        this._segmentsLength ||
                          (this._segmentsLength = bez.getSegmentsLength(r));
                      for (
                        var i,
                          s = this._segmentsLength,
                          a = s.lengths,
                          n = s.totalLength * t,
                          o = 0,
                          h = a.length,
                          l = 0;
                        o < h;

                      ) {
                        if (l + a[o].addedLength > n) {
                          var p = o,
                            f = r.c && o === h - 1 ? 0 : o + 1,
                            c = (n - l) / a[o].addedLength;
                          i = bez.getPointInSegment(
                            r.v[p],
                            r.v[f],
                            r.o[p],
                            r.i[f],
                            c,
                            a[o]
                          );
                          break;
                        }
                        (l += a[o].addedLength), (o += 1);
                      }
                      return (
                        i ||
                          (i = r.c
                            ? [r.v[0][0], r.v[0][1]]
                            : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
                        i
                      );
                    },
                    vectorOnPath: function (t, e, r) {
                      1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
                      var i = this.pointOnPath(t, e),
                        s = this.pointOnPath(t + 0.001, e),
                        a = s[0] - i[0],
                        n = s[1] - i[1],
                        o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                      return 0 === o
                        ? [0, 0]
                        : "tangent" === r
                        ? [a / o, n / o]
                        : [-n / o, a / o];
                    },
                    tangentOnPath: function (t, e) {
                      return this.vectorOnPath(t, e, "tangent");
                    },
                    normalOnPath: function (t, e) {
                      return this.vectorOnPath(t, e, "normal");
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime,
                  }),
                    extendPrototype([l], o),
                    extendPrototype([l], h),
                    (h.prototype.getValueAtTime = function (t) {
                      return (
                        this._cachingAtTime ||
                          (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame,
                          }),
                        (t *= this.elem.globalData.frameRate),
                        (t -= this.offsetTime) !==
                          this._cachingAtTime.lastTime &&
                          ((this._cachingAtTime.lastIndex =
                            this._cachingAtTime.lastTime < t
                              ? this._caching.lastIndex
                              : 0),
                          (this._cachingAtTime.lastTime = t),
                          this.interpolateShape(
                            t,
                            this._cachingAtTime.shapeValue,
                            this._cachingAtTime
                          )),
                        this._cachingAtTime.shapeValue
                      );
                    }),
                    (h.prototype.initiateExpression =
                      ExpressionManager.initiateExpression);
                  var p = ShapePropertyFactory.getShapeProp;
                  ShapePropertyFactory.getShapeProp = function (t, e, r, i, s) {
                    var a = p(t, e, r, i, s);
                    return (
                      (a.propertyIndex = e.ix),
                      (a.lock = !1),
                      3 === r
                        ? expressionHelpers.searchExpressions(t, e.pt, a)
                        : 4 === r &&
                          expressionHelpers.searchExpressions(t, e.ks, a),
                      a.k && t.addDynamicProperty(a),
                      a
                    );
                  };
                }
                function initialize$1() {
                  addPropertyDecorator();
                }
                function addDecorator() {
                  (TextProperty.prototype.getExpressionValue = function (t, e) {
                    var r = this.calculateExpression(e);
                    if (t.t !== r) {
                      var i = {};
                      return (
                        this.copyData(i, t),
                        (i.t = r.toString()),
                        (i.__complete = !1),
                        i
                      );
                    }
                    return t;
                  }),
                    (TextProperty.prototype.searchProperty = function () {
                      var t = this.searchKeyframes(),
                        e = this.searchExpressions();
                      return (this.kf = t || e), this.kf;
                    }),
                    (TextProperty.prototype.searchExpressions = function () {
                      return this.data.d.x
                        ? ((this.calculateExpression =
                            ExpressionManager.initiateExpression.bind(this)(
                              this.elem,
                              this.data.d,
                              this
                            )),
                          this.addEffect(this.getExpressionValue.bind(this)),
                          !0)
                        : null;
                    });
                }
                function initialize() {
                  addDecorator();
                }
                function SVGComposableEffect() {}
                SVGComposableEffect.prototype = {
                  createMergeNode: function (t, e) {
                    var r,
                      i,
                      s = createNS("feMerge");
                    for (
                      s.setAttribute("result", t), i = 0;
                      i < e.length;
                      i += 1
                    )
                      (r = createNS("feMergeNode")).setAttribute("in", e[i]),
                        s.appendChild(r),
                        s.appendChild(r);
                    return s;
                  },
                };
                var linearFilterValue =
                  "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
                function SVGTintFilter(t, e, r, i, s) {
                  this.filterManager = e;
                  var a = createNS("feColorMatrix");
                  a.setAttribute("type", "matrix"),
                    a.setAttribute("color-interpolation-filters", "linearRGB"),
                    a.setAttribute("values", linearFilterValue + " 1 0"),
                    (this.linearFilter = a),
                    a.setAttribute("result", i + "_tint_1"),
                    t.appendChild(a),
                    (a = createNS("feColorMatrix")).setAttribute(
                      "type",
                      "matrix"
                    ),
                    a.setAttribute("color-interpolation-filters", "sRGB"),
                    a.setAttribute(
                      "values",
                      "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
                    ),
                    a.setAttribute("result", i + "_tint_2"),
                    t.appendChild(a),
                    (this.matrixFilter = a);
                  var n = this.createMergeNode(i, [
                    s,
                    i + "_tint_1",
                    i + "_tint_2",
                  ]);
                  t.appendChild(n);
                }
                function SVGFillFilter(t, e, r, i) {
                  this.filterManager = e;
                  var s = createNS("feColorMatrix");
                  s.setAttribute("type", "matrix"),
                    s.setAttribute("color-interpolation-filters", "sRGB"),
                    s.setAttribute(
                      "values",
                      "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
                    ),
                    s.setAttribute("result", i),
                    t.appendChild(s),
                    (this.matrixFilter = s);
                }
                function SVGStrokeEffect(t, e, r) {
                  (this.initialized = !1),
                    (this.filterManager = e),
                    (this.elem = r),
                    (this.paths = []);
                }
                function SVGTritoneFilter(t, e, r, i) {
                  this.filterManager = e;
                  var s = createNS("feColorMatrix");
                  s.setAttribute("type", "matrix"),
                    s.setAttribute("color-interpolation-filters", "linearRGB"),
                    s.setAttribute(
                      "values",
                      "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
                    ),
                    t.appendChild(s);
                  var a = createNS("feComponentTransfer");
                  a.setAttribute("color-interpolation-filters", "sRGB"),
                    a.setAttribute("result", i),
                    (this.matrixFilter = a);
                  var n = createNS("feFuncR");
                  n.setAttribute("type", "table"),
                    a.appendChild(n),
                    (this.feFuncR = n);
                  var o = createNS("feFuncG");
                  o.setAttribute("type", "table"),
                    a.appendChild(o),
                    (this.feFuncG = o);
                  var h = createNS("feFuncB");
                  h.setAttribute("type", "table"),
                    a.appendChild(h),
                    (this.feFuncB = h),
                    t.appendChild(a);
                }
                function SVGProLevelsFilter(t, e, r, i) {
                  this.filterManager = e;
                  var s = this.filterManager.effectElements,
                    a = createNS("feComponentTransfer");
                  (s[10].p.k ||
                    0 !== s[10].p.v ||
                    s[11].p.k ||
                    1 !== s[11].p.v ||
                    s[12].p.k ||
                    1 !== s[12].p.v ||
                    s[13].p.k ||
                    0 !== s[13].p.v ||
                    s[14].p.k ||
                    1 !== s[14].p.v) &&
                    (this.feFuncR = this.createFeFunc("feFuncR", a)),
                    (s[17].p.k ||
                      0 !== s[17].p.v ||
                      s[18].p.k ||
                      1 !== s[18].p.v ||
                      s[19].p.k ||
                      1 !== s[19].p.v ||
                      s[20].p.k ||
                      0 !== s[20].p.v ||
                      s[21].p.k ||
                      1 !== s[21].p.v) &&
                      (this.feFuncG = this.createFeFunc("feFuncG", a)),
                    (s[24].p.k ||
                      0 !== s[24].p.v ||
                      s[25].p.k ||
                      1 !== s[25].p.v ||
                      s[26].p.k ||
                      1 !== s[26].p.v ||
                      s[27].p.k ||
                      0 !== s[27].p.v ||
                      s[28].p.k ||
                      1 !== s[28].p.v) &&
                      (this.feFuncB = this.createFeFunc("feFuncB", a)),
                    (s[31].p.k ||
                      0 !== s[31].p.v ||
                      s[32].p.k ||
                      1 !== s[32].p.v ||
                      s[33].p.k ||
                      1 !== s[33].p.v ||
                      s[34].p.k ||
                      0 !== s[34].p.v ||
                      s[35].p.k ||
                      1 !== s[35].p.v) &&
                      (this.feFuncA = this.createFeFunc("feFuncA", a)),
                    (this.feFuncR ||
                      this.feFuncG ||
                      this.feFuncB ||
                      this.feFuncA) &&
                      (a.setAttribute("color-interpolation-filters", "sRGB"),
                      t.appendChild(a)),
                    (s[3].p.k ||
                      0 !== s[3].p.v ||
                      s[4].p.k ||
                      1 !== s[4].p.v ||
                      s[5].p.k ||
                      1 !== s[5].p.v ||
                      s[6].p.k ||
                      0 !== s[6].p.v ||
                      s[7].p.k ||
                      1 !== s[7].p.v) &&
                      ((a = createNS("feComponentTransfer")).setAttribute(
                        "color-interpolation-filters",
                        "sRGB"
                      ),
                      a.setAttribute("result", i),
                      t.appendChild(a),
                      (this.feFuncRComposed = this.createFeFunc("feFuncR", a)),
                      (this.feFuncGComposed = this.createFeFunc("feFuncG", a)),
                      (this.feFuncBComposed = this.createFeFunc("feFuncB", a)));
                }
                function SVGDropShadowEffect(t, e, r, i, s) {
                  var a = e.container.globalData.renderConfig.filterSize,
                    n = e.data.fs || a;
                  t.setAttribute("x", n.x || a.x),
                    t.setAttribute("y", n.y || a.y),
                    t.setAttribute("width", n.width || a.width),
                    t.setAttribute("height", n.height || a.height),
                    (this.filterManager = e);
                  var o = createNS("feGaussianBlur");
                  o.setAttribute("in", "SourceAlpha"),
                    o.setAttribute("result", i + "_drop_shadow_1"),
                    o.setAttribute("stdDeviation", "0"),
                    (this.feGaussianBlur = o),
                    t.appendChild(o);
                  var h = createNS("feOffset");
                  h.setAttribute("dx", "25"),
                    h.setAttribute("dy", "0"),
                    h.setAttribute("in", i + "_drop_shadow_1"),
                    h.setAttribute("result", i + "_drop_shadow_2"),
                    (this.feOffset = h),
                    t.appendChild(h);
                  var l = createNS("feFlood");
                  l.setAttribute("flood-color", "#00ff00"),
                    l.setAttribute("flood-opacity", "1"),
                    l.setAttribute("result", i + "_drop_shadow_3"),
                    (this.feFlood = l),
                    t.appendChild(l);
                  var p = createNS("feComposite");
                  p.setAttribute("in", i + "_drop_shadow_3"),
                    p.setAttribute("in2", i + "_drop_shadow_2"),
                    p.setAttribute("operator", "in"),
                    p.setAttribute("result", i + "_drop_shadow_4"),
                    t.appendChild(p);
                  var f = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
                  t.appendChild(f);
                }
                extendPrototype([SVGComposableEffect], SVGTintFilter),
                  (SVGTintFilter.prototype.renderFrame = function (t) {
                    if (t || this.filterManager._mdf) {
                      var e = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v / 100;
                      this.linearFilter.setAttribute(
                        "values",
                        linearFilterValue + " " + i + " 0"
                      ),
                        this.matrixFilter.setAttribute(
                          "values",
                          r[0] -
                            e[0] +
                            " 0 0 0 " +
                            e[0] +
                            " " +
                            (r[1] - e[1]) +
                            " 0 0 0 " +
                            e[1] +
                            " " +
                            (r[2] - e[2]) +
                            " 0 0 0 " +
                            e[2] +
                            " 0 0 0 1 0"
                        );
                    }
                  }),
                  (SVGFillFilter.prototype.renderFrame = function (t) {
                    if (t || this.filterManager._mdf) {
                      var e = this.filterManager.effectElements[2].p.v,
                        r = this.filterManager.effectElements[6].p.v;
                      this.matrixFilter.setAttribute(
                        "values",
                        "0 0 0 0 " +
                          e[0] +
                          " 0 0 0 0 " +
                          e[1] +
                          " 0 0 0 0 " +
                          e[2] +
                          " 0 0 0 " +
                          r +
                          " 0"
                      );
                    }
                  }),
                  (SVGStrokeEffect.prototype.initialize = function () {
                    var t,
                      e,
                      r,
                      i,
                      s =
                        this.elem.layerElement.children ||
                        this.elem.layerElement.childNodes;
                    for (
                      1 === this.filterManager.effectElements[1].p.v
                        ? ((i = this.elem.maskManager.masksProperties.length),
                          (r = 0))
                        : (i =
                            1 +
                            (r = this.filterManager.effectElements[0].p.v - 1)),
                        (e = createNS("g")).setAttribute("fill", "none"),
                        e.setAttribute("stroke-linecap", "round"),
                        e.setAttribute("stroke-dashoffset", 1);
                      r < i;
                      r += 1
                    )
                      (t = createNS("path")),
                        e.appendChild(t),
                        this.paths.push({ p: t, m: r });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                      var a = createNS("mask"),
                        n = createElementID();
                      a.setAttribute("id", n),
                        a.setAttribute("mask-type", "alpha"),
                        a.appendChild(e),
                        this.elem.globalData.defs.appendChild(a);
                      var o = createNS("g");
                      for (
                        o.setAttribute(
                          "mask",
                          "url(" + getLocationHref() + "#" + n + ")"
                        );
                        s[0];

                      )
                        o.appendChild(s[0]);
                      this.elem.layerElement.appendChild(o),
                        (this.masker = a),
                        e.setAttribute("stroke", "#fff");
                    } else if (
                      1 === this.filterManager.effectElements[10].p.v ||
                      2 === this.filterManager.effectElements[10].p.v
                    ) {
                      if (2 === this.filterManager.effectElements[10].p.v)
                        for (
                          s =
                            this.elem.layerElement.children ||
                            this.elem.layerElement.childNodes;
                          s.length;

                        )
                          this.elem.layerElement.removeChild(s[0]);
                      this.elem.layerElement.appendChild(e),
                        this.elem.layerElement.removeAttribute("mask"),
                        e.setAttribute("stroke", "#fff");
                    }
                    (this.initialized = !0), (this.pathMasker = e);
                  }),
                  (SVGStrokeEffect.prototype.renderFrame = function (t) {
                    this.initialized || this.initialize();
                    var e,
                      r,
                      i,
                      s = this.paths.length;
                    for (e = 0; e < s; e += 1)
                      if (
                        -1 !== this.paths[e].m &&
                        ((r = this.elem.maskManager.viewData[this.paths[e].m]),
                        (i = this.paths[e].p),
                        (t || this.filterManager._mdf || r.prop._mdf) &&
                          i.setAttribute("d", r.lastPath),
                        t ||
                          this.filterManager.effectElements[9].p._mdf ||
                          this.filterManager.effectElements[4].p._mdf ||
                          this.filterManager.effectElements[7].p._mdf ||
                          this.filterManager.effectElements[8].p._mdf ||
                          r.prop._mdf)
                      ) {
                        var a;
                        if (
                          0 !== this.filterManager.effectElements[7].p.v ||
                          100 !== this.filterManager.effectElements[8].p.v
                        ) {
                          var n =
                              0.01 *
                              Math.min(
                                this.filterManager.effectElements[7].p.v,
                                this.filterManager.effectElements[8].p.v
                              ),
                            o =
                              0.01 *
                              Math.max(
                                this.filterManager.effectElements[7].p.v,
                                this.filterManager.effectElements[8].p.v
                              ),
                            h = i.getTotalLength();
                          a = "0 0 0 " + h * n + " ";
                          var l,
                            p = h * (o - n),
                            f =
                              1 +
                              2 *
                                this.filterManager.effectElements[4].p.v *
                                this.filterManager.effectElements[9].p.v *
                                0.01,
                            c = Math.floor(p / f);
                          for (l = 0; l < c; l += 1)
                            a +=
                              "1 " +
                              2 *
                                this.filterManager.effectElements[4].p.v *
                                this.filterManager.effectElements[9].p.v *
                                0.01 +
                              " ";
                          a += "0 " + 10 * h + " 0 0";
                        } else
                          a =
                            "1 " +
                            2 *
                              this.filterManager.effectElements[4].p.v *
                              this.filterManager.effectElements[9].p.v *
                              0.01;
                        i.setAttribute("stroke-dasharray", a);
                      }
                    if (
                      ((t || this.filterManager.effectElements[4].p._mdf) &&
                        this.pathMasker.setAttribute(
                          "stroke-width",
                          2 * this.filterManager.effectElements[4].p.v
                        ),
                      (t || this.filterManager.effectElements[6].p._mdf) &&
                        this.pathMasker.setAttribute(
                          "opacity",
                          this.filterManager.effectElements[6].p.v
                        ),
                      (1 === this.filterManager.effectElements[10].p.v ||
                        2 === this.filterManager.effectElements[10].p.v) &&
                        (t || this.filterManager.effectElements[3].p._mdf))
                    ) {
                      var m = this.filterManager.effectElements[3].p.v;
                      this.pathMasker.setAttribute(
                        "stroke",
                        "rgb(" +
                          bmFloor(255 * m[0]) +
                          "," +
                          bmFloor(255 * m[1]) +
                          "," +
                          bmFloor(255 * m[2]) +
                          ")"
                      );
                    }
                  }),
                  (SVGTritoneFilter.prototype.renderFrame = function (t) {
                    if (t || this.filterManager._mdf) {
                      var e = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v,
                        s = i[0] + " " + r[0] + " " + e[0],
                        a = i[1] + " " + r[1] + " " + e[1],
                        n = i[2] + " " + r[2] + " " + e[2];
                      this.feFuncR.setAttribute("tableValues", s),
                        this.feFuncG.setAttribute("tableValues", a),
                        this.feFuncB.setAttribute("tableValues", n);
                    }
                  }),
                  (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
                    var r = createNS(t);
                    return r.setAttribute("type", "table"), e.appendChild(r), r;
                  }),
                  (SVGProLevelsFilter.prototype.getTableValue = function (
                    t,
                    e,
                    r,
                    i,
                    s
                  ) {
                    for (
                      var a,
                        n,
                        o = 0,
                        h = Math.min(t, e),
                        l = Math.max(t, e),
                        p = Array.call(null, { length: 256 }),
                        f = 0,
                        c = s - i,
                        m = e - t;
                      o <= 256;

                    )
                      (n =
                        (a = o / 256) <= h
                          ? m < 0
                            ? s
                            : i
                          : a >= l
                          ? m < 0
                            ? i
                            : s
                          : i + c * Math.pow((a - t) / m, 1 / r)),
                        (p[f] = n),
                        (f += 1),
                        (o += 256 / 255);
                    return p.join(" ");
                  }),
                  (SVGProLevelsFilter.prototype.renderFrame = function (t) {
                    if (t || this.filterManager._mdf) {
                      var e,
                        r = this.filterManager.effectElements;
                      this.feFuncRComposed &&
                        (t ||
                          r[3].p._mdf ||
                          r[4].p._mdf ||
                          r[5].p._mdf ||
                          r[6].p._mdf ||
                          r[7].p._mdf) &&
                        ((e = this.getTableValue(
                          r[3].p.v,
                          r[4].p.v,
                          r[5].p.v,
                          r[6].p.v,
                          r[7].p.v
                        )),
                        this.feFuncRComposed.setAttribute("tableValues", e),
                        this.feFuncGComposed.setAttribute("tableValues", e),
                        this.feFuncBComposed.setAttribute("tableValues", e)),
                        this.feFuncR &&
                          (t ||
                            r[10].p._mdf ||
                            r[11].p._mdf ||
                            r[12].p._mdf ||
                            r[13].p._mdf ||
                            r[14].p._mdf) &&
                          ((e = this.getTableValue(
                            r[10].p.v,
                            r[11].p.v,
                            r[12].p.v,
                            r[13].p.v,
                            r[14].p.v
                          )),
                          this.feFuncR.setAttribute("tableValues", e)),
                        this.feFuncG &&
                          (t ||
                            r[17].p._mdf ||
                            r[18].p._mdf ||
                            r[19].p._mdf ||
                            r[20].p._mdf ||
                            r[21].p._mdf) &&
                          ((e = this.getTableValue(
                            r[17].p.v,
                            r[18].p.v,
                            r[19].p.v,
                            r[20].p.v,
                            r[21].p.v
                          )),
                          this.feFuncG.setAttribute("tableValues", e)),
                        this.feFuncB &&
                          (t ||
                            r[24].p._mdf ||
                            r[25].p._mdf ||
                            r[26].p._mdf ||
                            r[27].p._mdf ||
                            r[28].p._mdf) &&
                          ((e = this.getTableValue(
                            r[24].p.v,
                            r[25].p.v,
                            r[26].p.v,
                            r[27].p.v,
                            r[28].p.v
                          )),
                          this.feFuncB.setAttribute("tableValues", e)),
                        this.feFuncA &&
                          (t ||
                            r[31].p._mdf ||
                            r[32].p._mdf ||
                            r[33].p._mdf ||
                            r[34].p._mdf ||
                            r[35].p._mdf) &&
                          ((e = this.getTableValue(
                            r[31].p.v,
                            r[32].p.v,
                            r[33].p.v,
                            r[34].p.v,
                            r[35].p.v
                          )),
                          this.feFuncA.setAttribute("tableValues", e));
                    }
                  }),
                  extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
                  (SVGDropShadowEffect.prototype.renderFrame = function (t) {
                    if (t || this.filterManager._mdf) {
                      if (
                        ((t || this.filterManager.effectElements[4].p._mdf) &&
                          this.feGaussianBlur.setAttribute(
                            "stdDeviation",
                            this.filterManager.effectElements[4].p.v / 4
                          ),
                        t || this.filterManager.effectElements[0].p._mdf)
                      ) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute(
                          "flood-color",
                          rgbToHex(
                            Math.round(255 * e[0]),
                            Math.round(255 * e[1]),
                            Math.round(255 * e[2])
                          )
                        );
                      }
                      if (
                        ((t || this.filterManager.effectElements[1].p._mdf) &&
                          this.feFlood.setAttribute(
                            "flood-opacity",
                            this.filterManager.effectElements[1].p.v / 255
                          ),
                        t ||
                          this.filterManager.effectElements[2].p._mdf ||
                          this.filterManager.effectElements[3].p._mdf)
                      ) {
                        var r = this.filterManager.effectElements[3].p.v,
                          i =
                            (this.filterManager.effectElements[2].p.v - 90) *
                            degToRads,
                          s = r * Math.cos(i),
                          a = r * Math.sin(i);
                        this.feOffset.setAttribute("dx", s),
                          this.feOffset.setAttribute("dy", a);
                      }
                    }
                  });
                var _svgMatteSymbols = [];
                function SVGMatte3Effect(t, e, r) {
                  (this.initialized = !1),
                    (this.filterManager = e),
                    (this.filterElem = t),
                    (this.elem = r),
                    (r.matteElement = createNS("g")),
                    r.matteElement.appendChild(r.layerElement),
                    r.matteElement.appendChild(r.transformedElement),
                    (r.baseElement = r.matteElement);
                }
                function SVGGaussianBlurEffect(t, e, r, i) {
                  t.setAttribute("x", "-100%"),
                    t.setAttribute("y", "-100%"),
                    t.setAttribute("width", "300%"),
                    t.setAttribute("height", "300%"),
                    (this.filterManager = e);
                  var s = createNS("feGaussianBlur");
                  s.setAttribute("result", i),
                    t.appendChild(s),
                    (this.feGaussianBlur = s);
                }
                function TransformEffect() {}
                function SVGTransformEffect(t, e) {
                  this.init(e);
                }
                return (
                  (SVGMatte3Effect.prototype.findSymbol = function (t) {
                    for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
                      if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                      e += 1;
                    }
                    return null;
                  }),
                  (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
                    var r = t.layerElement.parentNode;
                    if (r) {
                      for (
                        var i = r.children, s = 0, a = i.length;
                        s < a && i[s] !== t.layerElement;

                      )
                        s += 1;
                      var n;
                      s <= a - 2 && (n = i[s + 1]);
                      var o = createNS("use");
                      o.setAttribute("href", "#" + e),
                        n ? r.insertBefore(o, n) : r.appendChild(o);
                    }
                  }),
                  (SVGMatte3Effect.prototype.setElementAsMask = function (
                    t,
                    e
                  ) {
                    if (!this.findSymbol(e)) {
                      var r = createElementID(),
                        i = createNS("mask");
                      i.setAttribute("id", e.layerId),
                        i.setAttribute("mask-type", "alpha"),
                        _svgMatteSymbols.push(e);
                      var s = t.globalData.defs;
                      s.appendChild(i);
                      var a = createNS("symbol");
                      a.setAttribute("id", r),
                        this.replaceInParent(e, r),
                        a.appendChild(e.layerElement),
                        s.appendChild(a);
                      var n = createNS("use");
                      n.setAttribute("href", "#" + r),
                        i.appendChild(n),
                        (e.data.hd = !1),
                        e.show();
                    }
                    t.setMatte(e.layerId);
                  }),
                  (SVGMatte3Effect.prototype.initialize = function () {
                    for (
                      var t = this.filterManager.effectElements[0].p.v,
                        e = this.elem.comp.elements,
                        r = 0,
                        i = e.length;
                      r < i;

                    )
                      e[r] &&
                        e[r].data.ind === t &&
                        this.setElementAsMask(this.elem, e[r]),
                        (r += 1);
                    this.initialized = !0;
                  }),
                  (SVGMatte3Effect.prototype.renderFrame = function () {
                    this.initialized || this.initialize();
                  }),
                  (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
                    if (t || this.filterManager._mdf) {
                      var e = 0.3 * this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = 3 == r ? 0 : e,
                        s = 2 == r ? 0 : e;
                      this.feGaussianBlur.setAttribute(
                        "stdDeviation",
                        i + " " + s
                      );
                      var a =
                        1 == this.filterManager.effectElements[2].p.v
                          ? "wrap"
                          : "duplicate";
                      this.feGaussianBlur.setAttribute("edgeMode", a);
                    }
                  }),
                  (TransformEffect.prototype.init = function (t) {
                    (this.effectsManager = t),
                      (this.type = effectTypes.TRANSFORM_EFFECT),
                      (this.matrix = new Matrix()),
                      (this.opacity = -1),
                      (this._mdf = !1),
                      (this._opMdf = !1);
                  }),
                  (TransformEffect.prototype.renderFrame = function (t) {
                    if (
                      ((this._opMdf = !1),
                      (this._mdf = !1),
                      t || this.effectsManager._mdf)
                    ) {
                      var e = this.effectsManager.effectElements,
                        r = e[0].p.v,
                        i = e[1].p.v,
                        s = 1 === e[2].p.v,
                        a = e[3].p.v,
                        n = s ? a : e[4].p.v,
                        o = e[5].p.v,
                        h = e[6].p.v,
                        l = e[7].p.v;
                      this.matrix.reset(),
                        this.matrix.translate(-r[0], -r[1], r[2]),
                        this.matrix.scale(0.01 * n, 0.01 * a, 1),
                        this.matrix.rotate(-l * degToRads),
                        this.matrix.skewFromAxis(
                          -o * degToRads,
                          (h + 90) * degToRads
                        ),
                        this.matrix.translate(i[0], i[1], 0),
                        (this._mdf = !0),
                        this.opacity !== e[8].p.v &&
                          ((this.opacity = e[8].p.v), (this._opMdf = !0));
                    }
                  }),
                  extendPrototype([TransformEffect], SVGTransformEffect),
                  setExpressionsPlugin(Expressions),
                  setExpressionInterfaces(getInterface),
                  initialize$1(),
                  initialize(),
                  registerEffect(20, SVGTintFilter, !0),
                  registerEffect(21, SVGFillFilter, !0),
                  registerEffect(22, SVGStrokeEffect, !1),
                  registerEffect(23, SVGTritoneFilter, !0),
                  registerEffect(24, SVGProLevelsFilter, !0),
                  registerEffect(25, SVGDropShadowEffect, !0),
                  registerEffect(28, SVGMatte3Effect, !1),
                  registerEffect(29, SVGGaussianBlurEffect, !0),
                  registerEffect(35, SVGTransformEffect, !1),
                  lottie
                );
              }),
              "object" == typeof exports && typeof module < "u"
                ? (module.exports = e())
                : "function" == typeof define && define.amd
                ? define(e)
                : ((t =
                    typeof globalThis < "u" ? globalThis : t || self).lottie =
                    e()));
          }),
          lottie_svgMJGYILXD = dt();
      },
    },
  ]);
