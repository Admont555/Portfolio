import React from "react"

const ProjectItem = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-my-black-400 rounded-lg group hover:bg-my-blue/80  ">
      <img src={img} alt="" className=" rounded-xl group-hover:opacity-10  " />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl font-bold text-my-white tracking-wider text-center mb-10 ">
          {title}
        </h3>
        <a
          href={link}
          target="blank"
          className=" bg-my-red text-my-white  border border-my-red hover:scale-90  ease-in duration-300 focus:ring-4 focus:outline-none focus:ring-my-red font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  flex justify-center w-full"
        >
          To The Site
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
