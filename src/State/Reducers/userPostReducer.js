import { v4 as uuidv4 } from "uuid";
const postDefaultState = {
  // OR initialState
  posts: [
    {
      id: uuidv4(),
      name: "Rabey",
      img: "Assets/Rose.jpg",
      description:
        "sjfjfgsjfgjfgsdjfgssjhfgjfgsjhfgsjhfgsjhfgjhfgasfgfgaslhfgashfgsf",
    },
    {
      id: uuidv4(),
      name: "Rizwan",
      img: "Assets/Rose.jpg",
      description:
        "sjfjfgsjfgjfgsdjfgssjhfgjfgsjhfgsjhfgsjhfgjhfgasfgfgaslhfgashfgsf",
    },
    {
      id: uuidv4(),
      name: "Aamer",
      img: "Assets/Rose.jpg",
      description:
        "sjfjfgsjfgjfgsdjfgssjhfgjfgsjhfgsjhfgsjhfgjhfgasfgfgaslhfgashfgsf",
    },
  ],
};

export const userPostReducer = (state = postDefaultState, action) => {
  console.log("sdjfgsjfgsj", state);
  switch (action.type) {
    case "ADD_NEW_POST":
      return {
        ...state,
        posts: [...state.posts, action.posts],
      };
    default:
      return state;
  }
};
