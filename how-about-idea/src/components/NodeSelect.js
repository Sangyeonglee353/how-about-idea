import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import HomeFooter from "./HomeFooter";
import axios from "axios";
import Loading from "./UI/Loading";

const NodeSelectCSS = styled.div`
  margin-top: 10px;
  height: 800px;
  font-family: "Quicksand", sans-serif;

  /* height: calc(100vh - 115px - 80px); */
  @media (max-width: 400px) {
    margin-top: 0px;
  }
  .notify {
    margin-top: 30px;
    & p {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }
    @media (max-width: 400px) {
      margin-top: 0px;
    }
  }
  .wordList {
    margin-top: 30px;
    .word {
      width: 290px;
      height: 58px;
      margin: 10px auto;
      border: 5px solid var(--color-main-blue);
      border-radius: 20px;
      & p {
        text-align: center;
        font-size: 20px;
        line-height: 50px;
      }
    }
    .sentence {
      margin-top: 30px;
      font-size: 20px;
      text-align: center;
    }
  }

  .btnList {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
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

const NodeSelect = () => {
  const [mindWidth, setMindWidth] = useState("100%");
  const [mindHeight, setMindHeight] = useState("500px");
  const [completeSelected, setCompleteSelected] = useState(false);
  const [resetActive, setResetActive] = useState(false);

  const [output, setOutput] = useState([]); // 문장 생성 AI 데이터 전송
  const [loading, setLoading] = useState(false); // 로딩 관련
  const [isMakeCompleted, setIsMakeCompleted] = useState(false); // 1. 문장생성 완료 여부

  /* Select Node data manage */
  const [selectedNode, setSelectedNode] = useState([]);

  const onSelectNodeHandler = (selectData) => {
    if (resetActive) {
      setResetActive(false);
      setSelectedNode((selectedNode) => {
        return [selectedNode[0]];
      });
    } else {
      setSelectedNode((selectedNode) => {
        return [...selectedNode, selectData];
      });
    }

    if (selectedNode.length === 1) {
      setCompleteSelected(true);
    }
  };
  const resetSelectedNode = () => {
    setSelectedNode([]);
    setCompleteSelected(false);
    setResetActive(true);
  };

  const getSentence = () => {
    if (selectedNode.length == 0) {
      alert("단어를 선택해주세요!");
      return;
    }
    const data = {
      // firstWord: "비행기",
      firstWord: selectedNode[0].label,
    };

    setLoading(true);
    axios
      .post("http://localhost:5000/api/hello", data)
      .then((response) => {
        // 응답데이터 처리
        setOutput(response);
        console.log("결과값: ", output);
        // 문장생성 완료 여부 처리
        setIsMakeCompleted(true);
        setLoading(false);
        alert("문장 생성 완료!");
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
    //
  };
  return (
    <NodeSelectCSS>
      {loading ? <Loading /> : ""}
      {console.log("NodeSelect_selectedNode: ", selectedNode)}
      {console.log("CompleteSelected: ", completeSelected)}
      <Mind
        width={mindWidth}
        height={mindHeight}
        onUserZoom={true}
        onRefreshBtn={true}
        onUnSelect={false}
        onUnNodeMove={true}
        onSelectNodeHandler={onSelectNodeHandler}
      />
      <div className="notify">
        <p>단어 2개를 선택 해주세요</p>
      </div>
      <div className="wordList">
        <div className="word" id="firstWord">
          <p>
            {selectedNode.length === 0 ? "선택 단어 1" : selectedNode[0].label}
          </p>
        </div>
        <div className="word" id="secondWord">
          <p>{!selectedNode[1] ? "선택 단어 2" : selectedNode[1].label}</p>
        </div>
        <p className="sentence">{output.data}</p>
      </div>
      <div className="btnList">
        <button id="resetWord" onClick={resetSelectedNode}>
          초기화
        </button>
        {!completeSelected ? (
          <button id="nextPage">문장 생성</button>
        ) : (
          // <Link
          //   to={"/patentAnalysis"}
          //   state={{
          //     word1: selectedNode[0].label,
          //     word2: selectedNode[1].label,
          //   }}
          // >
          <button className="activeBtn" id="nextPage" onClick={getSentence}>
            문장 생성
          </button>
          // </Link>
        )}
        {/* {isMakeCompleted ? (
          <Navigate to={"/patentResult"} sentence={output.data} />
        ) : (
          <button className="activeBtn" id="nextPage" onClick={getSentence}>
            문장 생성
          </button>
        )} */}
      </div>
    </NodeSelectCSS>
  );
};

export default NodeSelect;
