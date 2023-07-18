import React from "react"
import ADAM from "../../public/img/Adamober.jpg"
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
    transition: {
      duration: 0.2,
    },
  },
}
const showFrom = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1400px] w-auto m-auto md:pl-20 p-4 md:py-16"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 h-[60vh]">
        <div className="flex p-10 ">
          <div className="max-w-lg h-[100%] md:text-left text-center flex flex-col justify-center">
            <motion.h1
              className="text-4xl  font-bold  text-my-blue mb-4 dark:text-my-white"
              variants={showFromBottom}
              initial="hidden"
              whileInView="visible"
            >
              Hey nice to meet you
            </motion.h1>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-200 ">
              I'm Adam, a frontend developer with a background in advertising
              and marketing. I hold a B.A. in Advertising and Marketing from Ono
              academic institution. I have over 8 years of experience in the
              field, and for the past 3 years, I've been honing my skills as a
              developer. I'm also proficient in Photoshop and other popular
              design tools from Adobe. With my experience in creating social
              ads, campaigns, and other creative projects, I bring a unique
              perspective to my work as a frontend developer.
            </p>
          </div>
        </div>
        <motion.div
          className="max-h-96 md:h-[75vh] hidden sm:block "
          variants={showFrom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={ADAM}
            className="w-screen md:h-[60vh] object-cover rounded-md   "
            alt=""
          />
        </motion.div>
      </div>
      <div className="max-h-96 md:h-[75vh] block sm:hidden  ">
        <img
          src={ADAM}
          className="w-screen md:h-[60vh] object-cover rounded-md  "
          alt=""
        />
      </div>
    </div>
  )
}

export default About
