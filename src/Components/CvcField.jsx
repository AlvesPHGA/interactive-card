import React from "react";

const CvcField = () => {
  return (
    <div>
      <label htmlFor="cvc">CVC</label>
      <input
        className="border border-lightGrayshViolet rounded w-36 p-1 flex flex-col"
        type="text"
        name="cvc"
        id="cvc"
        placeholder="e.g. 123"
      />
    </div>
  );
};

export default CvcField;
