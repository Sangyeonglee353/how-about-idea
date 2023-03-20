import React, { useEffect, useState } from "react";
import logo from "./images/howai_logo.jpg";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faUser, faPlay, faRightFromBracket, faArrowRotateRight);

/* App CSS */
const AppCSS = styled.div`
  width: 428px;
  height: 926px;
  margin: 0 auto;
  @media screen and (max-width: 400px) {
    width: 100vw;
    height: 100vh;
  }

  .App-logo {
    display: block;
    margin: 15px auto 15px auto;
    width: 235px;
    height: ${(props) => props.vh - 85}px;
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppCSS vh={size / 100}>
        <header className="App-header">
          <Link to={"/"}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
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
      </AppCSS>
    </BrowserRouter>
  );
}

export default App;