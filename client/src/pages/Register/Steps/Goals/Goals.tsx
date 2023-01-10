import React, {useState} from "react";
import * as styled from "../../Register.styles";
import { RegisterData } from "@/types/auth/auth";
import { useForm } from "react-hook-form";

import { GOALS } from "@/constants/profile";

type Props = {
  onSubmitStep(data: RegisterData): void;
};

export default function Goals({ onSubmitStep }: Props) {
  const [disabled, setDisabled] = useState(true)

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  function onChange(){
    setDisabled(false)

  }

  return (
    <styled.StepContainer onSubmit={handleSubmit(onSubmitStep)}>
      <styled.QuestionContainer>
        <h1>What are your study goals?</h1>
        <p>Choose a goal to help you stay motivated!</p>
      </styled.QuestionContainer>

      <styled.OptionsContainer>
        {GOALS.map((goal) => {
          return (
            <styled.Option className="radio-wrapper" key={goal.name}>
              <styled.HiddenInput
                type="radio"
                id={goal.name}
                {...register("goal")}
                value={goal.value}
                onChange={onChange}
                required
              />
              <styled.GoalLabel htmlFor={goal.name}>
                <span>{goal.name}</span>
                <span style={{fontWeight: "400"}}>{goal.numOfCards} cards / day</span>
              </styled.GoalLabel>
            </styled.Option>
          );
        })}
      </styled.OptionsContainer>
      <styled.ContinueButton color={disabled ? "disabled" : "primaryGradient"} disabled={disabled}>Continue</styled.ContinueButton>
    </styled.StepContainer>
  );
}
