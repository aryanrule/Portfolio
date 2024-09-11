import React from 'react'
import Navbar from '../components/Navbar'

// import data from './Storage/data';
// import TypingAnimation from './components/TypingAnimation';
import data from '../Storage/data'
import TypingAnimation from '../components/TypingAnimation';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div className='max-h-auto  w-[100vw] overflow-y-hidden'>
        <Navbar/>
        

        <div className='flex flex-col lg:flex-row items-center justify-center m-[20px] gap-[30px] overflow-y-hidden '>
            <div className='flex flex-row lg:flex-col  gap-7 mr-10'>
              <a href='https://github.com/aryanrule'><img src={data.github} alt="GitHub" className="h-[30px] w-[30px] cursor-pointer" /></a>
              <a href=''><img src={data.linkedin} alt="LinkedIn" className="h-[30px] w-[30px] cursor-pointer" /></a>
              <a><img src={data.twitter} alt="Twitter" className="h-[30px] w-[30px] cursor-pointer" /></a>
              <a><img src={data.gmail} alt="Gmail" className="h-[30px] w-[30px] cursor-pointer" /></a>
            </div>
            
            <div className='m-[20px]'>
                <h1 className=' font-bold text-[48px]'>Hey ! I Am Aryan</h1>
                <TypingAnimation/>
                <div className='flex'>
                    <h1 className=' font-medium'>You name it, I'll build it !</h1>
                    <img className='h-[30px] w-[30px]' src={data.coding}/>
                </div>

            </div>

            <div className=' m-4'>
                <img  className=' rounded-lg h-[300px] w-[400px]' src={data.aryanimage5}/>
            </div>
        </div>


        <div>
           <Link to='about' smooth={true} duration={1000} className='h-[50px] w-[50px] cursor-pointer flex m-[70px]'>
           <img  className='' src={data.mouse}/>
           <button className='font-bold text-[20px] h-[40px] w-[120px] border-2 p-[4px] bg-sky  text-white rounded-2xl'>scroll</button>
           </Link>
          
        </div>
    </div>
  )
}



export default Home ;