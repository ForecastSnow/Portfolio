import { LearningTimeLine } from "./aboutMeComponents/LearningTimeLine"

export function AboutMe() {


    return (
        <>
            <div id="aboutMe" className="bg-gradient-to-b from-cyan-950 to-blue-main flex flex-col items-center justify-center w-full ">
                <div className="w-7xl mt-14 border-t border-white">
                    <h3 className="text-3xl my-12 text-yellow-text">Sobre Mi</h3>
                    <div className="flex flex-row items-center justify-evenly">
                        <div className="flex flex-col justify-between h-[300px] w-[500px] text-white">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam tempora nisi cum dignissimos aliquam aliquid nulla deserunt incidunt, debitis quam sit unde officia vitae? Fuga quam aliquid ea et placeat? lorem</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ex deserunt doloribus minima amet dolore cupiditate atque asperiores ullam iusto? Adipisci possimus libero dolorum quas cum qui laborum mollitia accusantium.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perferendis voluptatum placeat voluptatem quidem ipsa eius autem sequi labore laudantium? Provident consequuntur illo neque praesentium fuga architecto voluptatibus earum pariatur.</p>
                        </div>
                        <img className="rounded-full w-[350px] transform transition-transform duration-200 hover:scale-102" src="./img/MeAndKobeni3.png" alt="" />
                    </div>
                </div>

                <div>
                    <LearningTimeLine />
                </div>

            </div>

        </>

    )



}