import {
  extendTheme,
  theme as base,
  ThemeConfig
} from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "./buttonStyles";
import { COLORS } from './colors';

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    config,
    fonts: {
      heading: `'Roboto', ${base.fonts.heading}`,
      body: `'Roboto', ${base.fonts.body}`,
      mono: `'Roboto', ${base.fonts.body}`,
    },
    colors: COLORS,
    components: {
      Button,
      Heading: {
        variants: {
          'section-title': {
            marginTop: "8",
            fontSize: "3xl"
          }
        }
      },
    },
    styles: {
      global: (props: any): any => ({
        body: {
          bg: mode('secondary', 'brand.500')(props),
        },
      }),
    },
  },
);

export default theme;
