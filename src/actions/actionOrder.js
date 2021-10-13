export const CHANGE_GEOLOCATION = "CHANGE_GEOLOCATION";
export const RESET_GEOLOCATION = "RESET_GEOLOCATION";
export const GO_TO_GEOLOCATION = "GO_TO_GEOLOCATION";

export const CHANGE_MODEL = "CHANGE_MODEL";
export const CHANGE_PRICE = "CHANGE_PRICE";
export const GO_TO_MODEL = "GO_TO_MODEL";

export const changeGeolocation = (geolocation) => {
  return { type: CHANGE_GEOLOCATION, payload: geolocation };
};

export const resetGeolocation = () => {
  return { type: CHANGE_GEOLOCATION, payload: "" };
};

export const changeModel = (model) => {
  return { type: CHANGE_MODEL, payload: model };
};

export const changePrice = (price) => {
  return { type: CHANGE_PRICE, payload: price };
};

export const goToGeolocation = () => {
  return { type: GO_TO_GEOLOCATION, payload: "" };
};

export const goToModel = () => {
  return { type: GO_TO_MODEL, payload: "" };
};
