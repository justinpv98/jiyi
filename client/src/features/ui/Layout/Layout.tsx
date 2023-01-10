import React, { Fragment } from "react";
import * as styled from "./Layout.styles";
import { useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";


const hideNavbarPaths = ["/", "/register" ]

type Props = {
  children: React.ReactNode | JSX.Element | JSX.Element[],

}

function Layout({ children, ...rest }: Props) {
  const location = useLocation();

  //if location matches / and user is not authenticated, show orange page
  if(hideNavbarPaths.includes(location.pathname)){
    return <Fragment>{children}</Fragment>;
  } else {
    return (
      <styled.NavLayout {...rest}>
        <Navbar />
        <styled.Content>
        {children}
        </styled.Content>
      </styled.NavLayout>
    );
  }
 
}

export default Layout;