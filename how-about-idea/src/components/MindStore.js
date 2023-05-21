import MindList from "./MindList";
import React, { useEffect, useState } from "react";
import { getMyMindMap } from "../Api";

const MindStore = () => {
  const [mindmapData, setMindmapData] = useState([]);

  // [백엔드]_TEMP Data
  const TEMP_FEED = [
    {
      id: "feed1",
      name: "유창민",
      star_rating: 1,
      root_word: "선풍기",
      combine_word1: "회전",
      combine_word2: "선풍기",
      sentence: "기압차를 이용한 회전 선풍기",
    },
    {
      id: "feed2",
      name: "이상영",
      star_rating: 2,
      root_word: "주파수",
      combine_word1: "새",
      combine_word2: "주파수",
      sentence: "새들을 쫓아내는 주파수",
    },
    {
      id: "feed3",
      name: "홍기범",
      star_rating: 5,
      root_word: "모니터",
      combine_word1: "확장",
      combine_word2: "모니터",
      sentence: "확장 가능한 모니터",
    },
    {
      id: "feed4",
      name: "오준혁",
      star_rating: 3,
      root_word: "텀블러",
      combine_word1: "온도",
      combine_word2: "텀블러",
      sentence: "온도를 표시해주는 텀블러",
    },
  ];
  // [백엔드]_내 마인드맵 정보 가져오기
  useEffect(() => {
    // const res = getMyMindMap();
    // res
    //   .then((res) => {
    //     console.log("Get My Mindmap Sucess!!");
    //     if (res.data.result) {
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Get My Mindmap Falied!");
    //   });

    console.log("TEMP_FEED_Data: ", TEMP_FEED);
    setMindmapData(TEMP_FEED);
    console.log("MindStore.js & mindmapData: ", mindmapData);
  }, []);

  return (
    <>
      <MindList mindmapData={mindmapData} />
    </>
  );
};

export default MindStore;
