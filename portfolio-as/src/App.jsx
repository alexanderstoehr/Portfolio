import Projects from "./components/Projects.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import Footer from "./components/Footer.jsx";

function App() {

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

    return (
        <div
            className="flex min-h-screen flex-col align-middle gap-8 mt-4 w-full max-w-screen-lg mx-auto w-screen px-8 xl:w-[1200px] xl:p-0">
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <Footer theme={theme}/>
        </div>
    )
}

export default App
