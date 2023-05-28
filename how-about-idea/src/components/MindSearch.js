import MindList from "./MindList";
import styled from "styled-components";
import magnifyingGlass from "../images/magnifying-glass-solid.svg";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { convertApiData, searchSentence, getMindMap } from "../Api";
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
  const [sentenceInfo, setSentenceInfo] = useState([]);
  const handleFocusColor = () => {
    setMagnifyColor(true);
  };

  const handleBlurColor = () => {
    setMagnifyColor(false);
  };

  function convertData(data) {
    let mindMap = [];

    data.forEach((e) => {
      mindMap.push({ data: { ...e } });
    });

    return mindMap;
  }
  async function getsearchData() {
    let mindMap = [];
    let mindMapId = [];
    let sentence = [];
    let rootWord = [];
    let buf = [];
    let keyWord = search.current.value;
    if (keyWord !== "" && keyWord !== " ") {
      let res = await searchSentence(keyWord);
      res.data.forEach((e) => {
        let res1 = mindMapId.push(e.mindMapEntityId);
        if (e.show === 0) sentence.push(e);
      });

      for (let i = 0; i < mindMapId.length; i++) {
        let res1 = await getMindMap(mindMapId[i]);
        mindMap.push(convertData([...res1.data.data[0], ...res1.data.data[1]]));
        rootWord.push(res1.data.data[2][0]);
      }

      sentence.forEach((e, idx) => {
        buf.push({
          sentenceInfo: { ...e, id: e.makeSentenceId },
          rootWord: rootWord[idx],
        });
      });

      console.log(buf[0]);

      setSentenceInfo([...buf]);
      setMindmapData([...mindMap]);
    }
  }

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
            onInput={() => {
              getsearchData();
            }}
          />
        </form>
      </div>
      <MindList mindmapData={mindmapData} sentenceInfo={sentenceInfo} />
    </MindSearchCSS>
  );
};

export default MindSearch;
