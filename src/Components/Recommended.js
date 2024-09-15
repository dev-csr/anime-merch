import React, { useState, useRef } from "react";
import styled from "styled-components";
import Collection from "./Collection";
import "./Components.css";
import FigurineCollection from "./FigurineCollection";
import ApperalCollection from "./ApperalCollection";
import Rating from "./Rating";
const Recommended = () => {
  const [managerate, setManageRate] = useState(Collection.map(() => 0));
  const [figurineRate, setFigurineRate] = useState(
    FigurineCollection.map(() => 0)
  );
  const [apparelRate, setApperalRate] = useState(
    ApperalCollection.map(() => 0)
  );
  const SlideRef = useRef(null);
  // const SlideLeft = () => {
  //   SlideRef.current.scrollLeft -= SlideRef.current.offsetWidth;
  // };
  // const SlideRight = () => {
  //   SlideRef.current.scrollLeft += SlideRef.current.offsetWidth;
  // };
  const handlemangarate = (index, newRate) => {
    const newManagerate = [...managerate];
    newManagerate[index] = newRate;
    setManageRate(newManagerate);
  };
  const handlefigurinerate = (i, newRate) => {
    const newFigurineRate = [...figurineRate];
    newFigurineRate[i] = newRate;
    setFigurineRate(newFigurineRate);
  };
  const handleapperalrate = (i, newRate) => {
    const newApperalRate = [...apparelRate];
    newApperalRate[i] = newRate;
    setApperalRate(newApperalRate);
  };
  return (
    <div>
      <Heading>Manga Recommendations</Heading>

      {/* <ArrowButton onClick={SlideLeft}>&lt;</ArrowButton> */}
      <Item ref={SlideRef}>
        {Collection.map((item, index) => (
          <div key={index}>
            <img src={item.url} alt={item.name} />
            <TextContainer>
              <p>{item.title}</p>
              <Hr />
              <p className="price">
                <span>Price:</span>
                {item.price}
              </p>
              <Hr />
              <p>
                <Rating
                  rate={managerate[index]}
                  setRate={(newRate) => handlemangarate(index, newRate)}
                />
              </p>
            </TextContainer>
          </div>
        ))}
      </Item>
      {/* <ArrowButton onClick={SlideRight}>&gt;</ArrowButton> */}
      <Heading>Figurine Recommendations</Heading>
      <Item>
        {FigurineCollection.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <TextContainer>
                <p>{item.name}</p>
                <Hr />
                <p className="price">
                  <span>Price:</span>
                  {item.price}
                </p>
                <Hr />
                <p>
                  <Rating
                    rate={figurineRate[item.id]}
                    setRate={(newRate) => handlefigurinerate(item.id, newRate)}
                  />
                </p>
              </TextContainer>
            </div>
          );
        })}
      </Item>
      <Heading>Apperal Recommendations</Heading>
      <Item>
        {ApperalCollection.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <TextContainer>
                <p>{item.title}</p>
                <Hr />
                <p className="price">
                  <span>Price:</span>
                  {item.price}
                </p>
                <Hr />
                <p>
                  <Rating
                    rate={apparelRate[item.id]}
                    setRate={(newRate) => handleapperalrate(item.id, newRate)}
                  />
                </p>
              </TextContainer>
            </div>
          );
        })}
      </Item>
    </div>
  );
};

const Heading = styled.h2`
  justify-content: left;
  text-align: left;
  margin: 10px;
  font-size: 30px;
  color: white;
`;
const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 25px;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  &: first-of-type {
    left: 0;
  }
  &: last-of-type {
    right: 0;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 5px;
  margin: 1px;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1px;

  p {
    font-size: 16px;
    color: white;
    margin: 3px;
    padding: 0;
    text-align: right;
  }
  .price {
    font-size: 14px;
    color: white;
    margin: 3px;
    padding: 0;
    text-align: right;
  }
`;

const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid white;
  margin: 5px 0;
`;

export default Recommended;
