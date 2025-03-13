import React from "react";
import Slider from "./Slider";  // ✅ Correct import
import styles from "../Bannerslider.module.css";

const list = [
  "https://beta.fnp.com/assets/images/custom/flowers_24/hero/blooms-25-9-24.png",
  "https://beta.fnp.com/assets/images/custom/flowers_24/hero/blooms-25-9-24.png",
  "https://beta.fnp.com/assets/images/custom/flowers_24/hero/blooms-25-9-24.png",
  "https://beta.fnp.com/assets/images/custom/flowers_24/hero/blooms-25-9-24.png",
];

const optionsMain = {
  type: "slide",
  perPage: 1,
  perMove: 1,
  arrows: true,
  autoPlay: false,
  pagination: false,
  width: "100%",
};

function Bannerslider() {
  return (
    <section className={`${styles.Bannerslider} flex w-[100%] items-center justify-center mt-5`}>
      <div className="w-[90%]">
        <Slider list={list} options={optionsMain} />
      </div>
    </section>
  );
}

export default Bannerslider;
