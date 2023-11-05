import React from "react";
import images from "../constants/images";
import SubHeader2 from "./subHeader2";
function AboutUs({ aboutUs }) {
  return (
    <div ref={aboutUs} className=" aboutUs relative  w-full h-screen  ">
      {/* -----------------OVERLLAY-------------- */}
      <div className="about__overlay absolute top-0 right-0 bottom-0 left-0 z-10 ">
        {/* ....................... BACKGROUND IMAGE USING CSS.................... */}
        <div className="image">
          {/* ..........................CENTER WITH IMAGE FLEX ................... */}
          <div className="about__us-center flex justify-center flex-col lg:flex-row items-center h-full w-3/4 mx-auto ">
            <div className="w-full lg:w-2/5 text-center lg:text-right mt-20 lg:mt-60 lg:pr-20  ">
              <SubHeader2 title={"About Us"} />
              <p className="text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum fw-3/6 acilis deserunt ex quo possimus, excepturi
                velit molestiae? Dolores, praesentium sequi.
              </p>

              <button className="bg-gold capitalize font-Cormorant py-2 px-3 rounded-md shadow-md mt-10">
                Know More
              </button>
            </div>
            <div className=" flex justify-center items-center my-8">
              <img
                src={images.knife}
                alt="Knife"
                className=" knife h-40 lg:h-5/6 lg:top-20 lg:absolute  "
              />
              <img
                src={images.G}
                alt="G"
                className=" absolute -z-10 h-32 lg:top-40 lg:h-96"
              />
            </div>
            <div className="text-center lg:text-left w-full lg:w-2/5 lg:mt-60 lg:pl-20  ">
              <SubHeader2 title={"Our History"} />{" "}
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                iste ducimus deleniti quis, doloremque beatae ad veritatis earum
                et adipisci.
              </p>
              <button className="bg-gold capitalize font-Cormorant py-2 px-3 rounded-md shadow-md mt-10">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src={images.bg}
        alt="bg"
        className=" object-fill absolute top-0 right-0 bottom-0 left-0 -z-10"
      /> */}
    </div>
  );
  // return (
  //   <div className=" w-full relative h-screen ">
  //     <img
  //       src={images.bg}
  //       alt="Knife"
  //       className=" object-cover absolute top-0 right-0 bottom-0 left-0 -z-10"
  //     />
  //     {/* flex */}
  //     <div className="about__us-center flex justify-center flex-col lg:flex-row items-center h-full w-3/4 mx-auto ">
  //       <div className=" w-3/6 text-right">
  //         <SubHeader2 title={"About Us"} />
  //         <p className="text-gray">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  //           facilis deserunt ex quo possimus, excepturi velit molestiae?
  //           Dolores, praesentium sequi.
  //         </p>
  //         <button className="bg-gold capitalize font-Cormorant py-2 px-3 rounded-md shadow-md mt-10">
  //           Know More
  //         </button>
  //       </div>
  //       <div className="w-1/3 flex justify-center items-center">
  //         <img src={images.knife} alt="Knife" className=" knife" />
  //         <img src={images.G} alt="G" className=" absolute -z-10 h-96" />
  //       </div>
  //       <div className="w-3/6 text-left">
  //         {" "}
  //         <SubHeader2 title={"Our History"} />
  //         <p className="text-gray">
  //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis iste
  //           ducimus deleniti quis, doloremque beatae ad veritatis earum et
  //           adipisci.
  //         </p>
  //         <button className="bg-gold capitalize font-Cormorant py-2 px-3 rounded-md shadow-md mt-10">
  //           Know More
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default AboutUs;
