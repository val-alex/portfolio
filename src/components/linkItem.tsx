import { Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export const LinkItem = ({
  icon,
  href = "#",
  isExternal = false,
  children,
}: {
  icon?: IconType;
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
        {icon ? <Icon as={icon} /> : null}
        {children}
      </>
    </Link>
  </NextLink>
);
