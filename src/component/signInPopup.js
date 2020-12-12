import React from "react";
import { makeStyles, Grid, Paper, Button } from "@material-ui/core";
import likeButt from "../resources/like.png";
import "../stylesheets/signinpopup.css";

class SignInPopup extends React.Component {
  render() {
    return (
      <div className="signinpopup">
        <div className="signinpopup_inner">
          <h1>{this.props.text}</h1>
          <div>
            <label>
              Username/Email:
              <input type="text" name="user" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="text" name="passwd" />
            </label>
          </div>
          <button onClick={this.props.closePopup}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignInPopup;
