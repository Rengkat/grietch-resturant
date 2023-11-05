import React, { useState } from "react";
import images from "../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
function NavBar({ scrollSection, aboutUs, menu, award, chef }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <div className="central__nav bg-dark py-4 px-8 w-full flex text-white md:justify-between">
        <div className="nav__logo items-start ">
          <img
            src={images.gericht}
            alt="Resturant Logo"
            className="w-32 md:w-36 lg:w-40  "
          />
        </div>
        <ul className="nav__links hidden lg:flex align-middle flex-1 justify-center items-center list-none ">
          <li className="">
            <a href="home">Home</a>
          </li>
          <li
            onClick={(e) => {
              scrollSection(menu);
              e.preventDefault();
            }}
            className="">
            <a href="menu">Menu</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollSection(award);
            }}
            className="">
            <a href="award">Award</a>
          </li>
          <li className="">
            <a href="contact">Contact</a>
          </li>
          <li
            onClick={(e) => {
              scrollSection(aboutUs);
              e.preventDefault();
            }}
            className="">
            <a href="ourChef">About Us</a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollSection(chef);
            }}
            className="">
            <a href="ourChef">Our Chef</a>
          </li>
        </ul>
        <div className="nav__login hidden md:flex items-center md:align justify-end list-none ">
          <li className="">
            <a
              className="transition-all ease-linear duration-500 border-r-2 border-gray pr-5 hover:underline"
              href="login">
              Sign Up/ Log In
            </a>
          </li>
          <li className="">
            <a
              className="transition-all ease-linear duration-500 hover:underline"
              href="book">
              Book
            </a>
          </li>
        </div>
        <div className="small-screen lg:hidden">
          <GiHamburgerMenu
            onClick={() => setOpenNav(true)}
            className="text-4xl absolute top-2 right-2 cursor-pointer lg:hidden"
          />
          <div
            className={
              openNav
                ? "overlay  fixed right-0 left-0 bottom-0 bg-dark z-10 w-full h-screen top-0 transition-all ease-linear duration-300"
                : "overlay fixed right-0 left-0 bottom-0 bg-dark z-10 w-full h-screen -top-full  transition-all ease-linear duration-300"
            }>
            <MdOutlineRestaurantMenu
              onClick={() => setOpenNav(false)}
              fontSize={27}
              className="absolute text-gold text-4xl top-2 right-2 cursor-pointer"
            />
            <ul className=" flex flex-col items-center justify-center align-bottom list-none h-screen  ">
              <li className="small-screem__li">
                <a className="small-screen__link" href="home">
                  Home
                </a>
              </li>
              <li className="small-screem__li">
                <a className="small-screen__link" href="menu">
                  Menu
                </a>
              </li>
              <li className="small-screem__li">
                <a className="small-screen__link" href="award">
                  Award
                </a>
              </li>
              <li className="small-screem__li">
                <a className="small-screen__link" href="contact">
                  Contact
                </a>
              </li>
              <li className="small-screem__li">
                <a className="small-screen__link" href="aboutUs">
                  About Us
                </a>
              </li>
              <li className="small-screem__li">
                <a className="small-screen__link" href="ourChef">
                  Our Chef
                </a>
              </li>
              <li className="small-screem__li md:hidden">
                <a className="small-screen__link" href="login">
                  Sign Up/ Log In
                </a>
              </li>
              <li className="small-screem__li md:hidden">
                <a className="small-screen__link" href="book">
                  Book
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
