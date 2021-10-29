export const MODIFY_ACTIVE_LINK = "MODIFY_ACTIVE_LINK";
export const RESET_ACTIVE_LINK = "RESET_ACTIVE_LINK";

export const modifyActiveLink = (activeLink) => {
  return { type: MODIFY_ACTIVE_LINK, payload: activeLink };
};
export const resetActiveLink = () => {
  return { type: RESET_ACTIVE_LINK, payload: null };
};
