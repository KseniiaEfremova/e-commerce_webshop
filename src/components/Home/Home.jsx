import React from "react";
import Hero from "./Hero";
import Collection from "./Collection";
import Categories from "./Categories";


const Home = (props) => {
  return (
    <>
      <Hero />
      <Collection data={props.data}/>
      <Categories />
    </>
  );
};

export default Home;
