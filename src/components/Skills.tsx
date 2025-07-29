import { SkillCard } from "./skillsComponents/SkillsCard"
import ReactSVG from "../assets/icons/frontend/reactdark.svg?react"
import ViteSVG from "../assets/icons/frontend/vitejs.svg?react"
import Html5SVG from "../assets/icons/frontend/html5.svg?react"
import CssSVG from "../assets/icons/frontend/css.svg?react"
import tailwindSVG from "../assets/icons/frontend/tailwindcss.svg?react"
import ExpressSVG from "../assets/icons/backend/expressdark.svg?react"
import MongoDBSVG from "../assets/icons/backend/mongodb.svg?react"
import TypeScriptSVG from "../assets/icons/backend/typescript.svg?react"
import NestJS from "../assets/icons/backend/nestjs.svg?react"
import JestSVG from "../assets/icons/backend/jest.svg?react"
import mysqlSVG from "../assets/icons/backend/mysql.svg?react"
import NodeSVG from "../assets/icons/backend/nodejs.svg?react"
import VscodeSVG from "../assets/icons/various/vscode.svg?react"
import GithubSVG from "../assets/icons/various/githubdark.svg?react"
import Git from "../assets/icons/various/git.svg?react"
import Cs6 from "../assets/icons/various/photoshop.svg?react"
import Docker from "../assets/icons/various/docker.svg?react"
import Npm from "../assets/icons/various/npm.svg?react"
import Go from "../assets/icons/backend/godark.svg?react"

export function Skills() {


    const skillsData = [
        {
            section: "Frontend",
            icons: [Html5SVG, CssSVG, ViteSVG, ReactSVG, tailwindSVG]

        },
        {
            section: "Backend",
            icons: [NodeSVG, TypeScriptSVG, ExpressSVG, NestJS, JestSVG, mysqlSVG, MongoDBSVG]

        },
        {
            section: "Aprendiendo",
            icons: [Docker, Go]

        },
        {
            section: "Herramientas",
            icons: [VscodeSVG, Npm, GithubSVG, Git, Cs6]

        },




    ]


    return (

        <>
            <div id="skills" className="flex flex-col items-center justify-center w-full h-[1300px] bg-gradient-to-b from-blue-second to-cyan-950 ">



                <div className="w-7xl border-t border-white">

                    <h3 className="mt-24 mb-24 text-2xl font-semibold text-yellow-text" >Mis Skills</h3>

                    <div className="w-full flex flex-col items-center">
                        <div className="grid grid-cols-2 grid-rows-2 gap-28">

                            {
                                skillsData.map((items, index) => <SkillCard key={index} {...items} />)
                            }
                        </div>
                    </div>


                </div>

            </div>


        </>


    )


}