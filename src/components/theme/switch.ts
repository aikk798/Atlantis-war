import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: "#fff",
  },
  track: {
    bg: "gray.100",
    _checked: {
      bg: "#82D20F",
    },
  },
});

const switchTheme = defineMultiStyleConfig({ baseStyle });

export default switchTheme;
