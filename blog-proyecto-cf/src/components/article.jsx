import React from "react";

const Article = ({ articleInfo, className }) => {
  return (
    <div className={className}>
      <img src={articleInfo.cover_image} />
      <div>
        <h3>{articleInfo.title}</h3>
        <a href={articleInfo.url} target="_blank">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default Article