import React from 'react';

const types = {
   number: {
      regex: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
      message: 'Formato errado',
   },
};

const useForm = (type) => {
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState(null);

   function validate(value) {
      if (type === false) return true;
      if (value.length === 0) {
         setError('Não deixar em branco!');
         return false;
      } else if (types[type] && !types[type].regex.test(value)) {
         setError(types[type].message);
         return false;
      } else {
         setError(null);
         return true;
      }
   }

   function changeField(target) {
      const validIds = ['name', 'number', 'month', 'year', 'cvc'];

      if (validIds.includes(target.id)) {
         const element = document.querySelector(`#${target.id}Card`);
         if (element) element.innerText = target.value;
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
