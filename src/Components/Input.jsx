import React from 'react';

const Input = ({ label, id, value, setValue, ...props }) => {
   function handleChange({ target }) {
      console.log(target.value);
   }
   return (
      <div>
         <label className="text-base text-veryDarkViolet" htmlFor={id}>
            {label}
         </label>
         <input
            type="text"
            id={id}
            {...props}
            value={value}
            onChange={handleChange}
         />
      </div>
   );
};

export default Input;
