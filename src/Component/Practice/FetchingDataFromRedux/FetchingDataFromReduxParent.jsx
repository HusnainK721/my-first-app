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
