import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {CheckWordRelation, createWordRelation, getWordRelation} from '../Api'
const PrintedWordCss = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s;
  border-radius: 12px;

  .root,
  .word {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .root {
    font-size: 10px;
    padding-bottom: 10%;
  }

  .rotate {
    font-size: 20px;
  }
`;

function PrintedWord(props) {
  const back = useRef();
  const root = useRef();
  const word = useRef();
  return (
    <PrintedWordCss
      ref={back}
      onClick={() => {
        if (props.word !== "") {
          props.setPrev([
            props.word,
            props.root,
            props.level,
            props.previd + 1,
            props.root_id,
          ]);
          props.setPrevId(props.previd + 1);
        }
      }}
      onMouseOver={() => {
        back.current.style.background = "#3CAEFF";
        root.current.style.color = "#ffffff";
        word.current.style.color = "#ffffff";
      }}
      onMouseLeave={() => {
        back.current.style.background = "#ffffff";
        root.current.style.color = "#000000";
        word.current.style.color = "#000000";
      }}
    >
      <p className="root" ref={root}>
        {props.root}
      </p>
      <p className="word" ref={word}>
        {props.word}
      </p>
    </PrintedWordCss>
  );
}

function Refresh(props) {
  const back = useRef();
  const refresh = useRef();
  return (
    <PrintedWordCss
      ref={back}
      onClick={() => {
        props.refresh();
      }}
      onMouseOver={() => {
        back.current.style.background = "#3CAEFF";
        refresh.current.style.color = "#ffffff";
      }}
      onMouseLeave={() => {
        back.current.style.background = "#ffffff";
        refresh.current.style.color = "#000000";
      }}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-rotate-right"
        className="rotate"
        ref={refresh}
      />
    </PrintedWordCss>
  );
}

const NodeCss = styled.div`
  overflow: hidden;
  width: 28%;
  border: 1px solid #000000;
  border-radius: 12px;
  margin: 1% 1.5%;

  .wrap {
    width: 200%;
    display: flex;
    transform: translate(0%);
    transition: 0.5s;

    .container1,
    .container2 {
      display: flex;
      width: 50%;
      align-items: center;
      justify-content: center;

      .r {
        font-size: 10px;
        padding-bottom: 10%;
      }
    }

    .container1 {
      text-align: center;
      flex-direction: column;
      padding: 2vh 0;
    }

    .add,
    .cancle {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add {
      padding: 7% 1%;
      color: #000000;
      border-left: 1px solid #000000;
    }

    .cancle {
      color: red;
      padding: 5% 1%;
    }
  }
`;

function Node(props) {
  const menu = useRef();

  return (
    <NodeCss>
      <div className="wrap" ref={menu}>
        <div
          className="container1"
          onClick={() => {
            menu.current.style.transform = "translate(-50%)";
          }}
        >
          <p className="r">{props.root}</p>
          <p className="w">{props.word}</p>
        </div>
        <div className="container2">
          <p
            className="cancle"
            onClick={() => {
              menu.current.style.transform = "translate(0%)";
              props.setClick(["단어를 선택해주세요", ""]);
            }}
          >
            취소
          </p>

          <p
            className="add"
            onClick={() => {
              props.setClick([props.word, props.root]);
              menu.current.style.transform = "translate(0%)";
              props.setMenu(true);
            }}
          >
            선택
          </p>
        </div>
      </div>
    </NodeCss>
  );
}

const BrainStormingCss = styled.div`
  width: 100vw;
  height: 92vh;
  background: rgba(0, 0, 0, 0.1);
  display: flex;

  overflow-y: auto;
  @media (max-width: 600px) {
    display: block;
  }

  .word_select {
    transition: 0.3s;
    width: 46vw;
    height: 80vh;
    background: #ffffff;
    margin: 6vh 2vw;
    border-radius: 12px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 12px;
    @media (max-width: 600px) {
      width: 96vw;
      height: 50vh;
    }
  }

  .menu {
    width: 46vw;
    height: 80vh;
    background: #ffffff;
    margin: 6vh 2vw;
    border-radius: 12px;
    @media (max-width: 600px) {
      width: 96vw;
      height: 50vh;
    }

    .title {
      width: 100%;
      height: 10%;
      display: flex;

      p {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
      }

      .word {
        color: ${(props) => (props.menu ? "#00000077" : "#000000")};
        border-bottom: 1.5px solid
          ${(props) => (props.menu ? "#00000077" : "#000000")};
      }

      .tool {
        color: ${(props) => (props.menu ? "#000000" : "#00000077")};
        border-bottom: 1.5px solid
          ${(props) => (props.menu ? "#000000" : "#00000077")};
      }
    }

    .slider {
      overflow: hidden;
    }

    .container {
      width: 200%;
      height: 90%;
      display: flex;
      overflow: hidden;
      transform: translate(${(props) => (props.menu ? -50 : 0)}%);
      transition: 0.5s;

      .word_container {
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        height: 64vh;
        @media (max-width: 600px) {
          height: 44vh;
        }
      }

      .words {
        margin: 2% 2%;
        width: 96%;
        display: flex;
        flex-wrap: wrap;
      }

      .tools {
        width: 100%;
        height: 64vh;
        @media (max-width: 600px) {
          height: 44vh;
        }
        .select {
          margin-top: 22vh;
          @media (max-width: 600px) {
            margin-top: 7vh;
          }
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          .selected {
            border: 1px solid #000000;
            border-radius: 12px;
            padding: 2vh 5%;
            max-width: 40%;
            word-break: break-all;
            text-align: center;
            .r {
              font-size: 12px;
              margin-bottom: 1vh;
            }
          }
        }

        .input {
          margin-top: 10vh;
          @media (max-width: 600px) {
            margin-top: 5vh;
          }
          margin-left: 10%;
          padding: 1.5vh 1vw;
          width: 80%;
          border-radius: 12px;
          border: 1px solid #000000;
        }

        input[type="text"] {
          width: 80%;
          border: 0;
        }

        input:focus {
          outline: none;
        }

        .icon {
          width: 20%;
          font-size: 20px;
        }
      }
    }

    
  }

  .save {
    margin: 0;
    width: 46vw;
    padding: 3vh 0;
    color: #000000;
    @media (max-width: 600px) {
        padding: 2vh 0;
        width: 96vw;
    }
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 12px 12px;
    }
`;

function BrainStorming() {

  const navigate = useNavigate();
  const location = useLocation();
  const [previd, setPrevId] = useState(1);
  const enter = useRef(false);
  const next = useRef();
  const add = useRef();
  const word = useRef([]);
  const [menu, setMenu] = useState(false);
  const [prev, setPrev] = useState(-1);
  const [select, setSelect] = useState([]);
  const [print, setPrint] = useState([]);
  const [click, setClick] = useState(["단어를 선택해주세요", ""]);
  const printIdx = useRef([])
  const wordWeight  = useRef({})
  const isExist = useRef({})

  const renew_print_all = () => {
    let buf = [];
    let idx_buf = []
    isExist.current["-1,-1"]=0
    for (let i = 0; i < 15;i++) {
      if (buf.length < word.current.length) {

        const rand = Math.floor(Math.random() * word.current.length);

        if(buf.indexOf(rand)===-1){
          idx_buf.push(rand)
          buf.push(word.current[rand]);
          isExist.current[word.current[rand][1]+","+word.current[rand][0]] = rand
        }
        
        else
          i--
      } 
      else {
        if(buf.length===word.current.length)
          isExist.current["-1,-1"] = i
        idx_buf.push(-1)
        buf.push([-1, -1]);
      }
    }
    setPrint(buf);
    printIdx.current = [...idx_buf]

  };

  async function renew_word(){

    let word_buf = [...word.current];
    let print_buf = [...print];
    let tmp = [];
    let print_idx = [...printIdx.current]
    let idx = print_idx.indexOf(isExist.current[prev[1]+","+prev[0]])
    print_idx.splice(idx,1)
    print_buf.splice(idx, 1);

    if(isExist.current["-1,-1"]>0)
      print_buf = print_buf.splice(0, isExist.current["-1,-1"]);

    word_buf.splice(isExist[prev[1]+","+prev[0]], 1);
    
    let res = await getWordRelation(prev[0])

    for (let i = 0; i < res.data.length; i++) {
      wordWeight.current[prev[0]+","+res.data[i]["word"]] =res.data[i]["weight"]
      tmp.push([res.data[i]["word"],prev[0], prev[2] + 1,, -1, prev[3]]);
    }

    word_buf = [...word_buf ,...tmp];
    const len = 15 - print_buf.length;
    for (let i = 0; i < len; i++ ) {
      if (print_buf.length < word_buf.length) {

        const rand = Math.floor(Math.random() * word_buf.length);

        if(print_idx.indexOf(rand)===-1){
          print_idx.push(rand)
          print_buf.push(word_buf[rand]);
          isExist.current[word_buf[rand][1]+","+word_buf[rand][0]] = rand
        }

        else
          i--        
      } 
      
      else {
        if(buf.length===word.current.length)
          isExist.current["-1,-1"] = i

        print_idx.push(-1)
        print_buf.push([-1, -1]);
      }
    }
    
    word.current = [...word_buf];
    setPrint([...print_buf])
    printIdx.current=[...print_idx]

  };

  async function creatWord(){

    CheckWordRelation()



  }

  const make_mind = () => {
    let node = [];

    let edge = [];

    select.map((e) => {
      console.log(e)
      node.push({
        data: {
          id: e[3].toString(),
          label: e[0].toString(),
          type: "level" + e[2],
        },
      });

      if (e[4] !== -1)

        edge.push({
          data: {
            id: e[4] + "->" + e[3],
            source: e[3].toString(),
            target: e[4].toString(),
          },
        });

    });

    return [...node, ...edge];
  };


  useEffect(() => {
    const root = decodeURI(location.search.split("root=")[1]);
    setSelect([[root, -1, 1, 1, -1]]);
    let buf = [];

    let res = getWordRelation(root)
    res.then((e)=>{
 
      for (let i = 0; i < e.data.length; i++) {
        wordWeight.current[e.data[root+","+e.data[i]["word"]]] =e.data[i]["weight"]
        buf.push([e.data[i]["word"], root, 2, -1, 1]);
      }
  
      word.current = [...buf];

      if (word.length !== 0) 
        renew_print_all();

    })

      
  }, []);

  useEffect(() => {
    if (enter.current) {
      setSelect([...select, prev]);
      renew_word();
    } 
    else {
      enter.current = true;
    }
  }, [prev]);

  return (
    <BrainStormingCss menu={menu}>
      <div className="word_select">
        {print.map((e, idx) => {
          return (
            <PrintedWord
              word={e[0] !== -1 ? e[0] : ""}
              setPrev={setPrev}
              key={idx}
              root={e[1] !== -1 ? e[1] : ""}
              level={e[2]}
              previd={previd}
              setPrevId={setPrevId}
              root_id={e[4]}
            />
          );
        })}
        <Refresh refresh={renew_print_all} />
      </div>
      <div className="menu">
        <div className="title" onClick={()=>{console.log(word.current)}}>
          <p className="word" onClick={() => setMenu(false)}>
            단어
          </p>
          <p className="tool" onClick={() => setMenu(true)}>
            도구
          </p>
        </div>

        <div className="slider">
          <div className="container">
            <div className="word_container">
              <div className="words">
                {select.map((e, idx) => {
                  return (
                    <Node
                      word={e[0]}
                      root={e[1] === -1 ? "시작단어" : e[1]}
                      setMenu={setMenu}
                      key={idx}
                      setClick={setClick}
                    />
                  );
                })}
              </div>
            </div>

            <div className="tools">
              <div className="select">
                <div
                  className="selected">
                  <p className="r">{click[1]}</p>
                  <p>{click[0]}</p>
                </div>
              </div>


              <div className="input">
                <input type="text" ref={add} />
                <FontAwesomeIcon
                  icon="fa-solid fa-plus"
                  className="icon"
                  onClick={() => {
                    if (
                      add.current.value !== "" &&
                      add.current.value !== " " &&
                      add.current.value !== null &&
                      click[0] !== "단어를 선택해주세요") 
                    {

                      setPrev([add.current.value, click[0]]);

                      add.current.value = "";
                      setClick(["단어를 선택해주세요", ""]);

                    } 

                    else 
                      alert("단어를 선택해주세요");
                  }}
                />
              </div>


 
            </div>



          </div>
        </div>
        <p className="save" ref={next} 

        onClick={()=>{

          let mindmap = make_mind()
          console.log(mindmap)
          //navigate("/NodeSelect",{state: mindmap})

        }}

        onMouseOver={() => {
            next.current.style.background = "#3CAEFF";
            next.current.style.color = "#ffffff";
        }}

        onMouseLeave={() => {
            next.current.style.background = "gray";
            next.current.style.color = "#000000";
        }}>
        save & quit
        </p>


      </div>
    </BrainStormingCss>
  );
}

export default BrainStorming;
