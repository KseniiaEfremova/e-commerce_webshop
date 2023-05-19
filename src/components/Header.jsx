import React from 'react';
import styles from '../styles/header.module.scss';
import unlikedHeart from '../img/heart.svg';
import cart from '../img/cart.svg';


export default function Header(props) {
    return (
        <header>
            <nav className={styles.navbar}>
                <h1>FLOOM</h1>
                <ul>
                    <li>HOME</li>
                    <li>OUR PRODUCTS</li>
                    <li>CONTACT US</li>
                </ul>
                <span>
                    <img src={unlikedHeart} alt="unliked heart" />
                    <img onClick={props.onClickCart} src={cart} alt="unliked heart" />
                </span>
            </nav>
        </header>
    )
}