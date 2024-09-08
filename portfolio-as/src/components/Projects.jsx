import projects from '/data/projects.json'
import ProjectListingSingle from "./ProjectListingSingle.jsx";

export default function Projects() {

    console.log(projects)

    return (
        <div className="flex-col">
            <div className="">Projects</div>
            <div className=""> Singles
                {projects.map((project) => (
                        <ProjectListingSingle key={project.id} project={project}/>
                    )
                )}
            </div>
        </div>
    )
}