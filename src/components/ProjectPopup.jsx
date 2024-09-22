// Nice tut for glassmorphism: https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css

import allProjects from "../../data/projects.json";


export default function ProjectPopup({projectId}) {
    console.log("project id", projectId)
    console.log("all projects", allProjects)
    const currentProject = allProjects.find(item => item.id === projectId);
    console.log("current project", currentProject)

    return (
        <div className="flex justify-center items-center">
            <div className="fixed inset-0 bg-black/80 z-40"></div>
            <div className="fixed p-12 rounded-lg border border-white/10 bg-white/10 shadow-lg m-auto backdrop-blur-sm z-50">
                <div className="relative z-10">
                    <p>ProjectPopup for ProjectID: {projectId}</p>
                    <p>Project: {currentProject.title}</p>
                </div>
            </div>
        </div>
    )
}