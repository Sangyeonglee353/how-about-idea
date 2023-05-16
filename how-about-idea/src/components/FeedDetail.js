import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import thumbsUp from "../images/thumbs-up-regular.svg";
import thumbsDown from "../images/thumbs-down-regular.svg";
import share from "../images/share.png";
import download from "../images/download.svg";
import html2canvas from "html2canvas";

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
        cursor: pointer;
        &.fa-thumbs-up {
          height: 16px;
        }
        &.fa-thumbs-down {
          height: 16px;
        }
        &.fa-share {
          height: 16px;
        }
        &.fa-download {
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
      // padding: 10,
      // scale: 1,
    })
      .then(function (canvas) {
        const imageURL = canvas.toDataURL("image/png");
        saveAs(imageURL, "new file.png");
        alert("다운로드 성공!");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const captureAndDownload = () => {
    const captureDiv = document.getElementById("DetailContent");
    makeDivToImageFile(captureDiv);
  };
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
            <img src={thumbsUp} className="fa-thumbs-up" alt="fa-thumbs-up" />
            <span>23</span>
            <img
              src={thumbsDown}
              className="fa-thumbs-down"
              alt="fa-thumbs-down"
            />
            <span>3</span>
            {/* <img src={share} className="fa-share" alt="fa-share" /> */}
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
