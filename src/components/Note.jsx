import React, { useEffect, useState } from "react";
import { MdDelete, MdOpenInFull } from "react-icons/md";
import Modal from "./Modal";

const Note = ({ color, date, content, updateContent, onDelete }) => {
  const [note, setNote] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setNote(content);
  }, [content]);

  const handleNoteChange = (e) => {
    const updatedNote = e.target.value;
    setNote(updatedNote);
    updateContent(updatedNote);
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={`md:w-[250px] w-full md:h-[250px] h-[200px] ${color} rounded-[20px] md:py-5 py-4 md:px-5 px-2 flex flex-col justify-between text-black`}
      >
        <form className="w-full h-full">
          <div className="w-full h-full ">
            <textarea
              className="w-full h-full bg-transparent overflow-scroll placeholder:text-black focus:outline-none resize-none"
              placeholder="Write your note"
              value={note}
              onChange={handleNoteChange}
            ></textarea>
          </div>
        </form>
        <div className="w-full flex justify-between">
          <p className="text-[12px] text-gray-700">{date}</p>
          <MdDelete
            size={15}
            onClick={handleDeleteClick}
            className="text-gray-700"
          />
          {/* <MdOpenInFull
            size={15}
            onClick={handleDeleteClick}
            className="text-gray-700"
          /> */}
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        title="Delete Note"
        message="Are you sure you want to delete this note? This action cannot be undone."
      />
    </>
  );
};

export default Note;
