import data from '/data/content.json'

const {contact} = data.find(item => item.contact);

export default function Header({theme, toggleTheme}) {
    return (
        <div className="flex w-full justify-between pt-8">

            <span>
                <img src={theme === "dark" ? "/as-logo.svg" : "/as-logo-lightmode.svg"}/>
            </span>

            <div className="flex gap-16 align-middle">
                <span className="flex gap-4">
                    <a href={contact.linkedin} target="_blank">
                        <img className="hover:scale-110" src={theme === "dark" ? "/linkedin.svg" : "/linkedin-lightmode.svg"}/>
                    </a>
                    <a href={contact.github} target="_blank">
                        <img className="hover:scale-110" src={theme === "dark" ? "/github.svg" : "/github-lightmode.svg"}/>
                    </a>
                </span>

                <span className="flex gap-1">
                    <img className="mr-0.5 " src={theme === "dark" ? "/lightmode.svg" : "/lightmode-lightmode.svg"}/>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                        />
                        <div
                            className="relative w-11 h-6 bg-gray-400  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-cyan-500 after:border-cyan-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
                    </label>
                    <img src={theme === "dark" ? "/darkmode.svg" : "/darkmode-lightmode.svg"}/>
                </span>
            </div>
        </div>
    )


}