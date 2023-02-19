import React from 'react'
import FeedsList from "./FeedsList";

const Feeds = (props) => {
    // 필터

    return (
        <div>
            <FeedsList items={props.items} onClick={props.onShowFeedDetail}/>
        </div>
    );
}

export default Feeds