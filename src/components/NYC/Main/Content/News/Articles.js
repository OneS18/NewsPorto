import React from "react";
import "./article.scss";

const Article = (props) => {
  return (
    <div className="box">
      <img className="newspics" src={props.img} alt="" />
    </div>
  );
};

export default Article;
