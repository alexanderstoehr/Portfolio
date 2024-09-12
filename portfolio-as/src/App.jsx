import Projects from "./components/Projects.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";

function App() {

    return (
        <div
            className="font-hindi flex flex-col w-[1200px] bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 ">
            <Header/>
            <Hero/>
            <Projects/>
            <Toolbox/>
            <About/>
        </div>
    )
}

export default App
