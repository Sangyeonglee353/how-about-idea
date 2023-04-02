import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonFooterCSS = styled.div`
  /* Footer */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 428px;
  height: 80px;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100vw;
  }
  button {
    display: inline-block;
    width: 50%;
    height: 100%;
    background-color: white;
    border: 5px solid var(--color-main-blue);
    text-align: center;
    font-size: 20px;
    &:first-child {
      &:hover {
        background-color: var(--color-main-blue);
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
    &:last-child {
      background-color: var(--color-sub-grey);
      border-color: var(--color-sub-grey);
      &.activeBtn {
        background-color: var(--color-main-blue);
        border-color: var(--color-main-blue);
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

const ButtonFooter = (props) => {
  const navigate = useNavigate();

  return (
    <ButtonFooterCSS>
      <button
        id="prevPage"
        onClick={() => {
          navigate(-1);
        }}
      >
        이전
      </button>
      <Link to={props.nextPage}>
        <button className="activeBtn" id="nextPage">
          다음
        </button>
      </Link>
    </ButtonFooterCSS>
  );
};

export default ButtonFooter;
