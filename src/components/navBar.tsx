import styled from "@emotion/styled";
import { LinkItem } from "./linkedItem";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 68px;

  a:hover {
    color: teal;
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <LinkItem href="#">Val Codes</LinkItem>
      <LinkItem href="#">Home</LinkItem>
      <LinkItem href="#">Work</LinkItem>
      <LinkItem href="#">Projects</LinkItem>
      <LinkItem href="#">Contact</LinkItem>
    </Nav>
  );
};
