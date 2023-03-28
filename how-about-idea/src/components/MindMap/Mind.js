import React, { useState } from "react";
import styled from "styled-components";
import MindMap from "./MindMap";
import DummyMindMap from "./DummyMindMap";

const MindCss = styled.div`
  .title {
    height: 30px;
    font-weight: bold;
  }
`;

const Mind = (props) => {
  const [graphData, setGraphData] = useState([
    // nodes: [
    { data: { id: "1", label: "선풍기", type: "level1" } },
    { data: { id: "2", label: "날개", type: "level2" } },
    { data: { id: "3", label: "바람", type: "level2" } },
    { data: { id: "4", label: "전동기", type: "level2" } },
    { data: { id: "5", label: "회전", type: "level3" } },
    { data: { id: "6", label: "비행기", type: "level3" } },
    { data: { id: "7", label: "유체", type: "level3" } },
    { data: { id: "8", label: "공기", type: "level3" } },
    { data: { id: "9", label: "흐름", type: "level3" } },
    { data: { id: "10", label: "기압", type: "level3" } },
    { data: { id: "11", label: "전기", type: "level3" } },
    { data: { id: "12", label: "회전", type: "level3" } },
    // ], // source: 목적지, target: 출발지
    // edges: [
    { data: { id: "1->2", source: "2", target: "1" } },
    { data: { id: "1->3", source: "3", target: "1" } },
    { data: { id: "1->4", source: "4", target: "1" } },
    { data: { id: "2->5", source: "5", target: "2" } },
    { data: { id: "2->6", source: "6", target: "2" } },
    { data: { id: "2->7", source: "7", target: "2" } },
    { data: { id: "3->8", source: "8", target: "3" } },
    { data: { id: "3->9", source: "9", target: "3" } },
    { data: { id: "3->10", source: "10", target: "3" } },
    { data: { id: "4->11", source: "11", target: "4" } },
    { data: { id: "4->12", source: "12", target: "4" } },
    // ],
  ]);

  const [dummyData, setDummyData] = useState([
    // nodes: [
    { data: { id: "선풍기", type: "level1" } },
    { data: { id: "날개", type: "level2" } },
    { data: { id: "바람", type: "level2" } },
    { data: { id: "전동기", type: "level2" } },
    { data: { id: "회전", type: "level3" } },
    { data: { id: "비행기", type: "level3" } },
    { data: { id: "유체", type: "level3" } },
    { data: { id: "공기", type: "level3" } },
    { data: { id: "흐름", type: "level3" } },
    { data: { id: "기압", type: "level3" } },
    { data: { id: "전기", type: "level3" } },
    { data: { id: "회전", type: "level3" } },
    // ],
    // edges: [
    { data: { id: "선풍기->날개", source: "날개", target: "선풍기" } },
    { data: { id: "선풍기->바람", source: "바람", target: "선풍기" } },
    { data: { id: "선풍기->전동기", source: "전동기", target: "선풍기" } },
    { data: { id: "날개->회전", source: "회전", target: "날개" } },
    { data: { id: "날개->비행기", source: "비행기", target: "날개" } },
    { data: { id: "날개->유체", source: "유체", target: "날개" } },
    { data: { id: "바람->공기", source: "공기", target: "바람" } },
    { data: { id: "바람->흐름", source: "흐름", target: "바람" } },
    { data: { id: "바람->기압", source: "기압", target: "바람" } },
    { data: { id: "전동기->전기", source: "전기", target: "전동기" } },
    { data: { id: "전동기->회전", source: "회전", target: "전동기" } },
    // ],
  ]);
  return (
    <MindCss>
      <MindMap
        width={props.width}
        height={props.height}
        graphData={graphData}
        setGraphData={setGraphData}
        onUserZoom={props.onUserZoom} // Zoom 가능 여부
        onRefreshBtn={props.onRefreshBtn} // 새로고침 버튼 활성화 여부
        onUnSelect={props.onUnSelect} // 노드 선택 가능 여부
        onUnNodeMove={props.onUnNodeMove} // 노트 이동 가능 여부
        onSelectNodeHandler={props.onSelectNodeHandler}
      />
      {/* <DummyMindMap graphData={dummyData} setGraphData={setDummyData} /> */}
    </MindCss>
  );
};

export default Mind;
