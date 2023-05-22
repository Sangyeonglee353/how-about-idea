import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NodeSelectCSS = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 92vh;
  font-family: "Quicksand", sans-serif;
  background: rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  overflow-y: auto;
  @media (max-width: 920px) {
    display: block;
  }
  .mind-wrapper {
    background-color: #fff;
    border-radius: 12px;
    width: 46vw;
    height: 80vh;
    margin: 6vh 2vw;
    @media (max-width: 920px) {
      width: 96vw;
      height: 50vh;
    }
  }

  .list-wrapper {
    background-color: #fff;
    border-radius: 12px;
    width: 46vw;
    height: 80vh;
    margin: 6vh 2vw;
    @media (max-width: 920px) {
      width: 96vw;
      height: 50vh;
    }
  }
  .list-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    margin: 0px auto;
    width: 100%;
    height: 100%;
  }
  .wordList {
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    padding-top: 15px;
    @media (max-width: 500px) {
      width: 90vw;
    }
    .word {
      width: 120px;
      height: 120px;
      border: 1px solid #000;
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
      color: #000;
      padding: 0 2.5vw;
      font-size: 80px;
    }
  }

  .btnList {
    width: 400px;
    margin: 15px auto;
    @media (max-width: 500px) {
      width: 90vw;
    }
    button {
      width: 100%;
      height: 50px;
      background-color: white;
      border: 2px solid var(--color-main-blue);
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
`;

const NodeSelect = () => {
  const [mindWidth, setMindWidth] = useState("100%");
  const [mindHeight, setMindHeight] = useState(
    window.innerWidth < 920 ? "50vh" : "80vh"
  );
  const [completeSelected, setCompleteSelected] = useState(false);
  const [resetActive, setResetActive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMindHeight(window.innerWidth < 920 ? "50vh" : "80vh");
    });
  }, []);

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

  // 마인드맵 아이디 넘김용
  const location = useLocation();
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
        <div className="list-content-wrapper">
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
            <button
              type="button"
              className="resetBtn"
              onClick={resetSelectedNode}
            >
              RESET
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
                  mindmapId: location.state.id,
                }}
              >
                <button className="activeBtn" id="nextPage">
                  문장 생성
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </NodeSelectCSS>
  );
};

export default NodeSelect;
