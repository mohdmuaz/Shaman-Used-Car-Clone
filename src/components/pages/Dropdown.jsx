import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ title, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (onChange) onChange(option);
    setOpen(false);
    setSearchTerm("");
  };

  const handleClearSelection = (e) => {
    e.stopPropagation();
    setSelectedOption("");
    if (onChange) onChange("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-full p-2 text-left border-2 rounded-lg bg-white flex justify-between items-center"
        onClick={handleDropdownClick}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span>{selectedOption || title}</span>

        {selectedOption ? (
          <span
            className="ml-2 cursor-pointer text-xl"
            onClick={handleClearSelection}
          >
            ✕
          </span>
        ) : (
          <span className="ml-2 text-sm">{open ? "▲" : "▼"}</span>
        )}
      </button>

      {/* Dropdown options list */}
      {open && !selectedOption && (
        <div
          className="absolute top-full left-0 w-full bg-white border-2 mt-1 rounded-lg max-h-60 overflow-auto z-10"
          role="menu"
        >
          <div className="p-2">
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="list-none p-2">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  title: "Select an option",
  options: [],
  onChange: () => {},
};

export default Dropdown;
