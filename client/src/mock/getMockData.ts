import {
  CalendarEventAdminType,
  CalendarEventType,
  LessonsStatus
} from "../models/types";

const getUser = () => "Leyan";

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
          type: LessonsStatus.PAST,
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
          type: LessonsStatus.BOOKED,
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
          type: LessonsStatus.BOOKED,
          time: "4pm",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: LessonsStatus.BOOKED,
          time: "6pm",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: LessonsStatus.BOOKED,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.PAST,
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
          type: LessonsStatus.BOOKED,
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
          type: LessonsStatus.BOOKED,
          time: "4pm",
          student: "Diana",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: LessonsStatus.BOOKED,
          time: "6pm",
          student: "XiaoYang",
          address: "17 Morris Dr.",
          fileObj: null,
        },
        {
          type: LessonsStatus.BOOKED,
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
      events: [{
        type: LessonsStatus.BOOKED,
        time: "4pm",
        student: "Diana",
        address: "17 Morris Dr.",
        fileObj: null,
      }
      ],
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
          type: LessonsStatus.AVAILABLE,
          time: "4pm",
          student: null,
          address: null,
          fileObj: null,
        },
        {
          type: LessonsStatus.AVAILABLE,
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
        type: LessonsStatus.AVAILABLE,
        time: "4pm",
        address: null,
        fileObj: null,
      },
      {
        type: LessonsStatus.AVAILABLE,
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
        type: LessonsStatus.AVAILABLE,
        time: "4pm",
        address: null,
        fileObj: null,
      },
      {
        type: LessonsStatus.AVAILABLE,
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
        type: LessonsStatus.AVAILABLE,
        time: "4pm",
        address: null,
        fileObj: null,
      },
      {
        type: LessonsStatus.AVAILABLE,
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
  getMockCalendarEvents,
  getMockCalendarEventsAdmin,
  getAvailableTimes,
  getMockStudents,
};
