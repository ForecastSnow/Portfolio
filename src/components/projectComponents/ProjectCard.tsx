import type { SVGProps } from "react";
import GithubSVG from "../../assets/icons/various/githubdark.svg?react"

type ProjectCard = {

    typeCard: string;
    subtitle: string;
    description: string;
    githubLink: string;
    icons: React.ComponentType<SVGProps<SVGSVGElement>>[];
}


export function ProjectCard({ typeCard, subtitle, description, githubLink, icons }: ProjectCard) {


    return (



        <>
            <div className="flex flex-row justify-between items-center w-full h-[340px] border-t border-gray-500 transform transition-transform duration-200 hover:scale-105">
                <div className="flex-col items-end h-[280px]">
                    <p className="text-blue-400 text-[20px]">{typeCard}</p>

                    <h4 className="text-white text-3xl mt-2 mb-2">{subtitle}</h4>

                    <p className="text-white h-[80px] w-[540px] mb-2">{description}</p>

                    <div>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-[100px] px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-950 hover:from-fuchsia-800 hover:to-fuchsia-950 transform scale-100 hover:scale-102 transition-all duration-300 will-change-transform"
                        >
                            
                            Código<GithubSVG className="mt-[3px] ml-[7px] w-[14px] min-w-[14px] min-h-[14px] h-[14px]"/>
                        </a>
                    </div>

                    <div className="flex flex-row mt-6">
                        {
                            icons.map((Icon, index) => <Icon className="w-[48px] h-[48px] mr-2" key={index} />)
                        }


                    </div>
                </div>


                <img className="h-[280px] w-[440px] rounded-xl " src="./web.jpg"></img>

            </div>


        </>

    )


}