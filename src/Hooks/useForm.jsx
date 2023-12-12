import React from "react";

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Não deixar em branco!");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function changeField(target) {
    const nameCard = document.querySelector("#nameCard");
    const numberField = document.querySelector("#numberField");
    const monthCard = document.querySelector("#monthCard");
    const yearCard = document.querySelector("#yearCard");
    const cvcCard = document.querySelector("#cvcCard");

    if (target.id === "name") {
      nameCard.innerText = target.value;
    } else if (target.id === "number") {
      numberField.innerText = target.value;
    } else if (target.id === "month") {
      monthCard.innerText = target.value;
    } else if (target.id === "year") {
      yearCard.innerText = target.value;
    } else if (target.id === "cvc") {
      cvcCard.innerText = target.value;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
    changeField(target);
  }

  return {
    value,
    setValue,
    error,

    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
