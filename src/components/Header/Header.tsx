import React from "react";
import { COLORS, WEIGHTS } from "../../constants";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <Side>
        <Logo>Pop Pow</Logo>
      </Side>
      <Side>
        <Nav>
          <NavLink href="/blank">Log in</NavLink>
          <NavLink href="/blank">My decks</NavLink>
          <NavLink href="/blank">Public decks</NavLink>
        </Nav>
      </Side>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  background-color: ${COLORS.gray[100]};
  display: flex;
  // border-bottom: 1px solid ${COLORS.gray[100]};
  align-items: baseline;
  justify-content: space-between;
  padding: 18px 32px;
  height: 72px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

const Side = styled.div`
  //flex: 1;
`;

const Logo = styled.h3`
  color: ${COLORS.primary};
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
`;

export default Header;
