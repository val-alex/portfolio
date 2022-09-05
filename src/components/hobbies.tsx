import { Heading, Icon, ListItem, UnorderedList } from "@chakra-ui/react";
import { Heart } from "react-feather";

export const Hobbies = () => {
  return (
    <>
      <Heading as="h3" variant="section-title" fontSize={["3xl", "3xl", "5xl"]}>
        I <Icon as={Heart} />
      </Heading>
      <UnorderedList>
        <ListItem>
          <strong>Travelling</strong> - been in: 🇫🇷🇨🇭🇮🇹🇩🇪🇵🇱🇹🇷🇰🇿🇺🇸🇮🇳🇸🇬🇲🇾
        </ListItem>
        <ListItem>
          <strong>Drawing</strong> - love a bit of portraits and pixel art
        </ListItem>
        <ListItem>
          <strong>Indie Games</strong> - Disco Elysium and Celeste are my
          favourites
        </ListItem>
        <ListItem>
          <strong>Foreign Movies</strong> - Parasite and City of God are my go
          tos
        </ListItem>
        <ListItem>
          <strong>Animations</strong> - A Scanner Darkly and Have a Nice Day are
          the ones
        </ListItem>
      </UnorderedList>
    </>
  );
};
