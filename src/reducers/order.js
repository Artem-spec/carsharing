const orderState = {
  squeezePoint: "",
  model: "",
  color: "",
  duration: "",
  rate: "",
  fuel: "",
  price: "",
};
const order = (state = orderState, action) => {
  switch (action.type) {
    case "CHANGE_GEOLOCATION" || "RESET_GEOLOCATION":
      return {
        ...state,
        squeezePoint: action.payload,
      };
    case "GO_TO_GEOLOCATION":
      return {
        ...state,
        model: "",
        color: "",
        duration: "",
        rate: "",
        fuel: "",
        price: "",
      };
    case "CHANGE_MODEL":
      return {
        ...state,
        model: action.payload,
      };
    case "CHANGE_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "GO_TO_MODEL":
      return {
        ...state,
        color: "",
        duration: "",
        rate: "",
        fuel: "",
      };
    default:
      return state;
  }
};

export default order;
