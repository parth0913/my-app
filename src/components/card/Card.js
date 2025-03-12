import React from "react";
import styles from "./Card.module.css";

export default function Card({type="rounded", imgSrc, title, text, btnText, btnLink }) {
  const cardClass = styles[type] ? `${styles[type]}` : styles.card;
  return (
    <div className={cardClass} >
        <a href={btnLink} className="card-link" style={{ textDecoration: "none", color: "inherit" }}>      
            <img src={imgSrc} className="card-img-top" alt={title} />
            <p className={styles.cardText}>{text}</p>           
        </a>
    </div>
    
  );
}
