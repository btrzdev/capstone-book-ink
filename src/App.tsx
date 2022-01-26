import { useEffect } from "react";
import { useAuth } from "./contexts/Auth.Context";
import { useTattooists } from "./contexts/Tattooists.Context";
import { api } from "./services/api";

export const App = () => {
  const { tattooists, allTattooists } = useTattooists();
  useEffect(() => {
    allTattooists();
  }, []);

  return <h1>App</h1>;
};
