import React from "react";

function Dots({ currentIndex, onclick, sliderImage }) {
  return (
    <div className="dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${currentIndex === index ? "dot dot-active" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
