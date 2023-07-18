import React from "react"
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

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1400px] w-auto m-auto md:pl-20 p-4 py-16"
    >
      <motion.h1
        className="text-4xl  font-bold text-center text-my-blue mb-4 dark:text-my-white"
        variants={showFromBottom}
        initial="hidden"
        whileInView="visible"
      >
        Contact
      </motion.h1>

      <form
        action="https://getform.io/f/90d539b5-c839-4034-8b52-fcfc8d9ce245"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col ">
            <label className="uppercase dark:text-stone-200 text-sm py-2 ">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 bg-my-white dark:bg-my-blue dark:border-gray-700 dark:text-stone-200 "
              type="text"
              name="Name"
            />
          </div>
          <div className="flex flex-col ">
            <label className="uppercase dark:text-stone-200 text-sm py-2 ">
              Phone number
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 bg-my-white dark:bg-my-blue dark:border-gray-700 dark:text-stone-200"
              type="text"
              name="Phone"
            />
          </div>
          <div className="flex flex-col ">
            <label className="uppercase dark:text-stone-200 text-sm py-2 ">
              Email
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 bg-my-white dark:bg-my-blue dark:border-gray-700 dark:text-stone-200"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col ">
            <label className="uppercase dark:text-stone-200 text-sm py-2 ">
              Subject
            </label>
            <select
              className="border-2 rounded-lg p-3 flex border-gray-300 bg-my-white dark:bg-my-blue dark:border-gray-700 dark:text-stone-200"
              name="Subject"
              id=""
              placeholder="how can i help?"
            >
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
              <option value="Lets Work together">Lets Work together</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col py-2  ">
          <label className="uppercase dark:text-stone-200 text-sm py-2 ">
            Message
          </label>
          <textarea
            className=" border-2 rounded-lg p-3 border-gray-300 bg-my-white dark:bg-my-blue dark:border-gray-700 dark:text-stone-200 "
            name="message"
            id=""
            rows="10"
          ></textarea>
        </div>

        <button
          type="submit"
          className=" bg-my-blue text-my-white  hover:brightness-110 ease-in duration-200 focus:ring-4 focus:outline-none focus:ring-my-red font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2  w-full dark:bg-black"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
