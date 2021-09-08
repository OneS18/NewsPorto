import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import News from "./Main/Content/News/News";
import Welcome from "./Main/Welcome/welcome";

const Nyc = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home">
            <Header />
            <Welcome />
            <News />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nyc;
