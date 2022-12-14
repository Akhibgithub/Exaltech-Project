import React, { useState } from "react";
import CustomCarousel from "./Carousel/CustomCarousel";
import Cards from "./Courses/Cards";
import Dashboard from "./Dashbord/Dashboard";
import Navigation from "./Navigation/Navigation";
import Button from "react-bootstrap/Button";
import Footer from "./Footer/Footer";

const Landing = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setShow(!show)}>
        Dashboard
      </Button>
      {show && <Dashboard />}
      <Navigation />
      <CustomCarousel />
      <Cards />
      <Footer/>
    </div>
  );
};

export default Landing;
