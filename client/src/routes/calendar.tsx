import React from "react";
import { getMockCalendarEvents } from "../mock/getMockData";
import { PlayIcon } from "@heroicons/react/24/solid";
import PastModal from "../components/modals/PastModal";
import BookedModal from "../components/modals/BookedModal";
import AvailableModal from "../components/modals/AvailableModal";
import {
  CalendarEventType,
  DateType,
  EventType,
  ModalType,
} from "../util/types";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const calendarEvents: CalendarEventType[] = getMockCalendarEvents();

const Calendar: React.FC = () => {
  const [dateObj, setDateObj] = React.useState<DateType | null>(null);
  const [showModal, setShowModal] = React.useState<Boolean>(false);
  const [modalType, setModalType] = React.useState<ModalType>("");

  return (
    <>
      <div
        className={`h-full p-2 gap-y-2 md:gap-y-0 md:px-10 md:py-5 flex flex-col ${
          showModal ? "blur-sm" : ""
        }`}
      >
        <Header />
        <CalendarContents
          setShowModal={setShowModal}
          setModalType={setModalType}
          setDateObj={setDateObj}
        />
        <CalendarContentsMobile />
      </div>
      {showModal ? (
        <Modal
          dateObj={dateObj}
          setShowModal={setShowModal}
          modalType={modalType}
        />
      ) : null}
    </>
  );
};

const Header = () => {
  const date = new Date();
  return (
    <div className="basis-12 flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-between">
      <div className="flex gap-x-2 justify-center items-center">
        <PlayIcon className="w-4 h-4 rotate-180" />
        <div className="text-xl font-semibold">
          {months[date.getMonth()]} {date.getFullYear()}
        </div>
        <PlayIcon className="w-4 h-4" />
      </div>
      <div className="flex gap-x-3 justify-center items-center">
        <div className="text-xs w-24 text-center bg-past-highlight py-1 rounded-md">
          Past
        </div>
        <div className="text-xs w-24 text-center bg-booked-highlight py-1 rounded-md">
          Booked
        </div>
        <div className="text-xs w-24 text-center bg-available-highlight py-1 rounded-md">
          Available
        </div>
      </div>
    </div>
  );
};

const CalendarContents = ({ setShowModal, setModalType, setDateObj }: any) => {
  const Header = () => (
    <div className="basis-10 flex divide-x-2 divide-text-primary/15">
      {days.map((day) => (
        <div
          key={day}
          className="h-full basis-0 grow text-sm font-medium flex items-center border-b-2 border-text-primary/15"
        >
          <div className="ml-2">{day}</div>
        </div>
      ))}
    </div>
  );

  const Date = ({ date }: { date: number }) =>
    date > 0 ? (
      <div className="ml-2">{date}</div>
    ) : (
      <div className="h-full w-full bg-text-inactive/10"></div>
    );

  const Events = ({
    dateObj,
    setDateObj,
    events,
  }: {
    dateObj: DateType;
    setDateObj: any;
    events: EventType[];
  }) => (
    <>
      {events.map(({ type, time, address }: EventType) => (
        <div
          key={time}
          className={`${
            type === "past"
              ? "bg-past-highlight"
              : type === "booked"
              ? "bg-booked-highlight"
              : "bg-available-highlight"
          } border-l-4 border-text-primary/50 px-0.5 py-1.5 hover:cursor-pointer`}
          onClick={() => {
            setModalType(type);
            setShowModal(true);
            setDateObj(dateObj);
          }}
        >
          <div className="text-xs font-semibold">{time}</div>
          {address && <div className="text-xs">{address}</div>}
        </div>
      ))}
    </>
  );

  const CalendarEvents = ({ i }: { i: number }) => (
    <>
      {calendarEvents
        .slice(i * 7, i * 7 + 7)
        .map(({ dateObj, events }: CalendarEventType) => (
          // Date Box
          <div
            key={dateObj.date > 0 ? dateObj.date : Math.random()}
            className="h-full basis-0 grow text-sm font-normal flex flex-col border-b-2 border-text-primary/15 overflow-y-hidden"
          >
            {/* Date */}
            <Date date={dateObj.date} />
            <div className="mt-auto flex flex-col gap-y-0.5 overflow-y-scroll">
              <Events
                dateObj={dateObj}
                setDateObj={setDateObj}
                events={events}
              />
            </div>
          </div>
        ))}
    </>
  );

  return (
    <div className="hidden grow bg-content-highlight md:flex flex-col border-2 border-b-0 border-text-primary/15">
      <Header />
      {/* Dates Container */}
      <div className="h-full flex flex-col">
        {Array.from({ length: calendarEvents.length > 35 ? 6 : 5 }, (_, i) => (
          /* Rows */
          <div
            key={i}
            className="basis-0 h-0 grow flex divide-x-2 divide-text-primary/15 overflow-y-hidden"
          >
            <CalendarEvents i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CalendarContentsMobile = () => {
  const Events = ({ events }: { events: any }) =>
    events.map(({ type, time, address }: any) => (
      <div
        key={time}
        className={`${
          type === "past"
            ? "bg-past-highlight"
            : type === "booked"
            ? "bg-booked-highlight"
            : "bg-available-highlight"
        } flex justify-between border-l-4 border-text-primary/50 px-1 py-1.5 rounded-sm`}
      >
        <div className="text-xs font-semibold">{time}</div>
        {address && <div className="text-xs">{address}</div>}
      </div>
    ));

  return (
    <div className="md:hidden grow flex flex-col gap-y-3 overflow-y-scroll">
      {calendarEvents.map(
        ({ dateObj, events }: { dateObj: DateType; events: any }) =>
          events.length > 0 && (
            <div key={dateObj.date} className="flex flex-col gap-y-1">
              {/* Date */}
              <div className="text-sm font-normal text-center border-b-2 border-text-primary/15">
                {dateObj.date}
              </div>
              {/* Events */}
              <div className="flex flex-col gap-y-0.5 overflow-y-scroll">
                <Events events={events} />
              </div>
            </div>
          )
      )}
    </div>
  );
};

const Modal = ({ setShowModal, modalType, dateObj, infoObj }: any) => {
  switch (modalType) {
    case "past":
      return (
        <PastModal
          setShowModal={setShowModal}
          dateObj={dateObj}
          infoObj={infoObj}
        />
      );
    case "booked":
      return (
        <BookedModal
          setShowModal={setShowModal}
          dateObj={dateObj}
          infoObj={infoObj}
        />
      );
    case "available":
      return <AvailableModal setShowModal={setShowModal} />;
    default:
      return null;
  }
};

export default Calendar;
