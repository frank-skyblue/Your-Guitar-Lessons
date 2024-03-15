import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { classNames } from '../util/helpers';
import { HomeIcon, CalendarIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

function Sidebar() {
    const navigation = [
        { name: 'Home', href: '/home', icon: <HomeIcon className='h-7 w-7 mr-2' />},
        { name: 'Calendar', href: '/calendar', icon: <CalendarIcon className='h-7 w-7 mr-2' />},
        { name: 'About', href: '/about', icon: <InformationCircleIcon className='h-7 w-7 mr-2' />}
    ]

    const {pathname} = useLocation();

    return (
        <aside id="sidebar"
            className="absolute bg-side-nav top-0 left-0 z-40 w-48 h-[calc(100vh-56px)] transition-transform -translate-x-full md:translate-x-0"
            aria-label="Sidebar">
            <ul className="flex flex-col py-3 h-full">
                {navigation.map((item) => (
                    <li key={item.name} className="w-full last:mt-auto">
                        <Link to={item.href}
                            className={classNames(
                                (pathname === item.href) ? 'text-side-nav-text-active' : 'text-side-nav-text-inactive',
                                'flex items-center rounded-md px-3 py-2 text-sm font-semibold'
                            )}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;