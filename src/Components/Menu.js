import React, { Component } from "react";
import "../css/Index.css";
import "../css/Menu.css";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import lookButton from "../accset/lookButton2.svg";
import imgS from "../accset/S.svg";

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

          <div class="dropdownMenu" style={{ marginRight: 40 }}>
            <a class="amenu">
              Launchpad&nbsp;
              <FontAwesomeIcon icon={faAngleDown} width={20} height={20} />
            </a>
            <div class="dropdown-contentMenu">
              <div
                class="row"
                style={{
                  width: 472,
                  height: 72,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 30,
                }}
              >
                <a
                  style={{
                    display: "flex",
                  }}
                >
                  <img src={lookButton} height={24} width={24} class="circle" />

                  <div style={{ marginLeft: 16 }}>
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
                </a>

                <div
                  style={{
                    alignItems: "center",
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 12,
                    width: 140,
                    height: 72,
                  }}
                >
                  <div
                    class="thedu"
                    style={{
                      width: 104,
                      paddingTop: 12,
                      paddingBottom: 12,
                      paddingLeft: 16,
                      paddingRight: 16,
                      height: 48,
                      borderRadius: 5,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHand}
                      style={{ marginRight: 5 }}
                      color="#b064fe"
                    />{" "}
                    Claim
                  </div>
                </div>
              </div>

              <div class="footerThedu">
                <div
                  class="row"
                  style={{
                    width: 472,
                    height: 72,
                    marginLeft: 0,
                    marginRight: 0,
                  }}
                >
                  <a
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src={lookButton}
                      height={24}
                      width={24}
                      class="circle"
                    />

                    <div style={{ marginLeft: 16 }}>
                      <b>Submit Your Project</b>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: "none",
                        }}
                      >
                        You can launch your project in a few clicks
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a class="amenu" style={{ marginRight: 40 }}>
            NFT Access Keys
          </a>

          <div class="dropdownMenu" style={{ marginRight: 40 }}>
            <a class="amenu">
              Tools&nbsp;
              <FontAwesomeIcon icon={faAngleDown} width={20} height={20} />
            </a>

            <div class="dropdown-contentMenu">
              <div
                class="row"
                style={{
                  width: 472,
                  height: 72,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 30,
                }}
              >
                <a
                  style={{
                    display: "flex",
                    width: 448,
                  }}
                >
                  <img src={lookButton} height={24} width={24} class="circle" />

                  <div style={{ marginLeft: 16 }}>
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
                </a>
              </div>

              <div class="footerThedu">
                <div
                  class="row"
                  style={{
                    width: 472,
                    height: 72,
                    marginLeft: 0,
                    marginRight: 0,
                  }}
                >
                  <a
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src={lookButton}
                      height={24}
                      width={24}
                      class="circle"
                    />

                    <div style={{ marginLeft: 16 }}>
                      <b>Submit Your Project</b>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: "none",
                        }}
                      >
                        You can launch your project in a few clicks
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="dropdownMenu">
            <a class="amenu">
              More&nbsp;
              <FontAwesomeIcon icon={faAngleDown} width={20} height={20} />
            </a>

            <div class="dropdown-contentMenu">
              <div
                class="row"
                style={{
                  width: 472,
                  height: 72,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 30,
                }}
              >
                <a
                  style={{
                    display: "flex",
                    width: 448,
                  }}
                >
                  <img src={lookButton} height={24} width={24} class="circle" />

                  <div style={{ marginLeft: 16 }}>
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
                </a>
              </div>

              <div class="footerThedu">
                <div
                  class="row"
                  style={{
                    width: 472,
                    height: 72,
                    marginLeft: 0,
                    marginRight: 0,
                  }}
                >
                  <a
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      src={lookButton}
                      height={24}
                      width={24}
                      class="circle"
                    />

                    <div style={{ marginLeft: 16 }}>
                      <b>Submit Your Project</b>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: "none",
                        }}
                      >
                        You can launch your project in a few clicks
                      </p>
                    </div>
                  </a>
                </div>
              </div>
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
              class="menuA"
              style={{
                marginTop: 5,
                width: 106,
                height: 36,
                marginLeft: 32,
                alignItems: "center",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 16,
                textDecoration: "none",
              }}
            >
              {" "}
              <img
                src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                alt="Northern Lights"
                width={16}
                height={16}
                style={{ marginTop: -3, marginRight: 1 }}
              />
              &ensp;$0.0705
            </a>
            <button class="buttontim" style={{}}>
              <img
                src={imgS}
                alt="Northern Lights"
                height={12}
                style={{ marginTop: -5, marginRight: 4 }}
              />{" "}
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
