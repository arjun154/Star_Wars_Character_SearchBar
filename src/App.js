import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Person from "./pages/Person";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/person/:id" component={Person}></Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
