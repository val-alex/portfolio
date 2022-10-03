import {
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Element } from "react-scroll";

import { LINKS } from "@/constants";

export const Works = () => {
  return (
    <Stack>
      <Element name={LINKS[0].href} className="element">
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
      </Element>
      <UnorderedList pl={"18px"}>
        <ListItem>
          Senior Front End Web Developer (React.js) -{" "}
          <Link isExternal href="https://akqa.com/">
            <Text as={"b"}>AKQA</Text>
          </Link>{" "}
          - (May 2021 - Present)
        </ListItem>
        <ListItem>
          Senior Front End Web Developer (React.js) -{" "}
          <Text as={"b"}>Codebase8</Text> - (Jan 2021 - Apr 2021)
        </ListItem>
        <ListItem>
          Senior Front End Web Developer (React.js) -{" "}
          <Link isExternal href="https://www.theframeworks.com/">
            <Text as={"b"}>The Frameworks</Text>
          </Link>{" "}
          - (Apr 2020 - Dec 2020)
        </ListItem>
        <ListItem>
          Front End Web Developer (React.js) -{" "}
          <Link isExternal href="https://www.loveholidays.com/">
            <Text as={"b"}>Loveholidays</Text>
          </Link>{" "}
          - (Apr 2018 - March 2020)
        </ListItem>
        <ListItem>
          Front End Web Developer (React.js) -{" "}
          <Link isExternal href="https://england.shelter.org.uk/">
            <Text as={"b"}>Shelter</Text>
          </Link>{" "}
          - (May 2017 - Dec 2017)
        </ListItem>
        <ListItem>
          Front End Web Developer (JavaScript) -{" "}
          <Link isExternal href="https://www.sky.com/">
            <Text as={"b"}>Sky</Text>
          </Link>{" "}
          - (Aug 2016 - Mar 2017)
        </ListItem>
        <ListItem>
          Front End Web Developer (WordPress) -{" "}
          <Link isExternal href="http://www.mustard-designagency.com/">
            <Text as={"b"}>Mustard Design Agency</Text>
          </Link>{" "}
          - (Jan 2015 - Jul 2016)
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
