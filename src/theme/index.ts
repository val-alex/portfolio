import {
  extendTheme,
  theme as base
} from '@chakra-ui/react';
import { mode } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "./buttonStyles";

const theme = extendTheme(
  {
    fonts: {
      heading: `'Roboto', ${base.fonts.heading}`,
      body: `'Roboto', ${base.fonts.body}`,
      mono: `'Roboto', ${base.fonts.body}`,
    },
    colors: {
      stroke: "#001e1d",
      main: "#e8e4e6",
      highlight: "#f9bc60",
      secondary: "#abd1c6",
      tertiary: "#e16162",
      brand: {
        50: '#fffffe',
        100: '#e8e4e6',
        200: '#abd1c6',
        300: '#f9bc60',
        400: '#e16162',
        500: '#004643',
        600: '#0f3433',
        700: '#001e1d',
      },
    },
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
          bg: mode('brand.200', 'brand.500')(props),
        },
      }),
    },
  },
);

export default theme;
