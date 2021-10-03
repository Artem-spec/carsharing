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
    case "geolocation":
      return {
        ...state,
        squeezePoint: action.payload,
      };
    default:
      return state;
  }
};

export default order;
