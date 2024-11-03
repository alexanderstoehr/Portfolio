import data from '/data/content.json'

const {hero} = data.find(item => item.hero);

export default function Hero() {
    return (
        <div className="flex justify-between items-center gap-4 flex-col-reverse md:flex-row">
            <div className="md:w-1/2 md:ml-4 ">
                <div className="text-md  text-cyan-600 mb-4">{hero.preheading}</div>
                <div className="text-6xl  font-black">{hero.heading}</div>
                <div className="text-lg font-bold mb-4">{hero.subhead}</div>
                <div>{hero.intro}</div>
            </div>
            <div><img className="blur-sm hover:blur-none -mt-16 md:mt-0" src="/alexander-fullstack-clear.png"/></div>
        </div>
    )
}