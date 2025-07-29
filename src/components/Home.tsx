import { useState } from 'react';
import NodejsSVG from '../assets/icons/backend/nodejs.svg?react';
import TypeScriptSVG from "../assets/icons/backend/typescript.svg?react"
import GithubSVG from "../assets/icons/various/gitHubDark.svg?react"
import ReactSVG from "../assets/icons/frontend/reactDark.svg?react"
import ViteSVG from "../assets/icons/frontend/vitejs.svg?react"
import TailwindSVG from "../assets/icons/frontend/tailwindcss.svg?react"





export function Home() {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("tomasperezpsn@outlook.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 400);
    };


    return (<>
        <div id="home" className="flex flex-col items-center bg-gradient-to-b from-blue-main via-80% and to-white dark:to-black  ">
            <div className='flex flex-col items-center justify-between px-6 py-4'>
                <h2 className="mt-36 text-yellow-text text-8xl">Software Developer</h2>
                <h1 className='text-white text-[148px] -translate-y-[30px]'>Pérez Tomás</h1>
                <h3 className='text-gray-text text-4xl -translate-y-[40px]'>Full Stack Node.js</h3>
            </div>

            <div className='flex items-center max-h-16 -translate-y-[50px]'>
                <NodejsSVG className='w-10 h-10 m-3' />
                <TypeScriptSVG className='w-10 h-10 m-3' />
                <TailwindSVG className='w-10 h-10 m-3' />
                <ReactSVG className='w-10 h-10 m-3' />
                <ViteSVG className='w-10 h-10 m-3' />
                <GithubSVG className='w-10 h-10 m-3' />
            </div>
            <div className='min-w-[350px] flex justify-between -translate-y-[40px]'>
                <button className="min-w-[150px] px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold cursor-pointer">Linkedin</button>
                <button className="min-w-[150px] px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold cursor-pointer">Descargar CV</button>
            </div>

            <div className='flex -translate-y-[30px]'>
                <p className='text-white text-2xl'>tomasperezpsn@outlook</p>
                <button className='ml-3' onClick={handleCopy}>
                    {copied ? <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                    </svg>
                        : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd" />
                        </svg>
                    }
                </button >
            </div >
        </div >



    </>


    )
}