import data from '/data/content.json'

const {contact} = data.find(item => item.contact);

export default function Header() {
    return (
        <div className="flex justify-between pt-2">

            <span><img src="/as-logo.svg"/></span>

            <div className="flex gap-16 align-middle">
                <span className="flex gap-4">
                    <a href={contact.linkedin} target="_blank"> <img src="/linkedin.svg"/></a>
                    <a href={contact.github} target="_blank">  <img src="/github.svg"/></a>
                </span>

                <span className="flex gap-2">
                    <img src="/lightmode.svg"/>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div
                            className="relative w-11 h-6 bg-gray-200  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[2px] after:bg-cyan-500 after:border-cyan-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
                    </label>
                    <img src="/darkmode.svg"/>
                </span>
            </div>
        </div>
    )


}