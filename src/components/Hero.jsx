import data from '/data/content.json'

const {hero} = data.find(item => item.hero);

export default function Hero() {
    return (
        <div className="flex justify-between items-center gap-4">
            <div className="w-1/2 ml-4 ">
                <div className="text-6xl  font-black">{hero.heading}</div>
                <div className="text-lg font-bold mb-4">{hero.subhead}</div>
                <div>{hero.intro}</div>
            </div>
            <div><img className="blur-sm hover:blur-none" src="/alexander-fullstack-clear.png"/></div>
        </div>
    )
}