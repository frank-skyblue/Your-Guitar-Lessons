import React from "react";
import { DateType, EventType, InfoType } from "../../util/types";
import { TrashIcon } from "@heroicons/react/24/solid";

interface BookedModalAdminProps {
  dateObj: DateType;
  infoObj: InfoType;
  setShowModal: any;
}

const BookedModalAdmin: React.FC<BookedModalAdminProps> = ({
  dateObj,
  infoObj,
  setShowModal,
}) => {
  const Header = () => {
    return (
      <div className="flex flex-col p-3 pb-1 border-b border-solid border-text-primary/50 rounded-t">
        <h3 className="text-xl">
          <span className="font-semibold block md:inline">{infoObj.user}</span>{" "}
          <span className="hidden md:inline">-</span> {dateObj.day}{" "}
          {dateObj.month} {dateObj.date}, {dateObj.year} @ {infoObj.time}
        </h3>
        <p>{infoObj.address}</p>
      </div>
    );
  };

  const Content = () => {
    return (
      <form className="px-3 py-2 flex flex-col gap-y-1">
        <label className="text-sm font-semibold">Change Date</label>
        <input
          type="date"
          className="border border-solid bg-content-highlight border-text-primary/50 rounded text-sm w-1/2 p-1"
        />
        <label className="text-sm font-semibold">Change Time</label>
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-2">
          <select
            className="border border-solid bg-content-highlight border-text-primary/50 rounded text-sm w-1/2 p-1"
            defaultValue={infoObj.time.match(/\d+/)![0]}
          >
            {Array.from(Array(12).keys())
              .map((i) => i + 1)
              .map((time) => (
                <option key={time} value={time}>
                  {time}:00
                </option>
              ))}
          </select>
          <select
            className="border border-solid bg-content-highlight border-text-primary/50 rounded text-sm w-1/2 p-1"
            defaultValue={infoObj.time.match(/[a-z]+/i)![0]}
          >
            {["am", "pm"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <label className="text-sm font-semibold">Change Address</label>
        <input
          type="text"
          className="border border-solid bg-content-highlight border-text-primary/50 rounded text-sm w-1/2 p-1"
          defaultValue={infoObj.address}
        />
      </form>
    );
  };

  const Footer = () => {
    return (
      <div className="flex justify-between p-3 pt-4 border-t border-solid border-text-primary/50 rounded-b">
        <div className="flex gap-x-2">
          <button
            className="bg-available-highlight text-xs font-bold uppercase px-8 py-2 outline-none rounded"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Confirm
          </button>
          <button
            className="bg-text-warning text-xs font-bold uppercase px-4 py-2 outline-none rounded"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>

        <button
          className="bg-booked-highlight text-xs font-bold uppercase px-4 py-2 outline-none rounded"
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

export default BookedModalAdmin;
