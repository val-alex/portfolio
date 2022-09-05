import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";

import { LINKS } from "src/constants";
import { LinkItem } from "./linkItem";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Menu = LINKS.map((link, index) => (
    <LinkItem key={`${link.name}-${index}`} href={link.href}>
      {link.name}
    </LinkItem>
  ));

  return (
    <>
      <Box px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW="container.md"
          m="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Val Codes</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Menu}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              onClick={toggleColorMode}
              alignSelf={"end"}
              bg={useColorModeValue("#abd1c6", "#004643")}
              _hover={{
                bg: useColorModeValue("#e8e4e6", "#f9bc60"),
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              {colorMode === "light" ? <Moon /> : <Sun />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Menu}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
