import data from "../../data/content.json";
import ProjectListingSingle from "./ProjectListingSingle.jsx";

const {about} = data.find(item => item.about)

export default function About() {
    return (
        <div className="flex-col">
            <div className="text-4xl font-bold mb-2">{about.heading}</div>
            <div className="mb-4">
                {about.text.split('\n').map((item, key) => {
                    return <span key={key}>{item}<br/></span>
                })}
            </div>
        </div>
    )
}