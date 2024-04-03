import React from "react";
import { PlayIcon } from "@heroicons/react/24/outline";
import { months } from "../../util/constants";
import { getMockStudents } from "../../mock/getMockData";

const HeaderAdmin: React.FC = () => {
  const date = new Date("March 1, 2024");
  const students = getMockStudents();

  const DateNavigator = () => {
    return (
      <div className="flex gap-x-2 justify-center items-center">
        <PlayIcon className="w-4 h-4 rotate-180" />
        <div className="text-xl font-semibold">
          {months[date.getMonth()]} {date.getFullYear()}
        </div>
        <PlayIcon className="w-4 h-4" />
      </div>
    );
  };

  const Filter = () => {
    return (
      <div className="flex gap-x-2 justify-center items-center">
        <div className="text-sm">Filter:</div>
        <select className="text-sm py-1 px-2 rounded-md bg-content-highlight border border-text-primary/30">
          {students.map((student) => (
            <option key={student} value={student}>
              {student}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const Legend = () => {
    return (
      <div className="flex gap-x-3 justify-center items-center">
        <div className="text-xs w-24 text-center bg-past-highlight py-1 rounded-md">
          Past
        </div>
        <div className="text-xs w-24 text-center bg-booked-highlight py-1 rounded-md">
          Booked
        </div>
        <div className="text-xs w-24 text-center bg-available-highlight py-1 rounded-md">
          Available
        </div>
      </div>
    );
  };

  return (
    <div className="basis-12 flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-between">
      <DateNavigator />
      <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-4 md-gap-y-0">
        <Filter />
        <Legend />
      </div>
    </div>
  );
};

export default HeaderAdmin;
