import React, { Component } from "react";
import "../css/Index.css";
import logo1 from "../accset/logo_q-min.png";
import logo2 from "../accset/logo_p-min.png";
import logo3 from "../accset/logo-min.png";
import imgS from "../accset/S.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import lookButton from "../accset/lookButton.svg";
import HexButton from "../accset/HexButton.svg";
import { Button } from "reactstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Content extends Component {
  render() {
    return (
      <div>
        <div
          class="row"
          style={{
            width: 1280,
            textAlign: "justify",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 24,
            paddingBottom: 0,
          }}
        >
          <div
            style={{
              textAlign: "start",
              width: 668,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 26,
              height: 530,
            }}
          >
            <div
              style={{
                marginTop: 0,
                fontSize: 14,
                height: 36,
                paddingTop: 2,
                paddingLeft: 4,
                paddingBottom: 4,
                alignItems: "center",
              }}
            >
              <img src={imgS} alt="Northern Lights" height={28} />{" "}
              &ensp;&ensp;Built on Solana Blockchain &ensp;
              <FontAwesomeIcon
                // class="Fontdwon"
                icon={faAngleRight}
                size="x"
                style={{
                  paddingTop: -5,
                  marginLeft: 3,
                  color: "rgb(107 114 128)",
                }}
              />
            </div>

            <div
              style={{
                marginTop: 28,
                textAlign: "start",
              }}
              class="textBig"
            >
              The First Community
            </div>
            <span
              class="textBig2"
              style={{
                color: "#b064fe",
                textAlign: "start",
                position: "relative",
                width: 668,
              }}
            >
              <span style={{ color: "white" }}>Governed</span> IDO Platform
            </span>

            <div
              class="textMedium"
              style={{
                marginTop: 28,
                fontSize: 20,
                width: "100%",
                textAlign: "start",
              }}
            >
              Parasol Finance is the first-ever community governed IDO platform
              built on Solana with the needs of both projects and investors
              alike.{" "}
            </div>
            <div
              class="textMedium2"
              style={{
                marginTop: 24,
                fontSize: 20,
                width: "100%",
                textAlign: "start",
                marginBottom: 12,
                position: "relative",
              }}
            >
              The first launchpad with a NFT allocation system.
            </div>
            <div style={{ marginTop: 44, fontSize: 20 }}>
              <Button
                class="ContainenButon"
                style={{
                  width: 263,
                  height: 50,
                  textAlign: "center",
                  backgroundColor: "#b064fe",
                  borderRadius: 8,
                  marginRight: 11,
                  fontWeight: 500,
                }}
              >
                <img
                  src={lookButton}
                  height={20}
                  class="circle"
                  style={{ marginTop: -5, marginRight: 3 }}
                />{" "}
                Browse Upcoming IDOs
              </Button>
              <Button
                class="ContainenButon"
                style={{
                  width: 242,
                  height: 50,
                  textAlign: "center",
                  backgroundColor: "#17122b",
                  borderRadius: 8,
                  paddingLeft: 24,
                  paddingRight: 24,
                  fontWeight: 500,
                  borderColor: "white",
                }}
              >
                <img
                  src={HexButton}
                  height={20}
                  class="circle"
                  style={{ marginTop: -5, marginRight: 5 }}
                />{" "}
                Buy $PSOL With USDC
              </Button>
            </div>
          </div>

          <span
            style={{
              height: 600,
              width: "45%",
              position: "relative",
            }}
          >
            <div class="image">
              <img src={logo1} alt="no find" width={620} height={620}></img>
            </div>
            <div class="image">
              <img src={logo2} alt="no find" width={620} height={620}></img>
            </div>
            <div class="image">
              <img src={logo3} alt="no find" width={620} height={620}></img>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Content;
