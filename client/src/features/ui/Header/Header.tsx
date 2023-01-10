import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as styled from "./Header.styles";

import { useScrollPositionY } from "@/hooks/useScroll/useScrollPosition";

import { ReactComponent as Logo } from "@/assets/logo.svg";
import Button from "@/features/ui/Button/Button";
import LoginModal from "@/features/auth/LoginModal";

export default function Header() {
  const scrollPosition = useScrollPositionY();

  useEffect(() => {}, [scrollPosition]);

  const isFloating = scrollPosition > 116 - 56 - 32;
  const isMainCTA = scrollPosition > 600 && scrollPosition < 1200;

  return (
    <styled.Header floating={isFloating}>
      <styled.Nav>
        <styled.LogoLink href="/">
          <span className="sr-only">Jiyi Home</span>
          <Logo />
        </styled.LogoLink>
        <styled.ButtonContainer>
          <LoginModal />
          {/* @ts-ignore */}
          <Button
            color={isMainCTA ? "primary" : "secondary"}
            as={Link}
            to="/register"
          >
            Start Learning
          </Button>
        </styled.ButtonContainer>
      </styled.Nav>
    </styled.Header>
  );
}
