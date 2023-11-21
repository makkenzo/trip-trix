import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F9FBFA]">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-semibold mb-4 text-[#070908]">404 - Страница не найдена</h1>
                <p className=" mb-6 text-[#070908]">Извините, запрашиваемая вами страница не существует.</p>
                <Link
                    to="/"
                    className="bg-[#C6D2CD] text-[#070908] px-4 pt-2 pb-3 rounded hover:bg-[#769386] hover:text-white text-xl transition duration-300 ease-in-out"
                >
                    На главную
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
