import React from "react";
import Card from "./card/Card";  
import './general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "",
      anchor: "/explore"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "",
      anchor: "/learn-more"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "",
      anchor: "/shop"
    },
  ]
};

export default function CardSection() {
  return (
    <>
      <h1 className="container heading">Explore Our Exquisite Range</h1>
      <div className="container flex gap">
        {homePage.Explore.map((card, index) => (
          <Card
            key={index} 
            type="test1"
            imgSrc={card.imgSrc}
            title={`Section ${index + 1}`}
            text={card.text}
            btnText="Explore"
            btnLink={card.anchor}
          />
        ))}

      </div>
    </>
  );
}
