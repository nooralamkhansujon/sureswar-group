(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/sureswar-group/components/brand-mark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandMark",
    ()=>BrandMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$FlightTakeoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/FlightTakeoff.mjs [app-client] (ecmascript)");
;
;
;
const COLORS = {
    gold: "#d4af37",
    goldBright: "#f0c956",
    surface: "#0a0a0b"
};
const GOLD_GRADIENT = `linear-gradient(135deg, ${COLORS.goldBright} 0%, ${COLORS.gold} 60%, #b8901e 100%)`;
function BrandMark() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-hidden": true,
        sx: {
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: GOLD_GRADIENT,
            color: COLORS.surface,
            boxShadow: "0 4px 14px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.4)",
            flexShrink: 0,
            position: "relative",
            "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
                pointerEvents: "none"
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$FlightTakeoff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 18
            }
        }, void 0, false, {
            fileName: "[project]/apps/sureswar-group/components/brand-mark.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/sureswar-group/components/brand-mark.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = BrandMark;
var _c;
__turbopack_context__.k.register(_c, "BrandMark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/sureswar-group/lib/site-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Replace with real URLs when available. */ __turbopack_context__.s([
    "contact",
    ()=>contact,
    "externalUrls",
    ()=>externalUrls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const externalUrls = {
    sureswarTravels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SURESWAR_TRAVELS_URL ?? "https://example.com/sureswar-travels",
    hiCareServices: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_HICARE_SERVICES_URL ?? "https://example.com/hicare-services"
};
const contact = {
    phoneDisplay: "+880 1711-000000",
    phoneTel: "+8801711000000",
    email: "info@sureswargroup.com",
    /** Used for the embedded map search; update to your registered address. */ mapQuery: "Dhaka, Bangladesh"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/sureswar-group/lib/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBranch",
    ()=>isBranch,
    "mainNav",
    ()=>mainNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/sureswar-group/lib/site-config.ts [app-client] (ecmascript)");
;
function isBranch(entry) {
    return "children" in entry;
}
const mainNav = [
    {
        label: "Home",
        headerLabel: "HOME",
        href: "/"
    },
    {
        label: "About Sureswar Group",
        headerLabel: "ABOUT",
        children: [
            {
                label: "Our Vision",
                href: "/about#our-vision"
            },
            {
                label: "Leadership",
                href: "/about#leadership"
            },
            {
                label: "Business Values",
                href: "/about#business-values"
            }
        ]
    },
    {
        label: "Our Companies",
        headerLabel: "OUR COMPANIES",
        children: [
            {
                label: "Sureswar Travels",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["externalUrls"].sureswarTravels,
                external: true
            },
            {
                label: "Sadi Corporation",
                href: "/sadi-corporation"
            },
            {
                label: "HiCare Services Ltd.",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["externalUrls"].hiCareServices,
                external: true
            },
            {
                label: "Holiday Express",
                href: "/holiday-express"
            }
        ]
    },
    {
        label: "Sadi Corporation",
        headerLabel: "SERVICES",
        children: [
            {
                label: "Overview",
                href: "/sadi-corporation"
            },
            {
                label: "Contracting Services",
                href: "/sadi-corporation#contracting-services"
            },
            {
                label: "Electrical Works",
                href: "/sadi-corporation#electrical-works"
            },
            {
                label: "Supply & Security Equipment",
                href: "/sadi-corporation#supply-security-equipment"
            },
            {
                label: "Contact",
                href: "/sadi-corporation#contact"
            }
        ]
    },
    {
        label: "Holiday Express",
        headerLabel: "TOURS",
        children: [
            {
                label: "Overview",
                href: "/holiday-express"
            },
            {
                label: "Tour Packages",
                href: "/holiday-express#tour-packages"
            },
            {
                label: "Visa Assistance",
                href: "/holiday-express#visa-assistance"
            },
            {
                label: "Contact",
                href: "/holiday-express#contact"
            }
        ]
    },
    {
        label: "News / Updates",
        headerLabel: "NEWS",
        href: "/news"
    },
    {
        label: "Contact Us",
        headerLabel: "CONTACT",
        children: [
            {
                label: "Inquiry Form",
                href: "/contact#inquiry"
            },
            {
                label: "Phone / Email",
                href: "/contact#details"
            },
            {
                label: "Google Map",
                href: "/contact#map"
            }
        ]
    }
];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/sureswar-group/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$AppBar$2f$AppBar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/AppBar/AppBar.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Toolbar$2f$Toolbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Toolbar/Toolbar.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Drawer/Drawer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/List/List.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItem/ListItem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemButton/ListItemButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$Collapse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Collapse/Collapse.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Menu.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/KeyboardArrowDown.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ExpandMore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/ExpandMore.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ExpandLess$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/ExpandLess.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Phone.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/NorthEast.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/ChevronRight.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$components$2f$brand$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/sureswar-group/components/brand-mark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/sureswar-group/lib/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/sureswar-group/lib/navigation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const COLORS = {
    gold: "#d4af37",
    goldBright: "#f0c956",
    coral: "#e94335",
    surface: "#0a0a0b",
    surface2: "#141416"
};
const GOLD_GRADIENT = `linear-gradient(135deg, ${COLORS.goldBright} 0%, ${COLORS.gold} 60%, #b8901e 100%)`;
const CORAL_GRADIENT = `linear-gradient(135deg, ${COLORS.coral} 0%, #c5331f 100%)`;
function topLabel(entry) {
    return "headerLabel" in entry && entry.headerLabel ? entry.headerLabel : entry.label;
}
function isActiveLeaf(item, pathname) {
    if (item.external) return false;
    const base = item.href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(base + "/");
}
function isActiveBranch(branch, pathname) {
    return branch.children.some((c)=>isActiveLeaf(c, pathname));
}
/** Shared sx for the animated-underline desktop nav button. */ function navButtonSx(active) {
    return {
        position: "relative",
        color: active ? COLORS.gold : "rgba(255,255,255,0.85)",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "none",
        px: 1.75,
        py: 1.25,
        minWidth: 0,
        borderRadius: 1,
        transition: "color 200ms ease",
        "&:hover": {
            color: "#fff",
            backgroundColor: "transparent"
        },
        "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: 6,
            height: "2px",
            width: active ? "calc(100% - 28px)" : "0%",
            background: GOLD_GRADIENT,
            borderRadius: 2,
            transform: "translateX(-50%)",
            transition: "width 240ms cubic-bezier(.4,0,.2,1)"
        },
        "&:hover::after": {
            width: "calc(100% - 28px)"
        }
    };
}
function DesktopLeaf({ item }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = isActiveLeaf(item, pathname);
    const label = item.headerLabel ?? item.label;
    if (item.external) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            target: "_blank",
            rel: "noopener noreferrer",
            sx: navButtonSx(active),
            endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)"
                }
            }, void 0, false, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 104,
                columnNumber: 18
            }, this),
            children: label
        }, void 0, false, {
            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        href: item.href,
        sx: navButtonSx(active),
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(DesktopLeaf, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DesktopLeaf;
function DesktopDropdown({ branch }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const open = Boolean(anchorEl);
    const active = isActiveBranch(branch, pathname);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: (e)=>setAnchorEl(e.currentTarget),
                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        fontSize: 16,
                        transition: "transform 220ms cubic-bezier(.4,0,.2,1)",
                        transform: open ? "rotate(180deg)" : "none"
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this),
                sx: navButtonSx(active || open),
                "aria-haspopup": "true",
                "aria-expanded": open,
                children: topLabel(branch)
            }, void 0, false, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                anchorEl: anchorEl,
                open: open,
                onClose: ()=>setAnchorEl(null),
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                slotProps: {
                    paper: {
                        sx: {
                            mt: 1.25,
                            minWidth: 260,
                            bgcolor: COLORS.surface2,
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
                            borderRadius: 2,
                            py: 0.75,
                            overflow: "hidden",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background: GOLD_GRADIENT
                            }
                        }
                    },
                    list: {
                        sx: {
                            py: 0
                        }
                    }
                },
                children: branch.children.map((child)=>{
                    const childActive = isActiveLeaf(child, pathname);
                    const itemSx = {
                        position: "relative",
                        fontSize: 14,
                        fontWeight: 500,
                        py: 1.25,
                        pl: 2.5,
                        pr: 2,
                        color: childActive ? COLORS.gold : "rgba(255,255,255,0.88)",
                        transition: "color 180ms, background-color 180ms, padding-left 220ms",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "20%",
                            bottom: "20%",
                            width: childActive ? 3 : 0,
                            background: GOLD_GRADIENT,
                            borderRadius: "0 3px 3px 0",
                            transition: "width 200ms ease"
                        },
                        "&:hover": {
                            backgroundColor: "rgba(212,175,55,0.08)",
                            color: "#fff",
                            pl: 3
                        },
                        "&:hover::before": {
                            width: 3
                        }
                    };
                    if (child.external) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            component: "a",
                            href: child.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: ()=>setAnchorEl(null),
                            sx: itemSx,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: child.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        ml: "auto",
                                        fontSize: 14,
                                        color: "rgba(255,255,255,0.45)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, child.href + child.label, true, {
                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                            lineNumber: 207,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        href: child.href,
                        onClick: ()=>setAnchorEl(null),
                        sx: itemSx,
                        children: child.label
                    }, child.href + child.label, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 224,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(DesktopDropdown, "FjMrmJj4LhCHxCWwsrgHxswHU5A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = DesktopDropdown;
function MobileBranchItem({ branch, pathname, onNavigate }) {
    _s2();
    const branchActive = isActiveBranch(branch, pathname);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(branchActive);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>setOpen((o)=>!o),
                sx: {
                    py: 1.75,
                    pl: 2.5,
                    pr: 2,
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "25%",
                        bottom: "25%",
                        width: branchActive ? 3 : 0,
                        background: GOLD_GRADIENT,
                        borderRadius: "0 3px 3px 0"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        primary: topLabel(branch),
                        slotProps: {
                            primary: {
                                sx: {
                                    fontSize: 14,
                                    fontWeight: 700,
                                    letterSpacing: "0.02em",
                                    color: branchActive ? COLORS.gold : "rgba(255,255,255,0.95)"
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ExpandLess$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            color: COLORS.gold
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ExpandMore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            color: "rgba(255,255,255,0.55)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Collapse$2f$Collapse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                in: open,
                timeout: 250,
                unmountOnExit: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        bgcolor: "rgba(255,255,255,0.02)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        component: "div",
                        disablePadding: true,
                        children: branch.children.map((child)=>{
                            const active = isActiveLeaf(child, pathname);
                            const itemSx = {
                                pl: 4.5,
                                pr: 2,
                                py: 1.1,
                                position: "relative",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: 28,
                                    top: "50%",
                                    width: 8,
                                    height: 1,
                                    background: active ? COLORS.gold : "rgba(255,255,255,0.25)",
                                    transform: "translateY(-50%)"
                                }
                            };
                            const textSx = {
                                fontSize: 13,
                                fontWeight: 500,
                                color: active ? COLORS.gold : "rgba(255,255,255,0.78)"
                            };
                            if (child.external) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    component: "a",
                                    href: child.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: onNavigate,
                                    sx: itemSx,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            primary: child.label,
                                            slotProps: {
                                                primary: {
                                                    sx: textSx
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                            lineNumber: 329,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                fontSize: 14,
                                                color: "rgba(255,255,255,0.45)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                            lineNumber: 330,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, child.href + child.label, true, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 320,
                                    columnNumber: 19
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: child.href,
                                onClick: onNavigate,
                                sx: itemSx,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        primary: child.label,
                                        slotProps: {
                                            primary: {
                                                sx: textSx
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 342,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 14,
                                            color: active ? COLORS.gold : "rgba(255,255,255,0.35)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 343,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, child.href + child.label, true, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 335,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    borderColor: "rgba(255,255,255,0.06)"
                }
            }, void 0, false, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(MobileBranchItem, "eM7lzy4pB5T4XeltACfeHFpLMmE=");
_c2 = MobileBranchItem;
function MobileLeafItem({ item, pathname, onNavigate }) {
    const active = isActiveLeaf(item, pathname);
    const label = item.headerLabel ?? item.label;
    const baseSx = {
        py: 1.75,
        pl: 2.5,
        pr: 2,
        position: "relative",
        "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "25%",
            bottom: "25%",
            width: active ? 3 : 0,
            background: GOLD_GRADIENT,
            borderRadius: "0 3px 3px 0"
        }
    };
    const primarySx = {
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: "0.02em",
        color: active ? COLORS.gold : "rgba(255,255,255,0.95)"
    };
    if (item.external) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    component: "a",
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: onNavigate,
                    sx: baseSx,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            primary: label,
                            slotProps: {
                                primary: {
                                    sx: primarySx
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 14,
                                color: "rgba(255,255,255,0.45)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                    lineNumber: 393,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        borderColor: "rgba(255,255,255,0.06)"
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemButton$2f$ListItemButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                href: item.href,
                onClick: onNavigate,
                sx: baseSx,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        primary: label,
                        slotProps: {
                            primary: {
                                sx: primarySx
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            fontSize: 16,
                            color: active ? COLORS.gold : "rgba(255,255,255,0.35)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    borderColor: "rgba(255,255,255,0.06)"
                }
            }, void 0, false, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c3 = MobileLeafItem;
function SiteHeader() {
    _s3();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === "/";
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "SiteHeader.useRef": ()=>setMenuOpen(false)
    }["SiteHeader.useRef"]).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (!isHome) {
                setScrolled(true);
                return;
            }
            function onScroll() {
                setScrolled(window.scrollY > 32);
            }
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        isHome
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            setMenuOpen(false);
        }
    }["SiteHeader.useEffect"], [
        pathname
    ]);
    const transparent = isHome && !scrolled;
    const appBarSx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteHeader.useMemo[appBarSx]": ()=>({
                bgcolor: transparent ? "transparent" : "rgba(10,10,11,0.85)",
                color: "#fff",
                backdropFilter: transparent ? "none" : "blur(14px) saturate(140%)",
                WebkitBackdropFilter: transparent ? "none" : "blur(14px) saturate(140%)",
                borderBottom: transparent ? "1px solid transparent" : "1px solid rgba(255,255,255,0.06)",
                boxShadow: transparent ? "none" : "0 8px 28px rgba(0,0,0,0.45), inset 0 -1px 0 rgba(212,175,55,0.06)",
                transition: "background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease"
            })
    }["SiteHeader.useMemo[appBarSx]"], [
        transparent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$AppBar$2f$AppBar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                position: "fixed",
                elevation: 0,
                sx: appBarSx,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            height: "2px",
                            width: "100%",
                            background: GOLD_GRADIENT,
                            opacity: transparent ? 0 : 0.85,
                            transition: "opacity 300ms"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Toolbar$2f$Toolbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        disableGutters: true,
                        sx: {
                            mx: "auto",
                            width: "100%",
                            maxWidth: 1400,
                            px: {
                                xs: 2,
                                sm: 3
                            },
                            minHeight: {
                                xs: 68,
                                md: 76
                            },
                            gap: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/",
                                sx: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1.25,
                                    textDecoration: "none",
                                    flexShrink: 0,
                                    transition: "transform 200ms ease",
                                    "&:hover": {
                                        transform: "translateY(-1px)"
                                    },
                                    "&:hover .brand-mark-glow": {
                                        opacity: 1
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            position: "relative"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "brand-mark-glow",
                                                "aria-hidden": true,
                                                sx: {
                                                    position: "absolute",
                                                    inset: -4,
                                                    borderRadius: "50%",
                                                    background: "radial-gradient(circle, rgba(212,175,55,0.45) 0%, transparent 70%)",
                                                    opacity: 0,
                                                    transition: "opacity 250ms",
                                                    pointerEvents: "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                lineNumber: 502,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$components$2f$brand$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandMark"], {}, void 0, false, {
                                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                lineNumber: 516,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            display: "flex",
                                            flexDirection: "column",
                                            lineHeight: 1
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                display: "flex",
                                                alignItems: "baseline"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    component: "span",
                                                    sx: {
                                                        fontSize: {
                                                            xs: 16,
                                                            sm: 18
                                                        },
                                                        fontWeight: 800,
                                                        letterSpacing: "-0.01em",
                                                        background: CORAL_GRADIENT,
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        backgroundClip: "text"
                                                    },
                                                    children: "SURESWAR"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    component: "span",
                                                    sx: {
                                                        ml: 0.5,
                                                        fontSize: {
                                                            xs: 16,
                                                            sm: 18
                                                        },
                                                        fontWeight: 700,
                                                        letterSpacing: "-0.01em",
                                                        color: "#fff",
                                                        WebkitTextStroke: `1px ${COLORS.coral}`,
                                                        paintOrder: "stroke fill"
                                                    },
                                                    children: "GROUP"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                component: "nav",
                                "aria-label": "Main",
                                sx: {
                                    display: {
                                        xs: "none",
                                        lg: "flex"
                                    },
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 0.25,
                                    minWidth: 0
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainNav"].map((entry)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBranch"])(entry) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopDropdown, {
                                        branch: entry
                                    }, entry.label, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 579,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopLeaf, {
                                        item: entry
                                    }, entry.href, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 581,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "row",
                                spacing: 1.5,
                                sx: {
                                    display: {
                                        xs: "none",
                                        lg: "flex"
                                    },
                                    alignItems: "center",
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contact"].phoneTel}`,
                                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                width: 28,
                                                height: 28,
                                                borderRadius: "50%",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                bgcolor: "rgba(212,175,55,0.12)",
                                                transition: "background-color 200ms"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: 14,
                                                    color: COLORS.gold
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                lineNumber: 606,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                            lineNumber: 594,
                                            columnNumber: 17
                                        }, this),
                                        sx: {
                                            color: "rgba(255,255,255,0.9)",
                                            fontSize: 13,
                                            fontWeight: 600,
                                            textTransform: "none",
                                            px: 1,
                                            gap: 0.5,
                                            "&:hover": {
                                                color: "#fff",
                                                bgcolor: "transparent",
                                                "& .MuiButton-startIcon > div": {
                                                    bgcolor: "rgba(212,175,55,0.22)"
                                                }
                                            }
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contact"].phoneDisplay
                                    }, void 0, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 591,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                        href: "/contact",
                                        endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                fontSize: 16
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                            lineNumber: 628,
                                            columnNumber: 24
                                        }, this),
                                        sx: {
                                            color: COLORS.surface,
                                            background: GOLD_GRADIENT,
                                            borderRadius: 999,
                                            px: 2.75,
                                            py: 0.85,
                                            fontSize: 12,
                                            fontWeight: 800,
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            boxShadow: "0 4px 14px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.4)",
                                            transition: "transform 200ms ease, box-shadow 200ms ease, filter 200ms ease",
                                            "&:hover": {
                                                transform: "translateY(-2px)",
                                                filter: "brightness(1.05)",
                                                boxShadow: "0 8px 22px rgba(212,175,55,0.5), inset 0 1px 0 rgba(255,255,255,0.5)"
                                            }
                                        },
                                        children: "Enquire"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 625,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                edge: "end",
                                onClick: ()=>setMenuOpen(true),
                                "aria-label": "Open menu",
                                "aria-controls": "mobile-nav-drawer",
                                "aria-expanded": menuOpen,
                                sx: {
                                    color: "#fff",
                                    display: {
                                        xs: "inline-flex",
                                        lg: "none"
                                    },
                                    ml: "auto",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    borderRadius: 1.5,
                                    p: 1,
                                    transition: "all 200ms",
                                    "&:hover": {
                                        borderColor: COLORS.gold,
                                        color: COLORS.gold
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 671,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Drawer$2f$Drawer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "mobile-nav-drawer",
                anchor: "right",
                open: menuOpen,
                onClose: closeMenu,
                slotProps: {
                    paper: {
                        sx: {
                            width: {
                                xs: "88vw",
                                sm: 380
                            },
                            maxWidth: 420,
                            bgcolor: COLORS.surface,
                            backgroundImage: "radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 50%)",
                            color: "#fff",
                            borderLeft: "1px solid rgba(212,175,55,0.15)"
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            height: "2px",
                            background: GOLD_GRADIENT
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 696,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            px: 2.5,
                            py: 2,
                            borderBottom: "1px solid rgba(255,255,255,0.08)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1.25
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$components$2f$brand$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandMark"], {}, void 0, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 709,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: 14,
                                                    fontWeight: 800,
                                                    letterSpacing: "0.02em"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        component: "span",
                                                        sx: {
                                                            color: COLORS.coral
                                                        },
                                                        children: "SURESWAR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        component: "span",
                                                        sx: {
                                                            color: "#fff"
                                                        },
                                                        children: "TRAVELS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                lineNumber: 711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: 9,
                                                    fontWeight: 600,
                                                    letterSpacing: "0.32em",
                                                    color: COLORS.gold,
                                                    mt: 0.25
                                                },
                                                children: "SURESWAR GROUP"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                                lineNumber: 719,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 708,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: closeMenu,
                                "aria-label": "Close menu",
                                sx: {
                                    color: "#fff",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    borderRadius: 1.5,
                                    p: 0.75,
                                    "&:hover": {
                                        borderColor: COLORS.gold,
                                        color: COLORS.gold
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 743,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 732,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 698,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            px: 2.5,
                            py: 2.5,
                            borderBottom: "1px solid rgba(255,255,255,0.08)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contact"].phoneTel}`,
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        width: 32,
                                        height: 32,
                                        borderRadius: "50%",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        bgcolor: "rgba(212,175,55,0.15)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 16,
                                            color: COLORS.gold
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                        lineNumber: 762,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 751,
                                    columnNumber: 15
                                }, this),
                                onClick: closeMenu,
                                sx: {
                                    width: "100%",
                                    color: "rgba(255,255,255,0.95)",
                                    textTransform: "none",
                                    justifyContent: "flex-start",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    px: 1,
                                    py: 1,
                                    gap: 0.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            component: "span",
                                            sx: {
                                                display: "block",
                                                fontSize: 10,
                                                color: "rgba(255,255,255,0.5)",
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase"
                                            },
                                            children: "Talk to us"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                            lineNumber: 779,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            component: "span",
                                            sx: {
                                                display: "block",
                                                fontSize: 14
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contact"].phoneDisplay
                                        }, void 0, false, {
                                            fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                            lineNumber: 782,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 778,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/contact",
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 790,
                                    columnNumber: 22
                                }, this),
                                onClick: closeMenu,
                                fullWidth: true,
                                sx: {
                                    mt: 2,
                                    color: COLORS.surface,
                                    background: GOLD_GRADIENT,
                                    borderRadius: 999,
                                    py: 1.4,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    boxShadow: "0 4px 14px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.4)",
                                    "&:hover": {
                                        filter: "brightness(1.05)"
                                    }
                                },
                                children: "Enquire Now"
                            }, void 0, false, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 787,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 747,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            px: 2.5,
                            pt: 2.5,
                            pb: 1,
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.24em",
                            color: "rgba(255,255,255,0.45)",
                            textTransform: "uppercase"
                        },
                        children: "Navigate"
                    }, void 0, false, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        component: "nav",
                        "aria-label": "Mobile",
                        sx: {
                            py: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    borderColor: "rgba(255,255,255,0.06)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 827,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainNav"].map((entry)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$sureswar$2d$group$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBranch"])(entry) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileBranchItem, {
                                    branch: entry,
                                    pathname: pathname,
                                    onNavigate: closeMenu
                                }, entry.label, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 830,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileLeafItem, {
                                    item: entry,
                                    pathname: pathname,
                                    onNavigate: closeMenu
                                }, entry.href, false, {
                                    fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                    lineNumber: 837,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    py: 3
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                                lineNumber: 845,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                        lineNumber: 826,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/sureswar-group/components/site-header.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(SiteHeader, "M8+j3TRYyJSC368dM4K9gj288Qs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c4 = SiteHeader;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DesktopLeaf");
__turbopack_context__.k.register(_c1, "DesktopDropdown");
__turbopack_context__.k.register(_c2, "MobileBranchItem");
__turbopack_context__.k.register(_c3, "MobileLeafItem");
__turbopack_context__.k.register(_c4, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_sureswar-group_0.qzkuh._.js.map