import Projects from "./components/Projects.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";

function App() {

    return (
        <div className="flex flex-col">
            <Header/>
            <Hero/>
            <Projects/>
            <Toolbox/>
            <About/>
        </div>
    )
}

export default App
