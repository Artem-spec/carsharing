import { combineReducers } from "redux";
import LanguageReducers from './language';
import cityReducers from './city';

const allReducers = combineReducers({
    language: LanguageReducers,
    city: cityReducers
});

export default allReducers;