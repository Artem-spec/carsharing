export const SELECTED_CITY = "SELECTED_CITY";

export const changeCity = (city) => {
  return { type: SELECTED_CITY, payload: city };
};
