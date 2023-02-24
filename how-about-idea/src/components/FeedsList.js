import React from "react";
import FeedItem from "./FeedItem";
import styled from "styled-components";

const FeedList = styled.ul`
  list-style-type: none;
  /* margin-top: 150px; */
`;

const FeedsList = (props) => {
  let feedContent = <p>Feed don't found.</p>;

  if (props.items.length === 0) {
    return { feedContent };
  }

  return (
    <FeedList>
      {props.items.length > 0 &&
        props.items.map((feed) => (
          <FeedItem
            key={feed.id}
            name={feed.name}
            imgSource={feed.imgSource}
            trizType={feed.trizType}
            sentence={feed.sentence}
            onClick={props.onClick}
          />
        ))}
    </FeedList>
  );
};

export default FeedsList;
