import {
  Heading,
  Icon,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { Heart } from "react-feather";

export const Hobbies = () => {
  return (
    <Stack>
      <Heading as="h3" variant="section-title">
        I <Icon as={Heart} />
      </Heading>
      <UnorderedList pl={"18px"}>
        <ListItem>
          <strong>Travelling</strong>
        </ListItem>
        <UnorderedList pl={"18px"}>
          <ListItem>
            <strong>Lived In:</strong> 🇷🇺 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇺🇾 🇧🇷 🇵🇭 🇹🇭 🇧🇬
          </ListItem>
          <ListItem>
            <strong>Been in:</strong> 🇲🇨🇫🇷🇨🇭🇮🇹🇩🇪🇵🇱🇹🇷🇰🇿🇺🇸🇮🇳🇸🇬🇲🇾
          </ListItem>
        </UnorderedList>
        <ListItem>
          <strong>Building Keyboards</strong> - Rama Works Kara & Keychron Q2
          are in my collection so far
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
    </Stack>
  );
};
