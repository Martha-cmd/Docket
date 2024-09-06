import React from "react";
import Note from "./Note";

const Notes = ({ notes, setNotes }) => {
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);

    setNotes(updatedNotes);
    localStorage.setItem("docketNotes", JSON.stringify(updatedNotes));
  };
  return (
    <>
      <main className="w-full h-full flex flex-col gap-16">
        <h1 className="font-bold text-5xl">Notes</h1>

        {notes.length > 0 ? (
          <div className="w-full flex flex-wrap gap-10">
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
        ) : (
          <p>No results found</p>
        )}
      </main>
    </>
  );
};

export default Notes;
