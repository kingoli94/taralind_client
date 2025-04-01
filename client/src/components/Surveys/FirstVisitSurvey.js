import React from "react";
import { connect } from "react-redux";
import SurveyTaralind from "./SurveyTaralind"
import { fetchFirstVisitSurvey } from "../../actions";

class FirstVisitSurvey extends React.Component {
  componentDidMount() {
    this.props.fetchFirstVisitSurvey()
  }

  render() {
    return (
      <div>
        <SurveyTaralind/>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchFirstVisitSurvey }
)(FirstVisitSurvey);