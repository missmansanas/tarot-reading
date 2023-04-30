import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";

import About from "./About";
import ThreeCards from './ThreeCards';
import DailyCard from './DailyCard';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';


function App() {

  return (
    <HashRouter>
      <div className="App">
        <h1 className="display-4 displayfont text-center mt-5 mb-3">Tarot Reading</h1>
        <Container className="d-flex flex-row gap-3 mt-0 pt-0 mb-5 m-auto nav justify-content-center">
          <NavLink to='/'>Card of the Day</NavLink>
          <NavLink to='/three-card'>Three-Card Spread</NavLink>
          <NavLink to='/about'>About</NavLink>
        </Container>

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
