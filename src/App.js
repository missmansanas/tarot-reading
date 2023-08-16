import "./App.css";
import About from "./components/About";
import Readings from './components/Readings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';


function App() {

  return (
    
  <BrowserRouter basename='/tarot-reading'>
    <div className="App min-h-screen lg:h-screen border-box flex flex-col bg-gradient-to-br from-stone-100 via-purple-100 to-purple-200 bg-fixed text-zinc selection:bg-purple-300 cursor-cat">
      <Nav/>
      <div className='h-full w-full flex justify-center'>

          <Routes>
            <Route index element={<Readings/>} />
            <Route path='/about' element={<About/> } />
          </Routes>
      </div>
    </div>
  </BrowserRouter>

  );
}

export default App;
