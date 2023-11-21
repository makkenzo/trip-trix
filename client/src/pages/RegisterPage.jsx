import React, { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleLogin = () => {};

    return (
        <div className="container mx-auto flex flex-col w-[300px] items-center justify-center h-screen">
            <h1 className="font-semibold text-2xl mb-4">Регистрация</h1>
            <form className="w-full">
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
                <p className="mb-4 flex flex-col items-center">
                    Есть существующий аккаунт?
                    <a href="/auth" className="underline hover:no-underline">
                        Войти
                    </a>
                </p>
                <button
                    type="submit"
                    onClick={handleLogin}
                    className="bg-[#C6D2CD] text-[#070908] px-8 pt-2 pb-3 rounded hover:bg-[#769386] hover:text-white text-xl transition duration-300 ease-in-out w-full"
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
