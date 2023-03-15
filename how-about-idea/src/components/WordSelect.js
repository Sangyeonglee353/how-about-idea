import React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// .node {
//   display: flex;
//   margin: 1% 1.5%;
//   padding: 1vh 1vw;
//   width: auto;
//   align-items: center;
//   justify-content: center;
//   background: #ffffff;
//   border: 2px solid skyblue;
//   border-radius: 12px;
//   font-size: 16px;
// }

const NodeCss = styled.div`
  width:30%;
  overflow:hidden;
  border: 2px solid skyblue;
  border-radius: 12px;
  margin:5% 1.5%;
  .wrap{
    width:200%;
    display: flex;
    transform:translate(0%);
    transition:0.5s;
    .container1,.container2{
      display: flex;
      width:50%;
      align-items: center;
      justify-content: center;
    }
    
    .container1{

      text-align:center;

    }

    .add,.cancle{
      width:50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .add{
      padding:7% 1%;
      color:#ffffff;
      background:skyblue;
    }

    .cancle{
      color:red;
      padding:5% 1%;

    }

  }




`

function Node(props){

  const menu = useRef()
  return(

    <NodeCss >
      <div className="wrap" ref={menu}>
        <div className="container1"onClick={()=>{menu.current.style.transform="translate(-50%)"}}>
          {props.word}
        </div>
        <div className="container2">
        
          <p className="cancle" 
          onClick={()=>{
            menu.current.style.transform="translate(0%)"
            props.tool.current.innertext="단어를 선택해 주세요"
          }}>취소</p>

          <p className="add" 
          onClick={()=>{
            props.tool.current.innerText=props.word
            menu.current.style.transform="translate(0%)"
            props.menu.current.style.transform="translate(-50%)"
          }}>선택</p>
        
        </div>
      </div>
    </NodeCss>
  )
}


const Cvs = styled.canvas`
  margin: 0;
  width: 90%;
  height: 350px;
  margin: 1vh 5%;
  background: #ffffff;
  border-radius: 12px;
`;
const Appcss = styled.div`
  width: 100%;
  overflow: hidden;
  background: #f5f7fa;
  height: 100vh;
  .screen {
    width: 90%;
    height: ${(props) => props.vh * 100 - 400}px;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    background: #ffffff;
    margin: 0 5%;
    border-radius: 12px;

    .menu {
      display: flex;

      .title {
        margin: 0;
        padding: 1vh 0;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      .menu1 {
        border-right: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .words {
      width: 200%;
      display: flex;
      transform: translate(0%);
      transition: 0.5s;

      .selected {
        padding: 2% 4%;
        margin: 0;
        width: 50%;
        overflow-y: auto;

        .word {
          display: flex;
          flex-wrap: wrap;
          justify-content: left;

          .node {
            display: flex;
            margin: 1% 1.5%;
            padding: 1vh 1vw;
            width: auto;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            border: 2px solid skyblue;
            border-radius: 12px;
            font-size: 16px;
            transition:0.5s;
          }
        }
      }

      .tools {
        padding: 2% 4%;
        margin: 0;
        width: 50%;
        height: ${(props) => props.vh * 100 - 300}px;
        .selected{
          width:80%;
          height:15vh;
          background: rgba(0,0,0,0.1);
          margin:3vh auto;
          border-radius: 12px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          color:#000000;
        }
        .input{
          display:flex;
          
        }

        .word_input {
          width: 70%;
          margin-left: 7%;
          border: 0;
          border: 2px solid skyblue;
          border-radius: 12px;
          padding: 1vh 2%;
        }
        .icon{
          display:flex;
          align-items:center;
          justify-content:center;
          margin-left:3%;
          width:12%;
          height:auto;
          background:skyblue;
          border-radius:12px;
        }

        .send{
          font-size:18px;
          color:#ffffff;
        }


        .word_input:focus {
          outline: none;
        }
      }
    }
  }
`;

function Wordselect() {
  const cvs = useRef("");
  const w = useRef("");
  let json_data = {

    root: "개",
    개:["리트리버","푸들", "시츄", "말티즈", "웰시코기", "고양이"],
    고양이:["브리티시 숏헤어", "러시안 블루", "페르시안"],
    리트리버:["갈색", "대형견", "사냥"]

  }
  let list = [...json_data[json_data.root]];

  let select = [json_data.root];

  const [size, setSize] = useState(
    window.innerHeight < 600 ? window.screen.availHeight : window.innerHeight
  );

  const [selected, setselect] = useState([]);
  const menu = useRef();
  const tool = useRef();
  class word {
    constructor() {
      this.ctx = document.getElementsByTagName("canvas").item(0);
      this.x = this.ctx.width;
      this.y =
        Math.floor(Math.random() * (Math.floor(this.ctx.height / 100) - 1)) *
          100 +
        100;
      this.text = list[Math.floor(Math.random() * list.length)];
      this.color = this.random_color();
    }

    random_color() {
      let buf = [
        "#FF8C00",
        "#E9967A",
        "#00CED1",
        "#696969",
        "#90EE90",
        "#FF4500",
        "#DB7093",
        "#FA8072",
        "#F4A460",
        "#D8BFD8",
        "#90EE90",
      ];

      return buf[Math.floor(Math.random() * buf.length)];
    }

    draw() {
      let ctx = document
        .getElementsByTagName("canvas")
        .item(0)
        .getContext("2d");
      ctx.font = "24px serif";
      ctx.fillStyle = this.color;
      ctx.fillText(this.text, this.x, this.y);
    }
  }

  let timer = 0;
  let words = [];
  let animation;

  function frameAnimation() {
    let ctx = document.getElementsByTagName("canvas").item(0).getContext("2d");
    animation = requestAnimationFrame(frameAnimation);
    timer++;
    ctx.clearRect(0, 0, cvs.current.width, cvs.current.height);

    if (timer % 100 === 0) {
      let w = new word();
      words.push(w);
    }

    words.forEach((e, idx, arr) => {
      if (e.x < 0) {
        arr.splice(idx, 1);
      }

      for (let i = 0; i < select.length; i++) {
        if (select[i] === e.text) {
          arr.splice(idx, 1);
          break;
        }
      }

      e.x -= 1.5;
      e.draw();
    });
  }

  useEffect(() => {
    setTimeout(() => {
      frameAnimation();
    }, 100);
    window.addEventListener("resize", () => {
      setSize(
        window.innerHeight < 600
          ? window.screen.availHeight
          : window.innerHeight
      );
    });
  }, []);

  return (
    <Appcss vh={size / 100}>
      <Cvs
        ref={cvs}
        width={350}
        height={350}
        onClick={(e) => {
          const desktop = window.innerWidth / 2 - 200;
          const x = window.navigator.userAgent.includes("Window")
            ? e.clientX - desktop
            : e.clientX;
          const y = window.navigator.userAgent.includes("Window")
            ? e.clientY
            : e.clientY;
          let min = 70000;
          let click_word;
          let idx;

          for (let i = 0; i < words.length; i++) {
            let gap =
              (x - words[i].x) * (x - words[i].x) +
              (y - words[i].y) * (y - words[i].y);
            if (min > gap && gap < 20000) {
              min = gap;
              click_word = words[i].text;
              idx = i;
            }
          }
          if (click_word !== undefined) {
            list.splice(idx, 1);
            select.push(click_word);

            if(json_data[click_word]!==undefined)
              list=[...list,...json_data[click_word]]   
            
            let new_node = ReactDOMServer.renderToStaticMarkup(<Node word={click_word}  tool={tool} key={w.current.childElementCount}  menu={menu}/>)
            document.getElementsByClassName("word").item(0).innerHTML += new_node
          }
        }}
      ></Cvs>
      <div className="screen">
        <div className="menu">
          <p 
            className="title menu1"
            onClick={() => {
              menu.current.style.transform = "translate(0%)";
            }}
          >
            selected words
          </p>
          <p
            className="title menu2"
            onClick={() => {
              menu.current.style.transform = "translate(-50%)";
            }}
          >
            tools
          </p>
        </div>
        <div className="words" ref={menu}>
          <div className="selected">
            <div className="word" ref={w}>
                <Node key={0} word={json_data["root"]} tool={tool} menu={menu}/>
            </div>
          </div>
          <div className="tools">
            <p className="selected" ref={tool}>

            </p>
            <div className="time"></div>
            <div className="input">
              <input className="word_input" type={"text"} placeholder={"하위 단어 추가"} />
              <div className="icon">
                <FontAwesomeIcon  className="send" icon={faPaperPlane} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Appcss>
  );
}

export default Wordselect;
