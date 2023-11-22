import React from 'react'

function Footer() {
  return (
    <div className='container mx-auto my-20 pt-20 flex justify-between'>
        <div className='text-[#000000] text-2xl'>
        © 2022 Treloo LLC - All right reserved.
        </div>
        <div className='flex justify-between space-x-12 text-[#000000]   items-center text-2xl'>
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
        </div>
    </div>
  )
}

export default Footer