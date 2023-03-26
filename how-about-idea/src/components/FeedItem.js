import React, { useState } from "react";
import styled from "styled-components";
import Mind from "./MindMap/Mind";

const FeedItemCSS = styled.li`
  /* width: 100%; */
  flex: auto;
  width: 33%;
  padding: 10px 0px;
  margin-bottom: 5px;
  /* border-top: 10px solid var(--color-main-skyblue); */
  border: 2px solid var(--color-main-skyblue);
  border-radius: 10px;
  /* background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%); */
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100%;
  }
  h3 {
    font-family: inherit;
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
    background-color: white;
  }

  .summary {
    margin-top: 10px;
    p {
      font-family: inherit;
      font-size: 15px;
      margin-left: 45px;
    }
  }

  &:hover {
    background-color: var(--color-main-skyblue);
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
      <h3>{props.name}</h3>
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
        <p>
          <b>트리즈 기법:</b> {props.trizType}
        </p>
        <p>
          <b>트리즈 문장:</b> {props.sentence}
        </p>
      </div>
    </FeedItemCSS>
  );
};

export default FeedItem;
