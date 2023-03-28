import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import React from "react";
import left from "../images/left.png"
import menu from "../images/menu.png"

const HeaderCss  = styled.div`
    width:100vw;
    height:8vh;
    box-shadow: 1px 0px 1px #00000055;
    display:flex;
    align-items:center;
    background:#ffffff;

    .img{
      width:14vw;
      height:8vh;
      display:flex;
      justify-content:center;
      align-items:center;

      .fa-chevron-left{
        height:5vh;
      }

      .menu{
        height:5vh;
      }

    }
    .logo{
      display:block;
      font-family: 'Quicksand', sans-serif;
      text-decoration:none;
      font-weight:700;
      font-size:30px;
      width:70vw;
      text-align:center;
      background: linear-gradient(45deg, #8baaaa 40%, #ae8b9c 60%);
      color: transparent;
      -webkit-background-clip: text;
    }

`


function Header(){

    const navigate = useNavigate()

    return(
        <HeaderCss >
            <div className="img">
            <img src={left} className="fa-chevron-left" onClick={()=>{navigate(-1)}}/>
            </div>

            <Link path="/" className="logo">
            HOWAI
            </Link>

            <div className="img">
            <img src={menu} className="menu"/>
            </div>
        </HeaderCss>
    )

}

export default Header