import { keyframes } from "@stitches/react";
import { styled } from "@/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  "0%": {
    transform: "translateZ(1px)",
  },
  "50%": {
    transform: "translate3d(0,10px,1px)",
  },
  "100%": {
    transform: "translateZ(1px)",
  },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -48%) scale(0.96)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0, 0, 0, 0.2)",
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  position: "fixed",
  inset: 0,
  zIndex: "$overlay",
});

export const Content = styled(Dialog.Content, {
  background: "$neutralGradient",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100%",
  padding: "$150",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: "$onOverlay",

  "&::focus": {
    outline: "none",
  },
});

export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "$150 $100",
  margin: "0 auto",
  maxWidth: "416px",
});

export const Title = styled(Dialog.Title, {
  margin: 0,
  fontWeight: "$bold",
  color: "$onBackground",
  fontSize: "$150",
});

export const Description = styled(Dialog.Description, {
  margin: "10px 0 $200",
  color: "$neutral800",
  fontsize: "15px",
  lineHeight: "$150",
});
