import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [target, setTarget] = useState("");

  const [carImage, setCarImage] = useState("");
  const [carTitle, setCarTitle] = useState("");
  const [carDisc, setCarDisc] = useState("");


  const [cardImage, setCardImage] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardDisc, setCardDisc] = useState("");


  const [FooterImage, setFooterImage] = useState("");
  const [FooterTitle, setFooterTitle] = useState("");
  const [FooterDisc, setFooterDisc] = useState("");


  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "ADD_LINK", paylaod: { name, link, target } });
  };
  const handleCarClick = () => {
    dispatch({
      type: "ADD_CAR_ITEM",
      paylaod: { carImage, carTitle, carDisc },
    });
  };

  const handleCardClick = () => {
    dispatch({
      type: "ADD_CARD_ITEM",
      paylaod: { cardImage, cardTitle, cardDisc },
    });
  };

  const handleFotClick = () => {
    dispatch({
      type: "ADD_CARD_ITEM",
      paylaod: { FooterImage, FooterTitle, FooterDisc },
    });
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="link name"
        variant="standard"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="link Url"
        variant="standard"
        type="text"
        onChange={(e) => setLink(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="link Target"
        variant="standard"
        type="text"
        onChange={(e) => setTarget(e.target.value)}
      />
      <Button variant="primary" onClick={handleClick}>
        Dispatch Links
      </Button>

      <br />

      <TextField
        id="outlined-basic"
        label="Carousel Image"
        variant="standard"
        type="text"
        onChange={(e) => setCarImage(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Carousel Title"
        variant="standard"
        type="text"
        onChange={(e) => setCarTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Carousel Description"
        variant="standard"
        type="text"
        onChange={(e) => setCarDisc(e.target.value)}
      />
      <Button variant="primary" onClick={handleCarClick}>
        Dispatch Links
      </Button>

      <br />

      <TextField
        id="outlined-basic"
        label="Card Image"
        variant="standard"
        type="text"
        onChange={(e) => setCardImage(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Card Title"
        variant="standard"
        type="text"
        onChange={(e) => setCardTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Card Description"
        variant="standard"
        type="text"
        onChange={(e) => setCardDisc(e.target.value)}
      />
      <Button variant="primary" onClick={handleCardClick}>
        Dispatch Links
      </Button>

      <br />

      <TextField
        id="outlined-basic"
        label="Footer Image"
        variant="standard"
        type="text"
        onChange={(e) => setFooterImage(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Footer Title"
        variant="standard"
        type="text"
        onChange={(e) => setFooterTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Footer Description"
        variant="standard"
        type="text"
        onChange={(e) => setFooterDisc(e.target.value)}
      />
      <Button variant="primary" onClick={handleFotClick}>
        Dispatch Links
      </Button>
    </div>
  );
};

export default Dashboard;
