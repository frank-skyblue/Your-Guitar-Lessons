import React from "react";
import { getMockCalendarEvents } from "../mock/getMockData";
import { PlayIcon, PlusIcon } from "@heroicons/react/24/solid";

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
const calendarEvents = getMockCalendarEvents();

const Calendar: React.FC = () => {
  return (
    <div className="h-full p-2 gap-y-2 md:gap-y-0 md:px-10 md:py-5 flex flex-col">
      <div className="basis-12 flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-between">
        <div className="flex gap-x-2 justify-center items-center">
          <PlayIcon className="w-4 h-4 rotate-180" />
          <div className="text-xl font-semibold">
            {months[new Date().getMonth()]} {new Date().getFullYear()}
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
      <div className="hidden grow bg-content-highlight md:flex flex-col border-2 border-b-0 border-text-primary/15">
        {/* Headers */}
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
        {/* Dates Container */}
        <div className="h-full flex flex-col">
          {Array.from(
            { length: calendarEvents.length > 35 ? 6 : 5 },
            (_, i) => (
              /* Rows */
              <div
                key={i}
                className="basis-0 h-0 grow flex divide-x-2 divide-text-primary/15 overflow-y-hidden"
              >
                {calendarEvents
                  .slice(i * 7, i * 7 + 7)
                  .map(({ date, events }) => (
                    // Date Box
                    <div
                      key={date > 0 ? date : Math.random()}
                      className="h-full basis-0 grow text-sm font-normal flex flex-col border-b-2 border-text-primary/15 overflow-y-hidden"
                    >
                      {/* Date */}
                      <div>
                        {date > 0 ? (
                          <div className="ml-2">{date}</div>
                        ) : (
                          <div className="h-full w-full bg-text-inactive/10"></div>
                        )}
                      </div>
                      {/* Events */}
                      <div className="mt-auto flex flex-col gap-y-0.5 overflow-y-scroll">
                        {events.map(({ type, time, address }) => (
                          <div
                            key={time}
                            className={`${
                              type === "past"
                                ? "bg-past-highlight"
                                : type === "booked"
                                ? "bg-booked-highlight"
                                : "bg-available-highlight"
                            } border-l-4 border-text-primary/50 px-0.5 py-1.5`}
                          >
                            <div className="text-xs font-semibold">{time}</div>
                            {address && (
                              <div className="text-xs">{address}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>
      </div>
      <div className="md:hidden grow flex flex-col gap-y-3 overflow-y-scroll">
        {calendarEvents.map(
          ({ date, events }) =>
            events.length > 0 && (
              <div key={date} className="flex flex-col gap-y-1">
                {/* Date */}
                <div className="text-sm font-normal text-center border-b-2 border-text-primary/15">
                  {date}
                </div>
                {/* Events */}
                <div className="flex flex-col gap-y-0.5 overflow-y-scroll">
                  {events.map(({ type, time, address }) => (
                    <div
                      key={time}
                      className={`${
                        type === "past"
                          ? "bg-past-highlight"
                          : type === "booked"
                          ? "bg-booked-highlight"
                          : "bg-available-highlight"
                      } flex justify-between border-l-4 border-text-primary/50 px-1 py-1.5`}
                    >
                      <div className="text-xs font-semibold">{time}</div>
                      {address && <div className="text-xs">{address}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
      <div className="md:hidden basis-12 flex justify-center items-center bg-text-primary/35 rounded-md">
        <PlusIcon className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Calendar;
