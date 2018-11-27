! function () {
    var t = this,
        e = t._,
        n = {},
        i = Array.prototype,
        o = Object.prototype,
        r = Function.prototype,
        a = i.push,
        s = i.slice,
        l = i.concat,
        c = o.toString,
        u = o.hasOwnProperty,
        p = i.forEach,
        d = i.map,
        f = i.reduce,
        h = i.reduceRight,
        m = i.filter,
        g = i.every,
        v = i.some,
        y = i.indexOf,
        b = i.lastIndexOf,
        w = Array.isArray,
        $ = Object.keys,
        x = r.bind,
        k = function (t) {
            return t instanceof k ? t : this instanceof k ? (this._wrapped = t, void 0) : new k(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : t._ = k, k.VERSION = "1.4.4";
    var C = k.each = k.forEach = function (t, e, i) {
        if (null != t)
            if (p && t.forEach === p) t.forEach(e, i);
            else if (t.length === +t.length) {
            for (var o = 0, r = t.length; r > o; o++)
                if (e.call(i, t[o], o, t) === n) return
        } else
            for (var a in t)
                if (k.has(t, a) && e.call(i, t[a], a, t) === n) return
    };
    k.map = k.collect = function (t, e, n) {
        var i = [];
        return null == t ? i : d && t.map === d ? t.map(e, n) : (C(t, function (t, o, r) {
            i[i.length] = e.call(n, t, o, r)
        }), i)
    };
    var E = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function (t, e, n, i) {
        var o = arguments.length > 2;
        if (null == t && (t = []), f && t.reduce === f) return i && (e = k.bind(e, i)), o ? t.reduce(e, n) : t.reduce(e);
        if (C(t, function (t, r, a) {
                o ? n = e.call(i, n, t, r, a) : (n = t, o = !0)
            }), !o) throw new TypeError(E);
        return n
    }, k.reduceRight = k.foldr = function (t, e, n, i) {
        var o = arguments.length > 2;
        if (null == t && (t = []), h && t.reduceRight === h) return i && (e = k.bind(e, i)), o ? t.reduceRight(e, n) : t.reduceRight(e);
        var r = t.length;
        if (r !== +r) {
            var a = k.keys(t);
            r = a.length
        }
        if (C(t, function (s, l, c) {
                l = a ? a[--r] : --r, o ? n = e.call(i, n, t[l], l, c) : (n = t[l], o = !0)
            }), !o) throw new TypeError(E);
        return n
    }, k.find = k.detect = function (t, e, n) {
        var i;
        return T(t, function (t, o, r) {
            return e.call(n, t, o, r) ? (i = t, !0) : void 0
        }), i
    }, k.filter = k.select = function (t, e, n) {
        var i = [];
        return null == t ? i : m && t.filter === m ? t.filter(e, n) : (C(t, function (t, o, r) {
            e.call(n, t, o, r) && (i[i.length] = t)
        }), i)
    }, k.reject = function (t, e, n) {
        return k.filter(t, function (t, i, o) {
            return !e.call(n, t, i, o)
        }, n)
    }, k.every = k.all = function (t, e, i) {
        e || (e = k.identity);
        var o = !0;
        return null == t ? o : g && t.every === g ? t.every(e, i) : (C(t, function (t, r, a) {
            return (o = o && e.call(i, t, r, a)) ? void 0 : n
        }), !!o)
    };
    var T = k.some = k.any = function (t, e, i) {
        e || (e = k.identity);
        var o = !1;
        return null == t ? o : v && t.some === v ? t.some(e, i) : (C(t, function (t, r, a) {
            return o || (o = e.call(i, t, r, a)) ? n : void 0
        }), !!o)
    };
    k.contains = k.include = function (t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function (t) {
            return t === e
        })
    }, k.invoke = function (t, e) {
        var n = s.call(arguments, 2),
            i = k.isFunction(e);
        return k.map(t, function (t) {
            return (i ? e : t[e]).apply(t, n)
        })
    }, k.pluck = function (t, e) {
        return k.map(t, function (t) {
            return t[e]
        })
    }, k.where = function (t, e, n) {
        return k.isEmpty(e) ? n ? null : [] : k[n ? "find" : "filter"](t, function (t) {
            for (var n in e)
                if (e[n] !== t[n]) return !1;
            return !0
        })
    }, k.findWhere = function (t, e) {
        return k.where(t, e, !0)
    }, k.max = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t)) return -1 / 0;
        var i = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return C(t, function (t, o, r) {
            var a = e ? e.call(n, t, o, r) : t;
            a >= i.computed && (i = {
                value: t,
                computed: a
            })
        }), i.value
    }, k.min = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t)) return 1 / 0;
        var i = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return C(t, function (t, o, r) {
            var a = e ? e.call(n, t, o, r) : t;
            a < i.computed && (i = {
                value: t,
                computed: a
            })
        }), i.value
    }, k.shuffle = function (t) {
        var e, n = 0,
            i = [];
        return C(t, function (t) {
            e = k.random(n++), i[n - 1] = i[e], i[e] = t
        }), i
    };
    var S = function (t) {
        return k.isFunction(t) ? t : function (e) {
            return e[t]
        }
    };
    k.sortBy = function (t, e, n) {
        var i = S(e);
        return k.pluck(k.map(t, function (t, e, o) {
            return {
                value: t,
                index: e,
                criteria: i.call(n, t, e, o)
            }
        }).sort(function (t, e) {
            var n = t.criteria,
                i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1
            }
            return t.index < e.index ? -1 : 1
        }), "value")
    };
    var D = function (t, e, n, i) {
        var o = {},
            r = S(e || k.identity);
        return C(t, function (e, a) {
            var s = r.call(n, e, a, t);
            i(o, s, e)
        }), o
    };
    k.groupBy = function (t, e, n) {
        return D(t, e, n, function (t, e, n) {
            (k.has(t, e) ? t[e] : t[e] = []).push(n)
        })
    }, k.countBy = function (t, e, n) {
        return D(t, e, n, function (t, e) {
            k.has(t, e) || (t[e] = 0), t[e]++
        })
    }, k.sortedIndex = function (t, e, n, i) {
        n = null == n ? k.identity : S(n);
        for (var o = n.call(i, e), r = 0, a = t.length; a > r;) {
            var s = r + a >>> 1;
            n.call(i, t[s]) < o ? r = s + 1 : a = s
        }
        return r
    }, k.toArray = function (t) {
        return t ? k.isArray(t) ? s.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t) : []
    }, k.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length
    }, k.first = k.head = k.take = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : s.call(t, 0, e)
    }, k.initial = function (t, e, n) {
        return s.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, k.last = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
    }, k.rest = k.tail = k.drop = function (t, e, n) {
        return s.call(t, null == e || n ? 1 : e)
    }, k.compact = function (t) {
        return k.filter(t, k.identity)
    };
    var _ = function (t, e, n) {
        return C(t, function (t) {
            k.isArray(t) ? e ? a.apply(n, t) : _(t, e, n) : n.push(t)
        }), n
    };
    k.flatten = function (t, e) {
        return _(t, e, [])
    }, k.without = function (t) {
        return k.difference(t, s.call(arguments, 1))
    }, k.uniq = k.unique = function (t, e, n, i) {
        k.isFunction(e) && (i = n, n = e, e = !1);
        var o = n ? k.map(t, n, i) : t,
            r = [],
            a = [];
        return C(o, function (n, i) {
            (e ? i && a[a.length - 1] === n : k.contains(a, n)) || (a.push(n), r.push(t[i]))
        }), r
    }, k.union = function () {
        return k.uniq(l.apply(i, arguments))
    }, k.intersection = function (t) {
        var e = s.call(arguments, 1);
        return k.filter(k.uniq(t), function (t) {
            return k.every(e, function (e) {
                return k.indexOf(e, t) >= 0
            })
        })
    }, k.difference = function (t) {
        var e = l.apply(i, s.call(arguments, 1));
        return k.filter(t, function (t) {
            return !k.contains(e, t)
        })
    }, k.zip = function () {
        for (var t = s.call(arguments), e = k.max(k.pluck(t, "length")), n = new Array(e), i = 0; e > i; i++) n[i] = k.pluck(t, "" + i);
        return n
    }, k.object = function (t, e) {
        if (null == t) return {};
        for (var n = {}, i = 0, o = t.length; o > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }, k.indexOf = function (t, e, n) {
        if (null == t) return -1;
        var i = 0,
            o = t.length;
        if (n) {
            if ("number" != typeof n) return i = k.sortedIndex(t, e), t[i] === e ? i : -1;
            i = 0 > n ? Math.max(0, o + n) : n
        }
        if (y && t.indexOf === y) return t.indexOf(e, n);
        for (; o > i; i++)
            if (t[i] === e) return i;
        return -1
    }, k.lastIndexOf = function (t, e, n) {
        if (null == t) return -1;
        var i = null != n;
        if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var o = i ? n : t.length; o--;)
            if (t[o] === e) return o;
        return -1
    }, k.range = function (t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), o = 0, r = new Array(i); i > o;) r[o++] = t, t += n;
        return r
    }, k.bind = function (t, e) {
        if (t.bind === x && x) return x.apply(t, s.call(arguments, 1));
        var n = s.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(s.call(arguments)))
        }
    }, k.partial = function (t) {
        var e = s.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(s.call(arguments)))
        }
    }, k.bindAll = function (t) {
        var e = s.call(arguments, 1);
        return 0 === e.length && (e = k.functions(t)), C(e, function (e) {
            t[e] = k.bind(t[e], t)
        }), t
    }, k.memoize = function (t, e) {
        var n = {};
        return e || (e = k.identity),
            function () {
                var i = e.apply(this, arguments);
                return k.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
            }
    }, k.delay = function (t, e) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, n)
        }, e)
    }, k.defer = function (t) {
        return k.delay.apply(k, [t, 1].concat(s.call(arguments, 1)))
    }, k.throttle = function (t, e) {
        var n, i, o, r, a = 0,
            s = function () {
                a = new Date, o = null, r = t.apply(n, i)
            };
        return function () {
            var l = new Date,
                c = e - (l - a);
            return n = this, i = arguments, 0 >= c ? (clearTimeout(o), o = null, a = l, r = t.apply(n, i)) : o || (o = setTimeout(s, c)), r
        }
    }, k.debounce = function (t, e, n) {
        var i, o;
        return function () {
            var r = this,
                a = arguments,
                s = function () {
                    i = null, n || (o = t.apply(r, a))
                },
                l = n && !i;
            return clearTimeout(i), i = setTimeout(s, e), l && (o = t.apply(r, a)), o
        }
    }, k.once = function (t) {
        var e, n = !1;
        return function () {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, k.wrap = function (t, e) {
        return function () {
            var n = [t];
            return a.apply(n, arguments), e.apply(this, n)
        }
    }, k.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
            return e[0]
        }
    }, k.after = function (t, e) {
        return 0 >= t ? e() : function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, k.keys = $ || function (t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var n in t) k.has(t, n) && (e[e.length] = n);
        return e
    }, k.values = function (t) {
        var e = [];
        for (var n in t) k.has(t, n) && e.push(t[n]);
        return e
    }, k.pairs = function (t) {
        var e = [];
        for (var n in t) k.has(t, n) && e.push([n, t[n]]);
        return e
    }, k.invert = function (t) {
        var e = {};
        for (var n in t) k.has(t, n) && (e[t[n]] = n);
        return e
    }, k.functions = k.methods = function (t) {
        var e = [];
        for (var n in t) k.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, k.extend = function (t) {
        return C(s.call(arguments, 1), function (e) {
            if (e)
                for (var n in e) t[n] = e[n]
        }), t
    }, k.pick = function (t) {
        var e = {},
            n = l.apply(i, s.call(arguments, 1));
        return C(n, function (n) {
            n in t && (e[n] = t[n])
        }), e
    }, k.omit = function (t) {
        var e = {},
            n = l.apply(i, s.call(arguments, 1));
        for (var o in t) k.contains(n, o) || (e[o] = t[o]);
        return e
    }, k.defaults = function (t) {
        return C(s.call(arguments, 1), function (e) {
            if (e)
                for (var n in e) null == t[n] && (t[n] = e[n])
        }), t
    }, k.clone = function (t) {
        return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t
    }, k.tap = function (t, e) {
        return e(t), t
    };
    var O = function (t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
        var o = c.call(t);
        if (o != c.call(e)) return !1;
        switch (o) {
            case "[object String]":
                return t == String(e);
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var r = n.length; r--;)
            if (n[r] == t) return i[r] == e;
        n.push(t), i.push(e);
        var a = 0,
            s = !0;
        if ("[object Array]" == o) {
            if (a = t.length, s = a == e.length)
                for (; a-- && (s = O(t[a], e[a], n, i)););
        } else {
            var l = t.constructor,
                u = e.constructor;
            if (l !== u && !(k.isFunction(l) && l instanceof l && k.isFunction(u) && u instanceof u)) return !1;
            for (var p in t)
                if (k.has(t, p) && (a++, !(s = k.has(e, p) && O(t[p], e[p], n, i)))) break;
            if (s) {
                for (p in e)
                    if (k.has(e, p) && !a--) break;
                s = !a
            }
        }
        return n.pop(), i.pop(), s
    };
    k.isEqual = function (t, e) {
        return O(t, e, [], [])
    }, k.isEmpty = function (t) {
        if (null == t) return !0;
        if (k.isArray(t) || k.isString(t)) return 0 === t.length;
        for (var e in t)
            if (k.has(t, e)) return !1;
        return !0
    }, k.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, k.isArray = w || function (t) {
        return "[object Array]" == c.call(t)
    }, k.isObject = function (t) {
        return t === Object(t)
    }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        k["is" + t] = function (e) {
            return c.call(e) == "[object " + t + "]"
        }
    }), k.isArguments(arguments) || (k.isArguments = function (t) {
        return !(!t || !k.has(t, "callee"))
    }), "function" != typeof /./ && (k.isFunction = function (t) {
        return "function" == typeof t
    }), k.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, k.isNaN = function (t) {
        return k.isNumber(t) && t != +t
    }, k.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
    }, k.isNull = function (t) {
        return null === t
    }, k.isUndefined = function (t) {
        return void 0 === t
    }, k.has = function (t, e) {
        return u.call(t, e)
    }, k.noConflict = function () {
        return t._ = e, this
    }, k.identity = function (t) {
        return t
    }, k.times = function (t, e, n) {
        for (var i = Array(t), o = 0; t > o; o++) i[o] = e.call(n, o);
        return i
    }, k.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var A = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    A.unescape = k.invert(A.escape);
    var I = {
        escape: new RegExp("[" + k.keys(A.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + k.keys(A.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function (t) {
        k[t] = function (e) {
            return null == e ? "" : ("" + e).replace(I[t], function (e) {
                return A[t][e]
            })
        }
    }), k.result = function (t, e) {
        if (null == t) return null;
        var n = t[e];
        return k.isFunction(n) ? n.call(t) : n
    }, k.mixin = function (t) {
        C(k.functions(t), function (e) {
            var n = k[e] = t[e];
            k.prototype[e] = function () {
                var t = [this._wrapped];
                return a.apply(t, arguments), j.call(this, n.apply(k, t))
            }
        })
    };
    var M = 0;
    k.uniqueId = function (t) {
        var e = ++M + "";
        return t ? t + e : e
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var R = /(.)^/,
        P = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function (t, e, n) {
        var i;
        n = k.defaults({}, n, k.templateSettings);
        var o = new RegExp([(n.escape || R).source, (n.interpolate || R).source, (n.evaluate || R).source].join("|") + "|$", "g"),
            r = 0,
            a = "__p+='";
        t.replace(o, function (e, n, i, o, s) {
            return a += t.slice(r, s).replace(L, function (t) {
                return "\\" + P[t]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), o && (a += "';\n" + o + "\n__p+='"), r = s + e.length, e
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            i = new Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (e) return i(e, k);
        var l = function (t) {
            return i.call(this, t, k)
        };
        return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
    }, k.chain = function (t) {
        return k(t).chain()
    };
    var j = function (t) {
        return this._chain ? k(t).chain() : t
    };
    k.mixin(k), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = i[t];
        k.prototype[t] = function () {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], j.call(this, n)
        }
    }), C(["concat", "join", "slice"], function (t) {
        var e = i[t];
        k.prototype[t] = function () {
            return j.call(this, e.apply(this._wrapped, arguments))
        }
    }), k.extend(k.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.transition", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-popup.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/tooltip/tooltip-template-popup.html", "template/popover/popover-template.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("collapse", ["$animate", function (t) {
        return {
            link: function (e, n, i) {
                function o() {
                    n.removeClass("collapse").addClass("collapsing"), t.addClass(n, "in", {
                        to: {
                            height: n[0].scrollHeight + "px"
                        }
                    }).then(r)
                }

                function r() {
                    n.removeClass("collapsing"), n.css({
                        height: "auto"
                    })
                }

                function a() {
                    n.css({
                        height: n[0].scrollHeight + "px"
                    }).removeClass("collapse").addClass("collapsing"), t.removeClass(n, "in", {
                        to: {
                            height: "0"
                        }
                    }).then(s)
                }

                function s() {
                    n.css({
                        height: "0"
                    }), n.removeClass("collapsing"), n.addClass("collapse")
                }
                e.$watch(i.collapse, function (t) {
                    t ? a() : o()
                })
            }
        }
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
        closeOthers: !0
    }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (t, e, n) {
        this.groups = [], this.closeOthers = function (i) {
            var o = angular.isDefined(e.closeOthers) ? t.$eval(e.closeOthers) : n.closeOthers;
            o && angular.forEach(this.groups, function (t) {
                t !== i && (t.isOpen = !1)
            })
        }, this.addGroup = function (t) {
            var e = this;
            this.groups.push(t), t.$on("$destroy", function () {
                e.removeGroup(t)
            })
        }, this.removeGroup = function (t) {
            var e = this.groups.indexOf(t); - 1 !== e && this.groups.splice(e, 1)
        }
    }]).directive("accordion", function () {
        return {
            restrict: "EA",
            controller: "AccordionController",
            transclude: !0,
            replace: !1,
            templateUrl: "template/accordion/accordion.html"
        }
    }).directive("accordionGroup", function () {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/accordion/accordion-group.html",
            scope: {
                heading: "@",
                isOpen: "=?",
                isDisabled: "=?"
            },
            controller: function () {
                this.setHeading = function (t) {
                    this.heading = t
                }
            },
            link: function (t, e, n, i) {
                i.addGroup(t), t.$watch("isOpen", function (e) {
                    e && i.closeOthers(t)
                }), t.toggleOpen = function () {
                    t.isDisabled || (t.isOpen = !t.isOpen)
                }
            }
        }
    }).directive("accordionHeading", function () {
        return {
            restrict: "EA",
            transclude: !0,
            template: "",
            replace: !0,
            require: "^accordionGroup",
            link: function (t, e, n, i, o) {
                i.setHeading(o(t, angular.noop))
            }
        }
    }).directive("accordionTransclude", function () {
        return {
            require: "^accordionGroup",
            link: function (t, e, n, i) {
                t.$watch(function () {
                    return i[n.accordionTransclude]
                }, function (t) {
                    t && (e.html(""), e.append(t))
                })
            }
        }
    }), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (t, e) {
        t.closeable = "close" in e, this.close = t.close
    }]).directive("alert", function () {
        return {
            restrict: "EA",
            controller: "AlertController",
            templateUrl: "template/alert/alert.html",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@",
                close: "&"
            }
        }
    }).directive("dismissOnTimeout", ["$timeout", function (t) {
        return {
            require: "alert",
            link: function (e, n, i, o) {
                t(function () {
                    o.close()
                }, parseInt(i.dismissOnTimeout, 10))
            }
        }
    }]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
        return function (t, e, n) {
            e.addClass("ng-binding").data("$binding", n.bindHtmlUnsafe), t.$watch(n.bindHtmlUnsafe, function (t) {
                e.html(t || "")
            })
        }
    }), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
        activeClass: "active",
        toggleEvent: "click"
    }).controller("ButtonsController", ["buttonConfig", function (t) {
        this.activeClass = t.activeClass || "active", this.toggleEvent = t.toggleEvent || "click"
    }]).directive("btnRadio", function () {
        return {
            require: ["btnRadio", "ngModel"],
            controller: "ButtonsController",
            link: function (t, e, n, i) {
                var o = i[0],
                    r = i[1];
                r.$render = function () {
                    e.toggleClass(o.activeClass, angular.equals(r.$modelValue, t.$eval(n.btnRadio)))
                }, e.bind(o.toggleEvent, function () {
                    var i = e.hasClass(o.activeClass);
                    (!i || angular.isDefined(n.uncheckable)) && t.$apply(function () {
                        r.$setViewValue(i ? null : t.$eval(n.btnRadio)), r.$render()
                    })
                })
            }
        }
    }).directive("btnCheckbox", function () {
        return {
            require: ["btnCheckbox", "ngModel"],
            controller: "ButtonsController",
            link: function (t, e, n, i) {
                function o() {
                    return a(n.btnCheckboxTrue, !0)
                }

                function r() {
                    return a(n.btnCheckboxFalse, !1)
                }

                function a(e, n) {
                    var i = t.$eval(e);
                    return angular.isDefined(i) ? i : n
                }
                var s = i[0],
                    l = i[1];
                l.$render = function () {
                    e.toggleClass(s.activeClass, angular.equals(l.$modelValue, o()))
                }, e.bind(s.toggleEvent, function () {
                    t.$apply(function () {
                        l.$setViewValue(e.hasClass(s.activeClass) ? r() : o()), l.$render()
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.carousel", []).controller("CarouselController", ["$scope", "$interval", "$animate", function (t, e, n) {
        function i(t) {
            if (angular.isUndefined(u[t].index)) return u[t];
            var e;
            for (u.length, e = 0; e < u.length; ++e)
                if (u[e].index == t) return u[e]
        }

        function o() {
            r();
            var n = +t.interval;
            !isNaN(n) && n > 0 && (s = e(a, n))
        }

        function r() {
            s && (e.cancel(s), s = null)
        }

        function a() {
            var e = +t.interval;
            l && !isNaN(e) && e > 0 ? t.next() : t.pause()
        }
        var s, l, c = this,
            u = c.slides = t.slides = [],
            p = -1;
        c.currentSlide = null;
        var d = !1;
        c.select = t.select = function (e, i) {
            function r() {
                d || (angular.extend(e, {
                    direction: i,
                    active: !0
                }), angular.extend(c.currentSlide || {}, {
                    direction: i,
                    active: !1
                }), n.enabled() && !t.noTransition && e.$element && (t.$currentTransition = !0, e.$element.one("$animate:close", function () {
                    t.$currentTransition = null
                })), c.currentSlide = e, p = a, o())
            }
            var a = c.indexOfSlide(e);
            void 0 === i && (i = a > c.getCurrentIndex() ? "next" : "prev"), e && e !== c.currentSlide && r()
        }, t.$on("$destroy", function () {
            d = !0
        }), c.getCurrentIndex = function () {
            return c.currentSlide && angular.isDefined(c.currentSlide.index) ? +c.currentSlide.index : p
        }, c.indexOfSlide = function (t) {
            return angular.isDefined(t.index) ? +t.index : u.indexOf(t)
        }, t.next = function () {
            var e = (c.getCurrentIndex() + 1) % u.length;
            return t.$currentTransition ? void 0 : c.select(i(e), "next")
        }, t.prev = function () {
            var e = c.getCurrentIndex() - 1 < 0 ? u.length - 1 : c.getCurrentIndex() - 1;
            return t.$currentTransition ? void 0 : c.select(i(e), "prev")
        }, t.isActive = function (t) {
            return c.currentSlide === t
        }, t.$watch("interval", o), t.$on("$destroy", r), t.play = function () {
            l || (l = !0, o())
        }, t.pause = function () {
            t.noPause || (l = !1, r())
        }, c.addSlide = function (e, n) {
            e.$element = n, u.push(e), 1 === u.length || e.active ? (c.select(u[u.length - 1]), 1 == u.length && t.play()) : e.active = !1
        }, c.removeSlide = function (t) {
            angular.isDefined(t.index) && u.sort(function (t, e) {
                return +t.index > +e.index
            });
            var e = u.indexOf(t);
            u.splice(e, 1), u.length > 0 && t.active ? e >= u.length ? c.select(u[e - 1]) : c.select(u[e]) : p > e && p--
        }
    }]).directive("carousel", [function () {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }]).directive("slide", function () {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/carousel/slide.html",
            scope: {
                active: "=?",
                index: "=?"
            },
            link: function (t, e, n, i) {
                i.addSlide(t, e), t.$on("$destroy", function () {
                    i.removeSlide(t)
                }), t.$watch("active", function (e) {
                    e && i.select(t)
                })
            }
        }
    }).animation(".item", ["$animate", function (t) {
        return {
            beforeAddClass: function (e, n, i) {
                if ("active" == n && e.parent() && !e.parent().scope().noTransition) {
                    var o = !1,
                        r = e.isolateScope().direction,
                        a = "next" == r ? "left" : "right";
                    return e.addClass(r), t.addClass(e, a).then(function () {
                            o || e.removeClass(a + " " + r), i()
                        }),
                        function () {
                            o = !0
                        }
                }
                i()
            },
            beforeRemoveClass: function (e, n, i) {
                if ("active" == n && e.parent() && !e.parent().scope().noTransition) {
                    var o = !1,
                        r = e.isolateScope().direction,
                        a = "next" == r ? "left" : "right";
                    return t.addClass(e, a).then(function () {
                            o || e.removeClass(a), i()
                        }),
                        function () {
                            o = !0
                        }
                }
                i()
            }
        }
    }]), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function (t, e) {
        function n(t) {
            var n = [],
                i = t.split("");
            return angular.forEach(r, function (e, o) {
                var r = t.indexOf(o);
                if (r > -1) {
                    t = t.split(""), i[r] = "(" + e.regex + ")", t[r] = "$";
                    for (var a = r + 1, s = r + o.length; s > a; a++) i[a] = "", t[a] = "$";
                    t = t.join(""), n.push({
                        index: r,
                        apply: e.apply
                    })
                }
            }), {
                regex: new RegExp("^" + i.join("") + "$"),
                map: e(n, "index")
            }
        }

        function i(t, e, n) {
            return 1 > n ? !1 : 1 === e && n > 28 ? 29 === n && (0 === t % 4 && 0 !== t % 100 || 0 === t % 400) : 3 === e || 5 === e || 8 === e || 10 === e ? 31 > n : !0
        }
        var o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        this.parsers = {};
        var r = {
            yyyy: {
                regex: "\\d{4}",
                apply: function (t) {
                    this.year = +t
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function (t) {
                    this.year = +t + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function (t) {
                    this.year = +t
                }
            },
            MMMM: {
                regex: t.DATETIME_FORMATS.MONTH.join("|"),
                apply: function (e) {
                    this.month = t.DATETIME_FORMATS.MONTH.indexOf(e)
                }
            },
            MMM: {
                regex: t.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function (e) {
                    this.month = t.DATETIME_FORMATS.SHORTMONTH.indexOf(e)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function (t) {
                    this.month = t - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function (t) {
                    this.month = t - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function (t) {
                    this.date = +t
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function (t) {
                    this.date = +t
                }
            },
            EEEE: {
                regex: t.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: t.DATETIME_FORMATS.SHORTDAY.join("|")
            },
            HH: {
                regex: "(?:0|1)[0-9]|2[0-3]",
                apply: function (t) {
                    this.hours = +t
                }
            },
            H: {
                regex: "1?[0-9]|2[0-3]",
                apply: function (t) {
                    this.hours = +t
                }
            },
            mm: {
                regex: "[0-5][0-9]",
                apply: function (t) {
                    this.minutes = +t
                }
            },
            m: {
                regex: "[0-9]|[1-5][0-9]",
                apply: function (t) {
                    this.minutes = +t
                }
            },
            sss: {
                regex: "[0-9][0-9][0-9]",
                apply: function (t) {
                    this.milliseconds = +t
                }
            },
            ss: {
                regex: "[0-5][0-9]",
                apply: function (t) {
                    this.seconds = +t
                }
            },
            s: {
                regex: "[0-9]|[1-5][0-9]",
                apply: function (t) {
                    this.seconds = +t
                }
            }
        };
        this.parse = function (e, r, a) {
            if (!angular.isString(e) || !r) return e;
            r = t.DATETIME_FORMATS[r] || r, r = r.replace(o, "\\$&"), this.parsers[r] || (this.parsers[r] = n(r));
            var s = this.parsers[r],
                l = s.regex,
                c = s.map,
                u = e.match(l);
            if (u && u.length) {
                var p, d;
                p = a ? {
                    year: a.getFullYear(),
                    month: a.getMonth(),
                    date: a.getDate(),
                    hours: a.getHours(),
                    minutes: a.getMinutes(),
                    seconds: a.getSeconds(),
                    milliseconds: a.getMilliseconds()
                } : {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0
                };
                for (var f = 1, h = u.length; h > f; f++) {
                    var m = c[f - 1];
                    m.apply && m.apply.call(p, u[f])
                }
                return i(p.year, p.month, p.date) && (d = new Date(p.year, p.month, p.date, p.hours, p.minutes, p.seconds, p.milliseconds || 0)), d
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (t, e) {
        function n(t, n) {
            return t.currentStyle ? t.currentStyle[n] : e.getComputedStyle ? e.getComputedStyle(t)[n] : t.style[n]
        }

        function i(t) {
            return "static" === (n(t, "position") || "static")
        }
        var o = function (e) {
            for (var n = t[0], o = e.offsetParent || n; o && o !== n && i(o);) o = o.offsetParent;
            return o || n
        };
        return {
            position: function (e) {
                var n = this.offset(e),
                    i = {
                        top: 0,
                        left: 0
                    },
                    r = o(e[0]);
                r != t[0] && (i = this.offset(angular.element(r)), i.top += r.clientTop - r.scrollTop, i.left += r.clientLeft - r.scrollLeft);
                var a = e[0].getBoundingClientRect();
                return {
                    width: a.width || e.prop("offsetWidth"),
                    height: a.height || e.prop("offsetHeight"),
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            },
            offset: function (n) {
                var i = n[0].getBoundingClientRect();
                return {
                    width: i.width || n.prop("offsetWidth"),
                    height: i.height || n.prop("offsetHeight"),
                    top: i.top + (e.pageYOffset || t[0].documentElement.scrollTop),
                    left: i.left + (e.pageXOffset || t[0].documentElement.scrollLeft)
                }
            },
            positionElements: function (t, e, n, i) {
                var o, r, a, s, l = n.split("-"),
                    c = l[0],
                    u = l[1] || "center";
                o = i ? this.offset(t) : this.position(t), r = e.prop("offsetWidth"), a = e.prop("offsetHeight");
                var p = {
                        center: function () {
                            return o.left + o.width / 2 - r / 2
                        },
                        left: function () {
                            return o.left
                        },
                        right: function () {
                            return o.left + o.width
                        }
                    },
                    d = {
                        center: function () {
                            return o.top + o.height / 2 - a / 2
                        },
                        top: function () {
                            return o.top
                        },
                        bottom: function () {
                            return o.top + o.height
                        }
                    };
                switch (c) {
                    case "right":
                        s = {
                            top: d[u](),
                            left: p[c]()
                        };
                        break;
                    case "left":
                        s = {
                            top: d[u](),
                            left: o.left - r
                        };
                        break;
                    case "bottom":
                        s = {
                            top: d[c](),
                            left: p[u]()
                        };
                        break;
                    default:
                        s = {
                            top: o.top - a,
                            left: p[u]()
                        }
                }
                return s
            }
        }
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
        formatDay: "dd",
        formatMonth: "MMMM",
        formatYear: "yyyy",
        formatDayHeader: "EEE",
        formatDayTitle: "MMMM yyyy",
        formatMonthTitle: "yyyy",
        datepickerMode: "day",
        minMode: "day",
        maxMode: "year",
        showWeeks: !0,
        startingDay: 0,
        yearRange: 20,
        minDate: null,
        maxDate: null,
        shortcutPropagation: !1
    }).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function (t, e, n, i, o, r, a, s) {
        var l = this,
            c = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function (n, o) {
            l[n] = angular.isDefined(e[n]) ? 8 > o ? i(e[n])(t.$parent) : t.$parent.$eval(e[n]) : s[n]
        }), angular.forEach(["minDate", "maxDate"], function (i) {
            e[i] ? t.$parent.$watch(n(e[i]), function (t) {
                l[i] = t ? new Date(t) : null, l.refreshView()
            }) : l[i] = s[i] ? new Date(s[i]) : null
        }), t.datepickerMode = t.datepickerMode || s.datepickerMode, t.maxMode = l.maxMode, t.uniqueId = "datepicker-" + t.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(e.initDate) ? (this.activeDate = t.$parent.$eval(e.initDate) || new Date, t.$parent.$watch(e.initDate, function (t) {
            t && (c.$isEmpty(c.$modelValue) || c.$invalid) && (l.activeDate = t, l.refreshView())
        })) : this.activeDate = new Date, t.isActive = function (e) {
            return 0 === l.compare(e.date, l.activeDate) ? (t.activeDateId = e.uid, !0) : !1
        }, this.init = function (t) {
            c = t, c.$render = function () {
                l.render()
            }
        }, this.render = function () {
            if (c.$viewValue) {
                var t = new Date(c.$viewValue),
                    e = !isNaN(t);
                e ? this.activeDate = t : r.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), c.$setValidity("date", e)
            }
            this.refreshView()
        }, this.refreshView = function () {
            if (this.element) {
                this._refreshView();
                var t = c.$viewValue ? new Date(c.$viewValue) : null;
                c.$setValidity("date-disabled", !t || this.element && !this.isDisabled(t))
            }
        }, this.createDateObject = function (t, e) {
            var n = c.$viewValue ? new Date(c.$viewValue) : null;
            return {
                date: t,
                label: a(t, e),
                selected: n && 0 === this.compare(t, n),
                disabled: this.isDisabled(t),
                current: 0 === this.compare(t, new Date),
                customClass: this.customClass(t)
            }
        }, this.isDisabled = function (n) {
            return this.minDate && this.compare(n, this.minDate) < 0 || this.maxDate && this.compare(n, this.maxDate) > 0 || e.dateDisabled && t.dateDisabled({
                date: n,
                mode: t.datepickerMode
            })
        }, this.customClass = function (e) {
            return t.customClass({
                date: e,
                mode: t.datepickerMode
            })
        }, this.split = function (t, e) {
            for (var n = []; t.length > 0;) n.push(t.splice(0, e));
            return n
        }, t.select = function (e) {
            if (t.datepickerMode === l.minMode) {
                var n = c.$viewValue ? new Date(c.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), c.$setViewValue(n), c.$render()
            } else l.activeDate = e, t.datepickerMode = l.modes[l.modes.indexOf(t.datepickerMode) - 1]
        }, t.move = function (t) {
            var e = l.activeDate.getFullYear() + t * (l.step.years || 0),
                n = l.activeDate.getMonth() + t * (l.step.months || 0);
            l.activeDate.setFullYear(e, n, 1), l.refreshView()
        }, t.toggleMode = function (e) {
            e = e || 1, t.datepickerMode === l.maxMode && 1 === e || t.datepickerMode === l.minMode && -1 === e || (t.datepickerMode = l.modes[l.modes.indexOf(t.datepickerMode) + e])
        }, t.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var u = function () {
            o(function () {
                l.element[0].focus()
            }, 0, !1)
        };
        t.$on("datepicker.focus", u), t.keydown = function (e) {
            var n = t.keys[e.which];
            if (n && !e.shiftKey && !e.altKey)
                if (e.preventDefault(), l.shortcutPropagation || e.stopPropagation(), "enter" === n || "space" === n) {
                    if (l.isDisabled(l.activeDate)) return;
                    t.select(l.activeDate), u()
                } else !e.ctrlKey || "up" !== n && "down" !== n ? (l.handleKeyDown(n, e), l.refreshView()) : (t.toggleMode("up" === n ? 1 : -1), u())
        }
    }]).directive("datepicker", function () {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/datepicker.html",
            scope: {
                datepickerMode: "=?",
                dateDisabled: "&",
                customClass: "&",
                shortcutPropagation: "&?"
            },
            require: ["datepicker", "?^ngModel"],
            controller: "DatepickerController",
            link: function (t, e, n, i) {
                var o = i[0],
                    r = i[1];
                r && o.init(r)
            }
        }
    }).directive("daypicker", ["dateFilter", function (t) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function (e, n, i, o) {
                function r(t, e) {
                    return 1 !== e || 0 !== t % 4 || 0 === t % 100 && 0 !== t % 400 ? l[e] : 29
                }

                function a(t, e) {
                    var n = new Array(e),
                        i = new Date(t),
                        o = 0;
                    for (i.setHours(12); e > o;) n[o++] = new Date(i), i.setDate(i.getDate() + 1);
                    return n
                }

                function s(t) {
                    var e = new Date(t);
                    e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                    var n = e.getTime();
                    return e.setMonth(0), e.setDate(1), Math.floor(Math.round((n - e) / 864e5) / 7) + 1
                }
                e.showWeeks = o.showWeeks, o.step = {
                    months: 1
                }, o.element = n;
                var l = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                o._refreshView = function () {
                    var n = o.activeDate.getFullYear(),
                        i = o.activeDate.getMonth(),
                        r = new Date(n, i, 1),
                        l = o.startingDay - r.getDay(),
                        c = l > 0 ? 7 - l : -l,
                        u = new Date(r);
                    c > 0 && u.setDate(-c + 1);
                    for (var p = a(u, 42), d = 0; 42 > d; d++) p[d] = angular.extend(o.createDateObject(p[d], o.formatDay), {
                        secondary: p[d].getMonth() !== i,
                        uid: e.uniqueId + "-" + d
                    });
                    e.labels = new Array(7);
                    for (var f = 0; 7 > f; f++) e.labels[f] = {
                        abbr: t(p[f].date, o.formatDayHeader),
                        full: t(p[f].date, "EEEE")
                    };
                    if (e.title = t(o.activeDate, o.formatDayTitle), e.rows = o.split(p, 7), e.showWeeks) {
                        e.weekNumbers = [];
                        for (var h = (11 - o.startingDay) % 7, m = e.rows.length, g = 0; m > g; g++) e.weekNumbers.push(s(e.rows[g][h].date))
                    }
                }, o.compare = function (t, e) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate()) - new Date(e.getFullYear(), e.getMonth(), e.getDate())
                }, o.handleKeyDown = function (t) {
                    var e = o.activeDate.getDate();
                    if ("left" === t) e -= 1;
                    else if ("up" === t) e -= 7;
                    else if ("right" === t) e += 1;
                    else if ("down" === t) e += 7;
                    else if ("pageup" === t || "pagedown" === t) {
                        var n = o.activeDate.getMonth() + ("pageup" === t ? -1 : 1);
                        o.activeDate.setMonth(n, 1), e = Math.min(r(o.activeDate.getFullYear(), o.activeDate.getMonth()), e)
                    } else "home" === t ? e = 1 : "end" === t && (e = r(o.activeDate.getFullYear(), o.activeDate.getMonth()));
                    o.activeDate.setDate(e)
                }, o.refreshView()
            }
        }
    }]).directive("monthpicker", ["dateFilter", function (t) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function (e, n, i, o) {
                o.step = {
                    years: 1
                }, o.element = n, o._refreshView = function () {
                    for (var n = new Array(12), i = o.activeDate.getFullYear(), r = 0; 12 > r; r++) n[r] = angular.extend(o.createDateObject(new Date(i, r, 1), o.formatMonth), {
                        uid: e.uniqueId + "-" + r
                    });
                    e.title = t(o.activeDate, o.formatMonthTitle), e.rows = o.split(n, 3)
                }, o.compare = function (t, e) {
                    return new Date(t.getFullYear(), t.getMonth()) - new Date(e.getFullYear(), e.getMonth())
                }, o.handleKeyDown = function (t) {
                    var e = o.activeDate.getMonth();
                    if ("left" === t) e -= 1;
                    else if ("up" === t) e -= 3;
                    else if ("right" === t) e += 1;
                    else if ("down" === t) e += 3;
                    else if ("pageup" === t || "pagedown" === t) {
                        var n = o.activeDate.getFullYear() + ("pageup" === t ? -1 : 1);
                        o.activeDate.setFullYear(n)
                    } else "home" === t ? e = 0 : "end" === t && (e = 11);
                    o.activeDate.setMonth(e)
                }, o.refreshView()
            }
        }
    }]).directive("yearpicker", ["dateFilter", function () {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function (t, e, n, i) {
                function o(t) {
                    return parseInt((t - 1) / r, 10) * r + 1
                }
                var r = i.yearRange;
                i.step = {
                    years: r
                }, i.element = e, i._refreshView = function () {
                    for (var e = new Array(r), n = 0, a = o(i.activeDate.getFullYear()); r > n; n++) e[n] = angular.extend(i.createDateObject(new Date(a + n, 0, 1), i.formatYear), {
                        uid: t.uniqueId + "-" + n
                    });
                    t.title = [e[0].label, e[r - 1].label].join(" - "), t.rows = i.split(e, 5)
                }, i.compare = function (t, e) {
                    return t.getFullYear() - e.getFullYear()
                }, i.handleKeyDown = function (t) {
                    var e = i.activeDate.getFullYear();
                    "left" === t ? e -= 1 : "up" === t ? e -= 5 : "right" === t ? e += 1 : "down" === t ? e += 5 : "pageup" === t || "pagedown" === t ? e += ("pageup" === t ? -1 : 1) * i.step.years : "home" === t ? e = o(i.activeDate.getFullYear()) : "end" === t && (e = o(i.activeDate.getFullYear()) + r - 1), i.activeDate.setFullYear(e)
                }, i.refreshView()
            }
        }
    }]).constant("datepickerPopupConfig", {
        datepickerPopup: "yyyy-MM-dd",
        html5Types: {
            date: "yyyy-MM-dd",
            "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
            month: "yyyy-MM"
        },
        currentText: "Today",
        clearText: "Clear",
        closeText: "Done",
        closeOnDateSelection: !0,
        appendToBody: !1,
        showButtonBar: !0
    }).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function (t, e, n, i, o, r, a) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&",
                customClass: "&"
            },
            link: function (s, l, c, u) {
                function p(t) {
                    return t.replace(/([A-Z])/g, function (t) {
                        return "-" + t.toLowerCase()
                    })
                }

                function d(t) {
                    if (angular.isNumber(t) && (t = new Date(t)), t) {
                        if (angular.isDate(t) && !isNaN(t)) return t;
                        if (angular.isString(t)) {
                            var e = r.parse(t, h, s.date) || new Date(t);
                            return isNaN(e) ? void 0 : e
                        }
                        return void 0
                    }
                    return null
                }

                function f(t, e) {
                    var n = t || e;
                    if (angular.isNumber(n) && (n = new Date(n)), n) {
                        if (angular.isDate(n) && !isNaN(n)) return !0;
                        if (angular.isString(n)) {
                            var i = r.parse(n, h) || new Date(n);
                            return !isNaN(i)
                        }
                        return !1
                    }
                    return !0
                }
                var h, m = angular.isDefined(c.closeOnDateSelection) ? s.$parent.$eval(c.closeOnDateSelection) : a.closeOnDateSelection,
                    g = angular.isDefined(c.datepickerAppendToBody) ? s.$parent.$eval(c.datepickerAppendToBody) : a.appendToBody;
                s.showButtonBar = angular.isDefined(c.showButtonBar) ? s.$parent.$eval(c.showButtonBar) : a.showButtonBar, s.getText = function (t) {
                    return s[t + "Text"] || a[t + "Text"]
                };
                var v = !1;
                if (a.html5Types[c.type] ? (h = a.html5Types[c.type], v = !0) : (h = c.datepickerPopup || a.datepickerPopup, c.$observe("datepickerPopup", function (t) {
                        var e = t || a.datepickerPopup;
                        if (e !== h && (h = e, u.$modelValue = null, !h)) throw new Error("datepickerPopup must have a date format specified.")
                    })), !h) throw new Error("datepickerPopup must have a date format specified.");
                if (v && c.datepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
                var y = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                y.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var b = angular.element(y.children()[0]);
                if (v && "month" == c.type && (b.attr("datepicker-mode", '"month"'), b.attr("min-mode", "month")), c.datepickerOptions) {
                    var w = s.$parent.$eval(c.datepickerOptions);
                    w.initDate && (s.initDate = w.initDate, b.attr("init-date", "initDate"), delete w.initDate), angular.forEach(w, function (t, e) {
                        b.attr(p(e), t)
                    })
                }
                s.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation"], function (t) {
                    if (c[t]) {
                        var n = e(c[t]);
                        if (s.$parent.$watch(n, function (e) {
                                s.watchData[t] = e
                            }), b.attr(p(t), "watchData." + t), "datepickerMode" === t) {
                            var i = n.assign;
                            s.$watch("watchData." + t, function (t, e) {
                                t !== e && i(s.$parent, t)
                            })
                        }
                    }
                }), c.dateDisabled && b.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), c.showWeeks && b.attr("show-weeks", c.showWeeks), c.customClass && b.attr("custom-class", "customClass({ date: date, mode: mode })"), v ? u.$formatters.push(function (t) {
                    return s.date = t, t
                }) : (u.$$parserName = "date", u.$validators.date = f, u.$parsers.unshift(d), u.$formatters.push(function (t) {
                    return s.date = t, u.$isEmpty(t) ? t : o(t, h)
                })), s.dateSelection = function (t) {
                    angular.isDefined(t) && (s.date = t);
                    var e = s.date ? o(s.date, h) : "";
                    l.val(e), u.$setViewValue(e), m && (s.isOpen = !1, l[0].focus())
                }, u.$viewChangeListeners.push(function () {
                    s.date = r.parse(u.$viewValue, h, s.date) || new Date(u.$viewValue)
                });
                var $ = function (t) {
                        s.isOpen && t.target !== l[0] && s.$apply(function () {
                            s.isOpen = !1
                        })
                    },
                    x = function (t) {
                        s.keydown(t)
                    };
                l.bind("keydown", x), s.keydown = function (t) {
                    27 === t.which ? (t.preventDefault(), s.isOpen && t.stopPropagation(), s.close()) : 40 !== t.which || s.isOpen || (s.isOpen = !0)
                }, s.$watch("isOpen", function (t) {
                    t ? (s.$broadcast("datepicker.focus"), s.position = g ? i.offset(l) : i.position(l), s.position.top = s.position.top + l.prop("offsetHeight"), n.bind("click", $)) : n.unbind("click", $)
                }), s.select = function (t) {
                    if ("today" === t) {
                        var e = new Date;
                        angular.isDate(s.date) ? (t = new Date(s.date), t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate())) : t = new Date(e.setHours(0, 0, 0, 0))
                    }
                    s.dateSelection(t)
                }, s.close = function () {
                    s.isOpen = !1, l[0].focus()
                };
                var k = t(y)(s);
                y.remove(), g ? n.find("body").append(k) : l.after(k), s.$on("$destroy", function () {
                    k.remove(), l.unbind("keydown", x), n.unbind("click", $)
                })
            }
        }
    }]).directive("datepickerPopupWrap", function () {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            templateUrl: "template/datepicker/popup.html",
            link: function (t, e) {
                e.bind("click", function (t) {
                    t.preventDefault(), t.stopPropagation()
                })
            }
        }
    }), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("dropdownConfig", {
        openClass: "open"
    }).service("dropdownService", ["$document", "$rootScope", function (t, e) {
        var n = null;
        this.open = function (e) {
            n || (t.bind("click", i), t.bind("keydown", o)), n && n !== e && (n.isOpen = !1), n = e
        }, this.close = function (e) {
            n === e && (n = null, t.unbind("click", i), t.unbind("keydown", o))
        };
        var i = function (t) {
                if (n && (!t || "disabled" !== n.getAutoClose())) {
                    var i = n.getToggleElement();
                    if (!(t && i && i[0].contains(t.target))) {
                        var o = n.getElement();
                        t && "outsideClick" === n.getAutoClose() && o && o[0].contains(t.target) || (n.isOpen = !1, e.$$phase || n.$apply())
                    }
                }
            },
            o = function (t) {
                27 === t.which && (n.focusToggleElement(), i())
            }
    }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", "$position", "$document", function (t, e, n, i, o, r, a, s) {
        var l, c = this,
            u = t.$new(),
            p = i.openClass,
            d = angular.noop,
            f = e.onToggle ? n(e.onToggle) : angular.noop,
            h = !1;
        this.init = function (i) {
            c.$element = i, e.isOpen && (l = n(e.isOpen), d = l.assign, t.$watch(l, function (t) {
                u.isOpen = !!t
            })), h = angular.isDefined(e.dropdownAppendToBody), h && c.dropdownMenu && (s.find("body").append(c.dropdownMenu), i.on("$destroy", function () {
                c.dropdownMenu.remove()
            }))
        }, this.toggle = function (t) {
            return u.isOpen = arguments.length ? !!t : !u.isOpen
        }, this.isOpen = function () {
            return u.isOpen
        }, u.getToggleElement = function () {
            return c.toggleElement
        }, u.getAutoClose = function () {
            return e.autoClose || "always"
        }, u.getElement = function () {
            return c.$element
        }, u.focusToggleElement = function () {
            c.toggleElement && c.toggleElement[0].focus()
        }, u.$watch("isOpen", function (e, n) {
            if (h && c.dropdownMenu) {
                var i = a.positionElements(c.$element, c.dropdownMenu, "bottom-left", !0);
                c.dropdownMenu.css({
                    top: i.top + "px",
                    left: i.left + "px",
                    display: e ? "block" : "none"
                })
            }
            r[e ? "addClass" : "removeClass"](c.$element, p), e ? (u.focusToggleElement(), o.open(u)) : o.close(u), d(t, e), angular.isDefined(e) && e !== n && f(t, {
                open: !!e
            })
        }), t.$on("$locationChangeSuccess", function () {
            u.isOpen = !1
        }), t.$on("$destroy", function () {
            u.$destroy()
        })
    }]).directive("dropdown", function () {
        return {
            controller: "DropdownController",
            link: function (t, e, n, i) {
                i.init(e)
            }
        }
    }).directive("dropdownMenu", function () {
        return {
            restrict: "AC",
            require: "?^dropdown",
            link: function (t, e, n, i) {
                i && (i.dropdownMenu = e)
            }
        }
    }).directive("dropdownToggle", function () {
        return {
            require: "?^dropdown",
            link: function (t, e, n, i) {
                if (i) {
                    i.toggleElement = e;
                    var o = function (o) {
                        o.preventDefault(), e.hasClass("disabled") || n.disabled || t.$apply(function () {
                            i.toggle()
                        })
                    };
                    e.bind("click", o), e.attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), t.$watch(i.isOpen, function (t) {
                        e.attr("aria-expanded", !!t)
                    }), t.$on("$destroy", function () {
                        e.unbind("click", o)
                    })
                }
            }
        }
    }), angular.module("ui.bootstrap.modal", []).factory("$$stackedMap", function () {
        return {
            createNew: function () {
                var t = [];
                return {
                    add: function (e, n) {
                        t.push({
                            key: e,
                            value: n
                        })
                    },
                    get: function (e) {
                        for (var n = 0; n < t.length; n++)
                            if (e == t[n].key) return t[n]
                    },
                    keys: function () {
                        for (var e = [], n = 0; n < t.length; n++) e.push(t[n].key);
                        return e
                    },
                    top: function () {
                        return t[t.length - 1]
                    },
                    remove: function (e) {
                        for (var n = -1, i = 0; i < t.length; i++)
                            if (e == t[i].key) {
                                n = i;
                                break
                            } return t.splice(n, 1)[0]
                    },
                    removeTop: function () {
                        return t.splice(t.length - 1, 1)[0]
                    },
                    length: function () {
                        return t.length
                    }
                }
            }
        }
    }).directive("modalBackdrop", ["$timeout", function (t) {
        function e(e) {
            e.animate = !1, t(function () {
                e.animate = !0
            })
        }
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            compile: function (t, n) {
                return t.addClass(n.backdropClass), e
            }
        }
    }]).directive("modalWindow", ["$modalStack", "$q", function (t, e) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: function (t, e) {
                return e.templateUrl || "template/modal/window.html"
            },
            link: function (n, i, o) {
                i.addClass(o.windowClass || ""), n.size = o.size, n.close = function (e) {
                    var n = t.getTop();
                    n && n.value.backdrop && "static" != n.value.backdrop && e.target === e.currentTarget && (e.preventDefault(), e.stopPropagation(), t.dismiss(n.key, "backdrop click"))
                }, n.$isRendered = !0;
                var r = e.defer();
                o.$observe("modalRender", function (t) {
                    "true" == t && r.resolve()
                }), r.promise.then(function () {
                    n.animate = !0;
                    var e = i[0].querySelectorAll("[autofocus]");
                    e.length ? e[0].focus() : i[0].focus();
                    var o = t.getTop();
                    o && t.modalRendered(o.key)
                })
            }
        }
    }]).directive("modalAnimationClass", [function () {
        return {
            compile: function (t, e) {
                e.modalAnimation && t.addClass(e.modalAnimationClass)
            }
        }
    }]).directive("modalTransclude", function () {
        return {
            link: function (t, e, n, i, o) {
                o(t.$parent, function (t) {
                    e.empty(), e.append(t)
                })
            }
        }
    }).factory("$modalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (t, e, n, i, o, r) {
        function a() {
            for (var t = -1, e = h.keys(), n = 0; n < e.length; n++) h.get(e[n]).value.backdrop && (t = n);
            return t
        }

        function s(t) {
            var e = n.find("body").eq(0),
                i = h.get(t).value;
            h.remove(t), c(i.modalDomEl, i.modalScope, function () {
                e.toggleClass(f, h.length() > 0), l()
            })
        }

        function l() {
            if (p && -1 == a()) {
                var t = d;
                c(p, d, function () {
                    t = null
                }), p = void 0, d = void 0
            }
        }

        function c(n, i, r) {
            function a() {
                a.done || (a.done = !0, n.remove(), i.$destroy(), r && r())
            }
            i.animate = !1, n.attr("modal-animation") && t.enabled() ? n.one("$animate:close", function () {
                o.$evalAsync(a)
            }) : e(a)
        }

        function u(t, e, n) {
            return !t.value.modalScope.$broadcast("modal.closing", e, n).defaultPrevented
        }
        var p, d, f = "modal-open",
            h = r.createNew(),
            m = {};
        return o.$watch(a, function (t) {
            d && (d.index = t)
        }), n.bind("keydown", function (t) {
            var e;
            27 === t.which && (e = h.top(), e && e.value.keyboard && (t.preventDefault(), o.$apply(function () {
                m.dismiss(e.key, "escape key press")
            })))
        }), m.open = function (t, e) {
            var r = n[0].activeElement;
            h.add(t, {
                deferred: e.deferred,
                renderDeferred: e.renderDeferred,
                modalScope: e.scope,
                backdrop: e.backdrop,
                keyboard: e.keyboard
            });
            var s = n.find("body").eq(0),
                l = a();
            if (l >= 0 && !p) {
                d = o.$new(!0), d.index = l;
                var c = angular.element('<div modal-backdrop="modal-backdrop"></div>');
                c.attr("backdrop-class", e.backdropClass), e.animation && c.attr("modal-animation", "true"), p = i(c)(d), s.append(p)
            }
            var u = angular.element('<div modal-window="modal-window"></div>');
            u.attr({
                "template-url": e.windowTemplateUrl,
                "window-class": e.windowClass,
                size: e.size,
                index: h.length() - 1,
                animate: "animate"
            }).html(e.content), e.animation && u.attr("modal-animation", "true");
            var m = i(u)(e.scope);
            h.top().value.modalDomEl = m, h.top().value.modalOpener = r, s.append(m), s.addClass(f)
        }, m.close = function (t, e) {
            var n = h.get(t);
            return n && u(n, e, !0) ? (n.value.deferred.resolve(e), s(t), n.value.modalOpener.focus(), !0) : !n
        }, m.dismiss = function (t, e) {
            var n = h.get(t);
            return n && u(n, e, !1) ? (n.value.deferred.reject(e), s(t), n.value.modalOpener.focus(), !0) : !n
        }, m.dismissAll = function (t) {
            for (var e = this.getTop(); e && this.dismiss(e.key, t);) e = this.getTop()
        }, m.getTop = function () {
            return h.top()
        }, m.modalRendered = function (t) {
            var e = h.get(t);
            e && e.value.renderDeferred.resolve()
        }, m
    }]).provider("$modal", function () {
        var t = {
            options: {
                animation: !0,
                backdrop: !0,
                keyboard: !0
            },
            $get: ["$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$modalStack", function (e, n, i, o, r, a) {
                function s(t) {
                    return t.template ? i.when(t.template) : o(angular.isFunction(t.templateUrl) ? t.templateUrl() : t.templateUrl)
                }

                function l(t) {
                    var n = [];
                    return angular.forEach(t, function (t) {
                        (angular.isFunction(t) || angular.isArray(t)) && n.push(i.when(e.invoke(t)))
                    }), n
                }
                var c = {};
                return c.open = function (e) {
                    var o = i.defer(),
                        c = i.defer(),
                        u = i.defer(),
                        p = {
                            result: o.promise,
                            opened: c.promise,
                            rendered: u.promise,
                            close: function (t) {
                                return a.close(p, t)
                            },
                            dismiss: function (t) {
                                return a.dismiss(p, t)
                            }
                        };
                    if (e = angular.extend({}, t.options, e), e.resolve = e.resolve || {}, !e.template && !e.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var d = i.all([s(e)].concat(l(e.resolve)));
                    return d.then(function (t) {
                        var i = (e.scope || n).$new();
                        i.$close = p.close, i.$dismiss = p.dismiss;
                        var s, l = {},
                            c = 1;
                        e.controller && (l.$scope = i, l.$modalInstance = p, angular.forEach(e.resolve, function (e, n) {
                            l[n] = t[c++]
                        }), s = r(e.controller, l), e.controllerAs && (i[e.controllerAs] = s)), a.open(p, {
                            scope: i,
                            deferred: o,
                            renderDeferred: u,
                            content: t[0],
                            animation: e.animation,
                            backdrop: e.backdrop,
                            keyboard: e.keyboard,
                            backdropClass: e.backdropClass,
                            windowClass: e.windowClass,
                            windowTemplateUrl: e.windowTemplateUrl,
                            size: e.size
                        })
                    }, function (t) {
                        o.reject(t)
                    }), d.then(function () {
                        c.resolve(!0)
                    }, function (t) {
                        c.reject(t)
                    }), p
                }, c
            }]
        };
        return t
    }), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function (t, e, n) {
        var i = this,
            o = {
                $setViewValue: angular.noop
            },
            r = e.numPages ? n(e.numPages).assign : angular.noop;
        this.init = function (a, s) {
            o = a, this.config = s, o.$render = function () {
                i.render()
            }, e.itemsPerPage ? t.$parent.$watch(n(e.itemsPerPage), function (e) {
                i.itemsPerPage = parseInt(e, 10), t.totalPages = i.calculateTotalPages()
            }) : this.itemsPerPage = s.itemsPerPage, t.$watch("totalItems", function () {
                t.totalPages = i.calculateTotalPages()
            }), t.$watch("totalPages", function (e) {
                r(t.$parent, e), t.page > e ? t.selectPage(e) : o.$render()
            })
        }, this.calculateTotalPages = function () {
            var e = this.itemsPerPage < 1 ? 1 : Math.ceil(t.totalItems / this.itemsPerPage);
            return Math.max(e || 0, 1)
        }, this.render = function () {
            t.page = parseInt(o.$viewValue, 10) || 1
        }, t.selectPage = function (e, n) {
            t.page !== e && e > 0 && e <= t.totalPages && (n && n.target && n.target.blur(), o.$setViewValue(e), o.$render())
        }, t.getText = function (e) {
            return t[e + "Text"] || i.config[e + "Text"]
        }, t.noPrevious = function () {
            return 1 === t.page
        }, t.noNext = function () {
            return t.page === t.totalPages
        }
    }]).constant("paginationConfig", {
        itemsPerPage: 10,
        boundaryLinks: !1,
        directionLinks: !0,
        firstText: "First",
        previousText: "Previous",
        nextText: "Next",
        lastText: "Last",
        rotate: !0
    }).directive("pagination", ["$parse", "paginationConfig", function (t, e) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@"
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function (n, i, o, r) {
                function a(t, e, n) {
                    return {
                        number: t,
                        text: e,
                        active: n
                    }
                }

                function s(t, e) {
                    var n = [],
                        i = 1,
                        o = e,
                        r = angular.isDefined(u) && e > u;
                    r && (p ? (i = Math.max(t - Math.floor(u / 2), 1), o = i + u - 1, o > e && (o = e, i = o - u + 1)) : (i = (Math.ceil(t / u) - 1) * u + 1, o = Math.min(i + u - 1, e)));
                    for (var s = i; o >= s; s++) {
                        var l = a(s, s, s === t);
                        n.push(l)
                    }
                    if (r && !p) {
                        if (i > 1) {
                            var c = a(i - 1, "...", !1);
                            n.unshift(c)
                        }
                        if (e > o) {
                            var d = a(o + 1, "...", !1);
                            n.push(d)
                        }
                    }
                    return n
                }
                var l = r[0],
                    c = r[1];
                if (c) {
                    var u = angular.isDefined(o.maxSize) ? n.$parent.$eval(o.maxSize) : e.maxSize,
                        p = angular.isDefined(o.rotate) ? n.$parent.$eval(o.rotate) : e.rotate;
                    n.boundaryLinks = angular.isDefined(o.boundaryLinks) ? n.$parent.$eval(o.boundaryLinks) : e.boundaryLinks, n.directionLinks = angular.isDefined(o.directionLinks) ? n.$parent.$eval(o.directionLinks) : e.directionLinks, l.init(c, e), o.maxSize && n.$parent.$watch(t(o.maxSize), function (t) {
                        u = parseInt(t, 10), l.render()
                    });
                    var d = l.render;
                    l.render = function () {
                        d(), n.page > 0 && n.page <= n.totalPages && (n.pages = s(n.page, n.totalPages))
                    }
                }
            }
        }
    }]).constant("pagerConfig", {
        itemsPerPage: 10,
        previousText: "« Previous",
        nextText: "Next »",
        align: !0
    }).directive("pager", ["pagerConfig", function (t) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@"
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function (e, n, i, o) {
                var r = o[0],
                    a = o[1];
                a && (e.align = angular.isDefined(i.align) ? e.$parent.$eval(i.align) : t.align, r.init(a, t))
            }
        }
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
        function t(t) {
            var e = /[A-Z]/g,
                n = "-";
            return t.replace(e, function (t, e) {
                return (e ? n : "") + t.toLowerCase()
            })
        }
        var e = {
                placement: "top",
                animation: !0,
                popupDelay: 0,
                useContentExp: !1
            },
            n = {
                mouseenter: "mouseleave",
                click: "click",
                focus: "blur"
            },
            i = {};
        this.options = function (t) {
            angular.extend(i, t)
        }, this.setTriggers = function (t) {
            angular.extend(n, t)
        }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function (o, r, a, s, l, c) {
            return function (o, u, p, d) {
                function f(t) {
                    var e = t || d.trigger || p,
                        i = n[e] || e;
                    return {
                        show: e,
                        hide: i
                    }
                }
                d = angular.extend({}, e, i, d);
                var h = t(o),
                    m = c.startSymbol(),
                    g = c.endSymbol(),
                    v = "<div " + h + "-popup " + 'title="' + m + "title" + g + '" ' + (d.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + m + "content" + g + '" ') + 'placement="' + m + "placement" + g + '" ' + 'popup-class="' + m + "popupClass" + g + '" ' + 'animation="animation" ' + 'is-open="isOpen"' + 'origin-scope="origScope" ' + ">" + "</div>";
                return {
                    restrict: "EA",
                    compile: function () {
                        var t = r(v);
                        return function (e, n, i) {
                            function r() {
                                O.isOpen ? p() : c()
                            }

                            function c() {
                                (!_ || e.$eval(i[u + "Enable"])) && (y(), O.popupDelay ? T || (T = a(h, O.popupDelay, !1), T.then(function (t) {
                                    t()
                                })) : h()())
                            }

                            function p() {
                                e.$apply(function () {
                                    m()
                                })
                            }

                            function h() {
                                return T = null, E && (a.cancel(E), E = null), (d.useContentExp ? O.contentExp() : O.content) ? (g(), k.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), O.$digest(), A(), O.isOpen = !0, O.$apply(), A) : angular.noop
                            }

                            function m() {
                                O.isOpen = !1, a.cancel(T), T = null, O.animation ? E || (E = a(v, 500)) : v()
                            }

                            function g() {
                                k && v(), C = O.$new(), k = t(C, function (t) {
                                    S ? s.find("body").append(t) : n.after(t)
                                }), C.$watch(function () {
                                    a(A, 0, !1)
                                }), d.useContentExp && C.$watch("contentExp()", function (t) {
                                    !t && O.isOpen && m()
                                })
                            }

                            function v() {
                                E = null, k && (k.remove(), k = null), C && (C.$destroy(), C = null)
                            }

                            function y() {
                                b(), w(), $()
                            }

                            function b() {
                                O.popupClass = i[u + "Class"]
                            }

                            function w() {
                                var t = i[u + "Placement"];
                                O.placement = angular.isDefined(t) ? t : d.placement
                            }

                            function $() {
                                var t = i[u + "PopupDelay"],
                                    e = parseInt(t, 10);
                                O.popupDelay = isNaN(e) ? d.popupDelay : e
                            }

                            function x() {
                                var t = i[u + "Trigger"];
                                I(), D = f(t), D.show === D.hide ? n.bind(D.show, r) : (n.bind(D.show, c), n.bind(D.hide, p))
                            }
                            var k, C, E, T, S = angular.isDefined(d.appendToBody) ? d.appendToBody : !1,
                                D = f(void 0),
                                _ = angular.isDefined(i[u + "Enable"]),
                                O = e.$new(!0),
                                A = function () {
                                    if (k) {
                                        var t = l.positionElements(n, k, O.placement, S);
                                        t.top += "px", t.left += "px", k.css(t)
                                    }
                                };
                            O.origScope = e, O.isOpen = !1, O.contentExp = function () {
                                return e.$eval(i[o])
                            }, d.useContentExp || i.$observe(o, function (t) {
                                O.content = t, !t && O.isOpen && m()
                            }), i.$observe("disabled", function (t) {
                                t && O.isOpen && m()
                            }), i.$observe(u + "Title", function (t) {
                                O.title = t
                            });
                            var I = function () {
                                n.unbind(D.show, c), n.unbind(D.hide, p)
                            };
                            x();
                            var M = e.$eval(i[u + "Animation"]);
                            O.animation = angular.isDefined(M) ? !!M : d.animation;
                            var R = e.$eval(i[u + "AppendToBody"]);
                            S = angular.isDefined(R) ? R : S, S && e.$on("$locationChangeSuccess", function () {
                                O.isOpen && m()
                            }), e.$on("$destroy", function () {
                                a.cancel(E), a.cancel(T), I(), v(), O = null
                            })
                        }
                    }
                }
            }
        }]
    }).directive("tooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (t, e, n, i) {
        return {
            link: function (o, r, a) {
                var s, l, c, u = o.$eval(a.tooltipTemplateTranscludeScope),
                    p = 0,
                    d = function () {
                        l && (l.remove(), l = null), s && (s.$destroy(), s = null), c && (t.leave(c).then(function () {
                            l = null
                        }), l = c, c = null)
                    };
                o.$watch(e.parseAsResourceUrl(a.tooltipTemplateTransclude), function (e) {
                    var a = ++p;
                    e ? (i(e, !0).then(function (i) {
                        if (a === p) {
                            var o = u.$new(),
                                l = i,
                                f = n(l)(o, function (e) {
                                    d(), t.enter(e, r)
                                });
                            s = o, c = f, s.$emit("$includeContentLoaded", e)
                        }
                    }, function () {
                        a === p && (d(), o.$emit("$includeContentError", e))
                    }), o.$emit("$includeContentRequested", e)) : d()
                }), o.$on("$destroy", d)
            }
        }
    }]).directive("tooltipClasses", function () {
        return {
            restrict: "A",
            link: function (t, e, n) {
                t.placement && e.addClass(t.placement), t.popupClass && e.addClass(t.popupClass), t.animation() && e.addClass(n.tooltipAnimationClass)
            }
        }
    }).directive("tooltipPopup", function () {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-popup.html"
        }
    }).directive("tooltip", ["$tooltip", function (t) {
        return t("tooltip", "tooltip", "mouseenter")
    }]).directive("tooltipTemplatePopup", function () {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                contentExp: "&",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&",
                originScope: "&"
            },
            templateUrl: "template/tooltip/tooltip-template-popup.html"
        }
    }).directive("tooltipTemplate", ["$tooltip", function (t) {
        return t("tooltipTemplate", "tooltip", "mouseenter", {
            useContentExp: !0
        })
    }]).directive("tooltipHtmlPopup", function () {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                contentExp: "&",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-popup.html"
        }
    }).directive("tooltipHtml", ["$tooltip", function (t) {
        return t("tooltipHtml", "tooltip", "mouseenter", {
            useContentExp: !0
        })
    }]).directive("tooltipHtmlUnsafePopup", function () {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
        }
    }).value("tooltipHtmlUnsafeSuppressDeprecated", !1).directive("tooltipHtmlUnsafe", ["$tooltip", "tooltipHtmlUnsafeSuppressDeprecated", "$log", function (t, e, n) {
        return e || n.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."), t("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup", function () {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                contentExp: "&",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&",
                originScope: "&"
            },
            templateUrl: "template/popover/popover-template.html"
        }
    }).directive("popoverTemplate", ["$tooltip", function (t) {
        return t("popoverTemplate", "popover", "click", {
            useContentExp: !0
        })
    }]).directive("popoverPopup", function () {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                content: "@",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/popover/popover.html"
        }
    }).directive("popover", ["$tooltip", function (t) {
        return t("popover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
        animate: !0,
        max: 100
    }).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function (t, e, n) {
        var i = this,
            o = angular.isDefined(e.animate) ? t.$parent.$eval(e.animate) : n.animate;
        this.bars = [], t.max = angular.isDefined(t.max) ? t.max : n.max, this.addBar = function (e, n) {
            o || n.css({
                transition: "none"
            }), this.bars.push(e), e.$watch("value", function (n) {
                e.percent = +(100 * n / t.max).toFixed(2)
            }), e.$on("$destroy", function () {
                n = null, i.removeBar(e)
            })
        }, this.removeBar = function (t) {
            this.bars.splice(this.bars.indexOf(t), 1)
        }
    }]).directive("progress", function () {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            require: "progress",
            scope: {},
            templateUrl: "template/progressbar/progress.html"
        }
    }).directive("bar", function () {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: "^progress",
            scope: {
                value: "=",
                max: "=?",
                type: "@"
            },
            templateUrl: "template/progressbar/bar.html",
            link: function (t, e, n, i) {
                i.addBar(t, e)
            }
        }
    }).directive("progressbar", function () {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            scope: {
                value: "=",
                max: "=?",
                type: "@"
            },
            templateUrl: "template/progressbar/progressbar.html",
            link: function (t, e, n, i) {
                i.addBar(t, angular.element(e.children()[0]))
            }
        }
    }), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
        max: 5,
        stateOn: null,
        stateOff: null
    }).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function (t, e, n) {
        var i = {
            $setViewValue: angular.noop
        };
        this.init = function (o) {
            i = o, i.$render = this.render, i.$formatters.push(function (t) {
                return angular.isNumber(t) && t << 0 !== t && (t = Math.round(t)), t
            }), this.stateOn = angular.isDefined(e.stateOn) ? t.$parent.$eval(e.stateOn) : n.stateOn, this.stateOff = angular.isDefined(e.stateOff) ? t.$parent.$eval(e.stateOff) : n.stateOff;
            var r = angular.isDefined(e.ratingStates) ? t.$parent.$eval(e.ratingStates) : new Array(angular.isDefined(e.max) ? t.$parent.$eval(e.max) : n.max);
            t.range = this.buildTemplateObjects(r)
        }, this.buildTemplateObjects = function (t) {
            for (var e = 0, n = t.length; n > e; e++) t[e] = angular.extend({
                index: e
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, t[e]);
            return t
        }, t.rate = function (e) {
            !t.readonly && e >= 0 && e <= t.range.length && (i.$setViewValue(e), i.$render())
        }, t.enter = function (e) {
            t.readonly || (t.value = e), t.onHover({
                value: e
            })
        }, t.reset = function () {
            t.value = i.$viewValue, t.onLeave()
        }, t.onKeydown = function (e) {
            /(37|38|39|40)/.test(e.which) && (e.preventDefault(), e.stopPropagation(), t.rate(t.value + (38 === e.which || 39 === e.which ? 1 : -1)))
        }, this.render = function () {
            t.value = i.$viewValue
        }
    }]).directive("rating", function () {
        return {
            restrict: "EA",
            require: ["rating", "ngModel"],
            scope: {
                readonly: "=?",
                onHover: "&",
                onLeave: "&"
            },
            controller: "RatingController",
            templateUrl: "template/rating/rating.html",
            replace: !0,
            link: function (t, e, n, i) {
                var o = i[0],
                    r = i[1];
                o.init(r)
            }
        }
    }), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (t) {
        var e = this,
            n = e.tabs = t.tabs = [];
        e.select = function (t) {
            angular.forEach(n, function (e) {
                e.active && e !== t && (e.active = !1, e.onDeselect())
            }), t.active = !0, t.onSelect()
        }, e.addTab = function (t) {
            n.push(t), 1 === n.length && t.active !== !1 ? t.active = !0 : t.active ? e.select(t) : t.active = !1
        }, e.removeTab = function (t) {
            var o = n.indexOf(t);
            if (t.active && n.length > 1 && !i) {
                var r = o == n.length - 1 ? o - 1 : o + 1;
                e.select(n[r])
            }
            n.splice(o, 1)
        };
        var i;
        t.$on("$destroy", function () {
            i = !0
        })
    }]).directive("tabset", function () {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@"
            },
            controller: "TabsetController",
            templateUrl: "template/tabs/tabset.html",
            link: function (t, e, n) {
                t.vertical = angular.isDefined(n.vertical) ? t.$parent.$eval(n.vertical) : !1, t.justified = angular.isDefined(n.justified) ? t.$parent.$eval(n.justified) : !1
            }
        }
    }).directive("tab", ["$parse", "$log", function (t, e) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function () {},
            compile: function (n, i, o) {
                return function (n, i, r, a) {
                    n.$watch("active", function (t) {
                        t && a.select(n)
                    }), n.disabled = !1, r.disable && n.$parent.$watch(t(r.disable), function (t) {
                        n.disabled = !!t
                    }), r.disabled && (e.warn('Use of "disabled" attribute has been deprecated, please use "disable"'), n.$parent.$watch(t(r.disabled), function (t) {
                        n.disabled = !!t
                    })), n.select = function () {
                        n.disabled || (n.active = !0)
                    }, a.addTab(n), n.$on("$destroy", function () {
                        a.removeTab(n)
                    }), n.$transcludeFn = o
                }
            }
        }
    }]).directive("tabHeadingTransclude", [function () {
        return {
            restrict: "A",
            require: "^tab",
            link: function (t, e) {
                t.$watch("headingElement", function (t) {
                    t && (e.html(""), e.append(t))
                })
            }
        }
    }]).directive("tabContentTransclude", function () {
        function t(t) {
            return t.tagName && (t.hasAttribute("tab-heading") || t.hasAttribute("data-tab-heading") || "tab-heading" === t.tagName.toLowerCase() || "data-tab-heading" === t.tagName.toLowerCase())
        }
        return {
            restrict: "A",
            require: "^tabset",
            link: function (e, n, i) {
                var o = e.$eval(i.tabContentTransclude);
                o.$transcludeFn(o.$parent, function (e) {
                    angular.forEach(e, function (e) {
                        t(e) ? o.headingElement = e : n.append(e)
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: !0,
        meridians: null,
        readonlyInput: !1,
        mousewheel: !0,
        arrowkeys: !0
    }).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function (t, e, n, i, o, r) {
        function a() {
            var e = parseInt(t.hours, 10),
                n = t.showMeridian ? e > 0 && 13 > e : e >= 0 && 24 > e;
            return n ? (t.showMeridian && (12 === e && (e = 0), t.meridian === m[1] && (e += 12)), e) : void 0
        }

        function s() {
            var e = parseInt(t.minutes, 10);
            return e >= 0 && 60 > e ? e : void 0
        }

        function l(t) {
            return angular.isDefined(t) && t.toString().length < 2 ? "0" + t : t.toString()
        }

        function c(t) {
            u(), h.$setViewValue(new Date(f)), p(t)
        }

        function u() {
            h.$setValidity("time", !0), t.invalidHours = !1, t.invalidMinutes = !1
        }

        function p(e) {
            var n = f.getHours(),
                i = f.getMinutes();
            t.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12), t.hours = "h" === e ? n : l(n), "m" !== e && (t.minutes = l(i)), t.meridian = f.getHours() < 12 ? m[0] : m[1]
        }

        function d(t) {
            var e = new Date(f.getTime() + 6e4 * t);
            f.setHours(e.getHours(), e.getMinutes()), c()
        }
        var f = new Date,
            h = {
                $setViewValue: angular.noop
            },
            m = angular.isDefined(e.meridians) ? t.$parent.$eval(e.meridians) : r.meridians || o.DATETIME_FORMATS.AMPMS;
        this.init = function (n, i) {
            h = n, h.$render = this.render, h.$formatters.unshift(function (t) {
                return t ? new Date(t) : null
            });
            var o = i.eq(0),
                a = i.eq(1),
                s = angular.isDefined(e.mousewheel) ? t.$parent.$eval(e.mousewheel) : r.mousewheel;
            s && this.setupMousewheelEvents(o, a);
            var l = angular.isDefined(e.arrowkeys) ? t.$parent.$eval(e.arrowkeys) : r.arrowkeys;
            l && this.setupArrowkeyEvents(o, a), t.readonlyInput = angular.isDefined(e.readonlyInput) ? t.$parent.$eval(e.readonlyInput) : r.readonlyInput, this.setupInputEvents(o, a)
        };
        var g = r.hourStep;
        e.hourStep && t.$parent.$watch(n(e.hourStep), function (t) {
            g = parseInt(t, 10)
        });
        var v = r.minuteStep;
        e.minuteStep && t.$parent.$watch(n(e.minuteStep), function (t) {
            v = parseInt(t, 10)
        }), t.showMeridian = r.showMeridian, e.showMeridian && t.$parent.$watch(n(e.showMeridian), function (e) {
            if (t.showMeridian = !!e, h.$error.time) {
                var n = a(),
                    i = s();
                angular.isDefined(n) && angular.isDefined(i) && (f.setHours(n), c())
            } else p()
        }), this.setupMousewheelEvents = function (e, n) {
            var i = function (t) {
                t.originalEvent && (t = t.originalEvent);
                var e = t.wheelDelta ? t.wheelDelta : -t.deltaY;
                return t.detail || e > 0
            };
            e.bind("mousewheel wheel", function (e) {
                t.$apply(i(e) ? t.incrementHours() : t.decrementHours()), e.preventDefault()
            }), n.bind("mousewheel wheel", function (e) {
                t.$apply(i(e) ? t.incrementMinutes() : t.decrementMinutes()), e.preventDefault()
            })
        }, this.setupArrowkeyEvents = function (e, n) {
            e.bind("keydown", function (e) {
                38 === e.which ? (e.preventDefault(), t.incrementHours(), t.$apply()) : 40 === e.which && (e.preventDefault(), t.decrementHours(), t.$apply())
            }), n.bind("keydown", function (e) {
                38 === e.which ? (e.preventDefault(), t.incrementMinutes(), t.$apply()) : 40 === e.which && (e.preventDefault(), t.decrementMinutes(), t.$apply())
            })
        }, this.setupInputEvents = function (e, n) {
            if (t.readonlyInput) return t.updateHours = angular.noop, t.updateMinutes = angular.noop, void 0;
            var i = function (e, n) {
                h.$setViewValue(null), h.$setValidity("time", !1), angular.isDefined(e) && (t.invalidHours = e), angular.isDefined(n) && (t.invalidMinutes = n)
            };
            t.updateHours = function () {
                var t = a();
                angular.isDefined(t) ? (f.setHours(t), c("h")) : i(!0)
            }, e.bind("blur", function () {
                !t.invalidHours && t.hours < 10 && t.$apply(function () {
                    t.hours = l(t.hours)
                })
            }), t.updateMinutes = function () {
                var t = s();
                angular.isDefined(t) ? (f.setMinutes(t), c("m")) : i(void 0, !0)
            }, n.bind("blur", function () {
                !t.invalidMinutes && t.minutes < 10 && t.$apply(function () {
                    t.minutes = l(t.minutes)
                })
            })
        }, this.render = function () {
            var t = h.$viewValue;
            isNaN(t) ? (h.$setValidity("time", !1), i.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (t && (f = t), u(), p())
        }, t.incrementHours = function () {
            d(60 * g)
        }, t.decrementHours = function () {
            d(60 * -g)
        }, t.incrementMinutes = function () {
            d(v)
        }, t.decrementMinutes = function () {
            d(-v)
        }, t.toggleMeridian = function () {
            d(720 * (f.getHours() < 12 ? 1 : -1))
        }
    }]).directive("timepicker", function () {
        return {
            restrict: "EA",
            require: ["timepicker", "?^ngModel"],
            controller: "TimepickerController",
            replace: !0,
            scope: {},
            templateUrl: "template/timepicker/timepicker.html",
            link: function (t, e, n, i) {
                var o = i[0],
                    r = i[1];
                r && o.init(r, e.find("input"))
            }
        }
    }), angular.module("ui.bootstrap.transition", []).value("$transitionSuppressDeprecated", !1).factory("$transition", ["$q", "$timeout", "$rootScope", "$log", "$transitionSuppressDeprecated", function (t, e, n, i, o) {
        function r(t) {
            for (var e in t)
                if (void 0 !== s.style[e]) return t[e]
        }
        o || i.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
        var a = function (i, o, r) {
                r = r || {};
                var s = t.defer(),
                    l = a[r.animation ? "animationEndEventName" : "transitionEndEventName"],
                    c = function () {
                        n.$apply(function () {
                            i.unbind(l, c), s.resolve(i)
                        })
                    };
                return l && i.bind(l, c), e(function () {
                    angular.isString(o) ? i.addClass(o) : angular.isFunction(o) ? o(i) : angular.isObject(o) && i.css(o), l || s.resolve(i)
                }), s.promise.cancel = function () {
                    l && i.unbind(l, c), s.reject("Transition cancelled")
                }, s.promise
            },
            s = document.createElement("trans"),
            l = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            c = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return a.transitionEndEventName = r(l), a.animationEndEventName = r(c), a
    }]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (t) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function (n) {
                var i = n.match(e);
                if (!i) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
                return {
                    itemName: i[3],
                    source: t(i[4]),
                    viewMapper: t(i[2] || i[1]),
                    modelMapper: t(i[1])
                }
            }
        }
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (t, e, n, i, o, r, a) {
        var s = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function (l, c, u, p) {
                var d, f = l.$eval(u.typeaheadMinLength) || 1,
                    h = l.$eval(u.typeaheadWaitMs) || 0,
                    m = l.$eval(u.typeaheadEditable) !== !1,
                    g = e(u.typeaheadLoading).assign || angular.noop,
                    v = e(u.typeaheadOnSelect),
                    y = u.typeaheadInputFormatter ? e(u.typeaheadInputFormatter) : void 0,
                    b = u.typeaheadAppendToBody ? l.$eval(u.typeaheadAppendToBody) : !1,
                    w = l.$eval(u.typeaheadFocusFirst) !== !1,
                    $ = e(u.ngModel).assign,
                    x = a.parse(u.typeahead),
                    k = l.$new();
                l.$on("$destroy", function () {
                    k.$destroy()
                });
                var C = "typeahead-" + k.$id + "-" + Math.floor(1e4 * Math.random());
                c.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": C
                });
                var E = angular.element("<div typeahead-popup></div>");
                E.attr({
                    id: C,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(u.typeaheadTemplateUrl) && E.attr("template-url", u.typeaheadTemplateUrl);
                var T = function () {
                        k.matches = [], k.activeIdx = -1, c.attr("aria-expanded", !1)
                    },
                    S = function (t) {
                        return C + "-option-" + t
                    };
                k.$watch("activeIdx", function (t) {
                    0 > t ? c.removeAttr("aria-activedescendant") : c.attr("aria-activedescendant", S(t))
                });
                var D = function (t) {
                    var e = {
                        $viewValue: t
                    };
                    g(l, !0), n.when(x.source(l, e)).then(function (n) {
                        var i = t === p.$viewValue;
                        if (i && d)
                            if (n && n.length > 0) {
                                k.activeIdx = w ? 0 : -1, k.matches.length = 0;
                                for (var o = 0; o < n.length; o++) e[x.itemName] = n[o], k.matches.push({
                                    id: S(o),
                                    label: x.viewMapper(k, e),
                                    model: n[o]
                                });
                                k.query = t, k.position = b ? r.offset(c) : r.position(c), k.position.top = k.position.top + c.prop("offsetHeight"), c.attr("aria-expanded", !0)
                            } else T();
                        i && g(l, !1)
                    }, function () {
                        T(), g(l, !1)
                    })
                };
                T(), k.query = void 0;
                var _, O = function (t) {
                        _ = i(function () {
                            D(t)
                        }, h)
                    },
                    A = function () {
                        _ && i.cancel(_)
                    };
                p.$parsers.unshift(function (t) {
                    return d = !0, t && t.length >= f ? h > 0 ? (A(), O(t)) : D(t) : (g(l, !1), A(), T()), m ? t : t ? (p.$setValidity("editable", !1), void 0) : (p.$setValidity("editable", !0), t)
                }), p.$formatters.push(function (t) {
                    var e, n, i = {};
                    return m || p.$setValidity("editable", !0), y ? (i.$model = t, y(l, i)) : (i[x.itemName] = t, e = x.viewMapper(l, i), i[x.itemName] = void 0, n = x.viewMapper(l, i), e !== n ? e : t)
                }), k.select = function (t) {
                    var e, n, o = {};
                    o[x.itemName] = n = k.matches[t].model, e = x.modelMapper(l, o), $(l, e), p.$setValidity("editable", !0), p.$setValidity("parse", !0), v(l, {
                        $item: n,
                        $model: e,
                        $label: x.viewMapper(l, o)
                    }), T(), i(function () {
                        c[0].focus()
                    }, 0, !1)
                }, c.bind("keydown", function (t) {
                    0 !== k.matches.length && -1 !== s.indexOf(t.which) && (-1 != k.activeIdx || 13 !== t.which && 9 !== t.which) && (t.preventDefault(), 40 === t.which ? (k.activeIdx = (k.activeIdx + 1) % k.matches.length, k.$digest()) : 38 === t.which ? (k.activeIdx = (k.activeIdx > 0 ? k.activeIdx : k.matches.length) - 1, k.$digest()) : 13 === t.which || 9 === t.which ? k.$apply(function () {
                        k.select(k.activeIdx)
                    }) : 27 === t.which && (t.stopPropagation(), T(), k.$digest()))
                }), c.bind("blur", function () {
                    d = !1
                });
                var I = function (t) {
                    c[0] !== t.target && (T(), k.$digest())
                };
                o.bind("click", I), l.$on("$destroy", function () {
                    o.unbind("click", I), b && M.remove(), E.remove()
                });
                var M = t(E)(k);
                b ? o.find("body").append(M) : c.after(M)
            }
        }
    }]).directive("typeaheadPopup", function () {
        return {
            restrict: "EA",
            scope: {
                matches: "=",
                query: "=",
                active: "=",
                position: "=",
                select: "&"
            },
            replace: !0,
            templateUrl: "template/typeahead/typeahead-popup.html",
            link: function (t, e, n) {
                t.templateUrl = n.templateUrl, t.isOpen = function () {
                    return t.matches.length > 0
                }, t.isActive = function (e) {
                    return t.active == e
                }, t.selectActive = function (e) {
                    t.active = e
                }, t.selectMatch = function (e) {
                    t.select({
                        activeIdx: e
                    })
                }
            }
        }
    }).directive("typeaheadMatch", ["$templateRequest", "$compile", "$parse", function (t, e, n) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function (i, o, r) {
                var a = n(r.templateUrl)(i.$parent) || "template/typeahead/typeahead-match.html";
                t(a).then(function (t) {
                    e(t.trim())(i, function (t) {
                        o.replaceWith(t)
                    })
                })
            }
        }
    }]).filter("typeaheadHighlight", function () {
        function t(t) {
            return t.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        }
        return function (e, n) {
            return n ? ("" + e).replace(new RegExp(t(n), "gi"), "<strong>$&</strong>") : e
        }
    }), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (t) {
        t.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href="javascript:void(0)" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (t) {
        t.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (t) {
        t.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (t) {
        t.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:\'index\' track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (t) {
        t.put("template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
    }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (t) {
        t.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function (t) {
        t.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}" ng-class="dt.customClass">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function (t) {
        t.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (t) {
        t.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
    }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function (t) {
        t.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (t) {
        t.put("template/modal/backdrop.html", '<div class="modal-backdrop"\n     modal-animation-class="fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }]), angular.module("template/modal/window.html", []).run(["$templateCache", function (t) {
        t.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n	ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')
    }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (t) {
        t.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n</ul>')
    }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (t) {
        t.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1, $event)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages, $event)">{{getText(\'last\')}}</a></li>\n</ul>')
    }]), angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function (t) {
        t.put("template/tooltip/tooltip-html-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (t) {
        t.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (t) {
        t.put("template/tooltip/tooltip-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function (t) {
        t.put("template/tooltip/tooltip-template-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
    }]), angular.module("template/popover/popover-template.html", []).run(["$templateCache", function (t) {
        t.put("template/popover/popover-template.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/popover/popover-window.html", []).run(["$templateCache", function (t) {
        t.put("template/popover/popover-window.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen, fade: animation }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" tooltip-template-transclude></div>\n  </div>\n</div>\n')
    }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (t) {
        t.put("template/popover/popover.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (t) {
        t.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n')
    }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (t) {
        t.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (t) {
        t.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>\n')
    }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (t) {
        t.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (t) {
        t.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (t) {
        t.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (t) {
        t.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
    }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (t) {
        t.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (t) {
        t.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }]), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),
    function () {
        angular.module("ym.Session", ["ym.Cookies", "ym.Analytics"]).value("userApiBaseUrl", "/casa_user/api/v1/users/").service("SessionConfig", ["$location", "userApiBaseUrl", function (t, e) {
            return {
                currentUserUrl: "" + e + (t.search().id || t.search().user_id || "me"),
                signInUrl: "" + e + "signin",
                signOutUrl: "" + e + "logout",
                signUpUrl: "" + e + "signup",
                signUpQnaUrl: "" + e + "signupqna",
                loggedInUrl: "" + e + "logged_in"
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Session").service("SessionService", ["$http", "$q", "$document", "AnalyticsService", "SessionConfig", "userApiBaseUrl", function (t, e, n, i, o, r) {
            var a, s, l, c, u, p, d;
            return c = null, l = null, u = function (t) {
                return l = null, c = t.data, _.isObject(c) || (c = null), null != (null != c ? c.id : void 0) && i.identify_user("" + c.id, _.omit(c, "credit_cards", "id", "primary_credit_card", "referral_landing_path")), c
            }, a = function (t) {
                var e, i, o;
                return i = n[0].URL || "", o = n[0].referrer || "", e = $.cookie("_ga"), t += "?page=" + escape(i) + "&ref=" + escape(o), e && (t += "&ga=" + e), t
            }, s = function (e) {
                return null == e && (e = !1), e && (l = null), l || (l = t.get(a(o.currentUserUrl), {
                    params: {
                        include: "cars"
                    }
                }).then(u))
            }, p = function () {
                return t.get(a(o.loggedInUrl)).then(function (t) {
                    return t.data.is_logged_in
                }, function () {
                    return !1
                })
            }, null != (d = $.cookie) && (d.raw = !0), p().then(function (t) {
                return t ? s() : void 0
            }), {
                getCurrentUser: function () {
                    return null != c ? e.when(c) : s()
                },
                signOut: function () {
                    return t.post(o.signOutUrl).then(u)
                },
                signIn: function (e, n) {
                    return t.post(o.signInUrl, {
                        auth_id: e,
                        password: n,
                        include: "cars"
                    }).then(u)
                },
                signUpForQna: function (e, n, i, r, a) {
                    return t.post(o.signUpQnaUrl, {
                        name: e,
                        email: n,
                        zipcode: i,
                        password: r,
                        phone: a
                    }).then(u)
                },
                signUp: function (e, n, i, r, a) {
                    return t.post(o.signUpUrl, {
                        name: e,
                        email: n,
                        zipcode: i,
                        password: r,
                        phone: a
                    }).then(u)
                },
                sendForgotPassEmail: function (e) {
                    return t.post("/user/forgetpass", {
                        id: e
                    })
                },
                newsletterSignup: function (e, n) {
                    return t({
                        method: "POST",
                        url: r + "newsletter_signup",
                        responseType: "json",
                        data: {
                            email: e,
                            zip: n
                        }
                    })
                },
                referSignup: function (e, n, i, o) {
                    return t.post(r + "refer_signup", {
                        email: e,
                        zipcode: n,
                        referer: i,
                        opt_in: o
                    }).then(function (t) {
                        return t.data
                    })
                },
                setUserData: function (t) {
                    return c = t
                },
                checkStatus: s,
                isUserLoggedIn: p
            }
        }])
    }.call(this),
    /*!
     * jQuery Cookie Plugin v1.4.0
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        function e(t) {
            return s.raw ? t : encodeURIComponent(t)
        }

        function n(t) {
            return s.raw ? t : decodeURIComponent(t)
        }

        function i(t) {
            return e(s.json ? JSON.stringify(t) : String(t))
        }

        function o(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                t = decodeURIComponent(t.replace(a, " "))
            } catch (e) {
                return
            }
            try {
                return s.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function r(e, n) {
            var i = s.raw ? e : o(e);
            return t.isFunction(n) ? n(i) : i
        }
        var a = /\+/g,
            s = t.cookie = function (o, a, l) {
                if (void 0 !== a && !t.isFunction(a)) {
                    if (l = t.extend({}, s.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setDate(u.getDate() + c)
                    }
                    return document.cookie = [e(o), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var p = o ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, h = d.length; h > f; f++) {
                    var m = d[f].split("="),
                        g = n(m.shift()),
                        v = m.join("=");
                    if (o && o === g) {
                        p = r(v, a);
                        break
                    }
                    o || void 0 === (v = r(v)) || (p[g] = v)
                }
                return p
            };
        s.defaults = {}, t.removeCookie = function (e, n) {
            return void 0 !== t.cookie(e) ? (t.cookie(e, "", t.extend({}, n, {
                expires: -1
            })), !0) : !1
        }
    }),
    function () {
        angular.module("ym.Cookies", []).config(function () {
            return $.cookie.raw = !1, $.cookie.json = !0, $.cookie.defaults.path = "/"
        })
    }.call(this),
    function () {
        angular.module("ym.Analytics", [])
    }.call(this),
    function () {
        angular.module("ym.Analytics").directive("ymQuoteConversionPixel", ["$timeout", "$parse", function () {
            var t;
            return t = function (t, e) {
                var n, i, o, r, a, s, l, c;
                return $(e).append($("<iframe frameborder='0' scrolling='no' width='1' height='1' style='visibility:hidden;display:none' src='//flex.msn.com/mstag/tag/6fa367af-1618-4da3-80d8-84563e76524d/analytics.html?dedup=1&domainId=2825971&type=1&actionid=212882'></iframe>")), o = 995131307, a = "en", i = "3", n = "ffffff", r = "sJ1XCI3h2wUQq__B2gM", s = 1, l = !1, c = "//www.googleadservices.com/pagead/conversion/" + o + "/?", c += "value=" + s + "&amp;label=" + r + "&amp;guid=ON&amp;script=0", $(e).append($("<img width='1' height='1' style='border-style: none;' src='" + c + "'/>"))
            }, {
                link: t,
                restrict: "AC"
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Analytics").service("ExperimentFactory", ["OptimizelyService", function (t) {
            var e, n;
            return n = t.optimizely, e = function () {
                function t(t, e) {
                    this.experimentId = t, this.testVariationOverride = e, this.testVariationOverride || n.push(["activate", this.experimentId])
                }
                return t.prototype.isActive = function () {
                    var t;
                    return null !== this.testVariationOverride || (null != n ? null != (t = n.data) ? t.state.activeExperiments.length : void 0 : void 0) && null != (null != n ? n.data.state.variationMap[this.experimentId] : void 0)
                }, t.prototype.isOriginalVariation = function () {
                    return !(this.isActive() && this.variationIndex())
                }, t.prototype.isVariationIndex = function (t) {
                    return this.isActive() && this.variationIndex() === t
                }, t.prototype.variationIndex = function () {
                    return this.isActive() && ((null != n ? n.data.state.variationMap[this.experimentId] : void 0) || this.testVariationOverride)
                }, t
            }(), {
                activate: function (t, n) {
                    return new e(t, n)
                }
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Analytics").service("AnalyticsService", ["$window", "$http", "MixpanelService", "OptimizelyService", "GoogleAnalyticsService", "FacebookCustomAudiencesService", function (t, e, n, i, o) {
            var r, a, s, l;
            return s = n.mixpanel, l = i.optimizely, a = o.ga, r = function () {
                function n() {}
                return n.prototype.identify_user = function (e, n) {
                    var i, o;
                    return null != (i = t.analytics) && i.alias(e), null != (o = t.analytics) ? o.identify(e, _.pick(n, "name", "primary_email", "primary_phone")) : void 0
                }, n.prototype.trackEvent = function (n, i) {
                    var o;
                    t.analytics.track(n, i), ("Mechanic Time Selected" === n || "Appointment Booking Requested" === n) && e.post("/case/trackEvent", {
                        event: n,
                        id: i.id
                    }), t.track && (o = i || {}, o.type = n, t.track(o))
                }, n.prototype.trackLandingEvent = function (t, e) {
                    this.trackEvent(t, e)
                }, n.prototype.trackRevenue = function () {}, n.prototype.trackBookingRevenue = function (e, n) {
                    var i;
                    "function" == typeof t.trigger_steelhouse_convertion && t.trigger_steelhouse_convertion(e, n / 100), t.MasterTmsUdo = {
                        CJ: {
                            CID: "1533899",
                            TYPE: "378588",
                            OID: "" + e,
                            CURRENCY: "USD",
                            AMOUNT: (n / 100).toFixed(2),
                            FIRECJ: $.cookie("cj_affiliate") || "FALSE"
                        }
                    }, null != (null != (i = t.top) ? i.Pulse : void 0) && (t.top.Pulse.Master = t.top.Pulse.runWidget({
                        type: "MasterTMS",
                        runNow: !0,
                        selector: null
                    }))
                }, n.prototype.trackVoucherRevenue = function () {}, n
            }(), new r
        }])
    }.call(this),
    function () {
        angular.module("ym.Analytics").service("FacebookCustomAudiencesService", ["$window", function (t) {
            return {
                trackRevenue: function (e, n, i) {
                    return null == i && (i = "USD"), t._fbq ? t._fbq.push(["track", n, {
                        value: e,
                        currency: i
                    }]) : void 0
                }
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Analytics").service("GoogleAnalyticsService", ["$window", function (t) {
            return {
                ga: t.ga
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Analytics").service("HotjarService", ["$window", function (t) {
            var e;
            return e = t.hj || function () {
                return (e.q = e.q || []).push(arguments)
            }, {
                tagRecording: function (t) {
                    return t && t.length > 0 ? e("tagRecording", t) : void 0
                }
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Analytics").service("MixpanelService", ["$window", function (t) {
            return {
                mixpanel: t.mixpanel
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Analytics").service("OptimizelyService", ["$window", function (t) {
            var e;
            return e = null != t.optimizely ? t.optimizely : t.optimizely = [], {
                optimizely: e,
                track: function (t) {
                    return t ? e.push(["trackEvent", t]) : void 0
                }
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.UI.Compatibility", [])
    }.call(this),
    function () {
        angular.module("ym.UI.Compatibility").directive("ieSelect", ["$document", "$timeout", function (t) {
            return {
                restrict: "A",
                require: "select",
                link: function (e, n, i) {
                    var o, r;
                    if (null != (r = t[0]) ? r.attachEvent : void 0) return o = n[0], e.$watch(i.ieSelectable, function () {
                        return n.css("width", n.css("width"))
                    })
                }
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.UI.Compatibility").service("BrowserFeatureService", ["$window", function (t) {
            var e;
            return e = function () {
                function e() {}
                return e.prototype.isOldInternetExplorer = function () {
                    return t.oldIE
                }, e
            }(), new e
        }])
    }.call(this),
    function () {
        window.googleAuthenticate = function (t) {
            return window.gapi ? window.gapi.load("auth2", function () {
                var e;
                return e = window.gapi.auth2.init({
                    client_id: window.google_api_client_id,
                    cookiepolicy: "single_host_origin"
                }), t(e)
            }) : void 0
        }
    }.call(this),
    function () {
        window.fbLogin = function (t, e, n, i) {
            var o, r, a, s, l;
            return s = "email", i || (i = "" + window.location.origin + "/user/fb_signin"), l = "https://www.facebook.com/dialog/oauth?client_id=" + window.fb_client_id + "&redirect_uri=" + i + "&scope=email", r = !1, a = null, window.fbsignin = function (i) {
                var o;
                return (o = JSON.parse(i)) ? t(o) : "function" == typeof e && e(), "function" == typeof n && n(), r = !0, clearInterval(a)
            }, o = window.open(l, "Facebook Login", "menubar=no,resizable=yes,scrollbars=yes,status=yes,width=600px,height=500px,top=300,left=400"), a = setInterval(function () {
                return r || o && !o.closed ? void 0 : ("function" == typeof e && e(), "function" == typeof n && n(), clearInterval(a))
            }, 200)
        }
    }.call(this),
    function () {
        angular.module("ym.Login", ["ym.UI.Compatibility", "ym.Session", "ym.UI.Compatibility", "ngRoute"])
    }.call(this),
    function () {
        angular.module("ym.Login").directive("login", function () {
            var t;
            return t = ["$scope", "$http", "$window", "BrowserFeatureService", "SessionService", function (t, e, n, i, o) {
                var r, a, s, l, c, u, p, d;
                return t.user || (t.user = {}), t.oldIE = i.isOldInternetExplorer(), t.close = function () {
                    return t.show = !1
                }, p = function (e) {
                    return t.busy = !1, t.done({
                        $user_data: e
                    }), t.close()
                }, d = function (t) {
                    return "Bad login" === t && (t = null), t || "Invalid email and/or password. Please try again or reset your password."
                }, r = function (e) {
                    var n, i;
                    return t.busy = !1, 400 <= (n = e.status) && 500 > n && (t.loginError = d(null != (i = e.data) ? i.error_message : void 0)), 500 <= e.status ? t.loginError = "Something went wrong while trying to log you in. Please contact support or try again at a later time." : void 0
                }, t.loginUser = function () {
                    return t.login_form.$invalid ? void 0 : (t.busy = !0, t.loginError = !1, o.signIn(t.email, t.password).then(p, r))
                }, t.signupUser = function () {
                    return t.signup_form.$invalid ? void 0 : t.password !== t.password_confirm ? (t.loginError = "Password does not match confirmation", void 0) : (t.busy = !0, t.loginError = !1, o.signUp(t.name, t.email, t.zipcode, t.password).then(p, r))
                }, l = function (e) {
                    return o.setUserData(e), t.done({
                        $user_data: e
                    }), t.close()
                }, s = function () {
                    return t.$apply(function () {
                        return t.fbLoginFailed = !0
                    })
                }, a = function () {
                    return t.$apply(function () {
                        return t.fbAuthorizing = !1
                    })
                }, t.fbLogin = function () {
                    return t.fbLoginFailed = !1, t.fbAuthorizing = !0, n.fbLogin(l, s, a), o.checkStatus()
                }, u = function () {
                    return t.busy = !1, t.resetSuccess = !0
                }, c = function (e) {
                    return t.busy = !1, t.resetError = e.data.error_message || e.data
                }, t.sendResetEmail = function () {
                    return t.forget_pass_form.$invalid ? void 0 : (t.busy = !0, t.resetSuccess = t.resetError = !1, e.post("/user/forgetpass", {
                        id: t.email
                    }).then(u, c))
                }, t.getTitle = function () {
                    return "Login" === t.type ? t.titleLogin || "Login" : t.titleSignup || "Create a FREE account"
                }, t
            }], {
                controller: t,
                link: function (t, e, n) {
                    return null != n.preventClose && t.preventClose, t.userMessage = n.userMessage
                },
                replace: !0,
                restrict: "E",
                scope: {
                    show: "=",
                    showType: "=",
                    loginError: "=",
                    email: "=",
                    titleLogin: "=",
                    titleSignup: "=",
                    type: "=",
                    done: "&loginSuccess",
                    userMessage: "@",
                    preventClose: "@"
                },
                templateUrl: "/templates/login"
            }
        })
    }.call(this),
    function () {
        var t, e, n, i;
        i = function () {
            var t;
            return t = $(".floating-labels .cd-label").nextAll(), t.each(function () {
                var t;
                t = $(this), t.prev(".cd-label").addClass("float")
            })
        }, e = function (t) {
            return "" === t.val() ? t.prev(".cd-label").removeClass("float") : t.prev(".cd-label").addClass("float")
        }, t = function () {
            var t;
            return t = $(".floating-labels .cd-label").next(), t.each(function () {
                var t;
                return t = $(this), e(t)
            })
        }, n = function (t) {
            return "passwordForgot" === t ? $("#cd-email2").focus() : "passwordReset" === t ? $("#cd-password2").focus() : "Signup" === t ? $("#cd-name").focus() : $("#cd-email1").focus()
        }, angular.module("ym.Login").directive("loginPartial", function () {
            var o;
            return o = ["$scope", "$http", "$window", "$timeout", "$location", "BrowserFeatureService", "SessionService", function (o, r, a, s, l, c, u) {
                var p, d, f, h, m, g, v, y, b, w, x, k, C;
                return o.user || (o.user = {}), o.oldIE = c.isOldInternetExplorer(), o.redirectHome = function () {
                    return a.location = "/"
                }, b = function (t) {
                    return a.location = t.wants_to_be_mechanic ? "/mechanic_applications/basic" : t.is_used_car_dealer ? "/dealer" : "true" === l.search().booking ? "/book" : "/user"
                }, k = function (t) {
                    return o.done({
                        $user_data: t
                    }), t.is_mechanic || (o.loginSuccess = !0), b(t)
                }, C = function (t) {
                    return "Bad login" === t && (t = null), t || "Invalid email and/or password. Please try again or reset your password."
                }, p = function (t) {
                    var e, n;
                    return o.busy = !1, 400 <= (e = t.status) && 500 > e && (o.loginError = C(null != (n = t.data) ? n.error_message : void 0)), 500 <= t.status ? o.loginError = "Something went wrong while trying to log you in. Please contact support or try again at a later time." : void 0
                }, o.loginUser = function () {
                    return o.login_form.$invalid ? void 0 : (o.busy = !0, o.loginError = !1, o.loginSuccess = !1, u.signIn(o.email, o.password).then(k, p))
                }, o.signupUser = function () {
                    return o.signup_form.$invalid ? void 0 : (o.busy = !0, o.loginError = !1, o.loginSuccess = !1, o.zipcode = null, u.signUp(o.name, o.email, o.zipcode, o.password).then(k, p))
                }, h = function (t) {
                    return u.setUserData(t), o.done({
                        $user_data: t
                    }), o.loginSuccess = !0, b(t)
                }, f = function () {
                    return o.$apply(function () {
                        return o.fbLoginFailed = !0
                    })
                }, d = function () {
                    return o.$apply(function () {
                        return o.fbAuthorizing = !1
                    })
                }, o.fbLogin = function () {
                    return o.loginSuccess = !1, o.fbLoginFailed = !1, o.fbAuthorizing = !0, a.fbLogin(h, f, d), u.checkStatus()
                }, g = function (t) {
                    var e, n;
                    return n = t.getAuthResponse().id_token, e = {
                        credentials: "same-origin",
                        method: "post",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            google_token: n
                        })
                    }, fetch("/user/google_signin", e).then(function (t) {
                        return o.loginSuccess = !0, b(t)
                    })["catch"](function (t) {
                        return o.loginError = p(t)
                    }), u.checkStatus()
                }, m = function (t) {
                    return a.googleAuth2 = t
                }, a.googleAuthenticate(m), o.googleLogin = function () {
                    return o.loginSuccess = !1, a.googleAuth2 ? a.googleAuth2.signIn().then(g) : void 0
                }, x = function () {
                    return o.busy = !1, o.resetSuccess = !0
                }, w = function (t) {
                    return o.busy = !1, o.loginError = p(t)
                }, o.sendResetEmail = function () {
                    return o.forget_pass_form.$invalid ? void 0 : (o.busy = !0, o.resetSuccess = o.resetError = !1, r.post("/user/forgetpass", {
                        id: o.email
                    }).then(x, w))
                }, o.sendRequestEmail = function () {
                    return o.request_pass_form.$invalid ? void 0 : (o.busy = !0, o.resetSuccess = o.resetError = !1, r.post("/user/forgetpass", {
                        id: o.email
                    }).then(x, w))
                }, y = function () {
                    return o.busy = !1, o.passwordResetSuccess = !0, a.location = "/login"
                }, v = function (t) {
                    return o.busy = !1, o.loginError = t.data
                }, o.resetPassword = function () {
                    return o.reset_pass_form.$invalid ? void 0 : (o.loginError = !1, o.passwordResetSuccess = !1, o.busy = !0, o.password_reset === o.password_reset_conf ? r.post("/reset-password", {
                        email: o.email,
                        ukey: o.ukey,
                        password: o.password_reset
                    }).then(y, v) : (o.loginError = "Passwords do not match. Please confirm password.", o.busy = !1))
                }, o.getTitle = function () {
                    return "Login" === o.type ? o.titleLogin || "Login" : o.titleSignup || "Create a FREE account"
                }, o.updateFloatLabels = function () {
                    i()
                }, o.checkFloatLabels = function () {
                    t()
                }, o.setupFocus = function () {
                    return n(o.type)
                }, o.setupFocus(), o.postRender = s(function () {
                    var t;
                    return t = function () {
                        var t;
                        t = $(".floating-labels .cd-label").next(), t.each(function () {
                            var t;
                            t = $(this), e(t), t.on("change keyup", function () {
                                e(t)
                            })
                        })
                    }, e = function (t) {
                        "" === t.val() ? t.prev(".cd-label").removeClass("float") : t.prev(".cd-label").addClass("float")
                    }, $(".floating-labels").length > 0 ? t() : void 0
                }, 2e3), o
            }], {
                controller: o,
                link: function (t, e, n) {
                    return null != n.preventClose && t.preventClose, t.userMessage = n.userMessage
                },
                replace: !0,
                restrict: "E",
                scope: {
                    show: "=",
                    showType: "=",
                    loginError: "=",
                    email: "@",
                    titleLogin: "=",
                    titleSignup: "=",
                    type: "=",
                    done: "&loginSuccess",
                    userMessage: "@",
                    preventClose: "@",
                    ukey: "@"
                },
                templateUrl: "/templates/login_partial"
            }
        })
    }.call(this),
    function () {
        angular.module("ym.Utilities.phoneInput", []).filter("phoneNumber", function () {
            return function (t) {
                return null != t ? (t = t.replace(/[^\d]/g, "").substr(0, 10), t.length > 6 ? "(" + t.slice(0, 3) + ") " + t.slice(3, 6) + "-" + t.slice(6) : t.length > 3 ? "(" + t.slice(0, 3) + ") " + t.slice(3) : "" + t.slice(0)) : ""
            }
        }).directive("phoneInput", ["$filter", function (t) {
            var e, n;
            return e = function (e) {
                return null != e ? t("phoneNumber")(e) : ""
            }, n = function (t, n) {
                var i, o;
                return i = e(n), t.val(i), o = i.length, o > 3 ? t[0].setSelectionRange(o, o) : void 0
            }, {
                require: "ngModel",
                restrict: "A",
                link: function (t, i, o, r) {
                    return r.$parsers.push(function (t) {
                        var e;
                        return null == t ? "" : (e = t.match(/\d+/gi), null != e ? e.join("") : void 0)
                    }), r.$render = function () {
                        return n(i, r.$viewValue)
                    }, r.$formatters.push(e), i.bind("input", function () {
                        return n(i, i.val())
                    })
                }
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Promo", ["ym.Analytics", "ym.Utilities.phoneInput"])
    }.call(this),
    function () {
        angular.module("ym.Promo").controller("ReferralFriendPhoneController", ["$scope", "$window", "$http", "SessionService", "AnalyticsService", function (t, e, n, i, o) {
            var r, a, s;
            return t.post_error = "", t.user = {}, i.getCurrentUser().then(function (e) {
                return t.user = e || {}
            }), s = function (n) {
                return t.busy = !1, t.post_error = n.message, "Congratulations" === n.message.substr(0, 15) ? e.location = "/user/gifts" : void 0
            }, r = function (e, n) {
                var i;
                t.busy = !1, i = n >= 500 ? "Sorry, something went wrong." : e.error_message || "Sorry, a network or server error occurred!", t.post_error = i
            }, a = function (e) {
                return t.user.refkey = e.refkey, e = {
                    name: t.user.name,
                    primary_phone: t.user.primary_phone,
                    email: t.user.primary_email,
                    referrer: t.user.refkey
                }, n.post("/casa_user/api/v1/users/signup", e).success(s).error(r)
            }, t.sendRefer = function () {
                return t.post_error = null, t.post_feedback = null, this.friendSignup.$valid ? (t.busy = !0, o.trackEvent("Friend Phone Referral", {
                    id: t.user.id
                }), n.post("/common/api/v1/promo/lookup_by_phone?phone=" + t.user.friend_phone).success(a).error(r)) : void 0
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Promo").controller("ReferralModalController", ["$scope", "$modalInstance", "$window", "$http", "SessionService", "AnalyticsService", function (t, e, n, i, o, r) {
            var a, s, l, c, u;
            return t.user = {}, o.getCurrentUser().then(function (e) {
                return t.user = e || {}, t.referral_url = n.location.origin + t.user.referral_landing_path, t.em = {
                    subject: "I think you should give YourMechanic a try",
                    message: "You can book a service online and one of their mechanics will come to your home or office to service your car, 7 days a week.\n\nFollow this link to sign up and get a $10 gift certificate:\n" + t.referral_url + "\n\nYou can learn more about YourMechanic at: https://www.yourmechanic.com.\n\n\n" + "- " + (t.user.name || "").split(" ")[0].trim() + "\n"
                }
            }), t.close = function () {
                return e.dismiss("cancel")
            }, c = function (e) {
                var n;
                return r.trackEvent("Refer Via Email"), t.busy = !1, (null != e ? null != (n = e.list) ? n.length : void 0 : void 0) > 0 ? t.post_feedback = e.list : t.post_error = "Found no valid email address, please try again"
            }, s = function (e, n) {
                var i;
                return t.busy = !1, i = n >= 500 ? "Sorry, something went wrong." : e || "Sorry, a network or server error occurred!", t.post_error = i
            }, a = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i, u = function (t) {
                return t && t.length > 0 && a.test(t.trim())
            }, l = function (t) {
                return _.filter((t || "").split(","), u)
            }, t.sendRefer = function () {
                return t.post_error = null, t.post_feedback = null, this.email_referral.$valid ? (t.busy = !0, o.getCurrentUser().then(function () {
                    var e;
                    return r.trackEvent("Email Referral", {
                        id: t.user.id
                    }), e = {
                        subject: t.em.subject,
                        message: t.em.message,
                        emtxt: l(t.em.emtxt)
                    }, i.post("/user/send_refer", e).success(c).error(s)
                })) : void 0
            }, t.tweeturl = function () {
                var e;
                return e = "https://twitter.com/intent/tweet?via=yourmechanic&url=", e += encodeURIComponent(t.referral_url), e += "&text=", e += encodeURIComponent("Get your car serviced at home or office through YourMechanic. Here is $10 to get you started.")
            }, t.fbfeedurl = function () {
                var e;
                return e = "https://www.facebook.com/dialog/feed?app_id=265353220248106&display=popup&description=", e += encodeURIComponent("I got my car repaired through YourMechanic, and their service is great. You can get an experienced mechanic to service your car at home or at work. Here is $10 to get you started."), e += "&picture=https%3A%2F%2Fwww.yourmechanic.com%2Flogo500.png&name=", e += encodeURIComponent("Signup to get $10 gift from " + t.user.name), e += "&link=", e += encodeURIComponent(t.referral_url), e += "&redirect_uri=https://www.yourmechanic.com/user/fb_post"
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Promo").service("SocialService", ["$http", "$q", "$window", "AnalyticsService", "SessionConfig", "SessionService", "BookingService", "QuoteResourceService", function (t, e, n, i, o, r, a, s) {
            var l, c, u;
            return c = function (i, o, l) {
                var c, u;
                return null == i || null == i.authResponse ? o.reject("Please allow YourMechanic to post on your behalf.") : (c = !1, u = e.when(t({
                    data: _.extend(l, i.authResponse),
                    method: "POST",
                    url: "/book/fbuser-update",
                    responseType: "json"
                })), c = _.find((i.authResponse.grantedScopes || "").split(","), function (t) {
                    return "publish_actions" === t
                }), u.then(function () {
                    return r.checkStatus(!0)
                }, function () {
                    return o.reject("Sorry, something went wrong. Please contact support.")
                }).then(function (e) {
                    return _.contains(e.social_sharing_rewards_used, "facebook") ? (n.alert("Sorry, you have already redeemed this reward."), o.reject("Sorry, you have already redeemed this reward.")) : c ? n.FB.api("/me/feed", "post", {
                        access_token: i.authResponse.accessToken,
                        link: "" + n.location.protocol + "//" + n.location.host + e.referral_landing_path,
                        place: "143809525684860",
                        tags: "143809525684860",
                        picture: "https://www.yourmechanic.com/assets/referral_landing/bg1.jpg",
                        name: "$20 off your first appointment with YourMechanic",
                        caption: "YourMechanic.com",
                        description: "YourMechanic is a mobile mechanic company that offers car repair services at your home or office. Click here to get $20 off your first appointment!"
                    }, function (e) {
                        return null != e.id ? t({
                            data: _.extend(l, {
                                resp: e
                            }),
                            method: "POST",
                            url: "/book/fbuser-refer",
                            responseType: "json"
                        }).success(function (t) {
                            var n;
                            return n = a.currentQuote(), s.saveCoupon(t.coupon_code, n).then(function (t) {
                                return t = _(t).omit("address"), a.updateQuoteFromCaseData(t), o.resolve(e.id)
                            })
                        }).error(function (t) {
                            return o.reject(null != t ? t.error : void 0)
                        }) : o.reject(e)
                    }) : o.reject("Please allow YourMechanic to post on your behalf.")
                }))
            }, u = function (i, o, a) {
                var s, l;
                return null == i ? o.reject("Please allow YourMechanic to post on your behalf.") : (s = !1, l = e.when(t({
                    data: _.extend(a, i.authResponse),
                    method: "POST",
                    url: "/book/fbuser-update",
                    responseType: "json"
                })), s = _.find((i.authResponse.grantedScopes || "").split(","), function (t) {
                    return "publish_actions" === t
                }), l.then(function () {
                    return r.checkStatus(!0)
                }, function () {
                    return o.reject("Sorry, something went wrong. Please contact support.")
                }).then(function () {
                    var t;
                    return t = "" + n.location.protocol + "//" + n.location.host + "/oc/" + a.cid + "?cpn_code=" + a.cpn, s ? n.FB.api("/me/feed", "post", {
                        access_token: i.authResponse.accessToken,
                        link: t,
                        place: "143809525684860",
                        tags: "143809525684860",
                        name: "Get a free oil change from YourMechanic",
                        picture: "https://www.yourmechanic.com/assets/referral_landing/bg1.jpg",
                        caption: "YourMechanic.com",
                        description: "YourMechanic is a mobile mechanic company that offers car repair services at your home or office. Click here to get a FREE oil change with 5 quarts of regular oil. Offer expires: " + a.exp_date
                    }, function (t) {
                        return null != t.id ? o.resolve(t.id) : o.reject(t)
                    }) : o.reject("Please allow YourMechanic to post on your behalf.")
                }))
            }, l = function () {
                function t() {}
                return t.prototype.shareOnFacebook = function (t) {
                    var i, o, r;
                    return o = e.defer(), i = n.FB.getAuthResponse(), r = !0, null != i && _.find((i.grantedScopes || "").split(","), function (t) {
                        return "publish_actions" === t
                    }) && _.find((i.grantedScopes || "").split(","), function (t) {
                        return "email" === t
                    }) && (r = !1), r ? n.FB.login(function (e) {
                        return c(e, o, t)
                    }, {
                        scope: "email, publish_actions",
                        return_scopes: !0
                    }) : c({
                        authResponse: i
                    }, o, t), o.promise
                }, t.prototype.shareOCOfferOnFacebook = function (t) {
                    var i, o, r;
                    return o = e.defer(), i = n.FB.getAuthResponse(), r = !0, null != i && _.find((i.grantedScopes || "").split(","), function (t) {
                        return "publish_actions" === t
                    }) && _.find((i.grantedScopes || "").split(","), function (t) {
                        return "email" === t
                    }) && (r = !1), r ? n.FB.login(function (e) {
                        return u(e, o, t)
                    }, {
                        scope: "email, publish_actions",
                        return_scopes: !0
                    }) : u({
                        authResponse: i
                    }, o, t), o.promise
                }, t
            }(), new l
        }])
    }.call(this),
    function () {
        angular.module("ym.NavBar", ["ym.Login", "ym.Promo", "ui.bootstrap", "ym.Analytics"])
    }.call(this),
    function () {
        angular.module("ym.NavBar").controller("NavBarController", ["$scope", "$window", "$modal", "SessionService", "AnalyticsService", function (t, e, n, i, o) {
            return t.show = !1, t.loginError = null, t.user = {}, e.alert_message && n.open({
                template: "<div class='modal-body' style='text-align:center;' ng-click=\"close()\">" + e.alert_message + "</div>",
                controller: ["$scope", "$modalInstance", function (t, e) {
                    return t.close = function () {
                        return e.dismiss("cancel")
                    }
                }]
            }), e.refkey ? (o.trackLandingEvent("Referral Signup"), t.show = !0, t.loginType = "Signup") : i.getCurrentUser().then(function (e) {
                return t.user = e || {}
            }), t.extShowSignup = function () {
                return t.$apply(function () {
                    return t.showSignup()
                })
            }, t.showLogin = function () {
                t.waitingForReferral = !1, t.title = null, t.loginType = "Login", t.show = !0, o.trackEvent("Open Login")
            }, t.showSignup = function () {
                t.waitingForReferral = !1, t.title = null, t.loginType = "Signup", t.show = !0, o.trackEvent("Open Signup")
            }, t.showReferral = function () {
                t.user.id ? t.showReferralModal() : (t.waitingForReferral = !0, t.title = "Login to share with friends", t.loginType = "Login", t.show = !0, o.trackEvent("Open Login for Referral"))
            }, t.showReferralModal = function () {
                return o.trackEvent("Open Referral", {
                    id: t.user.id
                }), t.waitingForReferral = !1, n.open({
                    templateUrl: "referral_modal",
                    controller: "ReferralModalController"
                })
            }, t.loginSuccess = function (n) {
                var i;
                return o.trackEvent("Login Success", {
                    id: t.user.id
                }), t.user = n, t.waitingForReferral ? t.showReferralModal() : (i = "/user", e.refkey && (i += "#gifts"), e.location = i)
            }
        }])
    }.call(this);
var swfobject = function () {
    function t() {
        if (!q) {
            try {
                var t = L.getElementsByTagName("body")[0].appendChild(g("span"));
                t.parentNode.removeChild(t)
            } catch (e) {
                return
            }
            q = !0;
            for (var n = U.length, i = 0; n > i; i++) U[i]()
        }
    }

    function e(t) {
        q ? t() : U[U.length] = t
    }

    function n(t) {
        if (typeof P.addEventListener != D) P.addEventListener("load", t, !1);
        else if (typeof L.addEventListener != D) L.addEventListener("load", t, !1);
        else if (typeof P.attachEvent != D) v(P, "onload", t);
        else if ("function" == typeof P.onload) {
            var e = P.onload;
            P.onload = function () {
                e(), t()
            }
        } else P.onload = t
    }

    function i() {
        N ? o() : r()
    }

    function o() {
        var t = L.getElementsByTagName("body")[0],
            e = g(_);
        e.setAttribute("type", I);
        var n = t.appendChild(e);
        if (n) {
            var i = 0;
            ! function () {
                if (typeof n.GetVariable != D) {
                    var o = n.GetVariable("$version");
                    o && (o = o.split(" ")[1].split(","), V.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
                } else if (10 > i) return i++, setTimeout(arguments.callee, 10), void 0;
                t.removeChild(e), n = null, r()
            }()
        } else r()
    }

    function r() {
        var t = z.length;
        if (t > 0)
            for (var e = 0; t > e; e++) {
                var n = z[e].id,
                    i = z[e].callbackFn,
                    o = {
                        success: !1,
                        id: n
                    };
                if (V.pv[0] > 0) {
                    var r = m(n);
                    if (r)
                        if (!y(z[e].swfVersion) || V.wk && V.wk < 312)
                            if (z[e].expressInstall && s()) {
                                var u = {};
                                u.data = z[e].expressInstall, u.width = r.getAttribute("width") || "0", u.height = r.getAttribute("height") || "0", r.getAttribute("class") && (u.styleclass = r.getAttribute("class")), r.getAttribute("align") && (u.align = r.getAttribute("align"));
                                for (var p = {}, d = r.getElementsByTagName("param"), f = d.length, h = 0; f > h; h++) "movie" != d[h].getAttribute("name").toLowerCase() && (p[d[h].getAttribute("name")] = d[h].getAttribute("value"));
                                l(u, p, n, i)
                            } else c(r), i && i(o);
                    else w(n, !0), i && (o.success = !0, o.ref = a(n), i(o))
                } else if (w(n, !0), i) {
                    var g = a(n);
                    g && typeof g.SetVariable != D && (o.success = !0, o.ref = g), i(o)
                }
            }
    }

    function a(t) {
        var e = null,
            n = m(t);
        if (n && "OBJECT" == n.nodeName)
            if (typeof n.SetVariable != D) e = n;
            else {
                var i = n.getElementsByTagName(_)[0];
                i && (e = i)
            } return e
    }

    function s() {
        return !B && y("6.0.65") && (V.win || V.mac) && !(V.wk && V.wk < 312)
    }

    function l(t, e, n, i) {
        B = !0, C = i || null, E = {
            success: !1,
            id: n
        };
        var o = m(n);
        if (o) {
            "OBJECT" == o.nodeName ? (x = u(o), k = null) : (x = o, k = n), t.id = M, (typeof t.width == D || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) && (t.width = "310"), (typeof t.height == D || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) && (t.height = "137"), L.title = L.title.slice(0, 47) + " - Flash Player Installation";
            var r = V.ie && V.win ? "ActiveX" : "PlugIn",
                a = "MMredirectURL=" + P.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + r + "&MMdoctitle=" + L.title;
            if (typeof e.flashvars != D ? e.flashvars += "&" + a : e.flashvars = a, V.ie && V.win && 4 != o.readyState) {
                var s = g("div");
                n += "SWFObjectNew", s.setAttribute("id", n), o.parentNode.insertBefore(s, o), o.style.display = "none",
                    function () {
                        4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                    }()
            }
            p(t, e, n)
        }
    }

    function c(t) {
        if (V.ie && V.win && 4 != t.readyState) {
            var e = g("div");
            t.parentNode.insertBefore(e, t), e.parentNode.replaceChild(u(t), e), t.style.display = "none",
                function () {
                    4 == t.readyState ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10)
                }()
        } else t.parentNode.replaceChild(u(t), t)
    }

    function u(t) {
        var e = g("div");
        if (V.win && V.ie) e.innerHTML = t.innerHTML;
        else {
            var n = t.getElementsByTagName(_)[0];
            if (n) {
                var i = n.childNodes;
                if (i)
                    for (var o = i.length, r = 0; o > r; r++) 1 == i[r].nodeType && "PARAM" == i[r].nodeName || 8 == i[r].nodeType || e.appendChild(i[r].cloneNode(!0))
            }
        }
        return e
    }

    function p(t, e, n) {
        var i, o = m(n);
        if (V.wk && V.wk < 312) return i;
        if (o)
            if (typeof t.id == D && (t.id = n), V.ie && V.win) {
                var r = "";
                for (var a in t) t[a] != Object.prototype[a] && ("data" == a.toLowerCase() ? e.movie = t[a] : "styleclass" == a.toLowerCase() ? r += ' class="' + t[a] + '"' : "classid" != a.toLowerCase() && (r += " " + a + '="' + t[a] + '"'));
                var s = "";
                for (var l in e) e[l] != Object.prototype[l] && (s += '<param name="' + l + '" value="' + e[l] + '" />');
                o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + s + "</object>", F[F.length] = t.id, i = m(t.id)
            } else {
                var c = g(_);
                c.setAttribute("type", I);
                for (var u in t) t[u] != Object.prototype[u] && ("styleclass" == u.toLowerCase() ? c.setAttribute("class", t[u]) : "classid" != u.toLowerCase() && c.setAttribute(u, t[u]));
                for (var p in e) e[p] != Object.prototype[p] && "movie" != p.toLowerCase() && d(c, p, e[p]);
                o.parentNode.replaceChild(c, o), i = c
            } return i
    }

    function d(t, e, n) {
        var i = g("param");
        i.setAttribute("name", e), i.setAttribute("value", n), t.appendChild(i)
    }

    function f(t) {
        var e = m(t);
        e && "OBJECT" == e.nodeName && (V.ie && V.win ? (e.style.display = "none", function () {
            4 == e.readyState ? h(t) : setTimeout(arguments.callee, 10)
        }()) : e.parentNode.removeChild(e))
    }

    function h(t) {
        var e = m(t);
        if (e) {
            for (var n in e) "function" == typeof e[n] && (e[n] = null);
            e.parentNode.removeChild(e)
        }
    }

    function m(t) {
        var e = null;
        try {
            e = L.getElementById(t)
        } catch (n) {}
        return e
    }

    function g(t) {
        return L.createElement(t)
    }

    function v(t, e, n) {
        t.attachEvent(e, n), H[H.length] = [t, e, n]
    }

    function y(t) {
        var e = V.pv,
            n = t.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, e[0] > n[0] || e[0] == n[0] && e[1] > n[1] || e[0] == n[0] && e[1] == n[1] && e[2] >= n[2] ? !0 : !1
    }

    function b(t, e, n, i) {
        if (!V.ie || !V.mac) {
            var o = L.getElementsByTagName("head")[0];
            if (o) {
                var r = n && "string" == typeof n ? n : "screen";
                if (i && (T = null, S = null), !T || S != r) {
                    var a = g("style");
                    a.setAttribute("type", "text/css"), a.setAttribute("media", r), T = o.appendChild(a), V.ie && V.win && typeof L.styleSheets != D && L.styleSheets.length > 0 && (T = L.styleSheets[L.styleSheets.length - 1]), S = r
                }
                V.ie && V.win ? T && typeof T.addRule == _ && T.addRule(t, e) : T && typeof L.createTextNode != D && T.appendChild(L.createTextNode(t + " {" + e + "}"))
            }
        }
    }

    function w(t, e) {
        if (W) {
            var n = e ? "visible" : "hidden";
            q && m(t) ? m(t).style.visibility = n : b("#" + t, "visibility:" + n)
        }
    }

    function $(t) {
        var e = /[\\\"<>\.;]/,
            n = null != e.exec(t);
        return n && typeof encodeURIComponent != D ? encodeURIComponent(t) : t
    }
    var x, k, C, E, T, S, D = "undefined",
        _ = "object",
        O = "Shockwave Flash",
        A = "ShockwaveFlash.ShockwaveFlash",
        I = "application/x-shockwave-flash",
        M = "SWFObjectExprInst",
        R = "onreadystatechange",
        P = window,
        L = document,
        j = navigator,
        N = !1,
        U = [i],
        z = [],
        F = [],
        H = [],
        q = !1,
        B = !1,
        W = !0,
        V = function () {
            var t = typeof L.getElementById != D && typeof L.getElementsByTagName != D && typeof L.createElement != D,
                e = j.userAgent.toLowerCase(),
                n = j.platform.toLowerCase(),
                i = n ? /win/.test(n) : /win/.test(e),
                o = n ? /mac/.test(n) : /mac/.test(e),
                r = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                a = !1,
                s = [0, 0, 0],
                l = null;
            if (typeof j.plugins != D && typeof j.plugins[O] == _) l = j.plugins[O].description, !l || typeof j.mimeTypes != D && j.mimeTypes[I] && !j.mimeTypes[I].enabledPlugin || (N = !0, a = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), s[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), s[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), s[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof P.ActiveXObject != D) try {
                var c = new ActiveXObject(A);
                c && (l = c.GetVariable("$version"), l && (a = !0, l = l.split(" ")[1].split(","), s = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
            } catch (u) {}
            return {
                w3: t,
                pv: s,
                wk: r,
                ie: a,
                win: i,
                mac: o
            }
        }();
    return function () {
            V.w3 && ((typeof L.readyState != D && "complete" == L.readyState || typeof L.readyState == D && (L.getElementsByTagName("body")[0] || L.body)) && t(), q || (typeof L.addEventListener != D && L.addEventListener("DOMContentLoaded", t, !1), V.ie && V.win && (L.attachEvent(R, function () {
                "complete" == L.readyState && (L.detachEvent(R, arguments.callee), t())
            }), P == top && function () {
                if (!q) {
                    try {
                        L.documentElement.doScroll("left")
                    } catch (e) {
                        return setTimeout(arguments.callee, 0), void 0
                    }
                    t()
                }
            }()), V.wk && function () {
                return q ? void 0 : /loaded|complete/.test(L.readyState) ? (t(), void 0) : (setTimeout(arguments.callee, 0), void 0)
            }(), n(t)))
        }(),
        function () {
            V.ie && V.win && window.attachEvent("onunload", function () {
                for (var t = H.length, e = 0; t > e; e++) H[e][0].detachEvent(H[e][1], H[e][2]);
                for (var n = F.length, i = 0; n > i; i++) f(F[i]);
                for (var o in V) V[o] = null;
                V = null;
                for (var r in swfobject) swfobject[r] = null;
                swfobject = null
            })
        }(), {
            registerObject: function (t, e, n, i) {
                if (V.w3 && t && e) {
                    var o = {};
                    o.id = t, o.swfVersion = e, o.expressInstall = n, o.callbackFn = i, z[z.length] = o, w(t, !1)
                } else i && i({
                    success: !1,
                    id: t
                })
            },
            getObjectById: function (t) {
                return V.w3 ? a(t) : void 0
            },
            embedSWF: function (t, n, i, o, r, a, c, u, d, f) {
                var h = {
                    success: !1,
                    id: n
                };
                V.w3 && !(V.wk && V.wk < 312) && t && n && i && o && r ? (w(n, !1), e(function () {
                    i += "", o += "";
                    var e = {};
                    if (d && typeof d === _)
                        for (var m in d) e[m] = d[m];
                    e.data = t, e.width = i, e.height = o;
                    var g = {};
                    if (u && typeof u === _)
                        for (var v in u) g[v] = u[v];
                    if (c && typeof c === _)
                        for (var b in c) typeof g.flashvars != D ? g.flashvars += "&" + b + "=" + c[b] : g.flashvars = b + "=" + c[b];
                    if (y(r)) {
                        var $ = p(e, g, n);
                        e.id == n && w(n, !0), h.success = !0, h.ref = $
                    } else {
                        if (a && s()) return e.data = a, l(e, g, n, f), void 0;
                        w(n, !0)
                    }
                    f && f(h)
                })) : f && f(h)
            },
            switchOffAutoHideShow: function () {
                W = !1
            },
            ua: V,
            getFlashPlayerVersion: function () {
                return {
                    major: V.pv[0],
                    minor: V.pv[1],
                    release: V.pv[2]
                }
            },
            hasFlashPlayerVersion: y,
            createSWF: function (t, e, n) {
                return V.w3 ? p(t, e, n) : void 0
            },
            showExpressInstall: function (t, e, n, i) {
                V.w3 && s() && l(t, e, n, i)
            },
            removeSWF: function (t) {
                V.w3 && f(t)
            },
            createCSS: function (t, e, n, i) {
                V.w3 && b(t, e, n, i)
            },
            addDomLoadEvent: e,
            addLoadEvent: n,
            getQueryParamValue: function (t) {
                var e = L.location.search || L.location.hash;
                if (e) {
                    if (/\?/.test(e) && (e = e.split("?")[1]), null == t) return $(e);
                    for (var n = e.split("&"), i = 0; i < n.length; i++)
                        if (n[i].substring(0, n[i].indexOf("=")) == t) return $(n[i].substring(n[i].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function () {
                if (B) {
                    var t = m(M);
                    t && x && (t.parentNode.replaceChild(x, t), k && (w(k, !0), V.ie && V.win && (x.style.display = "block")), C && C(E)), B = !1
                }
            }
        }
}();
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (function () {
        angular.module("ym.Utilities.ymvideo", []).directive("ymvideo", function () {
            return {
                restrict: "C",
                link: function (t, e) {
                    return e.click(function (t) {
                        var e, n, i;
                        return e = $(t.currentTarget), n = e.data("vid"), e.unbind("click"), swfobject.hasFlashPlayerVersion("9.0.18") ? e.html('<iframe src="https://player.vimeo.com/video/' + n + '?autoplay=true" width="480" height="270" frameborder="0" ' + "webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>") : (i = e.data("s"), e.html('<video src="https://player.vimeo.com/external/' + n + ".mobile.mp4?s=" + i + '" ' + 'width="480" height="270" controls="1" autoplay="autoplay" />'))
                    })
                }
            }
        })
    }.call(this), function () {
        angular.module("ym.Utilities.maxInput", []).directive("maxInput", function () {
            return {
                link: function (t, e, n, i) {
                    var o, r;
                    return r = i ? n.hasOwnProperty("maxViewInput") ? function () {
                        return i.$viewValue
                    } : function () {
                        return (i.$modelValue || "").toString()
                    } : function () {
                        return $(e).val()
                    }, o = parseInt(n.maxInput), e.on("keypress", function (t) {
                        var e;
                        if (!(r().length < o)) return e = $(t.target)[0], t.which >= 46 && e.selectionStart === e.selectionEnd ? t.preventDefault() : void 0
                    })
                },
                require: "?ngModel",
                restrict: "A"
            }
        })
    }.call(this), function () {
        angular.module("ym.Utilities.onlyNumber", []).directive("onlyNumber", function () {
            var t, e;
            return t = function (t) {
                return _.any(_.map(["ctrlKey", "metaKey", "altKey"], function (e) {
                    return t[e]
                }))
            }, e = function (e) {
                var n;
                return n = e.which, 57 >= n || t(e)
            }, {
                link: function (t, n) {
                    return n.bind("keypress", function (t) {
                        return e(t) ? void 0 : t.preventDefault()
                    })
                }
            }
        })
    }.call(this), function () {
        angular.module("ym.Validation", [])
    }.call(this),
    /* ===========================================================
     * bootstrap-tooltip.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#tooltips
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ===========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ========================================================== */
    ! function (t) {
        "use strict";
        var e = function (t, e) {
            this.init("tooltip", t, e)
        };
        e.prototype = {
            constructor: e,
            init: function (e, n, i) {
                var o, r, a, s, l;
                for (this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.enabled = !0, a = this.options.trigger.split(" "), l = a.length; l--;) s = a[l], "click" == s ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != s && (o = "hover" == s ? "mouseenter" : "focus", r = "hover" == s ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function (e) {
                return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            },
            enter: function (e) {
                var n, i = t.fn[this.type].defaults,
                    o = {};
                return this._options && t.each(this._options, function (t, e) {
                    i[t] != e && (o[t] = e)
                }, this), n = t(e.currentTarget)[this.type](o).data(this.type), n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", this.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show), void 0) : n.show()
            },
            leave: function (e) {
                var n = t(e.currentTarget)[this.type](this._options).data(this.type);
                return this.timeout && clearTimeout(this.timeout), n.options.delay && n.options.delay.hide ? (n.hoverState = "out", this.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide), void 0) : n.hide()
            },
            show: function () {
                var e, n, i, o, r, a, s = t.Event("show");
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(s), s.isDefaultPrevented()) return;
                    switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), r = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), n = this.getPosition(), i = e[0].offsetWidth, o = e[0].offsetHeight, r) {
                        case "bottom":
                            a = {
                                top: n.top + n.height,
                                left: n.left + n.width / 2 - i / 2
                            };
                            break;
                        case "top":
                            a = {
                                top: n.top - o,
                                left: n.left + n.width / 2 - i / 2
                            };
                            break;
                        case "left":
                            a = {
                                top: n.top + n.height / 2 - o / 2,
                                left: n.left - i
                            };
                            break;
                        case "right":
                            a = {
                                top: n.top + n.height / 2 - o / 2,
                                left: n.left + n.width
                            }
                    }
                    this.applyPlacement(a, r), this.$element.trigger("shown")
                }
            },
            applyPlacement: function (t, e) {
                var n, i, o, r, a = this.tip(),
                    s = a[0].offsetWidth,
                    l = a[0].offsetHeight;
                a.offset(t).addClass(e).addClass("in"), n = a[0].offsetWidth, i = a[0].offsetHeight, "top" == e && i != l && (t.top = t.top + l - i, r = !0), "bottom" == e || "top" == e ? (o = 0, t.left < 0 && (o = -2 * t.left, t.left = 0, a.offset(t), n = a[0].offsetWidth, i = a[0].offsetHeight), this.replaceArrow(o - s + n, n, "left")) : this.replaceArrow(i - l, i, "top"), r && a.offset(t)
            },
            replaceArrow: function (t, e, n) {
                this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
            },
            setContent: function () {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
            },
            hide: function () {
                function e() {
                    var e = setTimeout(function () {
                        n.off(t.support.transition.end).detach()
                    }, 500);
                    n.one(t.support.transition.end, function () {
                        clearTimeout(e), n.detach()
                    })
                }
                var n = this.tip(),
                    i = t.Event("hide");
                return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : n.detach(), this.$element.trigger("hidden"), this)
            },
            fixTitle: function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            },
            hasContent: function () {
                return this.getTitle()
            },
            getPosition: function () {
                var e = this.$element[0];
                return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }, this.$element.offset())
            },
            getTitle: function () {
                var t, e = this.$element,
                    n = this.options;
                return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
            },
            tip: function () {
                return this.$tip = this.$tip || t(this.options.template)
            },
            arrow: function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },
            validate: function () {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function () {
                this.enabled = !0
            },
            disable: function () {
                this.enabled = !1
            },
            toggleEnabled: function () {
                this.enabled = !this.enabled
            },
            toggle: function (e) {
                var n = e ? t(e.currentTarget)[this.type](this._options).data(this.type) : this;
                n.tip().hasClass("in") ? n.hide() : n.show()
            },
            destroy: function () {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("tooltip"),
                    r = "object" == typeof n && n;
                o || i.data("tooltip", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = n, this
        }
    }(window.jQuery),
    /* ===========================================================
     * bootstrap-popover.js v2.3.2
     * http://twitter.github.com/bootstrap/javascript.html#popovers
     * ===========================================================
     * Copyright 2012 Twitter, Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =========================================================== */
    ! function (t) {
        "use strict";
        var e = function (t, e) {
            this.init("popover", t, e)
        };
        e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {
            constructor: e,
            setContent: function () {
                var t = this.tip(),
                    e = this.getTitle(),
                    n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](n), t.removeClass("fade top bottom left right in")
            },
            hasContent: function () {
                return this.getTitle() || this.getContent()
            },
            getContent: function () {
                var t, e = this.$element,
                    n = this.options;
                return t = ("function" == typeof n.content ? n.content.call(e[0]) : n.content) || e.attr("data-content")
            },
            tip: function () {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip
            },
            destroy: function () {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        });
        var n = t.fn.popover;
        t.fn.popover = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("popover"),
                    r = "object" == typeof n && n;
                o || i.data("popover", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(window.jQuery),
    function () {
        var t, e, n, i = [].slice;
        e = function (t) {
            return _.sortBy(t, function (t) {
                return t.element.offset().top + t.element.offset().left / 1e3
            })
        }, t = angular.module("ym.Validation").directive("requireAllInfo", function () {
            var t;
            return t = ["$scope", "$element", function (t, n) {
                var i;
                return i = [], t.addRequirement = this.addRequirement = function (t) {
                    return i.push(t), i = e(i, n)
                }, t.removeRequirement = this.removeRequirement = function (t) {
                    return i = _.without(i, t)
                }, t.validate = this.validate = function () {
                    return _(i).all(function (t) {
                        return t.valid()
                    })
                }, t.nextPrompt = this.nextPrompt = function () {
                    var t;
                    return t = _.find(i, function (t) {
                        return !t.valid()
                    }), t.prompt()
                }, t
            }], {
                controller: t,
                restrict: "A",
                scope: {}
            }
        }).directive("requireInfo", ["$parse", "$document", function (t, e) {
            var n, o, r;
            return o = ["input", "select", "textarea"], r = function (t) {
                return _.any(_.map(o, function (e) {
                    return t.is(e)
                }))
            }, n = function () {
                function t(t, e, n, i, o) {
                    this.scope = t, this.element = e, this.errorMessage = n, null == i && (i = "top"), this.scrollTarget = null != o ? o : "html, body", this.element.popover({
                        html: !0,
                        placement: i,
                        title: "This information is required",
                        content: "<p>" + this.errorMessage + "</p>",
                        trigger: "manual",
                        delay: 250
                    })
                }
                return t.prototype.prompt = function () {
                    var t;
                    return t = 1 <= arguments.length ? i.call(arguments, 0) : [], $(this.scrollTarget).animate({
                        scrollTop: this.element.offset().top - $(this.scrollTarget).offset().top - 200
                    }, 200), this.element.hasClass("qna") ? (this.element.addClass("error"), $("<div class='text-red g-input-error reqerror'>" + this.errorMessage + "</div>").insertAfter(this.element), e.one("mousedown keydown", function (t) {
                        return function () {
                            return t.element.removeClass("error"), $(".reqerror").remove()
                        }
                    }(this))) : (this.element.popover("show"), e.one("mousedown keydown", function (t) {
                        return function () {
                            return t.element.popover("hide")
                        }
                    }(this))), r(this.element) ? this.element.focus() : this.element.find(o.join(" ")).focus()
                }, t.prototype.valid = function () {
                    return this.scope.valid()
                }, t
            }(), {
                link: function (e, i, o, r) {
                    var a, s, l;
                    return s = r[0], a = r[1], e.dataFn = function () {
                        return "true" !== o.requireInfo.toString() ? t(o.requireInfo)(this) : null != a ? a.$viewValue : void 0
                    }, e.valid = function (t) {
                        return t = this.dataFn(), o.ngPattern ? null != t && o.ngPattern.test(t) : t
                    }, l = new n(e, i, o.errorMessage, o.errorPlacement, o.scrollTarget), s.addRequirement(l), e.$on("$destroy", function () {
                        return s.removeRequirement(l)
                    })
                },
                require: ["^requireAllInfo", "?ngModel"],
                restrict: "A",
                scope: !0
            }
        }]), n = function (t, e, n) {
            return function (i) {
                return e.validate() ? t.$apply(function () {
                    return n(t)
                }) : (i.preventDefault(), i.stopPropagation(), e.nextPrompt())
            }
        }, t.directive("requireAllInfoTrigger", ["$parse", function (t) {
            return {
                link: function (e, i, o, r) {
                    var a;
                    return a = t(o.requireAllInfoTrigger), i.on("click", n(e, r, a))
                },
                require: "^requireAllInfo",
                restrict: "A"
            }
        }]).directive("requireAllInfoSubmit", ["$parse", function (t) {
            return {
                link: function (e, i, o, r) {
                    var a;
                    return a = n(e, r, t(o.requireAllInfoSubmit)), i.on("keydown", function (t) {
                        return 13 === t.which ? a(t) : void 0
                    })
                },
                require: "^requireAllInfo",
                restrict: "A"
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.OfferSignup", ["ui.bootstrap", "ym.Analytics", "ym.Utilities.onlyNumber", "ym.Utilities.maxInput", "ym.Validation"])
    }.call(this),
    function () {
        angular.module("ym.OfferSignup").controller("OfferSignupModalController", ["$scope", "$modalInstance", "$http", "AnalyticsService", "SessionService", function (t, e, n, i, o) {
            return t.user = {}, t.loading = !1, t.done = !1, t.submit = function () {
                return t.loading = !0, o.newsletterSignup(t.user.email, t.user.zip).success(function () {
                    return t.loading = !1, t.done = !0, i.trackEvent("Offer Signup Modal Completed"), setTimeout(function () {
                        return e.dismiss()
                    }, 1e3)
                }).error(function () {
                    return t.loading = !1, e.dismiss()
                })
            }, t.close = function () {
                return $.cookie("osm_hide", "1"), e.dismiss()
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.OfferSignup").controller("OfferSignupController", ["$scope", "$window", "$modal", "SessionService", "AnalyticsService", function (t, e, n, i, o) {
            return e.show_offer && null == $.cookie("osm_hide") ? i.getCurrentUser()["finally"](function () {
                return o.trackLandingEvent("Offer Signup Modal Shown"), n.open({
                    templateUrl: "offer_signup_modal",
                    controller: "OfferSignupModalController",
                    windowClass: "offer-signup-modal",
                    backdrop: "static",
                    keyboard: !1,
                    resolve: {
                        opts: function () {}
                    }
                })
            }) : void 0
        }])
    }.call(this),
    function () {
        angular.module("ym.Referral", ["ui.bootstrap", "ym.Analytics", "ym.Session", "ym.Utilities.onlyNumber", "ym.Utilities.maxInput"]).controller("ReferralLandingController", ["$scope", "$window", "$modal", "SessionService", "AnalyticsService", function (t, e, n, i, o) {
            var r, a;
            return t.opt_in = !0, t.trackLanded = function () {
                return o.trackEvent("User Referral Link - Landed")
            }, a = function (e) {
                var i;
                return o.trackEvent("User Referral Link - Activated"), t.busy = !1, e.message ? (t.loginError = e.message, void 0) : (t.complete = !0, i = "<h1>Congratulations! You've just received $10 towards your next car service.</h1><a class='btn btn-lg btn-primary' href='/book/?login_for=" + e.utoken + "'>Book your first service</a>", n.open({
                    template: "<div class='modal-body' style='text-align:center;'\">" + i + "</div>",
                    controller: ["$scope", "$modalInstance", function () {}]
                }))
            }, r = function (e) {
                var n, i;
                return t.busy = !1, 400 <= (n = e.status) && 500 > n && (t.loginError = null != (i = e.data) ? i.error_message : void 0), t.loginError || (t.loginError = "Something went wrong. Please contact support or try again at a later time.")
            }, t.activate = function () {
                return o.trackEvent("User Referral Link - Activation Requested"), t.complete ? (e.location = "/", void 0) : t.opt_in ? this.referalSignup.$valid ? (t.loginError = null, t.busy = !0, i.referSignup(t.email, t.zipcode, e.refkey, t.opt_in).then(a, r)) : void 0 : (t.loginError = "Please accept the above statement to receive this offer.", o.trackEvent("Failed signup due to opt_out", {
                    email: t.email,
                    zipcode: t.zipcode
                }), void 0)
            }
        }]).controller("OCReferralLandingController", ["$scope", "$window", "$modal", "SessionService", "AnalyticsService", function (t, e, n, i, o) {
            var r, a;
            return t.opt_in = !0, t.trackLanded = function () {
                return o.trackEvent("User Oil Change Referral Link - Landed")
            }, a = function (e) {
                var i;
                return o.trackEvent("User Oil Change Referral Link - Activated"), t.busy = !1, e.message && !e.code ? (t.loginError = e.message, void 0) : (t.complete = !0, i = e.code ? "<h1>Congratulations! Your account has been created</h1><a class='btn btn-lg btn-primary' href='/book/?mktg_jid=278&cpn_code=" + e.code + "'>Book your free oil change</a>" : "<h1>Thank you for your interest in YourMechanic!</h1><p>We regret to inform you we are not currently serving your location. However, a $20 credit has been placed in an account for you, so as soon as our services become available in your neighborhood, you can immediately save on car repair and maintenance.</p><a class='btn btn-lg btn-primary' href='/'>Go to homepage</a>", n.open({
                    template: "<div class='modal-body' style='text-align:center;'\">" + i + "</div>",
                    controller: ["$scope", "$modalInstance", function () {}]
                }))
            }, r = function (e) {
                var n, i;
                return t.busy = !1, 400 <= (n = e.status) && 500 > n && (t.loginError = null != (i = e.data) ? i.error_message : void 0), t.loginError || (t.loginError = "Something went wrong. Please contact support or try again at a later time.")
            }, t.activate = function () {
                return o.trackEvent("User Oil Change Referral Link - Activation Requested"), t.complete ? (e.location = "/", void 0) : t.opt_in ? this.referalSignup.$valid ? (t.loginError = null, t.busy = !0, i.referOCSignup(t.email, t.zipcode, e.oc_cid, t.opt_in).then(a, r)) : void 0 : (t.loginError = "Please accept the above statement to receive this offer.", o.trackEvent("Failed signup due to opt_out", {
                    email: t.email,
                    zipcode: t.zipcode
                }), void 0)
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Modal", ["ui.bootstrap"])
    }.call(this),
    function () {
        angular.module("ym.Modal").controller("ModalController", ["$scope", "$modal", function (t, e) {
            return t.open = function (n) {
                var i;
                return t.videoid = n, i = e.open({
                    animation: !0,
                    templateUrl: "myModalContent.html",
                    controller: "ModalInstanceCtrl",
                    backdrop: !0,
                    size: "lg",
                    resolve: {
                        videoid: function () {
                            return t.videoid
                        }
                    }
                })
            }
        }]), angular.module("ym.Modal").controller("ImageModalController", ["$scope", "$modal", function (t, e) {
            return t.open = function (n) {
                var i;
                return t.imageSrc = n, i = e.open({
                    animation: !0,
                    templateUrl: "myModalContent.html",
                    controller: "ImageModalInstanceCtrl",
                    backdrop: !0,
                    size: "lg",
                    resolve: {
                        imageSrc: function () {
                            return t.imageSrc
                        }
                    }
                })
            }
        }]), angular.module("ym.Modal").controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "$sce", "videoid", function (t, e, n, i) {
            var o;
            o = "//player.vimeo.com/video/" + i + "?autoplay=1", t.videoUrl = n.trustAsResourceUrl(o), t.cancel = function () {
                e.dismiss()
            }
        }]), angular.module("ym.Modal").controller("ImageModalInstanceCtrl", ["$scope", "$modalInstance", "$sce", "imageSrc", function (t, e, n, i) {
            var o;
            o = i, t.imgUrl = n.trustAsResourceUrl(o), t.cancel = function () {
                e.dismiss()
            }
        }])
    }.call(this),
    function () {
        angular.module("ym.Elastic", ["ngRoute", "ym.Analytics", "ym.Session"]).config(["$routeProvider", "$locationProvider", function (t, e) {
            return e.html5Mode(!0), t.when("/search/:index", {
                controller: "ElasticController"
            })
        }])
    }.call(this),
    function () {
        angular.module("ym.Elastic").controller("ElasticController", ["$scope", "$http", "$q", "$routeParams", "$location", "$sce", function (t, e, n, i, o, r) {
            return t.result = [], t.query = "", t.raw = "", t.index = o.$$path.split("/search/")[1], t.renderHtml = function (t) {
                return r.trustAsHtml(t)
            }, t.search = function () {
                var n;
                n = "/common/api/v1/elastic/" + t.index + "/" + t.query, e({
                    method: "GET",
                    url: n,
                    response: "json"
                }).then(function (e) {
                    var n;
                    return t.raw = e.data.elastic, t.result = [], n = [], _.each(e.data.elastic, function (t) {
                        var e;
                        return e = {}, e.name = t.name, e.id = t.id, e.content = t.content, e.url = t.url, n.push(e)
                    }), t.result = n
                })
            }
        }])
    }.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
/* ========================================================================
 * Bootstrap: transition.js v3.3.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: alert.js v3.3.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function (e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(r);
        e && e.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
/* ========================================================================
 * Bootstrap: button.js v3.3.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.1", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: carousel.js v3.3.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = "prev" == t ? -1 : 1,
            i = this.getItemIndex(e),
            o = (i + n) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            a = this.interval,
            s = "next" == e ? "left" : "right",
            l = "next" == e ? "first" : "last",
            c = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[l]()
        }
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            p = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
        if (this.$element.trigger(p), !p.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function () {
                r.removeClass([e, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), c.sliding = !1, setTimeout(function () {
                    c.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var a = t.extend({}, r.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (a.interval = !1), e.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: collapse.js v3.3.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && "show" == e && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.1", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return s.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? (this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION), void 0) : o.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            a = r.data("bs.collapse"),
            s = a ? "toggle" : t.extend({}, o.data(), {
                trigger: this
            });
        n.call(r, s)
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(o).remove(), t(r).each(function () {
            var i = t(this),
                o = n(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r)))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        a = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.1", a.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = n(o),
                a = r.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = n(i),
                    a = o.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = " li:not(.divider):visible a",
                    l = o.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var c = l.index(e.target);
                    38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery),
/* ========================================================================
 * Bootstrap: modal.js v3.3.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var o = t(this),
                r = o.data("bs.modal"),
                a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, a)), "string" == typeof e ? r[e](i) : a.show && r.show(i)
        })
    }
    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function (t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
    }, n.prototype.adjustBackdrop = function () {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            a = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, a, this)
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e,
                a = r && r.selector;
            (o || "destroy" != e) && (a ? (o || i.data("bs.tooltip", o = {}), o[a] || (o[a] = new n(this, r))) : o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? (n.hoverState = "in", void 0) : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? (n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show), void 0) : n.show())
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? (n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide), void 0) : n.hide()
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(),
                p = r[0].offsetWidth,
                d = r[0].offsetHeight;
            if (c) {
                var f = s,
                    h = this.options.container ? t(this.options.container) : this.$element.parent(),
                    m = this.getPosition(h);
                s = "bottom" == s && u.bottom + d > m.bottom ? "top" : "top" == s && u.top - d < m.top ? "bottom" : "right" == s && u.right + p > m.width ? "left" : "left" == s && u.left - p < m.left ? "right" : s, r.removeClass(f).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, p, d);
            this.applyPlacement(g, s);
            var v = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var p = /top|bottom/.test(n),
            d = p ? 2 * u.left - o + l : 2 * u.top - r + c,
            f = p ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][f], p)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = this.tip(),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            s = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, s, r)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - r - a.scroll,
                l = e.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < a.left ? o.left = a.left - c : u > a.width && (o.left = a.left + a.width - u)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery),
/* ========================================================================
 * Bootstrap: popover.js v3.3.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e,
                a = r && r.selector;
            (o || "destroy" != e) && (a ? (o || i.data("bs.popover", o = {}), o[a] || (o[a] = new n(this, r))) : o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.1", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery),
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(n, i) {
        var o = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(n).is("body") ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = "offset",
            n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function () {
            var i = t(this),
                o = i.data("target") || i.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[e]().top + n, o]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return a != (t = r[r.length - 1]) && this.activate(t);
        if (a && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) a != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: tab.js v3.3.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, o) {
        function r() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var a = i.find("> .active"),
            s = o && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
/* ========================================================================
 * Bootstrap: affix.js v3.3.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.1", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + a ? !1 : "bottom";
        var s = null == this.affixed,
            l = s ? o : r.top,
            c = s ? a : e;
        return null != n && n >= l ? "top" : null != i && l + c >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                a = t("body").height();
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var s = this.getState(a, e, o, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), window.Modernizr = function (t, e, n) {
        function i(t) {
            b.cssText = t
        }

        function o(t, e) {
            return i(k.join(t + ";") + (e || ""))
        }

        function r(t, e) {
            return typeof t === e
        }

        function a(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function s(t, e) {
            for (var i in t) {
                var o = t[i];
                if (!a(o, "-") && b[o] !== n) return "pfx" == e ? o : !0
            }
            return !1
        }

        function l(t, e, i) {
            for (var o in t) {
                var a = e[t[o]];
                if (a !== n) return i === !1 ? t[o] : r(a, "function") ? a.bind(i || e) : a
            }
            return !1
        }

        function c(t, e, n) {
            var i = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + E.join(i + " ") + i).split(" ");
            return r(e, "string") || r(e, "undefined") ? s(o, e) : (o = (t + " " + T.join(i + " ") + i).split(" "), l(o, e, n))
        }

        function u() {
            h.input = function (n) {
                for (var i = 0, o = n.length; o > i; i++) O[n[i]] = n[i] in w;
                return O.list && (O.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), O
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function (t) {
                for (var i, o, r, a = 0, s = t.length; s > a; a++) w.setAttribute("type", o = t[a]), i = "text" !== w.type, i && (w.value = $, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (g.appendChild(w), r = e.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != $)), _[t[a]] = !!i;
                return _
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var p, d, f = "2.8.3",
            h = {},
            m = !0,
            g = e.documentElement,
            v = "modernizr",
            y = e.createElement(v),
            b = y.style,
            w = e.createElement("input"),
            $ = ":)",
            x = {}.toString,
            k = " -webkit- -moz- -o- -ms- ".split(" "),
            C = "Webkit Moz O ms",
            E = C.split(" "),
            T = C.toLowerCase().split(" "),
            S = {
                svg: "http://www.w3.org/2000/svg"
            },
            D = {},
            _ = {},
            O = {},
            A = [],
            I = A.slice,
            M = function (t, n, i, o) {
                var r, a, s, l, c = e.createElement("div"),
                    u = e.body,
                    p = u || e.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = e.createElement("div"), s.id = o ? o[i] : v + (i + 1), c.appendChild(s);
                return r = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), c.id = v, (u ? c : p).innerHTML += r, p.appendChild(c), u || (p.style.background = "", p.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(p)), a = n(c, t), u ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p), g.style.overflow = l), !!a
            },
            R = function (e) {
                var n = t.matchMedia || t.msMatchMedia;
                if (n) return n(e) && n(e).matches || !1;
                var i;
                return M("@media " + e + " { #" + v + " { position: absolute; } }", function (e) {
                    i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), i
            },
            P = function () {
                function t(t, o) {
                    o = o || e.createElement(i[t] || "div"), t = "on" + t;
                    var a = t in o;
                    return a || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), a = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, a
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            L = {}.hasOwnProperty;
        d = r(L, "undefined") || r(L.call, "undefined") ? function (t, e) {
            return e in t && r(t.constructor.prototype[e], "undefined")
        } : function (t, e) {
            return L.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var n = I.call(arguments, 1),
                i = function () {
                    if (this instanceof i) {
                        var o = function () {};
                        o.prototype = e.prototype;
                        var r = new o,
                            a = e.apply(r, n.concat(I.call(arguments)));
                        return Object(a) === a ? a : r
                    }
                    return e.apply(t, n.concat(I.call(arguments)))
                };
            return i
        }), D.flexbox = function () {
            return c("flexWrap")
        }, D.canvas = function () {
            var t = e.createElement("canvas");
            return !!t.getContext && !!t.getContext("2d")
        }, D.canvastext = function () {
            return !!h.canvas && !!r(e.createElement("canvas").getContext("2d").fillText, "function")
        }, D.webgl = function () {
            return !!t.WebGLRenderingContext
        }, D.touch = function () {
            var n;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : M(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                n = 9 === t.offsetTop
            }), n
        }, D.geolocation = function () {
            return "geolocation" in navigator
        }, D.postmessage = function () {
            return !!t.postMessage
        }, D.websqldatabase = function () {
            return !!t.openDatabase
        }, D.indexedDB = function () {
            return !!c("indexedDB", t)
        }, D.hashchange = function () {
            return P("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
        }, D.history = function () {
            return !!t.history && !!history.pushState
        }, D.draganddrop = function () {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, D.websockets = function () {
            return "WebSocket" in t || "MozWebSocket" in t
        }, D.rgba = function () {
            return i("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
        }, D.hsla = function () {
            return i("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
        }, D.multiplebgs = function () {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, D.backgroundsize = function () {
            return c("backgroundSize")
        }, D.borderimage = function () {
            return c("borderImage")
        }, D.borderradius = function () {
            return c("borderRadius")
        }, D.boxshadow = function () {
            return c("boxShadow")
        }, D.textshadow = function () {
            return "" === e.createElement("div").style.textShadow
        }, D.opacity = function () {
            return o("opacity:.55"), /^0.55$/.test(b.opacity)
        }, D.cssanimations = function () {
            return c("animationName")
        }, D.csscolumns = function () {
            return c("columnCount")
        }, D.cssgradients = function () {
            var t = "background-image:",
                e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return i((t + "-webkit- ".split(" ").join(e + t) + k.join(n + t)).slice(0, -t.length)), a(b.backgroundImage, "gradient")
        }, D.cssreflections = function () {
            return c("boxReflect")
        }, D.csstransforms = function () {
            return !!c("transform")
        }, D.csstransforms3d = function () {
            var t = !!c("perspective");
            return t && "webkitPerspective" in g.style && M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, D.csstransitions = function () {
            return c("transition")
        }, D.fontface = function () {
            var t;
            return M('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
                var o = e.getElementById("smodernizr"),
                    r = o.sheet || o.styleSheet,
                    a = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
                t = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
            }), t
        }, D.generatedcontent = function () {
            var t;
            return M(["#", v, "{font:0/0 a}#", v, ':after{content:"', $, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
                t = e.offsetHeight >= 3
            }), t
        }, D.video = function () {
            var t = e.createElement("video"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, D.audio = function () {
            var t = e.createElement("audio"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, D.localstorage = function () {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, D.sessionstorage = function () {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, D.webworkers = function () {
            return !!t.Worker
        }, D.applicationcache = function () {
            return !!t.applicationCache
        }, D.svg = function () {
            return !!e.createElementNS && !!e.createElementNS(S.svg, "svg").createSVGRect
        }, D.inlinesvg = function () {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == S.svg
        }, D.smil = function () {
            return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(S.svg, "animate")))
        }, D.svgclippaths = function () {
            return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(S.svg, "clipPath")))
        };
        for (var j in D) d(D, j) && (p = j.toLowerCase(), h[p] = D[j](), A.push((h[p] ? "" : "no-") + p));
        return h.input || u(), h.addTest = function (t, e) {
                if ("object" == typeof t)
                    for (var i in t) d(t, i) && h.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), h[t] !== n) return h;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), h[t] = e
                }
                return h
            }, i(""), y = w = null,
            function (t, e) {
                function n(t, e) {
                    var n = t.createElement("p"),
                        i = t.getElementsByTagName("head")[0] || t.documentElement;
                    return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var t = y.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function o(t) {
                    var e = v[t[m]];
                    return e || (e = {}, g++, t[m] = g, v[g] = e), e
                }

                function r(t, n, i) {
                    if (n || (n = e), u) return n.createElement(t);
                    i || (i = o(n));
                    var r;
                    return r = i.cache[t] ? i.cache[t].cloneNode() : h.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !r.canHaveChildren || f.test(t) || r.tagUrn ? r : i.frag.appendChild(r)
                }

                function a(t, n) {
                    if (t || (t = e), u) return t.createDocumentFragment();
                    n = n || o(t);
                    for (var r = n.frag.cloneNode(), a = 0, s = i(), l = s.length; l > a; a++) r.createElement(s[a]);
                    return r
                }

                function s(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                        return y.shivMethods ? r(n, t, e) : e.createElem(n)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function (t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(y, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var i = o(t);
                    return y.shivCSS && !c && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || s(t, i), t
                }
                var c, u, p = "3.7.0",
                    d = t.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function () {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function () {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (n) {
                        c = !0, u = !0
                    }
                }();
                var y = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: p,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: r,
                    createDocumentFragment: a
                };
                t.html5 = y, l(e)
            }(this, e), h._version = f, h._prefixes = k, h._domPrefixes = T, h._cssomPrefixes = E, h.mq = R, h.hasEvent = P, h.testProp = function (t) {
                return s([t])
            }, h.testAllProps = c, h.testStyles = M, h.prefixed = function (t, e, n) {
                return e ? c(t, e, n) : c(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + A.join(" ") : ""), h
    }(this, this.document),
    function (t, e, n) {
        function i(t) {
            return "[object Function]" == g.call(t)
        }

        function o(t) {
            return "string" == typeof t
        }

        function r() {}

        function a(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function s() {
            var t = v.shift();
            y = 1, t ? t.t ? h(function () {
                ("c" == t.t ? d.injectCss : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), s()) : y = 0
        }

        function l(t, n, i, o, r, l, c) {
            function u(e) {
                if (!f && a(p.readyState) && (b.r = f = 1, !y && s(), p.onload = p.onreadystatechange = null, e)) {
                    "img" != t && h(function () {
                        $.removeChild(p)
                    }, 50);
                    for (var i in T[n]) T[n].hasOwnProperty(i) && T[n][i].onload()
                }
            }
            var c = c || d.errorTimeout,
                p = e.createElement(t),
                f = 0,
                g = 0,
                b = {
                    t: i,
                    s: n,
                    e: r,
                    a: l,
                    x: c
                };
            1 === T[n] && (g = 1, T[n] = []), "object" == t ? p.data = n : (p.src = n, p.type = t), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function () {
                u.call(this, g)
            }, v.splice(o, 0, b), "img" != t && (g || 2 === T[n] ? ($.insertBefore(p, w ? null : m), h(u, c)) : T[n].push(p))
        }

        function c(t, e, n, i, r) {
            return y = 0, e = e || "j", o(t) ? l("c" == e ? k : x, t, e, this.i++, n, i, r) : (v.splice(this.i++, 0, t), 1 == v.length && s()), this
        }

        function u() {
            var t = d;
            return t.loader = {
                load: c,
                i: 0
            }, t
        }
        var p, d, f = e.documentElement,
            h = t.setTimeout,
            m = e.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in f.style,
            w = b && !!e.createRange().compareNode,
            $ = w ? f : m.parentNode,
            f = t.opera && "[object Opera]" == g.call(t.opera),
            f = !!e.attachEvent && !f,
            x = b ? "object" : f ? "script" : "img",
            k = f ? "script" : x,
            C = Array.isArray || function (t) {
                return "[object Array]" == g.call(t)
            },
            E = [],
            T = {},
            S = {
                timeout: function (t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        d = function (t) {
            function e(t) {
                var e, n, i, t = t.split("!"),
                    o = E.length,
                    r = t.pop(),
                    a = t.length,
                    r = {
                        url: r,
                        origUrl: r,
                        prefixes: t
                    };
                for (n = 0; a > n; n++) i = t[n].split("="), (e = S[i.shift()]) && (r = e(r, i));
                for (n = 0; o > n; n++) r = E[n](r);
                return r
            }

            function a(t, o, r, a, s) {
                var l = e(t),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = i(o) ? o : o[t] || o[a] || o[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, o, r, a, s) : (T[l.url] ? l.noexec = !0 : T[l.url] = 1, r.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(o) || i(c)) && r.load(function () {
                    u(), o && o(l.origUrl, s, a), c && c(l.origUrl, s, a), T[l.url] = 2
                })))
            }

            function s(t, e) {
                function n(t, n) {
                    if (t) {
                        if (o(t)) n || (p = function () {
                            var t = [].slice.call(arguments);
                            d.apply(this, t), f()
                        }), a(t, p, e, 0, c);
                        else if (Object(t) === t)
                            for (l in s = function () {
                                    var e, n = 0;
                                    for (e in t) t.hasOwnProperty(e) && n++;
                                    return n
                                }(), t) t.hasOwnProperty(l) && (!n && !--s && (i(p) ? p = function () {
                                var t = [].slice.call(arguments);
                                d.apply(this, t), f()
                            } : p[l] = function (t) {
                                return function () {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), f()
                                }
                            }(d[l])), a(t[l], p, e, l, c))
                    } else !n && f()
                }
                var s, l, c = !!t.test,
                    u = t.load || t.both,
                    p = t.callback || r,
                    d = p,
                    f = t.complete || r;
                n(c ? t.yep : t.nope, !!u), u && n(u)
            }
            var l, c, p = this.yepnope.loader;
            if (o(t)) a(t, 0, p, 0);
            else if (C(t))
                for (l = 0; l < t.length; l++) c = t[l], o(c) ? a(c, 0, p, 0) : C(c) ? d(c) : Object(c) === c && s(c, p);
            else Object(t) === t && s(t, p)
        }, d.addPrefix = function (t, e) {
            S[t] = e
        }, d.addFilter = function (t) {
            E.push(t)
        }, d.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", p = function () {
            e.removeEventListener("DOMContentLoaded", p, 0), e.readyState = "complete"
        }, 0)), t.yepnope = u(), t.yepnope.executeStack = s, t.yepnope.injectJs = function (t, n, i, o, l, c) {
            var u, p, f = e.createElement("script"),
                o = o || d.errorTimeout;
            f.src = t;
            for (p in i) f.setAttribute(p, i[p]);
            n = c ? s : n || r, f.onreadystatechange = f.onload = function () {
                !u && a(f.readyState) && (u = 1, n(), f.onload = f.onreadystatechange = null)
            }, h(function () {
                u || (u = 1, n(1))
            }, o), l ? f.onload() : m.parentNode.insertBefore(f, m)
        }, t.yepnope.injectCss = function (t, n, i, o, a, l) {
            var c, o = e.createElement("link"),
                n = l ? s : n || r;
            o.href = t, o.rel = "stylesheet", o.type = "text/css";
            for (c in i) o.setAttribute(c, i[c]);
            a || (m.parentNode.insertBefore(o, m), h(n, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    /*! Respond.js v1.4.2: min/max-width media query polyfill
     * Copyright 2014 Scott Jehl
     * Licensed under MIT
     * http://j.mp/respondjs */
    ! function (t) {
        "use strict";
        t.matchMedia = t.matchMedia || function (t) {
            var e, n = t.documentElement,
                i = n.firstElementChild || n.firstChild,
                o = t.createElement("body"),
                r = t.createElement("div");
            return r.id = "mq-test-1", r.style.cssText = "position:absolute;top:-100em", o.style.background = "none", o.appendChild(r),
                function (t) {
                    return r.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(o, i), e = 42 === r.offsetWidth, n.removeChild(o), {
                        matches: e,
                        media: t
                    }
                }
        }(t.document)
    }(this),
    function (t) {
        "use strict";

        function e() {
            $(!0)
        }
        var n = {};
        t.respond = n, n.update = function () {};
        var i = [],
            o = function () {
                var e = !1;
                try {
                    e = new t.XMLHttpRequest
                } catch (n) {
                    e = new t.ActiveXObject("Microsoft.XMLHTTP")
                }
                return function () {
                    return e
                }
            }(),
            r = function (t, e) {
                var n = o();
                n && (n.open("GET", t, !0), n.onreadystatechange = function () {
                    4 !== n.readyState || 200 !== n.status && 304 !== n.status || e(n.responseText)
                }, 4 !== n.readyState && n.send(null))
            },
            a = function (t) {
                return t.replace(n.regex.minmaxwh, "").match(n.regex.other)
            };
        if (n.ajax = r, n.queue = i, n.unsupportedmq = a, n.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
                comments: /\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
                other: /\([^\)]*\)/g
            }, n.mediaQueriesSupported = t.matchMedia && null !== t.matchMedia("only all") && t.matchMedia("only all").matches, !n.mediaQueriesSupported) {
            var s, l, c, u = t.document,
                p = u.documentElement,
                d = [],
                f = [],
                h = [],
                m = {},
                g = 30,
                v = u.getElementsByTagName("head")[0] || p,
                y = u.getElementsByTagName("base")[0],
                b = v.getElementsByTagName("link"),
                w = function () {
                    var t, e = u.createElement("div"),
                        n = u.body,
                        i = p.style.fontSize,
                        o = n && n.style.fontSize,
                        r = !1;
                    return e.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = r = u.createElement("body"), n.style.background = "none"), p.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(e), r && p.insertBefore(n, p.firstChild), t = e.offsetWidth, r ? p.removeChild(n) : n.removeChild(e), p.style.fontSize = i, o && (n.style.fontSize = o), t = c = parseFloat(t)
                },
                $ = function (e) {
                    var n = "clientWidth",
                        i = p[n],
                        o = "CSS1Compat" === u.compatMode && i || u.body[n] || i,
                        r = {},
                        a = b[b.length - 1],
                        m = (new Date).getTime();
                    if (e && s && g > m - s) return t.clearTimeout(l), l = t.setTimeout($, g), void 0;
                    s = m;
                    for (var y in d)
                        if (d.hasOwnProperty(y)) {
                            var x = d[y],
                                k = x.minw,
                                C = x.maxw,
                                E = null === k,
                                T = null === C,
                                S = "em";
                            k && (k = parseFloat(k) * (k.indexOf(S) > -1 ? c || w() : 1)), C && (C = parseFloat(C) * (C.indexOf(S) > -1 ? c || w() : 1)), x.hasquery && (E && T || !(E || o >= k) || !(T || C >= o)) || (r[x.media] || (r[x.media] = []), r[x.media].push(f[x.rules]))
                        } for (var D in h) h.hasOwnProperty(D) && h[D] && h[D].parentNode === v && v.removeChild(h[D]);
                    h.length = 0;
                    for (var _ in r)
                        if (r.hasOwnProperty(_)) {
                            var O = u.createElement("style"),
                                A = r[_].join("\n");
                            O.type = "text/css", O.media = _, v.insertBefore(O, a.nextSibling), O.styleSheet ? O.styleSheet.cssText = A : O.appendChild(u.createTextNode(A)), h.push(O)
                        }
                },
                x = function (t, e, i) {
                    var o = t.replace(n.regex.comments, "").replace(n.regex.keyframes, "").match(n.regex.media),
                        r = o && o.length || 0;
                    e = e.substring(0, e.lastIndexOf("/"));
                    var s = function (t) {
                            return t.replace(n.regex.urls, "$1" + e + "$2$3")
                        },
                        l = !r && i;
                    e.length && (e += "/"), l && (r = 1);
                    for (var c = 0; r > c; c++) {
                        var u, p, h, m;
                        l ? (u = i, f.push(s(t))) : (u = o[c].match(n.regex.findStyles) && RegExp.$1, f.push(RegExp.$2 && s(RegExp.$2))), h = u.split(","), m = h.length;
                        for (var g = 0; m > g; g++) p = h[g], a(p) || d.push({
                            media: p.split("(")[0].match(n.regex.only) && RegExp.$2 || "all",
                            rules: f.length - 1,
                            hasquery: p.indexOf("(") > -1,
                            minw: p.match(n.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: p.match(n.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    $()
                },
                k = function () {
                    if (i.length) {
                        var e = i.shift();
                        r(e.href, function (n) {
                            x(n, e.href, e.media), m[e.href] = !0, t.setTimeout(function () {
                                k()
                            }, 0)
                        })
                    }
                },
                C = function () {
                    for (var e = 0; e < b.length; e++) {
                        var n = b[e],
                            o = n.href,
                            r = n.media,
                            a = n.rel && "stylesheet" === n.rel.toLowerCase();
                        o && a && !m[o] && (n.styleSheet && n.styleSheet.rawCssText ? (x(n.styleSheet.rawCssText, o, r), m[o] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(o) && !y || o.replace(RegExp.$1, "").split("/")[0] === t.location.host) && ("//" === o.substring(0, 2) && (o = t.location.protocol + o), i.push({
                            href: o,
                            media: r
                        })))
                    }
                    k()
                };
            C(), n.update = C, n.getEmValue = w, t.addEventListener ? t.addEventListener("resize", e, !1) : t.attachEvent && t.attachEvent("onresize", e)
        }
    }(this),
    /*!
     * Retina.js v1.3.0
     *
     * Copyright 2014 Imulus, LLC
     * Released under the MIT license
     *
     * Retina.js is an open source script that makes it easy to serve
     * high-resolution images to devices with retina displays.
     */
    function () {
        function t() {}

        function e(t) {
            return r.retinaImageSuffix + t
        }

        function n(t, n) {
            if (this.path = t || "", "undefined" != typeof n && null !== n) this.at_2x_path = n, this.perform_check = !1;
            else {
                if (void 0 !== document.createElement) {
                    var i = document.createElement("a");
                    i.href = this.path, i.pathname = i.pathname.replace(a, e), this.at_2x_path = i.href
                } else {
                    var o = this.path.split("?");
                    o[0] = o[0].replace(a, e), this.at_2x_path = o.join("?")
                }
                this.perform_check = !0
            }
        }

        function i(t) {
            this.el = t, this.path = new n(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
            var e = this;
            this.path.check_2x_variant(function (t) {
                t && e.swap()
            })
        }
        var o = "undefined" == typeof exports ? window : exports,
            r = {
                retinaImageSuffix: "@2x",
                check_mime_type: !0,
                force_original_dimensions: !0
            };
        o.Retina = t, t.configure = function (t) {
            null === t && (t = {});
            for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e])
        }, t.init = function (t) {
            null === t && (t = o);
            var e = t.onload || function () {};
            t.onload = function () {
                var t, n, o = document.getElementsByTagName("img"),
                    r = [];
                for (t = 0; t < o.length; t += 1) n = o[t], n.getAttributeNode("data-no-retina") || r.push(new i(n));
                e()
            }
        }, t.isRetina = function () {
            var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
            return o.devicePixelRatio > 1 ? !0 : o.matchMedia && o.matchMedia(t).matches ? !0 : !1
        };
        var a = /\.\w+$/;
        o.RetinaImagePath = n, n.confirmed_paths = [], n.prototype.is_external = function () {
            return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
        }, n.prototype.check_2x_variant = function (t) {
            var e, i = this;
            return this.is_external() ? t(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in n.confirmed_paths ? t(!0) : (e = new XMLHttpRequest, e.open("HEAD", this.at_2x_path), e.onreadystatechange = function () {
                if (4 !== e.readyState) return t(!1);
                if (e.status >= 200 && e.status <= 399) {
                    if (r.check_mime_type) {
                        var o = e.getResponseHeader("Content-Type");
                        if (null === o || !o.match(/^image/i)) return t(!1)
                    }
                    return n.confirmed_paths.push(i.at_2x_path), t(!0)
                }
                return t(!1)
            }, e.send(), void 0) : t(!0)
        }, o.RetinaImage = i, i.prototype.swap = function (t) {
            function e() {
                n.el.complete ? (r.force_original_dimensions && (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight)), n.el.setAttribute("src", t)) : setTimeout(e, 5)
            }
            "undefined" == typeof t && (t = this.path.at_2x_path);
            var n = this;
            e()
        }, t.isRetina() && t.init(o)
    }(),
    /*! Sidr - v1.2.1 - 2013-11-06
     * https://github.com/artberri/sidr
     * Copyright (c) 2013 Alberto Varela; Licensed MIT */
    function (t) {
        var e = !1,
            n = !1,
            i = {
                isUrl: function (t) {
                    var e = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                    return e.test(t) ? !0 : !1
                },
                loadContent: function (t, e) {
                    t.html(e)
                },
                addPrefix: function (t) {
                    var e = t.attr("id"),
                        n = t.attr("class");
                    "string" == typeof e && "" !== e && t.attr("id", e.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof n && "" !== n && "sidr-inner" !== n && t.attr("class", n.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), t.removeAttr("style")
                },
                execute: function (i, r, a) {
                    "function" == typeof r ? (a = r, r = "sidr") : r || (r = "sidr");
                    var s, l, c, u = t("#" + r),
                        p = t(u.data("body")),
                        d = t("html"),
                        f = u.outerWidth(!0),
                        h = u.data("speed"),
                        m = u.data("side"),
                        g = u.data("displace"),
                        v = u.data("onOpen"),
                        y = u.data("onClose"),
                        b = "sidr" === r ? "sidr-open" : "sidr-open " + r + "-open";
                    if ("open" === i || "toggle" === i && !u.is(":visible")) {
                        if (u.is(":visible") || e) return;
                        if (n !== !1) return o.close(n, function () {
                            o.open(r)
                        }), void 0;
                        e = !0, "left" === m ? (s = {
                            left: f + "px"
                        }, l = {
                            left: "0px"
                        }) : (s = {
                            right: f + "px"
                        }, l = {
                            right: "0px"
                        }), p.is("body") && (c = d.scrollTop(), d.css("overflow-x", "hidden").scrollTop(c)), g ? p.addClass("sidr-animating").css({
                            width: p.width(),
                            position: "absolute"
                        }).animate(s, h, function () {
                            t(this).addClass(b)
                        }) : setTimeout(function () {
                            t(this).addClass(b)
                        }, h), u.css("display", "block").animate(l, h, function () {
                            e = !1, n = r, "function" == typeof a && a(r), p.removeClass("sidr-animating")
                        }), v()
                    } else {
                        if (!u.is(":visible") || e) return;
                        e = !0, "left" === m ? (s = {
                            left: 0
                        }, l = {
                            left: "-" + f + "px"
                        }) : (s = {
                            right: 0
                        }, l = {
                            right: "-" + f + "px"
                        }), p.is("body") && (c = d.scrollTop(), d.removeAttr("style").scrollTop(c)), p.addClass("sidr-animating").animate(s, h).removeClass(b), u.animate(l, h, function () {
                            u.removeAttr("style").hide(), p.removeAttr("style"), t("html").removeAttr("style"), e = !1, n = !1, "function" == typeof a && a(r), p.removeClass("sidr-animating")
                        }), y()
                    }
                }
            },
            o = {
                open: function (t, e) {
                    i.execute("open", t, e)
                },
                close: function (t, e) {
                    i.execute("close", t, e)
                },
                toggle: function (t, e) {
                    i.execute("toggle", t, e)
                },
                toogle: function (t, e) {
                    i.execute("toggle", t, e)
                }
            };
        t.sidr = function (e) {
            return o[e] ? o[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof e && "string" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.sidr"), void 0) : o.toggle.apply(this, arguments)
        }, t.fn.sidr = function (e) {
            var n = t.extend({
                    name: "sidr",
                    speed: 200,
                    side: "left",
                    source: null,
                    renaming: !0,
                    body: "body",
                    displace: !0,
                    onOpen: function () {},
                    onClose: function () {}
                }, e),
                r = n.name,
                a = t("#" + r);
            if (0 === a.length && (a = t("<div />").attr("id", r).appendTo(t("body"))), a.addClass("sidr").addClass(n.side).data({
                    speed: n.speed,
                    side: n.side,
                    body: n.body,
                    displace: n.displace,
                    onOpen: n.onOpen,
                    onClose: n.onClose
                }), "function" == typeof n.source) {
                var s = n.source(r);
                i.loadContent(a, s)
            } else if ("string" == typeof n.source && i.isUrl(n.source)) t.get(n.source, function (t) {
                i.loadContent(a, t)
            });
            else if ("string" == typeof n.source) {
                var l = "",
                    c = n.source.split(",");
                if (t.each(c, function (e, n) {
                        l += '<div class="sidr-inner">' + t(n).html() + "</div>"
                    }), n.renaming) {
                    var u = t("<div />").html(l);
                    u.find("*").each(function (e, n) {
                        var o = t(n);
                        i.addPrefix(o)
                    }), l = u.html()
                }
                i.loadContent(a, l)
            } else null !== n.source && t.error("Invalid Sidr Source");
            return this.each(function () {
                var e = t(this),
                    n = e.data("sidr");
                n || (e.data("sidr", r), "ontouchstart" in document.documentElement ? (e.bind("touchstart", function (t) {
                    t.originalEvent.touches[0], this.touched = t.timeStamp
                }), e.bind("touchend", function (t) {
                    var e = Math.abs(t.timeStamp - this.touched);
                    200 > e && (t.preventDefault(), o.toggle(r))
                })) : e.click(function (t) {
                    t.preventDefault(), o.toggle(r)
                }))
            })
        }
    }(jQuery), ! function (t) {
        function e() {}

        function n(t) {
            function n(e) {
                e.prototype.option || (e.prototype.option = function (e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function o(e, n) {
                t.fn[e] = function (o) {
                    if ("string" == typeof o) {
                        for (var a = i.call(arguments, 1), s = 0, l = this.length; l > s; s++) {
                            var c = this[s],
                                u = t.data(c, e);
                            if (u)
                                if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                    var p = u[o].apply(u, a);
                                    if (void 0 !== p) return p
                                } else r("no such method '" + o + "' for " + e + " instance");
                            else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function () {
                        var i = t.data(this, e);
                        i ? (i.option(o), i._init()) : (i = new n(this, o), t.data(this, e, i))
                    })
                }
            }
            if (t) {
                var r = "undefined" == typeof console ? e : function (t) {
                    console.error(t)
                };
                return t.bridget = function (t, e) {
                    n(e), o(t, e)
                }, t.bridget
            }
        }
        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function (t) {
        function e(e) {
            var n = t.event;
            return n.target = n.target || n.srcElement || e, n
        }
        var n = document.documentElement,
            i = function () {};
        n.addEventListener ? i = function (t, e, n) {
            t.addEventListener(e, n, !1)
        } : n.attachEvent && (i = function (t, n, i) {
            t[n + i] = i.handleEvent ? function () {
                var n = e(t);
                i.handleEvent.call(i, n)
            } : function () {
                var n = e(t);
                i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var o = function () {};
        n.removeEventListener ? o = function (t, e, n) {
            t.removeEventListener(e, n, !1)
        } : n.detachEvent && (o = function (t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (i) {
                t[e + n] = void 0
            }
        });
        var r = {
            bind: i,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(window),
    function () {
        function t() {}

        function e(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }

        function n(t) {
            return function () {
                return this[t].apply(this, arguments)
            }
        }
        var i = t.prototype,
            o = this,
            r = o.EventEmitter;
        i.getListeners = function (t) {
            var e, n, i = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
            } else e = i[t] || (i[t] = []);
            return e
        }, i.flattenListeners = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
            return n
        }, i.getListenersAsObject = function (t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && (e = {}, e[t] = n), e || n
        }, i.addListener = function (t, n) {
            var i, o = this.getListenersAsObject(t),
                r = "object" == typeof n;
            for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function (t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function (t) {
            return this.getListeners(t), this
        }, i.defineEvents = function (t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, i.removeListener = function (t, n) {
            var i, o, r = this.getListenersAsObject(t);
            for (o in r) r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, i.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, i.manipulateListeners = function (t, e, n) {
            var i, o, r = t ? this.removeListener : this.addListener,
                a = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (i = n.length; i--;) r.call(this, e, n[i]);
            else
                for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
            return this
        }, i.removeEvent = function (t) {
            var e, n = typeof t,
                i = this._getEvents();
            if ("string" === n) delete i[t];
            else if (t instanceof RegExp)
                for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (t, e) {
            var n, i, o, r, a = this.getListenersAsObject(t);
            for (o in a)
                if (a.hasOwnProperty(o))
                    for (i = a[o].length; i--;) n = a[o][i], n.once === !0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, i.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, i._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function () {
            return this._events || (this._events = {})
        }, t.noConflict = function () {
            return o.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
    }.call(this),
    function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof i[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = n.length; r > o; o++)
                    if (e = n[o] + t, "string" == typeof i[e]) return e
            }
        }
        var n = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function (t) {
        function e(t) {
            var e = parseFloat(t),
                n = -1 === t.indexOf("%") && !isNaN(e);
            return n && e
        }

        function n() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, n = a.length; n > e; e++) {
                var i = a[e];
                t[i] = 0
            }
            return t
        }

        function o(n) {
            function o() {
                if (!d) {
                    d = !0;
                    var i = t.getComputedStyle;
                    if (c = function () {
                            var t = i ? function (t) {
                                return i(t, null)
                            } : function (t) {
                                return t.currentStyle
                            };
                            return function (e) {
                                var n = t(e);
                                return n || r("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                            }
                        }(), u = n("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                        var a = document.body || document.documentElement;
                        a.appendChild(o);
                        var s = c(o);
                        p = 200 === e(s.width), a.removeChild(o)
                    }
                }
            }

            function s(t) {
                if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var n = c(t);
                    if ("none" === n.display) return i();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var s = r.isBorderBox = !(!u || !n[u] || "border-box" !== n[u]), d = 0, f = a.length; f > d; d++) {
                        var h = a[d],
                            m = n[h];
                        m = l(t, m);
                        var g = parseFloat(m);
                        r[h] = isNaN(g) ? 0 : g
                    }
                    var v = r.paddingLeft + r.paddingRight,
                        y = r.paddingTop + r.paddingBottom,
                        b = r.marginLeft + r.marginRight,
                        w = r.marginTop + r.marginBottom,
                        $ = r.borderLeftWidth + r.borderRightWidth,
                        x = r.borderTopWidth + r.borderBottomWidth,
                        k = s && p,
                        C = e(n.width);
                    C !== !1 && (r.width = C + (k ? 0 : v + $));
                    var E = e(n.height);
                    return E !== !1 && (r.height = E + (k ? 0 : y + x)), r.innerWidth = r.width - (v + $), r.innerHeight = r.height - (y + x), r.outerWidth = r.width + b, r.outerHeight = r.height + w, r
                }
            }

            function l(e, n) {
                if (t.getComputedStyle || -1 === n.indexOf("%")) return n;
                var i = e.style,
                    o = i.left,
                    r = e.runtimeStyle,
                    a = r && r.left;
                return a && (r.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, a && (r.left = a), n
            }
            var c, u, p, d = !1;
            return s
        }
        var r = "undefined" == typeof console ? n : function (t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : a.push(t))
        }

        function n(t) {
            var n = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || n || i()
        }

        function i() {
            e.isReady = !0;
            for (var t = 0, n = a.length; n > t; t++) {
                var i = a[t];
                i()
            }
        }

        function o(o) {
            return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(t, "load", n)), e
        }
        var r = t.document,
            a = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
    }(window),
    function (t) {
        function e(t, e) {
            return t[a](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function i(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)
                if (i[o] === t) return !0;
            return !1
        }

        function o(t, i) {
            return n(t), e(t, i)
        }
        var r, a = function () {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
                var o = e[n],
                    r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (a) {
            var s = document.createElement("div"),
                l = e(s, "div");
            r = l ? e : o
        } else r = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (n, i) {
            return e(t, n, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function (t, e, n) {
        var i = {};
        i.extend = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, i.modulo = function (t, e) {
            return (t % e + e) % e
        };
        var o = Object.prototype.toString;
        i.isArray = function (t) {
            return "[object Array]" == o.call(t)
        }, i.makeArray = function (t) {
            var e = [];
            if (i.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, i.indexOf = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n] === e) return n;
            return -1
        }, i.removeFrom = function (t, e) {
            var n = i.indexOf(t, e); - 1 != n && t.splice(n, 1)
        }, i.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
            return t instanceof HTMLElement
        } : function (t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, i.setText = function () {
            function t(t, n) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = n
            }
            var e;
            return t
        }(), i.getParent = function (t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, n(t, e)) return t
        }, i.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function (t, e) {
            t = i.makeArray(t);
            for (var o = [], r = 0, a = t.length; a > r; r++) {
                var s = t[r];
                if (i.isElement(s))
                    if (e) {
                        n(s, e) && o.push(s);
                        for (var l = s.querySelectorAll(e), c = 0, u = l.length; u > c; c++) o.push(l[c])
                    } else o.push(s)
            }
            return o
        }, i.debounceMethod = function (t, e, n) {
            var i = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    r = this;
                this[o] = setTimeout(function () {
                    i.apply(r, e), delete r[o]
                }, n || 100)
            }
        }, i.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var r = t.console;
        return i.htmlInit = function (n, o) {
            e(function () {
                for (var e = i.toDashed(o), a = document.querySelectorAll(".js-" + e), s = "data-" + e + "-options", l = 0, c = a.length; c > l; l++) {
                    var u, p = a[l],
                        d = p.getAttribute(s);
                    try {
                        u = d && JSON.parse(d)
                    } catch (f) {
                        r && r.error("Error parsing " + s + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + f);
                        continue
                    }
                    var h = new n(p, u),
                        m = t.jQuery;
                    m && m.data(p, o, h)
                }
            })
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (n, i, o, r) {
            return e(t, n, i, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function (t, e, n, i, o) {
        function r(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var s = t.getComputedStyle,
            l = s ? function (t) {
                return s(t, null)
            } : function (t) {
                return t.currentStyle
            },
            c = i("transition"),
            u = i("transform"),
            p = c && u,
            d = !!i("perspective"),
            f = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            } [c],
            h = ["transform", "transition", "transitionDuration", "transitionProperty"],
            m = function () {
                for (var t = {}, e = 0, n = h.length; n > e; e++) {
                    var o = h[e],
                        r = i(o);
                    r && r !== o && (t[o] = r)
                }
                return t
            }();
        o.extend(a.prototype, e.prototype), a.prototype._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function () {
            this.size = n(this.element)
        }, a.prototype.css = function (t) {
            var e = this.element.style;
            for (var n in t) {
                var i = m[n] || n;
                e[i] = t[n]
            }
        }, a.prototype.getPosition = function () {
            var t = l(this.element),
                e = this.layout.options,
                n = e.isOriginLeft,
                i = e.isOriginTop,
                o = parseInt(t[n ? "left" : "right"], 10),
                r = parseInt(t[i ? "top" : "bottom"], 10);
            o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            o -= n ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
        }, a.prototype.layoutPosition = function () {
            var t = this.layout.size,
                e = this.layout.options,
                n = {},
                i = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                o = e.isOriginLeft ? "left" : "right",
                r = e.isOriginLeft ? "right" : "left",
                a = this.position.x + t[i];
            a = e.percentPosition && !e.isHorizontal ? 100 * (a / t.width) + "%" : a + "px", n[o] = a, n[r] = "";
            var s = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                c = e.isOriginTop ? "bottom" : "top",
                u = this.position.y + t[s];
            u = e.percentPosition && e.isHorizontal ? 100 * (u / t.height) + "%" : u + "px", n[l] = u, n[c] = "", this.css(n), this.emitEvent("layout", [this])
        };
        var g = d ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function (t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                o = parseInt(t, 10),
                r = parseInt(e, 10),
                a = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), a && !this.isTransitioning) return void this.layoutPosition();
            var s = t - n,
                l = e - i,
                c = {},
                u = this.layout.options;
            s = u.isOriginLeft ? s : -s, l = u.isOriginTop ? l : -l, c.transform = g(s, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = p ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var v = u && o.toDashed(u) + ",opacity";
        a.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(f, this, !1))
        }, a.prototype.transition = a.prototype[c ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var y = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        a.prototype.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = y[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], r(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var i = e.onEnd[n];
                    i.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function (t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var b = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return a.prototype.removeTransitionStyles = function () {
            this.css(b)
        }, a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, a.prototype.remove = function () {
            if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function () {
                t.removeElem()
            }), this.hide()
        }, a.prototype.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[n] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, a.prototype.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, a.prototype.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, a.prototype.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                n = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[n] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, a.prototype.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, a.prototype.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, o, r, a) {
            return e(t, n, i, o, r, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, n, i, o, r) {
        function a(t, e) {
            var n = o.getQueryElement(t);
            if (!n) return void(s && s.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
            var i = ++u;
            this.element.outlayerGUID = i, p[i] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var s = t.console,
            l = t.jQuery,
            c = function () {},
            u = 0,
            p = {};
        return a.namespace = "outlayer", a.Item = r, a.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, o.extend(a.prototype, n.prototype), a.prototype.option = function (t) {
            o.extend(this.options, t)
        }, a.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, a.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, a.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
                var a = e[o],
                    s = new n(a, this);
                i.push(s)
            }
            return i
        }, a.prototype._filterFindItemElements = function (t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, a.prototype.getItemElements = function () {
            for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
            return t
        }, a.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, a.prototype._init = a.prototype.layout, a.prototype._resetLayout = function () {
            this.getSize()
        }, a.prototype.getSize = function () {
            this.size = i(this.element)
        }, a.prototype._getMeasurement = function (t, e) {
            var n, r = this.options[t];
            r ? ("string" == typeof r ? n = this.element.querySelector(r) : o.isElement(r) && (n = r), this[t] = n ? i(n)[e] : r) : this[t] = 0
        }, a.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, a.prototype._getItemsForLayout = function (t) {
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var o = t[n];
                o.isIgnored || e.push(o)
            }
            return e
        }, a.prototype._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var n = [], i = 0, o = t.length; o > i; i++) {
                    var r = t[i],
                        a = this._getItemLayoutPosition(r);
                    a.item = r, a.isInstant = e || r.isLayoutInstant, n.push(a)
                }
                this._processLayoutQueue(n)
            }
        }, a.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, a.prototype._processLayoutQueue = function (t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, a.prototype._positionItem = function (t, e, n, i) {
            i ? t.goTo(e, n) : t.moveTo(e, n)
        }, a.prototype._postLayout = function () {
            this.resizeContainer()
        }, a.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, a.prototype._getContainerSize = c, a.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, a.prototype._emitCompleteOnItems = function (t, e) {
            function n() {
                o.emitEvent(t + "Complete", [e])
            }

            function i() {
                a++, a === r && n()
            }
            var o = this,
                r = e.length;
            if (!e || !r) return void n();
            for (var a = 0, s = 0, l = e.length; l > s; s++) {
                var c = e[s];
                c.once(t, i)
            }
        }, a.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, a.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, a.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this.ignore(i)
                }
            }
        }, a.prototype.unstamp = function (t) {
            if (t = this._find(t))
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    o.removeFrom(this.stamps, i), this.unignore(i)
                }
        }, a.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
        }, a.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var n = this.stamps[t];
                    this._manageStamp(n)
                }
            }
        }, a.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, a.prototype._manageStamp = c, a.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                r = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return r
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.bindResize = function () {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, a.prototype.unbindResize = function () {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, a.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, a.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, a.prototype.needsResizeLayout = function () {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, a.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, a.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, a.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, a.prototype.reveal = function (t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, n = 0; e && e > n; n++) {
                var i = t[n];
                i.reveal()
            }
        }, a.prototype.hide = function (t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, n = 0; e && e > n; n++) {
                var i = t[n];
                i.hide()
            }
        }, a.prototype.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, a.prototype.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, a.prototype.getItem = function (t) {
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                if (i.element === t) return i
            }
        }, a.prototype.getItems = function (t) {
            t = o.makeArray(t);
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var r = t[n],
                    a = this.getItem(r);
                a && e.push(a)
            }
            return e
        }, a.prototype.remove = function (t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var n = 0, i = e.length; i > n; n++) {
                    var r = e[n];
                    r.remove(), o.removeFrom(this.items, r)
                }
        }, a.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                i.destroy()
            }
            this.unbindResize();
            var o = this.element.outlayerGUID;
            delete p[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, a.data = function (t) {
            t = o.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && p[e]
        }, a.create = function (t, e) {
            function n() {
                a.apply(this, arguments)
            }
            return Object.create ? n.prototype = Object.create(a.prototype) : o.extend(n.prototype, a.prototype), n.prototype.constructor = n, n.defaults = o.extend({}, a.defaults), o.extend(n.defaults, e), n.prototype.settings = {}, n.namespace = t, n.data = a.data, n.Item = function () {
                r.apply(this, arguments)
            }, n.Item.prototype = new r, o.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
        }, a.Item = r, a
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function (t, e, n) {
        var i = t.create("masonry");
        return i.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                r = o / i,
                a = i - o % i,
                s = a && 1 > a ? "round" : "floor";
            r = Math[s](r), this.cols = Math.max(r, 1)
        }, i.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && 1 > e ? "round" : "ceil",
                o = Math[i](t.size.outerWidth / this.columnWidth);
            o = Math.min(o, this.cols);
            for (var r = this._getColGroup(o), a = Math.min.apply(Math, r), s = n.indexOf(r, a), l = {
                    x: this.columnWidth * s,
                    y: a
                }, c = a + t.size.outerHeight, u = this.cols + 1 - r.length, p = 0; u > p; p++) this.colYs[s + p] = c;
            return l
        }, i.prototype._getColGroup = function (t) {
            if (2 > t) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                var o = this.colYs.slice(i, i + t);
                e[i] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function (t) {
            var n = e(t),
                i = this._getElementOffset(t),
                o = this.options.isOriginLeft ? i.left : i.right,
                r = o + n.outerWidth,
                a = Math.floor(o / this.columnWidth);
            a = Math.max(0, a);
            var s = Math.floor(r / this.columnWidth);
            s -= r % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
            for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, c = a; s >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
        }, i.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, i
    }),
    function (t) {
        "use strict";

        function e(t, e, n) {
            var i;
            return function () {
                var o = this,
                    r = arguments,
                    a = function () {
                        i = null, n || t.apply(o, r)
                    },
                    s = n && !i;
                clearTimeout(i), i = setTimeout(a, e), s && t.apply(o, r)
            }
        }

        function n(t) {
            var e = ++c;
            return String(null == t ? "rmjs-" : t) + e
        }

        function i(t) {
            var e = t.clone().css({
                    height: "auto",
                    width: t.width(),
                    maxHeight: "none",
                    overflow: "hidden"
                }).insertAfter(t),
                n = e.outerHeight(),
                i = parseInt(e.css({
                    maxHeight: ""
                }).css("max-height").replace(/[^-\d\.]/g, ""), 10),
                o = t.data("defaultHeight");
            e.remove();
            var r = i || t.data("collapsedHeight") || o;
            t.data({
                expandedHeight: n,
                maxHeight: i,
                collapsedHeight: r
            }).css({
                maxHeight: "none"
            })
        }

        function o(t) {
            if (!l[t.selector]) {
                var e = " ";
                t.embedCSS && "" !== t.blockCSS && (e += t.selector + " + [data-readmore-toggle], " + t.selector + "[data-readmore]{" + t.blockCSS + "}"), e += t.selector + "[data-readmore]{" + "transition: height " + t.speed + "ms;" + "overflow: hidden;" + "}",
                    function (t, e) {
                        var n = t.createElement("style");
                        n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e)), t.getElementsByTagName("head")[0].appendChild(n)
                    }(document, e), l[t.selector] = !0
            }
        }

        function r(e, n) {
            this.element = e, this.options = t.extend({}, s, n), o(this.options), this._defaults = s, this._name = a, this.init(), window.addEventListener ? (window.addEventListener("load", u), window.addEventListener("resize", u)) : (window.attachEvent("load", u), window.attachEvent("resize", u))
        }
        var a = "readmore",
            s = {
                speed: 100,
                collapsedHeight: 200,
                heightMargin: 16,
                moreLink: '<a href="#" class=".read-more">Read More <div class="expandable-indicator"></div></a>" ',
                lessLink: '<a href="#">Close</a>',
                embedCSS: !0,
                blockCSS: "display: block; width: 100%;",
                startOpen: !1,
                beforeToggle: function () {},
                afterToggle: function () {}
            },
            l = {},
            c = 0,
            u = e(function () {
                t("[data-readmore]").each(function () {
                    var e = t(this),
                        n = "true" === e.attr("aria-expanded");
                    i(e), e.css({
                        height: e.data(n ? "expandedHeight" : "collapsedHeight")
                    })
                })
            }, 100);
        r.prototype = {
            init: function () {
                var e = this,
                    o = t(this.element);
                o.data({
                    defaultHeight: this.options.collapsedHeight,
                    heightMargin: this.options.heightMargin
                }), i(o);
                var r = o.data("collapsedHeight"),
                    a = o.data("heightMargin");
                if (o.outerHeight(!0) <= r + a) return !0;
                var s = o.attr("id") || n(),
                    l = e.options.startOpen ? e.options.lessLink : e.options.moreLink;
                o.attr({
                    "data-readmore": "",
                    "aria-expanded": !1,
                    id: s
                }), o.after(t(l).on("click", function (t) {
                    e.toggle(this, o[0], t)
                }).attr({
                    "data-readmore-toggle": "",
                    "aria-controls": s
                })), e.options.startOpen || o.css({
                    height: r
                })
            },
            toggle: function (e, n, i) {
                i && i.preventDefault(), e || (e = t('[aria-controls="' + this.element.id + '"]')[0]), n || (n = this.element);
                var o = this,
                    r = t(n),
                    a = "",
                    s = "",
                    l = !1,
                    c = r.data("collapsedHeight");
                r.height() <= c ? (a = r.data("expandedHeight") + "px", s = "lessLink", l = !0) : (a = c, s = "moreLink"), o.options.beforeToggle(e, n, !l), r.css({
                    height: a
                }), r.on("transitionend", function () {
                    o.options.afterToggle(e, n, l), t(this).attr({
                        "aria-expanded": l
                    }).off("transitionend")
                }), t(e).replaceWith(t(o.options[s]).on("click", function (t) {
                    o.toggle(this, n, t)
                }).attr({
                    "data-readmore-toggle": "",
                    "aria-controls": r.attr("id")
                }))
            },
            destroy: function () {
                t(this.element).each(function () {
                    var e = t(this);
                    e.attr({
                        "data-readmore": null,
                        "aria-expanded": null
                    }).css({
                        maxHeight: "",
                        height: ""
                    }).next("[data-readmore-toggle]").remove(), e.removeData()
                })
            }
        }, t.fn.readmore = function (e) {
            var n = arguments,
                i = this.selector;
            return e = e || {}, "object" == typeof e ? this.each(function () {
                if (t.data(this, "plugin_" + a)) {
                    var n = t.data(this, "plugin_" + a);
                    n.destroy.apply(n)
                }
                e.selector = i, t.data(this, "plugin_" + a, new r(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
                var i = t.data(this, "plugin_" + a);
                i instanceof r && "function" == typeof i[e] && i[e].apply(i, Array.prototype.slice.call(n, 1))
            }) : void 0
        }
    }(jQuery),
    function (t) {
        t.fn.sticky = function (e) {
            function n() {
                return "number" == typeof r.zIndex ? !0 : !1
            }

            function i() {
                return 0 < t(r.stopper).length || "number" == typeof r.stopper ? !0 : !1
            }
            var o = {
                    topSpacing: 0,
                    zIndex: "",
                    stopper: ".sticky-stopper"
                },
                r = t.extend({}, o, e),
                a = n(),
                s = i();
            return this.each(function () {
                function e() {
                    var e = d.scrollTop();
                    if (s && "string" == typeof p) var r = t(p).offset().top,
                        f = r - i - o;
                    else if (s && "number" == typeof p) var f = p;
                    if (e > c) {
                        if (n.after(u).css({
                                position: "fixed",
                                top: o
                            }), a && n.css({
                                zIndex: l
                            }), s && e > f) {
                            var h = f - e + o;
                            n.css({
                                top: h
                            })
                        }
                    } else n.css({
                        position: "static",
                        top: null,
                        left: null
                    }), u.remove()
                }
                var n = t(this),
                    i = n.outerHeight(),
                    o = (n.outerWidth(), r.topSpacing),
                    l = r.zIndex,
                    c = n.offset().top - o,
                    u = t("<div></div>"),
                    p = r.stopper,
                    d = t(window);
                d.bind("scroll", e)
            })
        }
    }(jQuery),
    function () {
        var t, e, n, i, o;
        o = function () {
            var t;
            return t = $(".floating-labels .cd-label").nextAll(), t.each(function () {
                var t;
                t = $(this), t.prev(".cd-label").addClass("float")
            })
        }, e = function (t) {
            return "" === t.val() ? t.prev(".cd-label").removeClass("float") : t.prev(".cd-label").addClass("float")
        }, t = function () {
            var t;
            return t = $(".floating-labels .cd-label").next(), t.each(function () {
                var t;
                return t = $(this), e(t)
            })
        }, i = function () {
            var t, e;
            t = void 0, e = void 0, t = $("form.iphone-app-txt"), 0 !== t.length && (e = t.find("input"), e.on("keypress", function (t) {
                return n(t.which) && e.val().length < 12 ? !0 : t.preventDefault()
            })), t.submit(function (e) {
                var n, i;
                return $(".txt-success").hide(), $(".txt-error").hide(), i = void 0, i = function (t) {
                    return "A link to download the app has been sent to " + t + ". We hope you like it!"
                }, n = void 0, t.parent().hasClass("has-error") ? void 0 : (e.preventDefault(), jQuery.ajax("/casa_user/api/v1/users/txt_app", {
                    type: "POST",
                    dataType: "json",
                    data: {
                        phone: (n = $("form.iphone-app-txt input").val()).replace(/-/g, "")
                    }
                }).success(function () {
                    return $(".txt-success").fadeIn().find(".alert-success").text(i(n))
                }).fail(function () {
                    return $(".txt-error").fadeIn()
                }))
            })
        }, n = function (t) {
            return /[0-9\-]/.test(String.fromCharCode(t)) || 8 === t || 37 === t || 38 === t || 39 === t || 40 === t
        }, $(document).ready(function () {
            return $(".learn-more").on("click", function (t) {
                var e, n;
                return t.preventDefault(), n = this.hash, e = $(n), $("html, body").stop().animate({
                    scrollTop: e.offset().top - 59
                }, 900, "swing", function () {})
            })
        }), i(), jQuery(document).ready(function (n) {
            var i, o, r;
            e = function (t) {
                "" === t.val() ? t.prev(".cd-label").removeClass("float") : t.prev(".cd-label").addClass("float")
            }, t = function () {
                var t;
                t = n(".floating-labels .cd-label").next(), t.each(function () {
                    var t;
                    t = n(this), e(t)
                })
            }, o = function () {
                var e;
                e = n(".floating-labels .cd-label").next(), e.each(function () {
                    var e;
                    e = n(this), e.on("change keyup", function () {
                        t()
                    })
                })
            }, n(".floating-labels").length > 0 && o(), r = !1, i = !n("#navbar").hasClass("menu-white"), n(window).scroll(function () {
                i && (n(window).scrollTop() >= 40 ? r || (n("#navbar").addClass("menu-white"), r = !0) : (n("#navbar").removeClass("menu-white"), r = !1))
            }), n(window).scrollTop() >= 40 ? n("#navbar").addClass("menu-white") : n("#navbar").removeClass("menu-white"), n(".opening").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#currentOpening").offset().top - 70
                }, 500)
            }), n(".serviceBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            }), n(".pricingBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            }), n(".paymentBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            }), n(".schedulingBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            }), n(".partsBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            }), n(".billingBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            }), n(".mechanicsBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            }), n(".warrantyBtn").click(function (t) {
                t.preventDefault(), n("html, body").animate({
                    scrollTop: n("#" + t.target.id + "a").offset().top - 70
                }, 500)
            })
        }), $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        }), $("a[rel=popover]").popover({
            html: !0,
            container: "body",
            trigger: "hover",
            placement: "bottom",
            content: function () {
                return '<img src="' + $(this).data("img") + '" />'
            }
        }), $(document).ready(function () {
            return $(".carousel-home").carousel(function () {
                return {
                    pause: "false",
                    keyboard: "true"
                }
            }), $(window).width() < 480 ? $(".carousel-home").carousel("pause") : void 0
        }), $(document).ready(function () {
            return $("#price-review-carousel").carousel()
        }), $("#sticker").sticky({
            topSpacing: 250,
            zIndex: 100,
            stopper: "#mapwrapper"
        }), $(document).ready(function () {
            return $(window).width() < 992 ? $("#mechanic-sidebars").appendTo($("#about")) : void 0
        }), $(document).ready(function () {
            return $(".review-content-text").readmore({
                collapsedHeight: 200
            }), $(".about-mechanic-text").readmore({
                collapsedHeight: 100
            })
        }), jQuery(document).ready(function (t) {
            var e, n, i, o;
            o = t(".ym-timeline-block"), n = .8, e = function (e, n) {
                e.each(function () {
                    t(this).offset().top > t(window).scrollTop() + t(window).height() * n && t(this).find(".ym-timeline-img, .ym-timeline-content").addClass("is-hidden")
                })
            }, i = function (e, n) {
                e.each(function () {
                    t(this).offset().top <= t(window).scrollTop() + t(window).height() * n && t(this).find(".ym-timeline-img").hasClass("is-hidden") && t(this).find(".ym-timeline-img, .ym-timeline-content").removeClass("is-hidden").addClass("bounce-in")
                })
            }, e(o, n), t(window).on("scroll", function () {
                window.requestAnimationFrame ? window.requestAnimationFrame(function () {
                    i(o, n)
                }) : setTimeout(function () {
                    i(o, n)
                }, 100)
            })
        }), $(document).ready(function () {
            var t, e, n, i, o, r, a, s, l, c, u;
            $(".bar span").hide(), t = parseInt(null != (a = $("#bar-five").children()[0]) ? a.innerHTML : void 0), e = parseInt(null != (s = $("#bar-four").children()[0]) ? s.innerHTML : void 0), i = parseInt(null != (l = $("#bar-three").children()[0]) ? l.innerHTML : void 0), r = parseInt(null != (c = $("#bar-two").children()[0]) ? c.innerHTML : void 0), n = parseInt(null != (u = $("#bar-one").children()[0]) ? u.innerHTML : void 0), o = n + r + i + e + t, t = Math.ceil(100 * t / o).toString() + "%", e = Math.ceil(100 * e / o).toString() + "%", i = Math.ceil(100 * i / o).toString() + "%", r = Math.ceil(100 * r / o).toString() + "%", n = Math.ceil(100 * n / o).toString() + "%", $("#bar-five").animate({
                width: t
            }, 1e3), $("#bar-four").animate({
                width: e
            }, 1e3), $("#bar-three").animate({
                width: i
            }, 1e3), $("#bar-two").animate({
                width: r
            }, 1e3), $("#bar-one").animate({
                width: n
            }, 1e3), setTimeout(function () {
                $(".bar span").fadeIn("slow")
            }, 1e3)
        })
    }.call(this);