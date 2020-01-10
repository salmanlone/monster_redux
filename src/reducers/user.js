const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, { name: action.name }];
    case "REMOVE_USER":
      return state.filter((item, index) => action.index !== index);
    default:
      return state;
  }
};

export default userReducer;
