import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logotype.png";
import Close from "../../assets/Close.svg?react";
import Row from "./Row.jsx";

const MobileMenu = ({ isOpen, onClose, children }) => {
  return (
    <MobileMenuWrapper $isOpen={isOpen}>
      <MobileMenuOverlay $isOpen={isOpen} onClick={onClose} />
      <MobileMenuContainer $isOpen={isOpen}>
        <MenuHeader type="horizontal-between">
          <img src={Logo} alt="Logo" />
          <CloseButton onClick={onClose} />
        </MenuHeader>
        {children}
      </MobileMenuContainer>
    </MobileMenuWrapper>
  );
};

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 999;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

const MobileMenuOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $isOpen }) => ($isOpen ? "var(--color-white)" : "transparent")};
  opacity: ${({ $isOpen }) => ($isOpen ? "0.6" : "0")};
`;

const MenuHeader = styled(Row)`
  padding: 3.2rem 2rem 2.55rem;
`;

const CloseButton = styled(Close)`
  cursor: pointer;
`;

const MobileMenuContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 32rem;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
`;

export default MobileMenu;
