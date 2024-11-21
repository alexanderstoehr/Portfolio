import data from "/data/content.json"

const { hero } = data.find((item) => item.hero)

export default function Hero() {
    return (
        <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
            <div className="md:ml-4 md:w-1/2">
                <div className="text-md mb-4 text-cyan-600">
                    {hero.preheading}
                </div>
                <div className="text-6xl font-black">{hero.heading}</div>
                <div className="mb-4 text-lg font-bold">{hero.subhead}</div>
                <div>{hero.intro}</div>
            </div>
            <div>
                <img
                    className="-mt-16 blur-sm hover:blur-none md:mt-0"
                    src="/alexander-fullstack-clear.png"
                />
            </div>
        </div>
    )
}
