export const mapSurveyResponse = (surveys, response) => {
  return {
    patient : mapPatient(response),
    answeredSurveys : surveys.map(survey => mapAnsweredSurvey(survey, response))
  }
}

const mapAnsweredSurvey = (survey, response) => {
  return {
    surveyId : survey.id,
    title : survey.title,
    sortOrder : survey.sortOrder,
    answeredSurveyPages : survey.surveyPages.map(surveyPage => mapAnsweredSurveyPage(surveyPage, response))
  }
}

const mapAnsweredSurveyPage = (surveyPage, response) => {
  // eslint-disable-next-line
  var questionIds = Object.keys(response).filter(questionId => surveyPage.questions.some(x => x.id == questionId))
  var answers = []
  questionIds.forEach(questionId => {
    var answer = response[questionId]
    if(Array.isArray(answer)){
      answer.forEach(a => answers.push(mapAnswer(questionId, a)))
    }else{
      answers.push(mapAnswer(questionId, answer))
    }
  });
  return {
    surveyPageId : surveyPage.id,
    pageNumber : surveyPage.pageNumber,
    titleIcelandic : surveyPage.titleIcelandic,
    descriptionIcelandic : surveyPage.descriptionIcelandic,
    titleEnglish : surveyPage.titleEnglish,
    descriptionEnglish : surveyPage.descriptionEnglish,
    answers : answers
  }
}

const mapPatient = (response) => {
  return {
    socialSecurityNumber : response.socialSecurityNumber,
    name : response.name,
  }
}

const mapAnswer = (questionId, answerId) => {
  return {
    questionId : parseInt(questionId, 10),
    optionId : parseInt(answerId, 10)
  }
}