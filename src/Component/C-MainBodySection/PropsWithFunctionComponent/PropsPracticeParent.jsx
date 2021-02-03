import React, { useState } from "react";
import { PropsWithClassParent } from "../PropsWithClassComponent/PropsWithClassParent";
import { PropsParcticeChild } from "./PropsParcticeChild";

export const PropsPracticeParent = () => {
  const personName = "Aamer sohel";
  // const [name, setName] = useState("Salman khan");
  // const [age, setAge] = useState(28);
  return (
    <div>
      {/* <PropsParcticeChild name="Khwaja Pasha" age="29" />
      <PropsParcticeChild anotherName={personName} /> */}
      <PropsParcticeChild brand={personName} />
      <PropsParcticeChild name="BillGates" />
      <PropsParcticeChild>This is children props</PropsParcticeChild>
      {/* <PropsParcticeChild name={name} age={age} /> */}
    </div>
  );
};
