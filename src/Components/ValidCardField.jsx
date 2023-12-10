import React from "react";

const ValidCardField = () => {
  return (
    <div>
      <label className="text-base text-veryDarkViolet">EXP. DATE (MM/YY)</label>
      <div className="flex gap-x-2.5">
        <input
          className="border border-lightGrayshViolet rounded p-1 w-20"
          type="text"
          name="month"
          id="month"
          placeholder="MM"
        />

        <input
          className="border border-lightGrayshViolet rounded p-1 w-20"
          type="text"
          name="year"
          id="year"
          placeholder="YY"
        />
      </div>
    </div>
  );
};

export default ValidCardField;
