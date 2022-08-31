import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import iphone from "../images/22.jpg" ;
import Xiamo from "../images/44.jpg" ;
import samsung from "../images/55.jpg" ;
import Xiamo2 from "../images/66.jpg" ;
class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphone}  name="Iphone 13Pro Max" price="1299 $"/>
                <Card image={Xiamo}  name="Xiamo Redmi Note 11" price="999 $"/>
                <Card image={samsung}  name="Samsung S21 Ultra" price="1200 $"/>
                <Card image={Xiamo2}  name="Xiamo M248 2022" price="799 $"/>
            </div>
        );
    }
}

export default Cards;