import React from 'react';

const Month = ({ value, textError, onChange, onBlur }) => {
   return (
      <input
         className={`border border-lightGrayshViolet rounded p-1 w-20`}
         type="text"
         name="month"
         id="month"
         placeholder="MM"
         value={value}
         onChange={onChange}
         onBlur={onBlur}
      />
   );
};

export default Month;
