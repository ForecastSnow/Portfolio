import { useState } from "react";
import { ProjectCard } from "./projectComponents/ProjectCard.tsx";
import NodejsSVG from "../assets/icons/backend/nodejs.svg?react";
import TypeScriptSVG from "../assets/icons/backend/typescript.svg?react";
import ExpressSVG from "../assets/icons/backend/expressDark.svg?react";
import ReactSVG from "../assets/icons/frontend/reactDark.svg?react";
import ViteSVG from "../assets/icons/frontend/vitejs.svg?react";

const projects = [
    {
        typeCard: "Full Stack",
        subtitle: "Proyecto A",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, odio reprehenderit libero dolores quisquam accusamus corrupti provident et eligendi iusto modi, placeat voluptas",
        githubLink: "https://github.com/ForecastSnow",
        icons: [NodejsSVG, TypeScriptSVG],
    },
    {
        typeCard: "Backend",
        subtitle: "Proyecto B",
        description: "Backend como dios manda",
        githubLink: "https://github.com/ForecastSnow",
        icons: [ExpressSVG, ReactSVG],
    },
    {
        typeCard: "Frontend",
        subtitle: "Proyecto C",
        description: "Frontend que rompe retinas",
        githubLink: "https://github.com/ForecastSnow",
        icons: [ViteSVG],
    },
];

export function Project() {
    const [activeType, setActiveType] = useState("Todos");

    const filteredProjects =
        activeType === "Todos"
            ? projects
            : projects.filter((project) => project.typeCard === activeType);

    return (
        <section id="projects" className="w-full min-h-[1158px] flex justify-around bg-gradient-to-b from-black to-blue-second">
            <div className="w-7xl mt-18">
                <h3 className="text-2xl font-semibold mb-5 text-yellow-text">Mis proyectos destacados</h3>

                <ul className="flex justify-between w-[400px] mt-8 bg-gradient-to-r from-blue-600 via-80% to-purple-600 rounded-full border">
                    <li
                        onClick={() => setActiveType("Todos")}
                        className={`cursor-pointer px-4 py-2 rounded-full text-black border-white transition-colors ${activeType === "Todos" ? "bg-fuchsia-950/50" : "hover:bg-fuchsia-950/30"
                            }`}
                    >
                        Todos
                    </li>

                    <li
                        onClick={() => setActiveType("Full Stack")}
                        className={`cursor-pointer px-4 py-2 rounded-full text-black border-white transition-colors ${activeType === "Full Stack" ? "bg-fuchsia-950/50" : "hover:bg-fuchsia-950/30"
                            }`}
                    >
                        Full Stack
                    </li>

                    <li
                        onClick={() => setActiveType("Frontend")}
                        className={`cursor-pointer px-4 py-2 rounded-full text-black border-white transition-colors ${activeType === "Frontend" ? "bg-fuchsia-950/50" : "hover:bg-fuchsia-950/30"
                            }`}
                    >
                        Frontend
                    </li>

                    <li
                        onClick={() => setActiveType("Backend")}
                        className={`cursor-pointer px-4 py-2 rounded-full text-black border-white transition-colors ${activeType === "Backend" ? "bg-fuchsia-950/80" : "hover:bg-fuchsia-950/30"
                            }`}
                    >
                        Backend
                    </li>
                </ul>

                <div className="flex flex-col mt-8 min-h-[]">{filteredProjects.map((item, index) => (
                    <ProjectCard key={index} {...item} />
                ))}
                </div>
            </div>

        </section >
    );
}
