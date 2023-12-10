import React from 'react';
import Input from './Components/Input';
import Cards from './Components/Cards';

const inputDefaultCSS = {
   def01: 'border border-lightGrayshViolet rounded',
};

function App() {
   const [form, setForm] = React.useState([]);

   return (
      <main className="font-spaceGrotesk relative text-lg border h-screen bg-mainDesktop bg-custom bg-no-repeat">
         <section className="absolute transform -translate-x-1/2 left-2/4 -translate-y-1/2 top-2/4  flex mx-auto justify-center gap-40 items-center w-[1200px]">
            <Cards />
            <form className="w-fit">
               <div>
                  <Input
                     className={`${inputDefaultCSS.def01} w-full p-2 flex flex-col`}
                     label="CARDHOLDER NAME"
                     id="name"
                     value={form}
                     setValue={setForm}
                     placeholder="e.g. Jane Appleseed"
                  />
               </div>

               <div className="my-4">
                  <Input
                     className={`${inputDefaultCSS.def01} w-full p-2 flex flex-col`}
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
                           className={`${inputDefaultCSS.def01} p-1 w-20`}
                           id="month"
                           placeholder="MM"
                        />
                        <Input
                           className={`${inputDefaultCSS.def01} p-1 w-20`}
                           id="years"
                           placeholder="YY"
                        />
                     </div>
                  </div>
                  <div>
                     <Input
                        className={`${inputDefaultCSS.def01} w-36 p-1 flex flex-col`}
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
         </section>
      </main>
   );
}

export default App;
