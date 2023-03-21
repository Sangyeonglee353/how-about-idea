import leafImage from "../images/leaf_img.png";
import HomeFooter from "./HomeFooter";
import LevelButtons from "./LevelButtons";
import styled from "styled-components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const PlayCSS = styled.div`
  height: 640px;
  & h2 {
    font-family: inherit;
    text-align: center;
    margin-top: 235px;
  }

  & img {
    display: block;
    margin: 70px auto 0 auto;
  }

  & input {
    display: block;
    width: 280px;
    height: 70px;
    border: 5px solid var(--color-main-blue);
    border-radius: 20px;
    margin: 66px auto 0 auto;
    padding: 5px;
    text-align: center;
  }

  & input:focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    & h2 {
      margin-top: 50px;
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
const Play = () => {
  const navigate = useNavigate();

  return (
    <PlayCSS>
      <h2>
        원하시는 문장을 입력하고
        <br />
        단계를 선택해주세요.
      </h2>
      <img src={leafImage} alt="leafImage"></img>
      <input type="text"></input>
      <LevelButtons />

      <div className="btnList">
        <button
          id="prevPage"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </button>
        <Link to={"/wordslect"}>
          <button className="activeBtn" id="nextPage">
            다음
          </button>
        </Link>
      </div>
      {/* <HomeFooter /> */}
    </PlayCSS>
  );
};

export default Play;
