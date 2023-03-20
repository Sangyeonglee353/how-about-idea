import React,{ useState } from "react";
import styled from "styled-components";
import HomeFooter from "./HomeFooter";
import homeImg from "../images/home.png";
import refreshImg from "../images/refresh.png";
import { Link } from "react-router-dom";

const PatentResultCSS = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;

  p {
    color: var(--color-main-blue);
    font-size: 30px;
    &.notice {
      margin-top: 15px;
      font-size: 20px;
    }
  }
  .gsentence {
    width: 370px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid var(--color-main-blue);
    border-radius: 20px;
    font-size: 20px;
    color: var(--color-main-blue);
    margin: 15px auto 0 auto;
    @media (max-width: 400px) {
      width: 90%;
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

const PatentResult = () => {
  return (
    <>
      <PatentResultCSS>
        <p>특허청 분석 결과</p>
        <div className="gsentence">날개 머시기 머시기 장치</div>
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
              <Link to={"/home"}>
                <img src={homeImg} className="home" alt="home" />
              </Link>
            </td>
            <td>
              <Link to={"/nodeselect"}>
                <img src={refreshImg} className="refresh" alt="refresh" />
              </Link>
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
      <HomeFooter />
    </>
  );
};

export default PatentResult;
