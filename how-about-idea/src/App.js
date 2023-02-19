
import React from 'react'
import logo from './images/howai_logo.jpg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Play from './components/Play';
import Mind from './components/MindMap/Mind';
import WordSelect from './components/WordSelect';
/* icon */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faUser, faPlay, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faUser, faPlay, faRightFromBracket);

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/mind" element={<Mind />} />
          <Route path='/wordslect' element={<WordSelect/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
