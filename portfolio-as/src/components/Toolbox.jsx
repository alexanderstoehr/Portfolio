import tools from "/data/toolbox.json"
import ToolSingle from "./ToolSingle.jsx";

export default function Toolbox() {
    return (
        <div>
            Toolbox
            {tools.map((tool) => (
                <ToolSingle key={tool.id} tool={tool}/>

            ))}
        </div>
    )
}