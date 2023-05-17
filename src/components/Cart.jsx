import React from 'react';
import '../styles/cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const crossBtn = <FontAwesomeIcon icon={faXmark} />
const trashBtn = <FontAwesomeIcon icon={faTrashCan} />

export default function Cart() {
    return (

        <div className='overlay' style={{display:'none'}}>
            <div className='cart'>
                <h3>Shopping bag
                    <span>{crossBtn}</span>
                </h3>
                <div className="cartItems">
                    <div className="cartItem">
                        <img src={require("../img/hero-trainers.jpg")} alt="trainers" />
                        <div>
                            <p>
                                New Balance Casablanca 327
                            </p>
                            <b>£ 156</b>
                        </div>
                        <span>{trashBtn}</span>
                    </div>
                    <div className="cartItem">
                        <img src={require("../img/hero-trainers.jpg")} alt="trainers" />
                        <div>
                            <p>
                                New Balance Casablanca 327
                            </p>
                            <b>£ 156</b>
                        </div>
                        <span>{trashBtn}</span>
                    </div>
                </div>
                <div className="cartTotalBlock">
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
                    <button className='greenButton'>
                        Checkout
                    </button>
                </div>
            </div>

        </div>
    )
}