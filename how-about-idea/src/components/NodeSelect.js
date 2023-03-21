import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import HomeFooter from "./HomeFooter";

const NodeSelectCSS = styled.div`
  margin-top: 10px;
  font-family: "Noto Sans KR", sans-serif;
  /* height: calc(100vh - 115px - 80px); */
  @media (max-width: 400px) {
    margin-top: 0px;
  }
  // 첫번째 디자인
  .btn {
    height: 223px;
    button {
      display: block;
      width: 290px;
      height: 58px;
      margin: 10px auto;
      background-color: transparent;
      border: 5px solid var(--color-main-blue);
      border-radius: 20px;
      font-size: 15px;
    }
    .notiBtn {
      &.active {
        background-color: var(--color-main-blue);
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .resetBtn:hover {
      background-color: var(--color-main-blue);
      font-weight: bold;
      color: white;
    }
  }
  // 두번째 디자인
  .notify {
    margin-top: 30px;
    & p {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .wordList {
    margin-top: 20px;
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
  }
  .btnList {
    width: 290px;
    margin: 0 auto;
    button {
      display: inline-block;
      width: 135px;
      height: 58px;
      background-color: transparent;
      border: 5px solid var(--color-main-blue);
      border-radius: 20px;
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
        margin-left: 20px;
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

  return (
    <NodeSelectCSS completeSelected={completeSelected}>
      {console.log("NodeSelect_selectedNode: ", selectedNode)}
      {console.log("CompleteSelected: ", completeSelected)}
      <Mind
        width={mindWidth}
        height={mindHeight}
        onUserZoom={false}
        onRefreshBtn={true}
        onUnSelect={false}
        onUnNodeMove={true}
        onSelectNodeHandler={onSelectNodeHandler}
      />
      {/* <div className="btn">
        {!completeSelected ? (
          <button className="notiBtn">2개의 단어를 선택해 주세요 </button>
        ) : (
          <Link to={"/trizselect"}>
            <button className="notiBtn active">선택완료</button>
          </Link>
        )}

        <button className="resetBtn" onClick={resetSelectedNode}>
          다시 선택
        </button>
      </div> */}
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
      </div>
      <div className="btnList">
        <button id="resetWord" onClick={resetSelectedNode}>
          초기화
        </button>
        {!completeSelected ? (
          <button id="nextPage">다음</button>
        ) : (
          <Link to={"/trizselect"}>
            <button className="activeBtn" id="nextPage">
              다음
            </button>
          </Link>
        )}
      </div>
      <HomeFooter />
    </NodeSelectCSS>
  );
};

export default NodeSelect;
