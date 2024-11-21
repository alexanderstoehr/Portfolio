import data from "/data/content.json"

const { contact } = data.find((item) => item.contact)

export default function Header({ theme, toggleTheme }) {
    return (
        <div className="flex w-full justify-between pt-8">
            <span>
                <img
                    src={
                        theme === "dark"
                            ? "/as-logo.svg"
                            : "/as-logo-lightmode.svg"
                    }
                />
            </span>

            <div className="flex gap-16 align-middle">
                <span className="flex gap-4">
                    <a
                        href={contact.linkedin}
                        target="_blank">
                        <img
                            className="hover:scale-110"
                            src={
                                theme === "dark"
                                    ? "/linkedin.svg"
                                    : "/linkedin-lightmode.svg"
                            }
                        />
                    </a>
                    <a
                        href={contact.github}
                        target="_blank">
                        <img
                            className="hover:scale-110"
                            src={
                                theme === "dark"
                                    ? "/github.svg"
                                    : "/github-lightmode.svg"
                            }
                        />
                    </a>
                </span>

                <span className="flex gap-1">
                    <img
                        className="mr-0.5"
                        src={
                            theme === "dark"
                                ? "/lightmode.svg"
                                : "/lightmode-lightmode.svg"
                        }
                    />
                    <label className="inline-flex cursor-pointer items-center">
                        <input
                            type="checkbox"
                            className="peer sr-only"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                        />
                        <div className="peer relative h-6 w-11 rounded-full bg-gray-400 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-cyan-300 after:bg-cyan-500 after:transition-all after:content-[''] peer-checked:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-400 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                    </label>
                    <img
                        src={
                            theme === "dark"
                                ? "/darkmode.svg"
                                : "/darkmode-lightmode.svg"
                        }
                    />
                </span>
            </div>
        </div>
    )
}
