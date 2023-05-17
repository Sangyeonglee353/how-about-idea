import { Link, useLocation } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import mainBackground from "../images/main_background.jpg";

const MainContents = styled.div`
  width: 100vw;

  .wrap {
    width: 100vw;
    height: 92vh;
    background: url(${mainBackground});
    background-repeat: no-repeat;
    background-size: cover;

    .content {
      width: 100vw;
      height: 92vh;
      background: #00000099;
      display: flex;
      align-items: center;
      @media (max-width: 600px) {
        flex-direction: column;
      }
      .container1 {
        width: 45vw;
        margin-left: 5vw;
        @media (max-width: 600px) {
          width: 80vw;
          margin-top: 15vh;
          margin-bottom: 10vh;
        }
        .text0 {
          font-size: 8vw;
          @media (max-width: 600px) {
            font-size: 48px;
          }
          font-weight: 700;
          background: linear-gradient(120deg, #89f7fe 25%, #66a6ff 30%);
          color: transparent;
          -webkit-background-clip: text;
        }

        .text1,
        .text2 {
          margin-top: 5vh;
          color: #ffffff;
          font-size: 3vw;
          @media (max-width: 600px) {
            font-size: 6vw;
          }
          font-weight: 700;
        }
      }

      .container2 {
        width: 20vw;
        margin-left: 15vw;
        @media (max-width: 600px) {
          width: 80vw;
          margin-left: 0vw;
        }

        .login,
        .signup {
          width: 30vw;

          @media (max-width: 600px) {
            width: 80vw;
          }

          border: 1px solid #000000;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          padding: 2vh 0;
        }

        .login {
          color: #3caeff;
          background: #ffffff;
        }

        .signup {
          margin-top: 5vh;
          background: #ffffff;
        }
      }
    }
  }

  .b {
    ${(props) => !props.popup && "display:none"};
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #00000099;
    top: 0;
  }

  .popup {
    position: fixed;
    width: 20vw;
    background: #ffffff;
    top: ${(props) => (props.popup ? 40 : 120)}vh;
    left: 40vw;
    transition: ${(props) => (props.popup ? 0.5 : 0)}s;
    @media (max-width: 600px) {
      width: 60vw;
      left: 20vw;
    }
    border-radius: 12px;
    .popupcontent {
      text-align: center;
      width: 20vw;
      padding: 3vh 0;
      @media (max-width: 600px) {
        width: 60vw;
        padding: 2vh 0;
      }
    }

    input {
      border-radius: 12px;
      border: 1px solid #00000099;
      padding: 1vh 2vw;
      width: 16vw;
      margin-left: 2vw;
      @media (max-width: 600px) {
        width: 50vw;
        margin-left: 5vw;
      }
    }

    input:focus {
      outline: none;
      border: 1px solid #000000;
    }

    .popupmenu {
      width: 100%;
      display: flex;
      border-top: 1px solid #00000099;
      margin-top: 2vh;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1vh 0;
        width: 50%;
        cursor: pointer;
      }

      .cancle {
        color: #b03131;
        border-right: 1px solid #00000099;
      }
    }
  }
`;

let currentPath = "";
const Main = (props) => {
  const start = useRef();
  const [popup, setPopup] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.search === "?start") setPopup(true);
  }, []);

  useEffect(() => {
    if (location.search === "?brainstorming")
      window.location.href = "/how-about-idea?start";
  });
  return (
    <MainContents popup={popup}>
      <div className="wrap">
        <div className="content">
          <div className="container1">
            <p className="margin"></p>
            <p className="text0">HOWAI.</p>
            <p className="text1">아이디어가 생각나지 않을 때</p>
            <p className="text2">쉽고 빠른 AI 브레인스토밍</p>
          </div>

          {sessionStorage.getItem("howai_id") === null && (
            <div className="container2">
              <Link to="/login" className="Link">
                <p
                  className="login"
                  onMouseOver={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.background = "#3CAEFF";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#3CAEFF";
                    e.target.style.background = "#ffffff";
                  }}
                  onTouchStart={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.background = "#3CAEFF";
                  }}
                  onTouchEnd={(e) => {
                    e.target.style.color = "#3CAEFF";
                    e.target.style.background = "#ffffff";
                  }}
                >
                  로그인 하기
                </p>
              </Link>
              <Link to="/register" className="Link">
                <p
                  className="signup"
                  onMouseOver={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.background = "#000000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#000000";
                    e.target.style.background = "#ffffff";
                  }}
                  onTouchStart={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.background = "#000000";
                  }}
                  onTouchEnd={(e) => {
                    e.target.style.color = "#000000";
                    e.target.style.background = "#ffffff";
                  }}
                >
                  회원가입
                </p>
              </Link>
            </div>
          )}

          {sessionStorage.getItem("howai_id") !== null && (
            <div className="container2">
              <p
                className="login"
                onClick={() => {
                  setPopup(true);
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#ffffff";
                  e.target.style.background = "#3CAEFF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#3CAEFF";
                  e.target.style.background = "#ffffff";
                }}
                onTouchStart={(e) => {
                  e.target.style.color = "#ffffff";
                  e.target.style.background = "#3CAEFF";
                }}
                onTouchEnd={(e) => {
                  e.target.style.color = "#3CAEFF";
                  e.target.style.background = "#ffffff";
                }}
              >
                브레인스토밍 시작하기
              </p>

              <Link to="/mindstore" className="Link">
                <p
                  className="signup"
                  onMouseOver={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.background = "#000000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#000000";
                    e.target.style.background = "#ffffff";
                  }}
                  onTouchStart={(e) => {
                    e.target.style.color = "#ffffff";
                    e.target.style.background = "#000000";
                  }}
                  onTouchEnd={(e) => {
                    e.target.style.color = "#000000";
                    e.target.style.background = "#ffffff";
                  }}
                >
                  저장소 바로가기
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        className="b"
        onClick={() => {
          setPopup(false);
        }}
      ></div>

      <div className="popup">
        <p className="popupcontent">시작 단어</p>

        <input
          type="text"
          className="start"
          ref={start}
          placeholder="단어를 입력해주세요"
        />
        <div className="popupmenu">
          <p
            className="btn cancle"
            onClick={() => {
              setPopup(false);
            }}
          >
            {" "}
            취소{" "}
          </p>
          <p
            className="btn excute"
            onClick={() => {
              if (start.current.value !== "" && start.current.value !== " ")
                window.location.href =
                  "/how-about-idea/BrainStorming?root=" + start.current.value;
              else alert("시작 단어를 입력해 주세요");
            }}
          >
            시작
          </p>
        </div>
      </div>
    </MainContents>
  );
};

export default Main;
