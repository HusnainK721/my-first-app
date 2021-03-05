import React from "react";
import styled from "styled-components";
const StyledH1 = styled.h1`
  color: lightblue;
  background-color: black;
  width: 50%;
  &:hover {
    background-color: red;
  }
`;
const StyledComponentChild = () => {
  return (
    <div>
      <StyledH1>this is shoeb and rabay </StyledH1>
      <h1>hiiiiiiiiiiiiiiiiii</h1>

      {/* <ShoebRabay>do u understand</ShoebRabay> */}
    </div>
  );
};

export default StyledComponentChild;
