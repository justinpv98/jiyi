import React, { Fragment, useState } from "react";
import * as styled from "./Register.styles";
import { RegisterData } from "@/types/auth/auth";

import useAuth from "@/hooks/useAuth/useAuth";


// Steps
import Topics from "./Steps/Topics/Topics";
import Languages from "./Steps/Languages/Languages";
import Goals from "./Steps/Goals/Goals";
import CreateProfile from "./Steps/CreateProfile/CreateProfile";

// UI Components
import Icon from "@/features/ui/Icon/Icon";
import Button from "@/features/ui/Button/Button";
import ProgressBar from "@/features/ui/ProgressBar/ProgressBar";

export default function Register() {
  // Use the useState hook to store the current step of the form
  // The final step is the fourth one (index 3)
  const [step, setStep] = useState(0);
  const FINAL_STEP = 3;

  const [formData, setFormData] = useState({
    topic: "",
    language: "",
    goal: "",
    email: "",
    password: "",
  });

  const { register } = useAuth();

  function goPreviousStep(n = 1) {
    // If the topic isn't languages, skip over step 2 (index 1).
    // Else if the current step is not the first one, go back to the previous step
    if (formData.topic !== "languages" && step == 2) {
      setStep(step - 2);
    } else if (step > 0) {
      setStep(step - n);
    }
  }

  function goNextStep(n = 1) {
    // If the next step is not the final one, go to the next step
    if (n !== FINAL_STEP) {
      setStep(step + n);
    }
  }

  const onSubmitStep = (data: RegisterData) => {
    // Update the form data with the data from the step
    setFormData({ ...formData, ...data });

    // Determine the next step based on the current step and the data that was submitted
    const nextStep = data.topic !== "languages" && step === 0 ? 2 : 1;
    goNextStep(nextStep);
  };

  const onSubmitForm = async (data: RegisterData) => {
    // Submit merged form data and await response
    const requestData = { ...formData, ...data };

    register(requestData);
  };

  function renderStep() {
    // Renders component based on step.
    switch (step) {
      case 0:
        return <Topics onSubmitStep={onSubmitStep} />;
      case 1:
        return <Languages onSubmitStep={onSubmitStep} />;
      case 2:
        return <Goals onSubmitStep={onSubmitStep} />;
      case 3:
        return <CreateProfile onSubmitForm={onSubmitForm} />;
      default:
        return null;
    }
  }

  return (
    <Fragment>
      <styled.ProgressContainer>
        <Button
          icon="true"
          disabled={step === 0}
          onClick={() => goPreviousStep()}
        >
          <Icon icon="arrow-left" />
        </Button>
        <ProgressBar stepsComplete={step} totalSteps={FINAL_STEP} />
      </styled.ProgressContainer>
      {renderStep()}
    </Fragment>
  );
}
