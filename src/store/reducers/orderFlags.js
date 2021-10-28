const initState = {
  modalOrder: false,
  deleteOrder: false,
  confirmationOrder: false,
  orderСancellation: false,
};

const orderFlags = (state = initState, action) => {
  switch (action.type) {
    case "MODIFY_ORDER_FLAGS":
      return { ...action.payload };
    case "RESET_ORDER_FLAGS":
      return { ...initState };
    default:
      return state;
  }
};

export default orderFlags;
