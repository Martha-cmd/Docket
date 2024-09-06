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
      <main className="w-full max-h-full flex flex-col py-5 px-16 gap-16 ml-[20%] border-gray-200 border-l-[1px]">
        <Search onSearch={handleSearch} />
        <Notes notes={filteredNotes} setNotes={setNotes} />
      </main>
    </>
  );
};

export default Body;
