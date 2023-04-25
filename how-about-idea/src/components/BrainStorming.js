import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


const PrintedWordCss = styled.div`


width:25%;
height:25%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
transition:0.3s;
border-radius:12px;
.root,.word{

    display:flex;
    align-items:center;
    justify-content:center;
}

.root{

    font-size:10px;
    padding-bottom:10%;

}

`

function PrintedWord(props){

    const back = useRef()
    const root = useRef()
    const word = useRef()
    return(

        <PrintedWordCss ref = {back} onClick={()=>{
            if(props.word!==""){
                props.setPrev([props.word,props.root])
            }
        }}
        
        onMouseOver={()=>{
            
            back.current.style.background="#3CAEFF"
            root.current.style.color="#ffffff"
            word.current.style.color="#ffffff"
        }}
        
        onMouseLeave={()=>{

            back.current.style.background="#ffffff"
            root.current.style.color="#000000"
            word.current.style.color="#000000"

        }}>
            <p className="root" ref={root}>{props.root}</p>
            <p className="word" ref={word}>{props.word}</p>
            
        </PrintedWordCss>

    )
}


const NodeCss = styled.div`
  overflow:hidden;
  width:28%;
  border: 1px solid #000000;
  border-radius: 12px;
  margin:1% 1.5%;

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

      .r{
            font-size:10px;
            padding-bottom:10%;
        }

    }
    
    .container1{

      text-align:center;
      flex-direction:column;
      padding: 2vh 0 ;
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
        <div className="container1" onClick={()=>{menu.current.style.transform="translate(-50%)"}}>
            <p className="r">{props.root}</p>
            <p className="w">{props.word}</p>
        </div>
        <div className="container2">
        
          <p className="cancle" 
          onClick={()=>{
            menu.current.style.transform="translate(0%)"
            props.setClick("단어를 선택해주세요")
          }}>취소</p>

          <p className="add" 
          onClick={()=>{
            props.setClick(props.word)
            menu.current.style.transform="translate(0%)"
            props.setMenu(true)
          }}>선택</p>
        
        </div>
      </div>
    </NodeCss>
  )
}


const BrainStormingCss = styled.div `

width:100vw;
height:92vh;
background:rgba(0,0,0,0.1);
display:flex;

.word_select{
    transition:0.3s;
    width:46vw;
    height:80vh;
    background:#ffffff;
    margin: 6vh 2vw;
    border-radius:12px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    border-radius:12px;
}

.menu{

    width:46vw;
    height:80vh;
    background:#ffffff;
    margin: 6vh 2vw;
    border-radius:12px;

    .title{

        width:100%;
        height:10%;
        display:flex;

        p{
            width:50%;
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            transition:.5s;
        }

        .word{
            color:${props=>props.menu?"#00000077":"#000000"};
            border-bottom:1.5px solid ${props=>props.menu?"#00000077":"#000000"};
        }

        .tool{
            color: ${props=>props.menu?"#000000":"#00000077"};
            border-bottom:1.5px solid ${props=>props.menu?"#000000":"#00000077"};;
        }

    }

    .slider{

        overflow:hidden;
    }


    .container{

        width:200%;
        height:90%;
        display:flex;
        overflow:hidden;
        transform: translate(${props=>props.menu?-50:0}%);
        transition:0.5s;
        
        .word_container{

            width:100%;
            overflow-x:hidden;
            overflow-y:scroll;
            height:70vh;
        }

        .words{
            
            margin: 2% 2%;
            width:96%;
            display:flex;
            flex-wrap:wrap;

        }   

        .tools{

            margin: 2% 2%;
            width:96%;
            height:96%;

            .select{

                width:100%;
                display:flex;
                align-items:center;
                justify-content:center;

                span{
                    
                    background:rgba(0,0,0,0.1);
                    border-radius:12px;
                    padding: 5% 5%;
                    max-width:60%;
                    min-width:40%;
                    word-break:break-all;
                    text-align:center;
                }
            }

            .next{

                width:80%;
                height:8vh;
                margin: 70% 10% 0 10%;
                background:skyblue;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#ffffff;
                border-radius:12px;
                .icon{

                    height:5vh;

                }
            }
        }

    }

}

`



function BrainStorming(){

    let json_data = {
        개: ["리트리버", "푸들", "시츄", "말티즈", "웰시코기", "고양이"],
        고양이: ["브리티시 숏헤어", "러시안 블루", "페르시안"],
        리트리버: ["갈색", "대형견", "사냥"],
        푸들:["대형견","흰색", "곱슬", "영국","말티푸"],
        시츄:["소형견","똑똑함","조용함","갈색","흰색"]
    };
    const location = useLocation()
    const enter  = useRef (false)
    const word = useRef([])
    const [menu,setMenu] = useState(false)
    const [prev,setPrev] = useState(-1)
    const [select,setSelect] = useState([])
    const [print,setPrint] = useState([])
    const [click,setClick] = useState("단어를 선택해주세요")

    const renew_print_all=()=>{
        let buf=[]
        for(let i =0;i<16;i++){

            if(buf.length<word.current.length){
                
                while (true){
                    const rand= Math.floor(Math.random() * word.current.length);
                    let flag = false;
                    for(let j=0;j<buf.length;j++ ){

                        if(buf[j][0]===word.current[rand][0]&&buf[j][1]===word.current[rand][1]){
                            flag=true
                            break;
                        }
                    }

                    if(!flag){
                        buf.push(word.current[rand])
                        break
                    }

                }
            }


            else{
                buf.push([-1,-1])
            }

        }

        setPrint(buf)
    }

    const renew_word=()=>{

        let done= false
        let word_buf=[...word.current]
        let print_buf = [...print]

        for ( let i=0 ; i<print_buf.length; i++){

            if( prev[0] === print_buf[i][0] && prev[1] === print_buf[i][1])
                print_buf.splice(i,1)

            if(print_buf[i][0]===-1){
                print_buf = print_buf.splice(0,i)
                break
            }
        }

        for ( let i=0 ; i<word_buf.length; i++){

            if(prev[0] === word_buf[i][0]&&prev[1] === word_buf[i][1]){

                word_buf.splice(i,1)
                
                if(json_data[prev[0]]!==undefined){
                    let tmp=[]
                    for(let j =0;j<json_data[prev[0]].length;j++){

                        tmp.push([json_data[prev[0]][j],prev[0]])

                    }
                    word_buf = [...word_buf,...tmp]

                }
                break;  
            }

        }

        const len = 16-print_buf.length

        for(let i =0; i<len ;){

            if(print_buf.length<word_buf.length){

                while (true){

                    const rand= Math.floor(Math.random() *word_buf.length);
                    let flag = false;   
                    for(let j=0;j<print_buf.length; j++ ){
                        if(print_buf[j][0]===word_buf[rand][0] && print_buf[j][1]===word_buf[rand][1]){
                            flag=true
                            break;
                        }
                    }
        
                    if(!flag){
                        print_buf.push(word_buf[rand])
                        i++
                        break
                    }
        
                }
            }

            else{

                print_buf.push([-1,-1])
                i++

            }

            if(i===len-1)
                done=true    
        }

        if(done)
            setPrint([...print_buf])

        word.current=[...word_buf]
    }

    useEffect(()=>{
        const  root = decodeURI(location.search.split("root=")[1])
        setSelect([[root,-1]])
        let buf = []
        for(let i =0 ; i<json_data[root].length;i++){

            buf.push([json_data[root][i],root])

        }
        word.current=[...buf]
        if(word.length!==0)
          renew_print_all()

    },[])

    

    useEffect(()=>{
    
    
        if(enter.current){

            setSelect([...select,prev])
            renew_word()

        }

        else{
            enter.current = true
        }

    },[prev])

    return(
        <BrainStormingCss menu={menu}>
            <div className="word_select" >
                {

                    print.map((e,idx)=>{
                        
                        return(
                            <PrintedWord word={e[0]!==-1?e[0]:""} setPrev={setPrev} key={idx} root={e[1]!==-1?e[1]:""}/>
                        )
                    })

                }
            </div>
            <div className="menu">
                <div className="title">
                    <p className="word" onClick={()=>setMenu(false)}>단어</p>
                    <p className="tool" onClick={()=>setMenu(true)}>도구</p>
                </div>
                <div className="slider" >
                    <div className="container">

                        <div className="word_container">
                            <div className="words">

                                {
                                    
                                    select.map((e,idx)=>{

                                        return(<Node word={e[0]} root={e[1]===-1?"시작단어":e[1]} setMenu={setMenu} key={idx}  setClick={setClick} />)

                                    })
                                }
                            </div>
                        </div>
                    
                        <div className="tools">
                           
                            <div className="select">
                                <span>    
                                {click}
                                </span>
                            </div>

                            <Link to="/NodeSelect" className="next">
                                
                                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="icon" /> 
                            
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </BrainStormingCss>
    )

}


export default BrainStorming