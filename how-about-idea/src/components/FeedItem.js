import React from "react";
import tempImage from "../images/feed_1.png";
import styled from "styled-components";

const FeedItemElement = styled.li`
  width: 100%;
  padding: 10px 0px;
  margin-bottom: 5px;
  /* border-top: 10px solid var(--color-main-skyblue); */
  border: 2px solid var(--color-main-skyblue);
  border-radius: 10px;
  cursor: pointer;

  &:last-child {
    /* border-bottom: 10px solid var(--color-main-skyblue); */
    /* padding-bottom: 100px; */
  }

  & h3 {
    font-family: inherit;
    font-size: 10px;
    margin-left: 15px;
  }

  & img {
    display: block;
    border-radius: 10px;
    margin: 0 auto;
  }

  .summary {
    margin-top: 10px;
    p {
      font-family: inherit;
      font-size: 15px;
      margin-left: 45px;
      .bold {
        font-weight: bold;
      }
    }
  }

  &:hover {
    background-color: var(--color-main-skyblue);
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
      <div className="summary">
        <p>
          <span className="bold">트리즈 기법:</span> {props.trizType}
        </p>
        <p>
          <span className="bold">트리즈 문장:</span> {props.sentence}
        </p>
      </div>
    </FeedItemElement>
  );
};

export default FeedItem;
