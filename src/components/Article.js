import React from "react";

const Article = ({ browser }) => (
  <article>
    <h2>{browser.name}</h2>
    <img
      src={browser.logo}
      alt={`${browser.name} logo`}
      width={"50px"}
      height={"50px"}
    />
    <p>{browser.description}</p>
  </article>
);
export default Article;
