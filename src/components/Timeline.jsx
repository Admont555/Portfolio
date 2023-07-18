import React from "react"
import TimelineItem from "./TimelineItem"
import { motion } from "framer-motion"

const data = [
  {
    subject: "Work/Experience",
    year: "2015",
    title: "Working with fresh digital",
    duration: "3 Years",
    details:
      "Developed creative marketing strategies to increase brand awareness and drive sales, including add creation and creative using popular tools at the time.",
  },
  {
    subject: "Eduction",
    year: "2017",
    title: "Ono academic",
    duration: "4 Years",
    details: "A degree in B.A. in Advertising and Marketing Communications",
  },
  {
    subject: "Work",
    year: "2020",
    title: "Digital Marketing Office / frontend developer",
    duration: "1 Year",
    details:
      "Working in a Office as a Frontend developer and team manager using Wordpress Cms, Elementor, theme builder, react and more",
  },
  {
    subject: "Work/Experience",
    year: "2021",
    title: "Freelance Web Developer",
    duration: "2 Years",
    details:
      "As a freelance web developer and creative professional, I have developed responsive websites using HTML, CSS, and JavaScript. I have created effective online ads for clients, resulting in increased traffic and sales. I have also provided professional photography services and designed graphics and marketing materials using Adobe Creative Suite. In addition, I have produced and edited videos for clients, resulting in engaging and effective marketing content.",
  },
]

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

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="max-w-[1400px] w-auto m-auto md:pl-20 p-4 py-16"
    >
      <motion.h1
        className="text-4xl  font-bold text-center text-my-blue mb-4 dark:text-my-white"
        variants={showFromBottom}
        initial="hidden"
        whileInView="visible"
      >
        Experience
      </motion.h1>

      {data.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          subject={item.subject}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Timeline
