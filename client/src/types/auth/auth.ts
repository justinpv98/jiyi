export type Action<Type> = {
  type: Type;
  payload: any;
};

// Auth Context types
export interface AuthState {
  id: string;
  goal: string;
  topics: string[];
  languages: string[];
  login: (data: LoginData) => void;
  register: (data: RegisterData) => void;
  logout: () => void;
}

export enum AuthActionTypes {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT,
}

export type AuthActions = {
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
};

// Register types
export type RegisterData = {
  topic?: string;
  language?: string;
  goal?: string;
  email?: string;
  password?: string;
};

export type LoginData = {
  email: string;
  password: string;
};
