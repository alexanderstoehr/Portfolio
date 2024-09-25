import myprojects from '/data/projects.json'
import ProjectListingSingle from "./ProjectListingSingle.jsx";
import data from '/data/content.json'
import {useState} from "react";
import ProjectPopup from "./ProjectPopup.jsx";

const {projects} = data.find(item => item.projects);


export default function Projects() {
    const [showProject, setShowProject] = useState(false);
    const [projectId, setProjectId] = useState(0);

    const handleProjectClick = (projectId) => {
        setShowProject((prevShowProject) => !prevShowProject);
        setProjectId(projectId);
    }

    return (
        <div className="flex-col">
            {showProject && <ProjectPopup projectId={projectId} handleProjectClick={handleProjectClick}/>}
            <div className="text-4xl font-bold">{projects.heading}</div>
            <div className="font-bold mb-4">{projects.subhead}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-fr mt-auto md:h-full ">
                {myprojects.map((project) => (
                        <ProjectListingSingle key={project.id} project={project} handleProjectClick={handleProjectClick}/>
                    )
                )}
            </div>
        </div>
    )
}