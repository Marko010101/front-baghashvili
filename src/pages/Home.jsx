import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header.jsx";
import { getData } from "../service/api.js";
import Loader from "../components/ui/Loader.jsx";
import Card from "../components/Card.jsx";
import Row from "../components/ui/Row.jsx";
import { SearchContext } from "../context/SearchContext.jsx";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { query } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const dataRes = await getData();
        setData(dataRes);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (!query) return data;

    const lowerCaseQuery = query.toLowerCase();
    return data.filter((item) => {
      return item.title.toLowerCase().includes(lowerCaseQuery) || item.text.toLowerCase().includes(lowerCaseQuery);
    });
  }, [data, query]);

  if (isLoading) return <Loader />;
  if (error) return <Row type="horizontal">Error: {error}</Row>;

  return (
    <div>
      <Header />
      <StyledMain>
        <StyledRow type="horizontal">
          {filteredData.length > 0 ? (
            filteredData.map((item) => <Card key={`${item.title}-${item.date}`} item={item} />)
          ) : (
            <Row type="horizontal">{query ? `No results found for "${query}"` : "No posts available"}</Row>
          )}
        </StyledRow>
      </StyledMain>
    </div>
  );
};

export default Home;

const StyledMain = styled.main`
  margin: 3rem auto 16rem;
  max-width: 116rem;

  @media (max-width: 1600px) {
    margin: 3rem 20rem 16rem;
  }
  @media (max-width: 1024px) {
    margin: 2rem 15rem 16rem;
  }
  @media (max-width: 768px) {
    margin: 1.8rem 2rem 16rem;
  }
`;

const StyledRow = styled(Row)`
  flex-wrap: wrap;
  align-items: start;
  column-gap: 40px;
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
