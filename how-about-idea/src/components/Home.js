import React from "react";
import Feeds from "./Feeds.js";
import HomeFooter from "./HomeFooter.js";
import { useState } from "react";
import FeedDetail from "./FeedDetail";
import styled from "styled-components";

const Home = () => {
  const [feedDetailShow, setFeedDetailShow] = useState(false);
  const [feedData, setFeedData] = useState({}); // FeedDetail에 표시될 데이터 선택용

  const DUMMY_FEED = [
    {
      id: "feed1",
      name: "유창민",
      imgSource: "../images/feed_1.png",
      trizType: "분할하기",
      sentence: "기압차를 이용한 회전 선풍기",
    },
    {
      id: "feed2",
      name: "이상영",
      imgSource: "../images/feed_2.png",
      trizType: "추출하기",
      sentence: "새들을 쫓아내는 주파수",
    },
    {
      id: "feed3",
      name: "홍기범",
      imgSource: "../images/feed_2.png",
      trizType: "분할하기",
      sentence: "확장 가능한 모니터",
    },
    {
      id: "feed4",
      name: "오준혁",
      imgSource: "../images/feed_2.png",
      trizType: "추출하기",
      sentence: "온도를 표시해주는 텀블러",
    },
    {
      id: "feed5",
      name: "장영실",
      imgSource: "../images/feed_2.png",
      trizType: "추출하기",
      sentence: "무게 조절이 가능한 지게차",
    },
  ];

  const showFeedDetailHandler = () => {
    setFeedDetailShow(true);
  };

  const hideFeedDetailHandler = () => {
    setFeedDetailShow(false);
  };

  return (
    <div>
      {feedDetailShow && (
        <FeedDetail
          // feedData={DUMMY_FEED[0]}
          feedData={feedData}
          onHideFeedDetail={hideFeedDetailHandler}
        />
      )}
      <Feeds
        items={DUMMY_FEED}
        onShowFeedDetail={showFeedDetailHandler}
        onSetFeedData={setFeedData}
      />
      <HomeFooter />
    </div>
  );
};

export default Home;
