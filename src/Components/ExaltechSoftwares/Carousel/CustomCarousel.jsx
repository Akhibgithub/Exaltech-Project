import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

const CustomCarousel = () => {
  const carouselSelector = useSelector((state) => state.CustomCarouselReducer);
  return (
    <div>
      <Carousel>
        {carouselSelector.map((item, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.carImage}
                alt="First slide"
                height="300px"
                width="100%"
              />
              <Carousel.Caption>
                <h3>{item.carTitle}</h3>
                <p>{item.carDisc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
