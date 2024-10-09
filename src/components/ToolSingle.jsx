export default function ToolSingle({tool}) {
    return (
        <div>
            <div className="mr-4 mb-4 p-2 border border-2 border-gray-400 rounded-lg hover:scale-110">
                {tool.name}
            </div>
        </div>
    )
}