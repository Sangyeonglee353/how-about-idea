import React, { useEffect, useState } from "react";
import logo from "./images/howai_logo.jpg";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link , useNavigate} from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Play from "./components/Play";
// import GoMind from "./components/MindMap/GoMind";
import Mind from "./components/MindMap/Mind";
import WordSelect from "./components/WordSelect";
import NodeSelect from "./components/NodeSelect";
import TrizSelect from "./components/TrizSelect";
import PatentAnalysis from "./components/PatentAnalysis";
import PatentResult from "./components/PatentResult";
/* icon */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faUser,
  faPlay,
  faRightFromBracket,
  faArrowRotateRight,
  faAngleLeft,
  fas
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  fas,
  faHouse,
  faUser,
  faPlay,
  faRightFromBracket,
  faArrowRotateRight,
  faAngleLeft
);

/* App CSS */
const AppCSS = styled.div`
  width: 100vw;
  height: 100vh;
  overflow:hidden;

  *{
    font-family: 'Quicksand', sans-serif;
  }
  
`;

function App() {
  const [size, setSize] = useState(
    window.innerHeight < 600 ? window.screen.availHeight : window.innerHeight
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(
        window.innerHeight < 600
          ? window.screen.availHeight
          : window.innerHeight
      );
    });
  }, []);

  return (
    <AppCSS vh={size / 100}>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" ></link>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet"></link>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/play" element={<Play />} />
            <Route path="/mind" element={<Mind />} />
            <Route path="/wordslect" element={<WordSelect />} />
            <Route path="/nodeselect" element={<NodeSelect />} />
            <Route path="/trizselect" element={<TrizSelect />} />
            <Route path="/patentanalysis" element={<PatentAnalysis />} />
            <Route path="/patentresult" element={<PatentResult />} />
          </Routes>
      </BrowserRouter>
    </AppCSS>
  );
}

export default App;
