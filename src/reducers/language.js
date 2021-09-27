const language = (state = "Eng", action) => {
  switch (action.type) {
    case "language":
      return (state = action.payload);
    default:
      return state;
  }
};

export default language;
