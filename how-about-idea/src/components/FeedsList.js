import React from "react";
import FeedItem from "./FeedItem";
import styled from "styled-components";

const FeedsListCSS = styled.ul`
  list-style-type: none;
  /* margin-top: 150px; */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 30px auto 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
    display: block;
    height: calc(100vh - 180px);
    overflow-y: scroll;
    margin: 0 auto;
  }
  /* scrollbar css */
  &::-webkit-scrollbar {
    width: 0px; /* 스크롤바 숨김 */
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: gray;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

const FeedsList = (props) => {
  let feedContent = <p>Feed don't found.</p>;

  if (props.items.length === 0) {
    return { feedContent };
  }

  return (
    <FeedsListCSS>
      {props.items.length > 0 &&
        props.items.map((feed) => (
          <FeedItem
            key={feed.id}
            name={feed.name}
            imgSource={feed.imgSource}
            trizType={feed.trizType}
            sentence={feed.sentence}
            onShowFeedDetail={props.onShowFeedDetail}
            onSetFeedData={props.onSetFeedData}
            feedData={feed}
          />
        ))}
    </FeedsListCSS>
  );
};

export default FeedsList;
