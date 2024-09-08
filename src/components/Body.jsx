import React, { useEffect, useState } from "react";
import Search from "./Search";
import Notes from "./Notes";

const Body = ({ notes, setNotes }) => {
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const handleSearch = (query) => {
    if (query) {
      const searchResults = notes.filter(
        (note) =>
          note.content.toLowerCase().includes(query.toLowerCase()) ||
          note.date.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNotes(searchResults);
    } else {
      setFilteredNotes(notes);
    }
  };
  return (
    <>
      <main className="w-full h-full flex flex-col py-5 pb-20 md:px-16 px-5 gap-16 md:ml-[20%] ">
        <Search onSearch={handleSearch} />
        <Notes notes={filteredNotes} setNotes={setNotes} />
      </main>
    </>
  );
};

export default Body;
