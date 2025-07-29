import { useState, useEffect } from "react";

export function Navbar() {

    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem("theme") === "light") { return "light" } else { return "dark" }
    })

    useEffect(() => {

        if (theme === "dark") {
            document.querySelector("html")?.classList.add("dark")
        } else {
            document.querySelector("html")?.classList.remove("dark")
        }

    }, [theme])

    const changeTheme = () => {
        localStorage.setItem("theme", theme === "light" ? "dark" : "light")
        setTheme(currentTheme => currentTheme === "light" ? "dark" : "light")

    }

    return (
        <nav
            className={`fixed z-[9999] h-16 top-0 left-0 right-0 flex items-center justify-between backdrop-blur-md  "
                }`}>
            <div className="w-7xl mx-auto flex items-center justify-between">
                <ul className="flex gap-8">
                    <li onClick={() => { document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) }} className="text-white cursor-pointer hover:text-amber-300 transition">Inicio</li>
                    <li onClick={() => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) }} className="text-white cursor-pointer hover:text-amber-300 transition">Proyectos</li>
                    <li onClick={() => { document.getElementById("aboutMe")?.scrollIntoView({ behavior: "smooth" }) }} className="text-white cursor-pointer hover:text-amber-300 transition">Sobre mí</li>
                    <li onClick={() => { document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) }} className="text-white cursor-pointer hover:text-amber-300 transition">Skills</li>
                    <li onClick={() => { document.getElementById("certificate")?.scrollIntoView({ behavior: "smooth" }) }} className="text-white cursor-pointer hover:text-amber-300 transition">Certificaciones</li>

                </ul>


                <button onClick={() => changeTheme()} className=" p-2 rounded hover:bg-amber-300/30 transition">
                    {theme === "dark" ? (
                        <svg
                            className="w-6 h-6 text-amber-100"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                                clipRule="evenodd"
                            />
                        </svg>

                    ) : (

                        <svg
                            className="w-6 h-6 text-amber-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </button>
            </div>


        </nav>
    );

}




