import { createStitches } from "@stitches/react";
import type { PropertyValue } from "@stitches/react";
import * as tokens from "./constants/tokens";

export const { styled, css, globalCss, theme, createTheme } = createStitches({
  theme: {
    colors: {
      ...tokens.theme,
      ...tokens.colors,
    },
    sizes: tokens.sizes,
    space: tokens.spaces,
    radii: tokens.radii,
    fonts: {
      nunito: "Nunito, sans-serif",
    },
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    lineHeights: tokens.lineHeights,
    transitions: {
      allFast: "all $fast $inOut",
      fast: "0.2s",
      normal: "0.3s",
      inOut: "cubic-bezier(.4, 0, .2, 1)",
    },
    borderStyles: {},
    borderWidths: {},
    letterSpacings: {},
    zIndices: tokens.zIndices
  },
  media: {
    sm: `(min-width: ${tokens.breakpoints.sm})`,
    md: `(min-width: ${tokens.breakpoints.md})`,
    lg: `(min-width: ${tokens.breakpoints.lg})`,
    motion: "(prefers-reduced-motion)",
  },
  utils: {
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    size: (value: PropertyValue<"width" | "height">) => ({
      width: value,
      height: value,
    }),
  },
});

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Nunito",
      fontWeight: 400,
      src: "url('assets/fonts/Nunito-Regular.ttf')",
    },
    {
      fontFamily: "Nunito",
      fontWeight: 400,
      fontStyle: "italic",
      src: "url('assets/fonts/Nunito-Italic.ttf')",
    },
    {
      fontFamily: "Nunito",
      fontWeight: 600,
      src: "url('assets/fonts/Nunito-Medium.ttf')",
    },
    {
      fontFamily: "Nunito",
      fontWeight: 700,
      src: "url('assets/fonts/Nunito-Bold.ttf')",
    },
    {
      fontFamily: "Nunito",
      fontWeight: 700,
      fontDisplay: "fallback",
      fontStyle: "italic",
      src: "url('assets/fonts/Nunito-BoldItalic.ttf)",
    },
  ],
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  html: {
    "-webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    textSizeAdjust: "100%",
    color: "$onBackground",
    "-webkit-tap-highlight-color": "transparent"
  },
  body: {
    fontFamily: "$nunito",
  },
  a: {
    color: "$primary",
  },
  ".sr-only": {
    border: "0 !important",
    clip: "rect(1px, 1px, 1px, 1px) !important" /* 1 */,
    webkitClipPath: "inset(50%) !important",
    clipPath: "inset(50%) !important" /* 2 */,
    height: "1px !important",
    margin: "-1px !important",
    overflow: "hidden !important",
    padding: "0 !important",
    position: "absolute !important",
    width: "1px !important",
    whiteSpace: "nowrap !important",
  },
});
