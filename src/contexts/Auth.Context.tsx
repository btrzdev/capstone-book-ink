import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";
import { User } from "../types/index";

interface AuthProviderProps {
  children: ReactNode;
}

interface loginCredentials {
  email: string;
  password: string;
}

interface registerCredentials {
  email: string;
  name: string;
  password: string;
  img?: string;
  bio?: string;
  isTattooists: boolean;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  login: (credentials: loginCredentials) => Promise<void>;
  register: (credentials: registerCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Bookink:accessToken");
    const user = localStorage.getItem("@@Bookink:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }: loginCredentials) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@Bookink:accessToken", accessToken);
    localStorage.setItem("@Bookink:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const register = useCallback(
    async ({
      email,
      password,
      name,
      img = "",
      bio = "",
      isTattooists = false,
    }: registerCredentials) => {
      const response = await api
        .post("/register", { email, password, name, img, bio, isTattooists })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem("@Bookink:accessToken");
    localStorage.removeItem("@Bookink:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
