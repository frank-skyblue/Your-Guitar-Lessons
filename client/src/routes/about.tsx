import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const About: React.FC = () => {
  return (
    <div className="h-full bg-[url('assets/primary-bg.png')] bg-cover bg-right md:bg-center">
      <main className="h-full flex">
        {/* Positioning Div Div */}
        <div className="basis-0 md:basis-1/3"></div>
        {/* Main Div */}
        <div className="basis-full md:basis-2/3 flex flex-col justify-between px-3 py-8 md:px-24 lg:px-32 xl:px-48 2xl:px-64 md:py-20">
          <div className="flex flex-col gap-y-5">
            <Title />
            <Content />
          </div>
          <Navigation />
        </div>
      </main>
    </div>
  );
};

const Title: React.FC = () => {
  return <h1 className="text-2xl font-normal text-text-primary">About</h1>;
};

const Content: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* General Information */}
      <div className="flex flex-col items-center md:text-lg">
        <div className="mb-2 font-bold">General Information</div>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div>Lesson Location</div>
          <div className="italic text-end">
            17 Anndale Dr., North York M2N2W7
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div>WeChat ID</div>
          <div className="italic text-end">frankstkong</div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div>Guitar Type</div>
          <div className="italic text-end">acoustic/electric</div>
        </div>
      </div>
      {/* Rates */}
      <div className="flex flex-col items-center md:text-lg">
        <div className="mb-2 font-bold">Rates</div>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div>Trial</div>
          <div className="italic text-end">
            25CAD/30min lesson + consultation
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div>Acoustic/Electric</div>
          <div className="italic text-end">300CAD/5 x 1-hr lessons</div>
        </div>
      </div>
      {/* Additional Information */}
      <div className="md:text-lg text-text-primary/60">
        Door-to-door service upon request,{" "}
        <span className="font-bold">rates may vary</span>
      </div>
    </div>
  );
};

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleHomeClick = () => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center md:justify-end text-md">
      <button
        className={`flex justify-center items-center px-12 md:px-4 py-2 rounded-lg transition-colors bg-dashboard hover:bg-dashboard/80 cursor-pointer`}
        onClick={handleHomeClick}
        title={isAuthenticated ? "Go to Home" : "Login required to access Home"}
      >
        <HomeIcon className="h-6 w-6" />
        <span className="ml-2 hidden md:inline-block">Home</span>
      </button>
    </div>
  );
};

export default About;
