import React, { useState } from "react"
import { motion, useScroll } from "framer-motion"

import { AiOutlineMenu, AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { MdOutlineWorkOutline } from "react-icons/md"
import { BiBrush } from "react-icons/bi"
import { BsEnvelopeAt, BsMoon, BsSun } from "react-icons/bs"
import { TbTimelineEvent } from "react-icons/tb"

const SideNav = (Toggle) => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  // Dark Mode
  const { toggleDarkMode, theme } = Toggle

  //Animation framer motion vars
  const showElementSlide = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        style={{ color: "white", cursor: "pointer" }}
        size={25}
        className="fixed top-6 right-6 z-[99] md:hidden  "
      />
      <div className="bg-my-red p-5 fixed top-4 right-4 z-[90] md:hidden"></div>

      {nav ? (
        <div
          className="fixed w-full h-screen bg-my-blue/95 flex flex-col justify-center items-center z-20"
          onClick={handleNav}
        >
          {/* Dark mode */}
          {theme === "dark" ? (
            <div>
              <button
                onClick={toggleDarkMode}
                className="bg-my-black rounded-full p-6 fixed top-3 left-3 z-[90] "
              >
                <BsMoon
                  style={{ color: "white" }}
                  className="fixed top-6 left-6 z-[99]   "
                  size={25}
                />
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <button
                onClick={toggleDarkMode}
                className="bg-my-white rounded-full p-6 fixed top-3 left-3 z-[90] "
              >
                <BsSun
                  style={{ color: "black" }}
                  size={25}
                  className="fixed top-6 left-6 z-[99]   "
                />
              </button>
            </div>
          )}

          {/* Dark mode  END*/}

          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-95 ease-in duration-100 hover:shadow-my-black-200"
          >
            <AiOutlineHome style={{ color: "white" }} size={20} />
            <span className="pl-4 text-my-white font-bold ">Home</span>
          </a>

          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer mt-5  hover:scale-95 ease-in duration-100 hover:shadow-my-black-200"
          >
            <AiOutlineUser style={{ color: "white" }} size={20} />
            <span className="pl-4 text-my-white font-bold">About</span>
          </a>

          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer mt-5  hover:scale-95 ease-in duration-100 hover:shadow-my-black-200"
          >
            <MdOutlineWorkOutline style={{ color: "white" }} size={20} />
            <span className="pl-4 text-my-white font-bold">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#tools"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer mt-5  hover:scale-95 ease-in duration-100 hover:shadow-my-black-200"
          >
            <BiBrush style={{ color: "white" }} size={20} />
            <span className="pl-4 text-my-white font-bold">Tools</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer mt-5  hover:scale-95 ease-in duration-100 hover:shadow-my-black-200"
          >
            <BsEnvelopeAt GrContact style={{ color: "white" }} size={20} />
            <span className="pl-4 text-my-white font-bold">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      {/* Desktop section */}

      <motion.div
        className="md:block hidden fixed top-[25%] lg:top-[30%] ml-2 z-50"
        variants={showElementSlide}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col ">
          <a
            href="#main"
            className="rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20"
          >
            <AiOutlineHome style={{ color: "white" }} size={25} />
          </a>

          <a
            href="#timeline"
            className="rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20"
          >
            <TbTimelineEvent style={{ color: "white" }} size={25} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20"
          >
            <AiOutlineUser style={{ color: "white" }} size={25} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20"
          >
            <MdOutlineWorkOutline style={{ color: "white" }} size={25} />
          </a>
          <a
            href="#tools"
            className="rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20"
          >
            <BiBrush style={{ color: "white" }} size={25} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-md bg-my-red shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20"
          >
            <BsEnvelopeAt style={{ color: "white" }} size={25} />
          </a>

          {theme === "dark" ? (
            <div>
              <button
                onClick={toggleDarkMode}
                className="rounded-full shadow-md bg-my-black shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20 "
              >
                <BsMoon style={{ color: "white" }} size={25} />
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <button
                onClick={toggleDarkMode}
                className="rounded-full shadow-md bg-my-white shadow-my-black-300 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-100 hover:shadow-gray-20 "
              >
                <BsSun style={{ color: "black" }} size={25} />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default SideNav
