import { styled } from "@/stitches.config";
import { keyframes } from "@stitches/react";
import Card from "@/features/ui/Card/Card";

const bob = keyframes({
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

export const Hero = styled("div", {
  position: "relative",
  background: "linear-gradient(180deg, #FFFFFF 0%, #EFF6FC 100%);",
  overflow: "hidden",

  "@lg": {
    overflow: "visible",
  },
});

export const HeroContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  margin: "0 auto",
  padding: "6rem 1.5rem 0 1.5rem",

  "@lg": {
    flexDirection: "row",
    padding: "0 1.25rem 0",
    maxWidth: "72.5rem",
  },
});

export const HeroSection = styled("div", {
  position: "relative",

  "& > a": {
    justifyContent: "center",
    fontSize: "$112",
    height: "60px",
    width: "220px",
  },

  "&:first-of-type": {
    flexBasis: "60%",
    paddingTop: "$400",
    zIndex: 2,
  },

  "@sm": {
    overflow: "visible",
  },
});

export const HeroHeading = styled("h1", {
  fontSize: "$200",
  lineHeight: "$125",

  "@sm": {
    maxWidth: "17ch",
    fontSize: "$300",
  },
});

export const HeroCopy = styled("p", {
  maxWidth: "40ch",
  margin: "$150 0 $200 0",
  fontSize: "$125",
  lineHeight: "$150",
});

export const ImageContainer = styled("div", {
  position: "relative",
  bottom: "-4rem",
  right: "-1.5rem",
  zIndex: "1",
});

export const Floater = styled("div", {
  position: "absolute",
  bottom: "5rem",
  left: "5rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "$050",
  background: "$background",
  fontSize: "$075",
  fontWeight: "$bold",
  borderRadius: "$round",
  zIndex: "500",
  padding: "$050 $100 $050 $100",
  transform: "translateY(0)",
  animation: `${bob} 8s 4s ease-in-out infinite`,

  "@reduced-motion": {
    animation: "none",
  },

  "& span": {
    fontSize: "$125",
    lineHeight: "$150",
  },

  "@lg": {
    left: "unset",
  },
});

export const CircleFloater = styled(Floater, {
  display: "flex",
  justifyContent: "center",
  width: "7.5rem",
  aspectRatio: "1",
  bottom: "10rem",
  left: "initial",
  right: "5rem",
  animation: `${bob} 8s 4s ease-in-out 0s infinite backwards`,

  "& > img": {
    position: "absolute",
    left: "1.25rem",
    top: "-1.25rem",
    transform: "rotate(15deg)",
  },

  "& > p": {
    position: "absolute",
    left: "1.25rem",
    textAlign: "center",
    maxWidth: "10ch",
    lineHeight: "$100",
    transform: "rotate(15deg)",
    bottom: "2.5rem"
  },

  "@md": {
    right: "3rem",
  },
});

export const BackgroundCircle = styled("div", {
  position: "absolute",
  top: "-80px",
  left: "-116px",
  width: "1024px",
  aspectRatio: "1",
  borderRadius: "$round",
  background:
    "linear-gradient(225.7deg, rgba(224, 237, 248, 0.137297) 27.27%, #B8DEFC 98.81%)",
});

export const Section = styled("section", {
  position: "relative",
  zIndex: "1",
  py: "$400",
});

export const SectionTitle = styled("h3", {
  marginBottom: "$250",
  fontSize: "$175",
  textAlign: "center",
});

export const CardSection = styled(Section, {
  background: "$neutralGradient",
});

export const SectionContainer = styled("div", {
  maxWidth: "72.5em",
  margin: "0 auto",
  px: "$150",

  "@md": {
    px: "$125",
  },
});

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "$200",
  marginBottom: "$400",

  [`& ${Card}`]: {
    flexBasis: "clamp(30%, 28vw, 31.42%)",
    py: "$300",
    px: "$250",

    "@media(min-width: 868px)": {
      minHeight: "15.75rem",
    },
  },

  "@media(min-width: 868px)": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const CardHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$200",
  paddingLeft: "$500",
  marginBottom: "$200",
  fontSize: "$112",

  "& img": {
    position: "absolute",
    left: "1.375rem",
    width: "6.25rem",
    height: "6.25rem",
  },
});

export const CardTitle = styled("h3", {
  marginLeft: "$350",
  fontSize: "$200",
});

export const CardBody = styled("p", {
  lineHeight: "$150",
});

export const FeaturesContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.5rem",

  "@lg": {
    flexWrap: "nowrap",
    gap: "0"
  },
});

export const FeatureSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  order: "1",

  "@lg": {
    gap: "0",
    justifyContent: "space-evenly",
    maxWidth: "15rem",
    margin: "0 auto",
  },
});

export const FeaturesHeading = styled("h3", {
  marginBottom: ".5rem",
});

export const FeaturesImageContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  order: "0",

  "@lg": {
    minHeight: "20rem",
    order: "1",
    maxWidth: "clamp(400px, 2vw, 600px)",
  },
});

export const FeaturesImage = styled("img", {
  display: "flex",
  justifyContent: "center",
  maxWidth: "100%",

  "@lg": {
    width: "100%",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

export const BottomCTASection = styled("div", {
  textAlign: "center",
  paddingTop: "$400",
  paddingBottom: "$500",
  px: "$150",
  background: "$neutral100",

  "& > a": {
    justifyContent: "center",
    fontSize: "$112",
    height: "60px",
    width: "220px",
  },
});

export const FooterHeading = styled("h2", {
  fontSize: "$200",
  marginBottom: "$200",
});
