import React from 'react'
import bg from '../assets/dontmiss.png'
import { Link } from 'react-router-dom';

const DontMiss = () => {
  return (
    <div className='container mx-auto flex my-20 justify-center pt-20'>
        <div className='flex relative'>
            <img className='' src={bg} alt="image" srcset="" />
            <div className='flex flex-col justify-evenly text-center '>
                <div className='absolute left-16 right-5  '>
                    <h1 className=' text-white text-4xl font-bold pb-16 leading-relaxed '>Не упустите скидку 50%, <br /> если  зарегистрируетесь сегодня</h1>
                    
                        <Link
                        to="/register"
                        className="bg-[#C6D2CD] text-[#070908] font-bold  px-8 py-6 rounded hover:bg-[#769386] hover:text-white transition duration-300 ease-in-out"
                        >
                            Регистрация
                        </Link>  
                </div>   
            </div>
        </div>
    </div>
  )
}

export default DontMiss
