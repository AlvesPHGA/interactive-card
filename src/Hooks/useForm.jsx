import React from "react";

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.lenght === 0) {
      setError("Preencha o campo corretamente.");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function changeField(target) {
    let nameField = document.querySelector(`#name`);
    if (target.id === "name") {
      nameField.innerText = target.value;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,

    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
