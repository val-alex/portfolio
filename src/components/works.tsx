import { Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
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
          Senior Front End Web Developer (React.js) - <strong>AKQA</strong> -
          (May 2021 - Present)
        </ListItem>
        <ListItem>
          Senior Front End Web Developer (React.js) - <strong>Codebase8</strong>{" "}
          - (Jan 2021 - Apr 2021)
        </ListItem>
        <ListItem>
          Senior Front End Web Developer (React.js) -{" "}
          <strong>The Frameworks</strong> - (Apr 2020 - Dec 2020)
        </ListItem>
        <ListItem>
          Front End Web Developer (React.js) - <strong>Loveholidays</strong> -
          (Apr 2018 - March 2020)
        </ListItem>
        <ListItem>
          Front End Web Developer (React.js) - <strong>Shelter</strong> - (May
          2017 - Dec 2017)
        </ListItem>
        <ListItem>
          Front End Web Developer (JavaScript) - <strong>Sky</strong> - (Aug
          2016 - Mar 2017)
        </ListItem>
        <ListItem>
          Front End Web Developer (WordPress) -{" "}
          <strong>Mustard Design Agency</strong> - (Jan 2015 - Jul 2016)
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
