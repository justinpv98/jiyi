import React from "react";
import useAuth from "@/hooks/useAuth/useAuth";

function withAuth<P extends object>(Component: any) {

  return (props: any) => {
    const state = useAuth();
    const isAuth = Boolean(state?.id);

    return <Component isAuth={isAuth} {...(props as P)} />;
  };
}

export default withAuth;
