const initState = {
  name: "Ульяновск",
  center: [54.314192, 48.403132],
  zoom: 10,
};

const selectedCity = (state = initState, action) => {
  switch (action.type) {
    case "SELECTED_CITY":
      return { ...action.payload };
    default:
      return state;
  }
};

export default selectedCity;
