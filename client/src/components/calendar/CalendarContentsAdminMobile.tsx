import { getUser } from "../../mock/getMockData";
import {
  CalendarEventType,
  DateType,
  EventAdminType,
  EventType,
} from "../../util/types";

interface CalendarContentsAdminMobileProps {
  calendarEvents: CalendarEventType[];
  setShowModal: any;
  setModalType: any;
  setDateObj: any;
  setInfoObj: any;
  setPastInfoObj: any;
}

const CalendarContentsAdminMobile: React.FC<
  CalendarContentsAdminMobileProps
> = ({
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
            } flex border-l-4 border-text-primary/50 px-1 py-1.5 rounded-sm`}
            onClick={() => {
              setModalType(type);
              setShowModal(true);
              setDateObj(dateObj);
              setInfoObj({ user: student, address, time });
              if (type === "past") setPastInfoObj(fileObj);
            }}
          >
            <div className="basis-1/3 text-left text-xs font-semibold">
              {time}
            </div>
            <div className="basis-1/3 text-center text-xs">{student}</div>
            {address && (
              <div className="basis-1/3 text-right text-xs">{address}</div>
            )}
          </div>
        )
      )}
    </>
  );

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

export default CalendarContentsAdminMobile;
