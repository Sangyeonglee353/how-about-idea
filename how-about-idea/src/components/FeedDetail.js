import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import thumbsUp from "../images/thumbs-up-regular.svg";
import thumbsDown from "../images/thumbs-down-regular.svg";
import share from "../images/share.png";
import download from "../images/download.svg";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faRegularStar from "../images/star-regular.svg";
import StarRating from "./UI/StarRating";

const ContentBlock = styled.div`
  /* margin: ${(props) => (props.height < 700 ? "10" : "30")}px; */
  margin: 10px;
  padding: 20px; // 이미지 저장용 여백

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
      img {
        &.fa-download {
          cursor: pointer;
          height: 16px;
        }
        &.fa-star {
          height: 16px;
        }
        &.fa-star-fill {
          height: 16px;
        }
      }

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
  const sentence = props.feedData.sentence;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMindHeight(window.innerHeight < 800 ? "150px" : "300px");
      setModalHeight(window.innerHeight);
    });
  }, []);

  // 이미지로 저장
  const makeDivToImageFile = (props) => {
    const saveAs = (url, fileName) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    html2canvas(props, {
      allowTaint: true,
      useCORS: true,

      /* 아래 3 속성이 canvas의 크기를 정해준다. */
      width: props.offsetWidth,
      height: props.offsetHeight,
      // scale: 1,
    })
      .then(function (canvas) {
        const imageURL = canvas.toDataURL("image/png");
        saveAs(imageURL, "new file.png");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const captureAndDownload = () => {
    const captureDiv = document.getElementById("DetailContent");
    makeDivToImageFile(captureDiv);
  };

  // 별점 표시
  // const [starRating, setStarRating] = {
  //   star1: "false",
  //   star2: "false",
  //   star3: "false",
  //   star4: "false",
  //   star5: "false",
  // };

  // const handleStarRating = (starNum) => {
  //   if (starNum === "1") {
  //     setStarRating({
  //       star1: true,
  //       star2: false,
  //       star3: false,
  //       star4: false,
  //       star5: false,
  //     });
  //   } else if (starNum === "2") {
  //     setStarRating({
  //       star1: true,
  //       star2: true,
  //       star3: false,
  //       star4: false,
  //       star5: false,
  //     });
  //   } else if (starNum === "3") {
  //     setStarRating({
  //       star1: true,
  //       star2: true,
  //       star3: true,
  //       star4: false,
  //       star5: false,
  //     });
  //   } else if (starNum === "4") {
  //     setStarRating({
  //       star1: true,
  //       star2: true,
  //       star3: true,
  //       star4: true,
  //       star5: false,
  //     });
  //   } else if (starNum === "5") {
  //     setStarRating({
  //       star1: true,
  //       star2: true,
  //       star3: true,
  //       star4: true,
  //       star5: true,
  //     });
  //   } else if (props === "0") {
  //     setStarRating({
  //       star1: false,
  //       star2: false,
  //       star3: false,
  //       star4: false,
  //       star5: false,
  //     });
  //   }
  // };

  return (
    <Modal onClick={props.onHideFeedDetail}>
      <ContentBlock id="DetailContent" height={modalHeight}>
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
            <StarRating starNum={1} />
            <img
              src={download}
              className="fa-download"
              alt="fa-download"
              onClick={() => captureAndDownload()}
            />
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
              <li>무소음 선풍기</li>
            </ul>
          </div>
        </div>
      </ContentBlock>
    </Modal>
  );
};

export default FeedDetail;
