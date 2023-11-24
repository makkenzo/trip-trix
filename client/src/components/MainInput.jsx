import React, { useEffect, useState } from 'react';
import { FaPlane, FaCalendarDays } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';
import { Datepicker } from 'flowbite-react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import AppService from '../utils/api';
import { Label, Select } from 'flowbite-react';

const MainInput = () => {
    const [cities, setCities] = useState([]);

    const [departureCity, setDepartureCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [departureDate, setDepartureDate] = useState(null);
    const [arrivalDate, setArrivalDate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await AppService.getCities().then((res) => {
                setCities(res.data);
            });
        };

        fetchData();
    }, []);

    const defaultDepartureCity = cities.length > 0 ? cities[0].city : '';
    const defaultDestinationCity = cities.length > 1 ? cities[1].city : '';

    const handleSearch = () => {
        const requestData = {
            departureCity: departureCity !== '' ? departureCity : defaultDepartureCity,
            destinationCity: destinationCity !== '' ? destinationCity : defaultDestinationCity,
            departureDate,
            arrivalDate,
        };

        console.log(requestData);
    };

    return (
        <div className="container mx-auto flex justify-center mt-16 space-x-4">
            <div className="bg-white flex flex-col p-8 rounded-xl sadow-xl space-y-8">
                <div className="flex items-center space-x-4">
                    <Typography variant="h4">Найти туры</Typography>
                    <MdOutlineTravelExplore size={30} color="#757575" />
                </div>
                <div className="flex space-x-4">
                    {cities && (
                        <div className="border border-gray-500 p-4 flex items-center rounded-2xl space-x-4">
                            <div>
                                <p className="text-gray-600 mb-2">Город вылета</p>
                                <Select
                                    id="departure-city"
                                    value={departureCity || defaultDepartureCity}
                                    onChange={(value) => setDepartureCity(value.target.value)}
                                    className="font-bold"
                                >
                                    {cities.map((item, index) => (
                                        <option className="font-bold">{item.city}</option>
                                    ))}
                                </Select>
                            </div>
                            <div className="border p-2 border-black border-dashed rounded-full">
                                <FaPlane size={20} color="#757575" />
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">Страна прилета</p>
                                <Select
                                    id="destination-city"
                                    value={destinationCity || defaultDestinationCity}
                                    onChange={(value) => setDestinationCity(value.target.value)}
                                    className="font-bold"
                                >
                                    {cities.map((item, index) => (
                                        <option className="font-bold">{item.city}</option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    )}

                    <div className="border border-gray-500 p-4 flex items-center rounded-2xl space-x-4">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-gray-600 ">Дата вылета</p>
                                <FaPlane size={20} color="#769386" />
                            </div>
                            <Datepicker
                                language="ru-RU"
                                minDate={new Date()}
                                onChange={(date) => setDepartureDate(date)}
                            />
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

                    <button
                        onClick={handleSearch}
                        className="bg-[#C6D2CD] text-[#070908] px-[40px] py-4 rounded-2xl hover:bg-[#769386] hover:text-white transition duration-300 ease-in-out"
                    >
                        <FaSearch size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainInput;
