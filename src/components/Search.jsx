import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchItem(query);
    onSearch(query);
  };
  return (
    <>
      <form className="w-full">
        <div className="flex items-center gap-2 md:w-[50%] md:mt-0 mt-20">
          <FiSearch width={100} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-gray-400 focus:outline-none bg-transparent"
            value={searchItem}
            onChange={handleSearchChange}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
