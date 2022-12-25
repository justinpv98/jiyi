import { createStitches } from '@stitches/react';
import type { PropertyValue } from "@stitches/react";
import * as tokens from "./constants/tokens";

export const {
    styled,
    css,
    globalCss,
    theme,
    createTheme,
  } = createStitches({
    theme: {
      colors: {
       ...tokens.colors,
      },
      sizes: tokens.sizes,
      space: tokens.spaces,
      radii: tokens.radii,
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
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0
    },
    "html": {
      "-webkit-font-smoothing": "antialiased",
      textRendering: "optimizeLegibility",
      textSizeAdjust: "100%",
      fontFamily: "Nunito, sans-serif"
    },
    "@font-face": [
      {
        fontFamily: "Nunito",
        fontWeight: 400,
        fontDisplay: "fallback",
        src: "url(./assets/fonts/Nunito-Regular.ttf)",
      },
      {
        fontFamily: "Nunito",
        fontWeight: 400,
        fontDisplay: "fallback",
        fontStyle: "italic",
        src: "url(./assets/fonts/Nunito-Italic.ttf)",
      },
      {
        fontFamily: "Nunito",
        fontWeight: 600,
        fontDisplay: "fallback",
        src: "url(./assets/fonts/Nunito-Medium.ttf)",
      },
      {
        fontFamily: "Nunito",
        fontWeight: 700,
        fontDisplay: "fallback",
        src: "url(./assets/fonts/Nunito-Bold.ttf)",
      },
      {
        fontFamily: "Nunito",
        fontWeight: 700,
        fontDisplay: "fallback",
        fontStyle: "italic",
        src: "url(./assets/fonts/Nunito-BoldItalic.ttf)",
      }]
  })