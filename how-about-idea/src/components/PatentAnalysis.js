import styled from "styled-components";
import HomeFooter from "./HomeFooter";
import paperImg from "../images/paper.png";
import lensImg from "../images/lens.png";

const PatentAnalysisCSS = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;

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
`;

const PatentAnalysis = () => {
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
      </PatentAnalysisCSS>
      <HomeFooter />
    </>
  );
};

export default PatentAnalysis;
