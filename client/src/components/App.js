import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstVisitSurvey from "./Surveys/FirstVisitSurvey";
import RecurringVisitSurvey from "./Surveys/RecurringVisitSurvey";
import Header from "./Header"

const App = () => {
  return (
    <div className="container mb-4">
      <Router>
          <div>
          <Header />
          <Switch>
            <Route path="/fyrstakoma" exact component={FirstVisitSurvey} />
            <Route path="/endurkoma" exact component={RecurringVisitSurvey} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;