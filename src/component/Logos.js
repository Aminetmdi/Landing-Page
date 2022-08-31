import React from 'react';
import styles from "./Logos.module.css";
import Apple from "../images/Apple.png"; 
import Xiamo from "../images/Xiamo.png"; 
import Samsung from "../images/Samsung.png"; 

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who support us ?</h3>
            <img alt='logo' src={Apple} />
            <img alt='logo' src={Xiamo}/>
            <img alt='logo' src={Samsung}/>
        </div>
    );
};

export default Logos;