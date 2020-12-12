import React from "react";
import Navbar from "../component/Navbar.js";
import Memes from "../component/Memes.js";
import { Avatar, Grid, Divider } from "@material-ui/core";
import dphil from "../resources/dphil.jpg";

const infoStyle = {
  display: "flex",
  marginLeft: "20px",
  marginTop: "0px",
  textAlign: "left"
};

export default function Profile() {
  return (
    <div className="Profile">
      <div>
        <Navbar />
      </div>
      <div>
        <Grid container item xs={12}>
          <Grid justify="left">
            <Avatar
              src={dphil}
              variant="outlined"
              color="primary"
              style={{
                border: "8px solid",
                height: "400px",
                width: "400px",
                margin: "2vw"
              }}
            />
          </Grid>
          <Grid>
            <h1
              textAlign="left"
              style={{
                marginLeft: "20px",
                marginTop: "50px",
                textAlign: "left"
              }}
            >
              Dphily420x
            </h1>
            <h1 style={infoStyle}>Join Date: April 20th, 2020</h1>
            <h1 style={infoStyle}>Bio:</h1>
            <div style={infoStyle}>
              <h4 textAlign="left" style={infoStyle}>
                Quotes
                <br />
                “We teach people how to eat us.”
                <br /> “My daddy used to say, ‘You wouldn't worry you much about
                <br />
                what you about you if you knew you seldom they you.’”
                <br />
                “It's better to be healthy alone and sick with someone else.”
              </h4>
            </div>
          </Grid>
        </Grid>
        <div>
          <h1 style={{ color: "#3e0054", float: "left", marginLeft: "30px" }}>
            Uploaded Memes
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Divider
            orientation="horizontal"
            flexItem
            style={{
              height: "1px",
              backgroundColor: "#4e1663",
              width: "99%",
              alignSelf: "center",
              marginTop: "50px",
              marginRight: "370px",
              marginBottom: "15px"
            }}
          />
        </div>
        <Memes />
      </div>
    </div>
  );
}
