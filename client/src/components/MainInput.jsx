import React from 'react';
import { FaPlane } from 'react-icons/fa6';
import { Select, Option } from '@material-tailwind/react';

const MainInput = () => {
    return (
        <div className="container mx-auto">
            <div>
                <p>Город вылета:</p>
                <Select color="blue" label="Select Version">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                </Select>
            </div>
            <FaPlane />
        </div>
    );
};

export default MainInput;
