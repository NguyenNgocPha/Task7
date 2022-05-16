import React, { Component } from "react";

import "../css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imdg from "../accset/pp.png";
import imdga from "../accset/ppa.png";
import imdgb from "../accset/ppb.png";
import imdgc from "../accset/ppc.png";
import imdgd from "../accset/ppd.png";
import logo1 from "../accset/logo_q-min.png";
import logo2 from "../accset/logo_p-min.png";
import logo3 from "../accset/logo-min.png";
import imgS from "../accset/S.png";

import {
  faPaperPlane,
  faHand,
  faBell,
} from "@fortawesome/free-regular-svg-icons";

import {
  faCheckCircle,
  faClipboardCheck,
  faUnlockKeyhole,
  faLock,
  faMap,
  faAngleRight,
  faAnglesRight,
  faAngleDown,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faTwitter,
  faDiscord,
  faApple,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
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

class Header extends Component {
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
          <div
            class="container-fluid"
            style={{
              fontWeight: "bold",
              fontSize: 14,
              height: 58,
              justifyContent: "center",
              backgroundColor: "#b064fe",
            }}
          >
            <div
              class="row "
              style={{
                width: 1240,
                margin: "auto",
                justifyContent: "center",
                paddingTop: 12,
              }}
            >
              <div
                class=" border"
                style={{
                  borderRadius: 200,
                  width: "36%",
                  paddingTop: 4,
                  height: 34,
                }}
              >
                {/* <div class="row">
                  <a
                    href="https://explorer.solana.com/address/PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9"
                    class="TheA"
                  >
                    <div class="row">
                      <div
                        class="col-1"
                        style={{ textAlign: "end", paddingRight: 0 }}
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          size="1x"
                          color="white"
                        />
                      </div>
                      <div
                        class="col-11"
                        style={{
                          paddingLeft: 4,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                          width: "87%",
                          WebkitLineClamp: 1,
                          textAlign: "start",
                        }}
                      >
                        ContractAddress:PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>

              <div
                class=" border"
                style={{
                  borderRadius: 200,
                  color: "white",
                  width: "41%",
                  textAlign: "center",
                  paddingTop: 4,
                  height: 34,
                  marginLeft: "1%",
                }}
              >
                <div class="row">
                  <div
                    class="TheA "
                    style={{
                      width: "31%",
                      textAlign: "start",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faClipboardCheck}
                      size="1x"
                      color="white"
                      className="flex"
                      paddingLeft={0}
                    />{" "}
                    Add to Bookmark
                  </div>
                  <div
                    class="TheA "
                    style={{
                      width: "29%",
                      textAlign: "start",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUnlockKeyhole}
                      size="1x"
                      color="white"
                      className="flex"
                      paddingLeft={0}
                    />{" "}
                    parasol.finance
                  </div>
                  <div
                    class="TheAB "
                    style={{
                      borderTopLeftRadius: 200,
                      borderBottomLeftRadius: 200,
                      width: "19%",
                      height: 24,
                      fontWeight: "none",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faWindows}
                      size="1x"
                      color="white"
                      className="flex"
                    />{" "}
                    CTRL+C
                  </div>
                  &nbsp;
                  <div
                    href="/"
                    class="TheAB "
                    style={{
                      borderTopRightRadius: 200,
                      borderBottomRightRadius: 200,
                      width: "19%",
                      height: 24,
                      fontWeight: "none",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faApple}
                      size="1x"
                      color="white"
                      className="flex"
                    />{" "}
                    CMD+D
                  </div>
                </div>
              </div>

              <div
                class="border"
                style={{
                  borderRadius: 200,
                  color: "white",
                  width: "21%",
                  paddingTop: 4,
                  marginLeft: "1%",
                }}
              >
                <div>
                  <a href="https://t.me/parasolfinance" class="TheA">
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      size="1x"
                      color="white"
                      className="flex"
                    />{" "}
                    t.me/parasolfinance|&ensp;Jown Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="container-fluid"
            style={{
              color: "white",
              paddingTop: 45,
              width: 1260,
              margin: "auto",
            }}
          >
            <div class="row">
              <div
                style={{
                  borderColor: "white",
                  textAlign: "justify",
                  width: "25%",
                }}
              >
                <img
                  src="https://parasol.finance/_next/static/media/parasol-logo-inverted-rgb.b4c85d6b.svg"
                  alt="Northern Lights"
                />
              </div>

              <div
                style={{
                  width: "52%",
                  paddingLeft: "2%",
                  fontSize: 14,
                }}
              >
                <div>
                  <Navbar expand="md">
                    <NavbarToggler onClick={function noRefCheckKK() {}} />
                    <Collapse navbar>
                      <Nav class="me-auto" navbar>
                        <NavItem>
                          <NavLink
                            href="/components/"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Swap
                          </NavLink>
                        </NavItem>

                        <UncontrolledDropdown
                          inNavbar
                          nav
                          style={{
                            color: "white",
                            marginLeft: 30,
                            fontWeight: "bold",
                          }}
                        >
                          <DropdownToggle caret nav style={{ color: "white" }}>
                            Launchpad
                          </DropdownToggle>
                          <DropdownMenu
                            style={{
                              backgroundColor: "#221736",
                              borderRadius: 20,
                            }}
                          >
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 512,
                                paddingTop: 40,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{ textAlign: "center" }}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faLock}
                                    color="#b064fe"
                                    size="1x"
                                  />
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
                                  <FontAwesomeIcon
                                    icon={faHand}
                                    size="1x"
                                    color="#b064fe"
                                  />{" "}
                                  Claim
                                </div>
                              </div>
                            </DropdownItem>

                            <DropdownItem divider style={{ color: "white" }} />
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 512,
                                paddingTop: 40,
                                borderRadius: 5,
                                height: "100%",
                                backgroundColor: "#53405C",
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{ textAlign: "center" }}
                                ></div>
                                <div class="col-8" style={{ color: "white" }}>
                                  <b>NFT Access Keys </b>
                                  <p
                                    style={{
                                      fontSize: 12,
                                      fontWeight: "none",
                                    }}
                                  >
                                    Our unique tiers system using NFT
                                  </p>
                                </div>
                              </div>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem
                          style={{
                            color: "white",
                            marginLeft: 30,

                            fontWeight: "bold",
                          }}
                        >
                          <NavLink
                            href="/components/"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            NFT Access Keys
                          </NavLink>
                        </NavItem>

                        <UncontrolledDropdown
                          inNavbar
                          nav
                          style={{
                            color: "white",
                            marginLeft: 30,
                            fontWeight: "bold",
                          }}
                        >
                          <DropdownToggle caret nav style={{ color: "white" }}>
                            Tools
                          </DropdownToggle>
                          <DropdownMenu
                            style={{
                              backgroundColor: "#221736",
                              borderRadius: 20,
                            }}
                          >
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 512,
                                paddingTop: 40,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{ textAlign: "center" }}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faLock}
                                    color="#b064fe"
                                    size="1x"
                                  />
                                </div>
                                <div class="col-7">
                                  <b>
                                    Create SPL Token<br></br>
                                    Create a Solana Token (SPL) in sencond
                                  </b>
                                </div>
                              </div>
                            </DropdownItem>
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 512,
                                paddingTop: 40,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{
                                    textAlign: "center",
                                    color: "white",
                                  }}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faLock}
                                    color="#b064fe"
                                    size="1x"
                                  />
                                </div>
                                <div class="col-10" style={{ color: "white" }}>
                                  <b>
                                    Airdrop Tool<br></br>
                                    Simplifies the sending of tokens to your
                                    community
                                  </b>
                                </div>
                              </div>
                            </DropdownItem>
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 512,
                                paddingTop: 40,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{
                                    textAlign: "center",
                                    color: "white",
                                  }}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faLock}
                                    color="#b064fe"
                                    size="1x"
                                  />
                                </div>
                                <div class="col-10" style={{ color: "white" }}>
                                  <b>
                                    NFT Mint & Drop<br></br>
                                    Help you to mint and sends NFTs.
                                  </b>
                                </div>
                              </div>
                            </DropdownItem>
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 512,
                                paddingTop: 40,
                                position: "absolute",
                                left: 10,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{
                                    textAlign: "center",
                                    color: "white",
                                  }}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faLock}
                                    color="#b064fe"
                                    size="1x"
                                  />
                                </div>
                                <div class="col-10" style={{ color: "white" }}>
                                  <b>
                                    Market Maker<br></br>
                                    Create liquidity and put your coin on the
                                    market
                                  </b>
                                </div>
                              </div>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown
                          inNavbar
                          nav
                          style={{
                            color: "white",
                            marginLeft: 30,
                            fontWeight: "bold",
                          }}
                        >
                          <DropdownToggle caret nav style={{ color: "white" }}>
                            More
                          </DropdownToggle>
                          <DropdownMenu
                            style={{
                              backgroundColor: "#221736",
                              borderRadius: 20,
                            }}
                          >
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 448,
                                paddingTop: 40,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{ textAlign: "center" }}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faLock}
                                    color="#b064fe"
                                    size="1x"
                                  />
                                </div>
                                <div class="col-7">
                                  <b>
                                    Upcoming & Live Project<br></br>
                                    All the IDOs running of Parasol Finance
                                  </b>
                                </div>
                              </div>
                            </DropdownItem>
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 448,
                                paddingTop: 40,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{
                                    textAlign: "center",
                                    color: "white",
                                  }}
                                >
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faLock}
                                    color="#b064fe"
                                    size="1x"
                                  />
                                </div>
                                <div class="col-8" style={{ color: "white" }}>
                                  <b>
                                    NFT Access Keys<br></br>
                                    Our unique tiers system using NFT
                                  </b>
                                </div>
                              </div>
                            </DropdownItem>
                            <DropdownItem divider style={{ color: "white" }} />
                            <DropdownItem
                              style={{
                                color: "white",
                                width: 448,
                                paddingTop: 40,
                              }}
                            >
                              <div class="row">
                                <div
                                  class="col-2"
                                  style={{ textAlign: "center" }}
                                ></div>
                                <div class="col-8" style={{ color: "white" }}>
                                  <b>
                                    NFT Access Keys<br></br>
                                    Our unique tiers system using NFT
                                  </b>
                                </div>
                              </div>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </div>

              <div style={{ width: "23%" }}>
                <div
                  style={{
                    color: "white",
                    textAlign: "justify",
                    paddingTop: 14,
                  }}
                >
                  <div class="row ">
                    <div
                      style={{
                        width: "35%",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      <img
                        src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                        alt="Northern Lights"
                        width={15}
                        height={15}
                      />
                      &ensp;$0.1000
                    </div>
                    <div style={{ width: "65%" }}>
                      <button class="buttontim" style={{}}>
                        <img
                          src={imgS}
                          alt="Northern Lights"
                          width={20}
                          height={20}
                        />{" "}
                        Connext Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" style={{ marginTop: 15, textAlign: "justify" }}>
              <div
                style={{
                  textAlign: "justify",
                  paddingTop: 40,
                  width: "55%",
                }}
              >
                <div style={{ marginTop: 10, fontSize: 14 }}>
                  <img
                    src={imgS}
                    alt="Northern Lights"
                    width={40}
                    height={45}
                  />{" "}
                  &ensp;Built on Solana Blockchain &ensp;
                  <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>

                <div
                  style={{
                    marginTop: 20,
                    textAlign: "start",
                    fontWeight: "bold",
                    lineHeight: 1.4,
                  }}
                  class="textBig"
                >
                  <b>
                    The First Community Governed
                    <span
                      style={{
                        color: "#b064fe",
                        textAlign: "start",
                        position: "relative",
                        paddingLeft: 12,
                      }}
                    >
                      IDO Platform
                    </span>
                  </b>
                </div>

                <div
                  style={{
                    marginTop: 30,
                    fontSize: 20,
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  Parasol Finance is the first-ever community governed IDO
                  platform built on Solana with the needs of both projects and
                  investors alike. <br />
                  <br />
                  The first launchpad with a NFT allocation system.
                </div>
                <div
                  class="ContainenButon"
                  style={{ marginTop: 40, fontSize: 20 }}
                >
                  <Button
                    class=""
                    style={{
                      width: 264,
                      height: 52,
                      textAlign: "center",
                      backgroundColor: "#b064fe",
                      borderRadius: 7,
                      marginRight: 10,
                    }}
                  >
                    <FontAwesomeIcon icon={faLock} /> Browse Upcoming IDOs
                  </Button>
                  <Button
                    class="buttonLeft"
                    style={{
                      width: 243,
                      height: 52,
                      textAlign: "center",
                      backgroundColor: "#17122b",
                      borderRadius: 7,
                    }}
                  >
                    <img
                      src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                      alt="Northern Lights"
                      width={18}
                      height={18}
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
                    <a href="https://quantrimang.com/navigation-bar-trong-css-163063">
                      <FontAwesomeIcon
                        icon={faUnlockKeyhole}
                        size="1.5x"
                        color="#17122b"
                      />{" "}
                      &ensp;Upcoming IDOs
                    </a>
                    <a href="https://quantrimang.com/opacity-trong-css-163016">
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

            <div
              class="cardHover row"
              style={{ marginTop: 30, textAlign: "start" }}
            >
              <div
                style={{ width: "33%", marginRight: "0.5%", transition: 0.4 }}
              >
                <Card
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#17122b",
                    borderColor: "#e5e7eb",
                    borderWidth: 0.2,
                  }}
                >
                  <CardImg
                    alt="Card image cap"
                    src="https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-hoa-huong-duong-1.jpg"
                    top
                    width="100%"
                    height={220}
                    style={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <CardBody style={{ width: "96%", margin: "auto" }}>
                    <CardTitle tag="h3" style={{ paddingTop: 10 }}>
                      Acadex Network&ensp;
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        color="blueviolet"
                      />
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                      style={{ paddingTop: 10 }}
                    >
                      {" "}
                      Acadex Network - Pioneering Decentralized Education
                      Network.
                    </CardSubtitle>
                    <CardText style={{ paddingTop: 20 }}>
                      <div class="row">
                        <div style={{ width: "30%" }}> Token Price</div>
                        <div style={{ width: "45%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>
                          $0.007
                          <img
                            src="https://parasol.finance/assets/logos/usdc-logo.svg"
                            alt="Northern Lights"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </CardText>
                    <CardText>
                      <div class="row">
                        <div style={{ width: "36%" }}> IDO Start Date</div>
                        <div style={{ width: "39%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>5/5/2022 </div>
                      </div>
                    </CardText>
                    <CardText>
                      <div class="row">
                        <div style={{ width: "33%" }}> IDO End Date</div>
                        <div style={{ width: "42%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>9/5/2022</div>
                      </div>
                    </CardText>
                    <Button
                      style={{
                        width: "57%",
                        height: 50,
                        marginRight: "3%",
                        backgroundColor: "blueviolet",
                        borderRadius: 7,
                      }}
                    >
                      <FontAwesomeIcon icon={faBell} />
                      &ensp; Set a Reminder
                    </Button>
                    <Button
                      style={{
                        width: "40%",
                        height: 50,
                        backgroundColor: "white",
                        color: "blueviolet",
                        borderRadius: 7,
                      }}
                    >
                      More info
                    </Button>
                  </CardBody>
                  <div class="nhanqc">PUBLISHED</div>
                </Card>
              </div>
              <div
                style={{ width: "33%", marginRight: "0.5%", transition: 0.4 }}
              >
                <Card
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#17122b",
                    borderColor: "#e5e7eb",
                  }}
                >
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    height={220}
                    style={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <CardBody style={{ width: "96%", margin: "auto" }}>
                    <CardTitle tag="h3" style={{ paddingTop: 10 }}>
                      Edensol&ensp;
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        color="blueviolet"
                      />
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                      style={{ paddingTop: 10 }}
                    >
                      Edensol is a fantasy gaming metaverse that combines fun
                      packed action with features...
                    </CardSubtitle>
                    <CardText style={{ paddingTop: 20 }}>
                      <div class="row">
                        <div style={{ width: "30%" }}> Token Price</div>
                        <div style={{ width: "45%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>
                          $0.007
                          <img
                            src="https://parasol.finance/assets/logos/usdc-logo.svg"
                            alt="Northern Lights"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </CardText>
                    <CardText>
                      <div class="row">
                        <div style={{ width: "36%" }}> IDO Start Date</div>
                        <div style={{ width: "39%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>5/5/2022 </div>
                      </div>
                    </CardText>
                    <CardText>
                      <div class="row">
                        <div style={{ width: "33%" }}> IDO End Date</div>
                        <div style={{ width: "42%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>9/5/2022</div>
                      </div>
                    </CardText>
                    <Button
                      style={{
                        width: "57%",
                        height: 50,
                        marginRight: "3%",
                        backgroundColor: "blueviolet",
                        borderRadius: 10,
                      }}
                    >
                      <FontAwesomeIcon icon={faBell} />
                      &ensp; Set a Reminder
                    </Button>
                    <Button
                      style={{
                        width: "40%",
                        height: 50,
                        backgroundColor: "white",
                        color: "blueviolet",
                        borderRadius: 10,
                      }}
                    >
                      More info
                    </Button>
                  </CardBody>
                  <div class="nhanqc">PUBLISHED</div>
                </Card>
              </div>
              <div style={{ width: "33%", transition: 0.4 }}>
                <Card
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#17122b",
                    borderStyle: "solid",
                    borderWidth: 0.1,
                    borderColor: "#e5e7eb",
                  }}
                >
                  <CardImg
                    alt="Card image cap"
                    src="https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-hoa-huong-duong-1.jpg"
                    top
                    width="100%"
                    height={220}
                    style={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <CardBody style={{ width: "96%", margin: "auto" }}>
                    <CardTitle tag="h3" style={{ paddingTop: 10 }}>
                      Alf Protocol&ensp;
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        color="blueviolet"
                      />
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                      style={{ paddingTop: 10 }}
                    >
                      Solana based Leveraged Liquidity Provision dApp.
                    </CardSubtitle>

                    <CardText style={{ paddingTop: 20 }}>
                      <div class="row">
                        <div style={{ width: "30%" }}> Token Price</div>
                        <div style={{ width: "45%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>
                          $0.007
                          <img
                            src="https://parasol.finance/assets/logos/usdc-logo.svg"
                            alt="Northern Lights"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </CardText>
                    <CardText>
                      <div class="row">
                        <div style={{ width: "36%" }}> IDO Start Date</div>
                        <div style={{ width: "39%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>5/5/2022 </div>
                      </div>
                    </CardText>
                    <CardText>
                      <div class="row">
                        <div style={{ width: "33%" }}> IDO End Date</div>
                        <div style={{ width: "42%", height: 4 }}>
                          <hr class="boderCard"></hr>
                        </div>
                        <div style={{ width: "25%" }}>9/5/2022</div>
                      </div>
                    </CardText>

                    <Button
                      style={{
                        width: "57%",
                        height: 50,
                        marginRight: "3%",
                        backgroundColor: "blueviolet",
                        borderRadius: 10,
                      }}
                    >
                      <FontAwesomeIcon icon={faBell} />
                      &ensp; Set a Reminder
                    </Button>
                    <Button
                      style={{
                        width: "40  %",
                        height: 50,
                        backgroundColor: "white",
                        color: "blueviolet",
                        borderRadius: 10,
                      }}
                    >
                      More info
                    </Button>
                  </CardBody>
                  <div class="nhanqc">PUBLISHED</div>
                </Card>
              </div>
            </div>

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
                <span style={{ marginRight: 25 }}>
                  <FontAwesomeIcon
                    icon={faMap}
                    size="xl"
                    color="white"
                    class="xoay"
                  />
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

            <div class="row" style={{ marginTop: 50, paddingBottom: 100 }}>
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

export default Header;
