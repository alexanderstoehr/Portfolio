import tools from "/data/toolbox.json"
import ToolSingle from "./ToolSingle.jsx";
import data from '/data/content.json'

const {toolbox} = data.find(item => item.toolbox);

export default function Toolbox() {
    return (
        <div className="flex-col">
            <div className="text-4xl font-bold">{toolbox.heading}</div>
            <div className="font-bold mb-4">{toolbox.subhead}</div>
            <div>{tools.map((tool) => (
                <ToolSingle key={tool.id} tool={tool}/>

            ))}
            </div>
        </div>
    )
}