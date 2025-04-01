import styled from "styled-components";
import ArrowDown from "../../assets/ArrowDown.svg?react";
import ArrowRight from "../../assets/ArrowRight.svg?react";

export const MenuElement = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  padding: 0;
  color: inherit;
  text-decoration: none;
`;

export const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  transition: transform 0.2s;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  padding-top: 2.15rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2.95rem 2rem 0;
    align-items: start;
    gap: 0;
  }
`;

export const MenuItem = styled.li`
  position: relative;
  padding-bottom: 1.95rem;

  &:hover > ul {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  &:hover ${MenuIcon} {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
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

    &:hover > ul {
      padding: 0.5rem 0 0 1rem;
    }
  }
`;

export const SubmenuContainer = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-white);
  z-index: 100;
  border: 1px solid var(--color-light-gray);
  list-style: none;
  margin: 0;
  padding: 2rem;
  min-width: 17.6rem;

  ${MenuItem}:hover > & {
    display: flex;
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
    border: none;
    padding: 0.5rem 0 0 1rem;
  }
`;

export const NestedSubmenuContainer = styled(SubmenuContainer)`
  position: absolute;
  left: 100%;
  top: 0;
  transform: none;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
  }
`;

export const SubmenuItem = styled.li`
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

  &:hover > ${MenuElement} > span {
    padding-left: 0.8rem;
    color: var(--color-medium-gray);
  }
`;

export const ArrowDownIcon = () => <MenuIcon as={ArrowDown} />;
export const ArrowRightIcon = () => <MenuIcon as={ArrowRight} />;
