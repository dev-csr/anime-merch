import React from "react";

function SliderContent({ currentIndex, sliderImage }) {
  return (
    <div className="slider__content">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slides active" : "inactive"}
        >
          <div>
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-text">{slide.description}</h3>
          </div>

          <img className="slide-image" src={slide.urls} alt="" />
        </div>
      ))}
    </div>
  );
}

export default SliderContent;
