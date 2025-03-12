import React from "react";
import Card from "./card/Card";  
import './general.css';

export default function CardSection() {
  return (
    <>
    <h1 className="heading">Card Section</h1>
    <div className="flex">

      <Card      
        imgSrc="../images/Orchids-25-9-24 (1).png" 
        title="Welcome to Section 1" 
        text="This is the first section." 
        btnText="Explore" 
        btnLink="/explore" 
      />

      <Card 
    //   type="test1"
        imgSrc="../images/Orchids-25-9-24 (1).png" 
        title="Discover More" 
        text="This is another section." 
        btnText="Learn More" 
        btnLink="/learn-more" 
      />

      <Card 
      type="test2"
        imgSrc="../images/Orchids-25-9-24 (1).png" 
        title="Special Deals" 
        text="Check out our latest deals." 
        btnText="Shop Now" 
        btnLink="/shop" 
      />
    </div>
    </>
  );
}
