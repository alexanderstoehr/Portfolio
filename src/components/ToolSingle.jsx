export default function ToolSingle({tool}) {
    return (
        <div>
            <div className="mr-4 mb-4 p-2 border border-2 border-gray-400 rounded-lg cursor-pointer hover:scale-110"><a
                href={tool.link}
                target="_blank">{tool.name}</a>
            </div>
        </div>
    )
}