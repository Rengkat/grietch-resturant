import React from "react";
import images from "../constants/images";
import SubHeader from "./subHeader";

function Hero() {
  return (
    <section className="bg-dark w-full h-full md:h-screen flex justify-center items-center  ">
      {/* ---------------------HERO MAIN FLEX--------------------- */}
      <div className="central__hero__flex flex-col md:flex-row  w-11/12 mx-auto h-5/6 flex border-2  ">
        {/* -------------------HERO INFO LEFT--------------------- */}
        <div className="hero__info md:w-1/2 flex justify-center items-center h-full  ">
          <div className="container w-3/4 p-5">
            <SubHeader title="Get the new flavour" />
            <h1 className="hero-text text-5xl lg:text-7xl font-bold capitalize font-Cormorant text-gold leading-10">
              the key to find dining
            </h1>{" "}
            <p className=" text-gray my-2 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              voluptatem eum ullam eveniet laudantium harum, dolor rem at dolore
              qui?
            </p>{" "}
            <button className=" bg-gold capitalize font-Cormorant py-2 px-3 rounded-md shadow-md mt-2">
              expore menu
            </button>
          </div>
        </div>
        {/* ------------------HERO IMAGE RIGHT------------------- */}

        <div className="info__center w-full md:w-1/2 py-10 text-center flex justify-center items-center ">
          <img
            src={images.welcome}
            alt="Jucy image"
            className="hero-food w-72 md:w-3/4 lg:w-10/12"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
