import React from "react";
import Feeds from "./Feeds.js";
import HomeFooter from "./HomeFooter.js";
import { useState } from "react";
import FeedDetail from "./FeedDetail";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeCSS = styled.div`
  .startBtn {
    position: absolute;
    top: 25px;
    left: 6%;
    width: 130px;
    height: 50px;
    font-size: 25px;
    font-weight: bold;
    line-height: 50px;
    color: white;
    background-color: var(--color-main-skyblue);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--color-main-blue);
    }
    @media (max-width: 600px) {
      display: none;
    }
  }

  .mypageBtn {
    position: absolute;
    top: 35px;
    right: 7%;
    height: 30px;
    color: var(--color-main-grey);
    cursor: pointer;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

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
    {
      id: "feed6",
      name: "홍기범",
      imgSource: "../images/feed_2.png",
      trizType: "분할하기",
      sentence: "확장 가능한 모니터",
    },
    {
      id: "feed7",
      name: "오준혁",
      imgSource: "../images/feed_2.png",
      trizType: "추출하기",
      sentence: "온도를 표시해주는 텀블러",
    },
    {
      id: "feed8",
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
    <HomeCSS>
      <Link to={"/play"}>
        <button className="startBtn">시작하기</button>
      </Link>
      <FontAwesomeIcon className="mypageBtn" icon="fa-user" />
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
    </HomeCSS>
  );
};

export default Home;
