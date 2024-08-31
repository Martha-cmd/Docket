import React from "react";
import Search from "./Search";
import Notes from "./Notes";

const Body = () => {
  return (
    <>
      <main className="w-full h-screen flex flex-col py-5 px-16 gap-16">
        <Search />
        <Notes />
      </main>
    </>
  );
};

export default Body;
