const language = (
  state = {
    language: "Eng",
  },
  action
) => {
  switch (action.type) {
    case "LANGUAGE":
      return { ...action.payload };
    default:
      return state;
  }
};

export default language;
