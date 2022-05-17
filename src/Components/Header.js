import React, { Component } from "react";
import "../css/Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import {
  faCheckCircle,
  faClipboardCheck,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";

import { faApple, faWindows } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  render() {
    return (
      <div>
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
              textAlign: "start",
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >
            <div
              class=" border"
              style={{
                borderRadius: 200,
                width: 445,
                paddingTop: 5,
                paddingBottom: 4,
                height: 34,
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              <div class="row">
                <a
                  href="https://explorer.solana.com/address/PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9"
                  class="TheA"
                >
                  <div class="row">
                    <div
                      style={{
                        textAlign: "center",
                        paddingRight: 0,
                        width: 20,
                      }}
                    >
                      <i
                        class="fa-regular fa-circle-check"
                        style={{
                          borderColor: "white",
                          borderWidth: "1px",
                          fontSize: 12,
                        }}
                      ></i>
                    </div>
                    <div
                      class="col-11"
                      style={{
                        paddingLeft: 12,
                        fontWeight: 700,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal",
                        width: "95%",
                        WebkitLineClamp: 1,
                        textAlign: "start",
                      }}
                    >
                      Contract&nbsp;Address:&nbsp;PFo38bhqnYn9ntEs6GHN5LAi26QX1tBxMabmqu5LtX9
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              class=" border"
              style={{
                borderRadius: 200,
                color: "white",
                width: 495,
                textAlign: "center",
                paddingTop: 4,
                paddingBottom: 4,
                height: 34,
                paddingLeft: 16,
                paddingRight: 4,
                marginLeft: 15,
              }}
            >
              <div class="row">
                <div
                  class="TheA "
                  style={{
                    width: "31%",
                    paddingRight: 1,
                    paddingTop: 1,
                    textAlign: "start",
                  }}
                >
                  <i
                    class="fa-solid fa-clipboard-check"
                    style={{
                      borderColor: "white",
                      borderWidth: "1px",
                      fontSize: 12,
                    }}
                  ></i>{" "}
                  &nbsp;Add to Bookmark
                </div>
                <div
                  class="TheA "
                  style={{
                    width: "29%",
                    textAlign: "start",
                    paddingTop: 1,
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
                  class="TheAB bg-opacity-50"
                  style={{
                    borderTopLeftRadius: 200,
                    borderBottomLeftRadius: 200,
                    width: 94,
                    height: 24,
                    paddingLeft: 0,
                    paddingTop: 2,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faWindows}
                    size="1x"
                    color="white"
                    className="flex"
                  />{" "}
                  &nbsp;CTRL+C
                </div>
                &nbsp;
                <div
                  href="/"
                  class="TheAB bg-opacity-50"
                  style={{
                    borderTopRightRadius: 200,
                    borderBottomRightRadius: 200,
                    width: 91,
                    paddingTop: 2,
                    paddingLeft: 0,
                    height: 24,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faApple}
                    size="x"
                    color="white"
                    className="flex"
                  />{" "}
                  &nbsp;CMD+D
                </div>
              </div>
            </div>

            <div
              class="border"
              style={{
                borderRadius: 200,
                color: "white",
                width: 270,
                paddingTop: 5,
                paddingLeft: 12,
                marginLeft: 15,
              }}
            >
              <div>
                <a href="https://t.me/parasolfinance" class="TheA">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="xs"
                    color="white"
                    className="flex"
                  />{" "}
                  &ensp;t.me/parasolfinance |&ensp;Jown Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
