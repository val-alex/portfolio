import {
  Heading,
  Icon,
  Link,
  ListItem,
  Stack,
  Text,
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
          <strong>Building Keyboards</strong> -{" "}
          <Link isExternal href="https://rama.works/kara">
            <Text as={"i"}>Rama Works Kara</Text>
          </Link>{" "}
          ( HHKB Layout ) &{" "}
          <Link
            isExternal
            href="https://www.keychron.com/pages/keychron-q8-customizable-mechanical-keyboard"
          >
            <Text as={"i"}>Keychron Q8</Text>
          </Link>{" "}
          ( Alice ISO Layout ) are in my collection so far ⌨
        </ListItem>
        <ListItem>
          <strong>Drawing</strong> - love a bit of portraits and pixel art 🖌️
        </ListItem>
        <ListItem>
          <strong>Indie Games</strong> -{" "}
          <Link isExternal href="https://discoelysium.com/">
            <Text as={"i"}>Disco Elysium</Text>
          </Link>{" "}
          and{" "}
          <Link isExternal href="http://www.celestegame.com/">
            <Text as={"i"}>Celeste</Text>
          </Link>{" "}
          are my favourites 🎮
        </ListItem>
        <ListItem>
          <strong>Foreign Movies</strong> -{" "}
          <Link isExternal href="https://www.imdb.com/title/tt6751668/">
            <Text as={"i"}>Parasite</Text>
          </Link>{" "}
          and{" "}
          <Link isExternal href="https://www.imdb.com/title/tt0317248/">
            <Text as={"i"}>City of God</Text>
          </Link>{" "}
          are my go tos 🎞
        </ListItem>
        <ListItem>
          <strong>Animations</strong> -{" "}
          <Link isExternal href="https://www.imdb.com/title/tt0405296/">
            <Text as={"i"}>A Scanner Darkly</Text>
          </Link>{" "}
          and{" "}
          <Link isExternal href="https://www.imdb.com/title/tt6451304/">
            <Text as={"i"}>Have a Nice Day</Text>
          </Link>{" "}
          are the ones 📺
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
