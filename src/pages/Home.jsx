import styled from "styled-components";
import Header from "../components/Header.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <StyledMain>MAIN PART</StyledMain>
    </div>
  );
};

export default Home;

const StyledMain = styled.main`
  height: 600rem;
`;
