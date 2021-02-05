import React, { useState } from "react";
import { PropsWithClassParent } from "../PropsWithClassComponent/PropsWithClassParent";
import { PropsParcticeChild } from "./PropsParcticeChild";

export const PropsWithFunctionParent = () => {
  const personName = "Aamer sohel";

  return (
    <div>
      <PropsWithFunctionChild brand={personName} />
      <PropsWithFunctionChild name="BillGates" />
      <PropsWithFunctionChild />
    </div>
  );
};
