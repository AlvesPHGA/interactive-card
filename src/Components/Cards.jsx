import React from "react";

const imgCard = {
  back: "bg-center bg-thousand bg-no-repeat w-96 h-52",
};

const Cards = () => {
  return (
    <section className="flex flex-col gap-8">
      <div
        className={`bg-cardFront px-7 py-5 flex flex-col justify-end relative ${imgCard.back}`}
      >
        <img
          className="absolute left-7 top-5"
          src="../public/svg/card-logo.svg"
          alt=""
        />

        <div className="text-white">
          <h1 id="numberField" className="mb-3 text-2xl tracking-widest">
            0000 0000 0000 0000
          </h1>
          <div className="flex justify-between uppercase text-base items-center">
            <span id="nameCard">Person name</span>
            <span>00/00</span>
          </div>
        </div>
      </div>
      <div className={`bg-cardBack ml-16 relative ${imgCard.back}`}>
        <span className="absolute top-[5.75rem] left-[19.5rem] text-white text-sm">
          000
        </span>
      </div>
    </section>
  );
};

export default Cards;
