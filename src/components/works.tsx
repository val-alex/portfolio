import { Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

export const Works = () => {
  return (
    <Stack>
      <Heading as="h3" variant="section-title" id="works">
        Works
      </Heading>

      <UnorderedList pl={"18px"}>
        <ListItem>
          Senior Front-End Web Developer (React.js) - <strong>AKQA</strong> -
          (May 2021 - Oct 2021 )
        </ListItem>
        <ListItem>
          Senior Front-End Web Developer (React.js) - <strong>Codebase8</strong>{" "}
          - (Jan 2021 - Apr 2021)
        </ListItem>
        <ListItem>
          Senior Front-End Web Developer (React.js) -{" "}
          <strong>The Frameworks</strong> - (Apr 2020 - Dec 2020)
        </ListItem>
        <ListItem>
          Front-End Web Developer (React.js) - <strong>Loveholidays</strong> -
          (Apr 2018 - March 2020)
        </ListItem>
        <ListItem>
          Front-End Web Developer (React.js) - <strong>Shelter</strong> - (May
          2017 - Dec 2017)
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
