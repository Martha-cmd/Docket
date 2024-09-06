import { useEffect, useState } from "react";
import Body from "./components/Body";
import SideBar from "./components/SideBar";

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem("docketNotes");
      console.log(savedNotes);
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Error parsing localStorage data: ", error);
      return [];
    }
  });
  const [date, setDate] = useState("");

  useEffect(() => {
    if (notes) {
      localStorage.setItem("docketNotes", JSON.stringify(notes));
    }
  }, [notes]);

  const createNote = (color) => {
    const today = Date.now();
    const dateToday = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(today);
    setDate(dateToday);
    setNotes([...notes, { color, content: "", date: dateToday }]);
  };
  return (
    <>
      <main className="w-full h-[100svh] bg-white dark:bg-black text-black dark:text-white flex m-0 p-0 overflow-scroll relative">
        <SideBar createNote={createNote} />
        <Body notes={notes} setNotes={setNotes} />
      </main>
    </>
  );
}

export default App;
