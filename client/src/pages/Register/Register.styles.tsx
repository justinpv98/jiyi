import { styled } from "@/stitches.config";
import Button from "@/features/ui/Button/Button";

export const ProgressContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  maxWidth: "1140px",
  padding: "24px",
  margin: "0 auto",

  "@md": {
    padding: "24px 20px",
  },
});

export const StepContainer = styled("form", {
  maxWidth: "1140px",
  padding: "0 24px 24px 24px",
  margin: "0 auto",

  "@md": {
    padding: "0 20px 24px 20px",
  },
});

export const CreateProfileContainer = styled(StepContainer, {
  flexDirection: "column",
  maxWidth: "360px",
});

export const QuestionContainer = styled("div", {
  marginBottom: "$150"
})

export const OptionsContainer = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: "$150",

  "@md": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export const LanguagesOptionsContainer = styled(OptionsContainer, {
  "@md": {
    gridTemplateColumns: "repeat(4, 1fr)",
  }
})

export const Option = styled("li", {
  position: "relative",
});

export const Label = styled("label", {
  display: "block",
  width: "100%",
  padding: "$075",
  background: "$background",
  border: "1px solid $neutral100",
  borderRadius: "$round",
  boxShadow: "0px 4px 8px rgba(3, 105, 161, 0.2)",
  fontWeight: "$bold",
  cursor: "pointer",

  "@md": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "$050",
  },
});

export const LanguageLabel = styled(Label, {
  display: "flex",
  alignItems: "center",
  gap: "$075",
  padding: "12px 6px 2px 12px",

  "@md": {
    gap: "$050"
  },

})

export const GoalLabel = styled(Label, {
  display: "flex", justifyContent: "space-between", padding: "12px 2rem "
})

export const Symbol = styled("span", {
  marginBottom: "$075",
  marginRight: "$025",

  "@md": {
    fontSize: "$400",
    marginRight: "0",
  },
});

export const FlagContainer = styled("span", {
  "& > svg": {
    height: "$200",
    width: "$200",

    "@md": {
      height: "5rem",
      width: "5rem",
    },
  },
});

export const HiddenInput = styled("input", {
  position: "absolute",
  opacity: "0",
  "&:checked + label": {
    color: "$primary",
    border: "1px solid $primary",
    background: "$blue50",
    boxShadow: "0px 2px 4px rgba(3, 105, 161, 0.3)",
  },
});

export const ContinueButton = styled(Button, {
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "$150",
  width: "calc(100vw - $300)",
  maxWidth: "70rem",

  "@mq": {
    position: "static",
  },
});
