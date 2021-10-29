export const ADD_CITY_API = "ADD_CITY_API";

export const addCityAPI = (citys) => {
  return { type: ADD_CITY_API, payload: citys };
};
