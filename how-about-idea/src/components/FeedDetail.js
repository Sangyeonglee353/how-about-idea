import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import styled from "styled-components";
import Mind from "./MindMap/Mind";
import download from "../images/download.svg";
import html2canvas from "html2canvas";
import StarRating from "./UI/StarRating";
import { getPatentSentence, getStarRating, getUserStarRating } from "../Api";

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
    & .star-total {
      padding: 10px;
    }
  }
  .detail {
    margin-top: 2%;
    & .detail-btn {
      img {
        &.fa-download {
          cursor: pointer;
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

  // [변수] 간소화
  let feedDetailData_SentenceInfo = props.feedDetailData.sentenceInfo;
  let feedDetailData_RootWord = props.feedDetailData.rootWord;

  const sentence = feedDetailData_SentenceInfo.sentence;
  const rootWord = feedDetailData_RootWord;

  const combineWord1 = feedDetailData_SentenceInfo.combineWord1;
  const combineWord2 = feedDetailData_SentenceInfo.combineWord2;

  // [백 엔드] 별점 조회 및 평균 별점 계산
  const [avgStarRating, setAvgStarRating] = useState("");

  async function getStarRatingData() {
    let res = await getStarRating(feedDetailData_SentenceInfo.id);
    res = res.data;
    let starRatingTotal = +res.data["totalRating"];
    let memberTotal = +res.data["memberTotal"];
    let avgStarRatingRound = Math.round(starRatingTotal / memberTotal);
    setAvgStarRating(avgStarRatingRound); // 평균 별점 계산
  }

  // [백 엔드] 사용자 별점 조회
  const [userStarRating, setUserStarRating] = useState("");
  async function getUserStarRatingData() {
    let res = await getUserStarRating(feedDetailData_SentenceInfo.id);
    if (res.data !== "") {
      console.log(res.data);
      setUserStarRating(res.data["starRating"]);
    }
  }

  // [백 엔드]_연관 특허 문장 가져오기
  const [patentSentenceList, setPatentSentenceList] = useState([]);

  async function getPatentData() {
    let res = await getPatentSentence(feedDetailData_SentenceInfo.id);
    setPatentSentenceList(res.data.data);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMindHeight(window.innerHeight < 800 ? "150px" : "300px");
      setModalHeight(window.innerHeight);
    });

    getStarRatingData();
    getUserStarRatingData();
    getPatentData();
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

  return (
    <Modal onClick={props.onHideFeedDetail}>
      <ContentBlock id="DetailContent" height={modalHeight}>
        <div className="mindmap">
          <div className="star-total">
            <StarRating
              starNum={avgStarRating}
              sentenceId={feedDetailData_SentenceInfo.id}
              isDisabled={true}
            />
          </div>
          <Mind
            width={mindWidth}
            height={mindHeight}
            onUserZoom={true}
            onRefreshBtn={true}
            onUnSelect={true}
            onUnNodeMove={true}
            mindmapData={props.feedDetailGraph}
          />
        </div>
        <div className="detail">
          <div className="detail-btn">
            <StarRating
              starNum={userStarRating}
              sentenceId={feedDetailData_SentenceInfo.id}
              isDisabled={false}
            />
            <img
              src={download}
              className="fa-download"
              alt="fa-download"
              onClick={() => captureAndDownload()}
            />
          </div>
          <p className="detail-sentence">{sentence}</p>
          <p className="detail-word__start">
            <b>시작 단어:</b> {rootWord}
          </p>
          <p className="detail-word__combine">
            <b>조합 단어:</b> {combineWord1} + {combineWord2}
          </p>

          <div className="detail-patent">
            <h3>관련 특허</h3>
            {patentSentenceList[0] !== undefined && (
              <ul>
                <li>{patentSentenceList[0]["patentSentence"]}</li>
                <li>{patentSentenceList[1]["patentSentence"]}</li>
                <li>{patentSentenceList[2]["patentSentence"]}</li>
                <li>{patentSentenceList[3]["patentSentence"]}</li>
                <li>{patentSentenceList[4]["patentSentence"]}</li>
              </ul>
            )}
          </div>
        </div>
      </ContentBlock>
    </Modal>
  );
};

export default FeedDetail;
