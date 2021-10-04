import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NewsCards from "../Components/NewsCards";
import { FetchData } from "../Utils/Functions";

const Headlines = () => {
  const dispatch = useDispatch();
  const { FetchNews } = useSelector((state) => state);

  useEffect(() => {
    const a = FetchData("v2/top-headlines?country=us&", dispatch, "articles");
    console.log(a);
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default Headlines;
