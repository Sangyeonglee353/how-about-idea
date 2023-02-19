import React, { useState } from "react";
import styled from "styled-components";
import MindMap from "./MindMap";
// import * as go from "./go-debug.js";
// import * as go from "./go.js";
import * as go from 'gojs';
// import * as go from "./goCDN.js";

const MindCss = styled.div`
  /* width:100vw;
height:100vh; */
  margin-top: 40px;
  background: white;

  .title {
    height: 30px;
    font-weight: bold;
  }

  .diagram-component {
    width: 100%;
    height: 500px;
    /* border: solid 1px black; */
    background-color: white;
  }
`;

/* Go.js */
/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */

function initDiagram() {
  // 1. Set diagram property in "myDiagramDiv"
  const $ = go.GraphObject.make;
  const diagram = $(go.Diagram, "myDiagramDiv", {
    // 1.1 enable undo & redo
    "undoManager.isEnabled": true,

    // 1.2 uncomment disable undo/redo functionality
    // 'undoManager.maxHistoryLength': 0,

    // 1.3 allow double-click in background to create a new node
    "clickCreatingTool.archetypeNodeData": {
      text: "new",
      color: "lightblue",
    },

    // 1.4 hav mouse whell events zoom in and out instead of scroll up and down
    "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,

    // 1.5 an initial automatic zoom-to-fit
    initialAutoScale: go.Diagram.Uniform,

    // 1.6 align document to the center of the viewport
    contentAlignment: go.Spot.Center,

    // model: new go.GraphLinksModel(nodeDataArray, linkDataArray),
  });

  // 2. Define a simple Node template: Diagram CSS
  diagram.nodeTemplate = $(
    go.Node,
    "Auto", // the Shape will go around the TextBlock
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Shape,
      "Circle",
      {
        name: "SHAPE",
        fill: "white",
        strokeWidth: 0,
        stroke: null,
        portId: "",
        cursor: "pointer",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
      },
      // Shape.fill is bound to Node.data.color
      new go.Binding("fill", "color")
    ),
    $(
      go.TextBlock,
      { margin: 8, editable: true }, // some room around the text
      new go.Binding("text").makeTwoWay()
    )
  );

  diagram.linkTemplate = $(
    go.Link,
    {
      // allow the user to reconnnect existing links:
      relinkableFrom: true,
      relinkableTo: true,
      // draw the link path shorter than normal,
      // so that it does not interfere with the appearance of the arrowhead
      toShortLength: 2,
    },
    $(go.Shape, { strokeWidth: 2 }),
    $(go.Shape, { toArrow: "Standard", stroke: null })
  );

  // // 3. Create diagram
  // // 3.1 Static type
  // // 심플하게 nodeDataArray에 값이 추가된 경우 해당 함수를 useEffect를 통해 다시 한 번 실행하면 되지 않는가?
  // // 값이 들어오는 경우는 세 가지 이다.
  // // (1) nodeDataArray만 추가되는 경우
  // // (2) linkDataArray만 추가되는 경우
  // // (3) nodeDataArray와 linkDataArray 둘 다 추가되는 경우
  // diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

  return diagram;
}

function Mind() {
  let DUMMY_nodeDataArray = [
    { key: 0, text: "선풍기", color: "pink", loc: "0 0" },
    { key: 1, text: "전동기", color: "orange", loc: "150 0" },
    { key: 2, text: "바람", color: "lightblue", loc: "0 150" },
    { key: 3, text: "날개", color: "purple", loc: "150 150" },
  ];

  let DUMMY_linkDataArray = [
    { key: -1, from: 0, to: 1 },
    { key: -2, from: 0, to: 2 },
    { key: -3, from: 1, to: 1 },
    { key: -4, from: 2, to: 3 },
    { key: -5, from: 3, to: 0 },
  ];
  const [nodeDataArray, setNodeDataArray] = useState(DUMMY_nodeDataArray);
  const [linkDataArray, setLinkDataArray] = useState(DUMMY_linkDataArray);

  // const addNodeDataHandler = (props) => {

  // };

  // const addLinkDataHandler = (props) => {

  // };

  // useEffect(initDiagram, []);

  return (
    <MindCss>
      {/* <div id="myDiagramDiv" className="diagram-component" /> */}
      <p className="title">마인드맵</p>
      <MindMap
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={nodeDataArray}
        linkDataArray={linkDataArray}
      />
      
    </MindCss>
  );
}

export default Mind;
