import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <>
      <form>
        <div className="flex items-center gap-2">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
