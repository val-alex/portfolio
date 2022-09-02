import {
  extendTheme,
  theme as base
} from '@chakra-ui/react';

const theme = extendTheme(
  {
    fonts: {
      heading: `'Roboto', ${base.fonts.heading}`,
      body: `'Roboto', ${base.fonts.body}`,
    },
    colors: {
      brand: {
        50: '#f5fee5',
        100: '#e1fbb2',
        200: '#cdf781',
        300: '#b8ee56',
        400: '#a2e032',
        500: '#8ac919',
        600: '#71ab09',
        700: '#578602',
        800: '#3c5e00',
        900: '#203300',
      },
    },
  },
);

export default theme;
