import RickButton from '../rick'
import Image from 'next/image'

// "use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from '../ui/aurora-background';

export default function Banner() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Mathis KASPERCZAK</h1>
                        <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">BTS SIO SLAM 2ème année. </h2>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Bienvenu sur mon Portfolio !</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg ">
                            Découvrir mon profil
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <RickButton />
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image
                            src="/rayanviktor.jpg"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}



//     <AuroraBackground>
//     <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//             delay: 0.3,
//             duration: 0.9,
//             ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//     >
//         <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
//             Background lights are cool you know.
//         </div>
//         <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
//             And this, is chemical burn.
//         </div>
//         <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
//             Debug now
//         </button>
//     </motion.div>
// </AuroraBackground>