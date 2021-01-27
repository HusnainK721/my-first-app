import React from "react";
import "./BodySection.css";
import Image1 from "../Images/Rose.jpg";
export const MainBody = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Welcome To Pickupbiz</h1>
      <p className="main-body--para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae
        assumenda repudiandae numquam laudantium dolor accusantium,
        necessitatibus deserunt minus hic labore? Dolore officia odit, fuga sit
        dolores voluptas autem laudantium!
      </p>
      <img src={Image1} alt="bodyimage" />
    </div>
  );
};
