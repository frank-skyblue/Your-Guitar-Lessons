import React from 'react';
import SideNav from '../../components/SideNav';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
    return (
        <>
            <SideNav />
            <div className="h-full bg-content md:pl-[12rem]">
                <Outlet />
            </div>
        </>

    );
};

export default HomeLayout;
