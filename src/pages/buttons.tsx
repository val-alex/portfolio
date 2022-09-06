import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  IconButton,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

export const ButtonsTest = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center h="100vh" maxW="1200px" m="auto">
      <Stack isInline>
        <IconButton
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          variant={"outline"}
          colorScheme={"cyan"}
          aria-label={"Color mode switcher"}
          onClick={toggleColorMode}
        >
          Switch Mode
        </IconButton>
        <Button variant="solid" colorScheme="green">
          Solid
        </Button>
        <Button variant="stroke">Main</Button>
        <Button variant="main">Main</Button>
        <Button variant="highlight">Highlight</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
        <Button variant="tertiary">Tertiary</Button>
      </Stack>
    </Center>
  );
};

export default ButtonsTest;
