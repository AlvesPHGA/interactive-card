import React from 'react';

const NameField = ({ value, textError, onChange, onBlur }) => {
   return (
      <div>
         <label className="text-base text-veryDarkViolet" htmlFor="name">
            CARDHOLDER NAME
         </label>
         <input
            className={`border border-lightGrayshViolet rounded w-full p-2 flex flex-col ${
               textError && 'border-errorInput'
            }`}
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Appleseed"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {textError && <p className="text-xs text-errorInput">{textError}</p>}
      </div>
   );
};

export default NameField;
