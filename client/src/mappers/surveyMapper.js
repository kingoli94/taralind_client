import { getInitialSurveyModel } from '../models/identificationModel'

export const mapSurveys = (surveys) => {
  const initialModel = getInitialSurveyModel();
  const mappedSurveys = surveys.map(mapSurvey).flat();
  const pages = initialModel.pages.concat(mappedSurveys);
  const model = {
    ...initialModel,
    pages : pages
  };
  return model;
}

const mapSurvey = (survey) => {
  return survey.surveyPages.map(mapSurveyPage)
}

const mapSurveyPage = (surveyPage) => {
  return {
    title : {
      is : surveyPage.titleIcelandic,
      en : surveyPage.titleEnglish
    },
    description : {
      is : surveyPage.descriptionIcelandic,
      en : surveyPage.descriptionEnglish
    },
    elements : surveyPage.questions.map(mapQuestion)
  }
}

const mapQuestion = (question) => {
  return {
    name : question.id.toString(),
    type : question.type,
    isRequired : question.mandatory,
    title : {
      is : question.titleIcelandic,
      en : question.titleEnglish
    },
    choices : question.options.map(mapChoice)
  }
}

const mapChoice = (choice) => {
  return {
    value : choice.id.toString(),
    text : {
      is : choice.titleIcelandic,
      en : choice.titleEnglish
    }
  };
}