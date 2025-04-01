import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: center;
      align-items: center;
    `}
  ${(props) =>
    props.type === "horizontal-between" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `}
`;

Row.defaultProps = {
  type: "horizontal",
};

export default Row;
