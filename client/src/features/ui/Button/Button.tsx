import React from "react";
import { styled } from "@/stitches.config";

const Button = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$025",
  cursor: "pointer",

  height: "$275",
  padding: "$050 $100",
  borderRadius: "$050",
  border: "none",

  background: "$primary",
  color: "$white",
  textDecoration: "none",

  fontFamily: "inherit",
  fontSize: "$100",
  fontWeight: "$bold",
  userSelect: "none",

  "&:disabled": {
    cursor: "initial"
  },

  variants: {
    color: {
      primary: {
        background: "$primary",
        color: "$onPrimary",
      },
      primaryGradient: {
        background: "$blueGradient",
        color: "$onPrimary",
        boxShadow: "0px 4px 8px rgba(37, 103, 230, 0.25)",
      },
      secondary: {
        background: "$secondary",
        color: "$onSecondary",
      },
      tertiary: {
        background: "transparent",
        color: "$onSecondary",
      },
      accent: {
        background: "$accent",
        color: "$onAccent",
      },
      disabled: {
        background: "$disabled",
        color: "$onDisabled"
      },
      successPrimary: {
        background: "$success",
        color: "$onSuccess"
      },
      errorPrimary: {
        background: "$error",
        color: "$onError"
      }
    },
    size: {
      lg: {
        fontSize: "$112",
      },
    },
    icon: {
      true: {
        background: "transparent",
        padding: ".625rem",
        minWidth: "44px",
        minHeight: "44px",
        color: "$onBackground",

        "&:disabled": {
          color: "$onDisabled",
          backgroundColor: "transparent"
        },
      }
    }
  },
});

export default Button;
