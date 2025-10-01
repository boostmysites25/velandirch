import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ 
  options, 
  value, 
  onChange, 
  placeholder, 
  className = "", 
  style = {},
  register,
  name,
  validation = {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get the register props
  const registerProps = register ? register(name, validation) : {};
  
  // Extract onChange from registerProps to avoid passing it to the hidden input
  // We'll handle onChange manually
  const { onChange: rhfOnChange, ...restRegisterProps } = registerProps;

  const handleSelect = (optionValue, optionLabel) => {
    onChange(optionValue);
    setIsOpen(false);
    
    // Update the hidden input value directly and trigger react-hook-form onChange
    if (inputRef.current && rhfOnChange) {
      // Set the value directly on the DOM element
      inputRef.current.value = optionValue;
      
      // Create a synthetic change event with the updated value
      const syntheticEvent = {
        target: inputRef.current
      };
      rhfOnChange(syntheticEvent);
    }
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`cursor-pointer ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        style={style}
      >
        <div className="flex items-center justify-between">
          <span className={value ? "text-black" : "text-slate-800"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-sm shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-150"
              onClick={() => handleSelect(option.value, option.label)}
            >
              <span className="text-black">{option.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Hidden input for form validation */}
      <input
        type="hidden"
        {...restRegisterProps}
        ref={(e) => {
          inputRef.current = e;
          if (restRegisterProps.ref) restRegisterProps.ref(e);
        }}
        value={value}
      />
    </div>
  );
};

export default CustomDropdown;
