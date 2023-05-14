import React from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const heart = <FontAwesomeIcon icon={faHeart} />
const cart = <FontAwesomeIcon icon={faCartShopping} />;

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
                    <a href="/">{heart}</a>
                    <a href="/">{cart}</a>
                </span>
            </nav>
        </header>
    )
}