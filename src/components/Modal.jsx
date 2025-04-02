// components/Modal.jsx
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Close from "../assets/Close.svg?react";
import Row from "./ui/Row.jsx";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <ModalOverlay type="horizontal" onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton type="horizontal" as="button" onClick={onClose}>
          <Close />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

const ModalOverlay = styled(Row)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(45, 45, 45, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--color-light-gray);
  padding: 2rem 2rem 2rem 1rem;
  border-radius: 0.5rem;
  max-width: 116rem;
  width: 80vw;
  max-height: 90vh;
  min-width: 30rem;
  overflow-y: auto;
  position: relative;
  @media (max-width: 1024px) {
    padding: 3rem 2rem 2rem 2rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    width: 85vw;
  }
`;

const CloseButton = styled(Row)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem;
  opacity: 0.7;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 1024px) {
    top: 0.5rem;
    right: 0.5rem;
    & svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    & svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export default Modal;
