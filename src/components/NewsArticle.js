import React from "react";
import Card from "react-bootstrap/Card";

function NewsArticle({ data }) {
  return (
    <>
      <Card className="bg-light text-black">
        <Card.Img src={data.urlToImage} alt="Card image" />

        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text style={{ color: "red" }}>{data.author}</Card.Text>
        <Card.Text>{data.publishedAt}</Card.Text>
      </Card>
    </>
  );
}

export default NewsArticle;
