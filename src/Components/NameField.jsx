import React from 'react';

const NameField = ({ value, error, onChange, onBlur }) => {
   return (
      <div className="ss:text-sm">
         <label
            className="text-base text-veryDarkViolet ss:text-sm"
            htmlFor="name"
         >
            CARDHOLDER NAME
         </label>
         <input
            className={` border border-lightGrayshViolet rounded w-full p-2 flex flex-col focus:border-veryDarkViolet ${
               error && 'border-[#FF5252]'
            }`}
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Appleseed"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {error && <p className="text-xs text-errorInput">{error}</p>}
      </div>
   );
};

export default NameField;
