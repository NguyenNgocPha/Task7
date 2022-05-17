import React, { Component } from "react";
import "../css/Index.css";
import logo1 from "../accset/logo_q-min.png";
import logo2 from "../accset/logo_p-min.png";
import logo3 from "../accset/logo-min.png";
import imgS from "../accset/S.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLock, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "reactstrap";

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
            paddingBottom: 24,
          }}
        >
          <div
            style={{
              textAlign: "start",
              width: 668,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 24,
            }}
          >
            <div
              style={{
                marginTop: 0,
                fontSize: 14,
                height: 36,
                paddingTop: 4,
                paddingLeft: 2,
              }}
            >
              <img src={imgS} alt="Northern Lights" width={33} height={30} />{" "}
              &ensp;&ensp;Built on Solana Blockchain &ensp;
              <FontAwesomeIcon icon={faAngleRight} size="x" color="#B3C4C4" />
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
                  width: 264,
                  height: 50,
                  textAlign: "center",
                  backgroundColor: "#b064fe",
                  borderRadius: 7,
                  marginRight: 10,
                  fontWeight: 500,
                }}
              >
                <FontAwesomeIcon icon={faLock} /> Browse Upcoming IDOs
              </Button>
              <Button
                class="ContainenButon"
                style={{
                  width: 243,
                  height: 52,
                  textAlign: "center",
                  backgroundColor: "#17122b",
                  borderRadius: 7,
                  borderColor: "white",
                }}
              >
                <img
                  src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                  alt="Northern Lights"
                  width={20}
                  height={20}
                />{" "}
                Buy $PSOL With USDC
              </Button>
            </div>
          </div>

          <span
            style={{
              height: 620,
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
