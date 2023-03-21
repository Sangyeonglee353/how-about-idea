import React, { useState } from "react";
import styled from "styled-components";
import HomeFooter from "./HomeFooter";
import paperImg from "../images/paper.png";
import lensImg from "../images/lens.png";
import { Link, useNavigate } from "react-router-dom";

const PatentAnalysisCSS = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  height: 800px;

  p {
    color: var(--color-main-blue);
    font-size: 30px;
    &.notice {
      margin-top: 15px;
    }
  }
  .gsentence {
    width: 370px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid var(--color-main-blue);
    border-radius: 20px;
    font-size: 20px;
    color: var(--color-main-blue);
    margin: 15px auto 0 auto;
    @media (max-width: 400px) {
      width: 90%;
    }
  }
  .analysisBox {
    position: relative;
  }
  img {
    &.paper {
      margin-top: 70px;
    }
    &.lens {
      position: absolute;
      top: 20px;
      right: 30px;
      z-index: 20;
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

const PatentAnalysis = () => {
  const navigate = useNavigate();

  return (
    <>
      <PatentAnalysisCSS>
        <p>특허청 분석 중</p>
        <div className="gsentence">날개 머시기 머시기 장치</div>

        <div className="analysisBox">
          <img src={paperImg} className="paper" alt="paper" />
          <img src={lensImg} className="lens" alt="lens" />
        </div>
        <p className="notice">잠시만 기다려 주세요</p>

        <div className="btnList">
          <button
            id="prevPage"
            onClick={() => {
              navigate(-1);
            }}
          >
            이전
          </button>
          <Link to={"/patentresult"}>
            <button className="activeBtn" id="nextPage">
              다음
            </button>
          </Link>
        </div>
      </PatentAnalysisCSS>
      {/* <HomeFooter /> */}
    </>
  );
};

export default PatentAnalysis;
