import React from "react";
import images from "../constants/images";
import SubHeader from "./subHeader";
function Laurels({ award }) {
  return (
    <div ref={award} className="laurals w-full flex relative h-screen">
      <div className="center w-4/5 flex mx-auto flex-col lg:flex-row  items-center justify-center">
        <img
          src={images.logo}
          alt=""
          className="absolute top-3 left-5 w-12 h-12 lg:w-40 lg:h-40"
        />

        <div className="awards text-white">
          <div className="right ">
            <SubHeader title="Awards and Recognition" />
            <h1 className="text-gold text-center text-xl lg:text-4xl font-Cormorant pb-0 lg:pb-5">
              Our Laurels
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-7 p-3  ">
            <div className="award1 flex">
              <img
                src={images.award01}
                alt="award 1"
                className="w-7 h-7 lg:w-20 lg:h-20"
              />
              <div className="texts p-1 lg:pl-7">
                <h1 className="award__h1">Best Seafood Resturant</h1>
                <p className="award__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  pariatur?
                </p>
              </div>
            </div>
            <div className="award2 flex">
              <img
                src={images.award02}
                alt="award 2"
                className="w-7 h-7 lg:w-20 lg:h-20"
              />
              <div className="texts p-1 lg:pl-7">
                <h1 className="award__h1">The International Award</h1>
                <p className="award__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  pariatur?
                </p>
              </div>
            </div>
            <div className="award3 flex">
              <img
                src={images.award03}
                alt="award 3"
                className="w-7 h-7 lg:w-20 lg:h-20"
              />
              <div className="texts p-1 lg:pl-7">
                <h1 className="award__h1">Best Japanise Dish</h1>
                <p className="award__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  pariatur?
                </p>
              </div>
            </div>
            <div className="award4 flex">
              <img
                src={images.award05}
                alt="award 3"
                className="w-7 h-7 lg:w-20 lg:h-20"
              />
              <div className="texts p-1 lg:pl-7">
                <h1 className="award__h1">African Kitchin Award</h1>
                <p className="award__p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  pariatur?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image w-full lg:w-2/5 ">
          <img
            src={images.laurels}
            alt="Laural"
            className=" lauralIm h-48 mx-auto  lg:h-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Laurels;
