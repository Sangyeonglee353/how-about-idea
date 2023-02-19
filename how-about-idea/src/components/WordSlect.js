import React from 'react'
import { useEffect , useRef, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Cvs = styled.canvas`

margin:0;
width:90%;
height:350px;
margin: 1vh 5%;
background:#ffffff;
border-radius:12px;
`
const Appcss = styled.div`

width:100%;
overflow:hidden;
background:	#f5f7fa;
height:100vh;
.screen{
  
  width:90%;
  height:${props=>props.vh*100-500}px;
  border-radius:12px 12px 0 0;
  overflow:hidden;
  background:#ffffff;
  margin:0 5%;
  border-radius:12px;

  .title{
    margin:0;
    padding: 1vh 0;
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    font-size:24px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .words{

    display:flex;
    transform:translate(0vw);
    .word{
      padding:2% 4%;
      margin:0;
      width:100vw;
      display:flex;
      flex-wrap:wrap;
      justify-content:left;
      overflow-y:auto;
      .node{
        display:flex;
        margin:1% 1.5%;
        padding:1vh 1vw;
        width:auto;
        align-items:center;
        justify-content:center;
        background: #ffffff;
        border: 2px solid skyblue;
        border-radius:12px;
        font-size:16px;
        \
      }
    }
  }



}

`
function WordSlect() {
  const cvs = useRef('')
  const w = useRef('')
  let list = ["개","고양이","말","소","염소", "돼지", "닭","토끼", "원숭이","판다"]

  let slect = []
  const [size,setSize] = useState(window.innerHeight<600?window.screen.availHeight:window.innerHeight)
  const [slected,setSlect] = useState([])

  class word {


    constructor(){
      
      this.ctx =document.getElementsByTagName("canvas").item(0)
      this.x = this.ctx.width;
      this.y=Math.floor(Math.random()*( Math.floor(this.ctx.height/100)-1) )*100+100;
      this.text=list[Math.floor(Math.random()*list.length)]
      this.color=this.random_color()
    }

    random_color(){
      
      
      let buf=["#FF8C00","#E9967A","#00CED1","#696969","#90EE90","#FF4500","#DB7093","#FA8072","#F4A460","#D8BFD8","#90EE90"]
      
      return buf[Math.floor(Math.random()*buf.length)]
    }

    draw(){
      let ctx = document.getElementsByTagName("canvas").item(0).getContext("2d")
      ctx.font = "24px serif";
      ctx.fillStyle =this.color
      ctx.fillText(this.text,this.x,this.y)
    }
  
  
  }

  let timer = 0;
  let words = []
  let animation
  
  function frameAnimation(){
    let ctx = document.getElementsByTagName("canvas").item(0).getContext("2d")
    animation = requestAnimationFrame(frameAnimation)
    timer++
    ctx.clearRect(0,0,cvs.current.width,cvs.current.height)
    
    if(timer%100===0){
      let w = new word();
      words.push(w)

    }

    words.forEach((e,idx,arr) => {
      if(e.x<0){
        
        arr.splice(idx,1)
      }

      for(let i =0; i<slect.length;i++){

        if(slect[i]===e.text){
          arr.splice(idx,1)
          break
        }
      }

      e.x-=1.5
      e.draw()

    });
    
  }

  useEffect(()=>{
    setTimeout( ()=>{frameAnimation()},100)
    window.addEventListener('resize',()=>{
      setSize(window.innerHeight<600?window.screen.availHeight:window.innerHeight)
    })
  },[])

  return (
    <Appcss vh={size/100}>

    <Cvs ref={cvs}  width={350}  height={350} onClick={(e)=>{

      const x = e.clientX
      const y = e.clientY
      let min=0;
      let click_word
      let idx;
      for(let i =0;i<words.length ;i++){

        let gap = (x-words[i].x)*(x-words[i].x)+(y-words[i].y)*(y-words[i].y)
        if(i===0){
          min = gap
          click_word = words[i].text
          idx=i
        }
        else{

          if(min>gap){
            min = gap
            click_word = words[i].text
            idx=i
          }
        }
        
      }
      if(click_word!==undefined){
        list.splice(idx,1)
        slect.push(click_word)
        let element =  document.createElement( 'p' );
        element.className="node"
        let element_text = document.createTextNode(click_word);
        element.appendChild(element_text)
        w.current.appendChild(element)
      }

    }}>
        
    </Cvs>
    <div className="screen" onClick={()=>{console.log(slect,slected)}}>
      <p className='title'>brain storming results</p>
      <div className="words" >
        <div className="word" ref={w}>


        </div>
      </div>

    </div>
    </Appcss>
  

  );
  
}

export default WordSlect;
