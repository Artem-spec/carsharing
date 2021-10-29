export const ADD_ADDRESS_API = "ADD_ADDRESS_API";

export const addAddressAPI = (address) => {
  return { type: ADD_ADDRESS_API, payload: address };
};
