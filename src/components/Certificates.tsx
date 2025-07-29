import { CertificatesCard } from "./certificatesComponents/CertificatesCard";


const certificatesData = [

    {
        imgURI: "./img/certificates/js.webp",
        title: "JavaScript",
        subtitle: "Certificado en JavaScript, la logica del navegador.",

    },
    {
        imgURI: "./img/certificates/web.webp",
        title: "Desarrollo Web",
        subtitle: "HTML y CSS: Fundamentos para Desarrollo Web Estático",

    },
    {
        imgURI: "./img/certificates/react.webp",
        title: "React Js",
        subtitle: "Desarrollo con React y contenido dinamico con APIs",

    },
    {
        imgURI: "./img/certificates/carreraFront.webp",
        title: "Carrera Frontend",
        subtitle: "Integracion de multiples tecnologias vite, react, react router para SPAs modernas",

    },
    {
        imgURI: "./img/certificates/backend1.webp",
        title: "Backend Avanzado",
        subtitle: "Node.js, Express, WebSockets y Bases de Datos NoSQL",

    },
    {
        imgURI: "./img/certificates/backend2.webp",
        title: "Backend Avanzado 2",
        subtitle: "JWT, Passport y Arquitectura Repository",

    },
    {
        imgURI: "./img/certificates/backend3.webp",
        title: "Backend Avanzado 3",
        subtitle: "Testing, Contenedores y Diseño Escalable con NestJS",

    },

]

export function Certificates() {

    return (

        <>
            <div id="certificate" className="bg-blue-main flex flex-col items-center justify-center w-full pb-8">

                <div className="w-7xl mt-14 border-t border-white" >

                    <h3 className="mt-12 mb-24 text-2xl font-semibold text-yellow-text">Certificaciones</h3>

                    <div className="grid grid-cols-2 grid-rows-2 gap-10">
                        {
                            certificatesData.map((item, index) => <CertificatesCard key={index} {...item} />)
                        }
                    </div>

                </div >
            </div>



        </>


    )



}