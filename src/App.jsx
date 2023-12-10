import React from "react";
import Input from "./Components/Input";
import Cards from "./Components/Cards";

const inputDefaultCSS = {
  def01: "border border-lightGrayshViolet rounded",
};

function App() {
  const [name, setName] = React.useState("");
  const [numberCard, setNumberCard] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [cvc, setCVC] = React.useState("");

  return (
    <main className="font-spaceGrotesk relative text-lg border h-screen bg-mainDesktop bg-custom bg-no-repeat">
      <section className="absolute transform -translate-x-1/2 left-2/4 -translate-y-1/2 top-2/4  flex mx-auto justify-center gap-40 items-center w-[1200px]">
        <Cards />
        <form className="w-fit">
          <div>
            <label className="text-base text-veryDarkViolet" htmlFor="name">
              CARDHOLDER NAME
            </label>
            <input
              className="border border-lightGrayshViolet rounded w-full p-2 flex flex-col"
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Jane Appleseed"
            />
          </div>

          <div className="my-4">
            <label className="text-base text-veryDarkViolet" htmlFor="number">
              CARD NUMBER
            </label>
            <input
              className="border border-lightGrayshViolet rounded w-full p-2 flex flex-col"
              type="text"
              name="number"
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
                <input
                  className="border border-lightGrayshViolet rounded p-1 w-20"
                  type="text"
                  name="month"
                  id="month"
                  placeholder="MM"
                />

                <input
                  className="border border-lightGrayshViolet rounded p-1 w-20"
                  type="text"
                  name="year"
                  id="year"
                  placeholder="YY"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cvc">CVC</label>
              <input
                className="border border-lightGrayshViolet rounded w-36 p-1 flex flex-col"
                type="text"
                name="cvc"
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
