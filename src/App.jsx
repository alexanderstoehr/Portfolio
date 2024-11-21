import Projects from "./components/Projects.jsx"
import Toolbox from "./components/Toolbox.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Header from "./components/Header.jsx"
import { useEffect, useState } from "react"
import Footer from "./components/Footer.jsx"

function App() {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    return (
        <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col items-center gap-24 px-8 xl:w-[1200px] xl:p-0">
            <Header
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <Hero />
            <Projects />
            <Toolbox />
            <About />
            <Footer theme={theme} />
        </div>
    )
}

//TODO: Enable 404 redirects to home or add a 404 page
//TODO: Add redirects from lod htaccess file

export default App
