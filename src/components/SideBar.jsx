import React, { useState } from "react";
import { IoAddCircle, IoCloseCircle } from "react-icons/io5";
import "./Styles/sideBar.css";
import { CgMenuLeft } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";

const SideBar = ({ createNote }) => {
  const [closeIconSmall, setCloseIconSmall] = useState(true);
  const [closeIconLarge, setCloseIconLarge] = useState(true);
  const [menu, setShowMenu] = useState(false);

  const toggleIconSmall = (e) => {
    e.stopPropagation();
    setCloseIconSmall(!closeIconSmall);
  };

  const toggleIconLarge = (e) => {
    e.stopPropagation();
    setCloseIconLarge(!closeIconLarge);
  };

  const handleMenuToggle = () => {
    setShowMenu(!menu);
    console.log("clicked");
  };

  return (
    <>
      {/* Menu icon for mobile */}
      <div className="w-full md:hidden flex gap-[35%] fixed top-5 left-5">
        <CgMenuLeft size={25} onClick={handleMenuToggle} className="z-50" />
        <h1 className="font-medium text-xl">Docket</h1>
      </div>

      {/* Sidebar for small screens - toggles when menu is clicked */}
      <main
        className={`w-[60%] h-screen fixed z-40 bg-white dark:bg-black flex-col items-center py-10 gap-16 border-gray-200 border-r-[1px] transition-transform duration-500 ease-in-out ${
          menu ? "flex" : "hidden"
        } md:hidden`}
      >
        <div className="w-full flex px-4">
          {" "}
          <RiCloseFill size={25} onClick={handleMenuToggle} />
        </div>
        <h1 className="font-medium text-xl">Docket</h1>
        <div className="w-full flex flex-col items-center gap-7">
          <div
            className={`icon-container transition-transform duration-500 ease-in-out ${
              closeIconSmall ? "rotate-add" : "rotate-close"
            }`}
          >
            {closeIconSmall ? (
              <IoAddCircle size={60} onClick={toggleIconSmall} />
            ) : (
              <IoCloseCircle size={60} onClick={toggleIconSmall} />
            )}
          </div>

          <div
            className={`colors-container w-full flex flex-col items-center gap-5 transition-all duration-700 ease-in-out ${
              closeIconSmall ? "hidden" : "visible"
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

      {/* Sidebar for large screens - always visible */}

      <main className="w-[20%] h-screen fixed md:flex hidden flex-col items-center py-5 gap-16 border-gray-200 border-r-[1px]">
        <h1 className="font-medium text-xl">Docket</h1>
        <div className="w-full flex flex-col items-center gap-7">
          <div
            className={`icon-container transition-transform duration-500 ease-in-out ${
              closeIconLarge ? "rotate-add" : "rotate-close"
            }`}
          >
            {closeIconLarge ? (
              <IoAddCircle size={60} onClick={toggleIconLarge} />
            ) : (
              <IoCloseCircle size={60} onClick={toggleIconLarge} />
            )}
          </div>

          <div
            className={`colors-container w-full flex flex-col items-center gap-5 transition-all duration-700 ease-in-out ${
              closeIconLarge ? "hidden" : "visible"
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
