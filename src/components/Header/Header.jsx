import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <NavIcons>
          <Icon id="search" />
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
          </UnstyledButton>
          <Icon id="shopping-bag" />
        </NavIcons>
        <SideRight />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${({ theme }) => theme.breakpoints.tabletAndBelow} {
    justify-content: space-between;
    padding: 18px 32px;
  }

  @media ${({ theme }) => theme.breakpoints.phoneAndBelow} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, -3rem + 7.5vw, 3rem);
  margin: 0px 48px;

  @media ${({ theme }) => theme.breakpoints.tabletAndBelow} {
    display: none;
  }
`;

const NavIcons = styled.div`
  display: none;
  
  @media ${({ theme }) => theme.breakpoints.tabletAndBelow} {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 32px;
  }

  @media ${({ theme }) => theme.breakpoints.phoneAndBelow} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const SideRight = styled.div`
  flex: 1;

  @media ${({ theme }) => theme.breakpoints.laptopAndBelow} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
