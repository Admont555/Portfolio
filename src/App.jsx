// Imports

// Componnents
import SideNav from "./components/SideNav"
import Hero from "./components/Hero"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./components/About"
import Footer from "./components/Footer"
import Test from "./components/Test"
import Tools from "./components/Tools"
import { useEffect, useState } from "react"

function App() {
  //! Dark mode
  const [theme, setTheme] = useState("light")

  //*Browser dependency

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  //*Browser dependency END

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="App bg-my-white dark:bg-my-darkBlue duration-150 ease-in ">
      <SideNav toggleDarkMode={toggleDarkMode} theme={theme} />
      <Hero />
      <Timeline />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
