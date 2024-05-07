import React from "react";
import { DateType, InfoType, PastInfoType } from "../../util/types";
import { TrashIcon } from "@heroicons/react/24/solid";

interface PastModalAdminProps {
  dateObj: DateType;
  infoObj: InfoType;
  pastInfoObj: PastInfoType;
  setShowModal: any;
}

const PastModalAdmin: React.FC<PastModalAdminProps> = ({
  dateObj,
  infoObj,
  pastInfoObj,
  setShowModal,
}) => {
  const Header = () => {
    return (
      <div className="flex flex-col p-3 pb-1 border-b border-solid border-text-primary/50 rounded-t">
        <h3 className="text-xl">
          <span className="font-semibold block md:inline">{infoObj.user}</span>{" "}
          <span className="hidden md:inline">-</span> {dateObj!.day}{" "}
          {dateObj!.month} {dateObj!.date}, {dateObj!.year} @ {infoObj.time}
        </h3>
        <p>{infoObj.address}</p>
      </div>
    );
  };

  const Content = () => {
    const [newDescription, setNewDescription] = React.useState<string>("");
    return (
      <div className="flex flex-col px-3 py-2 gap-y-2">
        <div>
          {pastInfoObj ? (
            <>
              <h4>{pastInfoObj.description}</h4>
              <p className="text-text-clickable underline">
                {pastInfoObj.file}
              </p>
            </>
          ) : (
            <h4>No file yet...</h4>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="font-semibold">Make Changes</h4>
          <input
            className="border border-text-primary/30 rounded px-1"
            type="text"
            placeholder="new description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <p className="text-text-clickable underline">Attach a new file</p>
        </div>
      </div>
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

export default PastModalAdmin;
