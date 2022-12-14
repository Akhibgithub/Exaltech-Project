import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const Footer = () => {
  const FooterSelector = useSelector((state) => state.FooterReducer);

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        backgroundColor: "black",
        color: 'gold'
      }}
    >
      <h1>Footer Section</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "nowrap",
          backgroundColor: "black",
        }}
      >
        {FooterSelector.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img src={item.FooterImage} width="16rem" height="250rem" />
              <Card.Title>{item.FooterTitle}</Card.Title>
              <Card.Text>{item.FooterDisc}</Card.Text>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
