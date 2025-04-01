import React from "react";
import styled from "styled-components";

import Row from "./ui/Row.jsx";

const Card = ({ item }) => {
  const { autor, date, img, img_2x, tags, text, title, views } = item;

  return (
    <StyledCard type="vertical" as="article">
      <img src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt={`${title} by ${autor}`} loading="lazy" />
      <h3>{tags}</h3>
      <h2>{title}</h2>
      <h4>
        {autor}{" "}
        <span>
          • {date} • {views} views
        </span>
      </h4>
      <p>{text}</p>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled(Row)`
  gap: 1.6rem;
  max-width: 36rem;
  width: 36rem;

  & > img {
    width: 36rem;
    height: 23rem;
    display: block;
    object-fit: cover;
  }

  & > h3 {
    color: var(--color-red);
    font-size: var(--font-size-mini);
    line-height: 100%;
  }
  & > h2 {
    line-height: 3rem;
  }

  & > h4 {
    line-height: 100%;
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-micro);
    & > span {
      font-weight: var(--font-weight-regular);
      color: var(--color-gray);
    }
  }

  & > p {
    color: var(--color-dark-gray);
    font-size: var(--font-size-medium-small);
    line-height: 2rem;
  }
`;
