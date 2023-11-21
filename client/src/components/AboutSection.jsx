import React from 'react';
import bg from '../assets/AboutImage.png';

const AboutSection = () => {
    return (
        <div className="container mx-auto flex my-20">
            <div>
                <div className="flex">
                    <div className="flex relative">
                        <img src={bg} alt="image" />
                        <div className="flex flex-col justify-evenly">
                            <div className="bg-white w-[180px] absolute -right-16 top-20 py-4 px-8 rounded-3xl text-center shadow-2xl">
                                <h1 className="text-[#769386] font-bold text-3xl">300+</h1>
                                <p>НАПРАВЛЕНИЙ</p>
                            </div>
                            <div className="bg-white absolute -left-16 py-4 px-8 rounded-3xl text-center shadow-2xl">
                                <h1 className="text-[#769386] font-bold text-3xl">5000+</h1>
                                <p>ТУРИСТОВ</p>
                            </div>
                            <div className="bg-white w-[180px] absolute -right-16 bottom-20 py-4 px-8 rounded-3xl text-center shadow-2xl">
                                <h1 className="text-[#769386] font-bold text-3xl">150+</h1>
                                <p>ОТЕЛЕЙ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-24 ml-24">
                    <h1 className="font-bold text-5xl">
                        Путешествуйте с нами <br /> в любой уголок мира
                    </h1>
                    <p className="max-w-4xl my-8 text-3xl text-gray-500 leading-10">
                        Путешествуйте с нами в любой уголок мира, где каждый шаг - это новое открытие, а каждый момент -
                        неповторимое приключение. С нами ваши путешествия станут незабываемыми, наполненными
                        вдохновением и радостью. Добро пожаловать в мир удивительных приключений!
                    </p>
                    <p className="max-w-4xl my-8 text-3xl text-gray-500 leading-10">
                        Не хотите ли вы исследовать райскую природу в мире, давайте найдем лучшее направление в мире
                        вместе с нами.
                    </p>
                    <button className=" bg-[#C6D2CD] text-[#070908] px-8 pt-2 pb-3 rounded hover:bg-[#769386] hover:text-white text-xl transition duration-300 ease-in-out">
                        Свяжитесь с нами
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
