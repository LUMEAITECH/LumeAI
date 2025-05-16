"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Image from "next/image";
import { TypingAnimation } from "./ui/typing-animation";

const sections = [
    {
        section: (
            <div key={1} className="h-screen grid grid-cols-1 lg:grid-cols-3 w-full px-4 lg:p-16 items-center justify-between snap-center">
                <h1 className="text-4xl font-bold text-center lg:text-start text-shadow-xl w-full lg:w-[350px] col-span-2">
                    Lume AI
                </h1>
                <TypingAnimation 
                    className="text-xl text-center lg:text-start text-shadow-xl w-full lg:w-[350px] h-[150px]" 
                    duration={50} 
                    startOnView={true}
                >
                    Lume AI empowers you to create immersive and intelligent agents to enrich your world.
                </TypingAnimation>
            </div>
        )
    },
    {
        section: (
            <div
                key={2}
                className="h-screen grid grid-cols-1 lg:grid-cols-3 w-full px-4 pb-10 lg:p-16 items-center justify-between snap-center"
            >
                {/* Image and Text Wrapper */}
                <div className="flex flex-col items-center lg:items-start justify-center mb-16 col-span-2">
                    {/* Centered Image */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/inverted_image-removebg-preview.png"
                            alt="Lume AI"
                            width={200}
                            height={200}
                            className="group-hover/bento:-translate-x-2 rounded-xl object-contain mb-4 relative -left-10"
                        />
                        {/* Heading Text */}
                        <h1 className="text-4xl font-bold text-center lg:text-start text-shadow-xl w-[350px] h-[150px]">
                            Unlimited Potential with AI Agents
                        </h1>
                    </div>
                </div>
        
                {/* Typing Animation */}
                <div className="flex items-start mt-10 lg:mt-0">
                    <TypingAnimation
                        className="text-xl text-center lg:text-start text-shadow-xl w-[350px] h-[150px] relative left-10 top-30"
                        duration={50}
                        startOnView={true}
                    >
                        Create stunning 3D characters brought to life by AI-generated,
                        seamlessly synchronized for truly immersive interactions.
                    </TypingAnimation>
                </div>
            </div>
        )
        
        
    },

    {
        section: (
            <div
                key={3}
                className="h-screen grid grid-cols-1 lg:grid-cols-3 w-full px-4 pb-10 lg:p-16 items-center justify-between snap-center"
            >
                {/* Image and Text Wrapper */}
                <div className="flex flex-col items-center lg:items-start justify-center mb-16 col-span-2">
                    {/* Centered Image */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/2.png"
                            alt="Lume AI"
                            width={200}
                            height={200}
                            className="group-hover/bento:-translate-x-2 rounded-xl object-contain mb-4 relative -left-10"
                        />
                        {/* Heading Text */}
                        <h1 className="text-4xl font-bold text-center lg:text-start text-shadow-xl w-[350px] h-[150px]">
                            AI agents with Personality
                        </h1>
                    </div>
                </div>
        
                {/* Typing Animation */}
                <div className="flex items-start mt-10 lg:mt-0">
                    <TypingAnimation
                        className="text-xl text-center lg:text-start text-shadow-xl w-[350px] h-[150px] relative left-10 top-30"
                        duration={50}
                        startOnView={true}
                    >
                        Explore multilingual, emotionally expressive, and customizable voices for unique interactions.

                    </TypingAnimation>
                </div>
            </div>
        )
        
        
    },
    {
        section: (
            <div key={4} className="h-screen grid grid-cols-1 lg:grid-cols-3 w-full px-4 pb-10 lg:p-16 items-center justify-between snap-center">
                <div className="flex flex-col items-center lg:items-start justify-center mb-16 col-span-2">
                    <Image 
                        src="/3.png" 
                        alt="Lume AI" 
                        width={200} 
                        height={200} 
                        className="group-hover/bento:-translate-x-2 w-1/4 lg:w-1/3 min-h-[6rem] rounded-xl object-contain"
                    />
                    <h1 className="text-4xl font-bold text-center lg:text-start text-shadow-xl w-[350px]">
                        Data-Driven Insights
                    </h1>
                </div>
                <TypingAnimation 
                    className="text-xl text-center lg:text-start text-shadow-xl w-[350px] h-[150px]" 
                    duration={50} 
                    startOnView={true}
                >
                    Leverage AI-powered analytics to understand your audience and optimize your content.
                </TypingAnimation>
            </div>
        )
    },
    {
        section: (
            <div key={5} className="h-screen grid grid-cols-1 lg:grid-cols-3 w-full px-4 pb-10 lg:p-16 items-center justify-between snap-center">
                <div className="flex flex-col items-center lg:items-start justify-center mb-16 col-span-2">
                    <Image 
                        src="/inverted_image-removebg-preview.png"
                        alt="Lume AI" 
                        width={200} 
                        height={200} 
                        className="group-hover/bento:-translate-x-2 rounded-xl object-contain mb-4"
                    />
                    <h1 className="text-4xl font-bold text-center lg:text-start text-shadow-xl w-[350px]">
                        Tailored Experiences
                    </h1>
                </div>
                <TypingAnimation 
                    className="text-xl text-center lg:text-start text-shadow-xl w-[350px] h-[150px]" 
                    duration={50} 
                    startOnView={true}
                >
                    Personalize your AI agent&apos;s style, personality, and knowledge for any task or role.
                </TypingAnimation>
            </div>
        )
    },

    {
        section: (
            <div key={6} className="h-screen grid grid-cols-1 lg:grid-cols-3 w-full px-4 pb-10 lg:p-16 items-center lg:justify-between snap-center">
                <div className="flex flex-col items-center lg:items-start justify-center mb-16 col-span-2">
                    <Image 
                        src="/4.png" 
                        alt="Lume AI" 
                        width={200} 
                        height={200} 
                        className="group-hover/bento:-translate-x-2 rounded-xl object-contain w-[250px]"
                    />
                    <h1 className="text-4xl font-bold text-center lg:text-start text-shadow-xl w-[350px]">
                        Scalable Cloud Architecture
                    </h1>
                </div>
                <TypingAnimation 
                    className="text-xl text-center lg:text-start text-shadow-xl w-full lg:w-[350px] h-[150px]" 
                    duration={50} 
                    startOnView={true}
                >
                    Handle high traffic demands with autoscaling servers and efficient load balancing, ensuring smooth AI-driven interactions at any scale.
                </TypingAnimation>
            </div>
        )
    }
];

export default function SnapScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentSection, setCurrentSection] = useState(0);

    const [play] = useSound("/background.mp3", {
        volume: 0.1,
        interrupt: true
    });

    const [playSection1, { stop: stopSection1 }] = useSound("/section-1.mp3", {
        volume: 0,
        interrupt: true
    });
    const [playSection2, { stop: stopSection2 }] = useSound("/section-2.mp3", {
        volume: 0.15,
        interrupt: true
    });
    const [playSection3, { stop: stopSection3 }] = useSound("/section-3.mp3", {
        volume: 0.15,
        interrupt: true
    });
    const [playSection4, { stop: stopSection4 }] = useSound("/section-4.mp3", {
        volume: 0.15,
        interrupt: true
    });
    const [playSection5, { stop: stopSection5 }] = useSound("/section-5.mp3", {
        volume: 0.15,
        interrupt: true
    });
    const [playSection6, { stop: stopSection6 }] = useSound("/section-6.mp3", {
        volume: 0.15,
        interrupt: true
    });

    useEffect(() => {
        play();
    }, [play]);

    useEffect(() => {
        stopSection1();
        stopSection2();
        stopSection3();
        stopSection4();
        stopSection5();
        stopSection6();
        switch (currentSection) {
            case 0:
                playSection1();
                break;
            case 1:
                playSection2();
                break;
            case 2:
                playSection3();
                break;
            case 3:
                playSection4();
                break;
            case 4:
                playSection5();
                break;
            case 5:
                playSection6();
                break;
            default:
                break;
        }
    }, [currentSection, stopSection1, stopSection2, stopSection3, stopSection4, stopSection5, stopSection6, 
        playSection1, playSection2, playSection3, playSection4, playSection5, playSection6]);

    return (
        <div className="relative h-screen overflow-hidden">
            <div ref={containerRef} className="h-full overflow-y-scroll snap-y snap-mandatory">
                {sections.map((section, i) => (
                    <motion.div
                        key={i}
                        ref={ref => {
                            if (ref) {
                                const observer = new IntersectionObserver(
                                    ([entry]) => {
                                        if (entry.isIntersecting) {
                                            setCurrentSection(i);
                                        }
                                    },
                                    { threshold: 0.5 }
                                );
                                observer.observe(ref);
                            }
                        }}
                        className="h-screen flex items-center justify-center snap-center"
                    >
                        {section.section}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
