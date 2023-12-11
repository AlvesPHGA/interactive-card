import React from 'react';

const useForm = (type) => {
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState(null);

   function validate(value) {
      if (type === false) return true;
      if (value.length === 0) {
         setError('Preencha o campo corretamente.');
         return false;
      } else {
         setError(null);
         return true;
      }
   }

   function changeField(target) {
      const nameCard = document.querySelector('#nameCard');
      const numberField = document.querySelector('#numberField');

      if (target.id === 'name') {
         nameCard.innerText = target.value;
      } else if (target.id === 'number') {
         numberField.innerText = target.value;
      }
   }

   function onChange({ target }) {
      const tgt = target;
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
