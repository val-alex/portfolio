import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { LINKS } from "src/constants";
import { DarkModeToggle } from "./darkModeToggle";
import { LinkItem } from "./linkItem";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Menu = LINKS.map((link, index) => (
    <LinkItem key={`${link.name}-${index}`} href={link.href}>
      <Text as="b">{link.name}</Text>
    </LinkItem>
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
