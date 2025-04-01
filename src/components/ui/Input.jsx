import { useState, useRef, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";

import Search from "../../assets/Search.svg?react";
import Close from "../../assets/Close.svg?react";

import { SearchContext } from "../../context/SearchContext.jsx";
import Row from "../ui/Row.jsx";

const Input = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { query, setQuery } = useContext(SearchContext);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        if (!query) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [query]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCloseInput = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <SearchContainer ref={inputRef}>
      {isOpen ? (
        <>
          <SearchInput
            ref={inputRef}
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <StyledClose as="span" onClick={() => handleCloseInput()}>
            <Close />
          </StyledClose>
        </>
      ) : (
        <Row as="button" type="horizontal" onClick={() => setIsOpen(true)} aria-label="Search">
          <Search />
        </Row>
      )}
    </SearchContainer>
  );
};

export default Input;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(2rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchInput = styled.input`
  padding: 0.3rem 2rem 0.3rem 1rem;
  border: 1px solid var(--color-light-gray);
  border-radius: 0.4rem;
  outline: none;
  width: 20rem;
  animation: ${fadeIn} 0.2s ease-out forwards;
  transition: all 0.3s ease;
  color: var(--color-slate);
  font-size: var(--font-size-micro);

  &:focus {
    border-color: var(--color-medium-gray);
    box-shadow: 0 0 0 1px var(--color-medium-gray);
  }

  &::placeholder {
    color: var(--color-medium-gray);
    font-size: var(--font-size-micro);
  }

  @media (max-width: 768px) {
    width: 13rem;
    padding: 0.3rem 1.5rem 0.3rem 0.5rem;
    font-size: var(--font-size-nano);

    &::placeholder {
      font-size: var(--font-size-nano);
      padding-top: 0.4rem;
    }
  }
`;

const StyledClose = styled.span`
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;

  cursor: pointer;
  & > svg {
    opacity: 0.6;
    width: 1.1rem;
    height: 1.1rem;
    color: var(--color-light-gray);
  }
  @media (max-width: 768px) {
    top: 0.3rem;
    right: 0.35rem;
    & > svg {
      width: 0.85rem;
      height: 0.85rem;
    }
  }
`;
