export const CHANGE_GEOLOCATION = "CHANGE_GEOLOCATION";
export const RESET_GEOLOCATION = "RESET_GEOLOCATION";

export const CHANGE_MODEL = "CHANGE_MODEL";
export const CHANGE_PRICE = "CHANGE_PRICE";

export const CHANGE_COLOR = "CHANGE_COLOR";
export const CHANGE_DURATION = "CHANGE_DURATION";
export const CHANGE_RATE = "CHANGE_RATE";
export const CHANGE_FUEL = "CHANGE_FUEL";
export const CHANGE_BABY_CHAIR = "CHANGE_BABY_CHAIR";
export const CHANGE_RIGHT_HAND_DRIVE = "CHANGE_RIGHT_HAND_DRIVE";

export const RESET_DATA_FOR_MODEL = "RESET_DATA_FOR_MODEL";
export const RESET_DATA_FOR_GEOLOCATION = "RESET_DATA_FOR_GEOLOCATION";
//-----------------------------------------------------------
// Экшены для "геолокации"
//-----------------------------------------------------------
export const changeGeolocation = (geolocation) => {
  return { type: CHANGE_GEOLOCATION, payload: geolocation };
};

export const resetGeolocation = () => {
  return { type: CHANGE_GEOLOCATION, payload: null };
};
//-----------------------------------------------------------
// Экшены для "модели"
//-----------------------------------------------------------

export const changeModel = (model) => {
  return { type: CHANGE_MODEL, payload: model };
};

export const changePrice = (price) => {
  return { type: CHANGE_PRICE, payload: price };
};

//-----------------------------------------------------------
// Экшены для "дополнительно"
//-----------------------------------------------------------
export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    payload: color,
  };
};

export const changeDuration = (duration) => {
  return {
    type: CHANGE_DURATION,
    payload: duration,
  };
};

export const changeRate = (rate) => {
  return {
    type: CHANGE_RATE,
    payload: rate,
  };
};

export const changeFuel = (fuel) => {
  return {
    type: CHANGE_FUEL,
    payload: fuel,
  };
};

export const changeBabyChair = (babyChair) => {
  return {
    type: CHANGE_BABY_CHAIR,
    payload: babyChair,
  };
};

export const changeRightHandDrive = (rightHandDrive) => {
  return {
    type: CHANGE_RIGHT_HAND_DRIVE,
    payload: rightHandDrive,
  };
};

//-----------------------------------------------------------
// Экшены для переходов по ссылкам, сброс данных предыдущих
// ссылок
//-----------------------------------------------------------

export const resetDataForGeolocation = () => {
  return { type: RESET_DATA_FOR_GEOLOCATION, payload: null };
};

export const resetDataForModel = () => {
  return { type: RESET_DATA_FOR_MODEL, payload: null };
};
