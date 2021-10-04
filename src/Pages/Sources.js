import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FetchData } from "../Utils/Functions";
import loader from "../assets/loader.svg";

import { Col, Container, Row } from "react-bootstrap";
import NewsCards from "../Components/NewsCards";
const Sources = () => {
  const dispatch = useDispatch();
  const { FetchNews } = useSelector((state) => state);

  useEffect(() => {
    FetchData("v2/top-headlines/sources?", dispatch, "sources");
  }, []);
  if (FetchNews.loading) {
    return (
      <div className="d-flex justify-content-center">
        <img src={loader} alt="loader" />
      </div>
    );
  }
  return (
    <Container>
      <Row>
        {React.Children.toArray(
          FetchNews.data.map(
            ({ category, country, description, language, url, name }) => {
              return (
                <Col>
                  <NewsCards
                    category={category}
                    country={country}
                    description={description}
                    author={name}
                    link={url}
                    language={language}
                  />
                </Col>
              );
            }
          )
        )}
      </Row>
    </Container>
  );
};

export default Sources;
