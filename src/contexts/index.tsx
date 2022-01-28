import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../style/theme";
import { AuthProvider } from "./Auth.Context";
import { TattooistsProvider } from "./Tattooists.Context";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <TattooistsProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </TattooistsProvider>
  </AuthProvider>
);
