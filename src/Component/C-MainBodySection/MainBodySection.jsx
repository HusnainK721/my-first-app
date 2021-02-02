import React from "react";
import { PropsWithClassParent } from "./PropsWithClassComponent/PropsWithClassParent";
import { PropsPracticeParent } from "./PropsWithFunctionComponent/PropsPracticeParent";

export const MainBodySection = () => {
  return (
    <div>
      <PropsPracticeParent />
      <PropsWithClassParent />
    </div>
  );
};
