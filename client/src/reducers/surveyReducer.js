import { FETCH_SURVEY, SUBMIT_SURVEY, SUBMIT_SURVEY_DONE } from '../actions/types';

const INITIAL_STATE = {
  surveyLoaded: false,
  surveySubmitted : false,
  surveySubmittedSuccess : false,
  submittingSurveyInProgress : false,
  surveys: null
};

const surveyReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_SURVEY:
      return { ...state, surveyLoaded : true, surveys : action.payload };
    case SUBMIT_SURVEY:
      return { ...state, submittingSurveyInProgress : true}
    case SUBMIT_SURVEY_DONE:
      return { ...state, surveySubmitted : true, submittingSurveyInProgress : false, surveySubmittedSuccess : action.payload}
    default:
      return state;
  }
}

export default surveyReducer;