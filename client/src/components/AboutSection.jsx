import React from 'react';
import bg from '../assets/AboutImage.png';
const AboutSection = () => {
    return (
        <div className="flex justify-around mt-[80px]">
            <div>
                <div className="flex justify-around">
                    <div>
                        <img src={bg} alt="2" srcset="" />
                    </div>
                    <div>
                        <div className="text-center p-3 w-[180px] h-[120] mt-[56px]">
                            <h1 className="text-sky-600 font-bold">300+</h1>
                            <p>НАПРАВЛЕНИЙ</p>
                        </div>
                        <div className="text-center p-3 w-[180px] h-[120] mt-[200px]">
                            <h1 className="text-sky-600 font-bold">5000+</h1>
                            <p>ТУРОВ</p>
                        </div>
                        <div className="text-center p-3 w-[180px] h-[120] mt-[200px]">
                            <h1 className="text-sky-600 font-bold">150+</h1>
                            <p>ОТЕЛЕЙ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="mt-[100px]">
                    <h1 className="font-bold">
                        Travel Any Corner of <br />
                        The World With Us
                    </h1>
                    <p>
                        Would you explore nature paradise in the world, let’s find <br />
                        the best destination in world with us, Would you explore <br />
                        nature paradise in the world, let’s find the best destination <br />
                        in world with us. Would you explore nature paradise in the <br />
                        world, let’s find the best destination in world with us. <br />
                        <br />
                        Would you explore nature paradise in the world, let’s find <br />
                        the best destination in world with us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
