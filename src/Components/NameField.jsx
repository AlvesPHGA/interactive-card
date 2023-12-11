import React from "react";

const NameField = ({ value, setValue }) => {
  function handleChange({ target }) {
    let name = document.querySelector("#nameCard");
    setValue(target.value);
    name.innerText = target.value;
  }

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
        onChange={handleChange}
      />
    </div>
  );
};

export default NameField;
