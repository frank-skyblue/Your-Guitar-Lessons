import React from "react";
import { PlayIcon } from "@heroicons/react/24/outline";
import { months } from "../../util/constants";

const Header: React.FC = () => {
  const date = new Date();
  return (
    <div className="basis-12 flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-between">
      <div className="flex gap-x-2 justify-center items-center">
        <PlayIcon className="w-4 h-4 rotate-180" />
        <div className="text-xl font-semibold">
          {months[date.getMonth()]} {date.getFullYear()}
        </div>
        <PlayIcon className="w-4 h-4" />
      </div>
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
    </div>
  );
};

export default Header;
