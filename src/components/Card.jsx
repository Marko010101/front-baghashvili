import React, { useContext, useState } from "react";
import styled from "styled-components";

import Row from "./ui/Row.jsx";
import { SearchContext } from "../context/SearchContext.jsx";
import Modal from "./Modal.jsx";

const Card = ({ item }) => {
  const { autor, date, img, img_2x, tags, text, title, views } = item;
  const { query } = useContext(SearchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlightQuery = (str) => {
    if (!query || !str) return str;

    const regex = new RegExp(`(${query})`, "gi");
    return str.split(regex).map((part, index) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        return <mark key={index}>{part}</mark>;
      }
      return part;
    });
  };

  return (
    <>
      <StyledCard type="vertical" as="article" onClick={() => setIsModalOpen(true)}>
        <img src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt={`${title} by ${autor}`} loading="lazy" />
        <ModalTags>{tags}</ModalTags>
        <ModalTitle>{highlightQuery(title)}</ModalTitle>
        <ModalMeta>
          {autor}{" "}
          <span>
            • {date} • {views} views
          </span>
        </ModalMeta>
        <ModalText>{highlightQuery(text)}</ModalText>
      </StyledCard>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <StyledModal>
            <img src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt={`${title} by ${autor}`} />
            <div>
              <ModalTags>{tags}</ModalTags>
              <ModalTitle>{title}</ModalTitle>
              <ModalMeta>
                {autor}{" "}
                <span>
                  • {date} • {views} views
                </span>
              </ModalMeta>
              <ModalText>{text}</ModalText>
            </div>
          </StyledModal>
        </Modal>
      )}
    </>
  );
};

export default Card;

const StyledModal = styled.div`
  display: flex;
  gap: 2rem;
  & > img {
    width: 100%;
    max-width: 100rem;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 1024px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

const StyledCard = styled(Row)`
  gap: 1.6rem;
  max-width: 36rem;
  width: 36rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 1px 2px var(--color-light-gray);
  }

  & > img {
    width: 36rem;
    height: 23rem;
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  mark {
    background-color: var(--color-yellow);
    /* border-bottom: 1px solid var(--color-yellow); */
    color: inherit;
    border-radius: 0.2rem;
  }
`;

const ModalTags = styled.h3`
  color: var(--color-red);
  font-size: var(--font-size-mini);
  line-height: 100%;
`;

const ModalTitle = styled.h2`
  line-height: 3rem;
`;

const ModalMeta = styled.h4`
  line-height: 100%;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-micro);
  & > span {
    font-weight: var(--font-weight-regular);
    color: var(--color-gray);
  }
`;

const ModalText = styled.p`
  color: var(--color-dark-gray);
  font-size: var(--font-size-medium-small);
  line-height: 2rem;
`;
