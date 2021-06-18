import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/page-not-found" component={PageNotFound} />
          <Route exact path="/" component={Homepage} />
          <Redirect to="/page-not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
