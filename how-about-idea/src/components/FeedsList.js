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
  height: 92vh;
  margin: 2vh auto;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: block;
    height: 92vh;
    overflow-y: scroll;
    margin: 0 auto;
  }

  .padding {
    width: 100vw;
    height: 3vh;
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
  // let feedContent = <p>Feed don't found.</p>;

  // if (props.items.length === 0) {
  //   return { feedContent };
  // }

  return (
    <FeedsListCSS>
      {props.items.length > 0 &&
        props.items.map((item, index) => (
          <>
            {console.log("item: ", item[0])}

            <FeedItem
              key={index}
              id={item[0].id}
              // root_word={item[0].root_word}
              // combine_word1={item[0].combineWord1}
              // combine_word2={item[0].combineWord2}
              createDate={item[0].nowDataTime}
              sentence={item[0].sentence}
              onShowFeedDetail={props.onShowFeedDetail}
              onSetFeedDetailData={props.onSetFeedDetailData}
              onSetFeedDetailGraph={props.onSetFeedDetailGraph}
              sentenceData={item[0]} // FeedDetail 전달용(데이터)
              mindmapData={props.mindmaps[index]} // FeedDetail 전달용(그래프)
            />
          </>
        ))}
      {/* {props.items.length > 0 &&
        props.items.map((feed) => (
          <FeedItem
            key={feed.id}
            name={feed.name}
            star_rating={feed.star_rating}
            root_word={feed.root_word}
            combine_word1={feed.combine_word1}
            combine_word2={feed.combine_word2}
            sentence={feed.sentence}
            onShowFeedDetail={props.onShowFeedDetail}
            onSetFeedData={props.onSetFeedData}
            feedData={feed}
          />
        ))} */}
      <div className="padding"></div>
    </FeedsListCSS>
  );
};

export default FeedsList;
