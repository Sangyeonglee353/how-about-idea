import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./UI/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faRegularStar from "../images/star-regular.svg";

const PatentResultCSS = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 92vh;
  margin: 0 auto;
  text-align: center;
  font-size: 15px;
  font-family: "Quicksand", sans-serif;
  background: rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  .result-wrapper {
    width: 92vw;
    height: 80vh;
    background-color: #fff;
    border-radius: 12px;
    @media (max-width: 1300px) {
      height: 800px;
      margin: 20vh auto 15vh auto;
    }
    .result-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
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
      height: 700px;
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
        width: 90%;
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
      width: 90%;
    }
    .result-evaluation__satisfy {
      height: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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
          filter: invert(100%) sepia(100%) saturate(7497%) hue-rotate(357deg)
            brightness(103%) contrast(104%);
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
      }
      .result-evaluation__setting-private {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 1300px) {
          height: 60%;
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
          height: 60%;
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

  const [starOn, setStarOn] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  }); // 문장 만족도 평가

  const handleStarOn = (props) => {
    if (props === "star1") {
      setStarOn({
        star1: true,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
      });
    } else if (props === "star2") {
      setStarOn({
        star1: true,
        star2: true,
        star3: false,
        star4: false,
        star5: false,
      });
    } else if (props === "star3") {
      setStarOn({
        star1: true,
        star2: true,
        star3: true,
        star4: false,
        star5: false,
      });
    } else if (props === "star4") {
      setStarOn({
        star1: true,
        star2: true,
        star3: true,
        star4: true,
        star5: false,
      });
    } else if (props === "star5") {
      setStarOn({
        star1: true,
        star2: true,
        star3: true,
        star4: true,
        star5: true,
      });
    } else if (props === "empty") {
      setStarOn({
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
                  {!starOn.star1 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarOn("star1")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarOn("star1")}
                    />
                  )}
                  {!starOn.star2 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarOn("star2")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarOn("star2")}
                    />
                  )}
                  {!starOn.star3 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarOn("star3")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarOn("star3")}
                    />
                  )}
                  {!starOn.star4 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarOn("star4")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarOn("star4")}
                    />
                  )}
                  {!starOn.star5 ? (
                    <img
                      src={faRegularStar}
                      className="fa-star"
                      alt="fa-regular-star"
                      onClick={() => handleStarOn("star5")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon="fa-soild fa-star"
                      className="fa-star-fill"
                      onClick={() => handleStarOn("empty")}
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
            <span>Save & Quit</span>
          </div>
        </div>
      </PatentResultCSS>
    </>
  );
};

export default PatentResult;
