import React from 'react';

const NumberCardField = ({ value, textError, onChange, onBlur }) => {
   return (
      <div className="my-4">
         <label className="text-base text-veryDarkViolet" htmlFor="number">
            CARD NUMBER
         </label>
         <input
            className={`border border-lightGrayshViolet rounded w-full p-2 flex flex-col ${
               textError ? 'border-errorInput' : 'border-lightGrayshViolet'
            }`}
            type="text"
            name="number"
            id="number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {textError && <p className="text-xs text-errorInput">{textError}</p>}
      </div>
   );
};

export default NumberCardField;
