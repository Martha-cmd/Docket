import React from "react";
import Note from "./Note";
import { IoAddCircle } from "react-icons/io5";

const Notes = ({ notes, setNotes, searchQuery }) => {
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);

    setNotes(updatedNotes);
    localStorage.setItem("docketNotes", JSON.stringify(updatedNotes));
  };

  const noNotesCreated = notes.length === 0;
  const noSearchResults =
    searchQuery && notes.every((note) => note === undefined);

  return (
    <>
      <main className="w-full h-full flex flex-col md:gap-10 gap-8">
        <h1 className="font-bold text-5xl">Notes</h1>

        {noSearchResults ? (
          <p className="italic text-gray-700 text-[14px]">No results found</p>
        ) : noNotesCreated ? (
          <div className="flex items-center gap-2 italic text-gray-700 text-[14px]">
            Create your first note with the <IoAddCircle /> icon
          </div>
        ) : (
          <div className="w-full md:flex flex-wrap grid grid-cols-2 md:gap-10 gap-x-2 gap-y-5">
            {notes.map((note, noteIndex) => (
              <Note
                key={noteIndex}
                index={noteIndex}
                color={note.color}
                date={note.date}
                content={note.content}
                updateContent={(content) =>
                  setNotes(
                    notes.map((n, i) =>
                      i === noteIndex ? { ...n, content } : n
                    )
                  )
                }
                onDelete={() => handleDeleteNote(noteIndex)}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Notes;
