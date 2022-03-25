import React from 'react';
import './App.css';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import {  Routes , Route  } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import CivilService from './Components/Services/CivilService';
import ProjectService from './Components/Services/ProjectService';
import Dance from './Components/Services/Dance';
import HDService from './Components/Services/HDService';
import Editing from './Components/Services/Editing';
import Menporul from './Components/Services/Menporul';
import Insuvai from './Components/Services/Insuvai';


function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Routes>
       
        <Route  index element={<Home />} />
        <Route  path="about" element={<About />} />
        <Route  path="Services" element={<Services />} />
        <Route  path="contact" element={<Contact />} />
        <Route path="classyconstruction" element={<CivilService />} />
        <Route path="project_box" element={<ProjectService />} />
        <Route path="The_Dance_Entity" element={<Dance />} />
        <Route path="H&D_Horizons" element={<HDService />} />
        <Route path="UV_Editing" element={<Editing />} />
        <Route path="insuvai" element={<Insuvai />} />
        <Route path="Magicmenporul_softwaresolutions" element={<Menporul />} />
        
        
      </Routes>

    </div>
  );
}

export default App;
