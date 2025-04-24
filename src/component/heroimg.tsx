"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
    "/A_Million_Little_Miracles_Gratitude_journal.jpg",
    "/Sermon_Notes.jpg",
    "/bloom_journal.jpg",
];

export default function StackedCards() {
    const [imageData, setImageData] = useState([""]);
    useEffect(() => {
        setImageData(images);
    }, []);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const moveLeft = useTransform(scrollYProgress, [0, 0], ["-60%", "-50%"]);
    const moveRight = useTransform(scrollYProgress, [0, 0], ["60%", "50%"]);
    const moveUp = useTransform(scrollYProgress, [0, 0], ["0%", "0%"]);
    const moveDown = useTransform(scrollYProgress, [0, 0], ["5rem", "5rem"]);

    return (
        <div ref={ref} className="animate-fade-down animate-once animate-delay-[500ms] flex justify-center items-center min-h-screen mx-auto lg:-mt-0 md:-mt-[3rem] lg:-mb-0 md:-mb-5 -mb-[20rem]">
            <div className="relative min-w-[25.5rem] h-[35rem] lg:mx-auto md:mx-auto mx-2 left-0 right-0">
                {imageData.map((src, index) => {
                    const isLeft = index === 2;
                    const isRight = index === 0;
                    const isCenter = index === 1;

                   
                    const altText = src
                        .split("/")
                        .pop()
                        ?.replace(/_/g, " ") 
                        .replace(".jpg", ""); 

                    return (
                        <motion.div
                            key={index}
                            style={{
                                x: isLeft ? moveLeft : isRight ? moveRight : 0,
                                y: isLeft || isRight ? moveDown : isCenter ? moveUp : 0,
                                rotateZ: isLeft ? -15 : isRight ? 15 : 0,
                                zIndex: imageData.length - index,
                                transformStyle: "preserve-3d",
                            }}
                            className="absolute rounded-2xl overflow-hidden lg:w-full lg:h-full md:w-[80%] md:h-[80%] w-[40%] h-[40%] left-0 right-0 mx-auto"
                        >
                            <Image
                                src={src}
                                alt={altText || ""}
                                fill
                                sizes="(max-width: 479px) 69vw, (max-width: 767px) 65vw, (max-width: 991px) 48vw, 47vw"
                                className="object-cover rounded-2xl w-full h-full "
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
