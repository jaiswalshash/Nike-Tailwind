import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

function Hero() {
  return (
    <section
      id="home"
      className="w-fulll p-2 flex xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red ">Our Winter Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl 
        max-sm:text-[72px] max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap
            z-10 relative pr-10
          ">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6
        mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innvation for
          your active life.
        </p>
        <Button label="Shop Now!" imageURL={arrowRight} />
        <div
          className="flex justify-start items-start
          flex-wrap w-full mt-20 gap-16
        "
        >
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-bold font-palanquin">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
