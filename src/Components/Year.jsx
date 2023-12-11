import React from 'react';

const Year = ({ value, error, onChange, onBlur }) => {
   return (
      <input
         className={`border border-lightGrayshViolet rounded p-1 w-20 ${
            error && 'border-errorInput'
         }`}
         type="text"
         name="year"
         id="year"
         placeholder="YY"
         value={value}
         onChange={onChange}
         onBlur={onBlur}
      />
   );
};

export default Year;