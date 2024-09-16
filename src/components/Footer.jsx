export default function Footer({theme}) {
    return (
        <div className="flex justify-center mt-auto pb-4">
            <a href="https://www.amazon.de/hz/wishlist/ls/33N6ZZUM7XDUG?tag=bestwatcher-21" target="_blank">
                <img src={theme === "dark" ? "/cake-lightmode.svg" : "/cake.svg"} className="hover:animate-pulse"/>
            </a>
        </div>
    )
}