import React from "react";

export const DeletingStateChildF = (itemCurrent) => {
  return (
    <div>
      <p onClick={itemCurrent.clicked}>
        my name is {itemCurrent.name} & i am 27 year old
      </p>
      <input type="text" />
    </div>
  );
};
