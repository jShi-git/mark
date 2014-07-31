function Mutex() {
	this.isLocked = !1, this._waiting = []
}! function(a, b) {
	function c(a) {
		var b = ob[a] = {};
		return $.each(a.split(bb), function(a, c) {
			b[c] = !0
		}), b
	}

	function d(a, c, d) {
		if (d === b && 1 === a.nodeType) {
			var e = "data-" + c.replace(qb, "-$1").toLowerCase();
			if (d = a.getAttribute(e), "string" == typeof d) {
				try {
					d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : pb.test(d) ? $.parseJSON(d) : d
				} catch (f) {}
				$.data(a, c, d)
			} else d = b
		}
		return d
	}

	function e(a) {
		var b;
		for (b in a)
			if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}

	function f() {
		return !1
	}

	function g() {
		return !0
	}

	function h(a) {
		return !a || !a.parentNode || 11 === a.parentNode.nodeType
	}

	function i(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}

	function j(a, b, c) {
		if (b = b || 0, $.isFunction(b)) return $.grep(a, function(a, d) {
			var e = !!b.call(a, d, a);
			return e === c
		});
		if (b.nodeType) return $.grep(a, function(a) {
			return a === b === c
		});
		if ("string" == typeof b) {
			var d = $.grep(a, function(a) {
				return 1 === a.nodeType
			});
			if (Kb.test(b)) return $.filter(b, d, !c);
			b = $.filter(b, d)
		}
		return $.grep(a, function(a) {
			return $.inArray(a, b) >= 0 === c
		})
	}

	function k(a) {
		var b = Nb.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement)
			for (; b.length;) c.createElement(b.pop());
		return c
	}

	function l(a, b) {
		return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
	}

	function m(a, b) {
		if (1 === b.nodeType && $.hasData(a)) {
			var c, d, e, f = $._data(a),
				g = $._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)
					for (d = 0, e = h[c].length; e > d; d++) $.event.add(b, c, h[c][d])
			}
			g.data && (g.data = $.extend({}, g.data))
		}
	}

	function n(a, b) {
		var c;
		1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando))
	}

	function o(a) {
		return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
	}

	function p(a) {
		Xb.test(a.type) && (a.defaultChecked = a.checked)
	}

	function q(a, b) {
		if (b in a) return b;
		for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rc.length; e--;)
			if (b = rc[e] + c, b in a) return b;
		return d
	}

	function r(a, b) {
		return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
	}

	function s(a, b) {
		for (var c, d, e = [], f = 0, g = a.length; g > f; f++) c = a[f], c.style && (e[f] = $._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cc(c, "display"), !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
		for (f = 0; g > f; f++) c = a[f], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
		return a
	}

	function t(a, b, c) {
		var d = kc.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function u(a, b, c, d) {
		for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2) "margin" === c && (f += $.css(a, c + qc[e], !0)), d ? ("content" === c && (f -= parseFloat(cc(a, "padding" + qc[e])) || 0), "margin" !== c && (f -= parseFloat(cc(a, "border" + qc[e] + "Width")) || 0)) : (f += parseFloat(cc(a, "padding" + qc[e])) || 0, "padding" !== c && (f += parseFloat(cc(a, "border" + qc[e] + "Width")) || 0));
		return f
	}

	function v(a, b, c) {
		var d = "width" === b ? a.offsetWidth : a.offsetHeight,
			e = !0,
			f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
		if (0 >= d || null == d) {
			if (d = cc(a, b), (0 > d || null == d) && (d = a.style[b]), lc.test(d)) return d;
			e = f && ($.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
		}
		return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
	}

	function w(a) {
		if (nc[a]) return nc[a];
		var b = $("<" + a + ">").appendTo(P.body),
			c = b.css("display");
		return b.remove(), ("none" === c || "" === c) && (dc = P.body.appendChild(dc || $.extend(P.createElement("iframe"), {
			frameBorder: 0,
			width: 0,
			height: 0
		})), ec && dc.createElement || (ec = (dc.contentWindow || dc.contentDocument).document, ec.write("<!doctype html><html><body>"), ec.close()), b = ec.body.appendChild(ec.createElement(a)), c = cc(b, "display"), P.body.removeChild(dc)), nc[a] = c, c
	}

	function x(a, b, c, d) {
		var e;
		if ($.isArray(b)) $.each(b, function(b, e) {
			c || uc.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== $.type(b)) d(a, b);
		else
			for (e in b) x(a + "[" + e + "]", b[e], c, d)
	}

	function y(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e, f, g = b.toLowerCase().split(bb),
				h = 0,
				i = g.length;
			if ($.isFunction(c))
				for (; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
		}
	}

	function z(a, c, d, e, f, g) {
		f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
		for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Kc; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
		return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)), h
	}

	function A(a, c) {
		var d, e, f = $.ajaxSettings.flatOptions || {};
		for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
		e && $.extend(!0, a, e)
	}

	function B(a, c, d) {
		var e, f, g, h, i = a.contents,
			j = a.dataTypes,
			k = a.responseFields;
		for (f in k) f in d && (c[k[f]] = d[f]);
		for (;
			"*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
		if (e)
			for (f in i)
				if (i[f] && i[f].test(e)) {
					j.unshift(f);
					break
				}
		if (j[0] in d) g = j[0];
		else {
			for (f in d) {
				if (!j[0] || a.converters[f + " " + j[0]]) {
					g = f;
					break
				}
				h || (h = f)
			}
			g = g || h
		}
		return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
	}

	function C(a, b) {
		var c, d, e, f, g = a.dataTypes.slice(),
			h = g[0],
			i = {},
			j = 0;
		if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1])
			for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
		for (; e = g[++j];)
			if ("*" !== e) {
				if ("*" !== h && h !== e) {
					if (c = i[h + " " + e] || i["* " + e], !c)
						for (d in i)
							if (f = d.split(" "), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
								c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
								break
							}
					if (c !== !0)
						if (c && a["throws"]) b = c(b);
						else try {
							b = c(b)
						} catch (k) {
							return {
								state: "parsererror",
								error: c ? k : "No conversion from " + h + " to " + e
							}
						}
				}
				h = e
			}
		return {
			state: "success",
			data: b
		}
	}

	function D() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function E() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}

	function F() {
		return setTimeout(function() {
			Vc = b
		}, 0), Vc = $.now()
	}

	function G(a, b) {
		$.each(b, function(b, c) {
			for (var d = (_c[b] || []).concat(_c["*"]), e = 0, f = d.length; f > e; e++)
				if (d[e].call(a, b, c)) return
		})
	}

	function H(a, b, c) {
		var d, e = 0,
			f = $c.length,
			g = $.Deferred().always(function() {
				delete h.elem
			}),
			h = function() {
				for (var b = Vc || F(), c = Math.max(0, i.startTime + i.duration - b), d = c / i.duration || 0, e = 1 - d, f = 0, h = i.tweens.length; h > f; f++) i.tweens[f].run(e);
				return g.notifyWith(a, [i, e, c]), 1 > e && h ? c : (g.resolveWith(a, [i]), !1)
			},
			i = g.promise({
				elem: a,
				props: $.extend({}, b),
				opts: $.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: Vc || F(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c) {
					var d = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
					return i.tweens.push(d), d
				},
				stop: function(b) {
					for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++) i.tweens[c].run(1);
					return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this
				}
			}),
			j = i.props;
		for (I(j, i.opts.specialEasing); f > e; e++)
			if (d = $c[e].call(i, a, j, i.opts)) return d;
		return G(i, j), $.isFunction(i.opts.start) && i.opts.start.call(a, i), $.fx.timer($.extend(h, {
			anim: i,
			queue: i.opts.queue,
			elem: a
		})), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
	}

	function I(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function J(a, b, c) {
		var d, e, f, g, h, i, j, k, l, m = this,
			n = a.style,
			o = {},
			p = [],
			q = a.nodeType && r(a);
		c.queue || (k = $._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
			k.unqueued || l()
		}), k.unqueued++, m.always(function() {
			m.always(function() {
				k.unqueued--, $.queue(a, "fx").length || k.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", $.support.shrinkWrapBlocks || m.done(function() {
			n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (f = b[d], Xc.exec(f)) {
				if (delete b[d], i = i || "toggle" === f, f === (q ? "hide" : "show")) continue;
				p.push(d)
			}
		if (g = p.length) {
			h = $._data(a, "fxshow") || $._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? $(a).show() : m.done(function() {
				$(a).hide()
			}), m.done(function() {
				var b;
				$.removeData(a, "fxshow", !0);
				for (b in o) $.style(a, b, o[b])
			});
			for (d = 0; g > d; d++) e = p[d], j = m.createTween(e, q ? h[e] : 0), o[e] = h[e] || $.style(a, e), e in h || (h[e] = j.start, q && (j.end = j.start, j.start = "width" === e || "height" === e ? 1 : 0))
		}
	}

	function K(a, b, c, d, e) {
		return new K.prototype.init(a, b, c, d, e)
	}

	function L(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = qc[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function M(a) {
		return $.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	var N, O, P = a.document,
		Q = a.location,
		R = a.navigator,
		S = a.jQuery,
		T = a.$,
		U = Array.prototype.push,
		V = Array.prototype.slice,
		W = Array.prototype.indexOf,
		X = Object.prototype.toString,
		Y = Object.prototype.hasOwnProperty,
		Z = String.prototype.trim,
		$ = function(a, b) {
			return new $.fn.init(a, b, N)
		},
		_ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		ab = /\S/,
		bb = /\s+/,
		cb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		db = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		eb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		fb = /^[\],:{}\s]*$/,
		gb = /(?:^|:|,)(?:\s*\[)+/g,
		hb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		ib = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		jb = /^-ms-/,
		kb = /-([\da-z])/gi,
		lb = function(a, b) {
			return (b + "").toUpperCase()
		},
		mb = function() {
			P.addEventListener ? (P.removeEventListener("DOMContentLoaded", mb, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", mb), $.ready())
		},
		nb = {};
	$.fn = $.prototype = {
		constructor: $,
		init: function(a, c, d) {
			var e, f, g;
			if (!a) return this;
			if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
			if ("string" == typeof a) {
				if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : db.exec(a), e && (e[1] || !c)) {
					if (e[1]) return c = c instanceof $ ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : P, a = $.parseHTML(e[1], g, !0), eb.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
					if (f = P.getElementById(e[2]), f && f.parentNode) {
						if (f.id !== e[2]) return d.find(a);
						this.length = 1, this[0] = f
					}
					return this.context = P, this.selector = a, this
				}
				return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
			}
			return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
		},
		selector: "",
		jquery: "1.8.3",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return V.call(this)
		},
		get: function(a) {
			return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
		},
		pushStack: function(a, b, c) {
			var d = $.merge(this.constructor(), a);
			return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
		},
		each: function(a, b) {
			return $.each(this, a, b)
		},
		ready: function(a) {
			return $.ready.promise().done(a), this
		},
		eq: function(a) {
			return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
		},
		map: function(a) {
			return this.pushStack($.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: U,
		sort: [].sort,
		splice: [].splice
	}, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function() {
		var a, c, d, e, f, g, h = arguments[0] || {},
			i = 1,
			j = arguments.length,
			k = !1;
		for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" != typeof h && !$.isFunction(h) && (h = {}), j === i && (h = this, --i); j > i; i++)
			if (null != (a = arguments[i]))
				for (c in a) d = h[c], e = a[c], h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {}, h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
		return h
	}, $.extend({
		noConflict: function(b) {
			return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? $.readyWait++ : $.ready(!0)
		},
		ready: function(a) {
			if (a === !0 ? !--$.readyWait : !$.isReady) {
				if (!P.body) return setTimeout($.ready, 1);
				$.isReady = !0, a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"))
			}
		},
		isFunction: function(a) {
			return "function" === $.type(a)
		},
		isArray: Array.isArray || function(a) {
			return "array" === $.type(a)
		},
		isWindow: function(a) {
			return null != a && a == a.window
		},
		isNumeric: function(a) {
			return !isNaN(parseFloat(a)) && isFinite(a)
		},
		type: function(a) {
			return null == a ? String(a) : nb[X.call(a)] || "object"
		},
		isPlainObject: function(a) {
			if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a)) return !1;
			try {
				if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			var d;
			for (d in a);
			return d === b || Y.call(a, d)
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		error: function(a) {
			throw new Error(a)
		},
		parseHTML: function(a, b, c) {
			var d;
			return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || P, (d = eb.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null
		},
		parseJSON: function(b) {
			return b && "string" == typeof b ? (b = $.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : fb.test(b.replace(hb, "@").replace(ib, "]").replace(gb, "")) ? new Function("return " + b)() : void $.error("Invalid JSON: " + b)) : null
		},
		parseXML: function(c) {
			var d, e;
			if (!c || "string" != typeof c) return null;
			try {
				a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
			} catch (f) {
				d = b
			}
			return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c), d
		},
		noop: function() {},
		globalEval: function(b) {
			b && ab.test(b) && (a.execScript || function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(jb, "ms-").replace(kb, lb)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, c, d) {
			var e, f = 0,
				g = a.length,
				h = g === b || $.isFunction(a);
			if (d)
				if (h) {
					for (e in a)
						if (c.apply(a[e], d) === !1) break
				} else
					for (; g > f && c.apply(a[f++], d) !== !1;);
			else if (h) {
				for (e in a)
					if (c.call(a[e], e, a[e]) === !1) break
			} else
				for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
			return a
		},
		trim: Z && !Z.call("﻿ ") ? function(a) {
			return null == a ? "" : Z.call(a)
		} : function(a) {
			return null == a ? "" : (a + "").replace(cb, "")
		},
		makeArray: function(a, b) {
			var c, d = b || [];
			return null != a && (c = $.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if (W) return W.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
					if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function(a, c) {
			var d = c.length,
				e = a.length,
				f = 0;
			if ("number" == typeof d)
				for (; d > f; f++) a[e++] = c[f];
			else
				for (; c[f] !== b;) a[e++] = c[f++];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			var d, e = [],
				f = 0,
				g = a.length;
			for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
			return e
		},
		map: function(a, c, d) {
			var e, f, g = [],
				h = 0,
				i = a.length,
				j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
			if (j)
				for (; i > h; h++) e = c(a[h], h, d), null != e && (g[g.length] = e);
			else
				for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
			return g.concat.apply([], g)
		},
		guid: 1,
		proxy: function(a, c) {
			var d, e, f;
			return "string" == typeof c && (d = a[c], c = a, a = d), $.isFunction(a) ? (e = V.call(arguments, 2), f = function() {
				return a.apply(c, e.concat(V.call(arguments)))
			}, f.guid = a.guid = a.guid || $.guid++, f) : b
		},
		access: function(a, c, d, e, f, g, h) {
			var i, j = null == d,
				k = 0,
				l = a.length;
			if (d && "object" == typeof d) {
				for (k in d) $.access(a, c, k, d[k], 1, g, e);
				f = 1
			} else if (e !== b) {
				if (i = h === b && $.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
					return i.call($(a), c)
				}) : (c.call(a, e), c = null)), c)
					for (; l > k; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
				f = 1
			}
			return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
		},
		now: function() {
			return (new Date).getTime()
		}
	}), $.ready.promise = function(b) {
		if (!O)
			if (O = $.Deferred(), "complete" === P.readyState) setTimeout($.ready, 1);
			else if (P.addEventListener) P.addEventListener("DOMContentLoaded", mb, !1), a.addEventListener("load", $.ready, !1);
		else {
			P.attachEvent("onreadystatechange", mb), a.attachEvent("onload", $.ready);
			var c = !1;
			try {
				c = null == a.frameElement && P.documentElement
			} catch (d) {}
			c && c.doScroll && function e() {
				if (!$.isReady) {
					try {
						c.doScroll("left")
					} catch (a) {
						return setTimeout(e, 50)
					}
					$.ready()
				}
			}()
		}
		return O.promise(b)
	}, $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
		nb["[object " + b + "]"] = b.toLowerCase()
	}), N = $(P);
	var ob = {};
	$.Callbacks = function(a) {
		a = "string" == typeof a ? ob[a] || c(a) : $.extend({}, a);
		var d, e, f, g, h, i, j = [],
			k = !a.once && [],
			l = function(b) {
				for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
					if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
						d = !1;
						break
					}
				f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
			},
			m = {
				add: function() {
					if (j) {
						var b = j.length;
						! function c(b) {
							$.each(b, function(b, d) {
								var e = $.type(d);
								"function" === e ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && "string" !== e && c(d)
							})
						}(arguments), f ? h = j.length : d && (g = b, l(d))
					}
					return this
				},
				remove: function() {
					return j && $.each(arguments, function(a, b) {
						for (var c;
							(c = $.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
					}), this
				},
				has: function(a) {
					return $.inArray(a, j) > -1
				},
				empty: function() {
					return j = [], this
				},
				disable: function() {
					return j = k = d = b, this
				},
				disabled: function() {
					return !j
				},
				lock: function() {
					return k = b, d || m.disable(), this
				},
				locked: function() {
					return !k
				},
				fireWith: function(a, b) {
					return b = b || [], b = [a, b.slice ? b.slice() : b], j && (!e || k) && (f ? k.push(b) : l(b)), this
				},
				fire: function() {
					return m.fireWith(this, arguments), this
				},
				fired: function() {
					return !!e
				}
			};
		return m
	}, $.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", $.Callbacks("once memory"), "resolved"],
					["reject", "fail", $.Callbacks("once memory"), "rejected"],
					["notify", "progress", $.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return $.Deferred(function(c) {
							$.each(b, function(b, d) {
								var f = d[0],
									g = a[b];
								e[d[1]]($.isFunction(g) ? function() {
									var a = g.apply(this, arguments);
									a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
								} : c[f])
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return null != a ? $.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, $.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b, c, d, e = 0,
				f = V.call(arguments),
				g = f.length,
				h = 1 !== g || a && $.isFunction(a.promise) ? g : 0,
				i = 1 === h ? a : $.Deferred(),
				j = function(a, c, d) {
					return function(e) {
						c[a] = this, d[a] = arguments.length > 1 ? V.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
					}
				};
			if (g > 1)
				for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	}), $.support = function() {
		var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
		if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
		e = P.createElement("select"), f = e.appendChild(P.createElement("option")), g = m.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
			leadingWhitespace: 3 === m.firstChild.nodeType,
			tbody: !m.getElementsByTagName("tbody").length,
			htmlSerialize: !!m.getElementsByTagName("link").length,
			style: /top/.test(d.getAttribute("style")),
			hrefNormalized: "/a" === d.getAttribute("href"),
			opacity: /^0.5/.test(d.style.opacity),
			cssFloat: !!d.style.cssFloat,
			checkOn: "on" === g.value,
			optSelected: f.selected,
			getSetAttribute: "t" !== m.className,
			enctype: !!P.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === P.compatMode,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
		try {
			delete m.test
		} catch (n) {
			b.deleteExpando = !1
		}
		if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function() {
			b.noCloneEvent = !1
		}), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)
			for (j in {
				submit: !0,
				change: !0,
				focusin: !0
			}) i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
		return $(function() {
			var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
				h = P.getElementsByTagName("body")[0];
			h && (c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {
				width: "4px"
			}).width, f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
		}), h.removeChild(m), c = d = e = f = g = h = m = null, b
	}();
	var pb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		qb = /([A-Z])/g;
	$.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando], !!a && !e(a)
		},
		data: function(a, c, d, e) {
			if ($.acceptData(a)) {
				var f, g, h = $.expando,
					i = "string" == typeof c,
					j = a.nodeType,
					k = j ? $.cache : a,
					l = j ? a[h] : a[h] && h;
				if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = $.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[$.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[$.camelCase(c)])) : g = f, g
			}
		},
		removeData: function(a, b, c) {
			if ($.acceptData(a)) {
				var d, f, g, h = a.nodeType,
					i = h ? $.cache : a,
					j = h ? a[$.expando] : $.expando;
				if (i[j]) {
					if (b && (d = c ? i[j] : i[j].data)) {
						$.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b = b in d ? [b] : b.split(" ")));
						for (f = 0, g = b.length; g > f; f++) delete d[b[f]];
						if (!(c ? e : $.isEmptyObject)(d)) return
					}(c || (delete i[j].data, e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
				}
			}
		},
		_data: function(a, b, c) {
			return $.data(a, b, c, !0)
		},
		acceptData: function(a) {
			var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
			return !b || b !== !0 && a.getAttribute("classid") === b
		}
	}), $.fn.extend({
		data: function(a, c) {
			var e, f, g, h, i, j = this[0],
				k = 0,
				l = null;
			if (a === b) {
				if (this.length && (l = $.data(j), 1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
					for (g = j.attributes, i = g.length; i > k; k++) h = g[k].name, h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
					$._data(j, "parsedAttrs", !0)
				}
				return l
			}
			return "object" == typeof a ? this.each(function() {
				$.data(this, a)
			}) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this, function(c) {
				return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, void this.each(function() {
					var b = $(this);
					b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e)
				}))
			}, null, c, arguments.length > 1, null, !1))
		},
		removeData: function(a) {
			return this.each(function() {
				$.removeData(this, a)
			})
		}
	}), $.extend({
		queue: function(a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = $.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = $._queueHooks(a, b),
				g = function() {
					$.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return $._data(a, c) || $._data(a, c, {
				empty: $.Callbacks("once memory").add(function() {
					$.removeData(a, b + "queue", !0), $.removeData(a, c, !0)
				})
			})
		}
	}), $.fn.extend({
		queue: function(a, c) {
			var d = 2;
			return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function() {
				var b = $.queue(this, a, c);
				$._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				$.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			var d, e = 1,
				f = $.Deferred(),
				g = this,
				h = this.length,
				i = function() {
					--e || f.resolveWith(g, [g])
				};
			for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = $._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
			return i(), f.promise(c)
		}
	});
	var rb, sb, tb, ub = /[\t\r\n]/g,
		vb = /\r/g,
		wb = /^(?:button|input)$/i,
		xb = /^(?:button|input|object|select|textarea)$/i,
		yb = /^a(?:rea|)$/i,
		zb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		Ab = $.support.getSetAttribute;
	$.fn.extend({
		attr: function(a, b) {
			return $.access(this, $.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				$.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return $.access(this, $.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = $.propFix[a] || a, this.each(function() {
				try {
					this[a] = b, delete this[a]
				} catch (c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, f, g, h;
			if ($.isFunction(a)) return this.each(function(b) {
				$(this).addClass(a.call(this, b, this.className))
			});
			if (a && "string" == typeof a)
				for (b = a.split(bb), c = 0, d = this.length; d > c; c++)
					if (e = this[c], 1 === e.nodeType)
						if (e.className || 1 !== b.length) {
							for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
							e.className = $.trim(f)
						} else e.className = a;
			return this
		},
		removeClass: function(a) {
			var c, d, e, f, g, h, i;
			if ($.isFunction(a)) return this.each(function(b) {
				$(this).removeClass(a.call(this, b, this.className))
			});
			if (a && "string" == typeof a || a === b)
				for (c = (a || "").split(bb), h = 0, i = this.length; i > h; h++)
					if (e = this[h], 1 === e.nodeType && e.className) {
						for (d = (" " + e.className + " ").replace(ub, " "), f = 0, g = c.length; g > f; f++)
							for (; d.indexOf(" " + c[f] + " ") >= 0;) d = d.replace(" " + c[f] + " ", " ");
						e.className = a ? $.trim(d) : ""
					}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = "boolean" == typeof b;
			return this.each($.isFunction(a) ? function(c) {
				$(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function() {
				if ("string" === c)
					for (var e, f = 0, g = $(this), h = b, i = a.split(bb); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
				else("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e, f = this[0]; {
				if (arguments.length) return e = $.isFunction(a), this.each(function(d) {
					var f, g = $(this);
					1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function(a) {
						return null == a ? "" : a + ""
					})), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
				});
				if (f) return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(vb, "") : null == d ? "" : d)
			}
		}
	}), $.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || ($.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && $.nodeName(c.parentNode, "optgroup"))) {
							if (b = $(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function(a, b) {
					var c = $.makeArray(b);
					return $(a).find("option").each(function() {
						this.selected = $.inArray($(this).val(), c) >= 0
					}), c.length || (a.selectedIndex = -1), c
				}
			}
		},
		attrFn: {},
		attr: function(a, c, d, e) {
			var f, g, h, i = a.nodeType;
			if (a && 3 !== i && 8 !== i && 2 !== i) return e && $.isFunction($.fn[c]) ? $(a)[c](d) : "undefined" == typeof a.getAttribute ? $.prop(a, c, d) : (h = 1 !== i || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (zb.test(c) ? sb : rb)), d !== b ? null === d ? void $.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
		},
		removeAttr: function(a, b) {
			var c, d, e, f, g = 0;
			if (b && 1 === a.nodeType)
				for (d = b.split(bb); g < d.length; g++) e = d[g], e && (c = $.propFix[e] || e, f = zb.test(e), f || $.attr(a, e, ""), a.removeAttribute(Ab ? e : c), f && c in a && (a[c] = !1))
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (wb.test(a.nodeName) && a.parentNode) $.error("type property can't be changed");
					else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			},
			value: {
				get: function(a, b) {
					return rb && $.nodeName(a, "button") ? rb.get(a, b) : b in a ? a.value : null
				},
				set: function(a, b, c) {
					return rb && $.nodeName(a, "button") ? rb.set(a, b, c) : void(a.value = b)
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !$.isXMLDoc(a), g && (c = $.propFix[c] || c, f = $.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : xb.test(a.nodeName) || yb.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}), sb = {
		get: function(a, c) {
			var d, e = $.prop(a, c);
			return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			var d;
			return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
		}
	}, Ab || (tb = {
		name: !0,
		id: !0,
		coords: !0
	}, rb = $.valHooks.button = {
		get: function(a, c) {
			var d;
			return d = a.getAttributeNode(c), d && (tb[c] ? "" !== d.value : d.specified) ? d.value : b
		},
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || (d = P.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
		}
	}, $.each(["width", "height"], function(a, b) {
		$.attrHooks[b] = $.extend($.attrHooks[b], {
			set: function(a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		})
	}), $.attrHooks.contenteditable = {
		get: rb.get,
		set: function(a, b, c) {
			"" === b && (b = "false"), rb.set(a, b, c)
		}
	}), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function(a, c) {
		$.attrHooks[c] = $.extend($.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return null === d ? b : d
			}
		})
	}), $.support.style || ($.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || b
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	}), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	})), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function() {
		$.valHooks[this] = {
			get: function(a) {
				return null === a.getAttribute("value") ? "on" : a.value
			}
		}
	}), $.each(["radio", "checkbox"], function() {
		$.valHooks[this] = $.extend($.valHooks[this], {
			set: function(a, b) {
				return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0
			}
		})
	});
	var Bb = /^(?:textarea|input|select)$/i,
		Cb = /^([^\.]*|)(?:\.(.+)|)$/,
		Db = /(?:^|\s)hover(\.\S+|)\b/,
		Eb = /^key/,
		Fb = /^(?:mouse|contextmenu)|click/,
		Gb = /^(?:focusinfocus|focusoutblur)$/,
		Hb = function(a) {
			return $.event.special.hover ? a : a.replace(Db, "mouseenter$1 mouseleave$1")
		};
	$.event = {
		add: function(a, c, d, e, f) {
			var g, h, i, j, k, l, m, n, o, p, q;
			if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
				for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
					return "undefined" == typeof $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
				}, h.elem = a), c = $.trim(Hb(c)).split(" "), j = 0; j < c.length; j++) k = Cb.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = $.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = $.event.special[l] || {}, n = $.extend({
					type: l,
					origType: k[1],
					data: e,
					handler: d,
					guid: d.guid,
					selector: f,
					needsContext: f && $.expr.match.needsContext.test(f),
					namespace: m.join(".")
				}, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), $.event.global[l] = !0;
				a = null
			}
		},
		global: {},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
			if (q && (m = q.events)) {
				for (b = $.trim(Hb(b || "")).split(" "), f = 0; f < b.length; f++)
					if (g = Cb.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
						for (n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++) p = o[l], !(!e && i !== p.origType || c && c.guid !== p.guid || j && !j.test(p.namespace) || d && d !== p.selector && ("**" !== d || !p.selector) || (o.splice(l--, 1), p.selector && o.delegateCount--, !n.remove || !n.remove.call(a, p)));
						0 === o.length && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle), delete m[h])
					} else
						for (h in m) $.event.remove(a, h + b[f], c, d, !0);
				$.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0))
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(c, d, e, f) {
			if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
				var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
					r = [];
				if (Gb.test(q + $.event.triggered)) return;
				if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || $.event.customEvent[q]) && !$.event.global[q]) return;
				if (c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) {
					g = $.cache;
					for (i in g) g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
					return
				}
				if (c.result = b, c.target || (c.target = e), d = null != d ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1) return;
				if (o = [
					[e, m.bindType || q]
				], !f && !m.noBubble && !$.isWindow(e)) {
					for (p = m.delegateType || q, j = Gb.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode) o.push([j, p]), k = j;
					k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
				}
				for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
				return c.type = q, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && $.nodeName(e, "a") || !$.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || $.isWindow(e) || (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, !k || !(e[l] = k))), c.result
			}
		},
		dispatch: function(c) {
			c = $.event.fix(c || a.event);
			var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [],
				n = m.delegateCount,
				o = V.call(arguments),
				p = !c.exclusive && !c.namespace,
				q = $.event.special[c.type] || {},
				r = [];
			if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
				if (n && (!c.button || "click" !== c.type))
					for (f = c.target; f != this; f = f.parentNode || this)
						if (f.disabled !== !0 || "click" !== c.type) {
							for (h = {}, j = [], d = 0; n > d; d++) k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length), h[l] && j.push(k);
							j.length && r.push({
								elem: f,
								matches: j
							})
						}
				for (m.length > n && r.push({
					elem: this,
					matches: m.slice(n)
				}), d = 0; d < r.length && !c.isPropagationStopped(); d++)
					for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) k = i.matches[e], (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
				return q.postDispatch && q.postDispatch.call(this, c), c.result
			}
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, c) {
				var d, e, f, g = c.button,
					h = c.fromElement;
				return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
			}
		},
		fix: function(a) {
			if (a[$.expando]) return a;
			var b, c, d = a,
				e = $.event.fixHooks[a.type] || {},
				f = e.props ? this.props.concat(e.props) : this.props;
			for (a = $.Event(d), b = f.length; b;) c = f[--b], a[c] = d[c];
			return a.target || (a.target = d.srcElement || P), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(a, b, c) {
					$.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = $.extend(new $.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, $.event.handle = $.event.dispatch, $.removeEvent = P.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		var d = "on" + b;
		a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
	}, $.Event = function(a, b) {
		return this instanceof $.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0, void 0) : new $.Event(a, b)
	}, $.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = g;
			var a = this.originalEvent;
			a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = g;
			var a = this.originalEvent;
			a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = g, this.stopPropagation()
		},
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f
	}, $.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		$.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				{
					var c, d = this,
						e = a.relatedTarget,
						f = a.handleObj;
					f.selector
				}
				return (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), $.support.submitBubbles || ($.event.special.submit = {
		setup: function() {
			return $.nodeName(this, "form") ? !1 : void $.event.add(this, "click._submit keypress._submit", function(a) {
				var c = a.target,
					d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
				d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function(a) {
					a._submit_bubble = !0
				}), $._data(d, "_submit_attached", !0))
			})
		},
		postDispatch: function(a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
		},
		teardown: function() {
			return $.nodeName(this, "form") ? !1 : void $.event.remove(this, "._submit")
		}
	}), $.support.changeBubbles || ($.event.special.change = {
		setup: function() {
			return Bb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function(a) {
				"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
			}), $.event.add(this, "click._change", function(a) {
				this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0)
			})), !1) : void $.event.add(this, "beforeactivate._change", function(a) {
				var b = a.target;
				Bb.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function(a) {
					this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
				}), $._data(b, "_change_attached", !0))
			})
		},
		handle: function(a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return $.event.remove(this, "._change"), !Bb.test(this.nodeName)
		}
	}), $.support.focusinBubbles || $.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		var c = 0,
			d = function(a) {
				$.event.simulate(b, a.target, $.event.fix(a), !0)
			};
		$.event.special[b] = {
			setup: function() {
				0 === c++ && P.addEventListener(a, d, !0)
			},
			teardown: function() {
				0 === --c && P.removeEventListener(a, d, !0)
			}
		}
	}), $.fn.extend({
		on: function(a, c, d, e, g) {
			var h, i;
			if ("object" == typeof a) {
				"string" != typeof c && (d = d || c, c = b);
				for (i in a) this.on(i, c, d, a[i], g);
				return this
			}
			if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = f;
			else if (!e) return this;
			return 1 === g && (h = e, e = function(a) {
				return $().off(a), h.apply(this, arguments)
			}, e.guid = h.guid || (h.guid = $.guid++)), this.each(function() {
				$.event.add(this, a, e, d, c)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, c, d) {
			var e, g;
			if (a && a.preventDefault && a.handleObj) return e = a.handleObj, $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
			if ("object" == typeof a) {
				for (g in a) this.off(g, c, a[g]);
				return this
			}
			return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = f), this.each(function() {
				$.event.remove(this, a, d, c)
			})
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		live: function(a, b, c) {
			return $(this.context).on(a, this.selector, b, c), this
		},
		die: function(a, b) {
			return $(this.context).off(a, this.selector || "**", b), this
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		},
		trigger: function(a, b) {
			return this.each(function() {
				$.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0
		},
		toggle: function(a) {
			var b = arguments,
				c = a.guid || $.guid++,
				d = 0,
				e = function(c) {
					var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
					return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
				};
			for (e.guid = c; d < b.length;) b[d++].guid = c;
			return this.click(e)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
		$.fn[b] = function(a, c) {
			return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}, Eb.test(b) && ($.event.fixHooks[b] = $.event.keyHooks), Fb.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
	}),
	function(a, b) {
		function c(a, b, c, d) {
			c = c || [], b = b || F;
			var e, f, g, h, i = b.nodeType;
			if (!a || "string" != typeof a) return c;
			if (1 !== i && 9 !== i) return [];
			if (g = v(b), !g && !d && (e = cb.exec(a)))
				if (h = e[1]) {
					if (9 === i) {
						if (f = b.getElementById(h), !f || !f.parentNode) return c;
						if (f.id === h) return c.push(f), c
					} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h) return c.push(f), c
				} else {
					if (e[2]) return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
					if ((h = e[3]) && mb && b.getElementsByClassName) return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
				}
			return p(a.replace(Z, "$1"), b, c, d, g)
		}

		function d(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function e(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function f(a) {
			return N(function(b) {
				return b = +b, N(function(c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function g(a, b, c) {
			if (a === b) return c;
			for (var d = a.nextSibling; d;) {
				if (d === b) return -1;
				d = d.nextSibling
			}
			return 1
		}

		function h(a, b) {
			var d, e, f, g, h, i, j, k = Q[D][a + " "];
			if (k) return b ? 0 : k.slice(0);
			for (h = a, i = [], j = t.preFilter; h;) {
				(!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ab.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
				for (g in t.filter)(e = hb[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
				if (!d) break
			}
			return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
		}

		function i(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === b.dir,
				f = I++;
			return b.first ? function(b, c, f) {
				for (; b = b[d];)
					if (e || 1 === b.nodeType) return a(b, c, f)
			} : function(b, c, g) {
				if (g) {
					for (; b = b[d];)
						if ((e || 1 === b.nodeType) && a(b, c, g)) return b
				} else
					for (var h, i = H + " " + f + " ", j = i + r; b = b[d];)
						if (e || 1 === b.nodeType) {
							if ((h = b[D]) === j) return b.sizset;
							if ("string" == typeof h && 0 === h.indexOf(i)) {
								if (b.sizset) return b
							} else {
								if (b[D] = j, a(b, c, g)) return b.sizset = !0, b;
								b.sizset = !1
							}
						}
			}
		}

		function j(a) {
			return a.length > 1 ? function(b, c, d) {
				for (var e = a.length; e--;)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function k(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function l(a, b, c, d, e, f) {
			return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function(f, g, h, i) {
				var j, l, m, n = [],
					p = [],
					q = g.length,
					r = f || o(b || "*", h.nodeType ? [h] : h, []),
					s = !a || !f && b ? r : k(r, n, a, h, i),
					t = c ? e || (f ? a : q || d) ? [] : g : s;
				if (c && c(s, t, h, i), d)
					for (j = k(t, p), d(j, [], h, i), l = j.length; l--;)(m = j[l]) && (t[p[l]] = !(s[p[l]] = m));
				if (f) {
					if (e || a) {
						if (e) {
							for (j = [], l = t.length; l--;)(m = t[l]) && j.push(s[l] = m);
							e(null, t = [], j, i)
						}
						for (l = t.length; l--;)(m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
					}
				} else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
			})
		}

		function m(a) {
			for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function(a) {
				return a === b
			}, g, !0), n = i(function(a) {
				return M.call(b, a) > -1
			}, g, !0), o = [
				function(a, c, d) {
					return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
				}
			]; e > h; h++)
				if (c = t.relative[a[h].type]) o = [i(j(o), c)];
				else {
					if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
						for (d = ++h; e > d && !t.relative[a[d].type]; d++);
						return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
					}
					o.push(c)
				}
			return j(o)
		}

		function n(a, b) {
			var d = b.length > 0,
				e = a.length > 0,
				f = function(g, h, i, j, l) {
					var m, n, o, p = [],
						q = 0,
						s = "0",
						u = g && [],
						v = null != l,
						w = A,
						x = g || e && t.find.TAG("*", l && h.parentNode || h),
						y = H += null == w ? 1 : Math.E;
					for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
						if (e && m) {
							for (n = 0; o = a[n]; n++)
								if (o(m, h, i)) {
									j.push(m);
									break
								}
							v && (H = y, r = ++f.el)
						}
						d && ((m = !o && m) && q--, g && u.push(m))
					}
					if (q += s, d && s !== q) {
						for (n = 0; o = b[n]; n++) o(u, p, h, i);
						if (g) {
							if (q > 0)
								for (; s--;)!u[s] && !p[s] && (p[s] = J.call(j));
							p = k(p)
						}
						K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
					}
					return v && (H = y, A = w), u
				};
			return f.el = 0, d ? N(f) : f
		}

		function o(a, b, d) {
			for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
			return d
		}

		function p(a, b, c, d, e) {
			{
				var f, g, i, j, k, l = h(a);
				l.length
			}
			if (!d && 1 === l.length) {
				if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
					if (b = t.find.ID(i.matches[0].replace(gb, ""), b, e)[0], !b) return c;
					a = a.slice(g.shift().length)
				}
				for (f = hb.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--)
					if ((k = t.find[j]) && (d = k(i.matches[0].replace(gb, ""), db.test(g[0].type) && b.parentNode || b, e))) {
						if (g.splice(f, 1), a = d.length && g.join(""), !a) return K.apply(c, L.call(d, 0)), c;
						break
					}
			}
			return x(a, l)(d, b, e, c, db.test(a)), c
		}

		function q() {}
		var r, s, t, u, v, w, x, y, z, A, B = !0,
			C = "undefined",
			D = ("sizcache" + Math.random()).replace(".", ""),
			E = String,
			F = a.document,
			G = F.documentElement,
			H = 0,
			I = 0,
			J = [].pop,
			K = [].push,
			L = [].slice,
			M = [].indexOf || function(a) {
				for (var b = 0, c = this.length; c > b; b++)
					if (this[b] === a) return b;
				return -1
			},
			N = function(a, b) {
				return a[D] = null == b || b, a
			},
			O = function() {
				var a = {},
					b = [];
				return N(function(c, d) {
					return b.push(c) > t.cacheLength && delete a[b.shift()], a[c + " "] = d
				}, a)
			},
			P = O(),
			Q = O(),
			R = O(),
			S = "[\\x20\\t\\r\\n\\f]",
			T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
			U = T.replace("w", "w#"),
			V = "([*^$|!~]?=)",
			W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]",
			X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
			Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)",
			Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
			_ = new RegExp("^" + S + "*," + S + "*"),
			ab = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"),
			bb = new RegExp(X),
			cb = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
			db = /[\x20\t\r\n\f]*[+~]/,
			eb = /h\d/i,
			fb = /input|select|textarea|button/i,
			gb = /\\(?!\\)/g,
			hb = {
				ID: new RegExp("^#(" + T + ")"),
				CLASS: new RegExp("^\\.(" + T + ")"),
				NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
				TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + X),
				POS: new RegExp(Y, "i"),
				CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
				needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
			},
			ib = function(a) {
				var b = F.createElement("div");
				try {
					return a(b)
				} catch (c) {
					return !1
				} finally {
					b = null
				}
			},
			jb = ib(function(a) {
				return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
			}),
			kb = ib(function(a) {
				return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
			}),
			lb = ib(function(a) {
				a.innerHTML = "<select></select>";
				var b = typeof a.lastChild.getAttribute("multiple");
				return "boolean" !== b && "string" !== b
			}),
			mb = ib(function(a) {
				return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
			}),
			nb = ib(function(a) {
				a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
				var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
				return s = !F.getElementById(D), G.removeChild(a), b
			});
		try {
			L.call(G.childNodes, 0)[0].nodeType
		} catch (ob) {
			L = function(a) {
				for (var b, c = []; b = this[a]; a++) c.push(b);
				return c
			}
		}
		c.matches = function(a, b) {
			return c(a, null, null, b)
		}, c.matchesSelector = function(a, b) {
			return c(b, null, null, [a]).length > 0
		}, u = c.getText = function(a) {
			var b, c = "",
				d = 0,
				e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += u(a)
				} else if (3 === e || 4 === e) return a.nodeValue
			} else
				for (; b = a[d]; d++) c += u(b);
			return c
		}, v = c.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, w = c.contains = G.contains ? function(a, b) {
			var c = 9 === a.nodeType ? a.documentElement : a,
				d = b && b.parentNode;
			return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
		} : G.compareDocumentPosition ? function(a, b) {
			return b && !!(16 & a.compareDocumentPosition(b))
		} : function(a, b) {
			for (; b = b.parentNode;)
				if (b === a) return !0;
			return !1
		}, c.attr = function(a, b) {
			var c, d = v(a);
			return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || lb ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
		}, t = c.selectors = {
			cacheLength: 50,
			createPseudo: N,
			match: hb,
			attrHandle: kb ? {} : {
				href: function(a) {
					return a.getAttribute("href", 2)
				},
				type: function(a) {
					return a.getAttribute("type")
				}
			},
			find: {
				ID: s ? function(a, b, c) {
					if (typeof b.getElementById !== C && !c) {
						var d = b.getElementById(a);
						return d && d.parentNode ? [d] : []
					}
				} : function(a, c, d) {
					if (typeof c.getElementById !== C && !d) {
						var e = c.getElementById(a);
						return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
					}
				},
				TAG: jb ? function(a, b) {
					return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
				} : function(a, b) {
					var c = b.getElementsByTagName(a);
					if ("*" === a) {
						for (var d, e = [], f = 0; d = c[f]; f++) 1 === d.nodeType && e.push(d);
						return e
					}
					return c
				},
				NAME: nb && function(a, b) {
					return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
				},
				CLASS: mb && function(a, b, c) {
					return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
				}
			},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(a) {
					return a[1] = a[1].replace(gb, ""), a[3] = (a[4] || a[5] || "").replace(gb, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a
				},
				PSEUDO: function(a) {
					var b, c;
					return hb.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (bb.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
				}
			},
			filter: {
				ID: s ? function(a) {
					return a = a.replace(gb, ""),
						function(b) {
							return b.getAttribute("id") === a
						}
				} : function(a) {
					return a = a.replace(gb, ""),
						function(b) {
							var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
							return c && c.value === a
						}
				},
				TAG: function(a) {
					return "*" === a ? function() {
						return !0
					} : (a = a.replace(gb, "").toLowerCase(), function(b) {
						return b.nodeName && b.nodeName.toLowerCase() === a
					})
				},
				CLASS: function(a) {
					var b = P[D][a + " "];
					return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a, function(a) {
						return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
					})
				},
				ATTR: function(a, b, d) {
					return function(e) {
						var f = c.attr(e, a);
						return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.substr(f.length - d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0
					}
				},
				CHILD: function(a, b, c, d) {
					return "nth" === a ? function(a) {
						var b, e, f = a.parentNode;
						if (1 === c && 0 === d) return !0;
						if (f)
							for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
						return e -= d, e === c || e % c === 0 && e / c >= 0
					} : function(b) {
						var c = b;
						switch (a) {
							case "only":
							case "first":
								for (; c = c.previousSibling;)
									if (1 === c.nodeType) return !1;
								if ("first" === a) return !0;
								c = b;
							case "last":
								for (; c = c.nextSibling;)
									if (1 === c.nodeType) return !1;
								return !0
						}
					}
				},
				PSEUDO: function(a, b) {
					var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
					return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function(a, c) {
						for (var d, f = e(a, b), g = f.length; g--;) d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function(a) {
						return e(a, 0, d)
					}) : e
				}
			},
			pseudos: {
				not: N(function(a) {
					var b = [],
						c = [],
						d = x(a.replace(Z, "$1"));
					return d[D] ? N(function(a, b, c, e) {
						for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, e, f) {
						return b[0] = a, d(b, null, f, c), !c.pop()
					}
				}),
				has: N(function(a) {
					return function(b) {
						return c(a, b).length > 0
					}
				}),
				contains: N(function(a) {
					return function(b) {
						return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
					}
				}),
				enabled: function(a) {
					return a.disabled === !1
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				parent: function(a) {
					return !t.pseudos.empty(a)
				},
				empty: function(a) {
					var b;
					for (a = a.firstChild; a;) {
						if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b) return !1;
						a = a.nextSibling
					}
					return !0
				},
				header: function(a) {
					return eb.test(a.nodeName)
				},
				text: function(a) {
					var b, c;
					return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
				},
				radio: d("radio"),
				checkbox: d("checkbox"),
				file: d("file"),
				password: d("password"),
				image: d("image"),
				submit: e("submit"),
				reset: e("reset"),
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				input: function(a) {
					return fb.test(a.nodeName)
				},
				focus: function(a) {
					var b = a.ownerDocument;
					return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				active: function(a) {
					return a === a.ownerDocument.activeElement
				},
				first: f(function() {
					return [0]
				}),
				last: f(function(a, b) {
					return [b - 1]
				}),
				eq: f(function(a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: f(function(a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: f(function(a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: f(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: f(function(a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, y = G.compareDocumentPosition ? function(a, b) {
			return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
		} : function(a, b) {
			if (a === b) return z = !0, 0;
			if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
			var c, d, e = [],
				f = [],
				h = a.parentNode,
				i = b.parentNode,
				j = h;
			if (h === i) return g(a, b);
			if (!h) return -1;
			if (!i) return 1;
			for (; j;) e.unshift(j), j = j.parentNode;
			for (j = i; j;) f.unshift(j), j = j.parentNode;
			c = e.length, d = f.length;
			for (var k = 0; c > k && d > k; k++)
				if (e[k] !== f[k]) return g(e[k], f[k]);
			return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
		}, [0, 0].sort(y), B = !z, c.uniqueSort = function(a) {
			var b, c = [],
				d = 1,
				e = 0;
			if (z = B, a.sort(y), z) {
				for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
				for (; e--;) a.splice(c[e], 1)
			}
			return a
		}, c.error = function(a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, x = c.compile = function(a, b) {
			var c, d = [],
				e = [],
				f = R[D][a + " "];
			if (!f) {
				for (b || (b = h(a)), c = b.length; c--;) f = m(b[c]), f[D] ? d.push(f) : e.push(f);
				f = R(a, n(e, d))
			}
			return f
		}, F.querySelectorAll && function() {
			var a, b = p,
				d = /'|\\/g,
				e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
				f = [":focus"],
				g = [":active"],
				i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
			ib(function(a) {
				a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
			}), ib(function(a) {
				a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
			}), f = new RegExp(f.join("|")), p = function(a, c, e, g, i) {
				if (!g && !i && !f.test(a)) {
					var j, k, l = !0,
						m = D,
						n = c,
						o = 9 === c.nodeType && a;
					if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
						for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--;) j[k] = m + j[k].join("");
						n = db.test(a) && c.parentNode || c, o = j.join(",")
					}
					if (o) try {
						return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
					} catch (p) {} finally {
						l || c.removeAttribute("id")
					}
				}
				return b(a, c, e, g, i)
			}, i && (ib(function(b) {
				a = i.call(b, "div");
				try {
					i.call(b, "[test!='']:sizzle"), g.push("!=", X)
				} catch (c) {}
			}), g = new RegExp(g.join("|")), c.matchesSelector = function(b, d) {
				if (d = d.replace(e, "='$1']"), !v(b) && !g.test(d) && !f.test(d)) try {
					var h = i.call(b, d);
					if (h || a || b.document && 11 !== b.document.nodeType) return h
				} catch (j) {}
				return c(d, null, null, [b]).length > 0
			})
		}(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = $.attr, $.find = c, $.expr = c.selectors, $.expr[":"] = $.expr.pseudos, $.unique = c.uniqueSort, $.text = c.getText, $.isXMLDoc = c.isXML, $.contains = c.contains
	}(a);
	var Ib = /Until$/,
		Jb = /^(?:parents|prev(?:Until|All))/,
		Kb = /^.[^:#\[\.,]*$/,
		Lb = $.expr.match.needsContext,
		Mb = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	$.fn.extend({
		find: function(a) {
			var b, c, d, e, f, g, h = this;
			if ("string" != typeof a) return $(a).filter(function() {
				for (b = 0, c = h.length; c > b; b++)
					if ($.contains(h[b], this)) return !0
			});
			for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++)
				if (d = g.length, $.find(a, this[b], g), b > 0)
					for (e = d; e < g.length; e++)
						for (f = 0; d > f; f++)
							if (g[f] === g[e]) {
								g.splice(e--, 1);
								break
							}
			return g
		},
		has: function(a) {
			var b, c = $(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; d > b; b++)
					if ($.contains(this, c[b])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(j(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(j(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && ("string" == typeof a ? Lb.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = Lb.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
					if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
						f.push(c);
						break
					}
					c = c.parentNode
				}
			return f = f.length > 1 ? $.unique(f) : f, this.pushStack(f, "closest", a)
		},
		index: function(a) {
			return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(a, b) {
			var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a),
				d = $.merge(this.get(), c);
			return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), $.fn.andSelf = $.fn.addBack, $.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function(a) {
			return $.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return $.dir(a, "parentNode", c)
		},
		next: function(a) {
			return i(a, "nextSibling")
		},
		prev: function(a) {
			return i(a, "previousSibling")
		},
		nextAll: function(a) {
			return $.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return $.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return $.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return $.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return $.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return $.sibling(a.firstChild)
		},
		contents: function(a) {
			return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
		}
	}, function(a, b) {
		$.fn[a] = function(c, d) {
			var e = $.map(this, b, c);
			return Ib.test(a) || (d = c), d && "string" == typeof d && (e = $.filter(d, e)), e = this.length > 1 && !Mb[a] ? $.unique(e) : e, this.length > 1 && Jb.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","))
		}
	}), $.extend({
		filter: function(a, b, c) {
			return c && (a = ":not(" + a + ")"), 1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
		},
		dir: function(a, c, d) {
			for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
			return e
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	});
	var Nb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ob = / jQuery\d+="(?:null|\d+)"/g,
		Pb = /^\s+/,
		Qb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Rb = /<([\w:]+)/,
		Sb = /<tbody/i,
		Tb = /<|&#?\w+;/,
		Ub = /<(?:script|style|link)/i,
		Vb = /<(?:script|object|embed|option|style)/i,
		Wb = new RegExp("<(?:" + Nb + ")[\\s/>]", "i"),
		Xb = /^(?:checkbox|radio)$/,
		Yb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Zb = /\/(java|ecma)script/i,
		$b = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		_b = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		ac = k(P),
		bc = ac.appendChild(P.createElement("div"));
	_b.optgroup = _b.option, _b.tbody = _b.tfoot = _b.colgroup = _b.caption = _b.thead, _b.th = _b.td, $.support.htmlSerialize || (_b._default = [1, "X<div>", "</div>"]), $.fn.extend({
		text: function(a) {
			return $.access(this, function(a) {
				return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
			}, null, a, arguments.length)
		},
		wrapAll: function(a) {
			if ($.isFunction(a)) return this.each(function(b) {
				$(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return this.each($.isFunction(a) ? function(b) {
				$(this).wrapInner(a.call(this, b))
			} : function() {
				var b = $(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = $.isFunction(a);
			return this.each(function(c) {
				$(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				$.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(a) {
				(1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(a) {
				(1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (!h(this[0])) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if (arguments.length) {
				var a = $.clean(arguments);
				return this.pushStack($.merge(a, this), "before", this.selector)
			}
		},
		after: function() {
			if (!h(this[0])) return this.domManip(arguments, !1, function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if (arguments.length) {
				var a = $.clean(arguments);
				return this.pushStack($.merge(this, a), "after", this.selector)
			}
		},
		remove: function(a, b) {
			for (var c, d = 0; null != (c = this[d]); d++)(!a || $.filter(a, [c]).length) && (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++)
				for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
				return $.clone(this, a, b)
			})
		},
		html: function(a) {
			return $.access(this, function(a) {
				var c = this[0] || {},
					d = 0,
					e = this.length;
				if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Ob, "") : b;
				if (!("string" != typeof a || Ub.test(a) || !$.support.htmlSerialize && Wb.test(a) || !$.support.leadingWhitespace && Pb.test(a) || _b[(Rb.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = a.replace(Qb, "<$1></$2>");
					try {
						for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
						c = 0
					} catch (f) {}
				}
				c && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function(a) {
			return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function(b) {
				var c = $(this),
					d = c.html();
				c.replaceWith(a.call(this, b, d))
			}) : ("string" != typeof a && (a = $(a).detach()), this.each(function() {
				var b = this.nextSibling,
					c = this.parentNode;
				$(this).remove(), b ? $(b).before(a) : $(c).append(a)
			}))
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, c, d) {
			a = [].concat.apply([], a);
			var e, f, g, h, i = 0,
				j = a[0],
				k = [],
				m = this.length;
			if (!$.support.checkClone && m > 1 && "string" == typeof j && Yb.test(j)) return this.each(function() {
				$(this).domManip(a, c, d)
			});
			if ($.isFunction(j)) return this.each(function(e) {
				var f = $(this);
				a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
			});
			if (this[0]) {
				if (e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f)
					for (c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1; m > i; i++) d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
				g = f = null, k.length && $.each(k, function(a, b) {
					b.src ? $.ajax ? $.ajax({
						url: b.src,
						type: "GET",
						dataType: "script",
						async: !1,
						global: !1,
						"throws": !0
					}) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($b, "")), b.parentNode && b.parentNode.removeChild(b)
				})
			}
			return this
		}
	}), $.buildFragment = function(a, c, d) {
		var e, f, g, h = a[0];
		return c = c || P, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, 1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Vb.test(h) && ($.support.checkClone || !Yb.test(h)) && ($.support.html5Clone || !Wb.test(h)) && (f = !0, e = $.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)), {
			fragment: e,
			cacheable: f
		}
	}, $.fragments = {}, $.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(a, b) {
		$.fn[a] = function(c) {
			var d, e = 0,
				f = [],
				g = $(c),
				h = g.length,
				i = 1 === this.length && this[0].parentNode;
			if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h) return g[b](this[0]), this;
			for (; h > e; e++) d = (e > 0 ? this.clone(!0) : this).get(), $(g[e])[b](d), f = f.concat(d);
			return this.pushStack(f, a, g.selector)
		}
	}), $.extend({
		clone: function(a, b, c) {
			var d, e, f, g;
			if ($.support.html5Clone || $.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bc.innerHTML = a.outerHTML, bc.removeChild(g = bc.firstChild)), !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))
				for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f) e[f] && n(d[f], e[f]);
			if (b && (m(a, g), c))
				for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
			return d = e = null, g
		},
		clean: function(a, b, c, d) {
			var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ac,
				s = [];
			for (b && "undefined" != typeof b.createDocumentFragment || (b = P), e = 0; null != (g = a[e]); e++)
				if ("number" == typeof g && (g += ""), g) {
					if ("string" == typeof g)
						if (Tb.test(g)) {
							for (r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Qb, "<$1></$2>"), h = (Rb.exec(g) || ["", ""])[1].toLowerCase(), i = _b[h] || _b._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--;) l = l.lastChild;
							if (!$.support.tbody)
								for (m = Sb.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes, f = n.length - 1; f >= 0; --f) $.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
							!$.support.leadingWhitespace && Pb.test(g) && l.insertBefore(b.createTextNode(Pb.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l)
						} else g = b.createTextNode(g);
					g.nodeType ? s.push(g) : $.merge(s, g)
				}
			if (l && (g = l = r = null), !$.support.appendChecked)
				for (e = 0; null != (g = s[e]); e++) $.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
			if (c)
				for (o = function(a) {
					return !a.type || Zb.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
				}, e = 0; null != (g = s[e]); e++) $.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length));
			return s
		},
		cleanData: function(a, b) {
			for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null != (e = a[g]); g++)
				if ((b || $.acceptData(e)) && (d = e[h], c = d && i[d])) {
					if (c.events)
						for (f in c.events) k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
					i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d))
				}
		}
	}),
	function() {
		var a, b;
		$.uaMatch = function(a) {
			a = a.toLowerCase();
			var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		}, a = $.uaMatch(R.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), $.browser = b, $.sub = function() {
			function a(b, c) {
				return new a.fn.init(b, c)
			}
			$.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
				return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b)
			}, a.fn.init.prototype = a.fn;
			var b = a(P);
			return a
		}
	}();
	var cc, dc, ec, fc = /alpha\([^)]*\)/i,
		gc = /opacity=([^)]*)/,
		hc = /^(top|right|bottom|left)$/,
		ic = /^(none|table(?!-c[ea]).+)/,
		jc = /^margin/,
		kc = new RegExp("^(" + _ + ")(.*)$", "i"),
		lc = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
		mc = new RegExp("^([-+])=(" + _ + ")", "i"),
		nc = {
			BODY: "block"
		},
		oc = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		pc = {
			letterSpacing: 0,
			fontWeight: 400
		},
		qc = ["Top", "Right", "Bottom", "Left"],
		rc = ["Webkit", "O", "Moz", "ms"],
		sc = $.fn.toggle;
	$.fn.extend({
		css: function(a, c) {
			return $.access(this, function(a, c, d) {
				return d !== b ? $.style(a, c, d) : $.css(a, c)
			}, a, c, arguments.length > 1)
		},
		show: function() {
			return s(this, !0)
		},
		hide: function() {
			return s(this)
		},
		toggle: function(a, b) {
			var c = "boolean" == typeof a;
			return $.isFunction(a) && $.isFunction(b) ? sc.apply(this, arguments) : this.each(function() {
				(c ? a : r(this)) ? $(this).show() : $(this).hide()
			})
		}
	}), $.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = cc(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": $.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, c, d, e) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var f, g, h, i = $.camelCase(c),
					j = a.style;
				if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
				if (g = typeof d, "string" === g && (f = mc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" === g && !$.cssNumber[i] && (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
					j[c] = d
				} catch (k) {}
			}
		},
		css: function(a, c, d, e) {
			var f, g, h, i = $.camelCase(c);
			return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)), h = $.cssHooks[c] || $.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = cc(a, c)), "normal" === f && c in pc && (f = pc[c]), d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f
		},
		swap: function(a, b, c) {
			var d, e, f = {};
			for (e in b) f[e] = a.style[e], a.style[e] = b[e];
			d = c.call(a);
			for (e in b) a.style[e] = f[e];
			return d
		}
	}), a.getComputedStyle ? cc = function(b, c) {
		var d, e, f, g, h = a.getComputedStyle(b, null),
			i = b.style;
		return h && (d = h.getPropertyValue(c) || h[c], "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)), lc.test(d) && jc.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
	} : P.documentElement.currentStyle && (cc = function(a, b) {
		var c, d, e = a.currentStyle && a.currentStyle[b],
			f = a.style;
		return null == e && f && f[b] && (e = f[b]), lc.test(e) && !hc.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
	}), $.each(["height", "width"], function(a, b) {
		$.cssHooks[b] = {
			get: function(a, c, d) {
				return c ? 0 === a.offsetWidth && ic.test(cc(a, "display")) ? $.swap(a, oc, function() {
					return v(a, b, d)
				}) : v(a, b, d) : void 0
			},
			set: function(a, c, d) {
				return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
			}
		}
	}), $.support.opacity || ($.cssHooks.opacity = {
		get: function(a, b) {
			return gc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, b >= 1 && "" === $.trim(f.replace(fc, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = fc.test(f) ? f.replace(fc, e) : f + " " + e)
		}
	}), $(function() {
		$.support.reliableMarginRight || ($.cssHooks.marginRight = {
			get: function(a, b) {
				return $.swap(a, {
					display: "inline-block"
				}, function() {
					return b ? cc(a, "marginRight") : void 0
				})
			}
		}), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function(a, b) {
			$.cssHooks[b] = {
				get: function(a, c) {
					if (c) {
						var d = cc(a, b);
						return lc.test(d) ? $(a).position()[b] + "px" : d
					}
				}
			}
		})
	}), $.expr && $.expr.filters && ($.expr.filters.hidden = function(a) {
		return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cc(a, "display"))
	}, $.expr.filters.visible = function(a) {
		return !$.expr.filters.hidden(a)
	}), $.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		$.cssHooks[a + b] = {
			expand: function(c) {
				var d, e = "string" == typeof c ? c.split(" ") : [c],
					f = {};
				for (d = 0; 4 > d; d++) f[a + qc[d] + b] = e[d] || e[d - 2] || e[0];
				return f
			}
		}, jc.test(a) || ($.cssHooks[a + b].set = t)
	});
	var tc = /%20/g,
		uc = /\[\]$/,
		vc = /\r?\n/g,
		wc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		xc = /^(?:select|textarea)/i;
	$.fn.extend({
		serialize: function() {
			return $.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? $.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || xc.test(this.nodeName) || wc.test(this.type))
			}).map(function(a, b) {
				var c = $(this).val();
				return null == c ? null : $.isArray(c) ? $.map(c, function(a) {
					return {
						name: b.name,
						value: a.replace(vc, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(vc, "\r\n")
				}
			}).get()
		}
	}), $.param = function(a, c) {
		var d, e = [],
			f = function(a, b) {
				b = $.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a)) $.each(a, function() {
			f(this.name, this.value)
		});
		else
			for (d in a) x(d, a[d], c, f);
		return e.join("&").replace(tc, "+")
	};
	var yc, zc, Ac = /#.*$/,
		Bc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Cc = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		Dc = /^(?:GET|HEAD)$/,
		Ec = /^\/\//,
		Fc = /\?/,
		Gc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Hc = /([?&])_=[^&]*/,
		Ic = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Jc = $.fn.load,
		Kc = {},
		Lc = {},
		Mc = ["*/"] + ["*"];
	try {
		zc = Q.href
	} catch (Nc) {
		zc = P.createElement("a"), zc.href = "", zc = zc.href
	}
	yc = Ic.exec(zc.toLowerCase()) || [], $.fn.load = function(a, c, d) {
		if ("string" != typeof a && Jc) return Jc.apply(this, arguments);
		if (!this.length) return this;
		var e, f, g, h = this,
			i = a.indexOf(" ");
		return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), $.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), $.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: c,
			complete: function(a, b) {
				d && h.each(d, g || [a.responseText, b, a])
			}
		}).done(function(a) {
			g = arguments, h.html(e ? $("<div>").append(a.replace(Gc, "")).find(e) : a)
		}), this
	}, $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		$.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), $.each(["get", "post"], function(a, c) {
		$[c] = function(a, d, e, f) {
			return $.isFunction(d) && (f = f || e, e = d, d = b), $.ajax({
				type: c,
				url: a,
				data: d,
				success: e,
				dataType: f
			})
		}
	}), $.extend({
		getScript: function(a, c) {
			return $.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return $.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings), A(a, b), a
		},
		ajaxSettings: {
			url: zc,
			isLocal: Cc.test(yc[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": Mc
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": $.parseJSON,
				"text xml": $.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: y(Kc),
		ajaxTransport: y(Lc),
		ajax: function(a, c) {
			function d(a, c, d, g) {
				var j, l, s, t, v, x = c;
				2 !== u && (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (!x || a) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (c = a, a = b), c = c || {};
			var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c),
				n = m.context || m,
				o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event,
				p = $.Deferred(),
				q = $.Callbacks("once memory"),
				r = m.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if (!u) {
							var c = a.toLowerCase();
							a = t[c] = t[c] || a, s[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return 2 === u ? f : null
					},
					getResponseHeader: function(a) {
						var c;
						if (2 === u) {
							if (!g)
								for (g = {}; c = Bc.exec(f);) g[c[1].toLowerCase()] = c[2];
							c = g[a.toLowerCase()]
						}
						return c === b ? null : c
					},
					overrideMimeType: function(a) {
						return u || (m.mimeType = a), this
					},
					abort: function(a) {
						return a = a || v, h && h.abort(a), d(0, a), this
					}
				};
			if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
				if (a) {
					var b;
					if (2 > u)
						for (b in a) r[b] = [r[b], a[b]];
					else b = a[w.status], w.always(b)
				}
				return this
			}, m.url = ((a || m.url) + "").replace(Ac, "").replace(Ec, yc[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(bb), null == m.crossDomain && (j = Ic.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === yc[1] && j[2] === yc[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (yc[3] || ("http:" === yc[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)), z(Kc, m, c, w), 2 === u) return w;
			if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Dc.test(m.type), k && 0 === $.active++ && $.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Fc.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
				var x = $.now(),
					y = m.url.replace(Hc, "$1_=" + x);
				m.url = y + (y === m.url ? (Fc.test(m.url) ? "&" : "?") + "_=" + x : "")
			}(m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mc + "; q=0.01" : "") : m.accepts["*"]);
			for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
			if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && 2 !== u) {
				v = "abort";
				for (l in {
					success: 1,
					error: 1,
					complete: 1
				}) w[l](m[l]);
				if (h = z(Lc, m, c, w)) {
					w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
						w.abort("timeout")
					}, m.timeout));
					try {
						u = 1, h.send(s, d)
					} catch (A) {
						if (!(2 > u)) throw A;
						d(-1, A)
					}
				} else d(-1, "No Transport");
				return w
			}
			return w.abort()
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var Oc = [],
		Pc = /\?/,
		Qc = /(=)\?(?=&|$)|\?\?/,
		Rc = $.now();
	$.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Oc.pop() || $.expando + "_" + Rc++;
			return this[a] = !0, a
		}
	}), $.ajaxPrefilter("json jsonp", function(c, d, e) {
		var f, g, h, i = c.data,
			j = c.url,
			k = c.jsonp !== !1,
			l = k && Qc.test(j),
			m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qc.test(i);
		return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qc, "$1" + f) : m ? c.data = i.replace(Qc, "$1" + f) : k && (c.url += (Pc.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
			return h || $.error(f + " was not called"), h[0]
		}, c.dataTypes[0] = "json", a[f] = function() {
			h = arguments
		}, e.always(function() {
			a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Oc.push(f)), h && $.isFunction(g) && g(h[0]), h = g = b
		}), "script") : void 0
	}), $.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				return $.globalEval(a), a
			}
		}
	}), $.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), $.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
			return {
				send: function(e, f) {
					c = P.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
						(e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
					}, d.insertBefore(c, d.firstChild)
				},
				abort: function() {
					c && c.onload(0, 1)
				}
			}
		}
	});
	var Sc, Tc = a.ActiveXObject ? function() {
			for (var a in Sc) Sc[a](0, 1)
		} : !1,
		Uc = 0;
	$.ajaxSettings.xhr = a.ActiveXObject ? function() {
		return !this.isLocal && D() || E()
	} : D,
	function(a) {
		$.extend($.support, {
			ajax: !!a,
			cors: !!a && "withCredentials" in a
		})
	}($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function(c) {
		if (!c.crossDomain || $.support.cors) {
			var d;
			return {
				send: function(e, f) {
					var g, h, i = c.xhr();
					if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
						for (h in c.xhrFields) i[h] = c.xhrFields[h];
					c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (h in e) i.setRequestHeader(h, e[h])
					} catch (j) {}
					i.send(c.hasContent && c.data || null), d = function(a, e) {
						var h, j, k, l, m;
						try {
							if (d && (e || 4 === i.readyState))
								if (d = b, g && (i.onreadystatechange = $.noop, Tc && delete Sc[g]), e) 4 !== i.readyState && i.abort();
								else {
									h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
									try {
										l.text = i.responseText
									} catch (n) {}
									try {
										j = i.statusText
									} catch (n) {
										j = ""
									}
									h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
								}
						} catch (o) {
							e || f(-1, o)
						}
						l && f(h, j, l, k)
					}, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Uc, Tc && (Sc || (Sc = {}, $(a).unload(Tc)), Sc[g] = d), i.onreadystatechange = d) : d()
				},
				abort: function() {
					d && d(0, 1)
				}
			}
		}
	});
	var Vc, Wc, Xc = /^(?:toggle|show|hide)$/,
		Yc = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
		Zc = /queueHooks$/,
		$c = [J],
		_c = {
			"*": [
				function(a, b) {
					var c, d, e = this.createTween(a, b),
						f = Yc.exec(b),
						g = e.cur(),
						h = +g || 0,
						i = 1,
						j = 20;
					if (f) {
						if (c = +f[2], d = f[3] || ($.cssNumber[a] ? "" : "px"), "px" !== d && h) {
							h = $.css(e.elem, a, !0) || c || 1;
							do i = i || ".5", h /= i, $.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
						}
						e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
					}
					return e
				}
			]
		};
	$.Animation = $.extend(H, {
		tweener: function(a, b) {
			$.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _c[c] = _c[c] || [], _c[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? $c.unshift(a) : $c.push(a)
		}
	}), $.Tween = K, K.prototype = {
		constructor: K,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = K.propHooks[this.prop];
			return a && a.get ? a.get(this) : K.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = K.propHooks[this.prop];
			return this.pos = b = this.options.duration ? $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
		}
	}, K.prototype.init.prototype = K.prototype, K.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function(a) {
				$.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, $.each(["toggle", "show", "hide"], function(a, b) {
		var c = $.fn[b];
		$.fn[b] = function(d, e, f) {
			return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
		}
	}), $.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(r).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = $.isEmptyObject(a),
				f = $.speed(b, c, d),
				g = function() {
					var b = H(this, $.extend({}, a), f);
					e && b.stop(!0)
				};
			return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, c, d) {
			var e = function(a) {
				var b = a.stop;
				delete a.stop, b(d)
			};
			return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					c = null != a && a + "queueHooks",
					f = $.timers,
					g = $._data(this);
				if (c) g[c] && g[c].stop && e(g[c]);
				else
					for (c in g) g[c] && g[c].stop && Zc.test(c) && e(g[c]);
				for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
				(b || !d) && $.dequeue(this, a)
			})
		}
	}), $.each({
		slideDown: L("show"),
		slideUp: L("hide"),
		slideToggle: L("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		$.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), $.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? $.extend({}, a) : {
			complete: c || !c && b || $.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !$.isFunction(b) && b
		};
		return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
			$.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
		}, d
	}, $.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, $.timers = [], $.fx = K.prototype.init, $.fx.tick = function() {
		var a, c = $.timers,
			d = 0;
		for (Vc = $.now(); d < c.length; d++) a = c[d], !a() && c[d] === a && c.splice(d--, 1);
		c.length || $.fx.stop(), Vc = b
	}, $.fx.timer = function(a) {
		a() && $.timers.push(a) && !Wc && (Wc = setInterval($.fx.tick, $.fx.interval))
	}, $.fx.interval = 13, $.fx.stop = function() {
		clearInterval(Wc), Wc = null
	}, $.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function(a) {
		return $.grep($.timers, function(b) {
			return a === b.elem
		}).length
	});
	var ad = /^(?:body|html)$/i;
	$.fn.offset = function(a) {
		if (arguments.length) return a === b ? this : this.each(function(b) {
			$.offset.setOffset(this, a, b)
		});
		var c, d, e, f, g, h, i, j = {
				top: 0,
				left: 0
			},
			k = this[0],
			l = k && k.ownerDocument;
		if (l) return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
			top: j.top + h - f,
			left: j.left + i - g
		}) : j)
	}, $.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0), {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = $.css(a, "position");
			"static" === d && (a.style.position = "relative");
			var e, f, g = $(a),
				h = g.offset(),
				i = $.css(a, "top"),
				j = $.css(a, "left"),
				k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1,
				l = {},
				m = {};
			k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
		}
	}, $.fn.extend({
		position: function() {
			if (this[0]) {
				var a = this[0],
					b = this.offsetParent(),
					c = this.offset(),
					d = ad.test(b[0].nodeName) ? {
						top: 0,
						left: 0
					} : b.offset();
				return c.top -= parseFloat($.css(a, "marginTop")) || 0, c.left -= parseFloat($.css(a, "marginLeft")) || 0, d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0, {
					top: c.top - d.top,
					left: c.left - d.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || P.body; a && !ad.test(a.nodeName) && "static" === $.css(a, "position");) a = a.offsetParent;
				return a || P.body
			})
		}
	}), $.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, c) {
		var d = /Y/.test(c);
		$.fn[a] = function(e) {
			return $.access(this, function(a, e, f) {
				var g = M(a);
				return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f)
			}, a, e, arguments.length, null)
		}
	}), $.each({
		Height: "height",
		Width: "width"
	}, function(a, c) {
		$.each({
			padding: "inner" + a,
			content: c,
			"": "outer" + a
		}, function(d, e) {
			$.fn[e] = function(e, f) {
				var g = arguments.length && (d || "boolean" != typeof e),
					h = d || (e === !0 || f === !0 ? "margin" : "border");
				return $.access(this, function(c, d, e) {
					var f;
					return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
				}, c, g ? e : b, g, null)
			}
		})
	}), a.jQuery = a.$ = $, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return $
	})
}(window), ! function(a) {
	a(function() {
		"use strict";
		a.support.transition = function() {
			var b = document.body || document.documentElement,
				c = b.style,
				d = void 0 !== c.transition || void 0 !== c.WebkitTransition || void 0 !== c.MozTransition || void 0 !== c.MsTransition || void 0 !== c.OTransition;
			return d && {
				end: function() {
					var b = "TransitionEnd";
					return a.browser.webkit ? b = "webkitTransitionEnd" : a.browser.mozilla ? b = "transitionend" : a.browser.opera && (b = "oTransitionEnd"), b
				}()
			}
		}(), a.fn.emulateTransitionEnd = function(b) {
			var c = !1,
				d = this;
			a(this).one(a.support.transition.end, function() {
				c = !0
			});
			var e = function() {
				c || a(d).trigger(a.support.transition.end)
			};
			return setTimeout(e, b), this
		}
	})
}(window.jQuery), ! function(a) {
	"use strict";
	var b = '[data-dismiss="alert"]',
		c = function(c) {
			a(c).on("click", b, this.close)
		};
	c.prototype = {
		constructor: c,
		close: function(b) {
			function c() {
				d.trigger("closed").remove()
			}
			var d, e = a(this),
				f = e.attr("data-target");
			f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), d = a(f), d.trigger("close"), b && b.preventDefault(), d.length || (d = e.hasClass("alert") ? e : e.parent()), d.trigger("close").removeClass("in"), a.support.transition && d.hasClass("fade") ? d.on(a.support.transition.end, c) : c()
		}
	}, a.fn.alert = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("alert");
			e || d.data("alert", e = new c(this)), "string" == typeof b && e[b].call(d)
		})
	}, a.fn.alert.Constructor = c, a(function() {
		a("body").on("click.alert.data-api", b, c.prototype.close)
	})
}(window.jQuery), ! function(a) {
	"use strict";
	var b = function(b, c) {
		this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
	};
	b.prototype = {
		constructor: b,
		setState: function(a) {
			var b = "disabled",
				c = this.$element,
				d = c.data(),
				e = c.is("input") ? "val" : "html";
			a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
				"loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
			}, 0)
		},
		toggle: function() {
			var a = this.$element.parent('[data-toggle="buttons-radio"]');
			a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
		}
	}, a.fn.button = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("button"),
				f = "object" == typeof c && c;
			e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
		})
	}, a.fn.button.defaults = {
		loadingText: "loading..."
	}, a.fn.button.Constructor = b, a(function() {
		a("body").on("click.button.data-api", "[data-toggle^=button]", function(b) {
			a(b.currentTarget).button("toggle")
		})
	})
}(window.jQuery), ! function(a) {
	"use strict";
	var b = function(b, c) {
		this.$element = a(b), this.options = a.extend({}, a.fn.carousel.defaults, c), this.options.slide && this.slide(this.options.slide)
	};
	b.prototype = {
		cycle: function() {
			return this.interval = setInterval(a.proxy(this.next, this), this.options.interval), this
		},
		to: function(b) {
			var c = this.$element.find(".active"),
				d = c.parent().children(),
				e = d.index(c),
				f = this;
			if (!(b > d.length - 1 || 0 > b)) return this.sliding ? this.$element.one("slid", function() {
				f.to(b)
			}) : e == b ? this.pause().cycle() : this.slide(b > e ? "next" : "prev", a(d[b]))
		},
		pause: function() {
			return clearInterval(this.interval), this.interval = null, this
		},
		next: function() {
			return this.sliding ? void 0 : this.slide("next")
		},
		prev: function() {
			return this.sliding ? void 0 : this.slide("prev")
		},
		slide: function(b, c) {
			var d = this.$element.find(".active"),
				e = c || d[b](),
				f = this.interval,
				g = "next" == b ? "left" : "right",
				h = "next" == b ? "first" : "last",
				i = this;
			if (e.length) return this.sliding = !0, f && this.pause(), e = e.length ? e : this.$element.find(".item")[h](), !a.support.transition && this.$element.hasClass("slide") ? (this.$element.trigger("slide"), d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")) : (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), this.$element.trigger("slide"), this.$element.one(a.support.transition.end, function() {
				e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
					i.$element.trigger("slid")
				}, 0)
			})), f && this.cycle(), this
		}
	}, a.fn.carousel = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("carousel"),
				f = "object" == typeof c && c;
			e || d.data("carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : "string" == typeof c || (c = f.slide) ? e[c]() : e.cycle()
		})
	}, a.fn.carousel.defaults = {
		interval: 5e3
	}, a.fn.carousel.Constructor = b, a(function() {
		a("body").on("click.carousel.data-api", "[data-slide]", function(b) {
			var c, d = a(this),
				e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
				f = !e.data("modal") && a.extend({}, e.data(), d.data());
			e.carousel(f), b.preventDefault()
		})
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
	};
	b.DEFAULTS = {
		toggle: !0
	}, b.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, b.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b = a.Event("show.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.$parent && this.$parent.find("> .panel > .in");
				if (c && c.length) {
					var d = c.data("bs.collapse");
					if (d && d.transitioning) return;
					c.collapse("hide"), d || c.data("bs.collapse", null)
				}
				var e = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
				var f = function() {
					this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
				};
				if (!a.support.transition) return f.call(this);
				var g = a.camelCase(["scroll", e].join("-"));
				this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
			}
		}
	}, b.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function() {
					this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				};
				return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
			}
		}
	}, b.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var c = a.fn.collapse;
	a.fn.collapse = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
			e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = c, this
	}, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
		var c, d = a(this),
			e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
			f = a(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : d.data(),
			i = d.attr("data-parent"),
			j = i && a(i);
		g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
	})
}(window.jQuery), ! function(a) {
	"use strict";

	function b() {
		a(c).parent().removeClass("open")
	}
	var c = '[data-toggle="dropdown"]',
		d = function(b) {
			var c = a(b).on("click.dropdown.data-api", this.toggle);
			a("html").on("click.dropdown.data-api", function() {
				c.parent().removeClass("open")
			})
		};
	d.prototype = {
		constructor: d,
		toggle: function() {
			var c, d, e = a(this),
				f = e.attr("data-target");
			return f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), c = a(f), c.length || (c = e.parent()), d = c.hasClass("open"), b(), !d && c.toggleClass("open"), !1
		}
	}, a.fn.dropdown = function(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("dropdown");
			e || c.data("dropdown", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}, a.fn.dropdown.Constructor = d, a(function() {
		a("html").on("click.dropdown.data-api", b), a("body").on("click.dropdown.data-api", c, d.prototype.toggle)
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(b, c) {
		this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	b.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, b.prototype.toggle = function(a) {
		return this[this.isShown ? "hide" : "show"](a)
	}, b.prototype.show = function(b) {
		var c = this,
			d = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
			var d = a.support.transition && c.$element.hasClass("fade");
			c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
			var e = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
				c.$element.focus().trigger(e)
			}).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
		}))
	}, b.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, b.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
		}, this))
	}, b.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, b.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
		})
	}, b.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, b.prototype.backdrop = function(b) {
		var c = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var d = a.support.transition && c;
			if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
				a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
			}, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
		} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
	};
	var c = a.fn.modal;
	a.fn.modal = function(c, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
			f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
		})
	}, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
		return a.fn.modal = c, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(d) && d
			}, e.data(), c.data());
		c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function() {
			c.is(":visible") && c.focus()
		})
	}), a(document).on("show.bs.modal", ".modal", function() {
		a(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function() {
		a(document.body).removeClass("modal-open")
	})
}(jQuery), ! function(a) {
	"use strict";
	var b = function(a, b) {
		this.init("tooltip", a, b)
	};
	b.prototype = {
		constructor: b,
		init: function(b, c, d) {
			var e, f;
			this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, "manual" != this.options.trigger && (e = "hover" == this.options.trigger ? "mouseenter" : "focus", f = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(e, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
		},
		getOptions: function(b) {
			return b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data()), b.delay && "number" == typeof b.delay && (b.delay = {
				show: b.delay,
				hide: b.delay
			}), b
		},
		enter: function(b) {
			var c = a(b.currentTarget)[this.type](this._options).data(this.type);
			c.options.delay && c.options.delay.show ? (c.hoverState = "in", setTimeout(function() {
				"in" == c.hoverState && c.show()
			}, c.options.delay.show)) : c.show()
		},
		leave: function(b) {
			var c = a(b.currentTarget)[this.type](this._options).data(this.type);
			c.options.delay && c.options.delay.hide ? (c.hoverState = "out", setTimeout(function() {
				"out" == c.hoverState && c.hide()
			}, c.options.delay.hide)) : c.hide()
		},
		show: function() {
			var a, b, c, d, e, f, g;
			if (this.hasContent() && this.enabled) {
				switch (a = this.tip(), this.setContent(), this.options.animation && a.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, b = /in/.test(f), a.remove().css({
					top: 0,
					left: 0,
					display: "block"
				}).appendTo(b ? this.$element : document.body), c = this.getPosition(b), d = a[0].offsetWidth, e = a[0].offsetHeight, b ? f.split(" ")[1] : f) {
					case "bottom":
						g = {
							top: c.top + c.height,
							left: c.left + c.width / 2 - d / 2
						};
						break;
					case "top":
						g = {
							top: c.top - e,
							left: c.left + c.width / 2 - d / 2
						};
						break;
					case "left":
						g = {
							top: c.top + c.height / 2 - e / 2,
							left: c.left - d
						};
						break;
					case "right":
						g = {
							top: c.top + c.height / 2 - e / 2,
							left: c.left + c.width
						}
				}
				a.css(g).addClass(f).addClass("in")
			}
		},
		setContent: function() {
			var a = this.tip();
			this.options.html ? a.find(".tooltip-inner").html(this.getTitle()) : a.find(".tooltip-inner").text(this.getTitle()), a.removeClass("fade in top bottom left right")
		},
		hide: function() {
			function b() {
				var b = setTimeout(function() {
					c.off(a.support.transition.end).remove()
				}, 500);
				c.one(a.support.transition.end, function() {
					clearTimeout(b), c.remove()
				})
			}
			var c = this.tip();
			c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b() : c.remove()
		},
		fixTitle: function() {
			var a = this.$element;
			(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
		},
		hasContent: function() {
			return this.getTitle()
		},
		getPosition: function(b) {
			return a.extend({}, b ? {
				top: 0,
				left: 0
			} : this.$element.offset(), {
				width: this.$element[0].offsetWidth,
				height: this.$element[0].offsetHeight
			})
		},
		getTitle: function() {
			var a, b = this.$element,
				c = this.options;
			return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title), a = a.toString().replace(/(^\s*|\s*$)/, "")
		},
		tip: function() {
			return this.$tip = this.$tip || a(this.options.template)
		},
		validate: function() {
			this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
		},
		enable: function() {
			this.enabled = !0
		},
		disable: function() {
			this.enabled = !1
		},
		toggleEnabled: function() {
			this.enabled = !this.enabled
		},
		toggle: function() {
			this[this.tip().hasClass("in") ? "hide" : "show"]()
		}
	}, a.fn.tooltip = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("tooltip"),
				f = "object" == typeof c && c;
			e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
		animation: !0,
		delay: 0,
		selector: !1,
		placement: "top",
		trigger: "hover",
		title: "",
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	}
}(window.jQuery), ! function(a) {
	"use strict";
	var b = function(a, b) {
		this.init("popover", a, b)
	};
	b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
		constructor: b,
		setContent: function() {
			var b = this.tip(),
				c = this.getTitle(),
				d = this.getContent();
			b.find(".popover-title")["object" == a.type(c) ? "append" : "html"](c), b.find(".popover-content > *")["object" == a.type(d) ? "append" : "html"](d), b.removeClass("fade top bottom left right in")
		},
		hasContent: function() {
			return this.getTitle() || this.getContent()
		},
		getContent: function() {
			var a, b = this.$element,
				c = this.options;
			return a = b.attr("data-content") || ("function" == typeof c.content ? c.content.call(b[0]) : c.content), a = a.toString().replace(/(^\s*|\s*$)/, "")
		},
		tip: function() {
			return this.$tip || (this.$tip = a(this.options.template)), this.$tip
		}
	}), a.fn.popover = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("popover"),
				f = "object" == typeof c && c;
			e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
		placement: "right",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
	})
}(window.jQuery), ! function(a) {
	"use strict";

	function b(b, c) {
		var d, e = a.proxy(this.process, this),
			f = a(a(b).is("body") ? window : b);
		this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = f.on("scroll.scroll.data-api", e), this.selector = (this.options.target || (d = a(b).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body").on("click.scroll.data-api", this.selector, e), this.refresh(), this.process()
	}
	b.prototype = {
		constructor: b,
		refresh: function() {
			this.targets = this.$body.find(this.selector).map(function() {
				var b = a(this).attr("href");
				return /^#\w/.test(b) && a(b).length ? b : null
			}), this.offsets = a.map(this.targets, function(b) {
				return a(b).position().top
			})
		},
		process: function() {
			var a, b = this.$scrollElement.scrollTop() + this.options.offset,
				c = this.offsets,
				d = this.targets,
				e = this.activeTarget;
			for (a = c.length; a--;) e != d[a] && b >= c[a] && (!c[a + 1] || b <= c[a + 1]) && this.activate(d[a])
		},
		activate: function(a) {
			var b;
			this.activeTarget = a, this.$body.find(this.selector).parent(".active").removeClass("active"), b = this.$body.find(this.selector + '[href="' + a + '"]').parent("li").addClass("active"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active")
		}
	}, a.fn.scrollspy = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
		offset: 10
	}, a(function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			b.scrollspy(b.data())
		})
	})
}(window.jQuery), ! function(a) {
	"use strict";
	var b = function(b) {
		this.element = a(b)
	};
	b.prototype = {
		constructor: b,
		show: function() {
			var b, c, d = this.element,
				e = d.closest("ul:not(.dropdown-menu)"),
				f = d.attr("data-target");
			f || (f = d.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), d.parent("li").hasClass("active") || (b = e.find(".active a").last()[0], d.trigger({
				type: "show",
				relatedTarget: b
			}), c = a(f), this.activate(d.parent("li"), e), this.activate(c, c.parent(), function() {
				d.trigger({
					type: "shown",
					relatedTarget: b
				})
			}))
		},
		activate: function(b, c, d) {
			function e() {
				f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
			}
			var f = c.find("> .active"),
				g = d && a.support.transition && f.hasClass("fade");
			g ? f.one(a.support.transition.end, e) : e(), f.removeClass("in")
		}
	}, a.fn.tab = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("tab");
			e || d.data("tab", e = new b(this)), "string" == typeof c && e[c]()
		})
	}, a.fn.tab.Constructor = b, a(function() {
		a("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
			b.preventDefault(), a(this).tab("show")
		})
	})
}(window.jQuery), ! function(a) {
	"use strict";
	var b = function(b, c) {
		this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
	};
	b.prototype = {
		constructor: b,
		selected: !1,
		select: function() {
			var a = this.$menu.find(".active").attr("data-value");
			return this.selected = !0, this.$element.val(this.updater(a)).change(), this.onselect && this.onselect(a), this.$element.val(""), this.hide()
		},
		updater: function(a) {
			return a
		},
		show: function() {
			var b = a.extend({}, this.$element.position(), {
				height: this.$element[0].offsetHeight
			});
			return this.$menu.insertAfter(this.$element).css({
				top: b.top + b.height,
				left: b.left
			}).show(), this.selected = !1, this.shown = !0, this
		},
		show_all: function() {
			this.render(this.source).show()
		},
		hide: function() {
			return this.$menu.hide(), this.shown = !1, !this.selected && this.oncancel && this.oncancel(), this
		},
		lookup: function() {
			var b;
			return this.query = this.$element.val(), b = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, b ? this.process(b) : this
		},
		process: function(b) {
			var c = this;
			return b = a.grep(b, function(a) {
				return c.matcher(a)
			}), b = this.sorter(b), b.length || (b = []), this.render(b.slice(0, this.options.items)).show()
		},
		matcher: function(a) {
			return~ a.toLowerCase().indexOf(this.query.toLowerCase())
		},
		sorter: function(a) {
			for (var b, c = [], d = [], e = []; b = a.shift();) b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
			return c.concat(d, e)
		},
		highlighter: function(a) {
			if (!this.query) return a;
			var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
			return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
				return "<strong>" + b + "</strong>"
			})
		},
		render: function(b) {
			var c = this;
			return b = a(b).map(function(b, d) {
				return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
			}), b.first().addClass("active"), this.$menu.html(b), this
		},
		next: function() {
			var b = this.$menu.find(".active").removeClass("active"),
				c = b.next();
			c.length || (c = a(this.$menu.find("li")[0])), c.addClass("active")
		},
		prev: function() {
			var a = this.$menu.find(".active").removeClass("active"),
				b = a.prev();
			b.length || (b = this.$menu.find("li").last()), b.addClass("active")
		},
		listen: function() {
			this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this))
		},
		eventSupported: function(a) {
			var b = a in this.$element;
			return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b
		},
		move: function(a) {
			if (this.shown) {
				switch (a.keyCode) {
					case 9:
					case 13:
					case 27:
						a.preventDefault();
						break;
					case 38:
						a.preventDefault(), this.prev();
						break;
					case 40:
						a.preventDefault(), this.next()
				}
				a.stopPropagation()
			}
		},
		keydown: function(b) {
			this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
		},
		keypress: function(a) {
			this.suppressKeyPressRepeat || this.move(a)
		},
		keyup: function(a) {
			switch (a.keyCode) {
				case 40:
				case 38:
				case 16:
				case 17:
				case 18:
					break;
				case 9:
				case 13:
					if (!this.shown) return;
					this.select();
					break;
				case 27:
					if (!this.shown) return;
					this.hide();
					break;
				default:
					this.lookup()
			}
			a.stopPropagation(), a.preventDefault()
		},
		focus: function() {
			this.focused = !0
		},
		blur: function() {
			this.focused = !1, !this.mousedover && this.shown && this.hide()
		},
		click: function(a) {
			a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
		},
		mouseenter: function(b) {
			this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
		},
		mouseleave: function() {
			this.mousedover = !1, !this.focused && this.shown && this.hide()
		}
	};
	var c = a.fn.typeahead;
	a.fn.typeahead = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("typeahead"),
				f = "object" == typeof c && c;
			e || d.data("typeahead", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.typeahead.defaults = {
		source: [],
		items: 8,
		menu: '<ul class="typeahead dropdown-menu"></ul>',
		item: '<li><a href="#"></a></li>',
		minLength: 1
	}, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function() {
		return a.fn.typeahead = c, this
	}, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
		var b = a(this);
		b.data("typeahead") || b.typeahead(b.data())
	})
}(window.jQuery);
var saveAs = saveAs || "undefined" != typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(a) {
	"use strict";
	if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
		var b = a.document,
			c = function() {
				return a.URL || a.webkitURL || a
			},
			d = (a.URL || a.webkitURL || a, b.createElementNS("http://www.w3.org/1999/xhtml", "a")),
			e = !a.externalHost && "download" in d,
			f = a.webkitRequestFileSystem,
			g = a.requestFileSystem || f || a.mozRequestFileSystem,
			h = function(b) {
				(a.setImmediate || a.setTimeout)(function() {
					throw b
				}, 0)
			},
			i = "application/octet-stream",
			j = 0,
			k = [],
			l = function(a, b, c) {
				b = [].concat(b);
				for (var d = b.length; d--;) {
					var e = a["on" + b[d]];
					if ("function" == typeof e) try {
						e.call(a, c || a)
					} catch (f) {
						h(f)
					}
				}
			},
			m = function(h, m) {
				var n, o, p, q = this,
					r = h.type,
					s = !1,
					t = function() {
						var a = c().createObjectURL(h);
						return k.push(a), a
					},
					u = function() {
						l(q, "writestart progress write writeend".split(" "))
					},
					v = function() {
						(s || !n) && (n = t(h)), o ? o.location.href = n : window.open(n, "_blank"), q.readyState = q.DONE, u()
					},
					w = function(a) {
						return function() {
							return q.readyState !== q.DONE ? a.apply(this, arguments) : void 0
						}
					},
					x = {
						create: !0,
						exclusive: !1
					};
				if (q.readyState = q.INIT, m || (m = "download"), e) {
					n = t(h), b = a.document, d = b.createElementNS("http://www.w3.org/1999/xhtml", "a"), d.href = n, d.download = m;
					var y = b.createEvent("MouseEvents");
					return y.initMouseEvent("click", !0, !1, a, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), d.dispatchEvent(y), q.readyState = q.DONE, void u()
				}
				return a.chrome && r && r !== i && (p = h.slice || h.webkitSlice, h = p.call(h, 0, h.size, i), s = !0), f && "download" !== m && (m += ".download"), (r === i || f) && (o = a), g ? (j += h.size, void g(a.TEMPORARY, j, w(function(a) {
					a.root.getDirectory("saved", x, w(function(a) {
						var b = function() {
							a.getFile(m, x, w(function(a) {
								a.createWriter(w(function(b) {
									b.onwriteend = function(b) {
										o.location.href = a.toURL(), k.push(a), q.readyState = q.DONE, l(q, "writeend", b)
									}, b.onerror = function() {
										var a = b.error;
										a.code !== a.ABORT_ERR && v()
									}, "writestart progress write abort".split(" ").forEach(function(a) {
										b["on" + a] = q["on" + a]
									}), b.write(h), q.abort = function() {
										b.abort(), q.readyState = q.DONE
									}, q.readyState = q.WRITING
								}), v)
							}), v)
						};
						a.getFile(m, {
							create: !1
						}, w(function(a) {
							a.remove(), b()
						}), w(function(a) {
							a.code === a.NOT_FOUND_ERR ? b() : v()
						}))
					}), v)
				}), v)) : void v()
			},
			n = m.prototype,
			o = function(a, b) {
				return new m(a, b)
			};
		return n.abort = function() {
			var a = this;
			a.readyState = a.DONE, l(a, "abort")
		}, n.readyState = n.INIT = 0, n.WRITING = 1, n.DONE = 2, n.error = n.onwritestart = n.onprogress = n.onwrite = n.onabort = n.onerror = n.onwriteend = null, o
	}
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && null !== module ? module.exports = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function() {
	return saveAs
}),
function() {
	function a(a, b) {
		function d(a, b) {
			var c = a / i,
				d = Math.abs(e - b);
			return f ? c + d / f : d ? 1 : c
		}
		b = b || {};
		var e = b.location || c.location,
			f = b.distance || c.distance,
			g = b.threshold || c.threshold,
			h = b.maxPetternLength || c.maxPetternLength,
			a = b.caseSensitive ? a : a.toLowerCase(),
			i = a.length;
		if (i > h) throw new Error("Pattern length is too long");
		var j = 1 << i - 1,
			k = function() {
				var b = {},
					c = 0;
				for (c = 0; i > c; c++) b[a.charAt(c)] = 0;
				for (c = 0; i > c; c++) b[a.charAt(c)] |= 1 << a.length - c - 1;
				return b
			}();
		this.search = function(c) {
			if (c = b.caseSensitive ? c : c.toLowerCase(), a === c) return {
				isMatch: !0,
				score: 0
			};
			var f, h, l, m, n, o, p, q, r, s = c.length,
				t = g,
				u = c.indexOf(a, e),
				v = i + s,
				w = 1,
				x = [];
			for (-1 != u && (t = Math.min(d(0, u), t), u = c.lastIndexOf(a, e + i), -1 != u && (t = Math.min(d(0, u), t))), u = -1, f = 0; i > f; f++) {
				for (l = 0, m = v; m > l;) d(f, e + m) <= t ? l = m : v = m, m = Math.floor((v - l) / 2 + l);
				for (v = m, o = Math.max(1, e - m + 1), p = Math.min(e + m, s) + i, q = Array(p + 2), q[p + 1] = (1 << f) - 1, h = p; h >= o; h--)
					if (r = k[c.charAt(h - 1)], q[h] = 0 === f ? (q[h + 1] << 1 | 1) & r : (q[h + 1] << 1 | 1) & r | ((n[h + 1] | n[h]) << 1 | 1) | n[h + 1], q[h] & j && (w = d(f, h - 1), t >= w)) {
						if (t = w, u = h - 1, x.push(u), !(u > e)) break;
						o = Math.max(1, 2 * e - u)
					}
				if (d(f + 1, e) > t) break;
				n = q
			}
			return {
				isMatch: u >= 0,
				score: w
			}
		}
	}

	function b(b, c) {
		c = c || {};
		var d = c.keys;
		this.search = function(e) {
			function f(a, b, c) {
				void 0 !== a && null !== a && "string" == typeof a && (j = m.search(a), j.isMatch && (l = p[c], l ? l.score = Math.min(l.score, j.score) : (p[c] = {
					item: b,
					score: j.score
				}, o.push(p[c]))))
			}
			var g, h, i, j, k, l, m = new a(e, c),
				n = b.length,
				o = [],
				p = {},
				q = [];
			if ("string" == typeof b[0])
				for (g = 0; n > g; g++) f(b[g], g, g);
			else
				for (g = 0; n > g; g++)
					for (i = b[g], h = 0; h < d.length; h++) f(i[d[h]], i, g);
			for (o.sort(function(a, b) {
				return a.score - b.score
			}), k = o.length, g = 0; k > g; g++) q.push(c.id ? o[g].item[c.id] : o[g].item);
			return q
		}
	}
	var c = {
		location: 0,
		distance: 100,
		threshold: .6,
		maxPetternLength: 32
	};
	"undefined" != typeof module && "undefined" != typeof module.exports ? "function" == typeof module.setExports ? module.setExports(b) : module.exports = b : window.Fuse = b
}();
var hljs = new function() {
	function a(a) {
		return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
	}

	function b(a) {
		return a.nodeName.toLowerCase()
	}

	function c(a, b) {
		var c = a && a.exec(b);
		return c && 0 == c.index
	}

	function d(a) {
		var b = (a.className + " " + (a.parentNode ? a.parentNode.className : "")).split(/\s+/);
		return b = b.map(function(a) {
			return a.replace(/^lang(uage)?-/, "")
		}), b.filter(function(a) {
			return s(a) || "no-highlight" == a
		})[0]
	}

	function e(a, b) {
		var c = {};
		for (var d in a) c[d] = a[d];
		if (b)
			for (var d in b) c[d] = b[d];
		return c
	}

	function f(a) {
		var c = [];
		return function d(a, e) {
			for (var f = a.firstChild; f; f = f.nextSibling) 3 == f.nodeType ? e += f.nodeValue.length : "br" == b(f) ? e += 1 : 1 == f.nodeType && (c.push({
				event: "start",
				offset: e,
				node: f
			}), e = d(f, e), c.push({
				event: "stop",
				offset: e,
				node: f
			}));
			return e
		}(a, 0), c
	}

	function g(c, d, e) {
		function f() {
			return c.length && d.length ? c[0].offset != d[0].offset ? c[0].offset < d[0].offset ? c : d : "start" == d[0].event ? c : d : c.length ? c : d
		}

		function g(c) {
			function d(b) {
				return " " + b.nodeName + '="' + a(b.value) + '"'
			}
			k += "<" + b(c) + Array.prototype.map.call(c.attributes, d).join("") + ">"
		}

		function h(a) {
			k += "</" + b(a) + ">"
		}

		function i(a) {
			("start" == a.event ? g : h)(a.node)
		}
		for (var j = 0, k = "", l = []; c.length || d.length;) {
			var m = f();
			if (k += a(e.substr(j, m[0].offset - j)), j = m[0].offset, m == c) {
				l.reverse().forEach(h);
				do i(m.splice(0, 1)[0]), m = f(); while (m == c && m.length && m[0].offset == j);
				l.reverse().forEach(g)
			} else "start" == m[0].event ? l.push(m[0].node) : l.pop(), i(m.splice(0, 1)[0])
		}
		return k + a(e.substr(j))
	}

	function h(a) {
		function b(a) {
			return a && a.source || a
		}

		function c(c, d) {
			return RegExp(b(c), "m" + (a.cI ? "i" : "") + (d ? "g" : ""))
		}

		function d(f, g) {
			function h(b, c) {
				a.cI && (c = c.toLowerCase()), c.split(" ").forEach(function(a) {
					var c = a.split("|");
					i[c[0]] = [b, c[1] ? Number(c[1]) : 1]
				})
			}
			if (!f.compiled) {
				if (f.compiled = !0, f.k = f.k || f.bK, f.k) {
					var i = {};
					"string" == typeof f.k ? h("keyword", f.k) : Object.keys(f.k).forEach(function(a) {
						h(a, f.k[a])
					}), f.k = i
				}
				f.lR = c(f.l || /\b[A-Za-z0-9_]+\b/, !0), g && (f.bK && (f.b = "\\b(" + f.bK.split(" ").join("|") + ")\\b"), f.b || (f.b = /\B|\b/), f.bR = c(f.b), f.e || f.eW || (f.e = /\B|\b/), f.e && (f.eR = c(f.e)), f.tE = b(f.e) || "", f.eW && g.tE && (f.tE += (f.e ? "|" : "") + g.tE)), f.i && (f.iR = c(f.i)), void 0 === f.r && (f.r = 1), f.c || (f.c = []);
				var j = [];
				f.c.forEach(function(a) {
					a.v ? a.v.forEach(function(b) {
						j.push(e(a, b))
					}) : j.push("self" == a ? f : a)
				}), f.c = j, f.c.forEach(function(a) {
					d(a, f)
				}), f.starts && d(f.starts, g);
				var k = f.c.map(function(a) {
					return a.bK ? "\\.?(" + a.b + ")\\.?" : a.b
				}).concat([f.tE, f.i]).map(b).filter(Boolean);
				f.t = k.length ? c(k.join("|"), !0) : {
					exec: function() {
						return null
					}
				}, f.continuation = {}
			}
		}
		d(a)
	}

	function i(b, d, e, f) {
		function g(a, b) {
			for (var d = 0; d < b.c.length; d++)
				if (c(b.c[d].bR, a)) return b.c[d]
		}

		function k(a, b) {
			return c(a.eR, b) ? a : a.eW ? k(a.parent, b) : void 0
		}

		function l(a, b) {
			return !e && c(b.iR, a)
		}

		function m(a, b) {
			var c = w.cI ? b[0].toLowerCase() : b[0];
			return a.k.hasOwnProperty(c) && a.k[c]
		}

		function n(a, b, c, d) {
			var e = d ? "" : t.classPrefix,
				f = '<span class="' + e,
				g = c ? "" : "</span>";
			return f += a + '">', f + b + g
		}

		function o() {
			if (!x.k) return a(A);
			var b = "",
				c = 0;
			x.lR.lastIndex = 0;
			for (var d = x.lR.exec(A); d;) {
				b += a(A.substr(c, d.index - c));
				var e = m(x, d);
				e ? (B += e[1], b += n(e[0], a(d[0]))) : b += a(d[0]), c = x.lR.lastIndex, d = x.lR.exec(A)
			}
			return b + a(A.substr(c))
		}

		function p() {
			if (x.sL && !u[x.sL]) return a(A);
			var b = x.sL ? i(x.sL, A, !0, x.continuation.top) : j(A);
			return x.r > 0 && (B += b.r), "continuous" == x.subLanguageMode && (x.continuation.top = b.top), n(b.language, b.value, !1, !0)
		}

		function q() {
			return void 0 !== x.sL ? p() : o()
		}

		function r(b, c) {
			var d = b.cN ? n(b.cN, "", !0) : "";
			b.rB ? (y += d, A = "") : b.eB ? (y += a(c) + d, A = "") : (y += d, A = c), x = Object.create(b, {
				parent: {
					value: x
				}
			})
		}

		function v(b, c) {
			if (A += b, void 0 === c) return y += q(), 0;
			var d = g(c, x);
			if (d) return y += q(), r(d, c), d.rB ? 0 : c.length;
			var e = k(x, c);
			if (e) {
				var f = x;
				f.rE || f.eE || (A += c), y += q();
				do x.cN && (y += "</span>"), B += x.r, x = x.parent; while (x != e.parent);
				return f.eE && (y += a(c)), A = "", e.starts && r(e.starts, ""), f.rE ? 0 : c.length
			}
			if (l(c, x)) throw new Error('Illegal lexeme "' + c + '" for mode "' + (x.cN || "<unnamed>") + '"');
			return A += c, c.length || 1
		}
		var w = s(b);
		if (!w) throw new Error('Unknown language: "' + b + '"');
		h(w);
		for (var x = f || w, y = "", z = x; z != w; z = z.parent) z.cN && (y += n(z.cN, y, !0));
		var A = "",
			B = 0;
		try {
			for (var C, D, E = 0;;) {
				if (x.t.lastIndex = E, C = x.t.exec(d), !C) break;
				D = v(d.substr(E, C.index - E), C[0]), E = C.index + D
			}
			v(d.substr(E));
			for (var z = x; z.parent; z = z.parent) z.cN && (y += "</span>");
			return {
				r: B,
				value: y,
				language: b,
				top: x
			}
		} catch (F) {
			if (-1 != F.message.indexOf("Illegal")) return {
				r: 0,
				value: a(d)
			};
			throw F
		}
	}

	function j(b, c) {
		c = c || t.languages || Object.keys(u);
		var d = {
				r: 0,
				value: a(b)
			},
			e = d;
		return c.forEach(function(a) {
			if (s(a)) {
				var c = i(a, b, !1);
				c.language = a, c.r > e.r && (e = c), c.r > d.r && (e = d, d = c)
			}
		}), e.language && (d.second_best = e), d
	}

	function k(a) {
		return t.tabReplace && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function(a, b) {
			return b.replace(/\t/g, t.tabReplace)
		})), t.useBR && (a = a.replace(/\n/g, "<br>")), a
	}

	function l(a) {
		var b = t.useBR ? a.innerHTML.replace(/\n/g, "").replace(/<br>|<br [^>]*>/g, "\n").replace(/<[^>]*>/g, "") : a.textContent,
			c = d(a);
		if ("no-highlight" != c) {
			var e = c ? i(c, b, !0) : j(b),
				h = f(a);
			if (h.length) {
				var l = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
				l.innerHTML = e.value, e.value = g(h, f(l), b)
			}
			e.value = k(e.value), a.innerHTML = e.value, a.className += " hljs " + (!c && e.language || ""), a.result = {
				language: e.language,
				re: e.r
			}, e.second_best && (a.second_best = {
				language: e.second_best.language,
				re: e.second_best.r
			})
		}
	}

	function m(a) {
		t = e(t, a)
	}

	function n() {
		if (!n.called) {
			n.called = !0;
			var a = document.querySelectorAll("pre code");
			Array.prototype.forEach.call(a, l)
		}
	}

	function o() {
		addEventListener("DOMContentLoaded", n, !1), addEventListener("load", n, !1)
	}

	function p(a, b) {
		var c = u[a] = b(this);
		c.aliases && c.aliases.forEach(function(b) {
			v[b] = a
		})
	}

	function q() {
		return Object.keys(u)
	}

	function r() {
		return Object.keys(u).concat(Object.keys(v))
	}

	function s(a) {
		return u[a] || u[v[a]]
	}
	var t = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
		},
		u = {},
		v = {};
	this.highlight = i, this.highlightAuto = j, this.fixMarkup = k, this.highlightBlock = l, this.configure = m, this.initHighlighting = n, this.initHighlightingOnLoad = o, this.registerLanguage = p, this.listLanguages = q, this.listLanguagesAndAlias = r, this.getLanguage = s, this.inherit = e, this.IR = "[a-zA-Z][a-zA-Z0-9_]*", this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", this.NR = "\\b\\d+(\\.\\d+)?", this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", this.BNR = "\\b(0b[01]+)", this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", this.BE = {
		b: "\\\\[\\s\\S]",
		r: 0
	}, this.ASM = {
		cN: "string",
		b: "'",
		e: "'",
		i: "\\n",
		c: [this.BE]
	}, this.QSM = {
		cN: "string",
		b: '"',
		e: '"',
		i: "\\n",
		c: [this.BE]
	}, this.PWM = {
		b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
	}, this.CLCM = {
		cN: "comment",
		b: "//",
		e: "$",
		c: [this.PWM]
	}, this.CBCM = {
		cN: "comment",
		b: "/\\*",
		e: "\\*/",
		c: [this.PWM]
	}, this.HCM = {
		cN: "comment",
		b: "#",
		e: "$",
		c: [this.PWM]
	}, this.NM = {
		cN: "number",
		b: this.NR,
		r: 0
	}, this.CNM = {
		cN: "number",
		b: this.CNR,
		r: 0
	}, this.BNM = {
		cN: "number",
		b: this.BNR,
		r: 0
	}, this.CSSNM = {
		cN: "number",
		b: this.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		r: 0
	}, this.RM = {
		cN: "regexp",
		b: /\//,
		e: /\/[gim]*/,
		i: /\n/,
		c: [this.BE, {
			b: /\[/,
			e: /\]/,
			r: 0,
			c: [this.BE]
		}]
	}, this.TM = {
		cN: "title",
		b: this.IR,
		r: 0
	}, this.UTM = {
		cN: "title",
		b: this.UIR,
		r: 0
	}
};
hljs.registerLanguage("diff", function() {
	return {
		aliases: ["patch"],
		c: [{
			cN: "chunk",
			r: 10,
			v: [{
				b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
			}, {
				b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
			}, {
				b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
			}]
		}, {
			cN: "header",
			v: [{
				b: /Index: /,
				e: /$/
			}, {
				b: /=====/,
				e: /=====$/
			}, {
				b: /^\-\-\-/,
				e: /$/
			}, {
				b: /^\*{3} /,
				e: /$/
			}, {
				b: /^\+\+\+/,
				e: /$/
			}, {
				b: /\*{5}/,
				e: /\*{5}$/
			}]
		}, {
			cN: "addition",
			b: "^\\+",
			e: "$"
		}, {
			cN: "deletion",
			b: "^\\-",
			e: "$"
		}, {
			cN: "change",
			b: "^\\!",
			e: "$"
		}]
	}
}), hljs.registerLanguage("nginx", function(a) {
	var b = {
			cN: "variable",
			v: [{
				b: /\$\d+/
			}, {
				b: /\$\{/,
				e: /}/
			}, {
				b: "[\\$\\@]" + a.UIR
			}]
		},
		c = {
			eW: !0,
			l: "[a-z/_]+",
			k: {
				built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
			},
			r: 0,
			i: "=>",
			c: [a.HCM, {
					cN: "string",
					c: [a.BE, b],
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}]
				}, {
					cN: "url",
					b: "([a-z]+):/",
					e: "\\s",
					eW: !0,
					eE: !0
				}, {
					cN: "regexp",
					c: [a.BE, b],
					v: [{
						b: "\\s\\^",
						e: "\\s|{|;",
						rE: !0
					}, {
						b: "~\\*?\\s+",
						e: "\\s|{|;",
						rE: !0
					}, {
						b: "\\*(\\.[a-z\\-]+)+"
					}, {
						b: "([a-z\\-]+\\.)+\\*"
					}]
				}, {
					cN: "number",
					b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
				}, {
					cN: "number",
					b: "\\b\\d+[kKmMgGdshdwy]*\\b",
					r: 0
				},
				b
			]
		};
	return {
		aliases: ["nginxconf"],
		c: [a.HCM, {
			b: a.UIR + "\\s",
			e: ";|{",
			rB: !0,
			c: [{
				cN: "title",
				b: a.UIR,
				starts: c
			}],
			r: 0
		}],
		i: "[^\\s\\}]"
	}
}), hljs.registerLanguage("objectivec", function(a) {
	var b = {
			keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",
			literal: "false true FALSE TRUE nil YES NO NULL",
			built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
		},
		c = /[a-zA-Z@][a-zA-Z0-9_]*/,
		d = "@interface @class @protocol @implementation";
	return {
		aliases: ["m", "mm", "objc", "obj-c"],
		k: b,
		l: c,
		i: "</",
		c: [a.CLCM, a.CBCM, a.CNM, a.QSM, {
			cN: "string",
			b: "'",
			e: "[^\\\\]'",
			i: "[^\\\\][^']"
		}, {
			cN: "preprocessor",
			b: "#import",
			e: "$",
			c: [{
				cN: "title",
				b: '"',
				e: '"'
			}, {
				cN: "title",
				b: "<",
				e: ">"
			}]
		}, {
			cN: "preprocessor",
			b: "#",
			e: "$"
		}, {
			cN: "class",
			b: "(" + d.split(" ").join("|") + ")\\b",
			e: "({|$)",
			eE: !0,
			k: d,
			l: c,
			c: [a.UTM]
		}, {
			cN: "variable",
			b: "\\." + a.UIR,
			r: 0
		}]
	}
}), hljs.registerLanguage("cpp", function(a) {
	var b = {
		keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
		built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
	};
	return {
		aliases: ["c", "h", "c++", "h++"],
		k: b,
		i: "</",
		c: [a.CLCM, a.CBCM, a.QSM, {
				cN: "string",
				b: "'\\\\?.",
				e: "'",
				i: "."
			}, {
				cN: "number",
				b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
			},
			a.CNM, {
				cN: "preprocessor",
				b: "#",
				e: "$",
				k: "if else elif endif define undef warning error line pragma",
				c: [{
						b: 'include\\s*[<"]',
						e: '[>"]',
						k: "include",
						i: "\\n"
					},
					a.CLCM
				]
			}, {
				cN: "stl_container",
				b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
				e: ">",
				k: b,
				r: 10,
				c: ["self"]
			}, {
				b: a.IR + "::"
			}
		]
	}
}), hljs.registerLanguage("sql", function(a) {
	return {
		cI: !0,
		i: /[<>]/,
		c: [{
				cN: "operator",
				bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",
				e: /;/,
				eW: !0,
				k: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binary binlog bit bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char char_length character character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate dec decimal declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract false fast fetch field fields find_in_set first first_value float floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr int integer intersect interval into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now null nullif number numeric nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read real references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts smallint snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim true truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp varchar variables variance varp varying version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
				c: [{
						cN: "string",
						b: "'",
						e: "'",
						c: [a.BE, {
							b: "''"
						}]
					}, {
						cN: "string",
						b: '"',
						e: '"',
						c: [a.BE, {
							b: '""'
						}]
					}, {
						cN: "string",
						b: "`",
						e: "`",
						c: [a.BE]
					},
					a.CBCM, a.CNM
				]
			},
			a.CBCM, {
				cN: "comment",
				b: "--",
				e: "$"
			}
		]
	}
}), hljs.registerLanguage("javascript", function(a) {
	return {
		aliases: ["js"],
		k: {
			keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
		},
		c: [{
				cN: "pi",
				b: /^\s*('|")use strict('|")/,
				r: 10
			},
			a.ASM, a.QSM, a.CLCM, a.CBCM, a.CNM, {
				b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
				k: "return throw case",
				c: [a.CLCM, a.CBCM, a.RM, {
					b: /</,
					e: />;/,
					r: 0,
					sL: "xml"
				}],
				r: 0
			}, {
				cN: "function",
				bK: "function",
				e: /\{/,
				eE: !0,
				c: [a.inherit(a.TM, {
					b: /[A-Za-z$_][0-9A-Za-z$_]*/
				}), {
					cN: "params",
					b: /\(/,
					e: /\)/,
					c: [a.CLCM, a.CBCM],
					i: /["'\(]/
				}],
				i: /\[|%/
			}, {
				b: /\$[(.]/
			}, {
				b: "\\." + a.IR,
				r: 0
			}
		]
	}
}), hljs.registerLanguage("css", function(a) {
	var b = "[a-zA-Z-][a-zA-Z0-9_-]*",
		c = {
			cN: "function",
			b: b + "\\(",
			rB: !0,
			eE: !0,
			e: "\\("
		};
	return {
		cI: !0,
		i: "[=/|']",
		c: [a.CBCM, {
			cN: "id",
			b: "\\#[A-Za-z0-9_-]+"
		}, {
			cN: "class",
			b: "\\.[A-Za-z0-9_-]+",
			r: 0
		}, {
			cN: "attr_selector",
			b: "\\[",
			e: "\\]",
			i: "$"
		}, {
			cN: "pseudo",
			b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
		}, {
			cN: "at_rule",
			b: "@(font-face|page)",
			l: "[a-z-]+",
			k: "font-face page"
		}, {
			cN: "at_rule",
			b: "@",
			e: "[{;]",
			c: [{
				cN: "keyword",
				b: /\S+/
			}, {
				b: /\s/,
				eW: !0,
				eE: !0,
				r: 0,
				c: [c, a.ASM, a.QSM, a.CSSNM]
			}]
		}, {
			cN: "tag",
			b: b,
			r: 0
		}, {
			cN: "rules",
			b: "{",
			e: "}",
			i: "[^\\s]",
			r: 0,
			c: [a.CBCM, {
				cN: "rule",
				b: "[^\\s]",
				rB: !0,
				e: ";",
				eW: !0,
				c: [{
					cN: "attribute",
					b: "[A-Z\\_\\.\\-]+",
					e: ":",
					eE: !0,
					i: "[^\\s]",
					starts: {
						cN: "value",
						eW: !0,
						eE: !0,
						c: [c, a.CSSNM, a.QSM, a.ASM, a.CBCM, {
							cN: "hexcolor",
							b: "#[0-9A-Fa-f]+"
						}, {
							cN: "important",
							b: "!important"
						}]
					}
				}]
			}]
		}]
	}
}), hljs.registerLanguage("xml", function() {
	var a = "[A-Za-z0-9\\._:-]+",
		b = {
			b: /<\?(php)?(?!\w)/,
			e: /\?>/,
			sL: "php",
			subLanguageMode: "continuous"
		},
		c = {
			eW: !0,
			i: /</,
			r: 0,
			c: [b, {
				cN: "attribute",
				b: a,
				r: 0
			}, {
				b: "=",
				r: 0,
				c: [{
					cN: "value",
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}, {
						b: /[^\s\/>]+/
					}]
				}]
			}]
		};
	return {
		aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
		cI: !0,
		c: [{
				cN: "doctype",
				b: "<!DOCTYPE",
				e: ">",
				r: 10,
				c: [{
					b: "\\[",
					e: "\\]"
				}]
			}, {
				cN: "comment",
				b: "<!--",
				e: "-->",
				r: 10
			}, {
				cN: "cdata",
				b: "<\\!\\[CDATA\\[",
				e: "\\]\\]>",
				r: 10
			}, {
				cN: "tag",
				b: "<style(?=\\s|>|$)",
				e: ">",
				k: {
					title: "style"
				},
				c: [c],
				starts: {
					e: "</style>",
					rE: !0,
					sL: "css"
				}
			}, {
				cN: "tag",
				b: "<script(?=\\s|>|$)",
				e: ">",
				k: {
					title: "script"
				},
				c: [c],
				starts: {
					e: "</script>",
					rE: !0,
					sL: "javascript"
				}
			}, {
				b: "<%",
				e: "%>",
				sL: "vbscript"
			},
			b, {
				cN: "pi",
				b: /<\?\w+/,
				e: /\?>/,
				r: 10
			}, {
				cN: "tag",
				b: "</?",
				e: "/?>",
				c: [{
						cN: "title",
						b: "[^ /><]+",
						r: 0
					},
					c
				]
			}
		]
	}
}), hljs.registerLanguage("markdown", function() {
	return {
		aliases: ["md", "mkdown", "mkd"],
		c: [{
			cN: "header",
			v: [{
				b: "^#{1,6}",
				e: "$"
			}, {
				b: "^.+?\\n[=-]{2,}$"
			}]
		}, {
			b: "<",
			e: ">",
			sL: "xml",
			r: 0
		}, {
			cN: "bullet",
			b: "^([*+-]|(\\d+\\.))\\s+"
		}, {
			cN: "strong",
			b: "[*_]{2}.+?[*_]{2}"
		}, {
			cN: "emphasis",
			v: [{
				b: "\\*.+?\\*"
			}, {
				b: "_.+?_",
				r: 0
			}]
		}, {
			cN: "blockquote",
			b: "^>\\s+",
			e: "$"
		}, {
			cN: "code",
			v: [{
				b: "`.+?`"
			}, {
				b: "^( {4}|	)",
				e: "$",
				r: 0
			}]
		}, {
			cN: "horizontal_rule",
			b: "^[-\\*]{3,}",
			e: "$"
		}, {
			b: "\\[.+?\\][\\(\\[].+?[\\)\\]]",
			rB: !0,
			c: [{
				cN: "link_label",
				b: "\\[",
				e: "\\]",
				eB: !0,
				rE: !0,
				r: 0
			}, {
				cN: "link_url",
				b: "\\]\\(",
				e: "\\)",
				eB: !0,
				eE: !0
			}, {
				cN: "link_reference",
				b: "\\]\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}],
			r: 10
		}, {
			b: "^\\[.+\\]:",
			e: "$",
			rB: !0,
			c: [{
				cN: "link_reference",
				b: "\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}, {
				cN: "link_url",
				b: "\\s",
				e: "$"
			}]
		}]
	}
}), hljs.registerLanguage("coffeescript", function(a) {
	var b = {
			keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
			literal: "true false null undefined yes no on off",
			reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
			built_in: "npm require console print module global window document"
		},
		c = "[A-Za-z$_][0-9A-Za-z$_]*",
		d = a.inherit(a.TM, {
			b: c
		}),
		e = {
			cN: "subst",
			b: /#\{/,
			e: /}/,
			k: b
		},
		f = [a.BNM, a.inherit(a.CNM, {
			starts: {
				e: "(\\s*/)?",
				r: 0
			}
		}), {
			cN: "string",
			v: [{
				b: /'''/,
				e: /'''/,
				c: [a.BE]
			}, {
				b: /'/,
				e: /'/,
				c: [a.BE]
			}, {
				b: /"""/,
				e: /"""/,
				c: [a.BE, e]
			}, {
				b: /"/,
				e: /"/,
				c: [a.BE, e]
			}]
		}, {
			cN: "regexp",
			v: [{
				b: "///",
				e: "///",
				c: [e, a.HCM]
			}, {
				b: "//[gim]*",
				r: 0
			}, {
				b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"
			}]
		}, {
			cN: "property",
			b: "@" + c
		}, {
			b: "`",
			e: "`",
			eB: !0,
			eE: !0,
			sL: "javascript"
		}];
	return e.c = f, {
		aliases: ["coffee", "cson", "iced"],
		k: b,
		c: f.concat([{
				cN: "comment",
				b: "###",
				e: "###"
			},
			a.HCM, {
				cN: "function",
				b: "(" + c + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
				e: "[-=]>",
				rB: !0,
				c: [d, {
					cN: "params",
					b: "\\(",
					rB: !0,
					c: [{
						b: /\(/,
						e: /\)/,
						k: b,
						c: ["self"].concat(f)
					}]
				}]
			}, {
				cN: "class",
				bK: "class",
				e: "$",
				i: /[:="\[\]]/,
				c: [{
						bK: "extends",
						eW: !0,
						i: /[:="\[\]]/,
						c: [d]
					},
					d
				]
			}, {
				cN: "attribute",
				b: c + ":",
				e: ":",
				rB: !0,
				eE: !0,
				r: 0
			}
		])
	}
}), hljs.registerLanguage("makefile", function(a) {
	var b = {
		cN: "variable",
		b: /\$\(/,
		e: /\)/,
		c: [a.BE]
	};
	return {
		aliases: ["mk", "mak"],
		c: [a.HCM, {
			b: /^\w+\s*\W*=/,
			rB: !0,
			r: 0,
			starts: {
				cN: "constant",
				e: /\s*\W*=/,
				eE: !0,
				starts: {
					e: /$/,
					r: 0,
					c: [b]
				}
			}
		}, {
			cN: "title",
			b: /^[\w]+:\s*$/
		}, {
			cN: "phony",
			b: /^\.PHONY:/,
			e: /$/,
			k: ".PHONY",
			l: /[\.\w]+/
		}, {
			b: /^\t+/,
			e: /$/,
			c: [a.QSM, b]
		}]
	}
}), hljs.registerLanguage("apache", function(a) {
	var b = {
		cN: "number",
		b: "[\\$%]\\d+"
	};
	return {
		aliases: ["apacheconf"],
		cI: !0,
		c: [a.HCM, {
			cN: "tag",
			b: "</?",
			e: ">"
		}, {
			cN: "keyword",
			b: /\w+/,
			r: 0,
			k: {
				common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
			},
			starts: {
				e: /$/,
				r: 0,
				k: {
					literal: "on off all"
				},
				c: [{
						cN: "sqbracket",
						b: "\\s\\[",
						e: "\\]$"
					}, {
						cN: "cbracket",
						b: "[\\$%]\\{",
						e: "\\}",
						c: ["self", b]
					},
					b, a.QSM
				]
			}
		}],
		i: /\S/
	}
}), hljs.registerLanguage("perl", function(a) {
	var b = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
		c = {
			cN: "subst",
			b: "[$@]\\{",
			e: "\\}",
			k: b
		},
		d = {
			b: "->{",
			e: "}"
		},
		e = {
			cN: "variable",
			v: [{
				b: /\$\d/
			}, {
				b: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
			}, {
				b: /[\$\%\@\*][^\s\w{]/,
				r: 0
			}]
		},
		f = {
			cN: "comment",
			b: "^(__END__|__DATA__)",
			e: "\\n$",
			r: 5
		},
		g = [a.BE, c, e],
		h = [e, a.HCM, f, {
				cN: "comment",
				b: "^\\=\\w",
				e: "\\=cut",
				eW: !0
			},
			d, {
				cN: "string",
				c: g,
				v: [{
					b: "q[qwxr]?\\s*\\(",
					e: "\\)",
					r: 5
				}, {
					b: "q[qwxr]?\\s*\\[",
					e: "\\]",
					r: 5
				}, {
					b: "q[qwxr]?\\s*\\{",
					e: "\\}",
					r: 5
				}, {
					b: "q[qwxr]?\\s*\\|",
					e: "\\|",
					r: 5
				}, {
					b: "q[qwxr]?\\s*\\<",
					e: "\\>",
					r: 5
				}, {
					b: "qw\\s+q",
					e: "q",
					r: 5
				}, {
					b: "'",
					e: "'",
					c: [a.BE]
				}, {
					b: '"',
					e: '"'
				}, {
					b: "`",
					e: "`",
					c: [a.BE]
				}, {
					b: "{\\w+}",
					c: [],
					r: 0
				}, {
					b: "-?\\w+\\s*\\=\\>",
					c: [],
					r: 0
				}]
			}, {
				cN: "number",
				b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
				r: 0
			}, {
				b: "(\\/\\/|" + a.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
				k: "split return print reverse grep",
				r: 0,
				c: [a.HCM, f, {
					cN: "regexp",
					b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
					r: 10
				}, {
					cN: "regexp",
					b: "(m|qr)?/",
					e: "/[a-z]*",
					c: [a.BE],
					r: 0
				}]
			}, {
				cN: "sub",
				bK: "sub",
				e: "(\\s*\\(.*?\\))?[;{]",
				r: 5
			}, {
				cN: "operator",
				b: "-\\w\\b",
				r: 0
			}
		];
	return c.c = h, d.c = h, {
		aliases: ["pl"],
		k: b,
		c: h
	}
}), hljs.registerLanguage("json", function(a) {
	var b = {
			literal: "true false null"
		},
		c = [a.QSM, a.CNM],
		d = {
			cN: "value",
			e: ",",
			eW: !0,
			eE: !0,
			c: c,
			k: b
		},
		e = {
			b: "{",
			e: "}",
			c: [{
				cN: "attribute",
				b: '\\s*"',
				e: '"\\s*:\\s*',
				eB: !0,
				eE: !0,
				c: [a.BE],
				i: "\\n",
				starts: d
			}],
			i: "\\S"
		},
		f = {
			b: "\\[",
			e: "\\]",
			c: [a.inherit(d, {
				cN: null
			})],
			i: "\\S"
		};
	return c.splice(c.length, 0, e, f), {
		c: c,
		k: b,
		i: "\\S"
	}
}), hljs.registerLanguage("ini", function(a) {
	return {
		cI: !0,
		i: /\S/,
		c: [{
			cN: "comment",
			b: ";",
			e: "$"
		}, {
			cN: "title",
			b: "^\\[",
			e: "\\]"
		}, {
			cN: "setting",
			b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
			e: "$",
			c: [{
				cN: "value",
				eW: !0,
				k: "on off true false yes no",
				c: [a.QSM, a.NM],
				r: 0
			}]
		}]
	}
}), hljs.registerLanguage("cs", function(a) {
	var b = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
	return {
		k: b,
		i: /::/,
		c: [{
				cN: "comment",
				b: "///",
				e: "$",
				rB: !0,
				c: [{
					cN: "xmlDocTag",
					v: [{
						b: "///",
						r: 0
					}, {
						b: "<!--|-->"
					}, {
						b: "</?",
						e: ">"
					}]
				}]
			},
			a.CLCM, a.CBCM, {
				cN: "preprocessor",
				b: "#",
				e: "$",
				k: "if else elif endif define undef warning error line region endregion pragma checksum"
			}, {
				cN: "string",
				b: '@"',
				e: '"',
				c: [{
					b: '""'
				}]
			},
			a.ASM, a.QSM, a.CNM, {
				bK: "protected public private internal",
				e: /[{;=]/,
				k: b,
				c: [{
					bK: "class namespace interface",
					starts: {
						c: [a.TM]
					}
				}, {
					b: a.IR + "\\s*\\(",
					rB: !0,
					c: [a.TM]
				}]
			}
		]
	}
}), hljs.registerLanguage("python", function(a) {
	var b = {
			cN: "prompt",
			b: /^(>>>|\.\.\.) /
		},
		c = {
			cN: "string",
			c: [a.BE],
			v: [{
					b: /(u|b)?r?'''/,
					e: /'''/,
					c: [b],
					r: 10
				}, {
					b: /(u|b)?r?"""/,
					e: /"""/,
					c: [b],
					r: 10
				}, {
					b: /(u|r|ur)'/,
					e: /'/,
					r: 10
				}, {
					b: /(u|r|ur)"/,
					e: /"/,
					r: 10
				}, {
					b: /(b|br)'/,
					e: /'/
				}, {
					b: /(b|br)"/,
					e: /"/
				},
				a.ASM, a.QSM
			]
		},
		d = {
			cN: "number",
			r: 0,
			v: [{
				b: a.BNR + "[lLjJ]?"
			}, {
				b: "\\b(0o[0-7]+)[lLjJ]?"
			}, {
				b: a.CNR + "[lLjJ]?"
			}]
		},
		e = {
			cN: "params",
			b: /\(/,
			e: /\)/,
			c: ["self", b, d, c]
		},
		f = {
			e: /:/,
			i: /[${=;\n]/,
			c: [a.UTM, e]
		};
	return {
		aliases: ["py", "gyp"],
		k: {
			keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
			built_in: "Ellipsis NotImplemented"
		},
		i: /(<\/|->|\?)/,
		c: [b, d, c, a.HCM, a.inherit(f, {
			cN: "function",
			bK: "def",
			r: 10
		}), a.inherit(f, {
			cN: "class",
			bK: "class"
		}), {
			cN: "decorator",
			b: /@/,
			e: /$/
		}, {
			b: /\b(print|exec)\(/
		}]
	}
}), hljs.registerLanguage("bash", function(a) {
	var b = {
			cN: "variable",
			v: [{
				b: /\$[\w\d#@][\w\d_]*/
			}, {
				b: /\$\{(.*?)\}/
			}]
		},
		c = {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [a.BE, b, {
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [a.BE]
			}]
		},
		d = {
			cN: "string",
			b: /'/,
			e: /'/
		};
	return {
		aliases: ["sh", "zsh"],
		l: /-?[a-z\.]+/,
		k: {
			keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
			literal: "true false",
			built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
			operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
		},
		c: [{
				cN: "shebang",
				b: /^#![^\n]+sh\s*$/,
				r: 10
			}, {
				cN: "function",
				b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
				rB: !0,
				c: [a.inherit(a.TM, {
					b: /\w[\w\d_]*/
				})],
				r: 0
			},
			a.HCM, a.NM, c, d, b
		]
	}
}), hljs.registerLanguage("http", function() {
	return {
		i: "\\S",
		c: [{
			cN: "status",
			b: "^HTTP/[0-9\\.]+",
			e: "$",
			c: [{
				cN: "number",
				b: "\\b\\d{3}\\b"
			}]
		}, {
			cN: "request",
			b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
			rB: !0,
			e: "$",
			c: [{
				cN: "string",
				b: " ",
				e: " ",
				eB: !0,
				eE: !0
			}]
		}, {
			cN: "attribute",
			b: "^\\w",
			e: ": ",
			eE: !0,
			i: "\\n|\\s|=",
			starts: {
				cN: "string",
				e: "$"
			}
		}, {
			b: "\\n\\n",
			starts: {
				sL: "",
				eW: !0
			}
		}]
	}
}), hljs.registerLanguage("php", function(a) {
	var b = {
			cN: "variable",
			b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
		},
		c = {
			cN: "preprocessor",
			b: /<\?(php)?|\?>/
		},
		d = {
			cN: "string",
			c: [a.BE, c],
			v: [{
					b: 'b"',
					e: '"'
				}, {
					b: "b'",
					e: "'"
				},
				a.inherit(a.ASM, {
					i: null
				}), a.inherit(a.QSM, {
					i: null
				})
			]
		},
		e = {
			v: [a.BNM, a.CNM]
		};
	return {
		aliases: ["php3", "php4", "php5", "php6"],
		cI: !0,
		k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
		c: [a.CLCM, a.HCM, {
				cN: "comment",
				b: "/\\*",
				e: "\\*/",
				c: [{
						cN: "phpdoc",
						b: "\\s@[A-Za-z]+"
					},
					c
				]
			}, {
				cN: "comment",
				b: "__halt_compiler.+?;",
				eW: !0,
				k: "__halt_compiler",
				l: a.UIR
			}, {
				cN: "string",
				b: "<<<['\"]?\\w+['\"]?$",
				e: "^\\w+;",
				c: [a.BE]
			},
			c, b, {
				cN: "function",
				bK: "function",
				e: /[;{]/,
				eE: !0,
				i: "\\$|\\[|%",
				c: [a.UTM, {
					cN: "params",
					b: "\\(",
					e: "\\)",
					c: ["self", b, a.CBCM, d, e]
				}]
			}, {
				cN: "class",
				bK: "class interface",
				e: "{",
				eE: !0,
				i: /[:\(\$"]/,
				c: [{
						bK: "extends implements",
						r: 10
					},
					a.UTM
				]
			}, {
				bK: "namespace",
				e: ";",
				i: /[\.']/,
				c: [a.UTM]
			}, {
				bK: "use",
				e: ";",
				c: [a.UTM]
			}, {
				b: "=>"
			},
			d, e
		]
	}
}), hljs.registerLanguage("java", function(a) {
	var b = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
	return {
		aliases: ["jsp"],
		k: b,
		i: /<\//,
		c: [{
				cN: "javadoc",
				b: "/\\*\\*",
				e: "\\*/",
				c: [{
					cN: "javadoctag",
					b: "(^|\\s)@[A-Za-z]+"
				}],
				r: 10
			},
			a.CLCM, a.CBCM, a.ASM, a.QSM, {
				bK: "protected public private",
				e: /[{;=]/,
				k: b,
				c: [{
					cN: "class",
					bK: "class interface",
					eW: !0,
					eE: !0,
					i: /[:"<>]/,
					c: [{
							bK: "extends implements",
							r: 10
						},
						a.UTM
					]
				}, {
					b: a.UIR + "\\s*\\(",
					rB: !0,
					c: [a.UTM]
				}]
			},
			a.CNM, {
				cN: "annotation",
				b: "@[A-Za-z]+"
			}
		]
	}
}), hljs.registerLanguage("ruby", function(a) {
	var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
		c = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
		d = {
			cN: "yardoctag",
			b: "@[A-Za-z]+"
		},
		e = {
			cN: "comment",
			v: [{
				b: "#",
				e: "$",
				c: [d]
			}, {
				b: "^\\=begin",
				e: "^\\=end",
				c: [d],
				r: 10
			}, {
				b: "^__END__",
				e: "\\n$"
			}]
		},
		f = {
			cN: "subst",
			b: "#\\{",
			e: "}",
			k: c
		},
		g = {
			cN: "string",
			c: [a.BE, f],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}, {
				b: "%[qw]?\\(",
				e: "\\)"
			}, {
				b: "%[qw]?\\[",
				e: "\\]"
			}, {
				b: "%[qw]?{",
				e: "}"
			}, {
				b: "%[qw]?<",
				e: ">",
				r: 10
			}, {
				b: "%[qw]?/",
				e: "/",
				r: 10
			}, {
				b: "%[qw]?%",
				e: "%",
				r: 10
			}, {
				b: "%[qw]?-",
				e: "-",
				r: 10
			}, {
				b: "%[qw]?\\|",
				e: "\\|",
				r: 10
			}, {
				b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
			}]
		},
		h = {
			cN: "params",
			b: "\\(",
			e: "\\)",
			k: c
		},
		i = [g, e, {
			cN: "class",
			bK: "class module",
			e: "$|;",
			i: /=/,
			c: [a.inherit(a.TM, {
					b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
				}), {
					cN: "inheritance",
					b: "<\\s*",
					c: [{
						cN: "parent",
						b: "(" + a.IR + "::)?" + a.IR
					}]
				},
				e
			]
		}, {
			cN: "function",
			bK: "def",
			e: " |$|;",
			r: 0,
			c: [a.inherit(a.TM, {
				b: b
			}), h, e]
		}, {
			cN: "constant",
			b: "(::)?(\\b[A-Z]\\w*(::)?)+",
			r: 0
		}, {
			cN: "symbol",
			b: ":",
			c: [g, {
				b: b
			}],
			r: 0
		}, {
			cN: "symbol",
			b: a.UIR + "(\\!|\\?)?:",
			r: 0
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			cN: "variable",
			b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
		}, {
			b: "(" + a.RSR + ")\\s*",
			c: [e, {
				cN: "regexp",
				c: [a.BE, f],
				i: /\n/,
				v: [{
					b: "/",
					e: "/[a-z]*"
				}, {
					b: "%r{",
					e: "}[a-z]*"
				}, {
					b: "%r\\(",
					e: "\\)[a-z]*"
				}, {
					b: "%r!",
					e: "![a-z]*"
				}, {
					b: "%r\\[",
					e: "\\][a-z]*"
				}]
			}],
			r: 0
		}];
	return f.c = i, h.c = i, {
		aliases: ["rb", "gemspec", "podspec", "thor"],
		k: c,
		c: i
	}
});
var Hogan = {};
! function(a, b) {
	function c(a) {
		return String(null === a || void 0 === a ? "" : a)
	}

	function d(a) {
		return a = c(a), j.test(a) ? a.replace(e, "&amp;").replace(f, "&lt;").replace(g, "&gt;").replace(h, "&#39;").replace(i, "&quot;") : a
	}
	a.Template = function(a, c, d, e) {
		this.r = a || this.r, this.c = d, this.options = e, this.text = c || "", this.buf = b ? [] : ""
	}, a.Template.prototype = {
		r: function() {
			return ""
		},
		v: d,
		t: c,
		render: function(a, b, c) {
			return this.ri([a], b || {}, c)
		},
		ri: function(a, b, c) {
			return this.r(a, b, c)
		},
		rp: function(a, b, c, d) {
			var e = c[a];
			return e ? (this.c && "string" == typeof e && (e = this.c.compile(e, this.options)), e.ri(b, c, d)) : ""
		},
		rs: function(a, b, c) {
			var d = a[a.length - 1];
			if (!k(d)) return void c(a, b, this);
			for (var e = 0; e < d.length; e++) a.push(d[e]), c(a, b, this), a.pop()
		},
		s: function(a, b, c, d, e, f, g) {
			var h;
			return k(a) && 0 === a.length ? !1 : ("function" == typeof a && (a = this.ls(a, b, c, d, e, f, g)), h = "" === a || !!a, !d && h && b && b.push("object" == typeof a ? a : b[b.length - 1]), h)
		},
		d: function(a, b, c, d) {
			var e = a.split("."),
				f = this.f(e[0], b, c, d),
				g = null;
			if ("." === a && k(b[b.length - 2])) return b[b.length - 1];
			for (var h = 1; h < e.length; h++) f && "object" == typeof f && e[h] in f ? (g = f, f = f[e[h]]) : f = "";
			return d && !f ? !1 : (d || "function" != typeof f || (b.push(g), f = this.lv(f, b, c), b.pop()), f)
		},
		f: function(a, b, c, d) {
			for (var e = !1, f = null, g = !1, h = b.length - 1; h >= 0; h--)
				if (f = b[h], f && "object" == typeof f && a in f) {
					e = f[a], g = !0;
					break
				}
			return g ? (d || "function" != typeof e || (e = this.lv(e, b, c)), e) : d ? !1 : ""
		},
		ho: function(a, b, c, d, e) {
			var f = this.c,
				g = this.options;
			g.delimiters = e;
			var d = a.call(b, d);
			return d = null == d ? String(d) : d.toString(), this.b(f.compile(d, g).render(b, c)), !1
		},
		b: b ? function(a) {
			this.buf.push(a)
		} : function(a) {
			this.buf += a
		},
		fl: b ? function() {
			var a = this.buf.join("");
			return this.buf = [], a
		} : function() {
			var a = this.buf;
			return this.buf = "", a
		},
		ls: function(a, b, c, d, e, f, g) {
			var h = b[b.length - 1],
				i = null;
			if (!d && this.c && a.length > 0) return this.ho(a, h, c, this.text.substring(e, f), g);
			if (i = a.call(h), "function" == typeof i) {
				if (d) return !0;
				if (this.c) return this.ho(i, h, c, this.text.substring(e, f), g)
			}
			return i
		},
		lv: function(a, b, d) {
			var e = b[b.length - 1],
				f = a.call(e);
			return "function" == typeof f && (f = c(f.call(e)), this.c && ~f.indexOf("{{")) ? this.c.compile(f, this.options).render(e, d) : c(f)
		}
	};
	var e = /&/g,
		f = /</g,
		g = />/g,
		h = /\'/g,
		i = /\"/g,
		j = /[&<>\"\']/,
		k = Array.isArray || function(a) {
			return "[object Array]" === Object.prototype.toString.call(a)
		}
}("undefined" != typeof exports ? exports : Hogan),
function(a) {
	function b(a) {
		"}" === a.n.substr(a.n.length - 1) && (a.n = a.n.substring(0, a.n.length - 1))
	}

	function c(a) {
		return a.trim ? a.trim() : a.replace(/^\s*|\s*$/g, "")
	}

	function d(a, b, c) {
		if (b.charAt(c) != a.charAt(0)) return !1;
		for (var d = 1, e = a.length; e > d; d++)
			if (b.charAt(c + d) != a.charAt(d)) return !1;
		return !0
	}

	function e(a, b, c, d) {
		for (var h = [], i = null, j = null; a.length > 0;)
			if (j = a.shift(), "#" == j.tag || "^" == j.tag || f(j, d)) c.push(j), j.nodes = e(a, j.tag, c, d), h.push(j);
			else {
				if ("/" == j.tag) {
					if (0 === c.length) throw new Error("Closing tag without opener: /" + j.n);
					if (i = c.pop(), j.n != i.n && !g(j.n, i.n, d)) throw new Error("Nesting error: " + i.n + " vs. " + j.n);
					return i.end = j.i, h
				}
				h.push(j)
			}
		if (c.length > 0) throw new Error("missing closing tag: " + c.pop().n);
		return h
	}

	function f(a, b) {
		for (var c = 0, d = b.length; d > c; c++)
			if (b[c].o == a.n) return a.tag = "#", !0
	}

	function g(a, b, c) {
		for (var d = 0, e = c.length; e > d; d++)
			if (c[d].c == a && c[d].o == b) return !0
	}

	function h(a) {
		return a.replace(u, "\\\\").replace(r, '\\"').replace(s, "\\n").replace(t, "\\r")
	}

	function i(a) {
		return~ a.indexOf(".") ? "d" : "f"
	}

	function j(a) {
		for (var b = "", c = 0, d = a.length; d > c; c++) {
			var e = a[c].tag;
			"#" == e ? b += k(a[c].nodes, a[c].n, i(a[c].n), a[c].i, a[c].end, a[c].otag + " " + a[c].ctag) : "^" == e ? b += l(a[c].nodes, a[c].n, i(a[c].n)) : "<" == e || ">" == e ? b += m(a[c]) : "{" == e || "&" == e ? b += n(a[c].n, i(a[c].n)) : "\n" == e ? b += p('"\\n"' + (a.length - 1 == c ? "" : " + i")) : "_v" == e ? b += o(a[c].n, i(a[c].n)) : void 0 === e && (b += p('"' + h(a[c]) + '"'))
		}
		return b
	}

	function k(a, b, c, d, e, f) {
		return "if(_.s(_." + c + '("' + h(b) + '",c,p,1),c,p,0,' + d + "," + e + ',"' + f + '")){_.rs(c,p,function(c,p,_){' + j(a) + "});c.pop();}"
	}

	function l(a, b, c) {
		return "if(!_.s(_." + c + '("' + h(b) + '",c,p,1),c,p,1,0,0,"")){' + j(a) + "};"
	}

	function m(a) {
		return '_.b(_.rp("' + h(a.n) + '",c,p,"' + (a.indent || "") + '"));'
	}

	function n(a, b) {
		return "_.b(_.t(_." + b + '("' + h(a) + '",c,p,0)));'
	}

	function o(a, b) {
		return "_.b(_.v(_." + b + '("' + h(a) + '",c,p,0)));'
	}

	function p(a) {
		return "_.b(" + a + ");"
	}
	var q = /\S/,
		r = /\"/g,
		s = /\n/g,
		t = /\r/g,
		u = /\\/g,
		v = {
			"#": 1,
			"^": 2,
			"/": 3,
			"!": 4,
			">": 5,
			"<": 6,
			"=": 7,
			_v: 8,
			"{": 9,
			"&": 10
		};
	a.scan = function(a, e) {
		function f() {
			r.length > 0 && (s.push(new String(r)), r = "")
		}

		function g() {
			for (var a = !0, b = w; b < s.length; b++)
				if (a = s[b].tag && v[s[b].tag] < v._v || !s[b].tag && null === s[b].match(q), !a) return !1;
			return a
		}

		function h(a, b) {
			if (f(), a && g())
				for (var c, d = w; d < s.length; d++) s[d].tag || ((c = s[d + 1]) && ">" == c.tag && (c.indent = s[d].toString()), s.splice(d, 1));
			else b || s.push({
				tag: "\n"
			});
			t = !1, w = s.length
		}

		function i(a, b) {
			var d = "=" + y,
				e = a.indexOf(d, b),
				f = c(a.substring(a.indexOf("=", b) + 1, e)).split(" ");
			return x = f[0], y = f[1], e + d.length - 1
		}
		var j = a.length,
			k = 0,
			l = 1,
			m = 2,
			n = k,
			o = null,
			p = null,
			r = "",
			s = [],
			t = !1,
			u = 0,
			w = 0,
			x = "{{",
			y = "}}";
		for (e && (e = e.split(" "), x = e[0], y = e[1]), u = 0; j > u; u++) n == k ? d(x, a, u) ? (--u, f(), n = l) : "\n" == a.charAt(u) ? h(t) : r += a.charAt(u) : n == l ? (u += x.length - 1, p = v[a.charAt(u + 1)], o = p ? a.charAt(u + 1) : "_v", "=" == o ? (u = i(a, u), n = k) : (p && u++, n = m), t = u) : d(y, a, u) ? (s.push({
			tag: o,
			n: c(r),
			otag: x,
			ctag: y,
			i: "/" == o ? t - y.length : u + x.length
		}), r = "", u += y.length - 1, n = k, "{" == o && ("}}" == y ? u++ : b(s[s.length - 1]))) : r += a.charAt(u);
		return h(t, !0), s
	}, a.generate = function(b, c, d) {
		var e = 'var _=this;_.b(i=i||"");' + j(b) + "return _.fl();";
		return d.asString ? "function(c,p,i){" + e + ";}" : new a.Template(new Function("c", "p", "i", e), c, a, d)
	}, a.parse = function(a, b, c) {
		return c = c || {}, e(a, "", [], c.sectionTags || [])
	}, a.cache = {}, a.compile = function(a, b) {
		b = b || {};
		var c = a + "||" + !!b.asString,
			d = this.cache[c];
		return d ? d : (d = this.generate(this.parse(this.scan(a, b.delimiters), a, b), a, b), this.cache[c] = d)
	}
}("undefined" != typeof exports ? exports : Hogan),
function(a) {
	var b = function(a, b) {
			for (var c = b.split("."), d = a, e = 0; e < c.length; e++) d = d[c[e]];
			return d
		},
		c = function(a, b, c) {
			for (var d = b.split("."), e = a, f = 0; f < d.length; f++) f + 1 >= d.length ? e[d[f]] = c : (null == e[d[f]] && (e[d[f]] = {}), e = e[d[f]])
		},
		d = function(a, c, e) {
			for (var f in a) {
				var g = c ? c + "." + f : f,
					h = typeof a[f];
				"object" === h && null !== a[f] ? a[f] instanceof Date ? e[g] = k(b(a, f)) : e = d(a[f], g, e) : "function" === h || (null == e && (e = {}), e[g] = b(a, f))
			}
			return e
		},
		e = function(a) {
			var b = a.attr("type");
			return null == b && (b = a[0].tagName.toLowerCase()), b
		},
		f = function() {
			var b = e(a(this)),
				d = a(this).data("bindData.data").bean,
				f = a(this).data("bindData.data").transforms,
				i = a(this).attr("name"),
				j = null;
			switch (b) {
				case "checkbox":
					j = a(this).is(":checked");
					break;
				default:
					j = a(this).val()
			}
			j = h("get", j, g(i, f)), c(d, i, j), console.log(i + " changed: " + j)
		},
		g = function(b, c) {
			var d = [];
			return a.each(c, function(a, c) {
				c.name.test(b) && d.push(c.getset)
			}), d
		},
		h = function(b, c, d) {
			var e = c;
			return a.each(d, function(a, c) {
				e = c(b, e)
			}), e
		},
		i = function(a, b, c) {
			for (var d in b) {
				var e = g(d, c),
					f = h("set", b[d], e);
				m(a, d, f)
			}
		},
		j = function(a) {
			var b = a.substring(a.length - 1, a.length);
			return "Z" == b || "z" == b ? a.substring(0, a.length - 1) : a
		},
		k = function(a) {
			return "object" == typeof a && a instanceof Date && (a = a.toJSON()), a
		},
		l = function(b, d, f) {
			var i = function(b, i) {
				var j = a(i).attr("name"),
					k = e(a(i)),
					l = null;
				switch (k) {
					case "hidden":
					case "text":
					case "select":
						l = a(i).val();
						break;
					case "radio":
						if (!a(i).is(":checked")) return;
						l = a(i).val();
						break;
					case "checkbox":
						l = a(i).is(":checked");
						break;
					case "textarea":
						l = a(i).val();
						break;
					default:
						l = a(i).val()
				}
				l = h("get", l, g(j, f)), j && c(d, j, l)
			};
			b.find("input").each(i), b.find("select").each(i), b.find("textarea").each(i)
		},
		m = function(a, b, c) {
			var d = a.find('[name="' + b + '"]'),
				f = e(d);
			switch (f) {
				case "hidden":
				case "text":
				case "select":
					d.val(c);
					break;
				case "radio":
					d.filter('[value="' + c + '"]').prop("checked", !0);
					break;
				case "checkbox":
					!0 === c ? d.prop("checked", !0) : d.prop("checked", !1);
					break;
				case "textarea":
					d.val(c);
					break;
				case "date":
					var g = c.indexOf("T");
					g >= 0 && (c = c.substring(0, g)), c = j(c), d.val(c);
					break;
				case "time":
					var g = c.indexOf("T");
					g >= 0 && (c = c.substring(g + 1)), c = j(c), d.val(c);
					break;
				case "datetime-local":
					c = j(c), d.val(c);
					break;
				default:
					d.val(c)
			}
		};
	a.fn.binddata = function(b, c) {
		if (null == b) return this;
		var e = {
			bindAll: !0,
			onlyGetOrSet: "",
			transforms: []
		};
		a.extend(e, c);
		var g = d(b);
		switch (e.onlyGetOrSet) {
			case "set":
				return i(this, g, e.transforms), this;
			case "get":
				return l(this, b, e.transforms), this
		}
		var h = {
			bean: b,
			transforms: e.transforms
		};
		if (e.bindAll === !1) {
			for (var j in g) {
				var k = this.find('[name="' + j + '"]');
				k.data("bindData.data", h), k.on("change", f)
			}
			i(this, g, h.transforms)
		} else {
			var m = function(b, c) {
				{
					var d = a(c);
					d.attr("name")
				}
				d.data("bindData.data", h), d.on("change", f)
			};
			this.find("input").each(m), this.find("select").each(m), this.find("textarea").each(m), i(this, g, h.transforms)
		}
		return this
	}
}(jQuery), ! function(a) {
	"object" == typeof exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : "undefined" != typeof window ? window.JSZip = a() : "undefined" != typeof global ? global.JSZip = a() : "undefined" != typeof self && (self.JSZip = a())
}(function() {
	return function a(b, c, d) {
		function e(g, h) {
			if (!c[g]) {
				if (!b[g]) {
					var i = "function" == typeof require && require;
					if (!h && i) return i(g, !0);
					if (f) return f(g, !0);
					throw new Error("Cannot find module '" + g + "'")
				}
				var j = c[g] = {
					exports: {}
				};
				b[g][0].call(j.exports, function(a) {
					var c = b[g][1][a];
					return e(c ? c : a)
				}, j, j.exports, a, b, c, d)
			}
			return c[g].exports
		}
		for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
		return e
	}({
		1: [
			function(a, b, c) {
				"use strict";
				var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				c.encode = function(a) {
					for (var b, c, e, f, g, h, i, j = "", k = 0; k < a.length;) b = a.charCodeAt(k++), c = a.charCodeAt(k++), e = a.charCodeAt(k++), f = b >> 2, g = (3 & b) << 4 | c >> 4, h = (15 & c) << 2 | e >> 6, i = 63 & e, isNaN(c) ? h = i = 64 : isNaN(e) && (i = 64), j = j + d.charAt(f) + d.charAt(g) + d.charAt(h) + d.charAt(i);
					return j
				}, c.decode = function(a) {
					var b, c, e, f, g, h, i, j = "",
						k = 0;
					for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;) f = d.indexOf(a.charAt(k++)), g = d.indexOf(a.charAt(k++)), h = d.indexOf(a.charAt(k++)), i = d.indexOf(a.charAt(k++)), b = f << 2 | g >> 4, c = (15 & g) << 4 | h >> 2, e = (3 & h) << 6 | i, j += String.fromCharCode(b), 64 != h && (j += String.fromCharCode(c)), 64 != i && (j += String.fromCharCode(e));
					return j
				}
			}, {}
		],
		2: [
			function(a, b) {
				"use strict";

				function c() {
					this.compressedSize = 0, this.uncompressedSize = 0, this.crc32 = 0, this.compressionMethod = null, this.compressedContent = null
				}
				c.prototype = {
					getContent: function() {
						return null
					},
					getCompressedContent: function() {
						return null
					}
				}, b.exports = c
			}, {}
		],
		3: [
			function(a, b, c) {
				"use strict";
				c.STORE = {
					magic: "\x00\x00",
					compress: function(a) {
						return a
					},
					uncompress: function(a) {
						return a
					},
					compressInputType: null,
					uncompressInputType: null
				}, c.DEFLATE = a("./flate")
			}, {
				"./flate": 6
			}
		],
		4: [
			function(a, b) {
				"use strict";

				function c() {
					this.data = null, this.length = 0, this.index = 0
				}
				var d = a("./utils");
				c.prototype = {
					checkOffset: function(a) {
						this.checkIndex(this.index + a)
					},
					checkIndex: function(a) {
						if (this.length < a || 0 > a) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?")
					},
					setIndex: function(a) {
						this.checkIndex(a), this.index = a
					},
					skip: function(a) {
						this.setIndex(this.index + a)
					},
					byteAt: function() {},
					readInt: function(a) {
						var b, c = 0;
						for (this.checkOffset(a), b = this.index + a - 1; b >= this.index; b--) c = (c << 8) + this.byteAt(b);
						return this.index += a, c
					},
					readString: function(a) {
						return d.transformTo("string", this.readData(a))
					},
					readData: function() {},
					lastIndexOfSignature: function() {},
					readDate: function() {
						var a = this.readInt(4);
						return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1)
					}
				}, b.exports = c
			}, {
				"./utils": 14
			}
		],
		5: [
			function(a, b, c) {
				"use strict";
				c.base64 = !1, c.binary = !1, c.dir = !1, c.date = null, c.compression = null
			}, {}
		],
		6: [
			function(a, b, c) {
				"use strict";
				var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
					e = a("pako");
				c.uncompressInputType = d ? "uint8array" : "array", c.compressInputType = d ? "uint8array" : "array", c.magic = "\b\x00", c.compress = function(a) {
					return e.deflateRaw(a)
				}, c.uncompress = function(a) {
					return e.inflateRaw(a)
				}
			}, {
				pako: 19
			}
		],
		7: [
			function(a, b) {
				"use strict";

				function c(a, b) {
					return this instanceof c ? (this.files = {}, this.root = "", a && this.load(a, b), void(this.clone = function() {
						var a = new c;
						for (var b in this) "function" != typeof this[b] && (a[b] = this[b]);
						return a
					})) : new c(a, b)
				}
				c.prototype = a("./object"), c.prototype.load = a("./load"), c.support = a("./support"), c.defaults = a("./defaults"), c.utils = a("./utils"), c.base64 = a("./base64"), c.compressions = a("./compressions"), b.exports = c
			}, {
				"./base64": 1,
				"./compressions": 3,
				"./defaults": 5,
				"./load": 8,
				"./object": 9,
				"./support": 12,
				"./utils": 14
			}
		],
		8: [
			function(a, b) {
				"use strict";
				var c = a("./base64"),
					d = a("./zipEntries");
				b.exports = function(a, b) {
					var e, f, g, h;
					for (b = b || {}, b.base64 && (a = c.decode(a)), f = new d(a, b), e = f.files, g = 0; g < e.length; g++) h = e[g], this.file(h.fileName, h.decompressed, {
						binary: !0,
						optimizedBinaryString: !0,
						date: h.date,
						dir: h.dir
					});
					return this
				}
			}, {
				"./base64": 1,
				"./zipEntries": 15
			}
		],
		9: [
			function(a, b) {
				"use strict";
				var c, d, e = a("./support"),
					f = a("./utils"),
					g = a("./signature"),
					h = a("./defaults"),
					i = a("./base64"),
					j = a("./compressions"),
					k = a("./compressedObject"),
					l = a("./nodeBuffer");
				e.uint8array && "function" == typeof TextEncoder && "function" == typeof TextDecoder && (c = new TextEncoder("utf-8"), d = new TextDecoder("utf-8"));
				var m = function(a) {
						if (a._data instanceof k && (a._data = a._data.getContent(), a.options.binary = !0, a.options.base64 = !1, "uint8array" === f.getTypeOf(a._data))) {
							var b = a._data;
							a._data = new Uint8Array(b.length), 0 !== b.length && a._data.set(b, 0)
						}
						return a._data
					},
					n = function(a) {
						var b = m(a),
							d = f.getTypeOf(b);
						if ("string" === d) {
							if (!a.options.binary) {
								if (c) return c.encode(b);
								if (e.nodebuffer) return l(b, "utf-8")
							}
							return a.asBinary()
						}
						return b
					},
					o = function(a) {
						var b = m(this);
						return null === b || "undefined" == typeof b ? "" : (this.options.base64 && (b = i.decode(b)), b = a && this.options.binary ? A.utf8decode(b) : f.transformTo("string", b), a || this.options.binary || (b = A.utf8encode(b)), b)
					},
					p = function(a, b, c) {
						this.name = a, this._data = b, this.options = c
					};
				p.prototype = {
					asText: function() {
						return o.call(this, !0)
					},
					asBinary: function() {
						return o.call(this, !1)
					},
					asNodeBuffer: function() {
						var a = n(this);
						return f.transformTo("nodebuffer", a)
					},
					asUint8Array: function() {
						var a = n(this);
						return f.transformTo("uint8array", a)
					},
					asArrayBuffer: function() {
						return this.asUint8Array().buffer
					}
				};
				var q = function(a, b) {
						var c, d = "";
						for (c = 0; b > c; c++) d += String.fromCharCode(255 & a), a >>>= 8;
						return d
					},
					r = function() {
						var a, b, c = {};
						for (a = 0; a < arguments.length; a++)
							for (b in arguments[a]) arguments[a].hasOwnProperty(b) && "undefined" == typeof c[b] && (c[b] = arguments[a][b]);
						return c
					},
					s = function(a) {
						return a = a || {}, a.base64 !== !0 || null !== a.binary && void 0 !== a.binary || (a.binary = !0), a = r(a, h), a.date = a.date || new Date, null !== a.compression && (a.compression = a.compression.toUpperCase()), a
					},
					t = function(a, b, c) {
						var d = u(a),
							e = f.getTypeOf(b);
						if (d && v.call(this, d), c = s(c), c.dir || null === b || "undefined" == typeof b) c.base64 = !1, c.binary = !1, b = null;
						else if ("string" === e) c.binary && !c.base64 && c.optimizedBinaryString !== !0 && (b = f.string2binary(b));
						else {
							if (c.base64 = !1, c.binary = !0, !(e || b instanceof k)) throw new Error("The data of '" + a + "' is in an unsupported format !");
							"arraybuffer" === e && (b = f.transformTo("uint8array", b))
						}
						var g = new p(a, b, c);
						return this.files[a] = g, g
					},
					u = function(a) {
						"/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
						var b = a.lastIndexOf("/");
						return b > 0 ? a.substring(0, b) : ""
					},
					v = function(a) {
						return "/" != a.slice(-1) && (a += "/"), this.files[a] || t.call(this, a, null, {
							dir: !0
						}), this.files[a]
					},
					w = function(a, b) {
						var c, d = new k;
						return a._data instanceof k ? (d.uncompressedSize = a._data.uncompressedSize, d.crc32 = a._data.crc32, 0 === d.uncompressedSize || a.options.dir ? (b = j.STORE, d.compressedContent = "", d.crc32 = 0) : a._data.compressionMethod === b.magic ? d.compressedContent = a._data.getCompressedContent() : (c = a._data.getContent(), d.compressedContent = b.compress(f.transformTo(b.compressInputType, c)))) : (c = n(a), (!c || 0 === c.length || a.options.dir) && (b = j.STORE, c = ""), d.uncompressedSize = c.length, d.crc32 = this.crc32(c), d.compressedContent = b.compress(f.transformTo(b.compressInputType, c))), d.compressedSize = d.compressedContent.length, d.compressionMethod = b.magic, d
					},
					x = function(a, b, c, d) {
						var e, f, h = (c.compressedContent, this.utf8encode(b.name)),
							i = h !== b.name,
							j = b.options,
							k = "",
							l = "";
						e = j.date.getHours(), e <<= 6, e |= j.date.getMinutes(), e <<= 5, e |= j.date.getSeconds() / 2, f = j.date.getFullYear() - 1980, f <<= 4, f |= j.date.getMonth() + 1, f <<= 5, f |= j.date.getDate(), i && (l = q(1, 1) + q(this.crc32(h), 4) + h, k += "up" + q(l.length, 2) + l);
						var m = "";
						m += "\n\x00", m += i ? "\x00\b" : "\x00\x00", m += c.compressionMethod, m += q(e, 2), m += q(f, 2), m += q(c.crc32, 4), m += q(c.compressedSize, 4), m += q(c.uncompressedSize, 4), m += q(h.length, 2), m += q(k.length, 2);
						var n = g.LOCAL_FILE_HEADER + m + h + k,
							o = g.CENTRAL_FILE_HEADER + "\x00" + m + "\x00\x00\x00\x00\x00\x00" + (b.options.dir === !0 ? "\x00\x00\x00" : "\x00\x00\x00\x00") + q(d, 4) + h + k;
						return {
							fileRecord: n,
							dirRecord: o,
							compressedObject: c
						}
					},
					y = function() {
						this.data = []
					};
				y.prototype = {
					append: function(a) {
						a = f.transformTo("string", a), this.data.push(a)
					},
					finalize: function() {
						return this.data.join("")
					}
				};
				var z = function(a) {
					this.data = new Uint8Array(a), this.index = 0
				};
				z.prototype = {
					append: function(a) {
						0 !== a.length && (a = f.transformTo("uint8array", a), this.data.set(a, this.index), this.index += a.length)
					},
					finalize: function() {
						return this.data
					}
				};
				var A = {
					load: function() {
						throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
					},
					filter: function(a) {
						var b, c, d, e, f = [];
						for (b in this.files) this.files.hasOwnProperty(b) && (d = this.files[b], e = new p(d.name, d._data, r(d.options)), c = b.slice(this.root.length, b.length), b.slice(0, this.root.length) === this.root && a(c, e) && f.push(e));
						return f
					},
					file: function(a, b, c) {
						if (1 === arguments.length) {
							if (f.isRegExp(a)) {
								var d = a;
								return this.filter(function(a, b) {
									return !b.options.dir && d.test(a)
								})
							}
							return this.filter(function(b, c) {
								return !c.options.dir && b === a
							})[0] || null
						}
						return a = this.root + a, t.call(this, a, b, c), this
					},
					folder: function(a) {
						if (!a) return this;
						if (f.isRegExp(a)) return this.filter(function(b, c) {
							return c.options.dir && a.test(b)
						});
						var b = this.root + a,
							c = v.call(this, b),
							d = this.clone();
						return d.root = c.name, d
					},
					remove: function(a) {
						a = this.root + a;
						var b = this.files[a];
						if (b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]), b)
							if (b.options.dir)
								for (var c = this.filter(function(b, c) {
									return c.name.slice(0, a.length) === a
								}), d = 0; d < c.length; d++) delete this.files[c[d].name];
							else delete this.files[a];
						return this
					},
					generate: function(a) {
						a = r(a || {}, {
							base64: !0,
							compression: "STORE",
							type: "base64"
						}), f.checkSupport(a.type);
						var b, c, d = [],
							e = 0,
							h = 0;
						for (var k in this.files)
							if (this.files.hasOwnProperty(k)) {
								var l = this.files[k],
									m = l.options.compression || a.compression.toUpperCase(),
									n = j[m];
								if (!n) throw new Error(m + " is not a valid compression method !");
								var o = w.call(this, l, n),
									p = x.call(this, k, l, o, e);
								e += p.fileRecord.length + o.compressedSize, h += p.dirRecord.length, d.push(p)
							}
						var s = "";
						s = g.CENTRAL_DIRECTORY_END + "\x00\x00\x00\x00" + q(d.length, 2) + q(d.length, 2) + q(h, 4) + q(e, 4) + "\x00\x00";
						var t = a.type.toLowerCase();
						for (b = "uint8array" === t || "arraybuffer" === t || "blob" === t || "nodebuffer" === t ? new z(e + h + s.length) : new y(e + h + s.length), c = 0; c < d.length; c++) b.append(d[c].fileRecord), b.append(d[c].compressedObject.compressedContent);
						for (c = 0; c < d.length; c++) b.append(d[c].dirRecord);
						b.append(s);
						var u = b.finalize();
						switch (a.type.toLowerCase()) {
							case "uint8array":
							case "arraybuffer":
							case "nodebuffer":
								return f.transformTo(a.type.toLowerCase(), u);
							case "blob":
								return f.arrayBuffer2Blob(f.transformTo("arraybuffer", u));
							case "base64":
								return a.base64 ? i.encode(u) : u;
							default:
								return u
						}
					},
					crc32: function(a, b) {
						if ("undefined" == typeof a || !a.length) return 0;
						var c = "string" !== f.getTypeOf(a),
							d = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
						"undefined" == typeof b && (b = 0);
						var e = 0,
							g = 0,
							h = 0;
						b = -1 ^ b;
						for (var i = 0, j = a.length; j > i; i++) h = c ? a[i] : a.charCodeAt(i), g = 255 & (b ^ h), e = d[g], b = b >>> 8 ^ e;
						return -1 ^ b
					},
					utf8encode: function(a) {
						if (c) {
							var b = c.encode(a);
							return f.transformTo("string", b)
						}
						if (e.nodebuffer) return f.transformTo("string", l(a, "utf-8"));
						for (var d = [], g = 0, h = 0; h < a.length; h++) {
							var i = a.charCodeAt(h);
							128 > i ? d[g++] = String.fromCharCode(i) : i > 127 && 2048 > i ? (d[g++] = String.fromCharCode(i >> 6 | 192), d[g++] = String.fromCharCode(63 & i | 128)) : (d[g++] = String.fromCharCode(i >> 12 | 224), d[g++] = String.fromCharCode(i >> 6 & 63 | 128), d[g++] = String.fromCharCode(63 & i | 128))
						}
						return d.join("")
					},
					utf8decode: function(a) {
						var b = [],
							c = 0,
							g = f.getTypeOf(a),
							h = "string" !== g,
							i = 0,
							j = 0,
							k = 0,
							l = 0;
						if (d) return d.decode(f.transformTo("uint8array", a));
						if (e.nodebuffer) return f.transformTo("nodebuffer", a).toString("utf-8");
						for (; i < a.length;) j = h ? a[i] : a.charCodeAt(i), 128 > j ? (b[c++] = String.fromCharCode(j), i++) : j > 191 && 224 > j ? (k = h ? a[i + 1] : a.charCodeAt(i + 1), b[c++] = String.fromCharCode((31 & j) << 6 | 63 & k), i += 2) : (k = h ? a[i + 1] : a.charCodeAt(i + 1), l = h ? a[i + 2] : a.charCodeAt(i + 2), b[c++] = String.fromCharCode((15 & j) << 12 | (63 & k) << 6 | 63 & l), i += 3);
						return b.join("")
					}
				};
				b.exports = A
			}, {
				"./base64": 1,
				"./compressedObject": 2,
				"./compressions": 3,
				"./defaults": 5,
				"./nodeBuffer": 17,
				"./signature": 10,
				"./support": 12,
				"./utils": 14
			}
		],
		10: [
			function(a, b, c) {
				"use strict";
				c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\b"
			}, {}
		],
		11: [
			function(a, b) {
				"use strict";

				function c(a, b) {
					this.data = a, b || (this.data = e.string2binary(this.data)), this.length = this.data.length, this.index = 0
				}
				var d = a("./dataReader"),
					e = a("./utils");
				c.prototype = new d, c.prototype.byteAt = function(a) {
					return this.data.charCodeAt(a)
				}, c.prototype.lastIndexOfSignature = function(a) {
					return this.data.lastIndexOf(a)
				}, c.prototype.readData = function(a) {
					this.checkOffset(a);
					var b = this.data.slice(this.index, this.index + a);
					return this.index += a, b
				}, b.exports = c
			}, {
				"./dataReader": 4,
				"./utils": 14
			}
		],
		12: [
			function(a, b, c) {
				var d = a("__browserify_process");
				if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, c.nodebuffer = !d.browser, c.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) c.blob = !1;
				else {
					var e = new ArrayBuffer(0);
					try {
						c.blob = 0 === new Blob([e], {
							type: "application/zip"
						}).size
					} catch (f) {
						try {
							var g = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
								h = new g;
							h.append(e), c.blob = 0 === h.getBlob("application/zip").size
						} catch (f) {
							c.blob = !1
						}
					}
				}
			}, {
				__browserify_process: 18
			}
		],
		13: [
			function(a, b) {
				"use strict";

				function c(a) {
					a && (this.data = a, this.length = this.data.length, this.index = 0)
				}
				var d = a("./dataReader");
				c.prototype = new d, c.prototype.byteAt = function(a) {
					return this.data[a]
				}, c.prototype.lastIndexOfSignature = function(a) {
					for (var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = this.length - 4; f >= 0; --f)
						if (this.data[f] === b && this.data[f + 1] === c && this.data[f + 2] === d && this.data[f + 3] === e) return f;
					return -1
				}, c.prototype.readData = function(a) {
					this.checkOffset(a);
					var b = this.data.subarray(this.index, this.index + a);
					return this.index += a, b
				}, b.exports = c
			}, {
				"./dataReader": 4
			}
		],
		14: [
			function(a, b, c) {
				"use strict";

				function d(a) {
					return a
				}

				function e(a, b) {
					for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
					return b
				}

				function f(a) {
					var b = 65536,
						d = [],
						e = a.length,
						f = c.getTypeOf(a),
						g = 0,
						h = !0;
					try {
						switch (f) {
							case "uint8array":
								String.fromCharCode.apply(null, new Uint8Array(0));
								break;
							case "nodebuffer":
								String.fromCharCode.apply(null, j(0))
						}
					} catch (i) {
						h = !1
					}
					if (!h) {
						for (var k = "", l = 0; l < a.length; l++) k += String.fromCharCode(a[l]);
						return k
					}
					for (; e > g && b > 1;) try {
						d.push("array" === f || "nodebuffer" === f ? String.fromCharCode.apply(null, a.slice(g, Math.min(g + b, e))) : String.fromCharCode.apply(null, a.subarray(g, Math.min(g + b, e)))), g += b
					} catch (i) {
						b = Math.floor(b / 2)
					}
					return d.join("")
				}

				function g(a, b) {
					for (var c = 0; c < a.length; c++) b[c] = a[c];
					return b
				}
				var h = a("./support"),
					i = a("./compressions"),
					j = a("./nodeBuffer");
				c.string2binary = function(a) {
					for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(255 & a.charCodeAt(c));
					return b
				}, c.string2Uint8Array = function(a) {
					return c.transformTo("uint8array", a)
				}, c.uint8Array2String = function(a) {
					return c.transformTo("string", a)
				}, c.string2Blob = function(a) {
					var b = c.transformTo("arraybuffer", a);
					return c.arrayBuffer2Blob(b)
				}, c.arrayBuffer2Blob = function(a) {
					c.checkSupport("blob");
					try {
						return new Blob([a], {
							type: "application/zip"
						})
					} catch (b) {
						try {
							var d = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
								e = new d;
							return e.append(a), e.getBlob("application/zip")
						} catch (b) {
							throw new Error("Bug : can't construct the Blob.")
						}
					}
				};
				var k = {};
				k.string = {
					string: d,
					array: function(a) {
						return e(a, new Array(a.length))
					},
					arraybuffer: function(a) {
						return k.string.uint8array(a).buffer
					},
					uint8array: function(a) {
						return e(a, new Uint8Array(a.length))
					},
					nodebuffer: function(a) {
						return e(a, j(a.length))
					}
				}, k.array = {
					string: f,
					array: d,
					arraybuffer: function(a) {
						return new Uint8Array(a).buffer
					},
					uint8array: function(a) {
						return new Uint8Array(a)
					},
					nodebuffer: function(a) {
						return j(a)
					}
				}, k.arraybuffer = {
					string: function(a) {
						return f(new Uint8Array(a))
					},
					array: function(a) {
						return g(new Uint8Array(a), new Array(a.byteLength))
					},
					arraybuffer: d,
					uint8array: function(a) {
						return new Uint8Array(a)
					},
					nodebuffer: function(a) {
						return j(new Uint8Array(a))
					}
				}, k.uint8array = {
					string: f,
					array: function(a) {
						return g(a, new Array(a.length))
					},
					arraybuffer: function(a) {
						return a.buffer
					},
					uint8array: d,
					nodebuffer: function(a) {
						return j(a)
					}
				}, k.nodebuffer = {
					string: f,
					array: function(a) {
						return g(a, new Array(a.length))
					},
					arraybuffer: function(a) {
						return k.nodebuffer.uint8array(a).buffer
					},
					uint8array: function(a) {
						return g(a, new Uint8Array(a.length))
					},
					nodebuffer: d
				}, c.transformTo = function(a, b) {
					if (b || (b = ""), !a) return b;
					c.checkSupport(a);
					var d = c.getTypeOf(b),
						e = k[d][a](b);
					return e
				}, c.getTypeOf = function(a) {
					return "string" == typeof a ? "string" : "[object Array]" === Object.prototype.toString.call(a) ? "array" : h.nodebuffer && j.test(a) ? "nodebuffer" : h.uint8array && a instanceof Uint8Array ? "uint8array" : h.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0
				}, c.checkSupport = function(a) {
					var b = h[a.toLowerCase()];
					if (!b) throw new Error(a + " is not supported by this browser")
				}, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(a) {
					var b, c, d = "";
					for (c = 0; c < (a || "").length; c++) b = a.charCodeAt(c), d += "\\x" + (16 > b ? "0" : "") + b.toString(16).toUpperCase();
					return d
				}, c.findCompression = function(a) {
					for (var b in i)
						if (i.hasOwnProperty(b) && i[b].magic === a) return i[b];
					return null
				}, c.isRegExp = function(a) {
					return "[object RegExp]" === Object.prototype.toString.call(a)
				}
			}, {
				"./compressions": 3,
				"./nodeBuffer": 17,
				"./support": 12
			}
		],
		15: [
			function(a, b) {
				"use strict";

				function c(a, b) {
					this.files = [], this.loadOptions = b, a && this.load(a)
				}
				var d = a("./stringReader"),
					e = a("./nodeBufferReader"),
					f = a("./uint8ArrayReader"),
					g = a("./utils"),
					h = a("./signature"),
					i = a("./zipEntry"),
					j = a("./support");
				c.prototype = {
					checkSignature: function(a) {
						var b = this.reader.readString(4);
						if (b !== a) throw new Error("Corrupted zip or bug : unexpected signature (" + g.pretty(b) + ", expected " + g.pretty(a) + ")")
					},
					readBlockEndOfCentral: function() {
						this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2), this.zipComment = this.reader.readString(this.zipCommentLength)
					},
					readBlockZip64EndOfCentral: function() {
						this.zip64EndOfCentralSize = this.reader.readInt(8), this.versionMadeBy = this.reader.readString(2), this.versionNeeded = this.reader.readInt(2), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
						for (var a, b, c, d = this.zip64EndOfCentralSize - 44, e = 0; d > e;) a = this.reader.readInt(2), b = this.reader.readInt(4), c = this.reader.readString(b), this.zip64ExtensibleData[a] = {
							id: a,
							length: b,
							value: c
						}
					},
					readBlockZip64EndOfCentralLocator: function() {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported")
					},
					readLocalFiles: function() {
						var a, b;
						for (a = 0; a < this.files.length; a++) b = this.files[a], this.reader.setIndex(b.localHeaderOffset), this.checkSignature(h.LOCAL_FILE_HEADER), b.readLocalPart(this.reader), b.handleUTF8()
					},
					readCentralDir: function() {
						var a;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === h.CENTRAL_FILE_HEADER;) a = new i({
							zip64: this.zip64
						}, this.loadOptions), a.readCentralPart(this.reader), this.files.push(a)
					},
					readEndOfCentral: function() {
						var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
						if (-1 === a) throw new Error("Corrupted zip : can't find end of central directory");
						if (this.reader.setIndex(a), this.checkSignature(h.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === g.MAX_VALUE_16BITS || this.diskWithCentralDirStart === g.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === g.MAX_VALUE_16BITS || this.centralDirRecords === g.MAX_VALUE_16BITS || this.centralDirSize === g.MAX_VALUE_32BITS || this.centralDirOffset === g.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, a = this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR), -1 === a) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
							this.reader.setIndex(a), this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
						}
					},
					prepareReader: function(a) {
						var b = g.getTypeOf(a);
						this.reader = "string" !== b || j.uint8array ? "nodebuffer" === b ? new e(a) : new f(g.transformTo("uint8array", a)) : new d(a, this.loadOptions.optimizedBinaryString)
					},
					load: function(a) {
						this.prepareReader(a), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
					}
				}, b.exports = c
			}, {
				"./nodeBufferReader": 17,
				"./signature": 10,
				"./stringReader": 11,
				"./support": 12,
				"./uint8ArrayReader": 13,
				"./utils": 14,
				"./zipEntry": 16
			}
		],
		16: [
			function(a, b) {
				"use strict";

				function c(a, b) {
					this.options = a, this.loadOptions = b
				}
				var d = a("./stringReader"),
					e = a("./utils"),
					f = a("./compressedObject"),
					g = a("./object");
				c.prototype = {
					isEncrypted: function() {
						return 1 === (1 & this.bitFlag)
					},
					useUTF8: function() {
						return 2048 === (2048 & this.bitFlag)
					},
					prepareCompressedContent: function(a, b, c) {
						return function() {
							var d = a.index;
							a.setIndex(b);
							var e = a.readData(c);
							return a.setIndex(d), e
						}
					},
					prepareContent: function(a, b, c, d, f) {
						return function() {
							var a = e.transformTo(d.uncompressInputType, this.getCompressedContent()),
								b = d.uncompress(a);
							if (b.length !== f) throw new Error("Bug : uncompressed data size mismatch");
							return b
						}
					},
					readLocalPart: function(a) {
						var b, c;
						if (a.skip(22), this.fileNameLength = a.readInt(2), c = a.readInt(2), this.fileName = a.readString(this.fileNameLength), a.skip(c), -1 == this.compressedSize || -1 == this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
						if (b = e.findCompression(this.compressionMethod), null === b) throw new Error("Corrupted zip : compression " + e.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
						if (this.decompressed = new f, this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(a, a.index, this.compressedSize, b), this.decompressed.getContent = this.prepareContent(a, a.index, this.compressedSize, b, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = e.transformTo("string", this.decompressed.getContent()), g.crc32(this.decompressed) !== this.crc32)) throw new Error("Corrupted zip : CRC32 mismatch")
					},
					readCentralPart: function(a) {
						if (this.versionMadeBy = a.readString(2), this.versionNeeded = a.readInt(2), this.bitFlag = a.readInt(2), this.compressionMethod = a.readString(2), this.date = a.readDate(), this.crc32 = a.readInt(4), this.compressedSize = a.readInt(4), this.uncompressedSize = a.readInt(4), this.fileNameLength = a.readInt(2), this.extraFieldsLength = a.readInt(2), this.fileCommentLength = a.readInt(2), this.diskNumberStart = a.readInt(2), this.internalFileAttributes = a.readInt(2), this.externalFileAttributes = a.readInt(4), this.localHeaderOffset = a.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
						this.fileName = a.readString(this.fileNameLength), this.readExtraFields(a), this.parseZIP64ExtraField(a), this.fileComment = a.readString(this.fileCommentLength), this.dir = 16 & this.externalFileAttributes ? !0 : !1
					},
					parseZIP64ExtraField: function() {
						if (this.extraFields[1]) {
							var a = new d(this.extraFields[1].value);
							this.uncompressedSize === e.MAX_VALUE_32BITS && (this.uncompressedSize = a.readInt(8)), this.compressedSize === e.MAX_VALUE_32BITS && (this.compressedSize = a.readInt(8)), this.localHeaderOffset === e.MAX_VALUE_32BITS && (this.localHeaderOffset = a.readInt(8)), this.diskNumberStart === e.MAX_VALUE_32BITS && (this.diskNumberStart = a.readInt(4))
						}
					},
					readExtraFields: function(a) {
						var b, c, d, e = a.index;
						for (this.extraFields = this.extraFields || {}; a.index < e + this.extraFieldsLength;) b = a.readInt(2), c = a.readInt(2), d = a.readString(c), this.extraFields[b] = {
							id: b,
							length: c,
							value: d
						}
					},
					handleUTF8: function() {
						if (this.useUTF8()) this.fileName = g.utf8decode(this.fileName), this.fileComment = g.utf8decode(this.fileComment);
						else {
							var a = this.findExtraFieldUnicodePath();
							null !== a && (this.fileName = a)
						}
					},
					findExtraFieldUnicodePath: function() {
						var a = this.extraFields[28789];
						if (a) {
							var b = new d(a.value);
							return 1 !== b.readInt(1) ? null : g.crc32(this.fileName) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5))
						}
						return null
					}
				}, b.exports = c
			}, {
				"./compressedObject": 2,
				"./object": 9,
				"./stringReader": 11,
				"./utils": 14
			}
		],
		17: [
			function() {}, {}
		],
		18: [
			function(a, b) {
				var c = b.exports = {};
				c.nextTick = function() {
					var a = "undefined" != typeof window && window.setImmediate,
						b = "undefined" != typeof window && window.postMessage && window.addEventListener;
					if (a) return function(a) {
						return window.setImmediate(a)
					};
					if (b) {
						var c = [];
						return window.addEventListener("message", function(a) {
								var b = a.source;
								if ((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(), c.length > 0)) {
									var d = c.shift();
									d()
								}
							}, !0),
							function(a) {
								c.push(a), window.postMessage("process-tick", "*")
							}
					}
					return function(a) {
						setTimeout(a, 0)
					}
				}(), c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.binding = function() {
					throw new Error("process.binding is not supported")
				}, c.cwd = function() {
					return "/"
				}, c.chdir = function() {
					throw new Error("process.chdir is not supported")
				}
			}, {}
		],
		19: [
			function(a, b) {
				"use strict";
				var c = a("./lib/zlib/utils").assign,
					d = a("./lib/deflate"),
					e = a("./lib/inflate"),
					f = a("./lib/zlib/constants"),
					g = {};
				c(g, d, e, f), b.exports = g
			}, {
				"./lib/deflate": 20,
				"./lib/inflate": 21,
				"./lib/zlib/constants": 23,
				"./lib/zlib/utils": 31
			}
		],
		20: [
			function(a, b, c) {
				"use strict";

				function d(a, b) {
					var c = new r(b);
					if (c.push(a, !0), c.err) throw c.msg;
					return c.result
				}

				function e(a, b) {
					return b = b || {}, b.raw = !0, d(a, b)
				}

				function f(a, b) {
					return b = b || {}, b.gzip = !0, d(a, b)
				}
				var g = a("./zlib/deflate.js"),
					h = a("./zlib/utils"),
					i = a("./zlib/messages"),
					j = a("./zlib/zstream"),
					k = 0,
					l = 4,
					m = 0,
					n = 1,
					o = -1,
					p = 0,
					q = 8,
					r = function(a) {
						this.options = h.assign({
							level: o,
							method: q,
							chunkSize: 16384,
							windowBits: 15,
							memLevel: 8,
							strategy: p
						}, a || {});
						var b = this.options;
						b.raw && b.windowBits > 0 ? b.windowBits = -b.windowBits : b.gzip && b.windowBits > 0 && b.windowBits < 16 && (b.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new j;
						var c = g.deflateInit2(this.strm, b.level, b.method, b.windowBits, b.memLevel, b.strategy);
						if (c !== m) throw new Error(i[c])
					};
				r.prototype.push = function(a, b) {
					var c, d, e = this.strm,
						f = this.options.chunkSize;
					if (this.ended) return !1;
					d = b === ~~b ? b : b === !0 ? l : k, e.next_in = a, e.next_in_index = 0, e.avail_in = e.next_in.length, e.next_out = new h.Buf8(f);
					do {
						if (e.avail_out = this.options.chunkSize, e.next_out_index = 0, c = g.deflate(e, d), c !== n && c !== m) return this.onEnd(c), this.ended = !0, !1;
						e.next_out_index && (this.onData(h.shrinkBuf(e.next_out, e.next_out_index)), (e.avail_in > 0 || 0 === e.avail_out) && (e.next_out = new h.Buf8(this.options.chunkSize)))
					} while (e.avail_in > 0 || 0 === e.avail_out);
					return d === l ? (c = g.deflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === m) : !0
				}, r.prototype.onData = function(a) {
					this.chunks.push(a)
				}, r.prototype.onEnd = function(a) {
					a === m && (this.result = h.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg
				}, c.Deflate = r, c.deflate = d, c.deflateRaw = e, c.gzip = f
			}, {
				"./zlib/deflate.js": 25,
				"./zlib/messages": 29,
				"./zlib/utils": 31,
				"./zlib/zstream": 32
			}
		],
		21: [
			function(a, b, c) {
				"use strict";

				function d(a, b) {
					var c = new k(b);
					if (c.push(a, !0), c.err) throw c.msg;
					return c.result
				}

				function e(a, b) {
					return b = b || {}, b.raw = !0, d(a, b)
				}
				var f = a("./zlib/inflate.js"),
					g = a("./zlib/utils"),
					h = a("./zlib/constants"),
					i = a("./zlib/messages"),
					j = a("./zlib/zstream"),
					k = function(a) {
						this.options = g.assign({
							chunkSize: 16384,
							windowBits: 0
						}, a || {});
						var b = this.options;
						b.raw && b.windowBits >= 0 && b.windowBits < 16 && (b.windowBits = -b.windowBits, 0 === b.windowBits && (b.windowBits = -15)), !(b.windowBits >= 0 && b.windowBits < 16) || a && a.windowBits || (b.windowBits += 32), b.windowBits > 15 && b.windowBits < 48 && 0 === (15 & b.windowBits) && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new j;
						var c = f.inflateInit2(this.strm, b.windowBits);
						if (c !== h.Z_OK) throw new Error(i[c])
					};
				k.prototype.push = function(a, b) {
					var c, d, e = this.strm,
						i = this.options.chunkSize;
					if (this.ended) return !1;
					d = h.Z_NO_FLUSH, e.next_in = a, e.next_in_index = 0, e.avail_in = e.next_in.length, e.next_out = new g.Buf8(i);
					do {
						if (e.avail_out = this.options.chunkSize, e.next_out_index = 0, c = f.inflate(e, d), c !== h.Z_STREAM_END && c !== h.Z_OK) return this.onEnd(c), this.ended = !0, !1;
						e.next_out_index && (this.onData(g.shrinkBuf(e.next_out, e.next_out_index)), (e.avail_in > 0 || 0 === e.avail_out) && (e.next_out = new g.Buf8(this.options.chunkSize)))
					} while (e.avail_in > 0 || 0 === e.avail_out);
					return d = b === ~~b ? b : b === !0 ? h.Z_FINISH : h.Z_NO_FLUSH, d === h.Z_FINISH ? (c = f.inflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === h.Z_OK) : !0
				}, k.prototype.onData = function(a) {
					this.chunks.push(a)
				}, k.prototype.onEnd = function(a) {
					a === h.Z_OK && (this.result = g.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg
				}, c.Inflate = k, c.inflate = d, c.inflateRaw = e
			}, {
				"./zlib/constants": 23,
				"./zlib/inflate.js": 27,
				"./zlib/messages": 29,
				"./zlib/utils": 31,
				"./zlib/zstream": 32
			}
		],
		22: [
			function(a, b) {
				"use strict";

				function c(a, b, c, d) {
					for (var e = 65535 & a | 0, f = a >>> 16 & 65535 | 0, g = 0; 0 !== c;) {
						g = c > 2e3 ? 2e3 : c, c -= g;
						do e = e + b[d++] | 0, f = f + e | 0; while (--g);
						e %= 65521, f %= 65521
					}
					return e | f << 16 | 0
				}
				b.exports = c
			}, {}
		],
		23: [
			function(a, b) {
				b.exports = {
					Z_NO_FLUSH: 0,
					Z_PARTIAL_FLUSH: 1,
					Z_SYNC_FLUSH: 2,
					Z_FULL_FLUSH: 3,
					Z_FINISH: 4,
					Z_BLOCK: 5,
					Z_TREES: 6,
					Z_OK: 0,
					Z_STREAM_END: 1,
					Z_NEED_DICT: 2,
					Z_ERRNO: -1,
					Z_STREAM_ERROR: -2,
					Z_DATA_ERROR: -3,
					Z_BUF_ERROR: -5,
					Z_NO_COMPRESSION: 0,
					Z_BEST_SPEED: 1,
					Z_BEST_COMPRESSION: 9,
					Z_DEFAULT_COMPRESSION: -1,
					Z_FILTERED: 1,
					Z_HUFFMAN_ONLY: 2,
					Z_RLE: 3,
					Z_FIXED: 4,
					Z_DEFAULT_STRATEGY: 0,
					Z_BINARY: 0,
					Z_TEXT: 1,
					Z_UNKNOWN: 2,
					Z_DEFLATED: 8
				}
			}, {}
		],
		24: [
			function(a, b) {
				"use strict";

				function c() {
					for (var a, b = [], c = 0; 256 > c; c++) {
						a = c;
						for (var d = 0; 8 > d; d++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
						b[c] = a
					}
					return b
				}

				function d(a, b, c, d) {
					var f = e,
						g = d + c;
					a = -1 ^ a;
					for (var h = d; g > h; h++) a = a >>> 8 ^ f[255 & (a ^ b[h])];
					return -1 ^ a
				}
				var e = c();
				b.exports = d
			}, {}
		],
		25: [
			function(a, b, c) {
				"use strict";

				function d(a, b) {
					return a.msg = F[b], b
				}

				function e(a) {
					return (a << 1) - (a > 4 ? 9 : 0)
				}

				function f(a) {
					for (var b = a.length; --b;) a[b] = 0
				}

				function g(a) {
					var b = a.state,
						c = b.pending;
					c > a.avail_out && (c = a.avail_out), 0 !== c && (B.arraySet(a.next_out, b.pending_buf, b.pending_out, c, a.next_out_index), a.next_out_index += c, b.pending_out += c, a.total_out += c, a.avail_out -= c, b.pending -= c, 0 === b.pending && (b.pending_out = 0))
				}

				function h(a, b) {
					C._tr_flush_block(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, b), a.block_start = a.strstart, g(a.strm)
				}

				function i(a, b) {
					a.pending_buf[a.pending++] = b
				}

				function j(a, b) {
					a.pending_buf[a.pending++] = b >>> 8 & 255, a.pending_buf[a.pending++] = 255 & b
				}

				function k(a, b, c, d) {
					var e = a.avail_in;
					return e > d && (e = d), 0 === e ? 0 : (a.avail_in -= e, B.arraySet(b, a.next_in, a.next_in_index, e, c), 1 === a.state.wrap ? a.adler = D(a.adler, b, e, c) : 2 === a.state.wrap && (a.adler = E(a.adler, b, e, c)), a.next_in_index += e, a.total_in += e, e)
				}

				function l(a, b) {
					var c, d, e = a.max_chain_length,
						f = a.strstart,
						g = a.prev_length,
						h = a.nice_match,
						i = a.strstart > a.w_size - ib ? a.strstart - (a.w_size - ib) : 0,
						j = a.window,
						k = a.w_mask,
						l = a.prev,
						m = a.strstart + hb,
						n = j[f + g - 1],
						o = j[f + g];
					a.prev_length >= a.good_match && (e >>= 2), h > a.lookahead && (h = a.lookahead);
					do
						if (c = b, j[c + g] === o && j[c + g - 1] === n && j[c] === j[f] && j[++c] === j[f + 1]) {
							f += 2, c++;
							do; while (j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && m > f);
							if (d = hb - (m - f), f = m - hb, d > g) {
								if (a.match_start = b, g = d, d >= h) break;
								n = j[f + g - 1], o = j[f + g]
							}
						}
					while ((b = l[b & k]) > i && 0 !== --e);
					return g <= a.lookahead ? g : a.lookahead
				}

				function m(a) {
					var b, c, d, e, f, g = a.w_size;
					do {
						if (e = a.window_size - a.lookahead - a.strstart, a.strstart >= g + (g - ib)) {
							B.arraySet(a.window, a.window, g, g, 0), a.match_start -= g, a.strstart -= g, a.block_start -= g, c = a.hash_size, b = c;
							do d = a.head[--b], a.head[b] = d >= g ? d - g : 0; while (--c);
							c = g, b = c;
							do d = a.prev[--b], a.prev[b] = d >= g ? d - g : 0; while (--c);
							e += g
						}
						if (0 === a.strm.avail_in) break;
						if (c = k(a.strm, a.window, a.strstart + a.lookahead, e), a.lookahead += c, a.lookahead + a.insert >= gb)
							for (f = a.strstart - a.insert, a.ins_h = a.window[f], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + 1]) & a.hash_mask; a.insert && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + gb - 1]) & a.hash_mask, a.prev[f & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = f, f++, a.insert--, !(a.lookahead + a.insert < gb)););
					} while (a.lookahead < ib && 0 !== a.strm.avail_in)
				}

				function n(a, b) {
					var c = 65535;
					for (c > a.pending_buf_size - 5 && (c = a.pending_buf_size - 5);;) {
						if (a.lookahead <= 1) {
							if (m(a), 0 === a.lookahead && b === G) return rb;
							if (0 === a.lookahead) break
						}
						a.strstart += a.lookahead, a.lookahead = 0;
						var d = a.block_start + c;
						if ((0 === a.strstart || a.strstart >= d) && (a.lookahead = a.strstart - d, a.strstart = d, h(a, !1), 0 === a.strm.avail_out)) return rb;
						if (a.strstart - a.block_start >= a.w_size - ib && (h(a, !1), 0 === a.strm.avail_out)) return rb
					}
					return a.insert = 0, b === J ? (h(a, !0), 0 === a.strm.avail_out ? tb : ub) : a.strstart > a.block_start && (h(a, !1), 0 === a.strm.avail_out) ? rb : rb
				}

				function o(a, b) {
					for (var c, d;;) {
						if (a.lookahead < ib) {
							if (m(a), a.lookahead < ib && b === G) return rb;
							if (0 === a.lookahead) break
						}
						if (c = 0, a.lookahead >= gb && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + gb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), 0 !== c && a.strstart - c <= a.w_size - ib && (a.match_length = l(a, c)), a.match_length >= gb)
							if (d = C._tr_tally(a, a.strstart - a.match_start, a.match_length - gb), a.lookahead -= a.match_length, a.match_length <= a.max_lazy_match && a.lookahead >= gb) {
								a.match_length--;
								do a.strstart++, a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + gb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart; while (0 !== --a.match_length);
								a.strstart++
							} else a.strstart += a.match_length, a.match_length = 0, a.ins_h = a.window[a.strstart], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 1]) & a.hash_mask;
						else d = C._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++; if (d && (h(a, !1), 0 === a.strm.avail_out)) return rb
					}
					return a.insert = a.strstart < gb - 1 ? a.strstart : gb - 1, b === J ? (h(a, !0), 0 === a.strm.avail_out ? tb : ub) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? rb : sb
				}

				function p(a, b) {
					for (var c, d, e;;) {
						if (a.lookahead < ib) {
							if (m(a), a.lookahead < ib && b === G) return rb;
							if (0 === a.lookahead) break
						}
						if (c = 0, a.lookahead >= gb && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + gb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), a.prev_length = a.match_length, a.prev_match = a.match_start, a.match_length = gb - 1, 0 !== c && a.prev_length < a.max_lazy_match && a.strstart - c <= a.w_size - ib && (a.match_length = l(a, c), a.match_length <= 5 && (a.strategy === R || a.match_length === gb && a.strstart - a.match_start > 4096) && (a.match_length = gb - 1)), a.prev_length >= gb && a.match_length <= a.prev_length) {
							e = a.strstart + a.lookahead - gb, d = C._tr_tally(a, a.strstart - 1 - a.prev_match, a.prev_length - gb), a.lookahead -= a.prev_length - 1, a.prev_length -= 2;
							do ++
							a.strstart <= e && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + gb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart);
							while (0 !== --a.prev_length);
							if (a.match_available = 0, a.match_length = gb - 1, a.strstart++, d && (h(a, !1), 0 === a.strm.avail_out)) return rb
						} else if (a.match_available) {
							if (d = C._tr_tally(a, 0, a.window[a.strstart - 1]), d && h(a, !1), a.strstart++, a.lookahead--, 0 === a.strm.avail_out) return rb
						} else a.match_available = 1, a.strstart++, a.lookahead--
					}
					return a.match_available && (d = C._tr_tally(a, 0, a.window[a.strstart - 1]), a.match_available = 0), a.insert = a.strstart < gb - 1 ? a.strstart : gb - 1, b === J ? (h(a, !0), 0 === a.strm.avail_out ? tb : ub) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? rb : sb
				}

				function q(a, b) {
					for (var c, d, e, f, g = a.window;;) {
						if (a.lookahead <= hb) {
							if (m(a), a.lookahead <= hb && b === G) return rb;
							if (0 === a.lookahead) break
						}
						if (a.match_length = 0, a.lookahead >= gb && a.strstart > 0 && (e = a.strstart - 1, d = g[e], d === g[++e] && d === g[++e] && d === g[++e])) {
							f = a.strstart + hb;
							do; while (d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && f > e);
							a.match_length = hb - (f - e), a.match_length > a.lookahead && (a.match_length = a.lookahead)
						}
						if (a.match_length >= gb ? (c = C._tr_tally(a, 1, a.match_length - gb), a.lookahead -= a.match_length, a.strstart += a.match_length, a.match_length = 0) : (c = C._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++), c && (h(a, !1), 0 === a.strm.avail_out)) return rb
					}
					return a.insert = 0, b === J ? (h(a, !0), 0 === a.strm.avail_out ? tb : ub) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? rb : sb
				}

				function r(a, b) {
					for (var c;;) {
						if (0 === a.lookahead && (m(a), 0 === a.lookahead)) {
							if (b === G) return rb;
							break
						}
						if (a.match_length = 0, c = C._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++, c && (h(a, !1), 0 === a.strm.avail_out)) return rb
					}
					return a.insert = 0, b === J ? (h(a, !0), 0 === a.strm.avail_out ? tb : ub) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? rb : sb
				}

				function s(a) {
					a.window_size = 2 * a.w_size, f(a.head), a.max_lazy_match = A[a.level].max_lazy, a.good_match = A[a.level].good_length, a.nice_match = A[a.level].nice_length, a.max_chain_length = A[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = gb - 1, a.match_available = 0, a.ins_h = 0
				}

				function t() {
					this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = X, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new B.Buf16(2 * eb), this.dyn_dtree = new B.Buf16(2 * (2 * cb + 1)), this.bl_tree = new B.Buf16(2 * (2 * db + 1)), f(this.dyn_ltree), f(this.dyn_dtree), f(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new B.Buf16(fb + 1), this.heap = new B.Buf16(2 * bb + 1), f(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new B.Buf16(2 * bb + 1), f(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0, this.high_water = 0
				}

				function u(a) {
					var b;
					return a && a.state ? (a.total_in = a.total_out = 0, a.data_type = W, b = a.state, b.pending = 0, b.pending_out = 0, b.wrap < 0 && (b.wrap = -b.wrap), b.status = b.wrap ? kb : pb, a.adler = 2 === b.wrap ? 0 : 1, b.last_flush = G, C._tr_init(b), L) : d(a, N)
				}

				function v(a) {
					var b = u(a);
					return b === L && s(a.state), b
				}

				function w(a, b, c, e, f, g) {
					if (!a) return d(a, N);
					var h = 1;
					if (b === Q && (b = 6), 0 > e ? (h = 0, e = -e) : e > 15 && (h = 2, e -= 16), 1 > f || f > Y || c !== X || 8 > e || e > 15 || 0 > b || b > 9 || 0 > g || g > U) return d(a, N);
					8 === e && (e = 9);
					var i = new t;
					return a.state = i, i.strm = a, i.wrap = h, i.gzhead = null, i.w_bits = e, i.w_size = 1 << i.w_bits, i.w_mask = i.w_size - 1, i.hash_bits = f + 7, i.hash_size = 1 << i.hash_bits, i.hash_mask = i.hash_size - 1, i.hash_shift = ~~ ((i.hash_bits + gb - 1) / gb), i.window = new B.Buf8(2 * i.w_size), i.head = new B.Buf16(i.hash_size), i.prev = new B.Buf16(i.w_size), i.high_water = 0, i.lit_bufsize = 1 << f + 6, i.pending_buf_size = 4 * i.lit_bufsize, i.pending_buf = new B.Buf8(i.pending_buf_size), i.d_buf = i.lit_bufsize >> 1, i.l_buf = 3 * i.lit_bufsize, i.level = b, i.strategy = g, i.method = c, v(a)
				}

				function x(a, b) {
					return w(a, b, X, Z, $, V)
				}

				function y(a, b) {
					var c, h;
					if (!a || !a.state || b > K || 0 > b) return d(a, N);
					if (h = a.state, !a.next_out || !a.next_in && 0 !== a.avail_in || h.status === qb && b !== J) return d(a, 0 === a.avail_out ? P : N);
					if (h.strm = a, c = h.last_flush, h.last_flush = b, h.status === kb)
						if (2 === h.wrap) {
							if (a.adler = 0, i(h, 31), i(h, 139), i(h, 8), h.gzhead) throw new Error("Custom GZIP headers not supported");
							i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 9 === h.level ? 2 : h.strategy >= S || h.level < 2 ? 4 : 0), i(h, vb), h.status = pb
						} else {
							var k = X + (h.w_bits - 8 << 4) << 8,
								l = -1;
							l = h.strategy >= S || h.level < 2 ? 0 : h.level < 6 ? 1 : 6 === h.level ? 2 : 3, k |= l << 6, 0 !== h.strstart && (k |= jb), k += 31 - k % 31, h.status = pb, j(h, k), 0 !== h.strstart && (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), a.adler = 1
						}
					if (0 !== h.pending) {
						if (g(a), 0 === a.avail_out) return h.last_flush = -1, L
					} else if (0 === a.avail_in && e(b) <= e(c) && b !== J) return d(a, P);
					if (h.status === qb && 0 !== a.avail_in) return d(a, P);
					if (0 !== a.avail_in || 0 !== h.lookahead || b !== G && h.status !== qb) {
						var m = h.strategy === S ? r(h, b) : h.strategy === T ? q(h, b) : A[h.level].func(h, b);
						if ((m === tb || m === ub) && (h.status = qb), m === rb || m === tb) return 0 === a.avail_out && (h.last_flush = -1), L;
						if (m === sb && (b === H ? C._tr_align(h) : b !== K && (C._tr_stored_block(h, 0, 0, !1), b === I && (f(h.head), 0 === h.lookahead && (h.strstart = 0, h.block_start = 0, h.insert = 0))), g(a), 0 === a.avail_out)) return h.last_flush = -1, L
					}
					return b !== J ? L : h.wrap <= 0 ? M : (2 === h.wrap ? (i(h, 255 & a.adler), i(h, a.adler >> 8 & 255), i(h, a.adler >> 16 & 255), i(h, a.adler >> 24 & 255), i(h, 255 & a.total_in), i(h, a.total_in >> 8 & 255), i(h, a.total_in >> 16 & 255), i(h, a.total_in >> 24 & 255)) : (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), g(a), h.wrap > 0 && (h.wrap = -h.wrap), 0 !== h.pending ? L : M)
				}

				function z(a) {
					var b = a.state.status;
					return b !== kb && b !== lb && b !== mb && b !== nb && b !== ob && b !== pb && b !== qb ? d(a, N) : (a.state = null, b === pb ? d(a, O) : L)
				}
				var A, B = a("./utils"),
					C = a("./trees"),
					D = a("./adler32"),
					E = a("./crc32"),
					F = a("./messages"),
					G = 0,
					H = 1,
					I = 3,
					J = 4,
					K = 5,
					L = 0,
					M = 1,
					N = -2,
					O = -3,
					P = -5,
					Q = -1,
					R = 1,
					S = 2,
					T = 3,
					U = 4,
					V = 0,
					W = 2,
					X = 8,
					Y = 9,
					Z = 15,
					$ = 8,
					_ = 29,
					ab = 256,
					bb = ab + 1 + _,
					cb = 30,
					db = 19,
					eb = 2 * bb + 1,
					fb = 15,
					gb = 3,
					hb = 258,
					ib = hb + gb + 1,
					jb = 32,
					kb = 42,
					lb = 69,
					mb = 73,
					nb = 91,
					ob = 103,
					pb = 113,
					qb = 666,
					rb = 1,
					sb = 2,
					tb = 3,
					ub = 4,
					vb = 3,
					wb = function(a, b, c, d, e) {
						this.good_length = a, this.max_lazy = b, this.nice_length = c, this.max_chain = d, this.func = e
					};
				A = [new wb(0, 0, 0, 0, n), new wb(4, 4, 8, 4, o), new wb(4, 5, 16, 8, o), new wb(4, 6, 32, 32, o), new wb(4, 4, 16, 16, p), new wb(8, 16, 32, 32, p), new wb(8, 16, 128, 128, p), new wb(8, 32, 128, 256, p), new wb(32, 128, 258, 1024, p), new wb(32, 258, 258, 4096, p)], c.deflateInit = x, c.deflateInit2 = w, c.deflateReset = v, c.deflate = y, c.deflateEnd = z, c.deflateInfo = "pako deflate (from Nodeca project)"
			}, {
				"./adler32": 22,
				"./crc32": 24,
				"./messages": 29,
				"./trees": 30,
				"./utils": 31
			}
		],
		26: [
			function(a, b) {
				"use strict";
				var c = 30,
					d = 12;
				b.exports = function(a, b) {
					var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
					e = a.state, f = a.next_in_index, B = a.next_in, g = f + (a.avail_in - 5), h = a.next_out_index, C = a.next_out, i = h - (b - a.avail_out), j = h + (a.avail_out - 257), k = e.dmax, l = e.wsize, m = e.whave, n = e.wnext, o = e.window, p = e.hold, q = e.bits, r = e.lencode, s = e.distcode, t = (1 << e.lenbits) - 1, u = (1 << e.distbits) - 1;
					a: do {
						15 > q && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = r[p & t];
						b: for (;;) {
							if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, 0 === w) C[h++] = 65535 & v;
							else {
								if (!(16 & w)) {
									if (0 === (64 & w)) {
										v = r[(65535 & v) + (p & (1 << w) - 1)];
										continue b
									}
									if (32 & w) {
										e.mode = d;
										break a
									}
									a.msg = "invalid literal/length code", e.mode = c;
									break a
								}
								x = 65535 & v, w &= 15, w && (w > q && (p += B[f++] << q, q += 8), x += p & (1 << w) - 1, p >>>= w, q -= w), 15 > q && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = s[p & u];
								c: for (;;) {
									if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, !(16 & w)) {
										if (0 === (64 & w)) {
											v = s[(65535 & v) + (p & (1 << w) - 1)];
											continue c
										}
										a.msg = "invalid distance code", e.mode = c;
										break a
									}
									if (y = 65535 & v, w &= 15, w > q && (p += B[f++] << q, q += 8, w > q && (p += B[f++] << q, q += 8)), y += p & (1 << w) - 1, y > k) {
										a.msg = "invalid distance too far back", e.mode = c;
										break a
									}
									if (p >>>= w, q -= w, w = h - i, y > w) {
										if (w = y - w, w > m && e.sane) {
											a.msg = "invalid distance too far back", e.mode = c;
											break a
										}
										if (z = 0, A = o, 0 === n) {
											if (z += l - w, x > w) {
												x -= w;
												do C[h++] = o[z++]; while (--w);
												z = h - y, A = C
											}
										} else if (w > n) {
											if (z += l + n - w, w -= n, x > w) {
												x -= w;
												do C[h++] = o[z++]; while (--w);
												if (z = 0, x > n) {
													w = n, x -= w;
													do C[h++] = o[z++]; while (--w);
													z = h - y, A = C
												}
											}
										} else if (z += n - w, x > w) {
											x -= w;
											do C[h++] = o[z++]; while (--w);
											z = h - y, A = C
										}
										for (; x > 2;) C[h++] = A[z++], C[h++] = A[z++], C[h++] = A[z++], x -= 3;
										x && (C[h++] = A[z++], x > 1 && (C[h++] = A[z++]))
									} else {
										z = h - y;
										do C[h++] = C[z++], C[h++] = C[z++], C[h++] = C[z++], x -= 3; while (x > 2);
										x && (C[h++] = C[z++], x > 1 && (C[h++] = C[z++]))
									}
									break
								}
							}
							break
						}
					} while (g > f && j > h);
					x = q >> 3, f -= x, q -= x << 3, p &= (1 << q) - 1, a.next_in_index = f, a.next_out_index = h, a.avail_in = g > f ? 5 + (g - f) : 5 - (f - g), a.avail_out = j > h ? 257 + (j - h) : 257 - (h - j), e.hold = p, e.bits = q
				}
			}, {}
		],
		27: [
			function(a, b, c) {
				"use strict";

				function d(a) {
					return (a >>> 24 & 255) + (a >>> 8 & 65280) + ((65280 & a) << 8) + ((255 & a) << 24)
				}

				function e() {
					this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.next_index = 0, this.lens = new s.Buf16(320), this.work = new s.Buf16(288), this.codes = new s.Buf32(rb), this.sane = 0, this.back = 0, this.was = 0
				}

				function f(a, b, c, d, e, f, g, h) {
					this.type = a, this.lens = b, this.lens_index = c, this.codes = d, this.table = e, this.table_index = f, this.bits = g, this.work = h
				}

				function g(a) {
					var b;
					return a && a.state ? (b = a.state, a.total_in = a.total_out = b.total = 0, b.wrap && (a.adler = 1 & b.wrap), b.mode = L, b.last = 0, b.havedict = 0, b.dmax = 32768, b.head = null, b.hold = 0, b.bits = 0, b.lencode = new s.Buf32(rb), b.distcode = new s.Buf32(rb), b.sane = 1, b.back = -1, D) : G
				}

				function h(a) {
					var b;
					return a && a.state ? (b = a.state, b.wsize = 0, b.whave = 0, b.wnext = 0, g(a)) : G
				}

				function i(a, b) {
					var c, d;
					return a && a.state ? (d = a.state, 0 > b ? (c = 0, b = -b) : (c = (b >> 4) + 1, 48 > b && (b &= 15)), b && (8 > b || b > 15) ? G : (null !== d.window && d.wbits !== b && (d.window = null), d.wrap = c, d.wbits = b, h(a))) : G
				}

				function j(a, b) {
					var c, d;
					return a ? (d = new e, a.state = d, d.window = null, c = i(a, b), c !== D && (a.state = null), c) : G
				}

				function k(a) {
					return j(a, tb)
				}

				function l(a, b, c) {
					var d;
					return a && a.state ? (d = a.state, 0 > b ? (d.hold = 0, d.bits = 0, D) : b > 16 || d.bits + b > 32 ? G : (c &= (1 << b) - 1, d.hold += c << d.bits, d.bits += b, D)) : G
				}

				function m(a) {
					if (ub) {
						var b, c;
						for (q = new s.Buf32(512), r = new s.Buf32(32), b = 0; 144 > b;) a.lens[b++] = 8;
						for (; 256 > b;) a.lens[b++] = 9;
						for (; 280 > b;) a.lens[b++] = 7;
						for (; 288 > b;) a.lens[b++] = 8;
						for (c = 9, w(new f(y, a.lens, 0, 288, q, 0, c, a.work)), b = 0; 32 > b;) a.lens[b++] = 5;
						c = 5, w(new f(z, a.lens, 0, 32, r, 0, c, a.work)), ub = !1
					}
					a.lencode = q, a.lenbits = 9, a.distcode = r, a.distbits = 5
				}

				function n(a, b, c, d) {
					var e, f = a.state;
					return null === f.window && (f.wsize = 1 << f.wbits, f.wnext = 0, f.whave = 0, f.window = new s.Buf8(f.wsize)), d >= f.wsize ? (s.arraySet(f.window, b, c - f.wsize, f.wsize, 0), f.wnext = 0, f.whave = f.wsize) : (e = f.wsize - f.wnext, e > d && (e = d), s.arraySet(f.window, b, c - d, e, f.wnext), d -= e, d ? (s.arraySet(f.window, b, c - d, d, 0), f.wnext = d, f.whave = f.wsize) : (f.wnext += e, f.wnext === f.wsize && (f.wnext = 0), f.whave < f.wsize && (f.whave += e))), 0
				}

				function o(a, b) {
					var c, e, g, h, i, j, k, l, o, p, q, r, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb = 0,
						Cb = new s.Buf8(4),
						Db = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
					c = a.state, c.mode === W && (c.mode = X), i = a.next_out_index, g = a.next_out, k = a.avail_out, h = a.next_in_index, e = a.next_in, j = a.avail_in, l = c.hold, o = c.bits, p = j, q = k, yb = D;
					a: for (;;) switch (c.mode) {
						case L:
							if (0 === c.wrap) {
								c.mode = X;
								break
							}
							for (; 16 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							if (2 & c.wrap && 35615 === l) {
								c.check = 0, Cb[0] = 255 & l, Cb[1] = l >>> 8 & 255, c.check = u(c.check, Cb, 2, 0), l = 0, o = 0, c.mode = M;
								break
							}
							if (c.flags = 0, c.head && (c.head.done = -1), !(1 & c.wrap) || (((255 & l) << 8) + (l >> 8)) % 31) {
								a.msg = "incorrect header check", c.mode = mb;
								break
							}
							if ((15 & l) !== K) {
								a.msg = "unknown compression method", c.mode = mb;
								break
							}
							if (l >>>= 4, o -= 4, xb = (15 & l) + 8, 0 === c.wbits) c.wbits = xb;
							else if (xb > c.wbits) {
								a.msg = "invalid window size", c.mode = mb;
								break
							}
							c.dmax = 1 << xb, a.adler = c.check = 1, c.mode = 512 & l ? U : W, l = 0, o = 0;
							break;
						case M:
							for (; 16 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							if (c.flags = l, (255 & c.flags) !== K) {
								a.msg = "unknown compression method", c.mode = mb;
								break
							}
							if (57344 & c.flags) {
								a.msg = "unknown header flags set", c.mode = mb;
								break
							}
							c.head && (c.head.text = l >> 8 & 1), 512 & c.flags && (Cb[0] = 255 & l, Cb[1] = l >>> 8 & 255, c.check = u(c.check, Cb, 2, 0)), l = 0, o = 0, c.mode = N;
						case N:
							for (; 32 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							c.head && (c.head.time = l), 512 & c.flags && (Cb[0] = 255 & l, Cb[1] = l >>> 8 & 255, Cb[2] = l >>> 16 & 255, Cb[3] = l >>> 24 & 255, c.check = u(c.check, Cb, 4, 0)), l = 0, o = 0, c.mode = O;
						case O:
							for (; 16 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							c.head && (c.head.xflags = 255 & l, c.head.os = l >> 8), 512 & c.flags && (Cb[0] = 255 & l, Cb[1] = l >>> 8 & 255, c.check = u(c.check, Cb, 2, 0)), l = 0, o = 0, c.mode = P;
						case P:
							if (1024 & c.flags) {
								for (; 16 > o;) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								c.length = l, c.head && (c.head.extra_len = l), 512 & c.flags && (Cb[0] = 255 & l, Cb[1] = l >>> 8 & 255, c.check = u(c.check, Cb, 2, 0)), l = 0, o = 0
							} else c.head && (c.head.extra = null);
							c.mode = Q;
						case Q:
							if (1024 & c.flags) {
								if (r = c.length, r > j && (r = j), r) {
									if (c.head && c.head.extra) throw xb = c.head.extra_len - c.length, "Review & implement right";
									512 & c.flags && (c.check = u(c.check, e, r, h)), j -= r, h += r, c.length -= r
								}
								if (c.length) break a
							}
							c.length = 0, c.mode = R;
						case R:
							if (2048 & c.flags) {
								if (0 === j) break a;
								r = 0;
								do xb = e[h + r++], c.head && c.head.name && c.length < c.head.name_max && (c.head.name[c.length++] = xb); while (xb && j > r);
								if (512 & c.flags && (c.check = u(c.check, e, r, h)), j -= r, h += r, xb) break a
							} else c.head && (c.head.name = null);
							c.length = 0, c.mode = S;
						case S:
							if (4096 & c.flags) {
								if (0 === j) break a;
								r = 0;
								do xb = e[h + r++], c.head && c.head.comment && c.length < c.head.comm_max && (c.head.comment[c.length++] = xb); while (xb && j > r);
								if (512 & c.flags && (c.check = u(c.check, e, r, h)), j -= r, h += r, xb) break a
							} else c.head && (c.head.comment = null);
							c.mode = T;
						case T:
							if (512 & c.flags) {
								for (; 16 > o;) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								if (l !== (65535 & c.check)) {
									a.msg = "header crc mismatch", c.mode = mb;
									break
								}
								l = 0, o = 0
							}
							c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = 1), a.adler = c.check = 0, c.mode = W;
							break;
						case U:
							for (; 32 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							a.adler = c.check = d(l), l = 0, o = 0, c.mode = V;
						case V:
							if (0 === c.havedict) return a.next_out_index = i, a.avail_out = k, a.next_in_index = h, a.avail_in = j, c.hold = l, c.bits = o, F;
							a.adler = c.check = 1, c.mode = W;
						case W:
							if (b === B || b === C) break a;
						case X:
							if (c.last) {
								l >>>= 7 & o, o -= 7 & o, c.mode = jb;
								break
							}
							for (; 3 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							switch (c.last = 1 & l, l >>>= 1, o -= 1, 3 & l) {
								case 0:
									c.mode = Y;
									break;
								case 1:
									if (m(c), c.mode = cb, b === C) {
										l >>>= 2, o -= 2;
										break a
									}
									break;
								case 2:
									c.mode = _;
									break;
								case 3:
									a.msg = "invalid block type", c.mode = mb
							}
							l >>>= 2, o -= 2;
							break;
						case Y:
							for (l >>>= 7 & o, o -= 7 & o; 32 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							if ((65535 & l) !== (l >>> 16 ^ 65535)) {
								a.msg = "invalid stored block lengths", c.mode = mb;
								break
							}
							if (c.length = 65535 & l, l = 0, o = 0, c.mode = Z, b === C) break a;
						case Z:
							c.mode = $;
						case $:
							if (r = c.length) {
								if (r > j && (r = j), r > k && (r = k), 0 === r) break a;
								s.arraySet(g, e, h, r, i), j -= r, h += r, k -= r, i += r, c.length -= r;
								break
							}
							c.mode = W;
							break;
						case _:
							for (; 14 > o;) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							if (c.nlen = (31 & l) + 257, l >>>= 5, o -= 5, c.ndist = (31 & l) + 1, l >>>= 5, o -= 5, c.ncode = (15 & l) + 4, l >>>= 4, o -= 4, c.nlen > 286 || c.ndist > 30) {
								a.msg = "too many length or distance symbols", c.mode = mb;
								break
							}
							c.have = 0, c.mode = ab;
						case ab:
							for (; c.have < c.ncode;) {
								for (; 3 > o;) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								c.lens[Db[c.have++]] = 7 & l, l >>>= 3, o -= 3
							}
							for (; c.have < 19;) c.lens[Db[c.have++]] = 0;
							if (s.arraySet(c.lencode, c.codes, 0, c.codes.length, 0), c.lenbits = 7, zb = new f(x, c.lens, 0, 19, c.lencode, 0, c.lenbits, c.work), yb = w(zb), c.lenbits = zb.bits, yb) {
								a.msg = "invalid code lengths set", c.mode = mb;
								break
							}
							c.have = 0, c.mode = bb;
						case bb:
							for (; c.have < c.nlen + c.ndist;) {
								for (; Bb = c.lencode[l & (1 << c.lenbits) - 1], rb = Bb >>> 24, sb = Bb >>> 16 & 255, tb = 65535 & Bb, !(o >= rb);) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								if (16 > tb) l >>>= rb, o -= rb, c.lens[c.have++] = tb;
								else {
									if (16 === tb) {
										for (Ab = rb + 2; Ab > o;) {
											if (0 === j) break a;
											j--, l += e[h++] << o, o += 8
										}
										if (l >>>= rb, o -= rb, 0 === c.have) {
											a.msg = "invalid bit length repeat", c.mode = mb;
											break
										}
										xb = c.lens[c.have - 1], r = 3 + (3 & l), l >>>= 2, o -= 2
									} else if (17 === tb) {
										for (Ab = rb + 3; Ab > o;) {
											if (0 === j) break a;
											j--, l += e[h++] << o, o += 8
										}
										l >>>= rb, o -= rb, xb = 0, r = 3 + (7 & l), l >>>= 3, o -= 3
									} else {
										for (Ab = rb + 7; Ab > o;) {
											if (0 === j) break a;
											j--, l += e[h++] << o, o += 8
										}
										l >>>= rb, o -= rb, xb = 0, r = 11 + (127 & l), l >>>= 7, o -= 7
									} if (c.have + r > c.nlen + c.ndist) {
										a.msg = "invalid bit length repeat", c.mode = mb;
										break
									}
									for (; r--;) c.lens[c.have++] = xb
								}
							}
							if (c.mode === mb) break;
							if (0 === c.lens[256]) {
								a.msg = "invalid code -- missing end-of-block", c.mode = mb;
								break
							}
							if (s.arraySet(c.lencode, c.codes, 0, c.codes.length, 0), c.lenbits = 9, zb = new f(y, c.lens, 0, c.nlen, c.lencode, 0, c.lenbits, c.work), yb = w(zb), c.lenbits = zb.bits, yb) {
								a.msg = "invalid literal/lengths set", c.mode = mb;
								break
							}
							if (c.distbits = 6, s.arraySet(c.distcode, c.codes, 0, c.codes.length, 0), zb = new f(z, c.lens, c.nlen, c.ndist, c.distcode, 0, c.distbits, c.work), yb = w(zb), c.distbits = zb.bits, yb) {
								a.msg = "invalid distances set", c.mode = mb;
								break
							}
							if (c.mode = cb, b === C) break a;
						case cb:
							c.mode = db;
						case db:
							if (j >= 6 && k >= 258) {
								a.next_out_index = i, a.avail_out = k, a.next_in_index = h, a.avail_in = j, c.hold = l, c.bits = o, v(a, q), i = a.next_out_index, g = a.next_out, k = a.avail_out, h = a.next_in_index, e = a.next_in, j = a.avail_in, l = c.hold, o = c.bits, c.mode === W && (c.back = -1);
								break
							}
							for (c.back = 0; Bb = c.lencode[l & (1 << c.lenbits) - 1], rb = Bb >>> 24, sb = Bb >>> 16 & 255, tb = 65535 & Bb, !(o >= rb);) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							if (sb && 0 === (240 & sb)) {
								for (ub = rb, vb = sb, wb = tb; Bb = c.lencode[wb + ((l & (1 << ub + vb) - 1) >> ub)], rb = Bb >>> 24, sb = Bb >>> 16 & 255, tb = 65535 & Bb, !(o >= ub + rb);) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								l >>>= ub, o -= ub, c.back += ub
							}
							if (l >>>= rb, o -= rb, c.back += rb, c.length = tb, 0 === sb) {
								c.mode = ib;
								break
							}
							if (32 & sb) {
								c.back = -1, c.mode = W;
								break
							}
							if (64 & sb) {
								a.msg = "invalid literal/length code", c.mode = mb;
								break
							}
							c.extra = 15 & sb, c.mode = eb;
						case eb:
							if (c.extra) {
								for (Ab = c.extra; Ab > o;) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								c.length += l & (1 << c.extra) - 1, l >>>= c.extra, o -= c.extra, c.back += c.extra
							}
							c.was = c.length, c.mode = fb;
						case fb:
							for (; Bb = c.distcode[l & (1 << c.distbits) - 1], rb = Bb >>> 24, sb = Bb >>> 16 & 255, tb = 65535 & Bb, !(o >= rb);) {
								if (0 === j) break a;
								j--, l += e[h++] << o, o += 8
							}
							if (0 === (240 & sb)) {
								for (ub = rb, vb = sb, wb = tb; Bb = c.distcode[wb + ((l & (1 << ub + vb) - 1) >> ub)], rb = Bb >>> 24, sb = Bb >>> 16 & 255, tb = 65535 & Bb, !(o >= ub + rb);) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								l >>>= ub, o -= ub, c.back += ub
							}
							if (l >>>= rb, o -= rb, c.back += rb, 64 & sb) {
								a.msg = "invalid distance code", c.mode = mb;
								break
							}
							c.offset = tb, c.extra = 15 & sb, c.mode = gb;
						case gb:
							if (c.extra) {
								for (Ab = c.extra; Ab > o;) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								c.offset += l & (1 << c.extra) - 1, l >>>= c.extra, o -= c.extra, c.back += c.extra
							}
							if (c.offset > c.dmax) {
								a.msg = "invalid distance too far back", c.mode = mb;
								break
							}
							c.mode = hb;
						case hb:
							if (0 === k) break a;
							if (r = q - k, c.offset > r) {
								if (r = c.offset - r, r > c.whave && c.sane) {
									a.msg = "invalid distance too far back", c.mode = mb;
									break
								}
								r > c.wnext ? (r -= c.wnext, pb = c.wsize - r) : pb = c.wnext - r, r > c.length && (r = c.length), qb = c.window
							} else qb = g, pb = i - c.offset, r = c.length;
							r > k && (r = k), k -= r, c.length -= r;
							do g[i++] = qb[pb++]; while (--r);
							0 === c.length && (c.mode = db);
							break;
						case ib:
							if (0 === k) break a;
							g[i++] = c.length, k--, c.mode = db;
							break;
						case jb:
							if (c.wrap) {
								for (; 32 > o;) {
									if (0 === j) break a;
									j--, l |= e[h++] << o, o += 8
								}
								if (q -= k, a.total_out += q, c.total += q, q && (a.adler = c.check = c.flags ? u(c.check, g, q, i - q) : t(c.check, g, q, i - q)), q = k, (c.flags ? l : d(l)) !== c.check) {
									a.msg = "incorrect data check", c.mode = mb;
									break
								}
								l = 0, o = 0
							}
							c.mode = kb;
						case kb:
							if (c.wrap && c.flags) {
								for (; 32 > o;) {
									if (0 === j) break a;
									j--, l += e[h++] << o, o += 8
								}
								if (l !== (4294967295 & c.total)) {
									a.msg = "incorrect length check", c.mode = mb;
									break
								}
								l = 0, o = 0
							}
							c.mode = lb;
						case lb:
							yb = E;
							break a;
						case mb:
							yb = H;
							break a;
						case nb:
							return I;
						case ob:
						default:
							return G
					}
					return a.next_out_index = i, a.avail_out = k, a.next_in_index = h, a.avail_in = j, c.hold = l, c.bits = o, (c.wsize || q !== a.avail_out && c.mode < mb && (c.mode < jb || b !== A)) && n(a, a.next_out, a.next_out_index, q - a.avail_out) ? (c.mode = nb, I) : (p -= a.avail_in, q -= a.avail_out, a.total_in += p, a.total_out += q, c.total += q, c.wrap && q && (a.adler = c.check = c.flags ? u(c.check, g, q, a.next_out_index - q) : t(c.check, g, q, a.next_out_index - q)), a.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === W ? 128 : 0) + (c.mode === cb || c.mode === Z ? 256 : 0), (0 === p && 0 === q || b === A) && yb === D && (yb = J), yb)
				}

				function p(a) {
					var b = a.state;
					return b.window && (b.window = null), a.state = null, D
				}
				var q, r, s = a("./utils"),
					t = a("./adler32"),
					u = a("./crc32"),
					v = a("./inffast"),
					w = a("./inftrees"),
					x = 0,
					y = 1,
					z = 2,
					A = 4,
					B = 5,
					C = 6,
					D = 0,
					E = 1,
					F = 2,
					G = -2,
					H = -3,
					I = -4,
					J = -5,
					K = 8,
					L = 1,
					M = 2,
					N = 3,
					O = 4,
					P = 5,
					Q = 6,
					R = 7,
					S = 8,
					T = 9,
					U = 10,
					V = 11,
					W = 12,
					X = 13,
					Y = 14,
					Z = 15,
					$ = 16,
					_ = 17,
					ab = 18,
					bb = 19,
					cb = 20,
					db = 21,
					eb = 22,
					fb = 23,
					gb = 24,
					hb = 25,
					ib = 26,
					jb = 27,
					kb = 28,
					lb = 29,
					mb = 30,
					nb = 31,
					ob = 32,
					pb = 852,
					qb = 592,
					rb = pb + qb,
					sb = 15,
					tb = sb,
					ub = !0;
				c.inflateReset = h, c.inflateReset2 = i, c.inflateResetKeep = g, c.inflateInit = k, c.inflateInit2 = j, c.inflatePrime = l, c.inflate = o, c.inflateEnd = p, c.inflateInfo = "pako inflate (from Nodeca project)"
			}, {
				"./adler32": 22,
				"./crc32": 24,
				"./inffast": 26,
				"./inftrees": 28,
				"./utils": 31
			}
		],
		28: [
			function(a, b) {
				"use strict";
				var c = a("./utils"),
					d = 15,
					e = 852,
					f = 592,
					g = 0,
					h = 1,
					i = 2,
					j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
					k = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
					l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
					m = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
				b.exports = function(a) {
					var b, n, o, p, q, r, s, t, u, v = a.type,
						w = a.lens,
						x = a.codes,
						y = a.table,
						z = a.bits,
						A = a.work,
						B = 0,
						C = 0,
						D = 0,
						E = 0,
						F = 0,
						G = 0,
						H = 0,
						I = 0,
						J = 0,
						K = 0,
						L = null,
						M = 0,
						N = new c.Buf16(d + 1),
						O = new c.Buf16(d + 1),
						P = null,
						Q = 0;
					for (B = 0; d >= B; B++) N[B] = 0;
					for (C = 0; x > C; C++) N[w[a.lens_index + C]]++;
					for (F = z, E = d; E >= 1 && 0 === N[E]; E--);
					if (F > E && (F = E), 0 === E) return y[a.table_index++] = 20971520, y[a.table_index++] = 20971520, a.bits = 1, 0;
					for (D = 1; E > D && 0 === N[D]; D++);
					for (D > F && (F = D), I = 1, B = 1; d >= B; B++)
						if (I <<= 1, I -= N[B], 0 > I) return -1;
					if (I > 0 && (v === g || 1 !== E)) return -1;
					for (O[1] = 0, B = 1; d > B; B++) O[B + 1] = O[B] + N[B];
					for (C = 0; x > C; C++) 0 !== w[a.lens_index + C] && (A[O[w[a.lens_index + C]]++] = C);
					switch (v) {
						case g:
							L = P = A, r = 19;
							break;
						case h:
							L = j, M -= 257, P = k, Q -= 257, r = 256;
							break;
						default:
							L = l, P = m, r = -1
					}
					if (K = 0, C = 0, B = D, q = a.table_index, G = F, H = 0, o = -1, J = 1 << F, p = J - 1, v === h && J > e || v === i && J > f) return 1;
					for (var R = 0;;) {
						R++, s = B - H, A[C] < r ? (t = 0, u = A[C]) : A[C] > r ? (t = P[Q + A[C]], u = L[M + A[C]]) : (t = 96, u = 0), b = 1 << B - H, n = 1 << G, D = n;
						do n -= b, y[q + (K >> H) + n] = s << 24 | t << 16 | u | 0; while (0 !== n);
						for (b = 1 << B - 1; K & b;) b >>= 1;
						if (0 !== b ? (K &= b - 1, K += b) : K = 0, C++, 0 === --N[B]) {
							if (B === E) break;
							B = w[a.lens_index + A[C]]
						}
						if (B > F && (K & p) !== o) {
							for (0 === H && (H = F), q += D, G = B - H, I = 1 << G; E > G + H && (I -= N[G + H], !(0 >= I));) G++, I <<= 1;
							if (J += 1 << G, v === h && J > e || v === i && J > f) return 1;
							o = K & p, y[o] = F << 24 | G << 16 | q - a.table_index
						}
					}
					return 0 !== K && (y[q + K] = B - H << 24 | 64 << 16 | 0), a.table_index += J, a.bits = F, 0
				}
			}, {
				"./utils": 31
			}
		],
		29: [
			function(a, b) {
				"use strict";
				b.exports = {
					2: "need dictionary",
					1: "stream end",
					0: "",
					"-1": "file error",
					"-2": "stream error",
					"-3": "data error",
					"-4": "insufficient memory",
					"-5": "buffer error",
					"-6": "incompatible version"
				}
			}, {}
		],
		30: [
			function(a, b, c) {
				"use strict";

				function d(a) {
					for (var b = a.length; --b;) a[b] = 0
				}

				function e(a) {
					return 256 > a ? gb[a] : gb[256 + (a >>> 7)]
				}

				function f(a, b) {
					a.pending_buf[a.pending++] = 255 & b, a.pending_buf[a.pending++] = b >>> 8 & 255
				}

				function g(a, b, c) {
					a.bi_valid > V - c ? (a.bi_buf |= b << a.bi_valid & 65535, f(a, a.bi_buf), a.bi_buf = b >> V - a.bi_valid, a.bi_valid += c - V) : (a.bi_buf |= b << a.bi_valid & 65535, a.bi_valid += c)
				}

				function h(a, b, c) {
					g(a, c[2 * b], c[2 * b + 1])
				}

				function i(a, b) {
					var c = 0;
					do c |= 1 & a, a >>>= 1, c <<= 1; while (--b > 0);
					return c >>> 1
				}

				function j(a) {
					16 === a.bi_valid ? (f(a, a.bi_buf), a.bi_buf = 0, a.bi_valid = 0) : a.bi_valid >= 8 && (a.pending_buf[a.pending++] = 255 & a.bi_buf, a.bi_buf >>= 8, a.bi_valid -= 8)
				}

				function k(a, b) {
					var c, d, e, f, g, h, i = b.dyn_tree,
						j = b.max_code,
						k = b.stat_desc.static_tree,
						l = b.stat_desc.has_stree,
						m = b.stat_desc.extra_bits,
						n = b.stat_desc.extra_base,
						o = b.stat_desc.max_length,
						p = 0;
					for (f = 0; U >= f; f++) a.bl_count[f] = 0;
					for (i[2 * a.heap[a.heap_max] + 1] = 0, c = a.heap_max + 1; T > c; c++) d = a.heap[c], f = i[2 * i[2 * d + 1] + 1] + 1, f > o && (f = o, p++), i[2 * d + 1] = f, d > j || (a.bl_count[f]++, g = 0, d >= n && (g = m[d - n]), h = i[2 * d], a.opt_len += h * (f + g), l && (a.static_len += h * (k[2 * d + 1] + g)));
					if (0 !== p) {
						do {
							for (f = o - 1; 0 === a.bl_count[f];) f--;
							a.bl_count[f]--, a.bl_count[f + 1] += 2, a.bl_count[o]--, p -= 2
						} while (p > 0);
						for (f = o; 0 !== f; f--)
							for (d = a.bl_count[f]; 0 !== d;) e = a.heap[--c], e > j || (i[2 * e + 1] !== f && (a.opt_len += (f - i[2 * e + 1]) * i[2 * e], i[2 * e + 1] = f), d--)
					}
				}

				function l(a, b, c) {
					var d, e, f = new Array(U + 1),
						g = 0;
					for (d = 1; U >= d; d++) f[d] = g = g + c[d - 1] << 1;
					for (e = 0; b >= e; e++) {
						var h = a[2 * e + 1];
						0 !== h && (a[2 * e] = i(f[h]++, h))
					}
				}

				function m() {
					var a, b, c, d, e, f = new Array(U + 1);
					for (c = 0, d = 0; O - 1 > d; d++)
						for (ib[d] = c, a = 0; a < 1 << _[d]; a++) hb[c++] = d;
					for (hb[c - 1] = d, e = 0, d = 0; 16 > d; d++)
						for (jb[d] = e, a = 0; a < 1 << ab[d]; a++) gb[e++] = d;
					for (e >>= 7; R > d; d++)
						for (jb[d] = e << 7, a = 0; a < 1 << ab[d] - 7; a++) gb[256 + e++] = d;
					for (b = 0; U >= b; b++) f[b] = 0;
					for (a = 0; 143 >= a;) eb[2 * a + 1] = 8, a++, f[8]++;
					for (; 255 >= a;) eb[2 * a + 1] = 9, a++, f[9]++;
					for (; 279 >= a;) eb[2 * a + 1] = 7, a++, f[7]++;
					for (; 287 >= a;) eb[2 * a + 1] = 8, a++, f[8]++;
					for (l(eb, Q + 1, f), a = 0; R > a; a++) fb[2 * a + 1] = 5, fb[2 * a] = i(a, 5);
					kb = new nb(eb, _, P + 1, Q, U), lb = new nb(fb, ab, 0, R, U), mb = new nb(new Array(0), bb, 0, S, W)
				}

				function n(a) {
					var b;
					for (b = 0; Q > b; b++) a.dyn_ltree[2 * b] = 0;
					for (b = 0; R > b; b++) a.dyn_dtree[2 * b] = 0;
					for (b = 0; S > b; b++) a.bl_tree[2 * b] = 0;
					a.dyn_ltree[2 * X] = 1, a.opt_len = a.static_len = 0, a.last_lit = a.matches = 0
				}

				function o(a) {
					a.bi_valid > 8 ? f(a, a.bi_buf) : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf), a.bi_buf = 0, a.bi_valid = 0
				}

				function p(a, b, c, d) {
					o(a), d && (f(a, c), f(a, ~c)), E.arraySet(a.pending_buf, a.window, b, c, a.pending), a.pending += c
				}

				function q(a, b, c, d) {
					var e = 2 * b,
						f = 2 * c;
					return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
				}

				function r(a, b, c) {
					for (var d = a.heap[c], e = c << 1; e <= a.heap_len && (e < a.heap_len && q(b, a.heap[e + 1], a.heap[e], a.depth) && e++, !q(b, d, a.heap[e], a.depth));) a.heap[c] = a.heap[e], c = e, e <<= 1;
					a.heap[c] = d
				}

				function s(a, b, c) {
					var d, f, i, j, k = 0;
					if (0 !== a.last_lit)
						do d = a.pending_buf[a.d_buf + 2 * k] << 8 | a.pending_buf[a.d_buf + 2 * k + 1], f = a.pending_buf[a.l_buf + k], k++, 0 === d ? h(a, f, b) : (i = hb[f], h(a, i + P + 1, b), j = _[i], 0 !== j && (f -= ib[i], g(a, f, j)), d--, i = e(d), h(a, i, c), j = ab[i], 0 !== j && (d -= jb[i], g(a, d, j))); while (k < a.last_lit);
					h(a, X, b)
				}

				function t(a, b) {
					var c, d, e, f = b.dyn_tree,
						g = b.stat_desc.static_tree,
						h = b.stat_desc.has_stree,
						i = b.stat_desc.elems,
						j = -1;
					for (a.heap_len = 0, a.heap_max = T, c = 0; i > c; c++) 0 !== f[2 * c] ? (a.heap[++a.heap_len] = j = c, a.depth[c] = 0) : f[2 * c + 1] = 0;
					for (; a.heap_len < 2;) e = a.heap[++a.heap_len] = 2 > j ? ++j : 0, f[2 * e] = 1, a.depth[e] = 0, a.opt_len--, h && (a.static_len -= g[2 * e + 1]);
					for (b.max_code = j, c = a.heap_len >> 1; c >= 1; c--) r(a, f, c);
					e = i;
					do c = a.heap[1], a.heap[1] = a.heap[a.heap_len--], r(a, f, 1), d = a.heap[1], a.heap[--a.heap_max] = c, a.heap[--a.heap_max] = d, f[2 * e] = f[2 * c] + f[2 * d], a.depth[e] = (a.depth[c] >= a.depth[d] ? a.depth[c] : a.depth[d]) + 1, f[2 * c + 1] = f[2 * d + 1] = e, a.heap[1] = e++, r(a, f, 1); while (a.heap_len >= 2);
					a.heap[--a.heap_max] = a.heap[1], k(a, b), l(f, j, a.bl_count)
				}

				function u(a, b, c) {
					var d, e, f = -1,
						g = b[1],
						h = 0,
						i = 7,
						j = 4;
					for (0 === g && (i = 138, j = 3), b[2 * (c + 1) + 1] = 65535, d = 0; c >= d; d++) e = g, g = b[2 * (d + 1) + 1], ++h < i && e === g || (j > h ? a.bl_tree[2 * e] += h : 0 !== e ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[2 * Y]++) : 10 >= h ? a.bl_tree[2 * Z]++ : a.bl_tree[2 * $]++, h = 0, f = e, 0 === g ? (i = 138, j = 3) : e === g ? (i = 6, j = 3) : (i = 7, j = 4))
				}

				function v(a, b, c) {
					var d, e, f = -1,
						i = b[1],
						j = 0,
						k = 7,
						l = 4;
					for (0 === i && (k = 138, l = 3), d = 0; c >= d; d++)
						if (e = i, i = b[2 * (d + 1) + 1], !(++j < k && e === i)) {
							if (l > j) {
								do h(a, e, a.bl_tree); while (0 !== --j)
							} else 0 !== e ? (e !== f && (h(a, e, a.bl_tree), j--), h(a, Y, a.bl_tree), g(a, j - 3, 2)) : 10 >= j ? (h(a, Z, a.bl_tree), g(a, j - 3, 3)) : (h(a, $, a.bl_tree), g(a, j - 11, 7));
							j = 0, f = e, 0 === i ? (k = 138, l = 3) : e === i ? (k = 6, l = 3) : (k = 7, l = 4)
						}
				}

				function w(a) {
					var b;
					for (u(a, a.dyn_ltree, a.l_desc.max_code), u(a, a.dyn_dtree, a.d_desc.max_code), t(a, a.bl_desc), b = S - 1; b >= 3 && 0 === a.bl_tree[2 * cb[b] + 1]; b--);
					return a.opt_len += 3 * (b + 1) + 5 + 5 + 4, b
				}

				function x(a, b, c, d) {
					var e;
					for (g(a, b - 257, 5), g(a, c - 1, 5), g(a, d - 4, 4), e = 0; d > e; e++) g(a, a.bl_tree[2 * cb[e] + 1], 3);
					v(a, a.dyn_ltree, b - 1), v(a, a.dyn_dtree, c - 1)
				}

				function y(a) {
					var b, c = 4093624447;
					for (b = 0; 31 >= b; b++, c >>>= 1)
						if (1 & c && 0 !== a.dyn_ltree[2 * b]) return G;
					if (0 !== a.dyn_ltree[18] || 0 !== a.dyn_ltree[20] || 0 !== a.dyn_ltree[26]) return H;
					for (b = 32; P > b; b++)
						if (0 !== a.dyn_ltree[2 * b]) return H;
					return G
				}

				function z(a) {
					pb || (m(), pb = !0), a.l_desc = new ob(a.dyn_ltree, kb), a.d_desc = new ob(a.dyn_dtree, lb), a.bl_desc = new ob(a.bl_tree, mb), a.bi_buf = 0, a.bi_valid = 0, n(a)
				}

				function A(a, b, c, d) {
					g(a, (J << 1) + (d ? 1 : 0), 3), p(a, b, c, !0)
				}

				function B(a) {
					g(a, K << 1, 3), h(a, X, eb), j(a)
				}

				function C(a, b, c, d) {
					var e, f, h = 0;
					a.level > 0 ? (a.strm.data_type === I && (a.strm.data_type = y(a)), t(a, a.l_desc), t(a, a.d_desc), h = w(a), e = a.opt_len + 3 + 7 >>> 3, f = a.static_len + 3 + 7 >>> 3, e >= f && (e = f)) : e = f = c + 5, e >= c + 4 && -1 !== b ? A(a, b, c, d) : a.strategy === F || f === e ? (g(a, (K << 1) + (d ? 1 : 0), 3), s(a, eb, fb)) : (g(a, (L << 1) + (d ? 1 : 0), 3), x(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, h + 1), s(a, a.dyn_ltree, a.dyn_dtree)), n(a), d && o(a)
				}

				function D(a, b, c) {
					return a.pending_buf[a.d_buf + 2 * a.last_lit] = b >>> 8 & 255, a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = 255 & b, a.pending_buf[a.l_buf + a.last_lit] = 255 & c, a.last_lit++, 0 === b ? a.dyn_ltree[2 * c]++ : (a.matches++, b--, a.dyn_ltree[2 * (hb[c] + P + 1)]++, a.dyn_dtree[2 * e(b)]++), a.last_lit === a.lit_bufsize - 1
				}
				var E = a("./utils"),
					F = 4,
					G = 0,
					H = 1,
					I = 2,
					J = 0,
					K = 1,
					L = 2,
					M = 3,
					N = 258,
					O = 29,
					P = 256,
					Q = P + 1 + O,
					R = 30,
					S = 19,
					T = 2 * Q + 1,
					U = 15,
					V = 16,
					W = 7,
					X = 256,
					Y = 16,
					Z = 17,
					$ = 18,
					_ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
					ab = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
					bb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
					cb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
					db = 512,
					eb = new Array(2 * (Q + 2));
				d(eb);
				var fb = new Array(2 * R);
				d(fb);
				var gb = new Array(db);
				d(gb);
				var hb = new Array(N - M + 1);
				d(hb);
				var ib = new Array(O);
				d(ib);
				var jb = new Array(R);
				d(jb);
				var kb, lb, mb, nb = function(a, b, c, d, e) {
						this.static_tree = a, this.extra_bits = b, this.extra_base = c, this.elems = d, this.max_length = e, this.has_stree = a && a.length
					},
					ob = function(a, b) {
						this.dyn_tree = a, this.max_code = 0, this.stat_desc = b
					},
					pb = !1;
				c._tr_init = z, c._tr_stored_block = A, c._tr_flush_block = C, c._tr_tally = D, c._tr_align = B
			}, {
				"./utils": 31
			}
		],
		31: [
			function(a, b, c) {
				"use strict";
				var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
				c.assign = function(a) {
					for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
						var c = b.shift();
						if (c) {
							if ("object" != typeof c) throw new TypeError(c + "must be non-object");
							for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
						}
					}
					return a
				}, c.shrinkBuf = function(a, b) {
					return a.length === b ? a : a.subarray ? a.subarray(0, b) : (a.length = b, a)
				};
				var e = {
						arraySet: function(a, b, c, d, e) {
							if (b.subarray) return void a.set(b.subarray(c, c + d), e);
							for (var f = 0; d > f; f++) a[e + f] = b[c + f]
						},
						flattenChunks: function(a) {
							var b, c, d, e, f, g;
							for (d = 0, b = 0, c = a.length; c > b; b++) d += a[b].length;
							for (g = new Uint8Array(d), e = 0, b = 0, c = a.length; c > b; b++) f = a[b], g.set(f, e), e += f.length;
							return g
						}
					},
					f = {
						arraySet: function(a, b, c, d, e) {
							for (var f = 0; d > f; f++) a[e + f] = b[c + f]
						},
						flattenChunks: function(a) {
							return [].concat.apply([], a)
						}
					};
				c.setTyped = function(a) {
					a ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, e)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, f))
				}, c.setTyped(d)
			}, {}
		],
		32: [
			function(a, b) {
				"use strict";

				function c() {
					this.next_in = null, this.next_in_index = 0, this.avail_in = 0, this.total_in = 0, this.next_out = null, this.next_out_index = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
				}
				b.exports = c
			}, {}
		]
	}, {}, [7])(7)
}),
function(a) {
	function b(a, b) {
		for (var c = a.length; c--;)
			if (a[c] === b) return c;
		return -1
	}

	function c(a) {
		var c, d, e, g, h, i;
		if (d = (a.target || a.srcElement).tagName, c = a.keyCode, (93 == c || 224 == c) && (c = 91), c in k) {
			k[c] = !0;
			for (g in m) m[g] == c && (f[g] = !0)
		} else if ("INPUT" != d && "SELECT" != d && "TEXTAREA" != d && c in j)
			for (h = 0; h < j[c].length; h++)
				if (e = j[c][h], e.scope == l || "all" == e.scope) {
					i = e.mods.length > 0;
					for (g in k)(!k[g] && b(e.mods, +g) > -1 || k[g] && -1 == b(e.mods, +g)) && (i = !1);
					(0 != e.mods.length || k[16] || k[18] || k[17] || k[91]) && !i || e.method(a, e) === !1 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.stopPropagation && a.stopPropagation(), a.cancelBubble && (a.cancelBubble = !0))
				}
	}

	function d(a) {
		var b, c = a.keyCode;
		if ((93 == c || 224 == c) && (c = 91), c in k) {
			k[c] = !1;
			for (b in m) m[b] == c && (f[b] = !1)
		}
	}

	function e() {
		for (i in k) k.hasOwnProperty(i) && (k[i] = !1)
	}

	function f(a, b, c) {
		var d, e, f, g;
		for (void 0 === c && (c = b, b = "all"), a = a.replace(/\s/g, ""), d = a.split(","), "" == d[d.length - 1] && (d[d.length - 2] += ","), f = 0; f < d.length; f++) {
			if (e = [], a = d[f].split("+"), a.length > 1) {
				for (e = a.slice(0, a.length - 1), g = 0; g < e.length; g++) e[g] = m[e[g]];
				a = [a[a.length - 1]]
			}
			a = a[0], a = n[a] || a.toUpperCase().charCodeAt(0), a in j || (j[a] = []), j[a].push({
				shortcut: d[f],
				scope: b,
				method: c,
				key: d[f],
				mods: e
			})
		}
	}

	function g(a) {
		l = a || "all"
	}

	function h(a, b, c) {
		a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, function() {
			c(window.event)
		})
	}
	var i, j = {},
		k = {
			16: !1,
			18: !1,
			17: !1,
			91: !1
		},
		l = "all",
		m = {
			"⇧": 16,
			shift: 16,
			"⌥": 18,
			alt: 18,
			option: 18,
			"⌃": 17,
			ctrl: 17,
			control: 17,
			"⌘": 91,
			command: 91
		},
		n = {
			backspace: 8,
			tab: 9,
			clear: 12,
			enter: 13,
			"return": 13,
			esc: 27,
			escape: 27,
			space: 32,
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			del: 46,
			"delete": 46,
			home: 36,
			end: 35,
			pageup: 33,
			pagedown: 34,
			",": 188,
			".": 190,
			"/": 191,
			"`": 192,
			"-": 189,
			"=": 187,
			";": 186,
			"'": 222,
			"[": 219,
			"]": 221,
			"\\": 220
		};
	for (i = 1; 20 > i; i++) m["f" + i] = 111 + i;
	for (i in m) f[i] = !1;
	h(document, "keydown", c), h(document, "keyup", d), h(window, "focus", e), a.key = f, a.key.setScope = g, "undefined" != typeof module && (module.exports = key)
}(this),
function() {
	function a(a, b, c) {
		for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)
			if (a[d] === b) return d;
		return -1
	}

	function b(b, c) {
		var d = typeof c;
		if (b = b.cache, "boolean" == d || null == c) return b[c] ? 0 : -1;
		"number" != d && "string" != d && (d = "object");
		var e = "number" == d ? c : U + c;
		return b = (b = b[d]) && b[e], "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
	}

	function c(a) {
		var b = this.cache,
			c = typeof a;
		if ("boolean" == c || null == a) b[a] = !0;
		else {
			"number" != c && "string" != c && (c = "object");
			var d = "number" == c ? a : U + a,
				e = b[c] || (b[c] = {});
			"object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
		}
	}

	function d(a) {
		var b = -1,
			d = a.length,
			e = a[0],
			g = a[d / 2 | 0],
			h = a[d - 1];
		if (e && "object" == typeof e && g && "object" == typeof g && h && "object" == typeof h) return !1;
		var i = f();
		i["false"] = i["null"] = i["true"] = i.undefined = !1;
		var j = f();
		for (j.array = a, j.cache = i, j.push = c; ++b < d;) j.push(a[b]);
		return j
	}

	function e() {
		return S.pop() || []
	}

	function f() {
		return T.pop() || {
			array: null,
			cache: null,
			"false": !1,
			"null": !1,
			number: null,
			object: null,
			push: null,
			string: null,
			"true": !1,
			undefined: !1
		}
	}

	function g(a) {
		a.length = 0, S.length < W && S.push(a)
	}

	function h(a) {
		var b = a.cache;
		b && h(b), a.array = a.cache = a.object = a.number = a.string = null, T.length < W && T.push(a)
	}

	function i(a, b, c) {
		b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
		for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
		return f
	}

	function j() {}

	function k(a) {
		function b() {
			if (d) {
				var a = i(d);
				tb.apply(a, arguments)
			}
			if (this instanceof b) {
				var f = m(c.prototype),
					g = c.apply(f, a || arguments);
				return A(g) ? g : f
			}
			return c.apply(e, a || arguments)
		}
		var c = a[0],
			d = a[2],
			e = a[4];
		return b
	}

	function l(a, b, c, d, f) {
		if (c) {
			var h = c(a);
			if ("undefined" != typeof h) return h
		}
		var j = A(a);
		if (!j) return a;
		var k = qb.call(a);
		if (!fb[k]) return a;
		var m = Ab[k];
		switch (k) {
			case $:
			case _:
				return new m(+a);
			case bb:
			case eb:
				return new m(a);
			case db:
				return h = m(a.source, X.exec(a)), h.lastIndex = a.lastIndex, h
		}
		var n = Cb(a);
		if (b) {
			var o = !d;
			d || (d = e()), f || (f = e());
			for (var p = d.length; p--;)
				if (d[p] == a) return f[p];
			h = n ? m(a.length) : {}
		} else h = n ? i(a) : Gb({}, a);
		return n && (sb.call(a, "index") && (h.index = a.index), sb.call(a, "input") && (h.input = a.input)), b ? (d.push(a), f.push(h), (n ? Fb : Ib)(a, function(a, e) {
			h[e] = l(a, b, c, d, f)
		}), o && (g(d), g(f)), h) : h
	}

	function m(a) {
		return A(a) ? wb(a) : {}
	}

	function n(a, b, c) {
		if ("function" != typeof a) return O;
		if ("undefined" == typeof b || !("prototype" in a)) return a;
		switch (c) {
			case 1:
				return function(c) {
					return a.call(b, c)
				};
			case 2:
				return function(c, d) {
					return a.call(b, c, d)
				};
			case 3:
				return function(c, d, e) {
					return a.call(b, c, d, e)
				};
			case 4:
				return function(c, d, e, f) {
					return a.call(b, c, d, e, f)
				}
		}
		return K(a, b)
	}

	function o(a) {
		function b() {
			var a = j ? g : this;
			if (e) {
				var q = i(e);
				tb.apply(q, arguments)
			}
			if ((f || l) && (q || (q = i(arguments)), f && tb.apply(q, f), l && q.length < h)) return d |= 16, o([c, n ? d : -4 & d, q, null, g, h]);
			if (q || (q = arguments), k && (c = a[p]), this instanceof b) {
				a = m(c.prototype);
				var r = c.apply(a, q);
				return A(r) ? r : a
			}
			return c.apply(a, q)
		}
		var c = a[0],
			d = a[1],
			e = a[2],
			f = a[3],
			g = a[4],
			h = a[5],
			j = 1 & d,
			k = 2 & d,
			l = 4 & d,
			n = 8 & d,
			p = c;
		return b
	}

	function p(c, e) {
		var f = -1,
			g = u(),
			i = c ? c.length : 0,
			j = i >= V && g === a,
			k = [];
		if (j) {
			var l = d(e);
			l ? (g = b, e = l) : j = !1
		}
		for (; ++f < i;) {
			var m = c[f];
			g(e, m) < 0 && k.push(m)
		}
		return j && h(e), k
	}

	function q(a, b, c, d) {
		for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) {
			var h = a[e];
			if (h && "object" == typeof h && "number" == typeof h.length && (Cb(h) || w(h))) {
				b || (h = q(h, b, c));
				var i = -1,
					j = h.length,
					k = g.length;
				for (g.length += j; ++i < j;) g[k++] = h[i]
			} else c || g.push(h)
		}
		return g
	}

	function r(a, b, c, d, f, h) {
		if (c) {
			var i = c(a, b);
			if ("undefined" != typeof i) return !!i
		}
		if (a === b) return 0 !== a || 1 / a == 1 / b;
		var j = typeof a,
			k = typeof b;
		if (!(a !== a || a && hb[j] || b && hb[k])) return !1;
		if (null == a || null == b) return a === b;
		var l = qb.call(a),
			m = qb.call(b);
		if (l == Y && (l = cb), m == Y && (m = cb), l != m) return !1;
		switch (l) {
			case $:
			case _:
				return +a == +b;
			case bb:
				return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
			case db:
			case eb:
				return a == String(b)
		}
		var n = l == Z;
		if (!n) {
			var o = sb.call(a, "__wrapped__"),
				p = sb.call(b, "__wrapped__");
			if (o || p) return r(o ? a.__wrapped__ : a, p ? b.__wrapped__ : b, c, d, f, h);
			if (l != cb) return !1;
			var q = a.constructor,
				s = b.constructor;
			if (q != s && !(z(q) && q instanceof q && z(s) && s instanceof s) && "constructor" in a && "constructor" in b) return !1
		}
		var t = !f;
		f || (f = e()), h || (h = e());
		for (var u = f.length; u--;)
			if (f[u] == a) return h[u] == b;
		var v = 0;
		if (i = !0, f.push(a), h.push(b), n) {
			if (u = a.length, v = b.length, i = v == u, i || d)
				for (; v--;) {
					var w = u,
						x = b[v];
					if (d)
						for (; w-- && !(i = r(a[w], x, c, d, f, h)););
					else if (!(i = r(a[v], x, c, d, f, h))) break
				}
		} else Hb(b, function(b, e, g) {
			return sb.call(g, e) ? (v++, i = sb.call(a, e) && r(a[e], b, c, d, f, h)) : void 0
		}), i && !d && Hb(a, function(a, b, c) {
			return sb.call(c, b) ? i = --v > -1 : void 0
		});
		return f.pop(), h.pop(), t && (g(f), g(h)), i
	}

	function s(c, f, i) {
		var j = -1,
			k = u(),
			l = c ? c.length : 0,
			m = [],
			n = !f && l >= V && k === a,
			o = i || n ? e() : m;
		if (n) {
			var p = d(o);
			k = b, o = p
		}
		for (; ++j < l;) {
			var q = c[j],
				r = i ? i(q, j, c) : q;
			(f ? !j || o[o.length - 1] !== r : k(o, r) < 0) && ((i || n) && o.push(r), m.push(q))
		}
		return n ? (g(o.array), h(o)) : i && g(o), m
	}

	function t(a, b, c, d, e, f) {
		var g = 2 & b,
			h = 16 & b,
			i = 32 & b;
		if (!g && !z(a)) throw new TypeError;
		h && !c.length && (b &= -17, h = c = !1), i && !d.length && (b &= -33, i = d = !1);
		var j = 1 == b || 17 === b ? k : o;
		return j([a, b, c, d, e, f])
	}

	function u() {
		var b = (b = j.indexOf) === G ? a : b;
		return b
	}

	function v(a) {
		return "function" == typeof a && rb.test(a)
	}

	function w(a) {
		return a && "object" == typeof a && "number" == typeof a.length && qb.call(a) == Y || !1
	}

	function x(a, b, c) {
		return l(a, !0, "function" == typeof b && n(b, c, 1))
	}

	function y(a, b, c, d) {
		return r(a, b, "function" == typeof c && n(c, d, 2))
	}

	function z(a) {
		return "function" == typeof a
	}

	function A(a) {
		return !(!a || !hb[typeof a])
	}

	function B(a) {
		return "string" == typeof a || a && "object" == typeof a && qb.call(a) == eb || !1
	}

	function C(a, b, c) {
		var d = {};
		if ("function" != typeof b)
			for (var e = -1, f = q(arguments, !0, !1, 1), g = A(a) ? f.length : 0; ++e < g;) {
				var h = f[e];
				h in a && (d[h] = a[h])
			} else b = j.createCallback(b, c, 3), Hb(a, function(a, c, e) {
				b(a, c, e) && (d[c] = a)
			});
		return d
	}

	function D(a) {
		for (var b = -1, c = Eb(a), d = c.length, e = Array(d); ++b < d;) e[b] = a[c[b]];
		return e
	}

	function E(a) {
		return a && "number" == typeof a.length ? i(a) : D(a)
	}

	function F(a) {
		return p(a, q(arguments, !0, !0, 1))
	}

	function G(b, c, d) {
		if ("number" == typeof d) {
			var e = b ? b.length : 0;
			d = 0 > d ? zb(0, e + d) : d || 0
		} else if (d) {
			var f = I(b, c);
			return b[f] === c ? f : -1
		}
		return a(b, c, d)
	}

	function H(a) {
		for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
			for (var f = -1, g = b[c]; ++f < e;) a[f] === g && (vb.call(a, f--, 1), e--);
		return a
	}

	function I(a, b, c, d) {
		var e = 0,
			f = a ? a.length : e;
		for (c = c ? j.createCallback(c, d, 1) : O, b = c(b); f > e;) {
			var g = e + f >>> 1;
			c(a[g]) < b ? e = g + 1 : f = g
		}
		return e
	}

	function J(a, b, c, d) {
		return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = j.createCallback(c, d, 3)), s(a, b, c)
	}

	function K(a, b) {
		return arguments.length > 2 ? t(a, 17, i(arguments, 2), null, b) : t(a, 1, null, null, b)
	}

	function L(a, b, c) {
		var d, e, f, g, h, i, j, k = 0,
			l = !1,
			m = !0;
		if (!z(a)) throw new TypeError;
		if (b = zb(0, b) || 0, c === !0) {
			var n = !0;
			m = !1
		} else A(c) && (n = c.leading, l = "maxWait" in c && (zb(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing : m);
		var o = function() {
				var c = b - (Jb() - g);
				if (0 >= c) {
					e && clearTimeout(e);
					var l = j;
					e = i = j = R, l && (k = Jb(), f = a.apply(h, d), i || e || (d = h = null))
				} else i = setTimeout(o, c)
			},
			p = function() {
				i && clearTimeout(i), e = i = j = R, (m || l !== b) && (k = Jb(), f = a.apply(h, d), i || e || (d = h = null))
			};
		return function() {
			if (d = arguments, g = Jb(), h = this, j = m && (i || !n), l === !1) var c = n && !i;
			else {
				e || n || (k = g);
				var q = l - (g - k),
					r = 0 >= q;
				r ? (e && (e = clearTimeout(e)), k = g, f = a.apply(h, d)) : e || (e = setTimeout(p, q))
			}
			return r && i ? i = clearTimeout(i) : i || b === l || (i = setTimeout(o, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f
		}
	}

	function M(a, b, c) {
		var d = !0,
			e = !0;
		if (!z(a)) throw new TypeError;
		return c === !1 ? d = !1 : A(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), gb.leading = d, gb.maxWait = b, gb.trailing = e, L(a, b, gb)
	}

	function N(a, b, c) {
		var d = typeof a;
		if (null == a || "function" == d) return n(a, b, c);
		if ("object" != d) return Q(a);
		var e = Eb(a),
			f = e[0],
			g = a[f];
		return 1 != e.length || g !== g || A(g) ? function(b) {
			for (var c = e.length, d = !1; c-- && (d = r(b[e[c]], a[e[c]], null, !0)););
			return d
		} : function(a) {
			var b = a[f];
			return g === b && (0 !== g || 1 / g == 1 / b)
		}
	}

	function O(a) {
		return a
	}

	function P() {}

	function Q(a) {
		return function(b) {
			return b[a]
		}
	}
	var R, S = [],
		T = [],
		U = +new Date + "",
		V = 75,
		W = 40,
		X = /\w*$/,
		Y = "[object Arguments]",
		Z = "[object Array]",
		$ = "[object Boolean]",
		_ = "[object Date]",
		ab = "[object Function]",
		bb = "[object Number]",
		cb = "[object Object]",
		db = "[object RegExp]",
		eb = "[object String]",
		fb = {};
	fb[ab] = !1, fb[Y] = fb[Z] = fb[$] = fb[_] = fb[bb] = fb[cb] = fb[db] = fb[eb] = !0;
	var gb = {
			leading: !1,
			maxWait: 0,
			trailing: !1
		},
		hb = {
			"boolean": !1,
			"function": !0,
			object: !0,
			number: !1,
			string: !1,
			undefined: !1
		},
		ib = hb[typeof window] && window || this,
		jb = hb[typeof exports] && exports && !exports.nodeType && exports,
		kb = hb[typeof module] && module && !module.nodeType && module,
		lb = kb && kb.exports === jb && jb,
		mb = hb[typeof global] && global;
	!mb || mb.global !== mb && mb.window !== mb || (ib = mb);
	var nb = [],
		ob = Error.prototype,
		pb = Object.prototype,
		qb = pb.toString,
		rb = RegExp("^" + String(qb).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
		sb = pb.hasOwnProperty,
		tb = nb.push,
		ub = pb.propertyIsEnumerable,
		vb = nb.splice,
		wb = v(wb = Object.create) && wb,
		xb = v(xb = Array.isArray) && xb,
		yb = v(yb = Object.keys) && yb,
		zb = Math.max,
		Ab = {};
	Ab[Z] = Array, Ab[$] = Boolean, Ab[_] = Date, Ab[ab] = Function, Ab[cb] = Object, Ab[bb] = Number, Ab[db] = RegExp, Ab[eb] = String;
	var Bb = j.support = {};
	Bb.enumErrorProps = ub.call(ob, "message") || ub.call(ob, "name"), Bb.enumPrototypes = !0, Bb.nonEnumArgs = !0, wb || (m = function() {
		function a() {}
		return function(b) {
			if (A(b)) {
				a.prototype = b;
				var c = new a;
				a.prototype = null
			}
			return c || ib.Object()
		}
	}());
	var Cb = xb || function(a) {
			return a && "object" == typeof a && "number" == typeof a.length && qb.call(a) == Z || !1
		},
		Db = function(a) {
			var b, c = a,
				d = [];
			if (!c) return d;
			if (!hb[typeof a]) return d;
			var e = c.length;
			if (b = -1, e && w(c))
				for (; ++b < e;) b += "", d.push(b);
			else {
				var f = "function" == typeof c;
				for (b in c) f && "prototype" == b || !sb.call(c, b) || d.push(b)
			}
			return d
		},
		Eb = yb ? function(a) {
			return A(a) ? Bb.enumPrototypes && "function" == typeof a || Bb.nonEnumArgs && a.length && w(a) ? Db(a) : yb(a) : []
		} : Db,
		Fb = function(a, b, c) {
			var d, e = a,
				f = e;
			if (!e) return f;
			b = b && "undefined" == typeof c ? b : n(b, c, 3);
			var g = e.length;
			if (d = -1, "number" == typeof g) {
				for (; ++d < g;)
					if (b(e[d], d, a) === !1) return f
			} else {
				var h = "function" == typeof e;
				for (d in e)
					if ((!h || "prototype" != d) && sb.call(e, d) && b(e[d], d, a) === !1) return f
			}
			return f
		},
		Gb = function(a, b, c) {
			var d, e = a,
				f = e;
			if (!e) return f;
			var g = arguments,
				h = 0,
				i = "number" == typeof c ? 2 : g.length;
			if (i > 3 && "function" == typeof g[i - 2]) var j = n(g[--i - 1], g[i--], 2);
			else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
			for (; ++h < i;)
				if (e = g[h], e && hb[typeof e]) {
					var k = e.length;
					if (d = -1, k && w(e))
						for (; ++d < k;) d += "", f[d] = j ? j(f[d], e[d]) : e[d];
					else {
						var l = "function" == typeof e;
						for (d in e) l && "prototype" == d || !sb.call(e, d) || (f[d] = j ? j(f[d], e[d]) : e[d])
					}
				}
			return f
		},
		Hb = function(a, b, c) {
			var d, e = a,
				f = e;
			if (!e) return f;
			if (!hb[typeof e]) return f;
			b = b && "undefined" == typeof c ? b : n(b, c, 3);
			var g = e.length;
			if (d = -1, g && w(e)) {
				for (; ++d < g;)
					if (d += "", b(e[d], d, a) === !1) return f
			} else {
				var h = "function" == typeof e;
				for (d in e)
					if ((!h || "prototype" != d) && b(e[d], d, a) === !1) return f
			}
			return f
		},
		Ib = function(a, b, c) {
			var d, e = a,
				f = e;
			if (!e) return f;
			if (!hb[typeof e]) return f;
			b = b && "undefined" == typeof c ? b : n(b, c, 3);
			var g = e.length;
			if (d = -1, g && w(e)) {
				for (; ++d < g;)
					if (d += "", b(e[d], d, a) === !1) return f
			} else {
				var h = "function" == typeof e;
				for (d in e)
					if ((!h || "prototype" != d) && sb.call(e, d) && b(e[d], d, a) === !1) return f
			}
			return f
		};
	z(/x/) && (z = function(a) {
		return "function" == typeof a && qb.call(a) == ab
	});
	var Jb = v(Jb = Date.now) && Jb || function() {
		return (new Date).getTime()
	};
	j.assign = Gb, j.bind = K, j.createCallback = N, j.debounce = L, j.difference = F, j.forIn = Hb, j.forOwn = Ib, j.keys = Eb, j.pick = C, j.property = Q, j.pull = H, j.throttle = M, j.toArray = E, j.uniq = J, j.values = D, j.extend = Gb, j.unique = J, j.cloneDeep = x, j.identity = O, j.indexOf = G, j.isArguments = w, j.isArray = Cb, j.isEqual = y, j.isFunction = z, j.isObject = A, j.isString = B, j.noop = P, j.now = Jb, j.sortedIndex = I, j.VERSION = "2.4.1", "function" == typeof define && "object" == typeof define.amd && define.amd ? (ib._ = j, define(function() {
		return j
	})) : jb && kb ? lb ? (kb.exports = j)._ = j : jb._ = j : ib._ = j
}.call(this),
function() {
	function a(a) {
		this.tokens = [], this.tokens.links = {}, this.options = a || j.defaults, this.rules = k.normal, this.options.gfm && (this.rules = this.options.tables ? k.tables : k.gfm)
	}

	function b(a, b) {
		if (this.options = b || j.defaults, this.links = a, this.rules = l.normal, this.renderer = this.options.renderer || new c, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
		this.options.gfm ? this.rules = this.options.breaks ? l.breaks : l.gfm : this.options.pedantic && (this.rules = l.pedantic)
	}

	function c(a) {
		this.options = a || {}
	}

	function d(a) {
		this.tokens = [], this.token = null, this.options = a || j.defaults, this.options.renderer = this.options.renderer || new c, this.renderer = this.options.renderer, this.renderer.options = this.options
	}

	function e(a, b) {
		return a.replace(b ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
	}

	function f(a) {
		return a.replace(/&([#\w]+);/g, function(a, b) {
			return b = b.toLowerCase(), "colon" === b ? ":" : "#" === b.charAt(0) ? String.fromCharCode("x" === b.charAt(1) ? parseInt(b.substring(2), 16) : +b.substring(1)) : ""
		})
	}

	function g(a, b) {
		return a = a.source, b = b || "",
			function c(d, e) {
				return d ? (e = e.source || e, e = e.replace(/(^|[^\[])\^/g, "$1"), a = a.replace(d, e), c) : new RegExp(a, b)
			}
	}

	function h() {}

	function i(a) {
		for (var b, c, d = 1; d < arguments.length; d++) {
			b = arguments[d];
			for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
		}
		return a
	}

	function j(b, c, f) {
		if (f || "function" == typeof c) {
			f || (f = c, c = null), c = i({}, j.defaults, c || {});
			var g, h, k = c.highlight,
				l = 0;
			try {
				g = a.lex(b, c)
			} catch (m) {
				return f(m)
			}
			h = g.length;
			var n = function() {
				var a, b;
				try {
					a = d.parse(g, c)
				} catch (e) {
					b = e
				}
				return c.highlight = k, b ? f(b) : f(null, a)
			};
			if (!k || k.length < 3) return n();
			if (delete c.highlight, !h) return n();
			for (; l < g.length; l++)! function(a) {
				return "code" !== a.type ? --h || n() : k(a.text, a.lang, function(b, c) {
					return null == c || c === a.text ? --h || n() : (a.text = c, a.escaped = !0, void(--h || n()))
				})
			}(g[l])
		} else try {
			return c && (c = i({}, j.defaults, c)), d.parse(a.lex(b, c), c)
		} catch (m) {
			if (m.message += "\nPlease report this to https://github.com/chjj/marked.", (c || j.defaults).silent) return "<p>An error occured:</p><pre>" + e(m.message + "", !0) + "</pre>";
			throw m
		}
	}
	var k = {
		newline: /^\n+/,
		code: /^( {4}[^\n]+\n*)+/,
		fences: h,
		hr: /^( *[-*_]){3,} *(?:\n+|$)/,
		heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
		nptable: h,
		lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
		blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
		list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
		html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
		table: h,
		paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
		text: /^[^\n]+/,
		notebook: /^ *@(\((.*)\))?(\[(.*?)\])? *(?:\n+|$)/
	};
	k.bullet = /(?:[*+-]|\d+\.)/, k.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, k.item = g(k.item, "gm")(/bull/g, k.bullet)(), k.list = g(k.list)(/bull/g, k.bullet)("hr", /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(), k._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", k.html = g(k.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, k._tag)(), k.paragraph = g(k.paragraph)("hr", k.hr)("heading", k.heading)("lheading", k.lheading)("blockquote", k.blockquote)("tag", "<" + k._tag)("def", k.def)("notebook", k.notebook)(), k.normal = i({}, k), k.gfm = i({}, k.normal, {
		fences: /^ *(`{3,}|~{3,}) *(.+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
		math: /^ *(\${2,}) *([\s\S]+?)\s*\1 *(?:\n+|$)/,
		paragraph: /^/
	}), k.gfm.paragraph = g(k.paragraph)("(?!", "(?!" + k.gfm.fences.source.replace("\\1", "\\2") + "|" + k.gfm.math.source.replace("\\1", "\\2") + "|" + k.list.source.replace("\\1", "\\3") + "|")(), k.tables = i({}, k.gfm, {
		nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
		table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	}), a.rules = k, a.lex = function(b, c) {
		var d = new a(c);
		return d.lex(b)
	}, a.prototype.lex = function(a) {
		return a = a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(a, !0)
	}, a.prototype.token = function(a, b) {
		for (var c, d, e, f, g, h, i, j, l, a = a.replace(/^ +$/gm, ""); a;)
			if ((e = this.rules.newline.exec(a)) && (a = a.substring(e[0].length), e[0].length > 1 && this.tokens.push({
				type: "space"
			})), e = this.rules.code.exec(a)) a = a.substring(e[0].length), e = e[0].replace(/^ {4}/gm, ""), this.tokens.push({
				type: "code",
				text: this.options.pedantic ? e : e.replace(/\n+$/, "")
			});
			else if (e = this.rules.fences.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "code",
			lang: e[2],
			text: e[3]
		});
		else if (e = this.rules.math.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "code",
			lang: "mathjax",
			text: e[2]
		});
		else if (e = this.rules.heading.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "heading",
			depth: e[1].length,
			text: e[2]
		});
		else if (b && (e = this.rules.nptable.exec(a))) {
			for (a = a.substring(e[0].length), h = {
				type: "table",
				header: e[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
				align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
				cells: e[3].replace(/\n$/, "").split("\n")
			}, j = 0; j < h.align.length; j++) h.align[j] = /^ *-+: *$/.test(h.align[j]) ? "right" : /^ *:-+: *$/.test(h.align[j]) ? "center" : /^ *:-+ *$/.test(h.align[j]) ? "left" : null;
			for (j = 0; j < h.cells.length; j++) h.cells[j] = h.cells[j].split(/ *\| */);
			this.tokens.push(h)
		} else if (e = this.rules.lheading.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "heading",
			depth: "=" === e[2] ? 1 : 2,
			text: e[1]
		});
		else if (e = this.rules.notebook.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "notebook",
			text: e[0]
		});
		else if (e = this.rules.hr.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "hr"
		});
		else if (e = this.rules.blockquote.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "blockquote_start"
		}), e = e[0].replace(/^ *> ?/gm, ""), this.token(e, b), this.tokens.push({
			type: "blockquote_end"
		});
		else if (e = this.rules.list.exec(a)) {
			for (a = a.substring(e[0].length), f = e[2], this.tokens.push({
				type: "list_start",
				ordered: f.length > 1
			}), e = e[0].match(this.rules.item), c = !1, l = e.length, j = 0; l > j; j++) h = e[j], i = h.length, h = h.replace(/^ *([*+-]|\d+\.) +/, ""), ~h.indexOf("\n ") && (i -= h.length, h = this.options.pedantic ? h.replace(/^ {1,4}/gm, "") : h.replace(new RegExp("^ {1," + i + "}", "gm"), "")), this.options.smartLists && j !== l - 1 && (g = k.bullet.exec(e[j + 1])[0], f === g || f.length > 1 && g.length > 1 || (a = e.slice(j + 1).join("\n") + a, j = l - 1)), d = c || /\n\n(?!\s*$)/.test(h), j !== l - 1 && (c = "\n" === h.charAt(h.length - 1), d || (d = c)), this.tokens.push({
				type: d ? "loose_item_start" : "list_item_start"
			}), this.token(h, !1), this.tokens.push({
				type: "list_item_end"
			});
			this.tokens.push({
				type: "list_end"
			})
		} else if (e = this.rules.html.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: this.options.sanitize ? "paragraph" : "html",
			pre: "pre" === e[1] || "script" === e[1] || "style" === e[1],
			text: e[0]
		});
		else if (b && (e = this.rules.def.exec(a))) a = a.substring(e[0].length), this.tokens.links[e[1].toLowerCase()] = {
			href: e[2],
			title: e[3]
		};
		else if (b && (e = this.rules.table.exec(a))) {
			for (a = a.substring(e[0].length), h = {
				type: "table",
				header: e[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
				align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
				cells: e[3].replace(/(?: *\| *)?\n$/, "").split("\n")
			}, j = 0; j < h.align.length; j++) h.align[j] = /^ *-+: *$/.test(h.align[j]) ? "right" : /^ *:-+: *$/.test(h.align[j]) ? "center" : /^ *:-+ *$/.test(h.align[j]) ? "left" : null;
			for (j = 0; j < h.cells.length; j++) h.cells[j] = h.cells[j].replace(/\\\|/g, "&#124;").replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
			this.tokens.push(h)
		} else if (b && (e = this.rules.paragraph.exec(a))) a = a.substring(e[0].length), this.tokens.push({
			type: "paragraph",
			text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1]
		});
		else if (e = this.rules.text.exec(a)) a = a.substring(e[0].length), this.tokens.push({
			type: "text",
			text: e[0]
		});
		else if (a) throw new Error("Infinite loop on byte: " + a.charCodeAt(0));
		return this.tokens
	};
	var l = {
		escape: /^\\([\\`*{}\[\]()#+\-.!_>\\$])/,
		autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
		url: h,
		tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
		link: /^!?\[(inside)\]\(href\)/,
		reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
		nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
		strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
		em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
		code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
		math: /^(\$+)\s*([\s\S]*?[^\$])\s*\1(?!\$)/,
		br: /^ {2,}\n(?!\s*$)/,
		del: h,
		text: /^[\s\S]+?(?=[\\<!\[_*`\$]| {2,}\n|$)/
	};
	l._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, l._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, l.link = g(l.link)("inside", l._inside)("href", l._href)(), l.reflink = g(l.reflink)("inside", l._inside)(), l.normal = i({}, l), l.pedantic = i({}, l.normal, {
		strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
		em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	}), l.gfm = i({}, l.normal, {
		escape: g(l.escape)("])", "~|])")(),
		url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
		del: /^~~(?=\S)([\s\S]*?\S)~~/,
		text: g(l.text)("]|", "~]|")("|", "|https?://|")()
	}), l.breaks = i({}, l.gfm, {
		br: g(l.br)("{2,}", "*")(),
		text: g(l.gfm.text)("{2,}", "*")()
	}), b.rules = l, b.output = function(a, c, d) {
		var e = new b(c, d);
		return e.output(a)
	}, b.prototype.output = function(a) {
		for (var b, c, d, f, g = ""; a;)
			if (f = this.rules.escape.exec(a)) a = a.substring(f[0].length), g += f[1];
			else if (f = this.rules.autolink.exec(a)) a = a.substring(f[0].length), "@" === f[2] ? (c = this.mangle(":" === f[1].charAt(6) ? f[1].substring(7) : f[1]), d = this.mangle("mailto:") + c) : (c = e(f[1]), d = c), g += this.renderer.link(d, null, c);
		else if (f = this.rules.url.exec(a)) a = a.substring(f[0].length), c = e(f[1]), d = c, g += this.renderer.link(d, null, c);
		else if (f = this.rules.tag.exec(a)) a = a.substring(f[0].length), g += this.options.sanitize && !/^<!--[\s\S]*?-->/.test(f[0]) ? e(f[0]) : f[0];
		else if (f = this.rules.link.exec(a)) a = a.substring(f[0].length), g += this.outputLink(f, {
			href: f[2],
			title: f[3]
		});
		else if ((f = this.rules.reflink.exec(a)) || (f = this.rules.nolink.exec(a))) {
			if (a = a.substring(f[0].length), b = (f[2] || f[1]).replace(/\s+/g, " "), b = this.links[b.toLowerCase()], !b || !b.href) {
				g += f[0].charAt(0), a = f[0].substring(1) + a;
				continue
			}
			g += this.outputLink(f, b)
		} else if (f = this.rules.strong.exec(a)) a = a.substring(f[0].length), g += this.renderer.strong(this.output(f[2] || f[1]));
		else if (f = this.rules.em.exec(a)) a = a.substring(f[0].length), g += this.renderer.em(this.output(f[2] || f[1]));
		else if (f = this.rules.code.exec(a)) a = a.substring(f[0].length), g += this.renderer.codespan(e(f[2], !0));
		else if (f = this.rules.math.exec(a)) a = a.substring(f[0].length), g += this.renderer.codespan(e("$" + f[2] + "$", !0));
		else if (f = this.rules.br.exec(a)) a = a.substring(f[0].length), g += this.renderer.br();
		else if (f = this.rules.del.exec(a)) a = a.substring(f[0].length), g += this.renderer.del(this.output(f[1]));
		else if (f = this.rules.text.exec(a)) a = a.substring(f[0].length), g += e(this.smartypants(f[0]));
		else if (a) throw new Error("Infinite loop on byte: " + a.charCodeAt(0));
		return g
	}, b.prototype.outputLink = function(a, b) {
		var c = e(b.href),
			d = b.title ? e(b.title) : null;
		return "!" !== a[0].charAt(0) ? this.renderer.link(c, d, this.output(a[1])) : this.renderer.image(c, d, e(a[1]))
	}, b.prototype.smartypants = function(a) {
		return this.options.smartypants ? a.replace(/--/g, "—").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : a
	}, b.prototype.mangle = function(a) {
		for (var b, c = "", d = a.length, e = 0; d > e; e++) b = a.charCodeAt(e), Math.random() > .5 && (b = "x" + b.toString(16)), c += "&#" + b + ";";
		return c
	}, c.prototype.code = function(a, b, c) {
		if (this.options.highlight) {
			var d = this.options.highlight(a, b);
			d && !d.length && (b = d.lang, d = d.code), null != d && d !== a && (c = !0, a = d)
		}
		return b ? '<pre><code class="hljs ' + this.options.langPrefix + e(b, !0) + '">' + (c ? a : e(a, !0)) + "\n</code></pre>\n" : "<pre><code>" + (c ? a : e(a, !0)) + "\n</code></pre>"
	}, c.prototype.blockquote = function(a) {
		return "<blockquote>\n" + a + "</blockquote>\n"
	}, c.prototype.notebook = function(a) {
		return "<notebook>" + a + "</notebook>\n"
	}, c.prototype.html = function(a) {
		return a
	}, c.prototype.heading = function(a, b) {
		return "<h" + b + ">" + a + "</h" + b + ">\n"
	}, c.prototype.hr = function() {
		return "<hr>\n"
	}, c.prototype.list = function(a, b) {
		var c = b ? "ol" : "ul";
		return "<" + c + ">\n" + a + "</" + c + ">\n"
	}, c.prototype.listitem = function(a) {
		return "<li>" + a + "</li>\n"
	}, c.prototype.paragraph = function(a) {
		return "<p>" + a + "</p>\n"
	}, c.prototype.table = function(a, b) {
		return "<table>\n<thead>\n" + a + "</thead>\n<tbody>\n" + b + "</tbody>\n</table>\n"
	}, c.prototype.tablerow = function(a) {
		return "<tr>\n" + a + "</tr>\n"
	}, c.prototype.tablecell = function(a, b) {
		var c = b.header ? "th" : "td",
			d = b.align ? "<" + c + ' style="text-align:' + b.align + '">' : "<" + c + ">";
		return d + a.replace(/&lt;br\W*?&gt;/g, "<br>") + "</" + c + ">\n"
	}, c.prototype.strong = function(a) {
		return "<strong>" + a + "</strong>"
	}, c.prototype.em = function(a) {
		return "<em>" + a + "</em>"
	}, c.prototype.codespan = function(a) {
		return "<code>" + a + "</code>"
	}, c.prototype.br = function() {
		return "<br>"
	}, c.prototype.del = function(a) {
		return "<del>" + a + "</del>"
	}, c.prototype.link = function(a, b, c) {
		if (this.options.sanitize) {
			try {
				var d = decodeURIComponent(f(a)).replace(/[^\w:]/g, "").toLowerCase()
			} catch (e) {
				return ""
			}
			if (0 === d.indexOf("javascript:")) return ""
		}
		/^[^:]*?:\/\//.test(a) || (a = "http://" + a.replace(/^\/\//, ""));
		var g = '<a href="' + a + '"';
		return b && (g += ' title="' + b + '"'), g += ' target="_blank">' + c + "</a>"
	}, c.prototype.image = function(a, b, c) {
		var d = '<img src="' + a + '" alt="' + c + '"';
		return b && (d += ' title="' + b + '"'), d += ">"
	}, d.parse = function(a, b, c) {
		var e = new d(b, c);
		return e.parse(a)
	}, d.prototype.parse = function(a) {
		this.inline = new b(a.links, this.options, this.renderer), this.tokens = a.reverse();
		for (var c = ""; this.next();) c += this.tok();
		return c
	}, d.prototype.next = function() {
		return this.token = this.tokens.pop()
	}, d.prototype.peek = function() {
		return this.tokens[this.tokens.length - 1] || 0
	}, d.prototype.parseText = function() {
		for (var a = this.token.text;
			"text" === this.peek().type;) a += "\n" + this.next().text;
		return this.inline.output(a)
	}, d.prototype.tok = function() {
		switch (this.token.type) {
			case "space":
				return "";
			case "hr":
				return this.renderer.hr();
			case "heading":
				return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
			case "code":
				return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
			case "table":
				var a, b, c, d, e, f = "",
					g = "";
				for (c = "", a = 0; a < this.token.header.length; a++) d = {
					header: !0,
					align: this.token.align[a]
				}, c += this.renderer.tablecell(this.inline.output(this.token.header[a]), {
					header: !0,
					align: this.token.align[a]
				});
				for (f += this.renderer.tablerow(c), a = 0; a < this.token.cells.length; a++) {
					for (b = this.token.cells[a], c = "", e = 0; e < b.length; e++) c += this.renderer.tablecell(this.inline.output(b[e]), {
						header: !1,
						align: this.token.align[e]
					});
					g += this.renderer.tablerow(c)
				}
				return this.renderer.table(f, g);
			case "blockquote_start":
				for (var g = "";
					"blockquote_end" !== this.next().type;) g += this.tok();
				return this.renderer.blockquote(g);
			case "notebook":
				return this.renderer.notebook(this.token.text);
			case "list_start":
				for (var g = "", h = this.token.ordered;
					"list_end" !== this.next().type;) g += this.tok();
				return this.renderer.list(g, h);
			case "list_item_start":
				for (var g = "";
					"list_item_end" !== this.next().type;) g += "text" === this.token.type ? this.parseText() : this.tok();
				return this.renderer.listitem(g);
			case "loose_item_start":
				for (var g = "";
					"list_item_end" !== this.next().type;) g += this.tok();
				return this.renderer.listitem(g);
			case "html":
				var i = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
				return this.renderer.html(i);
			case "paragraph":
				return this.renderer.paragraph(this.inline.output(this.token.text));
			case "text":
				return this.renderer.paragraph(this.parseText())
		}
	}, h.exec = h, j.options = j.setOptions = function(a) {
		return i(j.defaults, a), j
	}, j.defaults = {
		gfm: !0,
		tables: !0,
		breaks: !1,
		pedantic: !1,
		sanitize: !1,
		smartLists: !1,
		silent: !1,
		highlight: null,
		langPrefix: "lang-",
		smartypants: !1,
		headerPrefix: "",
		renderer: new c
	}, j.Parser = d, j.parser = d.parse, j.Renderer = c, j.Lexer = a, j.lexer = a.lex, j.InlineLexer = b, j.inlineLexer = b.output, j.parse = j, "object" == typeof exports ? module.exports = j : "function" == typeof define && define.amd ? define(function() {
		return j
	}) : this.marked = j
}.call(function() {
	return this || ("undefined" != typeof window ? window : global)
}()), ! function(a) {
	"use strict";

	function b(a, b) {
		var c = (65535 & a) + (65535 & b),
			d = (a >> 16) + (b >> 16) + (c >> 16);
		return d << 16 | 65535 & c
	}

	function c(a, b) {
		return a << b | a >>> 32 - b
	}

	function d(a, d, e, f, g, h) {
		return b(c(b(b(d, a), b(f, h)), g), e)
	}

	function e(a, b, c, e, f, g, h) {
		return d(b & c | ~b & e, a, b, f, g, h)
	}

	function f(a, b, c, e, f, g, h) {
		return d(b & e | c & ~e, a, b, f, g, h)
	}

	function g(a, b, c, e, f, g, h) {
		return d(b ^ c ^ e, a, b, f, g, h)
	}

	function h(a, b, c, e, f, g, h) {
		return d(c ^ (b | ~e), a, b, f, g, h)
	}

	function i(a, c) {
		a[c >> 5] |= 128 << c % 32, a[(c + 64 >>> 9 << 4) + 14] = c;
		var d, i, j, k, l, m = 1732584193,
			n = -271733879,
			o = -1732584194,
			p = 271733878;
		for (d = 0; d < a.length; d += 16) i = m, j = n, k = o, l = p, m = e(m, n, o, p, a[d], 7, -680876936), p = e(p, m, n, o, a[d + 1], 12, -389564586), o = e(o, p, m, n, a[d + 2], 17, 606105819), n = e(n, o, p, m, a[d + 3], 22, -1044525330), m = e(m, n, o, p, a[d + 4], 7, -176418897), p = e(p, m, n, o, a[d + 5], 12, 1200080426), o = e(o, p, m, n, a[d + 6], 17, -1473231341), n = e(n, o, p, m, a[d + 7], 22, -45705983), m = e(m, n, o, p, a[d + 8], 7, 1770035416), p = e(p, m, n, o, a[d + 9], 12, -1958414417), o = e(o, p, m, n, a[d + 10], 17, -42063), n = e(n, o, p, m, a[d + 11], 22, -1990404162), m = e(m, n, o, p, a[d + 12], 7, 1804603682), p = e(p, m, n, o, a[d + 13], 12, -40341101), o = e(o, p, m, n, a[d + 14], 17, -1502002290), n = e(n, o, p, m, a[d + 15], 22, 1236535329), m = f(m, n, o, p, a[d + 1], 5, -165796510), p = f(p, m, n, o, a[d + 6], 9, -1069501632), o = f(o, p, m, n, a[d + 11], 14, 643717713), n = f(n, o, p, m, a[d], 20, -373897302), m = f(m, n, o, p, a[d + 5], 5, -701558691), p = f(p, m, n, o, a[d + 10], 9, 38016083), o = f(o, p, m, n, a[d + 15], 14, -660478335), n = f(n, o, p, m, a[d + 4], 20, -405537848), m = f(m, n, o, p, a[d + 9], 5, 568446438), p = f(p, m, n, o, a[d + 14], 9, -1019803690), o = f(o, p, m, n, a[d + 3], 14, -187363961), n = f(n, o, p, m, a[d + 8], 20, 1163531501), m = f(m, n, o, p, a[d + 13], 5, -1444681467), p = f(p, m, n, o, a[d + 2], 9, -51403784), o = f(o, p, m, n, a[d + 7], 14, 1735328473), n = f(n, o, p, m, a[d + 12], 20, -1926607734), m = g(m, n, o, p, a[d + 5], 4, -378558), p = g(p, m, n, o, a[d + 8], 11, -2022574463), o = g(o, p, m, n, a[d + 11], 16, 1839030562), n = g(n, o, p, m, a[d + 14], 23, -35309556), m = g(m, n, o, p, a[d + 1], 4, -1530992060), p = g(p, m, n, o, a[d + 4], 11, 1272893353), o = g(o, p, m, n, a[d + 7], 16, -155497632), n = g(n, o, p, m, a[d + 10], 23, -1094730640), m = g(m, n, o, p, a[d + 13], 4, 681279174), p = g(p, m, n, o, a[d], 11, -358537222), o = g(o, p, m, n, a[d + 3], 16, -722521979), n = g(n, o, p, m, a[d + 6], 23, 76029189), m = g(m, n, o, p, a[d + 9], 4, -640364487), p = g(p, m, n, o, a[d + 12], 11, -421815835), o = g(o, p, m, n, a[d + 15], 16, 530742520), n = g(n, o, p, m, a[d + 2], 23, -995338651), m = h(m, n, o, p, a[d], 6, -198630844), p = h(p, m, n, o, a[d + 7], 10, 1126891415), o = h(o, p, m, n, a[d + 14], 15, -1416354905), n = h(n, o, p, m, a[d + 5], 21, -57434055), m = h(m, n, o, p, a[d + 12], 6, 1700485571), p = h(p, m, n, o, a[d + 3], 10, -1894986606), o = h(o, p, m, n, a[d + 10], 15, -1051523), n = h(n, o, p, m, a[d + 1], 21, -2054922799), m = h(m, n, o, p, a[d + 8], 6, 1873313359), p = h(p, m, n, o, a[d + 15], 10, -30611744), o = h(o, p, m, n, a[d + 6], 15, -1560198380), n = h(n, o, p, m, a[d + 13], 21, 1309151649), m = h(m, n, o, p, a[d + 4], 6, -145523070), p = h(p, m, n, o, a[d + 11], 10, -1120210379), o = h(o, p, m, n, a[d + 2], 15, 718787259), n = h(n, o, p, m, a[d + 9], 21, -343485551), m = b(m, i), n = b(n, j), o = b(o, k), p = b(p, l);
		return [m, n, o, p]
	}

	function j(a) {
		var b, c = "";
		for (b = 0; b < 32 * a.length; b += 8) c += String.fromCharCode(255 & a[b >> 5] >>> b % 32);
		return c
	}

	function k(a) {
		var b, c = [];
		for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1) c[b] = 0;
		for (b = 0; b < 8 * a.length; b += 8) c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
		return c
	}

	function l(a) {
		return j(i(k(a), 8 * a.length))
	}

	function m(a, b) {
		var c, d, e = k(a),
			f = [],
			g = [];
		for (f[15] = g[15] = void 0, e.length > 16 && (e = i(e, 8 * a.length)), c = 0; 16 > c; c += 1) f[c] = 909522486 ^ e[c], g[c] = 1549556828 ^ e[c];
		return d = i(f.concat(k(b)), 512 + 8 * b.length), j(i(g.concat(d), 640))
	}

	function n(a) {
		var b, c, d = "0123456789abcdef",
			e = "";
		for (c = 0; c < a.length; c += 1) b = a.charCodeAt(c), e += d.charAt(15 & b >>> 4) + d.charAt(15 & b);
		return e
	}

	function o(a) {
		return unescape(encodeURIComponent(a))
	}

	function p(a) {
		return l(o(a))
	}

	function q(a) {
		return n(p(a))
	}

	function r(a, b) {
		return m(o(a), o(b))
	}

	function s(a, b) {
		return n(r(a, b))
	}

	function t(a, b, c) {
		return b ? c ? r(b, a) : s(b, a) : c ? p(a) : q(a)
	}
	"function" == typeof define && define.amd ? define(function() {
		return t
	}) : a.md5 = t
}(this), Mutex.prototype.lock = function(a) {
	console.debug("mutex lock", this._waiting.length), this.isLocked ? this._waiting.push(a) : (this.isLocked = !0, a())
}, Mutex.prototype.timedLock = function(a, b) {
	if (!this.isLocked) return this.isLocked = !0, b();
	var c;
	this._waiting.push(function() {
		clearTimeout(c), b && (b(), b = null)
	}), c = setTimeout(function() {
		b && (b(new Error("Lock timed out")), b = null)
	}, a)
}, Mutex.prototype.tryLock = function() {
	return this.isLocked ? !1 : (this.isLocked = !0, !0)
}, Mutex.prototype.unlock = function() {
	if (!this.isLocked) throw new Error("Mutex is not locked");
	var a = this._waiting.shift();
	a ? a() : this.isLocked = !1
}, ! function(a) {
	if ("object" == typeof exports) module.exports = a();
	else if ("function" == typeof define && define.amd) define(a);
	else {
		var b;
		"undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.PouchDB = a()
	}
}(function() {
	var define, module, exports;
	return function a(b, c, d) {
		function e(g, h) {
			if (!c[g]) {
				if (!b[g]) {
					var i = "function" == typeof require && require;
					if (!h && i) return i(g, !0);
					if (f) return f(g, !0);
					throw new Error("Cannot find module '" + g + "'")
				}
				var j = c[g] = {
					exports: {}
				};
				b[g][0].call(j.exports, function(a) {
					var c = b[g][1][a];
					return e(c ? c : a)
				}, j, j.exports, a, b, c, d)
			}
			return c[g].exports
		}
		for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
		return e
	}({
		1: [
			function(_dereq_, module, exports) {
				"use strict";

				function arrayFirst(a, b) {
					for (var c = 0; c < a.length; c++)
						if (b(a[c], c) === !0) return a[c];
					return !1
				}

				function yankError(a) {
					return function(b, c) {
						b || c[0].error ? a(b || c[0]) : a(null, c[0])
					}
				}

				function computeHeight(a) {
					var b = {},
						c = [];
					return merge.traverseRevTree(a, function(a, d, e, f) {
						var g = d + "-" + e;
						return a && (b[g] = 0), void 0 !== f && c.push({
							from: f,
							to: g
						}), g
					}), c.reverse(), c.forEach(function(a) {
						b[a.from] = void 0 === b[a.from] ? 1 + b[a.to] : Math.min(b[a.from], 1 + b[a.to])
					}), b
				}

				function AbstractPouchDB() {
					var a = this;
					EventEmitter.call(this), a.autoCompact = function(b) {
						return a.auto_compaction ? function(c, d) {
							if (c) b(c);
							else {
								var e = d.length,
									f = function() {
										e--, e || b(null, d)
									};
								d.forEach(function(b) {
									b.ok ? a.compactDocument(b.id, 1, f) : f()
								})
							}
						} : b
					};
					var b, c = 0,
						d = ["change", "delete", "create", "update"];
					this.on("newListener", function(e) {
						if (~d.indexOf(e)) {
							if (c) return void c++;
							c++;
							var f = 0;
							b = this.changes({
								conflicts: !0,
								include_docs: !0,
								continuous: !0,
								since: "latest",
								onChange: function(b) {
									b.seq <= f || (f = b.seq, a.emit("change", b), b.doc._deleted ? a.emit("delete", b) : "1" === b.doc._rev.split("-")[0] ? a.emit("create", b) : a.emit("update", b))
								}
							})
						}
					}), this.on("removeListener", function(a) {~
						d.indexOf(a) && (c--, c || b.cancel())
					})
				}

				function processChange(a, b, c) {
					var d = [{
						rev: a._rev
					}];
					"all_docs" === c.style && (d = merge.collectLeaves(b.rev_tree).map(function(a) {
						return {
							rev: a.rev
						}
					}));
					var e = {
						id: b.id,
						changes: d,
						doc: a
					};
					return utils.isDeleted(b, a._rev) && (e.deleted = !0), c.conflicts && (e.doc._conflicts = merge.collectConflicts(b), e.doc._conflicts.length || delete e.doc._conflicts), e
				}
				var utils = _dereq_("./utils"),
					merge = _dereq_("./merge"),
					errors = _dereq_("./deps/errors"),
					EventEmitter = _dereq_("events").EventEmitter;
				utils.inherits(AbstractPouchDB, EventEmitter), module.exports = AbstractPouchDB, AbstractPouchDB.prototype.post = utils.toPromise(function(a, b, c) {
					return "function" == typeof b && (c = b, b = {}), "object" != typeof a || Array.isArray(a) ? c(errors.NOT_AN_OBJECT) : this.bulkDocs({
						docs: [a]
					}, b, this.autoCompact(yankError(c)))
				}), AbstractPouchDB.prototype.put = utils.toPromise(function() {
					var a, b, c, d, e, f, g = Array.prototype.slice.call(arguments);
					if (c = g.shift(), "object" != typeof c || Array.isArray(c)) return (f = g.pop())(errors.NOT_AN_OBJECT);
					for (c = utils.extend(!0, {}, c);;)
						if (a = g.shift(), b = typeof a, "string" !== b || d ? "string" === b && d ? c._rev = a : "object" === b ? e = a : "function" === b && (f = a) : (c._id = a, d = !0), !g.length) break;
					e = e || {};
					var h = utils.invalidIdError(c._id);
					return h ? f(h) : this.bulkDocs({
						docs: [c]
					}, e, this.autoCompact(yankError(f)))
				}), AbstractPouchDB.prototype.putAttachment = utils.toPromise(function(a, b, c, d, e, f) {
					function g(a) {
						a._attachments = a._attachments || {}, a._attachments[b] = {
							content_type: e,
							data: d
						}, h.put(a, f)
					}
					if (!this.taskqueue.isReady) return void this.taskqueue.addTask("putAttachment", arguments);
					var h = this;
					"function" == typeof e && (f = e, e = d, d = c, c = null), "undefined" == typeof e && (e = d, d = c, c = null), h.get(a, function(b, d) {
						return b && b.error === errors.MISSING_DOC.error ? void g({
							_id: a
						}) : b ? void f(b) : d._rev !== c ? void f(errors.REV_CONFLICT) : void g(d)
					})
				}), AbstractPouchDB.prototype.removeAttachment = utils.toPromise(function(a, b, c, d) {
					var e = this;
					e.get(a, function(a, f) {
						return a ? void d(a) : f._rev !== c ? void d(errors.REV_CONFLICT) : f._attachments ? (delete f._attachments[b], 0 === Object.keys(f._attachments).length && delete f._attachments, void e.put(f, d)) : d()
					})
				}), AbstractPouchDB.prototype.remove = utils.toPromise(function(a, b, c) {
					"function" == typeof b && (c = b, b = {}), void 0 === b && (b = {}), b = utils.extend(!0, {}, b), b.was_delete = !0;
					var d = {
						_id: a._id,
						_rev: a._rev
					};
					return d._deleted = !0, this.bulkDocs({
						docs: [d]
					}, b, yankError(c))
				}), AbstractPouchDB.prototype.revsDiff = utils.toPromise(function(a, b, c) {
					function d(a, b) {
						h[a] || (h[a] = {
							missing: []
						}), h[a].missing.push(b)
					}

					function e(b, c) {
						var e = a[b].slice(0);
						merge.traverseRevTree(c, function(a, c, f, g, h) {
							var i = c + "-" + f,
								j = e.indexOf(i); - 1 !== j && (e.splice(j, 1), "available" !== h.status && d(b, i))
						}), e.forEach(function(a) {
							d(b, a)
						})
					}
					"function" == typeof b && (c = b, b = {}), b = utils.extend(!0, {}, b);
					var f = Object.keys(a),
						g = 0,
						h = {};
					f.map(function(b) {
						this._getRevisionTree(b, function(d, i) {
							if (d && "not_found" === d.name && "missing" === d.message) h[b] = {
								missing: a[b]
							};
							else {
								if (d) return c(d);
								e(b, i)
							}
							return ++g === f.length ? c(null, h) : void 0
						})
					}, this)
				}), AbstractPouchDB.prototype.compactDocument = function(a, b, c) {
					var d = this;
					this._getRevisionTree(a, function(e, f) {
						if (e) return c(e);
						var g = computeHeight(f),
							h = [],
							i = [];
						Object.keys(g).forEach(function(a) {
							g[a] > b && h.push(a)
						}), merge.traverseRevTree(f, function(a, b, c, d, e) {
							var f = b + "-" + c;
							"available" === e.status && -1 !== h.indexOf(f) && (e.status = "missing", i.push(f))
						}), d._doCompaction(a, f, i, c)
					})
				}, AbstractPouchDB.prototype.compact = utils.toPromise(function(a, b) {
					"function" == typeof a && (b = a, a = {});
					var c = this;
					this.changes({
						complete: function(a, d) {
							if (a) return void b();
							var e = d.results.length;
							return e ? void d.results.forEach(function(a) {
								c.compactDocument(a.id, 0, function() {
									e--, e || b()
								})
							}) : void b()
						}
					})
				}), AbstractPouchDB.prototype.get = utils.toPromise(function(a, b, c) {
					function d() {
						var d = [],
							g = e.length;
						return g ? void e.forEach(function(e) {
							f.get(a, {
								rev: e,
								revs: b.revs,
								attachments: b.attachments
							}, function(a, b) {
								d.push(a ? {
									missing: e
								} : {
									ok: b
								}), g--, g || c(null, d)
							})
						}) : c(null, d)
					}
					if (!this.taskqueue.isReady) return void this.taskqueue.addTask("get", arguments);
					if ("function" == typeof b && (c = b, b = {}), "string" != typeof a) return c(errors.INVALID_ID);
					var e = [],
						f = this;
					if (!b.open_revs) return this._get(a, b, function(a, d) {
						if (b = utils.extend(!0, {}, b), a) return c(a);
						var e = d.doc,
							g = d.metadata,
							h = d.ctx;
						if (b.conflicts) {
							var i = merge.collectConflicts(g);
							i.length && (e._conflicts = i)
						}
						if (b.revs || b.revs_info) {
							var j = merge.rootToLeaf(g.rev_tree),
								k = arrayFirst(j, function(a) {
									return -1 !== a.ids.map(function(a) {
										return a.id
									}).indexOf(e._rev.split("-")[1])
								});
							if (k.ids.splice(k.ids.map(function(a) {
								return a.id
							}).indexOf(e._rev.split("-")[1]) + 1), k.ids.reverse(), b.revs && (e._revisions = {
								start: k.pos + k.ids.length - 1,
								ids: k.ids.map(function(a) {
									return a.id
								})
							}), b.revs_info) {
								var l = k.pos + k.ids.length;
								e._revs_info = k.ids.map(function(a) {
									return l--, {
										rev: l + "-" + a.id,
										status: a.opts.status
									}
								})
							}
						}
						if (b.local_seq && (e._local_seq = d.metadata.seq), b.attachments && e._attachments) {
							var m = e._attachments,
								n = Object.keys(m).length;
							if (0 === n) return c(null, e);
							Object.keys(m).forEach(function(a) {
								this._getAttachment(m[a], {
									encode: !0,
									ctx: h
								}, function(b, d) {
									e._attachments[a].data = d, --n || c(null, e)
								})
							}, f)
						} else {
							if (e._attachments)
								for (var o in e._attachments) e._attachments.hasOwnProperty(o) && (e._attachments[o].stub = !0);
							c(null, e)
						}
					});
					if ("all" === b.open_revs) this._getRevisionTree(a, function(a, b) {
						a && (b = []), e = merge.collectLeaves(b).map(function(a) {
							return a.rev
						}), d()
					});
					else {
						if (!Array.isArray(b.open_revs)) return c(errors.error(errors.UNKNOWN_ERROR, "function_clause"));
						e = b.open_revs;
						for (var g = 0; g < e.length; g++) {
							var h = e[g];
							if ("string" != typeof h || !/^\d+-/.test(h)) return c(errors.error(errors.BAD_REQUEST, "Invalid rev format"))
						}
						d()
					}
				}), AbstractPouchDB.prototype.getAttachment = utils.toPromise(function(a, b, c, d) {
					if (!this.taskqueue.isReady) return void this.taskqueue.addTask("getAttachment", arguments);
					var e = this;
					c instanceof Function && (d = c, c = {}), c = utils.extend(!0, {}, c), this._get(a, c, function(a, f) {
						return a ? d(a) : f.doc._attachments && f.doc._attachments[b] ? (c.ctx = f.ctx, void e._getAttachment(f.doc._attachments[b], c, d)) : d(errors.MISSING_DOC)
					})
				}), AbstractPouchDB.prototype.allDocs = utils.toPromise(function(a, b) {
					if (!this.taskqueue.isReady) return void this.taskqueue.addTask("allDocs", arguments);
					if ("function" == typeof a && (b = a, a = {}), a = utils.extend(!0, {}, a), "keys" in a) {
						var c = ["startkey", "endkey", "key"].filter(function(b) {
							return b in a
						})[0];
						if (c) return void b(errors.error(errors.QUERY_PARSE_ERROR, "Query parameter `" + c + "` is not compatible with multi-get"))
					}
					return "undefined" == typeof a.skip && (a.skip = 0), this._allDocs(a, b)
				}), AbstractPouchDB.prototype.changes = function(opts) {
					if (!this.taskqueue.isReady) {
						var task = this.taskqueue.addTask("changes", arguments);
						return {
							cancel: function() {
								return task.task ? task.task.cancel() : void(task.parameters[0].aborted = !0)
							}
						}
					}
					var api = this;
					if (opts = utils.extend(!0, {}, opts), opts.processChange = processChange, opts.since || (opts.since = 0), "latest" === opts.since) {
						var changes;
						return api.info(function(a, b) {
							opts.aborted || (opts.since = b.update_seq - 1, changes = api.changes(opts))
						}), {
							cancel: function() {
								return changes ? changes.cancel() : void(opts.aborted = !0)
							}
						}
					}
					if (opts.filter && "string" == typeof opts.filter) {
						if ("_view" === opts.filter)
							if (opts.view && "string" == typeof opts.view) {
								var viewName = opts.view.split("/");
								api.get("_design/" + viewName[0], function(err, ddoc) {
									if (ddoc && ddoc.views && ddoc.views[viewName[1]]) {
										var filter = eval("(function () {  return function (doc) {    var emitted = false;    var emit = function (a, b) {      emitted = true;    };    var view = " + ddoc.views[viewName[1]].map + ";    view(doc);    if (emitted) {      return true;    }  }})()");
										opts.aborted || (opts.filter = filter, api.changes(opts))
									} else {
										var msg = ddoc.views ? "missing json key: " + viewName[1] : "missing json key: views";
										err = err || errors.error(errors.MISSING_DOC, msg), opts.complete(err)
									}
								})
							} else {
								var err = errors.error(errors.BAD_REQUEST, "`view` filter parameter is not provided.");
								opts.complete(err)
							} else {
							var filterName = opts.filter.split("/");
							api.get("_design/" + filterName[0], function(err, ddoc) {
								if (ddoc && ddoc.filters && ddoc.filters[filterName[1]]) {
									var filter = eval("(function () { return " + ddoc.filters[filterName[1]] + " })()");
									opts.aborted || (opts.filter = filter, api.changes(opts))
								} else {
									var msg = ddoc && ddoc.filters ? "missing json key: " + filterName[1] : "missing json key: filters";
									err = err || errors.error(errors.MISSING_DOC, msg), opts.complete(err)
								}
							})
						}
						return {
							cancel: function() {
								opts.complete(null, {
									status: "cancelled"
								}), opts.complete = null, opts.aborted = !0
							}
						}
					}
					return "descending" in opts || (opts.descending = !1), opts.limit = 0 === opts.limit ? 1 : opts.limit, this._changes(opts)
				}, AbstractPouchDB.prototype.close = utils.toPromise(function(a) {
					return this.taskqueue.isReady ? this._close(a) : void this.taskqueue.addTask("close", arguments)
				}), AbstractPouchDB.prototype.info = utils.toPromise(function(a) {
					if (!this.taskqueue.isReady) return void this.taskqueue.addTask("info", arguments);
					var b = this;
					this._info(function(c, d) {
						if (c) return a(c);
						var e = b.prefix.length;
						d.db_name.length > e && d.db_name.slice(0, e) === b.prefix && (d.db_name = d.db_name.slice(e)), a(null, d)
					})
				}), AbstractPouchDB.prototype.id = utils.toPromise(function(a) {
					return this.taskqueue.isReady ? this._id(a) : void this.taskqueue.addTask("id", arguments)
				}), AbstractPouchDB.prototype.type = function() {
					return "function" == typeof this._type ? this._type() : this.adapter
				}, AbstractPouchDB.prototype.bulkDocs = utils.toPromise(function(a, b, c) {
					if (!this.taskqueue.isReady) return void this.taskqueue.addTask("bulkDocs", arguments);
					if ("function" == typeof b && (c = b, b = {}), b = b ? utils.extend(!0, {}, b) : {}, !a || !a.docs) return c(errors.MISSING_BULK_DOCS);
					if (!Array.isArray(a.docs)) return c(errors.QUERY_PARSE_ERROR);
					for (var d = 0; d < a.docs.length; ++d)
						if ("object" != typeof a.docs[d] || Array.isArray(a.docs[d])) return c(errors.NOT_AN_OBJECT);
					return a = utils.extend(!0, {}, a), "new_edits" in b || (b.new_edits = "new_edits" in a ? a.new_edits : !0), this._bulkDocs(a, b, this.autoCompact(c))
				})
			}, {
				"./deps/errors": 8,
				"./merge": 14,
				"./utils": 18,
				events: 21
			}
		],
		2: [
			function(a, b) {
				"use strict";

				function c(a) {
					for (var b = c.options, d = b.parser[b.strictMode ? "strict" : "loose"].exec(a), e = {}, f = 14; f--;) e[b.key[f]] = d[f] || "";
					return e[b.q.name] = {}, e[b.key[12]].replace(b.q.parser, function(a, c, d) {
						c && (e[b.q.name][c] = d)
					}), e
				}

				function d(a) {
					return /^_(design|local)/.test(a) ? a : encodeURIComponent(a)
				}

				function e(a, b) {
					if (/http(s?):/.test(a)) {
						var d = c(a);
						d.remote = !0, (d.user || d.password) && (d.auth = {
							username: d.user,
							password: d.password
						});
						var e = d.path.replace(/(^\/|\/$)/g, "").split("/");
						if (d.db = e.pop(), d.path = e.join("/"), b = b || {}, b = i.extend(!0, {}, b), d.headers = b.headers || {}, b.auth || d.auth) {
							var f = b.auth || d.auth,
								g = i.btoa(f.username + ":" + f.password);
							d.headers.Authorization = "Basic " + g
						}
						return b.headers && (d.headers = b.headers), d
					}
					return {
						host: "",
						path: "/",
						db: a,
						auth: !1
					}
				}

				function f(a, b) {
					if (a.remote) {
						var c = a.path ? "/" : "";
						return a.protocol + "://" + a.host + ":" + a.port + "/" + a.path + c + a.db + "/" + b
					}
					return "/" + a.db + "/" + b
				}

				function g(a, b) {
					if (a.remote) {
						var c = a.path ? "/" : "";
						return a.protocol + "://" + a.host + ":" + a.port + "/" + a.path + c + b
					}
					return "/" + b
				}

				function h(a, b) {
					function c(a, b) {
						return i.ajax(i.extend({}, n, a), b)
					}

					function h(a, d, f, g) {
						d = i.extend(!0, {}, d);
						var h = e(g),
							j = {
								source: k.db,
								target: h.protocol === k.protocol && h.authority === k.authority ? h.db : h.source
							};
						d.continuous && (j.continuous = !0), d.create_target && (j.create_target = !0), d.doc_ids && (j.doc_ids = d.doc_ids), d.filter && "string" == typeof d.filter && (j.filter = d.filter), d.query_params && (j.query_params = d.query_params);
						var l, m = {},
							n = {
								headers: k.headers,
								method: "POST",
								url: k.protocol + "://" + k.host + (80 === k.port ? "" : ":" + k.port) + "/_replicate",
								body: j
							};
						f.cancel = function() {
							this.cancelled = !0, l && !m.ok && l.abort(), m._local_id && (n.body = {
								replication_id: m._local_id
							}), n.body.cancel = !0, c(n, function(a, c, e) {
								return a ? b(a) : void i.call(d.complete, null, m, e)
							})
						}, f.cancelled || (l = c(n, function(a, c, e) {
							return a ? b(a) : (m.ok = !0, c._local_id && (m._local_id = c._local_id), void i.call(d.complete, null, c, e))
						}))
					}
					var k = e(a.name, a),
						l = f(k, ""),
						m = this,
						n = a.ajax || {};
					a = i.extend(!0, {}, a);
					var o = {
							list: [],
							get: function(a, b) {
								"function" == typeof a && (b = a, a = {
									count: 10
								});
								var d = function(a, c) {
										!a && "uuids" in c ? (o.list = o.list.concat(c.uuids), b(null, "OK")) : b(a || j.UNKNOWN_ERROR)
									},
									e = "?count=" + a.count;
								c({
									headers: k.headers,
									method: "GET",
									url: g(k, "_uuids") + e
								}, d)
							}
						},
						p = function() {
							c({
								headers: k.headers,
								method: "PUT",
								url: l
							}, function(a) {
								a && 401 === a.status ? c({
									headers: k.headers,
									method: "HEAD",
									url: l
								}, function(a) {
									a ? b(a) : b(null, m)
								}) : a && 412 !== a.status ? b(a) : b(null, m)
							})
						};
					a.skipSetup || c({
						headers: k.headers,
						method: "GET",
						url: l
					}, function(a) {
						a ? 404 === a.status ? p() : b(a) : b(null, m)
					}), m.type = function() {
						return "http"
					}, m.id = i.toPromise(function(a) {
						return m.taskqueue.isReady ? void c({
							headers: k.headers,
							method: "GET",
							url: g(k, "")
						}, function(b, c) {
							a(null, c.uuid + k.db)
						}) : void m.taskqueue.addTask("id", arguments)
					}), m.request = i.toPromise(function(a, b) {
						return m.taskqueue.isReady ? (a.headers = k.headers, a.url = f(k, a.url), void c(a, b)) : void m.taskqueue.addTask("request", arguments)
					}), m.compact = i.toPromise(function(a, b) {
						return m.taskqueue.isReady ? ("function" == typeof a && (b = a, a = {}), a = i.extend(!0, {}, a), void c({
							headers: k.headers,
							url: f(k, "_compact"),
							method: "POST"
						}, function() {
							function c() {
								m.info(function(d, e) {
									e.compact_running ? setTimeout(c, a.interval || 200) : b()
								})
							}
							"function" == typeof b && c()
						})) : void m.taskqueue.addTask("compact", arguments)
					}), m._info = i.toPromise(function(a) {
						return m.taskqueue.isReady ? void c({
							headers: k.headers,
							method: "GET",
							url: f(k, "")
						}, function(b, c) {
							b ? a(b) : (c.host = f(k, ""), a(null, c))
						}) : void m.taskqueue.addTask("info", arguments)
					}), m.get = i.toPromise(function(a, b, e) {
						if (!m.taskqueue.isReady) return void m.taskqueue.addTask("get", arguments);
						"function" == typeof b && (e = b, b = {}), b = i.extend(!0, {}, b), void 0 === b.auto_encode && (b.auto_encode = !0);
						var g = [];
						b.revs && g.push("revs=true"), b.revs_info && g.push("revs_info=true"), b.local_seq && g.push("local_seq=true"), b.open_revs && ("all" !== b.open_revs && (b.open_revs = JSON.stringify(b.open_revs)), g.push("open_revs=" + b.open_revs)), b.attachments && g.push("attachments=true"), b.rev && g.push("rev=" + b.rev), b.conflicts && g.push("conflicts=" + b.conflicts), g = g.join("&"), g = "" === g ? "" : "?" + g, b.auto_encode && (a = d(a));
						var h = {
								headers: k.headers,
								method: "GET",
								url: f(k, a + g)
							},
							j = a.split("/");
						(j.length > 1 && "_design" !== j[0] && "_local" !== j[0] || j.length > 2 && "_design" === j[0] && "_local" !== j[0]) && (h.binary = !0), c(h, function(a, b, c) {
							return a ? e(a) : void e(null, b, c)
						})
					}), m.remove = i.toPromise(function(a, b, e) {
						return m.taskqueue.isReady ? ("function" == typeof b && (e = b, b = {}), void c({
							headers: k.headers,
							method: "DELETE",
							url: f(k, d(a._id)) + "?rev=" + a._rev
						}, e)) : void m.taskqueue.addTask("remove", arguments)
					}), m.getAttachment = i.toPromise(function(a, b, c, e) {
						"function" == typeof c && (e = c, c = {}), c = i.extend(!0, {}, c), void 0 === c.auto_encode && (c.auto_encode = !0), c.auto_encode && (a = d(a)), c.auto_encode = !1, m.get(a + "/" + b, c, e)
					}), m.removeAttachment = i.toPromise(function(a, b, e, g) {
						return m.taskqueue.isReady ? void c({
							headers: k.headers,
							method: "DELETE",
							url: f(k, d(a) + "/" + b) + "?rev=" + e
						}, g) : void m.taskqueue.addTask("removeAttachment", arguments)
					}), m.putAttachment = i.toPromise(function(a, b, e, g, h, i) {
						if (!m.taskqueue.isReady) return void m.taskqueue.addTask("putAttachment", arguments);
						"function" == typeof h && (i = h, h = g, g = e, e = null), "undefined" == typeof h && (h = g, g = e, e = null);
						var j = d(a) + "/" + b,
							l = f(k, j);
						e && (l += "?rev=" + e);
						var n = {
							headers: k.headers,
							method: "PUT",
							url: l,
							processData: !1,
							body: g,
							timeout: 6e4
						};
						n.headers["Content-Type"] = h, c(n, i)
					}), m.put = i.toPromise(function() {
						var a = Array.prototype.slice.call(arguments);
						if (!m.taskqueue.isReady) return void m.taskqueue.addTask("put", a);
						var b, e, g, h, l, n;
						if (g = a.shift(), "object" != typeof g || Array.isArray(g)) return (n = a.pop())(j.NOT_AN_OBJECT);
						for (g = i.extend(!0, {}, g);;)
							if (b = a.shift(), e = typeof b, "string" !== e || h ? "string" === e && h ? g._rev = b : "object" === e ? l = i.extend(!0, {}, b) : "function" === e && (n = b) : (g._id = b, h = !0), !a.length) break;
						l = l || {};
						var o = i.invalidIdError(g._id);
						if (o) return n(o);
						var p = [];
						l && "undefined" != typeof l.new_edits && p.push("new_edits=" + l.new_edits), p = p.join("&"), "" !== p && (p = "?" + p), c({
							headers: k.headers,
							method: "PUT",
							url: f(k, d(g._id)) + p,
							body: g
						}, n)
					}), m.post = i.toPromise(function(a, b, c) {
						return m.taskqueue.isReady ? ("function" == typeof b && (c = b, b = {}), b = i.extend(!0, {}, b), "object" != typeof a ? c(j.NOT_AN_OBJECT) : void("_id" in a ? m.put(a, b, c) : o.list.length > 0 ? (a._id = o.list.pop(), m.put(a, b, c)) : o.get(function(d) {
							return d ? c(j.UNKNOWN_ERROR) : (a._id = o.list.pop(), void m.put(a, b, c))
						}))) : void m.taskqueue.addTask("post", arguments)
					}), m.bulkDocs = i.toPromise(function(a, b, d) {
						if (!m.taskqueue.isReady) return void m.taskqueue.addTask("bulkDocs", arguments);
						if ("function" == typeof b && (d = b, b = {}), b || (b = {}), !Array.isArray(a.docs)) return d(j.error(j.NOT_AN_OBJECT, "Missing JSON list of 'docs'"));
						var e = a.docs.filter(function(a) {
							return "object" != typeof a || Array.isArray(a)
						});
						return e.length ? d(j.NOT_AN_OBJECT) : (a = i.extend(!0, {}, a), b = i.extend(!0, {}, b), "undefined" != typeof b.new_edits && (a.new_edits = b.new_edits), void c({
							headers: k.headers,
							method: "POST",
							url: f(k, "_bulk_docs"),
							body: a
						}, d))
					}), m.allDocs = i.toPromise(function(a, b) {
						if (!m.taskqueue.isReady) return void m.taskqueue.addTask("allDocs", arguments);
						"function" == typeof a && (b = a, a = {}), a = i.extend(!0, {}, a);
						var d, e = [],
							g = "GET";
						if (a.conflicts && e.push("conflicts=true"), a.descending && e.push("descending=true"), a.include_docs && e.push("include_docs=true"), a.key && e.push("key=" + encodeURIComponent(JSON.stringify(a.key))), a.startkey && e.push("startkey=" + encodeURIComponent(JSON.stringify(a.startkey))), a.endkey && e.push("endkey=" + encodeURIComponent(JSON.stringify(a.endkey))), a.limit && e.push("limit=" + a.limit), "undefined" != typeof a.skip && e.push("skip=" + a.skip), e = e.join("&"), "" !== e && (e = "?" + e), "undefined" != typeof a.keys) {
							var h = 2e3,
								j = "keys=" + encodeURIComponent(JSON.stringify(a.keys));
							j.length + e.length + 1 <= h ? e += (-1 !== e.indexOf("?") ? "&" : "?") + j : (g = "POST", d = JSON.stringify({
								keys: a.keys
							}))
						}
						c({
							headers: k.headers,
							method: g,
							url: f(k, "_all_docs" + e),
							body: d
						}, b)
					}), m.changes = function(a) {
						var b = 25;
						if (!m.taskqueue.isReady) {
							var d = m.taskqueue.addTask("changes", arguments);
							return {
								cancel: function() {
									return d.task ? d.task.cancel() : (i.call(a.complete, null, {
										status: "cancelled"
									}), a.complete = null, void(d.parameters[0].aborted = !0))
								}
							}
						}
						if (a = i.extend(!0, {}, a), a.timeout = a.timeout || 0, "latest" === a.since) {
							var e = m.changes({
								descending: !0,
								limit: 1,
								timeout: a.timeout,
								complete: function(b, c) {
									return b ? (a.aborted = !0, void i.call(a.complete, b)) : void(a.aborted || (a.since = c.last_seq, e = m.changes(a)))
								}
							});
							return {
								cancel: function() {
									return i.call(a.complete, null, {
										status: "cancelled"
									}), a.complete = null, e ? e.cancel() : void(a.aborted = !0)
								}
							}
						}
						var g = {},
							h = "undefined" != typeof a.limit ? a.limit : !1;
						0 === h && (h = 1);
						var l = h;
						if (a.style && (g.style = a.style), (a.include_docs || a.filter && "function" == typeof a.filter) && (g.include_docs = !0), a.continuous && (g.feed = "longpoll"), a.conflicts && (g.conflicts = !0), a.descending && (g.descending = !0), a.filter && "string" == typeof a.filter && (g.filter = a.filter, "_view" === a.filter && a.view && "string" == typeof a.view && (g.view = a.view)), a.query_params && "object" == typeof a.query_params)
							for (var n in a.query_params) a.query_params.hasOwnProperty(n) && (g[n] = a.query_params[n]);
						var o, p, q = function(d, e) {
								g.since = d, a.descending ? h && (g.limit = l) : g.limit = !h || l > b ? b : l;
								var i = "?" + Object.keys(g).map(function(a) {
										return a + "=" + g[a]
									}).join("&"),
									j = {
										headers: k.headers,
										method: "GET",
										url: f(k, "_changes" + i),
										timeout: a.timeout
									};
								p = d, a.aborted || (o = c(j, e))
							},
							r = 10,
							s = 0,
							t = {
								results: []
							},
							u = function(c, d) {
								var e = 0;
								if (d && d.results) {
									e = d.results.length, t.last_seq = d.last_seq;
									var f = {};
									f.query = a.query_params, d.results = d.results.filter(function(b) {
										l--;
										var c = i.filterChange(a)(b);
										return c && (t.results.push(b), i.call(a.onChange, b)), c
									})
								} else if (c) return a.aborted = !0, void i.call(a.complete, c);
								d && d.last_seq && (p = d.last_seq);
								var g = h && 0 >= l || d && b > e || a.descending;
								if (a.continuous || !g) {
									c ? s += 1 : s = 0;
									var k = 1 << s,
										m = r * k,
										n = a.maximumWait || 3e4;
									if (m > n) return void i.call(a.complete, c || j.UNKNOWN_ERROR);
									setTimeout(function() {
										q(p, u)
									}, m)
								} else i.call(a.complete, null, t)
							};
						return q(a.since || 0, u), {
							cancel: function() {
								i.call(a.complete, null, {
									status: "cancelled"
								}), a.complete = null, a.aborted = !0, o.abort()
							}
						}
					}, m.revsDiff = i.toPromise(function(a, b, d) {
						return m.taskqueue.isReady ? ("function" == typeof b && (d = b, b = {}), void c({
							headers: k.headers,
							method: "POST",
							url: f(k, "_revs_diff"),
							body: a
						}, function(a, b) {
							d(a, b)
						})) : void m.taskqueue.addTask("revsDiff", arguments)
					}), m.close = i.toPromise(function(a) {
						return m.taskqueue.isReady ? void a() : void m.taskqueue.addTask("close", arguments)
					}), m.replicateOnServer = function(a, b, c) {
						return m.taskqueue.isReady ? void a.info(function(d, e) {
							h(a, b, c, e.host)
						}) : (m.taskqueue.addTask("replicateOnServer", arguments), c)
					}, m.destroy = i.toPromise(function(a) {
						return m.taskqueue.isReady ? void i.ajax({
							url: f(k, ""),
							method: "DELETE"
						}, function(b, c) {
							b ? (m.emit("error", b), a(b)) : (m.emit("destroyed"), a(null, c))
						}) : void m.taskqueue.addTask("destroy", arguments)
					})
				}
				var i = a("../utils"),
					j = a("../deps/errors");
				c.options = {
					strictMode: !1,
					key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
					q: {
						name: "queryKey",
						parser: /(?:^|&)([^&=]*)=?([^&]*)/g
					},
					parser: {
						strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
						loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
					}
				}, h.destroy = i.toPromise(function(a, b, c) {
					var d = e(a, b);
					b = b || {}, "function" == typeof b && (c = b, b = {}), b = i.extend(!0, {}, b), b.headers = d.headers, b.method = "DELETE", b.url = f(d, ""), i.ajax(b, c)
				}), h.valid = function() {
					return !0
				}, b.exports = h
			}, {
				"../deps/errors": 8,
				"../utils": 18
			}
		],
		3: [
			function(a, b) {
				(function(c) {
					"use strict";

					function d(a) {
						return function(b) {
							a(i.error(i.IDB_ERROR, b.target, b.type))
						}
					}

					function e() {
						var a = "_pouch__checkModernIdb_" + (c.navigator && c.navigator.appVersion),
							b = c.localStorage && c.localStorage[a];
						if (b) return JSON.parse(b);
						var d = "_pouch__checkModernIdb",
							e = null === c.indexedDB.open(d, 1).onupgradeneeded;
						return c.indexedDB.deleteDatabase && c.indexedDB.deleteDatabase(d), c.localStorage && (c.localStorage[a] = JSON.stringify(e)), e
					}

					function f(a, b) {
						function e(a) {
							a.createObjectStore(o, {
								keyPath: "id"
							}).createIndex("seq", "seq", {
								unique: !0
							}), a.createObjectStore(p, {
								autoIncrement: !0
							}).createIndex("_doc_id_rev", "_doc_id_rev", {
								unique: !0
							}), a.createObjectStore(q, {
								keyPath: "digest"
							}), a.createObjectStore(r, {
								keyPath: "id",
								autoIncrement: !1
							}), a.createObjectStore(s)
						}

						function j(a) {
							var b = a.currentTarget.transaction.objectStore(o);
							b.openCursor().onsuccess = function(a) {
								var c = a.target.result;
								if (c) {
									var d = c.value,
										e = g.isDeleted(d),
										f = g.isLocalId(d.id);
									d.deletedOrLocal = e || f ? "1" : "0", b.put(d), c["continue"]()
								} else b.createIndex("deletedOrLocal", "deletedOrLocal", {
									unique: !1
								})
							}
						}

						function k(a, b) {
							return a._bulk_seq - b._bulk_seq
						}

						function l(a, b, c) {
							var d = b.keys,
								e = "descending" in b ? b.descending : !1;
							if (d.length) {
								var f = [];
								d.forEach(function(h) {
									var i = g.extend(!0, {}, b);
									i.keys_request = !0, i.key = h, delete i.keys, delete i.skip, delete i.limit, m(a, i, function(g, i) {
										if (f.push({
											err: g,
											res: i,
											key: h
										}), f.length === d.length) {
											for (var j = {}, k = 0; k < f.length; k++) {
												var l = f[k];
												if (l.err) return void c(g);
												j[l.key] = l
											}
											var m = [];
											d.forEach(function(a) {
												var b = j[a];
												m.push(b.res.rows.length ? b.res.rows[0] : {
													key: a,
													error: "not_found"
												})
											}), e && (m = m.reverse()), c(null, {
												total_rows: a,
												offset: b.skip,
												rows: "limit" in b ? m.slice(b.skip, b.limit + b.skip) : b.skip > 0 ? m.slice(b.skip) : m
											})
										}
									})
								})
							} else c(null, {
								offset: b.skip,
								rows: [],
								total_rows: a
							})
						}

						function m(a, b, d) {
							var e = "startkey" in b ? b.startkey : !1,
								f = "endkey" in b ? b.endkey : !1,
								j = "key" in b ? b.key : !1,
								k = "descending" in b && b.descending ? "prev" : null,
								l = 0,
								m = !1;
							k && e && f && (m = f, f = !1);
							var n;
							try {
								n = e && f ? c.IDBKeyRange.bound(e, f) : e ? k ? c.IDBKeyRange.upperBound(e) : c.IDBKeyRange.lowerBound(e) : f ? k ? c.IDBKeyRange.lowerBound(f) : c.IDBKeyRange.upperBound(f) : j ? c.IDBKeyRange.only(j) : null
							} catch (q) {
								return "DataError" === q.name && 0 === q.code ? d(null, {
									total_rows: a,
									offset: b.skip,
									rows: []
								}) : d(i.error(i.IDB_ERROR, q.name, q.message))
							}
							var r = y.transaction([o, p], "readonly");
							r.oncomplete = function() {
								d(null, {
									total_rows: a,
									offset: b.skip,
									rows: u
								})
							};
							var s = r.objectStore(o),
								t = k ? s.openCursor(n, k) : s.openCursor(n),
								u = [];
							t.onsuccess = function(a) {
								function c(a, c) {
									if (g.isLocalId(a.id)) return d["continue"]();
									var e = {
										id: a.id,
										key: a.id,
										value: {
											rev: h.winningRev(a)
										}
									};
									if (b.include_docs) {
										e.doc = c, e.doc._rev = h.winningRev(a), e.doc._doc_id_rev && delete e.doc._doc_id_rev, b.conflicts && (e.doc._conflicts = h.collectConflicts(a));
										for (var f in e.doc._attachments) e.doc._attachments.hasOwnProperty(f) && (e.doc._attachments[f].stub = !0)
									}
									if (b.keys_request) g.isDeleted(a) && (e.value.deleted = !0, e.doc = null), u.push(e);
									else if (!g.isDeleted(a))
										if (!u.length && b.skip > 0 && l < b.skip) l++;
										else {
											if (m && e.key <= m) return void(e.key === m && u.push(e));
											if ("limit" in b && u.length === b.limit) return;
											u.push(e)
										}
									d["continue"]()
								}
								if (a.target.result) {
									var d = a.target.result,
										e = d.value;
									if (b.include_docs) {
										var f = r.objectStore(p).index("_doc_id_rev"),
											i = h.winningRev(e),
											j = e.id + "::" + i;
										f.get(j).onsuccess = function(a) {
											c(d.value, a.target.result)
										}
									} else c(e)
								}
							}
						}
						var n = 2,
							o = "document-store",
							p = "by-sequence",
							q = "attach-store",
							r = "meta-store",
							s = "detect-blob-support",
							t = a.name,
							u = c.indexedDB.open(t, n);
						"openReqList" in f || (f.openReqList = {}), f.openReqList[t] = u;
						var v = null,
							w = null,
							x = this,
							y = null;
						u.onupgradeneeded = function(a) {
							var b = a.target.result;
							a.oldVersion < 1 && e(b), a.oldVersion < 2 && j(a)
						}, u.onsuccess = function(a) {
							y = a.target.result, y.onversionchange = function() {
								y.close()
							};
							var c = y.transaction([r, s], "readwrite"),
								d = c.objectStore(r).get(r);
							d.onsuccess = function(a) {
								var d = !1,
									e = function() {
										null !== v && d && b(null, x)
									},
									f = a.target.result || {
										id: r
									};
								t + "_id" in f ? (w = f[t + "_id"], d = !0, e()) : (w = g.uuid(), f[t + "_id"] = w, c.objectStore(r).put(f).onsuccess = function() {
									d = !0, e()
								});
								try {
									c.objectStore(s).put(g.createBlob(), "key"), v = !0
								} catch (h) {
									v = !1
								} finally {
									e()
								}
							}
						}, u.onerror = d(b), x.type = function() {
							return "idb"
						}, x._id = g.toPromise(function(a) {
							a(null, w)
						}), x._bulkDocs = function(a, b, c) {
							function e(a) {
								var b = a.target.result;
								b.updateSeq = (b.updateSeq || 0) + G, E.objectStore(r).put(b)
							}

							function j() {
								if (!C.length) return void(E.objectStore(r).get(r).onsuccess = e);
								var a = C.shift(),
									b = E.objectStore(o).get(a.metadata.id);
								b.onsuccess = function(b) {
									var c = b.target.result;
									c ? u(c, a) : w(a)
								}
							}

							function l() {
								var a = [];
								F.sort(k), F.forEach(function(b) {
									if (delete b._bulk_seq, b.error) return void a.push(b);
									var c = b.metadata,
										d = h.winningRev(c);
									a.push({
										ok: !0,
										id: c.id,
										rev: d
									}), g.isLocalId(c.id) || (f.Changes.notify(t), f.Changes.notifyLocalWindows(t))
								}), c(null, a)
							}

							function m(a, b) {
								if (a.stub) return b();
								if ("string" == typeof a.data) {
									var d;
									try {
										d = atob(a.data)
									} catch (e) {
										var f = i.error(i.BAD_ARG, "Attachments need to be base64 encoded");
										return c(f)
									}
									if (a.digest = "md5-" + g.Crypto.MD5(d), v) {
										var h = a.content_type;
										d = g.fixBinary(d), a.data = g.createBlob([d], {
											type: h
										})
									}
									return b()
								}
								var j = new FileReader;
								j.onloadend = function() {
									a.digest = "md5-" + g.Crypto.MD5(this.result), v || (a.data = btoa(this.result)), b()
								}, j.readAsBinaryString(a.data)
							}

							function n(a) {
								function b() {
									c++, C.length === c && a()
								}
								if (!C.length) return a();
								var c = 0;
								C.forEach(function(a) {
									function c() {
										e++, e === d.length && b()
									}
									var d = a.data && a.data._attachments ? Object.keys(a.data._attachments) : [];
									if (!d.length) return b();
									var e = 0;
									for (var f in a.data._attachments) a.data._attachments.hasOwnProperty(f) && m(a.data._attachments[f], c)
								})
							}

							function s(a, b) {
								function c(a) {
									f || (a ? (f = a, b(f)) : h === i.length && e())
								}

								function d(a) {
									h++, c(a)
								}

								function e() {
									a.data._doc_id_rev = a.data._id + "::" + a.data._rev;
									var c = E.objectStore(p).put(a.data);
									c.onsuccess = function(c) {
										a.metadata.seq = c.target.result, delete a.metadata.rev;
										var d = g.isDeleted(a.metadata),
											e = g.isLocalId(a.metadata.id),
											f = g.extend(!0, {
												deletedOrLocal: d || e ? "1" : "0"
											}, a.metadata),
											h = E.objectStore(o).put(f);
										h.onsuccess = function() {
											F.push(a), g.call(b)
										}
									}
								}
								var f = null,
									h = 0;
								a.data._id = a.metadata.id, a.data._rev = a.metadata.rev, G++, g.isDeleted(a.metadata, a.metadata.rev) && (a.data._deleted = !0);
								var i = a.data._attachments ? Object.keys(a.data._attachments) : [];
								for (var j in a.data._attachments)
									if (a.data._attachments[j].stub) h++, c();
									else {
										var k = a.data._attachments[j].data;
										delete a.data._attachments[j].data;
										var l = a.data._attachments[j].digest;
										z(a, l, k, d)
									}
								i.length || e()
							}

							function u(a, b) {
								var c = h.merge(a.rev_tree, b.metadata.rev_tree[0], 1e3),
									d = g.isDeleted(a),
									e = d && g.isDeleted(b.metadata) || !d && A && "new_leaf" !== c.conflicts;
								return e ? (F.push(x(i.REV_CONFLICT, b._bulk_seq)), j()) : (b.metadata.rev_tree = c.tree, void s(b, j))
							}

							function w(a) {
								return "was_delete" in b && g.isDeleted(a.metadata) ? (F.push(i.MISSING_DOC), j()) : void s(a, j)
							}

							function x(a, b) {
								return a._bulk_seq = b, a
							}

							function z(a, b, c, d) {
								var e = E.objectStore(q);
								e.get(b).onsuccess = function(f) {
									var h = f.target.result && f.target.result.refs || {},
										i = [a.metadata.id, a.metadata.rev].join("@"),
										j = {
											digest: b,
											body: c,
											refs: h
										};
									j.refs[i] = !0, e.put(j).onsuccess = function() {
										g.call(d)
									}
								}
							}
							var A = b.new_edits,
								B = a.docs,
								C = B.map(function(a, b) {
									var c = g.parseDoc(a, A);
									return c._bulk_seq = b, c
								}),
								D = C.filter(function(a) {
									return a.error
								});
							if (D.length) return c(D[0]);
							var E, F = [],
								G = 0;
							n(function() {
								E = y.transaction([o, p, q, r], "readwrite"), E.onerror = d(c), E.ontimeout = d(c), E.oncomplete = l, j()
							})
						}, x._get = function(a, b, c) {
							function d() {
								c(j, {
									doc: e,
									metadata: f,
									ctx: k
								})
							}
							var e, f, j, k;
							b = g.extend(!0, {}, b), k = b.ctx ? b.ctx : y.transaction([o, p, q], "readonly"), k.objectStore(o).get(a).onsuccess = function(a) {
								if (f = a.target.result, !f) return j = i.MISSING_DOC, d();
								if (g.isDeleted(f) && !b.rev) return j = i.error(i.MISSING_DOC, "deleted"), d();
								var c = h.winningRev(f),
									l = f.id + "::" + (b.rev ? b.rev : c),
									m = k.objectStore(p).index("_doc_id_rev");
								m.get(l).onsuccess = function(a) {
									return e = a.target.result, e && e._doc_id_rev && delete e._doc_id_rev, e ? void d() : (j = i.MISSING_DOC, d())
								}
							}
						}, x._getAttachment = function(a, b, c) {
							var d, e;
							b = g.extend(!0, {}, b), e = b.ctx ? b.ctx : y.transaction([o, p, q], "readonly");
							var f = a.digest,
								h = a.content_type;
							e.objectStore(q).get(f).onsuccess = function(a) {
								var e = a.target.result.body;
								if (b.encode)
									if (v) {
										var f = new FileReader;
										f.onloadend = function() {
											d = btoa(this.result), c(null, d)
										}, f.readAsBinaryString(e)
									} else d = e, c(null, d);
								else v ? d = e : (e = g.fixBinary(atob(e)), d = g.createBlob([e], {
									type: h
								})), c(null, d)
							}
						}, x._allDocs = function(a, b) {
							function e(a) {
								f = a.target.result
							}
							var f, g = y.transaction([o], "readonly"),
								h = g.objectStore(o).index("deletedOrLocal");
							h.count(c.IDBKeyRange.only("0")).onsuccess = e, g.onerror = d(b), g.oncomplete = function() {
								"keys" in a ? l(f, a, b) : m(f, a, b)
							}
						}, x._info = function(a) {
							function b(a) {
								e = a.target.result && a.target.result.updateSeq || 0
							}

							function c(a) {
								var c = a.target.result;
								return c ? (c.value.deleted !== !0 && d++, void c["continue"]()) : void(f.objectStore(r).get(r).onsuccess = b)
							}
							var d = 0,
								e = 0,
								f = y.transaction([o, r], "readonly");
							f.oncomplete = function() {
								a(null, {
									db_name: t,
									doc_count: d,
									update_seq: e
								})
							}, f.objectStore(o).openCursor().onsuccess = c
						}, x._changes = function(a) {
							function b() {
								l = y.transaction([o, p]), l.oncomplete = e;
								var b;
								b = j ? l.objectStore(p).openCursor(c.IDBKeyRange.lowerBound(a.since, !0), j) : l.objectStore(p).openCursor(c.IDBKeyRange.lowerBound(a.since, !0)), b.onsuccess = d, b.onerror = onerror
							}

							function d(b) {
								if (!b.target.result) {
									for (var c = 0, d = m.length; d > c; c++) {
										var e = m[c];
										e && q.push(e)
									}
									return !1
								}
								var f = b.target.result,
									i = f.value._id,
									j = n[i];
								if (void 0 !== j) return m[j].seq = f.key, m.push(m[j]), m[j] = null, n[i] = m.length - 1, f["continue"]();
								var r = l.objectStore(o);
								r.get(f.value._id).onsuccess = function(b) {
									var c = b.target.result;
									if (g.isLocalId(c.id)) return f["continue"]();
									k < c.seq && (k = c.seq);
									var d = h.winningRev(c),
										e = c.id + "::" + d,
										i = l.objectStore(p).index("_doc_id_rev");
									i.get(e).onsuccess = function(b) {
										var e = b.target.result;
										delete e._doc_id_rev, e._rev = d;
										var g = a.processChange(e, c, a);
										g.seq = f.key;
										var h = g.id,
											i = n[h];
										void 0 !== i && (m[i] = null), m.push(g), n[h] = m.length - 1, f["continue"]()
									}
								}
							}

							function e() {
								g.processChanges(a, q, k)
							}
							if (a = g.extend(!0, {}, a), a.continuous) {
								var i = t + ":" + g.uuid();
								return a.cancelled = !1, f.Changes.addListener(t, i, x, a), f.Changes.notify(t), {
									cancel: function() {
										a.complete(null, {
											status: "cancelled"
										}), a.complete = null, a.cancelled = !0, f.Changes.removeListener(t, i)
									}
								}
							}
							var j = a.descending ? "prev" : null,
								k = 0;
							a.since = a.since && !j ? a.since : 0;
							var l, m = [],
								n = {},
								q = [];
							b()
						}, x._close = function(a) {
							return null === y ? a(i.NOT_OPEN) : (y.close(), void a())
						}, x._getRevisionTree = function(a, b) {
							var c = y.transaction([o], "readonly"),
								d = c.objectStore(o).get(a);
							d.onsuccess = function(a) {
								var c = a.target.result;
								c ? b(null, c.rev_tree) : b(i.MISSING_DOC)
							}
						}, x._doCompaction = function(a, b, c, d) {
							var e = y.transaction([o, p], "readwrite"),
								f = e.objectStore(o);
							f.get(a).onsuccess = function(d) {
								var f = d.target.result;
								f.rev_tree = b;
								var h = c.length;
								c.forEach(function(b) {
									var c = e.objectStore(p).index("_doc_id_rev"),
										d = a + "::" + b;
									c.getKey(d).onsuccess = function(a) {
										var b = a.target.result;
										if (b && (e.objectStore(p)["delete"](b), h--, !h)) {
											if (f) {
												var c = g.isDeleted(f),
													d = g.isLocalId(f.id);
												f = g.extend(!0, {
													deletedOrLocal: c || d ? "1" : "0"
												}, f)
											}
											e.objectStore(o).put(f)
										}
									}
								})
							}, e.oncomplete = function() {
								g.call(d)
							}
						}
					}
					var g = a("../utils"),
						h = a("../merge"),
						i = a("../deps/errors");
					f.valid = function() {
						return c.indexedDB && e()
					}, f.destroy = g.toPromise(function(a, b, e) {
						"openReqList" in f || (f.openReqList = {}), f.Changes.clearListeners(a), f.openReqList[a] && f.openReqList[a].result && f.openReqList[a].result.close();
						var g = c.indexedDB.deleteDatabase(a);
						g.onsuccess = function() {
							f.openReqList[a] && (f.openReqList[a] = null), e()
						}, g.onerror = d(e)
					}), f.Changes = new g.Changes, b.exports = f
				}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {
				"../deps/errors": 8,
				"../merge": 14,
				"../utils": 18
			}
		],
		4: [
			function(a, b) {
				(function(c) {
					"use strict";

					function d(a) {
						return "'" + a + "'"
					}

					function e() {
						return "undefined" != typeof c ? c.navigator && c.navigator.sqlitePlugin && c.navigator.sqlitePlugin.openDatabase ? navigator.sqlitePlugin.openDatabase.apply(navigator.sqlitePlugin, arguments) : c.sqlitePlugin && c.sqlitePlugin.openDatabase ? c.sqlitePlugin.openDatabase.apply(c.sqlitePlugin, arguments) : c.openDatabase.apply(c, arguments) : void 0
					}

					function f(a) {
						return function(b) {
							var c = b && b.constructor.toString().match(/function ([^\(]+)/),
								d = c && c[1] || b.type,
								e = b.target || b.message;
							a(n.error(n.WSQ_ERROR, e, d))
						}
					}

					function g(a) {
						for (var b = "", c = 0, d = a.length; d > c; c += 2) b += String.fromCharCode(parseInt(a.substring(c, c + 2), 16));
						return b
					}

					function h(a) {
						for (var b = 1, c = a.length; c > b; b += 2)
							if ("\x00" !== a.charAt(b)) return !1;
						return !0
					}

					function i(a) {
						for (var b = "", c = 0, d = a.length; d > c; c += 2) b += a.charAt(c);
						return b
					}

					function j(a) {
						var b;
						try {
							b = decodeURIComponent(window.escape(a))
						} catch (c) {
							b = a
						}
						return h(b) ? i(b) : b
					}

					function k(a, b) {
						function h() {
							b(null, D)
						}

						function i(a) {
							a.executeSql(x), a.executeSql("ALTER TABLE " + s + " ADD COLUMN deleted TINYINT(1) DEFAULT 0", [], function() {
								a.executeSql(v), a.executeSql("ALTER TABLE " + r + " ADD COLUMN local TINYINT(1) DEFAULT 0", [], function() {
									a.executeSql(w);
									var b = "SELECT " + r + ".winningseq AS seq, " + r + ".json AS metadata FROM " + s + " JOIN " + r + " ON " + s + ".seq = " + r + ".winningseq";
									a.executeSql(b, [], function(a, b) {
										for (var c = [], d = [], e = 0; e < b.rows.length; e++) {
											var f = b.rows.item(e),
												g = f.seq,
												h = JSON.parse(f.metadata);
											l.isDeleted(h) && c.push(g), l.isLocalId(h.id) && d.push(h.id)
										}
										a.executeSql("UPDATE " + r + "SET local = 1 WHERE id IN (" + d.map(function() {
											return "?"
										}).join(",") + ")", d), a.executeSql("UPDATE " + s + " SET deleted = 1 WHERE seq IN (" + c.map(function() {
											return "?"
										}).join(",") + ")", c)
									})
								})
							})
						}

						function A() {
							for (; y.length > 0;) {
								var a = y.pop();
								a(null, E)
							}
						}

						function B(a, b) {
							if (0 === b) {
								var c = "CREATE TABLE IF NOT EXISTS " + u + " (update_seq, dbid, db_version INTEGER)",
									d = "CREATE TABLE IF NOT EXISTS " + t + " (digest, json, body BLOB)",
									e = "CREATE TABLE IF NOT EXISTS " + r + " (id unique, seq, json, winningseq, local TINYINT(1))",
									f = "CREATE TABLE IF NOT EXISTS " + s + " (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, doc_id_rev UNIQUE, json, deleted TINYINT(1))";
								a.executeSql(d), a.executeSql(e, [], function() {
									a.executeSql(x), a.executeSql(w)
								}), a.executeSql(f, [], function() {
									a.executeSql(v)
								}), a.executeSql(c, [], function() {
									var b = "INSERT INTO " + u + " (update_seq, db_version, dbid) VALUES (?, ?, ?)";
									E = l.uuid(), a.executeSql(b, [0, q, E]), A()
								})
							} else 1 === b && (i(a), a.executeSql("UPDATE " + u + " SET db_version = " + q)), a.executeSql("SELECT dbid FROM " + u, [], function(a, b) {
								E = b.rows.item(0).dbid, A()
							})
						}

						function C() {
							G.transaction(function(a) {
								a.executeSql("SELECT sql FROM sqlite_master WHERE tbl_name = " + u, [], function(a, b) {
									b.rows.length ? /db_version/.test(b.rows.item(0).sql) ? a.executeSql("SELECT db_version FROM " + u, [], function(a, b) {
										var c = b.rows.item(0).db_version;
										B(a, c)
									}) : a.executeSql("ALTER TABLE " + u + " ADD COLUMN db_version INTEGER", [], function() {
										B(a, 1)
									}) : B(a, 0)
								})
							}, f(b), h)
						}
						var D = this,
							E = null,
							F = a.name,
							G = z[F];
						return G || (z[F] = G = e(F, o, F, p)), G ? (l.isCordova() && "undefined" != typeof c ? c.addEventListener(F + "_pouch", function H() {
							c.removeEventListener(F + "_pouch", H, !1), C()
						}, !1) : C(), D.type = function() {
							return "websql"
						}, D._id = l.toPromise(function(a) {
							a(null, E)
						}), D._info = function(a) {
							G.transaction(function(b) {
								var c = "SELECT COUNT(id) AS count FROM " + r;
								b.executeSql(c, [], function(b, c) {
									var d = c.rows.item(0).count,
										e = "SELECT update_seq FROM " + u;
									b.executeSql(e, [], function(b, c) {
										var e = c.rows.item(0).update_seq;
										a(null, {
											db_name: F,
											doc_count: d,
											update_seq: e
										})
									})
								})
							})
						}, D._bulkDocs = function(a, b, c) {
							function d(a, b) {
								return a._bulk_seq - b._bulk_seq
							}

							function e() {
								var a = [];
								D.sort(d), D.forEach(function(b) {
									if (delete b._bulk_seq, b.error) return void a.push(b);
									var c = b.metadata,
										d = m.winningRev(c);
									a.push({
										ok: !0,
										id: c.id,
										rev: d
									}), l.isLocalId(c.id) || (z++, k.Changes.notify(F), k.Changes.notifyLocalWindows(F))
								});
								var b = "SELECT update_seq FROM " + u;
								C.executeSql(b, [], function(b, d) {
									var e = d.rows.item(0).update_seq + z,
										f = "UPDATE " + u + " SET update_seq=?";
									b.executeSql(f, [e], function() {
										c(null, a)
									})
								})
							}

							function g(a, b) {
								if (a.stub) return b();
								if ("string" == typeof a.data) {
									try {
										a.data = atob(a.data)
									} catch (d) {
										var e = n.error(n.BAD_ARG, "Attachments need to be base64 encoded");
										return c(e)
									}
									var f = l.fixBinary(a.data);
									a.data = l.createBlob([f], {
										type: a.content_type
									})
								}
								var g = new FileReader;
								g.onloadend = function() {
									a.data = this.result, a.digest = "md5-" + l.Crypto.MD5(this.result), b()
								}, g.readAsBinaryString(a.data)
							}

							function h(a) {
								function b() {
									c++, A.length === c && a()
								}
								if (!A.length) return a();
								var c = 0;
								A.forEach(function(a) {
									function c() {
										e++, e === d.length && b()
									}
									var d = a.data && a.data._attachments ? Object.keys(a.data._attachments) : [],
										e = 0;
									if (!d.length) return b();
									for (var f in a.data._attachments) a.data._attachments.hasOwnProperty(f) && g(a.data._attachments[f], c)
								})
							}

							function i(a, b, c) {
								function d() {
									var b = a.data,
										c = "INSERT INTO " + s + " (doc_id_rev, json, deleted) VALUES (?, ?, ?);",
										d = [b._id + "::" + b._rev, JSON.stringify(b), l.isDeleted(a.metadata, a.metadata.rev) ? 1 : 0];
									C.executeSql(c, d, g)
								}

								function e(a) {
									h || (a ? (h = a, b(h)) : i === j.length && d())
								}

								function f(a) {
									i++, e(a)
								}

								function g(d, e) {
									var f = a.metadata.seq = e.insertId;
									delete a.metadata.rev;
									var g = m.winningRev(a.metadata),
										h = c ? "UPDATE " + r + " SET seq=?, json=?, winningseq=(SELECT seq FROM " + s + " WHERE doc_id_rev=?) WHERE id=?" : "INSERT INTO " + r + " (id, seq, winningseq, json, local) VALUES (?, ?, ?, ?, ?);",
										i = JSON.stringify(a.metadata),
										j = a.metadata.id + "::" + g,
										k = l.isLocalId(a.metadata.id) ? 1 : 0,
										n = c ? [f, i, j, a.metadata.id] : [a.metadata.id, f, f, i, k];
									d.executeSql(h, n, function() {
										D.push(a), b()
									})
								}
								var h = null,
									i = 0;
								a.data._id = a.metadata.id, a.data._rev = a.metadata.rev, l.isDeleted(a.metadata, a.metadata.rev) && (a.data._deleted = !0);
								var j = a.data._attachments ? Object.keys(a.data._attachments) : [];
								for (var k in a.data._attachments)
									if (a.data._attachments[k].stub) i++, e();
									else {
										var n = a.data._attachments[k].data;
										delete a.data._attachments[k].data;
										var o = a.data._attachments[k].digest;
										v(a, o, n, f)
									}
								j.length || d()
							}

							function j(a, b) {
								var c = m.merge(a.rev_tree, b.metadata.rev_tree[0], 1e3),
									d = l.isDeleted(a) && l.isDeleted(b.metadata) || !l.isDeleted(a) && x && "new_leaf" !== c.conflicts;
								return d ? (D.push(q(n.REV_CONFLICT, b._bulk_seq)), p()) : (b.metadata.rev_tree = c.tree, void i(b, p, !0))
							}

							function o(a) {
								return "was_delete" in b && l.isDeleted(a.metadata) ? (D.push(n.MISSING_DOC), p()) : void i(a, p, !1)
							}

							function p() {
								if (!A.length) return e();
								var a = A.shift(),
									b = a.metadata.id;
								b in E ? j(E[b], a) : (E[b] = a.metadata, o(a))
							}

							function q(a, b) {
								return a._bulk_seq = b, a
							}

							function v(a, b, c, d) {
								var e = [a.metadata.id, a.metadata.rev].join("@"),
									f = {
										digest: b
									},
									g = "SELECT digest, json FROM " + t + " WHERE digest=?";
								C.executeSql(g, [b], function(a, h) {
									h.rows.length ? (f.refs = JSON.parse(h.rows.item(0).json).refs, g = "UPDATE " + t + " SET json=?, body=? WHERE digest=?", a.executeSql(g, [JSON.stringify(f), c, b], function() {
										d()
									})) : (f.refs = {}, f.refs[e] = !0, g = "INSERT INTO " + t + "(digest, json, body) VALUES (?, ?, ?)", a.executeSql(g, [b, JSON.stringify(f), c], function() {
										d()
									}))
								})
							}

							function w(a, b) {
								for (var c = 0; c < b.rows.length; c++) {
									var d = b.rows.item(c);
									E[d.id] = JSON.parse(d.json)
								}
								p()
							}
							var x = b.new_edits,
								y = a.docs,
								z = 0,
								A = y.map(function(a, b) {
									var c = l.parseDoc(a, x);
									return c._bulk_seq = b, c
								}),
								B = A.filter(function(a) {
									return a.error
								});
							if (B.length) return c(B[0]);
							var C, D = [],
								E = {};
							h(function() {
								G.transaction(function(a) {
									C = a;
									var b = "SELECT * FROM " + r + " WHERE id IN (" + A.map(function() {
											return "?"
										}).join(",") + ")",
										c = A.map(function(a) {
											return a.metadata.id
										});
									C.executeSql(b, c, w)
								}, f(c))
							})
						}, D._get = function(a, b, c) {
							function d() {
								c(g, {
									doc: e,
									metadata: f,
									ctx: h
								})
							}
							b = l.extend(!0, {}, b);
							var e, f, g;
							if (!b.ctx) return void G.transaction(function(d) {
								b.ctx = d, D._get(a, b, c)
							});
							var h = b.ctx,
								i = "SELECT * FROM " + r + " WHERE id=?";
							h.executeSql(i, [a], function(a, c) {
								if (!c.rows.length) return g = n.MISSING_DOC, d();
								if (f = JSON.parse(c.rows.item(0).json), l.isDeleted(f) && !b.rev) return g = n.error(n.MISSING_DOC, "deleted"), d();
								var i = m.winningRev(f),
									j = b.rev ? b.rev : i;
								j = f.id + "::" + j;
								var k = "SELECT * FROM " + s + " WHERE doc_id_rev=?";
								h.executeSql(k, [j], function(a, b) {
									return b.rows.length ? (e = JSON.parse(b.rows.item(0).json), void d()) : (g = n.MISSING_DOC, d())
								})
							})
						}, D._allDocs = function(a, b) {
							var c, d = [],
								e = {},
								g = s + " JOIN " + r + " ON " + s + ".seq = " + r + ".winningseq",
								h = "startkey" in a ? a.startkey : !1,
								i = "endkey" in a ? a.endkey : !1,
								j = "key" in a ? a.key : !1,
								k = "descending" in a ? a.descending : !1,
								n = "keys" in a ? a.keys : !1,
								o = "limit" in a ? a.limit : !1,
								p = "skip" in a ? a.skip : !1,
								q = [],
								t = [r + ".local = 0"];
							j !== !1 ? (t.push(r + ".id = ?"), q.push(j)) : n !== !1 ? (t.push(r + ".id in (" + n.map(function() {
								return "?"
							}).join(",") + ")"), q = q.concat(n)) : (h !== !1 || i !== !1) && (h !== !1 && (t.push(r + ".id " + (k ? "<=" : ">=") + " ?"), q.push(h)), i !== !1 && (t.push(r + ".id " + (k ? ">=" : "<=") + " ?"), q.push(i)), j !== !1 && (t.push(r + ".id = ?"), q.push(j))), n === !1 && t.push(s + ".deleted = 0"), G.transaction(function(b) {
								var f = "SELECT COUNT(" + r + ".id) AS 'num' FROM " + g + " WHERE " + s + ".deleted = 0 AND " + r + ".local = 0";
								b.executeSql(f, [], function(b, f) {
									c = f.rows.item(0).num;
									var h = "SELECT " + r + ".id, " + s + ".seq, " + s + ".json AS data, " + r + ".json AS metadata FROM " + g;
									t.length && (h += " WHERE " + t.join(" AND ")), h += " ORDER BY " + r + ".id " + (k ? "DESC" : "ASC"), o !== !1 && (h += " LIMIT " + o), p !== !1 && p > 0 && (o === !1 && (h += " LIMIT -1"), h += " OFFSET " + p), b.executeSql(h, q, function(b, c) {
										for (var f = 0, g = c.rows.length; g > f; f++) {
											var h = c.rows.item(f),
												i = JSON.parse(h.metadata),
												j = JSON.parse(h.data);
											if (h = {
												id: i.id,
												key: i.id,
												value: {
													rev: m.winningRev(i)
												}
											}, a.include_docs) {
												h.doc = j, h.doc._rev = m.winningRev(i), a.conflicts && (h.doc._conflicts = m.collectConflicts(i));
												for (var k in h.doc._attachments) h.doc._attachments.hasOwnProperty(k) && (h.doc._attachments[k].stub = !0)
											}
											"keys" in a ? a.keys.indexOf(i.id) > -1 && (l.isDeleted(i) && (h.value.deleted = !0, h.doc = null), e[h.id] = h) : d.push(h)
										}
									})
								})
							}, f(b), function() {
								"keys" in a && (a.keys.forEach(function(a) {
									d.push(a in e ? e[a] : {
										key: a,
										error: "not_found"
									})
								}), a.descending && d.reverse()), b(null, {
									total_rows: c,
									offset: a.skip,
									rows: d
								})
							})
						}, D._changes = function(a) {
							function b() {
								var b = "SELECT " + r + ".id, " + s + ".seq, " + s + ".json AS data, " + r + ".json AS metadata FROM " + s + " JOIN " + r + " ON " + s + ".seq = " + r + ".winningseq WHERE " + r + ".seq > " + a.since + " ORDER BY " + r + ".seq " + (d ? "DESC" : "ASC");
								G.transaction(function(c) {
									c.executeSql(b, [], function(b, c) {
										for (var d = 0, f = 0, g = c.rows.length; g > f; f++) {
											var h = c.rows.item(f),
												i = JSON.parse(h.metadata);
											if (!l.isLocalId(i.id)) {
												d < h.seq && (d = h.seq);
												var j = JSON.parse(h.data),
													k = a.processChange(j, i, a);
												k.seq = h.seq, e.push(k)
											}
										}
										l.processChanges(a, e, d)
									})
								})
							}
							if (a = l.extend(!0, {}, a), a.continuous) {
								var c = F + ":" + l.uuid();
								return a.cancelled = !1, k.Changes.addListener(F, c, D, a), k.Changes.notify(F), {
									cancel: function() {
										a.complete(null, {
											status: "cancelled"
										}), a.complete = null, a.cancelled = !0, k.Changes.removeListener(F, c)
									}
								}
							}
							var d = a.descending;
							a.since = a.since && !d ? a.since : 0;
							var e = [];
							b()
						}, D._close = function(a) {
							a()
						}, D._getAttachment = function(a, b, c) {
							var d, e = b.ctx,
								f = a.digest,
								h = a.content_type,
								i = "SELECT hex(body) as body FROM " + t + " WHERE digest=?";
							e.executeSql(i, [f], function(a, e) {
								var f = j(g(e.rows.item(0).body));
								b.encode ? d = btoa(f) : (f = l.fixBinary(f), d = l.createBlob([f], {
									type: h
								})), c(null, d)
							})
						}, D._getRevisionTree = function(a, b) {
							G.transaction(function(c) {
								var d = "SELECT json AS metadata FROM " + r + " WHERE id = ?";
								c.executeSql(d, [a], function(a, c) {
									if (c.rows.length) {
										var d = JSON.parse(c.rows.item(0).metadata);
										b(null, d.rev_tree)
									} else b(n.MISSING_DOC)
								})
							})
						}, void(D._doCompaction = function(a, b, c, e) {
							G.transaction(function(f) {
								var g = "SELECT json AS metadata FROM " + r + " WHERE id = ?";
								f.executeSql(g, [a], function(f, g) {
									if (!g.rows.length) return l.call(e);
									var h = JSON.parse(g.rows.item(0).metadata);
									h.rev_tree = b;
									var i = "DELETE FROM " + s + " WHERE doc_id_rev IN (" + c.map(function(b) {
										return d(a + "::" + b)
									}).join(",") + ")";
									f.executeSql(i, [], function(b) {
										var c = "UPDATE " + r + " SET json = ? WHERE id = ?";
										b.executeSql(c, [JSON.stringify(h), a], function() {
											e()
										})
									})
								})
							})
						})) : b(n.UNKNOWN_ERROR)
					}
					var l = a("../utils"),
						m = a("../merge"),
						n = a("../deps/errors"),
						o = 1,
						p = 5242880,
						q = 2,
						r = d("document-store"),
						s = d("by-sequence"),
						t = d("attach-store"),
						u = d("metadata-store"),
						v = "CREATE INDEX IF NOT EXISTS 'by-seq-deleted-idx' ON " + s + " (seq, deleted)",
						w = "CREATE INDEX IF NOT EXISTS 'doc-store-local-idx' ON " + r + " (local, id)",
						x = "CREATE INDEX IF NOT EXISTS 'doc-winningseq-idx' ON " + r + " (winningseq)",
						y = [],
						z = {};
					k.valid = function() {
						if ("undefined" != typeof c) {
							if (c.navigator && c.navigator.sqlitePlugin && c.navigator.sqlitePlugin.openDatabase) return !0;
							if (c.sqlitePlugin && c.sqlitePlugin.openDatabase) return !0;
							if (c.openDatabase) return !0
						}
						return !1
					}, k.destroy = l.toPromise(function(a, b, c) {
						var d = this,
							g = e(a, o, a, p);
						g.transaction(function(a) {
							a.executeSql("DROP TABLE IF EXISTS " + r, []), a.executeSql("DROP TABLE IF EXISTS " + s, []), a.executeSql("DROP TABLE IF EXISTS " + t, []), a.executeSql("DROP TABLE IF EXISTS " + u, [])
						}, f(c), function() {
							d.emit("destroyed"), c()
						})
					}), k.Changes = new l.Changes, b.exports = k
				}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {
				"../deps/errors": 8,
				"../merge": 14,
				"../utils": 18
			}
		],
		5: [
			function(a, b) {
				(function(c) {
					"use strict";

					function d(a) {
						a && c.debug && console.error(a)
					}

					function e(a, b, c) {
						if (!(this instanceof e)) return new e(a, b, c);
						var j = this;
						("function" == typeof b || "undefined" == typeof b) && (c = b, b = {}), "object" == typeof a && (b = a, a = void 0), "undefined" == typeof c && (c = d), b = b || {};
						var k = c;
						j.auto_compaction = b.auto_compaction, j.prefix = e.prefix, f.call(j), j.taskqueue = new i;
						var l = new h(function(d, f) {
							c = function(a, b) {
								return a ? f(a) : (delete b.then, void d(b))
							}, b = g.extend(!0, {}, b);
							var h, i, k = b.name || a;
							return function() {
								try {
									if ("string" != typeof k) throw i = new Error("Missing/invalid DB name"), i.code = 400, i;
									if (h = e.parseAdapter(k), b.originalName = k, b.name = h.name, b.adapter = b.adapter || h.adapter, !e.adapters[b.adapter]) throw i = new Error("Adapter is missing"), i.code = 404, i;
									if (!e.adapters[b.adapter].valid()) throw i = new Error("Invalid Adapter"), i.code = 404, i
								} catch (a) {
									j.taskqueue.fail(a), j.changes = g.toPromise(function(b) {
										b.complete && b.complete(a)
									})
								}
							}(), i ? f(i) : (j.adapter = b.adapter, j.replicate = e.replicate.bind(j, j), j.replicate.from = function(a, b, c) {
								return "function" == typeof b && (c = b, b = {}), e.replicate(a, j, b, c)
							}, j.replicate.to = function(a, b, c) {
								return "function" == typeof b && (c = b, b = {}), j.replicate(a, b, c)
							}, j.replicate.sync = function(a, b, c) {
								return "function" == typeof b && (c = b, b = {}), e.sync(j, a, b, c)
							}, j.destroy = g.toPromise(function(a) {
								var b = this;
								return b.taskqueue.isReady ? void b.id(function(b, c) {
									return b ? a(b) : void e.destroy(c, a)
								}) : void b.taskqueue.addTask("destroy", arguments)
							}), e.adapters[b.adapter].call(j, b, function(a) {
								function d(a) {
									"destroyed" === a && (j.emit("destroyed"), e.removeListener(b.name, d))
								}
								return a ? void(c && (j.taskqueue.fail(a), c(a))) : (e.on(b.name, d), j.emit("created", j), e.emit("created", b.originalName), j.taskqueue.ready(j), void c(null, j))
							}), b.skipSetup && j.taskqueue.ready(j), void(g.isCordova() && cordova.fireWindowEvent(b.name + "_pouch", {})))
						});
						l.then(function(a) {
							k(null, a)
						}, k), j.then = l.then.bind(l),
						function() {
							try {
								j.catch = l.catch.bind(l)
							} catch (a) {}
						}()
					}
					var f = a("./adapter"),
						g = a("./utils"),
						h = "function" == typeof c.Promise ? c.Promise : a("bluebird"),
						i = a("./taskqueue");
					g.inherits(e, f), b.exports = e
				}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {
				"./adapter": 1,
				"./taskqueue": 17,
				"./utils": 18,
				bluebird: 24
			}
		],
		6: [
			function(a, b) {
				(function(c) {
					"use strict";

					function d(a, b) {
						function d(a) {
							var b = Array.prototype.slice.call(arguments, 1);
							typeof a == typeof Function && a.apply(this, b)
						}

						function j(b, c, e) {
							if (a.binary || a.json || !a.processData || "string" == typeof b) {
								if (!a.binary && a.json && "string" == typeof b) try {
									b = JSON.parse(b)
								} catch (f) {
									return void d(e, f)
								}
							} else b = JSON.stringify(b);
							Array.isArray(b) && (b = b.map(function(a) {
								var b;
								return a.ok ? a : a.error && "conflict" === a.error ? (b = h.REV_CONFLICT, b.id = a.id, b) : a.error && "forbidden" === a.error ? (b = h.FORBIDDEN, b.id = a.id, b.reason = a.reason, b) : a.missing ? (b = h.MISSING_DOC, b.missing = a.missing, b) : a
							})), d(e, null, b, c)
						}

						function k(a, b) {
							var c, e, f, g;
							try {
								c = JSON.parse(a.responseText);
								for (g in h)
									if (h.hasOwnProperty(g) && h[g].name === c.error) {
										f = h[g];
										break
									}
								f || (f = h.UNKNOWN_ERROR, a.status && (f.status = a.status), a.statusText && (a.name = a.statusText)), e = h.error(f, c.reason)
							} catch (i) {
								for (var g in h)
									if (h.hasOwnProperty(g) && h[g].status === a.status) {
										f = h[g];
										break
									}
								f || (f = h.UNKNOWN_ERROR, a.status && (f.status = a.status), a.statusText && (a.name = a.statusText)), e = h.error(f)
							}
							d(b, e)
						}
						"function" == typeof a && (b = a, a = {}), a = f(!0, {}, a);
						var l = {
							method: "GET",
							headers: {},
							json: !0,
							processData: !0,
							timeout: 1e4,
							cache: !1
						};
						if (a = f(!0, l, a), "GET" === a.method && !a.cache) {
							var m = -1 !== a.url.indexOf("?");
							a.url += (m ? "&" : "?") + "_nonce=" + i(16)
						}
						if (c.browser) {
							var n, o, p = !1;
							o = a.xhr ? new a.xhr : new XMLHttpRequest, o.open(a.method, a.url), o.withCredentials = !0, a.json && (a.headers.Accept = "application/json", a.headers["Content-Type"] = a.headers["Content-Type"] || "application/json", a.body && a.processData && "string" != typeof a.body && (a.body = JSON.stringify(a.body))), a.binary && (o.responseType = "arraybuffer");
							var q = function(a, b, c) {
								var d = "";
								if (c) {
									var e = new Date;
									e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3), d = "; expires=" + e.toGMTString()
								}
								document.cookie = a + "=" + b + d + "; path=/"
							};
							for (var r in a.headers)
								if ("Cookie" === r) {
									var s = a.headers[r].split("=");
									q(s[0], s[1], 10)
								} else o.setRequestHeader(r, a.headers[r]);
								"body" in a || (a.body = null);
							var t = function() {
								p = !0, o.abort(), d(k, o, b)
							};
							return o.onreadystatechange = function() {
								if (4 === o.readyState && !p)
									if (clearTimeout(n), o.status >= 200 && o.status < 300) {
										var c;
										c = a.binary ? g([o.response || ""], {
											type: o.getResponseHeader("Content-Type")
										}) : o.responseText, d(j, c, o, b)
									} else d(k, o, b)
							}, a.timeout > 0 && (n = setTimeout(t, a.timeout), o.onprogress = function() {
								clearTimeout(n), n = setTimeout(t, a.timeout)
							}, o.upload && (o.upload.onprogress = o.onprogress)), o.send(a.body), {
								abort: t
							}
						}
						return a.json && (a.binary || (a.headers.Accept = "application/json"), a.headers["Content-Type"] = a.headers["Content-Type"] || "application/json"), a.binary && (a.encoding = null, a.json = !1), a.processData || (a.json = !1), e(a, function(c, e, f) {
							if (c) return c.status = e ? e.statusCode : 400, d(k, c, b);
							var g, i = e.headers["content-type"],
								l = f || "";
							a.binary || !a.json && a.processData || "object" == typeof l || !(/json/.test(i) || /^[\s]*\{/.test(l) && /\}[\s]*$/.test(l)) || (l = JSON.parse(l)), e.statusCode >= 200 && e.statusCode < 300 ? d(j, l, e, b) : (a.binary && (l = JSON.parse(l.toString())), g = "missing" === l.reason ? h.MISSING_DOC : "no_db_file" === l.reason ? h.error(h.DB_MISSING, l.reason) : "conflict" === l.error ? h.REV_CONFLICT : h.error(h.UNKNOWN_ERROR, l.reason, l.error), g.status = e.statusCode, d(b, g))
						})
					}
					var e = a("request"),
						f = a("./extend.js"),
						g = a("./blob.js"),
						h = a("./errors"),
						i = a("../deps/uuid");
					b.exports = d
				}).call(this, a("/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"))
			}, {
				"../deps/uuid": 12,
				"./blob.js": 7,
				"./errors": 8,
				"./extend.js": 10,
				"/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 22,
				request: 20
			}
		],
		7: [
			function(a, b) {
				(function(a) {
					"use strict";

					function c(b, c) {
						b = b || [], c = c || {};
						try {
							return new Blob(b, c)
						} catch (d) {
							if ("TypeError" !== d.name) throw d;
							for (var e = a.BlobBuilder || a.MSBlobBuilder || a.MozBlobBuilder || a.WebKitBlobBuilder, f = new e, g = 0; g < b.length; g += 1) f.append(b[g]);
							return f.getBlob(c.type)
						}
					}
					b.exports = c
				}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {}
		],
		8: [
			function(a, b, c) {
				"use strict";

				function d(a) {
					this.status = a.status, this.name = a.error, this.message = a.reason, this.error = !0
				}
				d.prototype__proto__ = Error.prototype, d.prototype.toString = function() {
					return JSON.stringify({
						status: this.status,
						name: this.name,
						message: this.message
					})
				}, c.UNAUTHORIZED = new d({
					status: 401,
					error: "unauthorized",
					reason: "Name or password is incorrect."
				}), c.MISSING_BULK_DOCS = new d({
					status: 400,
					error: "bad_request",
					reason: "Missing JSON list of 'docs'"
				}), c.MISSING_DOC = new d({
					status: 404,
					error: "not_found",
					reason: "missing"
				}), c.REV_CONFLICT = new d({
					status: 409,
					error: "conflict",
					reason: "Document update conflict"
				}), c.INVALID_ID = new d({
					status: 400,
					error: "invalid_id",
					reason: "_id field must contain a string"
				}), c.MISSING_ID = new d({
					status: 412,
					error: "missing_id",
					reason: "_id is required for puts"
				}), c.RESERVED_ID = new d({
					status: 400,
					error: "bad_request",
					reason: "Only reserved document ids may start with underscore."
				}), c.NOT_OPEN = new d({
					status: 412,
					error: "precondition_failed",
					reason: "Database not open so cannot close"
				}), c.UNKNOWN_ERROR = new d({
					status: 500,
					error: "unknown_error",
					reason: "Database encountered an unknown error"
				}), c.BAD_ARG = new d({
					status: 500,
					error: "badarg",
					reason: "Some query argument is invalid"
				}), c.INVALID_REQUEST = new d({
					status: 400,
					error: "invalid_request",
					reason: "Request was invalid"
				}), c.QUERY_PARSE_ERROR = new d({
					status: 400,
					error: "query_parse_error",
					reason: "Some query parameter is invalid"
				}), c.DOC_VALIDATION = new d({
					status: 500,
					error: "doc_validation",
					reason: "Bad special document member"
				}), c.BAD_REQUEST = new d({
					status: 400,
					error: "bad_request",
					reason: "Something wrong with the request"
				}), c.NOT_AN_OBJECT = new d({
					status: 400,
					error: "bad_request",
					reason: "Document must be a JSON object"
				}), c.DB_MISSING = new d({
					status: 404,
					error: "not_found",
					reason: "Database not found"
				}), c.IDB_ERROR = new d({
					status: 500,
					error: "indexed_db_went_bad",
					reason: "unknown"
				}), c.WSQ_ERROR = new d({
					status: 500,
					error: "web_sql_went_bad",
					reason: "unknown"
				}), c.LDB_ERROR = new d({
					status: 500,
					error: "levelDB_went_went_bad",
					reason: "unknown"
				}), c.FORBIDDEN = new d({
					status: 403,
					error: "forbidden",
					reason: "Forbidden by design doc validate_doc_update function"
				}), c.error = function(a, b, c) {
					function d() {
						this.message = b, c && (this.name = c)
					}
					return d.prototype = a, new d(b)
				}
			}, {}
		],
		9: [
			function() {
				"use strict";
				Object.keys || (Object.keys = function(a) {
					if ("object" != typeof a && "function" != typeof a || null === a) throw new TypeError("Object.keys called on a non-object");
					var b = [];
					for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
					return b
				}), Array.isArray || (Array.isArray = function(a) {
					return "[object Array]" === Object.prototype.toString.call(a)
				}), "forEach" in Array.prototype || (Array.prototype.forEach = function(a, b) {
					for (var c = 0, d = this.length; d > c; c++) c in this && a.call(b, this[c], c, this)
				}), "map" in Array.prototype || (Array.prototype.map = function(a, b) {
					for (var c = new Array(this.length), d = 0, e = this.length; e > d; d++) d in this && (c[d] = a.call(b, this[d], d, this));
					return c
				})
			}, {}
		],
		10: [
			function(a, b) {
				"use strict";

				function c(a) {
					return null === a ? String(a) : "object" == typeof a || "function" == typeof a ? h[l.call(a)] || "object" : typeof a
				}

				function d(a) {
					return null !== a && a === a.window
				}

				function e(a) {
					if (!a || "object" !== c(a) || a.nodeType || d(a)) return !1;
					try {
						if (a.constructor && !m.call(a, "constructor") && !m.call(a.constructor.prototype, "isPrototypeOf")) return !1
					} catch (b) {
						return !1
					}
					var e;
					for (e in a);
					return void 0 === e || m.call(a, e)
				}

				function f(a) {
					return "function" === c(a)
				}

				function g() {
					var a, b, c, d, h, i, j = arguments[0] || {},
						k = 1,
						l = arguments.length,
						m = !1;
					for ("boolean" == typeof j && (m = j, j = arguments[1] || {}, k = 2), "object" == typeof j || f(j) || (j = {}), l === k && (j = this, --k); l > k; k++)
						if (null != (a = arguments[k]))
							for (b in a)
								if (!(b in Object.prototype)) {
									if (c = j[b], d = a[b], j === d) continue;
									m && d && (e(d) || (h = n(d))) ? (h ? (h = !1, i = c && n(c) ? c : []) : i = c && e(c) ? c : {}, j[b] = g(m, i, d)) : void 0 !== d && (n(a) && f(d) || (j[b] = d))
								}
					return j
				}
				for (var h = {}, i = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"], j = 0; j < i.length; j++) {
					var k = i[j];
					h["[object " + k + "]"] = k.toLowerCase()
				}
				var l = h.toString,
					m = h.hasOwnProperty,
					n = Array.isArray || function(a) {
						return "array" === c(a)
					};
				b.exports = g
			}, {}
		],
		11: [
			function(a, b, c) {
				(function(b) {
					"use strict";
					var d = a("crypto");
					c.MD5 = function(a) {
						function c(a, b) {
							return a << b | a >>> 32 - b
						}

						function e(a, b) {
							var c, d, e, f, g;
							return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
						}

						function f(a, b, c) {
							return a & b | ~a & c
						}

						function g(a, b, c) {
							return a & c | b & ~c
						}

						function h(a, b, c) {
							return a ^ b ^ c
						}

						function i(a, b, c) {
							return b ^ (a | ~c)
						}

						function j(a, b, d, g, h, i, j) {
							return a = e(a, e(e(f(b, d, g), h), j)), e(c(a, i), b)
						}

						function k(a, b, d, f, h, i, j) {
							return a = e(a, e(e(g(b, d, f), h), j)), e(c(a, i), b)
						}

						function l(a, b, d, f, g, i, j) {
							return a = e(a, e(e(h(b, d, f), g), j)), e(c(a, i), b)
						}

						function m(a, b, d, f, g, h, j) {
							return a = e(a, e(e(i(b, d, f), g), j)), e(c(a, h), b)
						}

						function n(a) {
							for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
							return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
						}

						function o(a) {
							var b, c, d = "",
								e = "";
							for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
							return d
						}
						if (!b.browser) return d.createHash("md5").update(a).digest("hex");
						var p, q, r, s, t, u, v, w, x, y = [],
							z = 7,
							A = 12,
							B = 17,
							C = 22,
							D = 5,
							E = 9,
							F = 14,
							G = 20,
							H = 4,
							I = 11,
							J = 16,
							K = 23,
							L = 6,
							M = 10,
							N = 15,
							O = 21;
						for (y = n(a), u = 1732584193, v = 4023233417, w = 2562383102, x = 271733878, p = 0; p < y.length; p += 16) q = u, r = v, s = w, t = x, u = j(u, v, w, x, y[p + 0], z, 3614090360), x = j(x, u, v, w, y[p + 1], A, 3905402710), w = j(w, x, u, v, y[p + 2], B, 606105819), v = j(v, w, x, u, y[p + 3], C, 3250441966), u = j(u, v, w, x, y[p + 4], z, 4118548399), x = j(x, u, v, w, y[p + 5], A, 1200080426), w = j(w, x, u, v, y[p + 6], B, 2821735955), v = j(v, w, x, u, y[p + 7], C, 4249261313), u = j(u, v, w, x, y[p + 8], z, 1770035416), x = j(x, u, v, w, y[p + 9], A, 2336552879), w = j(w, x, u, v, y[p + 10], B, 4294925233), v = j(v, w, x, u, y[p + 11], C, 2304563134), u = j(u, v, w, x, y[p + 12], z, 1804603682), x = j(x, u, v, w, y[p + 13], A, 4254626195), w = j(w, x, u, v, y[p + 14], B, 2792965006), v = j(v, w, x, u, y[p + 15], C, 1236535329), u = k(u, v, w, x, y[p + 1], D, 4129170786), x = k(x, u, v, w, y[p + 6], E, 3225465664), w = k(w, x, u, v, y[p + 11], F, 643717713), v = k(v, w, x, u, y[p + 0], G, 3921069994), u = k(u, v, w, x, y[p + 5], D, 3593408605), x = k(x, u, v, w, y[p + 10], E, 38016083), w = k(w, x, u, v, y[p + 15], F, 3634488961), v = k(v, w, x, u, y[p + 4], G, 3889429448), u = k(u, v, w, x, y[p + 9], D, 568446438), x = k(x, u, v, w, y[p + 14], E, 3275163606), w = k(w, x, u, v, y[p + 3], F, 4107603335), v = k(v, w, x, u, y[p + 8], G, 1163531501), u = k(u, v, w, x, y[p + 13], D, 2850285829), x = k(x, u, v, w, y[p + 2], E, 4243563512), w = k(w, x, u, v, y[p + 7], F, 1735328473), v = k(v, w, x, u, y[p + 12], G, 2368359562), u = l(u, v, w, x, y[p + 5], H, 4294588738), x = l(x, u, v, w, y[p + 8], I, 2272392833), w = l(w, x, u, v, y[p + 11], J, 1839030562), v = l(v, w, x, u, y[p + 14], K, 4259657740), u = l(u, v, w, x, y[p + 1], H, 2763975236), x = l(x, u, v, w, y[p + 4], I, 1272893353), w = l(w, x, u, v, y[p + 7], J, 4139469664), v = l(v, w, x, u, y[p + 10], K, 3200236656), u = l(u, v, w, x, y[p + 13], H, 681279174), x = l(x, u, v, w, y[p + 0], I, 3936430074), w = l(w, x, u, v, y[p + 3], J, 3572445317), v = l(v, w, x, u, y[p + 6], K, 76029189), u = l(u, v, w, x, y[p + 9], H, 3654602809), x = l(x, u, v, w, y[p + 12], I, 3873151461), w = l(w, x, u, v, y[p + 15], J, 530742520), v = l(v, w, x, u, y[p + 2], K, 3299628645), u = m(u, v, w, x, y[p + 0], L, 4096336452), x = m(x, u, v, w, y[p + 7], M, 1126891415), w = m(w, x, u, v, y[p + 14], N, 2878612391), v = m(v, w, x, u, y[p + 5], O, 4237533241), u = m(u, v, w, x, y[p + 12], L, 1700485571), x = m(x, u, v, w, y[p + 3], M, 2399980690), w = m(w, x, u, v, y[p + 10], N, 4293915773), v = m(v, w, x, u, y[p + 1], O, 2240044497), u = m(u, v, w, x, y[p + 8], L, 1873313359), x = m(x, u, v, w, y[p + 15], M, 4264355552), w = m(w, x, u, v, y[p + 6], N, 2734768916), v = m(v, w, x, u, y[p + 13], O, 1309151649), u = m(u, v, w, x, y[p + 4], L, 4149444226), x = m(x, u, v, w, y[p + 11], M, 3174756917), w = m(w, x, u, v, y[p + 2], N, 718787259), v = m(v, w, x, u, y[p + 9], O, 3951481745), u = e(u, q), v = e(v, r), w = e(w, s), x = e(x, t);
						var P = o(u) + o(v) + o(w) + o(x);
						return P.toLowerCase()
					}
				}).call(this, a("/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"))
			}, {
				"/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 22,
				crypto: 20
			}
		],
		12: [
			function(a, b) {
				"use strict";

				function c(a, b) {
					var d, e = c.CHARS,
						f = [];
					if (b = b || e.length, a)
						for (d = 0; a > d; d++) f[d] = e[0 | Math.random() * b];
					else {
						var g;
						for (f[8] = f[13] = f[18] = f[23] = "-", f[14] = "4", d = 0; 36 > d; d++) f[d] || (g = 0 | 16 * Math.random(), f[d] = e[19 === d ? 3 & g | 8 : g])
					}
					return f.join("")
				}
				c.CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b.exports = c
			}, {}
		],
		13: [
			function(a, b) {
				(function(c) {
					"use strict";
					a("./deps/es5_shims");
					var d = a("./setup");
					b.exports = d, d.ajax = a("./deps/ajax"), d.extend = a("./deps/extend"), d.utils = a("./utils"), d.Errors = a("./deps/errors");
					var e = a("./replicate");
					d.replicate = e.replicate, d.sync = e.sync, d.version = a("./version");
					var f = a("./adapters/http");
					if (d.adapter("http", f), d.adapter("https", f), d.adapter("idb", a("./adapters/idb")), d.adapter("websql", a("./adapters/websql")), d.plugin(a("pouchdb-mapreduce")), !c.browser) {
						var g = a("./adapters/leveldb");
						d.adapter("ldb", g), d.adapter("leveldb", g)
					}
				}).call(this, a("/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"))
			}, {
				"./adapters/http": 2,
				"./adapters/idb": 3,
				"./adapters/leveldb": 20,
				"./adapters/websql": 4,
				"./deps/ajax": 6,
				"./deps/errors": 8,
				"./deps/es5_shims": 9,
				"./deps/extend": 10,
				"./replicate": 15,
				"./setup": 16,
				"./utils": 18,
				"./version": 19,
				"/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 22,
				"pouchdb-mapreduce": 35
			}
		],
		14: [
			function(a, b) {
				"use strict";

				function c(a) {
					for (var b, c = a.shift(), d = [c.id, c.opts, []], e = d; a.length;) c = a.shift(), b = [c.id, c.opts, []], e[2].push(b), e = b;
					return d
				}

				function d(a, b) {
					for (var c = [{
						tree1: a,
						tree2: b
					}], d = !1; c.length > 0;) {
						var e = c.pop(),
							f = e.tree1,
							g = e.tree2;
						(f[1].status || g[1].status) && (f[1].status = "available" === f[1].status || "available" === g[1].status ? "available" : "missing");
						for (var h = 0; h < g[2].length; h++)
							if (f[2][0]) {
								for (var i = !1, j = 0; j < f[2].length; j++) f[2][j][0] === g[2][h][0] && (c.push({
									tree1: f[2][j],
									tree2: g[2][h]
								}), i = !0);
								i || (d = "new_branch", f[2].push(g[2][h]), f[2].sort())
							} else d = "new_leaf", f[2][0] = g[2][h]
					}
					return {
						conflicts: d,
						tree: a
					}
				}

				function e(a, b, c) {
					var e, f = [],
						g = !1,
						h = !1;
					return a.length ? (a.forEach(function(a) {
						if (a.pos === b.pos && a.ids[0] === b.ids[0]) e = d(a.ids, b.ids), f.push({
							pos: a.pos,
							ids: e.tree
						}), g = g || e.conflicts, h = !0;
						else if (c !== !0) {
							var i = a.pos < b.pos ? a : b,
								j = a.pos < b.pos ? b : a,
								k = j.pos - i.pos,
								l = [],
								m = [];
							for (m.push({
								ids: i.ids,
								diff: k,
								parent: null,
								parentIdx: null
							}); m.length > 0;) {
								var n = m.pop();
								0 !== n.diff ? n.ids && n.ids[2].forEach(function(a, b) {
									m.push({
										ids: a,
										diff: n.diff - 1,
										parent: n.ids,
										parentIdx: b
									})
								}) : n.ids[0] === j.ids[0] && l.push(n)
							}
							var o = l[0];
							o ? (e = d(o.ids, j.ids), o.parent[2][o.parentIdx] = e.tree, f.push({
								pos: i.pos,
								ids: i.ids
							}), g = g || e.conflicts, h = !0) : f.push(a)
						} else f.push(a)
					}), h || f.push(b), f.sort(function(a, b) {
						return a.pos - b.pos
					}), {
						tree: f,
						conflicts: g || "internal_node"
					}) : {
						tree: [b],
						conflicts: "new_leaf"
					}
				}

				function f(a, b) {
					var d = h.rootToLeaf(a).map(function(a) {
						var d = a.ids.slice(-b);
						return {
							pos: a.pos + (a.ids.length - d.length),
							ids: c(d)
						}
					});
					return d.reduce(function(a, b) {
						return e(a, b, !0).tree
					}, [d.shift()])
				}
				var g = a("./deps/extend"),
					h = {};
				h.merge = function(a, b, c) {
					a = g(!0, [], a), b = g(!0, {}, b);
					var d = e(a, b);
					return {
						tree: f(d.tree, c),
						conflicts: d.conflicts
					}
				}, h.winningRev = function(a) {
					var b = [];
					return h.traverseRevTree(a.rev_tree, function(a, c, d, e, f) {
						a && b.push({
							pos: c,
							id: d,
							deleted: !!f.deleted
						})
					}), b.sort(function(a, b) {
						return a.deleted !== b.deleted ? a.deleted > b.deleted ? 1 : -1 : a.pos !== b.pos ? b.pos - a.pos : a.id < b.id ? 1 : -1
					}), b[0].pos + "-" + b[0].id
				}, h.traverseRevTree = function(a, b) {
					var c = [];
					for (a.forEach(function(a) {
						c.push({
							pos: a.pos,
							ids: a.ids
						})
					}); c.length > 0;) {
						var d = c.pop(),
							e = d.pos,
							f = d.ids,
							g = b(0 === f[2].length, e, f[0], d.ctx, f[1]);
						f[2].forEach(function(a) {
							c.push({
								pos: e + 1,
								ids: a,
								ctx: g
							})
						})
					}
				}, h.collectLeaves = function(a) {
					var b = [];
					return h.traverseRevTree(a, function(a, c, d, e, f) {
						a && b.unshift({
							rev: c + "-" + d,
							pos: c,
							opts: f
						})
					}), b.sort(function(a, b) {
						return b.pos - a.pos
					}), b.map(function(a) {
						delete a.pos
					}), b
				}, h.collectConflicts = function(a) {
					var b = h.winningRev(a),
						c = h.collectLeaves(a.rev_tree),
						d = [];
					return c.forEach(function(a) {
						a.rev === b || a.opts.deleted || d.push(a.rev)
					}), d
				}, h.rootToLeaf = function(a) {
					var b = [];
					return h.traverseRevTree(a, function(a, c, d, e, f) {
						if (e = e ? e.slice(0) : [], e.push({
							id: d,
							opts: f
						}), a) {
							var g = c + 1 - e.length;
							b.unshift({
								pos: g,
								ids: e
							})
						}
						return e
					}), b
				}, b.exports = h
			}, {
				"./deps/extend": 10
			}
		],
		15: [
			function(a, b, c) {
				"use strict";

				function d() {
					var a = this;
					this.cancelled = !1, this.cancel = function() {
						a.cancelled = !0
					}
				}

				function e() {
					this.seq = 0, this.state = "start", this.changes = [], this.docs = []
				}

				function f(a, b, c, d) {
					var e = c.filter ? c.filter.toString() : "";
					a.id(function(a, f) {
						b.id(function(a, b) {
							var g = f + b + e + JSON.stringify(c.query_params);
							d("_local/" + m.Crypto.MD5(g))
						})
					})
				}

				function g(a, b, c, d) {
					b.get(c, function(b, e) {
						b && 404 === b.status ? d(null, 0) : b ? d(b) : a.get(c, function(a, b) {
							a && 404 === a.status || !a && e.last_seq !== b.last_seq ? d(null, 0) : a ? d(a) : d(null, b.last_seq)
						})
					})
				}

				function h(a, b, c, d, e) {
					function f(a, b) {
						a.get(c, function(e, f) {
							if (e && 404 === e.status) f = {
								_id: c
							};
							else if (e) return b(e);
							f.last_seq = d, a.put(f, b)
						})
					}
					f(b, function() {
						f(a, function() {
							e()
						})
					})
				}

				function i(a, b, c, d, f) {
					function i() {
						if (0 === x[0].docs.length) return n();
						var a = x[0].docs;
						c.bulkDocs({
							docs: a
						}, {
							new_edits: !1
						}, function(b) {
							return b ? l("target.bulkDocs completed with error", b) : (F.docs_written += a.length, void n())
						})
					}

					function j(a, b) {
						return f.cancelled ? s() : a ? l("src.get completed with error", a) : (Object.keys(b).forEach(function(a) {
							var c = b[a].ok;
							c && (F.docs_read++, x[0].pendingRevs++, x[0].docs.push(c))
						}), void k())
					}

					function k() {
						var a = x[0].diffs;
						if (0 === Object.keys(a).length) return void i();
						var c = Object.keys(a)[0],
							d = a[c].missing;
						delete a[c], b.get(c, {
							revs: !0,
							open_revs: d,
							attachments: !0
						}, j)
					}

					function l(a, b) {
						if (!A) {
							F.ok = !1, F.status = "aborted", F.errors.push(b), F.end_time = new Date, F.last_seq = B, f.cancel(), x = [], y = new e;
							var c = {
								status: 500,
								error: "Replication aborted",
								reason: a,
								details: b
							};
							A = !0, m.call(d.complete, c, F)
						}
					}

					function n() {
						h(b, c, a, x[0].seq, function(a) {
							return a ? l("writeCheckpoint completed with error", a) : (B = x[0].seq, F.last_seq = B, m.call(d.onChange, null, F), x.shift(), void q())
						})
					}

					function o(a, b) {
						return f.cancelled ? s() : a ? l("target.revsDiff completed with error", a) : 0 === Object.keys(b).length ? void n() : (x[0].diffs = b, x[0].pendingRevs = 0, void k())
					}

					function p() {
						var a = {};
						x[0].changes.forEach(function(b) {
							a[b.id] = b.changes.map(function(a) {
								return a.rev
							})
						}), c.revsDiff(a, o)
					}

					function q() {
						return f.cancelled ? s() : 0 === x.length ? void r() : void("start" === x[0].state && (x[0].state = "processing", p()))
					}

					function r() {
						return 0 === y.changes.length ? void(z && 0 === x.length && t()) : void((z || y.changes.length >= D) && (x.push(y), y = new e, q()))
					}

					function s() {
						F.status = "cancelled", t()
					}

					function t() {
						return A ? void 0 : (F.status = F.status || "complete", F.end_time = new Date, F.last_seq = B, A = !0, m.call(d.complete, null, F))
					}

					function u(a) {
						return f.cancelled ? s() : void(A || (y.seq = a.seq, y.changes.push(a), r()))
					}

					function v(a) {
						return z = !0, f.cancelled ? s() : a ? l("src.changes completed with error", a) : void r()
					}

					function w() {
						g(b, c, a, function(a, c) {
							if (a) return l("fetchCheckpoint completed with error", a);
							if (B = c, f.cancelled) return s();
							var e = {
								continuous: C,
								since: B,
								style: "all_docs",
								onChange: u,
								complete: v,
								doc_ids: E
							};
							d.filter && (e.filter = d.filter), d.query_params && (e.query_params = d.query_params);
							var g = b.changes(e);
							if (d.continuous) {
								var h = f.cancel;
								f.cancel = function() {
									h(), g.cancel()
								}
							}
						})
					}
					var x = [],
						y = new e,
						z = !1,
						A = !1,
						B = 0,
						C = d.continuous || !1,
						D = d.batch_size || 1,
						E = d.doc_ids,
						F = {
							ok: !0,
							start_time: new Date,
							docs_read: 0,
							docs_written: 0,
							errors: []
						};
					"undefined" == typeof d.since ? w() : h(b, c, a, d.since, function(a) {
						return a ? l("writeCheckpoint completed with error", a) : (B = d.since, void w())
					})
				}

				function j(a, b) {
					return "string" == typeof a ? new n(a, b) : void b(null, a)
				}

				function k(a, b, c, e) {
					c instanceof Function && (e = c, c = {}), void 0 === c && (c = {}), c.complete || (c.complete = e);
					var g = new d;
					return j(a, function(a, d) {
						return a ? e(a) : void j(b, function(a, b) {
							if (a) return e(a);
							if (c.server) {
								if ("function" != typeof d.replicateOnServer) return e({
									error: "Server replication not supported for " + d.type() + "adapter"
								});
								if (d.type() !== b.type()) return e({
									error: "Server replication for different adapter types (" + d.type() + " and " + b.type() + ") is not supported"
								});
								d.replicateOnServer(b, c, g)
							} else f(d, b, c, function(a) {
								i(a, d, b, c, g)
							})
						})
					}), g
				}

				function l(a, b, c, d) {
					function e(a) {
						return function(b, c) {
							b && j(), a(b, c)
						}
					}

					function f(a, b) {
						return b = b || function() {},
							function(c) {
								return {
									source: a,
									change: b(c)
								}
							}
					}

					function g(a, b) {
						return b = m.extend(!0, {}, b), b.complete = e(b.complete), b.onChange = f(a, b.onChange), b
					}

					function h() {
						return l = k(a, b, g(a, c), d)
					}

					function i() {
						return n = k(b, a, g(b, c), d)
					}

					function j() {
						l && l.cancel(), n && n.cancel()
					}
					var l, n;
					return {
						push: h(),
						pull: i(),
						cancel: j
					}
				}
				var m = a("./utils"),
					n = a("./index");
				c.replicate = k, c.sync = l
			}, {
				"./index": 13,
				"./utils": 18
			}
		],
		16: [
			function(a, b) {
				"use strict";
				var c = a("./constructor"),
					d = a("./utils"),
					e = a("events").EventEmitter;
				c.adapters = {}, c.prefix = "_pouch_";
				var f = new e,
					g = ["on", "addListener", "emit", "listeners", "once", "removeAllListeners", "removeListener", "setMaxListeners"];
				g.forEach(function(a) {
					c[a] = f[a].bind(f)
				}), c.setMaxListeners(0), c.parseAdapter = function(a) {
					var b, d = a.match(/([a-z\-]*):\/\/(.*)/);
					if (d) {
						if (a = /http(s?)/.test(d[1]) ? d[1] + "://" + d[2] : d[2], b = d[1], !c.adapters[b].valid()) throw "Invalid adapter";
						return {
							name: a,
							adapter: d[1]
						}
					}
					for (var e = ["idb", "leveldb", "websql"], f = 0; f < e.length; ++f)
						if (e[f] in c.adapters) {
							b = c.adapters[e[f]];
							var g = "use_prefix" in b ? b.use_prefix : !0;
							return {
								name: g ? c.prefix + a : a,
								adapter: e[f]
							}
						}
					throw "No valid adapter found"
				}, c.destroy = d.toPromise(function(a, b, d) {
					("function" == typeof b || "undefined" == typeof b) && (d = b, b = {}), "object" == typeof a && (b = a, a = void 0);
					var e = c.parseAdapter(b.name || a),
						f = e.name;
					c.adapters[e.adapter].destroy(f, b, function(a, b) {
						a ? d(a) : (c.emit("destroyed", f), c.emit(f, "destroyed"), d(null, b))
					})
				}), c.allDbs = d.toPromise(function(a) {
					var b = new Error("allDbs method removed");
					b.stats = "400", a(b)
				}), c.adapter = function(a, b) {
					b.valid() && (c.adapters[a] = b)
				}, c.plugin = function(a) {
					Object.keys(a).forEach(function(b) {
						c.prototype[b] = a[b]
					})
				}, b.exports = c
			}, {
				"./constructor": 5,
				"./utils": 18,
				events: 21
			}
		],
		17: [
			function(a, b) {
				"use strict";

				function c() {
					this.isReady = !1, this.failed = !1, this.queue = []
				}
				b.exports = c, c.prototype.execute = function() {
					var a, b;
					if (this.failed)
						for (; a = this.queue.shift();) b = a.parameters[a.parameters.length - 1], "function" == typeof b ? b(this.failed) : "changes" === a.name && "function" == typeof b.complete && b.complete(this.failed);
					else if (this.isReady)
						for (; a = this.queue.shift();) a.task = this.db[a.name].apply(this.db, a.parameters)
				}, c.prototype.fail = function(a) {
					this.failed = a, this.execute()
				}, c.prototype.ready = function(a) {
					return this.failed ? !1 : 0 === arguments.length ? this.isReady : (this.isReady = a ? !0 : !1, this.db = a, void this.execute())
				}, c.prototype.addTask = function(a, b) {
					var c = {
						name: a,
						parameters: b
					};
					return this.queue.push(c), this.failed && this.execute(), c
				}
			}, {}
		],
		18: [
			function(a, b, c) {
				(function(b, d) {
					function e() {
						return "undefined" != typeof chrome && "undefined" != typeof chrome.storage && "undefined" != typeof chrome.storage.local
					}
					var f = a("./merge");
					c.extend = a("./deps/extend"), c.ajax = a("./deps/ajax"), c.createBlob = a("./deps/blob");
					var g = a("./deps/uuid");
					c.Crypto = a("./deps/md5.js");
					var h = a("./deps/buffer"),
						i = a("./deps/errors"),
						j = "function" == typeof d.Promise ? d.Promise : a("bluebird"),
						k = ["_id", "_rev", "_attachments", "_deleted", "_revisions", "_revs_info", "_conflicts", "_deleted_conflicts", "_local_seq", "_rev_tree"];
					c.inherits = a("inherits"), c.uuids = function(a, b) {
						"object" != typeof b && (b = {});
						for (var c = b.length, d = b.radix, e = []; e.push(g(c, d)) < a;);
						return e
					}, c.uuid = function(a) {
						return c.uuids(1, a)[0]
					}, c.invalidIdError = function(a) {
						return a ? "string" != typeof a ? i.INVALID_ID : /^_/.test(a) && !/^_(design|local)/.test(a) ? i.RESERVED_ID : void 0 : i.MISSING_ID
					}, c.call = function(a) {
						if (typeof a == typeof Function) {
							var b = Array.prototype.slice.call(arguments, 1);
							a.apply(this, b)
						}
					}, c.isLocalId = function(a) {
						return /^_local/.test(a)
					}, c.isDeleted = function(a, b) {
						b || (b = f.winningRev(a)), b.indexOf("-") >= 0 && (b = b.split("-")[1]);
						var c = !1;
						return f.traverseRevTree(a.rev_tree, function(a, d, e, f, g) {
							e === b && (c = !!g.deleted)
						}), c
					}, c.filterChange = function(a) {
						return function(b) {
							var c = {},
								d = a.filter && "function" == typeof a.filter;
							if (c.query = a.query_params, a.filter && d && !a.filter.call(this, b.doc, c)) return !1;
							if (a.doc_ids && -1 === a.doc_ids.indexOf(b.id)) return !1;
							if (a.include_docs)
								for (var e in b.doc._attachments) b.doc._attachments.hasOwnProperty(e) && (b.doc._attachments[e].stub = !0);
							else delete b.doc;
							return !0
						}
					}, c.processChanges = function(a, b, d) {
						b = b.filter(c.filterChange(a)), a.limit && a.limit < b.length && (b.length = a.limit), b.forEach(function(b) {
							c.call(a.onChange, b)
						}), a.continuous || c.call(a.complete, null, {
							results: b,
							last_seq: d
						})
					}, c.parseDoc = function(a, b) {
						var d, e, f, g = null,
							h = {
								status: "available"
							};
						if (a._deleted && (h.deleted = !0), b)
							if (a._id || (a._id = c.uuid()), e = c.uuid({
								length: 32,
								radix: 16
							}).toLowerCase(), a._rev) {
								if (f = /^(\d+)-(.+)$/.exec(a._rev), !f) throw "invalid value for property '_rev'";
								a._rev_tree = [{
									pos: parseInt(f[1], 10),
									ids: [f[2], {
											status: "missing"
										},
										[
											[e, h, []]
										]
									]
								}], d = parseInt(f[1], 10) + 1
							} else a._rev_tree = [{
								pos: 1,
								ids: [e, h, []]
							}], d = 1;
						else if (a._revisions && (a._rev_tree = [{
							pos: a._revisions.start - a._revisions.ids.length + 1,
							ids: a._revisions.ids.reduce(function(a, b) {
								return null === a ? [b, h, []] : [b, {
										status: "missing"
									},
									[a]
								]
							}, null)
						}], d = a._revisions.start, e = a._revisions.ids[0]), !a._rev_tree) {
							if (f = /^(\d+)-(.+)$/.exec(a._rev), !f) return i.BAD_ARG;
							d = parseInt(f[1], 10), e = f[2], a._rev_tree = [{
								pos: parseInt(f[1], 10),
								ids: [f[2], h, []]
							}]
						}
						g = c.invalidIdError(a._id);
						for (var j in a) a.hasOwnProperty(j) && "_" === j[0] && -1 === k.indexOf(j) && (g = c.extend({}, i.DOC_VALIDATION), g.reason += ": " + j);
						return a._id = decodeURIComponent(a._id), a._rev = [d, e].join("-"), g ? g : Object.keys(a).reduce(function(b, c) {
							return /^_/.test(c) && "_attachments" !== c ? b.metadata[c.slice(1)] = a[c] : b.data[c] = a[c], b
						}, {
							metadata: {},
							data: {}
						})
					}, c.isCordova = function() {
						return "undefined" != typeof cordova || "undefined" != typeof PhoneGap || "undefined" != typeof phonegap
					}, c.Changes = function() {
						var a = {},
							b = {};
						return e() ? chrome.storage.onChanged.addListener(function(b) {
							null != b.db_name && a.notify(b.db_name.newValue)
						}) : "undefined" != typeof window && d.addEventListener("storage", function(b) {
							a.notify(b.key)
						}), a.addListener = function(a, c, d, e) {
							b[a] || (b[a] = {}), b[a][c] = {
								db: d,
								opts: e
							}
						}, a.removeListener = function(a, c) {
							b[a] && delete b[a][c]
						}, a.clearListeners = function(a) {
							delete b[a]
						}, a.notifyLocalWindows = function(a) {
							e() ? chrome.storage.local.set({
								db_name: a
							}) : d.localStorage && (localStorage[a] = "a" === localStorage[a] ? "b" : "a")
						}, a.notify = function(a) {
							b[a] && Object.keys(b[a]).forEach(function(d) {
								var e = b[a][d].opts;
								b[a][d].db.changes({
									include_docs: e.include_docs,
									conflicts: e.conflicts,
									continuous: !1,
									descending: !1,
									filter: e.filter,
									view: e.view,
									since: e.since,
									query_params: e.query_params,
									onChange: function(a) {
										a.seq > e.since && !e.cancelled && (e.since = a.seq, c.call(e.onChange, a))
									}
								})
							})
						}, a
					}, c.atob = b.browser && "atob" in d ? function(a) {
						return atob(a)
					} : function(a) {
						var b = new h(a, "base64");
						if (b.toString("base64") !== a) throw "Cannot base64 encode full string";
						return b.toString("binary")
					}, c.btoa = b.browser && "btoa" in d ? function(a) {
						return btoa(a)
					} : function(a) {
						return new h(a, "binary").toString("base64")
					}, c.fixBinary = function(a) {
						if (!b.browser) return a;
						for (var c = a.length, d = new ArrayBuffer(c), e = new Uint8Array(d), f = 0; c > f; f++) e[f] = a.charCodeAt(f);
						return d
					}, c.toPromise = function(a) {
						return function() {
							var c, d = this,
								e = Array.prototype.slice.call(arguments),
								f = "function" == typeof e[e.length - 1] ? e.pop() : !1;
							f && (c = function(a, c) {
								b.nextTick(function() {
									f(a, c)
								})
							});
							var g = new j(function(b, c) {
								function f(a, d) {
									a ? c(a) : b(d)
								}
								e.push(f), a.apply(d, e)
							});
							return c && g.then(function(a) {
								c(null, a)
							}, c), g
						}
					}
				}).call(this, a("/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {
				"./deps/ajax": 6,
				"./deps/blob": 7,
				"./deps/buffer": 20,
				"./deps/errors": 8,
				"./deps/extend": 10,
				"./deps/md5.js": 11,
				"./deps/uuid": 12,
				"./merge": 14,
				"/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 22,
				bluebird: 24,
				inherits: 23
			}
		],
		19: [
			function(a, b) {
				b.exports = a("../package.json").version
			}, {
				"../package.json": 37
			}
		],
		20: [
			function() {}, {}
		],
		21: [
			function(a, b) {
				function c() {
					this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
				}

				function d(a) {
					return "function" == typeof a
				}

				function e(a) {
					return "number" == typeof a
				}

				function f(a) {
					return "object" == typeof a && null !== a
				}

				function g(a) {
					return void 0 === a
				}
				b.exports = c, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._maxListeners = void 0, c.defaultMaxListeners = 10, c.prototype.setMaxListeners = function(a) {
					if (!e(a) || 0 > a || isNaN(a)) throw TypeError("n must be a positive number");
					return this._maxListeners = a, this
				}, c.prototype.emit = function(a) {
					var b, c, e, h, i, j;
					if (this._events || (this._events = {}), "error" === a && (!this._events.error || f(this._events.error) && !this._events.error.length)) throw b = arguments[1], b instanceof Error ? b : TypeError('Uncaught, unspecified "error" event.');
					if (c = this._events[a], g(c)) return !1;
					if (d(c)) switch (arguments.length) {
						case 1:
							c.call(this);
							break;
						case 2:
							c.call(this, arguments[1]);
							break;
						case 3:
							c.call(this, arguments[1], arguments[2]);
							break;
						default:
							for (e = arguments.length, h = new Array(e - 1), i = 1; e > i; i++) h[i - 1] = arguments[i];
							c.apply(this, h)
					} else if (f(c)) {
						for (e = arguments.length, h = new Array(e - 1), i = 1; e > i; i++) h[i - 1] = arguments[i];
						for (j = c.slice(), e = j.length, i = 0; e > i; i++) j[i].apply(this, h)
					}
					return !0
				}, c.prototype.addListener = function(a, b) {
					var e;
					if (!d(b)) throw TypeError("listener must be a function");
					if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", a, d(b.listener) ? b.listener : b), this._events[a] ? f(this._events[a]) ? this._events[a].push(b) : this._events[a] = [this._events[a], b] : this._events[a] = b, f(this._events[a]) && !this._events[a].warned) {
						var e;
						e = g(this._maxListeners) ? c.defaultMaxListeners : this._maxListeners, e && e > 0 && this._events[a].length > e && (this._events[a].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), console.trace())
					}
					return this
				}, c.prototype.on = c.prototype.addListener, c.prototype.once = function(a, b) {
					function c() {
						this.removeListener(a, c), e || (e = !0, b.apply(this, arguments))
					}
					if (!d(b)) throw TypeError("listener must be a function");
					var e = !1;
					return c.listener = b, this.on(a, c), this
				}, c.prototype.removeListener = function(a, b) {
					var c, e, g, h;
					if (!d(b)) throw TypeError("listener must be a function");
					if (!this._events || !this._events[a]) return this;
					if (c = this._events[a], g = c.length, e = -1, c === b || d(c.listener) && c.listener === b) delete this._events[a], this._events.removeListener && this.emit("removeListener", a, b);
					else if (f(c)) {
						for (h = g; h-- > 0;)
							if (c[h] === b || c[h].listener && c[h].listener === b) {
								e = h;
								break
							}
						if (0 > e) return this;
						1 === c.length ? (c.length = 0, delete this._events[a]) : c.splice(e, 1), this._events.removeListener && this.emit("removeListener", a, b)
					}
					return this
				}, c.prototype.removeAllListeners = function(a) {
					var b, c;
					if (!this._events) return this;
					if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[a] && delete this._events[a], this;
					if (0 === arguments.length) {
						for (b in this._events) "removeListener" !== b && this.removeAllListeners(b);
						return this.removeAllListeners("removeListener"), this._events = {}, this
					}
					if (c = this._events[a], d(c)) this.removeListener(a, c);
					else
						for (; c.length;) this.removeListener(a, c[c.length - 1]);
					return delete this._events[a], this
				}, c.prototype.listeners = function(a) {
					var b;
					return b = this._events && this._events[a] ? d(this._events[a]) ? [this._events[a]] : this._events[a].slice() : []
				}, c.listenerCount = function(a, b) {
					var c;
					return c = a._events && a._events[b] ? d(a._events[b]) ? 1 : a._events[b].length : 0
				}
			}, {}
		],
		22: [
			function(a, b) {
				var c = b.exports = {};
				c.nextTick = function() {
					var a = "undefined" != typeof window && window.setImmediate,
						b = "undefined" != typeof window && window.postMessage && window.addEventListener;
					if (a) return function(a) {
						return window.setImmediate(a)
					};
					if (b) {
						var c = [];
						return window.addEventListener("message", function(a) {
								var b = a.source;
								if ((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(), c.length > 0)) {
									var d = c.shift();
									d()
								}
							}, !0),
							function(a) {
								c.push(a), window.postMessage("process-tick", "*")
							}
					}
					return function(a) {
						setTimeout(a, 0)
					}
				}(), c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.binding = function() {
					throw new Error("process.binding is not supported")
				}, c.cwd = function() {
					return "/"
				}, c.chdir = function() {
					throw new Error("process.chdir is not supported")
				}
			}, {}
		],
		23: [
			function(a, b) {
				b.exports = "function" == typeof Object.create ? function(a, b) {
					a.super_ = b, a.prototype = Object.create(b.prototype, {
						constructor: {
							value: a,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})
				} : function(a, b) {
					a.super_ = b;
					var c = function() {};
					c.prototype = b.prototype, a.prototype = new c, a.prototype.constructor = a
				}
			}, {}
		],
		24: [
			function(a, b) {
				"use strict";

				function c(a, b, c) {
					i ? Object.defineProperty(a, b, {
						value: c,
						configurable: !0,
						writable: !0
					}) : a[b] = c
				}

				function d(a) {
					return this instanceof d ? (c(this, "successQueue", []), c(this, "failureQueue", []), c(this, "resolved", !1), void("function" == typeof a && this.resolvePassed(a))) : new d(a)
				}

				function e(a, b, c) {
					c && "function" == typeof c.then ? c.then(a, b) : a(c)
				}

				function f(a, b, c) {
					function e() {
						var e = arguments[c];
						return "function" != typeof e ? a : new d(function(a, c) {
							h(g, e, b, a, c)
						})
					}
					return e
				}

				function g(a, b, c, d) {
					try {
						e(c, d, a(b))
					} catch (f) {
						d(f)
					}
				}
				var h = a("immediate"),
					i = !1;
				! function() {
					try {
						Object.defineProperty({}, "test", {
							value: !0
						}), i = !0
					} catch (a) {}
				}(), c(d.prototype, "resolvePassed", function(a) {
					try {
						a(this.fulfillUnwrap.bind(this), this.reject.bind(this))
					} catch (b) {
						this.reject(b)
					}
				}), c(d.prototype, "reject", function(a) {
					this.resolve(!1, a)
				}), c(d.prototype, "fulfill", function(a) {
					this.resolve(!0, a)
				}), c(d.prototype, "fulfillUnwrap", function(a) {
					e(this.fulfill.bind(this), this.reject.bind(this), a)
				}), d.prototype.then = function(a, b) {
					return this.resolved ? this.resolved(a, b) : this.pending(a, b)
				},
				function() {
					try {
						d.prototype.catch = function(a) {
							return this.then(null, a)
						}
					} catch (a) {}
				}(), c(d.prototype, "pending", function(a, b) {
					var c = this;
					return new d(function(d, e) {
						c.successQueue.push("function" == typeof a ? {
							resolve: d,
							reject: e,
							callback: a
						} : {
							next: d,
							callback: !1
						}), c.failureQueue.push("function" == typeof b ? {
							resolve: d,
							reject: e,
							callback: b
						} : {
							next: e,
							callback: !1
						})
					})
				}), c(d.prototype, "resolve", function(a, b) {
					if (!this.resolved) {
						this.resolved = f(this, b, a ? 0 : 1);
						for (var c = a ? this.successQueue : this.failureQueue, d = c.length, e = -1; ++e < d;) c[e].callback ? h(g, c[e].callback, b, c[e].resolve, c[e].reject) : c[e].next(b)
					}
				}), b.exports = d
			}, {
				immediate: 27
			}
		],
		25: [
			function(a, b, c) {
				"use strict";
				c.test = function() {
					return !1
				}
			}, {}
		],
		26: [
			function(a, b) {
				(function(a) {
					b.exports = "object" == typeof a && a ? a : this
				}).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {}
		],
		27: [
			function(a, b) {
				"use strict";

				function c() {
					var a, b = 0,
						c = f;
					for (f = []; a = c[b++];) a()
				}
				for (var d, e = [a("./nextTick"), a("./mutation"), a("./realSetImmediate"), a("./postMessage"), a("./messageChannel"), a("./stateChange"), a("./timeout")], f = [], g = -1, h = e.length; ++g < h;)
					if (e[g].test()) {
						d = e[g].install(c);
						break
					}
				var i = function(a) {
					var b, e, g = a;
					return arguments.length > 1 && "function" == typeof a && (e = Array.prototype.slice.call(arguments, 1), g = function() {
						a.apply(void 0, e)
					}), 1 === (b = f.push(g)) && d(c), b
				};
				i.clear = function(a) {
					return a <= f.length && (f[a - 1] = function() {}), this
				}, b.exports = i
			}, {
				"./messageChannel": 28,
				"./mutation": 29,
				"./nextTick": 25,
				"./postMessage": 30,
				"./realSetImmediate": 31,
				"./stateChange": 32,
				"./timeout": 33
			}
		],
		28: [
			function(a, b, c) {
				"use strict";
				var d = a("./global");
				c.test = function() {
					return !!d.MessageChannel
				}, c.install = function(a) {
					var b = new d.MessageChannel;
					return b.port1.onmessage = a,
						function() {
							b.port2.postMessage(0)
						}
				}
			}, {
				"./global": 26
			}
		],
		29: [
			function(a, b, c) {
				"use strict";
				var d = a("./global"),
					e = d.MutationObserver || d.WebKitMutationObserver;
				c.test = function() {
					return e
				}, c.install = function(a) {
					var b = new e(a),
						c = d.document.createElement("div");
					return b.observe(c, {
							attributes: !0
						}),
						function() {
							c.setAttribute("drainQueue", "drainQueue")
						}
				}
			}, {
				"./global": 26
			}
		],
		30: [
			function(a, b, c) {
				"use strict";
				var d = a("./global");
				c.test = function() {
					if (!d.postMessage || d.importScripts) return !1;
					var a = !0,
						b = d.onmessage;
					return d.onmessage = function() {
						a = !1
					}, d.postMessage("", "*"), d.onmessage = b, a
				}, c.install = function(a) {
					function b(b) {
						b.source === d && b.data === c && a()
					}
					var c = "com.calvinmetcalf.setImmediate" + Math.random();
					return d.addEventListener ? d.addEventListener("message", b, !1) : d.attachEvent("onmessage", b),
						function() {
							d.postMessage(c, "*")
						}
				}
			}, {
				"./global": 26
			}
		],
		31: [
			function(a, b, c) {
				"use strict";
				var d = a("./global");
				c.test = function() {
					return d.setImmediate
				}, c.install = function(a) {
					return d.setTimeout.bind(d, a, 0)
				}
			}, {
				"./global": 26
			}
		],
		32: [
			function(a, b, c) {
				"use strict";
				var d = a("./global");
				c.test = function() {
					return "document" in d && "onreadystatechange" in d.document.createElement("script")
				}, c.install = function(a) {
					return function() {
						var b = d.document.createElement("script");
						return b.onreadystatechange = function() {
							a(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null
						}, d.document.documentElement.appendChild(b), a
					}
				}
			}, {
				"./global": 26
			}
		],
		33: [
			function(a, b, c) {
				"use strict";
				c.test = function() {
					return !0
				}, c.install = function(a) {
					return function() {
						setTimeout(a, 0)
					}
				}
			}, {}
		],
		34: [
			function(_dereq_, module, exports) {
				"use strict";
				module.exports = function(func, emit, sum, log, isArray, toJSON) {
					return eval("'use strict'; (" + func + ");")
				}
			}, {}
		],
		35: [
			function(a, b, c) {
				(function(b, d) {
					"use strict";

					function e(a) {
						for (var b = {}, c = 0, d = a.length; d > c; c++) {
							var e = r(a[c]),
								f = b[e];
							"undefined" == typeof f ? b[e] = c : "number" == typeof f ? b[e] = [f, c] : f.push(c)
						}
						return b
					}

					function f(a, b) {
						var c = o(a.id, b.id);
						return 0 !== c ? c : o(a.value, b.value)
					}

					function g(a, b, c) {
						var d = c[a];
						"undefined" == typeof d ? c[a] = b : Array.isArray(d) ? d.push(b) : c[a] = [d, b]
					}

					function h(a) {
						return a.reduce(function(a, b) {
							return a + b
						}, 0)
					}

					function i(a, b, c, d) {
						var e = b[a];
						"undefined" != typeof e && (d && (e = encodeURIComponent(JSON.stringify(e))), c.push(a + "=" + e))
					}

					function j(a, b, c) {
						var d = new Array(b.length);
						a.forEach(function(a) {
							var b = c[r(a.key)];
							"number" == typeof b ? g(b, a, d) : b.forEach(function(b) {
								g(b, a, d)
							})
						});
						var e = [];
						return d.forEach(function(a) {
							Array.isArray(a) ? e = e.concat(a.sort(f)) : e.push(a)
						}), e
					}

					function k(a, b, c) {
						function d(b, d) {
							var g = {
								id: i.doc._id,
								key: b,
								value: d
							};
							if (!("undefined" != typeof c.startkey && o(b, c.startkey) < 0 || "undefined" != typeof c.endkey && o(b, c.endkey) > 0 || "undefined" != typeof c.key && 0 !== o(b, c.key) || "undefined" != typeof c.keys && (k = k || e(c.keys), "undefined" == typeof k[r(b)]))) {
								if (m++, c.include_docs) {
									if (d && "object" == typeof d && d._id) return void a.get(d._id, function(a, b) {
										b && (g.doc = b), l.push(g), f()
									});
									g.doc = i.doc
								}
								l.push(g)
							}
						}

						function f() {
							var a;
							if (n && l.length === m) {
								if ("undefined" != typeof c.keys && l.length ? l = j(l, c.keys, k) : l.sort(function(a, b) {
									var c = o(a.key, b.key);
									return 0 !== c ? c : o(a.id, b.id)
								}), c.descending && l.reverse(), c.reduce === !1) return c.complete(null, {
									total_rows: l.length,
									offset: c.skip,
									rows: "limit" in c ? l.slice(c.skip, c.limit + c.skip) : c.skip > 0 ? l.slice(c.skip) : l
								});
								var d = [];
								if (l.forEach(function(a) {
									var b = d[d.length - 1];
									return b && 0 === o(b.key[0][0], a.key) ? (b.key.push([a.key, a.id]), void b.value.push(a.value)) : void d.push({
										key: [
											[a.key, a.id]
										],
										value: [a.value]
									})
								}), d.forEach(function(c) {
									return c.value = b.reduce.call(null, c.key, c.value), c.value.sumsqr && c.value.sumsqr instanceof Error ? void(a = c.value) : void(c.key = c.key[0][0])
								}), a) return void c.complete(a);
								c.complete(null, {
									total_rows: d.length,
									offset: c.skip,
									rows: "limit" in c ? d.slice(c.skip, c.limit + c.skip) : c.skip > 0 ? d.slice(c.skip) : d
								})
							}
						}
						var g;
						c.skip || (c.skip = 0), b.reduce || (c.reduce = !1);
						var i, k, l = [],
							m = 0,
							n = !1;
						"function" == typeof b.map && 2 === b.map.length ? (g = b.map, b.map = function(a) {
							return g(a, d)
						}) : b.map = p(b.map.toString(), d, h, q, Array.isArray, JSON.parse), b.reduce && (b.reduce = s[b.reduce] ? s[b.reduce] : p(b.reduce.toString(), d, h, q, Array.isArray, JSON.parse)), a.changes({
							conflicts: !0,
							include_docs: !0,
							onChange: function(a) {
								"deleted" in a || "_" === a.id[0] || (i = {
									doc: a.doc
								}, b.map.call(null, a.doc))
							},
							complete: function() {
								n = !0, f()
							}
						})
					}

					function l(a, b, c) {
						var d, e = c.complete,
							f = [],
							g = "GET";
						if (i("reduce", c, f), i("include_docs", c, f), i("limit", c, f), i("descending", c, f), i("group", c, f), i("group_level", c, f), i("skip", c, f), i("startkey", c, f, !0), i("endkey", c, f, !0), i("key", c, f, !0), "undefined" != typeof c.keys && (g = "POST", "string" == typeof b ? d = JSON.stringify({
							keys: c.keys
						}) : b.keys = c.keys), f = f.join("&"), f = "" === f ? "" : "?" + f, "string" == typeof b) {
							var h = b.split("/");
							return void a.request({
								method: g,
								url: "_design/" + h[0] + "/_view/" + h[1] + f,
								body: d
							}, e)
						}
						var j = JSON.parse(JSON.stringify(b, function(a, b) {
							return "function" == typeof b ? b + "" : b
						}));
						a.request({
							method: "POST",
							url: "_temp_view" + f,
							body: j
						}, e)
					}
					var m = a("pouchdb-collate"),
						n = "function" == typeof d.Promise ? d.Promise : a("lie"),
						o = m.collate,
						p = a("./evalfunc"),
						q = "undefined" != typeof console ? Function.prototype.bind.call(console.log, console) : function() {},
						r = function(a) {
							return JSON.stringify(m.normalizeKey(a))
						},
						s = {
							_sum: function(a, b) {
								return h(b)
							},
							_count: function(a, b) {
								return b.length
							},
							_stats: function(a, b) {
								return {
									sum: h(b),
									min: Math.min.apply(null, b),
									max: Math.max.apply(null, b),
									count: b.length,
									sumsqr: function() {
										var a, c = 0;
										for (var d in b) {
											if ("number" != typeof b[d]) return a = new Error("builtin _stats function requires map values to be numbers"), a.name = "invalid_value", a.status = 500, a;
											c += b[d] * b[d]
										}
										return c
									}()
								}
							}
						};
					c.query = function(a, c, d) {
						var e = this;
						"function" == typeof c && (d = c, c = {}), c = c || {}, d && (c.complete = d);
						var f, g = c.complete;
						c.complete && (f = function(a, c) {
							b.nextTick(function() {
								g(a, c)
							})
						});
						var h = new n(function(b, d) {
							if (c.complete = function(a, c) {
								a ? d(a) : b(c)
							}, "http" === e.type()) return "function" == typeof a ? l(e, {
								map: a
							}, c) : l(e, a, c);
							if ("object" == typeof a) return k(e, a, c);
							if ("function" == typeof a) return k(e, {
								map: a
							}, c);
							var f = a.split("/");
							e.get("_design/" + f[0], function(a, b) {
								return a ? void c.complete(a) : b.views[f[1]] ? void k(e, {
									map: b.views[f[1]].map,
									reduce: b.views[f[1]].reduce
								}, c) : void c.complete({
									name: "not_found",
									message: "missing_named_view"
								})
							})
						});
						return f && h.then(function(a) {
							f(null, a)
						}, f), h
					}
				}).call(this, a("/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {
				"./evalfunc": 34,
				"/Users/daleharvey/src/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js": 22,
				lie: 24,
				"pouchdb-collate": 36
			}
		],
		36: [
			function(a, b, c) {
				"use strict";

				function d(a, b) {
					for (var d = Math.min(a.length, b.length), e = 0; d > e; e++) {
						var f = c.collate(a[e], b[e]);
						if (0 !== f) return f
					}
					return a.length === b.length ? 0 : a.length > b.length ? 1 : -1
				}

				function e(a, b) {
					return a === b ? 0 : a > b ? 1 : -1
				}

				function f(a, b) {
					for (var d = Object.keys(a), e = Object.keys(b), f = Math.min(d.length, e.length), g = 0; f > g; g++) {
						var h = c.collate(d[g], e[g]);
						if (0 !== h) return h;
						if (h = c.collate(a[d[g]], b[e[g]]), 0 !== h) return h
					}
					return d.length === e.length ? 0 : d.length > e.length ? 1 : -1
				}

				function g(a) {
					var b = ["boolean", "number", "string", "object"];
					return -1 !== b.indexOf(typeof a) ? null === a ? 1 : b.indexOf(typeof a) + 2 : Array.isArray(a) ? 4.5 : void 0
				}
				c.collate = function(a, b) {
					a = c.normalizeKey(a), b = c.normalizeKey(b);
					var h = g(a),
						i = g(b);
					return h - i !== 0 ? h - i : null === a ? 0 : "number" == typeof a ? a - b : "boolean" == typeof a ? a === b ? 0 : b > a ? -1 : 1 : "string" == typeof a ? e(a, b) : Array.isArray(a) ? d(a, b) : "object" == typeof a ? f(a, b) : void 0
				}, c.normalizeKey = function(a) {
					if ("undefined" == typeof a) return null;
					if ("number" == typeof a) {
						if (1 / 0 === a || a === -1 / 0 || isNaN(a)) return null
					} else if (a instanceof Date) return a.toJSON();
					return a
				}
			}, {}
		],
		37: [
			function(a, b) {
				b.exports = {
					name: "pouchdb",
					version: "2.0.0",
					description: "PouchDB is a pocket-sized database.",
					release: "nightly",
					main: "./lib/index.js",
					homepage: "https://github.com/daleharvey/pouchdb",
					repository: "https://github.com/daleharvey/pouchdb",
					keywords: ["db", "couchdb", "pouchdb"],
					tags: ["db", "couchdb", "pouchdb"],
					dependencies: {
						request: "~2.28.0",
						"pouchdb-mapreduce": "1.0.0",
						bluebird: "~1.0.0",
						"level-sublevel": "~5.2.0",
						levelup: "~0.18.2",
						leveldown: "~0.10.2",
						inherits: "~2.0.1"
					},
					devDependencies: {
						commander: "~2.1.0",
						watchify: "~0.4.1",
						"uglify-js": "~2.4.6",
						jshint: "~2.3.0",
						"http-proxy": "~0.10.3",
						corsproxy: "~0.2.13",
						"http-server": "~0.5.5",
						browserify: "~3.24.13",
						lie: "~2.5.2",
						wd: "~0.2.8",
						tin: "~0.4.0",
						"qunit-mocha-ui": "0.0.5",
						mocha: "~1.17.1",
						chai: "~1.9.0",
						istanbul: "~0.2.4",
						ncp: "~0.5.0"
					},
					scripts: {
						jshint: "jshint -c .jshintrc bin/ lib/ tests/*.js",
						"build-js": "browserify lib/index.js -s PouchDB -o dist/pouchdb-nightly.js",
						uglify: "uglifyjs dist/pouchdb-nightly.js -mc > dist/pouchdb-nightly.min.js",
						build: "mkdir -p dist && npm run build-js && npm run uglify",
						"test-node": "./bin/run-mocha.sh",
						"test-browser": "mkdir -p dist && npm run build-js && ./bin/test-browser.js",
						dev: "./bin/dev-server.js",
						test: "npm run jshint && ./bin/run-test.sh",
						publish: "./bin/publish.sh",
						"publish-site": "./bin/publish-site.sh"
					},
					browser: {
						"./adapters/leveldb": !1,
						"./deps/buffer": !1,
						request: !1,
						levelup: !1,
						leveldown: !1,
						crypto: !1,
						bluebird: "lie",
						"level-sublevel": !1
					}
				}
			}, {}
		]
	}, {}, [13])(13)
}),
function(a) {
	a(["jquery"], function(a) {
		return function() {
			function b(a, b, c) {
				return l({
					type: t.wait,
					iconClass: n().iconClasses.wait,
					message: a,
					optionsOverride: c,
					title: b
				})
			}

			function c(a, b, c) {
				return l({
					type: t.error,
					iconClass: n().iconClasses.error,
					message: a,
					optionsOverride: c,
					title: b
				})
			}

			function d(a, b, c) {
				return l({
					type: t.info,
					iconClass: n().iconClasses.info,
					message: a,
					optionsOverride: c,
					title: b
				})
			}

			function e(a) {
				q = a
			}

			function f(a, b, c) {
				return l({
					type: t.success,
					iconClass: n().iconClasses.success,
					message: a,
					optionsOverride: c,
					title: b
				})
			}

			function g(a, b, c) {
				return l({
					type: t.warning,
					iconClass: n().iconClasses.warning,
					message: a,
					optionsOverride: c,
					title: b
				})
			}

			function h() {
				var a = n();
				p || m(a), i(p.find(".toast-wait"))
			}

			function i(b) {
				var c = n();
				return p || m(c), b && 0 === a(":focus", b).length ? void b[c.hideMethod]({
					duration: c.hideDuration,
					easing: c.hideEasing,
					complete: function() {
						o(b)
					}
				}) : void(p.children().length && p[c.hideMethod]({
					duration: c.hideDuration,
					easing: c.hideEasing,
					complete: function() {
						p.remove()
					}
				}))
			}

			function j() {
				return {
					tapToDismiss: !0,
					toastClass: "toast",
					containerId: "toast-container",
					debug: !1,
					showMethod: "fadeIn",
					showDuration: 500,
					showEasing: "swing",
					onShown: void 0,
					hideMethod: "fadeOut",
					hideDuration: 500,
					hideEasing: "swing",
					onHidden: void 0,
					extendedTimeOut: 8e3,
					iconClasses: {
						error: "toast-error",
						info: "toast-info",
						success: "toast-success",
						warning: "toast-warning",
						wait: "toast-wait"
					},
					iconClass: "toast-info",
					positionClass: "toast-bottom-right",
					timeOut: 8e3,
					titleClass: "toast-title",
					messageClass: "toast-message",
					target: "body",
					closeHtml: "<button>&times;</button>",
					newestOnTop: !0
				}
			}

			function k(a) {
				q && q(a)
			}

			function l(b) {
				function c(b) {
					return !a(":focus", i).length || b ? i[f.hideMethod]({
						duration: f.hideDuration,
						easing: f.hideEasing,
						complete: function() {
							o(i), f.onHidden && f.onHidden(), r.state = "hidden", r.endTime = new Date, k(r)
						}
					}) : void 0
				}

				function d() {
					(f.timeOut > 0 || f.extendedTimeOut > 0) && (h = setTimeout(c, f.extendedTimeOut))
				}

				function e() {
					clearTimeout(h), i.stop(!0, !0)[f.showMethod]({
						duration: f.showDuration,
						easing: f.showEasing
					})
				}
				var f = n(),
					g = b.iconClass || f.iconClass;
				"undefined" != typeof b.optionsOverride && (f = a.extend(f, b.optionsOverride), g = b.optionsOverride.iconClass || g), v && v.remove(), s++, v = p = m(f);
				var h = null,
					i = a("<div/>"),
					j = a("<div/>"),
					l = a("<div/>"),
					q = a(f.closeHtml),
					r = {
						toastId: s,
						state: "visible",
						startTime: new Date,
						options: f,
						map: b
					};
				return b.iconClass && i.addClass(f.toastClass).addClass(g), b.title && (j.append(b.title).addClass(f.titleClass), i.append(j)), b.message && (l.append(b.message).addClass(f.messageClass), i.append(l)), f.closeButton && (q.addClass("toast-close-button"), i.prepend(q)), i.hide(), f.newestOnTop ? p.prepend(i) : p.append(i), i[f.showMethod]({
					duration: f.showDuration,
					easing: f.showEasing,
					complete: f.onShown
				}), f.timeOut > 0 && b.type != t.wait && (h = setTimeout(c, f.timeOut)), i.hover(e, d), !f.onclick && f.tapToDismiss && b.type != t.wait && i.click(c), f.closeButton && q && q.click(function(a) {
					a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), c(!0)
				}), f.onclick && i.click(function() {
					f.onclick(), c()
				}), k(r), f.debug && console && console.log(r), i
			}

			function m(b) {
				return b || (b = n()), p = a("#" + b.containerId), p.length ? p : (p = a("<div/>").attr("id", b.containerId).addClass(b.positionClass), p.appendTo(a(b.target)), p)
			}

			function n() {
				return a.extend({}, j(), u.options)
			}

			function o(a) {
				p || (p = m()), a.is(":visible") || (a.remove(), a = null, 0 === p.children().length && p.remove())
			}
			var p, q, r = "2.0.1",
				s = 0,
				t = {
					error: "error",
					info: "info",
					success: "success",
					warning: "warning",
					wait: "wait"
				},
				u = {
					clear: i,
					error: c,
					getContainer: m,
					info: d,
					options: {},
					subscribe: e,
					success: f,
					version: r,
					warning: g,
					wait: b,
					dismiss: h
				};
			return u;
			var v
		}()
	})
}("function" == typeof define && define.amd ? define : function(a, b) {
	"undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery)
});