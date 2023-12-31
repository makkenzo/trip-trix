import React from 'react';

function Footer() {
    return (
        <div className="container mx-auto py-16 flex justify-between">
            <div className="text-[#000000] text-2xl">© 2023 TripTrix LLC - Все права защищены.</div>
            <div className="flex justify-between space-x-12 text-[#000000]   items-center text-2xl">
                <a href="/blog" className="hover:underline hover:underline-offset-4">
                    Блог
                </a>
                <a href="/advicec" className="hover:underline hover:underline-offset-4">
                    Советы
                </a>
               
            </div>
        </div>
    );
}

export default Footer;
