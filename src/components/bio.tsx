import { Heading, Stack, Text } from "@chakra-ui/react";

export const Bio = () => {
  return (
    <Stack>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <Text>
        <strong>2015</strong> - Started Web Dev 🧑‍💻
      </Text>
      <Text>
        <strong>2022</strong> - Still doing Web Dev 🧑‍💻
      </Text>
    </Stack>
  );
};
