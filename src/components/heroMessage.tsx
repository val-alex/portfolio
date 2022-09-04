import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { GitHub } from "react-feather";

export const HeroMessage = () => {
  return (
    <Stack
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      maxW="container.md"
      m="auto"
      p={"2%"}
      pr={"40%"}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        color={"#fffffe"}
      >
        Hi 👋
        <br />
        I&apos;m{" "}
        <Text as={"span"} color={"#f9bc60"}>
          Val
        </Text>{" "}
        and I{" "}
        <Text as={"span"} color={"#f9bc60"}>
          Code
        </Text>
        🧑‍💻
      </Heading>
      <Text maxW={"3xl"} color={"#e8e4e6"}>
        I develop web applications and I&apos;m based in London 🇬🇧
      </Text>
      <Text maxW={"3xl"} color={"#e8e4e6"}>
        Check out my:
      </Text>
      <Stack spacing={6} direction={"row"}>
        <Button
          rounded={"full"}
          px={6}
          colorScheme={"brand"}
          bg={"#f9bc60"}
          _hover={{ bg: "brand.600" }}
        >
          CV
        </Button>

        <Button leftIcon={<GitHub />} rounded={"full"} px={6}>
          Test app
        </Button>
      </Stack>
    </Stack>
  );
};
