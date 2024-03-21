import { PreviousLessonsObjType, UpcomingLessonsObjType } from "../util/types";

const getMockUpcomingLessons = (): UpcomingLessonsObjType[] => {
    return [
        {
            day: 'Monday',
            date: '2021-01-01',
            time: '12:00',
            location: '17 Morris Dr',
        },
        {
            day: 'Tuesday',
            date: '2021-01-02',
            time: '12:00',
            location: '17 Morris Dr',
        },
        {
            day: 'Wednesday',
            date: '2021-01-03',
            time: '12:00',
            location: '17 Morris Dr',
        },
        {
            day: 'Thursday',
            date: '2021-01-04',
            time: '12:00',
            location: '17 Morris Dr',
        },
        {
            day: 'Friday',
            date: '2021-01-05',
            time: '12:00',
            location: '17 Morris Dr',
        },
    ];
}

const getMockPreviousLessons = (): PreviousLessonsObjType[] => {
    return [
        {
            date: '2021-01-01',
            description: 'Lesson 1',
            downloadable: 'link1',
        },
        {
            date: '2021-01-02',
            description: 'Lesson 2',
            downloadable: 'link2',
        },
        {
            date: '2021-01-03',
            description: 'Lesson 3',
            downloadable: 'link3',
        },
        {
            date: '2021-01-04',
            description: 'Lesson 4',
            downloadable: 'link4',
        },
        {
            date: '2021-01-05',
            description: 'Lesson 5',
            downloadable: 'link5',
        },
        {
            date: '2021-01-01',
            description: 'Lesson 1',
            downloadable: 'link1',
        },
        {
            date: '2021-01-02',
            description: 'Lesson 2',
            downloadable: 'link2',
        },
        {
            date: '2021-01-03',
            description: 'Lesson 3',
            downloadable: 'link3',
        },
        {
            date: '2021-01-04',
            description: 'Lesson 4',
            downloadable: 'link4',
        },
        {
            date: '2021-01-05',
            description: 'Lesson 5',
            downloadable: 'link5',
        },
        {
            date: '2021-01-01',
            description: 'Lesson 1',
            downloadable: 'link1',
        },
        {
            date: '2021-01-02',
            description: 'Lesson 2',
            downloadable: 'link2',
        },
        {
            date: '2021-01-03',
            description: 'Lesson 3',
            downloadable: 'link3',
        },
        {
            date: '2021-01-04',
            description: 'Lesson 4',
            downloadable: 'link4',
        },
        {
            date: '2021-01-05',
            description: 'Lesson 5',
            downloadable: 'link5',
        },
        {
            date: '2021-01-01',
            description: 'Lesson 1',
            downloadable: 'link1',
        },
        {
            date: '2021-01-02',
            description: 'Lesson 2',
            downloadable: 'link2',
        },
        {
            date: '2021-01-03',
            description: 'Lesson 3',
            downloadable: 'link3',
        },
        {
            date: '2021-01-04',
            description: 'Lesson 4',
            downloadable: 'link4',
        },
        {
            date: '2021-01-05',
            description: 'Lesson 5',
            downloadable: 'link5',
        },
    ];
}

export { getMockUpcomingLessons, getMockPreviousLessons };