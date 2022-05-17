import React, { Component } from "react";
import "../css/Index.css";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import imgS from "../accset/S.png";

import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class Menu extends Component {
  render() {
    return (
      <div
        class="row"
        style={{
          width: 1280,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 24,
          paddingBottom: 24,
          height: 95,
        }}
      >
        <div
          style={{
            borderColor: "white",
            justifyContent: "start",
            paddingLeft: 0,
            paddingRight: 0,
            textAlign: "start",
            width: 322,
            height: 47,
          }}
        >
          <img
            src="https://parasol.finance/_next/static/media/parasol-logo-inverted-rgb.b4c85d6b.svg"
            alt="Northern Lights"
            height={41}
            width={250}
          />
        </div>

        <div
          style={{
            width: 556,
            height: 47,
            paddingTop: 12,
            paddingLeft: 40,
            paddingRight: 0,
            textAlign: "start",
          }}
        >
          <a class="amenu" style={{ marginRight: 40 }}>
            Swap
          </a>

          <div class="dropdown" style={{ marginRight: 40 }}>
            <a class="amenu">
              Launchpad&nbsp;
              <FontAwesomeIcon icon={faAngleDown} width={20} height={20} />
            </a>

            <div class="dropdown-content">
              <div class="row">
                <div class="col-2" style={{ textAlign: "center" }}>
                  {" "}
                  <FontAwesomeIcon icon={faLock} color="#b064fe" size="1x" />
                </div>
                <div class="col-7">
                  <b>Upcoming & Live Project</b>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: "none",
                    }}
                  >
                    All the IDOs running of Parasol Finance
                  </p>
                </div>
                <div
                  class="col-2"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#402559",
                    borderRadius: 5,
                    paddingTop: 5,
                  }}
                >
                  <FontAwesomeIcon icon={faHand} size="1x" color="#b064fe" />{" "}
                  Claim
                </div>
              </div>
            </div>
          </div>

          <a class="amenu" style={{ marginRight: 40 }}>
            NFT Access Keys
          </a>

          <div class="dropdown" style={{ marginRight: 40 }}>
            <a class="amenu">
              Tools&nbsp;
              <FontAwesomeIcon icon={faAngleDown} width={20} height={20} />
            </a>

            <div class="dropdown-content">
              <a href="./">&ensp;Upcoming IDOs</a>
              <a href="./">&ensp; Finished IDOs</a>
            </div>
          </div>
          <div class="dropdown">
            <a class="amenu">
              More&nbsp;
              <FontAwesomeIcon icon={faAngleDown} width={20} height={20} />
            </a>

            <div class="dropdown-content">
              <a href="./">&ensp;Upcoming IDOs</a>
              <a href="./">&ensp; Finished IDOs</a>
            </div>
          </div>
        </div>

        <div
          style={{
            width: 362,
            height: 47,
            alignItems: "center",
            float: "right",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {" "}
          <div
            class="row"
            style={{
              paddingRight: 0,
              textAlign: "end",
              marginRight: 0,
              width: 322,
              marginLeft: 40,
            }}
          >
            <a
              style={{
                width: 104,
                height: 42,
                fontSize: 14,
                marginLeft: 32,
                justifyItems: "center",
                paddingTop: 13,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 10,
              }}
            >
              {" "}
              <img
                src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                alt="Northern Lights"
                width={16}
                height={16}
              />
              &ensp;$0.0705
            </a>
            <button class="buttontim" style={{}}>
              <img src={imgS} alt="Northern Lights" width={16} height={13} />{" "}
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
