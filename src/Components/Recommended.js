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
  const SlideRefFigurine = useRef(null);
  const SlideRefApparel = useRef(null);
  const SlideLeft = () => {
    SlideRef.current.scrollLeft -= SlideRef.current.offsetWidth;
  };
  const SlideRight = () => {
    SlideRef.current.scrollLeft += SlideRef.current.offsetWidth;
  };
  const SlideLeftApperal = () => {
    SlideRefApparel.current.scrollLeft -= SlideRefApparel.current.offsetWidth;
  };
  const SlideRightApperal = () => {
    SlideRefApparel.current.scrollLeft += SlideRefApparel.current.offsetWidth;
  };
  const SlideLeftFigurine = () => {
    SlideRefFigurine.current.scrollLeft -= SlideRefFigurine.current.offsetWidth;
  };
  const SlideRightFigurine = () => {
    SlideRefFigurine.current.scrollLeft += SlideRefFigurine.current.offsetWidth;
  };
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
    <div className="recommendations">
      <div className="recommendations-container">
        <div className="allrecommendations-container">
          <div className="arrow-left">
            <div onClick={SlideLeft}>&lt;</div>
          </div>
          <Heading>Manga Recommendations</Heading>
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
          <div className="arrow-right">
            <div onClick={SlideRight}>&gt;</div>
          </div>
        </div>
      </div>

      <div className="recommendations-container">
        <div className="allrecommendations-container">
          <div className="arrow-left">
            <div onClick={SlideLeftFigurine}>&lt;</div>
          </div>
          <Heading>Figurine Recommendations</Heading>
          <Item ref={SlideRefFigurine}>
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
                        setRate={(newRate) =>
                          handlefigurinerate(item.id, newRate)
                        }
                      />
                    </p>
                  </TextContainer>
                </div>
              );
            })}
          </Item>
          <div className="arrow-right">
            <div onClick={SlideRightFigurine}>&gt;</div>
          </div>
        </div>
      </div>
      <div className="recommendations-container">
        <div className="allrecommendations-container">
          <div className="arrow-left">
            <div onClick={SlideLeftApperal}>&lt;</div>
          </div>
          <Heading>Apperal Recommendations</Heading>
          <Item ref={SlideRefApparel}>
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
                        setRate={(newRate) =>
                          handleapperalrate(item.id, newRate)
                        }
                      />
                    </p>
                  </TextContainer>
                </div>
              );
            })}
          </Item>
        </div>
        <div className="arrow-right">
          <div onClick={SlideRightApperal}>&gt;</div>
        </div>
      </div>
    </div>
  );
};

const Heading = styled.h2`
  justify-content: left;
  text-align: left;
  margin: 0;
  top: 0;
  font-size: 30px;
  color: white;
  background-color: #1f0d64;
  padding: 10px;
  padding-left: 50px;
  width: 100%;
`;
// const div = styled.button`
//   background-color: #1f0d64;
//   border: none;
//   color: white;
//   font-size: 25px;
//   padding: 10px;
//   position: relative;
//   cursor: pointer;
//   top: 100px;
//   transform: translateY(-50%);
//   height: 25vh;

//   z-index: 1;
//   &: first-of-type {
//     left: 0;
//   }
//   &: last-of-type {
//     right: 0;
//   }
// `;
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
