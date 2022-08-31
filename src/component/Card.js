import React, { Component } from 'react';
import styles from "./Card.module.css"
class Card extends Component {
    render() {
        const  {image , name , price} = this.props ;
        return (
            <div className={styles.container}>
                <img alt='' src={image}/>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        );
    }
}

export default Card;