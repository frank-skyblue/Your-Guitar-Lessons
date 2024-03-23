import React, { useEffect, useState } from 'react';
import { getMockPreviousLessons, getMockUpcomingLessons } from '../mock/getMockData';
import { PreviousLessonsObjType, UpcomingLessonsObjType } from '../util/types';

const Home: React.FC = () => {
    return (
        <div className='h-full flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:gap-x-6 p-3 md:px-6 md:py-8'>
            <div className='basis-3/4 md:basis-3/5 flex flex-col gap-y-3 md:gap-y-6 overflow-hidden'>
                <div className='basis-1/3 md:basis-2/6 flex flex-col gap-y-2 overflow-hidden text-center md:text-left'>
                    <h1 className='text-2xl'>Upcoming Lessons</h1>
                    <div className='md:bg-content-highlight flex-grow flex flex-col gap-y-2 rounded-md px-2 overflow-hidden'>
                        <UpcomingLessons />
                    </div>
                </div>
                <div className='basis-2/3 md:basis-4/6 flex flex-col gap-y-2 overflow-hidden text-center md:text-left'>
                    <h1 className='text-2xl'>Previous Lessons</h1>
                    <div className='md:bg-content-highlight flex-grow flex flex-col gap-y-2 rounded-md px-2 overflow-hidden'>
                        <PreviousLessons />
                    </div>
                </div>
            </div>
            <div className='basis-1/4 md:basis-2/5 flex flex-col gap-y-2 order-first md:order-none text-center md:text-left'>
                <h1 className='text-2xl'>Dashboard</h1>
                <div className='md:bg-content-highlight flex-grow rounded-md'>
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

const UpcomingLessonsHeaders = [
    'Day',
    'Date',
    'Time',
    'Location',
    ''
];

const UpcomingLessons: React.FC = () => {
    const [upcomingLessons, setUpcomingLessons] = useState<UpcomingLessonsObjType[]>([]);

    useEffect(() => {
        const mockUpcomingLessons: UpcomingLessonsObjType[] = getMockUpcomingLessons();
        setUpcomingLessons(mockUpcomingLessons);
    }
        , []);

    if (upcomingLessons.length === 0) {
        return (
            <p>No upcoming lessons</p>
        );
    }

    return (
        <>
            <div className='flex flex-row'>
                {UpcomingLessonsHeaders.map((title, index) => (
                    <p key={index} className='text-md font-bold basis-1/5'>{title}</p>
                ))}
            </div>
            <div className='flex flex-col gap-y-2 overflow-auto'>
            {upcomingLessons.map((lesson: UpcomingLessonsObjType, index) => (
                <div key={index} className='flex flex-row'>
                    {Object.values(lesson).map((value, index) => (
                        <p key={index} className='text-md text-text-primary/60 basis-1/5'>{value}</p>
                    ))}
                </div>
            ))}
            </div>
        </>
    );
};

const PreviousLessonsHeaders = [
    'Date',
    'Description',
    'Downloadable',
];

const PreviousLessons: React.FC = () => {
    const [previousLessons, setPreviousLessons] = useState<PreviousLessonsObjType[]>([]);

    useEffect(() => {
        const mockPreviousLessons: PreviousLessonsObjType[] = getMockPreviousLessons();
        setPreviousLessons(mockPreviousLessons);
    }, []);

    if (previousLessons.length === 0) {
        return (
            <p>No previous lessons</p>
        );
    }

    return (
        <>
            <div className='flex flex-row'>
                {PreviousLessonsHeaders.map((title, index) => (
                    <p key={index} className='text-md font-bold first:basis-1/5 basis-2/6'>{title}</p>
                ))}
            </div>
            <div className='flex flex-col gap-y-2 overflow-auto'>
            {previousLessons.map((lesson: PreviousLessonsObjType, index) => (
                <div key={index} className='flex flex-row'>
                    {Object.values(lesson).map((value, index) => (
                        <p key={index} className='text-md text-text-primary/60 first:basis-1/5 basis-2/6'>{value}</p>
                    ))}
                </div>
            ))}
            </div>
        </>
    );
};

const Dashboard: React.FC = () => {
    return (
        <div>
            <p>Dashboard</p>
        </div>
    );
};

export default Home;
