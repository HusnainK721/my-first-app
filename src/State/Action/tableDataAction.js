export const addNewTableGroup = (name, id) => ({
  type: "ADD_NEW_Table",
  groups: {
    name,
    id,
  },
});
