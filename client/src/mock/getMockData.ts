import { CalendarEventType, PreviousLessonsObjType, UpcomingLessonsObjType } from "../util/types";

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

const getMockCalendarEvents = (): CalendarEventType[] => {
    return [
        {
            dateObj: {
                day: 'Saturday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Friday',
                date: 1,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: 2,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Sunday',
                date: 3,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Monday',
                date: 4,
                month: 'March',
                year: 2024
            },
            events: [
                {
                    type: 'past',
                    time: '8pm',
                    address: '17 Morris Dr.',
                }
            ]
        },
        {
            dateObj: {
                day: 'Tuesday',
                date: 5,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Wednesday',
                date: 6,
                month: 'March',
                year: 2024
            },
            events: [
                {
                    type: 'booked',
                    time: '4pm',
                    address: '17 Morris Dr.',
                }
            ]
        },
        {
            dateObj: {
                day: 'Thursday',
                date: 7,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Friday',
                date: 8,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: 9,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Sunday',
                date: 10,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Monday',
                date: 11,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Tuesday',
                date: 12,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Wednesday',
                date: 13,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Thursday',
                date: 14,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Friday',
                date: 15,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: 16,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Sunday',
                date: 17,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Monday',
                date: 18,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Tuesday',
                date: 19,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Wednesday',
                date: 20,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Thursday',
                date: 21,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Friday',
                date: 22,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: 23,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Sunday',
                date: 24,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Monday',
                date: 25,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Tuesday',
                date: 26,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Wednesday',
                date: 27,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Thursday',
                date: 28,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Friday',
                date: 29,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: 30,
                month: 'March',
                year: 2024
            },
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
            dateObj: {
                day: 'Sunday',
                date: 31,
                month: 'March',
                year: 2024
            },
            events: []
        },
        {
            dateObj: {
                day: 'Monday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Tuesday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Wednesday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Thursday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Friday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
        {
            dateObj: {
                day: 'Saturday',
                date: -1,
                month: '',
                year: -1
            },
            events: []
        },
    ];

}

export { getMockUpcomingLessons, getMockPreviousLessons, getMockCalendarEvents };