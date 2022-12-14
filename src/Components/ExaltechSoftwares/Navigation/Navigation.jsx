import React from "react";
import { useSelector } from "react-redux";
import "./Navigation.css";
const Navigation = () => {
  const navSelector = useSelector((store) => store.NavigationReducer);
  return (
    <div>
      {navSelector.map((item, index) => {
        return (
          <div>
            <a href={item.link} target={item.target} key={index}>
              {item.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
