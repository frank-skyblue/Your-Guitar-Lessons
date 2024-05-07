import React from "react";
import { DateType, InfoType } from "../../util/types";
import { days, months } from "../../util/constants";

interface AvailableModalProps {
  dateObj: DateType;
  infoObj: InfoType;
  setShowModal: any;
}

const AvailableModal: React.FC<AvailableModalProps> = ({
  dateObj,
  infoObj,
  setShowModal,
}) => {
  const Header = () => {
    return (
      <div className="flex flex-col p-3 pb-1 border-b border-solid border-text-primary/50 rounded-t">
        <h3 className="text-xl font-semibold">
          {days[dateObj!.day]} {months[dateObj!.month]} {dateObj!.date},{" "}
          {dateObj!.year} - {infoObj.time}
        </h3>
        <p>{infoObj.address}</p>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="flex justify-between p-3 pt-4 border-t border-solid border-text-primary/50 rounded-b">
        <button
          className="bg-available-highlight text-xs font-bold uppercase px-8 py-2 outline-none rounded"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Book
        </button>
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
            <Footer />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AvailableModal;
