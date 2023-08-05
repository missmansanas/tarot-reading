import "./App.css";

import About from "./About";
import ThreeCards from './ThreeCards';
import DailyCard from './DailyCard';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';


function App() {

  return (
    <HashRouter>
      <div className="App">
        <h1 className="text-6xl displayfont text-center mt-5 mb-3">Tarot Reading</h1>
        <div className="container flex flex-row gap-1 mt-0 pt-0 mb-5 m-auto nav justify-center items-center">
          <NavLink to='/'>Card of the Day</NavLink>
          <NavLink to='/three-card'>Three-Card Spread</NavLink>
          {/* <NavLink to='/about'>About</NavLink> */}
        </div>

        <Routes>
          <Route index element={<DailyCard/>} />
          <Route path='/three-card' element={<ThreeCards/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
