import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      mt={"24px"}
      bg={useColorModeValue("secondary", "brand.500")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Box borderTopWidth={1} maxW="container.md" m="auto">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Valentin Alexeev. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
};
