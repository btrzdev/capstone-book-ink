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

interface TattooistsContextData {
  tattooists: User[];
  setTattooists: any;
  loadTattooists: () => void;
  loadSpecificTattooist: (id: number) => User;
  submitComment: (data: Object) => Promise<void>;
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

  const submitComment = useCallback(async (data: Object) => {
    const response = await api.post("/comments", data);

    loadTattooists();
  }, []);

  return (
    <TattooistsContext.Provider
      value={{
        tattooists,
        setTattooists,
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
