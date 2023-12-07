import React from 'react';

const Input = ({ legend, id, ...props }) => {
   return (
      <div className="flex flex-col">
         <label htmlFor={id}>{legend}</label>
         <input
            className="border rounded w-fit p-1"
            type="text"
            id={id}
            {...props}
         />
      </div>
   );
};

export default Input;
