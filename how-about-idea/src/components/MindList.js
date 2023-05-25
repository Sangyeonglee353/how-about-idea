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
  const [feedData, setFeedData] = useState({}); // FeedDetail에 표시될 데이터 변경용
  const [feedGraph, setFeedGraph] = useState([]); // FeedDetail에 표시될 그래프 변경용

  // 마인드맵 데이터가 없을 때 임시로 보여주는 데이터
  const DUMMY_FEED = [
    {
      id: "feed1",
      name: "유창민",
      star_rating: 1,
      root_word: "선풍기",
      combine_word1: "회전",
      combine_word2: "선풍기",
      sentence: "기압차를 이용한 회전 선풍기",
    },
    {
      id: "feed2",
      name: "이상영",
      star_rating: 2,
      root_word: "주파수",
      combine_word1: "새",
      combine_word2: "주파수",
      sentence: "새들을 쫓아내는 주파수",
    },
    {
      id: "feed3",
      name: "홍기범",
      star_rating: 5,
      root_word: "모니터",
      combine_word1: "확장",
      combine_word2: "모니터",
      sentence: "확장 가능한 모니터",
    },
    {
      id: "feed4",
      name: "오준혁",
      star_rating: 3,
      root_word: "텀블러",
      combine_word1: "온도",
      combine_word2: "텀블러",
      sentence: "온도를 표시해주는 텀블러",
    },
    {
      id: "feed5",
      name: "장영실",
      star_rating: 3,
      root_word: "무게",
      combine_word1: "무게",
      combine_word2: "지게차",
      sentence: "무게 조절이 가능한 지게차",
    },
    {
      id: "feed6",
      name: "홍기범",
      trizType: "분할하기",
      star_rating: 3,
      root_word: "모니터",
      combine_word1: "확장",
      combine_word2: "모니터",
      sentence: "확장 가능한 모니터",
    },
    {
      id: "feed7",
      name: "오준혁",
      star_rating: 3,
      root_word: "온도",
      combine_word1: "온도",
      combine_word2: "텀블러",
      sentence: "온도를 표시해주는 텀블러",
    },
    {
      id: "feed8",
      name: "장영실",
      star_rating: 2,
      root_word: "무게",
      combine_word1: "무게",
      combine_word2: "지게차",
      sentence: "무게 조절이 가능한 지게차",
    },
  ];

  const showFeedDetailHandler = () => {
    setFeedDetailShow(true);
  };

  const hideFeedDetailHandler = () => {
    setFeedDetailShow(false);
  };

  // async function getFeedData() {
  //   let res = await getMyMindMap();
  //   console.log(res);
  // }

  // useEffect(() => {
  //   getFeedData();
  // }, []);

  // useEffect(() => {
  //   if (props.mindmapData !== undefined && props.sentenceInfo !== undefined) {
  //     console.log("MindList -> mindmap:", props.mindmapData);
  //     // console.log("MindList -> sentence:", props.sentenceInfo);
  //     // console.log("MindList -> sentence:", props.sentenceInfo[0]);
  //   } else {
  //     // setMindmapAll(DUMMY_FEED);
  //     // console.log("fail: ", mindmapAll);
  //   }
  // }, [props.mindmapData]);

  return (
    <MindListCss>
      {feedDetailShow && (
        <FeedDetail
          feedData={feedData}
          feedGraph={feedGraph}
          onHideFeedDetail={hideFeedDetailHandler}
        />
      )}
      <FeedsList
        items={props.sentenceInfo} // 문장 정보
        mindmaps={props.mindmapData} // 마인드맵 정보
        // items={mindmapAll}
        onShowFeedDetail={showFeedDetailHandler}
        onSetFeedData={setFeedData}
        onSetFeedGraph={setFeedGraph}
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
