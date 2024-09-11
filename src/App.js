
import React from 'react';
import InitialLoading from './components/InitialLoader';
import Home from './Pages/Home';
import About from './Pages/About';
import { Link } from 'react-scroll';
import Skills from './Pages/Skills';
import Qualification from './Pages/Qualification';

const App = () => {
  return (
    <div className='overflow-x-auto overflow-y-hidden'>
        <InitialLoading/>
        
        <Home/>
        
         <div id='about'>
          <About/>
         </div> 

         <div id='qualifications'>
          <Qualification/>
         </div>
         
         
        {/* <Skills/> */}
    </div>
  )
}

export default App;
 