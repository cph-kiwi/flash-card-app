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
          <NavLink href="/blank">Blank</NavLink>
          <NavLink href="/blank">Blank</NavLink>
          <NavLink href="/blank">Blank</NavLink>
        </Nav>
      </Side>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.gray[300]};
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const Logo = styled.h3``;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
`;

export default Header;
