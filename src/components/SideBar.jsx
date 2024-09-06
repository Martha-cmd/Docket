import React, { useState } from "react";
import { IoAddCircle, IoCloseCircle } from "react-icons/io5";
import "./Styles/sideBar.css";
import Note from "./Note";

const SideBar = ({ createNote }) => {
  const [closeIcon, setCloseIcon] = useState(true);

  const toggleIcon = () => {
    setCloseIcon(!closeIcon);
  };

  return (
    <>
      <main className="w-[20%] flex flex-col items-center py-5 gap-16 fixed">
        <h1 className="font-medium text-xl">Docket</h1>
        <div className="w-full flex flex-col items-center gap-7">
          <div
            className={`icon-container transition-transform duration-500 ease-in-out ${
              closeIcon ? "rotate-add" : "rotate-close"
            }`}
          >
            {closeIcon ? (
              <IoAddCircle size={60} onClick={toggleIcon} />
            ) : (
              <IoCloseCircle size={60} onClick={toggleIcon} />
            )}
          </div>

          <div
            className={`colors-container w-full flex flex-col items-center gap-5 transition-all duration-700 ease-in-out ${
              closeIcon ? "hidden" : "visible"
            }`}
          >
            <div
              className="w-4 h-4 rounded-full bg-orange-300 animate-pour"
              onClick={() => createNote("bg-orange-300")}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-red-300 animate-pour delay-150"
              onClick={() => createNote("bg-red-300")}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-purple-400 animate-pour delay-300"
              onClick={() => createNote("bg-purple-400")}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-blue-400 animate-pour delay-450"
              onClick={() => createNote("bg-blue-400")}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-lime-200 animate-pour delay-600"
              onClick={() => createNote("bg-lime-200")}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SideBar;
