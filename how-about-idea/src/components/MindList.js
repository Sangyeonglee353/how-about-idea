import React, { useEffect } from "react";
import FeedsList from "./FeedsList";
import { useState } from "react";
import FeedDetail from "./FeedDetail";
import styled from "styled-components";
import { getMyMindMap } from "../Api";

// [MindList_컴포넌트 => MindSearch와 MindStore에서 공통으로 사용]

const MindListCss = styled.div`
  width: 100vw;
  height: 92vh;
  overflow-y: scroll;
  /* background: rgba(0, 0, 0, 0.03); */
  background-color: #f3f3f3;
`;

const MindList = (props) => {
  const [feedDetailShow, setFeedDetailShow] = useState(false);
  const [feedDetailData, setFeedDetailData] = useState({}); // FeedDetail에 표시될 데이터 변경용
  const [feedDetailGraph, setFeedDetailGraph] = useState([]); // FeedDetail에 표시될 그래프 변경용

  const showFeedDetailHandler = () => {
    setFeedDetailShow(true);
  };

  const hideFeedDetailHandler = () => {
    setFeedDetailShow(false);
  };

  return (
    <MindListCss>
      {feedDetailShow && (
        <FeedDetail
          feedDetailData={feedDetailData}
          feedDetailGraph={feedDetailGraph}
          onHideFeedDetail={hideFeedDetailHandler}
        />
      )}
      <FeedsList
        items={props.sentenceInfo} // 문장 정보
        mindmaps={props.mindmapData} // 마인드맵 정보
        onShowFeedDetail={showFeedDetailHandler}
        onSetFeedDetailData={setFeedDetailData}
        onSetFeedDetailGraph={setFeedDetailGraph}
      />
      {/* <FeedsList
        items={DUMMY_FEED}
        // items={mindmapAll}
        onShowFeedDetail={showFeedDetailHandler}
        onSetFeedData={setFeedData}
      /> */}
    </MindListCss>
  );
};

export default MindList;
