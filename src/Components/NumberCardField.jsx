import React from "react";

const NumberCardField = () => {
  return (
    <div className="my-4">
      <label className="text-base text-veryDarkViolet" htmlFor="number">
        CARD NUMBER
      </label>
      <input
        className="border border-lightGrayshViolet rounded w-full p-2 flex flex-col"
        type="text"
        name="number"
        id="number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
    </div>
  );
};

export default NumberCardField;
