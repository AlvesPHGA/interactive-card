import React from 'react';

const numberCardMask = (value) => {
   return value.replace(/\D/, '');
};

export default numberCardMask;
