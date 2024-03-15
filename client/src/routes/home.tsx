import React from 'react';
import SideNav from '../Components/SideNav';

const Home: React.FC = () => {
    return (
        <>
            <SideNav />
            <div
                className="h-full bg-content md:pl-[12rem]">
                <div className='h-full md:px-6 md:py-8'>
                    <div className="bg-content-highlight h-full md:rounded px-2">

                        <h1 className="text-2xl font-bold">Home</h1>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
