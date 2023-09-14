import React from 'react';
import Nav from '../components/Nav';
import bg from '../assets/bg.png';

const HomePage = () => {
    return (
        <>
        <div className="w-full bg-cover bg-center" style={{backgroundImage:`url(${bg})`}}>
            <Nav />
            
            <div className='text-[#ffffff]'>
                <h1 className=" flex justify-center text-center text-6xl mt-48">
                    Откройте Для Себя Свою Жизнь,<br /> 
                    Путешествуйте  Куда Хотите</h1>
                <p className='text-2xl flex justify-center text-center mt-6 pb-72'>
                    Хотите ли вы исследовать природный рай в мире, давайте вместе с нами <br />
                    найдем лучшее место в мире.</p>
            </div>
        </div>
           
        </>
    );
};

export default HomePage;
