import React from "react";
import CollectionItem from "./CollectionItem";
import styles from "./home.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Collection = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


 const product = props.data.map(item => (
  <CollectionItem key={item.pk.id}
            name={item.fields.name} 
            url={item.fields.image_url} 
            description={item.fields.description} />
 ))

  return (
    <div className={styles.collection}>
      <h1>FROM THE COLLECTION</h1>
      <div className={styles.productItems}>
        <Carousel responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default Collection;
