import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


// componets

import Home from './page/Home'

import Destinations from './Layout/Destinations'
import Moon from './page/destino/Moon';
import Mars from './page/destino/Mars';
import Europa from './page/destino/Europa';
import Titan from './page/destino/Titan';

import Crew from './Layout/Crew'
import Comander from './page/crew/Comander';
import Mark from './page/crew/Mark';
import Victor from './page/crew/Victor';
import Anousheh from './page/crew/Anousheh';


import Technology from './Layout/Technology';
import Vehicule from './page/technology/Vehicule';
import SpacePort from './page/technology/SpacePort';
import SpaceCapsule from './page/technology/SpaceCapsule';

import NotFound from './page/NotFound';


function App() {
  
  return (
   
   <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Home />} />
      </Route>
   
      <Route path="/destinations" element={<Destinations />} >
       
          <Route index element={<Moon />} />
          <Route path='mars' element={<Mars />} />
          <Route path='mars' element={<Mars />} />
          <Route path='europa' element={<Europa />} />
          <Route path='titan' element={<Titan />} />
      </Route>
       <Route path="/crew" element={ <Crew />} >

          <Route index element={<Comander />} />
          <Route path='mark-shuttleworth' element={<Mark />} />
          <Route path='victor-glover' element={<Victor/>} />
          <Route path='anousheh-ansari' element={<Anousheh />} />
          
      </Route>
      <Route path="/technology" element={<Technology />} >

        <Route index element={<Vehicule/>} />
        <Route path='space-port' element={<SpacePort />} />
        <Route path='space-capsule' element={<SpaceCapsule/>} />
      </Route> 
    </Routes>

    {/* <Route path="/:error" element={<NotFound />}  >
      <Route index element={<NotFound />} />
    </Route> */}
   </BrowserRouter>
  );
}

export default App;
