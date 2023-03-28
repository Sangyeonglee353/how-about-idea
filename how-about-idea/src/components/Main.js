import MainFooter from "./MainFooter.js";
import { Link } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React, { useState } from "react";
import mainBackground from "../images/main_background.jpg"
import Header from "./Header.js";

const MainContents = styled.div`
  width: 100vw;

  .wrap{

    width:100vw;
    height: 92vh;
    background: url(${mainBackground});
    background-repeat:no-repeat;
    background-size:cover;

    .content{

      width:100vw;
      height: 92vh;
      background: #00000099;
      display:flex;

      .container1{

        width:45vw;
        height:92vh;
        margin-left:5vw;

        .margin{
          width:50vw;
          height:24vh;
        }

        .text0{
        width:45vw;
        font-size:8vw;
        font-weight:700;
        background: linear-gradient(120deg, #89f7fe 25%, #66a6ff 30%);
        color: transparent;
        -webkit-background-clip: text;

        }

        .text1,.text2{
          margin-top:5vh;
          color:#ffffff;
          width:45vw;
          font-size:3vw;
          font-weight:700;
        }

      }


      .container2{

        width:36vw;
        height:62vh;
        margin-top: 15vh;
        margin-left: 10vw;
        border-radius:12px;
        background:#ffffff;

        .title{
          
          width:36vw;
          text-align:center;
          padding:3vh;
          font-size:36px;

        }

        input{
          margin-left:10vw;
          width:16vw;
          padding:1vh 2vw;
          border:1px solid #00000055;
          border-radius:12px;
        }

      }

    }
  }
`;


const Main = () => {
  return (

      <MainContents>
        <Header/>
        <div className="wrap">
          <div className="content">
            <div className="container1">
              <p className="margin"></p>
              <p className="text0">HOWAI.</p>
              <p className="text1">아이디어가 생각나지 않을 때</p>
              <p className="text2">쉽고 빠른 AI 브레인 스토밍</p>
            </div>  
            <div className="container2">

              <p className="title">로그인</p>

              <div>  
                <input type="text" className="id"/>
              </div>  

              <div>  
                <input type="text" className="pw"/>
              </div>  

            </div>  
          </div>
        </div>
        {/* <div className="intro">
          <p className="top">
            브레인스토밍 중인 여러분.
            <br />
            아이디어가 생각나지 않아 고민하고 있지 않으신가요?
          </p>
          <p className="bottom">
            협업을 위한 첫 걸음 아이디어에서부터 시작합니다.
            <br />
            마음에 드는 아이디어가 나올 때까지
            <span className="break_mobile"> 원하는 트리즈 기법을</span>
            <span className="break_desktop">
              이용해서 아이디어를 생성해보세요.
            </span>
          </p>
        </div>
        <div>
          <div className="recommend">
            <h2 className="title">이런 사람이 하면 좋아요!</h2>
            <ul>
              <li>
                <img src={student_logo} alt="student_logo" />
                <div className="img-title">대학생</div>
              </li>
              <li>
                <img src={ceo_logo} alt="ceo_logo" />
                <div className="img-title">예비 창업자</div>
              </li>
              <li>
                <img src={planner_logo} alt="planner_logo" />
                <div className="img-title">기획자</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="move">
          <Link to={"/login"}>
            <button type="button">로그인하러 가기</button>
          </Link>
        </div> */}
      </MainContents>
  );
};

export default Main;
