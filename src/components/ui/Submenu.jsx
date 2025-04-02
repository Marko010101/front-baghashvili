import React from "react";
import styled from "styled-components";

import ArrowRight from "../../assets/ArrowRight.svg?react";
import Row from "./Row.jsx";
import { Link } from "react-router-dom";

const Submenu = ({ item }) => {
  return (
    <StyledSubmenu>
      {item.submenu.map((subItem, subIndex) => (
        <SubmenuItem key={subIndex}>
          <SubmenuLink as={subItem.href ? Link : "button"} href={subItem.href}>
            <span>{subItem.label}</span>
            {subItem.submenu && <Row as={ArrowRight} />}
          </SubmenuLink>

          {subItem.submenu && (
            <NestedSubmenu>
              {subItem.submenu.map((nestedItem, nestedIndex) => (
                <SubmenuItem key={nestedIndex}>
                  <SubmenuLink as={nestedItem.href ? "a" : "button"} href={nestedItem.href}>
                    <span> {nestedItem.label}</span>
                  </SubmenuLink>
                </SubmenuItem>
              ))}
            </NestedSubmenu>
          )}
        </SubmenuItem>
      ))}
    </StyledSubmenu>
  );
};

export default Submenu;

const StyledSubmenu = styled.ul`
  cursor: auto;
  display: none;
  position: absolute;
  top: 3.6rem;
  left: 8.5rem;
  transform: translateX(-50%);
  padding: 2rem;
  width: 17.6rem;
  z-index: 100;
  border: 1px solid var(--color-light-gray);
  background-color: var(--color-white);

  @media (max-width: 768px) {
    position: sticky;
    top: 1rem;
    left: 10.8rem;
  }
`;

const SubmenuItem = styled.li`
  position: relative;
  padding: 0.8rem 0;
  font-size: var(--font-size-mini);

  &:first-child {
    padding-bottom: 0.8rem;
    padding-top: 0;
  }

  &:last-child {
    padding-top: 0.8rem;
    padding-bottom: 0;
  }

  &:not(:first-child):not(:last-child) {
    padding: 0.8rem 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-light-gray);
  }

  &:hover > ul {
    display: block;
  }
`;

const SubmenuLink = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  line-height: 100%;

  &:hover {
    & > span {
      padding-left: 0.8rem;
      color: var(--color-medium-gray);
    }
  }
`;

const NestedSubmenu = styled.ul`
  cursor: auto;
  display: none;
  position: absolute;
  background-color: var(--color-white);
  left: 99%;
  top: 1rem;
  border: 1px solid var(--color-light-gray);
  padding: 2rem;
  min-width: 17.6rem;
  margin: 0;
`;
