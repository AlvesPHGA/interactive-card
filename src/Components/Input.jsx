import React from "react";

const Input = ({ label, id, placeholder, value, setValue }) => {
  function handleInput({ target }) {
    setValue(target.value);
  }
  return (
    <div>
      <label className="text-base text-veryDarkViolet" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
      />
      {value}
    </div>
  );
};

export default Input;
