

export function Footer() {

    return (

        <>
            <footer className="bg-blue-main flex justify-center items-center h-32 ">
                <button onClick={() => { document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) }} className="text-white text-2xl flex cursor-pointer hover:text-yellow-text">Volver al inicio<svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                </svg></button>
            </footer>
        </>




    )




}