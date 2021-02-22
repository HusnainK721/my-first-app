const tableDefaultSate = {
  Tables: [
    {
      id: "1asd",
      name: "Mohammed Khaja",
      Rollno: "15",
      contact: "18326832847",
    },
    {
      name: "Mohammed Amer",
      Rollno: "16",
      contact: "28326832847",
    },
    {
      id: "2asd",
      name: "Mohammed Rehan",
      Rollno: "17",
      contact: "38326832847",
    },
    {
      id: "3asd",
      name: "Mohammed salman",
      Rollno: "18",
      contact: "48326832847",
    },
    {
      id: "4asd",
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
