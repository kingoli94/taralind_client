import { combineReducers } from "redux";
import surveyReducer from "./surveyReducer";
import languageReducer from "./languageReducer";

export default combineReducers({
  survey : surveyReducer,
  language : languageReducer
})