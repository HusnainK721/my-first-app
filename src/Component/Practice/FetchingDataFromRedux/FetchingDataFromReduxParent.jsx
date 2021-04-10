import React, { useEffect, useState } from "react";
import { FetchingDataFromReduxChild } from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
import { getAllGroups } from "../../../State/Selector/groupSelector";
import { useDispatch } from "react-redux";
import { addNewGroup } from "../../../State/Action/groupActions";
import { v4 as uuidv4 } from "uuid";

export const FetchingDataFromReduxParent = () => {
  // const [postData, setPostData] = useState();
  const [groupData, setGroupData] = useState();
  const selector = useSelector(getAllGroups);
  useEffect(() => {
    setGroupData(selector);
  }, [selector]);

  const [storedDataFromInputBox, setStoredDataFromInputBox] = useState();
  // const [uploadFiles, setUploadFiles] = useState();
  // const [showUplodFiles, setShowUploadFiles] = useState([]);
  // const handleUploadFile = (e) => {
  //   setShowUploadFiles(uploadFiles);

  // e.preventDefault();
  // const uploadFiles = e.target.files;
  // const showUplodFiles = window.URL.createObjectURL(uploadFiles);
  //   e.preventDefault();
  //   const reader = new FileReader();
  //   const file = e.target.files[0];
  //   if (file) {
  //     reader.onloadend = () => this.props.onFileLoaded(reader.result);
  //     setShowUploadFiles(reader.readAsDataURL(file));
  //   } else {
  //     alert("File uploaded is not valid.");
  //   }
  // };

  const dispatch = useDispatch();

  const handleNewGroup = () => {
    dispatch(addNewGroup(storedDataFromInputBox));
  };

  return (
    <div>
      <div className="mt-2">
        {/* <input type="file" onChange={(e) => setUploadFiles(e.target.files)} />
        <button onClick={handleUploadFile}>send</button>
        {showUplodFiles}
        <br /> */}
        <input
          type="text"
          onChange={(event) => setStoredDataFromInputBox(event.target.value)}
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
