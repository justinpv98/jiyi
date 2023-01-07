import { styled } from "@/stitches.config";
import Button from "../Button/Button";

export const Header = styled("header", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "absolute",
  top: "$200",
  zIndex: "$header",

  variants: {
    floating: {
      true: {
        position: "fixed",
        top: "0",
        background: "$background",
        boxShadow: "0px 8px 16px rgba(37, 103, 230, 0.15)",
      },
    },
  },
});

export const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "72.5rem",
  margin: "0 auto",
  padding: "$075 $150",

  "@md": {
    padding: "$075 $125",
  },
});

export const LogoLink = styled("a", {
  display: "inline-block",
  marginTop: "$025",
});

export const ButtonContainer = styled("div", {
  display: "inline-flex",
  gap: "$050",

  [`& ${Button}`]: {
    height: "$300",
  },
});
