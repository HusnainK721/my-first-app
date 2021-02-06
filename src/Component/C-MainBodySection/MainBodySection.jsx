import React from "react";
import { PropsWithClassParent } from "./PropsWithClassComponent/PropsWithClassParent";
// import { PropsWithFunctionParent } from "./PropsWithFunctionComponent/PropsWithFunctionParent";
export const MainBodySection = () => {
  return (
    <div>
      <PropsWithClassParent />
      {/* <PropsWithFunctionParent /> */}
    </div>
  );
};
