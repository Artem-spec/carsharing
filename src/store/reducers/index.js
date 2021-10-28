import { combineReducers } from "redux";
import citysReducers from "./citys";
import cityReducers from "./city";
import languageReducers from "./language";
import orderReducers from "./order";
import defCoordsReducers from "./defCoords";
import addressAPIReducers from "./addressAPI";
import citysAPIReducers from "./citysAPI";
import carReducers from "./car";
import orderFlagsReducers from "./orderFlags";
import activeLinkReducers from "./activeLink";

const allReducers = combineReducers({
  citys: citysReducers,
  city: cityReducers,
  language: languageReducers,
  order: orderReducers,
  defCoords: defCoordsReducers,
  addressAPI: addressAPIReducers,
  citysAPI: citysAPIReducers,
  car: carReducers,
  orderFlags: orderFlagsReducers,
  activeLink: activeLinkReducers,
});

export default allReducers;
