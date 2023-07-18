import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"

const demoScroll = {
  hidden: {
    opacity: 0,
    y: "75px",
  },
  visible: {
    opacity: 1,
    y: "0",
  },
}

const Test = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div>
      <motion.div className="lg:w-[1400px] w-[1040px] m-auto md:pl-20 p-4 py-16 h-[100vh]">
        <motion.button
          className="py-2 px-4 bg-my-red text-my-white font-bold mt-3"
          variants={demoScroll}
          initial="hidden"
          whileInView="visible"
        >
          Hello im Adam
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Test
