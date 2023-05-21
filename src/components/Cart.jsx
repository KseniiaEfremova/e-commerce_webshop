import React from 'react';
import styles from '../styles/cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const crossBtn = <FontAwesomeIcon icon={faXmark} />
const trashBtn = <FontAwesomeIcon icon={faTrashCan} />

export default function Cart({ onCloseCart,onRemoveFromCart, products = [] }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <h3>Shopping bag
                    <span onClick={onCloseCart} >{crossBtn}</span>
                </h3>
                <div className={styles.cartItems}>
                    {products.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            {/* <img src={require(item.url)} alt="trainers" /> */}
                            <div>
                                <p>
                                    {item.name}
                                </p>
                                <b>£ {item.price}</b>
                            </div>
                            <span onClick={() => onRemoveFromCart(item.id)}>{trashBtn}</span>
                        </div>
                    ))}


                </div>
                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>£ 312</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>£ 15.6</b>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>
                        Checkout
                    </button>
                </div>
            </div>

        </div>
    )
}