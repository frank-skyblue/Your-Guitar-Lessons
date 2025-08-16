import React from "react";
import useLessons from "../hooks/useLessons";
import { Lesson } from "../models/interfaces";
import { extractDateInfo } from "../util/helpers";

const Home: React.FC = () => {
  const [pastLessons, bookedLessons] = useLessons();

  return (
    <div className="h-full flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:gap-x-6 p-3 md:px-6 md:py-8">
      <div className="basis-3/4 md:basis-3/5 flex flex-col gap-y-3 md:gap-y-6 overflow-hidden">
        <div className="basis-1/3 md:basis-2/6 flex flex-col gap-y-2 overflow-hidden text-center md:text-left">
          <h1 className="text-2xl">Upcoming Lessons</h1>
          <div className="md:bg-content-highlight flex-grow flex flex-col gap-y-2 rounded-md px-2 overflow-hidden">
            <UpcomingLessons bookedLessons={bookedLessons} />
          </div>
        </div>
        <div className="basis-2/3 md:basis-4/6 flex flex-col gap-y-2 overflow-hidden text-center md:text-left">
          <h1 className="text-2xl">Previous Lessons</h1>
          <div className="md:bg-content-highlight flex-grow flex flex-col gap-y-2 rounded-md px-2 overflow-hidden">
            <PreviousLessons pastLessons={pastLessons} />
          </div>
        </div>
      </div>
      <div className="basis-1/4 md:basis-2/5 flex flex-col gap-y-2 order-first md:order-none text-center md:text-left">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="md:bg-content-highlight flex-grow rounded-md">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

const UpcomingLessonsHeaders = ["Day", "Date", "Time", "Location"];

type UpcomingLessonsProps = {
  bookedLessons: Lesson[];
};

const UpcomingLessons: React.FC<UpcomingLessonsProps> = ({ bookedLessons }) => {
  if (bookedLessons.length === 0) {
    return <p>No upcoming lessons</p>;
  }

  return (
    <>
      <div className="flex flex-row">
        {UpcomingLessonsHeaders.map((title, index) => (
          <p key={index} className="text-md font-bold basis-1/5">
            {title}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-y-2 overflow-auto">
        {bookedLessons.map((lesson: Lesson, index: number) => {
          const { day, date: dateStr, time } = extractDateInfo(lesson.date);

          return (
            <div key={index} className="flex flex-row">
              <p key={index} className="text-md text-text-primary/60 basis-1/5">
                {day}
              </p>
              <p key={index} className="text-md text-text-primary/60 basis-1/5">
                {dateStr}
              </p>
              <p key={index} className="text-md text-text-primary/60 basis-1/5">
                {time}
              </p>
              <p key={index} className="text-md text-text-primary/60 basis-1/5">
                {lesson.location}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

const PreviousLessonsHeaders = ["Date", "Description", "Downloadable"];

type PreviousLessonsProps = {
  pastLessons: Lesson[];
};

const PreviousLessons: React.FC<PreviousLessonsProps> = ({ pastLessons }) => {
  if (pastLessons.length === 0) {
    return <p>No previous lessons</p>;
  }

  return (
    <>
      <div className="flex flex-row">
        {PreviousLessonsHeaders.map((title, index) => (
          <p
            key={index}
            className="text-md font-bold first:basis-1/5 basis-2/6"
          >
            {title}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-y-2 overflow-auto">
        {pastLessons.map((lesson: Lesson, index) => {
          const { date: dateStr } = extractDateInfo(lesson.date);

          return (
            <div key={index} className="flex flex-row">
              <p key={index} className="text-md text-text-primary/60 basis-1/5">
                {dateStr}
              </p>
              <p key={index} className="text-md text-text-primary/60 basis-2/6">
                {lesson.description}
              </p>
              <p key={index} className="text-md text-text-primary/60 basis-2/6">
                {lesson.downloadableUrl}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

export default Home;
