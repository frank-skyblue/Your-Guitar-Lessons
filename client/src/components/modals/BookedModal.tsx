import React from "react";
import { DateType, EventType, InfoType } from "../../util/types";
import { getAvailableTimes } from "../../mock/getMockData";
import { TrashIcon } from "@heroicons/react/24/solid";

interface BookedModalProps {
  dateObj: DateType;
  infoObj: InfoType;
  setShowModal: any;
}

const BookedModal: React.FC<BookedModalProps> = ({
  dateObj,
  infoObj,
  setShowModal,
}) => {
  const availableTimes = getAvailableTimes();
  const [selectedTime, setSelectedTime] = React.useState<{
    date: number;
    month: string;
    year: number;
    time: string;
  } | null>(null);

  const Header = () => {
    return (
      <div className="flex flex-col p-3 pb-1 border-b border-solid border-text-primary/50 rounded-t">
        <h3 className="text-xl font-semibold">
          {dateObj.day} {dateObj.month} {dateObj.date}, {dateObj.year} -{" "}
          {infoObj.time}
        </h3>
        <p>{infoObj.address}</p>
      </div>
    );
  };

  const Content = () => {
    const Events = ({
      dateObj,
      events,
    }: {
      dateObj: DateType;
      events: EventType[];
    }) => (
      <>
        {events.map(({ type, time, address }: any) => (
          <div
            key={time}
            className={`${
              type === "past"
                ? "bg-past-highlight"
                : type === "booked"
                ? "bg-booked-highlight"
                : "bg-available-highlight"
            } flex justify-between border-l-4 border-text-primary/50 px-1 py-1.5 rounded-sm
            ${
              dateObj.date === selectedTime?.date &&
              dateObj.month === selectedTime?.month &&
              dateObj.year === selectedTime?.year &&
              time === selectedTime?.time
                ? "bg-selected"
                : ""
            }`}
            onClick={() =>
              setSelectedTime({
                date: dateObj.date,
                month: dateObj.month,
                year: dateObj.year,
                time,
              })
            }
          >
            <div className="text-xs font-semibold">{time}</div>
            {address && <div className="text-xs">{address}</div>}
          </div>
        ))}
      </>
    );

    return (
      <div className="px-3 py-2">
        <h4 className="font-semibold">Available Times</h4>
        <div className="flex flex-col gap-y-2">
          {availableTimes.map(
            ({ dateObj, events }: { dateObj: DateType; events: any }) =>
              events.length > 0 && (
                <div key={dateObj.date} className="flex flex-col gap-y-1">
                  {/* Date */}
                  <div className="text-sm font-normal text-center border-b-2 border-text-primary/15">
                    {dateObj.date}
                  </div>
                  {/* Events */}
                  <div className="flex flex-col gap-y-0.5">
                    <Events dateObj={dateObj} events={events} />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="flex justify-between p-3 pt-4 border-t border-solid border-text-primary/50 rounded-b">
        <div className="flex gap-x-2">
          {selectedTime ? (
            <button
              className="bg-text-caution text-sm font-bold uppercase px-4 py-2 outline-none rounded"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Reschedule
            </button>
          ) : (
            <button
              className="bg-text-inactive text-sm font-bold uppercase px-4 py-2 outline-none rounded"
              type="button"
              disabled
            >
              Reschedule
            </button>
          )}
          <button
            className="bg-text-warning text-sm font-bold uppercase px-4 py-2 outline-none rounded"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>

        <button
          className="bg-booked-highlight text-sm font-bold uppercase px-4 py-2 outline-none rounded"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:pl-48"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-xl">
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-content outline-none focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <Header />
            <Content />
            <Footer />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default BookedModal;
