import { Navigate, Outlet } from "react-router-dom";
import withAuth from "../auth/hoc/withAuth";

type Props = {
  isAuth: boolean;
  redirectPath: string;
  children: React.ReactNode;
};

function RestrictedRoute({ isAuth, redirectPath = "/", children }: Props) {
  // prevents logged in users from seeing certain pages
  if (isAuth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}

export default withAuth(RestrictedRoute);
