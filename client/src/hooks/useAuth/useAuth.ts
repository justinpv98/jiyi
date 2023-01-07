import { useContext } from "react";
import { AuthContext } from "@/features/auth/Auth.context";

export default function useAuth() {
  return useContext(AuthContext);
}
