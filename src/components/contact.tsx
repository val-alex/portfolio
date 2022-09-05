import {
  Heading,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GitHub, Linkedin, Mail, Twitter } from "react-feather";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("valentin.m.alexeev@gmail.com");

  return (
    <Stack>
      <Heading id="contact">Get in Touch</Heading>

      <Stack spacing={{ base: 4, md: 8 }} direction={{ base: "column" }}>
        <Stack
          align={"center"}
          justify={"space-around"}
          direction={{ base: "row" }}
        >
          <Tooltip
            label={hasCopied ? "Email Copied!" : "Copy Email"}
            closeOnClick={false}
            hasArrow
            bg={useColorModeValue("main", "stroke")}
            color={useColorModeValue("stroke", "main")}
          >
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<Mail />}
              onClick={onCopy}
              isRound
            />
          </Tooltip>

          <NextLink href="https://github.com/val-alex" passHref>
            <Link isExternal>
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<GitHub />}
                isRound
              />
            </Link>
          </NextLink>

          <NextLink href="https://twitter.com/val_alexeev" passHref>
            <Link isExternal>
              <IconButton
                aria-label="twitter"
                variant="ghost"
                size="lg"
                icon={<Twitter size="28px" />}
                isRound
              />
            </Link>
          </NextLink>

          <NextLink href="https://www.linkedin.com/in/val-alex/" passHref>
            <Link isExternal>
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<Linkedin size="28px" />}
                isRound
              />
            </Link>
          </NextLink>
        </Stack>
        <ContactForm />
      </Stack>
    </Stack>
  );
};
