export default function Hero() {
    return (
        <div className="flex justify-between items-center gap-4">
            <div className="w-1/2 ml-4 ">
                <div className="text-6xl  font-black">Sup.</div>
                <div className="text-lg font-bold mb-4">Building Stuff Fullstacky.</div>
                <div>Hi, I’m Alexander, a web developer from Germany who loves building awesome products with code.</div>
            </div>
            <div><img className="blur-sm hover:blur-none" src="/alexander-fullstack-clear.png"/></div>
        </div>
    )
}