import React from 'react';

const Input = ({ label, id, ...props }) => {
   return (
      <div>
         <label className="text-base text-veryDarkViolet" htmlFor={id}>
            {label}
         </label>
         <input type="text" id={id} {...props} />
      </div>
   );
};

export default Input;
