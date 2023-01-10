import React, { useState } from "react";
import * as styled from "../../Register.styles";

import { useForm } from "react-hook-form";

import { RegisterData } from "@/types/auth/auth";
import { TOPICS } from "@/constants/profile";

type Props = {
  onSubmitStep(data: RegisterData): void;
};

export default function Topic({ onSubmitStep }: Props) {
  const [disabled, setDisabled] = useState(true);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  function onChange() {
    setDisabled(false);
  }

  return (
    <styled.StepContainer onSubmit={handleSubmit(onSubmitStep)}>
      <styled.QuestionContainer>
        <h1>What would you like to study?</h1>
        <p>
          Choose the topic that interests you. Don’t worry, you can add more
          topics later.
        </p>
      </styled.QuestionContainer>

      <styled.OptionsContainer>
        {TOPICS.map((topic) => {
          return (
            <styled.Option className="radio-wrapper" key={topic.value}>
              <styled.HiddenInput
                type="radio"
                id={topic.value}
                tabIndex={1}
                {...register("topic")}
                value={topic.value}
                onChange={onChange}
              />
              <styled.Label htmlFor={topic.value}>
                <styled.Symbol>{topic.symbol}</styled.Symbol>{" "}
                <span>{topic.name}</span>
              </styled.Label>
            </styled.Option>
          );
        })}
      </styled.OptionsContainer>
      <styled.ContinueButton color={disabled ? "disabled" : "primaryGradient"}>
        Continue
      </styled.ContinueButton>
    </styled.StepContainer>
  );
}
