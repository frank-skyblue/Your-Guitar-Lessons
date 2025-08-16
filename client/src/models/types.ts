/**
 * Notes: All day, month values are stored as numbers
 * UI-friendly time formats should be rendered with the help of helper functions.
 */

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
  type: LessonsStatusType;
  time: string;
  address: string | null;
  fileObj: { description: string; file: string } | null;
};

type EventAdminType = {
  type: LessonsStatusType;
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

enum LessonsStatus {
  PAST = "past",
  BOOKED = "booked",
  AVAILABLE = "available",
  EMPTY = ""
}

type LessonsStatusType = LessonsStatus;

export type {
  CalendarEventType,
  CalendarEventAdminType,
  DateType,
  InfoType,
  PastInfoType,
  EventType,
  EventAdminType,
  LessonsStatusType,
};

export {
  LessonsStatus
}
