export const CHANGE_GEOLOCATION = "CHANGE_GEOLOCATION";
export const RESET_GEOLOCATION = "RESET_GEOLOCATION";

export const changeGeolocation = (geolocation)=>{
    return { type: CHANGE_GEOLOCATION, payload: geolocation }
}

export const resetGeolocation = ()=>{
    return { type: CHANGE_GEOLOCATION, payload: '' }
}