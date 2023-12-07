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
         <Input
            legend="CARDHOLDER NAME"
            id="name"
            placeholder="e.g. Jane Appleseed"
         />
      </main>
   );
}

export default App;
