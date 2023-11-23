import React from 'react'
import Nav from '../components/Nav'
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
        </div>
    </div>
  )
}

export default Blog