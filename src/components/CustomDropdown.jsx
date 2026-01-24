import React, { useState, useEffect, useRef } from "react";

const CustomDropdown = ({ options, value, onChange, placeholder, className, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        role="combobox"
        disabled={disabled}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-11 w-full items-center justify-between rounded-xl border px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold disabled:cursor-not-allowed disabled:opacity-50 bg-secondary border-border text-foreground transition-all duration-200 ${className}`}
      >
        <span className={`line-clamp-1 text-left ${!value ? "text-muted-foreground" : ""}`}>
          {value || placeholder}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down h-4 w-4 opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-full rounded-md border border-border bg-secondary shadow-md max-h-60 overflow-y-auto">
          <div className="py-1 bg-background">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`relative group transition-all duration-200 ease-in-out flex w-full hover:bg-gold hover:text-black cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-gold-10 ${
                  value === option ? "bg-gold text-black" : "text-foreground"
                }`}
              >
                {value === option && (
                  <div className="absolute left-2 top-2">
                     <svg className={`${value === option ? "group-hover:fill-black" : "fill-white"} `} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill=""><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                  </div>
                )}
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;