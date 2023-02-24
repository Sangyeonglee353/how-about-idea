import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React from "react";
const Footer = styled.div`
  /* width: 100%; */
  width: 428px;
  height: 80px;
  border-top: 2px solid var(--color-main-skyblue);
  position: fixed;
  bottom: 0;
  /* position: relative;
  transform: translateY(-100%); */
  background-color: white;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
    /* height: 100%; */
  }
  li {
    padding: 10px 0px;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const HomeBtn = styled(FontAwesomeIcon)`
  /* width: 32px; */
  height: 27px;
  color: var(--color-main-grey);
  cursor: pointer;
`;

const PlayBtn = styled(FontAwesomeIcon)`
  height: 20px;
  background-color: var(--color-main-skyblue);
  border: 1px soild var(--color-main-skyblue);
  border-radius: 10px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.35);
  padding: 16px;
  color: #fff;
  cursor: pointer;
`;

const ExitBtn = styled(FontAwesomeIcon)`
  height: 30px;
  color: var(--color-main-grey);
  cursor: pointer;
`;

const MainFooter = () => {
  return (
    <Footer>
      <ul>
        <li>
          <Link to={"/"}>
            <HomeBtn icon="fa-house" />
          </Link>
        </li>
        <li>
          <Link to={"/wordslect"}>
            <PlayBtn icon="fa-play" />
          </Link>
        </li>
        <li>
          <ExitBtn icon="fa-right-from-bracket" />
        </li>
      </ul>
    </Footer>
  );
};

export default MainFooter;
