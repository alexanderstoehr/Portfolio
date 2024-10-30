export default function ProjectListingSingle({project, handleProjectClick}) {


    return (
        <>
            <div id={project.id}
                 className="flex flex-col md:h-full cursor-pointer rounded-2xl transition duration-300 hover:scale-105 z-0 shadow-md shadow-gray-400 dark:shadow-white/10"
                 onClick={() => handleProjectClick(project.id)}>
                <div className="relative">
                    <div className="absolute top-4 right-4 text-sm bg-cyan-500 px-2 py-0.5 rounded ">{project.year}</div>
                    <img className="w-full object-cover" src={project.images[0]}/>
                </div>
                <div className="p-4 rounded-b-lg md:flex-grow">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <div className="">{project.shortDescription}</div>
                </div>
            </div>
        </>
    )
}