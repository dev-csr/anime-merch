import React, { useState, useRef } from "react";
import styled from "styled-components";
import Collection from "./Collection";
import "./../Components.css";
import right from "./noun-arrow-button-3809812.svg";
import left from "./noun-arrow-previous-button-2663438.svg";
import FigurineCollection from "./FigurineCollection";
import ApperalCollection from "./ApperalCollection";
import { Link } from "react-router-dom";
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
      <div className="allrecommendations-container">
        <div className="recommend_header">
          <Heading>Manga</Heading>
          <div className="arrows">
            <div onClick={SlideLeft} className="arrow-left">
              <img src={left} alt="left" className="prev-click" />
            </div>
            <div onClick={SlideRight} className="arrow-right">
              <img src={right} alt="right" className="next-click" />
            </div>
          </div>
        </div>
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
        <Link to="Manga/AllManga" className="view-all">
          view all
        </Link>
      </div>

      <div className="allrecommendations-container">
        <div className="recommend_header">
          <Heading>Figurine</Heading>
          <div className="arrows">
            <div onClick={SlideLeftFigurine} className="arrow-left">
              <img src={left} alt="left" className="prev-click" />
            </div>
            <div onClick={SlideRightFigurine} className="arrow-right">
              <img src={right} alt="right" className="next-click" />
            </div>
          </div>
        </div>
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
        <Link to="Manga/AllManga" className="view-all">
          view all
        </Link>
      </div>

      <div className="allrecommendations-container">
        <div className="recommend_header">
          <Heading>Apperal</Heading>
          <div className="arrows">
            <div onClick={SlideLeftApperal} className="arrow-left">
              <img src={left} alt="left" className="prev-click" />
            </div>
            <div onClick={SlideRightApperal} className="arrow-right">
              <img src={right} alt="right" className="next-click" />
            </div>
          </div>
        </div>

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
                      setRate={(newRate) => handleapperalrate(item.id, newRate)}
                    />
                  </p>
                </TextContainer>
              </div>
            );
          })}
        </Item>
        <Link to="Manga/AllManga" className="view-all">
          view all
        </Link>
      </div>
    </div>
  );
};

const Heading = styled.h2`
  justify-content: left;
  text-align: left;
  margin: 0;
  top: 0;
  left: 50px;
  font-size: 16px;
  color: black;
  background-color: white;
  padding: 10px;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 5px;
  margin: 1px;
  width: 100%;
  div {
    display: flex;
    align-items: left;
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
  align-items: flex-start;
  justify-content: center;
  margin-top: 1px;

  p {
    font-size: 12px;
    color: black;
    margin: 3px;
    padding: 0;
    text-align: center;
  }
  .price {
    font-size: 14px;
    color: black;
    margin: 3px;
    padding: 0;
    text-align: center;
  }
`;

const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid white;
  margin: 5px 0;
`;

export default Recommended;
