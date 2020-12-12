import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";
import "../stylesheets/styles.css";
import "../stylesheets/index.css";
import Searchbar from "./Searchbar";
import SignInPopup from "./signInPopup";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, signedIn: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  toggleSignin() {
    this.setState({
      signedIn: !this.state.signedIn
    });
  }

  toggleBoth() {
    this.setState({
      signedIn: !this.state.signedIn,
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="Navbar">
        <div id="nav">
          <div id="buttons">
            <span>
              <Link to="/" class="button">
                🏠Home
              </Link>
            </span>
            <Divider
              orientation="vertical"
              flexItem
              style={{
                width: "1px",
                backgroundColor: "#4e1663"
              }}
            />
            <span>
              <Link to="/editor" class="button">
                🖌️Editor
              </Link>
            </span>
            <Divider
              orientation="vertical"
              flexItem
              style={{ width: "1px", backgroundColor: "#4e1663" }}
            />
            <span>
              <Link to="/profile" class="button">
                🤣Profile
              </Link>
            </span>
          </div>

          <div>
            <Searchbar />
          </div>
          <span>
            {this.state.signedIn ? (
              <Button id="signInButton" onClick={this.toggleSignin.bind(this)}>
                Sign Out
              </Button>
            ) : null}
            {!this.state.signedIn ? (
              <Button id="signInButton" onClick={this.togglePopup.bind(this)}>
                Sign In
              </Button>
            ) : null}
            {this.state.showPopup ? (
              <SignInPopup
                text="Sign In"
                closePopup={this.toggleBoth.bind(this)}
              />
            ) : null}
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
