import React from "react";
import { Paper, Button } from "@material-ui/core";
import likeButt from "../resources/like.png";
import memePopup from "./memePopup";

var data = require("../resources/memeData.json");

export default function Memes() {
  return (
    <div id="memeContainer">
      {data.map((meme) => (
        <Paper
          id={meme.id}
          className="meme"
          variant="outlined"
          color="primary"
          style={{
            border: "2px red solid",
            borderRadius: 1
          }}
        >
          <h3
            style={{
              float: "left",
              margin: "5px",
              marginLeft: "10px"
            }}
          >
            {meme.name}
          </h3>
          <button
            style={{
              margin: "0px",
              border: "none",
              outline: "none",
              backgroundColor: "white"
            }}
          >
            <img
              alt=""
              src={meme.imageDir}
              style={{
                width: "85%",
                height: "auto",
                margin: "2px"
              }}
            />
          </button>
          <h5
            style={{
              margin: "8px",
              float: "left",
              marginTop: "10px",
              alignSelf: "bottom"
            }}
          >
            {meme.userName}
            <Button
              style={{
                marginTop: "0px",
                fontSize: "16px",
                width: "120px"
              }}
            >
              <img src={likeButt} style={{ height: "40%", width: "30%" }} />
              Likes {meme.likeAmt}
            </Button>
          </h5>
        </Paper>
      ))}
      <memePopup />
    </div>
  );
}
