import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Header, Home } from './components/pages/Homepage';
import { Error } from './components/pages/ErrorPage';
import { Info, FilterPage } from './components/pages/Filter';
import { Signup } from './components/pages/Forms';
import { Explore } from './components/pages/ProductPage';
import './stylesheet/Style.css';


const App =()=> {
  return (
    <div className="App bg-light">
    
    
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/filter" element={<FilterPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    

      {/* <Header/> */}
    </div>
  );
}

export default App;
