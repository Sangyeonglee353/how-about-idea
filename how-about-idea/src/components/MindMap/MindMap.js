import { useEffect } from "react";
import React from "react";
// import * as go from "./go-debug.js";
// import * as go from "./go.js";
import * as go from "gojs";

const MindMap = (props) => {
  const initDiagram = props.initDiagram;
  let nodeDataArray = props.nodeDataArray;
  let linkDataArray = props.linkDataArray;

  useEffect(() => {
    const diagram = initDiagram();

    // 3. Create diagram
    // 3.1 Static type
    // 심플하게 nodeDataArray에 값이 추가된 경우 해당 함수를 useEffect를 통해 다시 한 번 실행하면 되지 않는가?
    // 값이 들어오는 경우는 세 가지 이다.
    // (1) nodeDataArray만 추가되는 경우
    // (2) linkDataArray만 추가되는 경우
    // (3) nodeDataArray와 linkDataArray 둘 다 추가되는 경우
    diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

    console.log("good");
  }, [initDiagram, nodeDataArray, linkDataArray]);

  return (
    <>
      <div id="myDiagramDiv" className={props.divClassName} />
    </>
  );
};

export default MindMap;
