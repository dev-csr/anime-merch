import React from "react";

const Rating = ({ rate, setRate }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="start"
            style={{
              cursor: "pointer",
              color: star <= rate ? "gold" : "grey",
              fontSize: "15px",
            }}
            onClick={() => setRate(star)}
          >
            {""}&#9733;{""}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
