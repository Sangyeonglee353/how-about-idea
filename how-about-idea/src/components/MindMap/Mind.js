import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MindMap from "./MindMap";
import { useLocation } from "react-router-dom";

const MindCss = styled.div`
  .title {
    height: 30px;
    font-weight: bold;
  }
`;

const Mind = (props) => {
  const location = useLocation();
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

  useEffect(() => {
    // 브레인스토밍시 마인드맵 생성
    if (location.state != null) {
      setGraphData(location.state.mindMap);
    }

    // 저장소와 검색에서 마인드맵 생성
    if (props.mindmapData !== undefined) {
      setGraphData(props.mindmapData);
    }
  }, [location.state, props.mindmapData]);

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
    </MindCss>
  );
};

export default Mind;
