export default function ProjectListingSingle({project}) {
    return (
        <div className="flex flex-col md:h-full">
            <div className=""><img className="w-full object-cover" src={project.images[0]}/></div>
            <div className="p-4 border solid border-gray-200 rounded-b-lg md:flex-grow">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <div className="">{project.shortDescription}</div>
            </div>
        </div>
    )
}