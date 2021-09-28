import { combineReducers } from "redux";
import cityReducers from "./citys";
import languageReducers from "./language";

const allReducers = combineReducers({
  citys: cityReducers,
  language: languageReducers,
});

export default allReducers;
