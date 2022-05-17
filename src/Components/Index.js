import React, { Component } from "react";
import "../css/Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imdg from "../accset/pp.png";
import imdga from "../accset/ppa.png";
import imdgb from "../accset/ppb.png";
import imdgc from "../accset/ppc.png";
import imdgd from "../accset/ppd.png";

import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import {
  faUnlockKeyhole,
  faAngleDown,
  faMap,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { Button } from "reactstrap";

import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import ContainerCard from "./ContainerCard";

class Index extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#17122b",

          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#17122b",
            width: "100%",
            margin: "auto",
            float: "center",
          }}
        >
          <Header />
          <div
            class="container-fluid"
            style={{
              color: "white",
              paddingTop: 24,
              width: 1280,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Menu />
            <Content />

            <div class="row" style={{ textAlign: "justify" }}>
              <span style={{ width: "20%" }}>
                <img src={imdg} alt="no find"></img>
              </span>
              <span style={{ width: "20%", textAlign: "center" }}>
                <img src={imdga} alt="no find"></img>
              </span>
              <span style={{ width: "20%", textAlign: "center" }}>
                <img src={imdgb} alt="no find"></img>
              </span>
              <span style={{ width: "20%", textAlign: "end" }}>
                <img src={imdgc} alt="no find"></img>
              </span>{" "}
              <span style={{ width: "20%", textAlign: "end" }}>
                <img src={imdgd} alt="no find"></img>
              </span>
            </div>

            <div class="row" style={{ marginTop: 50 }}>
              <div class="col-6 " style={{ textAlign: "justify" }}>
                <h1 style={{ fontWeight: "bolder" }}> Upcoming IDOs</h1>
                <p>
                  We only display IDOs that are featured or have been balloted.
                </p>
              </div>

              <div class="col-6 " style={{ textAlign: "end" }}>
                <div class="dropdown" style={{ float: "right" }}>
                  <button class="dropbtn border">
                    FILTER BY STATUS &ensp;
                    <FontAwesomeIcon icon={faAngleDown} size="1x" />
                  </button>
                  <div class="dropdown-content">
                    <a href="./">
                      <FontAwesomeIcon
                        icon={faUnlockKeyhole}
                        size="1.5x"
                        color="#17122b"
                      />{" "}
                      &ensp;Upcoming IDOs
                    </a>
                    <a href="./">
                      <FontAwesomeIcon
                        icon={faUnlockKeyhole}
                        size="1.5x"
                        color="black"
                      />
                      &ensp; Finished IDOs
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContainerCard />

            <div style={{ marginTop: 60 }}>
              <Button
                style={{
                  width: 200,
                  height: 60,
                  textAlign: "center",
                  backgroundColor: "#17122b",
                  borderRadius: 10,
                }}
              >
                View All Project &ensp;
                <FontAwesomeIcon icon={faAnglesRight} />
              </Button>
            </div>

            <div class="row" style={{ marginTop: 70 }}>
              <div class="col-4  " style={{ textAlign: "justify" }}>
                <img
                  src="https://parasol.finance/_next/static/media/parasol-logo-inverted-rgb.b4c85d6b.svg"
                  alt="Northern Lights"
                />
                <br></br>
                <br></br>
                <p>
                  Parasol Finance is the first-ever community governed IDO
                  platform built on Solana with the needs of both projects and
                  investors alike.
                </p>
                <br></br>
                <span style={{ marginRight: 25 }}>
                  <FontAwesomeIcon icon={faGithub} size="xl" color="white" />
                </span>
                <span style={{ marginRight: 25 }}>
                  <FontAwesomeIcon icon={faTwitter} size="xl" color="white" />
                </span>
                <span style={{ marginRight: 25 }}>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="xl"
                    color="white"
                  />
                </span>
                <span style={{ marginRight: 25 }}>
                  <FontAwesomeIcon icon={faDiscord} size="xl" color="white" />
                </span>
              </div>
              <div class="col-2" style={{ textAlign: "end", color: "white" }}>
                <p>
                  <b>PARASOL FINANCE</b>
                </p>
                <p>About Parasol </p>
                <p>Documentation</p>
                <p>Github Organization</p>
                <p>Token Address</p>
              </div>

              <div class="col-2 " style={{ textAlign: "end", color: "white" }}>
                <p>
                  <b>USEFUL LINKS</b>
                </p>
                <p>Apply for IDO</p>
                <p>WhitePaper</p>
                <p>Press Kit</p>
                <p>Tiers System</p>
              </div>

              <div class="col-2 " style={{ textAlign: "end", color: "white" }}>
                <p>
                  <b>SOCIAL LINKS</b>
                </p>
                <p>Twitter </p>
                <p>Telegram</p>
                <p>Discord</p>
                <p>Medium</p>
              </div>

              <div class="col-2 " style={{ textAlign: "end", color: "white" }}>
                <p>
                  <b>LEGAL</b>
                </p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
              </div>
            </div>

            <div class="row" style={{ marginTop: 70, paddingBottom: 100 }}>
              <div class="col-6 " style={{ textAlign: "justify" }}>
                <p>Copyright © 2022 Parasol Finance. All rights reserved.</p>
              </div>
              <div class="col-6 " style={{ textAlign: "end" }}>
                <p>
                  Build with in Europe | Official GitHub | Crafted by Clint ⚡️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
