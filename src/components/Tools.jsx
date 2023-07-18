import React from "react"
import HTML from "../../public/img/Tools/HTML-5.png"
import CSS from "../../public/img/Tools/css3.png"
import JS from "../../public/img/Tools/js-logo.png"
import TAILWIND from "../../public/img/Tools/tailwind.png"
import REACTLOGO from "../../public/img/Tools/react.png"
import WORDPRESS from "../../public/img/Tools/wordpress.png"
import PHOTOSHOP from "../../public/img/Tools/photoshop.png"
import PP from "../../public/img/Tools/pp.png"
import AE from "../../public/img/Tools/AE.png"
import ELEMENTOR from "../../public/img/Tools/elementor.png"
import { motion } from "framer-motion"

// Animation
const showFromBottom = {
  hidden: {
    opacity: 0,
    y: "75px",
  },
  visible: {
    opacity: 1,
    y: "0",
  },
}

const Tools = () => {
  return (
    <div className="max-w-[1400px] w-auto m-auto md:pl-20 p-4 py-16" id="tools">
      <motion.h1
        className="text-4xl font-bold text-center text-my-blue mb-6 dark:text-my-white"
        variants={showFromBottom}
        initial="hidden"
        whileInView="visible"
      >
        Tools
      </motion.h1>
      <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-5">
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={HTML}
              className="hover:scale-110 hover:brightness-110 object-cover ease-in duration-100 cursor-pointer"
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            HTML
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={CSS}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            CSS
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={JS}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            JS
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={TAILWIND}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            Tailwind
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={REACTLOGO}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            React
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={WORDPRESS}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            Wordpress
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={PHOTOSHOP}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            Photoshop
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={PP}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            Preimiere Pro
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={AE}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            After effects
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 ">
            <img
              src={ELEMENTOR}
              className="hover:scale-110 hover:brightness-110   ease-in duration-100 cursor-pointer "
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-my-black dark:text-stone-200">
            Elementor
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Tools
