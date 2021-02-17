const groupsDefaultState = {
  groups: [
    {
      name: "Redux Practical",
      image: "Assets/Rose.jpg",
      desc: "This Is First Group Created With Redux",
    },
    {
      name: "Learning Redux",
      image: "Assets/Rose.jpg",
      desc: "This Is First Group Created With Redux",
    },
    {
      name: "React Developers",
      image: "logo512.png",
      desc: "This Is First Group Created With Redux",
    },
  ],
};

export const groupReducer = (state = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return { ...state, groups: [...state.groups, action.groups] };
    default:
      return state;
  }
};
