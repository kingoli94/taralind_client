import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { connect } from "react-redux";
import { submitSurveyResponse } from "../../actions";
import { mapSurveys} from '../../mappers/surveyMapper';
import { mapSurveyResponse } from '../../mappers/surveyResponseMapper'
import Spinner from "../Spinner";
import {
  DEFAULT_COLOR,
  DEFAULT_HOVER_COLOR
} from '../../constants/colors';

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = DEFAULT_COLOR;
defaultThemeColors["$main-hover-color"] = DEFAULT_HOVER_COLOR;
Survey.StylesManager.applyTheme();


class SurveyTaralind extends React.Component{
  onComplete = (result) => {
    const response = mapSurveyResponse(this.props.surveys, result.data)
    this.props.submitSurveyResponse(response)
  }

  renderSurvey(){
    const model = mapSurveys(this.props.surveys)
    return (
      <div>
        <Survey.Survey json={model} locale={this.props.locale} onComplete={this.onComplete} />
      </div>
    )
  }

  renderSuccess(){
    return (
      <div className="alert alert-primary text-center m-5" role="alert">
        <h5>Takk fyrir að svara spurningunum</h5>
      </div>
    );
  }

  renderFail(){
    return(
      <div className="alert alert-danger text-center m-5" role="alert">
        <div><h5>Ekki tóks að skrá svör við spurningunum</h5></div>
        <div><p>Vinsamlegast látið móttökuna hjá Táralind vita</p></div>
        
      </div>
    );
  }

  render(){
    if(!this.props.surveyLoaded || this.props.submittingSurveyInProgress){
      return <Spinner />
    }

    if(this.props.surveySubmitted){
      if(this.props.surveySubmittedSuccess){
        return this.renderSuccess()
      }else{
        return this.renderFail()
      }
    }

    return this.renderSurvey()
  }
}

const mapStateToProps = (state) => {
  return { 
    surveyLoaded : state.survey.surveyLoaded,
    surveySubmitted : state.survey.surveySubmitted,
    surveySubmittedSuccess : state.survey.surveySubmittedSuccess,
    submittingSurveyInProgress : state.survey.submittingSurveyInProgress,
    surveys: state.survey.surveys,
    locale : state.language.languageCode
   };
};

export default connect(mapStateToProps, { submitSurveyResponse })(SurveyTaralind);