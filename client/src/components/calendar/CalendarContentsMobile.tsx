import { getUser } from "../../mock/getMockData";
import { CalendarEventType, DateType, EventType } from "../../util/types";

interface CalendarContentsMobileProps {
  calendarEvents: CalendarEventType[];
  setShowModal: any;
  setModalType: any;
  setDateObj: any;
  setInfoObj: any;
  setPastInfoObj: any;
}

const CalendarContentsMobile: React.FC<CalendarContentsMobileProps> = ({
  calendarEvents,
  setShowModal,
  setModalType,
  setDateObj,
  setInfoObj,
  setPastInfoObj,
}) => {
  const user = getUser();

  const Events = ({
    dateObj,
    setDateObj,
    events,
  }: {
    dateObj: DateType;
    events: EventType[];
    setDateObj: any;
  }) => (
    <>
      {events.map(({ type, time, address, fileObj }: any) => (
        <div
          key={time}
          className={`${
            type === "past"
              ? "bg-past-highlight"
              : type === "booked"
              ? "bg-booked-highlight"
              : "bg-available-highlight"
          } flex justify-between border-l-4 border-text-primary/50 px-1 py-1.5 rounded-sm`}
          onClick={() => {
            setModalType(type);
            setShowModal(true);
            setDateObj(dateObj);
            setInfoObj({ user, address, time });
            if (type === "past") setPastInfoObj(fileObj);
          }}
        >
          <div className="text-xs font-semibold">{time}</div>
          {address && <div className="text-xs">{address}</div>}
        </div>
      ))}
    </>
  );

  return (
    <div className="md:hidden grow flex flex-col gap-y-3 overflow-y-scroll">
      {calendarEvents.map(
        ({ dateObj, events }: { dateObj: DateType; events: any }) =>
          events.length > 0 && (
            <div key={dateObj!.date} className="flex flex-col gap-y-1">
              {/* Date */}
              <div className="text-sm font-normal text-center border-b-2 border-text-primary/15">
                {dateObj!.date}
              </div>
              {/* Events */}
              <div className="flex flex-col gap-y-0.5 overflow-y-scroll">
                <Events
                  dateObj={dateObj}
                  events={events}
                  setDateObj={setDateObj}
                />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CalendarContentsMobile;
