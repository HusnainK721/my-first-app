import React from "react";
import { PropsParcticeChild } from "./PropsParcticeChild";

export const PropsPracticeParent = () => {
  const personName = "Sallu";
  return (
    <div>
      <PropsParcticeChild name="Khwaja Pasha" age="29" />
      <PropsParcticeChild />
      <PropsParcticeChild />
    </div>
  );
};
