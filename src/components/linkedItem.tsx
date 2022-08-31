import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface LinkItemProps {
  href: string;
  children: string;
}

export const LinkItem = ({ href, children, ...props }: LinkItemProps) => {
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href} passHref>
      <Link p={2} bg={undefined} color={inactiveColor} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};
