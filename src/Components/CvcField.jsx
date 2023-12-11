import React from "react";

const CvcField = ({ value, setValue }) => {
  function handleChange({ target }) {
    const cvc = document.querySelector("#cvc");
    setValue(target.value);
    cvc.innerText = target.value;
  }
  return (
    <div>
      <label htmlFor="cvc">CVC</label>
      <input
        className="border border-lightGrayshViolet rounded w-36 p-1 flex flex-col"
        type="text"
        name="cvc"
        id="cvc"
        placeholder="e.g. 123"
        onChange={handleChange}
      />
    </div>
  );
};

export default CvcField;
