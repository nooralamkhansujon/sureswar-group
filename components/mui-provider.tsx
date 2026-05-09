"use client";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useMemo } from "react";

const brand = {
  700: "#0f3d3e",
  600: "#155f61",
  500: "#1a7a7d",
  100: "#e6f4f4",
};

/**
 * Wraps children with the MUI ThemeProvider and a non-destructive CssBaseline.
 *
 * Design decisions:
 * - palette.mode is "light" because the site's content areas (forms, cards, etc.)
 *   are light-coloured. The dark header/footer are custom-styled with Tailwind and
 *   don't use MUI components, so they are unaffected.
 * - CssBaseline does NOT set background/color on body — globals.css owns those.
 * - OutlinedInput gets an explicit white (#fff) fill so labels and borders are
 *   visible regardless of the page background colour behind them.
 */
export function MuiProvider({ children }: { children: React.ReactNode }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: {
            main: brand[600],
            dark: brand[700],
            light: brand[500],
            contrastText: "#ffffff",
          },
          background: {
            default: "transparent",
            paper: "#ffffff",
          },
        },
        typography: {
          fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
        },
        shape: {
          borderRadius: 10,
        },
        components: {
          // Minimal baseline — only fixes box-sizing, leaves body bg/color alone
          MuiCssBaseline: {
            styleOverrides: `
              *, *::before, *::after { box-sizing: border-box; }
            `,
          },
          MuiTextField: {
            defaultProps: {
              variant: "outlined",
              size: "medium",
            },
          },
          // White background for input fields so they read clearly on any page bg
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: 10,
                backgroundColor: "#ffffff",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: brand[500],
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: brand[600],
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: ({ ownerState }: { ownerState: { variant?: string; color?: string } }) => ({
                ...(ownerState.variant === "contained" && ownerState.color === "primary" && {
                  backgroundImage: `linear-gradient(135deg, ${brand[600]}, ${brand[700]})`,
                  "&:hover": {
                    backgroundImage: `linear-gradient(135deg, ${brand[500]}, ${brand[600]})`,
                  },
                }),
              }),
            },
          },
          // Alert uses brand colour for success outline
          MuiAlert: {
            styleOverrides: {
              root: ({ ownerState }: { ownerState: { severity?: string; variant?: string } }) => ({
                ...(ownerState.severity === "success" && ownerState.variant === "outlined" && {
                  borderColor: brand[500],
                  color: brand[700],
                  backgroundColor: brand[100],
                }),
              }),
            },
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      {/* disableGutters prevents CssBaseline from touching body margin/padding */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
