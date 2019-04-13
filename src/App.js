import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  ProfilePage,
  Apply,
  Applications,
  ApplicationDetails,
} from "./pages";

import HomePage from "./HomePage";

import "tabler-react/dist/Tabler.css";


function App(props) {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/register" component={RegisterPage} />

          <Route exact path="/social/apply" component={Apply} />
          <Route exact path="/social/details" component={ApplicationDetails} />
          <Route exact path="/social/applications" component={Applications} />
        </Switch>
      </Router>
  );
}

export default App;
