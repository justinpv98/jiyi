import { Action, AuthActions, AuthActionTypes } from "@/types/auth/auth";

type State = {
  id: string;
  goal: string;
  languages: string[];
  topics: string[];
};

export default (state: State, action: Action<AuthActionTypes>) => {
  switch (action.type) {
    case AuthActionTypes.REGISTER_SUCCESS:
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case AuthActionTypes.REGISTER_FAIL:
    case AuthActionTypes.LOGIN_FAIL:
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        id: "",
        goal: "",
        languages: [],
        topics: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
