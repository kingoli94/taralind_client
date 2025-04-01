import React from "react";
import { connect } from "react-redux";
import SurveyTaralind from "./SurveyTaralind"
import { fetchRecurringVisitSurvey } from "../../actions";

class RecurringVisitSurvey extends React.Component {
  componentDidMount() {
    this.props.fetchRecurringVisitSurvey()
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
  { fetchRecurringVisitSurvey }
)(RecurringVisitSurvey);