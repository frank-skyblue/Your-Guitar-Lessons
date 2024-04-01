import React from "react";
import { DateType, InfoType } from "../../util/types";

const PastModalAdmin = ({
  dateObj,
  infoObj,
  setShowModal,
}: {
  dateObj: DateType;
  infoObj: InfoType;
  setShowModal: any;
}) => {
  const Header = () => {
    return (
      <div className="flex flex-col p-3 border-b border-solid border-text-primary/50 rounded-t">
        <h3 className="text-2xl tracking-wide">
          <span className="text-3xl font-semibold">{infoObj.user}</span> -{" "}
          {dateObj.day} {dateObj.month} {dateObj.date}, {dateObj.year}
        </h3>
        <p>{infoObj.address}</p>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="relative p-3 flex-auto text-sm">
        <div>
          <h4 className="font-semibold">Current File</h4>
          <p className="text-text-clickable underline">file.pdf</p>
        </div>
        <div>
          <h4 className="font-semibold">Attach File</h4>
          <p className="text-text-clickable underline">file.pdf</p>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="flex items-center justify-end p-6 border-t border-solid border-text-primary/50 rounded-b">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Save Changes
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

export default PastModalAdmin;
