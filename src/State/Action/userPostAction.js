export const addNewPost = (name, img, id, description) => ({
  type: "ADD_NEW_POST",
  posts: {
    id,
    name,
    img,
    description,
  },
});
