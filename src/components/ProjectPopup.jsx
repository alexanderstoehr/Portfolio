// Nice tut for glassmorphism: https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css

import allProjects from "../../data/projects.json";


export default function ProjectPopup({projectId, handleProjectClick}) {
    console.log("project id", projectId)
    console.log("all projects", allProjects)
    const currentProject = allProjects.find(item => item.id === projectId);
    console.log("current project", currentProject)

    return (
        <div className="flex justify-center items-center">
            <div onClick={() => handleProjectClick(0)} className="fixed inset-0 bg-black/80 z-40"></div>
            <div
                className="fixed pl-16 pr-24 pt-12 pb-24 rounded-lg border border-white/10 bg-white/10 shadow-lg m-auto backdrop-blur-md z-50">
                <div className=" z-10 text-neutral-300 flex flex-col ">
                    <img className="cursor-pointer h-6 absolute top-0 right-0 mt-12 mr-12 hover:scale-110"
                         onClick={() => handleProjectClick(0)}
                         src="/close-popup.svg"/>
                    <div className="mt-8">ProjectPopup for ProjectID: {projectId}</div>
                    <div>Project: {currentProject.title}</div>
                    <div>Project: {currentProject.title}</div>
                    <div>Project: {currentProject.title}</div>
                </div>
            </div>
        </div>
    )
}