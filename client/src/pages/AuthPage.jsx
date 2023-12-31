import React, { useState } from 'react';
import AppService from '../utils/api';
import logo from '../assets/trip-trix-logo.png';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loadingButton, setLoadingButton] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoadingButton(true);
        try {
            const response = await AppService.loginUser({ username, password });

            if (response.status === 201) {
                localStorage.setItem('userId', response.data.id);
                navigate('/profile');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingButton(false);
        }
    };

    // if (loggedIn) {
    //     return <Redirect to="/profile" />;
    // }

    return (
        <div className="container mx-auto flex flex-col w-[300px] items-center justify-center h-screen">
            <a href="/" className="my-4">
                <img src={logo} alt="n" className="w-38 h-10" />
            </a>
            <h1 className="font-semibold text-2xl mb-4">Личный кабинет</h1>
            <div className="w-full">
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                        Имя пользователя
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Пароль
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <p className="mb-6 flex flex-col items-center">
                    Еще не зарегистрированы?
                    <a href="/register" className="underline hover:no-underline">
                        Зарегистрироваться
                    </a>
                </p>
                <button
                    onClick={handleLogin}
                    disabled={loadingButton}
                    className={`bg-[#C6D2CD] text-[#070908] px-8 pt-2 pb-3 rounded ${
                        loadingButton ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#769386] hover:text-white'
                    } text-xl transition duration-300 ease-in-out w-full`}
                >
                    Войти
                </button>
            </div>
        </div>
    );
};

export default AuthPage;
