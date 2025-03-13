import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Slider({ list, options, borderRadius, link }) {
  return (
    <Splide options={options} className="w-full">
      {list.map((image, index) => (
        <SplideSlide key={index}>
          <a href={link}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full ${borderRadius}`}
            />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Slider;
