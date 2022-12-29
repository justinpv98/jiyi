import React from "react";
import { styled } from "@/stitches.config";

const Button = styled("button", {
  display: "inline-flex",
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
    },
  },
});

export default Button;
