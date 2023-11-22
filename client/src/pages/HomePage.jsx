import React from 'react';
import Nav from '../components/Nav';
import bg from '../assets/bg2.png';
import AboutSection from '../components/AboutSection';
import RecomendedSection from '../components/RecomendedSection';
import DontMiss from '../components/DontMiss';
import MainInput from '../components/MainInput';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <div className="w-full bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <Nav />

                <div className="text-[#ffffff]">
                    <h1 className="flex justify-center text-center text-7xl font-semibold mt-48">
                        Освой свой внутренний мир,
                        <br />
                        путешествуя по внешнему
                    </h1>
                    <p className="text-4xl flex justify-center text-center mt-12 pb-72">
                        Ваше приключение начинается с нами.
                    </p>
                </div>
            </div>
            <MainInput />
            <AboutSection />
            <RecomendedSection />
            <DontMiss/>
            <Footer/>
        </>
    );
};

export default HomePage;
