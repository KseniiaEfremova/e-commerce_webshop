import React from 'react'
import item from "../../img/hero-trainers.jpg";
import styles from "./home.module.scss";


const Hero = () => {
  return (
    <main className={styles.flexWrapper}>
      <div className={styles.textBox}>
        <h2>Great style with a bad attitude.</h2>
        <p>Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
        </p>
        <button>SHOP NOW</button>
      </div>
      <div className={styles.heroImage}>
        <p>New Balance Casablanca 327</p>
        <img src={item} alt="" />
      </div>
    </main>

  )
}

export default Hero;
