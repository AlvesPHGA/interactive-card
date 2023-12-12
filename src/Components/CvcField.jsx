import React from 'react';

const CvcField = ({ value, textError, onChange, onBlur }) => {
   //  function handleChange({ target }) {
   //     const cvc = document.querySelector('#cvc');
   //     setValue(target.value);
   //     cvc.innerText = target.value;
   //  }
   return (
      <div>
         <label htmlFor="cvc">CVC</label>
         <input
            className={`border border-lightGrayshViolet rounded w-36 p-1 flex flex-col ${
               textError && 'border-errorInput'
            }`}
            type="text"
            name="cvc"
            id="cvc"
            placeholder="e.g. 123"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {textError && <p className="text-xs text-errorInput">{textError}</p>}
      </div>
   );
};

export default CvcField;
