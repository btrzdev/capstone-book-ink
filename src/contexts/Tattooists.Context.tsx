import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";
import { Sessions, User } from "../types/index";

interface TattooistsProviderProps {
  children: ReactNode;
}

interface TattooistsContextData {
  tattooists: User[];
  loadTattooists: () => void;
  loadSpecificTattooist: (id: number) => User;
  loadSpecificUser: (id: number) => Promise<number>;
  submitComment: (data: Object) => Promise<void>;
  submitResponse: (data: Sessions) => Promise<void>;
}

const TattooistsContext = createContext<TattooistsContextData>(
  {} as TattooistsContextData
);

const useTattooists = () => {
  const context = useContext(TattooistsContext);

  if (!context) {
    throw new Error("useTattooists must be used within an TattooistsProvider");
  }

  return context;
};

const TattooistsProvider = ({ children }: TattooistsProviderProps) => {
  const [tattooists, setTattooists] = useState<User[]>(() => {
    const tattooists = JSON.parse(
      localStorage.getItem("@Bookink:tattooists") || "[]"
    );

    if (tattooists) {
      return tattooists;
    }

    return [] as User[];
  });

  const loadTattooists = useCallback(async () => {
    const response = await api.get("/tattooists");

    localStorage.setItem(
      "@Bookink:tattooists",
      JSON.stringify([...response.data])
    );
    setTattooists([...response.data]);
  }, []);

  const loadSpecificTattooist = (id: number) => {
    const element = tattooists.find(
      (element: User) => element.id === Number(id)
    );

    if (element) {
      return element;
    }

    return {} as User;
  };

  const loadSpecificUser = useCallback(async (userId: number) => {
    const response = await api.get(`/users/${userId}`);
    // loadTattooists();
    // console.log(response.data);
    const { id } = response.data;
    // const { user } = response.data;
    return id;
  }, []);

  const submitComment = useCallback(async (data: Object) => {
    const response = await api.post("/comments", data);

    loadTattooists();
  }, []);

  const submitResponse = useCallback(async (data: Sessions) => {
    const token = localStorage.getItem("@Bookink:accessToken") || "[]";

    // console.log(token);
    // console.log("entrou");
    // console.log(data);
    await api
      .patch(`/sessions/${data.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    loadTattooists();
  }, []);

  return (
    <TattooistsContext.Provider
      value={{
        tattooists,
        loadTattooists,
        loadSpecificTattooist,
        loadSpecificUser,
        submitComment,
        submitResponse,
      }}
    >
      {children}
    </TattooistsContext.Provider>
  );
};

export { TattooistsProvider, useTattooists };
