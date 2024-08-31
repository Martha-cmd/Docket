import React, { useState } from "react";
import { IoAddCircle, IoCloseCircle } from "react-icons/io5";

const SideBar = () => {
  const [closeIcon, setCloseIcon] = useState(true);

  const toggleIcon = () => {
    setCloseIcon(!closeIcon);
  };
  return (
    <>
      <main className="w-[20%] h-screen flex flex-col items-center border-gray-200 border-r-[1px] py-5 gap-16">
        <h1 className="font-medium text-xl">Docket</h1>
        <div className="w-full flex flex-col items-center gap-7">
          {closeIcon ? (
            <IoAddCircle size={60} onClick={toggleIcon} />
          ) : (
            <IoCloseCircle size={60} onClick={toggleIcon} />
          )}

          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-4 h-4 rounded-full bg-orange-300"></div>
            <div className="w-4 h-4 rounded-full bg-red-300"></div>
            <div className="w-4 h-4 rounded-full bg-purple-400"></div>
            <div className="w-4 h-4 rounded-full bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full bg-lime-200"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SideBar;
