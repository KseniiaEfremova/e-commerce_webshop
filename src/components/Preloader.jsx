import React from "react";
import preloader from '../img/preloader.svg';
import '../App.css';

let Preloader = (props) => {
    return <div className='preloader'>
        <img src={preloader} alt='loader' height='100px'/>
    </div>
}

export default Preloader;