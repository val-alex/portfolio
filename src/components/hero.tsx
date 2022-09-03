import {
  Button,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

export const Hero = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        >
          Hi 👋 I&apos;m{" "}
          <Text as={"span"} color={"brand.500"}>
            Val
          </Text>{" "}
          and I{" "}
          <Text as={"span"} color={"brand.500"}>
            Code
          </Text>
          .
        </Heading>
        <Text maxW={"3xl"}>Check out my</Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"brand"}
            bg={"brand.500"}
            _hover={{ bg: "brand.600" }}
          >
            Works
          </Button>
          <Button rounded={"full"} px={6}>
            <Icon as={BsGithub} />
            Source
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
