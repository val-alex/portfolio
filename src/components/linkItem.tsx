import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactElement, ReactNode } from "react";

export const LinkItem = ({
  icon,
  href = "#",
  isExternal = false,
  children,
}: {
  icon?: ReactElement;
  href?: string | "#";
  isExternal?: boolean;
  children: ReactNode;
}) => (
  <NextLink href={href} passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "underline",
      }}
      isExternal={isExternal}
      textUnderlineOffset={"4px"}
    >
      <>
        {icon ? icon : null}
        {children}
      </>
    </Link>
  </NextLink>
);
