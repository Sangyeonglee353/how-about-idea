import leafImage from "../images/leaf_img.png";
import HomeFooter from "./HomeFooter";
import LevelButtons from "./LevelButtons";
import styled from "styled-components";
import React, { useRef} from "react";
import ButtonFooter from "./ButtonFooter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PlayCSS = styled.div`
  width:100vw;
  height:100vh;

  & h2 {
    font-family: "Quicksand", sans-serif;
    text-align: center;
    margin-top:7vh;
  }

  & img {
    display: block;
    margin: 70px auto 0 auto;
  }

  & input {
    display: block;
    width: 280px;
    height: 70px;
    border: 5px solid var(--color-main-blue);
    border-radius: 20px;
    margin: 66px auto 0 auto;
    padding: 5px;
    text-align: center;
  }

  & input:focus {
    outline: none;
  }


  .next{
    display:flex;
    width:100vw;
    height:10vh;
    background:skyblue;
    position:fixed;
    bottom:0;
    color:#ffffff;
    align-items:center;
    justify-content:center;
    cursor:pointer;
      
    @media screen and (max-width: 500px) {

      height:8vh;
    }

    .icon{
      
      height:6vh;

    }

  }


`;
const Play = () => {

  const root = useRef()
  return (
    <PlayCSS>
      <h2>
        시작단어를 설정해주세요
      </h2>
      <img src={leafImage} alt="leafImage"></img>
      <input type="text" ref={root}/>
      <div className="next"
      onClick={()=>{

        if(root.current.value.length!==0)
          window.location.href='/how-about-idea/BrainStorming?root='+root.current.value
        else
          alert('딘어를 입력해주세요')
      }}>
        <FontAwesomeIcon icon="fa-solid fa-angle-right" className="icon"/>
      </div>
    </PlayCSS>
  );
};

export default Play;
