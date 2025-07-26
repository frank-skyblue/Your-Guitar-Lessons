/**
 * Notes: All day, month values are stored as numbers
 * UI-friendly time formats should be rendered with the help of helper functions.
 */

type UpcomingLessonsObjType = {
  day: number;
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
};

type CalendarEventAdminType = {
  dateObj: DateType;
  events: EventAdminType[] | [];
};

type DateType = {
  day: number;
  date: number;
  month: number;
  year: number;
} | null;

type EventType = {
  type: ModalType;
  time: string;
  address: string | null;
  fileObj: { description: string; file: string } | null;
};

type EventAdminType = {
  type: ModalType;
  time: string;
  student: string | null;
  address: string | null;
  fileObj: { description: string; file: string } | null;
};

type InfoType = {
  user: string;
  address: string;
  time: string;
};

type PastInfoType = {
  description: string;
  file: string;
};

type ModalType = "past" | "booked" | "available" | "";

interface Lesson {
  id: string;
  teacherId: string;
  studentIds: string[];
  date: string; // ISO date string
  time: string; // e.g. "15:00"
  location: string;
  description: string;
  downloadableUrl?: string;
  status: ModalType;
}

export type {
  UpcomingLessonsObjType,
  PreviousLessonsObjType,
  CalendarEventType,
  CalendarEventAdminType,
  DateType,
  InfoType,
  PastInfoType,
  EventType,
  EventAdminType,
  ModalType,
  Lesson,
};
