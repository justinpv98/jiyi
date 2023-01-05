import React from "react";
import * as styled from "./ProgressBar.styles";

type Props = {
  stepsComplete: number;
  totalSteps: number;
};

export default function ProgressBar({ stepsComplete, totalSteps }: Props) {
  const progress = (stepsComplete / totalSteps) * 100;

  return (
    <styled.Root value={progress}>
      <styled.Indicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </styled.Root>
  );
}
