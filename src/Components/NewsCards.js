import React from "react";
import { Card } from "react-bootstrap";

const NewsCards = ({
  title,
  description,
  category,
  language,
  author,
  link,
}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-2">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{language}</Card.Text>
          <Card.Text>{author}</Card.Text>

          <Card.Text className="card-description">{description}</Card.Text>
          <a className="btn btn-success" href={link} target="blank">
            Go To NEWS
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCards;
