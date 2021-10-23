const orderState = {
  squeezePoint: {
    description: "",
    cityId: null,
    pointId: null,
  },
  model: {
    description: "",
    carId: null,
    carPrice: "",
  },
  color: "",
  duration: "",
  dateFrom: "",
  dateTo: "",
  rate: {
    description: "",
    rateId: null,
    unit: "",
    price: "",
  },
  fuel: false,
  babyChair: false,
  rightHandDrive: false,
  price: "",
};
const order = (state = orderState, action) => {
  switch (action.type) {
    case "CHANGE_GEOLOCATION" || "RESET_GEOLOCATION":
      return {
        ...state,
        squeezePoint: { ...action.payload },
      };
    case "RESET_DATA_FOR_GEOLOCATION":
      return {
        ...state,
        model: {
          description: "",
          carId: null,
        },
        color: "",
        duration: "",
        dateFrom: "",
        dateTo: "",
        rate: {
          description: "",
          rateId: null,
          unit: "",
          price: "",
        },
        fuel: false,
        babyChair: false,
        rightHandDrive: false,
      };
    case "CHANGE_MODEL":
      return {
        ...state,
        model: { ...action.payload },
      };
    case "CHANGE_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "CHANGE_DURATION":
      return {
        ...state,
        ...action.payload,
      };
    case "CHANGE_RATE":
      return {
        ...state,
        rate: { ...action.payload },
      };
    case "CHANGE_FUEL":
      return {
        ...state,
        fuel: action.payload,
      };
    case "CHANGE_BABY_CHAIR":
      return {
        ...state,
        babyChair: action.payload,
      };
    case "CHANGE_RIGHT_HAND_DRIVE":
      return {
        ...state,
        rightHandDrive: action.payload,
      };
    case "RESET_DATA_FOR_MODEL":
      return {
        ...state,
        color: "",
        duration: "",
        dateFrom: "",
        dateTo: "",
        rate: {
          description: "",
          rateId: null,
          unit: "",
          price: "",
        },
        fuel: false,
        babyChair: false,
        rightHandDrive: false,
      };
    default:
      return state;
  }
};

export default order;
