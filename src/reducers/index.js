import { combineReducers } from "redux";
import citysReducers from "./citys";
import cityReducers from "./city";
import languageReducers from "./language";
import orderReducers from "./order";
import defCoordsReducers from "./defCoords";
import addressAPIReducers from "./addressAPI";
import citysAPIReducers from "./citysAPI";
import stateCoordsReducers from "./stateCoords"

const allReducers = combineReducers({
  citys: citysReducers,
  city: cityReducers,
  language: languageReducers,
  order: orderReducers,
  defCoords: defCoordsReducers,
  addressAPI: addressAPIReducers,
  citysAPI: citysAPIReducers,
  stateCoords:stateCoordsReducers
});

export default allReducers;
