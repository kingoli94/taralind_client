 import {
  FETCH_SURVEY,
  SUBMIT_SURVEY,
  SUBMIT_SURVEY_DONE,
  CHANGE_LANGUAGE
} from './types'
import http from "../http/http";

export const fetchFirstVisitSurvey = () => async (dispatch) => {
  const response = await http.get('/api/firstvisit')
  dispatch({ type : FETCH_SURVEY, payload : response.data })
}

export const fetchRecurringVisitSurvey = () => async (dispatch) => {
  const response = await http.get('/api/recurringvisit')
  dispatch({ type : FETCH_SURVEY, payload : response.data })
}

export const submitSurveyResponse = (surveyResponse) => async (dispatch) => {
  dispatch({ type : SUBMIT_SURVEY})
  await http.post('/api/saveresults', surveyResponse).then(_ =>{
    dispatch({ type : SUBMIT_SURVEY_DONE, payload : true })
  }).catch(_ => dispatch({ type : SUBMIT_SURVEY_DONE, payload : false }))
}


export const changeLanguage = (languageCode) => (dispatch, getState) => {
  if(getState().language.languageCode === languageCode){
    return;
  }
  dispatch({type : CHANGE_LANGUAGE, payload : languageCode})
}