import React from "react";
import { createRoot } from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Article from "./components/Article";
import browsersData from "./data/browsers.json";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header title="Borwsers" />
    <Navigation />
    <Section browsers={browsersData} />
    <Footer />
  </>
);
