import Modal from "./UI/Modal";
import styled from "styled-components";
import tempImg from "../images/feed_1.png";
import { Link } from "react-router-dom";

const ContentBlock = styled.div`
  margin: 30px;

  label {
    display: block;
    font-weight: bold;
  }

  img {
    width: 70%;
  }

  ul {
    list-style: none;
  }

  li {
    padding-top: 10px;
    border-bottom: 1px solid #000;
  }
`;
const FeedDetail = (props) => {
  const userName = props.feedData.name;
  const imgSource = props.feedData.imgSource;
  const trizType = props.feedData.trizType;
  const sentence = props.feedData.sentence;

  return (
    <Modal onClick={props.onHideFeedDetail}>
      {/* <p>{props.feedData.name}</p> */}
      {/* <p>Test</p> */}
      <ContentBlock>
        <label>마인드맵</label>
        <Link to="/mind"><img src={tempImg} alt="tempImg" /></Link>
        <p>
          입력 문장: 선풍기 <br/><br/>
          
          트리즈 기법: {trizType} <br/>
          트리즈 문장: {sentence} 
        </p>
        <br/>
        <p>
          <h3>관련 특허</h3>
          <ul>
            <li>날개없는 선풍기</li>
            <li>기압으로 전기를 생산하는 선풍기</li>
            <li>공기의 흐름을 측정하는 유체</li>
            <li>회전하는 선풍기</li>
          </ul>
        </p>

        
      </ContentBlock>
    </Modal>
  );
};

export default FeedDetail;
