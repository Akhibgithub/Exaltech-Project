import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function FormOne() {
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [fullName, setFullName] = useState("");
  const formOneDispatch = useDispatch();
  const navigate = useNavigate();
  const handleDispatchAndRoute = (e) => {
    e.preventDefault();
    formOneDispatch({
      type: "FORM_ONE_DATA",
      paylaod: { fName, mName, lName, fullName },
    });
    navigate("/formtwo");
  };
  return (
    <Form>
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="First Name"
        onChange={(e) => setFName(e.target.value)}
      />
      <Form.Label>Middle Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Middle Name"
        onChange={(e) => setMName(e.target.value)}
      />
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLName(e.target.value)}
      />
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      /> <br />
      <Button variant="primary" type="submit" onClick={handleDispatchAndRoute}>
        Next
      </Button>
    </Form>
  );
}

export default FormOne;
