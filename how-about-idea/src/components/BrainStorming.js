import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CheckWordRelation,
  createWordRelation,
  getWordRelation,
  createMindMap,
  updateWeight,
} from "../Api";
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
            props.word_id,
          ]);
          updateWeight(props.word_id);
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
              props.setClick([
                props.word,
                props.root,
                props.level,
                props.word_id,
                props.root_id,
              ]);
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
  const [click, setClick] = useState([
    "단어를 선택해주세요",
    "",
    -1,
    -1,
    -1,
    -1,
  ]);
  const printIdx = useRef([]);
  const wordWeight = useRef({});
  const isExist = useRef({});

  const renew_print_all = () => {
    let buf = [];
    let idx_buf = [];
    let word_idx = {};
    let word_exp = {};
    let sum = 0;
    isExist.current["-1,-1"] = 0;

    Object.keys(wordWeight.current).forEach((e, idx) => {
      sum += wordWeight.current[e];
      word_idx[e] = idx;
    });

    let exp_sum = 0;
    Object.keys(wordWeight.current).forEach((e) => {
      word_exp[e] = Math.exp(wordWeight.current[e] / sum);
      exp_sum += word_exp[e];
    });

    for (let i = 0; i < 15; i++) {
      if (buf.length < word.current.length) {
        const rand = Math.random() * exp_sum;
        let loc = 0;
        for (let k in word_exp) {
          loc += word_exp[k];
          if (rand <= loc) {
            if (idx_buf.indexOf(word_idx[k]) === -1) {
              idx_buf.push(word_idx[k]);
              buf.push(word.current[word_idx[k]]);
              isExist.current[
                word.current[word_idx[k]][1] +
                  "," +
                  word.current[word_idx[k]][0]
              ] = word_idx[k];
            } else {
              i--;
            }
            break;
          }
        }
      } else {
        if (buf.length === word.current.length) isExist.current["-1,-1"] = i;
        idx_buf.push(-1);
        buf.push([-1, -1]);
      }
    }

    setPrint(buf);
    printIdx.current = [...idx_buf];
  };

  async function renew_word() {
    let word_buf = [...word.current];
    let print_buf = [...print];
    let tmp = [];
    let print_idx = [...printIdx.current];
    let idx = isExist.current[prev[1] + "," + prev[0]];
    if (idx === undefined) {
      for (let i = 0; i < word_buf.length; i++) {
        if (word_buf[i][0] === prev[0] && word_buf[i][1] === prev[1]) {
          word_buf.splice(i, 1);
        }
      }
      word.current = [...word_buf];
      return;
    } else {
      idx = print_idx.indexOf(isExist.current[prev[1] + "," + prev[0]]);
      print_idx.splice(idx, 1);
      print_buf.splice(idx, 1);
    }

    if (isExist.current["-1,-1"] > 0)
      print_buf = print_buf.splice(0, isExist.current["-1,-1"]);

    word_buf.splice(isExist[prev[1] + "," + prev[0]], 1);

    delete wordWeight.current[prev[1] + "," + prev[0]];

    let res = await getWordRelation(prev[0]);
    for (let i = 0; i < res.data.length; i++) {
      wordWeight.current[prev[0] + "," + res.data[i]["word"]] =
        res.data[i]["weight"];
      tmp.push([
        res.data[i]["word"],
        prev[0],
        prev[2] + 1,
        -1,
        prev[3],
        res.data[i].id,
      ]);
    }

    word_buf = [...word_buf, ...tmp];

    let word_idx = {};
    let word_exp = {};
    let sum = 0;
    let exp_sum = 0;
    Object.keys(wordWeight.current).forEach((e, idx) => {
      sum += wordWeight.current[e];
      word_idx[e] = idx;
    });

    Object.keys(wordWeight.current).forEach((e) => {
      word_exp[e] = Math.exp(wordWeight.current[e] / sum);
      exp_sum += word_exp[e];
    });

    const len = 15 - print_buf.length;
    for (let i = 0; i < len; i++) {
      if (print_buf.length < word_buf.length) {
        const rand = Math.random() * exp_sum;
        let loc = 0;
        for (let k in word_exp) {
          loc += word_exp[k];
          if (rand <= loc) {
            if (print_idx.indexOf(word_idx[k]) === -1) {
              print_idx.push(word_idx[k]);
              print_buf.push(word.current[word_idx[k]]);
              isExist.current[
                word.current[word_idx[k]][1] +
                  "," +
                  word.current[word_idx[k]][0]
              ] = word_idx[k];
            } else {
              i--;
            }
            break;
          }
        }
      } else {
        if (print_buf.length === word.current.length)
          isExist.current["-1,-1"] = i;

        print_idx.push(-1);
        print_buf.push([-1, -1]);
      }
    }

    word.current = [...word_buf];
    setPrint([...print_buf]);
    printIdx.current = [...print_idx];
  }

  async function creatWord(rootword, word) {
    let res = await CheckWordRelation(rootword, word);
    if (res.data!=="") {
      await createWordRelation({
        rootWord: rootword,
        word: word,
        weight: 10,
      });
    }
    else{
      
      await getWordRelation(res.data.id)

    }
  }

  async function make_mind() {
    const root = decodeURI(location.search.split("root=")[1]);
    let node = [];
    let node_api = [];
    let edge = [];
    let edge_api = [];
    select.map((e) => {
      node.push({
        data: {
          id: e[3].toString(),
          label: e[0].toString(),
          type: "level" + e[2],
        },
      });

      node_api.push({
        id: e[3].toString(),
        label: e[0].toString(),
        type: "level" + e[2],
      });

      if (e[4] !== -1) {
        edge.push({
          data: {
            id: e[4] + "->" + e[3],
            source: e[3].toString(),
            target: e[4].toString(),
          },
        });

        edge_api.push({
          id: e[4] + "->" + e[3],
          source: e[3].toString(),
          target: e[4].toString(),
        });
      }
    });

    let res = await createMindMap({
      highestWord: root,
      mindMapNode: node_api,
      mindMapEdge: edge_api,
    });

    return { mindMap: [...node, ...edge], id: res.data.data.id };
  }

  const exist_select = () => {
    for (let i = 0; i < select.length; i++) {
      if (select[i][0] === prev[0] && select[i][1] === prev[1]) {
        return true;
      }
    }

    return false;
  };

  useEffect(() => {
    const root = decodeURI(location.search.split("root=")[1]);
    setSelect([[root, -1, 1, 1, -1]]);
    let buf = [];

    let res = getWordRelation(root);
    res.then((e) => {
      for (let i = 0; i < e.data.length; i++) {
        wordWeight.current[root + "," + e.data[i]["word"]] =
          e.data[i]["weight"];
        buf.push([e.data[i]["word"], root, 2, -1, 1, e.data[i].id]);
      }

      word.current = [...buf];

      if (word.length !== 0) renew_print_all();
    });

  }, []);

  useEffect(() => {
    let buf = [];
    if (enter.current && !exist_select()) {
      setSelect([...select, prev]);
      if (wordWeight.current[prev[1] + "," + prev[0]] !== undefined)
        renew_word();
      else {
        let res = getWordRelation(prev[0]);
        res.then((e) => {
          for (let i = 0; i < e.data.length; i++) {
            wordWeight.current[prev[0] + "," + e.data[i]["word"]] =
              e.data[i]["weight"];
            buf.push([e.data[i]["word"], prev[0], 2, -1, 1]);
          }
          word.current = [...buf];
        });
      }
    } else {
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
              word_id={e[5]}
            />
          );
        })}
        <Refresh refresh={renew_print_all} />
      </div>
      <div className="menu">
        <div className="title">
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
                      level={e[2]}
                      word_id={e[3]}
                      root_id={e[4]}
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
                <div className="selected">
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
                      click[0] !== "단어를 선택해주세요"
                    ) {
                      setPrev([
                        add.current.value,
                        click[0],
                        click[2] + 1,
                        previd + 1,
                        click[3],
                      ]);
                      creatWord(click[0], add.current.value);
                      add.current.value = "";
                      setPrevId(previd + 1);
                      setClick(["단어를 선택해주세요", ""]);
                    } else alert("단어를 선택해주세요");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <p
          className="save"
          ref={next}
          onClick={() => {
            let mindmap = make_mind();
            mindmap
              .then((e) => {
                navigate("/NodeSelect", {
                  state: { mindMap: e.mindMap, id: e.id },
                });
              })
              .catch(() => {
                alert("에러 발생, 다시 시도해 주세요");
              });
          }}
          onMouseOver={() => {
            next.current.style.background = "#3CAEFF";
            next.current.style.color = "#ffffff";
          }}
          onMouseLeave={() => {
            next.current.style.background = "gray";
            next.current.style.color = "#000000";
          }}
        >
          save & quit
        </p>
      </div>
    </BrainStormingCss>
  );
}

export default BrainStorming;
