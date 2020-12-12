(function () {
    var DEPS_GRAPH = {
        'enablermodule': [],
        'configurablemodule': ['enablermodule'],
        'gdnmodule': ['enablermodule'],
        'layoutsmodule': ['enablermodule'],
        'videomodule': ['enablermodule'],
        'configurablefillermodule': ['configurablemodule'],
        'layoutsfillermodule': ['layoutsmodule'],
        'rad_ui_videomodule': ['videomodule'],
        '$weak$': ['configurablefillermodule', 'configurablemodule', 'enablermodule', 'gdnmodule', 'layoutsfillermodule', 'layoutsmodule', 'rad_ui_videomodule', 'videomodule']
    };
    window.STUDIO_SDK_START = +new Date();
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var g, aa = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function (a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = function (a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ea("Symbol", function (a) {
        if (a) return a;
        var b = function (e, f) {
            this.a = e;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        };
        b.prototype.toString = function () {
            return this.a
        };
        var c = 0,
            d = function (e) {
                if (this instanceof d) throw new TypeError("Symbol is not a constructor");
                return new b("jscomp_symbol_" + (e || "") + "_" + c++, e)
            };
        return d
    });
    ea("Symbol.iterator", function (a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return fa(aa(this))
                }
            })
        }
        return a
    });
    var fa = function (a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function () {
                return this
            };
            return a
        },
        ha = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ia = "function" == typeof Object.create ? Object.create : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b
        },
        ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    ad: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.ad;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja,
        h = function (a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (na) na(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.G = b.prototype
        },
        oa = function () {
            this.g = !1;
            this.b = null;
            this.h = void 0;
            this.a = 1;
            this.l = this.v = 0;
            this.f = null
        },
        pa = function (a) {
            if (a.g) throw new TypeError("Generator is already running");
            a.g = !0
        };
    oa.prototype.j = function (a) {
        this.h = a
    };
    var qa = function (a, b) {
        a.f = {
            od: b,
            be: !0
        };
        a.a = a.v || a.l
    };
    oa.prototype.return = function (a) {
        this.f = {
            return: a
        };
        this.a = this.l
    };
    var ra = function (a) {
            this.a = new oa;
            this.b = a
        },
        ua = function (a, b) {
            pa(a.a);
            var c = a.a.b;
            if (c) return sa(a, "return" in c ? c["return"] : function (d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.a.return);
            a.a.return(b);
            return ta(a)
        },
        sa = function (a, b, c, d) {
            try {
                var e = b.call(a.a.b, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.a.g = !1, e;
                var f = e.value
            } catch (k) {
                return a.a.b = null, qa(a.a, k), ta(a)
            }
            a.a.b = null;
            d.call(a.a, f);
            return ta(a)
        },
        ta = function (a) {
            for (; a.a.a;) try {
                var b = a.b(a.a);
                if (b) return a.a.g = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.a.h = void 0, qa(a.a, c)
            }
            a.a.g = !1;
            if (a.a.f) {
                b = a.a.f;
                a.a.f = null;
                if (b.be) throw b.od;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        va = function (a) {
            this.next = function (b) {
                pa(a.a);
                a.a.b ? b = sa(a, a.a.b.next, b, a.a.j) : (a.a.j(b), b = ta(a));
                return b
            };
            this.throw = function (b) {
                pa(a.a);
                a.a.b ? b = sa(a, a.a.b["throw"], b, a.a.j) : (qa(a.a, b), b = ta(a));
                return b
            };
            this.return = function (b) {
                return ua(a, b)
            };
            this[Symbol.iterator] = function () {
                return this
            }
        },
        wa = function (a,
            b) {
            b = new va(new ra(b));
            na && a.prototype && na(b, a.prototype);
            return b
        };
    ea("Promise", function (a) {
        function b() {
            this.a = null
        }

        function c(k) {
            return k instanceof e ? k : new e(function (l) {
                l(k)
            })
        }
        if (a) return a;
        b.prototype.b = function (k) {
            if (null == this.a) {
                this.a = [];
                var l = this;
                this.f(function () {
                    l.v()
                })
            }
            this.a.push(k)
        };
        var d = da.setTimeout;
        b.prototype.f = function (k) {
            d(k, 0)
        };
        b.prototype.v = function () {
            for (; this.a && this.a.length;) {
                var k = this.a;
                this.a = [];
                for (var l = 0; l < k.length; ++l) {
                    var m = k[l];
                    k[l] = null;
                    try {
                        m()
                    } catch (n) {
                        this.g(n)
                    }
                }
            }
            this.a = null
        };
        b.prototype.g = function (k) {
            this.f(function () {
                throw k;
            })
        };
        var e = function (k) {
            this.b = 0;
            this.f = void 0;
            this.a = [];
            var l = this.g();
            try {
                k(l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.g = function () {
            function k(n) {
                return function (q) {
                    m || (m = !0, n.call(l, q))
                }
            }
            var l = this,
                m = !1;
            return {
                resolve: k(this.s),
                reject: k(this.v)
            }
        };
        e.prototype.s = function (k) {
            if (k === this) this.v(new TypeError("A Promise cannot resolve to itself"));
            else if (k instanceof e) this.V(k);
            else {
                a: switch (typeof k) {
                    case "object":
                        var l = null != k;
                        break a;
                    case "function":
                        l = !0;
                        break a;
                    default:
                        l = !1
                }
                l ? this.o(k) : this.h(k)
            }
        };
        e.prototype.o = function (k) {
            var l = void 0;
            try {
                l = k.then
            } catch (m) {
                this.v(m);
                return
            }
            "function" == typeof l ? this.B(l, k) : this.h(k)
        };
        e.prototype.v = function (k) {
            this.j(2, k)
        };
        e.prototype.h = function (k) {
            this.j(1, k)
        };
        e.prototype.j = function (k, l) {
            if (0 != this.b) throw Error("Cannot settle(" + k + ", " + l + "): Promise already settled in state" + this.b);
            this.b = k;
            this.f = l;
            this.l()
        };
        e.prototype.l = function () {
            if (null != this.a) {
                for (var k = 0; k < this.a.length; ++k) f.b(this.a[k]);
                this.a = null
            }
        };
        var f = new b;
        e.prototype.V = function (k) {
            var l =
                this.g();
            k.$a(l.resolve, l.reject)
        };
        e.prototype.B = function (k, l) {
            var m = this.g();
            try {
                k.call(l, m.resolve, m.reject)
            } catch (n) {
                m.reject(n)
            }
        };
        e.prototype.then = function (k, l) {
            function m(I, R) {
                return "function" == typeof I ? function (Va) {
                    try {
                        n(I(Va))
                    } catch (ya) {
                        q(ya)
                    }
                } : R
            }
            var n, q, B = new e(function (I, R) {
                n = I;
                q = R
            });
            this.$a(m(k, n), m(l, q));
            return B
        };
        e.prototype.catch = function (k) {
            return this.then(void 0, k)
        };
        e.prototype.$a = function (k, l) {
            function m() {
                switch (n.b) {
                    case 1:
                        k(n.f);
                        break;
                    case 2:
                        l(n.f);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            n.b);
                }
            }
            var n = this;
            null == this.a ? f.b(m) : this.a.push(m)
        };
        e.resolve = c;
        e.reject = function (k) {
            return new e(function (l, m) {
                m(k)
            })
        };
        e.race = function (k) {
            return new e(function (l, m) {
                for (var n = ha(k), q = n.next(); !q.done; q = n.next()) c(q.value).$a(l, m)
            })
        };
        e.all = function (k) {
            var l = ha(k),
                m = l.next();
            return m.done ? c([]) : new e(function (n, q) {
                function B(Va) {
                    return function (ya) {
                        I[Va] = ya;
                        R--;
                        0 == R && n(I)
                    }
                }
                var I = [],
                    R = 0;
                do I.push(void 0), R++, c(m.value).$a(B(I.length - 1), q), m = l.next(); while (!m.done)
            })
        };
        return e
    });
    var xa = function (a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    ea("String.prototype.endsWith", function (a) {
        return a ? a : function (b, c) {
            var d = xa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    ea("String.prototype.startsWith", function (a) {
        return a ? a : function (b, c) {
            var d = xa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var k = 0; k < f && c < e;)
                if (d[c++] != b[k++]) return !1;
            return k >= f
        }
    });
    var za = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ea("WeakMap", function (a) {
        function b() {}

        function c(m) {
            var n = typeof m;
            return "object" === n && null !== m || "function" === n
        }

        function d(m) {
            if (!za(m, f)) {
                var n = new b;
                ba(m, f, {
                    value: n
                })
            }
        }

        function e(m) {
            var n = Object[m];
            n && (Object[m] = function (q) {
                if (q instanceof b) return q;
                Object.isExtensible(q) && d(q);
                return n(q)
            })
        }
        if (function () {
                if (!a || !Object.seal) return !1;
                try {
                    var m = Object.seal({}),
                        n = Object.seal({}),
                        q = new a([
                            [m, 2],
                            [n, 3]
                        ]);
                    if (2 != q.get(m) || 3 != q.get(n)) return !1;
                    q.delete(m);
                    q.set(n, 4);
                    return !q.has(m) && 4 == q.get(n)
                } catch (B) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var k = 0,
            l = function (m) {
                this.a = (k += Math.random() + 1).toString();
                if (m) {
                    m = ha(m);
                    for (var n; !(n = m.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        l.prototype.set = function (m, n) {
            if (!c(m)) throw Error("Invalid WeakMap key");
            d(m);
            if (!za(m, f)) throw Error("WeakMap key fail: " + m);
            m[f][this.a] = n;
            return this
        };
        l.prototype.get = function (m) {
            return c(m) && za(m, f) ? m[f][this.a] : void 0
        };
        l.prototype.has = function (m) {
            return c(m) && za(m, f) && za(m[f],
                this.a)
        };
        l.prototype.delete = function (m) {
            return c(m) && za(m, f) && za(m[f], this.a) ? delete m[f][this.a] : !1
        };
        return l
    });
    ea("Map", function (a) {
        if (function () {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var l = Object.seal({
                            x: 4
                        }),
                        m = new a(ha([
                            [l, "s"]
                        ]));
                    if ("s" != m.get(l) || 1 != m.size || m.get({
                            x: 4
                        }) || m.set({
                            x: 4
                        }, "t") != m || 2 != m.size) return !1;
                    var n = m.entries(),
                        q = n.next();
                    if (q.done || q.value[0] != l || "s" != q.value[1]) return !1;
                    q = n.next();
                    return q.done || 4 != q.value[0].x || "t" != q.value[1] || !n.next().done ? !1 : !0
                } catch (B) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function (l) {
                this.b = {};
                this.a =
                    f();
                this.size = 0;
                if (l) {
                    l = ha(l);
                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        c.prototype.set = function (l, m) {
            l = 0 === l ? 0 : l;
            var n = d(this, l);
            n.list || (n.list = this.b[n.id] = []);
            n.U ? n.U.value = m : (n.U = {
                next: this.a,
                qa: this.a.qa,
                head: this.a,
                key: l,
                value: m
            }, n.list.push(n.U), this.a.qa.next = n.U, this.a.qa = n.U, this.size++);
            return this
        };
        c.prototype.delete = function (l) {
            l = d(this, l);
            return l.U && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.b[l.id], l.U.qa.next = l.U.next, l.U.next.qa = l.U.qa, l.U.head =
                null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this.b = {};
            this.a = this.a.qa = f();
            this.size = 0
        };
        c.prototype.has = function (l) {
            return !!d(this, l).U
        };
        c.prototype.get = function (l) {
            return (l = d(this, l).U) && l.value
        };
        c.prototype.entries = function () {
            return e(this, function (l) {
                return [l.key, l.value]
            })
        };
        c.prototype.keys = function () {
            return e(this, function (l) {
                return l.key
            })
        };
        c.prototype.values = function () {
            return e(this, function (l) {
                return l.value
            })
        };
        c.prototype.forEach = function (l, m) {
            for (var n = this.entries(), q; !(q = n.next()).done;) q =
                q.value, l.call(m, q[1], q[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function (l, m) {
                var n = m && typeof m;
                "object" == n || "function" == n ? b.has(m) ? n = b.get(m) : (n = "" + ++k, b.set(m, n)) : n = "p_" + m;
                var q = l.b[n];
                if (q && za(l.b, n))
                    for (l = 0; l < q.length; l++) {
                        var B = q[l];
                        if (m !== m && B.key !== B.key || m === B.key) return {
                            id: n,
                            list: q,
                            index: l,
                            U: B
                        }
                    }
                return {
                    id: n,
                    list: q,
                    index: -1,
                    U: void 0
                }
            },
            e = function (l, m) {
                var n = l.a;
                return fa(function () {
                    if (n) {
                        for (; n.head != l.a;) n = n.qa;
                        for (; n.next != n.head;) return n = n.next, {
                            done: !1,
                            value: m(n)
                        };
                        n = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function () {
                var l = {};
                return l.qa = l.next = l.head = l
            },
            k = 0;
        return c
    });
    ea("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ea("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    ea("String.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            return -1 !== xa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    var p = this || self,
        r = function (a, b, c) {
            a = a.split(".");
            c = c || p;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Aa = /^[\w+/_-]+[=]{0,2}$/,
        Ba = null,
        Ca = function (a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Aa.test(a) ? a : ""
        },
        Da = function (a, b) {
            a = a.split(".");
            b = b || p;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        t = function () {},
        Ea = function () {
            throw Error("unimplemented abstract method");
        },
        Fa = function (a) {
            a.zb = void 0;
            a.Da = function () {
                return a.zb ? a.zb : a.zb = new a
            }
        },
        Ga = function (a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ha = function (a) {
            var b = Ga(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ia = function (a) {
            return "function" == Ga(a)
        },
        u = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        La = function (a) {
            return Object.prototype.hasOwnProperty.call(a,
                Ja) && a[Ja] || (a[Ja] = ++Ka)
        },
        Ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ka = 0,
        Ma = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Na = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        v = function (a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                v = Ma : v = Na;
            return v.apply(null, arguments)
        },
        w = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        Oa = Date.now,
        x = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.G = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        },
        Pa = function (a) {
            return a
        };
    var Qa = function (a, b) {
        this.h = Math.random() < a;
        this.j = b;
        this.g = null;
        this.v = ""
    };
    Qa.prototype.b = function () {
        return this.h && null !== this.g ? (this.j + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.g + this.v).substring(0, 2E3) : ""
    };
    var Ra = function () {};
    r("studio.common.Environment", Ra, void 0);
    Ra.Type = {
        LIVE: 1,
        LOCAL: 2,
        BROWSER: 4,
        IN_APP: 8,
        LAYOUTS_PREVIEW: 16,
        CREATIVE_TOOLSET: 32,
        RENDERING_STUDIO: 64,
        RENDERING_TEST: 128,
        PREVIEW: 256
    };
    var Sa = 6;
    Ra.addType = function (a) {
        Sa |= a;
        Ta(a)
    };
    var Ua = function (a) {
        Sa = a | 6;
        Ta(Sa)
    };
    Ra.setType = Ua;
    var y = function (a) {
        return (Sa & a) == a
    };
    Ra.hasType = y;
    Ra.getValue = function () {
        return Sa
    };
    var Ta = function (a) {
            Wa(a, 2, 1);
            Wa(a, 1, 2);
            Wa(a, 4, 8);
            Wa(a, 8, 4);
            Wa(a, 128, 64);
            Wa(a, 64, 128);
            Wa(a, 256, 2)
        },
        Wa = function (a, b, c) {
            (a & b) == b && (Sa |= b, Sa &= ~c)
        };
    var Xa = function (a, b) {
        Qa.call(this, a, b);
        this.f = this.a = null;
        this.g = "rmad_mod"
    };
    x(Xa, Qa);
    Xa.prototype.b = function () {
        return null !== this.a && null !== this.f ? (this.v = "&status=" + this.a + "&type=" + this.f, Xa.G.b.call(this)) : ""
    };
    var Ya = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ya);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    x(Ya, Error);
    Ya.prototype.name = "CustomError";
    var Za;
    var $a = function (a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ya.call(this, c + a[d])
    };
    x($a, Ya);
    $a.prototype.name = "AssertionError";
    var ab = Array.prototype.indexOf ? function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function (a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        z = Array.prototype.forEach ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        bb = Array.prototype.filter ? function (a, b, c) {
            return Array.prototype.filter.call(a,
                b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], f = 0, k = "string" === typeof a ? a.split("") : a, l = 0; l < d; l++)
                if (l in k) {
                    var m = k[l];
                    b.call(c, m, l, a) && (e[f++] = m)
                } return e
        },
        cb = Array.prototype.map ? function (a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function (a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        db = Array.prototype.some ? function (a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = "string" ===
                    typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        eb = Array.prototype.every ? function (a, b, c) {
            return Array.prototype.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        gb = function (a) {
            var b = p.performance.getEntriesByType("resource");
            a = fb(b, a, void 0);
            return 0 > a ? null : "string" === typeof b ? b.charAt(a) : b[a]
        },
        fb = function (a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") :
                    a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        ib = function (a, b) {
            b = ab(a, b);
            var c;
            (c = 0 <= b) && hb(a, b);
            return c
        },
        hb = function (a, b) {
            Array.prototype.splice.call(a, b, 1)
        },
        jb = function (a) {
            return Array.prototype.concat.apply([], arguments)
        },
        kb = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        lb = function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (Ha(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var k = 0; k < f; k++) a[e + k] = d[k]
                } else a.push(d)
            }
        },
        nb = function (a, b, c, d) {
            Array.prototype.splice.apply(a, mb(arguments, 1))
        },
        mb = function (a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        pb = function (a, b) {
            a.sort(b || ob)
        },
        qb = function (a, b) {
            for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
                index: d,
                value: a[d]
            };
            var e = b || ob;
            pb(c, function (f, k) {
                return e(f.value, k.value) || f.index - k.index
            });
            for (d = 0; d < a.length; d++) a[d] = c[d].value
        },
        ob = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var rb = function (a, b) {
            return 0 == a.lastIndexOf(b, 0)
        },
        sb = function (a) {
            return /^[\s\xa0]*$/.test(a)
        },
        tb = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        ub = /&/g,
        vb = /</g,
        wb = />/g,
        xb = /"/g,
        yb = /'/g,
        zb = /\x00/g,
        Ab = /[\x00&<>"']/,
        Bb = function (a, b) {
            return -1 != a.indexOf(b)
        },
        Db = function (a, b) {
            var c = 0;
            a = tb(String(a)).split(".");
            b = tb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    k = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == k[0].length) break;
                    c = Cb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Cb(0 == f[2].length, 0 == k[2].length) || Cb(f[2], k[2]);
                    f = f[3];
                    k = k[3]
                } while (0 == c)
            }
            return c
        },
        Cb = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Eb;
    a: {
        var Fb = p.navigator;
        if (Fb) {
            var Gb = Fb.userAgent;
            if (Gb) {
                Eb = Gb;
                break a
            }
        }
        Eb = ""
    }
    var A = function (a) {
        return Bb(Eb, a)
    };
    var C = function (a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Hb = function (a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        Ib = function (a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) break
        },
        Jb = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Kb = function (a, b) {
            var c = Ha(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        Lb = function (a, b) {
            return null !== a && b in a
        },
        Mb = function (a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Nb = function (a,
            b) {
            return null !== a && b in a ? a[b] : void 0
        },
        Ob = function (a, b, c) {
            b in a || (a[b] = c)
        },
        Pb = function (a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Qb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Rb = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Qb.length; f++) c = Qb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Sb = function () {
            return A("Firefox") || A("FxiOS")
        },
        Tb = function () {
            return (A("Chrome") || A("CriOS")) && !A("Edge")
        };
    var Ub = function () {
        return null
    };
    var Vb, Wb = function () {
        if (void 0 === Vb) {
            var a = null,
                b = p.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Pa,
                        createScript: Pa,
                        createScriptURL: Pa
                    })
                } catch (c) {
                    p.console && p.console.error(c.message)
                }
                Vb = a
            } else Vb = a
        }
        return Vb
    };
    var Zb = function (a, b) {
        this.a = a === Xb && b || "";
        this.b = Yb
    };
    Zb.prototype.ta = !0;
    Zb.prototype.pa = function () {
        return this.a
    };
    var $b = function (a) {
            return a instanceof Zb && a.constructor === Zb && a.b === Yb ? a.a : "type_error:Const"
        },
        Yb = {},
        Xb = {};
    var cc = function (a, b) {
        this.a = a === ac && b || "";
        this.b = bc
    };
    cc.prototype.ta = !0;
    cc.prototype.pa = function () {
        return this.a.toString()
    };
    var dc = function (a) {
            return a instanceof cc && a.constructor === cc && a.b === bc ? a.a : "type_error:TrustedResourceUrl"
        },
        ic = function (a) {
            var b = $b(ec);
            if (!fc.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
            var c = b.replace(gc, function (d, e) {
                if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
                d = a[e];
                return d instanceof Zb ? $b(d) : encodeURIComponent(String(d))
            });
            return hc(c)
        },
        gc = /%{(\w+)}/g,
        fc = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        bc = {},
        hc = function (a) {
            var b = Wb();
            a = b ? b.createScriptURL(a) : a;
            return new cc(ac, a)
        },
        ac = {};
    var lc = function (a, b) {
        this.a = a === jc && b || "";
        this.b = kc
    };
    lc.prototype.ta = !0;
    lc.prototype.pa = function () {
        return this.a.toString()
    };
    var mc = function (a) {
            return a instanceof lc && a.constructor === lc && a.b === kc ? a.a : "type_error:SafeUrl"
        },
        nc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        oc = function (a) {
            if (a instanceof lc) return a;
            a = "object" == typeof a && a.ta ? a.pa() : String(a);
            return nc.test(a) ? new lc(jc, a) : null
        },
        pc = function (a) {
            if (a instanceof lc) return a;
            a = "object" == typeof a && a.ta ? a.pa() : String(a);
            nc.test(a) || (a = "about:invalid#zClosurez");
            return new lc(jc, a)
        },
        kc = {},
        qc = new lc(jc, "about:invalid#zClosurez"),
        jc = {};
    var sc = function () {
        this.a = "";
        this.b = rc
    };
    sc.prototype.ta = !0;
    var rc = {};
    sc.prototype.pa = function () {
        return this.a
    };
    var tc = function (a) {
            var b = new sc;
            b.a = a;
            return b
        },
        uc = tc(""),
        wc = function (a) {
            if (a instanceof lc) return 'url("' + mc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            a = a instanceof Zb ? $b(a) : vc(String(a));
            if (/[{;}]/.test(a)) throw new $a("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        vc = function (a) {
            var b = a.replace(xc, "$1").replace(xc, "$1").replace(yc, "url");
            if (zc.test(b)) {
                if (Ac.test(a)) return "zClosurez";
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                if (!b ||
                    !c || !Bc(a)) return "zClosurez"
            } else return "zClosurez";
            return Cc(a)
        },
        Bc = function (a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        },
        zc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        yc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        xc = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Ac = /\/\*/,
        Cc = function (a) {
            return a.replace(yc, function (b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function (k, l, m) {
                    f = l;
                    return m
                });
                b = (oc(d) || qc).pa();
                return c + f + b + f + e
            })
        };
    var Ec = function () {
        this.a = "";
        this.b = Dc
    };
    Ec.prototype.ta = !0;
    var Dc = {},
        Gc = function (a, b) {
            if (Bb(a, "<")) throw Error("Selector does not allow '<', got: " + a);
            var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
            a: {
                for (var d = {
                        "(": ")",
                        "[": "]"
                    }, e = [], f = 0; f < c.length; f++) {
                    var k = c[f];
                    if (d[k]) e.push(d[k]);
                    else if (Mb(d, k) && e.pop() != k) {
                        c = !1;
                        break a
                    }
                }
                c = 0 == e.length
            }
            if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
            if (!(b instanceof sc)) {
                c = "";
                for (var l in b)
                    if (Object.prototype.hasOwnProperty.call(b, l)) {
                        if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
                        d = b[l];
                        null != d && (d = Array.isArray(d) ? cb(d, wc).join(" ") : wc(d), c += l + ":" + d + ";")
                    } b = c ? tc(c) : uc
            }
            l = b instanceof sc && b.constructor === sc && b.b === rc ? b.a : "type_error:SafeStyle";
            a = a + "{" + l.replace(/</g, "\\3C ") + "}";
            return Fc(a)
        };
    Ec.prototype.pa = function () {
        return this.a
    };
    var Fc = function (a) {
        var b = new Ec;
        b.a = a;
        return b
    };
    Fc("");
    var Ic = function () {
        this.a = "";
        this.b = Hc
    };
    Ic.prototype.ta = !0;
    Ic.prototype.pa = function () {
        return this.a.toString()
    };
    var Hc = {};
    var Jc = function (a, b) {
            a.src = dc(b);
            (b = a.ownerDocument && a.ownerDocument.defaultView) && b != p ? b = Ca(b.document) : (null === Ba && (Ba = Ca(p.document)), b = Ba);
            b && a.setAttribute("nonce", b)
        },
        Kc = function (a, b, c, d) {
            a = a instanceof lc ? a : pc(a);
            b = b || p;
            c = c instanceof Zb ? $b(c) : c || "";
            return b.open(mc(a), c, d, void 0)
        };
    var Lc = function (a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Mc = function (a) {
            Ab.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ub, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(vb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(wb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(xb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(yb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(zb, "&#0;")));
            return a
        },
        Nc = function (a, b) {
            var c = a;
            0 < a.length && 0 < b && (c = a.substr(0, 0) + a.substr(0 + b, a.length - 0 - b));
            return c
        },
        Oc = function (a) {
            return null ==
                a ? "" : String(a)
        },
        Pc = function (a) {
            return Array.prototype.join.call(arguments, "")
        },
        Qc = function (a) {
            for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
            return b
        },
        Rc = function (a) {
            return String(a).replace(/\-([a-z])/g, function (b, c) {
                return c.toUpperCase()
            })
        },
        Sc = function (a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Tc = function () {
            return A("iPhone") && !A("iPod") && !A("iPad")
        },
        Uc = function () {
            return Tc() || A("iPad") || A("iPod")
        };
    var Vc = function (a) {
        Vc[" "](a);
        return a
    };
    Vc[" "] = t;
    var Xc = function (a, b) {
        var c = Wc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Yc = A("Opera"),
        Zc = A("Trident") || A("MSIE"),
        $c = A("Edge"),
        ad = $c || Zc,
        bd = A("Gecko") && !(Bb(Eb.toLowerCase(), "webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        cd = Bb(Eb.toLowerCase(), "webkit") && !A("Edge"),
        dd = function () {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        ed;
    a: {
        var fd = "",
            gd = function () {
                var a = Eb;
                if (bd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if ($c) return /Edge\/([\d\.]+)/.exec(a);
                if (Zc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (cd) return /WebKit\/(\S+)/.exec(a);
                if (Yc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();gd && (fd = gd ? gd[1] : "");
        if (Zc) {
            var hd = dd();
            if (null != hd && hd > parseFloat(fd)) {
                ed = String(hd);
                break a
            }
        }
        ed = fd
    }
    var id = ed,
        Wc = {},
        jd = function (a) {
            return Xc(a, function () {
                return 0 <= Db(id, a)
            })
        },
        kd;
    if (p.document && Zc) {
        var ld = dd();
        kd = ld ? ld : parseInt(id, 10) || void 0
    } else kd = void 0;
    var md = kd;
    var nd = !Zc || 9 <= Number(md);
    var od = function (a, b) {
        this.width = a;
        this.height = b
    };
    od.prototype.aspectRatio = function () {
        return this.width / this.height
    };
    od.prototype.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    od.prototype.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    od.prototype.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var rd = function (a) {
            return a ? new pd(qd(a)) : Za || (Za = new pd)
        },
        td = function (a, b) {
            C(b, function (c, d) {
                c && "object" == typeof c && c.ta && (c = c.pa());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : sd.hasOwnProperty(d) ? a.setAttribute(sd[d], c) : rb(d, "aria-") || rb(d, "data-") ? a.setAttribute(d, c) : a[d] = c
            })
        },
        sd = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        ud = function () {
            var a = window.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new od(a.clientWidth, a.clientHeight)
        },
        vd = function (a) {
            return a.parentWindow || a.defaultView
        },
        D = function (a, b, c) {
            return wd(document, arguments)
        },
        wd = function (a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!nd && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', Mc(d.name), '"');
                if (d.type) {
                    c.push(' type="', Mc(d.type), '"');
                    var e = {};
                    Rb(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c =
                xd(a, c);
            d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : td(c, d));
            2 < b.length && yd(a, c, b, 2);
            return c
        },
        yd = function (a, b, c, d) {
            function e(l) {
                l && b.appendChild("string" === typeof l ? a.createTextNode(l) : l)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Ha(f) || u(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (u(f)) {
                                var k = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if (Ia(f)) {
                                k = "function" == typeof f.item;
                                break a
                            }
                        }
                        k = !1
                    }
                    z(k ? kb(f) : f, e)
                }
            }
        },
        xd = function (a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        zd = function (a, b) {
            a.appendChild(b)
        },
        Ad = function (a, b) {
            yd(qd(a), a, arguments, 1)
        },
        Bd = function (a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        Cd = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        qd = function (a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Dd = function (a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        pd = function (a) {
            this.a = a || p.document ||
                document
        };
    pd.prototype.getElement = function (a) {
        return "string" === typeof a ? this.a.getElementById(a) : a
    };
    var Ed = function (a, b) {
        a = a.a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
        return b
    };
    pd.prototype.b = function (a, b, c) {
        return wd(this.a, arguments)
    };
    var Fd = function (a, b) {
        return xd(a.a, b)
    };
    pd.prototype.f = zd;
    pd.prototype.contains = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Gd = {
        mf: "dcm",
        Of: "studio"
    };
    r("studio.sdk.logger", {}.Sf, void 0);
    var Hd = {
        ENABLER: "enabler",
        DCM_ENABLER: "dcmenabler",
        SSR_ENABLER: "ssrenabler",
        VIDEO: "video",
        CONFIGURABLE: "configurable",
        CONFIGURABLE_FILLER: "configurablefiller",
        LAYOUTS: "layouts",
        FILLER: "layoutsfiller",
        RAD_VIDEO: "rad_ui_video",
        GDN: "gdn"
    };
    r("studio.module.ModuleId", Hd, void 0);
    var Jd = function (a) {
            Id();
            return hc(a)
        },
        Id = t;
    var Kd = function (a, b) {
        this.f = a;
        this.g = b;
        this.b = 0;
        this.a = null
    };
    Kd.prototype.get = function () {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.f();
        return a
    };
    var Ld = function (a, b) {
        a.g(b);
        100 > a.b && (a.b++, b.next = a.a, a.a = b)
    };
    var Md = function (a) {
            p.setTimeout(function () {
                throw a;
            }, 0)
        },
        Nd, Od = function () {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function () {
                var e = xd(document, "IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var k = "callImmediate" + Math.random(),
                    l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = v(function (m) {
                    if (("*" ==
                            l || m.origin == l) && m.data == k) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        f.postMessage(k, l)
                    }
                }
            });
            if ("undefined" !== typeof a && !A("Trident") && !A("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function () {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.Ub;
                        c.Ub = null;
                        e()
                    }
                };
                return function (e) {
                    d.next = {
                        Ub: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function (e) {
                p.setTimeout(e, 0)
            }
        };
    var Pd = function () {
            this.b = this.a = null
        },
        Rd = new Kd(function () {
            return new Qd
        }, function (a) {
            a.reset()
        });
    Pd.prototype.add = function (a, b) {
        var c = Rd.get();
        c.set(a, b);
        this.b ? this.b.next = c : this.a = c;
        this.b = c
    };
    var Td = function () {
            var a = Sd,
                b = null;
            a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
            return b
        },
        Qd = function () {
            this.next = this.scope = this.a = null
        };
    Qd.prototype.set = function (a, b) {
        this.a = a;
        this.scope = b;
        this.next = null
    };
    Qd.prototype.reset = function () {
        this.next = this.scope = this.a = null
    };
    var Xd = function (a, b) {
            Ud || Vd();
            Wd || (Ud(), Wd = !0);
            Sd.add(a, b)
        },
        Ud, Vd = function () {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve(void 0);
                Ud = function () {
                    a.then(Yd)
                }
            } else Ud = function () {
                var b = Yd;
                !Ia(p.setImmediate) || p.Window && p.Window.prototype && !A("Edge") && p.Window.prototype.setImmediate == p.setImmediate ? (Nd || (Nd = Od()), Nd(b)) : p.setImmediate(b)
            }
        },
        Wd = !1,
        Sd = new Pd,
        Yd = function () {
            for (var a; a = Td();) {
                try {
                    a.a.call(a.scope)
                } catch (b) {
                    Md(b)
                }
                Ld(Rd, a)
            }
            Wd = !1
        };
    var Zd = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var ae = function (a) {
            this.a = 0;
            this.j = void 0;
            this.g = this.b = this.f = null;
            this.v = this.h = !1;
            if (a != t) try {
                var b = this;
                a.call(void 0, function (c) {
                    $d(b, 2, c)
                }, function (c) {
                    $d(b, 3, c)
                })
            } catch (c) {
                $d(this, 3, c)
            }
        },
        be = function () {
            this.next = this.context = this.b = this.f = this.a = null;
            this.g = !1
        };
    be.prototype.reset = function () {
        this.context = this.b = this.f = this.a = null;
        this.g = !1
    };
    var ce = new Kd(function () {
            return new be
        }, function (a) {
            a.reset()
        }),
        de = function (a, b, c) {
            var d = ce.get();
            d.f = a;
            d.b = b;
            d.context = c;
            return d
        },
        ee = function (a) {
            if (a instanceof ae) return a;
            var b = new ae(t);
            $d(b, 2, a);
            return b
        },
        fe = function (a) {
            return new ae(function (b, c) {
                c(a)
            })
        },
        he = function (a, b, c) {
            ge(a, b, c, null) || Xd(w(b, a))
        },
        ie = function (a) {
            return new ae(function (b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function (n, q) {
                            d--;
                            e[n] = q;
                            0 == d && b(e)
                        }, k = function (n) {
                            c(n)
                        }, l = 0, m; l < a.length; l++) m = a[l], he(m, w(f, l), k);
                else b(e)
            })
        };
    ae.prototype.then = function (a, b, c) {
        return je(this, Ia(a) ? a : null, Ia(b) ? b : null, c)
    };
    ae.prototype.$goog_Thenable = !0;
    var ke = function (a, b) {
        return je(a, null, b, void 0)
    };
    ae.prototype.cancel = function (a) {
        if (0 == this.a) {
            var b = new le(a);
            Xd(function () {
                me(this, b)
            }, this)
        }
    };
    var me = function (a, b) {
            if (0 == a.a)
                if (a.f) {
                    var c = a.f;
                    if (c.b) {
                        for (var d = 0, e = null, f = null, k = c.b; k && (k.g || (d++, k.a == a && (e = k), !(e && 1 < d))); k = k.next) e || (f = k);
                        e && (0 == c.a && 1 == d ? me(c, b) : (f ? (d = f, d.next == c.g && (c.g = d), d.next = d.next.next) : ne(c), oe(c, e, 3, b)))
                    }
                    a.f = null
                } else $d(a, 3, b)
        },
        qe = function (a, b) {
            a.b || 2 != a.a && 3 != a.a || pe(a);
            a.g ? a.g.next = b : a.b = b;
            a.g = b
        },
        je = function (a, b, c, d) {
            var e = de(null, null, null);
            e.a = new ae(function (f, k) {
                e.f = b ? function (l) {
                    try {
                        var m = b.call(d, l);
                        f(m)
                    } catch (n) {
                        k(n)
                    }
                } : f;
                e.b = c ? function (l) {
                    try {
                        var m = c.call(d,
                            l);
                        void 0 === m && l instanceof le ? k(l) : f(m)
                    } catch (n) {
                        k(n)
                    }
                } : k
            });
            e.a.f = a;
            qe(a, e);
            return e.a
        };
    ae.prototype.o = function (a) {
        this.a = 0;
        $d(this, 2, a)
    };
    ae.prototype.s = function (a) {
        this.a = 0;
        $d(this, 3, a)
    };
    var $d = function (a, b, c) {
            0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, ge(c, a.o, a.s, a) || (a.j = c, a.a = b, a.f = null, pe(a), 3 != b || c instanceof le || re(a, c)))
        },
        ge = function (a, b, c, d) {
            if (a instanceof ae) return qe(a, de(b || t, c || null, d)), !0;
            if (Zd(a)) return a.then(b, c, d), !0;
            if (u(a)) try {
                var e = a.then;
                if (Ia(e)) return se(a, e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        },
        se = function (a, b, c, d, e) {
            var f = !1,
                k = function (m) {
                    f || (f = !0, c.call(e, m))
                },
                l = function (m) {
                    f || (f = !0, d.call(e, m))
                };
            try {
                b.call(a,
                    k, l)
            } catch (m) {
                l(m)
            }
        },
        pe = function (a) {
            a.h || (a.h = !0, Xd(a.l, a))
        },
        ne = function (a) {
            var b = null;
            a.b && (b = a.b, a.b = b.next, b.next = null);
            a.b || (a.g = null);
            return b
        };
    ae.prototype.l = function () {
        for (var a; a = ne(this);) oe(this, a, this.a, this.j);
        this.h = !1
    };
    var oe = function (a, b, c, d) {
            if (3 == c && b.b && !b.g)
                for (; a && a.v; a = a.f) a.v = !1;
            if (b.a) b.a.f = null, te(b, c, d);
            else try {
                b.g ? b.f.call(b.context) : te(b, c, d)
            } catch (e) {
                ue.call(null, e)
            }
            Ld(ce, b)
        },
        te = function (a, b, c) {
            2 == b ? a.f.call(a.context, c) : a.b && a.b.call(a.context, c)
        },
        re = function (a, b) {
            a.v = !0;
            Xd(function () {
                a.v && ue.call(null, b)
            })
        },
        ue = Md,
        le = function (a) {
            Ya.call(this, a)
        };
    x(le, Ya);
    le.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var E = function (a, b) {
        this.j = [];
        this.C = a;
        this.B = b || null;
        this.g = this.a = !1;
        this.f = void 0;
        this.s = this.H = this.o = !1;
        this.l = 0;
        this.b = null;
        this.v = 0
    };
    E.prototype.cancel = function (a) {
        if (this.a) this.f instanceof E && this.f.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.v--, 0 >= b.v && b.cancel())
            }
            this.C ? this.C.call(this.B, this) : this.s = !0;
            this.a || this.h(new ve(this))
        }
    };
    E.prototype.V = function (a, b) {
        this.o = !1;
        we(this, a, b)
    };
    var we = function (a, b, c) {
            a.a = !0;
            a.f = c;
            a.g = !b;
            xe(a)
        },
        ze = function (a) {
            if (a.a) {
                if (!a.s) throw new ye(a);
                a.s = !1
            }
        };
    E.prototype.I = function (a) {
        ze(this);
        we(this, !0, a)
    };
    E.prototype.h = function (a) {
        ze(this);
        we(this, !1, a)
    };
    var Be = function (a, b, c) {
            Ae(a, b, null, c)
        },
        Ae = function (a, b, c, d) {
            a.j.push([b, c, d]);
            a.a && xe(a)
        };
    E.prototype.then = function (a, b, c) {
        var d, e, f = new ae(function (k, l) {
            d = k;
            e = l
        });
        Ae(this, d, function (k) {
            k instanceof ve ? f.cancel() : e(k)
        });
        return f.then(a, b, c)
    };
    E.prototype.$goog_Thenable = !0;
    var Ce = function (a, b) {
        b instanceof E ? Be(a, v(b.D, b)) : Be(a, function () {
            return b
        })
    };
    E.prototype.D = function (a) {
        var b = new E;
        Ae(this, b.I, b.h, b);
        a && (b.b = this, this.v++);
        return b
    };
    var De = function (a) {
            return db(a.j, function (b) {
                return Ia(b[1])
            })
        },
        xe = function (a) {
            if (a.l && a.a && De(a)) {
                var b = a.l,
                    c = Ee[b];
                c && (p.clearTimeout(c.a), delete Ee[b]);
                a.l = 0
            }
            a.b && (a.b.v--, delete a.b);
            b = a.f;
            for (var d = c = !1; a.j.length && !a.o;) {
                var e = a.j.shift(),
                    f = e[0],
                    k = e[1];
                e = e[2];
                if (f = a.g ? k : f) try {
                    var l = f.call(e || a.B, b);
                    void 0 !== l && (a.g = a.g && (l == b || l instanceof Error), a.f = b = l);
                    if (Zd(b) || "function" === typeof p.Promise && b instanceof p.Promise) d = !0, a.o = !0
                } catch (m) {
                    b = m, a.g = !0, De(a) || (c = !0)
                }
            }
            a.f = b;
            d && (l = v(a.V, a, !0), d =
                v(a.V, a, !1), b instanceof E ? (Ae(b, l, d), b.H = !0) : b.then(l, d));
            c && (b = new Fe(b), Ee[b.a] = b, a.l = b.a)
        },
        ye = function () {
            Ya.call(this)
        };
    x(ye, Ya);
    ye.prototype.message = "Deferred has already fired";
    ye.prototype.name = "AlreadyCalledError";
    var ve = function () {
        Ya.call(this)
    };
    x(ve, Ya);
    ve.prototype.message = "Deferred was canceled";
    ve.prototype.name = "CanceledError";
    var Fe = function (a) {
        this.a = p.setTimeout(v(this.f, this), 0);
        this.b = a
    };
    Fe.prototype.f = function () {
        delete Ee[this.a];
        throw this.b;
    };
    var Ee = {};
    var Ke = function (a) {
            var b = {},
                c = b.document || document,
                d = dc(a).toString(),
                e = xd(document, "SCRIPT"),
                f = {
                    Mc: e,
                    Wc: void 0
                },
                k = new E(Ge, f),
                l = null,
                m = null != b.timeout ? b.timeout : 5E3;
            0 < m && (l = window.setTimeout(function () {
                He(e, !0);
                k.h(new Ie(1, "Timeout reached for loading script " + d))
            }, m), f.Wc = l);
            e.onload = e.onreadystatechange = function () {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (He(e, b.Rf || !1, l), k.I(null))
            };
            e.onerror = function () {
                He(e, !0, l);
                k.h(new Ie(0, "Error while loading script " + d))
            };
            f = b.attributes || {};
            Rb(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            td(e, f);
            Jc(e, a);
            Je(c).appendChild(e);
            return k
        },
        Je = function (a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
        },
        Ge = function () {
            if (this && this.Mc) {
                var a = this.Mc;
                a && "SCRIPT" == a.tagName && He(a, !0, this.Wc)
            }
        },
        He = function (a, b, c) {
            null != c && p.clearTimeout(c);
            a.onload = t;
            a.onerror = t;
            a.onreadystatechange = t;
            b && window.setTimeout(function () {
                Cd(a)
            }, 0)
        },
        Ie = function (a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            Ya.call(this, c);
            this.code = a
        };
    x(Ie, Ya);
    var F = function (a, b) {
        this.b = {};
        this.a = [];
        this.f = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof F)
                for (c = a.O(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    g = F.prototype;
    g.Y = function () {
        return this.f
    };
    g.M = function () {
        Le(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    g.O = function () {
        Le(this);
        return this.a.concat()
    };
    g.R = function (a) {
        return Me(this.b, a)
    };
    g.La = function (a) {
        for (var b = 0; b < this.a.length; b++) {
            var c = this.a[b];
            if (Me(this.b, c) && this.b[c] == a) return !0
        }
        return !1
    };
    var Ne = function (a) {
            a.b = {};
            a.a.length = 0;
            a.f = 0
        },
        Oe = function (a, b) {
            Me(a.b, b) && (delete a.b[b], a.f--, a.a.length > 2 * a.f && Le(a))
        },
        Le = function (a) {
            if (a.f != a.a.length) {
                for (var b = 0, c = 0; b < a.a.length;) {
                    var d = a.a[b];
                    Me(a.b, d) && (a.a[c++] = d);
                    b++
                }
                a.a.length = c
            }
            if (a.f != a.a.length) {
                var e = {};
                for (c = b = 0; b < a.a.length;) d = a.a[b], Me(e, d) || (a.a[c++] = d, e[d] = 1), b++;
                a.a.length = c
            }
        };
    F.prototype.get = function (a, b) {
        return Me(this.b, a) ? this.b[a] : b
    };
    F.prototype.set = function (a, b) {
        Me(this.b, a) || (this.f++, this.a.push(a));
        this.b[a] = b
    };
    F.prototype.forEach = function (a, b) {
        for (var c = this.O(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var Me = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var G = function () {
        this.v = this.v;
        this.V = this.V
    };
    G.prototype.v = !1;
    G.prototype.dispose = function () {
        this.v || (this.v = !0, this.A())
    };
    var Pe = function (a, b) {
        b = w(H, b);
        a.v ? b() : (a.V || (a.V = []), a.V.push(b))
    };
    G.prototype.A = function () {
        if (this.V)
            for (; this.V.length;) this.V.shift()()
    };
    var H = function (a) {
            a && "function" == typeof a.dispose && a.dispose()
        },
        Qe = function (a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                Ha(d) ? Qe.apply(null, d) : H(d)
            }
        };
    var Re = function (a, b) {
        this.type = a;
        this.a = this.target = b;
        this.defaultPrevented = this.b = !1
    };
    Re.prototype.stopPropagation = function () {
        this.b = !0
    };
    Re.prototype.f = function () {
        this.defaultPrevented = !0
    };
    var Se = function (a) {
        a.f()
    };
    var Te = !Zc || 9 <= Number(md),
        Ue = Zc && !jd("9"),
        Ve = function () {
            if (!p.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function () {
                        a = !0
                    }
                });
            try {
                p.addEventListener("test", t, b), p.removeEventListener("test", t, b)
            } catch (c) {}
            return a
        }();
    var Xe = function (a, b) {
        Re.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.X = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            if (b = a.relatedTarget) {
                if (bd) {
                    a: {
                        try {
                            Vc(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (b =
                        null)
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : We[a.pointerType] || "";
            this.X = a;
            a.defaultPrevented && this.f()
        }
    };
    x(Xe, Re);
    var We = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Xe.prototype.stopPropagation = function () {
        Xe.G.stopPropagation.call(this);
        this.X.stopPropagation ? this.X.stopPropagation() : this.X.cancelBubble = !0
    };
    Xe.prototype.f = function () {
        Xe.G.f.call(this);
        var a = this.X;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ue) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    Xe.prototype.sd = function () {
        return this.X
    };
    var Ye = "closure_listenable_" + (1E6 * Math.random() | 0),
        Ze = function (a) {
            return !(!a || !a[Ye])
        },
        $e = 0;
    var af = function (a, b, c, d, e) {
            this.listener = a;
            this.a = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ha = e;
            this.key = ++$e;
            this.Ia = this.Za = !1
        },
        bf = function (a) {
            a.Ia = !0;
            a.listener = null;
            a.a = null;
            a.src = null;
            a.Ha = null
        };
    var cf = function (a) {
        this.src = a;
        this.a = {};
        this.b = 0
    };
    cf.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var k = df(a, b, d, e); - 1 < k ? (b = a[k], c || (b.Za = !1)) : (b = new af(b, this.src, f, !!d, e), b.Za = c, a.push(b));
        return b
    };
    var ef = function (a, b) {
            var c = b.type;
            if (!(c in a.a)) return !1;
            var d = ib(a.a[c], b);
            d && (bf(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
            return d
        },
        ff = function (a, b) {
            b = b && b.toString();
            var c = 0,
                d;
            for (d in a.a)
                if (!b || d == b) {
                    for (var e = a.a[d], f = 0; f < e.length; f++) ++c, bf(e[f]);
                    delete a.a[d];
                    a.b--
                }
        },
        gf = function (a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = df(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        hf = function (a, b) {
            var c = void 0 !== b,
                d = c ? b.toString() : "";
            Ib(a.a, function (e) {
                for (var f = 0; f < e.length; ++f)
                    if (!c || e[f].type == d) return !0;
                return !1
            })
        },
        df = function (a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.Ia && f.listener == b && f.capture == !!c && f.Ha == d) return e
            }
            return -1
        };
    var jf = "closure_lm_" + (1E6 * Math.random() | 0),
        kf = {},
        lf = 0,
        nf = function (a, b, c, d, e) {
            if (d && d.once) return mf(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) nf(a, b[f], c, d, e);
                return null
            }
            c = of (c);
            return Ze(a) ? a.Fa(b, c, u(d) ? !!d.capture : !!d, e) : pf(a, b, c, !1, d, e)
        },
        pf = function (a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var k = u(e) ? !!e.capture : !!e,
                l = qf(a);
            l || (a[jf] = l = new cf(a));
            c = l.add(b, c, d, k, f);
            if (c.a) return c;
            d = rf();
            c.a = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Ve || (e = k), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(sf(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            lf++;
            return c
        },
        rf = function () {
            var a = tf,
                b = Te ? function (c) {
                    return a.call(b.src, b.listener, c)
                } : function (c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        mf = function (a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) mf(a, b[f], c, d, e);
                return null
            }
            c = of (c);
            return Ze(a) ? a.g.add(String(b),
                c, !0, u(d) ? !!d.capture : !!d, e) : pf(a, b, c, !0, d, e)
        },
        uf = function (a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) uf(a, b[f], c, d, e);
            else d = u(d) ? !!d.capture : !!d, c = of (c), Ze(a) ? a.Na(b, c, d, e) : a && (a = qf(a)) && (b = gf(a, b, c, d, e)) && vf(b)
        },
        vf = function (a) {
            if ("number" === typeof a || !a || a.Ia) return !1;
            var b = a.src;
            if (Ze(b)) return ef(b.g, a);
            var c = a.type,
                d = a.a;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(sf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            lf--;
            (c =
                qf(b)) ? (ef(c, a), 0 == c.b && (c.src = null, b[jf] = null)) : bf(a);
            return !0
        },
        wf = function (a, b, c, d, e) {
            c = of (c);
            d = !!d;
            return Ze(a) ? gf(a.g, String(b), c, d, e) : a ? (a = qf(a)) ? gf(a, b, c, d, e) : null : null
        },
        xf = function (a, b) {
            Ze(a) ? hf(a.g, void 0 !== b ? String(b) : void 0) : (a = qf(a)) && hf(a, b)
        },
        sf = function (a) {
            return a in kf ? kf[a] : kf[a] = "on" + a
        },
        zf = function (a, b, c, d) {
            var e = !0;
            if (a = qf(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.Ia && (f = yf(f, d), e = e && !1 !== f)
                    }
            return e
        },
        yf = function (a, b) {
            var c = a.listener,
                d = a.Ha || a.src;
            a.Za && vf(a);
            return c.call(d, b)
        },
        tf = function (a, b) {
            if (a.Ia) return !0;
            if (!Te) {
                var c = b || Da("window.event");
                b = new Xe(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (k) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; !b.b && 0 <= e; e--) {
                        b.a = c[e];
                        var f = zf(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; !b.b && e < c.length; e++) b.a = c[e],
                    f = zf(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return yf(a,
                new Xe(b, this))
        },
        qf = function (a) {
            a = a[jf];
            return a instanceof cf ? a : null
        },
        Af = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        of = function (a) {
            if (Ia(a)) return a;
            a[Af] || (a[Af] = function (b) {
                return a.handleEvent(b)
            });
            return a[Af]
        };
    var J = function () {
        G.call(this);
        this.g = new cf(this);
        this.ge = this;
        this.Wa = null
    };
    x(J, G);
    J.prototype[Ye] = !0;
    g = J.prototype;
    g.Eb = function (a) {
        this.Wa = a
    };
    g.addEventListener = function (a, b, c, d) {
        nf(this, a, b, c, d)
    };
    g.removeEventListener = function (a, b, c, d) {
        uf(this, a, b, c, d)
    };
    g.dispatchEvent = function (a) {
        var b, c = this.Wa;
        if (c)
            for (b = []; c; c = c.Wa) b.push(c);
        c = this.ge;
        var d = a.type || a;
        if ("string" === typeof a) a = new Re(a, c);
        else if (a instanceof Re) a.target = a.target || c;
        else {
            var e = a;
            a = new Re(d, c);
            Rb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.b && 0 <= f; f--) {
                var k = a.a = b[f];
                e = Bf(k, d, !0, a) && e
            }
        a.b || (k = a.a = c, e = Bf(k, d, !0, a) && e, a.b || (e = Bf(k, d, !1, a) && e));
        if (b)
            for (f = 0; !a.b && f < b.length; f++) k = a.a = b[f], e = Bf(k, d, !1, a) && e;
        return e
    };
    g.A = function () {
        J.G.A.call(this);
        this.g && ff(this.g, void 0);
        this.Wa = null
    };
    g.Fa = function (a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };
    g.Na = function (a, b, c, d) {
        var e = this.g;
        a = String(a).toString();
        if (a in e.a) {
            var f = e.a[a];
            b = df(f, b, c, d); - 1 < b ? (bf(f[b]), hb(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    var Bf = function (a, b, c, d) {
        b = a.g.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var k = b[f];
            if (k && !k.Ia && k.capture == c) {
                var l = k.listener,
                    m = k.Ha || k.src;
                k.Za && ef(a.g, k);
                e = !1 !== l.call(m, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    var Cf = function (a, b) {
        J.call(this);
        this.b = a || 1;
        this.a = b || p;
        this.f = v(this.Ve, this);
        this.h = Oa()
    };
    x(Cf, J);
    g = Cf.prototype;
    g.Ea = !1;
    g.fa = null;
    g.setInterval = function (a) {
        this.b = a;
        this.fa && this.Ea ? (this.stop(), this.start()) : this.fa && this.stop()
    };
    g.Ve = function () {
        if (this.Ea) {
            var a = Oa() - this.h;
            0 < a && a < .8 * this.b ? this.fa = this.a.setTimeout(this.f, this.b - a) : (this.fa && (this.a.clearTimeout(this.fa), this.fa = null), this.dispatchEvent("tick"), this.Ea && (this.stop(), this.start()))
        }
    };
    g.start = function () {
        this.Ea = !0;
        this.fa || (this.fa = this.a.setTimeout(this.f, this.b), this.h = Oa())
    };
    g.stop = function () {
        this.Ea = !1;
        this.fa && (this.a.clearTimeout(this.fa), this.fa = null)
    };
    g.A = function () {
        Cf.G.A.call(this);
        this.stop();
        delete this.a
    };
    var Df = function (a, b, c) {
        if (Ia(a)) c && (a = v(a, c));
        else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0)
    };
    var Ef = {},
        Ff = {},
        Gf = new Xa(.001, "");
    Gf.a = "load";
    var Hf = new Xa(.1, "");
    Hf.a = "fail";
    var If = new F;
    If.set("enabler", "enabler");
    If.set("dcmenabler", "dcm");
    If.set("video", "vid");
    If.set("configurable", "cfg");
    If.set("configurablefiller", "cfg_fill");
    If.set("layouts", "lay");
    If.set("layoutsfiller", "lay_fill");
    If.set("gdn", "gdn");
    If.set("rad_ui_video", "rad");
    var Jf = function () {
            for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.src || c.getAttribute("src"))
                    if (c = c.src || c.getAttribute("src"), /Enabler/.test(c)) return c.substring(0, c.lastIndexOf("/") + 1)
            }
            return ""
        },
        Kf = function (a) {
            a = Ef[a];
            return void 0 !== a && 1 <= a
        },
        Lf = function (a) {
            return [Jf(), "prod_studio_01_244_", [a, "module"].join(""), ".js"].join("")
        };
    r("goog.exportSymbol", function (a, b, c) {
        r(a, b, c)
    }, this);
    var Mf = function (a) {
            a += "goog.exportSymbol('studioLoader.context.evalInContext', " + Mf.toString() + ");";
            eval(a)
        },
        Nf = function (a, b) {
            b = If.get(b) || "unknown";
            a.f = b;
            a = a.b();
            !sb(a) && y(1) && (xd(document, "IMG").src = a)
        },
        Of = function (a, b) {
            Ef[a] = 2;
            Nf(Gf, a);
            b = "number" === typeof b ? b : 2;
            for (var c = Lf(a), d = Ke(Jd(c)), e = 0; e < b; ++e) d = d.then(void 0, function () {
                return Ke(Jd(c))
            });
            return d.then(function () {
                Ef[a] = 3
            }, function () {
                Nf(Hf, a);
                return fe()
            })
        },
        Pf = function (a) {
            if (Kf(a)) return Ff[a];
            Ef[a] = 1;
            for (var b = [], c = DEPS_GRAPH ? DEPS_GRAPH[[a,
                    "module"
                ].join("")] : [], d = c.length - 1; 0 <= d; d--) {
                var e = c[d].replace(/module$/, "");
                if (e == a) break;
                Kf(e) ? b.push(Ff[e]) : b.push(Pf(e))
            }
            b = ie(b).then(w(Of, a, 2));
            return Ff[a] = b
        },
        Qf = function (a, b) {
            a = Pf(a);
            "function" === typeof b && (a = a.then(b));
            ke(a, t)
        };
    r("studioLoader.context.evalInContext", Mf, void 0);
    var K = function (a) {
        G.call(this);
        this.l = a;
        this.f = {}
    };
    x(K, G);
    var Rf = [],
        L = function (a, b, c, d, e, f) {
            Array.isArray(c) || (c && (Rf[0] = c.toString()), c = Rf);
            for (var k = 0; k < c.length; k++) {
                var l = nf(b, c[k], d || a.handleEvent, e || !1, f || a.l || a);
                if (!l) break;
                a.f[l.key] = l
            }
        },
        Sf = function (a, b, c, d, e, f) {
            if (Array.isArray(c))
                for (var k = 0; k < c.length; k++) Sf(a, b, c[k], d, e, f);
            else(b = mf(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.f[b.key] = b)
        },
        Tf = function (a, b, c, d, e, f) {
            if (Array.isArray(c))
                for (var k = 0; k < c.length; k++) Tf(a, b, c[k], d, e, f);
            else if (b = wf(b, c, d || a.handleEvent, u(e) ? !!e.capture : !!e, f || a.l || a)) vf(b),
                delete a.f[b.key]
        },
        Uf = function (a) {
            C(a.f, function (b, c) {
                this.f.hasOwnProperty(c) && vf(b)
            }, a);
            a.f = {}
        };
    K.prototype.A = function () {
        K.G.A.call(this);
        Uf(this)
    };
    K.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Vf = function (a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function (d, e) {
            function f(m) {
                try {
                    l(b.next(m))
                } catch (n) {
                    e(n)
                }
            }

            function k(m) {
                try {
                    l(b["throw"](m))
                } catch (n) {
                    e(n)
                }
            }

            function l(m) {
                m.done ? d(m.value) : (new c(function (n) {
                    n(m.value)
                })).then(f, k)
            }
            l((b = b.apply(a, void 0)).next())
        })
    };
    var ec = new Zb(Xb, "https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var Wf = function (a, b) {
        a.addEventListener && a.addEventListener("load", b, !1)
    };

    function Xf(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new Promise(function (d, e) {
            function f() {
                k.onload = null;
                k.onerror = null;
                b.document.body.removeChild(k)
            }
            var k = b.document.createElement("script");
            k.onload = function () {
                f();
                d()
            };
            k.onerror = function () {
                f();
                e(void 0)
            };
            k.type = "text/javascript";
            Jc(k, a);
            c && "complete" !== b.document.readyState ? Wf(b, function () {
                b.document.body.appendChild(k)
            }) : b.document.body.appendChild(k)
        })
    };

    function Yf(a) {
        return Vf(this, function c() {
            var d, e, f;
            return wa(c, function (k) {
                switch (k.a) {
                    case 1:
                        d = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.a + ("&tv=" + a.b + "&st=") + a.ya;
                        e = void 0;
                        k.v = 2;
                        var l = Zf(d);
                        k.a = 4;
                        return {
                            value: l
                        };
                    case 4:
                        e = k.h;
                        k.a = 3;
                        k.v = 0;
                        break;
                    case 2:
                        k.v = 0, k.f = null;
                    case 3:
                        return e ? (f = a.fb || e.sodar_query_id) && e.bg_hash_basename && e.bg_binary ? k.return({
                            context: a.f,
                            dd: e.bg_hash_basename,
                            cd: e.bg_binary,
                            je: a.a + "_" + a.b,
                            fb: f,
                            ya: a.ya
                        }) : k.return(void 0) : k.return(void 0)
                }
            })
        })
    }
    var Zf = function (a) {
        return new Promise(function (b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function () {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };

    function $f() {
        var a = ag();
        Vf(this, function c() {
            var d;
            return wa(c, function (e) {
                if (1 == e.a) {
                    var f = Yf(a);
                    e.a = 2;
                    return {
                        value: f
                    }
                }
                if (d = e.h) {
                    f = "sodar2";
                    f = void 0 === f ? "sodar2" : f;
                    var k = window,
                        l = k.GoogleGcLKhOms;
                    l && "function" === typeof l.push || (l = k.GoogleGcLKhOms = []);
                    var m = {};
                    l.push((m._ctx_ = d.context, m._bgv_ = d.dd, m._bgp_ = d.cd, m._li_ = d.je, m._jk_ = d.fb, m._st_ = d.ya, m));
                    if (l = k.GoogleDX5YKUSk) k.GoogleDX5YKUSk = void 0, l[1]();
                    f = ic({
                        basename: f
                    });
                    Xf(f)
                }
                return e.return(d)
            })
        })
    };
    var bg = function (a) {
            this.a = a.a;
            this.b = a.b;
            this.f = a.f;
            this.fb = a.fb;
            this.ya = a.ya
        },
        cg = function () {
            this.a = "xfad";
            this.b = "01_244";
            this.f = "cr";
            this.ya = "env"
        },
        ag = function () {
            var a = new cg;
            a.ya = "int";
            return new bg(a)
        };
    var dg = Sb(),
        eg = Tc() || A("iPod"),
        fg = A("iPad"),
        gg = A("Android") && !(Tb() || Sb() || A("Opera") || A("Silk")),
        hg = Tb(),
        ig = A("Safari") && !(Tb() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || Sb() || A("Silk") || A("Android")) && !Uc();
    var jg = function () {},
        kg = "function" == typeof Uint8Array,
        lg = function (a, b) {
            a.f = null;
            b || (b = []);
            a.j = void 0;
            a.g = -1;
            a.a = b;
            a: {
                if (b = a.a.length) {
                    --b;
                    var c = a.a[b];
                    if (!(null === c || "object" != typeof c || Array.isArray(c) || kg && c instanceof Uint8Array)) {
                        a.v = b - a.g;
                        a.b = c;
                        break a
                    }
                }
                a.v = Number.MAX_VALUE
            }
            a.h = {}
        },
        mg = [],
        ng = function (a, b) {
            if (b < a.v) {
                b += a.g;
                var c = a.a[b];
                return c === mg ? a.a[b] = [] : c
            }
            if (a.b) return c = a.b[b], c === mg ? a.b[b] = [] : c
        },
        og = function (a, b) {
            a.f || (a.f = {});
            if (!a.f[1]) {
                var c = ng(a, 1);
                c && (a.f[1] = new b(c))
            }
            return a.f[1]
        };
    jg.prototype.toString = function () {
        return this.a.toString()
    };
    var pg = function (a) {
        lg(this, a)
    };
    x(pg, jg);
    var qg = function (a) {
        lg(this, a)
    };
    x(qg, jg);
    var rg = function (a) {
            if (a.M && "function" == typeof a.M) return a.M();
            if ("string" === typeof a) return a.split("");
            if (Ha(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Jb(a)
        },
        sg = function (a, b) {
            return a.contains && "function" == typeof a.contains ? a.contains(b) : a.La && "function" == typeof a.La ? a.La(b) : Ha(a) || "string" === typeof a ? 0 <= ab(a, b) : Mb(a, b)
        };
    var tg = function () {
            this.a = new F
        },
        ug = function (a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + La(a) : b.substr(0, 1) + a
        };
    tg.prototype.Y = function () {
        return this.a.Y()
    };
    tg.prototype.add = function (a) {
        this.a.set(ug(a), a)
    };
    var wg = function (a) {
        var b = vg;
        a = rg(a);
        for (var c = a.length, d = 0; d < c; d++) b.add(a[d])
    };
    tg.prototype.contains = function (a) {
        return this.a.R(ug(a))
    };
    tg.prototype.M = function () {
        return this.a.M()
    };
    r("studio.common.Feature.Type", {
        If: 1,
        SDK_EVENT_FORWARDER: 2,
        RL_EVENT_FORWARDER: 3
    }, void 0);
    var vg = new tg;
    r("studio.common.Feature.hasFeature", function (a) {
        return vg.contains(a)
    }, void 0);
    r("studio.common.Feature.hasFeatures", function (a) {
        var b = vg;
        a: {
            var c = b.contains;
            if ("function" == typeof a.every) a = a.every(c, b);
            else if (Ha(a) || "string" === typeof a) a = eb(a, c, b);
            else {
                if (a.O && "function" == typeof a.O) var d = a.O();
                else if (a.M && "function" == typeof a.M) d = void 0;
                else if (Ha(a) || "string" === typeof a) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else
                    for (f in d = [], e = 0, a) d[e++] = f;
                e = rg(a);
                f = e.length;
                for (var k = 0; k < f; k++)
                    if (!c.call(b, e[k], d && d[k], a)) {
                        a = !1;
                        break a
                    } a = !0
            }
        }
        return a
    }, void 0);
    var xg = function (a, b) {
        this.b = a;
        this.a = null != b ? b : 0
    };
    r("studio.common.Orientation", xg, void 0);
    var yg = function () {
            var a = window;
            return a.innerWidth > a.innerHeight ? "landscape" : "portrait"
        },
        zg = function () {
            return "onorientationchange" in window
        };
    xg.Mode = {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape"
    };
    xg.prototype.Bd = function () {
        return this.b
    };
    xg.prototype.getMode = xg.prototype.Bd;
    xg.prototype.Ad = function () {
        return this.a
    };
    xg.prototype.getDegrees = xg.prototype.Ad;
    xg.prototype.toString = function () {
        return this.b
    };
    var Ag = function (a, b, c, d, e, f, k) {
            var l = "";
            a && (l += a + ":");
            c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
            e && (l += e);
            f && (l += "?" + f);
            k && (l += "#" + k);
            return l
        },
        Bg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Cg = function (a) {
            var b = a.indexOf("#");
            return 0 > b ? null : a.substr(b + 1)
        },
        Dg = function (a) {
            a = a.match(Bg);
            return Ag(a[1], a[2], a[3], a[4])
        },
        Eg = function (a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Lc(e) : "")
                }
            }
        },
        Fg = function (a, b) {
            if (!b) return a;
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0, d), e, a.substr(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        },
        Gg = function (a, b, c) {
            if (Array.isArray(b))
                for (var d = 0; d < b.length; d++) Gg(a, String(b[d]), c);
            else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        },
        Hg = /#|$/,
        Ig = function (a,
            b) {
            var c = a.search(Hg);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Lc(a.substr(d, e - d))
        };
    var Jg = function (a, b) {
            return b ? a.replace("[rm_exit_id]", b) : a
        },
        Kg = function (a) {
            sb(Oc(a)) || "market" != (a.match(Bg)[1] || null) || (a = a.match(Bg), a = "https://play.google.com/store/apps/details" + Ag(null, null, null, null, a[5], a[6], a[7]));
            return a
        };
    var Lg = {
        CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
        CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
        CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
        CREATIVE_REPORTER: "creativeReporter",
        CREATIVE_INNOVATION: "gcreativeinnovation",
        GOOGLE_AFMA_SUPPORT: "googleAfmaSupport"
    };
    r("studio.common.WhitelistedExternalObject", Lg, void 0);
    var Mg = {};
    var Ng = ["pu", "lru", "pru", "lpu", "ppu"],
        Pg = function () {
            for (var a = 10, b = Og, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
            return d
        },
        Og = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var Qg = function (a) {
        G.call(this);
        this.ea = a || rd()
    };
    x(Qg, G);
    var Rg = function (a) {
        return vd(a.ea.a)
    };
    var Sg = function (a, b) {
        Qg.call(this, b);
        this.a = a;
        this.s = new K(this);
        Pe(this, this.s);
        this.j = new Cf(100, Rg(this));
        Pe(this, this.j);
        this.g = new E;
        this.h = new E;
        this.b = new E;
        this.o = Pg();
        this.l = null;
        this.f = {};
        this.C = this.a.name;
        this.a.Aa(this.a.name + "_" + this.a.ca());
        this.B = !1;
        Ce(this.b, this.g);
        Ce(this.b, this.h);
        Be(this.b, this.Oe, this);
        this.b.I(!0);
        L(this.s, this.j, "tick", this.Uc, void 0)
    };
    h(Sg, Qg);
    var Vg = function (a) {
        var b = new Tg(a.channelName, a.service, a.payload);
        a = b.a;
        var c = b.f;
        b = b.b;
        var d = Mg[a];
        if (d) return d.ga(c, b), !0;
        d = Ug(b)[0];
        for (var e in Mg) {
            var f = Mg[e];
            if (1 == f.ca() && !f.isConnected() && "tp" == c && "SETUP" == d) return f.Aa(a), f.ga(c, b), !0
        }
        return !1
    };
    g = Sg.prototype;
    g.Ta = function (a) {
        a = Ug(a);
        var b = a[1];
        switch (a[0]) {
            case "SETUP_ACK":
                this.g.a || this.g.I(!0);
                break;
            case "SETUP":
                this.N("tp", "SETUP_ACK"), this.h.a || this.h.I(!0), null != this.l && this.l != b && this.N("tp", "SETUP," + this.o), this.l = b
        }
    };
    g.connect = function () {
        var a = Rg(this);
        if (a) {
            var b = La(a);
            0 == (Wg[b] || 0) && null == Da("crosswindowmessaging.channel", a) && r("crosswindowmessaging.channel", Vg, a);
            Wg[b]++;
            this.B = !0;
            this.Uc()
        }
    };
    g.Uc = function () {
        this.a.isConnected() ? this.j.stop() : (this.j.start(), this.N("tp", "SETUP," + this.o))
    };
    g.N = function (a, b) {
        this.a.$ && (a = new Tg(this.C + "_" + (0 == this.a.ca() ? 1 : 0), a, b), this.a.a.directSyncMode ? this.Tc(a) : this.f[La(a)] = Df(v(this.Tc, this, a), 0))
    };
    g.Tc = function (a) {
        var b = La(a);
        this.f[b] && delete this.f[b];
        try {
            var c = Da("crosswindowmessaging.channel", this.a.$)
        } catch (d) {
            return
        }
        if (null !== c) try {
            c({
                channelName: a.a,
                service: a.f,
                payload: a.b
            })
        } catch (d) {}
    };
    g.Oe = function () {
        Xg(this.a, 0)
    };
    g.A = function () {
        if (this.B) {
            var a = Rg(this),
                b = La(a);
            1 == --Wg[b] && r("crosswindowmessaging.channel", null, a)
        }
        this.f && (C(this.f, function (c) {
            p.clearTimeout(c)
        }), this.f = null);
        this.g && (this.g.cancel(), delete this.g);
        this.h && (this.h.cancel(), delete this.h);
        this.b && (this.b.cancel(), delete this.b);
        Qg.prototype.A.call(this)
    };
    var Ug = function (a) {
            a = a.split(",");
            a[1] = a[1] || null;
            return a
        },
        Wg = {},
        Tg = function (a, b, c) {
            this.a = a;
            this.f = b;
            this.b = c
        };
    var Yg = function (a, b, c, d, e) {
        Qg.call(this, c);
        this.h = a;
        this.j = e || 2;
        this.ra = b || "*";
        this.B = new K(this);
        this.l = new Cf(100, Rg(this));
        this.C = !!d;
        this.f = new E;
        this.g = new E;
        this.b = new E;
        this.T = Pg();
        this.s = null;
        this.C ? 1 == this.h.ca() ? Ce(this.b, this.f) : Ce(this.b, this.g) : (Ce(this.b, this.f), 2 == this.j && Ce(this.b, this.g));
        Be(this.b, this.ha, this);
        this.b.I(!0);
        this.K = Zc && !jd("11");
        L(this.B, this.l, "tick", this.D, void 0)
    };
    h(Yg, Qg);
    var $g = function (a) {
        var b = a.X.data;
        if ("string" !== typeof b) return !1;
        var c = b.indexOf("|"),
            d = b.indexOf(":");
        if (-1 == c || -1 == d) return !1;
        var e = b.substring(0, c);
        c = b.substring(c + 1, d);
        b = b.substring(d + 1);
        if (d = Mg[e]) return d.ga(c, b, a.X.origin), !0;
        d = Zg(b)[0];
        for (var f in Mg) {
            var k = Mg[f];
            if (1 == k.ca() && !k.isConnected() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && k.Qa(a.X.origin)) return k.Aa(e), k.ga(c, b), !0
        }
        return !1
    };
    Yg.prototype.Ta = function (a) {
        var b = Zg(a);
        a = b[1];
        switch (b[0]) {
            case "SETUP_ACK":
                ah(this, 1);
                this.f.a || this.f.I(!0);
                break;
            case "SETUP_ACK_NTPV2":
                2 == this.j && (ah(this, 2), this.f.a || this.f.I(!0));
                break;
            case "SETUP":
                ah(this, 1);
                bh(this, 1);
                break;
            case "SETUP_NTPV2":
                2 == this.j && (b = this.a, ah(this, 2), bh(this, 2), 1 != b && null == this.s || this.s == a || ch(this), this.s = a)
        }
    };
    var ch = function (a) {
            2 != a.j || null != a.a && 2 != a.a || a.N("tp", "SETUP_NTPV2," + a.T);
            null != a.a && 1 != a.a || a.N("tp", "SETUP")
        },
        bh = function (a, b) {
            if (2 != a.j || null != a.a && 2 != a.a || 2 != b) {
                if (null != a.a && 1 != a.a || 1 != b) return;
                a.N("tp", "SETUP_ACK")
            } else a.N("tp", "SETUP_ACK_NTPV2");
            a.g.a || a.g.I(!0)
        },
        ah = function (a, b) {
            b > a.a && (a.a = b);
            1 == a.a && (a.g.a || a.C || a.g.I(!0), a.s = null)
        };
    Yg.prototype.connect = function () {
        var a = Rg(this),
            b = La(a),
            c = dh[b];
        "number" !== typeof c && (c = 0);
        0 == c && nf(a.postMessage ? a : a.document, "message", $g, !1, Yg);
        dh[b] = c + 1;
        this.H = !0;
        this.D()
    };
    Yg.prototype.D = function () {
        var a = 0 == this.h.ca();
        this.C && a || this.h.isConnected() || this.v ? this.l.stop() : (this.l.start(), ch(this))
    };
    var eh = function (a, b, c) {
        var d = a.h.$,
            e = a.h.name;
        a.o = 0;
        try {
            var f = d.postMessage ? d : d.document;
            f.postMessage && f.postMessage(e + "|" + b + ":" + c, a.ra)
        } catch (k) {}
    };
    Yg.prototype.N = function (a, b) {
        var c = this;
        this.h.$ && (this.K ? this.o = Df(function () {
            return void eh(c, a, b)
        }, 0) : eh(this, a, b))
    };
    Yg.prototype.ha = function () {
        Xg(this.h, 1 == this.j || 1 == this.a ? 200 : void 0)
    };
    Yg.prototype.A = function () {
        if (this.H) {
            var a = Rg(this),
                b = La(a),
                c = dh[b];
            dh[b] = c - 1;
            1 == c && uf(a.postMessage ? a : a.document, "message", $g, !1, Yg)
        }
        this.o && (p.clearTimeout(this.o), this.o = 0);
        H(this.B);
        delete this.B;
        H(this.l);
        delete this.l;
        this.f.cancel();
        delete this.f;
        this.g.cancel();
        delete this.g;
        this.b.cancel();
        delete this.b;
        delete this.N;
        Qg.prototype.A.call(this)
    };
    var Zg = function (a) {
        a = a.split(",");
        a[1] = a[1] || null;
        return a
    };
    Yg.prototype.a = null;
    Yg.prototype.H = !1;
    var dh = {};
    Yg.prototype.o = 0;
    var fh = function (a, b, c) {
        G.call(this);
        this.a = a;
        this.g = b || 0;
        this.b = c;
        this.f = v(this.md, this)
    };
    x(fh, G);
    g = fh.prototype;
    g.wa = 0;
    g.A = function () {
        fh.G.A.call(this);
        this.stop();
        delete this.a;
        delete this.b
    };
    g.start = function (a) {
        this.stop();
        this.wa = Df(this.f, void 0 !== a ? a : this.g)
    };
    g.stop = function () {
        0 != this.wa && p.clearTimeout(this.wa);
        this.wa = 0
    };
    g.md = function () {
        this.wa = 0;
        this.a && this.a.call(this.b)
    };
    var ih = function (a) {
            var b = [];
            gh(new hh, a, b);
            return b.join("")
        },
        hh = function () {},
        gh = function (a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), gh(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), jh(d, c), c.push(":"), gh(a, f, c),
                            e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        jh(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        kh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        lh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        jh = function (a, b) {
            b.push('"', a.replace(lh,
                function (c) {
                    var d = kh[c];
                    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), kh[c] = d);
                    return d
                }), '"')
        };
    var mh = function () {
        G.call(this);
        this.l = {}
    };
    x(mh, G);
    mh.prototype.connect = function (a) {
        a && a()
    };
    mh.prototype.isConnected = function () {
        return !0
    };
    mh.prototype.Oa = function (a, b, c) {
        this.l[a] = {
            I: b,
            Ac: !!c
        }
    };
    mh.prototype.Ic = function (a) {
        this.h = a
    };
    var nh = function (a, b, c) {
        var d = a.l[b];
        if (a = d ? d : a.h ? {
                I: w(a.h, b),
                Ac: u(c)
            } : null) {
            a: {
                if ((b = a.Ac) && "string" === typeof c) try {
                    var e = JSON.parse(c);
                    break a
                } catch (f) {
                    e = null;
                    break a
                } else if (!b && "string" !== typeof c) {
                    e = ih(c);
                    break a
                } e = c
            }
            null != e && a.I(e)
        }
    };
    mh.prototype.A = function () {
        mh.G.A.call(this);
        delete this.l;
        delete this.h
    };
    var oh = function (a) {
        this.b = this.j = this.g = "";
        this.l = null;
        this.v = this.a = "";
        this.h = !1;
        var b;
        a instanceof oh ? (this.h = a.h, ph(this, a.g), this.j = a.j, this.b = a.b, qh(this, a.l), this.a = a.a, rh(this, sh(a.f)), this.v = a.v) : a && (b = String(a).match(Bg)) ? (this.h = !1, ph(this, b[1] || "", !0), this.j = th(b[2] || ""), this.b = th(b[3] || "", !0), qh(this, b[4]), this.a = th(b[5] || "", !0), rh(this, b[6] || "", !0), this.v = th(b[7] || "")) : (this.h = !1, this.f = new uh(null, this.h))
    };
    oh.prototype.toString = function () {
        var a = [],
            b = this.g;
        b && a.push(vh(b, wh, !0), ":");
        var c = this.b;
        if (c || "file" == b) a.push("//"), (b = this.j) && a.push(vh(b, wh, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
        if (c = this.a) this.b && "/" != c.charAt(0) && a.push("/"), a.push(vh(c, "/" == c.charAt(0) ? xh : yh, !0));
        (c = this.f.toString()) && a.push("?", c);
        (c = this.v) && a.push("#", vh(c, zh));
        return a.join("")
    };
    oh.prototype.resolve = function (a) {
        var b = new oh(this),
            c = !!a.g;
        c ? ph(b, a.g) : c = !!a.j;
        c ? b.j = a.j : c = !!a.b;
        c ? b.b = a.b : c = null != a.l;
        var d = a.a;
        if (c) qh(b, a.l);
        else if (c = !!a.a) {
            if ("/" != d.charAt(0))
                if (this.b && !this.a) d = "/" + d;
                else {
                    var e = b.a.lastIndexOf("/"); - 1 != e && (d = b.a.substr(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (Bb(e, "./") || Bb(e, "/.")) {
                d = rb(e, "/");
                e = e.split("/");
                for (var f = [], k = 0; k < e.length;) {
                    var l = e[k++];
                    "." == l ? d && k == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && k == e.length &&
                        f.push("")) : (f.push(l), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.a = d : c = "" !== a.f.toString();
        c ? rh(b, sh(a.f)) : c = !!a.v;
        c && (b.v = a.v);
        return b
    };
    var ph = function (a, b, c) {
            a.g = c ? th(b, !0) : b;
            a.g && (a.g = a.g.replace(/:$/, ""))
        },
        qh = function (a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.l = b
            } else a.l = null
        },
        rh = function (a, b, c) {
            b instanceof uh ? (a.f = b, Ah(a.f, a.h)) : (c || (b = vh(b, Bh)), a.f = new uh(b, a.h))
        },
        th = function (a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        vh = function (a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, Ch), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Ch = function (a) {
            a =
                a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        wh = /[#\/\?@]/g,
        yh = /[#\?:]/g,
        xh = /[#\?]/g,
        Bh = /[#\?@]/g,
        zh = /#/g,
        uh = function (a, b) {
            this.b = this.a = null;
            this.f = a || null;
            this.g = !!b
        },
        Dh = function (a) {
            a.a || (a.a = new F, a.b = 0, a.f && Eg(a.f, function (b, c) {
                a.add(Lc(b), c)
            }))
        };
    uh.prototype.Y = function () {
        Dh(this);
        return this.b
    };
    uh.prototype.add = function (a, b) {
        Dh(this);
        this.f = null;
        a = Eh(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b += 1;
        return this
    };
    var Fh = function (a, b) {
        Dh(a);
        b = Eh(a, b);
        a.a.R(b) && (a.f = null, a.b -= a.a.get(b).length, Oe(a.a, b))
    };
    g = uh.prototype;
    g.R = function (a) {
        Dh(this);
        a = Eh(this, a);
        return this.a.R(a)
    };
    g.La = function (a) {
        var b = this.M();
        return 0 <= ab(b, a)
    };
    g.forEach = function (a, b) {
        Dh(this);
        this.a.forEach(function (c, d) {
            z(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    g.O = function () {
        Dh(this);
        for (var a = this.a.M(), b = this.a.O(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.M = function (a) {
        Dh(this);
        var b = [];
        if ("string" === typeof a) this.R(a) && (b = jb(b, this.a.get(Eh(this, a))));
        else {
            a = this.a.M();
            for (var c = 0; c < a.length; c++) b = jb(b, a[c])
        }
        return b
    };
    g.set = function (a, b) {
        Dh(this);
        this.f = null;
        a = Eh(this, a);
        this.R(a) && (this.b -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.b += 1;
        return this
    };
    g.get = function (a, b) {
        if (!a) return b;
        a = this.M(a);
        return 0 < a.length ? String(a[0]) : b
    };
    g.toString = function () {
        if (this.f) return this.f;
        if (!this.a) return "";
        for (var a = [], b = this.a.O(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.M(d);
            for (var f = 0; f < d.length; f++) {
                var k = e;
                "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
                a.push(k)
            }
        }
        return this.f = a.join("&")
    };
    var sh = function (a) {
            var b = new uh;
            b.f = a.f;
            a.a && (b.a = new F(a.a), b.b = a.b);
            return b
        },
        Eh = function (a, b) {
            b = String(b);
            a.g && (b = b.toLowerCase());
            return b
        },
        Ah = function (a, b) {
            b && !a.g && (Dh(a), a.f = null, a.a.forEach(function (c, d) {
                var e = d.toLowerCase();
                d != e && (Fh(this, d), Fh(this, e), 0 < c.length && (this.f = null, this.a.set(Eh(this, e), kb(c)), this.b += c.length))
            }, a));
            a.g = b
        };
    var Hh = function (a, b) {
        mh.call(this);
        for (var c = 0, d; d = Ng[c]; c++)
            if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
        this.a = a;
        this.name = this.a.cn || Pg();
        this.f = b || rd();
        this.g = [];
        this.j = new K(this);
        a.lpu = a.lpu || Dg(vd(this.f.a).location.href) + "/robots.txt";
        a.ppu = a.ppu || Dg(a.pu || "") + "/robots.txt";
        Mg[this.name] = this;
        wf(window, "unload", Gh) || mf(window, "unload", Gh)
    };
    h(Hh, mh);
    Hh.prototype.isConnected = function () {
        return 2 == this.Ka
    };
    Hh.prototype.connect = function (a) {
        this.b = a || t;
        3 == this.Ka && (this.Ka = 1);
        this.za ? Be(this.za, this.o) : this.o()
    };
    Hh.prototype.o = function () {
        this.za = null;
        this.a.ifrid && (this.kb = this.f.getElement(this.a.ifrid));
        if (this.kb) {
            var a = this.kb.contentWindow;
            a || (a = window.frames[this.a.ifrid]);
            this.$ = a
        }
        if (!this.$) {
            if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
            this.$ = window.parent
        }
        if (!this.na) {
            this.a.tp || (this.a.tp = "function" === typeof document.postMessage || "function" === typeof window.postMessage || Zc && window.postMessage ? 1 : 0);
            if ("function" === typeof this.a.tp) this.na = new this.a.tp(this,
                this.f);
            else switch (this.a.tp) {
                case 1:
                    this.na = new Yg(this, this.a.ph, this.f, !!this.a.osh, this.a.nativeProtocolVersion || 2);
                    break;
                case 2:
                    if (a = this.$) try {
                        a = window.document.domain == this.$.document.domain
                    } catch (b) {
                        a = !1
                    }
                    a && (this.na = new Sg(this, this.f))
            }
            if (!this.na) throw Error("CrossPageChannel: No suitable transport found! You may try injecting a Transport constructor directly via the channel config object.");
        }
        for (this.na.connect(); 0 < this.g.length;) this.g.shift()()
    };
    Hh.prototype.close = function () {
        this.za && (this.za.cancel(), this.za = null);
        this.g.length = 0;
        Uf(this.j);
        this.Ka = 3;
        H(this.na);
        this.b = this.na = null;
        H(this.ua);
        this.ua = null
    };
    var Xg = function (a, b) {
        a.isConnected() || a.ua && 0 != a.ua.wa || (a.Ka = 2, H(a.ua), void 0 !== b ? (a.ua = new fh(a.b, b), a.ua.start()) : (a.ua = null, a.b()))
    };
    Hh.prototype.Pa = function (a, b) {
        if (this.isConnected()) {
            try {
                var c = !!this.$ && !this.$.closed
            } catch (d) {
                c = !1
            }
            c ? (u(b) && (b = ih(b)), this.na.N(Ih(a), b)) : this.close()
        }
    };
    Hh.prototype.ga = function (a, b, c) {
        this.za ? this.g.push(v(this.ga, this, a, b, c)) : this.Qa(c) && !this.v && 3 != this.Ka && (a && "tp" != a ? this.isConnected() && (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = Jh.test(a) ? a.substring(1) : a, nh(this, a, b)) : this.na.Ta(b))
    };
    var Ih = function (a) {
        Kh.test(a) && (a = "%" + a);
        return a.replace(/[%:|]/g, encodeURIComponent)
    };
    Hh.prototype.ca = function () {
        var a = this.a.role;
        return "number" === typeof a ? a : window.parent == this.$ ? 1 : 0
    };
    Hh.prototype.Aa = function (a) {
        delete Mg[this.name];
        this.name = a;
        Mg[a] = this
    };
    Hh.prototype.Qa = function (a) {
        var b = this.a.ph;
        return sb(Oc(a)) || sb(Oc(b)) || a == this.a.ph
    };
    Hh.prototype.A = function () {
        this.close();
        this.kb = this.$ = null;
        delete Mg[this.name];
        H(this.j);
        delete this.j;
        mh.prototype.A.call(this)
    };
    var Gh = function () {
            for (var a in Mg) H(Mg[a])
        },
        Kh = /^%*tp$/,
        Jh = /^%+tp$/;
    g = Hh.prototype;
    g.ua = null;
    g.za = null;
    g.na = null;
    g.Ka = 1;
    g.$ = null;
    g.kb = null;
    var Lh = {
            nf: "devicemotion",
            pf: "deviceorientation",
            Ef: "hostpageScroll",
            tf: "enterViewport",
            uf: "exitViewport",
            gf: "adLocation"
        },
        Mh = {},
        Nh;
    for (Nh in Lh) Mh[Lh[Nh]] = !0;
    var M = function (a) {
        Re.call(this, a)
    };
    h(M, Re);
    M.prototype.aa = function (a, b) {
        this[a] = b;
        return this
    };
    r("studio.events.StudioEvent", M, void 0);
    M.prototype.addProperty = M.prototype.aa;
    M.INIT = "init";
    M.VISIBLE = "visible";
    M.HIDDEN = "hidden";
    M.VISIBILITY_CHANGE = "visibilityChange";
    M.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
    M.EXIT = "exit";
    M.INTERACTION = "interaction";
    M.PAGE_LOADED = "pageLoaded";
    M.ORIENTATION = "orientation";
    M.ABOUT_TO_EXPAND = "aboutToExpand";
    M.EXPAND_START = "expandStart";
    M.EXPAND_FAILED = "expandFailed";
    M.EXPAND_FINISH = "expandFinish";
    M.COLLAPSE_START = "collapseStart";
    M.COLLAPSE_FINISH = "collapseFinish";
    M.COLLAPSE = "collapse";
    M.FULLSCREEN_SUPPORT = "fullscreenSupport";
    M.HOSTPAGE_FEATURES_LOADED = "hostpageFeaturesLoaded";
    M.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
    M.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
    M.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
    M.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
    M.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
    M.HOSTPAGE_SCROLL = "hostpageScroll";
    M.OPTIONAL_HOSTPAGE_SCROLL = "optHostpageScroll";
    M.SCROLL_INTERACTION = "scrollInteraction";
    M.ENTER_VIEWPORT = "enterViewport";
    M.OPTIONAL_ENTER_VIEWPORT = "optEnterViewport";
    M.EXIT_VIEWPORT = "exitViewport";
    M.OPTIONAL_EXIT_VIEWPORT = "optExitViewport";
    M.VIDEO_START = "videoStart";
    var Oh = {},
        Ph = (Oh.optHostpageScroll = "hostpageScroll", Oh.optEnterViewport = "enterViewport", Oh.optExitViewport = "exitViewport", Oh);
    var Qh = function (a) {
        this.a = a
    };
    r("studio.common.mde.Direction", Qh, void 0);
    Qh.Corner = {
        Pf: 0,
        Qf: 1,
        hf: 2,
        jf: 3
    };
    Qh.prototype.toString = function () {
        return (this.a & 2 ? "b" : "t") + (this.a & 1 ? "r" : "l")
    };
    var Rh = {
            TL: new Qh(0),
            TR: new Qh(1),
            BL: new Qh(2),
            BR: new Qh(3)
        },
        Sh = Jb(Rh);
    var Th = {
            Nf: "startExpandInternal",
            Mf: "startCollapseInternal",
            wf: "finishCollapseInternal",
            ff: "aboutToExpandInternal",
            Jf: "setAdVisibleInternal",
            Kf: "setAdParameters",
            qf: "dispatchEvent",
            Lf: "setParameter",
            Df: "getParameter",
            Cf: "fullscreenSupportInternal",
            zf: "fullscreenDimensionsInternal",
            Bf: "fullscreenExpandStartInternal",
            Af: "fullscreenExpandFinishInternal",
            yf: "fullscreenCollapseStartInternal",
            xf: "fullscreenCollapseFinishInternal",
            Ff: "invokeOnAllVideos",
            Gf: "livePreviewChannel",
            rf: "dispatchPageLoaded"
        },
        Uh = {},
        Vh;
    for (Vh in Th) Uh[Th[Vh]] = !0;
    var Wh = [/s0(qa)?\.2mdn\.net/, /^.*\.(prod|corp)\.google\.com/, /localhost/, /tpc\.googlesyndication\.com/, /secureframe\.doubleclick\.net/, /imasdk\.googleapis\.com/, /^.*dot-expandable-ad-tool\.appspot\.com/],
        Xh = function () {
            var a = location.hostname;
            return y(2) && !y(16) ? !1 : db(Wh, function (b) {
                return b.test(a)
            })
        };
    var Yh = function (a) {
        G.call(this);
        this.b = a;
        this.a = {};
        this.b.Ic(v(this.f, this))
    };
    x(Yh, G);
    var $h = function (a, b) {
        if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
        if (b in a.a) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
        var c = new Zh(a, b);
        return a.a[b] = c
    };
    Yh.prototype.f = function (a, b) {
        if (a = a.match(/^([^:]*):(.*)/)) {
            var c = a[1];
            a = a[2];
            c in this.a && (c = this.a[c]) && c.f && c.f(a, b)
        }
    };
    Yh.prototype.A = function () {
        C(this.a, function (a) {
            H(a)
        });
        H(this.b);
        delete this.a;
        delete this.b
    };
    var Zh = function (a, b) {
        G.call(this);
        this.a = a;
        this.b = b
    };
    x(Zh, G);
    g = Zh.prototype;
    g.connect = function (a) {
        a && a()
    };
    g.isConnected = function () {
        return !0
    };
    g.Oa = function (a, b, c) {
        this.a.b.Oa(this.b + ":" + a, v(this.Zb, this, b), c)
    };
    g.Ic = function (a) {
        this.f = v(this.Zb, this, a)
    };
    g.Pa = function (a, b) {
        if (this.v) throw Error("#send called for disposed VirtualChannel.");
        this.a.b.Pa(this.b + ":" + a, b)
    };
    g.Zb = function (a, b) {
        this.v || a.apply({}, Array.prototype.slice.call(arguments, 1))
    };
    g.A = function () {
        this.a = this.a.a[this.b] = null
    };
    var ai = function (a) {
        G.call(this);
        this.b = new Yh(a);
        this.h = {};
        this.f = $h(this.b, "private");
        this.g = $h(this.b, "public");
        this.f.Oa("mics", v(this.C, this), !0)
    };
    x(ai, G);
    ai.prototype.D = 0;
    ai.prototype.A = function () {
        H(this.b);
        delete this.b;
        delete this.g;
        delete this.f
    };
    var bi = function (a, b, c, d) {
        var e = a.D++;
        a.h[e] = d;
        d = {};
        d.signature = e;
        d.data = c;
        a.g.Pa(b, d)
    };
    ai.prototype.C = function (a) {
        var b = a.signature;
        a = a.data;
        b in this.h && ((0, this.h[b])(a), delete this.h[b])
    };
    ai.prototype.o = function (a, b) {
        a = a(b.data);
        var c = b.signature;
        ee(a).then(v(function (d) {
            var e = {};
            e.data = d;
            e.signature = c;
            this.f && this.f.Pa("mics", e)
        }, this))
    };
    var ci = function (a, b) {
        this.a = this.j = this.s = null;
        this.B = !1;
        var c = {},
            d = 1,
            e = window.parent;
        if (null != b) switch (b) {
            case 3:
                e = window;
            case 2:
                d = 2;
                c.directSyncMode = !0;
                break;
            case 4:
                e = window.parent.frames["goog-messaging-iframe"]
        }
        c.tp = d;
        c.role = 1;
        c.nativeProtocolVersion = 2;
        a && (c.cn = a);
        this.l = new Hh(c);
        this.l.$ = e;
        ai.call(this, this.l);
        a = v(this.H, this);
        this.g.Oa("general", v(this.o, this, a), !0)
    };
    x(ci, ai);
    ci.prototype.connect = function (a) {
        (this.B || Xh()) && this.j && (this.s = Oa(), this.l.connect(v(this.K, this, a)))
    };
    ci.prototype.K = function (a) {
        N(this, "conduitInitialized", [this.j, vg.M()]);
        var b = {
            version: "01_244"
        };
        b.x = window.STUDIO_SDK_START || null;
        b.c = this.s;
        b.t = Oa();
        N(this, "recordTimings", [b]);
        a && a()
    };
    ci.prototype.H = function (a) {
        a: {
            var b = a.methodName;a = a.args;
            if (b in Uh) {
                if (this.a) {
                    var c = this.a[b];
                    "function" !== typeof c && (c = this.a.defaultMessageHandler, a = [b, a]);
                    if ("function" === typeof c) {
                        b = c.apply(this.a, a);
                        break a
                    }
                }
                b = null
            } else b = void 0
        }
        return b
    };
    var N = function (a, b, c, d) {
        var e = {};
        e.methodName = b;
        e.args = c && Array.isArray(c) ? c : [];
        bi(a, "general", e, d || t)
    };
    r("studio.sdk.ContainerState", {
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed",
        EXPANDING: "expanding",
        EXPANDED: "expanded",
        FS_COLLAPSING: "fs_collapsing",
        FS_EXPANDING: "fs_expanding",
        FS_EXPANDED: "fs_expanded"
    }, void 0);
    var di = function () {
        K.call(this);
        this.a = new Map;
        this.g = this.j = !1;
        this.b = this.h = null;
        this.a.set("nx", null);
        this.a.set("ny", null);
        this.a.set("dim", null)
    };
    h(di, K);
    di.prototype.o = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return 2040 > b.reduce(function (d, e) {
            return d + e.length
        }, 0)
    };
    di.prototype.s = function (a) {
        var b = a.clientX,
            c = a.clientY;
        a.changedTouches && a.changedTouches[0] && (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY);
        this.a.set("nx", Math.round(b));
        this.a.set("ny", Math.round(c));
        this.g && (this.b || (this.b = window.GoogleA13IjpGc), this.h = this.b && Ia(this.b.snapshotSync) ? this.b.snapshotSync() : null)
    };
    di.prototype.A = function () {
        this.j = !1;
        K.prototype.A.call(this)
    };
    var ei = {
        NONE: 0,
        LOG_ONLY: 1
    };
    r("studio.sdk.ExitFlag", ei, void 0);
    ei.NONE = 0;
    ei.LOG_ONLY = 1;
    r("studio.sdk.MraidMethod", {
        GET_CURRENT_POSITION: "getCurrentPosition",
        GET_DEFAULT_POSITION: "getDefaultPosition",
        GET_SCREEN_SIZE: "getScreenSize",
        CREATE_CALENDAR_EVENT: "createCalendarEvent",
        GET_MAX_SIZE: "getMaxSize",
        PLAY_VIDEO: "playVideo",
        STORE_PICTURE: "storePicture",
        SUPPORTS: "supports",
        USE_CUSTOM_CLOSE: "useCustomClose"
    }, void 0);
    var fi = function () {};
    r("studio.sdk.IEnabler", fi, void 0);
    g = fi.prototype;
    g.Nc = function () {};
    g.reportManualClose = function () {};
    g.Jc = function () {};
    g.Pc = function () {};
    g.Oc = function () {};
    g.isVisible = function () {};
    g.ma = function () {};
    g.isPageLoaded = function () {};
    g.isInitialized = function () {};
    g.Tb = function () {};
    g.getParameter = function () {};
    g.exit = function () {};
    g.ub = function () {};
    g.dc = function () {};
    g.counter = function () {};
    g.startTimer = function () {};
    g.stopTimer = function () {};
    g.fc = function () {};
    g.jc = function () {};
    g.ib = function () {};
    g.xb = function () {};
    g.Ja = function () {};
    g.wb = function () {};
    g.close = function () {};
    g.Ma = function () {};
    g.Ra = function () {};
    g.addEventListener = function () {};
    g.removeEventListener = function () {};
    g.Hc = function () {};
    g.Gc = function () {};
    g.Kc = function () {};
    g.cc = function () {};
    g.Cb = function () {};
    g.bc = function () {};
    g.lc = function () {};
    g.wc = function () {};
    var gi = function (a) {
            this.a = a;
            this.b = ""
        },
        ji = function (a, b, c) {
            for (var d = c.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (1 < f.length && f[0].length && f[1].length) {
                    var k = decodeURIComponent(f[0]);
                    f = decodeURIComponent(f[1]);
                    a.a.set(k, f)
                }
            }
            if (null != a.a && a.a.R("exitEvents")) {
                d = {};
                e = a.a.get("exitEvents").toString();
                k = e.split("{DELIM}");
                for (f = 0; f < k.length; f++) {
                    var l = k[f];
                    Bb(e, "%2C") && (l = unescape(l));
                    var m = {};
                    l = l.split(",");
                    for (var n = 0; n < l.length; n++)
                        if (hi.test(l[n])) {
                            l[n].replace(ii, "%25$1!");
                            var q = l[n].split(":"),
                                B = q.shift();
                            m[B] = unescape(q.join(":"))
                        } d[m.name] = m
                }
                b.exitEvents = d
            }
            a.b = c
        };
    gi.prototype.get = function (a, b) {
        return this.a.get(a, b)
    };
    gi.prototype.set = function (a, b) {
        return this.a.set(a, b)
    };
    gi.prototype.R = function (a) {
        return this.a.R(a)
    };
    var hi = /:/,
        ii = /%(.+)!/;
    var ki = function (a) {
            this.a = {};
            this.b = new gi(a)
        },
        li = function (a, b, c, d) {
            var e = c;
            "Number" == d ? e = parseInt(c, 10) : "Boolean" == d && (e = "true" == c.toLowerCase() || "1" == c);
            a.a[b] = e
        },
        mi = function (a, b) {
            try {
                var c = JSON.parse(b);
                null != c && Rb(a.a, c);
                var d = {};
                C(a.a, function (e, f) {
                    e && !u(e) && (f = decodeURIComponent(f), e = decodeURIComponent(e));
                    f && e && (d[f] = e)
                }, a);
                a.a = d
            } catch (e) {
                ji(a.b, a.a, b)
            }
        };
    ki.prototype.getParameter = function (a, b) {
        return Lb(this.a, a) ? Nb(this.a, a) : this.b.get(a, b)
    };
    ki.prototype.P = function (a) {
        a = parseInt(this.getParameter(a), 10);
        return isNaN(a) ? null : a
    };
    ki.prototype.ba = function (a) {
        a = this.getParameter(a);
        return sb(Oc(a)) ? null : a.toString()
    };
    var ni = function () {
            this.b = !1;
            this.a = []
        },
        oi = function (a, b, c) {
            a.f ? N(a.f, b, c) : a.a.push({
                type: b,
                bd: c
            })
        },
        pi = function (a, b, c, d, e, f) {
            oi(a, f ? "logEventFlushCounters" : "logEvent", [b, c, a.g, !!d, !!e])
        },
        ri = function (a) {
            a.b || (pi(a, "Count", "INTERACTIVE_IMPRESSION"), a.b = !0, qi(a))
        },
        qi = function (a) {
            oi(a, "flushCounters", [a.g])
        },
        si = function (a, b, c, d) {
            oi(a, "logVideoEvent", [b, escape(c), d])
        };
    var ti = function (a) {
        K.call(this);
        this.s = a;
        this.a = this.g = null;
        this.C = !1;
        this.b = null;
        this.h = !1;
        this.j = -1;
        this.o = 0
    };
    h(ti, K);
    ti.prototype.yb = function () {
        return this.C
    };
    ti.prototype.D = function () {
        this.o = 1;
        this.a && (this.a.stop(), this.a.start())
    };
    ti.prototype.H = function () {
        this.o = 0;
        this.a && this.a.stop()
    };
    ti.prototype.B = function () {
        "1" == this.s.getParameter("isMouseOver") || 1 == this.o ? this.h || (this.C = !0, 1 > this.j ? this.j = Oa() : 1E3 < Oa() - this.j && (this.h = !0, this.s.dispatchEvent(new M("interaction")), ui(this.s, "setTimerAdjustment", ["INTERACTION_TIMER", -1E3, 0]), this.g && (pi(this.g, "Start", "INTERACTION_TIMER"), ri(this.g)))) : (this.h && vi(this), this.j = -1)
    };
    var vi = function (a) {
        a.h = !1;
        a.g && pi(a.g, "Stop", "INTERACTION_TIMER")
    };
    ti.prototype.A = function () {
        this.h && vi(this);
        Qe(this.b, this.a);
        K.prototype.A.call(this)
    };
    var wi = function () {
            return new oh((window.STUDIO_ORIGINAL_ASSET_URL ? window.STUDIO_ORIGINAL_ASSET_URL : window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g, "%25"))
        },
        xi = function (a) {
            a && Ua(parseInt(a, 10) || 0)
        };
    var yi = function (a) {
        this.a = a
    };
    yi.prototype.f = function (a) {
        return (null === this.a || this.a.canPlayType) && rb(a, "video/")
    };
    yi.prototype.b = function (a) {
        return this.a ? "probably" == this.a.canPlayType(a.toLowerCase()) : !1
    };
    var zi = function (a) {
        this.a = a
    };
    zi.prototype.f = function (a) {
        return "image/webp" == a.toLowerCase()
    };
    zi.prototype.b = function (a) {
        if (!this.a) return !1;
        a = a.toLowerCase();
        return rb(this.a.toDataURL(a), "data:" + a)
    };
    var Ai = function (a) {
        lg(this, a)
    };
    x(Ai, jg);
    var Ci = function (a, b, c) {
            if ("string" === typeof b)(b = Bi(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = Bi(c, d);
                    f && (c.style[f] = e)
                }
        },
        Di = {},
        Bi = function (a, b) {
            var c = Di[b];
            if (!c) {
                var d = Rc(b);
                c = d;
                void 0 === a.style[d] && (d = (cd ? "Webkit" : bd ? "Moz" : Zc ? "ms" : Yc ? "O" : null) + Sc(d), void 0 !== a.style[d] && (c = d));
                Di[b] = c
            }
            return c
        },
        Ei = function (a) {
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        Fi = function (a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = cd && !b && !c;
            if ((void 0 === b || d) && a.getBoundingClientRect) {
                try {
                    var e =
                        a.getBoundingClientRect()
                } catch (f) {
                    e = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }
                }
                return new od(e.right - e.left, e.bottom - e.top)
            }
            return new od(b, c)
        },
        Hi = function (a) {
            var b = rd(void 0),
                c = b.a;
            if (Zc && c.createStyleSheet) return b = c.createStyleSheet(), Gi(b, a), b;
            c = Ed(b, "HEAD")[0];
            if (!c) {
                var d = Ed(b, "BODY")[0];
                c = b.b("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.b("STYLE");
            Gi(d, a);
            b.f(c, d);
            return d
        },
        Ii = function (a) {
            Cd(a.ownerNode || a.owningElement || a)
        },
        Gi = function (a, b) {
            b = b instanceof Ec && b.constructor === Ec && b.b === Dc ? b.a : "type_error:SafeStyleSheet";
            if (Zc && void 0 !== a.cssText) a.cssText = b;
            else if (p.trustedTypes)
                if ("textContent" in a) a.textContent = b;
                else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else Bd(a), a.appendChild(qd(a).createTextNode(String(b)));
            else a.innerHTML = b
        },
        Ji = function (a) {
            a = a.style;
            a.position = "relative";
            Zc && !jd("8") ? (a.zoom = "1", a.display = "inline") : a.display = "inline-block"
        };
    var O = function (a) {
        window.AdobeEdge = window.AdobeEdge || {};
        window.AdobeEdge.bootstrapLoading = !0;
        if (a != Ki) return !1;
        J.call(this);
        this.s = {};
        this.j = {};
        this.H = new xg(yg(), zg() ? window.orientation : 0);
        this.ea = new K(this);
        this.Xa = !1;
        this.B = null;
        this.f = "collapsed";
        this.nb = !1;
        this.ra = null;
        this.te = 0;
        this.Va = {};
        this.T = null;
        this.mb = !1;
        this.D = new E;
        this.h = null;
        this.lb = [];
        this.Ua = {};
        this.pb = [];
        this.b = new ni;
        this.K = new ti(this);
        a = D("CANVAS");
        a.getContext && a.getContext("2d") || (a = null);
        this.df = new zi(a);
        (a = D("VIDEO")) ||
        (a = null);
        this.xc = new yi(a);
        this.a = new ki(Li(this));
        a = this.ha = new di;
        a.j = !0;
        L(a, document.body || window, "mousedown", a.s, {
            capture: !0,
            passive: !0
        });
        L(a, document.body || window, "touchstart", a.s, {
            capture: !0,
            passive: !0
        });
        this.Mb = {}
    };
    x(O, J);
    r("studio.Enabler", O, void 0);
    var Mi = ["c"],
        Ki = Math.random(),
        Ni = !1,
        Oi = null,
        P = function () {
            Oi || (Oi = new O(Ki));
            return Oi
        };
    O.getInstance = P;
    g = O.prototype;
    g.Fc = -1;
    g.rb = null;
    g.Rc = null;
    g.Jb = null;
    g.Qc = !0;
    g.Fb = !1;
    g.Ca = !1;
    g.Cc = !1;
    g.Sc = !1;
    g.va = null;
    g.Gb = null;
    g.ia = null;
    g.F = null;
    var Pi = function (a) {
            a.Jb || (a.Jb = wi());
            return a.Jb
        },
        Li = function (a) {
            var b = Pi(a).f;
            (a = Cg(Pi(a).toString())) && Eg(a, function (c, d) {
                -1 < Mi.indexOf(c) && b.set(c, d)
            });
            return b
        },
        ui = function (a, b, c) {
            N(a.F, b, c, void 0)
        },
        Ti = function (a) {
            a.Fb = !0;
            a.Gb = a.ic();
            a.ia = a.hc();
            if (a.F) {
                var b = a.b,
                    c = a.Gb;
                b.f = a.F;
                b.g = c;
                for (c = kb(b.a); c.length;) {
                    var d = c.shift();
                    oi(b, d.type, d.bd)
                }
            }
            null == a.a.getParameter("clickN") && li(a.a, "clickN", 1);
            a.Qc = "true" != a.a.getParameter("ise");
            b = a.a.getParameter("e", null);
            null != b && xi(b);
            b = a.P("leftOffset") ||
                0;
            c = a.P("topOffset") || 0;
            0 == b && 0 == c || Qi(a, b, c);
            a.j = a.a.getParameter("exitEvents", {});
            b = a.a;
            if (Lb(b.a, "assets") || b.b.R("assets")) b = a.a.getParameter("assets").toString(), Ri(a, b);
            wg(a.a.getParameter("features", []));
            a.K.g = a.b;
            b = a.K;
            y(2) && (L(b, document.body || window, "mouseover", b.D, void 0), L(b, document.body || window, "mouseout", b.H, void 0));
            void 0 !== window.ontouchstart && (b.a = new Cf(1E3), L(b, b.a, "tick", b.H, void 0), L(b, document, ["touchstart", "touchmove"], b.D, void 0));
            b.b && (Tf(b, b.b, "tick", b.B), b.b.dispose());
            b.b = new Cf(80);
            L(b, b.b, "tick", b.B, void 0);
            b.b.start();
            Si(a);
            if (b = a.getParameter("layoutsConfig")) a.Rc = JSON.parse(String(b));
            if (b = a.getParameter("experiments")) a.Mb = JSON.parse(String(b));
            if (b = a.getParameter("rum_config")) try {
                var e = JSON.parse(String(b));
                b = window;
                if (!b.google_rum_config && e) {
                    var f = new Ai(e),
                        k, l = ng(f, 2);
                    if (k = null == l ? "" : l) {
                        var m = og(f, qg);
                        if (m) {
                            var n = og(m, pg);
                            if (n) {
                                b.google_timing_url = k;
                                if (2 < n.v) n.a[2 + n.g] = 3;
                                else {
                                    var q = n.v + n.g;
                                    n.a[q] || (n.b = n.a[q] = {});
                                    n.b[2] = 3
                                }
                                b.google_rum_config = m.a;
                                var B =
                                    ng(f, 3);
                                var I = null == B ? B : !!B;
                                b.google_measure_js_timing = null == I ? !1 : I;
                                var R = b.document,
                                    Va = R.createElement("script");
                                Jc(Va, Jd(k));
                                var ya = R.getElementsByTagName("script")[0];
                                if (ya && ya.parentNode) {
                                    ya.parentNode.insertBefore(Va, ya);
                                    var cl = Va
                                } else cl = null;
                                cl || (b.google_timing_url = void 0, b.google_rum_config = void 0, b.google_measure_js_timing = void 0)
                            }
                        }
                    }
                }
            } catch (cp) {}
            a.dispatchEvent(new M("init"));
            a.D.a || a.D.I();
            e = a.ha;
            e.g = !!a.Mb.add_sodar_interaction_signals;
            if (e.g) try {
                $f()
            } catch (cp) {}
        };
    O.prototype.Je = function (a) {
        "number" === typeof a && (this.Fc = a)
    };
    O.prototype.setProfileId = O.prototype.Je;
    O.prototype.Dd = function () {
        return this.Fc
    };
    O.prototype.getProfileId = O.prototype.Dd;
    O.prototype.Ge = function (a) {
        u(a) && (this.rb = a, this.isInitialized() && Si(this))
    };
    O.prototype.setDevDynamicContent = O.prototype.Ge;
    var Si = function (a) {
        if (null != a.ba("dcData") || a.rb) window.dynamicContent = null != a.ba("dcData") ? a.bb() : a.rb
    };
    O.prototype.bb = function () {
        var a = this.getParameter("dcData");
        return a ? JSON.parse(String(a)) : null
    };
    O.prototype.getDynamicDataPayload = O.prototype.bb;
    O.prototype.oa = function () {
        return this.Rc
    };
    O.prototype.getLayoutsConfig = O.prototype.oa;
    O.prototype.we = function () {
        return this.a.b.b || ih(this.a)
    };
    O.prototype.getAdParameters = O.prototype.we;
    O.prototype.$e = function (a) {
        mi(this.a, a);
        this.va && vf(this.va);
        Ti(this)
    };
    O.prototype.setAdParameters = O.prototype.$e;
    O.prototype.ne = function () {
        this.va && vf(this.va);
        Ti(this)
    };
    O.setRushSimulatedLocalEvents = function (a) {
        Ni = !!a;
        if (a && Oi) {
            a = Oi;
            for (var b = 0; b < a.lb.length; ++b) a.dispatchEvent(a.lb[b])
        }
    };
    var Ui = function (a, b, c) {
        var d = Q;
        c = null != c ? c : 0;
        d.lb.push(b);
        Df(function () {
            this.dispatchEvent(b)
        }, c, d);
        return mf(d, b, a, !1, d)
    };
    O.prototype.$b = function () {
        var a = yg(),
            b = this.H.a;
        if (this.H.b != a || zg() && this.H.a != window.orientation) {
            zg() && (b = window.orientation);
            var c = new M("orientation");
            c.aa("mode", a);
            c.aa("degrees", b);
            this.dispatchEvent(c)
        }
    };
    O.prototype.l = function (a, b, c) {
        if (!this.ma()) {
            var d = v.apply(this, [a, this].concat(Array.prototype.slice.call(arguments, 2)));
            Df(d, b)
        }
    };
    var Ri = function (a, b) {
        0 < b.length && -1 == b.indexOf("=") && (b = decodeURIComponent(b));
        b = b.split("&");
        if (!(2 >= b.length && "" == b[0]))
            for (var c = 0; c < b.length; c++) {
                var d = b[c].split("=");
                a.s[d[0].toLowerCase()] = unescape(d[1])
            }
    };
    O.prototype.o = function () {
        qi(this.b)
    };
    O.prototype.reportActivitiesImmediately = O.prototype.o;
    var Vi = function (a, b, c) {
            100 < b.length && (b = b.substr(0, 100));
            N(a.F, "reportCustomVariable", [escape(b), c])
        },
        Wi = function (a) {
            a.b && ri(a.b)
        },
        Xi = function (a, b) {
            var c = a.a.getParameter("click", ""),
                d = parseInt(a.a.getParameter("clickN"), 10);
            a = a.a.getParameter("thirdPartyClickRedirect", "");
            a: {
                var e = c;c = b;
                if (!sb(Oc(e))) {
                    e = Jg(e, null);
                    if (!rb(b, e)) break a;
                    c = Nc(c, e.length)
                }
                a && (c = decodeURIComponent(c), rb(c, a) && (c = Nc(c, a.length)));
                if (!sb(Oc(e)) && -1 < e.indexOf("?"))
                    for (b = "number" === typeof d ? d : 1, d = 0; d < b; d++) c = unescape(c);b =
                c
            }
            return b
        },
        Yi = function (a, b, c, d) {
            var e = {};
            e.target = c;
            gg && (e.fullscreen = !0);
            (c = e) || (c = {});
            e = window;
            var f = b instanceof lc ? b : oc("undefined" != typeof b.href ? b.href : String(b)) || qc;
            b = c.target || b.target;
            var k = [];
            for (l in c) switch (l) {
                case "width":
                case "height":
                case "top":
                case "left":
                    k.push(l + "=" + c[l]);
                    break;
                case "target":
                case "noopener":
                case "noreferrer":
                    break;
                default:
                    k.push(l + "=" + (c[l] ? 1 : 0))
            }
            var l = k.join(",");
            if (Uc() && e.navigator && e.navigator.standalone && b && "_self" != b) l = xd(document, "A"), f = f instanceof lc ?
                f : pc(f), l.href = mc(f), l.setAttribute("target", b), c.noreferrer && l.setAttribute("rel", "noreferrer"), c = document.createEvent("MouseEvent"), c.initMouseEvent("click", !0, !0, e, 1), l.dispatchEvent(c);
            else if (c.noreferrer) {
                if (e = Kc("", e, b, l), c = mc(f), e && (ad && Bb(c, ";") && (c = "'" + c.replace(/'/g, "%27") + "'"), e.opener = null, f = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Mc(c) + '">', c = new Ic, b = Wb(), c.a = b ? b.createHTML(f) : f, e = e.document)) e.write(c instanceof Ic && c.constructor ===
                    Ic && c.b === Hc ? c.a : "type_error:SafeHtml"), e.close()
            } else(e = Kc(f, e, b, l)) && c.noopener && (e.opener = null);
            d && a.o()
        },
        Zi = function (a, b, c, d, e) {
            N(a.F, e ? "logExitFlushEventsOpenPopup" : "launchExit", ["Count", b, a.Gb, !1, c, null, d])
        },
        aj = function (a, b, c, d, e) {
            if (!sb(Oc(b)) && a.isInitialized()) {
                var f = void 0 !== d ? d : 0;
                d = a.j[b] && a.j[b].target || "_blank";
                var k;
                if (k = !y(8)) k = !(Bb(a.a.getParameter("click", ""), "[rm_exit_id]") && null != a.j[b] && null != a.j[b].reportingId && !sb(a.j[b].reportingId));
                f = !(f & 1);
                var l = a.a.getParameter("click",
                        ""),
                    m = a.ha;
                if (m.j) {
                    var n = l;
                    var q = ud();
                    m.a.set("dim", q.width + "x" + q.height);
                    q = "";
                    for (var B = ha(m.a), I = B.next(); !I.done; I = B.next()) {
                        var R = ha(I.value);
                        I = R.next().value;
                        R = R.next().value;
                        q = null == R ? q + "&" + I + "=" : q + "&" + I + "=" + R
                    }
                    m.g && (B = "bg=", "string" === typeof m.h && m.o(n, q, B, m.h) && (B = "" + B + m.h), q = q + "&" + B);
                    n = q;
                    q = l.toLowerCase().indexOf("&adurl="); - 1 < q && m.o(l, n) && (l = l.substr(0, q) + n + l.substr(q))
                }
                if (e && e.pIndex) {
                    m = l;
                    if (e = e.pIndex) l = m.toLowerCase().indexOf("&adurl="), -1 < l && (m = m.substr(0, l) + "&gpa_pos=" + e + m.substr(l));
                    l = m
                }
                f && (a.j[b] ? y(8) ? Zi(a, b, c, l, !0) : (e = Kg(c), e = $i(a, e, l, b), Yi(a, e, d, !k)) : c && (a.ma() && y(8) ? Zi(a, b, c, l, !1) : (e = Kg(c), e = $i(a, e, l, null), Yi(a, e, d, !0), k = !1)));
                k && pi(a.b, "Count", b, !0, !0, !0);
                N(a.F, "AD_CLICKED");
                d = new M("exit");
                d.aa("id", b);
                d.aa("url", c);
                a.dispatchEvent(d)
            }
        },
        bj = function (a, b, c, d, e) {
            a = a.j[b];
            c = !d && a && a.url ? a.url : c;
            var f;
            null == e || sb(Oc(e)) ? f = c : f = Fg(c, e + "");
            return f
        },
        $i = function (a, b, c, d) {
            var e = null;
            d && (e = a.j[d], e = null != e.reportingId ? e.reportingId : null);
            b = b || "";
            d = a.a.getParameter("thirdPartyClickRedirect",
                "");
            a = parseInt(a.a.getParameter("clickN"), 10);
            if (!sb(Oc(c)) && -1 < c.indexOf("?")) {
                a = "number" === typeof a ? a : 1;
                for (var f = 0; f < a; f++) b = encodeURIComponent(b)
            }
            e && (c = Jg(c, e), b = d ? encodeURIComponent(d + b) : b);
            return c + b
        };
    O.prototype.reportManualClose = function () {
        pi(this.b, "Count", "EVENT_MANUAL_CLOSE", void 0, void 0, void 0)
    };
    O.prototype.reportManualClose = O.prototype.reportManualClose;
    O.prototype.Jc = function () {
        pi(this.b, "Count", "ENGAGEMENT", !1, !1, !1);
        this.o()
    };
    O.prototype.reportEngagement = O.prototype.Jc;
    var Qi = function (a, b, c) {
        a.ma() && !y(8) && (a.T && Ii(a.T), a.T = Hi(Gc("body", {
            position: "relative",
            "margin-left": -b + "px !important",
            "margin-top": -c + "px !important"
        })))
    };
    O.prototype.cf = function (a, b, c) {
        li(this.a, a, b, c)
    };
    O.prototype.setParameter = O.prototype.cf;
    O.prototype.Lb = function () {
        this.dispatchEvent(new M("pageLoaded"))
    };
    O.prototype.dispatchPageLoaded = O.prototype.Lb;
    O.prototype.dispatchEvent = function (a) {
        this.Ua[a.type] = (this.Ua[a.type] || 0) + 1;
        switch (a.type) {
            case "pageLoaded":
                null != window.AdobeEdge && "function" === typeof window.AdobeEdge.loadResources && window.AdobeEdge.loadResources();
                this.Cc = !0;
                break;
            case "orientation":
                this.H.b = a.mode, this.H.a = a.degrees
        }
        return O.G.dispatchEvent.call(this, a)
    };
    O.prototype.dispatchEvent = O.prototype.dispatchEvent;
    O.prototype.ob = function (a) {
        (this.Sc = a) && !this.Ua.visible ? (null != window.AdobeEdge && "function" === typeof window.AdobeEdge.playWhenReady && window.AdobeEdge.playWhenReady(), this.Qc && pi(this.b, "Start", "DISPLAY_TIMER", void 0, void 0, void 0), this.dispatchEvent(new M("visible"))) : this.Ua.hidden || this.dispatchEvent(new M("hidden"));
        this.dispatchEvent(new M("visibilityChange"))
    };
    O.prototype.setAdVisibleInternal = O.prototype.ob;
    O.prototype.ve = function () {
        this.ob(!0)
    };
    O.prototype.dispatchAdVisible = O.prototype.ve;
    O.prototype.Nc = function (a, b, c, d, e, f) {
        if (c || d) this.B || (this.B = {}), this.B.width = c, this.B.height = d;
        null != e && (this.Xa = !!e);
        null != f && li(this.a, "isMultiDirectional", f ? "true" : "false")
    };
    O.prototype.setExpandingPixelOffsets = O.prototype.Nc;
    O.prototype.Pc = function (a) {
        this.Xa = !!a
    };
    O.prototype.setStartExpanded = O.prototype.Pc;
    O.prototype.Oc = function (a) {
        li(this.a, "isMultiDirectional", a ? "true" : "false")
    };
    O.prototype.setIsMultiDirectional = O.prototype.Oc;
    O.prototype.Me = function (a) {
        N(this.F, "invokeMraidMethod", ["useCustomClose", [a]]);
        this.mb = 0 == a
    };
    O.prototype.setUseCustomClose = O.prototype.Me;
    O.prototype.He = function () {};
    O.prototype.setFloatingPixelDimensions = O.prototype.He;
    O.prototype.isVisible = function () {
        return this.Sc
    };
    O.prototype.isVisible = O.prototype.isVisible;
    O.prototype.ma = function () {
        return y(1)
    };
    O.prototype.isServingInLiveEnvironment = O.prototype.ma;
    O.prototype.isPageLoaded = function () {
        return this.Cc
    };
    O.prototype.isPageLoaded = O.prototype.isPageLoaded;
    O.prototype.isInitialized = function () {
        return this.Fb
    };
    O.prototype.isInitialized = O.prototype.isInitialized;
    O.prototype.Tb = function (a) {
        "function" === typeof a && Be(this.D, a)
    };
    O.prototype.callAfterInitialized = O.prototype.Tb;
    O.prototype.getParameter = function (a) {
        return this.a.getParameter(a, null)
    };
    O.prototype.getParameter = O.prototype.getParameter;
    O.prototype.getParameter = O.prototype.getParameter;
    O.prototype.P = function (a) {
        return this.a.P(a)
    };
    O.prototype.getParameterAsInteger = O.prototype.P;
    O.prototype.kc = function (a) {
        a = this.a.ba(a);
        return void 0 != a && ("true" == a.toLowerCase() || "1" == a)
    };
    O.prototype.getParameterAsBoolean = O.prototype.kc;
    O.prototype.ba = function (a) {
        return this.a.ba(a)
    };
    O.prototype.getParameterAsNullableString = O.prototype.ba;
    O.prototype.exit = function (a, b, c) {
        void 0 !== b && (b = Xi(this, b));
        Wi(this);
        aj(this, a, bj(this, a, b, !1), c)
    };
    O.prototype.exit = O.prototype.exit;
    O.prototype.ub = function (a, b, c) {
        b = Xi(this, b);
        Wi(this);
        aj(this, a, bj(this, a, b, !0), c)
    };
    O.prototype.exitOverride = O.prototype.ub;
    O.prototype.nd = function (a, b, c, d, e) {
        e && !e.pIndex ? e.pIndex = c : e || (e = {
            pIndex: c
        });
        b = Xi(this, b);
        Wi(this);
        aj(this, a, bj(this, a, b, !0), d, e)
    };
    O.prototype.dynamicExit = O.prototype.nd;
    O.prototype.vb = function (a, b) {
        aj(this, a, bj(this, a, void 0, void 0, b || ""))
    };
    O.prototype.exitQueryString = O.prototype.vb;
    O.prototype.dc = function (a) {
        return $i(this, a, this.a.getParameter("click", ""), null)
    };
    O.prototype.formExitUrlFromOverride = O.prototype.dc;
    O.prototype.counter = function (a, b) {
        pi(this.b, "Count", a, b, !0, void 0)
    };
    O.prototype.counter = O.prototype.counter;
    O.prototype.startTimer = function (a) {
        pi(this.b, "Start", a, void 0, !0, void 0)
    };
    O.prototype.startTimer = O.prototype.startTimer;
    O.prototype.stopTimer = function (a) {
        pi(this.b, "Stop", a, void 0, !0, void 0)
    };
    O.prototype.stopTimer = O.prototype.stopTimer;
    O.prototype.Be = function (a) {
        Vi(this, a, 1)
    };
    O.prototype.reportCustomImpressionVariable = O.prototype.Be;
    O.prototype.Ce = function (a) {
        Vi(this, a, 1)
    };
    O.prototype.reportCustomVariableCount1 = O.prototype.Ce;
    O.prototype.Ae = function (a) {
        Vi(this, a, 2)
    };
    O.prototype.reportCustomClickVariable = O.prototype.Ae;
    O.prototype.De = function (a) {
        Vi(this, a, 2)
    };
    O.prototype.reportCustomVariableCount2 = O.prototype.De;
    O.prototype.fc = function () {
        return this.f
    };
    O.prototype.getContainerState = O.prototype.fc;
    O.prototype.jc = function () {
        return this.ra
    };
    O.prototype.getExpandDirection = O.prototype.jc;
    O.prototype.Ke = function (a) {
        this.nb || ui(this, "setResponsiveBehavior", [a ? 2 : 0, 2])
    };
    O.prototype.setResponsiveExpanding = O.prototype.Ke;
    O.prototype.Le = function (a, b) {
        ui(this, "responsiveResize", [a, b])
    };
    O.prototype.setResponsiveSize = O.prototype.Le;
    O.prototype.ib = function () {
        if ("collapsed" == this.f) {
            xf(this, "expandStart");
            this.nb = !0;
            var a = [this.ia];
            this.B && a.push(this.B);
            N(this.F, "expandRequested", a);
            cj(this, this.Ja);
            this.l(this.qc, 0)
        }
    };
    O.prototype.requestExpand = O.prototype.ib;
    var cj = function (a, b) {
            if (!a.ma() && a.mb) {
                var c = document.getElementsByTagName("body")[0],
                    d = D("IMG", {
                        width: "15",
                        height: "15",
                        border: "0",
                        src: "http://s0.2mdn.net/ads/studio/close.png"
                    });
                a.h = {
                    I: b,
                    element: D("DIV", {
                        style: "position: absolute;right: 5px;top: 5px;width: 15px;height: 15px;cursor: pointer;"
                    }, d)
                };
                L(a.ea, a.h.element, "click", b, void 0);
                Ad(c, a.h.element)
            }
        },
        dj = function (a) {
            a.h && (Cd(a.h.element), Tf(a.ea, a.h.element, "click", a.h.I), a.h.element = null, a.h.I = null, a.h = null)
        };
    O.prototype.fe = function () {
        this.dispatchEvent(new M("aboutToExpand"))
    };
    O.prototype.aboutToExpandInternal = O.prototype.fe;
    O.prototype.qc = function (a) {
        a && (a = Rh[a.toString().toUpperCase()]);
        var b = 0,
            c = 0;
        "true" == this.getParameter("isMultiDirectional") && a && (a.a & 2 && (c = this.P("topOffset")), a.a & 1 && (b = this.P("leftOffset")));
        Qi(this, null === b ? 0 : b, null === c ? 0 : c);
        a ? this.ra = a : this.ra = this.ma() || "true" != this.getParameter("isMultiDirectional") ? null : Sh[this.te++ % Sh.length];
        this.Xa || (pi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Wi(this), this.Ca || (this.o(), this.Ca = !0));
        this.Xa = !1;
        this.f = "expanding";
        a = new M("expandStart");
        a.aa("direction",
            this.ra);
        this.dispatchEvent(a)
    };
    O.prototype.startExpandInternal = O.prototype.qc;
    O.prototype.xb = function () {
        "expanding" == this.f && (N(this.F, "expandFinished", [this.ia]), this.f = "expanded", this.dispatchEvent(new M("expandFinish")))
    };
    O.prototype.finishExpand = O.prototype.xb;
    O.prototype.expand = function (a, b) {
        Qi(this, 0, 0);
        var c = [this.ia];
        b && c.push(b);
        this.mb = !!b && 0 == b.useCustomClose;
        N(this.F, "expandAsset", c);
        a || (pi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Wi(this));
        this.Ca || (this.o(), this.Ca = !0)
    };
    O.prototype.expand = O.prototype.expand;
    O.prototype.Ja = function () {
        dj(this);
        xf(this, "collapseStart");
        N(this.F, "collapseRequested", [this.ia]);
        this.l(this.ec, 0)
    };
    O.prototype.requestCollapse = O.prototype.Ja;
    O.prototype.ec = function () {
        this.f = "collapsing";
        this.dispatchEvent(new M("collapseStart"))
    };
    O.prototype.startCollapseInternal = O.prototype.ec;
    O.prototype.wb = function () {
        "collapsing" == this.f && (N(this.F, "collapseFinished", [this.ia]), this.l(this.Nb, 0))
    };
    O.prototype.finishCollapse = O.prototype.wb;
    O.prototype.Nb = function () {
        var a = this.P("leftOffset") || 0,
            b = this.P("topOffset") || 0;
        Qi(this, a, b);
        pi(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
        this.f = "collapsed";
        this.dispatchEvent(new M("collapseFinish"))
    };
    O.prototype.finishCollapseInternal = O.prototype.Nb;
    O.prototype.collapse = function () {
        xf(this, "collapse");
        var a = this.P("leftOffset") || 0,
            b = this.P("topOffset") || 0;
        Qi(this, a, b);
        N(this.F, "collapseAsset", [this.ia]);
        this.dispatchEvent(new M("collapse"));
        pi(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0)
    };
    O.prototype.collapse = O.prototype.collapse;
    O.prototype.close = function () {
        this.K.dispose();
        N(this.F, "tellAssetHide", [this.ia])
    };
    O.prototype.close = O.prototype.close;
    O.prototype.ed = function () {
        N(this.F, "tellCompanionAssetHide", [this.ia])
    };
    O.prototype.closeCompanion = O.prototype.ed;
    O.prototype.ld = function () {
        N(this.F, "tellCompanionAssetShow", [this.ia])
    };
    O.prototype.displayCompanion = O.prototype.ld;
    O.prototype.zd = function () {
        return this.ba("sn")
    };
    O.prototype.getDartSiteName = O.prototype.zd;
    O.prototype.yd = function () {
        return this.P("sid")
    };
    O.prototype.getDartSiteId = O.prototype.yd;
    O.prototype.vd = function () {
        return this.P("aid")
    };
    O.prototype.getDartAdId = O.prototype.vd;
    O.prototype.xd = function () {
        return this.P("pid")
    };
    O.prototype.getDartPageId = O.prototype.xd;
    O.prototype.ic = function () {
        return this.ba("rid")
    };
    O.prototype.getDartRenderingId = O.prototype.ic;
    O.prototype.wd = function () {
        return this.P("cid")
    };
    O.prototype.getDartCreativeId = O.prototype.wd;
    O.prototype.hc = function () {
        return this.ba("varName")
    };
    O.prototype.getDartAssetId = O.prototype.hc;
    O.prototype.Gd = function () {
        return this.ba("ct")
    };
    O.prototype.getUserCountry = O.prototype.Gd;
    O.prototype.Id = function () {
        return this.ba("st")
    };
    O.prototype.getUserState = O.prototype.Id;
    O.prototype.Jd = function () {
        return this.ba("zp")
    };
    O.prototype.getUserZipCode = O.prototype.Jd;
    O.prototype.Fd = function () {
        var a = this.P("bw");
        return null != a ? a : 0
    };
    O.prototype.getUserBandwidth = O.prototype.Fd;
    O.prototype.Ed = function () {
        return this.ba("ac")
    };
    O.prototype.getUserAreaCode = O.prototype.Ed;
    O.prototype.Hd = function () {
        return this.P("dma")
    };
    O.prototype.getUserDMACode = O.prototype.Hd;
    O.prototype.getFilename = function (a) {
        return this.Ma(a)
    };
    O.prototype.getFilename = O.prototype.getFilename;
    O.prototype.Ma = function (a) {
        var b = a.toLowerCase(),
            c = b.slice(b.lastIndexOf("/") + 1),
            d = encodeURIComponent(c),
            e = this.s[c];
        e = (e = (e = (e = (e = e || this.s["pro_" + c]) || this.s[b]) || this.s["pro_" + b]) || this.s[d]) || this.s["pro_" + d];
        return null != e ? e : a
    };
    O.prototype.getUrl = O.prototype.Ma;
    O.prototype.Cd = function () {
        return this.H
    };
    O.prototype.getOrientation = O.prototype.Cd;
    O.prototype.Te = function (a, b) {
        if (a)
            for (var c = 0; c < this.pb.length; ++c) {
                var d = this.pb[c];
                if (null != d) switch (a) {
                    case "changevolume":
                        null != b && (0 < b && (d.muted = !1), d.volume = b);
                        break;
                    case "pause":
                        d.pause();
                        break;
                    case "resume":
                        d.play()
                }
            }
    };
    O.prototype.invokeOnAllVideos = O.prototype.Te;
    O.prototype.ac = function (a) {
        null != a && this.pb.push(a)
    };
    O.prototype.registerVideoElements = O.prototype.ac;
    O.prototype.ie = function (a, b) {
        a = Ke(Jd(a));
        null != b && Be(a, b)
    };
    O.prototype.loadScript = O.prototype.ie;
    O.prototype.Ra = function (a, b) {
        sg(Hd, a) && Be(this.D, w(Qf, a, b))
    };
    O.prototype.loadModule = O.prototype.Ra;
    O.prototype.he = function (a, b) {
        for (var c = a.length, d = 0; d < a.length; ++d) this.Ra(a[d], function () {
            0 == --c && b()
        })
    };
    O.prototype.loadModules = O.prototype.he;
    O.prototype.vc = function (a) {
        N(this.F, "invokeExternalJSFunction", [escape(a)])
    };
    O.prototype.invokeExternalJsFunction = O.prototype.vc;
    O.prototype.wc = function (a, b, c) {
        N(this.F, "invokeMraidMethod", [a, b], c)
    };
    O.prototype.invokeMraidMethod = O.prototype.wc;
    O.prototype.Fe = function () {};
    O.prototype.invokeAdMobMethod = O.prototype.Fe;
    O.prototype.C = function (a, b, c, d) {
        sg(Lg, a) && N(this.F, "invokeExternalJSFunctionWithReturn", [a, b, c], d)
    };
    O.prototype.invokeExternalJsFunctionWithReturn = O.prototype.C;
    O.prototype.Xe = function (a, b) {
        N(this.F, "invokeUrlOpen", [a], b)
    };
    O.prototype.invokeUrlOpen = O.prototype.Xe;
    O.prototype.A = function () {
        this.T && Ii(this.T);
        this.va && vf(this.va);
        Qe(this.K, this.b, this.ea, this.D, this.ha);
        delete this.Va;
        O.G.A.call(this)
    };
    O.prototype.addEventListener = function (a, b, c, d, e) {
        a = Ph[a.toString()] || a;
        if (a.toString() in Mh) {
            if (!this.ma()) {
                e = b;
                "function" === typeof b && (e = function (f) {
                    f.sd ? b(f.X) : b(f)
                });
                L(this.ea, window, a, e, c, d);
                return
            }
            N(this.F, "registerEventTypeListenerForType", [a, e])
        }
        "hostpageFeaturesLoaded" == a && N(this.F, "getHostpageFeatures", [a]);
        nf(this, a, b, c, d)
    };
    O.prototype.addEventListener = O.prototype.addEventListener;
    O.prototype.removeEventListener = function (a, b, c, d) {
        uf(this, a, b, c, d)
    };
    O.prototype.removeEventListener = O.prototype.removeEventListener;
    O.prototype.qb = function (a, b) {
        this.Va[a] = b
    };
    O.prototype.addMessageHandler = O.prototype.qb;
    O.prototype.ye = function (a) {
        delete this.Va[a]
    };
    O.prototype.removeMessageHandler = O.prototype.ye;
    O.prototype.oe = function (a, b) {
        a = this.Va[a];
        "function" === typeof a && a.apply(null, b)
    };
    O.prototype.defaultMessageHandler = O.prototype.oe;
    O.prototype.Hc = function () {
        xf(this, "fullscreenSupport");
        N(this.F, "isFullscreenSupported");
        this.l(this.Vb, 0, !0)
    };
    O.prototype.queryFullscreenSupport = O.prototype.Hc;
    O.prototype.Gc = function () {
        xf(this, "fullscreenDimensions");
        N(this.F, "queryFullscreenDimensions");
        if (!this.ma()) {
            var a = ud();
            this.l(this.Pb, 0, a.width, a.height)
        }
    };
    O.prototype.queryFullscreenDimensions = O.prototype.Gc;
    O.prototype.Kc = function (a, b) {
        if ("collapsed" == this.f) {
            xf(this, "fullscreenExpandStart");
            this.nb = !0;
            var c = [];
            a && b && (c = [a, b]);
            N(this.F, "fullscreenExpandRequested", c);
            cj(this, this.Cb);
            this.l(this.Sb, 0, a, b)
        }
    };
    O.prototype.requestFullscreenExpand = O.prototype.Kc;
    O.prototype.cc = function () {
        "fs_expanding" == this.f && (N(this.F, "fullscreenExpandFinished"), this.l(this.Qb, 0))
    };
    O.prototype.finishFullscreenExpand = O.prototype.cc;
    O.prototype.Cb = function () {
        "fs_expanded" == this.f && (xf(this, "fullscreenCollapseStart"), dj(this), N(this.F, "fullscreenCollapseRequested"), this.l(this.Kb, 0))
    };
    O.prototype.requestFullscreenCollapse = O.prototype.Cb;
    O.prototype.bc = function () {
        "fs_collapsing" == this.f && (N(this.F, "fullscreenCollapseFinished"), this.l(this.Ob, 0))
    };
    O.prototype.finishFullscreenCollapse = O.prototype.bc;
    O.prototype.xe = function (a) {
        N(this.F, "registerChargeableEventName", [a])
    };
    O.prototype.registerChargeableEventName = O.prototype.xe;
    O.prototype.yb = function () {
        return this.K.yb()
    };
    O.prototype.hasUserInteracted = O.prototype.yb;
    O.prototype.Vb = function (a) {
        var b = new M("fullscreenSupport");
        b.aa("supported", a);
        this.dispatchEvent(b)
    };
    O.prototype.fullscreenSupportInternal = O.prototype.Vb;
    O.prototype.Pb = function (a, b) {
        var c = new M("fullscreenDimensions");
        void 0 != a && void 0 != b && (c.aa("width", a), c.aa("height", b));
        this.dispatchEvent(c)
    };
    O.prototype.fullscreenDimensionsInternal = O.prototype.Pb;
    O.prototype.Sb = function (a, b, c, d) {
        pi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0);
        Wi(this);
        this.Ca || (this.o(), this.Ca = !0);
        this.f = "fs_expanding";
        var e = new M("fullscreenExpandStart");
        e.aa("width", a);
        e.aa("height", b);
        e.aa("left", c);
        e.aa("top", d);
        this.dispatchEvent(e)
    };
    O.prototype.fullscreenExpandStartInternal = O.prototype.Sb;
    O.prototype.Qb = function () {
        this.f = "fs_expanded";
        this.dispatchEvent(new M("fullscreenExpandFinish"))
    };
    O.prototype.fullscreenExpandFinishInternal = O.prototype.Qb;
    O.prototype.Kb = function () {
        this.f = "fs_collapsing";
        this.dispatchEvent(new M("fullscreenCollapseStart"))
    };
    O.prototype.fullscreenCollapseStartInternal = O.prototype.Kb;
    O.prototype.Ob = function () {
        pi(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
        this.f = "collapsed";
        this.dispatchEvent(new M("fullscreenCollapseFinish"))
    };
    O.prototype.fullscreenCollapseFinishInternal = O.prototype.Ob;
    O.prototype.ke = function () {
        return this.df.b("image/webp")
    };
    O.prototype.canRenderWebpImages = O.prototype.ke;
    O.prototype.rc = function (a) {
        return this.xc.f(a) ? this.xc.b(a) : !1
    };
    O.prototype.supportsVideoFormat = O.prototype.rc;
    O.prototype.Ie = function () {
        return this
    };
    O.prototype.setHint = O.prototype.Ie;
    O.prototype.lc = function () {
        a: {
            for (a in Gd)
                if ("studio" == Gd[a]) {
                    var a = "studio";
                    break a
                } a = null
        }
        return a || "studio"
    };
    O.prototype.getSdk = O.prototype.lc;
    var ej = P();
    r("Enabler", ej, void 0);
    var Q = P();
    if (!Q.Fb) {
        var fj = Q.a.getParameter("e", null);
        xi(fj);
        var gj = Q.P("leftOffset") || 0,
            hj = Q.P("topOffset") || 0;
        0 == gj && 0 == hj || Qi(Q, gj, hj);
        var ij = Q.kc("ssr"),
            jj;
        jj = Pi(Q).g;
        var kj;
        kj = Pi(Q).b;
        var lj;
        lj = Pi(Q).a;
        var mj = [jj, "://", kj, lj].join("");
        Ne(vg.a);
        wg([1, 2]);
        var nj;
        nj = Q.a.getParameter("c", void 0);
        var oj;
        oj = Q.a.P("t");
        Q.F = new ci(nj, oj);
        Pe(Q, Q.F);
        Q.F.a = Q;
        Q.F.j = mj.split("?")[0];
        Q.F.B = ij;
        if (!Q.ma()) {
            var pj = 1E3;
            Ni && (pj = 0);
            Q.va = Ui(Q.ne, "a", pj);
            var qj = 2E3,
                rj = 2500;
            Ni && (rj = qj = 0);
            Ui(Q.Lb, "b", qj);
            Ui(w(Q.ob, !0), "c", rj);
            L(Q.ea, window, ["resize", "orientationchange"], Q.$b, void 0);
            Q.$b()
        }
        Q.F.connect()
    }
    Ef.enabler = 3;
    var S = function () {
        J.call(this);
        this.a = "loading";
        this.b = p.Enabler;
        this.b.isInitialized() ? this.f() : nf(this.b, "init", this.f, !1, this)
    };
    x(S, J);
    Fa(S);
    S.prototype.o = function () {
        return this.a
    };
    S.prototype.getState = S.prototype.o;
    S.prototype.j = function () {
        return "1.0"
    };
    S.prototype.getVersion = S.prototype.j;
    S.prototype.open = function () {
        this.b.exit("MRAID default exit")
    };
    S.prototype.open = S.prototype.open;
    S.prototype.close = function () {
        "expanded" == this.a ? (this.b.Ja(), this.a = "default", this.dispatchEvent("stateChange")) : "default" == this.a && (this.a = "hidden", this.b.close(), this.dispatchEvent("stateChange"))
    };
    S.prototype.close = S.prototype.close;
    S.prototype.l = function () {
        return this.b.isVisible()
    };
    S.prototype.isViewable = S.prototype.l;
    S.prototype.expand = function () {
        "default" == this.a && (this.b.ib(), this.a = "expanded", this.dispatchEvent("stateChange"))
    };
    S.prototype.expand = S.prototype.expand;
    S.prototype.f = function () {
        this.a = "default";
        nf(this.b, "collapseStart", this.h, !1, this);
        this.dispatchEvent("ready")
    };
    S.prototype.h = function () {
        "expanded" == this.a && (this.a = "default", this.dispatchEvent("stateChange"))
    };
    if (!window.mraid) {
        var sj = S.Da();
        r("mraid", sj, void 0)
    };
    r("studio.sdk.hint.ExpansionMode", {
        NORMAL: "normal",
        LIGHTBOX: "lightbox"
    }, void 0);
    r("studio.sdk.hint.ExpansionTrigger", {
        ON_CLICK: "onClick",
        ON_HOVER: "onHover"
    }, void 0);
    r("studio.sdk.hint.Hint", {
        EXPANSION_MODE: "expansionMode",
        EXPANSION_TRIGGER: "expansionTrigger"
    }, void 0);
    var tj, uj, vj, wj, xj, yj, zj = function () {
            return p.navigator ? p.navigator.userAgent : ""
        },
        Aj = function (a) {
            return Bb(zj(), a)
        },
        Bj = Aj("(iPad") || Aj("(Macintosh") || Aj("(iPod") || Aj("(iPhone"),
        Cj = Aj("Android"),
        Dj = Aj("MSIE") || Aj("IEMobile") || Aj("Windows Phone"),
        Ej = function () {
            void 0 === wj && (wj = Aj("afma-sdk-a") ? !0 : !1);
            return wj
        },
        Fj = function () {
            if (void 0 === xj) {
                a: {
                    if (void 0 === vj) {
                        if (Bj) {
                            var a = Aj("Safari");
                            var b = (new oh(window.location.href)).f.M("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && rb(b, "afma-")) {
                                    var c = b.lastIndexOf("v");
                                    if (-1 <
                                        c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || "0.0.0" !== b) {
                                a = vj = !0;
                                break a
                            }
                        }
                        vj = !1
                    }
                    a = vj
                }
                xj = a || Ej()
            }
            return xj
        };
    var Gj = function (a) {
            return "Config type " + (a + " does not exist")
        },
        Hj = function (a, b) {
            return "Cannot handle description for property " + (b + (" on type " + (a + ".")))
        },
        Ij = function (a, b) {
            return "Invalid type for value of property " + (b + (" on type " + (a + ".")))
        },
        Jj = function (a, b) {
            return "Property " + (b + (" is not an array on type " + (a + ".")))
        };
    var Kj = function () {};
    r("studio.utils.EnablerAccessor", Kj, void 0);
    var Lj = function (a) {
        var b = P();
        b.isInitialized() ? a(b) : b.g.add("init", w(a, b), !0, void 0, void 0)
    };
    Kj.getInitializedEnablerByCallback = Lj;
    var Mj = function () {
        return new ae(function (a) {
            var b = P();
            b.isInitialized() ? a(b) : b.g.add("init", w(a, b), !0, void 0, void 0)
        })
    };
    Kj.getInitializedEnabler = Mj;
    Kj.loadModuleWhenReady = function (a, b) {
        Lj(function (c) {
            c.Ra(a, b)
        })
    };
    var Nj = function () {};
    Fa(Nj);
    Nj.prototype.a = 0;
    var T = function (a) {
        J.call(this);
        this.ea = a || rd();
        this.C = null;
        this.la = !1;
        this.a = null;
        this.l = void 0;
        this.j = this.b = this.h = null
    };
    x(T, J);
    T.prototype.ra = Nj.Da();
    var Oj = function (a) {
        return a.C || (a.C = ":" + (a.ra.a++).toString(36))
    };
    T.prototype.getElement = function () {
        return this.a
    };
    var Pj = function (a) {
            a.l || (a.l = new K(a));
            return a.l
        },
        Qj = function (a, b) {
            if (a == b) throw Error("Unable to set parent component");
            var c;
            if (c = b && a.h && a.C) {
                c = a.h;
                var d = a.C;
                c = c.j && d ? Nb(c.j, d) || null : null
            }
            if (c && a.h != b) throw Error("Unable to set parent component");
            a.h = b;
            T.G.Eb.call(a, b)
        };
    T.prototype.Eb = function (a) {
        if (this.h && this.h != a) throw Error("Method not supported");
        T.G.Eb.call(this, a)
    };
    T.prototype.Z = function () {
        this.a = Fd(this.ea, "DIV")
    };
    var Rj = function (a, b, c) {
        if (a.la) throw Error("Component already rendered");
        a.a || a.Z();
        b ? b.insertBefore(a.a, c || null) : a.ea.a.body.appendChild(a.a);
        a.h && !a.h.la || a.W()
    };
    T.prototype.W = function () {
        this.la = !0;
        Sj(this, function (a) {
            !a.la && a.getElement() && a.W()
        })
    };
    var Tj = function (a) {
        Sj(a, function (b) {
            b.la && Tj(b)
        });
        a.l && Uf(a.l);
        a.la = !1
    };
    T.prototype.A = function () {
        this.la && Tj(this);
        this.l && (this.l.dispose(), delete this.l);
        Sj(this, function (a) {
            a.dispose()
        });
        this.a && Cd(this.a);
        this.h = this.a = this.j = this.b = null;
        T.G.A.call(this)
    };
    var Uj = function (a, b) {
        var c = a.b ? a.b.length : 0;
        if (b.la) throw Error("Component already rendered");
        if (0 > c || c > (a.b ? a.b.length : 0)) throw Error("Child component index out of bounds");
        a.j && a.b || (a.j = {}, a.b = []);
        if (b.h == a) {
            var d = Oj(b);
            a.j[d] = b;
            ib(a.b, b)
        } else {
            d = a.j;
            var e = Oj(b);
            if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
            d[e] = b
        }
        Qj(b, a);
        nb(a.b, c, 0, b);
        b.la && a.la && b.h == a ? (a = a.ka(), c = a.childNodes[c] || null, c != b.getElement() && a.insertBefore(b.getElement(), c)) : (a.a || a.Z(), c = a.b ? a.b[c +
            1] || null : null, Rj(b, a.ka(), c ? c.a : null))
    };
    T.prototype.ka = function () {
        return this.a
    };
    var Sj = function (a, b) {
            a.b && z(a.b, b, void 0)
        },
        Vj = function (a) {
            var b = a.b ? a.b[0] || null : null;
            if (b) {
                var c = "string" === typeof b ? b : Oj(b);
                b = a.j && c ? Nb(a.j, c) || null : null;
                if (c && b) {
                    var d = a.j;
                    c in d && delete d[c];
                    ib(a.b, b);
                    Tj(b);
                    b.a && Cd(b.a);
                    Qj(b, null)
                }
            }
            if (!b) throw Error("Child is not in parent component");
            return b
        },
        Wj = function (a) {
            for (var b = []; a.b && 0 != a.b.length;) b.push(Vj(a))
        };
})();