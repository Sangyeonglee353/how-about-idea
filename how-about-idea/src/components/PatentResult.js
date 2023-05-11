import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeImg from "../images/home.png";
import refreshImg from "../images/refresh.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./UI/Loading";

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
  .result-wrapper {
    width: 92vw;
    height: 80vh;
    background-color: #fff;
    border-radius: 12px;
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
  }
  .gsentence-wrapper {
    width: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    border: 5px solid var(--color-main-blue);
    border-radius: 20px;

    @media (max-width: 400px) {
      width: 90%;
    }
    & .gsentence {
      font-size: 20px;
      /* height: auto; */
      color: var(--color-main-blue);
      margin: 15px auto;
      word-break: break-all;
    }
  }
  table.idea-table {
    border: 5px solid var(--color-main-blue);
    border-collapse: collapse;
    width: 327px;
    height: 207px;
    margin: 15px auto 0 auto;
    color: var(--color-main-blue);
    @media (max-width: 400px) {
      width: 80%;
    }
    tr,
    td,
    th {
      border: 5px solid var(--color-main-blue);
      border-collapse: collapse;
    }
    th {
      background-color: var(--color-main-blue);
      color: white;
      border-left: 5xp solid white;
    }
  }

  table.menuBox {
    margin: 70px auto 0 auto;
    text-align: center;
    color: var(--color-main-blue);
    img {
      vertical-align: middle;
      cursor: pointer;
    }
    td {
      width: 150px;
    }
  }
  .result-save {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--color-main-blue);
    span {
      color: #fff;
      font-weight: bold;
      font-size: 30px;
    }
  }
`;

const PatentResult = (props) => {
  const [output, setOutput] = useState([]); // 문장 생성 AI 데이터 전송
  const [loading, setLoading] = useState(false); // 로딩 관련

  const navigate = useNavigate();
  const words = useLocation();
  useEffect(() => {
    console.log(words.state["word1"]);
    // getSentence();
  }, [words.state]);

  // [문장 생성 API]
  const getSentence = () => {
    const data = {
      // firstWord: selectedNode[0].label,
      firstWord: words.state["word1"],
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/hello", data)
      .then((response) => {
        // 응답데이터 처리
        setOutput(response);
        console.log("결과값: ", output);
        // 문장생성 완료 여부 처리
        // setIsMakeCompleted(true);
        setLoading(false);
        // alert("문장 생성 완료!");
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
              <table className="menuBox">
                <tr>
                  <td>
                    <img
                      src={refreshImg}
                      className="refresh"
                      alt="refresh"
                      // onClick={() => {
                      //   navigate(-1);
                      // }}
                      onClick={getSentence}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>다시 생성하기</label>
                  </td>
                </tr>
              </table>
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
