// Nice tut for glassmorphism: https://www.epicweb.dev/tips/creating-glassmorphism-effects-with-tailwind-css

import allProjects from "../../data/projects.json"

export default function ProjectPopup({ projectId, handleProjectClick }) {
    console.log("project id", projectId)
    console.log("all projects", allProjects)
    const currentProject = allProjects.find((item) => item.id === projectId)
    console.log("current project", currentProject)

    return (
        <div className="fixed inset-0 z-40 m-4 flex max-h-full flex-col items-center justify-center md:max-h-none">
            <div
                onClick={() => handleProjectClick(0)}
                className="fixed inset-0 z-40 bg-black/80"></div>
            <div className="absolute z-50 m-auto max-h-full max-w-full overflow-y-auto rounded-lg border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md md:max-h-[80vh] md:max-w-3xl md:p-16">
                <div className="z-10 flex flex-col text-neutral-300">
                    <img
                        className="absolute right-0 top-0 m-4 h-6 cursor-pointer hover:scale-110 md:m-6"
                        onClick={() => handleProjectClick(0)}
                        src="/close-popup.svg"
                    />
                    <div className="flex flex-col gap-8 md:gap-16">
                        <div className="flex-1">
                            <div className="mb-2 text-xl font-bold">
                                {currentProject.title}
                            </div>
                            <div className="mb-2">
                                {currentProject.shortDescription}
                            </div>
                            <div className="mb-8">
                                {currentProject.description}
                            </div>
                            <div className="text-lg font-bold">Highlights</div>
                            <div className="mb-8">
                                {currentProject.features.map((feature, ind) => (
                                    <div
                                        key={ind}
                                        className="flex gap-2">
                                        <div className="pl-2">• {feature}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-16">
                                <div>
                                    <div className="text-lg font-bold">
                                        Technology
                                    </div>
                                    <div className="mb-4">
                                        {currentProject.stack.map(
                                            (tech, ind) => (
                                                <div
                                                    key={ind}
                                                    className="flex gap-2">
                                                    <div className="pl-2">
                                                        • {tech}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {currentProject.figma && (
                                        <>
                                            <div className="text-lg font-bold">
                                                Links
                                            </div>
                                            <div className="mb-4">
                                                <a
                                                    className="hover:underline"
                                                    target="_blank"
                                                    href={currentProject.figma}>
                                                    • Figma Mockup
                                                </a>
                                                {currentProject.link && (
                                                    <>
                                                        <br />
                                                        <a
                                                            className="hover:underline"
                                                            target="_blank"
                                                            href={
                                                                currentProject.link
                                                            }>
                                                            • Project Link
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <img
                                    className="mb-4 h-fit rounded-3xl"
                                    src={currentProject.images[0]}
                                />
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
