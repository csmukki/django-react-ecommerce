import React from "react";

import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route to="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
