import React from "react";
import { getMockCalendarEventsAdmin } from "../mock/getMockData";
import CalendarContentsAdmin from "../components/calendar/CalendarContentsAdmin";
import CalendarHeaderAdmin from "../components/calendar/CalendarHeaderAdmin";
import CalendarContentsAdminMobile from "../components/calendar/CalendarContentsAdminMobile";
import PastModalAdmin from "../components/modals/PastModalAdmin";
import BookedModalAdmin from "../components/modals/BookedModalAdmin";
import AvailableModalAdmin from "../components/modals/AvailableModalAdmin";
import {
  DateType,
  LessonsStatusType,
  InfoType,
  PastInfoType,
  CalendarEventAdminType,
  LessonsStatus,
} from "../models/types";

const AdminCalendar: React.FC = () => {
  const calendarEvents: CalendarEventAdminType[] = getMockCalendarEventsAdmin();
  const [dateObj, setDateObj] = React.useState<DateType | null>(null);
  const [infoObj, setInfoObj] = React.useState<InfoType | null>(null);
  const [pastInfoObj, setPastInfoObj] = React.useState<PastInfoType | null>(
    null
  );
  const [showModal, setShowModal] = React.useState<Boolean>(false);
  const [modalType, setModalType] = React.useState<LessonsStatusType>(
    LessonsStatus.EMPTY
  );

  return (
    <>
      <div
        className={`h-full p-2 gap-y-2 md:gap-y-0 md:px-10 md:py-5 flex flex-col ${
          showModal ? "blur-sm" : ""
        }`}
      >
        <CalendarHeaderAdmin />
        <CalendarContentsAdmin
          calendarEvents={calendarEvents}
          setShowModal={setShowModal}
          setModalType={setModalType}
          setDateObj={setDateObj}
          setInfoObj={setInfoObj}
          setPastInfoObj={setPastInfoObj}
        />
        <CalendarContentsAdminMobile
          calendarEvents={calendarEvents}
          setShowModal={setShowModal}
          setModalType={setModalType}
          setDateObj={setDateObj}
          setInfoObj={setInfoObj}
          setPastInfoObj={setPastInfoObj}
        />
      </div>
      {showModal ? (
        <Modal
          dateObj={dateObj}
          infoObj={infoObj}
          pastInfoObj={pastInfoObj}
          modalType={modalType}
          setShowModal={setShowModal}
        />
      ) : null}
    </>
  );
};

const Modal = ({
  dateObj,
  infoObj,
  pastInfoObj,
  modalType,
  setShowModal,
}: any) => {
  switch (modalType) {
    case "past":
      return (
        <PastModalAdmin
          dateObj={dateObj}
          infoObj={infoObj}
          pastInfoObj={pastInfoObj}
          setShowModal={setShowModal}
        />
      );
    case "booked":
      return (
        <BookedModalAdmin
          dateObj={dateObj}
          infoObj={infoObj}
          setShowModal={setShowModal}
        />
      );
    case "available":
      return (
        <AvailableModalAdmin
          dateObj={dateObj}
          infoObj={infoObj}
          setShowModal={setShowModal}
        />
      );
    default:
      return null;
  }
};

export default AdminCalendar;
