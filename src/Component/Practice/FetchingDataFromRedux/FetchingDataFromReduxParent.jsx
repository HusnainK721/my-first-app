import React, { useEffect, useState } from "react";
import { FetchingDataFromReduxChild } from "./FetchingDataFromReduxChild";
import { useSelector } from "react-redux";
// import { getAllGroups } from "../../../State/Selector/groupSelector";
import { getAllTablesData } from "../../../State/Selector/tableDataSelector";
export const FetchingDataFromReduxParent = () => {
  const selector = useSelector(getAllTablesData);
  const [groupData, setGroupData] = useState();
  useEffect(() => {
    setGroupData(selector);
    console.log("selector data=======------>>>>", selector);
  }, [selector]);

  return (
    <div>
      {/* {groupData &&
        groupData.map((item) => {
          return (
            <FetchingDataFromReduxChild itemCurrent={item} key={item.id} />
          );
        })}
      {groupData &&
        groupData.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.name}</li>
              <img src={item.image} alt="images" width="100px" />
              <p>{item.desc}</p>
            </div>
          );
        })} */}

      <table border="10">
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
    </div>
  );
};
