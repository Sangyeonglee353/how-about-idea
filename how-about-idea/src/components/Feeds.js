import React from "react";
import FeedsList from "./FeedsList";

const Feeds = (props) => {
  // 필터

  return (
    <FeedsList
      items={props.items}
      onShowFeedDetail={props.onShowFeedDetail}
      onSetFeedData={props.onSetFeedData}
    />
  );
};

export default Feeds;
