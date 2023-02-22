import React from "react";
import logo from "./images/howai_logo.jpg";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Play from "./components/Play";
import Mind from "./components/MindMap/Mind";
import WordSelect from "./components/WordSelect";

/* icon */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faUser,
  faPlay,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faUser, faPlay, faRightFromBracket);

/* App CSS */
const AppCSS = styled.div`
  width: 428px;
  height: 926px;
  margin: 0 auto;

  .App-logo {
    display: block;
    margin: 15px auto 0px auto;
    width: 235px;
    height: 85px;
  }
`;
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppCSS>
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
        </Routes>
      </AppCSS>
    </BrowserRouter>
  );
}

export default App;
