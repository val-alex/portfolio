import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";

export const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      alignSelf={"end"}
      bg={useColorModeValue("secondary", "brand.500")}
      _hover={{
        bg: useColorModeValue("main", "highlight"),
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
    >
      {colorMode === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};
