import React, { useEffect, useState } from "react";
import { FetchingDataFromReduxChild } from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
import { getAllGroups } from "../../../State/Selector/groupSelector";
import { useDispatch } from "react-redux";
import { addNewGroup } from "../../../State/Action/groupActions";
export const FetchingDataFromReduxParent = () => {
  // const [postData, setPostData] = useState();
  const [groupData, setGroupData] = useState();
  const selector = useSelector(getAllGroups);
  useEffect(() => {
    setGroupData(selector);
  }, [selector]);

  const [storedDataFromInputBox, setStoredDataFromInputBox] = useState();
  const [uploadFiles, setUploadFiles] = useState();
  console.log("upload files", uploadFiles);
  const dispatch = useDispatch();
  // function readFileDataAsBase64(e) {
  //   const file = e.target.files[0];

  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = (event) => {
  //       resolve(event.target.result);
  //     };

  //     reader.onerror = (err) => {
  //       reject(err);
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // }
  const handleNewGroup = (e) => {
    dispatch(addNewGroup(storedDataFromInputBox));
  };
  return (
    <div>
      <div className="mt-2">
        <input type="file" onChange={handleNewGroup} />
        <br />
        <input
          type="text"
          onChange={(event) => setStoredDataFromInputBox(event.target.files)}
        />
        <br />

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
