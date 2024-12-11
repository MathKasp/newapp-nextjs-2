'use client'

import { motion } from "framer-motion";
import { AuroraBackground } from '../ui/aurora-background';
import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Skills() {
    return (
        <>
            <div>
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.9,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                            Technologies maitrisées
                        </div>
                        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                            Au cours de mon parcours et de mes formations.
                        </div>
                        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                            Debug now
                        </button>
                        <Card className="py-4">
                            <CardBody className="flex flex-row justify-between overflow-visible py-2">
                                <div className='flex flex-col items-center'>
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="html-logo.webp"
                                        width={270}
                                    />
                                    <p>HTML / CSS</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="sql-logo.webp"
                                        width={230}
                                    />
                                    <p>SQL</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="Logo_C_sharp.webp"
                                        width={270}
                                    />
                                    <p>C#</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="python-logo.webp"
                                        width={300}
                                    />
                                    <p>Python</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="Typescript_logo_2020.webp"
                                        width={300}
                                    />
                                    <p>TypeScript</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src="javascript-logo-0.webp"
                                        width={300}
                                    />
                                    <p>JavaScript</p>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </AuroraBackground>
            </div>
        </>
    )
}
