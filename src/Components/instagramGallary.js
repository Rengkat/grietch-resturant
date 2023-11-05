import React from "react";
import SubHeader from "./subHeader";
import { images } from "../constants";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
function InstagramGallary() {
  return (
    <div className=" insta bg-dark  ">
      <div className="grid-cont">
        <div className="writeUp">
          <SubHeader title="Instagram" />

          <h1 className="text-gold text-4xl font-Cormorant pb-5">
            Photo Gallary
          </h1>

          <p className="text-gray font-Cormorant text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sunt
            voluptatem suscipit quidem exercitationem error ratione temporibus
          </p>

          <button className="bg-gold py-2 my-5 px-3 rounded-md shadow-md font-semibold">
            View More
          </button>
        </div>
        <div className="intagramPic">
          <img src={images.gallery01} alt="gallary 1 " className="ga" />

          <div className="iconCont ">
            <a href="#">
              <FaInstagram className="text-5xl text-white cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="intagramPic ">
          <img src={images.gallery02} alt="gallary 2 " className="ga" />

          <div className="iconCont ">
            <a href="#">
              <FaInstagram className="text-5xl text-white cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="intagramPic ">
          <img src={images.gallery03} alt="gallary 3" className="ga" />

          <div className="iconCont">
            <a href="#">
              <FaInstagram className="text-5xl text-white cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="intagramPic ">
          <img src={images.gallery04} alt="gallary 4" className="ga" />

          <div className="iconCont ">
            <a href="#">
              <FaInstagram className="text-5xl text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramGallary;
