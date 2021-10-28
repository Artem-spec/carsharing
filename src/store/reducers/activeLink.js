const initState = {
  activeModel: false,
  activeAdditionally: false,
  activeTotal: false,
  selectedGeolocation: false,
  selectedModel: false,
  selectedAdditionally: false,
};
const orderFlags = (state = initState, action) => {
  switch (action.type) {
    case "MODIFY_ACTIVE_LINK":
      return { ...state, ...action.payload };
    case "RESET_ACTIVE_LINK":
      return { ...initState };
    default:
      return state;
  }
};

export default orderFlags;
