import "./App.css";

import About from "./About";
import ThreeCards from './ThreeCards';
import DailyCard from './DailyCard';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter basename='/tarot-reading'>
      <div className="App">
        <h1 className="text-6xl displayfont text-center mt-5 mb-3">Tarot Reading</h1>
        <div className="container flex flex-row gap-1 mt-0 pt-0 mb-5 m-auto justify-center items-center">

          <NavLink to='/'
            className={({ isActive}) =>
              isActive ? "transition border border-black  border-x-0 border-y-1 rounded rounded-md duration-300 px-5 py-2" : "px-10 py-2" }            
            >Card of the Day</NavLink>
          <NavLink to='/three-card'
            className={({ isActive}) =>
             isActive ? "transition border border-x-0 border-y-1 border-black rounded rounded-md duration-300 px-5 py-2" : "px-10 py-2" }
            >Three-Card Spread</NavLink>
              {/* <NavLink to='/about'>About</NavLink> */}
        </div>

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
