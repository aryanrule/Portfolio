import React, { useEffect, useRef } from 'react';
import './InitialLoader.css';  

const InitialLoader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {

      if (loaderRef.current) {   //the current property is actually used to 
        loaderRef.current.style.top = '-100%';  
      }
    }, 5000);
  }, []);  

  
  
  return (
    <div className='initialLoader ' ref={loaderRef}> 
        
           <h1>स्वागत है .</h1>
           <h1>WELCOME !</h1>
           <h1>أهلاً وسهلاً</h1>
           <h1>欢迎</h1>
           
    </div>
  );
}

export default InitialLoader;
