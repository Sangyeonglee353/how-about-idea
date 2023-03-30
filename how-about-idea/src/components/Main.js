import MainFooter from "./MainFooter.js";
import { Link } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React, { useState } from "react";
import mainBackground from "../images/main_background.jpg"

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
      align-items:center;
      @media (max-width:600px){

        flex-direction:column;

      }
      .container1{

        width:45vw;
        margin-left:5vw;
        @media (max-width:600px){
          width:80vw;
          margin-top:15vh;
          margin-bottom:10vh;
        }
        .text0{
          font-size:8vw;
          @media (max-width:600px){
            font-size:48px;
          }
          font-weight:700;
          background: linear-gradient(120deg, #89f7fe 25%, #66a6ff 30%);
          color: transparent;
          -webkit-background-clip: text;
        }

        .text1,.text2{
          margin-top:5vh;
          color:#ffffff;
          font-size:3vw;
          @media (max-width:600px){
            font-size:6vw;
          }
          font-weight:700;
        }

      }


      .container2{

        width:20vw;
        margin-left:15vw;
        @media (max-width:600px){
          width:80vw;
          margin-left:0vw;
        }

        .login,.signup{
          width:20vw;
          height:7vh;
          @media (max-width:600px){
            width:80vw;
          }

          border: 1px solid #000000;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:20px;
          font-weight:700;
          cursor:pointer;
        }

        .login{
          color:#ffffff;
          background:#3CAEFF;
          
        }

        .signup{
          margin-top:5vh;
          background:#ffffff;
        }

      }



    }
  }
`;


const Main = () => {
  return (

      <MainContents>
        <div className="wrap">
          <div className="content">

            <div className="container1">
              <p className="margin"></p>
              <p className="text0">HOWAI.</p>
              <p className="text1">아이디어가 생각나지 않을 때</p>
              <p className="text2">쉽고 빠른 AI 브레인 스토밍</p>
            </div>  

            <div className="container2">
              <p className="login" onClick={()=>{window.location.href='/login'}}>로그인 하기</p>
              <p className="signup" onClick={()=>{window.location.href='/register'}}>회원가입</p>
            </div>  

          </div>
        </div>
      </MainContents>
  );
};

export default Main;
