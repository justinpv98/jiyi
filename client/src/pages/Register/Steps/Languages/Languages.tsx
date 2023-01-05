import React, {useState} from "react";
import * as styled from "../../Register.styles";
import { useForm } from "react-hook-form";
import Flag from "@/features/ui/Flag/Flag";
import { Data } from "../../Register";
import { LANGUAGES } from "@/constants/profile";

type Props = {
  onSubmitStep(data: Data): void;
};

export default function Languages({ onSubmitStep }: Props) {
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
        <h1>What language would you like to study?</h1>
        <p>
          Choose the subject that interests you. Don’t worry, you can add more
          languages later.
        </p>
      </styled.QuestionContainer>
      <styled.LanguagesOptionsContainer>
        {LANGUAGES.map((language) => {
          return (
            <styled.Option className="radio-wrapper" key={language.value}>
              <styled.HiddenInput
                type="radio"
                id={language.value}
                {...register("language")}
                value={language.value}
                onChange={onChange}
              />
              <styled.LanguageLabel htmlFor={language.value}>
                <styled.FlagContainer>
                  <Flag country={language.flag} />
                </styled.FlagContainer>
                <span style={{ marginBottom: ".375rem" }}>{language.name}</span>
              </styled.LanguageLabel>
            </styled.Option>
          );
        })}
      </styled.LanguagesOptionsContainer>
      <styled.ContinueButton color={disabled ? "disabled" : "primaryGradient"}  disabled={disabled}>Continue</styled.ContinueButton>
    </styled.StepContainer>
  );
}
