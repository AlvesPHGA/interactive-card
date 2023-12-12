import React from "react";

const NameField = ({ value, error, onChange, onBlur }) => {
  return (
    <div>
      <label className="text-base text-veryDarkViolet" htmlFor="name">
        CARDHOLDER NAME
      </label>
      <input
        className={`border border-lightGrayshViolet rounded w-full p-2 flex flex-col ${
          error && "border-errorInput"
        }`}
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Jane Appleseed"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-xs text-errorInput">{error}</p>}
    </div>
  );
};

export default NameField;
