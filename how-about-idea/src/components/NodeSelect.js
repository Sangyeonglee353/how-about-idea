import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import HomeFooter from "./HomeFooter";

const NodeSelectCSS = styled.div`
  margin-top: 100px;
  /* height: calc(100vh - 115px - 80px); */
  @media (max-width: 400px) {
    margin-top: 0px;
  }
  .btn {
    height: 223px;

    button {
      display: block;
      width: 290px;
      height: 58px;
      margin: 10px auto;
      border: 5px solid var(--color-main-blue);
      border-radius: 20px;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 15px;
    }
    .notiBtn {
      /* background-color: ${(props) =>
        !props.completeSelected ? "transparent" : "var(--color-main-blue)"};
      color: ${(props) => (!props.completeSelected ? "black" : "white")};
      font-weight: ${(props) =>
        !props.completeSelected ? "normal" : "bold"}; */
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
`;

// 준비중
const NodeSelect = () => {
  const [mindWidth, setMindWidth] = useState("100%");
  const [mindHeight, setMindHeight] = useState("500px");
  const [completeSelected, setCompleteSelected] = useState(false);

  /* Select Node data manage */
  const [selectedNode, setSelectedNode] = useState([]);

  const onSelectNodeHandler = (selectData) => {
    setSelectedNode((selectedNode) => {
      return [...selectedNode, selectData];
    });

    if (selectedNode.length === 1) {
      setCompleteSelected(true);
    }
  };
  const resetSelectedNode = () => {
    setSelectedNode([]);
    setCompleteSelected(false);
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
      <div className="btn">
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
      </div>
      <HomeFooter />
    </NodeSelectCSS>
  );
};

export default NodeSelect;
