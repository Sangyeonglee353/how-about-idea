import leafImage from "../images/leaf_img.png";
import HomeFooter from "./HomeFooter";
import LevelButtons from "./LevelButtons";
import styled from "styled-components";
import React from "react";
import ButtonFooter from "./ButtonFooter";
const PlayCSS = styled.div`
  height: 640px;
  & h2 {
    font-family: "Quicksand", sans-serif;
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
`;
const Play = () => {
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
      <ButtonFooter nextPage="/BrainStorming" />
      {/* <HomeFooter /> */}
    </PlayCSS>
  );
};

export default Play;
