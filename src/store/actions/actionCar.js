export const MODIFY_CAR = "MODIFY_CAR";

export const modifyCar = (car) => {
  return { type: MODIFY_CAR, payload: car };
};
