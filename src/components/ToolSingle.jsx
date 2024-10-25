export default function ToolSingle({tool}) {
    return (
        <div>
            <div className="mr-4 mb-4 p-2  shadow-md shadow-gray-400 dark:shadow-white/10 rounded-lg hover:scale-110">
                {tool.name}
            </div>
        </div>
    )
}