import MindList from "./MindList";
import styled from "styled-components";
import magnifyingGlass from "../images/magnifying-glass-solid.svg";
import { useState } from "react";
import React from "react";
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
  const [magnifyColor, setMagnifyColor] = useState(false);

  const handleFocusColor = () => {
    setMagnifyColor(true);
  };

  const handleBlurColor = () => {
    setMagnifyColor(false);
  };

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
            placeHolder="Search..."
            onFocus={handleFocusColor}
            onBlur={handleBlurColor}
          />
        </form>
      </div>
      <MindList />
    </MindSearchCSS>
  );
};

export default MindSearch;
