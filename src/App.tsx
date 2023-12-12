import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from "./view/comman/navbar/Navbar";
import {BrowserRouter, Routes} from "react-router-dom";
import {NaveBar} from "./view/comman/navbar/NaveBar";
import {MainContent} from "./view/comman/MainContent/MainContent";

function App() {
  return (
    <div className="App">

     <BrowserRouter>
         <NaveBar/>
         <MainContent/>
     </BrowserRouter>




    </div>
  );
}

export default App;
