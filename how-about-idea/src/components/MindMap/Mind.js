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
    {
      data: { source: "1", target: "2", label: "1 -> 2" },
    },
    {
      data: { source: "1", target: "3", label: "1 -> 3" },
    },
    {
      data: { source: "1", target: "4", label: "1 -> 4" },
    },
    {
      data: { source: "2", target: "5", label: "2 -> 5" },
    },
    {
      data: { source: "2", target: "6", label: "2 -> 5" },
    },
    {
      data: { source: "2", target: "7", label: "2 -> 7" },
    },
    {
      data: { source: "3", target: "8", label: "3 -> 8" },
    },
    {
      data: { source: "3", target: "9", label: "3 -> 9" },
    },
    {
      data: { source: "3", target: "10", label: "3 -> 10" },
    },
    {
      data: { source: "4", target: "11", label: "4 -> 11" },
    },
    {
      data: { source: "4", target: "12", label: "4 -> 12" },
    },
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
