import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NodeSelectCSS = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  height: 92vh;
  font-family: "Quicksand", sans-serif;
  background: rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  @media (max-width: 920px) {
    display: block;
  }
  @media (max-width: 500px) {
    width: 100vw;
  }

  .mind-wrapper {
    background-color: #fff;
    border-radius: 20px;
    width: 48vw;
    height: 95%;
  }

  .list-wrapper {
    background-color: #fff;
    border-radius: 20px;
    width: 48vw;
    height: 95%;
  }
  .wordList {
    /* width: 600px; */
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
      width: 100vw;
    }
    .word {
      width: 120px;
      height: 120px;
      border: 5px solid var(--color-main-blue);
      border-radius: 20px;
      & p {
        text-align: center;
        font-size: 20px;
        line-height: 110px;
      }
    }
    .plus {
      display: flex;
      align-items: center;
      color: var(--color-main-blue);
      padding: 0 2.5vw;
      font-size: 80px;
    }
  }

  .btnList {
    width: 428px;
    /* height: 58px; */
    margin: 15px auto 15px auto;
    @media (max-width: 500px) {
      width: 95vw;
    }
    button {
      width: 100%;
      height: 5.8vh;
      @media (max-width: 500px) {
        height: 10vh;
      }
      background-color: white;
      border: 5px solid var(--color-main-blue);
      border-radius: 20px;
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
        margin-top: 15px;
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
  .createSentence {
    /* margin: 15px auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 10vh;
  }
`;

const NodeSelect = () => {
  const [mindWidth, setMindWidth] = useState("100%");
  const [mindHeight, setMindHeight] = useState("80vh");
  const [completeSelected, setCompleteSelected] = useState(false);
  const [resetActive, setResetActive] = useState(false);

  // const [output, setOutput] = useState([]); // 문장 생성 AI 데이터 전송
  // const [loading, setLoading] = useState(false); // 로딩 관련

  /* Select Node data manage */
  const [selectedNode, setSelectedNode] = useState([]);

  /* 노드 선택 */
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

  /* 노드 선택 초기화 */
  const resetSelectedNode = () => {
    setSelectedNode([]);
    setCompleteSelected(false);
    setResetActive(true);
  };

  // 처음 선택시 중복 선택 에러 해결
  useEffect(resetSelectedNode, []);

  return (
    <NodeSelectCSS>
      {console.log("NodeSelect_selectedNode: ", selectedNode)}
      {console.log("CompleteSelected: ", completeSelected)}
      <div className="mind-wrapper">
        <Mind
          width={mindWidth}
          height={mindHeight}
          onUserZoom={false}
          onRefreshBtn={true}
          onUnSelect={false}
          onUnNodeMove={true}
          onSelectNodeHandler={onSelectNodeHandler}
        />
      </div>
      <div className="list-wrapper">
        <div className="wordList">
          <div className="word" id="firstWord">
            <p>
              {selectedNode.length === 0
                ? "선택 단어 1"
                : selectedNode[0].label}
            </p>
          </div>
          <span className="plus">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </span>
          <div className="word" id="secondWord">
            <p>{!selectedNode[1] ? "선택 단어 2" : selectedNode[1].label}</p>
          </div>
        </div>
        <div className="btnList">
          <button type="button" id="resetWord" onClick={resetSelectedNode}>
            초기화
          </button>
          {!completeSelected ? (
            <button type="button" id="notice">
              단어 2개를 선택해 주세요
            </button>
          ) : (
            <Link
              to={"/patentResult"}
              state={{
                word1: selectedNode[0].label,
                word2: selectedNode[1].label,
              }}
            >
              <button className="activeBtn" id="nextPage">
                문장 생성
              </button>
            </Link>
          )}
        </div>
      </div>
    </NodeSelectCSS>
  );
};

export default NodeSelect;
