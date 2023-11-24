import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import defa from '../assets/default_pfp.jpg'
import { CiEdit } from "react-icons/ci";

const ProfilePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            navigate('/auth');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/');
    };

    return (
        <div >
            <div className='bg-black'>
                <Nav/>
            </div>
            
            <div className='container mx-auto flex  flex-col items-center mt-10 '>
                <ul className='flex - flex-col items-center space-y-5'>
                    <li className='flex'>
                        <img src={defa} className='w-[250px] h-[250px]' alt="image" srcset=""/>
                        <a href="#" className='absolute ml-[230px]'>
                            <CiEdit />
                        </a>
                        
                    </li>
                    <li>
                        <h1 className='text-2xl  '>Сигменко Сигма Сигмович</h1>
                    </li>
                </ul>
            </div>


         {/* <button onClick={handleLogout}>logout</button>; */}

        </div>
    ) 

};

export default ProfilePage;
