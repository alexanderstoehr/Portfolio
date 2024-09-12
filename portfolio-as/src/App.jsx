import Projects from "./components/Projects.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";

function App() {

    return (
        <div className="flex flex-col align-middle gap-8 mt-4 w-full max-w-screen-lg mx-auto w-screen px-8 xl:w-[1200px] xl:p-0">
            <Header/>
            <Hero/>
            <Projects/>
            <Toolbox/>
            <About/>
        </div>
    )
}

export default App
