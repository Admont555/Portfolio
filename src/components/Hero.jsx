import React from "react"
import { TypeAnimation } from "react-type-animation"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import ADAMTHEME from "../../public/img/AdamHero.jpg"

function Hero() {
  return (
    <div id="main">
      <img src={ADAMTHEME} alt="" className="w-full h-screen object-cover" />
      <div className="w-full h-screen absolute top-0 left-0 bg-my-blue/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col items-center justify-center ">
          <h1 className="text-5xl sm:text-8xl font-bold text-my-white text-center">
            Hey I'm Adam
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-my-white">
            A
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                2000,
                "Digital Marketer",
                2000,
                "Photographer",
                ,
                2000,
                "Tech Enthusiast",
                2000,
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-bloc ",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <div className="flex flex-row gap-4 justify-center pt-6 max-w-[200px] w-full">
            <a href="https://www.facebook.com/adam.oberlander/" target="blank">
              <FaFacebookF
                className="cursor-pointer hover:scale-90 ease-in duration-200 rounded-lg"
                style={{
                  color: "white",
                  backgroundColor: "#3b5998",
                  padding: "5px",
                }}
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/adam_oberlander5/"
              target="blank"
            >
              <FaInstagram
                className="cursor-pointer hover:scale-90 ease-in duration-200 rounded-lg"
                style={{
                  color: "white",
                  backgroundColor: " #C13584",
                  padding: "5px",
                }}
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/adam-ober/" target="blank">
              <FaLinkedinIn
                className="cursor-pointer hover:scale-90 ease-in duration-200 rounded-lg"
                style={{
                  color: "white",
                  backgroundColor: "#0077B5",
                  padding: "5px",
                }}
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
