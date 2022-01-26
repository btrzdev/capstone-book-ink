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

interface TattooistsState {
  tattooists: User[];
}

interface TattooistsContextData {
  tattooists: User[];
  allTattooists: () => void;
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
  const [tattooists, setTattooists] = useState<User[]>([]);

  const allTattooists = useCallback(async () => {
    const response = await api.get("/tattooists");

    setTattooists([...response.data]);
  }, []);

  return (
    <TattooistsContext.Provider
      value={{
        tattooists,
        allTattooists,
      }}
    >
      {children}
    </TattooistsContext.Provider>
  );
};

export { TattooistsProvider, useTattooists };
