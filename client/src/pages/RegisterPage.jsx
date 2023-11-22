import React, { useState } from 'react';
import AppService from '../utils/api';
import logo from '../assets/trip-trix-logo.png';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loadingButton, setLoadingButton] = useState(false);

    const handleRegister = async () => {
        setErrorMsg('');
        if (password !== repeatPassword) {
            setPasswordMismatch(true);
            return;
        } else {
            setPasswordMismatch(false);
        }

        setLoadingButton(true);

        try {
            const response = await AppService.registerUser({ username, password });
        } catch (error) {
            setErrorMsg(error.response.data.error);
            console.error(error.response.data.error);
        } finally {
            setLoadingButton(false);
        }
    };

    return (
        <div className="container mx-auto flex flex-col w-[300px] items-center justify-center h-screen">
            <a href="/" className="my-4">
                <img src={logo} alt="n" className="w-38 h-10" />
            </a>
            <h1 className="font-semibold text-2xl mb-4">Регистрация</h1>
            <div className="w-full">
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Повторите пароль
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                {passwordMismatch && <p className="text-red-500 text-sm mb-4">Пароли не совпадают.</p>}
                {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}.</p>}
                <p className="mb-4 flex flex-col items-center">
                    Есть существующий аккаунт?
                    <a href="/auth" className="underline hover:no-underline">
                        Войти
                    </a>
                </p>
                <button
                    onClick={handleRegister}
                    disabled={loadingButton}
                    className={`bg-[#C6D2CD] text-[#070908] px-8 pt-2 pb-3 rounded ${
                        loadingButton ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#769386] hover:text-white'
                    } text-xl transition duration-300 ease-in-out w-full`}
                >
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
