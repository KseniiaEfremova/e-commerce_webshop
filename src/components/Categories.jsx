import React from "react";
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
              <img src={clothing} alt="bg-clothing img-category" />
            <figcaption>
              <h4>Activewear</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item2">
          <figure>
            <img src={home} alt="bg-home img-category" />
            <figcaption>
              <h4>Bed & Bath</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item3">
          <figure>
            <img src={accessories} alt="bg-clothing img-category" />
            <figcaption>
              <h4>Clearance</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item4">
          <figure>
            <img src={tech} alt="bg-home img-category" />
            <figcaption>
              <h4>Deals</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item5">
          <figure>
            <img src={essentials} alt="bg-home img-category" />
            <figcaption>
              <h4>Essentials</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>

        <div className="category grid-item6">
          <figure>
            <img src={Arrivals} alt="bg-home img-category" />
            <figcaption>
              <h4>New Arrivals</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Categories;
