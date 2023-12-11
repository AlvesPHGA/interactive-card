import React from "react";
import Cards from "./Components/Cards";
import NameField from "./Components/NameField";
import NumberCardField from "./Components/NumberCardField";
import ValidCardField from "./Components/ValidCardField";
import CvcField from "./Components/CvcField";
import Button from "./Components/Button";
import useForm from "./Hooks/useForm";

const inputDefaultCSS = {
  def01: "border border-lightGrayshViolet rounded",
};

function App() {
  const name = useForm("");
  //const [name, setName] = React.useState("");
  const [numberCard, setNumberCard] = React.useState("");
  const [date, setDate] = React.useState({
    month: "",
    year: "",
  });
  const [cvc, setCVC] = React.useState("");

  return (
    <main className="font-spaceGrotesk relative text-lg border h-screen bg-mainDesktop bg-custom bg-no-repeat">
      <section className="absolute transform -translate-x-1/2 left-2/4 -translate-y-1/2 top-2/4  flex mx-auto justify-center gap-40 items-center w-[1200px]">
        <Cards />

        <form onSubmit={(e) => e.preventDefault()} className="w-fit">
          <NameField {...name} />

          <NumberCardField value={numberCard} setValue={setNumberCard} />

          <div className="flex  gap-x-5">
            <ValidCardField value={date} setValue={setDate} />
            <CvcField value={cvc} setValue={setCVC} />
          </div>

          <Button />
        </form>
      </section>
    </main>
  );
}

export default App;
