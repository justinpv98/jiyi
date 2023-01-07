import React from "react";
import * as styled from "./LoginModal.styles";
import { useForm } from "react-hook-form";
import { LoginData } from "@/types/auth/auth";

import useAuth from "@/hooks/useAuth/useAuth";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "@/features/ui/Button/Button";
import Icon from "@/features/ui/Icon/Icon";
import { Input, InputContainer, Label } from "@/features/ui/Form/Input/Input";

export default function LoginModal() {
  const { login } = useAuth();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    login(data);
    console.log();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          color="tertiary"
          size="lg"
          css={{ height: "48px", fontSize: "1rem" }}
        >
          Log In
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <styled.Overlay />
        <styled.Content>
          <styled.Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <styled.Title>Log In</styled.Title>
              <styled.Description>
                New to Jiyi? We'll help you sign up!
              </styled.Description>
            </div>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                {...register("email")}
                required
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                {...register("password")}
                placeholder="Password"
                required
              />
            </InputContainer>
            <div
              style={{
                display: "flex",
                marginTop: "2rem",
              }}
            >
              <Button color="primaryGradient" css={{ width: "100%" }}>
                Log In
              </Button>
            </div>
            <Dialog.Close asChild>
              <Button
                icon={true}
                aria-label="Close"
                css={{ position: "absolute", top: "10px", right: "10px" }}
              >
                <Icon icon="x-mark" />
              </Button>
            </Dialog.Close>
          </styled.Form>
        </styled.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
