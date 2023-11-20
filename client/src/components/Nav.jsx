import logo from '../assets/white-logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-between w-4/5 py-6">
                <a href="/">
                    {' '}
                    <img src={logo} alt="n" className="w-38 h-10 " />
                </a>
                <div className="flex justify-between space-x-12 text-[#ffffff] py-2 items-center text-2xl ">
                    <a href="#" className="hover:underline hover:underline-offset-4">
                        Обзор
                    </a>
                    <a href="#" className="hover:underline hover:underline-offset-4">
                        Советы
                    </a>
                    <a href="#" className="hover:underline hover:underline-offset-4">
                        Оповещения
                    </a>
                    <a href="#" className="hover:underline hover:underline-offset-4">
                        Блог
                    </a>
                    <Link
                        to="/"
                        className="bg-[#C6D2CD] text-[#070908] px-8 pt-2 pb-3 rounded hover:bg-[#769386] hover:text-white transition duration-300 ease-in-out"
                    >
                        Блог
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
