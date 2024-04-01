type UpcomingLessonsObjType = {
    day: string;
    date: string;
    time: string;
    location: string;
};

type PreviousLessonsObjType = {
    date: string;
    description: string;
    downloadable: string;
};

type CalendarEventType = {
    dateObj: DateType;
    events: EventType[] | [];
}

type DateType = {
    day: string;
    date: number;
    month: string;
    year: number;
};

type EventType = {
    type: "past" | "booked" | "available";
    time: string;
    address: string | null;
};

type ModalType = "past" | "booked" | "available" | "";

export type { UpcomingLessonsObjType, PreviousLessonsObjType, CalendarEventType, DateType, EventType, ModalType };
