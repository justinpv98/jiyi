import React, { FormEvent, Fragment, MouseEventHandler } from "react";
import axios from "axios";
import * as styled from "./Register.styles";
import { useState } from "react";

// Steps
import Topics from "./Steps/Topics/Topics";
import Languages from "./Steps/Languages/Languages";
import Goals from "./Steps/Goals/Goals";
import CreateProfile from "./Steps/CreateProfile/CreateProfile";

// UI Components
import Icon from "@/features/ui/Icon/Icon";
import Button from "@/features/ui/Button/Button";
import ProgressBar from "@/features/ui/ProgressBar/ProgressBar";

// possible shape of the Data
export type Data = {
  topic?: string;
  language?: string;
  goal?: string;
  email?: string;
  password?: string;
};

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

  const onSubmitStep = (data: Data) => {
    // Update the form data with the data from the step
    setFormData({ ...formData, ...data });

    // Determine the next step based on the current step and the data that was submitted
    const nextStep = data.topic !== "languages" && step === 0 ? 2 : 1;
    goNextStep(nextStep);
  };

  const onSubmitForm = async (data: Data) => {
    // Submit merged form data and await response
    const requestData = { ...formData, ...data };
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      requestData
    );

    console.log(response);
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
