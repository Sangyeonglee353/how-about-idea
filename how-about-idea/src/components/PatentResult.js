import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeImg from "../images/home.png";
import refreshImg from "../images/refresh.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./UI/Loading";

const PatentResultCSS = styled.div`
  margin: 5vh auto 0 auto;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  height: 800px;

  p {
    color: var(--color-main-blue);
    font-size: 30px;
    &.notice {
      margin-top: 15px;
      font-size: 20px;
    }
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
    }
    td {
      width: 150px;
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
    getSentence();
  }, []);

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
        <p>문장 생성 결과</p>
        {/* <div className="gsentence">날개 머시기 머시기 장치</div> */}
        {/* <div className="gsentence">{props.sentence}</div> */}
        <div className="gsentence-wrapper">
          <span className="gsentence">{output.data}</span>
        </div>
        <table className="idea-table">
          <tr>
            <th>비슷한 아이디어</th>
            <th>유사도</th>
          </tr>
          <tr>
            <td>천안</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>병천</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>한기대</td>
            <td>35.5%</td>
          </tr>
          <tr>
            <td>컴퓨터공학부</td>
            <td>14.8%</td>
          </tr>
        </table>
        <table className="menuBox">
          <tr>
            <td>
              <Link to={"/"}>
                <img src={homeImg} className="home" alt="home" />
              </Link>
            </td>
            <td>
              <img
                src={refreshImg}
                className="refresh"
                alt="refresh"
                onClick={() => {
                  navigate(-1);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>메인으로</label>
            </td>
            <td>
              <label>다시 생성하기</label>
            </td>
          </tr>
        </table>
        <p className="notice">회원은 자동으로 결과가 저장됩니다.</p>
      </PatentResultCSS>
    </>
  );
};

export default PatentResult;
