import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys
);

const baseStyle = definePartsStyle({
  control: {
    borderColor: "#e2e8f0",
    _checked: {
      bg: "#82D20F",
      borderColor: "#82D20F",
      _hover: {
        bg: "#82D20F",
        borderColor: "#82D20F",
      },
    },
  },
  icon: {
    color: "#fff",
  },
});

const cheboxTheme = defineMultiStyleConfig({ baseStyle });

export default cheboxTheme;
