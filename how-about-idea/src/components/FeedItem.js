import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import StarRating from "./UI/StarRating";
import { getStarRating } from "../Api";

const FeedItemCSS = styled.li`
  flex: auto;
  width: 23%;
  padding: 10px 0px;
  margin: 0 1.5% 3% 1.5%;
  border-radius: 10px;
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
    &.fa-thumbs-up {
      height: 16px;
    }
    &.fa-thumbs-down {
      height: 16px;
    }
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

  const showAndSetFeed = () => {
    props.onSetFeedData(props.feedData); // 상세보기(모달) 데이터 변경
    props.onSetFeedGraph(props.mindmapData); // 상세보기(모달) 그래프 변경
    props.onShowFeedDetail();
  };

  // [백엔드]_총 별점 및 별점 메긴 사람 호출
  const [avgStarRating, setAvgStarRating] = useState("");
  async function getStarRatingData() {
    let res = await getStarRating(props.id);
    res = res.data;
    let starRatingTotal = +res.data["totalRating"];
    let memberTotal = +res.data["memberTotal"];
    let avgStarRatingRound = Math.round(starRatingTotal / memberTotal);
    setAvgStarRating(avgStarRatingRound); // 평균 별점 계산
  }

  useEffect(() => {
    getStarRatingData();
  }, []);

  // [형식변환]_날짜
  const dateTimeFormat = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}년 ${month}월 ${day}일`;
    return formattedDate;
  };

  const createDate = dateTimeFormat(props.createDate);

  return (
    <FeedItemCSS onClick={showAndSetFeed}>
      <div className="mindmap">
        <Mind
          width={mindWidth}
          height={mindHeight}
          onUserZoom={false}
          onRefreshBtn={false}
          onUnSelect={true}
          onUnNodeMove={true}
          mindmapData={props.mindmapData}
        />
      </div>
      <div className="summary">
        <div className="summary-btn">
          {console.log(props.mindmapData)}
          <StarRating starNum={avgStarRating} isDisabled={true} />
        </div>
        <p className="summary-sentence">{props.sentence}</p>
        <p className="summary-date">{createDate}</p>
      </div>
    </FeedItemCSS>
  );
};

export default FeedItem;
