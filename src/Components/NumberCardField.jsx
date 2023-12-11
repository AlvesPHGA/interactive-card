import React from 'react';

const NumberCardField = ({ value, error, onChange, onBlur }) => {
   return (
      <div className="my-4">
         <label className="text-base text-veryDarkViolet" htmlFor="number">
            CARD NUMBER
         </label>
         <input
            className={`border border-lightGrayshViolet rounded w-full p-2 flex flex-col ${
               error && 'border-errorInput'
            }`}
            type="text"
            name="number"
            id="number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {error && <p className="text-xs text-errorInput">{error}</p>}
      </div>
   );
};

export default NumberCardField;
