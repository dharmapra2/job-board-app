import React, { useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = ({ setSearch }) => {
  const textRef = useRef("");
  console.log("search");
  return (
    <div className="relative my-2">
      <input
        type="text"
        ref={textRef}
        onChange={(event) => setSearch(event.target.value)}
        title="Search by job title, locations, companies"
        placeholder="Search by job title, locations, companies"
        className="w-full py-2 px-9 rounded-3xl border border-gray-300 bg-inherit focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-md text-ellipsis"
      />
      <FiSearch className="absolute left-3 top-3 text-gray-400" />
      <button
        onClick={() => {
          setSearch("");
          textRef.current.value = "";
        }}
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
      >
        <FiX />
      </button>
    </div>
  );
};

export default React.memo(SearchBar);
