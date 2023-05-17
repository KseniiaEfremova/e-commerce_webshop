import React from 'react';
import '../styles/header.scss';
import unlikedHeart from '../img/heart.svg';
import cart from '../img/cart.svg';


export default function Header() {
    return (
        <header>
            <nav className='navbar'>
                <h1>FLOOM</h1>
                <ul>
                    <li>HOME</li>
                    <li>OUR PRODUCTS</li>
                    <li>CONTACT US</li>
                </ul>
                <span>
                    <a href="/"><img src={unlikedHeart} alt="unliked heart" /></a>
                    <a href="/"><img src={cart} alt="unliked heart" /></a>
                </span>
            </nav>
        </header>
    )
}