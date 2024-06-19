import React, { useState } from 'react'
import style from "../Assents/Style/Auth.module.css";

const CustomDropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
  
    const handleDropdownToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value) => {
      setSelectedValue(value);
      onChange(value);
      setIsOpen(false);
    };
  
    return (
      <div className={style.dropdownContainer}>
        <div className={style.dropdownButton} onClick={handleDropdownToggle}>
          {selectedValue || 'Select your email'}
        </div>
        <div className={[style.dropdownList, `${isOpen ? 'show' : ''}`].join(" ")}>
          {options.map((option) => (
            <div
              key={option}
              className={style.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CustomDropdown
