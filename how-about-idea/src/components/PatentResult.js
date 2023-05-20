import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./UI/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faRegularStar from "../images/star-regular.svg";

const PatentResultCSS = styled.div`
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  width: 100vw;
  height: 92vh;
  margin: 0 auto;
  text-align: center;
  font-size: 15px;
  font-family: "Quicksand", sans-serif;
  background: rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  .result-wrapper {
    // 전체 블럭
    width: 92vw;
    height: 80vh;
    background-color: #fff;
    border-radius: 12px;
    margin: 6vh auto;
    @media (max-width: 1300px) {
      height: 750px;
    }
    @media (max-width: 990px) {
      height: 900px;
    }
    .result-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
      @media (max-width: 1300px) {
        height: 11%;
      }
      border-bottom: 1px solid #00000033;
      span {
        font-size: 30px;
      }
    }
  }
  .result-content-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60vh;
    @media (max-width: 1300px) {
      flex-direction: column;
      display: block;
      height: 78%;
    }
    @media (max-width: 990px) {
      /* height: 70vh; */
    }
    .result-sentence {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* width: 46vw; */
      width: 50%;
      height: 100%;
      /* background-color: blue; // temp */
      @media (max-width: 1300px) {
        width: 100%;
        height: 70%;
      }
      @media (max-width: 990px) {
        height: 60%;
      }
      .gsentence-wrapper {
        width: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px auto;
        border: 2px solid var(--color-main-blue);
        border-radius: 20px;
        @media (max-width: 1300px) {
          width: 70vw;
        }
        & .gsentence {
          font-size: 20px;
          color: var(--color-main-blue);
          margin: 15px auto;
          word-break: break-all;
          padding: 5px;
        }
      }
      table.idea-table {
        border: 2px solid var(--color-main-blue);
        border-collapse: collapse;
        width: 550px;
        height: 370px;
        margin: 15px auto 0 auto;
        color: var(--color-main-blue);
        @media (max-width: 1300px) {
          width: 70vw;
          /* height: 70%; */
        }
        tr,
        td,
        th {
          border: 2px solid var(--color-main-blue);
          border-collapse: collapse;
        }
        th {
          background-color: var(--color-main-blue);
          color: white;
          border-left: 5xp solid white;
        }
      }
    }
  }
  .result-evaluation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 46vw; */
    width: 50%;
    height: 100%;
    /* background-color: green; // temp */
    @media (max-width: 1300px) {
      flex-direction: row;
      width: 100%;
      height: 30%;
    }
    @media (max-width: 990px) {
      flex-direction: column;
      height: 40%;
      /* display: block;
      height: 40%; */
    }
    .result-evaluation__satisfy {
      width: 50%;
      height: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media (max-width: 990px) {
        width: 100%;
        height: 12vh;
      }
      /* background-color: blue; // temp */
      .result-evaluation__satisfy-star {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        /* background-color: skyblue; // temp */
        @media (max-width: 1980px) {
          height: 70%;
        }
        @media (max-width: 1770px) {
          height: 60%;
        }
        @media (max-width: 1575px) {
          height: 50%;
        }
        @media (max-width: 990px) {
          /* width: 90vw; */
          height: 80%;
        }

        .fa-star {
          /* width: 20%; */
          height: 90%;
          filter: invert(47%) sepia(90%) saturate(2417%) hue-rotate(170deg)
            brightness(110%) contrast(101%);
          &:hover {
            filter: invert(80%) sepia(20%) saturate(2921%) hue-rotate(12deg)
              brightness(101%) contrast(88%);
          }
        }
        .fa-star-fill {
          height: 90%;
          filter: invert(70%) sepia(52%) saturate(853%) hue-rotate(353deg)
            brightness(109%) contrast(103%);
        }
      }
      .result-evaluation__satisfy-label {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 20px;
          font-weight: bold;
          color: var(--color-main-blue);
        }
      }
    }
    .result-evaluation__setting {
      width: 40vw;
      height: 20vh;
      /* background-color: blue; // temp */
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 1300px) {
        width: 30vw;
        height: 90%;
      }
      @media (max-width: 990px) {
        margin: 20px auto 0 auto;
        width: 60vw;
        height: 12vh;
      }
      @media (max-width: 600px) {
        width: 80vw;
      }
      .result-evaluation__setting-private {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 1300px) {
          /* height: 60%; */ // -> 확인할 부분 [23-05-16] ###################################################################
        }
        @media (max-width: 990px) {
          width: 50%;
        }
        /* background-color: skyblue; // temp */
        .result-evaluation__setting-private-icon {
          display: flex;
          align-items: center;
          height: 80%;
          .fa-eye {
            height: 90%;
            color: var(--color-main-blue);
          }
          .fa-eye-slash {
            height: 90%;
            color: #999;
          }
        }
        .result-evaluation__setting-private-label {
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
          /* background-color: blue; // temp */
          span {
            font-size: 20px;
            font-weight: bold;
            color: var(--color-main-blue);
          }
        }
      }
      .result-evaluation__setting-refresh {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 1300px) {
          /* height: 60%; */
        }
        @media (max-width: 990px) {
          width: 50%;
        }
        /* background-color: grey; // temp */
        .result-evaluation__setting-refresh-icon {
          display: flex;
          align-items: center;
          height: 80%;
          .fa-refresh {
            height: 90%;
            color: var(--color-main-blue);
          }
        }
        .result-evaluation__setting-refresh-label {
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
          /* background-color: blue; // temp */
          span {
            font-size: 20px;
            font-weight: bold;
            color: var(--color-main-blue);
          }
        }
      }
    }
  }

  .result-save {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: grey;
    cursor: pointer;
    @media (max-width: 1300px) {
      height: 11%;
    }
    &:hover {
      background-color: var(--color-main-blue);
      color: #fff;
    }
    span {
      color: #fff;
      font-weight: bold;
      font-size: 30px;
    }
  }
`;

const PatentResult = (props) => {
  const [output, setOutput] = useState([]); // 문장 생성 AI 데이터 전송
  const [loading, setLoading] = useState(true); // 로딩 관련

  const [starRating, setStarRating] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  }); // 문장 만족도 평가[별점 표시]

  const handleStarRating = (props) => {
    if (props === "star1") {
      setStarRating({
        star1: true,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
      });
    } else if (props === "star2") {
      setStarRating({
        star1: true,
        star2: true,
        star3: false,
        star4: false,
        star5: false,
      });
    } else if (props === "star3") {
      setStarRating({
        star1: true,
        star2: true,
        star3: true,
        star4: false,
        star5: false,
      });
    } else if (props === "star4") {
      setStarRating({
        star1: true,
        star2: true,
        star3: true,
        star4: true,
        star5: false,
      });
    } else if (props === "star5") {
      setStarRating({
        star1: true,
        star2: true,
        star3: true,
        star4: true,
        star5: true,
      });
    } else if (props === "empty") {
      setStarRating({
        star1: false,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
      });
    }
  };

  const [privateOn, setPrivateOn] = useState(false); // 공개/비공개 아이콘 on/off
  const [refreshOn, setRefreshOn] = useState(false); // 다시 생성 아이콘 on/off

  const words = useLocation();
  useEffect(() => {
    console.log(words.state["word1"]);
    getSentence();
  }, [words.state]);

  // [문장 생성 API]
  const getSentence = () => {
    const data = {
      // firstWord: selectedNode[0].label,
      firstWord: words.state["word1"],
    };
    // 문장 생성 1회차만
    // setLoading(true);
    // 문장 생성 2회차부터
    {
      !loading && setRefreshOn(true);
    }
    axios
      .post("http://localhost:5000/api/hello", data)
      .then((response) => {
        // 응답데이터 처리
        setOutput(response);
        console.log("결과값: ", output);
        // 문장 생성 1회차 완료 여부 처리
        setLoading(false);
        // 문장 생성 2회차
        {
          !loading && setRefreshOn(false);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? <Loading /> : ""}
      <PatentResultCSS>
        <div className="result-wrapper">
          <div className="result-title">
            <span>문장 생성 결과</span>
          </div>

          <div className="result-content-wrapper">
            <div className="result-sentence">
              <div className="gsentence-wrapper">
                <span className="gsentence">{output.data}</span>
              </div>
              <table className="idea-table">
                <tr>
                  <th>유사한 아이디어(특허)</th>
                </tr>
                <tr>
                  <td>천안</td>
                </tr>
                <tr>
                  <td>병천</td>
                </tr>
                <tr>
                  <td>한기대</td>
                </tr>
                <tr>
                  <td>컴퓨터공학부</td>
                </tr>
                <tr>
                  <td>졸업작품!</td>
                </tr>
              </table>
            </div>

            <div className="result-evaluation">
              <div className="result-evaluation__satisfy">
                <div className="result-evaluation__satisfy-star">
                  {!starRating.star1 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarRating("star1")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarRating("star1")}
                    />
                  )}
                  {!starRating.star2 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarRating("star2")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarRating("star2")}
                    />
                  )}
                  {!starRating.star3 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarRating("star3")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarRating("star3")}
                    />
                  )}
                  {!starRating.star4 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarRating("star4")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarRating("star4")}
                    />
                  )}
                  {!starRating.star5 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarRating("star5")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarRating("empty")}
                    />
                  )}
                </div>
                <div className="result-evaluation__satisfy-label">
                  <span>문장 만족도</span>
                </div>
              </div>
              <div className="result-evaluation__setting">
                <div
                  className="result-evaluation__setting-private"
                  onClick={() => setPrivateOn(!privateOn)}
                >
                  <div className="result-evaluation__setting-private-icon">
                    {!privateOn ? (
                      <FontAwesomeIcon
                        icon="fa-solid fa-eye"
                        className="fa-eye"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon="fa-solid fa-eye-slash"
                        className="fa-eye-slash"
                      />
                    )}
                  </div>
                  <div className="result-evaluation__setting-private-label">
                    <span>공개/비공개</span>
                  </div>
                </div>
                <div
                  className="result-evaluation__setting-refresh"
                  onClick={() => getSentence()}
                >
                  <div className="result-evaluation__setting-refresh-icon">
                    {!refreshOn ? (
                      <FontAwesomeIcon
                        icon="fa-solid fa-refresh"
                        className="fa-refresh"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon="fa-solid fa-refresh"
                        className="fa-refresh"
                        spin
                      />
                    )}
                  </div>
                  <div className="result-evaluation__setting-refresh-label">
                    <span>다시 생성하기</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="result-save">
            <Link to="/">
              <span>Save & Quit</span>
            </Link>
          </div>
        </div>
      </PatentResultCSS>
    </>
  );
};

export default PatentResult;
