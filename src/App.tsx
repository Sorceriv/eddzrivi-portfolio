import PreLoader from "./components/PreLoader/PreLoader";
import NavBar from "./components/NavBar/NavBar";

import { useState } from "react";

import './App.scss';


function App() {

  return (
    <>
      <PreLoader/>
      <NavBar/>
    </>
    
  )
}

export default App
