import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import FinalDashboard from "../Pages/FinalDashboard/FinalDashboard";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/details" component={FinalDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
