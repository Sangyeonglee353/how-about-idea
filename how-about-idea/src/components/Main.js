import MainFooter from "./MainFooter.js";
import { Link } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React from "react";
const MainContents = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  .intro {
    margin-left: 24px;
    p.top {
      margin-top: 42px;
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
  }
  .move {
    display: flex;
    justify-content: center;
    margin-top: 75px;
    margin-bottom: 65px; /* temp */

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
            브레인스토밍 중인 여러분.
            <br />
            아이디어가 생각나지 않아 고민하고 있지 않으신가요?
          </p>
          <p className="bottom">
            협업을 위한 첫 걸음 아이디어에서부터 시작합니다.
            <br />
            마음에 드는 아이디어가 나올 때까지 원하는 트리즈 기법을
            <br />
            이용해서 아이디어를 생성해보세요.
          </p>
        </div>
        <div>
          <div className="recommend">
            <h2 className="title">이런 사람이 하면 좋아요!</h2>
            <ul>
              <li>
                <img src={student_logo} alt="student_logo" />
                <div className="img-title">대학생</div>
              </li>
              <li>
                <img src={ceo_logo} alt="ceo_logo" />
                <div className="img-title">예비 창업자</div>
              </li>
              <li>
                <img src={planner_logo} alt="planner_logo" />
                <div className="img-title">기획자</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="move">
          <Link to={"/login"}>
            <button type="button">로그인하러 가기</button>
          </Link>
        </div>
        {/* <MainContentBar /> */}
      </MainContents>
      <MainFooter />
    </div>
  );
};

export default Main;
