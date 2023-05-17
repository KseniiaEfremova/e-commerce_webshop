import React from "react";
import Hero from "./Hero";
import "../styles/home.scss";
import Collection from "./Collection";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Categories />
    </>
  );
};

export default Home;
