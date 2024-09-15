import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
// import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1;

function ImageSlider(props) {
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex(currentIndex === len ? 0 : currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <SliderContent currentIndex={currentIndex} sliderImage={sliderImage} />
      <div>
        {/* <Arrows
          prevSlide={() =>
            setcurrentIndex(currentIndex < 1 ? len : currentIndex - 1)
          }
          nextSlide={() =>
            setcurrentIndex(currentIndex === len ? 0 : currentIndex + 1)
          }
        /> */}
        <Dots
          currentIndex={currentIndex}
          sliderImage={sliderImage}
          onclick={(currentIndex) => setcurrentIndex(currentIndex)}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
