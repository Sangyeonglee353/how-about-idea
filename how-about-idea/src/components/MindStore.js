import MindList from "./MindList";
import React, { useEffect, useState } from "react";
import { getMyMindMap, convertApiData, searchMindMapSentence } from "../Api";

const MindStore = () => {
  const [mindmapData, setMindmapData] = useState([]);
  const [sentenceInfo, setSentenceInfo] = useState([]);

  // [백엔드]_내 마인드맵 정보 가져오기
  async function getMindstoreData() {
    let res = await getMyMindMap();
    let result = convertApiData(res.data.data);
    let buf = [];
    setMindmapData([...result.data]);

    for (let i = 0; i < result.id.length; i++) {
      let res1 = await searchMindMapSentence(result.id[i]);
      buf.push({
        sentenceInfo: res1.data[0],
        rootWord: result.rootWord[i],
      });
    }
    setSentenceInfo([...buf]);
  }

  useEffect(() => {
    getMindstoreData();
  }, []);

  return (
    <>
      <MindList mindmapData={mindmapData} sentenceInfo={sentenceInfo} />
    </>
  );
};

export default MindStore;
