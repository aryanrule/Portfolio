import React, { useState } from 'react'
import data from '../Storage/data'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [toggle  , setToggle] = useState(false);
  
  function togglehandler () {
    setToggle(!toggle);   //if true then false if not then true 
  }

  return (
    <nav className = 'flex h-[110px] w-[100vw]  justify-between  items-center    overflow-hidden'>
         
             <div className=' overflow-hidden'>
             <img 
             className='cursor-pointer'
              src={data.logo} height={250} width={250}  />
             </div>

              <div className='hidden lg:flex  items-center justify-center '>
                  <ul className='flex font-semibold gap-2 m-[40px]'>
                    <p className="text-lg m-6 group relative w-max">
                        <span className='cursor-pointer'>
                           Home
                        </span>
                        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                    </p>

                    <p className="text-lg m-6 group relative w-max">
                        <span className='cursor-pointer'>
                            <Link to='about' smooth={true} duration={1000}>About</Link>
                        </span>
                        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                    </p>
                    <p className="text-lg m-6 group relative w-max">
                        <span className='cursor-pointer'>Skills</span>
                        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                    </p>
                    <p className="text-lg m-6 group relative w-max">
                        <span className='cursor-pointer'>Qualifications</span>
                        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                    </p>
                    <p className="text-lg m-6 group relative w-max">
                        <span className='cursor-pointer'>Contact</span>
                        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-sky group-hover:w-3/6"></span>
                    </p>
                    
                  </ul>
              </div>

              <div className='hidden  lg:flex flex-row m-[20px]  items-center justify-center  gap-2 overflow-hidden'>
                 <button className='font-bold text-[20px] h-[40px] w-[100px] border-2  bg-sky  text-white rounded-2xl'>Blogs </button>
                 <img className='w-[20px] mr-[20px] ' src={data.blogger}/>
              </div>

{/* 
              <div className=' lg:hidden h-[50px] w-[50px] flex items-center justify-center'>
                   <button onClick={togglehandler}><img src={data.menu}/></button>
              </div> */}

             
    </nav>
  )
}

export default Navbar

