import MindList from "./MindList";
import React, { useEffect, useState } from "react";
import { getMyMindMap, convertApiData, searchMindMapSentence } from "../Api";

const MindStore = () => {
  const [mindmapData, setMindmapData] = useState([]);
  const [sentenceInfo, setSentenceInfo] = useState([]);

  // [백엔드]_내 마인드맵 정보 가져오기
  // [호출할 것]
  // (1) 사용자의 멤버 ID로 마인드맵 가져오기 -> mindmap id도 포함되어 있음
  // (1) 내가 생성한 문장 정보
  // (2) 내가 생성한 문장 ID에 따른 마인드맵

  // [추가]
  // (1) 별점
  // (2) root 단어
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
