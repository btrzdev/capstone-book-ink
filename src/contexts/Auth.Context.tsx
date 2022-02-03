import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";
import { Sessions, User } from "../types/index";

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
  userSessions: Sessions[];
  accessToken: string;
  login: (credentials: loginCredentials) => Promise<void>;
  register: (credentials: registerCredentials) => Promise<void>;
  removeSession: (id: number) => Promise<void>;
  loadSessions: (id: number) => Promise<void>;
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
    const user = localStorage.getItem("@Bookink:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return { accessToken: "", user: {} } as AuthState;
  });

  const [userSessions, setUserSessions] = useState<Sessions[]>(
    JSON.parse(localStorage.getItem("@Bookink:sessions") || "[]")
  );

  const loadSessions = async (id: number) => {
    const response = await api.get(`/allsessions/${id}`);
    localStorage.setItem(
      "@Bookink:sessions",
      JSON.stringify([...response.data])
    );

    setUserSessions([...response.data]);
  };

  const login = useCallback(async ({ email, password }: loginCredentials) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    await loadSessions(user.id);
    localStorage.setItem("@Bookink:accessToken", accessToken);
    localStorage.setItem("@Bookink:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const removeSession = async (id: number) => {
    const token = localStorage.getItem("@Bookink:accessToken") || "[]";

    api
      .delete(`/sessions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setUserSessions([...userSessions]);
  };

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

  const logout = useCallback(async () => {
    localStorage.removeItem("@Bookink:accessToken");
    localStorage.removeItem("@Bookink:user");
    localStorage.removeItem("@Bookink:tattooistInfo");
    localStorage.removeItem("@Bookink:tattooists");
    localStorage.removeItem("@Bookink:sessions");

    await setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        userSessions,
        login,
        register,
        removeSession,
        loadSessions,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
