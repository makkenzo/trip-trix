import React from 'react'
import Nav from '../components/Nav'
import elf from '../assets/elf.jpg'
import sak from '../assets/sakura.jpg'
import newq from '../assets/new.jpg'
import bali from '../assets/bali.jpg'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";


function Blog() {
  return (
    <div>
        <div className='bg-black'>
           <Nav/> 
        </div>
        <div className='container mx-auto flex flex-col my-20'>
            <div>
                <Card className=" flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                    src={elf}
                    alt="card-image"
                    className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Париж, Франция
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Магия Эйфелевой башни: Взгляд с высоты
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                    В этом посте расскажем о неповторимом опыте наблюдения 
                    за Парижем с вершины Эйфелевой башни. Откройте для себя
                    удивительные виды, узнайте интересные факты и поделитесь
                    нашим впечатлением от этого исторического символа.
                    </Typography>
                    <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Читать дальше
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardBody>
                </Card>
            </div>
            <div className='mt-5'>
                <Card className=" flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                    src={bali}
                    alt="card-image"
                    className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Бали, Индонезия
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Сокровища Бали: Путеводитель по Танах Лот и Райским Пляжам
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                    Исследуйте волшебный остров Бали вместе с нами!
                     Узнайте о местных традициях в храме Танах Лот,
                      и затем отправьтесь на золотистые пляжи, чтобы
                       насладиться закатом. Подготовьтесь к захватывающему
                        приключению в этом тропическом рае.
                    </Typography>
                    <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Читать дальше
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardBody>
                </Card>
            </div>
            <div className='mt-5'>
                <Card className=" flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                    src={sak}
                    alt="card-image"
                    className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Киото, Япония
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Сакура в полном расцвете: Чарующая весна в Киото
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                    Погрузитесь в атмосферу волшебной весны в Киото,
                     где сакура расцветает во всей своей красе. Расскажем
                      о традициях просмотра сакуры, покажем самые живописные места
                       города и поделимся впечатлениями от этого волшебного времени года.
                    </Typography>
                    <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Читать дальше
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardBody>
                </Card>
            </div>
            <div className='mt-5'>
                <Card className=" flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                    src={newq}
                    alt="card-image"
                    className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Нью-Йорк, США
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                     Город, который никогда не спит: Нью-Йорк в ночном свете
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                     Откройте для себя магию Нью-Йорка, 
                     когда небоскребы подсвечивают ночное небо.
                      Пройдемся по иллюминированным улицам Манхэттена, 
                      расскажем о лучших видовых площадках и создадим вместе 
                      воспоминания о городе, который никогда не засыпает.
                    </Typography>
                    <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Читать дальше
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                    </a>
                </CardBody>
                </Card>
            </div>
            
        </div>
    </div>
  )
}

export default Blog