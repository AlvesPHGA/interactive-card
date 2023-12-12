import React from 'react';

const ValidCardField = ({ value, textError, onChange, onBlur }) => {
   return (
      <div>
         <label className="text-base text-veryDarkViolet">
            EXP. DATE (MM/YY)
         </label>
         <div className="flex gap-x-2.5">
            <input
               className="border border-lightGrayshViolet rounded p-1 w-20"
               type="text"
               name="month"
               id="month"
               placeholder="MM"
               value={value}
               onChange={onChange}
               onBlur={onBlur}
            />

            <input
               className="border border-lightGrayshViolet rounded p-1 w-20"
               type="text"
               name="year"
               id="year"
               placeholder="YY"
               value={value}
               onChange={onChange}
               onBlur={onBlur}
            />
         </div>
         {textError && <p className="text-xs text-errorInput">{textError}</p>}
      </div>
   );
};

export default ValidCardField;
