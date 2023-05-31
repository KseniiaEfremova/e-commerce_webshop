import React from 'react';
import styles from '../styles/cart.module.scss';


const Info = ({img, text}) => {
    
    console.log(img)
    return (
        <div>
            <div className={styles.emptyCart}>
                <img src={img} alt="empty-cart" />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Info;
