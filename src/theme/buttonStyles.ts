import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { darken, mode, whiten } from "@chakra-ui/theme-tools"

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const ButtonStyles: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {},
  // Two variants: outline and solid
  variants: {
    stroke: (props) => ({
      bg: mode(whiten("stroke", 0), whiten("stroke", 10))(props),
      color: mode(whiten("main", 0), whiten("main", 10))(props),
      _hover: {
        bg: mode(darken("stroke", 20), whiten('stroke', 20))(props),
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }
    }),
    main: (props) => ({
      bg: mode(whiten("main", 0), darken("main", 20))(props),
      color: mode("stroke", "brand.50")(props),
      _hover: {
        bg: mode(darken("main", 20), whiten('main', 20))(props),
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }
    }),
    highlight: (props) => ({
      bg: mode(whiten("highlight", 0), darken("highlight", 10))(props),
      color: mode("stroke", "main")(props),
      _hover: {
        bg: mode(darken("highlight", 20), whiten('highlight', 20))(props),
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }
    }),
    secondary: (props) => ({
      bg: mode(whiten("secondary", 0), darken("secondary", 10))(props),
      color: "stroke",
      _hover: {
        bg: mode(darken("secondary", 20), whiten('secondary', 20))(props),
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }
    }),
    secondaryOutline: (props) => ({
      bg: "transparent",
      border: '1px solid',
      borderColor: mode(whiten("secondary", 0), darken("secondary", 10))(props),
      color: mode(whiten("secondary", 0), darken("secondary", 10))(props),
      _hover: {
        boxShadow: 'md',
        transform: "scale(1.02)",
      }
    }),
    tertiary: (props) => ({
      bg: mode(whiten("tertiary", 0), darken("tertiary", 10))(props),
      color: mode("stroke", "main")(props),
      _hover: {
        bg: mode(darken("tertiary", 20), whiten('tertiary', 20))(props),
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }
    })
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  }
}