import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentBlock = styled.div`
  /* margin: ${(props) => (props.height < 700 ? "10" : "30")}px; */
  margin: 10px;

  * {
    font-family: "Quicksand", sans-serif;
  }
  .mindmap {
    background-color: #ebf5ff;
    border-radius: 20px;
  }
  .detail {
    margin-top: 2%;
    & .detail-btn {
      span {
        margin: 2%;
      }
    }
    p {
      margin-top: 2%;
      &.detail-word__start {
        margin-top: 5%;
      }
      &.detail-word__combine {
        margin-top: 1%;
      }
    }
    & .detail-patent {
      margin-top: 5%;
    }
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
      <ContentBlock height={modalHeight}>
        {/* <h3>{userName}</h3> */}
        <div className="mindmap">
          <Mind
            width={mindWidth}
            height={mindHeight}
            onUserZoom={true}
            onRefreshBtn={true}
            onUnSelect={true}
            onUnNodeMove={true}
          />
        </div>
        <div className="detail">
          <div className="detail-btn">
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
            <span>23</span>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-down" />
            <span>3</span>
            <FontAwesomeIcon icon="fa-solid fa-share" />
          </div>
          <p className="detail-sentence">{sentence}</p>
          <p className="detail-word__start">
            <b>시작 단어:</b> 선풍기
          </p>
          <p className="detail-word__combine">
            <b>조합 단어:</b> 날개 + 전동기
          </p>

          <div className="detail-patent">
            <h3>관련 특허</h3>
            <ul>
              <li>날개없는 선풍기</li>
              <li>기압으로 전기를 생산하는 선풍기</li>
              <li>공기의 흐름을 측정하는 유체</li>
              <li>회전하는 선풍기</li>
            </ul>
          </div>
        </div>
      </ContentBlock>
    </Modal>
  );
};

export default FeedDetail;
