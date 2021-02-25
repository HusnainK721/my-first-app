import React, { useEffect, useState } from "react";
import { FetchingDataFromReduxChild } from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
import { getAllGroups } from "../../../State/Selector/groupSelector";
import { useDispatch } from "react-redux";
import { addNewGroup } from "../../../State/Action/groupActions";
export const FetchingDataFromReduxParent = () => {
  // const [postData, setPostData] = useState();
  const [groupData, setGroupData] = useState();
  const [addNewGroups, setAddNewGroups] = useState();
  const selector = useSelector(getAllGroups);
  const dispatch = useDispatch();

  useEffect(() => {
    setGroupData(selector);
  }, [selector]);

  const handleNewGroup = () => {
    dispatch(addNewGroup(addNewGroups));
  };
  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          onChange={(event) => setAddNewGroups(event.target.value)}
        />
        <button onClick={handleNewGroup}>Add Group</button>
      </div>
      <div>
        {groupData &&
          groupData.map((item) => {
            return (
              <FetchingDataFromReduxChild itemCurrent={item} key={item.id} />
            );
          })}
      </div>
    </div>
  );
};
