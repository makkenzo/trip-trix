import React from 'react';
import { FaPlane, FaCalendarDays } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { Select, Option } from '@material-tailwind/react';
import { Datepicker } from 'flowbite-react';

const MainInput = () => {
    return (
        <div className="container mx-auto flex justify-center mt-16 space-x-4">
            <div className="border border-gray-500 p-4 flex items-center rounded-2xl space-x-4">
                <div>
                    <p className="text-gray-600 mb-2">Город вылета</p>
                    <Select label="Откуда" className="font-bold">
                        <Option className="font-bold">Material Tailwind HTML</Option>
                        <Option className="font-bold">Material Tailwind React</Option>
                        <Option className="font-bold">Material Tailwind Vue</Option>
                        <Option className="font-bold">Material Tailwind Angular</Option>
                        <Option className="font-bold">Material Tailwind Svelte</Option>
                    </Select>
                </div>
                <div className="border p-2 border-black border-dashed rounded-full">
                    <FaPlane size={20} color="#757575" />
                </div>
                <div>
                    <p className="text-gray-600 mb-2">Страна прилета</p>
                    <Select label="Куда" className="font-bold">
                        <Option className="font-bold">Material Tailwind HTML</Option>
                        <Option className="font-bold">Material Tailwind React</Option>
                        <Option className="font-bold">Material Tailwind Vue</Option>
                        <Option className="font-bold">Material Tailwind Angular</Option>
                        <Option className="font-bold">Material Tailwind Svelte</Option>
                    </Select>
                </div>
            </div>

            <div className="border border-gray-500 p-4 flex items-center rounded-2xl space-x-4">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600 ">Дата вылета</p>
                        <FaPlane size={20} color="#769386" />
                    </div>
                    <Datepicker language="ru-RU" minDate={new Date()} />
                </div>
                <div className="border p-2 border-black border-dashed rounded-full">
                    <FaCalendarDays size={20} color="#757575" />
                </div>
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-600 ">Дата прилета</p>
                        <FaPlane size={20} color="#769386" style={{ transform: 'rotate(180deg)' }} />
                    </div>
                    <Datepicker language="ru-RU" minDate={new Date()} />
                </div>
            </div>

            <button className="bg-[#C6D2CD] text-[#070908] px-8 pt-2 pb-3 rounded-full hover:bg-[#769386] hover:text-white transition duration-300 ease-in-out">
                <FaSearch size={30} />
            </button>
        </div>
    );
};

export default MainInput;
