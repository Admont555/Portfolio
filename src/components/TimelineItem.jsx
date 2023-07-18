import React from "react"

const TimelineItem = ({ year, title, duration, details }) => {
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l border-my-red/40 ">
        <li className="mb-10 ml-4">
          <div className=" absolute  w-3 h-3 bg-my-red rounded-full mt-1.5 -left-1.5 border-white " />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py- 1 font-semibold text-my-white bg-my-blue   rounded-sm hover:brightness-125 ease-in duration-100 dark:bg-my-white dark:text-my-blue">
              {year}
            </span>
            <span className="text-lg font-semibold text-my-black dark:text-my-white">
              {title}
            </span>
            <span className="my-1 text-sm font-normal text-stone-400 dark:text-stone-300">
              {duration}
            </span>
          </p>
          <p className="my-2 text-base font-normal text-stone-500 dark:text-slate-200">
            {details}
          </p>
        </li>
      </ol>
    </div>
  )
}

export default TimelineItem
