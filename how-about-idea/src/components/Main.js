import { Link } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React, { useState } from "react";
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
          padding:2vh 0;
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
`;

const Main = () => {
  return (
    <MainContents>
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
              <Link to="/play" className="Link">
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
                  브레인스토밍 시작하기
                </p>
              </Link>
              <Link to="/mindlist" className="Link">
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
    </MainContents>
  );
};

export default Main;
