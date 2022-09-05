import { Heading, Text } from "@chakra-ui/react";

export const Bio = () => {
  return (
    <>
      <Heading as="h3" variant="section-title" fontSize={["3xl", "3xl", "5xl"]}>
        Bio
      </Heading>
      <Text>
        <strong>1994</strong> - Born in Russia 🇷🇺🪆☦️
      </Text>
      <Text>
        <strong>2007</strong> - Came to UK 🍪🫖
      </Text>
      <Text>
        <strong>2015</strong> - Started Web Dev 🧑‍💻
      </Text>
      <Text>
        <strong>Lived In:</strong> 🇷🇺 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇺🇾 🇧🇷 🇵🇭 🇹🇭 🇧🇬
      </Text>
    </>
  );
};
