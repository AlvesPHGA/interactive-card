import React from 'react';
import Input from './Components/Input';

function App() {
   const [form, setForm] = React.useState({
      name: '',
      cardNumber: '',
      expDate: '',
      cvc: '',
   });

   return (
      <main className="font-spaceGrotesk text-lg">
         <form className="w-fit">
            <div>
               <Input
                  className="border border-lightGrayshViolet rounded w-full p-2 flex flex-col"
                  label="CARDHOLDER NAME"
                  id="name"
                  placeholder="e.g. Jane Appleseed"
               />
            </div>

            <div className="my-4">
               <Input
                  className="border border-lightGrayshViolet rounded w-full p-2 flex flex-col"
                  label="CARD NUMBER"
                  id="number"
                  placeholder="e.g. 1234 5678 9123 0000"
               />
            </div>

            <div className="flex  gap-x-5">
               <div>
                  <label className="text-base text-veryDarkViolet">
                     EXP. DATE (MM/YY)
                  </label>
                  <div className="flex gap-x-2.5">
                     <Input
                        className="border border-lightGrayshViolet rounded p-1 w-20"
                        id="month"
                        placeholder="MM"
                     />
                     <Input
                        className="border border-lightGrayshViolet rounded p-1 w-20"
                        id="years"
                        placeholder="YY"
                     />
                  </div>
               </div>
               <div>
                  <Input
                     className="border border-lightGrayshViolet rounded w-36 p-1 flex flex-col"
                     label="CVC"
                     id="cvc"
                     placeholder="e.g. 123"
                  />
               </div>
            </div>
            <button className="w-full bg-veryDarkViolet py-3 mt-10 rounded-md cursor-pointer text-white hover:bg-opacity-90">
               Confirm
            </button>
         </form>
      </main>
   );
}

export default App;
