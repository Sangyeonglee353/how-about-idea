import tempImage from "../images/feed_1.png";
import styled from "styled-components";

const FeedItemElement = styled.li`
  width: 100%;
  padding: 10px 0px;
  border-top: 10px solid var(--color-main-skyblue);
  cursor: pointer;

  &:last-child {
    border-bottom: 10px solid var(--color-main-skyblue);
  }

  & h3 {
    font-family: inherit;
    font-size: 10px;
    margin-left: 15px;
  }

  & img {
    display: block;
    margin: 0 auto;
    padding-bottom: 10px;
  }

  & p {
    font-family: inherit;
    font-size: 15px;
    margin-left: 45px;
  }
`;
const FeedItem = (props) => {
  const source = props.imgSource;
  // console.log(source);
  return (
    <FeedItemElement onClick={props.onClick}>
      <h3>{props.name}</h3>
      {/* <img src={source} alt={props.id} /> */}
      {/* <img src={require(source).default} alt={props.id} />*/}
      <img src={tempImage} alt={props.id} />
      <p>트리즈 기법: {props.trizType}</p>
      <p>트리즈 문장: {props.sentence}</p>
    </FeedItemElement>
  );
};

export default FeedItem;
