import {
  CHANGE_LANGUAGE
} from '../actions/types';

import {
  ICELANDIC
} from '../constants/languageCodes';

const INITIAL_STATE = {
  languageCode: ICELANDIC
};

const languageReducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {...state, languageCode : action.payload};
    default:
      return state;
  }
};

export default languageReducer;