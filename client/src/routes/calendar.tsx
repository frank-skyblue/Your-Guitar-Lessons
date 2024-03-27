import React from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dates = [
  -1, -1, -1, -1, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, -1, -1, -1, -1, -1,
  -1,
];

const Calendar: React.FC = () => {
  return (
    <div className="h-full md:px-10 md:py-12 flex flex-col overflow-x-hidden">
      <div className="basis-12 flex justify-between items-center">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="grow bg-content-highlight flex flex-col border-2 border-b-0 border-text-primary/15 overflow-x-scroll">
        {/* Headers */}
        <div className="basis-10 flex divide-x-2 divide-text-primary/15">
          {days.map((day) => (
            <div
              key={day}
              className="h-full min-w-32 basis-0 grow text-sm font-medium flex items-center border-b-2 border-text-primary/15"
            >
              <div className="ml-2">{day}</div>
            </div>
          ))}
        </div>
        <div className="h-full flex flex-col">
          {Array.from({ length: dates.length > 35 ? 6 : 5 }, (_, i) => (
            <div
              key={i}
              className="basis-0 grow flex divide-x-2 divide-text-primary/15"
            >
              {dates.slice(i * 7, i * 7 + 7).map((date) => (
                <div
                  key={date > 0 ? date : Math.random()}
                  className="h-full min-w-32 basis-0 grow text-sm font-normal flex border-b-2 border-text-primary/15"
                >
                  {date > 0 ? (
                    <div className="ml-2">{date}</div>
                  ) : (
                    <div className="h-full w-full bg-text-inactive/10"></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
