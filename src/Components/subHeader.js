import React from "react";
import images from "../constants/images";

function SubHeader({ title }) {
  return (
    <div>
      <h1 className="text-white capitalize font-Cormorant font-bold text-xl">
        {title}
      </h1>
      <img className="hidden lg:block my-2" src={images.spoon} alt="spoon" />
    </div>
  );
}

export default SubHeader;
