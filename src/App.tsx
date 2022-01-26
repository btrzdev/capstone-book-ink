import { useEffect } from "react";
import { useAuth } from "./contexts/Auth.Context";
import { api } from "./services/api";

export const App = () => {
  const { user, signIn } = useAuth();
  useEffect(() => {
    signIn({ email: "mario@mail.com", password: "123456" }).then((_) => {
      const s = JSON.parse(localStorage.getItem("@Bookink:user") || "{}");
      if (s.isTattooists === true) {
        console.log("é tatuador");
      } else {
        console.log(" não É tatuador");
      }
    });
  }, []);
  return <h1>App</h1>;
};
