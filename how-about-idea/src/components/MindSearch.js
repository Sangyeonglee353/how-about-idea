import MindList from "./MindList";
import styled from "styled-components";
import magnifyingGlass from "../images/magnifying-glass-solid.svg";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { convertApiData, searchWord, searchSentence } from "../Api";
const MindSearchCSS = styled.div`
  background-color: #f3f3f3;
  padding-top: 5px;

  .search-wrapper {
    position: relative;
    width: 55vw;
    margin: 5px auto 10px auto;
    background-color: #fff;
    border-radius: 20px;
    @media (max-width: 600px) {
      width: 90%;
    }
    .search-form {
      width: 95%;
      margin-left: 20px;
      img {
        height: 16px;
        cursor: pointer;
        &.fa-magnifyingGlass__on {
          filter: invert(58%) sepia(91%) saturate(5131%) hue-rotate(172deg)
            brightness(115%) contrast(92%);
        }
        &.fa-magnifyingGlass__off {
          filter: invert(91%) sepia(60%) saturate(5920%) hue-rotate(182deg)
            brightness(143%) contrast(78%);
        }
      }
      input {
        border: none;
        &.search {
          width: 90%;
          font-size: 20px;
          margin: 15px auto 15px 10px;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
`;
const MindSearch = () => {
  const search = useRef("");
  const [magnifyColor, setMagnifyColor] = useState(false);
  const [mindmapData, setMindmapData] = useState([]);

  const handleFocusColor = () => {
    setMagnifyColor(true);
  };

  const handleBlurColor = () => {
    setMagnifyColor(false);
  };

  const DUMMY_FEED = [
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

  async function getsearchData() {
    let MindMapId = {};
    let keyWord = search.current.value;
    if (keyWord !== "" && keyWord !== " ") return;
    res1.data.forEach((e) => {
      MindMapId[e.MindMapEntity.id] = true;
    });
    let res1 = await searchWord(keyWord);
    let res2 = await searchSentence(keyWord);
  }

  // [백엔드]_전체 마인드맵 정보 가져오기
  useEffect(() => {
    // console.log("TEMP_FEED_Data: ", TEMP_FEED);
    // setMindmapData(TEMP_FEED);
    // console.log("TEMP_FEED: ", TEMP_FEED);
    // console.log("MindStore.js & mindmapData: ", mindmapData);
  }, []);

  return (
    <MindSearchCSS>
      <div className="search-wrapper">
        <form className="search-form">
          <img
            src={magnifyingGlass}
            className={
              magnifyColor
                ? "fa-magnifyingGlass__on"
                : "fa-magnifyingGlass__off"
            }
            alt="fa-magnifyingGlass"
          />
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onFocus={handleFocusColor}
            onBlur={handleBlurColor}
            ref={search}
          />
        </form>
      </div>
      <MindList />
    </MindSearchCSS>
  );
};

export default MindSearch;
