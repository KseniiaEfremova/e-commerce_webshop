import React from "react";
import styles from "./home.module.scss";

const CollectionItem = (props) => {
  return (
    <div key={props.id} className={styles.productItem}>
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
