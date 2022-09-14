import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as ScrollLink, scrollSpy } from "react-scroll";

import { LINKS } from "src/constants";
import { DarkModeToggle } from "./darkModeToggle";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const Menu = LINKS.map((link, index) => (
    <ScrollLink
      key={`${link.name}-${index}`}
      className={link.href}
      to={link.href}
      spy={true}
      smooth={true}
      duration={500}
    >
      <Text
        as="b"
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "underline",
          textDecorationThickness: "2px",
          cursor: "pointer",
        }}
        textUnderlineOffset={"4px"}
      >
        {link.name}
      </Text>
    </ScrollLink>
  ));

  return (
    <>
      <Box px={4}>
        <Flex
          h={20}
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
            <DarkModeToggle />
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
