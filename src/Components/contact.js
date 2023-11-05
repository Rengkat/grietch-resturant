import React from "react";
import { images } from "../constants";

import SubHeader from "./subHeader";
function Contact() {
  return (
    <div className="contactus">
      <div className="contactUs__cont">
        <div className="left__Writeup">
          <div className="writeUp">
            <SubHeader title="Contact" />

            <h1 className="text-gold text-4xl font-Cormorant pb-1 lg:pb-5">
              Find Us
            </h1>

            <p className="text-gray font-Cormorant text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h1 className="text-gold text-2xl font-Cormorant py-2 lg:py-7">
              Opening Hours
            </h1>

            <p className="text-white py-0 lg:py-3 font-Cormorant text-xl">
              Mon - Fri: 10:00am - 02:00am
            </p>
            <p className="text-white py-0 lg:py-3 font-Cormorant text-xl">
              Sat - Sun: 10:00am - 03:00am
            </p>
            <button className="bg-gold py-2 my-4 lg:my-10 px-3 rounded-md shadow-md font-semibold">
              View More
            </button>
          </div>
        </div>
        <img src={images.findus} alt="Findus" className="findusImg" />
      </div>
    </div>
  );
}

export default Contact;
