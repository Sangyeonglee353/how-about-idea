import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Cvs = styled.canvas`
  margin: 0;
  width: 90%;
  height: 350px;
  margin: 1vh 5%;
  background: #ffffff;
  border-radius: 12px;
`;
const Appcss = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #f5f7fa;
  height: 100vh;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none;
  .screen {
    width: 90%;
    height: ${(props) => props.vh * 100 - 300}px;
    border-radius: 12px 12px 0 0;
    background: #ffffff;
    margin: 0 5%;
    border-radius: 12px;

    .menu {
      display: flex;

      .title {
        margin: 0;
        padding: 1vh 0;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      .menu1 {
        border-right: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .words {
      width: 200%;
      display: flex;
      transform: translate(0%);
      transition: 0.5s;

      .selected {
        padding: 2% 4%;
        margin: 0;
        width: 50%;
        overflow-y: auto;

        .word {
          display: flex;
          flex-wrap: wrap;
          justify-content: left;

          .node {
            width: 30%;
            overflow: hidden;
            border: 2px solid skyblue;
            border-radius: 12px;
            margin: 5% 1.5%;

            .nodewrap {
              width: 200%;
              display: flex;
              transform: translate(0%);
              transition: 0.5s;

              .container1,
              .container2 {
                display: flex;
                width: 50%;
                align-items: center;
                justify-content: center;
              }

              .container1 {
                text-align: center;
              }

              .add,
              .cancle {
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .add {
                padding: 7% 1%;
                color: #ffffff;
                background: skyblue;
              }

              .cancle {
                color: red;
                padding: 5% 1%;
              }
            }
          }
        }
      }

      .tools {
        padding: 2% 4%;
        margin: 0;
        width: 50%;
        height: ${(props) => props.vh * 100 - 300}px;
        .selected {
          width: 80%;
          height: 15vh;
          background: rgba(0, 0, 0, 0.1);
          margin: 3vh auto;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #000000;
        }
        .input {
          display: flex;
        }

        .word_input {
          width: 70%;
          margin-left: 7%;
          border: 0;
          border: 2px solid skyblue;
          border-radius: 12px;
          padding: 1vh 2%;
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 3%;
          width: 12%;
          height: auto;
          background: skyblue;
          border-radius: 12px;
        }

        .send {
          font-size: 18px;
          color: #ffffff;
        }

        .word_input:focus {
          outline: none;
        }

        .time {
          width: 100%;
          margin-top: 5vh;
          display: flex;
          align-items: center;
          .increase,
          .decrease {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 15%;
            height: 5vh;
            font-size: 36px;
            border-radius: 12px;
            margin: 0 8%;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.2);
          }

          .left {
            display: inline-block;
            padding: 40px 40px;
            border-radius: 100%;
            border: 2px solid skyblue;
            margin: 0 auto;
          }
        }

        .finish {
          width: 90%;
          margin-left: 5%;
          margin-top: 3vh;
          padding: 0.5vh 2vw;
          text-align: center;
          border: 2px solid red;
          border-radius: 8px;
          color: #000000aa;
        }
      }
    }
  }

  /* Footer */
  .btnList {
    position: fixed;
    bottom: 0;
    width: 428px;
    height: 80px;
    margin: 0 auto;
    @media (max-width: 500px) {
      width: 100vw;
    }
    button {
      display: inline-block;
      width: 50%;
      height: 100%;
      background-color: white;
      border: 5px solid var(--color-main-blue);
      text-align: center;
      font-size: 20px;
      &:first-child {
        &:hover {
          background-color: var(--color-main-blue);
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
      }
      &:last-child {
        background-color: var(--color-sub-grey);
        border-color: var(--color-sub-grey);
        &.activeBtn {
          background-color: var(--color-main-blue);
          border-color: var(--color-main-blue);
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;

function Wordselect() {
  const navigate = useNavigate();
  const cvs = useRef("");
  const w = useRef("");
  const left = useRef();
  const menu = useRef();
  const tool = useRef();
  const add = useRef();
  let time_left = 100;
  let json_data = {
    root: "개",
    개: ["리트리버", "푸들", "시츄", "말티즈", "웰시코기", "고양이"],
    고양이: ["브리티시 숏헤어", "러시안 블루", "페르시안"],
    리트리버: ["갈색", "대형견", "사냥"],
  };
  let list = [...json_data[json_data.root]];

  let select = [json_data.root];

  const [size, setSize] = useState(
    window.innerHeight < 600 ? window.screen.availHeight : window.innerHeight
  );

  class word {
    constructor() {
      this.ctx = document.getElementsByTagName("canvas").item(0);
      this.x = this.ctx.width;
      this.y =
        Math.floor(Math.random() * (Math.floor(this.ctx.height / 100) - 1)) *
          100 +
        100;
      this.text = list[Math.floor(Math.random() * list.length)];
      this.color = this.random_color();
    }

    random_color() {
      let buf = [
        "#FF8C00",
        "#E9967A",
        "#00CED1",
        "#696969",
        "#90EE90",
        "#FF4500",
        "#DB7093",
        "#FA8072",
        "#F4A460",
        "#D8BFD8",
        "#90EE90",
      ];

      return buf[Math.floor(Math.random() * buf.length)];
    }

    draw() {
      let ctx = document
        .getElementsByTagName("canvas")
        .item(0)
        .getContext("2d");
      ctx.font = "24px serif";
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, this.x, this.y);
    }
  }

  let timer = 0;
  let words = [];
  let animation;

  function frameAnimation() {
    let ctx = document.getElementsByTagName("canvas").item(0).getContext("2d");
    animation = requestAnimationFrame(frameAnimation);
    timer++;
    ctx.clearRect(0, 0, cvs.current.width, cvs.current.height);

    if (timer % 100 === 0) {
      let w = new word();
      words.push(w);
    }

    words.forEach((e, idx, arr) => {
      if (e.x < 0) {
        arr.splice(idx, 1);
      }

      for (let i = 0; i < select.length; i++) {
        if (select[i] === e.text) {
          arr.splice(idx, 1);
          break;
        }
      }

      e.x -= 1.5;
      e.draw();
    });
  }

  useEffect(() => {
    setTimeout(() => {
      frameAnimation();
    }, 100);
    window.addEventListener("resize", () => {
      setSize(
        window.innerHeight < 600
          ? window.screen.availHeight
          : window.innerHeight
      );
    });
  }, []);

  return (
    <Appcss vh={size / 100}>
      <Cvs
        ref={cvs}
        width={350}
        height={350}
        onClick={(e) => {
          const desktop = window.innerWidth / 2 - 200;
          const x = window.navigator.userAgent.includes("Window")
            ? e.clientX - desktop
            : e.clientX;
          const y = window.navigator.userAgent.includes("Window")
            ? e.clientY
            : e.clientY;
          let min = 70000;
          let click_word;
          let idx;

          for (let i = 0; i < words.length; i++) {
            let gap =
              (x - words[i].x) * (x - words[i].x) +
              (y - words[i].y) * (y - words[i].y);
            if (min > gap && gap < 20000) {
              min = gap;
              click_word = words[i].text;
              idx = i;
            }
          }
          if (click_word !== undefined) {
            list.splice(idx, 1);
            select.push(click_word);

            if (json_data[click_word] !== undefined)
              list = [...list, ...json_data[click_word]];

            let num = w.current.childNodes.length;
            document
              .getElementsByClassName("word")
              .item(0).innerHTML += `<div class="node">
            <div class="nodewrap">
              <div class="container1" onClick='document.getElementsByClassName("nodewrap").item(${num}).style.transform="translate(-50%)"'>
                ${click_word}
              </div>
              <div class="container2">
              
                <p class="cancle" 
                onClick='
                  document.getElementsByClassName("nodewrap").item(${num}).style.transform="translate(0%)";
                  document.getElementById("tool").innerText="${"단어를 선택해주세요"}";
                >취소</p>

                <p class="add" 
                onClick='

                  document.getElementById("tool").innerText="${click_word}";
                  document.getElementsByClassName("nodewrap").item(${num}).style.transform="translate(0%)";
                  document.getElementsByClassName("words").item(0).style.transform="translate(-50%)"
                '>선택</p>
              
              </div>
            </div>
          </div>`;
          }
        }}
      ></Cvs>
      <div className="screen">
        <div className="menu">
          <p
            className="title menu1"
            onClick={() => {
              menu.current.style.transform = "translate(0%)";
            }}
          >
            selected words
          </p>
          <p
            className="title menu2"
            onClick={() => {
              menu.current.style.transform = "translate(-50%)";
            }}
          >
            tools
          </p>
        </div>

        <div className="words" ref={menu}>
          <div className="selected">
            <div className="word" ref={w}>
              <div className="node">
                <div className="nodewrap">
                  <div
                    className="container1"
                    onClick={() => {
                      document
                        .getElementsByClassName("nodewrap")
                        .item(0).style.transform = "translate(-50%)";
                    }}
                  >
                    {json_data["root"]}
                  </div>
                  <div className="container2">
                    <p
                      className="cancle"
                      onClick={() => {
                        document
                          .getElementsByClassName("nodewrap")
                          .item(0).style.transform = "translate(0%)";
                        tool.current.innertext = "단어를 선택해 주세요";
                      }}
                    >
                      취소
                    </p>

                    <p
                      className="add"
                      onClick={() => {
                        tool.current.innerText = json_data["root"];
                        document
                          .getElementsByClassName("nodewrap")
                          .item(0).style.transform = "translate(0%)";
                        menu.current.style.transform = "translate(-50%)";
                      }}
                    >
                      선택
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tools">
            <p className="selected" ref={tool} id="tool">
              단어를 선택해 주세요
            </p>

            <div className="input">
              <input
                className="word_input"
                type={"text"}
                placeholder={"하위 단어 추가"}
                ref={add}
              />

              <div className="icon">
                <FontAwesomeIcon
                  className="send"
                  icon={faPaperPlane}
                  onClick={() => {
                    if (
                      add.current.value === "" ||
                      add.current.value === "\n"
                    ) {
                      alert("단어를 입력해 주세요");
                      add.current.value = "";
                      return;
                    }

                    if (tool.current.innerText !== "단어를 선택해 주세요") {
                      let num = w.current.childNodes.length;
                      document
                        .getElementsByClassName("word")
                        .item(0).innerHTML += `<div class="node">
                      <div class="nodewrap">
                        <div class="container1" onClick='document.getElementsByClassName("nodewrap").item(${num}).style.transform="translate(-50%)"'>
                          ${add.current.value}
                        </div>
                        <div class="container2">
                        
                          <p class="cancle" 
                          onClick='
                            document.getElementsByClassName("nodewrap").item(${num}).style.transform="translate(0%)";
                            document.getElementById("tool").innerText="${"단어를 선택해주세요"}";
                            
                            '
                          >취소</p>

                          <p class="add" 
                          onClick='

                            document.getElementById("tool").innerText="${
                              add.current.value
                            }";
                            document.getElementsByClassName("nodewrap").item(${num}).style.transform="translate(0%)";
                            document.getElementsByClassName("words").item(0).style.transform="translate(-50%)"
                          '>선택</p>
                        
                        </div>
                      </div>
                    </div>`;
                      add.current.value = "";
                    } else alert("단어를 선택해주세요");
                  }}
                />
              </div>
            </div>

            <div className="time">
              <p
                className="decrease"
                onClick={() => {
                  time_left -= 10;
                  left.current.innerText = time_left;
                }}
              >
                -
              </p>

              <p className="left" ref={left}>
                {time_left}
              </p>
              <p
                className="increase"
                onClick={() => {
                  time_left += 10;
                  left.current.innerText = time_left;
                }}
              >
                +
              </p>
            </div>

            <p className="finish">저장 및 종료</p>
          </div>
        </div>
      </div>

      <div className="btnList">
        <button
          id="prevPage"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </button>
        <Link to={"/nodeselect"}>
          <button className="activeBtn" id="nextPage">
            다음
          </button>
        </Link>
      </div>
    </Appcss>
  );
}

export default Wordselect;
