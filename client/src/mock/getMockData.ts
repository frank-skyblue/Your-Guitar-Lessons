import {
  CalendarEventAdminType,
  CalendarEventType,
  PreviousLessonsObjType,
  UpcomingLessonsObjType,
} from "../util/types";

const getUser = () => "Leyan";

const getMockUpcomingLessons = (): UpcomingLessonsObjType[] => {
  return [
    {
      day: 0,
      date: "2021-01-01",
      time: "12pm",
      location: "17 Morris Dr",
    },
    {
      day: 1,
      date: "2021-01-02",
      time: "12pm",
      location: "17 Morris Dr",
    },
    {
      day: 2,
      date: "2021-01-03",
      time: "12pm",
      location: "17 Morris Dr",
    },
    {
      day: 3,
      date: "2021-01-04",
      time: "12pm",
      location: "17 Morris Dr",
    },
    {
      day: 4,
      date: "2021-01-05",
      time: "12pm",
      location: "17 Morris Dr",
    },
  ];
};

const getMockPreviousLessons = (): PreviousLessonsObjType[] => {
  return [
    {
      date: "2021-01-01",
      description: "Lesson 1",
      downloadable: "link1",
    },
    {
      date: "2021-01-02",
      description: "Lesson 2",
      downloadable: "link2",
    },
    {
      date: "2021-01-03",
      description: "Lesson 3",
      downloadable: "link3",
    },
    {
      date: "2021-01-04",
      description: "Lesson 4",
      downloadable: "link4",
    },
    {
      date: "2021-01-05",
      description: "Lesson 5",
      downloadable: "link5",
    },
    {
      date: "2021-01-01",
      description: "Lesson 1",
      downloadable: "link1",
    },
    {
      date: "2021-01-02",
      description: "Lesson 2",
      downloadable: "link2",
    },
    {
      date: "2021-01-03",
      description: "Lesson 3",
      downloadable: "link3",
    },
    {
      date: "2021-01-04",
      description: "Lesson 4",
      downloadable: "link4",
    },
    {
      date: "2021-01-05",
      description: "Lesson 5",
      downloadable: "link5",
    },
    {
      date: "2021-01-01",
      description: "Lesson 1",
      downloadable: "link1",
    },
    {
      date: "2021-01-02",
      description: "Lesson 2",
      downloadable: "link2",
    },
    {
      date: "2021-01-03",
      description: "Lesson 3",
      downloadable: "link3",
    },
    {
      date: "2021-01-04",
      description: "Lesson 4",
      downloadable: "link4",
    },
    {
      date: "2021-01-05",
      description: "Lesson 5",
      downloadable: "link5",
    },
    {
      date: "2021-01-01",
      description: "Lesson 1",
      downloadable: "link1",
    },
    {
      date: "2021-01-02",
      description: "Lesson 2",
      downloadable: "link2",
    },
    {
      date: "2021-01-03",
      description: "Lesson 3",
      downloadable: "link3",
    },
    {
      date: "2021-01-04",
      description: "Lesson 4",
      downloadable: "link4",
    },
    {
      date: "2021-01-05",
      description: "Lesson 5",
      downloadable: "link5",
    },
  ];
};

const getMockCalendarEvents = (): CalendarEventType[] => {
  return [
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: {
        day: 4,
        date: 1,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 2,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 6,
        date: 3,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 0,
        date: 4,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "past",
          time: "8pm",
          address: "17 Morris Dr.",
          fileObj: {
            description: "Lesson 1",
            file: "file.pdf",
          },
        },
      ],
    },
    {
      dateObj: {
        day: 1,
        date: 5,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 2,
        date: 6,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "booked",
          time: "4pm",
          address: "17 Morris Dr.",
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 3,
        date: 7,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 4,
        date: 8,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 9,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "booked",
          time: "4pm",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: "booked",
          time: "6pm",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: "booked",
          time: "7pm",
          address: "17 Morris Dr.",
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 6,
        date: 10,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 0,
        date: 11,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 1,
        date: 12,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 2,
        date: 13,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 3,
        date: 14,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 4,
        date: 15,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 16,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 6,
        date: 17,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 0,
        date: 18,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 1,
        date: 19,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 2,
        date: 20,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 3,
        date: 21,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 4,
        date: 22,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 23,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 6,
        date: 24,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 0,
        date: 25,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 1,
        date: 26,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 2,
        date: 27,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 3,
        date: 28,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 4,
        date: 29,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 30,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 6,
        date: 31,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
  ];
};

const getMockCalendarEventsAdmin = (): CalendarEventAdminType[] => {
  return [
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: {
        day: 4,
        date: 1,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 2,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 6,
        date: 3,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 0,
        date: 4,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "past",
          time: "8pm",
          student: "Leyan",
          address: "17 Morris Dr.",
          fileObj: {
            description: "Lesson 1",
            file: "file.pdf",
          },
        },
      ],
    },
    {
      dateObj: {
        day: 1,
        date: 5,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 2,
        date: 6,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "booked",
          time: "4pm",
          student: "Tom",
          address: "17 Morris Dr.",
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 3,
        date: 7,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 4,
        date: 8,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 9,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "booked",
          time: "4pm",
          student: "Diana",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: "booked",
          time: "6pm",
          student: "XiaoYang",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: "booked",
          time: "7pm",
          student: "Leyan",
          address: "17 Morris Dr.",
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 6,
        date: 10,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 0,
        date: 11,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 1,
        date: 12,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 2,
        date: 13,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 3,
        date: 14,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          student: null,
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 4,
        date: 15,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 16,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 6,
        date: 17,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          student: null,
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 0,
        date: 18,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 1,
        date: 19,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 2,
        date: 20,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          student: null,
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 3,
        date: 21,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 4,
        date: 22,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 23,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 6,
        date: 24,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          student: null,
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 0,
        date: 25,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 1,
        date: 26,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          student: null,
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 2,
        date: 27,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 3,
        date: 28,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          student: null,
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: {
        day: 4,
        date: 29,
        month: 2,
        year: 2024,
      },
      events: [],
    },
    {
      dateObj: {
        day: 5,
        date: 30,
        month: 2,
        year: 2024,
      },
      events: [
        {
          type: "available",
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: "available",
          time: "6pm",
          student: null,
          address: null,
          fileObj: null,
        },
      ],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
    {
      dateObj: null,
      events: [],
    },
  ];
};

const getAvailableTimes = (): CalendarEventType[] => [
  {
    dateObj: {
      day: 3,
      date: 14,
      month: 2,
      year: 2024,
    },
    events: [
      {
        type: "available",
        time: "4pm",
        address: null,
        fileObj: null,
      },
      {
        type: "available",
        time: "6pm",
        address: null,
        fileObj: null,
      },
    ],
  },
  {
    dateObj: {
      day: 6,
      date: 17,
      month: 2,
      year: 2024,
    },
    events: [
      {
        type: "available",
        time: "4pm",
        address: null,
        fileObj: null,
      },
      {
        type: "available",
        time: "6pm",
        address: null,
        fileObj: null,
      },
    ],
  },
  {
    dateObj: {
      day: 2,
      date: 20,
      month: 2,
      year: 2024,
    },
    events: [
      {
        type: "available",
        time: "4pm",
        address: null,
        fileObj: null,
      },
      {
        type: "available",
        time: "6pm",
        address: null,
        fileObj: null,
      },
    ],
  },
];

const getMockStudents = () => {
  return ["Leyan", "Tom", "Diana", "XiaoYang"];
};

export {
  getUser,
  getMockUpcomingLessons,
  getMockPreviousLessons,
  getMockCalendarEvents,
  getMockCalendarEventsAdmin,
  getAvailableTimes,
  getMockStudents,
};
