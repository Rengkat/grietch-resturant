import React from "react";
import images from "../constants/images";
import wines from "../constants/wineData";
import cocktails from "../constants/cocktailsData";
function Menu({ menu }) {
  return (
    <div className=" w-full py-20 lg:py-64 bg-dark">
      <div ref={menu} className=" text-center ">
        <h1 className="text-white text-xl capitalize font-Cormorant font-semibold pt-5">
          Menu that fits your Plate
        </h1>
        <img src={images.spoon} alt="spoon" className="mx-auto pt-1" />
        <h1 className="text-4xl font-Cormorant text-gold font-bold pt-4">
          Today's Spacial
        </h1>
      </div>
      {/*  */}
      <div className="flex flex-col lg:flex-row justify-between w-2/3 mx-auto my-10">
        <div className="wine w-full lg:w-2/6">
          <h1 className="my-4 text-center font-bold text-4xl text-white  font-Cormorant">
            Wine & Beer
          </h1>
          <div className="list ">
            {wines.map((wine) => {
              return (
                <div className="flex justify-between">
                  <section className="py-1 lg:py-3">
                    <h1 className="text-gold font-Cormorant">{wine.title}</h1>
                    <p className="font-light text-xs text-white">{wine.tags}</p>
                  </section>
                  <div className="w-24 h-0.5 bg-gold mt-7" />
                  <h1 className="mt-3 text-white  font-Cormorant font-semibold text-xl">
                    {wine.price}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-full lg:w-2/6 flex justify-center">
          <img src={images.menu} alt="Menu" className=" h-48 lg:h-96 " />
        </div>
        <div className="cocktails  w-full lg:w-2/6 ">
          <h1 className="my-4 text-center font-bold text-4xl  font-Cormorant text-white">
            Cocktails
          </h1>
          <div className="list w-full">
            {cocktails.map((cocktail) => {
              return (
                <div className="flex justify-between">
                  <section className="py-1 lg:py-3">
                    <h1 className="text-gold">{cocktail.title}</h1>
                    <p className=" font-light text-xs text-white">
                      {cocktail.tags}
                    </p>
                  </section>
                  <div className="flex w-20 justify-center h-0.5 bg-gold mt-7" />
                  <h1 className=" mt-4 text-white font-semibold text-xl  font-Cormorant ">
                    {cocktail.price}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-gold py-2 px-3 rounded-md shadow-sm font-semibold">
          View More
        </button>
      </div>
    </div>
  );
}

export default Menu;
