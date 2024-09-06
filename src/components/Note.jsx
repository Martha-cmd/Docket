import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal";

const Note = ({ index, color, date, content, updateContent, onDelete }) => {
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
    setShowModal(true); // Show modal when delete is clicked
  };

  const handleConfirmDelete = () => {
    console.log("Deleting note at index:", index);
    onDelete(); // Trigger delete action
    setShowModal(false); // Close modal after confirmation
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal without deleting
  };

  return (
    <>
      <div
        className={`w-[250px] h-[250px] ${color} rounded-[20px] py-7 px-5 flex flex-col justify-between text-black`}
      >
        <form className="w-full h-full">
          <div className="w-full h-full ">
            <textarea
              className="w-full h-full bg-transparent overflow-scroll placeholder:text-black focus:outline-none resize-none"
              placeholder="This is a Docket note."
              value={note}
              onChange={handleNoteChange}
            ></textarea>
          </div>
        </form>
        <div className="w-full flex justify-between">
          <p className="text-[15px]">{date}</p>
          <MdDelete size={20} onClick={handleDeleteClick} />
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
