// Nice tut for glassmorphism: https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css

import allProjects from "../../data/projects.json";


export default function ProjectPopup({projectId, handleProjectClick}) {
    console.log("project id", projectId)
    console.log("all projects", allProjects)
    const currentProject = allProjects.find(item => item.id === projectId);
    console.log("current project", currentProject)

    return (
        <div className="fixed inset-0 flex justify-center items-center z-40 m-4">
            <div onClick={() => handleProjectClick(0)} className="fixed inset-0 bg-black/80 z-40"></div>
            <div
                className="absolute max-h-full overflow-y: auto p-6 md:p-24 rounded-lg border border-white/10 bg-white/10 shadow-lg m-auto backdrop-blur-md z-50">
                <div className=" z-10 text-neutral-300 flex flex-col ">
                    <img className="cursor-pointer h-6 absolute top-0 right-0 m-4 md:m-12 hover:scale-110"
                         onClick={() => handleProjectClick(0)}
                         src="/close-popup.svg"/>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                        <div className="">
                            <div className="text-xl mb-2 font-bold">{currentProject.title}</div>
                            <div className="mb-2">{currentProject.shortDescription}</div>
                            <div className="mb-4">{currentProject.description}</div>
                            <div className="text-lg font-bold">Highlights</div>
                            <div className="mb-4">
                                {currentProject.features.map((feature, ind) => (
                                    <div key={ind} className="flex gap-2">
                                        <div className="pl-2">• {feature}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-lg font-bold">Technology</div>
                            <div className="mb-4">
                                {currentProject.stack.map((tech, ind) => (
                                    <div key={ind} className="flex gap-2">
                                        <div className="pl-2">• {tech}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            {currentProject.images.map((image, ind) => (
                                <img key={ind} className="rounded-lg mb-4" src={image}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}