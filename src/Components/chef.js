import React from "react";
import images from "../constants/images";
import SubHeader from "./subHeader";
function Chef({ chef }) {
  return (
    <div ref={chef} className="chef w-full">
      <div className=" grid grid-rows-1 lg:grid-cols-2 w-2/3 pt-5 mx-auto items-center">
        <div className="image w-1/2 mx-auto lg:w-full  ">
          <img src={images.chef} alt="Chef" />
        </div>
        <div className="chef__write pl-0 lg:pl-10 py-0 lg:py-5">
          <SubHeader title="Chief's Word" />
          <h1 className="text-4xl text-gold font-Cormorant font-bold pb-1 lg:pb-10">
            What We Beleive In
          </h1>
          <p className=" text-gray font-Cormorant text-xl text-center pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatem dolore nisi velit qui delectus? Recusandae corrupti
            consequatur perferendis excepturi, quae facere ratione sed
            exercitationem dolorem iste officia unde non!
          </p>
          <h1 className="font-semibold font-Cormorant text-2xl text-gold text-center">
            Alexander Rengkat
          </h1>
          <p className="font-semibold pb-1 lg:pb-10">Chef & Founder</p>
          <img src={images.sign} alt="sign" className="w-40 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
