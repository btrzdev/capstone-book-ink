import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";
import { User } from "../types/index";

interface TattooistsProviderProps {
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

interface TattooistsContextData {
  tattooists: User[];
  loadTattooists: () => void;
  loadSpecificTattooist: (id: number) => User;
  submitComment: (data: Comment) => void;
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
  // const [tattooists, setTattooists] = useState<User[]>([]);

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

  const submitComment = (data: Comment) => {
    api
      .post("/comments", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <TattooistsContext.Provider
      value={{
        tattooists,
        loadTattooists,
        loadSpecificTattooist,
        submitComment,
      }}
    >
      {children}
    </TattooistsContext.Provider>
  );
};

export { TattooistsProvider, useTattooists };
