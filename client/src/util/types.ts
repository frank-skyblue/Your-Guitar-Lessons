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

type DateType = {
    day: string;
    date: number;
    month: string;
    year: number;
};

export type { UpcomingLessonsObjType, PreviousLessonsObjType, DateType };
