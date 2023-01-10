import React from "react";
import { NavLink } from "react-router-dom";
import * as styled from "./Navbar.styles";

// Routes
import navRoutes from "@/constants/navRoutes";

// Components
import Icon from "../Icon/Icon";

export default function Navbar() {
  return (
    <styled.Nav>
      <styled.NavContainer>
        <styled.Logo />
        {navRoutes.map((route) => {
          return (
            <styled.NavLink as={NavLink} to={route.path} id={route.path}>
              <Icon icon={route.icon} />
              <span>{route.name}</span>
            </styled.NavLink>
          );
        })}
      </styled.NavContainer>
    </styled.Nav>
  );
}
