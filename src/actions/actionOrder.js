export const CHANGE_GEOLOCATION = "CHANGE_GEOLOCATION";
export const RESET_GEOLOCATION = "RESET_GEOLOCATION";
export const RESET_DATA_FOR_GEOLOCATION = "RESET_DATA_FOR_GEOLOCATION";

export const CHANGE_MODEL = "CHANGE_MODEL";
export const CHANGE_PRICE = "CHANGE_PRICE";
export const RESET_DATA_FOR_MODEL = "RESET_DATA_FOR_MODEL";

export const changeGeolocation = (geolocation) => {
  return { type: CHANGE_GEOLOCATION, payload: geolocation };
};

export const resetGeolocation = () => {
  return { type: CHANGE_GEOLOCATION, payload: null };
};

export const changeModel = (model) => {
  return { type: CHANGE_MODEL, payload: model };
};

export const changePrice = (price) => {
  return { type: CHANGE_PRICE, payload: price };
};

export const resetDataForGeolocation = () => {
  return { type: RESET_DATA_FOR_GEOLOCATION, payload: null };
};

export const  resetDataForModel = () => {
  return { type: RESET_DATA_FOR_MODEL, payload: null };
};
