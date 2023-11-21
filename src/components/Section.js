import React from "react";
import Article from "./Article";

const Section = ({ browsers }) => (
  <section>
    {browsers.map((browser) => (
      <Article browser={browser} />
    ))}
  </section>
);

export default Section;
