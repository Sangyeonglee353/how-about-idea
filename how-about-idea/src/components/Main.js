import MainFooter from "./MainFooter.js";
import { Link } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React from 'react'
const MainContents = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`;

const MainContentBar = styled.div`
  width: 100%;
  height: 12px;
  margin-top: 42px;
  background-color: var(--color-main-skyblue);
`;

const MainContentIntro = styled.div`
  margin-left: 24px;
`;

const MainContentIntroTop = styled.p`
  margin-top: 42px;
  color: var(--color-main-blue);
  font-weight: bold;
  font-size: 15px;
  line-height: 32px;
`;

const MainContentIntroBottom = styled.p`
  margin-top: 30px;
  font-size: 15px;
  line-height: 32px;
`;

const MainContentRecommendTitle = styled.h2`
  text-align: center;
  margin-top: 110px;
  color: var(--color-main-jinblue);
`;

const MainContentRecommendLists = styled.ul`
  width: 100%;
  height: 110px;
  background-color: var(--color-main-skyblue);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
`;

const MainContentRecommendImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto;
`;

const MainContentRecommendImgTitle = styled.p`
  margin-top: 3px;
  font-size: 8px;
  text-align: center;
`;

const MoveLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 75px;
  margin-bottom: 65px; /* temp */

  & button {
    width: 130px;
    height: 45px;
    background-color: var(--color-main-skyblue);
    border: 1px solid var(--color-main-skyblue);
    border-radius: 10px;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Main = () => {
  return (
    <div>
      <MainContents>
        <MainContentBar />
        <MainContentIntro>
          <MainContentIntroTop>
            브레인스토밍 중인 여러분.
            <br />
            아이디어가 생각나지 않아 고민하고 있지 않으신가요?
          </MainContentIntroTop>
          <MainContentIntroBottom>
            협업을 위한 첫 걸음 아이디어에서부터 시작합니다.
            <br />
            마음에 드는 아이디어가 나올 때까지 원하는 트리즈 기법을
            <br />
            이용해서 아이디어를 생성해보세요.
          </MainContentIntroBottom>
        </MainContentIntro>
        <div>
          <MainContentRecommendTitle>
            이런 사람이 하면 좋아요!
          </MainContentRecommendTitle>
          <MainContentRecommendLists>
            <li>
              <MainContentRecommendImg src={student_logo} alt="student_logo" />
              <MainContentRecommendImgTitle>
                대학생
              </MainContentRecommendImgTitle>
            </li>
            <li>
              <MainContentRecommendImg src={ceo_logo} alt="ceo_logo" />
              <MainContentRecommendImgTitle>
                예비 창업자
              </MainContentRecommendImgTitle>
            </li>
            <li>
              <MainContentRecommendImg src={planner_logo} alt="planner_logo" />
              <MainContentRecommendImgTitle>
                기획자
              </MainContentRecommendImgTitle>
            </li>
          </MainContentRecommendLists>
        </div>
        <MoveLogin>
          <Link to={"/login"}>
            <button type="button">로그인하러 가기</button>
          </Link>
        </MoveLogin>
        <MainContentBar />
      </MainContents>
      <MainFooter />
    </div>
  );
};

export default Main;
