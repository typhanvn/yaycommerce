/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    'use strict';
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error('jQuery requires a window with a document');
        return t(e);
    } : t(e);
}('undefined' != typeof window ? window : this, (function(C, e) {
    'use strict';
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e) {
        return t.flat.call(e);
    } : function(e) {
        return t.concat.apply([], e);
    }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e) {
        return 'function' == typeof e && 'number' != typeof e.nodeType;
    }, x = function(e) {
        return null != e && e === e.window;
    }, E = C.document, c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement('script');
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? n[o.call(e)] || 'object' : typeof e;
    }
    var f = '3.5.1', S = function(e, t) {
        return new S.fn.init(e, t);
    };
    function p(e) {
        var t = !!e && 'length' in e && e.length, n = w(e);
        return !m(e) && !x(e) && ('array' === n || 0 === t || 'number' == typeof t && 0 < t && t - 1 in e);
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return S.each(this, e);
        },
        map: function(n) {
            return this.pushStack(S.map(this, (function(e, t) {
                return n.call(e, t, e);
            })));
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(S.grep(this, (function(e, t) {
                return (t + 1) % 2;
            })));
        },
        odd: function() {
            return this.pushStack(S.grep(this, (function(e, t) {
                return t % 2;
            })));
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ('boolean' == typeof a && (l = a, a = arguments[s] || {}, s++), 'object' == typeof a || m(a) || (a = {}), 
        s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
        '__proto__' !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], 
        o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, S.extend({
        expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || '[object Object]' !== o.call(e)) && (!(t = r(e)) || 'function' == typeof (n = v.call(t, 'constructor') && t.constructor) && a.call(n) === l);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n);
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, 'string' == typeof e ? [ e ] : e) : u.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a);
        },
        guid: 1,
        support: y
    }), 'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), 
    S.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), (function(e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
    }));
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = 'sizzle' + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0), 0;
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', I = '(?:\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+', W = '\\[' + M + '*(' + I + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + I + '))|)' + M + '*\\]', F = ':(' + I + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + W + ')*)|.*)\\)|)', B = new RegExp(M + '+', 'g'), $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), _ = new RegExp('^' + M + '*,' + M + '*'), z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), U = new RegExp(M + '|>'), X = new RegExp(F), V = new RegExp('^' + I + '$'), G = {
            ID: new RegExp('^#(' + I + ')'),
            CLASS: new RegExp('^\\.(' + I + ')'),
            TAG: new RegExp('^(' + I + '|[*])'),
            ATTR: new RegExp('^' + W),
            PSEUDO: new RegExp('^' + F),
            CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
            bool: new RegExp('^(?:' + R + ')$', 'i'),
            needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'), ne = function(e, t) {
            var n = '0x' + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? '\0' === e ? '�' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
        }, oe = function() {
            T();
        }, ae = be((function(e) {
            return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        }), {
            dir: 'parentNode',
            next: 'legend'
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1;
                }
            };
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], 'string' != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n;
                    } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), 
                    n;
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), 
                    n;
                }
                if (d.qsa && !N[t + ' '] && (!v || !v.test(t)) && (1 !== p || 'object' !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute('id')) ? s = s.replace(re, ie) : e.setAttribute('id', s = S)), 
                        o = (l = h(t)).length;
                        while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o]);
                        c = l.join(',');
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute('id');
                    }
                }
            }
            return g(t.replace($, '$1'), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + ' ') > b.cacheLength && delete e[r.shift()], e[t + ' '] = n;
            };
        }
        function le(e) {
            return e[S] = !0, e;
        }
        function ce(e) {
            var t = C.createElement('fieldset');
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function fe(e, t) {
            var n = e.split('|'), r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function(e) {
                return 'input' === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t || 'button' === t) && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                return 'form' in e ? e.parentNode && !1 === e.disabled ? 'label' in e ? 'label' in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : 'label' in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le((function(o) {
                return o = +o, le((function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                }));
            }));
        }
        function ye(e) {
            return e && 'undefined' != typeof e.getElementsByTagName && e;
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || 'HTML');
        }, T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, 
            E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', oe, !1) : n.attachEvent && n.attachEvent('onunload', oe)), 
            d.scope = ce((function(e) {
                return a.appendChild(e).appendChild(C.createElement('div')), 'undefined' != typeof e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length;
            })), d.attributes = ce((function(e) {
                return e.className = 'i', !e.getAttribute('className');
            })), d.getElementsByTagName = ce((function(e) {
                return e.appendChild(C.createComment('')), !e.getElementsByTagName('*').length;
            })), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce((function(e) {
                return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
            })), d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute('id') === t;
                };
            }, b.find.ID = function(e, t) {
                if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return t && t.value === n;
                };
            }, b.find.ID = function(e, t) {
                if ('undefined' != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode('id')) && n.value === e) return [ o ];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode('id')) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ('*' === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce((function(e) {
                var t;
                a.appendChild(e).innerHTML = '<a id=\'' + S + '\'></a><select id=\'' + S + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', 
                e.querySelectorAll('[msallowcapture^=\'\']').length && v.push('[*^$]=' + M + '*(?:\'\'|"")'), 
                e.querySelectorAll('[selected]').length || v.push('\\[' + M + '*(?:value|' + R + ')'), 
                e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='), (t = C.createElement('input')).setAttribute('name', ''), 
                e.appendChild(t), e.querySelectorAll('[name=\'\']').length || v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'), 
                e.querySelectorAll(':checked').length || v.push(':checked'), e.querySelectorAll('a#' + S + '+*').length || v.push('.#.+[+~]'), 
                e.querySelectorAll('\\\f'), v.push('[\\r\\n\\f]');
            })), ce((function(e) {
                e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
                var t = C.createElement('input');
                t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && v.push('name' + M + '*[*^$|!~]?='), 
                2 !== e.querySelectorAll(':enabled').length && v.push(':enabled', ':disabled'), 
                a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && v.push(':enabled', ':disabled'), 
                e.querySelectorAll('*,:x'), v.push(',.*:');
            }))), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce((function(e) {
                d.disconnectedMatch = c.call(e, '*'), c.call(e, '[s!=\'\']:x'), s.push('!=', F);
            })), v = v.length && new RegExp(v.join('|')), s = s.length && new RegExp(s.join('|')), 
            t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, D = t ? function(e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
            }), C;
        }, se.matches = function(e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function(e, t) {
            if (T(e), d.matchesSelector && E && !N[t + ' '] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {
                N(t, !0);
            }
            return 0 < se(t, C, null, [ e ]).length;
        }, se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t);
        }, se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, se.escape = function(e) {
            return (e + '').replace(re, ie);
        }, se.error = function(e) {
            throw new Error('Syntax error, unrecognized expression: ' + e);
        }, se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return u = null, e;
        }, o = se.getText = function(e) {
            var t, n = '', r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while (t = e[r++]) n += o(t);
            return n;
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': {
                    dir: 'parentNode'
                },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': {
                    dir: 'previousSibling'
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne), 
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && se.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return '*' === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = m[e + ' '];
                    return t || (t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) && m(e, (function(e) {
                        return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '');
                    }));
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? '!=' === r : !r || (t += '', '=' === r ? t === i : '!=' === r ? t !== i : '^=' === r ? i && 0 === t.indexOf(i) : '*=' === r ? i && -1 < t.indexOf(i) : '$=' === r ? i && t.slice(-i.length) === i : '~=' === r ? -1 < (' ' + t.replace(B, ' ') + ' ').indexOf(i) : '|=' === r && (t === i || t.slice(0, i.length + 1) === i + '-'));
                    };
                },
                CHILD: function(h, e, t, g, v) {
                    var y = 'nth' !== h.slice(0, 3), m = 'last' !== h.slice(-4), x = 'of-type' === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? 'nextSibling' : 'previousSibling', c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = 'only' === h && !u && 'nextSibling';
                                }
                                return !0;
                            }
                            if (u = [ m ? c.firstChild : c.lastChild ], m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], 
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [ k, s, d ];
                                    break;
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), 
                            !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [ k, d ]), 
                            a === e)) break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [ e, e, '', o ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
                    })) : function(e) {
                        return a(e, 0, t);
                    }) : a;
                }
            },
            pseudos: {
                not: le((function(e) {
                    var r = [], i = [], s = f(e.replace($, '$1'));
                    return s[S] ? le((function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                    })) : function(e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
                    };
                })),
                has: le((function(t) {
                    return function(e) {
                        return 0 < se(t, e).length;
                    };
                })),
                contains: le((function(t) {
                    return t = t.replace(te, ne), function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t);
                    };
                })),
                lang: le((function(n) {
                    return V.test(n || '') || se.error('unsupported lang: ' + n), n = n.replace(te, ne).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-');
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                })),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && 'button' === e.type || 'button' === t;
                },
                text: function(e) {
                    var t;
                    return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
                },
                first: ve((function() {
                    return [ 0 ];
                })),
                last: ve((function(e, t) {
                    return [ t - 1 ];
                })),
                eq: ve((function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                })),
                even: ve((function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                })),
                odd: ve((function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                })),
                lt: ve((function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                })),
                gt: ve((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }))
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && 'parentNode' === c, p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1;
            } : function(e, t, n) {
                var r, i, o, a = [ k, p ];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), 
                l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0;
                }
                return !1;
            };
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0;
            } : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le((function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                    return n;
                }(h || '*', n.nodeType ? [ n ] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r);
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
            }));
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[' '], s = o ? 1 : 0, u = be((function(e) {
                return e === i;
            }), a, !0), l = be((function(e) {
                return -1 < P(i, e);
            }), a, !0), c = [ function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r;
            } ]; s < r; s++) if (t = b.relative[e[s].type]) c = [ be(we(c), t) ]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                        value: ' ' === e[s - 2].type ? '*' : ''
                    })).replace($, '$1'), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
                }
                c.push(t);
            }
            return we(c);
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + ' '];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), 
                n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, ' ')
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + ' '];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = '0', c = e && [], f = [], p = w, d = e || x && b.find.TAG('*', i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++]) if (s(o, t || C, n)) {
                                r.push(o);
                                break;
                            }
                            i && (k = h);
                        }
                        m && ((o = !s && o) && u--, e && c.push(o));
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f);
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                    }
                    return i && (k = h, w = p), c;
                }, m ? le(r) : r))).selector = e;
            }
            return a;
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = 'function' == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && 'ID' === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break;
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
        }, d.sortStable = S.split('').sort(D).join('') === S, d.detectDuplicates = !!l, 
        T(), d.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
        })), ce((function(e) {
            return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
        })) || fe('type|href|height|width', (function(e, t, n) {
            if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        })), d.attributes && ce((function(e) {
            return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
        })) || fe('value', (function(e, t, n) {
            if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        })), ce((function(e) {
            return null == e.getAttribute('disabled');
        })) || fe(R, (function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        })), se;
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[':'] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, 
    S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, T = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, (function(e, t) {
            return !!n.call(e, t, e) !== r;
        })) : n.nodeType ? S.grep(e, (function(e) {
            return e === n !== r;
        })) : 'string' != typeof n ? S.grep(e, (function(e) {
            return -1 < i.call(n, e) !== r;
        })) : S.filter(n, e, r);
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [ r ] : [] : S.find.matches(e, S.grep(t, (function(e) {
            return 1 === e.nodeType;
        })));
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ('string' != typeof e) return this.pushStack(S(e).filter((function() {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0));
        },
        is: function(e) {
            return !!D(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1).length;
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, 'string' == typeof e) {
            if (!(r = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), 
                N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/, H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e;
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this), n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            }));
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = 'string' != typeof e && S(e);
            if (!k.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? 'string' == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return h(e, 'parentNode');
        },
        parentsUntil: function(e, t, n) {
            return h(e, 'parentNode', n);
        },
        next: function(e) {
            return O(e, 'nextSibling');
        },
        prev: function(e) {
            return O(e, 'previousSibling');
        },
        nextAll: function(e) {
            return h(e, 'nextSibling');
        },
        prevAll: function(e) {
            return h(e, 'previousSibling');
        },
        nextUntil: function(e, t, n) {
            return h(e, 'nextSibling', n);
        },
        prevUntil: function(e, t, n) {
            return h(e, 'previousSibling', n);
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return T(e.firstChild);
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, 'template') && (e = e.content || e), 
            S.merge([], e.childNodes));
        }
    }, (function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return 'Until' !== r.slice(-5) && (t = e), t && 'string' == typeof t && (n = S.filter(t, n)), 
            1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
        };
    }));
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = 'string' == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], (function(e, t) {
            n[t] = !0;
        })), n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, 
                t = !1);
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : '');
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    S.each(e, (function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && 'string' !== w(t) && n(t);
                    }));
                }(arguments), t && !i && c()), this;
            },
            remove: function() {
                return S.each(arguments, (function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                })), this;
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s && (s = []), this;
            },
            disable: function() {
                return a = u = [], s = t = '', this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return a = u = [], t || i || (s = t = ''), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, t) {
                return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), i || c()), 
                this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return f;
    }, S.extend({
        Deferred: function(e) {
            var o = [ [ 'notify', 'progress', S.Callbacks('memory'), S.Callbacks('memory'), 2 ], [ 'resolve', 'done', S.Callbacks('once memory'), S.Callbacks('once memory'), 0, 'resolved' ], [ 'reject', 'fail', S.Callbacks('once memory'), S.Callbacks('once memory'), 1, 'rejected' ] ], i = 'pending', a = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return a.then(null, e);
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred((function(r) {
                        S.each(o, (function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]]((function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + 'With'](this, n ? [ e ] : arguments);
                            }));
                        })), i = null;
                    })).promise();
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this, r = arguments, e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError('Thenable self-resolution');
                                    t = e && ('object' == typeof e || 'function' == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, 
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, 
                                    r = [ e ]), (s || o.resolveWith)(n, r));
                                }
                            }, t = s ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, 
                                    r = [ e ]), o.rejectWith(n, r));
                                }
                            };
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), 
                            C.setTimeout(t));
                        };
                    }
                    return S.Deferred((function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), 
                        o[2][3].add(l(0, e, m(n) ? n : M));
                    })).promise();
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a;
                }
            }, s = {};
            return S.each(o, (function(e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add((function() {
                    i = r;
                }), o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), 
                s[t[0]] = function() {
                    return s[t[0] + 'With'](this === s ? void 0 : this, arguments), this;
                }, s[t[0] + 'With'] = n.fireWith;
            })), a.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function(t) {
                return function(e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
                };
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), 'pending' === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise();
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
    }, S.readyException = function(e) {
        C.setTimeout((function() {
            throw e;
        }));
    };
    var F = S.Deferred();
    function B() {
        E.removeEventListener('DOMContentLoaded', B), C.removeEventListener('load', B), 
        S.ready();
    }
    S.fn.ready = function(e) {
        return F.then(e)['catch']((function(e) {
            S.readyException(e);
        })), this;
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [ S ]);
        }
    }), S.ready.then = F.then, 'complete' === E.readyState || 'loading' !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener('DOMContentLoaded', B), 
    C.addEventListener('load', B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ('object' === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, 
        m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(S(e), n);
        })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, _ = /^-ms-/, z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, 'ms-').replace(z, U);
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = S.expando + G.uid++;
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ('string' == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [ t ] : t.match(P) || []).length;
                    while (n--) delete r[t[n]];
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t);
        }
    };
    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = 'data-' + t.replace(K, '-$&').toLowerCase(), 
        'string' == typeof (n = e.getAttribute(r))) {
            try {
                n = 'true' === (i = n) || 'false' !== i && ('null' === i ? null : i === +i + '' ? +i : J.test(i) ? JSON.parse(i) : i);
            } catch (e) {}
            Q.set(e, t, n);
        } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function(e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function(e, t) {
            Q.remove(e, t);
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function(e, t) {
            Y.remove(e, t);
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf('data-') && (r = X(r.slice(5)), 
                    Z(o, r, i[r]));
                    Y.set(o, 'hasDataAttrs', !0);
                }
                return i;
            }
            return 'object' == typeof n ? this.each((function() {
                Q.set(this, n);
            })) : $(this, (function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each((function() {
                    Q.set(this, n, e);
                }));
            }), null, e, 1 < arguments.length, null, !0);
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e);
            }));
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || 'fx') + 'queue', r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || 'fx';
            var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);
            'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), 
            delete o.stop, i.call(e, (function() {
                S.dequeue(e, t);
            }), o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + 'queueHooks';
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks('once memory').add((function() {
                    Y.remove(e, [ t + 'queue', n ]);
                }))
            });
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return 'string' != typeof t && (n = t, t = 'fx', e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each((function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), 'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t);
            }));
        },
        dequeue: function(e) {
            return this.each((function() {
                S.dequeue(this, e);
            }));
        },
        clearQueue: function(e) {
            return this.queue(e || 'fx', []);
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            'string' != typeof e && (t = e, e = void 0), e = e || 'fx';
            while (a--) (n = Y.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'), ne = [ 'Top', 'Right', 'Bottom', 'Left' ], re = E.documentElement, ie = function(e) {
        return S.contains(e.ownerDocument, e);
    }, oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });
    var ae = function(e, t) {
        return 'none' === (e = t || e).style.display || '' === e.style.display && ie(e) && 'none' === S.css(e, 'display');
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return S.css(e, t, '');
        }, u = s(), l = n && n[3] || (S.cssNumber[t] ? '' : 'px'), c = e.nodeType && (S.cssNumber[t] || 'px' !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
            c /= o;
            c *= 2, S.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
        r.start = c, r.end = i)), i;
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, 
        t ? ('none' === n && (l[c] = Y.get(r, 'display') || null, l[c] || (r.style.display = '')), 
        '' === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, 
        s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, 'display'), 
        o.parentNode.removeChild(o), 'none' === u && (u = 'block'), ue[s] = u)))) : 'none' !== n && (l[c] = 'none', 
        Y.set(r, 'display', n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function() {
            return le(this, !0);
        },
        hide: function() {
            return le(this);
        },
        toggle: function(e) {
            return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? S(this).show() : S(this).hide();
            }));
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement('div')), (fe = E.createElement('input')).setAttribute('type', 'radio'), 
    fe.setAttribute('checked', 'checked'), fe.setAttribute('name', 't'), ce.appendChild(fe), 
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = '<textarea>x</textarea>', 
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = '<option></option>', 
    y.option = !!ce.lastChild;
    var ge = {
        thead: [ 1, '<table>', '</table>' ],
        col: [ 2, '<table><colgroup>', '</colgroup></table>' ],
        tr: [ 2, '<table><tbody>', '</tbody></table>' ],
        td: [ 3, '<table><tbody><tr>', '</tr></tbody></table>' ],
        _default: [ 0, '', '' ]
    };
    function ve(e, t) {
        var n;
        return n = 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t || '*') : 'undefined' != typeof e.querySelectorAll ? e.querySelectorAll(t || '*') : [], 
        void 0 === t || t && A(e, t) ? S.merge([ e ], n) : n;
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [ 1, '<select multiple=\'multiple\'>', '</select>' ]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ('object' === w(o)) S.merge(p, o.nodeType ? [ o ] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement('div')), s = (de.exec(o) || [ '', '' ])[1].toLowerCase(), 
            u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = '';
        } else p.push(t.createTextNode(o));
        f.textContent = '', d = 0;
        while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), 
        a = ve(f.appendChild(o), 'script'), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || '') && n.push(o);
        }
        return f;
    }
    var be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0;
    }
    function Ee() {
        return !1;
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement;
            } catch (e) {}
        }() == ('focus' === t);
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ('object' == typeof t) {
            for (s in 'string' != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ('string' == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee; else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++)), e.each((function() {
            S.event.add(this, t, i, r, n);
        }));
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), 
                    Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, 
                    r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation());
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), 
                n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), 
                (a = v.handle) || (a = v.handle = function(e) {
                    return 'undefined' != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
                }), l = (e = (e || '').match(P) || [ '' ]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || '').split('.').sort(), 
                d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join('.')
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), 
                f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                S.event.global[d] = !0);
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || '').match(P) || [ '' ]).length;
                while (l--) if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || '').split('.').sort(), 
                d) {
                    f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                    s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), 
                    delete u[d]);
                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, 'handle events');
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, 'events') || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, 
                    u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), 
                    u.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !('click' === e.type && 1 <= e.button)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + ' '] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [ l ]).length), 
                a[i] && o.push(r);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, 'input') && Ae(t, 'click', Ce), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, 'input') && Ae(t, 'click'), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, 'input') && Y.get(t, 'click') || A(t, 'a');
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, S.event.addProp), S.each({
        focus: 'focusin',
        blur: 'focusout'
    }, (function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se), !1;
            },
            trigger: function() {
                return Ae(this, e), !0;
            },
            delegateType: t
        };
    })), S.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, (function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), 
                e.type = i), t;
            }
        };
    })), S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ('object' == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && 'function' != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), 
            this.each((function() {
                S.event.remove(this, e, n, t);
            }));
        }
    });
    var Ne = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i, je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && S(e).children('tbody')[0] || e;
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
    }
    function He(e) {
        return 'true/' === (e.type || '').slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute('type'), 
        e;
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, 'handle events'), 
            s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && 'string' == typeof d && !y.checkClone && De.test(d)) return n.each((function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
        }));
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (s = (a = S.map(ve(e, 'script'), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), 
            s && S.merge(a, ve(u, 'script'))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], 
            he.test(u.type || '') && !Y.access(u, 'globalEval') && S.contains(l, u) && (u.src && 'module' !== (u.type || '').toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                nonce: u.nonce || u.getAttribute('nonce')
            }, l) : b(u.textContent.replace(je, ''), u, l));
        }
        return n;
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), 
        r.parentNode && (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e;
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), 
            r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, 'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : 'input' !== l && 'textarea' !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]); else Oe(e, c);
            return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c;
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0;
                }
                n[Q.expando] && (n[Q.expando] = void 0);
            }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0);
        },
        remove: function(e) {
            return Re(this, e);
        },
        text: function(e) {
            return $(this, (function(e) {
                return void 0 === e ? S.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                }));
            }), null, e, arguments.length);
        },
        append: function() {
            return Pe(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
            }));
        },
        prepend: function() {
            return Pe(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            }));
        },
        before: function() {
            return Pe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            }));
        },
        after: function() {
            return Pe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            }));
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), 
            e.textContent = '');
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return S.clone(this, e, t);
            }));
        },
        html: function(e) {
            return $(this, (function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ('string' == typeof e && !Ne.test(e) && !ge[(de.exec(e) || [ '', '' ])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }), null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, (function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
            }), n);
        }
    }), S.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, (function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), 
            S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n);
        };
    }));
    var Me = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'), Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e);
    }, We = function(e, t, n) {
        var r, i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.call(e), t) e.style[i] = o[i];
        return r;
    }, Fe = new RegExp(ne.join('|'), 'i');
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ('' !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), 
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
        s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + '' : a;
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', 
                l.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', 
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = '1%' !== e.top, s = 12 === t(e.marginLeft), l.style.right = '60%', o = 36 === t(e.right), 
                r = 36 === t(e.width), l.style.position = 'absolute', i = 12 === t(l.offsetWidth / 3), 
                re.removeChild(u), l = null;
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, r, i, o, a, s, u = E.createElement('div'), l = E.createElement('div');
        l.style && (l.style.backgroundClip = 'content-box', l.cloneNode(!0).style.backgroundClip = '', 
        y.clearCloneStyle = 'content-box' === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r;
            },
            pixelBoxStyles: function() {
                return e(), o;
            },
            pixelPosition: function() {
                return e(), n;
            },
            reliableMarginLeft: function() {
                return e(), s;
            },
            scrollboxSize: function() {
                return e(), i;
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement('table'), t = E.createElement('tr'), n = E.createElement('div'), 
                e.style.cssText = 'position:absolute;left:-11111px', t.style.height = '1px', n.style.height = '9px', 
                re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), 
                re.removeChild(e)), a;
            }
        }));
    }();
    var _e = [ 'Webkit', 'Moz', 'ms' ], ze = E.createElement('div').style, Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1), n = _e.length;
            while (n--) if ((e = _e[n] + t) in ze) return e;
        }(e) || e);
    }
    var Ve = /^(none|table(?!-c[ea]).+)/, Ge = /^--/, Ye = {
        position: 'absolute',
        visibility: 'hidden',
        display: 'block'
    }, Qe = {
        letterSpacing: '0',
        fontWeight: '400'
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
    }
    function Ke(e, t, n, r, i, o) {
        var a = 'width' === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (;a < 4; a += 2) 'margin' === n && (u += S.css(e, n + ne[a], !0, i)), r ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)), 
        'margin' !== n && (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i))) : (u += S.css(e, 'padding' + ne[a], !0, i), 
        'padding' !== n ? u += S.css(e, 'border' + ne[a] + 'Width', !0, i) : s += S.css(e, 'border' + ne[a] + 'Width', !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), 
        u;
    }
    function Ze(e, t, n) {
        var r = Ie(e), i = (!y.boxSizingReliable() || n) && 'border-box' === S.css(e, 'boxSizing', !1, r), o = i, a = Be(e, t, r), s = 'offset' + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = 'auto';
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, 'tr') || 'auto' === a || !parseFloat(a) && 'inline' === S.css(e, 'display', !1, r)) && e.getClientRects().length && (i = 'border-box' === S.css(e, 'boxSizing', !1, r), 
        (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px';
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, 'opacity');
                        return '' === n ? '1' : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                'string' === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = 'number'), 
                null != n && n == n && ('number' !== o || u || (n += i && i[3] || (S.cssNumber[s] ? '' : 'px')), 
                y.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), 
                a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)), 
            void 0 === i && (i = Be(e, t, r)), 'normal' === i && t in Qe && (i = Qe[t]), '' === n || n ? (o = parseFloat(i), 
            !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), S.each([ 'height', 'width' ], (function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(S.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, (function() {
                    return Ze(e, u, n);
                }));
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && 'absolute' === i.position, a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e['offset' + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, 'border', !1, i) - .5)), 
                s && (r = te.exec(t)) && 'px' !== (r[3] || 'px') && (e.style[u] = t, t = S.css(e, u)), 
                Je(0, t, s);
            }
        };
    })), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(Be(e, 'marginLeft')) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left;
        }))) + 'px';
    })), S.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, (function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [ e ]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
            }
        }, 'margin' !== i && (S.cssHooks[i + o].set = Je);
    })), S.fn.extend({
        css: function(e, t) {
            return $(this, (function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
            }), e, t, 1 < arguments.length);
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? '' : 'px');
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, S.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: 'swing'
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), 
        S.fx.tick());
    }
    function ut() {
        return C.setTimeout((function() {
            tt = void 0;
        })), tt = Date.now();
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = ne[r])] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners['*']), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always((function() {
            delete u.elem;
        })), u = function() {
            if (a) return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [ l, n, t ]), n < 1 && i ? t : (i || s.notifyWith(o, [ l, 1, 0 ]), 
            s.resolveWith(o, [ l ]), !1);
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [ l, 1, 0 ]), s.resolveWith(o, [ l, e ])) : s.rejectWith(o, [ l, e ]), 
                this;
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
            n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && 'expand' in a) for (n in o = a.expand(o), 
            delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
        }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), 
        n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            '*': [ function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = [ '*' ]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], 
            ft.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = 'width' in t || 'height' in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, 'fxshow');
            for (r in n.queue || (null == (a = S._queueHooks(e, 'fx')).unqueued && (a.unqueued = 0, 
            s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s();
            }), a.unqueued++, p.always((function() {
                p.always((function() {
                    a.unqueued--, S.queue(e, 'fx').length || a.empty.fire();
                }));
            }))), t) if (i = t[r], ot.test(i)) {
                if (delete t[r], o = o || 'toggle' === i, i === (g ? 'hide' : 'show')) {
                    if ('show' !== i || !v || void 0 === v[r]) continue;
                    g = !0;
                }
                d[r] = v && v[r] || S.style(e, r);
            }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (l = v && v.display) && (l = Y.get(e, 'display')), 'none' === (c = S.css(e, 'display')) && (l ? c = l : (le([ e ], !0), 
            l = e.style.display || l, c = S.css(e, 'display'), le([ e ]))), ('inline' === c || 'inline-block' === c && null != l) && 'none' === S.css(e, 'float') && (u || (p.done((function() {
                h.display = l;
            })), null == l && (c = h.display, l = 'none' === c ? '' : c)), h.display = 'inline-block')), 
            n.overflow && (h.overflow = 'hidden', p.always((function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            }))), u = !1, d) u || (v ? 'hidden' in v && (g = v.hidden) : v = Y.access(e, 'fxshow', {
                display: l
            }), o && (v.hidden = !g), g && le([ e ], !0), p.done((function() {
                for (r in g || le([ e ]), Y.remove(e, 'fxshow'), d) S.style(e, r, d[r]);
            }))), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, 
            u.start = 0));
        } ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        }
    }), S.speed = function(e, t, n) {
        var r = e && 'object' == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), 
        null != r.queue && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }, r;
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css('opacity', 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, 'finish')) && e.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return 'string' != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || 'fx', []), 
            this.each((function() {
                var e = !0, t = null != i && i + 'queueHooks', n = S.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i);
            }));
        },
        finish: function(a) {
            return !1 !== a && (a = a || 'fx'), this.each((function() {
                var e, t = Y.get(this), n = t[a + 'queue'], r = t[a + 'queueHooks'], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), 
                e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), 
                i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            }));
        }
    }), S.each([ 'toggle', 'show', 'hide' ], (function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || 'boolean' == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
        };
    })), S.each({
        slideDown: lt('show'),
        slideUp: lt('hide'),
        slideToggle: lt('toggle'),
        fadeIn: {
            opacity: 'show'
        },
        fadeOut: {
            opacity: 'hide'
        },
        fadeToggle: {
            opacity: 'toggle'
        }
    }, (function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    })), S.timers = [], S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0;
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start();
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st());
    }, S.fx.stop = function() {
        nt = null;
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || 'fx', this.queue(e, (function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n);
            };
        }));
    }, rt = E.createElement('input'), it = E.createElement('select').appendChild(E.createElement('option')), 
    rt.type = 'checkbox', y.checkOn = '' !== rt.value, y.optSelected = it.selected, 
    (rt = E.createElement('input')).value = 't', rt.type = 'radio', y.radioValue = 't' === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each((function() {
                S.removeAttr(this, e);
            }));
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 'undefined' == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), 
            void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), 
            n) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && 'radio' === t && A(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), 
            r;
        };
    }));
    var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(' ');
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute('class') || '';
    }
    function mt(e) {
        return Array.isArray(e) ? e : 'string' == typeof e && e.match(P) || [];
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[S.propFix[e] || e];
            }));
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, 
            i = S.propHooks[t]), void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, 'tabindex');
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: 'htmlFor',
            class: 'className'
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), S.each([ 'tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable' ], (function() {
        S.propFix[this.toLowerCase()] = this;
    })), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each((function(e) {
                S(this).addClass(t.call(this, e, yt(this)));
            }));
            if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && ' ' + vt(i) + ' ') {
                a = 0;
                while (o = e[a++]) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                i !== (s = vt(r)) && n.setAttribute('class', s);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each((function(e) {
                S(this).removeClass(t.call(this, e, yt(this)));
            }));
            if (!arguments.length) return this.attr('class', '');
            if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && ' ' + vt(i) + ' ') {
                a = 0;
                while (o = e[a++]) while (-1 < r.indexOf(' ' + o + ' ')) r = r.replace(' ' + o + ' ', ' ');
                i !== (s = vt(r)) && n.setAttribute('class', s);
            }
            return this;
        },
        toggleClass: function(i, t) {
            var o = typeof i, a = 'string' === o || Array.isArray(i);
            return 'boolean' == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each((function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })) : this.each((function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else void 0 !== i && 'boolean' !== o || ((e = yt(this)) && Y.set(this, '__className__', e), 
                this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''));
            }));
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = ' ' + e + ' ';
            while (n = this[r++]) if (1 === n.nodeType && -1 < (' ' + vt(yt(n)) + ' ').indexOf(t)) return !0;
            return !1;
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each((function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = '' : 'number' == typeof t ? t += '' : Array.isArray(t) && (t = S.map(t, (function(e) {
                    return null == e ? '' : e + '';
                }))), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && 'set' in r && void 0 !== r.set(this, t, 'value') || (this.value = t));
            }))) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && 'get' in r && void 0 !== (e = r.get(t, 'value')) ? e : 'string' == typeof (e = t.value) ? e.replace(xt, '') : null == e ? '' : e : void 0;
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, 'value');
                    return null != t ? t : vt(S.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = 'select-one' === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))) {
                        if (t = S(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), S.each([ 'radio', 'checkbox' ], (function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
        });
    })), y.focusin = 'onfocusin' in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function(e) {
        e.stopPropagation();
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [ n || E ], d = v.call(e, 'type') ? e.type : e, h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf('.') && (d = (h = d.split('.')).shift(), 
            h.sort()), u = d.indexOf(':') < 0 && 'on' + d, (e = e[S.expando] ? e : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3, 
            e.namespace = h.join('.'), e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : S.makeArray(t, [ e ]), 
            c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), 
                    a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, 
                (l = (Y.get(o, 'events') || Object.create(null))[e.type] && Y.get(o, 'handle')) && l.apply(o, t), 
                (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), 
                S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), 
                e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, 
                a && (n[u] = a)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t);
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                S.event.trigger(e, t, this);
            }));
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0);
        }
    }), y.focusin || S.each({
        focus: 'focusin',
        blur: 'focusout'
    }, (function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            }
        };
    }));
    var Tt = C.location, Ct = {
        guid: Date.now()
    }, Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || 'string' != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, 'text/xml');
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName('parsererror').length || S.error('Invalid XML: ' + e), 
        t;
    };
    var St = /\[\]$/, kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, (function(e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, r, i);
        })); else if (r || 'object' !== w(e)) i(n, e); else for (t in e) Dt(n + '[' + t + ']', e[t], r, i);
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
        };
        if (null == e) return '';
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, (function() {
            i(this.name, this.value);
        })); else for (n in e) Dt(n, e[n], t, i);
        return r.join('&');
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map((function() {
                var e = S.prop(this, 'elements');
                return e ? S.makeArray(e) : this;
            })).filter((function() {
                var e = this.type;
                return this.name && !S(this).is(':disabled') && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
            })).map((function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, '\r\n')
                    };
                })) : {
                    name: t.name,
                    value: n.replace(kt, '\r\n')
                };
            })).get();
        }
    });
    var jt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/, Pt = /^\/\//, Rt = {}, Mt = {}, It = '*/'.concat('*'), Wt = E.createElement('a');
    function Ft(o) {
        return function(e, t) {
            'string' != typeof e && (t = e, e = '*');
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t)) while (n = i[r++]) '+' === n[0] ? (n = n.slice(1) || '*', (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Bt(t, i, o, a) {
        var s = {}, u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], (function(e, t) {
                var n = t(i, o, a);
                return 'string' != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), 
                l(n), !1);
            })), r;
        }
        return l(i.dataTypes[0]) || !s['*'] && l('*');
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': It,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            'object' == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks('once memory'), w = v.statusCode || {}, a = {}, s = {}, u = 'canceled', T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Ht.exec(p)) n[t[1].toLowerCase() + ' '] = (n[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                        }
                        t = n[e.toLowerCase() + ' '];
                    }
                    return null == t ? null : t.join(', ');
                },
                getAllResponseHeaders: function() {
                    return h ? p : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t), l(0, t), this;
                }
            };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + '').replace(Pt, Tt.protocol + '//'), 
            v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || [ '' ], 
            null == v.crossDomain) {
                r = E.createElement('a');
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + '//' + Wt.host != r.protocol + '//' + r.host;
                } catch (e) {
                    v.crossDomain = !0;
                }
            }
            if (v.data && v.processData && 'string' != typeof v.data && (v.data = S.param(v.data, v.traditional)), 
            Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger('ajaxStart'), 
            v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ''), 
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || '').indexOf('application/x-www-form-urlencoded') && (v.data = v.data.replace(jt, '+')) : (o = v.url.slice(f.length), 
            v.data && (v.processData || 'string' == typeof v.data) && (f += (Et.test(f) ? '&' : '?') + v.data, 
            delete v.data), !1 === v.cache && (f = f.replace(Lt, '$1'), o = (Et.test(f) ? '&' : '?') + '_=' + Ct.guid++ + o), 
            v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader('If-Modified-Since', S.lastModified[f]), 
            S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader('Content-Type', v.contentType), 
            T.setRequestHeader('Accept', v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ('*' !== v.dataTypes[0] ? ', ' + It + '; q=0.01' : '') : v.accepts['*']), 
            v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = 'abort', b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger('ajaxSend', [ T, v ]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout((function() {
                    T.abort('timeout');
                }), v.timeout));
                try {
                    h = !1, c.send(a, l);
                } catch (e) {
                    if (h) throw e;
                    l(-1, e);
                }
            } else l(-1, 'No Transport');
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || '', T.readyState = 0 < e ? 4 : 0, 
                i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ('*' === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + ' ' + u[0]]) {
                                o = i;
                                break;
                            }
                            a || (a = i);
                        }
                        o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                }(v, T, n)), !i && -1 < S.inArray('script', v.dataTypes) && (v.converters['text script'] = function() {}), 
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                    u = o, o = c.shift()) if ('*' === o) o = u; else if ('*' !== u && u !== o) {
                        if (!(a = l[u + ' ' + o] || l['* ' + o])) for (i in l) if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break;
                        }
                        if (!0 !== a) if (a && e['throws']) t = a(t); else try {
                            t = a(t);
                        } catch (e) {
                            return {
                                state: 'parsererror',
                                error: a ? e : 'No conversion from ' + u + ' to ' + o
                            };
                        }
                    }
                    return {
                        state: 'success',
                        data: t
                    };
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader('Last-Modified')) && (S.lastModified[f] = u), 
                (u = T.getResponseHeader('etag')) && (S.etag[f] = u)), 204 === e || 'HEAD' === v.type ? l = 'nocontent' : 304 === e ? l = 'notmodified' : (l = s.state, 
                o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = 'error', e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || l) + '', i ? x.resolveWith(y, [ o, l, T ]) : x.rejectWith(y, [ T, l, a ]), 
                T.statusCode(w), w = void 0, g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [ T, v, i ? o : a ]), 
                b.fireWith(y, [ T, l ]), g && (m.trigger('ajaxComplete', [ T, v ]), --S.active || S.event.trigger('ajaxStop')));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, 'json');
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, 'script');
        }
    }), S.each([ 'get', 'post' ], (function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e));
        };
    })), S.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
    })), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                'text script': function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n);
            }
        });
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
            })).append(this)), this;
        },
        wrapInner: function(n) {
            return m(n) ? this.each((function(e) {
                S(this).wrapInner(n.call(this, e));
            })) : this.each((function() {
                var e = S(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            }));
        },
        wrap: function(t) {
            var n = m(t);
            return this.each((function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t);
            }));
        },
        unwrap: function(e) {
            return this.parent(e).not('body').each((function() {
                S(this).replaceWith(this.childNodes);
            })), this;
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e);
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest;
        } catch (e) {}
    };
    var _t = {
        0: 200,
        1223: 204
    }, zt = S.ajaxSettings.xhr();
    y.cors = !!zt && 'withCredentials' in zt, y.ajax = zt = !!zt, S.ajaxTransport((function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'), 
                e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, 
                        'abort' === e ? r.abort() : 'error' === e ? 'number' != typeof r.status ? t(0, 'error') : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, 'text' !== (r.responseType || 'text') || 'string' != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = o(), a = r.onerror = r.ontimeout = o('error'), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout((function() {
                        o && a();
                    }));
                }, o = o('abort');
                try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    })), S.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1);
    })), S.ajaxSetup({
        accepts: {
            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            'text script': function(e) {
                return S.globalEval(e), e;
            }
        }
    }), S.ajaxPrefilter('script', (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    })), S.ajaxTransport('script', (function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S('<script>').attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on('load error', i = function(e) {
                    r.remove(), i = null, e && t('error' === e.type ? 404 : 200, e.type);
                }), E.head.appendChild(r[0]);
            },
            abort: function() {
                i && i();
            }
        };
    }));
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + '_' + Ct.guid++;
            return this[e] = !0, e;
        }
    }), S.ajaxPrefilter('json jsonp', (function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && Vt.test(e.data) && 'data');
        if (a || 'jsonp' === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Vt, '$1' + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? '&' : '?') + e.jsonp + '=' + r), 
        e.converters['script json'] = function() {
            return o || S.error(r + ' was not called'), o[0];
        }, e.dataTypes[0] = 'json', i = C[r], C[r] = function() {
            o = arguments;
        }, n.always((function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, 
            Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
        })), 'script';
    })), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>', 
    2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return 'string' != typeof e ? [] : ('boolean' == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument('')).createElement('base')).href = E.location.href, 
        t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [ t.createElement(i[1]) ] : (i = xe([ e ], t, o), 
        o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o;
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(' ');
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (i = 'POST'), 
        0 < a.length && S.ajax({
            url: e,
            type: i || 'GET',
            dataType: 'html',
            data: t
        }).done((function(e) {
            o = arguments, a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e);
        })).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            }));
        }), this;
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, (function(e) {
            return t === e.elem;
        })).length;
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, 'position'), c = S(e), f = {};
            'static' === l && (e.style.position = 'relative'), s = c.offset(), o = S.css(e, 'top'), 
            u = S.css(e, 'left'), ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto') ? (a = (r = c.position()).top, 
            i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), 
            null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
            'using' in t ? t.using.call(e, f) : ('number' == typeof f.top && (f.top += 'px'), 
            'number' == typeof f.left && (f.left += 'px'), c.css(f));
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                S.offset.setOffset(this, t, e);
            }));
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && 'static' === S.css(e, 'position')) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0), 
                    i.left += S.css(e, 'borderLeftWidth', !0));
                }
                return {
                    top: t.top - i.top - S.css(r, 'marginTop', !0),
                    left: t.left - i.left - S.css(r, 'marginLeft', !0)
                };
            }
        },
        offsetParent: function() {
            return this.map((function() {
                var e = this.offsetParent;
                while (e && 'static' === S.css(e, 'position')) e = e.offsetParent;
                return e || re;
            }));
        }
    }), S.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, (function(t, i) {
        var o = 'pageYOffset' === i;
        S.fn[t] = function(e) {
            return $(this, (function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
            }), t, e, arguments.length);
        };
    })), S.each([ 'top', 'left' ], (function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, (function(e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + 'px' : t;
        }));
    })), S.each({
        Height: 'height',
        Width: 'width'
    }, (function(a, s) {
        S.each({
            padding: 'inner' + a,
            content: s,
            '': 'outer' + a
        }, (function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || 'boolean' != typeof e), i = r || (!0 === e || !0 === t ? 'margin' : 'border');
                return $(this, (function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf('outer') ? e['inner' + a] : e.document.documentElement['client' + a] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body['scroll' + a], r['scroll' + a], e.body['offset' + a], r['offset' + a], r['client' + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
                }), s, n ? e : void 0, n);
            };
        }));
    })), S.each([ 'ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend' ], (function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e);
        };
    })), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), S.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), (function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }));
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ('string' == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), 
        (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || S.guid++, i;
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0);
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, 
    S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }, S.trim = function(e) {
        return null == e ? '' : (e + '').replace(Gt, '');
    }, 'function' == typeof define && define.amd && define('jquery', [], (function() {
        return S;
    }));
    var Yt = C.jQuery, Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }, 'undefined' == typeof e && (C.jQuery = C.$ = S), S;
}));

/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define([ 'jquery' ], factory);
    } else {
        factory(jQuery);
    }
})((function($) {
    $.ui = $.ui || {};
    var version = $.ui.version = '1.12.1';
    /*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetUuid = 0;
    var widgetSlice = Array.prototype.slice;
    $.cleanData = function(orig) {
        return function(elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {
                    events = $._data(elem, 'events');
                    if (events && events.remove) {
                        $(elem).triggerHandler('remove');
                    }
                } catch (e) {}
            }
            orig(elems);
        };
    }($.cleanData);
    $.widget = function(name, base, prototype) {
        var existingConstructor, constructor, basePrototype;
        var proxiedPrototype = {};
        var namespace = name.split('.')[0];
        name = name.split('.')[1];
        var fullName = namespace + '-' + name;
        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }
        if ($.isArray(prototype)) {
            prototype = $.extend.apply(null, [ {} ].concat(prototype));
        }
        $.expr[':'][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
        };
        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) {
                return new constructor(options, element);
            }
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        });
        basePrototype = new base;
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, (function(prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = function() {
                function _super() {
                    return base.prototype[prop].apply(this, arguments);
                }
                function _superApply(args) {
                    return base.prototype[prop].apply(this, args);
                }
                return function() {
                    var __super = this._super;
                    var __superApply = this._superApply;
                    var returnValue;
                    this._super = _super;
                    this._superApply = _superApply;
                    returnValue = value.apply(this, arguments);
                    this._super = __super;
                    this._superApply = __superApply;
                    return returnValue;
                };
            }();
        }));
        constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, (function(i, child) {
                var childPrototype = child.prototype;
                $.widget(childPrototype.namespace + '.' + childPrototype.widgetName, constructor, child._proto);
            }));
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }
        $.widget.bridge(name, constructor);
        return constructor;
    };
    $.widget.extend = function(target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;
        for (;inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value);
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };
    $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = typeof options === 'string';
            var args = widgetSlice.call(arguments, 1);
            var returnValue = this;
            if (isMethodCall) {
                if (!this.length && options === 'instance') {
                    returnValue = undefined;
                } else {
                    this.each((function() {
                        var methodValue;
                        var instance = $.data(this, fullName);
                        if (options === 'instance') {
                            returnValue = instance;
                            return false;
                        }
                        if (!instance) {
                            return $.error('cannot call methods on ' + name + ' prior to initialization; ' + 'attempted to call method \'' + options + '\'');
                        }
                        if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                            return $.error('no such method \'' + options + '\' for ' + name + ' widget instance');
                        }
                        methodValue = instance[options].apply(instance, args);
                        if (methodValue !== instance && methodValue !== undefined) {
                            returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                            return false;
                        }
                    }));
                }
            } else {
                if (args.length) {
                    options = $.widget.extend.apply(null, [ options ].concat(args));
                }
                this.each((function() {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                }));
            }
            return returnValue;
        };
    };
    $.Widget = function() {};
    $.Widget._childConstructors = [];
    $.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: {
            classes: {},
            disabled: false,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widgetUuid++;
            this.eventNamespace = '.' + this.widgetName + this.uuid;
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            this.classesElementLookup = {};
            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ? element.ownerDocument : element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
            this._create();
            if (this.options.disabled) {
                this._setOptionDisabled(this.options.disabled);
            }
            this._trigger('create', null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            var that = this;
            this._destroy();
            $.each(this.classesElementLookup, (function(key, value) {
                that._removeClass(value, key);
            }));
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr('aria-disabled');
            this.bindings.off(this.eventNamespace);
        },
        _destroy: $.noop,
        widget: function() {
            return this.element;
        },
        option: function(key, value) {
            var options = key;
            var parts;
            var curOption;
            var i;
            if (arguments.length === 0) {
                return $.widget.extend({}, this.options);
            }
            if (typeof key === 'string') {
                options = {};
                parts = key.split('.');
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }
            this._setOptions(options);
            return this;
        },
        _setOptions: function(options) {
            var key;
            for (key in options) {
                this._setOption(key, options[key]);
            }
            return this;
        },
        _setOption: function(key, value) {
            if (key === 'classes') {
                this._setOptionClasses(value);
            }
            this.options[key] = value;
            if (key === 'disabled') {
                this._setOptionDisabled(value);
            }
            return this;
        },
        _setOptionClasses: function(value) {
            var classKey, elements, currentElements;
            for (classKey in value) {
                currentElements = this.classesElementLookup[classKey];
                if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
                    continue;
                }
                elements = $(currentElements.get());
                this._removeClass(currentElements, classKey);
                elements.addClass(this._classes({
                    element: elements,
                    keys: classKey,
                    classes: value,
                    add: true
                }));
            }
        },
        _setOptionDisabled: function(value) {
            this._toggleClass(this.widget(), this.widgetFullName + '-disabled', null, !!value);
            if (value) {
                this._removeClass(this.hoverable, null, 'ui-state-hover');
                this._removeClass(this.focusable, null, 'ui-state-focus');
            }
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            });
        },
        _classes: function(options) {
            var full = [];
            var that = this;
            options = $.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, options);
            function processClassString(classes, checkOption) {
                var current, i;
                for (i = 0; i < classes.length; i++) {
                    current = that.classesElementLookup[classes[i]] || $();
                    if (options.add) {
                        current = $($.unique(current.get().concat(options.element.get())));
                    } else {
                        current = $(current.not(options.element).get());
                    }
                    that.classesElementLookup[classes[i]] = current;
                    full.push(classes[i]);
                    if (checkOption && options.classes[classes[i]]) {
                        full.push(options.classes[classes[i]]);
                    }
                }
            }
            this._on(options.element, {
                remove: '_untrackClassesElement'
            });
            if (options.keys) {
                processClassString(options.keys.match(/\S+/g) || [], true);
            }
            if (options.extra) {
                processClassString(options.extra.match(/\S+/g) || []);
            }
            return full.join(' ');
        },
        _untrackClassesElement: function(event) {
            var that = this;
            $.each(that.classesElementLookup, (function(key, value) {
                if ($.inArray(event.target, value) !== -1) {
                    that.classesElementLookup[key] = $(value.not(event.target).get());
                }
            }));
        },
        _removeClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, false);
        },
        _addClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, true);
        },
        _toggleClass: function(element, keys, extra, add) {
            add = typeof add === 'boolean' ? add : extra;
            var shift = typeof element === 'string' || element === null, options = {
                extra: shift ? keys : extra,
                keys: shift ? element : keys,
                element: shift ? this.element : element,
                add: add
            };
            options.element.toggleClass(this._classes(options), add);
            return this;
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement;
            var instance = this;
            if (typeof suppressDisabledCheck !== 'boolean') {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }
            $.each(handlers, (function(event, handler) {
                function handlerProxy() {
                    if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass('ui-state-disabled'))) {
                        return;
                    }
                    return (typeof handler === 'string' ? instance[handler] : handler).apply(instance, arguments);
                }
                if (typeof handler !== 'string') {
                    handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                }
                var match = event.match(/^([\w:-]*)\s*(.*)$/);
                var eventName = match[1] + instance.eventNamespace;
                var selector = match[2];
                if (selector) {
                    delegateElement.on(eventName, selector, handlerProxy);
                } else {
                    element.on(eventName, handlerProxy);
                }
            }));
        },
        _off: function(element, eventName) {
            eventName = (eventName || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace;
            element.off(eventName).off(eventName);
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },
        _delay: function(handler, delay) {
            function handlerProxy() {
                return (typeof handler === 'string' ? instance[handler] : handler).apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function(event) {
                    this._addClass($(event.currentTarget), null, 'ui-state-hover');
                },
                mouseleave: function(event) {
                    this._removeClass($(event.currentTarget), null, 'ui-state-hover');
                }
            });
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function(event) {
                    this._addClass($(event.currentTarget), null, 'ui-state-focus');
                },
                focusout: function(event) {
                    this._removeClass($(event.currentTarget), null, 'ui-state-focus');
                }
            });
        },
        _trigger: function(type, event, data) {
            var prop, orig;
            var callback = this.options[type];
            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
            event.target = this.element[0];
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }
            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [ event ].concat(data)) === false || event.isDefaultPrevented());
        }
    };
    $.each({
        show: 'fadeIn',
        hide: 'fadeOut'
    }, (function(method, defaultEffect) {
        $.Widget.prototype['_' + method] = function(element, options, callback) {
            if (typeof options === 'string') {
                options = {
                    effect: options
                };
            }
            var hasOptions;
            var effectName = !options ? method : options === true || typeof options === 'number' ? defaultEffect : options.effect || defaultEffect;
            options = options || {};
            if (typeof options === 'number') {
                options = {
                    duration: options
                };
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
                element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue((function(next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                }));
            }
        };
    }));
    var widget = $.widget;
    /*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */    (function() {
        var cachedScrollbarWidth, max = Math.max, abs = Math.abs, rhorizontal = /left|center|right/, rvertical = /top|center|bottom/, roffset = /[\+\-]\d+(\.[\d]+)?%?/, rposition = /^\w+/, rpercent = /%$/, _position = $.fn.position;
        function getOffsets(offsets, width, height) {
            return [ parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1) ];
        }
        function parseCss(element, property) {
            return parseInt($.css(element, property), 10) || 0;
        }
        function getDimensions(elem) {
            var raw = elem[0];
            if (raw.nodeType === 9) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                };
            }
            if ($.isWindow(raw)) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {
                        top: elem.scrollTop(),
                        left: elem.scrollLeft()
                    }
                };
            }
            if (raw.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {
                        top: raw.pageY,
                        left: raw.pageX
                    }
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }
        $.position = {
            scrollbarWidth: function() {
                if (cachedScrollbarWidth !== undefined) {
                    return cachedScrollbarWidth;
                }
                var w1, w2, div = $('<div ' + 'style=\'display:block;position:absolute;width:50px;height:50px;overflow:hidden;\'>' + '<div style=\'height:100px;width:auto;\'></div></div>'), innerDiv = div.children()[0];
                $('body').append(div);
                w1 = innerDiv.offsetWidth;
                div.css('overflow', 'scroll');
                w2 = innerDiv.offsetWidth;
                if (w1 === w2) {
                    w2 = div[0].clientWidth;
                }
                div.remove();
                return cachedScrollbarWidth = w1 - w2;
            },
            getScrollInfo: function(within) {
                var overflowX = within.isWindow || within.isDocument ? '' : within.element.css('overflow-x'), overflowY = within.isWindow || within.isDocument ? '' : within.element.css('overflow-y'), hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element[0].scrollWidth, hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element[0].scrollHeight;
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(element) {
                var withinElement = $(element || window), isWindow = $.isWindow(withinElement[0]), isDocument = !!withinElement[0] && withinElement[0].nodeType === 9, hasOffset = !isWindow && !isDocument;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: hasOffset ? $(element).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),
                    width: withinElement.outerWidth(),
                    height: withinElement.outerHeight()
                };
            }
        };
        $.fn.position = function(options) {
            if (!options || !options.of) {
                return _position.apply(this, arguments);
            }
            options = $.extend({}, options);
            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, target = $(options.of), within = $.position.getWithinInfo(options.within), scrollInfo = $.position.getScrollInfo(within), collision = (options.collision || 'flip').split(' '), offsets = {};
            dimensions = getDimensions(target);
            if (target[0].preventDefault) {
                options.at = 'left top';
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;
            basePosition = $.extend({}, targetOffset);
            $.each([ 'my', 'at' ], (function() {
                var pos = (options[this] || '').split(' '), horizontalOffset, verticalOffset;
                if (pos.length === 1) {
                    pos = rhorizontal.test(pos[0]) ? pos.concat([ 'center' ]) : rvertical.test(pos[0]) ? [ 'center' ].concat(pos) : [ 'center', 'center' ];
                }
                pos[0] = rhorizontal.test(pos[0]) ? pos[0] : 'center';
                pos[1] = rvertical.test(pos[1]) ? pos[1] : 'center';
                horizontalOffset = roffset.exec(pos[0]);
                verticalOffset = roffset.exec(pos[1]);
                offsets[this] = [ horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0 ];
                options[this] = [ rposition.exec(pos[0])[0], rposition.exec(pos[1])[0] ];
            }));
            if (collision.length === 1) {
                collision[1] = collision[0];
            }
            if (options.at[0] === 'right') {
                basePosition.left += targetWidth;
            } else if (options.at[0] === 'center') {
                basePosition.left += targetWidth / 2;
            }
            if (options.at[1] === 'bottom') {
                basePosition.top += targetHeight;
            } else if (options.at[1] === 'center') {
                basePosition.top += targetHeight / 2;
            }
            atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
            basePosition.left += atOffset[0];
            basePosition.top += atOffset[1];
            return this.each((function() {
                var collisionPosition, using, elem = $(this), elemWidth = elem.outerWidth(), elemHeight = elem.outerHeight(), marginLeft = parseCss(this, 'marginLeft'), marginTop = parseCss(this, 'marginTop'), collisionWidth = elemWidth + marginLeft + parseCss(this, 'marginRight') + scrollInfo.width, collisionHeight = elemHeight + marginTop + parseCss(this, 'marginBottom') + scrollInfo.height, position = $.extend({}, basePosition), myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
                if (options.my[0] === 'right') {
                    position.left -= elemWidth;
                } else if (options.my[0] === 'center') {
                    position.left -= elemWidth / 2;
                }
                if (options.my[1] === 'bottom') {
                    position.top -= elemHeight;
                } else if (options.my[1] === 'center') {
                    position.top -= elemHeight / 2;
                }
                position.left += myOffset[0];
                position.top += myOffset[1];
                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };
                $.each([ 'left', 'top' ], (function(i, dir) {
                    if ($.ui.position[collision[i]]) {
                        $.ui.position[collision[i]][dir](position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [ atOffset[0] + myOffset[0], atOffset[1] + myOffset[1] ],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                }));
                if (options.using) {
                    using = function(props) {
                        var left = targetOffset.left - position.left, right = left + targetWidth - elemWidth, top = targetOffset.top - position.top, bottom = top + targetHeight - elemHeight, feedback = {
                            target: {
                                element: target,
                                left: targetOffset.left,
                                top: targetOffset.top,
                                width: targetWidth,
                                height: targetHeight
                            },
                            element: {
                                element: elem,
                                left: position.left,
                                top: position.top,
                                width: elemWidth,
                                height: elemHeight
                            },
                            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
                            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
                        };
                        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
                            feedback.horizontal = 'center';
                        }
                        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
                            feedback.vertical = 'middle';
                        }
                        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
                            feedback.important = 'horizontal';
                        } else {
                            feedback.important = 'vertical';
                        }
                        options.using.call(this, props, feedback);
                    };
                }
                elem.offset($.extend(position, {
                    using: using
                }));
            }));
        };
        $.ui.position = {
            fit: {
                left: function(position, data) {
                    var within = data.within, withinOffset = within.isWindow ? within.scrollLeft : within.offset.left, outerWidth = within.width, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = withinOffset - collisionPosLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset, newOverRight;
                    if (data.collisionWidth > outerWidth) {
                        if (overLeft > 0 && overRight <= 0) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                            position.left += overLeft - newOverRight;
                        } else if (overRight > 0 && overLeft <= 0) {
                            position.left = withinOffset;
                        } else {
                            if (overLeft > overRight) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }
                    } else if (overLeft > 0) {
                        position.left += overLeft;
                    } else if (overRight > 0) {
                        position.left -= overRight;
                    } else {
                        position.left = max(position.left - collisionPosLeft, position.left);
                    }
                },
                top: function(position, data) {
                    var within = data.within, withinOffset = within.isWindow ? within.scrollTop : within.offset.top, outerHeight = data.within.height, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = withinOffset - collisionPosTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset, newOverBottom;
                    if (data.collisionHeight > outerHeight) {
                        if (overTop > 0 && overBottom <= 0) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                            position.top += overTop - newOverBottom;
                        } else if (overBottom > 0 && overTop <= 0) {
                            position.top = withinOffset;
                        } else {
                            if (overTop > overBottom) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }
                    } else if (overTop > 0) {
                        position.top += overTop;
                    } else if (overBottom > 0) {
                        position.top -= overBottom;
                    } else {
                        position.top = max(position.top - collisionPosTop, position.top);
                    }
                }
            },
            flip: {
                left: function(position, data) {
                    var within = data.within, withinOffset = within.offset.left + within.scrollLeft, outerWidth = within.width, offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = collisionPosLeft - offsetLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft, myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0, atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0, offset = -2 * data.offset[0], newOverRight, newOverLeft;
                    if (overLeft < 0) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                        if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if (overRight > 0) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                        if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function(position, data) {
                    var within = data.within, withinOffset = within.offset.top + within.scrollTop, outerHeight = within.height, offsetTop = within.isWindow ? within.scrollTop : within.offset.top, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = collisionPosTop - offsetTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop, top = data.my[1] === 'top', myOffset = top ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0, atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0, offset = -2 * data.offset[1], newOverTop, newOverBottom;
                    if (overTop < 0) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                        if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if (overBottom > 0) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                        if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply(this, arguments);
                    $.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    $.ui.position.flip.top.apply(this, arguments);
                    $.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    })();
    var position = $.ui.position;
    /*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var data = $.extend($.expr[':'], {
        data: $.expr.createPseudo ? $.expr.createPseudo((function(dataName) {
            return function(elem) {
                return !!$.data(elem, dataName);
            };
        })) : function(elem, i, match) {
            return !!$.data(elem, match[3]);
        }
    });
    /*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var disableSelection = $.fn.extend({
        disableSelection: function() {
            var eventType = 'onselectstart' in document.createElement('div') ? 'selectstart' : 'mousedown';
            return function() {
                return this.on(eventType + '.ui-disableSelection', (function(event) {
                    event.preventDefault();
                }));
            };
        }(),
        enableSelection: function() {
            return this.off('.ui-disableSelection');
        }
    });
    /*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var dataSpace = 'ui-effects-', dataSpaceStyle = 'ui-effects-style', dataSpaceAnimated = 'ui-effects-animated', jQuery = $;
    $.effects = {
        effect: {}
    };
    /*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */    (function(jQuery, undefined) {
        var stepHooks = 'backgroundColor borderBottomColor borderLeftColor borderRightColor ' + 'borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor', rplusequals = /^([\-+])=\s*(\d+\.?\d*)/, stringParsers = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [ execResult[1], execResult[2], execResult[3], execResult[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [ execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(execResult) {
                return [ parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(execResult) {
                return [ parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: 'hsla',
            parse: function(execResult) {
                return [ execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4] ];
            }
        } ], color = jQuery.Color = function(color, green, blue, alpha) {
            return new jQuery.Color.fn.parse(color, green, blue, alpha);
        }, spaces = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: 'byte'
                    },
                    green: {
                        idx: 1,
                        type: 'byte'
                    },
                    blue: {
                        idx: 2,
                        type: 'byte'
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: 'degrees'
                    },
                    saturation: {
                        idx: 1,
                        type: 'percent'
                    },
                    lightness: {
                        idx: 2,
                        type: 'percent'
                    }
                }
            }
        }, propTypes = {
            byte: {
                floor: true,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: true
            }
        }, support = color.support = {}, supportElem = jQuery('<p>')[0], colors, each = jQuery.each;
        supportElem.style.cssText = 'background-color:rgba(1,1,1,.5)';
        support.rgba = supportElem.style.backgroundColor.indexOf('rgba') > -1;
        each(spaces, (function(spaceName, space) {
            space.cache = '_' + spaceName;
            space.props.alpha = {
                idx: 3,
                type: 'percent',
                def: 1
            };
        }));
        function clamp(value, prop, allowEmpty) {
            var type = propTypes[prop.type] || {};
            if (value == null) {
                return allowEmpty || !prop.def ? null : prop.def;
            }
            value = type.floor ? ~~value : parseFloat(value);
            if (isNaN(value)) {
                return prop.def;
            }
            if (type.mod) {
                return (value + type.mod) % type.mod;
            }
            return 0 > value ? 0 : type.max < value ? type.max : value;
        }
        function stringParse(string) {
            var inst = color(), rgba = inst._rgba = [];
            string = string.toLowerCase();
            each(stringParsers, (function(i, parser) {
                var parsed, match = parser.re.exec(string), values = match && parser.parse(match), spaceName = parser.space || 'rgba';
                if (values) {
                    parsed = inst[spaceName](values);
                    inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                    rgba = inst._rgba = parsed._rgba;
                    return false;
                }
            }));
            if (rgba.length) {
                if (rgba.join() === '0,0,0,0') {
                    jQuery.extend(rgba, colors.transparent);
                }
                return inst;
            }
            return colors[string];
        }
        color.fn = jQuery.extend(color.prototype, {
            parse: function(red, green, blue, alpha) {
                if (red === undefined) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                }
                if (red.jquery || red.nodeType) {
                    red = jQuery(red).css(green);
                    green = undefined;
                }
                var inst = this, type = jQuery.type(red), rgba = this._rgba = [];
                if (green !== undefined) {
                    red = [ red, green, blue, alpha ];
                    type = 'array';
                }
                if (type === 'string') {
                    return this.parse(stringParse(red) || colors._default);
                }
                if (type === 'array') {
                    each(spaces.rgba.props, (function(key, prop) {
                        rgba[prop.idx] = clamp(red[prop.idx], prop);
                    }));
                    return this;
                }
                if (type === 'object') {
                    if (red instanceof color) {
                        each(spaces, (function(spaceName, space) {
                            if (red[space.cache]) {
                                inst[space.cache] = red[space.cache].slice();
                            }
                        }));
                    } else {
                        each(spaces, (function(spaceName, space) {
                            var cache = space.cache;
                            each(space.props, (function(key, prop) {
                                if (!inst[cache] && space.to) {
                                    if (key === 'alpha' || red[key] == null) {
                                        return;
                                    }
                                    inst[cache] = space.to(inst._rgba);
                                }
                                inst[cache][prop.idx] = clamp(red[key], prop, true);
                            }));
                            if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
                                inst[cache][3] = 1;
                                if (space.from) {
                                    inst._rgba = space.from(inst[cache]);
                                }
                            }
                        }));
                    }
                    return this;
                }
            },
            is: function(compare) {
                var is = color(compare), same = true, inst = this;
                each(spaces, (function(_, space) {
                    var localCache, isCache = is[space.cache];
                    if (isCache) {
                        localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                        each(space.props, (function(_, prop) {
                            if (isCache[prop.idx] != null) {
                                same = isCache[prop.idx] === localCache[prop.idx];
                                return same;
                            }
                        }));
                    }
                    return same;
                }));
                return same;
            },
            _space: function() {
                var used = [], inst = this;
                each(spaces, (function(spaceName, space) {
                    if (inst[space.cache]) {
                        used.push(spaceName);
                    }
                }));
                return used.pop();
            },
            transition: function(other, distance) {
                var end = color(other), spaceName = end._space(), space = spaces[spaceName], startColor = this.alpha() === 0 ? color('transparent') : this, start = startColor[space.cache] || space.to(startColor._rgba), result = start.slice();
                end = end[space.cache];
                each(space.props, (function(key, prop) {
                    var index = prop.idx, startValue = start[index], endValue = end[index], type = propTypes[prop.type] || {};
                    if (endValue === null) {
                        return;
                    }
                    if (startValue === null) {
                        result[index] = endValue;
                    } else {
                        if (type.mod) {
                            if (endValue - startValue > type.mod / 2) {
                                startValue += type.mod;
                            } else if (startValue - endValue > type.mod / 2) {
                                startValue -= type.mod;
                            }
                        }
                        result[index] = clamp((endValue - startValue) * distance + startValue, prop);
                    }
                }));
                return this[spaceName](result);
            },
            blend: function(opaque) {
                if (this._rgba[3] === 1) {
                    return this;
                }
                var rgb = this._rgba.slice(), a = rgb.pop(), blend = color(opaque)._rgba;
                return color(jQuery.map(rgb, (function(v, i) {
                    return (1 - a) * blend[i] + a * v;
                })));
            },
            toRgbaString: function() {
                var prefix = 'rgba(', rgba = jQuery.map(this._rgba, (function(v, i) {
                    return v == null ? i > 2 ? 1 : 0 : v;
                }));
                if (rgba[3] === 1) {
                    rgba.pop();
                    prefix = 'rgb(';
                }
                return prefix + rgba.join() + ')';
            },
            toHslaString: function() {
                var prefix = 'hsla(', hsla = jQuery.map(this.hsla(), (function(v, i) {
                    if (v == null) {
                        v = i > 2 ? 1 : 0;
                    }
                    if (i && i < 3) {
                        v = Math.round(v * 100) + '%';
                    }
                    return v;
                }));
                if (hsla[3] === 1) {
                    hsla.pop();
                    prefix = 'hsl(';
                }
                return prefix + hsla.join() + ')';
            },
            toHexString: function(includeAlpha) {
                var rgba = this._rgba.slice(), alpha = rgba.pop();
                if (includeAlpha) {
                    rgba.push(~~(alpha * 255));
                }
                return '#' + jQuery.map(rgba, (function(v) {
                    v = (v || 0).toString(16);
                    return v.length === 1 ? '0' + v : v;
                })).join('');
            },
            toString: function() {
                return this._rgba[3] === 0 ? 'transparent' : this.toRgbaString();
            }
        });
        color.fn.parse.prototype = color.fn;
        function hue2rgb(p, q, h) {
            h = (h + 1) % 1;
            if (h * 6 < 1) {
                return p + (q - p) * h * 6;
            }
            if (h * 2 < 1) {
                return q;
            }
            if (h * 3 < 2) {
                return p + (q - p) * (2 / 3 - h) * 6;
            }
            return p;
        }
        spaces.hsla.to = function(rgba) {
            if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
                return [ null, null, null, rgba[3] ];
            }
            var r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3], max = Math.max(r, g, b), min = Math.min(r, g, b), diff = max - min, add = max + min, l = add * .5, h, s;
            if (min === max) {
                h = 0;
            } else if (r === max) {
                h = 60 * (g - b) / diff + 360;
            } else if (g === max) {
                h = 60 * (b - r) / diff + 120;
            } else {
                h = 60 * (r - g) / diff + 240;
            }
            if (diff === 0) {
                s = 0;
            } else if (l <= .5) {
                s = diff / add;
            } else {
                s = diff / (2 - add);
            }
            return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
        };
        spaces.hsla.from = function(hsla) {
            if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
                return [ null, null, null, hsla[3] ];
            }
            var h = hsla[0] / 360, s = hsla[1], l = hsla[2], a = hsla[3], q = l <= .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
            return [ Math.round(hue2rgb(p, q, h + 1 / 3) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - 1 / 3) * 255), a ];
        };
        each(spaces, (function(spaceName, space) {
            var props = space.props, cache = space.cache, to = space.to, from = space.from;
            color.fn[spaceName] = function(value) {
                if (to && !this[cache]) {
                    this[cache] = to(this._rgba);
                }
                if (value === undefined) {
                    return this[cache].slice();
                }
                var ret, type = jQuery.type(value), arr = type === 'array' || type === 'object' ? value : arguments, local = this[cache].slice();
                each(props, (function(key, prop) {
                    var val = arr[type === 'object' ? key : prop.idx];
                    if (val == null) {
                        val = local[prop.idx];
                    }
                    local[prop.idx] = clamp(val, prop);
                }));
                if (from) {
                    ret = color(from(local));
                    ret[cache] = local;
                    return ret;
                } else {
                    return color(local);
                }
            };
            each(props, (function(key, prop) {
                if (color.fn[key]) {
                    return;
                }
                color.fn[key] = function(value) {
                    var vtype = jQuery.type(value), fn = key === 'alpha' ? this._hsla ? 'hsla' : 'rgba' : spaceName, local = this[fn](), cur = local[prop.idx], match;
                    if (vtype === 'undefined') {
                        return cur;
                    }
                    if (vtype === 'function') {
                        value = value.call(this, cur);
                        vtype = jQuery.type(value);
                    }
                    if (value == null && prop.empty) {
                        return this;
                    }
                    if (vtype === 'string') {
                        match = rplusequals.exec(value);
                        if (match) {
                            value = cur + parseFloat(match[2]) * (match[1] === '+' ? 1 : -1);
                        }
                    }
                    local[prop.idx] = value;
                    return this[fn](local);
                };
            }));
        }));
        color.hook = function(hook) {
            var hooks = hook.split(' ');
            each(hooks, (function(i, hook) {
                jQuery.cssHooks[hook] = {
                    set: function(elem, value) {
                        var parsed, curElem, backgroundColor = '';
                        if (value !== 'transparent' && (jQuery.type(value) !== 'string' || (parsed = stringParse(value)))) {
                            value = color(parsed || value);
                            if (!support.rgba && value._rgba[3] !== 1) {
                                curElem = hook === 'backgroundColor' ? elem.parentNode : elem;
                                while ((backgroundColor === '' || backgroundColor === 'transparent') && curElem && curElem.style) {
                                    try {
                                        backgroundColor = jQuery.css(curElem, 'backgroundColor');
                                        curElem = curElem.parentNode;
                                    } catch (e) {}
                                }
                                value = value.blend(backgroundColor && backgroundColor !== 'transparent' ? backgroundColor : '_default');
                            }
                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[hook] = value;
                        } catch (e) {}
                    }
                };
                jQuery.fx.step[hook] = function(fx) {
                    if (!fx.colorInit) {
                        fx.start = color(fx.elem, hook);
                        fx.end = color(fx.end);
                        fx.colorInit = true;
                    }
                    jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
                };
            }));
        };
        color.hook(stepHooks);
        jQuery.cssHooks.borderColor = {
            expand: function(value) {
                var expanded = {};
                each([ 'Top', 'Right', 'Bottom', 'Left' ], (function(i, part) {
                    expanded['border' + part + 'Color'] = value;
                }));
                return expanded;
            }
        };
        colors = jQuery.Color.names = {
            aqua: '#00ffff',
            black: '#000000',
            blue: '#0000ff',
            fuchsia: '#ff00ff',
            gray: '#808080',
            green: '#008000',
            lime: '#00ff00',
            maroon: '#800000',
            navy: '#000080',
            olive: '#808000',
            purple: '#800080',
            red: '#ff0000',
            silver: '#c0c0c0',
            teal: '#008080',
            white: '#ffffff',
            yellow: '#ffff00',
            transparent: [ null, null, null, 0 ],
            _default: '#ffffff'
        };
    })(jQuery);
    (function() {
        var classAnimationActions = [ 'add', 'remove', 'toggle' ], shorthandStyles = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        $.each([ 'borderLeftStyle', 'borderRightStyle', 'borderBottomStyle', 'borderTopStyle' ], (function(_, prop) {
            $.fx.step[prop] = function(fx) {
                if (fx.end !== 'none' && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
                    jQuery.style(fx.elem, prop, fx.end);
                    fx.setAttr = true;
                }
            };
        }));
        function getElementStyles(elem) {
            var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle, styles = {};
            if (style && style.length && style[0] && style[style[0]]) {
                len = style.length;
                while (len--) {
                    key = style[len];
                    if (typeof style[key] === 'string') {
                        styles[$.camelCase(key)] = style[key];
                    }
                }
            } else {
                for (key in style) {
                    if (typeof style[key] === 'string') {
                        styles[key] = style[key];
                    }
                }
            }
            return styles;
        }
        function styleDifference(oldStyle, newStyle) {
            var diff = {}, name, value;
            for (name in newStyle) {
                value = newStyle[name];
                if (oldStyle[name] !== value) {
                    if (!shorthandStyles[name]) {
                        if ($.fx.step[name] || !isNaN(parseFloat(value))) {
                            diff[name] = value;
                        }
                    }
                }
            }
            return diff;
        }
        if (!$.fn.addBack) {
            $.fn.addBack = function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
            };
        }
        $.effects.animateClass = function(value, duration, easing, callback) {
            var o = $.speed(duration, easing, callback);
            return this.queue((function() {
                var animated = $(this), baseClass = animated.attr('class') || '', applyClassChange, allAnimations = o.children ? animated.find('*').addBack() : animated;
                allAnimations = allAnimations.map((function() {
                    var el = $(this);
                    return {
                        el: el,
                        start: getElementStyles(this)
                    };
                }));
                applyClassChange = function() {
                    $.each(classAnimationActions, (function(i, action) {
                        if (value[action]) {
                            animated[action + 'Class'](value[action]);
                        }
                    }));
                };
                applyClassChange();
                allAnimations = allAnimations.map((function() {
                    this.end = getElementStyles(this.el[0]);
                    this.diff = styleDifference(this.start, this.end);
                    return this;
                }));
                animated.attr('class', baseClass);
                allAnimations = allAnimations.map((function() {
                    var styleInfo = this, dfd = $.Deferred(), opts = $.extend({}, o, {
                        queue: false,
                        complete: function() {
                            dfd.resolve(styleInfo);
                        }
                    });
                    this.el.animate(this.diff, opts);
                    return dfd.promise();
                }));
                $.when.apply($, allAnimations.get()).done((function() {
                    applyClassChange();
                    $.each(arguments, (function() {
                        var el = this.el;
                        $.each(this.diff, (function(key) {
                            el.css(key, '');
                        }));
                    }));
                    o.complete.call(animated[0]);
                }));
            }));
        };
        $.fn.extend({
            addClass: function(orig) {
                return function(classNames, speed, easing, callback) {
                    return speed ? $.effects.animateClass.call(this, {
                        add: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments);
                };
            }($.fn.addClass),
            removeClass: function(orig) {
                return function(classNames, speed, easing, callback) {
                    return arguments.length > 1 ? $.effects.animateClass.call(this, {
                        remove: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments);
                };
            }($.fn.removeClass),
            toggleClass: function(orig) {
                return function(classNames, force, speed, easing, callback) {
                    if (typeof force === 'boolean' || force === undefined) {
                        if (!speed) {
                            return orig.apply(this, arguments);
                        } else {
                            return $.effects.animateClass.call(this, force ? {
                                add: classNames
                            } : {
                                remove: classNames
                            }, speed, easing, callback);
                        }
                    } else {
                        return $.effects.animateClass.call(this, {
                            toggle: classNames
                        }, force, speed, easing);
                    }
                };
            }($.fn.toggleClass),
            switchClass: function(remove, add, speed, easing, callback) {
                return $.effects.animateClass.call(this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback);
            }
        });
    })();
    (function() {
        if ($.expr && $.expr.filters && $.expr.filters.animated) {
            $.expr.filters.animated = function(orig) {
                return function(elem) {
                    return !!$(elem).data(dataSpaceAnimated) || orig(elem);
                };
            }($.expr.filters.animated);
        }
        if ($.uiBackCompat !== false) {
            $.extend($.effects, {
                save: function(element, set) {
                    var i = 0, length = set.length;
                    for (;i < length; i++) {
                        if (set[i] !== null) {
                            element.data(dataSpace + set[i], element[0].style[set[i]]);
                        }
                    }
                },
                restore: function(element, set) {
                    var val, i = 0, length = set.length;
                    for (;i < length; i++) {
                        if (set[i] !== null) {
                            val = element.data(dataSpace + set[i]);
                            element.css(set[i], val);
                        }
                    }
                },
                setMode: function(el, mode) {
                    if (mode === 'toggle') {
                        mode = el.is(':hidden') ? 'show' : 'hide';
                    }
                    return mode;
                },
                createWrapper: function(element) {
                    if (element.parent().is('.ui-effects-wrapper')) {
                        return element.parent();
                    }
                    var props = {
                        width: element.outerWidth(true),
                        height: element.outerHeight(true),
                        float: element.css('float')
                    }, wrapper = $('<div></div>').addClass('ui-effects-wrapper').css({
                        fontSize: '100%',
                        background: 'transparent',
                        border: 'none',
                        margin: 0,
                        padding: 0
                    }), size = {
                        width: element.width(),
                        height: element.height()
                    }, active = document.activeElement;
                    try {
                        active.id;
                    } catch (e) {
                        active = document.body;
                    }
                    element.wrap(wrapper);
                    if (element[0] === active || $.contains(element[0], active)) {
                        $(active).trigger('focus');
                    }
                    wrapper = element.parent();
                    if (element.css('position') === 'static') {
                        wrapper.css({
                            position: 'relative'
                        });
                        element.css({
                            position: 'relative'
                        });
                    } else {
                        $.extend(props, {
                            position: element.css('position'),
                            zIndex: element.css('z-index')
                        });
                        $.each([ 'top', 'left', 'bottom', 'right' ], (function(i, pos) {
                            props[pos] = element.css(pos);
                            if (isNaN(parseInt(props[pos], 10))) {
                                props[pos] = 'auto';
                            }
                        }));
                        element.css({
                            position: 'relative',
                            top: 0,
                            left: 0,
                            right: 'auto',
                            bottom: 'auto'
                        });
                    }
                    element.css(size);
                    return wrapper.css(props).show();
                },
                removeWrapper: function(element) {
                    var active = document.activeElement;
                    if (element.parent().is('.ui-effects-wrapper')) {
                        element.parent().replaceWith(element);
                        if (element[0] === active || $.contains(element[0], active)) {
                            $(active).trigger('focus');
                        }
                    }
                    return element;
                }
            });
        }
        $.extend($.effects, {
            version: '1.12.1',
            define: function(name, mode, effect) {
                if (!effect) {
                    effect = mode;
                    mode = 'effect';
                }
                $.effects.effect[name] = effect;
                $.effects.effect[name].mode = mode;
                return effect;
            },
            scaledDimensions: function(element, percent, direction) {
                if (percent === 0) {
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                }
                var x = direction !== 'horizontal' ? (percent || 100) / 100 : 1, y = direction !== 'vertical' ? (percent || 100) / 100 : 1;
                return {
                    height: element.height() * y,
                    width: element.width() * x,
                    outerHeight: element.outerHeight() * y,
                    outerWidth: element.outerWidth() * x
                };
            },
            clipToBox: function(animation) {
                return {
                    width: animation.clip.right - animation.clip.left,
                    height: animation.clip.bottom - animation.clip.top,
                    left: animation.clip.left,
                    top: animation.clip.top
                };
            },
            unshift: function(element, queueLength, count) {
                var queue = element.queue();
                if (queueLength > 1) {
                    queue.splice.apply(queue, [ 1, 0 ].concat(queue.splice(queueLength, count)));
                }
                element.dequeue();
            },
            saveStyle: function(element) {
                element.data(dataSpaceStyle, element[0].style.cssText);
            },
            restoreStyle: function(element) {
                element[0].style.cssText = element.data(dataSpaceStyle) || '';
                element.removeData(dataSpaceStyle);
            },
            mode: function(element, mode) {
                var hidden = element.is(':hidden');
                if (mode === 'toggle') {
                    mode = hidden ? 'show' : 'hide';
                }
                if (hidden ? mode === 'hide' : mode === 'show') {
                    mode = 'none';
                }
                return mode;
            },
            getBaseline: function(origin, original) {
                var y, x;
                switch (origin[0]) {
                  case 'top':
                    y = 0;
                    break;

                  case 'middle':
                    y = .5;
                    break;

                  case 'bottom':
                    y = 1;
                    break;

                  default:
                    y = origin[0] / original.height;
                }
                switch (origin[1]) {
                  case 'left':
                    x = 0;
                    break;

                  case 'center':
                    x = .5;
                    break;

                  case 'right':
                    x = 1;
                    break;

                  default:
                    x = origin[1] / original.width;
                }
                return {
                    x: x,
                    y: y
                };
            },
            createPlaceholder: function(element) {
                var placeholder, cssPosition = element.css('position'), position = element.position();
                element.css({
                    marginTop: element.css('marginTop'),
                    marginBottom: element.css('marginBottom'),
                    marginLeft: element.css('marginLeft'),
                    marginRight: element.css('marginRight')
                }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());
                if (/^(static|relative)/.test(cssPosition)) {
                    cssPosition = 'absolute';
                    placeholder = $('<' + element[0].nodeName + '>').insertAfter(element).css({
                        display: /^(inline|ruby)/.test(element.css('display')) ? 'inline-block' : 'block',
                        visibility: 'hidden',
                        marginTop: element.css('marginTop'),
                        marginBottom: element.css('marginBottom'),
                        marginLeft: element.css('marginLeft'),
                        marginRight: element.css('marginRight'),
                        float: element.css('float')
                    }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass('ui-effects-placeholder');
                    element.data(dataSpace + 'placeholder', placeholder);
                }
                element.css({
                    position: cssPosition,
                    left: position.left,
                    top: position.top
                });
                return placeholder;
            },
            removePlaceholder: function(element) {
                var dataKey = dataSpace + 'placeholder', placeholder = element.data(dataKey);
                if (placeholder) {
                    placeholder.remove();
                    element.removeData(dataKey);
                }
            },
            cleanUp: function(element) {
                $.effects.restoreStyle(element);
                $.effects.removePlaceholder(element);
            },
            setTransition: function(element, list, factor, value) {
                value = value || {};
                $.each(list, (function(i, x) {
                    var unit = element.cssUnit(x);
                    if (unit[0] > 0) {
                        value[x] = unit[0] * factor + unit[1];
                    }
                }));
                return value;
            }
        });
        function _normalizeArguments(effect, options, speed, callback) {
            if ($.isPlainObject(effect)) {
                options = effect;
                effect = effect.effect;
            }
            effect = {
                effect: effect
            };
            if (options == null) {
                options = {};
            }
            if ($.isFunction(options)) {
                callback = options;
                speed = null;
                options = {};
            }
            if (typeof options === 'number' || $.fx.speeds[options]) {
                callback = speed;
                speed = options;
                options = {};
            }
            if ($.isFunction(speed)) {
                callback = speed;
                speed = null;
            }
            if (options) {
                $.extend(effect, options);
            }
            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 : typeof speed === 'number' ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
            effect.complete = callback || options.complete;
            return effect;
        }
        function standardAnimationOption(option) {
            if (!option || typeof option === 'number' || $.fx.speeds[option]) {
                return true;
            }
            if (typeof option === 'string' && !$.effects.effect[option]) {
                return true;
            }
            if ($.isFunction(option)) {
                return true;
            }
            if (typeof option === 'object' && !option.effect) {
                return true;
            }
            return false;
        }
        $.fn.extend({
            effect: function() {
                var args = _normalizeArguments.apply(this, arguments), effectMethod = $.effects.effect[args.effect], defaultMode = effectMethod.mode, queue = args.queue, queueName = queue || 'fx', complete = args.complete, mode = args.mode, modes = [], prefilter = function(next) {
                    var el = $(this), normalizedMode = $.effects.mode(el, mode) || defaultMode;
                    el.data(dataSpaceAnimated, true);
                    modes.push(normalizedMode);
                    if (defaultMode && (normalizedMode === 'show' || normalizedMode === defaultMode && normalizedMode === 'hide')) {
                        el.show();
                    }
                    if (!defaultMode || normalizedMode !== 'none') {
                        $.effects.saveStyle(el);
                    }
                    if ($.isFunction(next)) {
                        next();
                    }
                };
                if ($.fx.off || !effectMethod) {
                    if (mode) {
                        return this[mode](args.duration, complete);
                    } else {
                        return this.each((function() {
                            if (complete) {
                                complete.call(this);
                            }
                        }));
                    }
                }
                function run(next) {
                    var elem = $(this);
                    function cleanup() {
                        elem.removeData(dataSpaceAnimated);
                        $.effects.cleanUp(elem);
                        if (args.mode === 'hide') {
                            elem.hide();
                        }
                        done();
                    }
                    function done() {
                        if ($.isFunction(complete)) {
                            complete.call(elem[0]);
                        }
                        if ($.isFunction(next)) {
                            next();
                        }
                    }
                    args.mode = modes.shift();
                    if ($.uiBackCompat !== false && !defaultMode) {
                        if (elem.is(':hidden') ? mode === 'hide' : mode === 'show') {
                            elem[mode]();
                            done();
                        } else {
                            effectMethod.call(elem[0], args, done);
                        }
                    } else {
                        if (args.mode === 'none') {
                            elem[mode]();
                            done();
                        } else {
                            effectMethod.call(elem[0], args, cleanup);
                        }
                    }
                }
                return queue === false ? this.each(prefilter).each(run) : this.queue(queueName, prefilter).queue(queueName, run);
            },
            show: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = 'show';
                        return this.effect.call(this, args);
                    }
                };
            }($.fn.show),
            hide: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = 'hide';
                        return this.effect.call(this, args);
                    }
                };
            }($.fn.hide),
            toggle: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option) || typeof option === 'boolean') {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = 'toggle';
                        return this.effect.call(this, args);
                    }
                };
            }($.fn.toggle),
            cssUnit: function(key) {
                var style = this.css(key), val = [];
                $.each([ 'em', 'px', '%', 'pt' ], (function(i, unit) {
                    if (style.indexOf(unit) > 0) {
                        val = [ parseFloat(style), unit ];
                    }
                }));
                return val;
            },
            cssClip: function(clipObj) {
                if (clipObj) {
                    return this.css('clip', 'rect(' + clipObj.top + 'px ' + clipObj.right + 'px ' + clipObj.bottom + 'px ' + clipObj.left + 'px)');
                }
                return parseClip(this.css('clip'), this);
            },
            transfer: function(options, done) {
                var element = $(this), target = $(options.to), targetFixed = target.css('position') === 'fixed', body = $('body'), fixTop = targetFixed ? body.scrollTop() : 0, fixLeft = targetFixed ? body.scrollLeft() : 0, endPosition = target.offset(), animation = {
                    top: endPosition.top - fixTop,
                    left: endPosition.left - fixLeft,
                    height: target.innerHeight(),
                    width: target.innerWidth()
                }, startPosition = element.offset(), transfer = $('<div class=\'ui-effects-transfer\'></div>').appendTo('body').addClass(options.className).css({
                    top: startPosition.top - fixTop,
                    left: startPosition.left - fixLeft,
                    height: element.innerHeight(),
                    width: element.innerWidth(),
                    position: targetFixed ? 'fixed' : 'absolute'
                }).animate(animation, options.duration, options.easing, (function() {
                    transfer.remove();
                    if ($.isFunction(done)) {
                        done();
                    }
                }));
            }
        });
        function parseClip(str, element) {
            var outerWidth = element.outerWidth(), outerHeight = element.outerHeight(), clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/, values = clipRegex.exec(str) || [ '', 0, outerWidth, outerHeight, 0 ];
            return {
                top: parseFloat(values[1]) || 0,
                right: values[2] === 'auto' ? outerWidth : parseFloat(values[2]),
                bottom: values[3] === 'auto' ? outerHeight : parseFloat(values[3]),
                left: parseFloat(values[4]) || 0
            };
        }
        $.fx.step.clip = function(fx) {
            if (!fx.clipInit) {
                fx.start = $(fx.elem).cssClip();
                if (typeof fx.end === 'string') {
                    fx.end = parseClip(fx.end, fx.elem);
                }
                fx.clipInit = true;
            }
            $(fx.elem).cssClip({
                top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top,
                right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right,
                bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom,
                left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left
            });
        };
    })();
    (function() {
        var baseEasings = {};
        $.each([ 'Quad', 'Cubic', 'Quart', 'Quint', 'Expo' ], (function(i, name) {
            baseEasings[name] = function(p) {
                return Math.pow(p, i + 2);
            };
        }));
        $.extend(baseEasings, {
            Sine: function(p) {
                return 1 - Math.cos(p * Math.PI / 2);
            },
            Circ: function(p) {
                return 1 - Math.sqrt(1 - p * p);
            },
            Elastic: function(p) {
                return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
            },
            Back: function(p) {
                return p * p * (3 * p - 2);
            },
            Bounce: function(p) {
                var pow2, bounce = 4;
                while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
            }
        });
        $.each(baseEasings, (function(name, easeIn) {
            $.easing['easeIn' + name] = easeIn;
            $.easing['easeOut' + name] = function(p) {
                return 1 - easeIn(1 - p);
            };
            $.easing['easeInOut' + name] = function(p) {
                return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
            };
        }));
    })();
    var effect = $.effects;
    /*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectBlind = $.effects.define('blind', 'hide', (function(options, done) {
        var map = {
            up: [ 'bottom', 'top' ],
            vertical: [ 'bottom', 'top' ],
            down: [ 'top', 'bottom' ],
            left: [ 'right', 'left' ],
            horizontal: [ 'right', 'left' ],
            right: [ 'left', 'right' ]
        }, element = $(this), direction = options.direction || 'up', start = element.cssClip(), animate = {
            clip: $.extend({}, start)
        }, placeholder = $.effects.createPlaceholder(element);
        animate.clip[map[direction][0]] = animate.clip[map[direction][1]];
        if (options.mode === 'show') {
            element.cssClip(animate.clip);
            if (placeholder) {
                placeholder.css($.effects.clipToBox(animate));
            }
            animate.clip = start;
        }
        if (placeholder) {
            placeholder.animate($.effects.clipToBox(animate), options.duration, options.easing);
        }
        element.animate(animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }));
    /*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectBounce = $.effects.define('bounce', (function(options, done) {
        var upAnim, downAnim, refValue, element = $(this), mode = options.mode, hide = mode === 'hide', show = mode === 'show', direction = options.direction || 'up', distance = options.distance, times = options.times || 5, anims = times * 2 + (show || hide ? 1 : 0), speed = options.duration / anims, easing = options.easing, ref = direction === 'up' || direction === 'down' ? 'top' : 'left', motion = direction === 'up' || direction === 'left', i = 0, queuelen = element.queue().length;
        $.effects.createPlaceholder(element);
        refValue = element.css(ref);
        if (!distance) {
            distance = element[ref === 'top' ? 'outerHeight' : 'outerWidth']() / 3;
        }
        if (show) {
            downAnim = {
                opacity: 1
            };
            downAnim[ref] = refValue;
            element.css('opacity', 0).css(ref, motion ? -distance * 2 : distance * 2).animate(downAnim, speed, easing);
        }
        if (hide) {
            distance = distance / Math.pow(2, times - 1);
        }
        downAnim = {};
        downAnim[ref] = refValue;
        for (;i < times; i++) {
            upAnim = {};
            upAnim[ref] = (motion ? '-=' : '+=') + distance;
            element.animate(upAnim, speed, easing).animate(downAnim, speed, easing);
            distance = hide ? distance * 2 : distance / 2;
        }
        if (hide) {
            upAnim = {
                opacity: 0
            };
            upAnim[ref] = (motion ? '-=' : '+=') + distance;
            element.animate(upAnim, speed, easing);
        }
        element.queue(done);
        $.effects.unshift(element, queuelen, anims + 1);
    }));
    /*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectClip = $.effects.define('clip', 'hide', (function(options, done) {
        var start, animate = {}, element = $(this), direction = options.direction || 'vertical', both = direction === 'both', horizontal = both || direction === 'horizontal', vertical = both || direction === 'vertical';
        start = element.cssClip();
        animate.clip = {
            top: vertical ? (start.bottom - start.top) / 2 : start.top,
            right: horizontal ? (start.right - start.left) / 2 : start.right,
            bottom: vertical ? (start.bottom - start.top) / 2 : start.bottom,
            left: horizontal ? (start.right - start.left) / 2 : start.left
        };
        $.effects.createPlaceholder(element);
        if (options.mode === 'show') {
            element.cssClip(animate.clip);
            animate.clip = start;
        }
        element.animate(animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }));
    /*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectDrop = $.effects.define('drop', 'hide', (function(options, done) {
        var distance, element = $(this), mode = options.mode, show = mode === 'show', direction = options.direction || 'left', ref = direction === 'up' || direction === 'down' ? 'top' : 'left', motion = direction === 'up' || direction === 'left' ? '-=' : '+=', oppositeMotion = motion === '+=' ? '-=' : '+=', animation = {
            opacity: 0
        };
        $.effects.createPlaceholder(element);
        distance = options.distance || element[ref === 'top' ? 'outerHeight' : 'outerWidth'](true) / 2;
        animation[ref] = motion + distance;
        if (show) {
            element.css(animation);
            animation[ref] = oppositeMotion + distance;
            animation.opacity = 1;
        }
        element.animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }));
    /*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectExplode = $.effects.define('explode', 'hide', (function(options, done) {
        var i, j, left, top, mx, my, rows = options.pieces ? Math.round(Math.sqrt(options.pieces)) : 3, cells = rows, element = $(this), mode = options.mode, show = mode === 'show', offset = element.show().css('visibility', 'hidden').offset(), width = Math.ceil(element.outerWidth() / cells), height = Math.ceil(element.outerHeight() / rows), pieces = [];
        function childComplete() {
            pieces.push(this);
            if (pieces.length === rows * cells) {
                animComplete();
            }
        }
        for (i = 0; i < rows; i++) {
            top = offset.top + i * height;
            my = i - (rows - 1) / 2;
            for (j = 0; j < cells; j++) {
                left = offset.left + j * width;
                mx = j - (cells - 1) / 2;
                element.clone().appendTo('body').wrap('<div></div>').css({
                    position: 'absolute',
                    visibility: 'visible',
                    left: -j * width,
                    top: -i * height
                }).parent().addClass('ui-effects-explode').css({
                    position: 'absolute',
                    overflow: 'hidden',
                    width: width,
                    height: height,
                    left: left + (show ? mx * width : 0),
                    top: top + (show ? my * height : 0),
                    opacity: show ? 0 : 1
                }).animate({
                    left: left + (show ? 0 : mx * width),
                    top: top + (show ? 0 : my * height),
                    opacity: show ? 1 : 0
                }, options.duration || 500, options.easing, childComplete);
            }
        }
        function animComplete() {
            element.css({
                visibility: 'visible'
            });
            $(pieces).remove();
            done();
        }
    }));
    /*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectFade = $.effects.define('fade', 'toggle', (function(options, done) {
        var show = options.mode === 'show';
        $(this).css('opacity', show ? 0 : 1).animate({
            opacity: show ? 1 : 0
        }, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }));
    /*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectFold = $.effects.define('fold', 'hide', (function(options, done) {
        var element = $(this), mode = options.mode, show = mode === 'show', hide = mode === 'hide', size = options.size || 15, percent = /([0-9]+)%/.exec(size), horizFirst = !!options.horizFirst, ref = horizFirst ? [ 'right', 'bottom' ] : [ 'bottom', 'right' ], duration = options.duration / 2, placeholder = $.effects.createPlaceholder(element), start = element.cssClip(), animation1 = {
            clip: $.extend({}, start)
        }, animation2 = {
            clip: $.extend({}, start)
        }, distance = [ start[ref[0]], start[ref[1]] ], queuelen = element.queue().length;
        if (percent) {
            size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1];
        }
        animation1.clip[ref[0]] = size;
        animation2.clip[ref[0]] = size;
        animation2.clip[ref[1]] = 0;
        if (show) {
            element.cssClip(animation2.clip);
            if (placeholder) {
                placeholder.css($.effects.clipToBox(animation2));
            }
            animation2.clip = start;
        }
        element.queue((function(next) {
            if (placeholder) {
                placeholder.animate($.effects.clipToBox(animation1), duration, options.easing).animate($.effects.clipToBox(animation2), duration, options.easing);
            }
            next();
        })).animate(animation1, duration, options.easing).animate(animation2, duration, options.easing).queue(done);
        $.effects.unshift(element, queuelen, 4);
    }));
    /*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectHighlight = $.effects.define('highlight', 'show', (function(options, done) {
        var element = $(this), animation = {
            backgroundColor: element.css('backgroundColor')
        };
        if (options.mode === 'hide') {
            animation.opacity = 0;
        }
        $.effects.saveStyle(element);
        element.css({
            backgroundImage: 'none',
            backgroundColor: options.color || '#ffff99'
        }).animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }));
    /*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectSize = $.effects.define('size', (function(options, done) {
        var baseline, factor, temp, element = $(this), cProps = [ 'fontSize' ], vProps = [ 'borderTopWidth', 'borderBottomWidth', 'paddingTop', 'paddingBottom' ], hProps = [ 'borderLeftWidth', 'borderRightWidth', 'paddingLeft', 'paddingRight' ], mode = options.mode, restore = mode !== 'effect', scale = options.scale || 'both', origin = options.origin || [ 'middle', 'center' ], position = element.css('position'), pos = element.position(), original = $.effects.scaledDimensions(element), from = options.from || original, to = options.to || $.effects.scaledDimensions(element, 0);
        $.effects.createPlaceholder(element);
        if (mode === 'show') {
            temp = from;
            from = to;
            to = temp;
        }
        factor = {
            from: {
                y: from.height / original.height,
                x: from.width / original.width
            },
            to: {
                y: to.height / original.height,
                x: to.width / original.width
            }
        };
        if (scale === 'box' || scale === 'both') {
            if (factor.from.y !== factor.to.y) {
                from = $.effects.setTransition(element, vProps, factor.from.y, from);
                to = $.effects.setTransition(element, vProps, factor.to.y, to);
            }
            if (factor.from.x !== factor.to.x) {
                from = $.effects.setTransition(element, hProps, factor.from.x, from);
                to = $.effects.setTransition(element, hProps, factor.to.x, to);
            }
        }
        if (scale === 'content' || scale === 'both') {
            if (factor.from.y !== factor.to.y) {
                from = $.effects.setTransition(element, cProps, factor.from.y, from);
                to = $.effects.setTransition(element, cProps, factor.to.y, to);
            }
        }
        if (origin) {
            baseline = $.effects.getBaseline(origin, original);
            from.top = (original.outerHeight - from.outerHeight) * baseline.y + pos.top;
            from.left = (original.outerWidth - from.outerWidth) * baseline.x + pos.left;
            to.top = (original.outerHeight - to.outerHeight) * baseline.y + pos.top;
            to.left = (original.outerWidth - to.outerWidth) * baseline.x + pos.left;
        }
        element.css(from);
        if (scale === 'content' || scale === 'both') {
            vProps = vProps.concat([ 'marginTop', 'marginBottom' ]).concat(cProps);
            hProps = hProps.concat([ 'marginLeft', 'marginRight' ]);
            element.find('*[width]').each((function() {
                var child = $(this), childOriginal = $.effects.scaledDimensions(child), childFrom = {
                    height: childOriginal.height * factor.from.y,
                    width: childOriginal.width * factor.from.x,
                    outerHeight: childOriginal.outerHeight * factor.from.y,
                    outerWidth: childOriginal.outerWidth * factor.from.x
                }, childTo = {
                    height: childOriginal.height * factor.to.y,
                    width: childOriginal.width * factor.to.x,
                    outerHeight: childOriginal.height * factor.to.y,
                    outerWidth: childOriginal.width * factor.to.x
                };
                if (factor.from.y !== factor.to.y) {
                    childFrom = $.effects.setTransition(child, vProps, factor.from.y, childFrom);
                    childTo = $.effects.setTransition(child, vProps, factor.to.y, childTo);
                }
                if (factor.from.x !== factor.to.x) {
                    childFrom = $.effects.setTransition(child, hProps, factor.from.x, childFrom);
                    childTo = $.effects.setTransition(child, hProps, factor.to.x, childTo);
                }
                if (restore) {
                    $.effects.saveStyle(child);
                }
                child.css(childFrom);
                child.animate(childTo, options.duration, options.easing, (function() {
                    if (restore) {
                        $.effects.restoreStyle(child);
                    }
                }));
            }));
        }
        element.animate(to, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: function() {
                var offset = element.offset();
                if (to.opacity === 0) {
                    element.css('opacity', from.opacity);
                }
                if (!restore) {
                    element.css('position', position === 'static' ? 'relative' : position).offset(offset);
                    $.effects.saveStyle(element);
                }
                done();
            }
        });
    }));
    /*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectScale = $.effects.define('scale', (function(options, done) {
        var el = $(this), mode = options.mode, percent = parseInt(options.percent, 10) || (parseInt(options.percent, 10) === 0 ? 0 : mode !== 'effect' ? 0 : 100), newOptions = $.extend(true, {
            from: $.effects.scaledDimensions(el),
            to: $.effects.scaledDimensions(el, percent, options.direction || 'both'),
            origin: options.origin || [ 'middle', 'center' ]
        }, options);
        if (options.fade) {
            newOptions.from.opacity = 1;
            newOptions.to.opacity = 0;
        }
        $.effects.effect.size.call(this, newOptions, done);
    }));
    /*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectPuff = $.effects.define('puff', 'hide', (function(options, done) {
        var newOptions = $.extend(true, {}, options, {
            fade: true,
            percent: parseInt(options.percent, 10) || 150
        });
        $.effects.effect.scale.call(this, newOptions, done);
    }));
    /*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectPulsate = $.effects.define('pulsate', 'show', (function(options, done) {
        var element = $(this), mode = options.mode, show = mode === 'show', hide = mode === 'hide', showhide = show || hide, anims = (options.times || 5) * 2 + (showhide ? 1 : 0), duration = options.duration / anims, animateTo = 0, i = 1, queuelen = element.queue().length;
        if (show || !element.is(':visible')) {
            element.css('opacity', 0).show();
            animateTo = 1;
        }
        for (;i < anims; i++) {
            element.animate({
                opacity: animateTo
            }, duration, options.easing);
            animateTo = 1 - animateTo;
        }
        element.animate({
            opacity: animateTo
        }, duration, options.easing);
        element.queue(done);
        $.effects.unshift(element, queuelen, anims + 1);
    }));
    /*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectShake = $.effects.define('shake', (function(options, done) {
        var i = 1, element = $(this), direction = options.direction || 'left', distance = options.distance || 20, times = options.times || 3, anims = times * 2 + 1, speed = Math.round(options.duration / anims), ref = direction === 'up' || direction === 'down' ? 'top' : 'left', positiveMotion = direction === 'up' || direction === 'left', animation = {}, animation1 = {}, animation2 = {}, queuelen = element.queue().length;
        $.effects.createPlaceholder(element);
        animation[ref] = (positiveMotion ? '-=' : '+=') + distance;
        animation1[ref] = (positiveMotion ? '+=' : '-=') + distance * 2;
        animation2[ref] = (positiveMotion ? '-=' : '+=') + distance * 2;
        element.animate(animation, speed, options.easing);
        for (;i < times; i++) {
            element.animate(animation1, speed, options.easing).animate(animation2, speed, options.easing);
        }
        element.animate(animation1, speed, options.easing).animate(animation, speed / 2, options.easing).queue(done);
        $.effects.unshift(element, queuelen, anims + 1);
    }));
    /*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effectsEffectSlide = $.effects.define('slide', 'show', (function(options, done) {
        var startClip, startRef, element = $(this), map = {
            up: [ 'bottom', 'top' ],
            down: [ 'top', 'bottom' ],
            left: [ 'right', 'left' ],
            right: [ 'left', 'right' ]
        }, mode = options.mode, direction = options.direction || 'left', ref = direction === 'up' || direction === 'down' ? 'top' : 'left', positiveMotion = direction === 'up' || direction === 'left', distance = options.distance || element[ref === 'top' ? 'outerHeight' : 'outerWidth'](true), animation = {};
        $.effects.createPlaceholder(element);
        startClip = element.cssClip();
        startRef = element.position()[ref];
        animation[ref] = (positiveMotion ? -1 : 1) * distance + startRef;
        animation.clip = element.cssClip();
        animation.clip[map[direction][1]] = animation.clip[map[direction][0]];
        if (mode === 'show') {
            element.cssClip(animation.clip);
            element.css(ref, animation[ref]);
            animation.clip = startClip;
            animation[ref] = startRef;
        }
        element.animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    }));
    /*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var effect;
    if ($.uiBackCompat !== false) {
        effect = $.effects.define('transfer', (function(options, done) {
            $(this).transfer(options, done);
        }));
    }
    var effectsEffectTransfer = effect;
    /*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.ui.focusable = function(element, hasTabindex) {
        var map, mapName, img, focusableIfVisible, fieldset, nodeName = element.nodeName.toLowerCase();
        if ('area' === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== 'map') {
                return false;
            }
            img = $('img[usemap=\'#' + mapName + '\']');
            return img.length > 0 && img.is(':visible');
        }
        if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
            focusableIfVisible = !element.disabled;
            if (focusableIfVisible) {
                fieldset = $(element).closest('fieldset')[0];
                if (fieldset) {
                    focusableIfVisible = !fieldset.disabled;
                }
            }
        } else if ('a' === nodeName) {
            focusableIfVisible = element.href || hasTabindex;
        } else {
            focusableIfVisible = hasTabindex;
        }
        return focusableIfVisible && $(element).is(':visible') && visible($(element));
    };
    function visible(element) {
        var visibility = element.css('visibility');
        while (visibility === 'inherit') {
            element = element.parent();
            visibility = element.css('visibility');
        }
        return visibility !== 'hidden';
    }
    $.extend($.expr[':'], {
        focusable: function(element) {
            return $.ui.focusable(element, $.attr(element, 'tabindex') != null);
        }
    });
    var focusable = $.ui.focusable;
    var form = $.fn.form = function() {
        return typeof this[0].form === 'string' ? this.closest('form') : $(this[0].form);
    };
    /*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var formResetMixin = $.ui.formResetMixin = {
        _formResetHandler: function() {
            var form = $(this);
            setTimeout((function() {
                var instances = form.data('ui-form-reset-instances');
                $.each(instances, (function() {
                    this.refresh();
                }));
            }));
        },
        _bindFormResetHandler: function() {
            this.form = this.element.form();
            if (!this.form.length) {
                return;
            }
            var instances = this.form.data('ui-form-reset-instances') || [];
            if (!instances.length) {
                this.form.on('reset.ui-form-reset', this._formResetHandler);
            }
            instances.push(this);
            this.form.data('ui-form-reset-instances', instances);
        },
        _unbindFormResetHandler: function() {
            if (!this.form.length) {
                return;
            }
            var instances = this.form.data('ui-form-reset-instances');
            instances.splice($.inArray(this, instances), 1);
            if (instances.length) {
                this.form.data('ui-form-reset-instances', instances);
            } else {
                this.form.removeData('ui-form-reset-instances').off('reset.ui-form-reset');
            }
        }
    };
    /*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */    if ($.fn.jquery.substring(0, 3) === '1.7') {
        $.each([ 'Width', 'Height' ], (function(i, name) {
            var side = name === 'Width' ? [ 'Left', 'Right' ] : [ 'Top', 'Bottom' ], type = name.toLowerCase(), orig = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };
            function reduce(elem, size, border, margin) {
                $.each(side, (function() {
                    size -= parseFloat($.css(elem, 'padding' + this)) || 0;
                    if (border) {
                        size -= parseFloat($.css(elem, 'border' + this + 'Width')) || 0;
                    }
                    if (margin) {
                        size -= parseFloat($.css(elem, 'margin' + this)) || 0;
                    }
                }));
                return size;
            }
            $.fn['inner' + name] = function(size) {
                if (size === undefined) {
                    return orig['inner' + name].call(this);
                }
                return this.each((function() {
                    $(this).css(type, reduce(this, size) + 'px');
                }));
            };
            $.fn['outer' + name] = function(size, margin) {
                if (typeof size !== 'number') {
                    return orig['outer' + name].call(this, size);
                }
                return this.each((function() {
                    $(this).css(type, reduce(this, size, true, margin) + 'px');
                }));
            };
        }));
        $.fn.addBack = function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        };
    }
    /*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var keycode = $.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    var escapeSelector = $.ui.escapeSelector = function() {
        var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(selector) {
            return selector.replace(selectorEscape, '\\$1');
        };
    }();
    /*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var labels = $.fn.labels = function() {
        var ancestor, selector, id, labels, ancestors;
        if (this[0].labels && this[0].labels.length) {
            return this.pushStack(this[0].labels);
        }
        labels = this.eq(0).parents('label');
        id = this.attr('id');
        if (id) {
            ancestor = this.eq(0).parents().last();
            ancestors = ancestor.add(ancestor.length ? ancestor.siblings() : this.siblings());
            selector = 'label[for=\'' + $.ui.escapeSelector(id) + '\']';
            labels = labels.add(ancestors.find(selector).addBack(selector));
        }
        return this.pushStack(labels);
    };
    /*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var scrollParent = $.fn.scrollParent = function(includeHidden) {
        var position = this.css('position'), excludeStaticParent = position === 'absolute', overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/, scrollParent = this.parents().filter((function() {
            var parent = $(this);
            if (excludeStaticParent && parent.css('position') === 'static') {
                return false;
            }
            return overflowRegex.test(parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x'));
        })).eq(0);
        return position === 'fixed' || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
    };
    /*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var tabbable = $.extend($.expr[':'], {
        tabbable: function(element) {
            var tabIndex = $.attr(element, 'tabindex'), hasTabindex = tabIndex != null;
            return (!hasTabindex || tabIndex >= 0) && $.ui.focusable(element, hasTabindex);
        }
    });
    /*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var uniqueId = $.fn.extend({
        uniqueId: function() {
            var uuid = 0;
            return function() {
                return this.each((function() {
                    if (!this.id) {
                        this.id = 'ui-id-' + ++uuid;
                    }
                }));
            };
        }(),
        removeUniqueId: function() {
            return this.each((function() {
                if (/^ui-id-\d+$/.test(this.id)) {
                    $(this).removeAttr('id');
                }
            }));
        }
    });
    /*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetsAccordion = $.widget('ui.accordion', {
        version: '1.12.1',
        options: {
            active: 0,
            animate: {},
            classes: {
                'ui-accordion-header': 'ui-corner-top',
                'ui-accordion-header-collapsed': 'ui-corner-all',
                'ui-accordion-content': 'ui-corner-bottom'
            },
            collapsible: false,
            event: 'click',
            header: '> li > :first-child, > :not(li):even',
            heightStyle: 'auto',
            icons: {
                activeHeader: 'ui-icon-triangle-1-s',
                header: 'ui-icon-triangle-1-e'
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: 'hide',
            borderBottomWidth: 'hide',
            paddingTop: 'hide',
            paddingBottom: 'hide',
            height: 'hide'
        },
        showProps: {
            borderTopWidth: 'show',
            borderBottomWidth: 'show',
            paddingTop: 'show',
            paddingBottom: 'show',
            height: 'show'
        },
        _create: function() {
            var options = this.options;
            this.prevShow = this.prevHide = $();
            this._addClass('ui-accordion', 'ui-widget ui-helper-reset');
            this.element.attr('role', 'tablist');
            if (!options.collapsible && (options.active === false || options.active == null)) {
                options.active = 0;
            }
            this._processPanels();
            if (options.active < 0) {
                options.active += this.headers.length;
            }
            this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },
        _createIcons: function() {
            var icon, children, icons = this.options.icons;
            if (icons) {
                icon = $('<span>');
                this._addClass(icon, 'ui-accordion-header-icon', 'ui-icon ' + icons.header);
                icon.prependTo(this.headers);
                children = this.active.children('.ui-accordion-header-icon');
                this._removeClass(children, icons.header)._addClass(children, null, icons.activeHeader)._addClass(this.headers, 'ui-accordion-icons');
            }
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, 'ui-accordion-icons');
            this.headers.children('.ui-accordion-header-icon').remove();
        },
        _destroy: function() {
            var contents;
            this.element.removeAttr('role');
            this.headers.removeAttr('role aria-expanded aria-selected aria-controls tabIndex').removeUniqueId();
            this._destroyIcons();
            contents = this.headers.next().css('display', '').removeAttr('role aria-hidden aria-labelledby').removeUniqueId();
            if (this.options.heightStyle !== 'content') {
                contents.css('height', '');
            }
        },
        _setOption: function(key, value) {
            if (key === 'active') {
                this._activate(value);
                return;
            }
            if (key === 'event') {
                if (this.options.event) {
                    this._off(this.headers, this.options.event);
                }
                this._setupEvents(value);
            }
            this._super(key, value);
            if (key === 'collapsible' && !value && this.options.active === false) {
                this._activate(0);
            }
            if (key === 'icons') {
                this._destroyIcons();
                if (value) {
                    this._createIcons();
                }
            }
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.element.attr('aria-disabled', value);
            this._toggleClass(null, 'ui-state-disabled', !!value);
            this._toggleClass(this.headers.add(this.headers.next()), null, 'ui-state-disabled', !!value);
        },
        _keydown: function(event) {
            if (event.altKey || event.ctrlKey) {
                return;
            }
            var keyCode = $.ui.keyCode, length = this.headers.length, currentIndex = this.headers.index(event.target), toFocus = false;
            switch (event.keyCode) {
              case keyCode.RIGHT:
              case keyCode.DOWN:
                toFocus = this.headers[(currentIndex + 1) % length];
                break;

              case keyCode.LEFT:
              case keyCode.UP:
                toFocus = this.headers[(currentIndex - 1 + length) % length];
                break;

              case keyCode.SPACE:
              case keyCode.ENTER:
                this._eventHandler(event);
                break;

              case keyCode.HOME:
                toFocus = this.headers[0];
                break;

              case keyCode.END:
                toFocus = this.headers[length - 1];
                break;
            }
            if (toFocus) {
                $(event.target).attr('tabIndex', -1);
                $(toFocus).attr('tabIndex', 0);
                $(toFocus).trigger('focus');
                event.preventDefault();
            }
        },
        _panelKeyDown: function(event) {
            if (event.keyCode === $.ui.keyCode.UP && event.ctrlKey) {
                $(event.currentTarget).prev().trigger('focus');
            }
        },
        refresh: function() {
            var options = this.options;
            this._processPanels();
            if (options.active === false && options.collapsible === true || !this.headers.length) {
                options.active = false;
                this.active = $();
            } else if (options.active === false) {
                this._activate(0);
            } else if (this.active.length && !$.contains(this.element[0], this.active[0])) {
                if (this.headers.length === this.headers.find('.ui-state-disabled').length) {
                    options.active = false;
                    this.active = $();
                } else {
                    this._activate(Math.max(0, options.active - 1));
                }
            } else {
                options.active = this.headers.index(this.active);
            }
            this._destroyIcons();
            this._refresh();
        },
        _processPanels: function() {
            var prevHeaders = this.headers, prevPanels = this.panels;
            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, 'ui-accordion-header ui-accordion-header-collapsed', 'ui-state-default');
            this.panels = this.headers.next().filter(':not(.ui-accordion-content-active)').hide();
            this._addClass(this.panels, 'ui-accordion-content', 'ui-helper-reset ui-widget-content');
            if (prevPanels) {
                this._off(prevHeaders.not(this.headers));
                this._off(prevPanels.not(this.panels));
            }
        },
        _refresh: function() {
            var maxHeight, options = this.options, heightStyle = options.heightStyle, parent = this.element.parent();
            this.active = this._findActive(options.active);
            this._addClass(this.active, 'ui-accordion-header-active', 'ui-state-active')._removeClass(this.active, 'ui-accordion-header-collapsed');
            this._addClass(this.active.next(), 'ui-accordion-content-active');
            this.active.next().show();
            this.headers.attr('role', 'tab').each((function() {
                var header = $(this), headerId = header.uniqueId().attr('id'), panel = header.next(), panelId = panel.uniqueId().attr('id');
                header.attr('aria-controls', panelId);
                panel.attr('aria-labelledby', headerId);
            })).next().attr('role', 'tabpanel');
            this.headers.not(this.active).attr({
                'aria-selected': 'false',
                'aria-expanded': 'false',
                tabIndex: -1
            }).next().attr({
                'aria-hidden': 'true'
            }).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr('tabIndex', 0);
            } else {
                this.active.attr({
                    'aria-selected': 'true',
                    'aria-expanded': 'true',
                    tabIndex: 0
                }).next().attr({
                    'aria-hidden': 'false'
                });
            }
            this._createIcons();
            this._setupEvents(options.event);
            if (heightStyle === 'fill') {
                maxHeight = parent.height();
                this.element.siblings(':visible').each((function() {
                    var elem = $(this), position = elem.css('position');
                    if (position === 'absolute' || position === 'fixed') {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                }));
                this.headers.each((function() {
                    maxHeight -= $(this).outerHeight(true);
                }));
                this.headers.next().each((function() {
                    $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
                })).css('overflow', 'auto');
            } else if (heightStyle === 'auto') {
                maxHeight = 0;
                this.headers.next().each((function() {
                    var isVisible = $(this).is(':visible');
                    if (!isVisible) {
                        $(this).show();
                    }
                    maxHeight = Math.max(maxHeight, $(this).css('height', '').height());
                    if (!isVisible) {
                        $(this).hide();
                    }
                })).height(maxHeight);
            }
        },
        _activate: function(index) {
            var active = this._findActive(index)[0];
            if (active === this.active[0]) {
                return;
            }
            active = active || this.active[0];
            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },
        _findActive: function(selector) {
            return typeof selector === 'number' ? this.headers.eq(selector) : $();
        },
        _setupEvents: function(event) {
            var events = {
                keydown: '_keydown'
            };
            if (event) {
                $.each(event.split(' '), (function(index, eventName) {
                    events[eventName] = '_eventHandler';
                }));
            }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, events);
            this._on(this.headers.next(), {
                keydown: '_panelKeyDown'
            });
            this._hoverable(this.headers);
            this._focusable(this.headers);
        },
        _eventHandler: function(event) {
            var activeChildren, clickedChildren, options = this.options, active = this.active, clicked = $(event.currentTarget), clickedIsActive = clicked[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : clicked.next(), toHide = active.next(), eventData = {
                oldHeader: active,
                oldPanel: toHide,
                newHeader: collapsing ? $() : clicked,
                newPanel: toShow
            };
            event.preventDefault();
            if (clickedIsActive && !options.collapsible || this._trigger('beforeActivate', event, eventData) === false) {
                return;
            }
            options.active = collapsing ? false : this.headers.index(clicked);
            this.active = clickedIsActive ? $() : clicked;
            this._toggle(eventData);
            this._removeClass(active, 'ui-accordion-header-active', 'ui-state-active');
            if (options.icons) {
                activeChildren = active.children('.ui-accordion-header-icon');
                this._removeClass(activeChildren, null, options.icons.activeHeader)._addClass(activeChildren, null, options.icons.header);
            }
            if (!clickedIsActive) {
                this._removeClass(clicked, 'ui-accordion-header-collapsed')._addClass(clicked, 'ui-accordion-header-active', 'ui-state-active');
                if (options.icons) {
                    clickedChildren = clicked.children('.ui-accordion-header-icon');
                    this._removeClass(clickedChildren, null, options.icons.header)._addClass(clickedChildren, null, options.icons.activeHeader);
                }
                this._addClass(clicked.next(), 'ui-accordion-content-active');
            }
        },
        _toggle: function(data) {
            var toShow = data.newPanel, toHide = this.prevShow.length ? this.prevShow : data.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = toShow;
            this.prevHide = toHide;
            if (this.options.animate) {
                this._animate(toShow, toHide, data);
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete(data);
            }
            toHide.attr({
                'aria-hidden': 'true'
            });
            toHide.prev().attr({
                'aria-selected': 'false',
                'aria-expanded': 'false'
            });
            if (toShow.length && toHide.length) {
                toHide.prev().attr({
                    tabIndex: -1,
                    'aria-expanded': 'false'
                });
            } else if (toShow.length) {
                this.headers.filter((function() {
                    return parseInt($(this).attr('tabIndex'), 10) === 0;
                })).attr('tabIndex', -1);
            }
            toShow.attr('aria-hidden', 'false').prev().attr({
                'aria-selected': 'true',
                'aria-expanded': 'true',
                tabIndex: 0
            });
        },
        _animate: function(toShow, toHide, data) {
            var total, easing, duration, that = this, adjust = 0, boxSizing = toShow.css('box-sizing'), down = toShow.length && (!toHide.length || toShow.index() < toHide.index()), animate = this.options.animate || {}, options = down && animate.down || animate, complete = function() {
                that._toggleComplete(data);
            };
            if (typeof options === 'number') {
                duration = options;
            }
            if (typeof options === 'string') {
                easing = options;
            }
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;
            if (!toHide.length) {
                return toShow.animate(this.showProps, duration, easing, complete);
            }
            if (!toShow.length) {
                return toHide.animate(this.hideProps, duration, easing, complete);
            }
            total = toShow.show().outerHeight();
            toHide.animate(this.hideProps, {
                duration: duration,
                easing: easing,
                step: function(now, fx) {
                    fx.now = Math.round(now);
                }
            });
            toShow.hide().animate(this.showProps, {
                duration: duration,
                easing: easing,
                complete: complete,
                step: function(now, fx) {
                    fx.now = Math.round(now);
                    if (fx.prop !== 'height') {
                        if (boxSizing === 'content-box') {
                            adjust += fx.now;
                        }
                    } else if (that.options.heightStyle !== 'content') {
                        fx.now = Math.round(total - toHide.outerHeight() - adjust);
                        adjust = 0;
                    }
                }
            });
        },
        _toggleComplete: function(data) {
            var toHide = data.oldPanel, prev = toHide.prev();
            this._removeClass(toHide, 'ui-accordion-content-active');
            this._removeClass(prev, 'ui-accordion-header-active')._addClass(prev, 'ui-accordion-header-collapsed');
            if (toHide.length) {
                toHide.parent()[0].className = toHide.parent()[0].className;
            }
            this._trigger('activate', null, data);
        }
    });
    var safeActiveElement = $.ui.safeActiveElement = function(document) {
        var activeElement;
        try {
            activeElement = document.activeElement;
        } catch (error) {
            activeElement = document.body;
        }
        if (!activeElement) {
            activeElement = document.body;
        }
        if (!activeElement.nodeName) {
            activeElement = document.body;
        }
        return activeElement;
    };
    /*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetsMenu = $.widget('ui.menu', {
        version: '1.12.1',
        defaultElement: '<ul>',
        delay: 300,
        options: {
            icons: {
                submenu: 'ui-icon-caret-1-e'
            },
            items: '> *',
            menus: 'ul',
            position: {
                my: 'left top',
                at: 'right top'
            },
            role: 'menu',
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass('ui-menu', 'ui-widget ui-widget-content');
            this._on({
                'mousedown .ui-menu-item': function(event) {
                    event.preventDefault();
                },
                'click .ui-menu-item': function(event) {
                    var target = $(event.target);
                    var active = $($.ui.safeActiveElement(this.document[0]));
                    if (!this.mouseHandled && target.not('.ui-state-disabled').length) {
                        this.select(event);
                        if (!event.isPropagationStopped()) {
                            this.mouseHandled = true;
                        }
                        if (target.has('.ui-menu').length) {
                            this.expand(event);
                        } else if (!this.element.is(':focus') && active.closest('.ui-menu').length) {
                            this.element.trigger('focus', [ true ]);
                            if (this.active && this.active.parents('.ui-menu').length === 1) {
                                clearTimeout(this.timer);
                            }
                        }
                    }
                },
                'mouseenter .ui-menu-item': function(event) {
                    if (this.previousFilter) {
                        return;
                    }
                    var actualTarget = $(event.target).closest('.ui-menu-item'), target = $(event.currentTarget);
                    if (actualTarget[0] !== target[0]) {
                        return;
                    }
                    this._removeClass(target.siblings().children('.ui-state-active'), null, 'ui-state-active');
                    this.focus(event, target);
                },
                mouseleave: 'collapseAll',
                'mouseleave .ui-menu': 'collapseAll',
                focus: function(event, keepActiveItem) {
                    var item = this.active || this.element.find(this.options.items).eq(0);
                    if (!keepActiveItem) {
                        this.focus(event, item);
                    }
                },
                blur: function(event) {
                    this._delay((function() {
                        var notContained = !$.contains(this.element[0], $.ui.safeActiveElement(this.document[0]));
                        if (notContained) {
                            this.collapseAll(event);
                        }
                    }));
                },
                keydown: '_keydown'
            });
            this.refresh();
            this._on(this.document, {
                click: function(event) {
                    if (this._closeOnDocumentClick(event)) {
                        this.collapseAll(event);
                    }
                    this.mouseHandled = false;
                }
            });
        },
        _destroy: function() {
            var items = this.element.find('.ui-menu-item').removeAttr('role aria-disabled'), submenus = items.children('.ui-menu-item-wrapper').removeUniqueId().removeAttr('tabIndex role aria-haspopup');
            this.element.removeAttr('aria-activedescendant').find('.ui-menu').addBack().removeAttr('role aria-labelledby aria-expanded aria-hidden aria-disabled ' + 'tabIndex').removeUniqueId().show();
            submenus.children().each((function() {
                var elem = $(this);
                if (elem.data('ui-menu-submenu-caret')) {
                    elem.remove();
                }
            }));
        },
        _keydown: function(event) {
            var match, prev, character, skip, preventDefault = true;
            switch (event.keyCode) {
              case $.ui.keyCode.PAGE_UP:
                this.previousPage(event);
                break;

              case $.ui.keyCode.PAGE_DOWN:
                this.nextPage(event);
                break;

              case $.ui.keyCode.HOME:
                this._move('first', 'first', event);
                break;

              case $.ui.keyCode.END:
                this._move('last', 'last', event);
                break;

              case $.ui.keyCode.UP:
                this.previous(event);
                break;

              case $.ui.keyCode.DOWN:
                this.next(event);
                break;

              case $.ui.keyCode.LEFT:
                this.collapse(event);
                break;

              case $.ui.keyCode.RIGHT:
                if (this.active && !this.active.is('.ui-state-disabled')) {
                    this.expand(event);
                }
                break;

              case $.ui.keyCode.ENTER:
              case $.ui.keyCode.SPACE:
                this._activate(event);
                break;

              case $.ui.keyCode.ESCAPE:
                this.collapse(event);
                break;

              default:
                preventDefault = false;
                prev = this.previousFilter || '';
                skip = false;
                character = event.keyCode >= 96 && event.keyCode <= 105 ? (event.keyCode - 96).toString() : String.fromCharCode(event.keyCode);
                clearTimeout(this.filterTimer);
                if (character === prev) {
                    skip = true;
                } else {
                    character = prev + character;
                }
                match = this._filterMenuItems(character);
                match = skip && match.index(this.active.next()) !== -1 ? this.active.nextAll('.ui-menu-item') : match;
                if (!match.length) {
                    character = String.fromCharCode(event.keyCode);
                    match = this._filterMenuItems(character);
                }
                if (match.length) {
                    this.focus(event, match);
                    this.previousFilter = character;
                    this.filterTimer = this._delay((function() {
                        delete this.previousFilter;
                    }), 1e3);
                } else {
                    delete this.previousFilter;
                }
            }
            if (preventDefault) {
                event.preventDefault();
            }
        },
        _activate: function(event) {
            if (this.active && !this.active.is('.ui-state-disabled')) {
                if (this.active.children('[aria-haspopup=\'true\']').length) {
                    this.expand(event);
                } else {
                    this.select(event);
                }
            }
        },
        refresh: function() {
            var menus, items, newSubmenus, newItems, newWrappers, that = this, icon = this.options.icons.submenu, submenus = this.element.find(this.options.menus);
            this._toggleClass('ui-menu-icons', null, !!this.element.find('.ui-icon').length);
            newSubmenus = submenus.filter(':not(.ui-menu)').hide().attr({
                role: this.options.role,
                'aria-hidden': 'true',
                'aria-expanded': 'false'
            }).each((function() {
                var menu = $(this), item = menu.prev(), submenuCaret = $('<span>').data('ui-menu-submenu-caret', true);
                that._addClass(submenuCaret, 'ui-menu-icon', 'ui-icon ' + icon);
                item.attr('aria-haspopup', 'true').prepend(submenuCaret);
                menu.attr('aria-labelledby', item.attr('id'));
            }));
            this._addClass(newSubmenus, 'ui-menu', 'ui-widget ui-widget-content ui-front');
            menus = submenus.add(this.element);
            items = menus.find(this.options.items);
            items.not('.ui-menu-item').each((function() {
                var item = $(this);
                if (that._isDivider(item)) {
                    that._addClass(item, 'ui-menu-divider', 'ui-widget-content');
                }
            }));
            newItems = items.not('.ui-menu-item, .ui-menu-divider');
            newWrappers = newItems.children().not('.ui-menu').uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(newItems, 'ui-menu-item')._addClass(newWrappers, 'ui-menu-item-wrapper');
            items.filter('.ui-state-disabled').attr('aria-disabled', 'true');
            if (this.active && !$.contains(this.element[0], this.active[0])) {
                this.blur();
            }
        },
        _itemRole: function() {
            return {
                menu: 'menuitem',
                listbox: 'option'
            }[this.options.role];
        },
        _setOption: function(key, value) {
            if (key === 'icons') {
                var icons = this.element.find('.ui-menu-icon');
                this._removeClass(icons, null, this.options.icons.submenu)._addClass(icons, null, value.submenu);
            }
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.element.attr('aria-disabled', String(value));
            this._toggleClass(null, 'ui-state-disabled', !!value);
        },
        focus: function(event, item) {
            var nested, focused, activeParent;
            this.blur(event, event && event.type === 'focus');
            this._scrollIntoView(item);
            this.active = item.first();
            focused = this.active.children('.ui-menu-item-wrapper');
            this._addClass(focused, null, 'ui-state-active');
            if (this.options.role) {
                this.element.attr('aria-activedescendant', focused.attr('id'));
            }
            activeParent = this.active.parent().closest('.ui-menu-item').children('.ui-menu-item-wrapper');
            this._addClass(activeParent, null, 'ui-state-active');
            if (event && event.type === 'keydown') {
                this._close();
            } else {
                this.timer = this._delay((function() {
                    this._close();
                }), this.delay);
            }
            nested = item.children('.ui-menu');
            if (nested.length && event && /^mouse/.test(event.type)) {
                this._startOpening(nested);
            }
            this.activeMenu = item.parent();
            this._trigger('focus', event, {
                item: item
            });
        },
        _scrollIntoView: function(item) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if (this._hasScroll()) {
                borderTop = parseFloat($.css(this.activeMenu[0], 'borderTopWidth')) || 0;
                paddingTop = parseFloat($.css(this.activeMenu[0], 'paddingTop')) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.outerHeight();
                if (offset < 0) {
                    this.activeMenu.scrollTop(scroll + offset);
                } else if (offset + itemHeight > elementHeight) {
                    this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
                }
            }
        },
        blur: function(event, fromFocus) {
            if (!fromFocus) {
                clearTimeout(this.timer);
            }
            if (!this.active) {
                return;
            }
            this._removeClass(this.active.children('.ui-menu-item-wrapper'), null, 'ui-state-active');
            this._trigger('blur', event, {
                item: this.active
            });
            this.active = null;
        },
        _startOpening: function(submenu) {
            clearTimeout(this.timer);
            if (submenu.attr('aria-hidden') !== 'true') {
                return;
            }
            this.timer = this._delay((function() {
                this._close();
                this._open(submenu);
            }), this.delay);
        },
        _open: function(submenu) {
            var position = $.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find('.ui-menu').not(submenu.parents('.ui-menu')).hide().attr('aria-hidden', 'true');
            submenu.show().removeAttr('aria-hidden').attr('aria-expanded', 'true').position(position);
        },
        collapseAll: function(event, all) {
            clearTimeout(this.timer);
            this.timer = this._delay((function() {
                var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find('.ui-menu'));
                if (!currentMenu.length) {
                    currentMenu = this.element;
                }
                this._close(currentMenu);
                this.blur(event);
                this._removeClass(currentMenu.find('.ui-state-active'), null, 'ui-state-active');
                this.activeMenu = currentMenu;
            }), this.delay);
        },
        _close: function(startMenu) {
            if (!startMenu) {
                startMenu = this.active ? this.active.parent() : this.element;
            }
            startMenu.find('.ui-menu').hide().attr('aria-hidden', 'true').attr('aria-expanded', 'false');
        },
        _closeOnDocumentClick: function(event) {
            return !$(event.target).closest('.ui-menu').length;
        },
        _isDivider: function(item) {
            return !/[^\-\u2014\u2013\s]/.test(item.text());
        },
        collapse: function(event) {
            var newItem = this.active && this.active.parent().closest('.ui-menu-item', this.element);
            if (newItem && newItem.length) {
                this._close();
                this.focus(event, newItem);
            }
        },
        expand: function(event) {
            var newItem = this.active && this.active.children('.ui-menu ').find(this.options.items).first();
            if (newItem && newItem.length) {
                this._open(newItem.parent());
                this._delay((function() {
                    this.focus(event, newItem);
                }));
            }
        },
        next: function(event) {
            this._move('next', 'first', event);
        },
        previous: function(event) {
            this._move('prev', 'last', event);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll('.ui-menu-item').length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll('.ui-menu-item').length;
        },
        _move: function(direction, filter, event) {
            var next;
            if (this.active) {
                if (direction === 'first' || direction === 'last') {
                    next = this.active[direction === 'first' ? 'prevAll' : 'nextAll']('.ui-menu-item').eq(-1);
                } else {
                    next = this.active[direction + 'All']('.ui-menu-item').eq(0);
                }
            }
            if (!next || !next.length || !this.active) {
                next = this.activeMenu.find(this.options.items)[filter]();
            }
            this.focus(event, next);
        },
        nextPage: function(event) {
            var item, base, height;
            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isLastItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll('.ui-menu-item').each((function() {
                    item = $(this);
                    return item.offset().top - base - height < 0;
                }));
                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items)[!this.active ? 'first' : 'last']());
            }
        },
        previousPage: function(event) {
            var item, base, height;
            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isFirstItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll('.ui-menu-item').each((function() {
                    item = $(this);
                    return item.offset().top - base + height > 0;
                }));
                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items).first());
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop('scrollHeight');
        },
        select: function(event) {
            this.active = this.active || $(event.target).closest('.ui-menu-item');
            var ui = {
                item: this.active
            };
            if (!this.active.has('.ui-menu').length) {
                this.collapseAll(event, true);
            }
            this._trigger('select', event, ui);
        },
        _filterMenuItems: function(character) {
            var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'), regex = new RegExp('^' + escapedCharacter, 'i');
            return this.activeMenu.find(this.options.items).filter('.ui-menu-item').filter((function() {
                return regex.test($.trim($(this).children('.ui-menu-item-wrapper').text()));
            }));
        }
    });
    /*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.autocomplete', {
        version: '1.12.1',
        defaultElement: '<input>',
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: 'left top',
                at: 'left bottom',
                collision: 'none'
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(), isTextarea = nodeName === 'textarea', isInput = nodeName === 'input';
            this.isMultiLine = isTextarea || !isInput && this._isContentEditable(this.element);
            this.valueMethod = this.element[isTextarea || isInput ? 'val' : 'text'];
            this.isNewMenu = true;
            this._addClass('ui-autocomplete-input');
            this.element.attr('autocomplete', 'off');
            this._on(this.element, {
                keydown: function(event) {
                    if (this.element.prop('readOnly')) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }
                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                      case keyCode.PAGE_UP:
                        suppressKeyPress = true;
                        this._move('previousPage', event);
                        break;

                      case keyCode.PAGE_DOWN:
                        suppressKeyPress = true;
                        this._move('nextPage', event);
                        break;

                      case keyCode.UP:
                        suppressKeyPress = true;
                        this._keyEvent('previous', event);
                        break;

                      case keyCode.DOWN:
                        suppressKeyPress = true;
                        this._keyEvent('next', event);
                        break;

                      case keyCode.ENTER:
                        if (this.menu.active) {
                            suppressKeyPress = true;
                            event.preventDefault();
                            this.menu.select(event);
                        }
                        break;

                      case keyCode.TAB:
                        if (this.menu.active) {
                            this.menu.select(event);
                        }
                        break;

                      case keyCode.ESCAPE:
                        if (this.menu.element.is(':visible')) {
                            if (!this.isMultiLine) {
                                this._value(this.term);
                            }
                            this.close(event);
                            event.preventDefault();
                        }
                        break;

                      default:
                        suppressKeyPressRepeat = true;
                        this._searchTimeout(event);
                        break;
                    }
                },
                keypress: function(event) {
                    if (suppressKeyPress) {
                        suppressKeyPress = false;
                        if (!this.isMultiLine || this.menu.element.is(':visible')) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if (suppressKeyPressRepeat) {
                        return;
                    }
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                      case keyCode.PAGE_UP:
                        this._move('previousPage', event);
                        break;

                      case keyCode.PAGE_DOWN:
                        this._move('nextPage', event);
                        break;

                      case keyCode.UP:
                        this._keyEvent('previous', event);
                        break;

                      case keyCode.DOWN:
                        this._keyEvent('next', event);
                        break;
                    }
                },
                input: function(event) {
                    if (suppressInput) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout(event);
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function(event) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return;
                    }
                    clearTimeout(this.searching);
                    this.close(event);
                    this._change(event);
                }
            });
            this._initSource();
            this.menu = $('<ul>').appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu('instance');
            this._addClass(this.menu.element, 'ui-autocomplete', 'ui-front');
            this._on(this.menu.element, {
                mousedown: function(event) {
                    event.preventDefault();
                    this.cancelBlur = true;
                    this._delay((function() {
                        delete this.cancelBlur;
                        if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                            this.element.trigger('focus');
                        }
                    }));
                },
                menufocus: function(event, ui) {
                    var label, item;
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one('mousemove', (function() {
                                $(event.target).trigger(event.originalEvent);
                            }));
                            return;
                        }
                    }
                    item = ui.item.data('ui-autocomplete-item');
                    if (false !== this._trigger('focus', event, {
                        item: item
                    })) {
                        if (event.originalEvent && /^key/.test(event.originalEvent.type)) {
                            this._value(item.value);
                        }
                    }
                    label = ui.item.attr('aria-label') || item.value;
                    if (label && $.trim(label).length) {
                        this.liveRegion.children().hide();
                        $('<div>').text(label).appendTo(this.liveRegion);
                    }
                },
                menuselect: function(event, ui) {
                    var item = ui.item.data('ui-autocomplete-item'), previous = this.previous;
                    if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                        this.element.trigger('focus');
                        this.previous = previous;
                        this._delay((function() {
                            this.previous = previous;
                            this.selectedItem = item;
                        }));
                    }
                    if (false !== this._trigger('select', event, {
                        item: item
                    })) {
                        this._value(item.value);
                    }
                    this.term = this._value();
                    this.close(event);
                    this.selectedItem = item;
                }
            });
            this.liveRegion = $('<div>', {
                role: 'status',
                'aria-live': 'assertive',
                'aria-relevant': 'additions'
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, 'ui-helper-hidden-accessible');
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr('autocomplete');
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr('autocomplete');
            this.menu.element.remove();
            this.liveRegion.remove();
        },
        _setOption: function(key, value) {
            this._super(key, value);
            if (key === 'source') {
                this._initSource();
            }
            if (key === 'appendTo') {
                this.menu.element.appendTo(this._appendTo());
            }
            if (key === 'disabled' && value && this.xhr) {
                this.xhr.abort();
            }
        },
        _isEventTargetInWidget: function(event) {
            var menuElement = this.menu.element[0];
            return event.target === this.element[0] || event.target === menuElement || $.contains(menuElement, event.target);
        },
        _closeOnClickOutside: function(event) {
            if (!this._isEventTargetInWidget(event)) {
                this.close();
            }
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            if (element) {
                element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0);
            }
            if (!element || !element[0]) {
                element = this.element.closest('.ui-front, dialog');
            }
            if (!element.length) {
                element = this.document[0].body;
            }
            return element;
        },
        _initSource: function() {
            var array, url, that = this;
            if ($.isArray(this.options.source)) {
                array = this.options.source;
                this.source = function(request, response) {
                    response($.ui.autocomplete.filter(array, request.term));
                };
            } else if (typeof this.options.source === 'string') {
                url = this.options.source;
                this.source = function(request, response) {
                    if (that.xhr) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax({
                        url: url,
                        data: request,
                        dataType: 'json',
                        success: function(data) {
                            response(data);
                        },
                        error: function() {
                            response([]);
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },
        _searchTimeout: function(event) {
            clearTimeout(this.searching);
            this.searching = this._delay((function() {
                var equalValues = this.term === this._value(), menuVisible = this.menu.element.is(':visible'), modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
                if (!equalValues || equalValues && !menuVisible && !modifierKey) {
                    this.selectedItem = null;
                    this.search(null, event);
                }
            }), this.options.delay);
        },
        search: function(value, event) {
            value = value != null ? value : this._value();
            this.term = this._value();
            if (value.length < this.options.minLength) {
                return this.close(event);
            }
            if (this._trigger('search', event) === false) {
                return;
            }
            return this._search(value);
        },
        _search: function(value) {
            this.pending++;
            this._addClass('ui-autocomplete-loading');
            this.cancelSearch = false;
            this.source({
                term: value
            }, this._response());
        },
        _response: function() {
            var index = ++this.requestIndex;
            return $.proxy((function(content) {
                if (index === this.requestIndex) {
                    this.__response(content);
                }
                this.pending--;
                if (!this.pending) {
                    this._removeClass('ui-autocomplete-loading');
                }
            }), this);
        },
        __response: function(content) {
            if (content) {
                content = this._normalize(content);
            }
            this._trigger('response', null, {
                content: content
            });
            if (!this.options.disabled && content && content.length && !this.cancelSearch) {
                this._suggest(content);
                this._trigger('open');
            } else {
                this._close();
            }
        },
        close: function(event) {
            this.cancelSearch = true;
            this._close(event);
        },
        _close: function(event) {
            this._off(this.document, 'mousedown');
            if (this.menu.element.is(':visible')) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger('close', event);
            }
        },
        _change: function(event) {
            if (this.previous !== this._value()) {
                this._trigger('change', event, {
                    item: this.selectedItem
                });
            }
        },
        _normalize: function(items) {
            if (items.length && items[0].label && items[0].value) {
                return items;
            }
            return $.map(items, (function(item) {
                if (typeof item === 'string') {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend({}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                });
            }));
        },
        _suggest: function(items) {
            var ul = this.menu.element.empty();
            this._renderMenu(ul, items);
            this.isNewMenu = true;
            this.menu.refresh();
            ul.show();
            this._resizeMenu();
            ul.position($.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next();
            }
            this._on(this.document, {
                mousedown: '_closeOnClickOutside'
            });
        },
        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth(Math.max(ul.width('').outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(ul, items) {
            var that = this;
            $.each(items, (function(index, item) {
                that._renderItemData(ul, item);
            }));
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data('ui-autocomplete-item', item);
        },
        _renderItem: function(ul, item) {
            return $('<li>').append($('<div>').text(item.label)).appendTo(ul);
        },
        _move: function(direction, event) {
            if (!this.menu.element.is(':visible')) {
                this.search(null, event);
                return;
            }
            if (this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction)) {
                if (!this.isMultiLine) {
                    this._value(this.term);
                }
                this.menu.blur();
                return;
            }
            this.menu[direction](event);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(keyEvent, event) {
            if (!this.isMultiLine || this.menu.element.is(':visible')) {
                this._move(keyEvent, event);
                event.preventDefault();
            }
        },
        _isContentEditable: function(element) {
            if (!element.length) {
                return false;
            }
            var editable = element.prop('contentEditable');
            if (editable === 'inherit') {
                return this._isContentEditable(element.parent());
            }
            return editable === 'true';
        }
    });
    $.extend($.ui.autocomplete, {
        escapeRegex: function(value) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
        },
        filter: function(array, term) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), 'i');
            return $.grep(array, (function(value) {
                return matcher.test(value.label || value.value || value);
            }));
        }
    });
    $.widget('ui.autocomplete', $.ui.autocomplete, {
        options: {
            messages: {
                noResults: 'No search results.',
                results: function(amount) {
                    return amount + (amount > 1 ? ' results are' : ' result is') + ' available, use up and down arrow keys to navigate.';
                }
            }
        },
        __response: function(content) {
            var message;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return;
            }
            if (content && content.length) {
                message = this.options.messages.results(content.length);
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.children().hide();
            $('<div>').text(message).appendTo(this.liveRegion);
        }
    });
    var widgetsAutocomplete = $.ui.autocomplete;
    /*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;
    var widgetsControlgroup = $.widget('ui.controlgroup', {
        version: '1.12.1',
        defaultElement: '<div>',
        options: {
            direction: 'horizontal',
            disabled: null,
            onlyVisible: true,
            items: {
                button: 'input[type=button], input[type=submit], input[type=reset], button, a',
                controlgroupLabel: '.ui-controlgroup-label',
                checkboxradio: 'input[type=\'checkbox\'], input[type=\'radio\']',
                selectmenu: 'select',
                spinner: '.ui-spinner-input'
            }
        },
        _create: function() {
            this._enhance();
        },
        _enhance: function() {
            this.element.attr('role', 'toolbar');
            this.refresh();
        },
        _destroy: function() {
            this._callChildMethod('destroy');
            this.childWidgets.removeData('ui-controlgroup-data');
            this.element.removeAttr('role');
            if (this.options.items.controlgroupLabel) {
                this.element.find(this.options.items.controlgroupLabel).find('.ui-controlgroup-label-contents').contents().unwrap();
            }
        },
        _initWidgets: function() {
            var that = this, childWidgets = [];
            $.each(this.options.items, (function(widget, selector) {
                var labels;
                var options = {};
                if (!selector) {
                    return;
                }
                if (widget === 'controlgroupLabel') {
                    labels = that.element.find(selector);
                    labels.each((function() {
                        var element = $(this);
                        if (element.children('.ui-controlgroup-label-contents').length) {
                            return;
                        }
                        element.contents().wrapAll('<span class=\'ui-controlgroup-label-contents\'></span>');
                    }));
                    that._addClass(labels, null, 'ui-widget ui-widget-content ui-state-default');
                    childWidgets = childWidgets.concat(labels.get());
                    return;
                }
                if (!$.fn[widget]) {
                    return;
                }
                if (that['_' + widget + 'Options']) {
                    options = that['_' + widget + 'Options']('middle');
                } else {
                    options = {
                        classes: {}
                    };
                }
                that.element.find(selector).each((function() {
                    var element = $(this);
                    var instance = element[widget]('instance');
                    var instanceOptions = $.widget.extend({}, options);
                    if (widget === 'button' && element.parent('.ui-spinner').length) {
                        return;
                    }
                    if (!instance) {
                        instance = element[widget]()[widget]('instance');
                    }
                    if (instance) {
                        instanceOptions.classes = that._resolveClassesValues(instanceOptions.classes, instance);
                    }
                    element[widget](instanceOptions);
                    var widgetElement = element[widget]('widget');
                    $.data(widgetElement[0], 'ui-controlgroup-data', instance ? instance : element[widget]('instance'));
                    childWidgets.push(widgetElement[0]);
                }));
            }));
            this.childWidgets = $($.unique(childWidgets));
            this._addClass(this.childWidgets, 'ui-controlgroup-item');
        },
        _callChildMethod: function(method) {
            this.childWidgets.each((function() {
                var element = $(this), data = element.data('ui-controlgroup-data');
                if (data && data[method]) {
                    data[method]();
                }
            }));
        },
        _updateCornerClass: function(element, position) {
            var remove = 'ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all';
            var add = this._buildSimpleOptions(position, 'label').classes.label;
            this._removeClass(element, null, remove);
            this._addClass(element, null, add);
        },
        _buildSimpleOptions: function(position, key) {
            var direction = this.options.direction === 'vertical';
            var result = {
                classes: {}
            };
            result.classes[key] = {
                middle: '',
                first: 'ui-corner-' + (direction ? 'top' : 'left'),
                last: 'ui-corner-' + (direction ? 'bottom' : 'right'),
                only: 'ui-corner-all'
            }[position];
            return result;
        },
        _spinnerOptions: function(position) {
            var options = this._buildSimpleOptions(position, 'ui-spinner');
            options.classes['ui-spinner-up'] = '';
            options.classes['ui-spinner-down'] = '';
            return options;
        },
        _buttonOptions: function(position) {
            return this._buildSimpleOptions(position, 'ui-button');
        },
        _checkboxradioOptions: function(position) {
            return this._buildSimpleOptions(position, 'ui-checkboxradio-label');
        },
        _selectmenuOptions: function(position) {
            var direction = this.options.direction === 'vertical';
            return {
                width: direction ? 'auto' : false,
                classes: {
                    middle: {
                        'ui-selectmenu-button-open': '',
                        'ui-selectmenu-button-closed': ''
                    },
                    first: {
                        'ui-selectmenu-button-open': 'ui-corner-' + (direction ? 'top' : 'tl'),
                        'ui-selectmenu-button-closed': 'ui-corner-' + (direction ? 'top' : 'left')
                    },
                    last: {
                        'ui-selectmenu-button-open': direction ? '' : 'ui-corner-tr',
                        'ui-selectmenu-button-closed': 'ui-corner-' + (direction ? 'bottom' : 'right')
                    },
                    only: {
                        'ui-selectmenu-button-open': 'ui-corner-top',
                        'ui-selectmenu-button-closed': 'ui-corner-all'
                    }
                }[position]
            };
        },
        _resolveClassesValues: function(classes, instance) {
            var result = {};
            $.each(classes, (function(key) {
                var current = instance.options.classes[key] || '';
                current = $.trim(current.replace(controlgroupCornerRegex, ''));
                result[key] = (current + ' ' + classes[key]).replace(/\s+/g, ' ');
            }));
            return result;
        },
        _setOption: function(key, value) {
            if (key === 'direction') {
                this._removeClass('ui-controlgroup-' + this.options.direction);
            }
            this._super(key, value);
            if (key === 'disabled') {
                this._callChildMethod(value ? 'disable' : 'enable');
                return;
            }
            this.refresh();
        },
        refresh: function() {
            var children, that = this;
            this._addClass('ui-controlgroup ui-controlgroup-' + this.options.direction);
            if (this.options.direction === 'horizontal') {
                this._addClass(null, 'ui-helper-clearfix');
            }
            this._initWidgets();
            children = this.childWidgets;
            if (this.options.onlyVisible) {
                children = children.filter(':visible');
            }
            if (children.length) {
                $.each([ 'first', 'last' ], (function(index, value) {
                    var instance = children[value]().data('ui-controlgroup-data');
                    if (instance && that['_' + instance.widgetName + 'Options']) {
                        var options = that['_' + instance.widgetName + 'Options'](children.length === 1 ? 'only' : value);
                        options.classes = that._resolveClassesValues(options.classes, instance);
                        instance.element[instance.widgetName](options);
                    } else {
                        that._updateCornerClass(children[value](), value);
                    }
                }));
                this._callChildMethod('refresh');
            }
        }
    });
    /*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.checkboxradio', [ $.ui.formResetMixin, {
        version: '1.12.1',
        options: {
            disabled: null,
            label: null,
            icon: true,
            classes: {
                'ui-checkboxradio-label': 'ui-corner-all',
                'ui-checkboxradio-icon': 'ui-corner-all'
            }
        },
        _getCreateOptions: function() {
            var disabled, labels;
            var that = this;
            var options = this._super() || {};
            this._readType();
            labels = this.element.labels();
            this.label = $(labels[labels.length - 1]);
            if (!this.label.length) {
                $.error('No label found for checkboxradio widget');
            }
            this.originalLabel = '';
            this.label.contents().not(this.element[0]).each((function() {
                that.originalLabel += this.nodeType === 3 ? $(this).text() : this.outerHTML;
            }));
            if (this.originalLabel) {
                options.label = this.originalLabel;
            }
            disabled = this.element[0].disabled;
            if (disabled != null) {
                options.disabled = disabled;
            }
            return options;
        },
        _create: function() {
            var checked = this.element[0].checked;
            this._bindFormResetHandler();
            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled;
            }
            this._setOption('disabled', this.options.disabled);
            this._addClass('ui-checkboxradio', 'ui-helper-hidden-accessible');
            this._addClass(this.label, 'ui-checkboxradio-label', 'ui-button ui-widget');
            if (this.type === 'radio') {
                this._addClass(this.label, 'ui-checkboxradio-radio-label');
            }
            if (this.options.label && this.options.label !== this.originalLabel) {
                this._updateLabel();
            } else if (this.originalLabel) {
                this.options.label = this.originalLabel;
            }
            this._enhance();
            if (checked) {
                this._addClass(this.label, 'ui-checkboxradio-checked', 'ui-state-active');
                if (this.icon) {
                    this._addClass(this.icon, null, 'ui-state-hover');
                }
            }
            this._on({
                change: '_toggleClasses',
                focus: function() {
                    this._addClass(this.label, null, 'ui-state-focus ui-visual-focus');
                },
                blur: function() {
                    this._removeClass(this.label, null, 'ui-state-focus ui-visual-focus');
                }
            });
        },
        _readType: function() {
            var nodeName = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            if (nodeName !== 'input' || !/radio|checkbox/.test(this.type)) {
                $.error('Can\'t create checkboxradio on element.nodeName=' + nodeName + ' and element.type=' + this.type);
            }
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var group;
            var name = this.element[0].name;
            var nameSelector = 'input[name=\'' + $.ui.escapeSelector(name) + '\']';
            if (!name) {
                return $([]);
            }
            if (this.form.length) {
                group = $(this.form[0].elements).filter(nameSelector);
            } else {
                group = $(nameSelector).filter((function() {
                    return $(this).form().length === 0;
                }));
            }
            return group.not(this.element);
        },
        _toggleClasses: function() {
            var checked = this.element[0].checked;
            this._toggleClass(this.label, 'ui-checkboxradio-checked', 'ui-state-active', checked);
            if (this.options.icon && this.type === 'checkbox') {
                this._toggleClass(this.icon, null, 'ui-icon-check ui-state-checked', checked)._toggleClass(this.icon, null, 'ui-icon-blank', !checked);
            }
            if (this.type === 'radio') {
                this._getRadioGroup().each((function() {
                    var instance = $(this).checkboxradio('instance');
                    if (instance) {
                        instance._removeClass(instance.label, 'ui-checkboxradio-checked', 'ui-state-active');
                    }
                }));
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            if (this.icon) {
                this.icon.remove();
                this.iconSpace.remove();
            }
        },
        _setOption: function(key, value) {
            if (key === 'label' && !value) {
                return;
            }
            this._super(key, value);
            if (key === 'disabled') {
                this._toggleClass(this.label, null, 'ui-state-disabled', value);
                this.element[0].disabled = value;
                return;
            }
            this.refresh();
        },
        _updateIcon: function(checked) {
            var toAdd = 'ui-icon ui-icon-background ';
            if (this.options.icon) {
                if (!this.icon) {
                    this.icon = $('<span>');
                    this.iconSpace = $('<span> </span>');
                    this._addClass(this.iconSpace, 'ui-checkboxradio-icon-space');
                }
                if (this.type === 'checkbox') {
                    toAdd += checked ? 'ui-icon-check ui-state-checked' : 'ui-icon-blank';
                    this._removeClass(this.icon, null, checked ? 'ui-icon-blank' : 'ui-icon-check');
                } else {
                    toAdd += 'ui-icon-blank';
                }
                this._addClass(this.icon, 'ui-checkboxradio-icon', toAdd);
                if (!checked) {
                    this._removeClass(this.icon, null, 'ui-icon-check ui-state-checked');
                }
                this.icon.prependTo(this.label).after(this.iconSpace);
            } else if (this.icon !== undefined) {
                this.icon.remove();
                this.iconSpace.remove();
                delete this.icon;
            }
        },
        _updateLabel: function() {
            var contents = this.label.contents().not(this.element[0]);
            if (this.icon) {
                contents = contents.not(this.icon[0]);
            }
            if (this.iconSpace) {
                contents = contents.not(this.iconSpace[0]);
            }
            contents.remove();
            this.label.append(this.options.label);
        },
        refresh: function() {
            var checked = this.element[0].checked, isDisabled = this.element[0].disabled;
            this._updateIcon(checked);
            this._toggleClass(this.label, 'ui-checkboxradio-checked', 'ui-state-active', checked);
            if (this.options.label !== null) {
                this._updateLabel();
            }
            if (isDisabled !== this.options.disabled) {
                this._setOptions({
                    disabled: isDisabled
                });
            }
        }
    } ]);
    var widgetsCheckboxradio = $.ui.checkboxradio;
    /*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.button', {
        version: '1.12.1',
        defaultElement: '<button>',
        options: {
            classes: {
                'ui-button': 'ui-corner-all'
            },
            disabled: null,
            icon: null,
            iconPosition: 'beginning',
            label: null,
            showLabel: true
        },
        _getCreateOptions: function() {
            var disabled, options = this._super() || {};
            this.isInput = this.element.is('input');
            disabled = this.element[0].disabled;
            if (disabled != null) {
                options.disabled = disabled;
            }
            this.originalLabel = this.isInput ? this.element.val() : this.element.html();
            if (this.originalLabel) {
                options.label = this.originalLabel;
            }
            return options;
        },
        _create: function() {
            if (!this.option.showLabel & !this.options.icon) {
                this.options.showLabel = true;
            }
            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled || false;
            }
            this.hasTitle = !!this.element.attr('title');
            if (this.options.label && this.options.label !== this.originalLabel) {
                if (this.isInput) {
                    this.element.val(this.options.label);
                } else {
                    this.element.html(this.options.label);
                }
            }
            this._addClass('ui-button', 'ui-widget');
            this._setOption('disabled', this.options.disabled);
            this._enhance();
            if (this.element.is('a')) {
                this._on({
                    keyup: function(event) {
                        if (event.keyCode === $.ui.keyCode.SPACE) {
                            event.preventDefault();
                            if (this.element[0].click) {
                                this.element[0].click();
                            } else {
                                this.element.trigger('click');
                            }
                        }
                    }
                });
            }
        },
        _enhance: function() {
            if (!this.element.is('button')) {
                this.element.attr('role', 'button');
            }
            if (this.options.icon) {
                this._updateIcon('icon', this.options.icon);
                this._updateTooltip();
            }
        },
        _updateTooltip: function() {
            this.title = this.element.attr('title');
            if (!this.options.showLabel && !this.title) {
                this.element.attr('title', this.options.label);
            }
        },
        _updateIcon: function(option, value) {
            var icon = option !== 'iconPosition', position = icon ? this.options.iconPosition : value, displayBlock = position === 'top' || position === 'bottom';
            if (!this.icon) {
                this.icon = $('<span>');
                this._addClass(this.icon, 'ui-button-icon', 'ui-icon');
                if (!this.options.showLabel) {
                    this._addClass('ui-button-icon-only');
                }
            } else if (icon) {
                this._removeClass(this.icon, null, this.options.icon);
            }
            if (icon) {
                this._addClass(this.icon, null, value);
            }
            this._attachIcon(position);
            if (displayBlock) {
                this._addClass(this.icon, null, 'ui-widget-icon-block');
                if (this.iconSpace) {
                    this.iconSpace.remove();
                }
            } else {
                if (!this.iconSpace) {
                    this.iconSpace = $('<span> </span>');
                    this._addClass(this.iconSpace, 'ui-button-icon-space');
                }
                this._removeClass(this.icon, null, 'ui-wiget-icon-block');
                this._attachIconSpace(position);
            }
        },
        _destroy: function() {
            this.element.removeAttr('role');
            if (this.icon) {
                this.icon.remove();
            }
            if (this.iconSpace) {
                this.iconSpace.remove();
            }
            if (!this.hasTitle) {
                this.element.removeAttr('title');
            }
        },
        _attachIconSpace: function(iconPosition) {
            this.icon[/^(?:end|bottom)/.test(iconPosition) ? 'before' : 'after'](this.iconSpace);
        },
        _attachIcon: function(iconPosition) {
            this.element[/^(?:end|bottom)/.test(iconPosition) ? 'append' : 'prepend'](this.icon);
        },
        _setOptions: function(options) {
            var newShowLabel = options.showLabel === undefined ? this.options.showLabel : options.showLabel, newIcon = options.icon === undefined ? this.options.icon : options.icon;
            if (!newShowLabel && !newIcon) {
                options.showLabel = true;
            }
            this._super(options);
        },
        _setOption: function(key, value) {
            if (key === 'icon') {
                if (value) {
                    this._updateIcon(key, value);
                } else if (this.icon) {
                    this.icon.remove();
                    if (this.iconSpace) {
                        this.iconSpace.remove();
                    }
                }
            }
            if (key === 'iconPosition') {
                this._updateIcon(key, value);
            }
            if (key === 'showLabel') {
                this._toggleClass('ui-button-icon-only', null, !value);
                this._updateTooltip();
            }
            if (key === 'label') {
                if (this.isInput) {
                    this.element.val(value);
                } else {
                    this.element.html(value);
                    if (this.icon) {
                        this._attachIcon(this.options.iconPosition);
                        this._attachIconSpace(this.options.iconPosition);
                    }
                }
            }
            this._super(key, value);
            if (key === 'disabled') {
                this._toggleClass(null, 'ui-state-disabled', value);
                this.element[0].disabled = value;
                if (value) {
                    this.element.blur();
                }
            }
        },
        refresh: function() {
            var isDisabled = this.element.is('input, button') ? this.element[0].disabled : this.element.hasClass('ui-button-disabled');
            if (isDisabled !== this.options.disabled) {
                this._setOptions({
                    disabled: isDisabled
                });
            }
            this._updateTooltip();
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget('ui.button', $.ui.button, {
            options: {
                text: true,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                if (this.options.showLabel && !this.options.text) {
                    this.options.showLabel = this.options.text;
                }
                if (!this.options.showLabel && this.options.text) {
                    this.options.text = this.options.showLabel;
                }
                if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary)) {
                    if (this.options.icons.primary) {
                        this.options.icon = this.options.icons.primary;
                    } else {
                        this.options.icon = this.options.icons.secondary;
                        this.options.iconPosition = 'end';
                    }
                } else if (this.options.icon) {
                    this.options.icons.primary = this.options.icon;
                }
                this._super();
            },
            _setOption: function(key, value) {
                if (key === 'text') {
                    this._super('showLabel', value);
                    return;
                }
                if (key === 'showLabel') {
                    this.options.text = value;
                }
                if (key === 'icon') {
                    this.options.icons.primary = value;
                }
                if (key === 'icons') {
                    if (value.primary) {
                        this._super('icon', value.primary);
                        this._super('iconPosition', 'beginning');
                    } else if (value.secondary) {
                        this._super('icon', value.secondary);
                        this._super('iconPosition', 'end');
                    }
                }
                this._superApply(arguments);
            }
        });
        $.fn.button = function(orig) {
            return function() {
                if (!this.length || this.length && this[0].tagName !== 'INPUT' || this.length && this[0].tagName === 'INPUT' && (this.attr('type') !== 'checkbox' && this.attr('type') !== 'radio')) {
                    return orig.apply(this, arguments);
                }
                if (!$.ui.checkboxradio) {
                    $.error('Checkboxradio widget missing');
                }
                if (arguments.length === 0) {
                    return this.checkboxradio({
                        icon: false
                    });
                }
                return this.checkboxradio.apply(this, arguments);
            };
        }($.fn.button);
        $.fn.buttonset = function() {
            if (!$.ui.controlgroup) {
                $.error('Controlgroup widget missing');
            }
            if (arguments[0] === 'option' && arguments[1] === 'items' && arguments[2]) {
                return this.controlgroup.apply(this, [ arguments[0], 'items.button', arguments[2] ]);
            }
            if (arguments[0] === 'option' && arguments[1] === 'items') {
                return this.controlgroup.apply(this, [ arguments[0], 'items.button' ]);
            }
            if (typeof arguments[0] === 'object' && arguments[0].items) {
                arguments[0].items = {
                    button: arguments[0].items
                };
            }
            return this.controlgroup.apply(this, arguments);
        };
    }
    var widgetsButton = $.ui.button;
    /*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.extend($.ui, {
        datepicker: {
            version: '1.12.1'
        }
    });
    var datepicker_instActive;
    function datepicker_getZindex(elem) {
        var position, value;
        while (elem.length && elem[0] !== document) {
            position = elem.css('position');
            if (position === 'absolute' || position === 'relative' || position === 'fixed') {
                value = parseInt(elem.css('zIndex'), 10);
                if (!isNaN(value) && value !== 0) {
                    return value;
                }
            }
            elem = elem.parent();
        }
        return 0;
    }
    function Datepicker() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = 'ui-datepicker-div';
        this._inlineClass = 'ui-datepicker-inline';
        this._appendClass = 'ui-datepicker-append';
        this._triggerClass = 'ui-datepicker-trigger';
        this._dialogClass = 'ui-datepicker-dialog';
        this._disableClass = 'ui-datepicker-disabled';
        this._unselectableClass = 'ui-datepicker-unselectable';
        this._currentClass = 'ui-datepicker-current-day';
        this._dayOverClass = 'ui-datepicker-days-cell-over';
        this.regional = [];
        this.regional[''] = {
            closeText: 'Done',
            prevText: 'Prev',
            nextText: 'Next',
            currentText: 'Today',
            monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
            monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
            dayNames: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            dayNamesShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
            dayNamesMin: [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
            weekHeader: 'Wk',
            dateFormat: 'mm/dd/yy',
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        this._defaults = {
            showOn: 'focus',
            showAnim: 'fadeIn',
            showOptions: {},
            defaultDate: null,
            appendText: '',
            buttonText: '...',
            buttonImage: '',
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: 'c-10:c+10',
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: '+10',
            minDate: null,
            maxDate: null,
            duration: 'fast',
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: '',
            altFormat: '',
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        $.extend(this._defaults, this.regional['']);
        this.regional.en = $.extend(true, {}, this.regional['']);
        this.regional['en-US'] = $.extend(true, {}, this.regional.en);
        this.dpDiv = datepicker_bindHover($('<div id=\'' + this._mainDivId + '\' class=\'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'));
    }
    $.extend(Datepicker.prototype, {
        markerClassName: 'hasDatepicker',
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(settings) {
            datepicker_extendRemove(this._defaults, settings || {});
            return this;
        },
        _attachDatepicker: function(target, settings) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = nodeName === 'div' || nodeName === 'span';
            if (!target.id) {
                this.uuid += 1;
                target.id = 'dp' + this.uuid;
            }
            inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {});
            if (nodeName === 'input') {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
            return {
                id: id,
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: !inline ? this.dpDiv : datepicker_bindHover($('<div class=\'' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))
            };
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).on('keydown', this._doKeyDown).on('keypress', this._doKeyPress).on('keyup', this._doKeyUp);
            this._autoSize(inst);
            $.data(target, 'datepicker', inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
        },
        _attachments: function(input, inst) {
            var showOn, buttonText, buttonImage, appendText = this._get(inst, 'appendText'), isRTL = this._get(inst, 'isRTL');
            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $('<span class=\'' + this._appendClass + '\'>' + appendText + '</span>');
                input[isRTL ? 'before' : 'after'](inst.append);
            }
            input.off('focus', this._showDatepicker);
            if (inst.trigger) {
                inst.trigger.remove();
            }
            showOn = this._get(inst, 'showOn');
            if (showOn === 'focus' || showOn === 'both') {
                input.on('focus', this._showDatepicker);
            }
            if (showOn === 'button' || showOn === 'both') {
                buttonText = this._get(inst, 'buttonText');
                buttonImage = this._get(inst, 'buttonImage');
                inst.trigger = $(this._get(inst, 'buttonImageOnly') ? $('<img/>').addClass(this._triggerClass).attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                }) : $('<button type=\'button\'></button>').addClass(this._triggerClass).html(!buttonImage ? buttonText : $('<img/>').attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                })));
                input[isRTL ? 'before' : 'after'](inst.trigger);
                inst.trigger.on('click', (function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
                        $.datepicker._hideDatepicker();
                    } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker(input[0]);
                    } else {
                        $.datepicker._showDatepicker(input[0]);
                    }
                    return false;
                }));
            }
        },
        _autoSize: function(inst) {
            if (this._get(inst, 'autoSize') && !inst.inline) {
                var findMax, max, maxI, i, date = new Date(2009, 12 - 1, 20), dateFormat = this._get(inst, 'dateFormat');
                if (dateFormat.match(/[DM]/)) {
                    findMax = function(names) {
                        max = 0;
                        maxI = 0;
                        for (i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? 'monthNames' : 'monthNamesShort')));
                    date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - date.getDay());
                }
                inst.input.attr('size', this._formatDate(inst, date).length);
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);
            $.data(target, 'datepicker', inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
            inst.dpDiv.css('display', 'block');
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst;
            if (!inst) {
                this.uuid += 1;
                id = 'dp' + this.uuid;
                this._dialogInput = $('<input type=\'text\' id=\'' + id + '\' style=\'position: absolute; top: -100px; width: 0px;\'/>');
                this._dialogInput.on('keydown', this._doKeyDown);
                $('body').append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], 'datepicker', inst);
            }
            datepicker_extendRemove(inst.settings, settings || {});
            date = date && date.constructor === Date ? this._formatDate(inst, date) : date;
            this._dialogInput.val(date);
            this._pos = pos ? pos.length ? pos : [ pos.pageX, pos.pageY ] : null;
            if (!this._pos) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [ browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY ];
            }
            this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px');
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], 'datepicker', inst);
            return this;
        },
        _destroyDatepicker: function(target) {
            var nodeName, $target = $(target), inst = $.data(target, 'datepicker');
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            nodeName = target.nodeName.toLowerCase();
            $.removeData(target, 'datepicker');
            if (nodeName === 'input') {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).off('focus', this._showDatepicker).off('keydown', this._doKeyDown).off('keypress', this._doKeyPress).off('keyup', this._doKeyUp);
            } else if (nodeName === 'div' || nodeName === 'span') {
                $target.removeClass(this.markerClassName).empty();
            }
            if (datepicker_instActive === inst) {
                datepicker_instActive = null;
            }
        },
        _enableDatepicker: function(target) {
            var nodeName, inline, $target = $(target), inst = $.data(target, 'datepicker');
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            nodeName = target.nodeName.toLowerCase();
            if (nodeName === 'input') {
                target.disabled = false;
                inst.trigger.filter('button').each((function() {
                    this.disabled = false;
                })).end().filter('img').css({
                    opacity: '1.0',
                    cursor: ''
                });
            } else if (nodeName === 'div' || nodeName === 'span') {
                inline = $target.children('.' + this._inlineClass);
                inline.children().removeClass('ui-state-disabled');
                inline.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', false);
            }
            this._disabledInputs = $.map(this._disabledInputs, (function(value) {
                return value === target ? null : value;
            }));
        },
        _disableDatepicker: function(target) {
            var nodeName, inline, $target = $(target), inst = $.data(target, 'datepicker');
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            nodeName = target.nodeName.toLowerCase();
            if (nodeName === 'input') {
                target.disabled = true;
                inst.trigger.filter('button').each((function() {
                    this.disabled = true;
                })).end().filter('img').css({
                    opacity: '0.5',
                    cursor: 'default'
                });
            } else if (nodeName === 'div' || nodeName === 'span') {
                inline = $target.children('.' + this._inlineClass);
                inline.children().addClass('ui-state-disabled');
                inline.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', true);
            }
            this._disabledInputs = $.map(this._disabledInputs, (function(value) {
                return value === target ? null : value;
            }));
            this._disabledInputs[this._disabledInputs.length] = target;
        },
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] === target) {
                    return true;
                }
            }
            return false;
        },
        _getInst: function(target) {
            try {
                return $.data(target, 'datepicker');
            } catch (err) {
                throw 'Missing instance data for this datepicker';
            }
        },
        _optionDatepicker: function(target, name, value) {
            var settings, date, minDate, maxDate, inst = this._getInst(target);
            if (arguments.length === 2 && typeof name === 'string') {
                return name === 'defaults' ? $.extend({}, $.datepicker._defaults) : inst ? name === 'all' ? $.extend({}, inst.settings) : this._get(inst, name) : null;
            }
            settings = name || {};
            if (typeof name === 'string') {
                settings = {};
                settings[name] = value;
            }
            if (inst) {
                if (this._curInst === inst) {
                    this._hideDatepicker();
                }
                date = this._getDateDatepicker(target, true);
                minDate = this._getMinMaxDate(inst, 'min');
                maxDate = this._getMinMaxDate(inst, 'max');
                datepicker_extendRemove(inst.settings, settings);
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                if ('disabled' in settings) {
                    if (settings.disabled) {
                        this._disableDatepicker(target);
                    } else {
                        this._enableDatepicker(target);
                    }
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return inst ? this._getDate(inst) : null;
        },
        _doKeyDown: function(event) {
            var onSelect, dateStr, sel, inst = $.datepicker._getInst(event.target), handled = true, isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                  case 9:
                    $.datepicker._hideDatepicker();
                    handled = false;
                    break;

                  case 13:
                    sel = $('td.' + $.datepicker._dayOverClass + ':not(.' + $.datepicker._currentClass + ')', inst.dpDiv);
                    if (sel[0]) {
                        $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                    }
                    onSelect = $.datepicker._get(inst, 'onSelect');
                    if (onSelect) {
                        dateStr = $.datepicker._formatDate(inst);
                        onSelect.apply(inst.input ? inst.input[0] : null, [ dateStr, inst ]);
                    } else {
                        $.datepicker._hideDatepicker();
                    }
                    return false;

                  case 27:
                    $.datepicker._hideDatepicker();
                    break;

                  case 33:
                    $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, 'stepBigMonths') : -$.datepicker._get(inst, 'stepMonths'), 'M');
                    break;

                  case 34:
                    $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, 'stepBigMonths') : +$.datepicker._get(inst, 'stepMonths'), 'M');
                    break;

                  case 35:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  case 36:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  case 37:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, isRTL ? +1 : -1, 'D');
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, 'stepBigMonths') : -$.datepicker._get(inst, 'stepMonths'), 'M');
                    }
                    break;

                  case 38:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, -7, 'D');
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  case 39:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, isRTL ? -1 : +1, 'D');
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, 'stepBigMonths') : +$.datepicker._get(inst, 'stepMonths'), 'M');
                    }
                    break;

                  case 40:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, +7, 'D');
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  default:
                    handled = false;
                }
            } else if (event.keyCode === 36 && event.ctrlKey) {
                $.datepicker._showDatepicker(this);
            } else {
                handled = false;
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        _doKeyPress: function(event) {
            var chars, chr, inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, 'constrainInput')) {
                chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
                chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
            }
        },
        _doKeyUp: function(event) {
            var date, inst = $.datepicker._getInst(event.target);
            if (inst.input.val() !== inst.lastVal) {
                try {
                    date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'), inst.input ? inst.input.val() : null, $.datepicker._getFormatConfig(inst));
                    if (date) {
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                } catch (err) {}
            }
            return true;
        },
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() !== 'input') {
                input = $('input', input.parentNode)[0];
            }
            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) {
                return;
            }
            var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
            inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (inst && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
                }
            }
            beforeShow = $.datepicker._get(inst, 'beforeShow');
            beforeShowSettings = beforeShow ? beforeShow.apply(input, [ input, inst ]) : {};
            if (beforeShowSettings === false) {
                return;
            }
            datepicker_extendRemove(inst.settings, beforeShowSettings);
            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);
            if ($.datepicker._inDialog) {
                input.value = '';
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight;
            }
            isFixed = false;
            $(input).parents().each((function() {
                isFixed |= $(this).css('position') === 'fixed';
                return !isFixed;
            }));
            offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            inst.dpDiv.empty();
            inst.dpDiv.css({
                position: 'absolute',
                display: 'block',
                top: '-1000px'
            });
            $.datepicker._updateDatepicker(inst);
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? 'static' : isFixed ? 'fixed' : 'absolute',
                display: 'none',
                left: offset.left + 'px',
                top: offset.top + 'px'
            });
            if (!inst.inline) {
                showAnim = $.datepicker._get(inst, 'showAnim');
                duration = $.datepicker._get(inst, 'duration');
                inst.dpDiv.css('z-index', datepicker_getZindex($(input)) + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && $.effects.effect[showAnim]) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration);
                } else {
                    inst.dpDiv[showAnim || 'show'](showAnim ? duration : null);
                }
                if ($.datepicker._shouldFocusInput(inst)) {
                    inst.input.trigger('focus');
                }
                $.datepicker._curInst = inst;
            }
        },
        _updateDatepicker: function(inst) {
            this.maxRows = 4;
            datepicker_instActive = inst;
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);
            var origyearshtml, numMonths = this._getNumberOfMonths(inst), cols = numMonths[1], width = 17, activeCell = inst.dpDiv.find('.' + this._dayOverClass + ' a');
            if (activeCell.length > 0) {
                datepicker_handleMouseover.apply(activeCell.get(0));
            }
            inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
            if (cols > 1) {
                inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', width * cols + 'em');
            }
            inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? 'add' : 'remove') + 'Class']('ui-datepicker-multi');
            inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl');
            if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst)) {
                inst.input.trigger('focus');
            }
            if (inst.yearshtml) {
                origyearshtml = inst.yearshtml;
                setTimeout((function() {
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }), 0);
            }
        },
        _shouldFocusInput: function(inst) {
            return inst.input && inst.input.is(':visible') && !inst.input.is(':disabled') && !inst.input.is(':focus');
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(), dpHeight = inst.dpDiv.outerHeight(), inputWidth = inst.input ? inst.input.outerWidth() : 0, inputHeight = inst.input ? inst.input.outerHeight() : 0, viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()), viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
            offset.left -= this._get(inst, 'isRTL') ? dpWidth - inputWidth : 0;
            offset.left -= isFixed && offset.left === inst.input.offset().left ? $(document).scrollLeft() : 0;
            offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0;
            offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);
            return offset;
        },
        _findPos: function(obj) {
            var position, inst = this._getInst(obj), isRTL = this._get(inst, 'isRTL');
            while (obj && (obj.type === 'hidden' || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
            }
            position = $(obj).offset();
            return [ position.left, position.top ];
        },
        _hideDatepicker: function(input) {
            var showAnim, duration, postProcess, onClose, inst = this._curInst;
            if (!inst || input && inst !== $.data(input, 'datepicker')) {
                return;
            }
            if (this._datepickerShowing) {
                showAnim = this._get(inst, 'showAnim');
                duration = this._get(inst, 'duration');
                postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                };
                if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
                } else {
                    inst.dpDiv[showAnim === 'slideDown' ? 'slideUp' : showAnim === 'fadeIn' ? 'fadeOut' : 'hide'](showAnim ? duration : null, postProcess);
                }
                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;
                onClose = this._get(inst, 'onClose');
                if (onClose) {
                    onClose.apply(inst.input ? inst.input[0] : null, [ inst.input ? inst.input.val() : '', inst ]);
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: 'absolute',
                        left: '0',
                        top: '-100px'
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $('body').append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).off('.ui-datepicker-calendar');
        },
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return;
            }
            var $target = $(event.target), inst = $.datepicker._getInst($target[0]);
            if ($target[0].id !== $.datepicker._mainDivId && $target.parents('#' + $.datepicker._mainDivId).length === 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest('.' + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) || $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst) {
                $.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id), inst = this._getInst(target[0]);
            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset + (period === 'M' ? this._get(inst, 'showCurrentAtPos') : 0), period);
            this._updateDatepicker(inst);
        },
        _gotoToday: function(id) {
            var date, target = $(id), inst = this._getInst(target[0]);
            if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date;
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id), inst = this._getInst(target[0]);
            inst['selected' + (period === 'M' ? 'Month' : 'Year')] = inst['draw' + (period === 'M' ? 'Month' : 'Year')] = parseInt(select.options[select.selectedIndex].value, 10);
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _selectDay: function(id, month, year, td) {
            var inst, target = $(id);
            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }
            inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $('a', td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
        },
        _clearDate: function(id) {
            var target = $(id);
            this._selectDate(target, '');
        },
        _selectDate: function(id, dateStr) {
            var onSelect, target = $(id), inst = this._getInst(target[0]);
            dateStr = dateStr != null ? dateStr : this._formatDate(inst);
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);
            onSelect = this._get(inst, 'onSelect');
            if (onSelect) {
                onSelect.apply(inst.input ? inst.input[0] : null, [ dateStr, inst ]);
            } else if (inst.input) {
                inst.input.trigger('change');
            }
            if (inst.inline) {
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof inst.input[0] !== 'object') {
                    inst.input.trigger('focus');
                }
                this._lastInput = null;
            }
        },
        _updateAlternate: function(inst) {
            var altFormat, date, dateStr, altField = this._get(inst, 'altField');
            if (altField) {
                altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
                date = this._getDate(inst);
                dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).val(dateStr);
            }
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [ day > 0 && day < 6, '' ];
        },
        iso8601Week: function(date) {
            var time, checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1;
        },
        parseDate: function(format, value, settings) {
            if (format == null || value == null) {
                throw 'Invalid arguments';
            }
            value = typeof value === 'object' ? value.toString() : value + '';
            if (value === '') {
                return null;
            }
            var iFormat, dim, extra, iValue = 0, shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff, shortYearCutoff = typeof shortYearCutoffTemp !== 'string' ? shortYearCutoffTemp : (new Date).getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10), dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            }, getNumber = function(match) {
                var isDoubled = lookAhead(match), size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2, minSize = match === 'y' ? size : 1, digits = new RegExp('^\\d{' + minSize + ',' + size + '}'), num = value.substring(iValue).match(digits);
                if (!num) {
                    throw 'Missing number at position ' + iValue;
                }
                iValue += num[0].length;
                return parseInt(num[0], 10);
            }, getName = function(match, shortNames, longNames) {
                var index = -1, names = $.map(lookAhead(match) ? longNames : shortNames, (function(v, k) {
                    return [ [ k, v ] ];
                })).sort((function(a, b) {
                    return -(a[1].length - b[1].length);
                }));
                $.each(names, (function(i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false;
                    }
                }));
                if (index !== -1) {
                    return index + 1;
                } else {
                    throw 'Unknown name at position ' + iValue;
                }
            }, checkLiteral = function() {
                if (value.charAt(iValue) !== format.charAt(iFormat)) {
                    throw 'Unexpected literal at position ' + iValue;
                }
                iValue++;
            };
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                      case 'd':
                        day = getNumber('d');
                        break;

                      case 'D':
                        getName('D', dayNamesShort, dayNames);
                        break;

                      case 'o':
                        doy = getNumber('o');
                        break;

                      case 'm':
                        month = getNumber('m');
                        break;

                      case 'M':
                        month = getName('M', monthNamesShort, monthNames);
                        break;

                      case 'y':
                        year = getNumber('y');
                        break;

                      case '@':
                        date = new Date(getNumber('@'));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;

                      case '!':
                        date = new Date((getNumber('!') - this._ticksTo1970) / 1e4);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;

                      case '\'':
                        if (lookAhead('\'')) {
                            checkLiteral();
                        } else {
                            literal = true;
                        }
                        break;

                      default:
                        checkLiteral();
                    }
                }
            }
            if (iValue < value.length) {
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw 'Extra/unparsed characters found in date: ' + extra;
                }
            }
            if (year === -1) {
                year = (new Date).getFullYear();
            } else if (year < 100) {
                year += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
            }
            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                } while (true);
            }
            date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw 'Invalid date';
            }
            return date;
        },
        ATOM: 'yy-mm-dd',
        COOKIE: 'D, dd M yy',
        ISO_8601: 'yy-mm-dd',
        RFC_822: 'D, d M y',
        RFC_850: 'DD, dd-M-y',
        RFC_1036: 'D, d M y',
        RFC_1123: 'D, d M yy',
        RFC_2822: 'D, d M yy',
        RSS: 'D, d M y',
        TICKS: '!',
        TIMESTAMP: '@',
        W3C: 'yy-mm-dd',
        _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7,
        formatDate: function(format, date, settings) {
            if (!date) {
                return '';
            }
            var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            }, formatNumber = function(match, value, len) {
                var num = '' + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = '0' + num;
                    }
                }
                return num;
            }, formatName = function(match, value, shortNames, longNames) {
                return lookAhead(match) ? longNames[value] : shortNames[value];
            }, output = '', literal = false;
            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                          case 'd':
                            output += formatNumber('d', date.getDate(), 2);
                            break;

                          case 'D':
                            output += formatName('D', date.getDay(), dayNamesShort, dayNames);
                            break;

                          case 'o':
                            output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;

                          case 'm':
                            output += formatNumber('m', date.getMonth() + 1, 2);
                            break;

                          case 'M':
                            output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
                            break;

                          case 'y':
                            output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
                            break;

                          case '@':
                            output += date.getTime();
                            break;

                          case '!':
                            output += date.getTime() * 1e4 + this._ticksTo1970;
                            break;

                          case '\'':
                            if (lookAhead('\'')) {
                                output += '\'';
                            } else {
                                literal = true;
                            }
                            break;

                          default:
                            output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },
        _possibleChars: function(format) {
            var iFormat, chars = '', literal = false, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            };
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                      case 'd':
                      case 'm':
                      case 'y':
                      case '@':
                        chars += '0123456789';
                        break;

                      case 'D':
                      case 'M':
                        return null;

                      case '\'':
                        if (lookAhead('\'')) {
                            chars += '\'';
                        } else {
                            literal = true;
                        }
                        break;

                      default:
                        chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() === inst.lastVal) {
                return;
            }
            var dateFormat = this._get(inst, 'dateFormat'), dates = inst.lastVal = inst.input ? inst.input.val() : null, defaultDate = this._getDefaultDate(inst), date = defaultDate, settings = this._getFormatConfig(inst);
            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                dates = noDefault ? '' : dates;
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = dates ? date.getDate() : 0;
            inst.currentMonth = dates ? date.getMonth() : 0;
            inst.currentYear = dates ? date.getFullYear() : 0;
            this._adjustInstDate(inst);
        },
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, 'defaultDate'), new Date));
        },
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                var date = new Date;
                date.setDate(date.getDate() + offset);
                return date;
            }, offsetString = function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'), offset, $.datepicker._getFormatConfig(inst));
                } catch (e) {}
                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date, year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || 'd') {
                      case 'd':
                      case 'D':
                        day += parseInt(matches[1], 10);
                        break;

                      case 'w':
                      case 'W':
                        day += parseInt(matches[1], 10) * 7;
                        break;

                      case 'm':
                      case 'M':
                        month += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;

                      case 'y':
                      case 'Y':
                        year += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day);
            }, newDate = date == null || date === '' ? defaultDate : typeof date === 'string' ? offsetString(date) : typeof date === 'number' ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());
            newDate = newDate && newDate.toString() === 'Invalid Date' ? defaultDate : newDate;
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },
        _setDate: function(inst, date, noChange) {
            var clear = !date, origMonth = inst.selectedMonth, origYear = inst.selectedYear, newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date));
            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? '' : this._formatDate(inst));
            }
        },
        _getDate: function(inst) {
            var startDate = !inst.currentYear || inst.input && inst.input.val() === '' ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return startDate;
        },
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, 'stepMonths'), id = '#' + inst.id.replace(/\\\\/g, '\\');
            inst.dpDiv.find('[data-handler]').map((function() {
                var handler = {
                    prev: function() {
                        $.datepicker._adjustDate(id, -stepMonths, 'M');
                    },
                    next: function() {
                        $.datepicker._adjustDate(id, +stepMonths, 'M');
                    },
                    hide: function() {
                        $.datepicker._hideDatepicker();
                    },
                    today: function() {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function() {
                        $.datepicker._selectDay(id, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this);
                        return false;
                    },
                    selectMonth: function() {
                        $.datepicker._selectMonthYear(id, this, 'M');
                        return false;
                    },
                    selectYear: function() {
                        $.datepicker._selectMonthYear(id, this, 'Y');
                        return false;
                    }
                };
                $(this).on(this.getAttribute('data-event'), handler[this.getAttribute('data-handler')]);
            }));
        },
        _generateHTML: function(inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date, today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), isRTL = this._get(inst, 'isRTL'), showButtonPanel = this._get(inst, 'showButtonPanel'), hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext'), navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat'), numMonths = this._getNumberOfMonths(inst), showCurrentAtPos = this._get(inst, 'showCurrentAtPos'), stepMonths = this._get(inst, 'stepMonths'), isMultiMonth = numMonths[0] !== 1 || numMonths[1] !== 1, currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)), minDate = this._getMinMaxDate(inst, 'min'), maxDate = this._getMinMaxDate(inst, 'max'), drawMonth = inst.drawMonth - showCurrentAtPos, drawYear = inst.drawYear;
            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate()));
                maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;
            prevText = this._get(inst, 'prevText');
            prevText = !navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst));
            prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class=\'ui-datepicker-prev ui-corner-all\' data-handler=\'prev\' data-event=\'click\'' + ' title=\'' + prevText + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '\'>' + prevText + '</span></a>' : hideIfNoPrevNext ? '' : '<a class=\'ui-datepicker-prev ui-corner-all ui-state-disabled\' title=\'' + prevText + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '\'>' + prevText + '</span></a>';
            nextText = this._get(inst, 'nextText');
            nextText = !navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst));
            next = this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class=\'ui-datepicker-next ui-corner-all\' data-handler=\'next\' data-event=\'click\'' + ' title=\'' + nextText + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '\'>' + nextText + '</span></a>' : hideIfNoPrevNext ? '' : '<a class=\'ui-datepicker-next ui-corner-all ui-state-disabled\' title=\'' + nextText + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '\'>' + nextText + '</span></a>';
            currentText = this._get(inst, 'currentText');
            gotoDate = this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today;
            currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));
            controls = !inst.inline ? '<button type=\'button\' class=\'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\' data-handler=\'hide\' data-event=\'click\'>' + this._get(inst, 'closeText') + '</button>' : '';
            buttonPanel = showButtonPanel ? '<div class=\'ui-datepicker-buttonpane ui-widget-content\'>' + (isRTL ? controls : '') + (this._isInRange(inst, gotoDate) ? '<button type=\'button\' class=\'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\' data-handler=\'today\' data-event=\'click\'' + '>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
            firstDay = parseInt(this._get(inst, 'firstDay'), 10);
            firstDay = isNaN(firstDay) ? 0 : firstDay;
            showWeek = this._get(inst, 'showWeek');
            dayNames = this._get(inst, 'dayNames');
            dayNamesMin = this._get(inst, 'dayNamesMin');
            monthNames = this._get(inst, 'monthNames');
            monthNamesShort = this._get(inst, 'monthNamesShort');
            beforeShowDay = this._get(inst, 'beforeShowDay');
            showOtherMonths = this._get(inst, 'showOtherMonths');
            selectOtherMonths = this._get(inst, 'selectOtherMonths');
            defaultDate = this._getDefaultDate(inst);
            html = '';
            for (row = 0; row < numMonths[0]; row++) {
                group = '';
                this.maxRows = 4;
                for (col = 0; col < numMonths[1]; col++) {
                    selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    cornerClass = ' ui-corner-all';
                    calender = '';
                    if (isMultiMonth) {
                        calender += '<div class=\'ui-datepicker-group';
                        if (numMonths[1] > 1) {
                            switch (col) {
                              case 0:
                                calender += ' ui-datepicker-group-first';
                                cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left');
                                break;

                              case numMonths[1] - 1:
                                calender += ' ui-datepicker-group-last';
                                cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right');
                                break;

                              default:
                                calender += ' ui-datepicker-group-middle';
                                cornerClass = '';
                                break;
                            }
                        }
                        calender += '\'>';
                    }
                    calender += '<div class=\'ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '\'>' + (/all|left/.test(cornerClass) && row === 0 ? isRTL ? next : prev : '') + (/all|right/.test(cornerClass) && row === 0 ? isRTL ? prev : next : '') + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class=\'ui-datepicker-calendar\'><thead>' + '<tr>';
                    thead = showWeek ? '<th class=\'ui-datepicker-week-col\'>' + this._get(inst, 'weekHeader') + '</th>' : '';
                    for (dow = 0; dow < 7; dow++) {
                        day = (dow + firstDay) % 7;
                        thead += '<th scope=\'col\'' + ((dow + firstDay + 6) % 7 >= 5 ? ' class=\'ui-datepicker-week-end\'' : '') + '>' + '<span title=\'' + dayNames[day] + '\'>' + dayNamesMin[day] + '</span></th>';
                    }
                    calender += thead + '</tr></thead><tbody>';
                    daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    curRows = Math.ceil((leadDays + daysInMonth) / 7);
                    numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows;
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (dRow = 0; dRow < numRows; dRow++) {
                        calender += '<tr>';
                        tbody = !showWeek ? '' : '<td class=\'ui-datepicker-week-col\'>' + this._get(inst, 'calculateWeek')(printDate) + '</td>';
                        for (dow = 0; dow < 7; dow++) {
                            daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [ printDate ]) : [ true, '' ];
                            otherMonth = printDate.getMonth() !== drawMonth;
                            unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
                            tbody += '<td class=\'' + ((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + (otherMonth ? ' ui-datepicker-other-month' : '') + (printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ? ' ' + this._dayOverClass : '') + (unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') + (otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + (printDate.getTime() === currentDate.getTime() ? ' ' + this._currentClass : '') + (printDate.getTime() === today.getTime() ? ' ui-datepicker-today' : '')) + '\'' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title=\'' + daySettings[2].replace(/'/g, '&#39;') + '\'' : '') + (unselectable ? '' : ' data-handler=\'selectDay\' data-event=\'click\' data-month=\'' + printDate.getMonth() + '\' data-year=\'' + printDate.getFullYear() + '\'') + '>' + (otherMonth && !showOtherMonths ? '&#xa0;' : unselectable ? '<span class=\'ui-state-default\'>' + printDate.getDate() + '</span>' : '<a class=\'ui-state-default' + (printDate.getTime() === today.getTime() ? ' ui-state-highlight' : '') + (printDate.getTime() === currentDate.getTime() ? ' ui-state-active' : '') + (otherMonth ? ' ui-priority-secondary' : '') + '\' href=\'#\'>' + printDate.getDate() + '</a>') + '</td>';
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + '</tr>';
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += '</tbody></table>' + (isMultiMonth ? '</div>' + (numMonths[0] > 0 && col === numMonths[1] - 1 ? '<div class=\'ui-datepicker-row-break\'></div>' : '') : '');
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, 'changeMonth'), changeYear = this._get(inst, 'changeYear'), showMonthAfterYear = this._get(inst, 'showMonthAfterYear'), html = '<div class=\'ui-datepicker-title\'>', monthHtml = '';
            if (secondary || !changeMonth) {
                monthHtml += '<span class=\'ui-datepicker-month\'>' + monthNames[drawMonth] + '</span>';
            } else {
                inMinYear = minDate && minDate.getFullYear() === drawYear;
                inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
                monthHtml += '<select class=\'ui-datepicker-month\' data-handler=\'selectMonth\' data-event=\'change\'>';
                for (month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += '<option value=\'' + month + '\'' + (month === drawMonth ? ' selected=\'selected\'' : '') + '>' + monthNamesShort[month] + '</option>';
                    }
                }
                monthHtml += '</select>';
            }
            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
            }
            if (!inst.yearshtml) {
                inst.yearshtml = '';
                if (secondary || !changeYear) {
                    html += '<span class=\'ui-datepicker-year\'>' + drawYear + '</span>';
                } else {
                    years = this._get(inst, 'yearRange').split(':');
                    thisYear = (new Date).getFullYear();
                    determineYear = function(value) {
                        var year = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
                        return isNaN(year) ? thisYear : year;
                    };
                    year = determineYear(years[0]);
                    endYear = Math.max(year, determineYear(years[1] || ''));
                    year = minDate ? Math.max(year, minDate.getFullYear()) : year;
                    endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
                    inst.yearshtml += '<select class=\'ui-datepicker-year\' data-handler=\'selectYear\' data-event=\'change\'>';
                    for (;year <= endYear; year++) {
                        inst.yearshtml += '<option value=\'' + year + '\'' + (year === drawYear ? ' selected=\'selected\'' : '') + '>' + year + '</option>';
                    }
                    inst.yearshtml += '</select>';
                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }
            html += this._get(inst, 'yearSuffix');
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
            }
            html += '</div>';
            return html;
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.selectedYear + (period === 'Y' ? offset : 0), month = inst.selectedMonth + (period === 'M' ? offset : 0), day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === 'D' ? offset : 0), date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period === 'M' || period === 'Y') {
                this._notifyChange(inst);
            }
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, 'min'), maxDate = this._getMinMaxDate(inst, 'max'), newDate = minDate && date < minDate ? minDate : date;
            return maxDate && newDate > maxDate ? maxDate : newDate;
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, 'onChangeMonthYear');
            if (onChange) {
                onChange.apply(inst.input ? inst.input[0] : null, [ inst.selectedYear, inst.selectedMonth + 1, inst ]);
            }
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, 'numberOfMonths');
            return numMonths == null ? [ 1, 1 ] : typeof numMonths === 'number' ? [ 1, numMonths ] : numMonths;
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
        },
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst), date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },
        _isInRange: function(inst, date) {
            var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, 'min'), maxDate = this._getMinMaxDate(inst, 'max'), minYear = null, maxYear = null, years = this._get(inst, 'yearRange');
            if (years) {
                yearSplit = years.split(':');
                currentYear = (new Date).getFullYear();
                minYear = parseInt(yearSplit[0], 10);
                maxYear = parseInt(yearSplit[1], 10);
                if (yearSplit[0].match(/[+\-].*/)) {
                    minYear += currentYear;
                }
                if (yearSplit[1].match(/[+\-].*/)) {
                    maxYear += currentYear;
                }
            }
            return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear);
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, 'shortYearCutoff');
            shortYearCutoff = typeof shortYearCutoff !== 'string' ? shortYearCutoff : (new Date).getFullYear() % 100 + parseInt(shortYearCutoff, 10);
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, 'dayNamesShort'),
                dayNames: this._get(inst, 'dayNames'),
                monthNamesShort: this._get(inst, 'monthNamesShort'),
                monthNames: this._get(inst, 'monthNames')
            };
        },
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = day ? typeof day === 'object' ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
        }
    });
    function datepicker_bindHover(dpDiv) {
        var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
        return dpDiv.on('mouseout', selector, (function() {
            $(this).removeClass('ui-state-hover');
            if (this.className.indexOf('ui-datepicker-prev') !== -1) {
                $(this).removeClass('ui-datepicker-prev-hover');
            }
            if (this.className.indexOf('ui-datepicker-next') !== -1) {
                $(this).removeClass('ui-datepicker-next-hover');
            }
        })).on('mouseover', selector, datepicker_handleMouseover);
    }
    function datepicker_handleMouseover() {
        if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
            $(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
            $(this).addClass('ui-state-hover');
            if (this.className.indexOf('ui-datepicker-prev') !== -1) {
                $(this).addClass('ui-datepicker-prev-hover');
            }
            if (this.className.indexOf('ui-datepicker-next') !== -1) {
                $(this).addClass('ui-datepicker-next-hover');
            }
        }
    }
    function datepicker_extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null) {
                target[name] = props[name];
            }
        }
        return target;
    }
    $.fn.datepicker = function(options) {
        if (!this.length) {
            return this;
        }
        if (!$.datepicker.initialized) {
            $(document).on('mousedown', $.datepicker._checkExternalClick);
            $.datepicker.initialized = true;
        }
        if ($('#' + $.datepicker._mainDivId).length === 0) {
            $('body').append($.datepicker.dpDiv);
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === 'string' && (options === 'isDisabled' || options === 'getDate' || options === 'widget')) {
            return $.datepicker['_' + options + 'Datepicker'].apply($.datepicker, [ this[0] ].concat(otherArgs));
        }
        if (options === 'option' && arguments.length === 2 && typeof arguments[1] === 'string') {
            return $.datepicker['_' + options + 'Datepicker'].apply($.datepicker, [ this[0] ].concat(otherArgs));
        }
        return this.each((function() {
            typeof options === 'string' ? $.datepicker['_' + options + 'Datepicker'].apply($.datepicker, [ this ].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
        }));
    };
    $.datepicker = new Datepicker;
    $.datepicker.initialized = false;
    $.datepicker.uuid = (new Date).getTime();
    $.datepicker.version = '1.12.1';
    var widgetsDatepicker = $.datepicker;
    var ie = $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    /*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var mouseHandled = false;
    $(document).on('mouseup', (function() {
        mouseHandled = false;
    }));
    var widgetsMouse = $.widget('ui.mouse', {
        version: '1.12.1',
        options: {
            cancel: 'input, textarea, button, select, option',
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;
            this.element.on('mousedown.' + this.widgetName, (function(event) {
                return that._mouseDown(event);
            })).on('click.' + this.widgetName, (function(event) {
                if (true === $.data(event.target, that.widgetName + '.preventClickEvent')) {
                    $.removeData(event.target, that.widgetName + '.preventClickEvent');
                    event.stopImmediatePropagation();
                    return false;
                }
            }));
            this.started = false;
        },
        _mouseDestroy: function() {
            this.element.off('.' + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.off('mousemove.' + this.widgetName, this._mouseMoveDelegate).off('mouseup.' + this.widgetName, this._mouseUpDelegate);
            }
        },
        _mouseDown: function(event) {
            if (mouseHandled) {
                return;
            }
            this._mouseMoved = false;
            this._mouseStarted && this._mouseUp(event);
            this._mouseDownEvent = event;
            var that = this, btnIsLeft = event.which === 1, elIsCancel = typeof this.options.cancel === 'string' && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false;
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout((function() {
                    that.mouseDelayMet = true;
                }), this.options.delay);
            }
            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(event) !== false;
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }
            if (true === $.data(event.target, this.widgetName + '.preventClickEvent')) {
                $.removeData(event.target, this.widgetName + '.preventClickEvent');
            }
            this._mouseMoveDelegate = function(event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function(event) {
                return that._mouseUp(event);
            };
            this.document.on('mousemove.' + this.widgetName, this._mouseMoveDelegate).on('mouseup.' + this.widgetName, this._mouseUpDelegate);
            event.preventDefault();
            mouseHandled = true;
            return true;
        },
        _mouseMove: function(event) {
            if (this._mouseMoved) {
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
                    return this._mouseUp(event);
                } else if (!event.which) {
                    if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) {
                        this.ignoreMissingWhich = true;
                    } else if (!this.ignoreMissingWhich) {
                        return this._mouseUp(event);
                    }
                }
            }
            if (event.which || event.button) {
                this._mouseMoved = true;
            }
            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }
            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;
                this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event);
            }
            return !this._mouseStarted;
        },
        _mouseUp: function(event) {
            this.document.off('mousemove.' + this.widgetName, this._mouseMoveDelegate).off('mouseup.' + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + '.preventClickEvent', true);
                }
                this._mouseStop(event);
            }
            if (this._mouseDelayTimer) {
                clearTimeout(this._mouseDelayTimer);
                delete this._mouseDelayTimer;
            }
            this.ignoreMissingWhich = false;
            mouseHandled = false;
            event.preventDefault();
        },
        _mouseDistanceMet: function(event) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true;
        }
    });
    var plugin = $.ui.plugin = {
        add: function(module, option, set) {
            var i, proto = $.ui[module].prototype;
            for (i in set) {
                proto.plugins[i] = proto.plugins[i] || [];
                proto.plugins[i].push([ option, set[i] ]);
            }
        },
        call: function(instance, name, args, allowDisconnected) {
            var i, set = instance.plugins[name];
            if (!set) {
                return;
            }
            if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
                return;
            }
            for (i = 0; i < set.length; i++) {
                if (instance.options[set[i][0]]) {
                    set[i][1].apply(instance.element, args);
                }
            }
        }
    };
    var safeBlur = $.ui.safeBlur = function(element) {
        if (element && element.nodeName.toLowerCase() !== 'body') {
            $(element).trigger('blur');
        }
    };
    /*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.draggable', $.ui.mouse, {
        version: '1.12.1',
        widgetEventPrefix: 'drag',
        options: {
            addClasses: true,
            appendTo: 'parent',
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: 'auto',
            cursorAt: false,
            grid: false,
            handle: false,
            helper: 'original',
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: 'default',
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: 'both',
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === 'original') {
                this._setPositionRelative();
            }
            if (this.options.addClasses) {
                this._addClass('ui-draggable');
            }
            this._setHandleClassName();
            this._mouseInit();
        },
        _setOption: function(key, value) {
            this._super(key, value);
            if (key === 'handle') {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },
        _destroy: function() {
            if ((this.helper || this.element).is('.ui-draggable-dragging')) {
                this.destroyOnClear = true;
                return;
            }
            this._removeHandleClassName();
            this._mouseDestroy();
        },
        _mouseCapture: function(event) {
            var o = this.options;
            if (this.helper || o.disabled || $(event.target).closest('.ui-resizable-handle').length > 0) {
                return false;
            }
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }
            this._blurActiveElement(event);
            this._blockFrames(o.iframeFix === true ? 'iframe' : o.iframeFix);
            return true;
        },
        _blockFrames: function(selector) {
            this.iframeBlocks = this.document.find(selector).map((function() {
                var iframe = $(this);
                return $('<div>').css('position', 'absolute').appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
            }));
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },
        _blurActiveElement: function(event) {
            var activeElement = $.ui.safeActiveElement(this.document[0]), target = $(event.target);
            if (target.closest(activeElement).length) {
                return;
            }
            $.ui.safeBlur(activeElement);
        },
        _mouseStart: function(event) {
            var o = this.options;
            this.helper = this._createHelper(event);
            this._addClass(this.helper, 'ui-draggable-dragging');
            this._cacheHelperProportions();
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css('position');
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter((function() {
                return $(this).css('position') === 'fixed';
            })).length > 0;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(event);
            this.originalPosition = this.position = this._generatePosition(event, false);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
            this._setContainment();
            if (this._trigger('start', event) === false) {
                this._clear();
                return false;
            }
            this._cacheHelperProportions();
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }
            this._mouseDrag(event, true);
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStart(this, event);
            }
            return true;
        },
        _refreshOffsets: function(event) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },
        _mouseDrag: function(event, noPropagation) {
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset();
            }
            this.position = this._generatePosition(event, true);
            this.positionAbs = this._convertPositionTo('absolute');
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger('drag', event, ui) === false) {
                    this._mouseUp(new $.Event('mouseup', event));
                    return false;
                }
                this.position = ui.position;
            }
            this.helper[0].style.left = this.position.left + 'px';
            this.helper[0].style.top = this.position.top + 'px';
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }
            return false;
        },
        _mouseStop: function(event) {
            var that = this, dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }
            if (this.options.revert === 'invalid' && !dropped || this.options.revert === 'valid' && dropped || this.options.revert === true || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped)) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                    if (that._trigger('stop', event) !== false) {
                        that._clear();
                    }
                }));
            } else {
                if (this._trigger('stop', event) !== false) {
                    this._clear();
                }
            }
            return false;
        },
        _mouseUp: function(event) {
            this._unblockFrames();
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStop(this, event);
            }
            if (this.handleElement.is(event.target)) {
                this.element.trigger('focus');
            }
            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },
        cancel: function() {
            if (this.helper.is('.ui-draggable-dragging')) {
                this._mouseUp(new $.Event('mouseup', {
                    target: this.element[0]
                }));
            } else {
                this._clear();
            }
            return this;
        },
        _getHandle: function(event) {
            return this.options.handle ? !!$(event.target).closest(this.element.find(this.options.handle)).length : true;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, 'ui-draggable-handle');
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, 'ui-draggable-handle');
        },
        _createHelper: function(event) {
            var o = this.options, helperIsFunction = $.isFunction(o.helper), helper = helperIsFunction ? $(o.helper.apply(this.element[0], [ event ])) : o.helper === 'clone' ? this.element.clone().removeAttr('id') : this.element;
            if (!helper.parents('body').length) {
                helper.appendTo(o.appendTo === 'parent' ? this.element[0].parentNode : o.appendTo);
            }
            if (helperIsFunction && helper[0] === this.element[0]) {
                this._setPositionRelative();
            }
            if (helper[0] !== this.element[0] && !/(fixed|absolute)/.test(helper.css('position'))) {
                helper.css('position', 'absolute');
            }
            return helper;
        },
        _setPositionRelative: function() {
            if (!/^(?:r|a|f)/.test(this.element.css('position'))) {
                this.element[0].style.position = 'relative';
            }
        },
        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === 'string') {
                obj = obj.split(' ');
            }
            if ($.isArray(obj)) {
                obj = {
                    left: +obj[0],
                    top: +obj[1] || 0
                };
            }
            if ('left' in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ('right' in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ('top' in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ('bottom' in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },
        _isRootNode: function(element) {
            return /(html|body)/i.test(element.tagName) || element === this.document[0];
        },
        _getParentOffset: function() {
            var po = this.offsetParent.offset(), document = this.document[0];
            if (this.cssPosition === 'absolute' && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }
            if (this._isRootNode(this.offsetParent[0])) {
                po = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: po.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== 'relative') {
                return {
                    top: 0,
                    left: 0
                };
            }
            var p = this.element.position(), scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: p.top - (parseInt(this.helper.css('top'), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
                left: p.left - (parseInt(this.helper.css('left'), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css('marginLeft'), 10) || 0,
                top: parseInt(this.element.css('marginTop'), 10) || 0,
                right: parseInt(this.element.css('marginRight'), 10) || 0,
                bottom: parseInt(this.element.css('marginBottom'), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var isUserScrollable, c, ce, o = this.options, document = this.document[0];
            this.relativeContainer = null;
            if (!o.containment) {
                this.containment = null;
                return;
            }
            if (o.containment === 'window') {
                this.containment = [ $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
                return;
            }
            if (o.containment === 'document') {
                this.containment = [ 0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
                return;
            }
            if (o.containment.constructor === Array) {
                this.containment = o.containment;
                return;
            }
            if (o.containment === 'parent') {
                o.containment = this.helper[0].parentNode;
            }
            c = $(o.containment);
            ce = c[0];
            if (!ce) {
                return;
            }
            isUserScrollable = /(scroll|auto)/.test(c.css('overflow'));
            this.containment = [ (parseInt(c.css('borderLeftWidth'), 10) || 0) + (parseInt(c.css('paddingLeft'), 10) || 0), (parseInt(c.css('borderTopWidth'), 10) || 0) + (parseInt(c.css('paddingTop'), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css('borderRightWidth'), 10) || 0) - (parseInt(c.css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css('borderBottomWidth'), 10) || 0) - (parseInt(c.css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ];
            this.relativeContainer = c;
        },
        _convertPositionTo: function(d, pos) {
            if (!pos) {
                pos = this.position;
            }
            var mod = d === 'absolute' ? 1 : -1, scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - (this.cssPosition === 'fixed' ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - (this.cssPosition === 'fixed' ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
            };
        },
        _generatePosition: function(event, constrainPosition) {
            var containment, co, top, left, o = this.options, scrollIsRootNode = this._isRootNode(this.scrollParent[0]), pageX = event.pageX, pageY = event.pageY;
            if (!scrollIsRootNode || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }
            if (constrainPosition) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        co = this.relativeContainer.offset();
                        containment = [ this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top ];
                    } else {
                        containment = this.containment;
                    }
                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }
                if (o.grid) {
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
                }
                if (o.axis === 'y') {
                    pageX = this.originalPageX;
                }
                if (o.axis === 'x') {
                    pageY = this.originalPageY;
                }
            }
            return {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === 'fixed' ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === 'fixed' ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this._removeClass(this.helper, 'ui-draggable-dragging');
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy();
            }
        },
        _trigger: function(type, event, ui) {
            ui = ui || this._uiHash();
            $.ui.plugin.call(this, type, [ event, ui, this ], true);
            if (/^(drag|start|stop)/.test(type)) {
                this.positionAbs = this._convertPositionTo('absolute');
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call(this, type, event, ui);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    });
    $.ui.plugin.add('draggable', 'connectToSortable', {
        start: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.sortables = [];
            $(draggable.options.connectToSortable).each((function() {
                var sortable = $(this).sortable('instance');
                if (sortable && !sortable.options.disabled) {
                    draggable.sortables.push(sortable);
                    sortable.refreshPositions();
                    sortable._trigger('activate', event, uiSortable);
                }
            }));
        },
        stop: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.cancelHelperRemoval = false;
            $.each(draggable.sortables, (function() {
                var sortable = this;
                if (sortable.isOver) {
                    sortable.isOver = 0;
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;
                    sortable._storedCSS = {
                        position: sortable.placeholder.css('position'),
                        top: sortable.placeholder.css('top'),
                        left: sortable.placeholder.css('left')
                    };
                    sortable._mouseStop(event);
                    sortable.options.helper = sortable.options._helper;
                } else {
                    sortable.cancelHelperRemoval = true;
                    sortable._trigger('deactivate', event, uiSortable);
                }
            }));
        },
        drag: function(event, ui, draggable) {
            $.each(draggable.sortables, (function() {
                var innermostIntersecting = false, sortable = this;
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;
                if (sortable._intersectsWith(sortable.containerCache)) {
                    innermostIntersecting = true;
                    $.each(draggable.sortables, (function() {
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;
                        if (this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0])) {
                            innermostIntersecting = false;
                        }
                        return innermostIntersecting;
                    }));
                }
                if (innermostIntersecting) {
                    if (!sortable.isOver) {
                        sortable.isOver = 1;
                        draggable._parent = ui.helper.parent();
                        sortable.currentItem = ui.helper.appendTo(sortable.element).data('ui-sortable-item', true);
                        sortable.options._helper = sortable.options.helper;
                        sortable.options.helper = function() {
                            return ui.helper[0];
                        };
                        event.target = sortable.currentItem[0];
                        sortable._mouseCapture(event, true);
                        sortable._mouseStart(event, true, true);
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top;
                        draggable._trigger('toSortable', event);
                        draggable.dropped = sortable.element;
                        $.each(draggable.sortables, (function() {
                            this.refreshPositions();
                        }));
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }
                    if (sortable.currentItem) {
                        sortable._mouseDrag(event);
                        ui.position = sortable.position;
                    }
                } else {
                    if (sortable.isOver) {
                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;
                        sortable._trigger('out', event, sortable._uiHash(sortable));
                        sortable._mouseStop(event, true);
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;
                        if (sortable.placeholder) {
                            sortable.placeholder.remove();
                        }
                        ui.helper.appendTo(draggable._parent);
                        draggable._refreshOffsets(event);
                        ui.position = draggable._generatePosition(event, true);
                        draggable._trigger('fromSortable', event);
                        draggable.dropped = false;
                        $.each(draggable.sortables, (function() {
                            this.refreshPositions();
                        }));
                    }
                }
            }));
        }
    });
    $.ui.plugin.add('draggable', 'cursor', {
        start: function(event, ui, instance) {
            var t = $('body'), o = instance.options;
            if (t.css('cursor')) {
                o._cursor = t.css('cursor');
            }
            t.css('cursor', o.cursor);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._cursor) {
                $('body').css('cursor', o._cursor);
            }
        }
    });
    $.ui.plugin.add('draggable', 'opacity', {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            if (t.css('opacity')) {
                o._opacity = t.css('opacity');
            }
            t.css('opacity', o.opacity);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css('opacity', o._opacity);
            }
        }
    });
    $.ui.plugin.add('draggable', 'scroll', {
        start: function(event, ui, i) {
            if (!i.scrollParentNotHidden) {
                i.scrollParentNotHidden = i.helper.scrollParent(false);
            }
            if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== 'HTML') {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function(event, ui, i) {
            var o = i.options, scrolled = false, scrollParent = i.scrollParentNotHidden[0], document = i.document[0];
            if (scrollParent !== document && scrollParent.tagName !== 'HTML') {
                if (!o.axis || o.axis !== 'x') {
                    if (i.overflowOffset.top + scrollParent.offsetHeight - event.pageY < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }
                if (!o.axis || o.axis !== 'y') {
                    if (i.overflowOffset.left + scrollParent.offsetWidth - event.pageX < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }
            } else {
                if (!o.axis || o.axis !== 'x') {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }
                if (!o.axis || o.axis !== 'y') {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }
            }
            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }
        }
    });
    $.ui.plugin.add('draggable', 'snap', {
        start: function(event, ui, i) {
            var o = i.options;
            i.snapElements = [];
            $(o.snap.constructor !== String ? o.snap.items || ':data(ui-draggable)' : o.snap).each((function() {
                var $t = $(this), $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(),
                        height: $t.outerHeight(),
                        top: $o.top,
                        left: $o.left
                    });
                }
            }));
        },
        drag: function(event, ui, inst) {
            var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options, d = o.snapTolerance, x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width, y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;
            for (i = inst.snapElements.length - 1; i >= 0; i--) {
                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;
                if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
                    if (inst.snapElements[i].snapping) {
                        inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
                            snapItem: inst.snapElements[i].item
                        }));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }
                if (o.snapMode !== 'inner') {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo('relative', {
                            top: t - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo('relative', {
                            top: b,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo('relative', {
                            top: 0,
                            left: l - inst.helperProportions.width
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo('relative', {
                            top: 0,
                            left: r
                        }).left;
                    }
                }
                first = ts || bs || ls || rs;
                if (o.snapMode !== 'outer') {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo('relative', {
                            top: t,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo('relative', {
                            top: b - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo('relative', {
                            top: 0,
                            left: l
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo('relative', {
                            top: 0,
                            left: r - inst.helperProportions.width
                        }).left;
                    }
                }
                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
                        snapItem: inst.snapElements[i].item
                    }));
                }
                inst.snapElements[i].snapping = ts || bs || ls || rs || first;
            }
        }
    });
    $.ui.plugin.add('draggable', 'stack', {
        start: function(event, ui, instance) {
            var min, o = instance.options, group = $.makeArray($(o.stack)).sort((function(a, b) {
                return (parseInt($(a).css('zIndex'), 10) || 0) - (parseInt($(b).css('zIndex'), 10) || 0);
            }));
            if (!group.length) {
                return;
            }
            min = parseInt($(group[0]).css('zIndex'), 10) || 0;
            $(group).each((function(i) {
                $(this).css('zIndex', min + i);
            }));
            this.css('zIndex', min + group.length);
        }
    });
    $.ui.plugin.add('draggable', 'zIndex', {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            if (t.css('zIndex')) {
                o._zIndex = t.css('zIndex');
            }
            t.css('zIndex', o.zIndex);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._zIndex) {
                $(ui.helper).css('zIndex', o._zIndex);
            }
        }
    });
    var widgetsDraggable = $.ui.draggable;
    /*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.resizable', $.ui.mouse, {
        version: '1.12.1',
        widgetEventPrefix: 'resize',
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: 'slow',
            animateEasing: 'swing',
            aspectRatio: false,
            autoHide: false,
            classes: {
                'ui-resizable-se': 'ui-icon ui-icon-gripsmall-diagonal-se'
            },
            containment: false,
            ghost: false,
            grid: false,
            handles: 'e,s,se',
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(value) {
            return parseFloat(value) || 0;
        },
        _isNumber: function(value) {
            return !isNaN(parseFloat(value));
        },
        _hasScroll: function(el, a) {
            if ($(el).css('overflow') === 'hidden') {
                return false;
            }
            var scroll = a && a === 'left' ? 'scrollLeft' : 'scrollTop', has = false;
            if (el[scroll] > 0) {
                return true;
            }
            el[scroll] = 1;
            has = el[scroll] > 0;
            el[scroll] = 0;
            return has;
        },
        _create: function() {
            var margins, o = this.options, that = this;
            this._addClass('ui-resizable');
            $.extend(this, {
                _aspectRatio: !!o.aspectRatio,
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || 'ui-resizable-helper' : null
            });
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
                this.element.wrap($('<div class=\'ui-wrapper\' style=\'overflow: hidden;\'></div>').css({
                    position: this.element.css('position'),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css('top'),
                    left: this.element.css('left')
                }));
                this.element = this.element.parent().data('ui-resizable', this.element.resizable('instance'));
                this.elementIsWrapper = true;
                margins = {
                    marginTop: this.originalElement.css('marginTop'),
                    marginRight: this.originalElement.css('marginRight'),
                    marginBottom: this.originalElement.css('marginBottom'),
                    marginLeft: this.originalElement.css('marginLeft')
                };
                this.element.css(margins);
                this.originalElement.css('margin', 0);
                this.originalResizeStyle = this.originalElement.css('resize');
                this.originalElement.css('resize', 'none');
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: 'static',
                    zoom: 1,
                    display: 'block'
                }));
                this.originalElement.css(margins);
                this._proportionallyResize();
            }
            this._setupHandles();
            if (o.autoHide) {
                $(this.element).on('mouseenter', (function() {
                    if (o.disabled) {
                        return;
                    }
                    that._removeClass('ui-resizable-autohide');
                    that._handles.show();
                })).on('mouseleave', (function() {
                    if (o.disabled) {
                        return;
                    }
                    if (!that.resizing) {
                        that._addClass('ui-resizable-autohide');
                        that._handles.hide();
                    }
                }));
            }
            this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var wrapper, _destroy = function(exp) {
                $(exp).removeData('resizable').removeData('ui-resizable').off('.resizable').find('.ui-resizable-handle').remove();
            };
            if (this.elementIsWrapper) {
                _destroy(this.element);
                wrapper = this.element;
                this.originalElement.css({
                    position: wrapper.css('position'),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css('top'),
                    left: wrapper.css('left')
                }).insertAfter(wrapper);
                wrapper.remove();
            }
            this.originalElement.css('resize', this.originalResizeStyle);
            _destroy(this.originalElement);
            return this;
        },
        _setOption: function(key, value) {
            this._super(key, value);
            switch (key) {
              case 'handles':
                this._removeHandles();
                this._setupHandles();
                break;

              default:
                break;
            }
        },
        _setupHandles: function() {
            var o = this.options, handle, i, n, hname, axis, that = this;
            this.handles = o.handles || (!$('.ui-resizable-handle', this.element).length ? 'e,s,se' : {
                n: '.ui-resizable-n',
                e: '.ui-resizable-e',
                s: '.ui-resizable-s',
                w: '.ui-resizable-w',
                se: '.ui-resizable-se',
                sw: '.ui-resizable-sw',
                ne: '.ui-resizable-ne',
                nw: '.ui-resizable-nw'
            });
            this._handles = $();
            if (this.handles.constructor === String) {
                if (this.handles === 'all') {
                    this.handles = 'n,e,s,w,se,sw,ne,nw';
                }
                n = this.handles.split(',');
                this.handles = {};
                for (i = 0; i < n.length; i++) {
                    handle = $.trim(n[i]);
                    hname = 'ui-resizable-' + handle;
                    axis = $('<div>');
                    this._addClass(axis, 'ui-resizable-handle ' + hname);
                    axis.css({
                        zIndex: o.zIndex
                    });
                    this.handles[handle] = '.ui-resizable-' + handle;
                    this.element.append(axis);
                }
            }
            this._renderAxis = function(target) {
                var i, axis, padPos, padWrapper;
                target = target || this.element;
                for (i in this.handles) {
                    if (this.handles[i].constructor === String) {
                        this.handles[i] = this.element.children(this.handles[i]).first().show();
                    } else if (this.handles[i].jquery || this.handles[i].nodeType) {
                        this.handles[i] = $(this.handles[i]);
                        this._on(this.handles[i], {
                            mousedown: that._mouseDown
                        });
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
                        axis = $(this.handles[i], this.element);
                        padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();
                        padPos = [ 'padding', /ne|nw|n/.test(i) ? 'Top' : /se|sw|s/.test(i) ? 'Bottom' : /^e$/.test(i) ? 'Right' : 'Left' ].join('');
                        target.css(padPos, padWrapper);
                        this._proportionallyResize();
                    }
                    this._handles = this._handles.add(this.handles[i]);
                }
            };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find('.ui-resizable-handle'));
            this._handles.disableSelection();
            this._handles.on('mouseover', (function() {
                if (!that.resizing) {
                    if (this.className) {
                        axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    that.axis = axis && axis[1] ? axis[1] : 'se';
                }
            }));
            if (o.autoHide) {
                this._handles.hide();
                this._addClass('ui-resizable-autohide');
            }
        },
        _removeHandles: function() {
            this._handles.remove();
        },
        _mouseCapture: function(event) {
            var i, handle, capture = false;
            for (i in this.handles) {
                handle = $(this.handles[i])[0];
                if (handle === event.target || $.contains(handle, event.target)) {
                    capture = true;
                }
            }
            return !this.options.disabled && capture;
        },
        _mouseStart: function(event) {
            var curleft, curtop, cursor, o = this.options, el = this.element;
            this.resizing = true;
            this._renderProxy();
            curleft = this._num(this.helper.css('left'));
            curtop = this._num(this.helper.css('top'));
            if (o.containment) {
                curleft += $(o.containment).scrollLeft() || 0;
                curtop += $(o.containment).scrollTop() || 0;
            }
            this.offset = this.helper.offset();
            this.position = {
                left: curleft,
                top: curtop
            };
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            };
            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            };
            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            };
            this.originalPosition = {
                left: curleft,
                top: curtop
            };
            this.originalMousePosition = {
                left: event.pageX,
                top: event.pageY
            };
            this.aspectRatio = typeof o.aspectRatio === 'number' ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            cursor = $('.ui-resizable-' + this.axis).css('cursor');
            $('body').css('cursor', cursor === 'auto' ? this.axis + '-resize' : cursor);
            this._addClass('ui-resizable-resizing');
            this._propagate('start', event);
            return true;
        },
        _mouseDrag: function(event) {
            var data, props, smp = this.originalMousePosition, a = this.axis, dx = event.pageX - smp.left || 0, dy = event.pageY - smp.top || 0, trigger = this._change[a];
            this._updatePrevProperties();
            if (!trigger) {
                return false;
            }
            data = trigger.apply(this, [ event, dx, dy ]);
            this._updateVirtualBoundaries(event.shiftKey);
            if (this._aspectRatio || event.shiftKey) {
                data = this._updateRatio(data, event);
            }
            data = this._respectSize(data, event);
            this._updateCache(data);
            this._propagate('resize', event);
            props = this._applyChanges();
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize();
            }
            if (!$.isEmptyObject(props)) {
                this._updatePrevProperties();
                this._trigger('resize', event, this.ui());
                this._applyChanges();
            }
            return false;
        },
        _mouseStop: function(event) {
            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top, o = this.options, that = this;
            if (this._helper) {
                pr = this._proportionallyResizeElements;
                ista = pr.length && /textarea/i.test(pr[0].nodeName);
                soffseth = ista && this._hasScroll(pr[0], 'left') ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;
                s = {
                    width: that.helper.width() - soffsetw,
                    height: that.helper.height() - soffseth
                };
                left = parseFloat(that.element.css('left')) + (that.position.left - that.originalPosition.left) || null;
                top = parseFloat(that.element.css('top')) + (that.position.top - that.originalPosition.top) || null;
                if (!o.animate) {
                    this.element.css($.extend(s, {
                        top: top,
                        left: left
                    }));
                }
                that.helper.height(that.size.height);
                that.helper.width(that.size.width);
                if (this._helper && !o.animate) {
                    this._proportionallyResize();
                }
            }
            $('body').css('cursor', 'auto');
            this._removeClass('ui-resizable-resizing');
            this._propagate('stop', event);
            if (this._helper) {
                this.helper.remove();
            }
            return false;
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },
        _applyChanges: function() {
            var props = {};
            if (this.position.top !== this.prevPosition.top) {
                props.top = this.position.top + 'px';
            }
            if (this.position.left !== this.prevPosition.left) {
                props.left = this.position.left + 'px';
            }
            if (this.size.width !== this.prevSize.width) {
                props.width = this.size.width + 'px';
            }
            if (this.size.height !== this.prevSize.height) {
                props.height = this.size.height + 'px';
            }
            this.helper.css(props);
            return props;
        },
        _updateVirtualBoundaries: function(forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b, o = this.options;
            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
            };
            if (this._aspectRatio || forceAspectRatio) {
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;
                if (pMinWidth > b.minWidth) {
                    b.minWidth = pMinWidth;
                }
                if (pMinHeight > b.minHeight) {
                    b.minHeight = pMinHeight;
                }
                if (pMaxWidth < b.maxWidth) {
                    b.maxWidth = pMaxWidth;
                }
                if (pMaxHeight < b.maxHeight) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },
        _updateCache: function(data) {
            this.offset = this.helper.offset();
            if (this._isNumber(data.left)) {
                this.position.left = data.left;
            }
            if (this._isNumber(data.top)) {
                this.position.top = data.top;
            }
            if (this._isNumber(data.height)) {
                this.size.height = data.height;
            }
            if (this._isNumber(data.width)) {
                this.size.width = data.width;
            }
        },
        _updateRatio: function(data) {
            var cpos = this.position, csize = this.size, a = this.axis;
            if (this._isNumber(data.height)) {
                data.width = data.height * this.aspectRatio;
            } else if (this._isNumber(data.width)) {
                data.height = data.width / this.aspectRatio;
            }
            if (a === 'sw') {
                data.left = cpos.left + (csize.width - data.width);
                data.top = null;
            }
            if (a === 'nw') {
                data.top = cpos.top + (csize.height - data.height);
                data.left = cpos.left + (csize.width - data.width);
            }
            return data;
        },
        _respectSize: function(data) {
            var o = this._vBoundaries, a = this.axis, ismaxw = this._isNumber(data.width) && o.maxWidth && o.maxWidth < data.width, ismaxh = this._isNumber(data.height) && o.maxHeight && o.maxHeight < data.height, isminw = this._isNumber(data.width) && o.minWidth && o.minWidth > data.width, isminh = this._isNumber(data.height) && o.minHeight && o.minHeight > data.height, dw = this.originalPosition.left + this.originalSize.width, dh = this.originalPosition.top + this.originalSize.height, cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            if (isminw) {
                data.width = o.minWidth;
            }
            if (isminh) {
                data.height = o.minHeight;
            }
            if (ismaxw) {
                data.width = o.maxWidth;
            }
            if (ismaxh) {
                data.height = o.maxHeight;
            }
            if (isminw && cw) {
                data.left = dw - o.minWidth;
            }
            if (ismaxw && cw) {
                data.left = dw - o.maxWidth;
            }
            if (isminh && ch) {
                data.top = dh - o.minHeight;
            }
            if (ismaxh && ch) {
                data.top = dh - o.maxHeight;
            }
            if (!data.width && !data.height && !data.left && data.top) {
                data.top = null;
            } else if (!data.width && !data.height && !data.top && data.left) {
                data.left = null;
            }
            return data;
        },
        _getPaddingPlusBorderDimensions: function(element) {
            var i = 0, widths = [], borders = [ element.css('borderTopWidth'), element.css('borderRightWidth'), element.css('borderBottomWidth'), element.css('borderLeftWidth') ], paddings = [ element.css('paddingTop'), element.css('paddingRight'), element.css('paddingBottom'), element.css('paddingLeft') ];
            for (;i < 4; i++) {
                widths[i] = parseFloat(borders[i]) || 0;
                widths[i] += parseFloat(paddings[i]) || 0;
            }
            return {
                height: widths[0] + widths[2],
                width: widths[1] + widths[3]
            };
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return;
            }
            var prel, i = 0, element = this.helper || this.element;
            for (;i < this._proportionallyResizeElements.length; i++) {
                prel = this._proportionallyResizeElements[i];
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions(prel);
                }
                prel.css({
                    height: element.height() - this.outerDimensions.height || 0,
                    width: element.width() - this.outerDimensions.width || 0
                });
            }
        },
        _renderProxy: function() {
            var el = this.element, o = this.options;
            this.elementOffset = el.offset();
            if (this._helper) {
                this.helper = this.helper || $('<div style=\'overflow:hidden;\'></div>');
                this._addClass(this.helper, this._helper);
                this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: 'absolute',
                    left: this.elementOffset.left + 'px',
                    top: this.elementOffset.top + 'px',
                    zIndex: ++o.zIndex
                });
                this.helper.appendTo('body').disableSelection();
            } else {
                this.helper = this.element;
            }
        },
        _change: {
            e: function(event, dx) {
                return {
                    width: this.originalSize.width + dx
                };
            },
            w: function(event, dx) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {
                    left: sp.left + dx,
                    width: cs.width - dx
                };
            },
            n: function(event, dx, dy) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {
                    top: sp.top + dy,
                    height: cs.height - dy
                };
            },
            s: function(event, dx, dy) {
                return {
                    height: this.originalSize.height + dy
                };
            },
            se: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ event, dx, dy ]));
            },
            sw: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ event, dx, dy ]));
            },
            ne: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ event, dx, dy ]));
            },
            nw: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ event, dx, dy ]));
            }
        },
        _propagate: function(n, event) {
            $.ui.plugin.call(this, n, [ event, this.ui() ]);
            n !== 'resize' && this._trigger(n, event, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    });
    $.ui.plugin.add('resizable', 'animate', {
        stop: function(event) {
            var that = $(this).resizable('instance'), o = that.options, pr = that._proportionallyResizeElements, ista = pr.length && /textarea/i.test(pr[0].nodeName), soffseth = ista && that._hasScroll(pr[0], 'left') ? 0 : that.sizeDiff.height, soffsetw = ista ? 0 : that.sizeDiff.width, style = {
                width: that.size.width - soffsetw,
                height: that.size.height - soffseth
            }, left = parseFloat(that.element.css('left')) + (that.position.left - that.originalPosition.left) || null, top = parseFloat(that.element.css('top')) + (that.position.top - that.originalPosition.top) || null;
            that.element.animate($.extend(style, top && left ? {
                top: top,
                left: left
            } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function() {
                    var data = {
                        width: parseFloat(that.element.css('width')),
                        height: parseFloat(that.element.css('height')),
                        top: parseFloat(that.element.css('top')),
                        left: parseFloat(that.element.css('left'))
                    };
                    if (pr && pr.length) {
                        $(pr[0]).css({
                            width: data.width,
                            height: data.height
                        });
                    }
                    that._updateCache(data);
                    that._propagate('resize', event);
                }
            });
        }
    });
    $.ui.plugin.add('resizable', 'containment', {
        start: function() {
            var element, p, co, ch, cw, width, height, that = $(this).resizable('instance'), o = that.options, el = that.element, oc = o.containment, ce = oc instanceof $ ? oc.get(0) : /parent/.test(oc) ? el.parent().get(0) : oc;
            if (!ce) {
                return;
            }
            that.containerElement = $(ce);
            if (/document/.test(oc) || oc === document) {
                that.containerOffset = {
                    left: 0,
                    top: 0
                };
                that.containerPosition = {
                    left: 0,
                    top: 0
                };
                that.parentData = {
                    element: $(document),
                    left: 0,
                    top: 0,
                    width: $(document).width(),
                    height: $(document).height() || document.body.parentNode.scrollHeight
                };
            } else {
                element = $(ce);
                p = [];
                $([ 'Top', 'Right', 'Left', 'Bottom' ]).each((function(i, name) {
                    p[i] = that._num(element.css('padding' + name));
                }));
                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: element.innerHeight() - p[3],
                    width: element.innerWidth() - p[1]
                };
                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = that._hasScroll(ce, 'left') ? ce.scrollWidth : cw;
                height = that._hasScroll(ce) ? ce.scrollHeight : ch;
                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },
        resize: function(event) {
            var woset, hoset, isParent, isOffsetRelative, that = $(this).resizable('instance'), o = that.options, co = that.containerOffset, cp = that.position, pRatio = that._aspectRatio || event.shiftKey, cop = {
                top: 0,
                left: 0
            }, ce = that.containerElement, continueResize = true;
            if (ce[0] !== document && /static/.test(ce.css('position'))) {
                cop = co;
            }
            if (cp.left < (that._helper ? co.left : 0)) {
                that.size.width = that.size.width + (that._helper ? that.position.left - co.left : that.position.left - cop.left);
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
                that.position.left = o.helper ? co.left : 0;
            }
            if (cp.top < (that._helper ? co.top : 0)) {
                that.size.height = that.size.height + (that._helper ? that.position.top - co.top : that.position.top);
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
                that.position.top = that._helper ? co.top : 0;
            }
            isParent = that.containerElement.get(0) === that.element.parent().get(0);
            isOffsetRelative = /relative|absolute/.test(that.containerElement.css('position'));
            if (isParent && isOffsetRelative) {
                that.offset.left = that.parentData.left + that.position.left;
                that.offset.top = that.parentData.top + that.position.top;
            } else {
                that.offset.left = that.element.offset().left;
                that.offset.top = that.element.offset().top;
            }
            woset = Math.abs(that.sizeDiff.width + (that._helper ? that.offset.left - cop.left : that.offset.left - co.left));
            hoset = Math.abs(that.sizeDiff.height + (that._helper ? that.offset.top - cop.top : that.offset.top - co.top));
            if (woset + that.size.width >= that.parentData.width) {
                that.size.width = that.parentData.width - woset;
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
            }
            if (hoset + that.size.height >= that.parentData.height) {
                that.size.height = that.parentData.height - hoset;
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
            }
            if (!continueResize) {
                that.position.left = that.prevPosition.left;
                that.position.top = that.prevPosition.top;
                that.size.width = that.prevSize.width;
                that.size.height = that.prevSize.height;
            }
        },
        stop: function() {
            var that = $(this).resizable('instance'), o = that.options, co = that.containerOffset, cop = that.containerPosition, ce = that.containerElement, helper = $(that.helper), ho = helper.offset(), w = helper.outerWidth() - that.sizeDiff.width, h = helper.outerHeight() - that.sizeDiff.height;
            if (that._helper && !o.animate && /relative/.test(ce.css('position'))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
            if (that._helper && !o.animate && /static/.test(ce.css('position'))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
        }
    });
    $.ui.plugin.add('resizable', 'alsoResize', {
        start: function() {
            var that = $(this).resizable('instance'), o = that.options;
            $(o.alsoResize).each((function() {
                var el = $(this);
                el.data('ui-resizable-alsoresize', {
                    width: parseFloat(el.width()),
                    height: parseFloat(el.height()),
                    left: parseFloat(el.css('left')),
                    top: parseFloat(el.css('top'))
                });
            }));
        },
        resize: function(event, ui) {
            var that = $(this).resizable('instance'), o = that.options, os = that.originalSize, op = that.originalPosition, delta = {
                height: that.size.height - os.height || 0,
                width: that.size.width - os.width || 0,
                top: that.position.top - op.top || 0,
                left: that.position.left - op.left || 0
            };
            $(o.alsoResize).each((function() {
                var el = $(this), start = $(this).data('ui-resizable-alsoresize'), style = {}, css = el.parents(ui.originalElement[0]).length ? [ 'width', 'height' ] : [ 'width', 'height', 'top', 'left' ];
                $.each(css, (function(i, prop) {
                    var sum = (start[prop] || 0) + (delta[prop] || 0);
                    if (sum && sum >= 0) {
                        style[prop] = sum || null;
                    }
                }));
                el.css(style);
            }));
        },
        stop: function() {
            $(this).removeData('ui-resizable-alsoresize');
        }
    });
    $.ui.plugin.add('resizable', 'ghost', {
        start: function() {
            var that = $(this).resizable('instance'), cs = that.size;
            that.ghost = that.originalElement.clone();
            that.ghost.css({
                opacity: .25,
                display: 'block',
                position: 'relative',
                height: cs.height,
                width: cs.width,
                margin: 0,
                left: 0,
                top: 0
            });
            that._addClass(that.ghost, 'ui-resizable-ghost');
            if ($.uiBackCompat !== false && typeof that.options.ghost === 'string') {
                that.ghost.addClass(this.options.ghost);
            }
            that.ghost.appendTo(that.helper);
        },
        resize: function() {
            var that = $(this).resizable('instance');
            if (that.ghost) {
                that.ghost.css({
                    position: 'relative',
                    height: that.size.height,
                    width: that.size.width
                });
            }
        },
        stop: function() {
            var that = $(this).resizable('instance');
            if (that.ghost && that.helper) {
                that.helper.get(0).removeChild(that.ghost.get(0));
            }
        }
    });
    $.ui.plugin.add('resizable', 'grid', {
        resize: function() {
            var outerDimensions, that = $(this).resizable('instance'), o = that.options, cs = that.size, os = that.originalSize, op = that.originalPosition, a = that.axis, grid = typeof o.grid === 'number' ? [ o.grid, o.grid ] : o.grid, gridX = grid[0] || 1, gridY = grid[1] || 1, ox = Math.round((cs.width - os.width) / gridX) * gridX, oy = Math.round((cs.height - os.height) / gridY) * gridY, newWidth = os.width + ox, newHeight = os.height + oy, isMaxWidth = o.maxWidth && o.maxWidth < newWidth, isMaxHeight = o.maxHeight && o.maxHeight < newHeight, isMinWidth = o.minWidth && o.minWidth > newWidth, isMinHeight = o.minHeight && o.minHeight > newHeight;
            o.grid = grid;
            if (isMinWidth) {
                newWidth += gridX;
            }
            if (isMinHeight) {
                newHeight += gridY;
            }
            if (isMaxWidth) {
                newWidth -= gridX;
            }
            if (isMaxHeight) {
                newHeight -= gridY;
            }
            if (/^(se|s|e)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if (/^(ne)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if (/^(sw)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                if (newHeight - gridY <= 0 || newWidth - gridX <= 0) {
                    outerDimensions = that._getPaddingPlusBorderDimensions(this);
                }
                if (newHeight - gridY > 0) {
                    that.size.height = newHeight;
                    that.position.top = op.top - oy;
                } else {
                    newHeight = gridY - outerDimensions.height;
                    that.size.height = newHeight;
                    that.position.top = op.top + os.height - newHeight;
                }
                if (newWidth - gridX > 0) {
                    that.size.width = newWidth;
                    that.position.left = op.left - ox;
                } else {
                    newWidth = gridX - outerDimensions.width;
                    that.size.width = newWidth;
                    that.position.left = op.left + os.width - newWidth;
                }
            }
        }
    });
    var widgetsResizable = $.ui.resizable;
    /*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.dialog', {
        version: '1.12.1',
        options: {
            appendTo: 'body',
            autoOpen: true,
            buttons: [],
            classes: {
                'ui-dialog': 'ui-corner-all',
                'ui-dialog-titlebar': 'ui-corner-all'
            },
            closeOnEscape: true,
            closeText: 'Close',
            draggable: true,
            hide: null,
            height: 'auto',
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: 'center',
                at: 'center',
                of: window,
                collision: 'fit',
                using: function(pos) {
                    var topOffset = $(this).css(pos).offset().top;
                    if (topOffset < 0) {
                        $(this).css('top', pos.top - topOffset);
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },
        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr('title');
            if (this.options.title == null && this.originalTitle != null) {
                this.options.title = this.originalTitle;
            }
            if (this.options.disabled) {
                this.options.disabled = false;
            }
            this._createWrapper();
            this.element.show().removeAttr('title').appendTo(this.uiDialog);
            this._addClass('ui-dialog-content', 'ui-widget-content');
            this._createTitlebar();
            this._createButtonPane();
            if (this.options.draggable && $.fn.draggable) {
                this._makeDraggable();
            }
            if (this.options.resizable && $.fn.resizable) {
                this._makeResizable();
            }
            this._isOpen = false;
            this._trackFocus();
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open();
            }
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            if (element && (element.jquery || element.nodeType)) {
                return $(element);
            }
            return this.document.find(element || 'body').eq(0);
        },
        _destroy: function() {
            var next, originalPosition = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            if (this.originalTitle) {
                this.element.attr('title', this.originalTitle);
            }
            next = originalPosition.parent.children().eq(originalPosition.index);
            if (next.length && next[0] !== this.element[0]) {
                next.before(this.element);
            } else {
                originalPosition.parent.append(this.element);
            }
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: $.noop,
        enable: $.noop,
        close: function(event) {
            var that = this;
            if (!this._isOpen || this._trigger('beforeClose', event) === false) {
                return;
            }
            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();
            if (!this.opener.filter(':focusable').trigger('focus').length) {
                $.ui.safeBlur($.ui.safeActiveElement(this.document[0]));
            }
            this._hide(this.uiDialog, this.options.hide, (function() {
                that._trigger('close', event);
            }));
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(event, silent) {
            var moved = false, zIndices = this.uiDialog.siblings('.ui-front:visible').map((function() {
                return +$(this).css('z-index');
            })).get(), zIndexMax = Math.max.apply(null, zIndices);
            if (zIndexMax >= +this.uiDialog.css('z-index')) {
                this.uiDialog.css('z-index', zIndexMax + 1);
                moved = true;
            }
            if (moved && !silent) {
                this._trigger('focus', event);
            }
            return moved;
        },
        open: function() {
            var that = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable();
                }
                return;
            }
            this._isOpen = true;
            this.opener = $($.ui.safeActiveElement(this.document[0]));
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);
            if (this.overlay) {
                this.overlay.css('z-index', this.uiDialog.css('z-index') - 1);
            }
            this._show(this.uiDialog, this.options.show, (function() {
                that._focusTabbable();
                that._trigger('focus');
            }));
            this._makeFocusTarget();
            this._trigger('open');
        },
        _focusTabbable: function() {
            var hasFocus = this._focusedElement;
            if (!hasFocus) {
                hasFocus = this.element.find('[autofocus]');
            }
            if (!hasFocus.length) {
                hasFocus = this.element.find(':tabbable');
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialogButtonPane.find(':tabbable');
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialogTitlebarClose.filter(':tabbable');
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialog;
            }
            hasFocus.eq(0).trigger('focus');
        },
        _keepFocus: function(event) {
            function checkFocus() {
                var activeElement = $.ui.safeActiveElement(this.document[0]), isActive = this.uiDialog[0] === activeElement || $.contains(this.uiDialog[0], activeElement);
                if (!isActive) {
                    this._focusTabbable();
                }
            }
            event.preventDefault();
            checkFocus.call(this);
            this._delay(checkFocus);
        },
        _createWrapper: function() {
            this.uiDialog = $('<div>').hide().attr({
                tabIndex: -1,
                role: 'dialog'
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, 'ui-dialog', 'ui-widget ui-widget-content ui-front');
            this._on(this.uiDialog, {
                keydown: function(event) {
                    if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) {
                        event.preventDefault();
                        this.close(event);
                        return;
                    }
                    if (event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented()) {
                        return;
                    }
                    var tabbables = this.uiDialog.find(':tabbable'), first = tabbables.filter(':first'), last = tabbables.filter(':last');
                    if ((event.target === last[0] || event.target === this.uiDialog[0]) && !event.shiftKey) {
                        this._delay((function() {
                            first.trigger('focus');
                        }));
                        event.preventDefault();
                    } else if ((event.target === first[0] || event.target === this.uiDialog[0]) && event.shiftKey) {
                        this._delay((function() {
                            last.trigger('focus');
                        }));
                        event.preventDefault();
                    }
                },
                mousedown: function(event) {
                    if (this._moveToTop(event)) {
                        this._focusTabbable();
                    }
                }
            });
            if (!this.element.find('[aria-describedby]').length) {
                this.uiDialog.attr({
                    'aria-describedby': this.element.uniqueId().attr('id')
                });
            }
        },
        _createTitlebar: function() {
            var uiDialogTitle;
            this.uiDialogTitlebar = $('<div>');
            this._addClass(this.uiDialogTitlebar, 'ui-dialog-titlebar', 'ui-widget-header ui-helper-clearfix');
            this._on(this.uiDialogTitlebar, {
                mousedown: function(event) {
                    if (!$(event.target).closest('.ui-dialog-titlebar-close')) {
                        this.uiDialog.trigger('focus');
                    }
                }
            });
            this.uiDialogTitlebarClose = $('<button type=\'button\'></button>').button({
                label: $('<a>').text(this.options.closeText).html(),
                icon: 'ui-icon-closethick',
                showLabel: false
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, 'ui-dialog-titlebar-close');
            this._on(this.uiDialogTitlebarClose, {
                click: function(event) {
                    event.preventDefault();
                    this.close(event);
                }
            });
            uiDialogTitle = $('<span>').uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(uiDialogTitle, 'ui-dialog-title');
            this._title(uiDialogTitle);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                'aria-labelledby': uiDialogTitle.attr('id')
            });
        },
        _title: function(title) {
            if (this.options.title) {
                title.text(this.options.title);
            } else {
                title.html('&#160;');
            }
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = $('<div>');
            this._addClass(this.uiDialogButtonPane, 'ui-dialog-buttonpane', 'ui-widget-content ui-helper-clearfix');
            this.uiButtonSet = $('<div>').appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, 'ui-dialog-buttonset');
            this._createButtons();
        },
        _createButtons: function() {
            var that = this, buttons = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if ($.isEmptyObject(buttons) || $.isArray(buttons) && !buttons.length) {
                this._removeClass(this.uiDialog, 'ui-dialog-buttons');
                return;
            }
            $.each(buttons, (function(name, props) {
                var click, buttonOptions;
                props = $.isFunction(props) ? {
                    click: props,
                    text: name
                } : props;
                props = $.extend({
                    type: 'button'
                }, props);
                click = props.click;
                buttonOptions = {
                    icon: props.icon,
                    iconPosition: props.iconPosition,
                    showLabel: props.showLabel,
                    icons: props.icons,
                    text: props.text
                };
                delete props.click;
                delete props.icon;
                delete props.iconPosition;
                delete props.showLabel;
                delete props.icons;
                if (typeof props.text === 'boolean') {
                    delete props.text;
                }
                $('<button></button>', props).button(buttonOptions).appendTo(that.uiButtonSet).on('click', (function() {
                    click.apply(that.element[0], arguments);
                }));
            }));
            this._addClass(this.uiDialog, 'ui-dialog-buttons');
            this.uiDialogButtonPane.appendTo(this.uiDialog);
        },
        _makeDraggable: function() {
            var that = this, options = this.options;
            function filteredUi(ui) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }
            this.uiDialog.draggable({
                cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
                handle: '.ui-dialog-titlebar',
                containment: 'document',
                start: function(event, ui) {
                    that._addClass($(this), 'ui-dialog-dragging');
                    that._blockFrames();
                    that._trigger('dragStart', event, filteredUi(ui));
                },
                drag: function(event, ui) {
                    that._trigger('drag', event, filteredUi(ui));
                },
                stop: function(event, ui) {
                    var left = ui.offset.left - that.document.scrollLeft(), top = ui.offset.top - that.document.scrollTop();
                    options.position = {
                        my: 'left top',
                        at: 'left' + (left >= 0 ? '+' : '') + left + ' ' + 'top' + (top >= 0 ? '+' : '') + top,
                        of: that.window
                    };
                    that._removeClass($(this), 'ui-dialog-dragging');
                    that._unblockFrames();
                    that._trigger('dragStop', event, filteredUi(ui));
                }
            });
        },
        _makeResizable: function() {
            var that = this, options = this.options, handles = options.resizable, position = this.uiDialog.css('position'), resizeHandles = typeof handles === 'string' ? handles : 'n,e,s,w,se,sw,ne,nw';
            function filteredUi(ui) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }
            this.uiDialog.resizable({
                cancel: '.ui-dialog-content',
                containment: 'document',
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function(event, ui) {
                    that._addClass($(this), 'ui-dialog-resizing');
                    that._blockFrames();
                    that._trigger('resizeStart', event, filteredUi(ui));
                },
                resize: function(event, ui) {
                    that._trigger('resize', event, filteredUi(ui));
                },
                stop: function(event, ui) {
                    var offset = that.uiDialog.offset(), left = offset.left - that.document.scrollLeft(), top = offset.top - that.document.scrollTop();
                    options.height = that.uiDialog.height();
                    options.width = that.uiDialog.width();
                    options.position = {
                        my: 'left top',
                        at: 'left' + (left >= 0 ? '+' : '') + left + ' ' + 'top' + (top >= 0 ? '+' : '') + top,
                        of: that.window
                    };
                    that._removeClass($(this), 'ui-dialog-resizing');
                    that._unblockFrames();
                    that._trigger('resizeStop', event, filteredUi(ui));
                }
            }).css('position', position);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(event) {
                    this._makeFocusTarget();
                    this._focusedElement = $(event.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var instances = this._trackingInstances(), exists = $.inArray(this, instances);
            if (exists !== -1) {
                instances.splice(exists, 1);
            }
        },
        _trackingInstances: function() {
            var instances = this.document.data('ui-dialog-instances');
            if (!instances) {
                instances = [];
                this.document.data('ui-dialog-instances', instances);
            }
            return instances;
        },
        _minHeight: function() {
            var options = this.options;
            return options.height === 'auto' ? options.minHeight : Math.min(options.minHeight, options.height);
        },
        _position: function() {
            var isVisible = this.uiDialog.is(':visible');
            if (!isVisible) {
                this.uiDialog.show();
            }
            this.uiDialog.position(this.options.position);
            if (!isVisible) {
                this.uiDialog.hide();
            }
        },
        _setOptions: function(options) {
            var that = this, resize = false, resizableOptions = {};
            $.each(options, (function(key, value) {
                that._setOption(key, value);
                if (key in that.sizeRelatedOptions) {
                    resize = true;
                }
                if (key in that.resizableRelatedOptions) {
                    resizableOptions[key] = value;
                }
            }));
            if (resize) {
                this._size();
                this._position();
            }
            if (this.uiDialog.is(':data(ui-resizable)')) {
                this.uiDialog.resizable('option', resizableOptions);
            }
        },
        _setOption: function(key, value) {
            var isDraggable, isResizable, uiDialog = this.uiDialog;
            if (key === 'disabled') {
                return;
            }
            this._super(key, value);
            if (key === 'appendTo') {
                this.uiDialog.appendTo(this._appendTo());
            }
            if (key === 'buttons') {
                this._createButtons();
            }
            if (key === 'closeText') {
                this.uiDialogTitlebarClose.button({
                    label: $('<a>').text('' + this.options.closeText).html()
                });
            }
            if (key === 'draggable') {
                isDraggable = uiDialog.is(':data(ui-draggable)');
                if (isDraggable && !value) {
                    uiDialog.draggable('destroy');
                }
                if (!isDraggable && value) {
                    this._makeDraggable();
                }
            }
            if (key === 'position') {
                this._position();
            }
            if (key === 'resizable') {
                isResizable = uiDialog.is(':data(ui-resizable)');
                if (isResizable && !value) {
                    uiDialog.resizable('destroy');
                }
                if (isResizable && typeof value === 'string') {
                    uiDialog.resizable('option', 'handles', value);
                }
                if (!isResizable && value !== false) {
                    this._makeResizable();
                }
            }
            if (key === 'title') {
                this._title(this.uiDialogTitlebar.find('.ui-dialog-title'));
            }
        },
        _size: function() {
            var nonContentHeight, minContentHeight, maxContentHeight, options = this.options;
            this.element.show().css({
                width: 'auto',
                minHeight: 0,
                maxHeight: 'none',
                height: 0
            });
            if (options.minWidth > options.width) {
                options.width = options.minWidth;
            }
            nonContentHeight = this.uiDialog.css({
                height: 'auto',
                width: options.width
            }).outerHeight();
            minContentHeight = Math.max(0, options.minHeight - nonContentHeight);
            maxContentHeight = typeof options.maxHeight === 'number' ? Math.max(0, options.maxHeight - nonContentHeight) : 'none';
            if (options.height === 'auto') {
                this.element.css({
                    minHeight: minContentHeight,
                    maxHeight: maxContentHeight,
                    height: 'auto'
                });
            } else {
                this.element.height(Math.max(0, options.height - nonContentHeight));
            }
            if (this.uiDialog.is(':data(ui-resizable)')) {
                this.uiDialog.resizable('option', 'minHeight', this._minHeight());
            }
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find('iframe').map((function() {
                var iframe = $(this);
                return $('<div>').css({
                    position: 'absolute',
                    width: iframe.outerWidth(),
                    height: iframe.outerHeight()
                }).appendTo(iframe.parent()).offset(iframe.offset())[0];
            }));
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },
        _allowInteraction: function(event) {
            if ($(event.target).closest('.ui-dialog').length) {
                return true;
            }
            return !!$(event.target).closest('.ui-datepicker').length;
        },
        _createOverlay: function() {
            if (!this.options.modal) {
                return;
            }
            var isOpening = true;
            this._delay((function() {
                isOpening = false;
            }));
            if (!this.document.data('ui-dialog-overlays')) {
                this._on(this.document, {
                    focusin: function(event) {
                        if (isOpening) {
                            return;
                        }
                        if (!this._allowInteraction(event)) {
                            event.preventDefault();
                            this._trackingInstances()[0]._focusTabbable();
                        }
                    }
                });
            }
            this.overlay = $('<div>').appendTo(this._appendTo());
            this._addClass(this.overlay, null, 'ui-widget-overlay ui-front');
            this._on(this.overlay, {
                mousedown: '_keepFocus'
            });
            this.document.data('ui-dialog-overlays', (this.document.data('ui-dialog-overlays') || 0) + 1);
        },
        _destroyOverlay: function() {
            if (!this.options.modal) {
                return;
            }
            if (this.overlay) {
                var overlays = this.document.data('ui-dialog-overlays') - 1;
                if (!overlays) {
                    this._off(this.document, 'focusin');
                    this.document.removeData('ui-dialog-overlays');
                } else {
                    this.document.data('ui-dialog-overlays', overlays);
                }
                this.overlay.remove();
                this.overlay = null;
            }
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget('ui.dialog', $.ui.dialog, {
            options: {
                dialogClass: ''
            },
            _createWrapper: function() {
                this._super();
                this.uiDialog.addClass(this.options.dialogClass);
            },
            _setOption: function(key, value) {
                if (key === 'dialogClass') {
                    this.uiDialog.removeClass(this.options.dialogClass).addClass(value);
                }
                this._superApply(arguments);
            }
        });
    }
    var widgetsDialog = $.ui.dialog;
    /*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.droppable', {
        version: '1.12.1',
        widgetEventPrefix: 'drop',
        options: {
            accept: '*',
            addClasses: true,
            greedy: false,
            scope: 'default',
            tolerance: 'intersect',
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var proportions, o = this.options, accept = o.accept;
            this.isover = false;
            this.isout = true;
            this.accept = $.isFunction(accept) ? accept : function(d) {
                return d.is(accept);
            };
            this.proportions = function() {
                if (arguments.length) {
                    proportions = arguments[0];
                } else {
                    return proportions ? proportions : proportions = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    };
                }
            };
            this._addToManager(o.scope);
            o.addClasses && this._addClass('ui-droppable');
        },
        _addToManager: function(scope) {
            $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [];
            $.ui.ddmanager.droppables[scope].push(this);
        },
        _splice: function(drop) {
            var i = 0;
            for (;i < drop.length; i++) {
                if (drop[i] === this) {
                    drop.splice(i, 1);
                }
            }
        },
        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[this.options.scope];
            this._splice(drop);
        },
        _setOption: function(key, value) {
            if (key === 'accept') {
                this.accept = $.isFunction(value) ? value : function(d) {
                    return d.is(value);
                };
            } else if (key === 'scope') {
                var drop = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(drop);
                this._addToManager(value);
            }
            this._super(key, value);
        },
        _activate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this._addActiveClass();
            if (draggable) {
                this._trigger('activate', event, this.ui(draggable));
            }
        },
        _deactivate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this._removeActiveClass();
            if (draggable) {
                this._trigger('deactivate', event, this.ui(draggable));
            }
        },
        _over: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return;
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                this._addHoverClass();
                this._trigger('over', event, this.ui(draggable));
            }
        },
        _out: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return;
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                this._removeHoverClass();
                this._trigger('out', event, this.ui(draggable));
            }
        },
        _drop: function(event, custom) {
            var draggable = custom || $.ui.ddmanager.current, childrenIntersection = false;
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return false;
            }
            this.element.find(':data(ui-droppable)').not('.ui-draggable-dragging').each((function() {
                var inst = $(this).droppable('instance');
                if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], draggable.currentItem || draggable.element) && intersect(draggable, $.extend(inst, {
                    offset: inst.element.offset()
                }), inst.options.tolerance, event)) {
                    childrenIntersection = true;
                    return false;
                }
            }));
            if (childrenIntersection) {
                return false;
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                this._removeActiveClass();
                this._removeHoverClass();
                this._trigger('drop', event, this.ui(draggable));
                return this.element;
            }
            return false;
        },
        ui: function(c) {
            return {
                draggable: c.currentItem || c.element,
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        },
        _addHoverClass: function() {
            this._addClass('ui-droppable-hover');
        },
        _removeHoverClass: function() {
            this._removeClass('ui-droppable-hover');
        },
        _addActiveClass: function() {
            this._addClass('ui-droppable-active');
        },
        _removeActiveClass: function() {
            this._removeClass('ui-droppable-active');
        }
    });
    var intersect = $.ui.intersect = function() {
        function isOverAxis(x, reference, size) {
            return x >= reference && x < reference + size;
        }
        return function(draggable, droppable, toleranceMode, event) {
            if (!droppable.offset) {
                return false;
            }
            var x1 = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left, y1 = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top, x2 = x1 + draggable.helperProportions.width, y2 = y1 + draggable.helperProportions.height, l = droppable.offset.left, t = droppable.offset.top, r = l + droppable.proportions().width, b = t + droppable.proportions().height;
            switch (toleranceMode) {
              case 'fit':
                return l <= x1 && x2 <= r && t <= y1 && y2 <= b;

              case 'intersect':
                return l < x1 + draggable.helperProportions.width / 2 && x2 - draggable.helperProportions.width / 2 < r && t < y1 + draggable.helperProportions.height / 2 && y2 - draggable.helperProportions.height / 2 < b;

              case 'pointer':
                return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width);

              case 'touch':
                return (y1 >= t && y1 <= b || y2 >= t && y2 <= b || y1 < t && y2 > b) && (x1 >= l && x1 <= r || x2 >= l && x2 <= r || x1 < l && x2 > r);

              default:
                return false;
            }
        };
    }();
    $.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(t, event) {
            var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [], type = event ? event.type : null, list = (t.currentItem || t.element).find(':data(ui-droppable)').addBack();
            droppablesLoop: for (i = 0; i < m.length; i++) {
                if (m[i].options.disabled || t && !m[i].accept.call(m[i].element[0], t.currentItem || t.element)) {
                    continue;
                }
                for (j = 0; j < list.length; j++) {
                    if (list[j] === m[i].element[0]) {
                        m[i].proportions().height = 0;
                        continue droppablesLoop;
                    }
                }
                m[i].visible = m[i].element.css('display') !== 'none';
                if (!m[i].visible) {
                    continue;
                }
                if (type === 'mousedown') {
                    m[i]._activate.call(m[i], event);
                }
                m[i].offset = m[i].element.offset();
                m[i].proportions({
                    width: m[i].element[0].offsetWidth,
                    height: m[i].element[0].offsetHeight
                });
            }
        },
        drop: function(draggable, event) {
            var dropped = false;
            $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), (function() {
                if (!this.options) {
                    return;
                }
                if (!this.options.disabled && this.visible && intersect(draggable, this, this.options.tolerance, event)) {
                    dropped = this._drop.call(this, event) || dropped;
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, event);
                }
            }));
            return dropped;
        },
        dragStart: function(draggable, event) {
            draggable.element.parentsUntil('body').on('scroll.droppable', (function() {
                if (!draggable.options.refreshPositions) {
                    $.ui.ddmanager.prepareOffsets(draggable, event);
                }
            }));
        },
        drag: function(draggable, event) {
            if (draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
            $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], (function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return;
                }
                var parentInstance, scope, parent, intersects = intersect(draggable, this, this.options.tolerance, event), c = !intersects && this.isover ? 'isout' : intersects && !this.isover ? 'isover' : null;
                if (!c) {
                    return;
                }
                if (this.options.greedy) {
                    scope = this.options.scope;
                    parent = this.element.parents(':data(ui-droppable)').filter((function() {
                        return $(this).droppable('instance').options.scope === scope;
                    }));
                    if (parent.length) {
                        parentInstance = $(parent[0]).droppable('instance');
                        parentInstance.greedyChild = c === 'isover';
                    }
                }
                if (parentInstance && c === 'isover') {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call(parentInstance, event);
                }
                this[c] = true;
                this[c === 'isout' ? 'isover' : 'isout'] = false;
                this[c === 'isover' ? '_over' : '_out'].call(this, event);
                if (parentInstance && c === 'isout') {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call(parentInstance, event);
                }
            }));
        },
        dragStop: function(draggable, event) {
            draggable.element.parentsUntil('body').off('scroll.droppable');
            if (!draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
        }
    };
    if ($.uiBackCompat !== false) {
        $.widget('ui.droppable', $.ui.droppable, {
            options: {
                hoverClass: false,
                activeClass: false
            },
            _addActiveClass: function() {
                this._super();
                if (this.options.activeClass) {
                    this.element.addClass(this.options.activeClass);
                }
            },
            _removeActiveClass: function() {
                this._super();
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass);
                }
            },
            _addHoverClass: function() {
                this._super();
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass);
                }
            },
            _removeHoverClass: function() {
                this._super();
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
            }
        });
    }
    var widgetsDroppable = $.ui.droppable;
    /*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetsProgressbar = $.widget('ui.progressbar', {
        version: '1.12.1',
        options: {
            classes: {
                'ui-progressbar': 'ui-corner-all',
                'ui-progressbar-value': 'ui-corner-left',
                'ui-progressbar-complete': 'ui-corner-right'
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: 'progressbar',
                'aria-valuemin': this.min
            });
            this._addClass('ui-progressbar', 'ui-widget ui-widget-content');
            this.valueDiv = $('<div>').appendTo(this.element);
            this._addClass(this.valueDiv, 'ui-progressbar-value', 'ui-widget-header');
            this._refreshValue();
        },
        _destroy: function() {
            this.element.removeAttr('role aria-valuemin aria-valuemax aria-valuenow');
            this.valueDiv.remove();
        },
        value: function(newValue) {
            if (newValue === undefined) {
                return this.options.value;
            }
            this.options.value = this._constrainedValue(newValue);
            this._refreshValue();
        },
        _constrainedValue: function(newValue) {
            if (newValue === undefined) {
                newValue = this.options.value;
            }
            this.indeterminate = newValue === false;
            if (typeof newValue !== 'number') {
                newValue = 0;
            }
            return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, newValue));
        },
        _setOptions: function(options) {
            var value = options.value;
            delete options.value;
            this._super(options);
            this.options.value = this._constrainedValue(value);
            this._refreshValue();
        },
        _setOption: function(key, value) {
            if (key === 'max') {
                value = Math.max(this.min, value);
            }
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.element.attr('aria-disabled', value);
            this._toggleClass(null, 'ui-state-disabled', !!value);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var value = this.options.value, percentage = this._percentage();
            this.valueDiv.toggle(this.indeterminate || value > this.min).width(percentage.toFixed(0) + '%');
            this._toggleClass(this.valueDiv, 'ui-progressbar-complete', null, value === this.options.max)._toggleClass('ui-progressbar-indeterminate', null, this.indeterminate);
            if (this.indeterminate) {
                this.element.removeAttr('aria-valuenow');
                if (!this.overlayDiv) {
                    this.overlayDiv = $('<div>').appendTo(this.valueDiv);
                    this._addClass(this.overlayDiv, 'ui-progressbar-overlay');
                }
            } else {
                this.element.attr({
                    'aria-valuemax': this.options.max,
                    'aria-valuenow': value
                });
                if (this.overlayDiv) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null;
                }
            }
            if (this.oldValue !== value) {
                this.oldValue = value;
                this._trigger('change');
            }
            if (value === this.options.max) {
                this._trigger('complete');
            }
        }
    });
    /*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetsSelectable = $.widget('ui.selectable', $.ui.mouse, {
        version: '1.12.1',
        options: {
            appendTo: 'body',
            autoRefresh: true,
            distance: 0,
            filter: '*',
            tolerance: 'touch',
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var that = this;
            this._addClass('ui-selectable');
            this.dragged = false;
            this.refresh = function() {
                that.elementPos = $(that.element[0]).offset();
                that.selectees = $(that.options.filter, that.element[0]);
                that._addClass(that.selectees, 'ui-selectee');
                that.selectees.each((function() {
                    var $this = $(this), selecteeOffset = $this.offset(), pos = {
                        left: selecteeOffset.left - that.elementPos.left,
                        top: selecteeOffset.top - that.elementPos.top
                    };
                    $.data(this, 'selectable-item', {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass('ui-selected'),
                        selecting: $this.hasClass('ui-selecting'),
                        unselecting: $this.hasClass('ui-unselecting')
                    });
                }));
            };
            this.refresh();
            this._mouseInit();
            this.helper = $('<div>');
            this._addClass(this.helper, 'ui-selectable-helper');
        },
        _destroy: function() {
            this.selectees.removeData('selectable-item');
            this._mouseDestroy();
        },
        _mouseStart: function(event) {
            var that = this, options = this.options;
            this.opos = [ event.pageX, event.pageY ];
            this.elementPos = $(this.element[0]).offset();
            if (this.options.disabled) {
                return;
            }
            this.selectees = $(options.filter, this.element[0]);
            this._trigger('start', event);
            $(options.appendTo).append(this.helper);
            this.helper.css({
                left: event.pageX,
                top: event.pageY,
                width: 0,
                height: 0
            });
            if (options.autoRefresh) {
                this.refresh();
            }
            this.selectees.filter('.ui-selected').each((function() {
                var selectee = $.data(this, 'selectable-item');
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    that._removeClass(selectee.$element, 'ui-selected');
                    selectee.selected = false;
                    that._addClass(selectee.$element, 'ui-unselecting');
                    selectee.unselecting = true;
                    that._trigger('unselecting', event, {
                        unselecting: selectee.element
                    });
                }
            }));
            $(event.target).parents().addBack().each((function() {
                var doSelect, selectee = $.data(this, 'selectable-item');
                if (selectee) {
                    doSelect = !event.metaKey && !event.ctrlKey || !selectee.$element.hasClass('ui-selected');
                    that._removeClass(selectee.$element, doSelect ? 'ui-unselecting' : 'ui-selected')._addClass(selectee.$element, doSelect ? 'ui-selecting' : 'ui-unselecting');
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;
                    if (doSelect) {
                        that._trigger('selecting', event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger('unselecting', event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            }));
        },
        _mouseDrag: function(event) {
            this.dragged = true;
            if (this.options.disabled) {
                return;
            }
            var tmp, that = this, options = this.options, x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
            if (x1 > x2) {
                tmp = x2;
                x2 = x1;
                x1 = tmp;
            }
            if (y1 > y2) {
                tmp = y2;
                y2 = y1;
                y1 = tmp;
            }
            this.helper.css({
                left: x1,
                top: y1,
                width: x2 - x1,
                height: y2 - y1
            });
            this.selectees.each((function() {
                var selectee = $.data(this, 'selectable-item'), hit = false, offset = {};
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }
                offset.left = selectee.left + that.elementPos.left;
                offset.right = selectee.right + that.elementPos.left;
                offset.top = selectee.top + that.elementPos.top;
                offset.bottom = selectee.bottom + that.elementPos.top;
                if (options.tolerance === 'touch') {
                    hit = !(offset.left > x2 || offset.right < x1 || offset.top > y2 || offset.bottom < y1);
                } else if (options.tolerance === 'fit') {
                    hit = offset.left > x1 && offset.right < x2 && offset.top > y1 && offset.bottom < y2;
                }
                if (hit) {
                    if (selectee.selected) {
                        that._removeClass(selectee.$element, 'ui-selected');
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        that._removeClass(selectee.$element, 'ui-unselecting');
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        that._addClass(selectee.$element, 'ui-selecting');
                        selectee.selecting = true;
                        that._trigger('selecting', event, {
                            selecting: selectee.element
                        });
                    }
                } else {
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            that._removeClass(selectee.$element, 'ui-selecting');
                            selectee.selecting = false;
                            that._addClass(selectee.$element, 'ui-selected');
                            selectee.selected = true;
                        } else {
                            that._removeClass(selectee.$element, 'ui-selecting');
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                that._addClass(selectee.$element, 'ui-unselecting');
                                selectee.unselecting = true;
                            }
                            that._trigger('unselecting', event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            that._removeClass(selectee.$element, 'ui-selected');
                            selectee.selected = false;
                            that._addClass(selectee.$element, 'ui-unselecting');
                            selectee.unselecting = true;
                            that._trigger('unselecting', event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            }));
            return false;
        },
        _mouseStop: function(event) {
            var that = this;
            this.dragged = false;
            $('.ui-unselecting', this.element[0]).each((function() {
                var selectee = $.data(this, 'selectable-item');
                that._removeClass(selectee.$element, 'ui-unselecting');
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger('unselected', event, {
                    unselected: selectee.element
                });
            }));
            $('.ui-selecting', this.element[0]).each((function() {
                var selectee = $.data(this, 'selectable-item');
                that._removeClass(selectee.$element, 'ui-selecting')._addClass(selectee.$element, 'ui-selected');
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger('selected', event, {
                    selected: selectee.element
                });
            }));
            this._trigger('stop', event);
            this.helper.remove();
            return false;
        }
    });
    /*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetsSelectmenu = $.widget('ui.selectmenu', [ $.ui.formResetMixin, {
        version: '1.12.1',
        defaultElement: '<select>',
        options: {
            appendTo: null,
            classes: {
                'ui-selectmenu-button-open': 'ui-corner-top',
                'ui-selectmenu-button-closed': 'ui-corner-all'
            },
            disabled: null,
            icons: {
                button: 'ui-icon-triangle-1-s'
            },
            position: {
                my: 'left top',
                at: 'left bottom',
                collision: 'none'
            },
            width: false,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var selectmenuId = this.element.uniqueId().attr('id');
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + '-button',
                menu: selectmenuId + '-menu'
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = false;
            this.menuItems = $();
        },
        _drawButton: function() {
            var icon, that = this, item = this._parseOption(this.element.find('option:selected'), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr('for', this.ids.button);
            this._on(this.labels, {
                click: function(event) {
                    this.button.focus();
                    event.preventDefault();
                }
            });
            this.element.hide();
            this.button = $('<span>', {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: 'combobox',
                'aria-expanded': 'false',
                'aria-autocomplete': 'list',
                'aria-owns': this.ids.menu,
                'aria-haspopup': 'true',
                title: this.element.attr('title')
            }).insertAfter(this.element);
            this._addClass(this.button, 'ui-selectmenu-button ui-selectmenu-button-closed', 'ui-button ui-widget');
            icon = $('<span>').appendTo(this.button);
            this._addClass(icon, 'ui-selectmenu-icon', 'ui-icon ' + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(item).appendTo(this.button);
            if (this.options.width !== false) {
                this._resizeButton();
            }
            this._on(this.button, this._buttonEvents);
            this.button.one('focusin', (function() {
                if (!that._rendered) {
                    that._refreshMenu();
                }
            }));
        },
        _drawMenu: function() {
            var that = this;
            this.menu = $('<ul>', {
                'aria-hidden': 'true',
                'aria-labelledby': this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = $('<div>').append(this.menu);
            this._addClass(this.menuWrap, 'ui-selectmenu-menu', 'ui-front');
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    'ui-menu': 'ui-corner-bottom'
                },
                role: 'listbox',
                select: function(event, ui) {
                    event.preventDefault();
                    that._setSelection();
                    that._select(ui.item.data('ui-selectmenu-item'), event);
                },
                focus: function(event, ui) {
                    var item = ui.item.data('ui-selectmenu-item');
                    if (that.focusIndex != null && item.index !== that.focusIndex) {
                        that._trigger('focus', event, {
                            item: item
                        });
                        if (!that.isOpen) {
                            that._select(item, event);
                        }
                    }
                    that.focusIndex = item.index;
                    that.button.attr('aria-activedescendant', that.menuItems.eq(item.index).attr('id'));
                }
            }).menu('instance');
            this.menuInstance._off(this.menu, 'mouseleave');
            this.menuInstance._closeOnDocumentClick = function() {
                return false;
            };
            this.menuInstance._isDivider = function() {
                return false;
            };
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data('ui-selectmenu-item') || {}));
            if (this.options.width === null) {
                this._resizeButton();
            }
        },
        _refreshMenu: function() {
            var item, options = this.element.find('option');
            this.menu.empty();
            this._parseOptions(options);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find('li').not('.ui-selectmenu-optgroup').find('.ui-menu-item-wrapper');
            this._rendered = true;
            if (!options.length) {
                return;
            }
            item = this._getSelectedItem();
            this.menuInstance.focus(null, item);
            this._setAria(item.data('ui-selectmenu-item'));
            this._setOption('disabled', this.element.prop('disabled'));
        },
        open: function(event) {
            if (this.options.disabled) {
                return;
            }
            if (!this._rendered) {
                this._refreshMenu();
            } else {
                this._removeClass(this.menu.find('.ui-state-active'), null, 'ui-state-active');
                this.menuInstance.focus(null, this._getSelectedItem());
            }
            if (!this.menuItems.length) {
                return;
            }
            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();
            this._on(this.document, this._documentClick);
            this._trigger('open', event);
        },
        _position: function() {
            this.menuWrap.position($.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(event) {
            if (!this.isOpen) {
                return;
            }
            this.isOpen = false;
            this._toggleAttr();
            this.range = null;
            this._off(this.document);
            this._trigger('close', event);
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(item) {
            var buttonItem = $('<span>');
            this._setText(buttonItem, item.label);
            this._addClass(buttonItem, 'ui-selectmenu-text');
            return buttonItem;
        },
        _renderMenu: function(ul, items) {
            var that = this, currentOptgroup = '';
            $.each(items, (function(index, item) {
                var li;
                if (item.optgroup !== currentOptgroup) {
                    li = $('<li>', {
                        text: item.optgroup
                    });
                    that._addClass(li, 'ui-selectmenu-optgroup', 'ui-menu-divider' + (item.element.parent('optgroup').prop('disabled') ? ' ui-state-disabled' : ''));
                    li.appendTo(ul);
                    currentOptgroup = item.optgroup;
                }
                that._renderItemData(ul, item);
            }));
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data('ui-selectmenu-item', item);
        },
        _renderItem: function(ul, item) {
            var li = $('<li>'), wrapper = $('<div>', {
                title: item.element.attr('title')
            });
            if (item.disabled) {
                this._addClass(li, null, 'ui-state-disabled');
            }
            this._setText(wrapper, item.label);
            return li.append(wrapper).appendTo(ul);
        },
        _setText: function(element, value) {
            if (value) {
                element.text(value);
            } else {
                element.html('&#160;');
            }
        },
        _move: function(direction, event) {
            var item, next, filter = '.ui-menu-item';
            if (this.isOpen) {
                item = this.menuItems.eq(this.focusIndex).parent('li');
            } else {
                item = this.menuItems.eq(this.element[0].selectedIndex).parent('li');
                filter += ':not(.ui-state-disabled)';
            }
            if (direction === 'first' || direction === 'last') {
                next = item[direction === 'first' ? 'prevAll' : 'nextAll'](filter).eq(-1);
            } else {
                next = item[direction + 'All'](filter).eq(0);
            }
            if (next.length) {
                this.menuInstance.focus(event, next);
            }
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent('li');
        },
        _toggle: function(event) {
            this[this.isOpen ? 'close' : 'open'](event);
        },
        _setSelection: function() {
            var selection;
            if (!this.range) {
                return;
            }
            if (window.getSelection) {
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(this.range);
            } else {
                this.range.select();
            }
            this.button.focus();
        },
        _documentClick: {
            mousedown: function(event) {
                if (!this.isOpen) {
                    return;
                }
                if (!$(event.target).closest('.ui-selectmenu-menu, #' + $.ui.escapeSelector(this.ids.button)).length) {
                    this.close(event);
                }
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var selection;
                if (window.getSelection) {
                    selection = window.getSelection();
                    if (selection.rangeCount) {
                        this.range = selection.getRangeAt(0);
                    }
                } else {
                    this.range = document.selection.createRange();
                }
            },
            click: function(event) {
                this._setSelection();
                this._toggle(event);
            },
            keydown: function(event) {
                var preventDefault = true;
                switch (event.keyCode) {
                  case $.ui.keyCode.TAB:
                  case $.ui.keyCode.ESCAPE:
                    this.close(event);
                    preventDefault = false;
                    break;

                  case $.ui.keyCode.ENTER:
                    if (this.isOpen) {
                        this._selectFocusedItem(event);
                    }
                    break;

                  case $.ui.keyCode.UP:
                    if (event.altKey) {
                        this._toggle(event);
                    } else {
                        this._move('prev', event);
                    }
                    break;

                  case $.ui.keyCode.DOWN:
                    if (event.altKey) {
                        this._toggle(event);
                    } else {
                        this._move('next', event);
                    }
                    break;

                  case $.ui.keyCode.SPACE:
                    if (this.isOpen) {
                        this._selectFocusedItem(event);
                    } else {
                        this._toggle(event);
                    }
                    break;

                  case $.ui.keyCode.LEFT:
                    this._move('prev', event);
                    break;

                  case $.ui.keyCode.RIGHT:
                    this._move('next', event);
                    break;

                  case $.ui.keyCode.HOME:
                  case $.ui.keyCode.PAGE_UP:
                    this._move('first', event);
                    break;

                  case $.ui.keyCode.END:
                  case $.ui.keyCode.PAGE_DOWN:
                    this._move('last', event);
                    break;

                  default:
                    this.menu.trigger(event);
                    preventDefault = false;
                }
                if (preventDefault) {
                    event.preventDefault();
                }
            }
        },
        _selectFocusedItem: function(event) {
            var item = this.menuItems.eq(this.focusIndex).parent('li');
            if (!item.hasClass('ui-state-disabled')) {
                this._select(item.data('ui-selectmenu-item'), event);
            }
        },
        _select: function(item, event) {
            var oldIndex = this.element[0].selectedIndex;
            this.element[0].selectedIndex = item.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(item));
            this._setAria(item);
            this._trigger('select', event, {
                item: item
            });
            if (item.index !== oldIndex) {
                this._trigger('change', event, {
                    item: item
                });
            }
            this.close(event);
        },
        _setAria: function(item) {
            var id = this.menuItems.eq(item.index).attr('id');
            this.button.attr({
                'aria-labelledby': id,
                'aria-activedescendant': id
            });
            this.menu.attr('aria-activedescendant', id);
        },
        _setOption: function(key, value) {
            if (key === 'icons') {
                var icon = this.button.find('span.ui-icon');
                this._removeClass(icon, null, this.options.icons.button)._addClass(icon, null, value.button);
            }
            this._super(key, value);
            if (key === 'appendTo') {
                this.menuWrap.appendTo(this._appendTo());
            }
            if (key === 'width') {
                this._resizeButton();
            }
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.menuInstance.option('disabled', value);
            this.button.attr('aria-disabled', value);
            this._toggleClass(this.button, null, 'ui-state-disabled', value);
            this.element.prop('disabled', value);
            if (value) {
                this.button.attr('tabindex', -1);
                this.close();
            } else {
                this.button.attr('tabindex', 0);
            }
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            if (element) {
                element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0);
            }
            if (!element || !element[0]) {
                element = this.element.closest('.ui-front, dialog');
            }
            if (!element.length) {
                element = this.document[0].body;
            }
            return element;
        },
        _toggleAttr: function() {
            this.button.attr('aria-expanded', this.isOpen);
            this._removeClass(this.button, 'ui-selectmenu-button-' + (this.isOpen ? 'closed' : 'open'))._addClass(this.button, 'ui-selectmenu-button-' + (this.isOpen ? 'open' : 'closed'))._toggleClass(this.menuWrap, 'ui-selectmenu-open', null, this.isOpen);
            this.menu.attr('aria-hidden', !this.isOpen);
        },
        _resizeButton: function() {
            var width = this.options.width;
            if (width === false) {
                this.button.css('width', '');
                return;
            }
            if (width === null) {
                width = this.element.show().outerWidth();
                this.element.hide();
            }
            this.button.outerWidth(width);
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width('').outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var options = this._super();
            options.disabled = this.element.prop('disabled');
            return options;
        },
        _parseOptions: function(options) {
            var that = this, data = [];
            options.each((function(index, item) {
                data.push(that._parseOption($(item), index));
            }));
            this.items = data;
        },
        _parseOption: function(option, index) {
            var optgroup = option.parent('optgroup');
            return {
                element: option,
                index: index,
                value: option.val(),
                label: option.text(),
                optgroup: optgroup.attr('label') || '',
                disabled: optgroup.prop('disabled') || option.prop('disabled')
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr('for', this.ids.element);
        }
    } ]);
    /*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetsSlider = $.widget('ui.slider', $.ui.mouse, {
        version: '1.12.1',
        widgetEventPrefix: 'slide',
        options: {
            animate: false,
            classes: {
                'ui-slider': 'ui-corner-all',
                'ui-slider-handle': 'ui-corner-all',
                'ui-slider-range': 'ui-corner-all ui-widget-header'
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: 'horizontal',
            range: false,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass('ui-slider ui-slider-' + this.orientation, 'ui-widget ui-widget-content');
            this._refresh();
            this._animateOff = false;
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },
        _createHandles: function() {
            var i, handleCount, options = this.options, existingHandles = this.element.find('.ui-slider-handle'), handle = '<span tabindex=\'0\'></span>', handles = [];
            handleCount = options.values && options.values.length || 1;
            if (existingHandles.length > handleCount) {
                existingHandles.slice(handleCount).remove();
                existingHandles = existingHandles.slice(0, handleCount);
            }
            for (i = existingHandles.length; i < handleCount; i++) {
                handles.push(handle);
            }
            this.handles = existingHandles.add($(handles.join('')).appendTo(this.element));
            this._addClass(this.handles, 'ui-slider-handle', 'ui-state-default');
            this.handle = this.handles.eq(0);
            this.handles.each((function(i) {
                $(this).data('ui-slider-handle-index', i).attr('tabIndex', 0);
            }));
        },
        _createRange: function() {
            var options = this.options;
            if (options.range) {
                if (options.range === true) {
                    if (!options.values) {
                        options.values = [ this._valueMin(), this._valueMin() ];
                    } else if (options.values.length && options.values.length !== 2) {
                        options.values = [ options.values[0], options.values[0] ];
                    } else if ($.isArray(options.values)) {
                        options.values = options.values.slice(0);
                    }
                }
                if (!this.range || !this.range.length) {
                    this.range = $('<div>').appendTo(this.element);
                    this._addClass(this.range, 'ui-slider-range');
                } else {
                    this._removeClass(this.range, 'ui-slider-range-min ui-slider-range-max');
                    this.range.css({
                        left: '',
                        bottom: ''
                    });
                }
                if (options.range === 'min' || options.range === 'max') {
                    this._addClass(this.range, 'ui-slider-range-' + options.range);
                }
            } else {
                if (this.range) {
                    this.range.remove();
                }
                this.range = null;
            }
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove();
            if (this.range) {
                this.range.remove();
            }
            this._mouseDestroy();
        },
        _mouseCapture: function(event) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle, that = this, o = this.options;
            if (o.disabled) {
                return false;
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            position = {
                x: event.pageX,
                y: event.pageY
            };
            normValue = this._normValueFromMouse(position);
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each((function(i) {
                var thisDistance = Math.abs(normValue - that.values(i));
                if (distance > thisDistance || distance === thisDistance && (i === that._lastChangedValue || that.values(i) === o.min)) {
                    distance = thisDistance;
                    closestHandle = $(this);
                    index = i;
                }
            }));
            allowed = this._start(event, index);
            if (allowed === false) {
                return false;
            }
            this._mouseSliding = true;
            this._handleIndex = index;
            this._addClass(closestHandle, null, 'ui-state-active');
            closestHandle.trigger('focus');
            offset = closestHandle.offset();
            mouseOverHandle = !$(event.target).parents().addBack().is('.ui-slider-handle');
            this._clickOffset = mouseOverHandle ? {
                left: 0,
                top: 0
            } : {
                left: event.pageX - offset.left - closestHandle.width() / 2,
                top: event.pageY - offset.top - closestHandle.height() / 2 - (parseInt(closestHandle.css('borderTopWidth'), 10) || 0) - (parseInt(closestHandle.css('borderBottomWidth'), 10) || 0) + (parseInt(closestHandle.css('marginTop'), 10) || 0)
            };
            if (!this.handles.hasClass('ui-state-hover')) {
                this._slide(event, index, normValue);
            }
            this._animateOff = true;
            return true;
        },
        _mouseStart: function() {
            return true;
        },
        _mouseDrag: function(event) {
            var position = {
                x: event.pageX,
                y: event.pageY
            }, normValue = this._normValueFromMouse(position);
            this._slide(event, this._handleIndex, normValue);
            return false;
        },
        _mouseStop: function(event) {
            this._removeClass(this.handles, null, 'ui-state-active');
            this._mouseSliding = false;
            this._stop(event, this._handleIndex);
            this._change(event, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false;
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === 'vertical' ? 'vertical' : 'horizontal';
        },
        _normValueFromMouse: function(position) {
            var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse;
            if (this.orientation === 'horizontal') {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            }
            percentMouse = pixelMouse / pixelTotal;
            if (percentMouse > 1) {
                percentMouse = 1;
            }
            if (percentMouse < 0) {
                percentMouse = 0;
            }
            if (this.orientation === 'vertical') {
                percentMouse = 1 - percentMouse;
            }
            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;
            return this._trimAlignValue(valueMouse);
        },
        _uiHash: function(index, value, values) {
            var uiHash = {
                handle: this.handles[index],
                handleIndex: index,
                value: value !== undefined ? value : this.value()
            };
            if (this._hasMultipleValues()) {
                uiHash.value = value !== undefined ? value : this.values(index);
                uiHash.values = values || this.values();
            }
            return uiHash;
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },
        _start: function(event, index) {
            return this._trigger('start', event, this._uiHash(index));
        },
        _slide: function(event, index, newVal) {
            var allowed, otherVal, currentValue = this.value(), newValues = this.values();
            if (this._hasMultipleValues()) {
                otherVal = this.values(index ? 0 : 1);
                currentValue = this.values(index);
                if (this.options.values.length === 2 && this.options.range === true) {
                    newVal = index === 0 ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal);
                }
                newValues[index] = newVal;
            }
            if (newVal === currentValue) {
                return;
            }
            allowed = this._trigger('slide', event, this._uiHash(index, newVal, newValues));
            if (allowed === false) {
                return;
            }
            if (this._hasMultipleValues()) {
                this.values(index, newVal);
            } else {
                this.value(newVal);
            }
        },
        _stop: function(event, index) {
            this._trigger('stop', event, this._uiHash(index));
        },
        _change: function(event, index) {
            if (!this._keySliding && !this._mouseSliding) {
                this._lastChangedValue = index;
                this._trigger('change', event, this._uiHash(index));
            }
        },
        value: function(newValue) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, 0);
                return;
            }
            return this._value();
        },
        values: function(index, newValue) {
            var vals, newValues, i;
            if (arguments.length > 1) {
                this.options.values[index] = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, index);
                return;
            }
            if (arguments.length) {
                if ($.isArray(arguments[0])) {
                    vals = this.options.values;
                    newValues = arguments[0];
                    for (i = 0; i < vals.length; i += 1) {
                        vals[i] = this._trimAlignValue(newValues[i]);
                        this._change(null, i);
                    }
                    this._refreshValue();
                } else {
                    if (this._hasMultipleValues()) {
                        return this._values(index);
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },
        _setOption: function(key, value) {
            var i, valsLength = 0;
            if (key === 'range' && this.options.range === true) {
                if (value === 'min') {
                    this.options.value = this._values(0);
                    this.options.values = null;
                } else if (value === 'max') {
                    this.options.value = this._values(this.options.values.length - 1);
                    this.options.values = null;
                }
            }
            if ($.isArray(this.options.values)) {
                valsLength = this.options.values.length;
            }
            this._super(key, value);
            switch (key) {
              case 'orientation':
                this._detectOrientation();
                this._removeClass('ui-slider-horizontal ui-slider-vertical')._addClass('ui-slider-' + this.orientation);
                this._refreshValue();
                if (this.options.range) {
                    this._refreshRange(value);
                }
                this.handles.css(value === 'horizontal' ? 'bottom' : 'left', '');
                break;

              case 'value':
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;

              case 'values':
                this._animateOff = true;
                this._refreshValue();
                for (i = valsLength - 1; i >= 0; i--) {
                    this._change(null, i);
                }
                this._animateOff = false;
                break;

              case 'step':
              case 'min':
              case 'max':
                this._animateOff = true;
                this._calculateNewMax();
                this._refreshValue();
                this._animateOff = false;
                break;

              case 'range':
                this._animateOff = true;
                this._refresh();
                this._animateOff = false;
                break;
            }
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this._toggleClass(null, 'ui-state-disabled', !!value);
        },
        _value: function() {
            var val = this.options.value;
            val = this._trimAlignValue(val);
            return val;
        },
        _values: function(index) {
            var val, vals, i;
            if (arguments.length) {
                val = this.options.values[index];
                val = this._trimAlignValue(val);
                return val;
            } else if (this._hasMultipleValues()) {
                vals = this.options.values.slice();
                for (i = 0; i < vals.length; i += 1) {
                    vals[i] = this._trimAlignValue(vals[i]);
                }
                return vals;
            } else {
                return [];
            }
        },
        _trimAlignValue: function(val) {
            if (val <= this._valueMin()) {
                return this._valueMin();
            }
            if (val >= this._valueMax()) {
                return this._valueMax();
            }
            var step = this.options.step > 0 ? this.options.step : 1, valModStep = (val - this._valueMin()) % step, alignValue = val - valModStep;
            if (Math.abs(valModStep) * 2 >= step) {
                alignValue += valModStep > 0 ? step : -step;
            }
            return parseFloat(alignValue.toFixed(5));
        },
        _calculateNewMax: function() {
            var max = this.options.max, min = this._valueMin(), step = this.options.step, aboveMin = Math.round((max - min) / step) * step;
            max = aboveMin + min;
            if (max > this.options.max) {
                max -= step;
            }
            this.max = parseFloat(max.toFixed(this._precision()));
        },
        _precision: function() {
            var precision = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                precision = Math.max(precision, this._precisionOf(this.options.min));
            }
            return precision;
        },
        _precisionOf: function(num) {
            var str = num.toString(), decimal = str.indexOf('.');
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshRange: function(orientation) {
            if (orientation === 'vertical') {
                this.range.css({
                    width: '',
                    left: ''
                });
            }
            if (orientation === 'horizontal') {
                this.range.css({
                    height: '',
                    bottom: ''
                });
            }
        },
        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax, oRange = this.options.range, o = this.options, that = this, animate = !this._animateOff ? o.animate : false, _set = {};
            if (this._hasMultipleValues()) {
                this.handles.each((function(i) {
                    valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() - that._valueMin()) * 100;
                    _set[that.orientation === 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
                    $(this).stop(1, 1)[animate ? 'animate' : 'css'](_set, o.animate);
                    if (that.options.range === true) {
                        if (that.orientation === 'horizontal') {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? 'animate' : 'css']({
                                    left: valPercent + '%'
                                }, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? 'animate' : 'css']({
                                    width: valPercent - lastValPercent + '%'
                                }, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        } else {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? 'animate' : 'css']({
                                    bottom: valPercent + '%'
                                }, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? 'animate' : 'css']({
                                    height: valPercent - lastValPercent + '%'
                                }, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        }
                    }
                    lastValPercent = valPercent;
                }));
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
                _set[this.orientation === 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
                this.handle.stop(1, 1)[animate ? 'animate' : 'css'](_set, o.animate);
                if (oRange === 'min' && this.orientation === 'horizontal') {
                    this.range.stop(1, 1)[animate ? 'animate' : 'css']({
                        width: valPercent + '%'
                    }, o.animate);
                }
                if (oRange === 'max' && this.orientation === 'horizontal') {
                    this.range.stop(1, 1)[animate ? 'animate' : 'css']({
                        width: 100 - valPercent + '%'
                    }, o.animate);
                }
                if (oRange === 'min' && this.orientation === 'vertical') {
                    this.range.stop(1, 1)[animate ? 'animate' : 'css']({
                        height: valPercent + '%'
                    }, o.animate);
                }
                if (oRange === 'max' && this.orientation === 'vertical') {
                    this.range.stop(1, 1)[animate ? 'animate' : 'css']({
                        height: 100 - valPercent + '%'
                    }, o.animate);
                }
            }
        },
        _handleEvents: {
            keydown: function(event) {
                var allowed, curVal, newVal, step, index = $(event.target).data('ui-slider-handle-index');
                switch (event.keyCode) {
                  case $.ui.keyCode.HOME:
                  case $.ui.keyCode.END:
                  case $.ui.keyCode.PAGE_UP:
                  case $.ui.keyCode.PAGE_DOWN:
                  case $.ui.keyCode.UP:
                  case $.ui.keyCode.RIGHT:
                  case $.ui.keyCode.DOWN:
                  case $.ui.keyCode.LEFT:
                    event.preventDefault();
                    if (!this._keySliding) {
                        this._keySliding = true;
                        this._addClass($(event.target), null, 'ui-state-active');
                        allowed = this._start(event, index);
                        if (allowed === false) {
                            return;
                        }
                    }
                    break;
                }
                step = this.options.step;
                if (this._hasMultipleValues()) {
                    curVal = newVal = this.values(index);
                } else {
                    curVal = newVal = this.value();
                }
                switch (event.keyCode) {
                  case $.ui.keyCode.HOME:
                    newVal = this._valueMin();
                    break;

                  case $.ui.keyCode.END:
                    newVal = this._valueMax();
                    break;

                  case $.ui.keyCode.PAGE_UP:
                    newVal = this._trimAlignValue(curVal + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case $.ui.keyCode.PAGE_DOWN:
                    newVal = this._trimAlignValue(curVal - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case $.ui.keyCode.UP:
                  case $.ui.keyCode.RIGHT:
                    if (curVal === this._valueMax()) {
                        return;
                    }
                    newVal = this._trimAlignValue(curVal + step);
                    break;

                  case $.ui.keyCode.DOWN:
                  case $.ui.keyCode.LEFT:
                    if (curVal === this._valueMin()) {
                        return;
                    }
                    newVal = this._trimAlignValue(curVal - step);
                    break;
                }
                this._slide(event, index, newVal);
            },
            keyup: function(event) {
                var index = $(event.target).data('ui-slider-handle-index');
                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(event, index);
                    this._change(event, index);
                    this._removeClass($(event.target), null, 'ui-state-active');
                }
            }
        }
    });
    /*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    var widgetsSortable = $.widget('ui.sortable', $.ui.mouse, {
        version: '1.12.1',
        widgetEventPrefix: 'sort',
        ready: false,
        options: {
            appendTo: 'parent',
            axis: false,
            connectWith: false,
            containment: false,
            cursor: 'auto',
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: 'original',
            items: '> *',
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: 'default',
            tolerance: 'intersect',
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(x, reference, size) {
            return x >= reference && x < reference + size;
        },
        _isFloating: function(item) {
            return /left|right/.test(item.css('float')) || /inline|table-cell/.test(item.css('display'));
        },
        _create: function() {
            this.containerCache = {};
            this._addClass('ui-sortable');
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = true;
        },
        _setOption: function(key, value) {
            this._super(key, value);
            if (key === 'handle') {
                this._setHandleClassName();
            }
        },
        _setHandleClassName: function() {
            var that = this;
            this._removeClass(this.element.find('.ui-sortable-handle'), 'ui-sortable-handle');
            $.each(this.items, (function() {
                that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, 'ui-sortable-handle');
            }));
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var i = this.items.length - 1; i >= 0; i--) {
                this.items[i].item.removeData(this.widgetName + '-item');
            }
            return this;
        },
        _mouseCapture: function(event, overrideHandle) {
            var currentItem = null, validHandle = false, that = this;
            if (this.reverting) {
                return false;
            }
            if (this.options.disabled || this.options.type === 'static') {
                return false;
            }
            this._refreshItems(event);
            $(event.target).parents().each((function() {
                if ($.data(this, that.widgetName + '-item') === that) {
                    currentItem = $(this);
                    return false;
                }
            }));
            if ($.data(event.target, that.widgetName + '-item') === that) {
                currentItem = $(event.target);
            }
            if (!currentItem) {
                return false;
            }
            if (this.options.handle && !overrideHandle) {
                $(this.options.handle, currentItem).find('*').addBack().each((function() {
                    if (this === event.target) {
                        validHandle = true;
                    }
                }));
                if (!validHandle) {
                    return false;
                }
            }
            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;
        },
        _mouseStart: function(event, overrideHandle, noActivation) {
            var i, body, o = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(event);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            $.extend(this.offset, {
                click: {
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css('position', 'absolute');
            this.cssPosition = this.helper.css('position');
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }
            this._createPlaceholder();
            if (o.containment) {
                this._setContainment();
            }
            if (o.cursor && o.cursor !== 'auto') {
                body = this.document.find('body');
                this.storedCursor = body.css('cursor');
                body.css('cursor', o.cursor);
                this.storedStylesheet = $('<style>*{ cursor: ' + o.cursor + ' !important; }</style>').appendTo(body);
            }
            if (o.opacity) {
                if (this.helper.css('opacity')) {
                    this._storedOpacity = this.helper.css('opacity');
                }
                this.helper.css('opacity', o.opacity);
            }
            if (o.zIndex) {
                if (this.helper.css('zIndex')) {
                    this._storedZIndex = this.helper.css('zIndex');
                }
                this.helper.css('zIndex', o.zIndex);
            }
            if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== 'HTML') {
                this.overflowOffset = this.scrollParent.offset();
            }
            this._trigger('start', event, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }
            if (!noActivation) {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger('activate', event, this._uiHash(this));
                }
            }
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }
            this.dragging = true;
            this._addClass(this.helper, 'ui-sortable-helper');
            this._mouseDrag(event);
            return true;
        },
        _mouseDrag: function(event) {
            var i, item, itemElement, intersection, o = this.options, scrolled = false;
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo('absolute');
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== 'HTML') {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
                    }
                    if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }
                } else {
                    if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
                    } else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
                    }
                    if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
                    } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
                    }
                }
                if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(this, event);
                }
            }
            this.positionAbs = this._convertPositionTo('absolute');
            if (!this.options.axis || this.options.axis !== 'y') {
                this.helper[0].style.left = this.position.left + 'px';
            }
            if (!this.options.axis || this.options.axis !== 'x') {
                this.helper[0].style.top = this.position.top + 'px';
            }
            for (i = this.items.length - 1; i >= 0; i--) {
                item = this.items[i];
                itemElement = item.item[0];
                intersection = this._intersectsWithPointer(item);
                if (!intersection) {
                    continue;
                }
                if (item.instance !== this.currentContainer) {
                    continue;
                }
                if (itemElement !== this.currentItem[0] && this.placeholder[intersection === 1 ? 'next' : 'prev']()[0] !== itemElement && !$.contains(this.placeholder[0], itemElement) && (this.options.type === 'semi-dynamic' ? !$.contains(this.element[0], itemElement) : true)) {
                    this.direction = intersection === 1 ? 'down' : 'up';
                    if (this.options.tolerance === 'pointer' || this._intersectsWithSides(item)) {
                        this._rearrange(event, item);
                    } else {
                        break;
                    }
                    this._trigger('change', event, this._uiHash());
                    break;
                }
            }
            this._contactContainers(event);
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }
            this._trigger('sort', event, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false;
        },
        _mouseStop: function(event, noPropagation) {
            if (!event) {
                return;
            }
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                $.ui.ddmanager.drop(this, event);
            }
            if (this.options.revert) {
                var that = this, cur = this.placeholder.offset(), axis = this.options.axis, animation = {};
                if (!axis || axis === 'x') {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
                }
                if (!axis || axis === 'y') {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
                }
                this.reverting = true;
                $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, (function() {
                    that._clear(event);
                }));
            } else {
                this._clear(event, noPropagation);
            }
            return false;
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new $.Event('mouseup', {
                    target: null
                }));
                if (this.options.helper === 'original') {
                    this.currentItem.css(this._storedCSS);
                    this._removeClass(this.currentItem, 'ui-sortable-helper');
                } else {
                    this.currentItem.show();
                }
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger('deactivate', null, this._uiHash(this));
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger('out', null, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if (this.options.helper !== 'original' && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }
                $.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    $(this.domPosition.prev).after(this.currentItem);
                } else {
                    $(this.domPosition.parent).prepend(this.currentItem);
                }
            }
            return this;
        },
        serialize: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected), str = [];
            o = o || {};
            $(items).each((function() {
                var res = ($(o.item || this).attr(o.attribute || 'id') || '').match(o.expression || /(.+)[\-=_](.+)/);
                if (res) {
                    str.push((o.key || res[1] + '[]') + '=' + (o.key && o.expression ? res[1] : res[2]));
                }
            }));
            if (!str.length && o.key) {
                str.push(o.key + '=');
            }
            return str.join('&');
        },
        toArray: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected), ret = [];
            o = o || {};
            items.each((function() {
                ret.push($(o.item || this).attr(o.attribute || 'id') || '');
            }));
            return ret;
        },
        _intersectsWith: function(item) {
            var x1 = this.positionAbs.left, x2 = x1 + this.helperProportions.width, y1 = this.positionAbs.top, y2 = y1 + this.helperProportions.height, l = item.left, r = l + item.width, t = item.top, b = t + item.height, dyClick = this.offset.click.top, dxClick = this.offset.click.left, isOverElementHeight = this.options.axis === 'x' || y1 + dyClick > t && y1 + dyClick < b, isOverElementWidth = this.options.axis === 'y' || x1 + dxClick > l && x1 + dxClick < r, isOverElement = isOverElementHeight && isOverElementWidth;
            if (this.options.tolerance === 'pointer' || this.options.forcePointerForContainers || this.options.tolerance !== 'pointer' && this.helperProportions[this.floating ? 'width' : 'height'] > item[this.floating ? 'width' : 'height']) {
                return isOverElement;
            } else {
                return l < x1 + this.helperProportions.width / 2 && x2 - this.helperProportions.width / 2 < r && t < y1 + this.helperProportions.height / 2 && y2 - this.helperProportions.height / 2 < b;
            }
        },
        _intersectsWithPointer: function(item) {
            var verticalDirection, horizontalDirection, isOverElementHeight = this.options.axis === 'x' || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height), isOverElementWidth = this.options.axis === 'y' || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width), isOverElement = isOverElementHeight && isOverElementWidth;
            if (!isOverElement) {
                return false;
            }
            verticalDirection = this._getDragVerticalDirection();
            horizontalDirection = this._getDragHorizontalDirection();
            return this.floating ? horizontalDirection === 'right' || verticalDirection === 'down' ? 2 : 1 : verticalDirection && (verticalDirection === 'down' ? 2 : 1);
        },
        _intersectsWithSides: function(item) {
            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height), isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width), verticalDirection = this._getDragVerticalDirection(), horizontalDirection = this._getDragHorizontalDirection();
            if (this.floating && horizontalDirection) {
                return horizontalDirection === 'right' && isOverRightHalf || horizontalDirection === 'left' && !isOverRightHalf;
            } else {
                return verticalDirection && (verticalDirection === 'down' && isOverBottomHalf || verticalDirection === 'up' && !isOverBottomHalf);
            }
        },
        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && (delta > 0 ? 'down' : 'up');
        },
        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && (delta > 0 ? 'right' : 'left');
        },
        refresh: function(event) {
            this._refreshItems(event);
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },
        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ? [ options.connectWith ] : options.connectWith;
        },
        _getItemsAsjQuery: function(connected) {
            var i, j, cur, inst, items = [], queries = [], connectWith = this._connectWith();
            if (connectWith && connected) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([ $.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'), inst ]);
                        }
                    }
                }
            }
            queries.push([ $.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : $(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'), this ]);
            function addItems() {
                items.push(this);
            }
            for (i = queries.length - 1; i >= 0; i--) {
                queries[i][0].each(addItems);
            }
            return $(items);
        },
        _removeCurrentsFromItems: function() {
            var list = this.currentItem.find(':data(' + this.widgetName + '-item)');
            this.items = $.grep(this.items, (function(item) {
                for (var j = 0; j < list.length; j++) {
                    if (list[j] === item.item[0]) {
                        return false;
                    }
                }
                return true;
            }));
        },
        _refreshItems: function(event) {
            this.items = [];
            this.containers = [ this ];
            var i, j, cur, inst, targetData, _queries, item, queriesLength, items = this.items, queries = [ [ $.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {
                item: this.currentItem
            }) : $(this.options.items, this.element), this ] ], connectWith = this._connectWith();
            if (connectWith && this.ready) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([ $.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {
                                item: this.currentItem
                            }) : $(inst.options.items, inst.element), inst ]);
                            this.containers.push(inst);
                        }
                    }
                }
            }
            for (i = queries.length - 1; i >= 0; i--) {
                targetData = queries[i][1];
                _queries = queries[i][0];
                for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
                    item = $(_queries[j]);
                    item.data(this.widgetName + '-item', targetData);
                    items.push({
                        item: item,
                        instance: targetData,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                }
            }
        },
        refreshPositions: function(fast) {
            this.floating = this.items.length ? this.options.axis === 'x' || this._isFloating(this.items[0].item) : false;
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }
            var i, item, t, p;
            for (i = this.items.length - 1; i >= 0; i--) {
                item = this.items[i];
                if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
                    continue;
                }
                t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;
                if (!fast) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }
                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    p = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = p.left;
                    this.containers[i].containerCache.top = p.top;
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                }
            }
            return this;
        },
        _createPlaceholder: function(that) {
            that = that || this;
            var className, o = that.options;
            if (!o.placeholder || o.placeholder.constructor === String) {
                className = o.placeholder;
                o.placeholder = {
                    element: function() {
                        var nodeName = that.currentItem[0].nodeName.toLowerCase(), element = $('<' + nodeName + '>', that.document[0]);
                        that._addClass(element, 'ui-sortable-placeholder', className || that.currentItem[0].className)._removeClass(element, 'ui-sortable-helper');
                        if (nodeName === 'tbody') {
                            that._createTrPlaceholder(that.currentItem.find('tr').eq(0), $('<tr>', that.document[0]).appendTo(element));
                        } else if (nodeName === 'tr') {
                            that._createTrPlaceholder(that.currentItem, element);
                        } else if (nodeName === 'img') {
                            element.attr('src', that.currentItem.attr('src'));
                        }
                        if (!className) {
                            element.css('visibility', 'hidden');
                        }
                        return element;
                    },
                    update: function(container, p) {
                        if (className && !o.forcePlaceholderSize) {
                            return;
                        }
                        if (!p.height()) {
                            p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css('paddingTop') || 0, 10) - parseInt(that.currentItem.css('paddingBottom') || 0, 10));
                        }
                        if (!p.width()) {
                            p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css('paddingLeft') || 0, 10) - parseInt(that.currentItem.css('paddingRight') || 0, 10));
                        }
                    }
                };
            }
            that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));
            that.currentItem.after(that.placeholder);
            o.placeholder.update(that, that.placeholder);
        },
        _createTrPlaceholder: function(sourceTr, targetTr) {
            var that = this;
            sourceTr.children().each((function() {
                $('<td>&#160;</td>', that.document[0]).attr('colspan', $(this).attr('colspan') || 1).appendTo(targetTr);
            }));
        },
        _contactContainers: function(event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis, innermostContainer = null, innermostIndex = null;
            for (i = this.containers.length - 1; i >= 0; i--) {
                if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
                    continue;
                }
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
                        continue;
                    }
                    innermostContainer = this.containers[i];
                    innermostIndex = i;
                } else {
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger('out', event, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }
            }
            if (!innermostContainer) {
                return;
            }
            if (this.containers.length === 1) {
                if (!this.containers[innermostIndex].containerCache.over) {
                    this.containers[innermostIndex]._trigger('over', event, this._uiHash(this));
                    this.containers[innermostIndex].containerCache.over = 1;
                }
            } else {
                dist = 1e4;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || this._isFloating(this.currentItem);
                posProperty = floating ? 'left' : 'top';
                sizeProperty = floating ? 'width' : 'height';
                axis = floating ? 'pageX' : 'pageY';
                for (j = this.items.length - 1; j >= 0; j--) {
                    if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
                        continue;
                    }
                    if (this.items[j].item[0] === this.currentItem[0]) {
                        continue;
                    }
                    cur = this.items[j].item.offset()[posProperty];
                    nearBottom = false;
                    if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
                        nearBottom = true;
                    }
                    if (Math.abs(event[axis] - cur) < dist) {
                        dist = Math.abs(event[axis] - cur);
                        itemWithLeastDistance = this.items[j];
                        this.direction = nearBottom ? 'up' : 'down';
                    }
                }
                if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
                    return;
                }
                if (this.currentContainer === this.containers[innermostIndex]) {
                    if (!this.currentContainer.containerCache.over) {
                        this.containers[innermostIndex]._trigger('over', event, this._uiHash());
                        this.currentContainer.containerCache.over = 1;
                    }
                    return;
                }
                itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
                this._trigger('change', event, this._uiHash());
                this.containers[innermostIndex]._trigger('change', event, this._uiHash(this));
                this.currentContainer = this.containers[innermostIndex];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[innermostIndex]._trigger('over', event, this._uiHash(this));
                this.containers[innermostIndex].containerCache.over = 1;
            }
        },
        _createHelper: function(event) {
            var o = this.options, helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [ event, this.currentItem ])) : o.helper === 'clone' ? this.currentItem.clone() : this.currentItem;
            if (!helper.parents('body').length) {
                $(o.appendTo !== 'parent' ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
            }
            if (helper[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css('position'),
                    top: this.currentItem.css('top'),
                    left: this.currentItem.css('left')
                };
            }
            if (!helper[0].style.width || o.forceHelperSize) {
                helper.width(this.currentItem.width());
            }
            if (!helper[0].style.height || o.forceHelperSize) {
                helper.height(this.currentItem.height());
            }
            return helper;
        },
        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === 'string') {
                obj = obj.split(' ');
            }
            if ($.isArray(obj)) {
                obj = {
                    left: +obj[0],
                    top: +obj[1] || 0
                };
            }
            if ('left' in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ('right' in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ('top' in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ('bottom' in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();
            if (this.cssPosition === 'absolute' && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }
            if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === 'html' && $.ui.ie) {
                po = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: po.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === 'relative') {
                var p = this.currentItem.position();
                return {
                    top: p.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {
                    top: 0,
                    left: 0
                };
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
                top: parseInt(this.currentItem.css('marginTop'), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var ce, co, over, o = this.options;
            if (o.containment === 'parent') {
                o.containment = this.helper[0].parentNode;
            }
            if (o.containment === 'document' || o.containment === 'window') {
                this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, o.containment === 'document' ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (o.containment === 'document' ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
            }
            if (!/^(document|window|parent)$/.test(o.containment)) {
                ce = $(o.containment)[0];
                co = $(o.containment).offset();
                over = $(ce).css('overflow') !== 'hidden';
                this.containment = [ co.left + (parseInt($(ce).css('borderLeftWidth'), 10) || 0) + (parseInt($(ce).css('paddingLeft'), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css('borderTopWidth'), 10) || 0) + (parseInt($(ce).css('paddingTop'), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css('borderLeftWidth'), 10) || 0) - (parseInt($(ce).css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css('borderTopWidth'), 10) || 0) - (parseInt($(ce).css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top ];
            }
        },
        _convertPositionTo: function(d, pos) {
            if (!pos) {
                pos = this.position;
            }
            var mod = d === 'absolute' ? 1 : -1, scroll = this.cssPosition === 'absolute' && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - (this.cssPosition === 'fixed' ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - (this.cssPosition === 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod
            };
        },
        _generatePosition: function(event) {
            var top, left, o = this.options, pageX = event.pageX, pageY = event.pageY, scroll = this.cssPosition === 'absolute' && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            if (this.cssPosition === 'relative' && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (event.pageX - this.offset.click.left < this.containment[0]) {
                        pageX = this.containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < this.containment[1]) {
                        pageY = this.containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > this.containment[2]) {
                        pageX = this.containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > this.containment[3]) {
                        pageY = this.containment[3] + this.offset.click.top;
                    }
                }
                if (o.grid) {
                    top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
                    pageY = this.containment ? top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3] ? top : top - this.offset.click.top >= this.containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
                    left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
                    pageX = this.containment ? left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2] ? left : left - this.offset.click.left >= this.containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
                }
            }
            return {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === 'fixed' ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())
            };
        },
        _rearrange: function(event, i, a, hardRefresh) {
            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === 'down' ? i.item[0] : i.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;
            this._delay((function() {
                if (counter === this.counter) {
                    this.refreshPositions(!hardRefresh);
                }
            }));
        },
        _clear: function(event, noPropagation) {
            this.reverting = false;
            var i, delayedTriggers = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) {
                    if (this._storedCSS[i] === 'auto' || this._storedCSS[i] === 'static') {
                        this._storedCSS[i] = '';
                    }
                }
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, 'ui-sortable-helper');
            } else {
                this.currentItem.show();
            }
            if (this.fromOutside && !noPropagation) {
                delayedTriggers.push((function(event) {
                    this._trigger('receive', event, this._uiHash(this.fromOutside));
                }));
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not('.ui-sortable-helper')[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
                delayedTriggers.push((function(event) {
                    this._trigger('update', event, this._uiHash());
                }));
            }
            if (this !== this.currentContainer) {
                if (!noPropagation) {
                    delayedTriggers.push((function(event) {
                        this._trigger('remove', event, this._uiHash());
                    }));
                    delayedTriggers.push(function(c) {
                        return function(event) {
                            c._trigger('receive', event, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer));
                    delayedTriggers.push(function(c) {
                        return function(event) {
                            c._trigger('update', event, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer));
                }
            }
            function delayEvent(type, instance, container) {
                return function(event) {
                    container._trigger(type, event, instance._uiHash(instance));
                };
            }
            for (i = this.containers.length - 1; i >= 0; i--) {
                if (!noPropagation) {
                    delayedTriggers.push(delayEvent('deactivate', this, this.containers[i]));
                }
                if (this.containers[i].containerCache.over) {
                    delayedTriggers.push(delayEvent('out', this, this.containers[i]));
                    this.containers[i].containerCache.over = 0;
                }
            }
            if (this.storedCursor) {
                this.document.find('body').css('cursor', this.storedCursor);
                this.storedStylesheet.remove();
            }
            if (this._storedOpacity) {
                this.helper.css('opacity', this._storedOpacity);
            }
            if (this._storedZIndex) {
                this.helper.css('zIndex', this._storedZIndex === 'auto' ? '' : this._storedZIndex);
            }
            this.dragging = false;
            if (!noPropagation) {
                this._trigger('beforeStop', event, this._uiHash());
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (!this.cancelHelperRemoval) {
                if (this.helper[0] !== this.currentItem[0]) {
                    this.helper.remove();
                }
                this.helper = null;
            }
            if (!noPropagation) {
                for (i = 0; i < delayedTriggers.length; i++) {
                    delayedTriggers[i].call(this, event);
                }
                this._trigger('stop', event, this._uiHash());
            }
            this.fromOutside = false;
            return !this.cancelHelperRemoval;
        },
        _trigger: function() {
            if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },
        _uiHash: function(_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }
    });
    /*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    function spinnerModifer(fn) {
        return function() {
            var previous = this.element.val();
            fn.apply(this, arguments);
            this._refresh();
            if (previous !== this.element.val()) {
                this._trigger('change');
            }
        };
    }
    $.widget('ui.spinner', {
        version: '1.12.1',
        defaultElement: '<input>',
        widgetEventPrefix: 'spin',
        options: {
            classes: {
                'ui-spinner': 'ui-corner-all',
                'ui-spinner-down': 'ui-corner-br',
                'ui-spinner-up': 'ui-corner-tr'
            },
            culture: null,
            icons: {
                down: 'ui-icon-triangle-1-s',
                up: 'ui-icon-triangle-1-n'
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption('max', this.options.max);
            this._setOption('min', this.options.min);
            this._setOption('step', this.options.step);
            if (this.value() !== '') {
                this._value(this.element.val(), true);
            }
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr('autocomplete');
                }
            });
        },
        _getCreateOptions: function() {
            var options = this._super();
            var element = this.element;
            $.each([ 'min', 'max', 'step' ], (function(i, option) {
                var value = element.attr(option);
                if (value != null && value.length) {
                    options[option] = value;
                }
            }));
            return options;
        },
        _events: {
            keydown: function(event) {
                if (this._start(event) && this._keydown(event)) {
                    event.preventDefault();
                }
            },
            keyup: '_stop',
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(event) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return;
                }
                this._stop();
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger('change', event);
                }
            },
            mousewheel: function(event, delta) {
                if (!delta) {
                    return;
                }
                if (!this.spinning && !this._start(event)) {
                    return false;
                }
                this._spin((delta > 0 ? 1 : -1) * this.options.step, event);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay((function() {
                    if (this.spinning) {
                        this._stop(event);
                    }
                }), 100);
                event.preventDefault();
            },
            'mousedown .ui-spinner-button': function(event) {
                var previous;
                previous = this.element[0] === $.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                function checkFocus() {
                    var isActive = this.element[0] === $.ui.safeActiveElement(this.document[0]);
                    if (!isActive) {
                        this.element.trigger('focus');
                        this.previous = previous;
                        this._delay((function() {
                            this.previous = previous;
                        }));
                    }
                }
                event.preventDefault();
                checkFocus.call(this);
                this.cancelBlur = true;
                this._delay((function() {
                    delete this.cancelBlur;
                    checkFocus.call(this);
                }));
                if (this._start(event) === false) {
                    return;
                }
                this._repeat(null, $(event.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, event);
            },
            'mouseup .ui-spinner-button': '_stop',
            'mouseenter .ui-spinner-button': function(event) {
                if (!$(event.currentTarget).hasClass('ui-state-active')) {
                    return;
                }
                if (this._start(event) === false) {
                    return false;
                }
                this._repeat(null, $(event.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, event);
            },
            'mouseleave .ui-spinner-button': '_stop'
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr('autocomplete', 'off').wrap('<span>').parent().append('<a></a><a></a>');
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, 'ui-spinner', 'ui-widget ui-widget-content');
            this._addClass('ui-spinner-input');
            this.element.attr('role', 'spinbutton');
            this.buttons = this.uiSpinner.children('a').attr('tabIndex', -1).attr('aria-hidden', true).button({
                classes: {
                    'ui-button': ''
                }
            });
            this._removeClass(this.buttons, 'ui-corner-all');
            this._addClass(this.buttons.first(), 'ui-spinner-button ui-spinner-up');
            this._addClass(this.buttons.last(), 'ui-spinner-button ui-spinner-down');
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: false
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: false
            });
            if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * .5) && this.uiSpinner.height() > 0) {
                this.uiSpinner.height(this.uiSpinner.height());
            }
        },
        _keydown: function(event) {
            var options = this.options, keyCode = $.ui.keyCode;
            switch (event.keyCode) {
              case keyCode.UP:
                this._repeat(null, 1, event);
                return true;

              case keyCode.DOWN:
                this._repeat(null, -1, event);
                return true;

              case keyCode.PAGE_UP:
                this._repeat(null, options.page, event);
                return true;

              case keyCode.PAGE_DOWN:
                this._repeat(null, -options.page, event);
                return true;
            }
            return false;
        },
        _start: function(event) {
            if (!this.spinning && this._trigger('start', event) === false) {
                return false;
            }
            if (!this.counter) {
                this.counter = 1;
            }
            this.spinning = true;
            return true;
        },
        _repeat: function(i, steps, event) {
            i = i || 500;
            clearTimeout(this.timer);
            this.timer = this._delay((function() {
                this._repeat(40, steps, event);
            }), i);
            this._spin(steps * this.options.step, event);
        },
        _spin: function(step, event) {
            var value = this.value() || 0;
            if (!this.counter) {
                this.counter = 1;
            }
            value = this._adjustValue(value + step * this._increment(this.counter));
            if (!this.spinning || this._trigger('spin', event, {
                value: value
            }) !== false) {
                this._value(value);
                this.counter++;
            }
        },
        _increment: function(i) {
            var incremental = this.options.incremental;
            if (incremental) {
                return $.isFunction(incremental) ? incremental(i) : Math.floor(i * i * i / 5e4 - i * i / 500 + 17 * i / 200 + 1);
            }
            return 1;
        },
        _precision: function() {
            var precision = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                precision = Math.max(precision, this._precisionOf(this.options.min));
            }
            return precision;
        },
        _precisionOf: function(num) {
            var str = num.toString(), decimal = str.indexOf('.');
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },
        _adjustValue: function(value) {
            var base, aboveMin, options = this.options;
            base = options.min !== null ? options.min : 0;
            aboveMin = value - base;
            aboveMin = Math.round(aboveMin / options.step) * options.step;
            value = base + aboveMin;
            value = parseFloat(value.toFixed(this._precision()));
            if (options.max !== null && value > options.max) {
                return options.max;
            }
            if (options.min !== null && value < options.min) {
                return options.min;
            }
            return value;
        },
        _stop: function(event) {
            if (!this.spinning) {
                return;
            }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger('stop', event);
        },
        _setOption: function(key, value) {
            var prevValue, first, last;
            if (key === 'culture' || key === 'numberFormat') {
                prevValue = this._parse(this.element.val());
                this.options[key] = value;
                this.element.val(this._format(prevValue));
                return;
            }
            if (key === 'max' || key === 'min' || key === 'step') {
                if (typeof value === 'string') {
                    value = this._parse(value);
                }
            }
            if (key === 'icons') {
                first = this.buttons.first().find('.ui-icon');
                this._removeClass(first, null, this.options.icons.up);
                this._addClass(first, null, value.up);
                last = this.buttons.last().find('.ui-icon');
                this._removeClass(last, null, this.options.icons.down);
                this._addClass(last, null, value.down);
            }
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this._toggleClass(this.uiSpinner, null, 'ui-state-disabled', !!value);
            this.element.prop('disabled', !!value);
            this.buttons.button(value ? 'disable' : 'enable');
        },
        _setOptions: spinnerModifer((function(options) {
            this._super(options);
        })),
        _parse: function(val) {
            if (typeof val === 'string' && val !== '') {
                val = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) : +val;
            }
            return val === '' || isNaN(val) ? null : val;
        },
        _format: function(value) {
            if (value === '') {
                return '';
            }
            return window.Globalize && this.options.numberFormat ? Globalize.format(value, this.options.numberFormat, this.options.culture) : value;
        },
        _refresh: function() {
            this.element.attr({
                'aria-valuemin': this.options.min,
                'aria-valuemax': this.options.max,
                'aria-valuenow': this._parse(this.element.val())
            });
        },
        isValid: function() {
            var value = this.value();
            if (value === null) {
                return false;
            }
            return value === this._adjustValue(value);
        },
        _value: function(value, allowAny) {
            var parsed;
            if (value !== '') {
                parsed = this._parse(value);
                if (parsed !== null) {
                    if (!allowAny) {
                        parsed = this._adjustValue(parsed);
                    }
                    value = this._format(parsed);
                }
            }
            this.element.val(value);
            this._refresh();
        },
        _destroy: function() {
            this.element.prop('disabled', false).removeAttr('autocomplete role aria-valuemin aria-valuemax aria-valuenow');
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: spinnerModifer((function(steps) {
            this._stepUp(steps);
        })),
        _stepUp: function(steps) {
            if (this._start()) {
                this._spin((steps || 1) * this.options.step);
                this._stop();
            }
        },
        stepDown: spinnerModifer((function(steps) {
            this._stepDown(steps);
        })),
        _stepDown: function(steps) {
            if (this._start()) {
                this._spin((steps || 1) * -this.options.step);
                this._stop();
            }
        },
        pageUp: spinnerModifer((function(pages) {
            this._stepUp((pages || 1) * this.options.page);
        })),
        pageDown: spinnerModifer((function(pages) {
            this._stepDown((pages || 1) * this.options.page);
        })),
        value: function(newVal) {
            if (!arguments.length) {
                return this._parse(this.element.val());
            }
            spinnerModifer(this._value).call(this, newVal);
        },
        widget: function() {
            return this.uiSpinner;
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget('ui.spinner', $.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            },
            _uiSpinnerHtml: function() {
                return '<span>';
            },
            _buttonHtml: function() {
                return '<a></a><a></a>';
            }
        });
    }
    var widgetsSpinner = $.ui.spinner;
    /*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.tabs', {
        version: '1.12.1',
        delay: 300,
        options: {
            active: null,
            classes: {
                'ui-tabs': 'ui-corner-all',
                'ui-tabs-nav': 'ui-corner-all',
                'ui-tabs-panel': 'ui-corner-bottom',
                'ui-tabs-tab': 'ui-corner-top'
            },
            collapsible: false,
            event: 'click',
            heightStyle: 'content',
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var rhash = /#.*$/;
            return function(anchor) {
                var anchorUrl, locationUrl;
                anchorUrl = anchor.href.replace(rhash, '');
                locationUrl = location.href.replace(rhash, '');
                try {
                    anchorUrl = decodeURIComponent(anchorUrl);
                } catch (error) {}
                try {
                    locationUrl = decodeURIComponent(locationUrl);
                } catch (error) {}
                return anchor.hash.length > 1 && anchorUrl === locationUrl;
            };
        }(),
        _create: function() {
            var that = this, options = this.options;
            this.running = false;
            this._addClass('ui-tabs', 'ui-widget ui-widget-content');
            this._toggleClass('ui-tabs-collapsible', null, options.collapsible);
            this._processTabs();
            options.active = this._initialActive();
            if ($.isArray(options.disabled)) {
                options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter('.ui-state-disabled'), (function(li) {
                    return that.tabs.index(li);
                })))).sort();
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(options.active);
            } else {
                this.active = $();
            }
            this._refresh();
            if (this.active.length) {
                this.load(options.active);
            }
        },
        _initialActive: function() {
            var active = this.options.active, collapsible = this.options.collapsible, locationHash = location.hash.substring(1);
            if (active === null) {
                if (locationHash) {
                    this.tabs.each((function(i, tab) {
                        if ($(tab).attr('aria-controls') === locationHash) {
                            active = i;
                            return false;
                        }
                    }));
                }
                if (active === null) {
                    active = this.tabs.index(this.tabs.filter('.ui-tabs-active'));
                }
                if (active === null || active === -1) {
                    active = this.tabs.length ? 0 : false;
                }
            }
            if (active !== false) {
                active = this.tabs.index(this.tabs.eq(active));
                if (active === -1) {
                    active = collapsible ? false : 0;
                }
            }
            if (!collapsible && active === false && this.anchors.length) {
                active = 0;
            }
            return active;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab(this.active)
            };
        },
        _tabKeydown: function(event) {
            var focusedTab = $($.ui.safeActiveElement(this.document[0])).closest('li'), selectedIndex = this.tabs.index(focusedTab), goingForward = true;
            if (this._handlePageNav(event)) {
                return;
            }
            switch (event.keyCode) {
              case $.ui.keyCode.RIGHT:
              case $.ui.keyCode.DOWN:
                selectedIndex++;
                break;

              case $.ui.keyCode.UP:
              case $.ui.keyCode.LEFT:
                goingForward = false;
                selectedIndex--;
                break;

              case $.ui.keyCode.END:
                selectedIndex = this.anchors.length - 1;
                break;

              case $.ui.keyCode.HOME:
                selectedIndex = 0;
                break;

              case $.ui.keyCode.SPACE:
                event.preventDefault();
                clearTimeout(this.activating);
                this._activate(selectedIndex);
                return;

              case $.ui.keyCode.ENTER:
                event.preventDefault();
                clearTimeout(this.activating);
                this._activate(selectedIndex === this.options.active ? false : selectedIndex);
                return;

              default:
                return;
            }
            event.preventDefault();
            clearTimeout(this.activating);
            selectedIndex = this._focusNextTab(selectedIndex, goingForward);
            if (!event.ctrlKey && !event.metaKey) {
                focusedTab.attr('aria-selected', 'false');
                this.tabs.eq(selectedIndex).attr('aria-selected', 'true');
                this.activating = this._delay((function() {
                    this.option('active', selectedIndex);
                }), this.delay);
            }
        },
        _panelKeydown: function(event) {
            if (this._handlePageNav(event)) {
                return;
            }
            if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) {
                event.preventDefault();
                this.active.trigger('focus');
            }
        },
        _handlePageNav: function(event) {
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true;
            }
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true;
            }
        },
        _findNextTab: function(index, goingForward) {
            var lastTabIndex = this.tabs.length - 1;
            function constrain() {
                if (index > lastTabIndex) {
                    index = 0;
                }
                if (index < 0) {
                    index = lastTabIndex;
                }
                return index;
            }
            while ($.inArray(constrain(), this.options.disabled) !== -1) {
                index = goingForward ? index + 1 : index - 1;
            }
            return index;
        },
        _focusNextTab: function(index, goingForward) {
            index = this._findNextTab(index, goingForward);
            this.tabs.eq(index).trigger('focus');
            return index;
        },
        _setOption: function(key, value) {
            if (key === 'active') {
                this._activate(value);
                return;
            }
            this._super(key, value);
            if (key === 'collapsible') {
                this._toggleClass('ui-tabs-collapsible', null, value);
                if (!value && this.options.active === false) {
                    this._activate(0);
                }
            }
            if (key === 'event') {
                this._setupEvents(value);
            }
            if (key === 'heightStyle') {
                this._setupHeightStyle(value);
            }
        },
        _sanitizeSelector: function(hash) {
            return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&') : '';
        },
        refresh: function() {
            var options = this.options, lis = this.tablist.children(':has(a[href])');
            options.disabled = $.map(lis.filter('.ui-state-disabled'), (function(tab) {
                return lis.index(tab);
            }));
            this._processTabs();
            if (options.active === false || !this.anchors.length) {
                options.active = false;
                this.active = $();
            } else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) {
                if (this.tabs.length === options.disabled.length) {
                    options.active = false;
                    this.active = $();
                } else {
                    this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
                }
            } else {
                options.active = this.tabs.index(this.active);
            }
            this._refresh();
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                'aria-selected': 'false',
                'aria-expanded': 'false',
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                'aria-hidden': 'true'
            });
            if (!this.active.length) {
                this.tabs.eq(0).attr('tabIndex', 0);
            } else {
                this.active.attr({
                    'aria-selected': 'true',
                    'aria-expanded': 'true',
                    tabIndex: 0
                });
                this._addClass(this.active, 'ui-tabs-active', 'ui-state-active');
                this._getPanelForTab(this.active).show().attr({
                    'aria-hidden': 'false'
                });
            }
        },
        _processTabs: function() {
            var that = this, prevTabs = this.tabs, prevAnchors = this.anchors, prevPanels = this.panels;
            this.tablist = this._getList().attr('role', 'tablist');
            this._addClass(this.tablist, 'ui-tabs-nav', 'ui-helper-reset ui-helper-clearfix ui-widget-header');
            this.tablist.on('mousedown' + this.eventNamespace, '> li', (function(event) {
                if ($(this).is('.ui-state-disabled')) {
                    event.preventDefault();
                }
            })).on('focus' + this.eventNamespace, '.ui-tabs-anchor', (function() {
                if ($(this).closest('li').is('.ui-state-disabled')) {
                    this.blur();
                }
            }));
            this.tabs = this.tablist.find('> li:has(a[href])').attr({
                role: 'tab',
                tabIndex: -1
            });
            this._addClass(this.tabs, 'ui-tabs-tab', 'ui-state-default');
            this.anchors = this.tabs.map((function() {
                return $('a', this)[0];
            })).attr({
                role: 'presentation',
                tabIndex: -1
            });
            this._addClass(this.anchors, 'ui-tabs-anchor');
            this.panels = $();
            this.anchors.each((function(i, anchor) {
                var selector, panel, panelId, anchorId = $(anchor).uniqueId().attr('id'), tab = $(anchor).closest('li'), originalAriaControls = tab.attr('aria-controls');
                if (that._isLocal(anchor)) {
                    selector = anchor.hash;
                    panelId = selector.substring(1);
                    panel = that.element.find(that._sanitizeSelector(selector));
                } else {
                    panelId = tab.attr('aria-controls') || $({}).uniqueId()[0].id;
                    selector = '#' + panelId;
                    panel = that.element.find(selector);
                    if (!panel.length) {
                        panel = that._createPanel(panelId);
                        panel.insertAfter(that.panels[i - 1] || that.tablist);
                    }
                    panel.attr('aria-live', 'polite');
                }
                if (panel.length) {
                    that.panels = that.panels.add(panel);
                }
                if (originalAriaControls) {
                    tab.data('ui-tabs-aria-controls', originalAriaControls);
                }
                tab.attr({
                    'aria-controls': panelId,
                    'aria-labelledby': anchorId
                });
                panel.attr('aria-labelledby', anchorId);
            }));
            this.panels.attr('role', 'tabpanel');
            this._addClass(this.panels, 'ui-tabs-panel', 'ui-widget-content');
            if (prevTabs) {
                this._off(prevTabs.not(this.tabs));
                this._off(prevAnchors.not(this.anchors));
                this._off(prevPanels.not(this.panels));
            }
        },
        _getList: function() {
            return this.tablist || this.element.find('ol, ul').eq(0);
        },
        _createPanel: function(id) {
            return $('<div>').attr('id', id).data('ui-tabs-destroy', true);
        },
        _setOptionDisabled: function(disabled) {
            var currentItem, li, i;
            if ($.isArray(disabled)) {
                if (!disabled.length) {
                    disabled = false;
                } else if (disabled.length === this.anchors.length) {
                    disabled = true;
                }
            }
            for (i = 0; li = this.tabs[i]; i++) {
                currentItem = $(li);
                if (disabled === true || $.inArray(i, disabled) !== -1) {
                    currentItem.attr('aria-disabled', 'true');
                    this._addClass(currentItem, null, 'ui-state-disabled');
                } else {
                    currentItem.removeAttr('aria-disabled');
                    this._removeClass(currentItem, null, 'ui-state-disabled');
                }
            }
            this.options.disabled = disabled;
            this._toggleClass(this.widget(), this.widgetFullName + '-disabled', null, disabled === true);
        },
        _setupEvents: function(event) {
            var events = {};
            if (event) {
                $.each(event.split(' '), (function(index, eventName) {
                    events[eventName] = '_eventHandler';
                }));
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(true, this.anchors, {
                click: function(event) {
                    event.preventDefault();
                }
            });
            this._on(this.anchors, events);
            this._on(this.tabs, {
                keydown: '_tabKeydown'
            });
            this._on(this.panels, {
                keydown: '_panelKeydown'
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(heightStyle) {
            var maxHeight, parent = this.element.parent();
            if (heightStyle === 'fill') {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();
                this.element.siblings(':visible').each((function() {
                    var elem = $(this), position = elem.css('position');
                    if (position === 'absolute' || position === 'fixed') {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                }));
                this.element.children().not(this.panels).each((function() {
                    maxHeight -= $(this).outerHeight(true);
                }));
                this.panels.each((function() {
                    $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
                })).css('overflow', 'auto');
            } else if (heightStyle === 'auto') {
                maxHeight = 0;
                this.panels.each((function() {
                    maxHeight = Math.max(maxHeight, $(this).height('').height());
                })).height(maxHeight);
            }
        },
        _eventHandler: function(event) {
            var options = this.options, active = this.active, anchor = $(event.currentTarget), tab = anchor.closest('li'), clickedIsActive = tab[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : this._getPanelForTab(tab), toHide = !active.length ? $() : this._getPanelForTab(active), eventData = {
                oldTab: active,
                oldPanel: toHide,
                newTab: collapsing ? $() : tab,
                newPanel: toShow
            };
            event.preventDefault();
            if (tab.hasClass('ui-state-disabled') || tab.hasClass('ui-tabs-loading') || this.running || clickedIsActive && !options.collapsible || this._trigger('beforeActivate', event, eventData) === false) {
                return;
            }
            options.active = collapsing ? false : this.tabs.index(tab);
            this.active = clickedIsActive ? $() : tab;
            if (this.xhr) {
                this.xhr.abort();
            }
            if (!toHide.length && !toShow.length) {
                $.error('jQuery UI Tabs: Mismatching fragment identifier.');
            }
            if (toShow.length) {
                this.load(this.tabs.index(tab), event);
            }
            this._toggle(event, eventData);
        },
        _toggle: function(event, eventData) {
            var that = this, toShow = eventData.newPanel, toHide = eventData.oldPanel;
            this.running = true;
            function complete() {
                that.running = false;
                that._trigger('activate', event, eventData);
            }
            function show() {
                that._addClass(eventData.newTab.closest('li'), 'ui-tabs-active', 'ui-state-active');
                if (toShow.length && that.options.show) {
                    that._show(toShow, that.options.show, complete);
                } else {
                    toShow.show();
                    complete();
                }
            }
            if (toHide.length && this.options.hide) {
                this._hide(toHide, this.options.hide, (function() {
                    that._removeClass(eventData.oldTab.closest('li'), 'ui-tabs-active', 'ui-state-active');
                    show();
                }));
            } else {
                this._removeClass(eventData.oldTab.closest('li'), 'ui-tabs-active', 'ui-state-active');
                toHide.hide();
                show();
            }
            toHide.attr('aria-hidden', 'true');
            eventData.oldTab.attr({
                'aria-selected': 'false',
                'aria-expanded': 'false'
            });
            if (toShow.length && toHide.length) {
                eventData.oldTab.attr('tabIndex', -1);
            } else if (toShow.length) {
                this.tabs.filter((function() {
                    return $(this).attr('tabIndex') === 0;
                })).attr('tabIndex', -1);
            }
            toShow.attr('aria-hidden', 'false');
            eventData.newTab.attr({
                'aria-selected': 'true',
                'aria-expanded': 'true',
                tabIndex: 0
            });
        },
        _activate: function(index) {
            var anchor, active = this._findActive(index);
            if (active[0] === this.active[0]) {
                return;
            }
            if (!active.length) {
                active = this.active;
            }
            anchor = active.find('.ui-tabs-anchor')[0];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },
        _findActive: function(index) {
            return index === false ? $() : this.tabs.eq(index);
        },
        _getIndex: function(index) {
            if (typeof index === 'string') {
                index = this.anchors.index(this.anchors.filter('[href$=\'' + $.ui.escapeSelector(index) + '\']'));
            }
            return index;
        },
        _destroy: function() {
            if (this.xhr) {
                this.xhr.abort();
            }
            this.tablist.removeAttr('role').off(this.eventNamespace);
            this.anchors.removeAttr('role tabIndex').removeUniqueId();
            this.tabs.add(this.panels).each((function() {
                if ($.data(this, 'ui-tabs-destroy')) {
                    $(this).remove();
                } else {
                    $(this).removeAttr('role tabIndex ' + 'aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded');
                }
            }));
            this.tabs.each((function() {
                var li = $(this), prev = li.data('ui-tabs-aria-controls');
                if (prev) {
                    li.attr('aria-controls', prev).removeData('ui-tabs-aria-controls');
                } else {
                    li.removeAttr('aria-controls');
                }
            }));
            this.panels.show();
            if (this.options.heightStyle !== 'content') {
                this.panels.css('height', '');
            }
        },
        enable: function(index) {
            var disabled = this.options.disabled;
            if (disabled === false) {
                return;
            }
            if (index === undefined) {
                disabled = false;
            } else {
                index = this._getIndex(index);
                if ($.isArray(disabled)) {
                    disabled = $.map(disabled, (function(num) {
                        return num !== index ? num : null;
                    }));
                } else {
                    disabled = $.map(this.tabs, (function(li, num) {
                        return num !== index ? num : null;
                    }));
                }
            }
            this._setOptionDisabled(disabled);
        },
        disable: function(index) {
            var disabled = this.options.disabled;
            if (disabled === true) {
                return;
            }
            if (index === undefined) {
                disabled = true;
            } else {
                index = this._getIndex(index);
                if ($.inArray(index, disabled) !== -1) {
                    return;
                }
                if ($.isArray(disabled)) {
                    disabled = $.merge([ index ], disabled).sort();
                } else {
                    disabled = [ index ];
                }
            }
            this._setOptionDisabled(disabled);
        },
        load: function(index, event) {
            index = this._getIndex(index);
            var that = this, tab = this.tabs.eq(index), anchor = tab.find('.ui-tabs-anchor'), panel = this._getPanelForTab(tab), eventData = {
                tab: tab,
                panel: panel
            }, complete = function(jqXHR, status) {
                if (status === 'abort') {
                    that.panels.stop(false, true);
                }
                that._removeClass(tab, 'ui-tabs-loading');
                panel.removeAttr('aria-busy');
                if (jqXHR === that.xhr) {
                    delete that.xhr;
                }
            };
            if (this._isLocal(anchor[0])) {
                return;
            }
            this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData));
            if (this.xhr && this.xhr.statusText !== 'canceled') {
                this._addClass(tab, 'ui-tabs-loading');
                panel.attr('aria-busy', 'true');
                this.xhr.done((function(response, status, jqXHR) {
                    setTimeout((function() {
                        panel.html(response);
                        that._trigger('load', event, eventData);
                        complete(jqXHR, status);
                    }), 1);
                })).fail((function(jqXHR, status) {
                    setTimeout((function() {
                        complete(jqXHR, status);
                    }), 1);
                }));
            }
        },
        _ajaxSettings: function(anchor, event, eventData) {
            var that = this;
            return {
                url: anchor.attr('href').replace(/#.*$/, ''),
                beforeSend: function(jqXHR, settings) {
                    return that._trigger('beforeLoad', event, $.extend({
                        jqXHR: jqXHR,
                        ajaxSettings: settings
                    }, eventData));
                }
            };
        },
        _getPanelForTab: function(tab) {
            var id = $(tab).attr('aria-controls');
            return this.element.find(this._sanitizeSelector('#' + id));
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget('ui.tabs', $.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments);
                this._addClass(this.tabs, 'ui-tab');
            }
        });
    }
    var widgetsTabs = $.ui.tabs;
    /*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */    $.widget('ui.tooltip', {
        version: '1.12.1',
        options: {
            classes: {
                'ui-tooltip': 'ui-corner-all ui-widget-shadow'
            },
            content: function() {
                var title = $(this).attr('title') || '';
                return $('<a>').text(title).html();
            },
            hide: true,
            items: '[title]:not([disabled])',
            position: {
                my: 'left top+15',
                at: 'left bottom',
                collision: 'flipfit flip'
            },
            show: true,
            track: false,
            close: null,
            open: null
        },
        _addDescribedBy: function(elem, id) {
            var describedby = (elem.attr('aria-describedby') || '').split(/\s+/);
            describedby.push(id);
            elem.data('ui-tooltip-id', id).attr('aria-describedby', $.trim(describedby.join(' ')));
        },
        _removeDescribedBy: function(elem) {
            var id = elem.data('ui-tooltip-id'), describedby = (elem.attr('aria-describedby') || '').split(/\s+/), index = $.inArray(id, describedby);
            if (index !== -1) {
                describedby.splice(index, 1);
            }
            elem.removeData('ui-tooltip-id');
            describedby = $.trim(describedby.join(' '));
            if (describedby) {
                elem.attr('aria-describedby', describedby);
            } else {
                elem.removeAttr('aria-describedby');
            }
        },
        _create: function() {
            this._on({
                mouseover: 'open',
                focusin: 'open'
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = $('<div>').attr({
                role: 'log',
                'aria-live': 'assertive',
                'aria-relevant': 'additions'
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, 'ui-helper-hidden-accessible');
            this.disabledTitles = $([]);
        },
        _setOption: function(key, value) {
            var that = this;
            this._super(key, value);
            if (key === 'content') {
                $.each(this.tooltips, (function(id, tooltipData) {
                    that._updateContent(tooltipData.element);
                }));
            }
        },
        _setOptionDisabled: function(value) {
            this[value ? '_disable' : '_enable']();
        },
        _disable: function() {
            var that = this;
            $.each(this.tooltips, (function(id, tooltipData) {
                var event = $.Event('blur');
                event.target = event.currentTarget = tooltipData.element[0];
                that.close(event, true);
            }));
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function() {
                var element = $(this);
                if (element.is('[title]')) {
                    return element.data('ui-tooltip-title', element.attr('title')).removeAttr('title');
                }
            })));
        },
        _enable: function() {
            this.disabledTitles.each((function() {
                var element = $(this);
                if (element.data('ui-tooltip-title')) {
                    element.attr('title', element.data('ui-tooltip-title'));
                }
            }));
            this.disabledTitles = $([]);
        },
        open: function(event) {
            var that = this, target = $(event ? event.target : this.element).closest(this.options.items);
            if (!target.length || target.data('ui-tooltip-id')) {
                return;
            }
            if (target.attr('title')) {
                target.data('ui-tooltip-title', target.attr('title'));
            }
            target.data('ui-tooltip-open', true);
            if (event && event.type === 'mouseover') {
                target.parents().each((function() {
                    var parent = $(this), blurEvent;
                    if (parent.data('ui-tooltip-open')) {
                        blurEvent = $.Event('blur');
                        blurEvent.target = blurEvent.currentTarget = this;
                        that.close(blurEvent, true);
                    }
                    if (parent.attr('title')) {
                        parent.uniqueId();
                        that.parents[this.id] = {
                            element: this,
                            title: parent.attr('title')
                        };
                        parent.attr('title', '');
                    }
                }));
            }
            this._registerCloseHandlers(event, target);
            this._updateContent(target, event);
        },
        _updateContent: function(target, event) {
            var content, contentOption = this.options.content, that = this, eventType = event ? event.type : null;
            if (typeof contentOption === 'string' || contentOption.nodeType || contentOption.jquery) {
                return this._open(event, target, contentOption);
            }
            content = contentOption.call(target[0], (function(response) {
                that._delay((function() {
                    if (!target.data('ui-tooltip-open')) {
                        return;
                    }
                    if (event) {
                        event.type = eventType;
                    }
                    this._open(event, target, response);
                }));
            }));
            if (content) {
                this._open(event, target, content);
            }
        },
        _open: function(event, target, content) {
            var tooltipData, tooltip, delayedShow, a11yContent, positionOption = $.extend({}, this.options.position);
            if (!content) {
                return;
            }
            tooltipData = this._find(target);
            if (tooltipData) {
                tooltipData.tooltip.find('.ui-tooltip-content').html(content);
                return;
            }
            if (target.is('[title]')) {
                if (event && event.type === 'mouseover') {
                    target.attr('title', '');
                } else {
                    target.removeAttr('title');
                }
            }
            tooltipData = this._tooltip(target);
            tooltip = tooltipData.tooltip;
            this._addDescribedBy(target, tooltip.attr('id'));
            tooltip.find('.ui-tooltip-content').html(content);
            this.liveRegion.children().hide();
            a11yContent = $('<div>').html(tooltip.find('.ui-tooltip-content').html());
            a11yContent.removeAttr('name').find('[name]').removeAttr('name');
            a11yContent.removeAttr('id').find('[id]').removeAttr('id');
            a11yContent.appendTo(this.liveRegion);
            function position(event) {
                positionOption.of = event;
                if (tooltip.is(':hidden')) {
                    return;
                }
                tooltip.position(positionOption);
            }
            if (this.options.track && event && /^mouse/.test(event.type)) {
                this._on(this.document, {
                    mousemove: position
                });
                position(event);
            } else {
                tooltip.position($.extend({
                    of: target
                }, this.options.position));
            }
            tooltip.hide();
            this._show(tooltip, this.options.show);
            if (this.options.track && this.options.show && this.options.show.delay) {
                delayedShow = this.delayedShow = setInterval((function() {
                    if (tooltip.is(':visible')) {
                        position(positionOption.of);
                        clearInterval(delayedShow);
                    }
                }), $.fx.interval);
            }
            this._trigger('open', event, {
                tooltip: tooltip
            });
        },
        _registerCloseHandlers: function(event, target) {
            var events = {
                keyup: function(event) {
                    if (event.keyCode === $.ui.keyCode.ESCAPE) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0];
                        this.close(fakeEvent, true);
                    }
                }
            };
            if (target[0] !== this.element[0]) {
                events.remove = function() {
                    this._removeTooltip(this._find(target).tooltip);
                };
            }
            if (!event || event.type === 'mouseover') {
                events.mouseleave = 'close';
            }
            if (!event || event.type === 'focusin') {
                events.focusout = 'close';
            }
            this._on(true, target, events);
        },
        close: function(event) {
            var tooltip, that = this, target = $(event ? event.currentTarget : this.element), tooltipData = this._find(target);
            if (!tooltipData) {
                target.removeData('ui-tooltip-open');
                return;
            }
            tooltip = tooltipData.tooltip;
            if (tooltipData.closing) {
                return;
            }
            clearInterval(this.delayedShow);
            if (target.data('ui-tooltip-title') && !target.attr('title')) {
                target.attr('title', target.data('ui-tooltip-title'));
            }
            this._removeDescribedBy(target);
            tooltipData.hiding = true;
            tooltip.stop(true);
            this._hide(tooltip, this.options.hide, (function() {
                that._removeTooltip($(this));
            }));
            target.removeData('ui-tooltip-open');
            this._off(target, 'mouseleave focusout keyup');
            if (target[0] !== this.element[0]) {
                this._off(target, 'remove');
            }
            this._off(this.document, 'mousemove');
            if (event && event.type === 'mouseleave') {
                $.each(this.parents, (function(id, parent) {
                    $(parent.element).attr('title', parent.title);
                    delete that.parents[id];
                }));
            }
            tooltipData.closing = true;
            this._trigger('close', event, {
                tooltip: tooltip
            });
            if (!tooltipData.hiding) {
                tooltipData.closing = false;
            }
        },
        _tooltip: function(element) {
            var tooltip = $('<div>').attr('role', 'tooltip'), content = $('<div>').appendTo(tooltip), id = tooltip.uniqueId().attr('id');
            this._addClass(content, 'ui-tooltip-content');
            this._addClass(tooltip, 'ui-tooltip', 'ui-widget ui-widget-content');
            tooltip.appendTo(this._appendTo(element));
            return this.tooltips[id] = {
                element: element,
                tooltip: tooltip
            };
        },
        _find: function(target) {
            var id = target.data('ui-tooltip-id');
            return id ? this.tooltips[id] : null;
        },
        _removeTooltip: function(tooltip) {
            tooltip.remove();
            delete this.tooltips[tooltip.attr('id')];
        },
        _appendTo: function(target) {
            var element = target.closest('.ui-front, dialog');
            if (!element.length) {
                element = this.document[0].body;
            }
            return element;
        },
        _destroy: function() {
            var that = this;
            $.each(this.tooltips, (function(id, tooltipData) {
                var event = $.Event('blur'), element = tooltipData.element;
                event.target = event.currentTarget = element[0];
                that.close(event, true);
                $('#' + id).remove();
                if (element.data('ui-tooltip-title')) {
                    if (!element.attr('title')) {
                        element.attr('title', element.data('ui-tooltip-title'));
                    }
                    element.removeData('ui-tooltip-title');
                }
            }));
            this.liveRegion.remove();
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget('ui.tooltip', $.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var tooltipData = this._superApply(arguments);
                if (this.options.tooltipClass) {
                    tooltipData.tooltip.addClass(this.options.tooltipClass);
                }
                return tooltipData;
            }
        });
    }
    var widgetsTooltip = $.ui.tooltip;
}));

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([ 'jquery' ], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})((function($) {
    'use strict';
    var Slick = window.Slick || {};
    Slick = function() {
        var instanceUid = 0;
        function Slick(element, settings) {
            var _ = this, dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3e3,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: .35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1e3
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data('slick') || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
        }
        return Slick;
    }();
    Slick.prototype.activateADA = function() {
        var _ = this;
        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            tabindex: '0'
        });
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
        var _ = this;
        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }
        _.unload();
        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each((function(index, element) {
            $(element).attr('data-slick-index', index);
        }));
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };
    Slick.prototype.animateSlide = function(targetLeft, callback) {
        var animProps = {}, _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout((function() {
                        _.disableTransition();
                        callback.call();
                    }), _.options.speed);
                }
            }
        }
    };
    Slick.prototype.getNavTarget = function() {
        var _ = this, asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
        return asNavFor;
    };
    Slick.prototype.asNavFor = function(index) {
        var _ = this, asNavFor = _.getNavTarget();
        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each((function() {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            }));
        }
    };
    Slick.prototype.applyTransition = function(slide) {
        var _ = this, transition = {};
        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.autoPlay = function() {
        var _ = this;
        _.autoPlayClear();
        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };
    Slick.prototype.autoPlayClear = function() {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };
    Slick.prototype.autoPlayIterator = function() {
        var _ = this, slideTo = _.currentSlide + _.options.slidesToScroll;
        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false) {
                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {
                    slideTo = _.currentSlide - _.options.slidesToScroll;
                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }
            _.slideHandler(slideTo);
        }
    };
    Slick.prototype.buildArrows = function() {
        var _ = this;
        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {
                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    tabindex: '-1'
                });
            }
        }
    };
    Slick.prototype.buildDots = function() {
        var _ = this, i, dot;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass('slick-dotted');
            dot = $('<ul />').addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find('li').first().addClass('slick-active');
        }
    };
    Slick.prototype.buildOut = function() {
        var _ = this;
        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
        _.slideCount = _.$slides.length;
        _.$slides.each((function(index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        }));
        _.$slider.addClass('slick-slider');
        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };
    Slick.prototype.buildRows = function() {
        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 0) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                width: 100 / _.options.slidesPerRow + '%',
                display: 'inline-block'
            });
        }
    };
    Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this, breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [ _, triggerBreakpoint ]);
            }
        }
    };
    Slick.prototype.changeSlide = function(event, dontAnimate) {
        var _ = this, $target = $(event.currentTarget), indexOffset, slideOffset, unevenOffset;
        if ($target.is('a')) {
            event.preventDefault();
        }
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }
        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
          case 'previous':
            slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
            if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
            }
            break;

          case 'next':
            slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
            if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
            }
            break;

          case 'index':
            var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
            _.slideHandler(_.checkNavigable(index), false, dontAnimate);
            $target.children().trigger('focus');
            break;

          default:
            return;
        }
    };
    Slick.prototype.checkNavigable = function(index) {
        var _ = this, navigables, prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
        return index;
    };
    Slick.prototype.cleanUpEvents = function() {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }
        _.$slider.off('focus.slick blur.slick');
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }
        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
        _.$list.off('click.slick', _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }
        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function() {
        var _ = this;
        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function() {
        var _ = this, originalSlides;
        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };
    Slick.prototype.clickHandler = function(event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Slick.prototype.destroy = function(refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $('.slick-cloned', _.$slider).detach();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }
        if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }
        if (_.$slides) {
            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each((function() {
                $(this).attr('style', $(this).data('originalStyling'));
            }));
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
        }
        _.cleanUpRows();
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');
        _.unslicked = true;
        if (!refresh) {
            _.$slider.trigger('destroy', [ _ ]);
        }
    };
    Slick.prototype.disableTransition = function(slide) {
        var _ = this, transition = {};
        transition[_.transitionType] = '';
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.fadeSlide = function(slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });
            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });
            if (callback) {
                setTimeout((function() {
                    _.disableTransition(slideIndex);
                    callback.call();
                }), _.options.speed);
            }
        }
    };
    Slick.prototype.fadeSlideOut = function(slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', (function(event) {
            event.stopImmediatePropagation();
            var $sf = $(this);
            setTimeout((function() {
                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }), 0);
        }));
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
        var _ = this;
        return _.currentSlide;
    };
    Slick.prototype.getDotCount = function() {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }
        return pagerQty - 1;
    };
    Slick.prototype.getLeft = function(slideIndex) {
        var _ = this, targetLeft, verticalHeight, verticalOffset = 0, targetSlide, coef;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1;
                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2;
                    }
                }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }
        if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
        return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
        var _ = this;
        return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function() {
        var _ = this, breakPoint = 0, counter = 0, indexes = [], max;
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
        return indexes;
    };
    Slick.prototype.getSlick = function() {
        return this;
    };
    Slick.prototype.getSlideCount = function() {
        var _ = this, slidesTraversed, swipedSlide, centerOffset;
        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each((function(index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            }));
            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };
    Slick.prototype.init = function(creation) {
        var _ = this;
        if (!$(_.$slider).hasClass('slick-initialized')) {
            $(_.$slider).addClass('slick-initialized');
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }
        if (creation) {
            _.$slider.trigger('init', [ _ ]);
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }
        if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay();
        }
    };
    Slick.prototype.initADA = function() {
        var _ = this, numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow), tabControlIndexes = _.getNavigableIndexes().filter((function(val) {
            return val >= 0 && val < _.slideCount;
        }));
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            tabindex: '-1'
        }).find('a, input, button, select').attr({
            tabindex: '-1'
        });
        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each((function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);
                $(this).attr({
                    role: 'tabpanel',
                    id: 'slick-slide' + _.instanceUid + i,
                    tabindex: -1
                });
                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            }));
            _.$dots.attr('role', 'tablist').find('li').each((function(i) {
                var mappedSlideIndex = tabControlIndexes[i];
                $(this).attr({
                    role: 'presentation'
                });
                $(this).find('button').first().attr({
                    role: 'tab',
                    id: 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': i + 1 + ' of ' + numDotGroups,
                    'aria-selected': null,
                    tabindex: '-1'
                });
            })).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                tabindex: '0'
            }).end();
        }
        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({
                    tabindex: '0'
                });
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }
        _.activateADA();
    };
    Slick.prototype.initArrowEvents = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
    };
    Slick.prototype.initDotEvents = function() {
        var _ = this;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }
        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initSlideEvents = function() {
        var _ = this;
        if (_.options.pauseOnHover) {
            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initializeEvents = function() {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('click.slick', _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };
    Slick.prototype.initUI = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
        }
    };
    Slick.prototype.keyHandler = function(event) {
        var _ = this;
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };
    Slick.prototype.lazyLoad = function() {
        var _ = this, loadRange, cloneRange, rangeStart, rangeEnd;
        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each((function() {
                var image = $(this), imageSource = $(this).attr('data-lazy'), imageSrcSet = $(this).attr('data-srcset'), imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'), imageToLoad = document.createElement('img');
                imageToLoad.onload = function() {
                    image.animate({
                        opacity: 0
                    }, 100, (function() {
                        if (imageSrcSet) {
                            image.attr('srcset', imageSrcSet);
                            if (imageSizes) {
                                image.attr('sizes', imageSizes);
                            }
                        }
                        image.attr('src', imageSource).animate({
                            opacity: 1
                        }, 200, (function() {
                            image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                        }));
                        _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                    }));
                };
                imageToLoad.onerror = function() {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
                };
                imageToLoad.src = imageSource;
            }));
        }
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1, nextSlide = rangeEnd, $slides = _.$slider.find('.slick-slide');
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };
    Slick.prototype.loadSlider = function() {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({
            opacity: 1
        });
        _.$slider.removeClass('slick-loading');
        _.initUI();
        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };
    Slick.prototype.orientationChange = function() {
        var _ = this;
        _.checkResponsive();
        _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function() {
        var _ = this;
        _.autoPlayClear();
        _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function() {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };
    Slick.prototype.postSlide = function(index) {
        var _ = this;
        if (!_.unslicked) {
            _.$slider.trigger('afterChange', [ _, index ]);
            _.animating = false;
            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }
            _.swipeLeft = null;
            if (_.options.autoplay) {
                _.autoPlay();
            }
            if (_.options.accessibility === true) {
                _.initADA();
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function() {
        var _ = this;
        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };
    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function(tryCount) {
        tryCount = tryCount || 1;
        var _ = this, $imgsToLoad = $('img[data-lazy]', _.$slider), image, imageSource, imageSrcSet, imageSizes, imageToLoad;
        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');
            imageToLoad.onload = function() {
                if (imageSrcSet) {
                    image.attr('srcset', imageSrcSet);
                    if (imageSizes) {
                        image.attr('sizes', imageSizes);
                    }
                }
                image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }
                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();
            };
            imageToLoad.onerror = function() {
                if (tryCount < 3) {
                    setTimeout((function() {
                        _.progressiveLazyLoad(tryCount + 1);
                    }), 500);
                } else {
                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);
                    _.progressiveLazyLoad();
                }
            };
            imageToLoad.src = imageSource;
        } else {
            _.$slider.trigger('allImagesLoaded', [ _ ]);
        }
    };
    Slick.prototype.refresh = function(initializing) {
        var _ = this, currentSlide, lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, {
            currentSlide: currentSlide
        });
        _.init();
        if (!initializing) {
            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };
    Slick.prototype.registerBreakpoints = function() {
        var _ = this, breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || 'window';
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }
            _.breakpoints.sort((function(a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            }));
        }
    };
    Slick.prototype.reinit = function() {
        var _ = this;
        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }
        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger('reInit', [ _ ]);
    };
    Slick.prototype.resize = function() {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout((function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }), 50);
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
        var _ = this;
        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
        _.unload();
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.setCSS = function(position) {
        var _ = this, positionProps = {}, x, y;
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };
    Slick.prototype.setDimensions = function() {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5e3 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }
        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function() {
        var _ = this, targetLeft;
        _.$slides.each((function(index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        }));
        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };
    Slick.prototype.setHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
        var _ = this, l, item, option, value, refresh = false, type;
        if ($.type(arguments[0]) === 'object') {
            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {
                type = 'single';
            }
        }
        if (type === 'single') {
            _.options[option] = value;
        } else if (type === 'multiple') {
            $.each(option, (function(opt, val) {
                _.options[opt] = val;
            }));
        } else if (type === 'responsive') {
            for (item in value) {
                if ($.type(_.options.responsive) !== 'array') {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length - 1;
                    while (l >= 0) {
                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                            _.options.responsive.splice(l, 1);
                        }
                        l--;
                    }
                    _.options.responsive.push(value[item]);
                }
            }
        }
        if (refresh) {
            _.unload();
            _.reinit();
        }
    };
    Slick.prototype.setPosition = function() {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
        _.$slider.trigger('setPosition', [ _ ]);
    };
    Slick.prototype.setProps = function() {
        var _ = this, bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? 'top' : 'left';
        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }
        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };
    Slick.prototype.setSlideClasses = function(index) {
        var _ = this, centerOffset, allSlides, indexOffset, remainder;
        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
        _.$slides.eq(index).addClass('slick-current');
        if (_.options.centerMode === true) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                    _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }
                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }
            _.$slides.eq(index).addClass('slick-center');
        } else {
            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }
        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };
    Slick.prototype.setupInfinite = function() {
        var _ = this, i, slideIndex, infiniteCount;
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each((function() {
                    $(this).attr('id', '');
                }));
            }
        }
    };
    Slick.prototype.interrupt = function(toggle) {
        var _ = this;
        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function(event) {
        var _ = this;
        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
        var index = parseInt(targetElement.attr('data-slick-index'));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideHandler(index, false, true);
            return;
        }
        _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null, _ = this, navTarget;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
        if (sync === false) {
            _.asNavFor(index);
        }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, (function() {
                        _.postSlide(targetSlide);
                    }));
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, (function() {
                        _.postSlide(targetSlide);
                    }));
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
        _.animating = true;
        _.$slider.trigger('beforeChange', [ _, _.currentSlide, animSlide ]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');
            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, (function() {
                    _.postSlide(animSlide);
                }));
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, (function() {
                _.postSlide(animSlide);
            }));
        } else {
            _.postSlide(animSlide);
        }
    };
    Slick.prototype.startLoad = function() {
        var _ = this;
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
        }
        _.$slider.addClass('slick-loading');
    };
    Slick.prototype.swipeDirection = function() {
        var xDist, yDist, r, swipeAngle, _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }
        return 'vertical';
    };
    Slick.prototype.swipeEnd = function(event) {
        var _ = this, slideCount, direction;
        _.dragging = false;
        _.swiping = false;
        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
        if (_.touchObject.curX === undefined) {
            return false;
        }
        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [ _, _.swipeDirection() ]);
        }
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
              case 'left':
              case 'down':
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                _.currentDirection = 0;
                break;

              case 'right':
              case 'up':
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                _.currentDirection = 1;
                break;

              default:
            }
            if (direction != 'vertical') {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [ _, direction ]);
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };
    Slick.prototype.swipeHandler = function(event) {
        var _ = this;
        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }
        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }
        switch (event.data.action) {
          case 'start':
            _.swipeStart(event);
            break;

          case 'move':
            _.swipeMove(event);
            break;

          case 'end':
            _.swipeEnd(event);
            break;
        }
    };
    Slick.prototype.swipeMove = function(event) {
        var _ = this, edgeWasHit = false, curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }
        swipeDirection = _.swipeDirection();
        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }
        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
        _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function(event) {
        var _ = this, touches;
        _.interrupted = true;
        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }
        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }
        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
        var _ = this;
        if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.unload = function() {
        var _ = this;
        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };
    Slick.prototype.unslick = function(fromBreakpoint) {
        var _ = this;
        _.$slider.trigger('unslick', [ _, fromBreakpoint ]);
        _.destroy();
    };
    Slick.prototype.updateArrows = function() {
        var _ = this, centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };
    Slick.prototype.updateDots = function() {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find('li').removeClass('slick-active').end();
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
        }
    };
    Slick.prototype.visibility = function() {
        var _ = this;
        if (_.options.autoplay) {
            if (document[_.hidden]) {
                _.interrupted = true;
            } else {
                _.interrupted = false;
            }
        }
    };
    $.fn.slick = function() {
        var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length, i, ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt); else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
}));

/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n) {
    'function' == typeof define && define.amd ? define([ 'jquery' ], n) : 'object' == typeof module && module.exports ? module.exports = function(e, t) {
        return void 0 === t && (t = 'undefined' != typeof window ? require('jquery') : require('jquery')(e)), 
        n(t), t;
    } : n(jQuery);
}((function(t) {
    var e, n, s, p, r, o, h, f, g, m, y, v, i, a, _, s = ((u = t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : u) && u.requirejs || (u ? n = u : u = {}, 
    g = {}, m = {}, y = {}, v = {}, i = Object.prototype.hasOwnProperty, a = [].slice, 
    _ = /\.js$/, h = function(e, t) {
        var n, s, i = c(e), r = i[0], t = t[1];
        return e = i[1], r && (n = x(r = l(r, t))), r ? e = n && n.normalize ? n.normalize(e, (s = t, 
        function(e) {
            return l(e, s);
        })) : l(e, t) : (r = (i = c(e = l(e, t)))[0], e = i[1], r && (n = x(r))), {
            f: r ? r + '!' + e : e,
            n: e,
            pr: r,
            p: n
        };
    }, f = {
        require: function(e) {
            return w(e);
        },
        exports: function(e) {
            var t = g[e];
            return void 0 !== t ? t : g[e] = {};
        },
        module: function(e) {
            return {
                id: e,
                uri: '',
                exports: g[e],
                config: (t = e, function() {
                    return y && y.config && y.config[t] || {};
                })
            };
            var t;
        }
    }, r = function(e, t, n, s) {
        var i, r, o, a, l, c = [], u = typeof n, d = A(s = s || e);
        if ('undefined' == u || 'function' == u) {
            for (t = !t.length && n.length ? [ 'require', 'exports', 'module' ] : t, a = 0; a < t.length; a += 1) if ('require' === (r = (o = h(t[a], d)).f)) c[a] = f.require(e); else if ('exports' === r) c[a] = f.exports(e), 
            l = !0; else if ('module' === r) i = c[a] = f.module(e); else if (b(g, r) || b(m, r) || b(v, r)) c[a] = x(r); else {
                if (!o.p) throw new Error(e + ' missing ' + r);
                o.p.load(o.n, w(s, !0), function(t) {
                    return function(e) {
                        g[t] = e;
                    };
                }(r), {}), c[a] = g[r];
            }
            u = n ? n.apply(g[e], c) : void 0, e && (i && i.exports !== p && i.exports !== g[e] ? g[e] = i.exports : u === p && l || (g[e] = u));
        } else e && (g[e] = n);
    }, e = n = o = function(e, t, n, s, i) {
        if ('string' == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
        if (!e.splice) {
            if ((y = e).deps && o(y.deps, y.callback), !t) return;
            t.splice ? (e = t, t = n, n = null) : e = p;
        }
        return t = t || function() {}, 'function' == typeof n && (n = s, s = i), s ? r(p, e, t, n) : setTimeout((function() {
            r(p, e, t, n);
        }), 4), o;
    }, o.config = function(e) {
        return o(e);
    }, e._defined = g, (s = function(e, t, n) {
        if ('string' != typeof e) throw new Error('See almond README: incorrect module build, no module name');
        t.splice || (n = t, t = []), b(g, e) || b(m, e) || (m[e] = [ e, t, n ]);
    }).amd = {
        jQuery: !0
    }, u.requirejs = e, u.require = n, u.define = s), u.define('almond', (function() {})), 
    u.define('jquery', [], (function() {
        var e = t || $;
        return null == e && console && console.error && console.error('Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.'), 
        e;
    })), u.define('select2/utils', [ 'jquery' ], (function(r) {
        var s = {};
        function c(e) {
            var t, n = e.prototype, s = [];
            for (t in n) 'function' == typeof n[t] && 'constructor' !== t && s.push(t);
            return s;
        }
        s.Extend = function(e, t) {
            var n, s = {}.hasOwnProperty;
            function i() {
                this.constructor = e;
            }
            for (n in t) s.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, 
            e;
        }, s.Decorate = function(s, i) {
            var e = c(i), t = c(s);
            function r() {
                var e = Array.prototype.unshift, t = i.prototype.constructor.length, n = s.prototype.constructor;
                0 < t && (e.call(arguments, s.prototype.constructor), n = i.prototype.constructor), 
                n.apply(this, arguments);
            }
            i.displayName = s.displayName, r.prototype = new function() {
                this.constructor = r;
            };
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                r.prototype[o] = s.prototype[o];
            }
            for (var a = 0; a < e.length; a++) {
                var l = e[a];
                r.prototype[l] = function(e) {
                    var t = function() {};
                    e in r.prototype && (t = r.prototype[e]);
                    var n = i.prototype[e];
                    return function() {
                        return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
                    };
                }(l);
            }
            return r;
        };
        function e() {
            this.listeners = {};
        }
        e.prototype.on = function(e, t) {
            this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [ t ];
        }, e.prototype.trigger = function(e) {
            var t = Array.prototype.slice, n = t.call(arguments, 1);
            this.listeners = this.listeners || {}, 0 === (n = null == n ? [] : n).length && n.push({}), 
            (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), 
            '*' in this.listeners && this.invoke(this.listeners['*'], arguments);
        }, e.prototype.invoke = function(e, t) {
            for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
        }, s.Observable = e, s.generateChars = function(e) {
            for (var t = '', n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
            return t;
        }, s.bind = function(e, t) {
            return function() {
                e.apply(t, arguments);
            };
        }, s._convertData = function(e) {
            for (var t in e) {
                var n = t.split('-'), s = e;
                if (1 !== n.length) {
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i];
                        (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in s || (s[r] = {}), i == n.length - 1 && (s[r] = e[t]), 
                        s = s[r];
                    }
                    delete e[t];
                }
            }
            return e;
        }, s.hasScroll = function(e, t) {
            var n = r(t), s = t.style.overflowX, i = t.style.overflowY;
            return (s !== i || 'hidden' !== i && 'visible' !== i) && ('scroll' === s || 'scroll' === i || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth));
        }, s.escapeMarkup = function(e) {
            var t = {
                '\\': '&#92;',
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                '\'': '&#39;',
                '/': '&#47;'
            };
            return 'string' != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                return t[e];
            }));
        }, s.__cache = {};
        var n = 0;
        return s.GetUniqueElementId = function(e) {
            var t = e.getAttribute('data-select2-id');
            return null != t || (t = e.id ? 'select2-data-' + e.id : 'select2-data-' + (++n).toString() + '-' + s.generateChars(4), 
            e.setAttribute('data-select2-id', t)), t;
        }, s.StoreData = function(e, t, n) {
            e = s.GetUniqueElementId(e);
            s.__cache[e] || (s.__cache[e] = {}), s.__cache[e][t] = n;
        }, s.GetData = function(e, t) {
            var n = s.GetUniqueElementId(e);
            return t ? s.__cache[n] && null != s.__cache[n][t] ? s.__cache[n][t] : r(e).data(t) : s.__cache[n];
        }, s.RemoveData = function(e) {
            var t = s.GetUniqueElementId(e);
            null != s.__cache[t] && delete s.__cache[t], e.removeAttribute('data-select2-id');
        }, s.copyNonInternalCssClasses = function(e, t) {
            var n = (n = e.getAttribute('class').trim().split(/\s+/)).filter((function(e) {
                return 0 === e.indexOf('select2-');
            })), t = (t = t.getAttribute('class').trim().split(/\s+/)).filter((function(e) {
                return 0 !== e.indexOf('select2-');
            })), t = n.concat(t);
            e.setAttribute('class', t.join(' '));
        }, s;
    })), u.define('select2/results', [ 'jquery', './utils' ], (function(d, p) {
        function s(e, t, n) {
            this.$element = e, this.data = n, this.options = t, s.__super__.constructor.call(this);
        }
        return p.Extend(s, p.Observable), s.prototype.render = function() {
            var e = d('<ul class="select2-results__options" role="listbox"></ul>');
            return this.options.get('multiple') && e.attr('aria-multiselectable', 'true'), this.$results = e;
        }, s.prototype.clear = function() {
            this.$results.empty();
        }, s.prototype.displayMessage = function(e) {
            var t = this.options.get('escapeMarkup');
            this.clear(), this.hideLoading();
            var n = d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'), s = this.options.get('translations').get(e.message);
            n.append(t(s(e.args))), n[0].className += ' select2-results__message', this.$results.append(n);
        }, s.prototype.hideMessages = function() {
            this.$results.find('.select2-results__message').remove();
        }, s.prototype.append = function(e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                    var s = e.results[n], s = this.option(s);
                    t.push(s);
                }
                this.$results.append(t);
            } else 0 === this.$results.children().length && this.trigger('results:message', {
                message: 'noResults'
            });
        }, s.prototype.position = function(e, t) {
            t.find('.select2-results').append(e);
        }, s.prototype.sort = function(e) {
            return this.options.get('sorter')(e);
        }, s.prototype.highlightFirstItem = function() {
            var e = this.$results.find('.select2-results__option--selectable'), t = e.filter('.select2-results__option--selected');
            (0 < t.length ? t : e).first().trigger('mouseenter'), this.ensureHighlightVisible();
        }, s.prototype.setClasses = function() {
            var t = this;
            this.data.current((function(e) {
                var s = e.map((function(e) {
                    return e.id.toString();
                }));
                t.$results.find('.select2-results__option--selectable').each((function() {
                    var e = d(this), t = p.GetData(this, 'data'), n = '' + t.id;
                    null != t.element && t.element.selected || null == t.element && -1 < s.indexOf(n) ? (this.classList.add('select2-results__option--selected'), 
                    e.attr('aria-selected', 'true')) : (this.classList.remove('select2-results__option--selected'), 
                    e.attr('aria-selected', 'false'));
                }));
            }));
        }, s.prototype.showLoading = function(e) {
            this.hideLoading();
            e = {
                disabled: !0,
                loading: !0,
                text: this.options.get('translations').get('searching')(e)
            }, e = this.option(e);
            e.className += ' loading-results', this.$results.prepend(e);
        }, s.prototype.hideLoading = function() {
            this.$results.find('.loading-results').remove();
        }, s.prototype.option = function(e) {
            var t = document.createElement('li');
            t.classList.add('select2-results__option'), t.classList.add('select2-results__option--selectable');
            var n, s = {
                role: 'option'
            }, i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
            for (n in (null != e.element && i.call(e.element, ':disabled') || null == e.element && e.disabled) && (s['aria-disabled'] = 'true', 
            t.classList.remove('select2-results__option--selectable'), t.classList.add('select2-results__option--disabled')), 
            null == e.id && t.classList.remove('select2-results__option--selectable'), null != e._resultId && (t.id = e._resultId), 
            e.title && (t.title = e.title), e.children && (s.role = 'group', s['aria-label'] = e.text, 
            t.classList.remove('select2-results__option--selectable'), t.classList.add('select2-results__option--group')), 
            s) {
                var r = s[n];
                t.setAttribute(n, r);
            }
            if (e.children) {
                var o = d(t), a = document.createElement('strong');
                a.className = 'select2-results__group', this.template(e, a);
                for (var l = [], c = 0; c < e.children.length; c++) {
                    var u = e.children[c], u = this.option(u);
                    l.push(u);
                }
                i = d('<ul></ul>', {
                    class: 'select2-results__options select2-results__options--nested',
                    role: 'none'
                });
                i.append(l), o.append(a), o.append(i);
            } else this.template(e, t);
            return p.StoreData(t, 'data', e), t;
        }, s.prototype.bind = function(t, e) {
            var i = this, n = t.id + '-results';
            this.$results.attr('id', n), t.on('results:all', (function(e) {
                i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem());
            })), t.on('results:append', (function(e) {
                i.append(e.data), t.isOpen() && i.setClasses();
            })), t.on('query', (function(e) {
                i.hideMessages(), i.showLoading(e);
            })), t.on('select', (function() {
                t.isOpen() && (i.setClasses(), i.options.get('scrollAfterSelect') && i.highlightFirstItem());
            })), t.on('unselect', (function() {
                t.isOpen() && (i.setClasses(), i.options.get('scrollAfterSelect') && i.highlightFirstItem());
            })), t.on('open', (function() {
                i.$results.attr('aria-expanded', 'true'), i.$results.attr('aria-hidden', 'false'), 
                i.setClasses(), i.ensureHighlightVisible();
            })), t.on('close', (function() {
                i.$results.attr('aria-expanded', 'false'), i.$results.attr('aria-hidden', 'true'), 
                i.$results.removeAttr('aria-activedescendant');
            })), t.on('results:toggle', (function() {
                var e = i.getHighlightedResults();
                0 !== e.length && e.trigger('mouseup');
            })), t.on('results:select', (function() {
                var e, t = i.getHighlightedResults();
                0 !== t.length && (e = p.GetData(t[0], 'data'), t.hasClass('select2-results__option--selected') ? i.trigger('close', {}) : i.trigger('select', {
                    data: e
                }));
            })), t.on('results:previous', (function() {
                var e, t = i.getHighlightedResults(), n = i.$results.find('.select2-results__option--selectable'), s = n.index(t);
                s <= 0 || (e = s - 1, 0 === t.length && (e = 0), (s = n.eq(e)).trigger('mouseenter'), 
                t = i.$results.offset().top, n = s.offset().top, s = i.$results.scrollTop() + (n - t), 
                0 === e ? i.$results.scrollTop(0) : n - t < 0 && i.$results.scrollTop(s));
            })), t.on('results:next', (function() {
                var e, t = i.getHighlightedResults(), n = i.$results.find('.select2-results__option--selectable'), s = n.index(t) + 1;
                s >= n.length || ((e = n.eq(s)).trigger('mouseenter'), t = i.$results.offset().top + i.$results.outerHeight(!1), 
                n = e.offset().top + e.outerHeight(!1), e = i.$results.scrollTop() + n - t, 0 === s ? i.$results.scrollTop(0) : t < n && i.$results.scrollTop(e));
            })), t.on('results:focus', (function(e) {
                e.element[0].classList.add('select2-results__option--highlighted'), e.element[0].setAttribute('aria-selected', 'true');
            })), t.on('results:message', (function(e) {
                i.displayMessage(e);
            })), d.fn.mousewheel && this.$results.on('mousewheel', (function(e) {
                var t = i.$results.scrollTop(), n = i.$results.get(0).scrollHeight - t + e.deltaY, t = 0 < e.deltaY && t - e.deltaY <= 0, n = e.deltaY < 0 && n <= i.$results.height();
                t ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : n && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), 
                e.preventDefault(), e.stopPropagation());
            })), this.$results.on('mouseup', '.select2-results__option--selectable', (function(e) {
                var t = d(this), n = p.GetData(this, 'data');
                t.hasClass('select2-results__option--selected') ? i.options.get('multiple') ? i.trigger('unselect', {
                    originalEvent: e,
                    data: n
                }) : i.trigger('close', {}) : i.trigger('select', {
                    originalEvent: e,
                    data: n
                });
            })), this.$results.on('mouseenter', '.select2-results__option--selectable', (function(e) {
                var t = p.GetData(this, 'data');
                i.getHighlightedResults().removeClass('select2-results__option--highlighted').attr('aria-selected', 'false'), 
                i.trigger('results:focus', {
                    data: t,
                    element: d(this)
                });
            }));
        }, s.prototype.getHighlightedResults = function() {
            return this.$results.find('.select2-results__option--highlighted');
        }, s.prototype.destroy = function() {
            this.$results.remove();
        }, s.prototype.ensureHighlightVisible = function() {
            var e, t, n, s, i = this.getHighlightedResults();
            0 !== i.length && (e = this.$results.find('.select2-results__option--selectable').index(i), 
            s = this.$results.offset().top, t = i.offset().top, n = this.$results.scrollTop() + (t - s), 
            s = t - s, n -= 2 * i.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(n));
        }, s.prototype.template = function(e, t) {
            var n = this.options.get('templateResult'), s = this.options.get('escapeMarkup'), e = n(e, t);
            null == e ? t.style.display = 'none' : 'string' == typeof e ? t.innerHTML = s(e) : d(t).append(e);
        }, s;
    })), u.define('select2/keys', [], (function() {
        return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
        };
    })), u.define('select2/selection/base', [ 'jquery', '../utils', '../keys' ], (function(n, s, i) {
        function r(e, t) {
            this.$element = e, this.options = t, r.__super__.constructor.call(this);
        }
        return s.Extend(r, s.Observable), r.prototype.render = function() {
            var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
            return this._tabindex = 0, null != s.GetData(this.$element[0], 'old-tabindex') ? this._tabindex = s.GetData(this.$element[0], 'old-tabindex') : null != this.$element.attr('tabindex') && (this._tabindex = this.$element.attr('tabindex')), 
            e.attr('title', this.$element.attr('title')), e.attr('tabindex', this._tabindex), 
            e.attr('aria-disabled', 'false'), this.$selection = e;
        }, r.prototype.bind = function(e, t) {
            var n = this, s = e.id + '-results';
            this.container = e, this.$selection.on('focus', (function(e) {
                n.trigger('focus', e);
            })), this.$selection.on('blur', (function(e) {
                n._handleBlur(e);
            })), this.$selection.on('keydown', (function(e) {
                n.trigger('keypress', e), e.which === i.SPACE && e.preventDefault();
            })), e.on('results:focus', (function(e) {
                n.$selection.attr('aria-activedescendant', e.data._resultId);
            })), e.on('selection:update', (function(e) {
                n.update(e.data);
            })), e.on('open', (function() {
                n.$selection.attr('aria-expanded', 'true'), n.$selection.attr('aria-owns', s), n._attachCloseHandler(e);
            })), e.on('close', (function() {
                n.$selection.attr('aria-expanded', 'false'), n.$selection.removeAttr('aria-activedescendant'), 
                n.$selection.removeAttr('aria-owns'), n.$selection.trigger('focus'), n._detachCloseHandler(e);
            })), e.on('enable', (function() {
                n.$selection.attr('tabindex', n._tabindex), n.$selection.attr('aria-disabled', 'false');
            })), e.on('disable', (function() {
                n.$selection.attr('tabindex', '-1'), n.$selection.attr('aria-disabled', 'true');
            }));
        }, r.prototype._handleBlur = function(e) {
            var t = this;
            window.setTimeout((function() {
                document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger('blur', e);
            }), 1);
        }, r.prototype._attachCloseHandler = function(e) {
            n(document.body).on('mousedown.select2.' + e.id, (function(e) {
                var t = n(e.target).closest('.select2');
                n('.select2.select2-container--open').each((function() {
                    this != t[0] && s.GetData(this, 'element').select2('close');
                }));
            }));
        }, r.prototype._detachCloseHandler = function(e) {
            n(document.body).off('mousedown.select2.' + e.id);
        }, r.prototype.position = function(e, t) {
            t.find('.selection').append(e);
        }, r.prototype.destroy = function() {
            this._detachCloseHandler(this.container);
        }, r.prototype.update = function(e) {
            throw new Error('The `update` method must be defined in child classes.');
        }, r.prototype.isEnabled = function() {
            return !this.isDisabled();
        }, r.prototype.isDisabled = function() {
            return this.options.get('disabled');
        }, r;
    })), u.define('select2/selection/single', [ 'jquery', './base', '../utils', '../keys' ], (function(e, t, n, s) {
        function i() {
            i.__super__.constructor.apply(this, arguments);
        }
        return n.Extend(i, t), i.prototype.render = function() {
            var e = i.__super__.render.call(this);
            return e[0].classList.add('select2-selection--single'), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), 
            e;
        }, i.prototype.bind = function(t, e) {
            var n = this;
            i.__super__.bind.apply(this, arguments);
            var s = t.id + '-container';
            this.$selection.find('.select2-selection__rendered').attr('id', s).attr('role', 'textbox').attr('aria-readonly', 'true'), 
            this.$selection.attr('aria-labelledby', s), this.$selection.attr('aria-controls', s), 
            this.$selection.on('mousedown', (function(e) {
                1 === e.which && n.trigger('toggle', {
                    originalEvent: e
                });
            })), this.$selection.on('focus', (function(e) {})), this.$selection.on('blur', (function(e) {})), 
            t.on('focus', (function(e) {
                t.isOpen() || n.$selection.trigger('focus');
            }));
        }, i.prototype.clear = function() {
            var e = this.$selection.find('.select2-selection__rendered');
            e.empty(), e.removeAttr('title');
        }, i.prototype.display = function(e, t) {
            var n = this.options.get('templateSelection');
            return this.options.get('escapeMarkup')(n(e, t));
        }, i.prototype.selectionContainer = function() {
            return e('<span></span>');
        }, i.prototype.update = function(e) {
            var t, n;
            0 !== e.length ? (n = e[0], t = this.$selection.find('.select2-selection__rendered'), 
            e = this.display(n, t), t.empty().append(e), (n = n.title || n.text) ? t.attr('title', n) : t.removeAttr('title')) : this.clear();
        }, i;
    })), u.define('select2/selection/multiple', [ 'jquery', './base', '../utils' ], (function(i, e, c) {
        function r(e, t) {
            r.__super__.constructor.apply(this, arguments);
        }
        return c.Extend(r, e), r.prototype.render = function() {
            var e = r.__super__.render.call(this);
            return e[0].classList.add('select2-selection--multiple'), e.html('<ul class="select2-selection__rendered"></ul>'), 
            e;
        }, r.prototype.bind = function(e, t) {
            var n = this;
            r.__super__.bind.apply(this, arguments);
            var s = e.id + '-container';
            this.$selection.find('.select2-selection__rendered').attr('id', s), this.$selection.on('click', (function(e) {
                n.trigger('toggle', {
                    originalEvent: e
                });
            })), this.$selection.on('click', '.select2-selection__choice__remove', (function(e) {
                var t;
                n.isDisabled() || (t = i(this).parent(), t = c.GetData(t[0], 'data'), n.trigger('unselect', {
                    originalEvent: e,
                    data: t
                }));
            })), this.$selection.on('keydown', '.select2-selection__choice__remove', (function(e) {
                n.isDisabled() || e.stopPropagation();
            }));
        }, r.prototype.clear = function() {
            var e = this.$selection.find('.select2-selection__rendered');
            e.empty(), e.removeAttr('title');
        }, r.prototype.display = function(e, t) {
            var n = this.options.get('templateSelection');
            return this.options.get('escapeMarkup')(n(e, t));
        }, r.prototype.selectionContainer = function() {
            return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');
        }, r.prototype.update = function(e) {
            if (this.clear(), 0 !== e.length) {
                for (var t = [], n = this.$selection.find('.select2-selection__rendered').attr('id') + '-choice-', s = 0; s < e.length; s++) {
                    var i = e[s], r = this.selectionContainer(), o = this.display(i, r), a = n + c.generateChars(4) + '-';
                    i.id ? a += i.id : a += c.generateChars(4), r.find('.select2-selection__choice__display').append(o).attr('id', a);
                    var l = i.title || i.text;
                    l && r.attr('title', l);
                    o = this.options.get('translations').get('removeItem'), l = r.find('.select2-selection__choice__remove');
                    l.attr('title', o()), l.attr('aria-label', o()), l.attr('aria-describedby', a), 
                    c.StoreData(r[0], 'data', i), t.push(r);
                }
                this.$selection.find('.select2-selection__rendered').append(t);
            }
        }, r;
    })), u.define('select2/selection/placeholder', [], (function() {
        function e(e, t, n) {
            this.placeholder = this.normalizePlaceholder(n.get('placeholder')), e.call(this, t, n);
        }
        return e.prototype.normalizePlaceholder = function(e, t) {
            return t = 'string' == typeof t ? {
                id: '',
                text: t
            } : t;
        }, e.prototype.createPlaceholder = function(e, t) {
            var n = this.selectionContainer();
            n.html(this.display(t)), n[0].classList.add('select2-selection__placeholder'), n[0].classList.remove('select2-selection__choice');
            t = t.title || t.text || n.text();
            return this.$selection.find('.select2-selection__rendered').attr('title', t), n;
        }, e.prototype.update = function(e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n) return e.call(this, t);
            this.clear();
            t = this.createPlaceholder(this.placeholder);
            this.$selection.find('.select2-selection__rendered').append(t);
        }, e;
    })), u.define('select2/selection/allowClear', [ 'jquery', '../keys', '../utils' ], (function(i, s, a) {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n), null == this.placeholder && this.options.get('debug') && window.console && console.error && console.error('Select2: The `allowClear` option should be used in combination with the `placeholder` option.'), 
            this.$selection.on('mousedown', '.select2-selection__clear', (function(e) {
                s._handleClear(e);
            })), t.on('keypress', (function(e) {
                s._handleKeyboardClear(e, t);
            }));
        }, e.prototype._handleClear = function(e, t) {
            if (!this.isDisabled()) {
                var n = this.$selection.find('.select2-selection__clear');
                if (0 !== n.length) {
                    t.stopPropagation();
                    var s = a.GetData(n[0], 'data'), i = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var r = {
                        data: s
                    };
                    if (this.trigger('clear', r), r.prevented) this.$element.val(i); else {
                        for (var o = 0; o < s.length; o++) if (r = {
                            data: s[o]
                        }, this.trigger('unselect', r), r.prevented) return void this.$element.val(i);
                        this.$element.trigger('input').trigger('change'), this.trigger('toggle', {});
                    }
                }
            }
        }, e.prototype._handleKeyboardClear = function(e, t, n) {
            n.isOpen() || t.which != s.DELETE && t.which != s.BACKSPACE || this._handleClear(t);
        }, e.prototype.update = function(e, t) {
            var n, s;
            e.call(this, t), this.$selection.find('.select2-selection__clear').remove(), this.$selection[0].classList.remove('select2-selection--clearable'), 
            0 < this.$selection.find('.select2-selection__placeholder').length || 0 === t.length || (n = this.$selection.find('.select2-selection__rendered').attr('id'), 
            s = this.options.get('translations').get('removeAllItems'), (e = i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr('title', s()), 
            e.attr('aria-label', s()), e.attr('aria-describedby', n), a.StoreData(e[0], 'data', t), 
            this.$selection.prepend(e), this.$selection[0].classList.add('select2-selection--clearable'));
        }, e;
    })), u.define('select2/selection/search', [ 'jquery', '../utils', '../keys' ], (function(s, a, l) {
        function e(e, t, n) {
            e.call(this, t, n);
        }
        return e.prototype.render = function(e) {
            var t = this.options.get('translations').get('search'), n = s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
            this.$searchContainer = n, this.$search = n.find('textarea'), this.$search.prop('autocomplete', this.options.get('autocomplete')), 
            this.$search.attr('aria-label', t());
            e = e.call(this);
            return this._transferTabIndex(), e.append(this.$searchContainer), e;
        }, e.prototype.bind = function(e, t, n) {
            var s = this, i = t.id + '-results', r = t.id + '-container';
            e.call(this, t, n), s.$search.attr('aria-describedby', r), t.on('open', (function() {
                s.$search.attr('aria-controls', i), s.$search.trigger('focus');
            })), t.on('close', (function() {
                s.$search.val(''), s.resizeSearch(), s.$search.removeAttr('aria-controls'), s.$search.removeAttr('aria-activedescendant'), 
                s.$search.trigger('focus');
            })), t.on('enable', (function() {
                s.$search.prop('disabled', !1), s._transferTabIndex();
            })), t.on('disable', (function() {
                s.$search.prop('disabled', !0);
            })), t.on('focus', (function(e) {
                s.$search.trigger('focus');
            })), t.on('results:focus', (function(e) {
                e.data._resultId ? s.$search.attr('aria-activedescendant', e.data._resultId) : s.$search.removeAttr('aria-activedescendant');
            })), this.$selection.on('focusin', '.select2-search--inline', (function(e) {
                s.trigger('focus', e);
            })), this.$selection.on('focusout', '.select2-search--inline', (function(e) {
                s._handleBlur(e);
            })), this.$selection.on('keydown', '.select2-search--inline', (function(e) {
                var t;
                e.stopPropagation(), s.trigger('keypress', e), s._keyUpPrevented = e.isDefaultPrevented(), 
                e.which !== l.BACKSPACE || '' !== s.$search.val() || 0 < (t = s.$selection.find('.select2-selection__choice').last()).length && (t = a.GetData(t[0], 'data'), 
                s.searchRemoveChoice(t), e.preventDefault());
            })), this.$selection.on('click', '.select2-search--inline', (function(e) {
                s.$search.val() && e.stopPropagation();
            }));
            var t = document.documentMode, o = t && t <= 11;
            this.$selection.on('input.searchcheck', '.select2-search--inline', (function(e) {
                o ? s.$selection.off('input.search input.searchcheck') : s.$selection.off('keyup.search');
            })), this.$selection.on('keyup.search input.search', '.select2-search--inline', (function(e) {
                var t;
                o && 'input' === e.type ? s.$selection.off('input.search input.searchcheck') : (t = e.which) != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && s.handleSearch(e);
            }));
        }, e.prototype._transferTabIndex = function(e) {
            this.$search.attr('tabindex', this.$selection.attr('tabindex')), this.$selection.attr('tabindex', '-1');
        }, e.prototype.createPlaceholder = function(e, t) {
            this.$search.attr('placeholder', t.text);
        }, e.prototype.update = function(e, t) {
            var n = this.$search[0] == document.activeElement;
            this.$search.attr('placeholder', ''), e.call(this, t), this.resizeSearch(), n && this.$search.trigger('focus');
        }, e.prototype.handleSearch = function() {
            var e;
            this.resizeSearch(), this._keyUpPrevented || (e = this.$search.val(), this.trigger('query', {
                term: e
            })), this._keyUpPrevented = !1;
        }, e.prototype.searchRemoveChoice = function(e, t) {
            this.trigger('unselect', {
                data: t
            }), this.$search.val(t.text), this.handleSearch();
        }, e.prototype.resizeSearch = function() {
            this.$search.css('width', '25px');
            var e = '100%';
            '' === this.$search.attr('placeholder') && (e = .75 * (this.$search.val().length + 1) + 'em'), 
            this.$search.css('width', e);
        }, e;
    })), u.define('select2/selection/selectionCss', [ '../utils' ], (function(n) {
        function e() {}
        return e.prototype.render = function(e) {
            var t = e.call(this), e = this.options.get('selectionCssClass') || '';
            return -1 !== e.indexOf(':all:') && (e = e.replace(':all:', ''), n.copyNonInternalCssClasses(t[0], this.$element[0])), 
            t.addClass(e), t;
        }, e;
    })), u.define('select2/selection/eventRelay', [ 'jquery' ], (function(o) {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this, i = [ 'open', 'opening', 'close', 'closing', 'select', 'selecting', 'unselect', 'unselecting', 'clear', 'clearing' ], r = [ 'opening', 'closing', 'selecting', 'unselecting', 'clearing' ];
            e.call(this, t, n), t.on('*', (function(e, t) {
                var n;
                -1 !== i.indexOf(e) && (t = t || {}, n = o.Event('select2:' + e, {
                    params: t
                }), s.$element.trigger(n), -1 !== r.indexOf(e) && (t.prevented = n.isDefaultPrevented()));
            }));
        }, e;
    })), u.define('select2/translation', [ 'jquery', 'require' ], (function(t, n) {
        function s(e) {
            this.dict = e || {};
        }
        return s.prototype.all = function() {
            return this.dict;
        }, s.prototype.get = function(e) {
            return this.dict[e];
        }, s.prototype.extend = function(e) {
            this.dict = t.extend({}, e.all(), this.dict);
        }, s._cache = {}, s.loadPath = function(e) {
            var t;
            return e in s._cache || (t = n(e), s._cache[e] = t), new s(s._cache[e]);
        }, s;
    })), u.define('select2/diacritics', [], (function() {
        return {
            'Ⓐ': 'A',
            'Ａ': 'A',
            'À': 'A',
            'Á': 'A',
            'Â': 'A',
            'Ầ': 'A',
            'Ấ': 'A',
            'Ẫ': 'A',
            'Ẩ': 'A',
            'Ã': 'A',
            'Ā': 'A',
            'Ă': 'A',
            'Ằ': 'A',
            'Ắ': 'A',
            'Ẵ': 'A',
            'Ẳ': 'A',
            'Ȧ': 'A',
            'Ǡ': 'A',
            'Ä': 'A',
            'Ǟ': 'A',
            'Ả': 'A',
            'Å': 'A',
            'Ǻ': 'A',
            'Ǎ': 'A',
            'Ȁ': 'A',
            'Ȃ': 'A',
            'Ạ': 'A',
            'Ậ': 'A',
            'Ặ': 'A',
            'Ḁ': 'A',
            'Ą': 'A',
            'Ⱥ': 'A',
            'Ɐ': 'A',
            'Ꜳ': 'AA',
            'Æ': 'AE',
            'Ǽ': 'AE',
            'Ǣ': 'AE',
            'Ꜵ': 'AO',
            'Ꜷ': 'AU',
            'Ꜹ': 'AV',
            'Ꜻ': 'AV',
            'Ꜽ': 'AY',
            'Ⓑ': 'B',
            'Ｂ': 'B',
            'Ḃ': 'B',
            'Ḅ': 'B',
            'Ḇ': 'B',
            'Ƀ': 'B',
            'Ƃ': 'B',
            'Ɓ': 'B',
            'Ⓒ': 'C',
            'Ｃ': 'C',
            'Ć': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Č': 'C',
            'Ç': 'C',
            'Ḉ': 'C',
            'Ƈ': 'C',
            'Ȼ': 'C',
            'Ꜿ': 'C',
            'Ⓓ': 'D',
            'Ｄ': 'D',
            'Ḋ': 'D',
            'Ď': 'D',
            'Ḍ': 'D',
            'Ḑ': 'D',
            'Ḓ': 'D',
            'Ḏ': 'D',
            'Đ': 'D',
            'Ƌ': 'D',
            'Ɗ': 'D',
            'Ɖ': 'D',
            'Ꝺ': 'D',
            'Ǳ': 'DZ',
            'Ǆ': 'DZ',
            'ǲ': 'Dz',
            'ǅ': 'Dz',
            'Ⓔ': 'E',
            'Ｅ': 'E',
            'È': 'E',
            'É': 'E',
            'Ê': 'E',
            'Ề': 'E',
            'Ế': 'E',
            'Ễ': 'E',
            'Ể': 'E',
            'Ẽ': 'E',
            'Ē': 'E',
            'Ḕ': 'E',
            'Ḗ': 'E',
            'Ĕ': 'E',
            'Ė': 'E',
            'Ë': 'E',
            'Ẻ': 'E',
            'Ě': 'E',
            'Ȅ': 'E',
            'Ȇ': 'E',
            'Ẹ': 'E',
            'Ệ': 'E',
            'Ȩ': 'E',
            'Ḝ': 'E',
            'Ę': 'E',
            'Ḙ': 'E',
            'Ḛ': 'E',
            'Ɛ': 'E',
            'Ǝ': 'E',
            'Ⓕ': 'F',
            'Ｆ': 'F',
            'Ḟ': 'F',
            'Ƒ': 'F',
            'Ꝼ': 'F',
            'Ⓖ': 'G',
            'Ｇ': 'G',
            'Ǵ': 'G',
            'Ĝ': 'G',
            'Ḡ': 'G',
            'Ğ': 'G',
            'Ġ': 'G',
            'Ǧ': 'G',
            'Ģ': 'G',
            'Ǥ': 'G',
            'Ɠ': 'G',
            'Ꞡ': 'G',
            'Ᵹ': 'G',
            'Ꝿ': 'G',
            'Ⓗ': 'H',
            'Ｈ': 'H',
            'Ĥ': 'H',
            'Ḣ': 'H',
            'Ḧ': 'H',
            'Ȟ': 'H',
            'Ḥ': 'H',
            'Ḩ': 'H',
            'Ḫ': 'H',
            'Ħ': 'H',
            'Ⱨ': 'H',
            'Ⱶ': 'H',
            'Ɥ': 'H',
            'Ⓘ': 'I',
            'Ｉ': 'I',
            'Ì': 'I',
            'Í': 'I',
            'Î': 'I',
            'Ĩ': 'I',
            'Ī': 'I',
            'Ĭ': 'I',
            'İ': 'I',
            'Ï': 'I',
            'Ḯ': 'I',
            'Ỉ': 'I',
            'Ǐ': 'I',
            'Ȉ': 'I',
            'Ȋ': 'I',
            'Ị': 'I',
            'Į': 'I',
            'Ḭ': 'I',
            'Ɨ': 'I',
            'Ⓙ': 'J',
            'Ｊ': 'J',
            'Ĵ': 'J',
            'Ɉ': 'J',
            'Ⓚ': 'K',
            'Ｋ': 'K',
            'Ḱ': 'K',
            'Ǩ': 'K',
            'Ḳ': 'K',
            'Ķ': 'K',
            'Ḵ': 'K',
            'Ƙ': 'K',
            'Ⱪ': 'K',
            'Ꝁ': 'K',
            'Ꝃ': 'K',
            'Ꝅ': 'K',
            'Ꞣ': 'K',
            'Ⓛ': 'L',
            'Ｌ': 'L',
            'Ŀ': 'L',
            'Ĺ': 'L',
            'Ľ': 'L',
            'Ḷ': 'L',
            'Ḹ': 'L',
            'Ļ': 'L',
            'Ḽ': 'L',
            'Ḻ': 'L',
            'Ł': 'L',
            'Ƚ': 'L',
            'Ɫ': 'L',
            'Ⱡ': 'L',
            'Ꝉ': 'L',
            'Ꝇ': 'L',
            'Ꞁ': 'L',
            'Ǉ': 'LJ',
            'ǈ': 'Lj',
            'Ⓜ': 'M',
            'Ｍ': 'M',
            'Ḿ': 'M',
            'Ṁ': 'M',
            'Ṃ': 'M',
            'Ɱ': 'M',
            'Ɯ': 'M',
            'Ⓝ': 'N',
            'Ｎ': 'N',
            'Ǹ': 'N',
            'Ń': 'N',
            'Ñ': 'N',
            'Ṅ': 'N',
            'Ň': 'N',
            'Ṇ': 'N',
            'Ņ': 'N',
            'Ṋ': 'N',
            'Ṉ': 'N',
            'Ƞ': 'N',
            'Ɲ': 'N',
            'Ꞑ': 'N',
            'Ꞥ': 'N',
            'Ǌ': 'NJ',
            'ǋ': 'Nj',
            'Ⓞ': 'O',
            'Ｏ': 'O',
            'Ò': 'O',
            'Ó': 'O',
            'Ô': 'O',
            'Ồ': 'O',
            'Ố': 'O',
            'Ỗ': 'O',
            'Ổ': 'O',
            'Õ': 'O',
            'Ṍ': 'O',
            'Ȭ': 'O',
            'Ṏ': 'O',
            'Ō': 'O',
            'Ṑ': 'O',
            'Ṓ': 'O',
            'Ŏ': 'O',
            'Ȯ': 'O',
            'Ȱ': 'O',
            'Ö': 'O',
            'Ȫ': 'O',
            'Ỏ': 'O',
            'Ő': 'O',
            'Ǒ': 'O',
            'Ȍ': 'O',
            'Ȏ': 'O',
            'Ơ': 'O',
            'Ờ': 'O',
            'Ớ': 'O',
            'Ỡ': 'O',
            'Ở': 'O',
            'Ợ': 'O',
            'Ọ': 'O',
            'Ộ': 'O',
            'Ǫ': 'O',
            'Ǭ': 'O',
            'Ø': 'O',
            'Ǿ': 'O',
            'Ɔ': 'O',
            'Ɵ': 'O',
            'Ꝋ': 'O',
            'Ꝍ': 'O',
            'Œ': 'OE',
            'Ƣ': 'OI',
            'Ꝏ': 'OO',
            'Ȣ': 'OU',
            'Ⓟ': 'P',
            'Ｐ': 'P',
            'Ṕ': 'P',
            'Ṗ': 'P',
            'Ƥ': 'P',
            'Ᵽ': 'P',
            'Ꝑ': 'P',
            'Ꝓ': 'P',
            'Ꝕ': 'P',
            'Ⓠ': 'Q',
            'Ｑ': 'Q',
            'Ꝗ': 'Q',
            'Ꝙ': 'Q',
            'Ɋ': 'Q',
            'Ⓡ': 'R',
            'Ｒ': 'R',
            'Ŕ': 'R',
            'Ṙ': 'R',
            'Ř': 'R',
            'Ȑ': 'R',
            'Ȓ': 'R',
            'Ṛ': 'R',
            'Ṝ': 'R',
            'Ŗ': 'R',
            'Ṟ': 'R',
            'Ɍ': 'R',
            'Ɽ': 'R',
            'Ꝛ': 'R',
            'Ꞧ': 'R',
            'Ꞃ': 'R',
            'Ⓢ': 'S',
            'Ｓ': 'S',
            'ẞ': 'S',
            'Ś': 'S',
            'Ṥ': 'S',
            'Ŝ': 'S',
            'Ṡ': 'S',
            'Š': 'S',
            'Ṧ': 'S',
            'Ṣ': 'S',
            'Ṩ': 'S',
            'Ș': 'S',
            'Ş': 'S',
            'Ȿ': 'S',
            'Ꞩ': 'S',
            'Ꞅ': 'S',
            'Ⓣ': 'T',
            'Ｔ': 'T',
            'Ṫ': 'T',
            'Ť': 'T',
            'Ṭ': 'T',
            'Ț': 'T',
            'Ţ': 'T',
            'Ṱ': 'T',
            'Ṯ': 'T',
            'Ŧ': 'T',
            'Ƭ': 'T',
            'Ʈ': 'T',
            'Ⱦ': 'T',
            'Ꞇ': 'T',
            'Ꜩ': 'TZ',
            'Ⓤ': 'U',
            'Ｕ': 'U',
            'Ù': 'U',
            'Ú': 'U',
            'Û': 'U',
            'Ũ': 'U',
            'Ṹ': 'U',
            'Ū': 'U',
            'Ṻ': 'U',
            'Ŭ': 'U',
            'Ü': 'U',
            'Ǜ': 'U',
            'Ǘ': 'U',
            'Ǖ': 'U',
            'Ǚ': 'U',
            'Ủ': 'U',
            'Ů': 'U',
            'Ű': 'U',
            'Ǔ': 'U',
            'Ȕ': 'U',
            'Ȗ': 'U',
            'Ư': 'U',
            'Ừ': 'U',
            'Ứ': 'U',
            'Ữ': 'U',
            'Ử': 'U',
            'Ự': 'U',
            'Ụ': 'U',
            'Ṳ': 'U',
            'Ų': 'U',
            'Ṷ': 'U',
            'Ṵ': 'U',
            'Ʉ': 'U',
            'Ⓥ': 'V',
            'Ｖ': 'V',
            'Ṽ': 'V',
            'Ṿ': 'V',
            'Ʋ': 'V',
            'Ꝟ': 'V',
            'Ʌ': 'V',
            'Ꝡ': 'VY',
            'Ⓦ': 'W',
            'Ｗ': 'W',
            'Ẁ': 'W',
            'Ẃ': 'W',
            'Ŵ': 'W',
            'Ẇ': 'W',
            'Ẅ': 'W',
            'Ẉ': 'W',
            'Ⱳ': 'W',
            'Ⓧ': 'X',
            'Ｘ': 'X',
            'Ẋ': 'X',
            'Ẍ': 'X',
            'Ⓨ': 'Y',
            'Ｙ': 'Y',
            'Ỳ': 'Y',
            'Ý': 'Y',
            'Ŷ': 'Y',
            'Ỹ': 'Y',
            'Ȳ': 'Y',
            'Ẏ': 'Y',
            'Ÿ': 'Y',
            'Ỷ': 'Y',
            'Ỵ': 'Y',
            'Ƴ': 'Y',
            'Ɏ': 'Y',
            'Ỿ': 'Y',
            'Ⓩ': 'Z',
            'Ｚ': 'Z',
            'Ź': 'Z',
            'Ẑ': 'Z',
            'Ż': 'Z',
            'Ž': 'Z',
            'Ẓ': 'Z',
            'Ẕ': 'Z',
            'Ƶ': 'Z',
            'Ȥ': 'Z',
            'Ɀ': 'Z',
            'Ⱬ': 'Z',
            'Ꝣ': 'Z',
            'ⓐ': 'a',
            'ａ': 'a',
            'ẚ': 'a',
            'à': 'a',
            'á': 'a',
            'â': 'a',
            'ầ': 'a',
            'ấ': 'a',
            'ẫ': 'a',
            'ẩ': 'a',
            'ã': 'a',
            'ā': 'a',
            'ă': 'a',
            'ằ': 'a',
            'ắ': 'a',
            'ẵ': 'a',
            'ẳ': 'a',
            'ȧ': 'a',
            'ǡ': 'a',
            'ä': 'a',
            'ǟ': 'a',
            'ả': 'a',
            'å': 'a',
            'ǻ': 'a',
            'ǎ': 'a',
            'ȁ': 'a',
            'ȃ': 'a',
            'ạ': 'a',
            'ậ': 'a',
            'ặ': 'a',
            'ḁ': 'a',
            'ą': 'a',
            'ⱥ': 'a',
            'ɐ': 'a',
            'ꜳ': 'aa',
            'æ': 'ae',
            'ǽ': 'ae',
            'ǣ': 'ae',
            'ꜵ': 'ao',
            'ꜷ': 'au',
            'ꜹ': 'av',
            'ꜻ': 'av',
            'ꜽ': 'ay',
            'ⓑ': 'b',
            'ｂ': 'b',
            'ḃ': 'b',
            'ḅ': 'b',
            'ḇ': 'b',
            'ƀ': 'b',
            'ƃ': 'b',
            'ɓ': 'b',
            'ⓒ': 'c',
            'ｃ': 'c',
            'ć': 'c',
            'ĉ': 'c',
            'ċ': 'c',
            'č': 'c',
            'ç': 'c',
            'ḉ': 'c',
            'ƈ': 'c',
            'ȼ': 'c',
            'ꜿ': 'c',
            'ↄ': 'c',
            'ⓓ': 'd',
            'ｄ': 'd',
            'ḋ': 'd',
            'ď': 'd',
            'ḍ': 'd',
            'ḑ': 'd',
            'ḓ': 'd',
            'ḏ': 'd',
            'đ': 'd',
            'ƌ': 'd',
            'ɖ': 'd',
            'ɗ': 'd',
            'ꝺ': 'd',
            'ǳ': 'dz',
            'ǆ': 'dz',
            'ⓔ': 'e',
            'ｅ': 'e',
            'è': 'e',
            'é': 'e',
            'ê': 'e',
            'ề': 'e',
            'ế': 'e',
            'ễ': 'e',
            'ể': 'e',
            'ẽ': 'e',
            'ē': 'e',
            'ḕ': 'e',
            'ḗ': 'e',
            'ĕ': 'e',
            'ė': 'e',
            'ë': 'e',
            'ẻ': 'e',
            'ě': 'e',
            'ȅ': 'e',
            'ȇ': 'e',
            'ẹ': 'e',
            'ệ': 'e',
            'ȩ': 'e',
            'ḝ': 'e',
            'ę': 'e',
            'ḙ': 'e',
            'ḛ': 'e',
            'ɇ': 'e',
            'ɛ': 'e',
            'ǝ': 'e',
            'ⓕ': 'f',
            'ｆ': 'f',
            'ḟ': 'f',
            'ƒ': 'f',
            'ꝼ': 'f',
            'ⓖ': 'g',
            'ｇ': 'g',
            'ǵ': 'g',
            'ĝ': 'g',
            'ḡ': 'g',
            'ğ': 'g',
            'ġ': 'g',
            'ǧ': 'g',
            'ģ': 'g',
            'ǥ': 'g',
            'ɠ': 'g',
            'ꞡ': 'g',
            'ᵹ': 'g',
            'ꝿ': 'g',
            'ⓗ': 'h',
            'ｈ': 'h',
            'ĥ': 'h',
            'ḣ': 'h',
            'ḧ': 'h',
            'ȟ': 'h',
            'ḥ': 'h',
            'ḩ': 'h',
            'ḫ': 'h',
            'ẖ': 'h',
            'ħ': 'h',
            'ⱨ': 'h',
            'ⱶ': 'h',
            'ɥ': 'h',
            'ƕ': 'hv',
            'ⓘ': 'i',
            'ｉ': 'i',
            'ì': 'i',
            'í': 'i',
            'î': 'i',
            'ĩ': 'i',
            'ī': 'i',
            'ĭ': 'i',
            'ï': 'i',
            'ḯ': 'i',
            'ỉ': 'i',
            'ǐ': 'i',
            'ȉ': 'i',
            'ȋ': 'i',
            'ị': 'i',
            'į': 'i',
            'ḭ': 'i',
            'ɨ': 'i',
            'ı': 'i',
            'ⓙ': 'j',
            'ｊ': 'j',
            'ĵ': 'j',
            'ǰ': 'j',
            'ɉ': 'j',
            'ⓚ': 'k',
            'ｋ': 'k',
            'ḱ': 'k',
            'ǩ': 'k',
            'ḳ': 'k',
            'ķ': 'k',
            'ḵ': 'k',
            'ƙ': 'k',
            'ⱪ': 'k',
            'ꝁ': 'k',
            'ꝃ': 'k',
            'ꝅ': 'k',
            'ꞣ': 'k',
            'ⓛ': 'l',
            'ｌ': 'l',
            'ŀ': 'l',
            'ĺ': 'l',
            'ľ': 'l',
            'ḷ': 'l',
            'ḹ': 'l',
            'ļ': 'l',
            'ḽ': 'l',
            'ḻ': 'l',
            'ſ': 'l',
            'ł': 'l',
            'ƚ': 'l',
            'ɫ': 'l',
            'ⱡ': 'l',
            'ꝉ': 'l',
            'ꞁ': 'l',
            'ꝇ': 'l',
            'ǉ': 'lj',
            'ⓜ': 'm',
            'ｍ': 'm',
            'ḿ': 'm',
            'ṁ': 'm',
            'ṃ': 'm',
            'ɱ': 'm',
            'ɯ': 'm',
            'ⓝ': 'n',
            'ｎ': 'n',
            'ǹ': 'n',
            'ń': 'n',
            'ñ': 'n',
            'ṅ': 'n',
            'ň': 'n',
            'ṇ': 'n',
            'ņ': 'n',
            'ṋ': 'n',
            'ṉ': 'n',
            'ƞ': 'n',
            'ɲ': 'n',
            'ŉ': 'n',
            'ꞑ': 'n',
            'ꞥ': 'n',
            'ǌ': 'nj',
            'ⓞ': 'o',
            'ｏ': 'o',
            'ò': 'o',
            'ó': 'o',
            'ô': 'o',
            'ồ': 'o',
            'ố': 'o',
            'ỗ': 'o',
            'ổ': 'o',
            'õ': 'o',
            'ṍ': 'o',
            'ȭ': 'o',
            'ṏ': 'o',
            'ō': 'o',
            'ṑ': 'o',
            'ṓ': 'o',
            'ŏ': 'o',
            'ȯ': 'o',
            'ȱ': 'o',
            'ö': 'o',
            'ȫ': 'o',
            'ỏ': 'o',
            'ő': 'o',
            'ǒ': 'o',
            'ȍ': 'o',
            'ȏ': 'o',
            'ơ': 'o',
            'ờ': 'o',
            'ớ': 'o',
            'ỡ': 'o',
            'ở': 'o',
            'ợ': 'o',
            'ọ': 'o',
            'ộ': 'o',
            'ǫ': 'o',
            'ǭ': 'o',
            'ø': 'o',
            'ǿ': 'o',
            'ɔ': 'o',
            'ꝋ': 'o',
            'ꝍ': 'o',
            'ɵ': 'o',
            'œ': 'oe',
            'ƣ': 'oi',
            'ȣ': 'ou',
            'ꝏ': 'oo',
            'ⓟ': 'p',
            'ｐ': 'p',
            'ṕ': 'p',
            'ṗ': 'p',
            'ƥ': 'p',
            'ᵽ': 'p',
            'ꝑ': 'p',
            'ꝓ': 'p',
            'ꝕ': 'p',
            'ⓠ': 'q',
            'ｑ': 'q',
            'ɋ': 'q',
            'ꝗ': 'q',
            'ꝙ': 'q',
            'ⓡ': 'r',
            'ｒ': 'r',
            'ŕ': 'r',
            'ṙ': 'r',
            'ř': 'r',
            'ȑ': 'r',
            'ȓ': 'r',
            'ṛ': 'r',
            'ṝ': 'r',
            'ŗ': 'r',
            'ṟ': 'r',
            'ɍ': 'r',
            'ɽ': 'r',
            'ꝛ': 'r',
            'ꞧ': 'r',
            'ꞃ': 'r',
            'ⓢ': 's',
            'ｓ': 's',
            'ß': 's',
            'ś': 's',
            'ṥ': 's',
            'ŝ': 's',
            'ṡ': 's',
            'š': 's',
            'ṧ': 's',
            'ṣ': 's',
            'ṩ': 's',
            'ș': 's',
            'ş': 's',
            'ȿ': 's',
            'ꞩ': 's',
            'ꞅ': 's',
            'ẛ': 's',
            'ⓣ': 't',
            'ｔ': 't',
            'ṫ': 't',
            'ẗ': 't',
            'ť': 't',
            'ṭ': 't',
            'ț': 't',
            'ţ': 't',
            'ṱ': 't',
            'ṯ': 't',
            'ŧ': 't',
            'ƭ': 't',
            'ʈ': 't',
            'ⱦ': 't',
            'ꞇ': 't',
            'ꜩ': 'tz',
            'ⓤ': 'u',
            'ｕ': 'u',
            'ù': 'u',
            'ú': 'u',
            'û': 'u',
            'ũ': 'u',
            'ṹ': 'u',
            'ū': 'u',
            'ṻ': 'u',
            'ŭ': 'u',
            'ü': 'u',
            'ǜ': 'u',
            'ǘ': 'u',
            'ǖ': 'u',
            'ǚ': 'u',
            'ủ': 'u',
            'ů': 'u',
            'ű': 'u',
            'ǔ': 'u',
            'ȕ': 'u',
            'ȗ': 'u',
            'ư': 'u',
            'ừ': 'u',
            'ứ': 'u',
            'ữ': 'u',
            'ử': 'u',
            'ự': 'u',
            'ụ': 'u',
            'ṳ': 'u',
            'ų': 'u',
            'ṷ': 'u',
            'ṵ': 'u',
            'ʉ': 'u',
            'ⓥ': 'v',
            'ｖ': 'v',
            'ṽ': 'v',
            'ṿ': 'v',
            'ʋ': 'v',
            'ꝟ': 'v',
            'ʌ': 'v',
            'ꝡ': 'vy',
            'ⓦ': 'w',
            'ｗ': 'w',
            'ẁ': 'w',
            'ẃ': 'w',
            'ŵ': 'w',
            'ẇ': 'w',
            'ẅ': 'w',
            'ẘ': 'w',
            'ẉ': 'w',
            'ⱳ': 'w',
            'ⓧ': 'x',
            'ｘ': 'x',
            'ẋ': 'x',
            'ẍ': 'x',
            'ⓨ': 'y',
            'ｙ': 'y',
            'ỳ': 'y',
            'ý': 'y',
            'ŷ': 'y',
            'ỹ': 'y',
            'ȳ': 'y',
            'ẏ': 'y',
            'ÿ': 'y',
            'ỷ': 'y',
            'ẙ': 'y',
            'ỵ': 'y',
            'ƴ': 'y',
            'ɏ': 'y',
            'ỿ': 'y',
            'ⓩ': 'z',
            'ｚ': 'z',
            'ź': 'z',
            'ẑ': 'z',
            'ż': 'z',
            'ž': 'z',
            'ẓ': 'z',
            'ẕ': 'z',
            'ƶ': 'z',
            'ȥ': 'z',
            'ɀ': 'z',
            'ⱬ': 'z',
            'ꝣ': 'z',
            'Ά': 'Α',
            'Έ': 'Ε',
            'Ή': 'Η',
            'Ί': 'Ι',
            'Ϊ': 'Ι',
            'Ό': 'Ο',
            'Ύ': 'Υ',
            'Ϋ': 'Υ',
            'Ώ': 'Ω',
            'ά': 'α',
            'έ': 'ε',
            'ή': 'η',
            'ί': 'ι',
            'ϊ': 'ι',
            'ΐ': 'ι',
            'ό': 'ο',
            'ύ': 'υ',
            'ϋ': 'υ',
            'ΰ': 'υ',
            'ώ': 'ω',
            'ς': 'σ',
            '’': '\''
        };
    })), u.define('select2/data/base', [ '../utils' ], (function(n) {
        function s(e, t) {
            s.__super__.constructor.call(this);
        }
        return n.Extend(s, n.Observable), s.prototype.current = function(e) {
            throw new Error('The `current` method must be defined in child classes.');
        }, s.prototype.query = function(e, t) {
            throw new Error('The `query` method must be defined in child classes.');
        }, s.prototype.bind = function(e, t) {}, s.prototype.destroy = function() {}, s.prototype.generateResultId = function(e, t) {
            e = e.id + '-result-';
            return e += n.generateChars(4), null != t.id ? e += '-' + t.id.toString() : e += '-' + n.generateChars(4), 
            e;
        }, s;
    })), u.define('select2/data/select', [ './base', '../utils', 'jquery' ], (function(e, a, l) {
        function n(e, t) {
            this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }
        return a.Extend(n, e), n.prototype.current = function(e) {
            var t = this;
            e(Array.prototype.map.call(this.$element[0].querySelectorAll(':checked'), (function(e) {
                return t.item(l(e));
            })));
        }, n.prototype.select = function(i) {
            var e, r = this;
            if (i.selected = !0, null != i.element && 'option' === i.element.tagName.toLowerCase()) return i.element.selected = !0, 
            void this.$element.trigger('input').trigger('change');
            this.$element.prop('multiple') ? this.current((function(e) {
                var t = [];
                (i = [ i ]).push.apply(i, e);
                for (var n = 0; n < i.length; n++) {
                    var s = i[n].id;
                    -1 === t.indexOf(s) && t.push(s);
                }
                r.$element.val(t), r.$element.trigger('input').trigger('change');
            })) : (e = i.id, this.$element.val(e), this.$element.trigger('input').trigger('change'));
        }, n.prototype.unselect = function(i) {
            var r = this;
            if (this.$element.prop('multiple')) {
                if (i.selected = !1, null != i.element && 'option' === i.element.tagName.toLowerCase()) return i.element.selected = !1, 
                void this.$element.trigger('input').trigger('change');
                this.current((function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var s = e[n].id;
                        s !== i.id && -1 === t.indexOf(s) && t.push(s);
                    }
                    r.$element.val(t), r.$element.trigger('input').trigger('change');
                }));
            }
        }, n.prototype.bind = function(e, t) {
            var n = this;
            (this.container = e).on('select', (function(e) {
                n.select(e.data);
            })), e.on('unselect', (function(e) {
                n.unselect(e.data);
            }));
        }, n.prototype.destroy = function() {
            this.$element.find('*').each((function() {
                a.RemoveData(this);
            }));
        }, n.prototype.query = function(t, e) {
            var n = [], s = this;
            this.$element.children().each((function() {
                var e;
                'option' !== this.tagName.toLowerCase() && 'optgroup' !== this.tagName.toLowerCase() || (e = l(this), 
                e = s.item(e), null !== (e = s.matches(t, e)) && n.push(e));
            })), e({
                results: n
            });
        }, n.prototype.addOptions = function(e) {
            this.$element.append(e);
        }, n.prototype.option = function(e) {
            var t;
            e.children ? (t = document.createElement('optgroup')).label = e.text : void 0 !== (t = document.createElement('option')).textContent ? t.textContent = e.text : t.innerText = e.text, 
            void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), 
            e.title && (t.title = e.title);
            e = this._normalizeItem(e);
            return e.element = t, a.StoreData(t, 'data', e), l(t);
        }, n.prototype.item = function(e) {
            var t = {};
            if (null != (t = a.GetData(e[0], 'data'))) return t;
            var n = e[0];
            if ('option' === n.tagName.toLowerCase()) t = {
                id: e.val(),
                text: e.text(),
                disabled: e.prop('disabled'),
                selected: e.prop('selected'),
                title: e.prop('title')
            }; else if ('optgroup' === n.tagName.toLowerCase()) {
                t = {
                    text: e.prop('label'),
                    children: [],
                    title: e.prop('title')
                };
                for (var s = e.children('option'), i = [], r = 0; r < s.length; r++) {
                    var o = l(s[r]), o = this.item(o);
                    i.push(o);
                }
                t.children = i;
            }
            return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], 'data', t), 
            t;
        }, n.prototype._normalizeItem = function(e) {
            e !== Object(e) && (e = {
                id: e,
                text: e
            });
            return null != (e = l.extend({}, {
                text: ''
            }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), 
            null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), 
            l.extend({}, {
                selected: !1,
                disabled: !1
            }, e);
        }, n.prototype.matches = function(e, t) {
            return this.options.get('matcher')(e, t);
        }, n;
    })), u.define('select2/data/array', [ './select', '../utils', 'jquery' ], (function(e, t, c) {
        function s(e, t) {
            this._dataToConvert = t.get('data') || [], s.__super__.constructor.call(this, e, t);
        }
        return t.Extend(s, e), s.prototype.bind = function(e, t) {
            s.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, s.prototype.select = function(n) {
            var e = this.$element.find('option').filter((function(e, t) {
                return t.value == n.id.toString();
            }));
            0 === e.length && (e = this.option(n), this.addOptions(e)), s.__super__.select.call(this, n);
        }, s.prototype.convertToOptions = function(e) {
            var t = this, n = this.$element.find('option'), s = n.map((function() {
                return t.item(c(this)).id;
            })).get(), i = [];
            for (var r = 0; r < e.length; r++) {
                var o, a, l = this._normalizeItem(e[r]);
                0 <= s.indexOf(l.id) ? (o = n.filter(function(e) {
                    return function() {
                        return c(this).val() == e.id;
                    };
                }(l)), a = this.item(o), a = c.extend(!0, {}, l, a), a = this.option(a), o.replaceWith(a)) : (a = this.option(l), 
                l.children && (l = this.convertToOptions(l.children), a.append(l)), i.push(a));
            }
            return i;
        }, s;
    })), u.define('select2/data/ajax', [ './array', '../utils', 'jquery' ], (function(e, t, r) {
        function n(e, t) {
            this.ajaxOptions = this._applyDefaults(t.get('ajax')), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), 
            n.__super__.constructor.call(this, e, t);
        }
        return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
            var t = {
                data: function(e) {
                    return r.extend({}, e, {
                        q: e.term
                    });
                },
                transport: function(e, t, n) {
                    e = r.ajax(e);
                    return e.then(t), e.fail(n), e;
                }
            };
            return r.extend({}, t, e, !0);
        }, n.prototype.processResults = function(e) {
            return e;
        }, n.prototype.query = function(t, n) {
            var s = this;
            null != this._request && ('function' == typeof this._request.abort && this._request.abort(), 
            this._request = null);
            var i = r.extend({
                type: 'GET'
            }, this.ajaxOptions);
            function e() {
                var e = i.transport(i, (function(e) {
                    e = s.processResults(e, t);
                    s.options.get('debug') && window.console && console.error && (e && e.results && Array.isArray(e.results) || console.error('Select2: The AJAX results did not return an array in the `results` key of the response.')), 
                    n(e);
                }), (function() {
                    'status' in e && (0 === e.status || '0' === e.status) || s.trigger('results:message', {
                        message: 'errorLoading'
                    });
                }));
                s._request = e;
            }
            'function' == typeof i.url && (i.url = i.url.call(this.$element, t)), 'function' == typeof i.data && (i.data = i.data.call(this.$element, t)), 
            this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), 
            this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
        }, n;
    })), u.define('select2/data/tags', [ 'jquery' ], (function(t) {
        function e(e, t, n) {
            var s = n.get('tags'), i = n.get('createTag');
            void 0 !== i && (this.createTag = i);
            i = n.get('insertTag');
            if (void 0 !== i && (this.insertTag = i), e.call(this, t, n), Array.isArray(s)) for (var r = 0; r < s.length; r++) {
                var o = s[r], o = this._normalizeItem(o), o = this.option(o);
                this.$element.append(o);
            }
        }
        return e.prototype.query = function(e, c, u) {
            var d = this;
            this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, (function e(t, n) {
                for (var s = t.results, i = 0; i < s.length; i++) {
                    var r = s[i], o = null != r.children && !e({
                        results: r.children
                    }, !0);
                    if ((r.text || '').toUpperCase() === (c.term || '').toUpperCase() || o) return !n && (t.data = s, 
                    void u(t));
                }
                if (n) return !0;
                var a, l = d.createTag(c);
                null != l && ((a = d.option(l)).attr('data-select2-tag', 'true'), d.addOptions([ a ]), 
                d.insertTag(s, l)), t.results = s, u(t);
            })) : e.call(this, c, u);
        }, e.prototype.createTag = function(e, t) {
            if (null == t.term) return null;
            t = t.term.trim();
            return '' === t ? null : {
                id: t,
                text: t
            };
        }, e.prototype.insertTag = function(e, t, n) {
            t.unshift(n);
        }, e.prototype._removeOldTags = function(e) {
            this.$element.find('option[data-select2-tag]').each((function() {
                this.selected || t(this).remove();
            }));
        }, e;
    })), u.define('select2/data/tokenizer', [ 'jquery' ], (function(c) {
        function e(e, t, n) {
            var s = n.get('tokenizer');
            void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
        }
        return e.prototype.bind = function(e, t, n) {
            e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find('.select2-search__field');
        }, e.prototype.query = function(e, t, n) {
            var s = this;
            t.term = t.term || '';
            var i = this.tokenizer(t, this.options, (function(e) {
                var t, n = s._normalizeItem(e);
                s.$element.find('option').filter((function() {
                    return c(this).val() === n.id;
                })).length || ((t = s.option(n)).attr('data-select2-tag', !0), s._removeOldTags(), 
                s.addOptions([ t ])), t = n, s.trigger('select', {
                    data: t
                });
            }));
            i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger('focus')), 
            t.term = i.term), e.call(this, t, n);
        }, e.prototype.tokenizer = function(e, t, n, s) {
            for (var i = n.get('tokenSeparators') || [], r = t.term, o = 0, a = this.createTag || function(e) {
                return {
                    id: e.term,
                    text: e.term
                };
            }; o < r.length; ) {
                var l = r[o];
                -1 !== i.indexOf(l) ? (l = r.substr(0, o), null != (l = a(c.extend({}, t, {
                    term: l
                }))) ? (s(l), r = r.substr(o + 1) || '', o = 0) : o++) : o++;
            }
            return {
                term: r
            };
        }, e;
    })), u.define('select2/data/minimumInputLength', [], (function() {
        function e(e, t, n) {
            this.minimumInputLength = n.get('minimumInputLength'), e.call(this, t, n);
        }
        return e.prototype.query = function(e, t, n) {
            t.term = t.term || '', t.term.length < this.minimumInputLength ? this.trigger('results:message', {
                message: 'inputTooShort',
                args: {
                    minimum: this.minimumInputLength,
                    input: t.term,
                    params: t
                }
            }) : e.call(this, t, n);
        }, e;
    })), u.define('select2/data/maximumInputLength', [], (function() {
        function e(e, t, n) {
            this.maximumInputLength = n.get('maximumInputLength'), e.call(this, t, n);
        }
        return e.prototype.query = function(e, t, n) {
            t.term = t.term || '', 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger('results:message', {
                message: 'inputTooLong',
                args: {
                    maximum: this.maximumInputLength,
                    input: t.term,
                    params: t
                }
            }) : e.call(this, t, n);
        }, e;
    })), u.define('select2/data/maximumSelectionLength', [], (function() {
        function e(e, t, n) {
            this.maximumSelectionLength = n.get('maximumSelectionLength'), e.call(this, t, n);
        }
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n), t.on('select', (function() {
                s._checkIfMaximumSelected();
            }));
        }, e.prototype.query = function(e, t, n) {
            var s = this;
            this._checkIfMaximumSelected((function() {
                e.call(s, t, n);
            }));
        }, e.prototype._checkIfMaximumSelected = function(e, t) {
            var n = this;
            this.current((function(e) {
                e = null != e ? e.length : 0;
                0 < n.maximumSelectionLength && e >= n.maximumSelectionLength ? n.trigger('results:message', {
                    message: 'maximumSelected',
                    args: {
                        maximum: n.maximumSelectionLength
                    }
                }) : t && t();
            }));
        }, e;
    })), u.define('select2/dropdown', [ 'jquery', './utils' ], (function(t, e) {
        function n(e, t) {
            this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }
        return e.Extend(n, e.Observable), n.prototype.render = function() {
            var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
            return e.attr('dir', this.options.get('dir')), this.$dropdown = e;
        }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
            this.$dropdown.remove();
        }, n;
    })), u.define('select2/dropdown/search', [ 'jquery' ], (function(r) {
        function e() {}
        return e.prototype.render = function(e) {
            var t = e.call(this), n = this.options.get('translations').get('search'), e = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
            return this.$searchContainer = e, this.$search = e.find('input'), this.$search.prop('autocomplete', this.options.get('autocomplete')), 
            this.$search.attr('aria-label', n()), t.prepend(e), t;
        }, e.prototype.bind = function(e, t, n) {
            var s = this, i = t.id + '-results';
            e.call(this, t, n), this.$search.on('keydown', (function(e) {
                s.trigger('keypress', e), s._keyUpPrevented = e.isDefaultPrevented();
            })), this.$search.on('input', (function(e) {
                r(this).off('keyup');
            })), this.$search.on('keyup input', (function(e) {
                s.handleSearch(e);
            })), t.on('open', (function() {
                s.$search.attr('tabindex', 0), s.$search.attr('aria-controls', i), s.$search.trigger('focus'), 
                window.setTimeout((function() {
                    s.$search.trigger('focus');
                }), 0);
            })), t.on('close', (function() {
                s.$search.attr('tabindex', -1), s.$search.removeAttr('aria-controls'), s.$search.removeAttr('aria-activedescendant'), 
                s.$search.val(''), s.$search.trigger('blur');
            })), t.on('focus', (function() {
                t.isOpen() || s.$search.trigger('focus');
            })), t.on('results:all', (function(e) {
                null != e.query.term && '' !== e.query.term || (s.showSearch(e) ? s.$searchContainer[0].classList.remove('select2-search--hide') : s.$searchContainer[0].classList.add('select2-search--hide'));
            })), t.on('results:focus', (function(e) {
                e.data._resultId ? s.$search.attr('aria-activedescendant', e.data._resultId) : s.$search.removeAttr('aria-activedescendant');
            }));
        }, e.prototype.handleSearch = function(e) {
            var t;
            this._keyUpPrevented || (t = this.$search.val(), this.trigger('query', {
                term: t
            })), this._keyUpPrevented = !1;
        }, e.prototype.showSearch = function(e, t) {
            return !0;
        }, e;
    })), u.define('select2/dropdown/hidePlaceholder', [], (function() {
        function e(e, t, n, s) {
            this.placeholder = this.normalizePlaceholder(n.get('placeholder')), e.call(this, t, n, s);
        }
        return e.prototype.append = function(e, t) {
            t.results = this.removePlaceholder(t.results), e.call(this, t);
        }, e.prototype.normalizePlaceholder = function(e, t) {
            return t = 'string' == typeof t ? {
                id: '',
                text: t
            } : t;
        }, e.prototype.removePlaceholder = function(e, t) {
            for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
                var i = t[s];
                this.placeholder.id === i.id && n.splice(s, 1);
            }
            return n;
        }, e;
    })), u.define('select2/dropdown/infiniteScroll', [ 'jquery' ], (function(n) {
        function e(e, t, n, s) {
            this.lastParams = {}, e.call(this, t, n, s), this.$loadingMore = this.createLoadingMore(), 
            this.loading = !1;
        }
        return e.prototype.append = function(e, t) {
            this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), 
            this.loadMoreIfNeeded());
        }, e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n), t.on('query', (function(e) {
                s.lastParams = e, s.loading = !0;
            })), t.on('query:append', (function(e) {
                s.lastParams = e, s.loading = !0;
            })), this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
        }, e.prototype.loadMoreIfNeeded = function() {
            var e = n.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading && e && (e = this.$results.offset().top + this.$results.outerHeight(!1), 
            this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= e + 50 && this.loadMore());
        }, e.prototype.loadMore = function() {
            this.loading = !0;
            var e = n.extend({}, {
                page: 1
            }, this.lastParams);
            e.page++, this.trigger('query:append', e);
        }, e.prototype.showLoadingMore = function(e, t) {
            return t.pagination && t.pagination.more;
        }, e.prototype.createLoadingMore = function() {
            var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'), t = this.options.get('translations').get('loadingMore');
            return e.html(t(this.lastParams)), e;
        }, e;
    })), u.define('select2/dropdown/attachBody', [ 'jquery', '../utils' ], (function(u, o) {
        function e(e, t, n) {
            this.$dropdownParent = u(n.get('dropdownParent') || document.body), e.call(this, t, n);
        }
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n), t.on('open', (function() {
                s._showDropdown(), s._attachPositioningHandler(t), s._bindContainerResultHandlers(t);
            })), t.on('close', (function() {
                s._hideDropdown(), s._detachPositioningHandler(t);
            })), this.$dropdownContainer.on('mousedown', (function(e) {
                e.stopPropagation();
            }));
        }, e.prototype.destroy = function(e) {
            e.call(this), this.$dropdownContainer.remove();
        }, e.prototype.position = function(e, t, n) {
            t.attr('class', n.attr('class')), t[0].classList.remove('select2'), t[0].classList.add('select2-container--open'), 
            t.css({
                position: 'absolute',
                top: -999999
            }), this.$container = n;
        }, e.prototype.render = function(e) {
            var t = u('<span></span>'), e = e.call(this);
            return t.append(e), this.$dropdownContainer = t;
        }, e.prototype._hideDropdown = function(e) {
            this.$dropdownContainer.detach();
        }, e.prototype._bindContainerResultHandlers = function(e, t) {
            var n;
            this._containerResultsHandlersBound || (n = this, t.on('results:all', (function() {
                n._positionDropdown(), n._resizeDropdown();
            })), t.on('results:append', (function() {
                n._positionDropdown(), n._resizeDropdown();
            })), t.on('results:message', (function() {
                n._positionDropdown(), n._resizeDropdown();
            })), t.on('select', (function() {
                n._positionDropdown(), n._resizeDropdown();
            })), t.on('unselect', (function() {
                n._positionDropdown(), n._resizeDropdown();
            })), this._containerResultsHandlersBound = !0);
        }, e.prototype._attachPositioningHandler = function(e, t) {
            var n = this, s = 'scroll.select2.' + t.id, i = 'resize.select2.' + t.id, r = 'orientationchange.select2.' + t.id, t = this.$container.parents().filter(o.hasScroll);
            t.each((function() {
                o.StoreData(this, 'select2-scroll-position', {
                    x: u(this).scrollLeft(),
                    y: u(this).scrollTop()
                });
            })), t.on(s, (function(e) {
                var t = o.GetData(this, 'select2-scroll-position');
                u(this).scrollTop(t.y);
            })), u(window).on(s + ' ' + i + ' ' + r, (function(e) {
                n._positionDropdown(), n._resizeDropdown();
            }));
        }, e.prototype._detachPositioningHandler = function(e, t) {
            var n = 'scroll.select2.' + t.id, s = 'resize.select2.' + t.id, t = 'orientationchange.select2.' + t.id;
            this.$container.parents().filter(o.hasScroll).off(n), u(window).off(n + ' ' + s + ' ' + t);
        }, e.prototype._positionDropdown = function() {
            var e = u(window), t = this.$dropdown[0].classList.contains('select2-dropdown--above'), n = this.$dropdown[0].classList.contains('select2-dropdown--below'), s = null, i = this.$container.offset();
            i.bottom = i.top + this.$container.outerHeight(!1);
            var r = {
                height: this.$container.outerHeight(!1)
            };
            r.top = i.top, r.bottom = i.top + r.height;
            var o = this.$dropdown.outerHeight(!1), a = e.scrollTop(), l = e.scrollTop() + e.height(), c = a < i.top - o, e = l > i.bottom + o, a = {
                left: i.left,
                top: r.bottom
            }, l = this.$dropdownParent;
            'static' === l.css('position') && (l = l.offsetParent());
            i = {
                top: 0,
                left: 0
            };
            (u.contains(document.body, l[0]) || l[0].isConnected) && (i = l.offset()), a.top -= i.top, 
            a.left -= i.left, t || n || (s = 'below'), e || !c || t ? !c && e && t && (s = 'below') : s = 'above', 
            ('above' == s || t && 'below' !== s) && (a.top = r.top - i.top - o), null != s && (this.$dropdown[0].classList.remove('select2-dropdown--below'), 
            this.$dropdown[0].classList.remove('select2-dropdown--above'), this.$dropdown[0].classList.add('select2-dropdown--' + s), 
            this.$container[0].classList.remove('select2-container--below'), this.$container[0].classList.remove('select2-container--above'), 
            this.$container[0].classList.add('select2-container--' + s)), this.$dropdownContainer.css(a);
        }, e.prototype._resizeDropdown = function() {
            var e = {
                width: this.$container.outerWidth(!1) + 'px'
            };
            this.options.get('dropdownAutoWidth') && (e.minWidth = e.width, e.position = 'relative', 
            e.width = 'auto'), this.$dropdown.css(e);
        }, e.prototype._showDropdown = function(e) {
            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), 
            this._resizeDropdown();
        }, e;
    })), u.define('select2/dropdown/minimumResultsForSearch', [], (function() {
        function e(e, t, n, s) {
            this.minimumResultsForSearch = n.get('minimumResultsForSearch'), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), 
            e.call(this, t, n, s);
        }
        return e.prototype.showSearch = function(e, t) {
            return !(function e(t) {
                for (var n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.children ? n += e(i.children) : n++;
                }
                return n;
            }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
        }, e;
    })), u.define('select2/dropdown/selectOnClose', [ '../utils' ], (function(s) {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n), t.on('close', (function(e) {
                s._handleSelectOnClose(e);
            }));
        }, e.prototype._handleSelectOnClose = function(e, t) {
            if (t && null != t.originalSelect2Event) {
                var n = t.originalSelect2Event;
                if ('select' === n._type || 'unselect' === n._type) return;
            }
            n = this.getHighlightedResults();
            n.length < 1 || (null != (n = s.GetData(n[0], 'data')).element && n.element.selected || null == n.element && n.selected || this.trigger('select', {
                data: n
            }));
        }, e;
    })), u.define('select2/dropdown/closeOnSelect', [], (function() {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n), t.on('select', (function(e) {
                s._selectTriggered(e);
            })), t.on('unselect', (function(e) {
                s._selectTriggered(e);
            }));
        }, e.prototype._selectTriggered = function(e, t) {
            var n = t.originalEvent;
            n && (n.ctrlKey || n.metaKey) || this.trigger('close', {
                originalEvent: n,
                originalSelect2Event: t
            });
        }, e;
    })), u.define('select2/dropdown/dropdownCss', [ '../utils' ], (function(n) {
        function e() {}
        return e.prototype.render = function(e) {
            var t = e.call(this), e = this.options.get('dropdownCssClass') || '';
            return -1 !== e.indexOf(':all:') && (e = e.replace(':all:', ''), n.copyNonInternalCssClasses(t[0], this.$element[0])), 
            t.addClass(e), t;
        }, e;
    })), u.define('select2/dropdown/tagsSearchHighlight', [ '../utils' ], (function(s) {
        function e() {}
        return e.prototype.highlightFirstItem = function(e) {
            var t = this.$results.find('.select2-results__option--selectable:not(.select2-results__option--selected)');
            if (0 < t.length) {
                var n = t.first(), t = s.GetData(n[0], 'data').element;
                if (t && t.getAttribute && 'true' === t.getAttribute('data-select2-tag')) return void n.trigger('mouseenter');
            }
            e.call(this);
        }, e;
    })), u.define('select2/i18n/en', [], (function() {
        return {
            errorLoading: function() {
                return 'The results could not be loaded.';
            },
            inputTooLong: function(e) {
                var t = e.input.length - e.maximum, e = 'Please delete ' + t + ' character';
                return 1 != t && (e += 's'), e;
            },
            inputTooShort: function(e) {
                return 'Please enter ' + (e.minimum - e.input.length) + ' or more characters';
            },
            loadingMore: function() {
                return 'Loading more results…';
            },
            maximumSelected: function(e) {
                var t = 'You can only select ' + e.maximum + ' item';
                return 1 != e.maximum && (t += 's'), t;
            },
            noResults: function() {
                return 'No results found';
            },
            searching: function() {
                return 'Searching…';
            },
            removeAllItems: function() {
                return 'Remove all items';
            },
            removeItem: function() {
                return 'Remove item';
            },
            search: function() {
                return 'Search';
            }
        };
    })), u.define('select2/defaults', [ 'jquery', './results', './selection/single', './selection/multiple', './selection/placeholder', './selection/allowClear', './selection/search', './selection/selectionCss', './selection/eventRelay', './utils', './translation', './diacritics', './data/select', './data/array', './data/ajax', './data/tags', './data/tokenizer', './data/minimumInputLength', './data/maximumInputLength', './data/maximumSelectionLength', './dropdown', './dropdown/search', './dropdown/hidePlaceholder', './dropdown/infiniteScroll', './dropdown/attachBody', './dropdown/minimumResultsForSearch', './dropdown/selectOnClose', './dropdown/closeOnSelect', './dropdown/dropdownCss', './dropdown/tagsSearchHighlight', './i18n/en' ], (function(l, r, o, a, c, u, d, p, h, f, g, t, m, y, v, _, b, $, w, x, A, D, S, E, O, C, L, T, q, I, e) {
        function n() {
            this.reset();
        }
        return n.prototype.apply = function(e) {
            var t;
            null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter && (null != e.ajax ? e.dataAdapter = v : null != e.data ? e.dataAdapter = y : e.dataAdapter = m, 
            0 < e.minimumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, $)), 0 < e.maximumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, w)), 
            0 < e.maximumSelectionLength && (e.dataAdapter = f.Decorate(e.dataAdapter, x)), 
            e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = f.Decorate(e.dataAdapter, b))), 
            null == e.resultsAdapter && (e.resultsAdapter = r, null != e.ajax && (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)), 
            null != e.placeholder && (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)), e.selectOnClose && (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)), 
            e.tags && (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))), null == e.dropdownAdapter && (e.multiple ? e.dropdownAdapter = A : (t = f.Decorate(A, D), 
            e.dropdownAdapter = t), 0 !== e.minimumResultsForSearch && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)), 
            e.closeOnSelect && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)), null != e.dropdownCssClass && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)), 
            e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O)), null == e.selectionAdapter && (e.multiple ? e.selectionAdapter = a : e.selectionAdapter = o, 
            null != e.placeholder && (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)), 
            e.allowClear && (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)), e.multiple && (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)), 
            null != e.selectionCssClass && (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)), 
            e.selectionAdapter = f.Decorate(e.selectionAdapter, h)), e.language = this._resolveLanguage(e.language), 
            e.language.push('en');
            for (var n = [], s = 0; s < e.language.length; s++) {
                var i = e.language[s];
                -1 === n.indexOf(i) && n.push(i);
            }
            return e.language = n, e.translations = this._processTranslations(e.language, e.debug), 
            e;
        }, n.prototype.reset = function() {
            function a(e) {
                return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                    return t[e] || e;
                }));
            }
            this.defaults = {
                amdLanguageBase: './i18n/',
                autocomplete: 'off',
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: f.escapeMarkup,
                language: {},
                matcher: function e(t, n) {
                    if (null == t.term || '' === t.term.trim()) return n;
                    if (n.children && 0 < n.children.length) {
                        for (var s = l.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--) null == e(t, n.children[i]) && s.children.splice(i, 1);
                        return 0 < s.children.length ? s : e(t, s);
                    }
                    var r = a(n.text).toUpperCase(), o = a(t.term).toUpperCase();
                    return -1 < r.indexOf(o) ? n : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                scrollAfterSelect: !1,
                sorter: function(e) {
                    return e;
                },
                templateResult: function(e) {
                    return e.text;
                },
                templateSelection: function(e) {
                    return e.text;
                },
                theme: 'default',
                width: 'resolve'
            };
        }, n.prototype.applyFromElement = function(e, t) {
            var n = e.language, s = this.defaults.language, i = t.prop('lang'), t = t.closest('[lang]').prop('lang'), t = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(s), this._resolveLanguage(t));
            return e.language = t, e;
        }, n.prototype._resolveLanguage = function(e) {
            if (!e) return [];
            if (l.isEmptyObject(e)) return [];
            if (l.isPlainObject(e)) return [ e ];
            for (var t, n = Array.isArray(e) ? e : [ e ], s = [], i = 0; i < n.length; i++) s.push(n[i]), 
            'string' == typeof n[i] && 0 < n[i].indexOf('-') && (t = n[i].split('-')[0], s.push(t));
            return s;
        }, n.prototype._processTranslations = function(e, t) {
            for (var n = new g, s = 0; s < e.length; s++) {
                var i = new g, r = e[s];
                if ('string' == typeof r) try {
                    i = g.loadPath(r);
                } catch (e) {
                    try {
                        r = this.defaults.amdLanguageBase + r, i = g.loadPath(r);
                    } catch (e) {
                        t && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.');
                    }
                } else i = l.isPlainObject(r) ? new g(r) : r;
                n.extend(i);
            }
            return n;
        }, n.prototype.set = function(e, t) {
            var n = {};
            n[l.camelCase(e)] = t;
            n = f._convertData(n);
            l.extend(!0, this.defaults, n);
        }, new n;
    })), u.define('select2/options', [ 'jquery', './defaults', './utils' ], (function(c, n, u) {
        function e(e, t) {
            this.options = e, null != t && this.fromElement(t), null != t && (this.options = n.applyFromElement(this.options, t)), 
            this.options = n.apply(this.options);
        }
        return e.prototype.fromElement = function(e) {
            var t = [ 'select2' ];
            null == this.options.multiple && (this.options.multiple = e.prop('multiple')), null == this.options.disabled && (this.options.disabled = e.prop('disabled')), 
            null == this.options.autocomplete && e.prop('autocomplete') && (this.options.autocomplete = e.prop('autocomplete')), 
            null == this.options.dir && (e.prop('dir') ? this.options.dir = e.prop('dir') : e.closest('[dir]').prop('dir') ? this.options.dir = e.closest('[dir]').prop('dir') : this.options.dir = 'ltr'), 
            e.prop('disabled', this.options.disabled), e.prop('multiple', this.options.multiple), 
            u.GetData(e[0], 'select2Tags') && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), 
            u.StoreData(e[0], 'data', u.GetData(e[0], 'select2Tags')), u.StoreData(e[0], 'tags', !0)), 
            u.GetData(e[0], 'ajaxUrl') && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.'), 
            e.attr('ajax--url', u.GetData(e[0], 'ajaxUrl')), u.StoreData(e[0], 'ajax-Url', u.GetData(e[0], 'ajaxUrl')));
            var n = {};
            function s(e, t) {
                return t.toUpperCase();
            }
            for (var i = 0; i < e[0].attributes.length; i++) {
                var r = e[0].attributes[i].name, o = 'data-';
                r.substr(0, o.length) == o && (r = r.substring(o.length), o = u.GetData(e[0], r), 
                n[r.replace(/-([a-z])/g, s)] = o);
            }
            c.fn.jquery && '1.' == c.fn.jquery.substr(0, 2) && e[0].dataset && (n = c.extend(!0, {}, e[0].dataset, n));
            var a, l = c.extend(!0, {}, u.GetData(e[0]), n);
            for (a in l = u._convertData(l)) -1 < t.indexOf(a) || (c.isPlainObject(this.options[a]) ? c.extend(this.options[a], l[a]) : this.options[a] = l[a]);
            return this;
        }, e.prototype.get = function(e) {
            return this.options[e];
        }, e.prototype.set = function(e, t) {
            this.options[e] = t;
        }, e;
    })), u.define('select2/core', [ 'jquery', './options', './utils', './keys' ], (function(t, i, r, s) {
        var o = function(e, t) {
            null != r.GetData(e[0], 'select2') && r.GetData(e[0], 'select2').destroy(), this.$element = e, 
            this.id = this._generateId(e), t = t || {}, this.options = new i(t, e), o.__super__.constructor.call(this);
            var n = e.attr('tabindex') || 0;
            r.StoreData(e[0], 'old-tabindex', n), e.attr('tabindex', '-1');
            t = this.options.get('dataAdapter');
            this.dataAdapter = new t(e, this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get('selectionAdapter');
            this.selection = new t(e, this.options), this.$selection = this.selection.render(), 
            this.selection.position(this.$selection, n);
            t = this.options.get('dropdownAdapter');
            this.dropdown = new t(e, this.options), this.$dropdown = this.dropdown.render(), 
            this.dropdown.position(this.$dropdown, n);
            n = this.options.get('resultsAdapter');
            this.results = new n(e, this.options, this.dataAdapter), this.$results = this.results.render(), 
            this.results.position(this.$results, this.$dropdown);
            var s = this;
            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), 
            this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), 
            this.dataAdapter.current((function(e) {
                s.trigger('selection:update', {
                    data: e
                });
            })), e[0].classList.add('select2-hidden-accessible'), e.attr('aria-hidden', 'true'), 
            this._syncAttributes(), r.StoreData(e[0], 'select2', this), e.data('select2', this);
        };
        return r.Extend(o, r.Observable), o.prototype._generateId = function(e) {
            return 'select2-' + (null != e.attr('id') ? e.attr('id') : null != e.attr('name') ? e.attr('name') + '-' + r.generateChars(2) : r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, '');
        }, o.prototype._placeContainer = function(e) {
            e.insertAfter(this.$element);
            var t = this._resolveWidth(this.$element, this.options.get('width'));
            null != t && e.css('width', t);
        }, o.prototype._resolveWidth = function(e, t) {
            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
            if ('resolve' == t) {
                var s = this._resolveWidth(e, 'style');
                return null != s ? s : this._resolveWidth(e, 'element');
            }
            if ('element' == t) {
                s = e.outerWidth(!1);
                return s <= 0 ? 'auto' : s + 'px';
            }
            if ('style' != t) return 'computedstyle' != t ? t : window.getComputedStyle(e[0]).width;
            e = e.attr('style');
            if ('string' != typeof e) return null;
            for (var i = e.split(';'), r = 0, o = i.length; r < o; r += 1) {
                var a = i[r].replace(/\s/g, '').match(n);
                if (null !== a && 1 <= a.length) return a[1];
            }
            return null;
        }, o.prototype._bindAdapters = function() {
            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), 
            this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, o.prototype._registerDomEvents = function() {
            var t = this;
            this.$element.on('change.select2', (function() {
                t.dataAdapter.current((function(e) {
                    t.trigger('selection:update', {
                        data: e
                    });
                }));
            })), this.$element.on('focus.select2', (function(e) {
                t.trigger('focus', e);
            })), this._syncA = r.bind(this._syncAttributes, this), this._syncS = r.bind(this._syncSubtree, this), 
            this._observer = new window.MutationObserver((function(e) {
                t._syncA(), t._syncS(e);
            })), this._observer.observe(this.$element[0], {
                attributes: !0,
                childList: !0,
                subtree: !1
            });
        }, o.prototype._registerDataEvents = function() {
            var n = this;
            this.dataAdapter.on('*', (function(e, t) {
                n.trigger(e, t);
            }));
        }, o.prototype._registerSelectionEvents = function() {
            var n = this, s = [ 'toggle', 'focus' ];
            this.selection.on('toggle', (function() {
                n.toggleDropdown();
            })), this.selection.on('focus', (function(e) {
                n.focus(e);
            })), this.selection.on('*', (function(e, t) {
                -1 === s.indexOf(e) && n.trigger(e, t);
            }));
        }, o.prototype._registerDropdownEvents = function() {
            var n = this;
            this.dropdown.on('*', (function(e, t) {
                n.trigger(e, t);
            }));
        }, o.prototype._registerResultsEvents = function() {
            var n = this;
            this.results.on('*', (function(e, t) {
                n.trigger(e, t);
            }));
        }, o.prototype._registerEvents = function() {
            var n = this;
            this.on('open', (function() {
                n.$container[0].classList.add('select2-container--open');
            })), this.on('close', (function() {
                n.$container[0].classList.remove('select2-container--open');
            })), this.on('enable', (function() {
                n.$container[0].classList.remove('select2-container--disabled');
            })), this.on('disable', (function() {
                n.$container[0].classList.add('select2-container--disabled');
            })), this.on('blur', (function() {
                n.$container[0].classList.remove('select2-container--focus');
            })), this.on('query', (function(t) {
                n.isOpen() || n.trigger('open', {}), this.dataAdapter.query(t, (function(e) {
                    n.trigger('results:all', {
                        data: e,
                        query: t
                    });
                }));
            })), this.on('query:append', (function(t) {
                this.dataAdapter.query(t, (function(e) {
                    n.trigger('results:append', {
                        data: e,
                        query: t
                    });
                }));
            })), this.on('keypress', (function(e) {
                var t = e.which;
                n.isOpen() ? t === s.ESC || t === s.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === s.ENTER || t === s.TAB ? (n.trigger('results:select', {}), 
                e.preventDefault()) : t === s.SPACE && e.ctrlKey ? (n.trigger('results:toggle', {}), 
                e.preventDefault()) : t === s.UP ? (n.trigger('results:previous', {}), e.preventDefault()) : t === s.DOWN && (n.trigger('results:next', {}), 
                e.preventDefault()) : (t === s.ENTER || t === s.SPACE || t === s.DOWN && e.altKey) && (n.open(), 
                e.preventDefault());
            }));
        }, o.prototype._syncAttributes = function() {
            this.options.set('disabled', this.$element.prop('disabled')), this.isDisabled() ? (this.isOpen() && this.close(), 
            this.trigger('disable', {})) : this.trigger('enable', {});
        }, o.prototype._isChangeMutation = function(e) {
            var t = this;
            if (e.addedNodes && 0 < e.addedNodes.length) {
                for (var n = 0; n < e.addedNodes.length; n++) if (e.addedNodes[n].selected) return !0;
            } else {
                if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                if (Array.isArray(e)) return e.some((function(e) {
                    return t._isChangeMutation(e);
                }));
            }
            return !1;
        }, o.prototype._syncSubtree = function(e) {
            var e = this._isChangeMutation(e), t = this;
            e && this.dataAdapter.current((function(e) {
                t.trigger('selection:update', {
                    data: e
                });
            }));
        }, o.prototype.trigger = function(e, t) {
            var n = o.__super__.trigger, s = {
                open: 'opening',
                close: 'closing',
                select: 'selecting',
                unselect: 'unselecting',
                clear: 'clearing'
            };
            if (void 0 === t && (t = {}), e in s) {
                var i = s[e], s = {
                    prevented: !1,
                    name: e,
                    args: t
                };
                if (n.call(this, i, s), s.prevented) return void (t.prevented = !0);
            }
            n.call(this, e, t);
        }, o.prototype.toggleDropdown = function() {
            this.isDisabled() || (this.isOpen() ? this.close() : this.open());
        }, o.prototype.open = function() {
            this.isOpen() || this.isDisabled() || this.trigger('query', {});
        }, o.prototype.close = function(e) {
            this.isOpen() && this.trigger('close', {
                originalEvent: e
            });
        }, o.prototype.isEnabled = function() {
            return !this.isDisabled();
        }, o.prototype.isDisabled = function() {
            return this.options.get('disabled');
        }, o.prototype.isOpen = function() {
            return this.$container[0].classList.contains('select2-container--open');
        }, o.prototype.hasFocus = function() {
            return this.$container[0].classList.contains('select2-container--focus');
        }, o.prototype.focus = function(e) {
            this.hasFocus() || (this.$container[0].classList.add('select2-container--focus'), 
            this.trigger('focus', {}));
        }, o.prototype.enable = function(e) {
            this.options.get('debug') && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
            e = !(e = null == e || 0 === e.length ? [ !0 ] : e)[0];
            this.$element.prop('disabled', e);
        }, o.prototype.data = function() {
            this.options.get('debug') && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
            var t = [];
            return this.dataAdapter.current((function(e) {
                t = e;
            })), t;
        }, o.prototype.val = function(e) {
            if (this.options.get('debug') && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), 
            null == e || 0 === e.length) return this.$element.val();
            e = e[0];
            Array.isArray(e) && (e = e.map((function(e) {
                return e.toString();
            }))), this.$element.val(e).trigger('input').trigger('change');
        }, o.prototype.destroy = function() {
            r.RemoveData(this.$container[0]), this.$container.remove(), this._observer.disconnect(), 
            this._observer = null, this._syncA = null, this._syncS = null, this.$element.off('.select2'), 
            this.$element.attr('tabindex', r.GetData(this.$element[0], 'old-tabindex')), this.$element[0].classList.remove('select2-hidden-accessible'), 
            this.$element.attr('aria-hidden', 'false'), r.RemoveData(this.$element[0]), this.$element.removeData('select2'), 
            this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), 
            this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
        }, o.prototype.render = function() {
            var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
            return e.attr('dir', this.options.get('dir')), this.$container = e, this.$container[0].classList.add('select2-container--' + this.options.get('theme')), 
            r.StoreData(e[0], 'element', this.$element), e;
        }, o;
    })), u.define('jquery-mousewheel', [ 'jquery' ], (function(e) {
        return e;
    })), u.define('jquery.select2', [ 'jquery', 'jquery-mousewheel', './select2/core', './select2/defaults', './select2/utils' ], (function(i, e, r, t, o) {
        var a;
        return null == i.fn.select2 && (a = [ 'open', 'close', 'destroy' ], i.fn.select2 = function(t) {
            if ('object' == typeof (t = t || {})) return this.each((function() {
                var e = i.extend(!0, {}, t);
                new r(i(this), e);
            })), this;
            if ('string' != typeof t) throw new Error('Invalid arguments for Select2: ' + t);
            var n, s = Array.prototype.slice.call(arguments, 1);
            return this.each((function() {
                var e = o.GetData(this, 'select2');
                null == e && window.console && console.error && console.error('The select2(\'' + t + '\') method was called on an element that is not using Select2.'), 
                n = e[t].apply(e, s);
            })), -1 < a.indexOf(t) ? this : n;
        }), null == i.fn.select2.defaults && (i.fn.select2.defaults = t), r;
    })), {
        define: u.define,
        require: u.require
    });
    function b(e, t) {
        return i.call(e, t);
    }
    function l(e, t) {
        var n, s, i, r, o, a, l, c, u, d, p = t && t.split('/'), h = y.map, f = h && h['*'] || {};
        if (e) {
            for (t = (e = e.split('/')).length - 1, y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, '')), 
            '.' === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), c = 0; c < e.length; c++) '.' === (d = e[c]) ? (e.splice(c, 1), 
            --c) : '..' === d && (0 === c || 1 === c && '..' === e[2] || '..' === e[c - 1] || 0 < c && (e.splice(c - 1, 2), 
            c -= 2));
            e = e.join('/');
        }
        if ((p || f) && h) {
            for (c = (n = e.split('/')).length; 0 < c; --c) {
                if (s = n.slice(0, c).join('/'), p) for (u = p.length; 0 < u; --u) if (i = h[p.slice(0, u).join('/')], 
                i = i && i[s]) {
                    r = i, o = c;
                    break;
                }
                if (r) break;
                !a && f && f[s] && (a = f[s], l = c);
            }
            !r && a && (r = a, o = l), r && (n.splice(0, o, r), e = n.join('/'));
        }
        return e;
    }
    function w(t, n) {
        return function() {
            var e = a.call(arguments, 0);
            return 'string' != typeof e[0] && 1 === e.length && e.push(null), o.apply(p, e.concat([ t, n ]));
        };
    }
    function x(e) {
        var t;
        if (b(m, e) && (t = m[e], delete m[e], v[e] = !0, r.apply(p, t)), !b(g, e) && !b(v, e)) throw new Error('No ' + e);
        return g[e];
    }
    function c(e) {
        var t, n = e ? e.indexOf('!') : -1;
        return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [ t, e ];
    }
    function A(e) {
        return e ? c(e) : [];
    }
    var u = s.require('jquery.select2');
    return t.fn.select2.amd = s, u;
}));

!function(a) {
    'object' == typeof module && module.exports ? module.exports = a() : window.intlTelInput = a();
}((function(a) {
    'use strict';
    return function() {
        function b(a, b) {
            if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
        }
        function c(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, 'value' in d && (d.writable = !0), 
                Object.defineProperty(a, d.key, d);
            }
        }
        function d(a, b, d) {
            return b && c(a.prototype, b), d && c(a, d), a;
        }
        for (var e = [ [ 'Afghanistan (‫افغانستان‬‎)', 'af', '93' ], [ 'Albania (Shqipëri)', 'al', '355' ], [ 'Algeria (‫الجزائر‬‎)', 'dz', '213' ], [ 'American Samoa', 'as', '1', 5, [ '684' ] ], [ 'Andorra', 'ad', '376' ], [ 'Angola', 'ao', '244' ], [ 'Anguilla', 'ai', '1', 6, [ '264' ] ], [ 'Antigua and Barbuda', 'ag', '1', 7, [ '268' ] ], [ 'Argentina', 'ar', '54' ], [ 'Armenia (Հայաստան)', 'am', '374' ], [ 'Aruba', 'aw', '297' ], [ 'Ascension Island', 'ac', '247' ], [ 'Australia', 'au', '61', 0 ], [ 'Austria (Österreich)', 'at', '43' ], [ 'Azerbaijan (Azərbaycan)', 'az', '994' ], [ 'Bahamas', 'bs', '1', 8, [ '242' ] ], [ 'Bahrain (‫البحرين‬‎)', 'bh', '973' ], [ 'Bangladesh (বাংলাদেশ)', 'bd', '880' ], [ 'Barbados', 'bb', '1', 9, [ '246' ] ], [ 'Belarus (Беларусь)', 'by', '375' ], [ 'Belgium (België)', 'be', '32' ], [ 'Belize', 'bz', '501' ], [ 'Benin (Bénin)', 'bj', '229' ], [ 'Bermuda', 'bm', '1', 10, [ '441' ] ], [ 'Bhutan (འབྲུག)', 'bt', '975' ], [ 'Bolivia', 'bo', '591' ], [ 'Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387' ], [ 'Botswana', 'bw', '267' ], [ 'Brazil (Brasil)', 'br', '55' ], [ 'British Indian Ocean Territory', 'io', '246' ], [ 'British Virgin Islands', 'vg', '1', 11, [ '284' ] ], [ 'Brunei', 'bn', '673' ], [ 'Bulgaria (България)', 'bg', '359' ], [ 'Burkina Faso', 'bf', '226' ], [ 'Burundi (Uburundi)', 'bi', '257' ], [ 'Cambodia (កម្ពុជា)', 'kh', '855' ], [ 'Cameroon (Cameroun)', 'cm', '237' ], [ 'Canada', 'ca', '1', 1, [ '204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905' ] ], [ 'Cape Verde (Kabu Verdi)', 'cv', '238' ], [ 'Caribbean Netherlands', 'bq', '599', 1, [ '3', '4', '7' ] ], [ 'Cayman Islands', 'ky', '1', 12, [ '345' ] ], [ 'Central African Republic (République centrafricaine)', 'cf', '236' ], [ 'Chad (Tchad)', 'td', '235' ], [ 'Chile', 'cl', '56' ], [ 'China (中国)', 'cn', '86' ], [ 'Christmas Island', 'cx', '61', 2, [ '89164' ] ], [ 'Cocos (Keeling) Islands', 'cc', '61', 1, [ '89162' ] ], [ 'Colombia', 'co', '57' ], [ 'Comoros (‫جزر القمر‬‎)', 'km', '269' ], [ 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243' ], [ 'Congo (Republic) (Congo-Brazzaville)', 'cg', '242' ], [ 'Cook Islands', 'ck', '682' ], [ 'Costa Rica', 'cr', '506' ], [ 'Côte d’Ivoire', 'ci', '225' ], [ 'Croatia (Hrvatska)', 'hr', '385' ], [ 'Cuba', 'cu', '53' ], [ 'Curaçao', 'cw', '599', 0 ], [ 'Cyprus (Κύπρος)', 'cy', '357' ], [ 'Czech Republic (Česká republika)', 'cz', '420' ], [ 'Denmark (Danmark)', 'dk', '45' ], [ 'Djibouti', 'dj', '253' ], [ 'Dominica', 'dm', '1', 13, [ '767' ] ], [ 'Dominican Republic (República Dominicana)', 'do', '1', 2, [ '809', '829', '849' ] ], [ 'Ecuador', 'ec', '593' ], [ 'Egypt (‫مصر‬‎)', 'eg', '20' ], [ 'El Salvador', 'sv', '503' ], [ 'Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240' ], [ 'Eritrea', 'er', '291' ], [ 'Estonia (Eesti)', 'ee', '372' ], [ 'Eswatini', 'sz', '268' ], [ 'Ethiopia', 'et', '251' ], [ 'Falkland Islands (Islas Malvinas)', 'fk', '500' ], [ 'Faroe Islands (Føroyar)', 'fo', '298' ], [ 'Fiji', 'fj', '679' ], [ 'Finland (Suomi)', 'fi', '358', 0 ], [ 'France', 'fr', '33' ], [ 'French Guiana (Guyane française)', 'gf', '594' ], [ 'French Polynesia (Polynésie française)', 'pf', '689' ], [ 'Gabon', 'ga', '241' ], [ 'Gambia', 'gm', '220' ], [ 'Georgia (საქართველო)', 'ge', '995' ], [ 'Germany (Deutschland)', 'de', '49' ], [ 'Ghana (Gaana)', 'gh', '233' ], [ 'Gibraltar', 'gi', '350' ], [ 'Greece (Ελλάδα)', 'gr', '30' ], [ 'Greenland (Kalaallit Nunaat)', 'gl', '299' ], [ 'Grenada', 'gd', '1', 14, [ '473' ] ], [ 'Guadeloupe', 'gp', '590', 0 ], [ 'Guam', 'gu', '1', 15, [ '671' ] ], [ 'Guatemala', 'gt', '502' ], [ 'Guernsey', 'gg', '44', 1, [ '1481', '7781', '7839', '7911' ] ], [ 'Guinea (Guinée)', 'gn', '224' ], [ 'Guinea-Bissau (Guiné Bissau)', 'gw', '245' ], [ 'Guyana', 'gy', '592' ], [ 'Haiti', 'ht', '509' ], [ 'Honduras', 'hn', '504' ], [ 'Hong Kong (香港)', 'hk', '852' ], [ 'Hungary (Magyarország)', 'hu', '36' ], [ 'Iceland (Ísland)', 'is', '354' ], [ 'India (भारत)', 'in', '91' ], [ 'Indonesia', 'id', '62' ], [ 'Iran (‫ایران‬‎)', 'ir', '98' ], [ 'Iraq (‫العراق‬‎)', 'iq', '964' ], [ 'Ireland', 'ie', '353' ], [ 'Isle of Man', 'im', '44', 2, [ '1624', '74576', '7524', '7924', '7624' ] ], [ 'Israel (‫ישראל‬‎)', 'il', '972' ], [ 'Italy (Italia)', 'it', '39', 0 ], [ 'Jamaica', 'jm', '1', 4, [ '876', '658' ] ], [ 'Japan (日本)', 'jp', '81' ], [ 'Jersey', 'je', '44', 3, [ '1534', '7509', '7700', '7797', '7829', '7937' ] ], [ 'Jordan (‫الأردن‬‎)', 'jo', '962' ], [ 'Kazakhstan (Казахстан)', 'kz', '7', 1, [ '33', '7' ] ], [ 'Kenya', 'ke', '254' ], [ 'Kiribati', 'ki', '686' ], [ 'Kosovo', 'xk', '383' ], [ 'Kuwait (‫الكويت‬‎)', 'kw', '965' ], [ 'Kyrgyzstan (Кыргызстан)', 'kg', '996' ], [ 'Laos (ລາວ)', 'la', '856' ], [ 'Latvia (Latvija)', 'lv', '371' ], [ 'Lebanon (‫لبنان‬‎)', 'lb', '961' ], [ 'Lesotho', 'ls', '266' ], [ 'Liberia', 'lr', '231' ], [ 'Libya (‫ليبيا‬‎)', 'ly', '218' ], [ 'Liechtenstein', 'li', '423' ], [ 'Lithuania (Lietuva)', 'lt', '370' ], [ 'Luxembourg', 'lu', '352' ], [ 'Macau (澳門)', 'mo', '853' ], [ 'Macedonia (FYROM) (Македонија)', 'mk', '389' ], [ 'Madagascar (Madagasikara)', 'mg', '261' ], [ 'Malawi', 'mw', '265' ], [ 'Malaysia', 'my', '60' ], [ 'Maldives', 'mv', '960' ], [ 'Mali', 'ml', '223' ], [ 'Malta', 'mt', '356' ], [ 'Marshall Islands', 'mh', '692' ], [ 'Martinique', 'mq', '596' ], [ 'Mauritania (‫موريتانيا‬‎)', 'mr', '222' ], [ 'Mauritius (Moris)', 'mu', '230' ], [ 'Mayotte', 'yt', '262', 1, [ '269', '639' ] ], [ 'Mexico (México)', 'mx', '52' ], [ 'Micronesia', 'fm', '691' ], [ 'Moldova (Republica Moldova)', 'md', '373' ], [ 'Monaco', 'mc', '377' ], [ 'Mongolia (Монгол)', 'mn', '976' ], [ 'Montenegro (Crna Gora)', 'me', '382' ], [ 'Montserrat', 'ms', '1', 16, [ '664' ] ], [ 'Morocco (‫المغرب‬‎)', 'ma', '212', 0 ], [ 'Mozambique (Moçambique)', 'mz', '258' ], [ 'Myanmar (Burma) (မြန်မာ)', 'mm', '95' ], [ 'Namibia (Namibië)', 'na', '264' ], [ 'Nauru', 'nr', '674' ], [ 'Nepal (नेपाल)', 'np', '977' ], [ 'Netherlands (Nederland)', 'nl', '31' ], [ 'New Caledonia (Nouvelle-Calédonie)', 'nc', '687' ], [ 'New Zealand', 'nz', '64' ], [ 'Nicaragua', 'ni', '505' ], [ 'Niger (Nijar)', 'ne', '227' ], [ 'Nigeria', 'ng', '234' ], [ 'Niue', 'nu', '683' ], [ 'Norfolk Island', 'nf', '672' ], [ 'North Korea (조선 민주주의 인민 공화국)', 'kp', '850' ], [ 'Northern Mariana Islands', 'mp', '1', 17, [ '670' ] ], [ 'Norway (Norge)', 'no', '47', 0 ], [ 'Oman (‫عُمان‬‎)', 'om', '968' ], [ 'Pakistan (‫پاکستان‬‎)', 'pk', '92' ], [ 'Palau', 'pw', '680' ], [ 'Palestine (‫فلسطين‬‎)', 'ps', '970' ], [ 'Panama (Panamá)', 'pa', '507' ], [ 'Papua New Guinea', 'pg', '675' ], [ 'Paraguay', 'py', '595' ], [ 'Peru (Perú)', 'pe', '51' ], [ 'Philippines', 'ph', '63' ], [ 'Poland (Polska)', 'pl', '48' ], [ 'Portugal', 'pt', '351' ], [ 'Puerto Rico', 'pr', '1', 3, [ '787', '939' ] ], [ 'Qatar (‫قطر‬‎)', 'qa', '974' ], [ 'Réunion (La Réunion)', 're', '262', 0 ], [ 'Romania (România)', 'ro', '40' ], [ 'Russia (Россия)', 'ru', '7', 0 ], [ 'Rwanda', 'rw', '250' ], [ 'Saint Barthélemy', 'bl', '590', 1 ], [ 'Saint Helena', 'sh', '290' ], [ 'Saint Kitts and Nevis', 'kn', '1', 18, [ '869' ] ], [ 'Saint Lucia', 'lc', '1', 19, [ '758' ] ], [ 'Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2 ], [ 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508' ], [ 'Saint Vincent and the Grenadines', 'vc', '1', 20, [ '784' ] ], [ 'Samoa', 'ws', '685' ], [ 'San Marino', 'sm', '378' ], [ 'São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239' ], [ 'Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966' ], [ 'Senegal (Sénégal)', 'sn', '221' ], [ 'Serbia (Србија)', 'rs', '381' ], [ 'Seychelles', 'sc', '248' ], [ 'Sierra Leone', 'sl', '232' ], [ 'Singapore', 'sg', '65' ], [ 'Sint Maarten', 'sx', '1', 21, [ '721' ] ], [ 'Slovakia (Slovensko)', 'sk', '421' ], [ 'Slovenia (Slovenija)', 'si', '386' ], [ 'Solomon Islands', 'sb', '677' ], [ 'Somalia (Soomaaliya)', 'so', '252' ], [ 'South Africa', 'za', '27' ], [ 'South Korea (대한민국)', 'kr', '82' ], [ 'South Sudan (‫جنوب السودان‬‎)', 'ss', '211' ], [ 'Spain (España)', 'es', '34' ], [ 'Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94' ], [ 'Sudan (‫السودان‬‎)', 'sd', '249' ], [ 'Suriname', 'sr', '597' ], [ 'Svalbard and Jan Mayen', 'sj', '47', 1, [ '79' ] ], [ 'Sweden (Sverige)', 'se', '46' ], [ 'Switzerland (Schweiz)', 'ch', '41' ], [ 'Syria (‫سوريا‬‎)', 'sy', '963' ], [ 'Taiwan (台灣)', 'tw', '886' ], [ 'Tajikistan', 'tj', '992' ], [ 'Tanzania', 'tz', '255' ], [ 'Thailand (ไทย)', 'th', '66' ], [ 'Timor-Leste', 'tl', '670' ], [ 'Togo', 'tg', '228' ], [ 'Tokelau', 'tk', '690' ], [ 'Tonga', 'to', '676' ], [ 'Trinidad and Tobago', 'tt', '1', 22, [ '868' ] ], [ 'Tunisia (‫تونس‬‎)', 'tn', '216' ], [ 'Turkey (Türkiye)', 'tr', '90' ], [ 'Turkmenistan', 'tm', '993' ], [ 'Turks and Caicos Islands', 'tc', '1', 23, [ '649' ] ], [ 'Tuvalu', 'tv', '688' ], [ 'U.S. Virgin Islands', 'vi', '1', 24, [ '340' ] ], [ 'Uganda', 'ug', '256' ], [ 'Ukraine (Україна)', 'ua', '380' ], [ 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971' ], [ 'United Kingdom', 'gb', '44', 0 ], [ 'United States', 'us', '1', 0 ], [ 'Uruguay', 'uy', '598' ], [ 'Uzbekistan (Oʻzbekiston)', 'uz', '998' ], [ 'Vanuatu', 'vu', '678' ], [ 'Vatican City (Città del Vaticano)', 'va', '39', 1, [ '06698' ] ], [ 'Venezuela', 've', '58' ], [ 'Vietnam (Việt Nam)', 'vn', '84' ], [ 'Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681' ], [ 'Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1, [ '5288', '5289' ] ], [ 'Yemen (‫اليمن‬‎)', 'ye', '967' ], [ 'Zambia', 'zm', '260' ], [ 'Zimbabwe', 'zw', '263' ], [ 'Åland Islands', 'ax', '358', 1, [ '18' ] ] ], f = 0; f < e.length; f++) {
            var g = e[f];
            e[f] = {
                name: g[0],
                iso2: g[1],
                dialCode: g[2],
                priority: g[3] || 0,
                areaCodes: g[4] || null
            };
        }
        var h = {
            getInstance: function(a) {
                var b = a.getAttribute('data-intl-tel-input-id');
                return window.intlTelInputGlobals.instances[b];
            },
            instances: {},
            documentReady: function() {
                return 'complete' === document.readyState;
            }
        };
        'object' == typeof window && (window.intlTelInputGlobals = h);
        var i = 0, j = {
            allowDropdown: !0,
            autoHideDialCode: !0,
            autoPlaceholder: 'polite',
            customContainer: '',
            customPlaceholder: null,
            dropdownContainer: null,
            excludeCountries: [],
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: '',
            initialCountry: '',
            localizedCountries: null,
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: 'MOBILE',
            preferredCountries: [ 'us', 'gb' ],
            separateDialCode: !1,
            utilsScript: ''
        }, k = [ '800', '822', '833', '844', '855', '866', '877', '880', '881', '882', '883', '884', '885', '886', '887', '888', '889' ], l = function(a, b) {
            for (var c = Object.keys(a), d = 0; d < c.length; d++) b(c[d], a[c[d]]);
        }, m = function(a) {
            l(window.intlTelInputGlobals.instances, (function(b) {
                window.intlTelInputGlobals.instances[b][a]();
            }));
        }, n = function() {
            function c(a, d) {
                var e = this;
                b(this, c), this.id = i++, this.a = a, this.b = null, this.c = null;
                var f = d || {};
                this.d = {}, l(j, (function(a, b) {
                    e.d[a] = f.hasOwnProperty(a) ? f[a] : b;
                })), this.e = Boolean(a.getAttribute('placeholder'));
            }
            return d(c, [ {
                key: '_init',
                value: function() {
                    var a = this;
                    if (this.d.nationalMode && (this.d.autoHideDialCode = !1), this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1), 
                    this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), 
                    this.g && (document.body.classList.add('iti-mobile'), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), 
                    'undefined' != typeof Promise) {
                        var b = new Promise((function(b, c) {
                            a.h = b, a.i = c;
                        })), c = new Promise((function(b, c) {
                            a.i0 = b, a.i1 = c;
                        }));
                        this.promise = Promise.all([ b, c ]);
                    } else this.h = this.i = function() {}, this.i0 = this.i1 = function() {};
                    this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i3();
                }
            }, {
                key: '_b',
                value: function() {
                    this._d(), this._d2(), this._e(), this.d.localizedCountries && this._d0(), (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1);
                }
            }, {
                key: '_c',
                value: function(b, c, d) {
                    c.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = c.length), this.q.hasOwnProperty(c) || (this.q[c] = []);
                    for (var e = 0; e < this.q[c].length; e++) if (this.q[c][e] === b) return;
                    var f = d !== a ? d : this.q[c].length;
                    this.q[c][f] = b;
                }
            }, {
                key: '_d',
                value: function() {
                    if (this.d.onlyCountries.length) {
                        var a = this.d.onlyCountries.map((function(a) {
                            return a.toLowerCase();
                        }));
                        this.p = e.filter((function(b) {
                            return a.indexOf(b.iso2) > -1;
                        }));
                    } else if (this.d.excludeCountries.length) {
                        var b = this.d.excludeCountries.map((function(a) {
                            return a.toLowerCase();
                        }));
                        this.p = e.filter((function(a) {
                            return -1 === b.indexOf(a.iso2);
                        }));
                    } else this.p = e;
                }
            }, {
                key: '_d0',
                value: function() {
                    for (var a = 0; a < this.p.length; a++) {
                        var b = this.p[a].iso2.toLowerCase();
                        this.d.localizedCountries.hasOwnProperty(b) && (this.p[a].name = this.d.localizedCountries[b]);
                    }
                }
            }, {
                key: '_d1',
                value: function(a, b) {
                    return a.name.localeCompare(b.name);
                }
            }, {
                key: '_d2',
                value: function() {
                    this.countryCodeMaxLen = 0, this.dialCodes = {}, this.q = {};
                    for (var a = 0; a < this.p.length; a++) {
                        var b = this.p[a];
                        this.dialCodes[b.dialCode] || (this.dialCodes[b.dialCode] = !0), this._c(b.iso2, b.dialCode, b.priority);
                    }
                    for (var c = 0; c < this.p.length; c++) {
                        var d = this.p[c];
                        if (d.areaCodes) for (var e = this.q[d.dialCode][0], f = 0; f < d.areaCodes.length; f++) {
                            for (var g = d.areaCodes[f], h = 1; h < g.length; h++) {
                                var i = d.dialCode + g.substr(0, h);
                                this._c(e, i), this._c(d.iso2, i);
                            }
                            this._c(d.iso2, d.dialCode + g);
                        }
                    }
                }
            }, {
                key: '_e',
                value: function() {
                    this.preferredCountries = [];
                    for (var a = 0; a < this.d.preferredCountries.length; a++) {
                        var b = this.d.preferredCountries[a].toLowerCase(), c = this._y(b, !1, !0);
                        c && this.preferredCountries.push(c);
                    }
                }
            }, {
                key: '_e2',
                value: function(a, b, c) {
                    var d = document.createElement(a);
                    return b && l(b, (function(a, b) {
                        return d.setAttribute(a, b);
                    })), c && c.appendChild(d), d;
                }
            }, {
                key: '_f',
                value: function() {
                    this.a.hasAttribute('autocomplete') || this.a.form && this.a.form.hasAttribute('autocomplete') || this.a.setAttribute('autocomplete', 'off');
                    var a = 'iti';
                    this.d.allowDropdown && (a += ' iti--allow-dropdown'), this.d.separateDialCode && (a += ' iti--separate-dial-code'), 
                    this.d.customContainer && (a += ' ', a += this.d.customContainer);
                    var b = this._e2('div', {
                        class: a
                    });
                    if (this.a.parentNode.insertBefore(b, this.a), this.k = this._e2('div', {
                        class: 'iti__flag-container'
                    }, b), b.appendChild(this.a), this.selectedFlag = this._e2('div', {
                        class: 'iti__selected-flag',
                        role: 'combobox',
                        'aria-controls': 'iti-'.concat(this.id, '__country-listbox'),
                        'aria-owns': 'iti-'.concat(this.id, '__country-listbox'),
                        'aria-expanded': 'false'
                    }, this.k), this.l = this._e2('div', {
                        class: 'iti__flag'
                    }, this.selectedFlag), this.d.separateDialCode && (this.t = this._e2('div', {
                        class: 'iti__selected-dial-code'
                    }, this.selectedFlag)), this.d.allowDropdown && (this.selectedFlag.setAttribute('tabindex', '0'), 
                    this.u = this._e2('div', {
                        class: 'iti__arrow'
                    }, this.selectedFlag), this.m = this._e2('ul', {
                        class: 'iti__country-list iti__hide',
                        id: 'iti-'.concat(this.id, '__country-listbox'),
                        role: 'listbox',
                        'aria-label': 'List of countries'
                    }), this.preferredCountries.length && (this._g(this.preferredCountries, 'iti__preferred', !0), 
                    this._e2('li', {
                        class: 'iti__divider',
                        role: 'separator',
                        'aria-disabled': 'true'
                    }, this.m)), this._g(this.p, 'iti__standard'), this.d.dropdownContainer ? (this.dropdown = this._e2('div', {
                        class: 'iti iti--container'
                    }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), this.d.hiddenInput) {
                        var c = this.d.hiddenInput, d = this.a.getAttribute('name');
                        if (d) {
                            var e = d.lastIndexOf('[');
                            -1 !== e && (c = ''.concat(d.substr(0, e), '[').concat(c, ']'));
                        }
                        this.hiddenInput = this._e2('input', {
                            type: 'hidden',
                            name: c
                        }), b.appendChild(this.hiddenInput);
                    }
                }
            }, {
                key: '_g',
                value: function(a, b, c) {
                    for (var d = '', e = 0; e < a.length; e++) {
                        var f = a[e], g = c ? '-preferred' : '';
                        d += '<li class=\'iti__country '.concat(b, '\' tabIndex=\'-1\' id=\'iti-').concat(this.id, '__item-').concat(f.iso2).concat(g, '\' role=\'option\' data-dial-code=\'').concat(f.dialCode, '\' data-country-code=\'').concat(f.iso2, '\' aria-selected=\'false\'>'), 
                        d += '<div class=\'iti__flag-box\'><div class=\'iti__flag iti__'.concat(f.iso2, '\'></div></div>'), 
                        d += '<span class=\'iti__country-name\'>'.concat(f.name, '</span>'), d += '<span class=\'iti__dial-code\'>+'.concat(f.dialCode, '</span>'), 
                        d += '</li>';
                    }
                    this.m.insertAdjacentHTML('beforeend', d);
                }
            }, {
                key: '_h',
                value: function() {
                    var a = this.a.getAttribute('value'), b = this.a.value, c = a && '+' === a.charAt(0) && (!b || '+' !== b.charAt(0)), d = c ? a : b, e = this._5(d), f = this._w(d), g = this.d, h = g.initialCountry, i = g.nationalMode, j = g.autoHideDialCode, k = g.separateDialCode;
                    e && !f ? this._v(d) : 'auto' !== h && (h ? this._z(h.toLowerCase()) : e && f ? this._z('us') : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, 
                    d || this._z(this.j)), d || i || j || k || (this.a.value = '+'.concat(this.s.dialCode))), 
                    d && this._u(d);
                }
            }, {
                key: '_i',
                value: function() {
                    this._j(), this.d.autoHideDialCode && this._l(), this.d.allowDropdown && this._i2(), 
                    this.hiddenInput && this._i0();
                }
            }, {
                key: '_i0',
                value: function() {
                    var a = this;
                    this._a14 = function() {
                        a.hiddenInput.value = a.getNumber();
                    }, this.a.form && this.a.form.addEventListener('submit', this._a14);
                }
            }, {
                key: '_i1',
                value: function() {
                    for (var a = this.a; a && 'LABEL' !== a.tagName; ) a = a.parentNode;
                    return a;
                }
            }, {
                key: '_i2',
                value: function() {
                    var a = this;
                    this._a9 = function(b) {
                        a.m.classList.contains('iti__hide') ? a.a.focus() : b.preventDefault();
                    };
                    var b = this._i1();
                    b && b.addEventListener('click', this._a9), this._a10 = function() {
                        !a.m.classList.contains('iti__hide') || a.a.disabled || a.a.readOnly || a._n();
                    }, this.selectedFlag.addEventListener('click', this._a10), this._a11 = function(b) {
                        a.m.classList.contains('iti__hide') && -1 !== [ 'ArrowUp', 'Up', 'ArrowDown', 'Down', ' ', 'Enter' ].indexOf(b.key) && (b.preventDefault(), 
                        b.stopPropagation(), a._n()), 'Tab' === b.key && a._2();
                    }, this.k.addEventListener('keydown', this._a11);
                }
            }, {
                key: '_i3',
                value: function() {
                    var a = this;
                    this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener('load', (function() {
                        window.intlTelInputGlobals.loadUtils(a.d.utilsScript);
                    })) : this.i0(), 'auto' === this.d.initialCountry ? this._i4() : this.h();
                }
            }, {
                key: '_i4',
                value: function() {
                    window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, 
                    'function' == typeof this.d.geoIpLookup && this.d.geoIpLookup((function(a) {
                        window.intlTelInputGlobals.autoCountry = a.toLowerCase(), setTimeout((function() {
                            return m('handleAutoCountry');
                        }));
                    }), (function() {
                        return m('rejectAutoCountryPromise');
                    })));
                }
            }, {
                key: '_j',
                value: function() {
                    var a = this;
                    this._a12 = function() {
                        a._v(a.a.value) && a._m2CountryChange();
                    }, this.a.addEventListener('keyup', this._a12), this._a13 = function() {
                        setTimeout(a._a12);
                    }, this.a.addEventListener('cut', this._a13), this.a.addEventListener('paste', this._a13);
                }
            }, {
                key: '_j2',
                value: function(a) {
                    var b = this.a.getAttribute('maxlength');
                    return b && a.length > b ? a.substr(0, b) : a;
                }
            }, {
                key: '_l',
                value: function() {
                    var a = this;
                    this._a8 = function() {
                        a._l2();
                    }, this.a.form && this.a.form.addEventListener('submit', this._a8), this.a.addEventListener('blur', this._a8);
                }
            }, {
                key: '_l2',
                value: function() {
                    if ('+' === this.a.value.charAt(0)) {
                        var a = this._m(this.a.value);
                        a && this.s.dialCode !== a || (this.a.value = '');
                    }
                }
            }, {
                key: '_m',
                value: function(a) {
                    return a.replace(/\D/g, '');
                }
            }, {
                key: '_m2',
                value: function(a) {
                    var b = document.createEvent('Event');
                    b.initEvent(a, !0, !0), this.a.dispatchEvent(b);
                }
            }, {
                key: '_n',
                value: function() {
                    this.m.classList.remove('iti__hide'), this.selectedFlag.setAttribute('aria-expanded', 'true'), 
                    this._o(), this.b && (this._x(this.b, !1), this._3(this.b, !0)), this._p(), this.u.classList.add('iti__arrow--up'), 
                    this._m2('open:countrydropdown');
                }
            }, {
                key: '_n2',
                value: function(a, b, c) {
                    c && !a.classList.contains(b) ? a.classList.add(b) : !c && a.classList.contains(b) && a.classList.remove(b);
                }
            }, {
                key: '_o',
                value: function() {
                    var a = this;
                    if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), 
                    !this.g) {
                        var b = this.a.getBoundingClientRect(), c = window.pageYOffset || document.documentElement.scrollTop, d = b.top + c, e = this.m.offsetHeight, f = d + this.a.offsetHeight + e < c + window.innerHeight, g = d - e > c;
                        if (this._n2(this.m, 'iti__country-list--dropup', !f && g), this.d.dropdownContainer) {
                            var h = !f && g ? 0 : this.a.offsetHeight;
                            this.dropdown.style.top = ''.concat(d + h, 'px'), this.dropdown.style.left = ''.concat(b.left + document.body.scrollLeft, 'px'), 
                            this._a4 = function() {
                                return a._2();
                            }, window.addEventListener('scroll', this._a4);
                        }
                    }
                }
            }, {
                key: '_o2',
                value: function(a) {
                    for (var b = a; b && b !== this.m && !b.classList.contains('iti__country'); ) b = b.parentNode;
                    return b === this.m ? null : b;
                }
            }, {
                key: '_p',
                value: function() {
                    var a = this;
                    this._a0 = function(b) {
                        var c = a._o2(b.target);
                        c && a._x(c, !1);
                    }, this.m.addEventListener('mouseover', this._a0), this._a1 = function(b) {
                        var c = a._o2(b.target);
                        c && a._1(c);
                    }, this.m.addEventListener('click', this._a1);
                    var b = !0;
                    this._a2 = function() {
                        b || a._2(), b = !1;
                    }, document.documentElement.addEventListener('click', this._a2);
                    var c = '', d = null;
                    this._a3 = function(b) {
                        b.preventDefault(), 'ArrowUp' === b.key || 'Up' === b.key || 'ArrowDown' === b.key || 'Down' === b.key ? a._q(b.key) : 'Enter' === b.key ? a._r() : 'Escape' === b.key ? a._2() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) && (d && clearTimeout(d), 
                        c += b.key.toLowerCase(), a._s(c), d = setTimeout((function() {
                            c = '';
                        }), 1e3));
                    }, document.addEventListener('keydown', this._a3);
                }
            }, {
                key: '_q',
                value: function(a) {
                    var b = 'ArrowUp' === a || 'Up' === a ? this.c.previousElementSibling : this.c.nextElementSibling;
                    b && (b.classList.contains('iti__divider') && (b = 'ArrowUp' === a || 'Up' === a ? b.previousElementSibling : b.nextElementSibling), 
                    this._x(b, !0));
                }
            }, {
                key: '_r',
                value: function() {
                    this.c && this._1(this.c);
                }
            }, {
                key: '_s',
                value: function(a) {
                    for (var b = 0; b < this.p.length; b++) if (this._t(this.p[b].name, a)) {
                        var c = this.m.querySelector('#iti-'.concat(this.id, '__item-').concat(this.p[b].iso2));
                        this._x(c, !1), this._3(c, !0);
                        break;
                    }
                }
            }, {
                key: '_t',
                value: function(a, b) {
                    return a.substr(0, b.length).toLowerCase() === b;
                }
            }, {
                key: '_u',
                value: function(a) {
                    var b = a;
                    if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
                        var c = !this.d.separateDialCode && (this.d.nationalMode || '+' !== b.charAt(0)), d = intlTelInputUtils.numberFormat, e = d.NATIONAL, f = d.INTERNATIONAL, g = c ? e : f;
                        b = intlTelInputUtils.formatNumber(b, this.s.iso2, g);
                    }
                    b = this._7(b), this.a.value = b;
                }
            }, {
                key: '_v',
                value: function(a) {
                    var b = a, c = this.s.dialCode, d = '1' === c;
                    b && this.d.nationalMode && d && '+' !== b.charAt(0) && ('1' !== b.charAt(0) && (b = '1'.concat(b)), 
                    b = '+'.concat(b)), this.d.separateDialCode && c && '+' !== b.charAt(0) && (b = '+'.concat(c).concat(b));
                    var e = this._5(b, !0), f = this._m(b), g = null;
                    if (e) {
                        var h = this.q[this._m(e)], i = -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1;
                        if (!('1' === c && this._w(f)) && !i) for (var j = 0; j < h.length; j++) if (h[j]) {
                            g = h[j];
                            break;
                        }
                    } else '+' === b.charAt(0) && f.length ? g = '' : b && '+' !== b || (g = this.j);
                    return null !== g && this._z(g);
                }
            }, {
                key: '_w',
                value: function(a) {
                    var b = this._m(a);
                    if ('1' === b.charAt(0)) {
                        var c = b.substr(1, 3);
                        return -1 !== k.indexOf(c);
                    }
                    return !1;
                }
            }, {
                key: '_x',
                value: function(a, b) {
                    var c = this.c;
                    c && c.classList.remove('iti__highlight'), this.c = a, this.c.classList.add('iti__highlight'), 
                    b && this.c.focus();
                }
            }, {
                key: '_y',
                value: function(a, b, c) {
                    for (var d = b ? e : this.p, f = 0; f < d.length; f++) if (d[f].iso2 === a) return d[f];
                    if (c) return null;
                    throw new Error('No country data for \''.concat(a, '\''));
                }
            }, {
                key: '_z',
                value: function(a) {
                    var b = this.s.iso2 ? this.s : {};
                    this.s = a ? this._y(a, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute('class', 'iti__flag iti__'.concat(a));
                    var c = a ? ''.concat(this.s.name, ': +').concat(this.s.dialCode) : 'Unknown';
                    if (this.selectedFlag.setAttribute('title', c), this.d.separateDialCode) {
                        var d = this.s.dialCode ? '+'.concat(this.s.dialCode) : '';
                        this.t.innerHTML = d;
                        var e = this.selectedFlag.offsetWidth || this._z2();
                        this.a.style.paddingLeft = ''.concat(e + 6, 'px');
                    }
                    if (this._0(), this.d.allowDropdown) {
                        var f = this.b;
                        if (f && (f.classList.remove('iti__active'), f.setAttribute('aria-selected', 'false')), 
                        a) {
                            var g = this.m.querySelector('#iti-'.concat(this.id, '__item-').concat(a, '-preferred')) || this.m.querySelector('#iti-'.concat(this.id, '__item-').concat(a));
                            g.setAttribute('aria-selected', 'true'), g.classList.add('iti__active'), this.b = g, 
                            this.selectedFlag.setAttribute('aria-activedescendant', g.getAttribute('id'));
                        }
                    }
                    return b.iso2 !== a;
                }
            }, {
                key: '_z2',
                value: function() {
                    var a = this.a.parentNode.cloneNode();
                    a.style.visibility = 'hidden', document.body.appendChild(a);
                    var b = this.k.cloneNode();
                    a.appendChild(b);
                    var c = this.selectedFlag.cloneNode(!0);
                    b.appendChild(c);
                    var d = c.offsetWidth;
                    return a.parentNode.removeChild(a), d;
                }
            }, {
                key: '_0',
                value: function() {
                    var a = 'aggressive' === this.d.autoPlaceholder || !this.e && 'polite' === this.d.autoPlaceholder;
                    if (window.intlTelInputUtils && a) {
                        var b = intlTelInputUtils.numberType[this.d.placeholderNumberType], c = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, b) : '';
                        c = this._7(c), 'function' == typeof this.d.customPlaceholder && (c = this.d.customPlaceholder(c, this.s)), 
                        this.a.setAttribute('placeholder', c);
                    }
                }
            }, {
                key: '_1',
                value: function(a) {
                    var b = this._z(a.getAttribute('data-country-code'));
                    this._2(), this._4(a.getAttribute('data-dial-code'), !0), this.a.focus();
                    var c = this.a.value.length;
                    this.a.setSelectionRange(c, c), b && this._m2CountryChange();
                }
            }, {
                key: '_2',
                value: function() {
                    this.m.classList.add('iti__hide'), this.selectedFlag.setAttribute('aria-expanded', 'false'), 
                    this.u.classList.remove('iti__arrow--up'), document.removeEventListener('keydown', this._a3), 
                    document.documentElement.removeEventListener('click', this._a2), this.m.removeEventListener('mouseover', this._a0), 
                    this.m.removeEventListener('click', this._a1), this.d.dropdownContainer && (this.g || window.removeEventListener('scroll', this._a4), 
                    this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), 
                    this._m2('close:countrydropdown');
                }
            }, {
                key: '_3',
                value: function(a, b) {
                    var c = this.m, d = window.pageYOffset || document.documentElement.scrollTop, e = c.offsetHeight, f = c.getBoundingClientRect().top + d, g = f + e, h = a.offsetHeight, i = a.getBoundingClientRect().top + d, j = i + h, k = i - f + c.scrollTop, l = e / 2 - h / 2;
                    if (i < f) b && (k -= l), c.scrollTop = k; else if (j > g) {
                        b && (k += l);
                        var m = e - h;
                        c.scrollTop = k - m;
                    }
                }
            }, {
                key: '_4',
                value: function(a, b) {
                    var c, d = this.a.value, e = '+'.concat(a);
                    if ('+' === d.charAt(0)) {
                        var f = this._5(d);
                        c = f ? d.replace(f, e) : e;
                    } else {
                        if (this.d.nationalMode || this.d.separateDialCode) return;
                        if (d) c = e + d; else {
                            if (!b && this.d.autoHideDialCode) return;
                            c = e;
                        }
                    }
                    this.a.value = c;
                }
            }, {
                key: '_5',
                value: function(a, b) {
                    var c = '';
                    if ('+' === a.charAt(0)) for (var d = '', e = 0; e < a.length; e++) {
                        var f = a.charAt(e);
                        if (!isNaN(parseInt(f, 10))) {
                            if (d += f, b) this.q[d] && (c = a.substr(0, e + 1)); else if (this.dialCodes[d]) {
                                c = a.substr(0, e + 1);
                                break;
                            }
                            if (d.length === this.countryCodeMaxLen) break;
                        }
                    }
                    return c;
                }
            }, {
                key: '_6',
                value: function() {
                    var a = this.a.value.trim(), b = this.s.dialCode, c = this._m(a);
                    return (this.d.separateDialCode && '+' !== a.charAt(0) && b && c ? '+'.concat(b) : '') + a;
                }
            }, {
                key: '_7',
                value: function(a) {
                    var b = a;
                    if (this.d.separateDialCode) {
                        var c = this._5(b);
                        if (c) {
                            c = '+'.concat(this.s.dialCode);
                            var d = ' ' === b[c.length] || '-' === b[c.length] ? c.length + 1 : c.length;
                            b = b.substr(d);
                        }
                    }
                    return this._j2(b);
                }
            }, {
                key: '_m2CountryChange',
                value: function() {
                    this._m2('countrychange');
                }
            }, {
                key: 'handleAutoCountry',
                value: function() {
                    'auto' === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry, 
                    this.a.value || this.setCountry(this.j), this.h());
                }
            }, {
                key: 'handleUtils',
                value: function() {
                    window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0()), 
                    this.i0();
                }
            }, {
                key: 'destroy',
                value: function() {
                    var a = this.a.form;
                    if (this.d.allowDropdown) {
                        this._2(), this.selectedFlag.removeEventListener('click', this._a10), this.k.removeEventListener('keydown', this._a11);
                        var b = this._i1();
                        b && b.removeEventListener('click', this._a9);
                    }
                    this.hiddenInput && a && a.removeEventListener('submit', this._a14), this.d.autoHideDialCode && (a && a.removeEventListener('submit', this._a8), 
                    this.a.removeEventListener('blur', this._a8)), this.a.removeEventListener('keyup', this._a12), 
                    this.a.removeEventListener('cut', this._a13), this.a.removeEventListener('paste', this._a13), 
                    this.a.removeAttribute('data-intl-tel-input-id');
                    var c = this.a.parentNode;
                    c.parentNode.insertBefore(this.a, c), c.parentNode.removeChild(c), delete window.intlTelInputGlobals.instances[this.id];
                }
            }, {
                key: 'getExtension',
                value: function() {
                    return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : '';
                }
            }, {
                key: 'getNumber',
                value: function(a) {
                    if (window.intlTelInputUtils) {
                        var b = this.s.iso2;
                        return intlTelInputUtils.formatNumber(this._6(), b, a);
                    }
                    return '';
                }
            }, {
                key: 'getNumberType',
                value: function() {
                    return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99;
                }
            }, {
                key: 'getSelectedCountryData',
                value: function() {
                    return this.s;
                }
            }, {
                key: 'getValidationError',
                value: function() {
                    if (window.intlTelInputUtils) {
                        var a = this.s.iso2;
                        return intlTelInputUtils.getValidationError(this._6(), a);
                    }
                    return -99;
                }
            }, {
                key: 'isValidNumber',
                value: function() {
                    var a = this._6().trim(), b = this.d.nationalMode ? this.s.iso2 : '';
                    return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(a, b) : null;
                }
            }, {
                key: 'setCountry',
                value: function(a) {
                    var b = a.toLowerCase();
                    this.l.classList.contains('iti__'.concat(b)) || (this._z(b), this._4(this.s.dialCode, !1), 
                    this._m2CountryChange());
                }
            }, {
                key: 'setNumber',
                value: function(a) {
                    var b = this._v(a);
                    this._u(a), b && this._m2CountryChange();
                }
            }, {
                key: 'setPlaceholderNumberType',
                value: function(a) {
                    this.d.placeholderNumberType = a, this._0();
                }
            } ]), c;
        }();
        h.getCountryData = function() {
            return e;
        };
        var o = function(a, b, c) {
            var d = document.createElement('script');
            d.onload = function() {
                m('handleUtils'), b && b();
            }, d.onerror = function() {
                m('rejectUtilsScriptPromise'), c && c();
            }, d.className = 'iti-load-utils', d.async = !0, d.src = a, document.body.appendChild(d);
        };
        return h.loadUtils = function(a) {
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, 'undefined' != typeof Promise) return new Promise((function(b, c) {
                    return o(a, b, c);
                }));
                o(a);
            }
            return null;
        }, h.defaults = j, h.version = '17.0.13', function(a, b) {
            var c = new n(a, b);
            return c._init(), a.setAttribute('data-intl-tel-input-id', c.id), window.intlTelInputGlobals.instances[c.id] = c, 
            c;
        };
    }();
}));

(function($) {
    'use strict';
    function eSelect() {
        var $select = $('.e-select');
        if ($select.length) {
            $select.each((function() {
                var theme = $(this).data('other-class');
                $(this).select2({
                    minimumResultsForSearch: -1,
                    theme: theme
                });
            }));
        }
        $('.select-custom .e-select').on('select2:select', (function(e) {
            $(this).closest('.select-custom').addClass('selected');
        }));
    }
    function eDropdown() {
        $('.e-dropdown .dropdown-toggle').click((function() {
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $('.e-dropdown').removeClass('show');
                $this.parent().addClass('show');
            } else {
                $('.e-dropdown').removeClass('show');
            }
        }));
        $('.e-dropdown .dropdown li').click((function() {
            var $this = $(this);
            if (!$this.hasClass('selected')) {
                $this.addClass('selected').siblings().removeClass('selected');
                $this.closest('.e-dropdown').find('.dropdown-toggle').text($(this).text());
            }
        }));
    }
    function sliderProduct() {
        $('.product-slider').slick({
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 0,
            responsive: [ {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            } ]
        });
    }
    function sliderProductDetail() {
        $('.main-detail__slider .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            fade: true,
            rows: 0,
            slide: '.main-detail__slider .product-image',
            asNavFor: '.main-detail__slider .slider-nav',
            appendArrows: '.main-detail__slider .group-arrow'
        });
        $('.main-detail__slider .slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.main-detail__slider .slider-for',
            infinite: false,
            rows: 0,
            dots: false,
            arrows: false,
            focusOnSelect: true,
            vertical: true,
            verticalSwiping: true,
            responsive: [ {
                breakpoint: 768,
                settings: {
                    vertical: false
                }
            } ]
        });
    }
    function qtyNumber() {
        var $qtyInputs = $('.qty-input');
        if (!$qtyInputs.length) {
            return;
        }
        var $inputs = $qtyInputs.find('.product-qty');
        var $countBtn = $qtyInputs.find('.qty-count');
        var qtyMin = parseInt($inputs.attr('min'));
        var qtyMax = parseInt($inputs.attr('max'));
        $inputs.change((function() {
            var $this = $(this);
            var $minusBtn = $this.siblings('.qty-count--minus');
            var $addBtn = $this.siblings('.qty-count--add');
            var qty = parseInt($this.val());
            if (isNaN(qty) || qty <= qtyMin) {
                $this.val(qtyMin);
                $minusBtn.attr('disabled', true);
            } else {
                $minusBtn.attr('disabled', false);
                if (qty >= qtyMax) {
                    $this.val(qtyMax);
                    $addBtn.attr('disabled', true);
                } else {
                    $this.val(qty);
                    $addBtn.attr('disabled', false);
                }
            }
        }));
        $countBtn.click((function() {
            var operator = this.dataset.action;
            var $this = $(this);
            var $input = $this.siblings('.product-qty');
            var qty = parseInt($input.val());
            if (operator == 'add') {
                qty += 1;
                if (qty >= qtyMin + 1) {
                    $this.siblings('.qty-count--minus').attr('disabled', false);
                }
                if (qty >= qtyMax) {
                    $this.attr('disabled', true);
                }
            } else {
                qty = qty <= qtyMin ? qtyMin : qty -= 1;
                if (qty == qtyMin) {
                    $this.attr('disabled', true);
                }
                if (qty < qtyMax) {
                    $this.siblings('.qty-count--add').attr('disabled', false);
                }
            }
            $input.val(qty);
        }));
    }
    function tabsNav() {
        $('.tabs .tabs-nav li').click((function() {
            $('.tabs .tabs-nav li').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        }));
    }
    function checkBoxFilter() {
        $('.checkbox-dropdown .checkbox-dropdown__label').click((function() {
            $(this).parent().toggleClass('open').siblings().removeClass('open');
        }));
        $('.checkbox-dropdown .checkbox-list').each((function() {
            var $checkboxes = $(this).find('input[type="checkbox"]');
            var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
            $checkboxes.closest('.checkbox-dropdown').find('.count, .text-selected .number').text(countCheckedCheckboxes);
            if (countCheckedCheckboxes) {
                $(this).closest('.checkbox-dropdown').addClass('active');
            } else {
                $(this).closest('.checkbox-dropdown').removeClass('active');
            }
            $checkboxes.change((function() {
                $checkboxes.closest('.single-selection').find('input[type="checkbox"]').not(this).prop('checked', false);
                countCheckedCheckboxes = $checkboxes.filter(':checked').length;
                $checkboxes.closest('.checkbox-dropdown').find('.count, .text-selected .number').text(countCheckedCheckboxes);
                if (countCheckedCheckboxes) {
                    $(this).closest('.checkbox-dropdown').addClass('active');
                } else {
                    $(this).closest('.checkbox-dropdown').removeClass('active');
                }
            }));
        }));
        $(document).mouseup((function(event) {
            var target = event.target;
            var select = $('.checkbox-dropdown');
            if (!select.is(target) && select.has(target).length === 0) {
                select.removeClass('open');
            }
        }));
    }
    function actionView() {
        $('.action-view .view-grid').click((function(e) {
            var $list = $('.product-list');
            e.preventDefault();
            $('.action-view .view-item').removeClass('active');
            $(this).addClass('active');
            if (!$list.hasClass('grid')) {
                $list.removeClass('list').addClass('grid');
            }
        }));
        $('.action-view .view-list').click((function(e) {
            var $list = $('.product-list');
            e.preventDefault();
            $('.action-view .view-item').removeClass('active');
            $(this).addClass('active');
            if (!$list.hasClass('list')) {
                $list.removeClass('grid').addClass('list');
            }
        }));
    }
    function actionViewCart() {
        $('.cart-open').click((function() {
            $('html').addClass('open-cart');
        }));
        $('.filter-open').click((function() {
            $('html').addClass('open-filter');
        }));
        $('.float-view .close, .float-view .float-view__overlay').click((function() {
            var html = $('html');
            html.removeClass('open-cart');
            html.removeClass('open-filter');
        }));
    }
    function actionViewSearch() {
        $('.search-open').click((function() {
            $('html').toggleClass('open-search');
        }));
        $('.search__overlay').click((function() {
            $('html').removeClass('open-search');
        }));
    }
    function changeAddress() {
        $('.change-address').click((function() {
            $(this).closest('.totals-item').find('.group-address').slideToggle();
        }));
    }
    function calShipping() {
        $('.calculator-ship').click((function() {
            $(this).closest('.totals-item').find('.calculate-content').slideToggle();
        }));
    }
    function intTelInput() {
        if ($('#phone').length) {
            var input = document.querySelector('#phone');
            window.intlTelInput(input, {
                preferredCountries: [ 'us', 'fr' ]
            });
        }
    }
    function checkExpress() {
        $('.shopping-unit .express-item input[type="radio"]').click((function() {
            if ($(this).is(':checked')) {
                $(this).closest('.express-item').addClass('active').siblings().removeClass('active');
            }
        }));
    }
    function stickyHeader() {
        $(window).scroll((function() {
            if ($(this).scrollTop() > 0) {
                $('#header').addClass('sticky');
            } else {
                $('#header').removeClass('sticky');
            }
        }));
    }
    function openMenu() {
        $('.toggle-button').click((function() {
            $(this).toggleClass('open');
            $('.main-menu').toggleClass('open');
            $('html').toggleClass('open-menu');
        }));
    }
    function openSubMenuMobile() {
        $('.arrow-menu').click((function() {
            $(this).parent().siblings().removeClass('show');
            $(this).parent().toggleClass('show');
        }));
        $('.back-menu').click((function() {
            $(this).closest('.has-sub').siblings().removeClass('show');
            $(this).closest('.has-sub').removeClass('show');
        }));
    }
    function collapsePreview() {
        $('.collapse-title').click((function() {
            $(this).toggleClass('active');
            $(this).parent().find('.collapse-content').slideToggle();
        }));
    }
    function sliderRange() {
        var $input = $('#amount'), $min = $input.data('min'), $max = $input.data('max');
        $('#slider-range').slider({
            range: true,
            min: $min,
            max: $max,
            values: [ 35, 750 ],
            slide: function(event, ui) {
                $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
            }
        });
        $('#amount').val('$' + $('#slider-range').slider('values', 0) + ' - $' + $('#slider-range').slider('values', 1));
    }
    $(document).click((function(e) {
        var target = e.target;
        if (!$(target).is('.e-dropdown .dropdown-toggle') && !$(target).parents().is('.e-dropdown .dropdown-toggle')) {
            $('.e-dropdown').removeClass('show');
        }
    }));
    $(document).ready((function() {
        eSelect();
        eDropdown();
        intTelInput();
        sliderProduct();
        sliderProductDetail();
        qtyNumber();
        tabsNav();
        checkBoxFilter();
        actionView();
        actionViewCart();
        actionViewSearch();
        changeAddress();
        calShipping();
        checkExpress();
        openMenu();
        openSubMenuMobile();
        collapsePreview();
        stickyHeader();
        sliderRange();
    }));
})(jQuery);
//# sourceMappingURL=main.js.map