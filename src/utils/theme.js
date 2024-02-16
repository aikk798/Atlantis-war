// theme.js
import { extendTheme } from "@chakra-ui/react";
import switchTheme from "@/components/theme/switch";
import checkboxTheme from "@/components/theme/checkbox";

export const light = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      a: {
        color: "#787878",
        _hover: {
          color: "#ffe607",
        },
      },
    },
  },
  fonts: {
    body: "",
  },
  colors: {
    fontColor: {
      100: "#3B454E",
      200: "#787878",
      300: "#8899A8",
      400: "#BDBDBD",
      500: "#A3BDD9",
      600: "#9397a3",
      700: "#A3BDD9",
    },
    brand: {
      500: "#A3BDD9",
    },
  },
  components: { Switch: switchTheme, Checkbox: checkboxTheme },
});

export const dark = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "#fafafa",
      },
    },
  },
  fonts: {
    body: "Ubuntu",
  },
  colors: {
    primary: "#3b454e",
    secondary: "#8899A8",
    brand: {
      200: "#520FFF",
    },
  },
});
