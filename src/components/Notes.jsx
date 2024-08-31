import React from "react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const Notes = () => {
  return (
    <>
      <main className="w-full h-full flex flex-col gap-16">
        <h1 className="font-bold text-5xl">Notes</h1>

        <div className="w-full flex flex-wrap gap-10">
          <div className="w-[300px] h-[300px] bg-orange-300 rounded-[20px] py-7 px-5 flex flex-col justify-between">
            <p>This is a Docket note.</p>
            <div className="w-full flex justify-between">
              <p className="text-[15px]">Aug 31 2024</p>
              <BiSolidMessageSquareEdit size={30} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Notes;
