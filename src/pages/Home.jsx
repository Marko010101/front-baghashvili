import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header.jsx";
import { getData } from "../service/api.js";
import Loader from "../components/ui/Loader.jsx";
import Card from "../components/Card.jsx";
import Row from "../components/ui/Row.jsx";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const dataRes = await getData();
        setData(dataRes);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Row type="horizontal">Error: {error}</Row>;

  // console.log(data);
  return (
    <div>
      
      <Header />
      <StyledMain>
        <StyledRow type="horizontal">
          {data.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </StyledRow>
      </StyledMain>
    </div>
  );
};

export default Home;

const StyledMain = styled.main`
  margin: 1rem auto 16rem;
  max-width: 116rem;

  @media (max-width: 1600px) {
    margin: 1rem 22rem 16rem;
  }
  @media (max-width: 1024px) {
    margin: 1rem 15rem 16rem;
  }
  @media (max-width: 768px) {
    margin: 1rem 2rem 16rem;
  }
`;

const StyledRow = styled(Row)`
  flex-wrap: wrap;
  align-items: start;
  /* height: 48.9rem; */
  column-gap: 4rem;
  row-gap: 4.8rem;

  & > * {
    flex: 1 1 calc(33.333% - 4rem);
  }

  @media (max-width: 1024px) {
    column-gap: 2rem;
    row-gap: 3.5rem;

    & > * {
      flex: 1 1 calc(50% - 3rem);
    }
  }

  @media (max-width: 768px) {
    row-gap: 3.2rem;
    column-gap: 1rem;

    & > * {
      flex: 1 1 100%;
    }
  }
`;
