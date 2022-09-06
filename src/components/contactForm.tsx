/* eslint-disable react-hooks/rules-of-hooks */ // TODO: fix this later
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, User } from "react-feather";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_FORMSPREE_API_KEY}`
  );

  if (state.succeeded) {
    return (
      <Center>
        Thank you for sending me an email! Will get in touch soon :)
      </Center>
    );
  }

  return (
    <Box
      borderRadius={"lg"}
      p={8}
      shadow={"base"}
      bg={useColorModeValue("brand.500", "main")}
      color={useColorModeValue("main", "stroke")}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <User />
              </InputLeftElement>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                _placeholder={{ color: useColorModeValue("main", "stroke") }}
                borderColor={useColorModeValue("main", "stroke")}
                _hover={{
                  borderColor: useColorModeValue("highlight", "highlight"),
                }}
                _focusVisible={{
                  zIndex: 1,
                  borderColor: useColorModeValue("highlight", "highlight"),
                  boxShadow: "0 0 0 1px #f9bc60",
                }}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>

            <InputGroup>
              <InputLeftElement>
                <Mail />
              </InputLeftElement>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                _placeholder={{ color: useColorModeValue("main", "stroke") }}
                borderColor={useColorModeValue("main", "stroke")}
                _hover={{
                  borderColor: useColorModeValue("highlight", "highlight"),
                }}
                _focusVisible={{
                  zIndex: 1,
                  borderColor: useColorModeValue("highlight", "highlight"),
                  boxShadow: "0 0 0 1px #f9bc60",
                }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>

            <Textarea
              id="message"
              name="message"
              rows={6}
              resize="none"
              placeholder="Your Message"
              _placeholder={{ color: useColorModeValue("main", "stroke") }}
              borderColor={useColorModeValue("main", "stroke")}
              _hover={{
                borderColor: useColorModeValue("highlight", "highlight"),
              }}
              _focusVisible={{
                zIndex: 1,
                borderColor: useColorModeValue("highlight", "highlight"),
                boxShadow: "0 0 0 1px #f9bc60",
              }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </FormControl>

          <Button
            variant="highlight"
            _hover={{
              bg: useColorModeValue("main", "secondary"),
            }}
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
