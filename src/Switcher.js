import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./index/Profile";
import App from "./index/App";
import Editor from "./index/Editor";
import Info from "./index/Info";

function Switcher() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" class="link" exact component={App} />
          <Route path="/profile" component={Profile} />
          <Route path="/editor" component={Editor} />
          <Route path="/info" componenet={Info} />
        </Switch>
      </div>
    </Router>
  );
}

export default Switcher;
