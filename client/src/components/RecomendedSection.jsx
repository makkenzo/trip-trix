import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

const data = [
    {
        label: 'Популярное',
        value: 'popular',
        
    },
    {
        label: 'Новые',
        value: 'new',
        
    },
    {
        label: 'Красивые',
        value: 'buatifull',
        
    },
    
];

const RecomendedSection = () => {
    return (
        <div className='container mx-auto flex my-12 flex-col     text-center'>
            <h1 className='font-bold text-5xl mt-[150px]'>Рекомендуемые Места</h1>
            <div className='mt-[50px]'>
                <Tabs value="popular" >
                    <div className=''>
                        <TabsHeader>
                            {data.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </div>
                    <TabsBody className='mt-10'>
                        {data.map(({ value }) => (
                            <TabPanel key={value} value={value}>
                               <div className='flex flex-row justify-between'>
                                    <div className='shadow-lg flex flex-col text-left text p-3 rounded-lg'>
                                        <img className='' src={img1} alt="image" srcset="" />
                                        <h1 className='font-bold text-1xl pt-2 pl-3 text-black'>Пальмовый рай</h1>
                                        <p className='pl-3'>Тайланд</p>
                                    </div>
                                    <div className='shadow-lg flex flex-col text-left text p-3 rounded-lg'>
                                        <img src={img2} alt="image" srcset="" />
                                        <h1 className='font-bold text-1xl pt-2 pl-3 text-black'>Пляж Аррива</h1>
                                        <p className='pl-3'>Бали</p>
                                    </div >
                                    <div className='shadow-lg flex flex-col text-left text p-3 rounded-lg'>
                                        <img src={img3} alt="image" srcset="" />
                                        <h1 className='font-bold text-1xl pt-2 pl-3 text-black'>Гора Кина</h1>
                                        <p className='pl-3'>Канада</p>
                                    </div>
                                    <div className='shadow-lg flex flex-col text-left text p-3 rounded-lg'>
                                        <img src={img4} alt="image" srcset="" />
                                        <h1 className='font-bold text-1xl pt-2 pl-3 text-black'>Горный Круиз</h1>
                                        <p className='pl-3'>Швейцария</p>
                                    </div>
                               </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
};

export default RecomendedSection;
