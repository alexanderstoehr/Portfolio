// Nice tut for glassmorphism: https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css

import allProjects from "../../data/projects.json";


export default function ProjectPopup({projectId, handleProjectClick}) {
    console.log("project id", projectId)
    console.log("all projects", allProjects)
    const currentProject = allProjects.find(item => item.id === projectId);
    console.log("current project", currentProject)

    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center z-40 m-4 max-h-full md:max-h-none">
            <div onClick={() => handleProjectClick(0)} className="fixed inset-0 bg-black/80 z-40"></div>
            <div
                className="absolute max-h-full md:max-h-[80vh] max-w-full md:max-w-3xl overflow-y-auto p-6 md:p-16 rounded-lg border border-white/10 bg-white/10 shadow-lg m-auto backdrop-blur-md z-50">
                <div className=" z-10 text-neutral-300 flex flex-col ">
                    <img className="cursor-pointer h-6 absolute top-0 right-0 m-4 md:m-6 hover:scale-110"
                         onClick={() => handleProjectClick(0)}
                         src="/close-popup.svg"/>
                    <div className="flex flex-col  gap-8 md:gap-16">
                        <div className="flex-1">
                            <div className="text-xl mb-2 font-bold">{currentProject.title}</div>
                            <div className="mb-2">{currentProject.shortDescription}</div>
                            <div className="mb-8">{currentProject.description}</div>
                            <div className="text-lg font-bold">Highlights</div>
                            <div className="mb-8">
                                {currentProject.features.map((feature, ind) => (
                                    <div key={ind} className="flex gap-2">
                                        <div className="pl-2">• {feature}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col md:flex-row justify-between  gap-4 md:gap-16">
                                <div>
                                    <div className="text-lg font-bold">Technology</div>
                                    <div className="mb-4">
                                        {currentProject.stack.map((tech, ind) => (
                                            <div key={ind} className="flex gap-2">
                                                <div className="pl-2">• {tech}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {currentProject.figma &&
                                        <>
                                            <div className="text-lg font-bold">Links</div>
                                            <div className="mb-4 hover:underline"><a target="_blank" href={currentProject.figma}>• Figma
                                                Mockup</a></div>
                                        </>
                                    }

                                </div>
                                <img className="rounded-lg mb-4 " src={currentProject.images[0]}/>
                                {/*<div className="flex flex-1 h-full overflow-y-auto">
                                    {currentProject.images.map((image, ind) => (
                                        <img key={ind} className="rounded-lg mb-4 w-full " src={image}/>
                                    ))}
                                </div>*/}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}