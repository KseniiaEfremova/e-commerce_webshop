import React from "react";

const CollectionItem = (props) => {
  return (
    <div key={props.id} className="product-item">
      <img
        src={props.url}
        alt="the product item with description"
      />
      <h3>{props.name}</h3>
      <p>
        {props.description}
      </p>
      <button>VIEW ITEM</button>
    </div>
  );
};

export default CollectionItem;
