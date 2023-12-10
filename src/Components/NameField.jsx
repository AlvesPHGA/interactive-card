import React from "react";

const NameField = () => {
  return (
    <div>
      <label className="text-base text-veryDarkViolet" htmlFor="name">
        CARDHOLDER NAME
      </label>
      <input
        className="border border-lightGrayshViolet rounded w-full p-2 flex flex-col"
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Jane Appleseed"
      />
    </div>
  );
};

export default NameField;
