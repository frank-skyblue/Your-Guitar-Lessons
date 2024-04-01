import React from "react";
import { DateType, InfoType } from "../../util/types";

interface PastModalProps {
  dateObj: DateType;
  infoObj: InfoType;
  setShowModal: any;
}

const PastModal: React.FC<PastModalProps> = ({
  dateObj,
  infoObj,
  setShowModal,
}) => {
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
    return (
      <div className="px-3 py-2">
        <h4>Lesson 1</h4>
        <p className="text-text-clickable underline">file.pdf</p>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="flex justify-center py-3 border-t border-solid border-text-primary/50 rounded-b">
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

export default PastModal;
