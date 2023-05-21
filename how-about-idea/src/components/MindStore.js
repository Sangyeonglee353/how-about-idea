import MindList from "./MindList";
import React, { useEffect, useState } from "react";
import { getMyMindMap } from "../Api";

const MindStore = () => {
  const [mindmapData, setMindmapData] = useState({});

  // [백엔드]_내 마인드맵 정보 가져오기
  useEffect(() => {
    const res = getMyMindMap();
    res.then((res) => {
      console.log("Get My Mindmap Sucess!!");
      // if(res.data.result){
      // }
    });
  }, []);

  return (
    <>
      <MindList />
    </>
  );
};

export default MindStore;
