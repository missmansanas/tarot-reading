import "./App.css";
import { useState, useEffect } from 'react';
import About from "./components/About";
// import ThreeCards from './components/ThreeCards';
// import DailyCard from './components/DailyCard';
import Readings from './components/Readings';
import TarotCard from './components/TarotCard';
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';


function App() {

  return (

    <div className="App min-h-screen border-box flex flex-col justify-center bg-gradient-to-br from-stone-100 via-purple-100 to-purple-200 bg-fixed text-zinc">
      <BrowserRouter basename='/tarot-reading'>
          <Routes>
            <Route index element={<Readings/>} />
            <Route path='/about' element={<About/> } />
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
