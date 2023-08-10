import "./App.css";

import About from "./About";
import ThreeCards from './ThreeCards';
import DailyCard from './DailyCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';


function App() {

  return (
    <BrowserRouter basename='/tarot-reading'>
      <Nav/>
      <div className="App">
        <Routes>
          <Route index element={<DailyCard/>} />
          <Route path='/three-card' element={<ThreeCards/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
