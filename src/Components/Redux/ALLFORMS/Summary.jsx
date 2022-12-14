import React from "react";
import { Button } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const selelctor = useSelector((state) => state);
  const navigate = useNavigate();
  const handleDispatch = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Summary</h1>
      {selelctor.FormOneReducer.map((item) => {
        return (
          <div>
            <p>{item.fName}</p>
            <p>{item.mName}</p>
            <p>{item.lName}</p>
            <p>{item.fullName}</p>
          </div>
        );
      })}
      {selelctor.FormTwoReducer.map((item) => {
        return (
          <div>
            <p>{item.height}</p>
            <p>{item.weight}</p>
            <p>{item.chest}</p>
            <p>{item.age}</p>
          </div>
        );
      })}
      {selelctor.FormThreeReducer.map((item) => {
        return (
          <div>
            <p>{item.priAdd}</p>
            <p>{item.secAdd}</p>
            <p>{item.city}</p>
            <p>{item.state}</p>
          </div>
        );
      })}{" "}
      <br />
      <Button variant="primary" type="submit" onClick={handleDispatch}>
        Next
      </Button>
    </div>
  );
};

export default Summary;
