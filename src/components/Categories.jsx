import React from "react";
import '../styles/categories.css';
import accessories from "../img/bg-accessories.jpg";
import clothing from "../img/bg-clothing.jpg";
import home from "../img/bg-home.jpg";
import tech from "../img/bg-tech.png";
import essentials from "../img/Essentials";
import Arrivals from "../img/Arrivals.jpg";



const Categories = () => {
  return (
    <div className="categories">
      <h1>OUR PRODUCTS</h1>
      <div className="grid-box">
        <div className="category grid-item1">
          <figure>
            <a href="/">
              <img src={clothing} alt="bg-clothing img-category" />
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
            <a href="/"><img src={home} alt="bg-home img-category" /></a>
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
            <a href="/"><img src={accessories} alt="bg-clothing img-category" /></a>
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
            <a href="/"><img src={tech} alt="bg-home img-category" /></a>
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
              <img src={essentials} alt="bg-home img-category" />
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
              <img src={Arrivals} alt="bg-home img-category" />
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
