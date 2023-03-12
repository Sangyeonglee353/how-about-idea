import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import styled from "styled-components";
import tempImg from "../images/feed_1.png";
import { Link } from "react-router-dom";
import Mind from "./MindMap/Mind";

const ContentBlock = styled.div`
  margin: ${(props) => (props.height < 700 ? "10" : "30")}px;

  label {
    display: block;
    font-weight: bold;
  }

  img {
    width: 70%;
  }

  ul {
    list-style: none;
  }

  li {
    padding-top: 10px;
    border-bottom: 1px solid #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;
const FeedDetail = (props) => {
  const [mindWidth, setMindWidth] = useState("100%");
  const [mindHeight, setMindHeight] = useState(
    window.innerHeight < 800 ? "150px" : "300px"
  );
  const [modalHeight, setModalHeight] = useState(window.innerHeight);

  const userName = props.feedData.name;
  const imgSource = props.feedData.imgSource;
  const trizType = props.feedData.trizType;
  const sentence = props.feedData.sentence;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMindHeight(window.innerHeight < 800 ? "150px" : "300px");
      setModalHeight(window.innerHeight);
    });
  }, []);

  return (
    <Modal onClick={props.onHideFeedDetail}>
      <ContentBlock height={window.innerHeight}>
        <h3>{userName}</h3>
        {/* <Link to="/mind">
          <img src={tempImg} alt="tempImg" />
        </Link> */}
        <Mind
          width={mindWidth}
          height={mindHeight}
          onUserZoom={true}
          onRefreshBtn={true}
          onUnSelect={true}
          onUnNodeMove={true}
        />
        <p>
          <b>입력 문장:</b> 선풍기 <br />
          <br />
          <b>트리즈 기법:</b> {trizType} <br />
          <b>트리즈 문장:</b> {sentence}
        </p>
        <br />
        <p>
          <h3>관련 특허</h3>
          <ul>
            <li>날개없는 선풍기</li>
            <li>기압으로 전기를 생산하는 선풍기</li>
            <li>공기의 흐름을 측정하는 유체</li>
            <li>회전하는 선풍기</li>
          </ul>
        </p>
      </ContentBlock>
    </Modal>
  );
};

export default FeedDetail;
