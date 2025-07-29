import type { SVGProps } from "react";

type SkillCardProps = {
    section: string;
    icons: React.ComponentType<SVGProps<SVGSVGElement>>[];
};

export function SkillCard({ section, icons }: SkillCardProps) {
    return (
        <div className="flex flex-col items-center w-[350px] h-[385px] bg-gradient-to-bl from-fuchsia-950 to-indigo-950 border border-cyan-800 rounded-xl shadow-[0_0_15px_3px_rgba(0,255,255,0.7)] transform transition-transform duration-300 hover:scale-105">
            < h4 className = " text-white text-3xl m-4" > { section }</h4 >
                <div className="grid grid-cols-3 grid-rows-3 gap-12">
                    {icons.map((Icon, index) => <Icon className="w-16 h-16" key={index} />)}
                </div>
        </div >
    );
}
