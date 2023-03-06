import React, { useState } from "react";
import styled from "styled-components";
import MindMap from "./MindMap";

const MindCss = styled.div`
  margin-top: 40px;
  background: white;

  .title {
    height: 30px;
    font-weight: bold;
  }
`;

const Mind = () => {
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
    // ],
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

  return (
    <MindCss>
      <p className="title">마인드맵</p>
      <MindMap graphData={graphData} setGraphData={setGraphData} />
    </MindCss>
  );
};

export default Mind;
