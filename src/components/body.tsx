import { Box, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { GitHub } from "react-feather";
import { Bio } from "./bio";
import { Contact } from "./contact";
import { Hobbies } from "./hobbies";
import { LinkItem } from "./linkItem";
import { Works } from "./works";

const HeroContent = dynamic(() => import("./heroContent"), { ssr: false });
export const Body = () => {
  return (
    <Box m="auto" alignItems={"center"} justifyContent={"space-between"}>
      <HeroContent />
      <Stack maxW="container.md" m="auto" mt={"12"}>
        <Heading as="h3" variant="section-title">
          Valentin Alexeev
        </Heading>
        <Text>Senior Front End Web Developer (React.js)</Text>
        <Works />
        <Bio />
        <Hobbies />
        <Stack>
          <Heading as="h3" variant="section-title">
            Info
          </Heading>
        </Stack>
        <Text>
          This website is build with Next.js Chakra UI Formspree & Vercel{" "}
        </Text>
        <Text>
          Check out the{" "}
          <LinkItem
            href={"https://github.com/val-alex/portfolio"}
            isExternal={true}
          >
            <Icon as={GitHub} />
            Source
          </LinkItem>
        </Text>
        <Contact />
      </Stack>
    </Box>
  );
};
