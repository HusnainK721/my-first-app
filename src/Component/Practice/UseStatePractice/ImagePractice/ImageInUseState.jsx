import React, { useState } from "react";

export const ImageInUseState = () => {
  const [addImage, setAddImage] = useState(
    <img
      src="logo512.png"
      alt="img1"
      style={{ height: "10rem", width: "10rem" }}
    />
  );
  const COLORS = {
    // text: "black",
    background: "black",
  };
  const changeImageHandler1 = (e) => {
    setAddImage(COLORS);
    //   <div>
    //     <img
    //       src="Assets/Rose.jpg"
    //       alt="img1"
    //       style={{ height: "10rem", width: "10rem" }}
    //     />
    //     <br />
    //     <input type="text" />
    //   </div>
  };
  const changeImageHandler2 = () => {
    setAddImage();
    //   <div>
    //     <img
    //       src="logo512.png"
    //       alt="img1"
    //       style={{ height: "10rem", width: "10rem" }}
    //     />
    //     <br />
    //     <input type="text" />
    //   </div>
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
