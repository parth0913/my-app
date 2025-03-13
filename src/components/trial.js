import React from "react";
import Card from "./card/Card";  
import './general.css';

// ✅ Correcting the data structure
export const homePage = {
  Explore: [
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "This is the first section.",
      anchor: "/explore"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "This is the second section.",
      anchor: "/learn-more"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "This is the third section.",
      anchor: "/shop"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "This is the third section.",
      anchor: "/shop"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "This is the third section.",
      anchor: "/shop"
    },
    {
      imgSrc: "/images/Orchids-25-9-24 (1).png",
      text: "This is the third section.",
      anchor: "/shop"
    },
  ]
};

export default function CardSection() {
  return (
    <>
      <h1 className="heading">Explore Our Exquisite Range</h1>
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
