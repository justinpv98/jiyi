import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as styled from "./LoginModal.styles";
import Button from "@/features/ui/Button/Button";
import Icon from "@/features/ui/Icon/Icon";
import { Input, InputContainer, Label } from "@/features/ui/Form/Input/Input";

export default function LoginModal() {
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
          <styled.ContentContainer>
            <div>
              <styled.Title>Log In</styled.Title>
              <styled.Description>
                New to Jiyi? We'll help you sign up!
              </styled.Description>
            </div>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" required/>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" required />
            </InputContainer>
            <div
              style={{
                display: "flex",
                marginTop: "2rem",
              }}
            >
              <Dialog.Close asChild>
                <Button color="primaryGradient" css={{ width: "100%" }}>
                  Log In
                </Button>
              </Dialog.Close>
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
          </styled.ContentContainer>
        </styled.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
