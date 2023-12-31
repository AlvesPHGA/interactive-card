import React from 'react';

const CvcField = ({ value, error, onChange, onBlur }) => {
   //  function handleChange({ target }) {
   //     const cvc = document.querySelector('#cvc');
   //     setValue(target.value);
   //     cvc.innerText = target.value;
   //  }
   return (
      <div className="h-10 ss:text-sm ss:h-[70px] ss:pt-2">
         <label className="ss:text-sm" htmlFor="cvc">
            CVC
         </label>
         <input
            className={`border border-lightGrayshViolet rounded w-36 p-1 flex flex-col ${
               error && 'border-[#FF5252]'
            } ss:w-24`}
            maxLength="3"
            type="text"
            name="cvc"
            id="cvc"
            placeholder="e.g. 123"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {error && <p className="text-xs text-errorInput">{error}</p>}
      </div>
   );
};

export default CvcField;
