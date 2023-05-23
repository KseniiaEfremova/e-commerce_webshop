import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.scss';
import unlikedHeart from '../img/heart.svg';
import cart from '../img/cart.svg';



export default function Header(props) {
  return (
    <header>
      <nav className={styles.navbar}>
        {/* <h1>FLOOM</h1> */}
        <ul>
          <li><h1>FLOOM</h1></li>
          <Link to='/home'>
            <li>HOME</li>
          </Link>
          <Link to='/products'>
            <li>OUR PRODUCTS</li>
          </Link>
        </ul>
        <span>
          <Link to='/favorites'>
            <img src={unlikedHeart} alt="unliked heart" />
          </Link>

          <img onClick={props.onClickCart} src={cart} alt="cart" />
        </span>
      </nav>
    </header>
  )
}