import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Articles";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios
        .get(
          ` http://newsapi.org/v2/everything?q=ai&apiKey=9000c3e3f0c4432ca2175a1319fcc7f4`
        )
        .then((res) => {
          console.log(res.data);
          setArticles(res.data.articles);

          setLoading(false);
        });
    };
    getArticles();
  }, []);

  //   console.log(JSON.stringify(articles));

  return (
    <div>
      <Article loading={loading} articles={articles} />
      <ul>
        {articles.map((art) => (
          <Article key={art.id} img={art.urlToImage} />
        ))}
      </ul>
    </div>
  );
};

export default News;
