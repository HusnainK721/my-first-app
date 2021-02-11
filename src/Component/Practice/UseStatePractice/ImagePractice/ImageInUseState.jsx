import React, { useState } from "react";
export const ImageInUseState = () => {
  const [addImage, setAddImage] = useState();

  //   const image = {
  //     backgroundColor: "red",
  //   };

  const changeImageHandler1 = (e) => {
    setAddImage(
      <img
        src="Assets/Rose.jpg"
        alt="img2"
        style={{ width: "10rem", height: "10rem" }}
      />
    );
  };
  const changeImageHandler2 = () => {
    setAddImage(
      <img
        src="logo512.png"
        alt="img1"
        style={{ width: "10rem", height: "10rem" }}
      />
    );
  };
  return (
    <div className="mt-2">
      <h1>loading Image Using useState</h1>
      <button onClick={changeImageHandler1}>Load Image 1</button>

      <button className="ml-2" onClick={changeImageHandler2}>
        Load Image 2
      </button>
      <center>
        <p> {addImage} </p>
      </center>
    </div>
  );
};
