import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { Mail, User } from "react-feather";

export const ContactForm = () => {
  return (
    <Box
      bg={useColorModeValue("brand.500", "main")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("main", "stroke")}
      shadow="base"
    >
      <Stack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <User />
            </InputLeftElement>
            <Input
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
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>

          <InputGroup>
            <InputLeftElement>
              <Mail />
            </InputLeftElement>
            <Input
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
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>

          <Textarea
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
        </FormControl>

        <Button
          variant="highlight"
          _hover={{
            bg: "main",
          }}
        >
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};
