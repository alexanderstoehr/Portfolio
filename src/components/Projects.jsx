import myprojects from '/data/projects.json'
import ProjectListingSingle from "./ProjectListingSingle.jsx";
import data from '/data/content.json'

const {projects} = data.find(item => item.projects);

console.log(projects)
export default function Projects() {

    return (
        <div className="flex-col">
            <div className="text-4xl font-bold">{projects.heading}</div>
            <div className="font-bold mb-4">{projects.subhead}</div>
            <div className=""> Singles
                {myprojects.map((project) => (
                        <ProjectListingSingle key={project.id} project={project}/>
                    )
                )}
            </div>
        </div>
    )
}