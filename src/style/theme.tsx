import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      100: "#E3D3D3",
    },
    gray: {
      0: "#F5F5F5",
      100: "#E2DACE",
      200: "#CEC5B5",
      300: "#ABA394",
      400: "#7A8082",
      600: "#303537",
      800: "#090A0B",
    },
    yellow: {
      30: "##F8F4E3",
    },
    orange: {
      100: "#C08B6A",
      300: "#A95C3C",
      700: "#5F493F",
    },
    fonts: {
      heading: "Alata, Philosopher, Arapey",
      body: "Alata, Philosopher, Arapey",
    },
    fontSizes: {
      xs: "1.25rem",
      sm: "2.5rem",
      md: "3.875rem",
      lg: "4.688rem",      
    },
    styles: {
      global: {
        body: {
          bg: "white",
          color: "gray.600",
        },
      },
    },
  },
});
