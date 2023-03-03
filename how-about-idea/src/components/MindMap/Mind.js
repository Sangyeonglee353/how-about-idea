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

function Mind() {
  //   let DUMMY_nodeDataArray = [
  //     { key: 0, text: "선풍기", color: "pink", loc: "0 0" },
  //     { key: 1, text: "전동기", color: "orange", loc: "150 0" },
  //     { key: 2, text: "바람", color: "lightblue", loc: "0 150" },
  //     { key: 3, text: "날개", color: "purple", loc: "150 150" },
  //   ];

  //   let DUMMY_linkDataArray = [
  //     { key: -1, from: 0, to: 1 },
  //     { key: -2, from: 0, to: 2 },
  //     { key: -3, from: 1, to: 1 },
  //     { key: -4, from: 2, to: 3 },
  //     { key: -5, from: 3, to: 0 },
  //   ];
  //   const [nodeDataArray, setNodeDataArray] = useState(DUMMY_nodeDataArray);
  //   const [linkDataArray, setLinkDataArray] = useState(DUMMY_linkDataArray);

  return (
    <MindCss>
      {/* <div id="myDiagramDiv" className="diagram-component" /> */}
      <p className="title">마인드맵</p>
      <MindMap />
    </MindCss>
  );
}

export default Mind;
