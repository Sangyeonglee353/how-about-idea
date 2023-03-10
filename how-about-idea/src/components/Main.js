import MainFooter from "./MainFooter.js";
import { Link } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React from "react";
const MainContents = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  /* height: calc(100vh - 115px - 80px); */
  /* height: 100%; */
  margin-top: 42px;

  .intro {
    margin-left: 24px;

    p.top {
      color: var(--color-main-blue);
      font-weight: bold;
      font-size: 15px;
      line-height: 32px;
    }
    p.bottom {
      margin-top: 30px;
      font-size: 15px;
      line-height: 32px;
    }
    .break_desktop {
      display: block;
    }
    @media screen and (max-width: 500px) {
      margin: 0;
      text-align: center;

      .break_mobile {
        display: block;
      }
      .break_desktop {
        display: inline;
      }
    }
  }
  .recommend {
    .title {
      text-align: center;
      margin-top: 110px;
      color: var(--color-main-jinblue);
    }
    ul {
      width: 100%;
      height: 110px;
      background-color: var(--color-main-skyblue);
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      list-style-type: none;
    }
    img {
      width: 60px;
      height: 60px;
      margin: 0 auto;
    }
    .img-title {
      margin-top: 3px;
      font-size: 8px;
      text-align: center;
    }
    @media screen and (max-width: 500px) {
      .title {
        margin-top: 20px;
      }
    }
  }
  .move {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    height: 193px;

    button {
      width: 130px;
      height: 45px;
      background-color: var(--color-main-skyblue);
      border: 1px solid var(--color-main-skyblue);
      border-radius: 10px;
      font-family: "Nanum Gothic", sans-serif;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const MainContentBar = styled.div`
  width: 100%;
  height: 12px;
  margin-top: 42px;
  background-color: var(--color-main-skyblue);
`;

const Main = () => {
  return (
    <div>
      <MainContents>
        {/* <MainContentBar /> */}
        <div className="intro">
          <p className="top">
            ?????????????????? ?????? ?????????.
            <br />
            ??????????????? ???????????? ?????? ???????????? ?????? ????????????????
          </p>
          <p className="bottom">
            ????????? ?????? ??? ?????? ???????????????????????? ???????????????.
            <br />
            ????????? ?????? ??????????????? ?????? ?????????
            <span className="break_mobile"> ????????? ????????? ?????????</span>
            <span className="break_desktop">
              ???????????? ??????????????? ??????????????????.
            </span>
          </p>
        </div>
        <div>
          <div className="recommend">
            <h2 className="title">?????? ????????? ?????? ?????????!</h2>
            <ul>
              <li>
                <img src={student_logo} alt="student_logo" />
                <div className="img-title">?????????</div>
              </li>
              <li>
                <img src={ceo_logo} alt="ceo_logo" />
                <div className="img-title">?????? ?????????</div>
              </li>
              <li>
                <img src={planner_logo} alt="planner_logo" />
                <div className="img-title">?????????</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="move">
          <Link to={"/login"}>
            <button type="button">??????????????? ??????</button>
          </Link>
        </div>
        {/* <MainContentBar /> */}
      </MainContents>
      <MainFooter />
    </div>
  );
};

export default Main;
