export const MODIFY_ORDER_FLAGS = "MODIFY_ORDER_FLAGS";
export const RESET_ORDER_FLAGS = "RESET_ORDER_FLAGS";

export const modifyOrderFlags = (orderFlags) => {
  return { type: MODIFY_ORDER_FLAGS, payload: orderFlags };
};
export const resetOrderFlags = () => {
  return { type: MODIFY_ORDER_FLAGS, payload: null };
};
