// Nice tut for glassmorphism: https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css

import allProjects from "../../data/projects.json";


export default function ProjectPopup({projectId}) {
    console.log("project id", projectId)
    console.log("all projects", allProjects)
    const currentProject = allProjects.find(item => item.id === projectId);
    console.log("current project", currentProject)

    return (
        <div className="fixed p12 isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black inset-0 m-auto">
            <p>ProjectPopup for ProjectID: {projectId}</p>
            <p>Project: {currentProject.title}</p>

        </div>
    )
}