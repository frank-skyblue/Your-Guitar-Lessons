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

const getMockCalendarEvents = () => {
    return [
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: 1,
            events: []
        },
        {
            date: 2,
            events: []
        },
        {
            date: 3,
            events: []
        },
        {
            date: 4,
            events: [
                {
                    type: 'past',
                    time: '8pm',
                    address: '17 Morris Dr.',
                }
            ]
        },
        {
            date: 5,
            events: []
        },
        {
            date: 6,
            events: [
                {
                    type: 'booked',
                    time: '4pm',
                    address: '17 Morris Dr.',
                }
            ]
        },
        {
            date: 7,
            events: []
        },
        {
            date: 8,
            events: []
        },
        {
            date: 9,
            events: [
                {
                    type: 'booked',
                    time: '4pm',
                    address: '17 Morris Dr.',
                },
                {
                    type: 'booked',
                    time: '6pm',
                    address: '17 Morris Dr.',
                },
                {
                    type: 'booked',
                    time: '7pm',
                    address: '17 Morris Dr.',
                }
            ]
        },
        {
            date: 10,
            events: []
        },
        {
            date: 11,
            events: []
        },
        {
            date: 12,
            events: []
        },
        {
            date: 13,
            events: []
        },
        {
            date: 14,
            events: [
                {
                    type: 'available',
                    time: '4pm',
                    address: null
                },
                {
                    type: 'available',
                    time: '6pm',
                    address: null
                }
            ]
        },
        {
            date: 15,
            events: []
        },
        {
            date: 16,
            events: []
        },
        {
            date: 17,
            events: [
                {
                    type: 'available',
                    time: '4pm',
                    address: null
                },
                {
                    type: 'available',
                    time: '6pm',
                    address: null
                }
            ]
        },
        {
            date: 18,
            events: []
        },
        {
            date: 19,
            events: []
        },
        {
            date: 20,
            events: [
                {
                    type: 'available',
                    time: '4pm',
                    address: null
                },
                {
                    type: 'available',
                    time: '6pm',
                    address: null
                }
            ]
        },
        {
            date: 21,
            events: []
        },
        {
            date: 22,
            events: []
        },
        {
            date: 23,
            events: []
        },
        {
            date: 24,
            events: [
                {
                    type: 'available',
                    time: '4pm',
                    address: null
                },
                {
                    type: 'available',
                    time: '6pm',
                    address: null
                }
            ]
        },
        {
            date: 25,
            events: []
        },
        {
            date: 26,
            events: [
                {
                    type: 'available',
                    time: '4pm',
                    address: null
                },
                {
                    type: 'available',
                    time: '6pm',
                    address: null
                }
            ]
        },
        {
            date: 27,
            events: []
        },
        {
            date: 28,
            events: [
                {
                    type: 'available',
                    time: '4pm',
                    address: null
                },
                {
                    type: 'available',
                    time: '6pm',
                    address: null
                }
            ]
        },
        {
            date: 29,
            events: []
        },
        {
            date: 30,
            events: [
                {
                    type: 'available',
                    time: '4pm',
                    address: null
                },
                {
                    type: 'available',
                    time: '6pm',
                    address: null
                }
            ]
        },
        {
            date: 31,
            events: []
        },{
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
        {
            date: -1,
            events: []
        },
    ];

}

export { getMockUpcomingLessons, getMockPreviousLessons, getMockCalendarEvents };