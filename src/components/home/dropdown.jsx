import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ title, options, isDisabled = false, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isDisabled) setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // Notify parent when an option is selected
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${isDisabled ? "bg-gray-200 cursor-not-allowed" : "bg-gray-100"}`}
        onClick={toggleDropdown}
      >
        <span>{selectedOption || title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && !isDisabled && (
        <ul className="absolute w-full bg-white border border-gray-200 mt-2 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Prop validation for title, options
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDisabled: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default Dropdown;
