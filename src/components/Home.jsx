import React from "react";
import Hero from "./Hero";
import "../styles/home.css";
import Collection from "./Collection";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Collection />
      <section>
        <Categories />
      </section>
      <Footer />
    </>
  );
};

export default Home;
