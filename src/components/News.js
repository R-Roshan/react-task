import React, { useContext } from "react";
// import Cards from "../Cards";
import { NewsContext } from "../NewsApi";
import NewsArticle from "./NewsArticle";

import Row from "react-bootstrap/Row";

function News() {
  const { data } = useContext(NewsContext);

  console.log(data);
  return (
    <Row xs={1} md={3} className="g-4">
      {data
        ? data.articles.map((news) => (
            <>
              <NewsArticle data={news} key={news.url} />
            </>
          ))
        : "Loading"}
    </Row>
  );
}

export default News;
