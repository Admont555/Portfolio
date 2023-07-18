import React from "react"
import ProjectItem from "./ProjectItem"
import HMinvestImg from "../../public/img/Projects/HMINVEST.jpg"
import NaamanImg from "../../public/img/Projects/Naaman.jpg"
import OnoacedmicImg from "../../public/img/Projects/ONO.jpg"
import IfatImg from "../../public/img/Projects/IFAT.jpg"
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

const Projects = () => {
  return (
    <div id="work" className="max-w-[1400px] w-auto m-auto md:pl-20 p-4 py-16">
      <motion.h1
        className="text-4xl  font-bold text-center text-my-blue mb-4 dark:text-my-white"
        variants={showFromBottom}
        initial="hidden"
        whileInView="visible"
      >
        My Projects
      </motion.h1>
      <p className="py-8 text-center dark:text-stone-200">
        Browse through my work and see how I approach design and development
        challenges.
      </p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={HMinvestImg}
          title="HM invest"
          link="https://hm-invest.co.il/"
        />
        <ProjectItem
          img={NaamanImg}
          title="Naaman"
          link="https://naaman-lift.co.il/"
        />
        <ProjectItem
          img={OnoacedmicImg}
          title="Ono academic"
          link="https://haredim.ono.ac.il/"
        />
        <ProjectItem
          img={IfatImg}
          title="Ifat Oved"
          link="https://www.ifatoved.com/"
        />
      </div>
    </div>
  )
}

export default Projects
