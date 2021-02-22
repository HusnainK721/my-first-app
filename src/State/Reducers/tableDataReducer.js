import { v4 as uuidv4 } from "uuid";
const tableDefaultSate = {
  Tables: [
    {
      id: uuidv4(),
      name: "Mohammed Khaja",
      Rollno: "15",
      contact: "18326832847",
    },
    {
      id: uuidv4(),
      name: "Mohammed Amer",
      Rollno: "16",
      contact: "28326832847",
    },
    {
      id: uuidv4(),
      name: "Mohammed Rehan",
      Rollno: "17",
      contact: "38326832847",
    },
    {
      id: uuidv4(),
      name: "Mohammed salman",
      Rollno: "18",
      contact: "48326832847",
    },
    {
      id: uuidv4(),
      name: "Mohammed Mazhar",
      Rollno: "19",
      contact: "58326832847",
    },
  ],
};
export const tableDataReducer = (state = tableDefaultSate, action) => {
  switch (action.type) {
    case "ADD_NEW_TABLE":
      return { ...state, Table: [...state.Table, action.Table] };
    default:
      return state;
  }
};
