// components/Header.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuSvg from "../assets/Menu.svg?react";
import Logo from "../assets/Logotype.png";
import useDeviceType from "../hooks/useDeviceType";
import Menu from "./Menu.jsx";
import Input from "./ui/Input.jsx";
import MobileMenu from "./ui/MobileMenu.jsx";

const Header = () => {
  const device = useDeviceType();
  const SmallScreen = device === "tablet" || device === "mobile";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY);
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <StyledHeader $isHidden={isHidden}>
        <LogoAndSearch>
          {SmallScreen && (
            <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
              <MenuSvg />
            </MenuButton>
          )}
          <LogoImage src={Logo} alt="Company Logo" />
          <SearchContainer>
            <Input />
          </SearchContainer>
        </LogoAndSearch>
        {!SmallScreen && <Menu />}
      </StyledHeader>

      {SmallScreen && (
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu}>
          <Menu />
        </MobileMenu>
      )}
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background-color: var(--color-white);
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isHidden }) => ($isHidden ? "translateY(-100%)" : "translateY(0)")};
`;

const LogoAndSearch = styled.div`
  width: 100%;
  max-width: 116rem;
  margin: 0 auto;
  display: grid;
  align-items: center;
  padding: 2.9rem 0 2.55rem;
  grid-template-columns: 1fr auto 1fr;

  @media (max-width: 1600px) {
    gap: 1rem;
    padding: 2.9rem 2rem 2.55rem;
  }
  @media (max-width: 1024px) {
    gap: 1rem;
    padding: 3.2rem 2rem 2rem 2rem;
  }
`;

const LogoImage = styled.img`
  grid-column: 2;

  @media (max-width: 768px) {
    width: 16.3rem;
    justify-self: center;
  }
`;

const SearchContainer = styled.div`
  grid-column: 3;
  justify-self: end;
`;

const MenuButton = styled.button`
  grid-column: 1;
  background: none;
  border: none;
  cursor: pointer;
  width: max-content;
  padding: 0;
`;
