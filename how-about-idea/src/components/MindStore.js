import MindList from "./MindList";
import React, { useEffect, useState } from "react";
import { getMyMindMap, convertApiData, searchMindMapSentence } from "../Api";

const MindStore = () => {
  const [mindmapData, setMindmapData] = useState([]);
  const [sentenceInfo, setSentenceInfo] = useState([]);
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
  ];
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
    let promises = result.id.map((e) => searchMindMapSentence(e));
    return Promise.all(promises)
      .then((responses) => {
        buf = responses.map((response) => response.data);
        setSentenceInfo([...buf]);
        // console.log("sentence:", buf, "\nmindMap", result.data);
        //리턴 {id: [마인드맵 아이디 리스트] , data: [마인드맵데이터 리스트]}
      })
      .catch((error) => {
        console.log("getMindMapSetence Error: ", error);
      });
    // result.id.forEach((e) => {
    //   buf.push(searchMindMapSentence(e));
    // });
    // setSentenceInfo([...buf]);
    // console.log("sentence:", buf, "\nmindMap", result.data);
    // //리턴 {id: [마인드맵 아이디 리스트] , data: [마인드맵데이터 리스트]}
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
