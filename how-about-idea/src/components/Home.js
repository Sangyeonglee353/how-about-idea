import React from "react";
import Feeds from "./Feeds.js";
import HomeFooter from "./HomeFooter.js";
import { useState } from "react";
import FeedDetail from "./FeedDetail";
import styled from "styled-components";

const Home = () => {
  const [feedDetailShow, setFeedDetailShow] = useState(false);
  const [feedIndex, setFeedIndex] = useState(0); // FeedDetail에 표시될 데이터 선택용

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
      id: "feed2",
      name: "이상영",
      imgSource: "../images/feed_2.png",
      trizType: "추출하기",
      sentence: "새들을 쫓아내는 주파수",
    },
    {
      id: "feed2",
      name: "이상영",
      imgSource: "../images/feed_2.png",
      trizType: "추출하기",
      sentence: "새들을 쫓아내는 주파수",
    },
    {
      id: "feed2",
      name: "이상영",
      imgSource: "../images/feed_2.png",
      trizType: "추출하기",
      sentence: "새들을 쫓아내는 주파수",
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
          feedData={DUMMY_FEED[0]}
          onHideFeedDetail={hideFeedDetailHandler}
        />
      )}
      <Feeds items={DUMMY_FEED} onShowFeedDetail={showFeedDetailHandler} />
      <HomeFooter />
    </div>
  );
};

export default Home;
