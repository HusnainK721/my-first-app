import React, { useEffect, useState } from "react";
import { FetchingDataFromReduxChild } from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
import { getAllGroups } from "../../../State/Selector/groupSelector";
export const FetchingDataFromReduxParent = () => {
  const selector = useSelector(getAllGroups);
  const [groupData, setGroupData] = useState();
  useEffect(() => {
    setGroupData(selector);
  }, [selector]);

  return (
    <div>
      {groupData &&
        groupData.map((item) => {
          return <FetchingDataFromReduxChild itemCurrent={item} />;
        })}
      {groupData &&
        groupData.map((item) => {
          return (
            <div>
              <li>{item.name}</li>
              <img src={item.image} alt="images" width="100px" />
              <p>{item.desc}</p>
            </div>
          );
        })}
    </div>
  );
};
