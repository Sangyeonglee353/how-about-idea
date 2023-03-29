import MainFooter from "./MainFooter.js";
import { Link } from "react-router-dom";
import student_logo from "../images/student.png";
import ceo_logo from "../images/ceo.png";
import planner_logo from "../images/planner.png";
import styled from "styled-components";
import React, { useState } from "react";
import mainBackground from "../images/main_background.jpg"
import Header from "./Header.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Page1Css = styled.div`

  width:100vw;
  height:92vh;
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

    width:50vw;
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:center;

    .icon{
      margin-left:15vw;
      width:10vw;
      height:10vw;
      padding: 1vw 1vw;
      color: #66a6ff;
      border-radius:100%;
      background: #ffffff; #66a6ff;
      cursor:pointer;
    }

  }

`
function Page1(props){
  
  return(
    <Page1Css>
        <div className="container1">
          <p className="margin"></p>
          <p className="text0">HOWAI.</p>
          <p className="text1">아이디어가 생각나지 않을 때</p>
          <p className="text2">쉽고 빠른 AI 브레인 스토밍</p>
        </div> 
        <div className="container2"> 
          <FontAwesomeIcon icon="fa-solid fa-angle-right" className="icon" onClick={()=>{props.setMode(1)}}/>
        </div>
    </Page1Css>
  )

}


const Page2Css = styled.div`

  width:100vw;
  height:92vh;

  
  .logo{
    font-size:8vw;
    font-weight:700;
    margin-top:15vh;
    margin-bottom:10vh;
    background: linear-gradient(120deg, #89f7fe 25%, #66a6ff 30%);
    color: transparent;
    -webkit-background-clip: text;
    display:flex;
    align-items:center;
    justify-content:center;

  }

  .logo_back{

    background:#ffffffaa;
    width:50vw;
    margin:auto;
  }

  .container2{


    box-shadow: 2px 2px 10px black;

    width:90vw;
    max-width:442px;
    height:40vh;
    margin: 0 auto;
    border-radius:12px;
    background:#ffffff;

    .title{

      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:24px;
      font-weight:300;
      

    }

    input{  
      margin: 2vh 2vw;
      width: 80%;
      padding:1.5vh 2vw;
      border:2px solid #00000055;
      border-radius:12px;
    }

    input:focus{

      border: 3px solid #3232FF;
      outline:none;

    }

    .login{

      display:flex;
      align-items:center;

      .login_btn{

        width:35%;
        height:16vh;
        background:${props=>props.loginCss?"#3232FF":"rgba(0,0,0,0.1)"};
        margin: 2vh 0;
        border-radius:12px;
        display:flex;
        align-items:center;
        justify-content:center;
        transition:0.3s;

        .icon{
          transition:0.3s;
          height:16vh;
          color:${props=>props.loginCss?"#ffffff":"gray"};
        }
        

      }

    }

  }
`
function Page2(){
  const [loginCss,setLoginCss] = useState(false)
  return(
    <Page2Css loginCss={loginCss}>

      <div className="logo_back">
        <p className="logo">
          HOWAI
        </p>
      </div>

      <div className="container2">

        <p className="title">로그인</p>
        <div className="login" >

          <div className="input">
              <div>  
                <input type="text" className="id" placeholder="아이디"/>
              </div>  

              <div>  
                <input type="text" className="pw" placeholder="비밀번호"/>
              </div>  
          </div>

            <div className="login_btn" 
              onMouseOver={()=>{setLoginCss(true)}}
              onMouseLeave={()=>{setLoginCss(false)}}>


              <FontAwesomeIcon icon="fa-solid fa-angle-right" className="icon"/>
            
            </div>
            
        </div>

        <p className="signin">회원가입</p>
        <p className="nonMember">비회원으로 시작</p>

      </div>  
    </Page2Css>
  )

}

const MainContents = styled.div`
  width: 100vw;

  .wrap{

    width:100vw;
    height: 92vh;
    background: url(${mainBackground});
    background-repeat:no-repeat;
    background-size:cover;
    overflow:hidden;

    .page{

      width:200vw;
      height: 92vh;
      background: #00000099;
      display:flex;
      transform:translate(${props=>props.mode*-100}vw);
      transition:0.4s;
    }

    
  }

`;


const Main = () => {

  const [mode,setMode] = useState(1)

  return (

      <MainContents mode={mode}>
        <Header/>
        <div className="wrap">
          <div className="page">
              <Page1 setMode={setMode}/>
              <Page2 />
          </div>
        </div>
      </MainContents>
  );
};

export default Main;
