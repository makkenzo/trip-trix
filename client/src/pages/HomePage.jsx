import React from 'react';
import Nav from '../components/Nav';
import bg from '../assets/bg1.png';

const HomePage = () => {
    return (
        <>
            <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
                <Nav />

                <div className="text-[#ffffff]">
                    <h1 className=" flex justify-center text-center text-6xl mt-48">
                        Освой свой внутренний мир,
                        <br />
                        путешествуя по внешнему
                    </h1>
                    <p className="text-2xl flex justify-center text-center mt-6 pb-72">
                        Ваше приключение начинается с нами.
                    </p>
                </div>
            </div>
        </>
    );
};

export default HomePage;
