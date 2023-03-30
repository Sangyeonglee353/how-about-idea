import bottomSubImage from "../images/leaf_img.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import mainBackground from "../images/main_background.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginCss = styled.div`
  width:100vw;
  height:92vh;
  background: url(${mainBackground});
  background-repeat:no-repeat;
  background-size:cover;

  .wrap{

    width:100vw;
    height: 92vh;
    background: #00000099;
    display:flex;
    align-items:center;
    justify-content:center;
  }


  .form{

    width:90vw;
    height:50vh; 
    background:#ffffff;
    border-radius:12px;
    max-width:400px;

    .title{
      width:100%;
      font-size:28px; 
      font-weight:700;
      text-align:center;
      mrgin-top:5vh;
      padding: 5vh 0;

    }

    .input{

      width:80%;
      margin:2vh 10%;
      display:flex;
      justify-content:center;

      .id,.pw{
        width:80%;
        padding: 1.2vh 2vw;
        border-radius:12px;
        border: 2px solid #00000055;

      }

      .id:focus,.pw:focus{
        outline:none;
        border: 2px solid #000000;

      }

    }

    .login,.signup{

      width:80%;
      margin:2vh 10%;
      display:flex;
      justify-content:center;
      align-items:center;

      .right{
        padding:1vh 0;
        height:25px;
        color:#ffffff;
          
      }
      .inner{
        background:#00000099;
        width:80%;
        border-radius:12px;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .link{
        display:block;
        width:80%;
        text-decoration:none;

        .text{
          border-radius:12px;
          padding:1vh 0;
          color:#ffffff;
          background:#00000055;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:20px;
          font-weight:700;
        }
      
      }

    }


  }


`;


const Login= () => {
  return (
    <LoginCss>
      <div className="wrap">
        <div className="form">

          <p className="title">로그인</p>

          <div className="input">
            <input type="text" className="id" placeholder="아이디"/>
          </div>

          <div className="input">
            <input type="text" className="pw" placeholder="비밀번호"/>
          </div>

          <div className="login">
            <div className="inner" onClick={()=>{window.location.href="/home"}}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="right"/>
            </div>
          </div>


          <div className="signup">
            <Link to={"/register"} className="link">          
              <p className="text">
                회원가입
              </p>
            </Link>
          </div>

        </div>

      </div>
    </LoginCss>

  );
};

export default Login;
