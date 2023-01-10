import React, { createContext, useReducer } from "react";
import axios from "@/config/axios";
import {
  AuthState,
  AuthActionTypes,
  LoginData,
  RegisterData,
} from "@/types/auth/auth";
import AuthReducer from "./Auth.reducer";

const BASE_URL = "/auth";

interface Props {
  children: React.ReactNode;
}

const initialState: AuthState = {
  id: "",
  goal: "",
  topics: [],
  languages: [],
  login: () => {},
  register: () => {},
  logout: () => {},
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  async function login(data: LoginData): Promise<void> {
    try {
      const res = await axios.post(BASE_URL + "/login", data, {withCredentials: true});
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.LOGIN_FAIL,
        payload: error.response.data.message,
      });
    }
  }

  async function register(data: RegisterData): Promise<void> {
    try {
      const res = await axios.post(BASE_URL + "/register", data);
      dispatch({
        type: AuthActionTypes.REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.REGISTER_FAIL,
        payload: error.response.data.message,
      });
    }
  }

  async function logout(): Promise<void> {
    try {
      const res = await axios.post(BASE_URL + "/logout");
      dispatch({
        type: AuthActionTypes.LOGOUT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
