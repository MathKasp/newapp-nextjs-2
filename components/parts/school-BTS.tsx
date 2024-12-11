import React from "react";
import Image from 'next/image';

export default function School() {
    return (
        <>
            <section className="bg-gray-100">
                <br/>
                <h1 className="text-5xl font-extrabold text-gray-900 text-center" >Parcour Proffesionnel</h1>
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Isitech</h2>
                            <p className="mt-4 text-gray-600 text-lg"> C'est mon école hihi ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                            <div className="mt-8">
                                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                    <span className="ml-2">&#8594;</span></a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                        <Image
                            src="/isitechlocaux.png"
                            width={600}
                            height={600}
                            alt="Locaux de l'école"
                        />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="mt-12 md:mt-0">
                        <Image
                            src="/cerema.png"
                            width={600}
                            height={600}
                            alt="CEREMA"
                        />
                        </div>
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ministère de la Transition Ecologique</h2>
                            <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                            <div className="mt-8">
                                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                    <span className="ml-2">&#8594;</span></a>
                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
        </>
    )
}