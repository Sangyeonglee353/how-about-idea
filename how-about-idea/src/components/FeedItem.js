import React, { useState } from "react";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeedItemCSS = styled.li`
  /* width: 100%; */
  flex: auto;
  width: 23%;
  padding: 10px 0px;
  /* margin-bottom: 5px; */
  margin: 0 1.5% 3% 1.5%;
  /* border-top: 10px solid var(--color-main-skyblue); */
  /* border: 2px solid var(--color-main-skyblue); */
  border-radius: 10px;
  /* background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%); */
  cursor: pointer;
  background: #ffffff;

  * {
    font-family: "Quicksand", sans-serif;
  }

  @media (max-width: 1200px) {
    width: 35%;
  }
  @media (max-width: 760px) {
    width: 55%;
  }
  @media (max-width: 500px) {
    width: 90%;
    margin: 1.5vh auto;
  }
  h3 {
    font-size: 10px;
    margin-left: 15px;
  }

  img {
    display: block;
    border-radius: 10px;
    margin: 0 auto;
  }

  .mindmap {
    display: block;
    border-radius: 10px;
    margin: 10px auto;
    width: 80%;
    background-color: #ebf5ff;
  }

  .summary {
    margin-top: 0.5vh;
    word-break: break-all;
    margin: 0 10%;
    .summary-btn {
      span {
        margin: 2%;
      }
    }
    p {
      margin-top: 2%;
      width: 80%;
      word-break: break-all;
      &.summary-sentence {
        font-size: 16px;
      }
      &.summary-date {
        font-size: 12px;
      }
    }
  }

  &:hover {
    background-color: #00000055;
    .mindmap {
      background-color: #ebf5ff99;
    }
  }
`;
const FeedItem = (props) => {
  const [mindWidth, setMindWidth] = useState("90%");
  const [mindHeight, setMindHeight] = useState("200px");

  const source = props.imgSource;

  const showAndSetFeed = () => {
    props.onSetFeedData(props.feedData);
    props.onShowFeedDetail();
  };

  return (
    <FeedItemCSS onClick={showAndSetFeed}>
      {/* <h3>{props.name}</h3> */}
      <div className="mindmap">
        <Mind
          width={mindWidth}
          height={mindHeight}
          onUserZoom={false}
          onRefreshBtn={false}
          onUnSelect={true}
          onUnNodeMove={true}
        />
      </div>
      <div className="summary">
        <div className="summary-btn">
          <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
          <span>23</span>
          <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />
          <span>3</span>
          {/* <FontAwesomeIcon icon="fa-solid fa-share" /> */}
        </div>
        <p className="summary-sentence">{props.sentence}</p>
        <p className="summary-date">2023년 04월 15일</p>
      </div>
    </FeedItemCSS>
  );
};

export default FeedItem;
