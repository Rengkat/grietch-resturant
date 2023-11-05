import React from "react";
import images from "../constants/images";

function SubHeader({ title }) {
  return (
    <div className="">
      <h1 className="text-gold capitalize font-Cormorant font-bold text-4xl">
        {title}
      </h1>
      <img className="my-2 hidden lg:block" src={images.spoon} alt="spoon " />
    </div>
  );
}

export default SubHeader;
