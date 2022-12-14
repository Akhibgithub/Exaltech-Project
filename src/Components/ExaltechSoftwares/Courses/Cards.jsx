import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const cardSelector = useSelector((state) => state.CardReducer);

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      {cardSelector.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img src={item.cardImage} width="16rem" height="250rem" />
            <Card.Title>{item.cardTitle}</Card.Title>
            <Card.Text>{item.cardDisc}</Card.Text>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
