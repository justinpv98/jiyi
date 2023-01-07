import React from "react";
import * as styled from "../../Register.styles";
import { RegisterData } from "@/types/auth/auth";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { Input, InputContainer, Label } from "@/features/ui/Form/Input/Input";
import Button from "@/features/ui/Button/Button";


type Props = {
  goNextStep?(): void;
  goPreviousStep?(): void;
  onSubmitForm(data: RegisterData): Promise<void>;
};

export default function CreateProfile({ onSubmitForm }: Props) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  return (
    <styled.CreateProfileContainer onSubmit={handleSubmit(onSubmitForm)}>
      <styled.QuestionContainer>
        <h1>Create Account</h1>
        <p>
          Almost there! Just enter your email and password for your account!
        </p>
      </styled.QuestionContainer>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} placeholder="Email" required />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password</Label>
        <Input id="password" {...register("password")} placeholder="Password" required />
      </InputContainer>
      <div
        style={{
          display: "flex",
          marginTop: "2rem",
        }}
      >
        <Button color="primaryGradient" css={{ width: "100%" }}>
          Sign Up
        </Button>
      </div>
    </styled.CreateProfileContainer>
  );
}
