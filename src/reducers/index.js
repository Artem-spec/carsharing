import { combineReducers } from "redux";
import citysReducers from "./citys";
import cityReducers from "./city";
import languageReducers from "./language";
import orderReducers from "./order";

const allReducers = combineReducers({
  citys: citysReducers,
  city: cityReducers,
  language: languageReducers,
  order: orderReducers,
});

export default allReducers;
