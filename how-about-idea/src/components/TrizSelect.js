import styled from "styled-components";
import HomeFooter from "./HomeFooter";

const TrizSelectCSS = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;

  h3 {
    color: var(--color-main-skyblue);
    font-size: 30px;
  }
  ul {
    list-style: none;
    margin-top: 15px;
  }
  li button {
    width: 330px;
    height: 49px;
    background-color: transparent;
    border: 5px solid var(--color-main-skyblue);
    margin: 20px auto 0 auto;
    color: var(--color-main-skyblue);
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: var(--color-main-blue);
      border: 5px solid var(--color-main-blue);
    }
  }
  li:nth-child(1) > button {
    margin: 0px;
  }
  .wordList {
    margin-top: 40px;
    color: var(--color-main-skyblue);
    label {
      font-size: 30px;
      margin-right: 18px;
    }
    .word {
      display: inline-block;
      width: 227px;
      height: 50px;
      border: 5px solid var(--color-main-skyblue);
      border-radius: 20px;
      vertical-align: middle;
      padding: 10px;
    }
  }
`;

const TrizSelect = () => {
  return (
    <>
      <TrizSelectCSS>
        <h3>Triz 기법</h3>
        <ul>
          <li>
            <button>추출하기</button>
          </li>
          <li>
            <button>분할하기</button>
          </li>
          <li>
            <button>향후추가</button>
          </li>
          <li>
            <button>향후추가</button>
          </li>
          <li>
            <button>향후추가</button>
          </li>
          <li>
            <button>향후추가</button>
          </li>
          <li>
            <button>향후추가</button>
          </li>
        </ul>
        <div className="wordList">
          <div className="firstWord">
            <label>단어 1</label>
            <div className="word">날개</div>
          </div>
          <div className="secondWord">
            <label>단어 2</label>
            <div className="word">양력</div>
          </div>
        </div>
      </TrizSelectCSS>
      <HomeFooter />
    </>
  );
};

export default TrizSelect;
