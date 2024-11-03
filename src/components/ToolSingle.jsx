export default function ToolSingle({tool}) {
    return (
        <div>
            <div
                className="mr-4 mb-4 p-2  shadow-sm shadow-gray-400 dark:shadow-white/10 hover:shadow-cyan-400 dark:hover:shadow-cyan-300 rounded-lg hover:scale-110">
                {tool.name}
            </div>
        </div>
    )
}