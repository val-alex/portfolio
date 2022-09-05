import { Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
import { Edit, GitHub } from "react-feather";
import { IconType } from "react-icons/lib";

const ButtonLink = ({
  icon,
  href = "#",
  isExternal = false,
  variant = "main",
  children,
}: {
  icon?: IconType; // TODO: fix later
  href?: string | "#";
  isExternal?: boolean;
  variant?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <NextLink href={href} passHref>
        <Button
          as="a"
          target={isExternal ? "_blank" : "_self"}
          rounded={"full"}
          px={6}
          variant={variant}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          leftIcon={<Icon as={icon} />}
        >
          {children}
        </Button>
      </NextLink>
    </>
  );
};

export const HeroMessage = () => {
  return (
    <Stack
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      maxW="container.md"
      m="auto"
      p={{ base: 10, md: 10 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        color={"#fffffe"}
      >
        Hi 👋 I&apos;m{" "}
        <Text as={"span"} color={"#f9bc60"}>
          Val
        </Text>{" "}
        <br />
        and I{" "}
        <Text as={"span"} color={"#f9bc60"}>
          Code
        </Text>
        🧑‍💻
      </Heading>
      <Text maxW={"3xl"} color={"#e8e4e6"} fontSize={{ base: "xl" }}>
        I develop web applications
        <br />
        and I&apos;m based in London 🇬🇧
      </Text>
      <Text maxW={"3xl"} color={"#e8e4e6"} fontSize={{ base: "xl" }}>
        Check out my:
      </Text>
      <Stack spacing={6} direction={"row"}>
        <ButtonLink
          href="https://docs.google.com/document/d/1lcOI1CoWqdoZpeQ5XxQWDy9QXCeoHbc1NQ_ZspduICU/edit?usp=sharing"
          icon={Edit}
          isExternal={true}
          variant="highlight"
        >
          CV
        </ButtonLink>

        <ButtonLink
          href="https://github.com/val-alex/recipe-app"
          icon={GitHub}
          isExternal={true}
          variant="main"
        >
          Test app
        </ButtonLink>
      </Stack>
    </Stack>
  );
};
