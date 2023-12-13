import React from 'react';
import Cards from './Components/Cards';
import NameField from './Components/NameField';
import NumberCardField from './Components/NumberCardField';
import CvcField from './Components/CvcField';
import Button from './Components/Button';
import Month from './Components/Month';
import Year from './Components/Year';

import useForm from './Hooks/useForm';

function App() {
   const name = useForm('');
   const number = useForm('number');
   const month = useForm('');
   const year = useForm('');
   const cvc = useForm('');

   function handleSubmit(ev) {
      ev.preventDefault();

      if (
         name.validate() &&
         number.validate() &&
         month.validate() &&
         year.validate() &&
         cvc.validate()
      ) {
         alert('Informações enviadas com sucesso');
      } else {
         alert('Por favor, tente mais tarde.');
      }
   }

   return (
      <main className="font-spaceGrotesk relative text-lg border h-screen bg-mainDesktop bg-custom bg-no-repeat">
         <section className="absolute transform -translate-x-1/2 left-2/4 -translate-y-1/2 top-2/4  flex mx-auto justify-center gap-40 items-center w-[1200px]">
            <Cards />

            <form onSubmit={handleSubmit} className="w-fit">
               <NameField {...name} />
               <NumberCardField {...number} />

               <div className="flex  gap-x-5">
                  <div className="relative">
                     <label className="text-base text-veryDarkViolet">
                        EXP. DATE (MM/YY)
                     </label>
                     <div className="relative h-10">
                        <div className="flex gap-x-2.5">
                           <Month {...month} />
                           <Year {...year} />
                        </div>
                        {month.error && (
                           <p className="absolute top-full text-xs text-errorInput">
                              {month.error}
                           </p>
                        )}
                        {year.error && (
                           <p className="absolute top-full text-xs text-errorInput">
                              {year.error}
                           </p>
                        )}
                     </div>
                  </div>
                  <CvcField {...cvc} />
               </div>

               <Button />
            </form>
         </section>
      </main>
   );
}

export default App;
