import { useState } from "react";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import HomeFooter from "./HomeFooter";

const NodeSelectCSS = styled.div`
  margin-top: 100px;
  /* height: calc(100vh - 115px - 80px); */

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
      font-family: "Noto Sans KR", sans-serif;
      font-size: 15px;
    }
    .resetBtn:hover {
      background-color: var(--color-main-blue);
      color: white;
    }
  }
`;

// 준비중
const NodeSelect = () => {
  const [mindWidth, setMindWidth] = useState("100%");
  const [mindHeight, setMindHeight] = useState("500px");

  return (
    <NodeSelectCSS>
      <Mind
        width={mindWidth}
        height={mindHeight}
        onUserZoom={false}
        onRefreshBtn={true}
        onUnSelect={false}
        onUnNodeMove={true}
      />
      <div className="btn">
        <button className="notiBtn">2개의 단어를 선택해 주세요</button>
        <button className="resetBtn">다시 선택</button>
      </div>
      <HomeFooter />
    </NodeSelectCSS>
  );
};

export default NodeSelect;
