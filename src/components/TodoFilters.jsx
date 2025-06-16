import React, { useState } from "react";
import { useTodo } from "../contexts";
import { CiFilter } from "react-icons/ci";

const TodoFilters = () => {
  const { filter, setFilter } = useTodo();
  const [open, setOpen] = useState(false);

  const filters = ["all", "active", "completed"];

  const handleSelect = (type) => {
    setFilter(type);
    setOpen(false);
  };

  return (
    <div className="relative flex justify-center my-4">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer transition-all"
      >
        <CiFilter  className={`transition-transform ${open ? "rotate-180" : ""}`} />
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </button>

      {open && (
        <div className="absolute top-full mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-50 transition-all">
          {filters.map((type) => (
            <button
              key={type}
              onClick={() => handleSelect(type)}
              className={`block w-full text-left px-4 py-2 transition-colors duration-150 hover:bg-gray-200 cursor-pointer ${
                type === filter ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoFilters;
