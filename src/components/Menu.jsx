import React from "react";
import styled from "styled-components";

import ArrowDown from "../assets/ArrowDown.svg?react";
import Submenu from "./ui/SubMenu.jsx";

import { menuItems } from "../data/menuItems.js";
import Row from "./ui/Row.jsx";

const Menu = () => {
  return (
    <StyledMenu>
      <MenuList as="ul" type="horizontal">
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <MenuElement type="horizontal" as={item.href ? "a" : "button"} href={item.href}>
              {item.label}
              {item.submenu && <ArrowIcon as={ArrowDown} type="horizontal" />}
            </MenuElement>

            {item.submenu && <Submenu item={item} />}
          </MenuItem>
        ))}
      </MenuList>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.nav`
  border-top: 1px solid var(--color-light-gray);
  border-bottom: 1px solid var(--color-light-gray);

  @media (max-width: 768px) {
    border-bottom: none;
  }
`;

const MenuList = styled(Row)`
  gap: 3.2rem;
  padding-top: 2.15rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2.95rem 2rem 0;
    align-items: start;
    gap: 0rem;
  }
`;

const MenuItem = styled.li`
  position: relative;
  padding-bottom: 1.95rem;

  &:hover > ul {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 0rem;
    width: 100%;
    &:first-child {
      padding-bottom: 1.6rem;
      padding-top: 0;
    }

    &:last-child {
      padding-top: 1.6rem;
      padding-bottom: 0;
    }

    &:not(:first-child):not(:last-child) {
      padding: 1.6rem 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-light-gray);
    }
  }
`;

const MenuElement = styled(Row)`
  justify-content: start;
  background: none;
  border: none;
  gap: 0.4rem;
  font-weight: var(--font-weight-medium);
  cursor: pointer;

  &:hover > ul {
    display: block;
  }
`;

const ArrowIcon = styled(Row)`
  transition: transform 0.2s;

  ${MenuItem}:hover & {
    transform: rotate(180deg);
  }
`;
