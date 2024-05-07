import { displayDays } from "../../util/constants";
import {
  CalendarEventAdminType,
  DateType,
  EventAdminType,
} from "../../util/types";

interface CalendarContentsAdminProps {
  calendarEvents: CalendarEventAdminType[];
  setShowModal: any;
  setModalType: any;
  setDateObj: any;
  setInfoObj: any;
  setPastInfoObj: any;
}

const CalendarContentsAdmin: React.FC<CalendarContentsAdminProps> = ({
  calendarEvents,
  setShowModal,
  setModalType,
  setDateObj,
  setInfoObj,
  setPastInfoObj,
}) => {
  const Header = () => (
    <div className="basis-10 flex divide-x-2 divide-text-primary/15">
      {displayDays.map((day) => (
        <div
          key={day}
          className="h-full basis-0 grow text-sm font-medium flex items-center border-b-2 border-text-primary/15"
        >
          <div className="ml-2">{day}</div>
        </div>
      ))}
    </div>
  );

  const CalendarEvents = ({ i }: { i: number }) => {
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
      events: EventAdminType[];
    }) => (
      <>
        {events.map(
          ({ type, time, address, student, fileObj }: EventAdminType) => (
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
                setInfoObj({ user: student, address, time });
                if (type === "past") setPastInfoObj(fileObj);
              }}
            >
              <div className="flex justify-between pr-0.5">
                <div className="text-xs font-semibold">{time}</div>
                <div className="text-xs">{student}</div>
              </div>
              {address && <div className="text-xs">{address}</div>}
            </div>
          )
        )}
      </>
    );

    return (
      <>
        {calendarEvents
          .slice(i * 7, i * 7 + 7)
          .map(({ dateObj, events }: CalendarEventAdminType) => (
            // Date Box
            <div
              key={dateObj ? dateObj.date : Math.random()}
              className="h-full basis-0 grow text-sm font-normal flex flex-col border-b-2 border-text-primary/15 overflow-y-hidden"
            >
              {/* Date */}
              <Date date={dateObj ? dateObj.date : -1} />
              <div className="mt-auto flex flex-col gap-y-0.5 overflow-y-scroll">
                <Events
                  dateObj={dateObj}
                  events={events}
                  setDateObj={setDateObj}
                />
              </div>
            </div>
          ))}
      </>
    );
  };

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

export default CalendarContentsAdmin;
