import React from 'react';
import styles from './Banner.module.css'
import BannerHead from '../images/cart_4.jpg'

const Banner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.bannerImg} alt=''  src={BannerHead}/>
        </div>
    );
};

export default Banner;