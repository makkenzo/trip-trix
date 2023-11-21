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
        <div className='container mx-auto flex my-12 flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-5xl mt-[150px]'>Рекомендуемые Места</h1>
            <div className='mt-[50px]'>
                <Tabs value="html">
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
                                    <div>
                                        <img src={img1} alt="image" srcset="" />
                                        box1
                                    </div>
                                    <div>
                                        <img src={img2} alt="image" srcset="" />
                                        box2
                                    </div>
                                    <div>
                                        <img src={img3} alt="image" srcset="" />
                                        box3
                                    </div>
                                    <div>
                                        <img src={img4} alt="image" srcset="" />
                                        box4
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
