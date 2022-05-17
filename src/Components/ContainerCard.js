import React, { Component } from "react";
import "../css/Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import {
  faCheckCircle,
  faUnlockKeyhole,
  faLock,
  faMap,
  faAngleRight,
  faAnglesRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faTwitter,
  faDiscord,
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

class ContainerCard extends Component {
  render() {
    return (
      <div class="cardHover row" style={{ marginTop: 30, textAlign: "start" }}>
        <div style={{ width: "33%", marginRight: "0.5%", transition: 0.4 }}>
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
              <CardTitle
                tag="h3"
                style={{ paddingTop: 10, fontSize: 24, fontWeight: 700 }}
              >
                Acadex Network&ensp;
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="blueviolet"
                  size="xs"
                />
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                style={{ paddingTop: 10, color: "white" }}
              >
                {" "}
                Acadex Network - Pioneering Decentralized Education Network.
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
        <div style={{ width: "33%", marginRight: "0.5%", transition: 0.4 }}>
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
              <CardTitle
                tag="h3"
                style={{ paddingTop: 10, fontSize: 24, fontWeight: 700 }}
              >
                Edensol&ensp;
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="blueviolet"
                  size="xs"
                />
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                style={{ paddingTop: 10 }}
              >
                Edensol is a fantasy gaming metaverse that combines fun packed
                action with features...
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
              <CardTitle
                tag="h3"
                style={{ paddingTop: 10, fontSize: 24, fontWeight: 700 }}
              >
                Alf Protocol&ensp;
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="blueviolet"
                  size="xs"
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
    );
  }
}

export default ContainerCard;
