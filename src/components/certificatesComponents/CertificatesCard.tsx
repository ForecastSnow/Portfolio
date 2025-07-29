import { useState } from "react";

type CertificatesCard = {

    imgURI: string;
    title: string;
    subtitle: string;

}


export function CertificatesCard({ imgURI, title, subtitle }: CertificatesCard) {

    const [isOpen, setIsOpen] = useState(false);

    return (


        <div className="h-[150px] bg-gradient-to-bl from-violeta-custom to-blue-second flex flex-row justify-between rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/20">
            <div className="m-4 w-[372px]">
                <h4 className="text-white text-4xl">{title}</h4>
                <p className="text-white mt-2.5">{subtitle}</p>
            </div>
            <img
                src={imgURI}
                alt={title}
                onClick={() => setIsOpen(true)}
                className="cursor-zoom-in  w-[182px] h-[118px] m-4 rounded shadow-md hover:scale-105 transition-transform duration-200"
            />
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                >
                    <img
                        src={imgURI}
                        alt={title}
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-[80%] max-h-[80%] rounded shadow-2xl cursor-zoom-out transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}
        </div>

    )



}