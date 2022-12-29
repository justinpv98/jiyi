import React from "react";
import { styled } from "@/stitches.config";

const Card = styled("article", {
  display: "inline-flex",
  alignItems: "center",
  position: "relative",

  background: "$background",
  boxShadow: "0px 8px 16px rgba(28, 31, 53, 0.25);",
  borderRadius: "$050",
  padding: "$150",

  variants: {
    direction: {
      horizontal: {
        flexDirection: "horizontal",
      },
      vertical: {
        flexDirection: "column",
      },
    },
  },
});

export default Card;
