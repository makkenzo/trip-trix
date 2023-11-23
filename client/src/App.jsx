import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Advicec from './pages/Advicec';
import Blog from './pages/Blog'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/advicec" element={<Advicec />} />
                <Route path="/blog" element={<Blog/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
