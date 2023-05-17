import React from "react";
import '../styles/categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      <h1>OUR PRODUCTS</h1>
      <div className="grid-box">
        <div className="category grid-item1">
          <figure>
            <a href="/">
              <img src={require("../img/bg-clothing.jpg")} alt="bg-clothing img-category" />
            </a>
            <figcaption>
              <a href="/">
                <h4>Activewear</h4>
                <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item2">
          <figure>
            <a href="/"><img src={require("../img/bg-home.jpg")} alt="bg-home img-category" /></a>
            <figcaption>
              <a href="/">
                <h4>Bed & Bath</h4>
                <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item3">
          <figure>
            <a href="/"><img src={require("../img/bg-accessories.jpg")} alt="bg-accessories img-category" /></a>
            <figcaption>
              <a href="/">
                <h4>Clearance</h4>
                <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
              </a>

            </figcaption>
          </figure>
        </div>
        <div className="category grid-item4">
          <figure>
            <a href="/"><img src={require("../img/bg-tech.png")} alt="bg-tech img-category" /></a>
            <figcaption>
              <a href="/">
                <h4>Deals</h4>
                <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item5">
          <figure>
            <a href="/">
              <img src={require("../img/Essentials")} alt="Essentials img-category" />
            </a>
            <figcaption>
              <a href="/">
                <h4>Essentials</h4>
                <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="category grid-item6">
          <figure>
            <a href="/">
              <img src={require("../img/Arrivals.jpg")}alt="Arrivals img-category" />
            </a>
            <figcaption>
              <a href="/">
                <h4>New Arrivals</h4>
                <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Categories;
