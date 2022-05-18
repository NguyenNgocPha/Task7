import React, { Component } from "react";
import "../css/Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import CricelCheck from "../accset/CricelCheck.svg";
import squareCheck from "../accset/squareCheck.svg";
import apple from "../accset/apple.svg";
import Look from "../accset/Look.svg";
import window from "../accset/window.svg";
import telegram from "../accset/telegram.svg";

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
                        paddingRight: 0,
                        marginTop: -2,
                        width: 20,
                      }}
                    >
                      <img
                        src={CricelCheck}
                        height={15}
                        width={16}
                        class="circle"
                      />
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
                  <img
                    src={squareCheck}
                    height={16}
                    width={16}
                    class="circle"
                    style={{ marginTop: -4 }}
                  />
                  &nbsp;Add to Bookmark
                </div>
                <div
                  class="TheA "
                  style={{
                    width: "27%",
                    textAlign: "start",
                    paddingTop: 1,
                    paddingLeft: 4,
                    paddingRight: 0,
                  }}
                >
                  <img
                    src={Look}
                    height={16}
                    width={16}
                    class="circle"
                    style={{ marginTop: -4, marginRight: 4 }}
                  />
                  parasol.finance
                </div>
                <div
                  class="TheAB bg-opacity-50"
                  style={{
                    borderTopLeftRadius: 200,
                    borderBottomLeftRadius: 200,
                    width: 95,
                    height: 24,
                    paddingLeft: 5,
                    paddingTop: 2,
                  }}
                >
                  <img
                    src={window}
                    height={16}
                    width={16}
                    class="circle"
                    style={{ marginTop: -4, marginRight: 4 }}
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
                    width: 95,
                    paddingTop: 2,
                    paddingLeft: 5,
                    height: 24,
                  }}
                >
                  <img
                    src={apple}
                    height={16}
                    width={16}
                    class="circle"
                    style={{ marginTop: -4, marginRight: 4 }}
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
                  <img
                    src={telegram}
                    height={16}
                    width={16}
                    class="circle"
                    style={{ marginTop: -4 }}
                  />{" "}
                  &ensp;t.me/parasolfinance |&ensp;Join Now
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
