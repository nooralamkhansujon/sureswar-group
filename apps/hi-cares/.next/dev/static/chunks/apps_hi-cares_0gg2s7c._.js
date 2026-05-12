(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/hi-cares/lib/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navHome",
    ()=>navHome,
    "navSections",
    ()=>navSections
]);
const navHome = {
    name: "Home",
    href: "/#top"
};
const navSections = [
    {
        name: "Vision",
        href: "#vision"
    },
    {
        name: "Chairman",
        href: "#message-chairman"
    },
    {
        name: "MD",
        href: "#message-md"
    },
    {
        name: "Overview",
        href: "#overview"
    },
    {
        name: "Bangladesh",
        href: "#bangladesh"
    },
    {
        name: "Manpower",
        href: "#manpower-potentials"
    },
    {
        name: "Why HiCare",
        href: "#why-choose"
    },
    {
        name: "Organogram",
        href: "#organogram"
    },
    {
        name: "Services",
        href: "#services"
    },
    {
        name: "Recruitment",
        href: "#recruitment"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/hi-cares/components/site-navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteNavbar",
    ()=>SiteNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$hi$2d$cares$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/hi-cares/lib/navigation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SiteNavbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SiteNavbar.useCallback[close]": ()=>setOpen(false)
    }["SiteNavbar.useCallback[close]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNavbar.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape") close();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "SiteNavbar.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["SiteNavbar.useEffect"];
        }
    }["SiteNavbar.useEffect"], [
        close
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNavbar.useEffect": ()=>{
            document.body.style.overflow = open ? "hidden" : "";
            return ({
                "SiteNavbar.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["SiteNavbar.useEffect"];
        }
    }["SiteNavbar.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hicare-nav",
        "aria-label": "Primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/#top",
                className: "nav-logo",
                onClick: close,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hi",
                        children: [
                            "H",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hi-i-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hi-i-dot",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    "\u0131"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            "Care"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sub",
                        children: "SERVICES LTD."
                    }, void 0, false, {
                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "license-tag",
                        children: "Recruiting License # 2234"
                    }, void 0, false, {
                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "nav-toggle",
                "aria-expanded": open,
                "aria-controls": "hicare-nav-menu",
                onClick: ()=>setOpen((v)=>!v),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: open ? "Close menu" : "Open menu"
                    }, void 0, false, {
                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 18L18 6M6 6l12 12",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 6h16M4 12h16M4 18h16",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: "hicare-nav-menu",
                className: open ? "is-open" : undefined,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$hi$2d$cares$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSections"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: close,
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "nav-cta",
                            onClick: close,
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/hi-cares/components/site-navbar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(SiteNavbar, "ZSB6wxxF4aCjPHD7UDaIwMhtV7U=");
_c = SiteNavbar;
var _c;
__turbopack_context__.k.register(_c, "SiteNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_hi-cares_0gg2s7c._.js.map