export default function ProjectListingSingle({project, handleProjectClick}) {


    return (
        <>
            <div id={project.id} className="flex flex-col md:h-full cursor-pointer transition duration-300 hover:scale-105 z-0"
                 onClick={() => handleProjectClick(project.id)}>
                <div className=""><img className="w-full object-cover" src={project.images[0]}/></div>
                <div className="p-4 border solid border-gray-200 rounded-b-lg md:flex-grow">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <div className="">{project.shortDescription}</div>
                </div>
            </div>
        </>
    )
}