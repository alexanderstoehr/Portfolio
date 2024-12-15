import myprojects from "/data/projects.json"
import ProjectListingSingle from "./ProjectListingSingle.jsx"
import data from "/data/content.json"
import { useState } from "react"
import ProjectPopup from "./ProjectPopup.jsx"

const { projects } = data.find((item) => item.projects)

export default function Projects() {
    const [showProject, setShowProject] = useState(false)
    const [projectId, setProjectId] = useState(0)

    const handleProjectClick = (projectId) => {
        setShowProject((prevShowProject) => !prevShowProject)
        setProjectId(projectId)
    }

    return (
        <div className="flex-col">
            {showProject && (
                <ProjectPopup
                    projectId={projectId}
                    handleProjectClick={handleProjectClick}
                />
            )}
            <div className="text-4xl font-bold">{projects.heading}</div>
            <div className="mb-4 font-bold">{projects.subhead}</div>
            <div className="mt-auto grid auto-rows-fr grid-cols-1 gap-12 md:h-full md:grid-cols-2 lg:grid-cols-3">
                {myprojects.map((project) => (
                    <ProjectListingSingle
                        key={project.id}
                        project={project}
                        handleProjectClick={handleProjectClick}
                    />
                ))}
            </div>
        </div>
    )
}
