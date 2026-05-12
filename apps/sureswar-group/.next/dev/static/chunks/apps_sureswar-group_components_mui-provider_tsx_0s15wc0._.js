(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/sureswar-group/components/mui-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MuiProvider",
    ()=>MuiProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.mjs [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/ThemeProvider.mjs [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.mjs [app-client] (ecmascript) <export default as CssBaseline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.mjs [app-client] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const brand = {
    700: "#0f3d3e",
    600: "#155f61",
    500: "#1a7a7d",
    100: "#e6f4f4"
};
function MuiProvider({ children }) {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MuiProvider.useMemo[theme]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
                palette: {
                    mode: "light",
                    primary: {
                        main: brand[600],
                        dark: brand[700],
                        light: brand[500],
                        contrastText: "#ffffff"
                    },
                    background: {
                        default: "transparent",
                        paper: "#ffffff"
                    }
                },
                typography: {
                    fontFamily: "var(--font-geist-sans), system-ui, -apple-system, sans-serif"
                },
                shape: {
                    borderRadius: 10
                },
                components: {
                    // Minimal baseline — only fixes box-sizing, leaves body bg/color alone
                    MuiCssBaseline: {
                        styleOverrides: `
              *, *::before, *::after { box-sizing: border-box; }
            `
                    },
                    MuiTextField: {
                        defaultProps: {
                            variant: "outlined",
                            size: "medium"
                        }
                    },
                    // White background for input fields so they read clearly on any page bg
                    MuiOutlinedInput: {
                        styleOverrides: {
                            root: {
                                borderRadius: 10,
                                backgroundColor: "#ffffff",
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: brand[500]
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: brand[600]
                                }
                            }
                        }
                    },
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                "MuiProvider.useMemo[theme]": ({ ownerState })=>({
                                        ...ownerState.variant === "contained" && ownerState.color === "primary" && {
                                            backgroundImage: `linear-gradient(135deg, ${brand[600]}, ${brand[700]})`,
                                            "&:hover": {
                                                backgroundImage: `linear-gradient(135deg, ${brand[500]}, ${brand[600]})`
                                            }
                                        }
                                    })
                            }["MuiProvider.useMemo[theme]"]
                        }
                    },
                    // Alert uses brand colour for success outline
                    MuiAlert: {
                        styleOverrides: {
                            root: {
                                "MuiProvider.useMemo[theme]": ({ ownerState })=>({
                                        ...ownerState.severity === "success" && ownerState.variant === "outlined" && {
                                            borderColor: brand[500],
                                            color: brand[700],
                                            backgroundColor: brand[100]
                                        }
                                    })
                            }["MuiProvider.useMemo[theme]"]
                        }
                    }
                }
            })
    }["MuiProvider.useMemo[theme]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {}, void 0, false, {
                    fileName: "[project]/apps/sureswar-group/components/mui-provider.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/apps/sureswar-group/components/mui-provider.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/sureswar-group/components/mui-provider.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(MuiProvider, "TF0AHbRu8DO10P/SWtT0KIxHEhc=");
_c = MuiProvider;
var _c;
__turbopack_context__.k.register(_c, "MuiProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_sureswar-group_components_mui-provider_tsx_0s15wc0._.js.map