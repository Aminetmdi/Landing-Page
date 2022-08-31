import React from 'react';
import styles from "./Navbar.module.css"
import logo from "../images/Logo.png"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img alt='' className={styles.navbarImg} src={logo} />
            </div>
        </header>
    );
};

export default Navbar;