import { CalendarEventType, DateType } from "../../util/types";

const CalendarContentsMobile = ({
  calendarEvents,
}: {
  calendarEvents: CalendarEventType[];
}) => {
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

export default CalendarContentsMobile;
