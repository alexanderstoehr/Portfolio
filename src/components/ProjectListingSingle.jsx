export default function ProjectListingSingle({ project, handleProjectClick }) {
    return (
        <>
            <div
                id={project.id}
                className="z-0 flex cursor-pointer flex-col rounded-2xl shadow-md shadow-gray-400 transition duration-300 hover:scale-105 hover:shadow-cyan-400 dark:shadow-white/10 dark:hover:shadow-cyan-300 md:h-full"
                onClick={() => handleProjectClick(project.id)}>
                <div className="relative">
                    <div className="absolute right-4 top-4 rounded bg-cyan-500 px-2 py-0.5 text-sm">
                        {project.year}
                    </div>
                    <img
                        className="w-full object-cover"
                        src={project.images[0]}
                    />
                </div>
                <div className="rounded-b-lg p-4 md:flex-grow">
                    <div className="mb-2 text-xl font-bold">
                        {project.title}
                    </div>
                    <div className="">{project.shortDescription} </div>
                </div>
            </div>
        </>
    )
}
