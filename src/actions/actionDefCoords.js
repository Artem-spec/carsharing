export const CHANGE_DEF_COORDS = "CHANGE_DEF_COORDS";

export const changeDefCoords = (defCoords)=>{
    return { type: CHANGE_DEF_COORDS, payload: defCoords }
}