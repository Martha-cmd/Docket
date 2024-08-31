import "./App.css";
import Body from "./components/Body";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <main className="w-full bg-white dark:bg-black text-black dark:text-white flex">
        <SideBar />
        <Body />
      </main>
    </>
  );
}

export default App;
