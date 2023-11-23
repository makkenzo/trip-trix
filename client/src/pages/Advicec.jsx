import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import plan from '../assets/plan.jpg'
import food from '../assets/food.jpeg'
import ravel from '../assets/ravel.jpg'
import save from '../assets/save.jpeg'

function Advicec() {
  return (
    <div>
        <div className='bg-black'>
           <Nav/> 
        </div>
        <div className='container mx-auto flex flex-col my-20'>
            <div >
                <h1 className='text-black text-4xl font-bold text-center'>Практические Советы для Успешных Путешествий</h1>
                <p className='text-2xl mt-5  '>Путешествия — это не только возможность отдохнуть от повседневной рутины,
                но и отличная возможность обогатить свой опыт и расширить свои горизонты. 
                В этой статье мы поделимся несколькими полезными советами, которые помогут вам 
                сделать свое путешествие еще более увлекательным и комфортным.</p>
                
                <h1 className='text-2xl mt-5'>1. Планирование и Подготовка</h1>
                <div className='flex '>
                    <ul className='  ml-10 pt-4 space-y-2 text-xl'>
                        <li >Раннее бронирование: Забронируйте билеты и жилье заранее, чтобы избежать стресса и получить лучшие цены.</li>
                        <li>Исследование местности: Познакомьтесь с местными традициями, культурой и особенностями, чтобы максимально впитать атмосферу места.</li>
                        <li>Составление списка: Создайте список необходимых вещей и проверьте его перед отъездом. Это поможет избежать забывчивости.</li>
                    </ul>
                    <img className='pl-5 w-[400px] h-[180px]' src={plan} alt="image" srcset="" />
                </div>
            
                <h1 className='text-2xl mt-5'>2. Безопасность и Здоровье</h1>
                <div className='flex flex-row-reverse'>
                    <ul className=' text-xl pt-4 space-y-2 ml-10'>
                        <li>Страховка: Всегда имейте медицинскую страховку на случай непредвиденных ситуаций.</li>
                        <li>Местные правила: Ознакомьтесь с правилами безопасности и местной культурой. Это может избежать конфликтов и недоразумений.</li>
                        <li>Аптечка: Возьмите с собой мини-аптечку с основными медикаментами.</li>
                    </ul>
                    <img className='w-[400px] h-[180px]' src={save} alt="image" srcset="" />
                </div>
            
                <h1 className='text-2xl mt-5' >3. Удобство в Путешествии</h1>
                <div className='flex'>
                    <ul className='  text-xl pt-4 space-y-2 ml-10 mr-5'>
                        <li>Легкая багаж: Постарайтесь минимизировать количество багажа. Легкий рюкзак с необходимыми вещами сделает ваше передвижение более удобным.</li>
                        <li>Зарядка: Возьмите с собой портативное зарядное устройство для гаджетов.</li>
                        <li>Локальная SIM-карта: Приобретите местную SIM-карту для удобства связи и использования интернета.</li>
                    </ul>
                    <img className='w-[400px] h-[180px] ' src={ravel} alt="image" srcset="" />
                </div>
            
                <h1 className='text-2xl mt-5'>4. Исследование Местных Вкусов</h1>
                <div className='flex flex-row-reverse'>
                    <ul className=' text-xl pt-4 space-y-2 ml-10'>
                        <li>Местная Кухня: Откройте для себя местные блюда и кулинарные традиции. Это отличный способ погрузиться в культуру.</li>
                        <li>Местные Рынки: Посетите местные рынки для приобретения местных продуктов и сувениров.</li>
                        <li>Рестораны, Рекомендованные Местными: Спросите у местных жителей о их любимых местах, чтобы открыть для себя настоящие жемчужины.</li>
                    </ul>
                    <img className='w-[400px] h-[180px]' src={food} alt="image" srcset="" />
                </div>
                
                <p className='mt-8 text-2xl'>Следуя этим простым советам, вы сделаете свое путешествие незабываемым
                и полным приятных воспоминаний. Помните, что каждое путешествие — 
                это уникальная возможность открыть для себя что-то новое и расширить свой кругозор. 
                Путешествуйте с удовольствием и открытиями!</p>

            </div>
            <div className='flex justify-center mt-10'>
                <Link
                    to="/"
                    className="bg-[#C6D2CD] text-[#070908] px-8 pt-2 pb-2 text-xl rounded hover:bg-[#769386] hover:text-white transition duration-300 ease-in-out"
                >
                    На главную
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Advicec