import React from "react";
import images from "../constants/images";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="text-white">
      <div className="newsletter bg-dark  text-center border-gold py-5">
        <h1 className="text-xl font-Cormorant text-white">Newsletter</h1>
        <img src={images.spoon} alt="" className="mx-auto" />
        <h1 className="text-xl lg:text-5xl text-gold font-Cormorant py-2 lg:py-4">
          Subscribe To Our Newsletter
        </h1>
        <p>And never miss any latest updates!</p>
        <div className="input mt-2 lg:mt-10 mb-10 lg:mb-20">
          <input
            className="py-2 mx-3 px-3 w-11/12 lg:w-1/2 bg-dark border-2 border-gold rounded-md"
            type="text"
            placeholder="Enail Adress"
          />{" "}
          <button className="bg-gold py-2 px-3 mt-3 lg:mt-0 text-xl font-semibold rounded-md shadow-md text-dark">
            Subscribe
          </button>
        </div>
      </div>
      <div className="footerLast flex justify-between text-center pr-2 py-8 font-Cormorant text-xl text-gray">
        <div className="contact">
          <h1 className="text-2xl text-gold font-Cormorant py-3">Contact Us</h1>
          <p>Bar Beach Police Barrack, Victoria Island</p>
          <p>+234-8067-581-175</p>
          <p>+234-568-581-5567</p>
        </div>
        <div className="brand text-center w-1/3 lg:w-2/5 p-5">
          <img
            src={images.gericht}
            className="w-32 lg:w-40 mx-auto py-3"
            alt=""
          />
          <p>
            The best way to find yourself is to lose yourself to the service of
            others
          </p>
          <ul className="flex justify-center items-center py-2">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="workingHours pl-2">
          <h1 className="text-2xl text-gold font-Cormorant py-3">
            Working Hours
          </h1>
          <p> Monday - Friday</p>
          <p className="pb-3">10:00am - 02:00am</p>
          <h1>Saturday - Sunday</h1>
          <p>10:00am - 03:00am</p>
        </div>
      </div>
      <p className="text-center py-5">
        {new Date().getFullYear()} Gericht, All Rights reserve
      </p>
    </footer>
  );
}

export default Footer;
