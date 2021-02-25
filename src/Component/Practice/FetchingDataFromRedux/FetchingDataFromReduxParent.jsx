import React, { useEffect, useState } from "react";
import { FetchingDataFromReduxChild } from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
import { getAllGroups } from "../../../State/Selector/groupSelector";
export const FetchingDataFromReduxParent = () => {
  // const [postData, setPostData] = useState();
  const [groupData, setGroupData] = useState();
  const [addNewGroup, setAddNewGroup] = useState();
  const selector = useSelector(getAllGroups);

  useEffect(() => {
    setGroupData(selector);
  }, [selector]);
  return (
    <div>
      <div className="mt-2">
        <input type="text" /> <button>Add Group</button>
      </div>
      <div>
        {groupData &&
          groupData.map((item) => {
            return (
              <FetchingDataFromReduxChild itemCurrent={item} key={item.id} />
            );
          })}
        {/* {groupData &&
        groupData.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.name}</li>
              <img src={item.image} alt="images" width="100px" />
              <p>{item.desc}</p>
            </div>
          );
        })} */}
        {/* <table border="10">
        <tr>
          <th>SR No</th>
          <th>name</th>
          <th>Mobile No</th>
        </tr>

        {groupData &&
          groupData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.Rollno}</td>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td> </td>
              </tr>
            );
          })}
      </table>

      {postData &&
        postData.map((item) => {
          console.log("data==>", item);
          return (
            <div key={item.id}>
              <li>{item.name}</li>
              <li>
                {" "}
                <img src={item.img} alt="" />
              </li>
              <li>{item.description}</li>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
