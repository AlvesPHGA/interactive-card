import React from "react";

const useMask = (type) => {
  const [data, setData] = React.useState();

  function mask(element) {
    element.addEventListener("keyup", (ev) => {
      console.log(ev);
    });
  }

  function onChange({ target }) {
    mask(target);
  }

  return {
    data,
    setData,

    onChange,
  };
};

export default useMask;
