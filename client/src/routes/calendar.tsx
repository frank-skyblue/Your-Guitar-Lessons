import React from "react";
import { getMockCalendarEvents } from "../mock/getMockData";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarContents from "../components/calendar/CalendarContents";
import CalendarContentsMobile from "../components/calendar/CalendarContentsMobile";
import PastModal from "../components/modals/PastModal";
import BookedModal from "../components/modals/BookedModal";
import AvailableModal from "../components/modals/AvailableModal";
import {
  CalendarEventType,
  DateType,
  ModalType,
  InfoType,
  PastInfoType,
  BookedInfoType,
  AvailableInfoType,
} from "../util/types";

const Calendar: React.FC = () => {
  const calendarEvents: CalendarEventType[] = getMockCalendarEvents();
  const [dateObj, setDateObj] = React.useState<DateType | null>(null);
  const [infoObj, setInfoObj] = React.useState<InfoType | null>(null);
  const [pastInfoObj, setPastInfoObj] = React.useState<PastInfoType | null>(
    null
  );
  const [bookedInfoObj, setBookedInfoObj] =
    React.useState<BookedInfoType | null>(null);
  const [availableInfoObj, setAvailableInfoObj] =
    React.useState<AvailableInfoType | null>(null);
  const [showModal, setShowModal] = React.useState<Boolean>(false);
  const [modalType, setModalType] = React.useState<ModalType>("");

  return (
    <>
      <div
        className={`h-full p-2 gap-y-2 md:gap-y-0 md:px-10 md:py-5 flex flex-col ${
          showModal ? "blur-sm" : ""
        }`}
      >
        <CalendarHeader />
        <CalendarContents
          calendarEvents={calendarEvents}
          setShowModal={setShowModal}
          setModalType={setModalType}
          setDateObj={setDateObj}
          setInfoObj={setInfoObj}
        />
        <CalendarContentsMobile calendarEvents={calendarEvents} />
      </div>
      {showModal ? (
        <Modal
          dateObj={dateObj}
          infoObj={infoObj}
          modalType={modalType}
          setShowModal={setShowModal}
        />
      ) : null}
    </>
  );
};

const Modal = ({ dateObj, infoObj, modalType, setShowModal }: any) => {
  switch (modalType) {
    case "past":
      return (
        <PastModal
          dateObj={dateObj}
          infoObj={infoObj}
          setShowModal={setShowModal}
        />
      );
    case "booked":
      return (
        <BookedModal
          setShowModal={setShowModal}
          dateObj={dateObj}
          infoObj={infoObj}
        />
      );
    case "available":
      return <AvailableModal setShowModal={setShowModal} />;
    default:
      return null;
  }
};

export default Calendar;
